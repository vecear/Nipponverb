import { GrammarPoint } from '../../types/grammar';

export const n4Details: Record<string, GrammarPoint> = {
    'n4_aida': {
        id: 'n4_aida',
        pattern: '間（あいだ）',
        connection: '動詞辭書形 / ている形 / ない形 + 間\n名詞 + の + 間\nい形容詞 + 間\nな形容詞 + な + 間',
        translation: '期間; 在...期間',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '在某段期間「一直」保持某狀態',
                description: '表示在某個持續的時間範圍內，後句的動作或狀態也持續進行。與「間に」不同，「間」強調的是「整個期間」都如此，而非某個時間點發生的事。',
                examples: [
                    { japanese: '日本{にほん}にいる間{あいだ}、ずっと日本語{にほんご}を勉強{べんきょう}していました。', chinese: '在日本的期間，我一直都在學習日語。' },
                    { japanese: '電車{でんしゃ}に乗{の}っている間{あいだ}、本{ほん}を読{よ}んでいました。', chinese: '搭電車的期間，我一直在看書。' },
                    { japanese: '子供{こども}が寝{ね}ている間{あいだ}、静{しず}かにしてください。', chinese: '孩子睡覺的期間，請保持安靜。' }
                ]
            }
        ],
        analysis: {
            title: '「間」與「間に」的差異',
            description: '兩者都表示「期間」，但後句接續的動作性質不同。',
            points: [
                {
                    rule: '間：後句為「持續動作」或「一直保持的狀態」。',
                    examples: [{ japanese: '日本{にほん}にいる間{あいだ}、ずっとホテルに泊{と}まっていました。', chinese: '在日本的期間，我一直都住在飯店。' }]
                },
                {
                    rule: '間に：後句為「瞬間動作」或「短暫發生的事」。',
                    examples: [{ japanese: '日本{にほん}にいる間{あいだ}に、富士山{ふじさん}に登{のぼ}りたい。', chinese: '趁著在日本的期間，想去爬一次富士山。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_aida_1',
                sentence: '夏休{なつやす}みの（　）、毎日{まいにち}プールで泳{およ}いでいました。',
                options: ['間{あいだ}', '間{あいだ}に', '時{とき}', 'ところ'],
                correctIndex: 0,
                explanation: '「每天都在游泳」是持續的動作，表示整個暑假期間都在做的事，用「間」。'
            },
            {
                id: 'n4_aida_2',
                sentence: '授業{じゅぎょう}の間{あいだ}、ずっと（　）いました。',
                options: ['起{お}きて', '起{お}き', '起{お}きる', '起{お}きた'],
                correctIndex: 0,
                explanation: '「間」後面接的是「一直持續」的狀態，用「ている形」的「起きて」。'
            },
            {
                id: 'n4_aida_3',
                sentence: '彼{かれ}が来{く}る（　）、ゲームをしていました。',
                options: ['間{あいだ}に', '間{あいだ}', 'うちに', 'ところに'],
                correctIndex: 1,
                explanation: {
                    correct: '「他來之前的這段期間，一直都在玩遊戲」，用「間」表示持續狀態。',
                    wrong: [
                        '「間に」用於瞬間發生的事，這裡是「一直在玩」。',
                        '「うちに」雖然可以，但這裡強調「持續在玩」更適合「間」。',
                        '「ところに」表示「正要/正在...的時候」，語意不合。'
                    ]
                }
            },
            {
                id: 'n4_aida_4',
                sentence: '「何{なに}してたの？」\n「テレビを見{み}ている（　）、宿題{しゅくだい}もしていたよ。」',
                options: ['間{あいだ}', '間{あいだ}に', 'ながら', 'うちに'],
                correctIndex: 0,
                explanation: '對話情境。「看電視的期間，也一直在寫作業」，兩者都是持續動作，用「間」。'
            },
            {
                id: 'n4_aida_5',
                sentence: '赤{あか}ちゃんが寝{ね}ている（　）、掃除{そうじ}をしました。',
                options: ['間{あいだ}', '間{あいだ}に', 'とき', 'まで'],
                correctIndex: 1,
                explanation: {
                    correct: '「間に」用於前句持續期間內，發生了一個短暫動作（完成打掃）。',
                    wrong: [
                        '「間」需要後句也是「持續動作」，但「掃除をしました」是完成的動作。',
                        '「とき」強調時間點，語意可通但不如「間に」精準。',
                        '「まで」表示截止時間，這裡不符合語境。'
                    ]
                }
            }
        ]
    },
    'n4_aida_ni': {
        id: 'n4_aida_ni',
        pattern: '間に（あいだに）',
        connection: '動詞辭書形 / ている形 / ない形 + 間に\n名詞 + の + 間に\nい形容詞 + 間に\nな形容詞 + な + 間に',
        translation: '在...期間 (發生某事)',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '在某段期間內發生了某動作',
                description: '表示在某個持續的狀態或動作進行的期間內，發生了另一個短暫的動作或變化。與「間」不同，「間に」強調的是期間內的「某個時間點」發生了什麼，而不是整個期間都在做什麼。',
                examples: [
                    { japanese: '母{はは}が昼寝{ひるね}をしている間{あいだ}に、テレビを見{み}ました。', chinese: '趁媽媽在午睡的時候，我看了電視。' },
                    { japanese: '留守{るす}の間{あいだ}に、友達{ともだち}が来{き}ました。', chinese: '我不在家的時候，朋友來了。' },
                    { japanese: '独身{どくしん}の間{あいだ}に、いろいろなことをしたいです。', chinese: '我想趁單身的時候，做各式各樣的事情。' }
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
                id: 'n4_aida_ni_1',
                sentence: '赤{あか}ちゃんが（　）間{あいだ}に、掃除{そうじ}をしました。',
                options: ['寝{ね}る', '寝{ね}て', '寝{ね}ている', '寝{ね}た'],
                correctIndex: 2,
                explanation: '表示在「寶寶正在睡覺」的這個持續狀態中，完成了掃除這個動作，故使用「寝ている」。'
            },
            {
                id: 'n4_aida_ni_2',
                sentence: '夏休{なつやす}み（　）間{あいだ}に、たくさん本{ほん}を読{よ}みました。',
                options: ['の', 'な', 'で', 'に'],
                correctIndex: 0,
                explanation: '「夏休み」是名詞，接續「間に」需要加「の」。'
            },
            {
                id: 'n4_aida_ni_3',
                sentence: 'バスを待{ま}っている間{あいだ}に、雨{あめ}が（　）。',
                options: ['降{ふ}っていた', '降{ふ}り出{だ}した', '降{ふ}る', '降{ふ}ります'],
                correctIndex: 1,
                explanation: '「間に」後句通常接續「瞬間發生的動作」或「變化」，「降り出した」表示開始下雨。'
            },
            {
                id: 'n4_aida_ni_4',
                sentence: '「いつレポートを書{か}いたんですか。」\n「みんなが（　）間{あいだ}に、書{か}きました。」',
                options: ['遊{あそ}ぶ', '遊{あそ}んで', '遊{あそ}んでいる', '遊{あそ}んだ'],
                correctIndex: 2,
                explanation: '對話情境。回答「趁大家在玩的時候寫的」，用「ている形」表示持續狀態。'
            },
            {
                id: 'n4_aida_ni_5',
                sentence: '電車{でんしゃ}に乗{の}っている間{あいだ}に、音楽{おんがく}を（　）。',
                options: ['聞{き}いていた', '聞{き}いた', '聞{き}く', '聞{き}かない'],
                correctIndex: 0,
                explanation: {
                    correct: '「間に」後面通常接瞬間動作，但此題「聞いていた」表示「在那期間一直在聽」。這裡測驗「間に」後也可接持續狀態。',
                    wrong: [
                        '「聞いた」雖然文法可通，但「聽音樂」在搭車期間通常是持續性的。',
                        '「聞く」是辭書形，不適合接在完成的語境。',
                        '「聞かない」語意不合。'
                    ]
                }
            }
        ]
    },
    'n4_amari_nai': {
        id: 'n4_amari_nai',
        pattern: 'あまり～ない',
        connection: 'あまり + 動詞否定形 / い形否定 / な形否定',
        translation: '不怎麼...; 不太...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '程度不高',
                description: '表示程度不太高、頻率不多、或數量不多。必須與否定形式一起使用。',
                examples: [
                    { japanese: '私{わたし}はあまり料理{りょうり}をしません。', chinese: '我不怎麼做飯。' },
                    { japanese: 'このレストランはあまり高{たか}くないです。', chinese: '這家餐廳不太貴。' },
                    { japanese: '彼{かれ}はあまり有名{ゆうめい}じゃありません。', chinese: '他不太有名。' }
                ]
            }
        ],
        analysis: {
            title: '「あまり～ない」與「ぜんぜん～ない」的比較',
            description: '兩者都用於否定，但程度不同。',
            points: [
                {
                    rule: 'あまり～ない：部分否定，「不太」。',
                    examples: [{ japanese: 'あまりおいしくない。', chinese: '不太好吃。（還是可以吃的程度）' }]
                },
                {
                    rule: 'ぜんぜん～ない：完全否定，「完全不」。',
                    examples: [{ japanese: 'ぜんぜんおいしくない。', chinese: '一點都不好吃。（無法接受）' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_amari_nai_1',
                sentence: '最近{さいきん}あまり運動{うんどう}を（　）。',
                options: ['します', 'しました', 'しません', 'する'],
                correctIndex: 2,
                explanation: '「あまり」必須與否定形「しません」搭配使用。'
            },
            {
                id: 'n4_amari_nai_2',
                sentence: 'この映画{えいが}はあまり（　）。',
                options: ['面白{おもしろ}い', '面白{おもしろ}くない', '面白{おもしろ}くある', '面白{おもしろ}かった'],
                correctIndex: 1,
                explanation: '「あまり」需接否定形，い形容詞否定是「くない」。'
            },
            {
                id: 'n4_amari_nai_3',
                sentence: '日本語{にほんご}はあまり（　）ありません。',
                options: ['上手{じょうず}じゃ', '上手{じょうず}に', '上手{じょうず}く', '上手{じょうず}だ'],
                correctIndex: 0,
                explanation: {
                    correct: 'な形容詞的否定是「じゃありません」，配合「あまり」使用。',
                    wrong: [
                        '「上手に」是副詞形式，後面不接「ありません」。',
                        '「上手く」是「上手い」的變化，「上手」是な形容詞。',
                        '「上手だ」是肯定形式，不符合「あまり」的用法。'
                    ]
                }
            },
            {
                id: 'n4_amari_nai_4',
                sentence: '「毎日{まいにち}コーヒーを飲{の}みますか。」\n「いいえ、あまり（　）。」',
                options: ['飲{の}みます', '飲{の}みません', '飲{の}んだ', '飲{の}まない'],
                correctIndex: 1,
                explanation: '對話情境。回答「不太喝」，用「あまり」+「否定形」。'
            },
            {
                id: 'n4_amari_nai_5',
                sentence: '「昨日{きのう}の試験{しけん}、難{むずか}しかった？」\n「ううん、（　）難{むずか}しくなかったよ。」',
                options: ['とても', 'ぜんぜん', 'あまり', 'すごく'],
                correctIndex: 2,
                explanation: {
                    correct: '「あまり～なかった」表示「不太難」，是部分否定的回答。',
                    wrong: [
                        '「とても」用於肯定，不配合否定使用。',
                        '「ぜんぜん～なかった」表示「完全不難」，語氣過於絕對。',
                        '「すごく」用於肯定，強調程度高。'
                    ]
                }
            }
        ]
    },
    'n4_ato_de': {
        id: 'n4_ato_de',
        pattern: '後で（あとで）',
        connection: '動詞た形 + 後で\n名詞 + の + 後で',
        translation: '之後; 稍後',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '時間先後順序',
                description: '表示在某動作或某時間點之後，再做另一件事。前句的動作先發生，後句的動作後發生。',
                examples: [
                    { japanese: 'ご飯{はん}を食{た}べた後{あと}で、散歩{さんぽ}しました。', chinese: '吃完飯之後，去散步了。' },
                    { japanese: '仕事{しごと}の後{あと}で、飲{の}みに行{い}きませんか。', chinese: '工作之後，要不要去喝一杯？' },
                    { japanese: '後{あと}で電話{でんわ}します。', chinese: '稍後再打電話給你。' }
                ]
            }
        ],
        analysis: {
            title: '「後で」與「てから」的比較',
            description: '兩者都表示「之後」，但強調點不同。',
            points: [
                {
                    rule: '後で：單純表示時間先後，前後動作可以無關。',
                    examples: [{ japanese: '宿題{しゅくだい}をした後{あと}で、テレビを見{み}た。', chinese: '做完作業之後，看了電視。' }]
                },
                {
                    rule: 'てから：強調前後動作的連貫性，前句是後句的前提。',
                    examples: [{ japanese: '手{て}を洗{あら}ってから、食{た}べてください。', chinese: '請先洗手再吃。（洗手是吃飯的前提）' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_ato_de_1',
                sentence: '映画{えいが}を（　）後{あと}で、食事{しょくじ}をしました。',
                options: ['見{み}た', '見{み}る', '見{み}て', '見{み}'],
                correctIndex: 0,
                explanation: '「後で」前面接動詞的「た形」。'
            },
            {
                id: 'n4_ato_de_2',
                sentence: '会議{かいぎ}（　）後{あと}で、報告書{ほうこくしょ}を書{か}きます。',
                options: ['の', 'を', 'が', 'に'],
                correctIndex: 0,
                explanation: '名詞接「後で」時，需要加「の」。'
            },
            {
                id: 'n4_ato_de_3',
                sentence: 'シャワーを（　）、寝{ね}ます。',
                options: ['浴{あ}びた後{あと}で', '浴{あ}びてから', '浴{あ}びると', '浴{あ}びたら'],
                correctIndex: 1,
                explanation: {
                    correct: '「てから」強調洗完澡是睡覺的前提，順序關係更緊密。',
                    wrong: [
                        '「た後で」文法正確但語感較弱，「てから」更自然。',
                        '「と」表示必然結果，這裡不是「一洗完就睡」的意思。',
                        '「たら」表示假設或條件，這裡是確定要做的事。'
                    ]
                }
            },
            {
                id: 'n4_ato_de_4',
                sentence: '「レポート、いつ出{だ}しますか。」\n「授業{じゅぎょう}の（　）出{だ}します。」',
                options: ['前{まえ}に', '後{あと}で', '間{あいだ}に', 'うちに'],
                correctIndex: 1,
                explanation: '對話情境。問什麼時候交報告，回答「課後交」。'
            },
            {
                id: 'n4_ato_de_5',
                sentence: '「もう宿題{しゅくだい}やった？」\n「うん、ご飯{はん}を（　）後{あと}でやったよ。」',
                options: ['食{た}べる', '食{た}べた', '食{た}べて', '食{た}べ'],
                correctIndex: 1,
                explanation: '對話情境。「吃完飯之後做的」，動詞用「た形」接「後で」。'
            }
        ]
    },
    'n4_ba': {
        id: 'n4_ba',
        pattern: 'ば',
        connection: '動詞ば形\nい形容詞：い → ければ\nな形容詞：～であれば\n名詞：～であれば',
        translation: '如果...; 假如... (條件形)',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '假設條件',
                description: '表示假設的條件，「如果...的話，就...」。強調條件成立時的結果。',
                examples: [
                    { japanese: '安{やす}ければ、買{か}います。', chinese: '如果便宜的話，就買。' },
                    { japanese: '雨{あめ}が降{ふ}れば、試合{しあい}は中止{ちゅうし}です。', chinese: '如果下雨，比賽就中止。' },
                    { japanese: '薬{くすり}を飲{の}めば、治{なお}りますよ。', chinese: '如果吃藥的話，會好起來的。' }
                ]
            }
        ],
        analysis: {
            title: '條件形的比較：ば / と / たら / なら',
            description: '四種條件表達各有不同特性。',
            points: [
                {
                    rule: 'ば：假設條件，較書面，後句不能接意志表現。',
                    examples: [{ japanese: '春{はる}になれば、桜{さくら}が咲{さ}く。', chinese: '到了春天，櫻花就會開。' }]
                },
                {
                    rule: 'と：必然結果，習慣或自然規律。',
                    examples: [{ japanese: '春{はる}になると、桜{さくら}が咲{さ}く。', chinese: '一到春天，櫻花就開。' }]
                },
                {
                    rule: 'たら：假設或確定未來，最通用。',
                    examples: [{ japanese: '春{はる}になったら、花見{はなみ}に行{い}こう。', chinese: '到了春天的話，去賞花吧。' }]
                },
                {
                    rule: 'なら：基於對方說的話做假設。',
                    examples: [{ japanese: '日本{にほん}に行{い}くなら、京都{きょうと}がいいですよ。', chinese: '如果要去日本的話，京都不錯哦。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_ba_1',
                sentence: '時間{じかん}が（　）、手伝{てつだ}ってください。',
                options: ['あれば', 'あると', 'あったら', 'あるなら'],
                correctIndex: 0,
                explanation: '「ある」的ば形是「あれば」，表示假設「如果有時間的話」。'
            },
            {
                id: 'n4_ba_2',
                sentence: 'この薬{くすり}を（　）、すぐ良{よ}くなりますよ。',
                options: ['飲{の}めば', '飲{の}むと', '飲{の}んだら', '飲{の}むなら'],
                correctIndex: 0,
                explanation: '「飲む」的ば形是「飲めば」，五段動詞把「む」改成「め」加「ば」。'
            },
            {
                id: 'n4_ba_3',
                sentence: 'もっと（　）、買{か}うんですが。',
                options: ['安{やす}ければ', '安{やす}いと', '安{やす}かったら', '安{やす}いなら'],
                correctIndex: 0,
                explanation: {
                    correct: 'い形容詞的ば形是「い→ければ」，「安ければ」表示「如果便宜一點的話」。',
                    wrong: [
                        '「安いと」表示必然結果，這裡是假設語氣。',
                        '「安かったら」也可以，但「ば」在此更自然。',
                        '「安いなら」用於回應對方的話，這裡不適合。'
                    ]
                }
            },
            {
                id: 'n4_ba_4',
                sentence: '「どうすれば日本語{にほんご}が上手{じょうず}になりますか。」\n「毎日{まいにち}練習{れんしゅう}（　）、上手{じょうず}になりますよ。」',
                options: ['すれば', 'すると', 'したら', 'するなら'],
                correctIndex: 0,
                explanation: '對話情境。問「怎樣才能變好」，回答用「すれば」（如果練習的話）。'
            },
            {
                id: 'n4_ba_5',
                sentence: 'ボタンを押{お}（　）、ドアが開{ひら}きます。',
                options: ['せば', 'すと', 'したら', 'すなら'],
                correctIndex: 1,
                explanation: {
                    correct: '「と」表示必然結果，「按下按鈕，門就會開」是機械的必然動作。',
                    wrong: [
                        '「押せば」文法正確，但「と」更適合表達機械性的必然結果。',
                        '「押したら」也可以，但語感偏向「如果按的話」。',
                        '「押すなら」用於回應對方的話，這裡不適合。'
                    ]
                }
            }
        ]
    },
    'n4_baai_wa': {
        id: 'n4_baai_wa',
        pattern: '場合は（ばあいは）',
        connection: '動詞普通形 + 場合は\nい形容詞 + 場合は\nな形容詞 + な + 場合は\n名詞 + の + 場合は',
        translation: '...的情況下; 萬一',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '假設某種情況',
                description: '表示在某種特定情況或條件下，應該如何處理。常用於說明規則、應對方法或給予建議。',
                examples: [
                    { japanese: '雨{あめ}の場合{ばあい}は、試合{しあい}を中止{ちゅうし}します。', chinese: '下雨的話，比賽會中止。' },
                    { japanese: '分{わ}からない場合{ばあい}は、質問{しつもん}してください。', chinese: '不懂的話，請提問。' },
                    { japanese: '緊急{きんきゅう}の場合{ばあい}は、このボタンを押{お}してください。', chinese: '緊急情況下，請按這個按鈕。' }
                ]
            }
        ],
        analysis: {
            title: '「場合」與「とき」的比較',
            description: '兩者都可表示「...的時候」，但用法略有不同。',
            points: [
                {
                    rule: '場合：強調「情況、狀況」，常用於假設或規則說明。',
                    examples: [{ japanese: '火事{かじ}の場合{ばあい}は、エレベーターを使{つか}わないでください。', chinese: '發生火災時，請不要使用電梯。' }]
                },
                {
                    rule: 'とき：強調「時間點」，可用於過去、現在、未來的時間。',
                    examples: [{ japanese: '子供{こども}のとき、よく泣{な}いていた。', chinese: '小時候經常哭。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_baai_wa_1',
                sentence: '地震{じしん}の（　）は、机{つくえ}の下{した}に隠{かく}れてください。',
                options: ['場合{ばあい}', 'とき', 'ところ', '間{あいだ}'],
                correctIndex: 0,
                explanation: '「地震的情況下」用「場合」，這是緊急應對的說明。'
            },
            {
                id: 'n4_baai_wa_2',
                sentence: '熱{ねつ}が（　）場合{ばあい}は、学校{がっこう}を休{やす}んでください。',
                options: ['ある', 'あった', 'あり', 'あって'],
                correctIndex: 0,
                explanation: '動詞辭書形接「場合」，「熱がある場合」。'
            },
            {
                id: 'n4_baai_wa_3',
                sentence: '天気{てんき}が（　）場合{ばあい}は、ハイキングに行{い}きません。',
                options: ['悪{わる}い', '悪{わる}く', '悪{わる}くて', '悪{わる}かった'],
                correctIndex: 0,
                explanation: {
                    correct: 'い形容詞直接接「場合」，用辭書形「悪い」。',
                    wrong: [
                        '「悪く」是副詞形式，不能直接接「場合」。',
                        '「悪くて」是て形，用於連接理由。',
                        '「悪かった」是過去式，這裡是假設未來的情況。'
                    ]
                }
            },
            {
                id: 'n4_baai_wa_4',
                sentence: '「もし遅刻{ちこく}したらどうしますか。」\n「遅刻{ちこく}した（　）は、先生{せんせい}に連絡{れんらく}します。」',
                options: ['場合{ばあい}', 'とき', 'あと', '前{まえ}'],
                correctIndex: 0,
                explanation: '對話情境。問遲到怎麼辦，回答用「場合」說明應對方式。'
            },
            {
                id: 'n4_baai_wa_5',
                sentence: '静{しず}か（　）場合{ばあい}は、勉強{べんきょう}がはかどります。',
                options: ['の', 'な', 'に', 'で'],
                correctIndex: 1,
                explanation: {
                    correct: 'な形容詞接「場合」時用「な」，「静かな場合」。',
                    wrong: [
                        '「の」用於名詞接「場合」。',
                        '「に」是副詞形式。',
                        '「で」表示原因或手段，不用於接「場合」。'
                    ]
                }
            }
        ]
    },
    'n4_bakari': {
        id: 'n4_bakari',
        pattern: 'ばかり',
        connection: '名詞 + ばかり\n動詞て形 + ばかりいる\n動詞た形 + ばかり（剛剛...）',
        translation: '只有; 僅僅; 光是...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '限定「只有」（帶有負面語氣）',
                description: '表示「只有」或「淨是」，通常帶有說話者不滿、責備或擔憂的語氣。',
                examples: [
                    { japanese: '彼{かれ}は肉{にく}ばかり食{た}べている。', chinese: '他只吃肉。（暗示不均衡）' },
                    { japanese: '最近{さいきん}、雨{あめ}ばかりだ。', chinese: '最近淨是下雨。' },
                    { japanese: '文句{もんく}ばかり言{い}わないでください。', chinese: '請不要光是抱怨。' }
                ]
            },
            {
                usageId: 2,
                title: '剛剛完成（た形 + ばかり）',
                description: '表示某動作剛剛完成不久，強調時間上的「剛才」。',
                examples: [
                    { japanese: '今{いま}、起{お}きたばかりです。', chinese: '我剛剛才起床。' },
                    { japanese: 'この本{ほん}は買{か}ったばかりだ。', chinese: '這本書是剛買的。' }
                ]
            }
        ],
        analysis: {
            title: '「ばかり」與「だけ」的比較',
            description: '兩者都表示限定，但語氣不同。',
            points: [
                {
                    rule: 'ばかり：主觀評價，常帶負面語氣，「淨是」。',
                    examples: [{ japanese: 'ゲームばかりしている。', chinese: '淨是在玩遊戲。（責備語氣）' }]
                },
                {
                    rule: 'だけ：客觀陳述，中性語氣，「只有」。',
                    examples: [{ japanese: 'ゲームだけしている。', chinese: '只在玩遊戲。（單純描述）' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_bakari_1',
                sentence: '弟{おとうと}は漫画{まんが}（　）読{よ}んでいる。',
                options: ['ばかり', 'だけ', 'しか', 'まで'],
                correctIndex: 0,
                explanation: '「ばかり」帶有「淨是看漫畫」的不滿或擔憂語氣。'
            },
            {
                id: 'n4_bakari_2',
                sentence: 'さっき昼{ひる}ご飯{はん}を（　）ばかりなので、まだお腹{なか}が空{す}いていません。',
                options: ['食{た}べた', '食{た}べる', '食{た}べて', '食{た}べ'],
                correctIndex: 0,
                explanation: '「た形＋ばかり」表示「剛剛才...」。'
            },
            {
                id: 'n4_bakari_3',
                sentence: '彼女{かのじょ}は甘{あま}いもの（　）食{た}べている。',
                options: ['を', 'ばかり', 'だけを', 'しか'],
                correctIndex: 1,
                explanation: {
                    correct: '「ばかり」表示「淨是吃甜食」，帶有負面評價。',
                    wrong: [
                        '「を」只是賓語標記，沒有限定意味。',
                        '「だけを」語感中性，不帶評價。',
                        '「しか」需要接否定形，這裡是肯定。'
                    ]
                }
            },
            {
                id: 'n4_bakari_4',
                sentence: '「もう宿題{しゅくだい}やったの？」\n「ううん、テレビを見{み}て（　）いて、まだ...。」',
                options: ['しか', 'だけ', 'ばかり', 'まで'],
                correctIndex: 2,
                explanation: '對話情境。「光是在看電視」帶有自責或不好意思的語氣。'
            },
            {
                id: 'n4_bakari_5',
                sentence: '「このパソコン、新{あたら}しい？」\n「うん、（　）ばかりだよ。」',
                options: ['買{か}う', '買{か}った', '買{か}って', '買{か}い'],
                correctIndex: 1,
                explanation: '對話情境。「剛買的」用「た形＋ばかり」。'
            }
        ]
    },
    'n4_dake_de': {
        id: 'n4_dake_de',
        pattern: 'だけで',
        connection: '名詞 + だけで\n動詞辭書形 + だけで',
        translation: '光是...; 僅僅...就',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '限定範圍內就足夠/不足夠',
                description: '表示「只憑...就」，強調在有限的條件下達成或無法達成某結果。',
                examples: [
                    { japanese: '見{み}ただけで分{わ}かりました。', chinese: '光看就懂了。' },
                    { japanese: '聞{き}くだけで緊張{きんちょう}します。', chinese: '光聽就緊張。' },
                    { japanese: '説明{せつめい}だけでは分{わ}かりません。', chinese: '光是說明還是不懂。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_dake_de_1',
                sentence: 'その映画{えいが}は、予告{よこく}を（　）だけで見{み}たくなりました。',
                options: ['見{み}る', '見{み}た', '見{み}て', '見{み}'],
                correctIndex: 1,
                explanation: '「見ただけで」表示「光是看了就...」，用過去式。'
            },
            {
                id: 'n4_dake_de_2',
                sentence: '名前{なまえ}（　）だけで住所{じゅうしょ}は分{わ}かりません。',
                options: ['を', 'が', 'で', ''],
                correctIndex: 3,
                explanation: '「名詞＋だけで」直接連接，「名前だけでは」。'
            },
            {
                id: 'n4_dake_de_3',
                sentence: 'この料理{りょうり}は、見{み}る（　）おいしそうです。',
                options: ['だけで', 'ばかりで', 'ほどで', 'までで'],
                correctIndex: 0,
                explanation: {
                    correct: '「見るだけで」表示「光是看就覺得好吃」。',
                    wrong: [
                        '「ばかりで」帶有負面語氣，這裡是正面評價。',
                        '「ほどで」不存在這種用法。',
                        '「までで」表示範圍的結束，語意不合。'
                    ]
                }
            },
            {
                id: 'n4_dake_de_4',
                sentence: '「説明{せつめい}を読{よ}んだら分{わ}かりますか。」\n「いいえ、（　）だけでは分{わ}かりません。」',
                options: ['読{よ}む', '読{よ}んだ', '読{よ}み', '読{よ}んで'],
                correctIndex: 0,
                explanation: '對話情境。「光是讀還是不懂」用「辭書形＋だけでは」。'
            },
            {
                id: 'n4_dake_de_5',
                sentence: '話{はな}す（　）では伝{つた}わらないことがある。',
                options: ['だけ', 'ばかり', 'ほど', 'まで'],
                correctIndex: 0,
                explanation: '「話すだけでは」表示「光靠說話是傳達不了的」。'
            }
        ]
    },
    'n4_dasu': {
        id: 'n4_dasu',
        pattern: '出す（だす）',
        connection: '動詞ます形（去ます）+ 出す',
        translation: '開始...; 突然...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '突然開始做某動作',
                description: '接在動詞ます形後面，表示某動作突然開始。常用於無法預期或突發的情況。',
                examples: [
                    { japanese: '急{きゅう}に雨{あめ}が降{ふ}り出{だ}した。', chinese: '突然開始下雨了。' },
                    { japanese: '彼女{かのじょ}は泣{な}き出{だ}した。', chinese: '她突然哭了起來。' },
                    { japanese: '赤{あか}ちゃんが笑{わら}い出{だ}した。', chinese: '嬰兒突然笑了起來。' }
                ]
            }
        ],
        analysis: {
            title: '「出す」與「始める」的比較',
            description: '兩者都表示「開始」，但語感不同。',
            points: [
                {
                    rule: '出す：突然、意料之外地開始。',
                    examples: [{ japanese: '雨{あめ}が降{ふ}り出{だ}した。', chinese: '（突然）開始下雨了。' }]
                },
                {
                    rule: '始める：有意識或計畫地開始。',
                    examples: [{ japanese: '勉強{べんきょう}を始{はじ}めた。', chinese: '開始念書了。（有意識的行為）' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_dasu_1',
                sentence: '子供{こども}が急{きゅう}に（　）出{だ}した。',
                options: ['走{はし}り', '走{はし}る', '走{はし}って', '走{はし}った'],
                correctIndex: 0,
                explanation: '「ます形」去掉「ます」接「出す」，「走ります」→「走り」＋「出す」。'
            },
            {
                id: 'n4_dasu_2',
                sentence: '彼{かれ}は突然{とつぜん}笑{わら}い（　）。',
                options: ['出{だ}した', '始{はじ}めた', 'かけた', '続{つづ}けた'],
                correctIndex: 0,
                explanation: '「突然」搭配「出す」，表示意外開始笑。'
            },
            {
                id: 'n4_dasu_3',
                sentence: '明日{あした}から日本語{にほんご}の勉強{べんきょう}を（　）。',
                options: ['始{はじ}め出{だ}す', '始{はじ}める', '出{だ}す', '始{はじ}み出{だ}す'],
                correctIndex: 1,
                explanation: {
                    correct: '有計畫地「開始學習」用「始める」，不用「出す」。',
                    wrong: [
                        '「始め出す」語法錯誤。',
                        '「出す」不能單獨使用表示「開始」，需要接在動詞後。',
                        '「始み出す」不存在。'
                    ]
                }
            },
            {
                id: 'n4_dasu_4',
                sentence: '「なんで濡{ぬ}れてるの？」\n「さっき急{きゅう}に雨{あめ}が（　）出{だ}したんだ。」',
                options: ['降{ふ}り', '降{ふ}る', '降{ふ}って', '降{ふ}った'],
                correctIndex: 0,
                explanation: '對話情境。「突然開始下雨」用「降り出す」。'
            },
            {
                id: 'n4_dasu_5',
                sentence: '映画{えいが}を見{み}ていたら、彼女{かのじょ}が泣{な}き（　）。',
                options: ['出{だ}した', '始{はじ}めた', 'かけた', '終{お}わった'],
                correctIndex: 0,
                explanation: '看電影時「突然哭起來」是非預期的，用「出す」。'
            }
        ]
    },
    'n4_de_gozaimasu': {
        id: 'n4_de_gozaimasu',
        pattern: 'でございます',
        connection: '名詞 + でございます',
        translation: '是 (鄭重語)',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '「です」的鄭重語',
                description: '是「です」的更禮貌說法，常用於服務業、正式場合或商務情境。',
                examples: [
                    { japanese: 'こちらがお部屋{へや}でございます。', chinese: '這裡是您的房間。' },
                    { japanese: '私{わたくし}は田中{たなか}でございます。', chinese: '我是田中。' },
                    { japanese: '本日{ほんじつ}は晴天{せいてん}でございます。', chinese: '今天是晴天。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_de_gozaimasu_1',
                sentence: 'お客様{きゃくさま}、こちらがメニュー（　）。',
                options: ['です', 'でございます', 'であります', 'だ'],
                correctIndex: 1,
                explanation: '對客人使用鄭重語「でございます」。'
            },
            {
                id: 'n4_de_gozaimasu_2',
                sentence: '私{わたくし}、山田{やまだ}（　）が、ご予約{よやく}いただいておりますでしょうか。',
                options: ['です', 'でございます', 'であります', 'だ'],
                correctIndex: 1,
                explanation: '商務場合自我介紹用「でございます」。'
            },
            {
                id: 'n4_de_gozaimasu_3',
                sentence: 'お待{ま}たせいたしました。ご注文{ちゅうもん}の品{しな}（　）。',
                options: ['です', 'でございます', 'だ', 'である'],
                correctIndex: 1,
                explanation: {
                    correct: '服務業送餐時使用鄭重語「でございます」。',
                    wrong: [
                        '「です」禮貌度不夠。',
                        '「だ」是普通體，對客人不適用。',
                        '「である」是書面語，不用於口語服務。'
                    ]
                }
            },
            {
                id: 'n4_de_gozaimasu_4',
                sentence: '「すみません、トイレはどこですか。」\n「あちら（　）。」',
                options: ['です', 'でございます', 'だ', 'でした'],
                correctIndex: 1,
                explanation: '對話情境。店員回答客人用鄭重語。'
            },
            {
                id: 'n4_de_gozaimasu_5',
                sentence: '「お名前{なまえ}は？」\n「鈴木{すずき}（　）。」',
                options: ['だ', 'です', 'でございます', 'である'],
                correctIndex: 1,
                explanation: {
                    correct: '一般情境用「です」即可，「でございます」過於正式。',
                    wrong: [
                        '「だ」太隨便。',
                        '「でございます」除非是非常正式的場合，否則過於鄭重。',
                        '「である」是書面語。'
                    ]
                }
            }
        ]
    },
    'n4_demo': {
        id: 'n4_demo',
        pattern: 'でも',
        connection: '名詞 + でも',
        translation: '...之類的; 或者',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '舉例提議（軟化語氣）',
                description: '用於提出建議時，舉一個例子，表示「...之類的」，語氣較委婉。',
                examples: [
                    { japanese: 'コーヒーでも飲{の}みませんか。', chinese: '要不要喝杯咖啡之類的？' },
                    { japanese: '映画{えいが}でも見{み}に行{い}きましょう。', chinese: '去看個電影之類的吧。' },
                    { japanese: '週末{しゅうまつ}、どこかにでも行{い}きたいな。', chinese: '週末想去個什麼地方。' }
                ]
            }
        ],
        analysis: {
            title: '提議用「でも」與逆接「でも」的比較',
            description: '「でも」有兩種用法，需從語境區分。',
            points: [
                {
                    rule: '名詞＋でも：舉例、軟化語氣「...之類的」。',
                    examples: [{ japanese: 'お茶{ちゃ}でもどうですか。', chinese: '來杯茶之類的如何？' }]
                },
                {
                    rule: '句首でも：逆接「可是、但是」。',
                    examples: [{ japanese: '行{い}きたいです。でも、時間{じかん}がありません。', chinese: '我想去。但是沒有時間。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_demo_1',
                sentence: '疲{つか}れたね。お茶{ちゃ}（　）飲{の}もうか。',
                options: ['を', 'でも', 'が', 'は'],
                correctIndex: 1,
                explanation: '「でも」用於提議，軟化語氣，「喝杯茶之類的吧」。'
            },
            {
                id: 'n4_demo_2',
                sentence: '暇{ひま}なら、ゲーム（　）しない？',
                options: ['を', 'でも', 'が', 'は'],
                correctIndex: 1,
                explanation: '「ゲームでも」表示「玩個遊戲之類的」，是委婉的提議。'
            },
            {
                id: 'n4_demo_3',
                sentence: '寒{さむ}いですね。温{あたた}かい（　）飲{の}みましょう。',
                options: ['もの', 'ものでも', 'ことでも', 'ことを'],
                correctIndex: 1,
                explanation: {
                    correct: '「ものでも」表示「溫暖的東西之類的」。',
                    wrong: [
                        '「もの」需要加「を」或其他助詞。',
                        '「ことでも」不自然，「こと」是抽象事物。',
                        '「ことを」語意不通。'
                    ]
                }
            },
            {
                id: 'n4_demo_4',
                sentence: '「週末{しゅうまつ}、何{なに}する？」\n「映画{えいが}（　）見{み}に行{い}かない？」',
                options: ['を', 'でも', 'が', 'は'],
                correctIndex: 1,
                explanation: '對話情境。提議「去看個電影之類的」。'
            },
            {
                id: 'n4_demo_5',
                sentence: '行{い}きたいです。（　）、お金{かね}がありません。',
                options: ['でも', 'だから', 'それで', 'そして'],
                correctIndex: 0,
                explanation: {
                    correct: '句首「でも」表示逆接「但是」，與前句相反。',
                    wrong: [
                        '「だから」表示因果「所以」，語意相反。',
                        '「それで」表示順接「於是」。',
                        '「そして」表示並列「然後」。'
                    ]
                }
            }
        ]
    },
    'n4_dewa_nai_ka': {
        id: 'n4_dewa_nai_ka',
        pattern: 'ではないか',
        connection: '動詞普通形 / い形 / な形-な / 名詞 + ではないか',
        translation: '不是嗎?; 對吧?',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '確認或驚訝',
                description: '用於向對方確認，或表達發現某事時的驚訝。語氣可以是確認、驚訝或輕微責備。',
                examples: [
                    { japanese: 'これ、君{きみ}のペンではないか。', chinese: '這不是你的筆嗎？' },
                    { japanese: 'もう10時{じ}ではないか！遅刻{ちこく}だ！', chinese: '已經10點了不是嗎！遲到了！' },
                    { japanese: '彼{かれ}、かなり上手{じょうず}ではないか。', chinese: '他相當厲害不是嗎。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_dewa_nai_ka_1',
                sentence: 'この問題{もんだい}、簡単{かんたん}（　）。',
                options: ['ではないか', 'ではないの', 'じゃないか', 'じゃないの'],
                correctIndex: 0,
                explanation: '「簡単」是な形容詞，接「ではないか」表示確認「這問題不是很簡單嗎」。'
            },
            {
                id: 'n4_dewa_nai_ka_2',
                sentence: 'もう夜{よる}中{なか}の12時{じ}（　）！早{はや}く寝{ね}なさい。',
                options: ['だ', 'ではないか', 'です', 'ではない'],
                correctIndex: 1,
                explanation: '驚訝加責備語氣「已經半夜12點了不是嗎！」'
            },
            {
                id: 'n4_dewa_nai_ka_3',
                sentence: 'あれ、山田{やまだ}さん（　）！久{ひさ}しぶり！',
                options: ['だ', 'ではないか', 'です', 'ではない'],
                correctIndex: 1,
                explanation: {
                    correct: '驚訝地發現「咦，那不是山田嗎！」',
                    wrong: [
                        '「だ」是普通的斷定，沒有驚訝語氣。',
                        '「です」是禮貌體，語氣太正式。',
                        '「ではない」是否定，語意相反。'
                    ]
                }
            },
            {
                id: 'n4_dewa_nai_ka_4',
                sentence: '「これ、誰{だれ}の本{ほん}？」\n「君{きみ}の本{ほん}（　）？忘{わす}れたの？」',
                options: ['だ', 'ではないか', 'です', 'ではない'],
                correctIndex: 1,
                explanation: '對話情境。確認「這不是你的書嗎？」'
            },
            {
                id: 'n4_dewa_nai_ka_5',
                sentence: 'この料理{りょうり}、おいしい（　）。',
                options: ['ではないか', 'ではないの', 'じゃないか', 'じゃないの'],
                correctIndex: 0,
                explanation: 'い形容詞直接接「ではないか」，表示讚賞確認。'
            }
        ]
    },
    'n4_ga_hitsuyou': {
        id: 'n4_ga_hitsuyou',
        pattern: 'が必要（がひつよう）',
        connection: '名詞 + が必要だ',
        translation: '需要; 必要',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '表示需要某物',
                description: '說明某事物是必需的，不可缺少的。「必要」是な形容詞。',
                examples: [
                    { japanese: 'パスポートが必要{ひつよう}です。', chinese: '需要護照。' },
                    { japanese: '日本語{にほんご}を勉強{べんきょう}するには、時間{じかん}が必要{ひつよう}だ。', chinese: '學習日語需要時間。' },
                    { japanese: 'このアプリを使{つか}うには、登録{とうろく}が必要{ひつよう}です。', chinese: '使用這個app需要註冊。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_ga_hitsuyou_1',
                sentence: 'ビザ（　）必要{ひつよう}ですか。',
                options: ['が', 'を', 'は', 'に'],
                correctIndex: 0,
                explanation: '「必要」前面的需要物用「が」標記。'
            },
            {
                id: 'n4_ga_hitsuyou_2',
                sentence: 'この仕事{しごと}には経験{けいけん}が（　）。',
                options: ['必要{ひつよう}だ', '必要{ひつよう}する', '必要{ひつよう}ある', '必要{ひつよう}いる'],
                correctIndex: 0,
                explanation: '「必要」是な形容詞，用「必要だ」。'
            },
            {
                id: 'n4_ga_hitsuyou_3',
                sentence: '海外旅行{かいがいりょこう}には何{なに}が（　）ですか。',
                options: ['必要{ひつよう}', 'いる', 'ある', 'する'],
                correctIndex: 0,
                explanation: {
                    correct: '問「出國旅行需要什麼」，用「必要」。',
                    wrong: [
                        '「いる」需要用「何がいりますか」的形式。',
                        '「ある」表示存在，不表示需要。',
                        '「する」語意不通。'
                    ]
                }
            },
            {
                id: 'n4_ga_hitsuyou_4',
                sentence: '「何{なに}を持{も}っていけばいいですか。」\n「パスポートと、お金{かね}（　）必要{ひつよう}ですよ。」',
                options: ['が', 'も', 'を', 'は'],
                correctIndex: 0,
                explanation: '對話情境。「錢也需要」可用「が」或「も」，此處用「が」。'
            },
            {
                id: 'n4_ga_hitsuyou_5',
                sentence: '健康{けんこう}のためには、運動{うんどう}（　）必要{ひつよう}だ。',
                options: ['が', 'を', 'は', 'に'],
                correctIndex: 0,
                explanation: '「運動是必要的」，需要物用「が」。'
            }
        ]
    },
    'n4_ga_suru': {
        id: 'n4_ga_suru',
        pattern: 'がする',
        connection: '名詞（感覺類）+ がする',
        translation: '感覺到 (氣味/聲音/味道)',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '感知到五感刺激',
                description: '用於表達通過五感（嗅覺、聽覺、味覺、觸覺）感受到的東西。常見搭配：匂い（氣味）、音（聲音）、味（味道）、感じ（感覺）等。',
                examples: [
                    { japanese: 'いい匂{にお}いがする。', chinese: '有好聞的味道。' },
                    { japanese: '変{へん}な音{おと}がした。', chinese: '發出了奇怪的聲音。' },
                    { japanese: 'このスープは塩{しお}の味{あじ}がする。', chinese: '這湯有鹹味。' }
                ]
            }
        ],
        analysis: {
            title: '「がする」可搭配的名詞',
            description: '主要用於感官相關的名詞。',
            points: [
                {
                    rule: '匂い/香り：氣味',
                    examples: [{ japanese: 'コーヒーの香{かお}りがする。', chinese: '有咖啡香。' }]
                },
                {
                    rule: '音/声：聲音',
                    examples: [{ japanese: '足音{あしおと}がする。', chinese: '有腳步聲。' }]
                },
                {
                    rule: '味：味道',
                    examples: [{ japanese: '甘{あま}い味{あじ}がする。', chinese: '有甜味。' }]
                },
                {
                    rule: '感じ/気：感覺',
                    examples: [{ japanese: '寒気{さむけ}がする。', chinese: '感到寒冷。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_ga_suru_1',
                sentence: 'この花{はな}は、いい匂{にお}い（　）する。',
                options: ['が', 'を', 'は', 'に'],
                correctIndex: 0,
                explanation: '「匂いがする」固定搭配，表示「有...的味道」。'
            },
            {
                id: 'n4_ga_suru_2',
                sentence: '変{へん}な音{おと}（　）しますね。',
                options: ['が', 'を', 'は', 'に'],
                correctIndex: 0,
                explanation: '「音がする」表示「發出聲音」。'
            },
            {
                id: 'n4_ga_suru_3',
                sentence: 'このケーキはレモンの味{あじ}（　）。',
                options: ['がする', 'をする', 'にする', 'する'],
                correctIndex: 0,
                explanation: {
                    correct: '「味がする」表示「有...的味道」。',
                    wrong: [
                        '「味をする」語法錯誤。',
                        '「味にする」表示「做成...口味」，意思不同。',
                        '「味する」缺少助詞「が」。'
                    ]
                }
            },
            {
                id: 'n4_ga_suru_4',
                sentence: '「何{なに}か焦{こ}げた匂{にお}いがしない？」\n「本当{ほんとう}だ。（　）がするね。」',
                options: ['音{おと}', '味{あじ}', '匂{にお}い', '声{こえ}'],
                correctIndex: 2,
                explanation: '對話情境。問是否聞到焦味，回答也是關於「匂い」。'
            },
            {
                id: 'n4_ga_suru_5',
                sentence: '寒気{さむけ}（　）するので、早{はや}く家{いえ}に帰{かえ}りたい。',
                options: ['が', 'を', 'は', 'に'],
                correctIndex: 0,
                explanation: '「寒気がする」表示「感到寒冷」。'
            }
        ]
    },
    'n4_garu': {
        id: 'n4_garu',
        pattern: 'がる',
        connection: 'い形容詞（去い）+ がる\nな形容詞語幹 + がる',
        translation: '表現出...的樣子',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '第三者的情感表現',
                description: '日語中，形容詞原本用於描述說話者自己的感受。若要描述第三者「看起來」有某種感受或表現出某種樣子，需要加「がる」。',
                examples: [
                    { japanese: '彼{かれ}は怖{こわ}がっている。', chinese: '他顯得很害怕。' },
                    { japanese: '子供{こども}は新{あたら}しいおもちゃを欲{ほ}しがっている。', chinese: '孩子想要新玩具。' },
                    { japanese: '彼女{かのじょ}は寂{さび}しがっていた。', chinese: '她顯得很寂寞。' }
                ]
            }
        ],
        analysis: {
            title: '「がる」的使用限制',
            description: '「がる」只用於描述第三者，不用於自己。',
            points: [
                {
                    rule: '第一人稱用原形：私は怖い。',
                    examples: [{ japanese: '私{わたし}は怖{こわ}い。', chinese: '我害怕。' }]
                },
                {
                    rule: '第三人稱用がる：彼は怖がっている。',
                    examples: [{ japanese: '彼{かれ}は怖{こわ}がっている。', chinese: '他顯得害怕。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_garu_1',
                sentence: '弟{おとうと}はお化{ば}け屋敷{やしき}を怖{こわ}（　）いる。',
                options: ['がって', 'くて', 'がり', 'がる'],
                correctIndex: 0,
                explanation: '描述弟弟（第三者）「害怕的樣子」，用「怖がっている」。'
            },
            {
                id: 'n4_garu_2',
                sentence: '子供{こども}はおもちゃを欲{ほ}し（　）いる。',
                options: ['がって', 'くて', 'がり', 'がる'],
                correctIndex: 0,
                explanation: '「欲しい」變成「欲しがる」，描述孩子想要的樣子。'
            },
            {
                id: 'n4_garu_3',
                sentence: '彼女{かのじょ}は一人{ひとり}で寂{さび}し（　）いた。',
                options: ['がって', 'くて', 'がり', 'がる'],
                correctIndex: 0,
                explanation: {
                    correct: '「寂しい」變成「寂しがる」，過去進行式「寂しがっていた」。',
                    wrong: [
                        '「寂しくて」是て形，表示理由或並列。',
                        '「寂しがり」是名詞形「愛寂寞的人」。',
                        '「寂しがる」是辭書形，這裡需要過去進行式。'
                    ]
                }
            },
            {
                id: 'n4_garu_4',
                sentence: '「田中{たなか}さん、何{なに}か悲{かな}しいことがあったの？」\n「うん、彼{かれ}、最近{さいきん}悲{かな}し（　）いるよ。」',
                options: ['がって', 'くて', 'そうで', 'みたいで'],
                correctIndex: 0,
                explanation: '對話情境。描述田中（第三者）顯得悲傷的樣子。'
            },
            {
                id: 'n4_garu_5',
                sentence: '私{わたし}は暑{あつ}い日{ひ}が（　）。',
                options: ['嫌{いや}だ', '嫌{いや}がる', '嫌{いや}がって', '嫌{いや}がった'],
                correctIndex: 0,
                explanation: {
                    correct: '第一人稱用原形「嫌だ」，不用「がる」。',
                    wrong: [
                        '「嫌がる」用於描述第三者。',
                        '「嫌がって」是第三者的て形。',
                        '「嫌がった」是第三者的過去式。'
                    ]
                }
            }
        ]
    },
    'n4_gozaimasu': {
        id: 'n4_gozaimasu',
        pattern: 'ございます',
        connection: '名詞 + がございます / でございます',
        translation: '有; 在 (鄭重語)',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '「あります」的鄭重語',
                description: '是「あります」的更禮貌說法，常用於服務業或正式場合。',
                examples: [
                    { japanese: 'お手洗{てあら}いはあちらにございます。', chinese: '洗手間在那邊。' },
                    { japanese: 'ご質問{しつもん}はございますか。', chinese: '有問題嗎？' },
                    { japanese: '少々{しょうしょう}お時間{じかん}がございます。', chinese: '還有一點時間。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_gozaimasu_1',
                sentence: 'お客様{きゃくさま}、トイレは2階{かい}に（　）。',
                options: ['あります', 'ございます', 'おります', 'いらっしゃいます'],
                correctIndex: 1,
                explanation: '對客人使用鄭重語「ございます」。'
            },
            {
                id: 'n4_gozaimasu_2',
                sentence: '何{なに}かご質問{しつもん}（　）ございますか。',
                options: ['が', 'は', 'を', 'に'],
                correctIndex: 0,
                explanation: '「ご質問がございますか」固定用法。'
            },
            {
                id: 'n4_gozaimasu_3',
                sentence: 'お時間{じかん}は（　）ございますか。',
                options: ['少{すこ}し', '少々{しょうしょう}', 'ちょっと', '少{すこ}しだけ'],
                correctIndex: 1,
                explanation: {
                    correct: '鄭重語場合用「少々」搭配「ございます」。',
                    wrong: [
                        '「少し」較一般，配「あります」更自然。',
                        '「ちょっと」是口語，不配合鄭重語。',
                        '「少しだけ」太長，不夠正式。'
                    ]
                }
            },
            {
                id: 'n4_gozaimasu_4',
                sentence: '「すみません、この商品{しょうひん}はありますか。」\n「はい、（　）。こちらでございます。」',
                options: ['あります', 'ございます', 'おります', 'います'],
                correctIndex: 1,
                explanation: '對話情境。店員回答客人用「ございます」。'
            },
            {
                id: 'n4_gozaimasu_5',
                sentence: 'ただいまセール中{ちゅう}で（　）。',
                options: ['あります', 'ございます', 'おります', 'います'],
                correctIndex: 1,
                explanation: '店內廣播或告示用鄭重語「ございます」。'
            }
        ]
    },
    'n4_hajimeru': {
        id: 'n4_hajimeru',
        pattern: '始める（はじめる）',
        connection: '動詞ます形（去ます）+ 始める',
        translation: '開始...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '開始做某動作',
                description: '接在動詞ます形後面，表示開始某個動作。通常是有意識、有計畫地開始。',
                examples: [
                    { japanese: '日本語{にほんご}を勉強{べんきょう}し始{はじ}めた。', chinese: '開始學習日語了。' },
                    { japanese: '雨{あめ}が降{ふ}り始{はじ}めた。', chinese: '開始下雨了。' },
                    { japanese: '彼{かれ}は話{はな}し始{はじ}めた。', chinese: '他開始說話了。' }
                ]
            }
        ],
        analysis: {
            title: '「始める」與「出す」的比較',
            description: '兩者都表示「開始」，但語感不同。',
            points: [
                {
                    rule: '始める：有意識或按計畫開始。',
                    examples: [{ japanese: '勉強{べんきょう}し始{はじ}めた。', chinese: '開始念書了。（決定開始）' }]
                },
                {
                    rule: '出す：突然、意料之外地開始。',
                    examples: [{ japanese: '泣{な}き出{だ}した。', chinese: '突然哭了起來。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_hajimeru_1',
                sentence: '彼{かれ}は去年{きょねん}からジョギングを（　）始{はじ}めた。',
                options: ['走{はし}り', '走{はし}る', '走{はし}って', '走{はし}った'],
                correctIndex: 0,
                explanation: '「ます形」去掉「ます」接「始める」，「走ります」→「走り」。'
            },
            {
                id: 'n4_hajimeru_2',
                sentence: '雨{あめ}が（　）始{はじ}めました。',
                options: ['降{ふ}り', '降{ふ}る', '降{ふ}って', '降{ふ}った'],
                correctIndex: 0,
                explanation: '「降ります」→「降り」＋「始める」。'
            },
            {
                id: 'n4_hajimeru_3',
                sentence: '来月{らいげつ}からダイエットを（　）。',
                options: ['始{はじ}めます', '出{だ}します', 'かけます', '続{つづ}けます'],
                correctIndex: 0,
                explanation: {
                    correct: '有計畫地「開始減肥」用「始める」。',
                    wrong: [
                        '「出す」用於突發的開始，減肥是計畫行為。',
                        '「かける」表示「差一點就...」，意思不同。',
                        '「続ける」表示「繼續」，不是「開始」。'
                    ]
                }
            },
            {
                id: 'n4_hajimeru_4',
                sentence: '「いつから日本語{にほんご}を勉強{べんきょう}しているんですか。」\n「3年{ねん}前{まえ}から（　）始{はじ}めました。」',
                options: ['勉強{べんきょう}し', '勉強{べんきょう}する', '勉強{べんきょう}して', '勉強{べんきょう}した'],
                correctIndex: 0,
                explanation: '對話情境。「從3年前開始學習」。'
            },
            {
                id: 'n4_hajimeru_5',
                sentence: '子供{こども}が急{きゅう}に泣{な}き（　）。',
                options: ['始{はじ}めた', '出{だ}した', 'かけた', '終{お}わった'],
                correctIndex: 1,
                explanation: {
                    correct: '「急に」表示突然，搭配「出す」更自然。',
                    wrong: [
                        '「始めた」用於計畫性的開始。',
                        '「かけた」表示「差點就...」。',
                        '「終わった」表示結束。'
                    ]
                }
            }
        ]
    },
    'n4_hazu_da': {
        id: 'n4_hazu_da',
        pattern: 'はずだ',
        connection: '動詞普通形 + はずだ\nい形容詞 + はずだ\nな形容詞-な + はずだ\n名詞-の + はずだ',
        translation: '應該...; 理應...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '有根據的推測',
                description: '基於某種證據或理由，推測某事「應該」是這樣。說話者相信這個推測是正確的。',
                examples: [
                    { japanese: '彼{かれ}はもう着{つ}いているはずだ。', chinese: '他應該已經到了。' },
                    { japanese: 'この店{みせ}は安{やす}いはずだ。', chinese: '這家店應該很便宜。' },
                    { japanese: '明日{あした}は晴{は}れのはずだ。', chinese: '明天應該是晴天。' }
                ]
            }
        ],
        analysis: {
            title: '「はずだ」與「はずがない」',
            description: '肯定與否定的推測。',
            points: [
                {
                    rule: 'はずだ：應該...（肯定推測）',
                    examples: [{ japanese: '彼{かれ}は来{く}るはずだ。', chinese: '他應該會來。' }]
                },
                {
                    rule: 'はずがない：不可能...（否定推測）',
                    examples: [{ japanese: '彼{かれ}が嘘{うそ}をつくはずがない。', chinese: '他不可能說謊。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_hazu_da_1',
                sentence: 'メールを送{おく}ったから、もう届{とど}いている（　）。',
                options: ['はずだ', 'はずがない', 'わけだ', 'ものだ'],
                correctIndex: 0,
                explanation: '「因為寄了郵件，應該已經收到了」是基於證據的推測。'
            },
            {
                id: 'n4_hazu_da_2',
                sentence: 'この問題{もんだい}は簡単{かんたん}な（　）。',
                options: ['はずだ', 'はずがない', 'ようだ', 'そうだ'],
                correctIndex: 0,
                explanation: 'な形容詞接「はずだ」用「な」，「簡単なはずだ」。'
            },
            {
                id: 'n4_hazu_da_3',
                sentence: '彼{かれ}は今日{きょう}休{やす}みの（　）。',
                options: ['はずだ', 'はずがない', 'ようだ', 'らしい'],
                correctIndex: 0,
                explanation: {
                    correct: '名詞接「はずだ」用「の」，「休みのはずだ」。',
                    wrong: [
                        '「はずがない」是否定，「不可能是休息」。',
                        '「ようだ」是根據外觀的推測。',
                        '「らしい」是根據傳聞的推測。'
                    ]
                }
            },
            {
                id: 'n4_hazu_da_4',
                sentence: '「田中{たなか}さん、もう来{き}た？」\n「まだだけど、もうすぐ来{く}る（　）だよ。」',
                options: ['はず', 'わけ', 'もの', 'こと'],
                correctIndex: 0,
                explanation: '對話情境。「應該快到了」。'
            },
            {
                id: 'n4_hazu_da_5',
                sentence: '彼{かれ}が遅刻{ちこく}する（　）。いつも時間{じかん}に正確{せいかく}だから。',
                options: ['はずだ', 'はずがない', 'ようだ', 'らしい'],
                correctIndex: 1,
                explanation: {
                    correct: '「他不可能遲到」用「はずがない」，基於他一向準時的理由。',
                    wrong: [
                        '「はずだ」是肯定推測，與「不可能」矛盾。',
                        '「ようだ」是外觀推測。',
                        '「らしい」是傳聞推測。'
                    ]
                }
            }
        ]
    },
    'n4_hazu_ga_nai': {
        id: 'n4_hazu_ga_nai',
        pattern: 'はずがない',
        connection: '動詞普通形 + はずがない\nい形容詞 + はずがない\nな形容詞-な + はずがない\n名詞-の + はずがない',
        translation: '不可能...; 應該不會...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '強烈否定的推測',
                description: '基於某種證據或理由，強烈否定某事的可能性。比「ないはずだ」語氣更強。',
                examples: [
                    { japanese: '彼{かれ}がそんなことをするはずがない。', chinese: '他不可能做那種事。' },
                    { japanese: 'こんな簡単{かんたん}な問題{もんだい}が分{わ}からないはずがない。', chinese: '不可能不懂這麼簡單的問題。' },
                    { japanese: '嘘{うそ}のはずがない。', chinese: '不可能是謊話。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_hazu_ga_nai_1',
                sentence: '彼{かれ}が嘘{うそ}をつく（　）。',
                options: ['はずだ', 'はずがない', 'ようだ', 'らしい'],
                correctIndex: 1,
                explanation: '強烈否定「他不可能說謊」。'
            },
            {
                id: 'n4_hazu_ga_nai_2',
                sentence: 'あんなに練習{れんしゅう}したのに、負{ま}ける（　）。',
                options: ['はずだ', 'はずがない', 'ものだ', 'ことだ'],
                correctIndex: 1,
                explanation: '「練習了那麼多，不可能輸」。'
            },
            {
                id: 'n4_hazu_ga_nai_3',
                sentence: '彼女{かのじょ}は約束{やくそく}を破{やぶ}る人{ひと}じゃない。そんなこと（　）。',
                options: ['するはずだ', 'するはずがない', 'しないはずだ', 'しないはずがない'],
                correctIndex: 1,
                explanation: {
                    correct: '「她不可能做那種事」用「するはずがない」。',
                    wrong: [
                        '「するはずだ」是肯定「應該會做」。',
                        '「しないはずだ」語意通但語氣較弱。',
                        '「しないはずがない」是雙重否定「不可能不做」。'
                    ]
                }
            },
            {
                id: 'n4_hazu_ga_nai_4',
                sentence: '「田中{たなか}さん、怒{おこ}ってるかな？」\n「大丈夫{だいじょうぶ}。あの人{ひと}がそんなことで怒{おこ}る（　）よ。」',
                options: ['はずだ', 'はずがない', 'ようだ', 'らしい'],
                correctIndex: 1,
                explanation: '對話情境。「他不可能為那種事生氣」。'
            },
            {
                id: 'n4_hazu_ga_nai_5',
                sentence: 'こんな高{たか}い（　）。絶対{ぜったい}間違{まちが}いだ。',
                options: ['はずだ', 'はずがない', 'わけだ', 'ものだ'],
                correctIndex: 1,
                explanation: '「不可能這麼貴」，強烈否定。'
            }
        ]
    },
    'n4_irassharu': {
        id: 'n4_irassharu',
        pattern: 'いらっしゃる',
        connection: '尊敬語，取代「いる / 行く / 来る」',
        translation: '在; 來; 去 (尊敬語)',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '「いる・行く・来る」的尊敬語',
                description: '用於尊敬對方或談論尊敬對象時，取代「いる」（在）、「行く」（去）、「来る」（來）三個動詞。',
                examples: [
                    { japanese: '先生{せんせい}はいらっしゃいますか。', chinese: '老師在嗎？' },
                    { japanese: '社長{しゃちょう}は明日{あした}いらっしゃいます。', chinese: '社長明天會來。' },
                    { japanese: 'どちらにいらっしゃいますか。', chinese: '您要去哪裡？' }
                ]
            }
        ],
        analysis: {
            title: '「いらっしゃる」的活用',
            description: '雖是五段動詞，但活用特殊。',
            points: [
                {
                    rule: 'ます形：いらっしゃいます',
                    examples: [{ japanese: '先生{せんせい}はいらっしゃいます。', chinese: '老師在。' }]
                },
                {
                    rule: 'て形：いらっしゃって / いらして',
                    examples: [{ japanese: 'お元気{げんき}でいらっしゃいますか。', chinese: '您好嗎？' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_irassharu_1',
                sentence: '山田{やまだ}部長{ぶちょう}は今{いま}会議室{かいぎしつ}に（　）。',
                options: ['います', 'いらっしゃいます', 'おります', 'あります'],
                correctIndex: 1,
                explanation: '對上司使用尊敬語「いらっしゃいます」。'
            },
            {
                id: 'n4_irassharu_2',
                sentence: 'お客様{きゃくさま}は何時{なんじ}に（　）か。',
                options: ['来{き}ます', 'いらっしゃいます', '参{まい}ります', 'おります'],
                correctIndex: 1,
                explanation: '詢問客人「幾點來」用尊敬語。'
            },
            {
                id: 'n4_irassharu_3',
                sentence: '私{わたし}は午後{ごご}3時{じ}に（　）。',
                options: ['いらっしゃいます', '参{まい}ります', 'いらっしゃる', 'いらして'],
                correctIndex: 1,
                explanation: {
                    correct: '第一人稱用自謙語「参ります」，不用尊敬語。',
                    wrong: [
                        '「いらっしゃいます」是尊敬語，不能用於自己。',
                        '「いらっしゃる」是辭書形，也是尊敬語。',
                        '「いらして」是て形，也是尊敬語。'
                    ]
                }
            },
            {
                id: 'n4_irassharu_4',
                sentence: '「田中{たなか}さんはいらっしゃいますか。」\n「はい、（　）。」',
                options: ['います', 'いらっしゃいます', 'おります', 'いる'],
                correctIndex: 2,
                explanation: '對話情境。回答關於自己公司的人用自謙語「おります」。'
            },
            {
                id: 'n4_irassharu_5',
                sentence: '先生{せんせい}、お元気{げんき}で（　）ますか。',
                options: ['い', 'いらっしゃい', 'おり', 'あり'],
                correctIndex: 1,
                explanation: '對老師用尊敬語「いらっしゃいます」。'
            }
        ]
    },
    'n4_itashimasu': {
        id: 'n4_itashimasu',
        pattern: 'いたします',
        connection: '自謙語，取代「します」',
        translation: '做 (自謙語)',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '「する」的自謙語',
                description: '用於謙虛地表達自己的動作，是「します」的自謙表達。常用於商務場合或對上級說話時。',
                examples: [
                    { japanese: '私{わたし}が案内{あんない}いたします。', chinese: '由我來帶路。' },
                    { japanese: 'ご連絡{れんらく}いたします。', chinese: '我會與您聯絡。' },
                    { japanese: 'お待{ま}ちいたしております。', chinese: '恭候您的光臨。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_itashimasu_1',
                sentence: '後{あと}ほどご連絡{れんらく}（　）。',
                options: ['します', 'いたします', 'なさいます', 'されます'],
                correctIndex: 1,
                explanation: '謙虛地表達自己會聯絡對方用「いたします」。'
            },
            {
                id: 'n4_itashimasu_2',
                sentence: '私{わたし}が説明{せつめい}（　）。',
                options: ['します', 'いたします', 'なさいます', 'されます'],
                correctIndex: 1,
                explanation: '「由我來說明」用自謙語「いたします」。'
            },
            {
                id: 'n4_itashimasu_3',
                sentence: '社長{しゃちょう}は明日{あした}会議{かいぎ}を（　）。',
                options: ['します', 'いたします', 'なさいます', 'される'],
                correctIndex: 2,
                explanation: {
                    correct: '描述社長的動作用尊敬語「なさいます」。',
                    wrong: [
                        '「します」是普通語。',
                        '「いたします」是自謙語，用於自己的動作。',
                        '「される」也是尊敬語，但「なさいます」更禮貌。'
                    ]
                }
            },
            {
                id: 'n4_itashimasu_4',
                sentence: '「お荷物{にもつ}、お持{も}ちしましょうか。」\n「お願{ねが}い（　）。」',
                options: ['します', 'いたします', 'なさいます', 'されます'],
                correctIndex: 1,
                explanation: '對話情境。「拜託您了」用自謙語。'
            },
            {
                id: 'n4_itashimasu_5',
                sentence: 'ご予約{よやく}の確認{かくにん}を（　）。',
                options: ['します', 'いたします', 'なさいます', 'される'],
                correctIndex: 1,
                explanation: '店員確認預約用「いたします」。'
            }
        ]
    },
    'n4_ka_dou_ka': {
        id: 'n4_ka_dou_ka',
        pattern: 'かどうか',
        connection: '動詞普通形 / い形 / な形-だ / 名詞-だ + かどうか',
        translation: '是否...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '表示疑問或不確定',
                description: '用於表達「是否...」的間接疑問。常與「分かる」「知る」「確認する」等動詞一起使用。',
                examples: [
                    { japanese: '彼{かれ}が来{く}るかどうか分{わ}かりません。', chinese: '不知道他會不會來。' },
                    { japanese: 'これでいいかどうか確認{かくにん}してください。', chinese: '請確認這樣可不可以。' },
                    { japanese: '本当{ほんとう}かどうか分{わ}からない。', chinese: '不知道是不是真的。' }
                ]
            }
        ],
        analysis: {
            title: '「かどうか」與「か」的比較',
            description: '兩者都用於間接疑問，但用法不同。',
            points: [
                {
                    rule: 'かどうか：是/否的二選一疑問',
                    examples: [{ japanese: '行{い}くかどうか決{き}めてください。', chinese: '請決定去還是不去。' }]
                },
                {
                    rule: 'か：疑問詞（何、誰、どこ等）的疑問',
                    examples: [{ japanese: '何{なに}を食{た}べるか決{き}めてください。', chinese: '請決定要吃什麼。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_ka_dou_ka_1',
                sentence: '明日{あした}雨{あめ}が降{ふ}る（　）分{わ}かりません。',
                options: ['か', 'かどうか', 'かな', 'かも'],
                correctIndex: 1,
                explanation: '「會不會下雨」是是/否的二選一疑問，用「かどうか」。'
            },
            {
                id: 'n4_ka_dou_ka_2',
                sentence: 'この答{こた}えが正{ただ}しい（　）確認{かくにん}してください。',
                options: ['か', 'かどうか', 'かな', 'かしら'],
                correctIndex: 1,
                explanation: '確認「對不對」是是/否的疑問。'
            },
            {
                id: 'n4_ka_dou_ka_3',
                sentence: '何{なに}を買{か}う（　）まだ決{き}めていません。',
                options: ['か', 'かどうか', 'かな', 'かも'],
                correctIndex: 0,
                explanation: {
                    correct: '「買什麼」用疑問詞「何」，所以用「か」。',
                    wrong: [
                        '「かどうか」用於是/否的二選一。',
                        '「かな」是自問語氣。',
                        '「かも」是推測「說不定」。'
                    ]
                }
            },
            {
                id: 'n4_ka_dou_ka_4',
                sentence: '「参加{さんか}しますか。」\n「まだ行{い}く（　）決{き}めていません。」',
                options: ['か', 'かどうか', 'かな', 'のか'],
                correctIndex: 1,
                explanation: '對話情境。「還沒決定去不去」。'
            },
            {
                id: 'n4_ka_dou_ka_5',
                sentence: '彼{かれ}が好{す}きだ（　）分{わ}からない。',
                options: ['か', 'かどうか', 'かな', 'かしら'],
                correctIndex: 1,
                explanation: '「是否喜歡他」用「かどうか」。'
            }
        ]
    },
    'n4_kamo_shirenai': {
        id: 'n4_kamo_shirenai',
        pattern: 'かもしれない',
        connection: '動詞普通形 / い形 / な形-だ / 名詞-だ + かもしれない',
        translation: '也許; 說不定',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '不確定的推測',
                description: '表示說話者對某事的可能性做出推測，但不確定。比「たぶん」更不確定。',
                examples: [
                    { japanese: '明日{あした}雨{あめ}が降{ふ}るかもしれない。', chinese: '明天說不定會下雨。' },
                    { japanese: '彼{かれ}は来{こ}ないかもしれない。', chinese: '他也許不會來。' },
                    { japanese: 'これは本当{ほんとう}かもしれない。', chinese: '這說不定是真的。' }
                ]
            }
        ],
        analysis: {
            title: '推測語氣的強度比較',
            description: '不同的推測表達有不同的確信程度。',
            points: [
                {
                    rule: 'に違いない：一定是...（最強）',
                    examples: [{ japanese: '彼{かれ}は来{く}るに違{ちが}いない。', chinese: '他一定會來。' }]
                },
                {
                    rule: 'はずだ：應該...（較強）',
                    examples: [{ japanese: '彼{かれ}は来{く}るはずだ。', chinese: '他應該會來。' }]
                },
                {
                    rule: 'かもしれない：也許...（較弱）',
                    examples: [{ japanese: '彼{かれ}は来{く}るかもしれない。', chinese: '他也許會來。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_kamo_shirenai_1',
                sentence: '電車{でんしゃ}が遅{おく}れる（　）。',
                options: ['かもしれない', 'はずだ', 'に違{ちが}いない', 'ようだ'],
                correctIndex: 0,
                explanation: '不確定的推測「電車說不定會誤點」。'
            },
            {
                id: 'n4_kamo_shirenai_2',
                sentence: 'この話{はなし}は嘘{うそ}（　）。',
                options: ['かもしれない', 'はずだ', 'に違{ちが}いない', 'ようだ'],
                correctIndex: 0,
                explanation: '「這話說不定是謊話」，不確定的推測。'
            },
            {
                id: 'n4_kamo_shirenai_3',
                sentence: '彼{かれ}はプロだから、絶対{ぜったい}勝{か}つ（　）。',
                options: ['かもしれない', 'はずだ', 'に違{ちが}いない', 'ようだ'],
                correctIndex: 2,
                explanation: {
                    correct: '有「絕對」的強調，用最強的推測「に違いない」。',
                    wrong: [
                        '「かもしれない」太弱，與「絕對」矛盾。',
                        '「はずだ」還不夠強。',
                        '「ようだ」是根據外觀的推測。'
                    ]
                }
            },
            {
                id: 'n4_kamo_shirenai_4',
                sentence: '「今日{きょう}、田中{たなか}さん来{く}るかな。」\n「来{こ}ない（　）ね。忙{いそが}しいって言{い}ってたから。」',
                options: ['かもしれない', 'はずだ', 'に違{ちが}いない', 'ようだ'],
                correctIndex: 0,
                explanation: '對話情境。「說不定不會來」。'
            },
            {
                id: 'n4_kamo_shirenai_5',
                sentence: '「鍵{かぎ}がない！」\n「車{くるま}の中{なか}に忘{わす}れた（　）よ。」',
                options: ['かもしれない', 'はずだ', 'に違{ちが}いない', 'ようだ'],
                correctIndex: 0,
                explanation: '對話情境。「說不定忘在車裡了」。'
            }
        ]
    },
    'n4_koto_ga_aru': {
        id: 'n4_koto_ga_aru',
        pattern: 'ことがある',
        connection: '動詞辭書形 + ことがある',
        translation: '有時候...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '偶爾發生的事',
                description: '表示某事偶爾發生，不是經常或總是發生的。',
                examples: [
                    { japanese: '朝{あさ}ご飯{はん}を食{た}べないことがある。', chinese: '有時候不吃早餐。' },
                    { japanese: '週末{しゅうまつ}に映画{えいが}を見{み}ることがある。', chinese: '週末有時會看電影。' },
                    { japanese: '電車{でんしゃ}で寝過{ねす}ごすことがある。', chinese: '有時候會在電車上睡過站。' }
                ]
            }
        ],
        analysis: {
            title: '「ことがある」與「たことがある」的比較',
            description: '接續不同，意思也不同。',
            points: [
                {
                    rule: '辭書形＋ことがある：有時候...（習慣性的偶發）',
                    examples: [{ japanese: '遅刻{ちこく}することがある。', chinese: '有時候會遲到。' }]
                },
                {
                    rule: 'た形＋ことがある：曾經...過（過去經驗）',
                    examples: [{ japanese: '日本{にほん}に行{い}ったことがある。', chinese: '曾經去過日本。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_koto_ga_aru_1',
                sentence: '忙{いそが}しい時{とき}は、昼{ひる}ご飯{はん}を食{た}べない（　）。',
                options: ['ことがある', 'ことがない', 'ことになる', 'ことにする'],
                correctIndex: 0,
                explanation: '「忙的時候有時候不吃午餐」。'
            },
            {
                id: 'n4_koto_ga_aru_2',
                sentence: '週末{しゅうまつ}は早{はや}く起{お}きる（　）。',
                options: ['ことがある', 'ことがない', 'ことになる', 'ことにする'],
                correctIndex: 0,
                explanation: '「週末有時候會早起」。'
            },
            {
                id: 'n4_koto_ga_aru_3',
                sentence: '日本{にほん}に行{い}った（　）ありますか。',
                options: ['ことは', 'ことが', 'ことを', 'ことに'],
                correctIndex: 1,
                explanation: {
                    correct: '「曾經去過嗎」用「たことがある」，這是過去經驗。',
                    wrong: [
                        '「ことは」語法錯誤。',
                        '「ことを」語法錯誤。',
                        '「ことに」表示「決定做」。'
                    ]
                }
            },
            {
                id: 'n4_koto_ga_aru_4',
                sentence: '「毎日{まいにち}運動{うんどう}してる？」\n「毎日{まいにち}じゃないけど、週{しゅう}に2、3回{かい}する（　）よ。」',
                options: ['ことがある', 'ことがない', 'ことになる', 'ことにする'],
                correctIndex: 0,
                explanation: '對話情境。「一週有時候做2、3次」。'
            },
            {
                id: 'n4_koto_ga_aru_5',
                sentence: '納豆{なっとう}を食{た}べた（　）ありますか。',
                options: ['ことは', 'ことが', 'ことを', 'ことに'],
                correctIndex: 1,
                explanation: '「吃過納豆嗎」是過去經驗的詢問。'
            }
        ]
    },
    'n4_koto_ni_naru': {
        id: 'n4_koto_ni_naru',
        pattern: 'ことになる',
        connection: '動詞辭書形 / ない形 + ことになる',
        translation: '決定...; 變成...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '被決定或自然形成的結果',
                description: '表示由外部因素（公司、規定、情況等）決定的事項，或事情自然發展成某種結果。強調結果而非主體的意志。',
                examples: [
                    { japanese: '来月{らいげつ}から大阪{おおさか}に転勤{てんきん}することになりました。', chinese: '決定下個月調職到大阪。' },
                    { japanese: 'この道{みち}は通{とお}れないことになっている。', chinese: '這條路規定不能通行。' },
                    { japanese: '会議{かいぎ}は中止{ちゅうし}になることになった。', chinese: '會議決定取消了。' }
                ]
            }
        ],
        analysis: {
            title: '「ことになる」與「ことにする」的比較',
            description: '決定的主體不同。',
            points: [
                {
                    rule: 'ことになる：外部決定（被動）',
                    examples: [{ japanese: '日本{にほん}に行{い}くことになった。', chinese: '（公司）決定讓我去日本。' }]
                },
                {
                    rule: 'ことにする：自己決定（主動）',
                    examples: [{ japanese: '日本{にほん}に行{い}くことにした。', chinese: '（我）決定要去日本。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_koto_ni_naru_1',
                sentence: '来週{らいしゅう}から毎日{まいにち}残業{ざんぎょう}する（　）。',
                options: ['ことになった', 'ことにした', 'ことがある', 'ことができる'],
                correctIndex: 0,
                explanation: '公司規定或上級決定的事用「ことになる」。'
            },
            {
                id: 'n4_koto_ni_naru_2',
                sentence: '規則{きそく}で、ここでは走{はし}らない（　）。',
                options: ['ことになっている', 'ことにしている', 'ことがある', 'ことができる'],
                correctIndex: 0,
                explanation: '規定「不能跑」用「ことになっている」。'
            },
            {
                id: 'n4_koto_ni_naru_3',
                sentence: '毎朝{まいあさ}6時{じ}に起{お}きる（　）。',
                options: ['ことになっている', 'ことにしている', 'ことがある', 'ことができる'],
                correctIndex: 1,
                explanation: {
                    correct: '自己決定的習慣用「ことにしている」。',
                    wrong: [
                        '「ことになっている」是規定，不適合個人習慣。',
                        '「ことがある」表示偶爾發生。',
                        '「ことができる」表示能力。'
                    ]
                }
            },
            {
                id: 'n4_koto_ni_naru_4',
                sentence: '「転勤{てんきん}したって聞{き}いたよ。」\n「うん、来月{らいげつ}から東京{とうきょう}に行{い}く（　）んだ。」',
                options: ['ことになった', 'ことにした', 'ことがある', 'ことができる'],
                correctIndex: 0,
                explanation: '對話情境。調職是公司決定的。'
            },
            {
                id: 'n4_koto_ni_naru_5',
                sentence: 'この学校{がっこう}では制服{せいふく}を着{き}る（　）。',
                options: ['ことになっている', 'ことにしている', 'ことがある', 'ことができる'],
                correctIndex: 0,
                explanation: '學校規定穿制服。'
            }
        ]
    },
    'n4_koto_ni_suru': {
        id: 'n4_koto_ni_suru',
        pattern: 'ことにする',
        connection: '動詞辭書形 / ない形 + ことにする',
        translation: '決定...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '自己做出決定',
                description: '表示說話者或主語自己做出的決定。強調是主動的意志行為。',
                examples: [
                    { japanese: '来年{らいねん}、日本{にほん}に留学{りゅうがく}することにした。', chinese: '決定明年去日本留學。' },
                    { japanese: '今日{きょう}からお酒{さけ}を飲{の}まないことにします。', chinese: '決定從今天開始不喝酒。' },
                    { japanese: 'この件{けん}は断{ことわ}ることにしました。', chinese: '決定拒絕這件事。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_koto_ni_suru_1',
                sentence: '健康{けんこう}のために、毎日{まいにち}運動{うんどう}する（　）。',
                options: ['ことにした', 'ことになった', 'ことがある', 'ことができる'],
                correctIndex: 0,
                explanation: '自己決定每天運動用「ことにする」。'
            },
            {
                id: 'n4_koto_ni_suru_2',
                sentence: '今日{きょう}から甘{あま}いものを食{た}べない（　）。',
                options: ['ことにした', 'ことになった', 'ことがある', 'ことができる'],
                correctIndex: 0,
                explanation: '自己決定不吃甜食。'
            },
            {
                id: 'n4_koto_ni_suru_3',
                sentence: '会社{かいしゃ}の規則{きそく}で、禁煙{きんえん}する（　）。',
                options: ['ことにした', 'ことになった', 'ことがある', 'ことになっている'],
                correctIndex: 3,
                explanation: {
                    correct: '公司規定禁煙用「ことになっている」。',
                    wrong: [
                        '「ことにした」是自己決定。',
                        '「ことになった」是過去的外部決定。',
                        '「ことがある」表示偶爾發生。'
                    ]
                }
            },
            {
                id: 'n4_koto_ni_suru_4',
                sentence: '「ダイエット始{はじ}めたの？」\n「うん、来月{らいげつ}の結婚式{けっこんしき}までに痩{や}せる（　）んだ。」',
                options: ['ことにした', 'ことになった', 'ことがある', 'ことができる'],
                correctIndex: 0,
                explanation: '對話情境。自己決定要減肥。'
            },
            {
                id: 'n4_koto_ni_suru_5',
                sentence: 'この仕事{しごと}を引{ひ}き受{う}ける（　）。',
                options: ['ことにした', 'ことになった', 'ことがある', 'ことができる'],
                correctIndex: 0,
                explanation: '決定接受這份工作是自己的意志。'
            }
        ]
    },
    'n4_made_ni': {
        id: 'n4_made_ni',
        pattern: 'までに',
        connection: '時間名詞 / 動詞辭書形 + までに',
        translation: '在...之前; 到...為止',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '截止期限',
                description: '表示某動作必須在某個時間點之前完成。強調「期限」。',
                examples: [
                    { japanese: '5時{じ}までに帰{かえ}ってきてください。', chinese: '請在5點之前回來。' },
                    { japanese: '金曜日{きんようび}までにレポートを出{だ}してください。', chinese: '請在星期五之前交報告。' },
                    { japanese: '彼{かれ}が来{く}るまでに準備{じゅんび}しておこう。', chinese: '在他來之前先準備好吧。' }
                ]
            }
        ],
        analysis: {
            title: '「までに」與「まで」的比較',
            description: '兩者都有「到...為止」的意思，但用法不同。',
            points: [
                {
                    rule: 'までに：期限，動作在該時間點「之前」完成。',
                    examples: [{ japanese: '5時{じ}までに帰{かえ}る。', chinese: '5點之前回來。（可能4點就回來）' }]
                },
                {
                    rule: 'まで：持續，動作「一直」進行到該時間點。',
                    examples: [{ japanese: '5時{じ}まで働{はたら}く。', chinese: '工作到5點為止。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_made_ni_1',
                sentence: '来週{らいしゅう}（　）申込書{もうしこみしょ}を出{だ}してください。',
                options: ['までに', 'まで', 'から', 'まで'],
                correctIndex: 0,
                explanation: '「在下週之前」提交，表示期限用「までに」。'
            },
            {
                id: 'n4_made_ni_2',
                sentence: '試験{しけん}が始{はじ}まる（　）復習{ふくしゅう}しておいてください。',
                options: ['までに', 'まで', 'あとで', 'ところ'],
                correctIndex: 0,
                explanation: '在考試開始「之前」複習。'
            },
            {
                id: 'n4_made_ni_3',
                sentence: '夜{よる}10時{じ}（　）勉強{べんきょう}していた。',
                options: ['までに', 'まで', 'から', 'で'],
                correctIndex: 1,
                explanation: {
                    correct: '「一直讀書到10點」，動作持續用「まで」。',
                    wrong: [
                        '「までに」表示期限，不是持續。',
                        '「から」表示開始時間。',
                        '「で」不用於時間持續。'
                    ]
                }
            },
            {
                id: 'n4_made_ni_4',
                sentence: '「いつまでに終{お}わりますか。」\n「明日{あした}（　）終{お}わらせます。」',
                options: ['までに', 'まで', 'から', 'で'],
                correctIndex: 0,
                explanation: '對話情境。「明天之前完成」。'
            },
            {
                id: 'n4_made_ni_5',
                sentence: '彼{かれ}が来{く}る（　）部屋{へや}を片付{かたづ}けよう。',
                options: ['までに', 'まで', 'あとで', 'ところ'],
                correctIndex: 0,
                explanation: '「在他來之前」整理房間。'
            }
        ]
    },
    'n4_mama': {
        id: 'n4_mama',
        pattern: 'まま',
        connection: '動詞た形 / ない形 + まま\nい形容詞 + まま\nな形容詞-な + まま\n名詞-の + まま',
        translation: '保持...的狀態',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '維持某種狀態不變',
                description: '表示某種狀態一直保持著，沒有改變。常帶有「本應改變但沒改變」的語感。',
                examples: [
                    { japanese: '靴{くつ}を履{は}いたまま家{いえ}に入{はい}った。', chinese: '穿著鞋子就進了家裡。' },
                    { japanese: '電気{でんき}をつけたまま寝{ね}てしまった。', chinese: '開著燈就睡著了。' },
                    { japanese: 'そのままでいいですよ。', chinese: '就那樣就好了。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_mama_1',
                sentence: '窓{まど}を開{あ}けた（　）寝{ね}てしまった。',
                options: ['まま', 'ながら', 'ところ', 'うちに'],
                correctIndex: 0,
                explanation: '「開著窗戶就睡著了」，狀態維持不變。'
            },
            {
                id: 'n4_mama_2',
                sentence: '彼{かれ}は何{なに}も言{い}わない（　）帰{かえ}った。',
                options: ['まま', 'ながら', 'ところ', 'うちに'],
                correctIndex: 0,
                explanation: '「什麼都沒說就回去了」，否定狀態維持。'
            },
            {
                id: 'n4_mama_3',
                sentence: 'メガネをかけた（　）、シャワーを浴{あ}びてしまった。',
                options: ['まま', 'ながら', 'ところ', 'うちに'],
                correctIndex: 0,
                explanation: {
                    correct: '「戴著眼鏡就洗澡了」，狀態維持。',
                    wrong: [
                        '「ながら」表示同時做兩件事，這裡是狀態維持。',
                        '「ところ」表示時間點。',
                        '「うちに」表示在某期間內。'
                    ]
                }
            },
            {
                id: 'n4_mama_4',
                sentence: '「テレビ、消{け}さなくていいの？」\n「うん、つけた（　）でいいよ。」',
                options: ['まま', 'ながら', 'ところ', 'うちに'],
                correctIndex: 0,
                explanation: '對話情境。「開著就好」。'
            },
            {
                id: 'n4_mama_5',
                sentence: 'ドアが開{あ}いた（　）だったので、閉{し}めました。',
                options: ['まま', 'ながら', 'ところ', 'うちに'],
                correctIndex: 0,
                explanation: '「門一直開著的狀態」，所以關了。'
            }
        ]
    },
    'n4_mitai_da': {
        id: 'n4_mitai_da',
        pattern: 'みたいだ',
        connection: '動詞普通形 / い形 / な形-∅ / 名詞 + みたいだ',
        translation: '好像...; 像...一樣',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '推測或比喻',
                description: '根據觀察到的情況做出推測，或用於比喻。口語中常用。',
                examples: [
                    { japanese: '雨{あめ}が降{ふ}るみたいだ。', chinese: '好像要下雨了。' },
                    { japanese: '彼{かれ}は風邪{かぜ}をひいたみたいだ。', chinese: '他好像感冒了。' },
                    { japanese: 'まるで夢{ゆめ}みたいだ。', chinese: '簡直像夢一樣。' }
                ]
            }
        ],
        analysis: {
            title: '「みたいだ」與「ようだ」的比較',
            description: '兩者意思相近，但語氣不同。',
            points: [
                {
                    rule: 'みたいだ：口語，較隨意',
                    examples: [{ japanese: '雨{あめ}みたいだね。', chinese: '好像是雨呢。' }]
                },
                {
                    rule: 'ようだ：書面語，較正式',
                    examples: [{ japanese: '雨{あめ}のようです。', chinese: '似乎是雨。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_mitai_da_1',
                sentence: '空{そら}が暗{くら}いから、雨{あめ}が降{ふ}る（　）。',
                options: ['みたいだ', 'らしい', 'そうだ', 'ようだ'],
                correctIndex: 0,
                explanation: '根據天色做推測，口語用「みたいだ」。'
            },
            {
                id: 'n4_mitai_da_2',
                sentence: '彼{かれ}、今日{きょう}は元気{げんき}がない（　）。',
                options: ['みたいだ', 'らしい', 'そうだ', 'ようだ'],
                correctIndex: 0,
                explanation: '根據觀察推測「他好像沒精神」。'
            },
            {
                id: 'n4_mitai_da_3',
                sentence: '彼女{かのじょ}は人形{にんぎょう}（　）きれいだ。',
                options: ['みたいに', 'らしく', 'そうに', 'ように'],
                correctIndex: 0,
                explanation: {
                    correct: '比喻「像洋娃娃一樣漂亮」，用「みたいに」修飾形容詞。',
                    wrong: [
                        '「らしく」表示「有...風格地」。',
                        '「そうに」表示樣態。',
                        '「ように」也可以，但「みたいに」更口語。'
                    ]
                }
            },
            {
                id: 'n4_mitai_da_4',
                sentence: '「田中{たなか}さん、結婚{けっこん}したんだって。」\n「へえ、本当{ほんとう}（　）。」',
                options: ['みたいだね', 'らしいね', 'そうだね', 'ようだね'],
                correctIndex: 0,
                explanation: '對話情境。「好像是真的呢」。'
            },
            {
                id: 'n4_mitai_da_5',
                sentence: 'この料理{りょうり}、まるでレストラン（　）だ。',
                options: ['みたい', 'らしい', 'そう', 'よう'],
                correctIndex: 0,
                explanation: '比喻「簡直像餐廳做的一樣」。'
            }
        ]
    },
    'n4_nagara': {
        id: 'n4_nagara',
        pattern: 'ながら',
        connection: '動詞ます形（去ます）+ ながら',
        translation: '一邊...一邊...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '同時進行兩個動作',
                description: '表示同一主語同時進行兩個動作。主要動作在後句，附屬動作在「ながら」前面。',
                examples: [
                    { japanese: '音楽{おんがく}を聴{き}きながら勉強{べんきょう}する。', chinese: '一邊聽音樂一邊讀書。' },
                    { japanese: 'テレビを見{み}ながら食{た}べる。', chinese: '一邊看電視一邊吃飯。' },
                    { japanese: '歩{ある}きながら話{はな}しましょう。', chinese: '邊走邊聊吧。' }
                ]
            }
        ],
        analysis: {
            title: '「ながら」的主要動作與附屬動作',
            description: '後句是主要動作，前句是附屬動作。',
            points: [
                {
                    rule: '附屬動作在前：音楽を聴きながら',
                    examples: [{ japanese: '音楽{おんがく}を聴{き}きながら勉強{べんきょう}する。', chinese: '（主要是）讀書，（順便）聽音樂。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_nagara_1',
                sentence: 'コーヒーを（　）ながら、本{ほん}を読{よ}んでいます。',
                options: ['飲{の}み', '飲{の}む', '飲{の}んで', '飲{の}んだ'],
                correctIndex: 0,
                explanation: '「ます形」去掉「ます」接「ながら」。'
            },
            {
                id: 'n4_nagara_2',
                sentence: '電話{でんわ}で話{はな}し（　）、運転{うんてん}するのは危{あぶ}ないです。',
                options: ['ながら', 'まま', 'ところ', 'うちに'],
                correctIndex: 0,
                explanation: '「一邊講電話一邊開車」是同時進行。'
            },
            {
                id: 'n4_nagara_3',
                sentence: 'テレビを見{み}（　）、ご飯{はん}を食{た}べた。',
                options: ['ながら', 'まま', 'ところ', 'うちに'],
                correctIndex: 0,
                explanation: {
                    correct: '「一邊看電視一邊吃飯」。',
                    wrong: [
                        '「まま」表示狀態維持，不是同時進行。',
                        '「ところ」表示時間點。',
                        '「うちに」表示在某期間內。'
                    ]
                }
            },
            {
                id: 'n4_nagara_4',
                sentence: '「何{なに}してるの？」\n「音楽{おんがく}を聴{き}き（　）、宿題{しゅくだい}してるよ。」',
                options: ['ながら', 'まま', 'ところ', 'うちに'],
                correctIndex: 0,
                explanation: '對話情境。「邊聽音樂邊做作業」。'
            },
            {
                id: 'n4_nagara_5',
                sentence: '歩{ある}き（　）スマホを見{み}るのは危{あぶ}ない。',
                options: ['ながら', 'まま', 'ところ', 'うちに'],
                correctIndex: 0,
                explanation: '「邊走邊看手機」很危險。'
            }
        ]
    },
    'n4_nakereba_naranai': {
        id: 'n4_nakereba_naranai',
        pattern: 'なければならない',
        connection: '動詞ない形（去ない）+ なければならない',
        translation: '必須...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '表示義務或必要性',
                description: '表示不做某事不行，有義務或必要性要做某事。',
                examples: [
                    { japanese: '明日{あした}までにレポートを出{だ}さなければならない。', chinese: '必須在明天之前交報告。' },
                    { japanese: '薬{くすり}を飲{の}まなければなりません。', chinese: '必須吃藥。' },
                    { japanese: '早{はや}く起{お}きなければならない。', chinese: '必須早起。' }
                ]
            }
        ],
        analysis: {
            title: '「なければならない」的口語變化',
            description: '有多種說法，正式程度不同。',
            points: [
                {
                    rule: '正式：なければならない / なければなりません',
                    examples: [{ japanese: '行{い}かなければなりません。', chinese: '必須去。' }]
                },
                {
                    rule: '口語：なきゃ / なくちゃ',
                    examples: [{ japanese: '行{い}かなきゃ。', chinese: '得去。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_nakereba_naranai_1',
                sentence: '毎日{まいにち}野菜{やさい}を（　）なければなりません。',
                options: ['食{た}べ', '食{た}べる', '食{た}べて', '食{た}べた'],
                correctIndex: 0,
                explanation: '「ない形」去掉「ない」接「なければ」。「食べない」→「食べ」。'
            },
            {
                id: 'n4_nakereba_naranai_2',
                sentence: '今日{きょう}中{じゅう}にこの仕事{しごと}を終{お}わらせ（　）。',
                options: ['なければならない', 'てはいけない', 'なくてもいい', 'てもいい'],
                correctIndex: 0,
                explanation: '「必須今天之內完成」。'
            },
            {
                id: 'n4_nakereba_naranai_3',
                sentence: 'ここでは静{しず}かにし（　）。',
                options: ['なければならない', 'てはいけない', 'なくてもいい', 'てもいい'],
                correctIndex: 0,
                explanation: {
                    correct: '「必須保持安靜」。',
                    wrong: [
                        '「てはいけない」是禁止，不是義務。',
                        '「なくてもいい」是不必要。',
                        '「てもいい」是許可。'
                    ]
                }
            },
            {
                id: 'n4_nakereba_naranai_4',
                sentence: '「明日{あした}、来{こ}られる？」\n「ごめん、仕事{しごと}に行{い}か（　）んだ。」',
                options: ['なければならない', 'なきゃ', 'なくちゃ', 'なければ'],
                correctIndex: 1,
                explanation: '對話情境。口語用「なきゃ」。'
            },
            {
                id: 'n4_nakereba_naranai_5',
                sentence: '試験{しけん}のためにもっと勉強{べんきょう}し（　）。',
                options: ['なければならない', 'てはいけない', 'なくてもいい', 'てもいい'],
                correctIndex: 0,
                explanation: '「為了考試必須更用功」。'
            }
        ]
    },
    'n4_nara': {
        id: 'n4_nara',
        pattern: 'なら',
        connection: '動詞普通形 / い形 / な形-∅ / 名詞 + なら',
        translation: '如果...的話',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '基於對方說的話做假設',
                description: '根據對方提到的話題，提出建議或判斷。常用於回應對方的話。',
                examples: [
                    { japanese: '日本{にほん}に行{い}くなら、京都{きょうと}がいいですよ。', chinese: '如果要去日本的話，京都不錯哦。' },
                    { japanese: '分{わ}からないなら、聞{き}いてください。', chinese: '如果不懂的話，請問。' },
                    { japanese: '安{やす}いなら、買{か}います。', chinese: '如果便宜的話，就買。' }
                ]
            }
        ],
        analysis: {
            title: '「なら」與其他條件形的比較',
            description: '「なら」的特點是基於對方的話題。',
            points: [
                {
                    rule: 'なら：基於對方說的話，提出建議',
                    examples: [{ japanese: '寿司{すし}が好{す}きなら、あの店{みせ}がいいよ。', chinese: '如果你喜歡壽司，那家店不錯。' }]
                },
                {
                    rule: 'たら/ば：單純假設條件',
                    examples: [{ japanese: '雨{あめ}が降{ふ}ったら、行{い}かない。', chinese: '如果下雨，就不去。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_nara_1',
                sentence: '日本料理{にほんりょうり}が食{た}べたい（　）、あの店{みせ}がおすすめです。',
                options: ['なら', 'たら', 'と', 'ば'],
                correctIndex: 0,
                explanation: '基於對方想吃日本料理的話題，提出建議。'
            },
            {
                id: 'n4_nara_2',
                sentence: '暇{ひま}（　）、手伝{てつだ}ってくれない？',
                options: ['なら', 'たら', 'と', 'ば'],
                correctIndex: 0,
                explanation: '「如果你有空的話」。'
            },
            {
                id: 'n4_nara_3',
                sentence: 'ボタンを押{お}す（　）、ドアが開{あ}く。',
                options: ['なら', 'たら', 'と', 'ば'],
                correctIndex: 2,
                explanation: {
                    correct: '「一按按鈕，門就開」是必然結果，用「と」。',
                    wrong: [
                        '「なら」用於回應話題。',
                        '「たら」用於假設或完成。',
                        '「ば」用於假設條件。'
                    ]
                }
            },
            {
                id: 'n4_nara_4',
                sentence: '「パソコンが欲{ほ}しいんですが...」\n「パソコン（　）、秋葉原{あきはばら}がいいですよ。」',
                options: ['なら', 'たら', 'と', 'ば'],
                correctIndex: 0,
                explanation: '對話情境。回應對方想買電腦的話題。'
            },
            {
                id: 'n4_nara_5',
                sentence: '明日{あした}雨{あめ}が降{ふ}っ（　）、試合{しあい}は中止{ちゅうし}です。',
                options: ['なら', 'たら', 'と', 'ば'],
                correctIndex: 1,
                explanation: {
                    correct: '「如果明天下雨」是假設未來，用「たら」。',
                    wrong: [
                        '「なら」用於回應話題，這裡是單純假設。',
                        '「と」用於必然結果。',
                        '「ば」後面通常不接意志表現。'
                    ]
                }
            }
        ]
    },
    'n4_nasai': {
        id: 'n4_nasai',
        pattern: 'なさい',
        connection: '動詞ます形（去ます）+ なさい',
        translation: '做... (命令)',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '柔和的命令',
                description: '比命令形柔和的命令表達，常用於父母對孩子、老師對學生。帶有關懷的語氣。',
                examples: [
                    { japanese: '早{はや}く寝{ね}なさい。', chinese: '快點睡覺。' },
                    { japanese: '野菜{やさい}も食{た}べなさい。', chinese: '蔬菜也要吃。' },
                    { japanese: 'ちゃんと勉強{べんきょう}しなさい。', chinese: '好好念書。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_nasai_1',
                sentence: 'もう遅{おそ}いから、早{はや}く（　）なさい。',
                options: ['寝{ね}', '寝{ね}る', '寝{ね}て', '寝{ね}た'],
                correctIndex: 0,
                explanation: '「ます形」去掉「ます」接「なさい」。'
            },
            {
                id: 'n4_nasai_2',
                sentence: '部屋{へや}を片付{かたづ}け（　）！',
                options: ['なさい', 'てください', 'てほしい', 'ましょう'],
                correctIndex: 0,
                explanation: '父母對孩子的命令用「なさい」。'
            },
            {
                id: 'n4_nasai_3',
                sentence: 'ちゃんと宿題{しゅくだい}を（　）なさい。',
                options: ['し', 'する', 'して', 'した'],
                correctIndex: 0,
                explanation: {
                    correct: '「する」→「し」＋「なさい」。',
                    wrong: [
                        '「する」是辭書形，不能直接接「なさい」。',
                        '「して」是て形。',
                        '「した」是過去式。'
                    ]
                }
            },
            {
                id: 'n4_nasai_4',
                sentence: '「お母{かあ}さん、まだゲームしてていい？」\n「もう9時{じ}よ。早{はや}くお風呂{ふろ}に入{はい}り（　）。」',
                options: ['なさい', 'ます', 'ましょう', 'ません'],
                correctIndex: 0,
                explanation: '對話情境。媽媽命令孩子去洗澡。'
            },
            {
                id: 'n4_nasai_5',
                sentence: '先生{せんせい}が「静{しず}かにし（　）」と言{い}った。',
                options: ['なさい', 'ます', 'てください', 'ましょう'],
                correctIndex: 0,
                explanation: '老師對學生的命令。'
            }
        ]
    },
    'n4_nikui': {
        id: 'n4_nikui',
        pattern: 'にくい',
        connection: '動詞ます形（去ます）+ にくい',
        translation: '難以...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '動作難以進行',
                description: '表示某動作很難做，不容易進行。常用於描述物品的特性或情況的困難。',
                examples: [
                    { japanese: 'この字{じ}は読{よ}みにくい。', chinese: '這個字很難讀。' },
                    { japanese: '彼{かれ}の話{はなし}は分{わ}かりにくい。', chinese: '他說的話很難懂。' },
                    { japanese: 'このペンは書{か}きにくい。', chinese: '這支筆很難寫。' }
                ]
            }
        ],
        analysis: {
            title: '「にくい」與「やすい」的對比',
            description: '兩者意思相反。',
            points: [
                {
                    rule: 'にくい：難以...',
                    examples: [{ japanese: '読{よ}みにくい。', chinese: '難讀。' }]
                },
                {
                    rule: 'やすい：容易...',
                    examples: [{ japanese: '読{よ}みやすい。', chinese: '好讀。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_nikui_1',
                sentence: 'このスマホは使{つか}い（　）。',
                options: ['にくい', 'やすい', 'たい', 'そう'],
                correctIndex: 0,
                explanation: '「這手機難用」。'
            },
            {
                id: 'n4_nikui_2',
                sentence: '彼{かれ}の名前{なまえ}は覚{おぼ}え（　）。',
                options: ['にくい', 'やすい', 'たい', 'そう'],
                correctIndex: 0,
                explanation: '「他的名字很難記」。'
            },
            {
                id: 'n4_nikui_3',
                sentence: 'この靴{くつ}は歩{ある}き（　）。',
                options: ['にくい', 'やすい', 'たい', 'そう'],
                correctIndex: 1,
                explanation: {
                    correct: '「這雙鞋好走」用「やすい」。',
                    wrong: [
                        '「にくい」是「難走」。',
                        '「たい」是想要。',
                        '「そう」是推測。'
                    ]
                }
            },
            {
                id: 'n4_nikui_4',
                sentence: '「この本{ほん}、どう？」\n「字{じ}が小{ちい}さくて読{よ}み（　）よ。」',
                options: ['にくい', 'やすい', 'たい', 'そう'],
                correctIndex: 0,
                explanation: '對話情境。「字太小，難讀」。'
            },
            {
                id: 'n4_nikui_5',
                sentence: 'この問題{もんだい}は理解{りかい}し（　）。',
                options: ['にくい', 'やすい', 'たい', 'そう'],
                correctIndex: 0,
                explanation: '「這問題很難理解」。'
            }
        ]
    },
    'n4_noni': {
        id: 'n4_noni',
        pattern: 'のに',
        connection: '動詞普通形 / い形 / な形-な / 名詞-な + のに',
        translation: '雖然...但是...; 明明...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '逆接・不滿或遺憾',
                description: '表示前後句相反，說話者對結果感到意外、不滿或遺憾。',
                examples: [
                    { japanese: '約束{やくそく}したのに、来{こ}なかった。', chinese: '明明約好了，卻沒來。' },
                    { japanese: 'たくさん勉強{べんきょう}したのに、落{お}ちた。', chinese: '明明讀了很多，卻沒考上。' },
                    { japanese: '高{たか}いのに、おいしくない。', chinese: '明明很貴，卻不好吃。' }
                ]
            }
        ],
        analysis: {
            title: '「のに」與「ても」的比較',
            description: '兩者都表示逆接，但語氣不同。',
            points: [
                {
                    rule: 'のに：帶有不滿、遺憾的情緒',
                    examples: [{ japanese: '頑張{がんば}ったのに、失敗{しっぱい}した。', chinese: '明明很努力了，卻失敗了。（遺憾）' }]
                },
                {
                    rule: 'ても：客觀陳述，無情緒色彩',
                    examples: [{ japanese: '頑張{がんば}っても、失敗{しっぱい}することがある。', chinese: '即使努力，也有失敗的時候。（客觀）' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_noni_1',
                sentence: 'あんなに練習{れんしゅう}した（　）、試合{しあい}に負{ま}けた。',
                options: ['のに', 'ても', 'から', 'ので'],
                correctIndex: 0,
                explanation: '「明明練習了那麼多，卻輸了」，有遺憾語氣。'
            },
            {
                id: 'n4_noni_2',
                sentence: '彼{かれ}は日本人{にほんじん}な（　）、日本語{にほんご}が下手{へた}だ。',
                options: ['のに', 'ても', 'から', 'ので'],
                correctIndex: 0,
                explanation: '「明明是日本人，日語卻不好」。'
            },
            {
                id: 'n4_noni_3',
                sentence: '薬{くすり}を飲{の}んだ（　）、熱{ねつ}が下{さ}がらない。',
                options: ['のに', 'ても', 'から', 'ので'],
                correctIndex: 0,
                explanation: {
                    correct: '「明明吃了藥，燒還是沒退」，有不滿。',
                    wrong: [
                        '「ても」是假設，這裡已經吃了。',
                        '「から」表示原因。',
                        '「ので」表示原因。'
                    ]
                }
            },
            {
                id: 'n4_noni_4',
                sentence: '「せっかく作{つく}ったのに、食{た}べてくれなかった。」',
                options: ['のに', 'ても', 'から', 'ので'],
                correctIndex: 0,
                explanation: '「明明特地做了，卻不吃」，有不滿。'
            },
            {
                id: 'n4_noni_5',
                sentence: '高{たか}い（　）、全然{ぜんぜん}使{つか}えない。',
                options: ['のに', 'ても', 'から', 'ので'],
                correctIndex: 0,
                explanation: '「明明很貴，卻完全不能用」。'
            }
        ]
    },
    'n4_rashii': {
        id: 'n4_rashii',
        pattern: 'らしい',
        connection: '動詞普通形 / い形 / な形-∅ / 名詞 + らしい',
        translation: '好像...; 聽說...; 有...的樣子',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '傳聞或推測',
                description: '根據聽到的消息或間接證據做出推測。',
                examples: [
                    { japanese: '彼{かれ}は来{こ}ないらしい。', chinese: '聽說他不會來。' },
                    { japanese: '電車{でんしゃ}が遅{おく}れているらしい。', chinese: '電車好像誤點了。' },
                    { japanese: 'あの店{みせ}はおいしいらしい。', chinese: '聽說那家店很好吃。' }
                ]
            },
            {
                usageId: 2,
                title: '「像...樣子」的典型特徵',
                description: '表示具有某種事物的典型特徵。',
                examples: [
                    { japanese: '今日{きょう}は春{はる}らしい天気{てんき}だ。', chinese: '今天是像春天一樣的天氣。' },
                    { japanese: '彼{かれ}は男{おとこ}らしい。', chinese: '他很有男子氣概。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_rashii_1',
                sentence: '明日{あした}は雨{あめ}が降{ふ}る（　）。',
                options: ['らしい', 'ようだ', 'みたいだ', 'そうだ'],
                correctIndex: 0,
                explanation: '根據傳聞「聽說明天會下雨」。'
            },
            {
                id: 'n4_rashii_2',
                sentence: '彼女{かのじょ}は結婚{けっこん}した（　）。',
                options: ['らしい', 'ようだ', 'みたいだ', 'そうだ'],
                correctIndex: 0,
                explanation: '「聽說她結婚了」是傳聞。'
            },
            {
                id: 'n4_rashii_3',
                sentence: '今日{きょう}は本当{ほんとう}に夏{なつ}（　）暑{あつ}さだ。',
                options: ['らしい', 'のような', 'みたいな', 'そうな'],
                correctIndex: 0,
                explanation: {
                    correct: '「像夏天一樣的熱」，表示典型特徵用「らしい」。',
                    wrong: [
                        '「のような」也可以，但「らしい」更強調典型。',
                        '「みたいな」是口語比喻。',
                        '「そうな」表示樣態推測。'
                    ]
                }
            },
            {
                id: 'n4_rashii_4',
                sentence: '「田中{たなか}さん、会社{かいしゃ}辞{や}めたんだって。」\n「へえ、そう（　）ね。」',
                options: ['らしい', 'ようだ', 'みたいだ', 'そうだ'],
                correctIndex: 0,
                explanation: '對話情境。「原來是這樣啊」。'
            },
            {
                id: 'n4_rashii_5',
                sentence: '彼{かれ}は子供{こども}（　）ことを言{い}う。',
                options: ['らしい', 'のような', 'みたいな', 'そうな'],
                correctIndex: 0,
                explanation: '「他說很孩子氣的話」，有負面評價。'
            }
        ]
    },
    'n4_saseru': {
        id: 'n4_saseru',
        pattern: 'させる',
        connection: '一段動詞：語幹 + させる\n五段動詞：あ段 + せる',
        translation: '讓...做; 使...做 (使役)',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '使役形',
                description: '表示讓某人做某事，或使某人進入某狀態。可以是許可、命令或強制的意味。',
                examples: [
                    { japanese: '母{はは}は私{わたし}に野菜{やさい}を食{た}べさせた。', chinese: '媽媽讓我吃蔬菜。' },
                    { japanese: '先生{せんせい}は学生{がくせい}に本{ほん}を読{よ}ませた。', chinese: '老師讓學生讀書。' },
                    { japanese: '彼{かれ}を笑{わら}わせた。', chinese: '讓他笑了。' }
                ]
            }
        ],
        analysis: {
            title: '使役形的變化規則',
            description: '根據動詞類型變化不同。',
            points: [
                {
                    rule: '一段動詞：去る + させる',
                    examples: [{ japanese: '食{た}べる → 食{た}べさせる', chinese: '吃 → 讓...吃' }]
                },
                {
                    rule: '五段動詞：う段 → あ段 + せる',
                    examples: [{ japanese: '読{よ}む → 読{よ}ませる', chinese: '讀 → 讓...讀' }]
                },
                {
                    rule: '不規則：する → させる、来る → 来させる',
                    examples: [{ japanese: 'する → させる', chinese: '做 → 讓...做' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_saseru_1',
                sentence: '母{はは}は子供{こども}に牛乳{ぎゅうにゅう}を（　）。',
                options: ['飲{の}ませた', '飲{の}まれた', '飲{の}んだ', '飲{の}みた'],
                correctIndex: 0,
                explanation: '「讓孩子喝」用使役形「飲ませる」。'
            },
            {
                id: 'n4_saseru_2',
                sentence: '先生{せんせい}は生徒{せいと}を立{た}た（　）。',
                options: ['せた', 'れた', 'った', 'した'],
                correctIndex: 0,
                explanation: '「立つ」的使役形是「立たせる」。'
            },
            {
                id: 'n4_saseru_3',
                sentence: '彼{かれ}の話{はなし}は私{わたし}を（　）。',
                options: ['笑{わら}わせた', '笑{わら}われた', '笑{わら}った', '笑{わら}いた'],
                correctIndex: 0,
                explanation: {
                    correct: '「他的話讓我笑了」用使役形。',
                    wrong: [
                        '「笑われた」是被動「被笑」。',
                        '「笑った」是自動詞「笑了」。',
                        '「笑いた」不存在。'
                    ]
                }
            },
            {
                id: 'n4_saseru_4',
                sentence: '「なんで遅刻{ちこく}したの？」\n「弟{おとうと}の宿題{しゅくだい}を（　）んです。」',
                options: ['手伝{てつだ}わせられた', '手伝{てつだ}わされた', '手伝{てつだ}った', '手伝{てつだ}わせた'],
                correctIndex: 0,
                explanation: '對話情境。「被迫幫弟弟做作業」用使役被動。'
            },
            {
                id: 'n4_saseru_5',
                sentence: '親{おや}は子供{こども}に勉強{べんきょう}（　）。',
                options: ['させる', 'される', 'する', 'した'],
                correctIndex: 0,
                explanation: '「父母讓孩子學習」用使役形。'
            }
        ]
    },
    'n4_shi': {
        id: 'n4_shi',
        pattern: 'し',
        connection: '動詞普通形 / い形 / な形-だ / 名詞-だ + し',
        translation: '既...又...; 而且',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '並列多個理由或特點',
                description: '列舉多個理由或特點，常用於強調。可以只列舉一個「し」暗示還有其他。',
                examples: [
                    { japanese: 'この部屋{へや}は広{ひろ}いし、きれいだし、いいですね。', chinese: '這房間又大又乾淨，很好呢。' },
                    { japanese: '時間{じかん}もないし、お金{かね}もないし、旅行{りょこう}できない。', chinese: '既沒時間又沒錢，沒法旅行。' },
                    { japanese: '疲{つか}れたし、もう帰{かえ}ろう。', chinese: '累了，回去吧。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_shi_1',
                sentence: 'このレストランは安{やす}い（　）、おいしい（　）、よく来{き}ます。',
                options: ['し / し', 'て / て', 'から / から', 'ので / ので'],
                correctIndex: 0,
                explanation: '並列理由「又便宜又好吃」。'
            },
            {
                id: 'n4_shi_2',
                sentence: '今日{きょう}は天気{てんき}もいい（　）、出{で}かけましょう。',
                options: ['し', 'て', 'から', 'ので'],
                correctIndex: 0,
                explanation: '「天氣也好」暗示還有其他理由。'
            },
            {
                id: 'n4_shi_3',
                sentence: '彼{かれ}は優{やさ}しい（　）、頭{あたま}もいい（　）、人気{にんき}がある。',
                options: ['し / し', 'て / て', 'から / から', 'ので / ので'],
                correctIndex: 0,
                explanation: {
                    correct: '「又溫柔又聰明」所以受歡迎。',
                    wrong: [
                        '「て」不能並列形容詞。',
                        '「から」表示單一原因。',
                        '「ので」表示單一原因。'
                    ]
                }
            },
            {
                id: 'n4_shi_4',
                sentence: '「なんでこの車{くるま}を買{か}ったの？」\n「安{やす}かった（　）、デザインもよかった（　）。」',
                options: ['し / し', 'て / て', 'から / から', 'ので / ので'],
                correctIndex: 0,
                explanation: '對話情境。列舉購買理由。'
            },
            {
                id: 'n4_shi_5',
                sentence: '疲{つか}れた（　）、眠{ねむ}い（　）、今日{きょう}はもう寝{ね}よう。',
                options: ['し / し', 'て / て', 'から / から', 'ので / ので'],
                correctIndex: 0,
                explanation: '「又累又睏」，所以要睡了。'
            }
        ]
    },
    'n4_sou_da_looks': {
        id: 'n4_sou_da_looks',
        pattern: 'そうだ (様態)',
        connection: '動詞ます形（去ます）+ そうだ\nい形容詞（去い）+ そうだ\nな形容詞語幹 + そうだ',
        translation: '看起來...; 似乎...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '根據外觀的推測',
                description: '根據眼前看到的情況，推測某事即將發生或某物具有某種性質。',
                examples: [
                    { japanese: '雨{あめ}が降{ふ}りそうだ。', chinese: '看起來要下雨了。' },
                    { japanese: 'このケーキはおいしそうだ。', chinese: '這蛋糕看起來很好吃。' },
                    { japanese: '彼{かれ}は元気{げんき}そうだ。', chinese: '他看起來很有精神。' }
                ]
            }
        ],
        analysis: {
            title: '様態「そうだ」與傳聞「そうだ」',
            description: '接續不同，意思也不同。',
            points: [
                {
                    rule: '様態：ます形/形容詞語幹 + そうだ「看起來...」',
                    examples: [{ japanese: 'おいしそう', chinese: '看起來好吃' }]
                },
                {
                    rule: '傳聞：普通形 + そうだ「聽說...」',
                    examples: [{ japanese: 'おいしいそうだ', chinese: '聽說好吃' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_sou_da_looks_1',
                sentence: 'この料理{りょうり}はおいし（　）。',
                options: ['そうだ', 'いそうだ', 'くそうだ', 'そうです'],
                correctIndex: 0,
                explanation: '「おいしい」去掉「い」加「そうだ」。'
            },
            {
                id: 'n4_sou_da_looks_2',
                sentence: '空{そら}が暗{くら}くなってきた。雨{あめ}が降{ふ}り（　）。',
                options: ['そうだ', 'るそうだ', 'たそうだ', 'そうです'],
                correctIndex: 0,
                explanation: '「降ります」→「降り」＋「そうだ」。'
            },
            {
                id: 'n4_sou_da_looks_3',
                sentence: '彼{かれ}は忙{いそが}し（　）。',
                options: ['そうだ', 'いそうだ', 'くそうだ', 'そうです'],
                correctIndex: 0,
                explanation: {
                    correct: '「忙しい」去「い」→「忙しそうだ」。',
                    wrong: [
                        '「いそうだ」接續錯誤。',
                        '「くそうだ」接續錯誤。',
                        '「そうです」需要丁寧體但接續正確。'
                    ]
                }
            },
            {
                id: 'n4_sou_da_looks_4',
                sentence: '「この本{ほん}、面白{おもしろ}い？」\n「うん、面白{おもしろ}（　）よ。」',
                options: ['そうだ', 'いそうだ', 'くそうだ', 'そう'],
                correctIndex: 3,
                explanation: '對話情境。口語可省略「だ」。'
            },
            {
                id: 'n4_sou_da_looks_5',
                sentence: '彼女{かのじょ}は元気{げんき}（　）。',
                options: ['そうだ', 'なそうだ', 'にそうだ', 'そうです'],
                correctIndex: 0,
                explanation: 'な形容詞去「な」直接加「そうだ」。'
            }
        ]
    },
    'n4_sou_da_heard': {
        id: 'n4_sou_da_heard',
        pattern: 'そうだ (傳聞)',
        connection: '動詞普通形 / い形 / な形-だ / 名詞-だ + そうだ',
        translation: '聽說...; 據說...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '傳達聽到的消息',
                description: '用於傳達從別人那裡聽到的消息或資訊。',
                examples: [
                    { japanese: '明日{あした}は雨{あめ}だそうだ。', chinese: '聽說明天會下雨。' },
                    { japanese: '彼{かれ}は来{こ}ないそうだ。', chinese: '聽說他不來。' },
                    { japanese: 'あのレストランはおいしいそうだ。', chinese: '聽說那家餐廳很好吃。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_sou_da_heard_1',
                sentence: '明日{あした}は祝日{しゅくじつ}だ（　）。',
                options: ['そうだ', 'ようだ', 'らしい', 'みたいだ'],
                correctIndex: 0,
                explanation: '「聽說明天是假日」用傳聞「そうだ」。'
            },
            {
                id: 'n4_sou_da_heard_2',
                sentence: 'あの映画{えいが}は面白{おもしろ}い（　）。',
                options: ['そうだ', 'ようだ', 'らしい', 'みたいだ'],
                correctIndex: 0,
                explanation: '「聽說那電影很有趣」。'
            },
            {
                id: 'n4_sou_da_heard_3',
                sentence: '田中{たなか}さんは結婚{けっこん}する（　）。',
                options: ['そうだ', 'ようだ', 'らしい', 'みたいだ'],
                correctIndex: 0,
                explanation: {
                    correct: '「聽說田中要結婚」。',
                    wrong: [
                        '「ようだ」是推測。',
                        '「らしい」也是傳聞，但語感不同。',
                        '「みたいだ」是推測或比喻。'
                    ]
                }
            },
            {
                id: 'n4_sou_da_heard_4',
                sentence: '「来週{らいしゅう}、テストがあるんだって。」\n「へえ、テストがある（　）。」',
                options: ['そうだ', 'ようだ', 'らしい', 'みたいだ'],
                correctIndex: 0,
                explanation: '對話情境。確認聽到的消息。'
            },
            {
                id: 'n4_sou_da_heard_5',
                sentence: '新{あたら}しい先生{せんせい}は厳{きび}しい（　）よ。',
                options: ['そうだ', 'ようだ', 'らしい', 'みたいだ'],
                correctIndex: 0,
                explanation: '「聽說新老師很嚴格」。'
            }
        ]
    },

    // ============== た形 + ばかり ==============
    'n4_ta_bakari': {
        id: 'n4_ta_bakari',
        pattern: 'たばかり',
        connection: '動詞た形 + ばかり',
        translation: '剛剛...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '剛完成某動作',
                description: '表示某動作剛剛完成不久，時間上很近。',
                examples: [
                    { japanese: '今{いま}、起{お}きたばかりです。', chinese: '我剛剛起床。' },
                    { japanese: '日本{にほん}に来{き}たばかりで、まだ何{なに}もわかりません。', chinese: '我剛來日本，什麼都還不懂。' },
                    { japanese: 'さっき食{た}べたばかりなのに、もうお腹{なか}が空{す}いた。', chinese: '明明剛吃完，肚子又餓了。' }
                ]
            }
        ],
        analysis: {
            title: '「たばかり」與「たところ」的比較',
            description: '兩者都表示剛完成，但時間感覺不同。',
            points: [
                {
                    rule: '「たばかり」：主觀感覺「剛剛」，實際時間可能較長。',
                    examples: [{ japanese: '先月{せんげつ}買{か}ったばかりなのに壊{こわ}れた。', chinese: '上個月才買的就壞了。' }]
                },
                {
                    rule: '「たところ」：客觀上「剛完成」，時間非常接近。',
                    examples: [{ japanese: '今{いま}帰{かえ}ってきたところです。', chinese: '我剛到家。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_ta_bakari_1',
                sentence: '今{いま}、食{た}べ（　）なので、まだお腹{なか}がいっぱいです。',
                options: ['たばかり', 'ているばかり', 'てばかり', 'ばかり'],
                correctIndex: 0,
                explanation: '動詞た形＋ばかり，表示剛吃完。'
            },
            {
                id: 'n4_ta_bakari_2',
                sentence: 'この本{ほん}は先週{せんしゅう}買{か}っ（　）です。',
                options: ['たばかり', 'ているばかり', 'てばかり', 'ばかり'],
                correctIndex: 0,
                explanation: '表示上週才買的（主觀感覺剛買）。'
            },
            {
                id: 'n4_ta_bakari_3',
                sentence: '彼女{かのじょ}は日本{にほん}に来{き}（　）で、日本語{にほんご}があまり話{はな}せません。',
                options: ['たばかり', 'たところ', 'ている', 'てから'],
                correctIndex: 0,
                explanation: {
                    correct: '剛來日本，強調「剛」的狀態持續。',
                    wrong: [
                        '「たところ」更強調瞬間。',
                        '「ている」是持續狀態。',
                        '「てから」是「之後」。'
                    ]
                }
            },
            {
                id: 'n4_ta_bakari_4',
                sentence: '「この車{くるま}、新{あたら}しいね。」\n「うん、先月{せんげつ}買{か}っ（　）なんだ。」',
                options: ['たばかり', 'たところ', 'ている', 'てから'],
                correctIndex: 0,
                explanation: '對話情境。上個月才買的。'
            },
            {
                id: 'n4_ta_bakari_5',
                sentence: '起{お}き（　）で、まだ眠{ねむ}いです。',
                options: ['たばかり', 'たところ', 'ている', 'てから'],
                correctIndex: 0,
                explanation: {
                    correct: '「たばかり」表示剛起床的狀態。',
                    wrong: [
                        '「たところ」更強調剛剛那一刻。',
                        '「ている」是持續狀態，語意不同。',
                        '「てから」表示之後。'
                    ]
                }
            }
        ]
    },

    // ============== たら ==============
    'n4_tara': {
        id: 'n4_tara',
        pattern: 'たら',
        connection: '動詞た形 / い形-かったら / な形-だったら / 名詞-だったら',
        translation: '如果...的話; ...之後',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '假定條件',
                description: '表示假設的條件，「如果...的話」。',
                examples: [
                    { japanese: '雨{あめ}が降{ふ}ったら、行{い}きません。', chinese: '如果下雨的話，我就不去。' },
                    { japanese: '安{やす}かったら、買{か}います。', chinese: '如果便宜的話，我就買。' },
                    { japanese: '暇{ひま}だったら、遊{あそ}びに来{き}てください。', chinese: '如果有空的話，請來玩。' }
                ]
            },
            {
                usageId: 2,
                title: '確定條件（...之後）',
                description: '表示某事發生後的必然結果。',
                examples: [
                    { japanese: '家{いえ}に帰{かえ}ったら、電話{でんわ}します。', chinese: '回到家之後，我會打電話。' },
                    { japanese: '春{はる}になったら、桜{さくら}が咲{さ}きます。', chinese: '到了春天，櫻花就會開。' }
                ]
            }
        ],
        analysis: {
            title: '「たら」與「ば」「と」「なら」的比較',
            description: '這四個假定表達各有特點。',
            points: [
                {
                    rule: '「たら」：最通用，可用於假定和確定條件。',
                    examples: [{ japanese: '雨{あめ}が降{ふ}ったら、中止{ちゅうし}です。', chinese: '如果下雨就取消。' }]
                },
                {
                    rule: '「ば」：強調前項是後項成立的充分條件。',
                    examples: [{ japanese: '安{やす}ければ買{か}います。', chinese: '便宜的話就買。' }]
                },
                {
                    rule: '「と」：表示自然或習慣性的必然結果。',
                    examples: [{ japanese: '春{はる}になると桜{さくら}が咲{さ}く。', chinese: '一到春天櫻花就開。' }]
                },
                {
                    rule: '「なら」：以對方說的話為前提。',
                    examples: [{ japanese: '行{い}くなら早{はや}く行{い}け。', chinese: '要去的話就快去。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_tara_1',
                sentence: '明日{あした}天気{てんき}がよかっ（　）、サッカーをしましょう。',
                options: ['たら', 'ば', 'と', 'なら'],
                correctIndex: 0,
                explanation: '假定條件，「如果天氣好的話」。'
            },
            {
                id: 'n4_tara_2',
                sentence: '駅{えき}に着{つ}い（　）、連絡{れんらく}します。',
                options: ['たら', 'ば', 'と', 'なら'],
                correctIndex: 0,
                explanation: '確定條件，「到車站後就聯絡」。'
            },
            {
                id: 'n4_tara_3',
                sentence: 'もっと早{はや}く起{お}き（　）、遅刻{ちこく}しなかったのに。',
                options: ['たら', 'ば', 'と', 'なら'],
                correctIndex: 0,
                explanation: {
                    correct: '反事實假設（過去），「要是早點起床的話」。',
                    wrong: [
                        '「ば」也可以，但「たら」更口語化。',
                        '「と」不用於反事實。',
                        '「なら」不用於反事實。'
                    ]
                }
            },
            {
                id: 'n4_tara_4',
                sentence: '「いつ出{で}かけますか。」\n「昼{ひる}ご飯{はん}を食{た}べ（　）、出{で}かけます。」',
                options: ['たら', 'ば', 'と', 'なら'],
                correctIndex: 0,
                explanation: '對話情境。吃完午飯後出門。'
            },
            {
                id: 'n4_tara_5',
                sentence: '宿題{しゅくだい}が終{お}わっ（　）、遊{あそ}んでもいいですよ。',
                options: ['たら', 'ば', 'と', 'なら'],
                correctIndex: 0,
                explanation: {
                    correct: '確定條件「作業做完後」可以玩。',
                    wrong: [
                        '「ば」不如「たら」自然。',
                        '「と」多用於習慣性。',
                        '「なら」是「要是...的話」。'
                    ]
                }
            }
        ]
    },

    // ============== てあげる ==============
    'n4_te_ageru': {
        id: 'n4_te_ageru',
        pattern: 'てあげる',
        connection: '動詞て形 + あげる',
        translation: '（為別人）做...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '為他人做某事（授惠）',
                description: '表示說話者或說話者一方的人為他人做某事，帶有恩惠的意味。',
                examples: [
                    { japanese: '友達{ともだち}に日本語{にほんご}を教{おし}えてあげました。', chinese: '我教朋友日語。' },
                    { japanese: '妹{いもうと}の宿題{しゅくだい}を手伝{てつだ}ってあげた。', chinese: '我幫妹妹做作業。' },
                    { japanese: '彼女{かのじょ}を駅{えき}まで送{おく}ってあげます。', chinese: '我送她到車站。' }
                ]
            }
        ],
        analysis: {
            title: '授受動詞「あげる」「もらう」「くれる」',
            description: '日語的授受表達需要考慮方向性。',
            points: [
                {
                    rule: '「てあげる」：我/我方 → 他人（施予）',
                    examples: [{ japanese: '私{わたし}が彼{かれ}に教{おし}えてあげた。', chinese: '我教了他。' }]
                },
                {
                    rule: '「てもらう」：他人 → 我/我方（接受）',
                    examples: [{ japanese: '彼{かれ}に教{おし}えてもらった。', chinese: '我請他教我。' }]
                },
                {
                    rule: '「てくれる」：他人 → 我/我方（給予）',
                    examples: [{ japanese: '彼{かれ}が教{おし}えてくれた。', chinese: '他教了我。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_te_ageru_1',
                sentence: '弟{おとうと}に本{ほん}を読{よ}んで（　）。',
                options: ['あげた', 'もらった', 'くれた', 'いただいた'],
                correctIndex: 0,
                explanation: '我為弟弟念書。'
            },
            {
                id: 'n4_te_ageru_2',
                sentence: '友達{ともだち}の引{ひ}っ越{こ}しを手伝{てつだ}って（　）。',
                options: ['あげた', 'もらった', 'くれた', 'いただいた'],
                correctIndex: 0,
                explanation: '我幫朋友搬家。'
            },
            {
                id: 'n4_te_ageru_3',
                sentence: '彼{かれ}は私{わたし}にプレゼントを買{か}って（　）。',
                options: ['くれた', 'あげた', 'もらった', 'やった'],
                correctIndex: 0,
                explanation: {
                    correct: '他人為我做，用「くれた」。',
                    wrong: [
                        '「あげた」是我為他人做。',
                        '「もらった」要用「に」表示來源。',
                        '「やった」用於對下。'
                    ]
                }
            },
            {
                id: 'n4_te_ageru_4',
                sentence: '「誰{だれ}がこの写真{しゃしん}を撮{と}ったの？」\n「私{わたし}が撮{と}って（　）の。」',
                options: ['あげた', 'もらった', 'くれた', 'いただいた'],
                correctIndex: 0,
                explanation: '對話情境。我幫忙拍的。'
            },
            {
                id: 'n4_te_ageru_5',
                sentence: '先生{せんせい}に手紙{てがみ}を見{み}て（　）。',
                options: ['いただいた', 'あげた', 'くれた', 'もらった'],
                correctIndex: 0,
                explanation: {
                    correct: '對長輩用「いただく」（もらう的敬語）。',
                    wrong: [
                        '「あげた」方向相反。',
                        '「くれた」對長輩不敬。',
                        '「もらった」對長輩不夠尊敬。'
                    ]
                }
            }
        ]
    },

    // ============== てほしい ==============
    'n4_te_hoshii': {
        id: 'n4_te_hoshii',
        pattern: 'てほしい',
        connection: '動詞て形 + ほしい',
        translation: '希望（別人）做...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '希望他人做某事',
                description: '表示說話者希望對方或第三者做某事。',
                examples: [
                    { japanese: '手伝{てつだ}ってほしいんですが。', chinese: '我希望你能幫忙。' },
                    { japanese: '早{はや}く来{き}てほしい。', chinese: '希望你早點來。' },
                    { japanese: '静{しず}かにしてほしいんです。', chinese: '希望你安靜一點。' }
                ]
            }
        ],
        analysis: {
            title: '「てほしい」與「てもらいたい」的比較',
            description: '兩者都表示希望他人做某事。',
            points: [
                {
                    rule: '「てほしい」：直接表達希望，較直接。',
                    examples: [{ japanese: '手伝{てつだ}ってほしい。', chinese: '希望你幫忙。' }]
                },
                {
                    rule: '「てもらいたい」：請求的語氣，較客氣。',
                    examples: [{ japanese: '手伝{てつだ}ってもらいたいんですが。', chinese: '想請你幫忙。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_te_hoshii_1',
                sentence: 'ちょっと待{ま}って（　）んですが。',
                options: ['ほしい', 'たい', 'もらう', 'くれる'],
                correctIndex: 0,
                explanation: '希望對方等一下。'
            },
            {
                id: 'n4_te_hoshii_2',
                sentence: '明日{あした}は晴{は}れて（　）。',
                options: ['ほしい', 'たい', 'もらう', 'くれる'],
                correctIndex: 0,
                explanation: '希望明天放晴（對天氣的願望）。'
            },
            {
                id: 'n4_te_hoshii_3',
                sentence: '彼{かれ}にもっと勉強{べんきょう}して（　）。',
                options: ['ほしい', 'たい', 'もらいたい', 'くれたい'],
                correctIndex: 0,
                explanation: {
                    correct: '希望他更用功。',
                    wrong: [
                        '「たい」是自己想做。',
                        '「もらいたい」也可以，但更請求。',
                        '「くれたい」不存在。'
                    ]
                }
            },
            {
                id: 'n4_te_hoshii_4',
                sentence: '「何{なに}か希望{きぼう}はありますか。」\n「静{しず}かな部屋{へや}に泊{と}まらせて（　）んですが。」',
                options: ['ほしい', 'たい', 'もらう', 'くれる'],
                correctIndex: 0,
                explanation: '對話情境。希望住安靜的房間。'
            },
            {
                id: 'n4_te_hoshii_5',
                sentence: '私{わたし}は彼{かれ}に真実{しんじつ}を言{い}って（　）。',
                options: ['ほしい', 'もらいたい', 'くれたい', 'あげたい'],
                correctIndex: 0,
                explanation: {
                    correct: '希望他說實話。',
                    wrong: [
                        '「もらいたい」也正確但語感不同。',
                        '「くれたい」不存在。',
                        '「あげたい」是想為他做。'
                    ]
                }
            }
        ]
    },

    // ============== ていく ==============
    'n4_te_iku': {
        id: 'n4_te_iku',
        pattern: 'ていく',
        connection: '動詞て形 + いく',
        translation: '...下去; 漸漸...; 做了再去',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '動作持續到將來',
                description: '表示某狀態或動作從現在持續到將來。',
                examples: [
                    { japanese: 'これからも日本語{にほんご}を勉強{べんきょう}していきたい。', chinese: '今後也想繼續學日語。' },
                    { japanese: '人口{じんこう}は減{へ}っていくでしょう。', chinese: '人口大概會漸漸減少吧。' }
                ]
            },
            {
                usageId: 2,
                title: '做了再離開',
                description: '表示做完某事後再離開。',
                examples: [
                    { japanese: '傘{かさ}を持{も}っていってください。', chinese: '請帶傘去。' },
                    { japanese: '昼{ひる}ご飯{はん}を食{た}べていきます。', chinese: '吃完午飯再走。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_te_iku_1',
                sentence: 'これからも努力{どりょく}して（　）つもりです。',
                options: ['いく', 'くる', 'いる', 'ある'],
                correctIndex: 0,
                explanation: '表示今後繼續努力下去。'
            },
            {
                id: 'n4_te_iku_2',
                sentence: '気温{きおん}はだんだん上{あ}がって（　）。',
                options: ['いく', 'くる', 'いる', 'ある'],
                correctIndex: 0,
                explanation: '氣溫漸漸升高（變化持續到將來）。'
            },
            {
                id: 'n4_te_iku_3',
                sentence: '弁当{べんとう}を持{も}って（　）。',
                options: ['いく', 'くる', 'いる', 'ある'],
                correctIndex: 0,
                explanation: {
                    correct: '帶便當去。',
                    wrong: [
                        '「くる」是帶來。',
                        '「いる」是持續狀態。',
                        '「ある」是存在。'
                    ]
                }
            },
            {
                id: 'n4_te_iku_4',
                sentence: '「傘{かさ}を持{も}っていかなくていいの？」\n「大丈夫{だいじょうぶ}、雨{あめ}は止{や}んで（　）から。」',
                options: ['いく', 'くる', 'いる', 'ある'],
                correctIndex: 0,
                explanation: '對話情境。雨會漸漸停。'
            },
            {
                id: 'n4_te_iku_5',
                sentence: 'この町{まち}の人口{じんこう}は増{ふ}えて（　）と思{おも}います。',
                options: ['いく', 'くる', 'きた', 'いった'],
                correctIndex: 0,
                explanation: {
                    correct: '人口會持續增加（向未來）。',
                    wrong: [
                        '「くる」是從過去到現在。',
                        '「きた」是到現在為止。',
                        '「いった」是過去的變化。'
                    ]
                }
            }
        ]
    },

    // ============== てくれる ==============
    'n4_te_kureru': {
        id: 'n4_te_kureru',
        pattern: 'てくれる',
        connection: '動詞て形 + くれる',
        translation: '（他人為我）做...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '他人為我/我方做某事',
                description: '表示他人為說話者或說話者一方做某事，帶有感謝的語氣。',
                examples: [
                    { japanese: '友達{ともだち}が手伝{てつだ}ってくれた。', chinese: '朋友幫了我。' },
                    { japanese: '母{はは}がお弁当{べんとう}を作{つく}ってくれました。', chinese: '媽媽幫我做了便當。' },
                    { japanese: '彼{かれ}が駅{えき}まで送{おく}ってくれた。', chinese: '他送我到車站。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_te_kureru_1',
                sentence: '先輩{せんぱい}が仕事{しごと}を教{おし}えて（　）。',
                options: ['くれた', 'あげた', 'もらった', 'やった'],
                correctIndex: 0,
                explanation: '前輩教了我工作。'
            },
            {
                id: 'n4_te_kureru_2',
                sentence: '彼{かれ}が荷物{にもつ}を持{も}って（　）。',
                options: ['くれた', 'あげた', 'もらった', 'やった'],
                correctIndex: 0,
                explanation: '他幫我拿行李。'
            },
            {
                id: 'n4_te_kureru_3',
                sentence: '友達{ともだち}が空港{くうこう}まで迎{むか}えに来{き}て（　）。',
                options: ['くれた', 'あげた', 'もらった', 'やった'],
                correctIndex: 0,
                explanation: {
                    correct: '朋友來機場接我。',
                    wrong: [
                        '「あげた」是我為他人。',
                        '「もらった」是請求獲得。',
                        '「やった」用於對下。'
                    ]
                }
            },
            {
                id: 'n4_te_kureru_4',
                sentence: '「誰{だれ}がこの花{はな}をくれたの？」\n「彼{かれ}が買{か}って（　）の。」',
                options: ['くれた', 'あげた', 'もらった', 'やった'],
                correctIndex: 0,
                explanation: '對話情境。他買給我的。'
            },
            {
                id: 'n4_te_kureru_5',
                sentence: '道{みち}に迷{まよ}った時{とき}、親切{しんせつ}な人{ひと}が案内{あんない}して（　）。',
                options: ['くれた', 'あげた', 'もらった', 'やった'],
                correctIndex: 0,
                explanation: {
                    correct: '親切的人帶路（為我）。',
                    wrong: [
                        '「あげた」方向相反。',
                        '「もらった」語感是請求。',
                        '「やった」不合適。'
                    ]
                }
            }
        ]
    },

    // ============== てくる ==============
    'n4_te_kuru': {
        id: 'n4_te_kuru',
        pattern: 'てくる',
        connection: '動詞て形 + くる',
        translation: '...起來; 一直...; 做了再來',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '從過去持續到現在',
                description: '表示某狀態或動作從過去持續到現在。',
                examples: [
                    { japanese: '今{いま}まで頑張{がんば}ってきました。', chinese: '到現在為止一直在努力。' },
                    { japanese: '日本語{にほんご}を３年{ねん}勉強{べんきょう}してきた。', chinese: '學日語學了三年了。' }
                ]
            },
            {
                usageId: 2,
                title: '做了再來',
                description: '表示做完某事後再來。',
                examples: [
                    { japanese: 'ちょっと買{か}い物{もの}してきます。', chinese: '我去買個東西就回來。' },
                    { japanese: '傘{かさ}を取{と}ってきます。', chinese: '我去拿傘。' }
                ]
            },
            {
                usageId: 3,
                title: '變化開始',
                description: '表示某變化開始發生。',
                examples: [
                    { japanese: '雨{あめ}が降{ふ}ってきた。', chinese: '開始下雨了。' },
                    { japanese: 'お腹{なか}が空{す}いてきた。', chinese: '開始餓了。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_te_kuru_1',
                sentence: '今{いま}まで一生懸命{いっしょうけんめい}働{はたら}いて（　）。',
                options: ['きた', 'いった', 'いる', 'ある'],
                correctIndex: 0,
                explanation: '到現在為止一直努力工作。'
            },
            {
                id: 'n4_te_kuru_2',
                sentence: 'だんだん寒{さむ}く なって（　）。',
                options: ['きた', 'いった', 'いる', 'ある'],
                correctIndex: 0,
                explanation: '漸漸變冷了（變化開始）。'
            },
            {
                id: 'n4_te_kuru_3',
                sentence: 'ちょっとトイレに行{い}って（　）。',
                options: ['くる', 'いく', 'いる', 'ある'],
                correctIndex: 0,
                explanation: {
                    correct: '去一下廁所就回來。',
                    wrong: [
                        '「いく」是去不回。',
                        '「いる」是持續狀態。',
                        '「ある」是存在。'
                    ]
                }
            },
            {
                id: 'n4_te_kuru_4',
                sentence: '「顔{かお}が赤{あか}いよ。」\n「走{はし}って（　）から。」',
                options: ['きた', 'いった', 'いる', 'ある'],
                correctIndex: 0,
                explanation: '對話情境。因為跑過來的。'
            },
            {
                id: 'n4_te_kuru_5',
                sentence: '眠{ねむ}く なって（　）ので、コーヒーを飲{の}みます。',
                options: ['きた', 'いった', 'いる', 'ある'],
                correctIndex: 0,
                explanation: {
                    correct: '開始想睡了。',
                    wrong: [
                        '「いった」是向未來的變化。',
                        '「いる」是持續狀態。',
                        '「ある」是存在。'
                    ]
                }
            }
        ]
    },

    // ============== てみる ==============
    'n4_te_miru': {
        id: 'n4_te_miru',
        pattern: 'てみる',
        connection: '動詞て形 + みる',
        translation: '試著做...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '嘗試做某事',
                description: '表示嘗試做某事，看看結果如何。',
                examples: [
                    { japanese: '一度{いちど}やってみてください。', chinese: '請試著做一次看看。' },
                    { japanese: 'このケーキを食{た}べてみたい。', chinese: '想試吃這個蛋糕。' },
                    { japanese: '日本{にほん}に行{い}ってみたいです。', chinese: '想去日本看看。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_te_miru_1',
                sentence: 'この料理{りょうり}を作{つく}って（　）。',
                options: ['みた', 'いた', 'きた', 'しまった'],
                correctIndex: 0,
                explanation: '試著做了這道菜。'
            },
            {
                id: 'n4_te_miru_2',
                sentence: '新{あたら}しいアプリを使{つか}って（　）ください。',
                options: ['みて', 'いて', 'きて', 'しまって'],
                correctIndex: 0,
                explanation: '請試著用新的APP。'
            },
            {
                id: 'n4_te_miru_3',
                sentence: '一度{いちど}考{かんが}えて（　）ます。',
                options: ['み', 'い', 'き', 'しまい'],
                correctIndex: 0,
                explanation: {
                    correct: '試著考慮一下。',
                    wrong: [
                        '「い」接續不對。',
                        '「き」是「くる」。',
                        '「しまい」是完了。'
                    ]
                }
            },
            {
                id: 'n4_te_miru_4',
                sentence: '「このゲーム、面白{おもしろ}いよ。」\n「じゃ、やって（　）。」',
                options: ['みる', 'いく', 'くる', 'しまう'],
                correctIndex: 0,
                explanation: '對話情境。那我試試看。'
            },
            {
                id: 'n4_te_miru_5',
                sentence: '分{わ}からなかったら、先生{せんせい}に聞{き}いて（　）たらどうですか。',
                options: ['み', 'い', 'き', 'おき'],
                correctIndex: 0,
                explanation: {
                    correct: '不懂的話試著問老師如何？',
                    wrong: [
                        '「い」接續不對。',
                        '「き」是「くる」。',
                        '「おき」是事先準備。'
                    ]
                }
            }
        ]
    },

    // ============== てもらう ==============
    'n4_te_morau': {
        id: 'n4_te_morau',
        pattern: 'てもらう',
        connection: '動詞て形 + もらう',
        translation: '請（別人）做...; 獲得（別人的幫助）',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '請求或接受他人的幫助',
                description: '表示說話者請求或接受他人為自己做某事。',
                examples: [
                    { japanese: '友達{ともだち}に手伝{てつだ}ってもらった。', chinese: '我請朋友幫忙了。' },
                    { japanese: '先生{せんせい}に説明{せつめい}してもらいました。', chinese: '我請老師說明了。' },
                    { japanese: '彼{かれ}に車{くるま}で送{おく}ってもらった。', chinese: '我請他開車送我。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_te_morau_1',
                sentence: '友達{ともだち}に宿題{しゅくだい}を見{み}て（　）。',
                options: ['もらった', 'あげた', 'くれた', 'やった'],
                correctIndex: 0,
                explanation: '請朋友看作業。'
            },
            {
                id: 'n4_te_morau_2',
                sentence: '彼{かれ}に写真{しゃしん}を撮{と}って（　）。',
                options: ['もらった', 'あげた', 'くれた', 'やった'],
                correctIndex: 0,
                explanation: '請他拍照。'
            },
            {
                id: 'n4_te_morau_3',
                sentence: '先輩{せんぱい}にレポートを直{なお}して（　）。',
                options: ['もらった', 'あげた', 'くれた', 'やった'],
                correctIndex: 0,
                explanation: {
                    correct: '請前輩修改報告。',
                    wrong: [
                        '「あげた」是我為他人做。',
                        '「くれた」強調對方主動。',
                        '「やった」用於對下。'
                    ]
                }
            },
            {
                id: 'n4_te_morau_4',
                sentence: '「誰{だれ}に教{おし}わったの？」\n「山田{やまだ}さんに教{おし}えて（　）の。」',
                options: ['もらった', 'あげた', 'くれた', 'やった'],
                correctIndex: 0,
                explanation: '對話情境。請山田先生教的。'
            },
            {
                id: 'n4_te_morau_5',
                sentence: '病院{びょういん}で診{み}て（　）ほうがいいですよ。',
                options: ['もらった', 'あげた', 'くれた', 'やった'],
                correctIndex: 0,
                explanation: {
                    correct: '最好去醫院看看。',
                    wrong: [
                        '「あげた」方向相反。',
                        '「くれた」不適合這個句型。',
                        '「やった」不合適。'
                    ]
                }
            }
        ]
    },

    // ============== ておく ==============
    'n4_te_oku': {
        id: 'n4_te_oku',
        pattern: 'ておく',
        connection: '動詞て形 + おく',
        translation: '事先做好...; 保持某狀態',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '事先準備',
                description: '表示為了將來而事先做好某事。',
                examples: [
                    { japanese: '旅行{りょこう}の前{まえ}にホテルを予約{よやく}しておいた。', chinese: '旅行前事先預訂了飯店。' },
                    { japanese: '明日{あした}のために準備{じゅんび}しておきます。', chinese: '為了明天事先準備好。' }
                ]
            },
            {
                usageId: 2,
                title: '維持原狀',
                description: '表示讓某狀態保持不變。',
                examples: [
                    { japanese: '窓{まど}を開{あ}けておいてください。', chinese: '請讓窗戶開著。' },
                    { japanese: 'そのままにしておいて。', chinese: '就讓它保持那樣。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_te_oku_1',
                sentence: '会議{かいぎ}の前{まえ}に資料{しりょう}を読{よ}んで（　）。',
                options: ['おいた', 'みた', 'いた', 'きた'],
                correctIndex: 0,
                explanation: '會議前事先讀了資料。'
            },
            {
                id: 'n4_te_oku_2',
                sentence: 'エアコンをつけて（　）ください。',
                options: ['おいて', 'みて', 'いて', 'きて'],
                correctIndex: 0,
                explanation: '請讓冷氣開著。'
            },
            {
                id: 'n4_te_oku_3',
                sentence: '試験{しけん}の前{まえ}に復習{ふくしゅう}して（　）ほうがいい。',
                options: ['おいた', 'みた', 'いた', 'きた'],
                correctIndex: 0,
                explanation: {
                    correct: '考試前最好事先複習。',
                    wrong: [
                        '「みた」是嘗試。',
                        '「いた」是持續狀態。',
                        '「きた」是從過去到現在。'
                    ]
                }
            },
            {
                id: 'n4_te_oku_4',
                sentence: '「ドアを閉{し}めましょうか。」\n「いいえ、開{あ}けて（　）ください。」',
                options: ['おいて', 'みて', 'いて', 'きて'],
                correctIndex: 0,
                explanation: '對話情境。請讓門開著。'
            },
            {
                id: 'n4_te_oku_5',
                sentence: '後{あと}で使{つか}うから、ここに置{お}いて（　）。',
                options: ['おいて', 'みて', 'いて', 'きて'],
                correctIndex: 0,
                explanation: {
                    correct: '等下要用，所以放在這裡。',
                    wrong: [
                        '「みて」是嘗試。',
                        '「いて」接續不對。',
                        '「きて」是來。'
                    ]
                }
            }
        ]
    },

    // ============== てしまう ==============
    'n4_te_shimau': {
        id: 'n4_te_shimau',
        pattern: 'てしまう',
        connection: '動詞て形 + しまう',
        translation: '...完了; 不小心...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '完成',
                description: '表示動作完全完成。',
                examples: [
                    { japanese: 'この本{ほん}を読{よ}んでしまった。', chinese: '把這本書讀完了。' },
                    { japanese: '宿題{しゅくだい}をやってしまおう。', chinese: '把作業做完吧。' }
                ]
            },
            {
                usageId: 2,
                title: '遺憾或後悔',
                description: '表示不小心做了某事，帶有遺憾或後悔的語氣。',
                examples: [
                    { japanese: '電車{でんしゃ}の中{なか}で寝{ね}てしまった。', chinese: '不小心在電車上睡著了。' },
                    { japanese: '大事{だいじ}な書類{しょるい}をなくしてしまった。', chinese: '不小心弄丟了重要文件。' }
                ]
            }
        ],
        analysis: {
            title: '口語中的縮約形',
            description: '「てしまう」在口語中常縮約。',
            points: [
                {
                    rule: '「てしまう」→「ちゃう」',
                    examples: [{ japanese: '食{た}べてしまう → 食{た}べちゃう', chinese: '吃完' }]
                },
                {
                    rule: '「でしまう」→「じゃう」',
                    examples: [{ japanese: '飲{の}んでしまう → 飲{の}んじゃう', chinese: '喝完' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_te_shimau_1',
                sentence: '財布{さいふ}を忘{わす}れて（　）。',
                options: ['しまった', 'みた', 'おいた', 'いた'],
                correctIndex: 0,
                explanation: '不小心忘了錢包。'
            },
            {
                id: 'n4_te_shimau_2',
                sentence: 'ケーキを全部{ぜんぶ}食{た}べて（　）。',
                options: ['しまった', 'みた', 'おいた', 'いた'],
                correctIndex: 0,
                explanation: '把蛋糕全吃完了。'
            },
            {
                id: 'n4_te_shimau_3',
                sentence: '約束{やくそく}の時間{じかん}に遅{おく}れて（　）。',
                options: ['しまった', 'みた', 'おいた', 'きた'],
                correctIndex: 0,
                explanation: {
                    correct: '不小心遲到了（後悔）。',
                    wrong: [
                        '「みた」是嘗試。',
                        '「おいた」是事先準備。',
                        '「きた」是從過去到現在。'
                    ]
                }
            },
            {
                id: 'n4_te_shimau_4',
                sentence: '「宿題{しゅくだい}、やった？」\n「うん、もうやって（　）よ。」',
                options: ['しまった', 'みた', 'おいた', 'いた'],
                correctIndex: 0,
                explanation: '對話情境。已經做完了。'
            },
            {
                id: 'n4_te_shimau_5',
                sentence: '大切{たいせつ}な写真{しゃしん}を消{け}して（　）。',
                options: ['しまった', 'みた', 'おいた', 'きた'],
                correctIndex: 0,
                explanation: {
                    correct: '不小心刪掉了重要照片。',
                    wrong: [
                        '「みた」是嘗試。',
                        '「おいた」是事先準備。',
                        '「きた」是從過去到現在。'
                    ]
                }
            }
        ]
    },

    // ============== ても ==============
    'n4_temo': {
        id: 'n4_temo',
        pattern: 'ても',
        connection: '動詞て形 / い形-くても / な形-でも / 名詞-でも',
        translation: '即使...; 就算...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '讓步條件',
                description: '表示即使前項成立，後項仍然成立或不受影響。',
                examples: [
                    { japanese: '雨{あめ}が降{ふ}っても、行{い}きます。', chinese: '即使下雨也要去。' },
                    { japanese: '高{たか}くても、買{か}いたい。', chinese: '就算貴也想買。' },
                    { japanese: '静{しず}かでも、眠{ねむ}れない。', chinese: '就算安靜也睡不著。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_temo_1',
                sentence: '忙{いそが}しく（　）、運動{うんどう}します。',
                options: ['ても', 'たら', 'ば', 'と'],
                correctIndex: 0,
                explanation: '即使忙也運動。'
            },
            {
                id: 'n4_temo_2',
                sentence: '薬{くすり}を飲{の}ん（　）、熱{ねつ}が下{さ}がらない。',
                options: ['でも', 'だら', 'でば', 'だと'],
                correctIndex: 0,
                explanation: '即使吃藥燒也不退。'
            },
            {
                id: 'n4_temo_3',
                sentence: '何度{なんど}説明{せつめい}し（　）、わかってくれない。',
                options: ['ても', 'たら', 'ば', 'と'],
                correctIndex: 0,
                explanation: {
                    correct: '即使解釋多次也不懂。',
                    wrong: [
                        '「たら」是假定。',
                        '「ば」是條件。',
                        '「と」是必然。'
                    ]
                }
            },
            {
                id: 'n4_temo_4',
                sentence: '「明日{あした}、雨{あめ}だったらどうする？」\n「雨{あめ}が降{ふ}っ（　）、行{い}くよ。」',
                options: ['ても', 'たら', 'ば', 'と'],
                correctIndex: 0,
                explanation: '對話情境。即使下雨也去。'
            },
            {
                id: 'n4_temo_5',
                sentence: '病気{びょうき}（　）、仕事{しごと}を休{やす}めない。',
                options: ['でも', 'だったら', 'なら', 'であれば'],
                correctIndex: 0,
                explanation: {
                    correct: '即使生病也不能請假。',
                    wrong: [
                        '「だったら」是假定。',
                        '「なら」是條件。',
                        '「であれば」是假定。'
                    ]
                }
            }
        ]
    },

    // ============== と（条件） ==============
    'n4_to': {
        id: 'n4_to',
        pattern: 'と（条件）',
        connection: '動詞辭書形 / ない形 + と',
        translation: '一...就...; 如果...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '自然或習慣性的結果',
                description: '表示一旦發生前項，後項就自然或必然發生。',
                examples: [
                    { japanese: '春{はる}になると、桜{さくら}が咲{さ}く。', chinese: '一到春天，櫻花就開。' },
                    { japanese: 'このボタンを押{お}すと、ドアが開{あ}きます。', chinese: '按這個按鈕門就會開。' },
                    { japanese: '食{た}べすぎると、太{ふと}る。', chinese: '吃太多會胖。' }
                ]
            }
        ],
        analysis: {
            title: '「と」的使用限制',
            description: '「と」後項不能用意志、命令、請求等表達。',
            points: [
                {
                    rule: '○ 自然現象、習慣',
                    examples: [{ japanese: '冬{ふゆ}になると寒{さむ}くなる。', chinese: '一到冬天就變冷。' }]
                },
                {
                    rule: '× 意志、命令、請求',
                    examples: [{ japanese: '× 雨{あめ}が降{ふ}ると、傘{かさ}を持{も}っていきましょう。', chinese: '（不自然）' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_to_1',
                sentence: '右{みぎ}に曲{ま}がる（　）、郵便局{ゆうびんきょく}があります。',
                options: ['と', 'たら', 'ば', 'なら'],
                correctIndex: 0,
                explanation: '往右轉就有郵局。'
            },
            {
                id: 'n4_to_2',
                sentence: '夜{よる}になる（　）、星{ほし}が見{み}える。',
                options: ['と', 'たら', 'ば', 'なら'],
                correctIndex: 0,
                explanation: '到了晚上就能看到星星。'
            },
            {
                id: 'n4_to_3',
                sentence: 'お酒{さけ}を飲{の}む（　）、顔{かお}が赤{あか}くなる。',
                options: ['と', 'たら', 'ば', 'なら'],
                correctIndex: 0,
                explanation: {
                    correct: '喝酒臉就會變紅（習慣性）。',
                    wrong: [
                        '「たら」也可但語感不同。',
                        '「ば」強調條件。',
                        '「なら」是以對方說話為前提。'
                    ]
                }
            },
            {
                id: 'n4_to_4',
                sentence: '「この薬{くすり}、どうやって飲{の}むの？」\n「食後{しょくご}に飲{の}む（　）、よく効{き}きますよ。」',
                options: ['と', 'たら', 'ば', 'なら'],
                correctIndex: 0,
                explanation: '對話情境。飯後吃效果好。'
            },
            {
                id: 'n4_to_5',
                sentence: '電気{でんき}を消{け}す（　）、暗{くら}くなります。',
                options: ['と', 'たら', 'ば', 'なら'],
                correctIndex: 0,
                explanation: {
                    correct: '關燈就會變暗（自然結果）。',
                    wrong: [
                        '「たら」也可。',
                        '「ば」強調條件。',
                        '「なら」語感不同。'
                    ]
                }
            }
        ]
    },

    // ============== という ==============
    'n4_to_iu': {
        id: 'n4_to_iu',
        pattern: 'という',
        connection: '名詞 / 文 + という + 名詞',
        translation: '叫做...; 所謂的...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '定義或說明名稱',
                description: '用於說明某事物的名稱或定義。',
                examples: [
                    { japanese: '「桜{さくら}」という花{はな}を知{し}っていますか。', chinese: '你知道叫「櫻花」的花嗎？' },
                    { japanese: '田中{たなか}という人{ひと}から電話{でんわ}がありました。', chinese: '有一個叫田中的人打電話來。' }
                ]
            },
            {
                usageId: 2,
                title: '引用內容',
                description: '引用別人說的話或某種說法。',
                examples: [
                    { japanese: '明日{あした}は休{やす}みだという話{はなし}を聞{き}いた。', chinese: '聽說明天放假。' },
                    { japanese: '彼{かれ}は来{こ}ないという連絡{れんらく}があった。', chinese: '收到他說不來的聯絡。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_to_iu_1',
                sentence: '「寿司{すし}」（　）食{た}べ物{もの}を知{し}っていますか。',
                options: ['という', 'といった', 'との', 'とする'],
                correctIndex: 0,
                explanation: '你知道叫「壽司」的食物嗎？'
            },
            {
                id: 'n4_to_iu_2',
                sentence: '山本{やまもと}（　）学生{がくせい}がいます。',
                options: ['という', 'といった', 'との', 'とする'],
                correctIndex: 0,
                explanation: '有一個叫山本的學生。'
            },
            {
                id: 'n4_to_iu_3',
                sentence: '明日{あした}会議{かいぎ}がある（　）ことを聞{き}きました。',
                options: ['という', 'といった', 'との', 'とする'],
                correctIndex: 0,
                explanation: {
                    correct: '聽說明天有會議。',
                    wrong: [
                        '「といった」是列舉。',
                        '「との」接續不同。',
                        '「とする」是假設。'
                    ]
                }
            },
            {
                id: 'n4_to_iu_4',
                sentence: '「誰{だれ}から電話{でんわ}があったの？」\n「鈴木{すずき}（　）人{ひと}から。」',
                options: ['という', 'といった', 'との', 'とする'],
                correctIndex: 0,
                explanation: '對話情境。一個叫鈴木的人。'
            },
            {
                id: 'n4_to_iu_5',
                sentence: '「お茶漬{ちゃづ}け」（　）料理{りょうり}を食{た}べたことがありますか。',
                options: ['という', 'といった', 'との', 'とする'],
                correctIndex: 0,
                explanation: {
                    correct: '你吃過叫「茶泡飯」的料理嗎？',
                    wrong: [
                        '「といった」是列舉。',
                        '「との」接續不同。',
                        '「とする」是假設。'
                    ]
                }
            }
        ]
    },

    // ============== ところ ==============
    'n4_tokoro': {
        id: 'n4_tokoro',
        pattern: 'ところ',
        connection: '動詞辭書形 / ている形 / た形 + ところ',
        translation: '正要...; 正在...; 剛...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '動詞辭書形＋ところ：正要...',
                description: '表示動作即將開始。',
                examples: [
                    { japanese: '今{いま}から出{で}かけるところです。', chinese: '正要出門。' },
                    { japanese: 'ご飯{はん}を食{た}べるところだ。', chinese: '正要吃飯。' }
                ]
            },
            {
                usageId: 2,
                title: '動詞ている形＋ところ：正在...',
                description: '表示動作正在進行中。',
                examples: [
                    { japanese: '今{いま}、資料{しりょう}を読{よ}んでいるところです。', chinese: '正在看資料。' }
                ]
            },
            {
                usageId: 3,
                title: '動詞た形＋ところ：剛...',
                description: '表示動作剛剛完成。',
                examples: [
                    { japanese: '今{いま}、家{いえ}に着{つ}いたところです。', chinese: '剛到家。' },
                    { japanese: '電話{でんわ}が終{お}わったところだ。', chinese: '剛打完電話。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_tokoro_1',
                sentence: '今{いま}、お風呂{ふろ}に入{はい}る（　）です。',
                options: ['ところ', 'ばかり', 'まま', 'とおり'],
                correctIndex: 0,
                explanation: '正要洗澡。'
            },
            {
                id: 'n4_tokoro_2',
                sentence: 'ちょうど帰{かえ}ってきた（　）です。',
                options: ['ところ', 'ばかり', 'まま', 'とおり'],
                correctIndex: 0,
                explanation: '剛回來。'
            },
            {
                id: 'n4_tokoro_3',
                sentence: '今{いま}、電話{でんわ}で話{はな}している（　）です。',
                options: ['ところ', 'ばかり', 'まま', 'とおり'],
                correctIndex: 0,
                explanation: {
                    correct: '正在講電話。',
                    wrong: [
                        '「ばかり」是剛完成（主觀）。',
                        '「まま」是保持狀態。',
                        '「とおり」是按照。'
                    ]
                }
            },
            {
                id: 'n4_tokoro_4',
                sentence: '「もう食{た}べた？」\n「ううん、これから食{た}べる（　）。」',
                options: ['ところ', 'ばかり', 'まま', 'とおり'],
                correctIndex: 0,
                explanation: '對話情境。正要吃。'
            },
            {
                id: 'n4_tokoro_5',
                sentence: '今{いま}、起{お}きた（　）なので、まだ眠{ねむ}いです。',
                options: ['ところ', 'ばかり', 'まま', 'とおり'],
                correctIndex: 0,
                explanation: {
                    correct: '剛起床，所以還想睡。',
                    wrong: [
                        '「ばかり」也可以，但強調主觀。',
                        '「まま」是保持狀態。',
                        '「とおり」是按照。'
                    ]
                }
            }
        ]
    },

    // ============== 続ける ==============
    'n4_tsuzukeru': {
        id: 'n4_tsuzukeru',
        pattern: '続ける（つづける）',
        connection: '動詞ます形 + 続ける',
        translation: '繼續...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '持續進行某動作',
                description: '表示某動作持續進行，不中斷。',
                examples: [
                    { japanese: '３時間{じかん}も歩{ある}き続{つづ}けた。', chinese: '連續走了三個小時。' },
                    { japanese: '日本語{にほんご}を勉強{べんきょう}し続{つづ}けている。', chinese: '持續在學日語。' },
                    { japanese: '彼女{かのじょ}は泣{な}き続{つづ}けた。', chinese: '她一直哭。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_tsuzukeru_1',
                sentence: '雨{あめ}が降{ふ}り（　）いる。',
                options: ['続けて', '始めて', '終わって', '出して'],
                correctIndex: 0,
                explanation: '雨一直下著。'
            },
            {
                id: 'n4_tsuzukeru_2',
                sentence: '１時間{じかん}も待{ま}ち（　）た。',
                options: ['続け', '始め', '終わっ', '出し'],
                correctIndex: 0,
                explanation: '等了整整一小時。'
            },
            {
                id: 'n4_tsuzukeru_3',
                sentence: '彼{かれ}は黙{だま}って聞{き}き（　）た。',
                options: ['続け', '始め', '終わっ', '出し'],
                correctIndex: 0,
                explanation: {
                    correct: '他默默地一直聽著。',
                    wrong: [
                        '「始め」是開始。',
                        '「終わっ」是結束。',
                        '「出し」是開始（突然）。'
                    ]
                }
            },
            {
                id: 'n4_tsuzukeru_4',
                sentence: '「まだ走{はし}っているの？」\n「うん、１時間{じかん}走{はし}り（　）いるよ。」',
                options: ['続けて', '始めて', '終わって', '出して'],
                correctIndex: 0,
                explanation: '對話情境。跑了一小時了。'
            },
            {
                id: 'n4_tsuzukeru_5',
                sentence: '夢{ゆめ}を追{お}いかけ（　）たい。',
                options: ['続け', '始め', '終わり', '出し'],
                correctIndex: 0,
                explanation: {
                    correct: '想繼續追夢。',
                    wrong: [
                        '「始め」是開始追。',
                        '「終わり」是結束追。',
                        '「出し」是開始（突然）。'
                    ]
                }
            }
        ]
    },

    // ============== やすい ==============
    'n4_yasui': {
        id: 'n4_yasui',
        pattern: 'やすい',
        connection: '動詞ます形 + やすい',
        translation: '容易...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '容易做某事',
                description: '表示某動作容易進行，與「にくい」相反。',
                examples: [
                    { japanese: 'この本{ほん}は読{よ}みやすい。', chinese: '這本書很容易讀。' },
                    { japanese: 'このペンは書{か}きやすい。', chinese: '這支筆很好寫。' },
                    { japanese: '彼{かれ}は話{はな}しやすい人{ひと}だ。', chinese: '他是個容易交談的人。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_yasui_1',
                sentence: 'この道{みち}は歩{ある}き（　）。',
                options: ['やすい', 'にくい', 'たい', 'そう'],
                correctIndex: 0,
                explanation: '這條路很好走。'
            },
            {
                id: 'n4_yasui_2',
                sentence: 'このアプリは使{つか}い（　）。',
                options: ['やすい', 'にくい', 'たい', 'そう'],
                correctIndex: 0,
                explanation: '這個APP很好用。'
            },
            {
                id: 'n4_yasui_3',
                sentence: '彼女{かのじょ}の説明{せつめい}は分{わ}かり（　）。',
                options: ['やすい', 'にくい', 'たい', 'そう'],
                correctIndex: 0,
                explanation: {
                    correct: '她的說明容易懂。',
                    wrong: [
                        '「にくい」是難懂。',
                        '「たい」是想做。',
                        '「そう」是看起來。'
                    ]
                }
            },
            {
                id: 'n4_yasui_4',
                sentence: '「この靴{くつ}、いいね。」\n「うん、とても履{は}き（　）よ。」',
                options: ['やすい', 'にくい', 'たい', 'そう'],
                correctIndex: 0,
                explanation: '對話情境。很好穿。'
            },
            {
                id: 'n4_yasui_5',
                sentence: '冬{ふゆ}は風邪{かぜ}を引{ひ}き（　）。',
                options: ['やすい', 'にくい', 'たい', 'そう'],
                correctIndex: 0,
                explanation: {
                    correct: '冬天容易感冒。',
                    wrong: [
                        '「にくい」是不容易。',
                        '「たい」是想感冒（不自然）。',
                        '「そう」接續不同。'
                    ]
                }
            }
        ]
    },

    // ============== ようだ ==============
    'n4_you_da': {
        id: 'n4_you_da',
        pattern: 'ようだ',
        connection: '動詞普通形 / い形 / な形-な / 名詞-の + ようだ',
        translation: '好像...; 似乎...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '推測',
                description: '根據觀察或感覺做出推測。',
                examples: [
                    { japanese: '彼{かれ}は疲{つか}れているようだ。', chinese: '他好像很累。' },
                    { japanese: '雨{あめ}が降{ふ}りそうようだ。', chinese: '好像要下雨了。' },
                    { japanese: '風邪{かぜ}のようです。', chinese: '好像是感冒。' }
                ]
            },
            {
                usageId: 2,
                title: '比喻',
                description: '表示像某事物一樣。',
                examples: [
                    { japanese: 'まるで夢{ゆめ}のようだ。', chinese: '簡直像做夢一樣。' },
                    { japanese: '彼女{かのじょ}は天使{てんし}のようだ。', chinese: '她像天使一樣。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_you_da_1',
                sentence: '外{そと}は寒{さむ}い（　）。',
                options: ['ようだ', 'そうだ', 'らしい', 'みたいだ'],
                correctIndex: 0,
                explanation: '外面好像很冷。'
            },
            {
                id: 'n4_you_da_2',
                sentence: '誰{だれ}もいない（　）。',
                options: ['ようだ', 'そうだ', 'らしい', 'みたいだ'],
                correctIndex: 0,
                explanation: '好像沒人在。'
            },
            {
                id: 'n4_you_da_3',
                sentence: 'まるで映画{えいが}の（　）場面{ばめん}だ。',
                options: ['ような', 'そうな', 'らしい', 'みたいな'],
                correctIndex: 0,
                explanation: {
                    correct: '簡直像電影一樣的場面。',
                    wrong: [
                        '「そうな」接續不同。',
                        '「らしい」是典型。',
                        '「みたいな」也可以，較口語。'
                    ]
                }
            },
            {
                id: 'n4_you_da_4',
                sentence: '「彼{かれ}、元気{げんき}？」\n「最近{さいきん}忙{いそが}しい（　）よ。」',
                options: ['ようだ', 'そうだ', 'らしい', 'みたいだ'],
                correctIndex: 0,
                explanation: '對話情境。好像最近很忙。'
            },
            {
                id: 'n4_you_da_5',
                sentence: '彼{かれ}の話{はなし}は本当{ほんとう}の（　）。',
                options: ['ようだ', 'そうだ', 'らしい', 'みたいだ'],
                correctIndex: 0,
                explanation: {
                    correct: '他的話好像是真的。',
                    wrong: [
                        '「そうだ」是傳聞或樣態。',
                        '「らしい」是傳聞或典型。',
                        '「みたいだ」也可，較口語。'
                    ]
                }
            }
        ]
    },

    // ============== ようになる ==============
    'n4_you_ni_naru': {
        id: 'n4_you_ni_naru',
        pattern: 'ようになる',
        connection: '動詞辭書形 / ない形 + ようになる',
        translation: '變得能夠...; 變得會...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '能力或狀態的變化',
                description: '表示從不能到能，或狀態發生變化。',
                examples: [
                    { japanese: '日本語{にほんご}が話{はな}せるようになった。', chinese: '變得會說日語了。' },
                    { japanese: '早{はや}く起{お}きられるようになりたい。', chinese: '想變得能早起。' },
                    { japanese: '野菜{やさい}を食{た}べるようになった。', chinese: '變得會吃蔬菜了。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_you_ni_naru_1',
                sentence: '漢字{かんじ}が読{よ}める（　）。',
                options: ['ようになった', 'ことになった', 'ことにした', 'ようにした'],
                correctIndex: 0,
                explanation: '變得會讀漢字了。'
            },
            {
                id: 'n4_you_ni_naru_2',
                sentence: '自転車{じてんしゃ}に乗{の}れる（　）。',
                options: ['ようになった', 'ことになった', 'ことにした', 'ようにした'],
                correctIndex: 0,
                explanation: '變得會騎腳踏車了。'
            },
            {
                id: 'n4_you_ni_naru_3',
                sentence: '毎日{まいにち}運動{うんどう}する（　）。',
                options: ['ようになった', 'ことになった', 'ことにした', 'ようにした'],
                correctIndex: 0,
                explanation: {
                    correct: '變得每天運動了。',
                    wrong: [
                        '「ことになった」是被決定。',
                        '「ことにした」是決定。',
                        '「ようにした」是努力做到。'
                    ]
                }
            },
            {
                id: 'n4_you_ni_naru_4',
                sentence: '「日本語{にほんご}、上手{じょうず}になったね。」\n「うん、やっと話{はな}せる（　）。」',
                options: ['ようになった', 'ことになった', 'ことにした', 'ようにした'],
                correctIndex: 0,
                explanation: '對話情境。終於會說了。'
            },
            {
                id: 'n4_you_ni_naru_5',
                sentence: '最近{さいきん}、朝{あさ}ご飯{はん}を食{た}べる（　）。',
                options: ['ようになった', 'ことになった', 'ことにした', 'ようにした'],
                correctIndex: 0,
                explanation: {
                    correct: '最近變得會吃早餐了。',
                    wrong: [
                        '「ことになった」是被決定。',
                        '「ことにした」是自己決定。',
                        '「ようにした」是努力做到。'
                    ]
                }
            }
        ]
    },

    // ============== ようにする ==============
    'n4_you_ni_suru': {
        id: 'n4_you_ni_suru',
        pattern: 'ようにする',
        connection: '動詞辭書形 / ない形 + ようにする',
        translation: '努力做到...; 盡量...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '努力養成習慣或達成目標',
                description: '表示有意識地努力做到某事。',
                examples: [
                    { japanese: '毎日{まいにち}運動{うんどう}するようにしている。', chinese: '我盡量每天運動。' },
                    { japanese: '遅刻{ちこく}しないようにします。', chinese: '我會盡量不遲到。' },
                    { japanese: '野菜{やさい}をたくさん食{た}べるようにしてください。', chinese: '請盡量多吃蔬菜。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_you_ni_suru_1',
                sentence: '早{はや}く寝{ね}る（　）います。',
                options: ['ようにして', 'ことにして', 'ようになって', 'ことになって'],
                correctIndex: 0,
                explanation: '我盡量早睡。'
            },
            {
                id: 'n4_you_ni_suru_2',
                sentence: '甘{あま}いものを食{た}べない（　）。',
                options: ['ようにする', 'ことにする', 'ようになる', 'ことになる'],
                correctIndex: 0,
                explanation: '盡量不吃甜食。'
            },
            {
                id: 'n4_you_ni_suru_3',
                sentence: '忘{わす}れ物{もの}をしない（　）ください。',
                options: ['ようにして', 'ことにして', 'ようになって', 'ことになって'],
                correctIndex: 0,
                explanation: {
                    correct: '請注意不要忘記東西。',
                    wrong: [
                        '「ことにして」是決定。',
                        '「ようになって」是變得能夠。',
                        '「ことになって」是被決定。'
                    ]
                }
            },
            {
                id: 'n4_you_ni_suru_4',
                sentence: '「健康{けんこう}のために何{なに}をしていますか。」\n「毎日{まいにち}歩{ある}く（　）います。」',
                options: ['ようにして', 'ことにして', 'ようになって', 'ことになって'],
                correctIndex: 0,
                explanation: '對話情境。我盡量每天走路。'
            },
            {
                id: 'n4_you_ni_suru_5',
                sentence: 'お酒{さけ}を飲{の}みすぎない（　）。',
                options: ['ようにする', 'ことにする', 'ようになる', 'ことになる'],
                correctIndex: 0,
                explanation: {
                    correct: '盡量不喝太多酒。',
                    wrong: [
                        '「ことにする」是決定。',
                        '「ようになる」是變得能夠。',
                        '「ことになる」是被決定。'
                    ]
                }
            }
        ]
    },

    // ============== ようにいう ==============
    'n4_you_ni_iu': {
        id: 'n4_you_ni_iu',
        pattern: 'ように言う',
        connection: '動詞辭書形 / ない形 + ように言う',
        translation: '告訴...要...; 叫...做...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '轉述命令或請求',
                description: '用於轉述告訴別人要做或不要做某事。',
                examples: [
                    { japanese: '医者{いしゃ}に薬{くすり}を飲{の}むように言{い}われた。', chinese: '被醫生告知要吃藥。' },
                    { japanese: '先生{せんせい}は学生{がくせい}に静{しず}かにするように言{い}った。', chinese: '老師告訴學生要安靜。' },
                    { japanese: '母{はは}に早{はや}く寝{ね}るように言{い}われた。', chinese: '媽媽叫我早點睡。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_you_ni_iu_1',
                sentence: '先生{せんせい}に宿題{しゅくだい}を出{だ}す（　）言{い}われた。',
                options: ['ように', 'ことに', 'ために', 'のに'],
                correctIndex: 0,
                explanation: '被老師說要交作業。'
            },
            {
                id: 'n4_you_ni_iu_2',
                sentence: '医者{いしゃ}にお酒{さけ}を飲{の}まない（　）言{い}われた。',
                options: ['ように', 'ことに', 'ために', 'のに'],
                correctIndex: 0,
                explanation: '被醫生說不要喝酒。'
            },
            {
                id: 'n4_you_ni_iu_3',
                sentence: '部長{ぶちょう}に報告書{ほうこくしょ}を書{か}く（　）言{い}われました。',
                options: ['ように', 'ことに', 'ために', 'のに'],
                correctIndex: 0,
                explanation: {
                    correct: '被部長說要寫報告。',
                    wrong: [
                        '「ことに」不接「言う」。',
                        '「ために」是目的。',
                        '「のに」是轉折。'
                    ]
                }
            },
            {
                id: 'n4_you_ni_iu_4',
                sentence: '「何{なに}を言{い}われたの？」\n「早{はや}く帰{かえ}る（　）言{い}われたよ。」',
                options: ['ように', 'ことに', 'ために', 'のに'],
                correctIndex: 0,
                explanation: '對話情境。被說要早點回家。'
            },
            {
                id: 'n4_you_ni_iu_5',
                sentence: '子供{こども}に野菜{やさい}を食{た}べる（　）言{い}った。',
                options: ['ように', 'ことに', 'ために', 'のに'],
                correctIndex: 0,
                explanation: {
                    correct: '告訴孩子要吃蔬菜。',
                    wrong: [
                        '「ことに」不接「言う」。',
                        '「ために」是目的。',
                        '「のに」是轉折。'
                    ]
                }
            }
        ]
    },

    // ============== ようと思う ==============
    'n4_you_to_omou': {
        id: 'n4_you_to_omou',
        pattern: 'ようと思う',
        connection: '動詞意向形 + と思う',
        translation: '想要...; 打算...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '表達意圖或計劃',
                description: '表示說話者的意圖或計劃。',
                examples: [
                    { japanese: '来年{らいねん}、日本{にほん}に行{い}こうと思{おも}っています。', chinese: '我打算明年去日本。' },
                    { japanese: 'もっと勉強{べんきょう}しようと思{おも}う。', chinese: '我想要更用功。' },
                    { japanese: '転職{てんしょく}しようと思{おも}っている。', chinese: '我在考慮換工作。' }
                ]
            }
        ],
        analysis: {
            title: '「ようと思う」與「ようと思っている」的差異',
            description: '兩者表達的意圖強度不同。',
            points: [
                {
                    rule: '「ようと思う」：當下的決定或想法。',
                    examples: [{ japanese: '今日{きょう}から運動{うんどう}しようと思{おも}う。', chinese: '我想從今天開始運動。' }]
                },
                {
                    rule: '「ようと思っている」：持續性的計劃或考慮。',
                    examples: [{ japanese: '留学{りゅうがく}しようと思{おも}っている。', chinese: '我一直在考慮留學。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_you_to_omou_1',
                sentence: '週末{しゅうまつ}、映画{えいが}を見{み}（　）思{おも}っています。',
                options: ['ようと', 'ように', 'ために', 'のに'],
                correctIndex: 0,
                explanation: '打算週末看電影。'
            },
            {
                id: 'n4_you_to_omou_2',
                sentence: '来月{らいげつ}から日本語{にほんご}を勉強{べんきょう}し（　）思{おも}う。',
                options: ['ようと', 'ように', 'ために', 'のに'],
                correctIndex: 0,
                explanation: '打算下個月開始學日語。'
            },
            {
                id: 'n4_you_to_omou_3',
                sentence: 'ダイエットし（　）思{おも}っているんですが、なかなか…。',
                options: ['ようと', 'ように', 'ために', 'のに'],
                correctIndex: 0,
                explanation: {
                    correct: '一直在考慮減肥，但是...。',
                    wrong: [
                        '「ように」是目的或樣態。',
                        '「ために」是目的。',
                        '「のに」是轉折。'
                    ]
                }
            },
            {
                id: 'n4_you_to_omou_4',
                sentence: '「夏休{なつやす}みはどうするの？」\n「旅行{りょこう}に行{い}（　）思{おも}っているよ。」',
                options: ['こうと', 'くように', 'くために', 'くのに'],
                correctIndex: 0,
                explanation: '對話情境。打算去旅行。'
            },
            {
                id: 'n4_you_to_omou_5',
                sentence: '新{あたら}しいパソコンを買{か}（　）思{おも}っています。',
                options: ['おうと', 'うように', 'うために', 'うのに'],
                correctIndex: 0,
                explanation: {
                    correct: '打算買新電腦。',
                    wrong: [
                        '「うように」接續不對。',
                        '「うために」接續不對。',
                        '「うのに」接續不對。'
                    ]
                }
            }
        ]
    },

    // ============== より ==============
    'n4_yori': {
        id: 'n4_yori',
        pattern: 'より',
        connection: '名詞 + より',
        translation: '比...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '比較的基準',
                description: '表示比較的對象，相當於中文的「比」。',
                examples: [
                    { japanese: '東京{とうきょう}は大阪{おおさか}より大{おお}きい。', chinese: '東京比大阪大。' },
                    { japanese: '肉{にく}より魚{さかな}のほうが好{す}きです。', chinese: '比起肉，我更喜歡魚。' },
                    { japanese: '今日{きょう}は昨日{きのう}より寒{さむ}い。', chinese: '今天比昨天冷。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_yori_1',
                sentence: '夏{なつ}（　）冬{ふゆ}のほうが好{す}きです。',
                options: ['より', 'ほど', 'くらい', 'ばかり'],
                correctIndex: 0,
                explanation: '比起夏天更喜歡冬天。'
            },
            {
                id: 'n4_yori_2',
                sentence: 'バス（　）電車{でんしゃ}のほうが速{はや}い。',
                options: ['より', 'ほど', 'くらい', 'ばかり'],
                correctIndex: 0,
                explanation: '電車比公車快。'
            },
            {
                id: 'n4_yori_3',
                sentence: '去年{きょねん}（　）今年{ことし}のほうが忙{いそが}しい。',
                options: ['より', 'ほど', 'くらい', 'ばかり'],
                correctIndex: 0,
                explanation: {
                    correct: '今年比去年忙。',
                    wrong: [
                        '「ほど」用於否定比較。',
                        '「くらい」是程度。',
                        '「ばかり」是只有。'
                    ]
                }
            },
            {
                id: 'n4_yori_4',
                sentence: '「コーヒーと紅茶{こうちゃ}、どっちが好{す}き？」\n「コーヒー（　）紅茶{こうちゃ}のほうが好{す}き。」',
                options: ['より', 'ほど', 'くらい', 'ばかり'],
                correctIndex: 0,
                explanation: '對話情境。比起咖啡更喜歡紅茶。'
            },
            {
                id: 'n4_yori_5',
                sentence: '思{おも}った（　）簡単{かんたん}だった。',
                options: ['より', 'ほど', 'くらい', 'ばかり'],
                correctIndex: 0,
                explanation: {
                    correct: '比想像中簡單。',
                    wrong: [
                        '「ほど」語感不同。',
                        '「くらい」是程度。',
                        '「ばかり」是只有。'
                    ]
                }
            }
        ]
    },

    // ============== られる（可能） ==============
    'n4_rareru_kanou': {
        id: 'n4_rareru_kanou',
        pattern: 'られる（可能）',
        connection: '一段動詞：語幹 + られる\n五段動詞：語幹 + える',
        translation: '能夠...; 可以...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '能力或可能性',
                description: '表示有能力做某事或某事可以發生。',
                examples: [
                    { japanese: '日本語{にほんご}が話{はな}せます。', chinese: '會說日語。' },
                    { japanese: '刺身{さしみ}が食{た}べられますか。', chinese: '你能吃生魚片嗎？' },
                    { japanese: 'ここから富士山{ふじさん}が見{み}られる。', chinese: '從這裡能看到富士山。' }
                ]
            }
        ],
        analysis: {
            title: '可能形的變化規則',
            description: '五段動詞和一段動詞的可能形變化不同。',
            points: [
                {
                    rule: '五段動詞：將「う段」改為「え段」+ る',
                    examples: [{ japanese: '書{か}く → 書{か}ける、読{よ}む → 読{よ}める', chinese: '寫 → 能寫、讀 → 能讀' }]
                },
                {
                    rule: '一段動詞：去る + られる',
                    examples: [{ japanese: '食{た}べる → 食{た}べられる、見{み}る → 見{み}られる', chinese: '吃 → 能吃、看 → 能看' }]
                },
                {
                    rule: '不規則：する → できる、くる → こられる',
                    examples: [{ japanese: '運動{うんどう}する → 運動{うんどう}できる', chinese: '運動 → 能運動' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_rareru_kanou_1',
                sentence: '納豆{なっとう}が食{た}べ（　）か。',
                options: ['られます', 'ります', 'します', 'きます'],
                correctIndex: 0,
                explanation: '你能吃納豆嗎？'
            },
            {
                id: 'n4_rareru_kanou_2',
                sentence: '漢字{かんじ}が読{よ}（　）。',
                options: ['める', 'まれる', 'みられる', 'みれる'],
                correctIndex: 0,
                explanation: '會讀漢字。'
            },
            {
                id: 'n4_rareru_kanou_3',
                sentence: '朝{あさ}６時{じ}に起{お}き（　）。',
                options: ['られる', 'れる', 'きれる', 'ける'],
                correctIndex: 0,
                explanation: {
                    correct: '能早上六點起床。',
                    wrong: [
                        '「れる」是五段動詞的可能形。',
                        '「きれる」是「切る」的可能形。',
                        '「ける」接續不對。'
                    ]
                }
            },
            {
                id: 'n4_rareru_kanou_4',
                sentence: '「泳{およ}げる？」\n「うん、少{すこ}し（　）よ。」',
                options: ['泳げる', '泳がれる', '泳ぎられる', '泳ぐれる'],
                correctIndex: 0,
                explanation: '對話情境。會游一點。'
            },
            {
                id: 'n4_rareru_kanou_5',
                sentence: 'この店{みせ}ではクレジットカードが使{つか}（　）。',
                options: ['える', 'われる', 'いられる', 'うれる'],
                correctIndex: 0,
                explanation: {
                    correct: '這家店可以用信用卡。',
                    wrong: [
                        '「われる」接續不對。',
                        '「いられる」是「いる」的被動。',
                        '「うれる」是「売る」的可能形。'
                    ]
                }
            }
        ]
    },

    // ============== られる（受身） ==============
    'n4_rareru_ukemi': {
        id: 'n4_rareru_ukemi',
        pattern: 'られる（受身）',
        connection: '一段動詞：語幹 + られる\n五段動詞：語幹（あ段）+ れる',
        translation: '被...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '直接被動',
                description: '表示主語直接受到動作的影響。',
                examples: [
                    { japanese: '先生{せんせい}に褒{ほ}められた。', chinese: '被老師稱讚了。' },
                    { japanese: '彼{かれ}に招待{しょうたい}された。', chinese: '被他邀請了。' }
                ]
            },
            {
                usageId: 2,
                title: '間接被動（迷惑的被動）',
                description: '表示因他人的動作而受到困擾或影響。',
                examples: [
                    { japanese: '電車{でんしゃ}で足{あし}を踏{ふ}まれた。', chinese: '在電車上被踩了腳。' },
                    { japanese: '雨{あめ}に降{ふ}られた。', chinese: '被雨淋了。' }
                ]
            }
        ],
        analysis: {
            title: '被動形的變化規則',
            description: '五段動詞和一段動詞的被動形變化不同。',
            points: [
                {
                    rule: '五段動詞：將「う段」改為「あ段」+ れる',
                    examples: [{ japanese: '書{か}く → 書{か}かれる、読{よ}む → 読{よ}まれる', chinese: '寫 → 被寫、讀 → 被讀' }]
                },
                {
                    rule: '一段動詞：去る + られる',
                    examples: [{ japanese: '食{た}べる → 食{た}べられる、見{み}る → 見{み}られる', chinese: '吃 → 被吃、看 → 被看' }]
                },
                {
                    rule: '不規則：する → される、くる → こられる',
                    examples: [{ japanese: '招待{しょうたい}する → 招待{しょうたい}される', chinese: '邀請 → 被邀請' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_rareru_ukemi_1',
                sentence: '母{はは}に叱{しか}（　）。',
                options: ['られた', 'れた', 'された', 'きた'],
                correctIndex: 0,
                explanation: '被媽媽罵了。'
            },
            {
                id: 'n4_rareru_ukemi_2',
                sentence: '電車{でんしゃ}で財布{さいふ}を盗{ぬす}（　）。',
                options: ['まれた', 'られた', 'された', 'かれた'],
                correctIndex: 0,
                explanation: '在電車上被偷了錢包。'
            },
            {
                id: 'n4_rareru_ukemi_3',
                sentence: '隣{となり}の人{ひと}にタバコを吸{す}（　）。',
                options: ['われた', 'られた', 'された', 'かれた'],
                correctIndex: 0,
                explanation: {
                    correct: '被旁邊的人抽菸了（迷惑被動）。',
                    wrong: [
                        '「られた」是一段動詞。',
                        '「された」是「する」的被動。',
                        '「かれた」接續不對。'
                    ]
                }
            },
            {
                id: 'n4_rareru_ukemi_4',
                sentence: '「どうしたの？」\n「雨{あめ}に降{ふ}（　）の。」',
                options: ['られた', 'れた', 'された', 'かれた'],
                correctIndex: 0,
                explanation: '對話情境。被雨淋了。'
            },
            {
                id: 'n4_rareru_ukemi_5',
                sentence: 'この本{ほん}は世界中{せかいじゅう}で読{よ}（　）いる。',
                options: ['まれて', 'られて', 'されて', 'かれて'],
                correctIndex: 0,
                explanation: {
                    correct: '這本書在全世界被閱讀。',
                    wrong: [
                        '「られて」是一段動詞。',
                        '「されて」是「する」的被動。',
                        '「かれて」接續不對。'
                    ]
                }
            }
        ]
    },

    // ============== ～中 ==============
    'n4_chuu': {
        id: 'n4_chuu',
        pattern: '～中（ちゅう/じゅう）',
        connection: '名詞 + 中',
        translation: '在...中; 整個...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '～ちゅう：正在進行中',
                description: '表示某動作或狀態正在進行中。',
                examples: [
                    { japanese: '会議中{かいぎちゅう}です。', chinese: '正在開會中。' },
                    { japanese: '工事中{こうじちゅう}', chinese: '施工中' },
                    { japanese: '授業中{じゅぎょうちゅう}に眠{ねむ}くなった。', chinese: '上課中變得想睡。' }
                ]
            },
            {
                usageId: 2,
                title: '～じゅう：整個範圍',
                description: '表示整個時間或空間範圍。',
                examples: [
                    { japanese: '一日中{いちにちじゅう}勉強{べんきょう}した。', chinese: '整天都在讀書。' },
                    { japanese: '世界中{せかいじゅう}で有名{ゆうめい}だ。', chinese: '在全世界都很有名。' },
                    { japanese: '家中{いえじゅう}を掃除{そうじ}した。', chinese: '打掃了整個家。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_chuu_1',
                sentence: '今{いま}、食事{しょくじ}（　）です。',
                options: ['中', 'じゅう', 'ちゅう', 'なか'],
                correctIndex: 0,
                explanation: '正在用餐中。（讀作ちゅう）'
            },
            {
                id: 'n4_chuu_2',
                sentence: '一年（　）、この季節{きせつ}が一番{いちばん}好{す}きです。',
                options: ['じゅう', 'ちゅう', '中', 'なか'],
                correctIndex: 0,
                explanation: '一整年中最喜歡這個季節。'
            },
            {
                id: 'n4_chuu_3',
                sentence: '会議{かいぎ}（　）に電話{でんわ}が鳴{な}った。',
                options: ['ちゅう', 'じゅう', 'で', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '開會中電話響了。',
                    wrong: [
                        '「じゅう」是整個範圍。',
                        '「で」是場所。',
                        '「の」是所有格。'
                    ]
                }
            },
            {
                id: 'n4_chuu_4',
                sentence: '「今{いま}、電話{でんわ}できる？」\n「ごめん、仕事{しごと}（　）なんだ。」',
                options: ['中', 'じゅう', 'で', 'に'],
                correctIndex: 0,
                explanation: '對話情境。工作中。'
            },
            {
                id: 'n4_chuu_5',
                sentence: '町{まち}（　）を歩{ある}き回{まわ}った。',
                options: ['じゅう', 'ちゅう', '中', 'なか'],
                correctIndex: 0,
                explanation: {
                    correct: '在整個城鎮到處走。',
                    wrong: [
                        '「ちゅう」是進行中。',
                        '「中」不明確讀音。',
                        '「なか」是裡面。'
                    ]
                }
            }
        ]
    },

    // ============== ～すぎる ==============
    'n4_sugiru': {
        id: 'n4_sugiru',
        pattern: 'すぎる',
        connection: '動詞ます形 / い形語幹 / な形語幹 + すぎる',
        translation: '太...; 過於...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '過度',
                description: '表示程度過高或數量過多。',
                examples: [
                    { japanese: '食{た}べすぎて、お腹{なか}が痛{いた}い。', chinese: '吃太多，肚子痛。' },
                    { japanese: 'この服{ふく}は高{たか}すぎる。', chinese: '這件衣服太貴了。' },
                    { japanese: '彼{かれ}は真面目{まじめ}すぎる。', chinese: '他太認真了。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_sugiru_1',
                sentence: '昨日{きのう}、飲{の}み（　）頭{あたま}が痛{いた}い。',
                options: ['すぎて', 'すぎた', 'すぎる', 'すぎ'],
                correctIndex: 0,
                explanation: '昨天喝太多，頭痛。'
            },
            {
                id: 'n4_sugiru_2',
                sentence: 'この問題{もんだい}は難{むずか}し（　）。',
                options: ['すぎる', 'すぎて', 'すぎた', 'すぎ'],
                correctIndex: 0,
                explanation: '這個問題太難了。'
            },
            {
                id: 'n4_sugiru_3',
                sentence: '彼{かれ}は優{やさ}し（　）んです。',
                options: ['すぎる', 'すぎて', 'くすぎる', 'にすぎる'],
                correctIndex: 0,
                explanation: {
                    correct: '他太溫柔了。',
                    wrong: [
                        '「すぎて」是連接形。',
                        '「くすぎる」接續不對。',
                        '「にすぎる」是另一個文法。'
                    ]
                }
            },
            {
                id: 'n4_sugiru_4',
                sentence: '「大丈夫{だいじょうぶ}？」\n「ちょっと走{はし}り（　）た。」',
                options: ['すぎ', 'すぎて', 'すぎる', 'すぎた'],
                correctIndex: 0,
                explanation: '對話情境。跑太多了。'
            },
            {
                id: 'n4_sugiru_5',
                sentence: 'このスーツケースは重{おも}（　）。',
                options: ['すぎる', 'すぎて', 'すぎた', 'すぎ'],
                correctIndex: 0,
                explanation: {
                    correct: '這個行李箱太重了。',
                    wrong: [
                        '「すぎて」是連接形。',
                        '「すぎた」是過去形。',
                        '「すぎ」是名詞形。'
                    ]
                }
            }
        ]
    },

    // ============== ～かた ==============
    'n4_kata': {
        id: 'n4_kata',
        pattern: '～方（かた）',
        connection: '動詞ます形 + 方',
        translation: '...的方法; 如何...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '方法或方式',
                description: '表示做某事的方法或方式。',
                examples: [
                    { japanese: '使{つか}い方{かた}を教{おし}えてください。', chinese: '請教我使用方法。' },
                    { japanese: '作{つく}り方{かた}が分{わ}からない。', chinese: '不知道做法。' },
                    { japanese: '読{よ}み方{かた}が難{むずか}しい。', chinese: '讀法很難。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_kata_1',
                sentence: 'この漢字{かんじ}の読{よ}み（　）を教{おし}えてください。',
                options: ['方', 'かた', 'ほう', 'よう'],
                correctIndex: 0,
                explanation: '請教我這個漢字的讀法。'
            },
            {
                id: 'n4_kata_2',
                sentence: '料理{りょうり}の作{つく}り（　）を習{なら}いたい。',
                options: ['方', 'かた', 'ほう', 'よう'],
                correctIndex: 0,
                explanation: '想學做菜的方法。'
            },
            {
                id: 'n4_kata_3',
                sentence: 'この機械{きかい}の使{つか}い（　）が分{わ}かりません。',
                options: ['方', 'ほう', 'よう', 'みち'],
                correctIndex: 0,
                explanation: {
                    correct: '不知道這台機器的用法。',
                    wrong: [
                        '「ほう」是方向或比較。',
                        '「よう」是樣子。',
                        '「みち」是道路。'
                    ]
                }
            },
            {
                id: 'n4_kata_4',
                sentence: '「この字{じ}、何{なん}て読{よ}むの？」\n「読{よ}み（　）を調{しら}べてみて。」',
                options: ['方', 'ほう', 'よう', 'みち'],
                correctIndex: 0,
                explanation: '對話情境。查一下讀法。'
            },
            {
                id: 'n4_kata_5',
                sentence: '日本語{にほんご}の書{か}き（　）を教{おし}えてもらった。',
                options: ['方', 'ほう', 'よう', 'かた'],
                correctIndex: 0,
                explanation: {
                    correct: '請人教我日語的寫法。',
                    wrong: [
                        '「ほう」是方向。',
                        '「よう」是樣子。',
                        '「かた」要接在動詞ます形後。'
                    ]
                }
            }
        ]
    },

    // ============== ～やすい ==============
    'n4_yasui_adj': {
        id: 'n4_yasui_adj',
        pattern: 'やすい（形容詞化）',
        connection: '動詞ます形 + やすい',
        translation: '容易...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '容易發生或容易做到',
                description: '表示某動作容易進行或某狀態容易發生。',
                examples: [
                    { japanese: 'このガラスは割{わ}れやすい。', chinese: '這個玻璃容易破。' },
                    { japanese: '彼{かれ}は怒{おこ}りやすい性格{せいかく}だ。', chinese: '他是容易生氣的性格。' },
                    { japanese: '風邪{かぜ}を引{ひ}きやすい。', chinese: '容易感冒。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_yasui_adj_1',
                sentence: 'この道{みち}は滑{すべ}り（　）から気{き}をつけて。',
                options: ['やすい', 'にくい', 'たい', 'そう'],
                correctIndex: 0,
                explanation: '這條路容易滑，要小心。'
            },
            {
                id: 'n4_yasui_adj_2',
                sentence: '白{しろ}い服{ふく}は汚{よご}れ（　）。',
                options: ['やすい', 'にくい', 'たい', 'そう'],
                correctIndex: 0,
                explanation: '白色衣服容易髒。'
            },
            {
                id: 'n4_yasui_adj_3',
                sentence: '彼女{かのじょ}は泣{な}き（　）人{ひと}だ。',
                options: ['やすい', 'にくい', 'たい', 'そう'],
                correctIndex: 0,
                explanation: {
                    correct: '她是容易哭的人。',
                    wrong: [
                        '「にくい」是難以。',
                        '「たい」是想要。',
                        '「そう」是看起來。'
                    ]
                }
            },
            {
                id: 'n4_yasui_adj_4',
                sentence: '「この傘{かさ}、いいね。」\n「軽{かる}くて、持{も}ち（　）よ。」',
                options: ['やすい', 'にくい', 'たい', 'そう'],
                correctIndex: 0,
                explanation: '對話情境。輕、好拿。'
            },
            {
                id: 'n4_yasui_adj_5',
                sentence: 'アルミは錆{さ}び（　）。',
                options: ['にくい', 'やすい', 'たい', 'そう'],
                correctIndex: 0,
                explanation: {
                    correct: '鋁不容易生鏽。',
                    wrong: [
                        '「やすい」是容易。',
                        '「たい」是想要。',
                        '「そう」是看起來。'
                    ]
                }
            }
        ]
    },

    // ============== ～かどうか ==============
    'n4_ka_dou_ka_full': {
        id: 'n4_ka_dou_ka_full',
        pattern: 'かどうか（完整用法）',
        connection: '動詞普通形 / い形 / な形-か / 名詞-か + どうか',
        translation: '是否...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '表示不確定',
                description: '用於表達是否、有無、對錯等二選一的不確定情況。',
                examples: [
                    { japanese: '明日{あした}来{こ}られるかどうか分{わ}かりません。', chinese: '不知道明天能不能來。' },
                    { japanese: '彼{かれ}が好{す}きかどうか聞{き}いてみた。', chinese: '問了他喜不喜歡。' },
                    { japanese: '正{ただ}しいかどうか確認{かくにん}してください。', chinese: '請確認是否正確。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_ka_dou_ka_full_1',
                sentence: '参加{さんか}できる（　）教{おし}えてください。',
                options: ['かどうか', 'か', 'かも', 'かしら'],
                correctIndex: 0,
                explanation: '請告訴我能不能參加。'
            },
            {
                id: 'n4_ka_dou_ka_full_2',
                sentence: '彼{かれ}が来{く}る（　）分{わ}からない。',
                options: ['かどうか', 'か', 'かも', 'かしら'],
                correctIndex: 0,
                explanation: '不知道他會不會來。'
            },
            {
                id: 'n4_ka_dou_ka_full_3',
                sentence: 'おいしい（　）食{た}べてみないと分{わ}からない。',
                options: ['かどうか', 'か', 'かも', 'かしら'],
                correctIndex: 0,
                explanation: {
                    correct: '好不好吃要試了才知道。',
                    wrong: [
                        '「か」單獨用。',
                        '「かも」是也許。',
                        '「かしら」是女性用語。'
                    ]
                }
            },
            {
                id: 'n4_ka_dou_ka_full_4',
                sentence: '「明日{あした}、空{あ}いてる？」\n「まだ分{わ}からないんだ。空{あ}いている（　）確認{かくにん}するね。」',
                options: ['かどうか', 'か', 'かも', 'かしら'],
                correctIndex: 0,
                explanation: '對話情境。確認有沒有空。'
            },
            {
                id: 'n4_ka_dou_ka_full_5',
                sentence: '合格{ごうかく}した（　）結果{けっか}を待{ま}っている。',
                options: ['かどうか', 'か', 'かも', 'かしら'],
                correctIndex: 0,
                explanation: {
                    correct: '等待是否合格的結果。',
                    wrong: [
                        '「か」單獨用。',
                        '「かも」是也許。',
                        '「かしら」是女性用語。'
                    ]
                }
            }
        ]
    },

    // ============== とか ==============
    'n4_toka': {
        id: 'n4_toka',
        pattern: 'とか',
        connection: '名詞 + とか + 名詞 + とか',
        translation: '...之類的; ...或...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '列舉例子',
                description: '用於列舉幾個例子，暗示還有其他類似的東西。',
                examples: [
                    { japanese: '日本{にほん}とか韓国{かんこく}とかに行{い}きたい。', chinese: '想去日本啦韓國啦之類的地方。' },
                    { japanese: '寿司{すし}とか刺身{さしみ}とかが好{す}きです。', chinese: '喜歡壽司啦生魚片啦之類的。' },
                    { japanese: '休{やす}みの日{ひ}は映画{えいが}を見{み}るとか、本{ほん}を読{よ}むとかしています。', chinese: '休假時看看電影啦、讀讀書啦。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_toka_1',
                sentence: 'りんご（　）みかん（　）を買{か}った。',
                options: ['とか...とか', 'や...や', 'と...と', 'も...も'],
                correctIndex: 0,
                explanation: '買了蘋果啦橘子之類的。'
            },
            {
                id: 'n4_toka_2',
                sentence: '運動{うんどう}する（　）、散歩{さんぽ}する（　）しています。',
                options: ['とか...とか', 'や...や', 'と...と', 'も...も'],
                correctIndex: 0,
                explanation: '做運動啦、散步啦之類的。'
            },
            {
                id: 'n4_toka_3',
                sentence: '東京{とうきょう}（　）大阪{おおさか}（　）に行{い}きたい。',
                options: ['とか...とか', 'や...や', 'と...と', 'も...も'],
                correctIndex: 0,
                explanation: {
                    correct: '想去東京啦大阪啦之類的地方。',
                    wrong: [
                        '「や」也可以列舉但較正式。',
                        '「と」是並列完整。',
                        '「も」是也。'
                    ]
                }
            },
            {
                id: 'n4_toka_4',
                sentence: '「何{なに}がほしい？」\n「ゲーム（　）、漫画{まんが}（　）。」',
                options: ['とか...とか', 'や...や', 'と...と', 'も...も'],
                correctIndex: 0,
                explanation: '對話情境。遊戲啦、漫畫啦。'
            },
            {
                id: 'n4_toka_5',
                sentence: '週末{しゅうまつ}は買{か}い物{もの}（　）、友達{ともだち}と会{あ}う（　）している。',
                options: ['とか...とか', 'や...や', 'と...と', 'も...も'],
                correctIndex: 0,
                explanation: {
                    correct: '週末會購物啦、見朋友啦之類的。',
                    wrong: [
                        '「や」列舉名詞。',
                        '「と」是並列。',
                        '「も」是也。'
                    ]
                }
            }
        ]
    },

    // ============== おかげで ==============
    'n4_okage_de': {
        id: 'n4_okage_de',
        pattern: 'おかげで',
        connection: '動詞普通形 / い形 / な形-な / 名詞-の + おかげで',
        translation: '托...的福; 多虧...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '表示感謝的原因',
                description: '表示因為某人或某事的幫助，而產生好的結果。通常帶有感謝的語氣。',
                examples: [
                    { japanese: '先生{せんせい}のおかげで、合格{ごうかく}できました。', chinese: '托老師的福，及格了。' },
                    { japanese: '薬{くすり}のおかげで、熱{ねつ}が下{さ}がった。', chinese: '多虧了藥，燒退了。' },
                    { japanese: '皆{みな}さんのおかげです。', chinese: '這都是托大家的福。' }
                ]
            }
        ],
        analysis: {
            title: '「おかげで」與「せいで」的比較',
            description: '兩者都表示原因，但結果的正負不同。',
            points: [
                {
                    rule: '「おかげで」：正面結果，表示感謝。',
                    examples: [{ japanese: '友達{ともだち}のおかげで助{たす}かった。', chinese: '多虧朋友幫忙。' }]
                },
                {
                    rule: '「せいで」：負面結果，表示責怪。',
                    examples: [{ japanese: '雨{あめ}のせいで遅{おく}れた。', chinese: '因為下雨遲到了。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_okage_de_1',
                sentence: '先輩{せんぱい}の（　）、仕事{しごと}がうまくいった。',
                options: ['おかげで', 'せいで', 'ために', 'によって'],
                correctIndex: 0,
                explanation: '托前輩的福，工作順利。'
            },
            {
                id: 'n4_okage_de_2',
                sentence: '毎日{まいにち}練習{れんしゅう}した（　）、試合{しあい}に勝{か}てた。',
                options: ['おかげで', 'せいで', 'ために', 'によって'],
                correctIndex: 0,
                explanation: '多虧每天練習，贏了比賽。'
            },
            {
                id: 'n4_okage_de_3',
                sentence: '天気{てんき}がいい（　）、洗濯物{せんたくもの}がよく乾{かわ}いた。',
                options: ['おかげで', 'せいで', 'ために', 'によって'],
                correctIndex: 0,
                explanation: {
                    correct: '多虧天氣好，衣服乾得很快。',
                    wrong: [
                        '「せいで」是負面結果。',
                        '「ために」是目的。',
                        '「によって」是根據。'
                    ]
                }
            },
            {
                id: 'n4_okage_de_4',
                sentence: '「日本語{にほんご}、上手{じょうず}になったね。」\n「先生{せんせい}の（　）です。」',
                options: ['おかげ', 'せい', 'ため', 'もと'],
                correctIndex: 0,
                explanation: '對話情境。托老師的福。'
            },
            {
                id: 'n4_okage_de_5',
                sentence: '彼{かれ}が手伝{てつだ}ってくれた（　）、早{はや}く終{お}わった。',
                options: ['おかげで', 'せいで', 'ために', 'によって'],
                correctIndex: 0,
                explanation: {
                    correct: '多虧他幫忙，很快就結束了。',
                    wrong: [
                        '「せいで」是負面。',
                        '「ために」是目的。',
                        '「によって」是根據。'
                    ]
                }
            }
        ]
    },

    // ============== せいで ==============
    'n4_sei_de': {
        id: 'n4_sei_de',
        pattern: 'せいで',
        connection: '動詞普通形 / い形 / な形-な / 名詞-の + せいで',
        translation: '因為...（負面原因）; 都怪...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '表示責怪的原因',
                description: '表示因為某人或某事，而產生不好的結果。通常帶有責怪或抱怨的語氣。',
                examples: [
                    { japanese: '雨{あめ}のせいで、試合{しあい}が中止{ちゅうし}になった。', chinese: '因為下雨，比賽取消了。' },
                    { japanese: '彼{かれ}のせいで遅刻{ちこく}した。', chinese: '都怪他我遲到了。' },
                    { japanese: '風邪{かぜ}のせいで、旅行{りょこう}に行{い}けなかった。', chinese: '因為感冒，不能去旅行。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_sei_de_1',
                sentence: '電車{でんしゃ}が遅{おく}れた（　）、会議{かいぎ}に間{ま}に合{あ}わなかった。',
                options: ['せいで', 'おかげで', 'ために', 'によって'],
                correctIndex: 0,
                explanation: '因為電車誤點，沒趕上會議。'
            },
            {
                id: 'n4_sei_de_2',
                sentence: '寝{ね}不足{ぶそく}の（　）、頭{あたま}が痛{いた}い。',
                options: ['せいで', 'おかげで', 'ために', 'によって'],
                correctIndex: 0,
                explanation: '因為睡眠不足，頭痛。'
            },
            {
                id: 'n4_sei_de_3',
                sentence: '食{た}べすぎた（　）、お腹{なか}が痛{いた}くなった。',
                options: ['せいで', 'おかげで', 'ために', 'によって'],
                correctIndex: 0,
                explanation: {
                    correct: '因為吃太多，肚子痛了。',
                    wrong: [
                        '「おかげで」是正面。',
                        '「ために」是目的。',
                        '「によって」是根據。'
                    ]
                }
            },
            {
                id: 'n4_sei_de_4',
                sentence: '「どうして遅{おく}れたの？」\n「道{みち}が混{こ}んでいた（　）です。」',
                options: ['せい', 'おかげ', 'ため', 'もと'],
                correctIndex: 0,
                explanation: '對話情境。因為塞車。'
            },
            {
                id: 'n4_sei_de_5',
                sentence: 'あいつの（　）で、計画{けいかく}がダメになった。',
                options: ['せい', 'おかげ', 'ため', 'もと'],
                correctIndex: 0,
                explanation: {
                    correct: '都怪那傢伙，計劃泡湯了。',
                    wrong: [
                        '「おかげ」是正面。',
                        '「ため」是目的。',
                        '「もと」是根據。'
                    ]
                }
            }
        ]
    },

    // ============== によると ==============
    'n4_ni_yoru_to': {
        id: 'n4_ni_yoru_to',
        pattern: 'によると',
        connection: '名詞 + によると',
        translation: '根據...; 據...說',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '引用資訊來源',
                description: '用於說明資訊的來源或依據。',
                examples: [
                    { japanese: '天気予報{てんきよほう}によると、明日{あした}は雨{あめ}だそうだ。', chinese: '根據天氣預報，明天會下雨。' },
                    { japanese: '彼{かれ}の話{はなし}によると、会議{かいぎ}は中止{ちゅうし}になったらしい。', chinese: '據他說，會議好像取消了。' },
                    { japanese: 'ニュースによると、事故{じこ}があったそうだ。', chinese: '據新聞報導，發生了事故。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_ni_yoru_to_1',
                sentence: '新聞{しんぶん}（　）、地震{じしん}があったそうだ。',
                options: ['によると', 'にとって', 'について', 'に対して'],
                correctIndex: 0,
                explanation: '據報紙報導，發生了地震。'
            },
            {
                id: 'n4_ni_yoru_to_2',
                sentence: '先生{せんせい}の話{はなし}（　）、試験{しけん}は来週{らいしゅう}だそうだ。',
                options: ['によると', 'にとって', 'について', 'に対して'],
                correctIndex: 0,
                explanation: '據老師說，考試在下週。'
            },
            {
                id: 'n4_ni_yoru_to_3',
                sentence: '調査{ちょうさ}（　）、若者{わかもの}の読書{どくしょ}時間{じかん}は減{へ}っているらしい。',
                options: ['によると', 'にとって', 'について', 'に対して'],
                correctIndex: 0,
                explanation: {
                    correct: '根據調查，年輕人的閱讀時間在減少。',
                    wrong: [
                        '「にとって」是對...而言。',
                        '「について」是關於。',
                        '「に対して」是對於。'
                    ]
                }
            },
            {
                id: 'n4_ni_yoru_to_4',
                sentence: '「明日{あした}の天気{てんき}は？」\n「予報{よほう}（　）、晴{は}れるらしいよ。」',
                options: ['によると', 'にとって', 'について', 'に対して'],
                correctIndex: 0,
                explanation: '對話情境。根據預報會放晴。'
            },
            {
                id: 'n4_ni_yoru_to_5',
                sentence: '彼女{かのじょ}（　）、パーティーは７時{じ}からだそうだ。',
                options: ['によると', 'にとって', 'について', 'に対して'],
                correctIndex: 0,
                explanation: {
                    correct: '據她說，派對從七點開始。',
                    wrong: [
                        '「にとって」是對...而言。',
                        '「について」是關於。',
                        '「に対して」是對於。'
                    ]
                }
            }
        ]
    },

    // ============== について ==============
    'n4_ni_tsuite': {
        id: 'n4_ni_tsuite',
        pattern: 'について',
        connection: '名詞 + について',
        translation: '關於...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '表示話題或主題',
                description: '用於說明談論、研究、思考等的對象。',
                examples: [
                    { japanese: '日本{にほん}の文化{ぶんか}について研究{けんきゅう}している。', chinese: '正在研究關於日本文化。' },
                    { japanese: 'この問題{もんだい}について話{はな}し合{あ}いましょう。', chinese: '讓我們討論這個問題。' },
                    { japanese: '将来{しょうらい}について考{かんが}えている。', chinese: '在思考關於將來的事。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_ni_tsuite_1',
                sentence: '環境問題{かんきょうもんだい}（　）話{はな}しました。',
                options: ['について', 'によって', 'にとって', 'に対して'],
                correctIndex: 0,
                explanation: '談論了環境問題。'
            },
            {
                id: 'n4_ni_tsuite_2',
                sentence: '日本{にほん}の歴史{れきし}（　）興味{きょうみ}があります。',
                options: ['について', 'によって', 'にとって', 'に対して'],
                correctIndex: 0,
                explanation: '對日本歷史感興趣。'
            },
            {
                id: 'n4_ni_tsuite_3',
                sentence: '新{あたら}しいプロジェクト（　）説明{せつめい}します。',
                options: ['について', 'によって', 'にとって', 'に対して'],
                correctIndex: 0,
                explanation: {
                    correct: '說明關於新計劃。',
                    wrong: [
                        '「によって」是根據。',
                        '「にとって」是對...而言。',
                        '「に対して」是對於。'
                    ]
                }
            },
            {
                id: 'n4_ni_tsuite_4',
                sentence: '「何{なに}を勉強{べんきょう}しているの？」\n「日本{にほん}の文学{ぶんがく}（　）勉強{べんきょう}しているよ。」',
                options: ['について', 'によって', 'にとって', 'に対して'],
                correctIndex: 0,
                explanation: '對話情境。學習關於日本文學。'
            },
            {
                id: 'n4_ni_tsuite_5',
                sentence: 'この映画{えいが}（　）感想{かんそう}を聞{き}かせてください。',
                options: ['について', 'によって', 'にとって', 'に対して'],
                correctIndex: 0,
                explanation: {
                    correct: '請告訴我關於這部電影的感想。',
                    wrong: [
                        '「によって」是根據。',
                        '「にとって」是對...而言。',
                        '「に対して」是對於。'
                    ]
                }
            }
        ]
    },

    // ============== にとって ==============
    'n4_ni_totte': {
        id: 'n4_ni_totte',
        pattern: 'にとって',
        connection: '名詞 + にとって',
        translation: '對...而言; 對...來說',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '表示立場或觀點',
                description: '從某人的立場或觀點來看某事物。',
                examples: [
                    { japanese: '私{わたし}にとって、家族{かぞく}が一番{いちばん}大切{たいせつ}です。', chinese: '對我來說，家人最重要。' },
                    { japanese: '子供{こども}にとって、遊{あそ}びは勉強{べんきょう}だ。', chinese: '對孩子而言，玩耍就是學習。' },
                    { japanese: '外国人{がいこくじん}にとって、日本語{にほんご}は難{むずか}しい。', chinese: '對外國人而言，日語很難。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_ni_totte_1',
                sentence: '学生{がくせい}（　）、この本{ほん}は役{やく}に立{た}つ。',
                options: ['にとって', 'について', 'によって', 'に対して'],
                correctIndex: 0,
                explanation: '對學生而言，這本書很有用。'
            },
            {
                id: 'n4_ni_totte_2',
                sentence: '私{わたし}（　）、友達{ともだち}は宝物{たからもの}だ。',
                options: ['にとって', 'について', 'によって', 'に対して'],
                correctIndex: 0,
                explanation: '對我而言，朋友是寶物。'
            },
            {
                id: 'n4_ni_totte_3',
                sentence: '初心者{しょしんしゃ}（　）、この問題{もんだい}は難{むずか}しい。',
                options: ['にとって', 'について', 'によって', 'に対して'],
                correctIndex: 0,
                explanation: {
                    correct: '對初學者而言，這個問題很難。',
                    wrong: [
                        '「について」是關於。',
                        '「によって」是根據。',
                        '「に対して」是對於。'
                    ]
                }
            },
            {
                id: 'n4_ni_totte_4',
                sentence: '「日本語{にほんご}、難{むずか}しい？」\n「私{わたし}（　）は、そんなに難{むずか}しくないよ。」',
                options: ['にとって', 'について', 'によって', 'に対して'],
                correctIndex: 0,
                explanation: '對話情境。對我來說沒那麼難。'
            },
            {
                id: 'n4_ni_totte_5',
                sentence: '彼{かれ}（　）、仕事{しごと}が一番{いちばん}大切{たいせつ}らしい。',
                options: ['にとって', 'について', 'によって', 'に対して'],
                correctIndex: 0,
                explanation: {
                    correct: '對他而言，工作好像最重要。',
                    wrong: [
                        '「について」是關於。',
                        '「によって」是根據。',
                        '「に対して」是對於。'
                    ]
                }
            }
        ]
    },

    // ============== はずだ ==============
    'n4_hazu_da_full': {
        id: 'n4_hazu_da_full',
        pattern: 'はずだ（完整用法）',
        connection: '動詞普通形 / い形 / な形-な / 名詞-の + はずだ',
        translation: '應該...; 理應...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '根據理由推測',
                description: '根據某種理由或根據進行推測，表示「理應如此」。',
                examples: [
                    { japanese: '彼{かれ}は今日{きょう}来{く}るはずです。', chinese: '他今天應該會來。' },
                    { japanese: 'この本{ほん}は図書館{としょかん}にあるはずだ。', chinese: '這本書應該在圖書館。' },
                    { japanese: '電車{でんしゃ}はもう着{つ}いたはずだ。', chinese: '電車應該已經到了。' }
                ]
            }
        ],
        analysis: {
            title: '「はずだ」與「べきだ」的比較',
            description: '兩者都可譯為「應該」，但用法不同。',
            points: [
                {
                    rule: '「はずだ」：根據理由的推測。',
                    examples: [{ japanese: '約束{やくそく}したから、来{く}るはずだ。', chinese: '因為約好了，應該會來。' }]
                },
                {
                    rule: '「べきだ」：道義上或規範上的應該。',
                    examples: [{ japanese: '約束{やくそく}は守{まも}るべきだ。', chinese: '應該遵守約定。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_hazu_da_full_1',
                sentence: '電話{でんわ}したから、知{し}っている（　）だ。',
                options: ['はず', 'べき', 'つもり', 'わけ'],
                correctIndex: 0,
                explanation: '因為打過電話，應該知道。'
            },
            {
                id: 'n4_hazu_da_full_2',
                sentence: '彼女{かのじょ}は日本{にほん}に住{す}んでいた（　）だ。',
                options: ['はず', 'べき', 'つもり', 'わけ'],
                correctIndex: 0,
                explanation: '她應該住過日本。'
            },
            {
                id: 'n4_hazu_da_full_3',
                sentence: '約束{やくそく}したんだから、来{く}る（　）だ。',
                options: ['はず', 'べき', 'つもり', 'わけ'],
                correctIndex: 0,
                explanation: {
                    correct: '既然約好了，應該會來。',
                    wrong: [
                        '「べき」是義務。',
                        '「つもり」是打算。',
                        '「わけ」是道理。'
                    ]
                }
            },
            {
                id: 'n4_hazu_da_full_4',
                sentence: '「田中{たなか}さん、まだ来{き}ていないの？」\n「もう来{く}る（　）なんだけど…。」',
                options: ['はず', 'べき', 'つもり', 'わけ'],
                correctIndex: 0,
                explanation: '對話情境。應該會來才對。'
            },
            {
                id: 'n4_hazu_da_full_5',
                sentence: '説明書{せつめいしょ}を読{よ}んだから、使{つか}い方{かた}が分{わ}かる（　）だ。',
                options: ['はず', 'べき', 'つもり', 'わけ'],
                correctIndex: 0,
                explanation: {
                    correct: '讀了說明書，應該知道用法。',
                    wrong: [
                        '「べき」是義務。',
                        '「つもり」是打算。',
                        '「わけ」是道理。'
                    ]
                }
            }
        ]
    },

    // ============== ところに / ところへ ==============
    'n4_tokoro_ni': {
        id: 'n4_tokoro_ni',
        pattern: 'ところに / ところへ',
        connection: '動詞辭書形 / ている形 / た形 + ところに / ところへ',
        translation: '正當...的時候',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '時機的巧合',
                description: '表示在某個時機點發生了某事。',
                examples: [
                    { japanese: '出{で}かけようとしたところに、電話{でんわ}がかかってきた。', chinese: '正要出門的時候，電話響了。' },
                    { japanese: '食{た}べているところに、友達{ともだち}が来{き}た。', chinese: '正在吃飯的時候，朋友來了。' },
                    { japanese: '寝{ね}ようとしたところに、地震{じしん}があった。', chinese: '正要睡覺的時候，發生了地震。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_tokoro_ni_1',
                sentence: 'お風呂{ふろ}に入{はい}っている（　）、電話{でんわ}が鳴{な}った。',
                options: ['ところに', 'ところで', 'ところを', 'ところが'],
                correctIndex: 0,
                explanation: '正在洗澡的時候電話響了。'
            },
            {
                id: 'n4_tokoro_ni_2',
                sentence: '出{で}かけようとした（　）、雨{あめ}が降{ふ}ってきた。',
                options: ['ところに', 'ところで', 'ところを', 'ところが'],
                correctIndex: 0,
                explanation: '正要出門的時候下雨了。'
            },
            {
                id: 'n4_tokoro_ni_3',
                sentence: '寝{ね}ようとした（　）、友達{ともだち}から電話{でんわ}があった。',
                options: ['ところに', 'ところで', 'ところを', 'ところが'],
                correctIndex: 0,
                explanation: {
                    correct: '正要睡覺的時候朋友打電話來。',
                    wrong: [
                        '「ところで」是順帶一提。',
                        '「ところを」是被看到。',
                        '「ところが」是然而。'
                    ]
                }
            },
            {
                id: 'n4_tokoro_ni_4',
                sentence: '「何{なに}かあった？」\n「ちょうど帰{かえ}ろうとした（　）、部長{ぶちょう}に呼{よ}ばれたんだ。」',
                options: ['ところに', 'ところで', 'ところを', 'ところが'],
                correctIndex: 0,
                explanation: '對話情境。正要回去時被部長叫住。'
            },
            {
                id: 'n4_tokoro_ni_5',
                sentence: '食事{しょくじ}をしている（　）、来客{らいきゃく}があった。',
                options: ['ところに', 'ところで', 'ところを', 'ところが'],
                correctIndex: 0,
                explanation: {
                    correct: '正在用餐時有客人來。',
                    wrong: [
                        '「ところで」是順帶一提。',
                        '「ところを」是被看到。',
                        '「ところが」是然而。'
                    ]
                }
            }
        ]
    },

    // ============== ようとする ==============
    'n4_you_to_suru': {
        id: 'n4_you_to_suru',
        pattern: 'ようとする',
        connection: '動詞意向形 + とする',
        translation: '正要...; 試圖...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '表示即將進行的動作',
                description: '表示正要做某動作的瞬間。',
                examples: [
                    { japanese: '家{いえ}を出{で}ようとした時{とき}、電話{でんわ}が鳴{な}った。', chinese: '正要出門的時候，電話響了。' },
                    { japanese: '寝{ね}ようとしている。', chinese: '正要睡覺。' }
                ]
            },
            {
                usageId: 2,
                title: '表示努力嘗試',
                description: '表示試圖做某事。',
                examples: [
                    { japanese: '問題{もんだい}を解{と}こうとしたが、できなかった。', chinese: '試著解題，但沒能解出來。' },
                    { japanese: 'ドアを開{あ}けようとしたが、開{あ}かなかった。', chinese: '試著開門，但打不開。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_you_to_suru_1',
                sentence: '電車{でんしゃ}に乗{の}（　）した時{とき}、ドアが閉{し}まった。',
                options: ['ろうと', 'ると', 'ように', 'ために'],
                correctIndex: 0,
                explanation: '正要上電車時門關了。'
            },
            {
                id: 'n4_you_to_suru_2',
                sentence: '窓{まど}を開{あ}け（　）したが、開{あ}かなかった。',
                options: ['ようと', 'ると', 'ように', 'ために'],
                correctIndex: 0,
                explanation: '試著開窗但打不開。'
            },
            {
                id: 'n4_you_to_suru_3',
                sentence: '彼女{かのじょ}に話{はな}しかけ（　）したが、勇気{ゆうき}がなかった。',
                options: ['ようと', 'ると', 'ように', 'ために'],
                correctIndex: 0,
                explanation: {
                    correct: '試著跟她搭話，但沒有勇氣。',
                    wrong: [
                        '「ると」接續不對。',
                        '「ように」是目的。',
                        '「ために」是目的。'
                    ]
                }
            },
            {
                id: 'n4_you_to_suru_4',
                sentence: '「どうしたの？」\n「お風呂{ふろ}に入{はい}（　）していたところだったの。」',
                options: ['ろうと', 'ると', 'ように', 'ために'],
                correctIndex: 0,
                explanation: '對話情境。正要洗澡。'
            },
            {
                id: 'n4_you_to_suru_5',
                sentence: '彼{かれ}は逃{に}げ（　）したが、捕{つか}まった。',
                options: ['ようと', 'ると', 'ように', 'ために'],
                correctIndex: 0,
                explanation: {
                    correct: '他試著逃跑但被抓住了。',
                    wrong: [
                        '「ると」接續不對。',
                        '「ように」是目的。',
                        '「ために」是目的。'
                    ]
                }
            }
        ]
    },

    // ============== ようにする（請求） ==============
    'n4_you_ni_request': {
        id: 'n4_you_ni_request',
        pattern: 'ようにしてください',
        connection: '動詞辭書形 / ない形 + ようにしてください',
        translation: '請務必...; 請注意...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '禮貌的請求或警告',
                description: '用於禮貌地請求對方注意某事或養成某習慣。',
                examples: [
                    { japanese: '遅刻{ちこく}しないようにしてください。', chinese: '請注意不要遲到。' },
                    { japanese: '毎日{まいにち}運動{うんどう}するようにしてください。', chinese: '請每天運動。' },
                    { japanese: '忘{わす}れ物{もの}をしないようにしてください。', chinese: '請注意不要忘記東西。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_you_ni_request_1',
                sentence: '薬{くすり}を忘{わす}れずに飲{の}む（　）してください。',
                options: ['ように', 'ことに', 'ために', 'のに'],
                correctIndex: 0,
                explanation: '請記得吃藥。'
            },
            {
                id: 'n4_you_ni_request_2',
                sentence: '夜{よる}遅{おそ}くまで起{お}きていない（　）してください。',
                options: ['ように', 'ことに', 'ために', 'のに'],
                correctIndex: 0,
                explanation: '請不要熬夜。'
            },
            {
                id: 'n4_you_ni_request_3',
                sentence: '大{おお}きな声{こえ}を出{だ}さない（　）してください。',
                options: ['ように', 'ことに', 'ために', 'のに'],
                correctIndex: 0,
                explanation: {
                    correct: '請不要大聲說話。',
                    wrong: [
                        '「ことに」不接這個句型。',
                        '「ために」是目的。',
                        '「のに」是轉折。'
                    ]
                }
            },
            {
                id: 'n4_you_ni_request_4',
                sentence: '「健康{けんこう}のために何{なに}をすればいいですか。」\n「野菜{やさい}をたくさん食{た}べる（　）してください。」',
                options: ['ように', 'ことに', 'ために', 'のに'],
                correctIndex: 0,
                explanation: '對話情境。請多吃蔬菜。'
            },
            {
                id: 'n4_you_ni_request_5',
                sentence: 'ドアを開{あ}けっぱなしにしない（　）してください。',
                options: ['ように', 'ことに', 'ために', 'のに'],
                correctIndex: 0,
                explanation: {
                    correct: '請不要讓門開著。',
                    wrong: [
                        '「ことに」不接這個句型。',
                        '「ために」是目的。',
                        '「のに」是轉折。'
                    ]
                }
            }
        ]
    },

    // ============== 受身（尊敬） ==============
    'n4_ukemi_sonkei': {
        id: 'n4_ukemi_sonkei',
        pattern: 'られる（尊敬）',
        connection: '一段動詞：語幹 + られる\n五段動詞：語幹（あ段）+ れる',
        translation: '（尊敬語）做...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '尊敬用法',
                description: '被動形也可以用作尊敬語，表示對上位者的敬意。',
                examples: [
                    { japanese: '先生{せんせい}はもう帰{かえ}られました。', chinese: '老師已經回去了。' },
                    { japanese: '社長{しゃちょう}は何{なに}を召{め}し上{あ}がられますか。', chinese: '社長要用什麼？' },
                    { japanese: '部長{ぶちょう}は明日{あした}来{こ}られますか。', chinese: '部長明天來嗎？' }
                ]
            }
        ],
        analysis: {
            title: '尊敬語的選擇',
            description: '被動形作尊敬語時，比專門的尊敬語稍弱。',
            points: [
                {
                    rule: '被動形尊敬：比較一般的敬意',
                    examples: [{ japanese: '先生{せんせい}は帰{かえ}られた。', chinese: '老師回去了。' }]
                },
                {
                    rule: '專門尊敬語：更高的敬意',
                    examples: [{ japanese: '先生{せんせい}はお帰{かえ}りになった。', chinese: '老師回去了。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_ukemi_sonkei_1',
                sentence: '先生{せんせい}は何時{なんじ}に来{こ}（　）か。',
                options: ['られます', 'ます', 'います', 'します'],
                correctIndex: 0,
                explanation: '老師幾點來？（尊敬）'
            },
            {
                id: 'n4_ukemi_sonkei_2',
                sentence: '社長{しゃちょう}はもう出{で}（　）か。',
                options: ['られました', 'ました', 'いました', 'しました'],
                correctIndex: 0,
                explanation: '社長已經出去了嗎？'
            },
            {
                id: 'n4_ukemi_sonkei_3',
                sentence: '部長{ぶちょう}はその本{ほん}を読{よ}（　）そうです。',
                options: ['まれた', 'んだ', 'みた', 'した'],
                correctIndex: 0,
                explanation: {
                    correct: '聽說部長讀了那本書。',
                    wrong: [
                        '「んだ」不夠尊敬。',
                        '「みた」不是尊敬語。',
                        '「した」不合適。'
                    ]
                }
            },
            {
                id: 'n4_ukemi_sonkei_4',
                sentence: '「先生{せんせい}はどこですか。」\n「もう帰{かえ}（　）よ。」',
                options: ['られました', 'りました', 'いました', 'しました'],
                correctIndex: 0,
                explanation: '對話情境。已經回去了。'
            },
            {
                id: 'n4_ukemi_sonkei_5',
                sentence: '先生{せんせい}は新{あたら}しい論文{ろんぶん}を書{か}（　）。',
                options: ['かれた', 'いた', 'した', 'きた'],
                correctIndex: 0,
                explanation: {
                    correct: '老師寫了新論文。',
                    wrong: [
                        '「いた」不是尊敬語。',
                        '「した」不合適。',
                        '「きた」不合適。'
                    ]
                }
            }
        ]
    },

    // ============== ば〜ほど ==============
    'n4_ba_hodo': {
        id: 'n4_ba_hodo',
        pattern: 'ば〜ほど',
        connection: '動詞ば形 + 動詞辭書形 + ほど\nい形-ければ + い形 + ほど',
        translation: '越...越...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '程度相關變化',
                description: '表示隨著前項程度增加，後項也相應變化。',
                examples: [
                    { japanese: '考{かんが}えれば考{かんが}えるほど分{わ}からなくなる。', chinese: '越想越不懂。' },
                    { japanese: '安{やす}ければ安{やす}いほどいい。', chinese: '越便宜越好。' },
                    { japanese: '練習{れんしゅう}すればするほど上手{じょうず}になる。', chinese: '越練習越熟練。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_ba_hodo_1',
                sentence: '勉強{べんきょう}すれば（　）ほど、難{むずか}しく感{かん}じる。',
                options: ['する', 'して', 'した', 'すれば'],
                correctIndex: 0,
                explanation: '越學越覺得難。'
            },
            {
                id: 'n4_ba_hodo_2',
                sentence: '高{たか}ければ（　）ほど、品質{ひんしつ}がいい。',
                options: ['高い', '高くて', '高かった', '高ければ'],
                correctIndex: 0,
                explanation: '越貴品質越好。'
            },
            {
                id: 'n4_ba_hodo_3',
                sentence: '見{み}れば（　）ほど、好{す}きになる。',
                options: ['見る', '見て', '見た', '見れば'],
                correctIndex: 0,
                explanation: {
                    correct: '越看越喜歡。',
                    wrong: [
                        '「見て」是連接形。',
                        '「見た」是過去形。',
                        '「見れば」不重複。'
                    ]
                }
            },
            {
                id: 'n4_ba_hodo_4',
                sentence: '「この仕事{しごと}、難{むずか}しい？」\n「やればやる（　）、難{むずか}しくなるよ。」',
                options: ['ほど', 'くらい', 'ばかり', 'だけ'],
                correctIndex: 0,
                explanation: '對話情境。越做越難。'
            },
            {
                id: 'n4_ba_hodo_5',
                sentence: '早{はや}ければ（　）ほどいい。',
                options: ['早い', '早くて', '早かった', '早ければ'],
                correctIndex: 0,
                explanation: {
                    correct: '越快越好。',
                    wrong: [
                        '「早くて」是連接形。',
                        '「早かった」是過去形。',
                        '「早ければ」不重複。'
                    ]
                }
            }
        ]
    },

    // ============== ほど〜ない ==============
    'n4_hodo_nai': {
        id: 'n4_hodo_nai',
        pattern: 'ほど〜ない',
        connection: '名詞 + ほど + 否定形',
        translation: '沒有...那麼...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '否定比較',
                description: '表示程度不如比較對象。',
                examples: [
                    { japanese: '東京{とうきょう}ほど人{ひと}が多{おお}くない。', chinese: '沒有東京那麼多人。' },
                    { japanese: '思{おも}ったほど難{むずか}しくなかった。', chinese: '沒有想像中那麼難。' },
                    { japanese: '彼{かれ}ほど頭{あたま}がいい人{ひと}はいない。', chinese: '沒有人像他那麼聰明。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_hodo_nai_1',
                sentence: 'この問題{もんだい}は思{おも}った（　）難{むずか}しくなかった。',
                options: ['ほど', 'より', 'くらい', 'ばかり'],
                correctIndex: 0,
                explanation: '這問題沒有想像中難。'
            },
            {
                id: 'n4_hodo_nai_2',
                sentence: '今日{きょう}は昨日{きのう}（　）寒{さむ}くない。',
                options: ['ほど', 'より', 'くらい', 'ばかり'],
                correctIndex: 0,
                explanation: '今天沒有昨天那麼冷。'
            },
            {
                id: 'n4_hodo_nai_3',
                sentence: '彼{かれ}（　）速{はや}く走{はし}れる人{ひと}はいない。',
                options: ['ほど', 'より', 'くらい', 'ばかり'],
                correctIndex: 0,
                explanation: {
                    correct: '沒有人跑得像他那麼快。',
                    wrong: [
                        '「より」是比較。',
                        '「くらい」是程度。',
                        '「ばかり」是只有。'
                    ]
                }
            },
            {
                id: 'n4_hodo_nai_4',
                sentence: '「この料理{りょうり}、辛{から}い？」\n「思{おも}った（　）辛{から}くないよ。」',
                options: ['ほど', 'より', 'くらい', 'ばかり'],
                correctIndex: 0,
                explanation: '對話情境。沒想像中辣。'
            },
            {
                id: 'n4_hodo_nai_5',
                sentence: '日本語{にほんご}は英語{えいご}（　）難{むずか}しくない。',
                options: ['ほど', 'より', 'くらい', 'ばかり'],
                correctIndex: 0,
                explanation: {
                    correct: '日語沒有英語那麼難。',
                    wrong: [
                        '「より」用於肯定比較。',
                        '「くらい」是程度。',
                        '「ばかり」是只有。'
                    ]
                }
            }
        ]
    },

    // ============== ばいい ==============
    'n4_ba_ii': {
        id: 'n4_ba_ii',
        pattern: 'ばいい',
        connection: '動詞ば形 + いい',
        translation: '...就好了; 只要...就行',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '建議或期望',
                description: '表示只要做某事就可以，給予建議。',
                examples: [
                    { japanese: '分{わ}からなければ、聞{き}けばいい。', chinese: '不懂的話問就好了。' },
                    { japanese: '疲{つか}れたら、休{やす}めばいい。', chinese: '累了休息就好。' }
                ]
            },
            {
                usageId: 2,
                title: '期望或願望',
                description: '表示希望某事發生。',
                examples: [
                    { japanese: '明日{あした}、晴{は}れればいいな。', chinese: '明天放晴就好了。' },
                    { japanese: '早{はや}く春{はる}が来{く}ればいい。', chinese: '春天快點來就好了。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_ba_ii_1',
                sentence: '道{みち}が分{わ}からなければ、地図{ちず}を見{み}（　）。',
                options: ['ればいい', 'たらいい', 'といい', 'ならいい'],
                correctIndex: 0,
                explanation: '不知道路的話看地圖就好。'
            },
            {
                id: 'n4_ba_ii_2',
                sentence: '暑{あつ}ければ、エアコンをつけ（　）。',
                options: ['ればいい', 'たらいい', 'といい', 'ならいい'],
                correctIndex: 0,
                explanation: '熱的話開冷氣就好。'
            },
            {
                id: 'n4_ba_ii_3',
                sentence: 'お金{かね}がなければ、借{か}り（　）。',
                options: ['ればいい', 'たらいい', 'といい', 'ならいい'],
                correctIndex: 0,
                explanation: {
                    correct: '沒錢的話借就好。',
                    wrong: [
                        '「たらいい」也可以。',
                        '「といい」語感不同。',
                        '「ならいい」條件不同。'
                    ]
                }
            },
            {
                id: 'n4_ba_ii_4',
                sentence: '「どうしたらいいですか。」\n「先生{せんせい}に相談{そうだん}す（　）よ。」',
                options: ['ればいい', 'たらいい', 'といい', 'ならいい'],
                correctIndex: 0,
                explanation: '對話情境。和老師商量就好。'
            },
            {
                id: 'n4_ba_ii_5',
                sentence: '明日{あした}の試験{しけん}、うまくい（　）な。',
                options: ['けばいい', 'ったらいい', 'くといい', 'くならいい'],
                correctIndex: 0,
                explanation: {
                    correct: '希望明天的考試順利。',
                    wrong: [
                        '「ったらいい」也可以。',
                        '「くといい」也可以。',
                        '「くならいい」接續不對。'
                    ]
                }
            }
        ]
    },

    // ============== たらいい ==============
    'n4_tara_ii': {
        id: 'n4_tara_ii',
        pattern: 'たらいい',
        connection: '動詞た形 + らいい',
        translation: '...就好了; 只要...就行',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '建議',
                description: '用於給予建議或指導。比「ばいい」更口語化。',
                examples: [
                    { japanese: '困{こま}ったら、私{わたし}に言{い}ったらいい。', chinese: '有困難的話跟我說就好。' },
                    { japanese: '時間{じかん}があったら、来{き}たらいい。', chinese: '有時間的話來就好。' }
                ]
            },
            {
                usageId: 2,
                title: '詢問建議',
                description: '用於詢問該怎麼做。',
                examples: [
                    { japanese: 'どうしたらいいですか。', chinese: '該怎麼辦才好？' },
                    { japanese: '何{なに}を買{か}ったらいいですか。', chinese: '該買什麼好？' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_tara_ii_1',
                sentence: '電車{でんしゃ}に乗{の}り遅{おく}れたら、次{つぎ}のに乗{の}っ（　）。',
                options: ['たらいい', 'ればいい', 'といい', 'ならいい'],
                correctIndex: 0,
                explanation: '沒趕上電車的話搭下一班就好。'
            },
            {
                id: 'n4_tara_ii_2',
                sentence: 'どこで買{か}っ（　）ですか。',
                options: ['たらいい', 'ればいい', 'といい', 'ならいい'],
                correctIndex: 0,
                explanation: '在哪裡買好呢？'
            },
            {
                id: 'n4_tara_ii_3',
                sentence: '誰{だれ}に聞{き}い（　）ですか。',
                options: ['たらいい', 'ればいい', 'といい', 'ならいい'],
                correctIndex: 0,
                explanation: {
                    correct: '該問誰好呢？',
                    wrong: [
                        '「ければいい」也可以。',
                        '「といい」語感不同。',
                        '「ならいい」條件不同。'
                    ]
                }
            },
            {
                id: 'n4_tara_ii_4',
                sentence: '「どこに泊{と}まったらいいですか。」\n「駅{えき}の近{ちか}くのホテルに泊{と}まっ（　）よ。」',
                options: ['たらいい', 'ればいい', 'といい', 'ならいい'],
                correctIndex: 0,
                explanation: '對話情境。住車站附近的飯店就好。'
            },
            {
                id: 'n4_tara_ii_5',
                sentence: 'いつ出発{しゅっぱつ}し（　）ですか。',
                options: ['たらいい', 'ればいい', 'といい', 'ならいい'],
                correctIndex: 0,
                explanation: {
                    correct: '什麼時候出發好呢？',
                    wrong: [
                        '「ればいい」也可以。',
                        '「といい」語感不同。',
                        '「ならいい」條件不同。'
                    ]
                }
            }
        ]
    },

    // ============== はずがない ==============
    'n4_hazu_ga_nai_full': {
        id: 'n4_hazu_ga_nai_full',
        pattern: 'はずがない（完整用法）',
        connection: '動詞普通形 / い形 / な形-な / 名詞-の + はずがない',
        translation: '不可能...; 不應該...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '強烈否定推測',
                description: '根據理由進行強烈的否定推測。',
                examples: [
                    { japanese: '彼{かれ}がそんなことをするはずがない。', chinese: '他不可能做那種事。' },
                    { japanese: 'こんな簡単{かんたん}な問題{もんだい}が分{わ}からないはずがない。', chinese: '這麼簡單的問題不可能不懂。' },
                    { japanese: '約束{やくそく}を忘{わす}れるはずがない。', chinese: '不可能忘記約定。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_hazu_ga_nai_full_1',
                sentence: '彼{かれ}が嘘{うそ}をつく（　）。',
                options: ['はずがない', 'はずだ', 'わけがない', 'わけだ'],
                correctIndex: 0,
                explanation: '他不可能說謊。'
            },
            {
                id: 'n4_hazu_ga_nai_full_2',
                sentence: 'あの人{ひと}が犯人{はんにん}の（　）。',
                options: ['はずがない', 'はずだ', 'わけがない', 'わけだ'],
                correctIndex: 0,
                explanation: '那個人不可能是犯人。'
            },
            {
                id: 'n4_hazu_ga_nai_full_3',
                sentence: '彼女{かのじょ}が知{し}らない（　）。',
                options: ['はずがない', 'はずだ', 'わけがない', 'わけだ'],
                correctIndex: 0,
                explanation: {
                    correct: '她不可能不知道。',
                    wrong: [
                        '「はずだ」是應該。',
                        '「わけがない」也可以。',
                        '「わけだ」是道理。'
                    ]
                }
            },
            {
                id: 'n4_hazu_ga_nai_full_4',
                sentence: '「彼{かれ}、本当{ほんとう}に来{く}るかな。」\n「約束{やくそく}したんだから、来{こ}ない（　）よ。」',
                options: ['はずがない', 'はずだ', 'わけがない', 'わけだ'],
                correctIndex: 0,
                explanation: '對話情境。既然約好了不可能不來。'
            },
            {
                id: 'n4_hazu_ga_nai_full_5',
                sentence: 'こんなに勉強{べんきょう}したのに、落{お}ちる（　）。',
                options: ['はずがない', 'はずだ', 'わけがない', 'わけだ'],
                correctIndex: 0,
                explanation: {
                    correct: '讀了這麼多不可能落榜。',
                    wrong: [
                        '「はずだ」是應該。',
                        '「わけがない」也可以。',
                        '「わけだ」是道理。'
                    ]
                }
            }
        ]
    },

    // ============== わけだ ==============
    'n4_wake_da': {
        id: 'n4_wake_da',
        pattern: 'わけだ',
        connection: '動詞普通形 / い形 / な形-な / 名詞-の + わけだ',
        translation: '難怪...; 也就是說...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '表示理解或結論',
                description: '表示根據前文得出合理的結論或理解。',
                examples: [
                    { japanese: '彼{かれ}は日本{にほん}に10年{ねん}住{す}んでいた。日本語{にほんご}が上手{じょうず}なわけだ。', chinese: '他在日本住了十年。難怪日語這麼好。' },
                    { japanese: '風邪{かぜ}を引{ひ}いている。だから元気{げんき}がないわけだ。', chinese: '他感冒了。難怪沒精神。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_wake_da_1',
                sentence: '彼{かれ}は毎日{まいにち}練習{れんしゅう}している。上手{じょうず}な（　）。',
                options: ['わけだ', 'はずだ', 'ようだ', 'そうだ'],
                correctIndex: 0,
                explanation: '他每天練習。難怪這麼厲害。'
            },
            {
                id: 'n4_wake_da_2',
                sentence: '朝{あさ}から何{なに}も食{た}べていない。お腹{なか}が空{す}いている（　）。',
                options: ['わけだ', 'はずだ', 'ようだ', 'そうだ'],
                correctIndex: 0,
                explanation: '從早上就沒吃東西。難怪餓了。'
            },
            {
                id: 'n4_wake_da_3',
                sentence: '彼女{かのじょ}は料理{りょうり}学校{がっこう}に通{かよ}っていた。料理{りょうり}が上手{じょうず}な（　）。',
                options: ['わけだ', 'はずだ', 'ようだ', 'そうだ'],
                correctIndex: 0,
                explanation: {
                    correct: '她上過烹飪學校。難怪做菜好吃。',
                    wrong: [
                        '「はずだ」是應該。',
                        '「ようだ」是好像。',
                        '「そうだ」是聽說或看起來。'
                    ]
                }
            },
            {
                id: 'n4_wake_da_4',
                sentence: '「彼{かれ}、日本語{にほんご}ペラペラだね。」\n「日本{にほん}に5年{ねん}住{す}んでいたんだって。上手{じょうず}な（　）。」',
                options: ['わけだ', 'はずだ', 'ようだ', 'そうだ'],
                correctIndex: 0,
                explanation: '對話情境。住過日本五年。難怪。'
            },
            {
                id: 'n4_wake_da_5',
                sentence: '昨日{きのう}徹夜{てつや}した。眠{ねむ}い（　）。',
                options: ['わけだ', 'はずだ', 'ようだ', 'そうだ'],
                correctIndex: 0,
                explanation: {
                    correct: '昨天熬夜了。難怪困。',
                    wrong: [
                        '「はずだ」是應該。',
                        '「ようだ」是好像。',
                        '「そうだ」是聽說或看起來。'
                    ]
                }
            }
        ]
    },

    // ============== わけがない ==============
    'n4_wake_ga_nai': {
        id: 'n4_wake_ga_nai',
        pattern: 'わけがない',
        connection: '動詞普通形 / い形 / な形-な / 名詞-の + わけがない',
        translation: '不可能...; 沒有道理...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '強烈否定',
                description: '表示從道理上來說不可能，比「はずがない」更強調主觀判斷。',
                examples: [
                    { japanese: 'そんな話{はなし}が本当{ほんとう}のわけがない。', chinese: '那種話不可能是真的。' },
                    { japanese: '彼{かれ}がそんなことを知{し}っているわけがない。', chinese: '他不可能知道那種事。' },
                    { japanese: '1日{にち}で終{お}わるわけがない。', chinese: '不可能一天就做完。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_wake_ga_nai_1',
                sentence: '彼{かれ}にそんなことができる（　）。',
                options: ['わけがない', 'わけだ', 'はずがない', 'はずだ'],
                correctIndex: 0,
                explanation: '他不可能做得到那種事。'
            },
            {
                id: 'n4_wake_ga_nai_2',
                sentence: 'こんな難{むずか}しい問題{もんだい}が解{と}ける（　）。',
                options: ['わけがない', 'わけだ', 'はずがない', 'はずだ'],
                correctIndex: 0,
                explanation: '這麼難的問題不可能解得出來。'
            },
            {
                id: 'n4_wake_ga_nai_3',
                sentence: '彼女{かのじょ}が私{わたし}のことを好{す}きな（　）。',
                options: ['わけがない', 'わけだ', 'はずがない', 'はずだ'],
                correctIndex: 0,
                explanation: {
                    correct: '她不可能喜歡我。',
                    wrong: [
                        '「わけだ」是難怪。',
                        '「はずがない」也可以。',
                        '「はずだ」是應該。'
                    ]
                }
            },
            {
                id: 'n4_wake_ga_nai_4',
                sentence: '「彼{かれ}、来{く}るかな。」\n「約束{やくそく}を破{やぶ}る（　）。」',
                options: ['わけがない', 'わけだ', 'はずがない', 'はずだ'],
                correctIndex: 0,
                explanation: '對話情境。他不可能違約。'
            },
            {
                id: 'n4_wake_ga_nai_5',
                sentence: 'お金{かね}がないのに、旅行{りょこう}に行{い}ける（　）。',
                options: ['わけがない', 'わけだ', 'はずがない', 'はずだ'],
                correctIndex: 0,
                explanation: {
                    correct: '沒錢不可能去旅行。',
                    wrong: [
                        '「わけだ」是難怪。',
                        '「はずがない」也可以。',
                        '「はずだ」是應該。'
                    ]
                }
            }
        ]
    },

    // ============== わけではない ==============
    'n4_wake_dewa_nai': {
        id: 'n4_wake_dewa_nai',
        pattern: 'わけではない',
        connection: '動詞普通形 / い形 / な形-な / 名詞-な + わけではない',
        translation: '並不是...; 並非...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '部分否定',
                description: '表示並不完全是那樣，進行部分否定或修正。',
                examples: [
                    { japanese: '嫌{きら}いなわけではないが、苦手{にがて}だ。', chinese: '並不是討厭，只是不擅長。' },
                    { japanese: '忙{いそが}しくないわけではない。', chinese: '並不是不忙。' },
                    { japanese: '行{い}きたくないわけではないが、時間{じかん}がない。', chinese: '並不是不想去，只是沒時間。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_wake_dewa_nai_1',
                sentence: '日本{にほん}に行{い}きたくない（　）が、お金{かね}がない。',
                options: ['わけではない', 'わけがない', 'はずではない', 'はずがない'],
                correctIndex: 0,
                explanation: '並不是不想去日本，只是沒錢。'
            },
            {
                id: 'n4_wake_dewa_nai_2',
                sentence: '彼{かれ}のことが嫌{きら}いな（　）。',
                options: ['わけではない', 'わけがない', 'はずではない', 'はずがない'],
                correctIndex: 0,
                explanation: '並不是討厭他。'
            },
            {
                id: 'n4_wake_dewa_nai_3',
                sentence: '全員{ぜんいん}が賛成{さんせい}している（　）。',
                options: ['わけではない', 'わけがない', 'はずではない', 'はずがない'],
                correctIndex: 0,
                explanation: {
                    correct: '並不是全員都贊成。',
                    wrong: [
                        '「わけがない」是不可能。',
                        '「はずではない」不常用。',
                        '「はずがない」是不應該。'
                    ]
                }
            },
            {
                id: 'n4_wake_dewa_nai_4',
                sentence: '「食{た}べないの？」\n「お腹{なか}が空{す}いていない（　）けど、今{いま}は食{た}べたくないんだ。」',
                options: ['わけではない', 'わけがない', 'はずではない', 'はずがない'],
                correctIndex: 0,
                explanation: '對話情境。不是不餓，只是不想吃。'
            },
            {
                id: 'n4_wake_dewa_nai_5',
                sentence: '暇{ひま}な（　）が、手伝{てつだ}うよ。',
                options: ['わけではない', 'わけがない', 'はずではない', 'はずがない'],
                correctIndex: 0,
                explanation: {
                    correct: '不是很閒，但我來幫忙。',
                    wrong: [
                        '「わけがない」是不可能。',
                        '「はずではない」不常用。',
                        '「はずがない」是不應該。'
                    ]
                }
            }
        ]
    },

    // ============================================
    // N4 文法 - 第四批 (93-105)
    // ============================================

    'n4_noni_contrast': {
        id: 'n4_noni_contrast',
        pattern: 'のに（逆接）',
        connection: '動詞普通形 + のに\nい形容詞 + のに\nな形容詞 + な + のに\n名詞 + な + のに',
        translation: '明明...卻...; 雖然...但是...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '表示意外、不滿或遺憾的逆接',
                description: '表示前後兩件事之間存在矛盾或意外的關係，常帶有說話者的不滿、遺憾、惋惜等情緒。',
                examples: [
                    {
                        japanese: '約束{やくそく}したのに、来{こ}なかった。',
                        chinese: '明明約好了，卻沒來。'
                    },
                    {
                        japanese: '高{たか}いのに、おいしくない。',
                        chinese: '明明很貴，卻不好吃。'
                    },
                    {
                        japanese: '彼{かれ}は病気{びょうき}なのに、働{はたら}いている。',
                        chinese: '他明明生病了，卻還在工作。'
                    }
                ]
            }
        ],
        analysis: {
            title: '「のに」與「けど/が」的比較',
            description: '兩者都表示逆接，但語氣不同。',
            points: [
                {
                    rule: '「のに」帶有情感（不滿、遺憾、惋惜）。',
                    examples: [{ japanese: 'せっかく作{つく}ったのに、食{た}べてくれなかった。', chinese: '特地做了，卻不吃（不滿）。' }]
                },
                {
                    rule: '「けど/が」是客觀陳述對比。',
                    examples: [{ japanese: '作{つく}ったけど、食{た}べなかった。', chinese: '做了，但沒吃（客觀）。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_noni_contrast_1',
                sentence: '一生懸命{いっしょうけんめい}勉強{べんきょう}した（　）、不合格{ふごうかく}だった。',
                options: ['のに', 'ので', 'から', 'けど'],
                correctIndex: 0,
                explanation: '表示不滿、遺憾。'
            },
            {
                id: 'n4_noni_contrast_2',
                sentence: '薬{くすり}を飲{の}んだ（　）、熱{ねつ}が下{さ}がらない。',
                options: ['のに', 'ので', 'から', 'ために'],
                correctIndex: 0,
                explanation: '吃了藥，卻沒退燒（意外）。'
            },
            {
                id: 'n4_noni_contrast_3',
                sentence: '彼{かれ}は日本人{にほんじん}（　）、日本語{にほんご}が下手{へた}だ。',
                options: ['なのに', 'のに', 'だのに', 'であるのに'],
                correctIndex: 0,
                explanation: {
                    correct: '名詞後接「なのに」。',
                    wrong: [
                        '「のに」前面需要「な」。',
                        '「だのに」不自然。',
                        '「であるのに」過於書面。'
                    ]
                }
            },
            {
                id: 'n4_noni_contrast_4',
                sentence: '「彼女{かのじょ}、来{こ}なかったね。」\n「約束{やくそく}した（　）ね。残念{ざんねん}だ。」',
                options: ['のに', 'ので', 'から', 'けど'],
                correctIndex: 0,
                explanation: '對話情境。帶有遺憾。'
            },
            {
                id: 'n4_noni_contrast_5',
                sentence: 'せっかく買{か}った（　）、使{つか}わなかった。',
                options: ['のに', 'ので', 'から', 'けど'],
                correctIndex: 0,
                explanation: {
                    correct: '「せっかく...のに」是常見搭配，表示惋惜。',
                    wrong: [
                        '「ので」表示原因。',
                        '「から」表示原因。',
                        '「けど」較客觀，不帶遺憾。'
                    ]
                }
            }
        ]
    },

    'n4_temo_ii': {
        id: 'n4_temo_ii',
        pattern: 'てもいい',
        connection: '動詞て形 + もいい',
        translation: '可以...; ...也行',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '表示許可',
                description: '表示允許做某事，或請求許可。',
                examples: [
                    {
                        japanese: 'ここで写真{しゃしん}を撮{と}ってもいいですか。',
                        chinese: '可以在這裡拍照嗎？'
                    },
                    {
                        japanese: '窓{まど}を開{あ}けてもいいですよ。',
                        chinese: '可以開窗喔。'
                    },
                    {
                        japanese: '明日{あした}来{こ}なくてもいいです。',
                        chinese: '明天不來也可以。'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_temo_ii_1',
                sentence: 'このペンを使{つか}っ（　）いいですか。',
                options: ['ても', 'たら', 'ては', 'ても'],
                correctIndex: 0,
                explanation: '請求許可使用。'
            },
            {
                id: 'n4_temo_ii_2',
                sentence: '帰{かえ}っ（　）いいですよ。',
                options: ['ても', 'たら', 'ては', 'て'],
                correctIndex: 0,
                explanation: '允許回去。'
            },
            {
                id: 'n4_temo_ii_3',
                sentence: '明日{あした}、休{やす}ん（　）いいですか。',
                options: ['でも', 'ても', 'だも', 'ても'],
                correctIndex: 0,
                explanation: {
                    correct: '「休む」的て形是「休んで」，所以是「休んでもいい」。',
                    wrong: [
                        '選項重複。',
                        '「だも」不存在。',
                        '選項重複。'
                    ]
                }
            },
            {
                id: 'n4_temo_ii_4',
                sentence: '「ここに座{すわ}ってもいいですか。」\n「はい、どうぞ（　）。」',
                options: ['座ってください', '座ってもいいです', '座ってはいけません', '座らないでください'],
                correctIndex: 0,
                explanation: '對話情境。禮貌地表示許可。'
            },
            {
                id: 'n4_temo_ii_5',
                sentence: '食{た}べ（　）いいですか。',
                options: ['ても', 'ては', 'たら', 'て'],
                correctIndex: 0,
                explanation: {
                    correct: '「てもいい」表示許可。',
                    wrong: [
                        '「てはいけない」表示禁止。',
                        '「たら」表示條件。',
                        '「て」單獨不表許可。'
                    ]
                }
            }
        ]
    },

    'n4_tewa_ikenai': {
        id: 'n4_tewa_ikenai',
        pattern: 'てはいけない',
        connection: '動詞て形 + はいけない',
        translation: '不可以...; 不行...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '表示禁止',
                description: '表示禁止做某事，語氣較強。',
                examples: [
                    {
                        japanese: 'ここで煙草{たばこ}を吸{す}ってはいけません。',
                        chinese: '不可以在這裡抽菸。'
                    },
                    {
                        japanese: '授業中{じゅぎょうちゅう}、携帯{けいたい}を使{つか}ってはいけない。',
                        chinese: '上課中不可以用手機。'
                    },
                    {
                        japanese: '嘘{うそ}をついてはいけません。',
                        chinese: '不可以說謊。'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_tewa_ikenai_1',
                sentence: '図書館{としょかん}で大{おお}きな声{こえ}を出{だ}し（　）いけません。',
                options: ['ては', 'ても', 'たら', 'て'],
                correctIndex: 0,
                explanation: '禁止在圖書館大聲說話。'
            },
            {
                id: 'n4_tewa_ikenai_2',
                sentence: 'ここで泳{およ}い（　）いけない。',
                options: ['では', 'ては', 'でも', 'ても'],
                correctIndex: 0,
                explanation: '「泳ぐ」的て形是「泳いで」。'
            },
            {
                id: 'n4_tewa_ikenai_3',
                sentence: '写真{しゃしん}を撮{と}っ（　）いけません。',
                options: ['ては', 'ても', 'たら', 'て'],
                correctIndex: 0,
                explanation: {
                    correct: '「てはいけない」表示禁止。',
                    wrong: [
                        '「てもいい」表示許可。',
                        '「たら」表示條件。',
                        '「て」單獨不表禁止。'
                    ]
                }
            },
            {
                id: 'n4_tewa_ikenai_4',
                sentence: '「ここで食{た}べてもいいですか。」\n「いいえ、ここで食{た}べ（　）いけません。」',
                options: ['ては', 'ても', 'たら', 'て'],
                correctIndex: 0,
                explanation: '對話情境。拒絕許可。'
            },
            {
                id: 'n4_tewa_ikenai_5',
                sentence: '遅刻{ちこく}し（　）いけません。',
                options: ['ては', 'ても', 'たら', 'て'],
                correctIndex: 0,
                explanation: {
                    correct: '不可以遲到。',
                    wrong: [
                        '「てもいい」是許可。',
                        '「たら」是條件。',
                        '「て」不表禁止。'
                    ]
                }
            }
        ]
    },

    'n4_nakereba_naranai': {
        id: 'n4_nakereba_naranai',
        pattern: 'なければならない',
        connection: '動詞ない形 → なければならない',
        translation: '必須...; 不得不...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '表示義務或必要',
                description: '表示必須做某事，有義務感。',
                examples: [
                    {
                        japanese: '明日{あした}は早{はや}く起{お}きなければならない。',
                        chinese: '明天必須早起。'
                    },
                    {
                        japanese: '宿題{しゅくだい}をしなければなりません。',
                        chinese: '必須做作業。'
                    },
                    {
                        japanese: '薬{くすり}を飲{の}まなければならない。',
                        chinese: '必須吃藥。'
                    }
                ]
            }
        ],
        analysis: {
            title: '義務表現的變化形',
            description: '「なければならない」有多種口語變形。',
            points: [
                {
                    rule: '「なければならない」→「なきゃならない」（口語）',
                    examples: [{ japanese: '行{い}かなきゃならない。', chinese: '必須去。' }]
                },
                {
                    rule: '「なければならない」→「なくてはならない」',
                    examples: [{ japanese: '食{た}べなくてはならない。', chinese: '必須吃。' }]
                },
                {
                    rule: '「なければならない」→「ないといけない」',
                    examples: [{ japanese: '勉強{べんきょう}しないといけない。', chinese: '必須學習。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n4_nakereba_naranai_1',
                sentence: '毎日{まいにち}運動{うんどう}し（　）ならない。',
                options: ['なければ', 'なくては', 'ないと', 'なきゃ'],
                correctIndex: 0,
                explanation: '必須每天運動。'
            },
            {
                id: 'n4_nakereba_naranai_2',
                sentence: '今日中{きょうじゅう}に終{お}わら（　）なりません。',
                options: ['なければ', 'なくては', 'なかったら', 'ないと'],
                correctIndex: 0,
                explanation: '必須今天內完成。'
            },
            {
                id: 'n4_nakereba_naranai_3',
                sentence: 'パスポートを持{も}っていか（　）ならない。',
                options: ['なければ', 'なくては', 'ないと', 'なくても'],
                correctIndex: 0,
                explanation: {
                    correct: '必須帶護照去。',
                    wrong: [
                        '「なくては」也可以，但題目選最標準的。',
                        '「ないと」較口語。',
                        '「なくてもいい」是不必。'
                    ]
                }
            },
            {
                id: 'n4_nakereba_naranai_4',
                sentence: '「今日{きょう}、会社{かいしゃ}に行{い}くの？」\n「うん、行{い}か（　）ならないんだ。」',
                options: ['なければ', 'なくては', 'ないと', 'なきゃ'],
                correctIndex: 0,
                explanation: '對話情境。'
            },
            {
                id: 'n4_nakereba_naranai_5',
                sentence: '明日{あした}は試験{しけん}だから、早{はや}く寝{ね}（　）ならない。',
                options: ['なければ', 'ても', 'ては', 'たら'],
                correctIndex: 0,
                explanation: {
                    correct: '因為明天考試，必須早睡。',
                    wrong: [
                        '「ても」表示讓步。',
                        '「ては」表示禁止。',
                        '「たら」表示條件。'
                    ]
                }
            }
        ]
    },

    'n4_nakutemo_ii': {
        id: 'n4_nakutemo_ii',
        pattern: 'なくてもいい',
        connection: '動詞ない形 → なくてもいい',
        translation: '不...也可以; 不必...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '表示不必要',
                description: '表示不做某事也可以，沒有義務。',
                examples: [
                    {
                        japanese: '明日{あした}は来{こ}なくてもいいです。',
                        chinese: '明天不來也可以。'
                    },
                    {
                        japanese: '無理{むり}に食{た}べなくてもいいよ。',
                        chinese: '不用勉強吃。'
                    },
                    {
                        japanese: '急{いそ}がなくてもいい。',
                        chinese: '不用急。'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_nakutemo_ii_1',
                sentence: '今日{きょう}は掃除{そうじ}し（　）いいです。',
                options: ['なくても', 'なければ', 'ないと', 'なくては'],
                correctIndex: 0,
                explanation: '今天不打掃也可以。'
            },
            {
                id: 'n4_nakutemo_ii_2',
                sentence: '全部{ぜんぶ}食{た}べ（　）いいですよ。',
                options: ['なくても', 'ても', 'ては', 'たら'],
                correctIndex: 0,
                explanation: '不用全部吃完。'
            },
            {
                id: 'n4_nakutemo_ii_3',
                sentence: '敬語{けいご}を使{つか}わ（　）いい。',
                options: ['なくても', 'なければ', 'なくては', 'ないと'],
                correctIndex: 0,
                explanation: {
                    correct: '不用敬語也可以。',
                    wrong: [
                        '「なければならない」是必須。',
                        '「なくてはならない」是必須。',
                        '「ないといけない」是必須。'
                    ]
                }
            },
            {
                id: 'n4_nakutemo_ii_4',
                sentence: '「手伝{てつだ}いましょうか。」\n「いいえ、手伝{てつだ}わ（　）いいですよ。」',
                options: ['なくても', 'なければ', 'ても', 'ては'],
                correctIndex: 0,
                explanation: '對話情境。婉拒幫忙。'
            },
            {
                id: 'n4_nakutemo_ii_5',
                sentence: '心配{しんぱい}し（　）いいですよ。',
                options: ['なくても', 'ても', 'ては', 'たら'],
                correctIndex: 0,
                explanation: {
                    correct: '不用擔心。',
                    wrong: [
                        '「てもいい」是可以做。',
                        '「てはいけない」是禁止。',
                        '「たら」是條件。'
                    ]
                }
            }
        ]
    },

    'n4_shi': {
        id: 'n4_shi',
        pattern: 'し',
        connection: '動詞普通形 + し\nい形容詞 + し\nな形容詞 + だ + し\n名詞 + だ + し',
        translation: '又...又...; 而且...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '列舉多個理由或特徵',
                description: '用於並列多個理由或特點，暗示還有其他原因。',
                examples: [
                    {
                        japanese: 'この店{みせ}は安{やす}いし、おいしいし、最高{さいこう}だ。',
                        chinese: '這家店又便宜又好吃，最棒了。'
                    },
                    {
                        japanese: '今日{きょう}は暑{あつ}いし、疲{つか}れたし、帰{かえ}りたい。',
                        chinese: '今天又熱又累，想回家。'
                    },
                    {
                        japanese: '彼{かれ}は頭{あたま}がいいし、スポーツもできるし、人気{にんき}がある。',
                        chinese: '他又聰明又會運動，很受歡迎。'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_shi_1',
                sentence: 'この部屋{へや}は広{ひろ}い（　）、明{あか}るい（　）、いい部屋{へや}だ。',
                options: ['し...し', 'と...と', 'や...や', 'も...も'],
                correctIndex: 0,
                explanation: '列舉多個優點。'
            },
            {
                id: 'n4_shi_2',
                sentence: '時間{じかん}もない（　）、お金{かね}もない。',
                options: ['し', 'と', 'や', 'も'],
                correctIndex: 0,
                explanation: '列舉多個理由（沒時間，也沒錢）。'
            },
            {
                id: 'n4_shi_3',
                sentence: '彼女{かのじょ}は優{やさ}しいし、きれいだ（　）、人気{にんき}がある。',
                options: ['し', 'から', 'ので', 'て'],
                correctIndex: 0,
                explanation: {
                    correct: '「し」用於列舉並暗示還有其他原因。',
                    wrong: [
                        '「から」單純表示原因。',
                        '「ので」單純表示原因。',
                        '「て」表示並列動作。'
                    ]
                }
            },
            {
                id: 'n4_shi_4',
                sentence: '「なぜこの大学{だいがく}を選{えら}びましたか。」\n「有名{ゆうめい}だ（　）、近{ちか}いですから。」',
                options: ['し', 'と', 'や', 'も'],
                correctIndex: 0,
                explanation: '對話情境。列舉選擇的理由。'
            },
            {
                id: 'n4_shi_5',
                sentence: '雨{あめ}だ（　）、風{かぜ}も強{つよ}いし、出{で}かけたくない。',
                options: ['し', 'と', 'から', 'ので'],
                correctIndex: 0,
                explanation: {
                    correct: '名詞後接「だし」。',
                    wrong: [
                        '「と」不用於列舉理由。',
                        '「から」不能這樣並列。',
                        '「ので」不能這樣並列。'
                    ]
                }
            }
        ]
    },

    'n4_sore_ni': {
        id: 'n4_sore_ni',
        pattern: 'それに',
        connection: '文 + それに + 文',
        translation: '而且; 再說',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '追加補充說明',
                description: '用於追加同方向的信息，加強語氣。',
                examples: [
                    {
                        japanese: 'この料理{りょうり}はおいしい。それに、安{やす}い。',
                        chinese: '這道菜很好吃。而且很便宜。'
                    },
                    {
                        japanese: '彼{かれ}は優{やさ}しい。それに、頭{あたま}もいい。',
                        chinese: '他很溫柔。而且很聰明。'
                    },
                    {
                        japanese: '今日{きょう}は忙{いそが}しい。それに、疲{つか}れている。',
                        chinese: '今天很忙。而且很累。'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_sore_ni_1',
                sentence: 'この本{ほん}は面白{おもしろ}い。（　）、勉強{べんきょう}になる。',
                options: ['それに', 'でも', 'しかし', 'だから'],
                correctIndex: 0,
                explanation: '追加正面信息。'
            },
            {
                id: 'n4_sore_ni_2',
                sentence: '彼女{かのじょ}は歌{うた}がうまい。（　）、ダンスも上手{じょうず}だ。',
                options: ['それに', 'でも', 'しかし', 'だから'],
                correctIndex: 0,
                explanation: '追加同方向的優點。'
            },
            {
                id: 'n4_sore_ni_3',
                sentence: '駅{えき}から遠{とお}い。（　）、家賃{やちん}が高{たか}い。',
                options: ['それに', 'だから', 'しかし', 'でも'],
                correctIndex: 0,
                explanation: {
                    correct: '追加同方向（負面）的信息。',
                    wrong: [
                        '「だから」表示因果。',
                        '「しかし」表示轉折。',
                        '「でも」表示轉折。'
                    ]
                }
            },
            {
                id: 'n4_sore_ni_4',
                sentence: '「この映画{えいが}、どう？」\n「面白{おもしろ}いよ。（　）、音楽{おんがく}もいい。」',
                options: ['それに', 'でも', 'しかし', 'だから'],
                correctIndex: 0,
                explanation: '對話情境。追加推薦理由。'
            },
            {
                id: 'n4_sore_ni_5',
                sentence: '今日{きょう}は天気{てんき}が悪{わる}い。（　）、寒{さむ}い。',
                options: ['それに', 'だから', 'しかし', 'でも'],
                correctIndex: 0,
                explanation: {
                    correct: '追加同方向的信息（都是壞天氣的描述）。',
                    wrong: [
                        '「だから」是因果關係。',
                        '「しかし」是轉折。',
                        '「でも」是轉折。'
                    ]
                }
            }
        ]
    },

    'n4_soshite': {
        id: 'n4_soshite',
        pattern: 'そして',
        connection: '文 + そして + 文',
        translation: '然後; 於是',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '連接前後事項',
                description: '用於連接時間順序上的前後事項，或邏輯上的承接。',
                examples: [
                    {
                        japanese: '朝{あさ}ご飯{はん}を食{た}べた。そして、学校{がっこう}へ行{い}った。',
                        chinese: '吃了早餐。然後去了學校。'
                    },
                    {
                        japanese: '彼{かれ}は一生懸命{いっしょうけんめい}勉強{べんきょう}した。そして、合格{ごうかく}した。',
                        chinese: '他努力學習。然後合格了。'
                    },
                    {
                        japanese: '彼女{かのじょ}は泣{な}いた。そして、部屋{へや}を出{で}て行{い}った。',
                        chinese: '她哭了。然後離開了房間。'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_soshite_1',
                sentence: '買{か}い物{もの}をした。（　）、映画{えいが}を見{み}た。',
                options: ['そして', 'でも', 'しかし', 'だから'],
                correctIndex: 0,
                explanation: '時間順序的連接。'
            },
            {
                id: 'n4_soshite_2',
                sentence: '手{て}を洗{あら}った。（　）、ご飯{はん}を食{た}べた。',
                options: ['そして', 'でも', 'しかし', 'だから'],
                correctIndex: 0,
                explanation: '按時間順序連接動作。'
            },
            {
                id: 'n4_soshite_3',
                sentence: '卒業{そつぎょう}した。（　）、就職{しゅうしょく}した。',
                options: ['そして', 'でも', 'しかし', 'だから'],
                correctIndex: 0,
                explanation: {
                    correct: '按時間順序：畢業後就職。',
                    wrong: [
                        '「でも」表示轉折。',
                        '「しかし」表示轉折。',
                        '「だから」表示因果。'
                    ]
                }
            },
            {
                id: 'n4_soshite_4',
                sentence: '「昨日{きのう}、何{なに}をしましたか。」\n「友達{ともだち}と会{あ}いました。（　）、一緒{いっしょ}に晩{ばん}ご飯{はん}を食{た}べました。」',
                options: ['そして', 'でも', 'しかし', 'だから'],
                correctIndex: 0,
                explanation: '對話情境。敘述做事順序。'
            },
            {
                id: 'n4_soshite_5',
                sentence: '彼{かれ}は謝{あやま}った。（　）、許{ゆる}してもらえた。',
                options: ['そして', 'でも', 'しかし', 'だから'],
                correctIndex: 0,
                explanation: {
                    correct: '連接先後發生的事。',
                    wrong: [
                        '「でも」表示轉折。',
                        '「しかし」表示轉折。',
                        '「だから」強調因果。'
                    ]
                }
            }
        ]
    },

    'n4_sorede': {
        id: 'n4_sorede',
        pattern: 'それで',
        connection: '文 + それで + 文',
        translation: '所以; 因此',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '表示因果關係',
                description: '用於連接原因和結果，強調因果關係。',
                examples: [
                    {
                        japanese: '電車{でんしゃ}が止{と}まった。それで、遅刻{ちこく}した。',
                        chinese: '電車停了。所以遲到了。'
                    },
                    {
                        japanese: '彼{かれ}は病気{びょうき}だった。それで、学校{がっこう}を休{やす}んだ。',
                        chinese: '他生病了。所以請假了。'
                    },
                    {
                        japanese: '雨{あめ}が降{ふ}っている。それで、傘{かさ}を持{も}っていく。',
                        chinese: '在下雨。所以帶傘去。'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_sorede_1',
                sentence: '財布{さいふ}を忘{わす}れた。（　）、何{なに}も買{か}えなかった。',
                options: ['それで', 'でも', 'しかし', 'そして'],
                correctIndex: 0,
                explanation: '因果關係：忘帶錢包所以買不了東西。'
            },
            {
                id: 'n4_sorede_2',
                sentence: '約束{やくそく}があった。（　）、早{はや}く帰{かえ}った。',
                options: ['それで', 'でも', 'しかし', 'そして'],
                correctIndex: 0,
                explanation: '因為有約所以早回去。'
            },
            {
                id: 'n4_sorede_3',
                sentence: '道{みち}が分{わ}からなかった。（　）、人{ひと}に聞{き}いた。',
                options: ['それで', 'でも', 'しかし', 'そして'],
                correctIndex: 0,
                explanation: {
                    correct: '因為不知道路，所以問人。',
                    wrong: [
                        '「でも」表示轉折。',
                        '「しかし」表示轉折。',
                        '「そして」單純連接順序。'
                    ]
                }
            },
            {
                id: 'n4_sorede_4',
                sentence: '「昨日{きのう}、どうして休{やす}んだの？」\n「風邪{かぜ}をひいたんだ。（　）、家{いえ}で寝{ね}ていた。」',
                options: ['それで', 'でも', 'しかし', 'そして'],
                correctIndex: 0,
                explanation: '對話情境。解釋因果。'
            },
            {
                id: 'n4_sorede_5',
                sentence: '仕事{しごと}が忙{いそが}しかった。（　）、旅行{りょこう}をキャンセルした。',
                options: ['それで', 'でも', 'しかし', 'そして'],
                correctIndex: 0,
                explanation: {
                    correct: '因為工作忙，所以取消旅行。',
                    wrong: [
                        '「でも」表示轉折。',
                        '「しかし」表示轉折。',
                        '「そして」不強調因果。'
                    ]
                }
            }
        ]
    },

    'n4_demo_conj': {
        id: 'n4_demo_conj',
        pattern: 'でも（接續）',
        connection: '文 + でも + 文',
        translation: '但是; 可是',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '表示轉折',
                description: '用於連接兩個相反或對比的內容，語氣較輕。',
                examples: [
                    {
                        japanese: '高{たか}い。でも、買{か}いたい。',
                        chinese: '很貴。但是想買。'
                    },
                    {
                        japanese: '疲{つか}れた。でも、楽{たの}しかった。',
                        chinese: '累了。但是很開心。'
                    },
                    {
                        japanese: '日本語{にほんご}は難{むずか}しい。でも、面白{おもしろ}い。',
                        chinese: '日語很難。但是很有趣。'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_demo_conj_1',
                sentence: '彼{かれ}は厳{きび}しい。（　）、優{やさ}しい。',
                options: ['でも', 'だから', 'それで', 'そして'],
                correctIndex: 0,
                explanation: '轉折：嚴厲但溫柔。'
            },
            {
                id: 'n4_demo_conj_2',
                sentence: '狭{せま}い。（　）、便利{べんり}だ。',
                options: ['でも', 'だから', 'それで', 'そして'],
                correctIndex: 0,
                explanation: '轉折：狹小但方便。'
            },
            {
                id: 'n4_demo_conj_3',
                sentence: '失敗{しっぱい}した。（　）、諦{あきら}めない。',
                options: ['でも', 'だから', 'それで', 'そして'],
                correctIndex: 0,
                explanation: {
                    correct: '轉折：失敗了但不放棄。',
                    wrong: [
                        '「だから」表示因果。',
                        '「それで」表示因果。',
                        '「そして」表示順序。'
                    ]
                }
            },
            {
                id: 'n4_demo_conj_4',
                sentence: '「日本語{にほんご}、難{むずか}しくない？」\n「うん、難{むずか}しい。（　）、楽{たの}しいよ。」',
                options: ['でも', 'だから', 'それで', 'そして'],
                correctIndex: 0,
                explanation: '對話情境。承認難但表示有趣。'
            },
            {
                id: 'n4_demo_conj_5',
                sentence: '雨{あめ}だった。（　）、出{で}かけた。',
                options: ['でも', 'だから', 'それで', 'そして'],
                correctIndex: 0,
                explanation: {
                    correct: '轉折：下雨但還是出門了。',
                    wrong: [
                        '「だから」是因果。',
                        '「それで」是因果。',
                        '「そして」是順序。'
                    ]
                }
            }
        ]
    },

    'n4_shikashi': {
        id: 'n4_shikashi',
        pattern: 'しかし',
        connection: '文 + しかし + 文',
        translation: '但是; 然而',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '正式的轉折表達',
                description: '比「でも」更正式，多用於書面或正式場合。',
                examples: [
                    {
                        japanese: '努力{どりょく}した。しかし、失敗{しっぱい}した。',
                        chinese: '努力了。然而失敗了。'
                    },
                    {
                        japanese: '経済{けいざい}は回復{かいふく}している。しかし、問題{もんだい}も多{おお}い。',
                        chinese: '經濟在恢復。然而問題也很多。'
                    },
                    {
                        japanese: '彼{かれ}の意見{いけん}は正{ただ}しい。しかし、賛成{さんせい}できない。',
                        chinese: '他的意見是對的。然而不能贊成。'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_shikashi_1',
                sentence: '説明{せつめい}を聞{き}いた。（　）、分{わ}からなかった。',
                options: ['しかし', 'だから', 'それで', 'そして'],
                correctIndex: 0,
                explanation: '轉折：聽了說明但不懂。'
            },
            {
                id: 'n4_shikashi_2',
                sentence: '彼{かれ}は若{わか}い。（　）、経験{けいけん}がある。',
                options: ['しかし', 'だから', 'それで', 'そして'],
                correctIndex: 0,
                explanation: '轉折：年輕但有經驗。'
            },
            {
                id: 'n4_shikashi_3',
                sentence: '計画{けいかく}は完璧{かんぺき}だった。（　）、失敗{しっぱい}した。',
                options: ['しかし', 'だから', 'それで', 'そして'],
                correctIndex: 0,
                explanation: {
                    correct: '轉折：計劃完美但失敗了。',
                    wrong: [
                        '「だから」表示因果。',
                        '「それで」表示因果。',
                        '「そして」表示順序。'
                    ]
                }
            },
            {
                id: 'n4_shikashi_4',
                sentence: '価格{かかく}は高{たか}い。（　）、品質{ひんしつ}は良{よ}い。',
                options: ['しかし', 'だから', 'それで', 'そして'],
                correctIndex: 0,
                explanation: '轉折：價格高但品質好。'
            },
            {
                id: 'n4_shikashi_5',
                sentence: '彼女{かのじょ}は優秀{ゆうしゅう}だ。（　）、謙虚{けんきょ}だ。',
                options: ['しかし', 'だから', 'それで', 'それに'],
                correctIndex: 0,
                explanation: {
                    correct: '轉折：優秀但謙虛。',
                    wrong: [
                        '「だから」是因果。',
                        '「それで」是因果。',
                        '「それに」是追加。'
                    ]
                }
            }
        ]
    },

    'n4_tokoro_da': {
        id: 'n4_tokoro_da',
        pattern: 'ところだ',
        connection: '動詞辞書形 + ところだ\n動詞ている + ところだ\n動詞た形 + ところだ',
        translation: '正要...; 正在...; 剛剛...',
        level: 'N4',
        explanation: [
            {
                usageId: 1,
                title: '即將做某事',
                description: '「動詞辞書形 + ところだ」表示正要開始做某事。',
                examples: [
                    {
                        japanese: '今{いま}から出{で}かけるところです。',
                        chinese: '正要出門。'
                    },
                    {
                        japanese: 'ちょうど電話{でんわ}をかけるところだった。',
                        chinese: '正要打電話。'
                    }
                ]
            },
            {
                usageId: 2,
                title: '正在做某事',
                description: '「動詞ている + ところだ」表示正在進行中。',
                examples: [
                    {
                        japanese: '今{いま}、食{た}べているところです。',
                        chinese: '現在正在吃。'
                    },
                    {
                        japanese: '資料{しりょう}を作{つく}っているところです。',
                        chinese: '正在做資料。'
                    }
                ]
            },
            {
                usageId: 3,
                title: '剛剛完成某事',
                description: '「動詞た形 + ところだ」表示剛剛做完。',
                examples: [
                    {
                        japanese: '今{いま}、帰{かえ}ってきたところです。',
                        chinese: '剛剛回來。'
                    },
                    {
                        japanese: '電話{でんわ}を切{き}ったところだ。',
                        chinese: '剛掛完電話。'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n4_tokoro_da_1',
                sentence: '今{いま}から食{た}べる（　）です。',
                options: ['ところ', 'こと', 'もの', 'はず'],
                correctIndex: 0,
                explanation: '正要開始吃。'
            },
            {
                id: 'n4_tokoro_da_2',
                sentence: '今{いま}、宿題{しゅくだい}をしている（　）です。',
                options: ['ところ', 'こと', 'もの', 'はず'],
                correctIndex: 0,
                explanation: '正在做作業。'
            },
            {
                id: 'n4_tokoro_da_3',
                sentence: 'ちょうど終{お}わった（　）です。',
                options: ['ところ', 'こと', 'もの', 'はず'],
                correctIndex: 0,
                explanation: {
                    correct: '剛剛結束。',
                    wrong: [
                        '「こと」不用於表示時間點。',
                        '「もの」不用於表示時間點。',
                        '「はず」表示應該。'
                    ]
                }
            },
            {
                id: 'n4_tokoro_da_4',
                sentence: '「田中{たなか}さん、いますか。」\n「ちょうど出{で}かけた（　）ですよ。」',
                options: ['ところ', 'こと', 'もの', 'はず'],
                correctIndex: 0,
                explanation: '對話情境。剛出門。'
            },
            {
                id: 'n4_tokoro_da_5',
                sentence: '今{いま}、起{お}きた（　）だから、まだ眠{ねむ}い。',
                options: ['ところ', 'こと', 'もの', 'はず'],
                correctIndex: 0,
                explanation: {
                    correct: '剛起床所以還想睡。',
                    wrong: [
                        '「こと」不表示剛做完。',
                        '「もの」不表示剛做完。',
                        '「はず」表示推測。'
                    ]
                }
            }
        ]
    }
};
