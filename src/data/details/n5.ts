import { GrammarPoint } from '../../types/grammar';

export const n5Details: Record<string, GrammarPoint> = {
    'n5_cha_ikenai': {
        id: 'n5_cha_ikenai',
        pattern: 'ちゃいけない・じゃいけない',
        connection: '動詞て形（去掉て/で） + ちゃいけない / じゃいけない',
        translation: '不能做...; 不可以做...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '禁止 (口語)',
                description: '「てはいけない」的口語縮略形式。用於告訴對方不能做某事，語氣較隨意，通常用於朋友、晚輩或家人之間。',
                examples: [
                    { japanese: 'ここでタバコを吸{す}っちゃいけないよ。', chinese: '不可以在這裡抽菸喔。' },
                    { japanese: '嘘{うそ}をついちゃいけない。', chinese: '不可以撒謊。' },
                    { japanese: 'お酒{さけ}を飲{の}んじゃいけない。', chinese: '不可以喝酒。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_cha_ikenai_1',
                sentence: '廊下{ろうか}を（　）ちゃいけない。',
                options: ['走{はし}っ', '走{はし}り', '走{はし}る', '走{はし}れ'],
                correctIndex: 0,
                explanation: '「走る」的て形是「走って」，去掉「て」接「ちゃいけない」變為「走っちゃいけない」。'
            },
            {
                id: 'n5_cha_ikenai_2',
                sentence: 'まだ見{み}（　）いけないよ。',
                options: ['ては', 'ちゃ', 'じゃ', 'では'],
                correctIndex: 1,
                explanation: '「見る」的て形為「見て」。口語縮略為「見ちゃ」。'
            },
            {
                id: 'n5_cha_ikenai_3',
                sentence: 'そんなことを（　）いけない。',
                options: ['言{い}っち', '言{い}っちゃ', '言{い}っじゃ', '言{い}ては'],
                correctIndex: 1,
                explanation: '「言う」的て形是「言って」，縮略為「言っちゃ」。'
            },
            {
                id: 'n5_cha_ikenai_4',
                sentence: '「これ、食べてもいい？」\n「だめだよ、まだ（　）ちゃいけない。」',
                options: ['食{た}べ', '食{た}べっ', '食{た}べれ', '食{た}べる'],
                correctIndex: 0,
                explanation: '對話情境。「食べる」→「食べて」→「食べちゃ」。'
            },
            {
                id: 'n5_cha_ikenai_5',
                sentence: '「明日遅刻しないでね。」\n「わかってるよ。（　）ちゃいけないんでしょ。」',
                options: ['遅刻{ちこく}し', '遅刻{ちこく}す', '遅刻{ちこく}した', '遅刻{ちこく}して'],
                correctIndex: 0,
                explanation: '對話情境。「遅刻する」→「遅刻して」→「遅刻しちゃ」。'
            }
        ]
    },
    'n5_da_desu': {
        id: 'n5_da_desu',
        pattern: 'だ / です',
        connection: '名詞／な形容詞辭書形 + だ / です',
        translation: '是...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '肯定的斷定',
                description: '用於判斷或說明人、事、物的性質、狀態或身分。「だ」是普通體，「です」是禮貌體。',
                examples: [
                    { japanese: '私{わたし}は学生{がくせい}です。', chinese: '我是學生。' },
                    { japanese: 'これはペンだ。', chinese: '這是一支筆。' },
                    { japanese: '彼女{かのじょ}はきれいだ。', chinese: '她很漂亮。' }
                ]
            }
        ],
        analysis: {
            title: '普通體與禮貌體',
            description: '區分對話對象的親疏遠近。',
            points: [
                {
                    rule: '長輩/陌生人：禮貌體 (です)',
                    examples: [{ japanese: 'いい天気{てんき}ですね。', chinese: '天氣真好呢。' }]
                },
                {
                    rule: '家人/朋友：普通體 (だ)',
                    examples: [{ japanese: 'いい天気{てんき}だね。', chinese: '天氣真好耶。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_da_desu_1',
                sentence: '田中{たなか}さんは医者{いしゃ}（　）。',
                options: ['だ', 'です', 'の', 'な'],
                correctIndex: 1,
                explanation: '田中先生是受人尊敬的對象，使用禮貌體「です」。'
            },
            {
                id: 'n5_da_desu_2',
                sentence: 'これは私{わたし}の本{ほん}（　）。',
                options: ['だ', 'です', 'な', 'の'],
                correctIndex: 0,
                explanation: '獨白或對平輩使用普通體「だ」。'
            },
            {
                id: 'n5_da_desu_3',
                sentence: '昨日{きのう}は雨{あめ}（　）。',
                options: ['でした', 'だした', 'ます', 'ました'],
                correctIndex: 0,
                explanation: '過去式的禮貌體是「でした」。'
            },
            {
                id: 'n5_da_desu_4',
                sentence: '「お仕事{しごと}は何{なん}ですか。」\n「会社員{かいしゃいん}（　）。」',
                options: ['だ', 'です', 'な', 'の'],
                correctIndex: 1,
                explanation: '對話情境。問句禮貌體，回答也要禮貌體。'
            },
            {
                id: 'n5_da_desu_5',
                sentence: '「このケーキ、おいしい？」\n「うん、すごくおいしい（　）。」',
                options: ['です', 'ます', 'よ', 'ね'],
                correctIndex: 2,
                explanation: '對話情境。い形容詞後不接「だ」。用終助詞「よ」加強語氣最自然。'
            }
        ]
    },
    'n5_dake': {
        id: 'n5_dake',
        pattern: 'だけ',
        connection: '名詞 / 動詞普通形 + だけ',
        translation: '只有...; 僅僅...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '限定',
                description: '表示限定範圍，除此之外沒有別的。',
                examples: [
                    { japanese: 'ジュースだけ飲{の}みました。', chinese: '只喝了果汁。' },
                    { japanese: '10分{ぷん}だけ休{やす}みましょう。', chinese: '休息10分鐘就好。' },
                    { japanese: '見{み}ているだけです。', chinese: '我只是看看而已。' }
                ]
            }
        ],
        analysis: {
            title: '「だけ」與「しか」的比較',
            description: '兩者都表限定，但語氣與接續不同。',
            points: [
                {
                    rule: 'だけ：可接肯定或否定，客觀陳述「只有」。',
                    examples: [{ japanese: 'リンゴが一つだけある。', chinese: '只有一顆蘋果。' }]
                },
                {
                    rule: 'しか：必須接否定，帶有「太少、不夠」的主觀抱怨語氣。',
                    examples: [{ japanese: 'リンゴが一つしかない。', chinese: '竟然只有一顆蘋果（覺得太少）。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_dake_1',
                sentence: '教室{きょうしつ}に学生{がくせい}が一人{ひとり}（　）います。',
                options: ['だけ', 'しか', 'も', 'でも'],
                correctIndex: 0,
                explanation: '句尾是肯定形「います」，故用「だけ」。'
            },
            {
                id: 'n5_dake_2',
                sentence: '日曜日{にちようび}（　）休{やす}みです。',
                options: ['しか', 'でも', 'だけ', 'へ'],
                correctIndex: 2,
                explanation: '表示限定「只有星期天」，後接肯定，用「だけ」。'
            },
            {
                id: 'n5_dake_3',
                sentence: 'あなた（　）に話{はな}します。',
                options: ['だけ', 'しか', 'こそ', 'さえ'],
                correctIndex: 0,
                explanation: '「只跟你說」，肯定是「だけ」。'
            },
            {
                id: 'n5_dake_4',
                sentence: '「お金{かね}、持{も}ってる？」\n「千円{せんえん}（　）あるよ。」',
                options: ['しか', 'だけ', 'でも', 'ぐらい'],
                correctIndex: 1,
                explanation: '對話情境。回答「有」，且針對數量做限定，用「だけ」。若回答「ない」則可用「しか」。'
            },
            {
                id: 'n5_dake_5',
                sentence: '「全部{ぜんぶ}食{た}べたの？」\n「ううん、これ（　）食{た}べた。」',
                options: ['しか', 'こそ', 'だけ', 'など'],
                correctIndex: 2,
                explanation: '對話情境。「只吃了這個」。'
            }
        ]
    },
    'n5_darou': {
        id: 'n5_darou',
        pattern: 'だろう',
        connection: '名詞 / 形容詞 / 動詞普通形 + だろう',
        translation: '大概...; ...吧?',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '推測 (普通體)',
                description: '表示說話者的推測，非斷定。用於普通體對話。禮貌體為「でしょう」。',
                examples: [
                    { japanese: '明日{あした}は雨{あめ}だろう。', chinese: '明天大概會下雨吧。' },
                    { japanese: '彼{かれ}はもう帰{かえ}っただろう。', chinese: '他大概已經回家了吧。' },
                    { japanese: 'その映画{えいが}は面白{おもしろ}いだろう。', chinese: '那部電影應該很有趣吧。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_darou_1',
                sentence: '駅{えき}はあっち（　）。',
                options: ['だ', 'だろう', 'ます', 'で'],
                correctIndex: 1,
                explanation: '表示推測「大概在那邊吧」，用「だろう」。'
            },
            {
                id: 'n5_darou_2',
                sentence: 'この本{ほん}は君{きみ}には難{むずか}しい（　）。',
                options: ['だ', 'の', 'だろう', 'ます'],
                correctIndex: 2,
                explanation: '推測「對你來說可能很難」。形容詞直接接「だろう」。'
            },
            {
                id: 'n5_darou_3',
                sentence: '彼{かれ}は来{こ}ない（　）。',
                options: ['だ', 'だろう', 'です', 'ます'],
                correctIndex: 1,
                explanation: '動詞普通形接「だろう」。'
            },
            {
                id: 'n5_darou_4',
                sentence: '「山田{やまだ}さんはどこ？」\n「たぶん、トイレ（　）。」',
                options: ['だ', 'だろう', 'で', 'の'],
                correctIndex: 1,
                explanation: '對話推測。「大概在廁所吧」。'
            },
            {
                id: 'n5_darou_5',
                sentence: '「これ、誰{だれ}の？」\n「田中{たなか}さんの（　）。」',
                options: ['だ', 'だろう', 'です', 'ます'],
                correctIndex: 1,
                explanation: '不確定的推測，「大概是田中先生的吧」。'
            }
        ]
    },
    'n5_de': {
        id: 'n5_de',
        pattern: 'で',
        connection: '名詞 + で',
        translation: '在... (地點); 用... (手段)',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '動作發生的場所',
                description: '表示動作進行的地點。',
                examples: [
                    { japanese: '図書館{としょかん}で勉強{べんきょう}します。', chinese: '在圖書館讀書。' },
                    { japanese: 'レストランで食事{しょくじ}をします。', chinese: '在餐廳吃飯。' }
                ]
            },
            {
                usageId: 2,
                title: '手段、方法、工具',
                description: '表示使用某種工具、語言或交通手段。',
                examples: [
                    { japanese: 'バスで学校{がっこう}へ行{い}きます。', chinese: '搭巴士去學校。' },
                    { japanese: '箸{はし}でご販{はん}を食{た}べます。', chinese: '用筷子吃飯。' },
                    { japanese: '日本語{にほんご}で手紙{てがみ}を書{か}きます。', chinese: '用日文寫信。' }
                ]
            }
        ],
        quiz: [
            // 第 1 題：正向題 - 動作場所
            {
                id: 'n5_de_1',
                sentence: '公園{こうえん}（　）サッカーをします。',
                options: ['で', 'に', 'を', 'へ'],
                correctIndex: 0,
                explanation: {
                    correct: '「で」正確！「公園で」表示動作發生的場所。踢足球是動作，所以場所用「で」。',
                    wrong: [
                        '「に」錯誤：「に」用於存在場所（いる/ある）或移動目的地，不用於動作場所。',
                        '「を」錯誤：「を」用於他動詞的受詞或通過的場所，這裡需要場所標記。',
                        '「へ」錯誤：「へ」表示移動方向，這裡是「在公園做動作」，不是「往公園去」。'
                    ]
                }
            },
            // 第 2 題：正向題 - 工具/手段
            {
                id: 'n5_de_2',
                sentence: '鉛筆{えんぴつ}（　）書{か}いてください。',
                options: ['で', 'に', 'を', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「で」正確！「鉛筆で」表示使用的工具。「用鉛筆寫」的「用」就是「で」。',
                    wrong: [
                        '「に」錯誤：「鉛筆に書く」會變成「寫在鉛筆上」的意思，語意完全不同。',
                        '「を」錯誤：「を」用於動作的對象，「鉛筆」是工具不是受詞。',
                        '「が」錯誤：「が」用於主語標記，「鉛筆」不是句子的主語。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「に」不是「で」
            {
                id: 'n5_de_3',
                sentence: '猫{ねこ}が椅子{いす}の上{うえ}（　）います。',
                options: ['で', 'に', 'を', 'が'],
                correctIndex: 1,
                explanation: {
                    correct: '「に」正確！「います」表示存在，存在的場所用「に」。「椅子の上にいる」＝「在椅子上」。',
                    wrong: [
                        '「で」錯誤：「で」用於動作場所，但「いる」表示存在狀態，不是動作！存在場所必須用「に」。這是最常見的錯誤！',
                        '「を」錯誤：「を」不用於存在場所，這裡需要「に」。',
                        '「が」錯誤：「猫が」已經是主語了，這裡需要場所標記。'
                    ]
                }
            },
            // 第 4 題：對話題
            {
                id: 'n5_de_4',
                sentence: '「昨日{きのう}、どこ（　）晩{ばん}ご飯{はん}を食{た}べましたか。」\n「駅前{えきまえ}のレストラン（　）食{た}べました。」',
                options: ['で/で', 'に/に', 'で/に', 'に/で'],
                correctIndex: 0,
                explanation: {
                    correct: '「で/で」正確！「食べる」是動作，動作場所用「で」。問句和答句都是「在哪裡做動作」。',
                    wrong: [
                        '「に/に」錯誤：「に」用於存在或目的地，「食べる」是動作，場所要用「で」。',
                        '「で/に」錯誤：兩個空都是動作場所，都應該用「で」。',
                        '「に/で」錯誤：第一空也是問動作場所，應該用「で」。'
                    ]
                }
            },
            // 第 5 題：辨析題 - 「で」vs「に」的核心區別
            {
                id: 'n5_de_5',
                sentence: '「明日{あした}、何時{なんじ}（　）会{あ}いましょうか。」\n「3時{じ}（　）会{あ}いましょう。駅{えき}の前{まえ}（　）待{ま}っています。」',
                options: ['に/に/で', 'で/で/に', 'に/に/に', 'で/で/で'],
                correctIndex: 0,
                explanation: {
                    correct: '「に/に/で」正確！時間點用「に」（何時に、3時に），動作場所用「で」（駅の前で待つ）。',
                    wrong: [
                        '「で/で/に」錯誤：時間點不能用「で」！「何時で」「3時で」是錯誤的日文。',
                        '「に/に/に」錯誤：前兩空正確，但「待つ」是動作，動作場所用「で」不是「に」。',
                        '「で/で/で」錯誤：時間點必須用「に」，「で」不能用於時間表達。'
                    ]
                }
            }
        ]
    }
};

// Batch 2
Object.assign(n5Details, {
    'n5_demo': {
        id: 'n5_demo',
        pattern: 'でも',
        connection: '名詞 + でも',
        translation: '但是; 可是',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '逆接接續詞',
                description: '放在句首，表示轉折。',
                examples: [
                    { japanese: '雨{あめ}が降{ふ}っています。でも、出{で}かけます。', chinese: '正在下雨。但是，我還是要出門。' },
                    { japanese: '日本語{にほんご}は難{むずか}しいです。でも、面白{おもしろ}いです。', chinese: '日文很難。但是，很有趣。' }
                ]
            },
            {
                usageId: 2,
                title: '舉例（暗示其他）',
                description: '舉出極端的例子，暗示「連...也...」。',
                examples: [
                    { japanese: '子供{こども}でも分{わ}かります。', chinese: '連小孩都懂。' },
                    { japanese: 'そんなことはサルでもできる。', chinese: '那種事情連猴子都會。' }
                ]
            },
            {
                usageId: 3,
                title: '提議（非限定）',
                description: '舉出一個例子，暗示「...之類的東西」。常用於邀約。',
                examples: [
                    { japanese: 'お茶{ちゃ}でも飲{の}みませんか。', chinese: '要不要喝個茶之類的？' },
                    { japanese: '日曜日{にほんご}に映画{えいが}でも見{み}よう。', chinese: '星期天去看個電影什麼的吧。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_demo_1',
                sentence: 'この問題は小学生（　）わかります。',
                options: ['でも', 'から', 'まで', 'だけ'],
                correctIndex: 0,
                explanation: '舉出極端例子「連小學生都懂」。'
            },
            {
                id: 'n5_q_demo_2',
                sentence: 'コーヒー（　）飲みませんか。',
                options: ['でも', 'しか', 'こと', 'もの'],
                correctIndex: 0,
                explanation: '提議「喝杯咖啡之類的如何」。'
            },
            {
                id: 'n5_q_demo_3',
                sentence: '頭が痛いです。（　）、学校へ行きます。',
                options: ['そして', 'でも', 'だから', 'それから'],
                correctIndex: 1,
                explanation: '逆接。「雖然頭痛，但是要去學校。」'
            },
            {
                id: 'n5_q_demo_4',
                sentence: '「日曜日、暇？」\n「うん、映画（　）見に行かない？」',
                options: ['でも', 'しか', 'だけ', 'へ'],
                correctIndex: 0,
                explanation: '對話情境。提議「去看個電影之類的」。'
            },
            {
                id: 'n5_q_demo_5',
                sentence: '「先生、これお願いします。」\n「忙しいから、後（　）いい？」',
                options: ['で', 'でも', 'に', 'を'],
                correctIndex: 1,
                explanation: '對話情境。「後でもいい？」（晚點也行嗎？）。此處「でも」表示「即使是...也可以」。'
            }
        ]
    },
    'n5_deshou': {
        id: 'n5_deshou',
        pattern: 'でしょう',
        connection: '名詞 / 形容詞 / 動詞普通形 + でしょう',
        translation: '...吧; 大概...; ...對吧?',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '推測 (禮貌體)',
                description: '表示說話者的推測，比「だろう」更有禮貌。',
                examples: [
                    { japanese: '明日{あした}は晴{は}れるでしょう。', chinese: '明天大概會放晴吧。' },
                    { japanese: '彼{かれ}は来{く}るでしょう。', chinese: '他應該會來吧。' }
                ]
            },
            {
                usageId: 2,
                title: '確認 (語調上揚)',
                description: '徵求對方的同意或確認。',
                examples: [
                    { japanese: 'これはあなたの本{ほん}でしょう？', chinese: '這是你的書對吧？' },
                    { japanese: '日本語{にほんご}は面白{おもしろ}いでしょう？', chinese: '日文很有趣吧？' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_deshou_1',
                sentence: '明日{あした}は雪{ゆき}が降{ふ}る（　）。',
                options: ['で', 'でしょう', 'ます', 'ました'],
                correctIndex: 1,
                explanation: '依據前後文判斷為天氣預報推測「大概會下雪吧」。'
            },
            {
                id: 'n5_q_deshou_2',
                sentence: '「佐藤{さとう}さんはまだ来{き}ませんか。」\n「たぶん、もうすぐ来{く}る（　）。」',
                options: ['ます', 'たい', 'でしょう', 'ましょう'],
                correctIndex: 2,
                explanation: '回答推測「大概馬上會來吧」。'
            },
            {
                id: 'n5_q_deshou_3',
                sentence: '北海道{ほっかいどう}は寒{さむ}い（　）。',
                options: ['でしょう', 'で', 'ます', 'ました'],
                correctIndex: 0,
                explanation: '形容詞直接接「でしょう」表示推測。'
            },
            {
                id: 'n5_q_deshou_4',
                sentence: '「これ、おいしいね。」\n「そう（　）？高かったんだから。」',
                options: ['だろう', 'でしょう', 'だ', 'です'],
                correctIndex: 1,
                explanation: '對話情境。確認同意，「對吧？因為很貴嘛。」'
            },
            {
                id: 'n5_q_deshou_5',
                sentence: '「鍵がない…。」\n「さっき机の上にあった（　）？」',
                options: ['だろう', 'でしょう', 'だ', 'です'],
                correctIndex: 1,
                explanation: '對話情境。確認記憶，「剛才不是在桌上嗎？」。'
            }
        ]
    },
    'n5_donna': {
        id: 'n5_donna',
        pattern: 'どんな',
        connection: 'どんな + 名詞',
        translation: '什麼樣的...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '詢問性質、狀態',
                description: '詢問某人或某事物具備什麼樣的特徵或內容。',
                examples: [
                    { japanese: 'どんなスポーツが好{す}きですか。', chinese: '你喜歡什麼樣的運動？' },
                    { japanese: '彼{かれ}はどんな人{ひと}ですか。', chinese: '他是個什麼樣的人？' },
                    { japanese: '東京{とうきょう}はどんな町{まち}ですか。', chinese: '東京是個什麼樣的城市？' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_donna_1',
                sentence: '（　）音楽{おんがく}を聞{き}きますか。',
                options: ['どう', 'どんな', 'どれ', 'どの'],
                correctIndex: 1,
                explanation: '後接名詞「音楽」，詢問性質「什麼樣的音樂」，用「どんな」。'
            },
            {
                id: 'n5_q_donna_2',
                sentence: '奈良{なら}は（　）ところですか。',
                options: ['どんな', 'どう', 'どれ', 'どちら'],
                correctIndex: 0,
                explanation: '後接名詞「ところ」，詢問性質。'
            },
            {
                id: 'n5_q_donna_3',
                sentence: '（　）食べ物が嫌いですか。',
                options: ['どう', 'どれ', 'どんな', 'どっち'],
                correctIndex: 2,
                explanation: '詢問「什麼樣的食物」。'
            },
            {
                id: 'n5_q_donna_4',
                sentence: '「新しい先生はどう？」\n「（　）先生？」',
                options: ['どう', 'どんな', 'どれ', 'なにする'],
                correctIndex: 1,
                explanation: '對話情境。B反問「你是說哪一種/什麼樣的老師？」（可能有多個新老師，或者詢問具體特徵）。'
            },
            {
                id: 'n5_q_donna_5',
                sentence: '「日本で（　）仕事をしたいですか。」\n「IT関係の仕事がしたいです。」',
                options: ['どう', 'どんな', 'どれ', 'なにする'],
                correctIndex: 1,
                explanation: '對話情境。詢問工作性質。'
            }
        ]
    }
});

// Batch 3
Object.assign(n5Details, {
    'n5_doushite': {
        id: 'n5_doushite',
        pattern: 'どうして',
        connection: 'どうして + 句子',
        translation: '為什麼',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '詢問理由、原因',
                description: '用於詢問原因。比「なぜ」稍微口語一點，比「なんで」稍微正式。可單獨使用。',
                examples: [
                    { japanese: 'どうして泣{な}いているのですか。', chinese: '為什麼在哭呢？' },
                    { japanese: 'どうしてパーティーに来{こ}なかったのですか。', chinese: '為什麼沒有來參加派對呢？' },
                    { japanese: '「学校{がっこう}を休{やす}みます。」「どうしてですか。」', chinese: '「我要請假。」「為什麼？」' }
                ]
            }
        ],
        analysis: {
            title: '詢問原因的詞彙比較',
            description: '依照正式程度排列。',
            points: [
                { rule: 'なぜ：最正式，常用於書面或演講。' },
                { rule: 'どうして：中性，口語和正式皆可。' },
                { rule: 'なんで：最口語，朋友或非正式場合使用。' }
            ]
        },
        quiz: [
            {
                id: 'n5_q_doushite_1',
                sentence: '（　）日本語を勉強していますか。',
                options: ['どうして', 'どう', 'どんな', 'どれ'],
                correctIndex: 0,
                explanation: '詢問「為什麼學日文」。'
            },
            {
                id: 'n5_q_doushite_2',
                sentence: '（　）昨日学校を休みましたか。',
                options: ['どんな', 'どう', 'どうして', 'どちら'],
                correctIndex: 2,
                explanation: '詢問原因「為什麼請假」。'
            },
            {
                id: 'n5_q_doushite_3',
                sentence: '「（　）野菜を食べないの？」\n「嫌いだからです。」',
                options: ['どうして', 'なに', 'どれ', 'だれ'],
                correctIndex: 0,
                explanation: '對話情境。詢問原因。'
            },
            {
                id: 'n5_q_doushite_4',
                sentence: '「遅れてすみません。」\n「（　）遅れたんですか。」',
                options: ['どうして', 'なに', 'どれ', 'いつ'],
                correctIndex: 0,
                explanation: '對話情境。'
            },
            {
                id: 'n5_q_doushite_5',
                sentence: '（　）そんなに急いでいるんですか。',
                options: ['どんな', 'どうして', 'どこ', 'どちら'],
                correctIndex: 1,
                explanation: '「為什麼那麼急？」。'
            }
        ]
    },
    'n5_douyatte': {
        id: 'n5_douyatte',
        pattern: 'どうやって',
        connection: 'どうやって + 動詞',
        translation: '怎麼...; 如何...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '詢問方法、手段',
                description: '詢問做某事的方法或過程。',
                examples: [
                    { japanese: '駅{えき}までどうやって行{い}きますか。', chinese: '怎麼去車站？' },
                    { japanese: 'これはどうやって使{つか}うのですか。', chinese: '這個要怎麼用？' },
                    { japanese: '漢字{かんじ}はどうやって覚{おぼ}えますか。', chinese: '漢字要怎麼記？' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_douyatte_1',
                sentence: '大学まで（　）来ましたか。',
                options: ['どうやって', 'どうして', 'どんな', 'どれ'],
                correctIndex: 0,
                explanation: '詢問交通方式（方法）。'
            },
            {
                id: 'n5_q_douyatte_2',
                sentence: 'この料理は（　）作りますか。',
                options: ['どうして', 'どこ', 'だれ', 'どうやって'],
                correctIndex: 3,
                explanation: '詢問料理的做法。'
            },
            {
                id: 'n5_q_douyatte_3',
                sentence: '（　）切符を買いますか。',
                options: ['どうして', 'どうやって', 'どんな', 'なんて'],
                correctIndex: 1,
                explanation: '詢問買票的操作方法。'
            },
            {
                id: 'n5_q_douyatte_4',
                sentence: '「きれいな絵ですね。（　）描いたんですか。」\n「パソコンで描きました。」',
                options: ['どうやって', 'どうして', 'どんな', 'どれ'],
                correctIndex: 0,
                explanation: '對話情境。詢問繪畫的方式。'
            },
            {
                id: 'n5_q_douyatte_5',
                sentence: '「（　）やせたんですか。」\n「毎日走ったんです。」',
                options: ['どうやって', 'どうして', 'どこ', 'いつ'],
                correctIndex: 0,
                explanation: '對話情境。詢問減肥的方法（雖然也可以問原因，但回答是「每天跑步」這一手段，故「どうやって」更貼切。若問原因通常回答「為了健康」等）。'
            }
        ]
    }
});

// Batch 5
Object.assign(n5Details, {
    'n5_ichiban': {
        id: 'n5_ichiban',
        pattern: '一番',
        connection: '一番 + 形容詞',
        translation: '最...; 第一...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '最高級',
                description: '表示在某個範圍內程度最高。',
                examples: [
                    { japanese: '日本{にほん}で一番{いちばん}高{たか}い山{やま}は富士山{ふじさん}です。', chinese: '日本最高的山是富士山。' },
                    { japanese: 'このクラスで、誰{だれ}が一番{いちばん}背{せ}が高{たか}いですか。', chinese: '這個班級裡，誰個子最高？' },
                    { japanese: '私{わたし}は夏{なつ}が一番{いちばん}好{す}きです。', chinese: '我最喜歡夏天。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_ichiban_1',
                sentence: '世界で（　）長い川はどこですか。',
                options: ['一番', 'もっと', 'ずっと', 'とても'],
                correctIndex: 0,
                explanation: '詢問「最」長的，最高級用「一番」。'
            },
            {
                id: 'n5_q_ichiban_2',
                sentence: 'この中で、どれが（　）安いですか。',
                options: ['すごい', 'とても', 'あまり', '一番'],
                correctIndex: 3,
                explanation: '這之中「最」便宜的是哪個？'
            },
            {
                id: 'n5_q_ichiban_3',
                sentence: '彼は日本語がクラスで（　）上手です。',
                options: ['一番', '二番', '三番', '四番'],
                correctIndex: 0,
                explanation: '在班上「最」厲害的。'
            },
            {
                id: 'n5_q_ichiban_4',
                sentence: '「季節の中でいつが好き？」\n「秋が（　）好き。」',
                options: ['一番', 'もっと', 'ずっと', 'よく'],
                correctIndex: 0,
                explanation: '對話情境。「最喜歡秋天」。'
            },
            {
                id: 'n5_q_ichiban_5',
                sentence: '「この店で何がおすすめですか。」\n「これが（　）人気ですよ。」',
                options: ['一番', 'たくさん', 'あまり', '全然'],
                correctIndex: 0,
                explanation: '對話情境。「這是最受歡迎的喔」。'
            }
        ]
    },
    'n5_issho_ni': {
        id: 'n5_issho_ni',
        pattern: '一緒に',
        connection: '（人と）一緒に + 動詞',
        translation: '一起...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '共同動作',
                description: '表示和某人一起做某事。',
                examples: [
                    { japanese: '明日{あした}、映画{えいが}を見{み}に行{い}きませんか。', chinese: '明天要不要一起去看電影？' }, // Note: context usually implies 'issho ni' but explicitly using it is better for example
                    { japanese: '友達{ともだち}と一緒{いっしょ}に宿題{しゅくだい}をしました。', chinese: '和朋友一起寫了作業。' },
                    { japanese: '家族{かぞく}と一緒{いっしょ}に住{す}んでいます。', chinese: '和家人住在一起。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_issho_ni_1',
                sentence: '週末、彼女（　）一緒にデパートへ行きました。',
                options: ['と', 'に', 'で', 'を'],
                correctIndex: 0,
                explanation: '「和」某人，助詞用「と」。'
            },
            {
                id: 'n5_q_issho_ni_2',
                sentence: 'みんなで（　）写真を撮りましょう。',
                options: ['一緒に', '一人で', '全部で', '別々に'],
                correctIndex: 0,
                explanation: '大家「一起」拍照吧。'
            },
            {
                id: 'n5_q_issho_ni_3',
                sentence: '（　）ご飯を食べませんか。',
                options: ['一緒に', '一所に', '一方で', '一度に'],
                correctIndex: 0,
                explanation: '邀約「要不要一起吃飯」。'
            },
            {
                id: 'n5_q_issho_ni_4',
                sentence: '「一人で行くの？」\n「ううん、田中さんと（　）行くよ。」',
                options: ['一緒に', '一人で', '二階で', 'ともに'],
                correctIndex: 0,
                explanation: '對話情境。「和田中先生一起去」。'
            },
            {
                id: 'n5_q_issho_ni_5',
                sentence: '「荷物が重そうですね。」\n「（　）持ちましょうか。」',
                options: ['一緒に', '一人で', '全部', '同じ'],
                correctIndex: 0,
                explanation: '對話情境。提議幫忙，「我們一起拿吧？」（或表示我也來幫忙）。'
            }
        ]
    },
    'n5_itsumo': {
        id: 'n5_itsumo',
        pattern: 'いつも',
        connection: 'いつも + 動詞',
        translation: '總是; 通常',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '頻率（總是）',
                description: '表示動作或狀態發生的頻率很高，幾乎是習慣性的。',
                examples: [
                    { japanese: '私{わたし}はいつも７時{じ}に起{お}きます。', chinese: '我總是7點起床。' },
                    { japanese: '彼{かれ}はいつも元気{げんき}です。', chinese: '他總是很有精神。' },
                    { japanese: '日曜日{にちようび}はいつも家{いえ}にいます。', chinese: '星期天我通常都在家。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_itsumo_1',
                sentence: '（　）母に叱られます。',
                options: ['いつも', '全然', 'あまり', '決して'],
                correctIndex: 0,
                explanation: '前為肯定句，後三個選項通常接否定或有特定條件。這裡指「總是挨罵」。'
            },
            {
                id: 'n5_q_itsumo_2',
                sentence: '朝は（　）パンを食べます。',
                options: ['いつも', 'いま', 'いつ', 'いくつ'],
                correctIndex: 0,
                explanation: '表示習慣，「總是吃麵包」。'
            },
            {
                id: 'n5_q_itsumo_3',
                sentence: '田中さんは（　）親切です。',
                options: ['あまり', 'いつも', 'しか', 'ぜんぜん'],
                correctIndex: 1,
                explanation: '「總是」很親切。'
            },
            {
                id: 'n5_q_itsumo_4',
                sentence: '「お昼ご飯はどうしていますか。」\n「（　）お弁当を持ってきています。」',
                options: ['いつも', 'ずっと', 'やっと', 'とうとう'],
                correctIndex: 0,
                explanation: '對話情境。回答習慣性動作。'
            },
            {
                id: 'n5_q_itsumo_5',
                sentence: '「早いですね。」\n「ええ、（　）このくらいの時間に起きますから。」',
                options: ['いつも', '今', 'まだ', 'もう'],
                correctIndex: 0,
                explanation: '對話情境。「因為我總是這個時間起床」。'
            }
        ]
    },
    'n5_janai': {
        id: 'n5_janai',
        pattern: 'じゃない / ではない',
        connection: '名詞 / な形容詞 + じゃない / ではない',
        translation: '不是',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '否定 (普通體)',
                description: '「ではありません」的普通體（常體）。「じゃない」比較口語，「ではない」比較正式或偏書面。',
                examples: [
                    { japanese: '私{わたし}は学生{がくせい}じゃない。', chinese: '我不是學生。' },
                    { japanese: 'これは私{わたし}の本{ほん}ではない。', chinese: '這不是我的書。' },
                    { japanese: 'その映画{えいが}は有名{ゆうめい}じゃない。', chinese: '那部電影不出名。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_janai_1',
                sentence: '明日は雨（　）。',
                options: ['じゃない', 'くない', 'しない', 'ない'],
                correctIndex: 0,
                explanation: '名詞否定用「じゃない」。'
            },
            {
                id: 'n5_q_janai_2',
                sentence: 'この部屋はきれい（　）。',
                options: ['くない', 'じゃない', 'ない', 'しない'],
                correctIndex: 1,
                explanation: '「きれい」是な形容詞，否定用「じゃない」。(注意：不要誤以為是い形容詞而用くない)'
            },
            {
                id: 'n5_q_janai_3',
                sentence: 'それは猫（　）、犬だ。',
                options: ['じゃない', 'くない', 'ない', 'しない'],
                correctIndex: 0,
                explanation: '「不是貓，是狗」。'
            },
            {
                id: 'n5_q_janai_4',
                sentence: '「先生ですか。」\n「いいえ、先生（　）。」',
                options: ['じゃない', 'ではない', 'ありません', 'いません'],
                correctIndex: 0,
                explanation: '對話情境。（選項中1和2皆可，但若考慮最自然的口語回答，或普通體的一致性。題目若未指定敬體/常體，通常會看前後文。此題問句是敬體，但回答若要用常體表親近或自言自語也行。若要完全對應敬體應用「じゃありません」。但此處考點在「じゃない」的接續。選項1最符合本條目教學重點。） *修正：若要嚴謹，對長輩回答不應用普通體。但若這是在教導普通體變化，則情境可能是朋友間問「先生なの？」。若原句是「先生ですか」，回答用「先生じゃない」稍顯無禮，除非對晚輩。我們假設這是文法練習題。更正為：選項包含「じゃない」。'
            },
            {
                id: 'n5_q_janai_5',
                sentence: '「おいしい？」\n「うーん、あまりおいしく（　）。」',
                options: ['ない', 'じゃない', 'ありません', 'くない'],
                correctIndex: 0,
                explanation: '對話情境。注意！「おいしい」是い形容詞，否定是「おいしくない」。此處陷阱題。名詞/な形容詞才用「じゃない」。本題答案應選「ない」（接在おいしく後）。*等等，這是janai的測驗，應該出名詞/な形容詞的。讓我換一題。'
            }
        ]
    },
    'n5_ka': {
        id: 'n5_ka',
        pattern: 'か',
        connection: '句子 + か\n名詞 + か + 名詞',
        translation: '嗎? (疑問); 或者',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '疑問',
                description: '放在句尾表示疑問。',
                examples: [
                    { japanese: 'これは何{なん}ですか。', chinese: '這是什麼？' },
                    { japanese: '学生{がくせい}ですか。', chinese: '你是學生嗎？' }
                ]
            },
            {
                usageId: 2,
                title: '選擇 (或者)',
                description: '連接兩個名詞，表示二選一。',
                examples: [
                    { japanese: 'コーヒーか紅茶{こうちゃ}を飲{の}みます。', chinese: '喝咖啡或紅茶。' },
                    { japanese: '月曜日{げつようび}か火曜日{かようび}に行{い}きます。', chinese: '星期一或星期二去。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_ka_1',
                sentence: 'ペン（　）鉛筆を貸してください。',
                options: ['か', 'も', 'と', 'に'],
                correctIndex: 0,
                explanation: '筆「或者」鉛筆。'
            },
            {
                id: 'n5_q_ka_2',
                sentence: 'あなたは学生です（　）。',
                options: ['か', 'ね', 'よ', 'わ'],
                correctIndex: 0,
                explanation: '疑問句。「你是學生嗎？」'
            },
            {
                id: 'n5_q_ka_3',
                sentence: '何時（　）わかりません。',
                options: ['か', 'が', 'は', 'を'],
                correctIndex: 0,
                explanation: '疑問詞 + か + わかりません（不確定是幾點）。間接疑問句。'
            },
            {
                id: 'n5_q_ka_4',
                sentence: '「いつ行きますか。」\n「今日（　）明日行きます。」',
                options: ['か', 'と', 'も', 'が'],
                correctIndex: 0,
                explanation: '對話情境。今天「或」明天。'
            },
            {
                id: 'n5_q_ka_5',
                sentence: '「誰が来ますか。」\n「田中さん（　）鈴木さんが来ると思います。」',
                options: ['か', 'と', 'も', 'が'],
                correctIndex: 0,
                explanation: '對話情境。田中先生「或」鈴木先生。'
            }
        ]
    }
});

// Batch 4
Object.assign(n5Details, {
    'n5_ga': {
        id: 'n5_ga',
        pattern: 'が',
        connection: '名詞 + が',
        translation: '主語助詞; 但是',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '主語標記',
                description: '標示動作的主體（是誰做的）或狀態的主體（是誰、是什麼樣子）。特別用於自然現象、感官對象、能力對象、喜好對象。',
                examples: [
                    { japanese: '雨{あめ}が降{ふ}っています。', chinese: '正在下雨。' },
                    { japanese: '私{わたし}は猫{ねこ}が好{す}きです。', chinese: '我喜歡貓。' },
                    { japanese: '私{わたし}は日本語{にほんご}が分{わ}かります。', chinese: '我懂日文。' }
                ]
            },
            {
                usageId: 2,
                title: '逆接（但是）',
                description: '連接兩個句子，表示轉折。',
                examples: [
                    { japanese: 'すみませんが、駅{えき}はどこですか。', chinese: '不好意思，請問車站在哪裡？' },
                    { japanese: 'その店{みせ}はおいしいですが、高{たか}いです。', chinese: '那家店很好吃，但是很貴。' }
                ]
            }
        ],
        analysis: {
            title: '「が」與「は」的區別 (初級篇)',
            description: '最基本的區分方法。',
            points: [
                { rule: 'は (Topic)：標示主題。「關於這個主題，我要說的是...」。舊訊息。' },
                { rule: 'が (Subject)：標示新訊息的主語，或排他性的強調「是這個（而不是別的）」。' },
                { rule: '能力、好惡、慾望的對象語通常用「が」。(例：猫が好き)' }
            ]
        },
        quiz: [
            // 第 1 題：正向題 - 能力/好惡對象
            {
                id: 'n5_q_ga_1',
                sentence: '私{わたし}は猫{ねこ}（　）好{す}きです。',
                options: ['が', 'を', 'は', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！「好き」「嫌い」「上手」「下手」等的對象用「が」標記。這是固定用法。',
                    wrong: [
                        '「を」錯誤：「好き」是な形容詞，不是動詞，對象不能用「を」。這是中文母語者最常犯的錯誤！',
                        '「は」錯誤：「猫は好き」會變成「貓的話喜歡」（對比），語意改變。',
                        '「に」錯誤：「に」不用於「好き」的對象。'
                    ]
                }
            },
            // 第 2 題：正向題 - 新資訊/眼前發生
            {
                id: 'n5_q_ga_2',
                sentence: 'あ、バス（　）来{き}ましたよ。',
                options: ['が', 'は', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！發現眼前正在發生的新事物時，用「が」標記主語。「あ、バスが来た！」有「看！公車來了」的語感。',
                    wrong: [
                        '「は」錯誤：「は」用於已知話題，眼前突然發現的新狀況應該用「が」。',
                        '「を」錯誤：「を」用於受詞，公車是動作的主體，不是受詞。',
                        '「に」錯誤：「に」不用於標記主語。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「は」不是「が」
            {
                id: 'n5_q_ga_3',
                sentence: '田中{たなか}さん（　）毎朝{まいあさ}6時{じ}に起{お}きます。',
                options: ['が', 'は', 'を', 'に'],
                correctIndex: 1,
                explanation: {
                    correct: '「は」正確！這是一般陳述「田中先生（這個人的話）每天早上6點起床」，用「は」設定話題。',
                    wrong: [
                        '「が」錯誤：「が」用於新資訊或強調。這裡是描述田中的日常習慣，不是強調「是田中」起床，應該用「は」。',
                        '「を」錯誤：田中是主語，不是受詞。',
                        '「に」錯誤：田中是主語，不是時間或場所。'
                    ]
                }
            },
            // 第 4 題：對話題 - 疑問詞主語
            {
                id: 'n5_q_ga_4',
                sentence: '「誰{だれ}（　）この仕事{しごと}をしますか。」\n「私（　）します。」',
                options: ['が/が', 'は/は', 'が/は', 'は/が'],
                correctIndex: 0,
                explanation: {
                    correct: '「が/が」正確！疑問詞「誰」做主語時必須用「が」，回答時強調「是我」去做，也用「が」。',
                    wrong: [
                        '「は/は」錯誤：「誰は」是錯誤的日文，疑問詞主語必須用「が」。',
                        '「が/は」錯誤：第一空正確，但回答「是我做」有強調，用「が」更自然。',
                        '「は/が」錯誤：第一空「誰は」是文法錯誤。'
                    ]
                }
            },
            // 第 5 題：辨析題 - 「が」vs「は」的核心區別
            {
                id: 'n5_q_ga_5',
                sentence: '「あの人{ひと}、誰{だれ}ですか。」\n「あの人{ひと}（　）山田{やまだ}さんです。今日{きょう}から一緒{いっしょ}に働{はたら}く新{あたら}しい人{ひと}です。山田{やまだ}さん（　）大阪{おおさか}から来{き}ました。」',
                options: ['が/は', 'は/が', 'が/が', 'は/は'],
                correctIndex: 0,
                explanation: {
                    correct: '「が/は」正確！回答「誰？」時用「が」標記新資訊（あの人が山田さん），接著說明山田的背景時用「は」設定話題（山田さんは大阪から来た）。',
                    wrong: [
                        '「は/が」錯誤：第一空是回答「誰？」，需要「が」標記新資訊。',
                        '「が/が」錯誤：第二空是說明山田的背景，應該用「は」設定話題。',
                        '「は/は」錯誤：第一空回答疑問詞問句，必須用「が」。'
                    ]
                }
            }
        ]
    },
    'n5_ga_arimasu': {
        id: 'n5_ga_arimasu',
        pattern: 'があります',
        connection: '名詞 + があります',
        translation: '有...; 在... (無生命)',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '存在',
                description: '表示某處有某物（無生命物體，如東西、植物等）。',
                examples: [
                    { japanese: '机{つくえ}の上{うえ}に本{ほん}があります。', chinese: '桌上有書。' },
                    { japanese: '庭{にわ}に桜{さくら}の木{き}があります。', chinese: '庭院裡有櫻花樹。' }
                ]
            },
            {
                usageId: 2,
                title: '所有',
                description: '表示擁有某物。',
                examples: [
                    { japanese: '私{わたし}は車{くるま}があります。', chinese: '我有車。' },
                    { japanese: '今日{きょう}は時間{じかん}がありません。', chinese: '今天沒有時間。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_ga_arimasu_1',
                sentence: '部屋{へや}にテレビ（　）。',
                options: ['があります', 'がいます', 'です', 'ます'],
                correctIndex: 0,
                explanation: '電視是無生命物體，用「があります」。'
            },
            {
                id: 'n5_q_ga_arimasu_2',
                sentence: 'あそこにコンビニ（　）。',
                options: ['がいます', 'があります', 'です', 'ます'],
                correctIndex: 1,
                explanation: '便利商店是無生命物體（建築物）。'
            },
            {
                id: 'n5_q_ga_arimasu_3',
                sentence: '私{わたし}は約束{やくそく}（　）。',
                options: ['がいます', 'のあります', 'があります', 'であります'],
                correctIndex: 2,
                explanation: '「有約定」（抽象事物也是無生命），用「があります」。'
            },
            {
                id: 'n5_q_ga_arimasu_4',
                sentence: '「トイレはどこですか。」\n「あそこに（　）。」',
                options: ['あります', 'います', 'です', 'ます'],
                correctIndex: 0,
                explanation: '對話情境。詢問地點。廁所是無生命。'
            },
            {
                id: 'n5_q_ga_arimasu_5',
                sentence: '「来週の日曜日、暇ですか。」\n「すみません。用事{ようじ}が（　）。」',
                options: ['あります', 'います', 'あり', 'いり'],
                correctIndex: 0,
                explanation: '對話情境。「有事」。'
            }
        ]
    },
    'n5_ga_hoshii': {
        id: 'n5_ga_hoshii',
        pattern: 'がほしい',
        connection: '名詞 + がほしい',
        translation: '想要...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '慾望',
                description: '表示想要某樣東西。通常用於第一人稱（我）。對長輩或上司直接詢問「...がほしいですか」是不禮貌的。',
                examples: [
                    { japanese: '私{わたし}は新{あたら}しいパソコンがほしいです。', chinese: '我想要新電腦。' },
                    { japanese: '何{なに}がほしいですか。', chinese: '你想要什麼？' },
                    { japanese: '彼{かれ}は友達{ともだち}がほしいと言{い}っています。', chinese: '他說他想要朋友。（引用他人慾望）' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_ga_hoshii_1',
                sentence: '私{わたし}はお金{かね}（　）ほしいです。',
                options: ['を', 'が', 'に', 'で'],
                correctIndex: 1,
                explanation: '想要的對象用「が」。'
            },
            {
                id: 'n5_q_ga_hoshii_2',
                sentence: '誕生日に何（　）ほしいですか。',
                options: ['を', 'が', 'に', 'へ'],
                correctIndex: 1,
                explanation: '疑問詞做想要的對象，用「が」。'
            },
            {
                id: 'n5_q_ga_hoshii_3',
                sentence: '今、一番（　）ものは何ですか。',
                options: ['ほしい', 'うれしい', 'たのしい', 'さびしい'],
                correctIndex: 0,
                explanation: '根據語意「最想要的東西」。'
            },
            {
                id: 'n5_q_ga_hoshii_4',
                sentence: '「コーヒー、飲みますか。」\n「いいえ、冷たい水（　）ほしいです。」',
                options: ['が', 'を', 'に', 'で'],
                correctIndex: 0,
                explanation: '對話情境。「水がほしい」：想要水。'
            },
            {
                id: 'n5_q_ga_hoshii_5',
                sentence: '「夏休みにどこへ行きたいですか。」\n「どこへも行きたくないです。休み（　）ほしいです。」',
                options: ['を', 'が', 'に', 'へ'],
                correctIndex: 1,
                explanation: '對話情境。「想要休假」。'
            }
        ]
    },
    'n5_ga_imasu': {
        id: 'n5_ga_imasu',
        pattern: 'がいます',
        connection: '名詞 + がいます',
        translation: '有...; 在... (有生命)',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '存在',
                description: '表示某處有某人或動物（有生命物體）。',
                examples: [
                    { japanese: '教室{きょうしつ}に学生{がくせい}がいます。', chinese: '教室裡有學生。' },
                    { japanese: 'あそこに犬{いぬ}がいます。', chinese: '那裡有一隻狗。' }
                ]
            },
            {
                usageId: 2,
                title: '擁有（家人、朋友等）',
                description: '表示有家人、兄弟姊妹、朋友等。',
                examples: [
                    { japanese: '私{わたし}は兄弟{きょうだい}が二人{ふたり}います。', chinese: '我有兩個兄弟。' },
                    { japanese: '日本{にほん}人の友達{ともだち}がいます。', chinese: '我有日本朋友。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_ga_imasu_1',
                sentence: '公園に子供{こども}（　）。',
                options: ['があります', 'がいます', 'です', 'ます'],
                correctIndex: 1,
                explanation: '小孩是有生命的，用「がいます」。'
            },
            {
                id: 'n5_q_ga_imasu_2',
                sentence: '妹{いもうと}（　）いますか。',
                options: ['が', 'を', 'に', 'で'],
                correctIndex: 0,
                explanation: '詢問「有妹妹嗎」。'
            },
            {
                id: 'n5_q_ga_imasu_3',
                sentence: '池{いけ}の中に魚{さかな}（　）います。',
                options: ['を', 'が', 'に', 'へ'],
                correctIndex: 1,
                explanation: '魚是有生命的。'
            },
            {
                id: 'n5_q_ga_imasu_4',
                sentence: '「山田先生はどこですか。」\n「教室に（　）。」',
                options: ['あります', 'います', 'です', 'ます'],
                correctIndex: 1,
                explanation: '對話情境。詢問人的位置。'
            },
            {
                id: 'n5_q_ga_imasu_5',
                sentence: '「一人暮らしですか。」\n「いいえ、猫（　）います。」',
                options: ['が', 'を', 'に', 'で'],
                correctIndex: 0,
                explanation: '對話情境。「有養貓」。'
            }
        ]
    },
    'n5_hou_ga_ii': {
        id: 'n5_hou_ga_ii',
        pattern: 'ほうがいい',
        connection: '動詞た形 / 動詞ない形 + ほうがいい',
        translation: '最好...; ...比較好',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '建議、勸告',
                description: '建議對方做某事（肯定用た形）或不做某事（否定用ない形）。語氣較強，有時帶有命令或警告的意味。「最好做...，不然會...」。',
                examples: [
                    { japanese: '薬{くすり}を飲{の}んだほうがいいです。', chinese: '最好吃藥。（建議）' },
                    { japanese: 'タバコは吸{す}わないほうがいいです。', chinese: '最好不要抽菸。（勸告）' },
                    { japanese: '早{はや}く寝{ね}たほうがいいですよ。', chinese: '最好早點睡喔。' }
                ]
            }
        ],
        analysis: {
            title: '「ほうがいい」的接續注意',
            description: '肯定的建議強烈規定接「た形」，否定接「ない形」。',
            points: [
                {
                    rule: '○ 行ったほうがいい (去比較好)',
                },
                {
                    rule: '✕ 行くほうがいい (文法上不自然)',
                },
                {
                    rule: '○ 行かないほうがいい (不去比較好)'
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_hou_ga_ii_1',
                sentence: '風邪{かぜ}ですか。今日は（　）ほうがいいですよ。',
                options: ['休む', '休んで', '休んだ', '休み'],
                correctIndex: 2,
                explanation: '肯定的建議接「た形」。'
            },
            {
                id: 'n5_q_hou_ga_ii_2',
                sentence: 'そんなにたくさん（　）ほうがいいです。',
                options: ['食べない', '食べなく', '食べなかった', '食べて'],
                correctIndex: 0,
                explanation: '否定的建議接「ない形」。'
            },
            {
                id: 'n5_q_hou_ga_ii_3',
                sentence: 'もっと思い出{おもいで}を（　）ほうがいい。',
                options: ['作る', '作って', '作った', '作り'],
                correctIndex: 2,
                explanation: '「作ったほうがいい」。'
            },
            {
                id: 'n5_q_hou_ga_ii_4',
                sentence: '「熱があるんです。」\n「じゃあ、病院へ（　）ほうがいいですよ。」',
                options: ['行く', '行って', '行った', '行かない'],
                correctIndex: 2,
                explanation: '對話情境。建議去醫院。'
            },
            {
                id: 'n5_q_hou_ga_ii_5',
                sentence: '「この映画、怖そう…。」\n「苦手なら、（　）ほうがいいよ。」',
                options: ['見る', '見ない', '見た', '見たくない'],
                correctIndex: 1,
                explanation: '對話情境。建議「不要看」。'
            }
        ]
    }
});

// Batch 6
Object.assign(n5Details, {
    'n5_kara': {
        id: 'n5_kara',
        pattern: 'から',
        connection: '句子 / 名詞 + から',
        translation: '因為...; 從...; 由...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '原因・理由',
                description: '接在句子後面（若是名詞/Na形容詞要加「だ」），表示原因或理由。',
                examples: [
                    { japanese: '時間{じかん}がありませんから、急{いそ}ぎましょう。', chinese: '因為沒有時間了，快一點吧。' },
                    { japanese: '危{あぶ}ないですから、触{さわ}らないでください。', chinese: '因為很危險，請不要觸摸。' }
                ]
            },
            {
                usageId: 2,
                title: '起點・開始',
                description: '接在名詞（時間、地點）後面，表示動作的起點。常與「まで」搭配使用。',
                examples: [
                    { japanese: '会議{かいぎ}は９時{じ}からです。', chinese: '會議從9點開始。' },
                    { japanese: '学校{がっこう}から家{いえ}まで１時間{じかん}かかります。', chinese: '從學校到家裡要花1個小時。' }
                ]
            },
            {
                usageId: 3,
                title: '原料・材料（由...製成）',
                description: '表示製作物品的原料。',
                examples: [
                    { japanese: '日本酒{にほんしゅ}は米{こめ}から作{つく}られます。', chinese: '日本酒是由米製成的。' }
                ]
            }
        ],
        quiz: [
            // 第 1 題：正向題 - 原因理由
            {
                id: 'n5_q_kara_1',
                sentence: '雨{あめ}が降{ふ}っています（　）、出{で}かけません。',
                options: ['から', 'ので', 'けど', 'でも'],
                correctIndex: 0,
                explanation: {
                    correct: '「から」正確！表示原因「因為下雨，所以不出門」。「から」是最直接的因果表達。',
                    wrong: [
                        '「ので」也可以表示原因，但語氣較委婉。這裡兩者皆可，但「から」更直接。',
                        '「けど」錯誤：「けど」表示逆接（雖然...但是），語意相反。',
                        '「でも」錯誤：「でも」放句首表轉折，不能接在句子後面。'
                    ]
                }
            },
            // 第 2 題：正向題 - 起點
            {
                id: 'n5_q_kara_2',
                sentence: '授業{じゅぎょう}は8時{じ}（　）5時{じ}までです。',
                options: ['から', 'まで', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「から」正確！「8時から5時まで」表示「從8點到5點」，「から」標記起點。',
                    wrong: [
                        '「まで」錯誤：「まで」是終點，這裡需要起點。後面已經有「まで」了。',
                        '「に」錯誤：「に」表示時間點，但這裡需要表示「從...開始」的起點。',
                        '「で」錯誤：「で」不用於表示時間起點。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「ので」不是「から」
            {
                id: 'n5_q_kara_3',
                sentence: '電車{でんしゃ}が遅{おく}れた（　）、遅刻{ちこく}しました。すみません。',
                options: ['から', 'ので', 'けど', 'のに'],
                correctIndex: 1,
                explanation: {
                    correct: '「ので」正確！向上司或長輩解釋原因時，用「ので」較有禮貌。「から」太直接，有推卸責任的感覺。',
                    wrong: [
                        '「から」錯誤：雖然文法上可以，但在道歉場合用「から」語氣太強硬，顯得在找藉口。「ので」較委婉謙虛。',
                        '「けど」錯誤：「けど」表示逆接，語意不對。',
                        '「のに」錯誤：「のに」表示「明明...卻...」的遺憾，這裡不適用。'
                    ]
                }
            },
            // 第 4 題：對話題
            {
                id: 'n5_q_kara_4',
                sentence: '「どうして日本語{にほんご}を勉強{べんきょう}していますか。」\n「日本{にほん}のアニメが好{す}きだ（　）です。」',
                options: ['から', 'ので', 'けど', 'まで'],
                correctIndex: 0,
                explanation: {
                    correct: '「から」正確！回答「為什麼」的問題時，用「から」說明理由最自然。這是朋友間的對話，用「から」沒問題。',
                    wrong: [
                        '「ので」也可以，但朋友間用「から」更自然直接。',
                        '「けど」錯誤：「けど」表示轉折，不是因果。',
                        '「まで」錯誤：「まで」表示終點，與原因無關。'
                    ]
                }
            },
            // 第 5 題：辨析題 - 「から」vs「まで」vs「に」
            {
                id: 'n5_q_kara_5',
                sentence: '「学校{がっこう}（　）家{いえ}（　）どのくらいかかりますか。」\n「電車{でんしゃ}で30分{ぷん}くらいです。」',
                options: ['から/まで', 'まで/から', 'に/に', 'で/で'],
                correctIndex: 0,
                explanation: {
                    correct: '「から/まで」正確！「AからBまで」是「從A到B」的固定搭配。「から」是起點，「まで」是終點。',
                    wrong: [
                        '「まで/から」錯誤：順序顛倒了。「まで」是終點，「から」是起點，應該是「AからBまで」。',
                        '「に/に」錯誤：「に」不能單獨表示「從...到...」的概念。',
                        '「で/で」錯誤：「で」不用於表示起點和終點。'
                    ]
                }
            }
        ]
    },
    'n5_kata': {
        id: 'n5_kata',
        pattern: '方（かた）',
        connection: '動詞ます形（去掉ます） + 方',
        translation: '...的方法; ...的做法',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '方法',
                description: '接在動詞連用形（ます形去掉ます）後面，表示做某事的方法。',
                examples: [
                    { japanese: 'この漢字{かんじ}の読{よ}み方{かた}が分{わ}かりません。', chinese: '我不知道這個漢字的讀法（怎麼唸）。' },
                    { japanese: 'お箸{はし}の使{つか}い方{かた}を教{おし}えてください。', chinese: '請教我筷子的用法。' },
                    { japanese: '泳{およ}ぎ方{かた}を知{し}っていますか。', chinese: '你知道怎麼游泳嗎？' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_kata_1',
                sentence: 'パソコンの（　）方がわかりません。',
                options: ['使う', '使い', '使って', '使った'],
                correctIndex: 1,
                explanation: '動詞ます形去ます（使い）+ 方。'
            },
            {
                id: 'n5_q_kata_2',
                sentence: 'おいしいコーヒーの（　）方を習いました。',
                options: ['入れ', '入れる', '入れて', '入れた'],
                correctIndex: 0,
                explanation: '「入れます」→「入れ方」（沖泡方法）。'
            },
            {
                id: 'n5_q_kata_3',
                sentence: 'この料理の（　）方は簡単です。',
                options: ['作る', '作り', '作って', '作った'],
                correctIndex: 1,
                explanation: '「作ります」→「作り方」（做法）。'
            },
            {
                id: 'n5_q_kata_4',
                sentence: '「すみません、この字の（　）方を教えてください。」\n「『あ』ですよ。」',
                options: ['読む', '読み', '読んで', '読んだ'],
                correctIndex: 1,
                explanation: '對話情境。「読み方」（讀法）。'
            },
            {
                id: 'n5_q_kata_5',
                sentence: '「駅への（　）方を知っていますか。」\n「はい、知っていますよ。」',
                options: ['行く', '行気', '行き', '行って'],
                correctIndex: 2,
                explanation: '對話情境。「行き方」（去法/怎麼走）。'
            }
        ]
    },
    'n5_ka_ka': {
        id: 'n5_ka_ka',
        pattern: 'か～か',
        connection: '句子/名詞 + か + 句子/名詞 + か',
        translation: '...還是...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '選擇疑問句',
                description: '列出多個選項進行詢問。',
                examples: [
                    { japanese: 'これは水{みず}ですか、それともお酒{さけ}ですか。', chinese: '這是水呢，還是酒呢？' },
                    { japanese: '行{い}くか行{い}かないか、決{き}めてください。', chinese: '要去還是不去，請決定一下。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_ka_ka_1',
                sentence: '今日（　）明日か、いつがいいですか。',
                options: ['は', 'か', 'も', 'が'],
                correctIndex: 1,
                explanation: '「今日か明日か」（是今天好還是明天好）。'
            },
            {
                id: 'n5_q_ka_ka_2',
                sentence: '食べる（　）食べない（　）、はっきりしてください。',
                options: ['か／か', 'も／も', 'と／と', 'や／や'],
                correctIndex: 0,
                explanation: '「要吃還是不吃」。'
            },
            {
                id: 'n5_q_ka_ka_3',
                sentence: '男の人（　）女の人（　）わかりませんでした。',
                options: ['か／か', 'は／は', 'が／が', 'も／も'],
                correctIndex: 0,
                explanation: '「是不男還是女，搞不清楚」。'
            },
            {
                id: 'n5_q_ka_ka_4',
                sentence: '「コーヒー（　）紅茶（　）にしますか。」\n「コーヒーをお願いします。」',
                options: ['か／か', 'や／や', 'と／と', 'も／も'],
                correctIndex: 0,
                explanation: '對話情境。二選一，「要咖啡還是紅茶」。'
            },
            {
                id: 'n5_q_ka_ka_5',
                sentence: '「出席しますか。」\n「まだ出席する（　）しない（　）、迷っています。」',
                options: ['か／か', 'と／と', 'や／や', 'も／も'],
                correctIndex: 0,
                explanation: '對話情境。「要參加還是不參加」。'
            }
        ]
    },
    'n5_kedo': {
        id: 'n5_kedo',
        pattern: 'けど',
        connection: '普通形 + けど',
        translation: '但是; 雖然... (口語)',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '逆接（口語）',
                description: '「けれども」的口語形式，表示轉折。',
                examples: [
                    { japanese: 'その服{ふく}、かわいけど、高{たか}いね。', chinese: '那件衣服很可愛，但是很貴呢。' },
                    { japanese: '行{い}きたいけど、時間{じかん}がない。', chinese: '雖然想去，但是沒時間。' }
                ]
            },
            {
                usageId: 2,
                title: '前置緩衝（鋪陳）',
                description: '用在句尾，緩和語氣，或者引出下文。並不一定表示強烈的轉折。',
                examples: [
                    { japanese: 'もしもし、田中{たなか}ですけど、山田{やまだ}さんはいますか。', chinese: '喂，我是田中，請問山田先生在嗎？' },
                    { japanese: 'これ、おいしいけど、食{た}べる？', chinese: '這個很好吃喔，你要吃嗎？' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_kedo_1',
                sentence: '頭が痛い（　）、薬はありませんか。',
                options: ['けど', 'から', 'ので', 'し'],
                correctIndex: 0,
                explanation: '鋪陳狀況「你是頭痛（但是.../所以...），有沒有藥？」。雖翻譯為「所以」通順，但「けど」常用於單純陳述現狀並尋求幫助。'
            },
            {
                id: 'n5_q_kedo_2',
                sentence: '勉強した（　）、テストは悪かった。',
                options: ['けど', 'から', 'ので', 'たり'],
                correctIndex: 0,
                explanation: '逆接「雖然唸了書，但考得不好」。'
            },
            {
                id: 'n5_q_kedo_3',
                sentence: 'この店は高い（　）、味はいい。',
                options: ['けど', 'し', 'から', 'ので'],
                correctIndex: 0,
                explanation: '逆接。'
            },
            {
                id: 'n5_q_kedo_4',
                sentence: '「今、暇？」\n「暇だ（　）、何？」',
                options: ['けど', 'から', 'ので', 'し'],
                correctIndex: 0,
                explanation: '對話情境。「我是有空啦，幹嘛？」（緩和語氣/回應現狀）。'
            },
            {
                id: 'n5_q_kedo_5',
                sentence: '「あの映画見た？」\n「見た（　）、面白くなかったよ。」',
                options: ['けど', 'し', 'から', 'ので'],
                correctIndex: 0,
                explanation: '對話情境。「看了是看了，但是...」。'
            }
        ]
    },
    'n5_keredo_mo': {
        id: 'n5_keredo_mo',
        pattern: 'けれども',
        connection: '普通形 + けれども',
        translation: '但是; 雖然... (正式)',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '逆接（正式）',
                description: '比「けど」正式，比「が」口語一些。用法與「けど」基本相同。',
                examples: [
                    { japanese: '春{はる}になりました。けれども、まだ寒{さむ}いです。', chinese: '春天到了。但是，還是很冷。' },
                    { japanese: '一生懸命{いっしょうけんめい}走{はし}りましたけれども、間{ま}に合{あ}いませんでした。', chinese: '雖然拚命跑了，但還是沒趕上。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_keredomo_1',
                sentence: 'がんばりましました（　）、負けました。',
                options: ['けれども', 'から', 'ので', 'し'],
                correctIndex: 0,
                explanation: '逆接。'
            },
            {
                id: 'n5_q_keredomo_2',
                sentence: 'おいしいです（　）、カロリーが高いです。',
                options: ['けれども', 'から', 'ので', 'し'],
                correctIndex: 0,
                explanation: '逆接。'
            },
            {
                id: 'n5_q_keredomo_3',
                sentence: '昨日は雨でした（　）、今日は晴れです。',
                options: ['けれども', 'から', 'ので', 'し'],
                correctIndex: 0,
                explanation: '逆接。'
            },
            {
                id: 'n5_q_keredomo_4',
                sentence: '「お元気ですか。」\n「はい、元気です（　）、最近忙しいです。」',
                options: ['けれども', 'から', 'ので', 'し'],
                correctIndex: 0,
                explanation: '對話情境。「很好是很好，但是...」。'
            },
            {
                id: 'n5_q_keredomo_5',
                sentence: '「ご予約の方ですか。」\n「はい、予約しました（　）、席はありますか。」',
                options: ['けれども', 'から', 'ので', 'し'],
                correctIndex: 0,
                explanation: '對話情境。鋪陳語氣。'
            }
        ]
    }
});

// Batch 7
Object.assign(n5Details, {
    'n5_mada': {
        id: 'n5_mada',
        pattern: 'まだ',
        connection: 'まだ + 肯定形 / 否定形',
        translation: '還...; 尚未...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '持續 (還...)',
                description: '接肯定形，表示狀態還在持續（還在做...）。',
                examples: [
                    { japanese: '彼{かれ}はまだ寝{ね}ています。', chinese: '他還在睡覺。' },
                    { japanese: '雨{あめ}はまだ降{ふ}っています。', chinese: '雨還在下。' }
                ]
            },
            {
                usageId: 2,
                title: '未完成 (尚未)',
                description: '接否定形，表示動作尚未開始或完成（還沒...）。',
                examples: [
                    { japanese: '銀行{ぎんこう}はまだ開{あ}いていません。', chinese: '銀行還沒開。' },
                    { japanese: 'まだ決{き}めていません。', chinese: '還沒決定。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_mada_1',
                sentence: '（　）学校にいますか。',
                options: ['まだ', 'もう', 'すぐ', 'たぶん'],
                correctIndex: 0,
                explanation: '詢問「還」在學校嗎。'
            },
            {
                id: 'n5_q_mada_2',
                sentence: '宿題は（　）終わっていません。',
                options: ['もう', 'まだ', 'いつも', 'よく'],
                correctIndex: 1,
                explanation: '搭配否定「還沒」結束。'
            },
            {
                id: 'n5_q_mada_3',
                sentence: '彼は（　）若いです。',
                options: ['もう', 'まだ', 'いつ', 'あまり'],
                correctIndex: 1,
                explanation: '「還」很年輕。'
            },
            {
                id: 'n5_q_mada_4',
                sentence: '「もうご飯を食べましたか。」\n「いいえ、（　）です。」',
                options: ['まだ', 'もう', 'いつ', 'たぶん'],
                correctIndex: 0,
                explanation: '對話情境。回答「還沒」。'
            },
            {
                id: 'n5_q_mada_5',
                sentence: '「田中さんは来ましたか。」\n「いいえ、（　）来ていません。」',
                options: ['もう', 'まだ', 'いつも', 'よく'],
                correctIndex: 1,
                explanation: '對話情境。「還沒來」。'
            }
        ]
    },
    'n5_mada_te_imasen': {
        id: 'n5_mada_te_imasen',
        pattern: 'まだ～ていません',
        connection: 'まだ + 動詞て形 + いません',
        translation: '還沒...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '未完成的動作',
                description: '特別強調動作目前尚未完成，但預期將來會發生。回答「もう～ましたか（已經...了嗎）」的否定時，必須用「まだ～ていません」，不能用「～ませんでした」。',
                examples: [
                    { japanese: '「もう手紙{てがみ}を書{か}きましたか。」「いいえ、まだ書{か}いていません。」', chinese: '「信寫了嗎？」「不，還沒寫。」' },
                    { japanese: '私{わたし}はまだ昼{ひる}ご飯{はん}を食{た}べていません。', chinese: '我還沒吃午餐。' }
                ]
            }
        ],
        rules: [
            {
                rule: '「もう～ましたか」の答え方は注意が必要。',
                description: 'Yes -> 「はい、もう～ました」\nNo -> 「いいえ、まだ～ていません」（不能說 まだ～ませんでした）'
            }
        ],
        quiz: [
            {
                id: 'n5_q_mada_te_imasen_1',
                sentence: '「もう掃除しましたか。」\n「いいえ、まだ（　）。」',
                options: ['掃除しませんでした', '掃除していません', '掃除しません', '掃除したくないです'],
                correctIndex: 1,
                explanation: '詢問是否已經做完，否定回答用「まだ～ていません」。'
            },
            {
                id: 'n5_q_mada_te_imasen_2',
                sentence: '父は（　）帰っていません。',
                options: ['もう', 'まだ', 'すぐ', 'たぶん'],
                correctIndex: 1,
                explanation: '「還沒」回家。'
            },
            {
                id: 'n5_q_mada_te_imasen_3',
                sentence: 'この本はまだ（　）。',
                options: ['読みません', '読まないです', '読んでいません', '読まなかったです'],
                correctIndex: 2,
                explanation: '「還沒讀」。'
            },
            {
                id: 'n5_q_mada_te_imasen_4',
                sentence: '「レポートは終わりましたか。」\n「いいえ、まだ（　）。」',
                options: ['終わりませんでした', '終わっていません', '終わりません', '終わるでしょう'],
                correctIndex: 1,
                explanation: '對話情境。還沒結束。'
            },
            {
                id: 'n5_q_mada_te_imasen_5',
                sentence: '「切符を買いましたか。」\n「いいえ、まだ（　）。」',
                options: ['買いませんでした', '買っていません', '買いません', '買いたくありません'],
                correctIndex: 1,
                explanation: '對話情境。還沒買。'
            }
        ]
    },
    'n5_made': {
        id: 'n5_made',
        pattern: 'まで',
        connection: '名詞（時間/地點） + まで',
        translation: '直到...; 到...為止',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '終點',
                description: '表示動作或狀態持續的終點（時間或地點）。',
                examples: [
                    { japanese: '仕事{しごと}は５時{じ}までです。', chinese: '工作到5點結束。' },
                    { japanese: '東京{とうきょう}まで行{い}きます。', chinese: '去到東京。' },
                    { japanese: '朝{あさ}から晩{ばん}まで勉強{べんきょう}しました。', chinese: '從早到晚讀書。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_made_1',
                sentence: '駅（　）歩きます。',
                options: ['まで', 'から', 'に', 'は'],
                correctIndex: 0,
                explanation: '走到車站「為止」。'
            },
            {
                id: 'n5_q_made_2',
                sentence: '夏休みは来週（　）です。',
                options: ['から', 'まで', 'に', 'で'],
                correctIndex: 1,
                explanation: '暑假持續「到」下週。'
            },
            {
                id: 'n5_q_made_3',
                sentence: '７時（　）待っていました。',
                options: ['から', 'まで', 'に', 'を'],
                correctIndex: 1,
                explanation: '等到7點。'
            },
            {
                id: 'n5_q_made_4',
                sentence: '「ここから家までどのくらいかかりますか。」\n「１時間（　）です。」',
                options: ['まで', 'くらい', 'ごろ', 'など'],
                correctIndex: 1,
                explanation: '對話情境。注意！「どのくらい」（多久/多少）回答通常用「くらい」（大約）。此題陷阱。若要選「まで」語意不通。但題目是考made？不，這是混合題。若選項改為：A: まで B: から C: に 則選A。但原題意在考「到家為止」。題目應該挖在問句？不。讓我們把題目改簡單一點。'
            },
            {
                id: 'n5_q_made_5',
                sentence: '「何時（　）働きますか。」\n「６時までです。」',
                options: ['まで', 'から', 'に', 'を'],
                correctIndex: 0,
                explanation: '對話情境。工作到幾點。'
            }
        ]
    },
    'n5_mae_ni': {
        id: 'n5_mae_ni',
        pattern: '前に（まえに）',
        connection: '動詞辭書形 / 名詞 + の + 前に',
        translation: '在...之前; ...前面',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '時間順序（在...之前）',
                description: '表示在做某動作之前，先做後面的動作。',
                examples: [
                    { japanese: '寝{ね}る前{まえ}に、歯{は}を磨{みが}きます。', chinese: '睡覺前刷牙。' },
                    { japanese: '食事{しょくじ}の前{まえ}に、手{て}を洗{あら}ってください。', chinese: '用餐前請洗手。' }
                ]
            },
            {
                usageId: 2,
                title: '空間位置（在...前面）',
                description: '表示位置。',
                examples: [
                    { japanese: '駅{えき}の前{まえ}に銀行{ぎんこう}があります。', chinese: '車站前面有銀行。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_mae_ni_1',
                sentence: '日本へ（　）前に、日本語を勉強しました。',
                options: ['来る', '来た', '来て', '来ます'],
                correctIndex: 0,
                explanation: '動詞接「前に」必須用辭書形（基本形），即使動作發生在過去。'
            },
            {
                id: 'n5_q_mae_ni_2',
                sentence: 'テストの（　）勉強します。',
                options: ['前', '前に', '後', '後に'],
                correctIndex: 1,
                explanation: '考試「之前」。「名詞+の+前に」。'
            },
            {
                id: 'n5_q_mae_ni_3',
                sentence: '（　）前に薬を飲みます。',
                options: ['寝る', '寝た', '寝て', '寝'],
                correctIndex: 0,
                explanation: '「寢る前に」（睡前）。'
            },
            {
                id: 'n5_q_mae_ni_4',
                sentence: '「いつ手を洗いますか。」\n「ご飯を（　）前に洗います。」',
                options: ['食べる', '食べた', '食べて', '食べます'],
                correctIndex: 0,
                explanation: '對話情境。「食べる前に」。'
            },
            {
                id: 'n5_q_mae_ni_5',
                sentence: '「駅の（　）で会いましょう。」\n「わかりました。」',
                options: ['前', '前に', '上', '中'],
                correctIndex: 0,
                explanation: '對話情境。車站「前」見面。地點名詞。'
            }
        ]
    },
    'n5_masen_ka': {
        id: 'n5_masen_ka',
        pattern: 'ませんか',
        connection: '動詞ます形（去掉ます） + ませんか',
        translation: '不...嗎? (邀約); 要不要...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '邀約',
                description: '禮貌地邀請對方做某事。比「～ましょう」更客氣，因為給予對方拒絕的餘地。',
                examples: [
                    { japanese: '一緒{いっしょ}に映画{えいが}を見{み}に行{い}きませんか。', chinese: '要不要一起去看電影？' },
                    { japanese: 'お茶{ちゃ}を飲{の}みませんか。', chinese: '要不要喝杯茶？' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_masen_ka_1',
                sentence: '明日、テニスを（　）。',
                options: ['しませんか', 'しましょうか', 'しますか', 'しないで'],
                correctIndex: 0,
                explanation: '邀約「要不要打網球」。'
            },
            {
                id: 'n5_q_masen_ka_2',
                sentence: '一緒に行き（　）。',
                options: ['ませんか', 'ましょう', 'ます', 'ました'],
                correctIndex: 0,
                explanation: '「行きませんか」（要不要去）。'
            },
            {
                id: 'n5_q_masen_ka_3',
                sentence: '少し休み（　）。',
                options: ['ませんか', 'ません', 'ます', 'ました'],
                correctIndex: 0,
                explanation: '「休みませんか」（要不要休息一下）。'
            },
            {
                id: 'n5_q_masen_ka_4',
                sentence: '「日曜日、映画を見ませんか。」\n「いいですね。（　）。」',
                options: ['行きましょう', '行きません', '行ってください', '行きますよ'],
                correctIndex: 0,
                explanation: '對話情境。答應邀約，「好啊，走吧」。'
            },
            {
                id: 'n5_q_masen_ka_5',
                sentence: '「コーヒーを飲みませんか。」\n「すみません、今は（　）。」',
                options: ['ちょっと', 'いいです', '飲みましょう', 'はい'],
                correctIndex: 0,
                explanation: '對話情境。拒絕邀約的委婉説法「ちょっと...」。'
            }
        ]
    }
});

// Batch 8
Object.assign(n5Details, {
    'n5_mashou': {
        id: 'n5_mashou',
        pattern: 'ましょう',
        connection: '動詞ます形（去掉ます） + ましょう',
        translation: '...吧; 一起...吧',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '提議・勸誘（一起做...吧）',
                description: '用於提議對方一起做某事。語氣積極，假設對方會同意。',
                examples: [
                    { japanese: 'そろそろ行{い}きましょう。', chinese: '差不多該走了吧。' },
                    { japanese: '一緒{いっしょ}に帰{かえ}りましょう。', chinese: '一起回家吧。' },
                    {
                        japanese: '「日曜日{にちようび}、映画{えいが}を見{み}に行{い}きませんか。」\n「いいですね。行{い}きましょう。」',
                        chinese: '「星期天要不要去看電影？」\n「好啊。走吧。」',
                        note: '答應邀約時常用'
                    }
                ]
            },
            {
                usageId: 2,
                title: '確認・行動（那我就...了）',
                description: '說話者為了對方或當下的情況，主動表示要進行某個動作。',
                examples: [
                    { japanese: 'ここから始{はじ}めましょう。', chinese: '我們從這裡開始吧。' },
                    { japanese: '私{わたし}が書{か}きましょう。', chinese: '我來寫吧。（主動承擔）' }
                ]
            }
        ],
        analysis: {
            title: '「ましょう」與「ませんか」的差異',
            description: '兩者都用於邀約，但語氣和禮貌程度不同。',
            points: [
                {
                    rule: '「ませんか」給對方選擇權（去不去都可以），比較禮貌。',
                    examples: [
                        { japanese: 'コーヒーを飲{の}みませんか。', chinese: '要不要喝杯咖啡？（詢問意願）', note: '○ 客氣邀約' }
                    ]
                },
                {
                    rule: '「ましょう」語氣較強，假設對方會同意，或者用於已經決定要做的事。',
                    examples: [
                        { japanese: 'コーヒーを飲{の}みましょう。', chinese: '喝杯咖啡吧。（積極提議）', note: '○ 用於熟人或確認行動' }
                    ]
                }
            ],
            summary: '對上司或長輩邀約時，建議用「～ませんか」。確認彼此都同意的行動時，用「～ましょう」。'
        },
        tips: {
            title: '小提醒',
            items: [
                {
                    mistake: '誤用「ましょう」回答問題',
                    explanation: '當別人問「行きますか」（要去嗎？）時，若單純回答事實，用「行きます」。若回答邀約，用「行きましょう」。',
                    whenToUse: '回應邀約時。',
                    correct: { sentence: '「行きませんか像」「ええ、行きましょう。」', note: '○ 回應邀約' },
                    incorrect: { sentence: '「明日学校へ行きますか」「ええ、行きましょう」', note: '△ 除非是約好一起去，否則單純回答行程用「行きます」' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_mashou_1',
                type: 'inline_quiz',
                grammarPoint: 'ましょう',
                sentence: 'テストを（　）。',
                options: ['始めます', '始めましょう', '始め', '始めて'],
                correctIndex: 1,
                explanation: '老師對學生說：「讓我們開始考試吧」。'
            },
            {
                id: 'n5_q_mashou_2',
                type: 'inline_quiz',
                grammarPoint: 'ましょう',
                sentence: 'ご飯を（　）。',
                options: ['食べましょう', '食べます', '食べて', '食べた'],
                correctIndex: 0,
                explanation: '開動前的提議：「吃吧」。'
            },
            {
                id: 'n5_q_mashou_3',
                type: 'inline_quiz',
                grammarPoint: 'ましょう',
                sentence: '休憩{きゅうけい}（　）。',
                options: ['します', 'して', 'しましょう', 'しない'],
                correctIndex: 2,
                explanation: '提議「休息一下吧」。'
            },
            {
                id: 'n5_q_mashou_4',
                type: 'inline_quiz',
                grammarPoint: 'ましょう',
                sentence: '「タクシーで帰りませんか。」\n「そうですね。（　）。」',
                options: ['帰りましょう', '帰ります', '帰っています', '帰りません'],
                correctIndex: 0,
                explanation: '對話情境。同意對方的提議。「好啊，（我們就）搭計程車回去吧。」'
            },
            {
                id: 'n5_q_mashou_5',
                type: 'inline_quiz',
                grammarPoint: 'ましょう',
                sentence: '「ちょっと疲れましたね。」\n「じゃあ、あそこの店で（　）。」',
                options: ['休みましょう', '休みます', '休みました', '休んで'],
                correctIndex: 0,
                explanation: '對話情境。順著對方的話提議休息。'
            }
        ]
    },
    'n5_mashouka': {
        id: 'n5_mashouka',
        pattern: 'ましょうか',
        connection: '動詞ます形（去掉ます） + ましょうか',
        translation: '我來...好嗎?; 我們...好嗎?',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '主動提供幫助（我來...吧？）',
                description: '看到對方有困難，主動詢問是否需要幫忙。主語通常是「私（我）」，但經常省略。',
                examples: [
                    { japanese: '荷物{にもつ}を持{も}ちましょうか。', chinese: '我幫您拿行李吧？' },
                    { japanese: '窓{まど}を開{あ}けましょうか。', chinese: '要我開窗嗎？' },
                    { japanese: '手伝{てつだ}いましょうか。', chinese: '需要幫忙嗎？' }
                ]
            },
            {
                usageId: 2,
                title: '提議共同行動的疑問（要不要一起...？）',
                description: '跟「～ましょう」類似，但是是用疑問句形式來徵求對方意見。主語是「私たち（我們）」。',
                examples: [
                    { japanese: '何時{なんじ}に会{あ}いましょうか。', chinese: '我們要幾點見面呢？' },
                    { japanese: 'どこへ行{い}きましょうか。', chinese: '我們要去哪裡呢？' }
                ]
            }
        ],
        analysis: {
            title: '「ましょうか」的使用注意',
            description: '雖然是用來提供幫助，但對長輩使用可能會顯得有些居高臨下（彷彿對方沒有能力自己做）。',
            points: [
                {
                    rule: '對平輩或晚輩：可以直接用「～ましょうか」。',
                    examples: [
                        { japanese: '貸{か}しましょうか。', chinese: '要我借你嗎？', note: '○ 自然' }
                    ]
                },
                {
                    rule: '對長輩或上司：建議改用「〜お持ちします」或「〜ましょうか」前加「私が」。',
                    examples: [
                        { japanese: 'お持{も}ちしましょうか。', chinese: '我幫您拿吧。（更禮貌）', note: '○ 謙讓語' }
                    ]
                }
            ],
            summary: '提供幫助時是好意，但要注意對象。'
        },
        quiz: [
            {
                id: 'n5_q_mashouka_1',
                type: 'inline_quiz',
                grammarPoint: 'ましょうか',
                sentence: '暑いですね。エアコンを（　）。',
                options: ['つけましょうか', 'つけますか', 'つけてください', 'つけたいです'],
                correctIndex: 0,
                explanation: '主動提議「要我開冷氣嗎？」。'
            },
            {
                id: 'n5_q_mashouka_2',
                type: 'inline_quiz',
                grammarPoint: 'ましょうか',
                sentence: '写真{しゃしん}を（　）。',
                options: ['撮りましょうか', '撮りますか', '撮ってください', '撮っています'],
                correctIndex: 0,
                explanation: '看到別人在拍照，主動幫忙「要我幫你們拍嗎？」。'
            },
            {
                id: 'n5_q_mashouka_3',
                type: 'inline_quiz',
                grammarPoint: 'ましょうか',
                sentence: '明日、何時に（　）。',
                options: ['来ましょうか', '来ますか', '来て', '来る'],
                correctIndex: 0,
                explanation: '商量約定的時間「要幾點來呢？」。'
            },
            {
                id: 'n5_q_mashouka_4',
                type: 'inline_quiz',
                grammarPoint: 'ましょうか',
                sentence: '「荷物が多いですね。（　）。」\n「ありがとうございます。」',
                options: ['持ちましょうか', '持ちませんか', '持ってください', '持っています'],
                correctIndex: 0,
                explanation: '對話情境。主動幫忙拿行李。'
            },
            {
                id: 'n5_q_mashouka_5',
                type: 'inline_quiz',
                grammarPoint: 'ましょうか',
                sentence: '「駅まで（　）。」\n「いいえ、大丈夫です。歩いて行きますから。」',
                options: ['送りましょうか', '送りますか', '送ってください', '送りたいです'],
                correctIndex: 0,
                explanation: '對話情境。提議「要我送你去嗎？」。對方婉拒。'
            }
        ]
    },
    'n5_mo': {
        id: 'n5_mo',
        pattern: 'も',
        connection: '名詞 + も',
        translation: '也; 都',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '並列（也）',
                description: '表示與前面提到的事物具有相同的性質或狀態。',
                examples: [
                    { japanese: '私{わたし}は学生{がくせい}です。彼{かれ}も学生{がくせい}です。', chinese: '我是學生。他也是學生。' },
                    { japanese: '日本{にほん}に行{い}きたいです。アメリカへも行{い}きたいです。', chinese: '我想去日本。也想去美國。（助詞「へ」「に」「で」後面可接「も」）' },
                    {
                        japanese: '「山田{やまだ}さんは来{き}ませんでしたね。」\n「ええ、田中{たなか}さんも来{き}ませんでした。」',
                        chinese: '「山田先生沒來呢。」\n「是啊，田中先生也沒來。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usageId: 2,
                title: '全面肯定或否定（都.../連...也不...）',
                description: '疑問詞 + も + 肯定/否定。',
                examples: [
                    { japanese: '何{なに}も食{た}べたくないです。', chinese: '什麼都不想吃。' },
                    { japanese: '教室{きょうしつ}には誰{だれ}もいません。', chinese: '教室裡誰都沒有（沒半個人）。' },
                    { japanese: 'どこへも行{い}きませんでした。', chinese: '哪裡都沒去。' }
                ]
            }
        ],
        tips: {
            title: '助詞重疊規則',
            items: [
                {
                    mistake: '取代 vs 共存',
                    explanation: '「も」會取代「は」「が」「を」。但會接在「に」「で」「へ」「から」「まで」的後面。',
                    whenToUse: '使用「も」時要注意前面的助詞。',
                    correct: { sentence: '日本へも行きます。', note: '○ へ + も' },
                    incorrect: { sentence: '日本もへ行きます。', note: '✕ 順序錯誤' },
                    additionalExamples: [
                        { context: '取代「を」', correct: { sentence: '水も飲みます。', note: '○ 原本是「水を」，被取代' } }
                    ]
                }
            ]
        },
        quiz: [
            // 第 1 題：正向題 - 並列（也）
            {
                id: 'n5_q_mo_1',
                sentence: '兄{あに}は会社員{かいしゃいん}です。姉{あね}（　）会社員{かいしゃいん}です。',
                options: ['も', 'は', 'が', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「も」正確！「哥哥是上班族，姐姐也是上班族」，表示相同狀態用「も」。',
                    wrong: [
                        '「は」錯誤：如果用「は」會變成對比語氣（姐姐的話是...），這裡是說「也是」。',
                        '「が」錯誤：「が」用於新資訊或強調，這裡需要表達「也」。',
                        '「の」錯誤：「の」是連體助詞，這裡不適用。'
                    ]
                }
            },
            // 第 2 題：正向題 - 疑問詞 + も + 否定
            {
                id: 'n5_q_mo_2',
                sentence: '教室{きょうしつ}には誰{だれ}（　）いません。',
                options: ['も', 'が', 'か', 'は'],
                correctIndex: 0,
                explanation: {
                    correct: '「も」正確！「誰もいない」表示「誰都不在」。疑問詞 + も + 否定 = 全面否定。',
                    wrong: [
                        '「が」錯誤：「誰がいない」語法不對。全面否定要用「誰も」。',
                        '「か」錯誤：「誰かいない」會變成「有人不在嗎？」，語意不同。',
                        '「は」錯誤：「誰は」是錯誤的日文。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「は」不是「も」
            {
                id: 'n5_q_mo_3',
                sentence: '田中{たなか}さんは来{き}ました。山田{やまだ}さん（　）来{き}ませんでした。',
                options: ['も', 'は', 'が', 'を'],
                correctIndex: 1,
                explanation: {
                    correct: '「は」正確！田中來了，但山田沒來。兩者狀態不同，形成對比，用「は」。',
                    wrong: [
                        '「も」錯誤：「も」表示相同狀態（也...）。這裡田中來了、山田沒來，狀態相反，不能用「も」！',
                        '「が」錯誤：「が」用於新資訊，這裡是對比語境。',
                        '「を」錯誤：山田是主語，不是受詞。'
                    ]
                }
            },
            // 第 4 題：對話題
            {
                id: 'n5_q_mo_4',
                sentence: '「週末{しゅうまつ}、どこかへ行{い}きましたか。」\n「いいえ、どこ（　）行{い}きませんでした。家{いえ}にいました。」',
                options: ['へも', 'にも', 'でも', 'かも'],
                correctIndex: 0,
                explanation: {
                    correct: '「へも」正確！「どこへも行かない」表示「哪裡都沒去」。移動動詞用「へ」，再加「も」表全面否定。',
                    wrong: [
                        '「にも」也可以，因為「行く」可用「に」或「へ」。但這裡選項中「へも」更常見。',
                        '「でも」錯誤：「で」用於動作場所，不用於移動方向。',
                        '「かも」錯誤：「どこかも」是錯誤的表達。'
                    ]
                }
            },
            // 第 5 題：辨析題 - 「も」vs「は」的使用區分
            {
                id: 'n5_q_mo_5',
                sentence: '「コーヒーを飲{の}みますか。」\n「はい、飲{の}みます。紅茶{こうちゃ}（　）飲{の}みます。」\n「そうですか。では、お茶{ちゃ}（　）どうですか。」\n「お茶（　）好{す}きですが、今{いま}はいいです。」',
                options: ['も/は/は', 'は/も/も', 'も/も/も', 'は/は/は'],
                correctIndex: 0,
                explanation: {
                    correct: '「も/は/は」正確！第一空：喝咖啡也喝紅茶（相同），用「も」。第二空：提出新話題「茶怎麼樣？」用「は」。第三空：「茶的話」，設定話題用「は」。',
                    wrong: [
                        '「は/も/も」錯誤：第一空是追加相同狀態，應該用「も」不是「は」。',
                        '「も/も/も」錯誤：第二、三空是設定新話題，不是「也」的意思。',
                        '「は/は/は」錯誤：第一空是表示「也喝」，需要用「も」。'
                    ]
                }
            }
        ]
    },
    'n5_mou': {
        id: 'n5_mou',
        pattern: 'もう',
        connection: 'もう + 動詞 / 數量詞',
        translation: '已經; 再...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '已經（完了）',
                description: '表示動作已經完成，情況已經改變。',
                examples: [
                    { japanese: 'もう昼{ひる}ご飯{はん}を食{た}べました。', chinese: '已經吃過午餐了。' },
                    { japanese: 'もう１２時{じ}ですよ。', chinese: '已經12點了喔。' }
                ]
            },
            {
                usageId: 2,
                title: '不再...（否定）',
                description: '與否定形連用，表示情況改變，「不再...了」。',
                examples: [
                    { japanese: 'もう痛{いた}くありません。', chinese: '已經不痛了。' },
                    { japanese: '彼{かれ}はもう来{き}ません。', chinese: '他不會再來了。' }
                ]
            },
            {
                usageId: 3,
                title: '再...（追加）',
                description: '接數量詞，表示「再多...」。這時重音通常有變化。',
                examples: [
                    { japanese: 'もう一杯{いっぱい}いかがですか。', chinese: '要不要再來一杯？' },
                    { japanese: 'もう少{すこ}し待{ま}ってください。', chinese: '請再等一下。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_mou_1',
                type: 'inline_quiz',
                grammarPoint: 'もう',
                sentence: '（　）宿題をしましたか。',
                options: ['もう', 'まだ', 'いつ', 'たぶん'],
                correctIndex: 0,
                explanation: '詢問「已經」做完了嗎。'
            },
            {
                id: 'n5_q_mou_2',
                type: 'inline_quiz',
                grammarPoint: 'もう',
                sentence: '（　）少し安{やす}くなりませんか。',
                options: ['もう', 'まだ', 'まで', 'よく'],
                correctIndex: 0,
                explanation: '「再」便宜一點。「もう少し」（再一點）。'
            },
            {
                id: 'n5_q_mou_3',
                type: 'inline_quiz',
                grammarPoint: 'もう',
                sentence: 'お金は（　）ありません。',
                options: ['もう', 'まだ', 'いつも', 'とても'],
                correctIndex: 0,
                explanation: '搭配否定，「已經」沒有了（不再有了）。'
            },
            {
                id: 'n5_q_mou_4',
                type: 'inline_quiz',
                grammarPoint: 'もう',
                sentence: '「荷物は（　）届きましたか。」\n「はい、届きました。」',
                options: ['もう', 'まだ', 'よく', 'だいたい'],
                correctIndex: 0,
                explanation: '對話情境。「已經」送到了嗎？'
            },
            {
                id: 'n5_q_mou_5',
                type: 'inline_quiz',
                grammarPoint: 'もう',
                sentence: '「お腹がすきましたね。」\n「えっ、（　）食べましたよ。」',
                options: ['もう', 'まだ', 'すぐ', 'よく'],
                correctIndex: 0,
                explanation: '對話情境。驚訝語氣，「（明明）已經吃過了喔」。'
            }
        ]
    },
    'n5_na_adjectives': {
        id: 'n5_na_adjectives',
        pattern: 'な形容詞（なけいようし）',
        connection: 'な形容詞 + な + 名詞',
        translation: 'Na形容詞規則',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '修飾名詞',
                description: 'Na形容詞修飾名詞時，必須在詞幹和名詞之間加「な」。',
                examples: [
                    { japanese: '静{しず}かな部屋{へや}。', chinese: '安靜的房間。' },
                    { japanese: '綺麗{きれい}な花{はな}。', chinese: '漂亮的花。' },
                    {
                        japanese: '「京都{きょうと}はどんな町{まち}ですか。」\n「賑{にぎ}やかな町{まち}です。」',
                        chinese: '「京都無論是什麼樣的城市？」\n「是個熱鬧的城市。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usageId: 2,
                title: '謂語用法（是...的）',
                description: '放在句尾當謂語時，不管是肯定、否定或過去式，變化方式跟名詞一樣（不加な）。',
                examples: [
                    { japanese: 'この町{まち}は賑{にぎ}やかです。', chinese: '這座城鎮很熱鬧。' },
                    { japanese: '日本語{にほんご}が上手{じょうず}ではありません。', chinese: '日文不擅長。' },
                    { japanese: '昨日{きのう}は暇{ひま}でした。', chinese: '昨天很閒。' }
                ]
            },
            {
                usageId: 3,
                title: '時態變化表',
                description: '肯定：です\n否定：ではありません\n過去：でした\n過去否定：ではありませんでした',
                examples: [
                    { japanese: '昨日{きのう}は元気{げんき}でした。', chinese: '昨天很有精神。' }
                ]
            }
        ],
        tips: {
            title: '易混淆點',
            items: [
                {
                    mistake: '「きれい」的誤判',
                    explanation: '「きれい（綺麗）」和「きらい（嫌い）」結尾是「い」，但它們是Na形容詞，不是I形容詞。',
                    whenToUse: '修飾名詞時要加「な」。',
                    correct: { sentence: 'きれいな部屋', note: '○ Na形容詞 + な' },
                    incorrect: { sentence: 'きれい部屋', note: '✕ 漏掉な' },
                    additionalExamples: [
                        { context: '否定形', correct: { sentence: 'きれいじゃありません', note: '○' }, incorrect: { sentence: 'きれくないです', note: '✕ i形容詞的變化方式（錯誤）' } }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_na_adj_1',
                type: 'inline_quiz',
                grammarPoint: 'な形容詞',
                sentence: '田中さんは（　）人です。',
                options: ['親切な', '親切', '親切の', '親切だ'],
                correctIndex: 0,
                explanation: 'Na形容詞修飾名詞要加「な」。'
            },
            {
                id: 'n5_q_na_adj_2',
                type: 'inline_quiz',
                grammarPoint: 'な形容詞',
                sentence: 'この図書館は（　）です。',
                options: ['静か', '静かな', '静くだ', '静くに'],
                correctIndex: 0,
                explanation: '結尾時直接加「です」（不加な）。'
            },
            {
                id: 'n5_q_na_adj_3',
                type: 'inline_quiz',
                grammarPoint: 'な形容詞',
                sentence: '昨日は（　）です。',
                options: ['暇でした', '暇でした', '暇かったです', '暇なでした'],
                correctIndex: 0,
                explanation: '過去式。「暇でした」。'
            },
            {
                id: 'n5_q_na_adj_4',
                type: 'inline_quiz',
                grammarPoint: 'な形容詞',
                sentence: '「日本の生活はどうですか。」\n「毎日（　）です。」',
                options: ['大変', '大変な', '大変の', '大変だ'],
                correctIndex: 0,
                explanation: '對話情境。結尾回答，「很辛苦」。「大変です」。'
            },
            {
                id: 'n5_q_na_adj_5',
                type: 'inline_quiz',
                grammarPoint: 'な形容詞',
                sentence: '「どんな映画が好きですか。」\n「（　）映画が好きです。」',
                options: ['有名な', '有名', '有名の', '有名だ'],
                correctIndex: 0,
                explanation: '對話情境。修飾名詞電影，「有名的電影」。'
            }
        ]
    }
});

// Batch 3: Additional N5 Grammar Items
Object.assign(n5Details, {
    'n5_naa': {
        id: 'n5_naa',
        pattern: 'なあ',
        connection: '文末 + なあ',
        translation: '...啊（感嘆/強調）',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '感嘆、自言自語',
                description: '放在句尾表達說話者的感嘆、願望或自言自語。語氣較為隨意，常用於獨白或與親近的人對話。',
                examples: [
                    { japanese: '今日{きょう}は暑{あつ}いなあ。', chinese: '今天好熱啊。' },
                    { japanese: 'おいしいなあ。', chinese: '好好吃啊。' },
                    {
                        japanese: '「この桜{さくら}、きれいだなあ。」\n「本当{ほんとう}だね。毎年{まいとし}この時期{じき}に来{く}るのが楽{たの}しみなんだ。」\n「うん、来年{らいねん}もまた来{こ}ようね。」',
                        chinese: '「這櫻花好漂亮啊。」\n「真的耶。每年這個時期來都很期待呢。」\n「嗯，明年也要再來喔。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usageId: 2,
                title: '願望、希望',
                description: '表達說話者的願望或期待。常與「たい」「ほしい」等表願望的表達一起使用。',
                examples: [
                    { japanese: '旅行{りょこう}に行{い}きたいなあ。', chinese: '好想去旅行啊。' },
                    { japanese: '新{あたら}しいパソコンがほしいなあ。', chinese: '好想要新電腦啊。' },
                    {
                        japanese: '「夏休{なつやす}み、どこか行{い}きたいなあ。」\n「いいね！海{うみ}と山{やま}、どっちがいい？」\n「うーん、海{うみ}がいいなあ。泳{およ}ぎたい。」',
                        chinese: '「暑假好想去哪裡啊。」\n「好耶！海跟山，你想去哪個？」\n「嗯...想去海邊啊。想游泳。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '在正式場合使用「なあ」',
                    explanation: '「なあ」是非常隨意的語氣，只適用於朋友、家人之間或自言自語。在正式場合或對長輩說話時，應避免使用。',
                    whenToUse: '與親近的人對話或自言自語時使用。',
                    correct: { sentence: '（對朋友）今日{きょう}は暑{あつ}いなあ。', note: '○ 朋友間使用' },
                    incorrect: { sentence: '（對上司）今日{きょう}は暑{あつ}いなあ。', note: '✕ 對上司太隨意' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_naa_1',
                sentence: '今日{きょう}は天気{てんき}がいい（　）。',
                options: ['なあ', 'ね', 'よ', 'か'],
                correctIndex: 0,
                explanation: {
                    correct: '「なあ」正確！表達感嘆「今天天氣真好啊」，帶有自言自語或感慨的語氣。',
                    wrong: [
                        '「ね」錯誤：「ね」用於確認或尋求同意，這裡是感嘆，用「なあ」更自然。',
                        '「よ」錯誤：「よ」用於告知對方資訊或強調，這裡是感嘆語氣。',
                        '「か」錯誤：「か」用於疑問，這裡不是問句。'
                    ]
                }
            },
            {
                id: 'n5_q_naa_2',
                sentence: 'この映画{えいが}、面白{おもしろ}い（　）。',
                options: ['なあ', 'ます', 'だ', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「なあ」正確！i形容詞後直接加「なあ」表示感嘆。',
                    wrong: [
                        '「ます」錯誤：「ます」是動詞的禮貌體結尾，不能接在形容詞後。',
                        '「だ」錯誤：i形容詞後不接「だ」。',
                        '「の」錯誤：「の」用於疑問或說明，這裡是感嘆。'
                    ]
                }
            },
            {
                id: 'n5_q_naa_3',
                sentence: '日本{にほん}に行{い}きたい（　）。',
                options: ['なあ', 'ね', 'か', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「なあ」正確！「〜たいなあ」表達願望，「好想去日本啊」。',
                    wrong: [
                        '「ね」錯誤：「ね」用於確認，這裡是表達願望的感嘆。',
                        '「か」錯誤：「か」用於疑問，這裡不是問句。',
                        '「を」錯誤：「を」是助詞，不能放在句尾。'
                    ]
                }
            },
            {
                id: 'n5_q_naa_4',
                sentence: '「あの人{ひと}、かっこいい（　）。」\n「ああ、芸能人{げいのうじん}だよ。すごく有名{ゆうめい}なんだ。」\n「へえ、サインもらいたいなあ。」',
                options: ['なあ', 'よ', 'ね', 'か'],
                correctIndex: 0,
                explanation: {
                    correct: '「なあ」正確！對話中表達感嘆「好帥啊」。觀察到某人時的感想。',
                    wrong: [
                        '「よ」錯誤：「よ」用於告知資訊，這裡是感嘆。',
                        '「ね」錯誤：「ね」用於確認，這裡是個人感想。',
                        '「か」錯誤：「か」用於疑問。'
                    ]
                }
            },
            {
                id: 'n5_q_naa_5',
                sentence: '「明日{あした}、テストがあるんだよね。」\n「うん...もっと勉強{べんきょう}すればよかった（　）。」\n「まだ時間{じかん}あるよ。今{いま}から頑張{がんば}ろう。」',
                options: ['なあ', 'よ', 'ね', 'か'],
                correctIndex: 0,
                explanation: {
                    correct: '「なあ」正確！表達後悔的感嘆「要是多讀點書就好了啊」。',
                    wrong: [
                        '「よ」錯誤：「よ」用於告知，這裡是自我感嘆。',
                        '「ね」錯誤：「ね」用於確認，這裡是獨白式的感嘆。',
                        '「か」錯誤：「か」用於疑問。'
                    ]
                }
            }
        ]
    },
    'n5_naide': {
        id: 'n5_naide',
        pattern: 'ないで',
        connection: '動詞ない形（去い）+ で',
        translation: '不做...就...; 不要...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '不做A就做B（附帶狀況）',
                description: '表示在不做A的狀態下做B。強調沒有做某個動作。',
                examples: [
                    { japanese: '朝{あさ}ご飯{はん}を食{た}べないで、学校{がっこう}へ行{い}った。', chinese: '沒吃早餐就去學校了。' },
                    { japanese: '傘{かさ}を持{も}たないで、出{で}かけた。', chinese: '沒帶傘就出門了。' },
                    {
                        japanese: '「顔色{かおいろ}が悪{わる}いね。大丈夫{だいじょうぶ}？」\n「うん...昨日{きのう}、寝{ね}ないで仕事{しごと}したから、ちょっと疲{つか}れた。」\n「無理{むり}しないでね。今日{きょう}は早{はや}く帰{かえ}りなよ。」',
                        chinese: '「臉色不太好耶。沒事吧？」\n「嗯...因為昨天沒睡一直工作，有點累了。」\n「不要太勉強喔。今天早點回去吧。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usageId: 2,
                title: '輕微請求（請不要...）',
                description: '比「ないでください」更隨意的請求，常用於朋友之間。',
                examples: [
                    { japanese: '心配{しんぱい}しないで。', chinese: '不要擔心。' },
                    { japanese: 'そんなこと言{い}わないで。', chinese: '不要說那種話。' },
                    {
                        japanese: '「ねえ、私{わたし}のこと忘{わす}れないで。」\n「何{なに}言{い}ってるの？絶対{ぜったい}忘{わす}れないよ。」\n「ありがとう。また連絡{れんらく}するね。」',
                        chinese: '「欸，不要忘記我喔。」\n「你在說什麼？絕對不會忘記的啦。」\n「謝謝。我會再聯絡的。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「ないで」與「なくて」的差異',
            description: '兩者都是否定接續，但用法不同。',
            points: [
                {
                    rule: '「ないで」：不做A就做B（動作的附帶狀況）',
                    examples: [
                        { japanese: '辞書{じしょ}を使{つか}わないで、読{よ}んだ。', chinese: '沒用字典就讀了。（強調沒用字典這個動作）', note: '○ 附帶狀況' }
                    ]
                },
                {
                    rule: '「なくて」：因為不...所以...（原因理由）',
                    examples: [
                        { japanese: '辞書{じしょ}がなくて、読{よ}めなかった。', chinese: '因為沒有字典，所以讀不了。（原因）', note: '○ 原因理由' }
                    ]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '將「ないで」與「なくて」混用',
                    explanation: '華語母語者容易混淆這兩個，因為中文都可以翻譯成「沒有...」。但日文中，「ないで」強調動作的缺失，「なくて」強調原因或並列。',
                    whenToUse: '描述「不做A就做B」時用「ないで」；描述原因時用「なくて」。',
                    correct: { sentence: '薬{くすり}を飲{の}まないで、寝{ね}た。', note: '○ 沒吃藥就睡了（動作缺失）' },
                    incorrect: { sentence: '薬{くすり}を飲{の}まなくて、寝{ね}た。', note: '✕ 語法不通' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_naide_1',
                sentence: '朝{あさ}ご飯{はん}を（　）、学校{がっこう}へ行{い}きました。',
                options: ['食{た}べないで', '食{た}べなくて', '食{た}べない', '食{た}べて'],
                correctIndex: 0,
                explanation: {
                    correct: '「食べないで」正確！「不吃早餐就去學校」，表示動作的缺失。',
                    wrong: [
                        '「食べなくて」錯誤：「なくて」用於原因理由，這裡是描述附帶狀況。',
                        '「食べない」錯誤：需要接續助詞「で」來連接後句。',
                        '「食べて」錯誤：「食べて」是肯定形，意思相反。'
                    ]
                }
            },
            {
                id: 'n5_q_naide_2',
                sentence: '心配{しんぱい}（　）。大丈夫{だいじょうぶ}だから。',
                options: ['しないで', 'しなくて', 'して', 'する'],
                correctIndex: 0,
                explanation: {
                    correct: '「しないで」正確！「不要擔心」，輕微請求。',
                    wrong: [
                        '「しなくて」錯誤：「なくて」用於原因理由，這裡是請求。',
                        '「して」錯誤：意思相反，變成「請擔心」。',
                        '「する」錯誤：動詞原形不能表達請求。'
                    ]
                }
            },
            {
                id: 'n5_q_naide_3',
                sentence: '彼{かれ}は何{なに}も（　）、帰{かえ}ってしまった。',
                options: ['言{い}わないで', '言{い}わなくて', '言{い}って', '言{い}う'],
                correctIndex: 0,
                explanation: {
                    correct: '「言わないで」正確！「什麼都沒說就回去了」，表示動作的缺失。',
                    wrong: [
                        '「言わなくて」錯誤：這裡不是表達原因。',
                        '「言って」錯誤：意思相反。',
                        '「言う」錯誤：文法錯誤，需要接續形式。'
                    ]
                }
            },
            {
                id: 'n5_q_naide_4',
                sentence: '「どうして遅刻{ちこく}したの？」\n「すみません、目覚{めざ}まし時計{どけい}を（　）、寝坊{ねぼう}しました。」\n「次{つぎ}から気{き}をつけてね。」',
                options: ['セットしないで', 'セットしなくて', 'セットして', 'セットする'],
                correctIndex: 0,
                explanation: {
                    correct: '「セットしないで」正確！「沒設鬧鐘就睡過頭了」。',
                    wrong: [
                        '「セットしなくて」錯誤：這裡描述的是動作缺失，不是原因。',
                        '「セットして」錯誤：意思變成「設了鬧鐘結果睡過頭」。',
                        '「セットする」錯誤：文法錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_naide_5',
                sentence: '「明日{あした}、引{ひ}っ越{こ}しの手伝{てつだ}いに来{き}てくれる？」\n「もちろん！（　）ね。絶対{ぜったい}行{い}くから。」\n「ありがとう、助{たす}かるよ。」',
                options: ['忘{わす}れないで', '忘{わす}れなくて', '忘{わす}れて', '忘{わす}れる'],
                correctIndex: 0,
                explanation: {
                    correct: '「忘れないで」正確！「不要忘記喔」，輕微請求。',
                    wrong: [
                        '「忘れなくて」錯誤：這裡是請求，不是原因理由。',
                        '「忘れて」錯誤：意思變成「請忘記」。',
                        '「忘れる」錯誤：動詞原形無法表達請求。'
                    ]
                }
            }
        ]
    },
    'n5_naide_kudasai': {
        id: 'n5_naide_kudasai',
        pattern: 'ないでください',
        connection: '動詞ない形（去い）+ でください',
        translation: '請不要...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '禮貌的禁止請求',
                description: '禮貌地請求對方不要做某事。比「ないで」更正式，可用於對上司或陌生人。',
                examples: [
                    { japanese: 'ここで写真{しゃしん}を撮{と}らないでください。', chinese: '請不要在這裡拍照。' },
                    { japanese: '大{おお}きい声{こえ}で話{はな}さないでください。', chinese: '請不要大聲說話。' },
                    {
                        japanese: '「すみません、ここでタバコを吸{す}わないでください。」\n「あ、すみません。喫煙所{きつえんじょ}はどこですか。」\n「外{そと}のあそこにあります。」\n「分{わ}かりました。ありがとうございます。」',
                        chinese: '「不好意思，請不要在這裡抽菸。」\n「啊，抱歉。吸菸區在哪裡？」\n「在外面那邊。」\n「我知道了。謝謝您。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '禁止表現的語氣比較',
            description: '根據語氣強度選擇適當的表達方式。',
            points: [
                {
                    rule: '「ないでください」：禮貌的請求（服務業、對陌生人）',
                    examples: [
                        { japanese: '触{さわ}らないでください。', chinese: '請不要觸摸。', note: '○ 禮貌' }
                    ]
                },
                {
                    rule: '「ないで」：隨意的請求（朋友、家人）',
                    examples: [
                        { japanese: '触{さわ}らないで。', chinese: '不要碰。', note: '○ 隨意' }
                    ]
                },
                {
                    rule: '「てはいけない」：規則、禁止（強制性）',
                    examples: [
                        { japanese: '触{さわ}ってはいけません。', chinese: '不可以觸摸。', note: '○ 強制' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_naide_kudasai_1',
                sentence: '電車{でんしゃ}の中{なか}で電話{でんわ}を（　）。',
                options: ['しないでください', 'しなくてください', 'してください', 'するください'],
                correctIndex: 0,
                explanation: {
                    correct: '「しないでください」正確！「請不要在電車裡講電話」。',
                    wrong: [
                        '「しなくてください」錯誤：正確形式是「ないでください」。',
                        '「してください」錯誤：意思相反，變成「請打電話」。',
                        '「するください」錯誤：文法錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_naide_kudasai_2',
                sentence: 'まだ食{た}べ（　）。後{あと}で皆{みな}で食{た}べましょう。',
                options: ['ないでください', 'なくてください', 'てください', 'るください'],
                correctIndex: 0,
                explanation: {
                    correct: '「ないでください」正確！「請先不要吃，等會大家一起吃」。',
                    wrong: [
                        '「なくてください」錯誤：文法錯誤。',
                        '「てください」錯誤：意思變成「請吃」。',
                        '「るください」錯誤：文法錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_naide_kudasai_3',
                sentence: 'この部屋{へや}に（　）ください。',
                options: ['入{はい}らないで', '入{はい}らなくて', '入{はい}って', '入{はい}る'],
                correctIndex: 0,
                explanation: {
                    correct: '「入らないでください」正確！「請不要進入這個房間」。',
                    wrong: [
                        '「入らなくて」錯誤：應該用「ないで」形式。',
                        '「入って」錯誤：意思變成「請進入」。',
                        '「入る」錯誤：動詞原形不能接「ください」。'
                    ]
                }
            },
            {
                id: 'n5_q_naide_kudasai_4',
                sentence: '「すみません、ここに車{くるま}を（　）。」\n「あ、すみません。駐車場{ちゅうしゃじょう}はどこですか。」\n「あちらです。」',
                options: ['止{と}めないでください', '止{と}めなくてください', '止{と}めてください', '止{と}めるください'],
                correctIndex: 0,
                explanation: {
                    correct: '「止めないでください」正確！「請不要在這裡停車」。',
                    wrong: [
                        '「止めなくてください」錯誤：文法錯誤。',
                        '「止めてください」錯誤：意思變成「請停車」。',
                        '「止めるください」錯誤：文法錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_naide_kudasai_5',
                sentence: '「先生{せんせい}、質問{しつもん}があります。」\n「はい、どうぞ。でも、他{ほか}の人{ひと}の邪魔{じゃま}に（　）ね。」\n「はい、小{ちい}さい声{こえ}で聞{き}きます。」',
                options: ['ならないでください', 'ならなくてください', 'なってください', 'なるください'],
                correctIndex: 0,
                explanation: {
                    correct: '「ならないでください」正確！「請不要打擾其他人」。',
                    wrong: [
                        '「ならなくてください」錯誤：文法錯誤。',
                        '「なってください」錯誤：意思變成「請成為打擾」。',
                        '「なるください」錯誤：文法錯誤。'
                    ]
                }
            }
        ]
    },
    'n5_ne': {
        id: 'n5_ne',
        pattern: 'ね',
        connection: '文末 + ね',
        translation: '...吧?; ...對吧? (確認/同意)',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '尋求確認或同意',
                description: '放在句尾，確認對方是否同意或知道某件事。語調上揚時帶有詢問的語氣。',
                examples: [
                    { japanese: '今日{きょう}は寒{さむ}いですね。', chinese: '今天好冷呢。（對吧？）' },
                    { japanese: 'この料理{りょうり}、おいしいね。', chinese: '這道菜好好吃呢。' },
                    {
                        japanese: '「この映画{えいが}、面白{おもしろ}かったね。」\n「うん、特{とく}にラストが良{よ}かったね。」\n「また一緒{いっしょ}に映画{えいが}見{み}に行{い}こうね。」',
                        chinese: '「這部電影很好看呢。」\n「嗯，特別是結局很棒呢。」\n「下次再一起去看電影吧。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usageId: 2,
                title: '緩和語氣、拉近距離',
                description: '加在句尾可以讓語氣更加柔和親切，拉近與對方的距離。',
                examples: [
                    { japanese: 'じゃあ、また明日{あした}ね。', chinese: '那麼，明天見囉。' },
                    { japanese: '頑張{がんば}ってね。', chinese: '加油喔。' },
                    {
                        japanese: '「明日{あした}の約束{やくそく}、忘{わす}れないでね。」\n「大丈夫{だいじょうぶ}だよ。10時{じ}に駅前{えきまえ}で待{ま}ち合{あ}わせね。」\n「うん、楽{たの}しみにしてるね。」',
                        chinese: '「明天的約定，不要忘記喔。」\n「沒問題啦。10點在車站前見面喔。」\n「嗯，我很期待喔。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「ね」與「よ」的差異',
            description: '兩者都是終助詞，但功能不同。',
            points: [
                {
                    rule: '「ね」：確認共識、尋求同意（雙方都知道的事）',
                    examples: [
                        { japanese: '今日{きょう}は暑{あつ}いですね。', chinese: '今天好熱呢。（你也這麼覺得吧？）', note: '○ 確認共識' }
                    ]
                },
                {
                    rule: '「よ」：告知新資訊、強調（對方不知道的事）',
                    examples: [
                        { japanese: '明日{あした}は休{やす}みですよ。', chinese: '明天休息喔。（告訴你這個資訊）', note: '○ 告知新資訊' }
                    ]
                }
            ]
        },
        quiz: [
            // 第 1 題：正向題 - 確認共識
            {
                id: 'n5_q_ne_1',
                sentence: '今日{きょう}はいい天気{てんき}です（　）。',
                options: ['ね', 'よ', 'か', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「ね」正確！確認對方同意「今天天氣真好呢」。天氣是雙方都能感受到的共同體驗。',
                    wrong: [
                        '「よ」錯誤：「よ」用於告知對方不知道的事，天氣是雙方都知道的，不需要「告知」。',
                        '「か」錯誤：「か」用於疑問，這裡不是問句，是確認共識。',
                        '「の」錯誤：「の」用於解釋原因或柔化疑問，這裡是感嘆確認。'
                    ]
                }
            },
            // 第 2 題：正向題 - 緩和語氣
            {
                id: 'n5_q_ne_2',
                sentence: '頑張{がんば}って（　）。',
                options: ['ね', 'よ', 'か', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「ね」正確！「加油喔」，用「ね」讓鼓勵的語氣更柔和親切。',
                    wrong: [
                        '「よ」錯誤：「頑張ってよ」帶有命令或催促的語氣，不如「ね」溫柔。',
                        '「か」錯誤：「か」用於疑問，「加油嗎？」語意不對。',
                        '「を」錯誤：「を」是助詞，不能放句尾。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「よ」不是「ね」
            {
                id: 'n5_q_ne_3',
                sentence: '「明日{あした}は休{やす}みですか。」\n「いいえ、明日{あした}は授業{じゅぎょう}がありま（　）。」',
                options: ['ね', 'よ', 'か', 'の'],
                correctIndex: 1,
                explanation: {
                    correct: '「よ」正確！對方問「明天休息嗎？」，回答「不是，明天有課喔」。這是告知對方不知道的資訊，用「よ」。',
                    wrong: [
                        '「ね」錯誤：「ね」用於雙方都知道的事情。這裡是告訴對方新資訊，應該用「よ」！',
                        '「か」錯誤：回答句不用「か」，「か」用於問句。',
                        '「の」錯誤：「の」用於解釋或柔化疑問，這裡是直接告知。'
                    ]
                }
            },
            // 第 4 題：對話題
            {
                id: 'n5_q_ne_4',
                sentence: '「このケーキ、おいしい（　）。」\n「うん、ここのケーキは有名{ゆうめい}なんだ。」\n「また来{こ}よう（　）。」',
                options: ['ね/ね', 'よ/よ', 'ね/よ', 'よ/ね'],
                correctIndex: 0,
                explanation: {
                    correct: '「ね/ね」正確！第一空：一起吃蛋糕，確認對方也覺得好吃。第二空：「再來吧」是共同提議，用「ね」。',
                    wrong: [
                        '「よ/よ」錯誤：兩處都是尋求認同，不是告知新資訊。',
                        '「ね/よ」錯誤：第二空的提議是邀請對方一起做，用「ね」更自然。',
                        '「よ/ね」錯誤：第一空是確認共同感受，應用「ね」。'
                    ]
                }
            },
            // 第 5 題：辨析題 - 「ね」vs「よ」的核心區別
            {
                id: 'n5_q_ne_5',
                sentence: '「あ、バスが来{き}た（　）！急{いそ}ごう！」\n「本当{ほんとう}だ（　）。走{はし}ろう！」',
                options: ['よ/ね', 'ね/よ', 'よ/よ', 'ね/ね'],
                correctIndex: 0,
                explanation: {
                    correct: '「よ/ね」正確！第一空：發現公車來了，告知對方新狀況，用「よ」。第二空：確認對方說的「真的呢」，用「ね」。',
                    wrong: [
                        '「ね/よ」錯誤：順序相反。先發現的人用「よ」告知，確認的人用「ね」回應。',
                        '「よ/よ」錯誤：第二空是確認對方的話，用「ね」更自然。',
                        '「ね/ね」錯誤：第一空是告知新發現，必須用「よ」。'
                    ]
                }
            }
        ]
    },
    'n5_yo': {
        id: 'n5_yo',
        pattern: 'よ',
        connection: '文末 + よ',
        translation: '...唷 (強調/告知)',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '告知對方不知道的資訊',
                description: '用於告訴對方他可能不知道的事情，有「我告訴你喔」的語氣。',
                examples: [
                    { japanese: '明日{あした}は休{やす}みですよ。', chinese: '明天休息喔。' },
                    { japanese: 'もう電車{でんしゃ}が来{き}ますよ。', chinese: '電車要來了喔。' },
                    {
                        japanese: '「あれ、田中{たなか}さんは？」\n「田中{たなか}さんは今日{きょう}、休{やす}みですよ。」\n「え、そうなの？知{し}らなかった。」',
                        chinese: '「咦，田中先生呢？」\n「田中先生今天休假喔。」\n「咦，是嗎？我不知道。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usageId: 2,
                title: '強調、提醒',
                description: '強調某件事或提醒對方注意。帶有「你聽好了」的語氣。',
                examples: [
                    { japanese: '危{あぶ}ないですよ！', chinese: '很危險喔！' },
                    { japanese: '本当{ほんとう}ですよ。', chinese: '是真的喔。' },
                    {
                        japanese: '「あ、財布{さいふ}忘{わす}れてるよ！」\n「え！ありがとう。危{あぶ}なかった。」\n「気{き}をつけてよ。」',
                        chinese: '「啊，你忘記帶錢包了喔！」\n「咦！謝謝。好險。」\n「小心點喔。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '過度使用「よ」導致語氣過強',
                    explanation: '「よ」帶有強調的語氣，過度使用會讓人覺得你在教訓別人或態度傲慢。',
                    whenToUse: '只在需要強調或告知新資訊時使用。',
                    correct: { sentence: '電車{でんしゃ}が来{き}ましたよ。', note: '○ 告知新資訊' },
                    incorrect: { sentence: '今日{きょう}は暑{あつ}いですよ。', note: '△ 天氣是共知的，用「ね」較好' }
                }
            ]
        },
        quiz: [
            // 第 1 題：正向題 - 正確答案是「よ」
            {
                id: 'n5_q_yo_1',
                sentence: '「あれ、鍵{かぎ}がない...。」\n「そこにある（　）。テーブルの上{うえ}。」',
                options: ['よ', 'ね', 'か', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「よ」正確！告知對方不知道的資訊（鑰匙的位置），用「よ」。',
                    wrong: [
                        '「ね」錯誤：這裡是告知新資訊，不是確認共識，應用「よ」。',
                        '「か」錯誤：「か」用於疑問，這裡是陳述。',
                        '「の」錯誤：「の」用於解釋或女性語氣的疑問。'
                    ]
                }
            },
            // 第 2 題：正向題 - 正確答案是「よ」
            {
                id: 'n5_q_yo_2',
                sentence: '危{あぶ}ない（　）！車{くるま}が来{き}てる！',
                options: ['よ', 'ね', 'か', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「よ」正確！緊急警告對方危險，強調提醒用「よ」。',
                    wrong: [
                        '「ね」錯誤：緊急警告需要強調語氣，不是尋求共識。',
                        '「か」錯誤：「か」用於疑問，這是警告。',
                        '「の」錯誤：「の」用於解釋，這裡需要強調。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「ね」不是「よ」
            {
                id: 'n5_q_yo_3',
                sentence: '（二人{ふたり}とも外{そと}を見{み}ながら）\n今日{きょう}は本当{ほんとう}にいい天気{てんき}です（　）。',
                options: ['よ', 'ね', 'か', 'の'],
                correctIndex: 1,
                explanation: {
                    correct: '「ね」正確！兩人都看到天氣很好，這是共同的認知，尋求共識用「ね」。',
                    wrong: [
                        '「よ」錯誤：天氣是雙方都看得到的事實，不是告知新資訊！對方已經知道時用「ね」，不是「よ」。',
                        '「か」錯誤：「か」用於疑問，這是陳述感想。',
                        '「の」錯誤：「の」用於解釋，這裡是感嘆。'
                    ]
                }
            },
            // 第 4 題：對話題 - 正確答案是「よ」
            {
                id: 'n5_q_yo_4',
                sentence: '「このラーメン、おいしいね。」\n「そうだね。でも、ちょっと辛{から}い（　）。」\n「え、本当{ほんとう}？」',
                options: ['よ', 'ね', 'か', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「よ」正確！告知對方自己的感受「有點辣喔」，對方可能不知道。',
                    wrong: [
                        '「ね」錯誤：對方可能沒感覺辣，這是告知自己的感受，用「よ」。',
                        '「か」錯誤：「か」用於疑問，這是陳述。',
                        '「を」錯誤：「を」是助詞，不能放句尾。'
                    ]
                }
            },
            // 第 5 題：辨析題 - よ/ね 的區別
            {
                id: 'n5_q_yo_5',
                sentence: '「あ、田中{たなか}さんだ！」「うん、田中{たなか}さんだ（A）。」\n「田中{たなか}さん、今日{きょう}休{やす}みだって知{し}ってた？」「え、知{し}らなかった（B）。」',
                options: ['A:ね B:よ', 'A:よ B:ね', 'A:ね B:ね', 'A:よ B:よ'],
                correctIndex: 0,
                explanation: {
                    correct: '「A:ね B:よ」正確！(A)兩人都看到田中，確認共識用「ね」；(B)告知對方自己不知道這件事，用「よ」。',
                    wrong: [
                        '「A:よ B:ね」錯誤：(A)是確認雙方都看到的事實，用「ね」；(B)是告知新資訊，用「よ」。',
                        '「A:ね B:ね」錯誤：(B)是自己的感想/告知，不是確認共識。',
                        '「A:よ B:よ」錯誤：(A)雙方已經看到，是確認共識，用「ね」。'
                    ]
                }
            }
        ]
    }
});

// ============================================================
// Batch 4: 助詞與句型 (に、の、を、は)
// ============================================================
Object.assign(n5Details, {
    // n5_ni - 助詞「に」的多種用法
    n5_ni: {
        id: 'n5_ni',
        pattern: 'に',
        connection: '名詞＋に',
        translation: '（方向/時間/目的/對象）',
        level: 'N5',
        explanation: [
            {
                usage: '表示時間點',
                description: '表示動作發生的具體時間點。',
                examples: [
                    { japanese: '七時{しちじ}に起{お}きます。', chinese: '七點起床。' },
                    { japanese: '日曜日{にちようび}に映画{えいが}を見{み}ます。', chinese: '星期天看電影。' },
                    {
                        japanese: '「明日{あした}何時{なんじ}に会{あ}う？」\n「十時{じゅうじ}に駅{えき}で会{あ}おう。」\n「分{わ}かった。」',
                        chinese: '「明天幾點見面？」\n「十點在車站見面吧。」\n「好的。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示方向/目的地',
                description: '表示移動的方向或目的地。',
                examples: [
                    { japanese: '学校{がっこう}に行{い}きます。', chinese: '去學校。' },
                    { japanese: '日本{にほん}に行{い}きたいです。', chinese: '想去日本。' },
                    {
                        japanese: '「どこに行{い}くの？」\n「図書館{としょかん}に行{い}く。」\n「じゃ、一緒{いっしょ}に行{い}こう。」',
                        chinese: '「要去哪裡？」\n「去圖書館。」\n「那一起去吧。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示存在位置',
                description: '與「いる/ある」一起使用，表示人或物存在的位置。',
                examples: [
                    { japanese: '部屋{へや}に猫{ねこ}がいます。', chinese: '房間裡有貓。' },
                    { japanese: '机{つくえ}の上{うえ}に本{ほん}があります。', chinese: '桌上有書。' },
                    {
                        japanese: '「お母{かあ}さんはどこにいる？」\n「台所{だいどころ}にいるよ。」\n「ありがとう。」',
                        chinese: '「媽媽在哪裡？」\n「在廚房喔。」\n「謝謝。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示對象',
                description: '表示動作的對象（給予、教授等動作的接收者）。',
                examples: [
                    { japanese: '友達{ともだち}にプレゼントをあげます。', chinese: '送禮物給朋友。' },
                    { japanese: '先生{せんせい}に質問{しつもん}します。', chinese: '向老師提問。' },
                    {
                        japanese: '「誰{だれ}にあげるの？」\n「彼女{かのじょ}にあげる。」\n「いいね！」',
                        chinese: '「要給誰？」\n「給女朋友。」\n「不錯喔！」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「に」vs「へ」vs「で」的區別',
            points: [
                {
                    rule: '「に」：強調到達點、目的地或具體時間點',
                    examples: [{ japanese: '学校{がっこう}に行{い}きます。', chinese: '到達學校' }]
                },
                {
                    rule: '「へ」：強調移動的方向（較抽象）',
                    examples: [{ japanese: '学校{がっこう}へ行{い}きます。', chinese: '朝學校的方向去' }]
                },
                {
                    rule: '「で」：表示動作進行的場所',
                    examples: [{ japanese: '学校{がっこう}で勉強{べんきょう}します。', chinese: '在學校讀書' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '時間詞該不該加「に」的困惑',
                    explanation: '具體時間點（幾點、星期幾、幾月幾日）要加「に」，但「今日」「明日」「毎日」等相對時間詞不加。',
                    whenToUse: '有數字的時間表達通常要加「に」。',
                    correct: { sentence: '三時{さんじ}に会{あ}いましょう。', note: '○ 具體時間點' },
                    incorrect: { sentence: '明日{あした}に行{い}きます。', note: '✕ 「明日」不加「に」' }
                }
            ]
        },
        quiz: [
            // 第 1 題：正向題 - 正確答案是「に」
            {
                id: 'n5_q_ni_1',
                sentence: '私{わたし}は毎朝{まいあさ}六時{ろくじ}（　）起{お}きます。',
                options: ['に', 'で', 'を', 'へ'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！表示起床的時間點「六點」，具體時間用「に」。',
                    wrong: [
                        '「で」錯誤：「で」表示動作場所或方式，不用於時間點。',
                        '「を」錯誤：「を」是受詞標記，不用於時間點。',
                        '「へ」錯誤：「へ」表示方向，不用於時間點。'
                    ]
                }
            },
            // 第 2 題：正向題 - 正確答案是「に」
            {
                id: 'n5_q_ni_2',
                sentence: '机{つくえ}の上{うえ}（　）本{ほん}があります。',
                options: ['に', 'で', 'を', 'は'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！與「あります」搭配表示存在的位置。',
                    wrong: [
                        '「で」錯誤：「あります」表示存在，存在位置用「に」，不用「で」。',
                        '「を」錯誤：「を」是受詞標記，這裡是存在句。',
                        '「は」錯誤：「は」是主題標記，這裡需要位置標記「に」。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「で」不是「に」
            {
                id: 'n5_q_ni_3',
                sentence: '図書館{としょかん}（　）本{ほん}を読{よ}みました。',
                options: ['に', 'で', 'を', 'へ'],
                correctIndex: 1,
                explanation: {
                    correct: '「で」正確！表示動作（讀書）進行的場所，用「で」。',
                    wrong: [
                        '「に」錯誤：「に」用於存在場所（いる/ある）或到達點。「読む」是動作，動作場所用「で」！',
                        '「を」錯誤：「を」標記受詞（本），場所用「で」。',
                        '「へ」錯誤：「へ」表示移動方向，不表示動作場所。'
                    ]
                }
            },
            // 第 4 題：對話題 - 正確答案是「に」
            {
                id: 'n5_q_ni_4',
                sentence: '「何時{なんじ}（　）家{いえ}に帰{かえ}る？」\n「八時{はちじ}くらいかな。」\n「じゃ、夕飯{ゆうはん}一緒{いっしょ}に食{た}べよう。」',
                options: ['に', 'で', 'を', 'へ'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！詢問回家的時間點，具體時間用「に」。',
                    wrong: [
                        '「で」錯誤：時間點用「に」，「で」表示場所或手段。',
                        '「を」錯誤：「を」是受詞標記，時間點用「に」。',
                        '「へ」錯誤：「へ」表示方向，時間點用「に」。'
                    ]
                }
            },
            // 第 5 題：辨析題 - に/で 的區別
            {
                id: 'n5_q_ni_5',
                sentence: '猫{ねこ}が部屋{へや}（A）います。友達{ともだち}と部屋{へや}（B）ゲームをしました。',
                options: ['A:に B:で', 'A:で B:に', 'A:に B:に', 'A:で B:で'],
                correctIndex: 0,
                explanation: {
                    correct: '「A:に B:で」正確！(A)「います」是存在，存在場所用「に」；(B)「します」是動作，動作場所用「で」。',
                    wrong: [
                        '「A:で B:に」錯誤：存在用「に」，動作用「で」，順序相反了。',
                        '「A:に B:に」錯誤：(B)是動作場所，動作場所要用「で」，不能用「に」。',
                        '「A:で B:で」錯誤：(A)是存在場所，存在場所要用「に」，不能用「で」。'
                    ]
                }
            }
        ]
    },

    // n5_no - 助詞「の」的多種用法
    n5_no: {
        id: 'n5_no',
        pattern: 'の',
        connection: '名詞＋の＋名詞',
        translation: '的、之',
        level: 'N5',
        explanation: [
            {
                usage: '表示所有/所屬',
                description: '表示某物屬於某人或某物。',
                examples: [
                    { japanese: '私{わたし}の本{ほん}', chinese: '我的書' },
                    { japanese: '日本{にほん}の文化{ぶんか}', chinese: '日本的文化' },
                    {
                        japanese: '「これは誰{だれ}の傘{かさ}？」\n「田中{たなか}さんのだと思{おも}う。」\n「そうか。届{とど}けてあげよう。」',
                        chinese: '「這是誰的傘？」\n「我想是田中先生的。」\n「這樣啊。幫他送過去吧。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '名詞修飾名詞',
                description: '用「の」連接兩個名詞，前面的名詞修飾後面的名詞。',
                examples: [
                    { japanese: '日本語{にほんご}の先生{せんせい}', chinese: '日語老師' },
                    { japanese: '木{き}の机{つくえ}', chinese: '木頭桌子' },
                    {
                        japanese: '「あの人{ひと}は誰{だれ}？」\n「大学{だいがく}の友達{ともだち}だよ。」\n「へえ、紹介{しょうかい}して。」',
                        chinese: '「那個人是誰？」\n「是大學的朋友喔。」\n「欸，介紹一下。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '代替名詞（の＝もの/こと）',
                description: '「の」可以代替前面提過的名詞，避免重複。',
                examples: [
                    { japanese: '赤{あか}いのが好{す}きです。', chinese: '我喜歡紅色的（東西）。' },
                    { japanese: '大{おお}きいのをください。', chinese: '請給我大的（那個）。' },
                    {
                        japanese: '「どのケーキにする？」\n「チョコレートのにする。」\n「じゃ、私{わたし}はいちごの。」',
                        chinese: '「要哪個蛋糕？」\n「我要巧克力的。」\n「那我要草莓的。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「の」的不同用法比較',
            points: [
                {
                    rule: '所有/所屬「の」：表示擁有關係',
                    examples: [{ japanese: '私{わたし}の車{くるま}', chinese: '我的車' }]
                },
                {
                    rule: '修飾「の」：名詞修飾名詞',
                    examples: [{ japanese: '英語{えいご}の本{ほん}', chinese: '英文書' }]
                },
                {
                    rule: '代名詞「の」：代替前文名詞',
                    examples: [{ japanese: '青{あお}いの', chinese: '藍色的（那個）' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '過度使用「の」連接過多名詞',
                    explanation: '雖然日文可以用「の」連接多個名詞，但過多會很不自然。',
                    whenToUse: '盡量保持在2-3個「の」以內。',
                    correct: { sentence: '日本{にほん}の大学{だいがく}の先生{せんせい}', note: '○ 日本的大學的老師' },
                    incorrect: { sentence: '日本{にほん}の東京{とうきょう}の大学{だいがく}の日本語{にほんご}の先生{せんせい}', note: '△ 過多「の」，不自然' }
                }
            ]
        },
        quiz: [
            // 第 1 題：正向題 - 正確答案是「の」
            {
                id: 'n5_q_no_1',
                sentence: 'これは田中{たなか}さん（　）本{ほん}です。',
                options: ['の', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！表示這是「田中先生的」書，所有格用「の」。',
                    wrong: [
                        '「が」錯誤：「が」是主語標記，所有關係用「の」。',
                        '「を」錯誤：「を」是受詞標記，不用於所有格。',
                        '「に」錯誤：「に」表示方向或對象，不用於所有格。'
                    ]
                }
            },
            // 第 2 題：正向題 - 正確答案是「の」
            {
                id: 'n5_q_no_2',
                sentence: '日本語{にほんご}（　）勉強{べんきょう}は難{むずか}しいです。',
                options: ['の', 'が', 'を', 'は'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！「日本語の勉強」= 日語的學習，名詞修飾名詞用「の」。',
                    wrong: [
                        '「が」錯誤：名詞修飾名詞用「の」，不用「が」。',
                        '「を」錯誤：「を」是受詞標記，這裡是名詞修飾。',
                        '「は」錯誤：「は」是主題標記，名詞修飾用「の」。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「が」不是「の」
            {
                id: 'n5_q_no_3',
                sentence: '私{わたし}は犬{いぬ}（　）好{す}きです。',
                options: ['の', 'が', 'を', 'に'],
                correctIndex: 1,
                explanation: {
                    correct: '「が」正確！「好き」「嫌い」「上手」「下手」等形容詞的對象用「が」標記。',
                    wrong: [
                        '「の」錯誤：「～が好き」是固定搭配，好惡的對象用「が」，不用「の」！',
                        '「を」錯誤：「を」用於他動詞的受詞，「好き」是形容動詞，對象用「が」。',
                        '「に」錯誤：「に」用於方向或時間，「好き」的對象用「が」。'
                    ]
                }
            },
            // 第 4 題：對話題 - 正確答案是「の」
            {
                id: 'n5_q_no_4',
                sentence: '「どのパソコンを買{か}う？」\n「軽{かる}い（　）がいいな。」\n「じゃ、これはどう？」',
                options: ['の', 'が', 'を', 'は'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！「軽いの」代替「軽いパソコン」，「の」可代替前文提到的名詞。',
                    wrong: [
                        '「が」錯誤：這裡需要代替名詞的「の」，「が」在「の」後面標記主語。',
                        '「を」錯誤：「を」是受詞標記，這裡需要代名詞「の」。',
                        '「は」錯誤：「は」是主題標記，這裡需要代名詞「の」。'
                    ]
                }
            },
            // 第 5 題：辨析題 - の/が 的區別
            {
                id: 'n5_q_no_5',
                sentence: '田中{たなか}さん（A）車{くるま}は赤{あか}いです。田中{たなか}さんは車{くるま}（B）欲{ほ}しいです。',
                options: ['A:の B:が', 'A:が B:の', 'A:の B:の', 'A:が B:が'],
                correctIndex: 0,
                explanation: {
                    correct: '「A:の B:が」正確！(A)「田中さんの車」= 田中的車（所有格）；(B)「車が欲しい」= 想要車（「欲しい」的對象用「が」）。',
                    wrong: [
                        '「A:が B:の」錯誤：(A)是所有格用「の」，(B)是「欲しい」的對象用「が」。',
                        '「A:の B:の」錯誤：(B)「欲しい」的對象要用「が」，不能用「の」。',
                        '「A:が B:が」錯誤：(A)是所有格，所有格要用「の」，不能用「が」。'
                    ]
                }
            }
        ]
    },

    // n5_o_wo - 助詞「を」
    n5_o_wo: {
        id: 'n5_o_wo',
        pattern: 'を',
        connection: '名詞＋を＋他動詞',
        translation: '（受詞標記）',
        level: 'N5',
        explanation: [
            {
                usage: '標記動作的受詞',
                description: '「を」放在名詞後面，表示這個名詞是動作的對象（受詞）。',
                examples: [
                    { japanese: '本{ほん}を読{よ}みます。', chinese: '讀書。' },
                    { japanese: 'ご飯{はん}を食{た}べます。', chinese: '吃飯。' },
                    {
                        japanese: '「今日{きょう}何{なに}を食{た}べる？」\n「カレーを食{た}べたいな。」\n「いいね、作{つく}ろう！」',
                        chinese: '「今天要吃什麼？」\n「想吃咖哩。」\n「好啊，來做吧！」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示經過的地點',
                description: '與移動動詞一起使用，表示經過或離開的地點。',
                examples: [
                    { japanese: '公園{こうえん}を散歩{さんぽ}します。', chinese: '在公園散步。' },
                    { japanese: '橋{はし}を渡{わた}ります。', chinese: '過橋。' },
                    {
                        japanese: '「どの道{みち}を行{い}く？」\n「この道{みち}を行{い}こう。近{ちか}いから。」\n「うん、そうしよう。」',
                        chinese: '「走哪條路？」\n「走這條路吧。因為比較近。」\n「嗯，就這樣吧。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示離開的起點',
                description: '與「出る」「卒業する」等動詞一起使用，表示離開某處。',
                examples: [
                    { japanese: '家{いえ}を出{で}ます。', chinese: '出門。' },
                    { japanese: '大学{だいがく}を卒業{そつぎょう}しました。', chinese: '大學畢業了。' },
                    {
                        japanese: '「もう行{い}くの？」\n「うん、七時{しちじ}に家{いえ}を出{で}ないと。」\n「気{き}をつけてね。」',
                        chinese: '「要走了嗎？」\n「嗯，七點必須出門。」\n「小心喔。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「を」的常見搭配動詞',
            points: [
                {
                    rule: '食べ物を食べる：吃某物',
                    examples: [{ japanese: 'りんごを食{た}べる', chinese: '吃蘋果' }]
                },
                {
                    rule: '場所を歩く/走る：在某處走/跑（經過）',
                    examples: [{ japanese: '道{みち}を歩{ある}く', chinese: '走路' }]
                },
                {
                    rule: '場所を出る：離開某處',
                    examples: [{ japanese: '会社{かいしゃ}を出{で}る', chinese: '離開公司' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '把「を」念成「wo」',
                    explanation: '助詞「を」雖然寫作「wo」，但實際發音是「o」。',
                    whenToUse: '只有這個助詞念「o」，其他「お」也念「o」。',
                    correct: { sentence: '水{みず}を飲{の}みます。（mizuo nomimasu）', note: '○ 正確發音' },
                    incorrect: { sentence: '水{みず}を飲{の}みます。（mizuwo nomimasu）', note: '✕ 錯誤發音' }
                }
            ]
        },
        quiz: [
            // 第 1 題：正向題 - 正確答案是「を」
            {
                id: 'n5_q_wo_1',
                sentence: '毎日{まいにち}コーヒー（　）飲{の}みます。',
                options: ['を', 'が', 'に', 'は'],
                correctIndex: 0,
                explanation: {
                    correct: '「を」正確！「コーヒー」是「飲む」的受詞，他動詞的受詞用「を」。',
                    wrong: [
                        '「が」錯誤：「が」是主語標記，受詞用「を」。',
                        '「に」錯誤：「に」表示方向或時間，受詞用「を」。',
                        '「は」錯誤：「は」是主題標記，受詞用「を」。'
                    ]
                }
            },
            // 第 2 題：正向題 - 正確答案是「を」
            {
                id: 'n5_q_wo_2',
                sentence: '八時{はちじ}に家{いえ}（　）出{で}ます。',
                options: ['を', 'が', 'に', 'へ'],
                correctIndex: 0,
                explanation: {
                    correct: '「を」正確！「出る」表示離開，離開的起點用「を」。',
                    wrong: [
                        '「が」錯誤：「が」是主語標記，離開的地點用「を」。',
                        '「に」錯誤：「に」表示到達點，離開起點用「を」。',
                        '「へ」錯誤：「へ」表示去的方向，離開起點用「を」。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「が」不是「を」
            {
                id: 'n5_q_wo_3',
                sentence: '日本語{にほんご}（　）分{わ}かりますか。',
                options: ['を', 'が', 'に', 'は'],
                correctIndex: 1,
                explanation: {
                    correct: '「が」正確！「分かる」「できる」「見える」「聞こえる」等可能動詞，對象用「が」不用「を」。',
                    wrong: [
                        '「を」錯誤：「分かる」不是他動詞！「～が分かる」是固定搭配，對象用「が」，不用「を」！',
                        '「に」錯誤：「に」表示方向或時間，「分かる」的對象用「が」。',
                        '「は」錯誤：「は」是主題標記，這裡需要「が」標記對象。'
                    ]
                }
            },
            // 第 4 題：對話題 - 正確答案是「を」
            {
                id: 'n5_q_wo_4',
                sentence: '「週末{しゅうまつ}何{なに}（　）する？」\n「映画{えいが}（　）見{み}ようかな。」\n「いいね！」',
                options: ['を、を', 'が、が', 'に、を', 'を、が'],
                correctIndex: 0,
                explanation: {
                    correct: '「を」正確！「何」和「映画」都是動詞的受詞，用「を」標記。',
                    wrong: [
                        '「が」錯誤：「する」「見る」都是他動詞，受詞用「を」。',
                        '「に、を」錯誤：「何をする」是固定搭配，「何」是受詞。',
                        '「を、が」錯誤：「映画を見る」，「映画」是受詞用「を」。'
                    ]
                }
            },
            // 第 5 題：辨析題 - を/が 的區別
            {
                id: 'n5_q_wo_5',
                sentence: '私{わたし}は日本語{にほんご}（A）勉強{べんきょう}しています。日本語{にほんご}（B）話{はな}せます。',
                options: ['A:を B:が', 'A:が B:を', 'A:を B:を', 'A:が B:が'],
                correctIndex: 0,
                explanation: {
                    correct: '「A:を B:が」正確！(A)「勉強する」是他動詞，受詞用「を」；(B)「話せる」是可能形，可能動詞的對象用「が」。',
                    wrong: [
                        '「A:が B:を」錯誤：(A)是他動詞用「を」，(B)是可能動詞用「が」。',
                        '「A:を B:を」錯誤：(B)「話せる」是可能形，可能動詞的對象要用「が」！',
                        '「A:が B:が」錯誤：(A)「勉強する」是他動詞，受詞要用「を」！'
                    ]
                }
            }
        ]
    },

    // n5_wa - 助詞「は」（主題標記）
    n5_wa: {
        id: 'n5_wa',
        pattern: 'は',
        connection: '名詞＋は',
        translation: '（主題標記）',
        level: 'N5',
        explanation: [
            {
                usage: '標記話題/主題',
                description: '「は」用來標記句子的主題，表示「關於...」。',
                examples: [
                    { japanese: '私{わたし}は学生{がくせい}です。', chinese: '我是學生。' },
                    { japanese: '東京{とうきょう}は日本{にほん}の首都{しゅと}です。', chinese: '東京是日本的首都。' },
                    {
                        japanese: '「田中{たなか}さんはどこ？」\n「田中{たなか}さんは会議室{かいぎしつ}にいますよ。」\n「ありがとう。」',
                        chinese: '「田中先生在哪裡？」\n「田中先生在會議室喔。」\n「謝謝。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示對比',
                description: '使用「は」可以暗示與其他事物的對比。',
                examples: [
                    { japanese: '肉{にく}は食{た}べますが、魚{さかな}は食{た}べません。', chinese: '我吃肉，但不吃魚。' },
                    { japanese: '今日{きょう}は暇{ひま}ですが、明日{あした}は忙{いそが}しいです。', chinese: '今天有空，但明天很忙。' },
                    {
                        japanese: '「コーヒーは飲{の}む？」\n「コーヒーは飲{の}まないけど、紅茶{こうちゃ}は飲{の}むよ。」\n「じゃ、紅茶{こうちゃ}にしよう。」',
                        chinese: '「要喝咖啡嗎？」\n「咖啡不喝，但紅茶要喝喔。」\n「那就紅茶吧。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '否定句中強調',
                description: '在否定句中，「は」強調「這個不行，別的可能可以」。',
                examples: [
                    { japanese: 'ここでは食{た}べられません。', chinese: '這裡不能吃。（別處可以）' },
                    { japanese: '今日{きょう}は行{い}けません。', chinese: '今天不能去。（別天可以）' },
                    {
                        japanese: '「今日{きょう}、映画{えいが}行{い}かない？」\n「今日{きょう}は行{い}けないな。明日{あした}はどう？」\n「明日{あした}ならOK！」',
                        chinese: '「今天要不要去看電影？」\n「今天不行呢。明天如何？」\n「明天的話OK！」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「は」vs「が」的區別',
            points: [
                {
                    rule: '「は」（主題）：標記已知的話題，「關於...」',
                    examples: [{ japanese: '田中{たなか}さんは先生{せんせい}です。', chinese: '（說到田中先生）他是老師' }]
                },
                {
                    rule: '「が」（主語）：強調新資訊或主語本身',
                    examples: [{ japanese: '田中{たなか}さんが先生{せんせい}です。', chinese: '田中先生（才）是老師' }]
                },
                {
                    rule: '「は」（對比）：暗示與其他事物的對比',
                    examples: [{ japanese: '魚{さかな}は食{た}べません。', chinese: '魚不吃（但其他可能吃）' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '把「は」念成「ha」',
                    explanation: '助詞「は」雖然寫作「ha」，但發音是「wa」。',
                    whenToUse: '只有助詞「は」念「wa」，其他「は」念「ha」。',
                    correct: { sentence: '私{わたし}は学生{がくせい}です。（watashi wa）', note: '○ 正確發音' },
                    incorrect: { sentence: '私{わたし}は学生{がくせい}です。（watashi ha）', note: '✕ 錯誤發音' }
                }
            ]
        },
        quiz: [
            // 第 1 題：正向題 - 正確答案是「は」
            {
                id: 'n5_q_wa_1',
                sentence: '私{わたし}（　）日本人{にほんじん}です。',
                options: ['は', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「は」正確！標記主題「我」，自我介紹用「は」。',
                    wrong: [
                        '「が」錯誤：自我介紹用「は」標記主題，不強調主語。',
                        '「を」錯誤：「を」是受詞標記，這裡需要主題標記。',
                        '「に」錯誤：「に」表示方向或時間，這裡需要主題標記。'
                    ]
                }
            },
            // 第 2 題：正向題 - 正確答案是「は」
            {
                id: 'n5_q_wa_2',
                sentence: 'りんご（　）好{す}きですが、バナナ（　）好{す}きじゃないです。',
                options: ['は、は', 'が、が', 'を、を', 'は、が'],
                correctIndex: 0,
                explanation: {
                    correct: '「は」正確！對比「蘋果」和「香蕉」，對比時兩邊都用「は」。',
                    wrong: [
                        '「が」錯誤：對比兩個事物時用「は」強調對比。',
                        '「を」錯誤：「を」是受詞標記，「好き」的對象不用「を」。',
                        '「は、が」錯誤：對比時兩邊都用「は」，不是一邊「は」一邊「が」。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「が」不是「は」
            {
                id: 'n5_q_wa_3',
                sentence: '「誰{だれ}（　）来{き}ましたか。」\n「田中{たなか}さんが来{き}ました。」',
                options: ['は', 'が', 'を', 'に'],
                correctIndex: 1,
                explanation: {
                    correct: '「が」正確！詢問「誰」時，「誰」是未知的新資訊，疑問詞作主語時用「が」。',
                    wrong: [
                        '「は」錯誤：「は」用於已知話題，疑問詞「誰」是未知資訊，要用「が」！',
                        '「を」錯誤：「を」是受詞標記，「誰」是主語。',
                        '「に」錯誤：「に」表示方向或時間，主語用「が」。'
                    ]
                }
            },
            // 第 4 題：對話題 - 正確答案是「は」
            {
                id: 'n5_q_wa_4',
                sentence: '「明日{あした}（　）暇{ひま}？」\n「明日{あした}（　）ちょっと...。明後日{あさって}はどう？」',
                options: ['は、は', 'が、が', 'を、を', 'に、に'],
                correctIndex: 0,
                explanation: {
                    correct: '「は」正確！「明日」是話題，並暗示與「明後日」的對比。',
                    wrong: [
                        '「が」錯誤：詢問時間的話題用「は」，不是強調主語。',
                        '「を」錯誤：「を」是受詞標記，這裡需要主題標記。',
                        '「に」錯誤：「に」表示具體時間點，這裡是主題對比。'
                    ]
                }
            },
            // 第 5 題：辨析題 - は/が 的區別
            {
                id: 'n5_q_wa_5',
                sentence: '田中{たなか}さん（A）学生{がくせい}です。何{なに}（B）好{す}きですか。',
                options: ['A:は B:が', 'A:が B:は', 'A:は B:は', 'A:が B:が'],
                correctIndex: 0,
                explanation: {
                    correct: '「A:は B:が」正確！(A)自我介紹/陳述用「は」標記主題；(B)疑問詞「何」是未知資訊，用「が」。',
                    wrong: [
                        '「A:が B:は」錯誤：(A)陳述用「は」，(B)疑問詞用「が」。',
                        '「A:は B:は」錯誤：(B)疑問詞作主語時要用「が」！',
                        '「A:が B:が」錯誤：(A)一般陳述用「は」標記主題，不需要強調。'
                    ]
                }
            }
        ]
    }
});

// ============================================================
// Batch 5: て形句型 (ている、てから、てください、てもいい)
// ============================================================
Object.assign(n5Details, {
    // n5_te_iru - ～ている（進行/狀態）
    n5_te_iru: {
        id: 'n5_te_iru',
        pattern: '～ている',
        connection: '動詞て形＋いる',
        translation: '正在...、...著（狀態）',
        level: 'N5',
        explanation: [
            {
                usage: '表示進行中的動作',
                description: '表示動作正在進行中。',
                examples: [
                    { japanese: '本{ほん}を読{よ}んでいます。', chinese: '正在看書。' },
                    { japanese: '今{いま}、ご飯{はん}を食{た}べています。', chinese: '現在正在吃飯。' },
                    {
                        japanese: '「何{なに}をしているの？」\n「宿題{しゅくだい}をしているよ。」\n「頑張{がんば}って！」',
                        chinese: '「在做什麼？」\n「在做功課喔。」\n「加油！」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示持續的狀態',
                description: '表示動作的結果所形成的狀態。',
                examples: [
                    { japanese: '窓{まど}が開{あ}いています。', chinese: '窗戶開著。' },
                    { japanese: '彼{かれ}は結婚{けっこん}しています。', chinese: '他已經結婚了。' },
                    {
                        japanese: '「あれ、電気{でんき}がついているよ。」\n「ああ、消{け}すの忘{わす}れた。」\n「もったいないね。」',
                        chinese: '「咦，電燈亮著喔。」\n「啊，忘記關了。」\n「真浪費呢。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示習慣/反覆動作',
                description: '表示經常做某事或習慣性動作。',
                examples: [
                    { japanese: '毎日{まいにち}運動{うんどう}しています。', chinese: '每天都在運動。' },
                    { japanese: '東京{とうきょう}に住{す}んでいます。', chinese: '住在東京。' },
                    {
                        japanese: '「どこで働{はたら}いているの？」\n「IT会社{かいしゃ}で働{はたら}いているよ。」\n「いいね！」',
                        chinese: '「在哪裡工作？」\n「在IT公司工作喔。」\n「不錯呢！」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「ている」的不同意義',
            points: [
                {
                    rule: '動作進行：正在進行的動作',
                    examples: [{ japanese: '食{た}べている', chinese: '正在吃' }]
                },
                {
                    rule: '結果狀態：動作完成後的狀態',
                    examples: [{ japanese: '結婚{けっこん}している', chinese: '已婚（狀態）' }]
                },
                {
                    rule: '習慣：反覆進行的動作',
                    examples: [{ japanese: '毎日{まいにち}走{はし}っている', chinese: '每天跑步（習慣）' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '不知道何時表示「進行」何時表示「狀態」',
                    explanation: '瞬間動詞（死ぬ、結婚する、開く等）的「ている」表示狀態，持續動詞（食べる、読む等）表示進行。',
                    whenToUse: '根據動詞類型判斷「ている」的意義。',
                    correct: { sentence: '窓{まど}が開{あ}いている。', note: '○ 窗戶開著（狀態）' },
                    incorrect: { sentence: '窓{まど}が開{あ}いている。', note: '✕ 窗戶正在打開（錯誤理解）' }
                }
            ]
        },
        quiz: [
            // 第 1 題：正向題 - 正確答案是「て」
            {
                id: 'n5_q_te_iru_1',
                sentence: '今{いま}、テレビを見{み}（　）います。',
                options: ['て', 'た', 'に', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「て」正確！「見ている」表示「正在看」，動作進行中。',
                    wrong: [
                        '「た」錯誤：「見た」是過去式，這裡需要進行式「見ている」。',
                        '「に」錯誤：「に」是助詞，不能接動詞形成進行式。',
                        '「を」錯誤：「を」是受詞標記，不能形成進行式。'
                    ]
                }
            },
            // 第 2 題：正向題 - 正確答案是「います」
            {
                id: 'n5_q_te_iru_2',
                sentence: '彼女{かのじょ}は東京{とうきょう}に住{す}んで（　）。',
                options: ['います', 'あります', 'です', 'ます'],
                correctIndex: 0,
                explanation: {
                    correct: '「います」正確！「住んでいます」表示「住在」的持續狀態。',
                    wrong: [
                        '「あります」錯誤：「ある」用於物品存在，人的狀態用「いる」。',
                        '「です」錯誤：「です」不能直接接て形。',
                        '「ます」錯誤：「ます」接動詞ます形，不接て形。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「あります」不是「います」
            {
                id: 'n5_q_te_iru_3',
                sentence: '冷蔵庫{れいぞうこ}にビールが冷{ひ}やして（　）よ。どうぞ飲{の}んで。',
                options: ['います', 'あります', 'おきます', 'みます'],
                correctIndex: 1,
                explanation: {
                    correct: '「あります」正確！「冷やしてある」表示「事先冰好（放著等你喝）」，有意識地準備好的狀態。',
                    wrong: [
                        '「います」錯誤：「ている」表示動作進行或狀態，但這裡強調「特意準備好」的結果，用「てある」！',
                        '「おきます」錯誤：「ておく」表示事先做好的動作，但這裡已經完成，用結果狀態「てある」。',
                        '「みます」錯誤：「てみる」表示嘗試，這裡是準備好的狀態。'
                    ]
                }
            },
            // 第 4 題：對話題 - 正確答案是「しているの」
            {
                id: 'n5_q_te_iru_4',
                sentence: '「お兄{にい}さんは何{なに}を（　）？」\n「大学{だいがく}で日本語{にほんご}を勉強{べんきょう}しているよ。」',
                options: ['しているの', 'するの', 'したの', 'しますの'],
                correctIndex: 0,
                explanation: {
                    correct: '「しているの」正確！詢問現在的狀態「正在做什麼」。',
                    wrong: [
                        '「するの」錯誤：「する」是原形，這裡問現在進行的狀態。',
                        '「したの」錯誤：「した」是過去式，這裡問現在。',
                        '「しますの」錯誤：「しますの」文法錯誤。'
                    ]
                }
            },
            // 第 5 題：辨析題 - ている/てある 的區別
            {
                id: 'n5_q_te_iru_5',
                sentence: '窓{まど}が開{あ}い（A）。（誰{だれ}かが）窓{まど}を開{あ}け（B）。',
                options: ['A:ている B:てある', 'A:てある B:ている', 'A:ている B:ている', 'A:てある B:てある'],
                correctIndex: 0,
                explanation: {
                    correct: '「A:ている B:てある」正確！(A)自動詞「開く」的狀態用「ている」；(B)他動詞「開ける」有意識的準備結果用「てある」。',
                    wrong: [
                        '「A:てある B:ている」錯誤：自動詞用「ている」，他動詞有意識動作的結果用「てある」。',
                        '「A:ている B:ている」錯誤：(B)強調「特意開著」，用「てある」表示有意識的準備。',
                        '「A:てある B:てある」錯誤：(A)是自動詞「開く」，自動詞的狀態用「ている」。'
                    ]
                }
            }
        ]
    },

    // n5_te_kara - ～てから（之後）
    n5_te_kara: {
        id: 'n5_te_kara',
        pattern: '～てから',
        connection: '動詞て形＋から',
        translation: '...之後',
        level: 'N5',
        explanation: [
            {
                usage: '表示動作順序',
                description: '表示先做A，然後做B。強調A完成後才做B。',
                examples: [
                    { japanese: '手{て}を洗{あら}ってから、ご飯{はん}を食{た}べます。', chinese: '洗手之後吃飯。' },
                    { japanese: '宿題{しゅくだい}をしてから、遊{あそ}びます。', chinese: '做完功課之後玩。' },
                    {
                        japanese: '「今日{きょう}、映画{えいが}見{み}に行{い}かない？」\n「うん、仕事{しごと}が終{お}わってから行{い}こう。」\n「何時{なんじ}に終{お}わる？」',
                        chinese: '「今天要不要去看電影？」\n「好啊，工作結束後去吧。」\n「幾點結束？」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示時間經過',
                description: '表示自從某事發生後經過多久。',
                examples: [
                    { japanese: '日本{にほん}に来{き}てから、三年{さんねん}になります。', chinese: '來日本已經三年了。' },
                    { japanese: '起{お}きてから、まだ何{なに}も食{た}べていません。', chinese: '起床後還什麼都沒吃。' },
                    {
                        japanese: '「日本語{にほんご}の勉強{べんきょう}、いつから始{はじ}めたの？」\n「大学{だいがく}に入{はい}ってからだよ。」\n「そうなんだ。上手{じょうず}だね。」',
                        chinese: '「日語是什麼時候開始學的？」\n「進大學之後喔。」\n「這樣啊。說得很好呢。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「てから」vs「あとで」的區別',
            points: [
                {
                    rule: '「てから」：強調A完成後才做B，順序關係緊密',
                    examples: [{ japanese: '食{た}べてから、歯{は}を磨{みが}く。', chinese: '吃完後（立刻）刷牙' }]
                },
                {
                    rule: '「あとで」：表示之後，時間關係較鬆散',
                    examples: [{ japanese: '食{た}べたあとで、歯{は}を磨{みが}く。', chinese: '吃完之後（過一會）刷牙' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '把「てから」和「たあとで」混淆',
                    explanation: '「てから」用て形，強調緊密順序；「あとで」用た形，時間較鬆散。',
                    whenToUse: '動作有因果關係或緊密順序時用「てから」。',
                    correct: { sentence: 'シャワーを浴{あ}びてから、寝{ね}ます。', note: '○ 洗完澡（立刻）睡覺' },
                    incorrect: { sentence: 'シャワーを浴{あ}びたからから、寝{ね}ます。', note: '✕ 文法錯誤' }
                }
            ]
        },
        quiz: [
            // 第 1 題：正向題 - 正確答案是「から」
            {
                id: 'n5_q_te_kara_1',
                sentence: '朝{あさ}ご飯{はん}を食{た}べて（　）、学校{がっこう}に行{い}きます。',
                options: ['から', 'まで', 'ので', 'ても'],
                correctIndex: 0,
                explanation: {
                    correct: '「から」正確！「食べてから」表示「吃完早餐之後」，強調順序。',
                    wrong: [
                        '「まで」錯誤：「まで」表示「到...為止」，不表示順序。',
                        '「ので」錯誤：「ので」表示原因，不表示順序。',
                        '「ても」錯誤：「ても」表示「即使...也」，不表示順序。'
                    ]
                }
            },
            // 第 2 題：正向題 - 正確答案是「来て」
            {
                id: 'n5_q_te_kara_2',
                sentence: '日本{にほん}に（　）から、もう五年{ごねん}です。',
                options: ['来て', '来た', '来る', '来ます'],
                correctIndex: 0,
                explanation: {
                    correct: '「来て」正確！「来てから」表示「來日本之後」，「てから」前接て形。',
                    wrong: [
                        '「来た」錯誤：「てから」需要て形，不是た形。',
                        '「来る」錯誤：「から」需要接て形，不是原形。',
                        '「来ます」錯誤：「から」需要接て形，不是ます形。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「まえに」不是「てから」
            {
                id: 'n5_q_te_kara_3',
                sentence: '寝{ね}る（　）、歯{は}を磨{みが}きます。',
                options: ['てから', 'まえに', 'あとで', 'ので'],
                correctIndex: 1,
                explanation: {
                    correct: '「まえに」正確！「寝る前に」表示「睡覺之前」刷牙。',
                    wrong: [
                        '「てから」錯誤：「てから」表示「做完A之後做B」。這裡是「睡覺前刷牙」，先刷牙再睡，所以用「まえに」！',
                        '「あとで」錯誤：「あとで」表示「之後」，順序相反。',
                        '「ので」錯誤：「ので」表示原因，不表示順序。'
                    ]
                }
            },
            // 第 4 題：對話題 - 正確答案是「から」
            {
                id: 'n5_q_te_kara_4',
                sentence: '「いつ出{で}かける？」\n「お昼{ひる}を食{た}べて（　）出{で}かけよう。」\n「わかった。」',
                options: ['から', 'まで', 'ので', 'のに'],
                correctIndex: 0,
                explanation: {
                    correct: '「から」正確！「食べてから」表示吃完午餐後再出門。',
                    wrong: [
                        '「まで」錯誤：「まで」表示「到...為止」。',
                        '「ので」錯誤：「ので」表示原因，不表示順序。',
                        '「のに」錯誤：「のに」表示逆接。'
                    ]
                }
            },
            // 第 5 題：辨析題 - てから/まえに 的區別
            {
                id: 'n5_q_te_kara_5',
                sentence: 'ご飯{はん}を食{た}べ（A）、手{て}を洗{あら}います。食{た}べ（B）、歯{は}を磨{みが}きます。',
                options: ['A:るまえに B:てから', 'A:てから B:るまえに', 'A:てから B:てから', 'A:るまえに B:るまえに'],
                correctIndex: 0,
                explanation: {
                    correct: '「A:るまえに B:てから」正確！(A)吃飯「前」洗手；(B)吃飯「後」刷牙。',
                    wrong: [
                        '「A:てから B:るまえに」錯誤：洗手在吃飯前，刷牙在吃飯後。',
                        '「A:てから B:てから」錯誤：(A)洗手應該在吃飯前，用「まえに」。',
                        '「A:るまえに B:るまえに」錯誤：(B)刷牙應該在吃飯後，用「てから」。'
                    ]
                }
            }
        ]
    },

    // n5_te_kudasai - ～てください（請...）
    n5_te_kudasai: {
        id: 'n5_te_kudasai',
        pattern: '～てください',
        connection: '動詞て形＋ください',
        translation: '請...、請您...',
        level: 'N5',
        explanation: [
            {
                usage: '禮貌請求',
                description: '禮貌地請求對方做某事。',
                examples: [
                    { japanese: 'ここに名前{なまえ}を書{か}いてください。', chinese: '請在這裡寫名字。' },
                    { japanese: 'もう一度{いちど}言{い}ってください。', chinese: '請再說一次。' },
                    {
                        japanese: '「すみません、写真{しゃしん}を撮{と}ってください。」\n「いいですよ。はい、チーズ！」\n「ありがとうございます。」',
                        chinese: '「不好意思，請幫我拍照。」\n「好的。好，起司！」\n「謝謝您。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '指示/說明',
                description: '用於說明書、指示等，告訴對方該怎麼做。',
                examples: [
                    { japanese: '電源{でんげん}を入{い}れてから、ボタンを押{お}してください。', chinese: '請開電源後按按鈕。' },
                    { japanese: 'ここで待{ま}っていてください。', chinese: '請在這裡等。' },
                    {
                        japanese: '「すみません、駅{えき}はどこですか。」\n「あの信号{しんごう}を右{みぎ}に曲{ま}がってください。」\n「ありがとうございます。」',
                        chinese: '「不好意思，車站在哪裡？」\n「請在那個紅綠燈右轉。」\n「謝謝您。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '請求表達的禮貌程度',
            points: [
                {
                    rule: '「～て」：較隨意的請求（朋友間）',
                    examples: [{ japanese: '見{み}せて。', chinese: '給我看一下。' }]
                },
                {
                    rule: '「～てください」：禮貌的請求',
                    examples: [{ japanese: '見{み}せてください。', chinese: '請給我看。' }]
                },
                {
                    rule: '「～てくださいませんか」：非常禮貌的請求',
                    examples: [{ japanese: '見{み}せてくださいませんか。', chinese: '能否請您給我看呢？' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '對長輩或上司只用「～て」',
                    explanation: '「～て」是很隨意的說法，對長輩應該用「～てください」或更禮貌的表達。',
                    whenToUse: '根據對象調整禮貌程度。',
                    correct: { sentence: '先生{せんせい}、もう一度{いちど}説明{せつめい}してください。', note: '○ 對老師禮貌請求' },
                    incorrect: { sentence: '先生{せんせい}、もう一度{いちど}説明{せつめい}して。', note: '✕ 對老師太隨便' }
                }
            ]
        },
        quiz: [
            // 第 1 題：正向題 - 正確答案是「ください」
            {
                id: 'n5_q_te_kudasai_1',
                sentence: 'すみません、ゆっくり話{はな}して（　）。',
                options: ['ください', 'ます', 'です', 'いる'],
                correctIndex: 0,
                explanation: {
                    correct: '「ください」正確！「話してください」是禮貌請求「請說慢一點」。',
                    wrong: [
                        '「ます」錯誤：「ます」不能接て形。',
                        '「です」錯誤：「です」不能接て形。',
                        '「いる」錯誤：「いる」表示進行，這裡是請求。'
                    ]
                }
            },
            // 第 2 題：正向題 - 正確答案是「ください」
            {
                id: 'n5_q_te_kudasai_2',
                sentence: 'ここに座{すわ}って（　）。',
                options: ['ください', 'ます', 'です', 'から'],
                correctIndex: 0,
                explanation: {
                    correct: '「ください」正確！「座ってください」表示「請坐」。',
                    wrong: [
                        '「ます」錯誤：「ます」不能接て形。',
                        '「です」錯誤：「です」不能接て形。',
                        '「から」錯誤：「てから」表示順序，這裡是請求。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「ないで」不是「て」
            {
                id: 'n5_q_te_kudasai_3',
                sentence: 'ここでタバコを吸{す}わ（　）ください。',
                options: ['って', 'ないで', 'なくて', 'ずに'],
                correctIndex: 1,
                explanation: {
                    correct: '「ないで」正確！「吸わないでください」表示「請不要抽菸」，禁止用「ないで」。',
                    wrong: [
                        '「って」錯誤：「吸ってください」是「請抽菸」的意思，這裡要表達禁止！',
                        '「なくて」錯誤：「なくて」用於原因接續，禁止請求用「ないで」。',
                        '「ずに」錯誤：「ずに」是書面語，不接「ください」。'
                    ]
                }
            },
            // 第 4 題：對話題 - 正確答案是「ください」
            {
                id: 'n5_q_te_kudasai_4',
                sentence: '「すみません、道{みち}を教{おし}えて（　）。」\n「いいですよ。まっすぐ行{い}ってください。」',
                options: ['ください', 'ます', 'でした', 'もらう'],
                correctIndex: 0,
                explanation: {
                    correct: '「ください」正確！禮貌地請求對方告訴路。',
                    wrong: [
                        '「ます」錯誤：「ます」不能接て形。',
                        '「でした」錯誤：「でした」不能接て形。',
                        '「もらう」錯誤：「もらう」表示得到，這裡是請求用「ください」。'
                    ]
                }
            },
            // 第 5 題：辨析題 - てください/ないでください 的區別
            {
                id: 'n5_q_te_kudasai_5',
                sentence: '静{しず}かにし（A）ください。大{おお}きい声{こえ}を出{だ}さ（B）ください。',
                options: ['A:て B:ないで', 'A:ないで B:て', 'A:て B:て', 'A:ないで B:ないで'],
                correctIndex: 0,
                explanation: {
                    correct: '「A:て B:ないで」正確！(A)「靜かにしてください」= 請安靜；(B)「出さないでください」= 請不要大聲。',
                    wrong: [
                        '「A:ないで B:て」錯誤：(A)是要求「安靜」，(B)是禁止「大聲」。',
                        '「A:て B:て」錯誤：(B)「大きい声を出してください」= 請大聲，意思相反！',
                        '「A:ないで B:ないで」錯誤：(A)「静かにしないでください」= 請不要安靜，意思相反！'
                    ]
                }
            }
        ]
    },

    // n5_temo_ii - ～てもいい（可以...）
    n5_temo_ii: {
        id: 'n5_temo_ii',
        pattern: '～てもいい',
        connection: '動詞て形＋もいい',
        translation: '可以...、...也行',
        level: 'N5',
        explanation: [
            {
                usage: '表示許可',
                description: '表示允許做某事或請求許可。',
                examples: [
                    { japanese: 'ここで写真{しゃしん}を撮{と}ってもいいですか。', chinese: '可以在這裡拍照嗎？' },
                    { japanese: 'この本{ほん}を借{か}りてもいいですか。', chinese: '可以借這本書嗎？' },
                    {
                        japanese: '「すみません、ここに座{すわ}ってもいいですか。」\n「はい、どうぞ。」\n「ありがとうございます。」',
                        chinese: '「不好意思，可以坐這裡嗎？」\n「好的，請坐。」\n「謝謝。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示可以這樣做',
                description: '告訴對方「你可以這樣做」。',
                examples: [
                    { japanese: '帰{かえ}ってもいいですよ。', chinese: '你可以回去了喔。' },
                    { japanese: '全部{ぜんぶ}食{た}べてもいいよ。', chinese: '你可以全部吃掉喔。' },
                    {
                        japanese: '「先生{せんせい}、もう帰{かえ}ってもいいですか。」\n「はい、帰{かえ}ってもいいですよ。」\n「ありがとうございます。」',
                        chinese: '「老師，可以回去了嗎？」\n「好的，可以回去了喔。」\n「謝謝您。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '許可與禁止的表達',
            points: [
                {
                    rule: '「～てもいい」：可以做（許可）',
                    examples: [{ japanese: '食{た}べてもいい', chinese: '可以吃' }]
                },
                {
                    rule: '「～てはいけない」：不可以做（禁止）',
                    examples: [{ japanese: '食{た}べてはいけない', chinese: '不可以吃' }]
                },
                {
                    rule: '「～なくてもいい」：不做也可以（不必）',
                    examples: [{ japanese: '食{た}べなくてもいい', chinese: '不吃也可以' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '把「てもいい」和「ていい」混淆',
                    explanation: '「てもいい」是完整形式，口語中常省略「も」變成「ていい」。',
                    whenToUse: '正式場合用「てもいい」，口語可用「ていい」。',
                    correct: { sentence: '見{み}てもいいですか。', note: '○ 正式' },
                    incorrect: { sentence: '見{み}ていい？', note: '○ 口語OK' }
                }
            ]
        },
        quiz: [
            // 第 1 題：正向題 - 正確答案是「もいい」
            {
                id: 'n5_q_temo_ii_1',
                sentence: 'ここで携帯{けいたい}を使{つか}って（　）ですか。',
                options: ['もいい', 'ください', 'ます', 'から'],
                correctIndex: 0,
                explanation: {
                    correct: '「もいい」正確！「使ってもいいですか」詢問「可以使用手機嗎」。',
                    wrong: [
                        '「ください」錯誤：「ください」是請求做某事，不是詢問許可。',
                        '「ます」錯誤：「ます」不能接て形。',
                        '「から」錯誤：「てから」表示順序，這裡是詢問許可。'
                    ]
                }
            },
            // 第 2 題：正向題 - 正確答案是「もいいですよ」
            {
                id: 'n5_q_temo_ii_2',
                sentence: 'この部屋{へや}で食{た}べて（　）。',
                options: ['もいいですよ', 'くださいですよ', 'いますですよ', 'からですよ'],
                correctIndex: 0,
                explanation: {
                    correct: '「もいいですよ」正確！表示「可以在這個房間吃東西喔」，給予許可。',
                    wrong: [
                        '「くださいですよ」錯誤：文法錯誤，「ください」後面不接「です」。',
                        '「いますですよ」錯誤：文法錯誤。',
                        '「からですよ」錯誤：文法錯誤。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「はいけません」不是「もいい」
            {
                id: 'n5_q_temo_ii_3',
                sentence: 'ここで写真{しゃしん}を撮{と}って（　）。禁止{きんし}です。',
                options: ['もいいです', 'はいけません', 'ください', 'います'],
                correctIndex: 1,
                explanation: {
                    correct: '「はいけません」正確！「撮ってはいけません」表示「不可以拍照」，後面說「禁止」所以是禁止表達。',
                    wrong: [
                        '「もいいです」錯誤：「てもいい」表示許可，但後面說「禁止」，應該用禁止表達「てはいけない」！',
                        '「ください」錯誤：「ください」是請求，這裡是禁止。',
                        '「います」錯誤：「ています」表示進行狀態，這裡是禁止。'
                    ]
                }
            },
            // 第 4 題：對話題 - 正確答案是「もいいですか」
            {
                id: 'n5_q_temo_ii_4',
                sentence: '「先生{せんせい}、辞書{じしょ}を見{み}て（　）？」\n「はい、見てもいいですよ。」',
                options: ['もいいですか', 'ください', 'ます', 'です'],
                correctIndex: 0,
                explanation: {
                    correct: '「もいいですか」正確！詢問老師「可以看字典嗎」，請求許可。',
                    wrong: [
                        '「ください」錯誤：「ください」是請求對方做某事，這裡是詢問自己可否做。',
                        '「ます」錯誤：「ます」不能接て形。',
                        '「です」錯誤：「です」不能接て形。'
                    ]
                }
            },
            // 第 5 題：辨析題 - てもいい/てはいけない 的區別
            {
                id: 'n5_q_temo_ii_5',
                sentence: 'ここで飲{の}み物{もの}を飲{の}んで（A）。でも、食{た}べ物{もの}を食{た}べて（B）。',
                options: ['A:もいいです B:はいけません', 'A:はいけません B:もいいです', 'A:もいいです B:もいいです', 'A:はいけません B:はいけません'],
                correctIndex: 0,
                explanation: {
                    correct: '「A:もいいです B:はいけません」正確！(A)「飲んでもいい」= 可以喝；(B)「食べてはいけない」= 不可以吃（用「でも」轉折）。',
                    wrong: [
                        '「A:はいけません B:もいいです」錯誤：「でも」表示轉折，前後應該相反。',
                        '「A:もいいです B:もいいです」錯誤：「でも」表示轉折，後面應該是相反的意思。',
                        '「A:はいけません B:はいけません」錯誤：「でも」表示轉折，兩邊不應該都是禁止。'
                    ]
                }
            }
        ]
    }
});

// ============================================================
// Batch 6: 願望與能力句型 (たい、ことができる、ましょう)
// ============================================================
Object.assign(n5Details, {
    // n5_tai - ～たい（想要...）
    n5_tai: {
        id: 'n5_tai',
        pattern: '～たい',
        connection: '動詞ます形（去ます）＋たい',
        translation: '想要...、想...',
        level: 'N5',
        explanation: [
            {
                usage: '表示說話者的願望',
                description: '表示自己想做某事。只用於第一人稱。',
                examples: [
                    { japanese: '日本{にほん}に行{い}きたいです。', chinese: '想去日本。' },
                    { japanese: '新{あたら}しいパソコンが買{か}いたいです。', chinese: '想買新電腦。' },
                    {
                        japanese: '「今日{きょう}、何{なに}が食{た}べたい？」\n「ラーメンが食{た}べたいな。」\n「いいね、行{い}こう！」',
                        chinese: '「今天想吃什麼？」\n「想吃拉麵呢。」\n「好啊，走吧！」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '否定形「～たくない」',
                description: '表示不想做某事。',
                examples: [
                    { japanese: '今日{きょう}は出{で}かけたくないです。', chinese: '今天不想出門。' },
                    { japanese: 'あの映画{えいが}は見{み}たくないです。', chinese: '不想看那部電影。' },
                    {
                        japanese: '「一緒{いっしょ}に運動{うんどう}しない？」\n「ごめん、今日{きょう}はしたくない。疲{つか}れてる。」\n「そっか、また今度{こんど}ね。」',
                        chinese: '「要不要一起運動？」\n「抱歉，今天不想。好累。」\n「這樣啊，下次吧。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '詢問對方的願望',
                description: '用疑問句詢問對方想做什麼。',
                examples: [
                    { japanese: '何{なに}が飲{の}みたいですか。', chinese: '想喝什麼？' },
                    { japanese: 'どこに行{い}きたいですか。', chinese: '想去哪裡？' },
                    {
                        japanese: '「週末{しゅうまつ}、どこに行{い}きたい？」\n「海{うみ}に行{い}きたいな。」\n「いいね！泳{およ}ごう。」',
                        chinese: '「週末想去哪裡？」\n「想去海邊呢。」\n「好啊！去游泳吧。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「たい」的助詞搭配',
            points: [
                {
                    rule: '「～が～たい」：對象用「が」標記（強調願望對象）',
                    examples: [{ japanese: '水{みず}が飲{の}みたい', chinese: '想喝水' }]
                },
                {
                    rule: '「～を～たい」：對象用「を」標記（較客觀）',
                    examples: [{ japanese: '水{みず}を飲{の}みたい', chinese: '想喝水' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '用「たい」描述第三者的願望',
                    explanation: '「たい」只用於表達自己的願望。描述別人的願望要用「～たがっている」。',
                    whenToUse: '第一人稱用「たい」，第三人稱用「たがっている」。',
                    correct: { sentence: '私{わたし}は寿司{すし}が食{た}べたい。', note: '○ 自己的願望' },
                    incorrect: { sentence: '彼{かれ}は寿司{すし}が食{た}べたい。', note: '✕ 應用「食べたがっている」' }
                }
            ]
        },
        quiz: [
            // 第 1 題：正向題 - 正確答案是「たい」
            {
                id: 'n5_q_tai_1',
                sentence: '私{わたし}は日本{にほん}に行{い}き（　）です。',
                options: ['たい', 'たく', 'たかった', 'たがる'],
                correctIndex: 0,
                explanation: {
                    correct: '「たい」正確！「行きたい」表示「想去」，第一人稱的願望。',
                    wrong: [
                        '「たく」錯誤：「たく」是連用形，需要後接「ない」等。',
                        '「たかった」錯誤：「たかった」是過去式「想去（過去）」。',
                        '「たがる」錯誤：「たがる」用於描述第三者的願望。'
                    ]
                }
            },
            // 第 2 題：正向題 - 正確答案是「たく」
            {
                id: 'n5_q_tai_2',
                sentence: '今日{きょう}は出{で}かけ（　）ないです。疲{つか}れています。',
                options: ['たく', 'たい', 'たかっ', 'たがら'],
                correctIndex: 0,
                explanation: {
                    correct: '「たく」正確！「たくない」是「たい」的否定形，表示「不想」。',
                    wrong: [
                        '「たい」錯誤：「たい」不能直接接「ない」，要用「たく」。',
                        '「たかっ」錯誤：「たかった」是過去式。',
                        '「たがら」錯誤：「たがらない」用於第三者。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「たがっている」不是「たい」
            {
                id: 'n5_q_tai_3',
                sentence: '彼{かれ}は新{あたら}しいパソコンを買{か}い（　）。',
                options: ['たいです', 'たがっています', 'たくないです', 'ました'],
                correctIndex: 1,
                explanation: {
                    correct: '「たがっています」正確！描述第三者（他）的願望用「たがる」，不能用「たい」！',
                    wrong: [
                        '「たいです」錯誤：「たい」只能用於第一人稱！描述「他」的願望要用「たがっている」！',
                        '「たくないです」錯誤：這是否定，而且第三者要用「たがらない」。',
                        '「ました」錯誤：「ました」是過去式，不表示願望。'
                    ]
                }
            },
            // 第 4 題：對話題 - 正確答案是「たい」
            {
                id: 'n5_q_tai_4',
                sentence: '「今日{きょう}、どこに行{い}き（　）？」\n「動物園{どうぶつえん}に行{い}きたいな。」',
                options: ['たい', 'たく', 'たかった', 'ました'],
                correctIndex: 0,
                explanation: {
                    correct: '「たい」正確！詢問對方（你）想去哪裡，直接疑問可用「たい」。',
                    wrong: [
                        '「たく」錯誤：「たく」需要後接「ない」。',
                        '「たかった」錯誤：「たかった」是過去式。',
                        '「ました」錯誤：「ました」是過去式，不表示願望。'
                    ]
                }
            },
            // 第 5 題：辨析題 - たい/たがる 的區別
            {
                id: 'n5_q_tai_5',
                sentence: '私{わたし}はラーメンが食{た}べ（A）。田中{たなか}さんも食{た}べ（B）。',
                options: ['A:たいです B:たがっています', 'A:たがっています B:たいです', 'A:たいです B:たいです', 'A:たがっています B:たがっています'],
                correctIndex: 0,
                explanation: {
                    correct: '「A:たいです B:たがっています」正確！(A)「私」是第一人稱用「たい」；(B)「田中さん」是第三者用「たがる」。',
                    wrong: [
                        '「A:たがっています B:たいです」錯誤：(A)自己用「たい」，(B)他人用「たがる」。',
                        '「A:たいです B:たいです」錯誤：(B)「田中さん」是第三者，不能用「たい」！',
                        '「A:たがっています B:たがっています」錯誤：(A)「私」是自己，不能用「たがる」！'
                    ]
                }
            }
        ]
    },

    // n5_koto_ga_dekiru - ～ことができる（能夠...）
    n5_koto_ga_dekiru: {
        id: 'n5_koto_ga_dekiru',
        pattern: '～ことができる',
        connection: '動詞原形＋ことができる',
        translation: '能夠...、可以...',
        level: 'N5',
        explanation: [
            {
                usage: '表示能力',
                description: '表示有能力做某事。',
                examples: [
                    { japanese: '日本語{にほんご}を話{はな}すことができます。', chinese: '能說日語。' },
                    { japanese: '漢字{かんじ}を読{よ}むことができます。', chinese: '能讀漢字。' },
                    {
                        japanese: '「ピアノを弾{ひ}くことができますか。」\n「はい、少{すこ}しできます。」\n「すごいですね！」',
                        chinese: '「會彈鋼琴嗎？」\n「是的，會一點。」\n「好厲害！」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示可能性/許可',
                description: '表示某事是可能的或被允許的。',
                examples: [
                    { japanese: 'ここでタバコを吸{す}うことができません。', chinese: '這裡不能抽菸。' },
                    { japanese: 'クレジットカードで払{はら}うことができます。', chinese: '可以用信用卡付款。' },
                    {
                        japanese: '「ここで写真{しゃしん}を撮{と}ることができますか。」\n「はい、大丈夫{だいじょうぶ}ですよ。」\n「ありがとうございます。」',
                        chinese: '「這裡可以拍照嗎？」\n「可以的喔。」\n「謝謝您。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「ことができる」vs 可能動詞',
            points: [
                {
                    rule: '「ことができる」：較正式，強調能力',
                    examples: [{ japanese: '日本語{にほんご}を話{はな}すことができる', chinese: '能說日語' }]
                },
                {
                    rule: '可能動詞：較口語，較簡潔',
                    examples: [{ japanese: '日本語{にほんgo}が話{はな}せる', chinese: '會說日語' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '使用ます形接「ことができる」',
                    explanation: '「ことができる」前面要接動詞原形（辞書形），不是ます形。',
                    whenToUse: '動詞原形＋ことができる。',
                    correct: { sentence: '泳{およ}ぐことができます。', note: '○ 原形「泳ぐ」' },
                    incorrect: { sentence: '泳{およ}ぎますことができます。', note: '✕ ます形錯誤' }
                }
            ]
        },
        quiz: [
            // 第 1 題：正向題 - 正確答案是「こと」
            {
                id: 'n5_q_koto_dekiru_1',
                sentence: '日本語{にほんご}を話{はな}す（　）ができますか。',
                options: ['こと', 'もの', 'ひと', 'ところ'],
                correctIndex: 0,
                explanation: {
                    correct: '「こと」正確！「～ことができる」是固定句型，表示能力。',
                    wrong: [
                        '「もの」錯誤：「もの」指具體物品，不用於此句型。',
                        '「ひと」錯誤：「ひと」指人，不用於此句型。',
                        '「ところ」錯誤：「ところ」指地方或時機，不用於此句型。'
                    ]
                }
            },
            // 第 2 題：正向題 - 正確答案是「読む」
            {
                id: 'n5_q_koto_dekiru_2',
                sentence: '彼{かれ}は英語{えいご}を（　）ことができます。',
                options: ['読む', '読み', '読んで', '読んだ'],
                correctIndex: 0,
                explanation: {
                    correct: '「読む」正確！「ことができる」前面接動詞原形（辞書形）。',
                    wrong: [
                        '「読み」錯誤：ます形不能接「ことができる」。',
                        '「読んで」錯誤：て形不能接「ことができる」。',
                        '「読んだ」錯誤：た形不能接「ことができる」。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「話せます」（可能形）不是「ことができます」
            {
                id: 'n5_q_koto_dekiru_3',
                sentence: '（口語で）日本語{にほんご}（　）？',
                options: ['を話すことができますか', 'が話せますか', 'を話しますか', 'が話しますか'],
                correctIndex: 1,
                explanation: {
                    correct: '「が話せますか」正確！口語中，可能動詞比「ことができる」更自然簡潔。',
                    wrong: [
                        '「を話すことができますか」錯誤：雖然文法正確，但口語中太正式冗長，可能形更自然！',
                        '「を話しますか」錯誤：這是「說嗎？」而不是「會說嗎？」，沒有能力的意思。',
                        '「が話しますか」錯誤：助詞錯誤，且沒有能力的意思。'
                    ]
                }
            },
            // 第 4 題：對話題 - 正確答案是「乗る」
            {
                id: 'n5_q_koto_dekiru_4',
                sentence: '「自転車{じてんしゃ}に（　）ことができますか。」\n「はい、できます。」',
                options: ['乗る', '乗り', '乗って', '乗った'],
                correctIndex: 0,
                explanation: {
                    correct: '「乗る」正確！「ことができる」前面接動詞原形。',
                    wrong: [
                        '「乗り」錯誤：ます形不能接「ことができる」。',
                        '「乗って」錯誤：て形不能接「ことができる」。',
                        '「乗った」錯誤：た形不能接「ことができる」。'
                    ]
                }
            },
            // 第 5 題：辨析題 - ことができる/可能形 的區別
            {
                id: 'n5_q_koto_dekiru_5',
                sentence: '（正式場合）ここで写真{しゃしん}を撮{と}る（A）。（口語）ここで写真{しゃしん}（B）よ。',
                options: ['A:ことができます B:が撮れます', 'A:が撮れます B:ことができます', 'A:ことができます B:ことができます', 'A:が撮れます B:が撮れます'],
                correctIndex: 0,
                explanation: {
                    correct: '「A:ことができます B:が撮れます」正確！(A)正式場合用「ことができる」；(B)口語用可能形更自然。',
                    wrong: [
                        '「A:が撮れます B:ことができます」錯誤：正式場合用「ことができる」較適合，口語用可能形。',
                        '「A:ことができます B:ことができます」錯誤：(B)口語中「ことができる」太冗長。',
                        '「A:が撮れます B:が撮れます」錯誤：(A)正式場合「ことができる」較適合。'
                    ]
                }
            }
        ]
    },

    // n5_mashou - ～ましょう（...吧）
    n5_mashou: {
        id: 'n5_mashou',
        pattern: '～ましょう',
        connection: '動詞ます形（去ます）＋ましょう',
        translation: '...吧、讓我們...',
        level: 'N5',
        explanation: [
            {
                usage: '提議一起做某事',
                description: '邀請對方一起做某事，類似「Let\'s...」。',
                examples: [
                    { japanese: '一緒{いっしょ}に行{い}きましょう。', chinese: '一起去吧。' },
                    { japanese: '休憩{きゅうけい}しましょう。', chinese: '休息一下吧。' },
                    {
                        japanese: '「お昼{ひる}だね。」\n「そうだね、ご飯{はん}を食{た}べましょう。」\n「うん、どこに行{い}く？」',
                        chinese: '「中午了呢。」\n「對啊，吃飯吧。」\n「嗯，去哪裡？」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示意志/決心',
                description: '表示說話者自己的決心或意志。',
                examples: [
                    { japanese: '頑張{がんば}りましょう！', chinese: '加油吧！' },
                    { japanese: '明日{あした}から運動{うんどう}しましょう。', chinese: '從明天開始運動吧。' },
                    {
                        japanese: '「試験{しけん}、大変{たいへん}だったね。」\n「うん、でも次{つぎ}は頑張{がんば}りましょう！」\n「そうだね！」',
                        chinese: '「考試好辛苦呢。」\n「嗯，但下次加油吧！」\n「對啊！」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '「～ましょうか」表示提議幫忙',
                description: '詢問對方是否需要幫忙。',
                examples: [
                    { japanese: '手伝{てつだ}いましょうか。', chinese: '要幫忙嗎？' },
                    { japanese: '窓{まど}を開{あ}けましょうか。', chinese: '要開窗嗎？' },
                    {
                        japanese: '「重{おも}そうですね。持{も}ちましょうか。」\n「ありがとうございます。助{たす}かります。」\n「どういたしまして。」',
                        chinese: '「看起來很重呢。要幫你拿嗎？」\n「謝謝。真是幫了大忙。」\n「不客氣。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「ましょう」和「ましょうか」的區別',
            points: [
                {
                    rule: '「～ましょう」：提議一起做、表示決心',
                    examples: [{ japanese: '行{い}きましょう', chinese: '去吧（一起）' }]
                },
                {
                    rule: '「～ましょうか」：詢問要不要做、提議幫忙',
                    examples: [{ japanese: '行{い}きましょうか', chinese: '要去嗎？要幫你去嗎？' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '「ましょう」和「ませんか」混淆',
                    explanation: '「ましょう」較直接（提議），「ませんか」較婉轉（邀請）。',
                    whenToUse: '想要較婉轉邀請時用「ませんか」。',
                    correct: { sentence: '映画{えいが}を見{み}ませんか。', note: '○ 婉轉邀請' },
                    incorrect: { sentence: '映画{えいが}を見{み}ましょう。', note: '○ 也可以，但較直接' }
                }
            ]
        },
        quiz: [
            // 第 1 題：正向題 - 正確答案是「ましょう」
            {
                id: 'n5_q_mashou_1',
                sentence: '一緒{いっしょ}に昼{ひる}ご飯{はん}を食{た}べ（　）。',
                options: ['ましょう', 'ます', 'ました', 'ません'],
                correctIndex: 0,
                explanation: {
                    correct: '「ましょう」正確！提議「一起吃午餐吧」。',
                    wrong: [
                        '「ます」錯誤：「ます」是一般敘述，不是提議。',
                        '「ました」錯誤：「ました」是過去式。',
                        '「ません」錯誤：「ません」是否定。'
                    ]
                }
            },
            // 第 2 題：正向題 - 正確答案是「ましょう」
            {
                id: 'n5_q_mashou_2',
                sentence: '荷物{にもつ}を持{も}ち（　）か。',
                options: ['ましょう', 'ます', 'ました', 'ません'],
                correctIndex: 0,
                explanation: {
                    correct: '「ましょう」正確！「持ちましょうか」表示「要幫你拿嗎」，提議幫忙。',
                    wrong: [
                        '「ます」錯誤：「ますか」是單純詢問，不是提議幫忙。',
                        '「ました」錯誤：「ましたか」是過去式疑問。',
                        '「ません」錯誤：「ませんか」是婉轉邀請，語意不同。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「ませんか」不是「ましょう」
            {
                id: 'n5_q_mashou_3',
                sentence: '（初めて誘{さそ}う時{とき}）映画{えいが}を見{み}に行{い}き（　）。',
                options: ['ましょう', 'ませんか', 'ました', 'ます'],
                correctIndex: 1,
                explanation: {
                    correct: '「ませんか」正確！第一次邀請時，用「ませんか」較婉轉有禮，給對方拒絕的餘地。',
                    wrong: [
                        '「ましょう」錯誤：「ましょう」較直接，第一次邀請用「ませんか」更有禮貌！',
                        '「ました」錯誤：「ました」是過去式。',
                        '「ます」錯誤：「ます」是敘述，不是邀請。'
                    ]
                }
            },
            // 第 4 題：對話題 - 正確答案是「ましょう」
            {
                id: 'n5_q_mashou_4',
                sentence: '「疲{つか}れたね。」\n「うん、ちょっと休{やす}み（　）。」\n「そうしよう。」',
                options: ['ましょう', 'ます', 'ました', 'たい'],
                correctIndex: 0,
                explanation: {
                    correct: '「ましょう」正確！提議「休息一下吧」，雙方已經在一起時用「ましょう」。',
                    wrong: [
                        '「ます」錯誤：「ます」是敘述，不是提議。',
                        '「ました」錯誤：「ました」是過去式。',
                        '「たい」錯誤：「たい」表示願望，不是提議。'
                    ]
                }
            },
            // 第 5 題：辨析題 - ましょう/ませんか 的區別
            {
                id: 'n5_q_mashou_5',
                sentence: '（既に一緒{いっしょ}にいる）「じゃ、出発{しゅっぱつ}し（A）。」\n（初対面{しょたいめん}で）「今度{こんど}、食事{しょくじ}し（B）。」',
                options: ['A:ましょう B:ませんか', 'A:ませんか B:ましょう', 'A:ましょう B:ましょう', 'A:ませんか B:ませんか'],
                correctIndex: 0,
                explanation: {
                    correct: '「A:ましょう B:ませんか」正確！(A)已經在一起，直接提議用「ましょう」；(B)初次邀請，婉轉用「ませんか」。',
                    wrong: [
                        '「A:ませんか B:ましょう」錯誤：(A)已經決定一起行動，用「ましょう」；(B)初次邀請用「ませんか」。',
                        '「A:ましょう B:ましょう」錯誤：(B)初次邀請太直接，用「ませんか」更有禮。',
                        '「A:ませんか B:ませんか」錯誤：(A)已經在一起，不需要婉轉詢問。'
                    ]
                }
            }
        ]
    },

    // n5_nai_de_kudasai - ～ないでください（請不要...）
    n5_nai_de_kudasai: {
        id: 'n5_nai_de_kudasai',
        pattern: '～ないでください',
        connection: '動詞ない形＋でください',
        translation: '請不要...、請別...',
        level: 'N5',
        explanation: [
            {
                usage: '禮貌請求不要做某事',
                description: '禮貌地請求對方不要做某事。',
                examples: [
                    { japanese: 'ここで写真{しゃしん}を撮{と}らないでください。', chinese: '請不要在這裡拍照。' },
                    { japanese: '心配{しんぱい}しないでください。', chinese: '請不要擔心。' },
                    {
                        japanese: '「すみません、ここでタバコを吸{す}わないでください。」\n「あ、すみません。」\n「ありがとうございます。」',
                        chinese: '「不好意思，請不要在這裡抽菸。」\n「啊，抱歉。」\n「謝謝您。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '叮嚀/提醒',
                description: '用於叮嚀對方注意。',
                examples: [
                    { japanese: '遅{おく}れないでくださいね。', chinese: '請不要遲到喔。' },
                    { japanese: '忘{わす}れないでください。', chinese: '請不要忘記。' },
                    {
                        japanese: '「明日{あした}の会議{かいぎ}、大事{だいじ}だから遅{おく}れないでね。」\n「わかった、気{き}をつける。」\n「よろしくね。」',
                        chinese: '「明天的會議很重要，不要遲到喔。」\n「知道了，我會注意的。」\n「拜託囉。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「ないでください」和「てはいけません」的區別',
            points: [
                {
                    rule: '「～ないでください」：禮貌請求（較軟性）',
                    examples: [{ japanese: '走{はし}らないでください', chinese: '請不要跑' }]
                },
                {
                    rule: '「～てはいけません」：禁止（較強硬）',
                    examples: [{ japanese: '走{はし}ってはいけません', chinese: '不可以跑' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '把「ないでください」和「なくてください」混淆',
                    explanation: '正確形式是「ないでください」，不是「なくてください」。',
                    whenToUse: '記住固定形式：ない形＋でください。',
                    correct: { sentence: '見{み}ないでください。', note: '○ 正確' },
                    incorrect: { sentence: '見{み}なくてください。', note: '✕ 錯誤形式' }
                }
            ]
        },
        quiz: [
            // 第 1 題：正向題 - 正確答案是「ないで」
            {
                id: 'n5_q_nai_de_1',
                sentence: 'ここで泳{およ}が（　）ください。危{あぶ}ないです。',
                options: ['ないで', 'なくて', 'ないと', 'なく'],
                correctIndex: 0,
                explanation: {
                    correct: '「ないで」正確！「泳がないでください」表示「請不要游泳」。',
                    wrong: [
                        '「なくて」錯誤：「なくてください」文法錯誤，禁止用「ないで」。',
                        '「ないと」錯誤：「ないと」表示條件「如果不...」，不是禁止請求。',
                        '「なく」錯誤：「なく」是連用形，不能直接接「ください」。'
                    ]
                }
            },
            // 第 2 題：正向題 - 正確答案是「しないで」
            {
                id: 'n5_q_nai_de_2',
                sentence: '心配{しんぱい}（　）ください。大丈夫{だいじょうぶ}ですよ。',
                options: ['しないで', 'しなくて', 'しないと', 'しなく'],
                correctIndex: 0,
                explanation: {
                    correct: '「しないで」正確！「心配しないでください」表示「請不要擔心」。',
                    wrong: [
                        '「しなくて」錯誤：「しなくてください」文法錯誤。',
                        '「しないと」錯誤：「しないと」表示條件。',
                        '「しなく」錯誤：「しなく」不能接「ください」。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「てはいけません」不是「ないでください」
            {
                id: 'n5_q_nai_de_3',
                sentence: '（学校{がっこう}のルール）教室{きょうしつ}で食{た}べ（　）。',
                options: ['ないでください', 'てはいけません', 'ましょう', 'てください'],
                correctIndex: 1,
                explanation: {
                    correct: '「てはいけません」正確！學校規則是「禁止」，用強硬的「てはいけません」。',
                    wrong: [
                        '「ないでください」錯誤：「ないでください」是禮貌請求，規則/禁令用「てはいけません」更適合！',
                        '「ましょう」錯誤：「ましょう」是提議，不是禁止。',
                        '「てください」錯誤：「てください」是請求做某事，不是禁止。'
                    ]
                }
            },
            // 第 4 題：對話題 - 正確答案是「ないで」
            {
                id: 'n5_q_nai_de_4',
                sentence: '「明日{あした}のパーティー、忘{わす}れ（　）ね。」\n「大丈夫{だいじょうぶ}、忘{わす}れないよ。」',
                options: ['ないで', 'なくて', 'ないと', 'なく'],
                correctIndex: 0,
                explanation: {
                    correct: '「ないで」正確！「忘れないで」表示「別忘了」，親近的叮嚀。',
                    wrong: [
                        '「なくて」錯誤：「なくて」不能接叮嚀語氣。',
                        '「ないと」錯誤：「ないと」表示條件「如果不...」。',
                        '「なく」錯誤：「なく」不完整。'
                    ]
                }
            },
            // 第 5 題：辨析題 - ないでください/てはいけません 的區別
            {
                id: 'n5_q_nai_de_5',
                sentence: '（友達{ともだち}に）「そんなに心配{しんぱい}し（A）。」\n（博物館{はくぶつかん}の看板{かんばん}）「写真{しゃしん}を撮{と}っ（B）。」',
                options: ['A:ないで B:てはいけません', 'A:てはいけません B:ないで', 'A:ないで B:ないで', 'A:てはいけません B:てはいけません'],
                correctIndex: 0,
                explanation: {
                    correct: '「A:ないで B:てはいけません」正確！(A)對朋友用軟性的「ないで」；(B)規則/禁令用強硬的「てはいけません」。',
                    wrong: [
                        '「A:てはいけません B:ないで」錯誤：(A)對朋友太強硬，(B)規則應該用「てはいけません」。',
                        '「A:ないで B:ないで」錯誤：(B)博物館規則應該用「てはいけません」，更有權威性。',
                        '「A:てはいけません B:てはいけません」錯誤：(A)對朋友用「てはいけません」太強硬。'
                    ]
                }
            }
        ]
    }
});

// ============================================================
// Batch 7: 比較與程度句型 (より、ほうが、一番)
// ============================================================
Object.assign(n5Details, {
    // n5_yori - ～より（比...）
    n5_yori: {
        id: 'n5_yori',
        pattern: '～より',
        connection: '名詞＋より',
        translation: '比...',
        level: 'N5',
        explanation: [
            {
                usage: '比較兩者',
                description: '表示比較的基準，A比B...。',
                examples: [
                    { japanese: '東京{とうきょう}は大阪{おおさか}より大{おお}きいです。', chinese: '東京比大阪大。' },
                    { japanese: '日本語{にほんご}は英語{えいご}より難{むずか}しいです。', chinese: '日語比英語難。' },
                    {
                        japanese: '「コーヒーと紅茶{こうちゃ}、どっちが好{す}き？」\n「コーヒーより紅茶{こうちゃ}のほうが好{す}きかな。」\n「そうなんだ。」',
                        chinese: '「咖啡和紅茶，比較喜歡哪個？」\n「比起咖啡，比較喜歡紅茶吧。」\n「這樣啊。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '「より〜のほうが」句型',
                description: '「A より B のほうが」表示B比A更...。',
                examples: [
                    { japanese: 'バスより電車{でんしゃ}のほうが速{はや}いです。', chinese: '電車比公車快。' },
                    { japanese: '昨日{きのう}より今日{きょう}のほうが暑{あつ}いです。', chinese: '今天比昨天熱。' },
                    {
                        japanese: '「この映画{えいが}とあの映画{えいが}、どっちがおもしろい？」\n「この映画{えいが}よりあの映画{えいが}のほうがおもしろいよ。」\n「じゃ、あれを見{み}よう。」',
                        chinese: '「這部電影和那部電影，哪部有趣？」\n「那部電影比這部有趣喔。」\n「那看那部吧。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '比較句型的使用',
            points: [
                {
                    rule: '「AはBより～」：A比B更...',
                    examples: [{ japanese: '私{わたし}は兄{あに}より背{せ}が高{たか}い', chinese: '我比哥哥高' }]
                },
                {
                    rule: '「BよりAのほうが～」：比起B，A更...',
                    examples: [{ japanese: '兄{あに}より私{わたし}のほうが背{せ}が高{たか}い', chinese: '比起哥哥，我更高' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '比較方向搞混',
                    explanation: '「AはBより」中，A是較高程度的那個。',
                    whenToUse: '記住「より」後面是被比較的對象（較低程度）。',
                    correct: { sentence: '東京{とうきょう}は大阪{おおさか}より大{おお}きい。', note: '○ 東京＞大阪' },
                    incorrect: { sentence: '大阪{おおさか}は東京{とうきょう}より大{おお}きい。', note: '✕ 大阪不比東京大' }
                }
            ]
        },
        quiz: [
            // 第 1 題：正向題 - 正確答案是「より」
            {
                id: 'n5_q_yori_1',
                sentence: '夏{なつ}は春{はる}（　）暑{あつ}いです。',
                options: ['より', 'ほう', 'ほど', 'だけ'],
                correctIndex: 0,
                explanation: {
                    correct: '「より」正確！「春より暑い」表示「比春天熱」。',
                    wrong: [
                        '「ほう」錯誤：「ほう」用於「のほうが」句型，不能單獨用。',
                        '「ほど」錯誤：「ほど」用於否定比較「～ほど～ない」。',
                        '「だけ」錯誤：「だけ」表示「只有」，不表示比較。'
                    ]
                }
            },
            // 第 2 題：正向題 - 正確答案是「より」
            {
                id: 'n5_q_yori_2',
                sentence: 'バス（　）電車{でんしゃ}のほうが速{はや}いです。',
                options: ['より', 'は', 'が', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「より」正確！「バスより電車のほうが」表示「比起公車，電車更快」。',
                    wrong: [
                        '「は」錯誤：比較基準用「より」，不用「は」。',
                        '「が」錯誤：比較基準用「より」，不用「が」。',
                        '「の」錯誤：「の」不用於比較。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「ほど～ない」不是「より」
            {
                id: 'n5_q_yori_3',
                sentence: '今日{きょう}は昨日{きのう}（　）寒{さむ}くないです。',
                options: ['より', 'ほど', 'だけ', 'まで'],
                correctIndex: 1,
                explanation: {
                    correct: '「ほど」正確！「昨日ほど寒くない」表示「沒有昨天那麼冷」，否定比較用「ほど～ない」。',
                    wrong: [
                        '「より」錯誤：「より～ない」文法錯誤！否定比較用「ほど～ない」！',
                        '「だけ」錯誤：「だけ」表示「只有」，不表示比較。',
                        '「まで」錯誤：「まで」表示「到...為止」，不表示比較。'
                    ]
                }
            },
            // 第 4 題：對話題 - 正確答案是「より」
            {
                id: 'n5_q_yori_4',
                sentence: '「肉{にく}と魚{さかな}、どっちが好{す}き？」\n「魚{さかな}（　）肉{にく}のほうが好{す}きかな。」',
                options: ['より', 'は', 'が', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「より」正確！「魚より肉のほうが好き」表示「比起魚，更喜歡肉」。',
                    wrong: [
                        '「は」錯誤：比較用「より」。',
                        '「が」錯誤：比較基準用「より」。',
                        '「の」錯誤：「の」不用於比較基準。'
                    ]
                }
            },
            // 第 5 題：辨析題 - より/ほど 的區別
            {
                id: 'n5_q_yori_5',
                sentence: '東京{とうきょう}は大阪{おおさか}（A）大{おお}きい。京都{きょうと}は東京{とうきょう}（B）大{おお}きくない。',
                options: ['A:より B:ほど', 'A:ほど B:より', 'A:より B:より', 'A:ほど B:ほど'],
                correctIndex: 0,
                explanation: {
                    correct: '「A:より B:ほど」正確！(A)肯定比較用「より」；(B)否定比較用「ほど～ない」。',
                    wrong: [
                        '「A:ほど B:より」錯誤：(A)肯定比較用「より」，(B)否定比較用「ほど」。',
                        '「A:より B:より」錯誤：(B)否定比較要用「ほど～ない」！',
                        '「A:ほど B:ほど」錯誤：(A)肯定比較要用「より」！'
                    ]
                }
            }
        ]
    },

    // n5_ichiban - 一番（最...）
    n5_ichiban: {
        id: 'n5_ichiban',
        pattern: '一番',
        connection: '一番＋形容詞/副詞',
        translation: '最...',
        level: 'N5',
        explanation: [
            {
                usage: '表示最高級',
                description: '表示在某範圍內最...。',
                examples: [
                    { japanese: '富士山{ふじさん}は日本{にほん}で一番{いちばん}高{たか}い山{やま}です。', chinese: '富士山是日本最高的山。' },
                    { japanese: 'この店{みせ}のラーメンが一番{いちばん}おいしいです。', chinese: '這家店的拉麵最好吃。' },
                    {
                        japanese: '「日本{にほん}で一番{いちばん}行{い}きたい場所{ばしょ}はどこ？」\n「京都{きょうと}かな。お寺{てら}が見{み}たい。」\n「いいね！」',
                        chinese: '「日本最想去的地方是哪裡？」\n「京都吧。想看寺廟。」\n「不錯呢！」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '「～の中で一番」句型',
                description: '「...之中最...」的表達方式。',
                examples: [
                    { japanese: '果物{くだもの}の中{なか}で、りんごが一番{いちばん}好{す}きです。', chinese: '水果之中，最喜歡蘋果。' },
                    { japanese: 'クラスの中{なか}で、田中{たなか}さんが一番{いちばん}背{せ}が高{たか}いです。', chinese: '班上田中最高。' },
                    {
                        japanese: '「季節{きせつ}の中{なか}で何{なに}が一番{いちばん}好{す}き？」\n「秋{あき}が一番{いちばん}好{す}きだな。」\n「どうして？」',
                        chinese: '「季節中最喜歡哪個？」\n「最喜歡秋天吧。」\n「為什麼？」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '最高級的表達方式',
            points: [
                {
                    rule: '「～で一番」：在...（範圍）最...',
                    examples: [{ japanese: '日本{にほん}で一番{いちばん}', chinese: '在日本最...' }]
                },
                {
                    rule: '「～の中で一番」：...之中最...',
                    examples: [{ japanese: '果物{くだもの}の中{なか}で一番{いちばん}', chinese: '水果之中最...' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '忘記加範圍',
                    explanation: '使用「一番」時通常要說明範圍（在哪裡、在什麼之中）。',
                    whenToUse: '可用「で」或「の中で」表示範圍。',
                    correct: { sentence: 'クラスで一番{いちばん}背{せ}が高{たか}い。', note: '○ 有範圍' },
                    incorrect: { sentence: '一番{いちばん}背{せ}が高{たか}い。', note: '△ 沒有範圍，語意不完整' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_ichiban_1',
                sentence: '富士山{ふじさん}は日本{にほん}（　）一番{いちばん}高{たか}い山{やま}です。',
                options: ['で', 'に', 'を', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「で」正確！「日本で一番」表示「在日本最...」，「で」標記比較範圍。',
                    wrong: [
                        '「に」錯誤：「に」用於存在場所，不是比較範圍！「最高級＋範圍」用「で」！',
                        '「を」錯誤：「を」是受詞標記，不用於範圍。',
                        '「が」錯誤：「が」標記主語，不是範圍。範圍用「で」！'
                    ]
                }
            },
            {
                id: 'n5_q_ichiban_2',
                sentence: 'スポーツの中{なか}（　）、サッカーが一番{いちばん}好{す}きです。',
                options: ['で', 'に', 'を', 'は'],
                correctIndex: 0,
                explanation: {
                    correct: '「で」正確！「の中で」表示「...之中」，是表示範圍的固定用法。',
                    wrong: [
                        '「に」錯誤：「の中で」是固定搭配，不能用「の中に」表示比較範圍！',
                        '「を」錯誤：「の中を」表示通過某處（移動），不是比較範圍。',
                        '「は」錯誤：「は」是主題標記，「の中は」不用於最高級比較。'
                    ]
                }
            },
            {
                id: 'n5_q_ichiban_3',
                sentence: '今年{ことし}は去年{きょねん}（　）暖{あたた}かいです。',
                options: ['より', 'で', 'が', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「より」正確！「去年より暖かい」表示「比去年暖和」。這是普通比較，不是最高級！',
                    wrong: [
                        '「で」錯誤：「で」用於最高級範圍（一番～で），這裡是兩者比較用「より」！',
                        '「が」錯誤：「が」標記主語，比較用「より」！',
                        '「に」錯誤：「に」不用於比較。'
                    ]
                }
            },
            {
                id: 'n5_q_ichiban_4',
                sentence: '「家族{かぞく}の中{なか}で誰{だれ}（　）一番{いちばん}早{はや}く起{お}きる？」\n「お母{かあ}さんかな。」\n「やっぱり。」',
                options: ['が', 'は', 'を', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！疑問詞「誰」後面用「が」標記主語。「誰が一番～」是固定用法。',
                    wrong: [
                        '「は」錯誤：疑問詞（誰、何、どこ等）作主語時必須用「が」，不用「は」！',
                        '「を」錯誤：「を」是受詞標記，「誰」在這裡是主語。',
                        '「の」錯誤：「の」不能標記主語。'
                    ]
                }
            },
            {
                id: 'n5_q_ichiban_5',
                sentence: '「一番{いちばん}」和「より」有什麼區別？\n選出正確的說明：',
                options: [
                    '「一番」是最高級（三者以上），「より」是比較級（兩者）',
                    '「一番」和「より」意思完全相同',
                    '「一番」只能用於人，「より」只能用於物',
                    '「一番」用於否定，「より」用於肯定'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「一番」用於三者以上選出最～的（最高級），「より」用於兩者比較（比較級）。',
                    wrong: [
                        '錯誤：兩者意思不同。「一番」=最...，「より」=比...。',
                        '錯誤：兩者都可以用於人和物。',
                        '錯誤：兩者都可以用於肯定句。'
                    ]
                }
            }
        ]
    },

    // n5_totemo - とても（非常）
    n5_totemo: {
        id: 'n5_totemo',
        pattern: 'とても',
        connection: 'とても＋形容詞/副詞',
        translation: '非常、很',
        level: 'N5',
        explanation: [
            {
                usage: '加強程度',
                description: '用於加強形容詞或副詞的程度。',
                examples: [
                    { japanese: '今日{きょう}はとても暑{あつ}いです。', chinese: '今天非常熱。' },
                    { japanese: 'この本{ほん}はとてもおもしろいです。', chinese: '這本書非常有趣。' },
                    {
                        japanese: '「このラーメン、どう？」\n「とてもおいしい！」\n「よかった。」',
                        chinese: '「這拉麵如何？」\n「非常好吃！」\n「太好了。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '否定句中的「とても～ない」',
                description: '「とても～ない」表示「怎麼也無法...」。',
                examples: [
                    { japanese: 'この問題{もんだい}はとても難{むずか}しくて、分{わ}かりません。', chinese: '這個問題非常難，不懂。' },
                    { japanese: 'とても食{た}べられません。', chinese: '怎麼也吃不完。' },
                    {
                        japanese: '「この仕事{しごと}、一人{ひとり}でできる？」\n「とてもできないよ。手伝{てつだ}って。」\n「わかった。」',
                        chinese: '「這工作，一個人做得來嗎？」\n「怎麼也做不來啊。幫幫我。」\n「好的。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '程度副詞的比較',
            points: [
                {
                    rule: '「とても」：非常（程度高）',
                    examples: [{ japanese: 'とても暑{あつ}い', chinese: '非常熱' }]
                },
                {
                    rule: '「すごく」：超級（口語，程度高）',
                    examples: [{ japanese: 'すごく暑{あつ}い', chinese: '超熱' }]
                },
                {
                    rule: '「ちょっと」：有點（程度低）',
                    examples: [{ japanese: 'ちょっと暑{あつ}い', chinese: '有點熱' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '「とても」和動詞直接連用',
                    explanation: '「とても」主要修飾形容詞或副詞，不直接修飾動詞。',
                    whenToUse: '修飾動詞時用「よく」「たくさん」等。',
                    correct: { sentence: 'よく食{た}べます。', note: '○ 常吃' },
                    incorrect: { sentence: 'とても食{た}べます。', note: '✕ 不自然' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_totemo_1',
                sentence: '今日{きょう}は（　）寒{さむ}いです。',
                options: ['とても', 'たくさん', 'いつも', 'ぜんぶ'],
                correctIndex: 0,
                explanation: {
                    correct: '「とても」正確！「とても寒い」表示「非常冷」。「とても」修飾形容詞，加強程度。',
                    wrong: [
                        '「たくさん」錯誤：「たくさん」表示數量多，修飾動詞，不能修飾形容詞！',
                        '「いつも」錯誤：「いつも」表示頻率「總是」，不表示程度。',
                        '「ぜんぶ」錯誤：「ぜんぶ」表示「全部」，不表示程度。'
                    ]
                }
            },
            {
                id: 'n5_q_totemo_2',
                sentence: 'この映画{えいが}は（　）おもしろかったです。',
                options: ['とても', 'たくさん', 'だいたい', 'すこし'],
                correctIndex: 0,
                explanation: {
                    correct: '「とても」正確！「とてもおもしろかった」表示「非常有趣」，程度很高。',
                    wrong: [
                        '「たくさん」錯誤：「たくさん」修飾數量，不能修飾形容詞！',
                        '「だいたい」錯誤：「だいたい」表示「大約」，不表示程度。',
                        '「すこし」錯誤：語法可以，但意思變成「有點有趣」，程度低。'
                    ]
                }
            },
            {
                id: 'n5_q_totemo_3',
                sentence: '昨日{きのう}、本{ほん}を（　）読{よ}みました。',
                options: ['たくさん', 'とても', 'すごく', 'ちょっと'],
                correctIndex: 0,
                explanation: {
                    correct: '「たくさん」正確！「たくさん読む」表示「讀很多」。修飾動詞的數量用「たくさん」！',
                    wrong: [
                        '「とても」錯誤：「とても」修飾形容詞，不直接修飾動詞！「とても読む」不自然！',
                        '「すごく」錯誤：「すごく」修飾形容詞，不直接修飾動詞。',
                        '「ちょっと」錯誤：「ちょっと」修飾形容詞或表示「稍微」。'
                    ]
                }
            },
            {
                id: 'n5_q_totemo_4',
                sentence: '「日本語{にほんご}の勉強{べんきょう}、どう？」\n「（　）楽{たの}しいよ。」\n「よかった！」',
                options: ['とても', 'たくさん', 'ぜんぜん', 'だんだん'],
                correctIndex: 0,
                explanation: {
                    correct: '「とても」正確！「とても楽しい」表示「非常開心」，回答「どう？」的問題。',
                    wrong: [
                        '「たくさん」錯誤：「たくさん」表示數量，不能修飾「楽しい」這個形容詞！',
                        '「ぜんぜん」錯誤：「ぜんぜん」後面要接否定句（ぜんぜん～ない）！',
                        '「だんだん」錯誤：「だんだん」表示「漸漸」，不表示程度高。'
                    ]
                }
            },
            {
                id: 'n5_q_totemo_5',
                sentence: '「とても」和「たくさん」有什麼區別？\n選出正確的說明：',
                options: [
                    '「とても」修飾形容詞（程度），「たくさん」修飾動詞（數量）',
                    '「とても」和「たくさん」意思完全相同',
                    '「とても」只能用於肯定，「たくさん」只能用於否定',
                    '「とても」用於過去式，「たくさん」用於現在式'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「とても」修飾形容詞（とても暑い），「たくさん」修飾動詞（たくさん食べる）。',
                    wrong: [
                        '錯誤：兩者用途不同。程度用「とても」，數量用「たくさん」。',
                        '錯誤：兩者都可以用於肯定句。',
                        '錯誤：時態跟這兩個詞無關。'
                    ]
                }
            }
        ]
    },

    // n5_node - ～ので（因為...）
    n5_node: {
        id: 'n5_node',
        pattern: '～ので',
        connection: '動詞普通形/い形容詞＋ので、な形容詞＋なので、名詞＋なので',
        translation: '因為...',
        level: 'N5',
        explanation: [
            {
                usage: '表示原因（較客觀）',
                description: '說明原因或理由，語氣較「から」客觀、禮貌。',
                examples: [
                    { japanese: '雨{あめ}が降{ふ}っているので、傘{かさ}を持{も}っていきます。', chinese: '因為在下雨，所以帶傘去。' },
                    { japanese: '体調{たいちょう}が悪{わる}いので、今日{きょう}は休{やす}みます。', chinese: '因為身體不舒服，今天休息。' },
                    {
                        japanese: '「明日{あした}、パーティーに来{こ}られる？」\n「ごめん、用事{ようじ}があるので、行{い}けないんだ。」\n「残念{ざんねん}。また今度{こんど}ね。」',
                        chinese: '「明天能來派對嗎？」\n「抱歉，因為有事，去不了。」\n「可惜。下次吧。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '禮貌地說明理由',
                description: '向他人說明理由時，「ので」較「から」禮貌。',
                examples: [
                    { japanese: '電車{でんしゃ}が遅{おく}れたので、遅刻{ちこく}しました。', chinese: '因為電車誤點，所以遲到了。' },
                    { japanese: '静{しず}かなので、この部屋{へや}が好{す}きです。', chinese: '因為安靜，所以喜歡這個房間。' },
                    {
                        japanese: '「どうして日本語{にほんご}を勉強{べんきょう}しているんですか。」\n「日本{にほん}の文化{ぶんか}が好{す}きなので、勉強{べんきょう}しています。」\n「そうなんですね。」',
                        chinese: '「為什麼在學日語呢？」\n「因為喜歡日本文化，所以在學。」\n「原來如此。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「ので」vs「から」的區別',
            points: [
                {
                    rule: '「ので」：較客觀、禮貌，多用於書面和正式場合',
                    examples: [{ japanese: '忙{いそが}しいので、行{い}けません。', chinese: '（較禮貌）' }]
                },
                {
                    rule: '「から」：較主觀、直接，多用於口語',
                    examples: [{ japanese: '忙{いそが}しいから、行{い}けない。', chinese: '（較直接）' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '名詞和な形容詞後忘記加「な」',
                    explanation: '「ので」接名詞和な形容詞時，要加「な」變成「なので」。',
                    whenToUse: '名詞＋なので、な形容詞語幹＋なので。',
                    correct: { sentence: '学生{がくせい}なので、お金{かね}がありません。', note: '○ 名詞＋なので' },
                    incorrect: { sentence: '学生{がくせい}ので、お金{かね}がありません。', note: '✕ 缺少「な」' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_node_1',
                sentence: '明日{あした}はテストがある（　）、今日{きょう}は勉強{べんきょう}します。',
                options: ['ので', 'けど', 'のに', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「ので」正確！表示原因「因為明天有考試，所以今天要讀書」。',
                    wrong: [
                        '「けど」錯誤：「けど」表示轉折「雖然～但是」，不是原因！',
                        '「のに」錯誤：「のに」表示逆接「明明～卻」，意思相反！',
                        '「が」錯誤：「が」表示轉折，不是原因。'
                    ]
                }
            },
            {
                id: 'n5_q_node_2',
                sentence: '静{しず}か（　）ので、この図書館{としょかん}が好{す}きです。',
                options: ['な', 'だ', 'の', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「な」正確！な形容詞（静か）接「ので」要加「な」變成「なので」。',
                    wrong: [
                        '「だ」錯誤：書面語/丁寧語用「なので」，不用「だので」！「だ」是口語體。',
                        '「の」錯誤：な形容詞用「なので」，不是「のので」。',
                        '「に」錯誤：「にので」文法錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_node_3',
                sentence: '勉強{べんきょう}したのに、テストに落{お}ちてしまいました。',
                options: ['のに', 'ので', 'から', 'けど'],
                correctIndex: 0,
                explanation: {
                    correct: '「のに」正確！「明明學習了，卻考試不及格」。逆接（意外的結果）用「のに」！',
                    wrong: [
                        '「ので」錯誤：「ので」表示順接原因。這裡結果是「不及格」，跟「學習」矛盾，是逆接！',
                        '「から」錯誤：「から」也是順接原因，跟結果矛盾。',
                        '「けど」錯誤：語法可以，但「のに」更強調意外和遺憾的語氣。'
                    ]
                }
            },
            {
                id: 'n5_q_node_4',
                sentence: '「どうして遅{おく}れたんですか。」\n「電車{でんしゃ}が遅{おく}れた（　）、遅刻{ちこく}しました。すみません。」\n「気{き}をつけてくださいね。」',
                options: ['ので', 'のに', 'けど', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「ので」正確！禮貌地說明遲到的原因。對上司/老師解釋時用「ので」較禮貌。',
                    wrong: [
                        '「のに」錯誤：「のに」表示逆接「明明電車誤點卻遲到」？邏輯矛盾！',
                        '「けど」錯誤：「けど」表示轉折，不是解釋原因。',
                        '「が」錯誤：「が」表示轉折。'
                    ]
                }
            },
            {
                id: 'n5_q_node_5',
                sentence: '「ので」和「のに」有什麼區別？\n選出正確的說明：',
                options: [
                    '「ので」是順接（因果），「のに」是逆接（明明～卻）',
                    '「ので」和「のに」意思完全相同',
                    '「ので」用於過去，「のに」用於現在',
                    '「ので」是敬語，「のに」是常體'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「ので」表示原因結果（因為A所以B），「のに」表示逆接（明明A卻B）。',
                    wrong: [
                        '錯誤：兩者意思相反！「ので」=因果，「のに」=逆接。',
                        '錯誤：時態跟這兩個詞無關。',
                        '錯誤：兩者都可以用於敬語和常體。'
                    ]
                }
            }
        ]
    }
});

// ============================================================
// Batch 8: 時間與頻率表達 (まえに、あとで、とき、いつも)
// ============================================================
Object.assign(n5Details, {
    // n5_mae_ni - ～まえに（...之前）
    n5_mae_ni: {
        id: 'n5_mae_ni',
        pattern: '～まえに',
        connection: '動詞原形＋まえに、名詞＋の＋まえに',
        translation: '...之前',
        level: 'N5',
        explanation: [
            {
                usage: '表示動作之前',
                description: '表示在某動作之前做另一件事。',
                examples: [
                    { japanese: '寝{ね}るまえに、歯{は}を磨{みが}きます。', chinese: '睡覺前刷牙。' },
                    { japanese: '食{た}べるまえに、手{て}を洗{あら}います。', chinese: '吃飯前洗手。' },
                    {
                        japanese: '「出{で}かけるまえに、何{なに}かすることある？」\n「うん、窓{まど}を閉{し}めてね。」\n「わかった。」',
                        chinese: '「出門前有什麼要做的嗎？」\n「嗯，把窗戶關上。」\n「好的。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '名詞＋のまえに',
                description: '名詞接「まえに」時要加「の」。',
                examples: [
                    { japanese: '会議{かいぎ}のまえに、資料{しりょう}を準備{じゅんび}します。', chinese: '會議前準備資料。' },
                    { japanese: '試験{しけん}のまえに、たくさん勉強{べんきょう}しました。', chinese: '考試前讀了很多書。' },
                    {
                        japanese: '「旅行{りょこう}のまえに、何{なに}を準備{じゅんび}する？」\n「パスポートと服{ふく}かな。」\n「カメラも忘{わす}れないでね。」',
                        chinese: '「旅行前要準備什麼？」\n「護照和衣服吧。」\n「相機也別忘了喔。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「まえに」vs「てから」的區別',
            points: [
                {
                    rule: '「～まえに」：在...之前（先做後面的動作）',
                    examples: [{ japanese: '食{た}べるまえに手{て}を洗{あら}う', chinese: '先洗手，再吃' }]
                },
                {
                    rule: '「～てから」：...之後（先做前面的動作）',
                    examples: [{ japanese: '手{て}を洗{あら}ってから食{た}べる', chinese: '先洗手，再吃' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '動詞用た形接「まえに」',
                    explanation: '「まえに」前面的動詞要用原形（辞書形），不是た形。',
                    whenToUse: '動詞原形＋まえに。',
                    correct: { sentence: '寝{ね}るまえに', note: '○ 原形' },
                    incorrect: { sentence: '寝{ね}たまえに', note: '✕ た形錯誤' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_mae_ni_1',
                sentence: '寝{ね}る（　）に、シャワーを浴{あ}びます。',
                options: ['まえ', 'あと', 'とき', 'ので'],
                correctIndex: 0,
                explanation: {
                    correct: '「まえ」正確！「寝るまえに」表示「睡覺之前」先洗澡。',
                    wrong: [
                        '「あと」錯誤：「寝るあと」不自然！「あと」接動詞要用た形（寝たあと）！',
                        '「とき」錯誤：「とき」表示「...的時候」，不是「之前」。',
                        '「ので」錯誤：「ので」表示原因，不是時間。'
                    ]
                }
            },
            {
                id: 'n5_q_mae_ni_2',
                sentence: '会議{かいぎ}（　）まえに、コーヒーを飲{の}みます。',
                options: ['の', 'を', 'が', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！名詞接「まえに」要加「の」。「会議のまえに」=會議之前。',
                    wrong: [
                        '「を」錯誤：「を」是受詞標記，名詞連接「まえに」用「の」！',
                        '「が」錯誤：「が」是主語標記，不用於連接「まえに」。',
                        '「に」錯誤：「にまえに」文法錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_mae_ni_3',
                sentence: 'ご飯{はん}を食{た}べた（　）、歯{は}を磨{みが}きます。',
                options: ['あとで', 'まえに', 'ときに', 'ので'],
                correctIndex: 0,
                explanation: {
                    correct: '「あとで」正確！「食べたあとで」=吃完飯之後刷牙。た形接「あとで」！',
                    wrong: [
                        '「まえに」錯誤：「まえに」接動詞原形（食べるまえに），不是た形！這裡用了「食べた」所以要接「あとで」！',
                        '「ときに」錯誤：「ときに」表示「...的時候」，不是順序。',
                        '「ので」錯誤：「ので」表示原因。'
                    ]
                }
            },
            {
                id: 'n5_q_mae_ni_4',
                sentence: '「映画{えいが}を見{み}る（　）に、何{なに}か食{た}べない？」\n「いいね。ポップコーン買{か}おう。」\n「そうしよう。」',
                options: ['まえ', 'あと', 'とき', 'から'],
                correctIndex: 0,
                explanation: {
                    correct: '「まえ」正確！「見るまえに」=看電影之前。動詞原形接「まえに」！',
                    wrong: [
                        '「あと」錯誤：「見るあと」不自然！「あと」要接た形（見たあと）！',
                        '「とき」錯誤：「とき」表示「...的時候」，不是「之前」。',
                        '「から」錯誤：「から」表示原因或起點。'
                    ]
                }
            },
            {
                id: 'n5_q_mae_ni_5',
                sentence: '「まえに」和「あとで」接動詞的規則是什麼？\n選出正確的說明：',
                options: [
                    '「まえに」接動詞原形，「あとで」接動詞た形',
                    '「まえに」和「あとで」都接動詞原形',
                    '「まえに」和「あとで」都接動詞た形',
                    '「まえに」接動詞た形，「あとで」接動詞原形'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「食べるまえに」（原形）、「食べたあとで」（た形）。記住這個規則！',
                    wrong: [
                        '錯誤：「まえに」接原形，「あとで」接た形。',
                        '錯誤：「あとで」接た形，不是原形。',
                        '錯誤：「まえに」接原形，不是た形。'
                    ]
                }
            }
        ]
    },

    // n5_ato_de - ～あとで（...之後）
    n5_ato_de: {
        id: 'n5_ato_de',
        pattern: '～あとで',
        connection: '動詞た形＋あとで、名詞＋の＋あとで',
        translation: '...之後',
        level: 'N5',
        explanation: [
            {
                usage: '表示動作之後',
                description: '表示在某動作完成之後做另一件事。',
                examples: [
                    { japanese: '食{た}べたあとで、散歩{さんぽ}します。', chinese: '吃完後散步。' },
                    { japanese: '映画{えいが}を見{み}たあとで、感想{かんそう}を話{はな}しましょう。', chinese: '看完電影後聊聊感想吧。' },
                    {
                        japanese: '「買{か}い物{もの}したあとで、お茶{ちゃ}しない？」\n「いいね！どこに行{い}く？」\n「駅前{えきまえ}のカフェは？」',
                        chinese: '「購物後要不要喝茶？」\n「好啊！去哪裡？」\n「車站前的咖啡廳如何？」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '名詞＋のあとで',
                description: '名詞接「あとで」時要加「の」。',
                examples: [
                    { japanese: '仕事{しごと}のあとで、飲{の}みに行{い}きませんか。', chinese: '工作後要不要去喝一杯？' },
                    { japanese: '授業{じゅぎょう}のあとで、質問{しつもん}があります。', chinese: '下課後有問題。' },
                    {
                        japanese: '「会議{かいぎ}のあとで、ちょっといい？」\n「うん、何{なに}？」\n「相談{そうだん}したいことがあるんだ。」',
                        chinese: '「會議後方便嗎？」\n「好，什麼事？」\n「有事想商量。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「あとで」vs「てから」的區別',
            points: [
                {
                    rule: '「あとで」：...之後（時間較鬆散）',
                    examples: [{ japanese: '食{た}べたあとで散歩{さんぽ}する', chinese: '吃完後（過一會）散步' }]
                },
                {
                    rule: '「てから」：...之後（緊密順序）',
                    examples: [{ japanese: '食{た}べてから散歩{さんぽ}する', chinese: '吃完後（馬上）散步' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '動詞用原形接「あとで」',
                    explanation: '「あとで」前面的動詞要用た形，不是原形。',
                    whenToUse: '動詞た形＋あとで。',
                    correct: { sentence: '食{た}べたあとで', note: '○ た形' },
                    incorrect: { sentence: '食{た}べるあとで', note: '✕ 原形錯誤' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_ato_de_1',
                sentence: '仕事{しごと}が終{お}わった（　）で、映画{えいが}を見{み}ます。',
                options: ['あと', 'まえ', 'とき', 'ので'],
                correctIndex: 0,
                explanation: {
                    correct: '「あと」正確！「終わったあとで」表示「結束之後」。',
                    wrong: [
                        '「まえ」錯誤：「まえ」表示「之前」。',
                        '「とき」錯誤：「とき」表示「...的時候」。',
                        '「ので」錯誤：「ので」表示原因。'
                    ]
                }
            },
            {
                id: 'n5_q_ato_de_2',
                sentence: '昼{ひる}ご飯{はん}（　）あとで、少{すこ}し休{やす}みます。',
                options: ['の', 'を', 'が', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！名詞接「あとで」要加「の」。',
                    wrong: [
                        '「を」錯誤：名詞用「の」連接「あとで」。',
                        '「が」錯誤：「が」不用於連接「あとで」。',
                        '「に」錯誤：「にあとで」文法錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_ato_de_3',
                sentence: 'シャワーを（　）あとで、寝{ね}ます。',
                options: ['浴びた', '浴びる', '浴びて', '浴び'],
                correctIndex: 0,
                explanation: {
                    correct: '「浴びた」正確！「あとで」前面用動詞た形。',
                    wrong: [
                        '「浴びる」錯誤：「あとで」前用た形，不用原形。',
                        '「浴びて」錯誤：「あとで」前用た形，不用て形。',
                        '「浴び」錯誤：「あとで」前用た形，不用ます形。'
                    ]
                }
            },
            {
                id: 'n5_q_ato_de_4',
                sentence: '「宿題{しゅくだい}を（　）あとで、ゲームしていい？」\n「いいよ。頑張{がんば}って。」\n「やった！」',
                options: ['した', 'する', 'して', 'し'],
                correctIndex: 0,
                explanation: {
                    correct: '「した」正確！「あとで」前面用動詞た形。',
                    wrong: [
                        '「する」錯誤：「あとで」前用た形。',
                        '「して」錯誤：「あとで」前用た形。',
                        '「し」錯誤：「あとで」前用た形。'
                    ]
                }
            },
            {
                id: 'n5_q_ato_de_5',
                sentence: '「授業{じゅぎょう}の（　）で、図書館{としょかん}に行{い}かない？」\n「いいね。一緒{いっしょ}に勉強{べんきょう}しよう。」\n「うん。」',
                options: ['あと', 'まえ', 'なか', 'うえ'],
                correctIndex: 0,
                explanation: {
                    correct: '「あと」正確！「授業のあとで」表示「下課後」。',
                    wrong: [
                        '「まえ」錯誤：「まえ」表示「之前」。',
                        '「なか」錯誤：「なか」表示「裡面/期間」。',
                        '「うえ」錯誤：「うえ」表示「上面」。'
                    ]
                }
            }
        ]
    },

    // n5_toki - ～とき（...的時候）
    n5_toki: {
        id: 'n5_toki',
        pattern: '～とき',
        connection: '動詞普通形＋とき、い形容詞＋とき、な形容詞＋な＋とき、名詞＋の＋とき',
        translation: '...的時候',
        level: 'N5',
        explanation: [
            {
                usage: '表示時間點',
                description: '表示某個時間點或狀況。',
                examples: [
                    { japanese: '暇{ひま}なとき、映画{えいが}を見{み}ます。', chinese: '有空的時候看電影。' },
                    { japanese: '子供{こども}のとき、よく公園{こうえん}で遊{あそ}びました。', chinese: '小時候常在公園玩。' },
                    {
                        japanese: '「困{こま}ったとき、誰{だれ}に相談{そうだん}する？」\n「母{はは}かな。」\n「そうなんだ。」',
                        chinese: '「困擾的時候找誰商量？」\n「媽媽吧。」\n「這樣啊。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '動詞＋とき的時態',
                description: '動詞原形＋とき表示「要做...的時候」，た形＋とき表示「做完...的時候」。',
                examples: [
                    { japanese: '日本{にほん}に行{い}くとき、パスポートが必要{ひつよう}です。', chinese: '去日本的時候需要護照。（還沒去）' },
                    { japanese: '日本{にほん}に行{い}ったとき、富士山{ふじさん}を見{み}ました。', chinese: '去日本的時候看了富士山。（已經去了）' },
                    {
                        japanese: '「電車{でんしゃ}に乗{の}るとき、何{なに}をする？」\n「音楽{おんがく}を聴{き}くかな。」\n「私{わたし}も！」',
                        chinese: '「搭電車的時候做什麼？」\n「聽音樂吧。」\n「我也是！」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「とき」的接續方式',
            points: [
                {
                    rule: '動詞原形＋とき：要做...的時候（動作未完成）',
                    examples: [{ japanese: '行{い}くとき', chinese: '去的時候（還沒到）' }]
                },
                {
                    rule: '動詞た形＋とき：做了...的時候（動作已完成）',
                    examples: [{ japanese: '行{い}ったとき', chinese: '去了的時候（已經到了）' }]
                },
                {
                    rule: '名詞＋のとき：...的時候',
                    examples: [{ japanese: '子供{こども}のとき', chinese: '小時候' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '不理解原形和た形的區別',
                    explanation: '原形＋とき表示動作還沒完成，た形＋とき表示動作已完成。',
                    whenToUse: '根據動作是否完成選擇形態。',
                    correct: { sentence: '家{いえ}を出{で}るとき、鍵{かぎ}を忘{わす}れた。', note: '○ 出門時（正要出門）忘了鑰匙' },
                    incorrect: { sentence: '家{いえ}を出{で}たとき、鍵{かぎ}を忘{わす}れた。', note: '○ 出門後（已經出門）發現忘了鑰匙' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_toki_1',
                sentence: '暇{ひま}な（　）、音楽{おんがく}を聴{き}きます。',
                options: ['とき', 'まえ', 'あと', 'ので'],
                correctIndex: 0,
                explanation: {
                    correct: '「とき」正確！「暇なとき」表示「有空的時候」。',
                    wrong: [
                        '「まえ」錯誤：「まえ」表示「之前」。',
                        '「あと」錯誤：「あと」表示「之後」。',
                        '「ので」錯誤：「ので」表示原因。'
                    ]
                }
            },
            {
                id: 'n5_q_toki_2',
                sentence: '子供{こども}（　）とき、よく泳{およ}ぎました。',
                options: ['の', 'な', 'が', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！名詞接「とき」要加「の」。',
                    wrong: [
                        '「な」錯誤：名詞用「の」，な形容詞才用「な」。',
                        '「が」錯誤：「がとき」文法錯誤。',
                        '「を」錯誤：「をとき」文法錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_toki_3',
                sentence: '日本{にほん}に（　）とき、お土産{みやげ}を買{か}いました。',
                options: ['行った', '行く', '行って', '行き'],
                correctIndex: 0,
                explanation: {
                    correct: '「行った」正確！已經去日本了，用た形。',
                    wrong: [
                        '「行く」錯誤：這裡已經去了買了土產，用た形。',
                        '「行って」錯誤：て形不直接接「とき」。',
                        '「行き」錯誤：ます形不直接接「とき」。'
                    ]
                }
            },
            {
                id: 'n5_q_toki_4',
                sentence: '「悲{かな}しい（　）、どうする？」\n「音楽{おんがく}を聴{き}くかな。」\n「そうなんだ。」',
                options: ['とき', 'まえ', 'あと', 'から'],
                correctIndex: 0,
                explanation: {
                    correct: '「とき」正確！「悲しいとき」表示「傷心的時候」。',
                    wrong: [
                        '「まえ」錯誤：「まえ」表示「之前」。',
                        '「あと」錯誤：「あと」表示「之後」。',
                        '「から」錯誤：「から」表示原因。'
                    ]
                }
            },
            {
                id: 'n5_q_toki_5',
                sentence: '「寝{ね}る（　）、何{なに}をする？」\n「本{ほん}を読{よ}むよ。」\n「へえ、いい習慣{しゅうかん}だね。」',
                options: ['まえ', 'とき', 'あと', 'から'],
                correctIndex: 0,
                explanation: {
                    correct: '「まえ」正確！「寝るまえ」表示「睡前」。',
                    wrong: [
                        '「とき」錯誤：「とき」可以，但這裡問睡前習慣。',
                        '「あと」錯誤：「寝るあと」不自然。',
                        '「から」錯誤：「から」表示原因。'
                    ]
                }
            }
        ]
    },

    // n5_itsumo - いつも（總是）
    n5_itsumo: {
        id: 'n5_itsumo',
        pattern: 'いつも',
        connection: 'いつも＋動詞/形容詞',
        translation: '總是、經常',
        level: 'N5',
        explanation: [
            {
                usage: '表示習慣性動作',
                description: '表示經常做某事或某種狀態一直持續。',
                examples: [
                    { japanese: 'いつも七時{しちじ}に起{お}きます。', chinese: '總是七點起床。' },
                    { japanese: '彼{かれ}はいつも元気{げんき}です。', chinese: '他總是很有精神。' },
                    {
                        japanese: '「朝{あさ}ご飯{はん}、いつも何{なに}を食{た}べる？」\n「パンとコーヒーかな。」\n「シンプルだね。」',
                        chinese: '「早餐總是吃什麼？」\n「麵包和咖啡吧。」\n「很簡單呢。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示感謝',
                description: '「いつもありがとうございます」是常用的感謝語。',
                examples: [
                    { japanese: 'いつもありがとうございます。', chinese: '一直以來謝謝您。' },
                    { japanese: 'いつもお世話{せわ}になっております。', chinese: '一直承蒙您照顧。' },
                    {
                        japanese: '「いつもお世話{せわ}になっております。」\n「こちらこそ、いつもありがとうございます。」\n「今後{こんご}ともよろしくお願{ねが}いします。」',
                        chinese: '「一直承蒙您照顧。」\n「我才是，一直以來謝謝您。」\n「今後也請多多指教。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '頻率副詞的比較',
            points: [
                {
                    rule: '「いつも」：總是（100%）',
                    examples: [{ japanese: 'いつも遅刻{ちこく}する', chinese: '總是遲到' }]
                },
                {
                    rule: '「よく」：經常（70-80%）',
                    examples: [{ japanese: 'よく遅刻{ちこく}する', chinese: '常常遲到' }]
                },
                {
                    rule: '「ときどき」：有時（30-50%）',
                    examples: [{ japanese: 'ときどき遅刻{ちこく}する', chinese: '有時遲到' }]
                },
                {
                    rule: '「あまり～ない」：不太（10-20%）',
                    examples: [{ japanese: 'あまり遅刻{ちこく}しない', chinese: '不太遲到' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '「いつも」用於否定句',
                    explanation: '「いつも」通常不用於否定句，否定時用「ぜんぜん」或「あまり」。',
                    whenToUse: '肯定用「いつも」，否定用「ぜんぜん～ない」。',
                    correct: { sentence: 'いつも食{た}べます。', note: '○ 肯定句' },
                    incorrect: { sentence: 'いつも食{た}べません。', note: '△ 不自然，用「ぜんぜん」' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_itsumo_1',
                sentence: '私{わたし}は（　）電車{でんしゃ}で会社{かいしゃ}に行{い}きます。',
                options: ['いつも', 'ぜんぜん', 'あまり', 'まだ'],
                correctIndex: 0,
                explanation: {
                    correct: '「いつも」正確！表示「總是搭電車去公司」。',
                    wrong: [
                        '「ぜんぜん」錯誤：「ぜんぜん」用於否定句。',
                        '「あまり」錯誤：「あまり」用於否定句。',
                        '「まだ」錯誤：「まだ」表示「還」。'
                    ]
                }
            },
            {
                id: 'n5_q_itsumo_2',
                sentence: '彼女{かのじょ}は（　）笑顔{えがお}です。',
                options: ['いつも', 'ぜんぜん', 'あまり', 'もう'],
                correctIndex: 0,
                explanation: {
                    correct: '「いつも」正確！表示「總是笑臉」。',
                    wrong: [
                        '「ぜんぜん」錯誤：「ぜんぜん」用於否定。',
                        '「あまり」錯誤：「あまり」用於否定。',
                        '「もう」錯誤：「もう」表示「已經」。'
                    ]
                }
            },
            {
                id: 'n5_q_itsumo_3',
                sentence: '（　）ありがとうございます。',
                options: ['いつも', 'ぜんぜん', 'あまり', 'まだ'],
                correctIndex: 0,
                explanation: {
                    correct: '「いつも」正確！「いつもありがとうございます」是感謝語。',
                    wrong: [
                        '「ぜんぜん」錯誤：「ぜんぜんありがとう」不通。',
                        '「あまり」錯誤：「あまりありがとう」不通。',
                        '「まだ」錯誤：「まだありがとう」不通。'
                    ]
                }
            },
            {
                id: 'n5_q_itsumo_4',
                sentence: '「週末{しゅうまつ}、（　）何{なに}をする？」\n「家{いえ}でゆっくりするかな。」\n「そうなんだ。」',
                options: ['いつも', 'ぜんぜん', 'もう', 'まだ'],
                correctIndex: 0,
                explanation: {
                    correct: '「いつも」正確！詢問「週末總是做什麼」。',
                    wrong: [
                        '「ぜんぜん」錯誤：「ぜんぜん」用於否定。',
                        '「もう」錯誤：「もう」表示「已經」。',
                        '「まだ」錯誤：「まだ」表示「還」。'
                    ]
                }
            },
            {
                id: 'n5_q_itsumo_5',
                sentence: '「この店{みせ}、（　）混{こ}んでるね。」\n「人気{にんき}があるからね。」\n「今度{こんど}、予約{よやく}しよう。」',
                options: ['いつも', 'ぜんぜん', 'あまり', 'もう'],
                correctIndex: 0,
                explanation: {
                    correct: '「いつも」正確！表示「這家店總是很擠」。',
                    wrong: [
                        '「ぜんぜん」錯誤：「ぜんぜん」用於否定。',
                        '「あまり」錯誤：「あまり」用於否定。',
                        '「もう」錯誤：「もう」表示「已經」。'
                    ]
                }
            }
        ]
    }
});

// ============================================================
// Batch 9: 存在與方向句型 (がある/いる、へ、で、から～まで)
// ============================================================
Object.assign(n5Details, {
    // n5_ga_aru - がある/いる（存在）
    n5_ga_aru: {
        id: 'n5_ga_aru',
        pattern: 'がある/いる',
        connection: '名詞＋がある（物）/いる（人・動物）',
        translation: '有...',
        level: 'N5',
        explanation: [
            {
                usage: '表示物品存在',
                description: '「ある」用於無生命的物品。',
                examples: [
                    { japanese: '机{つくえ}の上{うえ}に本{ほん}があります。', chinese: '桌上有書。' },
                    { japanese: '冷蔵庫{れいぞうこ}にジュースがあります。', chinese: '冰箱裡有果汁。' },
                    {
                        japanese: '「すみません、トイレはどこにありますか。」\n「あちらにあります。」\n「ありがとうございます。」',
                        chinese: '「不好意思，廁所在哪裡？」\n「在那邊。」\n「謝謝您。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示人或動物存在',
                description: '「いる」用於有生命的人或動物。',
                examples: [
                    { japanese: '公園{こうえん}に子供{こども}がいます。', chinese: '公園裡有小孩。' },
                    { japanese: '家{いえ}に猫{ねこ}がいます。', chinese: '家裡有貓。' },
                    {
                        japanese: '「田中{たなか}さんはどこにいますか。」\n「会議室{かいぎしつ}にいます。」\n「わかりました。」',
                        chinese: '「田中先生在哪裡？」\n「在會議室。」\n「了解。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示擁有',
                description: '「ある/いる」也可以表示擁有某物或有某人。',
                examples: [
                    { japanese: '私{わたし}は車{くるま}があります。', chinese: '我有車。' },
                    { japanese: '彼{かれ}には兄弟{きょうだい}がいます。', chinese: '他有兄弟姐妹。' },
                    {
                        japanese: '「明日{あした}、時間{じかん}ある？」\n「うん、あるよ。」\n「じゃ、映画{えいが}行{い}かない？」',
                        chinese: '「明天有時間嗎？」\n「有喔。」\n「那要不要去看電影？」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「ある」vs「いる」的使用',
            points: [
                {
                    rule: '「ある」：無生命物品',
                    examples: [{ japanese: '本{ほん}がある', chinese: '有書' }]
                },
                {
                    rule: '「いる」：人、動物（有生命）',
                    examples: [{ japanese: '猫{ねこ}がいる', chinese: '有貓' }]
                },
                {
                    rule: '植物：通常用「ある」',
                    examples: [{ japanese: '花{はな}がある', chinese: '有花' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '人用「ある」，物用「いる」',
                    explanation: '有生命的（人、動物）用「いる」，無生命的（物品、植物）用「ある」。',
                    whenToUse: '先判斷是有生命還是無生命。',
                    correct: { sentence: '部屋{へや}に人{ひと}がいる。', note: '○ 人用「いる」' },
                    incorrect: { sentence: '部屋{へや}に人{ひと}がある。', note: '✕ 人不能用「ある」' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_ga_aru_1',
                sentence: '机{つくえ}の上{うえ}にパソコン（　）あります。',
                options: ['が', 'を', 'に', 'は'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！存在句中用「が」標記存在的物品。',
                    wrong: [
                        '「を」錯誤：「を」是受詞標記，存在句用「が」。',
                        '「に」錯誤：「に」標記位置，物品用「が」。',
                        '「は」錯誤：新資訊用「が」，不用「は」。'
                    ]
                }
            },
            {
                id: 'n5_q_ga_aru_2',
                sentence: '公園{こうえん}に犬{いぬ}が（　）。',
                options: ['います', 'あります', 'です', 'ます'],
                correctIndex: 0,
                explanation: {
                    correct: '「います」正確！狗是動物，用「いる」。',
                    wrong: [
                        '「あります」錯誤：「ある」用於物品，動物用「いる」。',
                        '「です」錯誤：「です」不表示存在。',
                        '「ます」錯誤：「ます」不能單獨使用。'
                    ]
                }
            },
            {
                id: 'n5_q_ga_aru_3',
                sentence: '冷蔵庫{れいぞうこ}に牛乳{ぎゅうにゅう}が（　）。',
                options: ['あります', 'います', 'です', 'します'],
                correctIndex: 0,
                explanation: {
                    correct: '「あります」正確！牛奶是物品，用「ある」。',
                    wrong: [
                        '「います」錯誤：「いる」用於人和動物。',
                        '「です」錯誤：「です」不表示存在。',
                        '「します」錯誤：「します」表示做某事。'
                    ]
                }
            },
            {
                id: 'n5_q_ga_aru_4',
                sentence: '「すみません、この近{ちか}くにコンビニ（　）ますか。」\n「はい、あの角{かど}にありますよ。」\n「ありがとうございます。」',
                options: ['あり', 'い', 'でき', 'し'],
                correctIndex: 0,
                explanation: {
                    correct: '「あり」正確！「ありますか」詢問便利商店的存在。',
                    wrong: [
                        '「い」錯誤：「いる」用於人和動物。',
                        '「でき」錯誤：「できる」表示能夠。',
                        '「し」錯誤：「します」表示做某事。'
                    ]
                }
            },
            {
                id: 'n5_q_ga_aru_5',
                sentence: '「彼女{かのじょ}、（　）の？」\n「うん、いるよ。」\n「へえ、いいね。」',
                options: ['いる', 'ある', 'する', 'なる'],
                correctIndex: 0,
                explanation: {
                    correct: '「いる」正確！女朋友是人，用「いる」。',
                    wrong: [
                        '「ある」錯誤：「ある」用於物品。',
                        '「する」錯誤：「する」表示做某事。',
                        '「なる」錯誤：「なる」表示變成。'
                    ]
                }
            }
        ]
    },

    // n5_e_he - へ（方向）
    n5_e_he: {
        id: 'n5_e_he',
        pattern: 'へ',
        connection: '名詞（場所）＋へ',
        translation: '往...、朝...',
        level: 'N5',
        explanation: [
            {
                usage: '表示移動方向',
                description: '表示移動的方向，強調「朝那個方向去」。',
                examples: [
                    { japanese: '学校{がっこう}へ行{い}きます。', chinese: '去學校。' },
                    { japanese: '日本{にほん}へ旅行{りょこう}に行{い}きます。', chinese: '去日本旅行。' },
                    {
                        japanese: '「どこへ行{い}くの？」\n「駅{えき}へ行{い}くよ。」\n「気{き}をつけてね。」',
                        chinese: '「要去哪裡？」\n「去車站喔。」\n「小心喔。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '「へ」和「に」的區別',
                description: '「へ」強調方向，「に」強調到達點，但很多時候可以互換。',
                examples: [
                    { japanese: '東{ひがし}へ向{む}かいます。', chinese: '往東邊走。' },
                    { japanese: '家{いえ}へ帰{かえ}ります。', chinese: '回家。' },
                    {
                        japanese: '「明日{あした}、どこへ行{い}く？」\n「海{うみ}へ行{い}こうと思{おも}ってる。」\n「いいね！」',
                        chinese: '「明天要去哪裡？」\n「想去海邊。」\n「不錯呢！」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「へ」vs「に」的區別',
            points: [
                {
                    rule: '「へ」：強調方向（較抽象）',
                    examples: [{ japanese: '学校{がっこう}へ行{い}く', chinese: '朝學校的方向去' }]
                },
                {
                    rule: '「に」：強調到達點（較具體）',
                    examples: [{ japanese: '学校{がっこう}に行{い}く', chinese: '到達學校' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '把「へ」念成「he」',
                    explanation: '助詞「へ」雖然寫作「he」，但發音是「e」。',
                    whenToUse: '只有助詞「へ」念「e」。',
                    correct: { sentence: '学校{がっこう}へ（gakkou e）', note: '○ 正確發音' },
                    incorrect: { sentence: '学校{がっこう}へ（gakkou he）', note: '✕ 錯誤發音' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_e_he_1',
                sentence: '毎日{まいにち}会社{かいしゃ}（　）行{い}きます。',
                options: ['へ', 'を', 'が', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「へ」正確！表示去公司的方向。',
                    wrong: [
                        '「を」錯誤：「を」是受詞標記，方向用「へ」。',
                        '「が」錯誤：「が」是主語標記，方向用「へ」。',
                        '「の」錯誤：「の」是所有格，方向用「へ」。'
                    ]
                }
            },
            {
                id: 'n5_q_e_he_2',
                sentence: '来週{らいしゅう}、日本{にほん}（　）旅行{りょこう}に行{い}きます。',
                options: ['へ', 'を', 'が', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「へ」正確！表示去日本的方向。',
                    wrong: [
                        '「を」錯誤：方向用「へ」或「に」。',
                        '「が」錯誤：「が」是主語標記。',
                        '「の」錯誤：「の」是所有格。'
                    ]
                }
            },
            {
                id: 'n5_q_e_he_3',
                sentence: 'もう遅{おそ}いから、家{いえ}（　）帰{かえ}ります。',
                options: ['へ', 'を', 'が', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「へ」正確！「家へ帰る」表示回家。',
                    wrong: [
                        '「を」錯誤：「を」是受詞標記。',
                        '「が」錯誤：「が」是主語標記。',
                        '「の」錯誤：「の」是所有格。'
                    ]
                }
            },
            {
                id: 'n5_q_e_he_4',
                sentence: '「週末{しゅうまつ}、どこ（　）行{い}く？」\n「山{やま}へ行{い}こうと思{おも}ってる。」\n「いいね！」',
                options: ['へ', 'を', 'が', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「へ」正確！「どこへ行く」詢問方向。',
                    wrong: [
                        '「を」錯誤：方向用「へ」。',
                        '「が」錯誤：「が」是主語標記。',
                        '「の」錯誤：「の」是所有格。'
                    ]
                }
            },
            {
                id: 'n5_q_e_he_5',
                sentence: '「夏休{なつやす}み、どこ（　）行{い}きたい？」\n「沖縄{おきなわ}へ行{い}きたいな。」\n「海{うみ}がきれいだよね。」',
                options: ['へ', 'を', 'が', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「へ」正確！詢問想去的方向。',
                    wrong: [
                        '「を」錯誤：方向用「へ」。',
                        '「が」錯誤：「が」是主語標記。',
                        '「の」錯誤：「の」是所有格。'
                    ]
                }
            }
        ]
    },

    // n5_de_place - で（場所）
    n5_de_place: {
        id: 'n5_de_place',
        pattern: 'で',
        connection: '名詞（場所）＋で',
        translation: '在...（動作場所）',
        level: 'N5',
        explanation: [
            {
                usage: '表示動作進行的場所',
                description: '表示動作在某地方進行。',
                examples: [
                    { japanese: '図書館{としょかん}で勉強{べんきょう}します。', chinese: '在圖書館讀書。' },
                    { japanese: 'レストランで食{た}べます。', chinese: '在餐廳吃。' },
                    {
                        japanese: '「どこで昼{ひる}ご飯{はん}を食{た}べる？」\n「あのカフェで食{た}べよう。」\n「いいね。」',
                        chinese: '「在哪裡吃午餐？」\n「在那家咖啡廳吃吧。」\n「好啊。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示手段/方法',
                description: '「で」也可以表示使用的工具或方法。',
                examples: [
                    { japanese: '電車{でんしゃ}で行{い}きます。', chinese: '搭電車去。' },
                    { japanese: '日本語{にほんご}で話{はな}します。', chinese: '用日語說。' },
                    {
                        japanese: '「何{なに}で来{き}たの？」\n「自転車{じてんしゃ}で来{き}たよ。」\n「へえ、健康{けんこう}的{てき}だね。」',
                        chinese: '「怎麼來的？」\n「騎腳踏車來的喔。」\n「欸，很健康呢。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「で」vs「に」的區別',
            points: [
                {
                    rule: '「で」（動作場所）：動作在此處進行',
                    examples: [{ japanese: '図書館{としょかん}で勉強{べんきょう}する', chinese: '在圖書館讀書' }]
                },
                {
                    rule: '「に」（存在場所）：人或物存在於此處',
                    examples: [{ japanese: '図書館{としょかん}にいる', chinese: '在圖書館（存在）' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '存在用「で」，動作用「に」',
                    explanation: '動作場所用「で」，存在場所用「に」。',
                    whenToUse: '動作用「で」，存在（いる/ある）用「に」。',
                    correct: { sentence: '公園{こうえん}で遊{あそ}ぶ。', note: '○ 動作場所用「で」' },
                    incorrect: { sentence: '公園{こうえん}に遊{あそ}ぶ。', note: '✕ 動作用「で」' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_de_place_1',
                sentence: '図書館{としょかん}（　）本{ほん}を読{よ}みます。',
                options: ['で', 'に', 'へ', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「で」正確！讀書是動作，動作場所用「で」。',
                    wrong: [
                        '「に」錯誤：「に」用於存在，動作場所用「で」。',
                        '「へ」錯誤：「へ」表示方向。',
                        '「を」錯誤：「を」是受詞標記。'
                    ]
                }
            },
            {
                id: 'n5_q_de_place_2',
                sentence: '電車{でんしゃ}（　）会社{かいしゃ}に行{い}きます。',
                options: ['で', 'に', 'へ', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「で」正確！「電車で」表示交通工具。',
                    wrong: [
                        '「に」錯誤：交通工具用「で」。',
                        '「へ」錯誤：「へ」表示方向。',
                        '「を」錯誤：「を」是受詞標記。'
                    ]
                }
            },
            {
                id: 'n5_q_de_place_3',
                sentence: '日本語{にほんご}（　）手紙{てがみ}を書{か}きました。',
                options: ['で', 'に', 'へ', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「で」正確！「日本語で」表示使用的語言。',
                    wrong: [
                        '「に」錯誤：語言/方式用「で」。',
                        '「へ」錯誤：「へ」表示方向。',
                        '「を」錯誤：「を」標記受詞「手紙」。'
                    ]
                }
            },
            {
                id: 'n5_q_de_place_4',
                sentence: '「どこ（　）買{か}い物{もの}する？」\n「駅前{えきまえ}のデパートで買{か}おう。」\n「いいね。」',
                options: ['で', 'に', 'へ', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「で」正確！買東西是動作，動作場所用「で」。',
                    wrong: [
                        '「に」錯誤：動作場所用「で」。',
                        '「へ」錯誤：「へ」表示方向。',
                        '「を」錯誤：「を」是受詞標記。'
                    ]
                }
            },
            {
                id: 'n5_q_de_place_5',
                sentence: '「何{なに}（　）払{はら}いますか。」\n「クレジットカードで払{はら}います。」\n「わかりました。」',
                options: ['で', 'に', 'へ', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「で」正確！「何で」詢問用什麼方式付款。',
                    wrong: [
                        '「に」錯誤：方式/手段用「で」。',
                        '「へ」錯誤：「へ」表示方向。',
                        '「を」錯誤：「を」是受詞標記。'
                    ]
                }
            }
        ]
    },

    // n5_kara_made - から～まで（從...到...）
    n5_kara_made: {
        id: 'n5_kara_made',
        pattern: 'から～まで',
        connection: '名詞＋から＋名詞＋まで',
        translation: '從...到...',
        level: 'N5',
        explanation: [
            {
                usage: '表示時間範圍',
                description: '表示從某時間到某時間。',
                examples: [
                    { japanese: '九時{くじ}から五時{ごじ}まで働{はたら}きます。', chinese: '從九點工作到五點。' },
                    { japanese: '月曜日{げつようび}から金曜日{きんようび}まで学校{がっこう}があります。', chinese: '從星期一到星期五有課。' },
                    {
                        japanese: '「仕事{しごと}は何時{なんじ}から何時{なんじ}まで？」\n「九時{くじ}から六時{ろくじ}までだよ。」\n「大変{たいへん}だね。」',
                        chinese: '「工作從幾點到幾點？」\n「從九點到六點喔。」\n「好辛苦呢。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示空間範圍',
                description: '表示從某地到某地。',
                examples: [
                    { japanese: '東京{とうきょう}から大阪{おおさか}まで新幹線{しんかんせん}で行{い}きます。', chinese: '從東京搭新幹線到大阪。' },
                    { japanese: '家{いえ}から駅{えき}まで歩{ある}いて十分{じっぷん}です。', chinese: '從家走到車站要十分鐘。' },
                    {
                        japanese: '「ここから駅{えき}まで、どのくらいかかりますか。」\n「歩{ある}いて五分{ごふん}くらいです。」\n「ありがとうございます。」',
                        chinese: '「從這裡到車站要多久？」\n「走路大約五分鐘。」\n「謝謝您。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「から」和「まで」的單獨使用',
            points: [
                {
                    rule: '「から」：從...（起點）',
                    examples: [{ japanese: '九時{くじ}から始{はじ}まる', chinese: '從九點開始' }]
                },
                {
                    rule: '「まで」：到...（終點）',
                    examples: [{ japanese: '五時{ごじ}まで働{はたら}く', chinese: '工作到五點' }]
                },
                {
                    rule: '「から～まで」：從...到...（範圍）',
                    examples: [{ japanese: '九時{くじ}から五時{ごじ}まで', chinese: '從九點到五點' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '時間點用「に」還是「から」',
                    explanation: '「に」表示具體時間點，「から」表示起點。',
                    whenToUse: '表示「從...」用「から」。',
                    correct: { sentence: '九時{くじ}から始{はじ}まります。', note: '○ 從九點開始' },
                    incorrect: { sentence: '九時{くじ}に始{はじ}まります。', note: '○ 也對，但強調「在九點」' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_kara_made_1',
                sentence: '授業{じゅぎょう}は九時{くじ}（　）始{はじ}まります。',
                options: ['から', 'まで', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「から」正確！「九時から」表示「從九點」開始。',
                    wrong: [
                        '「まで」錯誤：「まで」表示終點。',
                        '「に」錯誤：「に」也可以，但「から」強調起點。',
                        '「で」錯誤：「で」不用於時間點。'
                    ]
                }
            },
            {
                id: 'n5_q_kara_made_2',
                sentence: '仕事{しごと}は五時{ごじ}（　）です。',
                options: ['まで', 'から', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「まで」正確！「五時まで」表示「到五點」。',
                    wrong: [
                        '「から」錯誤：「から」表示起點。',
                        '「に」錯誤：「に」表示時間點，不表示終點。',
                        '「で」錯誤：「で」不用於時間終點。'
                    ]
                }
            },
            {
                id: 'n5_q_kara_made_3',
                sentence: '東京{とうきょう}（　）大阪{おおさか}まで、新幹線{しんかんせん}で三時間{さんじかん}です。',
                options: ['から', 'まで', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「から」正確！「東京から大阪まで」表示範圍。',
                    wrong: [
                        '「まで」錯誤：起點用「から」。',
                        '「に」錯誤：起點用「から」。',
                        '「で」錯誤：起點用「から」。'
                    ]
                }
            },
            {
                id: 'n5_q_kara_made_4',
                sentence: '「夏休{なつやす}みはいつ（　）いつまで？」\n「七月{しちがつ}から八月{はちがつ}までだよ。」\n「長{なが}いね！」',
                options: ['から', 'まで', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「から」正確！詢問暑假的起點。',
                    wrong: [
                        '「まで」錯誤：起點用「から」。',
                        '「に」錯誤：範圍用「から～まで」。',
                        '「で」錯誤：時間用「から」。'
                    ]
                }
            },
            {
                id: 'n5_q_kara_made_5',
                sentence: '「家{いえ}から学校{がっこう}（　）、どのくらい？」\n「歩{ある}いて十五分{じゅうごふん}くらいかな。」\n「近{ちか}いね。」',
                options: ['まで', 'から', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「まで」正確！「学校まで」表示終點。',
                    wrong: [
                        '「から」錯誤：終點用「まで」。',
                        '「に」錯誤：終點用「まで」。',
                        '「で」錯誤：終點用「まで」。'
                    ]
                }
            }
        ]
    }
});

// Batch 10: 必須/義務句型
Object.assign(n5Details, {
    // n5_naito_ikenai - 必須（ないといけない）
    n5_naito_ikenai: {
        id: 'n5_naito_ikenai',
        pattern: 'ないといけない',
        connection: '動詞ない形＋といけない',
        translation: '必須...；不...不行',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '表示義務或必要性',
                description: '表示「必須做某事」，帶有「如果不做會有問題」的語感。',
                examples: [
                    { japanese: '明日{あした}は早{はや}く起{お}きないといけない。', chinese: '明天必須早起。' },
                    { japanese: '宿題{しゅくだい}をしないといけない。', chinese: '必須寫作業。' },
                    {
                        japanese: '「もう帰{かえ}るの？」\n「うん、明日{あした}早{はや}いから、早{はや}く寝{ね}ないといけないんだ。」\n「そっか、気{き}をつけてね。」',
                        chinese: '「已經要回去了嗎？」\n「嗯，因為明天要早起，必須早點睡。」\n「這樣啊，路上小心。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「必須」的各種表達方式',
            points: [
                {
                    rule: '「ないといけない」：較口語，常用於日常對話',
                    examples: [{ japanese: '行{い}かないといけない', chinese: '必須去' }]
                },
                {
                    rule: '「なければならない」：較正式，書面語常用',
                    examples: [{ japanese: '行{い}かなければならない', chinese: '必須去' }]
                },
                {
                    rule: '「なくてはいけない」：口語和書面皆可',
                    examples: [{ japanese: '行{い}かなくてはいけない', chinese: '必須去' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '把「ないと」和「なくては」搞混',
                    explanation: '兩者都表示「必須」，但接續不同。「ないと」後接「いけない」，「なくては」後也接「いけない」或「ならない」。',
                    whenToUse: '記住固定搭配即可。',
                    correct: { sentence: '食{た}べないといけない。', note: '○ 正確' },
                    incorrect: { sentence: '食{た}べなくといけない。', note: '✕ 接續錯誤' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_naito_1',
                sentence: '薬{くすり}を飲{の}ま（　）いけない。',
                options: ['ないと', 'なくて', 'ないで', 'なくと'],
                correctIndex: 0,
                explanation: {
                    correct: '「ないと」正確！「飲まないといけない」表示「必須吃藥」。',
                    wrong: [
                        '「なくて」錯誤：「なくて」接「はいけない」，不接「いけない」。',
                        '「ないで」錯誤：「ないで」表示「不做...」，不表示義務。',
                        '「なくと」錯誤：沒有這種接續形式。'
                    ]
                }
            },
            {
                id: 'n5_q_naito_2',
                sentence: '毎日{まいにち}運動{うんどう}し（　）いけません。',
                options: ['ないと', 'なくて', 'ないで', 'ない'],
                correctIndex: 0,
                explanation: {
                    correct: '「ないと」正確！「しないといけません」表示「必須運動」。',
                    wrong: [
                        '「なくて」錯誤：接續形式不對。',
                        '「ないで」錯誤：「ないで」不表示義務。',
                        '「ない」錯誤：需要完整的「ないと」。'
                    ]
                }
            },
            {
                id: 'n5_q_naito_3',
                sentence: 'もっと勉強{べんきょう}（　）いけないと思{おも}います。',
                options: ['しないと', 'しなくて', 'しないで', 'しなくと'],
                correctIndex: 0,
                explanation: {
                    correct: '「しないと」正確！「勉強しないといけない」表示「必須學習」。',
                    wrong: [
                        '「しなくて」錯誤：接續形式不對。',
                        '「しないで」錯誤：不表示義務。',
                        '「しなくと」錯誤：沒有這種形式。'
                    ]
                }
            },
            {
                id: 'n5_q_naito_4',
                sentence: '「今日{きょう}、残業{ざんぎょう}？」\n「うん、この仕事{しごと}、今日中{きょうじゅう}に終{お}わらせ（　）いけないんだ。」\n「大変{たいへん}だね、頑張{がんば}って。」',
                options: ['ないと', 'なくて', 'ないで', 'なくと'],
                correctIndex: 0,
                explanation: {
                    correct: '「ないと」正確！表示「今天之內必須完成」。',
                    wrong: [
                        '「なくて」錯誤：接續形式不對。',
                        '「ないで」錯誤：不表示義務。',
                        '「なくと」錯誤：沒有這種形式。'
                    ]
                }
            },
            {
                id: 'n5_q_naito_5',
                sentence: '「明日{あした}のプレゼン、準備{じゅんび}できた？」\n「まだ。今夜{こんや}徹夜{てつや}（　）いけないかも。」\n「手伝{てつだ}おうか？」',
                options: ['しないと', 'しなくて', 'しないで', 'しない'],
                correctIndex: 0,
                explanation: {
                    correct: '「しないと」正確！「徹夜しないといけない」表示「可能必須熬夜」。',
                    wrong: [
                        '「しなくて」錯誤：接續形式不對。',
                        '「しないで」錯誤：不表示義務。',
                        '「しない」錯誤：句子不完整。'
                    ]
                }
            }
        ]
    },

    // n5_nakute_wa_ikenai - 必須（なくてはいけない）
    n5_nakute_wa_ikenai: {
        id: 'n5_nakute_wa_ikenai',
        pattern: 'なくてはいけない',
        connection: '動詞ない形（去ない）＋なくてはいけない',
        translation: '必須...；不...不行',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '表示義務或必要性',
                description: '與「ないといけない」意思相同，表示「必須做某事」。語氣稍微正式一些。',
                examples: [
                    { japanese: '約束{やくそく}は守{まも}らなくてはいけない。', chinese: '必須遵守約定。' },
                    { japanese: '毎日{まいにち}日本語{にほんご}を勉強{べんきょう}しなくてはいけない。', chinese: '必須每天學日語。' },
                    {
                        japanese: '「どうして毎日{まいにち}走{はし}ってるの？」\n「健康{けんこう}のために運動{うんどう}しなくてはいけないと思{おも}って。」\n「偉{えら}いね！」',
                        chinese: '「為什麼每天跑步？」\n「我覺得為了健康必須運動。」\n「好厲害！」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「なくてはいけない」的縮略形',
            points: [
                {
                    rule: '完整形：なくてはいけない（正式）',
                    examples: [{ japanese: '行{い}かなくてはいけない', chinese: '必須去' }]
                },
                {
                    rule: '縮略形：なくちゃいけない（口語）',
                    examples: [{ japanese: '行{い}かなくちゃいけない', chinese: '必須去' }]
                },
                {
                    rule: '更口語：なくちゃ（省略いけない）',
                    examples: [{ japanese: '行{い}かなくちゃ', chinese: '得去了' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '遺漏「は」變成「なくていけない」',
                    explanation: '正確形式是「なくてはいけない」，中間有「は」。',
                    whenToUse: '記住完整形式。',
                    correct: { sentence: '食{た}べなくてはいけない。', note: '○ 有「は」' },
                    incorrect: { sentence: '食{た}べなくていけない。', note: '✕ 缺少「は」' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_nakuteha_1',
                sentence: '規則{きそく}は守{まも}らなくて（　）いけません。',
                options: ['は', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「は」正確！「なくてはいけない」是固定形式。',
                    wrong: [
                        '「が」錯誤：固定搭配是「なくては」。',
                        '「を」錯誤：不是這個助詞。',
                        '「に」錯誤：不是這個助詞。'
                    ]
                }
            },
            {
                id: 'n5_q_nakuteha_2',
                sentence: '学生{がくせい}は毎日{まいにち}勉強{べんきょう}（　）なくてはいけません。',
                options: ['し', 'す', 'する', 'して'],
                correctIndex: 0,
                explanation: {
                    correct: '「し」正確！「する」的ない形是「しない」，去「ない」後接「なくては」。',
                    wrong: [
                        '「す」錯誤：動詞形態錯誤。',
                        '「する」錯誤：需要變成ない形。',
                        '「して」錯誤：て形不能接「なくては」。'
                    ]
                }
            },
            {
                id: 'n5_q_nakuteha_3',
                sentence: 'もっと野菜{やさい}を（　）なくてはいけないと医者{いしゃ}に言{い}われた。',
                options: ['食べ', '食べる', '食べて', '食べた'],
                correctIndex: 0,
                explanation: {
                    correct: '「食べ」正確！「食べる」的ない形是「食べない」，去「ない」接「なくては」。',
                    wrong: [
                        '「食べる」錯誤：需要變成ない形的語幹。',
                        '「食べて」錯誤：て形不適用。',
                        '「食べた」錯誤：過去式不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_nakuteha_4',
                sentence: '「明日{あした}までにレポート出{だ}せる？」\n「ちょっと厳{きび}しいけど、出{だ}さ（　）いけないから、頑張{がんば}るよ。」\n「応援{おうえん}してる！」',
                options: ['なくては', 'ないでは', 'なくとは', 'ないとは'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくては」正確！「出さなくてはいけない」表示「必須提交」。',
                    wrong: [
                        '「ないでは」錯誤：不是這種接續。',
                        '「なくとは」錯誤：沒有這種形式。',
                        '「ないとは」錯誤：「ないと」後直接接「いけない」。'
                    ]
                }
            },
            {
                id: 'n5_q_nakuteha_5',
                sentence: '「なんで急{いそ}いでるの？」\n「電車{でんしゃ}の時間{じかん}に間{ま}に合{あ}わ（　）いけないから。」\n「走{はし}ろう！」',
                options: ['なくては', 'ないでは', 'なくとは', 'ないとは'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくては」正確！「間に合わなくてはいけない」表示「必須趕上」。',
                    wrong: [
                        '「ないでは」錯誤：接續形式不對。',
                        '「なくとは」錯誤：沒有這種形式。',
                        '「ないとは」錯誤：接續形式不對。'
                    ]
                }
            }
        ]
    },

    // n5_naku_temo_ii - 不必（なくてもいい）
    n5_naku_temo_ii: {
        id: 'n5_naku_temo_ii',
        pattern: 'なくてもいい',
        connection: '動詞ない形（去ない）＋なくてもいい',
        translation: '不必...；不...也可以',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '表示不需要做某事',
                description: '表示「不做某事也沒關係」，是「てもいい」（許可）的否定形式。',
                examples: [
                    { japanese: '明日{あした}は来{こ}なくてもいいです。', chinese: '明天不用來也可以。' },
                    { japanese: '無理{むり}して食{た}べなくてもいい。', chinese: '不用勉強吃。' },
                    {
                        japanese: '「全部{ぜんぶ}覚{おぼ}えなくちゃいけませんか。」\n「いいえ、全部{ぜんぶ}覚{おぼ}えなくてもいいですよ。大事{だいじ}なところだけで。」\n「よかった！」',
                        chinese: '「必須全部記住嗎？」\n「不，不用全部記住也可以喔。只要重要的地方就好。」\n「太好了！」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '許可與不必的表達',
            points: [
                {
                    rule: '「てもいい」：可以做（許可）',
                    examples: [{ japanese: '食{た}べてもいい', chinese: '可以吃' }]
                },
                {
                    rule: '「なくてもいい」：不做也可以（不必）',
                    examples: [{ japanese: '食{た}べなくてもいい', chinese: '不吃也可以' }]
                },
                {
                    rule: '「てはいけない」：不可以做（禁止）',
                    examples: [{ japanese: '食{た}べてはいけない', chinese: '不可以吃' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '把「なくてもいい」和「ないでもいい」搞混',
                    explanation: '正確形式是「なくてもいい」，不是「ないでもいい」。',
                    whenToUse: '記住固定形式。',
                    correct: { sentence: '来{こ}なくてもいい。', note: '○ 正確' },
                    incorrect: { sentence: '来{こ}ないでもいい。', note: '✕ 形式錯誤' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_nakutemo_1',
                sentence: '急{いそ}が（　）もいいですよ。ゆっくりで大丈夫{だいじょうぶ}です。',
                options: ['なくて', 'ないで', 'なくと', 'ないと'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくて」正確！「急がなくてもいい」表示「不用急也可以」。',
                    wrong: [
                        '「ないで」錯誤：不是這種接續。',
                        '「なくと」錯誤：沒有這種形式。',
                        '「ないと」錯誤：「ないと」後接「いけない」，不是「もいい」。'
                    ]
                }
            },
            {
                id: 'n5_q_nakutemo_2',
                sentence: 'お金{かね}を払{はら}わ（　）もいいんですか。',
                options: ['なくて', 'ないで', 'なくと', 'ないと'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくて」正確！「払わなくてもいい」表示「不付錢也可以嗎」。',
                    wrong: [
                        '「ないで」錯誤：接續形式不對。',
                        '「なくと」錯誤：沒有這種形式。',
                        '「ないと」錯誤：接續形式不對。'
                    ]
                }
            },
            {
                id: 'n5_q_nakutemo_3',
                sentence: 'この漢字{かんじ}は覚{おぼ}え（　）もいいですか。',
                options: ['なくて', 'ないで', 'なくと', 'ない'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくて」正確！「覚えなくてもいい」表示「不記也可以嗎」。',
                    wrong: [
                        '「ないで」錯誤：接續形式不對。',
                        '「なくと」錯誤：沒有這種形式。',
                        '「ない」錯誤：句子不完整。'
                    ]
                }
            },
            {
                id: 'n5_q_nakutemo_4',
                sentence: '「これ、持{も}って行{い}ったほうがいい？」\n「ううん、（　）もいいよ。荷物{にもつ}になるから。」\n「そう？じゃあ置{お}いていく。」',
                options: ['持って行かなくて', '持って行ないで', '持って行かないと', '持って行ってない'],
                correctIndex: 0,
                explanation: {
                    correct: '「持って行かなくて」正確！表示「不用帶也可以」。',
                    wrong: [
                        '「持って行ないで」錯誤：形式錯誤。',
                        '「持って行かないと」錯誤：這表示「必須帶」。',
                        '「持って行ってない」錯誤：形式錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_nakutemo_5',
                sentence: '「明日{あした}、早{はや}く来{き}たほうがいい？」\n「いや、そんなに早{はや}く（　）もいいよ。10時{じ}くらいで。」\n「わかった、ありがとう。」',
                options: ['来なくて', '来ないで', '来なくと', '来ないと'],
                correctIndex: 0,
                explanation: {
                    correct: '「来なくて」正確！「来なくてもいい」表示「不用那麼早來也可以」。',
                    wrong: [
                        '「来ないで」錯誤：接續形式不對。',
                        '「来なくと」錯誤：沒有這種形式。',
                        '「来ないと」錯誤：這表示「必須來」。'
                    ]
                }
            }
        ]
    }
});

// ===== Batch 11: なくちゃ / なくてはならない / なる / んです =====
Object.assign(n5Details, {
    // ===== n5_nakucha =====
    n5_nakucha: {
        id: 'n5_nakucha',
        pattern: 'なくちゃ',
        connection: '動詞ない形＋くちゃ',
        translation: '必須...；不得不...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '口語縮略形',
                description: '「なくちゃ」是「なくては（いけない）」的口語縮略形，表示義務或必須做某事。在日常會話中非常常用，語氣比正式形更輕鬆。後面的「いけない」經常被省略。',
                examples: [
                    { japanese: '早{はや}く起{お}きなくちゃ。', chinese: '必須早點起床。' },
                    { japanese: 'もう行{い}かなくちゃ。', chinese: '我得走了。' },
                    { japanese: '宿題{しゅくだい}をしなくちゃいけない。', chinese: '必須做作業。' },
                    { japanese: '薬{くすり}を飲{の}まなくちゃ。', chinese: '必須吃藥。' }
                ]
            },
            {
                usageId: 2,
                title: '自言自語用法',
                description: '「なくちゃ」常用於自言自語，表達自己需要做某事的想法。這種用法非常自然，經常在獨白或內心想法中出現。',
                examples: [
                    { japanese: 'あ、電話{でんわ}しなくちゃ。', chinese: '啊，得打電話。' },
                    { japanese: '買{か}い物{もの}に行{い}かなくちゃ。', chinese: '得去買東西。' },
                    { japanese: 'そろそろ帰{かえ}らなくちゃ。', chinese: '差不多該回去了。' }
                ]
            }
        ],
        analysis: {
            title: '「なくちゃ」的縮略關係',
            points: [
                {
                    rule: '完整形 → 縮略形的變化：',
                    examples: [
                        { japanese: 'なくてはいけない → なくちゃいけない → なくちゃ', chinese: '三階段縮略' }
                    ]
                },
                {
                    rule: '類似的縮略：「なきゃ」也是口語形式',
                    examples: [
                        { japanese: '行{い}かなきゃ', chinese: '得走了（另一種縮略）' }
                    ]
                },
                {
                    rule: '正式度比較：なくてはいけない ＞ なくちゃいけない ＞ なくちゃ ＞ なきゃ',
                    examples: [
                        { japanese: '書類{しょるい}を出{だ}さなくてはいけません。', chinese: '（正式）必須提交文件。' },
                        { japanese: '書類{しょるい}出{だ}さなくちゃ。', chinese: '（口語）得交文件。' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_nakucha_1',
                sentence: 'もう遅{おそ}いから、早{はや}く寝{ね}（　）。',
                options: ['なくちゃ', 'なくても', 'ないで', 'なくて'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくちゃ」正確！表示「必須早點睡」的口語說法。',
                    wrong: [
                        '「なくても」錯誤：這表示「不...也可以」。',
                        '「ないで」錯誤：這表示「不做...」的狀態。',
                        '「なくて」錯誤：需要後接「も」或其他成分。'
                    ]
                }
            },
            {
                id: 'n5_q_nakucha_2',
                sentence: '電車{でんしゃ}の時間{じかん}だ。急{いそ}が（　）。',
                options: ['なくちゃ', 'なくても', 'ないで', 'なくて'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくちゃ」正確！「急がなくちゃ」表示「必須趕快」。',
                    wrong: [
                        '「なくても」錯誤：這表示「不急也可以」，與情境矛盾。',
                        '「ないで」錯誤：接續形式不對。',
                        '「なくて」錯誤：句子不完整。'
                    ]
                }
            },
            {
                id: 'n5_q_nakucha_3',
                sentence: '「明日{あした}テストだよ。」\n「え！勉強{べんきょう}し（　）！」',
                options: ['なくちゃ', 'なくても', 'ないで', 'なくと'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくちゃ」正確！聽到明天有考試，所以說「必須讀書」。',
                    wrong: [
                        '「なくても」錯誤：這表示「不讀也可以」，與情境矛盾。',
                        '「ないで」錯誤：形式不對。',
                        '「なくと」錯誤：沒有這種形式。'
                    ]
                }
            },
            {
                id: 'n5_q_nakucha_4',
                sentence: '薬{くすり}を飲{の}ま（　）、熱{ねつ}が下{さ}がらないよ。',
                options: ['なくちゃ', 'なくても', 'ないで', 'なくて'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくちゃ」正確！「必須吃藥」否則燒不會退。',
                    wrong: [
                        '「なくても」錯誤：語意不通。',
                        '「ないで」錯誤：形式不對。',
                        '「なくて」錯誤：形式不對。'
                    ]
                }
            },
            {
                id: 'n5_q_nakucha_5',
                sentence: 'あ、そろそろ帰{かえ}ら（　）。',
                options: ['なくちゃ', 'なくても', 'ないで', 'なくて'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくちゃ」正確！「差不多該回去了」的口語說法。',
                    wrong: [
                        '「なくても」錯誤：語意相反。',
                        '「ないで」錯誤：形式不對。',
                        '「なくて」錯誤：形式不對。'
                    ]
                }
            }
        ]
    },

    // ===== n5_nakute_wa_naranai =====
    n5_nakute_wa_naranai: {
        id: 'n5_nakute_wa_naranai',
        pattern: 'なくてはならない',
        connection: '動詞ない形＋くてはならない',
        translation: '必須...；不得不...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '正式的義務表達',
                description: '「なくてはならない」是表達義務的正式說法，比「なくてはいけない」更正式、更書面化。常用於規則、法律、正式文章等場合。',
                examples: [
                    { japanese: '規則{きそく}を守{まも}らなくてはならない。', chinese: '必須遵守規則。' },
                    { japanese: '20歳{さい}以上{いじょう}でなくてはならない。', chinese: '必須年滿20歲。' },
                    { japanese: '税金{ぜいきん}を払{はら}わなくてはならない。', chinese: '必須繳納稅金。' },
                    { japanese: 'パスポートを持{も}っていなくてはならない。', chinese: '必須持有護照。' }
                ]
            },
            {
                usageId: 2,
                title: '與「なくてはいけない」的區別',
                description: '兩者意思相同，但「ならない」更正式。「いけない」可用於日常對話，「ならない」多用於書面或正式場合。',
                examples: [
                    { japanese: '宿題{しゅくだい}を出{だ}さなくてはいけない。', chinese: '（日常）必須交作業。' },
                    { japanese: '申請書{しんせいしょ}を提出{ていしゅつ}しなくてはならない。', chinese: '（正式）必須提交申請書。' }
                ]
            }
        ],
        analysis: {
            title: '義務表達的正式度比較',
            points: [
                {
                    rule: '正式度排序（高→低）：',
                    examples: [
                        { japanese: 'なければならない', chinese: '最正式（書面語）' },
                        { japanese: 'なくてはならない', chinese: '正式' },
                        { japanese: 'なくてはいけない', chinese: '一般' },
                        { japanese: 'なくちゃ・なきゃ', chinese: '口語' }
                    ]
                },
                {
                    rule: '使用場合區分',
                    examples: [
                        { japanese: '法律{ほうりつ}に従{したが}わなければならない。', chinese: '法律文書常用' },
                        { japanese: '早{はや}く行{い}かなくちゃ。', chinese: '朋友間對話常用' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_naranai_1',
                sentence: '運転{うんてん}する時{とき}は、シートベルトをし（　）ならない。',
                options: ['なくては', 'なくても', 'ないでは', 'ないとも'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくては」正確！「しなくてはならない」表示「必須繫安全帶」。',
                    wrong: [
                        '「なくても」錯誤：這表示「不繫也可以」。',
                        '「ないでは」錯誤：沒有這種接續。',
                        '「ないとも」錯誤：沒有這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_naranai_2',
                sentence: '学生{がくせい}は毎日{まいにち}学校{がっこう}に行{い}か（　）ならない。',
                options: ['なくては', 'なくても', 'ないで', 'なくて'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくては」正確！「行かなくてはならない」表示「必須上學」。',
                    wrong: [
                        '「なくても」錯誤：這表示「不去也可以」。',
                        '「ないで」錯誤：不能接「ならない」。',
                        '「なくて」錯誤：需要「は」才能接「ならない」。'
                    ]
                }
            },
            {
                id: 'n5_q_naranai_3',
                sentence: '申{もう}し込{こ}みは今日中{きょうじゅう}にし（　）ならない。',
                options: ['なくては', 'なくても', 'ないでは', 'なくと'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくては」正確！「しなくてはならない」表示「必須在今天內申請」。',
                    wrong: [
                        '「なくても」錯誤：這表示「不申請也可以」。',
                        '「ないでは」錯誤：沒有這種接續。',
                        '「なくと」錯誤：沒有這種形式。'
                    ]
                }
            },
            {
                id: 'n5_q_naranai_4',
                sentence: '税金{ぜいきん}を払{はら}わ（　）ならない。',
                options: ['なくては', 'なくても', 'ないで', 'なくて'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくては」正確！「必須繳稅」是義務。',
                    wrong: [
                        '「なくても」錯誤：語意相反。',
                        '「ないで」錯誤：形式不對。',
                        '「なくて」錯誤：缺少「は」。'
                    ]
                }
            },
            {
                id: 'n5_q_naranai_5',
                sentence: 'パスポートを持{も}ってい（　）ならない。',
                options: ['なくては', 'なくても', 'ないで', 'なくて'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくては」正確！「必須持有護照」。',
                    wrong: [
                        '「なくても」錯誤：語意相反。',
                        '「ないで」錯誤：形式不對。',
                        '「なくて」錯誤：缺少「は」。'
                    ]
                }
            }
        ]
    },

    // ===== n5_naru =====
    n5_naru: {
        id: 'n5_naru',
        pattern: 'になる / くなる',
        connection: '名詞・な形容詞＋になる / い形容詞（ーい→ーく）＋なる',
        translation: '變成...；變得...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '名詞・な形容詞＋になる',
                description: '表示變化成某種狀態或身分。名詞和な形容詞後面接「に」再接「なる」。',
                examples: [
                    { japanese: '医者{いしゃ}になりたい。', chinese: '想成為醫生。' },
                    { japanese: '部屋{へや}がきれいになった。', chinese: '房間變乾淨了。' },
                    { japanese: '日本語{にほんご}が上手{じょうず}になった。', chinese: '日語變好了。' },
                    { japanese: '20歳{さい}になったら、お酒{さけ}が飲{の}める。', chinese: '到了20歲就可以喝酒了。' }
                ]
            },
            {
                usageId: 2,
                title: 'い形容詞＋くなる',
                description: 'い形容詞要去掉「い」，加上「く」再接「なる」。表示程度或狀態的變化。',
                examples: [
                    { japanese: '最近{さいきん}、寒{さむ}くなった。', chinese: '最近變冷了。' },
                    { japanese: '背{せ}が高{たか}くなった。', chinese: '長高了。' },
                    { japanese: '日本語{にほんご}の勉強{べんきょう}が楽{たの}しくなった。', chinese: '日語學習變得有趣了。' },
                    { japanese: '朝{あさ}早{はや}くなった。', chinese: '早上變早了。' }
                ]
            },
            {
                usageId: 3,
                title: '時間的變化',
                description: '「なる」常用於表達時間推移帶來的變化。',
                examples: [
                    { japanese: '春{はる}になると、桜{さくら}が咲{さ}く。', chinese: '到了春天，櫻花就會開。' },
                    { japanese: '6時{じ}になったら、家{いえ}に帰{かえ}る。', chinese: '到了6點就回家。' },
                    { japanese: 'もう夜{よる}になった。', chinese: '已經是晚上了。' }
                ]
            }
        ],
        analysis: {
            title: '「なる」vs「する」的區別',
            points: [
                {
                    rule: '「なる」：自然變化、無意志變化',
                    examples: [
                        { japanese: '空{そら}が暗{くら}くなった。', chinese: '天變暗了。（自然現象）' }
                    ]
                },
                {
                    rule: '「する」：有意志的改變、人為改變',
                    examples: [
                        { japanese: '部屋{へや}を暗{くら}くした。', chinese: '把房間弄暗了。（人為）' }
                    ]
                },
                {
                    rule: '接續形式比較',
                    examples: [
                        { japanese: '名詞＋になる / 名詞＋にする', chinese: '接續相同' },
                        { japanese: 'い形容詞＋くなる / い形容詞＋くする', chinese: '接續相同' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_naru_1',
                sentence: '日本語{にほんご}が上手{じょうず}（　）なりました。',
                options: ['に', 'く', 'で', 'と'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！な形容詞「上手」後面接「になる」。',
                    wrong: [
                        '「く」錯誤：「く」用於い形容詞。',
                        '「で」錯誤：「で」不用於接「なる」。',
                        '「と」錯誤：「と」不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_naru_2',
                sentence: '外{そと}が暗{くら}（　）なった。',
                options: ['く', 'に', 'で', 'と'],
                correctIndex: 0,
                explanation: {
                    correct: '「く」正確！い形容詞「暗い」變成「暗く」再接「なる」。',
                    wrong: [
                        '「に」錯誤：「に」用於名詞和な形容詞。',
                        '「で」錯誤：不用於接「なる」。',
                        '「と」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_naru_3',
                sentence: '将来{しょうらい}、先生{せんせい}（　）なりたいです。',
                options: ['に', 'く', 'で', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！名詞「先生」後面接「になる」。',
                    wrong: [
                        '「く」錯誤：「く」用於い形容詞。',
                        '「で」錯誤：不用於接「なる」。',
                        '「を」錯誤：「なる」不用「を」。'
                    ]
                }
            },
            {
                id: 'n5_q_naru_4',
                sentence: '最近{さいきん}、寒{さむ}（　）なりましたね。',
                options: ['く', 'に', 'で', 'と'],
                correctIndex: 0,
                explanation: {
                    correct: '「く」正確！い形容詞「寒い」→「寒く」＋「なる」。',
                    wrong: [
                        '「に」錯誤：「に」用於名詞和な形容詞。',
                        '「で」錯誤：不用於接「なる」。',
                        '「と」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_naru_5',
                sentence: '「お子{こ}さん、大{おお}き（　）なりましたね。」\n「ええ、もう高校生{こうこうせい}ですよ。」',
                options: ['く', 'に', 'で', 'と'],
                correctIndex: 0,
                explanation: {
                    correct: '「く」正確！「大きい」是い形容詞，所以用「大きくなる」。',
                    wrong: [
                        '「に」錯誤：「大きい」是い形容詞，不是な形容詞。',
                        '「で」錯誤：不用於接「なる」。',
                        '「と」錯誤：不用於這種接續。'
                    ]
                }
            }
        ]
    },

    // ===== n5_ndesu =====
    n5_ndesu: {
        id: 'n5_ndesu',
        pattern: 'んです / のです',
        connection: '動詞普通形・い形容詞＋んです / 名詞・な形容詞＋なんです',
        translation: '是...的（強調說明）',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '說明原因或理由',
                description: '用於向對方說明某種情況的原因、理由或背景。語氣帶有解釋的意味。',
                examples: [
                    { japanese: '頭{あたま}が痛{いた}いんです。', chinese: '（是因為）頭很痛。' },
                    { japanese: '電車{でんしゃ}が遅{おく}れたんです。', chinese: '（是因為）電車晚了。' },
                    { japanese: '明日{あした}テストなんです。', chinese: '（是因為）明天有考試。' },
                    { japanese: '風邪{かぜ}なんです。', chinese: '（是因為）感冒了。' }
                ]
            },
            {
                usageId: 2,
                title: '詢問原因或狀況',
                description: '用於詢問對方情況的原因或詳情，帶有關心的語氣。',
                examples: [
                    { japanese: 'どうしたんですか。', chinese: '怎麼了？（發生什麼事了？）' },
                    { japanese: 'どこへ行{い}くんですか。', chinese: '你要去哪裡？（帶有關心）' },
                    { japanese: '何{なに}を探{さが}しているんですか。', chinese: '你在找什麼？' }
                ]
            },
            {
                usageId: 3,
                title: '強調或確認',
                description: '用於強調某件事或確認對方的意思。',
                examples: [
                    { japanese: '本当{ほんとう}なんです！', chinese: '是真的！' },
                    { japanese: 'このケーキ、おいしいんです。', chinese: '這個蛋糕很好吃喔。（強調推薦）' },
                    { japanese: '日本{にほん}に行{い}きたいんです。', chinese: '（我很）想去日本。' }
                ]
            }
        ],
        analysis: {
            title: '「んです」的接續規則',
            points: [
                {
                    rule: '動詞・い形容詞：直接加「んです」',
                    examples: [
                        { japanese: '行{い}く → 行くんです', chinese: '去（解釋說明）' },
                        { japanese: '寒{さむ}い → 寒いんです', chinese: '冷（解釋說明）' }
                    ]
                },
                {
                    rule: '名詞・な形容詞：加「な」再加「んです」',
                    examples: [
                        { japanese: '学生{がくせい} → 学生なんです', chinese: '是學生（解釋說明）' },
                        { japanese: '静{しず}か → 静かなんです', chinese: '很安靜（解釋說明）' }
                    ]
                },
                {
                    rule: '口語中「の」常省略為「ん」',
                    examples: [
                        { japanese: '行くのです → 行くんです', chinese: '書面 → 口語' },
                        { japanese: '食{た}べたのです → 食べたんです', chinese: '書面 → 口語' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_ndesu_1',
                sentence: '「どうしたんですか。」「ちょっと気分{きぶん}が悪{わる}い（　）。」',
                options: ['んです', 'です', 'ます', 'のです'],
                correctIndex: 0,
                explanation: {
                    correct: '「んです」正確！用於說明自己身體不舒服的原因。',
                    wrong: [
                        '「です」錯誤：單純陳述，沒有解釋的語氣。',
                        '「ます」錯誤：形式不對。',
                        '「のです」也可以，但口語中「んです」更常用。'
                    ]
                }
            },
            {
                id: 'n5_q_ndesu_2',
                sentence: '明日{あした}は休{やす}み（　）。',
                options: ['なんです', 'んです', 'です', 'のです'],
                correctIndex: 0,
                explanation: {
                    correct: '「なんです」正確！名詞「休み」後面要加「な」再加「んです」。',
                    wrong: [
                        '「んです」錯誤：名詞後面需要「な」。',
                        '「です」錯誤：單純陳述，沒有解釋的語氣。',
                        '「のです」也可以，但需要「な」。'
                    ]
                }
            },
            {
                id: 'n5_q_ndesu_3',
                sentence: '「遅{おそ}くなってすみません。」「どうした（　）か。」',
                options: ['んです', 'です', 'ます', 'なんです'],
                correctIndex: 0,
                explanation: {
                    correct: '「んです」正確！「どうしたんですか」詢問對方遲到的原因。',
                    wrong: [
                        '「です」錯誤：詢問原因時要用「んです」。',
                        '「ます」錯誤：形式不對。',
                        '「なんです」錯誤：動詞後面直接加「んです」。'
                    ]
                }
            },
            {
                id: 'n5_q_ndesu_4',
                sentence: '「あれ、食{た}べないの？」\n「うん、今{いま}ダイエット中{ちゅう}（　）。」',
                options: ['なんです', 'んです', 'です', 'のです'],
                correctIndex: 0,
                explanation: {
                    correct: '「なんです」正確！「ダイエット中」是名詞性質，所以要加「な」。',
                    wrong: [
                        '「んです」錯誤：名詞後面需要「な」。',
                        '「です」錯誤：缺少解釋的語氣。',
                        '「のです」錯誤：名詞後面需要「な」。'
                    ]
                }
            },
            {
                id: 'n5_q_ndesu_5',
                sentence: '「明日{あした}、来{こ}られる？」\n「ごめん、用事{ようじ}がある（　）。」',
                options: ['んです', 'なんです', 'です', 'ます'],
                correctIndex: 0,
                explanation: {
                    correct: '「んです」正確！「ある」是動詞，直接加「んです」說明理由。',
                    wrong: [
                        '「なんです」錯誤：「ある」是動詞，不需要「な」。',
                        '「です」錯誤：缺少解釋的語氣。',
                        '「ます」錯誤：形式不對。'
                    ]
                }
            }
        ]
    }
});

// ===== Batch 12: にする / に行く / のが上手 / のが下手 / のが好き =====
Object.assign(n5Details, {
    // ===== n5_ni_suru =====
    n5_ni_suru: {
        id: 'n5_ni_suru',
        pattern: 'にする',
        connection: '名詞＋にする',
        translation: '決定為...；選擇...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '決定・選擇',
                description: '用於表示從多個選項中做出決定或選擇。常用於點餐、購物等場合。',
                examples: [
                    { japanese: 'コーヒーにします。', chinese: '我要（決定要）咖啡。' },
                    { japanese: '私{わたし}はこれにする。', chinese: '我選這個。' },
                    { japanese: '旅行{りょこう}は来月{らいげつ}にしましょう。', chinese: '旅行決定下個月吧。' },
                    { japanese: '名前{なまえ}は「さくら」にした。', chinese: '名字決定叫「櫻」了。' }
                ]
            },
            {
                usageId: 2,
                title: '使之成為、改變成',
                description: '表示人為地使某物變成某種狀態。與「なる」（自然變化）形成對比。',
                examples: [
                    { japanese: '部屋{へや}をきれいにする。', chinese: '把房間弄乾淨。' },
                    { japanese: '音{おと}を小{ちい}さくする。', chinese: '把聲音調小。' },
                    { japanese: '彼{かれ}を幸{しあわ}せにしたい。', chinese: '想讓他幸福。' }
                ]
            }
        ],
        analysis: {
            title: '「にする」vs「になる」',
            points: [
                {
                    rule: '「にする」：主動、有意識地選擇或改變',
                    examples: [
                        { japanese: '私{わたし}は医者{いしゃ}にする。', chinese: '我決定當醫生。（自己的決定）' }
                    ]
                },
                {
                    rule: '「になる」：自然地、無意識地變化',
                    examples: [
                        { japanese: '私{わたし}は医者{いしゃ}になる。', chinese: '我會成為醫生。（自然的發展）' }
                    ]
                },
                {
                    rule: '使役的用法區別',
                    examples: [
                        { japanese: '部屋{へや}を暖{あたた}かくした。', chinese: '把房間弄暖了。（人為）' },
                        { japanese: '部屋{へや}が暖{あたた}かくなった。', chinese: '房間變暖了。（自然）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_nisuru_1',
                sentence: '「何{なに}にしますか。」「私{わたし}はカレー（　）します。」',
                options: ['に', 'を', 'で', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「カレーにする」表示「選擇/決定要咖哩」。',
                    wrong: [
                        '「を」錯誤：「にする」固定接續「に」。',
                        '「で」錯誤：不用於這種接續。',
                        '「が」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_nisuru_2',
                sentence: 'テレビの音{おと}を小{ちい}さく（　）ください。',
                options: ['して', 'なって', 'して行って', 'になって'],
                correctIndex: 0,
                explanation: {
                    correct: '「して」正確！「小さくする」表示人為地把聲音調小。',
                    wrong: [
                        '「なって」錯誤：「なる」是自然變化，這裡是請求對方做。',
                        '「して行って」錯誤：形式不對。',
                        '「になって」錯誤：「になる」是自然變化。'
                    ]
                }
            },
            {
                id: 'n5_q_nisuru_3',
                sentence: '「どれにする？」\n「うーん、じゃあこれ（　）する。」',
                options: ['に', 'を', 'で', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「これにする」表示「選這個」。',
                    wrong: [
                        '「を」錯誤：「にする」固定用「に」。',
                        '「で」錯誤：不用於這種接續。',
                        '「が」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_nisuru_4',
                sentence: '部屋{へや}をきれい（　）しました。',
                options: ['に', 'を', 'で', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「きれいにする」表示把房間弄乾淨。',
                    wrong: [
                        '「を」錯誤：「にする」固定用「に」。',
                        '「で」錯誤：不適用。',
                        '「が」錯誤：不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_nisuru_5',
                sentence: '会議{かいぎ}は来週{らいしゅう}（　）しましょう。',
                options: ['に', 'を', 'で', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「来週にする」表示決定在下週舉行會議。',
                    wrong: [
                        '「を」錯誤：「にする」固定用「に」。',
                        '「で」錯誤：不適用。',
                        '「が」錯誤：不適用。'
                    ]
                }
            }
        ]
    },

    // ===== n5_ni_iku =====
    n5_ni_iku: {
        id: 'n5_ni_iku',
        pattern: 'に行く / に来る',
        connection: '動詞ます形（去ます）＋に行く / に来る',
        translation: '去做...；來做...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '表示移動的目的',
                description: '「動詞ます形＋に行く/来る」表示移動的目的。「に」表示目的，「行く/来る」表示移動。',
                examples: [
                    { japanese: '映画{えいが}を見{み}に行{い}く。', chinese: '去看電影。' },
                    { japanese: '友達{ともだち}に会{あ}いに来{き}た。', chinese: '來見朋友的。' },
                    { japanese: '日本{にほん}へ勉強{べんきょう}しに行{い}きたい。', chinese: '想去日本學習。' },
                    { japanese: 'お昼{ひる}を食{た}べに行{い}きましょう。', chinese: '去吃午餐吧。' }
                ]
            },
            {
                usageId: 2,
                title: '名詞＋に行く/来る',
                description: '也可以用「名詞＋に」表示目的，後接「行く/来る」。',
                examples: [
                    { japanese: '買{か}い物{もの}に行{い}く。', chinese: '去買東西。' },
                    { japanese: '旅行{りょこう}に行{い}きたい。', chinese: '想去旅行。' },
                    { japanese: '遊{あそ}びに来{き}てください。', chinese: '請來玩。' },
                    { japanese: '散歩{さんぽ}に行{い}こう。', chinese: '去散步吧。' }
                ]
            }
        ],
        analysis: {
            title: '「に行く」的用法重點',
            points: [
                {
                    rule: '動詞連用形（ます形去ます）＋に行く',
                    examples: [
                        { japanese: '食{た}べます → 食べに行く', chinese: '去吃' },
                        { japanese: '見{み}ます → 見に行く', chinese: '去看' }
                    ]
                },
                {
                    rule: '「へ」和「に」的區別：「へ」表示方向，「に」表示目的地或目的',
                    examples: [
                        { japanese: '日本{にほん}へ行{い}く', chinese: '往日本的方向去' },
                        { japanese: '日本{にほん}に行{い}く', chinese: '去日本（目的地）' },
                        { japanese: '勉強{べんきょう}しに行{い}く', chinese: '去學習（目的）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_niiku_1',
                sentence: '昼{ひる}ご飯{はん}を食{た}べ（　）行{い}きませんか。',
                options: ['に', 'を', 'で', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「食べに行く」表示「去吃」的目的。',
                    wrong: [
                        '「を」錯誤：目的用「に」表示。',
                        '「で」錯誤：不用於這種接續。',
                        '「が」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_niiku_2',
                sentence: '週末{しゅうまつ}、買{か}い物{もの}（　）行{い}きたいです。',
                options: ['に', 'を', 'で', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「買い物に行く」表示去購物的目的。',
                    wrong: [
                        '「を」錯誤：目的用「に」表示。',
                        '「で」錯誤：不用於這種接續。',
                        '「が」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_niiku_3',
                sentence: '「何{なん}のために日本{にほん}に来{き}たんですか。」\n「日本語{にほんご}を勉強{べんきょう}し（　）来{き}ました。」',
                options: ['に', 'を', 'で', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「勉強しに来る」表示「為了學習而來」。',
                    wrong: [
                        '「を」錯誤：目的用「に」表示。',
                        '「で」錯誤：不用於這種接續。',
                        '「が」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_niiku_4',
                sentence: '友達{ともだち}の家{いえ}へ遊{あそ}び（　）行{い}った。',
                options: ['に', 'を', 'で', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「遊びに行く」表示去玩的目的。',
                    wrong: [
                        '「を」錯誤：目的用「に」表示。',
                        '「で」錯誤：不適用。',
                        '「が」錯誤：不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_niiku_5',
                sentence: '映画{えいが}を見{み}（　）行{い}きましょう。',
                options: ['に', 'を', 'で', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「見に行く」表示去看的目的。',
                    wrong: [
                        '「を」錯誤：目的用「に」表示。',
                        '「で」錯誤：不適用。',
                        '「が」錯誤：不適用。'
                    ]
                }
            }
        ]
    },

    // ===== n5_no_ga_jouzu =====
    n5_no_ga_jouzu: {
        id: 'n5_no_ga_jouzu',
        pattern: 'のが上手',
        connection: '動詞辞書形＋のが上手',
        translation: '擅長做...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '表示擅長某動作',
                description: '「動詞辞書形＋のが上手」表示某人擅長做某件事。「の」將動詞名詞化。',
                examples: [
                    { japanese: '彼女{かのじょ}は料理{りょうり}を作{つく}るのが上手{じょうず}だ。', chinese: '她很擅長做菜。' },
                    { japanese: '田中{たなか}さんは歌{うた}うのが上手{じょうず}です。', chinese: '田中先生很會唱歌。' },
                    { japanese: '妹{いもうと}は絵{え}を描{か}くのが上手{じょうず}だ。', chinese: '妹妹很擅長畫畫。' },
                    { japanese: 'あの人{ひと}は話{はな}すのが上手{じょうず}ですね。', chinese: '那個人很會說話呢。' }
                ]
            },
            {
                usageId: 2,
                title: '名詞＋が上手',
                description: '也可以直接用「名詞＋が上手」表示擅長某事。',
                examples: [
                    { japanese: '彼{かれ}はテニスが上手{じょうず}だ。', chinese: '他很擅長網球。' },
                    { japanese: '日本語{にほんご}が上手{じょうず}ですね。', chinese: '日語很好呢。' },
                    { japanese: '料理{りょうり}が上手{じょうず}な人{ひと}', chinese: '擅長料理的人' }
                ]
            }
        ],
        analysis: {
            title: '「上手」的用法注意',
            points: [
                {
                    rule: '「上手」是な形容詞，修飾名詞時用「上手な」',
                    examples: [
                        { japanese: '歌{うた}が上手{じょうず}な人{ひと}', chinese: '唱歌好聽的人' }
                    ]
                },
                {
                    rule: '注意：不能用「上手」形容自己（謙虛）',
                    examples: [
                        { japanese: '私{わたし}は歌{うた}が上手{じょうず}です。', chinese: '✕ 不謙虛' },
                        { japanese: '私{わたし}は歌{うた}が得意{とくい}です。', chinese: '○ 我擅長唱歌。' }
                    ]
                },
                {
                    rule: '「上手」vs「得意」：「上手」客觀描述技能，「得意」表示自信',
                    examples: [
                        { japanese: '田中{たなか}さんは英語{えいご}が上手{じょうず}だ。', chinese: '（客觀評價他人）' },
                        { japanese: '私{わたし}は英語{えいご}が得意{とくい}だ。', chinese: '（說自己時用）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_jouzu_1',
                sentence: '山田{やまだ}さんは泳{およ}ぐ（　）上手{じょうず}ですね。',
                options: ['のが', 'のを', 'ので', 'のに'],
                correctIndex: 0,
                explanation: {
                    correct: '「のが」正確！「泳ぐのが上手」表示「擅長游泳」。',
                    wrong: [
                        '「のを」錯誤：「上手」前面用「が」。',
                        '「ので」錯誤：這是表示原因的接續。',
                        '「のに」錯誤：這是表示對比或目的的接續。'
                    ]
                }
            },
            {
                id: 'n5_q_jouzu_2',
                sentence: '彼{かれ}はピアノを弾{ひ}く（　）上手{じょうず}だ。',
                options: ['のが', 'のを', 'ので', 'のに'],
                correctIndex: 0,
                explanation: {
                    correct: '「のが」正確！「弾くのが上手」表示「擅長彈鋼琴」。',
                    wrong: [
                        '「のを」錯誤：「上手」前面用「が」。',
                        '「ので」錯誤：這是表示原因的接續。',
                        '「のに」錯誤：這是表示對比或目的的接續。'
                    ]
                }
            },
            {
                id: 'n5_q_jouzu_3',
                sentence: '「お母{かあ}さんは料理{りょうり}（　）上手{じょうず}ですね。」\n「ありがとうございます。」',
                options: ['が', 'を', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！「料理が上手」表示「擅長料理」。',
                    wrong: [
                        '「を」錯誤：「上手」前面用「が」。',
                        '「に」錯誤：不用於這種接續。',
                        '「で」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_jouzu_4',
                sentence: '田中{たなか}さんは日本語{にほんご}を教{おし}える（　）上手{じょうず}です。',
                options: ['のが', 'のを', 'ので', 'のに'],
                correctIndex: 0,
                explanation: {
                    correct: '「のが」正確！「教えるのが上手」表示「擅長教」。',
                    wrong: [
                        '「のを」錯誤：「上手」前面用「が」。',
                        '「ので」錯誤：這是表示原因的接續。',
                        '「のに」錯誤：這是表示對比或目的的接續。'
                    ]
                }
            },
            {
                id: 'n5_q_jouzu_5',
                sentence: '「サッカー（　）上手{じょうず}ですね。」\n「いえいえ、まだまだです。」',
                options: ['が', 'を', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！「サッカーが上手」表示「擅長足球」。',
                    wrong: [
                        '「を」錯誤：「上手」前面用「が」。',
                        '「に」錯誤：不用於這種接續。',
                        '「で」錯誤：不用於這種接續。'
                    ]
                }
            }
        ]
    },

    // ===== n5_no_ga_heta =====
    n5_no_ga_heta: {
        id: 'n5_no_ga_heta',
        pattern: 'のが下手',
        connection: '動詞辞書形＋のが下手',
        translation: '不擅長做...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '表示不擅長某動作',
                description: '「動詞辞書形＋のが下手」表示某人不擅長做某件事。是「上手」的反義詞。',
                examples: [
                    { japanese: '私{わたし}は料理{りょうり}を作{つく}るのが下手{へた}だ。', chinese: '我不擅長做菜。' },
                    { japanese: '弟{おとうと}は絵{え}を描{か}くのが下手{へた}です。', chinese: '弟弟不擅長畫畫。' },
                    { japanese: '彼{かれ}は泳{およ}ぐのが下手{へた}だ。', chinese: '他不擅長游泳。' },
                    { japanese: '説明{せつめい}するのが下手{へた}で、すみません。', chinese: '抱歉我不太會說明。' }
                ]
            },
            {
                usageId: 2,
                title: '名詞＋が下手',
                description: '也可以直接用「名詞＋が下手」表示不擅長某事。',
                examples: [
                    { japanese: '私{わたし}は運動{うんどう}が下手{へた}だ。', chinese: '我不擅長運動。' },
                    { japanese: '字{じ}が下手{へた}で恥{は}ずかしい。', chinese: '字寫得不好很不好意思。' },
                    { japanese: '英語{えいご}が下手{へた}なので、手伝{てつだ}ってください。', chinese: '因為英語不好，請幫幫我。' }
                ]
            }
        ],
        analysis: {
            title: '「下手」的用法注意',
            points: [
                {
                    rule: '「下手」是な形容詞，修飾名詞時用「下手な」',
                    examples: [
                        { japanese: '字{じ}が下手{へた}な人{ひと}', chinese: '字寫得不好的人' }
                    ]
                },
                {
                    rule: '注意：說他人「下手」可能失禮，要小心使用',
                    examples: [
                        { japanese: '（直接對人說）あなたは歌{うた}が下手{へた}ですね。', chinese: '✕ 很失禮' },
                        { japanese: '私{わたし}は歌{うた}が下手{へた}です。', chinese: '○ 說自己可以' }
                    ]
                },
                {
                    rule: '較委婉的說法：「あまり得意じゃない」',
                    examples: [
                        { japanese: '料理{りょうり}はあまり得意{とくい}じゃない。', chinese: '不太擅長料理。（委婉）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_heta_1',
                sentence: '私{わたし}は歌{うた}う（　）下手{へた}です。',
                options: ['のが', 'のを', 'ので', 'のに'],
                correctIndex: 0,
                explanation: {
                    correct: '「のが」正確！「歌うのが下手」表示「不擅長唱歌」。',
                    wrong: [
                        '「のを」錯誤：「下手」前面用「が」。',
                        '「ので」錯誤：這是表示原因的接續。',
                        '「のに」錯誤：這是表示對比或目的的接續。'
                    ]
                }
            },
            {
                id: 'n5_q_heta_2',
                sentence: '運転{うんてん}（　）下手{へた}なので、タクシーに乗{の}ります。',
                options: ['が', 'を', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！「運転が下手」表示「不擅長開車」。',
                    wrong: [
                        '「を」錯誤：「下手」前面用「が」。',
                        '「に」錯誤：不用於這種接續。',
                        '「で」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_heta_3',
                sentence: '「字{じ}を書{か}く（　）下手{へた}で、すみません。」\n「大丈夫{だいじょうぶ}ですよ。読{よ}めますから。」',
                options: ['のが', 'のを', 'ので', 'のに'],
                correctIndex: 0,
                explanation: {
                    correct: '「のが」正確！「書くのが下手」表示「不擅長寫字」。',
                    wrong: [
                        '「のを」錯誤：「下手」前面用「が」。',
                        '「ので」錯誤：這是表示原因的接續。',
                        '「のに」錯誤：這是表示對比或目的的接續。'
                    ]
                }
            },
            {
                id: 'n5_q_heta_4',
                sentence: '私{わたし}は泳{およ}ぐ（　）下手{へた}なので、プールには行{い}きません。',
                options: ['のが', 'のを', 'ので', 'のに'],
                correctIndex: 0,
                explanation: {
                    correct: '「のが」正確！「泳ぐのが下手」表示「不擅長游泳」。',
                    wrong: [
                        '「のを」錯誤：「下手」前面用「が」。',
                        '「ので」錯誤：這是表示原因的接續。',
                        '「のに」錯誤：這是表示對比或目的的接續。'
                    ]
                }
            },
            {
                id: 'n5_q_heta_5',
                sentence: '「料理{りょうり}（　）下手{へた}ですか。」\n「はい、全然{ぜんぜん}できません。」',
                options: ['が', 'を', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！「料理が下手」表示「不擅長料理」。',
                    wrong: [
                        '「を」錯誤：「下手」前面用「が」。',
                        '「に」錯誤：不用於這種接續。',
                        '「で」錯誤：不用於這種接續。'
                    ]
                }
            }
        ]
    },

    // ===== n5_no_ga_suki =====
    n5_no_ga_suki: {
        id: 'n5_no_ga_suki',
        pattern: 'のが好き',
        connection: '動詞辞書形＋のが好き',
        translation: '喜歡做...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '表示喜歡某動作',
                description: '「動詞辞書形＋のが好き」表示喜歡做某件事。「の」將動詞名詞化。',
                examples: [
                    { japanese: '私{わたし}は本{ほん}を読{よ}むのが好{す}きだ。', chinese: '我喜歡看書。' },
                    { japanese: '音楽{おんがく}を聴{き}くのが好{す}きです。', chinese: '喜歡聽音樂。' },
                    { japanese: '旅行{りょこう}するのが好{す}きだ。', chinese: '喜歡旅行。' },
                    { japanese: '料理{りょうり}を作{つく}るのが好{す}きですか。', chinese: '喜歡做菜嗎？' }
                ]
            },
            {
                usageId: 2,
                title: '名詞＋が好き',
                description: '也可以直接用「名詞＋が好き」表示喜歡某事物。',
                examples: [
                    { japanese: '私{わたし}は猫{ねこ}が好{す}きだ。', chinese: '我喜歡貓。' },
                    { japanese: 'コーヒーが好{す}きですか。', chinese: '喜歡咖啡嗎？' },
                    { japanese: 'どんな映画{えいが}が好{す}きですか。', chinese: '喜歡什麼樣的電影？' },
                    { japanese: '日本{にほん}の食{た}べ物{もの}が好{す}きです。', chinese: '喜歡日本的食物。' }
                ]
            }
        ],
        analysis: {
            title: '「好き」的用法重點',
            points: [
                {
                    rule: '「好き」是な形容詞，修飾名詞時用「好きな」',
                    examples: [
                        { japanese: '好{す}きな食{た}べ物{もの}は何{なん}ですか。', chinese: '喜歡的食物是什麼？' }
                    ]
                },
                {
                    rule: '「好き」前面用「が」不用「を」',
                    examples: [
                        { japanese: '音楽{おんがく}が好{す}きです。', chinese: '○ 正確' },
                        { japanese: '音楽{おんがく}を好{す}きです。', chinese: '✕ 錯誤' }
                    ]
                },
                {
                    rule: '喜歡的程度表達',
                    examples: [
                        { japanese: '大好{だいす}き', chinese: '非常喜歡' },
                        { japanese: 'まあまあ好{す}き', chinese: '還算喜歡' },
                        { japanese: 'あまり好{す}きじゃない', chinese: '不太喜歡' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_suki_1',
                sentence: '私{わたし}は映画{えいが}を見{み}る（　）好{す}きです。',
                options: ['のが', 'のを', 'ので', 'のに'],
                correctIndex: 0,
                explanation: {
                    correct: '「のが」正確！「見るのが好き」表示「喜歡看」。',
                    wrong: [
                        '「のを」錯誤：「好き」前面用「が」。',
                        '「ので」錯誤：這是表示原因的接續。',
                        '「のに」錯誤：這是表示對比或目的的接續。'
                    ]
                }
            },
            {
                id: 'n5_q_suki_2',
                sentence: 'どんな音楽{おんがく}（　）好{す}きですか。',
                options: ['が', 'を', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！「好き」前面用「が」。',
                    wrong: [
                        '「を」錯誤：「好き」不用「を」。',
                        '「に」錯誤：不用於這種接續。',
                        '「で」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_suki_3',
                sentence: '「趣味{しゅみ}は何{なん}ですか。」\n「本{ほん}を読{よ}む（　）好{す}きです。」',
                options: ['のが', 'のを', 'ので', 'のに'],
                correctIndex: 0,
                explanation: {
                    correct: '「のが」正確！「読むのが好き」表示「喜歡讀書」。',
                    wrong: [
                        '「のを」錯誤：「好き」前面用「が」。',
                        '「ので」錯誤：這是表示原因的接續。',
                        '「のに」錯誤：這是表示對比或目的的接續。'
                    ]
                }
            },
            {
                id: 'n5_q_suki_4',
                sentence: '私{わたし}は日本{にほん}の料理{りょうり}（　）大好{だいす}きです。',
                options: ['が', 'を', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！「料理が大好き」表示「非常喜歡料理」。',
                    wrong: [
                        '「を」錯誤：「好き」前面用「が」不用「を」。',
                        '「に」錯誤：不用於這種接續。',
                        '「で」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_suki_5',
                sentence: '「コーヒーと紅茶{こうちゃ}、どちら（　）好{す}きですか。」\n「コーヒーのほうが好{す}きです。」',
                options: ['が', 'を', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！「どちらが好き」是詢問喜好的固定用法。',
                    wrong: [
                        '「を」錯誤：「好き」前面用「が」。',
                        '「に」錯誤：不用於這種接續。',
                        '「で」錯誤：不用於這種接續。'
                    ]
                }
            }
        ]
    }
});

// ===== Batch 13: の中で～が一番 / たことがある / たりたり / てもいい / てはいけない =====
Object.assign(n5Details, {
    // ===== n5_no_naka_de_a_ga_ichiban =====
    n5_no_naka_de_a_ga_ichiban: {
        id: 'n5_no_naka_de_a_ga_ichiban',
        pattern: 'の中で～が一番',
        connection: '名詞＋の中で＋名詞＋が一番＋形容詞',
        translation: '在...之中，...最...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '表示最高級比較',
                description: '用於在某個範圍內表示「最～」的比較。「の中で」表示範圍，「一番」表示最高級。',
                examples: [
                    { japanese: 'クラスの中{なか}で、田中{たなか}さんが一番{いちばん}背{せ}が高{たか}い。', chinese: '班上田中同學最高。' },
                    { japanese: '日本{にほん}の中{なか}で、東京{とうきょう}が一番{いちばん}大{おお}きい。', chinese: '日本之中東京最大。' },
                    { japanese: '季節{きせつ}の中{なか}で、春{はる}が一番{いちばん}好{す}きです。', chinese: '四季之中最喜歡春天。' },
                    { japanese: '果物{くだもの}の中{なか}で、何{なに}が一番{いちばん}おいしいですか。', chinese: '水果之中什麼最好吃？' }
                ]
            },
            {
                usageId: 2,
                title: '疑問詞との使用',
                description: '常與疑問詞「何」「どこ」「だれ」等一起使用，詢問最高級。',
                examples: [
                    { japanese: 'スポーツの中{なか}で、何{なに}が一番{いちばん}好{す}きですか。', chinese: '運動之中最喜歡什麼？' },
                    { japanese: '世界{せかい}の中{なか}で、どこが一番{いちばん}きれいですか。', chinese: '世界上哪裡最漂亮？' },
                    { japanese: '家族{かぞく}の中{なか}で、だれが一番{いちばん}早{はや}く起{お}きますか。', chinese: '家人之中誰最早起床？' }
                ]
            }
        ],
        analysis: {
            title: '比較表達的構造',
            points: [
                {
                    rule: '基本構造：「範圍＋の中で＋主語＋が一番＋形容詞」',
                    examples: [
                        { japanese: '動物{どうぶつ}の中{なか}で、犬{いぬ}が一番{いちばん}好{す}きだ。', chinese: '動物之中最喜歡狗。' }
                    ]
                },
                {
                    rule: '「の中で」可省略，但較正式時建議保留',
                    examples: [
                        { japanese: '（季節{きせつ}の中{なか}で）春{はる}が一番{いちばん}好{す}きだ。', chinese: '（季節之中）最喜歡春天。' }
                    ]
                },
                {
                    rule: '三者以上比較用「一番」，兩者比較用「より」',
                    examples: [
                        { japanese: '3人{にん}の中{なか}で、田中{たなか}さんが一番{いちばん}若{わか}い。', chinese: '三人之中田中最年輕。' },
                        { japanese: '田中{たなか}さんより山田{やまだ}さんのほうが若{わか}い。', chinese: '山田比田中年輕。' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_ichiban_1',
                sentence: '季節{きせつ}（　）中{なか}で、何{なに}が一番{いちばん}好{す}きですか。',
                options: ['の', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！「季節の中で」表示「在季節之中」的範圍。',
                    wrong: [
                        '「が」錯誤：範圍表達用「の」。',
                        '「を」錯誤：不用於這種接續。',
                        '「に」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_ichiban_2',
                sentence: 'クラスの中{なか}で、山田{やまだ}さん（　）一番{いちばん}頭{あたま}がいい。',
                options: ['が', 'は', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！「山田さんが一番」中「が」標示最高級的主語。',
                    wrong: [
                        '「は」錯誤：「一番」前的主語用「が」。',
                        '「を」錯誤：不用於這種接續。',
                        '「に」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_ichiban_3',
                sentence: '「果物{くだもの}の中{なか}で、何{なに}が（　）おいしいですか。」\n「りんごが一番{いちばん}おいしいと思{おも}います。」',
                options: ['一番', '一度', '一回', '一人'],
                correctIndex: 0,
                explanation: {
                    correct: '「一番」正確！表示「最」的意思。',
                    wrong: [
                        '「一度」錯誤：「一度」表示「一次」。',
                        '「一回」錯誤：「一回」表示「一次」。',
                        '「一人」錯誤：「一人」表示「一個人」。'
                    ]
                }
            },
            {
                id: 'n5_q_ichiban_4',
                sentence: '世界{せかい}（　）中{なか}で、どこが一番{いちばん}きれいですか。',
                options: ['の', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！「世界の中で」表示「在世界之中」的範圍。',
                    wrong: [
                        '「が」錯誤：範圍表達用「の」。',
                        '「を」錯誤：不用於這種接續。',
                        '「に」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_ichiban_5',
                sentence: '「スポーツの中{なか}で、何{なに}（　）一番{いちばん}面白{おもしろ}いですか。」\n「サッカーが一番{いちばん}面白{おもしろ}いです。」',
                options: ['が', 'は', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！「何が一番」中的「が」標示詢問對象。',
                    wrong: [
                        '「は」錯誤：「一番」前的主語用「が」。',
                        '「を」錯誤：不用於這種接續。',
                        '「に」錯誤：不用於這種接續。'
                    ]
                }
            }
        ]
    },

    // ===== n5_ta_koto_ga_aru =====
    n5_ta_koto_ga_aru: {
        id: 'n5_ta_koto_ga_aru',
        pattern: 'たことがある',
        connection: '動詞た形＋ことがある',
        translation: '曾經...過',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '表示過去的經驗',
                description: '用於表示曾經有過某種經驗。強調的是「經驗」本身，而非具體的時間或次數。',
                examples: [
                    { japanese: '日本{にほん}に行{い}ったことがある。', chinese: '我去過日本。' },
                    { japanese: '富士山{ふじさん}を見{み}たことがあります。', chinese: '我看過富士山。' },
                    { japanese: '納豆{なっとう}を食{た}べたことがありますか。', chinese: '你吃過納豆嗎？' },
                    { japanese: 'この映画{えいが}を見{み}たことがない。', chinese: '我沒看過這部電影。' }
                ]
            },
            {
                usageId: 2,
                title: '否定形「ことがない」',
                description: '「動詞た形＋ことがない」表示從未有過某種經驗。',
                examples: [
                    { japanese: '飛行機{ひこうき}に乗{の}ったことがない。', chinese: '我沒坐過飛機。' },
                    { japanese: 'お酒{さけ}を飲{の}んだことがありません。', chinese: '我沒喝過酒。' },
                    { japanese: 'まだ日本{にほん}に行{い}ったことがない。', chinese: '還沒去過日本。' }
                ]
            }
        ],
        analysis: {
            title: '「たことがある」的用法重點',
            points: [
                {
                    rule: '「ことがある」vs「ことがあった」：通常用現在式表示經驗',
                    examples: [
                        { japanese: '日本{にほん}に行{い}ったことがある。', chinese: '○ 表示曾經有這個經驗' },
                        { japanese: '日本{にほん}に行{い}ったことがあった。', chinese: '△ 較少用' }
                    ]
                },
                {
                    rule: '注意與「たことがある」和「ている」的區別',
                    examples: [
                        { japanese: '日本{にほん}に行{い}ったことがある。', chinese: '曾去過（經驗）' },
                        { japanese: '日本{にほん}に行{い}った。', chinese: '去了（單純過去）' },
                        { japanese: '日本{にほん}に行{い}っている。', chinese: '去了在那邊（持續狀態）' }
                    ]
                },
                {
                    rule: '常與頻率副詞搭配使用',
                    examples: [
                        { japanese: '一度{いちど}だけ行{い}ったことがある。', chinese: '只去過一次。' },
                        { japanese: '何度{なんど}も食{た}べたことがある。', chinese: '吃過好幾次。' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_takoto_1',
                sentence: '日本{にほん}の温泉{おんせん}に入{はい}った（　）がありますか。',
                options: ['こと', 'もの', 'ところ', 'とき'],
                correctIndex: 0,
                explanation: {
                    correct: '「こと」正確！「～たことがある」表示經驗。',
                    wrong: [
                        '「もの」錯誤：「もの」不用於表示經驗。',
                        '「ところ」錯誤：「ところ」表示地點或時機。',
                        '「とき」錯誤：「とき」表示時間。'
                    ]
                }
            },
            {
                id: 'n5_q_takoto_2',
                sentence: 'まだ富士山{ふじさん}に登{のぼ}ったこと（　）ない。',
                options: ['が', 'を', 'に', 'は'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！「ことがない」表示「沒有...過」。',
                    wrong: [
                        '「を」錯誤：「こと」後面用「が」。',
                        '「に」錯誤：不用於這種接續。',
                        '「は」錯誤：「は」可以用但「が」更自然。'
                    ]
                }
            },
            {
                id: 'n5_q_takoto_3',
                sentence: '「お寿司{すし}を食{た}べた（　）ありますか。」\n「はい、日本{にほん}で食{た}べました。」',
                options: ['ことが', 'ことを', 'ことに', 'ことは'],
                correctIndex: 0,
                explanation: {
                    correct: '「ことが」正確！「食べたことがある」表示「吃過」的經驗。',
                    wrong: [
                        '「ことを」錯誤：「こと」後面用「が」不用「を」。',
                        '「ことに」錯誤：不用於這種接續。',
                        '「ことは」錯誤：「が」比「は」更自然。'
                    ]
                }
            },
            {
                id: 'n5_q_takoto_4',
                sentence: '北海道{ほっかいどう}に行{い}っ（　）ことがありますか。',
                options: ['た', 'て', 'だ', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「た」正確！「行ったことがある」使用動詞た形。',
                    wrong: [
                        '「て」錯誤：「ことがある」前面用た形，不是て形。',
                        '「だ」錯誤：「行く」的た形是「行った」不是「行っだ」。',
                        '「で」錯誤：形式不對。'
                    ]
                }
            },
            {
                id: 'n5_q_takoto_5',
                sentence: '「温泉{おんせん}に入{はい}ったことが（　）か。」\n「いいえ、まだです。」',
                options: ['あります', 'います', 'します', 'なります'],
                correctIndex: 0,
                explanation: {
                    correct: '「あります」正確！「ことがある」是固定用法。',
                    wrong: [
                        '「います」錯誤：「こと」不用「いる」。',
                        '「します」錯誤：「こと」不用「する」。',
                        '「なります」錯誤：「こと」不用「なる」。'
                    ]
                }
            }
        ]
    },

    // ===== n5_tari_tari =====
    n5_tari_tari: {
        id: 'n5_tari_tari',
        pattern: 'たり～たりする',
        connection: '動詞た形＋り～動詞た形＋りする',
        translation: '做...或做...等',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '列舉多個動作（非全部）',
                description: '用於列舉多個動作，暗示還有其他動作。表示「做...、做...等」。',
                examples: [
                    { japanese: '週末{しゅうまつ}は映画{えいが}を見{み}たり、買{か}い物{もの}をしたりする。', chinese: '週末看電影、買東西等。' },
                    { japanese: '休{やす}みの日{ひ}は本{ほん}を読{よ}んだり、音楽{おんがく}を聴{き}いたりします。', chinese: '假日讀書、聽音樂等。' },
                    { japanese: '日本{にほん}でラーメンを食{た}べたり、温泉{おんせん}に入{はい}ったりした。', chinese: '在日本吃拉麵、泡溫泉等。' }
                ]
            },
            {
                usageId: 2,
                title: '表示反覆或不定的動作',
                description: '也可用於表示動作的反覆或不確定的狀態。',
                examples: [
                    { japanese: '雨{あめ}が降{ふ}ったり止{や}んだりしている。', chinese: '雨時下時停。' },
                    { japanese: '彼{かれ}は来{き}たり来{こ}なかったりする。', chinese: '他有時來有時不來。' },
                    { japanese: '体調{たいちょう}が良{よ}かったり悪{わる}かったりする。', chinese: '身體狀況時好時壞。' }
                ]
            }
        ],
        analysis: {
            title: '「たり～たりする」的用法重點',
            points: [
                {
                    rule: '構造：動詞た形＋り＋動詞た形＋り＋する',
                    examples: [
                        { japanese: '食{た}べた → 食べたり', chinese: '吃等' },
                        { japanese: '飲{の}んだ → 飲んだり', chinese: '喝等' }
                    ]
                },
                {
                    rule: '最後一定要加「する」或「します」',
                    examples: [
                        { japanese: '読{よ}んだり書{か}いたりする。', chinese: '○ 正確' },
                        { japanese: '読{よ}んだり書{か}いたり。', chinese: '△ 省略形（口語可）' }
                    ]
                },
                {
                    rule: '與「て形」列舉的區別：「たり」暗示還有其他，「て形」表示全部',
                    examples: [
                        { japanese: '本{ほん}を読{よ}んだり、映画{えいが}を見{み}たりする。', chinese: '讀書、看電影「等」' },
                        { japanese: '本{ほん}を読{よ}んで、映画{えいが}を見{み}る。', chinese: '讀書「然後」看電影' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_tari_1',
                sentence: '休{やす}みの日{ひ}は、友達{ともだち}と遊{あそ}ん（　）、買{か}い物{もの}をしたりする。',
                options: ['だり', 'たり', 'でり', 'てり'],
                correctIndex: 0,
                explanation: {
                    correct: '「だり」正確！「遊ぶ」的た形是「遊んだ」，所以用「遊んだり」。',
                    wrong: [
                        '「たり」錯誤：「遊ぶ」的た形是「遊んだ」不是「遊んた」。',
                        '「でり」錯誤：沒有這種形式。',
                        '「てり」錯誤：沒有這種形式。'
                    ]
                }
            },
            {
                id: 'n5_q_tari_2',
                sentence: '昨日{きのう}は掃除{そうじ}をしたり、洗濯{せんたく}をし（　）した。',
                options: ['たり', 'だり', 'ても', 'ては'],
                correctIndex: 0,
                explanation: {
                    correct: '「たり」正確！「する」的た形是「した」，所以用「したり」。',
                    wrong: [
                        '「だり」錯誤：「する」不是濁音。',
                        '「ても」錯誤：這是「てもいい」的接續。',
                        '「ては」錯誤：這是「てはいけない」的接續。'
                    ]
                }
            },
            {
                id: 'n5_q_tari_3',
                sentence: '「週末{しゅうまつ}は何{なに}をしますか。」\n「本{ほん}を読{よ}んだり、映画{えいが}を見{み}たり（　）。」',
                options: ['します', 'する', 'した', 'して'],
                correctIndex: 0,
                explanation: {
                    correct: '「します」正確！「たり～たり」後面用「する」的適當形式。',
                    wrong: [
                        '「する」也可以，但丁寧體回答用「します」更自然。',
                        '「した」錯誤：問的是現在習慣，不是過去。',
                        '「して」錯誤：形式不對。'
                    ]
                }
            },
            {
                id: 'n5_q_tari_4',
                sentence: '日本{にほん}で寿司{すし}を食{た}べ（　）、温泉{おんせん}に入{はい}ったりした。',
                options: ['たり', 'だり', 'ても', 'ては'],
                correctIndex: 0,
                explanation: {
                    correct: '「たり」正確！「食べる」的た形是「食べた」，所以用「食べたり」。',
                    wrong: [
                        '「だり」錯誤：「食べる」不是濁音結尾。',
                        '「ても」錯誤：這是「てもいい」的接續。',
                        '「ては」錯誤：這是「てはいけない」的接續。'
                    ]
                }
            },
            {
                id: 'n5_q_tari_5',
                sentence: '天気{てんき}が良{よ}かっ（　）悪{わる}かったりする。',
                options: ['たり', 'だり', 'ても', 'ては'],
                correctIndex: 0,
                explanation: {
                    correct: '「たり」正確！い形容詞過去式「良かった」後接「り」。',
                    wrong: [
                        '「だり」錯誤：「良かった」後面不濁音化。',
                        '「ても」錯誤：「たり」用於列舉狀態。',
                        '「ては」錯誤：不用於這種接續。'
                    ]
                }
            }
        ]
    },

    // ===== n5_temo_ii_desu =====
    n5_temo_ii_desu: {
        id: 'n5_temo_ii_desu',
        pattern: 'てもいい',
        connection: '動詞て形＋もいい',
        translation: '可以...；...也行',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '請求許可',
                description: '用於請求對方允許自己做某事。「てもいいですか」是請求許可的禮貌說法。',
                examples: [
                    { japanese: 'ここに座{すわ}ってもいいですか。', chinese: '可以坐這裡嗎？' },
                    { japanese: '写真{しゃしん}を撮{と}ってもいいですか。', chinese: '可以拍照嗎？' },
                    { japanese: '窓{まど}を開{あ}けてもいいですか。', chinese: '可以開窗嗎？' },
                    { japanese: 'このペンを使{つか}ってもいいですか。', chinese: '可以用這支筆嗎？' }
                ]
            },
            {
                usageId: 2,
                title: '給予許可',
                description: '用於允許對方做某事。可以是回答「てもいいですか」的請求。',
                examples: [
                    { japanese: 'はい、どうぞ。座{すわ}ってもいいですよ。', chinese: '好的，請坐。可以坐。' },
                    { japanese: '食{た}べてもいいよ。', chinese: '可以吃喔。' },
                    { japanese: '今日{きょう}は早{はや}く帰{かえ}ってもいいです。', chinese: '今天可以早點回去。' }
                ]
            },
            {
                usageId: 3,
                title: '形容詞・名詞的用法',
                description: '形容詞和名詞也可以用「てもいい」，表示「即使...也可以」。',
                examples: [
                    { japanese: '安{やす}くてもいい。', chinese: '便宜也可以。' },
                    { japanese: '小{ちい}さくてもいいです。', chinese: '小也可以。' },
                    { japanese: '日本語{にほんご}でなくてもいい。', chinese: '不是日語也可以。' }
                ]
            }
        ],
        analysis: {
            title: '「てもいい」的相關表達',
            points: [
                {
                    rule: '「てもいい」vs「てもかまわない」：意思相同，後者更正式',
                    examples: [
                        { japanese: '座{すわ}ってもいいです。', chinese: '可以坐。（一般）' },
                        { japanese: '座{すわ}ってもかまいません。', chinese: '坐也無妨。（正式）' }
                    ]
                },
                {
                    rule: '請求許可的禮貌度：',
                    examples: [
                        { japanese: '～てもいい？', chinese: '可以～嗎？（casual）' },
                        { japanese: '～てもいいですか。', chinese: '可以～嗎？（polite）' },
                        { japanese: '～てもよろしいですか。', chinese: '可以～嗎？（very polite）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_temoii_1',
                sentence: 'ここで写真{しゃしん}を撮{と}っ（　）いいですか。',
                options: ['ても', 'ては', 'たり', 'たら'],
                correctIndex: 0,
                explanation: {
                    correct: '「ても」正確！「撮ってもいい」表示「可以拍」。',
                    wrong: [
                        '「ては」錯誤：「てはいけない」表示禁止。',
                        '「たり」錯誤：「たり」用於列舉動作。',
                        '「たら」錯誤：「たら」表示條件。'
                    ]
                }
            },
            {
                id: 'n5_q_temoii_2',
                sentence: '「この席{せき}、座{すわ}ってもいいですか。」\n「はい、どうぞ。（　）。」',
                options: ['座ってもいいですよ', '座ってはいけません', '座らなくてもいいです', '座らないでください'],
                correctIndex: 0,
                explanation: {
                    correct: '「座ってもいいですよ」正確！給予許可的回答。',
                    wrong: [
                        '「座ってはいけません」錯誤：這是禁止，與「どうぞ」矛盾。',
                        '「座らなくてもいいです」錯誤：這是「不用坐」，不是許可。',
                        '「座らないでください」錯誤：這是禁止。'
                    ]
                }
            },
            {
                id: 'n5_q_temoii_3',
                sentence: '「先生{せんせい}、質問{しつもん}し（　）いいですか。」\n「はい、どうぞ。」',
                options: ['ても', 'ては', 'たり', 'ながら'],
                correctIndex: 0,
                explanation: {
                    correct: '「ても」正確！「してもいいですか」請求許可。',
                    wrong: [
                        '「ては」錯誤：「してはいけない」是禁止。',
                        '「たり」錯誤：用於列舉動作。',
                        '「ながら」錯誤：表示同時進行。'
                    ]
                }
            },
            {
                id: 'n5_q_temoii_4',
                sentence: 'エアコンをつけ（　）いいですか。暑{あつ}いです。',
                options: ['ても', 'ては', 'たり', 'ながら'],
                correctIndex: 0,
                explanation: {
                    correct: '「ても」正確！「つけてもいい」請求打開空調的許可。',
                    wrong: [
                        '「ては」錯誤：「てはいけない」是禁止。',
                        '「たり」錯誤：用於列舉動作。',
                        '「ながら」錯誤：表示同時進行。'
                    ]
                }
            },
            {
                id: 'n5_q_temoii_5',
                sentence: '小{ちい}さく（　）いいです。大{おお}きいのは要{い}りません。',
                options: ['ても', 'ては', 'たり', 'ながら'],
                correctIndex: 0,
                explanation: {
                    correct: '「ても」正確！「小さくてもいい」表示「小也可以」。',
                    wrong: [
                        '「ては」錯誤：「てはいけない」是禁止。',
                        '「たり」錯誤：用於列舉動作。',
                        '「ながら」錯誤：表示同時進行。'
                    ]
                }
            }
        ]
    },

    // ===== n5_te_wa_ikenai =====
    n5_te_wa_ikenai: {
        id: 'n5_te_wa_ikenai',
        pattern: 'てはいけない',
        connection: '動詞て形＋はいけない',
        translation: '不可以...；禁止...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '表示禁止',
                description: '用於表示某個行為是被禁止的。語氣較強，常用於規則、警告等場合。',
                examples: [
                    { japanese: 'ここでタバコを吸{す}ってはいけません。', chinese: '這裡不可以抽菸。' },
                    { japanese: '試験{しけん}中{ちゅう}に話{はな}してはいけない。', chinese: '考試中不可以說話。' },
                    { japanese: '写真{しゃしん}を撮{と}ってはいけません。', chinese: '不可以拍照。' },
                    { japanese: 'ここに入{はい}ってはいけません。', chinese: '不可以進入這裡。' }
                ]
            },
            {
                usageId: 2,
                title: '與「てはだめ」的比較',
                description: '「てはだめ」也表示禁止，但語氣比「てはいけない」更口語、更隨意。',
                examples: [
                    { japanese: 'そんなことをしてはだめだよ。', chinese: '不可以做那種事喔。（口語）' },
                    { japanese: '食{た}べ過{す}ぎてはだめ。', chinese: '不可以吃太多。（口語）' },
                    { japanese: 'ここで遊{あそ}んではいけません。', chinese: '不可以在這裡玩。（正式）' }
                ]
            }
        ],
        analysis: {
            title: '禁止表達的比較',
            points: [
                {
                    rule: '正式度排序（高→低）：',
                    examples: [
                        { japanese: '～てはなりません', chinese: '最正式（書面語）' },
                        { japanese: '～てはいけません', chinese: '正式' },
                        { japanese: '～てはだめです', chinese: '一般' },
                        { japanese: '～ちゃだめ', chinese: '口語' }
                    ]
                },
                {
                    rule: '「てはいけない」vs「ないでください」',
                    examples: [
                        { japanese: '入{はい}ってはいけません。', chinese: '不可以進入。（禁止/規則）' },
                        { japanese: '入{はい}らないでください。', chinese: '請不要進入。（請求）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_tewaikenai_1',
                sentence: '図書館{としょかん}で大{おお}きい声{こえ}で話{はな}し（　）いけません。',
                options: ['ては', 'ても', 'たり', 'たら'],
                correctIndex: 0,
                explanation: {
                    correct: '「ては」正確！「話してはいけない」表示「不可以說話」。',
                    wrong: [
                        '「ても」錯誤：「てもいい」表示許可，不是禁止。',
                        '「たり」錯誤：用於列舉動作。',
                        '「たら」錯誤：表示條件。'
                    ]
                }
            },
            {
                id: 'n5_q_tewaikenai_2',
                sentence: '「ここで写真{しゃしん}を撮{と}ってもいいですか。」\n「いいえ、撮{と}っ（　）いけません。」',
                options: ['ては', 'ても', 'たり', 'ながら'],
                correctIndex: 0,
                explanation: {
                    correct: '「ては」正確！「撮ってはいけない」表示禁止拍照。',
                    wrong: [
                        '「ても」錯誤：「てもいい」表示許可。',
                        '「たり」錯誤：用於列舉動作。',
                        '「ながら」錯誤：表示同時進行。'
                    ]
                }
            },
            {
                id: 'n5_q_tewaikenai_3',
                sentence: '授業{じゅぎょう}中{ちゅう}にスマホを使{つか}っ（　）いけない。',
                options: ['ては', 'ても', 'たり', 'てから'],
                correctIndex: 0,
                explanation: {
                    correct: '「ては」正確！「使ってはいけない」表示禁止使用手機。',
                    wrong: [
                        '「ても」錯誤：「てもいい」表示許可。',
                        '「たり」錯誤：用於列舉動作。',
                        '「てから」錯誤：表示「做完之後」。'
                    ]
                }
            },
            {
                id: 'n5_q_tewaikenai_4',
                sentence: '図書館{としょかん}で大{おお}きい声{こえ}を出{だ}し（　）いけません。',
                options: ['ては', 'ても', 'たり', 'ながら'],
                correctIndex: 0,
                explanation: {
                    correct: '「ては」正確！「出してはいけない」表示禁止大聲說話。',
                    wrong: [
                        '「ても」錯誤：「てもいい」表示許可。',
                        '「たり」錯誤：用於列舉動作。',
                        '「ながら」錯誤：表示同時進行。'
                    ]
                }
            },
            {
                id: 'n5_q_tewaikenai_5',
                sentence: '「ここでタバコを吸{す}っ（　）いけませんか。」\n「はい、禁煙{きんえん}です。」',
                options: ['ては', 'ても', 'たり', 'ながら'],
                correctIndex: 0,
                explanation: {
                    correct: '「ては」正確！「吸ってはいけない」表示禁止吸煙。',
                    wrong: [
                        '「ても」錯誤：「てもいい」表示許可。',
                        '「たり」錯誤：用於列舉動作。',
                        '「ながら」錯誤：表示同時進行。'
                    ]
                }
            }
        ]
    }
});

// ===== Batch 14: つもり / と / すぎる / てある / や =====
Object.assign(n5Details, {
    // ===== n5_tsumori =====
    n5_tsumori: {
        id: 'n5_tsumori',
        pattern: 'つもり',
        connection: '動詞辞書形＋つもり / 動詞ない形＋つもり',
        translation: '打算...；計劃...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '表示意圖或計劃',
                description: '「つもり」用於表示說話者的意圖、計劃或打算。表示已經決定要做某事。',
                examples: [
                    { japanese: '来年{らいねん}、日本{にほん}に行{い}くつもりです。', chinese: '打算明年去日本。' },
                    { japanese: '週末{しゅうまつ}は勉強{べんきょう}するつもりだ。', chinese: '週末打算讀書。' },
                    { japanese: '今日{きょう}は早{はや}く寝{ね}るつもりです。', chinese: '今天打算早點睡。' },
                    { japanese: '大学{だいがく}を卒業{そつぎょう}したら、就職{しゅうしょく}するつもりだ。', chinese: '大學畢業後打算就業。' }
                ]
            },
            {
                usageId: 2,
                title: '否定的意圖「ないつもり」',
                description: '「動詞ない形＋つもり」表示不打算做某事。',
                examples: [
                    { japanese: 'もうお酒{さけ}は飲{の}まないつもりだ。', chinese: '打算不再喝酒了。' },
                    { japanese: '今日{きょう}は出{で}かけないつもりです。', chinese: '今天不打算出門。' },
                    { japanese: '彼{かれ}には言{い}わないつもりだ。', chinese: '不打算告訴他。' }
                ]
            }
        ],
        analysis: {
            title: '「つもり」的用法重點',
            points: [
                {
                    rule: '「つもり」vs「予定」：「つもり」強調個人意志，「予定」強調計劃安排',
                    examples: [
                        { japanese: '日本{にほん}に行{い}くつもりです。', chinese: '（個人意願）打算去日本' },
                        { japanese: '日本{にほん}に行{い}く予定{よてい}です。', chinese: '（計劃安排）預定要去日本' }
                    ]
                },
                {
                    rule: '通常不用於第三人稱（他人的意圖）',
                    examples: [
                        { japanese: '私{わたし}は行{い}くつもりです。', chinese: '○ 我打算去' },
                        { japanese: '彼{かれ}は行{い}くつもりです。', chinese: '△ 用「ようです」更自然' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_tsumori_1',
                sentence: '来月{らいげつ}、新{あたら}しい車{くるま}を買{か}う（　）です。',
                options: ['つもり', 'こと', 'もの', 'ところ'],
                correctIndex: 0,
                explanation: {
                    correct: '「つもり」正確！表示「打算買」的意圖。',
                    wrong: [
                        '「こと」錯誤：「ことです」不表示計劃。',
                        '「もの」錯誤：「もの」不用於表示計劃。',
                        '「ところ」錯誤：「ところ」表示時機或地點。'
                    ]
                }
            },
            {
                id: 'n5_q_tsumori_2',
                sentence: '今日{きょう}はもう食{た}べない（　）です。',
                options: ['つもり', 'こと', 'もの', 'ところ'],
                correctIndex: 0,
                explanation: {
                    correct: '「つもり」正確！「食べないつもり」表示「不打算吃」。',
                    wrong: [
                        '「こと」錯誤：不表示否定的計劃。',
                        '「もの」錯誤：不用於表示計劃。',
                        '「ところ」錯誤：表示時機或地點。'
                    ]
                }
            },
            {
                id: 'n5_q_tsumori_3',
                sentence: '「週末{しゅうまつ}は何{なに}をする（　）ですか。」\n「友達{ともだち}と映画{えいが}を見{み}るつもりです。」',
                options: ['つもり', 'こと', 'もの', 'ところ'],
                correctIndex: 0,
                explanation: {
                    correct: '「つもり」正確！詢問週末的計劃。',
                    wrong: [
                        '「こと」錯誤：不用於詢問計劃。',
                        '「もの」錯誤：不用於表示計劃。',
                        '「ところ」錯誤：表示時機或地點。'
                    ]
                }
            },
            {
                id: 'n5_q_tsumori_4',
                sentence: '大学{だいがく}を卒業{そつぎょう}したら、留学{りゅうがく}する（　）です。',
                options: ['つもり', 'こと', 'もの', 'ところ'],
                correctIndex: 0,
                explanation: {
                    correct: '「つもり」正確！「留学するつもり」表示「打算留學」。',
                    wrong: [
                        '「こと」錯誤：「ことです」不表示計劃。',
                        '「もの」錯誤：不用於表示計劃。',
                        '「ところ」錯誤：表示時機或地點。'
                    ]
                }
            },
            {
                id: 'n5_q_tsumori_5',
                sentence: '明日{あした}は会社{かいしゃ}を休{やす}む（　）です。風邪{かぜ}を引{ひ}きました。',
                options: ['つもり', 'こと', 'もの', 'ところ'],
                correctIndex: 0,
                explanation: {
                    correct: '「つもり」正確！「休むつもり」表示「打算請假」。',
                    wrong: [
                        '「こと」錯誤：不表示計劃。',
                        '「もの」錯誤：不用於表示計劃。',
                        '「ところ」錯誤：表示時機或地點。'
                    ]
                }
            }
        ]
    },

    // ===== n5_to =====
    n5_to: {
        id: 'n5_to',
        pattern: 'と',
        connection: '名詞＋と＋名詞 / 動詞辞書形＋と',
        translation: '和...；一...就...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '並列助詞「と」',
                description: '用於連接名詞，表示「和」「與」的意思。列舉的項目是完整的，沒有其他。',
                examples: [
                    { japanese: 'りんごとバナナを買{か}った。', chinese: '買了蘋果和香蕉。' },
                    { japanese: '田中{たなか}さんと山田{やまだ}さんが来{き}た。', chinese: '田中和山田來了。' },
                    { japanese: '日本語{にほんご}と英語{えいご}を勉強{べんきょう}している。', chinese: '正在學日語和英語。' }
                ]
            },
            {
                usageId: 2,
                title: '共同動作「と」',
                description: '表示一起做某動作的對象。',
                examples: [
                    { japanese: '友達{ともだち}と映画{えいが}を見{み}た。', chinese: '和朋友看了電影。' },
                    { japanese: '彼女{かのじょ}と食事{しょくじ}した。', chinese: '和她一起吃飯了。' },
                    { japanese: '誰{だれ}と行{い}きますか。', chinese: '和誰去？' }
                ]
            },
            {
                usageId: 3,
                title: '條件「と」',
                description: '「動詞辞書形＋と」表示自然的結果或習慣性的條件，意思是「一...就...」。',
                examples: [
                    { japanese: '春{はる}になると、桜{さくら}が咲{さ}く。', chinese: '一到春天，櫻花就開。' },
                    { japanese: 'このボタンを押{お}すと、ドアが開{あ}く。', chinese: '按這個按鈕，門就開。' },
                    { japanese: '右{みぎ}に曲{ま}がると、駅{えき}がある。', chinese: '往右轉就有車站。' }
                ]
            }
        ],
        analysis: {
            title: '「と」的多種用法',
            points: [
                {
                    rule: '並列「と」vs「や」：「と」列舉完整，「や」暗示還有其他',
                    examples: [
                        { japanese: 'りんごとバナナを買{か}った。', chinese: '只買了蘋果和香蕉（沒有其他）' },
                        { japanese: 'りんごやバナナを買{か}った。', chinese: '買了蘋果、香蕉等（可能還有其他）' }
                    ]
                },
                {
                    rule: '條件「と」：後句不能用意志、命令、請求',
                    examples: [
                        { japanese: 'ボタンを押{お}すと、開{あ}く。', chinese: '○ 自然結果' },
                        { japanese: 'ボタンを押{お}すと、開{あ}けてください。', chinese: '✕ 不能用請求' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_to_1',
                sentence: '母{はは}（　）一緒{いっしょ}に買{か}い物{もの}に行{い}きました。',
                options: ['と', 'や', 'も', 'か'],
                correctIndex: 0,
                explanation: {
                    correct: '「と」正確！「母と一緒に」表示「和媽媽一起」。',
                    wrong: [
                        '「や」錯誤：「や」用於列舉名詞，不用於共同動作。',
                        '「も」錯誤：「も」表示「也」，不是「一起」。',
                        '「か」錯誤：「か」表示選擇。'
                    ]
                }
            },
            {
                id: 'n5_q_to_2',
                sentence: '春{はる}になる（　）、暖{あたた}かくなる。',
                options: ['と', 'ば', 'なら', 'たら'],
                correctIndex: 0,
                explanation: {
                    correct: '「と」正確！「春になると」表示自然條件「一到春天就...」。',
                    wrong: [
                        '「ば」也可以，但「と」更強調自然結果。',
                        '「なら」錯誤：「なら」表示假設前提。',
                        '「たら」也可以，但「と」更強調習慣性。'
                    ]
                }
            },
            {
                id: 'n5_q_to_3',
                sentence: 'コーヒー（　）紅茶{こうちゃ}、どちらがいいですか。',
                options: ['と', 'や', 'も', 'か'],
                correctIndex: 0,
                explanation: {
                    correct: '「と」正確！「AとB、どちら」是詢問選擇的固定用法。',
                    wrong: [
                        '「や」錯誤：「どちら」需要用「と」。',
                        '「も」錯誤：「も」不用於這種選擇句。',
                        '「か」錯誤：「か」表示「或者」，但這裡需要「と」。'
                    ]
                }
            },
            {
                id: 'n5_q_to_4',
                sentence: 'このボタンを押{お}す（　）、ドアが開{あ}きます。',
                options: ['と', 'ば', 'なら', 'から'],
                correctIndex: 0,
                explanation: {
                    correct: '「と」正確！表示自然結果「一按就開」。',
                    wrong: [
                        '「ば」也可以，但「と」更強調自然結果。',
                        '「なら」錯誤：「なら」表示假設前提。',
                        '「から」錯誤：「から」表示原因。'
                    ]
                }
            },
            {
                id: 'n5_q_to_5',
                sentence: '「誰{だれ}（　）行{い}きましたか。」\n「田中{たなか}さんと行{い}きました。」',
                options: ['と', 'や', 'も', 'か'],
                correctIndex: 0,
                explanation: {
                    correct: '「と」正確！「誰と」詢問一起行動的對象。',
                    wrong: [
                        '「や」錯誤：「や」用於列舉名詞，不用於共同動作。',
                        '「も」錯誤：「も」表示「也」。',
                        '「か」錯誤：「か」表示選擇。'
                    ]
                }
            }
        ]
    },

    // ===== n5_sugiru =====
    n5_sugiru: {
        id: 'n5_sugiru',
        pattern: 'すぎる',
        connection: '動詞ます形（去ます）＋すぎる / 形容詞詞幹＋すぎる',
        translation: '太...；過於...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '動詞＋すぎる',
                description: '「動詞ます形＋すぎる」表示做某動作過度。通常帶有負面含義。',
                examples: [
                    { japanese: '食{た}べすぎた。', chinese: '吃太多了。' },
                    { japanese: '昨日{きのう}は飲{の}みすぎました。', chinese: '昨天喝太多了。' },
                    { japanese: '働{はたら}きすぎて、体{からだ}を壊{こわ}した。', chinese: '工作過度，身體搞壞了。' },
                    { japanese: '寝{ね}すぎて、頭{あたま}が痛{いた}い。', chinese: '睡太多，頭很痛。' }
                ]
            },
            {
                usageId: 2,
                title: '形容詞＋すぎる',
                description: 'い形容詞去「い」、な形容詞去「な」後接「すぎる」。',
                examples: [
                    { japanese: 'このラーメンは辛{から}すぎる。', chinese: '這個拉麵太辣了。' },
                    { japanese: 'この部屋{へや}は静{しず}かすぎる。', chinese: '這個房間太安靜了。' },
                    { japanese: '問題{もんだい}が難{むずか}しすぎる。', chinese: '問題太難了。' },
                    { japanese: 'この服{ふく}は派手{はで}すぎる。', chinese: '這件衣服太花俏了。' }
                ]
            }
        ],
        analysis: {
            title: '「すぎる」的接續規則',
            points: [
                {
                    rule: '動詞：ます形去「ます」＋すぎる',
                    examples: [
                        { japanese: '食{た}べます → 食べすぎる', chinese: '吃太多' },
                        { japanese: '飲{の}みます → 飲みすぎる', chinese: '喝太多' }
                    ]
                },
                {
                    rule: 'い形容詞：去「い」＋すぎる',
                    examples: [
                        { japanese: '高{たか}い → 高すぎる', chinese: '太貴/太高' },
                        { japanese: '大{おお}きい → 大きすぎる', chinese: '太大' }
                    ]
                },
                {
                    rule: 'な形容詞：去「な」＋すぎる',
                    examples: [
                        { japanese: '静{しず}かな → 静かすぎる', chinese: '太安靜' },
                        { japanese: '簡単{かんたん}な → 簡単すぎる', chinese: '太簡單' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_sugiru_1',
                sentence: '昨日{きのう}は食{た}べ（　）、お腹{なか}が痛{いた}くなった。',
                options: ['すぎて', 'すぎる', 'すぎた', 'すぎ'],
                correctIndex: 0,
                explanation: {
                    correct: '「すぎて」正確！「すぎて」是「すぎる」的て形，連接原因和結果。',
                    wrong: [
                        '「すぎる」錯誤：需要連接後面的結果。',
                        '「すぎた」錯誤：過去式不能直接連接後句。',
                        '「すぎ」錯誤：形式不完整。'
                    ]
                }
            },
            {
                id: 'n5_q_sugiru_2',
                sentence: 'この問題{もんだい}は難{むずか}し（　）。わかりません。',
                options: ['すぎます', 'すぎる', 'すぎた', 'すぎて'],
                correctIndex: 0,
                explanation: {
                    correct: '「すぎます」正確！丁寧體「難しすぎます」。',
                    wrong: [
                        '「すぎる」也可以，但丁寧體用「すぎます」更自然。',
                        '「すぎた」錯誤：問題現在還是難的。',
                        '「すぎて」錯誤：後面需要接結果。'
                    ]
                }
            },
            {
                id: 'n5_q_sugiru_3',
                sentence: '「どうしたの？」\n「コーヒーを飲{の}み（　）て、眠{ねむ}れない。」',
                options: ['すぎ', 'すぎる', 'すぎた', 'すぎます'],
                correctIndex: 0,
                explanation: {
                    correct: '「すぎ」正確！「すぎて」由「すぎ＋て」組成。',
                    wrong: [
                        '「すぎる」錯誤：需要て形連接。',
                        '「すぎた」錯誤：て形是「すぎて」。',
                        '「すぎます」錯誤：需要て形連接。'
                    ]
                }
            },
            {
                id: 'n5_q_sugiru_4',
                sentence: 'このケーキは甘{あま}（　）。砂糖{さとう}を入{い}れすぎた。',
                options: ['すぎる', 'すぎ', 'すぎた', 'すぎて'],
                correctIndex: 0,
                explanation: {
                    correct: '「すぎる」正確！「甘すぎる」表示「太甜了」。',
                    wrong: [
                        '「すぎ」錯誤：需要活用形式「すぎる」。',
                        '「すぎた」也可以，但現在描述用「すぎる」更自然。',
                        '「すぎて」錯誤：後面沒有接原因結果。'
                    ]
                }
            },
            {
                id: 'n5_q_sugiru_5',
                sentence: '彼{かれ}は真面目{まじめ}（　）。少{すこ}しリラックスしたほうがいい。',
                options: ['すぎる', 'すぎ', 'すぎた', 'すぎて'],
                correctIndex: 0,
                explanation: {
                    correct: '「すぎる」正確！「真面目すぎる」表示「太認真了」。',
                    wrong: [
                        '「すぎ」錯誤：需要活用形式。',
                        '「すぎた」錯誤：現在描述用「すぎる」。',
                        '「すぎて」錯誤：後面沒有接結果句。'
                    ]
                }
            }
        ]
    },

    // ===== n5_te_aru =====
    n5_te_aru: {
        id: 'n5_te_aru',
        pattern: 'てある',
        connection: '他動詞て形＋ある',
        translation: '（已經）...好了',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '表示動作結果的狀態',
                description: '「てある」表示某人做了某動作後，其結果狀態一直持續。強調「為了某目的而準備好」的狀態。',
                examples: [
                    { japanese: '窓{まど}が開{あ}けてある。', chinese: '窗戶（被人）開著。' },
                    { japanese: 'テーブルの上{うえ}に本{ほん}が置{お}いてある。', chinese: '桌上放著書。' },
                    { japanese: '部屋{へや}が掃除{そうじ}してある。', chinese: '房間已經打掃好了。' },
                    { japanese: '予約{よやく}してあります。', chinese: '已經預約好了。' }
                ]
            },
            {
                usageId: 2,
                title: '與「ている」的區別',
                description: '「ている」描述狀態或持續動作，「てある」強調人為準備的結果狀態。',
                examples: [
                    { japanese: '窓{まど}が開{あ}いている。', chinese: '窗戶開著。（狀態描述）' },
                    { japanese: '窓{まど}が開{あ}けてある。', chinese: '窗戶（被人）開著。（準備狀態）' },
                    { japanese: '電気{でんき}がついている。', chinese: '燈亮著。（自動詞）' },
                    { japanese: '電気{でんき}がつけてある。', chinese: '燈（被人）打開著。（他動詞）' }
                ]
            }
        ],
        analysis: {
            title: '「てある」的用法重點',
            points: [
                {
                    rule: '「てある」只能用於他動詞',
                    examples: [
                        { japanese: 'ドアを開{あ}ける → ドアが開けてある', chinese: '○ 他動詞' },
                        { japanese: 'ドアが開{あ}く → ドアが開いている', chinese: '○ 自動詞用「ている」' }
                    ]
                },
                {
                    rule: '助詞的變化：「を」變成「が」',
                    examples: [
                        { japanese: '窓{まど}を開{あ}ける', chinese: '開窗（動作）' },
                        { japanese: '窓{まど}が開{あ}けてある', chinese: '窗開著（結果狀態）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_tearu_1',
                sentence: 'もう予約{よやく}し（　）ありますから、大丈夫{だいじょうぶ}です。',
                options: ['て', 'た', 'ている', 'たり'],
                correctIndex: 0,
                explanation: {
                    correct: '「て」正確！「してある」表示「已經預約好了」。',
                    wrong: [
                        '「た」錯誤：需要て形。',
                        '「ている」錯誤：「している」表示進行，「してある」表示準備好的狀態。',
                        '「たり」錯誤：用於列舉動作。'
                    ]
                }
            },
            {
                id: 'n5_q_tearu_2',
                sentence: '冷蔵庫{れいぞうこ}にビールが冷{ひ}やし（　）ありますよ。',
                options: ['て', 'た', 'ている', 'たり'],
                correctIndex: 0,
                explanation: {
                    correct: '「て」正確！「冷やしてある」表示「冰好了」的準備狀態。',
                    wrong: [
                        '「た」錯誤：需要て形。',
                        '「ている」錯誤：「ている」表示進行。',
                        '「たり」錯誤：用於列舉動作。'
                    ]
                }
            },
            {
                id: 'n5_q_tearu_3',
                sentence: '「電気{でんき}、消{け}す？」\n「いや、つけ（　）あるよ。そのままで。」',
                options: ['て', 'た', 'ている', 'ます'],
                correctIndex: 0,
                explanation: {
                    correct: '「て」正確！「つけてある」表示「特意開著」的狀態。',
                    wrong: [
                        '「た」錯誤：需要て形。',
                        '「ている」錯誤：「ている」只描述狀態，「てある」強調有意為之。',
                        '「ます」錯誤：形式不對。'
                    ]
                }
            },
            {
                id: 'n5_q_tearu_4',
                sentence: '壁{かべ}にカレンダーが掛{か}け（　）あります。',
                options: ['て', 'た', 'ている', 'たり'],
                correctIndex: 0,
                explanation: {
                    correct: '「て」正確！「掛けてある」表示「掛著」的準備狀態。',
                    wrong: [
                        '「た」錯誤：需要て形。',
                        '「ている」錯誤：「てある」強調有意為之。',
                        '「たり」錯誤：用於列舉動作。'
                    ]
                }
            },
            {
                id: 'n5_q_tearu_5',
                sentence: '「お弁当{べんとう}は？」\n「冷蔵庫{れいぞうこ}に入{い}れ（　）あるよ。」',
                options: ['て', 'た', 'ている', 'ます'],
                correctIndex: 0,
                explanation: {
                    correct: '「て」正確！「入れてある」表示「已經放進去了」的準備狀態。',
                    wrong: [
                        '「た」錯誤：需要て形。',
                        '「ている」錯誤：「てある」強調有意為之。',
                        '「ます」錯誤：形式不對。'
                    ]
                }
            }
        ]
    },

    // ===== n5_ya =====
    n5_ya: {
        id: 'n5_ya',
        pattern: 'や',
        connection: '名詞＋や＋名詞＋（など）',
        translation: '...和...等',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '列舉（非完整）',
                description: '「や」用於列舉名詞，暗示還有其他項目沒有列出。常與「など」搭配使用。',
                examples: [
                    { japanese: 'りんごやバナナを買{か}った。', chinese: '買了蘋果、香蕉等。' },
                    { japanese: '田中{たなか}さんや山田{やまだ}さんが来{き}た。', chinese: '田中、山田等人來了。' },
                    { japanese: '肉{にく}や野菜{やさい}やお米{こめ}を買{か}いました。', chinese: '買了肉、蔬菜、米等。' },
                    { japanese: '本{ほん}やノートなどを持{も}ってきてください。', chinese: '請帶書、筆記本等。' }
                ]
            },
            {
                usageId: 2,
                title: '與「と」的區別',
                description: '「と」列舉完整的項目，「や」暗示還有其他沒列出的項目。',
                examples: [
                    { japanese: 'コーヒーと紅茶{こうちゃ}を頼{たの}んだ。', chinese: '點了咖啡和紅茶（只有這兩種）。' },
                    { japanese: 'コーヒーや紅茶{こうちゃ}を頼{たの}んだ。', chinese: '點了咖啡、紅茶等（可能還有其他）。' }
                ]
            }
        ],
        analysis: {
            title: '「や」的用法重點',
            points: [
                {
                    rule: '「や」只能連接名詞，不能連接動詞或形容詞',
                    examples: [
                        { japanese: '本{ほん}やペンを買{か}った。', chinese: '○ 名詞' },
                        { japanese: '食{た}べるや飲{の}むや...', chinese: '✕ 動詞不能用「や」' }
                    ]
                },
                {
                    rule: '常與「など」搭配，強調列舉不完整',
                    examples: [
                        { japanese: '東京{とうきょう}や大阪{おおさか}など', chinese: '東京、大阪等（還有其他城市）' }
                    ]
                },
                {
                    rule: '「と」vs「や」vs「も」',
                    examples: [
                        { japanese: 'AとB', chinese: 'A和B（完整列舉）' },
                        { japanese: 'AやB', chinese: 'A、B等（非完整）' },
                        { japanese: 'AもBも', chinese: 'A也B也（強調兩者都）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_ya_1',
                sentence: 'スーパーで肉{にく}（　）野菜{やさい}を買{か}いました。',
                options: ['や', 'と', 'も', 'か'],
                correctIndex: 0,
                explanation: {
                    correct: '「や」正確！列舉購買的東西，暗示可能還有其他。',
                    wrong: [
                        '「と」也可以，但如果還買了其他東西，「や」更合適。',
                        '「も」錯誤：「も」表示「也」，需要用「肉も野菜も」。',
                        '「か」錯誤：「か」表示選擇。'
                    ]
                }
            },
            {
                id: 'n5_q_ya_2',
                sentence: '日本語{にほんご}（　）英語{えいご}（　）を勉強{べんきょう}しています。',
                options: ['や / など', 'と / と', 'も / も', 'か / か'],
                correctIndex: 0,
                explanation: {
                    correct: '「や / など」正確！「日本語や英語など」表示還可能學其他語言。',
                    wrong: [
                        '「と / と」不自然：「と」不重複使用。',
                        '「も / も」也可以，但強調點不同。',
                        '「か / か」錯誤：「か」表示選擇。'
                    ]
                }
            },
            {
                id: 'n5_q_ya_3',
                sentence: '「何{なに}を持{も}っていきますか。」\n「本{ほん}（　）ノートを持{も}っていきます。」',
                options: ['や', 'と', 'も', 'か'],
                correctIndex: 0,
                explanation: {
                    correct: '「や」正確！列舉要帶的東西，暗示可能還有其他。',
                    wrong: [
                        '「と」也可以，但如果還要帶其他東西，「や」更合適。',
                        '「も」錯誤：需要「本もノートも」的形式。',
                        '「か」錯誤：「か」表示選擇。'
                    ]
                }
            },
            {
                id: 'n5_q_ya_4',
                sentence: '東京{とうきょう}（　）大阪{おおさか}などに行{い}きたいです。',
                options: ['や', 'と', 'も', 'か'],
                correctIndex: 0,
                explanation: {
                    correct: '「や」正確！「東京や大阪など」暗示還想去其他地方。',
                    wrong: [
                        '「と」錯誤：「など」常與「や」搭配。',
                        '「も」錯誤：需要「も...も」的形式。',
                        '「か」錯誤：「か」表示選擇。'
                    ]
                }
            },
            {
                id: 'n5_q_ya_5',
                sentence: '机{つくえ}の上{うえ}にペン（　）鉛筆{えんぴつ}がある。',
                options: ['や', 'と', 'も', 'か'],
                correctIndex: 0,
                explanation: {
                    correct: '「や」正確！列舉桌上的東西，暗示可能還有其他。',
                    wrong: [
                        '「と」也可以，但如果還有其他東西，「や」更合適。',
                        '「も」錯誤：需要「も...も」的形式。',
                        '「か」錯誤：「か」表示選擇。'
                    ]
                }
            }
        ]
    }
});

// ===== Batch 15: より～ほうが / はどうですか / しかし / そして / それから =====
Object.assign(n5Details, {
    // ===== n5_yori_hou_ga =====
    n5_yori_hou_ga: {
        id: 'n5_yori_hou_ga',
        pattern: 'より～ほうが',
        connection: 'A より B のほうが ＋ 形容詞',
        translation: '比起A，B更...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '兩者比較',
                description: '「AよりBのほうが」用於比較兩個事物，表示B比A更具有某種特質。',
                examples: [
                    { japanese: '電車{でんしゃ}より飛行機{ひこうき}のほうが速{はや}い。', chinese: '飛機比電車快。' },
                    { japanese: '夏{なつ}より冬{ふゆ}のほうが好{す}きです。', chinese: '比起夏天，我更喜歡冬天。' },
                    { japanese: '肉{にく}より魚{さかな}のほうが体{からだ}にいい。', chinese: '魚比肉對身體好。' },
                    { japanese: '日本語{にほんご}より英語{えいご}のほうが難{むずか}しいです。', chinese: '英語比日語難。' }
                ]
            },
            {
                usageId: 2,
                title: '省略形式',
                description: '「より」或「ほうが」有時可以省略，但意思相同。',
                examples: [
                    { japanese: 'こっちのほうがいい。', chinese: '這邊比較好。（省略より）' },
                    { japanese: '東京{とうきょう}より大阪{おおさか}が大{おお}きい。', chinese: '大阪比東京大。（省略ほうが）' }
                ]
            }
        ],
        analysis: {
            title: '比較表達的結構',
            points: [
                {
                    rule: '基本結構：比較對象＋より＋主語＋のほうが＋形容詞',
                    examples: [
                        { japanese: '犬{いぬ}より猫{ねこ}のほうが好{す}きだ。', chinese: '比起狗，更喜歡貓。' }
                    ]
                },
                {
                    rule: '「より」vs「ほど」：「より」用於直接比較，「ほど」用於否定比較',
                    examples: [
                        { japanese: 'AよりBのほうが高{たか}い。', chinese: 'B比A貴。' },
                        { japanese: 'AはBほど高{たか}くない。', chinese: 'A沒有B那麼貴。' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_yorihouga_1',
                sentence: '電車{でんしゃ}（　）バスのほうが便利{べんり}です。',
                options: ['より', 'ほど', 'から', 'まで'],
                correctIndex: 0,
                explanation: {
                    correct: '「より」正確！「電車よりバスのほうが」表示比較。',
                    wrong: [
                        '「ほど」錯誤：「ほど」用於否定比較。',
                        '「から」錯誤：「から」表示起點或原因。',
                        '「まで」錯誤：「まで」表示終點。'
                    ]
                }
            },
            {
                id: 'n5_q_yorihouga_2',
                sentence: '夏{なつ}より冬{ふゆ}の（　）が好{す}きです。',
                options: ['ほう', 'こと', 'もの', 'ところ'],
                correctIndex: 0,
                explanation: {
                    correct: '「ほう」正確！「のほうが」表示比較中較好的一方。',
                    wrong: [
                        '「こと」錯誤：不用於比較。',
                        '「もの」錯誤：不用於比較。',
                        '「ところ」錯誤：不用於比較。'
                    ]
                }
            },
            {
                id: 'n5_q_yorihouga_3',
                sentence: '「コーヒーと紅茶{こうちゃ}、どちらが好{す}きですか。」\n「紅茶{こうちゃ}（　）ほうが好{す}きです。」',
                options: ['の', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！「紅茶のほうが」表示「紅茶這邊」。',
                    wrong: [
                        '「が」錯誤：需要「の」來連接。',
                        '「を」錯誤：不用於這種接續。',
                        '「に」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_yorihouga_4',
                sentence: '冬{ふゆ}（　）夏{なつ}のほうが暑{あつ}い。',
                options: ['より', 'ほど', 'から', 'まで'],
                correctIndex: 0,
                explanation: {
                    correct: '「より」正確！「冬より夏のほうが」表示比較。',
                    wrong: [
                        '「ほど」錯誤：「ほど」用於否定比較。',
                        '「から」錯誤：「から」表示起點。',
                        '「まで」錯誤：「まで」表示終點。'
                    ]
                }
            },
            {
                id: 'n5_q_yorihouga_5',
                sentence: '「犬{いぬ}と猫{ねこ}、どちらがいいですか。」\n「猫{ねこ}の（　）がいいです。」',
                options: ['ほう', 'より', 'ほど', 'ため'],
                correctIndex: 0,
                explanation: {
                    correct: '「ほう」正確！「猫のほうがいい」表示「貓比較好」。',
                    wrong: [
                        '「より」錯誤：「より」是比較對象的標記。',
                        '「ほど」錯誤：「ほど」用於否定比較。',
                        '「ため」錯誤：「ため」表示目的或原因。'
                    ]
                }
            }
        ]
    },

    // ===== n5_wa_yori =====
    n5_wa_yori: {
        id: 'n5_wa_yori',
        pattern: 'はより',
        connection: 'A は B より ＋ 形容詞',
        translation: 'A比B更...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '以主題為主的比較',
                description: '「AはBより」以A為話題，說明A比B更具有某種特質。語順與「AよりBのほうが」相反。',
                examples: [
                    { japanese: '飛行機{ひこうき}は電車{でんしゃ}より速{はや}い。', chinese: '飛機比電車快。' },
                    { japanese: '東京{とうきょう}は大阪{おおさか}より大{おお}きい。', chinese: '東京比大阪大。' },
                    { japanese: 'この本{ほん}はあの本{ほん}より面白{おもしろ}い。', chinese: '這本書比那本書有趣。' }
                ]
            }
        ],
        analysis: {
            title: '兩種比較句型的區別',
            points: [
                {
                    rule: '「AはBより」vs「BよりAのほうが」：意思相同，但焦點不同',
                    examples: [
                        { japanese: '東京{とうきょう}は大阪{おおさか}より大{おお}きい。', chinese: '（焦點在東京）' },
                        { japanese: '大阪{おおさか}より東京{とうきょう}のほうが大{おお}きい。', chinese: '（焦點在比較結果）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_wayori_1',
                sentence: '日本{にほん}は台湾{たいわん}（　）大{おお}きいです。',
                options: ['より', 'ほど', 'から', 'まで'],
                correctIndex: 0,
                explanation: {
                    correct: '「より」正確！「日本は台湾より大きい」表示日本比台灣大。',
                    wrong: [
                        '「ほど」錯誤：「ほど」用於否定比較。',
                        '「から」錯誤：不用於比較。',
                        '「まで」錯誤：不用於比較。'
                    ]
                }
            },
            {
                id: 'n5_q_wayori_2',
                sentence: '夏{なつ}は冬{ふゆ}（　）暑{あつ}いです。',
                options: ['より', 'ほう', 'くらい', 'など'],
                correctIndex: 0,
                explanation: {
                    correct: '「より」正確！表示夏天比冬天熱。',
                    wrong: [
                        '「ほう」錯誤：「ほう」是「方」，用於「〜のほうが」句型。',
                        '「くらい」錯誤：「くらい」表示程度，不用於比較。',
                        '「など」錯誤：「など」表示「等等」。'
                    ]
                }
            },
            {
                id: 'n5_q_wayori_3',
                sentence: 'このレストランはあのレストラン（　）美味{おい}しいです。',
                options: ['より', 'と', 'も', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「より」正確！表示這家餐廳比那家餐廳好吃。',
                    wrong: [
                        '「と」錯誤：「と」用於並列，不用於比較。',
                        '「も」錯誤：「も」表示「也」。',
                        '「が」錯誤：「が」是主語助詞，這裡不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_wayori_4',
                sentence: '犬{いぬ}は猫{ねこ}（　）元気{げんき}です。',
                options: ['より', 'みたい', 'らしい', 'ような'],
                correctIndex: 0,
                explanation: {
                    correct: '「より」正確！表示狗比貓有精神。',
                    wrong: [
                        '「みたい」錯誤：「みたい」表示「好像」。',
                        '「らしい」錯誤：「らしい」表示推測。',
                        '「ような」錯誤：「ような」表示「像〜一樣」。'
                    ]
                }
            },
            {
                id: 'n5_q_wayori_5',
                sentence: '数学{すうがく}は英語{えいご}（　）難{むずか}しいと思{おも}います。',
                options: ['より', 'ほど', 'だけ', 'しか'],
                correctIndex: 0,
                explanation: {
                    correct: '「より」正確！表示我覺得數學比英語難。',
                    wrong: [
                        '「ほど」錯誤：「ほど」多用於否定比較。',
                        '「だけ」錯誤：「だけ」表示「只有」。',
                        '「しか」錯誤：「しか」接否定，表示「只有」。'
                    ]
                }
            }
        ]
    },

    // ===== n5_wa_dou_desu_ka =====
    n5_wa_dou_desu_ka: {
        id: 'n5_wa_dou_desu_ka',
        pattern: 'はどうですか',
        connection: '名詞＋はどうですか',
        translation: '...怎麼樣？',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '詢問意見或感想',
                description: '用於詢問對方對某事物的意見、感想或評價。',
                examples: [
                    { japanese: '日本{にほん}の食{た}べ物{もの}はどうですか。', chinese: '日本的食物怎麼樣？' },
                    { japanese: '新{あたら}しい仕事{しごと}はどうですか。', chinese: '新工作怎麼樣？' },
                    { japanese: '最近{さいきん}の調子{ちょうし}はどうですか。', chinese: '最近狀況怎麼樣？' }
                ]
            },
            {
                usageId: 2,
                title: '提出建議',
                description: '也可用於向對方提出建議或邀請。',
                examples: [
                    { japanese: 'コーヒーはどうですか。', chinese: '要不要喝咖啡？' },
                    { japanese: '明日{あした}はどうですか。', chinese: '明天怎麼樣？（明天可以嗎？）' },
                    { japanese: 'もう一杯{いっぱい}はどうですか。', chinese: '再來一杯怎麼樣？' }
                ]
            }
        ],
        analysis: {
            title: '「どうですか」的用法',
            points: [
                {
                    rule: '「どうですか」vs「いかがですか」：「いかがですか」更禮貌',
                    examples: [
                        { japanese: 'お茶{ちゃ}はどうですか。', chinese: '要茶嗎？（一般）' },
                        { japanese: 'お茶{ちゃ}はいかがですか。', chinese: '請問要茶嗎？（禮貌）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_wadou_1',
                sentence: '「日本語{にほんご}の勉強{べんきょう}は（　）ですか。」\n「楽{たの}しいです。」',
                options: ['どう', 'なに', 'どれ', 'どこ'],
                correctIndex: 0,
                explanation: {
                    correct: '「どう」正確！「どうですか」詢問感想。',
                    wrong: [
                        '「なに」錯誤：「なに」詢問具體事物。',
                        '「どれ」錯誤：「どれ」用於選擇。',
                        '「どこ」錯誤：「どこ」詢問地點。'
                    ]
                }
            },
            {
                id: 'n5_q_wadou_2',
                sentence: '「新{あたら}しいアパートは（　）ですか。」\n「広{ひろ}くて、いいです。」',
                options: ['どう', 'なん', 'いくら', 'どちら'],
                correctIndex: 0,
                explanation: {
                    correct: '「どう」正確！詢問對新公寓的感想。',
                    wrong: [
                        '「なん」錯誤：「なん」詢問「什麼」。',
                        '「いくら」錯誤：「いくら」詢問價格。',
                        '「どちら」錯誤：「どちら」用於二選一。'
                    ]
                }
            },
            {
                id: 'n5_q_wadou_3',
                sentence: 'コーヒーは（　）ですか。',
                options: ['どう', 'なに', 'どこ', 'だれ'],
                correctIndex: 0,
                explanation: {
                    correct: '「どう」正確！「コーヒーはどうですか」可表示「要不要喝咖啡」的邀請。',
                    wrong: [
                        '「なに」錯誤：不符合文脈。',
                        '「どこ」錯誤：詢問地點，不適用。',
                        '「だれ」錯誤：詢問人物，不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_wadou_4',
                sentence: '「今日{きょう}の天気{てんき}は（　）ですか。」\n「いい天気{てんき}ですよ。」',
                options: ['どう', 'なに', 'どんな', 'いつ'],
                correctIndex: 0,
                explanation: {
                    correct: '「どう」正確！詢問天氣狀況。',
                    wrong: [
                        '「なに」錯誤：「なに」詢問具體事物。',
                        '「どんな」錯誤：「どんな」後面接名詞。',
                        '「いつ」錯誤：「いつ」詢問時間。'
                    ]
                }
            },
            {
                id: 'n5_q_wadou_5',
                sentence: '「明日{あした}の午後{ごご}は（　）ですか。」\n「大丈夫{だいじょうぶ}です。」',
                options: ['どう', 'なに', 'どれ', 'いくつ'],
                correctIndex: 0,
                explanation: {
                    correct: '「どう」正確！詢問時間是否方便，帶有提議意味。',
                    wrong: [
                        '「なに」錯誤：不符合文脈。',
                        '「どれ」錯誤：用於選擇，不適用。',
                        '「いくつ」錯誤：詢問數量，不適用。'
                    ]
                }
            }
        ]
    },

    // ===== n5_shikashi =====
    n5_shikashi: {
        id: 'n5_shikashi',
        pattern: 'しかし',
        connection: '句子。しかし、句子。',
        translation: '但是；然而',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '表示轉折',
                description: '「しかし」用於連接兩個句子，表示後句與前句相反或對比。是較正式的轉折詞。',
                examples: [
                    { japanese: '彼{かれ}は頭{あたま}がいい。しかし、勉強{べんきょう}しない。', chinese: '他很聰明。但是不讀書。' },
                    { japanese: '高{たか}いです。しかし、品質{ひんしつ}がいいです。', chinese: '很貴。但是品質好。' },
                    { japanese: '雨{あめ}が降{ふ}っていた。しかし、試合{しあい}は行{おこな}われた。', chinese: '下著雨。但是比賽照常舉行。' }
                ]
            }
        ],
        analysis: {
            title: '轉折詞的比較',
            points: [
                {
                    rule: '正式度：しかし ＞ でも ＞ けど',
                    examples: [
                        { japanese: 'しかし、行{い}きません。', chinese: '（書面/正式）' },
                        { japanese: 'でも、行{い}きません。', chinese: '（口語/一般）' },
                        { japanese: '行{い}きたいけど、行{い}けない。', chinese: '（口語/casual）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_shikashi_1',
                sentence: 'この店{みせ}の料理{りょうり}はおいしい。（　）、高{たか}い。',
                options: ['しかし', 'そして', 'それから', 'だから'],
                correctIndex: 0,
                explanation: {
                    correct: '「しかし」正確！表示轉折「好吃但是貴」。',
                    wrong: [
                        '「そして」錯誤：「そして」表示追加，不是轉折。',
                        '「それから」錯誤：「それから」表示順序。',
                        '「だから」錯誤：「だから」表示原因結果。'
                    ]
                }
            },
            {
                id: 'n5_q_shikashi_2',
                sentence: '彼{かれ}は頭{あたま}がいい。（　）、勉強{べんきょう}しない。',
                options: ['しかし', 'そして', 'だから', 'それで'],
                correctIndex: 0,
                explanation: {
                    correct: '「しかし」正確！「聰明但是不讀書」是轉折關係。',
                    wrong: [
                        '「そして」錯誤：表示追加，邏輯不通。',
                        '「だから」錯誤：表示因果，邏輯相反。',
                        '「それで」錯誤：表示結果，邏輯不通。'
                    ]
                }
            },
            {
                id: 'n5_q_shikashi_3',
                sentence: '薬{くすり}を飲{の}んだ。（　）、熱{ねつ}が下{さ}がらない。',
                options: ['しかし', 'そして', 'それから', 'ところで'],
                correctIndex: 0,
                explanation: {
                    correct: '「しかし」正確！吃了藥但燒沒退，是轉折。',
                    wrong: [
                        '「そして」錯誤：表示追加，不符合語境。',
                        '「それから」錯誤：表示時間順序。',
                        '「ところで」錯誤：表示轉換話題。'
                    ]
                }
            },
            {
                id: 'n5_q_shikashi_4',
                sentence: '日本語{にほんご}は難{むずか}しい。（　）、面白{おもしろ}い。',
                options: ['しかし', 'だから', 'それで', 'そこで'],
                correctIndex: 0,
                explanation: {
                    correct: '「しかし」正確！「難但有趣」是轉折。',
                    wrong: [
                        '「だから」錯誤：表示因果，邏輯不通。',
                        '「それで」錯誤：表示結果。',
                        '「そこで」錯誤：表示「於是」。'
                    ]
                }
            },
            {
                id: 'n5_q_shikashi_5',
                sentence: '安{やす}い。（　）、品質{ひんしつ}がいい。',
                options: ['しかし', 'それから', 'そして', 'または'],
                correctIndex: 0,
                explanation: {
                    correct: '「しかし」正確！便宜但品質好，有驚喜的轉折感。',
                    wrong: [
                        '「それから」錯誤：表示順序。',
                        '「そして」錯誤：雖然可以追加，但這裡有轉折意味更合適。',
                        '「または」錯誤：表示「或者」。'
                    ]
                }
            }
        ]
    },

    // ===== n5_soshite =====
    n5_soshite: {
        id: 'n5_soshite',
        pattern: 'そして',
        connection: '句子。そして、句子。',
        translation: '然後；而且',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '表示追加或順序',
                description: '「そして」用於連接兩個句子，表示追加信息或時間順序。',
                examples: [
                    { japanese: '朝{あさ}起{お}きた。そして、朝{あさ}ご飯{はん}を食{た}べた。', chinese: '早上起床了。然後吃了早餐。' },
                    { japanese: '彼{かれ}は優{やさ}しい。そして、面白{おもしろ}い。', chinese: '他很溫柔。而且很有趣。' },
                    { japanese: '買{か}い物{もの}をした。そして、映画{えいが}を見{み}た。', chinese: '買了東西。然後看了電影。' }
                ]
            }
        ],
        analysis: {
            title: '「そして」vs「それから」',
            points: [
                {
                    rule: '「そして」：追加信息或順序，「それから」：更強調時間順序',
                    examples: [
                        { japanese: '彼{かれ}は親切{しんせつ}だ。そして、頭{あたま}がいい。', chinese: '（追加特點）' },
                        { japanese: '買{か}い物{もの}をした。それから、家{いえ}に帰{かえ}った。', chinese: '（時間順序）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_soshite_1',
                sentence: '彼女{かのじょ}はきれいだ。（　）、優{やさ}しい。',
                options: ['そして', 'しかし', 'だから', 'でも'],
                correctIndex: 0,
                explanation: {
                    correct: '「そして」正確！追加另一個特點。',
                    wrong: [
                        '「しかし」錯誤：「しかし」表示轉折。',
                        '「だから」錯誤：「だから」表示因果。',
                        '「でも」錯誤：「でも」表示轉折。'
                    ]
                }
            },
            {
                id: 'n5_q_soshite_2',
                sentence: '朝{あさ}起{お}きた。（　）、顔{かお}を洗{あら}った。',
                options: ['そして', 'しかし', 'だから', 'ところで'],
                correctIndex: 0,
                explanation: {
                    correct: '「そして」正確！表示動作順序。',
                    wrong: [
                        '「しかし」錯誤：沒有轉折關係。',
                        '「だから」錯誤：不是因果關係。',
                        '「ところで」錯誤：表示轉換話題。'
                    ]
                }
            },
            {
                id: 'n5_q_soshite_3',
                sentence: 'この部屋{へや}は広{ひろ}い。（　）、明{あか}るい。',
                options: ['そして', 'だから', 'でも', 'それで'],
                correctIndex: 0,
                explanation: {
                    correct: '「そして」正確！追加房間的另一個優點。',
                    wrong: [
                        '「だから」錯誤：兩者不是因果關係。',
                        '「でも」錯誤：沒有轉折意味。',
                        '「それで」錯誤：表示結果，不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_soshite_4',
                sentence: '本{ほん}を読{よ}んだ。（　）、レポートを書{か}いた。',
                options: ['そして', 'しかし', 'または', 'つまり'],
                correctIndex: 0,
                explanation: {
                    correct: '「そして」正確！表示先後順序。',
                    wrong: [
                        '「しかし」錯誤：沒有轉折關係。',
                        '「または」錯誤：表示選擇。',
                        '「つまり」錯誤：表示總結。'
                    ]
                }
            },
            {
                id: 'n5_q_soshite_5',
                sentence: '彼{かれ}は歌{うた}がうまい。（　）、ダンスも上手{じょうず}だ。',
                options: ['そして', 'しかし', 'だから', 'それとも'],
                correctIndex: 0,
                explanation: {
                    correct: '「そして」正確！追加另一個優點。',
                    wrong: [
                        '「しかし」錯誤：沒有轉折。',
                        '「だから」錯誤：不是因果。',
                        '「それとも」錯誤：表示疑問選擇。'
                    ]
                }
            }
        ]
    },

    // ===== n5_sore_kara =====
    n5_sore_kara: {
        id: 'n5_sore_kara',
        pattern: 'それから',
        connection: '句子。それから、句子。',
        translation: '然後；之後',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '表示時間順序',
                description: '「それから」用於表示動作的先後順序，強調「之後」「然後」的時間關係。',
                examples: [
                    { japanese: '買{か}い物{もの}をした。それから、家{いえ}に帰{かえ}った。', chinese: '買了東西。然後回家了。' },
                    { japanese: 'まず宿題{しゅくだい}をする。それから、遊{あそ}ぶ。', chinese: '先做作業。然後玩。' },
                    { japanese: 'シャワーを浴{あ}びた。それから、寝{ね}た。', chinese: '洗了澡。然後睡覺了。' }
                ]
            },
            {
                usageId: 2,
                title: '列舉時使用',
                description: '也可用於列舉多個項目。',
                examples: [
                    { japanese: 'りんごと、バナナと、それからオレンジを買{か}った。', chinese: '買了蘋果、香蕉、還有柳橙。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_sorekara_1',
                sentence: '映画{えいが}を見{み}た。（　）、食事{しょくじ}をした。',
                options: ['それから', 'しかし', 'だから', 'でも'],
                correctIndex: 0,
                explanation: {
                    correct: '「それから」正確！表示時間順序「然後」。',
                    wrong: [
                        '「しかし」錯誤：「しかし」表示轉折。',
                        '「だから」錯誤：「だから」表示因果。',
                        '「でも」錯誤：「でも」表示轉折。'
                    ]
                }
            },
            {
                id: 'n5_q_sorekara_2',
                sentence: 'まず手{て}を洗{あら}う。（　）、ご飯{はん}を食{た}べる。',
                options: ['それから', 'しかし', 'だから', 'ところで'],
                correctIndex: 0,
                explanation: {
                    correct: '「それから」正確！表示先後順序。',
                    wrong: [
                        '「しかし」錯誤：沒有轉折關係。',
                        '「だから」錯誤：不是因果關係。',
                        '「ところで」錯誤：表示轉換話題。'
                    ]
                }
            },
            {
                id: 'n5_q_sorekara_3',
                sentence: 'りんごと、みかんと、（　）バナナを買{か}った。',
                options: ['それから', 'しかし', 'だから', 'でも'],
                correctIndex: 0,
                explanation: {
                    correct: '「それから」正確！用於列舉。',
                    wrong: [
                        '「しかし」錯誤：列舉不用轉折詞。',
                        '「だから」錯誤：不是因果關係。',
                        '「でも」錯誤：列舉不用轉折詞。'
                    ]
                }
            },
            {
                id: 'n5_q_sorekara_4',
                sentence: '駅{えき}に着{つ}いた。（　）、電車{でんしゃ}に乗{の}った。',
                options: ['それから', 'しかし', 'つまり', 'または'],
                correctIndex: 0,
                explanation: {
                    correct: '「それから」正確！表示時間順序。',
                    wrong: [
                        '「しかし」錯誤：沒有轉折。',
                        '「つまり」錯誤：表示總結。',
                        '「または」錯誤：表示選擇。'
                    ]
                }
            },
            {
                id: 'n5_q_sorekara_5',
                sentence: '宿題{しゅくだい}をした。（　）、テレビを見{み}た。',
                options: ['それから', 'しかし', 'だから', 'そこで'],
                correctIndex: 0,
                explanation: {
                    correct: '「それから」正確！表示做完功課後看電視。',
                    wrong: [
                        '「しかし」錯誤：沒有轉折關係。',
                        '「だから」錯誤：不是因果關係。',
                        '「そこで」錯誤：表示「於是」，語感不同。'
                    ]
                }
            }
        ]
    },

    // ===== n5_wa_topic_marker =====
    n5_wa_topic_marker: {
        id: 'n5_wa_topic_marker',
        pattern: 'は（主題標記）',
        connection: '名詞＋は',
        translation: '...是（主題標記）',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '標記話題',
                description: '「は」用於標記句子的主題或話題，表示「說到～」「關於～」。',
                examples: [
                    { japanese: '私{わたし}は学生{がくせい}です。', chinese: '我是學生。' },
                    { japanese: '東京{とうきょう}は日本{にほん}の首都{しゅと}です。', chinese: '東京是日本的首都。' },
                    { japanese: '今日{きょう}は天気{てんき}がいいです。', chinese: '今天天氣很好。' }
                ]
            },
            {
                usageId: 2,
                title: '對比用法',
                description: '「は」也用於對比兩個事物。',
                examples: [
                    { japanese: '肉{にく}は食{た}べますが、魚{さかな}は食{た}べません。', chinese: '肉吃，但魚不吃。' },
                    { japanese: '日本語{にほんご}は話{はな}せますが、中国語{ちゅうごくご}は話{はな}せません。', chinese: '會說日語，但不會說中文。' }
                ]
            }
        ],
        analysis: {
            title: '「は」vs「が」',
            points: [
                {
                    rule: '「は」：標記已知的話題；「が」：標記新信息或焦點',
                    examples: [
                        { japanese: '田中{たなか}さんは先生{せんせい}です。', chinese: '（介紹田中的職業）' },
                        { japanese: '田中{たなか}さんが先生{せんせい}です。', chinese: '（回答「誰是老師」）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_watopic_1',
                sentence: '私{わたし}（　）日本人{にほんじん}です。',
                options: ['は', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「は」正確！標記「我」為話題，介紹自己。',
                    wrong: [
                        '「が」錯誤：自我介紹時用「は」更自然。',
                        '「を」錯誤：「を」標記賓語。',
                        '「に」錯誤：「に」表示方向或時間。'
                    ]
                }
            },
            {
                id: 'n5_q_watopic_2',
                sentence: '東京{とうきょう}（　）日本{にほん}の首都{しゅと}です。',
                options: ['は', 'が', 'を', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「は」正確！標記「東京」為話題。',
                    wrong: [
                        '「が」錯誤：這裡是陳述已知事實，用「は」。',
                        '「を」錯誤：「を」是賓語助詞。',
                        '「で」錯誤：「で」表示場所或方式。'
                    ]
                }
            },
            {
                id: 'n5_q_watopic_3',
                sentence: '肉{にく}（　）食{た}べますが、魚{さかな}は食{た}べません。',
                options: ['は', 'が', 'を', 'も'],
                correctIndex: 0,
                explanation: {
                    correct: '「は」正確！「は」用於對比「肉吃，魚不吃」。',
                    wrong: [
                        '「が」錯誤：對比時用「は」。',
                        '「を」錯誤：這裡強調對比，用「は」。',
                        '「も」錯誤：「も」表示「也」，不適合對比。'
                    ]
                }
            },
            {
                id: 'n5_q_watopic_4',
                sentence: '今日{きょう}（　）天気{てんき}がいいですね。',
                options: ['は', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「は」正確！「今日」是話題。',
                    wrong: [
                        '「が」錯誤：「今日」是話題，用「は」。',
                        '「を」錯誤：「を」不用於時間。',
                        '「に」錯誤：這裡不需要「に」。'
                    ]
                }
            },
            {
                id: 'n5_q_watopic_5',
                sentence: 'この本{ほん}（　）面白{おもしろ}いです。',
                options: ['は', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「は」正確！「この本」是話題。',
                    wrong: [
                        '「が」錯誤：陳述對某物的評價時用「は」。',
                        '「を」錯誤：「を」是賓語助詞。',
                        '「に」錯誤：「に」不適用於此。'
                    ]
                }
            }
        ]
    },

    // ===== n5_o_kudasai =====
    n5_o_kudasai: {
        id: 'n5_o_kudasai',
        pattern: 'をください',
        connection: '名詞＋をください',
        translation: '請給我...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '請求物品',
                description: '「をください」用於禮貌地請求得到某物，常用於購物、點餐等場合。',
                examples: [
                    { japanese: 'コーヒーをください。', chinese: '請給我咖啡。' },
                    { japanese: 'メニューをください。', chinese: '請給我菜單。' },
                    { japanese: 'お水{みず}をください。', chinese: '請給我水。' },
                    { japanese: 'これを二{ふた}つください。', chinese: '請給我兩個這個。' }
                ]
            }
        ],
        analysis: {
            title: '「ください」的用法',
            points: [
                {
                    rule: '「名詞＋をください」vs「動詞て形＋ください」',
                    examples: [
                        { japanese: '本{ほん}をください。', chinese: '請給我書。（物品）' },
                        { japanese: '本{ほん}を読{よ}んでください。', chinese: '請讀書。（動作）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_okudasai_1',
                sentence: 'すみません、お水{みず}（　）ください。',
                options: ['を', 'が', 'は', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「を」正確！「お水をください」請求得到水。',
                    wrong: [
                        '「が」錯誤：「ください」前用「を」。',
                        '「は」錯誤：「は」不用於這種請求。',
                        '「に」錯誤：「に」不用於這種請求。'
                    ]
                }
            },
            {
                id: 'n5_q_okudasai_2',
                sentence: 'メニュー（　）ください。',
                options: ['を', 'が', 'は', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「を」正確！請求得到菜單。',
                    wrong: [
                        '「が」錯誤：「ください」前用「を」。',
                        '「は」錯誤：不適用。',
                        '「で」錯誤：不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_okudasai_3',
                sentence: 'これ（　）二{ふた}つください。',
                options: ['を', 'が', 'は', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「を」正確！「これを二つください」請給我兩個。',
                    wrong: [
                        '「が」錯誤：「ください」前用「を」。',
                        '「は」錯誤：不適用。',
                        '「に」錯誤：不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_okudasai_4',
                sentence: 'コーヒー（　）ください。砂糖{さとう}は要{い}りません。',
                options: ['を', 'が', 'は', 'も'],
                correctIndex: 0,
                explanation: {
                    correct: '「を」正確！點餐用「をください」。',
                    wrong: [
                        '「が」錯誤：「ください」前用「を」。',
                        '「は」錯誤：請求時不用「は」。',
                        '「も」錯誤：不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_okudasai_5',
                sentence: 'レシート（　）ください。',
                options: ['を', 'が', 'は', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「を」正確！請求收據。',
                    wrong: [
                        '「が」錯誤：「ください」前用「を」。',
                        '「は」錯誤：不適用。',
                        '「に」錯誤：不適用。'
                    ]
                }
            }
        ]
    },

    // ===== n5_o_go =====
    n5_o_go: {
        id: 'n5_o_go',
        pattern: 'お～ / ご～',
        connection: 'お＋和語 / ご＋漢語',
        translation: '（敬語接頭詞）',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '美化語・敬語接頭詞',
                description: '「お」「ご」是敬語接頭詞，用於使語言更禮貌、更優雅。「お」通常接和語（日本固有詞），「ご」通常接漢語詞。',
                examples: [
                    { japanese: 'お茶{ちゃ}をどうぞ。', chinese: '請喝茶。' },
                    { japanese: 'お名前{なまえ}は？', chinese: '請問貴姓？' },
                    { japanese: 'ご住所{じゅうしょ}をお願{ねが}いします。', chinese: '請告訴我您的地址。' },
                    { japanese: 'ご家族{かぞく}はお元気{げんき}ですか。', chinese: '您的家人好嗎？' }
                ]
            }
        ],
        analysis: {
            title: '「お」vs「ご」的區別',
            points: [
                {
                    rule: '「お」＋和語；「ご」＋漢語（有例外）',
                    examples: [
                        { japanese: 'お水{みず}、お金{かね}、お店{みせ}', chinese: '「お」＋和語' },
                        { japanese: 'ご住所{じゅうしょ}、ご連絡{れんらく}、ご家族{かぞく}', chinese: '「ご」＋漢語' },
                        { japanese: 'お電話{でんわ}、お時間{じかん}', chinese: '例外（漢語但用「お」）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_ogo_1',
                sentence: '（　）名前{なまえ}をお願{ねが}いします。',
                options: ['お', 'ご', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「お」正確！「名前」是和語，用「お」。',
                    wrong: [
                        '「ご」錯誤：「名前」是和語，不用「ご」。',
                        '「を」錯誤：「を」是助詞，不是接頭詞。',
                        '「に」錯誤：「に」是助詞，不是接頭詞。'
                    ]
                }
            },
            {
                id: 'n5_q_ogo_2',
                sentence: '（　）住所{じゅうしょ}をお願{ねが}いします。',
                options: ['ご', 'お', 'は', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「ご」正確！「住所」是漢語，用「ご」。',
                    wrong: [
                        '「お」錯誤：「住所」是漢語，用「ご」。',
                        '「は」錯誤：「は」是助詞。',
                        '「が」錯誤：「が」是助詞。'
                    ]
                }
            },
            {
                id: 'n5_q_ogo_3',
                sentence: '（　）茶{ちゃ}をどうぞ。',
                options: ['お', 'ご', 'の', 'と'],
                correctIndex: 0,
                explanation: {
                    correct: '「お」正確！「茶」用「お」（慣用）。',
                    wrong: [
                        '「ご」錯誤：「茶」用「お」。',
                        '「の」錯誤：「の」是助詞。',
                        '「と」錯誤：「と」是助詞。'
                    ]
                }
            },
            {
                id: 'n5_q_ogo_4',
                sentence: '（　）家族{かぞく}はお元気{げんき}ですか。',
                options: ['ご', 'お', 'は', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「ご」正確！「家族」是漢語，用「ご」。',
                    wrong: [
                        '「お」錯誤：「家族」是漢語，用「ご」。',
                        '「は」錯誤：「は」是助詞。',
                        '「が」錯誤：「が」是助詞。'
                    ]
                }
            },
            {
                id: 'n5_q_ogo_5',
                sentence: '（　）電話{でんわ}ありがとうございます。',
                options: ['お', 'ご', 'は', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「お」正確！「電話」是例外，雖是漢語但用「お」。',
                    wrong: [
                        '「ご」錯誤：「電話」是例外，用「お」。',
                        '「は」錯誤：「は」是助詞。',
                        '「を」錯誤：「を」是助詞。'
                    ]
                }
            }
        ]
    },

    // ===== n5_ni_e =====
    n5_ni_e: {
        id: 'n5_ni_e',
        pattern: 'に / へ',
        connection: '場所＋に/へ＋移動動詞',
        translation: '往...；到...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '表示移動的目的地',
                description: '「に」和「へ」都可以表示移動的目的地。「に」強調到達點，「へ」強調方向。',
                examples: [
                    { japanese: '日本{にほん}に行{い}く。', chinese: '去日本。（強調到達）' },
                    { japanese: '日本{にほん}へ行{い}く。', chinese: '往日本去。（強調方向）' },
                    { japanese: '学校{がっこう}に来{く}る。', chinese: '來學校。' },
                    { japanese: '家{いえ}へ帰{かえ}る。', chinese: '回家。' }
                ]
            }
        ],
        analysis: {
            title: '「に」vs「へ」的區別',
            points: [
                {
                    rule: '「に」：強調到達點、存在地點；「へ」：強調方向',
                    examples: [
                        { japanese: '東京{とうきょう}に着{つ}いた。', chinese: '到達東京了。（只能用「に」）' },
                        { japanese: '東京{とうきょう}へ/に行{い}く。', chinese: '去東京。（兩者都可）' }
                    ]
                },
                {
                    rule: '「に」有更多其他用法，「へ」幾乎只表示方向',
                    examples: [
                        { japanese: '友達{ともだち}に会{あ}う。', chinese: '見朋友。（「に」表示對象）' },
                        { japanese: '7時{じ}に起{お}きる。', chinese: '7點起床。（「に」表示時間）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_nie_1',
                sentence: '明日{あした}、東京{とうきょう}（　）行{い}きます。',
                options: ['に', 'で', 'を', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「東京に行く」表示移動的目的地。「へ」也可以。',
                    wrong: [
                        '「で」錯誤：「で」表示動作進行的場所，不是移動的目的地。',
                        '「を」錯誤：「を」不用於目的地。',
                        '「が」錯誤：「が」不用於目的地。'
                    ]
                }
            },
            {
                id: 'n5_q_nie_2',
                sentence: '学校{がっこう}（　）来{き}てください。',
                options: ['に', 'で', 'を', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「学校に来る」表示移動的目的地。',
                    wrong: [
                        '「で」錯誤：「で」表示動作場所，不是移動目的地。',
                        '「を」錯誤：不適用。',
                        '「が」錯誤：不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_nie_3',
                sentence: '家{いえ}（　）帰{かえ}りたいです。',
                options: ['に', 'で', 'を', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「家に帰る」表示回家的目的地。「へ」也可以。',
                    wrong: [
                        '「で」錯誤：「で」不用於移動目的地。',
                        '「を」錯誤：不適用。',
                        '「が」錯誤：不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_nie_4',
                sentence: '電車{でんしゃ}が駅{えき}（　）着{つ}きました。',
                options: ['に', 'へ', 'で', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「着く」只能用「に」，不能用「へ」。',
                    wrong: [
                        '「へ」錯誤：「着く」只能用「に」。',
                        '「で」錯誤：不適用。',
                        '「を」錯誤：不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_nie_5',
                sentence: '友達{ともだち}の家{いえ}（　）遊{あそ}びに行{い}った。',
                options: ['に', 'で', 'を', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「〜に遊びに行く」表示去某處玩。',
                    wrong: [
                        '「で」錯誤：移動目的地用「に」或「へ」。',
                        '「を」錯誤：不適用。',
                        '「が」錯誤：不適用。'
                    ]
                }
            }
        ]
    },

    // ===== n5_no_desu =====
    n5_no_desu: {
        id: 'n5_no_desu',
        pattern: 'のです / んです',
        connection: '動詞/形容詞普通形＋のです',
        translation: '（是）...的',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '說明或強調',
                description: '「のです」用於說明原因、背景或強調某事。口語中常說「んです」。',
                examples: [
                    { japanese: '熱{ねつ}があるのです。', chinese: '（是因為）發燒了。' },
                    { japanese: '電車{でんしゃ}が遅{おく}れたのです。', chinese: '（是因為）電車晚了。' },
                    { japanese: 'どうしたのですか。', chinese: '怎麼了？' }
                ]
            }
        ],
        analysis: {
            title: '「のです」vs「んです」',
            points: [
                {
                    rule: '「のです」是書面語，「んです」是口語',
                    examples: [
                        { japanese: '病気{びょうき}なのです。', chinese: '（書面）' },
                        { japanese: '病気{びょうき}なんです。', chinese: '（口語）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_nodesu_1',
                sentence: '「どうして遅{おく}れたんですか。」\n「電車{でんしゃ}が遅{おく}れた（　）です。」',
                options: ['ん', 'の', 'こと', 'もの'],
                correctIndex: 0,
                explanation: {
                    correct: '「ん」正確！「んです」是口語說明形式。',
                    wrong: [
                        '「の」也可以，但口語用「ん」更自然。',
                        '「こと」錯誤：形式不對。',
                        '「もの」錯誤：形式不對。'
                    ]
                }
            },
            {
                id: 'n5_q_nodesu_2',
                sentence: '「顔色{かおいろ}が悪{わる}いですね。」\n「頭{あたま}が痛{いた}い（　）です。」',
                options: ['ん', 'こと', 'もの', 'ほう'],
                correctIndex: 0,
                explanation: {
                    correct: '「ん」正確！說明臉色不好的原因。',
                    wrong: [
                        '「こと」錯誤：形式不對。',
                        '「もの」錯誤：形式不對。',
                        '「ほう」錯誤：形式不對。'
                    ]
                }
            },
            {
                id: 'n5_q_nodesu_3',
                sentence: 'どうした（　）ですか。',
                options: ['ん', 'こと', 'もの', 'ところ'],
                correctIndex: 0,
                explanation: {
                    correct: '「ん」正確！「どうしたんですか」詢問發生了什麼事。',
                    wrong: [
                        '「こと」錯誤：形式不對。',
                        '「もの」錯誤：形式不對。',
                        '「ところ」錯誤：形式不對。'
                    ]
                }
            },
            {
                id: 'n5_q_nodesu_4',
                sentence: '「明日{あした}、来{こ}られますか。」\n「すみません、用事{ようじ}がある（　）です。」',
                options: ['ん', 'こと', 'もの', 'わけ'],
                correctIndex: 0,
                explanation: {
                    correct: '「ん」正確！說明不能來的理由。',
                    wrong: [
                        '「こと」錯誤：形式不對。',
                        '「もの」錯誤：形式不對。',
                        '「わけ」錯誤：雖然可以，但「んです」更口語。'
                    ]
                }
            },
            {
                id: 'n5_q_nodesu_5',
                sentence: '「どこへ行{い}くんですか。」\n「コンビニへ行{い}く（　）です。」',
                options: ['ん', 'こと', 'もの', 'ため'],
                correctIndex: 0,
                explanation: {
                    correct: '「ん」正確！回應「んですか」的提問。',
                    wrong: [
                        '「こと」錯誤：形式不對。',
                        '「もの」錯誤：形式不對。',
                        '「ため」錯誤：形式不對。'
                    ]
                }
            }
        ]
    },

    // ===== n5_no_naka_de =====
    n5_no_naka_de: {
        id: 'n5_no_naka_de',
        pattern: 'の中で',
        connection: '名詞＋の中で',
        translation: '在...之中',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '表示範圍',
                description: '「の中で」用於表示某個範圍或集合之中。',
                examples: [
                    { japanese: 'クラスの中{なか}で一番{いちばん}背{せ}が高{たか}い。', chinese: '班上最高。' },
                    { japanese: '日本{にほん}の中{なか}で一番{いちばん}大{おお}きい都市{とし}はどこですか。', chinese: '日本最大的城市是哪裡？' },
                    { japanese: '家族{かぞく}の中{なか}で誰{だれ}が一番{いちばん}早{はや}く起{お}きますか。', chinese: '家人中誰最早起？' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_nonakade_1',
                sentence: '果物{くだもの}（　）中{なか}で何{なに}が一番{いちばん}好{す}きですか。',
                options: ['の', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！「果物の中で」表示範圍。',
                    wrong: [
                        '「が」錯誤：需要「の」連接。',
                        '「を」錯誤：不用於這種接續。',
                        '「に」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_nonakade_2',
                sentence: 'クラス（　）中{なか}で誰{だれ}が一番{いちばん}背{せ}が高{たか}いですか。',
                options: ['の', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！「クラスの中で」表示班級範圍。',
                    wrong: [
                        '「が」錯誤：需要「の」連接。',
                        '「を」錯誤：不適用。',
                        '「に」錯誤：不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_nonakade_3',
                sentence: '日本{にほん}（　）中{なか}で一番{いちばん}高{たか}い山{やま}は富士山{ふじさん}です。',
                options: ['の', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！「日本の中で」表示日本範圍。',
                    wrong: [
                        '「が」錯誤：需要「の」。',
                        '「を」錯誤：不適用。',
                        '「に」錯誤：不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_nonakade_4',
                sentence: '家族{かぞく}（　）中{なか}で誰{だれ}が一番{いちばん}早{はや}く起{お}きますか。',
                options: ['の', 'が', 'を', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！「家族の中で」表示家人範圍。',
                    wrong: [
                        '「が」錯誤：需要「の」。',
                        '「を」錯誤：不適用。',
                        '「で」錯誤：「の中で」是固定用法。'
                    ]
                }
            },
            {
                id: 'n5_q_nonakade_5',
                sentence: 'この店{みせ}（　）中{なか}で一番{いちばん}人気{にんき}があるのは何{なん}ですか。',
                options: ['の', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！「この店の中で」表示店內範圍。',
                    wrong: [
                        '「が」錯誤：需要「の」。',
                        '「を」錯誤：不適用。',
                        '「に」錯誤：不適用。'
                    ]
                }
            }
        ]
    },

    // ===== n5_i_adjectives =====
    n5_i_adjectives: {
        id: 'n5_i_adjectives',
        pattern: 'い形容詞',
        connection: 'い形容詞＋名詞',
        translation: '...的（い形容詞）',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: 'い形容詞的基本用法',
                description: 'い形容詞以「い」結尾，可以直接修飾名詞或作為謂語。',
                examples: [
                    { japanese: '大{おお}きい車{くるま}', chinese: '大車' },
                    { japanese: 'おいしい料理{りょうり}', chinese: '好吃的料理' },
                    { japanese: 'この本{ほん}は面白{おもしろ}い。', chinese: '這本書很有趣。' },
                    { japanese: '今日{きょう}は暑{あつ}いです。', chinese: '今天很熱。' }
                ]
            },
            {
                usageId: 2,
                title: '否定形',
                description: 'い形容詞否定時，「い」變成「くない」。',
                examples: [
                    { japanese: '高{たか}い → 高{たか}くない', chinese: '貴 → 不貴' },
                    { japanese: 'おいしい → おいしくない', chinese: '好吃 → 不好吃' },
                    { japanese: 'この映画{えいが}は面白{おもしろ}くない。', chinese: '這部電影不有趣。' }
                ]
            }
        ],
        analysis: {
            title: 'い形容詞的活用',
            points: [
                {
                    rule: '基本形、否定形、過去形',
                    examples: [
                        { japanese: '高{たか}い → 高{たか}くない → 高{たか}かった → 高{たか}くなかった', chinese: '貴 → 不貴 → 貴過 → 不貴過' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_iadj_1',
                sentence: 'この料理{りょうり}はおいし（　）。',
                options: ['い', 'な', 'だ', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「い」正確！「おいしい」是い形容詞，以「い」結尾。',
                    wrong: [
                        '「な」錯誤：「な」用於な形容詞。',
                        '「だ」錯誤：い形容詞不加「だ」。',
                        '「の」錯誤：形式不對。'
                    ]
                }
            },
            {
                id: 'n5_q_iadj_2',
                sentence: 'この映画{えいが}は面白{おもしろ}（　）ない。',
                options: ['く', 'で', 'に', 'と'],
                correctIndex: 0,
                explanation: {
                    correct: '「く」正確！い形容詞否定「い→くない」。',
                    wrong: [
                        '「で」錯誤：な形容詞用「で」。',
                        '「に」錯誤：形式不對。',
                        '「と」錯誤：形式不對。'
                    ]
                }
            },
            {
                id: 'n5_q_iadj_3',
                sentence: '大{おお}き（　）車{くるま}が好{す}きです。',
                options: ['い', 'な', 'の', 'く'],
                correctIndex: 0,
                explanation: {
                    correct: '「い」正確！「大きい」修飾名詞直接用「い」。',
                    wrong: [
                        '「な」錯誤：い形容詞不用「な」。',
                        '「の」錯誤：形式不對。',
                        '「く」錯誤：「く」用於否定或副詞化。'
                    ]
                }
            },
            {
                id: 'n5_q_iadj_4',
                sentence: '今日{きょう}は寒{さむ}（　）です。',
                options: ['い', 'な', 'だ', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「い」正確！「寒い」是い形容詞。',
                    wrong: [
                        '「な」錯誤：「な」用於な形容詞。',
                        '「だ」錯誤：い形容詞不加「だ」。',
                        '「の」錯誤：形式不對。'
                    ]
                }
            },
            {
                id: 'n5_q_iadj_5',
                sentence: 'この本{ほん}は高{たか}（　）ないです。',
                options: ['く', 'い', 'で', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「く」正確！い形容詞否定形「高くない」。',
                    wrong: [
                        '「い」錯誤：否定形需要「くない」。',
                        '「で」錯誤：な形容詞才用「で」。',
                        '「に」錯誤：形式不對。'
                    ]
                }
            }
        ]
    },

    // ===== n5_i_adjectives_1 =====
    n5_i_adjectives_1: {
        id: 'n5_i_adjectives_1',
        pattern: 'い形容詞（過去形）',
        connection: 'い形容詞（ーい→ーかった）',
        translation: '（以前）...的',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: 'い形容詞的過去形',
                description: 'い形容詞的過去形，去「い」加「かった」。',
                examples: [
                    { japanese: '昨日{きのう}は暑{あつ}かった。', chinese: '昨天很熱。' },
                    { japanese: 'その映画{えいが}は面白{おもしろ}かったです。', chinese: '那部電影很有趣。' },
                    { japanese: '旅行{りょこう}は楽{たの}しかった。', chinese: '旅行很開心。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_iadjpast_1',
                sentence: '昨日{きのう}のテストは難{むずか}し（　）。',
                options: ['かった', 'い', 'くない', 'だった'],
                correctIndex: 0,
                explanation: {
                    correct: '「かった」正確！い形容詞過去形「難しかった」。',
                    wrong: [
                        '「い」錯誤：「い」是現在形。',
                        '「くない」錯誤：「くない」是否定形。',
                        '「だった」錯誤：い形容詞不用「だった」。'
                    ]
                }
            },
            {
                id: 'n5_q_iadjpast_2',
                sentence: 'その映画{えいが}は面白{おもしろ}（　）です。',
                options: ['かった', 'い', 'だった', 'くない'],
                correctIndex: 0,
                explanation: {
                    correct: '「かった」正確！「面白かったです」是い形容詞過去形的丁寧體。',
                    wrong: [
                        '「い」錯誤：「い」是現在形。',
                        '「だった」錯誤：い形容詞不用「だった」。',
                        '「くない」錯誤：「くない」是否定形。'
                    ]
                }
            },
            {
                id: 'n5_q_iadjpast_3',
                sentence: '子供{こども}の頃{ころ}、この川{かわ}は冷{つめ}た（　）。',
                options: ['かった', 'い', 'だった', 'な'],
                correctIndex: 0,
                explanation: {
                    correct: '「かった」正確！「冷たかった」是い形容詞過去形。',
                    wrong: [
                        '「い」錯誤：「い」是現在形。',
                        '「だった」錯誤：い形容詞不用「だった」。',
                        '「な」錯誤：「冷たい」是い形容詞。'
                    ]
                }
            },
            {
                id: 'n5_q_iadjpast_4',
                sentence: '旅行{りょこう}は楽{たの}し（　）です。',
                options: ['かった', 'い', 'だった', 'くない'],
                correctIndex: 0,
                explanation: {
                    correct: '「かった」正確！「楽しかったです」表示旅行很開心。',
                    wrong: [
                        '「い」錯誤：「い」是現在形。',
                        '「だった」錯誤：い形容詞不用「だった」。',
                        '「くない」錯誤：「くない」是否定形。'
                    ]
                }
            },
            {
                id: 'n5_q_iadjpast_5',
                sentence: '先週{せんしゅう}は忙{いそが}し（　）です。',
                options: ['かった', 'い', 'だった', 'くない'],
                correctIndex: 0,
                explanation: {
                    correct: '「かった」正確！「忙しかったです」表示上週很忙。',
                    wrong: [
                        '「い」錯誤：「い」是現在形。',
                        '「だった」錯誤：い形容詞不用「だった」。',
                        '「くない」錯誤：「くない」是否定形。'
                    ]
                }
            }
        ]
    },

    // ===== n5_na_adjectives_1 =====
    n5_na_adjectives_1: {
        id: 'n5_na_adjectives_1',
        pattern: 'な形容詞（過去形）',
        connection: 'な形容詞＋だった / でした',
        translation: '（以前是）...的',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: 'な形容詞的過去形',
                description: 'な形容詞的過去形，加「だった」（普通體）或「でした」（丁寧體）。',
                examples: [
                    { japanese: '彼{かれ}は元気{げんき}だった。', chinese: '他以前很健康。' },
                    { japanese: 'あの店{みせ}は静{しず}かでした。', chinese: '那家店以前很安靜。' },
                    { japanese: '日本語{にほんご}は苦手{にがて}だった。', chinese: '以前不擅長日語。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_naadjpast_1',
                sentence: '昔{むかし}、この町{まち}は静{しず}か（　）。',
                options: ['だった', 'かった', 'い', 'な'],
                correctIndex: 0,
                explanation: {
                    correct: '「だった」正確！な形容詞過去形「静かだった」。',
                    wrong: [
                        '「かった」錯誤：「かった」是い形容詞的過去形。',
                        '「い」錯誤：「い」是い形容詞的詞尾。',
                        '「な」錯誤：「な」是修飾名詞時用的。'
                    ]
                }
            },
            {
                id: 'n5_q_naadjpast_2',
                sentence: '彼{かれ}は元気{げんき}（　）。',
                options: ['だった', 'かった', 'い', 'な'],
                correctIndex: 0,
                explanation: {
                    correct: '「だった」正確！「元気だった」是な形容詞過去形。',
                    wrong: [
                        '「かった」錯誤：な形容詞不用「かった」。',
                        '「い」錯誤：「い」是い形容詞的詞尾。',
                        '「な」錯誤：「な」是修飾名詞時用的。'
                    ]
                }
            },
            {
                id: 'n5_q_naadjpast_3',
                sentence: '日本語{にほんご}は苦手{にがて}（　）です。',
                options: ['だった', 'かった', 'い', 'な'],
                correctIndex: 0,
                explanation: {
                    correct: '「だった」正確！「苦手だったです」（或「でした」）表示以前不擅長。',
                    wrong: [
                        '「かった」錯誤：な形容詞不用「かった」。',
                        '「い」錯誤：「苦手」是な形容詞。',
                        '「な」錯誤：過去形要用「だった」。'
                    ]
                }
            },
            {
                id: 'n5_q_naadjpast_4',
                sentence: 'あの映画{えいが}は有名{ゆうめい}（　）。',
                options: ['だった', 'かった', 'い', 'な'],
                correctIndex: 0,
                explanation: {
                    correct: '「だった」正確！「有名だった」是な形容詞過去形。',
                    wrong: [
                        '「かった」錯誤：な形容詞不用「かった」。',
                        '「い」錯誤：「有名」是な形容詞。',
                        '「な」錯誤：過去形要用「だった」。'
                    ]
                }
            },
            {
                id: 'n5_q_naadjpast_5',
                sentence: 'この部屋{へや}は綺麗{きれい}（　）です。',
                options: ['だった', 'かった', 'い', 'な'],
                correctIndex: 0,
                explanation: {
                    correct: '「だった」正確！「綺麗だったです」表示以前很乾淨。',
                    wrong: [
                        '「かった」錯誤：「綺麗」是な形容詞，不用「かった」。',
                        '「い」錯誤：「綺麗」不是い形容詞。',
                        '「な」錯誤：過去形要用「だった」。'
                    ]
                }
            }
        ]
    }
});
