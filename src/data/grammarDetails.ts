import { GrammarPoint } from '../types/grammar';
import { n5Details } from './details/n5';
import { n4Details } from './details/n4';
import { n3Details } from './details/n3';
import { n1Details } from './details/n1';

export const grammarDetails: Record<string, GrammarPoint> = {
    ...n5Details,
    ...n4Details,
    ...n3Details,
    ...n1Details,
    // N2 示例文法 (待遷移至 n2.ts)
    'n2_ageku': {
        id: 'n2_ageku',
        pattern: 'あげく',
        connection: '動詞た形 + あげく（に）\n名詞 + の + あげく（に）',
        translation: '最後...; 結果是... (通常指壞結果)',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '經歷一番波折後的遺憾結局',
                description: '表示經過了很長一段時間的某種狀態或反覆做某事之後，最終得到了一個不好的結果。強調過程的漫長與結果的遺憾。',
                examples: [
                    {
                        japanese: '散々{さんざん}迷{まよ}ったあげく、何{なに}も買{か}わずに帰{かえ}った。',
                        chinese: '猶豫了半天，結果什麼都沒買就回家了。'
                    },
                    {
                        japanese: '彼{かれ}は親{おや}に迷惑{めいわく}をかけたあげく、家出{いえで}をしてしまった。',
                        chinese: '他給父母添盡了麻煩，最後竟然離家出走了。'
                    },
                    {
                        japanese: '「新しいパソコン、買ったの？」\n「うん、どの機種にするか迷ったあげく、結局買わなかったんだ。」\n「ええ？時間もったいなかったね。」',
                        chinese: '「新電腦買了嗎？」\n「嗯，猶豫了半天要買哪個型號，結果最後沒買。」\n「咦？太浪費時間了吧。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「あげく」與「末（すえ）」的比較',
            description: '兩者都表示「經過一番...之後的結果」，但語氣有所不同。',
            points: [
                {
                    rule: 'あげく：絕大多數接到負面結果。',
                    examples: [{ japanese: '待たされたあげく、キャンセルされた。', chinese: '讓人等了半天，最後卻被取消了。' }]
                },
                {
                    rule: '末（すえ）：可接正面或負面結果，單純強調經過漫長過程。',
                    examples: [{ japanese: '苦労{くろう}した末{すえ}に、やっと成功{せいこう}した。', chinese: '歷經辛苦，終於成功了。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n2_quiz_ageku_1',
                sentence: 'いろいろ悩{なや}んだ（　）、会社{かいしゃ}を辞{や}めることにした。',
                options: ['あげく', 'きり', '一方', '際'],
                correctIndex: 0,
                explanation: '「悩んだ」為過去式（た形），表示經過一番煩惱，最終做出了決定。'
            },
            {
                id: 'n2_quiz_ageku_2',
                sentence: '彼{かれ}は借金{しゃっきん}を重{かさ}ねた（　）、犯罪{はんざい}に手{て}を染{そ}めてしまった。',
                options: ['あげく', '末', '結果', '以上'],
                correctIndex: 0,
                explanation: '典型的負面結果。不斷借錢，最後淪為犯罪。'
            },
            {
                id: 'n2_quiz_ageku_3',
                sentence: '大喧嘩{おおげんか}の（　）、二人{ふたり}は別{わか}れてしまった。',
                options: ['あげく', 'あと', 'ところ', 'ばかり'],
                correctIndex: 0,
                explanation: '「大喧嘩のあげく」（名詞+の）。大吵之後分手了。'
            },
            {
                id: 'n2_quiz_ageku_4',
                sentence: '「会議{かいぎ}どうだった？」\n「5時間{じかん}も議論{ぎろん}した（　）、結局{けっきょく}何{なに}も決{き}まらなかったよ。」',
                options: ['あげく', '末', '結果', 'あと'],
                correctIndex: 0,
                explanation: '對話情境。討論了5小時，結果什麼都沒決定。'
            },
            {
                id: 'n2_quiz_ageku_5',
                sentence: '「田中{たなか}さん、遅{おそ}いですね。」\n「電話{でんわ}で1時間{じかん}も待{ま}たされた（　）、今日{きょう}は行{い}けないと言{い}われました。」',
                options: ['ところ', 'あげく', '末', 'ばかり'],
                correctIndex: 1,
                explanation: '對話情境。等了一小時，結果說不能來。'
            }
        ]
    },
    // N1 示例文法 (待遷移至 n1.ts)
    'n1_sura': {
        id: 'n1_sura',
        pattern: 'すら',
        connection: '名詞 + （助詞） + すら',
        translation: '連...; 甚至...',
        level: 'N1',
        explanation: [
            {
                usageId: 1,
                title: '極端舉例',
                description: '舉出一個極端的例子（通常是理所當然或最基本的例子），來暗示其他事物更是如此。語氣較生硬，常用於書面語。相當於「さえ」。',
                examples: [
                    {
                        japanese: '忙{いそが}しくて、食事{しょくじ}をとる時間{じかん}すらありません。',
                        chinese: '忙到連吃飯的時間都沒有。'
                    },
                    {
                        japanese: '彼{かれ}は自分{じぶん}の名前{なまえ}すら書{か}けない。',
                        chinese: '他甚至連自己的名字都不會寫。'
                    },
                    {
                        japanese: '「この問題{もんだい}、難{むずか}しいね。」\n「そうだね。先生{せんせい}ですら解{と}けなかったらしいよ。」\n「えっ、そんなに難{むずか}しいの？」',
                        chinese: '「這問題好難啊。」\n「是啊。聽說連老師都解不開呢。」\n「咦，有那麼難嗎？」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「すら」與「さえ」的比較',
            description: '兩者意思相近，但語感和使用場合不同。',
            points: [
                {
                    rule: '「すら」：較書面、文語調，語氣較強硬。',
                    examples: [{ japanese: '名前{なまえ}すら知{し}らない。', chinese: '連名字都不知道。' }]
                },
                {
                    rule: '「さえ」：較口語，使用範圍較廣。',
                    examples: [{ japanese: '名前{なまえ}さえ知{し}らない。', chinese: '連名字都不知道。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n1_quiz_sura_1',
                sentence: '足{あし}が痛{いた}くて、立{た}つこと（　）できない。',
                options: ['すら', 'こそ', 'ばかり', 'だけ'],
                correctIndex: 0,
                explanation: '舉出「站立」這個最基本的動作都做不到，暗示腳痛的程度嚴重。'
            },
            {
                id: 'n1_quiz_sura_2',
                sentence: '先生{せんせい}（　）その問題{もんだい}は解{と}けなかった。',
                options: ['すら', 'しか', 'こそ', 'ほど'],
                correctIndex: 0,
                explanation: '連老師（專家）都解不開，暗示其他人更不可能。'
            },
            {
                id: 'n1_quiz_sura_3',
                sentence: 'この病気{びょうき}は原因{げんいん}（　）わかっていない。',
                options: ['すら', 'さえ', 'まで', 'ほど'],
                correctIndex: 0,
                explanation: '連「原因」這個最基本的資訊都不知道。「すら」比「さえ」更強調極端性。'
            },
            {
                id: 'n1_quiz_sura_4',
                sentence: '「彼{かれ}、大丈夫{だいじょうぶ}かな？」\n「重傷{じゅうしょう}で、水{みず}（　）飲{の}めない状態{じょうたい}らしいよ。」',
                options: ['すら', 'こそ', 'だけ', 'しか'],
                correctIndex: 0,
                explanation: '對話情境。連「水」這種維持生命最基本的東西都喝不下。'
            },
            {
                id: 'n1_quiz_sura_5',
                sentence: '「この書類{しょるい}、読{よ}みましたか？」\n「忙{いそが}しくて、目{め}を通{とお}すこと（　）できていません。」',
                options: ['すら', 'こそ', 'まで', 'ばかり'],
                correctIndex: 0,
                explanation: '對話情境。連「過目」這種最基本的事都沒做到。'
            }
        ]
    }
};
