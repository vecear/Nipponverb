import { StaticQuestion } from './types';

export const n5VocabBatch27: StaticQuestion[] = [
    // 131. はい (はい)
    {
        id: 'n5_vocab_kanji_yomi_hai_1',
        prob: '「<u>はい</u>、そうです。」',
        prob_zh: '「 *是的*，沒錯。」',
        options: [
            { text: 'はい', reason: '正確！' },
            { text: 'いいえ', reason: '錯誤：不。' },
            { text: 'おい', reason: '錯誤：喂。' },
            { text: 'まい', reason: '錯誤。' }
        ],
        // Actually this is usually kana. Let's make it simple.
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】詞彙意涵\n【解析】はい（Yes）。'
    },

    // 132. 入る (はいる)
    {
        id: 'n5_vocab_kanji_yomi_hairu_1',
        prob: '部屋に<u>入り</u>ます。',
        prob_zh: '*進去* 房間。',
        options: [
            { text: 'はいり', reason: '正確！' },
            { text: 'いり', reason: '錯誤：入り（入口的入り讀いり，但動詞入ります讀はいります）。' },
            { text: 'かえり', reason: '錯誤：帰り。' },
            { text: 'はしり', reason: '錯誤：走り。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「入{はい}る」。'
    },
    {
        id: 'n5_vocab_bunmyaku_hairu_1',
        prob: 'お風呂に______。',
        prob_zh: '*洗*（進）澡。',
        options: [
            { text: '入ります', reason: '正確！お風呂に入る。' },
            { text: '入れます', reason: '錯誤：放入（他動詞）。' },
            { text: '来ます', reason: '錯誤：來。' },
            { text: '出ます', reason: '錯誤：出去。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】動詞搭配\n【解析】お風呂に入る（Take a bath）。'
    },

    // 133. 葉書 (はがき)
    {
        id: 'n5_vocab_kanji_yomi_hagaki_1',
        prob: '友達に<u>葉書</u>を書きました。',
        prob_zh: '寫了 *明信片* 給朋友。',
        options: [
            { text: 'はがき', reason: '正確！' },
            { text: 'てがみ', reason: '錯誤：手紙（信）。' },
            { text: 'きって', reason: '錯誤：切手（郵票）。' },
            { text: 'ふうとう', reason: '錯誤：封筒（信封）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「葉書{はがき}」。'
    },
    {
        id: 'n5_vocab_hyouki_hagaki_1',
        prob: '旅行先から<u>はがき</u>を送りました。',
        prob_zh: '從旅行地寄了 *明信片*。',
        options: [
            { text: '葉書', reason: '正確！' },
            { text: '手紙', reason: '錯誤：てがみ。' },
            { text: '貼紙', reason: '錯誤。' },
            { text: '端書', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】葉書（Postcard）。'
    },

    // 134. 履く (はく)
    {
        id: 'n5_vocab_kanji_yomi_haku_1',
        prob: '靴を<u>履き</u>ます。',
        prob_zh: '*穿* 鞋。',
        options: [
            { text: 'はき', reason: '正確！' },
            { text: 'ぬぎ', reason: '錯誤：脱ぎ（脫）。' },
            { text: 'き', reason: '錯誤：着（穿上半身）。' },
            { text: 'ひき', reason: '錯誤：引き（拉/彈）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「履{は}く」。'
    },
    {
        id: 'n5_vocab_bunmyaku_haku_1',
        prob: 'ズボンを______。',
        prob_zh: '*穿* 褲子。',
        options: [
            { text: '履きます', reason: '正確！下半身衣物用「履く」。' },
            { text: '着ます', reason: '錯誤：上半身用「着る」。' },
            { text: 'かぶります', reason: '錯誤：頭部用「被る」。' },
            { text: 'します', reason: '錯誤：配件用「する」。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】動詞搭配\n【解析】下半身（ズボン、スカート、靴、靴下）用「履く」。'
    },

    // 135. 箱 (はこ)
    {
        id: 'n5_vocab_kanji_yomi_hako_1',
        prob: 'この<u>箱</u>は重いです。',
        prob_zh: '這個 *箱子* 很重。',
        options: [
            { text: 'はこ', reason: '正確！' },
            { text: 'かご', reason: '錯誤：籃子。' },
            { text: 'ふくろ', reason: '錯誤：袋子。' },
            { text: 'へや', reason: '錯誤：房間。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「箱{はこ}」。'
    },
    {
        id: 'n5_vocab_hyouki_hako_1',
        prob: 'みかんが<u>はこ</u>に入っています。',
        prob_zh: '橘子在 *箱子* 裡。',
        options: [
            { text: '箱', reason: '正確！' },
            { text: '相', reason: '錯誤。' },
            { text: '木', reason: '錯誤。' },
            { text: '庫', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】箱（Box）。'
    }
];
