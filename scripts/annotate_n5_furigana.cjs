const fs = require('fs')
const path = require('path')
const Kuroshiro = require('kuroshiro')
const KuromojiAnalyzer = require('kuroshiro-analyzer-kuromoji')

const K = Kuroshiro.default || Kuroshiro
const A = KuromojiAnalyzer.default || KuromojiAnalyzer

const targetPath = path.join(__dirname, '..', 'src', 'data', 'details', 'n5.ts')

const cjkRegex = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/

const normalizeCjkCompatibility = (text) => {
    return Array.from(text).map((ch) => {
        const normalized = ch.normalize('NFKC')
        if (normalized !== ch && normalized.length === 1 && cjkRegex.test(normalized)) {
            return normalized
        }
        return ch
    }).join('')
}

const stripFurigana = (text) => text.replace(/([\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff々]+)\{[^}]+\}/g, '$1')

const rubyToBrace = (text) => {
    return text.replace(/<ruby>([\s\S]*?)<\/ruby>/g, (_match, inner) => {
        const rtMatch = inner.match(/<rt>([\s\S]*?)<\/rt>/)
        const base = inner
            .replace(/<rp>[\s\S]*?<\/rp>/g, '')
            .replace(/<rt>[\s\S]*?<\/rt>/g, '')
            .replace(/<rb>/g, '')
            .replace(/<\/rb>/g, '')
        const reading = rtMatch ? rtMatch[1] : ''
        return reading ? `${base}{${reading}}` : base
    })
}

const unescapeTsString = (text) => {
    return text
        .replace(/\\n/g, '\n')
        .replace(/\\'/g, "'")
        .replace(/\\\\/g, '\\')
}

const escapeTsString = (text) => {
    return text
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'")
        .replace(/\n/g, '\\n')
}

const annotate = async (kuroshiro, rawText) => {
    const unescaped = unescapeTsString(rawText)
    const normalized = normalizeCjkCompatibility(unescaped)
    const stripped = stripFurigana(normalized)
    const converted = await kuroshiro.convert(stripped, { to: 'hiragana', mode: 'furigana' })
    const braced = rubyToBrace(converted)
    return escapeTsString(braced)
}

const collectReplacements = async (kuroshiro, content) => {
    const replacements = []

    const addReplacement = async (start, end, value) => {
        const annotated = await annotate(kuroshiro, value)
        replacements.push({ start, end, value: annotated })
    }

    const fieldRegex = /(japanese|sentence):\s*'((?:\\'|[^'])*)'/g
    let match
    while ((match = fieldRegex.exec(content)) !== null) {
        const full = match[0]
        const value = match[2]
        const valueStart = match.index + full.indexOf(value)
        const valueEnd = valueStart + value.length
        await addReplacement(valueStart, valueEnd, value)
    }

    const optionsRegex = /options:\s*\[([\s\S]*?)\]/g
    let optMatch
    while ((optMatch = optionsRegex.exec(content)) !== null) {
        const block = optMatch[1]
        const blockStart = optMatch.index + optMatch[0].indexOf(block)
        const stringRegex = /'((?:\\'|[^'])*)'/g
        let stringMatch
        while ((stringMatch = stringRegex.exec(block)) !== null) {
            const value = stringMatch[1]
            const valueStart = blockStart + stringMatch.index + 1
            const valueEnd = valueStart + value.length
            await addReplacement(valueStart, valueEnd, value)
        }
    }

    return replacements
}

const applyReplacements = (content, replacements) => {
    const sorted = [...replacements].sort((a, b) => b.start - a.start)
    let output = content
    for (const rep of sorted) {
        output = output.slice(0, rep.start) + rep.value + output.slice(rep.end)
    }
    return output
}

const main = async () => {
    const kuroshiro = new K()
    await kuroshiro.init(new A({ dictPath: path.join(__dirname, '..', 'node_modules', 'kuromoji', 'dict') }))

    const content = fs.readFileSync(targetPath, 'utf8')
    const replacements = await collectReplacements(kuroshiro, content)
    const updated = applyReplacements(content, replacements)

    fs.writeFileSync(targetPath, updated, 'utf8')
    console.log(`Updated ${replacements.length} strings in ${targetPath}`)
}

main().catch((error) => {
    console.error(error)
    process.exit(1)
})
