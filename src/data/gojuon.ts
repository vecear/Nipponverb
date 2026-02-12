// 五十音 (Gojūon) - Hiragana and Katakana

import { StructuredExplanation } from './questions/types'
import { formatStructuredExplanation } from '../utils/questionAdapters'
import { stripStemFurigana } from '../utils/furiganaUtils'

export const hiraganaData = [
    // あ行 (A-row)
    { char: 'あ', romaji: 'a', row: 'a' },
    { char: 'い', romaji: 'i', row: 'a' },
    { char: 'う', romaji: 'u', row: 'a' },
    { char: 'え', romaji: 'e', row: 'a' },
    { char: 'お', romaji: 'o', row: 'a' },

    // か行 (Ka-row)
    { char: 'か', romaji: 'ka', row: 'ka' },
    { char: 'き', romaji: 'ki', row: 'ka' },
    { char: 'く', romaji: 'ku', row: 'ka' },
    { char: 'け', romaji: 'ke', row: 'ka' },
    { char: 'こ', romaji: 'ko', row: 'ka' },

    // さ行 (Sa-row)
    { char: 'さ', romaji: 'sa', row: 'sa' },
    { char: 'し', romaji: 'shi', row: 'sa' },
    { char: 'す', romaji: 'su', row: 'sa' },
    { char: 'せ', romaji: 'se', row: 'sa' },
    { char: 'そ', romaji: 'so', row: 'sa' },

    // た行 (Ta-row)
    { char: 'た', romaji: 'ta', row: 'ta' },
    { char: 'ち', romaji: 'chi', row: 'ta' },
    { char: 'つ', romaji: 'tsu', row: 'ta' },
    { char: 'て', romaji: 'te', row: 'ta' },
    { char: 'と', romaji: 'to', row: 'ta' },

    // な行 (Na-row)
    { char: 'な', romaji: 'na', row: 'na' },
    { char: 'に', romaji: 'ni', row: 'na' },
    { char: 'ぬ', romaji: 'nu', row: 'na' },
    { char: 'ね', romaji: 'ne', row: 'na' },
    { char: 'の', romaji: 'no', row: 'na' },

    // は行 (Ha-row)
    { char: 'は', romaji: 'ha', row: 'ha' },
    { char: 'ひ', romaji: 'hi', row: 'ha' },
    { char: 'ふ', romaji: 'fu', row: 'ha' },
    { char: 'へ', romaji: 'he', row: 'ha' },
    { char: 'ほ', romaji: 'ho', row: 'ha' },

    // ま行 (Ma-row)
    { char: 'ま', romaji: 'ma', row: 'ma' },
    { char: 'み', romaji: 'mi', row: 'ma' },
    { char: 'む', romaji: 'mu', row: 'ma' },
    { char: 'め', romaji: 'me', row: 'ma' },
    { char: 'も', romaji: 'mo', row: 'ma' },

    // や行 (Ya-row)
    { char: 'や', romaji: 'ya', row: 'ya' },
    { char: 'ゆ', romaji: 'yu', row: 'ya' },
    { char: 'よ', romaji: 'yo', row: 'ya' },

    // ら行 (Ra-row)
    { char: 'ら', romaji: 'ra', row: 'ra' },
    { char: 'り', romaji: 'ri', row: 'ra' },
    { char: 'る', romaji: 'ru', row: 'ra' },
    { char: 'れ', romaji: 're', row: 'ra' },
    { char: 'ろ', romaji: 'ro', row: 'ra' },

    // わ行 (Wa-row)
    { char: 'わ', romaji: 'wa', row: 'wa' },
    { char: 'を', romaji: 'wo', row: 'wa' },
    { char: 'ん', romaji: 'n', row: 'wa' },

    // 濁音 (Dakuten)
    { char: 'が', romaji: 'ga', row: 'ga' },
    { char: 'ぎ', romaji: 'gi', row: 'ga' },
    { char: 'ぐ', romaji: 'gu', row: 'ga' },
    { char: 'げ', romaji: 'ge', row: 'ga' },
    { char: 'ご', romaji: 'go', row: 'ga' },

    { char: 'ざ', romaji: 'za', row: 'za' },
    { char: 'じ', romaji: 'ji', row: 'za' },
    { char: 'ず', romaji: 'zu', row: 'za' },
    { char: 'ぜ', romaji: 'ze', row: 'za' },
    { char: 'ぞ', romaji: 'zo', row: 'za' },

    { char: 'だ', romaji: 'da', row: 'da' },
    { char: 'ぢ', romaji: 'ji', row: 'da' },
    { char: 'づ', romaji: 'zu', row: 'da' },
    { char: 'で', romaji: 'de', row: 'da' },
    { char: 'ど', romaji: 'do', row: 'da' },

    { char: 'ば', romaji: 'ba', row: 'ba' },
    { char: 'び', romaji: 'bi', row: 'ba' },
    { char: 'ぶ', romaji: 'bu', row: 'ba' },
    { char: 'べ', romaji: 'be', row: 'ba' },
    { char: 'ぼ', romaji: 'bo', row: 'ba' },

    // 半濁音 (Handakuten)
    { char: 'ぱ', romaji: 'pa', row: 'pa' },
    { char: 'ぴ', romaji: 'pi', row: 'pa' },
    { char: 'ぷ', romaji: 'pu', row: 'pa' },
    { char: 'ぺ', romaji: 'pe', row: 'pa' },
    { char: 'ぽ', romaji: 'po', row: 'pa' },

    // 拗音 (Youon - Standard)
    { char: 'きゃ', romaji: 'kya', row: 'kya' }, { char: 'きゅ', romaji: 'kyu', row: 'kya' }, { char: 'きょ', romaji: 'kyo', row: 'kya' },
    { char: 'しゃ', romaji: 'sha', row: 'sha' }, { char: 'しゅ', romaji: 'shu', row: 'sha' }, { char: 'しょ', romaji: 'sho', row: 'sha' },
    { char: 'ちゃ', romaji: 'cha', row: 'cha' }, { char: 'ちゅ', romaji: 'chu', row: 'cha' }, { char: 'ちょ', romaji: 'cho', row: 'cha' },
    { char: 'にゃ', romaji: 'nya', row: 'nya' }, { char: 'にゅ', romaji: 'nyu', row: 'nya' }, { char: 'にょ', romaji: 'nyo', row: 'nya' },
    { char: 'ひゃ', romaji: 'hya', row: 'hya' }, { char: 'ひゅ', romaji: 'hyu', row: 'hya' }, { char: 'ひょ', romaji: 'hyo', row: 'hya' },
    { char: 'みゃ', romaji: 'mya', row: 'mya' }, { char: 'みゅ', romaji: 'myu', row: 'mya' }, { char: 'みょ', romaji: 'myo', row: 'mya' },
    { char: 'りゃ', romaji: 'rya', row: 'rya' }, { char: 'りゅ', romaji: 'ryu', row: 'rya' }, { char: 'りょ', romaji: 'ryo', row: 'rya' },

    // 拗音 (Youon - Dakuten)
    { char: 'ぎゃ', romaji: 'gya', row: 'gya' }, { char: 'ぎゅ', romaji: 'gyu', row: 'gya' }, { char: 'ぎょ', romaji: 'gyo', row: 'gya' },
    { char: 'じゃ', romaji: 'ja', row: 'ja' }, { char: 'じゅ', romaji: 'ju', row: 'ja' }, { char: 'じょ', romaji: 'jo', row: 'ja' },
    { char: 'びゃ', romaji: 'bya', row: 'bya' }, { char: 'びゅ', romaji: 'byu', row: 'bya' }, { char: 'びょ', romaji: 'byo', row: 'bya' },
    { char: 'ぴゃ', romaji: 'pya', row: 'pya' }, { char: 'ぴゅ', romaji: 'pyu', row: 'pya' }, { char: 'ぴょ', romaji: 'pyo', row: 'pya' },
]

export const katakanaData = [
    // ア行 (A-row)
    { char: 'ア', romaji: 'a', row: 'a', hiragana: 'あ' },
    { char: 'イ', romaji: 'i', row: 'a', hiragana: 'い' },
    { char: 'ウ', romaji: 'u', row: 'a', hiragana: 'う' },
    { char: 'エ', romaji: 'e', row: 'a', hiragana: 'え' },
    { char: 'オ', romaji: 'o', row: 'a', hiragana: 'お' },

    // カ行 (Ka-row)
    { char: 'カ', romaji: 'ka', row: 'ka', hiragana: 'か' },
    { char: 'キ', romaji: 'ki', row: 'ka', hiragana: 'き' },
    { char: 'ク', romaji: 'ku', row: 'ka', hiragana: 'く' },
    { char: 'ケ', romaji: 'ke', row: 'ka', hiragana: 'け' },
    { char: 'コ', romaji: 'ko', row: 'ka', hiragana: 'こ' },

    // サ行 (Sa-row)
    { char: 'サ', romaji: 'sa', row: 'sa', hiragana: 'さ' },
    { char: 'シ', romaji: 'shi', row: 'sa', hiragana: 'し' },
    { char: 'ス', romaji: 'su', row: 'sa', hiragana: 'す' },
    { char: 'セ', romaji: 'se', row: 'sa', hiragana: 'せ' },
    { char: 'ソ', romaji: 'so', row: 'sa', hiragana: 'そ' },

    // タ行 (Ta-row)
    { char: 'タ', romaji: 'ta', row: 'ta', hiragana: 'た' },
    { char: 'チ', romaji: 'chi', row: 'ta', hiragana: 'ち' },
    { char: 'ツ', romaji: 'tsu', row: 'ta', hiragana: 'つ' },
    { char: 'テ', romaji: 'te', row: 'ta', hiragana: 'て' },
    { char: 'ト', romaji: 'to', row: 'ta', hiragana: 'と' },

    // ナ行 (Na-row)
    { char: 'ナ', romaji: 'na', row: 'na', hiragana: 'な' },
    { char: 'ニ', romaji: 'ni', row: 'na', hiragana: 'に' },
    { char: 'ヌ', romaji: 'nu', row: 'na', hiragana: 'ぬ' },
    { char: 'ネ', romaji: 'ne', row: 'na', hiragana: 'ね' },
    { char: 'ノ', romaji: 'no', row: 'na', hiragana: 'の' },

    // ハ行 (Ha-row)
    { char: 'ハ', romaji: 'ha', row: 'ha', hiragana: 'は' },
    { char: 'ヒ', romaji: 'hi', row: 'ha', hiragana: 'ひ' },
    { char: 'フ', romaji: 'fu', row: 'ha', hiragana: 'ふ' },
    { char: 'ヘ', romaji: 'he', row: 'ha', hiragana: 'へ' },
    { char: 'ホ', romaji: 'ho', row: 'ha', hiragana: 'ほ' },

    // マ行 (Ma-row)
    { char: 'マ', romaji: 'ma', row: 'ma', hiragana: 'ま' },
    { char: 'ミ', romaji: 'mi', row: 'ma', hiragana: 'み' },
    { char: 'ム', romaji: 'mu', row: 'ma', hiragana: 'む' },
    { char: 'メ', romaji: 'me', row: 'ma', hiragana: 'め' },
    { char: 'モ', romaji: 'mo', row: 'ma', hiragana: 'も' },

    // ヤ行 (Ya-row)
    { char: 'ヤ', romaji: 'ya', row: 'ya', hiragana: 'や' },
    { char: 'ユ', romaji: 'yu', row: 'ya', hiragana: 'ゆ' },
    { char: 'ヨ', romaji: 'yo', row: 'ya', hiragana: 'よ' },

    // ラ行 (Ra-row)
    { char: 'ラ', romaji: 'ra', row: 'ra', hiragana: 'ら' },
    { char: 'リ', romaji: 'ri', row: 'ra', hiragana: 'り' },
    { char: 'ル', romaji: 'ru', row: 'ra', hiragana: 'る' },
    { char: 'レ', romaji: 're', row: 'ra', hiragana: 'れ' },
    { char: 'ロ', romaji: 'ro', row: 'ra', hiragana: 'ろ' },

    // ワ行 (Wa-row)
    { char: 'ワ', romaji: 'wa', row: 'wa', hiragana: 'わ' },
    { char: 'ヲ', romaji: 'wo', row: 'wa', hiragana: 'を' },
    { char: 'ン', romaji: 'n', row: 'wa', hiragana: 'ん' },

    // 濁音 (Dakuten)
    { char: 'ガ', romaji: 'ga', row: 'ga', hiragana: 'が' }, { char: 'ギ', romaji: 'gi', row: 'ga', hiragana: 'ぎ' }, { char: 'グ', romaji: 'gu', row: 'ga', hiragana: 'ぐ' }, { char: 'ゲ', romaji: 'ge', row: 'ga', hiragana: 'げ' }, { char: 'ゴ', romaji: 'go', row: 'ga', hiragana: 'ご' },
    { char: 'ザ', romaji: 'za', row: 'za', hiragana: 'ざ' }, { char: 'ジ', romaji: 'ji', row: 'za', hiragana: 'じ' }, { char: 'ズ', romaji: 'zu', row: 'za', hiragana: 'ず' }, { char: 'ゼ', romaji: 'ze', row: 'za', hiragana: 'ぜ' }, { char: 'ゾ', romaji: 'zo', row: 'za', hiragana: 'ぞ' },
    { char: 'ダ', romaji: 'da', row: 'da', hiragana: 'だ' }, { char: 'ヂ', romaji: 'ji', row: 'da', hiragana: 'ぢ' }, { char: 'ヅ', romaji: 'zu', row: 'da', hiragana: 'づ' }, { char: 'デ', romaji: 'de', row: 'da', hiragana: 'で' }, { char: 'ド', romaji: 'do', row: 'da', hiragana: 'ど' },
    { char: 'バ', romaji: 'ba', row: 'ba', hiragana: 'ば' }, { char: 'ビ', romaji: 'bi', row: 'ba', hiragana: 'び' }, { char: 'ブ', romaji: 'bu', row: 'ba', hiragana: 'ぶ' }, { char: 'ベ', romaji: 'be', row: 'ba', hiragana: 'べ' }, { char: 'ボ', romaji: 'bo', row: 'ba', hiragana: 'ぼ' },

    // 半濁音 (Handakuten)
    { char: 'パ', romaji: 'pa', row: 'pa', hiragana: 'ぱ' }, { char: 'ピ', romaji: 'pi', row: 'pa', hiragana: 'ぴ' }, { char: 'プ', romaji: 'pu', row: 'pa', hiragana: 'ぷ' }, { char: 'ペ', romaji: 'pe', row: 'pa', hiragana: 'ぺ' }, { char: 'ポ', romaji: 'po', row: 'pa', hiragana: 'ぽ' },

    // 拗音 (Youon - Standard)
    { char: 'キャ', romaji: 'kya', row: 'kya', hiragana: 'きゃ' }, { char: 'キュ', romaji: 'kyu', row: 'kya', hiragana: 'きゅ' }, { char: 'キョ', romaji: 'kyo', row: 'kya', hiragana: 'きょ' },
    { char: 'シャ', romaji: 'sha', row: 'sha', hiragana: 'しゃ' }, { char: 'シュ', romaji: 'shu', row: 'sha', hiragana: 'しゅ' }, { char: 'ショ', romaji: 'sho', row: 'sha', hiragana: 'しょ' },
    { char: 'チャ', romaji: 'cha', row: 'cha', hiragana: 'ちゃ' }, { char: 'チュ', romaji: 'chu', row: 'cha', hiragana: 'ちゅ' }, { char: 'チョ', romaji: 'cho', row: 'cha', hiragana: 'ちょ' },
    { char: 'ニャ', romaji: 'nya', row: 'nya', hiragana: 'にゃ' }, { char: 'ニュ', romaji: 'nyu', row: 'nya', hiragana: 'にゅ' }, { char: 'ニョ', romaji: 'nyo', row: 'nya', hiragana: 'にょ' },
    { char: 'ヒャ', romaji: 'hya', row: 'hya', hiragana: 'ひゃ' }, { char: 'ヒュ', romaji: 'hyu', row: 'hya', hiragana: 'ひゅ' }, { char: 'ヒョ', romaji: 'hyo', row: 'hya', hiragana: 'ひょ' },
    { char: 'ミャ', romaji: 'mya', row: 'mya', hiragana: 'みゃ' }, { char: 'ミュ', romaji: 'myu', row: 'mya', hiragana: 'みゅ' }, { char: 'ミョ', romaji: 'myo', row: 'mya', hiragana: 'みょ' },
    { char: 'リャ', romaji: 'rya', row: 'rya', hiragana: 'りゃ' }, { char: 'リュ', romaji: 'ryu', row: 'rya', hiragana: 'りゅ' }, { char: 'リョ', romaji: 'ryo', row: 'rya', hiragana: 'りょ' },

    // 拗音 (Youon - Dakuten)
    { char: 'ギャ', romaji: 'gya', row: 'gya', hiragana: 'ぎゃ' }, { char: 'ギュ', romaji: 'gyu', row: 'gya', hiragana: 'ぎゅ' }, { char: 'ギョ', romaji: 'gyo', row: 'gya', hiragana: 'ぎょ' },
    { char: 'ジャ', romaji: 'ja', row: 'ja', hiragana: 'じゃ' }, { char: 'ジュ', romaji: 'ju', row: 'ja', hiragana: 'じゅ' }, { char: 'ジョ', romaji: 'jo', row: 'ja', hiragana: 'じょ' },
    { char: 'ビャ', romaji: 'bya', row: 'bya', hiragana: 'びゃ' }, { char: 'ビュ', romaji: 'byu', row: 'bya', hiragana: 'びゅ' }, { char: 'ビョ', romaji: 'byo', row: 'bya', hiragana: 'びょ' },
    { char: 'ピャ', romaji: 'pya', row: 'pya', hiragana: 'ぴゃ' }, { char: 'ピュ', romaji: 'pyu', row: 'pya', hiragana: 'ぴゅ' }, { char: 'ピョ', romaji: 'pyo', row: 'pya', hiragana: 'ぴょ' },
]


// ─── Confusion map & helpers ───

/** Row display names (Chinese) */
const ROW_NAMES: Record<string, string> = {
    a: 'あ行（母音）', ka: 'か行（清音）', sa: 'さ行（清音）', ta: 'た行（清音）',
    na: 'な行', ha: 'は行', ma: 'ま行', ya: 'や行', ra: 'ら行', wa: 'わ行',
    ga: 'が行（濁音）', za: 'ざ行（濁音）', da: 'だ行（濁音）',
    ba: 'ば行（濁音）', pa: 'ぱ行（半濁音）',
    kya: 'きゃ行（拗音）', sha: 'しゃ行（拗音）', cha: 'ちゃ行（拗音）',
    nya: 'にゃ行（拗音）', hya: 'ひゃ行（拗音）', mya: 'みゃ行（拗音）', rya: 'りゃ行（拗音）',
    gya: 'ぎゃ行（拗音濁音）', ja: 'じゃ行（拗音濁音）',
    bya: 'びゃ行（拗音濁音）', pya: 'ぴゃ行（拗音半濁音）',
}

/** Commonly confused hiragana pairs with reasons */
const HIRAGANA_CONFUSIONS: Record<string, { similar: string; note: string }[]> = {
    'は': [{ similar: 'ほ', note: '字形相似，注意下半部差異' }],
    'ほ': [{ similar: 'は', note: '字形相似，注意下半部差異' }],
    'ね': [{ similar: 'れ', note: '右側筆畫不同' }, { similar: 'わ', note: '右側收尾方式不同' }],
    'れ': [{ similar: 'ね', note: '右側筆畫不同' }],
    'め': [{ similar: 'ぬ', note: '都有圈但收尾不同' }],
    'ぬ': [{ similar: 'め', note: '都有圈但收尾不同' }],
    'わ': [{ similar: 'ね', note: '右側收尾方式不同' }, { similar: 'れ', note: '字形相似' }],
    'さ': [{ similar: 'き', note: '筆畫數不同（さ=3 畫，き=4 畫）' }],
    'き': [{ similar: 'さ', note: '筆畫數不同' }],
    'う': [{ similar: 'ら', note: '字形相似但角度不同' }],
    'ら': [{ similar: 'う', note: '字形相似但角度不同' }],
    'し': [{ similar: 'じ', note: 'じ 是し的濁音（加兩點）' }],
    'す': [{ similar: 'ず', note: 'ず 是す的濁音（加兩點）' }],
}

/** Commonly confused katakana pairs with reasons */
const KATAKANA_CONFUSIONS: Record<string, { similar: string; note: string }[]> = {
    'シ': [{ similar: 'ツ', note: '筆畫方向不同：シ橫向、ツ縱向' }],
    'ツ': [{ similar: 'シ', note: '筆畫方向不同：ツ縱向、シ橫向' }],
    'ソ': [{ similar: 'ン', note: '筆畫方向不同：ソ縱向、ン橫向' }],
    'ン': [{ similar: 'ソ', note: '筆畫方向不同：ン橫向、ソ縱向' }],
    'ウ': [{ similar: 'ワ', note: 'ウ有上面一橫，ワ沒有' }],
    'ワ': [{ similar: 'ウ', note: 'ワ沒有上面一橫' }],
    'ヌ': [{ similar: 'ス', note: '字形相似但交叉方式不同' }],
    'ス': [{ similar: 'ヌ', note: '字形相似但交叉方式不同' }],
    'ク': [{ similar: 'タ', note: 'タ多一橫' }],
    'タ': [{ similar: 'ク', note: 'ク少一橫' }],
    'コ': [{ similar: 'ユ', note: '開口方向不同' }],
    'ユ': [{ similar: 'コ', note: '開口方向不同' }],
}

/** Special romanization notes for certain characters */
const SPECIAL_NOTES: Record<string, string> = {
    'し': '羅馬字是「shi」而非「si」',
    'ち': '羅馬字是「chi」而非「ti」',
    'つ': '羅馬字是「tsu」而非「tu」',
    'ふ': '羅馬字是「fu」而非「hu」',
    'は': '作為助詞時讀作「wa」',
    'へ': '作為助詞時讀作「e」',
    'を': '作為助詞使用，讀作「o」',
    'じ': '與「ぢ」同音，現代日語多用「じ」',
    'ず': '與「づ」同音，現代日語多用「ず」',
    'ぢ': '與「じ」同音，僅在特定場合使用（如「鼻血{はなぢ}」）',
    'づ': '與「ず」同音，僅在特定場合使用（如「続{つづ}く」）',
    'シ': '與「ツ」字形易混淆，注意筆畫方向',
    'ツ': '與「シ」字形易混淆，注意筆畫方向',
    'ソ': '與「ン」字形易混淆，注意筆畫方向',
    'ン': '與「ソ」字形易混淆，注意筆畫方向',
}

function getRowName(row: string): string {
    return ROW_NAMES[row] || `${row}行`
}

function getSimilarChars(
    target: typeof hiraganaData[0],
    type: 'hiragana' | 'katakana',
): { char: string; romaji: string; note: string }[] {
    const confusionMap = type === 'hiragana' ? HIRAGANA_CONFUSIONS : KATAKANA_CONFUSIONS
    const confusions = confusionMap[target.char]
    if (!confusions) return []

    const data = type === 'hiragana' ? hiraganaData : katakanaData
    return confusions.map(c => {
        const found = data.find(d => d.char === c.similar)
        return found ? { char: found.char, romaji: found.romaji, note: c.note } : null
    }).filter((x): x is { char: string; romaji: string; note: string } => x !== null)
}

function getCommonGojuonMistakes(
    target: typeof hiraganaData[0],
    type: 'hiragana' | 'katakana',
): string[] | undefined {
    const mistakes: string[] = []
    const specialNote = SPECIAL_NOTES[target.char]
    if (specialNote) {
        mistakes.push(specialNote)
    }

    const similars = getSimilarChars(target, type)
    for (const s of similars) {
        mistakes.push(`○「${target.char}」= ${target.romaji} / ×「${s.char}」= ${s.romaji} → ${s.note}`)
    }

    return mistakes.length > 0 ? mistakes : undefined
}

// Helper: generate a question for a specific character
function generateGojuonForChar(
    type: 'hiragana' | 'katakana',
    target: typeof hiraganaData[0],
    questionType: 'char-to-romaji' | 'romaji-to-char'
) {
    const data = type === 'hiragana' ? hiraganaData : katakanaData
    const typeName = type === 'hiragana' ? '平假名' : '片假名'

    // Prefer similar chars as distractors for more meaningful practice
    const similarChars = getSimilarChars(target, type)
    const similarCharSet = new Set(similarChars.map(s => s.char))

    // Pick from similar chars first, then fill randomly
    const similarDistractors = data.filter(item => similarCharSet.has(item.char))
    const otherDistractors = data
        .filter(item => item.char !== target.char && !similarCharSet.has(item.char))
        .sort(() => Math.random() - 0.5)
    const allDistractors = [...similarDistractors, ...otherDistractors].slice(0, 3)

    const structured: StructuredExplanation = {
        keyPoint: `${typeName}「${target.char}」的辨識`,
        analysis: `「${target.char}」屬於${getRowName(target.row)}，讀作「${target.romaji}」。`,
        comparisons: getSimilarChars(target, type).map(
            s => `${s.char}（${s.romaji}）：${s.note}`
        ),
        commonMistakes: getCommonGojuonMistakes(target, type),
    }

    // Remove empty comparisons
    if (!structured.comparisons?.length) delete structured.comparisons

    if (questionType === 'char-to-romaji') {
        const correct = target.romaji
        const shuffledOptions = [correct, ...allDistractors.map(d => d.romaji)].sort(() => Math.random() - 0.5)
        return {
            id: `gojuon_${type}_${target.romaji}_c2r`,
            stem: stripStemFurigana(`「${target.char}」の読{よ}み方{かた}は何{なん}ですか？`),
            correct,
            options: shuffledOptions,
            explanation: `「${target.char}」的讀音是「${target.romaji}」。（${getRowName(target.row)}）`,
            detailedExplanation: {
                correctRule: formatStructuredExplanation(structured),
                distractors: shuffledOptions.map(opt => {
                    if (opt === correct) {
                        return { text: opt, reason: `正確！「${target.char}」（${getRowName(target.row)}）的讀音。` }
                    }
                    const match = data.find(d => d.romaji === opt)
                    return {
                        text: opt,
                        reason: match
                            ? `錯誤：「${opt}」是「${match.char}」（${getRowName(match.row)}）的讀音。`
                            : `錯誤：這不是「${target.char}」的讀音。`,
                    }
                }),
                structured,
            },
            level: 'N5' as const,
        }
    } else {
        const correct = target.char
        const shuffledOptions = [correct, ...allDistractors.map(d => d.char)].sort(() => Math.random() - 0.5)
        return {
            id: `gojuon_${type}_${target.romaji}_r2c`,
            stem: stripStemFurigana(`「${target.romaji}」を表{あらわ}す文字{もじ}はどれですか？`),
            correct,
            options: shuffledOptions,
            explanation: `「${target.romaji}」寫作「${target.char}」。（${getRowName(target.row)}）`,
            detailedExplanation: {
                correctRule: formatStructuredExplanation(structured),
                distractors: shuffledOptions.map(opt => {
                    if (opt === correct) {
                        return { text: opt, reason: `正確！「${target.romaji}」就是「${target.char}」。` }
                    }
                    const match = data.find(d => d.char === opt)
                    return {
                        text: opt,
                        reason: match
                            ? `錯誤：「${match.char}」的讀音是「${match.romaji}」，不是「${target.romaji}」。`
                            : `錯誤：這不是「${target.romaji}」對應的假名。`,
                    }
                }),
                structured,
            },
            level: 'N5' as const,
        }
    }
}

// Generate tricky distractors for Gojuon practice
export function generateGojuonQuestion(type: 'hiragana' | 'katakana', questionType: 'char-to-romaji' | 'romaji-to-char') {
    const data = type === 'hiragana' ? hiraganaData : katakanaData
    const target = data[Math.floor(Math.random() * data.length)]
    return generateGojuonForChar(type, target, questionType)
}

export function getGojuonQuestionBank(type: 'hiragana' | 'katakana') {
    const data = type === 'hiragana' ? hiraganaData : katakanaData
    return data.flatMap(char => [
        generateGojuonForChar(type, char, 'char-to-romaji'),
        generateGojuonForChar(type, char, 'romaji-to-char'),
    ])
}

export function getGojuonQuestionCount(type: 'hiragana' | 'katakana'): number {
    const data = type === 'hiragana' ? hiraganaData : katakanaData
    return data.length * 2  // 2 directions per character
}

// Generate a set of pairs for Matching / Connect games
export function generateMatchingQuestion(type: 'hiragana' | 'katakana', pairCount: number = 5) {
    const data = type === 'hiragana' ? hiraganaData : katakanaData
    // Shuffle and slice
    const selected = [...data].sort(() => Math.random() - 0.5).slice(0, pairCount)

    return {
        type: 'matching',
        instruction: '正しい組み合わせを選んでください（正しいペアをマッチさせてください）。',
        pairs: selected.map(item => ({
            char: item.char,
            romaji: item.romaji,
            row: item.row // Helpful for grouping context if needed
        })),
        level: 'N5' as const
    }
}
