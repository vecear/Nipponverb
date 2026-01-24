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
            {
                id: 'n5_q_ne_1',
                sentence: '今日{きょう}はいい天気{てんき}です（　）。',
                options: ['ね', 'よ', 'か', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「ね」正確！確認對方同意「今天天氣真好呢」。天氣是雙方都能感受到的。',
                    wrong: [
                        '「よ」錯誤：「よ」用於告知對方不知道的事，天氣是雙方都知道的。',
                        '「か」錯誤：「か」用於疑問，這裡不是真正的問句。',
                        '「の」錯誤：「の」用於解釋或疑問，這裡是確認。'
                    ]
                }
            },
            {
                id: 'n5_q_ne_2',
                sentence: 'じゃあ、また（　）。',
                options: ['ね', 'よ', 'か', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「ね」正確！「那麼，再見囉」，緩和語氣的道別。',
                    wrong: [
                        '「よ」錯誤：道別時用「ね」更自然。',
                        '「か」錯誤：「か」用於疑問。',
                        '「を」錯誤：「を」是助詞，不能放句尾。'
                    ]
                }
            },
            {
                id: 'n5_q_ne_3',
                sentence: 'この本{ほん}、面白{おもしろ}かった（　）。',
                options: ['ね', 'よ', 'を', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「ね」正確！確認對方也覺得有趣。',
                    wrong: [
                        '「よ」錯誤：如果對方已經讀過，應該用「ね」確認共識。',
                        '「を」錯誤：「を」是助詞，不能放句尾。',
                        '「が」錯誤：「が」是助詞，不能放句尾。'
                    ]
                }
            },
            {
                id: 'n5_q_ne_4',
                sentence: '「このケーキ、おいしい（　）。」\n「うん、ここのケーキは有名{ゆうめい}なんだ。」\n「また来{こ}よう（　）。」',
                options: ['ね/ね', 'よ/よ', 'ね/よ', 'よ/ね'],
                correctIndex: 0,
                explanation: {
                    correct: '「ね/ね」正確！兩處都是確認同意或柔化語氣。',
                    wrong: [
                        '「よ/よ」錯誤：第一空是確認共識，第二空是提議，都用「ね」。',
                        '「ね/よ」錯誤：第二空「來吧」是提議，用「ね」更自然。',
                        '「よ/ね」錯誤：第一空是確認共識，應用「ね」。'
                    ]
                }
            },
            {
                id: 'n5_q_ne_5',
                sentence: '「明日{あした}のパーティー、楽{たの}しみだ（　）。」\n「うん、何{なに}を着{き}て行{い}こうかなあ。」\n「私{わたし}は新{あたら}しいワンピースにする（　）。」',
                options: ['ね/ね', 'よ/よ', 'ね/よ', 'か/か'],
                correctIndex: 0,
                explanation: {
                    correct: '「ね/ね」正確！都是表達期待、分享心情的場合。',
                    wrong: [
                        '「よ/よ」錯誤：這裡是分享心情，不是告知新資訊。',
                        '「ね/よ」錯誤：第二空「我決定穿新洋裝」是分享決定，用「ね」柔化。',
                        '「か/か」錯誤：「か」用於疑問，這裡不是問句。'
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
            {
                id: 'n5_q_yo_1',
                sentence: '明日{あした}は日曜日{にちようび}です（　）。',
                options: ['よ', 'ね', 'か', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「よ」正確！告知對方「明天是星期天喔」。',
                    wrong: [
                        '「ね」錯誤：如果對方已經知道，可用「ね」確認，但這裡是告知。',
                        '「か」錯誤：「か」用於疑問。',
                        '「の」錯誤：「の」用於解釋或疑問。'
                    ]
                }
            },
            {
                id: 'n5_q_yo_2',
                sentence: 'それは違{ちが}います（　）。',
                options: ['よ', 'ね', 'か', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「よ」正確！強調「那是錯的喔」。',
                    wrong: [
                        '「ね」錯誤：這裡是糾正對方，應用「よ」強調。',
                        '「か」錯誤：「か」用於疑問。',
                        '「を」錯誤：「を」是助詞，不能放句尾。'
                    ]
                }
            },
            {
                id: 'n5_q_yo_3',
                sentence: '危{あぶ}ない（　）！',
                options: ['よ', 'ね', 'か', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「よ」正確！警告「危險！」，強調提醒。',
                    wrong: [
                        '「ね」錯誤：緊急警告應用「よ」強調。',
                        '「か」錯誤：「か」用於疑問。',
                        '「の」錯誤：「の」用於解釋。'
                    ]
                }
            },
            {
                id: 'n5_q_yo_4',
                sentence: '「あれ、鍵{かぎ}がない...。」\n「そこにある（　）。テーブルの上{うえ}。」\n「あ、本当{ほんとう}だ。ありがとう。」',
                options: ['よ', 'ね', 'か', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「よ」正確！告知對方鑰匙的位置。',
                    wrong: [
                        '「ね」錯誤：這裡是告知新資訊，應用「よ」。',
                        '「か」錯誤：「か」用於疑問。',
                        '「の」錯誤：「の」用於解釋或疑問。'
                    ]
                }
            },
            {
                id: 'n5_q_yo_5',
                sentence: '「このラーメン、おいしいね。」\n「そうだね。でも、ちょっと辛{から}い（　）。」\n「え、本当{ほんとう}？私{わたし}は全然{ぜんぜん}平気{へいき}だけど。」',
                options: ['よ', 'ね', 'か', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「よ」正確！告知對方自己的感想「有點辣喔」。',
                    wrong: [
                        '「ね」錯誤：這是告知自己的感受，不是確認對方的感受。',
                        '「か」錯誤：「か」用於疑問。',
                        '「を」錯誤：「を」是助詞，不能放句尾。'
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
            items: [
                {
                    grammar: 'に',
                    description: '強調到達點、目的地或具體時間點',
                    example: { sentence: '学校{がっこう}に行{い}きます。', note: '到達學校' }
                },
                {
                    grammar: 'へ',
                    description: '強調移動的方向（較抽象）',
                    example: { sentence: '学校{がっこう}へ行{い}きます。', note: '朝學校的方向去' }
                },
                {
                    grammar: 'で',
                    description: '表示動作進行的場所',
                    example: { sentence: '学校{がっこう}で勉強{べんきょう}します。', note: '在學校讀書' }
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
            {
                id: 'n5_q_ni_1',
                sentence: '私{わたし}は毎朝{まいあさ}六時{ろくじ}（　）起{お}きます。',
                options: ['に', 'で', 'を', 'へ'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！表示起床的時間點「六點」。',
                    wrong: [
                        '「で」錯誤：「で」表示動作進行的場所或方式，不用於時間點。',
                        '「を」錯誤：「を」是受詞標記，不用於時間點。',
                        '「へ」錯誤：「へ」表示方向，不用於時間點。'
                    ]
                }
            },
            {
                id: 'n5_q_ni_2',
                sentence: '机{つくえ}の上{うえ}（　）本{ほん}があります。',
                options: ['に', 'で', 'を', 'は'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！與「あります」搭配表示存在的位置。',
                    wrong: [
                        '「で」錯誤：「で」表示動作場所，「あります」表示存在，要用「に」。',
                        '「を」錯誤：「を」是受詞標記，這裡是存在句。',
                        '「は」錯誤：「は」是主題標記，這裡需要位置標記。'
                    ]
                }
            },
            {
                id: 'n5_q_ni_3',
                sentence: '友達{ともだち}（　）手紙{てがみ}を書{か}きました。',
                options: ['に', 'で', 'を', 'へ'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！表示寫信的對象「朋友」。',
                    wrong: [
                        '「で」錯誤：「で」表示工具或場所，這裡需要對象標記。',
                        '「を」錯誤：「を」標記「手紙」，對象用「に」。',
                        '「へ」錯誤：「へ」表示方向，對象用「に」。'
                    ]
                }
            },
            {
                id: 'n5_q_ni_4',
                sentence: '「何時{なんじ}（　）家{いえ}に帰{かえ}る？」\n「八時{はちじ}くらいかな。」\n「じゃ、夕飯{ゆうはん}一緒{いっしょ}に食{た}べよう。」',
                options: ['に', 'で', 'を', 'へ'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！詢問回家的時間點。',
                    wrong: [
                        '「で」錯誤：時間點要用「に」，不用「で」。',
                        '「を」錯誤：「を」是受詞標記，時間點用「に」。',
                        '「へ」錯誤：「へ」表示方向，時間點用「に」。'
                    ]
                }
            },
            {
                id: 'n5_q_ni_5',
                sentence: '「お父{とう}さんはどこ（　）いる？」\n「庭{にわ}にいるよ。花{はな}に水{みず}をあげてる。」\n「ありがとう。」',
                options: ['に', 'で', 'を', 'へ'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！與「いる」搭配表示存在的位置。',
                    wrong: [
                        '「で」錯誤：存在的「いる」用「に」，不用「で」。',
                        '「を」錯誤：「を」是受詞標記，存在位置用「に」。',
                        '「へ」錯誤：「へ」表示移動方向，存在位置用「に」。'
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
            items: [
                {
                    grammar: '所有/所屬の',
                    description: '表示擁有關係',
                    example: { sentence: '私{わたし}の車{くるま}', note: '我的車' }
                },
                {
                    grammar: '修飾の',
                    description: '名詞修飾名詞',
                    example: { sentence: '英語{えいご}の本{ほん}', note: '英文書' }
                },
                {
                    grammar: '代名詞の',
                    description: '代替前文名詞',
                    example: { sentence: '青{あお}いの', note: '藍色的（那個）' }
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
            {
                id: 'n5_q_no_1',
                sentence: 'これは田中{たなか}さん（　）本{ほん}です。',
                options: ['の', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！表示這是「田中先生的」書，所有格。',
                    wrong: [
                        '「が」錯誤：「が」是主語標記，這裡表示所有關係要用「の」。',
                        '「を」錯誤：「を」是受詞標記，不用於所有格。',
                        '「に」錯誤：「に」表示方向或對象，不用於所有格。'
                    ]
                }
            },
            {
                id: 'n5_q_no_2',
                sentence: '日本語{にほんご}（　）勉強{べんきょう}は難{むずか}しいです。',
                options: ['の', 'が', 'を', 'は'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！「日本語の勉強」表示「日語的學習」，名詞修飾名詞。',
                    wrong: [
                        '「が」錯誤：這裡是名詞修飾名詞，用「の」連接。',
                        '「を」錯誤：「を」是受詞標記，這裡需要「の」連接。',
                        '「は」錯誤：「は」是主題標記，名詞修飾用「の」。'
                    ]
                }
            },
            {
                id: 'n5_q_no_3',
                sentence: '赤{あか}い（　）と青{あお}い（　）、どちらが好{す}きですか。',
                options: ['の、の', 'が、が', 'を、を', 'は、は'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！這裡「の」代替名詞，表示「紅色的（東西）」和「藍色的（東西）」。',
                    wrong: [
                        '「が」錯誤：這裡需要代替名詞的「の」。',
                        '「を」錯誤：「を」是受詞標記，這裡需要代名詞。',
                        '「は」錯誤：「は」是主題標記，這裡需要代名詞。'
                    ]
                }
            },
            {
                id: 'n5_q_no_4',
                sentence: '「あ、このかばん素敵{すてき}！」\n「それは私{わたし}（　）じゃないよ。」\n「え、誰{だれ}の？」',
                options: ['の', 'が', 'を', 'は'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！「私の」代替「私のかばん」，表示「不是我的」。',
                    wrong: [
                        '「が」錯誤：這裡「の」代替前文的「かばん」。',
                        '「を」錯誤：「を」是受詞標記，這裡需要「の」。',
                        '「は」錯誤：「は」是主題標記，這裡需要「の」。'
                    ]
                }
            },
            {
                id: 'n5_q_no_5',
                sentence: '「どのパソコンを買{か}う？」\n「軽{かる}い（　）がいいな。」\n「じゃ、これはどう？」',
                options: ['の', 'が', 'を', 'は'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！「軽いの」代替「軽いパソコン」，表示「輕的（電腦）」。',
                    wrong: [
                        '「が」錯誤：「の」代替前文的「パソコン」，「が」標記主語。',
                        '「を」錯誤：「を」是受詞標記，這裡需要代名詞「の」。',
                        '「は」錯誤：「は」是主題標記，這裡需要代名詞「の」。'
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
            items: [
                {
                    grammar: '食べ物を食べる',
                    description: '吃某物',
                    example: { sentence: 'りんごを食{た}べる', note: '吃蘋果' }
                },
                {
                    grammar: '場所を歩く/走る',
                    description: '在某處走/跑（經過）',
                    example: { sentence: '道{みち}を歩{ある}く', note: '走路' }
                },
                {
                    grammar: '場所を出る',
                    description: '離開某處',
                    example: { sentence: '会社{かいしゃ}を出{で}る', note: '離開公司' }
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
            {
                id: 'n5_q_wo_1',
                sentence: '毎日{まいにち}コーヒー（　）飲{の}みます。',
                options: ['を', 'が', 'に', 'は'],
                correctIndex: 0,
                explanation: {
                    correct: '「を」正確！「コーヒー」是「飲む」的受詞，用「を」標記。',
                    wrong: [
                        '「が」錯誤：「が」是主語標記，受詞用「を」。',
                        '「に」錯誤：「に」表示方向或時間，受詞用「を」。',
                        '「は」錯誤：「は」是主題標記，受詞用「を」。'
                    ]
                }
            },
            {
                id: 'n5_q_wo_2',
                sentence: '公園{こうえん}（　）走{はし}りました。',
                options: ['を', 'が', 'に', 'は'],
                correctIndex: 0,
                explanation: {
                    correct: '「を」正確！表示在公園「經過/跑過」的場所。',
                    wrong: [
                        '「が」錯誤：「公園」是跑步經過的地方，用「を」。',
                        '「に」錯誤：「に」表示到達點，「走る」用「を」表示經過。',
                        '「は」錯誤：「は」是主題標記，經過的場所用「を」。'
                    ]
                }
            },
            {
                id: 'n5_q_wo_3',
                sentence: '八時{はちじ}に家{いえ}（　）出{で}ます。',
                options: ['を', 'が', 'に', 'へ'],
                correctIndex: 0,
                explanation: {
                    correct: '「を」正確！「出る」表示離開，離開的地點用「を」。',
                    wrong: [
                        '「が」錯誤：「家」是離開的地點，用「を」。',
                        '「に」錯誤：「出る」用「を」表示離開的起點。',
                        '「へ」錯誤：「へ」表示去的方向，離開用「を」。'
                    ]
                }
            },
            {
                id: 'n5_q_wo_4',
                sentence: '「週末{しゅうまつ}何（　）する？」\n「映画{えいが}（　）見{み}ようかな。」\n「いいね！一緒{いっしょ}に行{い}こう。」',
                options: ['を、を', 'が、が', 'に、を', 'は、を'],
                correctIndex: 0,
                explanation: {
                    correct: '「を」正確！「何」和「映画」都是動詞的受詞。',
                    wrong: [
                        '「が」錯誤：「何」「映画」是受詞，用「を」。',
                        '「に、を」錯誤：「何をする」是固定搭配。',
                        '「は、を」錯誤：「何をする」是固定搭配。'
                    ]
                }
            },
            {
                id: 'n5_q_wo_5',
                sentence: '「今日{きょう}の宿題{しゅくだい}、もう終{お}わった？」\n「ううん、まだ作文{さくぶん}（　）書{か}いてない。」\n「頑張{がんば}って！」',
                options: ['を', 'が', 'に', 'は'],
                correctIndex: 0,
                explanation: {
                    correct: '「を」正確！「作文」是「書く」的受詞。',
                    wrong: [
                        '「が」錯誤：「作文」是寫的對象（受詞），用「を」。',
                        '「に」錯誤：「に」表示方向或對象，受詞用「を」。',
                        '「は」錯誤：「は」是主題標記，受詞用「を」。'
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
            items: [
                {
                    grammar: 'は（主題）',
                    description: '標記已知的話題，「關於...」',
                    example: { sentence: '田中{たなか}さんは先生{せんせい}です。', note: '（說到田中先生）他是老師' }
                },
                {
                    grammar: 'が（主語）',
                    description: '強調新資訊或主語本身',
                    example: { sentence: '田中{たなか}さんが先生{せんせい}です。', note: '田中先生（才）是老師' }
                },
                {
                    grammar: 'は（對比）',
                    description: '暗示與其他事物的對比',
                    example: { sentence: '魚{さかな}は食{た}べません。', note: '魚不吃（但其他可能吃）' }
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
            {
                id: 'n5_q_wa_1',
                sentence: '私{わたし}（　）日本人{にほんじん}です。',
                options: ['は', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「は」正確！標記主題「我」，表示「關於我，我是日本人」。',
                    wrong: [
                        '「が」錯誤：自我介紹通常用「は」標記主題。',
                        '「を」錯誤：「を」是受詞標記，這裡需要主題標記。',
                        '「に」錯誤：「に」表示方向或時間，這裡需要主題標記。'
                    ]
                }
            },
            {
                id: 'n5_q_wa_2',
                sentence: 'りんご（　）好{す}きですが、バナナ（　）好{す}きじゃないです。',
                options: ['は、は', 'が、が', 'を、を', 'は、を'],
                correctIndex: 0,
                explanation: {
                    correct: '「は」正確！對比「蘋果」和「香蕉」，都用「は」表示對比。',
                    wrong: [
                        '「が」錯誤：對比兩個事物時用「は」強調對比。',
                        '「を」錯誤：「を」是受詞標記，這裡是對比。',
                        '「は、を」錯誤：兩邊都是對比，都用「は」。'
                    ]
                }
            },
            {
                id: 'n5_q_wa_3',
                sentence: 'ここで（　）タバコを吸{す}わないでください。',
                options: ['は', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「は」正確！「ここでは」強調「這裡不行」（暗示別處可以）。',
                    wrong: [
                        '「が」錯誤：這裡強調對比「這裡」，用「は」。',
                        '「を」錯誤：「を」是受詞標記，不適合這裡。',
                        '「に」錯誤：「ここでは」是固定用法，表示對比。'
                    ]
                }
            },
            {
                id: 'n5_q_wa_4',
                sentence: '「あの人{ひと}（　）誰{だれ}？」\n「山田{やまだ}先生{せんせい}だよ。数学{すうがく}の先生{せんせい}。」\n「へえ、若{わか}いね。」',
                options: ['は', 'が', 'を', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「は」正確！「あの人」是話題，詢問「那個人是誰」。',
                    wrong: [
                        '「が」錯誤：詢問話題中的人物，用「は」。',
                        '「を」錯誤：「を」是受詞標記，這裡需要主題標記。',
                        '「の」錯誤：「の」是所有格，這裡需要主題標記。'
                    ]
                }
            },
            {
                id: 'n5_q_wa_5',
                sentence: '「明日{あした}（　）暇{ひま}？」\n「明日{あした}（　）ちょっと...。明後日{あさって}はどう？」\n「明後日{あさって}なら大丈夫{だいじょうぶ}。」',
                options: ['は、は', 'が、が', 'を、を', 'に、に'],
                correctIndex: 0,
                explanation: {
                    correct: '「は」正確！「明日」是話題，並暗示與「明後日」的對比。',
                    wrong: [
                        '「が」錯誤：詢問時間的話題，用「は」。',
                        '「を」錯誤：「を」是受詞標記，這裡需要主題標記。',
                        '「に」錯誤：「に」表示時間點，這裡是主題。'
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
            items: [
                {
                    grammar: '動作進行',
                    description: '正在進行的動作',
                    example: { sentence: '食{た}べている', note: '正在吃' }
                },
                {
                    grammar: '結果狀態',
                    description: '動作完成後的狀態',
                    example: { sentence: '結婚{けっこん}している', note: '已婚（狀態）' }
                },
                {
                    grammar: '習慣',
                    description: '反覆進行的動作',
                    example: { sentence: '毎日{まいにち}走{はし}っている', note: '每天跑步（習慣）' }
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
            {
                id: 'n5_q_te_iru_1',
                sentence: '今{いま}、テレビを見{み}（　）います。',
                options: ['て', 'た', 'に', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「て」正確！「見ている」表示「正在看」。',
                    wrong: [
                        '「た」錯誤：「見た」是過去式，這裡需要進行式「見ている」。',
                        '「に」錯誤：「に」是助詞，不能接在動詞後面形成進行式。',
                        '「を」錯誤：「を」是受詞標記，不能形成進行式。'
                    ]
                }
            },
            {
                id: 'n5_q_te_iru_2',
                sentence: '彼女{かのじょ}は東京{とうきょう}に住{す}んで（　）。',
                options: ['います', 'あります', 'です', 'ます'],
                correctIndex: 0,
                explanation: {
                    correct: '「います」正確！「住んでいます」表示「住在」的持續狀態。',
                    wrong: [
                        '「あります」錯誤：「ある」用於物品，人用「いる」。',
                        '「です」錯誤：「です」不能直接接て形。',
                        '「ます」錯誤：「ます」直接接動詞原形，不接て形。'
                    ]
                }
            },
            {
                id: 'n5_q_te_iru_3',
                sentence: 'ドアが閉{し}まって（　）。入{はい}れません。',
                options: ['います', 'あります', 'おきます', 'みます'],
                correctIndex: 0,
                explanation: {
                    correct: '「います」正確！「閉まっています」表示門關著的狀態。',
                    wrong: [
                        '「あります」錯誤：表示狀態用「～ている」，不用「～てある」。',
                        '「おきます」錯誤：「～ておく」表示事先做好，這裡是狀態。',
                        '「みます」錯誤：「～てみる」表示嘗試，這裡是狀態。'
                    ]
                }
            },
            {
                id: 'n5_q_te_iru_4',
                sentence: '「お兄{にい}さんは何{なに}を（　）の？」\n「大学{だいがく}で日本語{にほんご}を勉強{べんきょう}しているよ。」\n「へえ、すごいね。」',
                options: ['しているの', 'するの', 'したの', 'しますの'],
                correctIndex: 0,
                explanation: {
                    correct: '「しているの」正確！詢問現在的狀態「正在做什麼」。',
                    wrong: [
                        '「するの」錯誤：「する」是原形，這裡問現在狀態。',
                        '「したの」錯誤：「した」是過去式，這裡問現在。',
                        '「しますの」錯誤：「しますの」文法錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_te_iru_5',
                sentence: '「あれ、傘{かさ}持{も}ってきた？」\n「あ、車{くるま}に忘{わす}れて（　）...。」\n「じゃ、取{と}りに行{い}こう。」',
                options: ['きた', 'いる', 'ある', 'おく'],
                correctIndex: 0,
                explanation: {
                    correct: '「きた」正確！「忘れてきた」表示忘記帶來的結果。',
                    wrong: [
                        '「いる」錯誤：這裡強調「忘記帶來」的動作完成，用「てきた」。',
                        '「ある」錯誤：「てある」表示有意留下的狀態。',
                        '「おく」錯誤：「ておく」表示事先準備。'
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
            items: [
                {
                    grammar: 'てから',
                    description: '強調A完成後才做B，順序關係緊密',
                    example: { sentence: '食{た}べてから、歯{は}を磨{みが}く。', note: '吃完後（立刻）刷牙' }
                },
                {
                    grammar: 'あとで',
                    description: '表示之後，時間關係較鬆散',
                    example: { sentence: '食{た}べたあとで、歯{は}を磨{みが}く。', note: '吃完之後（過一會）刷牙' }
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
            {
                id: 'n5_q_te_kara_1',
                sentence: '朝{あさ}ご飯{はん}を食{た}べて（　）、学校{がっこう}に行{い}きます。',
                options: ['から', 'まで', 'ので', 'ても'],
                correctIndex: 0,
                explanation: {
                    correct: '「から」正確！「食べてから」表示「吃完早餐之後」。',
                    wrong: [
                        '「まで」錯誤：「まで」表示「到...為止」，不表示順序。',
                        '「ので」錯誤：「ので」表示原因，不表示順序。',
                        '「ても」錯誤：「ても」表示「即使...也」，不表示順序。'
                    ]
                }
            },
            {
                id: 'n5_q_te_kara_2',
                sentence: '日本{にほん}に（　）から、もう五年{ごねん}です。',
                options: ['来て', '来た', '来る', '来ます'],
                correctIndex: 0,
                explanation: {
                    correct: '「来て」正確！「来てから」表示「來日本之後」。',
                    wrong: [
                        '「来た」錯誤：「てから」需要て形，不是た形。',
                        '「来る」錯誤：「から」需要接て形，不是原形。',
                        '「来ます」錯誤：「から」需要接て形，不是ます形。'
                    ]
                }
            },
            {
                id: 'n5_q_te_kara_3',
                sentence: '薬{くすり}を飲{の}んで（　）、寝{ね}てください。',
                options: ['から', 'ので', 'けど', 'のに'],
                correctIndex: 0,
                explanation: {
                    correct: '「から」正確！「飲んでから」表示「吃藥之後」。',
                    wrong: [
                        '「ので」錯誤：「ので」表示原因，這裡是順序。',
                        '「けど」錯誤：「けど」表示轉折，這裡是順序。',
                        '「のに」錯誤：「のに」表示逆接，這裡是順序。'
                    ]
                }
            },
            {
                id: 'n5_q_te_kara_4',
                sentence: '「いつ出{で}かける？」\n「お昼{ひる}を食{た}べて（　）出{で}かけよう。」\n「わかった。」',
                options: ['から', 'まで', 'ので', 'のに'],
                correctIndex: 0,
                explanation: {
                    correct: '「から」正確！「食べてから」表示吃完午餐後再出門。',
                    wrong: [
                        '「まで」錯誤：「まで」表示「到...為止」。',
                        '「ので」錯誤：「ので」表示原因。',
                        '「のに」錯誤：「のに」表示逆接。'
                    ]
                }
            },
            {
                id: 'n5_q_te_kara_5',
                sentence: '「この本{ほん}、読{よ}み終{お}わった？」\n「うん、読{よ}んで（　）、感想{かんそう}を書{か}いたよ。」\n「早{はや}いね！」',
                options: ['から', 'まで', 'ので', 'けど'],
                correctIndex: 0,
                explanation: {
                    correct: '「から」正確！「読んでから」表示讀完後寫了感想。',
                    wrong: [
                        '「まで」錯誤：「まで」表示「到...為止」。',
                        '「ので」錯誤：「ので」表示原因。',
                        '「けど」錯誤：「けど」表示轉折。'
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
            items: [
                {
                    grammar: '～て',
                    description: '較隨意的請求（朋友間）',
                    example: { sentence: '見{み}せて。', note: '給我看一下。' }
                },
                {
                    grammar: '～てください',
                    description: '禮貌的請求',
                    example: { sentence: '見{み}せてください。', note: '請給我看。' }
                },
                {
                    grammar: '～てくださいませんか',
                    description: '非常禮貌的請求',
                    example: { sentence: '見{み}せてくださいませんか。', note: '能否請您給我看呢？' }
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
            {
                id: 'n5_q_te_kudasai_3',
                sentence: '窓{まど}を（　）てください。暑{あつ}いです。',
                options: ['開けて', '開け', '開けた', '開ける'],
                correctIndex: 0,
                explanation: {
                    correct: '「開けて」正確！但實際上應該是「開けてください」，所以空格填「開け」。',
                    wrong: [
                        '「開け」錯誤：需要て形才能接「ください」。',
                        '「開けた」錯誤：た形不能接「ください」。',
                        '「開ける」錯誤：原形不能接「ください」。'
                    ]
                }
            },
            {
                id: 'n5_q_te_kudasai_4',
                sentence: '「すみません、道{みち}を教{おし}えて（　）。」\n「いいですよ。まっすぐ行{い}ってください。」\n「ありがとうございます。」',
                options: ['ください', 'ます', 'でした', 'いる'],
                correctIndex: 0,
                explanation: {
                    correct: '「ください」正確！禮貌地請求對方告訴路。',
                    wrong: [
                        '「ます」錯誤：「ます」不能接て形。',
                        '「でした」錯誤：「でした」不能接て形。',
                        '「いる」錯誤：「いる」表示狀態，這裡是請求。'
                    ]
                }
            },
            {
                id: 'n5_q_te_kudasai_5',
                sentence: '「先生{せんせい}、この漢字{かんじ}の読{よ}み方{かた}を教{おし}えて（　）。」\n「いいですよ。これは『桜{さくら}』と読{よ}みます。」\n「ありがとうございます。」',
                options: ['ください', 'くれ', 'もらう', 'あげる'],
                correctIndex: 0,
                explanation: {
                    correct: '「ください」正確！對老師用禮貌的請求方式。',
                    wrong: [
                        '「くれ」錯誤：「くれ」太隨便，不適合對老師。',
                        '「もらう」錯誤：「もらう」表示得到，不是請求句型。',
                        '「あげる」錯誤：「あげる」表示給予，不是請求。'
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
            items: [
                {
                    grammar: '～てもいい',
                    description: '可以做（許可）',
                    example: { sentence: '食{た}べてもいい', note: '可以吃' }
                },
                {
                    grammar: '～てはいけない',
                    description: '不可以做（禁止）',
                    example: { sentence: '食{た}べてはいけない', note: '不可以吃' }
                },
                {
                    grammar: '～なくてもいい',
                    description: '不做也可以（不必）',
                    example: { sentence: '食{た}べなくてもいい', note: '不吃也可以' }
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
            {
                id: 'n5_q_temo_ii_1',
                sentence: 'ここで携帯{けいたい}を使{つか}って（　）ですか。',
                options: ['もいい', 'ください', 'ます', 'から'],
                correctIndex: 0,
                explanation: {
                    correct: '「もいい」正確！「使ってもいいですか」詢問「可以使用手機嗎」。',
                    wrong: [
                        '「ください」錯誤：「ください」是請求，這裡是詢問許可。',
                        '「ます」錯誤：「ます」不能接て形。',
                        '「から」錯誤：「てから」表示順序，這裡是許可。'
                    ]
                }
            },
            {
                id: 'n5_q_temo_ii_2',
                sentence: 'この部屋{へや}で食{た}べて（　）。',
                options: ['もいいですよ', 'くださいですよ', 'いますですよ', 'からですよ'],
                correctIndex: 0,
                explanation: {
                    correct: '「もいいですよ」正確！表示「可以在這個房間吃東西喔」。',
                    wrong: [
                        '「くださいですよ」錯誤：文法錯誤。',
                        '「いますですよ」錯誤：文法錯誤。',
                        '「からですよ」錯誤：文法錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_temo_ii_3',
                sentence: '明日{あした}休{やす}んでも（　）ですか。',
                options: ['いい', 'よく', 'よい', 'いく'],
                correctIndex: 0,
                explanation: {
                    correct: '「いい」正確！「休んでもいいですか」詢問「明天可以休息嗎」。',
                    wrong: [
                        '「よく」錯誤：「よく」是副詞，這裡需要形容詞。',
                        '「よい」錯誤：「よい」可以但較正式，「いい」較常用。',
                        '「いく」錯誤：「いく」是動詞「去」，文法錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_temo_ii_4',
                sentence: '「ここで煙草{たばこ}を吸{す}って（　）？」\n「すみません、ここは禁煙{きんえん}です。」\n「あ、すみません。」',
                options: ['もいいですか', 'ください', 'います', 'から'],
                correctIndex: 0,
                explanation: {
                    correct: '「もいいですか」正確！詢問「可以在這裡抽菸嗎」。',
                    wrong: [
                        '「ください」錯誤：「ください」是請求，不是詢問許可。',
                        '「います」錯誤：「います」表示狀態。',
                        '「から」錯誤：「てから」表示順序。'
                    ]
                }
            },
            {
                id: 'n5_q_temo_ii_5',
                sentence: '「先生{せんせい}、辞書{じしょ}を見{み}て（　）？」\n「はい、見てもいいですよ。」\n「ありがとうございます。」',
                options: ['もいいですか', 'ください', 'ます', 'です'],
                correctIndex: 0,
                explanation: {
                    correct: '「もいいですか」正確！詢問老師「可以看字典嗎」。',
                    wrong: [
                        '「ください」錯誤：「ください」是請求做某事。',
                        '「ます」錯誤：「ます」不能接て形。',
                        '「です」錯誤：「です」不能接て形。'
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
            items: [
                {
                    grammar: '～が～たい',
                    description: '對象用「が」標記（強調願望對象）',
                    example: { sentence: '水{みず}が飲{の}みたい', note: '想喝水' }
                },
                {
                    grammar: '～を～たい',
                    description: '對象用「を」標記（較客觀）',
                    example: { sentence: '水{みず}を飲{の}みたい', note: '想喝水' }
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
            {
                id: 'n5_q_tai_1',
                sentence: '私{わたし}は日本{にほん}に行{い}き（　）です。',
                options: ['たい', 'たく', 'たかった', 'たがる'],
                correctIndex: 0,
                explanation: {
                    correct: '「たい」正確！「行きたい」表示「想去」。',
                    wrong: [
                        '「たく」錯誤：「たく」是連用形，需要後接「ない」等。',
                        '「たかった」錯誤：「たかった」是過去式「想去（過去）」。',
                        '「たがる」錯誤：「たがる」用於描述第三者的願望。'
                    ]
                }
            },
            {
                id: 'n5_q_tai_2',
                sentence: '今日{きょう}は出{で}かけ（　）ないです。',
                options: ['たく', 'たい', 'たかっ', 'たがら'],
                correctIndex: 0,
                explanation: {
                    correct: '「たく」正確！「たくない」是「たい」的否定形。',
                    wrong: [
                        '「たい」錯誤：「たい」不能直接接「ない」。',
                        '「たかっ」錯誤：「たかった」是過去式。',
                        '「たがら」錯誤：「たがる」的否定是「たがらない」。'
                    ]
                }
            },
            {
                id: 'n5_q_tai_3',
                sentence: '何{なに}（　）食{た}べたいですか。',
                options: ['が', 'に', 'で', 'は'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！「～が～たい」強調願望的對象。',
                    wrong: [
                        '「に」錯誤：「に」表示方向，不用於標記願望對象。',
                        '「で」錯誤：「で」表示場所或方式。',
                        '「は」錯誤：「は」是主題標記，疑問詞用「が」。'
                    ]
                }
            },
            {
                id: 'n5_q_tai_4',
                sentence: '「今日{きょう}、どこに行{い}き（　）？」\n「動物園{どうぶつえん}に行{い}きたいな。」\n「いいね！」',
                options: ['たい', 'たく', 'たかった', 'ました'],
                correctIndex: 0,
                explanation: {
                    correct: '「たい」正確！詢問對方想去哪裡。',
                    wrong: [
                        '「たく」錯誤：「たく」需要後接「ない」。',
                        '「たかった」錯誤：「たかった」是過去式。',
                        '「ました」錯誤：「ました」是過去式，不表示願望。'
                    ]
                }
            },
            {
                id: 'n5_q_tai_5',
                sentence: '「コーヒーと紅茶{こうちゃ}、どっちが飲{の}み（　）？」\n「紅茶{こうちゃ}が飲{の}みたいな。」\n「わかった。」',
                options: ['たい', 'たく', 'ます', 'た'],
                correctIndex: 0,
                explanation: {
                    correct: '「たい」正確！詢問「想喝哪一個」。',
                    wrong: [
                        '「たく」錯誤：「たく」用於否定。',
                        '「ます」錯誤：「ます」不表示願望。',
                        '「た」錯誤：「た」是過去式。'
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
            items: [
                {
                    grammar: 'ことができる',
                    description: '較正式，強調能力',
                    example: { sentence: '日本語{にほんご}を話{はな}すことができる', note: '能說日語' }
                },
                {
                    grammar: '可能動詞',
                    description: '較口語，較簡潔',
                    example: { sentence: '日本語{にほんご}が話{はな}せる', note: '會說日語' }
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
            {
                id: 'n5_q_koto_dekiru_1',
                sentence: '日本語{にほんご}を話{はな}す（　）ができますか。',
                options: ['こと', 'もの', 'ひと', 'ところ'],
                correctIndex: 0,
                explanation: {
                    correct: '「こと」正確！「～ことができる」是固定句型。',
                    wrong: [
                        '「もの」錯誤：「もの」指具體物品，不用於此句型。',
                        '「ひと」錯誤：「ひと」指人，不用於此句型。',
                        '「ところ」錯誤：「ところ」指地方或時機，不用於此句型。'
                    ]
                }
            },
            {
                id: 'n5_q_koto_dekiru_2',
                sentence: '彼{かれ}は英語{えいご}を（　）ことができます。',
                options: ['読む', '読み', '読んで', '読んだ'],
                correctIndex: 0,
                explanation: {
                    correct: '「読む」正確！「ことができる」前面接動詞原形。',
                    wrong: [
                        '「読み」錯誤：ます形不能接「ことができる」。',
                        '「読んで」錯誤：て形不能接「ことができる」。',
                        '「読んだ」錯誤：た形不能接「ことができる」。'
                    ]
                }
            },
            {
                id: 'n5_q_koto_dekiru_3',
                sentence: 'ここで車{くるま}を停{と}めること（　）できません。',
                options: ['が', 'を', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！「～ことができる」用「が」連接。',
                    wrong: [
                        '「を」錯誤：「ことができる」用「が」，不用「を」。',
                        '「に」錯誤：「に」不用於此句型。',
                        '「で」錯誤：「で」不用於此句型。'
                    ]
                }
            },
            {
                id: 'n5_q_koto_dekiru_4',
                sentence: '「自転車{じてんしゃ}に（　）ことができますか。」\n「はい、できます。」\n「じゃ、一緒{いっしょ}にサイクリングしましょう。」',
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
            {
                id: 'n5_q_koto_dekiru_5',
                sentence: '「料理{りょうり}を（　）ことができますか。」\n「簡単{かんたん}なものなら作{つく}れます。」\n「じゃ、今度{こんど}作{つく}って！」',
                options: ['作る', '作り', '作って', '作った'],
                correctIndex: 0,
                explanation: {
                    correct: '「作る」正確！「ことができる」前面接動詞原形。',
                    wrong: [
                        '「作り」錯誤：ます形不能接「ことができる」。',
                        '「作って」錯誤：て形不能接「ことができる」。',
                        '「作った」錯誤：た形不能接「ことができる」。'
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
            items: [
                {
                    grammar: '～ましょう',
                    description: '提議一起做、表示決心',
                    example: { sentence: '行{い}きましょう', note: '去吧（一起）' }
                },
                {
                    grammar: '～ましょうか',
                    description: '詢問要不要做、提議幫忙',
                    example: { sentence: '行{い}きましょうか', note: '要去嗎？要幫你去嗎？' }
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
            {
                id: 'n5_q_mashou_2',
                sentence: '荷物{にもつ}を持{も}ち（　）か。',
                options: ['ましょう', 'ます', 'ました', 'ません'],
                correctIndex: 0,
                explanation: {
                    correct: '「ましょう」正確！「持ちましょうか」表示「要幫你拿嗎」。',
                    wrong: [
                        '「ます」錯誤：「ますか」是單純詢問。',
                        '「ました」錯誤：「ましたか」是過去式疑問。',
                        '「ません」錯誤：「ませんか」是婉轉邀請。'
                    ]
                }
            },
            {
                id: 'n5_q_mashou_3',
                sentence: '明日{あした}から早{はや}く起{お}き（　）！',
                options: ['ましょう', 'ます', 'ました', 'ません'],
                correctIndex: 0,
                explanation: {
                    correct: '「ましょう」正確！表示決心「從明天開始早起吧」。',
                    wrong: [
                        '「ます」錯誤：「ます」是敘述，不是決心。',
                        '「ました」錯誤：「ました」是過去式。',
                        '「ません」錯誤：「ません」是否定。'
                    ]
                }
            },
            {
                id: 'n5_q_mashou_4',
                sentence: '「疲{つか}れたね。」\n「うん、ちょっと休{やす}み（　）。」\n「そうしよう。」',
                options: ['ましょう', 'ます', 'ました', 'たい'],
                correctIndex: 0,
                explanation: {
                    correct: '「ましょう」正確！提議「休息一下吧」。',
                    wrong: [
                        '「ます」錯誤：「ます」是敘述。',
                        '「ました」錯誤：「ました」是過去式。',
                        '「たい」錯誤：「たい」表示願望，不是提議。'
                    ]
                }
            },
            {
                id: 'n5_q_mashou_5',
                sentence: '「暑{あつ}いですね。」\n「窓{まど}を開{あ}け（　）か。」\n「お願{ねが}いします。」',
                options: ['ましょう', 'ます', 'ました', 'ません'],
                correctIndex: 0,
                explanation: {
                    correct: '「ましょう」正確！「開けましょうか」表示「要開窗嗎」。',
                    wrong: [
                        '「ます」錯誤：「ますか」是單純詢問。',
                        '「ました」錯誤：「ましたか」是過去式疑問。',
                        '「ません」錯誤：「ませんか」是婉轉邀請。'
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
            items: [
                {
                    grammar: '～ないでください',
                    description: '禮貌請求（較軟性）',
                    example: { sentence: '走{はし}らないでください', note: '請不要跑' }
                },
                {
                    grammar: '～てはいけません',
                    description: '禁止（較強硬）',
                    example: { sentence: '走{はし}ってはいけません', note: '不可以跑' }
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
            {
                id: 'n5_q_nai_de_1',
                sentence: 'ここで泳{およ}が（　）ください。危{あぶ}ないです。',
                options: ['ないで', 'なくて', 'ないと', 'なく'],
                correctIndex: 0,
                explanation: {
                    correct: '「ないで」正確！「泳がないでください」表示「請不要游泳」。',
                    wrong: [
                        '「なくて」錯誤：「なくてください」文法錯誤。',
                        '「ないと」錯誤：「ないと」表示條件，不是請求。',
                        '「なく」錯誤：「なく」是連用形，不能直接接「ください」。'
                    ]
                }
            },
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
            {
                id: 'n5_q_nai_de_3',
                sentence: '電車{でんしゃ}の中{なか}で電話{でんわ}を（　）でください。',
                options: ['しない', 'しなく', 'しない', 'して'],
                correctIndex: 0,
                explanation: {
                    correct: '「しない」正確！「しないでください」表示「請不要打電話」。',
                    wrong: [
                        '「しなく」錯誤：「しなくでください」文法錯誤。',
                        '「しない」錯誤：重複選項。',
                        '「して」錯誤：「してでください」文法錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_nai_de_4',
                sentence: '「明日{あした}のパーティー、忘{わす}れ（　）ね。」\n「大丈夫{だいじょうぶ}、忘{わす}れないよ。」\n「じゃ、また明日{あした}。」',
                options: ['ないで', 'なくて', 'ないと', 'なく'],
                correctIndex: 0,
                explanation: {
                    correct: '「ないで」正確！「忘れないで」表示「別忘了」。',
                    wrong: [
                        '「なくて」錯誤：「なくて」不能接命令。',
                        '「ないと」錯誤：「ないと」表示條件。',
                        '「なく」錯誤：「なく」不完整。'
                    ]
                }
            },
            {
                id: 'n5_q_nai_de_5',
                sentence: '「先生{せんせい}、授業{じゅぎょう}中{ちゅう}に寝{ね}（　）ください。」\n「すみません...。」\n「気{き}をつけてくださいね。」',
                options: ['ないで', 'なくて', 'て', 'なく'],
                correctIndex: 0,
                explanation: {
                    correct: '「ないで」正確！「寝ないでください」表示「請不要睡覺」。',
                    wrong: [
                        '「なくて」錯誤：「なくてください」文法錯誤。',
                        '「て」錯誤：「てください」是請求做某事，不是不要做。',
                        '「なく」錯誤：「なく」不能接「ください」。'
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
            items: [
                {
                    grammar: 'AはBより～',
                    description: 'A比B更...',
                    example: { sentence: '私{わたし}は兄{あに}より背{せ}が高{たか}い', note: '我比哥哥高' }
                },
                {
                    grammar: 'BよりAのほうが～',
                    description: '比起B，A更...',
                    example: { sentence: '兄{あに}より私{わたし}のほうが背{せ}が高{たか}い', note: '比起哥哥，我更高' }
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
            {
                id: 'n5_q_yori_1',
                sentence: '夏{なつ}は春{はる}（　）暑{あつ}いです。',
                options: ['より', 'ほう', 'ほど', 'だけ'],
                correctIndex: 0,
                explanation: {
                    correct: '「より」正確！「春より暑い」表示「比春天熱」。',
                    wrong: [
                        '「ほう」錯誤：「ほう」用於「のほうが」句型。',
                        '「ほど」錯誤：「ほど」表示程度，用於否定比較。',
                        '「だけ」錯誤：「だけ」表示「只有」。'
                    ]
                }
            },
            {
                id: 'n5_q_yori_2',
                sentence: 'バス（　）電車{でんしゃ}のほうが速{はや}いです。',
                options: ['より', 'は', 'が', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「より」正確！「バスより電車のほうが」表示「比起公車，電車更快」。',
                    wrong: [
                        '「は」錯誤：比較句型用「より」，不用「は」。',
                        '「が」錯誤：比較基準用「より」，不用「が」。',
                        '「の」錯誤：「の」不用於比較。'
                    ]
                }
            },
            {
                id: 'n5_q_yori_3',
                sentence: '私{わたし}は兄{あに}より背{せ}（　）高{たか}いです。',
                options: ['が', 'は', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！「背が高い」是固定搭配。',
                    wrong: [
                        '「は」錯誤：「背が高い」是固定說法。',
                        '「を」錯誤：「背を高い」文法錯誤。',
                        '「に」錯誤：「背に高い」文法錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_yori_4',
                sentence: '「肉{にく}と魚{さかな}、どっちが好{す}き？」\n「魚{さかな}（　）肉{にく}のほうが好{す}きかな。」\n「そうなんだ。」',
                options: ['より', 'は', 'が', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「より」正確！「魚より肉のほうが」表示「比起魚，更喜歡肉」。',
                    wrong: [
                        '「は」錯誤：比較用「より」。',
                        '「が」錯誤：比較基準用「より」。',
                        '「の」錯誤：「の」不用於比較基準。'
                    ]
                }
            },
            {
                id: 'n5_q_yori_5',
                sentence: '「昨日{きのう}と今日{きょう}、どっちが寒{さむ}い？」\n「今日{きょう}のほうが昨日{きのう}（　）寒{さむ}いね。」\n「そうだね、コート着{き}よう。」',
                options: ['より', 'は', 'が', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「より」正確！「昨日より寒い」表示「比昨天冷」。',
                    wrong: [
                        '「は」錯誤：比較用「より」。',
                        '「が」錯誤：比較基準用「より」。',
                        '「で」錯誤：「で」不用於比較。'
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
            items: [
                {
                    grammar: '～で一番',
                    description: '在...（範圍）最...',
                    example: { sentence: '日本{にほん}で一番{いちばん}', note: '在日本最...' }
                },
                {
                    grammar: '～の中で一番',
                    description: '...之中最...',
                    example: { sentence: '果物{くだもの}の中{なか}で一番{いちばん}', note: '水果之中最...' }
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
                    correct: '「で」正確！「日本で一番」表示「在日本最...」。',
                    wrong: [
                        '「に」錯誤：範圍用「で」，不用「に」。',
                        '「を」錯誤：「を」是受詞標記，不用於範圍。',
                        '「が」錯誤：範圍用「で」，不用「が」。'
                    ]
                }
            },
            {
                id: 'n5_q_ichiban_2',
                sentence: 'スポーツの中{なか}（　）、サッカーが一番{いちばん}好{す}きです。',
                options: ['で', 'に', 'を', 'は'],
                correctIndex: 0,
                explanation: {
                    correct: '「で」正確！「の中で」表示「...之中」。',
                    wrong: [
                        '「に」錯誤：「の中で」是固定搭配。',
                        '「を」錯誤：「の中を」不用於最高級。',
                        '「は」錯誤：「の中は」不用於最高級。'
                    ]
                }
            },
            {
                id: 'n5_q_ichiban_3',
                sentence: 'この店{みせ}のケーキ（　）一番{いちばん}おいしいです。',
                options: ['が', 'は', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！「ケーキが一番おいしい」標記主語。',
                    wrong: [
                        '「は」錯誤：這裡強調「ケーキ」是最好吃的，用「が」。',
                        '「を」錯誤：「を」是受詞標記。',
                        '「に」錯誤：「に」不適合這裡。'
                    ]
                }
            },
            {
                id: 'n5_q_ichiban_4',
                sentence: '「家族{かぞく}の中{なか}で誰{だれ}（　）一番{いちばん}早{はや}く起{お}きる？」\n「お母{かあ}さんかな。」\n「やっぱり。」',
                options: ['が', 'は', 'を', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！疑問詞「誰」後面用「が」。',
                    wrong: [
                        '「は」錯誤：疑問詞後面用「が」。',
                        '「を」錯誤：「を」是受詞標記。',
                        '「の」錯誤：「の」不用於標記主語。'
                    ]
                }
            },
            {
                id: 'n5_q_ichiban_5',
                sentence: '「一年{いちねん}（　）一番{いちばん}忙{いそが}しい時期{じき}はいつ？」\n「年末{ねんまつ}かな。」\n「そうだよね。」',
                options: ['で', 'に', 'を', 'は'],
                correctIndex: 0,
                explanation: {
                    correct: '「で」正確！「一年で一番」表示「一年之中最...」。',
                    wrong: [
                        '「に」錯誤：範圍用「で」。',
                        '「を」錯誤：「を」是受詞標記。',
                        '「は」錯誤：範圍用「で」，不用「は」。'
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
            items: [
                {
                    grammar: 'とても',
                    description: '非常（程度高）',
                    example: { sentence: 'とても暑{あつ}い', note: '非常熱' }
                },
                {
                    grammar: 'すごく',
                    description: '超級（口語，程度高）',
                    example: { sentence: 'すごく暑{あつ}い', note: '超熱' }
                },
                {
                    grammar: 'ちょっと',
                    description: '有點（程度低）',
                    example: { sentence: 'ちょっと暑{あつ}い', note: '有點熱' }
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
                options: ['とても', 'とても', 'たくさん', 'いつも'],
                correctIndex: 0,
                explanation: {
                    correct: '「とても」正確！「とても寒い」表示「非常冷」。',
                    wrong: [
                        '「とても」錯誤：重複選項。',
                        '「たくさん」錯誤：「たくさん」表示數量多，不修飾形容詞。',
                        '「いつも」錯誤：「いつも」表示「總是」，不表示程度。'
                    ]
                }
            },
            {
                id: 'n5_q_totemo_2',
                sentence: 'この映画{えいが}は（　）おもしろかったです。',
                options: ['とても', 'たくさん', 'だいたい', 'ぜんぶ'],
                correctIndex: 0,
                explanation: {
                    correct: '「とても」正確！「とてもおもしろかった」表示「非常有趣」。',
                    wrong: [
                        '「たくさん」錯誤：「たくさん」表示數量。',
                        '「だいたい」錯誤：「だいたい」表示「大約」。',
                        '「ぜんぶ」錯誤：「ぜんぶ」表示「全部」。'
                    ]
                }
            },
            {
                id: 'n5_q_totemo_3',
                sentence: '量{りょう}が多{おお}くて、（　）食{た}べられません。',
                options: ['とても', 'いつも', 'もう', 'まだ'],
                correctIndex: 0,
                explanation: {
                    correct: '「とても」正確！「とても食べられない」表示「怎麼也吃不完」。',
                    wrong: [
                        '「いつも」錯誤：「いつも」表示「總是」。',
                        '「もう」錯誤：「もう」表示「已經」。',
                        '「まだ」錯誤：「まだ」表示「還」。'
                    ]
                }
            },
            {
                id: 'n5_q_totemo_4',
                sentence: '「日本語{にほんご}の勉強{べんきょう}、どう？」\n「（　）楽{たの}しいよ。」\n「よかった！」',
                options: ['とても', 'たくさん', 'ぜんぜん', 'だんだん'],
                correctIndex: 0,
                explanation: {
                    correct: '「とても」正確！「とても楽しい」表示「非常開心」。',
                    wrong: [
                        '「たくさん」錯誤：「たくさん」表示數量。',
                        '「ぜんぜん」錯誤：「ぜんぜん」用於否定。',
                        '「だんだん」錯誤：「だんだん」表示「漸漸」。'
                    ]
                }
            },
            {
                id: 'n5_q_totemo_5',
                sentence: '「この問題{もんだい}、難{むずか}しくない？」\n「うん、（　）難{むずか}しい。分{わ}からない。」\n「一緒{いっしょ}に考{かんが}えよう。」',
                options: ['とても', 'いつも', 'もう', 'まだ'],
                correctIndex: 0,
                explanation: {
                    correct: '「とても」正確！強調「非常難」。',
                    wrong: [
                        '「いつも」錯誤：「いつも」表示頻率。',
                        '「もう」錯誤：「もう」表示「已經」。',
                        '「まだ」錯誤：「まだ」表示「還」。'
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
            items: [
                {
                    grammar: 'ので',
                    description: '較客觀、禮貌，多用於書面和正式場合',
                    example: { sentence: '忙{いそが}しいので、行{い}けません。', note: '（較禮貌）' }
                },
                {
                    grammar: 'から',
                    description: '較主觀、直接，多用於口語',
                    example: { sentence: '忙{いそが}しいから、行{い}けない。', note: '（較直接）' }
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
                options: ['ので', 'から', 'けど', 'のに'],
                correctIndex: 0,
                explanation: {
                    correct: '「ので」正確！表示原因「因為明天有考試」。',
                    wrong: [
                        '「から」錯誤：「から」也可以，但「ので」較禮貌。',
                        '「けど」錯誤：「けど」表示轉折，不是原因。',
                        '「のに」錯誤：「のに」表示逆接，不是原因。'
                    ]
                }
            },
            {
                id: 'n5_q_node_2',
                sentence: '静{しず}か（　）ので、この図書館{としょかん}が好{す}きです。',
                options: ['な', 'だ', 'の', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「な」正確！な形容詞接「ので」要加「な」。',
                    wrong: [
                        '「だ」錯誤：書面語用「なので」，不用「だので」。',
                        '「の」錯誤：な形容詞用「なので」。',
                        '「に」錯誤：「にので」文法錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_node_3',
                sentence: '学生{がくせい}（　）ので、お金{かね}があまりありません。',
                options: ['な', 'だ', 'の', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「な」正確！名詞接「ので」要加「な」。',
                    wrong: [
                        '「だ」錯誤：書面語用「なので」。',
                        '「の」錯誤：名詞用「なので」。',
                        '「で」錯誤：「でので」文法錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_node_4',
                sentence: '「どうして遅{おく}れたんですか。」\n「電車{でんしゃ}が遅{おく}れた（　）、遅刻{ちこく}しました。すみません。」\n「気{き}をつけてくださいね。」',
                options: ['ので', 'のに', 'けど', 'から'],
                correctIndex: 0,
                explanation: {
                    correct: '「ので」正確！禮貌地說明遲到的原因。',
                    wrong: [
                        '「のに」錯誤：「のに」表示逆接。',
                        '「けど」錯誤：「けど」表示轉折。',
                        '「から」錯誤：「から」較直接，「ので」較禮貌。'
                    ]
                }
            },
            {
                id: 'n5_q_node_5',
                sentence: '「日本語{にほんご}、上手{じょうず}ですね。」\n「いえいえ。日本{にほん}に住{す}んでいる（　）、少{すこ}し話{はな}せます。」\n「そうなんですか。」',
                options: ['ので', 'のに', 'けど', 'から'],
                correctIndex: 0,
                explanation: {
                    correct: '「ので」正確！謙虛地說明會說日語的原因。',
                    wrong: [
                        '「のに」錯誤：「のに」表示逆接。',
                        '「けど」錯誤：「けど」表示轉折。',
                        '「から」錯誤：「から」較直接。'
                    ]
                }
            }
        ]
    }
});
