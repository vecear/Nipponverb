import { StaticQuestion } from './types'
import { n5VocabBatch1 } from './n5_vocab_new';
import { n5VocabBatch2 } from './n5_vocab_batch2';
import { n5_vocab_batch3 } from './n5_vocab_batch3';
import { n5VocabBatch4 } from './n5_vocab_batch4';
import { n5VocabBatch5 } from './n5_vocab_batch5';
import { n5VocabBatch6 } from './n5_vocab_batch6';
import { n5VocabBatch7 } from './n5_vocab_batch7';
import { n5VocabBatch8 } from './n5_vocab_batch8';
import { n5VocabBatch9 } from './n5_vocab_batch9';
import { n5VocabBatch10 } from './n5_vocab_batch10';
import { n5VocabBatch11 } from './n5_vocab_batch11';
import { n5VocabBatch12 } from './n5_vocab_batch12';

export const vocabN5: StaticQuestion[] = [
    ...n5VocabBatch1,
    ...n5VocabBatch2,
    ...n5_vocab_batch3,
    ...n5VocabBatch4,
    ...n5VocabBatch5,
    ...n5VocabBatch6,
    ...n5VocabBatch7,
    ...n5VocabBatch8,
    ...n5VocabBatch9,
    ...n5VocabBatch10,
    ...n5VocabBatch11,
    ...n5VocabBatch12,
    {
        id: 'n5_vocab_1',
        prob: '毎日{まいにち}、______で学校{がっこう}へ行{い}きます。',
        prob_zh: '每天搭 *公車* 去學校。',
        options: [
            { text: 'バス', reason: '正確！' },
            { text: 'パス', reason: '錯誤：意思是 Pass (通行證)。' },
            { text: 'ガス', reason: '錯誤：意思是瓦斯。' },
            { text: 'ベス', reason: '錯誤：無此詞。' }
        ],
        correctIndex: 0,
        level: 'N5',
        correctRule: '「バス」是公車 (Bus)。'
    },
    {
        id: 'n5_vocab_2',
        prob: '机{つくえ}の上{うえ}に______があります。',
        prob_zh: '桌上有 *鉛筆*。',
        options: [
            { text: 'えんぴつ', reason: '正確！' },
            { text: 'えんびつ', reason: '錯誤：發音錯誤。' },
            { text: 'へんぴつ', reason: '錯誤：發音錯誤。' },
            { text: 'てんぴつ', reason: '錯誤：無此詞。' }
        ],
        correctIndex: 0,
        level: 'N5',
        correctRule: '鉛筆的日文是「鉛筆 (えんぴつ)」。'
    },
    {
        id: 'n5_vocab_3',
        prob: '今日はとても______ですね。',
        prob_zh: '今天非常 *熱* 呢。',
        options: [
            { text: 'あつい', reason: '正確！' },
            { text: 'さむい', reason: '錯誤：那是冷。' },
            { text: 'つめたい', reason: '錯誤：那是冰冷(觸感)。' },
            { text: 'ぬるい', reason: '錯誤：那是微溫。' }
        ],
        correctIndex: 0,
        level: 'N5',
        correctRule: '天氣熱用「暑い (あつい)」。'
    }
]

export const vocabN4: StaticQuestion[] = [
    {
        id: 'n4_vocab_1',
        prob: 'この漢字{かんじ}の______がわかりません。',
        prob_zh: '不知道這個漢字的 *意思*。',
        options: [
            { text: '意味{いみ}', reason: '正確！' },
            { text: '意見{いけん}', reason: '錯誤：那是意見。' },
            { text: '説明{せつめい}', reason: '錯誤：那是說明。' },
            { text: '準備{じゅんび}', reason: '錯誤：那是準備。' }
        ],
        correctIndex: 0,
        level: 'N4',
        correctRule: '「意味 (いみ)」表示意思。'
    },
    {
        id: 'n4_vocab_2',
        prob: '彼はとても______な人です。',
        prob_zh: '他是一個非常 *認真* 的人。',
        options: [
            { text: 'まじめ', reason: '正確！(真面目)' },
            { text: 'みじめ', reason: '錯誤：那是悲慘。' },
            { text: 'きまじめ', reason: '錯誤：過於正經(貶義)。' },
            { text: 'ふまじめ', reason: '錯誤：不認真。' }
        ],
        correctIndex: 0,
        level: 'N4',
        correctRule: '「真面目 (まじめ)」表示認真、誠實。'
    },
    {
        id: 'n4_vocab_3',
        prob: '駅前{えきまえ}で事故{じこ}が______。',
        prob_zh: '在車站前 *發生* 了事故。',
        options: [
            { text: '起{お}きました', reason: '正確！' },
            { text: '落{お}ちました', reason: '錯誤：那是落下。' },
            { text: '降{お}りました', reason: '錯誤：那是下車。' },
            { text: '置{お}きました', reason: '錯誤：那是放置。' }
        ],
        correctIndex: 0,
        level: 'N4',
        correctRule: '事件發生用「起きる (おきる)」。'
    }
]

export const vocabN3: StaticQuestion[] = [
    {
        id: 'n3_vocab_1',
        prob: '彼女{かのじょ}は経験{けいけん}が______だ。',
        prob_zh: '她的經驗 *豐富*。',
        options: [
            { text: '豊富{ほうふ}', reason: '正確！' },
            { text: '豊作{ほうさく}', reason: '錯誤：這是農作物豐收。' },
            { text: '豊満{ほうまん}', reason: '錯誤：這是形容體態。' },
            { text: '豊{ゆた}か', reason: '錯誤：通常接名詞或用na形容詞，這裡用漢語詞彙較自然。' }
        ],
        correctIndex: 0,
        level: 'N3',
        correctRule: '「豊富 (ほうふ)」表示豐富，常用於經驗、知識等。'
    },
    {
        id: 'n3_vocab_2',
        prob: '努力{どりょく}すれば、必{かなら}ず成功{せいこう}するとは______。',
        prob_zh: '即使努力，也 *不一定* 會成功。',
        options: [
            { text: '限{かぎ}らない', reason: '正確！(とは限らない)' },
            { text: '限{かぎ}る', reason: '錯誤。' },
            { text: '限{かぎ}って', reason: '錯誤。' },
            { text: '限{かぎ}り', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N3',
        correctRule: '「～とは限らない」是N3文法/詞彙，表示「不一定...」。'
    },
    {
        id: 'n3_vocab_3',
        prob: '会議{かいぎ}の資料{しりょう}を______して配{くば}った。',
        prob_zh: '將會議資料 *影印* 並分發了。',
        options: [
            { text: 'コピー', reason: '正確！' },
            { text: 'サービス', reason: '錯誤：服務。' },
            { text: 'サイン', reason: '錯誤：簽名。' },
            { text: 'セット', reason: '錯誤：設定/套裝。' }
        ],
        correctIndex: 0,
        level: 'N3',
        correctRule: '「コピー (Copy)」表示影印。'
    }
]

export const vocabN2: StaticQuestion[] = [
    {
        id: 'n2_vocab_1',
        prob: 'この小説{しょうせつ}は映画化{えいがか}され、大きな______を呼{よ}んだ。',
        prob_zh: '這本小說被改編成電影，引起了巨大的 *迴響*。',
        options: [
            { text: '反響{はんきょう}', reason: '正確！' },
            { text: '反射{はんしゃ}', reason: '錯誤：反射光線等。' },
            { text: '反映{はんえい}', reason: '錯誤：反映意見。' },
            { text: '反応{はんのう}', reason: '錯誤：反應。' }
        ],
        correctIndex: 0,
        level: 'N2',
        correctRule: '「反響 (はんきょう)」常用於引起社會大眾的關注或討論。'
    },
    {
        id: 'n2_vocab_2',
        prob: '彼は会社{かいしゃ}の______な情報{じょうほう}を握{にぎ}っている。',
        prob_zh: '他掌握著公司的 *關鍵* 資訊。',
        options: [
            { text: '重要{じゅうよう}', reason: '正確！' },
            { text: '主要{しゅよう}', reason: '錯誤：主要的(由多元組成中的主要)。' },
            { text: '貴重{きちょう}', reason: '錯誤：珍貴的。' },
            { text: '慎重{しんちょう}', reason: '錯誤：謹慎的。' }
        ],
        correctIndex: 0,
        level: 'N2',
        correctRule: '雖然其他選項也通，但「重要な情報」是最自然的搭配。'
    },
    {
        id: 'n2_vocab_3',
        prob: '将来{しょうらい}について真剣{しんけん}に______。',
        prob_zh: '認真地 *思考* 未來。',
        options: [
            { text: '考{かんが}える', reason: '正確！' },
            { text: '考{かんが}うる', reason: '錯誤：古文形式。' },
            { text: '案{あん}じる', reason: '錯誤：擔心/掛念。' },
            { text: '重{おも}んじる', reason: '錯誤：重視。' }
        ],
        correctIndex: 0,
        level: 'N2',
        correctRule: '思考用「考える」。'
    }
]

export const vocabN1: StaticQuestion[] = [
    {
        id: 'n1_vocab_1',
        prob: '新{あたら}しい証拠{しょうこ}が検察{けんさつ}の主張{しゅちょう}を______した。',
        prob_zh: '新證據 *推翻* 了檢方的的主張。',
        options: [
            { text: '覆{くつがえ}した', reason: '正確！' },
            { text: '裏切{うらぎ}った', reason: '錯誤：背叛。' },
            { text: '矛盾{むじゅん}した', reason: '錯誤：矛盾。' },
            { text: '排除{はいじょ}した', reason: '錯誤：排除。' }
        ],
        correctIndex: 0,
        level: 'N1',
        correctRule: '「覆す (くつがえす)」表示推翻(定論、判決等)。'
    },
    {
        id: 'n1_vocab_2',
        prob: 'その計画{けいかく}は時期尚早{じきしょうそう}だと______された。',
        prob_zh: '該計畫被 *駁回*，認為為時尚早。',
        options: [
            { text: '却下{きゃっか}', reason: '正確！' },
            { text: '拒否{きょひ}', reason: '錯誤：拒絕(請求等)。' },
            { text: '辞退{じたい}', reason: '錯誤：辭退。' },
            { text: '廃棄{はいき}', reason: '錯誤：廢棄。' }
        ],
        correctIndex: 0,
        level: 'N1',
        correctRule: '「却下 (きゃっか)」常用於官方或正式場合駁回申請或提案。'
    },
    {
        id: 'n1_vocab_3',
        prob: '彼女{かのじょ}の言動{げんどう}は、常識{じょうしき}を______している。',
        prob_zh: '她的言行 *脫離* 了常識。',
        options: [
            { text: '逸脱{いつだつ}', reason: '正確！' },
            { text: '脱退{だったい}', reason: '錯誤：退出組織。' },
            { text: '離脱{りだつ}', reason: '錯誤：脫離(隊伍、危險等)。' },
            { text: '法悦{ほうえつ}', reason: '錯誤：法喜(宗教)。' }
        ],
        correctIndex: 0,
        level: 'N1',
        correctRule: '「逸脱 (いつだつ)」表示偏離(常軌、標準、目的等)。'
    }
]
