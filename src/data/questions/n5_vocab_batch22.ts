import { StaticQuestion } from './types';

export const n5VocabBatch22: StaticQuestion[] = [
    // 106. 名前 (なまえ)
    {
        id: 'n5_vocab_kanji_yomi_namae_1',
        prob: 'ここに<u>名前</u>を書いてください。',
        prob_zh: '請在這裡寫下 *名字*。',
        options: [
            { text: 'なまえ', reason: '正確！' },
            { text: 'まがえ', reason: '錯誤。' },
            { text: 'めいぜん', reason: '錯誤。' },
            { text: 'なんまえ', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「名{な}前{まえ}」。'
    },
    {
        id: 'n5_vocab_hyouki_namae_1',
        prob: 'あなたの<u>なまえ</u>は何ですか。',
        prob_zh: '你的 *名字* 是什麼？',
        options: [
            { text: '名前', reason: '正確！' },
            { text: '名煎', reason: '錯誤。' },
            { text: '名全', reason: '錯誤。' },
            { text: '名先', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】名前（Name）。'
    },

    // 107. 習う (ならう)
    {
        id: 'n5_vocab_kanji_yomi_narau_1',
        prob: '先生に日本語を<u>習い</u>ます。',
        prob_zh: '向老師 *學習* 日文。',
        options: [
            { text: 'ならい', reason: '正確！' },
            { text: 'ひろい', reason: '錯誤：拾い。' },
            { text: 'あらい', reason: '錯誤：洗い。' },
            { text: 'ちがい', reason: '錯誤：違い。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「習{なら}う」。'
    },
    {
        id: 'n5_vocab_bunmyaku_narau_1',
        prob: '鈴木先生______ピアノを習います。',
        prob_zh: '*跟* 鈴木老師學鋼琴。',
        options: [
            { text: 'に', reason: '正確！向某人學習用「に」或「から」。' },
            { text: 'へ', reason: '錯誤：表示方向。' },
            { text: 'を', reason: '錯誤：表示受詞（這裡受詞是ピアノ）。' },
            { text: 'で', reason: '錯誤：表示場所/工具。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】助詞選擇\n【解析】「人＋に／から＋習う」（向某人學習）。'
    },

    // 108. 並ぶ (ならぶ)
    {
        id: 'n5_vocab_kanji_yomi_narabu_1',
        prob: '店{みせ}の前に人が<u>並んで</u>います。',
        prob_zh: '店門前 *排* 著人。',
        options: [
            { text: 'ならんで', reason: '正確！' },
            { text: 'えらんで', reason: '錯誤：選んで（選ぶ）。' },
            { text: 'あそんで', reason: '錯誤：遊んで（遊ぶ）。' },
            { text: 'よんで', reason: '錯誤：読んで/呼んで。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「並{なら}ぶ」。て形「並んで」。'
    },
    {
        id: 'n5_vocab_bunmyaku_narabu_1',
        prob: '生徒{せいと}は教室{きょうしつ}に______。',
        prob_zh: '學生在教室 *排隊*。',
        options: [
            { text: '並びます{なら}', reason: '正確！' },
            { text: '並べます{なら}', reason: '錯誤：並べる是此動詞，受詞通常是物。由主詞是「生徒」（自動詞行爲者）判斷「並びます」較自然（排隊）。若指老師把學生排好則可能用並べる但語境不同。' },
            { text: '食べます{た}', reason: '錯誤：吃。' },
            { text: '飛びます{と}', reason: '錯誤：飛。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】自他動詞\n【解析】人排隊用「並ぶ」（Intransitive）。'
    },

    // 109. 並べる (ならべる)
    {
        id: 'n5_vocab_kanji_yomi_naraberu_1',
        prob: '本を棚{たな}に<u>並べ</u>ます。',
        prob_zh: '把書 *排列* 在架子上。',
        options: [
            { text: 'くらべ', reason: '錯誤：比べ。' },
            { text: 'ならべ', reason: '正確！' },
            { text: 'たべ', reason: '錯誤：食べ。' },
            { text: 'しらべ', reason: '錯誤：調べ。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「並{なら}べる」。'
    },
    {
        id: 'n5_vocab_bunmyaku_naraberu_1',
        prob: '料理{りょうり}をテーブルに______ください。',
        prob_zh: '請把料理 *擺* 在桌上。',
        options: [
            { text: '並べて{なら}', reason: '正確！' },
            { text: '並んで{なら}', reason: '錯誤：自動詞，不能接受詞「料理を」。' },
            { text: '食べて{た}', reason: '錯誤：吃。' },
            { text: '忘れて{わす}', reason: '錯誤：忘記。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】自他動詞\n【解析】「～を並べる」（把...排列/擺放）。'
    },

    // 110. なる (なる)
    {
        id: 'n5_vocab_bunmyaku_naru_1',
        prob: '将来{しょうらい}、医者{いしゃ}に______たいです。',
        prob_zh: '將來想 *成為* 醫生。',
        options: [
            { text: 'なり', reason: '正確！なります/なりたい。' },
            { text: 'やり', reason: '錯誤：做。' },
            { text: 'とり', reason: '錯誤：取。' },
            { text: 'あり', reason: '錯誤：有。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】動詞用法\n【解析】「～になる」（成為...）。'
    },
    {
        id: 'n5_vocab_bunmyaku_naru_2',
        prob: '部屋{へや}が______なりました。',
        prob_zh: '房間 *變* 乾淨了。',
        options: [
            { text: 'きれいに', reason: '正確！Na形容詞＋に＋なる。' },
            { text: 'きれい', reason: '錯誤。' },
            { text: 'きれいく', reason: '錯誤：Na形容詞不用く。' },
            { text: 'きれいな', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】變化表現\n【解析】名詞/Na形容詞＋に＋なる；I形容詞＋く＋なる。'
    }
];
