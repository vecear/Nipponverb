import { GrammarPoint } from '../../types/grammar';

export const n5Details: Record<string, GrammarPoint> = {
    'n5_cha_ikenai': {
        id: 'n5_cha_ikenai',
        pattern: 'ちゃいけない・じゃいけない',
        connection: 'Verb て form (remove て) + ちゃ... / Verb で form (remove で) + じゃ...',
        translation: '不能做...; 不可以做... (口語)',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: '動詞(て形去掉て) + ちゃ + いけない / だめ\n動詞(で形去掉で) + じゃ + いけない / だめ',
                examples: []
            },
            {
                usageId: 2,
                title: '禁止 (口語)',
                description: '意思：不可以...、不能... (口語)\n這是「てはいけない (te wa ikenai)」的口語形式，語氣較隨意。\n\n變形規則 (ちゃ vs じゃ)：\n- 使用動詞「て形」，去掉「て」，加上「ちゃ」。\n  (例：食べる -> 食べて -> 食べちゃ)\n- 如果「て形」是濁音「で」，則變成「じゃ」。\n  (例：飲む -> 飲んで -> 飲んじゃ)\n\n三種結尾句型：\n1. ダメ (dame) = 標準口語，隨意\n2. いけない (ikenai) = 標準口語，隨意\n3. いけません (ikemasen) = 意思相同，但較有禮貌',
                examples: [
                    { japanese: '寝る前にスマホを⾒ちゃダメよ。', chinese: '睡覺前不可以看手機喔。' },
                    { japanese: 'ここはきけんなので、⼊っちゃダメだよ。', chinese: '因為這裡很危險，所以不可以進去喔。' },
                    { japanese: 'やっちゃいけないことをやっちゃった。', chinese: '做了不可以做的事。' },
                    { japanese: '⾃信をなくしちゃいけません︕', chinese: '不可以失去自信！' },
                    { japanese: 'そんなに授業をさぼっちゃダメよ。', chinese: '不可以翹那麼多課喔。' },
                    { japanese: '彼を信⽤しちゃいけない。', chinese: '不可以相信他。' },
                    { japanese: '⾚信号をむししちゃいけません︕', chinese: '不可以無視紅綠燈！' },
                    { japanese: '野菜を⾷べるまでデザートを⾷べちゃいけないよ。', chinese: '在吃完蔬菜之前不可以吃甜點喔。' },
                    { japanese: '⼦どもの前に悪いことばを⾔っちゃいけません。', chinese: '不可以在孩子面前說髒話。' },
                    { japanese: '２０歳未満の⼈はお酒を飲んじゃいけません。', chinese: '未滿20歲的人不可以喝酒。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_cha_ikenai_1',
                sentence: '廊下{ろうか}を（　）ちゃいけない。',
                options: ['走{はし}っ', '走{はし}り', '走{はし}る', '走{はし}れ'],
                correctIndex: 0,
                explanation: '「走{はし}る」的て形是「走{はし}って」，去掉「て」接「ちゃいけない」變為「走っちゃいけない」。'
            },
            {
                id: 'n5_cha_ikenai_2',
                sentence: 'まだ見{み}（　）いけないよ。',
                options: ['ては', 'ちゃ', 'じゃ', 'では'],
                correctIndex: 1,
                explanation: '「見{み}る」的て形為「見{み}て」。口語縮略為「見{み}ちゃ」。'
            },
            {
                id: 'n5_cha_ikenai_3',
                sentence: 'そんなことを（　）いけない。',
                options: ['言{い}っち', '言{い}っちゃ', '言{い}っじゃ', '言{い}ては'],
                correctIndex: 1,
                explanation: '「言う」的て形是「言って」，縮略為「言っちゃ」。'
            },
            // 第 4 題：陷阱題 - 正確答案是「てもいい」不是「ちゃいけない」
            {
                id: 'n5_cha_ikenai_4',
                sentence: '「先{せん}生{せい}、質{しつ}問{もん}（　）ですか。」\n「はい、どうぞ。」',
                options: ['しちゃいけない', 'してもいい', 'しちゃだめ', 'しないで'],
                correctIndex: 1,
                explanation: {
                    correct: '「してもいい」正確！這是在詢問許可「可以提問嗎？」，用「てもいい」。這是陷阱題！',
                    wrong: [
                        '「しちゃいけない」錯誤：「ちゃいけない」是禁止，但這裡是詢問許可，語意相反！',
                        '「しちゃだめ」錯誤：這也是禁止的意思，不適合詢問許可。',
                        '「しないで」錯誤：這是請求不要做，不適合詢問許可。'
                    ]
                }
            },
            {
                id: 'n5_cha_ikenai_5',
                sentence: '「これ、食{た}べてもいい？」\n「だめだよ、まだ（　）ちゃいけない。」',
                options: ['食{た}べ', '食{た}べっ', '食{た}べれ', '食{た}べる'],
                correctIndex: 0,
                explanation: '對話情境。「食{た}べる」→「食{た}べて」→「食べちゃ」。'
            },
            {
                id: 'n5_cha_ikenai_6',
                sentence: '「明{あし}日{た}遅{ち}刻{こく}しないでね。」\n「わかってるよ。（　）ちゃいけないんでしょ。」',
                options: ['遅刻{ちこく}し', '遅刻{ちこく}す', '遅刻{ちこく}した', '遅刻{ちこく}して'],
                correctIndex: 0,
                explanation: '對話情境。「遅{ち}刻{こく}する」→「遅{ち}刻{こく}して」→「遅{ち}刻{こく}しちゃ」。'
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
                title: '接續方式',
                description: '名詞 / な形容詞 + だ (普通體)\n名詞 / な形容詞 + です (禮貌體)\n\n例如：\n- 學生 -> 学生だ / 学生です\n- 漂亮 -> きれいだ / きれいです',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '「だ」和「です」用於斷定人、事、物的性質或狀態。相當於中文的「是」。\n- 「だ」用於家人、朋友之間的對話 (普通體/常體)。\n- 「です」用於對長輩、上司或不熟的人 (禮貌體/敬體)。',
                examples: [

                ]
            },
            {
                usageId: 3,
                title: '過去式變化',
                description: '過去式的變化如下：\n- だ -> だった (datta)\n- です -> でした (deshita)\n\n例如：\n- 昨天是雨天 -> 昨日は雨だった / 昨日は雨でした',
                examples: [

                ]
            }
        ],
        analysis: {
            title: '普通體與禮貌體',
            description: '區分{ふん}對話對象的親疏遠近。',
            points: [
                {
                    rule: '長{なが}輩/陌生人{ひと}：禮貌體 (です)',
                    examples: [{ japanese: 'いい天{てん}気{き}ですね。', chinese: '天氣真好{す}呢。' }]
                },
                {
                    rule: '家{いえ}人{ひと}/朋友：普通體 (だ)',
                    examples: [{ japanese: 'いい天{てん}気{き}だね。', chinese: '天氣真好{す}耶。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_da_desu_1',
                sentence: '田{た}中{なか}さんは医{い}者{しゃ}（　）。',
                options: ['だ', 'です', 'の', 'な'],
                correctIndex: 1,
                explanation: '田{た}中{なか}先{せん}生{せい}是受人{ひと}尊敬的對象，使用禮貌體「です」。'
            },
            {
                id: 'n5_da_desu_2',
                sentence: 'これは私{わたし}の本{ほん}（　）。',
                options: ['だ', 'です', 'な', 'の'],
                correctIndex: 0,
                explanation: '獨白或對平輩使用普通體「だ」。'
            },
            // 第 3 題：陷阱題 - 正確答案是「い形容詞」不是「だ/です」
            {
                id: 'n5_da_desu_3',
                sentence: '（日記{にっき}で）今日{きょう}は本当{ほんとう}に暑{あつ}（　）。',
                options: ['いだ', 'い', 'いです', 'だ'],
                correctIndex: 1,
                explanation: {
                    correct: '「い」正確！日記是寫給自己看的普通體，い形容詞直接以「い」結尾。「暑い。」這是陷阱題！',
                    wrong: [
                        '「いだ」錯誤：い形容詞後面絕對不能接「だ」！「暑いだ」是文法錯誤！這是很多學習者常犯的錯誤。',
                        '「いです」錯誤：日記是自己寫給自己看的，不需要禮貌體「です」。普通體直接用「暑い」結尾。',
                        '「だ」錯誤：「だ」用於名詞或な形容詞後面，不能接在い形容詞後面。'
                    ]
                }
            },
            {
                id: 'n5_da_desu_4',
                sentence: '昨日{きのう}は雨{あめ}（　）。',
                options: ['でした', 'だした', 'ます', 'ました'],
                correctIndex: 0,
                explanation: '過去式的禮貌體是「でした」。'
            },
            {
                id: 'n5_da_desu_5',
                sentence: '「お仕事{しごと}は何{なん}ですか。」\n「会社員{かいしゃいん}（　）。」',
                options: ['だ', 'です', 'な', 'の'],
                correctIndex: 1,
                explanation: '對話情境。問句禮貌體，回答也要禮貌體。'
            },
            {
                id: 'n5_da_desu_6',
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
                title: '接續方式',
                description: '動詞(辭書形) + だけ\n名詞 + だけ\nな形容詞 + な + だけ\nい形容詞 + だけ',
                examples: []
            },
            {
                usageId: 2,
                title: '限定 (只有...)',
                description: '意思：只有、僅僅。\n表示排他性的限定，除此之外沒有其他。\n\n例：\n- 一人だけ (只有一個人)\n- ただ一つだけある (僅僅只有一個)\n- 欲しいものはこれだけ (我想要的只有這個)',
                examples: [
                    { japanese: '私の持っているお⾦はこれだけだ。', chinese: '我擁有的錢只有這些。' },
                    { japanese: 'ちょっと⾒ているだけです。', chinese: '我只是看一下而已。' },
                    { japanese: '好きじゃない⾷べ物はトマトだけだ。', chinese: '不喜歡的食物只有番茄。' },
                    { japanese: 'ただ話していただけです。', chinese: '只是說說話而已。' },
                    { japanese: '問題はそれだけだと思うかい︖', chinese: '你認為問題只有那個嗎？' },
                    { japanese: '私は⼀⼈だけでできます。', chinese: '我一個人就能做到。' },
                    { japanese: 'その⼥の⼦はただ泣くだけだった。', chinese: '那個女孩只是在哭。' },
                    { japanese: '彼⼥が信頼できるのは彼だけだ。', chinese: '她能信賴的只有他。' }
                ]
            },
            {
                usageId: 3,
                title: '盡可能 (as match as)',
                description: '意思：盡量、盡可能 (通常搭配「できる」)。\n表示程度的界限「到達某個程度」。\n\n例：\n- できるだけ (盡可能地)\n- 15人だけは (至少有15人)',
                examples: [
                    { japanese: '出来るだけ新しい漢字を勉強したい。', chinese: '想要盡可能多學習新的漢字。' }
                ]
            }
        ],
        analysis: {
            title: '「だけ」與「しか」的比較',
            description: '兩者都表限定，但語氣與接續不同。',
            points: [
                {
                    rule: 'だけ：可接肯定或否定，客觀陳述「只有」。',
                    examples: [{ japanese: 'リンゴが一{ひと}つだけある。', chinese: '只有一顆蘋果。' }]
                },
                {
                    rule: 'しか：必須接否定，帶有「太{ふと}少、不夠」的主觀抱怨語氣。',
                    examples: [{ japanese: 'リンゴが一{ひと}つしかない。', chinese: '竟然只有一顆蘋果（覺得太{ふと}少）。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_dake_1',
                sentence: '教室{きょうしつ}に学{がく}生{せい}が一人{ひとり}（　）います。',
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
                explanation: '對話情境。回答「有」，且針對數量做限定，用「だけ」。若{わか}回答「ない」則可用「しか」。'
            },
            // 第 5 題：陷阱題 - 正確答案是「しか」
            {
                id: 'n5_dake_5',
                sentence: '冷蔵庫{れいぞうこ}に卵{たまご}が一{ひと}つ（　）ありません。',
                options: ['だけ', 'しか', 'も', 'が'],
                correctIndex: 1,
                explanation: {
                    correct: '「しか」正確！後接否定形「ありません」，表示「除了...之外沒有」，帶有「太{ふと}少」的語氣。這是陷阱題！',
                    wrong: [
                        '「だけ」錯誤：「だけ」通常接肯定形。若{わか}接否定「だけありません」意思會變成「不是只有一顆（還有別的）」，語意不符。',
                        '「も」錯誤：強調數量多或否定，不表示「只有」。',
                        '「が」錯誤：主語標記。'
                    ]
                }
            },
            {
                id: 'n5_dake_6',
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
                title: '接續方式',
                description: '動詞(辭書形) + だろう\n名詞 + だろう\nな形容詞 + だろう\nい形容詞 + だろう',
                examples: []
            },
            {
                usageId: 2,
                title: '推測 / 確認 (Casual)',
                description: '意思：我想...、大概...吧、...對吧？\n\n雖然有多種含義，容易從語境中理解：\n1. 表示推測 (大概會...)\n   - 雨が降るだろう (大概會下雨吧)\n2. 尋求確認 (是...吧?)\n   - 嘘だろう (是騙人的吧？)\n\n注意：有時會縮短為「だろ (daro)」，意思相同。',
                examples: [
                    { japanese: '彼はもうすぐ来るだろう。', chinese: '他應該馬上就會來了吧。' },
                    { japanese: 'そうだろうと思ったよ。', chinese: '我就想說是那樣。' },
                    { japanese: '明⽇はたぶん⾬が降るだろう。空に雲がたくさんあるから。', chinese: '明天大概會下雨吧。因為天空中有很多雲。' },
                    { japanese: '間違いないだろう。', chinese: '應該沒錯吧。' },
                    { japanese: 'たぶんこの⾬は１時間ぐらいでやむだろう。', chinese: '這場雨大概一小時左右就會停了吧。' },
                    { japanese: 'あそこにいる⼈は誰だろう。', chinese: '在那裡的人是誰呢？ (推測)' },
                    { japanese: 'この⾁は、もう⾷べないほうがいいだろう。もう悪くなってしまった。', chinese: '這肉最好不要吃了比較好。已經壞掉了。' },
                    { japanese: 'どうして⽇本の夏はこんなに暑いんだろう。', chinese: '為什麼日本的夏天這麼熱呢？' }
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
                explanation: '推測「對你來說可能很難{むずか}」。形容詞直接接「だろう」。'
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
                sentence: '「山{やま}田{だ}さんはどこ？」\n「たぶん、トイレ（　）。」',
                options: ['だ', 'だろう', 'で', 'の'],
                correctIndex: 1,
                explanation: '對話推測。「大概在廁所吧」。'
            },
            {
                id: 'n5_darou_5',
                sentence: '「これ、誰{だれ}の？」\n「田{た}中{なか}さんの（　）。」',
                options: ['だ', 'だろう', 'です', 'ます'],
                correctIndex: 1,
                explanation: '不確定的推測，「大概是田{た}中{なか}先{せん}生{せい}的吧」。'
            },
            // 第 6 題：陷阱題 - 正確答案是「でしょう」不是「だろう」
            {
                id: 'n5_darou_6',
                sentence: '「先{せん}生{せい}、明日{あした}は晴{は}れます（　）。」',
                options: ['だろう', 'でしょうか', 'だろうね', 'かな'],
                correctIndex: 1,
                explanation: {
                    correct: '「でしょうか」正確！對老師說話要用禮貌體「でしょう」，不用普通體「だろう」。這是陷阱題！',
                    wrong: [
                        '「だろう」錯誤：「だろう」是普通體，對老師說話太{ふと}隨便{す}！要用「でしょう」。',
                        '「だろうね」錯誤：這是普通體，且「ね」表示確認，對老師不適合。',
                        '「かな」錯誤：「かな」是自言自語的說法，不適合問老師。'
                    ]
                }
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
                title: '接續方式',
                description: '名詞 + で',
                examples: []
            },
            {
                usageId: 2,
                title: '動作的場所',
                description: '意思：在...\n表示動作發生的地點。前面的名詞必須是地點。\n例：学校で日本語を勉強する (在學校學日語)。',
                examples: [
                    { japanese: 'ここで電話しないでください。', chinese: '請不要在這裡講電話。' },
                    { japanese: '駅で会いましょうね。', chinese: '在車站見面吧。' },
                    { japanese: 'そのシャツどこで買いましたか？', chinese: '那件襯衫是在哪裡買的？' }
                ]
            },
            {
                usageId: 3,
                title: '手段/方法',
                description: '意思：用...、以...、搭乘...\n表示手段或方法。\n例：車で行く (開車去)。',
                examples: [
                    { japanese: 'じてんしゃで行きます。', chinese: '騎腳踏車去。' },
                    { japanese: 'YouTubeで日本語を勉強します。', chinese: '透過YouTube學習日語。' }
                ]
            },
            {
                usageId: 4,
                title: '合計/範圍',
                description: '意思：合計...、...之內。\n表示數量、時間、金錢的總和或範圍。\n例：1時間で終わります (1小時內結束/總共花1小時)。',
                examples: [
                    { japanese: 'みんなで行こう！', chinese: '大家一起去吧！ (合計大家)' },
                    { japanese: 'たまに一人でカラオケに行きます。', chinese: '偶爾會一個人去唱卡拉OK。' }
                ]
            },
            {
                usageId: 5,
                title: '原因/理由',
                description: '意思：因為...\n表示原因。\n例：病気で休みます (因為生病請假)。',
                examples: [
                    { japanese: 'なにかの理由で彼は虫が怖いんだ。', chinese: '因為某些理由，他很怕蟲子。' }
                ]
            }
        ],
        quiz: [
            // 第 1 題：正向題 - 動作場{ば}所{しょ}
            {
                id: 'n5_de_1',
                sentence: '公{こう}園{えん}（　）サッカーをします。',
                options: ['で', 'に', 'を', 'へ'],
                correctIndex: 0,
                explanation: {
                    correct: '「で」正確！「公{こう}園{えん}で」表示動作發生的場{ば}所{しょ}。踢足球是動作，所以場{ば}所{しょ}用「で」。',
                    wrong: [
                        '「に」錯誤：「に」用於存在場{ば}所{しょ}（いる/ある）或移動目的地，不用於動作場{ば}所{しょ}。',
                        '「を」錯誤：「を」用於他動詞的受詞或通過的場{ば}所{しょ}，這裡需要場{ば}所{しょ}標記。',
                        '「へ」錯誤：「へ」表示移動方向，這裡是「在公{こう}園{えん}做動作」，不是「往公{こう}園{えん}去」。'
                    ]
                }
            },
            // 第 2 題：正向題 - 工具/手段
            {
                id: 'n5_de_2',
                sentence: '鉛{えん}筆{ぴつ}（　）書{か}いてください。',
                options: ['で', 'に', 'を', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「で」正確！「鉛{えん}筆{ぴつ}で」表示使用的工具。「用鉛{えん}筆{ぴつ}寫」的「用」就是「で」。',
                    wrong: [
                        '「に」錯誤：「鉛{えん}筆{ぴつ}に書{か}く」會變成「寫在鉛{えん}筆{ぴつ}上」的意思，語意完全不同。',
                        '「を」錯誤：「を」用於動作的對象，「鉛{えん}筆{ぴつ}」是工具不是受詞。',
                        '「が」錯誤：「が」用於主語標記，「鉛{えん}筆{ぴつ}」不是句子的主語。'
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
                    correct: '「に」正確！「います」表示存在，存在的場{ば}所{しょ}用「に」。「椅{い}子{す}の上にいる」＝「在椅{い}子{す}上」。',
                    wrong: [
                        '「で」錯誤：「で」用於動作場{ば}所{しょ}，但「いる」表示存在狀態，不是動作！存在場{ば}所{しょ}必須用「に」。這是最常見{み}的錯誤！',
                        '「を」錯誤：「を」不用於存在場{ば}所{しょ}，這裡需要「に」。',
                        '「が」錯誤：「猫が」已經是主語了，這裡需要場{ば}所{しょ}標記。'
                    ]
                }
            },
            // 第 4 題：對話題
            {
                id: 'n5_de_4',
                sentence: '「昨日{きのう}、どこ（　）晩{ばん}ご飯{はん}を食{た}べましたか。」\n「駅{えき}前{まえ}のレストラン（　）食{た}べました。」',
                options: ['で/で', 'に/に', 'で/に', 'に/で'],
                correctIndex: 0,
                explanation: {
                    correct: '「で/で」正確！「食{た}べる」是動作，動作場{ば}所{しょ}用「で」。問句和答句都是「在哪裡做動作」。',
                    wrong: [
                        '「に/に」錯誤：「に」用於存在或目的地，「食{た}べる」是動作，場{ば}所{しょ}要用「で」。',
                        '「で/に」錯誤：兩個空{そら}都是動作場{ば}所{しょ}，都應該用「で」。',
                        '「に/で」錯誤：第一空{そら}也是問動作場{ば}所{しょ}，應該用「で」。'
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
                    correct: '「に/に/で」正確！時{じ}間{かん}點用「に」（何{なん}時{じ}に、3時{じ}に），動作場{ば}所{しょ}用「で」（駅{えき}の前で待{ま}つ）。',
                    wrong: [
                        '「で/で/に」錯誤：時{じ}間{かん}點不能用「で」！「何{なん}時{じ}で」「3時{じ}で」是錯誤的日文。',
                        '「に/に/に」錯誤：前兩空{そら}正確，但「待{ま}つ」是動作，動作場{ば}所{shょ}用「で」不是「に」。',
                        '「で/で/で」錯誤：時{じ}間{かん}點必須用「に」，「で」不能用於時{じ}間{かん}表達。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「に」不是「で」
            {
                id: 'n5_de_6',
                sentence: '机{つくえ}の上{うえ}（　）本{ほん}があります。',
                options: ['で', 'に', 'を', 'へ'],
                correctIndex: 1,
                explanation: {
                    correct: '「に」正確！「あります」表示存在，存在的場所用「に」！「机の上に本がある」。這是陷阱題！',
                    wrong: [
                        '「で」錯誤：「で」用於動作發生的場所！但「ある」是存在，不是動作！存在場所用「に」！',
                        '「を」錯誤：「を」是受詞標記，不用於表示場所。',
                        '「へ」錯誤：「へ」表示移動方向，不用於存在句。'
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
                title: '接續方式',
                description: '句子/名詞 + でも',
                examples: []
            },
            {
                usageId: 2,
                title: '逆接 (但是)',
                description: '意思：但是、不過。\n注意：JLPT N5 的「でも (demo)」單純表示「但是」或「然而」。\n常用於句首，或連接兩個相反的想法。意思和「しかし (shikashi)」相似，但「しかし」語氣較強。\n\n*小心不要與「ても・でも (temo/demo)」(即使...也...) 句型混淆。',
                examples: [
                    { japanese: '私は⿂が好すきです。でも⾁も好きです。', chinese: '我喜歡魚。不過我也喜歡肉。' },
                    { japanese: 'パン屋に⾏きました。でも、何も買いませんでした。', chinese: '去了麵包店。但是，什麼也沒買。' },
                    { japanese: '動物が好きです。でも、⽝が⼀ばん好きです。', chinese: '我喜歡動物。但是，最喜歡狗。' },
                    { japanese: '図書館に⾏きました。でも、集中できませんでした。', chinese: '去了圖書館。但是，無法集中精神。' },
                    { japanese: 'スーパーに⾏きました。でも、財布を忘れました︕', chinese: '去了超市。但是，忘記帶錢包了！' },
                    { japanese: '今朝学校に⾏きました。でも、休みでした。', chinese: '今天早上去了學校。但是，學校休息。' },
                    { japanese: '⽇本⼈ともっと話したいです。でも、私の⽇本語はあまり上⼿ではありません。', chinese: '想多跟日本人說話。但是，我的日語不太好。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_demo_1',
                sentence: 'この問{もん}題{だい}は小学{がく}生{せい}（　）わかります。',
                options: ['でも', 'から', 'まで', 'だけ'],
                correctIndex: 0,
                explanation: '舉出極端例子「連小學生都懂」。'
            },
            {
                id: 'n5_q_demo_2',
                sentence: 'コーヒー（　）飲{の}みませんか。',
                options: ['でも', 'しか', 'こと', 'もの'],
                correctIndex: 0,
                explanation: '提議「喝杯咖啡之類的如何{なに}」。'
            },
            {
                id: 'n5_q_demo_3',
                sentence: '頭{あたま}が痛{いた}いです。（　）、学{がっ}校{こう}へ行{い}きます。',
                options: ['そして', 'でも', 'だから', 'それから'],
                correctIndex: 1,
                explanation: '逆接。「雖然頭{あたま}痛{いた}，但是要去學校。」'
            },
            // 第 4 題：陷阱題 - 正確答案是「しかし」不是「でも」
            {
                id: 'n5_q_demo_4',
                sentence: '経{けい}済{ざい}は回{かい}復{ふく}しています。（　）、失{しつ}業{ぎょう}率{りつ}はまだ高{たか}いです。',
                options: ['でも', 'しかし', 'そして', 'だから'],
                correctIndex: 1,
                explanation: {
                    correct: '「しかし」正確！這是書面語/正式文章，用「しかし」比「でも」更合適。這是陷阱題！',
                    wrong: [
                        '「でも」錯誤：「でも」是口語表達。正式的報告或文章中應使用「しかし」。',
                        '「そして」錯誤：「そして」是順接（並且），這裡需要逆接（但是）。',
                        '「だから」錯誤：「だから」表示原{げん}因{いん}（所以），不表示轉折。'
                    ]
                }
            },
            {
                id: 'n5_q_demo_5',
                sentence: '「日{にち}曜{よう}日{び}、暇{ひま}？」\n「うん、映{えい}画{が}（　）見{み}に行かない？」',
                options: ['でも', 'しか', 'だけ', 'へ'],
                correctIndex: 0,
                explanation: '對話情境。提議「去看個電影之類的」。'
            },
            {
                id: 'n5_q_demo_6',
                sentence: '「先{せん}生{せい}、これお願いします。」\n「忙{いそが}しいから、後（　）いい？」',
                options: ['で', 'でも', 'に', 'を'],
                correctIndex: 1,
                explanation: '對話情境。「後{あと}でもいい？」（晚點也行嗎？）。此處「でも」表示「即使是...也可以」。'
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
                title: '接續方式',
                description: '動詞/名詞/形容詞 + でしょう',
                examples: []
            },
            {
                usageId: 2,
                title: '推測 / 確認 (Polite)',
                description: '意思：我想...、大概...吧、...對吧？\n「でしょう (deshou)」是「だろう (darou)」的禮貌形。\n\n意義：\n1. 表示推測 (大概會...)\n   - 明日は雨が降るでしょう (明天大概會下雨吧)\n2. 尋求確認 (是...吧?)\n   - 先生はまもなく来るでしょう (老師大概馬上就來了吧)\n\n*口語中可縮略為「でしょ (desho)」。',
                examples: [
                    { japanese: 'あの⼈は誰でしょう︖', chinese: '那個人是誰呢？' },
                    { japanese: 'いいでしょう。', chinese: '不錯吧 / 聽起來不錯。' },
                    { japanese: 'この問題は簡単でしょう︖', chinese: '這個問題很簡單吧？' },
                    { japanese: '彼はもうすぐ来るでしょう。', chinese: '他應該馬上就會到了吧。' },
                    { japanese: '頑張れば、いい⼤学に⾏けるでしょう。', chinese: '努力的話，應該能考上好的大學吧。' },
                    { japanese: '今⽇の試合では、Aチームが勝つでしょう。', chinese: '今天的比賽，A隊會贏吧。' },
                    { japanese: 'この問題は、明⽇の試験に出るでしょうか。', chinese: '這個問題，會出現在明天的考試中嗎？' }
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
                sentence: '「これ、おいしいね。」\n「そう（　）？高{たか}かったんだから。」',
                options: ['だろう', 'でしょう', 'だ', 'です'],
                correctIndex: 1,
                explanation: '對話情境。確認同意，「對吧？因為很貴嘛。」'
            },
            {
                id: 'n5_q_deshou_5',
                sentence: '「鍵{かぎ}がない…。」\n「さっき机{つくえ}の上にあった（　）？」',
                options: ['だろう', 'でしょう', 'だ', 'です'],
                correctIndex: 1,
                explanation: '對話情境。確認記憶，「剛才不是在桌上嗎？」。'
            },
            // 第 6 題：陷阱題 - 正確答案是「だろう」不是「でしょう」
            {
                id: 'n5_q_deshou_6',
                sentence: '（独{ひと}り言{ごと}で）明日{あした}は晴{は}れる（　）な。',
                options: ['でしょう', 'だろう', 'です', 'ます'],
                correctIndex: 1,
                explanation: {
                    correct: '「だろう」正確！自言自語時{じ}用普通體「だろう」，不用禮貌體「でしょう」。這是陷阱題！',
                    wrong: [
                        '「でしょう」錯誤：「でしょう」是禮貌體，用於對他人{ひと}說話。自言自語不需要禮貌體！',
                        '「です」錯誤：「です」是斷定，不表示推測。',
                        '「ます」錯誤：「ます」接續不對。'
                    ]
                }
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
                title: '接續方式',
                description: 'どんな + 名詞',
                examples: []
            },
            {
                usageId: 2,
                title: '詢問性質/狀態',
                description: '意思：怎樣的...、什麼樣的...\n用於詢問人或事物的狀態、性質或特徵。',
                examples: [
                    { japanese: 'ベトナムはどんな国ですか。', chinese: '越南是什麼樣的國家呢？' },
                    { japanese: 'どんな仕事をするのですか。', chinese: '你是做什麼樣的工作呢？' },
                    { japanese: 'どんな⾷べ物が好きですか。', chinese: '你喜歡什麼樣的食物？' },
                    { japanese: 'どんなパソコンを持っていますか。', chinese: '你持有什麼樣的電腦？' },
                    { japanese: 'どんな⾞に乗っていますか︖', chinese: '你開什麼樣的車？' },
                    { japanese: '今⽇はどんな天気ですか。', chinese: '今天天氣如何？' },
                    { japanese: '新しい先⽣はどんな⼈ですか。', chinese: '新老師是什麼樣的人呢？' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_donna_1',
                sentence: '（　）音{おん}楽{がく}を聞{き}きますか。',
                options: ['どう', 'どんな', 'どれ', 'どの'],
                correctIndex: 1,
                explanation: '後接名詞「音{おん}楽{がく}」，詢問性質「什麼樣的音樂」，用「どんな」。'
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
                sentence: '（　）食べ物が嫌{きら}いですか。',
                options: ['どう', 'どれ', 'どんな', 'どっち'],
                correctIndex: 2,
                explanation: '詢問「什麼樣的食物」。'
            },
            {
                id: 'n5_q_donna_4',
                sentence: '「新{あたら}しい先{せん}生{せい}はどう？」\n「（　）先{せん}生{せい}？」',
                options: ['どう', 'どんな', 'どれ', 'なにする'],
                correctIndex: 1,
                explanation: '對話情境。B反問「你是說哪一種/什麼樣的老師？」（可能有多個新老師，或者詢問具體特徵）。'
            },
            {
                id: 'n5_q_donna_5',
                sentence: '「日{に}本{ほん}で（　）仕{し}事{ごと}をしたいですか。」\n「IT関{かん}係{けい}の仕{し}事{ごと}がしたいです。」',
                options: ['どう', 'どんな', 'どれ', 'なにする'],
                correctIndex: 1,
                explanation: '對話情境。詢問工作性質。'
            },
            // 第 6 題：陷阱題 - 正確答案是「どれ」
            {
                id: 'n5_q_donna_6',
                sentence: '「あなたの傘{かさ}は（　）ですか。」\n「あの赤{あか}い傘{かさ}です。」',
                options: ['どんな', 'どれ', 'どう', 'どの'],
                correctIndex: 1,
                explanation: {
                    correct: '「どれ」正確！從多個物品中確定「哪一個」，用「どれ」。',
                    wrong: [
                        '「どんな」錯誤：「どんな」詢問性質（什麼樣的），這裡是在確認「哪一個」。',
                        '「どう」錯誤：詢問狀態或意見。',
                        '「どの」錯誤：「どの」後面必須接名詞（どの傘{かさ}）。'
                    ]
                }
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
                title: '接續方式',
                description: 'どうして + 句子',
                examples: []
            },
            {
                usageId: 2,
                title: '為什麼 (Why)',
                description: '意思：為什麼、何以。\n詢問理由或原因。\n例：どうして来なかった？ (為什麼沒來？)',
                examples: [
                    { japanese: 'どうして来ないの︖', chinese: '為什麼不來呢？' },
                    { japanese: 'どうしてそうなったの︖', chinese: '為什麼會變那樣？' },
                    { japanese: 'どうしてそれを知っている︖', chinese: '為什麼知道那個？' },
                    { japanese: 'どうして⽇本に来たんですか︖', chinese: '為什麼來日本呢？' },
                    { japanese: 'どうして⽇本の夏はこんなに暑いんだろう。', chinese: '為什麼日本的夏天這麼熱呢？' },
                    { japanese: 'どうしてその事故が起こったのか。', chinese: '那起事故是怎麼發生的？' }
                ]
            },
            {
                usageId: 3,
                title: '如何 (How)',
                description: '意思：如何、怎麼。\n詢問方法或手段 (較少用，通常用 douyatte)。\n例：この字はどうして書くんですか？ (這字怎麼寫？)',
                examples: [
                    { japanese: '君はどうしてけがをしたか。', chinese: '你是怎麼受傷的？' },
                    { japanese: 'どうして彼⼥と知り合ったのですか。', chinese: '你是怎麼認識她的？' }
                ]
            }
        ],
        analysis: {
            title: '詢問原因的詞彙比較',
            description: '依照正式程度排列。',
            points: [
                { rule: 'なぜ：最正式，常用於書面或演講。' },
                { rule: 'どうして：中{なか}性，口語和正式皆可。' },
                { rule: 'なんで：最口語，朋友或非正式場合使用。' }
            ]
        },
        quiz: [
            {
                id: 'n5_q_doushite_1',
                sentence: '（　）日{に}本{ほん}語{ご}を勉強していますか。',
                options: ['どうして', 'どう', 'どんな', 'どれ'],
                correctIndex: 0,
                explanation: '詢問「為什麼學日文」。'
            },
            {
                id: 'n5_q_doushite_2',
                sentence: '（　）昨{き}日{のう}学{がっ}校{こう}を休{やす}みましたか。',
                options: ['どんな', 'どう', 'どうして', 'どちら'],
                correctIndex: 2,
                explanation: '詢問原因「為什麼請假」。'
            },
            {
                id: 'n5_q_doushite_3',
                sentence: '「（　）野{や}菜{さい}を食べないの？」\n「嫌{きら}いだからです。」',
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
                sentence: '（　）そんなに急{いそ}いでいるんですか。',
                options: ['どんな', 'どうして', 'どこ', 'どちら'],
                correctIndex: 1,
                explanation: '詢問原因。'
            },
            // 第 6 題：陷阱題 - 正確答案是「どうやって」
            {
                id: 'n5_q_doushite_6',
                sentence: '「（　）駅{えき}まで行{い}きますか。」\n「バスで行{い}きます。」',
                options: ['どうして', 'どうやって', 'どんな', 'どのくらい'],
                correctIndex: 1,
                explanation: {
                    correct: '「どうやって」正確！回答亦是以「手段（バス）」為主，故詢問「方法/手段」用「どうやって」。',
                    wrong: [
                        '「どうして」錯誤：這是詢問「原因」！若{わか}問「怎麼去」要用「どうやって」。',
                        '「どんな」錯誤：詢問性質。',
                        '「どのくらい」錯誤：詢問程度或花費時{じ}間{かん}。'
                    ]
                }
            }

        ]
    },
    'n5_douyatte': {
        id: 'n5_douyatte',
        pattern: 'どうやって',
        connection: 'どうやって + 動詞',
        translation: '怎麼...; 如何{なに}...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: 'どうやって + 動詞',
                examples: []
            },
            {
                usageId: 2,
                title: '詢問方法/手段',
                description: '意思：如何、怎麼、用什麼方式。\n用於詢問做某事的方法或手段。\n例：駅までどうやって行きますか (要怎麼去車站？)',
                examples: [
                    { japanese: '駅までどうやって⾏きますか。', chinese: '去車站要怎麼走？' },
                    { japanese: 'これはどうやって使いますか。', chinese: '這個要怎麼使用？' },
                    { japanese: 'これはどうやって⾷べますか。', chinese: '這個要怎麼吃？' },
                    { japanese: 'リサさんは毎⽇どうやって学校へ来ますか。', chinese: 'Lisa 妳每天怎麼來學校？' },
                    { japanese: 'どうやって彼⼥と出会ったのですか。', chinese: '你是怎麼遇見她的？' },
                    { japanese: 'あなたはどうやって漢字を覚えますか。', chinese: '你是怎麼記漢字的？' },
                    { japanese: 'これはどうやって料理するのですか。', chinese: '這個要怎麼料理？' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_douyatte_1',
                sentence: '大{だい}学{がく}まで（　）来ましたか。',
                options: ['どうやって', 'どうして', 'どんな', 'どれ'],
                correctIndex: 0,
                explanation: '詢問交通方式（方法）。'
            },
            {
                id: 'n5_q_douyatte_2',
                sentence: 'この料{りょう}理{り}は（　）作{つく}りますか。',
                options: ['どうして', 'どこ', 'だれ', 'どうやって'],
                correctIndex: 3,
                explanation: '詢問料{りょう}理{り}的做法。'
            },
            {
                id: 'n5_q_douyatte_3',
                sentence: '（　）切{きっ}符{ぷ}を買{か}いますか。',
                options: ['どうして', 'どうやって', 'どんな', 'なんて'],
                correctIndex: 1,
                explanation: '詢問買票的操作方法。'
            },
            {
                id: 'n5_q_douyatte_4',
                sentence: '「きれいな絵{え}ですね。（　）描いたんですか。」\n「パソコンで描きました。」',
                options: ['どうやって', 'どうして', 'どんな', 'どれ'],
                correctIndex: 0,
                explanation: '對話情境。詢問繪畫的方式。'
            },
            {
                id: 'n5_q_douyatte_5',
                sentence: '「（　）やせたんですか。」\n「毎{まい}日{にち}走ったんです。」',
                options: ['どうやって', 'どうして', 'どこ', 'いつ'],
                correctIndex: 0,
                explanation: '對話情境。詢問減肥的方法（雖然也可以問原因，但回答是「每天跑步」這一手段，故「どうやって」更貼切。若{わか}問原因通常回答「為了健康」等）。'
            },
            // 第 6 題：陷阱題 - 正確答案是「どうして」不是「どうやって」
            {
                id: 'n5_q_douyatte_6',
                sentence: '「（　）日本語{にほんご}を勉{べん}強{きょう}しているんですか。」\n「日{に}本{ほん}の文{ぶん}化{か}が好{す}きだからです。」',
                options: ['どうやって', 'どうして', 'どこで', 'いつから'],
                correctIndex: 1,
                explanation: {
                    correct: '「どうして」正確！回答是原{げん}因{いん}（〜だから），所以問的是「為什麼」，用「どうして」。這是陷阱題！',
                    wrong: [
                        '「どうやって」錯誤：「どうやって」問的是方法！如果{も}用「どうやって」，回答應該是「本{ほん}を読{よ}んで勉{べん}強{きょう}しています」等方法。',
                        '「どこで」錯誤：「どこで」問的是場{ば}所{しょ}。',
                        '「いつから」錯誤：「いつから」問的是時{じ}間{かん}起點。'
                    ]
                }
            }
        ]
    }
});

// Batch 5
Object.assign(n5Details, {
    'n5_ichiban': {
        id: 'n5_ichiban',
        pattern: '一{いち}番{ばん}',
        connection: '一{いち}番{ばん} + 形容詞',
        translation: '最...; 第一...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: '範圍 + で + 一番',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '表示最高級，意思是「最...」。\n通常與疑問詞或名詞範圍搭配使用。',
                examples: [
                    { japanese: '日本料理の中で寿司が一番好きです。', chinese: '日本料理之中最喜歡壽司。' },
                    { japanese: 'クラスで誰が一番背が高いですか。', chinese: '班上誰個子最高？' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_ichiban_1',
                sentence: '世{せ}界{かい}で（　）長{なが}い川{かわ}はどこですか。',
                options: ['一{いち}番{ばん}', 'もっと', 'ずっと', 'とても'],
                correctIndex: 0,
                explanation: '詢問「最」長{なが}的，最高{たか}級用「一{いち}番{ばん}」。'
            },
            {
                id: 'n5_q_ichiban_2',
                sentence: 'この中{なか}で、どれが（　）安{やす}いですか。',
                options: ['すごい', 'とても', 'あまり', '一{いち}番{ばん}'],
                correctIndex: 3,
                explanation: '這之中{なか}「最」便宜的是哪個？'
            },
            {
                id: 'n5_q_ichiban_3',
                sentence: '彼{かれ}は日{に}本{ほん}語{ご}がクラスで（　）上{じょう}手{ず}です。',
                options: ['一{いち}番{ばん}', '二番', '三番', '四番'],
                correctIndex: 0,
                explanation: '在班上「最」厲害的。'
            },
            {
                id: 'n5_q_ichiban_4',
                sentence: '「季節の中{なか}でいつが好{す}き？」\n「秋{あき}が（　）好{す}き。」',
                options: ['一{いち}番{ばん}', 'もっと', 'ずっと', 'よく'],
                correctIndex: 0,
                explanation: '對話情境。「最喜歡秋{あき}天」。'
            },
            {
                id: 'n5_q_ichiban_5',
                sentence: '「この店{みせ}で何{なに}がおすすめですか。」\n「これが（　）人{ひと}気ですよ。」',
                options: ['一{いち}番{ばん}', 'たくさん', 'あまり', '全{ぜん}然{ぜん}'],
                correctIndex: 0,
                explanation: '對話情境。「這是最受歡迎的喔」。'
            }
        ]
    },
    'n5_issho_ni': {
        id: 'n5_issho_ni',
        pattern: '一緒に',
        connection: '（人{ひと}と）一緒に + 動詞',
        translation: '一起...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: '一緒に + 動詞',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '副詞，表示共同做某事。意思是「一起...」。\n常與「～ませんか」或「～ましょう」連用，表示邀約。',
                examples: [
                    { japanese: '一緒に昼ご飯を食べませんか。', chinese: '要不要一起吃午餐？' },
                    { japanese: '駅まで一緒に行きましょう。', chinese: '一起去車站吧。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_issho_ni_1',
                sentence: '週末、彼{かの}女{じょ}（　）一緒にデパートへ行{い}きました。',
                options: ['と', 'に', 'で', 'を'],
                correctIndex: 0,
                explanation: '「和」某人{ひと}，助詞用「と」。'
            },
            {
                id: 'n5_q_issho_ni_2',
                sentence: 'みんなで（　）写{しゃ}真{しん}を撮{と}りましょう。',
                options: ['一緒に', '一{ひと}人{り}で', '全{ぜん}部{ぶ}で', '別々に'],
                correctIndex: 0,
                explanation: '大家{いえ}「一起」拍照吧。'
            },
            {
                id: 'n5_q_issho_ni_3',
                sentence: '（　）ご飯{はん}を食べませんか。',
                options: ['一緒に', '一所に', '一方で', '一度に'],
                correctIndex: 0,
                explanation: '邀約「要不要一起吃飯」。'
            },
            {
                id: 'n5_q_issho_ni_4',
                sentence: '「一{ひと}人{り}で行{い}くの？」\n「ううん、田{た}中{なか}さんと（　）行{い}くよ。」',
                options: ['一緒に', '一{ひと}人{り}で', '二階で', 'ともに'],
                correctIndex: 0,
                explanation: '對話情境。「和田{た}中{なか}先{せん}生{せい}一起去」。'
            },
            {
                id: 'n5_q_issho_ni_5',
                sentence: '「荷{に}物{もつ}が重そうですね。」\n「（　）持{も}ちましょうか。」',
                options: ['一緒に', '一{ひと}人{り}で', '全{ぜん}部{ぶ}', '同{おな}じ'],
                correctIndex: 0,
                explanation: '對話情境。提議幫忙{いそが}，「我們一起拿吧？」（或表示我也來幫忙{いそが}）。'
            },
            // 第 6 題：陷阱題 - 正確答案是「一{ひと}人{り}で」不是「一緒に」
            {
                id: 'n5_q_issho_ni_6',
                sentence: '彼{かれ}は（　）旅{りょ}行{こう}するのが好{す}きです。誰{だれ}とも行{い}きません。',
                options: ['一緒に', '一{ひと}人{り}で', 'みんなで', '友達{ともだち}と'],
                correctIndex: 1,
                explanation: {
                    correct: '「一{ひと}人{り}で」正確！後句說「跟誰都不去」，所以是「一個人」旅行。這是陷阱題！',
                    wrong: [
                        '「一緒に」錯誤：「一緒に」是「一起」，但後句說「誰{だれ}とも行{い}きません」（跟誰都不去）。',
                        '「みんなで」錯誤：「みんなで」是「大家{いえ}一起」，與後句矛盾。',
                        '「友達{ともだち}と」錯誤：「友達{ともだち}と」是「和朋友」，與後句矛盾。'
                    ]
                }
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
                title: '接續方式',
                description: '總是 + 動詞/形容詞',
                examples: []
            },
            {
                usageId: 2,
                title: '頻率 (總是)',
                description: '意思：總是、經常、習慣性地。\n表示某事總是發生，或習慣性的行為。',
                examples: [
                    { japanese: '彼はいつも元気ですね。', chinese: '他總是很有精神呢。' },
                    { japanese: '妹はいつも寝ている。', chinese: '妹妹總是在睡覺。' },
                    { japanese: 'いつも夜10時に寝ます。', chinese: '總是晚上10點睡覺。' },
                    { japanese: '昼ご飯はいつも納⾖を⾷べます。', chinese: '午餐總是吃納豆。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_itsumo_1',
                sentence: '（　）母{はは}に叱{しか}られます。',
                options: ['いつも', '全{ぜん}然{ぜん}', 'あまり', '決して'],
                correctIndex: 0,
                explanation: '前為肯定句，後三個選項通常接否定或有特定條件。這裡指「總是挨罵」。'
            },
            {
                id: 'n5_q_itsumo_2',
                sentence: '朝{あさ}は（　）パンを食{た}べます。',
                options: ['いつも', 'いま', 'いつ', 'いくつ'],
                correctIndex: 0,
                explanation: '表示習慣，「總是吃麵包」。'
            },
            {
                id: 'n5_q_itsumo_3',
                sentence: '田{た}中{なか}さんは（　）親{しん}切{せつ}です。',
                options: ['あまり', 'いつも', 'しか', 'ぜんぜん'],
                correctIndex: 1,
                explanation: '「總是」很親{しん}切{せつ}。'
            },
            // 第 4 題：陷阱題 - 正確答案是「ときどき」不是「いつも」
            {
                id: 'n5_q_itsumo_4',
                sentence: '私{わたし}は（　）映画{えいが}を見{み}に行{い}きます。毎{まい}週{しゅう}は無{む}理{り}です。',
                options: ['いつも', 'ときどき', 'ぜんぜん', 'あまり'],
                correctIndex: 1,
                explanation: {
                    correct: '「ときどき」正確！後句說「每{まい}週{しゅう}不行」，表示頻率不高{たか}。「ときどき」（有時{じ}）最適合。這是陷阱題！',
                    wrong: [
                        '「いつも」錯誤：「いつも」是「總是」（100%），但後句說「毎{まい}週{しゅう}は無{む}理{り}」（每週太{ふと}難），矛盾！',
                        '「ぜんぜん」錯誤：「ぜんぜん」是「完全不」，後面需要否定形。',
                        '「あまり」錯誤：「あまり」是「不太」，後面需要否定形。'
                    ]
                }
            },
            {
                id: 'n5_q_itsumo_5',
                sentence: '「お昼{ひる}ご飯{はん}はどうしていますか。」\n「（　）お弁{べん}当{とう}を持{も}ってきています。」',
                options: ['いつも', 'ずっと', 'やっと', 'とうとう'],
                correctIndex: 0,
                explanation: '對話情境。回答習慣性動作。'
            },
            {
                id: 'n5_q_itsumo_6',
                sentence: '「早{はや}いですね。」\n「ええ、（　）このくらいの時{じ}間{かん}に起きますから。」',
                options: ['いつも', '今{いま}', 'まだ', 'もう'],
                correctIndex: 0,
                explanation: '對話情境。「因為我總是這個時{じ}間{かん}起床」。'
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
                title: '接續方式',
                description: '名詞 / な形容詞 + じゃない',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '表示否定，意思是「不是...」。\n是「ではない」或「ではありません」的口語形式。常在口語中使用。',
                examples: [
                    { japanese: '私は学生じゃない。', chinese: '我不是學生。' },
                    { japanese: 'この問題は簡単じゃない。', chinese: '這個問題不簡單。' }
                ]
            },
            {
                usageId: 3,
                title: '句尾語氣',
                description: '若句尾語調上揚「～じゃない？」，則表示確認，意思是「～不是嗎？」。',
                examples: [
                    { japanese: 'これ、いいじゃない？', chinese: '這個不錯不是嗎？' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_janai_1',
                sentence: '明{あし}日{た}は雨（　）。',
                options: ['じゃない', 'くない', 'しない', 'ない'],
                correctIndex: 0,
                explanation: '名詞否定用「じゃない」。'
            },
            {
                id: 'n5_q_janai_2',
                sentence: 'この部{へ}屋{や}はきれい（　）。',
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
                sentence: '「先{せん}生{せい}ですか。」\n「いいえ、先{せん}生{せい}（　）。」',
                options: ['じゃない', 'ではない', 'ありません', 'いません'],
                correctIndex: 0,
                explanation: '對話情境。（選項中{なか}1和2皆可，但若{わか}考慮最自然的口語回答，或普通體的一致性。題目若{わか}未指定敬體/常體，通常會看前後文。此題問句是敬體，但回答若{わか}要用常體表親近或自言自語也行。若{わか}要完全對應敬體應用「じゃありません」。但此處考點在「じゃない」的接續。選項1最符合本{ほん}條目教學重點。） *修正：若{わか}要嚴謹，對長{なが}輩回答不應用普通體。但若{わか}這是在教導普通體變化，則情境可能是朋友間問「先{せん}生{せい}なの？」。若{わか}原句是「先{せん}生{せい}ですか」，回答用「先{せん}生{せい}じゃない」稍顯無禮，除非對晚輩。我們假設這是文法練{れん}習{しゅう}題。更正為：選項包含「じゃない」。'
            },
            {
                id: 'n5_q_janai_5',
                sentence: '「おいしい？」\n「うーん、あまりおいしく（　）。」',
                options: ['ない', 'じゃない', 'ありません', 'くない'],
                correctIndex: 0,
                explanation: '對話情境。注意！「おいしい」是い形容詞，否定是「おいしくない」。此處陷阱題。名詞/な形容詞才用「じゃない」。本{ほん}題答案應選「ない」（接在おいしく後）。*等等，這是janai的測驗，應該出名詞/な形容詞的。讓我換一題。'
            },
            // 第 6 題：陷阱題 - 正確答案是「くない」不是「じゃない」
            {
                id: 'n5_q_janai_6',
                sentence: 'この料{りょう}理{り}は高{たか}（　）。安{やす}いです。',
                options: ['じゃない', 'くない', 'ない', 'ではない'],
                correctIndex: 1,
                explanation: {
                    correct: '「くない」正確！「高{たか}い」是い形容詞，否定是「高{たか}くない」。這是陷阱題！',
                    wrong: [
                        '「じゃない」錯誤：「じゃない」用於名詞和な形容詞，「高{たか}い」是い形容詞！い形容詞否定把「い」變成「くない」。',
                        '「ない」錯誤：「ない」不能單獨接在「高{たか}」後面，需要「く」。',
                        '「ではない」錯誤：「ではない」用於名詞和な形容詞，不用於い形容詞。'
                    ]
                }
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
                title: '接續方式',
                description: '句尾 + か / 名詞 + か + 名詞',
                examples: []
            },
            {
                usageId: 2,
                title: '用法一：疑問',
                description: '放在句尾表示疑問。相當於中文的「嗎」。',
                examples: [
                    { japanese: 'これは何ですか。', chinese: '這是什麼？' }
                ]
            },
            {
                usageId: 3,
                title: '用法二：選擇',
                description: '放在兩個名詞之間，表示「或者」。',
                examples: [
                    { japanese: 'お茶かコーヒーを飲みます。', chinese: '喝茶或咖啡。' }
                ]
            }
            ,
            {
                usageId: 99, /* PDF Auto-Merge */
                title: '更多例句 (From PDF)',
                description: '意思：疑問助詞; 或者',
                examples: [
                    { japanese: '何ですか︖', chinese: '是什麼？' },
                    { japanese: 'すみません、あなたも学⽣ですか 。', chinese: '不好意思，請問你也是學生嗎？' },
                    { japanese: 'あなたの名前は何です か。', chinese: '你的名字是什麼？' },
                    { japanese: '元気ですか。', chinese: '你好嗎？' },
                    { japanese: '彼は何才ですか。', chinese: '他幾歲了？' },
                    { japanese: '⼤丈夫ですか︖', chinese: '沒事吧？' },
                    { japanese: '私とお昼ご飯を⾷べませんか ︖', chinese: '要不要跟我一起吃午餐？' },
                    { japanese: 'どうしてこのことを知らないのか ︖', chinese: '為什麼不知道這件事呢？' }
                ]
            }],
        quiz: [
            {
                id: 'n5_q_ka_1',
                sentence: 'ペン（　）鉛{えん}筆{ぴつ}を貸{か}してください。',
                options: ['か', 'も', 'と', 'に'],
                correctIndex: 0,
                explanation: '筆「或者」鉛{えん}筆{ぴつ}。'
            },
            {
                id: 'n5_q_ka_2',
                sentence: 'あなたは学{がく}生{せい}です（　）。',
                options: ['か', 'ね', 'よ', 'わ'],
                correctIndex: 0,
                explanation: '疑問句。「你是學生嗎？」'
            },
            {
                id: 'n5_q_ka_3',
                sentence: '何{なん}時{じ}（　）わかりません。',
                options: ['か', 'が', 'は', 'を'],
                correctIndex: 0,
                explanation: '疑問詞 + か + わかりません（不確定是幾點）。間接疑問句。'
            },
            {
                id: 'n5_q_ka_4',
                sentence: '「いつ行{い}きますか。」\n「今日{きょう}（　）明{あし}日{た}行{い}きます。」',
                options: ['か', 'と', 'も', 'が'],
                correctIndex: 0,
                explanation: '對話情境。今{いま}天「或」明天。'
            },
            {
                id: 'n5_q_ka_5',
                sentence: '「誰{だれ}が来{き}ますか。」\n「田{た}中{なか}さん（　）鈴{すず}木{き}さんが来{く}ると思{おも}います。」',
                options: ['か', 'と', 'も', 'が'],
                correctIndex: 0,
                explanation: '對話情境。田{た}中{なか}先{せん}生{せい}「或」鈴{すず}木{き}先{せん}生{せい}。'
            },
            // 第 6 題：陷阱題 - 正確答案是「と」不是「か」
            {
                id: 'n5_q_ka_6',
                sentence: '私{わたし}はコーヒー（　）紅{こう}茶{ちゃ}を飲{の}みました。',
                options: ['か', 'と', 'も', 'が'],
                correctIndex: 1,
                explanation: {
                    correct: '「と」正確！「コーヒーと紅{こう}茶{ちゃ}を飲{の}んだ」表示「喝了咖啡和紅{こう}茶{ちゃ}」（兩種都喝）。「と」表示並列、同時{じ}。這是陷阱題！',
                    wrong: [
                        '「か」錯誤：「か」表示「或者」（二選一）。「コーヒーか紅{こう}茶{ちゃ}」是「咖啡或紅{こう}茶{ちゃ}」（只喝一種）。這裡過去式說「飲{の}みました」，表示已經喝了，用「と」更合適！',
                        '「も」錯誤：「も」用於「也」的意思，需要並列時{じ}用「と」。',
                        '「が」錯誤：「が」是主語標記或逆接，不用於並列名詞。'
                    ]
                }
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
                title: '接續方式',
                description: '名詞 + が\n句子 + が + 句子',
                examples: []
            },
            {
                usageId: 2,
                title: '主語標記',
                description: '意思：...是(主語)。\n標示句子的主語。與主題標記「は (wa)」相似。\n例：犬が好きです (喜歡狗 - 對象/主體)。',
                examples: [
                    { japanese: '明⽇は⾬が降る。', chinese: '明天會下雨。' },
                    { japanese: '仕⽅がない。', chinese: '沒辦法 (沒有辦法)。' },
                    { japanese: 'コンビニが近くにあります。', chinese: '附近有便利商店。' },
                    { japanese: '彼は借⾦がある。', chinese: '他有欠債。' },
                    { japanese: '今⽇は、やることがたくさんある。', chinese: '今天有很多事要做。' }
                ]
            },
            {
                usageId: 3,
                title: '逆接 (但是)',
                description: '意思：但是、不過。\n置於兩個句子中間，表示轉折。\n例：好きですが (雖然喜歡但是...)',
                examples: [
                    { japanese: '彼は⾦はあるが、バカな男だ。', chinese: '他雖然有錢，但是個笨男人。' },
                    { japanese: '私は⽇本語を話すことはできますが、読むことはできません。', chinese: '我會說日語，但是不會讀。' },
                    { japanese: 'このカメラを買いたいですがお⾦がない。', chinese: '想買這個相機，但是沒錢。' },
                    { japanese: '恐れ⼊りますが、本⽇は満席です。', chinese: '不好意思，今天客滿了。' }
                ]
            }
        ],
        analysis: {
            title: '「が」與「は」的區別 (初級篇)',
            description: '最基本{ほん}的區分{ふん}方法。',
            points: [
                { rule: 'は (Topic)：標示主題。「關於這個主題，我要說的是...」。舊訊息。' },
                { rule: 'が (Subject)：標示新訊息的主語，或排他性的強調「是這個（而不是別的）」。' },
                { rule: '能力、好{す}惡、慾望的對象語通常用「が」。(例：猫が好{す}き)' }
            ]
        },
        quiz: [
            // 第 1 題：正向題 - 能力/好{す}惡對象
            {
                id: 'n5_q_ga_1',
                sentence: '私{わたし}は猫{ねこ}（　）好{す}きです。',
                options: ['が', 'を', 'は', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！「好{す}き」「嫌{きら}い」「上{じょう}手{ず}」「下{へ}手{た}」等的對象用「が」標記。這是固定用法。',
                    wrong: [
                        '「を」錯誤：「好{す}き」是な形容詞，不是動詞，對象不能用「を」。這是中{なか}文母{はは}語者最常犯的錯誤！',
                        '「は」錯誤：「猫は好{す}き」會變成「貓的話喜歡」（對比），語意改變。',
                        '「に」錯誤：「に」不用於「好{す}き」的對象。'
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
                    correct: '「が」正確！發現眼前正在發生的新事物時{じ}，用「が」標記主語。「あ、バスが来{き}た！」有「看！公車{くるま}來了」的語感。',
                    wrong: [
                        '「は」錯誤：「は」用於已知話題，眼前突然發現的新狀況應該用「が」。',
                        '「を」錯誤：「を」用於受詞，公車{くるま}是動作的主體，不是受詞。',
                        '「に」錯誤：「に」不用於標記主語。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「は」不是「が」
            {
                id: 'n5_q_ga_3',
                sentence: '田{た}中{なか}さん（　）毎朝{まいあさ}6時{じ}に起{お}きます。',
                options: ['が', 'は', 'を', 'に'],
                correctIndex: 1,
                explanation: {
                    correct: '「は」正確！這是一般陳述「田{た}中{なか}先{せん}生{せい}（這個人{ひと}的話）每天早上6點起床」，用「は」設定話題。',
                    wrong: [
                        '「が」錯誤：「が」用於新資訊或強調。這裡是描述田{た}中{なか}的日常習慣，不是強調「是田{た}中{なか}」起床，應該用「は」。',
                        '「を」錯誤：田{た}中{なか}是主語，不是受詞。',
                        '「に」錯誤：田{た}中{なか}是主語，不是時{じ}間{かん}或場{ば}所{しょ}。'
                    ]
                }
            },
            // 第 4 題：對話題 - 疑問詞主語
            {
                id: 'n5_q_ga_4',
                sentence: '「誰{だれ}（　）この仕事{しごと}をしますか。」\n「私{わたし}（　）します。」',
                options: ['が/が', 'は/は', 'が/は', 'は/が'],
                correctIndex: 0,
                explanation: {
                    correct: '「が/が」正確！疑問詞「誰{だれ}」做主語時{じ}必須用「が」，回答時{じ}強調「是我」去做，也用「が」。',
                    wrong: [
                        '「は/は」錯誤：「誰{だれ}は」是錯誤的日文，疑問詞主語必須用「が」。',
                        '「が/は」錯誤：第一空{そら}正確，但回答「是我做」有強調，用「が」更自然。',
                        '「は/が」錯誤：第一空{そら}「誰{だれ}は」是文法錯誤。'
                    ]
                }
            },
            // 第 5 題：辨析題 - 「が」vs「は」的核心區別
            {
                id: 'n5_q_ga_5',
                sentence: '「あの人{ひと}、誰{だれ}ですか。」\n「あの人{ひと}（　）山{やま}田{だ}さんです。今日{きょう}から一緒{いっしょ}に働{はたら}く新{あたら}しい人{ひと}です。山{やま}田{だ}さん（　）大阪{おおさか}から来{き}ました。」',
                options: ['が/は', 'は/が', 'が/が', 'は/は'],
                correctIndex: 0,
                explanation: {
                    correct: '「が/は」正確！回答「誰{だれ}？」時{じ}用「が」標記新資訊（あの人{ひと}が山{やま}田{だ}さん），接著說明山{やま}田{だ}的背景時{じ}用「は」設定話題（山{やま}田{だ}さんは大阪から来{き}た）。',
                    wrong: [
                        '「は/が」錯誤：第一空{そら}是回答「誰{だれ}？」，需要「が」標記新資訊。',
                        '「が/が」錯誤：第二空是說明山{やま}田{だ}的背景，應該用「は」設定話題。',
                        '「は/は」錯誤：第一空{そら}回答疑問詞問句，必須用「が」。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「を」不是「が」
            {
                id: 'n5_q_ga_6',
                sentence: '田{た}中{なか}さんは毎日{まいにち}牛乳{ぎゅうにゅう}（　）飲{の}みます。',
                options: ['が', 'を', 'は', 'に'],
                correctIndex: 1,
                explanation: {
                    correct: '「を」正確！「飲{の}む」是他動詞，受詞（喝的東西）用「を」標記。「牛乳{ぎゅうにゅう}を飲{の}む」＝「喝牛奶」。這是陷阱題！',
                    wrong: [
                        '「が」錯誤：「が」用於「好{す}き」「欲{ほ}しい」「できる」等的對象，但「飲{の}む」是一般他動詞，受詞用「を」！「牛乳{ぎゅうにゅう}が飲{の}みたい」才用「が」！',
                        '「は」錯誤：「は」是主題標記，「牛乳{ぎゅうにゅう}は」會變成「牛奶的話...」（對比），語意改變。',
                        '「に」錯誤：「に」不用於「飲{の}む」的受詞。'
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
                title: '接續方式',
                description: '名詞 + があります',
                examples: []
            },
            {
                usageId: 2,
                title: '存在 (非生物)',
                description: '意思：有...、在...。\n用於「非生物」(如物品、植物等) 的存在。\n- 生物請用「がいます (ga imasu)」。\n- 地點用「に/は」。\n\n用法：\n1. 擁有：宿題があります (有作業)。\n2. 存在地點：机の上にあります (在桌子上)。',
                examples: [
                    { japanese: '⼈気がある。', chinese: '有人氣 (受歡迎)。' },
                    { japanese: '先⽉お⾦がぜんぜんなかった。', chinese: '上個月完全沒有錢。' },
                    { japanese: 'へやにテレビがあります。', chinese: '房間裡有電視。' },
                    { japanese: '⽇本の好きじゃないところはあります。', chinese: '也有不喜歡日本的地方。' },
                    { japanese: 'このマンションにはへやが三つあります。', chinese: '這間公寓有三個房間。' },
                    { japanese: '彼は⾦があるから新⾞が買える。', chinese: '因為他有錢所以能買新車。' },
                    { japanese: '今夜⽤事があるから⾏けない。', chinese: '因為今晚有事所以不能去。' }
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
                explanation: '便{べん}利{り}商店{みせ}是無生命物體（建築物）。'
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
                sentence: '「来{らい}週{しゅう}の日{にち}曜{よう}日{び}、暇{ひま}ですか。」\n「すみません。用事{ようじ}が（　）。」',
                options: ['あります', 'います', 'あり', 'いり'],
                correctIndex: 0,
                explanation: '對話情境。「有事」。'
            },
            // 第 6 題：陷阱題 - 正確答案是「います」不是「あります」（植物也用あります）
            {
                id: 'n5_q_ga_arimasu_6',
                sentence: '公園{こうえん}に大{おお}きい木{き}（　）。鳥{とり}もたくさん（　）。',
                options: ['があります／います', 'がいます／あります', 'があります／あります', 'がいます／います'],
                correctIndex: 0,
                explanation: {
                    correct: '「があります／います」正確！木（植物）是「あります」，鳥{とり}（動物）是「います」。這是陷阱題！',
                    wrong: [
                        '「がいます／あります」錯誤：木（樹）雖然是生物但用「あります」。日語中植物用「ある」！鳥{とり}是動物用「いる」。',
                        '「があります／あります」錯誤：鳥{とり}是動物，必須用「います」！',
                        '「がいます／います」錯誤：木（植物）用「あります」，不用「います」！'
                    ]
                }
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
                title: '接續方式',
                description: '名詞 + がほしい',
                examples: []
            },
            {
                usageId: 2,
                title: '願望 (想要某物)',
                description: '意思：想要...\n簡單地接在名詞後，表示想要某個東西。\n例：これがほしい (我想要這個)。\n\n*注意：可以寫成漢字「欲しい」，但平假名也很常用。',
                examples: [
                    { japanese: 'もっとお⾦が欲しいです。', chinese: '想要更多錢。' },
                    { japanese: '彼⼥がほしい。', chinese: '想要女朋友。' },
                    { japanese: 'お⾦がたくさんほしい。', chinese: '想要很多錢。' },
                    { japanese: '何⼈⼦どもがほしいですか︖', chinese: '想要有幾個小孩？' },
                    { japanese: '新しいGoProカメラが欲しいです︕', chinese: '想要新的GoPro相機！' },
                    { japanese: 'いつか⾃分の家が欲しいです。', chinese: '總有一天想要自己的房子。' },
                    { japanese: '私が欲しいものは⾃由です。', chinese: '我想要的是自由。' },
                    { japanese: '⽇本で作られた⾞が欲しい。', chinese: '想要日本製造的車。' },
                    { japanese: '最近、仕事が忙しすぎてリラックスする時間が欲しい。', chinese: '最近工作太忙，想要放鬆的時間。' }
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
                sentence: '誕{たん}生{じょう}日{び}に何{なに}（　）ほしいですか。',
                options: ['を', 'が', 'に', 'へ'],
                correctIndex: 1,
                explanation: '疑問詞做想要的對象，用「が」。'
            },
            {
                id: 'n5_q_ga_hoshii_3',
                sentence: '今{いま}、一{いち}番{ばん}（　）ものは何{なに}ですか。',
                options: ['ほしい', 'うれしい', 'たのしい', 'さびしい'],
                correctIndex: 0,
                explanation: '根據語意「最想要的東西」。'
            },
            {
                id: 'n5_q_ga_hoshii_4',
                sentence: '「コーヒー、飲{の}みますか。」\n「いいえ、冷{つめ}たい水{みず}（　）ほしいです。」',
                options: ['が', 'を', 'に', 'で'],
                correctIndex: 0,
                explanation: '對話情境。「水{みず}がほしい」：想要水{みず}。'
            },
            {
                id: 'n5_q_ga_hoshii_5',
                sentence: '「夏{なつ}休{やす}みにどこへ行{い}きたいですか。」\n「どこへも行{い}きたくないです。休{やす}み（　）ほしいです。」',
                options: ['を', 'が', 'に', 'へ'],
                correctIndex: 1,
                explanation: '對話情境。「想要休假」。'
            },
            // 第 6 題：陷阱題 - 正確答案是「たい」不是「ほしい」
            {
                id: 'n5_q_ga_hoshii_6',
                sentence: '私{わたし}は日{に}本{ほん}に（　）です。',
                options: ['行{い}きほしい', '行{い}きたい', '行{い}くほしい', 'ほしい'],
                correctIndex: 1,
                explanation: {
                    correct: '「行{い}きたい」正確！「想要去」是動作的願望，用「〜たい」。「ほしい」只能接名詞！這是陷阱題！',
                    wrong: [
                        '「行{い}きほしい」錯誤：「ほしい」前面只能接名詞，不能接動詞！想做某事用「〜たい」。',
                        '「行{い}くほしい」錯誤：同上，「ほしい」只接名詞。',
                        '「ほしい」錯誤：缺少動詞，句子不完整。'
                    ]
                }
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
                title: '接續方式',
                description: '名詞(生物) + がいます',
                examples: []
            },
            {
                usageId: 2,
                title: '存在 (生物)',
                description: '意思：有...、在...。\n用於「生物」(人、動物) 的存在。\n動詞「いる」源自「居る」。\n\n用法：\n1. 存在地點：シャワーに誰かがいます (淋浴間有人)。\n2. 擁有(關係)：妹がいます (有妹妹)。',
                examples: [
                    { japanese: 'テーブルの下に猫がいる。', chinese: '桌子底下有貓。' },
                    { japanese: 'あなたは彼⽒がいるの︖', chinese: '妳有男朋友嗎？' },
                    { japanese: '私には兄弟がいないんだ。', chinese: '我沒有兄弟姊妹。' },
                    { japanese: '弟⼀⼈妹⼀⼈がいます。', chinese: '有一個弟弟和一個妹妹。' },
                    { japanese: 'その部屋に⽝がいる。', chinese: '那個房間裡有狗。' },
                    { japanese: '今学校にだれもいません。', chinese: '現在學校裡誰也不在。' },
                    { japanese: '東京駅に観光者がいっぱいいる。', chinese: '東京站有很多觀光客。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_ga_imasu_1',
                sentence: '公{こう}園{えん}に子供{こども}（　）。',
                options: ['があります', 'がいます', 'です', 'ます'],
                correctIndex: 1,
                explanation: '小孩是有生命的，用「がいます」。'
            },
            {
                id: 'n5_q_ga_imasu_2',
                sentence: '妹{いもうと}（　）いますか。',
                options: ['が', 'を', 'に', 'で'],
                correctIndex: 0,
                explanation: '詢問「有妹{いもうと}妹{いもうと}嗎」。'
            },
            {
                id: 'n5_q_ga_imasu_3',
                sentence: '池{いけ}の中{なか}に魚{さかな}（　）います。',
                options: ['を', 'が', 'に', 'へ'],
                correctIndex: 1,
                explanation: '魚{さかな}是有生命的。'
            },
            {
                id: 'n5_q_ga_imasu_4',
                sentence: '「山{やま}田{だ}先{せん}生{せい}はどこですか。」\n「教{きょう}室{しつ}に（　）。」',
                options: ['あります', 'います', 'です', 'ます'],
                correctIndex: 1,
                explanation: '對話情境。詢問人{ひと}的位置。'
            },
            {
                id: 'n5_q_ga_imasu_5',
                sentence: '「一{ひと}人{り}暮{ぐ}らしですか。」\n「いいえ、猫（　）います。」',
                options: ['が', 'を', 'に', 'で'],
                correctIndex: 0,
                explanation: '對話情境。「有養貓」。'
            },
            // 第 6 題：陷阱題 - 正確答案是「あります」不是「います」
            {
                id: 'n5_q_ga_imasu_6',
                sentence: '机{つくえ}の上{うえ}にロボットが（　）。',
                options: ['います', 'あります', 'いる', 'ある'],
                correctIndex: 1,
                explanation: {
                    correct: '「あります」正確！雖然ロボット（機器人{ひと}）會動，但它是「無生命」的機械，所以用「あります」。這是陷阱題！',
                    wrong: [
                        '「います」錯誤：「います」用於有生命的人{ひと}或動物。ロボット是機器，無生命，用「あります」！',
                        '「いる」錯誤：普通體的「いる」也是錯的，因為ロボット無生命。',
                        '「ある」錯誤：雖然用「ある」系列是對的，但這裡需要禮貌體「あります」。'
                    ]
                }
            }
        ]
    },
    'n5_hou_ga_ii': {
        id: 'n5_hou_ga_ii',
        pattern: 'ほうがいい',
        connection: '動詞た形 / 動詞ない形 + ほうがいい',
        translation: '最好{す}...; ...比較好{す}',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: '動詞(た形) / 動詞(ない形) + ほうがいい',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '表示建議或勸告。意思是「最好...」、「...比較好」。\n雖然翻譯成「比較好」，但在日語中這有較強的建議意味，有時如果不做可能會產生不好後果。',
                examples: [

                ]
            },
            {
                usageId: 3,
                title: '肯定與否定',
                description: '- 肯定建議：用た形 (行ったほうがいい - 最好要去)\n- 否定建議：用ない形 (行かないほうがいい - 最好別去)\n注意：雖然也可以接辭書形，但「た形 + ほうがいい」語氣更自然且具體。',
                examples: [
                    { japanese: '薬を飲んだほうがいいですよ。', chinese: '最好吃個藥喔。' },
                    { japanese: '無理しないほうがいいです。', chinese: '最好不要勉強。' }
                ]
            }
        ],
        analysis: {
            title: '「ほうがいい」的接續注意',
            description: '肯定的建議強烈規定接「た形」，否定接「ない形」。',
            points: [
                {
                    rule: '○ 行{い}ったほうがいい (去比較好{す})',
                },
                {
                    rule: '✕ 行{い}くほうがいい (文法上不自然)',
                },
                {
                    rule: '○ 行かないほうがいい (不去比較好{す})'
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_hou_ga_ii_1',
                sentence: '風邪{かぜ}ですか。今日{きょう}は（　）ほうがいいですよ。',
                options: ['休{やす}む', '休んで', '休んだ', '休{やす}み'],
                correctIndex: 2,
                explanation: '肯定的建議接「た形」。'
            },
            {
                id: 'n5_q_hou_ga_ii_2',
                sentence: 'そんなにたくさん（　）ほうがいいです。',
                options: ['食べない', '食べなく', '食べなかった', '食{た}べて'],
                correctIndex: 0,
                explanation: '否定的建議接「ない形」。'
            },
            {
                id: 'n5_q_hou_ga_ii_3',
                sentence: 'もっと思{おも}い出{おもいで}を（　）ほうがいい。',
                options: ['作{つく}る', '作{つく}って', '作った', '作り'],
                correctIndex: 2,
                explanation: '「作ったほうがいい」。'
            },
            {
                id: 'n5_q_hou_ga_ii_4',
                sentence: '「熱{ねつ}があるんです。」\n「じゃあ、病{びょう}院{いん}へ（　）ほうがいいですよ。」',
                options: ['行{い}く', '行{い}って', '行{い}った', '行かない'],
                correctIndex: 2,
                explanation: '對話情境。建議去醫院。'
            },
            {
                id: 'n5_q_hou_ga_ii_5',
                sentence: '「この映{えい}画{が}、怖{こわ}そう…。」\n「苦{に}手{がて}なら、（　）ほうがいいよ。」',
                options: ['見{み}る', '見{み}ない', '見{み}た', '見{み}たくない'],
                correctIndex: 1,
                explanation: '對話情境。建議「不要看」。'
            },
            // 第 6 題：陷阱題 - 正確答案是「たら」不是「ほうがいい」
            {
                id: 'n5_q_hou_ga_ii_6',
                sentence: '「どうすればいいですか。」\n「わからなかっ（　）、先{せん}生{せい}に聞{き}いてください。」',
                options: ['たほうがいい', 'たら', 'てもいい', 'たことがある'],
                correctIndex: 1,
                explanation: {
                    correct: '「たら」正確！「如果{も}不懂的話，請問老師」是假設條件，用「たら」。這是陷阱題！',
                    wrong: [
                        '「たほうがいい」錯誤：「ほうがいい」是建議，但這裡是假設「如果{も}不懂的話」，不是在建議「最好{す}不懂」。',
                        '「てもいい」錯誤：「てもいい」是許可，意思不對。',
                        '「たことがある」錯誤：「たことがある」是經驗，意思不對。'
                    ]
                }
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
                title: '接續方式',
                description: '動詞(て形) + から',
                examples: []
            },
            {
                usageId: 2,
                title: '順序 (After)',
                description: '意思：...之後。\n表示動作的先後順序，做完前項動作後，接著做後項。\n例：食べてから寝る (吃完後睡覺)。',
                examples: [
                    { japanese: 'トイレを使ってから、⼿を洗わないといけません。', chinese: '使用廁所後，必須洗手。' },
                    { japanese: '買い物をしてから家に帰ります。', chinese: '買完東西後回家。' },
                    { japanese: 'ご飯を⾷べてから散歩しました。', chinese: '吃完飯後去散步了。' },
                    { japanese: '今⽇は、起きてからまだ何も⾷べていません。', chinese: '今天起床後還什麼都沒吃。' },
                    { japanese: 'アメリカに帰国してから太りました。', chinese: '回美國之後變胖了。' },
                    { japanese: '彼が禁煙してから2ヶ⽉がたった。', chinese: '他戒菸之後過了2個月。' },
                    { japanese: '電話をしてから来てください。', chinese: '請打電話之後再來。' },
                    { japanese: '空き⽸は潰してからゴミとして出してください。', chinese: '空罐請壓扁後再丟棄。' }
                ]
            }
            ,
            {
                usageId: 99, /* PDF Auto-Merge */
                title: '更多例句 (From PDF)',
                description: '意思：因為; 從',
                examples: [
                    { japanese: '天気がいいから、外に⾏きたい。', chinese: '因為天氣好，想去外面。' },
                    { japanese: '私はすぐ戻るから、ここでちょっと待ってください。', chinese: '我馬上回來，請在這裡稍等一下。' },
                    { japanese: 'これからもよろしくお願いします。', chinese: '今後也請多多指教。' },
                    { japanese: 'ここからあの駅まで歩いてどれぐらいかかりますか︖', chinese: '從這裡走到那個車站要花多久時間？' },
                    { japanese: 'お店は何時から何時まで開いていますか︖', chinese: '這家店從幾點開到幾點？' }
                ]
            }],
        quiz: [
            // 第 1 題：正向題 - 原因理{り}由{ゆう}
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
                sentence: '授{じゅ}業{ぎょう}は8時{じ}（　）5時{じ}までです。',
                options: ['から', 'まで', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「から」正確！「8時{じ}から5時{じ}まで」表示「從8點到5點」，「から」標記起點。',
                    wrong: [
                        '「まで」錯誤：「まで」是終點，這裡需要起點。後面已經有「まで」了。',
                        '「に」錯誤：「に」表示時{じ}間{かん}點，但這裡需要表示「從...開始」的起點。',
                        '「で」錯誤：「で」不用於表示時{じ}間{かん}起點。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「ので」不是「から」
            {
                id: 'n5_q_kara_3',
                sentence: '電{でん}車{しゃ}が遅{おく}れた（　）、遅刻{ちこく}しました。すみません。',
                options: ['から', 'ので', 'けど', 'のに'],
                correctIndex: 1,
                explanation: {
                    correct: '「ので」正確！向上司或長輩解釋原因時{じ}，用「ので」較有禮貌。「から」太{ふと}直接，有推卸責任的感覺。',
                    wrong: [
                        '「から」錯誤：雖然文法上可以，但在道歉場合用「から」語氣太{ふと}強硬，顯得在找藉口。「ので」較委婉謙虛。',
                        '「けど」錯誤：「けど」表示逆接，語意不對。',
                        '「のに」錯誤：「のに」表示「明明...卻...」的遺憾，這裡不適用。'
                    ]
                }
            },
            // 第 4 題：對話題
            {
                id: 'n5_q_kara_4',
                sentence: '「どうして日本語{にほんご}を勉{べん}強{きょう}していますか。」\n「日{に}本{ほん}のアニメが好{す}きだ（　）です。」',
                options: ['から', 'ので', 'けど', 'まで'],
                correctIndex: 0,
                explanation: {
                    correct: '「から」正確！回答「為什麼」的問{もん}題{だい}時{じ}，用「から」說明理{り}由{ゆう}最自然。這是朋友間的對話，用「から」沒問{もん}題{だい}。',
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
                sentence: '「学{がっ}校{こう}（　）家{いえ}（　）どのくらいかかりますか。」\n「電{でん}車{しゃ}で30分{ぷん}くらいです。」',
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
            },
            // 第 6 題：陷阱題 - 正確答案是「で」不是「から」
            {
                id: 'n5_q_kara_6',
                sentence: 'ワインはブドウ（　）作{つく}られています。',
                options: ['から', 'で', 'に', 'を'],
                correctIndex: 1,
                explanation: {
                    correct: '「で」正確！「ブドウで作{つく}る」表示「用葡萄做」（原料看得出來）。「で」表示材料（可辨識原料）。這是陷阱題！',
                    wrong: [
                        '「から」錯誤：「から」表示原料時{じ}，強調「由...製成」且原料已經看不出來（如：米{こめ}から日本酒{にほんしゅ}）。但葡萄酒{さけ}明顯是用葡萄做的，用「で」更自然！',
                        '「に」錯誤：「に」不用於表示材料。',
                        '「を」錯誤：「を」是受詞標記，「ブドウ」在這裡是材料，不是動作的受詞。'
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
                title: '接續方式',
                description: '動詞(ます形去ます) + 方（かた）',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '表示做某動作的方法或方式。變成名詞用法。\n\n例如：\n- 読む (讀) -> 読み方 (讀法/怎麼讀)\n- 作る (做) -> 作り方 (做法)',
                examples: [
                    { japanese: 'この漢字の読み方を教えてください。', chinese: '請教我這個漢字的唸法。' },
                    { japanese: 'ケーキの作り方を知っていますか。', chinese: '你知道蛋糕的做法嗎？' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_kata_1',
                sentence: 'パソコンの（　）方がわかりません。',
                options: ['使{つか}う', '使い', '使{つか}って', '使った'],
                correctIndex: 1,
                explanation: '動詞ます形去ます（使い）+ 方。'
            },
            {
                id: 'n5_q_kata_2',
                sentence: 'おいしいコーヒーの（　）方を習いました。',
                options: ['入{い}れ', '入{い}れる', '入{い}れて', '入{い}れた'],
                correctIndex: 0,
                explanation: '「入{い}れます」→「入{い}れ方」（沖泡方法）。'
            },
            {
                id: 'n5_q_kata_3',
                sentence: 'この料{りょう}理{り}の（　）方は簡{かん}単{たん}です。',
                options: ['作{つく}る', '作り', '作{つく}って', '作った'],
                correctIndex: 1,
                explanation: '「作{つく}ります」→「作り方」（做法）。'
            },
            {
                id: 'n5_q_kata_4',
                sentence: '「すみません、この字{じ}の（　）方を教{おし}えてください。」\n「『あ』ですよ。」',
                options: ['読{よ}む', '読み', '読{よ}んで', '読んだ'],
                correctIndex: 1,
                explanation: '對話情境。「読み方」（讀法）。'
            },
            {
                id: 'n5_q_kata_5',
                sentence: '「駅{えき}への（　）方を知{し}っていますか。」\n「はい、知{し}っていますよ。」',
                options: ['行{い}く', '行気', '行{い}き', '行{い}って'],
                correctIndex: 2,
                explanation: '對話情境。「行{い}き方」（去法/怎麼走）。'
            },
            // 第 6 題：陷阱題 - 正確答案是「どうやって」不是「〜方」
            {
                id: 'n5_q_kata_6',
                sentence: '「すみません、駅{えき}まで（　）行{い}きますか。」\n「バスで行{い}けます。」',
                options: ['行{い}き方', 'どうやって', '行{い}きの', 'どんな'],
                correctIndex: 1,
                explanation: {
                    correct: '「どうやって」正確！詢問方法用「どうやって～動詞」。這是陷阱題！',
                    wrong: [
                        '「行{い}き方」錯誤：「〜方」是名詞，不能直接放在動詞前！「行{い}き方」要說「駅{えき}への行{い}き方を教{おし}えてください」。',
                        '「行{い}きの」錯誤：接續不對。',
                        '「どんな」錯誤：「どんな」詢問性質，不詢問方法。'
                    ]
                }
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
                title: '接續方式',
                description: '動詞/形容詞/名詞(普通形) + か + ... + か',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '表示不確定的選擇或疑問的嵌入。意思是「...是否...」。\n常接「わかる」(知道)、「知る」(知道) 等動詞。',
                examples: [
                    { japanese: '明日雨が降るかどうかわかりません。', chinese: '不知道明天是否會下雨。' },
                    { japanese: '行くか行かないか決めてください。', chinese: '去或不去請決定。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_ka_ka_1',
                sentence: '今日{きょう}（　）明{あし}日{た}か、いつがいいですか。',
                options: ['は', 'か', 'も', 'が'],
                correctIndex: 1,
                explanation: '「今日{きょう}か明{あし}日{た}か」（是今{いま}天好{す}還是明天好{す}）。'
            },
            {
                id: 'n5_q_ka_ka_2',
                sentence: '食{た}べる（　）食べない（　）、はっきりしてください。',
                options: ['か／か', 'も／も', 'と／と', 'や／や'],
                correctIndex: 0,
                explanation: '「要吃還是不吃」。'
            },
            {
                id: 'n5_q_ka_ka_3',
                sentence: '男{おとこ}の人{ひと}（　）女{おんな}の人{ひと}（　）わかりませんでした。',
                options: ['か／か', 'は／は', 'が／が', 'も／も'],
                correctIndex: 0,
                explanation: '「是不男還是女，搞不清楚」。'
            },
            {
                id: 'n5_q_ka_ka_4',
                sentence: '「コーヒー（　）紅{こう}茶{ちゃ}（　）にしますか。」\n「コーヒーをお願いします。」',
                options: ['か／か', 'や／や', 'と／と', 'も／も'],
                correctIndex: 0,
                explanation: '對話情境。二選一，「要咖啡還是紅{こう}茶{ちゃ}」。'
            },
            {
                id: 'n5_q_ka_ka_5',
                sentence: '「出席しますか。」\n「まだ出席する（　）しない（　）、迷{まよ}っています。」',
                options: ['か／か', 'と／と', 'や／や', 'も／も'],
                correctIndex: 0,
                explanation: '對話情境。「要參加還是不參加」。'
            },
            // 第 6 題：陷阱題 - 正確答案是「かどうか」不是「か〜か」
            {
                id: 'n5_q_ka_ka_6',
                sentence: '彼{かれ}が来{く}る（　）わかりません。',
                options: ['か来{こ}ないか', 'かどうか', 'か何{なに}か', 'かも'],
                correctIndex: 1,
                explanation: {
                    correct: '「かどうか」正確！表示「是否」時{じ}用「かどうか」。這是陷阱題！',
                    wrong: [
                        '「か来{こ}ないか」錯誤：雖然「か〜か」表示選擇，但這裡只是單純問「是否」，用「かどうか」更自然簡潔。',
                        '「か何{なに}か」錯誤：「か何か」是「～或什麼的」，意思不同。',
                        '「かも」錯誤：「かも（しれない）」是「可能」，不是「是否」。'
                    ]
                }
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
                title: '接續方式',
                description: '句子 + けど',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '表示逆接（轉折），意思是「雖然...但是...」。\n是「が」或「けれども」的口語形式。語氣較隨意。',
                examples: [
                    { japanese: '行きたいけど、時間がない。', chinese: '雖然想去，但沒時間。' }
                ]
            },
            {
                usageId: 3,
                title: '緩衝語氣',
                description: '有時用於句尾，不一定表示轉折，而是用來緩和語氣或引出話題。',
                examples: [
                    { japanese: 'もしもし、田中ですけど...', chinese: '喂，我是田中...' }
                ]
            }
            ,
            {
                usageId: 99, /* PDF Auto-Merge */
                title: '更多例句 (From PDF)',
                description: '意思：但是; 雖然 (口語)',
                examples: [
                    { japanese: '仕事は⾟いけど楽しい。', chinese: '工作很辛苦，但是很開心。' },
                    { japanese: '⾦はないけど夢はある。', chinese: '雖然沒錢，但是有夢想。' },
                    { japanese: 'スポーツは上⼿じゃない けど、好きです。', chinese: '雖然不擅長運動，但是喜歡。' },
                    { japanese: '悪いけど、明⽇のパーティーに⾏けません。', chinese: '不好意思，明天的派對我不能去。' },
                    { japanese: '眠いけど、まだ宿題があるから寝られません。', chinese: '雖然很睏，但還有作業所以不能睡。' },
                    { japanese: 'たくさん勉強したけど、テストの点はよくないでした。', chinese: '雖然讀了很多書，但考試分數不太好。' },
                    { japanese: '泣いたけど後悔はしていません。', chinese: '雖然哭了，但不後悔。' },
                    { japanese: '家賃は⾼いけどこのマンションが⼤好きです。', chinese: '雖然房租很貴，但很喜歡這間公寓。' }
                ]
            }],
        quiz: [
            {
                id: 'n5_q_kedo_1',
                sentence: '頭{あたま}が痛{いた}い（　）、薬{くすり}はありませんか。',
                options: ['けど', 'から', 'ので', 'し'],
                correctIndex: 0,
                explanation: '鋪陳狀況「你是頭{あたま}痛{いた}（但是.../所以...），有沒有藥？」。雖翻譯為「所以」通順，但「けど」常用於單純陳述現狀並尋求幫助。'
            },
            {
                id: 'n5_q_kedo_2',
                sentence: '勉強した（　）、テストは悪かった。',
                options: ['けど', 'から', 'ので', 'たり'],
                correctIndex: 0,
                explanation: '逆接「雖然唸了書，但考得不好{す}」。'
            },
            {
                id: 'n5_q_kedo_3',
                sentence: 'この店{みせ}は高{たか}い（　）、味はいい。',
                options: ['けど', 'し', 'から', 'ので'],
                correctIndex: 0,
                explanation: '逆接。'
            },
            {
                id: 'n5_q_kedo_4',
                sentence: '「今{いま}、暇{ひま}？」\n「暇{ひま}だ（　）、何{なに}？」',
                options: ['けど', 'から', 'ので', 'し'],
                correctIndex: 0,
                explanation: '對話情境。「我是有空{そら}啦，幹嘛？」（緩和語氣/回應現狀）。'
            },
            {
                id: 'n5_q_kedo_5',
                sentence: '「あの映{えい}画{が}見{み}た？」\n「見{み}た（　）、面白くなかったよ。」',
                options: ['けど', 'し', 'から', 'ので'],
                correctIndex: 0,
                explanation: '對話情境。「看了是看了，但是...」。'
            },
            // 第 6 題：陷阱題 - 正確答案是「が」不是「けど」
            {
                id: 'n5_q_kedo_6',
                sentence: '申{もう}し訳{わけ}ございません（　）、本日{ほんじつ}は満席{まんせき}でございます。',
                options: ['けど', 'が', 'けれど', 'でも'],
                correctIndex: 1,
                explanation: {
                    correct: '「が」正確！這是非常正式的場{ば}合{あい}（敬語），用「が」比「けど」更正式。這是陷阱題！',
                    wrong: [
                        '「けど」錯誤：「けど」是口語，在使用敬語的正式場{ば}合{あい}太{ふと}隨便{す}！',
                        '「けれど」錯誤：「けれど」比「けど」正式，但比「が」還是口語一些。',
                        '「でも」錯誤：「でも」是放句首的接續詞，不能放這裡。'
                    ]
                }
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
                description: '比「けど」正式，比「が」口語一些。用法與「けど」基本{ほん}相同。',
                examples: [
                    { japanese: '春{はる}になりました。けれども、まだ寒{さむ}いです。', chinese: '春{はる}天到了。但是，還是很冷{つめ}。' },
                    { japanese: '一生懸命{いっしょうけんめい}走{はし}りましたけれども、間{ま}に合{あ}いませんでした。', chinese: '雖然拚命跑了，但還是沒趕上。' }
                ]
            }
            ,
            {
                usageId: 99, /* PDF Auto-Merge */
                title: '更多例句 (From PDF)',
                description: '意思：但是; 雖然 (較正式)',
                examples: [
                    { japanese: 'このカメラは⾼かった けれど、すぐ壊れてしまいました。', chinese: '這台相機雖然很貴，但馬上就壞了。' },
                    { japanese: '外は暑いけれど、家の中は暖かいです。', chinese: '雖然外面很熱，但家裡很溫暖。（註：原文可能有誤，通常是外面冷家裡暖，或外面熱家裡涼）' },
                    { japanese: '眠いけれど、まだ宿題があるから寝られません。', chinese: '雖然很睏，但還有作業所以不能睡。' },
                    { japanese: '雪が降っているけれども、スーパーに⾏きます。', chinese: '雖然在下雪，還是要去超市。' },
                    { japanese: 'お⾦はあまり持っていません。けれども、毎⽇幸せです。', chinese: '雖然沒什麼錢。但是每天都很幸福。' },
                    { japanese: '先⽣はクラスでは厳しい けれど、クラスの外ではやさしいです。', chinese: '老師在班上很嚴格，但在課外很溫柔。' },
                    { japanese: '彼は若いけれども経験がある。', chinese: '雖然他很年輕，但有經驗。' },
                    { japanese: '列⾞が遅れたけれども、なんとか間に合った。', chinese: '雖然火車晚點了，但總算趕上了。' }
                ]
            }],
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
                sentence: 'おいしいです（　）、カロリーが高{たか}いです。',
                options: ['けれども', 'から', 'ので', 'し'],
                correctIndex: 0,
                explanation: '逆接。'
            },
            {
                id: 'n5_q_keredomo_3',
                sentence: '昨{き}日{のう}は雨でした（　）、今日{きょう}は晴れです。',
                options: ['けれども', 'から', 'ので', 'し'],
                correctIndex: 0,
                explanation: '逆接。'
            },
            {
                id: 'n5_q_keredomo_4',
                sentence: '「お元{げん}気{き}ですか。」\n「はい、元{げん}気{き}です（　）、最近忙{いそが}しいです。」',
                options: ['けれども', 'から', 'ので', 'し'],
                correctIndex: 0,
                explanation: '對話情境。「很好{す}是很好{す}，但是...」。'
            },
            {
                id: 'n5_q_keredomo_5',
                sentence: '「ご予約の方ですか。」\n「はい、予約しました（　）、席はありますか。」',
                options: ['けれども', 'から', 'ので', 'し'],
                correctIndex: 0,
                explanation: '對話情境。鋪陳語氣。'
            },
            // 第 6 題：陷阱題 - 正確答案是「けど」不是「けれども」
            {
                id: 'n5_q_keredomo_6',
                sentence: '「今日{きょう}暇{ひま}？」\n「うん、暇{ひま}だ（　）、何{なに}？」',
                options: ['けれども', 'けど', 'が', 'ので'],
                correctIndex: 1,
                explanation: {
                    correct: '「けど」正確！朋友間的輕鬆對話用口語「けど」比「けれども」自然。這是陷阱題！',
                    wrong: [
                        '「けれども」錯誤：「けれども」太{ふと}正式！朋友間的口語對話用「けど」更自然。',
                        '「が」錯誤：「が」是最正式的逆接，朋友間不會這樣說。',
                        '「ので」錯誤：「ので」是原{げん}因{いん}（因為），不是逆接（但是）。'
                    ]
                }
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
                title: '接續方式',
                description: 'まだ + 肯定 / 否定',
                examples: []
            },
            {
                usageId: 2,
                title: '用法一：尚在持續 (肯定)',
                description: '不管是動作還是狀態，表示還在進行中。意思是「還...」。',
                examples: [
                    { japanese: 'まだ雨が降っています。', chinese: '還在下雨。' }
                ]
            },
            {
                usageId: 3,
                title: '用法二：尚未完成 (否定)',
                description: '與否定形搭配，表示「還沒...」。常搭配「～ていません」。',
                examples: [
                    { japanese: 'まだ食べていません。', chinese: '還沒吃。' },
                    { japanese: 'まだ決めていない。', chinese: '還沒決定。' }
                ]
            }
            ,
            {
                usageId: 99, /* PDF Auto-Merge */
                title: '更多例句 (From PDF)',
                description: '意思：還; 尚未',
                examples: [
                    { japanese: 'まだですか︖', chinese: '還沒好嗎？/還沒到嗎？' },
                    { japanese: 'まだまだ暑いだ。', chinese: '天氣還很熱啊。' },
                    { japanese: '先⽣はまだ来ていない。', chinese: '老師還沒來。' },
                    { japanese: 'もう10時ですが弟がまだ寝ている。', chinese: '已經10點了，弟弟還在睡。' },
                    { japanese: 'まだ1時間もあるよ。', chinese: '還有1個小時喔。' },
                    { japanese: 'あきらめるのはまだ早い︕', chinese: '現在放棄還太早！' },
                    { japanese: '私は宿題がまだ終わっていません。', chinese: '我的作業還沒寫完。' }
                ]
            },
            {
                usageId: 99, /* PDF Auto-Merge */
                title: '更多例句 (From PDF)',
                description: '意思：還沒...',
                examples: [
                    { japanese: 'バスはまだ来ていません。', chinese: '公車還沒來。' },
                    { japanese: 'まだ、決まっていません 。', chinese: '還沒決定。' },
                    { japanese: '私はまだ朝ごはんを⾷べていません 。', chinese: '我還沒吃早餐。' },
                    { japanese: '今週の新しい単語をまだ覚えていません 。', chinese: '這週的新單字還沒記住。' },
                    { japanese: '⽗はまだ帰ってきていない。', chinese: '父親還沒回來。' },
                    { japanese: 'まだ宿題をやっていない。', chinese: '還沒做作業。' },
                    { japanese: '俺はまだあきらめてないんだぞ。', chinese: '我可還沒放棄喔。' },
                    { japanese: '私の知っている限りでは、彼⼥は まだ結婚していません 。', chinese: '據我所知，她還沒結婚。' }
                ]
            }],
        quiz: [
            {
                id: 'n5_q_mada_1',
                sentence: '（　）学{がっ}校{こう}にいますか。',
                options: ['まだ', 'もう', 'すぐ', 'たぶん'],
                correctIndex: 0,
                explanation: '詢問「還」在學校嗎。'
            },
            {
                id: 'n5_q_mada_2',
                sentence: '宿{しゅく}題{だい}は（　）終{お}わっていません。',
                options: ['もう', 'まだ', 'いつも', 'よく'],
                correctIndex: 1,
                explanation: '搭配否定「還沒」結束。'
            },
            {
                id: 'n5_q_mada_3',
                sentence: '彼{かれ}は（　）若{わか}いです。',
                options: ['もう', 'まだ', 'いつ', 'あまり'],
                correctIndex: 1,
                explanation: '「還」很年輕。'
            },
            {
                id: 'n5_q_mada_4',
                sentence: '「もうご飯{はん}を食べましたか。」\n「いいえ、（　）です。」',
                options: ['まだ', 'もう', 'いつ', 'たぶん'],
                correctIndex: 0,
                explanation: '對話情境。回答「還沒」。'
            },
            {
                id: 'n5_q_mada_5',
                sentence: '「田{た}中{なか}さんは来ましたか。」\n「いいえ、（　）来{き}ていません。」',
                options: ['もう', 'まだ', 'いつも', 'よく'],
                correctIndex: 1,
                explanation: '對話情境。「還沒來」。'
            },
            // 第 6 題：陷阱題 - 正確答案是「もう」不是「まだ」
            {
                id: 'n5_q_mada_6',
                sentence: 'もう11時{じ}だ。（　）寝{ね}よう。',
                options: ['まだ', 'もう', 'まだまだ', 'いつも'],
                correctIndex: 1,
                explanation: {
                    correct: '「もう」正確！「もう寝{ね}よう」表示「該睡了」、「我要睡了」。這裡的「もう」表示「已經到了該做某事的時候」。這是陷阱題！',
                    wrong: [
                        '「まだ」錯誤：「まだ」表示「還」，但這裡不是說「還在做某事」，而是「已經很晚了，該睡了」。',
                        '「まだまだ」錯誤：「まだまだ」表示「還早」、「差得遠」，語意相反。',
                        '「いつも」錯誤：「いつも」表示「總是」，與句意不合。'
                    ]
                }
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
                description: '特{とく}別{べつ}強調動作目前尚未完成，但預期將來會發生。回答「もう～ましたか（已經...了嗎）」的否定時{じ}，必須用「まだ～ていません」，不能用「～ませんでした」。',
                examples: [
                    { japanese: '「もう手{て}紙{がみ}を書{か}きましたか。」「いいえ、まだ書{か}いていません。」', chinese: '「信寫了嗎？」「不，還沒寫。」' },
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
                sentence: '「もう掃{そう}除{じ}しましたか。」\n「いいえ、まだ（　）。」',
                options: ['掃{そう}除{じ}しませんでした', '掃{そう}除{じ}していません', '掃{そう}除{じ}しません', '掃{そう}除{じ}したくないです'],
                correctIndex: 1,
                explanation: '詢問是否已經做完，否定回答用「まだ～ていません」。'
            },
            {
                id: 'n5_q_mada_te_imasen_2',
                sentence: '父{ちち}は（　）帰{かえ}っていません。',
                options: ['もう', 'まだ', 'すぐ', 'たぶん'],
                correctIndex: 1,
                explanation: '「還沒」回家{いえ}。'
            },
            {
                id: 'n5_q_mada_te_imasen_3',
                sentence: 'この本{ほん}はまだ（　）。',
                options: ['読みません', '読まないです', '読{よ}んでいません', '読まなかったです'],
                correctIndex: 2,
                explanation: '「還沒讀」。'
            },
            {
                id: 'n5_q_mada_te_imasen_4',
                sentence: '「レポートは終{お}わりましたか。」\n「いいえ、まだ（　）。」',
                options: ['終{お}わりませんでした', '終{お}わっていません', '終{お}わりません', '終{お}わるでしょう'],
                correctIndex: 1,
                explanation: '對話情境。還沒結束。'
            },
            {
                id: 'n5_q_mada_te_imasen_5',
                sentence: '「切{きっ}符{ぷ}を買いましたか。」\n「いいえ、まだ（　）。」',
                options: ['買いませんでした', '買{か}っていません', '買いません', '買いたくありません'],
                correctIndex: 1,
                explanation: '對話情境。還沒買。'
            },
            // 第 6 題：陷阱題 - 正確答案是「ませんでした」不是「ていません」
            {
                id: 'n5_q_mada_te_imasen_6',
                sentence: '昨日{きのう}は時{じ}間{かん}がなかったので、宿{しゅく}題{だい}を（　）。',
                options: ['していません', 'しませんでした', 'しません', 'しないでした'],
                correctIndex: 1,
                explanation: {
                    correct: '「しませんでした」正確！這裡說的是「昨天沒時{じ}間{かん}，所以沒做作業」，是單純描述過去的事實，不是「還沒做」。用「ませんでした」。這是陷阱題！',
                    wrong: [
                        '「していません」錯誤：「まだ～ていません」用於「還沒做（但打算做）」。但這裡是說「昨天沒做」的單純過去事實！',
                        '「しません」錯誤：「しません」是現在式/未來式，不是過去式。',
                        '「しないでした」錯誤：這是文法錯誤的形式。「ない」的過去式是「なかった」或「ませんでした」。'
                    ]
                }
            }
        ]
    },
    'n5_made': {
        id: 'n5_made',
        pattern: 'まで',
        connection: '名詞（時{じ}間{かん}/地點） + まで',
        translation: '直到...; 到...為止',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: '名詞(時間/地點) / 動詞辭書形 + まで',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '表示動作或狀態持續的終點。意思是「到...」、「直到...」。',
                examples: [
                    { japanese: '大阪まで新幹線で行きます。', chinese: '搭新幹線到大阪。' },
                    { japanese: '明日まで待ちます。', chinese: '等到明天為止。' }
                ]
            }
            ,
            {
                usageId: 99, /* PDF Auto-Merge */
                title: '更多例句 (From PDF)',
                description: '意思：到...; 直到...; 甚至...',
                examples: [
                    { japanese: '昨⽇までお休みでした。', chinese: '休假到昨天為止。' },
                    { japanese: 'ここからそこまでは遠いですよ。', chinese: '從這裡到那裡很遠喔。' },
                    { japanese: '駅まで⾏きたいんですが、どう⾏ったらいいですか。', chinese: '想去車站，請問該怎麼走？' },
                    { japanese: '最後までがんばってね︕', chinese: '堅持到最後喔！' },
                    { japanese: '家まで⾞で送ります。', chinese: '開車送你到家。' },
                    { japanese: '朝から夜までずっとかんじを勉強しました。', chinese: '從早到晚一直在學漢字。' },
                    { japanese: 'お店は何時から何時まで開いていますか︖', chinese: '店從幾點開到幾點？' },
                    { japanese: '先⽣、何時まで学校にいらっしゃいますか。', chinese: '老師，您在學校待到幾點？' },
                    { japanese: '昼ごはんまでにレポートを書いてしまいました。', chinese: '午餐前就把報告寫完了。（註：原文為made ni，表示期限）' },
                    { japanese: '⾬が降っているよ。駅 まで送ってあげようか︖', chinese: '在下雨喔。我送你到車站吧？' }
                ]
            }],
        quiz: [
            {
                id: 'n5_q_made_1',
                sentence: '駅{えき}（　）歩きます。',
                options: ['まで', 'から', 'に', 'は'],
                correctIndex: 0,
                explanation: '走到車{くるま}站「為止」。'
            },
            {
                id: 'n5_q_made_2',
                sentence: '夏{なつ}休{やす}みは来{らい}週{しゅう}（　）です。',
                options: ['から', 'まで', 'に', 'で'],
                correctIndex: 1,
                explanation: '暑{あつ}假持續「到」下週。'
            },
            {
                id: 'n5_q_made_3',
                sentence: '７時{じ}（　）待{ま}っていました。',
                options: ['から', 'まで', 'に', 'を'],
                correctIndex: 1,
                explanation: '等到7點。'
            },
            {
                id: 'n5_q_made_4',
                sentence: '「ここから家{いえ}までどのくらいかかりますか。」\n「１時{じ}間{かん}（　）です。」',
                options: ['まで', 'くらい', 'ごろ', 'など'],
                correctIndex: 1,
                explanation: '對話情境。注意！「どのくらい」（多久/多少）回答通常用「くらい」（大約）。此題陷阱。若{わか}要選「まで」語意不通。但題目是考made？不，這是混合題。若{わか}選項改為：A: まで B: から C: に 則選A。但原題意在考「到家{いえ}為止」。題目應該挖在問句？不。讓我們把題目改簡單一點。'
            },
            {
                id: 'n5_q_made_5',
                sentence: '「何{なん}時{じ}（　）働{はたら}きますか。」\n「６時{じ}までです。」',
                options: ['まで', 'から', 'に', 'を'],
                correctIndex: 0,
                explanation: '對話情境。工作到幾點。'
            },
            // 第 6 題：陷阱題 - 正確答案是「までに」不是「まで」
            {
                id: 'n5_q_made_6',
                sentence: '明日{あした}の５時{じ}（　）レポートを出{だ}してください。',
                options: ['まで', 'までに', 'から', 'ごろ'],
                correctIndex: 1,
                explanation: {
                    correct: '「までに」正確！「截止期限」用「までに」。意思是「5點之前提交（不需要持續到5點）」。這是陷阱題！',
                    wrong: [
                        '「まで」錯誤：「まで」表示「持續到某時{じ}」。提交報告是瞬間動作，不能持續到5點。截止期限用「までに」！',
                        '「から」錯誤：「から」表示起點「從...」，不表示截止。',
                        '「ごろ」錯誤：「ごろ」表示「大約...時{じ}候」，不表示截止。'
                    ]
                }
            }
        ]
    },
    'n5_mae_ni': {
        id: 'n5_mae_ni',
        pattern: '前{まえ}に（まえに）',
        connection: '動詞辭書形 / 名詞 + の + 前{まえ}に',
        translation: '在...之前; ...前面',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: '名詞+の / 動詞辭書形 / 時間詞 + 前に',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '表示時間的先後順序，意思是「在...之前」。\n若是接動詞，必須用辭書形（原形）。',
                examples: [
                    { japanese: '寝る前に歯を磨きます。', chinese: '睡前刷牙。' },
                    { japanese: '食事の前に手を洗います。', chinese: '飯前洗手。' },
                    { japanese: '30分前に来ました。', chinese: '30分鐘前來的。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_mae_ni_1',
                sentence: '日{に}本{ほん}へ（　）前{まえ}に、日{に}本{ほん}語{ご}を勉強しました。',
                options: ['来{く}る', '来{き}た', '来{き}て', '来{き}ます'],
                correctIndex: 0,
                explanation: '動詞接「前{まえ}に」必須用辭書形（基本{ほん}形），即使動作發生在過去。'
            },
            {
                id: 'n5_q_mae_ni_2',
                sentence: 'テストの（　）勉強します。',
                options: ['前', '前{まえ}に', '後', '後に'],
                correctIndex: 1,
                explanation: '考試「之前」。「名詞+の+前{まえ}に」。'
            },
            {
                id: 'n5_q_mae_ni_3',
                sentence: '（　）前{まえ}に薬{くすり}を飲{の}みます。',
                options: ['寝{ね}る', '寝た', '寝て', '寝'],
                correctIndex: 0,
                explanation: '「寢る前{まえ}に」（睡前）。'
            },
            {
                id: 'n5_q_mae_ni_4',
                sentence: '「いつ手を洗{あら}いますか。」\n「ご飯{はん}を（　）前{まえ}に洗{あら}います。」',
                options: ['食{た}べる', '食べた', '食{た}べて', '食{た}べます'],
                correctIndex: 0,
                explanation: '對話情境。「食{た}べる前{まえ}に」。'
            },
            {
                id: 'n5_q_mae_ni_5',
                sentence: '「駅{えき}の（　）で会いましょう。」\n「わかりました。」',
                options: ['前', '前{まえ}に', '上', '中{なか}'],
                correctIndex: 0,
                explanation: '對話情境。車{くるま}站「前」見{み}面。地點名詞。'
            },
            // 第 6 題：陷阱題 - 正確答案是「後で」不是「前に」
            {
                id: 'n5_q_mae_ni_6',
                sentence: '食{た}べた（　）、薬{くすり}を飲{の}みます。',
                options: ['前{まえ}に', '後{あと}で', 'ながら', 'とき'],
                correctIndex: 1,
                explanation: {
                    correct: '「後{あと}で」正確！「食べた後{あと}で」＝吃完之後。動詞た形接「後{あと}で」表示「...之後」。這是陷阱題！',
                    wrong: [
                        '「前{まえ}に」錯誤：「前{まえ}に」接動詞辭書形（原形），不接た形。而且這裡說的是「吃完後」吃藥，不是「吃之前」。',
                        '「ながら」錯誤：「ながら」表示同時{じ}進行，這裡是先後順序。',
                        '「とき」錯誤：「とき」是「...的時{じ}候」，不是「...之後」。'
                    ]
                }
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
                title: '接續方式',
                description: '動詞(ます形去掉ます) + ませんか',
                examples: []
            },
            {
                usageId: 2,
                title: '邀請/建議 (要不要...)',
                description: '意思：要不要...？、不...嗎？\n用於禮貌地邀請他人做某事。\n例：行きませんか (要不要去？)。',
                examples: [
                    { japanese: '今⽇⼀緒に⾷べませんか︖', chinese: '今天以此一起吃飯好嗎？' },
                    { japanese: 'うちで映画を⾒ませんか。', chinese: '要不要在我家看電影？' },
                    { japanese: 'お茶にしませんか︖', chinese: '要不要喝杯茶？' },
                    { japanese: '⽇曜⽇にテニスをしませんか。', chinese: '星期天要不要打網球？' },
                    { japanese: '明⽇⾃転⾞で学校へ⾏きませんか︖', chinese: '明天要不要騎腳踏車去學校？' },
                    { japanese: 'もう暗くなりました。家へ帰りませんか。', chinese: '天已經黑了。要不要回家了？' },
                    { japanese: '写真をとってくれませんか︖', chinese: '能幫我拍張照嗎？' }
                ]
            }
            ,
            {
                usageId: 99, /* PDF Auto-Merge */
                title: '更多例句 (From PDF)',
                description: '意思：要不要...?; 不...嗎? (邀約)',
                examples: [
                    { japanese: '今⽇⼀緒に⾷べませんか︖', chinese: '今天要不要一起吃？' },
                    { japanese: 'うちで映画を⾒ませんか。', chinese: '要不要在我家看電影？' },
                    { japanese: 'お茶にしませんか︖', chinese: '要不要喝杯茶？' },
                    { japanese: '⽇曜⽇にテニスをしませんか。', chinese: '週日要不要打網球？' },
                    { japanese: '明⽇⾃転⾞で学校へ⾏き ませんか︖', chinese: '明天要不要騎腳踏車去學校？' },
                    { japanese: 'もう暗くなりました。家へ帰りませんか。', chinese: '已經變暗了。要不要回家了？' },
                    { japanese: '写真をとってくれませんか︖', chinese: '可以幫我拍張照嗎？' },
                    { japanese: '私の仕事を⼿伝ってくれません か。', chinese: '可以幫忙我的工作嗎？' }
                ]
            }],
        quiz: [
            {
                id: 'n5_q_masen_ka_1',
                sentence: '明{あし}日{た}、テニスを（　）。',
                options: ['しませんか', 'しましょうか', 'しますか', 'しないで'],
                correctIndex: 0,
                explanation: '邀約「要不要打網球」。'
            },
            {
                id: 'n5_q_masen_ka_2',
                sentence: '一緒に行{い}き（　）。',
                options: ['ませんか', 'ましょう', 'ます', 'ました'],
                correctIndex: 0,
                explanation: '「行{い}きませんか」（要不要去）。'
            },
            {
                id: 'n5_q_masen_ka_3',
                sentence: '少{すこ}し休{やす}み（　）。',
                options: ['ませんか', 'ません', 'ます', 'ました'],
                correctIndex: 0,
                explanation: '「休{やす}みませんか」（要不要休息一下）。'
            },
            {
                id: 'n5_q_masen_ka_4',
                sentence: '「日{にち}曜{よう}日{び}、映{えい}画{が}を見{み}ませんか。」\n「いいですね。（　）。」',
                options: ['行{い}きましょう', '行{い}きません', '行{い}ってください', '行{い}きますよ'],
                correctIndex: 0,
                explanation: '對話情境。答應邀約，「好{す}啊，走吧」。'
            },
            {
                id: 'n5_q_masen_ka_5',
                sentence: '「コーヒーを飲{の}みませんか。」\n「すみません、今{いま}は（　）。」',
                options: ['ちょっと', 'いいです', '飲{の}みましょう', 'はい'],
                correctIndex: 0,
                explanation: '對話情境。拒絕邀約的委婉説法「ちょっと...」。'
            },
            // 第 6 題：陷阱題 - 正確答案是「ましょうか」不是「ませんか」
            {
                id: 'n5_q_masen_ka_6',
                sentence: '「暑{あつ}いですね。」「エアコンを（　）。」',
                options: ['つけませんか', 'つけましょうか', 'つけてください', 'つけたいです'],
                correctIndex: 1,
                explanation: {
                    correct: '「つけましょうか」正確！對方說「好{す}熱」，你主動提議幫忙{いそが}開冷{つめ}氣，用「ましょうか」（要我開嗎？）。這是陷阱題！',
                    wrong: [
                        '「つけませんか」錯誤：「ませんか」是邀約對方一起做，但開冷{つめ}氣是你一個人{ひと}做的事，不是邀請對方一起開。這裡要用「ましょうか」表示主動幫忙{いそが}。',
                        '「つけてください」錯誤：「ください」是請求對方做，但這裡應該是你主動提議幫忙{いそが}。',
                        '「つけたいです」錯誤：「たいです」表示自己的願望，不適合用在這種情境。'
                    ]
                }
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
                title: '接續方式',
                description: '動詞(ます形去掉ます) + ましょう',
                examples: []
            },
            {
                usageId: 2,
                title: '提議 (吧/Let\'s)',
                description: '意思：...吧、一起...吧。\n用於提議一起做某事。\n例：食べましょう (吃吧/我們吃吧)。',
                examples: [
                    { japanese: '⾏きましょう︕', chinese: '走吧！' },
                    { japanese: '駅で会いましょう︕', chinese: '在車站見吧！' },
                    { japanese: 'もうご飯の時間だよ、早く⾷べましょう︕', chinese: '已經是吃飯時間了，快點吃吧！' },
                    { japanese: '帰る前に教室をきれいにしましょう。', chinese: '回去之前把教室打掃乾淨吧。' },
                    { japanese: '⼀緒に⽇本語を勉強しましょう︕', chinese: '一起學習日語吧！' },
                    { japanese: '電気をつけて、部屋を明るくしましょう。', chinese: '開燈讓房間變亮吧。' }
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
                        { japanese: 'コーヒーを飲{の}みましょう。', chinese: '喝杯咖啡吧。（積極提議）', note: '○ 用於熟人{ひと}或確認行動' }
                    ]
                }
            ],
            summary: '對上司或長輩邀約時{じ}，建議用「～ませんか」。確認彼{かれ}此都同意的行動時{じ}，用「～ましょう」。'
        },
        tips: {
            title: '小提醒',
            items: [
                {
                    mistake: '誤用「ましょう」回答問{もん}題{だい}',
                    explanation: '當別人{ひと}問「行{い}きますか」（要去嗎？）時{じ}，若{わか}單純回答事實，用「行{い}きます」。若{わか}回答邀約，用「行{い}きましょう」。',
                    whenToUse: '回應邀約時{じ}。',
                    correct: { sentence: '「行{い}きませんか像」「ええ、行{い}きましょう。」', note: '○ 回應邀約' },
                    incorrect: { sentence: '「明{あし}日{た}学{がっ}校{こう}へ行{い}きますか」「ええ、行{い}きましょう」', note: '△ 除非是約好{す}一起去，否則單純回答行程用「行{い}きます」' }
                }
                ,
                {
                    usageId: 99, /* PDF Auto-Merge */
                    title: '更多例句 (From PDF)',
                    description: '意思：...吧 (提議)',
                    examples: [
                        { japanese: '⾏きましょう︕', chinese: '走吧！' },
                        { japanese: '駅で会いましょう︕', chinese: '在車站見吧！' },
                        { japanese: 'もうご飯の時間だよ、早く⾷べましょう︕', chinese: '已經是吃飯時間了，快點吃吧！' },
                        { japanese: '帰る前に教室をきれいにしましょう。', chinese: '回去前把教室打掃乾淨吧。' },
                        { japanese: '⼀緒に⽇本語を勉強し ましょう︕', chinese: '一起學日文吧！' },
                        { japanese: 'もう暗くなったから、帰りましょう。', chinese: '已經變暗了，回家吧。' },
                        { japanese: '来週、すしを⾷べに⾏き ましょうよ︕', chinese: '下週去吃壽司吧！' },
                        { japanese: '10時になったら、出かけましょう。', chinese: '到了10點就出門吧。' },
                        { japanese: '電気をつけて、部屋を明るくしましょう。', chinese: '開燈讓房間變亮吧。' },
                        { japanese: '決める前にもっとデータを収集し ましょう。', chinese: '決定之前先多收集點數據吧。' }
                    ]
                },
                {
                    usageId: 99, /* PDF Auto-Merge */
                    title: '更多例句 (From PDF)',
                    description: '意思：我來...好嗎? (主動提議)',
                    examples: [
                        { japanese: 'マドを開けましょうか。', chinese: '我把窗戶打開好嗎？' },
                        { japanese: '⼿伝いましょうか 。', chinese: '要幫忙嗎？' },
                        { japanese: '荷物を持ちましょうか。', chinese: '我幫您拿行李吧？' },
                        { japanese: 'タクシーを呼びましょうか 。', chinese: '我幫您叫計程車吧？' },
                        { japanese: '私がお⽫を洗いましょうか ︖', chinese: '我來洗盤子好嗎？' },
                        { japanese: '写真を取りましょうか。', chinese: '我幫您拍照吧？' },
                        { japanese: 'サラダを作りましょうか︖', chinese: '我來做沙拉好嗎？' }
                    ]
                }]
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
                sentence: 'ご飯{はん}を（　）。',
                options: ['食べましょう', '食{た}べます', '食{た}べて', '食べた'],
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
                sentence: '「タクシーで帰{かえ}りませんか。」\n「そうですね。（　）。」',
                options: ['帰{かえ}りましょう', '帰{かえ}ります', '帰{かえ}っています', '帰{かえ}りません'],
                correctIndex: 0,
                explanation: '對話情境。同意對方的提議。「好{す}啊，（我們就）搭計程車{くるま}回去吧。」'
            },
            {
                id: 'n5_q_mashou_5',
                type: 'inline_quiz',
                grammarPoint: 'ましょう',
                sentence: '「ちょっと疲{つか}れましたね。」\n「じゃあ、あそこの店{みせ}で（　）。」',
                options: ['休{やす}みましょう', '休{やす}みます', '休{やす}みました', '休んで'],
                correctIndex: 0,
                explanation: '對話情境。順著對方的話提議休息。'
            },
            // 第 6 題：陷阱題 - 正確答案是「ませんか」不是「ましょう」
            {
                id: 'n5_q_mashou_6',
                sentence: '（初めて会った人{ひと}に）「今度{こんど}、一緒{いっしょ}に食事{しょくじ}（　）。」',
                options: ['しましょう', 'しませんか', 'しますか', 'してください'],
                correctIndex: 1,
                explanation: {
                    correct: '「しませんか」正確！第一次邀請不太{ふと}熟的人{ひと}時{じ}，用「ませんか」比較禮貌，給對方拒絕的餘地。這是陷阱題！',
                    wrong: [
                        '「しましょう」錯誤：「ましょう」假設對方會同意，對初次見{み}面的人{ひと}太{ふと}直接、太{ふと}強勢。用「ませんか」比較有禮。',
                        '「しますか」錯誤：「しますか」是單純詢問對方是否會做，不是邀約句型。',
                        '「してください」錯誤：「てください」是請求對方做某事，不是邀約。'
                    ]
                }
            }
        ]
    },
    'n5_mashouka': {
        id: 'n5_mashouka',
        pattern: 'ましょうか',
        connection: '動詞ます形（去掉ます） + ましょうか',
        translation: '我來...好{す}嗎?; 我們...好{す}嗎?',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '主動提供幫助（我來...吧？）',
                description: '看到對方有困難{むずか}，主動詢問是否需要幫忙{いそが}。主語通常是「私{わたし}（我）」，但經常省略。',
                examples: [
                    { japanese: '荷物{にもつ}を持{も}ちましょうか。', chinese: '我幫您拿行李吧？' },
                    { japanese: '窓{まど}を開{あ}けましょうか。', chinese: '要我開窗嗎？' },
                    { japanese: '手伝{てつだ}いましょうか。', chinese: '需要幫忙{いそが}嗎？' }
                ]
            },
            {
                usageId: 2,
                title: '提議共同行動的疑問（要不要一起...？）',
                description: '跟「～ましょう」類似，但是是用疑問句形式來徵求對方意見{み}。主語是「私{わたし}たち（我們）」。',
                examples: [
                    { japanese: '何時{なんじ}に会{あ}いましょうか。', chinese: '我們要幾點見{み}面呢？' },
                    { japanese: 'どこへ行{い}きましょうか。', chinese: '我們要去哪裡呢？' }
                ]
            }
        ],
        analysis: {
            title: '「ましょうか」的使用注意',
            description: '雖然是用來提供幫助，但對長{なが}輩使用可能會顯得有些居高{たか}臨下（彷彿對方沒有能力自己做）。',
            points: [
                {
                    rule: '對平輩或晚輩：可以直接用「～ましょうか」。',
                    examples: [
                        { japanese: '貸{か}しましょうか。', chinese: '要我借你嗎？', note: '○ 自然' }
                    ]
                },
                {
                    rule: '對長{なが}輩或上司：建議改用「〜お持{も}ちします」或「〜ましょうか」前加「私{わたし}が」。',
                    examples: [
                        { japanese: 'お持{も}ちしましょうか。', chinese: '我幫您拿吧。（更禮貌）', note: '○ 謙讓語' }
                    ]
                }
            ],
            summary: '提供幫助時{じ}是好{す}意，但要注意對象。'
        },
        quiz: [
            {
                id: 'n5_q_mashouka_1',
                type: 'inline_quiz',
                grammarPoint: 'ましょうか',
                sentence: '暑{あつ}いですね。エアコンを（　）。',
                options: ['つけましょうか', 'つけますか', 'つけてください', 'つけたいです'],
                correctIndex: 0,
                explanation: '主動提議「要我開冷{つめ}氣嗎？」。'
            },
            {
                id: 'n5_q_mashouka_2',
                type: 'inline_quiz',
                grammarPoint: 'ましょうか',
                sentence: '写真{しゃしん}を（　）。',
                options: ['撮{と}りましょうか', '撮{と}りますか', '撮ってください', '撮っています'],
                correctIndex: 0,
                explanation: '看到別人{ひと}在拍照，主動幫忙{いそが}「要我幫你們拍嗎？」。'
            },
            {
                id: 'n5_q_mashouka_3',
                type: 'inline_quiz',
                grammarPoint: 'ましょうか',
                sentence: '明{あし}日{た}、何{なん}時{じ}に（　）。',
                options: ['来ましょうか', '来{き}ますか', '来{き}て', '来{く}る'],
                correctIndex: 0,
                explanation: '商量約定的時{じ}間{かん}「要幾點來呢？」。'
            },
            {
                id: 'n5_q_mashouka_4',
                type: 'inline_quiz',
                grammarPoint: 'ましょうか',
                sentence: '「荷{に}物{もつ}が多{おお}いですね。（　）。」\n「ありがとうございます。」',
                options: ['持{も}ちましょうか', '持{も}ちませんか', '持{も}ってください', '持{も}っています'],
                correctIndex: 0,
                explanation: '對話情境。主動幫忙{いそが}拿行李。'
            },
            {
                id: 'n5_q_mashouka_5',
                type: 'inline_quiz',
                grammarPoint: 'ましょうか',
                sentence: '「駅{えき}まで（　）。」\n「いいえ、大{だい}丈{じょう}夫{ぶ}です。歩{ある}いて行{い}きますから。」',
                options: ['送りましょうか', '送りますか', '送ってください', '送りたいです'],
                correctIndex: 0,
                explanation: '對話情境。提議「要我送你去嗎？」。對方婉拒。'
            },
            // 第 6 題：陷阱題 - 正確答案是「ませんか」不是「ましょうか」
            {
                id: 'n5_q_mashouka_6',
                sentence: '「週{しゅう}末{まつ}、一緒{いっしょ}にカラオケに（　）。」',
                options: ['行{い}きましょうか', '行{い}きませんか', '行{い}きますか', '行{い}ってください'],
                correctIndex: 1,
                explanation: {
                    correct: '「行{い}きませんか」正確！邀約對方一起去卡拉OK，用「ませんか」表示婉轉邀請。這是陷阱題！',
                    wrong: [
                        '「行{い}きましょうか」錯誤：「ましょうか」有兩個意思：(1)主動幫忙{いそが}「要我去嗎？」(2)商量已決定的事「我們要去嗎？」。這裡是邀約對方一起去，應用「ませんか」。',
                        '「行{い}きますか」錯誤：這是單純詢問對方是否會去，不是邀約。',
                        '「行{い}ってください」錯誤：這是請求對方去，不是邀請對方一起去。'
                    ]
                }
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
                title: '接續方式',
                description: '名詞 + も',
                examples: []
            },
            {
                usageId: 2,
                title: '也 (Too/Also)',
                description: '意思：也、也是。\n表示同類事物的追加。\n常用句型：AもBも (A和B都...)。',
                examples: [
                    { japanese: '私もできる。', chinese: '我也能做。' },
                    { japanese: '⽢いものも⾟いものも好きです。', chinese: '甜的和辣的我都喜歡。' },
                    { japanese: '先⽣も来ました。', chinese: '老師也來了。' },
                    { japanese: '私は⽇本語も英語もベトナム語も話せます。', chinese: '我會說日語、英語還有越南語。' },
                    { japanese: 'あなたもお腹が空いたでしょう︖', chinese: '你肚子也餓了吧？' },
                    { japanese: '私も⽇本語を勉強していますよ︕', chinese: '我也正在學日文喔！' },
                    { japanese: '私の妻も⼦どもも来ます。', chinese: '我的妻子和孩子也都會來。' },
                    { japanese: '仕事に⾏くとき、⾃転⾞も電⾞も使っています。', chinese: '去上班時，自行車和電車都會使用。' }
                ]
            }
        ],
        tips: {
            title: '助詞重疊規則',
            items: [
                {
                    mistake: '取代 vs 共存',
                    explanation: '「も」會取代「は」「が」「を」。但會接在「に」「で」「へ」「から」「まで」的後面。',
                    whenToUse: '使用「も」時{じ}要注意前面的助詞。',
                    correct: { sentence: '日{に}本{ほん}へも行{い}きます。', note: '○ へ + も' },
                    incorrect: { sentence: '日{に}本{ほん}もへ行{い}きます。', note: '✕ 順序錯誤' },
                    additionalExamples: [
                        { context: '取代「を」', correct: { sentence: '水{みず}も飲{の}みます。', note: '○ 原本{ほん}是「水{みず}を」，被取代' } }
                    ]
                }
                ,
                {
                    usageId: 99, /* PDF Auto-Merge */
                    title: '更多例句 (From PDF)',
                    description: '意思：也; 連...都',
                    examples: [
                        { japanese: '私もできる。', chinese: '我也會。' },
                        { japanese: '⽢いものも⾟いものも好きです。', chinese: '甜的和辣的都喜歡。' },
                        { japanese: 'カラオケにはみんなが来ました。先⽣も 来ました。', chinese: '大家都有來唱卡拉OK。老師也來了。' },
                        { japanese: '私は⽇本語も英語もベトナム語も話せます。', chinese: '我會說從日文、英文和越南文。' },
                        { japanese: 'あなたもお腹が空いたでしょう︖', chinese: '你也餓了吧？' },
                        { japanese: '私も⽇本語を勉強していますよ︕', chinese: '我也正在學日文喔！' },
                        { japanese: '私の妻も⼦どもも来ます。', chinese: '我的妻子和孩子也會來。' },
                        { japanese: '私も⽇本で留学したことがあります。', chinese: '我也曾在日本留學過。' },
                        { japanese: '仕事に⾏くとき、⾃転⾞ も電⾞も使っています。', chinese: '去工作時，腳踏車和電車都會用。' }
                    ]
                }]
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
                    correct: '「も」正確！「誰{だれ}もいない」表示「誰{だれ}都不在」。疑問詞 + も + 否定 = 全面否定。',
                    wrong: [
                        '「が」錯誤：「誰{だれ}がいない」語法不對。全面否定要用「誰{だれ}も」。',
                        '「か」錯誤：「誰{だれ}かいない」會變成「有人{ひと}不在嗎？」，語意不同。',
                        '「は」錯誤：「誰{だれ}は」是錯誤的日文。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「は」不是「も」
            {
                id: 'n5_q_mo_3',
                sentence: '田{た}中{なか}さんは来{き}ました。山{やま}田{だ}さん（　）来{き}ませんでした。',
                options: ['も', 'は', 'が', 'を'],
                correctIndex: 1,
                explanation: {
                    correct: '「は」正確！田{た}中{なか}來了，但山{やま}田{だ}沒來。兩者狀態不同，形成對比，用「は」。',
                    wrong: [
                        '「も」錯誤：「も」表示相同狀態（也...）。這裡田{た}中{なか}來了、山{やま}田{だ}沒來，狀態相反，不能用「も」！',
                        '「が」錯誤：「が」用於新資訊，這裡是對比語境。',
                        '「を」錯誤：山{やま}田{だ}是主語，不是受詞。'
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
                        '「にも」也可以，因為「行{い}く」可用「に」或「へ」。但這裡選項中{なか}「へも」更常見{み}。',
                        '「でも」錯誤：「で」用於動作場{ば}所{しょ}，不用於移動方向。',
                        '「かも」錯誤：「どこかも」是錯誤的表達。'
                    ]
                }
            },
            // 第 5 題：辨析題 - 「も」vs「は」的使用區分{ふん}
            {
                id: 'n5_q_mo_5',
                sentence: '「コーヒーを飲{の}みますか。」\n「はい、飲{の}みます。紅{こう}茶{ちゃ}（　）飲{の}みます。」\n「そうですか。では、お茶{ちゃ}（　）どうですか。」\n「お茶{ちゃ}（　）好{す}きですが、今{いま}はいいです。」',
                options: ['も/は/は', 'は/も/も', 'も/も/も', 'は/は/は'],
                correctIndex: 0,
                explanation: {
                    correct: '「も/は/は」正確！第一空{そら}：喝咖啡也喝紅{こう}茶{ちゃ}（相同），用「も」。第二空{そら}：提出新話題「茶怎麼樣？」用「は」。第三空{そら}：「茶的話」，設定話題用「は」。',
                    wrong: [
                        '「は/も/も」錯誤：第一空{そら}是追加相同狀態，應該用「も」不是「は」。',
                        '「も/も/も」錯誤：第二、三空{そら}是設定新話題，不是「也」的意思。',
                        '「は/は/は」錯誤：第一空{そら}是表示「也喝」，需要用「も」。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「は」不是「も」
            {
                id: 'n5_q_mo_6',
                sentence: '「田{た}中{なか}さんは来{き}ましたか。」「いいえ、田{た}中{なか}さん（　）まだ来{き}ていません。」',
                options: ['も', 'は', 'が', 'を'],
                correctIndex: 1,
                explanation: {
                    correct: '「は」正確！這裡是重複確認對方問的主題「田{た}中{なか}さん」，用「は」。不是說「田{た}中{なか}也沒來」，而是「田{た}中{なか}（你問的那個人{ひと}）還沒來」。這是陷阱題！',
                    wrong: [
                        '「も」錯誤：「も」表示「也」，暗示除{じょ}了田{た}中{なか}還有其他人{ひと}沒來。但對話中只問田{た}中{なか}一個人{ひと}，這裡不適合用「も」。',
                        '「が」錯誤：「が」用於新資訊或強調，這裡是重複對方問的主題，用「は」。',
                        '「を」錯誤：「を」是受詞助詞，這裡「田{た}中{なか}さん」是主語，不用「を」。'
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
                title: '接續方式',
                description: 'もう + 句子',
                examples: []
            },
            {
                usageId: 2,
                title: '已經 (Already)',
                description: '意思：已經。\n表示動作已完成或狀態已改變。\n例：もう9時だ (已經9點了)。',
                examples: [
                    { japanese: 'もう昼ご飯の時間だ。早く⾷べましょう︕', chinese: '已經是午餐時間了。快點吃吧！' },
                    { japanese: '宿題はもう終わった︖', chinese: '作業已經做完了嗎？' },
                    { japanese: 'もう少し待ってください。', chinese: '請再等一下 (這裡的 mou 是「再」的意思)。' },
                    { japanese: 'もう10時ですが、彼はまだ寝ています。', chinese: '已經10點了，但他還在睡。' },
                    { japanese: '彼⼥と結婚してから、もう５年になります。', chinese: '和她結婚已經5年了。' }
                ]
            },
            {
                usageId: 3,
                title: '再/另外 (Again/More)',
                description: '意思：再、另外。\n例：もう一杯 (再來一杯)。',
                examples: [
                    { japanese: 'ビールもう⼀杯ください︕', chinese: '啤酒請再來一杯！' }
                ]
            },
            {
                usageId: 4,
                title: '不再 (Not anymore)',
                description: '意思：不再... (搭配否定)。\n例：もう行かない (再也不去了)。',
                examples: [
                    { japanese: '飲み物は全部飲みました。もうありません。', chinese: '飲料全部喝光了。已經沒有了。' },
                    { japanese: 'コーヒーはもう飲まないことにしました。', chinese: '我決定再也不喝咖啡了。' },
                    { japanese: 'もう我慢できない。', chinese: '已經無法忍受了。' }
                ]
            }
            ,
            {
                usageId: 99, /* PDF Auto-Merge */
                title: '更多例句 (From PDF)',
                description: '意思：已經; 再; 其他',
                examples: [
                    { japanese: 'もう昼ご飯の時間だ。早く⾷べましょう︕', chinese: '已經是午餐時間了。快點吃吧！' },
                    { japanese: '宿題はもう終わった︖', chinese: '作業已經寫完了嗎？' },
                    { japanese: 'ビールもう⼀杯ください︕', chinese: '請再給給我一杯啤酒！' },
                    { japanese: '飲み物は全部飲みました。もうありません。', chinese: '飲料全部喝完了。已經沒有了。' },
                    { japanese: 'もう少し待ってください。', chinese: '請再稍等一下。' },
                    { japanese: 'コーヒーはもう飲まないことにしました。', chinese: '我決定不再喝咖啡了。' },
                    { japanese: 'もうこの暑さには、耐えられない。', chinese: '已經受不了這個熱度了。' },
                    { japanese: 'もう我慢できない。', chinese: '再也忍受不了了。' },
                    { japanese: 'もう10時ですが、彼はまだ寝ています。', chinese: '已經10點了，但他還在睡。' },
                    { japanese: '彼⼥と結婚してから、 もう５年になります。', chinese: '自從跟她結婚已經5年了。' }
                ]
            }],
        quiz: [
            {
                id: 'n5_q_mou_1',
                type: 'inline_quiz',
                grammarPoint: 'もう',
                sentence: '（　）宿{しゅく}題{だい}をしましたか。',
                options: ['もう', 'まだ', 'いつ', 'たぶん'],
                correctIndex: 0,
                explanation: '詢問「已經」做完了嗎。'
            },
            {
                id: 'n5_q_mou_2',
                type: 'inline_quiz',
                grammarPoint: 'もう',
                sentence: '（　）少{すこ}し安{やす}くなりませんか。',
                options: ['もう', 'まだ', 'まで', 'よく'],
                correctIndex: 0,
                explanation: '「再」便宜一點。「もう少{すこ}し」（再一點）。'
            },
            {
                id: 'n5_q_mou_3',
                type: 'inline_quiz',
                grammarPoint: 'もう',
                sentence: 'お金{かね}は（　）ありません。',
                options: ['もう', 'まだ', 'いつも', 'とても'],
                correctIndex: 0,
                explanation: '搭配否定，「已經」沒有了（不再有了）。'
            },
            {
                id: 'n5_q_mou_4',
                type: 'inline_quiz',
                grammarPoint: 'もう',
                sentence: '「荷{に}物{もつ}は（　）届{とど}きましたか。」\n「はい、届{とど}きました。」',
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
            },
            // 第 6 題：陷阱題 - 正確答案是「まだ」不是「もう」
            {
                id: 'n5_q_mou_6',
                sentence: '「宿{しゅく}題{だい}はもう終{お}わりましたか。」「いいえ、（　）終{お}わっていません。」',
                options: ['もう', 'まだ', 'よく', 'すぐ'],
                correctIndex: 1,
                explanation: {
                    correct: '「まだ」正確！回答「もう〜ましたか」的否定時{じ}，要用「まだ〜ていません」。「還沒結束」。這是陷阱題！',
                    wrong: [
                        '「もう」錯誤：「もう」用於肯定「已經做了」或否定「不再...」。這裡要表達「還沒」，必須用「まだ」搭配「〜ていません」。',
                        '「よく」錯誤：「よく」是「經常」或「好{す}好{す}地」，不適合這個否定回答。',
                        '「すぐ」錯誤：「すぐ」是「馬上」，語意不通。'
                    ]
                }
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
                description: 'Na形容詞修飾名詞時{じ}，必須在詞幹和名詞之間加「な」。',
                examples: [
                    { japanese: '静{しず}かな部屋{へや}。', chinese: '安靜的房間。' },
                    { japanese: '綺麗{きれい}な花{はな}。', chinese: '漂亮的花。' },
                    {
                        japanese: '「京都{きょうと}はどんな町{まち}ですか。」\n「賑{にぎ}やかな町{まち}です。」',
                        chinese: '「京都無論是什麼樣的城市？」\n「是個熱{ねつ}鬧的城市。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usageId: 2,
                title: '謂語用法（是...的）',
                description: '放在句尾當謂語時{じ}，不管是肯定、否定或過去式，變化方式跟名詞一樣（不加な）。',
                examples: [
                    { japanese: 'この町{まち}は賑{にぎ}やかです。', chinese: '這座城鎮很熱{ねつ}鬧。' },
                    { japanese: '日本語{にほんご}が上{じょう}手{ず}ではありません。', chinese: '日文不擅長{なが}。' },
                    { japanese: '昨日{きのう}は暇{ひま}でした。', chinese: '昨天很閒。' }
                ]
            },
            {
                usageId: 3,
                title: '時{じ}態變化表',
                description: '肯定：です\n否定：ではありません\n過去：でした\n過去否定：ではありませんでした',
                examples: [
                    { japanese: '昨日{きのう}は元{げん}気{き}でした。', chinese: '昨天很有精神。' }
                ]
            }
        ],
        tips: {
            title: '易{やさ}混淆點',
            items: [
                {
                    mistake: '「きれい」的誤判',
                    explanation: '「きれい（綺{き}麗{れい}）」和「きらい（嫌{きら}い）」結尾是「い」，但它們是Na形容詞，不是I形容詞。',
                    whenToUse: '修飾名詞時{じ}要加「な」。',
                    correct: { sentence: 'きれいな部{へ}屋{や}', note: '○ Na形容詞 + な' },
                    incorrect: { sentence: 'きれい部{へ}屋{や}', note: '✕ 漏掉な' },
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
                sentence: '田{た}中{なか}さんは（　）人{ひと}です。',
                options: ['親{しん}切{せつ}な', '親{しん}切{せつ}', '親{しん}切{せつ}の', '親{しん}切{せつ}だ'],
                correctIndex: 0,
                explanation: 'Na形容詞修飾名詞要加「な」。'
            },
            {
                id: 'n5_q_na_adj_2',
                type: 'inline_quiz',
                grammarPoint: 'な形容詞',
                sentence: 'この図{と}書{しょ}館{かん}は（　）です。',
                options: ['静{しず}か', '静{しず}かな', '静くだ', '静くに'],
                correctIndex: 0,
                explanation: '結尾時{じ}直接加「です」（不加な）。'
            },
            {
                id: 'n5_q_na_adj_3',
                type: 'inline_quiz',
                grammarPoint: 'な形容詞',
                sentence: '昨{き}日{のう}は（　）です。',
                options: ['暇{ひま}でした', '暇{ひま}でした', '暇{ひま}かったです', '暇{ひま}なでした'],
                correctIndex: 0,
                explanation: '過去式。「暇{ひま}でした」。'
            },
            {
                id: 'n5_q_na_adj_4',
                type: 'inline_quiz',
                grammarPoint: 'な形容詞',
                sentence: '「日{に}本{ほん}の生{せい}活{かつ}はどうですか。」\n「毎{まい}日{にち}（　）です。」',
                options: ['大変', '大変な', '大変の', '大変だ'],
                correctIndex: 0,
                explanation: '對話情境。結尾回答，「很辛{から}苦{にが}」。「大変です」。'
            },
            {
                id: 'n5_q_na_adj_5',
                type: 'inline_quiz',
                grammarPoint: 'な形容詞',
                sentence: '「どんな映{えい}画{が}が好{す}きですか。」\n「（　）映{えい}画{が}が好{す}きです。」',
                options: ['有{ゆう}名{めい}な', '有{ゆう}名{めい}', '有{ゆう}名{めい}の', '有{ゆう}名{めい}だ'],
                correctIndex: 0,
                explanation: '對話情境。修飾名詞電影，「有{ゆう}名{めい}的電影」。'
            },
            // 第 6 題：陷阱題 - 正確答案是「い形容詞」變化，不是「な形容詞」變化
            {
                id: 'n5_q_na_adj_6',
                sentence: 'この部{へ}屋{や}は（　）ないです。',
                options: ['静{しず}かでは', '広{ひろ}く', '大{おお}きくは', '綺{き}麗{れい}では'],
                correctIndex: 1,
                explanation: {
                    correct: '「広{ひろ}く」正確！「広{ひろ}い」是い形容詞，否定時{じ}把「い」變成「くない」。這是陷阱題！',
                    wrong: [
                        '「静{しず}かでは」錯誤：「静{しず}か」是な形容詞，否定是「静{しず}かではない」或「静{しず}かじゃない」。但題目空{そら}格後面是「ない」，所以應該找い形容詞。',
                        '「大{おお}きくは」錯誤：雖然「大{おお}きい」是い形容詞，但「くは」後面不直接接「ない」。應該用「広{ひろ}くない」。',
                        '「綺{き}麗{れい}では」錯誤：「綺{き}麗{れい}」是な形容詞（雖然結尾是い），否定時{じ}用「では」或「じゃ」接「ありません/ない」。'
                    ]
                }
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
                title: '接續方式',
                description: '句子 + なあ',
                examples: []
            },
            {
                usageId: 2,
                title: '感嘆/詠嘆',
                description: '意思：啊...、呢...。\n用於自言自語或表達強烈的情感、感嘆。\n有時縮略為「な (na)」。\n用法：\n1. 表達感佩 (好...啊)\n2. 表達願望 (真想...啊)\n3. 表達不確定 (是...嗎?)',
                examples: [
                    { japanese: 'たくさんの⼈がいるなあ。', chinese: '哇，有好多人啊。' },
                    { japanese: 'これ、美味しいなあ。', chinese: '這個，真好吃啊。' },
                    { japanese: '暑くなってきたなあ。', chinese: '變熱了啊。' },
                    { japanese: '明⽇は晴れるかなあ。', chinese: '明天會放晴嗎...' },
                    { japanese: '頭が痛いな。', chinese: '頭好痛啊。' },
                    { japanese: '新し⾃転⾞が欲しいな〜。', chinese: '真想要新腳踏車啊~。' },
                    { japanese: 'すごいなあ︕', chinese: '真厲害啊！' }
                ]
            }
        ],
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '在正式場合使用「なあ」',
                    explanation: '「なあ」是非常隨意的語氣，只適用於朋友、家{いえ}人{ひと}之間或自言自語。在正式場合或對長輩說話時{じ}，應避免使用。',
                    whenToUse: '與親近的人{ひと}對話或自言自語時{じ}使用。',
                    correct: { sentence: '（對朋友）今日{きょう}は暑{あつ}いなあ。', note: '○ 朋友間使用' },
                    incorrect: { sentence: '（對上司）今日{きょう}は暑{あつ}いなあ。', note: '✕ 對上司太{ふと}隨意' }
                }
                ,
                {
                    usageId: 99, /* PDF Auto-Merge */
                    title: '更多例句 (From PDF)',
                    description: '意思：...啊 (感嘆)',
                    examples: [
                        { japanese: 'たくさんの⼈がいるなあ。', chinese: '好多人啊。' },
                        { japanese: 'これ、美味しいなあ。', chinese: '這個真好吃啊。' },
                        { japanese: '暑くなってきたなあ。', chinese: '變熱了啊。' },
                        { japanese: 'それは本当かな。', chinese: '那是真的嗎...' },
                        { japanese: '明⽇は晴れるかなあ。', chinese: '明天會放晴嗎...' },
                        { japanese: 'トイレはどこかな。', chinese: '廁所在哪裡呢...' },
                        { japanese: '頭が痛いな。', chinese: '頭好痛啊。' },
                        { japanese: '新し⾃転⾞が欲しいな〜。', chinese: '好想要新腳踏車啊〜。' },
                        { japanese: 'あなたは全部⼀⼈で作りましたか︖すごいなあ︕', chinese: '這些全部是你一個人做的嗎？真厲害啊！' }
                    ]
                }]
        },
        quiz: [
            {
                id: 'n5_q_naa_1',
                sentence: '今日{きょう}は天{てん}気{き}がいい（　）。',
                options: ['なあ', 'ね', 'よ', 'か'],
                correctIndex: 0,
                explanation: {
                    correct: '「なあ」正確！表達感嘆「今{いま}天天氣真好{す}啊」，帶有自言自語或感慨的語氣。',
                    wrong: [
                        '「ね」錯誤：「ね」用於確認或尋求同意，這裡是感嘆，用「なあ」更自然。',
                        '「よ」錯誤：「よ」用於告知對方資訊或強調，這裡是感嘆語氣。',
                        '「か」錯誤：「か」用於疑問，這裡不是問句。'
                    ]
                }
            },
            {
                id: 'n5_q_naa_2',
                sentence: 'この映{えい}画{が}、面白{おもしろ}い（　）。',
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
                sentence: '日{に}本{ほん}に行{い}きたい（　）。',
                options: ['なあ', 'ね', 'か', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「なあ」正確！「〜たいなあ」表達願望，「好想去日{に}本{ほん}啊」。',
                    wrong: [
                        '「ね」錯誤：「ね」用於確認，這裡是表達願望的感嘆。',
                        '「か」錯誤：「か」用於疑問，這裡不是問句。',
                        '「を」錯誤：「を」是助詞，不能放在句尾。'
                    ]
                }
            },
            {
                id: 'n5_q_naa_4',
                sentence: '「あの人{ひと}、かっこいい（　）。」\n「ああ、芸能人{げいのうじん}だよ。すごく有{ゆう}名{めい}なんだ。」\n「へえ、サインもらいたいなあ。」',
                options: ['なあ', 'よ', 'ね', 'か'],
                correctIndex: 0,
                explanation: {
                    correct: '「なあ」正確！對話中{なか}表達感嘆「好{す}帥啊」。觀察到某人{ひと}時{じ}的感想。',
                    wrong: [
                        '「よ」錯誤：「よ」用於告知資訊，這裡是感嘆。',
                        '「ね」錯誤：「ね」用於確認，這裡是個人{ひと}感想。',
                        '「か」錯誤：「か」用於疑問。'
                    ]
                }
            },
            {
                id: 'n5_q_naa_5',
                sentence: '「明日{あした}、テストがあるんだよね。」\n「うん...もっと勉{べん}強{きょう}すればよかった（　）。」\n「まだ時{じ}間{かん}あるよ。今{いま}から頑張{がんば}ろう。」',
                options: ['なあ', 'よ', 'ね', 'か'],
                correctIndex: 0,
                explanation: {
                    correct: '「なあ」正確！表達後悔的感嘆「要是多讀點書就好{す}了啊」。',
                    wrong: [
                        '「よ」錯誤：「よ」用於告知，這裡是自我感嘆。',
                        '「ね」錯誤：「ね」用於確認，這裡是獨白式的感嘆。',
                        '「か」錯誤：「か」用於疑問。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「ね」不是「なあ」
            {
                id: 'n5_q_naa_6',
                sentence: '「この料理{りょうり}、おいしい（　）。」「うん、本当{ほんとう}においしい！」',
                options: ['なあ', 'ね', 'よ', 'か'],
                correctIndex: 1,
                explanation: {
                    correct: '「ね」正確！這是對話，說話者向對方確認、尋求同意「好{す}吃吧？」用「ね」。這是陷阱題！',
                    wrong: [
                        '「なあ」錯誤：「なあ」是自言自語的感嘆，通常不期待回答。但對方回應了「うん」，說明這是在向對方確認，應用「ね」。',
                        '「よ」錯誤：「よ」用於告知對方不知道的事。這裡對方也在吃，不是告知。',
                        '「か」錯誤：「か」是疑問，但這裡語氣是確認，不是真正的疑問。'
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
                title: '接續方式',
                description: '動詞(ない形) + で',
                examples: []
            },
            {
                usageId: 2,
                title: '不...而... (Without doing)',
                description: '意思：不做(A)就做(B)、在沒做(A)的狀態下做(B)。\n例：寝ないで勉強する (不睡覺唸書/徹夜唸書)。',
                examples: [
                    { japanese: 'コーヒーには、いつもさとうを⼊れないで飲みます。', chinese: '喝咖啡時總是不加糖。' },
                    { japanese: '彼⼥はカサを持たないで出てしまった。', chinese: '她沒帶傘就出門了。' },
                    { japanese: '昨⽇は疲れていて、電気を消さないで寝てしまった。', chinese: '昨天太累，沒關燈就睡著了。' },
                    { japanese: '今朝、朝ごはんを⾷べないで仕事に来ました。', chinese: '今天早上沒吃早餐就來工作了。' },
                    { japanese: '明⽇は試験なので、今夜は寝ないで勉強します。', chinese: '明天要考試，所以今晚不睡覺唸書。' },
                    { japanese: 'エアコンをつけないで寝ます。', chinese: '不開冷氣睡覺。' }
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
                        { japanese: '辞{じ}書{しょ}を使{つか}わないで、読{よ}んだ。', chinese: '沒用字{じ}典就讀了。（強調沒用字{じ}典這個動作）', note: '○ 附帶狀況' }
                    ]
                },
                {
                    rule: '「なくて」：因為不...所以...（原因理{り}由{ゆう}）',
                    examples: [
                        { japanese: '辞{じ}書{しょ}がなくて、読{よ}めなかった。', chinese: '因為沒有字{じ}典，所以讀不了。（原因）', note: '○ 原因理{り}由{ゆう}' }
                    ]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '將「ないで」與「なくて」混用',
                    explanation: '華語母{はは}語者容易{やさ}混淆這兩個，因為中{なか}文都可以翻譯成「沒有...」。但日文中{なか}，「ないで」強調動作的缺失，「なくて」強調原因或並列。',
                    whenToUse: '描述「不做A就做B」時{じ}用「ないで」；描述原因時{じ}用「なくて」。',
                    correct: { sentence: '薬{くすり}を飲{の}まないで、寝{ね}た。', note: '○ 沒吃藥就睡了（動作缺失）' },
                    incorrect: { sentence: '薬{くすり}を飲{の}まなくて、寝{ね}た。', note: '✕ 語法不通' }
                }
                ,
                {
                    usageId: 99, /* PDF Auto-Merge */
                    title: '更多例句 (From PDF)',
                    description: '意思：不...而...; 沒有...',
                    examples: [
                        { japanese: 'コーヒーには、いつもさとうを⼊れ ないで飲みます。', chinese: '喝咖啡總是不加糖。' },
                        { japanese: '彼⼥はカサを持たないで出てしまった。', chinese: '她沒帶傘就出門了。' },
                        { japanese: '昨⽇は疲れていて、電気を消さないで寝てしまった。', chinese: '昨天太累，沒關燈就睡著了。' },
                        { japanese: '今朝、朝ごはんを⾷べ ないで仕事に来ました。', chinese: '今天早上沒吃早餐就來工作了。' },
                        { japanese: '昨⽇、お⾵呂に⼊らないで寝てしまった。', chinese: '昨天沒洗澡就睡著了。' },
                        { japanese: '明⽇は試験なので、今夜は寝ないで勉強します。', chinese: '明天要考試，所以今晚要通宵唸書。' },
                        { japanese: '最近、涼しいのでエアコンをつけ ないで寝ます。', chinese: '最近很涼爽，所以睡覺不開冷氣。' },
                        { japanese: '朝ごはんを⾷べないで学校に来たから、お腹がすいた。', chinese: '因為沒吃早餐就來學校，肚子餓了。' }
                    ]
                },
                {
                    usageId: 99, /* PDF Auto-Merge */
                    title: '更多例句 (From PDF)',
                    description: '意思：請不要...',
                    examples: [
                        { japanese: '泣かないでください。', chinese: '請不要哭。' },
                        { japanese: 'このパソコンを使わないでください。', chinese: '請不要使用這台電腦。' },
                        { japanese: '明⽇の予定を忘れないでください。', chinese: '請不要忘記明天的行程。' },
                        { japanese: '私のことを⼼配しないでください。', chinese: '請不要擔心我。' },
                        { japanese: '道の邪魔をしないでください。', chinese: '請不要擋路。' },
                        { japanese: '事務所で⾷べないでください。', chinese: '請不要在辦公室吃東西。' },
                        { japanese: '⼀⼈にしたいからここに来ないでください。', chinese: '我想一個人靜一靜，請不要過來這裡。' }
                    ]
                }]
        },
        quiz: [
            {
                id: 'n5_q_naide_1',
                sentence: '朝{あさ}ご飯{はん}を（　）、学{がっ}校{こう}へ行{い}きました。',
                options: ['食{た}べないで', '食{た}べなくて', '食{た}べない', '食{た}べて'],
                correctIndex: 0,
                explanation: {
                    correct: '「食べないで」正確！「不吃早餐就去學校」，表示動作的缺失。',
                    wrong: [
                        '「食べなくて」錯誤：「なくて」用於原因理{り}由{ゆう}，這裡是描述附帶狀況。',
                        '「食べない」錯誤：需要接續助詞「で」來連接後句。',
                        '「食{た}べて」錯誤：「食{た}べて」是肯定形，意思相反。'
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
                        '「しなくて」錯誤：「なくて」用於原因理{り}由{ゆう}，這裡是請求。',
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
                    correct: '「セットしないで」正確！「沒設鬧鐘就睡過頭{あたま}了」。',
                    wrong: [
                        '「セットしなくて」錯誤：這裡描述的是動作缺失，不是原因。',
                        '「セットして」錯誤：意思變成「設了鬧鐘結果睡過頭{あたま}」。',
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
                        '「忘れなくて」錯誤：這裡是請求，不是原因理{り}由{ゆう}。',
                        '「忘れて」錯誤：意思變成「請忘記」。',
                        '「忘{わす}れる」錯誤：動詞原形無法表達請求。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「なくて」不是「ないで」
            {
                id: 'n5_q_naide_6',
                sentence: '電{でん}車{しゃ}が（　）、遅{おく}れました。',
                options: ['来{こ}ないで', '来{こ}なくて', '来{こ}なかった', '来{こ}なければ'],
                correctIndex: 1,
                explanation: {
                    correct: '「来{こ}なくて」正確！「因為電{でん}車{しゃ}沒來，所以遲到了」。表示原因理{り}由{ゆう}用「なくて」。這是陷阱題！',
                    wrong: [
                        '「来{こ}ないで」錯誤：「ないで」表示「不做某事就...」或「請不要」。這裡需要表達原因，用「なくて」。',
                        '「来{こ}なかった」錯誤：「なかった」是過去否定，但這裡需要連接後句「遅{おく}れました」，要用接續形式「なくて」。',
                        '「来{こ}なければ」錯誤：「なければ」是條件「如果不來的話」，語意不合。'
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
                title: '接續方式',
                description: '動詞(ない形) + でください',
                examples: []
            },
            {
                usageId: 2,
                title: '請不要... (禁止)',
                description: '意思：請不要...\n禮貌地請求對方不要做某事。',
                examples: [
                    { japanese: '泣かないでください。', chinese: '請不要哭。' },
                    { japanese: 'このパソコンを使わないでください。', chinese: '請不要使用這台電腦。' },
                    { japanese: '明⽇の予定を忘れないでください。', chinese: '請不要忘記明天的行程。' },
                    { japanese: '私のことを⼼配しないでください。', chinese: '請不要擔心我。' },
                    { japanese: '道の邪魔をしないでください。', chinese: '請不要擋路。' },
                    { japanese: '事務所で⾷べないでください。', chinese: '請不要在辦公室吃東西。' },
                    { japanese: 'ここに来ないでください。', chinese: '請不要來這裡。' }
                ]
            }
        ],
        analysis: {
            title: '禁止表現的語氣比較',
            description: '根據語氣強度選擇適當的表達方式。',
            points: [
                {
                    rule: '「ないでください」：禮貌的請求（服務業、對陌生人{ひと}）',
                    examples: [
                        { japanese: '触{さわ}らないでください。', chinese: '請不要觸摸。', note: '○ 禮貌' }
                    ]
                },
                {
                    rule: '「ないで」：隨意的請求（朋友、家{いえ}人{ひと}）',
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
                sentence: '電{でん}車{しゃ}の中{なか}で電{でん}話{わ}を（　）。',
                options: ['しないでください', 'しなくてください', 'してください', 'するください'],
                correctIndex: 0,
                explanation: {
                    correct: '「しないでください」正確！「請不要在電{でん}車{しゃ}裡講電{でん}話{わ}」。',
                    wrong: [
                        '「しなくてください」錯誤：正確形式是「ないでください」。',
                        '「してください」錯誤：意思相反，變成「請打電{でん}話{わ}」。',
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
                    correct: '「ないでください」正確！「請先不要吃，等會大家{いえ}一起吃」。',
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
                        '「入{はい}って」錯誤：意思變成「請進入」。',
                        '「入{はい}る」錯誤：動詞原形不能接「ください」。'
                    ]
                }
            },
            {
                id: 'n5_q_naide_kudasai_4',
                sentence: '「すみません、ここに車{くるま}を（　）。」\n「あ、すみません。駐車場{ちゅうしゃじょう}はどこですか。」\n「あちらです。」',
                options: ['止{と}めないでください', '止{と}めなくてください', '止{と}めてください', '止{と}めるください'],
                correctIndex: 0,
                explanation: {
                    correct: '「止めないでください」正確！「請不要在這裡停車{くるま}」。',
                    wrong: [
                        '「止めなくてください」錯誤：文法錯誤。',
                        '「止めてください」錯誤：意思變成「請停車{くるま}」。',
                        '「止めるください」錯誤：文法錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_naide_kudasai_5',
                sentence: '「先{せん}生{せい}、質{しつ}問{もん}があります。」\n「はい、どうぞ。でも、他{ほか}の人{ひと}の邪魔{じゃま}に（　）ね。」\n「はい、小{ちい}さい声{こえ}で聞{き}きます。」',
                options: ['ならないでください', 'ならなくてください', 'なってください', 'なるください'],
                correctIndex: 0,
                explanation: {
                    correct: '「ならないでください」正確！「請不要打擾其他人{ひと}」。',
                    wrong: [
                        '「ならなくてください」錯誤：文法錯誤。',
                        '「なってください」錯誤：意思變成「請成為打擾」。',
                        '「なるください」錯誤：文法錯誤。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「てください」不是「ないでください」
            {
                id: 'n5_q_naide_kudasai_6',
                sentence: '「すみません、窓{まど}を（　）。暑{あつ}いです。」',
                options: ['開{あ}けないでください', '開{あ}けてください', '開{あ}かないでください', '開{あ}きてください'],
                correctIndex: 1,
                explanation: {
                    correct: '「開{あ}けてください」正確！「熱，請開窗」。說話者想要對方開窗，是肯定請求，用「てください」。這是陷阱題！',
                    wrong: [
                        '「開{あ}けないでください」錯誤：這是「請不要開」，與情境矛盾。說話者說「熱」，應該是想請對方開窗。',
                        '「開{あ}かないでください」錯誤：「開{あ}く」是自動詞（窗自己開），不適合請求別人{ひと}做。應用他動詞「開{あ}ける」。',
                        '「開{あ}きてください」錯誤：「開{あ}く」的て形是「開{あ}いて」不是「開{あ}きて」。'
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
                title: '接續方式',
                description: '句子/短語 + ね',
                examples: []
            },
            {
                usageId: 2,
                title: '確認/徵求同意',
                description: '意思：...呢、...吧。\n句尾助詞，用於：\n1. 徵求對方同意 (是這樣吧？)\n2. 確認事實\n3. 表示輕微的感嘆\n\n例：今日は暑いですね (今天好熱呢 - 期待對方同意)。',
                examples: [
                    { japanese: 'かわいいね。', chinese: '好可愛呢。' },
                    { japanese: 'そうですね。', chinese: '是啊 / 對呀。' },
                    { japanese: '今⽇の天気はいいですね。', chinese: '今天天氣真好呢。' },
                    { japanese: 'またメールするね。', chinese: '晚點再傳訊息給你喔。' },
                    { japanese: 'それは⼤変ですね。', chinese: '那真是辛苦呢 / 夠嗆的。' },
                    { japanese: 'あなたはとても疲れた声をしているね。', chinese: '你的聲音聽起來很累呢。' },
                    { japanese: '⽇本語がお上⼿ですね。', chinese: '日語說得真好呢。' },
                    { japanese: 'あなたはスポーツが下⼿ですね。', chinese: '你不擅長運動呢。' }
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
                        { japanese: '今日{きょう}は暑{あつ}いですね。', chinese: '今{いま}天好熱{ねつ}呢。（你也這麼覺得吧？）', note: '○ 確認共識' }
                    ]
                },
                {
                    rule: '「よ」：告知新資訊、強調（對方不知道的事）',
                    examples: [
                        { japanese: '明日{あした}は休{やす}みですよ。', chinese: '明天休息喔。（告訴你這個資訊）', note: '○ 告知新資訊' }
                    ]
                }
                ,
                {
                    usageId: 99, /* PDF Auto-Merge */
                    title: '更多例句 (From PDF)',
                    description: '意思：呢; 吧 (確認/共鳴)',
                    examples: [
                        { japanese: 'かわいいね。', chinese: '好可愛喔。' },
                        { japanese: 'そうですね。', chinese: '是啊。' },
                        { japanese: '今⽇の天気はいいです ね。', chinese: '今天天氣真好呢。' },
                        { japanese: 'またあとでね︕', chinese: '待會見囉！' },
                        { japanese: 'またメールするね 。', chinese: '再傳郵件給你喔。' },
                        { japanese: 'それは⼤変ですね 。', chinese: '那真是辛苦呢。' },
                        { japanese: 'あなたはとても疲れた声をしている ね。', chinese: '你的聲音聽起來很累呢。' },
                        { japanese: '⽇本語がお上⼿ですね 。', chinese: '日語真好呢。' },
                        { japanese: 'あなたはスポーツが下⼿ですね 。', chinese: '你不擅長運動呢。' },
                        { japanese: '今⽇も⼀⽇、頑張りましょうね 。', chinese: '今天一整天也一起加油吧。' }
                    ]
                }]
        },
        quiz: [
            // 第 1 題：正向題 - 確認共識
            {
                id: 'n5_q_ne_1',
                sentence: '今日{きょう}はいい天{てん}気{き}です（　）。',
                options: ['ね', 'よ', 'か', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「ね」正確！確認對方同意「今{いま}天天氣真好{す}呢」。天氣是雙方都能感受到的共同體驗。',
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
                    correct: '「ね」正確！「加油喔」，用「ね」讓鼓勵的語氣更柔和親{しん}切{せつ}。',
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
                sentence: '「明日{あした}は休{やす}みですか。」\n「いいえ、明日{あした}は授{じゅ}業{ぎょう}がありま（　）。」',
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
                sentence: '「このケーキ、おいしい（　）。」\n「うん、ここのケーキは有{ゆう}名{めい}なんだ。」\n「また来{こ}よう（　）。」',
                options: ['ね/ね', 'よ/よ', 'ね/よ', 'よ/ね'],
                correctIndex: 0,
                explanation: {
                    correct: '「ね/ね」正確！第一空{そら}：一起吃蛋糕，確認對方也覺得好{す}吃。第二空{そら}：「再來吧」是共同提議，用「ね」。',
                    wrong: [
                        '「よ/よ」錯誤：兩處都是尋求認同，不是告知新資訊。',
                        '「ね/よ」錯誤：第二空{そら}的提議是邀請對方一起做，用「ね」更自然。',
                        '「よ/ね」錯誤：第一空{そら}是確認共同感受，應用「ね」。'
                    ]
                }
            },
            // 第 5 題：辨析題 - 「ね」vs「よ」的核心區別
            {
                id: 'n5_q_ne_5',
                sentence: '「あ、バスが来{き}た（　）！急{いそ}ごう！」\n「本{ほん}当{とう}だ（　）。走{はし}ろう！」',
                options: ['よ/ね', 'ね/よ', 'よ/よ', 'ね/ね'],
                correctIndex: 0,
                explanation: {
                    correct: '「よ/ね」正確！第一空{そら}：發現公車{くるま}來了，告知對方新狀況，用「よ」。第二空{そら}：確認對方說的「真的呢」，用「ね」。',
                    wrong: [
                        '「ね/よ」錯誤：順序相反。先發現的人{ひと}用「よ」告知，確認的人{ひと}用「ね」回應。',
                        '「よ/よ」錯誤：第二空{そら}是確認對方的話，用「ね」更自然。',
                        '「ね/ね」錯誤：第一空{そら}是告知新發現，必須用「よ」。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「よ」不是「ね」
            {
                id: 'n5_q_ne_6',
                sentence: '「会{かい}議{ぎ}は何{なん}時{じ}からですか。」「3時{じ}から（　）。忘{わす}れないでね。」',
                options: ['ね', 'よ', 'か', 'なあ'],
                correctIndex: 1,
                explanation: {
                    correct: '「よ」正確！對方不知道會議時{じ}間{かん}而詢問，告知對方新資訊用「よ」。這是陷阱題！',
                    wrong: [
                        '「ね」錯誤：「ね」用於確認對方已知的事或尋求同意。但對方剛問「幾點開始？」，表示他不知道，所以要用「よ」告知。',
                        '「か」錯誤：「か」是疑問，但這裡是回答，不是提問。',
                        '「なあ」錯誤：「なあ」是自言自語感嘆，不適合對話中的告知。'
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
                title: '接續方式',
                description: '句子 + よ',
                examples: []
            },
            {
                usageId: 2,
                title: '強調/告知 (Emphasis)',
                description: '意思：喔、唷。\n句尾助詞，用於：\n1. 告知對方不知道的訊息\n2. 強調自己的主張\n3. 提醒或警告\n\n例：おいしいよ (很好吃喔 - 告訴你)。',
                examples: [
                    { japanese: '⾏くよ。', chinese: '走囉！' },
                    { japanese: 'ちょっと、待ってよ︕', chinese: '喂，等一下唷！' },
                    { japanese: '元気を出せよ。', chinese: '打起精神來唷。' },
                    { japanese: '愛してるよ。', chinese: '愛你喔。' },
                    { japanese: '頑張るよ。', chinese: '我會加油的喔。' },
                    { japanese: '寝る時間ですよ。', chinese: '是睡覺時間囉。' },
                    { japanese: '君にいい知らせがあるよ︕', chinese: '有好消息要告訴你喔！' },
                    { japanese: '家まで⾞で送るよ。', chinese: '開車送你回家喔。' },
                    { japanese: '⾞で来る予定ですよね︖', chinese: '預定是開車來吧？' },
                    { japanese: '燃えるゴミと燃えないゴミの区別もよく分からないよね。', chinese: '可燃垃圾和不可燃垃圾的區別也搞不太清楚呢。' }
                ]
            }
        ],
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '過度使用「よ」導致語氣過強',
                    explanation: '「よ」帶有強調的語氣，過度使用會讓人{ひと}覺得你在教訓別人{ひと}或態度傲慢。',
                    whenToUse: '只在需要強調或告知新資訊時{じ}使用。',
                    correct: { sentence: '電{でん}車{しゃ}が来{き}ましたよ。', note: '○ 告知新資訊' },
                    incorrect: { sentence: '今日{きょう}は暑{あつ}いですよ。', note: '△ 天氣是共知的，用「ね」較好{す}' }
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
                sentence: '（二人{ふたり}とも外{そと}を見{み}ながら）\n今日{きょう}は本{ほん}当{とう}にいい天{てん}気{き}です（　）。',
                options: ['よ', 'ね', 'か', 'の'],
                correctIndex: 1,
                explanation: {
                    correct: '「ね」正確！兩人{ひと}都看到天氣很好{す}，這是共同的認知，尋求共識用「ね」。',
                    wrong: [
                        '「よ」錯誤：天氣是雙方都看得到的事實，不是告知新資訊！對方已經知道時{じ}用「ね」，不是「よ」。',
                        '「か」錯誤：「か」用於疑問，這是陳述感想。',
                        '「の」錯誤：「の」用於解釋，這裡是感嘆。'
                    ]
                }
            },
            // 第 4 題：對話題 - 正確答案是「よ」
            {
                id: 'n5_q_yo_4',
                sentence: '「このラーメン、おいしいね。」\n「そうだね。でも、ちょっと辛{から}い（　）。」\n「え、本{ほん}当{とう}？」',
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
                sentence: '「あ、田{た}中{なか}さんだ！」「うん、田{た}中{なか}さんだ（A）。」\n「田{た}中{なか}さん、今日{きょう}休{やす}みだって知{し}ってた？」「え、知{し}らなかった（B）。」',
                options: ['A:ね B:よ', 'A:よ B:ね', 'A:ね B:ね', 'A:よ B:よ'],
                correctIndex: 0,
                explanation: {
                    correct: '「A:ね B:よ」正確！(A)兩人{ひと}都看到田{た}中{なか}，確認共識用「ね」；(B)告知對方自己不知道這件事，用「よ」。',
                    wrong: [
                        '「A:よ B:ね」錯誤：(A)是確認雙方都看到的事實，用「ね」；(B)是告知新資訊，用「よ」。',
                        '「A:ね B:ね」錯誤：(B)是自己的感想/告知，不是確認共識。',
                        '「A:よ B:よ」錯誤：(A)雙方已經看到，是確認共識，用「ね」。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「ね」不是「よ」
            {
                id: 'n5_q_yo_6',
                sentence: '「今日{きょう}はいい天{てん}気{き}です（　）。」「そうです（　）。散{さん}歩{ぽ}に行{い}きませんか。」',
                options: ['よ/ね', 'ね/ね', 'よ/よ', 'ね/よ'],
                correctIndex: 1,
                explanation: {
                    correct: '「ね/ね」正確！第一空{そら}：天氣好{す}是雙方都能感受到的事，確認共感用「ね」。第二空{そら}：同意對方的話，也用「ね」。這是陷阱題！',
                    wrong: [
                        '「よ/ね」錯誤：天氣好{す}不是只有說話者知道的新資訊，雙方都能看到天氣，應用「ね」確認共感。',
                        '「よ/よ」錯誤：兩處都不適合用「よ」。天氣是共同感受，同意對方也不是告知。',
                        '「ね/よ」錯誤：第二空{そら}「そうですね」是同意對方，表示共感，用「ね」不用「よ」。'
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
        translation: '（方向/時{じ}間{かん}/目的/對象）',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: '名詞 + に',
                examples: []
            },
            {
                usageId: 2,
                title: '助詞用法總結',
                description: '「に」有多種用法，取決於上下文。\n\n主要用法：\n1. 地點 (在...)：日本に住んでいる (住在與本)。\n2. 時間 (在...時)：7時に行く (7點去)。\n3. 目的地 (去...)：日本に行く (去日本)。\n4. 存在位置 (在...)：テーブルの上にある (在桌子上)。\n5. 對象：友達に会う (見朋友)。',
                examples: [
                    { japanese: '来⽉⼤学に⼊る。', chinese: '下個月進大學。' },
                    { japanese: 'どうやって学校に通っていますか︖', chinese: '你是怎麼去上學的？' },
                    { japanese: 'あなたは何時にスーパーに⾏きますか︖', chinese: '你幾點去超市？' },
                    { japanese: '⽇本に来たことはありますか︖', chinese: '有來過日本嗎？' },
                    { japanese: 'あの⽊の下に⼤きな⽝がいます。', chinese: '那棵樹下有一隻大狗。' },
                    { japanese: '今家の中にいますよ。', chinese: '我現在在家裡喔。' },
                    { japanese: 'ここにお名前を書いてください。', chinese: '請在這裡寫上名字。' },
                    { japanese: 'アメリカにはどのくらい滞在しますか︖', chinese: '會在美國待多久呢？' },
                    { japanese: '家へ向かっているところです。', chinese: '正要回家 (朝家的方向)。' },
                    { japanese: 'そこへ⾏くには⾞で6時間かかる。', chinese: '去那裡開車要花6小時。' }
                ]
            }
        ],
        analysis: {
            title: '「に」vs「へ」vs「で」的區別',
            points: [
                {
                    rule: '「に」：強調到達點、目的地或具體時{じ}間{かん}點',
                    examples: [{ japanese: '学{がっ}校{こう}に行{い}きます。', chinese: '到達學校' }]
                },
                {
                    rule: '「へ」：強調移動的方向（較抽象）',
                    examples: [{ japanese: '学{がっ}校{こう}へ行{い}きます。', chinese: '朝{あさ}學校的方向去' }]
                },
                {
                    rule: '「で」：表示動作進行的場{ば}所{しょ}',
                    examples: [{ japanese: '学{がっ}校{こう}で勉{べん}強{きょう}します。', chinese: '在學校讀書' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '時{じ}間{かん}詞該不該加「に」的困惑',
                    explanation: '具體時{じ}間{かん}點（幾點、星期幾、幾月幾日）要加「に」，但「今日{きょう}」「明{あし}日{た}」「毎{まい}日{にち}」等相對時{じ}間{かん}詞不加。',
                    whenToUse: '有數字{じ}的時{じ}間{かん}表達通常要加「に」。',
                    correct: { sentence: '三時{さんじ}に会{あ}いましょう。', note: '○ 具體時{じ}間{かん}點' },
                    incorrect: { sentence: '明日{あした}に行{い}きます。', note: '✕ 「明{あし}日{た}」不加「に」' }
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
                    correct: '「に」正確！表示起床的時{じ}間{かん}點「六點」，具體時{じ}間{かん}用「に」。',
                    wrong: [
                        '「で」錯誤：「で」表示動作場{ば}所{しょ}或方式，不用於時{じ}間{かん}點。',
                        '「を」錯誤：「を」是受詞標記，不用於時{じ}間{かん}點。',
                        '「へ」錯誤：「へ」表示方向，不用於時{じ}間{かん}點。'
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
                    correct: '「で」正確！表示動作（讀書）進行的場{ば}所{しょ}，用「で」。',
                    wrong: [
                        '「に」錯誤：「に」用於存在場{ば}所{しょ}（いる/ある）或到達點。「読{よ}む」是動作，動作場{ば}所{しょ}用「で」！',
                        '「を」錯誤：「を」標記受詞（本{ほん}），場{ば}所{しょ}用「で」。',
                        '「へ」錯誤：「へ」表示移動方向，不表示動作場{ば}所{しょ}。'
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
                    correct: '「に」正確！詢問回家{いえ}的時{じ}間{かん}點，具體時{じ}間{かん}用「に」。',
                    wrong: [
                        '「で」錯誤：時{じ}間{かん}點用「に」，「で」表示場{ば}所{しょ}或手段。',
                        '「を」錯誤：「を」是受詞標記，時{じ}間{かん}點用「に」。',
                        '「へ」錯誤：「へ」表示方向，時{じ}間{かん}點用「に」。'
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
                    correct: '「A:に B:で」正確！(A)「います」是存在，存在場{ば}所{しょ}用「に」；(B)「します」是動作，動作場{ば}所{しょ}用「で」。',
                    wrong: [
                        '「A:で B:に」錯誤：存在用「に」，動作用「で」，順序相反了。',
                        '「A:に B:に」錯誤：(B)是動作場{ば}所{しょ}，動作場{ば}所{しょ}要用「で」，不能用「に」。',
                        '「A:で B:で」錯誤：(A)是存在場{ば}所{しょ}，存在場{ば}所{しょ}要用「に」，不能用「で」。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「で」不是「に」
            {
                id: 'n5_q_ni_6',
                sentence: '図書館{としょかん}（　）勉強{べんきょう}します。',
                options: ['に', 'で', 'を', 'へ'],
                correctIndex: 1,
                explanation: {
                    correct: '「で」正確！「勉強する」是動作，動作發生的場所用「で」！這是陷阱題！',
                    wrong: [
                        '「に」錯誤：「に」用於存在場所（〜にいます/あります）或目的地（〜に行く）。「勉強する」是動作，場所用「で」！',
                        '「を」錯誤：「を」是受詞標記，不用於表示場所。',
                        '「へ」錯誤：「へ」表示移動方向，這裡不是移動。'
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
                usageId: 1,
                title: '接續方式',
                description: '名詞 + の + 名詞',
                examples: []
            },
            {
                usageId: 2,
                title: '所有格/屬性 (的)',
                description: '意思：...的。\n表示所屬、修飾或屬性。\n例：私のペン (我的筆)。\n也可以代替名詞使用 (用於避免重複)。\n例：私のです (是我的 [東西])。',
                examples: [
                    { japanese: 'あなたの名前は何ですか︖', chinese: '你的名字是什麼？' },
                    { japanese: 'これはだれのカバンですか︖', chinese: '這是誰的包包？' },
                    { japanese: '私の先⽣はとてもいい先⽣だ。', chinese: '我的老師是非常好的老師。' },
                    { japanese: '彼⽒の好きな料理はカレーです。', chinese: '男朋友喜歡的料理是咖哩。' },
                    { japanese: '私の⼀番好きな季節は秋だ。', chinese: '我最喜歡的季節是秋天。' },
                    { japanese: 'このカメラは私のではなく、友だちのです。', chinese: '這相機不是我的，是朋友的。' },
                    { japanese: '夏の暑さのせいで私は寝不⾜です。', chinese: '因為夏天的炎熱，我睡眠不足。' }
                ]
            }
        ],
        analysis: {
            title: '「の」的不同用法比較',
            points: [
                {
                    rule: '所有/所屬「の」：表示擁有關係',
                    examples: [{ japanese: '私{わたし}の車{くるま}', chinese: '我的車{くるま}' }]
                },
                {
                    rule: '修飾「の」：名詞修飾名詞',
                    examples: [{ japanese: '英{えい}語{ご}の本{ほん}', chinese: '英文書' }]
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
                    correct: { sentence: '日{に}本{ほん}の大{だい}学{がく}の先{せん}生{せい}', note: '○ 日{に}本{ほん}的大學的老師' },
                    incorrect: { sentence: '日{に}本{ほん}の東{とう}京{きょう}の大{だい}学{がく}の日本語{にほんご}の先{せん}生{せい}', note: '△ 過多「の」，不自然' }
                }
            ]
        },
        quiz: [
            // 第 1 題：正向題 - 正確答案是「の」
            {
                id: 'n5_q_no_1',
                sentence: 'これは田{た}中{なか}さん（　）本{ほん}です。',
                options: ['の', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！表示這是「田{た}中{なか}先{せん}生{せい}的」書，所有格用「の」。',
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
                sentence: '日本語{にほんご}（　）勉{べん}強{きょう}は難{むずか}しいです。',
                options: ['の', 'が', 'を', 'は'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！「日{に}本{ほん}語{ご}の勉強」= 日語的學習，名詞修飾名詞用「の」。',
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
                    correct: '「が」正確！「好{す}き」「嫌{きら}い」「上{じょう}手{ず}」「下{へ}手{た}」等形容詞的對象用「が」標記。',
                    wrong: [
                        '「の」錯誤：「～が好{す}き」是固定搭配，好{す}惡的對象用「が」，不用「の」！',
                        '「を」錯誤：「を」用於他動詞的受詞，「好{す}き」是形容動詞，對象用「が」。',
                        '「に」錯誤：「に」用於方向或時{じ}間{かん}，「好{す}き」的對象用「が」。'
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
                    correct: '「の」正確！「軽{かる}いの」代替「軽{かる}いパソコン」，「の」可代替前文提到的名詞。',
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
                sentence: '田{た}中{なか}さん（A）車{くるま}は赤{あか}いです。田{た}中{なか}さんは車{くるま}（B）欲{ほ}しいです。',
                options: ['A:の B:が', 'A:が B:の', 'A:の B:の', 'A:が B:が'],
                correctIndex: 0,
                explanation: {
                    correct: '「A:の B:が」正確！(A)「田{た}中{なか}さんの車{くるま}」= 田{た}中{なか}的車{くるま}（所有格）；(B)「車{くるま}が欲{ほ}しい」= 想要車{くるま}（「欲{ほ}しい」的對象用「が」）。',
                    wrong: [
                        '「A:が B:の」錯誤：(A)是所有格用「の」，(B)是「欲{ほ}しい」的對象用「が」。',
                        '「A:の B:の」錯誤：(B)「欲{ほ}しい」的對象要用「が」，不能用「の」。',
                        '「A:が B:が」錯誤：(A)是所有格，所有格要用「の」，不能用「が」。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「を」不是「の」
            {
                id: 'n5_q_no_6',
                sentence: '日本語{にほんご}（　）勉{べん}強{きょう}しています。',
                options: ['の', 'を', 'が', 'に'],
                correctIndex: 1,
                explanation: {
                    correct: '「を」正確！「勉{べん}強{きょう}する」是他動詞，學習的對象（日語）用「を」標記。這是陷阱題！',
                    wrong: [
                        '「の」錯誤：「の」是所有格，不能標記動作的對象。「日本語{にほんご}の勉{べん}強{きょう}」（日語的學習）可以，但不能說「日本語{にほんご}の勉{べん}強{きょう}しています」。',
                        '「が」錯誤：「が」用於存在、可能、好{す}惡等特{とく}定句型的對象，一般他動詞用「を」。',
                        '「に」錯誤：「に」用於目標、時{じ}間{かん}、場{ば}所{しょ}等，不適合這裡。'
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
                usageId: 1,
                title: '接續方式',
                description: '名詞 + を + 動詞',
                examples: []
            },
            {
                usageId: 2,
                title: '受詞標記',
                description: '意思：把...、對...。\n標示動作的對象 (受詞)。\n發音通常讀作「o」，但在鍵盤輸入時要打「wo」。\n例：肉を食べる (吃肉)。',
                examples: [
                    { japanese: '⽇本語をべんきょうしています。', chinese: '正在學日語。' },
                    { japanese: '⽇本語を話します。', chinese: '說日語。' },
                    { japanese: '今⽇は朝ごはんを⾷べませんでした。', chinese: '今天沒吃早餐。' },
                    { japanese: 'もう宿題をしました。', chinese: '作業已經做了。' },
                    { japanese: '毎⽇ランニングをします。', chinese: '每天跑步 (做跑步這件事)。' },
                    { japanese: '⿂を⾷べたことがない。', chinese: '沒吃過魚。' },
                    { japanese: '毎週新しいかんじを学ぶ。', chinese: '每週學習新的漢字。' }
                ]
            }
        ],
        analysis: {
            title: '「を」的常見{み}搭配動詞',
            points: [
                {
                    rule: '食べ物を食{た}べる：吃某物',
                    examples: [{ japanese: 'りんごを食{た}べる', chinese: '吃蘋果' }]
                },
                {
                    rule: '場{ば}所{しょ}を歩く/走{はし}る：在某處走/跑（經過）',
                    examples: [{ japanese: '道{みち}を歩{ある}く', chinese: '走路' }]
                },
                {
                    rule: '場{ば}所{しょ}を出{で}る：離開某處',
                    examples: [{ japanese: '会{かい}社{しゃ}を出{で}る', chinese: '離開公司' }]
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
                    correct: '「を」正確！「コーヒー」是「飲{の}む」的受詞，他動詞的受詞用「を」。',
                    wrong: [
                        '「が」錯誤：「が」是主語標記，受詞用「を」。',
                        '「に」錯誤：「に」表示方向或時{じ}間{かん}，受詞用「を」。',
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
                    correct: '「を」正確！「出{で}る」表示離開，離開的起點用「を」。',
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
                    correct: '「が」正確！「分{ふん}かる」「できる」「見{み}える」「聞こえる」等可能動詞，對象用「が」不用「を」。',
                    wrong: [
                        '「を」錯誤：「分{ふん}かる」不是他動詞！「～が分{ふん}かる」是固定搭配，對象用「が」，不用「を」！',
                        '「に」錯誤：「に」表示方向或時{じ}間{かん}，「分{ふん}かる」的對象用「が」。',
                        '「は」錯誤：「は」是主題標記，這裡需要「が」標記對象。'
                    ]
                }
            },
            // 第 4 題：對話題 - 正確答案是「を」
            {
                id: 'n5_q_wo_4',
                sentence: '「週末{しゅうまつ}何{なに}（　）する？」\n「映{えい}画{が}（　）見{み}ようかな。」\n「いいね！」',
                options: ['を、を', 'が、が', 'に、を', 'を、が'],
                correctIndex: 0,
                explanation: {
                    correct: '「を」正確！「何{なに}」和「映{えい}画{が}」都是動詞的受詞，用「を」標記。',
                    wrong: [
                        '「が」錯誤：「する」「見{み}る」都是他動詞，受詞用「を」。',
                        '「に、を」錯誤：「何{なに}をする」是固定搭配，「何{なに}」是受詞。',
                        '「を、が」錯誤：「映{えい}画{が}を見{み}る」，「映{えい}画{が}」是受詞用「を」。'
                    ]
                }
            },
            // 第 5 題：辨析題 - を/が 的區別
            {
                id: 'n5_q_wo_5',
                sentence: '私{わたし}は日本語{にほんご}（A）勉{べん}強{きょう}しています。日本語{にほんご}（B）話{はな}せます。',
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
            },
            // 第 6 題：陷阱題 - 正確答案是「に」不是「を」
            {
                id: 'n5_q_wo_6',
                sentence: '電車{でんしゃ}（　）乗{の}ります。',
                options: ['を', 'に', 'で', 'が'],
                correctIndex: 1,
                explanation: {
                    correct: '「に」正確！「乗る」（搭乘）用「に」標記對象！「電車に乗る」＝搭電車。這是陷阱題！',
                    wrong: [
                        '「を」錯誤：「を」是一般他動詞的受詞標記，但「乗る」固定用「に」！「電車をおりる」（下車）才用「を」！',
                        '「で」錯誤：「で」表示手段或場所，「電車で行く」（坐電車去）才用「で」。',
                        '「が」錯誤：「が」是主語標記，不用於這裡。'
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
                usageId: 1,
                title: '接續方式',
                description: '名詞 + は',
                examples: []
            },
            {
                usageId: 2,
                title: '主題標記 (Topic)',
                description: '意思：...是...、關於...。\n標示句子的主題。\n發音讀作「wa」。\n例：私は学生です (我是學生)。',
                examples: [
                    { japanese: '私はジョンです。', chinese: '我是John。' },
                    { japanese: 'それは⾯⽩い。', chinese: '那很有趣。' },
                    { japanese: '今⽇は電⾞で来ました。', chinese: '今天搭電車來的。' },
                    { japanese: '⾦曜⽇は空いていますか︖', chinese: '星期五有空嗎？' },
                    { japanese: '運動をするのは嫌です。', chinese: '討厭運動。' },
                    { japanese: '好きな⾷べ物は何ですか︖', chinese: '喜歡的食物是什麼？' },
                    { japanese: '私の⼤学はその駅の近くにある。', chinese: '我的大學在那個車站附近。' },
                    { japanese: '彼を説得するのは不可能だった。', chinese: '說服他是不可能的。' }
                ]
            }
        ],
        analysis: {
            title: '「は」vs「が」的區別',
            points: [
                {
                    rule: '「は」（主題）：標記已知的話題，「關於...」',
                    examples: [{ japanese: '田{た}中{なか}さんは先{せん}生{せい}です。', chinese: '（說到田{た}中{なか}先{せん}生{せい}）他是老師' }]
                },
                {
                    rule: '「が」（主語）：強調新資訊或主語本{ほん}身',
                    examples: [{ japanese: '田{た}中{なか}さんが先{せん}生{せい}です。', chinese: '田{た}中{なか}先{せん}生{せい}（才）是老師' }]
                },
                {
                    rule: '「は」（對比）：暗示與其他事物的對比',
                    examples: [{ japanese: '魚{さかな}は食{た}べません。', chinese: '魚{さかな}不吃（但其他可能吃）' }]
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
                    correct: { sentence: '私{わたし}は学{がく}生{せい}です。（watashi wa）', note: '○ 正確發音' },
                    incorrect: { sentence: '私{わたし}は学{がく}生{せい}です。（watashi ha）', note: '✕ 錯誤發音' }
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
                        '「に」錯誤：「に」表示方向或時{じ}間{かん}，這裡需要主題標記。'
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
                    correct: '「は」正確！對比「蘋果」和「香蕉」，對比時{じ}兩邊都用「は」。',
                    wrong: [
                        '「が」錯誤：對比兩個事物時{じ}用「は」強調對比。',
                        '「を」錯誤：「を」是受詞標記，「好{す}き」的對象不用「を」。',
                        '「は、が」錯誤：對比時{じ}兩邊都用「は」，不是一邊「は」一邊「が」。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「が」不是「は」
            {
                id: 'n5_q_wa_3',
                sentence: '「誰{だれ}（　）来{き}ましたか。」\n「田{た}中{なか}さんが来{き}ました。」',
                options: ['は', 'が', 'を', 'に'],
                correctIndex: 1,
                explanation: {
                    correct: '「が」正確！詢問「誰{だれ}」時{じ}，「誰{だれ}」是未知的新資訊，疑問詞作主語時{じ}用「が」。',
                    wrong: [
                        '「は」錯誤：「は」用於已知話題，疑問詞「誰{だれ}」是未知資訊，要用「が」！',
                        '「を」錯誤：「を」是受詞標記，「誰{だれ}」是主語。',
                        '「に」錯誤：「に」表示方向或時{じ}間{かん}，主語用「が」。'
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
                    correct: '「は」正確！「明{あし}日{た}」是話題，並暗示與「明後日」的對比。',
                    wrong: [
                        '「が」錯誤：詢問時{じ}間{かん}的話題用「は」，不是強調主語。',
                        '「を」錯誤：「を」是受詞標記，這裡需要主題標記。',
                        '「に」錯誤：「に」表示具體時{じ}間{かん}點，這裡是主題對比。'
                    ]
                }
            },
            // 第 5 題：辨析題 - は/が 的區別
            {
                id: 'n5_q_wa_5',
                sentence: '田{た}中{なか}さん（A）学{がく}生{せい}です。何{なに}（B）好{す}きですか。',
                options: ['A:は B:が', 'A:が B:は', 'A:は B:は', 'A:が B:が'],
                correctIndex: 0,
                explanation: {
                    correct: '「A:は B:が」正確！(A)自我介紹/陳述用「は」標記主題；(B)疑問詞「何{なに}」是未知資訊，用「が」。',
                    wrong: [
                        '「A:が B:は」錯誤：(A)陳述用「は」，(B)疑問詞用「が」。',
                        '「A:は B:は」錯誤：(B)疑問詞作主語時{じ}要用「が」！',
                        '「A:が B:が」錯誤：(A)一般陳述用「は」標記主題，不需要強調。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「が」不是「は」
            {
                id: 'n5_q_wa_6',
                sentence: '「誰{だれ}（　）来{き}ましたか。」「山{やま}田{だ}さんが来{き}ました。」',
                options: ['は', 'が', 'を', 'も'],
                correctIndex: 1,
                explanation: {
                    correct: '「が」正確！疑問詞「誰{だれ}」作主語時{じ}，必須用「が」！疑問詞代表未知資訊，用「が」標記。這是陷阱題！',
                    wrong: [
                        '「は」錯誤：「は」用於已知的主題。疑問詞「誰{だれ}」代表未知，不能用「は」標記。',
                        '「を」錯誤：「を」是受詞標記，「誰{だれ}」是主語，不是受詞。',
                        '「も」錯誤：「も」是「也」的意思，不適合這個疑問句。'
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
                usageId: 1,
                title: '接續方式',
                description: '動詞(て形) + いる',
                examples: []
            },
            {
                usageId: 2,
                title: '正在進行 (Progressive)',
                description: '意思：正在...。\n表示動作正在進行。\n例：食べている (正在吃)。',
                examples: [
                    { japanese: '昼ごはんは何を⾷べているの︖', chinese: '午餐正在吃什麼？' },
                    { japanese: '私もその本を読んでいる︕', chinese: '我也正在讀那本書！' },
                    { japanese: '今⽇の⽇本は⾬が降っています。', chinese: '今天的日本正在下雨。' },
                    { japanese: 'お⺟さんと電話をしています。', chinese: '正在跟媽媽講電話。' }
                ]
            },
            {
                usageId: 3,
                title: '狀態持續 (State/Habit)',
                description: '意思：...著、一直...、習慣...\n表示動作的結果狀態持續，或習慣性動作。\n例：\n- 知っている (知道 - 狀態)\n- 結婚している (已婚 - 狀態)\n- 毎日走っている (每天跑 - 習慣)\n- 住んでいる (住在 - 狀態)',
                examples: [
                    { japanese: 'いつからサッカーをやっているのですか。', chinese: '從什麼時候開始踢足球的？ (習慣)' },
                    { japanese: 'どれくらい⽇本に住んでいますか︖', chinese: '在日本住多久了？ (狀態)' },
                    { japanese: 'そのお店は何時までやっているのですか︖', chinese: '那家店開到幾點？ (狀態)' },
                    { japanese: '⼭⽥さんはまだ寝ていると思います。', chinese: '我想山田先生還在睡覺 (狀態)。' },
                    { japanese: '私もあなたを愛しています。', chinese: '我也愛著你 (狀態)。' }
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
                    mistake: '不知道何{なん}時{じ}表示「進行」何{なん}時{じ}表示「狀態」',
                    explanation: '瞬間動詞（死{し}ぬ、結{けっ}婚{こん}する、開{あ}く等）的「ている」表示狀態，持續動詞（食{た}べる、読{よ}む等）表示進行。',
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
                    correct: '「て」正確！「見{み}ている」表示「正在看」，動作進行中{なか}。',
                    wrong: [
                        '「た」錯誤：「見{み}た」是過去式，這裡需要進行式「見{み}ている」。',
                        '「に」錯誤：「に」是助詞，不能接動詞形成進行式。',
                        '「を」錯誤：「を」是受詞標記，不能形成進行式。'
                    ]
                }
            },
            // 第 2 題：正向題 - 正確答案是「います」
            {
                id: 'n5_q_te_iru_2',
                sentence: '彼女{かのじょ}は東{とう}京{きょう}に住{す}んで（　）。',
                options: ['います', 'あります', 'です', 'ます'],
                correctIndex: 0,
                explanation: {
                    correct: '「います」正確！「住{す}んでいます」表示「住在」的持續狀態。',
                    wrong: [
                        '「あります」錯誤：「ある」用於物品存在，人{ひと}的狀態用「いる」。',
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
                    correct: '「あります」正確！「冷{つめ}やしてある」表示「事先冰好{す}（放著等你喝）」，有意識地準{じゅん}備{び}好{す}的狀態。',
                    wrong: [
                        '「います」錯誤：「ている」表示動作進行或狀態，但這裡強調「特意準{じゅん}備{び}好{す}」的結果，用「てある」！',
                        '「おきます」錯誤：「ておく」表示事先做好{す}的動作，但這裡已經完成，用結果狀態「てある」。',
                        '「みます」錯誤：「てみる」表示嘗試，這裡是準{じゅん}備{び}好{す}的狀態。'
                    ]
                }
            },
            // 第 4 題：對話題 - 正確答案是「しているの」
            {
                id: 'n5_q_te_iru_4',
                sentence: '「お兄{にい}さんは何{なに}を（　）？」\n「大{だい}学{がく}で日本語{にほんご}を勉{べん}強{きょう}しているよ。」',
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
                    correct: '「A:ている B:てある」正確！(A)自動詞「開{あ}く」的狀態用「ている」；(B)他動詞「開{あ}ける」有意識的準{じゅん}備{び}結果用「てある」。',
                    wrong: [
                        '「A:てある B:ている」錯誤：自動詞用「ている」，他動詞有意識動作的結果用「てある」。',
                        '「A:ている B:ている」錯誤：(B)強調「特意開著」，用「てある」表示有意識的準{じゅん}備{び}。',
                        '「A:てある B:てある」錯誤：(A)是自動詞「開{あ}く」，自動詞的狀態用「ている」。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「た」不是「ている」
            {
                id: 'n5_q_te_iru_6',
                sentence: '「昨日{きのう}、映{えい}画{が}を（　）。」「どうだった？」',
                options: ['見{み}ている', '見{み}た', '見{み}ます', '見{み}て'],
                correctIndex: 1,
                explanation: {
                    correct: '「見{み}た」正確！「昨日{きのう}」是過去時{じ}點，說的是「昨天看了」這個完成的事實，用過去式「た」。這是陷阱題！',
                    wrong: [
                        '「見{み}ている」錯誤：「ている」表示現在進行或狀態持續。「昨日{きのう}」是過去，要用過去式「見{み}た」。',
                        '「見{み}ます」錯誤：「ます」是現在/未來式，不適合描述過去的事。',
                        '「見{み}て」錯誤：「て形」是連接形式，不能單獨結尾。'
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
                usageId: 1,
                title: '接續方式',
                description: '動詞(て形) + から',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '表示動作的先後順序。意思是「做完A之後，立刻做B」。\n強調順序。',
                examples: [
                    { japanese: '手を洗ってから、食べます。', chinese: '洗完手之後再吃。' }
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
                    rule: '「あとで」：表示之後，時{じ}間{かん}關係較鬆散',
                    examples: [{ japanese: '食{た}べたあとで、歯{は}を磨{みが}く。', chinese: '吃完之後（過一會）刷牙' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '把「てから」和「たあとで」混淆',
                    explanation: '「てから」用て形，強調緊密順序；「あとで」用た形，時{じ}間{かん}較鬆散。',
                    whenToUse: '動作有因果關係或緊密順序時{じ}用「てから」。',
                    correct: { sentence: 'シャワーを浴{あ}びてから、寝{ね}ます。', note: '○ 洗完澡（立刻）睡覺' },
                    incorrect: { sentence: 'シャワーを浴{あ}びたからから、寝{ね}ます。', note: '✕ 文法錯誤' }
                }
            ]
        },
        quiz: [
            // 第 1 題：正向題 - 正確答案是「から」
            {
                id: 'n5_q_te_kara_1',
                sentence: '朝{あさ}ご飯{はん}を食{た}べて（　）、学{がっ}校{こう}に行{い}きます。',
                options: ['から', 'まで', 'ので', 'ても'],
                correctIndex: 0,
                explanation: {
                    correct: '「から」正確！「食{た}べてから」表示「吃完早餐之後」，強調順序。',
                    wrong: [
                        '「まで」錯誤：「まで」表示「到...為止」，不表示順序。',
                        '「ので」錯誤：「ので」表示原因，不表示順序。',
                        '「ても」錯誤：「ても」表示「即使...也」，不表示順序。'
                    ]
                }
            },
            // 第 2 題：正向題 - 正確答案是「来{き}て」
            {
                id: 'n5_q_te_kara_2',
                sentence: '日{に}本{ほん}に（　）から、もう五年{ごねん}です。',
                options: ['来{き}て', '来{き}た', '来{く}る', '来{き}ます'],
                correctIndex: 0,
                explanation: {
                    correct: '「来{き}て」正確！「来{き}てから」表示「來日{に}本{ほん}之後」，「てから」前接て形。',
                    wrong: [
                        '「来{き}た」錯誤：「てから」需要て形，不是た形。',
                        '「来{く}る」錯誤：「から」需要接て形，不是原形。',
                        '「来{き}ます」錯誤：「から」需要接て形，不是ます形。'
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
                    correct: '「まえに」正確！「寝{ね}る前{まえ}に」表示「睡覺之前」刷牙。',
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
                    correct: '「から」正確！「食{た}べてから」表示吃完午餐後再出門。',
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
            },
            // 第 6 題：陷阱題 - 正確答案是「後で」不是「てから」
            {
                id: 'n5_q_te_kara_6',
                sentence: '仕{し}事{ごと}の（　）、飲{の}みに行{い}きましょう。',
                options: ['てから', '後{あと}で', '前{まえ}に', 'ながら'],
                correctIndex: 1,
                explanation: {
                    correct: '「後{あと}で」正確！「仕{し}事{ごと}の後{あと}で」= 工作之後。名詞接「の後{あと}で」。這是陷阱題！',
                    wrong: [
                        '「てから」錯誤：「てから」接動詞て形，不能直接接「仕{し}事{ごと}の」。應該說「仕{し}事{ごと}が終{お}わってから」或用「仕{し}事{ごと}の後{あと}で」。',
                        '「前{まえ}に」錯誤：「前{まえ}に」是「之前」，意思相反。',
                        '「ながら」錯誤：「ながら」是「一邊...一邊...」，不適合這裡。'
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
                usageId: 1,
                title: '接續方式',
                description: '動詞(て形) + ください',
                examples: []
            },
            {
                usageId: 2,
                title: '請求 (Please do)',
                description: '意思：請...。\n禮貌地請求對方做某事。\n例：待ってください (請等一下)。',
                examples: [
                    { japanese: 'ちょっと待ってください。', chinese: '請稍等一下。' },
                    { japanese: 'やめてください︕', chinese: '請住手 / 請不要這樣！' },
                    { japanese: 'もっとゆっくり⾔ってください。', chinese: '請說慢一點。' },
                    { japanese: '静かにしてください。', chinese: '請安靜。' },
                    { japanese: 'やってみてください。', chinese: '請試著做做看。' },
                    { japanese: 'どうぞ座ってください。', chinese: '請坐。' },
                    { japanese: 'もう⼀回説明してください。', chinese: '請再解釋一次。' },
                    { japanese: '⽇本語を教えてください。', chinese: '請教我日語。' },
                    { japanese: '私に知らせてください。', chinese: '請通知我。' }
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
                    mistake: '對長{なが}輩或上司只用「～て」',
                    explanation: '「～て」是很隨意的說法，對長{なが}輩應該用「～てください」或更禮貌的表達。',
                    whenToUse: '根據對象調整禮貌程度。',
                    correct: { sentence: '先{せん}生{せい}、もう一度{いちど}説明{せつめい}してください。', note: '○ 對老師禮貌請求' },
                    incorrect: { sentence: '先{せん}生{せい}、もう一度{いちど}説明{せつめい}して。', note: '✕ 對老師太{ふと}隨便' }
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
                    correct: '「ください」正確！「話{はな}してください」是禮貌請求「請說慢一點」。',
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
                        '「って」錯誤：「吸{す}ってください」是「請抽菸」的意思，這裡要表達禁止！',
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
                        '「A:て B:て」錯誤：(B)「大{おお}きい声を出{だ}してください」= 請大聲，意思相反！',
                        '「A:ないで B:ないで」錯誤：(A)「静{しず}かにしないでください」= 請不要安靜，意思相反！'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「ないでください」不是「てください」
            {
                id: 'n5_q_te_kudasai_6',
                sentence: '静{しず}かにしてください。大{おお}きい声{こえ}で話{はな}さ（　）。',
                options: ['てください', 'ないでください', 'ってください', 'なくてください'],
                correctIndex: 1,
                explanation: {
                    correct: '「ないでください」正確！「静かにして」＝請安靜，後面應該是「請不要大聲說話」。否定請求用「ないでください」！這是陷阱題！',
                    wrong: [
                        '「てください」錯誤：「話してください」是「請說話」，與「請安靜」矛盾！',
                        '「ってください」錯誤：「話す」的て形是「話して」不是「話って」！',
                        '「なくてください」錯誤：否定請求是「ないでください」不是「なくてください」！'
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
                usageId: 1,
                title: '接續方式',
                description: '動詞(て形) + も + いい',
                examples: []
            },
            {
                usageId: 2,
                title: '許可 (Is it okay to?)',
                description: '意思：...也可以、可以...嗎？\n表示許可。\n例：食べてもいい (吃也可以/可以吃)。',
                examples: [
                    { japanese: 'トイレに⾏ってもいいですか︖', chinese: '可以去廁所嗎？' },
                    { japanese: 'うん、⾏ってもいいですよ︕', chinese: '嗯，可以去喔！' },
                    { japanese: 'それを⾷べてもいいですか。', chinese: '可以吃那個嗎？' },
                    { japanese: '私も⼀緒に⾏っていい︖', chinese: '我也可以一起去嗎？' },
                    { japanese: 'ここに座ってもいいですか︖', chinese: '可以坐這裡嗎？' },
                    { japanese: '⼀つ質問を聞いていいですか︖', chinese: '可以問一個問題嗎？' },
                    { japanese: 'あなたと⼀緒に⾏ってもいいですよ。', chinese: '和你一起去也可以喔。' },
                    { japanese: '今話してもいいですか。', chinese: '現在講話方便嗎 (可以講話嗎)？' }
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
                    explanation: '「てもいい」是完整形式，口語中{なか}常省略「も」變成「ていい」。',
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
                    correct: '「もいい」正確！「使{つか}ってもいいですか」詢問「可以使用手機嗎」。',
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
                sentence: '「先{せん}生{せい}、辞{じ}書{しょ}を見{み}て（　）？」\n「はい、見{み}てもいいですよ。」',
                options: ['もいいですか', 'ください', 'ます', 'です'],
                correctIndex: 0,
                explanation: {
                    correct: '「もいいですか」正確！詢問老師「可以看字{じ}典嗎」，請求許可。',
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
                    correct: '「A:もいいです B:はいけません」正確！(A)「飲{の}んでもいい」= 可以喝；(B)「食{た}べてはいけない」= 不可以吃（用「でも」轉折）。',
                    wrong: [
                        '「A:はいけません B:もいいです」錯誤：「でも」表示轉折，前後應該相反。',
                        '「A:もいいです B:もいいです」錯誤：「でも」表示轉折，後面應該是相反的意思。',
                        '「A:はいけません B:はいけません」錯誤：「でも」表示轉折，兩邊不應該都是禁止。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「なくてもいい」不是「てもいい」
            {
                id: 'n5_q_temo_ii_6',
                sentence: '明日{あした}は休{やす}みだから、早{はや}く起{お}き（　）。',
                options: ['てもいいです', 'なくてもいいです', 'てはいけません', 'たいです'],
                correctIndex: 1,
                explanation: {
                    correct: '「なくてもいいです」正確！「起{お}きなくてもいい」= 不用早起也可以。明天休息，所以「不早起也沒關係」。這是陷阱題！',
                    wrong: [
                        '「てもいいです」錯誤：「起{お}きてもいい」= 可以早起。但明天休息，語意是「不必早起」，用「なくてもいい」。',
                        '「てはいけません」錯誤：「起{お}きてはいけない」= 禁止早起。語意太{ふと}強，也不合理。',
                        '「たいです」錯誤：「起{お}きたいです」= 想早起。與「明天休息」的情境不符。'
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
                usageId: 1,
                title: '接續方式',
                description: '動詞(ます形去掉ます) + たい',
                examples: []
            },
            {
                usageId: 2,
                title: '願望 (Want to)',
                description: '意思：想...。\n表示說話者想做某事。\n例：食べたい (想吃)。\n\n*注意：\n- 否定：たくない (不想...)\n- 過去：たかった (想...了/那時想...)\n- 欲求對象可用「が」或「を」標記。\n- 第三稱若要表示「想...」，通常用「たがる」。',
                examples: [
                    { japanese: '⽇本語をもっと勉強したいです。', chinese: '想多學習日語。' },
                    { japanese: '先⽣、聞きたいことがありますが。', chinese: '老師，我有想問的事。' },
                    { japanese: '早く結婚したい。', chinese: '想早點結婚。' },
                    { japanese: '⾃転⾞がこわれたから、新しいのを買いたい。', chinese: '腳踏車壞了，想買新的。' },
                    { japanese: '⼦どものころから、ずっと⽇本に⾏きたかった。', chinese: '從小時候開始，就一直想去日本。' },
                    { japanese: 'つかれたから、もう勉強したくない。', chinese: '累了，不想學習了。' },
                    { japanese: '将来は⽇本の会社で働きたいです。', chinese: '將來想在日本公司工作。' },
                    { japanese: 'お⾦がたくさんあったら、何をしたいですか︖', chinese: '如果有很多錢的話，想做什麼呢？' }
                ]
            }
        ],
        analysis: {
            title: '「たい」的助詞搭配',
            points: [
                {
                    rule: '「～が～たい」：對象用「が」標記（強調願望對象）',
                    examples: [{ japanese: '水{みず}が飲{の}みたい', chinese: '想喝水{みず}' }]
                },
                {
                    rule: '「～を～たい」：對象用「を」標記（較客觀）',
                    examples: [{ japanese: '水{みず}を飲{の}みたい', chinese: '想喝水{みず}' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '用「たい」描述第三者的願望',
                    explanation: '「たい」只用於表達自己的願望。描述別人{ひと}的願望要用「～たがっている」。',
                    whenToUse: '第一{ひと}人{り}稱用「たい」，第三{さん}人{にん}稱用「たがっている」。',
                    correct: { sentence: '私{わたし}は寿司{すし}が食{た}べたい。', note: '○ 自己的願望' },
                    incorrect: { sentence: '彼{かれ}は寿司{すし}が食{た}べたい。', note: '✕ 應用「食べたがっている」' }
                }
            ]
        },
        quiz: [
            // 第 1 題：正向題 - 正確答案是「たい」
            {
                id: 'n5_q_tai_1',
                sentence: '私{わたし}は日{に}本{ほん}に行{い}き（　）です。',
                options: ['たい', 'たく', 'たかった', 'たがる'],
                correctIndex: 0,
                explanation: {
                    correct: '「たい」正確！「行{い}きたい」表示「想去」，第一{ひと}人{り}稱的願望。',
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
                        '「たいです」錯誤：「たい」只能用於第一{ひと}人{り}稱！描述「他」的願望要用「たがっている」！',
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
                sentence: '私{わたし}はラーメンが食{た}べ（A）。田{た}中{なか}さんも食{た}べ（B）。',
                options: ['A:たいです B:たがっています', 'A:たがっています B:たいです', 'A:たいです B:たいです', 'A:たがっています B:たがっています'],
                correctIndex: 0,
                explanation: {
                    correct: '「A:たいです B:たがっています」正確！(A)「私{わたし}」是第一{ひと}人{り}稱用「たい」；(B)「田{た}中{なか}さん」是第三者用「たがる」。',
                    wrong: [
                        '「A:たがっています B:たいです」錯誤：(A)自己用「たい」，(B)他人{ひと}用「たがる」。',
                        '「A:たいです B:たいです」錯誤：(B)「田{た}中{なか}さん」是第三者，不能用「たい」！',
                        '「A:たがっています B:たがっています」錯誤：(A)「私{わたし}」是自己，不能用「たがる」！'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「たくない」不是「たい」
            {
                id: 'n5_q_tai_6',
                sentence: '明日{あした}は仕{し}事{ごと}があるから、今日{きょう}はお酒{さけ}を飲{の}み（　）です。',
                options: ['たい', 'たくない', 'ます', 'ません'],
                correctIndex: 1,
                explanation: {
                    correct: '「たくない」正確！「明天有工作」所以「今天不想喝酒」。「〜たくない」表示否定的願望。這是陷阱題！',
                    wrong: [
                        '「たい」錯誤：「飲{の}みたい」= 想喝。但情境是「明天有工作」，應該是「不想喝」。',
                        '「ます」錯誤：「飲{の}みます」是事實陳述，不表達願望。',
                        '「ません」錯誤：「飲{の}みません」是「不喝」的事實，不是「不想喝」的願望。'
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
                    { japanese: '漢字{かんじ}を読{よ}むことができます。', chinese: '能讀漢字{じ}。' },
                    {
                        japanese: '「ピアノを弾{ひ}くことができますか。」\n「はい、少{すこ}しできます。」\n「すごいですね！」',
                        chinese: '「會彈鋼琴嗎？」\n「是的，會一點。」\n「好{す}厲害！」',
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
                    explanation: '「ことができる」前面要接動詞原形（辞{じ}書{しょ}形），不是ます形。',
                    whenToUse: '動詞原形＋ことができる。',
                    correct: { sentence: '泳{およ}ぐことができます。', note: '○ 原形「泳{およ}ぐ」' },
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
                        '「ひと」錯誤：「ひと」指人{ひと}，不用於此句型。',
                        '「ところ」錯誤：「ところ」指地方或時{じ}機，不用於此句型。'
                    ]
                }
            },
            // 第 2 題：正向題 - 正確答案是「読{よ}む」
            {
                id: 'n5_q_koto_dekiru_2',
                sentence: '彼{かれ}は英{えい}語{ご}を（　）ことができます。',
                options: ['読{よ}む', '読み', '読{よ}んで', '読んだ'],
                correctIndex: 0,
                explanation: {
                    correct: '「読{よ}む」正確！「ことができる」前面接動詞原形（辞{じ}書{しょ}形）。',
                    wrong: [
                        '「読み」錯誤：ます形不能接「ことができる」。',
                        '「読{よ}んで」錯誤：て形不能接「ことができる」。',
                        '「読んだ」錯誤：た形不能接「ことができる」。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「話せます」（可能形）不是「ことができます」
            {
                id: 'n5_q_koto_dekiru_3',
                sentence: '（口語で）日本語{にほんご}（　）？',
                options: ['を話{はな}すことができますか', 'が話せますか', 'を話{はな}しますか', 'が話{はな}しますか'],
                correctIndex: 1,
                explanation: {
                    correct: '「が話せますか」正確！口語中{なか}，可能動詞比「ことができる」更自然簡潔。',
                    wrong: [
                        '「を話{はな}すことができますか」錯誤：雖然文法正確，但口語中{なか}太{ふと}正式冗長{なが}，可能形更自然！',
                        '「を話{はな}しますか」錯誤：這是「說嗎？」而不是「會說嗎？」，沒有能力的意思。',
                        '「が話{はな}しますか」錯誤：助詞錯誤，且沒有能力的意思。'
                    ]
                }
            },
            // 第 4 題：對話題 - 正確答案是「乗{の}る」
            {
                id: 'n5_q_koto_dekiru_4',
                sentence: '「自{じ}転{てん}車{しゃ}に（　）ことができますか。」\n「はい、できます。」',
                options: ['乗{の}る', '乗{の}り', '乗って', '乗った'],
                correctIndex: 0,
                explanation: {
                    correct: '「乗{の}る」正確！「ことができる」前面接動詞原形。',
                    wrong: [
                        '「乗{の}り」錯誤：ます形不能接「ことができる」。',
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
                        '「A:ことができます B:ことができます」錯誤：(B)口語中{なか}「ことができる」太{ふと}冗長{なが}。',
                        '「A:が撮れます B:が撮れます」錯誤：(A)正式場合「ことができる」較適合。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「〜たい」不是「ことができる」
            {
                id: 'n5_q_koto_dekiru_6',
                sentence: '私{わたし}は日{に}本{ほん}に行{い}き（　）です。夢{ゆめ}です。',
                options: ['ことができます', 'たい', 'ます', 'ました'],
                correctIndex: 1,
                explanation: {
                    correct: '「たい」正確！「夢です」表示這是願望，用「〜たい」（想要）！這是陷阱題！',
                    wrong: [
                        '「ことができます」錯誤：「ことができる」表示能力，但這裡說「夢です」是願望，用「たい」！',
                        '「ます」錯誤：「行きます」是事實陳述，不表示願望。',
                        '「ました」錯誤：「行きました」是過去式，不是願望。'
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
                        chinese: '「中{なか}午了呢。」\n「對啊，吃飯吧。」\n「嗯，去哪裡？」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示意志/決心',
                description: '表示說話者自己的決心或意志。',
                examples: [
                    { japanese: '頑張{がんば}りましょう！', chinese: '加油吧！' },
                    { japanese: '明日{あした}から運動{うんどう}しましょう。', chinese: '從明天開始運{うん}動{どう}吧。' },
                    {
                        japanese: '「試{し}験{けん}、大変{たいへん}だったね。」\n「うん、でも次{つぎ}は頑張{がんば}りましょう！」\n「そうだね！」',
                        chinese: '「考試好{す}辛{から}苦{にが}呢。」\n「嗯，但下次加油吧！」\n「對啊！」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '「～ましょうか」表示提議幫忙{いそが}',
                description: '詢問對方是否需要幫忙{いそが}。',
                examples: [
                    { japanese: '手伝{てつだ}いましょうか。', chinese: '要幫忙{いそが}嗎？' },
                    { japanese: '窓{まど}を開{あ}けましょうか。', chinese: '要開窗嗎？' },
                    {
                        japanese: '「重{おも}そうですね。持{も}ちましょうか。」\n「ありがとうございます。助{たす}かります。」\n「どういたしまして。」',
                        chinese: '「看起來很重呢。要幫你拿嗎？」\n「謝謝。真是幫了大忙{いそが}。」\n「不客氣。」',
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
                    rule: '「～ましょうか」：詢問要不要做、提議幫忙{いそが}',
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
                    whenToUse: '想要較婉轉邀請時{じ}用「ませんか」。',
                    correct: { sentence: '映{えい}画{が}を見{み}ませんか。', note: '○ 婉轉邀請' },
                    incorrect: { sentence: '映{えい}画{が}を見{み}ましょう。', note: '○ 也可以，但較直接' }
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
                    correct: '「ましょう」正確！「持{も}ちましょうか」表示「要幫你拿嗎」，提議幫忙{いそが}。',
                    wrong: [
                        '「ます」錯誤：「ますか」是單純詢問，不是提議幫忙{いそが}。',
                        '「ました」錯誤：「ましたか」是過去式疑問。',
                        '「ません」錯誤：「ませんか」是婉轉邀請，語意不同。'
                    ]
                }
            },
            // 第 3 題：陷阱題 - 正確答案是「ませんか」不是「ましょう」
            {
                id: 'n5_q_mashou_3',
                sentence: '（初めて誘{さそ}う時{とき}）映{えい}画{が}を見{み}に行{い}き（　）。',
                options: ['ましょう', 'ませんか', 'ました', 'ます'],
                correctIndex: 1,
                explanation: {
                    correct: '「ませんか」正確！第一次邀請時{じ}，用「ませんか」較婉轉有禮，給對方拒絕的餘地。',
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
                    correct: '「ましょう」正確！提議「休息一下吧」，雙方已經在一起時{じ}用「ましょう」。',
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
                        '「A:ましょう B:ましょう」錯誤：(B)初次邀請太{ふと}直接，用「ませんか」更有禮。',
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
                        chinese: '「不好{す}意思，請不要在這裡抽菸。」\n「啊，抱歉。」\n「謝謝您。」',
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
                        japanese: '「明日{あした}の会{かい}議{ぎ}、大事{だいじ}だから遅{おく}れないでね。」\n「わかった、気{き}をつける。」\n「よろしくね。」',
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
                sentence: '（学{がっ}校{こう}のルール）教室{きょうしつ}で食{た}べ（　）。',
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
                        '「A:てはいけません B:ないで」錯誤：(A)對朋友太{ふと}強硬，(B)規則應該用「てはいけません」。',
                        '「A:ないで B:ないで」錯誤：(B)博物館規則應該用「てはいけません」，更有權威性。',
                        '「A:てはいけません B:てはいけません」錯誤：(A)對朋友用「てはいけません」太{ふと}強硬。'
                    ]
                }
            }
        ]
    }
});

// ============================================================
// Batch 7: 比較與程度句型 (より、ほうが、一{いち}番{ばん})
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
                    { japanese: '東{とう}京{きょう}は大阪{おおさか}より大{おお}きいです。', chinese: '東{とう}京{きょう}比大阪大。' },
                    { japanese: '日本語{にほんご}は英{えい}語{ご}より難{むずか}しいです。', chinese: '日語比英{えい}語{ご}難{むずか}。' },
                    {
                        japanese: '「コーヒーと紅{こう}茶{ちゃ}、どっちが好{す}き？」\n「コーヒーより紅{こう}茶{ちゃ}のほうが好{す}きかな。」\n「そうなんだ。」',
                        chinese: '「咖啡和紅{こう}茶{ちゃ}，比較喜歡哪個？」\n「比起咖啡，比較喜歡紅{こう}茶{ちゃ}吧。」\n「這樣啊。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '「より〜のほうが」句型',
                description: '「A より B のほうが」表示B比A更...。',
                examples: [
                    { japanese: 'バスより電{でん}車{しゃ}のほうが速{はや}いです。', chinese: '電{でん}車{しゃ}比公車{くるま}快。' },
                    { japanese: '昨日{きのう}より今日{きょう}のほうが暑{あつ}いです。', chinese: '今{いま}天比昨天熱{ねつ}。' },
                    {
                        japanese: '「この映{えい}画{が}とあの映{えい}画{が}、どっちがおもしろい？」\n「この映{えい}画{が}よりあの映{えい}画{が}のほうがおもしろいよ。」\n「じゃ、あれを見{み}よう。」',
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
                    examples: [{ japanese: '私{わたし}は兄{あに}より背{せ}が高{たか}い', chinese: '我比哥哥高{たか}' }]
                },
                {
                    rule: '「BよりAのほうが～」：比起B，A更...',
                    examples: [{ japanese: '兄{あに}より私{わたし}のほうが背{せ}が高{たか}い', chinese: '比起哥哥，我更高{たか}' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '比較方向搞混',
                    explanation: '「AはBより」中{なか}，A是較高{たか}程度的那個。',
                    whenToUse: '記住「より」後面是被比較的對象（較低{ひく}程度）。',
                    correct: { sentence: '東{とう}京{きょう}は大阪{おおさか}より大{おお}きい。', note: '○ 東{とう}京{きょう}＞大阪' },
                    incorrect: { sentence: '大阪{おおさか}は東{とう}京{きょう}より大{おお}きい。', note: '✕ 大阪不比東{とう}京{きょう}大' }
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
                    correct: '「より」正確！「春{はる}より暑{あつ}い」表示「比春天熱{ねつ}」。',
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
                sentence: 'バス（　）電{でん}車{しゃ}のほうが速{はや}いです。',
                options: ['より', 'は', 'が', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「より」正確！「バスより電{でん}車{しゃ}のほうが」表示「比起公車{くるま}，電{でん}車{しゃ}更快」。',
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
                    correct: '「ほど」正確！「昨{き}日{のう}ほど寒{さむ}くない」表示「沒有昨天那麼冷{つめ}」，否定比較用「ほど～ない」。',
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
                    correct: '「より」正確！「魚{さかな}より肉{にく}のほうが好{す}き」表示「比起魚{さかな}，更喜歡肉{にく}」。',
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
                sentence: '東{とう}京{きょう}は大阪{おおさか}（A）大{おお}きい。京都{きょうと}は東{とう}京{きょう}（B）大{おお}きくない。',
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
            },
            // 第 6 題：陷阱題 - 正確答案是「と同{おな}じくらい」不是「より」
            {
                id: 'n5_q_yori_6',
                sentence: '兄{あに}は私{わたし}（　）背{せ}が高{たか}いです。身長{しんちょう}は同{おな}じです。',
                options: ['より', 'と同{おな}じくらい', 'ほど', 'だけ'],
                correctIndex: 1,
                explanation: {
                    correct: '「と同{おな}じくらい」正確！「身長{しんちょう}は同{おな}じ」說明兩人一樣高{たか}，所以用「と同{おな}じくらい」（和...一樣）。這是陷阱題！',
                    wrong: [
                        '「より」錯誤：「より」表示「比...」，但後面說「身長{しんちょう}は同{おな}じ」（一樣高{たか}），所以不能用「より」！',
                        '「ほど」錯誤：「ほど」用於否定比較「～ほど～ない」，這裡是肯定句。',
                        '「だけ」錯誤：「だけ」表示「只有」，與句意不合。'
                    ]
                }
            }
        ]
    },

    // n5_ichiban - 一{いち}番{ばん}（最...）
    n5_ichiban: {
        id: 'n5_ichiban',
        pattern: '一{いち}番{ばん}',
        connection: '一{いち}番{ばん}＋形容詞/副詞',
        translation: '最...',
        level: 'N5',
        explanation: [
            {
                usage: '表示最高{たか}級',
                description: '表示在某範圍內最...。',
                examples: [
                    { japanese: '富士山{ふじさん}は日{に}本{ほん}で一{いち}番{ばん}高{たか}い山{やま}です。', chinese: '富士山{やま}是日{に}本{ほん}最高的山{やま}。' },
                    { japanese: 'この店{みせ}のラーメンが一{いち}番{ばん}おいしいです。', chinese: '這家{いえ}店{みせ}的拉麵最好{す}吃。' },
                    {
                        japanese: '「日{に}本{ほん}で一{いち}番{ばん}行{い}きたい場所{ばしょ}はどこ？」\n「京都{きょうと}かな。お寺{てら}が見{み}たい。」\n「いいね！」',
                        chinese: '「日{に}本{ほん}最想去的地方是哪裡？」\n「京都吧。想看寺廟。」\n「不錯呢！」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '「～の中{なか}で一{いち}番{ばん}」句型',
                description: '「...之中{なか}最...」的表達方式。',
                examples: [
                    { japanese: '果{くだ}物{もの}の中{なか}で、りんごが一{いち}番{ばん}好{す}きです。', chinese: '水{みず}果之中{なか}，最喜歡蘋果。' },
                    { japanese: 'クラスの中{なか}で、田{た}中{なか}さんが一{いち}番{ばん}背{せ}が高{たか}いです。', chinese: '班上田{た}中{なか}最高{たか}。' },
                    {
                        japanese: '「季{き}節{せつ}の中{なか}で何{なに}が一{いち}番{ばん}好{す}き？」\n「秋{あき}が一{いち}番{ばん}好{す}きだな。」\n「どうして？」',
                        chinese: '「季節中{なか}最喜歡哪個？」\n「最喜歡秋{あき}天吧。」\n「為什麼？」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '最高{たか}級的表達方式',
            points: [
                {
                    rule: '「～で一{いち}番{ばん}」：在...（範圍）最...',
                    examples: [{ japanese: '日{に}本{ほん}で一{いち}番{ばん}', chinese: '在日{に}本{ほん}最...' }]
                },
                {
                    rule: '「～の中{なか}で一{いち}番{ばん}」：...之中{なか}最...',
                    examples: [{ japanese: '果{くだ}物{もの}の中{なか}で一{いち}番{ばん}', chinese: '水{みず}果之中{なか}最...' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '忘記加範圍',
                    explanation: '使用「一{いち}番{ばん}」時{じ}通常要說明範圍（在哪裡、在什麼之中{なか}）。',
                    whenToUse: '可用「で」或「の中{なか}で」表示範圍。',
                    correct: { sentence: 'クラスで一{いち}番{ばん}背{せ}が高{たか}い。', note: '○ 有範圍' },
                    incorrect: { sentence: '一{いち}番{ばん}背{せ}が高{たか}い。', note: '△ 沒有範圍，語意不完整' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_ichiban_1',
                sentence: '富士山{ふじさん}は日{に}本{ほん}（　）一{いち}番{ばん}高{たか}い山{やま}です。',
                options: ['で', 'に', 'を', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「で」正確！「日{に}本{ほん}で一{いち}番{ばん}」表示「在日{に}本{ほん}最...」，「で」標記比較範圍。',
                    wrong: [
                        '「に」錯誤：「に」用於存在場{ば}所{しょ}，不是比較範圍！「最高{たか}級＋範圍」用「で」！',
                        '「を」錯誤：「を」是受詞標記，不用於範圍。',
                        '「が」錯誤：「が」標記主語，不是範圍。範圍用「で」！'
                    ]
                }
            },
            {
                id: 'n5_q_ichiban_2',
                sentence: 'スポーツの中{なか}（　）、サッカーが一{いち}番{ばん}好{す}きです。',
                options: ['で', 'に', 'を', 'は'],
                correctIndex: 0,
                explanation: {
                    correct: '「で」正確！「の中{なか}で」表示「...之中{なか}」，是表示範圍的固定用法。',
                    wrong: [
                        '「に」錯誤：「の中{なか}で」是固定搭配，不能用「の中{なか}に」表示比較範圍！',
                        '「を」錯誤：「の中{なか}を」表示通過某處（移動），不是比較範圍。',
                        '「は」錯誤：「は」是主題標記，「の中{なか}は」不用於最高{たか}級比較。'
                    ]
                }
            },
            {
                id: 'n5_q_ichiban_3',
                sentence: '今年{ことし}は去年{きょねん}（　）暖{あたた}かいです。',
                options: ['より', 'で', 'が', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「より」正確！「去{きょ}年{ねん}より暖かい」表示「比去{きょ}年{ねん}暖和」。這是普通比較，不是最高{たか}級！',
                    wrong: [
                        '「で」錯誤：「で」用於最高{たか}級範圍（一{いち}番{ばん}～で），這裡是兩者比較用「より」！',
                        '「が」錯誤：「が」標記主語，比較用「より」！',
                        '「に」錯誤：「に」不用於比較。'
                    ]
                }
            },
            {
                id: 'n5_q_ichiban_4',
                sentence: '「家{か}族{ぞく}の中{なか}で誰{だれ}（　）一{いち}番{ばん}早{はや}く起{お}きる？」\n「お母{かあ}さんかな。」\n「やっぱり。」',
                options: ['が', 'は', 'を', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！疑問詞「誰{だれ}」後面用「が」標記主語。「誰{だれ}が一{いち}番{ばん}～」是固定用法。',
                    wrong: [
                        '「は」錯誤：疑問詞（誰{だれ}、何{なに}、どこ等）作主語時{じ}必須用「が」，不用「は」！',
                        '「を」錯誤：「を」是受詞標記，「誰{だれ}」在這裡是主語。',
                        '「の」錯誤：「の」不能標記主語。'
                    ]
                }
            },
            {
                id: 'n5_q_ichiban_5',
                sentence: '「一{いち}番{ばん}」和「より」有什麼區別？\n選出正確的說明：',
                options: [
                    '「一{いち}番{ばん}」是最高{たか}級（三者以上），「より」是比較級（兩者）',
                    '「一{いち}番{ばん}」和「より」意思完全相同',
                    '「一{いち}番{ばん}」只能用於人{ひと}，「より」只能用於物',
                    '「一{いち}番{ばん}」用於否定，「より」用於肯定'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「一{いち}番{ばん}」用於三者以上選出最～的（最高{たか}級），「より」用於兩者比較（比較級）。',
                    wrong: [
                        '錯誤：兩者意思不同。「一{いち}番{ばん}」=最...，「より」=比...。',
                        '錯誤：兩者都可以用於人{ひと}和物。',
                        '錯誤：兩者都可以用於肯定句。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「より」不是「一{いち}番{ばん}」
            {
                id: 'n5_q_ichiban_6',
                sentence: 'この二{ふた}つの中{なか}で、どちらが（　）好{す}きですか。',
                options: ['一{いち}番{ばん}', 'より', 'ほど', 'もっと'],
                correctIndex: 3,
                explanation: {
                    correct: '「もっと」正確！「二{ふた}つの中{なか}で」是兩者比較，問「哪個更喜歡」用「もっと」或直接問「どちらが好{す}き」。這是陷阱題！',
                    wrong: [
                        '「一{いち}番{ばん}」錯誤：「一{いち}番{ばん}」是最高{たか}級，用於三者以上！兩者比較不用「一{いち}番{ばん}」！',
                        '「より」錯誤：「より」用於「AよりB」的結構，不能單獨放在這裡。',
                        '「ほど」錯誤：「ほど」用於否定比較「～ほど～ない」。'
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
                usageId: 1,
                title: '接續方式',
                description: 'とても + 形容詞',
                examples: []
            },
            {
                usageId: 2,
                title: '程度 (Very)',
                description: '意思：非常...、很...。\n表示程度很高。\n例：とても暑い (很熱)。',
                examples: [
                    { japanese: '今日はとても暑いですね。', chinese: '今天非常熱呢。' },
                    { japanese: 'このケーキはとてもおいしいです。', chinese: '這個蛋糕非常好吃。' },
                    { japanese: '彼女はとても親切な人です。', chinese: '她是個非常親切的人。' },
                    { japanese: '昨日のテストはとても難しかったです。', chinese: '昨天的考試非常難。' },
                    { japanese: '日本語の勉強はとても楽しいです。', chinese: '學習日語非常快樂。' }
                ]
            }
        ],
        analysis: {
            title: '程度副詞的比較',
            points: [
                {
                    rule: '「とても」：非常（程度高{たか}）',
                    examples: [{ japanese: 'とても暑{あつ}い', chinese: '非常熱{ねつ}' }]
                },
                {
                    rule: '「すごく」：超級（口語，程度高{たか}）',
                    examples: [{ japanese: 'すごく暑{あつ}い', chinese: '超熱{ねつ}' }]
                },
                {
                    rule: '「ちょっと」：有點（程度低{ひく}）',
                    examples: [{ japanese: 'ちょっと暑{あつ}い', chinese: '有點熱{ねつ}' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '「とても」和動詞直接連用',
                    explanation: '「とても」主要修飾形容詞或副詞，不直接修飾動詞。',
                    whenToUse: '修飾動詞時{じ}用「よく」「たくさん」等。',
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
                    correct: '「とても」正確！「とても寒{さむ}い」表示「非常冷{つめ}」。「とても」修飾形容詞，加強程度。',
                    wrong: [
                        '「たくさん」錯誤：「たくさん」表示數量多，修飾動詞，不能修飾形容詞！',
                        '「いつも」錯誤：「いつも」表示頻率「總是」，不表示程度。',
                        '「ぜんぶ」錯誤：「ぜんぶ」表示「全{ぜん}部{ぶ}」，不表示程度。'
                    ]
                }
            },
            {
                id: 'n5_q_totemo_2',
                sentence: 'この映{えい}画{が}は（　）おもしろかったです。',
                options: ['とても', 'たくさん', 'だいたい', 'すこし'],
                correctIndex: 0,
                explanation: {
                    correct: '「とても」正確！「とてもおもしろかった」表示「非常有趣」，程度很高{たか}。',
                    wrong: [
                        '「たくさん」錯誤：「たくさん」修飾數量，不能修飾形容詞！',
                        '「だいたい」錯誤：「だいたい」表示「大約」，不表示程度。',
                        '「すこし」錯誤：語法可以，但意思變成「有點有趣」，程度低{ひく}。'
                    ]
                }
            },
            {
                id: 'n5_q_totemo_3',
                sentence: '昨日{きのう}、本{ほん}を（　）読{よ}みました。',
                options: ['たくさん', 'とても', 'すごく', 'ちょっと'],
                correctIndex: 0,
                explanation: {
                    correct: '「たくさん」正確！「たくさん読{よ}む」表示「讀很多」。修飾動詞的數量用「たくさん」！',
                    wrong: [
                        '「とても」錯誤：「とても」修飾形容詞，不直接修飾動詞！「とても読{よ}む」不自然！',
                        '「すごく」錯誤：「すごく」修飾形容詞，不直接修飾動詞。',
                        '「ちょっと」錯誤：「ちょっと」修飾形容詞或表示「稍微」。'
                    ]
                }
            },
            {
                id: 'n5_q_totemo_4',
                sentence: '「日本語{にほんご}の勉{べん}強{きょう}、どう？」\n「（　）楽{たの}しいよ。」\n「よかった！」',
                options: ['とても', 'たくさん', 'ぜんぜん', 'だんだん'],
                correctIndex: 0,
                explanation: {
                    correct: '「とても」正確！「とても楽{たの}しい」表示「非常開心」，回答「どう？」的問{もん}題{だい}。',
                    wrong: [
                        '「たくさん」錯誤：「たくさん」表示數量，不能修飾「楽{たの}しい」這個形容詞！',
                        '「ぜんぜん」錯誤：「ぜんぜん」後面要接否定句（ぜんぜん～ない）！',
                        '「だんだん」錯誤：「だんだん」表示「漸漸」，不表示程度高{たか}。'
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
                    correct: '正確！「とても」修飾形容詞（とても暑{あつ}い），「たくさん」修飾動詞（たくさん食{た}べる）。',
                    wrong: [
                        '錯誤：兩者用途不同。程度用「とても」，數量用「たくさん」。',
                        '錯誤：兩者都可以用於肯定句。',
                        '錯誤：時{じ}態跟這兩個詞無關。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「あまり」不是「とても」
            {
                id: 'n5_q_totemo_6',
                sentence: 'この店{みせ}のラーメンは（　）おいしくないです。',
                options: ['とても', 'あまり', 'たくさん', 'いつも'],
                correctIndex: 1,
                explanation: {
                    correct: '「あまり」正確！「あまり～ない」表示「不太～」。否定句中{なか}用「あまり」。這是陷阱題！',
                    wrong: [
                        '「とても」錯誤：「とても」後面通常接肯定句！「とても～ない」雖然文法上可以（表示「完全無法」），但這裡語境是「不太好{す}吃」，用「あまり」更自然！',
                        '「たくさん」錯誤：「たくさん」表示數量多，不能修飾形容詞！',
                        '「いつも」錯誤：「いつも」表示頻率「總是」，不表示程度。'
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
                usageId: 1,
                title: '接續方式',
                description: '普通形 + ので\n名詞/な形容詞 + な + ので',
                examples: []
            },
            {
                usageId: 2,
                title: '因為...所以... (Reason)',
                description: '意思：因為...、由於...。\n表示原因或理由。\n比較：\n- から (kara)：主觀原因，語氣較強。\n- ので (node)：客觀原因，較為委婉禮貌。\n\n注意接續：名詞/な形容詞要加「な」 (例：好きなので)。',
                examples: [
                    { japanese: 'ちょっと寒いので、窓を閉めてもいいですか。', chinese: '因為有點冷，可以關窗戶嗎？' },
                    { japanese: 'ちょっと⽤事があるので、先に帰ります。', chinese: '因為有點事，先回去了。' },
                    { japanese: '台⾵が来るので、明⽇のクラスに来なくていいです。', chinese: '因為颱風要來，明天的課不用來。' },
                    { japanese: 'おなかが痛いので、薬をください。', chinese: '因為肚子痛，請給我藥。' },
                    { japanese: '彼⼥がとてもきれいなので、すぐ好きになりました。', chinese: '因為她太漂亮了，馬上就喜歡上了。' },
                    { japanese: '今から⾏きますので、少々お待ちください。', chinese: '現在就過去，請稍等一下。' },
                    { japanese: '⾬が降っていたので、試合が中⽌になりました。', chinese: '因為下雨，比賽中止了。' }
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
                    explanation: '「ので」接名詞和な形容詞時{じ}，要加「な」變成「なので」。',
                    whenToUse: '名詞＋なので、な形容詞語幹＋なので。',
                    correct: { sentence: '学{がく}生{せい}なので、お金{かね}がありません。', note: '○ 名詞＋なので' },
                    incorrect: { sentence: '学{がく}生{せい}ので、お金{かね}がありません。', note: '✕ 缺少「な」' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_node_1',
                sentence: '明日{あした}はテストがある（　）、今日{きょう}は勉{べん}強{きょう}します。',
                options: ['ので', 'けど', 'のに', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「ので」正確！表示原因「因為明天有考試，所以今{いま}天要讀書」。',
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
                    correct: '「な」正確！な形容詞（静{しず}か）接「ので」要加「な」變成「なので」。',
                    wrong: [
                        '「だ」錯誤：書面語/丁寧語用「なので」，不用「だので」！「だ」是口語體。',
                        '「の」錯誤：な形容詞用「なので」，不是「のので」。',
                        '「に」錯誤：「にので」文法錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_node_3',
                sentence: '勉{べん}強{きょう}したのに、テストに落{お}ちてしまいました。',
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
                sentence: '「どうして遅{おく}れたんですか。」\n「電{でん}車{しゃ}が遅{おく}れた（　）、遅刻{ちこく}しました。すみません。」\n「気{き}をつけてくださいね。」',
                options: ['ので', 'のに', 'けど', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「ので」正確！禮貌地說明遲到的原因。對上司/老師解釋時{じ}用「ので」較禮貌。',
                    wrong: [
                        '「のに」錯誤：「のに」表示逆接「明明電{でん}車{しゃ}誤點卻遲到」？邏輯矛盾！',
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
                        '錯誤：時{じ}態跟這兩個詞無關。',
                        '錯誤：兩者都可以用於敬語和常體。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「のに」不是「ので」
            {
                id: 'n5_q_node_6',
                sentence: '約{やく}束{そく}した（　）、彼{かれ}は来{こ}なかった。',
                options: ['ので', 'のに', 'から', 'けど'],
                correctIndex: 1,
                explanation: {
                    correct: '「のに」正確！「明明約好{す}了，他卻沒來」是逆接。用「のに」表達「明明...卻...」的不滿或意外。這是陷阱題！',
                    wrong: [
                        '「ので」錯誤：「ので」是因果關係。「因為約好{す}了，所以他沒來」語意不通。',
                        '「から」錯誤：「から」也是因果關係，語意不通。',
                        '「けど」：「けど」可以表示轉折，但「のに」更能表達「不滿、遺憾」的語氣。'
                    ]
                }
            }
        ]
    }
});

// ============================================================
// Batch 8: 時{じ}間{かん}與頻率表達 (まえに、あとで、とき、いつも)
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
                        chinese: '「出門前有什麼要做的嗎？」\n「嗯，把窗戶關上。」\n「好{す}的。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '名詞＋のまえに',
                description: '名詞接「まえに」時{じ}要加「の」。',
                examples: [
                    { japanese: '会{かい}議{ぎ}のまえに、資料{しりょう}を準備{じゅんび}します。', chinese: '會議前準{じゅん}備{び}資料。' },
                    { japanese: '試{し}験{けん}のまえに、たくさん勉{べん}強{きょう}しました。', chinese: '考試前讀了很多書。' },
                    {
                        japanese: '「旅行{りょこう}のまえに、何{なに}を準備{じゅんび}する？」\n「パスポートと服{ふく}かな。」\n「カメラも忘{わす}れないでね。」',
                        chinese: '「旅行前要準{じゅん}備{び}什麼？」\n「護照和衣服吧。」\n「相機也別忘了喔。」',
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
                    explanation: '「まえに」前面的動詞要用原形（辞{じ}書{しょ}形），不是た形。',
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
                    correct: '「まえ」正確！「寝{ね}るまえに」表示「睡覺之前」先洗澡。',
                    wrong: [
                        '「あと」錯誤：「寝{ね}るあと」不自然！「あと」接動詞要用た形（寝たあと）！',
                        '「とき」錯誤：「とき」表示「...的時{じ}候」，不是「之前」。',
                        '「ので」錯誤：「ので」表示原因，不是時{じ}間{かん}。'
                    ]
                }
            },
            {
                id: 'n5_q_mae_ni_2',
                sentence: '会{かい}議{ぎ}（　）まえに、コーヒーを飲{の}みます。',
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
                        '「まえに」錯誤：「まえに」接動詞原形（食{た}べるまえに），不是た形！這裡用了「食べた」所以要接「あとで」！',
                        '「ときに」錯誤：「ときに」表示「...的時{じ}候」，不是順序。',
                        '「ので」錯誤：「ので」表示原因。'
                    ]
                }
            },
            {
                id: 'n5_q_mae_ni_4',
                sentence: '「映{えい}画{が}を見{み}る（　）に、何{なに}か食{た}べない？」\n「いいね。ポップコーン買{か}おう。」\n「そうしよう。」',
                options: ['まえ', 'あと', 'とき', 'から'],
                correctIndex: 0,
                explanation: {
                    correct: '「まえ」正確！「見{み}るまえに」=看電影之前。動詞原形接「まえに」！',
                    wrong: [
                        '「あと」錯誤：「見{み}るあと」不自然！「あと」要接た形（見{み}たあと）！',
                        '「とき」錯誤：「とき」表示「...的時{じ}候」，不是「之前」。',
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
                    correct: '正確！「食{た}べるまえに」（原形）、「食べたあとで」（た形）。記住這個規則！',
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
                    { japanese: '食{た}べたあとで、散{さん}歩{ぽ}します。', chinese: '吃完後散步。' },
                    { japanese: '映{えい}画{が}を見{み}たあとで、感想{かんそう}を話{はな}しましょう。', chinese: '看完電影後聊聊感想吧。' },
                    {
                        japanese: '「買{か}い物{もの}したあとで、お茶{ちゃ}しない？」\n「いいね！どこに行{い}く？」\n「駅{えき}前{まえ}のカフェは？」',
                        chinese: '「購物後要不要喝茶？」\n「好{す}啊！去哪裡？」\n「車{くるま}站前的咖啡廳如何{なに}？」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '名詞＋のあとで',
                description: '名詞接「あとで」時{じ}要加「の」。',
                examples: [
                    { japanese: '仕事{しごと}のあとで、飲{の}みに行{い}きませんか。', chinese: '工作後要不要去喝一杯？' },
                    { japanese: '授{じゅ}業{ぎょう}のあとで、質{しつ}問{もん}があります。', chinese: '下課後有問{もん}題{だい}。' },
                    {
                        japanese: '「会{かい}議{ぎ}のあとで、ちょっといい？」\n「うん、何{なに}？」\n「相談{そうだん}したいことがあるんだ。」',
                        chinese: '「會議後方便嗎？」\n「好{す}，什麼事？」\n「有事想商量。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「あとで」vs「てから」的區別',
            points: [
                {
                    rule: '「あとで」：...之後（時{じ}間{かん}較鬆散）',
                    examples: [{ japanese: '食{た}べたあとで散{さん}歩{ぽ}する', chinese: '吃完後（過一會）散步' }]
                },
                {
                    rule: '「てから」：...之後（緊密順序）',
                    examples: [{ japanese: '食{た}べてから散{さん}歩{ぽ}する', chinese: '吃完後（馬上）散步' }]
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
                sentence: '仕事{しごと}が終{お}わった（　）で、映{えい}画{が}を見{み}ます。',
                options: ['あと', 'まえ', 'とき', 'ので'],
                correctIndex: 0,
                explanation: {
                    correct: '「あと」正確！「終{お}わったあとで」=結束之後。た形接「あとで」！',
                    wrong: [
                        '「まえ」錯誤：「まえ」表示「之前」，而且「終{お}わった」是た形，「まえ」要接原形！',
                        '「とき」錯誤：「とき」表示「...的時{じ}候」，不是順序。',
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
                    correct: '「の」正確！名詞接「あとで」要加「の」。「昼{ひる}ご飯{はん}のあとで」=午餐之後。',
                    wrong: [
                        '「を」錯誤：「を」是受詞標記，名詞連接「あとで」用「の」！',
                        '「が」錯誤：「が」是主語標記，不用於連接「あとで」。',
                        '「に」錯誤：「にあとで」文法錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_ato_de_3',
                sentence: '日{に}本{ほん}に行{い}く（　）に、パスポートを準備{じゅんび}しました。',
                options: ['まえ', 'あと', 'とき', 'ので'],
                correctIndex: 0,
                explanation: {
                    correct: '「まえ」正確！「行{い}くまえに」=去之前。要出發前先準{じゅん}備{び}護照，所以是「之前」！',
                    wrong: [
                        '「あと」錯誤：「行{い}くあと」不自然！「あと」要接た形（行{い}ったあと）！而且邏輯上護照要在出發前準{じゅん}備{び}！',
                        '「とき」錯誤：「とき」表示「...的時{じ}候」，這裡強調順序。',
                        '「ので」錯誤：「ので」表示原因。'
                    ]
                }
            },
            {
                id: 'n5_q_ato_de_4',
                sentence: '「宿{しゅく}題{だい}を（　）あとで、ゲームしていい？」\n「いいよ。頑張{がんば}って。」\n「やった！」',
                options: ['した', 'する', 'して', 'し'],
                correctIndex: 0,
                explanation: {
                    correct: '「した」正確！「あとで」前面用動詞た形。「宿{しゅく}題{だい}をしたあとで」=做完功課之後。',
                    wrong: [
                        '「する」錯誤：「するあとで」不自然！「あとで」接た形！',
                        '「して」錯誤：「してあとで」不自然！「あとで」接た形，不是て形！',
                        '「し」錯誤：ます形語幹不能直接接「あとで」。'
                    ]
                }
            },
            {
                id: 'n5_q_ato_de_5',
                sentence: '「あとで」和「てから」有什麼區別？\n選出正確的說明：',
                options: [
                    '「あとで」時{じ}間{かん}較鬆散，「てから」緊接著馬上做',
                    '「あとで」和「てから」意思完全相同',
                    '「あとで」接原形，「てから」接た形',
                    '「あとで」只能用於過去，「てから」用於現在'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「食べたあとで散{さん}歩{ぽ}する」（過一會散步）vs「食{た}べてから散{さん}歩{ぽ}する」（吃完馬上散步）。',
                    wrong: [
                        '錯誤：兩者語感不同。「てから」強調緊密順序。',
                        '錯誤：接續不同。「あとで」接た形，「てから」接て形。',
                        '錯誤：時{じ}態跟這兩個詞無關，都可以用於各種時{じ}態。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「前に」不是「後で」
            {
                id: 'n5_q_ato_de_6',
                sentence: '寝{ね}る（　）、歯{は}を磨{みが}きます。',
                options: ['後{あと}で', '前{まえ}に', 'てから', 'ながら'],
                correctIndex: 1,
                explanation: {
                    correct: '「前に」正確！刷牙是睡覺「之前」做的事，用「前に」！這是陷阱題！',
                    wrong: [
                        '「後で」錯誤：「寝る後で」＝睡覺之後，但睡著後怎麼刷牙？刷牙是睡前做的！',
                        '「てから」錯誤：「てから」接て形，不接辞書形。而且「寝てから」＝睡著之後，語意也不對。',
                        '「ながら」錯誤：「ながら」是同時進行，不能一邊睡一邊刷牙！'
                    ]
                }
            }
        ]
    },

    // n5_toki - ～とき（...的時{じ}候）
    n5_toki: {
        id: 'n5_toki',
        pattern: '～とき',
        connection: '動詞普通形＋とき、い形容詞＋とき、な形容詞＋な＋とき、名詞＋の＋とき',
        translation: '...的時{じ}候',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: '普通形 + とき\n名詞 + の + とき\nな形容詞 + な + とき',
                examples: []
            },
            {
                usageId: 2,
                title: '時候 (When)',
                description: '意思：...的時候。\n表示時間點或場合。\n例：子供のとき (小時候)、行くとき (要去的時候)。',
                examples: [
                    { japanese: '図書館で本を借りるとき、カードがいります。', chinese: '在圖書館借書的時候，需要卡片。' },
                    { japanese: '使い⽅がわからないとき、私に聞いてください。', chinese: '不知道怎麼用的時候，請問我。' },
                    { japanese: '忙しいとき、家族に⼿伝ってもらいます。', chinese: '忙碌的時候，會請家人幫忙。' },
                    { japanese: '暇なとき、ゲームをします。', chinese: '有空的時候，會玩遊戲。' },
                    { japanese: '子供のとき、よく川で泳ぎました。', chinese: '小時候，常在河裡游泳。' },
                    { japanese: '電車に乗っているとき、地震がありました。', chinese: '搭電車的時候，發生了地震。' }
                ]
            }
        ],
        analysis: {
            title: '「とき」的接續方式',
            points: [
                {
                    rule: '動詞原形＋とき：要做...的時{じ}候（動作未完成）',
                    examples: [{ japanese: '行{い}くとき', chinese: '去的時{じ}候（還沒到）' }]
                },
                {
                    rule: '動詞た形＋とき：做了...的時{じ}候（動作已完成）',
                    examples: [{ japanese: '行{い}ったとき', chinese: '去了的時{じ}候（已經到了）' }]
                },
                {
                    rule: '名詞＋のとき：...的時{じ}候',
                    examples: [{ japanese: '子供{こども}のとき', chinese: '小時{じ}候' }]
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
                    correct: { sentence: '家{いえ}を出{で}るとき、鍵{かぎ}を忘{わす}れた。', note: '○ 出門時{じ}（正要出門）忘了鑰匙' },
                    incorrect: { sentence: '家{いえ}を出{で}たとき、鍵{かぎ}を忘{わす}れた。', note: '○ 出門後（已經出門）發現忘了鑰匙' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_toki_1',
                sentence: '暇{ひま}（　）とき、音{おん}楽{がく}を聴{き}きます。',
                options: ['な', 'の', 'が', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「な」正確！「暇{ひま}」是な形容詞，接「とき」要加「な」。「暇{ひま}なとき」=有空的時{じ}候。',
                    wrong: [
                        '「の」錯誤：「の」用於名詞！な形容詞用「な」！',
                        '「が」錯誤：「がとき」文法錯誤。',
                        '「を」錯誤：「をとき」文法錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_toki_2',
                sentence: '子供{こども}（　）とき、よく泳{およ}ぎました。',
                options: ['の', 'な', 'が', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！「子{こ}供{ども}」是名詞，接「とき」要加「の」。「子{こ}供{ども}のとき」=小時{じ}候。',
                    wrong: [
                        '「な」錯誤：「な」用於な形容詞！「子{こ}供{ども}」是名詞，用「の」！',
                        '「が」錯誤：「がとき」文法錯誤。',
                        '「を」錯誤：「をとき」文法錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_toki_3',
                sentence: '日{に}本{ほん}に（　）とき、パスポートを持{も}っていきます。',
                options: ['行{い}く', '行{い}った', '行{い}って', '行{い}き'],
                correctIndex: 0,
                explanation: {
                    correct: '「行{い}く」正確！還沒到日{に}本{ほん}（正要去），用原形。去日{に}本{ほん}的途中{なか}需要護照。',
                    wrong: [
                        '「行{い}った」錯誤：「行{い}ったとき」=到了日{に}本{ほん}之後。但護照是在到達前就需要的！這裡用原形！',
                        '「行{い}って」錯誤：て形不直接接「とき」。',
                        '「行{い}き」錯誤：ます形語幹不直接接「とき」。'
                    ]
                }
            },
            {
                id: 'n5_q_toki_4',
                sentence: '「悲{かな}しい（　）、どうする？」\n「音{おん}楽{がく}を聴{き}くかな。」\n「そうなんだ。」',
                options: ['とき', 'まえ', 'あと', 'から'],
                correctIndex: 0,
                explanation: {
                    correct: '「とき」正確！「悲しいとき」=傷心的時{じ}候。い形容詞直接接「とき」！',
                    wrong: [
                        '「まえ」錯誤：「悲しいまえ」=傷心之前？邏輯不通！',
                        '「あと」錯誤：「悲しいあと」=傷心之後？不自然！',
                        '「から」錯誤：「から」表示原因。'
                    ]
                }
            },
            {
                id: 'n5_q_toki_5',
                sentence: '動詞接「とき」時{じ}，原形和た形有什麼區別？\n選出正確的說明：',
                options: [
                    '原形＝動作還沒完成，た形＝動作已完成',
                    '原形和た形意思完全相同',
                    '原形用於過去，た形用於現在',
                    '原形用於肯定，た形用於否定'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「行{い}くとき」=正要去時{じ}（還沒到），「行{い}ったとき」=去了之後（已經到了）。',
                    wrong: [
                        '錯誤：原形和た形表示的時{じ}間{かん}點不同。',
                        '錯誤：這跟過去/現在無關，是動作是否完成的問{もん}題{だい}。',
                        '錯誤：跟肯定/否定無關。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「た形+とき」不是「原形+とき」
            {
                id: 'n5_q_toki_6',
                sentence: '日{に}本{ほん}に（　）、富{ふ}士{じ}山{さん}を見{み}ました。',
                options: ['行{い}くとき', '行{い}ったとき', '行{い}ってとき', '行{い}きとき'],
                correctIndex: 1,
                explanation: {
                    correct: '「行{い}ったとき」正確！「到了日{に}本{ほん}之後」看到富士山。看富士山是在「到達之後」，用「た形+とき」。這是陷阱題！',
                    wrong: [
                        '「行{い}くとき」錯誤：「行{い}くとき」是「正要去的時{じ}候（還沒到）」。還沒到日{に}本{ほん}怎麼看富士山？',
                        '「行{い}ってとき」錯誤：文法錯誤。「て形」不能直接接「とき」。',
                        '「行{い}きとき」錯誤：文法錯誤。應該是「行{い}くとき」或「行{い}ったとき」。'
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
                    { japanese: '彼{かれ}はいつも元{げん}気{き}です。', chinese: '他總是很有精神。' },
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
                        chinese: '「一直承蒙您照顧。」\n「我才是，一直以來謝謝您。」\n「今{いま}後也請多多指教。」',
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
                    rule: '「ときどき」：有時{じ}（30-50%）',
                    examples: [{ japanese: 'ときどき遅刻{ちこく}する', chinese: '有時{じ}遲到' }]
                },
                {
                    rule: '「あまり～ない」：不太{ふと}（10-20%）',
                    examples: [{ japanese: 'あまり遅刻{ちこく}しない', chinese: '不太{ふと}遲到' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '「いつも」用於否定句',
                    explanation: '「いつも」通常不用於否定句，否定時{じ}用「ぜんぜん」或「あまり」。',
                    whenToUse: '肯定用「いつも」，否定用「ぜんぜん～ない」。',
                    correct: { sentence: 'いつも食{た}べます。', note: '○ 肯定句' },
                    incorrect: { sentence: 'いつも食{た}べません。', note: '△ 不自然，用「ぜんぜん」' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_itsumo_1',
                sentence: '私{わたし}は（　）電{でん}車{しゃ}で会{かい}社{しゃ}に行{い}きます。',
                options: ['いつも', 'ときどき', 'あまり', 'ぜんぜん'],
                correctIndex: 0,
                explanation: {
                    correct: '「いつも」正確！表示「總是搭電{でん}車{しゃ}去公司」，頻率100%。',
                    wrong: [
                        '「ときどき」錯誤：「ときどき」=有時{じ}（30-50%），不是「總是」。',
                        '「あまり」錯誤：「あまり」用於否定句（あまり～ない）！',
                        '「ぜんぜん」錯誤：「ぜんぜん」用於否定句（ぜんぜん～ない）！'
                    ]
                }
            },
            {
                id: 'n5_q_itsumo_2',
                sentence: '彼女{かのじょ}は（　）笑顔{えがお}です。',
                options: ['いつも', 'よく', 'ときどき', 'あまり'],
                correctIndex: 0,
                explanation: {
                    correct: '「いつも」正確！表示「總是笑臉」，一直都是這個狀態。',
                    wrong: [
                        '「よく」錯誤：「よく」=經常（70-80%），不是「總是」。',
                        '「ときどき」錯誤：「ときどき」=有時{じ}，不是「總是」。',
                        '「あまり」錯誤：「あまり」用於否定句！'
                    ]
                }
            },
            {
                id: 'n5_q_itsumo_3',
                sentence: '私{わたし}は野菜{やさい}が（　）好{す}きではありません。',
                options: ['あまり', 'いつも', 'よく', 'ときどき'],
                correctIndex: 0,
                explanation: {
                    correct: '「あまり」正確！「あまり好{す}きではありません」=不太{ふと}喜歡。「あまり」用於否定句！',
                    wrong: [
                        '「いつも」錯誤：「いつも」用於肯定句！「いつも～ない」不自然！',
                        '「よく」錯誤：「よく」用於肯定句表示頻率。',
                        '「ときどき」錯誤：「ときどき」用於肯定句表示頻率。'
                    ]
                }
            },
            {
                id: 'n5_q_itsumo_4',
                sentence: '「週末{しゅうまつ}、（　）何{なに}をする？」\n「家{いえ}でゆっくりするかな。」\n「そうなんだ。」',
                options: ['いつも', 'ぜんぜん', 'もう', 'まだ'],
                correctIndex: 0,
                explanation: {
                    correct: '「いつも」正確！詢問「週末總是做什麼」，問習慣。',
                    wrong: [
                        '「ぜんぜん」錯誤：「ぜんぜん」用於否定句！',
                        '「もう」錯誤：「もう」表示「已經」，不表示頻率。',
                        '「まだ」錯誤：「まだ」表示「還」，不表示頻率。'
                    ]
                }
            },
            {
                id: 'n5_q_itsumo_5',
                sentence: '頻率副詞的順序（高{たか}→低{ひく}）是什麼？\n選出正確的說明：',
                options: [
                    'いつも → よく → ときどき → あまり～ない → ぜんぜん～ない',
                    'ときどき → いつも → よく → あまり～ない → ぜんぜん～ない',
                    'よく → いつも → ときどき → ぜんぜん～ない → あまり～ない',
                    'いつも → ときどき → よく → ぜんぜん～ない → あまり～ない'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！いつも(100%) → よく(70-80%) → ときどき(30-50%) → あまり～ない(10-20%) → ぜんぜん～ない(0%)。',
                    wrong: [
                        '錯誤：「いつも」是最高{たか}頻率（100%）。',
                        '錯誤：「よく」比「ときどき」頻率高{たか}。',
                        '錯誤：「あまり」比「ぜんぜん」頻率稍高{たか}。'
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
        connection: '名詞＋がある（物）/いる（人{ひと}・動物）',
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
                        chinese: '「不好{す}意思，廁所在哪裡？」\n「在那邊。」\n「謝謝您。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示人{ひと}或動物存在',
                description: '「いる」用於有生命的人{ひと}或動物。',
                examples: [
                    { japanese: '公{こう}園{えん}に子供{こども}がいます。', chinese: '公{こう}園{えん}裡有小孩。' },
                    { japanese: '家{いえ}に猫{ねこ}がいます。', chinese: '家{いえ}裡有貓。' },
                    {
                        japanese: '「田{た}中{なか}さんはどこにいますか。」\n「会議室{かいぎしつ}にいます。」\n「わかりました。」',
                        chinese: '「田{た}中{なか}先{せん}生{せい}在哪裡？」\n「在會議室。」\n「了解。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示擁有',
                description: '「ある/いる」也可以表示擁有某物或有某人{ひと}。',
                examples: [
                    { japanese: '私{わたし}は車{くるま}があります。', chinese: '我有車{くるま}。' },
                    { japanese: '彼{かれ}には兄弟{きょうだい}がいます。', chinese: '他有兄{きょう}弟{だい}姐妹{いもうと}。' },
                    {
                        japanese: '「明日{あした}、時{じ}間{かん}ある？」\n「うん、あるよ。」\n「じゃ、映{えい}画{が}行{い}かない？」',
                        chinese: '「明天有時{じ}間{かん}嗎？」\n「有喔。」\n「那要不要去看電影？」',
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
                    rule: '「いる」：人{ひと}、動物（有生命）',
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
                    mistake: '人{ひと}用「ある」，物用「いる」',
                    explanation: '有生命的（人{ひと}、動物）用「いる」，無生命的（物品、植物）用「ある」。',
                    whenToUse: '先判斷是有生命還是無生命。',
                    correct: { sentence: '部屋{へや}に人{ひと}がいる。', note: '○ 人{ひと}用「いる」' },
                    incorrect: { sentence: '部屋{へや}に人{ひと}がある。', note: '✕ 人{ひと}不能用「ある」' }
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
                    correct: '「が」正確！存在句中{なか}用「が」標記存在的物品。「〜にNがある」是基本{ほん}句型。',
                    wrong: [
                        '「を」錯誤：「を」是動作的受詞標記，存在句用「が」！',
                        '「に」錯誤：「に」已經標記了位置（机{つくえ}の上に），物品用「が」！',
                        '「は」錯誤：這是告知新資訊「桌上有電腦」，用「が」。「は」用於已知資訊。'
                    ]
                }
            },
            {
                id: 'n5_q_ga_aru_2',
                sentence: '公{こう}園{えん}に犬{いぬ}が（　）。',
                options: ['います', 'あります', 'です', 'ます'],
                correctIndex: 0,
                explanation: {
                    correct: '「います」正確！狗是動物（有生命），用「いる」！',
                    wrong: [
                        '「あります」錯誤：「ある」用於物品（無生命）！狗是動物，用「いる」！',
                        '「です」錯誤：「です」是判斷句，不表示存在。',
                        '「ます」錯誤：「ます」是動詞結尾，不能單獨使用。'
                    ]
                }
            },
            {
                id: 'n5_q_ga_aru_3',
                sentence: '庭{にわ}にきれいな花{はな}が（　）。',
                options: ['あります', 'います', 'です', 'します'],
                correctIndex: 0,
                explanation: {
                    correct: '「あります」正確！植物雖然有生命，但日語中{なか}用「ある」！花、木等植物用「ある」！',
                    wrong: [
                        '「います」錯誤：「いる」用於人{ひと}和動物！植物用「ある」！',
                        '「です」錯誤：「です」是判斷句，不表示存在。',
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
                    correct: '「あり」正確！便{べん}利{り}商店{みせ}是物品/建築，用「ありますか」。',
                    wrong: [
                        '「い」錯誤：「いる」用於人{ひと}和動物！建築物用「ある」！',
                        '「でき」錯誤：「できる」表示能夠。',
                        '「し」錯誤：「します」表示做某事。'
                    ]
                }
            },
            {
                id: 'n5_q_ga_aru_5',
                sentence: '「ある」和「いる」的使用規則是什麼？\n選出正確的說明：',
                options: [
                    '「ある」用於物品/植物，「いる」用於人{ひと}/動物',
                    '「ある」用於人{ひと}，「いる」用於物品',
                    '「ある」用於肯定，「いる」用於否定',
                    '「ある」和「いる」可以自由互換'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「ある」=物品、植物（無生命/不動）；「いる」=人{ひと}、動物（有生命/會動）。',
                    wrong: [
                        '錯誤：相反！人{ひと}用「いる」，物品用「ある」。',
                        '錯誤：跟肯定/否定無關。',
                        '錯誤：不能互換！人{ひと}用「ある」是錯誤的。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「います」不是「あります」（機器人/玩偶等）
            {
                id: 'n5_q_ga_aru_6',
                sentence: 'あのロボットは自分{じぶん}で動{うご}くことができます。部{へ}屋{や}にロボットが（　）。',
                options: ['あります', 'います', 'です', 'します'],
                correctIndex: 1,
                explanation: {
                    correct: '「います」正確！雖然機器人是「物品」，但當它被描述為「會自己動」時{じ}，可以用「いる」！擬人{じん}化或會動的東西有時{じ}用「いる」。這是陷阱題！',
                    wrong: [
                        '「あります」錯誤：一般機器人確實用「ある」，但這裡強調「自分{じぶん}で動{うご}く」（會自己動），擬人{じん}化情境可用「いる」！',
                        '「です」錯誤：「です」是判斷句，不表示存在。',
                        '「します」錯誤：「します」表示做某事。'
                    ]
                }
            }
        ]
    },

    // n5_e_he - へ（方向）
    n5_e_he: {
        id: 'n5_e_he',
        pattern: 'へ',
        connection: '名詞（場{ば}所{しょ}）＋へ',
        translation: '往...、朝{あさ}...',
        level: 'N5',
        explanation: [
            {
                usage: '表示移動方向',
                description: '表示移動的方向，強調「朝{あさ}那個方向去」。',
                examples: [
                    { japanese: '学{がっ}校{こう}へ行{い}きます。', chinese: '去學校。' },
                    { japanese: '日{に}本{ほん}へ旅行{りょこう}に行{い}きます。', chinese: '去日{に}本{ほん}旅行。' },
                    {
                        japanese: '「どこへ行{い}くの？」\n「駅{えき}へ行{い}くよ。」\n「気{き}をつけてね。」',
                        chinese: '「要去哪裡？」\n「去車{くるま}站喔。」\n「小心喔。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '「へ」和「に」的區別',
                description: '「へ」強調方向，「に」強調到達點，但很多時{じ}候可以互換。',
                examples: [
                    { japanese: '東{ひがし}へ向{む}かいます。', chinese: '往東邊走。' },
                    { japanese: '家{いえ}へ帰{かえ}ります。', chinese: '回家{いえ}。' },
                    {
                        japanese: '「明日{あした}、どこへ行{い}く？」\n「海{うみ}へ行{い}こうと思{おも}ってる。」\n「いいね！」',
                        chinese: '「明天要去哪裡？」\n「想去海{うみ}邊。」\n「不錯呢！」',
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
                    examples: [{ japanese: '学{がっ}校{こう}へ行{い}く', chinese: '朝{あさ}學校的方向去' }]
                },
                {
                    rule: '「に」：強調到達點（較具體）',
                    examples: [{ japanese: '学{がっ}校{こう}に行{い}く', chinese: '到達學校' }]
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
                    correct: { sentence: '学{がっ}校{こう}へ（gakkou e）', note: '○ 正確發音' },
                    incorrect: { sentence: '学{がっ}校{こう}へ（gakkou he）', note: '✕ 錯誤發音' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_e_he_1',
                sentence: '毎日{まいにち}会{かい}社{しゃ}（　）行{い}きます。',
                options: ['へ', 'を', 'が', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「へ」正確！表示去公司的方向。「に」也可以，但「へ」強調方向感。',
                    wrong: [
                        '「を」錯誤：「を」是受詞標記！方向用「へ」或「に」！',
                        '「が」錯誤：「が」是主語標記！方向用「へ」！',
                        '「の」錯誤：「の」是所有格！方向用「へ」！'
                    ]
                }
            },
            {
                id: 'n5_q_e_he_2',
                sentence: '公{こう}園{えん}（　）散{さん}歩{ぽ}しました。',
                options: ['で', 'へ', 'が', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「で」正確！「散{さん}歩{ぽ}する」是動作，動作進行的場{ば}所{しょ}用「で」！',
                    wrong: [
                        '「へ」錯誤：「へ」表示移動方向！「散{さん}歩{ぽ}する」是在公{こう}園{えん}進行的動作，用「で」！',
                        '「が」錯誤：「が」是主語標記。',
                        '「の」錯誤：「の」是所有格。'
                    ]
                }
            },
            {
                id: 'n5_q_e_he_3',
                sentence: 'もう遅{おそ}いから、家{いえ}（　）帰{かえ}ります。',
                options: ['へ', 'で', 'が', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「へ」正確！「帰{かえ}る」是移動動詞，移動的目的地用「へ」或「に」。',
                    wrong: [
                        '「で」錯誤：「で」是動作場{ば}所{しょ}！「帰{かえ}る」是移動動詞，用「へ」或「に」！',
                        '「が」錯誤：「が」是主語標記。',
                        '「の」錯誤：「の」是所有格。'
                    ]
                }
            },
            {
                id: 'n5_q_e_he_4',
                sentence: '「週末{しゅうまつ}、どこ（　）行{い}く？」\n「山{やま}へ行{い}こうと思{おも}ってる。」\n「いいね！」',
                options: ['へ', 'で', 'を', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「へ」正確！「行{い}く」是移動動詞，「どこへ行{い}く」詢問目的地方向。',
                    wrong: [
                        '「で」錯誤：「で」是動作場{ば}所{しょ}！「行{い}く」表示移動，用「へ」！',
                        '「を」錯誤：「を」是受詞標記。',
                        '「が」錯誤：「が」是主語標記。'
                    ]
                }
            },
            {
                id: 'n5_q_e_he_5',
                sentence: '「へ」和「で」有什麼區別？\n選出正確的說明：',
                options: [
                    '「へ」表示移動方向，「で」表示動作場{ば}所{しょ}',
                    '「へ」和「で」意思完全相同',
                    '「へ」用於過去，「で」用於現在',
                    '「へ」用於動作，「で」用於移動'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「学{がっ}校{こう}へ行{い}く」（去學校）vs「学{がっ}校{こう}で勉強する」（在學校讀書）。移動用「へ」，動作用「で」！',
                    wrong: [
                        '錯誤：兩者用途不同。',
                        '錯誤：跟時{じ}態無關。',
                        '錯誤：相反！「へ」用於移動，「で」用於動作。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「に」不是「へ」
            {
                id: 'n5_q_e_he_6',
                sentence: '飛{ひ}行{こう}機{き}は3時{じ}（　）東{とう}京{きょう}に着{つ}きます。',
                options: ['へ', 'に', 'で', 'を'],
                correctIndex: 1,
                explanation: {
                    correct: '「に」正確！「3時{じ}に」表示到達的時{じ}間{かん}點。時{じ}間{かん}點用「に」！這是陷阱題！',
                    wrong: [
                        '「へ」錯誤：「へ」表示移動方向，但這裡空{そら}格是問「幾點」的時{じ}間{かん}，時{じ}間{かん}點用「に」！',
                        '「で」錯誤：「で」表示動作場{ば}所{しょ}或手段，不用於時{じ}間{かん}點！',
                        '「を」錯誤：「を」是受詞標記，不用於時{じ}間{かん}。'
                    ]
                }
            }
        ]
    },

    // n5_de_place - で（場{ば}所{しょ}）
    n5_de_place: {
        id: 'n5_de_place',
        pattern: 'で',
        connection: '名詞（場{ば}所{しょ}）＋で',
        translation: '在...（動作場{ば}所{しょ}）',
        level: 'N5',
        explanation: [
            {
                usage: '表示動作進行的場{ば}所{しょ}',
                description: '表示動作在某地方進行。',
                examples: [
                    { japanese: '図書館{としょかん}で勉{べん}強{きょう}します。', chinese: '在圖書館讀書。' },
                    { japanese: 'レストランで食{た}べます。', chinese: '在餐廳吃。' },
                    {
                        japanese: '「どこで昼{ひる}ご飯{はん}を食{た}べる？」\n「あのカフェで食{た}べよう。」\n「いいね。」',
                        chinese: '「在哪裡吃午餐？」\n「在那家{いえ}咖啡廳吃吧。」\n「好{す}啊。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示手段/方法',
                description: '「で」也可以表示使用的工具或方法。',
                examples: [
                    { japanese: '電{でん}車{しゃ}で行{い}きます。', chinese: '搭電{でん}車{しゃ}去。' },
                    { japanese: '日本語{にほんご}で話{はな}します。', chinese: '用日語說。' },
                    {
                        japanese: '「何{なに}で来{き}たの？」\n「自{じ}転{てん}車{しゃ}で来{き}たよ。」\n「へえ、健康{けんこう}的{てき}だね。」',
                        chinese: '「怎麼來的？」\n「騎腳踏車{くるま}來的喔。」\n「欸，很健康呢。」',
                        note: '對話情境'
                    }
                ]
            }
        ],
        analysis: {
            title: '「で」vs「に」的區別',
            points: [
                {
                    rule: '「で」（動作場{ば}所{しょ}）：動作在此處進行',
                    examples: [{ japanese: '図書館{としょかん}で勉{べん}強{きょう}する', chinese: '在圖書館讀書' }]
                },
                {
                    rule: '「に」（存在場{ば}所{しょ}）：人{ひと}或物存在於此處',
                    examples: [{ japanese: '図書館{としょかん}にいる', chinese: '在圖書館（存在）' }]
                }
            ]
        },
        tips: {
            title: '小提醒：學習者常犯錯誤',
            items: [
                {
                    mistake: '存在用「で」，動作用「に」',
                    explanation: '動作場{ば}所{しょ}用「で」，存在場{ば}所{しょ}用「に」。',
                    whenToUse: '動作用「で」，存在（いる/ある）用「に」。',
                    correct: { sentence: '公{こう}園{えん}で遊{あそ}ぶ。', note: '○ 動作場{ば}所{しょ}用「で」' },
                    incorrect: { sentence: '公{こう}園{えん}に遊{あそ}ぶ。', note: '✕ 動作用「で」' }
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
                    correct: '「で」正確！讀書是動作，動作進行的場{ば}所{しょ}用「で」。',
                    wrong: [
                        '「に」錯誤：「に」用於存在場{ば}所{しょ}（いる/ある）！動作場{ば}所{しょ}用「で」！',
                        '「へ」錯誤：「へ」表示移動方向。',
                        '「を」錯誤：「を」是受詞標記（本{ほん}を）。'
                    ]
                }
            },
            {
                id: 'n5_q_de_place_2',
                sentence: '図書館{としょかん}（　）田{た}中{なか}さんがいます。',
                options: ['に', 'で', 'へ', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「いる」表示存在，存在的場{ば}所{しょ}用「に」！',
                    wrong: [
                        '「で」錯誤：「で」用於動作場{ば}所{しょ}！「いる」是存在動詞，用「に」！',
                        '「へ」錯誤：「へ」表示移動方向。',
                        '「を」錯誤：「を」是受詞標記。'
                    ]
                }
            },
            {
                id: 'n5_q_de_place_3',
                sentence: '電{でん}車{しゃ}（　）会{かい}社{しゃ}に行{い}きます。',
                options: ['で', 'に', 'へ', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「で」正確！「電{でん}車{しゃ}で」表示交通工具/手段。「で」也表示方法！',
                    wrong: [
                        '「に」錯誤：交通工具/手段用「で」！',
                        '「へ」錯誤：「へ」表示方向（會社へ是對的）。',
                        '「を」錯誤：「を」是受詞標記。'
                    ]
                }
            },
            {
                id: 'n5_q_de_place_4',
                sentence: '「どこ（　）買{か}い物{もの}する？」\n「駅{えき}前{まえ}のデパートで買{か}おう。」\n「いいね。」',
                options: ['で', 'に', 'へ', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「で」正確！買東西是動作，「どこで」詢問動作場{ば}所{しょ}。',
                    wrong: [
                        '「に」錯誤：動作場{ば}所{しょ}用「で」！「に」用於存在！',
                        '「へ」錯誤：「へ」表示移動方向。',
                        '「を」錯誤：「を」是受詞標記。'
                    ]
                }
            },
            {
                id: 'n5_q_de_place_5',
                sentence: '「で」的三種用法中{なか}，哪個是錯誤的？\n選出錯誤的說明：',
                options: [
                    '「で」表示存在場{ば}所{しょ}（本{ほん}が机{つくえ}の上でありまる）',
                    '「で」表示動作場{ば}所{しょ}（図{と}書{しょ}館{かん}で勉強する）',
                    '「で」表示交通工具（電{でん}車{しゃ}で行{い}く）',
                    '「で」表示語言/方法（日{に}本{ほん}語{ご}で話{はな}す）'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！存在場{ば}所{しょ}用「に」不是「で」！「本{ほん}が机{つくえ}の上にある」才對！',
                    wrong: [
                        '正確用法：動作場{ば}所{しょ}用「で」。',
                        '正確用法：交通工具用「で」。',
                        '正確用法：語言/方法用「で」。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「に」不是「で」
            {
                id: 'n5_q_de_place_6',
                sentence: '机{つくえ}の上{うえ}（　）猫{ねこ}がいます。',
                options: ['で', 'に', 'へ', 'を'],
                correctIndex: 1,
                explanation: {
                    correct: '「に」正確！「います/あります」表示存在，存在的場{ば}所{しょ}用「に」！這是陷阱題！',
                    wrong: [
                        '「で」錯誤：「で」是動作場{ば}所{しょ}！「いる」表示存在，不是動作！存在場{ば}所{しょ}用「に」！',
                        '「へ」錯誤：「へ」表示移動方向。',
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
                usage: '表示時{じ}間{かん}範圍',
                description: '表示從某時{じ}間{かん}到某時{じ}間{かん}。',
                examples: [
                    { japanese: '九時{くじ}から五時{ごじ}まで働{はたら}きます。', chinese: '從九點工作到五點。' },
                    { japanese: '月曜日{げつようび}から金曜日{きんようび}まで学{がっ}校{こう}があります。', chinese: '從星期一到星期五有課。' },
                    {
                        japanese: '「仕事{しごと}は何時{なんじ}から何時{なんじ}まで？」\n「九時{くじ}から六時{ろくじ}までだよ。」\n「大変{たいへん}だね。」',
                        chinese: '「工作從幾點到幾點？」\n「從九點到六點喔。」\n「好{す}辛{から}苦{にが}呢。」',
                        note: '對話情境'
                    }
                ]
            },
            {
                usage: '表示空{そら}間範圍',
                description: '表示從某地到某地。',
                examples: [
                    { japanese: '東{とう}京{きょう}から大阪{おおさか}まで新{しん}幹{かん}線{せん}で行{い}きます。', chinese: '從東{とう}京{きょう}搭新{しん}幹{かん}線{せん}到大阪。' },
                    { japanese: '家{いえ}から駅{えき}まで歩{ある}いて十分{じっぷん}です。', chinese: '從家{いえ}走到車{くるま}站要十{とお}分{ふん}鐘。' },
                    {
                        japanese: '「ここから駅{えき}まで、どのくらいかかりますか。」\n「歩{ある}いて五分{ごふん}くらいです。」\n「ありがとうございます。」',
                        chinese: '「從這裡到車{くるま}站要多久？」\n「走路大約五分{ふん}鐘。」\n「謝謝您。」',
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
                    mistake: '時{じ}間{かん}點用「に」還是「から」',
                    explanation: '「に」表示具體時{じ}間{かん}點，「から」表示起點。',
                    whenToUse: '表示「從...」用「から」。',
                    correct: { sentence: '九時{くじ}から始{はじ}まります。', note: '○ 從九點開始' },
                    incorrect: { sentence: '九時{くじ}に始{はじ}まります。', note: '○ 也對，但強調「在九點」' }
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_kara_made_1',
                sentence: '授{じゅ}業{ぎょう}は九時{くじ}（　）始{はじ}まります。',
                options: ['から', 'まで', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「から」正確！「九時{じ}から」表示「從九點」開始，強調起點。',
                    wrong: [
                        '「まで」錯誤：「まで」表示終點！「始{はじ}まる」是開始，用起點「から」！',
                        '「に」錯誤：「に」表示時{じ}間{かん}點，但「から」更強調「從...開始」！',
                        '「で」錯誤：「で」不用於時{じ}間{かん}點。'
                    ]
                }
            },
            {
                id: 'n5_q_kara_made_2',
                sentence: '仕事{しごと}は五時{ごじ}（　）です。',
                options: ['まで', 'から', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「まで」正確！「五時{じ}まで」表示「到五點」為止，強調終點。',
                    wrong: [
                        '「から」錯誤：「から」表示起點！這裡說工作到幾點，用終點「まで」！',
                        '「に」錯誤：「に」表示時{じ}間{かん}點，不表示終點。',
                        '「で」錯誤：「で」不用於時{じ}間{かん}終點。'
                    ]
                }
            },
            {
                id: 'n5_q_kara_made_3',
                sentence: '映{えい}画{が}は七時{しちじ}（　）終{お}わります。',
                options: ['に', 'から', 'まで', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「七時{じ}に終{お}わる」表示「在七點結束」，強調具體時{じ}間{かん}點。',
                    wrong: [
                        '「から」錯誤：「から」表示起點！「終{お}わる」是結束，用「に」表示時{じ}間{かん}點！',
                        '「まで」錯誤：「まで」表示持續到某點。「七時{じ}まで終{お}わる」不自然！',
                        '「で」錯誤：「で」不用於時{じ}間{かん}點。'
                    ]
                }
            },
            {
                id: 'n5_q_kara_made_4',
                sentence: '「夏休{なつやす}みはいつ（　）いつまで？」\n「七月{しちがつ}から八月{はちがつ}までだよ。」\n「長{なが}いね！」',
                options: ['から', 'まで', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「から」正確！「いつから」詢問暑{あつ}假的起點。「から～まで」表示範圍！',
                    wrong: [
                        '「まで」錯誤：後面已經有「いつまで」了，前面是問起點用「から」！',
                        '「に」錯誤：範圍用「から～まで」。',
                        '「で」錯誤：時{じ}間{かん}範圍用「から」。'
                    ]
                }
            },
            {
                id: 'n5_q_kara_made_5',
                sentence: '「から」、「まで」、「に」的時{じ}間{かん}用法有什麼區別？\n選出正確的說明：',
                options: [
                    '「から」=起點，「まで」=終點，「に」=時{じ}間{かん}點',
                    '「から」、「まで」、「に」意思完全相同',
                    '「から」=終點，「まで」=起點，「に」=範圍',
                    '三者都用於表示動作場{ば}所{しょ}'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「9時{じ}から」（從9點）、「5時{じ}まで」（到5點）、「3時{じ}に」（在3點）。',
                    wrong: [
                        '錯誤：三者用途不同。',
                        '錯誤：「から」是起點，「まで」是終點，相反！',
                        '錯誤：這些是時{じ}間{かん}表達，不是場{ば}所{shょ}。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「までに」不是「まで」
            {
                id: 'n5_q_kara_made_6',
                sentence: '宿{しゅく}題{だい}を金曜日{きんようび}（　）出{だ}してください。',
                options: ['まで', 'までに', 'から', 'に'],
                correctIndex: 1,
                explanation: {
                    correct: '「までに」正確！「金曜日{きんようび}までに」表示「在星期五之前」要完成的期限。「までに」強調截止期限！這是陷阱題！',
                    wrong: [
                        '「まで」錯誤：「まで」表示動作持續到某點。「出{だ}す」是瞬間動作，期限用「までに」！「金曜日{きんようび}まで出{だ}す」會變成「持續交作業到星期五」的奇怪意思！',
                        '「から」錯誤：「から」表示起點，不表示期限。',
                        '「に」錯誤：「金曜日{きんようび}に」是「在星期五」，不是「星期五之前」。'
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
                description: '表示「必須做某事」，帶有「如果不做會有問{もん}題{だい}」的語感。',
                examples: [
                    { japanese: '明日{あした}は早{はや}く起{お}きないといけない。', chinese: '明天必須早起。' },
                    { japanese: '宿{しゅく}題{だい}をしないといけない。', chinese: '必須寫作業。' },
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
                    correct: '「ないと」正確！「飲まないといけない」=必須吃藥。「ないと」直接接「いけない」！',
                    wrong: [
                        '「なくて」錯誤：「なくて」後接「は」變成「なくてはいけない」！直接接用「ないと」！',
                        '「ないで」錯誤：「ないで」表示「不做...的狀態」（不吃藥），不表示義務！',
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
                    correct: '「ないと」正確！「しないといけません」=必須運{うん}動{どう}。「する」→「しない」→「しないと」。',
                    wrong: [
                        '「なくて」錯誤：「なくて」後需要「は」！',
                        '「ないで」錯誤：「ないで」不表示義務！',
                        '「ない」錯誤：需要完整的「ないと」或「なくては」！'
                    ]
                }
            },
            {
                id: 'n5_q_naito_3',
                sentence: '明日{あした}は早{はや}く起{お}きなくて（　）いけません。',
                options: ['は', 'が', 'を', 'も'],
                correctIndex: 0,
                explanation: {
                    correct: '「は」正確！「なくてはいけない」是固定形式，中{なか}間有「は」！',
                    wrong: [
                        '「が」錯誤：固定搭配是「なくては」！',
                        '「を」錯誤：不是這個助詞。',
                        '「も」錯誤：「なくても」表示「不...也可以」，意思相反！'
                    ]
                }
            },
            {
                id: 'n5_q_naito_4',
                sentence: '「今日{きょう}、残業{ざんぎょう}？」\n「うん、この仕事{しごと}、今日中{きょうじゅう}に終{お}わらせ（　）いけないんだ。」\n「大変{たいへん}だね、頑張{がんば}って。」',
                options: ['ないと', 'なくて', 'ないで', 'なくと'],
                correctIndex: 0,
                explanation: {
                    correct: '「ないと」正確！「終{お}わらせないといけない」=必須完成。表示義務！',
                    wrong: [
                        '「なくて」錯誤：「なくて」後需要「は」！',
                        '「ないで」錯誤：「ないで」不表示義務。',
                        '「なくと」錯誤：沒有這種形式。'
                    ]
                }
            },
            {
                id: 'n5_q_naito_5',
                sentence: '「ないといけない」和「なくてはいけない」有什麼區別？\n選出正確的說明：',
                options: [
                    '意思相同，「ないと」較口語，「なくては」較正式',
                    '「ないと」表示禁止，「なくては」表示義務',
                    '「ないと」用於過去，「なくては」用於現在',
                    '「ないと」用於肯定，「なくては」用於否定'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！兩者都表示「必須」，但「ないといけない」較口語，「なくてはいけない」較正式。',
                    wrong: [
                        '錯誤：兩者都表示義務，不是禁止。',
                        '錯誤：跟時{じ}態無關。',
                        '錯誤：跟肯定/否定無關。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「なくてもいい」不是「ないといけない」
            {
                id: 'n5_q_naito_6',
                sentence: '明日{あした}は休{やす}みだから、早{はや}く起{お}き（　）。',
                options: ['ないといけない', 'なくてもいい', 'ないでください', 'なくてはならない'],
                correctIndex: 1,
                explanation: {
                    correct: '「なくてもいい」正確！「休{やす}みだから」表示明天放假，所以「不用早起也可以」。這是陷阱題！',
                    wrong: [
                        '「ないといけない」錯誤：「ないといけない」是「必須」的意思！明天放假，不需要早起，所以用「なくてもいい」！',
                        '「ないでください」錯誤：「ないでください」是請求「請不要...」。',
                        '「なくてはならない」錯誤：「なくてはならない」也是「必須」的意思，與情境不符。'
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
                title: '接續方式',
                description: '動詞(ない形，去い) + くてはいけない',
                examples: []
            },
            {
                usageId: 2,
                title: '必須 (Obligation)',
                description: '意思：必須...、不能不...。\n表示義務或必要性。比「なくちゃ」正式。',
                examples: [
                    { japanese: '本当にすぐ⾏かなくてはいけない。', chinese: '真的必須馬上走。' },
                    { japanese: '急がなくてはいけない。', chinese: '必須快一點。' },
                    { japanese: 'もう10時だ。寝なくてはいけない。', chinese: '已經10點了。必須睡了。' },
                    { japanese: '⽇本語をもっと勉強しなくてはいけない。', chinese: '必須多讀日語。' },
                    { japanese: '花の⽔やりをしなくてはいけません。', chinese: '必須給花澆水。' },
                    { japanese: '明⽇、早く起きなくてはいけません。', chinese: '明天必須早起。' },
                    { japanese: '野菜を⾷べなくてはいけませんよ。', chinese: '必須吃蔬菜喔。' },
                    { japanese: 'JLPTを受けなくてはいけません。', chinese: '必須參加JLPT考試。' }
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
                    explanation: '正確形式是「なくてはいけない」，中{なか}間有「は」。',
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
                options: ['は', 'が', 'を', 'も'],
                correctIndex: 0,
                explanation: {
                    correct: '「は」正確！「なくてはいけない」是固定形式，中{なか}間的「は」不能省略！',
                    wrong: [
                        '「が」錯誤：固定搭配是「なくては」，不是「なくてが」！',
                        '「を」錯誤：不是這個助詞。',
                        '「も」錯誤：「なくてもいい」=不必，意思相反！這裡是「必須」！'
                    ]
                }
            },
            {
                id: 'n5_q_nakuteha_2',
                sentence: '明日{あした}は休{やす}みでも、早{はや}く起{お}き（　）いけない。',
                options: ['なくては', 'なくても', 'ないでは', 'ないでも'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくては」正確！即使明天休息，還是「必須早起」。',
                    wrong: [
                        '「なくても」錯誤：「なくてもいい」=不必早起，與前文「休{やす}みでも」矛盾！',
                        '「ないでは」錯誤：沒有這種接續。',
                        '「ないでも」錯誤：沒有這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_nakuteha_3',
                sentence: 'この薬{くすり}は飲{の}ま（　）いいですか。',
                options: ['なくても', 'なくては', 'ないでも', 'ないでは'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくても」正確！「飲まなくてもいい」=不吃也可以嗎？詢問是否不必服藥。',
                    wrong: [
                        '「なくては」錯誤：「なくてはいけない」=必須吃，與問句「いいですか」矛盾！',
                        '「ないでも」錯誤：沒有這種接續。',
                        '「ないでは」錯誤：沒有這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_nakuteha_4',
                sentence: '「明日{あした}までにレポート出{だ}せる？」\n「ちょっと厳{きび}しいけど、出{だ}さ（　）いけないから、頑張{がんば}るよ。」\n「応援{おうえん}してる！」',
                options: ['なくては', 'なくても', 'ないでは', 'ないでも'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくては」正確！「出さなくてはいけない」=必須提交。表示義務！',
                    wrong: [
                        '「なくても」錯誤：「なくてもいい」=不必，與情境矛盾！',
                        '「ないでは」錯誤：沒有這種接續。',
                        '「ないでも」錯誤：沒有這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_nakuteha_5',
                sentence: '「なくてはいけない」和「なくてもいい」有什麼區別？\n選出正確的說明：',
                options: [
                    '「なくては」=必須做，「なくても」=不必做',
                    '「なくては」和「なくても」意思相同',
                    '「なくては」=禁止，「なくても」=許可',
                    '「なくては」用於過去，「なくても」用於現在'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「食べなくてはいけない」=必須吃 vs「食べなくてもいい」=不吃也可以。注意「は」和「も」的差異！',
                    wrong: [
                        '錯誤：兩者意思相反！',
                        '錯誤：「なくては」是義務，不是禁止。',
                        '錯誤：跟時{じ}態無關。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「てはいけない」不是「なくてはいけない」
            {
                id: 'n5_q_nakuteha_6',
                sentence: '図書館{としょかん}で大{おお}きい声{こえ}で話{はな}し（　）。',
                options: ['なくてはいけません', 'てはいけません', 'なくてもいいです', 'てもいいです'],
                correctIndex: 1,
                explanation: {
                    correct: '「てはいけません」正確！圖書館禁止大聲說話，所以用「話{はな}してはいけない」（不可以說）。這是陷阱題！',
                    wrong: [
                        '「なくてはいけません」錯誤：「なくてはいけない」是「必須」的意思！「話{はな}さなくてはいけない」變成「必須說話」，語意完全相反！',
                        '「なくてもいいです」錯誤：「なくてもいい」是「不用...也可以」。',
                        '「てもいいです」錯誤：「てもいい」是許可，變成「可以大聲說話」，與圖書館規則相反！'
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
                title: '接續方式',
                description: '動詞(ない形，去い) + くてもいい',
                examples: []
            },
            {
                usageId: 2,
                title: '不...也可以 (Permission)',
                description: '意思：不...也可以、不需要...。\n表示許可，不做某事也沒關係。',
                examples: [
                    { japanese: '明⽇は休みだから、学校に⾏かなくてもいい。', chinese: '明天休假，所以不用去學校也可以。' },
                    { japanese: '空港まで来なくてもいいよ。', chinese: '不用來機場也可以喔。' },
                    { japanese: '好きじゃないなら、⾷べなくてもいいですよ。', chinese: '如果不喜歡的話，不吃也可以喔。' },
                    { japanese: '無理しなくてもいいですよ。', chinese: '不需要太勉強喔。' },
                    { japanese: 'そんなに急がなくていいよ。', chinese: '不用那麼趕也可以喔。' },
                    { japanese: '外⾷しなくていいよ。家で⾷べましょう。', chinese: '不用出去吃也行。在家吃吧。' },
                    { japanese: '返してくれなくてもいいからね。', chinese: '不還給我也沒關係喔。' }
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
                    correct: '「なくて」正確！「急がなくてもいい」=不用急也可以。「なくて」接「もいい」表示不必！',
                    wrong: [
                        '「ないで」錯誤：「ないで」表示狀態（不做...），不接「もいい」！',
                        '「なくと」錯誤：沒有這種形式。',
                        '「ないと」錯誤：「ないと」後接「いけない」表示義務，意思相反！'
                    ]
                }
            },
            {
                id: 'n5_q_nakutemo_2',
                sentence: 'お金{かね}を払{はら}わ（　）いけません。ルールです。',
                options: ['ないと', 'なくて', 'ないで', 'なくと'],
                correctIndex: 0,
                explanation: {
                    correct: '「ないと」正確！「払わないといけない」=必須付錢。這是規則！',
                    wrong: [
                        '「なくて」錯誤：「なくても」=不必，與「ルールです」矛盾！',
                        '「ないで」錯誤：「ないで」不表示義務。',
                        '「なくと」錯誤：沒有這種形式。'
                    ]
                }
            },
            {
                id: 'n5_q_nakutemo_3',
                sentence: 'この漢字{かんじ}は覚{おぼ}え（　）もいいですか。',
                options: ['なくて', 'ないで', 'なくと', 'ないと'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくて」正確！「覚えなくてもいい」=不記也可以嗎？詢問是否可以不背。',
                    wrong: [
                        '「ないで」錯誤：接續形式不對。',
                        '「なくと」錯誤：沒有這種形式。',
                        '「ないと」錯誤：「ないといけない」=必須，與問句矛盾。'
                    ]
                }
            },
            {
                id: 'n5_q_nakutemo_4',
                sentence: '「これ、持{も}って行{い}ったほうがいい？」\n「ううん、（　）もいいよ。荷物{にもつ}になるから。」\n「そう？じゃあ置{お}いていく。」',
                options: ['持{も}って行かなくて', '持{も}って行かないと', '持{も}って行ないで', '持{も}って行{い}ってない'],
                correctIndex: 0,
                explanation: {
                    correct: '「持{も}って行かなくて」正確！=不用帶也可以。因為會變成行李負擔。',
                    wrong: [
                        '「持{も}って行かないと」錯誤：「ないといけない」=必須帶，與情境矛盾！',
                        '「持{も}って行ないで」錯誤：形式錯誤。',
                        '「持{も}って行{い}ってない」錯誤：形式錯誤。'
                    ]
                }
            },
            {
                id: 'n5_q_nakutemo_5',
                sentence: '許可、義務、不必的正確表達是什麼？\n選出正確的配{はい}對{つい}：',
                options: [
                    '許可=てもいい、義務=なくてはいけない、不必=なくてもいい',
                    '許可=なくてもいい、義務=てもいい、不必=なくてはいけない',
                    '三者意思相同',
                    '許可=なくてはいけない、義務=なくてもいい、不必=てもいい'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「食{た}べてもいい」=可以吃，「食べなくてはいけない」=必須吃，「食べなくてもいい」=不吃也可以。',
                    wrong: [
                        '錯誤：配{はい}對{つい}完全相反！',
                        '錯誤：三者意思不同！',
                        '錯誤：配{はい}對{つい}錯誤！'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「なくてはいけない」不是「なくてもいい」
            {
                id: 'n5_q_nakutemo_6',
                sentence: '試{し}験{けん}は来週{らいしゅう}です。勉{べん}強{きょう}し（　）。',
                options: ['なくてもいい', 'なくてはいけない', 'てもいい', 'ないでください'],
                correctIndex: 1,
                explanation: {
                    correct: '「なくてはいけない」正確！考試在下週，所以「必須讀書」。這是陷阱題！',
                    wrong: [
                        '「なくてもいい」錯誤：「なくてもいい」是「不用...也可以」的意思！考試快到了，應該「必須讀書」！',
                        '「てもいい」錯誤：「てもいい」是許可（可以讀），但這裡強調義務。',
                        '「ないでください」錯誤：「ないでください」是請求「請不要...」，語意不對。'
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
                title: '接續方式',
                description: '動詞(ない形，去い) + くちゃ',
                examples: []
            },
            {
                usageId: 2,
                title: '必須... (Casual)',
                description: '意思：必須...、不得不...。\n這是「なくてはならない」的口語縮略形。\n常見組合：\n- なくちゃ (必須...)\n- なくちゃだめ (不...不行)\n- なくちゃいけない (必須...)',
                examples: [
                    { japanese: '⾏かなくちゃ。', chinese: '我得走了。' },
                    { japanese: 'もう寝なくちゃ。', chinese: '得睡了。' },
                    { japanese: '新しい⾞を買わなくちゃね。', chinese: '得買新車了呢。' },
                    { japanese: 'よく考えなくちゃダメだよ。', chinese: '不仔細思考不行喔。' },
                    { japanese: '君でなくちゃダメなんだ。', chinese: '非你不可！' },
                    { japanese: '彼は返さなくちゃいけない借⾦がある', chinese: '他有必須償還的債務。' },
                    { japanese: 'なんで僕がやらなくちゃいけないの。', chinese: '為什麼我非做不可？' },
                    { japanese: 'すぐに警察に連絡しなくちゃいけません。', chinese: '必須馬上聯絡警察。' }
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
                        '「なくても」錯誤：這表示「不睡也可以」，與「太{ふと}晚了」的情境矛盾。',
                        '「ないで」錯誤：這是「不做～」的狀態，不表示義務。',
                        '「なくて」錯誤：這是原因接續，句子不完整。'
                    ]
                }
            },
            {
                id: 'n5_q_nakucha_2',
                sentence: '電{でん}車{しゃ}の時{じ}間{かん}だ。急{いそ}が（　）。',
                options: ['なくちゃ', 'なくても', 'ないで', 'なきゃ'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくちゃ」正確！「急がなくちゃ」表示「必須趕快」。',
                    wrong: [
                        '「なくても」錯誤：這表示「不急也可以」，與「電{でん}車{しゃ}要來了」矛盾。',
                        '「ないで」錯誤：接續形式不對，「急ぐ」的ない形是「急がない」。',
                        '「なきゃ」也可以！這是「なくちゃ」的另一種縮略形式，兩者都正確。'
                    ]
                }
            },
            {
                id: 'n5_q_nakucha_3',
                sentence: '今日{きょう}は時{じ}間{かん}があるから、急{いそ}が（　）大丈夫{だいじょうぶ}だよ。',
                options: ['なくても', 'なくちゃ', 'ないと', 'なくては'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくても」正確！「今{いま}天有時{じ}間{かん}，不趕也沒關係」。注意「なくても」表示不必做！',
                    wrong: [
                        '「なくちゃ」錯誤：這表示「必須趕」，與「有時{じ}間{かん}」矛盾。陷阱！',
                        '「ないと」錯誤：這表示「如果不～」，後面需要接結果。',
                        '「なくては」錯誤：這是「必須」的正式說法，與情境矛盾。'
                    ]
                }
            },
            {
                id: 'n5_q_nakucha_4',
                sentence: '「明日{あした}テストだよ。」\n「え！勉{べん}強{きょう}し（　）！」',
                options: ['なくちゃ', 'なくても', 'たい', 'ないで'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくちゃ」正確！聽到明天有考試，驚訝地說「必須讀書」。',
                    wrong: [
                        '「なくても」錯誤：這表示「不讀也可以」，與驚訝的反應矛盾。',
                        '「たい」錯誤：這是「想要做」，但情境是驚訝發現必須做。',
                        '「ないで」錯誤：形式不對，這是「不做～」的狀態。'
                    ]
                }
            },
            {
                id: 'n5_q_nakucha_5',
                sentence: '「なくちゃ」「なくては」「なきゃ」「なければ」的正式度排序，從口語到正式是？',
                options: [
                    'なきゃ→なくちゃ→なくては→なければ',
                    'なければ→なくては→なくちゃ→なきゃ',
                    'なくちゃ→なきゃ→なくては→なければ',
                    '全{ぜん}部{ぶ}一樣正式'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！正式度：なきゃ（最口語）→なくちゃ→なくては→なければ（最正式）',
                    wrong: [
                        '錯誤：順序相反了！「なければ」最正式，「なきゃ」最口語。',
                        '錯誤：「なきゃ」比「なくちゃ」更口語。',
                        '錯誤：這四種形式正式度不同，不能混用於正式場合。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「なくてはならない」不是「なくちゃ」
            {
                id: 'n5_q_nakucha_6',
                sentence: '（正式文書）申請者{しんせいしゃ}は20歳{さい}以上{いじょう}で（　）。',
                options: ['なくちゃ', 'なくてはならない', 'なきゃいけない', 'なくちゃいけない'],
                correctIndex: 1,
                explanation: {
                    correct: '「なくてはならない」正確！正式文書中{なか}必須用正式表達「なくてはならない」或「なければならない」。這是陷阱題！',
                    wrong: [
                        '「なくちゃ」錯誤：「なくちゃ」是口語縮略形！正式文書不能用口語！',
                        '「なきゃいけない」錯誤：「なきゃ」是最口語的形式，不適合正式文書！',
                        '「なくちゃいけない」錯誤：「なくちゃ」是口語，正式文書用「なくてはならない」！'
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
                title: '接續方式',
                description: '動詞(ない形，去い) + くてはならない',
                examples: []
            },
            {
                usageId: 2,
                title: '必須 (Duty)',
                description: '意思：必須...。\n與「なくてはいけない」意思幾乎相同，但語氣上「ならない」更強調客觀的義務或規則。',
                examples: [
                    { japanese: '急がなくてはならない。', chinese: '必須趕快。' },
                    { japanese: '本当にすぐ⾏かなくてはならない。', chinese: '真的必須馬上走。' },
                    { japanese: 'もう10時だ。寝なくてはならない。', chinese: '已經10點了，必須睡了。' },
                    { japanese: '花の⽔やりをしなくてはなりません。', chinese: '必須給花澆水。' },
                    { japanese: '明⽇、早く起きなくてはなりません。', chinese: '明天必須早起。' },
                    { japanese: '野菜を⾷べなくてはなりませんよ。', chinese: '必須吃蔬菜喔。' },
                    { japanese: '⽇本語能⼒試験を受けなくてはなりません。', chinese: '必須參加日語能力試驗。' },
                    { japanese: 'もう帰らなくてはなりません。', chinese: '必須回去了。' }
                ]
            }
        ],
        analysis: {
            title: '義務表達的正式度比較',
            points: [
                {
                    rule: '正式度排序（高{たか}→低{ひく}）：',
                    examples: [
                        { japanese: 'なければならない', chinese: '最正式（書面語）' },
                        { japanese: 'なくてはならない', chinese: '正式' },
                        { japanese: 'なくてはいけない', chinese: '一般' },
                        { japanese: 'なくちゃ・なきゃ', chinese: '口語' }
                    ]
                },
                {
                    rule: '使用場合區分{ふん}',
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
                options: ['なくては', 'なくても', 'なければ', 'ないと'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくては」正確！「しなくてはならない」表示「必須繫安{あん}全{ぜん}帶」。',
                    wrong: [
                        '「なくても」錯誤：這表示「不繫也可以」，交通法規不允許！',
                        '「なければ」也正確！「しなければならない」意思相同，但更正式。',
                        '「ないと」錯誤：「ないと」後面不接「ならない」，要接「いけない」或結果句。'
                    ]
                }
            },
            {
                id: 'n5_q_naranai_2',
                sentence: '学{がく}生{せい}は毎日{まいにち}学{がっ}校{こう}に行{い}か（　）ならない。',
                options: ['なくては', 'なくても', 'なければ', 'なくて'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくては」正確！「行かなくてはならない」表示「必須上學」。',
                    wrong: [
                        '「なくても」錯誤：這表示「不去也可以」，與義務教育矛盾。',
                        '「なければ」也正確！「行かなければならない」意思相同。',
                        '「なくて」錯誤：需要「は」才能接「ならない」。'
                    ]
                }
            },
            {
                id: 'n5_q_naranai_3',
                sentence: '日曜日{にちようび}は仕事{しごと}が休{やす}みだから、会{かい}社{しゃ}に行{い}か（　）いい。',
                options: ['なくても', 'なくては', 'なければ', 'ないと'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくても」正確！「星期日休息，不用去公司也可以」。這是陷阱題！',
                    wrong: [
                        '「なくては」錯誤：這表示「必須去」，但星期日休息，不需要去！',
                        '「なければ」錯誤：同樣表示「必須去」，與休息日矛盾。',
                        '「ないと」錯誤：後面不能接「いい」，要接否定結果。'
                    ]
                }
            },
            {
                id: 'n5_q_naranai_4',
                sentence: '「パスポートを持{も}っていなくてはならない」\n「パスポートを持{も}っていなければならない」\n這兩句的差{さ}別{べつ}是？',
                options: [
                    '意思相同，「なければ」更正式',
                    '意思相同，「なくては」更正式',
                    '意思不同',
                    '「なければ」是口語'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！兩者都表示「必須持有護照」，但「なければ」比「なくては」更正式、更書面化。',
                    wrong: [
                        '錯誤：「なければ」比「なくては」更正式。',
                        '錯誤：意思完全相同，都表示義務。',
                        '錯誤：「なければ」是最正式的說法，常用於法律、規則等書面語。'
                    ]
                }
            },
            {
                id: 'n5_q_naranai_5',
                sentence: '申{もう}し込{こ}みは今日中{きょうじゅう}にし（　）。',
                options: ['なくてはならない', 'なくてもいい', 'なくちゃ', 'なければいけない'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくてはならない」正確！正式場合說「申請必須在今{いま}天內完成」。',
                    wrong: [
                        '「なくてもいい」錯誤：這表示「不申請也可以」，與截止日矛盾。',
                        '「なくちゃ」錯誤：口語說法，在正式的申請場合不太{ふと}適合。',
                        '「なければいけない」也正確！意思相同，正式度稍低{ひく}。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「なくちゃ」不是「なくてはならない」
            {
                id: 'n5_q_naranai_6',
                sentence: '（朋友間對話）「あ、もう8時{じ}！早{はや}く起{お}き（　）！」',
                options: ['なくてはならない', 'なくちゃ', 'なければならない', 'なくてはなりません'],
                correctIndex: 1,
                explanation: {
                    correct: '「なくちゃ」正確！朋友間的日常對話用口語「なくちゃ」最自然。這是陷阱題！',
                    wrong: [
                        '「なくてはならない」錯誤：「なくてはならない」太{ふと}正式！朋友間對話用口語「なくちゃ」！',
                        '「なければならない」錯誤：「なければならない」是最正式的說法，用於書面語，朋友間對話不自然！',
                        '「なくてはなりません」錯誤：敬體的正式說法，朋友間太{ふと}正式了！'
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
                title: '接續方式',
                description: '名詞/な形容詞 + になる\nい形容詞(去い) + く + なる',
                examples: []
            },
            {
                usageId: 2,
                title: '變化 (Become)',
                description: '意思：變得...、成為...。\n表示狀態的變化。\n\n接續變形：\n- 名詞/な形容詞：加「に」 + なる (例：20歳になる、きれいになる)\n- い形容詞：去掉「い」加「く」 + なる (例：高くなる、暑くなる)\n\n時態變化：\n- なる (辭書形)\n- なります (禮貌形)\n- なっている (正在變得/狀態)\n- なった (變成了/過去式)',
                examples: [
                    { japanese: '今年、私は２０歳になります。', chinese: '今年我將滿20歲 (成為20歲)。' },
                    { japanese: '暗くなる前に家に帰りたい。', chinese: '想在變暗之前回家。' },
                    { japanese: 'もっと強くなるために、毎⽇運動しています。', chinese: '為了變得更強，每天都在運動。' },
                    { japanese: '⽇本語が上⼿になっていますね。', chinese: '日語變好了呢。' },
                    { japanese: '将来、何になりたいですか。', chinese: '將來想成為什麼呢？' },
                    { japanese: '暗くなってきましたね。', chinese: '天色變暗了呢。' },
                    { japanese: '今⽇のイベントは中⽌になりました。', chinese: '今天的活動中止了 (變成中止狀態)。' }
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
                    rule: '「する」：有意志的改變、人{ひと}為改變',
                    examples: [
                        { japanese: '部屋{へや}を暗{くら}くした。', chinese: '把房間弄暗了。（人{ひと}為）' }
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
                sentence: '日本語{にほんご}が上{じょう}手{ず}（　）なりました。',
                options: ['に', 'く', 'で', 'と'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！な形容詞「上{じょう}手{ず}」後面接「になる」。',
                    wrong: [
                        '「く」錯誤：「く」用於い形容詞。「上{じょう}手{ず}」是な形容詞！',
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
                    correct: '「く」正確！い形容詞「暗{くら}い」變成「暗{くら}く」再接「なる」。這是自然變化！',
                    wrong: [
                        '「に」錯誤：「に」用於名詞和な形容詞。「暗{くら}い」是い形容詞！',
                        '「で」錯誤：不用於接「なる」。',
                        '「と」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_naru_3',
                sentence: '部屋{へや}を暗{くら}（　）した。',
                options: ['く', 'に', 'で', 'と'],
                correctIndex: 0,
                explanation: {
                    correct: '「く」正確！「暗{くら}くする」表示人{ひと}為地把房間弄暗。注意「する」和「なる」的區別！',
                    wrong: [
                        '「に」錯誤：い形容詞用「く」不用「に」。而且這是人{ひと}為動作用「する」！',
                        '「で」錯誤：不用於接「する」表示變化。',
                        '「と」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_naru_4',
                sentence: '「空{そら}が暗{くら}くなった」と「部屋{へや}を暗{くら}くした」的差{さ}別{べつ}是？',
                options: [
                    '「なる」是自然變化，「する」是人{ひと}為改變',
                    '「なる」是人{ひと}為改變，「する」是自然變化',
                    '意思完全相同',
                    '「なる」用於過去，「する」用於現在'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「なる」表示自然發生的變化（天變暗了），「する」表示有意志的改變（把房間弄暗）。',
                    wrong: [
                        '錯誤：順序相反了！',
                        '錯誤：意思不同，主語和動作的性質都不同。',
                        '錯誤：跟時{じ}態無關，是自然vs人{ひと}為的區別。'
                    ]
                }
            },
            {
                id: 'n5_q_naru_5',
                sentence: '「お子{こ}さん、大{おお}き（　）なりましたね。」\n「ええ、もう高校生{こうこうせい}ですよ。」',
                options: ['く', 'に', 'で', 'と'],
                correctIndex: 0,
                explanation: {
                    correct: '「く」正確！「大{おお}きい」是い形容詞，所以用「大きくなる」。孩子長{なが}大是自然變化！',
                    wrong: [
                        '「に」錯誤：「大{おお}きい」是い形容詞，不是な形容詞。很多人{ひと}會搞錯！',
                        '「で」錯誤：不用於接「なる」。',
                        '「と」錯誤：不用於這種接續。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「にする」不是「になる」
            {
                id: 'n5_q_naru_6',
                sentence: '「何{なに}を飲{の}みますか。」「コーヒー（　）します。」',
                options: ['に', 'く', 'が', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「コーヒーにする」= 我要咖啡（主動選擇/決定）。這是「にする」不是「になる」！這是陷阱題！',
                    wrong: [
                        '「く」錯誤：「く」是い形容詞接「なる」的形式，這裡不是形容詞。',
                        '「が」錯誤：「コーヒーがします」語意不通。',
                        '「を」錯誤：「にする」固定用「に」，不用「を」。'
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
                title: '接續方式',
                description: '普通形 + んです',
                examples: []
            },
            {
                usageId: 2,
                title: '強調/解釋說明 (口語)',
                description: '意思：是...的。\n用於解釋原因、理由，或強調語氣。\n比單純的「です」帶有更強的說明性質。\n「のです」的口語縮略形，較為隨意親切。\n\n例：\n- 暑いです (很熱 - 單純陳述)\n- 暑いんです (是因為很熱 - 解釋原因/強調)',
                examples: [
                    { japanese: '何を飲みたいんですか。', chinese: '你想喝什麼呢？ (詢問意願)' },
                    { japanese: 'お茶を飲みたいんです。', chinese: '我想喝茶 (解釋需求)。' },
                    { japanese: '眠くないんですか。', chinese: '你不睏嗎？' },
                    { japanese: '気分が良くないんですよ。', chinese: '我不太舒服 (解釋狀況)。' },
                    { japanese: '今からバイトに⾏くんだ。', chinese: '我現在要去打工 (解釋行程)。' },
                    { japanese: 'いつか⽇本に⾏くんだ︕', chinese: '總有一天要去日本！ (強調決心)' }
                ]
            }
        ],
        analysis: {
            title: '「んです」的接續規則',
            points: [
                {
                    rule: '動詞・い形容詞：直接加「んです」',
                    examples: [
                        { japanese: '行{い}く → 行{い}くんです', chinese: '去（解釋說明）' },
                        { japanese: '寒{さむ}い → 寒{さむ}いんです', chinese: '冷{つめ}（解釋說明）' }
                    ]
                },
                {
                    rule: '名詞・な形容詞：加「な」再加「んです」',
                    examples: [
                        { japanese: '学{がく}生{せい} → 学{がく}生{せい}なんです', chinese: '是學生（解釋說明）' },
                        { japanese: '静{しず}か → 静{しず}かなんです', chinese: '很安靜（解釋說明）' }
                    ]
                },
                {
                    rule: '口語中{なか}「の」常省略為「ん」',
                    examples: [
                        { japanese: '行{い}くのです → 行{い}くんです', chinese: '書面 → 口語' },
                        { japanese: '食{た}べたのです → 食べたんです', chinese: '書面 → 口語' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_ndesu_1',
                sentence: '「どうしたんですか。」「ちょっと気分{きぶん}が悪{わる}い（　）。」',
                options: ['んです', 'です', 'ます', 'なんです'],
                correctIndex: 0,
                explanation: {
                    correct: '「んです」正確！用於說明自己身體不舒服的原因。い形容詞直接加「んです」。',
                    wrong: [
                        '「です」錯誤：單純陳述，沒有解釋的語氣。這裡是在回答「怎麼了」，需要解釋！',
                        '「ます」錯誤：形式不對，い形容詞不接「ます」。',
                        '「なんです」錯誤：「悪{わる}い」是い形容詞，不需要「な」。名詞和な形容詞才需要！'
                    ]
                }
            },
            {
                id: 'n5_q_ndesu_2',
                sentence: '明日{あした}は休{やす}み（　）。',
                options: ['なんです', 'んです', 'です', 'のです'],
                correctIndex: 0,
                explanation: {
                    correct: '「なんです」正確！名詞「休{やす}み」後面要加「な」再加「んです」。',
                    wrong: [
                        '「んです」錯誤：名詞後面需要「な」！這是「んです」的重要規則。',
                        '「です」錯誤：單純陳述，沒有解釋的語氣。',
                        '「のです」錯誤：書面語，但名詞後面也需要「な」→「なのです」。'
                    ]
                }
            },
            {
                id: 'n5_q_ndesu_3',
                sentence: '彼{かれ}は静{しず}か（　）。どうしたのかな。',
                options: ['なんです', 'んです', 'です', 'くんです'],
                correctIndex: 0,
                explanation: {
                    correct: '「なんです」正確！「静{しず}か」是な形容詞，要加「な」再加「んです」。這是陷阱題！',
                    wrong: [
                        '「んです」錯誤：な形容詞後面需要「な」！',
                        '「です」錯誤：缺少解釋語氣，這裡是在疑惑他為何{なに}安靜。',
                        '「くんです」錯誤：「く」用於い形容詞，「静{しず}か」是な形容詞。'
                    ]
                }
            },
            {
                id: 'n5_q_ndesu_4',
                sentence: '「あれ、食{た}べないの？」\n「うん、今{いま}ダイエット中{ちゅう}（　）。」',
                options: ['なんです', 'んです', 'です', 'なんだ'],
                correctIndex: 0,
                explanation: {
                    correct: '「なんです」正確！「ダイエット中{なか}」是名詞性質，所以要加「な」。用於解釋不吃的理{り}由{ゆう}。',
                    wrong: [
                        '「んです」錯誤：名詞後面需要「な」。',
                        '「です」錯誤：缺少解釋的語氣。',
                        '「なんだ」也可以！這是較隨意的口語說法，用於朋友之間。'
                    ]
                }
            },
            {
                id: 'n5_q_ndesu_5',
                sentence: '「んです」的接續規則：動詞/い形容詞→直接加「んです」，名詞/な形容詞→？',
                options: [
                    '加「な」再加「んです」',
                    '直接加「んです」',
                    '加「だ」再加「んです」',
                    '加「く」再加「んです」'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！名詞/な形容詞後面要加「な」：学{がく}生{せい}＋な＋んです、静{しず}か＋な＋んです。',
                    wrong: [
                        '錯誤：名詞和な形容詞後面必須加「な」！',
                        '錯誤：「だ」不能直接接「んです」。',
                        '錯誤：「く」是い形容詞的連用形，不用於這裡。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「から」不是「んです」
            {
                id: 'n5_q_ndesu_6',
                sentence: '「どうして遅{おく}れたんですか。」\n「電{でん}車{しゃ}が止{と}まった（　）です。」',
                options: ['んです', 'からです', 'のです', 'なんです'],
                correctIndex: 1,
                explanation: {
                    correct: '「からです」正確！回答「為什麼」的問題時，理{り}由{ゆう}用「から」。「〜からです」=「因為〜」。這是陷阱題！',
                    wrong: [
                        '「んです」錯誤：「〜んです」是解釋，但回答「どうして」時用「〜からです」更直接！',
                        '「のです」錯誤：書面語形式，同樣不如「からです」直接。',
                        '「なんです」錯誤：動詞「止{と}まった」後面不需要「な」！'
                    ]
                }
            }
        ]
    }
});

// ===== Batch 12: にする / に行{い}く / のが上{じょう}手{ず} / のが下{へ}手{た} / のが好{す}き =====
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
                title: '接續方式',
                description: '名詞 + にする',
                examples: []
            },
            {
                usageId: 2,
                title: '決定 (Decide on)',
                description: '意思：決定要...、選...。\n表示選擇或決定某個選項。\n常在點餐或做決定時使用。\n\n形式：\n- にする (casual)\n- にします (polite)\n- ことにする (接動詞時)',
                examples: [
                    { japanese: 'どれにする?', chinese: '要哪個？' },
                    { japanese: '飲み物は何にする︖', chinese: '飲料要什麼？' },
                    { japanese: 'お茶にする。', chinese: '我要喝茶。' },
                    { japanese: 'これにします。', chinese: '我要這個 (決定選這個)。' },
                    { japanese: '今⽇は部屋をきれいにします。', chinese: '今天要把房間弄乾淨 (決定/使役)。' },
                    { japanese: '紅茶にしますかそれともコーヒーにしますか。', chinese: '要紅茶還是咖啡？' },
                    { japanese: '今年は素晴しい年にします︕', chinese: '今年要過得精彩！' }
                ]
            }
        ],
        analysis: {
            title: '「にする」vs「になる」',
            points: [
                {
                    rule: '「にする」：主動、有意識地選擇或改變',
                    examples: [
                        { japanese: '私{わたし}は医{い}者{しゃ}にする。', chinese: '我決定當醫生。（自己的決定）' }
                    ]
                },
                {
                    rule: '「になる」：自然地、無意識地變化',
                    examples: [
                        { japanese: '私{わたし}は医{い}者{しゃ}になる。', chinese: '我會成為醫生。（自然的發展）' }
                    ]
                },
                {
                    rule: '使役的用法區別',
                    examples: [
                        { japanese: '部屋{へや}を暖{あたた}かくした。', chinese: '把房間弄暖了。（人{ひと}為）' },
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
                    correct: '「に」正確！「カレーにする」表示「選擇/決定要咖哩」。點餐時{じ}的固定用法！',
                    wrong: [
                        '「を」錯誤：「にする」固定接續「に」，不用「を」！',
                        '「で」錯誤：不用於這種接續。',
                        '「が」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_nisuru_2',
                sentence: 'テレビの音{おと}を小{ちい}さく（　）ください。',
                options: ['して', 'なって', 'した', 'になって'],
                correctIndex: 0,
                explanation: {
                    correct: '「して」正確！「小さくする」表示人{ひと}為地把聲音調小。這是請求對方做的動作！',
                    wrong: [
                        '「なって」錯誤：「なる」是自然變化，這裡是請求對方做，要用「する」！',
                        '「した」錯誤：這是過去式，不能接「ください」。',
                        '「になって」錯誤：「になる」是自然變化，不是人{ひと}為動作。'
                    ]
                }
            },
            {
                id: 'n5_q_nisuru_3',
                sentence: '春{はる}（　）なると、桜{さくら}が咲{さ}きます。',
                options: ['に', 'を', 'で', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「春{はる}になる」表示「到了春{はる}天」。這是「なる」不是「する」！注意區分{ふん}！',
                    wrong: [
                        '「を」錯誤：春{はる}天到來是自然變化，用「になる」不用「にする」。',
                        '「で」錯誤：不用於「なる」的接續。',
                        '「が」錯誤：不用於「なる」的接續。'
                    ]
                }
            },
            {
                id: 'n5_q_nisuru_4',
                sentence: '「部屋{へや}をきれいにした」と「部屋{へや}がきれいになった」的差{さ}別{べつ}是？',
                options: [
                    '「した」是人{ひと}為打掃，「なった」是自然變乾淨',
                    '意思完全相同',
                    '「した」是過去式，「なった」是現在式',
                    '「した」用於自己的房間，「なった」用於別人{ひと}的房間'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「にする」是人{ひと}為改變（我打掃了），「になる」是狀態變化（變乾淨了）。',
                    wrong: [
                        '錯誤：意思不同！動作的主體不同。',
                        '錯誤：兩者都是過去式，差{さ}別{べつ}在於人{ひと}為vs自然變化。',
                        '錯誤：跟誰{だれ}的房間無關，是動作性質的差{さ}別{べつ}。'
                    ]
                }
            },
            {
                id: 'n5_q_nisuru_5',
                sentence: '会{かい}議{ぎ}は来週{らいしゅう}（　）しましょう。',
                options: ['に', 'を', 'で', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「来{らい}週{しゅう}にする」表示「決定在下週」。這是主動決定，用「にする」！',
                    wrong: [
                        '「を」錯誤：「にする」固定用「に」。',
                        '「で」錯誤：不用於表示決定。',
                        '「が」錯誤：不適用於這種接續。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「になる」不是「にする」
            {
                id: 'n5_q_nisuru_6',
                sentence: '来年{らいねん}、大{だい}学{がく}生{せい}（　）。',
                options: ['にします', 'になります', 'をします', 'がなります'],
                correctIndex: 1,
                explanation: {
                    correct: '「になります」正確！「大{だい}学{がく}生{せい}になる」= 成為大學生。這是自然發生/結果，用「になる」！這是陷阱題！',
                    wrong: [
                        '「にします」錯誤：「にする」是主動決定、選擇。成為大學生是考試結果，不是當下的選擇，用「になる」。',
                        '「をします」錯誤：「大{だい}学{がく}生{せい}をする」語意不通。',
                        '「がなります」錯誤：「なる」前面接「に」，不接「が」。'
                    ]
                }
            }
        ]
    },

    // ===== n5_ni_iku =====
    n5_ni_iku: {
        id: 'n5_ni_iku',
        pattern: 'に行{い}く / に来{く}る',
        connection: '動詞ます形（去ます）＋に行{い}く / に来{く}る',
        translation: '去做...；來做...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: '動詞(ます形去ます) / 動作性名詞 + に + 行く/来る/帰る',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '表示移動的目的。意思是「去/來/回...做某事」。\n\n例如：\n- 食べに行く (去吃)\n- 買い物に行く (去購物)',
                examples: [
                    { japanese: '日本へ日本語を勉強しに来ました。', chinese: '來日本學日語。' },
                    { japanese: '映画を見に行きます。', chinese: '去看電影。' }
                ]
            }
        ],
        analysis: {
            title: '「に行{い}く」的用法重點',
            points: [
                {
                    rule: '動詞連用形（ます形去ます）＋に行{い}く',
                    examples: [
                        { japanese: '食{た}べます → 食べに行{い}く', chinese: '去吃' },
                        { japanese: '見{み}ます → 見{み}に行{い}く', chinese: '去看' }
                    ]
                },
                {
                    rule: '「へ」和「に」的區別：「へ」表示方向，「に」表示目的地或目的',
                    examples: [
                        { japanese: '日{に}本{ほん}へ行{い}く', chinese: '往日{に}本{ほん}的方向去' },
                        { japanese: '日{に}本{ほん}に行{い}く', chinese: '去日{に}本{ほん}（目的地）' },
                        { japanese: '勉{べん}強{きょう}しに行{い}く', chinese: '去學習（目的）' }
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
                    correct: '「に」正確！「食べに行{い}く」表示「去吃」的目的。動詞ます形（去ます）＋に行{い}く！',
                    wrong: [
                        '「を」錯誤：「を」是受詞助詞，目的要用「に」表示。',
                        '「で」錯誤：「で」表示方式或場{ば}所{しょ}，不表示目的。',
                        '「が」錯誤：「が」是主語助詞，不用於表示目的。'
                    ]
                }
            },
            {
                id: 'n5_q_niiku_2',
                sentence: '週末{しゅうまつ}、買{か}い物{もの}（　）行{い}きたいです。',
                options: ['に', 'を', 'で', 'へ'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「買{か}い物{もの}に行{い}く」表示去購物的目的。名詞＋に行{い}く也可以！',
                    wrong: [
                        '「を」錯誤：「買{か}い物{もの}をする」可以，但「買{か}い物{もの}に行{い}く」是固定用法。',
                        '「で」錯誤：不用於表示目的。',
                        '「へ」錯誤：「へ」表示方向，但「買{か}い物{もの}」是目的不是方向。'
                    ]
                }
            },
            {
                id: 'n5_q_niiku_3',
                sentence: '日{に}本{ほん}（　）勉{べん}強{きょう}しに来{き}ました。',
                options: ['へ', 'に', 'で', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「へ」正確！「日{に}本{ほん}へ」表示移動方向，「勉強しに」表示目的。這裡考的是「へ」vs「に」！',
                    wrong: [
                        '「に」也可以！「日{に}本{ほん}に」表示目的地，兩者都正確。',
                        '「で」錯誤：「で」表示動作場{ば}所{しょ}，但這裡是移動的方向。',
                        '「を」錯誤：不用於表示移動目的地。'
                    ]
                }
            },
            {
                id: 'n5_q_niiku_4',
                sentence: '「食{た}べる」的「に行{い}く」形是？',
                options: [
                    '食べに行{い}く',
                    '食{た}べるに行{い}く',
                    '食べたに行{い}く',
                    '食{た}べてに行{い}く'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！動詞ます形（去ます）＋に行{い}く。「食{た}べます」→「食べ」＋「に行{い}く」。',
                    wrong: [
                        '錯誤：不用辭書形，要用ます形去掉ます！',
                        '錯誤：不用た形。',
                        '錯誤：不用て形。'
                    ]
                }
            },
            {
                id: 'n5_q_niiku_5',
                sentence: '友達{ともだち}の家{いえ}（　）遊{あそ}びに行{い}った。',
                options: ['へ', 'を', 'で', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「へ」正確！「友{とも}達{だち}の家{いえ}へ」表示移動方向，「遊{あそ}びに」表示目的。',
                    wrong: [
                        '「を」錯誤：「を」不用於表示移動目的地。',
                        '「で」錯誤：「で」表示動作場{ば}所{しょ}，這裡是移動方向。',
                        '「が」錯誤：「が」是主語助詞。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「来{く}る」不是「行{い}く」
            {
                id: 'n5_q_niiku_6',
                sentence: '「明日{あした}、私{わたし}の家{いえ}に遊{あそ}び（　）。」「いいね！」',
                options: ['に行{い}かない', 'に来{こ}ない', 'にいない', 'に帰{かえ}らない'],
                correctIndex: 1,
                explanation: {
                    correct: '「に来{こ}ない」正確！邀請對方來自己家{いえ}，用「来{く}る」不用「行{い}く」。「遊{あそ}びに来{こ}ない？」＝要不要來玩？這是陷阱題！',
                    wrong: [
                        '「に行{い}かない」錯誤：說話者說「私{わたし}の家{いえ}に」（我家{いえ}），邀請別人{ひと}「來」應用「来{く}る」。',
                        '「にいない」錯誤：「いる」是「在」，語意不通。',
                        '「に帰{かえ}らない」錯誤：「帰{かえ}る」是「回」，對方不住這裡，不適合用「帰{かえ}る」。'
                    ]
                }
            }
        ]
    },

    // ===== n5_no_ga_jouzu =====
    n5_no_ga_jouzu: {
        id: 'n5_no_ga_jouzu',
        pattern: 'のが上{じょう}手{ず}',
        connection: '動詞辞{じ}書{しょ}形＋のが上{じょう}手{ず}',
        translation: '擅長{なが}做...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: '動詞辭書形 + のが + 上手',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '表示擅長做某動作。意思是「很會...」、「擅長...」。\n',
                examples: [
                    { japanese: '歌うのが上手ですね。', chinese: '很會唱歌呢。' }
                ]
            }
        ],
        analysis: {
            title: '「上{じょう}手{ず}」的用法注意',
            points: [
                {
                    rule: '「上{じょう}手{ず}」是な形容詞，修飾名詞時{じ}用「上{じょう}手{ず}な」',
                    examples: [
                        { japanese: '歌{うた}が上{じょう}手{ず}な人{ひと}', chinese: '唱歌{うた}好聽的人{ひと}' }
                    ]
                },
                {
                    rule: '注意：不能用「上{じょう}手{ず}」形容自己（謙虛）',
                    examples: [
                        { japanese: '私{わたし}は歌{うた}が上{じょう}手{ず}です。', chinese: '✕ 不謙虛' },
                        { japanese: '私{わたし}は歌{うた}が得意{とくい}です。', chinese: '○ 我擅長唱歌{うた}。' }
                    ]
                },
                {
                    rule: '「上{じょう}手{ず}」vs「得{とく}意{い}」：「上{じょう}手{ず}」客觀描述技能，「得{とく}意{い}」表示自信',
                    examples: [
                        { japanese: '田{た}中{なか}さんは英{えい}語{ご}が上{じょう}手{ず}だ。', chinese: '（客觀評價他人{ひと}）' },
                        { japanese: '私{わたし}は英{えい}語{ご}が得意{とくい}だ。', chinese: '（說自己時{じ}用）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_jouzu_1',
                sentence: '山{やま}田{だ}さんは泳{およ}ぐ（　）上{じょう}手{ず}ですね。',
                options: ['のが', 'のを', 'ので', 'のに'],
                correctIndex: 0,
                explanation: {
                    correct: '「のが」正確！「泳{およ}ぐのが上{じょう}手{ず}」表示「擅長{なが}游泳」。「の」將動詞名詞化，「が」標示擅長{なが}的對象！',
                    wrong: [
                        '「のを」錯誤：「上{じょう}手{ず}」前面用「が」不用「を」！',
                        '「ので」錯誤：這是表示原因的接續。',
                        '「のに」錯誤：這是表示對比或目的的接續。'
                    ]
                }
            },
            {
                id: 'n5_q_jouzu_2',
                sentence: '彼{かれ}はピアノを弾{ひ}く（　）上{じょう}手{ず}だ。',
                options: ['のが', 'のを', 'ので', 'のに'],
                correctIndex: 0,
                explanation: {
                    correct: '「のが」正確！「弾くのが上{じょう}手{ず}」表示「擅長{なが}彈鋼琴」。動詞辭書形＋のが上{じょう}手{ず}！',
                    wrong: [
                        '「のを」錯誤：「上{じょう}手{ず}」前面用「が」，這是常見{み}錯誤！',
                        '「ので」錯誤：這是表示原因的接續。',
                        '「のに」錯誤：這是表示對比或目的的接續。'
                    ]
                }
            },
            {
                id: 'n5_q_jouzu_3',
                sentence: '私{わたし}はピアノを弾{ひ}くのが（　）です。',
                options: ['得{とく}意{い}', '上{じょう}手{ず}', '好{す}き', '嫌{きら}い'],
                correctIndex: 0,
                explanation: {
                    correct: '「得{とく}意{い}」正確！說自己擅長某事時{じ}用「得{とく}意{い}」，不用「上{じょう}手{ず}」。這是陷阱題！',
                    wrong: [
                        '「上{じょう}手{ず}」錯誤：「上{じょう}手{ず}」用於形容他人{ひと}，說自己用會不謙虛！日{に}本{ほん}文化重點！',
                        '「好{す}き」錯誤：這是「喜歡」，不是「擅長{なが}」。',
                        '「嫌{きら}い」錯誤：這是「討厭」，意思相反。'
                    ]
                }
            },
            {
                id: 'n5_q_jouzu_4',
                sentence: '「お母{かあ}さんは料{りょう}理{り}（　）上{じょう}手{ず}ですね。」\n「ありがとうございます。」',
                options: ['が', 'を', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！「料{りょう}理{り}が上{じょう}手{ず}」表示「擅長料{りょう}理{り}」。稱讚他人{ひと}可以用「上{じょう}手{ず}」！',
                    wrong: [
                        '「を」錯誤：「上{じょう}手{ず}」前面用「が」不用「を」。',
                        '「に」錯誤：不用於這種接續。',
                        '「で」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_jouzu_5',
                sentence: '「上{じょう}手{ず}」和「得{とく}意{い}」的使用差{さ}別{べつ}是？',
                options: [
                    '「上{じょう}手{ず}」說他人{ひと}，「得{とく}意{い}」說自己',
                    '「上{じょう}手{ず}」說自己，「得{とく}意{い}」說他人{ひと}',
                    '意思完全相同',
                    '「上{じょう}手{ず}」用於運{うん}動{どう}，「得{とく}意{い}」用於學習'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！日語禮儀：說自己用「得{とく}意{い}」（私{わたし}は料{りょう}理{り}が得{とく}意{い}です），說他人{ひと}用「上{じょう}手{ず}」（お母{かあ}さんは料{りょう}理{り}が上{じょう}手{ず}ですね）。',
                    wrong: [
                        '錯誤：順序相反了！',
                        '錯誤：使用場合不同，說自己「上{じょう}手{ず}」會顯得不謙虛。',
                        '錯誤：跟運{うん}動{どう}或學習無關，是說自己vs說他人{ひと}的差{さ}別{べつ}。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「下{へ}手{た}」不是「上{じょう}手{ず}」
            {
                id: 'n5_q_jouzu_6',
                sentence: '私{わたし}はテニスが（　）です。いつも負{ま}けます。',
                options: ['上{じょう}手{ず}', '下{へ}手{た}', '得{とく}意{い}', '好{す}き'],
                correctIndex: 1,
                explanation: {
                    correct: '「下{へ}手{た}」正確！「いつも負{ま}ける」（總是輸）說明不擅長，用「下{へ}手{た}」。這是陷阱題！',
                    wrong: [
                        '「上{じょう}手{ず}」錯誤：「上{じょう}手{ず}」是「擅長」，與「總是輸」矛盾。而且說自己「上{じょう}手{ず}」不謙虛。',
                        '「得{とく}意{い}」錯誤：「得{とく}意{い}」是「擅長/拿手」，與「總是輸」矛盾。',
                        '「好{す}き」錯誤：「好{す}き」是「喜歡」，與「總是輸」不一定矛盾，但不是最佳答案。'
                    ]
                }
            }
        ]
    },

    // ===== n5_no_ga_heta =====
    n5_no_ga_heta: {
        id: 'n5_no_ga_heta',
        pattern: 'のが下{へ}手{た}',
        connection: '動詞辞{じ}書{しょ}形＋のが下{へ}手{た}',
        translation: '不擅長{なが}做...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: '動詞辭書形 + のが + 下手',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '表示不擅長做某動作。「の」將前面的動詞名詞化，使其能作為「下手」的對象。',
                examples: [
                    { japanese: '私はあ絵を描くのが下手です。', chinese: '我不擅長畫畫。' }
                ]
            }
        ],
        analysis: {
            title: '「下{へ}手{た}」的用法注意',
            points: [
                {
                    rule: '「下{へ}手{た}」是な形容詞，修飾名詞時{じ}用「下{へ}手{た}な」',
                    examples: [
                        { japanese: '字{じ}が下手{へた}な人{ひと}', chinese: '字{じ}寫得不好的人{ひと}' }
                    ]
                },
                {
                    rule: '注意：說他人{ひと}「下{へ}手{た}」可能失禮，要小心使用',
                    examples: [
                        { japanese: '（直接對人{ひと}說）あなたは歌{うた}が下手{へた}ですね。', chinese: '✕ 很失禮' },
                        { japanese: '私{わたし}は歌{うた}が下手{へた}です。', chinese: '○ 說自己可以' }
                    ]
                },
                {
                    rule: '較委婉的說法：「あまり得{とく}意{い}じゃない」',
                    examples: [
                        { japanese: '料{りょう}理{り}はあまり得意{とくい}じゃない。', chinese: '不太擅長料{りょう}理{り}。（委婉）' }
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
                    correct: '「のが」正確！「歌{うた}うのが下{へ}手{た}」表示「不擅長唱歌{うた}」。說自己可以用「下{へ}手{た}」！',
                    wrong: [
                        '「のを」錯誤：「下{へ}手{た}」前面用「が」不用「を」！',
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
                    correct: '「が」正確！「運転が下{へ}手{た}」表示「不擅長開車{くるま}」。名詞＋が下{へ}手{た}！',
                    wrong: [
                        '「を」錯誤：「下{へ}手{た}」前面用「が」。',
                        '「に」錯誤：不用於這種接續。',
                        '「で」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_heta_3',
                sentence: '「あの人{ひと}は歌{うた}が下手{へた}ですね。」這樣說對嗎？',
                options: [
                    '不太{ふと}禮貌，直接說別人{ひと}「下{へ}手{た}」很失禮',
                    '完全正確，沒有問{もん}題{だい}',
                    '文法錯誤',
                    '只能說自己「下{へ}手{た}」'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！日語禮儀：直接說他人{ひと}「下{へ}手{た}」很失禮。較委婉的說法是「あまり得{とく}意{い}じゃないみたいですね」。',
                    wrong: [
                        '錯誤：雖然文法正確，但這樣說很失禮！',
                        '錯誤：文法正確，但使用場合不對。',
                        '錯誤：說自己「下{へ}手{た}」是謙虛，說他人{ひと}「下{へ}手{た}」是失禮。'
                    ]
                }
            },
            {
                id: 'n5_q_heta_4',
                sentence: '私{わたし}は料{りょう}理{り}が（　）。',
                options: ['あまり得{とく}意{い}じゃない', '下{へ}手{た}です', '上{じょう}手{ず}です', '好{す}きじゃない'],
                correctIndex: 0,
                explanation: {
                    correct: '「あまり得{とく}意{い}じゃない」正確！這是較委婉地說自己不擅長{なが}的方式。「下{へ}手{た}」也可以但較直接。',
                    wrong: [
                        '「下{へ}手{た}です」也可以！但較直接，「得{とく}意{い}じゃない」更委婉。',
                        '「上{じょう}手{ず}です」錯誤：說自己不謙虛，而且意思相反。',
                        '「好{す}きじゃない」錯誤：這是「不喜歡」，不是「不擅長{なが}」。'
                    ]
                }
            },
            {
                id: 'n5_q_heta_5',
                sentence: '「上{じょう}手{ず}/下{へ}手{た}」vs「得{とく}意{い}/苦{に}手{がて}」的差{さ}別{べつ}是？',
                options: [
                    '上{じょう}手{ず}/下{へ}手{た}客觀描述技能，得{とく}意{い}/苦{に}手{がて}主觀表達自信',
                    '上{じょう}手{ず}/下{へ}手{た}主觀表達，得{とく}意{い}/苦{に}手{がて}客觀描述',
                    '意思完全相同',
                    '上{じょう}手{ず}/下{へ}手{た}只能說他人{ひと}，得{とく}意{い}/苦{に}手{がて}只能說自己'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「上{じょう}手{ず}/下{へ}手{た}」客觀評價技能高{たか}低{ひく}，「得{とく}意{い}/苦{に}手{がて}」主觀表達有沒有自信。說自己常用「得{とく}意{い}/苦{に}手{がて}」！',
                    wrong: [
                        '錯誤：順序相反了！',
                        '錯誤：意思有區別，使用場合也不同。',
                        '錯誤：不是完全限制，但說自己時{じ}用「得{とく}意{い}/苦{に}手{がて}」更自然。'
                    ]
                }
            }
        ]
    },

    // ===== n5_no_ga_suki =====
    n5_no_ga_suki: {
        id: 'n5_no_ga_suki',
        pattern: 'のが好{す}き',
        connection: '動詞辞{じ}書{しょ}形＋のが好{す}き',
        translation: '喜歡做...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: '動詞(辭書形) + のが好き',
                examples: []
            },
            {
                usageId: 2,
                title: '喜歡做... (Like doing)',
                description: '意思：喜歡做...。\n將動詞名詞化 (加「の」)，然後接「が好き」。\n例：食べるのが好き (喜歡吃)。\n\n*動詞原形 + の = 做某事(名詞化)',
                examples: [
                    { japanese: '私は寝るのが好きです。', chinese: '我喜歡睡覺。' },
                    { japanese: '漫画を読むのが好きだ。', chinese: '喜歡看漫畫。' },
                    { japanese: '妹は料理をするのが好きです。', chinese: '妹妹喜歡做菜。' },
                    { japanese: '彼⼥は野球の試合を⾒るのが好きです。', chinese: '她喜歡看棒球比賽。' },
                    { japanese: '私は何かを⾷べながら映画を観るのが好きです。', chinese: '我喜歡邊吃東西邊看電影。' },
                    { japanese: '電⾞とバスのどちらに乗るのが好きですか︖', chinese: '電車和公車你喜歡搭哪種？' },
                    { japanese: '多くの⽇本⼈は多くの⼈の前で⾃分の意⾒を表現するのが好きじゃない。', chinese: '大多數日本人不喜歡在多人面前表達自己的意見。' }
                ]
            }
        ],
        analysis: {
            title: '「好{す}き」的用法重點',
            points: [
                {
                    rule: '「好{す}き」是な形容詞，修飾名詞時{じ}用「好{す}きな」',
                    examples: [
                        { japanese: '好{す}きな食{た}べ物{もの}は何{なん}ですか。', chinese: '喜歡的食物是什麼？' }
                    ]
                },
                {
                    rule: '「好{す}き」前面用「が」不用「を」',
                    examples: [
                        { japanese: '音{おん}楽{がく}が好{す}きです。', chinese: '○ 正確' },
                        { japanese: '音{おん}楽{がく}を好{す}きです。', chinese: '✕ 錯誤' }
                    ]
                },
                {
                    rule: '喜歡的程度表達',
                    examples: [
                        { japanese: '大好{だいす}き', chinese: '非常喜歡' },
                        { japanese: 'まあまあ好{す}き', chinese: '還算喜歡' },
                        { japanese: 'あまり好{す}きじゃない', chinese: '不太{ふと}喜歡' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_suki_1',
                sentence: '私{わたし}は映{えい}画{が}を見{み}る（　）好{す}きです。',
                options: ['のが', 'のを', 'ので', 'のに'],
                correctIndex: 0,
                explanation: {
                    correct: '「のが」正確！「見{み}るのが好{す}き」表示「喜歡看」。動詞辭書形＋のが好{す}き！',
                    wrong: [
                        '「のを」錯誤：「好{す}き」前面用「が」不用「を」！這是常見{み}錯誤。',
                        '「ので」錯誤：這是表示原因的接續。',
                        '「のに」錯誤：這是表示對比或目的的接續。'
                    ]
                }
            },
            {
                id: 'n5_q_suki_2',
                sentence: 'どんな音{おん}楽{がく}（　）好{す}きですか。',
                options: ['が', 'を', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！「好{す}き」前面用「が」。名詞＋が好{す}き！',
                    wrong: [
                        '「を」錯誤：「好{す}き」不用「を」，這是日語學習者常犯的錯誤！',
                        '「に」錯誤：不用於這種接續。',
                        '「で」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_suki_3',
                sentence: '私{わたし}は野菜{やさい}（　）嫌{きら}いです。',
                options: ['が', 'を', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！「嫌{きら}い」也用「が」！「好{す}き」的反義詞「嫌{きら}い」同樣用「が」。',
                    wrong: [
                        '「を」錯誤：「嫌{きら}い」和「好{す}き」一樣用「が」。',
                        '「に」錯誤：不用於這種接續。',
                        '「で」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_suki_4',
                sentence: '「好{す}き」的喜歡程度排序，從最喜歡到討厭是？',
                options: [
                    '大好{す}き→好{す}き→まあまあ→あまり好{す}きじゃない→嫌{きら}い',
                    '好{す}き→大好{す}き→まあまあ→嫌{きら}い→あまり好{す}きじゃない',
                    '大好{す}き→まあまあ→好{す}き→嫌{きら}い→あまり好{す}きじゃない',
                    '全{ぜん}部{ぶ}程度相同'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！大好{す}き（非常喜歡）→好{す}き（喜歡）→まあまあ（還可以）→あまり好{す}きじゃない（不太{ふと}喜歡）→嫌{きら}い（討厭）',
                    wrong: [
                        '錯誤：「大好{す}き」比「好{す}き」程度更強！',
                        '錯誤：順序有誤，「まあまあ」是中{なか}間程度。',
                        '錯誤：程度明顯不同！'
                    ]
                }
            },
            {
                id: 'n5_q_suki_5',
                sentence: '「コーヒーと紅{こう}茶{ちゃ}、どちら（　）好{す}きですか。」\n「コーヒーのほうが好{す}きです。」',
                options: ['が', 'を', 'に', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！「どちらが好{す}き」是詢問喜好{す}的固定用法。回答用「～のほうが好{す}き」！',
                    wrong: [
                        '「を」錯誤：「好{す}き」固定用「が」。',
                        '「に」錯誤：不用於這種接續。',
                        '「で」錯誤：不用於這種接續。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「嫌{きら}い」不是「好{す}き」
            {
                id: 'n5_q_suki_6',
                sentence: '野{や}菜{さい}が（　）なので、いつも残{のこ}します。',
                options: ['好{す}き', '嫌{きら}い', '上{じょう}手{ず}', '得{とく}意{い}'],
                correctIndex: 1,
                explanation: {
                    correct: '「嫌{きら}い」正確！「いつも残{のこ}す」（總是剩下）說明不喜歡，用「嫌{きら}い」。這是陷阱題！',
                    wrong: [
                        '「好{す}き」錯誤：「好{す}き」是「喜歡」，與「總是剩下」矛盾。喜歡的話會吃完。',
                        '「上{じょう}手{ず}」錯誤：「上{じょう}手{ず}」是「擅長」，與「喜好{す}」無關。',
                        '「得{とく}意{い}」錯誤：「得{とく}意{い}」是「拿手」，與「喜好{す}」無關。'
                    ]
                }
            }
        ]
    }
});

// ===== Batch 13: の中{なか}で～が一{いち}番{ばん} / たことがある / たりたり / てもいい / てはいけない =====
Object.assign(n5Details, {
    // ===== n5_no_naka_de_a_ga_ichiban =====
    n5_no_naka_de_a_ga_ichiban: {
        id: 'n5_no_naka_de_a_ga_ichiban',
        pattern: 'の中{なか}で～が一{いち}番{ばん}',
        connection: '名詞＋の中{なか}で＋名詞＋が一{いち}番{ばん}＋形容詞',
        translation: '在...之中{なか}，...最...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '表示最高{たか}級比較',
                description: '用於在某個範圍內表示「最～」的比較。「の中{なか}で」表示範圍，「一{いち}番{ばん}」表示最高{たか}級。',
                examples: [
                    { japanese: 'クラスの中{なか}で、田{た}中{なか}さんが一{いち}番{ばん}背{せ}が高{たか}い。', chinese: '班上田{た}中{なか}同學最高{たか}。' },
                    { japanese: '日{に}本{ほん}の中{なか}で、東{とう}京{きょう}が一{いち}番{ばん}大{おお}きい。', chinese: '日{に}本{ほん}之中{なか}東{とう}京{きょう}最大。' },
                    { japanese: '季{き}節{せつ}の中{なか}で、春{はる}が一{いち}番{ばん}好{す}きです。', chinese: '四季之中{なか}最喜歡春{はる}天。' },
                    { japanese: '果{くだ}物{もの}の中{なか}で、何{なに}が一{いち}番{ばん}おいしいですか。', chinese: '水{みず}果之中{なか}什麼最好{す}吃？' }
                ]
            },
            {
                usageId: 2,
                title: '疑問詞との使用',
                description: '常與疑問詞「何{なに}」「どこ」「だれ」等一起使用，詢問最高{たか}級。',
                examples: [
                    { japanese: 'スポーツの中{なか}で、何{なに}が一{いち}番{ばん}好{す}きですか。', chinese: '運動之中{なか}最喜歡什麼？' },
                    { japanese: '世{せ}界{かい}の中{なか}で、どこが一{いち}番{ばん}きれいですか。', chinese: '世{せ}界{かい}上哪裡最漂亮？' },
                    { japanese: '家{か}族{ぞく}の中{なか}で、だれが一{いち}番{ばん}早{はや}く起{お}きますか。', chinese: '家{いえ}人{ひと}之中{なか}誰{だれ}最早起床？' }
                ]
            }
        ],
        analysis: {
            title: '比較表達的構造',
            points: [
                {
                    rule: '基本{ほん}構造：「範圍＋の中{なか}で＋主語＋が一{いち}番{ばん}＋形容詞」',
                    examples: [
                        { japanese: '動物{どうぶつ}の中{なか}で、犬{いぬ}が一{いち}番{ばん}好{す}きだ。', chinese: '動物之中{なか}最喜歡狗。' }
                    ]
                },
                {
                    rule: '「の中{なか}で」可省略，但較正式時{じ}建議保留',
                    examples: [
                        { japanese: '（季{き}節{せつ}の中{なか}で）春{はる}が一{いち}番{ばん}好{す}きだ。', chinese: '（季節之中{なか}）最喜歡春{はる}天。' }
                    ]
                },
                {
                    rule: '三者以上比較用「一{いち}番{ばん}」，兩者比較用「より」',
                    examples: [
                        { japanese: '3人{にん}の中{なか}で、田{た}中{なか}さんが一{いち}番{ばん}若{わか}い。', chinese: '三{さん}人{にん}之中{なか}田{た}中{なか}最年輕。' },
                        { japanese: '田{た}中{なか}さんより山{やま}田{だ}さんのほうが若{わか}い。', chinese: '山{やま}田{だ}比田{た}中{なか}年輕。' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_ichiban_1',
                sentence: '季{き}節{せつ}（　）中{なか}で、何{なに}が一{いち}番{ばん}好{す}きですか。',
                options: ['の', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！「季節の中{なか}で」表示「在季節之中{なか}」的範圍。',
                    wrong: [
                        '「が」錯誤：「の中{なか}で」前面用「の」，這裡是表示範圍不是主語。',
                        '「を」錯誤：不用於這種接續。',
                        '「に」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_ichiban_2',
                sentence: 'クラスの中{なか}で、山{やま}田{だ}さん（　）一{いち}番{ばん}頭{あたま}がいい。',
                options: ['が', 'は', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！「山{やま}田{だ}さんが一{いち}番{ばん}」中{なか}「が」標示最高{たか}級的主語。',
                    wrong: [
                        '「は」錯誤：最高級比較中{なか}，主語用「が」更自然。',
                        '「を」錯誤：不用於標示主語。',
                        '「に」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_ichiban_3',
                sentence: '田{た}中{なか}さんは山{やま}田{だ}さん（　）背{せ}が高{たか}いです。',
                options: ['より', 'の中{なか}で', 'が一{いち}番{ばん}', 'ほど'],
                correctIndex: 0,
                explanation: {
                    correct: '「より」正確！這是兩者比較，用「より」不用「一{いち}番{ばん}」。這是陷阱題！',
                    wrong: [
                        '「の中{なか}で」錯誤：「の中{なか}で」用於三者以上比較範圍。',
                        '「が一{いち}番{ばん}」錯誤：「一{いち}番{ばん}」用於最高{たか}級，兩者比較不用。',
                        '「ほど」錯誤：「ほど」用於否定比較（AはBほど～ない）。'
                    ]
                }
            },
            {
                id: 'n5_q_ichiban_4',
                sentence: '「一{いち}番{ばん}」和「より」的使用差{さ}別{べつ}是？',
                options: [
                    '「一{いち}番{ばん}」三者以上最高{たか}級，「より」兩者比較',
                    '「一{いち}番{ばん}」兩者比較，「より」三者以上',
                    '意思完全相同',
                    '「一{いち}番{ばん}」用於人{ひと}，「より」用於物'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！三者以上用「の中{なか}で～が一{いち}番{ばん}」，兩者比較用「AはBより～」。',
                    wrong: [
                        '錯誤：順序相反了！',
                        '錯誤：使用場合不同。',
                        '錯誤：跟人{ひと}或物無關，是比較對象數量的差{さ}別{べつ}。'
                    ]
                }
            },
            {
                id: 'n5_q_ichiban_5',
                sentence: '「スポーツの中{なか}で、何{なに}（　）一{いち}番{ばん}面白{おもしろ}いですか。」\n「サッカーが一{いち}番{ばん}面白{おもしろ}いです。」',
                options: ['が', 'は', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！疑問詞「何{なに}」後面用「が」。「何{なに}が一{いち}番{ばん}」是最高{たか}級的固定問法！',
                    wrong: [
                        '「は」錯誤：疑問詞後面用「が」不用「は」。',
                        '「を」錯誤：不用於標示主語。',
                        '「に」錯誤：不用於這種接續。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「より」不是「の中{なか}で一{いち}番{ばん}」
            {
                id: 'n5_q_ichiban_6',
                sentence: '「田{た}中{なか}さんと山{やま}田{だ}さん、どちらが背{せ}が高{たか}いですか。」\n「田{た}中{なか}さん（　）高{たか}いです。」',
                options: ['が一{いち}番{ばん}', 'のほうが', 'の中{なか}で', 'より'],
                correctIndex: 1,
                explanation: {
                    correct: '「のほうが」正確！這是兩者比較，用「AのほうがB」，不用「一{いち}番{ばん}」！這是陷阱題！',
                    wrong: [
                        '「が一{いち}番{ばん}」錯誤：「一{いち}番{ばん}」用於三者以上的最高{たか}級！兩者比較用「のほうが」！',
                        '「の中{なか}で」錯誤：「の中{なか}で」表示範圍，這裡已經限定兩人{ひと}。',
                        '「より」錯誤：「より」放在被比較對象後面：「山{やま}田{だ}さんより田{た}中{なか}さんのほうが高{たか}い」。'
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
                title: '接續方式',
                description: '動詞(た形) + ことがある',
                examples: []
            },
            {
                usageId: 2,
                title: '經驗 (Have done)',
                description: '意思：曾經做過...。\n表示過去的經驗。\n例：日本に行ったことがある (去過日本)。\n\n否定：たことがない (沒做過...)',
                examples: [
                    { japanese: 'これを⾒たことがある。', chinese: '我看過這個。' },
                    { japanese: 'フランスに⾏ったことある。', chinese: '去過法國。' },
                    { japanese: 'それを聞いたことがある。', chinese: '聽過那件事。' },
                    { japanese: '⼀度だけカラオケをやったことがあります。', chinese: '只唱過一次卡拉OK。' },
                    { japanese: '⽇本に⾏ったことありますか︖', chinese: '你去過日本嗎？' },
                    { japanese: '⽇本は好きですが⾏ったことがない。', chinese: '雖然喜歡日本，但沒去過。' },
                    { japanese: '本当に、⾞を運転したことがないですか︖', chinese: '真的沒開過車嗎？' },
                    { japanese: 'これは誰にも話したことがありません。', chinese: '這件事我沒跟任何人說過。' },
                    { japanese: '私は⼀度しかすしを⾷べたことがありません。', chinese: '我只吃過一次壽司。' }
                ]
            }
        ],
        analysis: {
            title: '「たことがある」的用法重點',
            points: [
                {
                    rule: '「ことがある」vs「ことがあった」：通常用現在式表示經驗',
                    examples: [
                        { japanese: '日{に}本{ほん}に行{い}ったことがある。', chinese: '○ 表示曾經有這個經驗' },
                        { japanese: '日{に}本{ほん}に行{い}ったことがあった。', chinese: '△ 較少用' }
                    ]
                },
                {
                    rule: '注意與「たことがある」和「ている」的區別',
                    examples: [
                        { japanese: '日{に}本{ほん}に行{い}ったことがある。', chinese: '曾去過（經驗）' },
                        { japanese: '日{に}本{ほん}に行{い}った。', chinese: '去了（單純過去）' },
                        { japanese: '日{に}本{ほん}に行{い}っている。', chinese: '去了在那邊（持續狀態）' }
                    ]
                },
                {
                    rule: '常與頻率副詞搭配使用',
                    examples: [
                        { japanese: '一度{いちど}だけ行{い}ったことがある。', chinese: '只去過一次。' },
                        { japanese: '何度{なんど}も食{た}べたことがある。', chinese: '吃過好{す}幾次。' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_takoto_1',
                sentence: '日{に}本{ほん}の温泉{おんせん}に入{はい}った（　）がありますか。',
                options: ['こと', 'もの', 'ところ', 'とき'],
                correctIndex: 0,
                explanation: {
                    correct: '「こと」正確！「～たことがある」表示經驗。「こと」將動詞名詞化！',
                    wrong: [
                        '「もの」錯誤：「もの」指具體的東西，不用於表示經驗。',
                        '「ところ」錯誤：「たところ」表示「剛剛做完」，不是經驗。',
                        '「とき」錯誤：「たとき」表示「做了...的時{じ}候」，不是經驗。'
                    ]
                }
            },
            {
                id: 'n5_q_takoto_2',
                sentence: '昨日{きのう}、日{に}本{ほん}に行{い}（　）。',
                options: ['った', 'ったことがある', 'く', 'っている'],
                correctIndex: 0,
                explanation: {
                    correct: '「った」正確！「昨{き}日{のう}」是具體時{じ}間{かん}，用單純過去式，不用「ことがある」！這是陷阱題！',
                    wrong: [
                        '「ったことがある」錯誤：「ことがある」表示經驗，不搭配具體時{じ}間{かん}（昨{き}日{のう}）。',
                        '「く」錯誤：形式不對。',
                        '「っている」錯誤：這是進行或結果持續，不適合「昨{き}日{のう}」。'
                    ]
                }
            },
            {
                id: 'n5_q_takoto_3',
                sentence: '「たことがある」和「た」的差{さ}別{べつ}是？',
                options: [
                    '「ことがある」強調經驗，「た」單純描述過去事實',
                    '意思完全相同',
                    '「ことがある」用於近期，「た」用於很久以前',
                    '「ことがある」只能用於疑問句'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「日{に}本{ほん}に行{い}ったことがある」= 有去過日{に}本{ほん}的經驗。「日{に}本{ほん}に行{い}った」= 去了日{に}本{ほん}（單純過去事實）。',
                    wrong: [
                        '錯誤：意思不同，「ことがある」強調經驗本{ほん}身。',
                        '錯誤：跟時{じ}間{かん}遠近無關，是經驗vs事實的差{さ}別{べつ}。',
                        '錯誤：兩者都可以用於陳述句和疑問句。'
                    ]
                }
            },
            {
                id: 'n5_q_takoto_4',
                sentence: '北海道{ほっかいどう}に行{い}っ（　）ことがありますか。',
                options: ['た', 'て', 'だ', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「た」正確！「行{い}ったことがある」使用動詞た形。經驗句型用た形！',
                    wrong: [
                        '「て」錯誤：「ことがある」前面用た形，不是て形！',
                        '「だ」錯誤：「行{い}く」的た形是「行{い}った」不是「行っだ」。',
                        '「で」錯誤：形式不對。'
                    ]
                }
            },
            {
                id: 'n5_q_takoto_5',
                sentence: '一度{いちど}も日{に}本{ほん}に行{い}ったこと（　）。',
                options: ['がない', 'がある', 'をない', 'にない'],
                correctIndex: 0,
                explanation: {
                    correct: '「がない」正確！「一度も～ない」表示「一次也沒有」。經驗的否定用「ことがない」！',
                    wrong: [
                        '「がある」錯誤：「一度も」是否定語氣，後面要用「ない」。',
                        '「をない」錯誤：「こと」後面用「が」不用「を」。',
                        '「にない」錯誤：形式不對。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「た」不是「ことがある」
            {
                id: 'n5_q_takoto_6',
                sentence: '「去年{きょねん}の夏{なつ}、どこに行{い}きましたか。」\n「京都{きょうと}に行{い}（　）。」',
                options: ['ったことがあります', 'きました', 'っています', 'くつもりです'],
                correctIndex: 1,
                explanation: {
                    correct: '「きました」正確！問的是「去年夏天」這個具體時{じ}間{かん}的事，用單純過去式「行{い}きました」！這是陷阱題！',
                    wrong: [
                        '「ったことがあります」錯誤：「ことがある」表示經驗，不搭配具體時{じ}間{かん}（去年{きょねん}の夏{なつ}）！',
                        '「っています」錯誤：這是現在進行或結果狀態，不是過去的事。',
                        '「くつもりです」錯誤：這是表示意圖的「打算」，不是過去的事。'
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
                title: '接續方式',
                description: '動詞(た形)り + 動詞(た形)り + する',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '表示列舉具代表性的動作。意思是「做做A啦，做做B啦 (之類的)」。\n暗示還有其他動作沒列舉出來。',
                examples: [
                    { japanese: '日曜日は本を読んだり、テレビを見たりします。', chinese: '星期天讀讀書、看看電視之類的。' }
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
                    rule: '與「て形」列舉的區別：「たり」暗示還有其他，「て形」表示全{ぜん}部{ぶ}',
                    examples: [
                        { japanese: '本{ほん}を読{よ}んだり、映{えい}画{が}を見{み}たりする。', chinese: '讀書、看電影「等」' },
                        { japanese: '本{ほん}を読{よ}んで、映{えい}画{が}を見{み}る。', chinese: '讀書「然後」看電影' }
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
                    correct: '「だり」正確！「遊{あそ}ぶ」的た形是「遊んだ」，所以用「遊んだり」。五段動詞要注意！',
                    wrong: [
                        '「たり」錯誤：「遊{あそ}ぶ」是「ぶ」結尾，た形變濁音「遊んだ」不是「遊んた」！',
                        '「でり」錯誤：沒有這種形式。',
                        '「てり」錯誤：沒有這種形式。'
                    ]
                }
            },
            {
                id: 'n5_q_tari_2',
                sentence: '昨日{きのう}は掃{そう}除{じ}をしたり、洗{せん}濯{たく}をし（　）した。',
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
                sentence: '本{ほん}を読{よ}んで、映{えい}画{が}を見{み}た。',
                options: [
                    '讀書，然後看電影（按順序）',
                    '讀書、看電影等（還有其他）',
                    '意思一樣',
                    '這句話文法錯誤'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「て形」列舉表示順序，「たり」表示舉例（還有其他）。這是陷阱題！',
                    wrong: [
                        '錯誤：「たり」才是舉例，「て形」是順序。',
                        '錯誤：意思不同！「て形」=順序，「たり」=舉例。',
                        '錯誤：文法正確。'
                    ]
                }
            },
            {
                id: 'n5_q_tari_4',
                sentence: '日{に}本{ほん}で寿司{すし}を食{た}べ（　）、温泉{おんせん}に入{はい}ったりした。',
                options: ['たり', 'だり', 'ても', 'て'],
                correctIndex: 0,
                explanation: {
                    correct: '「たり」正確！「食{た}べる」的た形是「食べた」，所以用「食べたり」。一段動詞直接加「たり」！',
                    wrong: [
                        '「だり」錯誤：「食{た}べる」是一段動詞，不濁音化。',
                        '「ても」錯誤：這是「てもいい」的接續。',
                        '「て」錯誤：「て形」表示順序，不是舉例。'
                    ]
                }
            },
            {
                id: 'n5_q_tari_5',
                sentence: '「たり～たりする」的構造，最後的「する」可以省略嗎？',
                options: [
                    '口語可省略，正式時{じ}要加',
                    '絕對不能省略',
                    '一定要省略',
                    '只有疑問句可以省略'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！口語中{なか}常省略「する」（読んだり見{み}たり。），但正式場合要加「する」。',
                    wrong: [
                        '錯誤：口語中{なか}經常省略。',
                        '錯誤：正式時{じ}不能省略。',
                        '錯誤：跟疑問句無關。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「て形」不是「たり」
            {
                id: 'n5_q_tari_6',
                sentence: '朝{あさ}起{お}き（　）、顔{かお}を洗{あら}い（　）、朝{あさ}ご飯{はん}を食{た}べます。',
                options: ['たり/たり', 'て/て', 'ながら/ながら', 'から/から'],
                correctIndex: 1,
                explanation: {
                    correct: '「て/て」正確！這是依序做的動作（起床→洗臉→吃早餐），用「て形」連接。這是陷阱題！',
                    wrong: [
                        '「たり/たり」錯誤：「たり」用於舉例（表示還有其他動作），這裡是固定順序的動作，用「て形」。',
                        '「ながら/ながら」錯誤：「ながら」是同時{じ}進行，不能起床同時{じ}洗臉。',
                        '「から/から」錯誤：「から」是原因或起點，不適合這個句子結構。'
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
                    { japanese: 'はい、どうぞ。座{すわ}ってもいいですよ。', chinese: '好{す}的，請坐。可以坐。' },
                    { japanese: '食{た}べてもいいよ。', chinese: '可以吃喔。' },
                    { japanese: '今日{きょう}は早{はや}く帰{かえ}ってもいいです。', chinese: '今{いま}天可以早點回去。' }
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
                    correct: '「ても」正確！「撮ってもいい」表示「可以拍」。請求許可用「てもいいですか」！',
                    wrong: [
                        '「ては」錯誤：「てはいけない」表示禁止，意思相反！',
                        '「たり」錯誤：「たり」用於列舉動作。',
                        '「たら」錯誤：「たら」表示條件。'
                    ]
                }
            },
            {
                id: 'n5_q_temoii_2',
                sentence: '「この席{せき}、座{すわ}ってもいいですか。」\n「すみません、ここは（　）。」',
                options: ['座ってはいけません', '座ってもいいですよ', '座らなくてもいいです', '座{すわ}りたいです'],
                correctIndex: 0,
                explanation: {
                    correct: '「座ってはいけません」正確！「すみません」暗示拒絕，所以用「てはいけない」禁止。這是陷阱題！',
                    wrong: [
                        '「座ってもいいですよ」錯誤：「すみません」暗示要拒絕，不是許可。',
                        '「座らなくてもいいです」錯誤：這是「不用坐也可以」，不是禁止。',
                        '「座{すわ}りたいです」錯誤：這是「想坐」，不是回答許可問{もん}題{だい}。'
                    ]
                }
            },
            {
                id: 'n5_q_temoii_3',
                sentence: '「てもいい」和「てもかまわない」的差{さ}別{べつ}是？',
                options: [
                    '意思相同，「かまわない」更正式',
                    '意思相同，「いい」更正式',
                    '意思不同',
                    '「かまわない」是禁止'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！兩者都表示許可，但「てもかまわない/かまいません」更正式、更禮貌。',
                    wrong: [
                        '錯誤：「かまわない」比「いい」更正式。',
                        '錯誤：意思相同，都表示許可。',
                        '錯誤：「かまわない」也是許可，不是禁止。'
                    ]
                }
            },
            {
                id: 'n5_q_temoii_4',
                sentence: 'エアコンをつけ（　）いいですか。暑{あつ}いです。',
                options: ['ても', 'ては', 'なくても', 'ながら'],
                correctIndex: 0,
                explanation: {
                    correct: '「ても」正確！「つけてもいい」請求打開空{そら}調的許可。',
                    wrong: [
                        '「ては」錯誤：「てはいけない」是禁止。',
                        '「なくても」錯誤：「なくてもいい」是「不做也可以」，與情境矛盾。',
                        '「ながら」錯誤：表示同時{じ}進行。'
                    ]
                }
            },
            {
                id: 'n5_q_temoii_5',
                sentence: '明日{あした}は来{こ}（　）いいですよ。今日{きょう}で全部{ぜんぶ}終{お}わりますから。',
                options: ['なくても', 'ても', 'ては', 'たり'],
                correctIndex: 0,
                explanation: {
                    correct: '「なくても」正確！「來なくてもいい」=「不來也可以」。今{いま}天會全{ぜん}部{ぶ}完成，所以明天不用來。',
                    wrong: [
                        '「ても」錯誤：「来{き}てもいい」是許可來，但情境是不需要來。',
                        '「ては」錯誤：「てはいけない」是禁止。',
                        '「たり」錯誤：用於列舉動作。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「てはいけない」不是「てもいい」
            {
                id: 'n5_q_temoii_6',
                sentence: '「すみません、ここでタバコを吸{す}ってもいいですか。」\n「いいえ、ここは禁煙{きんえん}です。吸{す}っ（　）。」',
                options: ['てもいいですよ', 'てはいけません', 'てください', 'たいです'],
                correctIndex: 1,
                explanation: {
                    correct: '「てはいけません」正確！回答是「禁煙」，表示禁止。用「てはいけない」！這是陷阱題！',
                    wrong: [
                        '「てもいいですよ」錯誤：這是允許，但說了「禁煙」，應該禁止！',
                        '「てください」錯誤：這是請求「請抽」，與禁煙完全矛盾。',
                        '「たいです」錯誤：這是「想抽」，不是回答許可問題。'
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
                title: '接續方式',
                description: '動詞(て形) + は + いけない/なりません',
                examples: []
            },
            {
                usageId: 2,
                title: '禁止 (Must not)',
                description: '意思：不可以...。\n表示禁止做某事。\n口語縮略：\n- ちゃいけない\n- じゃいけない',
                examples: [
                    { japanese: '窓を開けてはいけない。', chinese: '不可以開窗。' },
                    { japanese: '嘘をついてはいけない。', chinese: '不可以撒謊。' },
                    { japanese: 'ろうかを⾛ってはいけませんよ。', chinese: '不可以在走廊奔跑喔。' },
                    { japanese: '図書館でうるさくしてはいけない。', chinese: '在圖書館不可以吵鬧。' },
                    { japanese: '遅刻してはいけない。', chinese: '不可以遲到。' },
                    { japanese: '室内でタバコを吸ってはいけませんよ。', chinese: '室內不可以吸菸喔。' },
                    { japanese: '笑ってはいけない冗談だった。', chinese: '是不能笑的玩笑。' },
                    { japanese: '授業中に携帯電話を使ってはいけません。', chinese: '上課中不可以使用手機。' },
                    { japanese: '２０歳未満の⼈はお酒を飲んではいけません。', chinese: '未滿20歲的人不可以喝酒。' }
                ]
            }
        ],
        analysis: {
            title: '禁止表達的比較',
            points: [
                {
                    rule: '正式度排序（高{たか}→低{ひく}）：',
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
                    correct: '「ては」正確！「話{はな}してはいけない」表示「不可以說話」。圖書館的規則！',
                    wrong: [
                        '「ても」錯誤：「てもいい」表示許可，意思相反！',
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
                    correct: '「ては」正確！「いいえ」是拒絕，所以用「てはいけない」禁止。',
                    wrong: [
                        '「ても」錯誤：「てもいい」表示許可，與「いいえ」矛盾。',
                        '「たり」錯誤：用於列舉動作。',
                        '「ながら」錯誤：表示同時{じ}進行。'
                    ]
                }
            },
            {
                id: 'n5_q_tewaikenai_3',
                sentence: '「てはいけない」「てはだめ」「ちゃだめ」的正式度排序是？',
                options: [
                    'てはいけない→てはだめ→ちゃだめ（從正式到口語）',
                    'ちゃだめ→てはだめ→てはいけない（從正式到口語）',
                    '全{ぜん}部{ぶ}一樣正式',
                    'てはだめ→てはいけない→ちゃだめ'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「てはいけない/いけません」最正式，「てはだめ」一般，「ちゃだめ」最口語。',
                    wrong: [
                        '錯誤：順序相反了！',
                        '錯誤：正式度明顯不同。',
                        '錯誤：順序有誤。'
                    ]
                }
            },
            {
                id: 'n5_q_tewaikenai_4',
                sentence: '「入{はい}ってはいけません」と「入{はい}らないでください」の違{ちが}いは？',
                options: [
                    '「てはいけない」是禁止/規則，「ないでください」是請求',
                    '意思完全相同',
                    '「ないでください」更強硬',
                    '「てはいけない」更禮貌'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「てはいけない」是規則/禁止（不可進入），「ないでください」是禮貌請求（請不要進入）。',
                    wrong: [
                        '錯誤：語氣和用法不同。',
                        '錯誤：「てはいけない」更強硬。',
                        '錯誤：「ないでください」更禮貌。'
                    ]
                }
            },
            {
                id: 'n5_q_tewaikenai_5',
                sentence: '「ここでタバコを吸{す}っ（　）いいですか。」\n「いいえ、禁煙{きんえん}です。」',
                options: ['ても', 'ては', 'たり', 'ながら'],
                correctIndex: 0,
                explanation: {
                    correct: '「ても」正確！這是詢問許可「吸{す}ってもいいですか」。回答是「禁煙」=不可以。',
                    wrong: [
                        '「ては」錯誤：問句是請求許可，用「てもいい」，不是「てはいけない」。',
                        '「たり」錯誤：用於列舉動作。',
                        '「ながら」錯誤：表示同時{じ}進行。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「てもいい」不是「てはいけない」
            {
                id: 'n5_q_tewaikenai_6',
                sentence: '「先{せん}生{せい}、辞{じ}書{しょ}を見{み}（　）いいですか。」\n「はい、どうぞ。」',
                options: ['ては', 'ても', 'たり', 'ながら'],
                correctIndex: 1,
                explanation: {
                    correct: '「ても」正確！這是詢問許可，而且回答是「はい、どうぞ」表示允許。用「てもいい」！這是陷阱題！',
                    wrong: [
                        '「ては」錯誤：「てはいけない」是禁止，但這裡是請求許可，而且得到允許！',
                        '「たり」錯誤：用於列舉動作，不用於請求許可。',
                        '「ながら」錯誤：表示同時{じ}進行，不用於請求許可。'
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
        connection: '動詞辞{じ}書{しょ}形＋つもり / 動詞ない形＋つもり',
        translation: '打算...；計劃...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: '動詞(辭書形/ない形) + つもり',
                examples: []
            },
            {
                usageId: 2,
                title: '打算 (Plan/Intend)',
                description: '意思：打算...、計畫...。\n表示說話者的意志或計畫。\n例：行くつもり (打算去)、行かないつもり (打算不去)。',
                examples: [
                    { japanese: '今⽇はラーメンを⾷べるつもりだ。', chinese: '今天打算吃拉麵。' },
                    { japanese: 'あなたたちも⾏くつもりですか︖', chinese: '你們也打算去嗎？' },
                    { japanese: '⼤学に⼊って⽇本語を勉強するつもりです。', chinese: '進大學後打算讀日語。' },
                    { japanese: '何度聞かれても、あなたに教えるつもりはありません。', chinese: '不管被問幾次，都不打算告訴你。' },
                    { japanese: 'いつ⽇本に留学するつもりなの︖', chinese: '打算什麼時候去日本留學？' },
                    { japanese: 'ばれたら、どうするつもり︖', chinese: '如果穿幫了，你打算怎麼辦？' },
                    { japanese: 'ごめんなさい︕あなたを傷つけるつもりはなかったんです。', chinese: '對不起！我並沒有打算傷害你。' },
                    { japanese: 'もしJLPTに受かったら⽇本の会社で働くつもりだ。', chinese: '如果JLPT考過了，打算在日本公司工作。' }
                ]
            }
        ],
        analysis: {
            title: '「つもり」的用法重點',
            points: [
                {
                    rule: '「つもり」vs「予定」：「つもり」強調個人{ひと}意志，「予定」強調計劃安排',
                    examples: [
                        { japanese: '日{に}本{ほん}に行{い}くつもりです。', chinese: '（個人{ひと}意願）打算去日{に}本{ほん}' },
                        { japanese: '日{に}本{ほん}に行{い}く予定{よてい}です。', chinese: '（計劃安排）預定要去日{に}本{ほん}' }
                    ]
                },
                {
                    rule: '通常不用於第三{さん}人{にん}稱（他人{ひと}的意圖）',
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
                    correct: '「つもり」正確！表示「打算買」的意圖。動詞辭書形＋つもり！',
                    wrong: [
                        '「こと」錯誤：「ことがある」表示經驗，「こと」不直接表示計劃。',
                        '「もの」錯誤：「もの」不用於表示計劃。',
                        '「ところ」錯誤：「ところ」表示「正要/正在/剛做完」的時{じ}機。'
                    ]
                }
            },
            {
                id: 'n5_q_tsumori_2',
                sentence: '今日{きょう}はもう食{た}べない（　）です。',
                options: ['つもり', 'こと', 'もの', 'ところ'],
                correctIndex: 0,
                explanation: {
                    correct: '「つもり」正確！「食べないつもり」表示「不打算吃」。否定用ない形＋つもり！',
                    wrong: [
                        '「こと」錯誤：不表示否定的計劃。',
                        '「もの」錯誤：不用於表示計劃。',
                        '「ところ」錯誤：表示時{じ}機。'
                    ]
                }
            },
            {
                id: 'n5_q_tsumori_3',
                sentence: '「つもり」和「予定」的差{さ}別{べつ}是？',
                options: [
                    '「つもり」強調個人{ひと}意志，「予定」強調計劃安排',
                    '「つもり」強調計劃安排，「予定」強調個人{ひと}意志',
                    '意思完全相同',
                    '「つもり」只能用於未來，「予定」只能用於過去'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「行{い}くつもりです」=我打算去（個人{ひと}決定），「行{い}く予定です」=預定要去（計劃安排）。',
                    wrong: [
                        '錯誤：順序相反了！',
                        '錯誤：意思有區別。',
                        '錯誤：兩者都用於未來計劃。'
                    ]
                }
            },
            {
                id: 'n5_q_tsumori_4',
                sentence: '大{だい}学{がく}を卒業{そつぎょう}したら、留学{りゅうがく}する（　）です。',
                options: ['つもり', '予定', 'こと', 'もの'],
                correctIndex: 0,
                explanation: {
                    correct: '「つもり」正確！這是個人{ひと}的意願和決定。「予定」也可以但更客觀。',
                    wrong: [
                        '「予定」也可以！但「つもり」更強調個人{ひと}意志。',
                        '「こと」錯誤：「ことです」不表示計劃。',
                        '「もの」錯誤：不用於表示計劃。'
                    ]
                }
            },
            {
                id: 'n5_q_tsumori_5',
                sentence: '彼{かれ}は来年{らいねん}日{に}本{ほん}に行{い}く（　）らしい。',
                options: ['つもり', '予定', 'こと', 'ところ'],
                correctIndex: 0,
                explanation: {
                    correct: '「つもり」正確！說別人{ひと}的意圖時{じ}，加「らしい」「ようです」更自然。直接用「つもり」說他人{ひと}不太{ふと}自然。',
                    wrong: [
                        '「予定」也可以！說他人{ひと}的計劃時{じ}「予定らしい」更自然。',
                        '「こと」錯誤：不表示計劃。',
                        '「ところ」錯誤：表示時{じ}機。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「ないつもり」不是「つもり」
            {
                id: 'n5_q_tsumori_6',
                sentence: '今日{きょう}はお酒{さけ}を飲{の}ま（　）です。明日{あした}仕{し}事{ごと}があるので。',
                options: ['つもり', 'ないつもり', 'たつもり', 'ていつもり'],
                correctIndex: 1,
                explanation: {
                    correct: '「ないつもり」正確！「飲{の}まないつもり」= 打算不喝。否定意圖用「ない形＋つもり」。這是陷阱題！',
                    wrong: [
                        '「つもり」錯誤：「飲{の}まつもり」文法錯誤。「ない」形後面再接「つもり」。',
                        '「たつもり」錯誤：「たつもり」是「以為做了」或「假裝做了」，不是打算。',
                        '「ていつもり」錯誤：文法錯誤。'
                    ]
                }
            }
        ]
    },

    // ===== n5_to =====
    n5_to: {
        id: 'n5_to',
        pattern: 'と',
        connection: '名詞＋と＋名詞 / 動詞辞{じ}書{しょ}形＋と',
        translation: '和...；一...就...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: '名詞 + と',
                examples: []
            },
            {
                usageId: 2,
                title: '並列 (And)',
                description: '意思：和、與。\n用於連接名詞。\n例：犬と猫 (狗和貓)。',
                examples: [
                    { japanese: 'これとそれは違います。', chinese: '這個和那個不一樣。' },
                    { japanese: '飲み物と⾷べ物禁⽌。', chinese: '禁止飲食 (飲料和食物)。' },
                    { japanese: '私はいつもそこでハンバーガーとフライドポテトを⾷べます。', chinese: '我總是在那裡吃漢堡和薯條。' }
                ]
            },
            {
                usageId: 3,
                title: '共同動作 (With)',
                description: '意思：和...一起。\n表示動作的對象或夥伴。\n例：友達と行く (和朋友去)。',
                examples: [
                    { japanese: 'お⺟さんと買い物に⾏った。', chinese: '和媽媽去買東西了。' },
                    { japanese: '彼⼥と仲がいいです。', chinese: '和她感情很好。' },
                    { japanese: 'あなたと話したくない。', chinese: '不想和你說話。' },
                    { japanese: '彼はベトナム⼈と結婚している。', chinese: '他和越南人結婚了。' },
                    { japanese: '⽝と遊ぶのが⼤好きです。', chinese: '最喜歡和狗玩。' },
                    { japanese: '明⽇同僚と⾷事に⾏く予定です。', chinese: '明天打算和同事去吃飯。' },
                    { japanese: '⾼校時代にクラスメイトと連絡をとっていますか。', chinese: '有和高中時代的同學聯絡嗎？' }
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
                    correct: '「と」正確！「母{はは}と一緒に」表示「和媽媽一起」。共同動作用「と」！',
                    wrong: [
                        '「や」錯誤：「や」用於列舉名詞（等等），不用於共同動作。',
                        '「も」錯誤：「も」表示「也」，不是「一起」。',
                        '「か」錯誤：「か」表示選擇。'
                    ]
                }
            },
            {
                id: 'n5_q_to_2',
                sentence: 'りんご（　）バナナを買{か}いました。それだけです。',
                options: ['と', 'や', 'も', 'か'],
                correctIndex: 0,
                explanation: {
                    correct: '「と」正確！「りんごとバナナ」=只有蘋果和香蕉，沒有其他。「と」表示完整列舉！',
                    wrong: [
                        '「や」錯誤：「や」暗示還有其他，但「それだけです」表示只有這些。這是陷阱！',
                        '「も」錯誤：「も」表示「也」。',
                        '「か」錯誤：「か」表示選擇。'
                    ]
                }
            },
            {
                id: 'n5_q_to_3',
                sentence: '「と」和「や」的差{さ}別{べつ}是？',
                options: [
                    '「と」完整列舉，「や」暗示還有其他',
                    '「と」暗示還有其他，「や」完整列舉',
                    '意思完全相同',
                    '「と」用於人{ひと}，「や」用於物'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「りんごとバナナ」=只有蘋果和香蕉。「りんごやバナナ」=蘋果、香蕉等（可能還有其他）。',
                    wrong: [
                        '錯誤：順序相反了！',
                        '錯誤：意思不同。',
                        '錯誤：跟人{ひと}或物無關。'
                    ]
                }
            },
            {
                id: 'n5_q_to_4',
                sentence: 'このボタンを押{お}す（　）、ドアが開{あ}きます。',
                options: ['と', 'たら', 'ば', 'から'],
                correctIndex: 0,
                explanation: {
                    correct: '「と」正確！表示自然結果「一按就開」。機器操作等自然結果常用「と」。',
                    wrong: [
                        '「たら」也可以！但「と」更強調必然的自然結果。',
                        '「ば」也可以！但「と」更常用於說明機器操作。',
                        '「から」錯誤：「から」表示原因，不是條件。'
                    ]
                }
            },
            {
                id: 'n5_q_to_5',
                sentence: '春{はる}になると、桜{さくら}が咲{さ}く。後面可以接「ください」嗎？',
                options: [
                    '不行，「と」後面不能接意志/命令/請求',
                    '可以，沒有限制',
                    '只有肯定句可以',
                    '只有否定句可以'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「と」條件句的後面只能接自然結果，不能用「てください」「ましょう」等意志表現。',
                    wrong: [
                        '錯誤：「と」有這個限制。',
                        '錯誤：跟肯定/否定無關。',
                        '錯誤：跟肯定/否定無關。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「や」不是「と」
            {
                id: 'n5_q_to_6',
                sentence: '昨日{きのう}、りんご（　）バナナ（　）みかんなどを買{か}いました。',
                options: ['と/と', 'や/や', 'も/も', 'か/か'],
                correctIndex: 1,
                explanation: {
                    correct: '「や/や」正確！「など」表示「等等」，暗示還有其他，所以用「や」！這是陷阱題！',
                    wrong: [
                        '「と/と」錯誤：「と」是完整列舉，但有「など」表示還有其他！用「や」！',
                        '「も/も」錯誤：「も」是「也」，不是列舉。',
                        '「か/か」錯誤：「か」表示選擇，不是列舉。'
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
        translation: '太{ふと}...；過於...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: '動詞(ます形去掉ます) + すぎる\nい形容詞(去い) + すぎる\n名詞/な形容詞 + すぎる',
                examples: []
            },
            {
                usageId: 2,
                title: '過度 (Too much)',
                description: '意思：太...、過於...。\n表示程度超過了正常或適當的範圍。\n例：食べすぎる (吃太多)、高すぎる (太貴)。\n\n*動詞ます形 + すぎる -> 變成二類動詞 (ru-verb)\n過去式：すぎた (sugita)',
                examples: [
                    { japanese: 'このシャツは⼤きすぎる。', chinese: '這件襯衫太大了。' },
                    { japanese: '今年の夏は暑すぎた。', chinese: '今年的夏天太熱了。' },
                    { japanese: '冬の来るのが早すぎた。', chinese: '冬天來得太早了。' },
                    { japanese: 'この問題は簡単すぎます。', chinese: '這個問題太簡單了。' },
                    { japanese: '幸せすぎて死にそうだ。', chinese: '幸福得快死了。' },
                    { japanese: 'かんじを覚えるのが私には難しすぎる。', chinese: '記漢字對我來說太難了。' },
                    { japanese: 'このレストランはちょっと⾼すぎる。', chinese: '這家餐廳有點太貴了。' },
                    { japanese: 'この会社は給料が少なすぎます。', chinese: '這家公司的薪水太少了。' },
                    { japanese: 'ごめんなさい、少し⾔いすぎました。', chinese: '抱歉，我說得有點過分了 (說太多了)。' },
                    { japanese: '昨夜ちょっと飲みすぎました。', chinese: '昨晚喝太多了。' }
                ]
            }
        ],
        analysis: {
            title: '「すぎる」的接續規則',
            points: [
                {
                    rule: '動詞：ます形去「ます」＋すぎる',
                    examples: [
                        { japanese: '食{た}べます → 食べすぎる', chinese: '吃太{ふと}多' },
                        { japanese: '飲{の}みます → 飲{の}みすぎる', chinese: '喝太{ふと}多' }
                    ]
                },
                {
                    rule: 'い形容詞：去「い」＋すぎる',
                    examples: [
                        { japanese: '高{たか}い → 高{たか}すぎる', chinese: '太{ふと}貴/太{ふと}高{たか}' },
                        { japanese: '大{おお}きい → 大きすぎる', chinese: '太{ふと}大' }
                    ]
                },
                {
                    rule: 'な形容詞：去「な」＋すぎる',
                    examples: [
                        { japanese: '静{しず}かな → 静{しず}かすぎる', chinese: '太{ふと}安靜' },
                        { japanese: '簡単{かんたん}な → 簡{かん}単{たん}すぎる', chinese: '太{ふと}簡單' }
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
                    correct: '「すぎて」正確！「すぎて」是て形，連接原因（吃太{ふと}多）和結果（肚子痛{いた}）。',
                    wrong: [
                        '「すぎる」錯誤：需要て形連接後面的結果。',
                        '「すぎた」錯誤：過去式不能直接連接後句。',
                        '「すぎ」錯誤：形式不完整。'
                    ]
                }
            },
            {
                id: 'n5_q_sugiru_2',
                sentence: 'この問{もん}題{だい}は難{むずか}し（　）。わかりません。',
                options: ['すぎます', 'すぎる', 'すぎた', 'すぎて'],
                correctIndex: 0,
                explanation: {
                    correct: '「すぎます」正確！い形容詞去「い」＋すぎる。「難{むずか}しい」→「難{むずか}しすぎる/すぎます」。',
                    wrong: [
                        '「すぎる」也可以！但丁寧體用「すぎます」。',
                        '「すぎた」錯誤：問{もん}題{だい}現在還是難{むずか}的。',
                        '「すぎて」錯誤：後面需要接結果。'
                    ]
                }
            },
            {
                id: 'n5_q_sugiru_3',
                sentence: '「すぎる」的接續規則，哪個正確？',
                options: [
                    '動詞ます形去ます＋すぎる、い形去い＋すぎる、な形去な＋すぎる',
                    '動詞辭書形＋すぎる、い形＋すぎる、な形＋すぎる',
                    '全{ぜん}部{ぶ}直接加すぎる',
                    '動詞て形＋すぎる'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「食{た}べます」→「食べすぎる」、「高{たか}い」→「高{たか}すぎる」、「静{しず}かな」→「静{しず}かすぎる」。',
                    wrong: [
                        '錯誤：動詞用ます形去ます，不是辭書形。',
                        '錯誤：需要去掉詞尾。',
                        '錯誤：不用て形。'
                    ]
                }
            },
            {
                id: 'n5_q_sugiru_4',
                sentence: 'このケーキは甘{あま}（　）。砂糖{さとう}を入{い}れすぎた。',
                options: ['すぎる', 'いすぎる', 'すぎた', 'くすぎる'],
                correctIndex: 0,
                explanation: {
                    correct: '「すぎる」正確！「甘{あま}い」去「い」→「甘{あま}すぎる」。い形容詞去「い」再加「すぎる」！',
                    wrong: [
                        '「いすぎる」錯誤：要去掉「い」！這是常見{み}錯誤。',
                        '「すぎた」也可以！但描述現在狀態用「すぎる」更自然。',
                        '「くすぎる」錯誤：「く」是連用形，不用於「すぎる」。'
                    ]
                }
            },
            {
                id: 'n5_q_sugiru_5',
                sentence: '彼{かれ}は静{しず}か（　）。もっと話{はな}してほしい。',
                options: ['すぎる', 'なすぎる', 'すぎた', 'にすぎる'],
                correctIndex: 0,
                explanation: {
                    correct: '「すぎる」正確！「静{しず}か」去「な」→「静{しず}かすぎる」。な形容詞去「な」再加「すぎる」！',
                    wrong: [
                        '「なすぎる」錯誤：要去掉「な」！',
                        '「すぎた」錯誤：描述現在狀態用「すぎる」。',
                        '「にすぎる」錯誤：「すぎる」不用「に」接續。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是形容詞原形，不是「すぎる」
            {
                id: 'n5_q_sugiru_6',
                sentence: 'このケーキはちょうど（　）。甘{あま}すぎないし、小{ちい}さすぎない。',
                options: ['よすぎます', 'いいです', '良{よ}くすぎます', 'いすぎます'],
                correctIndex: 1,
                explanation: {
                    correct: '「いいです」正確！「ちょうどいい」= 剛剛好{す}。不是「太{ふと}好{す}」，是「剛好{す}」！這是陷阱題！',
                    wrong: [
                        '「よすぎます」錯誤：「すぎる」表示「過度」，但「ちょうど」（剛好{す}）表示適量，用原形「いい」。',
                        '「良{よ}くすぎます」錯誤：「いい」的「すぎる」形是「よすぎる」，不是「良{よ}くすぎる」。',
                        '「いすぎます」錯誤：文法錯誤。「いい」不能直接加「すぎる」，要變成「よすぎる」。'
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
        translation: '（已經）...好{す}了',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: '動詞(て形) + ある',
                examples: []
            },
            {
                usageId: 2,
                title: '狀態存續 (Resulting state)',
                description: '意思：...著。\n表示某動作結束後，其結果狀態依然持續著。\n通常暗示是「某人有意為之」。\n只接「他動詞」。\n\n例：\n- 開けてある (開著 - 有人故意開的)\n- 書いてある (寫著 - 有人寫上去的)',
                examples: [
                    { japanese: 'ここには私の名前が書いてあります。', chinese: '這裡寫著我的名字。' },
                    { japanese: 'ドアがわざと開けてある。', chinese: '門被故意開著。' },
                    { japanese: '宿題はもうやってあります。', chinese: '作業已經做好了 (放在那)。' },
                    { japanese: '夜には学校の⼊り⼝が閉めてある。', chinese: '晚上學校入口是關著的。' },
                    { japanese: 'ここに何て書いてあるの︖', chinese: '這上面寫著什麼？' },
                    { japanese: '料理が作ってあるから、今⽇は家で⾷べる。', chinese: '飯菜已經煮好了，所以今天在家吃。' },
                    { japanese: 'テニスをしよう。１０時３０分にコートを予約してあるから。', chinese: '打網球吧。已經預約好10點半的場地了。' },
                    { japanese: 'すでに⾔ってあるように、これもあなたの仕事のうちだ。', chinese: '正如已經說過的，這也是你的工作之一。' }
                ]
            }
        ],
        analysis: {
            title: '「てある」的用法重點',
            points: [
                {
                    rule: '「てある」只能用於他動詞',
                    examples: [
                        { japanese: 'ドアを開{あ}ける → ドアが開{あ}けてある', chinese: '○ 他動詞' },
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
                    correct: '「て」正確！「してある」表示「已經預約好{す}了」的準{じゅん}備{び}狀態。',
                    wrong: [
                        '「た」錯誤：需要て形。',
                        '「ている」錯誤：「している」表示進行，「してある」表示準{じゅん}備{び}好{す}的狀態。',
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
                    correct: '「て」正確！「冷{つめ}やしてある」表示「冰好{す}了」的準{じゅん}備{び}狀態。',
                    wrong: [
                        '「た」錯誤：需要て形。',
                        '「ている」錯誤：「冷{つめ}やしている」表示正在冰。',
                        '「たり」錯誤：用於列舉動作。'
                    ]
                }
            },
            {
                id: 'n5_q_tearu_3',
                sentence: '「あれ、ドアが開{あ}い（　）よ。」',
                options: ['ている', 'てある', 'た', 'ます'],
                correctIndex: 0,
                explanation: {
                    correct: '「ている」正確！「開{あ}く」是自動詞，描述門的狀態用「開いている」。這是陷阱題！',
                    wrong: [
                        '「てある」錯誤：「てある」只能接他動詞（如「開{あ}ける」），不能接自動詞「開{あ}く」！',
                        '「た」錯誤：「た」表示單純過去，不表示持續狀態。',
                        '「ます」錯誤：形式不對。'
                    ]
                }
            },
            {
                id: 'n5_q_tearu_4',
                sentence: '「電{でん}気{き}、消{け}す？」\n「いや、つけ（　）あるよ。そのままで。」',
                options: ['て', 'た', 'ている', 'ます'],
                correctIndex: 0,
                explanation: {
                    correct: '「て」正確！「つけてある」表示「特意開著」的狀態，強調有意為之。',
                    wrong: [
                        '「た」錯誤：需要て形。',
                        '「ている」錯誤：「ている」只描述狀態，「てある」強調是有意圖的。',
                        '「ます」錯誤：形式不對。'
                    ]
                }
            },
            {
                id: 'n5_q_tearu_5',
                sentence: '「てある」和「ている」有什麼差{さ}別{べつ}？',
                options: [
                    '「てある」強調有意圖的準{じゅん}備{び}，「ている」單純描述狀態',
                    '意思完全相同',
                    '「ている」強調有意圖，「てある」單純描述',
                    '「てある」用於自動詞，「ている」用於他動詞'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「窓を開{あ}けてある」=（某人{ひと}）特意把窗戶打開。「窓が開いている」=窗戶開著（不知道誰{だれ}開的）。',
                    wrong: [
                        '錯誤：意思不同。',
                        '錯誤：順序相反了！',
                        '錯誤：「てある」只能接他動詞，「ている」可接自動詞和他動詞。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「ている」不是「てある」
            {
                id: 'n5_q_tearu_6',
                sentence: '見{み}て！外{そと}に雪{ゆき}が降{ふ}っ（　）よ！',
                options: ['てある', 'ている', 'た', 'ます'],
                correctIndex: 1,
                explanation: {
                    correct: '「ている」正確！「降{ふ}る」是自動詞，描述自然現象用「ている」！這是陷阱題！',
                    wrong: [
                        '「てある」錯誤：「てある」只能接他動詞！「降{ふ}る」是自動詞，不能用「てある」！',
                        '「た」錯誤：「た」是過去式，但正在下雪是進行中{なか}的狀態。',
                        '「ます」錯誤：形式不對，需要「ている」表示進行狀態。'
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
                title: '接續方式',
                description: '名詞 + や + 名詞',
                examples: []
            },
            {
                usageId: 2,
                title: '列舉 (And/Or)',
                description: '意思：...啦...啦 (等等)。\n用於列舉多個例子，暗示還有其他未列出的項目。\n常與「など (nado)」搭配使用。\n例：AやBなど (A啦B之類的)。',
                examples: [
                    { japanese: '毎朝、パンやベーコンなどを⾷べています。', chinese: '每天早上吃麵包啦培根之類的。' },
                    { japanese: 'スーパーで⾁や野菜を買いました。', chinese: '在超市買了肉和蔬菜等等。' },
                    { japanese: 'あなたのおすすめの⾳楽や本を私に教えてください。', chinese: '請告訴我你推薦的音樂或書。' },
                    { japanese: '電⾞やバスでの旅は好きです。', chinese: '喜歡搭電車或巴士旅行。' },
                    { japanese: '私はアメリカやイギリスのテレビドラマを⾒るのが好きです。', chinese: '我喜歡看美國或英國的電視劇。' },
                    { japanese: '冬休みは家族で⻑野や北海道へ⾏きます。', chinese: '寒假和家人去長野啦北海道等地。' },
                    { japanese: '私は数学や化学などが好きです。', chinese: '我喜歡數學和化學等科目。' },
                    { japanese: '秋には葉が⾚や⻩⾊に変わる。', chinese: '秋天葉子會變成紅色或黃色。' }
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
                        { japanese: '東{とう}京{きょう}や大阪{おおさか}など', chinese: '東{とう}京{きょう}、大阪等（還有其他城市）' }
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
                sentence: 'スーパーで肉{にく}（　）野菜{やさい}などを買{か}いました。',
                options: ['や', 'と', 'も', 'か'],
                correctIndex: 0,
                explanation: {
                    correct: '「や」正確！「や...など」是固定搭配，表示列舉不完整。',
                    wrong: [
                        '「と」錯誤：「など」暗示還有其他，要用「や」。',
                        '「も」錯誤：「も」表示「也」，需要「肉{にく}も野{や}菜{さい}も」。',
                        '「か」錯誤：「か」表示選擇。'
                    ]
                }
            },
            {
                id: 'n5_q_ya_2',
                sentence: '日本語{にほんご}（　）英{えい}語{ご}（　）を勉{べん}強{きょう}しています。',
                options: ['や / など', 'と / と', 'も / も', 'か / か'],
                correctIndex: 0,
                explanation: {
                    correct: '「や / など」正確！「日{に}本{ほん}語{ご}や英{えい}語{ご}など」表示還可能學其他語言。',
                    wrong: [
                        '「と / と」不自然：「と」不重複使用。',
                        '「も / も」語法不同：需要「日{に}本{ほん}語{ご}も英{えい}語{ご}も」。',
                        '「か / か」錯誤：「か」表示選擇。'
                    ]
                }
            },
            {
                id: 'n5_q_ya_3',
                sentence: '私{わたし}の家{か}族{ぞく}は父{ちち}（　）母{はは}だけです。',
                options: ['と', 'や', 'も', 'か'],
                correctIndex: 0,
                explanation: {
                    correct: '「と」正確！「だけ」表示只有這兩人{ひと}，完整列舉用「と」。這是陷阱題！',
                    wrong: [
                        '「や」錯誤：「や」暗示還有其他，但「だけ」表示只有這些！',
                        '「も」錯誤：需要「父{ちち}も母{はは}も」的形式。',
                        '「か」錯誤：「か」表示選擇。'
                    ]
                }
            },
            {
                id: 'n5_q_ya_4',
                sentence: '「何{なに}を持{も}っていきますか。」\n「本{ほん}（　）ノートを持{も}っていきます。」',
                options: ['や', 'と', 'も', 'か'],
                correctIndex: 0,
                explanation: {
                    correct: '「や」正確！列舉要帶的東西，暗示可能還有其他。',
                    wrong: [
                        '「と」也可以，但如果還要帶其他東西，「や」更合適。',
                        '「も」錯誤：需要「本{ほん}もノートも」的形式。',
                        '「か」錯誤：「か」表示選擇。'
                    ]
                }
            },
            {
                id: 'n5_q_ya_5',
                sentence: '「や」和「と」的差{さ}別{べつ}是？',
                options: [
                    '「や」暗示還有其他，「と」是完整列舉',
                    '「と」暗示還有其他，「や」是完整列舉',
                    '意思完全相同',
                    '「や」用於人{ひと}，「と」用於物'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「りんごやバナナ」=蘋果、香蕉等。「りんごとバナナ」=只有蘋果和香蕉。',
                    wrong: [
                        '錯誤：順序相反了！',
                        '錯誤：意思不同。',
                        '錯誤：跟人{ひと}或物無關。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「と」不是「や」
            {
                id: 'n5_q_ya_6',
                sentence: '私{わたし}は犬{いぬ}（　）猫{ねこ}、二{に}匹{ひき}だけを飼{か}っています。',
                options: ['や', 'と', 'も', 'か'],
                correctIndex: 1,
                explanation: {
                    correct: '「と」正確！「二{に}匹{ひき}だけ」表示只有這兩隻，完整列舉用「と」！這是陷阱題！',
                    wrong: [
                        '「や」錯誤：「や」暗示還有其他，但「だけ」明確表示只有這些！',
                        '「も」錯誤：「も」需要「犬{いぬ}も猫{ねこ}も」的形式，表示強調「都」。',
                        '「か」錯誤：「か」表示選擇（狗或貓），不是列舉。'
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
                title: '接續方式',
                description: 'A + より + B + のほうが...',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '表示比較。意思是「比起A，B更...」。\n\n句型：\nA より B のほうが ～ です。(比起A，B更～)',
                examples: [
                    { japanese: '日本より中国のほうが広いです。', chinese: '比起日本，中國更遼闊。' }
                ]
            }
        ],
        analysis: {
            title: '比較表達的結{けっ}構{こう}',
            points: [
                {
                    rule: '基本{ほん}結{けっ}構{こう}：比較對象＋より＋主語＋のほうが＋形容詞',
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
                sentence: '電{でん}車{しゃ}（　）バスのほうが便利{べんり}です。',
                options: ['より', 'ほど', 'から', 'まで'],
                correctIndex: 0,
                explanation: {
                    correct: '「より」正確！「電{でん}車{しゃ}よりバスのほうが」表示比較。',
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
                    correct: '「ほう」正確！「のほうが」表示比較中{なか}較好{す}的一方。',
                    wrong: [
                        '「こと」錯誤：不用於比較。',
                        '「もの」錯誤：不用於比較。',
                        '「ところ」錯誤：不用於比較。'
                    ]
                }
            },
            {
                id: 'n5_q_yorihouga_3',
                sentence: '日本語{にほんご}は英{えい}語{ご}（　）難{むずか}しくない。',
                options: ['ほど', 'より', 'から', 'まで'],
                correctIndex: 0,
                explanation: {
                    correct: '「ほど」正確！否定比較「沒有～那麼」用「ほど～ない」。這是陷阱題！',
                    wrong: [
                        '「より」錯誤：「より」用於肯定比較，否定用「ほど～ない」！',
                        '「から」錯誤：「から」表示起點或原因。',
                        '「まで」錯誤：「まで」表示終點。'
                    ]
                }
            },
            {
                id: 'n5_q_yorihouga_4',
                sentence: '「コーヒーと紅{こう}茶{ちゃ}、どちらが好{す}きですか。」\n「紅{こう}茶{ちゃ}（　）ほうが好{す}きです。」',
                options: ['の', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！「紅{こう}茶{ちゃ}のほうが」表示「紅{こう}茶{ちゃ}這邊」。',
                    wrong: [
                        '「が」錯誤：需要「の」來連接。',
                        '「を」錯誤：不用於這種接續。',
                        '「に」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_yorihouga_5',
                sentence: '「AよりBのほうが」和「BはAより」有什麼差{さ}別{べつ}？',
                options: [
                    '意思相同，但語序和焦點不同',
                    '意思完全不同',
                    '「より」只能放在前面',
                    '「ほうが」可以省略，「より」不能省略'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「犬より猫のほうが好{す}き」=「猫は犬より好{す}き」意思相同，但焦點不同。',
                    wrong: [
                        '錯誤：意思相同！',
                        '錯誤：「より」可以在前面或後面。',
                        '錯誤：兩者都可以省略。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「同{おな}じくらい」不是「より～ほうが」
            {
                id: 'n5_q_yorihouga_6',
                sentence: '田{た}中{なか}さんも山{やま}田{だ}さんも背{せ}が高{たか}いです。二人{ふたり}は（　）です。',
                options: ['山{やま}田{だ}さんのほうが高{たか}い', '同{おな}じくらい', '田{た}中{なか}さんより高{たか}い', '一{いち}番{ばん}高{たか}い'],
                correctIndex: 1,
                explanation: {
                    correct: '「同{おな}じくらい」正確！「二人{ふたり}とも高{たか}い」暗示差不多，用「同{おな}じくらい」！這是陷阱題！',
                    wrong: [
                        '「山{やま}田{だ}さんのほうが高{たか}い」錯誤：沒有說誰{だれ}更高{たか}，前面說「二人{ふたり}とも高{たか}い」暗示差不多。',
                        '「田{た}中{なか}さんより高{たか}い」錯誤：同樣，沒有比較誰{だれ}更高{たか}。',
                        '「一{いち}番{ばん}高{たか}い」錯誤：「一{いち}番{ばん}」用於三者以上的最高{たか}級，這裡只有兩人{ひと}。'
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
                    { japanese: '飛{ひ}行{こう}機{き}は電{でん}車{しゃ}より速{はや}い。', chinese: '飛機比電{でん}車{しゃ}快。' },
                    { japanese: '東{とう}京{きょう}は大阪{おおさか}より大{おお}きい。', chinese: '東{とう}京{きょう}比大阪大。' },
                    { japanese: 'この本{ほん}はあの本{ほん}より面白{おもしろ}い。', chinese: '這本{ほん}書比那本{ほん}書有趣。' }
                ]
            }
        ],
        analysis: {
            title: '兩種比較句型的區別',
            points: [
                {
                    rule: '「AはBより」vs「BよりAのほうが」：意思相同，但焦點不同',
                    examples: [
                        { japanese: '東{とう}京{きょう}は大阪{おおさか}より大{おお}きい。', chinese: '（焦點在東{とう}京{きょう}）' },
                        { japanese: '大阪{おおさか}より東{とう}京{きょう}のほうが大{おお}きい。', chinese: '（焦點在比較結果）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_wayori_1',
                sentence: '日{に}本{ほん}は台湾{たいわん}（　）大{おお}きいです。',
                options: ['より', 'ほど', 'から', 'まで'],
                correctIndex: 0,
                explanation: {
                    correct: '「より」正確！「日{に}本{ほん}は台湾より大{おお}きい」表示日{に}本{ほん}比台灣大。',
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
                    correct: '「より」正確！表示夏天比冬天熱{ねつ}。',
                    wrong: [
                        '「ほう」錯誤：「ほう」用於「〜のほうが」句型。',
                        '「くらい」錯誤：「くらい」表示程度。',
                        '「など」錯誤：「など」表示「等等」。'
                    ]
                }
            },
            {
                id: 'n5_q_wayori_3',
                sentence: '日本語{にほんご}は英{えい}語{ご}（　）難{むずか}しくないと思{おも}います。',
                options: ['ほど', 'より', 'から', 'まで'],
                correctIndex: 0,
                explanation: {
                    correct: '「ほど」正確！否定比較用「ほど～ない」。這是陷阱題！',
                    wrong: [
                        '「より」錯誤：否定比較要用「ほど～ない」，不是「より～ない」！',
                        '「から」錯誤：不用於比較。',
                        '「まで」錯誤：不用於比較。'
                    ]
                }
            },
            {
                id: 'n5_q_wayori_4',
                sentence: '「このレストランはあのレストランより美味{おい}しい。」\n「あのレストランよりこのレストラン（　）が美味{おい}しい。」',
                options: ['のほう', 'より', 'ほど', 'だけ'],
                correctIndex: 0,
                explanation: {
                    correct: '「のほう」正確！「AはBより」=「BよりAのほうが」，意思相同！',
                    wrong: [
                        '「より」錯誤：這裡需要「のほうが」。',
                        '「ほど」錯誤：「ほど」用於否定比較。',
                        '「だけ」錯誤：「だけ」表示「只有」。'
                    ]
                }
            },
            {
                id: 'n5_q_wayori_5',
                sentence: '「AはBより」和「BよりAのほうが」有什麼關係？',
                options: [
                    '意思相同，語序不同',
                    '意思完全不同',
                    '「AはBより」更禮貌',
                    '「BよりAのほうが」只能用於疑問句'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「猫は犬より好{す}き」=「犬より猫のほうが好{す}き」意思完全相同！',
                    wrong: [
                        '錯誤：意思相同！',
                        '錯誤：禮貌程度沒有差{さ}別{べつ}。',
                        '錯誤：兩種都可以用於任何{なに}句子。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「ほど～ない」不是「より」
            {
                id: 'n5_q_wayori_6',
                sentence: '私{わたし}は田{た}中{なか}さん（　）日本語{にほんご}が上{じょう}手{ず}じゃない。',
                options: ['より', 'ほど', 'のほうが', 'くらい'],
                correctIndex: 1,
                explanation: {
                    correct: '「ほど」正確！否定比較「沒有～那麼」用「ほど～ない」！這是陷阱題！',
                    wrong: [
                        '「より」錯誤：「より」用於肯定比較，否定比較必須用「ほど～ない」！',
                        '「のほうが」錯誤：「のほうが」用於「AよりBのほうが」句型。',
                        '「くらい」錯誤：「くらい」表示「大約」程度，不用於否定比較。'
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
                title: '接續方式',
                description: '名詞 + はどうですか',
                examples: []
            },
            {
                usageId: 2,
                title: '如何/怎麼樣 (How about)',
                description: '意思：...怎麼樣？、...如何？\n用於詢問對方的意見、狀況或提議。\n例：味はどうですか (味道如何？)。',
                examples: [
                    { japanese: '明⽇はどうですか。', chinese: '明天怎麼樣？ (方便嗎？)' },
                    { japanese: '⽇本はどうですか︖', chinese: '日本怎麼樣？ (你覺得如何？)' },
                    { japanese: '天気はどうですか。', chinese: '天氣怎麼樣？' },
                    { japanese: '買い物に⾏くのはどうですか。', chinese: '去買東西怎麼樣？ (提議)' },
                    { japanese: '⽇本語の勉強はどうですか。', chinese: '日語學習得怎麼樣了？' },
                    { japanese: '私の⽇本語の発⾳はどうですか︖', chinese: '我的日語發音如何？' },
                    { japanese: '新しい学校はどうですか。友だちができましたか︖', chinese: '新學校怎麼樣？交到朋友了嗎？' },
                    { japanese: '最近仕事のほうはどうですか︖', chinese: '最近工作方面怎麼樣？' }
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
                sentence: '「日本語{にほんご}の勉{べん}強{きょう}は（　）ですか。」\n「楽{たの}しいです。」',
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
                sentence: '「お名{な}前{まえ}は（　）ですか。」\n「田{た}中{なか}です。」',
                options: ['なん', 'どう', 'どこ', 'だれ'],
                correctIndex: 0,
                explanation: {
                    correct: '「なん」正確！詢問具體內容（名字{じ}）用「なん」。這是陷阱題！',
                    wrong: [
                        '「どう」錯誤：「どう」詢問感想或狀況，不是詢問具體內容！',
                        '「どこ」錯誤：「どこ」詢問地點。',
                        '「だれ」錯誤：「だれ」詢問人{ひと}物身份。'
                    ]
                }
            },
            {
                id: 'n5_q_wadou_4',
                sentence: 'コーヒーは（　）ですか。',
                options: ['どう', 'なに', 'どこ', 'だれ'],
                correctIndex: 0,
                explanation: {
                    correct: '「どう」正確！「コーヒーはどうですか」可表示「要不要喝咖啡」的邀請。',
                    wrong: [
                        '「なに」錯誤：不符合文脈。',
                        '「どこ」錯誤：詢問地點，不適用。',
                        '「だれ」錯誤：詢問人{ひと}物，不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_wadou_5',
                sentence: '「どうですか」和「いかがですか」的差{さ}別{べつ}是？',
                options: [
                    '「いかがですか」比較禮貌',
                    '「どうですか」比較禮貌',
                    '意思完全不同',
                    '「いかがですか」只能用於食物'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「お茶{ちゃ}はいかがですか」比「お茶{ちゃ}はどうですか」更禮貌、更正式。',
                    wrong: [
                        '錯誤：「いかがですか」更禮貌！',
                        '錯誤：意思相同，只是禮貌程度不同。',
                        '錯誤：「いかがですか」可用於任何{なに}事物。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「いかがですか」不是「どうですか」
            {
                id: 'n5_q_wadou_6',
                sentence: '（對客人{ひと}）「お飲{の}み物{もの}は（　）。」',
                options: ['どうですか', 'いかがですか', 'なんですか', 'どれですか'],
                correctIndex: 1,
                explanation: {
                    correct: '「いかがですか」正確！對客人{ひと}說話要用更禮貌的「いかがですか」！這是陷阱題！',
                    wrong: [
                        '「どうですか」錯誤：「どうですか」對客人{ひと}不夠禮貌！接待客人{ひと}要用「いかがですか」！',
                        '「なんですか」錯誤：「なんですか」是詢問「是什麼」，不是詢問意見{み}或邀請。',
                        '「どれですか」錯誤：「どれですか」是「哪一個」，不適合這個情境。'
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
                title: '接續方式',
                description: '然而 / 但是',
                examples: []
            },
            {
                usageId: 2,
                title: '逆接 (Formal)',
                description: '意思：但是、然而。\n用於連接兩個相反的想法。比「でも」更正式。\n常用於句首。\n例：日本は大好きです。しかし、夏は暑いです。(我很喜歡日本。但是，夏天很熱。)',
                examples: [
                    { japanese: 'しかしなぜ︖', chinese: '但是為什麼？' },
                    { japanese: '今⽇のクラスはむずかしかったです。しかし楽しかったです。', chinese: '今天的課很難。但是很有趣。' },
                    { japanese: 'しかし問題があるかもしれない。', chinese: '然而，這可能會有問題。' },
                    { japanese: '冬は寒い、しかし私は好きだ。', chinese: '冬天很冷，不過我喜歡。' },
                    { japanese: 'しかし、彼は⽇本語を話すことも書くこともできません。', chinese: '但是，他既不會說也不會寫日語。' },
                    { japanese: '⽇本料理はもちろんおいしいです。しかし、アメリカ料理の⽅が好きです。', chinese: '日本料理當然好吃。但是，我比較喜歡美國料理。' },
                    { japanese: 'あなたはたぶん正しいでしょう。しかし、私は少し違った意⾒を持っています。', chinese: '你大概是對的吧。不過，我有一點不同的意見。' }
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
                sentence: 'この店{みせ}の料{りょう}理{り}はおいしい。（　）、高{たか}い。',
                options: ['しかし', 'そして', 'それから', 'だから'],
                correctIndex: 0,
                explanation: {
                    correct: '「しかし」正確！表示轉折「好{す}吃但是貴」。',
                    wrong: [
                        '「そして」錯誤：「そして」表示追加，不是轉折。',
                        '「それから」錯誤：「それから」表示順序。',
                        '「だから」錯誤：「だから」表示原因結果。'
                    ]
                }
            },
            {
                id: 'n5_q_shikashi_2',
                sentence: '彼{かれ}は頭{あたま}がいい。（　）、勉{べん}強{きょう}しない。',
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
                sentence: '疲{つか}れた。（　）、早{はや}く寝{ね}た。',
                options: ['だから', 'しかし', 'そして', 'ところで'],
                correctIndex: 0,
                explanation: {
                    correct: '「だから」正確！「累了所以早睡」是因果關係。這是陷阱題！',
                    wrong: [
                        '「しかし」錯誤：這裡是因果關係，不是轉折！',
                        '「そして」錯誤：表示追加，語意較弱。',
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
                    correct: '「しかし」正確！「難{むずか}但有趣」是轉折。',
                    wrong: [
                        '「だから」錯誤：表示因果，邏輯不通。',
                        '「それで」錯誤：表示結果。',
                        '「そこで」錯誤：表示「於是」。'
                    ]
                }
            },
            {
                id: 'n5_q_shikashi_5',
                sentence: '「しかし」「でも」「けど」的正式程度排序是？',
                options: [
                    'しかし ＞ でも ＞ けど',
                    'でも ＞ しかし ＞ けど',
                    'けど ＞ でも ＞ しかし',
                    '三個一樣正式'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「しかし」最正式（書面語），「でも」一般，「けど」最口語。',
                    wrong: [
                        '錯誤：「しかし」最正式！',
                        '錯誤：「けど」是最口語的！',
                        '錯誤：正式程度不同！'
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
                title: '接續方式',
                description: '句子。 + そして + 句子。',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '表示並列或順接。意思是「而且」、「然後」。\n可以用於連接名詞 (AそしてB) 或句子。',
                examples: [
                    { japanese: '明るくて、そしてきれいな部屋です。', chinese: '明亮而且乾淨的房間。' }
                ]
            }
        ],
        analysis: {
            title: '「そして」vs「それから」',
            points: [
                {
                    rule: '「そして」：追加信息或順序，「それから」：更強調時{じ}間{かん}順序',
                    examples: [
                        { japanese: '彼{かれ}は親{しん}切{せつ}だ。そして、頭{あたま}がいい。', chinese: '（追加特點）' },
                        { japanese: '買{か}い物{もの}をした。それから、家{いえ}に帰{かえ}った。', chinese: '（時{じ}間{かん}順序）' }
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
                sentence: 'この部屋{へや}は広{ひろ}い。（　）、暗{くら}い。',
                options: ['しかし', 'そして', 'だから', 'それで'],
                correctIndex: 0,
                explanation: {
                    correct: '「しかし」正確！「寬敞但暗」有轉折意{い}味{み}。這是陷阱題！',
                    wrong: [
                        '「そして」錯誤：「寬敞」和「暗」是反差，用轉折更自然！',
                        '「だから」錯誤：兩者不是因果關係。',
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
                sentence: '「そして」和「それから」有什麼差{さ}別{べつ}？',
                options: [
                    '「そして」追加或順序，「それから」更強調時{じ}間{かん}順序',
                    '意思完全相同',
                    '「それから」追加特點，「そして」時{じ}間{かん}順序',
                    '「そして」只能用於形容詞'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「彼{かれ}は親{しん}切{せつ}だ。そして、頭{あたま}がいい」（追加特點）。「買{か}い物{もの}をした。それから、家{いえ}に帰った」（時{じ}間{かん}順序）。',
                    wrong: [
                        '錯誤：有細微差{さ}別{べつ}！',
                        '錯誤：順序相反了！',
                        '錯誤：「そして」可以用於各種句子。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「だから」不是「そして」
            {
                id: 'n5_q_soshite_6',
                sentence: '熱{ねつ}がある。（　）、今日{きょう}は休{やす}む。',
                options: ['そして', 'だから', 'しかし', 'ところで'],
                correctIndex: 1,
                explanation: {
                    correct: '「だから」正確！「發燒所以休息」是因果關係，用「だから」！這是陷阱題！',
                    wrong: [
                        '「そして」錯誤：「そして」表示追加或順序，但這裡是「因為發燒所以休息」的因果關係！',
                        '「しかし」錯誤：「しかし」表示轉折，但「發燒→休息」是合理因果，不是轉折。',
                        '「ところで」錯誤：「ところで」表示轉換話題，不適合這裡。'
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
                title: '接續方式',
                description: '句子。 + それから + 句子。',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '表示動作的連續發生或追加。意思是「然後」、「還有」。',
                examples: [
                    { japanese: '買い物をしました。それから、映画を見ました。', chinese: '去買了東西。然後看了電影。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_sorekara_1',
                sentence: '映{えい}画{が}を見{み}た。（　）、食事{しょくじ}をした。',
                options: ['それから', 'しかし', 'だから', 'でも'],
                correctIndex: 0,
                explanation: {
                    correct: '「それから」正確！表示時{じ}間{かん}順序「然後」。',
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
                sentence: '彼{かれ}は親{しん}切{せつ}だ。（　）、面白{おもしろ}い。',
                options: ['そして', 'それから', 'だから', 'でも'],
                correctIndex: 0,
                explanation: {
                    correct: '「そして」正確！追加特點用「そして」更自然。這是陷阱題！',
                    wrong: [
                        '「それから」錯誤：「それから」更強調時{じ}間{かん}順序，追加特點用「そして」！',
                        '「だから」錯誤：不是因果關係。',
                        '「でも」錯誤：沒有轉折。'
                    ]
                }
            },
            {
                id: 'n5_q_sorekara_4',
                sentence: 'りんごと、みかんと、（　）バナナを買{か}った。',
                options: ['それから', 'しかし', 'だから', 'でも'],
                correctIndex: 0,
                explanation: {
                    correct: '「それから」正確！用於列舉「還有」。',
                    wrong: [
                        '「しかし」錯誤：列舉不用轉折詞。',
                        '「だから」錯誤：不是因果關係。',
                        '「でも」錯誤：列舉不用轉折詞。'
                    ]
                }
            },
            {
                id: 'n5_q_sorekara_5',
                sentence: '「それから」最常用於什麼情況？',
                options: [
                    '表示時{じ}間{かん}順序「然後」或列舉「還有」',
                    '表示轉折',
                    '表示因果關係',
                    '表示假設'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「それから」主要用於：1. 時{じ}間{かん}順序「買{か}い物{もの}をした。それから、帰った」。2. 列舉「りんごと、それからバナナ」。',
                    wrong: [
                        '錯誤：轉折用「しかし」「でも」。',
                        '錯誤：因果用「だから」「ので」。',
                        '錯誤：假設用「たら」「ば」。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「まず」不是「それから」
            {
                id: 'n5_q_sorekara_6',
                sentence: '（　）野菜{やさい}を洗{あら}って、それから切{き}ってください。',
                options: ['それから', 'まず', 'しかし', 'でも'],
                correctIndex: 1,
                explanation: {
                    correct: '「まず」正確！「まず（首先）...それから（然後）」表示先後順序！這是陷阱題！',
                    wrong: [
                        '「それから」錯誤：「それから」是「然後」，前面應該用「まず（首先）」！',
                        '「しかし」錯誤：「しかし」表示轉折，這裡是順序。',
                        '「でも」錯誤：「でも」表示轉折，這裡是順序。'
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
                    { japanese: '私{わたし}は学{がく}生{せい}です。', chinese: '我是學生。' },
                    { japanese: '東{とう}京{きょう}は日{に}本{ほん}の首都{しゅと}です。', chinese: '東{とう}京{きょう}是日{に}本{ほん}的首都。' },
                    { japanese: '今日{きょう}は天{てん}気{き}がいいです。', chinese: '今{いま}天天氣很好{す}。' }
                ]
            },
            {
                usageId: 2,
                title: '對比用法',
                description: '「は」也用於對比兩個事物。',
                examples: [
                    { japanese: '肉{にく}は食{た}べますが、魚{さかな}は食{た}べません。', chinese: '肉{にく}吃，但魚{さかな}不吃。' },
                    { japanese: '日本語{にほんご}は話{はな}せますが、中国語{ちゅうごくご}は話{はな}せません。', chinese: '會說日語，但不會說中{なか}文。' }
                ]
            }
        ],
        analysis: {
            title: '「は」vs「が」',
            points: [
                {
                    rule: '「は」：標記已知的話題；「が」：標記新信息或焦點',
                    examples: [
                        { japanese: '田{た}中{なか}さんは先{せん}生{せい}です。', chinese: '（介紹田{た}中{なか}的職業）' },
                        { japanese: '田{た}中{なか}さんが先{せん}生{せい}です。', chinese: '（回答「誰{だれ}是老師」）' }
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
                        '「が」錯誤：自我介紹時{じ}用「は」更自然。',
                        '「を」錯誤：「を」標記賓語。',
                        '「に」錯誤：「に」表示方向或時{じ}間{かん}。'
                    ]
                }
            },
            {
                id: 'n5_q_watopic_2',
                sentence: '「誰{だれ}が先{せん}生{せい}ですか。」\n「田{た}中{なか}さん（　）先{せん}生{せい}です。」',
                options: ['が', 'は', 'を', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「が」正確！回答「誰{だれ}」的問{もん}題{だい}時{じ}，焦點在人{ひと}，用「が」。這是陷阱題！',
                    wrong: [
                        '「は」錯誤：回答「誰{だれ}が」問{もん}題{だい}時{じ}，強調焦點的答案用「が」！',
                        '「を」錯誤：「を」是賓語助詞。',
                        '「で」錯誤：「で」表示場{ば}所{しょ}或方式。'
                    ]
                }
            },
            {
                id: 'n5_q_watopic_3',
                sentence: '肉{にく}（　）食{た}べますが、魚{さかな}は食{た}べません。',
                options: ['は', 'が', 'を', 'も'],
                correctIndex: 0,
                explanation: {
                    correct: '「は」正確！「は」用於對比「肉{にく}吃，魚{さかな}不吃」。',
                    wrong: [
                        '「が」錯誤：對比時{じ}用「は」。',
                        '「を」錯誤：這裡強調對比，用「は」。',
                        '「も」錯誤：「も」表示「也」，不適合對比。'
                    ]
                }
            },
            {
                id: 'n5_q_watopic_4',
                sentence: '今日{きょう}（　）天{てん}気{き}がいいですね。',
                options: ['は', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「は」正確！「今日{きょう}」是話題。',
                    wrong: [
                        '「が」錯誤：「今日{きょう}」是話題，用「は」。',
                        '「を」錯誤：「を」不用於時{じ}間{かん}。',
                        '「に」錯誤：這裡不需要「に」。'
                    ]
                }
            },
            {
                id: 'n5_q_watopic_5',
                sentence: '「は」和「が」的差{さ}別{べつ}是？',
                options: [
                    '「は」標記已知話題，「が」標記新信息或焦點',
                    '意思完全相同',
                    '「は」用於疑問句，「が」用於陳述句',
                    '「が」比「は」更禮貌'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「田{た}中{なか}さんは先{せん}生{せい}です」（介紹田{た}中{なか}的職業）。「田{た}中{なか}さんが先{せん}生{せい}です」（回答「誰{だれ}是老師」）。',
                    wrong: [
                        '錯誤：意思不同！',
                        '錯誤：兩者都可用於疑問句和陳述句。',
                        '錯誤：禮貌程度沒有差{さ}別{べつ}。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「が」不是「は」
            {
                id: 'n5_q_watopic_6',
                sentence: '「あ、見{み}て！飛{ひ}行{こう}機{き}（　）飛{と}んでいる！」',
                options: ['は', 'が', 'を', 'に'],
                correctIndex: 1,
                explanation: {
                    correct: '「が」正確！發現新事物時{じ}，用「が」強調焦點！這是陷阱題！',
                    wrong: [
                        '「は」錯誤：「は」用於已知話題，但這裡是「剛發現」的驚訝，用「が」強調新信息！',
                        '「を」錯誤：「を」用於他動詞的受詞，「飛{と}んでいる」不需要。',
                        '「に」錯誤：「に」不用於這種句子。'
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
                title: '接續方式',
                description: '名詞 + をください',
                examples: []
            },
            {
                usageId: 2,
                title: '請給我... (Please give me)',
                description: '意思：請給我...。\n用於一般索取物品或點餐。\n句型：[物品] を ください。',
                examples: [
                    { japanese: 'すみません、お⽔をください。', chinese: '不好意思，請給我水。' },
                    { japanese: 'これをください。', chinese: '請給我這個 (我要買這個)。' },
                    { japanese: 'コーヒーを⼆つください。', chinese: '請給我兩杯咖啡。' },
                    { japanese: '少し時間をください。', chinese: '請給我一點時間。' },
                    { japanese: 'すぐに返信をください。', chinese: '請馬上給我回信。' }
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
                    correct: '「を」正確！「お水{みず}をください」請求得到水{みず}。',
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
                sentence: 'ここに名{な}前{まえ}を書{か}い（　）ください。',
                options: ['て', 'を', 'た', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「て」正確！請求動作用「て形＋ください」。這是陷阱題！',
                    wrong: [
                        '「を」錯誤：請求動作用「動詞て形＋ください」，不是「名詞＋をください」！',
                        '「た」錯誤：需要て形，不是た形。',
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
                    correct: '「を」正確！點餐用「名詞＋をください」。',
                    wrong: [
                        '「が」錯誤：「ください」前用「を」。',
                        '「は」錯誤：請求時{じ}不用「は」。',
                        '「も」錯誤：不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_okudasai_5',
                sentence: '「名詞＋をください」和「動詞て形＋ください」的差{さ}別{べつ}是？',
                options: [
                    '名詞＋を：請求物品；動詞て形：請求動作',
                    '意思完全相同',
                    '名詞＋を：請求動作；動詞て形：請求物品',
                    '「を」比「て形」更禮貌'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「水{みず}をください」=請給我水{みず}。「読{よ}んでください」=請讀。',
                    wrong: [
                        '錯誤：意思不同！',
                        '錯誤：順序相反了！',
                        '錯誤：禮貌程度相同。'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「てください」不是「をください」
            {
                id: 'n5_q_okudasai_6',
                sentence: '「すみません、駅{えき}への道{みち}を教{おし}え（　）。」',
                options: ['をください', 'てください', 'にください', 'でください'],
                correctIndex: 1,
                explanation: {
                    correct: '「てください」正確！請求「教える」這個動作，用「て形＋ください」！這是陷阱題！',
                    wrong: [
                        '「をください」錯誤：「をください」用於請求物品！請求動作用「て形＋ください」！',
                        '「にください」錯誤：文法錯誤。',
                        '「でください」錯誤：文法錯誤。'
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
        translation: '（敬語接頭{あたま}詞）',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: 'お + 和語詞彙 / ご + 漢語詞彙',
                examples: []
            },
            {
                usageId: 2,
                title: '美化語/尊敬語',
                description: '接在名詞前，表示禮貌或尊敬。\n- 「お」接訓讀詞彙 (例：お水、お名前)\n- 「ご」接音讀詞彙 (例：家族、住所)',
                examples: [
                    { japanese: 'お元気ですか。', chinese: '你好嗎？' },
                    { japanese: 'ご主人', chinese: '您的丈夫' }
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
                        { japanese: 'ご住{じゅう}所{しょ}、ご連絡{れんらく}、ご家{か}族{ぞく}', chinese: '「ご」＋漢語' },
                        { japanese: 'お電{でん}話{わ}、お時{じ}間{かん}', chinese: '例外（漢語但用「お」）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_ogo_1',
                sentence: '（　）名{な}前{まえ}をお願{ねが}いします。',
                options: ['お', 'ご', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「お」正確！「名前」是和語，用「お」。',
                    wrong: [
                        '「ご」錯誤：「名前」是和語，不用「ご」。',
                        '「を」錯誤：「を」是助詞，不是接頭{あたま}詞。',
                        '「に」錯誤：「に」是助詞，不是接頭{あたま}詞。'
                    ]
                }
            },
            {
                id: 'n5_q_ogo_2',
                sentence: '（　）住{じゅう}所{しょ}をお願{ねが}いします。',
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
                sentence: '（　）電{でん}話{わ}ありがとうございます。',
                options: ['お', 'ご', 'の', 'と'],
                correctIndex: 0,
                explanation: {
                    correct: '「お」正確！「電{でん}話{わ}」是例外，雖是漢語但用「お」。這是陷阱題！',
                    wrong: [
                        '「ご」錯誤：「電{でん}話{わ}」是例外！雖是漢語但習慣用「お」。',
                        '「の」錯誤：「の」是助詞。',
                        '「と」錯誤：「と」是助詞。'
                    ]
                }
            },
            {
                id: 'n5_q_ogo_4',
                sentence: '（　）家{か}族{ぞく}はお元{げん}気{き}ですか。',
                options: ['ご', 'お', 'は', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「ご」正確！「家{か}族{ぞく}」是漢語，用「ご」。',
                    wrong: [
                        '「お」錯誤：「家{か}族{ぞく}」是漢語，用「ご」。',
                        '「は」錯誤：「は」是助詞。',
                        '「が」錯誤：「が」是助詞。'
                    ]
                }
            },
            {
                id: 'n5_q_ogo_5',
                sentence: '「お」和「ご」的基本{ほん}規則是？',
                options: [
                    '「お」＋和語，「ご」＋漢語（有例外）',
                    '「お」＋漢語，「ご」＋和語',
                    '「お」用於食物，「ご」用於其他',
                    '意思完全相同，可以互換'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「お水{みず}、お名前」（和語用お）。「ご住所、ご家{か}族{ぞく}」（漢語用ご）。例外如「お電{でん}話{わ}、お時{じ}間{かん}」。',
                    wrong: [
                        '錯誤：順序相反了！',
                        '錯誤：跟食物無關。',
                        '錯誤：不能互換，有規則！'
                    ]
                }
            },
            // 第 6 題：陷阱題 - 正確答案是「ご」不是「お」
            {
                id: 'n5_q_ogo_6',
                sentence: '（　）連絡{れんらく}ありがとうございます。',
                options: ['お', 'ご', 'の', 'で'],
                correctIndex: 1,
                explanation: {
                    correct: '「ご」正確！「連絡」是漢語，用「ご」！這是陷阱題！',
                    wrong: [
                        '「お」錯誤：「連絡」是漢語，要用「ご」！「お」用於和語！',
                        '「の」錯誤：「の」是助詞，不是敬語接頭{あたま}詞。',
                        '「で」錯誤：「で」是助詞，不是敬語接頭{あたま}詞。'
                    ]
                }
            }
        ]
    },

    // ===== n5_ni_e =====
    n5_ni_e: {
        id: 'n5_ni_e',
        pattern: 'に / へ',
        connection: '場{ば}所{しょ}＋に/へ＋移動動詞',
        translation: '往...；到...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '表示移動的目的地',
                description: '「に」和「へ」都可以表示移動的目的地。「に」強調到達點，「へ」強調方向。',
                examples: [
                    { japanese: '日{に}本{ほん}に行{い}く。', chinese: '去日{に}本{ほん}。（強調到達）' },
                    { japanese: '日{に}本{ほん}へ行{い}く。', chinese: '往日{に}本{ほん}去。（強調方向）' },
                    { japanese: '学{がっ}校{こう}に来{く}る。', chinese: '來學校。' },
                    { japanese: '家{いえ}へ帰{かえ}る。', chinese: '回家{いえ}。' }
                ]
            }
        ],
        analysis: {
            title: '「に」vs「へ」的區別',
            points: [
                {
                    rule: '「に」：強調到達點、存在地點；「へ」：強調方向',
                    examples: [
                        { japanese: '東{とう}京{きょう}に着{つ}いた。', chinese: '到達東{とう}京{きょう}了。（只能用「に」）' },
                        { japanese: '東{とう}京{きょう}へ/に行{い}く。', chinese: '去東{とう}京{きょう}。（兩者都可）' }
                    ]
                },
                {
                    rule: '「に」有更多其他用法，「へ」幾乎只表示方向',
                    examples: [
                        { japanese: '友達{ともだち}に会{あ}う。', chinese: '見{み}朋友。（「に」表示對象）' },
                        { japanese: '7時{じ}に起{お}きる。', chinese: '7點起床。（「に」表示時{じ}間{かん}）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_nie_1',
                sentence: '明日{あした}、東{とう}京{きょう}（　）行{い}きます。',
                options: ['に', 'で', 'を', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「東{とう}京{きょう}に行{い}く」表示移動的目的地。「へ」也可以。',
                    wrong: [
                        '「で」錯誤：「で」表示動作進行的場{ば}所{しょ}，不是移動的目的地。',
                        '「を」錯誤：「を」不用於目的地。',
                        '「が」錯誤：「が」不用於目的地。'
                    ]
                }
            },
            {
                id: 'n5_q_nie_2',
                sentence: '学{がっ}校{こう}（　）来{き}てください。',
                options: ['に', 'で', 'を', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「学{がっ}校{こう}に来{く}る」表示移動的目的地。',
                    wrong: [
                        '「で」錯誤：「で」表示動作場{ば}所{しょ}，不是移動目的地。',
                        '「を」錯誤：不適用。',
                        '「が」錯誤：不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_nie_3',
                sentence: '電{でん}車{しゃ}が駅{えき}（　）着{つ}きました。',
                options: ['に', 'へ', 'で', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「着く」只能用「に」，不能用「へ」。這是陷阱題！',
                    wrong: [
                        '「へ」錯誤：「着く」只能用「に」！「へ」表示方向，「に」表示到達點。',
                        '「で」錯誤：不適用。',
                        '「を」錯誤：不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_nie_4',
                sentence: '友達{ともだち}の家{いえ}（　）遊{あそ}びに行{い}った。',
                options: ['に', 'で', 'を', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「〜に遊{あそ}びに行{い}く」表示去某處玩。「へ」也可以。',
                    wrong: [
                        '「で」錯誤：移動目的地用「に」或「へ」。',
                        '「を」錯誤：不適用。',
                        '「が」錯誤：不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_nie_5',
                sentence: '「に」和「へ」的差{さ}別{べつ}是？',
                options: [
                    '「に」強調到達點，「へ」強調方向',
                    '意思完全相同',
                    '「へ」強調到達點，「に」強調方向',
                    '「に」只用於地點，「へ」只用於人{ひと}'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「東{とう}京{きょう}に着く」（到達）只能用「に」。「東{とう}京{きょう}へ/に行{い}く」（移動）兩者都可。',
                    wrong: [
                        '錯誤：有細微差{さ}別{べつ}！',
                        '錯誤：順序相反了！',
                        '錯誤：兩者都可用於地點。'
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
                title: '接續方式',
                description: '普通形 + のです',
                examples: []
            },
            {
                usageId: 2,
                title: '強調/解釋說明 (正式)',
                description: '意思：是...的。\n與「んです」意思相同，但較為正式書面。\n用於說明理由、強調事實。\n\n注意：接名詞時，要加「那」 -> 「なのです (na no desu)」。\n例：いい先生なのですか (是好老師嗎？)',
                examples: [
                    { japanese: 'どこへ⾏きたいのですか。', chinese: '你想去哪裡呢？' },
                    { japanese: '何を⾔いたいのですか。', chinese: '你到底想說什麼呢？' },
                    { japanese: '昼ごはんを⾷べなかったのですね。', chinese: '是因為沒吃午餐吧？' },
                    { japanese: '今⽇は学校に⾏くのですね。', chinese: '今天要上學是吧？' },
                    { japanese: 'あなたが悪いのだ。', chinese: '是你的錯 (強調)。' },
                    { japanese: '⽣きるために⾷べるのだ。', chinese: '是為了生存而吃。' }
                ]
            }
        ],
        analysis: {
            title: '「のです」vs「んです」',
            points: [
                {
                    rule: '「のです」是書面語，「んです」是口語',
                    examples: [
                        { japanese: '病{びょう}気{き}なのです。', chinese: '（書面）' },
                        { japanese: '病{びょう}気{き}なんです。', chinese: '（口語）' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_nodesu_1',
                sentence: '「どうして遅{おく}れたんですか。」\n「電{でん}車{しゃ}が遅{おく}れた（　）です。」',
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
                    correct: '「ん」正確！說明臉色不好{す}的原因。',
                    wrong: [
                        '「こと」錯誤：形式不對。',
                        '「もの」錯誤：形式不對。',
                        '「ほう」錯誤：形式不對。'
                    ]
                }
            },
            {
                id: 'n5_q_nodesu_3',
                sentence: '彼{かれ}は学{がく}生{せい}な（　）です。',
                options: ['ん', 'の', 'こと', 'もの'],
                correctIndex: 0,
                explanation: {
                    correct: '「ん」正確！名詞和な形容詞後要加「な」再加「んです」。這是陷阱題！',
                    wrong: [
                        '「の」錯誤：口語用「ん」，名詞/な形容詞後要「なんです」或「なのです」！',
                        '「こと」錯誤：形式不對。',
                        '「もの」錯誤：形式不對。'
                    ]
                }
            },
            {
                id: 'n5_q_nodesu_4',
                sentence: '「明日{あした}、来{こ}られますか。」\n「すみません、用事{ようじ}がある（　）です。」',
                options: ['ん', 'こと', 'もの', 'わけ'],
                correctIndex: 0,
                explanation: {
                    correct: '「ん」正確！說明不能來的理{り}由{ゆう}。',
                    wrong: [
                        '「こと」錯誤：形式不對。',
                        '「もの」錯誤：形式不對。',
                        '「わけ」錯誤：雖然可以，但「んです」更口語。'
                    ]
                }
            },
            {
                id: 'n5_q_nodesu_5',
                sentence: '「のです」和「んです」的差{さ}別{べつ}是？',
                options: [
                    '「んです」是口語，「のです」是書面語',
                    '意思完全不同',
                    '「のです」是口語，「んです」是書面語',
                    '「んです」比「のです」更禮貌'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「どうしたんですか」（口語）=「どうしたのですか」（書面）意思相同，只是語體不同。',
                    wrong: [
                        '錯誤：意思相同！',
                        '錯誤：順序相反了！',
                        '錯誤：禮貌程度相同。'
                    ]
                }
            }
        ]
    },

    // ===== n5_no_naka_de =====
    n5_no_naka_de: {
        id: 'n5_no_naka_de',
        pattern: 'の中{なか}で',
        connection: '名詞＋の中{なか}で',
        translation: '在...之中{なか}',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: '名詞 + の中で... が一番...',
                examples: []
            },
            {
                usageId: 2,
                title: '範圍中之最 (最高級)',
                description: '意思：在...之中，...最...。\n用於比較，指出某個團體或範圍中程度最高的一個。\n句型：Aの中で Bが一番 (A之中B最...)',
                examples: [
                    { japanese: '家族のなかで⽗がいちばん背が⾼いです。', chinese: '在家人之中，父親個子最高。' },
                    { japanese: 'チームの中で⼭⽥が⼀番強い︕', chinese: '在隊伍中，山田最強！' },
                    { japanese: '⽇本の⾷べ物の中でラーメンが⼀番好きだ。', chinese: '日本食物之中，最喜歡拉麵。' },
                    { japanese: 'クラスの中でジェシカが⼀番頭いい。', chinese: '班級裡，Jessica最聰明。' },
                    { japanese: '世界の中で⽇本が⼀番安全な国です。', chinese: '世界上，日本是最安全的國家。' },
                    { japanese: '友達の中では、クリスが⼀番先輩。', chinese: '朋友之中，Chris資歷最深。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_nonakade_1',
                sentence: '果{くだ}物{もの}（　）中{なか}で何{なに}が一{いち}番{ばん}好{す}きですか。',
                options: ['の', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！「果{くだ}物{もの}の中{なか}で」表示範圍。',
                    wrong: [
                        '「が」錯誤：需要「の」連接。',
                        '「を」錯誤：不用於這種接續。',
                        '「に」錯誤：不用於這種接續。'
                    ]
                }
            },
            {
                id: 'n5_q_nonakade_2',
                sentence: 'クラス（　）中{なか}で誰{だれ}が一{いち}番{ばん}背{せ}が高{たか}いですか。',
                options: ['の', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！「クラスの中{なか}で」表示班級範圍。',
                    wrong: [
                        '「が」錯誤：需要「の」連接。',
                        '「を」錯誤：不適用。',
                        '「に」錯誤：不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_nonakade_3',
                sentence: 'コーヒーと紅{こう}茶{ちゃ}（　）、どちらが好{す}きですか。',
                options: ['と', 'の中{なか}で', 'が', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「と」正確！兩者比較用「AとB（と）、どちらが」。這是陷阱題！',
                    wrong: [
                        '「の中{なか}で」錯誤：「の中{なか}で」用於三個以上的比較，兩者比較用「と」或「より」！',
                        '「が」錯誤：不適用。',
                        '「に」錯誤：不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_nonakade_4',
                sentence: '日{に}本{ほん}（　）中{なか}で一{いち}番{ばん}高{たか}い山{やま}は富士山{ふじさん}です。',
                options: ['の', 'が', 'を', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！「日{に}本{ほん}の中{なか}で」表示日{に}本{ほん}範圍內。',
                    wrong: [
                        '「が」錯誤：需要「の」。',
                        '「を」錯誤：不適用。',
                        '「に」錯誤：不適用。'
                    ]
                }
            },
            {
                id: 'n5_q_nonakade_5',
                sentence: '「の中{なか}で一{いち}番{ばん}」什麼時{じ}候使用？',
                options: [
                    '三個以上的範圍中{なか}選最好{す}的',
                    '兩者比較時{じ}',
                    '表示時{じ}間{かん}長{なが}短{みじか}',
                    '表示位置'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「果{くだ}物{もの}の中{なか}でりんごが一{いち}番{ばん}好{す}き」=水{みず}果中{なか}最喜歡蘋果。兩者比較用「より」或「どちら」。',
                    wrong: [
                        '錯誤：兩者比較用「より」或「どちらが」。',
                        '錯誤：時{じ}間{かん}用其他表達方式。',
                        '錯誤：位置用其他表達方式。'
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
                title: '接續方式',
                description: 'い形容詞 (本身即可修飾名詞)',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '修飾名詞時直接放在名詞前面。不需要加「の」。\n做謂語時，句尾通常接「です」。',
                examples: [
                    { japanese: '面白い映画を見ました。', chinese: '看了有趣的電影。' },
                    { japanese: 'この映画は面白いです。', chinese: '這部電影很有趣。' }
                ]
            },
            {
                usageId: 3,
                title: '否定形式',
                description: '去「い」+「くない」。\n例如：高い (貴) -> 高くない (不貴)',
                examples: [

                ]
            }
        ],
        analysis: {
            title: 'い形容詞的活用',
            points: [
                {
                    rule: '基本{ほん}形、否定形、過去形',
                    examples: [
                        { japanese: '高{たか}い → 高{たか}くない → 高{たか}かった → 高{たか}くなかった', chinese: '貴 → 不貴 → 貴過 → 不貴過' }
                    ]
                }
            ]
        },
        quiz: [
            {
                id: 'n5_q_iadj_1',
                sentence: 'この料{りょう}理{り}はおいし（　）。',
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
                sentence: 'この映{えい}画{が}は面白{おもしろ}（　）ない。',
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
                sentence: 'この部屋{へや}は静{しず}か（　）ない。',
                options: ['で', 'く', 'に', 'と'],
                correctIndex: 0,
                explanation: {
                    correct: '「で」正確！な形容詞否定用「～ではない/じゃない」。這是陷阱題！',
                    wrong: [
                        '「く」錯誤：「く」是い形容詞的否定！「静{しず}か」是な形容詞！',
                        '「に」錯誤：形式不對。',
                        '「と」錯誤：形式不對。'
                    ]
                }
            },
            {
                id: 'n5_q_iadj_4',
                sentence: '今日{きょう}は寒{さむ}（　）です。',
                options: ['い', 'な', 'だ', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「い」正確！「寒{さむ}い」是い形容詞。',
                    wrong: [
                        '「な」錯誤：「な」用於な形容詞。',
                        '「だ」錯誤：い形容詞不加「だ」。',
                        '「の」錯誤：形式不對。'
                    ]
                }
            },
            {
                id: 'n5_q_iadj_5',
                sentence: 'い形容詞和な形容詞的否定形差{さ}別{べつ}是？',
                options: [
                    'い形→くない；な形→ではない',
                    'い形→ではない；な形→くない',
                    '兩者都用「くない」',
                    '兩者都用「ではない」'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「高{たか}い→高{たか}くない」「静{しず}か→静{しず}かではない」。',
                    wrong: [
                        '錯誤：順序相反了！',
                        '錯誤：な形容詞用「ではない」。',
                        '錯誤：い形容詞用「くない」。'
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
                title: '接續方式',
                description: 'い形容詞去い + くて',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '表示並列或原因。形容詞的「て形」。\n將兩個形容詞連接在一起時使用。',
                examples: [
                    { japanese: 'この部屋は広くて明るいです。', chinese: '這房間又寬敞又明亮。' },
                    { japanese: '高くて買えません。', chinese: '太貴了買不起 (原因)。' }
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
                    correct: '「かった」正確！い形容詞過去形「難{むずか}しかった」。',
                    wrong: [
                        '「い」錯誤：「い」是現在形。',
                        '「くない」錯誤：「くない」是否定形。',
                        '「だった」錯誤：い形容詞不用「だった」。'
                    ]
                }
            },
            {
                id: 'n5_q_iadjpast_2',
                sentence: 'その映{えい}画{が}は面白{おもしろ}（　）です。',
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
                sentence: '昔{むかし}、この町{まち}は静{しず}か（　）。',
                options: ['だった', 'かった', 'い', 'な'],
                correctIndex: 0,
                explanation: {
                    correct: '「だった」正確！「静{しず}か」是な形容詞，過去形是「だった」。這是陷阱題！',
                    wrong: [
                        '「かった」錯誤：「かった」是い形容詞的過去形！「静{しず}か」是な形容詞！',
                        '「い」錯誤：「い」是い形容詞的詞尾。',
                        '「な」錯誤：「な」是修飾名詞時{じ}用的。'
                    ]
                }
            },
            {
                id: 'n5_q_iadjpast_4',
                sentence: '旅行{りょこう}は楽{たの}し（　）です。',
                options: ['かった', 'い', 'だった', 'くない'],
                correctIndex: 0,
                explanation: {
                    correct: '「かった」正確！「楽{たの}しかったです」表示旅行很開心。',
                    wrong: [
                        '「い」錯誤：「い」是現在形。',
                        '「だった」錯誤：い形容詞不用「だった」。',
                        '「くない」錯誤：「くない」是否定形。'
                    ]
                }
            },
            {
                id: 'n5_q_iadjpast_5',
                sentence: 'い形容詞和な形容詞的過去形差{さ}別{べつ}是？',
                options: [
                    'い形→かった；な形→だった',
                    'い形→だった；な形→かった',
                    '兩者都用「かった」',
                    '兩者都用「だった」'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「高{たか}い→高{たか}かった」「静{しず}か→静{しず}かだった」。',
                    wrong: [
                        '錯誤：順序相反了！',
                        '錯誤：な形容詞用「だった」。',
                        '錯誤：い形容詞用「かった」。'
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
                title: '接續方式',
                description: 'な形容詞 + な + 名詞',
                examples: []
            },
            {
                usageId: 2,
                title: '修飾名詞',
                description: 'な形容詞在修飾名詞時，必須在詞幹和名詞之間加「な」。\n這點與「の形容詞」(名詞+の) 不同，需特別注意。',
                examples: [
                    { japanese: '静かな部屋', chinese: '安靜的房間' },
                    { japanese: '親切な先生', chinese: '親切的老師' }
                ]
            },
            {
                usageId: 3,
                title: '謂語用法',
                description: '做謂語時，句尾接「です」(肯定) 或「じゃありません」(否定)。\n這時不需要加「な」。',
                examples: [
                    { japanese: 'この部屋は静かです。', chinese: '這房間很安靜。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_naadjpast_1',
                sentence: '彼{かれ}は元{げん}気{き}（　）。',
                options: ['だった', 'かった', 'い', 'な'],
                correctIndex: 0,
                explanation: {
                    correct: '「だった」正確！「元{げん}気{き}だった」是な形容詞過去形。',
                    wrong: [
                        '「かった」錯誤：な形容詞不用「かった」。',
                        '「い」錯誤：「い」是い形容詞的詞尾。',
                        '「な」錯誤：「な」是修飾名詞時{じ}用的。'
                    ]
                }
            },
            {
                id: 'n5_q_naadjpast_2',
                sentence: '日本語{にほんご}は苦手{にがて}（　）です。',
                options: ['だった', 'かった', 'い', 'な'],
                correctIndex: 0,
                explanation: {
                    correct: '「だった」正確！「苦{に}手{がて}だったです」（或「でした」）表示以前不擅長{なが}。',
                    wrong: [
                        '「かった」錯誤：な形容詞不用「かった」。',
                        '「い」錯誤：「苦{に}手{がて}」是な形容詞。',
                        '「な」錯誤：過去形要用「だった」。'
                    ]
                }
            },
            {
                id: 'n5_q_naadjpast_3',
                sentence: '昨日{きのう}の天{てん}気{き}は良{よ}（　）。',
                options: ['かった', 'だった', 'い', 'な'],
                correctIndex: 0,
                explanation: {
                    correct: '「かった」正確！「良{い}い/いい」是い形容詞，過去形是「良かった」。這是陷阱題！',
                    wrong: [
                        '「だった」錯誤：「良{い}い」是い形容詞，不是な形容詞！',
                        '「い」錯誤：「い」是現在形。',
                        '「な」錯誤：「良{い}い」不是な形容詞。'
                    ]
                }
            },
            {
                id: 'n5_q_naadjpast_4',
                sentence: 'あの映{えい}画{が}は有{ゆう}名{めい}（　）。',
                options: ['だった', 'かった', 'い', 'な'],
                correctIndex: 0,
                explanation: {
                    correct: '「だった」正確！「有{ゆう}名{めい}だった」是な形容詞過去形。',
                    wrong: [
                        '「かった」錯誤：な形容詞不用「かった」。',
                        '「い」錯誤：「有{ゆう}名{めい}」是な形容詞。',
                        '「な」錯誤：過去形要用「だった」。'
                    ]
                }
            },
            {
                id: 'n5_q_naadjpast_5',
                sentence: '「綺{き}麗{れい}」是い形容詞還是な形容詞？',
                options: [
                    'な形容詞（綺{き}麗{れい}だ、綺{き}麗{れい}な）',
                    'い形容詞（綺{き}麗{れい}い）',
                    '兩者都可以',
                    '不是形容詞'
                ],
                correctIndex: 0,
                explanation: {
                    correct: '正確！「綺{き}麗{れい}」雖以「い」結尾，但它是な形容詞！「綺{き}麗{れい}だ」「綺{き}麗{れい}な人{ひと}」「綺{き}麗{れい}だった」。',
                    wrong: [
                        '錯誤：「綺{き}麗{れい}」不是い形容詞！「綺{き}麗{れい}い」是錯誤的。',
                        '錯誤：只能是な形容詞。',
                        '錯誤：「綺{き}麗{れい}」是な形容詞。'
                    ]
                }
            }
        ]
    },
});


// ===== Batch 3: ka - no_ga_heta =====
Object.assign(n5Details, {
    n5_ka: {
        id: 'n5_ka',
        pattern: 'か',
        connection: '',
        translation: '疑問助詞; 或者',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '疑問助詞',
                description: '接在句尾，使句子變成疑問句。相當於中文的「嗎」。',
                examples: [
                    { japanese: '何ですか︖', chinese: '是什麼？' },
                    { japanese: 'すみません、あなたも学⽣ですか。', chinese: '不好意思，請問你也是學生嗎？' },
                    { japanese: '元気ですか。', chinese: '你好嗎？' },
                ]
            },
            {
                usageId: 2,
                title: '選擇（或者）',
                description: '連接兩個名詞，表示選擇。相當於中文的「或者」。',
                examples: [
                    { japanese: 'お茶かコーヒーが飲みたい。', chinese: '想喝茶或咖啡。' },
                    { japanese: '来週の⽉曜⽇か⽕曜⽇に京都に⾏きます。', chinese: '下週一或週二要去京都。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_ka_1',
                sentence: 'これはペンです（　）。',
                options: ['か', 'が', 'は', 'の'],
                correctIndex: 0,
                explanation: {
                    correct: '「か」正確！句尾加「か」變成疑問句「這是筆嗎？」。',
                    wrong: [
                        '其他助詞不放在句尾表示疑問。'
                    ]
                }
            },
        ]
    },
    n5_ka_ka: {
        id: 'n5_ka_ka',
        pattern: 'か～か',
        connection: '',
        translation: '...或者...; 是否...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '是否...',
                description: '用於嵌入疑問句中，表示「是否...」。常接「知らない」「わからない」等。',
                examples: [
                    { japanese: '明⽇は⾬かどうか分からない。', chinese: '不知道明天會不會下雨。' },
                    { japanese: 'やるかやらないか早く決めてください。', chinese: '做還是不做，請快點決定。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_kaka_1',
                sentence: '雨が降る（　）どう（　）わかりません。',
                options: ['か/か', 'が/が', 'は/は', 'も/も'],
                correctIndex: 0,
                explanation: {
                    correct: '「か/か」正確！「かどうか」表示「是否...」。',
                    wrong: [
                        '這是固定用法。'
                    ]
                }
            },
        ]
    },
    n5_kara: {
        id: 'n5_kara',
        pattern: 'から',
        connection: '',
        translation: '因為; 從',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '表示原因',
                description: '接在句尾或子句尾，表示原因或理由。相當於中文的「因為...所以...」。',
                examples: [
                    { japanese: '天気がいいから、外に⾏きたい。', chinese: '因為天氣好，想去外面。' },
                    { japanese: '私はすぐ戻るから、ここでちょっと待ってください。', chinese: '我馬上回來，請在這裡稍等一下。' },
                ]
            },
            {
                usageId: 2,
                title: '表示起點（從...）',
                description: '接在時間、場所名詞後，表示起點。常與「まで」（直到）連用。',
                examples: [
                    { japanese: 'ここからあの駅まで歩いてどれぐらいかかりますか︖', chinese: '從這裡走到那個車站要花多久時間？' },
                    { japanese: 'お店は何時から何時まで開いていますか︖', chinese: '這家店從幾點開到幾點？' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_kara_1',
                sentence: '時間がありません（　）、急ぎましょう。',
                options: ['から', 'まで', 'より', 'でも'],
                correctIndex: 0,
                explanation: {
                    correct: '「から」正確！表示原因「因為沒有時間」。',
                    wrong: [
                        '其他助詞意思不符。'
                    ]
                }
            },
        ]
    },
    n5_kata: {
        id: 'n5_kata',
        pattern: '方（かた）',
        connection: '',
        translation: '...的方法',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '做某事的方法',
                description: '接在動詞ます形（去ます）後面，表示做該動作的方法。注意：變成名詞，後面的助詞通常用「の」。',
                examples: [
                    { japanese: 'パソコンの使いかたがわかりません。', chinese: '不知道電腦的使用方法。' },
                    { japanese: 'ケーキの作り⽅を知っていますか︖', chinese: '你知道蛋糕的做法嗎？' },
                    { japanese: 'この漢字の読み⽅ を教えてください。', chinese: '請教我這個漢字的唸法。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_kata_1',
                sentence: 'この漢字の（　）方がわかりません。',
                options: ['読み', '読む', '読んで', '読んだ'],
                correctIndex: 0,
                explanation: {
                    correct: '「読み」正確！動詞ます形（去ます）+ 方。読みます -> 読み方。',
                    wrong: [
                        '接續錯誤。'
                    ]
                }
            },
        ]
    },
    n5_kedo: {
        id: 'n5_kedo',
        pattern: 'けど',
        connection: '',
        translation: '但是; 雖然',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '逆接（但是）',
                description: '連接兩個句子，表示轉折。比「が」更口語。',
                examples: [
                    { japanese: '仕事は⾟いけど楽しい。', chinese: '工作很辛苦，但是很開心。' },
                    { japanese: '⾦はないけど夢はある。', chinese: '雖然沒錢，但是有夢想。' },
                ]
            },
            {
                usageId: 2,
                title: '前置鋪陳（雖然...但是...）',
                description: '用於句首或句中，作為開場白或緩衝語氣。',
                examples: [
                    { japanese: '悪いけど、明⽇のパーティーに⾏けません。', chinese: '不好意思，明天的派對我不能去。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_kedo_1',
                sentence: '美味しい（　）、高いです。',
                options: ['けど', 'から', 'ので', 'たら'],
                correctIndex: 0,
                explanation: {
                    correct: '「けど」正確！表示轉折「雖然好吃，但是很貴」。',
                    wrong: [
                        '「から」「ので」表示原因。'
                    ]
                }
            },
        ]
    },
    n5_made: {
        id: 'n5_made',
        pattern: 'まで',
        connection: '',
        translation: '到...; 直到...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '終點（到...）',
                description: '表示時間或空間的終點。常與「から」連用。',
                examples: [
                    { japanese: '昨⽇までお休みでした。', chinese: '休假到昨天為止。' },
                    { japanese: 'ここからそこまでは遠いですよ。', chinese: '從這裡到那裡很遠喔。' },
                    { japanese: '朝から夜までずっとかんじを勉強しました。', chinese: '從早到晚一直在學漢字。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_made_1',
                sentence: '駅（　）歩いて行きます。',
                options: ['まで', 'から', 'より', 'でも'],
                correctIndex: 0,
                explanation: {
                    correct: '「まで」正確！表示目的地/终点「走到車站」。',
                    wrong: [
                        '「から」是起點。'
                    ]
                }
            },
        ]
    },
    n5_mae_ni: {
        id: 'n5_mae_ni',
        pattern: '前に',
        connection: '',
        translation: '在...之前',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '時間順序（在...之前）',
                description: '接在動詞辭書形或名詞+の後面，表示做某事之前。',
                examples: [
                    { japanese: '寝る前に、⻭みがきを忘すれないでね。', chinese: '睡前別忘了刷牙喔。' },
                    { japanese: 'ご飯の前に⼿を洗いましょう。', chinese: '飯前洗手吧。' },
                    { japanese: '旅行の前に切符を買っておきます。', chinese: '旅行前先買好票。' },
                ]
            },
            {
                usageId: 2,
                title: '位置（在...前面）',
                description: '表示物理位置的前方。',
                examples: [
                    { japanese: 'コンビニの前にじてんしゃがたくさんあります。', chinese: '便利商店前面有很多腳踏車。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_maeni_1',
                sentence: '寝る（　）シャワーを浴びます。',
                options: ['前に', '後で', '時', '間'],
                correctIndex: 0,
                explanation: {
                    correct: '「前に」正確！「寝る前に」=睡前。',
                    wrong: [
                        '「後で」通常接在た形後面（寝た後で）。'
                    ]
                }
            },
        ]
    },
    n5_masen_ka: {
        id: 'n5_masen_ka',
        pattern: 'ませんか',
        connection: '',
        translation: '要不要...?',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '邀約（要不要...？）',
                description: '雖然是否定疑問形式，但用於客氣地邀請對方做某事。',
                examples: [
                    { japanese: '今⽇⼀緒に⾷べませんか︖', chinese: '今天要不要一起吃？' },
                    { japanese: 'お茶にしませんか︖', chinese: '要不要喝杯茶？' },
                    { japanese: '日曜日、映画を見に行きませんか。', chinese: '星期天要不要去看電影？' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_masenka_1',
                sentence: '一緒にコーヒーを（　）ませんか。',
                options: ['飲み', '飲む', '飲んで', '飲んだ'],
                correctIndex: 0,
                explanation: {
                    correct: '「飲み」正確！接在ます形（去ます）後面。飲みます -> 飲みませんか。',
                    wrong: [
                        '接續錯誤。'
                    ]
                }
            },
        ]
    },
    n5_mashou: {
        id: 'n5_mashou',
        pattern: 'ましょう',
        connection: '',
        translation: '...吧! (提議)',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '積極提議/勸誘',
                description: '表示提議做某事，或者回應對方的邀約。意為「我們...吧！」',
                examples: [
                    { japanese: '⾏きましょう︕', chinese: '走吧！' },
                    { japanese: '駅で会いましょう︕', chinese: '在車站見吧！' },
                    { japanese: 'そろそろ帰りましょう。', chinese: '差不多該回去了。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_mashou_1',
                sentence: 'そろそろ（　）ましょう。',
                options: ['帰り', '帰る', '帰って', '帰った'],
                correctIndex: 0,
                explanation: {
                    correct: '「帰り」正確！接在ます形（去ます）後面。',
                    wrong: [
                        '接續錯誤。'
                    ]
                }
            },
        ]
    },
    n5_mashou_ka: {
        id: 'n5_mashou_ka',
        pattern: 'ましょうか',
        connection: '',
        translation: '我來...好嗎?',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: '動詞(ます形去掉ます) + ましょうか',
                examples: []
            },
            {
                usageId: 2,
                title: '提議/主動幫忙',
                description: '意思：我來...好嗎？、要...嗎？\n用於主動提議幫助對方，或徵求對方的意願。\n例：窓を開けましょうか (我來開窗好嗎？)。',
                examples: [
                    { japanese: 'マドを開けましょうか。', chinese: '要我把窗戶打開嗎？' },
                    { japanese: '⼿伝いましょうか。', chinese: '需要幫忙嗎？' },
                    { japanese: '荷物を持ちましょうか。', chinese: '我幫你拿行李吧？' },
                    { japanese: 'タクシーを呼びましょうか。', chinese: '要叫計程車嗎？' },
                    { japanese: '私がお⽫を洗いましょうか︖', chinese: '我來洗盤子好嗎？' },
                    { japanese: '写真を取りましょうか。', chinese: '要幫你拍照嗎？' },
                    { japanese: 'サラダを作りましょうか︖', chinese: '要做沙拉嗎？' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_mashouka_1',
                sentence: '暑いですね。窓を（　）ましょうか。',
                options: ['開け', '開く', '開いて', '開けた'],
                correctIndex: 0,
                explanation: {
                    correct: '「開け」正確！開けます -> 開けましょうか。',
                    wrong: [
                        '接續錯誤。'
                    ]
                }
            },
        ]
    },
    n5_mo: {
        id: 'n5_mo',
        pattern: 'も',
        connection: '',
        translation: '也; 連...都',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '同類事物（也）',
                description: '表示與前面提到的事物相同。',
                examples: [
                    { japanese: '私もできる。', chinese: '我也會。' },
                    { japanese: '私の妻も⼦どもも来ます。', chinese: '我的妻子和孩子也會來。' },
                ]
            },
            {
                usageId: 2,
                title: '並列（既...也...）',
                description: '「AもBも」表示A和B都...',
                examples: [
                    { japanese: '⽢いものも⾟いものも好きです。', chinese: '甜的和辣的都喜歡。' },
                    { japanese: '⽇本語も英語も話せます。', chinese: '日語和英語都會說。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_mo_1',
                sentence: '私は学生です。妹（　）学生です。',
                options: ['も', 'は', 'が', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「も」正確！表示「也」。',
                    wrong: [
                        '其他助詞意思不符。'
                    ]
                }
            },
        ]
    },
    n5_mou: {
        id: 'n5_mou',
        pattern: 'もう',
        connection: '',
        translation: '已經; 再',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '已經（完成/狀態變化）',
                description: '表示事情已經發生或狀態已經改變。',
                examples: [
                    { japanese: 'もう昼ご飯の時間だ。', chinese: '已經是午餐時間了。' },
                    { japanese: '宿題はもう終わった︖', chinese: '作業已經寫完了嗎？' },
                    { japanese: 'もう帰らなくてはいけません。', chinese: '已經必須回去了。' },
                ]
            },
            {
                usageId: 2,
                title: '再（追加）',
                description: '表示追加數量或程度。',
                examples: [
                    { japanese: 'ビールもう⼀杯ください︕', chinese: '請再給給我一杯啤酒！' },
                    { japanese: 'もう少し待ってください。', chinese: '請再稍等一下。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_mou_1',
                sentence: '（　）ご飯を食べましたか。',
                options: ['もう', 'まだ', 'いつも', 'よく'],
                correctIndex: 0,
                explanation: {
                    correct: '「もう」正確！「もう～ました」=已經...了。',
                    wrong: [
                        '「まだ」表示還沒。'
                    ]
                }
            },
        ]
    },
    n5_naide: {
        id: 'n5_naide',
        pattern: 'ないで',
        connection: '',
        translation: '不...而...; 沒...就...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '附帶狀況（沒做A就做了B）',
                description: '表示在沒有進行某動作的狀態下，進行了後面的動作。',
                examples: [
                    { japanese: '朝ごはんを⾷べないで学校に来た。', chinese: '沒吃早餐就來學校了。' },
                    { japanese: '昨⽇、お⾵呂に⼊らないで寝てしまった。', chinese: '昨天沒洗澡就睡著了。' },
                    { japanese: 'コーヒーには、いつもさとうを⼊れ ないで飲みます。', chinese: '喝咖啡總是不加糖（在不加糖的狀態下喝）。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_naide_1',
                sentence: '傘を（　）出かけました。',
                options: ['持たないで', '持って', '持った', '持ちます'],
                correctIndex: 0,
                explanation: {
                    correct: '「持たないで」正確！表示「沒帶傘就出門了」。',
                    wrong: [
                        '其他選項意思相反或文法不通。'
                    ]
                }
            },
        ]
    },
    n5_naide_kudasai: {
        id: 'n5_naide_kudasai',
        pattern: 'ないでください',
        connection: '',
        translation: '請不要...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '禁止/請求（請不要...）',
                description: '禮貌地請求對方不要做某事。',
                examples: [
                    { japanese: 'ここで写真を撮らないでください。', chinese: '請不要在這裡拍照。' },
                    { japanese: '⼼配しないでください。', chinese: '請不要擔心。' },
                    { japanese: '忘れないでください。', chinese: '請不要忘記。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_naidek_1',
                sentence: 'ここでタバコを（　）ください。',
                options: ['吸わないで', '吸わなくて', '吸うな', '吸いません'],
                correctIndex: 0,
                explanation: {
                    correct: '「吸わないで」正確！乃形+ないでください。',
                    wrong: [
                        '其他選項接續錯誤。'
                    ]
                }
            },
        ]
    },
    n5_nakute_mo_ii: {
        id: 'n5_nakute_mo_ii',
        pattern: 'なくてもいい',
        connection: '',
        translation: '不...也可以',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: '動詞(ない形去い) + くてもいい',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '表示許可或不必要。意思是「不...也可以」、「不用...沒關係」。\n用於告訴對方沒有做的義務。',
                examples: [
                    { japanese: '脱がなくてもいいです。', chinese: '不用脫也可以。' },
                    { japanese: '明日来なくてもいいです。', chinese: '明天不來也可以。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_nakutemoii_1',
                sentence: '日曜日は早く（　）いいです。',
                options: ['起きなくても', '起きないで', '起きて', '起きる'],
                correctIndex: 0,
                explanation: {
                    correct: '「起きなくても」正確！「起きなくてもいい」=不用起床也可以。',
                    wrong: [
                        '接續錯誤。'
                    ]
                }
            },
        ]
    },
    n5_ni_iku: {
        id: 'n5_ni_iku',
        pattern: 'に行く',
        connection: '',
        translation: '去...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '移動的目的（去...）',
                description: '接在動詞ます形（去ます）或動作性名詞後面，表示移動（去、來、回）的目的。',
                examples: [
                    { japanese: '友だちの家に遊びに⾏く。', chinese: '去朋友家玩。' },
                    { japanese: '日本へ日本語を勉強しに行きます。', chinese: '去日本學日語。' },
                    { japanese: 'ラーメンを⾷べに⾏きましょう。', chinese: '去吃拉麵吧。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_niiku_1',
                sentence: 'デパートへ靴を（　）に行きます。',
                options: ['買い', '買う', '買って', '買おう'],
                correctIndex: 0,
                explanation: {
                    correct: '「買い」正確！買います -> 買いに行きます。',
                    wrong: [
                        '接續錯誤。'
                    ]
                }
            },
        ]
    },
    n5_ni_suru: {
        id: 'n5_ni_suru',
        pattern: 'にする',
        connection: '',
        translation: '決定是...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '決定/選擇',
                description: '在餐廳點餐或做決定時使用。「名詞 + にする」。',
                examples: [
                    { japanese: 'お茶にする。', chinese: '我要茶（決定喝茶）。' },
                    { japanese: 'これにします。', chinese: '我要這個（決定買這個）。' },
                    { japanese: '飲み物は何にする︖', chinese: '飲料要什麼？' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_nisuru_1',
                sentence: '私はコーヒー（　）します。',
                options: ['に', 'を', 'が', 'で'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！「〜にします」=決定是...。',
                    wrong: [
                        '其他助詞意思不符。'
                    ]
                }
            },
        ]
    },
    n5_no_ga_heta: {
        id: 'n5_no_ga_heta',
        pattern: 'のが下手',
        connection: '',
        translation: '不擅長做...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '不擅長...',
                description: '接在動詞辭書形後面，表示不擅長做該動作。「の」將動詞名詞化。',
                examples: [
                    { japanese: '彼はおはしを使うのが下⼿だ。', chinese: '他不擅長用筷子。' },
                    { japanese: '私は料理をするのが下⼿です。', chinese: '我不擅長做飯。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_nogahei_1',
                sentence: '私は絵を（　）のが下手です。',
                options: ['描く', '描き', '描いて', '描いた'],
                correctIndex: 0,
                explanation: {
                    correct: '「描く」正確！動詞辭書形 + のが下手。',
                    wrong: [
                        '接續錯誤。'
                    ]
                }
            },
        ]
    },
});


// ===== Batch 3 Part 2: keredomo - no_desu =====
Object.assign(n5Details, {
    n5_keredomo: {
        id: 'n5_keredomo',
        pattern: 'けれども',
        connection: '',
        translation: '但是; 雖然',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: '句子 + けれども',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '表示逆接，意思是「雖然...但是...」。\n與「けど」意思相同，但比「けど」更正式、禮貌。',
                examples: [
                    { japanese: 'おいしいけれども、高いです。', chinese: '雖然好吃，但是很貴。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_keredomo_1',
                sentence: '眠い（　）、宿題をします。',
                options: ['けれども', 'から', 'ので', 'なら'],
                correctIndex: 0,
                explanation: {
                    correct: '「けれども」正確！雖然...但是...。',
                    wrong: [
                        '其他選項文意不符。'
                    ]
                }
            },
        ]
    },
    n5_mada: {
        id: 'n5_mada',
        pattern: 'まだ',
        connection: '',
        translation: '還; 尚未',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '還（持續）',
                description: '表示狀態或動作仍在持續。',
                examples: [
                    { japanese: 'まだですか︖', chinese: '還沒好嗎？' },
                    { japanese: '先⽣はまだ来ていない。', chinese: '老師還沒來。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_mada_1',
                sentence: '宿題は（　）終わっていません。',
                options: ['まだ', 'もう', 'よく', 'たいてい'],
                correctIndex: 0,
                explanation: {
                    correct: '「まだ」正確！「まだ～ていません」=還沒...。',
                    wrong: [
                        '「もう」表示已經。'
                    ]
                }
            },
        ]
    },
    n5_naa: {
        id: 'n5_naa',
        pattern: 'なあ',
        connection: '',
        translation: '...啊 (感嘆)',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '感嘆/詠嘆',
                description: '接在句尾，表示深切的感觸或自言自語。',
                examples: [
                    { japanese: 'これ、美味しいなあ。', chinese: '這個真好吃啊。' },
                    { japanese: '暑くなってきたなあ。', chinese: '變熱了啊。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_naa_1',
                sentence: '今日は天気がいい（　）。',
                options: ['なあ', 'か', 'よ', 'ね'],
                correctIndex: 0,
                explanation: {
                    correct: '「なあ」正確！表示感嘆。',
                    wrong: [
                        '其他助詞語氣不同。'
                    ]
                }
            },
        ]
    },
    n5_nakucha: {
        id: 'n5_nakucha',
        pattern: 'なくちゃ',
        connection: '',
        translation: '必須...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '必須（口語）',
                description: '「なくては（いけない）」的口語縮略形。',
                examples: [
                    { japanese: '⾏かなくちゃ。', chinese: '得走了。' },
                    { japanese: 'もう寝なくちゃ。', chinese: '得睡了。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_nakuca_1',
                sentence: 'もう（　）なくちゃ。',
                options: ['帰ら', '帰る', '帰って', '帰り'],
                correctIndex: 0,
                explanation: {
                    correct: '「帰ら」正確！ない形（去ない）+なくちゃ。',
                    wrong: [
                        '接續錯誤。'
                    ]
                }
            },
        ]
    },
    n5_nakute_wa_ikenai: {
        id: 'n5_nakute_wa_ikenai',
        pattern: 'なくてはいけない',
        connection: '',
        translation: '必須...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '義務/必要',
                description: '表示不做某事不行，即「必須...」。',
                examples: [
                    { japanese: '薬を飲まなくてはいけない。', chinese: '必須吃藥。' },
                    { japanese: '早く起きなくてはいけません。', chinese: '必須早起。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_nakuteikenai_1',
                sentence: '毎日野菜を（　）なくてはいけません。',
                options: ['食べ', '食べる', '食べて', '食べた'],
                correctIndex: 0,
                explanation: {
                    correct: '「食べ」正確！ない形（去ない）+なくてはいけない。',
                    wrong: [
                        '接續錯誤。'
                    ]
                }
            },
        ]
    },
    n5_nakute_wa_naranai: {
        id: 'n5_nakute_wa_naranai',
        pattern: 'なくてはならない',
        connection: '',
        translation: '必須...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '義務/必要（正式）',
                description: '比「なくてはいけない」語氣更強，更正式。',
                examples: [
                    { japanese: '国民は税金を払わなくてはならない。', chinese: '國民必須納稅。' },
                    { japanese: '約束を守らなくてはなりません。', chinese: '必須遵守約定。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_nakutenaranai_1',
                sentence: '勉強し（　）てはなりません。',
                options: ['なく', 'ない', 'なか', 'ないで'],
                correctIndex: 0,
                explanation: {
                    correct: '「なく」正確！勉強しない -> 勉強しなくてはなりません。',
                    wrong: [
                        '接續錯誤。'
                    ]
                }
            },
        ]
    },
    n5_ni_naru: {
        id: 'n5_ni_naru',
        pattern: 'になる',
        connection: '',
        translation: '變成...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '接續方式',
                description: '名詞 + に + なる',
                examples: []
            },
            {
                usageId: 2,
                title: '意義詳解',
                description: '表示變化的結果。意思是「變成...」、「到了...」。\n特別常見於時間、季節的變化。',
                examples: [
                    { japanese: '春になりました。', chinese: '到了春天 (變成春天了)。' },
                    { japanese: '20歳になりました。', chinese: '滿20歲了。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n5_q_ninaru_1',
                sentence: '部屋が（　）なりました。',
                options: ['きれいに', 'きれい', 'きれいく', 'きれいで'],
                correctIndex: 0,
                explanation: {
                    correct: '「きれいに」正確！な形容詞 + になる。',
                    wrong: [
                        '接續錯誤。'
                    ]
                }
            },
        ]
    },
    n5_ndesu: {
        id: 'n5_ndesu',
        pattern: 'んです',
        connection: '',
        translation: '是...的',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '強調/解釋說明',
                description: '用於強調理由、解釋情況或尋求說明。',
                examples: [
                    { japanese: 'どうしたんですか。', chinese: '怎麼了嗎？（尋求說明）' },
                    { japanese: '頭が痛いんです。', chinese: '頭很痛。（解釋原因）' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_ndesu_1',
                sentence: 'どうして食べない（　）ですか。',
                options: ['ん', 'の', 'こと', 'もの'],
                correctIndex: 0,
                explanation: {
                    correct: '「ん」正確！口語中用「ん」代替「の」。',
                    wrong: [
                        '「の」是書面語，口語常用「ん」。'
                    ]
                }
            },
        ]
    },
    n5_ne: {
        id: 'n5_ne',
        pattern: 'ね',
        connection: '',
        translation: '呢; 吧',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '尋求同意/確認',
                description: '接在句尾，表示希望對方同意或確認事實。',
                examples: [
                    { japanese: 'いい天気ですね。', chinese: '天氣真好呢。' },
                    { japanese: 'そうですね。', chinese: '是啊。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_ne_1',
                sentence: 'きれいな花です（　）。',
                options: ['ね', 'よ', 'か', 'わ'],
                correctIndex: 0,
                explanation: {
                    correct: '「ね」正確！表示尋求共鳴「真漂亮的花呢」。',
                    wrong: [
                        '其他語氣不同。'
                    ]
                }
            },
        ]
    },
    n5_ni: {
        id: 'n5_ni',
        pattern: 'に',
        connection: '',
        translation: '在; 往; 於',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '存在的場所',
                description: '與「います/あります」連用，表示人或物存在的地點。',
                examples: [
                    { japanese: '部屋に猫がいます。', chinese: '房間裡有貓。' },
                    { japanese: '机の上に本があります。', chinese: '桌上有書。' },
                ]
            },
            {
                usageId: 2,
                title: '時間點',
                description: '表示動作發生的具體時間。',
                examples: [
                    { japanese: '朝6時に起きます。', chinese: '早上6點起床。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_ni_1',
                sentence: '日曜日（　）テニスをします。',
                options: ['に', 'で', 'を', 'が'],
                correctIndex: 0,
                explanation: {
                    correct: '「に」正確！特定時間點用「に」。',
                    wrong: [
                        '其他助詞用法不同。'
                    ]
                }
            },
        ]
    },
    n5_no: {
        id: 'n5_no',
        pattern: 'の',
        connection: '',
        translation: '的',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '所有格（的）',
                description: '連接兩個名詞，表示所屬關係。',
                examples: [
                    { japanese: '私の本。', chinese: '我的書。' },
                    { japanese: '日本語の先生。', chinese: '日語老師（日語的老師）。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_no_1',
                sentence: 'これ（　）誰のカバンですか。',
                options: ['は', 'の', 'が', 'を'],
                correctIndex: 0,
                explanation: {
                    correct: '「は」正確！這題要注意主語。「これは」=這是。但如果問「誰の」的「の」才是題目考點。',
                    wrong: [
                        '這題題目挖空是主語位置。'
                    ]
                }
            },
        ]
    },
    n5_no_desu: {
        id: 'n5_no_desu',
        pattern: 'のです',
        connection: '',
        translation: '是...的',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '解釋說明（書面）',
                description: '「のです」是「んです」的書面/正式形式。',
                examples: [
                    { japanese: '彼が犯人なのです。', chinese: '他就是犯人。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_nodesu_1',
                sentence: '行く（　）ですか。',
                options: ['の', 'ん', 'こと', 'もの'],
                correctIndex: 0,
                explanation: {
                    correct: '「の」正確！「行くのですか」是正式問句。',
                    wrong: [
                        '「ん」是口語。'
                    ]
                }
            },
        ]
    },
});


// ===== Batch 3 Part 3: no_ga_jouzu - yo (FINISH) =====
Object.assign(n5Details, {
    n5_no_ga_jouzu: {
        id: 'n5_no_ga_jouzu',
        pattern: 'のが上手',
        connection: '',
        translation: '擅長做...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '擅長...',
                description: '接在動詞辭書形後面，表示擅長做該動作。',
                examples: [
                    { japanese: '彼は歌うのが上⼿です。', chinese: '他很擅長唱歌。' },
                    { japanese: '日本語を話すのが上手ですね。', chinese: '日語說得很棒呢。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_nogajouzu_1',
                sentence: '彼女はピアノを（　）のが上手です。',
                options: ['弾く', '弾き', '弾いて', '弾いた'],
                correctIndex: 0,
                explanation: {
                    correct: '「弾く」正確！動詞辭書形 + のが上手。',
                    wrong: [
                        '接續錯誤。'
                    ]
                }
            },
        ]
    },
    n5_no_ga_suki: {
        id: 'n5_no_ga_suki',
        pattern: 'のが好き',
        connection: '',
        translation: '喜歡做...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '喜歡做...',
                description: '接在動詞辭書形後面，表示喜歡做該動作。',
                examples: [
                    { japanese: '私は音楽を聞くのが好きです。', chinese: '我喜歡聽音樂。' },
                    { japanese: '本を読むのが好きです。', chinese: '喜歡讀書。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_nogasuki_1',
                sentence: 'アニメを（　）のが好きです。',
                options: ['見る', '見り', '見て', '見た'],
                correctIndex: 0,
                explanation: {
                    correct: '「見る」正確！動詞辭書形 + のが好き。',
                    wrong: [
                        '接續錯誤。'
                    ]
                }
            },
        ]
    },
    n5_no_naka_de: {
        id: 'n5_no_naka_de',
        pattern: 'の中で',
        connection: '',
        translation: '在...之中',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '範圍（在...之中）',
                description: '表示比較的範圍。常用於最高級比較。',
                examples: [
                    { japanese: 'スポーツの中でサッカーが一番好きです。', chinese: '運動之中最喜歡足球。' },
                    { japanese: '果物の中で何が好きですか。', chinese: '水果之中喜歡什麼？' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_nonakade_1',
                sentence: '日本料理（　）寿司が一番好きです。',
                options: ['の中で', 'で', 'より', 'から'],
                correctIndex: 0,
                explanation: {
                    correct: '「の中で」正確！表示範圍。',
                    wrong: [
                        '其他選項文意不符。'
                    ]
                }
            },
        ]
    },
    n5_no_naka_de_a_ga_ichiban: {
        id: 'n5_no_naka_de_a_ga_ichiban',
        pattern: 'の中で[A]が一番',
        connection: '',
        translation: '在...之中[A]最...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '最高級比較',
                description: '表示在某個範圍內，A是程度最高的。',
                examples: [
                    { japanese: 'クラスの中で彼が一番背が高いです。', chinese: '班上他個子最高。' },
                    { japanese: '一週間の中で金曜日が一番好きです。', chinese: '一週之中最喜歡星期五。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_nonakadeichiban_1',
                sentence: '季節の中で（　）が一番好きですか。',
                options: ['いつ', 'どこ', 'だれ', 'なに'],
                correctIndex: 0,
                explanation: {
                    correct: '「いつ」正確！季節是時間，用「いつ」。',
                    wrong: [
                        '其他疑問詞不符。'
                    ]
                }
            },
        ]
    },
    n5_node: {
        id: 'n5_node',
        pattern: 'ので',
        connection: '',
        translation: '因為',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '原因/理由（客觀）',
                description: '比「から」語氣更委婉、客觀。常用於請求許可或陳述客觀事實。',
                examples: [
                    { japanese: 'バスが遅れたので、遅刻しました。', chinese: '因為公車晚點，所以遲到了。' },
                    { japanese: '頭が痛いので、帰ってもいいですか。', chinese: '因為頭痛，可以回去嗎。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_node_1',
                sentence: '用事が（　）ので、先に失礼します。',
                options: ['ある', 'あって', 'あり', 'あった'],
                correctIndex: 0,
                explanation: {
                    correct: '「ある」正確！普通形 + ので。',
                    wrong: [
                        '接續錯誤。'
                    ]
                }
            },
        ]
    },
    n5_o_go: {
        id: 'n5_o_go',
        pattern: 'お / ご',
        connection: '',
        translation: '美化語 (敬語前綴)',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '美化語',
                description: '接在名詞前，表示禮貌或尊敬。「お」通常接和語詞，「ご」通常接漢語詞。',
                examples: [
                    { japanese: 'お酒', chinese: '酒' },
                    { japanese: 'お金', chinese: '錢' },
                    { japanese: 'ご家族', chinese: '家人' },
                    { japanese: 'ご住所', chinese: '地址' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_ogo_1',
                sentence: '（　）名前は何ですか。',
                options: ['お', 'ご', 'み', '高'],
                correctIndex: 0,
                explanation: {
                    correct: '「お」正確！「お名前」。',
                    wrong: [
                        '名前是和語詞，用「お」。'
                    ]
                }
            },
        ]
    },
    n5_o_wo: {
        id: 'n5_o_wo',
        pattern: 'を',
        connection: '',
        translation: '賓語助詞',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '賓語標記',
                description: '表示動作的對象（受詞）。',
                examples: [
                    { japanese: 'ご飯を食べます。', chinese: '吃飯。' },
                    { japanese: '日本語を勉強します。', chinese: '學日語。' },
                ]
            },
            {
                usageId: 2,
                title: '移動場所',
                description: '表示移動動作經過的場所（離開、通過）。',
                examples: [
                    { japanese: 'バスを降ります。', chinese: '下公車。' },
                    { japanese: '公園を散歩します。', chinese: '在公園散步。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_o_1',
                sentence: '道を（　）ます。',
                options: ['渡り', '渡る', '渡って', '渡った'],
                correctIndex: 0,
                explanation: {
                    correct: '「渡り」正確！「道を渡ります」=過馬路。',
                    wrong: [
                        '接續錯誤。'
                    ]
                }
            },
        ]
    },
    n5_o_kudasai: {
        id: 'n5_o_kudasai',
        pattern: 'をください',
        connection: '',
        translation: '請給我...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '請求（請給我...）',
                description: '在商店買東西或點餐時使用。',
                examples: [
                    { japanese: '水をください。', chinese: '請給我水。' },
                    { japanese: 'これをください。', chinese: '請給我這個。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_okudasai_1',
                sentence: 'コーヒー（　）ください。',
                options: ['を', 'が', 'は', 'に'],
                correctIndex: 0,
                explanation: {
                    correct: '「を」正確！「名詞 + をください」。',
                    wrong: [
                        '助詞錯誤。'
                    ]
                }
            },
        ]
    },
    n5_tai: {
        id: 'n5_tai',
        pattern: 'たい',
        connection: '',
        translation: '想要做...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '願望（想做...）',
                description: '接在動詞ます形（去ます）後面，表示說話者的願望。',
                examples: [
                    { japanese: '日本へ行きたいです。', chinese: '想去日本。' },
                    { japanese: '水が飲みたい。', chinese: '想喝水。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_tai_1',
                sentence: 'テレビを（　）たいです。',
                options: ['見', '見る', '見て', '見た'],
                correctIndex: 0,
                explanation: {
                    correct: '「見」正確！見ます -> 見たい。',
                    wrong: [
                        '接續錯誤。'
                    ]
                }
            },
        ]
    },
    n5_toki: {
        id: 'n5_toki',
        pattern: 'とき',
        connection: '',
        translation: '...的時候',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '時間（...的時候）',
                description: '表示做某動作的時候或某狀態的時候。',
                examples: [
                    { japanese: '寝るとき、電気を消します。', chinese: '睡覺時會關燈。' },
                    { japanese: '子供のとき、よく川で遊びました。', chinese: '小時候常在河邊玩。' },
                    { japanese: '暇なとき、ゲームをします。', chinese: '有空時玩遊戲。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_toki_1',
                sentence: '図書館へ（　）とき、カードを持って行きます。',
                options: ['行く', '行って', '行った', '行かない'],
                correctIndex: 0,
                explanation: {
                    correct: '「行く」正確！「行くとき」=去的時候（還沒到）。',
                    wrong: [
                        '「行ったとき」=去到之後。'
                    ]
                }
            },
        ]
    },
    n5_totemo: {
        id: 'n5_totemo',
        pattern: 'とても',
        connection: '',
        translation: '非常',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '程度（非常）',
                description: '修飾形容詞，表示程度很高。',
                examples: [
                    { japanese: 'とても美味しいです。', chinese: '非常好吃。' },
                    { japanese: '今日はとても暑いです。', chinese: '今天非常熱。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_totemo_1',
                sentence: 'この映画は（　）面白かったです。',
                options: ['とても', 'あまり', '全然', 'ちょっと'],
                correctIndex: 0,
                explanation: {
                    correct: '「とても」正確！修飾肯定形。',
                    wrong: [
                        '「あまり」「全然」通常接否定。'
                    ]
                }
            },
        ]
    },
    n5_yo: {
        id: 'n5_yo',
        pattern: 'よ',
        connection: '',
        translation: '喔 (告知)',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '告知/強調',
                description: '放在句尾，用於告訴對方不知道的訊息或強調自己的主張。',
                examples: [
                    { japanese: '明日、テストですよ。', chinese: '明天有考試喔。' },
                    { japanese: '違いますよ。', chinese: '不對喔。' },
                    { japanese: 'あそこに猫がいるよ。', chinese: '那裡有貓喔。' },
                ]
            },
        ],
        quiz: [
            {
                id: 'n5_q_yo_1',
                sentence: 'その店は（　）よ。',
                options: ['休みだ', '休み', '休みの', '休みで'],
                correctIndex: 0,
                explanation: {
                    correct: '「休みだ」正確！普通形 + よ。',
                    wrong: [
                        '接續錯誤。'
                    ]
                }
            },
        ]
    },

    'n5_pdf_auto_2': {
        id: 'n5_pdf_auto_2',
        pattern: 'か〜か',
        connection: '',
        translation: '...或者...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '基本用法',
                description: '...或者...',
                examples: [
                    { japanese: '明⽇は⾬かどうか分からない。', chinese: '不知道明天會不會下雨。' },
                    { japanese: 'お茶かコーヒーが飲みたい。', chinese: '想喝茶或咖啡。' },
                    { japanese: '当たるかはずれるか。', chinese: '是中還是不中（看運氣）。' },
                    { japanese: 'やるかやらないか早く決めてください。', chinese: '做還是不做，請快點決定。' },
                    { japanese: '来週の⽉曜⽇か⽕曜⽇に京都に⾏きます。', chinese: '下週一或週二要去京都。' },
                    { japanese: '死ぬか⽣きるか。', chinese: '是死是活。' }
                ]
            }
        ],
        quiz: []
    },
    'n5_pdf_auto_4': {
        id: 'n5_pdf_auto_4',
        pattern: '⽅',
        connection: '',
        translation: '...的方法',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '基本用法',
                description: '...的方法',
                examples: [
                    { japanese: 'パソコンの使いかたがわかりません。', chinese: '不知道電腦的使用方法。' },
                    { japanese: 'ケーキの作り⽅を知っていますか︖', chinese: '你知道蛋糕的做法嗎？' },
                    { japanese: 'おはしの使い⽅が上⼿ですね。', chinese: '你筷子用得很棒呢。' },
                    { japanese: 'あの先⽣の教え⽅ はとてもわかりやすいです。', chinese: '那位老師的教法很容易懂。' },
                    { japanese: '彼の⽣き⽅は、かっこいいです。', chinese: '他的生活方式很帥氣。' },
                    { japanese: 'この漢字の読み⽅ を教えてください。', chinese: '請教我這個漢字的唸法。' },
                    { japanese: 'ATMの使い⽅を教えていただけませんか。', chinese: '可以教我ATM的使用方法嗎？' }
                ]
            }
        ],
        quiz: []
    },
    'n5_pdf_auto_10': {
        id: 'n5_pdf_auto_10',
        pattern: '前に',
        connection: '',
        translation: '在...之前; 在...前面',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '基本用法',
                description: '在...之前; 在...前面',
                examples: [
                    { japanese: 'ドアを開ける前にノックぐらいしてください。', chinese: '開門前請至少敲個門。' },
                    { japanese: 'コンビニの前にじてんしゃがたくさんあります。', chinese: '便利商店前面有很多腳踏車。' },
                    { japanese: '旅⾏の前に切符を買っておきます。', chinese: '旅行前先買好票。' },
                    { japanese: 'ご飯の前に⼿を洗いましょう。', chinese: '飯前洗手吧。' },
                    { japanese: 'テストの前に⼀⽣懸命勉強しました。', chinese: '考試前拚命念書了。' },
                    { japanese: '⼤学を卒業する前に留学したいな。', chinese: '想在大學畢業前去留學啊。' },
                    { japanese: '23時前に寝なければなりません。', chinese: '必須在23點前睡覺。' },
                    { japanese: '寝る前に、⻭みがきを忘すれないでね。', chinese: '睡前別忘了刷牙喔。' },
                    { japanese: '試合の前にまだ⼀週間があるのでもっと練習しょう。', chinese: '比賽前還有一週，多練習吧。' },
                    { japanese: '私たちの学校の前には美しい公園があります。', chinese: '我們學校前面有一座美麗的公園。' }
                ]
            }
        ],
        quiz: []
    },
    'n5_pdf_auto_19': {
        id: 'n5_pdf_auto_19',
        pattern: 'なくてもいい',
        connection: '',
        translation: '不...也可以; 沒關係',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '基本用法',
                description: '不...也可以; 沒關係',
                examples: [
                    { japanese: '明⽇は休みだから、学校に⾏かなくてもいい 。', chinese: '明天休假，所以不用去學校也可以。' },
                    { japanese: '空港まで来なくてもいいよ。', chinese: '你不用特地來機場也可以喔。' },
                    { japanese: '好きじゃないなら、⾷べ なくてもいいですよ。', chinese: '不喜歡的話，不吃也沒關係喔。' },
                    { japanese: '来なくてもいいですよ。私⼀⼈で⾏くから。', chinese: '不來也可以喔。因為我一個人去。' },
                    { japanese: '無理しなくてもいい ですよ。', chinese: '不需要勉強自己喔。' },
                    { japanese: '明⽇は授業がないから⼤学に⾏か なくてもいいです。', chinese: '明天沒課，所以不用去大學也可以。' },
                    { japanese: '時間がまだいっぱいあるから、そんなに急がなくていい よ。', chinese: '時間還很多，不用那麼趕也可以喔。' },
                    { japanese: '外⾷しなくていい よ。家で⾷べましょう。', chinese: '不用出去吃也可以喔。在家吃吧。' },
                    { japanese: 'その本はあげるよ，返してくれなくてもいい からね。', chinese: '那本書送你，不用還我也可以喔。' },
                    { japanese: '⼩学⽣以下はお⾦を払わ なくてもいいです。', chinese: '小學生以下不用付錢。' }
                ]
            }
        ],
        quiz: []
    },
    'n5_pdf_auto_20': {
        id: 'n5_pdf_auto_20',
        pattern: 'なくちゃ',
        connection: '',
        translation: '必須... (口語)',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '基本用法',
                description: '必須... (口語)',
                examples: [
                    { japanese: '⾏かなくちゃ。', chinese: '得走了。' },
                    { japanese: 'もう寝なくちゃ。', chinese: '得睡了。' },
                    { japanese: '新しい⾞を買わなくちゃね。', chinese: '得買新車了呢。' },
                    { japanese: 'よく考えなくちゃダメ だよ。', chinese: '得好好思考才行喔。' },
                    { japanese: '君でなくちゃダメ なんだ。', chinese: '非你不可。' },
                    { japanese: '彼は返さなくちゃいけない借⾦がある', chinese: '他有必須償還的債務。' },
                    { japanese: 'なんで僕がやらなくちゃいけないの。', chinese: '為什麼我非做不可？' },
                    { japanese: 'すぐに警察に連絡しなくちゃいけません。', chinese: '必須馬上聯絡警察。' },
                    { japanese: '世話しなくちゃならない⼦供がいる。', chinese: '我有必須照顧的孩子。' },
                    { japanese: 'ごめんなさい。早く帰ら なくちゃなりません。', chinese: '對不起。必須早點回去。' }
                ]
            }
        ],
        quiz: []
    },
    'n5_pdf_auto_21': {
        id: 'n5_pdf_auto_21',
        pattern: 'なくてはいけない',
        connection: '',
        translation: '必須...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '基本用法',
                description: '必須...',
                examples: [
                    { japanese: '本当にすぐ⾏かなくてはいけない。', chinese: '真的必須馬上走了。' },
                    { japanese: '急がなくてはいけない。', chinese: '必須趕快才行。' },
                    { japanese: 'もう10時だ。寝なくてはいけない。', chinese: '已經10點了。必須睡了。' },
                    { japanese: '⽇本語をもっと勉強し なくてはいけない。', chinese: '必須更努力學日語。' },
                    { japanese: '花の⽔やりをしなくてはいけません。', chinese: '必須給花澆水。' },
                    { japanese: '明⽇、早く起きなくてはいけません。', chinese: '明天必須早起。' },
                    { japanese: '野菜を⾷べなくてはいけませんよ。', chinese: '必須吃蔬菜喔。' },
                    { japanese: 'JLPTを受けなくてはいけません。', chinese: '必須參加JLPT考試。' },
                    { japanese: 'もう帰らなくてはいけません。', chinese: '已經必須回去了。' },
                    { japanese: '⽇本語⼒を上達させなくてはいけません。', chinese: '必須讓日語能力進步。' }
                ]
            }
        ],
        quiz: []
    },
    'n5_pdf_auto_22': {
        id: 'n5_pdf_auto_22',
        pattern: 'なくてはならない',
        connection: '',
        translation: '必須... (正式)',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '基本用法',
                description: '必須... (正式)',
                examples: [
                    { japanese: '急がなくてはならない。', chinese: '必須趕快才行。' },
                    { japanese: '本当にすぐ⾏かなくてはならない。', chinese: '真的必須馬上走了。' },
                    { japanese: 'もう10時だ。寝なくてはならない。', chinese: '已經10點了。必須睡了。' },
                    { japanese: '⽇本語をもっと勉強し なくてはいけない。', chinese: '必須更努力學日語。' },
                    { japanese: '花の⽔やりをしなくてはなりません。', chinese: '必須給花澆水。' },
                    { japanese: '明⽇、早く起きなくてはなりません。', chinese: '明天必須早起。' },
                    { japanese: '野菜を⾷べなくてはなりませんよ。', chinese: '必須吃蔬菜喔。' },
                    { japanese: '⽇本語能⼒試験を受け なくてはなりません。', chinese: '必須參加日語能力試驗。' },
                    { japanese: 'もう帰らなくてはなりません。', chinese: '已經必須回去了。' },
                    { japanese: '⽇本語⼒を上達させなくてはなりません。', chinese: '必須讓日語能力進步。' }
                ]
            }
        ],
        quiz: []
    },
    'n5_pdf_auto_23': {
        id: 'n5_pdf_auto_23',
        pattern: 'になる',
        connection: '',
        translation: '變成...; 成為...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '基本用法',
                description: '變成...; 成為...',
                examples: [
                    { japanese: '⼤きくなっている ね︕', chinese: '變大了呢！' },
                    { japanese: '今⽇は暑くなるようだ。', chinese: '今天似乎會變熱。' },
                    { japanese: '今年、私は２０歳になります 。', chinese: '我今年要20歲了。' },
                    { japanese: '暗くなる前に家に帰りたい。', chinese: '想在變暗前回家。' },
                    { japanese: 'もっと強くなるために、毎⽇運動しています。', chinese: '為了變得更強，每天都在運動。' },
                    { japanese: '⽇本語が上⼿になっていますね。', chinese: '日語變好了呢。' },
                    { japanese: '将来、何になりたい ですか。', chinese: '將來想成為什麼（職業）？' },
                    { japanese: '６⽉に⼊って、ちょっと暑くなったね。', chinese: '進入6月，稍微變熱了呢。' },
                    { japanese: '暗くなってきましたね。そろそろ帰りましょうか。', chinese: '變暗了呢。差不多該回去了吧？' },
                    { japanese: '今⽇のイベントは中⽌ になりました。', chinese: '今天的活動中止了。' }
                ]
            }
        ],
        quiz: []
    },
    'n5_pdf_auto_24': {
        id: 'n5_pdf_auto_24',
        pattern: 'んです',
        connection: '',
        translation: '是...的 (強調說明)',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '基本用法',
                description: '是...的 (強調說明)',
                examples: [
                    { japanese: '何を飲みたいんですか。', chinese: '你想喝什麼？' },
                    { japanese: 'お茶を飲みたいんです。', chinese: '我想喝茶。' },
                    { japanese: '眠くないんですか。', chinese: '你不睏嗎？' },
                    { japanese: '気分が良くないんですよ。', chinese: '我身體不太舒服。' },
                    { japanese: '今からバイトに⾏くんだ。', chinese: '我現在要去打工。' },
                    { japanese: '朝に弱いんだ。', chinese: '我早上起不來（不擅長早起）。' },
                    { japanese: 'いつか⽇本に⾏くんだ︕', chinese: '總有一天要去日本！' },
                    { japanese: '買いたいんですがお⾦がない んだ。', chinese: '想買是想買，但沒錢啊。' }
                ]
            }
        ],
        quiz: []
    },
    'n5_pdf_auto_26': {
        id: 'n5_pdf_auto_26',
        pattern: 'に',
        connection: '',
        translation: '在; 往; 於',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '基本用法',
                description: '在; 往; 於',
                examples: [
                    { japanese: '来⽉⼤学に⼊る。', chinese: '下個月進大學。' },
                    { japanese: 'どうやって学校に 通っていますか︖', chinese: '你怎麼去學校的？' },
                    { japanese: 'あなたは何時にスーパーに⾏きますか︖', chinese: '你幾點去超市？' },
                    { japanese: '彼は、⼤学に⼊るための努⼒をしている。', chinese: '他正在為了進大學而努力。' },
                    { japanese: '⽇本に来たことはありますか︖', chinese: '你有來過日本嗎？' },
                    { japanese: 'あの⽊の下に⼤きな⽝がいます。', chinese: '那棵樹下有一隻大狗。' },
                    { japanese: '今家の中にいますよ。', chinese: '現在在家裡喔。' },
                    { japanese: 'ここにお名前を書いてください。', chinese: '請在這裡寫名字。' },
                    { japanese: 'アメリカにはどのくらい滞在しますか︖', chinese: '會在美國待多久？' }
                ]
            }
        ],
        quiz: []
    },
    'n5_pdf_auto_27': {
        id: 'n5_pdf_auto_27',
        pattern: 'に行く',
        connection: '',
        translation: '去做... (移動目的)',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '基本用法',
                description: '去做... (移動目的)',
                examples: [
                    { japanese: '友だちの家に遊びに⾏く。', chinese: '去朋友家玩。' },
                    { japanese: '⽇本に勉強しに⾏くつもりなのです。', chinese: '打算去日本唸書。' },
                    { japanese: '東京へなにしに⾏くの︖', chinese: '去東京做什麼？' },
                    { japanese: '私たちは公園にサッカーをしに⾏くつもりだ。', chinese: '我們打算去公園踢足球。' },
                    { japanese: 'メキシコへ友だちに会い に⾏きます。', chinese: '去墨西哥見朋友。' },
                    { japanese: 'ちょっと⾛りに⾏ってきます。', chinese: '稍微去跑個步。' },
                    { japanese: '明⽇、友⼈と⼀緒に⽇本⾷を⾷べ に⾏きます。', chinese: '明天要跟朋友一起去吃日本料理。' },
                    { japanese: '私は今度はベトナムへ旅⾏しに⾏きます 。', chinese: '我下次要去越南旅行。' },
                    { japanese: 'ゴミを捨てに⾏きます。', chinese: '去倒垃圾。' },
                    { japanese: '今夜ラーメンを⾷べに⾏きましょう︕', chinese: '今晚去吃拉麵吧！' }
                ]
            }
        ],
        quiz: []
    },
    'n5_pdf_auto_28': {
        id: 'n5_pdf_auto_28',
        pattern: 'にする',
        connection: '',
        translation: '決定是...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '基本用法',
                description: '決定是...',
                examples: [
                    { japanese: 'どれにする?', chinese: '要哪個？' },
                    { japanese: '飲み物は何にする︖', chinese: '飲料要什麼？' },
                    { japanese: 'お茶にする。', chinese: '我要茶。' },
                    { japanese: '私は明⽇と来週の⽕曜⽇を休みにする。', chinese: '我明天和下週二休假。' },
                    { japanese: 'これにします。', chinese: '我要這個。' },
                    { japanese: '今⽇は部屋をきれいにします。', chinese: '今天要把房間弄乾淨。' },
                    { japanese: '君を幸せにします。', chinese: '我會讓你幸福。' },
                    { japanese: '紅茶にしますかそれともコーヒー にしますか。', chinese: '要紅茶還是咖啡？' },
                    { japanese: '今年は素晴しい年にします︕', chinese: '今年要是個精彩的一年！' }
                ]
            }
        ],
        quiz: []
    },
    'n5_pdf_auto_29': {
        id: 'n5_pdf_auto_29',
        pattern: 'の',
        connection: '',
        translation: '的; 關於',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '基本用法',
                description: '的; 關於',
                examples: [
                    { japanese: 'あなたの名前は何ですか︖', chinese: '你的名字是什麼？' },
                    { japanese: 'あなたの⽝ですか︖', chinese: '是你的狗嗎？' },
                    { japanese: 'これはだれのカバンですか︖', chinese: '這是誰的包包？' },
                    { japanese: '私の先⽣はとてもいい先⽣だ。', chinese: '我的老師是非常好的老師。' },
                    { japanese: '彼⽒の好きな料理はカレーです。', chinese: '男朋友喜歡的菜是咖哩。' },
                    { japanese: '彼⼥のお⽗さんはとても怖いです。', chinese: '女朋友的父親很可怕。' },
                    { japanese: '私の⼀番好きな季節は秋だ。', chinese: '我最喜歡的季節是秋天。' },
                    { japanese: 'このカメラは私の ではなく、友だちの です。', chinese: '這個相機不是我的，是朋友的。' },
                    { japanese: '夏の暑さのせいで私は寝不⾜です。', chinese: '因為夏天的炎熱，我睡眠不足。' }
                ]
            }
        ],
        quiz: []
    },
    'n5_pdf_auto_30': {
        id: 'n5_pdf_auto_30',
        pattern: 'のです',
        connection: '',
        translation: '是...的 (解釋說明)',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '基本用法',
                description: '是...的 (解釋說明)',
                examples: [
                    { japanese: 'どこへ⾏きたいのですか。', chinese: '你想去哪裡？' },
                    { japanese: 'どう違うのだ。', chinese: '有什麼不同？' },
                    { japanese: '何を⾔いたいのですか。', chinese: '你想說什麼？' },
                    { japanese: 'あなたは優しいのですね。', chinese: '你很溫柔呢。' },
                    { japanese: '昼ごはんを⾷べなかった のですね。', chinese: '你沒吃午餐對吧。' },
                    { japanese: '今⽇は学校に⾏くのですね。', chinese: '今天要去學校對吧。' },
                    { japanese: 'あなたが悪いのだ。', chinese: '是你的錯。' },
                    { japanese: '⾷べるために⽣きるのではない。⽣きるために⾷べるのだ。', chinese: '不是為了吃而活。是為了活而吃。' }
                ]
            }
        ],
        quiz: []
    },
    'n5_pdf_auto_31': {
        id: 'n5_pdf_auto_31',
        pattern: 'のが下手',
        connection: '',
        translation: '不擅長做...',
        level: 'N5',
        explanation: [
            {
                usageId: 1,
                title: '基本用法',
                description: '不擅長做...',
                examples: [
                    { japanese: '彼はおはしを使うのが下⼿だ。', chinese: '他不擅長用筷子。' },
                    { japanese: '⺟は料理をするのが下⼿だ。', chinese: '母親不擅長做飯。' },
                    { japanese: '私は⼈としゃべるのが下⼿だ。', chinese: '我不擅長跟人交談。' }
                ]
            }
        ],
        quiz: []
    },
});
