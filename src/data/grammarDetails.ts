import { GrammarPoint } from '../types/grammar';
import { n5Details } from './details/n5';

// Future: Import n4Details, etc.

export const grammarDetails: Record<string, GrammarPoint> = {
    ...n5Details,
    // ...n4Details,
    'n4_aida_ni': {
        id: 'n4_aida_ni',
        pattern: '間に',
        connection: '動詞辭書形 / ている形 / ない形 + 間に\n名詞 + の + 間に\nい形容詞 + 間に\nな形容詞 + な + 間に',
        translation: '在...期間 (發生某事)',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '在某段期間內發生了某動作',
                description: '表示在某個持續的狀態或動作進行的期間內，發生了另一個短暫的動作或變化。與「間（あいだ）」不同，「間に」強調的是期間內的「某個時間點」發生了什麼，而不是整個期間都在做什麼。',
                examples: [
                    {
                        japanese: '母{はは}が昼寝{ひるね}をしている間{あいだ}に、テレビを見{み}ました。',
                        chinese: '趁媽媽在午睡的時候，我看了電視。'
                    },
                    {
                        japanese: '留守{るす}の間{あいだ}に、友達{ともだち}が来{き}ました。',
                        chinese: '我不在家的時候，朋友來了。'
                    },
                    {
                        japanese: '独身{どくしん}の間{あいだ}に、いろいろなことをしたいです。',
                        chinese: '我想趁單身的時候，做各式各樣的事情。'
                    }
                ]
            }
        ],
        analysis: {
            title: '「間に」與「間」的差異',
            description: '兩者都表示「期間」，但後句接續的動作性質不同。',
            points: [
                {
                    rule: '間に：後句為「瞬間動作」或「短暫發生的事」。',
                    examples: [{ japanese: '日本{にほん}にいる間{あいだ}に、富士山{ふじさん}に登{のぼ}りたい。', chinese: '趁著在日本的期間，想去爬一次富士山。' }]
                },
                {
                    rule: '間：後句為「持續動作」或「一直保持的狀態」。',
                    examples: [{ japanese: '日本{にほん}にいる間{あいだ}、ずっとホテルに泊{と}まっていました。', chinese: '在日本的期間，我一直都住在飯店。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_quiz_aida_ni_1',
                sentence: '赤ちゃんが（　）間に、掃除をしました。',
                options: ['寝る', '寝て', '寝ている', '寝た'],
                correctIndex: 2,
                explanation: '表示在「寶寶正在睡覺」的這個持續狀態中，完成了掃除這個動作，故使用「寝ている」。'
            },
            {
                id: 'n4_quiz_aida_ni_2',
                sentence: '夏休み（　）間に、たくさん本を読みました。',
                options: ['の', 'な', 'で', 'に'],
                correctIndex: 0,
                explanation: '「夏休み」是名詞，接續「間に」需要加「の」。'
            },
            {
                id: 'n4_quiz_aida_ni_3',
                sentence: 'バスを待っている間に、雨が（　）。',
                options: ['降っていた', '降り出した', '降る', '降ります'],
                correctIndex: 1,
                explanation: '「間に」後句通常接續「瞬間發生的動作」或「變化」。'
            },
            {
                id: 'n4_quiz_aida_ni_4',
                sentence: '「いつレポートを書いたんですか。」\n「みんなが（　）間に、書きました。」',
                options: ['遊ぶ', '遊んで', '遊んでいる', '遊んだ'],
                correctIndex: 2,
                explanation: '對話情境。回答「趁大家在玩的時候寫的」。'
            },
            {
                id: 'n4_quiz_aida_ni_5',
                sentence: '「山田さんはまだですか。」\n「待っている（　）、コーヒーでも飲みませんか。」',
                options: ['間', '間に', '間を', '間で'],
                correctIndex: 1,
                explanation: '對話情境。提議「趁著等待的期間...」。'
            }
        ]
    },
    'n3_amari': {
        id: 'n3_amari',
        pattern: 'あまり',
        connection: '動詞辭书形 / 普通刑 + あまり\n名詞 + の + あまり\nな形容詞 + な + あまり',
        translation: '太...以至於...; 因過度...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '因過度...而導致消極結果',
                description: '表示由於程度過甚，導致了不好的結果。通常帶有消極、負面的含義。前接表示情感或狀態的詞語較多。',
                examples: [
                    {
                        japanese: '驚{おどろ}きのあまり、声{こえ}も出{で}なかった。',
                        chinese: '因為太過驚訝，連聲音都發不出來。'
                    },
                    {
                        japanese: '心配{しんぱい}するあまり、病気{びょうき}になってしまった。',
                        chinese: '因為過度擔心，結果生病了。'
                    },
                    {
                        japanese: '嬉{うれ}しさのあまり、泣{な}き出{だ}してしまった。',
                        chinese: '因為太高興，結果哭了出來。'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n3_quiz_amari_1',
                sentence: '忙しさ（　）、昼ご飯を食べるのを忘れていた。',
                options: ['のあまり', 'あまり', 'なあまり', 'であまり'],
                correctIndex: 0,
                explanation: '「忙しさ」是名詞，接續「あまり」時須加「の」。即「名詞 + の + あまり」。'
            },
            {
                id: 'n3_quiz_amari_2',
                sentence: '彼は怒りの（　）、机を叩いた。',
                options: ['あまり', 'まま', 'うえ', 'ため'],
                correctIndex: 0,
                explanation: '表示「因過度憤怒而...」，使用「（の）あまり」。'
            },
            {
                id: 'n3_quiz_amari_3',
                sentence: '感激した（　）、何も言えなくなった。',
                options: ['あげく', 'あまり', 'うえ', '結果'],
                correctIndex: 1,
                explanation: '前接動詞「感激した」，表示因程度過甚導致的結果。'
            },
            {
                id: 'n3_quiz_amari_4',
                sentence: '「どうしたの？顔色が悪いよ。」\n「緊張の（　）、昨夜は一睡もできなかったんだ。」',
                options: ['せい', 'あまり', 'おかげ', 'ため'],
                correctIndex: 1,
                explanation: '對話情境。'
            },
            {
                id: 'n3_quiz_amari_5',
                sentence: '「彼、急に走り出したけど…。」\n「急ぐ（　）、携帯を忘れていったよ。」',
                options: ['あまり', 'ため', 'のに', 'ので'],
                correctIndex: 0,
                explanation: '對話情境。'
            }
        ]
    },
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
                        japanese: '口論{こうろん}のあげく、殴{なぐ}り合{あ}いの喧嘩{けんか}になった。',
                        chinese: '爭吵到最後，變成了互毆。'
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
                sentence: 'いろいろ悩んだ（　）、会社を辞めることにした。',
                options: ['あげく', 'きり', '一方', '際'],
                correctIndex: 0,
                explanation: '「悩んだ」為過去式（た形），表示經過一番煩惱，最終做出了決定。'
            },
            {
                id: 'n2_quiz_ageku_2',
                sentence: '彼は借金を重ねた（　）、犯罪に手を染めてしまった。',
                options: ['あげく', '末', '結果', '以上'],
                correctIndex: 0,
                explanation: '典型的負面結果。'
            },
            {
                id: 'n2_quiz_ageku_3',
                sentence: '大喧嘩の（　）、二人は別れてしまった。',
                options: ['あげく', 'あと', 'ところ', 'ばかり'],
                correctIndex: 0,
                explanation: '「大喧嘩のあげく」（名詞+の）。'
            },
            {
                id: 'n2_quiz_ageku_4',
                sentence: '「新しいパソコン、買ったの？」\n「うん、どの機種にするか迷った（　）、結局買わなかったんだ。」',
                options: ['あげく', '末', '結果', 'あと'],
                correctIndex: 0,
                explanation: '對話情境。猶豫了半天，最後「沒買」（徒勞無功）。'
            },
            {
                id: 'n2_quiz_ageku_5',
                sentence: '「田中さん、遅いですね。」\n「電話で1時間も待たされた（　）、今日は行けないと言われました。」',
                options: ['ところ', 'あげく', '末', 'ばかり'],
                correctIndex: 1,
                explanation: '對話情境。'
            }
        ]
    },
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
                        japanese: 'そんなことは、子供{こども}ですら知{し}っている。',
                        chinese: '那種事情，連小孩子都知道。'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n1_quiz_sura_1',
                sentence: '足が痛くて、立つこと（　）できない。',
                options: ['すら', 'こそ', 'ばかり', 'だけ'],
                correctIndex: 0,
                explanation: '舉出「站立」這個最基本的動作都做不到，暗示腳痛的程度嚴重。'
            },
            {
                id: 'n1_quiz_sura_2',
                sentence: '先生（　）その問題は解けなかった。',
                options: ['すら', 'しか', 'こそ', 'ほど'],
                correctIndex: 0,
                explanation: '連老師（專家）都解不開。'
            },
            {
                id: 'n1_quiz_sura_3',
                sentence: 'この病気は原因（　）わかっていない。',
                options: ['すら', 'さえ', 'まで', 'ほど'],
                correctIndex: 0,
                explanation: '連「原因」這個最基本的資訊都不知道。'
            },
            {
                id: 'n1_quiz_sura_4',
                sentence: '「彼、大丈夫かな？」\n「重傷で、水（　）飲めない状態らしいよ。」',
                options: ['すら', 'こそ', 'だけ', 'しか'],
                correctIndex: 0,
                explanation: '對話情境。連「水」這種維持生命最基本的東西都喝不下。'
            },
            {
                id: 'n1_quiz_sura_5',
                sentence: '「この書類、読みましたか？」\n「忙しくて、目を通すこと（　）できていません。」',
                options: ['すら', 'こそ', 'まで', 'ばかり'],
                correctIndex: 0,
                explanation: '對話情境。'
            }
        ]
    }
};
