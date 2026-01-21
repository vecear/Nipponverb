const Kuroshiro = require('kuroshiro');
const KuromojiAnalyzer = require('kuroshiro-analyzer-kuromoji');

// Kuroshiro might be packaged oddly.
const K = Kuroshiro.default || Kuroshiro;
const A = KuromojiAnalyzer.default || KuromojiAnalyzer;

async function test() {
    try {
        const kuroshiro = new K();
        await kuroshiro.init(new A({ dictPath: 'node_modules/kuromoji/dict' }));
        const result = await kuroshiro.convert("音楽を聞く", { to: "hiragana", mode: "furigana" });
        console.log(result);
    } catch (e) {
        console.error(e);
    }
}

test();
