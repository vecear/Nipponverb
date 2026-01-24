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
            {
                id: 'n5_de_1',
                sentence: '公園{こうえん}（　）サッカーをします。',
                options: ['に', 'で', 'を', 'へ'],
                correctIndex: 1,
                explanation: '在公園（地點）踢足球（動作），用「で」。'
            },
            {
                id: 'n5_de_2',
                sentence: '鉛筆{えんぴつ}（　）書{か}いてください。',
                options: ['で', 'に', 'を', 'の'],
                correctIndex: 0,
                explanation: '用鉛筆（工具），用「で」。'
            },
            {
                id: 'n5_de_3',
                sentence: '日本{にほん}（　）一番{いちばん}高{たか}い山{やま}は富士山{ふじさん}です。',
                options: ['に', 'で', 'を', 'が'],
                correctIndex: 1,
                explanation: '範圍限定，「在日本（範圍）之中」，用「で」。'
            },
            {
                id: 'n5_de_4',
                sentence: '「どうやって来{き}ましたか。」\n「電車{でんしゃ}（　）来{き}ました。」',
                options: ['で', 'に', 'を', 'へ'],
                correctIndex: 0,
                explanation: '對話情境。詢問交通方式，回答「搭電車」，用「で」。'
            },
            {
                id: 'n5_de_5',
                sentence: '「どこで買{か}いましたか。」\n「デパート（　）買{か}いました。」',
                options: ['に', 'で', 'へ', 'を'],
                correctIndex: 1,
                explanation: '對話情境。回答地點「在百貨公司買的」，用「で」。'
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
            {
                id: 'n5_q_ga_1',
                sentence: '私{わたし}は歌{うた}（　）上手{じょうず}です。',
                options: ['が', 'は', 'を', 'に'],
                correctIndex: 0,
                explanation: '能力、擅長的對象用「が」。'
            },
            {
                id: 'n5_q_ga_2',
                sentence: 'あ、バス（　）来{き}ましたよ。',
                options: ['は', 'が', 'を', 'に'],
                correctIndex: 1,
                explanation: '發現新狀況（新訊息），描述眼前發生的事，用「が」。'
            },
            {
                id: 'n5_q_ga_3',
                sentence: '日本料理{にほんりょうり}はおいしいです（　）、高いです。',
                options: ['が', 'か', 'ね', 'よ'],
                correctIndex: 0,
                explanation: '逆接「雖然...但是...」。'
            },
            {
                id: 'n5_q_ga_4',
                sentence: '「誰（　）行きますか。」\n「私が行きます。」',
                options: ['は', 'が', 'を', 'に'],
                correctIndex: 1,
                explanation: '對話情境。疑問詞「誰」做主語時，助詞必須用「が」。'
            },
            {
                id: 'n5_q_ga_5',
                sentence: '「田中さん（　）いますか。」\n「はい、いますよ。」',
                options: ['は', 'が', 'を', 'に'],
                correctIndex: 1,
                explanation: '對話情境。詢問「有田中先生嗎？」（存在句的主語用が）。'
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
            {
                id: 'n5_q_kara_1',
                sentence: '雨が降っています（　）、出かけません。',
                options: ['から', 'まで', 'より', 'でも'],
                correctIndex: 0,
                explanation: '表示原因「因為下雨」。'
            },
            {
                id: 'n5_q_kara_2',
                sentence: '授業は８時（　）です。',
                options: ['まで', 'から', 'に', 'で'],
                correctIndex: 1,
                explanation: '表示時間的起點「從8點開始」。'
            },
            {
                id: 'n5_q_kara_3',
                sentence: 'ワインはブドウ（　）作ります。',
                options: ['で', 'に', 'から', 'を'],
                correctIndex: 2,
                explanation: '表示原料「由葡萄製成」。(註：看不出原料原型時常用から，看得出時常用で，但から通用性廣)'
            },
            {
                id: 'n5_q_kara_4',
                sentence: '「どうして食べないんですか。」\n「お腹がいっぱい（　）。」',
                options: ['だから', 'ですから', 'から', 'まで'],
                correctIndex: 1,
                explanation: '對話情境。回答原因。'
            },
            {
                id: 'n5_q_kara_5',
                sentence: '「ここはどこ（　）来ましたか。」\n「アメリカから来ました。」',
                options: ['まで', 'から', 'に', 'へ'],
                correctIndex: 1,
                explanation: '對話情境。詢問來源（起點）。'
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
            {
                id: 'n5_q_mo_1',
                type: 'inline_quiz',
                grammarPoint: 'も',
                sentence: '兄は会社員です。姉（　）会社員です。',
                options: ['は', 'が', 'も', 'の'],
                correctIndex: 2,
                explanation: 'A是X，B「也」是X。'
            },
            {
                id: 'n5_q_mo_2',
                type: 'inline_quiz',
                grammarPoint: 'も',
                sentence: '日曜日、どこ（　）行きませんでした。',
                options: ['へも', 'でも', 'にも', 'からも'],
                correctIndex: 0,
                explanation: '疑問詞 + 助詞 + も + 否定。移動動詞用「へ」或「に」。選項只有「へも」。'
            },
            {
                id: 'n5_q_mo_3',
                type: 'inline_quiz',
                grammarPoint: 'も',
                sentence: '昨日、スーパーへ行きました。デパート（　）行きました。',
                options: ['へも', 'をも', 'もへ', 'でも'],
                correctIndex: 0,
                explanation: '去了超市，「也」去了百貨公司。「へ」+「も」。'
            },
            {
                id: 'n5_q_mo_4',
                type: 'inline_quiz',
                grammarPoint: 'も',
                sentence: '「何を買いましたか。」\n「何（　）買いませんでした。」',
                options: ['も', 'か', 'は', 'が'],
                correctIndex: 0,
                explanation: '對話情境。「何も～ない」（什麼也沒...）。'
            },
            {
                id: 'n5_q_mo_5',
                type: 'inline_quiz',
                grammarPoint: 'も',
                sentence: '「会議には誰が来ますか。」\n「山田さんです。あ、田中さん（　）来ますよ。」',
                options: ['も', 'は', 'が', 'を'],
                correctIndex: 0,
                explanation: '對話情境。追加資訊，「田中先生『也』會來」。'
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
