import { StaticQuestion } from './types';

export const n5VocabBatch16: StaticQuestion[] = [
    // 76. 立つ (たつ)
    {
        id: 'n5_vocab_kanji_yomi_tatsu_1',
        prob: 'そこに<u>立って</u>ください。',
        prob_zh: '請 *站* 在那裡。',
        options: [
            { text: 'たって', reason: '正確！' },
            { text: 'とって', reason: '錯誤：取って。' },
            { text: 'まって', reason: '錯誤：待って。' },
            { text: 'しって', reason: '錯誤：知って。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「立{た}つ」。て形「立{た}って」。'
    },
    {
        id: 'n5_vocab_hyouki_tatsu_1',
        prob: 'ドアの前{まえ}に<u>たって</u>います。',
        prob_zh: '*站* 著門前。',
        options: [
            { text: '立つて', reason: '錯誤。' },
            { text: '立って', reason: '正確！' },
            { text: '待って', reason: '錯誤：まって。' },
            { text: '持って', reason: '錯誤：もって。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】立って（Standing）。'
    },
    {
        id: 'n5_vocab_bunmyaku_tatsu_1',
        prob: '電車{でんしゃ}で席{せき}がありませんでしたから、______いました。',
        prob_zh: '因為電車上沒位子，所以一直 *站* 著。',
        options: [
            { text: '立って{た}', reason: '正確！' },
            { text: '座って{すわ}', reason: '錯誤：坐著。' },
            { text: '使って{つか}', reason: '錯誤：用著。' },
            { text: '入って{はい}', reason: '錯誤：入著。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】動詞選擇\n【解析】沒位子 -> 站立。'
    },

    // 77. 建てる (たてる)
    {
        id: 'n5_vocab_kanji_yomi_tateru_1',
        prob: '家{いえ}を<u>建て</u>ました。',
        prob_zh: '*蓋（建）* 了房子。',
        options: [
            { text: 'たて', reason: '正確！' },
            { text: 'だて', reason: '錯誤。' },
            { text: 'あて', reason: '錯誤。' },
            { text: 'みて', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「建{た}てる」。'
    },
    {
        id: 'n5_vocab_hyouki_tateru_1',
        prob: '新{あたら}しいビルを<u>たてます</u>。',
        prob_zh: '*興建* 新大樓。',
        options: [
            { text: '建てます', reason: '正確！' },
            { text: '立ちます', reason: '錯誤：たちはます（站立）。' },
            { text: '健てます', reason: '錯誤。' },
            { text: '律てます', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】建てる（Build）。'
    },
    {
        id: 'n5_vocab_bunmyaku_tateru_1',
        prob: '来年{らいねん}、国{くに}に家{いえ}を______。',
        prob_zh: '明年要在老家 *蓋* 房子。',
        options: [
            { text: '建てます{た}', reason: '正確！' },
            { text: '食べます{た}', reason: '錯誤。' },
            { text: '飛びます{と}', reason: '錯誤。' },
            { text: '取ります{と}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】動詞搭配\n【解析】家を建てる（Build a house）。'
    },

    // 78. たとえば (たとえば)
    {
        id: 'n5_vocab_kana_tatoeba_1',
        prob: '<u>例えば</u>東京{とうきょう}や大阪{おおさか}です。',
        prob_zh: '*例如* 像是東京或大阪。',
        options: [
            { text: 'たとえは', reason: '錯誤。' },
            { text: 'たとえば', reason: '正確！' },
            { text: 'だどえば', reason: '錯誤。' },
            { text: 'たとうば', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kana',
        correctRule: '【考點】詞彙讀音\n【解析】例えば{たとえば}。'
    },
    {
        id: 'n5_vocab_bunmyaku_tatoeba_1',
        prob: 'スポーツが好きです。______、テニスです。',
        prob_zh: '我喜歡運動。 *例如* 網球。',
        options: [
            { text: '例えば{たとえば}', reason: '正確！' },
            { text: 'もし', reason: '錯誤：如果（接假設句）。' },
            { text: 'どうも', reason: '錯誤：非常/總覺得。' },
            { text: 'でも', reason: '錯誤：但是。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】連接詞/副詞\n【解析】舉例使用。'
    },

    // 79. 楽しい (たのしい)
    {
        id: 'n5_vocab_kanji_yomi_tanoshii_1',
        prob: 'パーティーは<u>楽し</u>かったです。',
        prob_zh: '派對很 *快樂*。',
        options: [
            { text: 'うれし', reason: '錯誤：嬉しい。' },
            { text: 'かなし', reason: '錯誤：悲しい。' },
            { text: 'たのし', reason: '正確！' },
            { text: 'さびし', reason: '錯誤：寂しい。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「楽{たの}しい」。'
    },
    {
        id: 'n5_vocab_hyouki_tanoshii_1',
        prob: '毎日{まいにち}<u>たのしい</u>です。',
        prob_zh: '每天都很 *快樂*。',
        options: [
            { text: '楽しい', reason: '正確！' },
            { text: '楽のしい', reason: '錯誤。' },
            { text: '好しい', reason: '錯誤。' },
            { text: '喜しい', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】楽しい。'
    },
    {
        id: 'n5_vocab_bunmyaku_tanoshii_1',
        prob: '旅行{りょこう}はとても______。',
        prob_zh: '旅行非常 *開心（愉快）*。',
        options: [
            { text: '楽しかったです{たの}', reason: '正確！' },
            { text: '古かったです{ふる}', reason: '錯誤：舊的。' },
            { text: '細かったです{ほそ}', reason: '錯誤：細的。' },
            { text: '眠かったです{ねむ}', reason: '錯誤：想睡的。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】情感形容詞\n【解析】描述活動體驗愉快用楽しい。'
    },

    // 80. 頼む (たのむ)
    {
        id: 'n5_vocab_kanji_yomi_tanomu_1',
        prob: '父{ちち}に仕事を<u>頼み</u>ました。',
        prob_zh: '*拜託* 父親工作。',
        options: [
            { text: 'のみ', reason: '錯誤：飲み。' },
            { text: 'たのみ', reason: '正確！' },
            { text: 'よのみ', reason: '錯誤。' },
            { text: 'おのみ', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「頼{たの}む」。'
    },
    {
        id: 'n5_vocab_hyouki_tanomu_1',
        prob: '友達{ともだち}に<u>たのみ</u>ます。',
        prob_zh: '*拜託（請求）* 朋友。',
        options: [
            { text: '賴みます', reason: '錯誤：舊字體。' },
            { text: '頼みます', reason: '正確！' },
            { text: '束みます', reason: '錯誤。' },
            { text: '整みます', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】頼む（ask/request）。'
    },
    {
        id: 'n5_vocab_bunmyaku_tanomu_1',
        prob: 'レストランで料理{りょうり}を______。',
        prob_zh: '在餐廳 *點* 菜。',
        options: [
            { text: '頼みます{たの}', reason: '正確！点菜/請求。' },
            { text: '飲みます{の}', reason: '錯誤：喝。' },
            { text: '困ります{こま}', reason: '錯誤：困擾。' },
            { text: '閉めます{し}', reason: '錯誤：關閉。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】動詞多義\n【解析】頼む除了拜託，在餐廳也有「點餐」的意思。'
    }
];
