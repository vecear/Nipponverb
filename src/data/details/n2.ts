import { GrammarPoint } from '../../types/grammar';

export const n2Details: Record<string, GrammarPoint> = {
    'n2_ageku': {
        id: 'n2_ageku',
        pattern: 'あげく',
        connection: '動{どう}詞{し}た形{けい} + あげく（に）\n名{めい}詞{し} + の + あげく（に）',
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
                        japanese: '「新{あたら}しいパソコン、買{か}ったの？」\n「うん、どの機種{きしゅ}にするか迷{まよ}ったあげく、結局{けっきょく}買{か}わなかったんだ。」\n「ええ？時間{じかん}もったいなかったね。」',
                        chinese: '「新電腦買了嗎？」\n「嗯，猶豫了半天要買哪個型號，結果最後沒買。」\n「咦？太浪費時間了吧。」'
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
                    examples: [{ japanese: '待{ま}たされたあげく、キャンセルされた。', chinese: '讓人等了半天，最後卻被取消了。' }]
                },
                {
                    rule: '末（すえ）：可接正面或負面結果，單純強調經過漫長過程。',
                    examples: [{ japanese: '苦労{くろう}した末{すえ}に、やっと成功{せいこう}した。', chinese: '歷經辛苦，終於成功了。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n2_ageku_1',
                sentence: 'いろいろ悩{なや}んだ（　）、会{かい}社{しゃ}を辞{や}めることにした。',
                options: ['あげく', 'きり', '一方{いっぽう}', '際{さい}'],
                correctIndex: 0,
                explanation: '「悩{なや}んだ」為過去式（た形），表示經過一番煩惱，最後做出決定。'
            },
            {
                id: 'n2_ageku_2',
                sentence: '彼{かれ}は借金{しゃっきん}を重{かさ}ねた（　）、犯罪{はんざい}に手{て}を染{そ}めてしまった。',
                options: ['あげく', '末{すえ}', '結{けっ}果{か}', '以上{いじょう}'],
                correctIndex: 0,
                explanation: '負面結果に至{いた}る長い過程を示すため「あげく」が最も自然。'
            },
            {
                id: 'n2_ageku_3',
                sentence: '大{おお}喧嘩{げんか}の（　）、二人{ふたり}は別{わか}れてしまった。',
                options: ['あげく', 'あと', 'ところ', 'ばかり'],
                correctIndex: 0,
                explanation: '名{めい}詞{し}＋の＋あげく。大喧嘩の末に別れる、という流れ。'
            }
        ]
    },
    'n2_aruiwa': {
        id: 'n2_aruiwa',
        pattern: 'あるいは',
        connection: '文{ぶん} + あるいは + 文{ぶん}\n名{めい}詞{し} + あるいは + 名{めい}詞{し}',
        translation: '或者; 或是',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '並列選擇',
                description: '二者擇一或列舉選項的「或者」。書面感較強，常見於通知、說明或正式文句。',
                examples: [
                    { japanese: '当{とう}日{じつ}は電{でん}車{しゃ}で来{く}るか、あるいはバスで来{く}てください。', chinese: '當天請搭電車或是公車過來。' },
                    { japanese: '申{もう}し込{こ}みは郵送{ゆうそう}、あるいはオンラインで受{う}け付{つ}けています。', chinese: '申請可用郵寄或線上方式受理。' },
                    { japanese: '週末{しゅうまつ}は映{えい}画{が}を見{み}る、あるいは家{いえ}で休{やす}む予定{よてい}だ。', chinese: '週末打算看電影，或是在家休息。' }
                ]
            }
        ],
        analysis: {
            title: '「あるいは」與「または」',
            description: '兩者都表示「或者」，但語感略有不同。',
            points: [
                {
                    rule: 'あるいは：較正式、書面用語。',
                    examples: [{ japanese: '本{ほん}日{じつ}は会議{かいぎ}、あるいは研修{けんしゅう}に参加{さんか}してください。', chinese: '今天請參加會議或研修。' }]
                },
                {
                    rule: 'または：中性、日常與書面皆可。',
                    examples: [{ japanese: '電話{でんわ}またはメールでご連絡{れんらく}ください。', chinese: '請用電話或郵件聯絡。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n2_aruiwa_1',
                sentence: '当{とう}日{じつ}は電{でん}車{しゃ}（　）バスでお越{こ}しください。',
                options: ['あるいは', 'しかし', 'たとえば', 'つまり'],
                correctIndex: 0,
                explanation: '二者択一の接続。'
            },
            {
                id: 'n2_aruiwa_2',
                sentence: '申{もう}し込{こ}みは窓{まど}口{ぐち}、（　）オンラインで可{か}能{のう}です。',
                options: ['あるいは', 'それに', 'ところが', '一方{いっぽう}'],
                correctIndex: 0,
                explanation: '手段を並列して示す。'
            },
            {
                id: 'n2_aruiwa_3',
                sentence: '週末{しゅうまつ}は家{いえ}で休{やす}む（　）、友{とも}達{だち}と出{で}かける。',
                options: ['あるいは', 'おかげで', 'しかも', 'それでも'],
                correctIndex: 0,
                explanation: '二つの選択肢を示す。'
            }
        ]
    },
    'n2_bakari': {
        id: 'n2_bakari',
        pattern: 'ばかり',
        connection: '名{めい}詞{し}・數{すう}量{りょう} + ばかり',
        translation: '大約; 左右',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '概算・おおよその数量',
                description: '「約〜」「だいたい〜」の意味で、数量や時間などのおおよその目安を示す。N4の「ばかり（だけ）」とは意味が異なる。',
                examples: [
                    { japanese: '会{かい}場{じょう}には百{ひゃく}人{にん}ばかり集{あつ}まった。', chinese: '會場大約聚集了一百人。' },
                    { japanese: 'この作{さく}業{ぎょう}は二{に}時{じ}間{かん}ばかりかかる。', chinese: '這項作業大約要花兩小時。' },
                    { japanese: '駅{えき}まで十{じゅっ}分{ぷん}ばかり歩{ある}きます。', chinese: '走到車站大約十分鐘。' }
                ]
            }
        ],
        analysis: {
            title: '「ばかり」與「ぐらい」',
            description: '兩者都表示概數。語感上「ばかり」稍偏書面。',
            points: [
                {
                    rule: 'ばかり：較正式、書面。',
                    examples: [{ japanese: '千{せん}円{えん}ばかり用{よう}意{い}してください。', chinese: '請準備大約一千日圓。' }]
                },
                {
                    rule: 'ぐらい：較口語、日常。',
                    examples: [{ japanese: '千{せん}円{えん}ぐらい持{も}ってきて。', chinese: '帶個一千塊左右來。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n2_bakari_1',
                sentence: 'この会{かい}場{じょう}には五{ご}十{じゅう}人{にん}（　）来{き}ています。',
                options: ['ばかり', 'しか', 'だけで', 'ほどに'],
                correctIndex: 0,
                explanation: '概数の表現。'
            },
            {
                id: 'n2_bakari_2',
                sentence: '駅{えき}からここまで十{じゅっ}分{ぷん}（　）です。',
                options: ['ばかり', 'こそ', 'さえ', 'のみ'],
                correctIndex: 0,
                explanation: '時間の概算に使う。'
            },
            {
                id: 'n2_bakari_3',
                sentence: '「どのくらい待{ま}ちましたか。」\n「一{いっ}時{じ}間{かん}（　）です。」',
                options: ['ばかり', 'ばかりか', 'ばかりで', 'ばかりに'],
                correctIndex: 0,
                explanation: '「ばかりか」「ばかりで」「ばかりに」は別用法。'
            }
        ]
    },
    'n2_bakari_da': {
        id: 'n2_bakari_da',
        pattern: 'ばかりだ',
        connection: '動{どう}詞{し}辭書{じしょ}形{けい} + ばかりだ',
        translation: '不斷地...; 一直在... (往壞的方向)',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '變化只朝一個方向',
                description: '狀態或情況只朝某個方向發展，多半是變壞或減少。帶有無奈或擔憂的語氣。',
                examples: [
                    { japanese: '物{もの}価{か}は上{あ}がるばかりだ。', chinese: '物價一直在上漲。' },
                    { japanese: '彼{かれ}の成績{せいせき}は悪{わる}くなるばかりだ。', chinese: '他的成績只會越來越差。' },
                    { japanese: '雨{あめ}は強{つよ}くなるばかりで、止{や}む気{き}配{はい}がない。', chinese: '雨勢越來越大，毫無要停的跡象。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_bakari_da_1',
                sentence: '景{けい}気{き}は悪{わる}くなる（　）だ。',
                options: ['ばかり', 'ばかりに', 'ばかりか', 'ばかりで'],
                correctIndex: 0,
                explanation: '「〜ばかりだ」固定用法。'
            },
            {
                id: 'n2_bakari_da_2',
                sentence: '彼{かれ}の病{びょう}気{き}は重{おも}くなる（　）、医{い}者{しゃ}も心{しん}配{ぱい}している。',
                options: ['ばかりで', 'ばかりに', 'ばかりか', 'ばかりだ'],
                correctIndex: 0,
                explanation: '文中で理由につなぐなら「ばかりで」。'
            },
            {
                id: 'n2_bakari_da_3',
                sentence: '出{しゅっ}張{ちょう}続{づづ}きで疲{つか}れがたまる（　）だ。',
                options: ['ばかり', 'ばかりだ', 'ばかりか', 'ばかりに'],
                correctIndex: 1,
                explanation: '状態が一方向に進む。'
            }
        ]
    },
    'n2_bakari_ka': {
        id: 'n2_bakari_ka',
        pattern: 'ばかりか',
        connection: '普通{ふつう}形{けい} + ばかりか\n名{めい}詞{し} + ばかりか',
        translation: '不僅...而且...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '程度の強調（予想以上）',
                description: '「A どころか B」の近い意味で、「A 不僅如此，甚至到 B」的語氣，後項往往更強烈。',
                examples: [
                    { japanese: '彼{かれ}は遅{おそ}刻{こく}したばかりか、宿{しゅく}題{だい}も忘{わす}れた。', chinese: '他不但遲到，還忘了作業。' },
                    { japanese: '雨{あめ}が降{ふ}るばかりか、風{かぜ}まで強{つよ}くなってきた。', chinese: '不但下雨，連風都變強了。' },
                    { japanese: 'この店{みせ}は安{やす}いばかりか、味{あじ}もいい。', chinese: '這家店不只便宜，味道也好。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_bakari_ka_1',
                sentence: '遅{おそ}れた（　）、連絡{れんらく}もしなかった。',
                options: ['ばかりか', 'ばかりに', 'ばかりだ', 'ばかり'],
                correctIndex: 0,
                explanation: '不僅遲到，還沒聯絡。'
            },
            {
                id: 'n2_bakari_ka_2',
                sentence: '彼{かれ}は英{えい}語{ご}が話{はな}せる（　）、中{ちゅう}国{ごく}語{ご}も話{はな}せる。',
                options: ['ばかりか', 'ばかりに', 'ばかりで', 'ばかりだ'],
                correctIndex: 0,
                explanation: '能力が追加される強調。'
            },
            {
                id: 'n2_bakari_ka_3',
                sentence: '疲{つか}れている（　）、熱{ねつ}まで出{で}てきた。',
                options: ['ばかりか', 'ばかり', 'ばかりに', 'ばかりだ'],
                correctIndex: 0,
                explanation: '予想以上の悪化。'
            }
        ]
    },
    'n2_bakari_ni': {
        id: 'n2_bakari_ni',
        pattern: 'ばかりに',
        connection: '普通{ふつう}形{けい} + ばかりに\n名{めい}詞{し} + ばかりに',
        translation: '只因為... (導致不好的結果)',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '原因が一つで悪い結果',
                description: '「ただそれだけの理由で悪い結果になった」ことを強調する。後件は遺憾・後悔の結果が多い。',
                examples: [
                    { japanese: '真{しん}面{めん}目{もく}だったばかりに、損{そん}をした。', chinese: '只因為太老實，結果吃了虧。' },
                    { japanese: '少{すこ}し遅{おく}れたばかりに、電{でん}車{しゃ}に乗{の}れなかった。', chinese: '只因為晚了一點，就沒搭上電車。' },
                    { japanese: '「どうして落{お}ちたの？」\n「緊{きん}張{ちょう}しすぎたばかりに、実{じっ}力{りょく}が出{だ}せなかった。」',
                        chinese: '「為什麼落選？」\n「只因為太緊張，結果沒發揮實力。」'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_bakari_ni_1',
                sentence: '急{いそ}いだ（　）、忘{わす}れ物{もの}をしてしまった。',
                options: ['ばかりに', 'ばかりか', 'ばかりだ', 'ばかり'],
                correctIndex: 0,
                explanation: '原因一つで悪い結果。'
            },
            {
                id: 'n2_bakari_ni_2',
                sentence: '彼{かれ}は若{わか}い（　）、経{けい}験{けん}が浅{あさ}いと見{み}られた。',
                options: ['ばかりに', 'ばかりか', 'ばかりだ', 'ばかりで'],
                correctIndex: 0,
                explanation: '「若い」ことが原因で不利な結果。'
            },
            {
                id: 'n2_bakari_ni_3',
                sentence: '一言{ひとこと}多{おお}かった（　）、けんかになった。',
                options: ['ばかりに', 'ばかり', 'ばかりだ', 'ばかりか'],
                correctIndex: 0,
                explanation: '後件は悪い結果が自然。'
            }
        ]
    },
    'n2_chinamini': {
        id: 'n2_chinamini',
        pattern: 'ちなみに',
        connection: 'ちなみに + 文{ぶん}',
        translation: '順便一提',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '補足情報を付け加える',
                description: '話題の本筋から少し外れた補足や豆知識を付け加える時に使う。口語でも書面でも使用可。',
                examples: [
                    { japanese: '明{あした}は会議{かいぎ}があります。ちなみに、開始{かいし}は10時{じ}です。', chinese: '明天有會議。順便一提，開始時間是十點。' },
                    { japanese: 'この店{みせ}は和{わ}食{しょく}が有名{ゆうめい}です。ちなみに、デザートも人{にん}気{き}です。', chinese: '這家店以和食有名。順便一提，甜點也很受歡迎。' },
                    { japanese: '新{あたら}しい先生{せんせい}は東{とう}京{きょう}出{しゅっ}身{しん}です。ちなみに、私{わたし}と同{おな}じ大{だい}学{がく}です。', chinese: '新老師是東京出身。順便一提，他跟我同校。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_chinamini_1',
                sentence: 'この店{みせ}は夜{よる}12時{じ}まで開{あ}いています。（　）、日{にち}曜{よう}は休{やす}みです。',
                options: ['ちなみに', 'ところが', 'つまり', 'それで'],
                correctIndex: 0,
                explanation: '補足情報の追加。'
            },
            {
                id: 'n2_chinamini_2',
                sentence: 'この本{ほん}は分{わ}かりやすいです。（　）、例{れい}文{ぶん}が多{おお}いです。',
                options: ['ちなみに', 'なぜなら', 'ところで', 'それでも'],
                correctIndex: 0,
                explanation: '本筋に補足を足す。'
            },
            {
                id: 'n2_chinamini_3',
                sentence: '新{あたら}しい店{みせ}ができました。（　）、駅{えき}の近{ちか}くです。',
                options: ['ちなみに', 'しかし', 'そこで', 'ついでに'],
                correctIndex: 0,
                explanation: '「ちなみに」= 順便一提。'
            }
        ]
    },
    'n2_chitto_mo_nai': {
        id: 'n2_chitto_mo_nai',
        pattern: 'ちっとも～ない',
        connection: 'ちっとも + 動{どう}詞{し}否定{ひてい}形{けい}',
        translation: '一點也不...; 絲毫不...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '程度の否定',
                description: '「全{まった}く～ない」「少{すこ}しも～ない」と同様、否定を強調する。',
                examples: [
                    { japanese: 'この説{せつ}明{めい}を聞{き}いても、ちっとも理{り}解{かい}できない。', chinese: '即使聽了這個說明，也完全無法理解。' },
                    { japanese: '彼{かれ}の話{はなし}はちっとも面白{おもしろ}くない。', chinese: '他的話一點也不有趣。' },
                    { japanese: '待{ま}っても、ちっとも連{れん}絡{らく}が来{こ}ない。', chinese: '等了也完全沒有聯絡。' }
                ]
            }
        ],
        analysis: {
            title: '「ちっとも～ない」與「全{まった}く～ない」',
            description: '意味は近いが、口語では「ちっとも」が柔らかい。',
            points: [
                {
                    rule: 'ちっとも～ない：口語的、やや柔らかい。',
                    examples: [{ japanese: 'ちっとも分{わ}からない。', chinese: '一點也不懂。' }]
                },
                {
                    rule: '全{まった}く～ない：強い否定で硬め。',
                    examples: [{ japanese: '全{まった}く分{わ}からない。', chinese: '完全不懂。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n2_chitto_mo_nai_1',
                sentence: '彼{かれ}の冗{じょう}談{だん}は（　）面白{おもしろ}くない。',
                options: ['ちっとも', 'ちょっと', 'すこし', 'だいぶ'],
                correctIndex: 0,
                explanation: '否定を強調。'
            },
            {
                id: 'n2_chitto_mo_nai_2',
                sentence: '勉{べん}強{きょう}したのに、点{てん}数{すう}が（　）上{あ}がらない。',
                options: ['ちっとも', 'だんだん', 'どんどん', 'すっかり'],
                correctIndex: 0,
                explanation: '否定形とセット。'
            },
            {
                id: 'n2_chitto_mo_nai_3',
                sentence: 'ここまで来{き}たのに、疲{つか}れが（　）取{と}れない。',
                options: ['ちっとも', 'とても', 'すごく', 'よく'],
                correctIndex: 0,
                explanation: '「ちっとも」＋否定形。'
            }
        ]
    },
    'n2_dake_atte': {
        id: 'n2_dake_atte',
        pattern: 'だけあって',
        connection: '名{めい}詞{し} + だけあって\n動{どう}詞{し}普通{ふつう}形{けい} + だけあって',
        translation: '不愧是...; 正因為...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '期待どおりの結果',
                description: 'ある理由・背景があるので、「やはりそうだ」と納得する時に使う。良い結果に使うことが多い。',
                examples: [
                    { japanese: '有{ゆう}名{めい}なレストランだけあって、料{りょう}理{り}は本{ほん}当{とう}においしかった。', chinese: '不愧是有名餐廳，料理真的很好吃。' },
                    { japanese: '彼{かれ}は留{りゅう}学{がく}しただけあって、英{えい}語{ご}が上{じょう}手{ず}だ。', chinese: '他不愧是留過學，英語很厲害。' },
                    { japanese: 'さすが優{ゆう}勝{しょう}チームだけあって、連{れん}携{けい}が素{す}晴{ば}らしい。', chinese: '不愧是冠軍隊伍，配合非常出色。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_dake_atte_1',
                sentence: '有{ゆう}名{めい}店{てん}（　）、値{ね}段{だん}は高{たか}いが味{あじ}は良{よ}い。',
                options: ['だけあって', 'だけに', 'だけましだ', 'だけのことはある'],
                correctIndex: 0,
                explanation: '有名店だから納得、という流れ。'
            },
            {
                id: 'n2_dake_atte_2',
                sentence: '彼{かれ}は毎{まい}日{にち}練{れん}習{しゅう}した（　）、試{し}合{あい}で良{よ}い成{せい}績{せき}を出{だ}した。',
                options: ['だけあって', 'ばかりに', 'だけましだ', 'ばかりだ'],
                correctIndex: 0,
                explanation: '努力の結果に納得。'
            },
            {
                id: 'n2_dake_atte_3',
                sentence: 'さすがプロ（　）、説{せつ}明{めい}が分{わ}かりやすい。',
                options: ['だけあって', 'だけましだ', 'だけに', 'だけのことはある'],
                correctIndex: 0,
                explanation: '「さすが〜だけあって」で期待通りを表す。'
            }
        ]
    },
    'n2_dake_mashi_da': {
        id: 'n2_dake_mashi_da',
        pattern: 'だけましだ',
        connection: '普通{ふつう}形{けい} + だけましだ\n名{めい}詞{し} + な + だけましだ',
        translation: '幸好...; 總比...好',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '不滿ながら比較するとまし',
                description: 'どれも良くない状況の中で、「まだ良いほうだ」と言いたい時に使う。',
                examples: [
                    { japanese: '雨{あめ}は降{ふ}っているが、風{かぜ}がないだけましだ。', chinese: '雖然在下雨，但幸好沒有風。' },
                    { japanese: 'この部屋{へや}は狭{せま}いが、前{まえ}の部屋{へや}よりはだけましだ。', chinese: '這房間雖然小，但比起之前那間還好一些。' },
                    { japanese: '忙{いそ}しいけど、休{やす}みがあるだけましだ。', chinese: '雖然很忙，但好歹還有休假。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_dake_mashi_da_1',
                sentence: '料理{りょうり}はおいしくないが、食{た}べられる（　）。',
                options: ['だけましだ', 'だけあって', 'だけに', 'だけのことはある'],
                correctIndex: 0,
                explanation: '良くはないが「まだマシ」。'
            },
            {
                id: 'n2_dake_mashi_da_2',
                sentence: '渋{しぶ}滞{たい}しているが、動{うご}けない（　）だ。',
                options: ['だけまし', 'だけあって', 'ばかりに', 'ばかりだ'],
                correctIndex: 0,
                explanation: '「〜ないだけましだ」。'
            },
            {
                id: 'n2_dake_mashi_da_3',
                sentence: '暑{あつ}いけど、雨{あめ}が降{ふ}らない（　）。',
                options: ['だけましだ', 'だけあって', 'だけに', 'だけのことはある'],
                correctIndex: 0,
                explanation: '比較して「まだ良い」。'
            }
        ]
    },
    'n2_dake_ni': {
        id: 'n2_dake_ni',
        pattern: 'だけに',
        connection: '普通{ふつう}形{けい} + だけに\n名{めい}詞{し} + だけに\nな形{けい}容{よう}詞{し} + な + だけに\nい形{けい}容{よう}詞{し} + だけに',
        translation: '正因為...; 不愧是...; 因為...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '原因があるから結果も納得',
                description: '「A だけに B」表示因為前項的理由或背景，後項的結果很合理。可接正面或負面結果。',
                examples: [
                    { japanese: '駅{えき}が近{ちか}いだけに家賃{やちん}も高{たか}い。', chinese: '正因為離車站近，所以房租也高。' },
                    { japanese: '一{いち}度{ど}失{しっ}敗{ぱい}しているだけに、今{こん}回{かい}は慎{しん}重{ちょう}だ。', chinese: '因為曾經失敗過，所以這次很慎重。' },
                    { japanese: '昨{き}日{のう}買{か}ったばかりなだけに、ショックが大{おお}きい。', chinese: '因為是昨天才買的，所以打擊很大。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_dake_ni_1',
                sentence: '有{ゆう}名{めい}店{てん}な（　）、サービスも丁{てい}寧{ねい}だ。',
                options: ['だけに', 'だけあって', 'だけましだ', 'だけのことはある'],
                correctIndex: 0,
                explanation: '理由に基づく納得の結果。「だけに」が自然。'
            },
            {
                id: 'n2_dake_ni_2',
                sentence: '一{いち}生{しょう}懸{けん}命{めい}練{れん}習{しゅう}した（　）、負{ま}けた時{とき}の悔{くや}しさも大{おお}きい。',
                options: ['だけに', 'ばかりに', 'だけましだ', 'ばかりだ'],
                correctIndex: 0,
                explanation: '努力が大きいほど結果の感情も大きい。'
            },
            {
                id: 'n2_dake_ni_3',
                sentence: '経{けい}験{けん}が少{すく}ない（　）、ミスが多{おお}いのも仕方{しかた}ない。',
                options: ['だけに', 'だけは', 'だけで', 'だけか'],
                correctIndex: 0,
                explanation: '「だからその結果も納得」= だけに。'
            }
        ]
    },
    'n2_dake_no_koto_wa_aru': {
        id: 'n2_dake_no_koto_wa_aru',
        pattern: 'だけのことはある',
        connection: '普通{ふつう}形{けい} + だけのことはある\n名{めい}詞{し} + だけのことはある\nな形{けい}容{よう}詞{し} + な + だけのことはある\nい形{けい}容{よう}詞{し} + だけのことはある',
        translation: '難怪...; 不愧是...; 並非白費',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '努力や条件に見合う結果',
                description: '「〜だけのことはある」表示「努力/條件沒有白費」，結果值得或令人信服。',
                examples: [
                    { japanese: '留{りゅう}学{がく}しただけのことはある。英{えい}語{ご}が本{ほん}当{とう}に上{じょう}手{ず}だ。', chinese: '難怪他留學過，英語真的很厲害。' },
                    { japanese: '高{たか}かっただけのことはある。味{あじ}が違{ちが}う。', chinese: '難怪這麼貴，味道確實不一樣。' },
                    { japanese: '毎{まい}日{にち}練{れん}習{しゅう}しただけのことはあるね。', chinese: '每天練習果然沒有白費呢。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_dake_no_koto_wa_aru_1',
                sentence: '高{たか}いレストランだったが、味{あじ}はさすが（　）。',
                options: ['だけのことはある', 'だけに', 'だけましだ', 'ばかりに'],
                correctIndex: 0,
                explanation: '高い値段に見合う結果を表す。'
            },
            {
                id: 'n2_dake_no_koto_wa_aru_2',
                sentence: '彼{かれ}は10年{ねん}も研{けん}究{きゅう}した（　）、発{はっ}見{けん}がすごい。',
                options: ['だけのことはある', 'だけましだ', 'ばかりだ', 'ばかりに'],
                correctIndex: 0,
                explanation: '努力が結果に結びついた。'
            },
            {
                id: 'n2_dake_no_koto_wa_aru_3',
                sentence: 'このホテルは一{いち}流{りゅう}だけあって、やっぱり（　）。',
                options: ['だけのことはある', 'だけは', 'だけで', 'だけか'],
                correctIndex: 0,
                explanation: '一流という条件にふさわしい結果。'
            }
        ]
    },
    'n2_dake_wa': {
        id: 'n2_dake_wa',
        pattern: 'だけは',
        connection: '動{どう}詞{し}辭書{じしょ}形{けい} + だけは + 同{おな}じ動{どう}詞{し}た形{けい}',
        translation: '竭盡所能; 至少把能做的都做了',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '能做到的都做了',
                description: '「VれるだけはVた／VるだけはVた」表示已做到能力範圍內的最大程度。',
                examples: [
                    { japanese: '走{はし}れるだけは走{はし}った。', chinese: '能跑多快就跑多快了。' },
                    { japanese: '言{い}えるだけは言{い}った。あとは結{けっ}果{か}を待{ま}つだけだ。', chinese: '能說的都說了，剩下就等結果。' },
                    { japanese: '手{て}伝{つだ}えるだけは手{て}伝{つだ}ったよ。', chinese: '我能幫的都幫了。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_dake_wa_1',
                sentence: '勉{べん}強{きょう}できるだけは（　）。',
                options: ['した', 'する', 'して', 'し'],
                correctIndex: 0,
                explanation: '「VれるだけはVた」型。'
            },
            {
                id: 'n2_dake_wa_2',
                sentence: '話{はな}せるだけは話{はな}したが、納{なっ}得{とく}してもらえなかった。',
                options: ['だけは', 'だけに', 'だけで', 'だけか'],
                correctIndex: 0,
                explanation: '「だけは」= できる範囲で。'
            },
            {
                id: 'n2_dake_wa_3',
                sentence: '手{て}伝{つだ}える（　）手{て}伝{つだ}ったよ。',
                options: ['だけは', 'だけに', 'だけで', 'だけか'],
                correctIndex: 0,
                explanation: '同じ動詞を繰り返す形。'
            }
        ]
    },
    'n2_datte': {
        id: 'n2_datte',
        pattern: 'だって',
        connection: 'だって + 文{ぶん}\n名{めい}詞{し} + だって',
        translation: '因為; 可是; 就連...也...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '理由・言い訳',
                description: '口語で理由や言い訳を示す。「だって〜だもん」にもなる。',
                examples: [
                    { japanese: 'だって、約{やく}束{そく}を破{やぶ}られたんだ。', chinese: '因為他違背約定了。' },
                    { japanese: 'だって眠{ねむ}いんだもん。', chinese: '可是我很睏嘛。' }
                ]
            },
            {
                usageId: 2,
                title: '強調「〜も」',
                description: '名詞+だって 表示「就連…也…」。',
                examples: [
                    { japanese: '私{わたし}だって行{い}きたい。', chinese: '我也想去啊。' },
                    { japanese: '子{こ}どもだって分{わ}かる。', chinese: '連小孩也懂。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_datte_1',
                sentence: '「どうして食{た}べないの？」\n「（　）お腹{なか}がいっぱいなんだもん。」',
                options: ['だって', 'だから', 'それで', 'ところで'],
                correctIndex: 0,
                explanation: '理由・言い訳の「だって」。'
            },
            {
                id: 'n2_datte_2',
                sentence: '彼{かれ}（　）疲{つか}れるときがある。',
                options: ['だって', 'だけに', 'だけで', 'ばかりに'],
                correctIndex: 0,
                explanation: '名詞+だって = 「彼も」。'
            },
            {
                id: 'n2_datte_3',
                sentence: '私{わたし}（　）失{しっ}敗{ぱい}するよ。',
                options: ['だって', 'だけに', 'だけは', 'だけで'],
                correctIndex: 0,
                explanation: '「私も」の強調。'
            }
        ]
    },
    'n2_de_shika_nai': {
        id: 'n2_de_shika_nai',
        pattern: 'でしかない',
        connection: '名{めい}詞{し} + でしかない',
        translation: '只不過是...; 無非是...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '評価を下げる表現',
                description: '「〜に過ぎない」と同じく、価値や重要性が低いことを強調する。',
                examples: [
                    { japanese: 'それは言{い}い訳{わけ}でしかない。', chinese: '那只不過是藉口。' },
                    { japanese: 'この結{けっ}論{ろん}は推{すい}測{そく}でしかない。', chinese: '這個結論不過是推測。' },
                    { japanese: '彼{かれ}は会社{かい}員{いん}でしかない。', chinese: '他只是一名員工而已。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_de_shika_nai_1',
                sentence: 'その話{はなし}は噂{うわさ}（　）。',
                options: ['でしかない', 'に過{す}ぎない', 'だけに', 'だけで'],
                correctIndex: 0,
                explanation: '名詞+でしかない。'
            },
            {
                id: 'n2_de_shika_nai_2',
                sentence: '今{いま}の彼{かれ}は見{み}習{なら}い（　）。',
                options: ['でしかない', 'でしかなく', 'でしかな', 'でしか'],
                correctIndex: 0,
                explanation: '語形そのまま使用。'
            },
            {
                id: 'n2_de_shika_nai_3',
                sentence: 'それは偶{ぐう}然{ぜん}（　）。',
                options: ['でしかない', 'だけに', 'ばかりに', 'ばかりだ'],
                correctIndex: 0,
                explanation: '評価を下げる表現。'
            }
        ]
    },
    'n2_dokoro_dewa_nai': {
        id: 'n2_dokoro_dewa_nai',
        pattern: 'どころではない',
        connection: '動{どう}詞{し}辭書{じしょ}形{けい} + どころではない\n名{めい}詞{し} + どころではない',
        translation: '哪裡談得上...; 不是...的時候',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: 'そんな余裕はない',
                description: 'ある行為をする余裕がないほど状況が厳しい時に使う。',
                examples: [
                    { japanese: '宿{しゅく}題{だい}が多{おお}くて、遊{あそ}ぶどころではない。', chinese: '作業太多，根本沒空玩。' },
                    { japanese: '忙{いそ}しくて旅{りょ}行{こう}どころではない。', chinese: '很忙，哪裡談得上旅行。' },
                    { japanese: '風{かぜ}邪{じゃ}がひどくて、外{そと}出{で}するどころじゃない。', chinese: '感冒很嚴重，根本不能出門。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_dokoro_dewa_nai_1',
                sentence: 'テスト前{まえ}で、遊{あそ}ぶ（　）。',
                options: ['どころではない', 'どころか', 'ばかりだ', 'だけに'],
                correctIndex: 0,
                explanation: '余裕がない状況。'
            },
            {
                id: 'n2_dokoro_dewa_nai_2',
                sentence: '忙{いそ}しくて、休{やす}み（　）。',
                options: ['どころではない', 'どころか', 'だけで', 'だけは'],
                correctIndex: 0,
                explanation: '「休むどころではない」。'
            },
            {
                id: 'n2_dokoro_dewa_nai_3',
                sentence: 'インフルエンザで、出{で}かける（　）。',
                options: ['どころではない', 'ばかりに', 'だけに', 'だけは'],
                correctIndex: 0,
                explanation: '体調が悪くて無理。'
            }
        ]
    },
    'n2_dokoro_ka': {
        id: 'n2_dokoro_ka',
        pattern: 'どころか',
        connection: '普通{ふつう}形{けい} + どころか\n名{めい}詞{し} + どころか\nな形{けい}容{よう}詞{し} + な + どころか\nい形{けい}容{よう}詞{し} + どころか',
        translation: '豈止...; 反而...; 更別說...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '予想を大きく下回る',
                description: '「A どころか B」表示實際情況比 A 更差或完全相反。',
                examples: [
                    { japanese: '元{げん}気{き}になるどころか、病{びょう}気{き}がひどくなった。', chinese: '不但沒好，反而更嚴重了。' },
                    { japanese: 'N2どころかN3も無{む}理{り}だ。', chinese: '別說 N2，連 N3 都不行。' },
                    { japanese: '休{やす}むどころか、残{ざん}業{ぎょう}が増{ふ}えた。', chinese: '不但沒休息，反而加班更多。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_dokoro_ka_1',
                sentence: '手{て}伝{つだ}う（　）、邪{じゃ}魔{ま}になってしまった。',
                options: ['どころか', 'どころではない', 'ばかりだ', 'だけに'],
                correctIndex: 0,
                explanation: '「A どころか B」= 反而。'
            },
            {
                id: 'n2_dokoro_ka_2',
                sentence: '試{し}験{けん}に合{ごう}格{かく}する（　）、欠{けっ}席{せき}してしまった。',
                options: ['どころか', 'ばかりに', 'だけは', 'だけに'],
                correctIndex: 0,
                explanation: '期待と逆。'
            },
            {
                id: 'n2_dokoro_ka_3',
                sentence: '忙{いそ}しくて、休{やす}み（　）日{にち}曜{よう}日{び}も働{はたら}いた。',
                options: ['どころか', 'どころではない', 'だけに', 'ばかりだ'],
                correctIndex: 0,
                explanation: '「休むどころか〜」の形。'
            }
        ]
    },
    'n2_dou_yara': {
        id: 'n2_dou_yara',
        pattern: 'どうやら',
        connection: 'どうやら + 文{ぶん}',
        translation: '看來好像...; 似乎...; 總算...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '根據線索的推測',
                description: '直接證據不完全，但從情況判斷「好像是這樣」。',
                examples: [
                    { japanese: 'どうやら雨{あめ}が降{ふ}りそうだ。', chinese: '看來好像要下雨了。' },
                    { japanese: 'どうやら彼{かれ}は知{し}らないらしい。', chinese: '他看來似乎不知道。' },
                    { japanese: 'どうやら誤{ご}解{かい}があるようだ。', chinese: '看來似乎有誤會。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_dou_yara_1',
                sentence: '空{そら}が暗{くら}い。どうやら雨{あめ}が（　）。',
                options: ['降{ふ}りそうだ', '降{ふ}るだろうか', '降{ふ}れば', '降{ふ}ったら'],
                correctIndex: 0,
                explanation: '推測の表現。'
            },
            {
                id: 'n2_dou_yara_2',
                sentence: '彼{かれ}の様{よう}子{す}を見ると、どうやら（　）。',
                options: ['疲{つか}れている', '疲{つか}れたら', '疲{つか}れると', '疲{つか}れよう'],
                correctIndex: 0,
                explanation: '現在の状態を推測。'
            },
            {
                id: 'n2_dou_yara_3',
                sentence: 'どうやらこの電{でん}車{しゃ}は遅{おく}れている（　）。',
                options: ['ようだ', 'ところだ', 'ばかりだ', 'だけに'],
                correctIndex: 0,
                explanation: '「どうやら〜ようだ」が自然。'
            }
        ]
    },
    'n2_douse': {
        id: 'n2_douse',
        pattern: 'どうせ',
        connection: 'どうせ + 文{ぶん}',
        translation: '反正; 不管怎樣; 終究',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '結果が同じだという気持ち',
                description: '「どうせ〜」は「結局そうなる」と思っているときに使う。時に投げやりな語気。',
                examples: [
                    { japanese: 'どうせ遅{おく}れるなら、ゆっくり行{い}こう。', chinese: '反正會遲到，就慢慢去吧。' },
                    { japanese: 'どうせ行{い}くなら、楽{たの}しもう。', chinese: '反正要去，就好好玩吧。' },
                    { japanese: 'どうせ彼{かれ}は来{こ}ない。', chinese: '反正他不會來。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_douse_1',
                sentence: '（　）やるなら、ちゃんとやろう。',
                options: ['どうせ', 'どうやら', 'ところで', 'それに'],
                correctIndex: 0,
                explanation: '「反正要做」的意思。'
            },
            {
                id: 'n2_douse_2',
                sentence: '今{いま}から行{い}っても（　）遅{おそ}れる。',
                options: ['どうせ', 'どうやら', 'とても', 'すぐに'],
                correctIndex: 0,
                explanation: '結果は同じという気持ち。'
            },
            {
                id: 'n2_douse_3',
                sentence: 'どうせ参{さん}加{か}しないなら、早{はや}めに連{れん}絡{らく}した方{ほう}がいい。',
                options: ['どうせ', 'どうやら', 'つまり', 'それでも'],
                correctIndex: 0,
                explanation: '前提「どうせ〜なら」。'
            }
        ]
    },
    'n2_enai': {
        id: 'n2_enai',
        pattern: '得{え}ない',
        connection: '動{どう}詞{し}ます形{けい}（去{きょ}ます）+ 得{え}ない',
        translation: '不可能...; 無法...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '可能性がない',
                description: '「〜し得ない」=「不可能」。書面寄りで抽象的な語彙と一緒に使われることが多い。',
                examples: [
                    { japanese: 'あの人{ひと}が犯{はん}人{にん}だなんてあり得{え}ない。', chinese: '那個人是犯人根本不可能。' },
                    { japanese: '地{じ}震{しん}がいつ起{お}こるかは予{よ}測{そく}し得{え}ない。', chinese: '地震何時發生無法預測。' },
                    { japanese: '無{む}から有{ゆう}は生{しょう}じ得{え}ない。', chinese: '無法從無中生有。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_enai_1',
                sentence: 'それは常{じょう}識{しき}的{てき}に考{かんが}えてもあり（　）ない。',
                options: ['得{え}', '得{え}る', '得{え}て', '得{え}た'],
                correctIndex: 0,
                explanation: '「あり得ない」で不可能。'
            },
            {
                id: 'n2_enai_2',
                sentence: '地{じ}震{しん}の発{はっ}生{せい}時{じ}期{き}は予{よ}測{そく}し（　）ない。',
                options: ['得{え}', '得{え}る', '得{え}た', '得{え}て'],
                correctIndex: 0,
                explanation: '動詞ます形＋得ない。'
            },
            {
                id: 'n2_enai_3',
                sentence: 'その計{けい}画{かく}は実{じっ}行{こう}し（　）ない。',
                options: ['得{え}', '得{え}る', '得{え}た', '得{え}て'],
                correctIndex: 0,
                explanation: '「実行し得ない」。'
            }
        ]
    },
    'n2_eru': {
        id: 'n2_eru',
        pattern: '得{え}る・得{う}る',
        connection: '動{どう}詞{し}ます形{けい}（去{きょ}ます）+ 得{え}る / 得{う}る',
        translation: '可以...; 有可能...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '可能性がある',
                description: '「〜し得る」表示某事「可能發生」。多用於較正式或抽象語境。否定用「得ない」。',
                examples: [
                    { japanese: '事{じ}故{こ}はいつでも起{お}こり得{え}る。', chinese: '事故隨時都有可能發生。' },
                    { japanese: 'この状{じょう}況{きょう}では大{おお}きな損{そん}失{しつ}もあり得{え}る。', chinese: '在這種情況下也有可能造成重大損失。' },
                    { japanese: '一{ひと}つのミスが会{かい}社{しゃ}を倒{とう}産{さん}に導{みちび}くこともあり得{え}る。', chinese: '一個失誤也可能導致公司倒閉。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_eru_1',
                sentence: '事{じ}故{こ}はいつでも起{お}こり（　）。',
                options: ['得{え}る', '得{え}ない', '得{え}て', '得{え}た'],
                correctIndex: 0,
                explanation: '可能性を表す「起こり得る」。'
            },
            {
                id: 'n2_eru_2',
                sentence: 'そんな事{こと}は十{じゅう}分{ぶん}あり（　）。',
                options: ['得{え}る', '得{え}ない', '得{え}て', '得{え}た'],
                correctIndex: 0,
                explanation: '「あり得る」で「起こりうる」。'
            },
            {
                id: 'n2_eru_3',
                sentence: 'この計{けい}画{かく}は成{せい}功{こう}し（　）かもしれない。',
                options: ['得{え}る', '得{え}ない', '得{え}て', '得{え}た'],
                correctIndex: 0,
                explanation: '可能性を示す。'
            }
        ]
    },
    'n2_futatabi': {
        id: 'n2_futatabi',
        pattern: '再{ふたた}び',
        connection: '再{ふたた}び + 動{どう}詞{し}',
        translation: '再次; 再度',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: 'もう一度',
                description: '「再び」表示「再次、再度」。書面語感がやや強い。',
                examples: [
                    { japanese: '来{らい}年{ねん}の冬{ふゆ}、再{ふたた}びここに来{き}たい。', chinese: '明年冬天還想再來。' },
                    { japanese: '事{じ}故{こ}の後{あと}、再{ふたた}び同{おな}じ場{ば}所{しょ}に立{た}った。', chinese: '事故之後再次站在同一個地方。' },
                    { japanese: '彼{かれ}は十{じゅう}年{ねん}後{ご}に再{ふたた}び故{こ}郷{きょう}を見{み}た。', chinese: '他十年後又看到了故鄉。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_futatabi_1',
                sentence: '来{らい}週{しゅう}、（　）会{あ}いましょう。',
                options: ['再{ふたた}び', 'すでに', 'けっして', 'いつか'],
                correctIndex: 0,
                explanation: '「再次」用「再び」。'
            },
            {
                id: 'n2_futatabi_2',
                sentence: 'その場{ば}所{しょ}に（　）戻{もど}ることはできない。',
                options: ['再{ふたた}び', 'たびに', 'いつも', 'いまも'],
                correctIndex: 0,
                explanation: '「再び戻る」。'
            },
            {
                id: 'n2_futatabi_3',
                sentence: '彼{かれ}は病{びょう}気{き}の後{あと}、（　）ピアノを弾{ひ}き始{はじ}めた。',
                options: ['再{ふたた}び', 'ようやく', 'すぐ', 'たちまち'],
                correctIndex: 0,
                explanation: '再開の意味。'
            }
        ]
    },
    'n2_fuu_ni': {
        id: 'n2_fuu_ni',
        pattern: 'ふうに',
        connection: 'こんな/そんな/あんな/どういう/どんな + ふうに + 動{どう}詞{し}\n文{ぶん} + という + ふうに',
        translation: '這樣地; 那樣地; 以...方式',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '方式・樣子',
                description: '「〜ふうに」表示做事的方式或狀態。常與指示詞或「という」搭配。',
                examples: [
                    { japanese: 'こんなふうにやってください。', chinese: '請用這樣的方式做。' },
                    { japanese: 'どういうふうに動{うご}くか見{み}せてください。', chinese: '請示範一下怎麼動作。' },
                    { japanese: '自{じ}分{ぶん}が天{てん}才{さい}だというふうに思{おも}い込{こ}んでいた。', chinese: '他一直以為自己是天才。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_fuu_ni_1',
                sentence: 'どういう（　）やればいいですか。',
                options: ['ふうに', 'ように', 'みたいに', 'とおりに'],
                correctIndex: 0,
                explanation: '方式の表現。'
            },
            {
                id: 'n2_fuu_ni_2',
                sentence: 'こんな（　）しないでください。',
                options: ['ふうに', 'ほどに', 'ために', 'あいだに'],
                correctIndex: 0,
                explanation: '「こんなふうに」= 這樣做。'
            },
            {
                id: 'n2_fuu_ni_3',
                sentence: '彼{かれ}は信{しん}じられない（　）首{くび}を振{ふ}った。',
                options: ['というふうに', 'というより', 'というだけ', 'ということ'],
                correctIndex: 0,
                explanation: '様子の描写。'
            }
        ]
    },
    'n2_ga_kikkake_de': {
        id: 'n2_ga_kikkake_de',
        pattern: 'がきっかけで / をきっかけに',
        connection: '動{どう}詞{し}た形{けい} + の/こと + がきっかけで\n名{めい}詞{し} + をきっかけに',
        translation: '以...為契機; 藉由...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '行動や変化のきっかけ',
                description: 'ある出来事を契機として、後の行動や変化が起こる。',
                examples: [
                    { japanese: '病{びょう}気{き}をきっかけに、食{しょく}生{せい}活{かつ}を見{み}直{なお}した。', chinese: '以生病為契機重新調整飲食。' },
                    { japanese: '事{じ}故{こ}がきっかけで安{あん}全{ぜん}対{たい}策{さく}が強{きょう}化{か}された。', chinese: '因事故而加強安全對策。' },
                    { japanese: '子{こ}どもが生{う}まれたのをきっかけにタバコをやめた。', chinese: '以孩子出生為契機戒菸。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ga_kikkake_de_1',
                sentence: '事{じ}故{こ}（　）、安{あん}全{ぜん}対{たい}策{さく}が強{きょう}化{か}された。',
                options: ['がきっかけで', 'ばかりに', 'だけに', 'ところで'],
                correctIndex: 0,
                explanation: '「事故がきっかけで」。'
            },
            {
                id: 'n2_ga_kikkake_de_2',
                sentence: '留{りゅう}学{がく}したこと（　）、英{えい}語{ご}が上{じょう}手{ず}になった。',
                options: ['がきっかけで', 'ばかりだ', 'だけは', 'ところだった'],
                correctIndex: 0,
                explanation: '動詞た形+こと+がきっかけで。'
            },
            {
                id: 'n2_ga_kikkake_de_3',
                sentence: '彼{かれ}はこの出{で}会{あ}い（　）、考{かんが}え方{かた}が変{か}わった。',
                options: ['をきっかけに', 'にかわらず', 'にすぎない', 'にほかならない'],
                correctIndex: 0,
                explanation: '名詞+をきっかけに。'
            }
        ]
    },
    'n2_ge': {
        id: 'n2_ge',
        pattern: 'げ',
        connection: 'い形{けい}容{よう}詞{し}語幹 + げ\nな形{けい}容{よう}詞{し} + げ\n〜げな + 名{めい}詞{し}\n〜げに + 動{どう}詞{し}',
        translation: '看起來...的樣子',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '樣子・神情',
                description: '他人の感情や様子を外から見て「〜そうだ」と表す。自分自身には使わない。',
                examples: [
                    { japanese: '何{なに}か言{い}いたげだね。', chinese: '你好像有話想說。' },
                    { japanese: '寂{さび}しげな目{め}をしている。', chinese: '眼神看起來很寂寞。' },
                    { japanese: '彼{かれ}は自{じ}信{しん}ありげだ。', chinese: '他看起來很有自信。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ge_1',
                sentence: '彼{かれ}は不{ふ}安{あん}（　）な表{ひょう}情{じょう}をしている。',
                options: ['げ', 'そう', 'らしい', 'みたい'],
                correctIndex: 0,
                explanation: '感情の様子を表す「〜げ」。'
            },
            {
                id: 'n2_ge_2',
                sentence: '言{い}いた（　）顔{かお}をしているね。',
                options: ['げ', 'そう', 'よう', 'らしい'],
                correctIndex: 0,
                explanation: '「言いたげ」。'
            },
            {
                id: 'n2_ge_3',
                sentence: '彼{かれ}は満{まん}足{ぞく}（　）に笑{わら}った。',
                options: ['げ', 'そう', 'みたい', 'らしい'],
                correctIndex: 0,
                explanation: '「〜げに」= 様子を副詞的に。'
            }
        ]
    },
    'n2_gyaku_ni': {
        id: 'n2_gyaku_ni',
        pattern: '逆{ぎゃく}に',
        connection: '逆{ぎゃく}に + 文{ぶん}',
        translation: '反而; 相反地',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '對比・反對的結果',
                description: '前後內容相反或出乎預期時使用「逆に」。',
                examples: [
                    { japanese: '娘{むすめ}はスポーツが好{す}きだが、逆{ぎゃく}に息{むす}子{こ}は嫌{きら}いだ。', chinese: '女兒喜歡運動，反而兒子討厭。' },
                    { japanese: '予{よ}報{ほう}と逆{ぎゃく}に雨{あめ}が降{ふ}り続{つづ}いている。', chinese: '和預報相反，一直下雨。' },
                    { japanese: 'ストレスがたまると逆{ぎゃく}に食{しょく}欲{よく}が増{ふ}える。', chinese: '壓力大時反而食慾增加。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_gyaku_ni_1',
                sentence: '天{てん}気{き}予{よ}報{ほう}と（　）、雨{あめ}が降{ふ}った。',
                options: ['逆{ぎゃく}に', 'ちなみに', 'ついに', 'つまり'],
                correctIndex: 0,
                explanation: '予想と反対。'
            },
            {
                id: 'n2_gyaku_ni_2',
                sentence: '娘{むすめ}は外{そと}で遊{あそ}ぶのが好{す}きだが、（　）息{むす}子{こ}は家{いえ}にいたがる。',
                options: ['逆{ぎゃく}に', 'それで', 'だから', 'つまり'],
                correctIndex: 0,
                explanation: '対比を示す。'
            },
            {
                id: 'n2_gyaku_ni_3',
                sentence: '「スポーツは苦{にが}手{て}だけど、（　）勉{べん}強{きょう}は得{とく}意{い}だ。」',
                options: ['逆{ぎゃく}に', 'とくに', 'やはり', 'ように'],
                correctIndex: 0,
                explanation: '対照的な内容。'
            }
        ]
    },
    'n2_hanmen': {
        id: 'n2_hanmen',
        pattern: '反{はん}面',
        connection: '普通{ふつう}形{けい} + 反{はん}面\n名{めい}詞{し} + である + 反{はん}面\nな形{けい}容{よう}詞{し} + な/である + 反{はん}面\nい形{けい}容{よう}詞{し} + 反{はん}面',
        translation: '另一方面; 與此相反',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '長短的對比',
                description: '同一事物的兩面性，前後對照。',
                examples: [
                    { japanese: 'この部屋{へや}は日{ひ}当{あ}たりがいい反{はん}面{めん}、夏{なつ}は暑{あつ}い。', chinese: '這房間採光好，但夏天很熱。' },
                    { japanese: '子{こ}供{ども}の成{せい}長{ちょう}は嬉{うれ}しい反{はん}面{めん}、どこか寂{さび}しい。', chinese: '孩子成長令人開心，但也有點寂寞。' },
                    { japanese: '収{しゅう}入{にゅう}は増{ふ}えた反{はん}面{めん}、ストレスも増{ふ}えた。', chinese: '收入增加，但壓力也增加。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_hanmen_1',
                sentence: '便{べん}利{り}な反{はん}面{めん}、使{つか}い過{す}ぎると危{あぶ}ない。',
                options: ['反{はん}面', 'ところで', 'そのため', 'だから'],
                correctIndex: 0,
                explanation: '対比の「反面」。'
            },
            {
                id: 'n2_hanmen_2',
                sentence: 'この町{まち}は静{しず}かな（　）、買{か}い物{もの}は不便{ふべん}だ。',
                options: ['反{はん}面', 'ために', 'わけで', 'そうで'],
                correctIndex: 0,
                explanation: '静かさと不便さの対比。'
            },
            {
                id: 'n2_hanmen_3',
                sentence: 'この仕{し}事{ごと}は楽{らく}な反{はん}面{めん}、給{きゅう}料{りょう}が低{ひく}い。',
                options: ['反{はん}面', 'だけに', 'ばかりに', 'どころか'],
                correctIndex: 0,
                explanation: '長短の並列。'
            }
        ]
    },
    'n2_hatashite': {
        id: 'n2_hatashite',
        pattern: '果{は}たして',
        connection: '果{は}たして + 文{ぶん}',
        translation: '果然; 真的...嗎; 究竟',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '懷疑或強調',
                description: '「果たして」表示「真的嗎」的懷疑或強調，常與疑問或否定語氣連用。',
                examples: [
                    { japanese: '果{は}たして本{ほん}当{とう}だろうか。', chinese: '真的會是那樣嗎？' },
                    { japanese: '果{は}たして彼{かれ}は来{く}るだろうか。', chinese: '他真的會來嗎？' },
                    { japanese: '果{は}たしてそうだろうか。', chinese: '真是如此嗎？' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_hatashite_1',
                sentence: 'その噂{うわさ}は（　）本{ほん}当{とう}だろうか。',
                options: ['果{は}たして', 'どうせ', 'すでに', 'ついに'],
                correctIndex: 0,
                explanation: '疑問の強調。'
            },
            {
                id: 'n2_hatashite_2',
                sentence: '果{は}たして彼{かれ}は合{ごう}格{かく}できる（　）。',
                options: ['だろうか', 'ところだ', 'そうだ', 'はずだ'],
                correctIndex: 0,
                explanation: '「果たして〜だろうか」。'
            },
            {
                id: 'n2_hatashite_3',
                sentence: '果{は}たして偶{ぐう}然{ぜん}だったの（　）。',
                options: ['か', 'に', 'で', 'を'],
                correctIndex: 0,
                explanation: '疑問の助詞「か」。'
            }
        ]
    },
    'n2_ichiou': {
        id: 'n2_ichiou',
        pattern: '一{いち}応{おう}',
        connection: '一{いち}応{おう} + 動{どう}詞{し}',
        translation: '姑且; 一應; 大致',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '暫時/大概做了',
                description: '「一応」表示事情先做了或大致完成，但不一定完美。',
                examples: [
                    { japanese: '一{いち}応{おう}やってみます。', chinese: '我姑且試試看。' },
                    { japanese: '一{いち}応{おう}終{お}わったが、確{かく}認{にん}はまだだ。', chinese: '大致做完了，但還沒確認。' },
                    { japanese: '彼{かれ}は一{いち}応{おう}日{に}本{ほん}語{ご}が話{はな}せる。', chinese: '他大致會說日語。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ichiou_1',
                sentence: '宿{しゅく}題{だい}は（　）終{お}わりました。',
                options: ['一{いち}応{おう}', 'すっかり', 'すでに', 'たちまち'],
                correctIndex: 0,
                explanation: '完全ではないが一通り。'
            },
            {
                id: 'n2_ichiou_2',
                sentence: '彼{かれ}は（　）会{かい}社{しゃ}に連{れん}絡{らく}しておいた。',
                options: ['一{いち}応{おう}', 'いきなり', 'どうやら', 'とにかく'],
                correctIndex: 0,
                explanation: '先に簡単に済ませた。'
            },
            {
                id: 'n2_ichiou_3',
                sentence: '（　）やったけど、まだ不{ふ}安{あん}がある。',
                options: ['一{いち}応{おう}', 'まったく', 'ぜんぜん', 'ようやく'],
                correctIndex: 0,
                explanation: '「一応」は控えめに述べる。'
            }
        ]
    },
    'n2_igai': {
        id: 'n2_igai',
        pattern: '以{い}外{がい}',
        connection: '名{めい}詞{し} + 以{い}外{がい} + (は/に/の)',
        translation: '除了...之外',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '除外表現',
                description: '某個範圍之外的對象或事物。',
                examples: [
                    { japanese: '水{みず}以{い}外{がい}何{なに}も見{み}えない。', chinese: '除了水什麼也看不到。' },
                    { japanese: '彼{かれ}以{い}外{がい}は誰{だれ}もいない。', chinese: '除了他以外沒有別人。' },
                    { japanese: '英{えい}語{ご}以{い}外{がい}の言{げん}語{ご}は知{し}らない。', chinese: '除了英語之外不懂其他語言。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_igai_1',
                sentence: '火{か}曜{よう}日{び}（　）は空{あ}いています。',
                options: ['以{い}外{がい}', '以{い}上{じょう}', '以{い}下{か}', '以{い}内{ない}'],
                correctIndex: 0,
                explanation: '除外の表現。'
            },
            {
                id: 'n2_igai_2',
                sentence: '彼{かれ}（　）誰{だれ}も来{こ}なかった。',
                options: ['以{い}外{がい}は', '以{い}外{がい}で', '以{い}外{がい}に', '以{い}外{がい}の'],
                correctIndex: 0,
                explanation: '「〜以外は」= 除了…以外。'
            },
            {
                id: 'n2_igai_3',
                sentence: '日{に}本{ほん}語{ご}（　）の言{げん}語{ご}を勉{べん}強{きょう}したい。',
                options: ['以{い}外{がい}', '以{い}上{じょう}', '以{い}下{か}', '以{い}内{ない}'],
                correctIndex: 0,
                explanation: '「日本語以外の言語」。'
            }
        ]
    },
    'n2_ijou_ni': {
        id: 'n2_ijou_ni',
        pattern: '以{い}上{じょう}に',
        connection: '名{めい}詞{し} + 以{い}上{じょう}に\n動{どう}詞{し}普通{ふつう}形{けい} + 以{い}上{じょう}に\nい形{けい}容{よう}詞{し} + 以{い}上{じょう}に\nな形{けい}容{よう}詞{し} + な + 以{い}上{じょう}に',
        translation: '比...更...; 超出...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '預想を超える程度',
                description: '「思ったよりも〜」という意味で、想像以上の程度や結果を強調する。',
                examples: [
                    { japanese: '今{こん}回{かい}の試{し}験{けん}は思{おも}った以{い}上{じょう}に難{むずか}しかった。', chinese: '這次考試比想像中還難。' },
                    { japanese: '駅{えき}は予{よ}想{そう}以{い}上{じょう}に混{こ}んでいた。', chinese: '車站比預想還擁擠。' },
                    { japanese: '雨{あめ}が以{い}上{じょう}に強{つよ}くなってきた。', chinese: '雨下得比預期更大。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ijou_ni_1',
                sentence: '思{おも}った（　）難{むずか}しかった。',
                options: ['以{い}上{じょう}に', '以{い}上{じょう}は', '以{い}下{か}', '以{い}内{ない}'],
                correctIndex: 0,
                explanation: '「以{い}上{じょう}に」= 思ったよりも。'
            },
            {
                id: 'n2_ijou_ni_2',
                sentence: '予{よ}想{そう}（　）人{ひと}が集{あつ}まった。',
                options: ['以{い}上{じょう}に', '以{い}上{じょう}は', '以{い}外{がい}', '以{い}内{ない}'],
                correctIndex: 0,
                explanation: '予想を超える程度。'
            },
            {
                id: 'n2_ijou_ni_3',
                sentence: 'この町{まち}は思{おも}った（　）静{しず}かだ。',
                options: ['以{い}上{じょう}に', '以{い}上{じょう}は', '以{い}上{じょう}', '以{い}下{か}に'],
                correctIndex: 0,
                explanation: '比較の表現「以{い}上{じょう}に」。'
            }
        ]
    },
    'n2_ijou_wa': {
        id: 'n2_ijou_wa',
        pattern: '以{い}上{じょう}は',
        connection: '動{どう}詞{し}普通{ふつう}形{けい} + 以{い}上{じょう}は\n名{めい}詞{し} + である + 以{い}上{じょう}は',
        translation: '既然...就...; 既然如此',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '責任・義務の提示',
                description: '前件が成立した以上、後件の行動や責任は避けられないという意味。',
                examples: [
                    { japanese: '約{やく}束{そく}した以{い}上{じょう}は、守{まも}らなければならない。', chinese: '既然答應了，就必須遵守。' },
                    { japanese: 'リーダーである以{い}上{じょう}は、責{せき}任{にん}を持{も}つべきだ。', chinese: '既然是領導，就應該負責。' },
                    { japanese: '参{さん}加{か}を決{き}めた以{い}上{じょう}は、最{さい}後{ご}までやり抜{ぬ}く。', chinese: '既然決定參加，就要做到最後。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ijou_wa_1',
                sentence: '引{ひ}き受{う}けた（　）、最{さい}後{ご}まで責{せき}任{にん}を持{も}つべきだ。',
                options: ['以{い}上{じょう}は', '以{い}上{じょう}に', '以{い}外{がい}', '以{い}下{か}'],
                correctIndex: 0,
                explanation: '「既然〜以上は」。'
            },
            {
                id: 'n2_ijou_wa_2',
                sentence: '名{めい}前{まえ}を出{だ}した（　）、中{ちゅう}途{と}半{はん}端{ぱ}は許{ゆる}されない。',
                options: ['以{い}上{じょう}は', '以{い}上{じょう}に', '以{い}内{ない}', '以{い}外{がい}は'],
                correctIndex: 0,
                explanation: '前提が成立したら責任が伴う。'
            },
            {
                id: 'n2_ijou_wa_3',
                sentence: '先{せん}輩{ぱい}である（　）、後{こう}輩{はい}に優{やさ}しくしよう。',
                options: ['以{い}上{じょう}は', '以{い}上{じょう}に', '以{い}外{がい}', '以{い}下{か}で'],
                correctIndex: 0,
                explanation: '名詞+である以上は。'
            }
        ]
    },
    'n2_ikinari': {
        id: 'n2_ikinari',
        pattern: 'いきなり',
        connection: 'いきなり + 動{どう}詞{し}',
        translation: '突然; 沒預警地',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '前触れなく起こる',
                description: '予告や準備がない状態で急に起こることを表す。',
                examples: [
                    { japanese: 'いきなり雨{あめ}が降{ふ}り出{だ}した。', chinese: '突然下起雨來。' },
                    { japanese: '初{はじ}めて会{あ}ったのに、いきなり名{な}前{まえ}で呼{よ}ばれた。', chinese: '第一次見面就突然被叫名字。' },
                    { japanese: '説{せつ}明{めい}もなくいきなり始{はじ}まった。', chinese: '沒有說明就突然開始了。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ikinari_1',
                sentence: '彼{かれ}はいきなり立{た}ち上{あ}がって、外{そと}へ出{で}て行{い}った。',
                options: ['いきなり', 'すでに', 'たびに', 'ようやく'],
                correctIndex: 0,
                explanation: '予告なしの動作。'
            },
            {
                id: 'n2_ikinari_2',
                sentence: '説{せつ}明{めい}もなく（　）テストが始{はじ}まった。',
                options: ['いきなり', 'ゆっくり', 'すぐに', 'ついに'],
                correctIndex: 0,
                explanation: '準備なしで始まる。'
            },
            {
                id: 'n2_ikinari_3',
                sentence: '彼{かれ}は（　）怒{おこ}り出{だ}した。',
                options: ['いきなり', 'ようやく', 'まもなく', 'しばらく'],
                correctIndex: 0,
                explanation: '突然怒る。'
            }
        ]
    },
    'n2_ikki_ni': {
        id: 'n2_ikki_ni',
        pattern: '一{いっ}気{き}に',
        connection: '一{いっ}気{き}に + 動{どう}詞{し}',
        translation: '一口氣; 一下子',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '短時間でまとめて',
                description: '途中で止めず、短時間に勢いよく行うこと。',
                examples: [
                    { japanese: '階{かい}段{だん}を一{いっ}気{き}に駆{か}け上{あ}がった。', chinese: '一口氣衝上樓梯。' },
                    { japanese: '気{き}温{おん}が一{いっ}気{き}に下{さ}がった。', chinese: '氣溫一下子下降。' },
                    { japanese: '残{ざん}業{ぎょう}で仕{し}事{ごと}を一{いっ}気{き}に片{かた}付{づ}けた。', chinese: '加班把工作一口氣處理完。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ikki_ni_1',
                sentence: '階{かい}段{だん}を（　）上{あ}がった。',
                options: ['一{いっ}気{き}に', '一{いち}応{おう}', '一{いっ}方{ぽう}で', '一{いっ}層{そう}'],
                correctIndex: 0,
                explanation: '勢いよくまとめて行う。'
            },
            {
                id: 'n2_ikki_ni_2',
                sentence: '温{おん}度{ど}が（　）下{さ}がって寒{さむ}くなった。',
                options: ['一{いっ}気{き}に', '一{いち}応{おう}', '一{いっ}方{ぽう}で', '一{いっ}度{ど}に'],
                correctIndex: 0,
                explanation: '急に変化する。'
            },
            {
                id: 'n2_ikki_ni_3',
                sentence: '夏{なつ}休{やす}みの宿{しゅく}題{だい}を（　）終{お}わらせた。',
                options: ['一{いっ}気{き}に', 'ゆっくり', 'だんだん', 'すこしずつ'],
                correctIndex: 0,
                explanation: '短時間でまとめて。'
            }
        ]
    },
    'n2_ippou_de': {
        id: 'n2_ippou_de',
        pattern: '一{いっ}方{ぽう}で',
        connection: '普通{ふつう}形{けい} + 一{いっ}方{ぽう}で\n名{めい}詞{し} + である + 一{いっ}方{ぽう}で',
        translation: '另一方面; 一方面...另一方面...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '対照・同時並行',
                description: '一つの事柄の別の側面を述べるときに使う。対比や並行の意味。',
                examples: [
                    { japanese: '便{べん}利{り}な一{いっ}方{ぽう}で、情{じょう}報{ほう}漏{ろう}えいの危{き}険{けん}もある。', chinese: '方便的同時，也有資訊外洩的風險。' },
                    { japanese: '彼{かれ}は優{やさ}しい一{いっ}方{ぽう}で、厳{きび}しい面{めん}もある。', chinese: '他很溫柔，但也有嚴格的一面。' },
                    { japanese: '都{と}会{かい}に住{す}む一{いっ}方{ぽう}で、田{いなか}の暮{く}らしに憧{あこが}れている。', chinese: '住在都市的同時，也嚮往鄉村生活。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ippou_de_1',
                sentence: '便{べん}利{り}な（　）、コストが高{たか}い。',
                options: ['一{いっ}方{ぽう}で', '一{いっ}気{き}に', '一{いち}応{おう}', '一{いっ}層{そう}'],
                correctIndex: 0,
                explanation: '対比の表現。'
            },
            {
                id: 'n2_ippou_de_2',
                sentence: '彼{かれ}は働{はたら}く（　）、夜{よる}は勉{べん}強{きょう}している。',
                options: ['一{いっ}方{ぽう}で', '一{いっ}気{き}に', 'いきなり', 'すぐに'],
                correctIndex: 0,
                explanation: '二つの面を述べる。'
            },
            {
                id: 'n2_ippou_de_3',
                sentence: 'この仕{し}事{ごと}は大{たい}変{へん}な一{いっ}方{ぽう}で、やりがいもある。',
                options: ['一{いっ}方{ぽう}で', '以{い}上{じょう}に', '以{い}外{がい}', '以{い}内{ない}'],
                correctIndex: 0,
                explanation: '長短の対比。'
            }
        ]
    },
    'n2_iwayuru': {
        id: 'n2_iwayuru',
        pattern: 'いわゆる',
        connection: 'いわゆる + 名{めい}詞{し}',
        translation: '所謂的',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '一般的に言われるもの',
                description: '広く知られている名称や分類を指すときに使う。',
                examples: [
                    { japanese: '彼{かれ}はいわゆる天{てん}才{さい}だ。', chinese: '他是所謂的天才。' },
                    { japanese: 'ここは、いわゆる観{かん}光{こう}地{ち}だ。', chinese: '這裡是所謂的觀光地。' },
                    { japanese: 'それはいわゆるブラック企{き}業{ぎょう}の働{はたら}き方{かた}だ。', chinese: '那是所謂黑心企業的工作方式。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_iwayuru_1',
                sentence: 'ここは（　）名{めい}所{しょ}です。',
                options: ['いわゆる', 'いきなり', 'いよいよ', 'いったい'],
                correctIndex: 0,
                explanation: '広く知られている名称。'
            },
            {
                id: 'n2_iwayuru_2',
                sentence: '彼{かれ}はいわゆるエリート（　）働{はたら}いている。',
                options: ['として', 'としては', 'ところで', 'ところが'],
                correctIndex: 0,
                explanation: '名詞を修飾する「いわゆる」。'
            },
            {
                id: 'n2_iwayuru_3',
                sentence: 'それは（　）パワハラに当{あ}たる。',
                options: ['いわゆる', 'いきなり', 'いよいよ', 'いっそう'],
                correctIndex: 0,
                explanation: '一般的な呼び名。'
            }
        ]
    },
    'n2_iyoiyo': {
        id: 'n2_iyoiyo',
        pattern: 'いよいよ',
        connection: 'いよいよ + 文{ぶん}',
        translation: '終於; 越發; 關鍵時刻',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '本番や大事な局面',
                description: '物事が大詰めを迎えるときに使う。期待や緊張を含む。',
                examples: [
                    { japanese: 'いよいよ明{あした}出{しゅっ}発{ぱつ}だ。', chinese: '終於要在明天出發了。' },
                    { japanese: '冬{ふゆ}がいよいよ本{ほん}格{かく}的{てき}になってきた。', chinese: '冬天終於正式來臨了。' },
                    { japanese: '試{し}験{けん}まであと一{いっ}週{しゅう}で、いよいよ追{お}い込{こ}みだ。', chinese: '距離考試只剩一週，進入衝刺階段了。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_iyoiyo_1',
                sentence: 'いよいよ本{ほん}番{ばん}が近{ちか}づいてきた。',
                options: ['いよいよ', 'いきなり', 'いっぽうで', 'いちおう'],
                correctIndex: 0,
                explanation: '大事な局面に入る。'
            },
            {
                id: 'n2_iyoiyo_2',
                sentence: '（　）試{し}合{あい}が始{はじ}まる。',
                options: ['いよいよ', 'いきなり', 'いっそう', 'いつも'],
                correctIndex: 0,
                explanation: '本番の直前。'
            },
            {
                id: 'n2_iyoiyo_3',
                sentence: '桜{さくら}が（　）咲{さ}き始{はじ}めた。',
                options: ['いよいよ', 'いきなり', 'いったい', 'いちどに'],
                correctIndex: 0,
                explanation: '季節の到来を強調。'
            }
        ]
    },
    'n2_jou': {
        id: 'n2_jou',
        pattern: '上{じょう}',
        connection: '名{めい}詞{し} + 上{じょう}',
        translation: '在...方面; 從...角度',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '立場・観点の限定',
                description: '法律・仕事・形式などの観点から見ることを示す。',
                examples: [
                    { japanese: '法{ほう}律{りつ}上{じょう}、それは問{もん}題{だい}ない。', chinese: '從法律上來看，沒有問題。' },
                    { japanese: '仕{し}事{ごと}上{じょう}、今日は休{やす}めない。', chinese: '工作上的原因，今天不能休息。' },
                    { japanese: '形{けい}式{しき}上{じょう}は解{かい}決{けつ}した。', chinese: '形式上已經解決。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_jou_1',
                sentence: '法{ほう}律{りつ}（　）問{もん}題{だい}はない。',
                options: ['上{じょう}', '以{い}上{じょう}に', '以{い}外{がい}', '一{いっ}方{ぽう}で'],
                correctIndex: 0,
                explanation: '「法律上」= 法律の観点から。'
            },
            {
                id: 'n2_jou_2',
                sentence: '仕{し}事{ごと}（　）連{れん}絡{らく}が必{ひつ}要{よう}だ。',
                options: ['上{じょう}', '以{い}下{か}', '以{い}内{ない}', '以{い}外{がい}'],
                correctIndex: 0,
                explanation: '立場の限定。'
            },
            {
                id: 'n2_jou_3',
                sentence: '形{けい}式{しき}（　）は終{お}わっている。',
                options: ['上{じょう}', '以上{いじょう}', '外{がい}', '内{ない}'],
                correctIndex: 0,
                explanation: '形式の観点。'
            }
        ]
    },
    'n2_ka_no_you_ni': {
        id: 'n2_ka_no_you_ni',
        pattern: 'かのように',
        connection: '普通{ふつう}形{けい} + かのように\n名{めい}詞{し} + である + かのように',
        translation: '彷彿...一般; 像...一樣',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '実際とは違う様子',
                description: '比喩的に「まるで〜のようだ」という意味。',
                examples: [
                    { japanese: '彼{かれ}は何{なに}も知{し}らないかのように話{はな}した。', chinese: '他說話的樣子彷彿什麼都不知道。' },
                    { japanese: '鳥{とり}が歌{うた}うかのように風{かぜ}が鳴{な}る。', chinese: '風聲彷彿像鳥在歌唱。' },
                    { japanese: '機{き}械{かい}であるかのように正{せい}確{かく}だ。', chinese: '精準得彷彿是機器一般。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ka_no_you_ni_1',
                sentence: '彼{かれ}は何{なに}も知{し}らない（　）振{ふ}る舞{ま}った。',
                options: ['かのように', 'いきなり', 'いよいよ', 'いっぽうで'],
                correctIndex: 0,
                explanation: '比喩の「かのように」。'
            },
            {
                id: 'n2_ka_no_you_ni_2',
                sentence: '雨{あめ}が降{ふ}る（　）空{そら}の色{いろ}だ。',
                options: ['かのように', '以{い}上{じょう}に', '以{い}上{じょう}は', '以{い}外{がい}は'],
                correctIndex: 0,
                explanation: '「まるで〜のように」。'
            },
            {
                id: 'n2_ka_no_you_ni_3',
                sentence: '彼{かれ}はロボットである（　）正{せい}確{かく}に動{うご}く。',
                options: ['かのように', 'いきなり', 'いっそう', 'いちおう'],
                correctIndex: 0,
                explanation: '名詞+である+かのように。'
            }
        ]
    },
    'n2_ka_to_omottara': {
        id: 'n2_ka_to_omottara',
        pattern: 'かと思{おも}ったら',
        connection: '動{どう}詞{し}た形{けい} + かと思{おも}ったら',
        translation: '剛...就...; 原以為...結果...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '直後の変化や予想外',
                description: '「A かと思ったら B」表示剛發生 A，緊接著就發生 B，或結果出乎意料。',
                examples: [
                    { japanese: '晴{は}れたかと思{おも}ったら、すぐに雨{あめ}が降{ふ}ってきた。', chinese: '剛以為天晴了，馬上又下起雨。' },
                    { japanese: '赤{あか}ちゃんが寝{ね}たかと思{おも}ったら、すぐ泣{な}き出{だ}した。', chinese: '寶寶剛睡著，立刻就哭了。' },
                    { japanese: '解{かい}決{けつ}したかと思{おも}ったら、また新{あたら}しい問{もん}題{だい}が出{で}てきた。', chinese: '剛以為解決了，又出現新的問題。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ka_to_omottara_1',
                sentence: '晴{は}れた（　）、すぐ雨{あめ}が降{ふ}った。',
                options: ['かと思{おも}ったら', 'かのように', 'いよいよ', '一{いっ}方{ぽう}で'],
                correctIndex: 0,
                explanation: '直後の変化。'
            },
            {
                id: 'n2_ka_to_omottara_2',
                sentence: '彼{かれ}は来{く}る（　）、急{きゅう}にキャンセルした。',
                options: ['かと思{おも}ったら', '以{い}上{じょう}に', '以{い}上{じょう}は', 'いきなり'],
                correctIndex: 0,
                explanation: '予想外の結果。'
            },
            {
                id: 'n2_ka_to_omottara_3',
                sentence: '寝{ね}た（　）、すぐ目{め}が覚{さ}めた。',
                options: ['かと思{おも}ったら', 'いきなり', 'いっきに', 'いちおう'],
                correctIndex: 0,
                explanation: '直後に別の事が起こる。'
            }
        ]
    },
    'n2_ka_to_omottara_1': {
        id: 'n2_ka_to_omottara_1',
        pattern: 'かと思{おも}ったら',
        connection: '動{どう}詞{し}た形{けい} + かと思{おも}ったら',
        translation: '剛...就...; 原以為...結果...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '短い間隔の出来事',
                description: 'A の直後に B が起こる、または期待と違う結果になることを表す。',
                examples: [
                    { japanese: '電{でん}車{しゃ}が来{く}るかと思{おも}ったら、急{きゅう}に遅{おく}れた。', chinese: '剛以為電車要來了，結果突然延誤。' },
                    { japanese: '静{しず}かになったかと思{おも}ったら、外{そと}が騒{さわ}がしくなった。', chinese: '剛安靜下來，外面又變吵了。' },
                    { japanese: '終{お}わったかと思{おも}ったら、またやり直{なお}しだ。', chinese: '剛以為結束了，又得重做。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ka_to_omottara_1_1',
                sentence: '静{しず}かになった（　）、急{きゅう}に騒{さわ}がしくなった。',
                options: ['かと思{おも}ったら', 'かのように', '以{い}上{じょう}に', '以{い}上{じょう}は'],
                correctIndex: 0,
                explanation: '直後に変化が起こる。'
            },
            {
                id: 'n2_ka_to_omottara_1_2',
                sentence: '解{かい}決{けつ}した（　）、また問{もん}題{だい}が出{で}てきた。',
                options: ['かと思{おも}ったら', 'いきなり', 'いよいよ', 'いっぽうで'],
                correctIndex: 0,
                explanation: '予想外の展開。'
            },
            {
                id: 'n2_ka_to_omottara_1_3',
                sentence: '彼{かれ}は起{お}きた（　）、すぐに二{に}度{ど}寝{ね}した。',
                options: ['かと思{おも}ったら', '一{いっ}気{き}に', '一{いっ}方{ぽう}で', 'いちおう'],
                correctIndex: 0,
                explanation: '動作が続けて起こる。'
            }
        ]
    },
    'n2_kaette': {
        id: 'n2_kaette',
        pattern: 'かえって',
        connection: 'かえって + 文{ぶん}',
        translation: '反而; 倒不如',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '結果が逆になる',
                description: '期待した結果と反対になったときに使う。',
                examples: [
                    { japanese: '急{いそ}いだかえって遅{おそ}くなった。', chinese: '越急反而更晚了。' },
                    { japanese: '休{やす}むつもりだったが、寝{ね}すぎてかえって疲{つか}れた。', chinese: '本來想休息，結果睡過頭反而更累。' },
                    { japanese: '親{しん}切{せつ}のつもりが、かえって迷{めい}惑{わく}になった。', chinese: '本想好意，反而成了困擾。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_kaette_1',
                sentence: '急{いそ}いだが、（　）遅{おそ}くなってしまった。',
                options: ['かえって', 'いきなり', 'いよいよ', 'いっぽうで'],
                correctIndex: 0,
                explanation: '期待と逆の結果。'
            },
            {
                id: 'n2_kaette_2',
                sentence: '手{て}伝{つだ}ったつもりが、（　）邪{じゃ}魔{ま}になった。',
                options: ['かえって', 'かねない', 'かねる', 'からこそ'],
                correctIndex: 0,
                explanation: '良かれと思ったのに逆効果。'
            },
            {
                id: 'n2_kaette_3',
                sentence: '甘{あま}く見{み}たら、（　）大{おお}変{へん}だった。',
                options: ['かえって', 'かのように', 'かぎり', 'かもしれない'],
                correctIndex: 0,
                explanation: '結果が反対。'
            }
        ]
    },
    'n2_kagiri': {
        id: 'n2_kagiri',
        pattern: '限{かぎ}り',
        connection: '動{どう}詞{し}辭{じ}書{しょ}形{けい} + 限{かぎ}り\n動{どう}詞{し}ない形{けい} + 限{かぎ}り\n動{どう}詞{し}ている形{けい} + 限{かぎ}り',
        translation: '只要...就...; 在...範圍內',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '条件・範囲の限定',
                description: '「〜する限り」= 只要...就...。また「知っている限り」= 在我所知範圍內。',
                examples: [
                    { japanese: '雨{あめ}が降{ふ}らない限{かぎ}り、試{し}合{あい}は行{おこな}う。', chinese: '只要不下雨，就進行比賽。' },
                    { japanese: '私{わたし}が知{し}っている限{かぎ}り、その店{みせ}は閉{し}まっている。', chinese: '在我所知的範圍內，那家店是關著的。' },
                    { japanese: 'できる限{かぎ}り協{きょう}力{りょく}します。', chinese: '我會盡可能協助。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_kagiri_1',
                sentence: '雨{あめ}が降{ふ}らない（　）、出{しゅっ}発{ぱつ}する。',
                options: ['限{かぎ}り', 'かえって', 'かねる', 'かねない'],
                correctIndex: 0,
                explanation: '条件を示す。'
            },
            {
                id: 'n2_kagiri_2',
                sentence: '私{わたし}の知{し}っている（　）では、その話{はなし}は嘘{うそ}だ。',
                options: ['限{かぎ}り', 'かえって', 'かのように', 'からこそ'],
                correctIndex: 0,
                explanation: '範囲を示す用法。'
            },
            {
                id: 'n2_kagiri_3',
                sentence: 'できる（　）やってみる。',
                options: ['限{かぎ}り', 'かねる', 'かねない', 'かえって'],
                correctIndex: 0,
                explanation: '「できる限り」。'
            }
        ]
    },
    'n2_kai_ga_aru': {
        id: 'n2_kai_ga_aru',
        pattern: '甲斐{かい}がある',
        connection: '動{どう}詞{し}ます形{けい}（去{きょ}ます）+ 甲斐{かい}がある',
        translation: '值得...; 沒白費',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '努力が報われる',
                description: '努力や苦労が良い結果につながったときに使う。',
                examples: [
                    { japanese: '毎{まい}日{にち}練{れん}習{しゅう}した甲斐{かい}があって、試{し}合{あい}に勝{か}てた。', chinese: '每天練習沒有白費，贏得了比賽。' },
                    { japanese: '徹{てつ}夜{や}した甲斐{かい}があり、レポートが間{ま}に合{あ}った。', chinese: '熬夜沒有白費，報告趕上了。' },
                    { japanese: '手{て}伝{つだ}った甲斐{かい}があって、喜{よろこ}んでもらえた。', chinese: '幫忙沒有白費，對方很開心。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_kai_ga_aru_1',
                sentence: '毎{まい}日{にち}練{れん}習{しゅう}した（　）、合{ごう}格{かく}できた。',
                options: ['甲斐{かい}があって', 'かねない', 'かえって', 'かのように'],
                correctIndex: 0,
                explanation: '努力が報われる結果。'
            },
            {
                id: 'n2_kai_ga_aru_2',
                sentence: 'この仕{し}事{ごと}はやり（　）と思{おも}う。',
                options: ['甲斐{かい}がある', 'かねる', 'かえって', 'かぎり'],
                correctIndex: 0,
                explanation: '「やり甲斐がある」。'
            },
            {
                id: 'n2_kai_ga_aru_3',
                sentence: '助{たす}けた（　）があったと感{かん}じた。',
                options: ['甲斐{かい}', '限{かぎ}り', '上{じょう}', '以{い}上{じょう}'],
                correctIndex: 0,
                explanation: '「助けた甲斐があった」。'
            }
        ]
    },
    'n2_kai_ga_aru_1': {
        id: 'n2_kai_ga_aru_1',
        pattern: '甲斐{かい}がある',
        connection: '動{どう}詞{し}ます形{けい}（去{きょ}ます）+ 甲斐{かい}がある',
        translation: '值得...; 努力沒白費',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '結果が見合う',
                description: '苦労や時間に見合う成果が得られたという意味。',
                examples: [
                    { japanese: '早{はや}起{お}きした甲斐{かい}があって、きれいな朝{あさ}日{ひ}が見{み}られた。', chinese: '早起沒有白費，看到了美麗的朝陽。' },
                    { japanese: '練{れん}習{しゅう}した甲斐{かい}があり、発{はっ}表{ぴょう}は成{せい}功{こう}した。', chinese: '練習沒有白費，發表成功了。' },
                    { japanese: '準{じゅん}備{び}した甲斐{かい}があって、トラブルを防{ふせ}げた。', chinese: '準備沒有白費，避免了麻煩。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_kai_ga_aru_1_1',
                sentence: '準{じゅん}備{び}した（　）、発{はっ}表{ぴょう}がうまくいった。',
                options: ['甲斐{かい}があって', 'かねない', 'かぎり', 'かえって'],
                correctIndex: 0,
                explanation: '努力が報われる。'
            },
            {
                id: 'n2_kai_ga_aru_1_2',
                sentence: 'この勉{べん}強{きょう}は（　）がある。',
                options: ['甲斐{かい}', '限{かぎ}り', '上{じょう}', '以{い}外{がい}'],
                correctIndex: 0,
                explanation: '「勉強の甲斐がある」。'
            },
            {
                id: 'n2_kai_ga_aru_1_3',
                sentence: 'がんばった（　）、良{よ}い結{けっ}果{か}が出{で}た。',
                options: ['甲斐{かい}があって', 'かえって', 'かねる', 'からこそ'],
                correctIndex: 0,
                explanation: '努力に見合う結果。'
            }
        ]
    },
    'n2_kanenai': {
        id: 'n2_kanenai',
        pattern: 'かねない',
        connection: '動{どう}詞{し}ます形{けい}（去{きょ}ます）+ かねない',
        translation: '有可能... (通常指不好的事)',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '悪い結果の可能性',
                description: '否定的な結果が起こる可能性を示す。',
                examples: [
                    { japanese: '不用{ふよう}意{い}な発{はつ}言{げん}は誤{ご}解{かい}を招{まね}きかねない。', chinese: '不小心的發言可能會引起誤解。' },
                    { japanese: 'ルールを守{まも}らないと事{じ}故{こ}が起{お}こりかねない。', chinese: '不遵守規則可能會發生事故。' },
                    { japanese: '無{む}理{り}をすると体{からだ}を壊{こわ}しかねない。', chinese: '勉強過度可能會把身體弄壞。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_kanenai_1',
                sentence: '不用{ふよう}意{い}な発{はつ}言{げん}は誤{ご}解{かい}を招{まね}き（　）。',
                options: ['かねない', 'かねる', 'かえって', 'かぎり'],
                correctIndex: 0,
                explanation: '悪い結果の可能性。'
            },
            {
                id: 'n2_kanenai_2',
                sentence: 'スピードを出{だ}しすぎると事{じ}故{こ}を起{お}こし（　）。',
                options: ['かねない', 'かねる', 'かのように', 'からこそ'],
                correctIndex: 0,
                explanation: '否定的な結果の可能性。'
            },
            {
                id: 'n2_kanenai_3',
                sentence: 'その噂{うわさ}は人{ひと}を傷{きず}つけ（　）。',
                options: ['かねない', 'かねる', 'かえって', 'かぎり'],
                correctIndex: 0,
                explanation: '悪い影響が起こる可能性。'
            }
        ]
    },
    'n2_kaneru': {
        id: 'n2_kaneru',
        pattern: 'かねる',
        connection: '動{どう}詞{し}ます形{けい}（去{きょ}ます）+ かねる',
        translation: '難以...; 無法...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '丁寧な否定',
                description: '「〜するのは難しい」という意味で、断りや控えめな否定に使う。',
                examples: [
                    { japanese: 'その提{てい}案{あん}には賛{さん}成{せい}しかねる。', chinese: '我難以贊成那個提案。' },
                    { japanese: '申{もう}し訳{わけ}ありませんが、それは引{ひ}き受{う}けかねます。', chinese: '很抱歉，那件事我無法接受。' },
                    { japanese: 'この場{ば}では判{はん}断{だん}しかねる。', chinese: '在這裡難以做出判斷。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_kaneru_1',
                sentence: 'その提{てい}案{あん}には賛{さん}成{せい}し（　）。',
                options: ['かねる', 'かねない', 'かえって', 'かぎり'],
                correctIndex: 0,
                explanation: '丁寧な否定。'
            },
            {
                id: 'n2_kaneru_2',
                sentence: '今{いま}は判{はん}断{だん}し（　）。',
                options: ['かねる', 'かねない', 'かのように', 'からこそ'],
                correctIndex: 0,
                explanation: 'その場で難しい。'
            },
            {
                id: 'n2_kaneru_3',
                sentence: '恐{おそ}れ入{い}りますが、お答{こた}えし（　）。',
                options: ['かねます', 'かねない', 'かえって', 'かぎり'],
                correctIndex: 0,
                explanation: '丁寧な断り。'
            }
        ]
    },
    'n2_kara_iu_to': {
        id: 'n2_kara_iu_to',
        pattern: 'から言{い}うと',
        connection: '名{めい}詞{し} + から言{い}うと',
        translation: '從...來說',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '立場・観点から述べる',
                description: 'ある基準や立場を示して判断する表現。',
                examples: [
                    { japanese: '値{ね}段{だん}から言{い}うと、高{たか}すぎる。', chinese: '從價格來說太貴了。' },
                    { japanese: '私{わたし}の立{たち}場{ば}から言{い}うと、賛{さん}成{せい}できない。', chinese: '從我的立場來說，無法贊成。' },
                    { japanese: '結{けっ}果{か}から言{い}うと、失{しっ}敗{ぱい}だった。', chinese: '從結果來說，是失敗的。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_kara_iu_to_1',
                sentence: '値{ね}段{だん}（　）、高{たか}すぎる。',
                options: ['から言{い}うと', 'かねない', 'かねる', 'かえって'],
                correctIndex: 0,
                explanation: '観点を示す。'
            },
            {
                id: 'n2_kara_iu_to_2',
                sentence: '私{わたし}の立{たち}場{ば}（　）、反{はん}対{たい}だ。',
                options: ['から言{い}うと', 'からこそ', 'かのように', 'かぎり'],
                correctIndex: 0,
                explanation: '立場からの判断。'
            },
            {
                id: 'n2_kara_iu_to_3',
                sentence: '結{けっ}果{か}（　）、計{けい}画{かく}は失{しっ}敗{ぱい}した。',
                options: ['から言{い}うと', 'かえって', 'かねない', 'かねる'],
                correctIndex: 0,
                explanation: '基準を示す。'
            }
        ]
    },
    'n2_kara_iu_to_1': {
        id: 'n2_kara_iu_to_1',
        pattern: 'から言{い}うと',
        connection: '名{めい}詞{し} + から言{い}うと',
        translation: '從...觀點來看',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '基準の提示',
                description: 'ある基準を挙げて、その観点から判断する。',
                examples: [
                    { japanese: '健{けん}康{こう}の面{めん}から言{い}うと、この食{しょく}事{じ}は塩{しお}分{ぶん}が多{おお}い。', chinese: '從健康面來看，這餐鹽分太高。' },
                    { japanese: 'データから言{い}うと、販{はん}売{ばい}は増{ふ}えている。', chinese: '從數據來看，銷售在增加。' },
                    { japanese: '経{けい}験{けん}から言{い}うと、慎{しん}重{ちょう}に進{すす}めた方{ほう}がいい。', chinese: '從經驗來看，最好謹慎進行。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_kara_iu_to_1_1',
                sentence: 'データ（　）、売{う}上{あ}げは伸{の}びている。',
                options: ['から言{い}うと', 'かえって', 'かねる', 'かねない'],
                correctIndex: 0,
                explanation: '観点を示す。'
            },
            {
                id: 'n2_kara_iu_to_1_2',
                sentence: '経{けい}験{けん}（　）、慎{しん}重{ちょう}に進{すす}めた方{ほう}がいい。',
                options: ['から言{い}うと', 'かぎり', 'かのように', 'からこそ'],
                correctIndex: 0,
                explanation: '基準から判断。'
            },
            {
                id: 'n2_kara_iu_to_1_3',
                sentence: '健{けん}康{こう}の面{めん}（　）、この食{しょく}事{じ}は良{よ}くない。',
                options: ['から言{い}うと', 'かえって', 'かねない', 'かねる'],
                correctIndex: 0,
                explanation: '面という観点。'
            }
        ]
    },
    'n2_kara_koso': {
        id: 'n2_kara_koso',
        pattern: 'からこそ',
        connection: '普{ふ}通{つう}形{けい} + からこそ\n名{めい}詞{し} + だからこそ',
        translation: '正因為...才...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '理由を強調する',
                description: '「〜だからこそ」の形で、理由を強く強調する。',
                examples: [
                    { japanese: '努{ど}力{りょく}したからこそ、今{いま}の成{せい}果{か}がある。', chinese: '正因為努力，才有現在的成果。' },
                    { japanese: '信{しん}頼{らい}しているからこそ、厳{きび}しく言{い}う。', chinese: '正因為信任，才會嚴格說。' },
                    { japanese: '仲{なか}間{ま}だからこそ、遠{えん}慮{りょ}せずに話{はな}せる。', chinese: '正因為是夥伴，所以可以不客氣地說。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_kara_koso_1',
                sentence: '努{ど}力{りょく}した（　）、合{ごう}格{かく}できた。',
                options: ['からこそ', 'かえって', 'かねる', 'かねない'],
                correctIndex: 0,
                explanation: '理由を強く強調。'
            },
            {
                id: 'n2_kara_koso_2',
                sentence: '信{しん}頼{らい}している（　）、はっきり言{い}う。',
                options: ['からこそ', 'かのように', 'かぎり', 'かえって'],
                correctIndex: 0,
                explanation: '信頼が理由。'
            },
            {
                id: 'n2_kara_koso_3',
                sentence: '仲{なか}間{ま}（　）、助{たす}け合{あ}える。',
                options: ['だからこそ', 'かねない', 'かねる', 'かえって'],
                correctIndex: 0,
                explanation: '名詞 + だからこそ。'
            }
        ]
    },
    'n2_kara_miru_to': {
        id: 'n2_kara_miru_to',
        pattern: 'から見{み}ると',
        connection: '名{めい}詞{し} + から見{み}ると',
        translation: '從...來看',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '観点・立場の提示',
                description: 'ある立場や視点から判断することを示す。',
                examples: [
                    { japanese: '外{がい}国{こく}人{じん}から見{み}ると、この習{しゅう}慣{かん}は不{ふ}思{し}議{ぎ}だ。', chinese: '從外國人看來，這個習慣很不可思議。' },
                    { japanese: '客{きゃく}の立{たち}場{ば}から見{み}ると、価{か}格{かく}は高{たか}い。', chinese: '從客人的立場看，價格太高。' },
                    { japanese: '私{わたし}から見{み}ると、彼{かれ}はまじめだ。', chinese: '在我看來，他很認真。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_kara_miru_to_1',
                sentence: '外{がい}国{こく}人{じん}（　）、この文{ぶん}化{か}は珍{めずら}しい。',
                options: ['から見{み}ると', 'からこそ', 'かねる', 'かねない'],
                correctIndex: 0,
                explanation: '視点を示す。'
            },
            {
                id: 'n2_kara_miru_to_2',
                sentence: '私{わたし}（　）、彼{かれ}は優{やさ}しい人{ひと}だ。',
                options: ['から見{み}ると', 'かえって', 'かのように', 'かぎり'],
                correctIndex: 0,
                explanation: '主観的な見方。'
            },
            {
                id: 'n2_kara_miru_to_3',
                sentence: '客{きゃく}の立{たち}場{ば}（　）、値{ね}段{だん}が高{たか}い。',
                options: ['から見{み}ると', 'からこそ', 'かねない', 'かねる'],
                correctIndex: 0,
                explanation: '立場からの判断。'
            }
        ]
    },
    'n2_kara_miru_to_1': {
        id: 'n2_kara_miru_to_1',
        pattern: 'から見{み}ると',
        connection: '名{めい}詞{し} + から見{み}ると',
        translation: '從...來看; 就...而言',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '基準を示して判断',
                description: 'ある視点からの見方や評価を示す。',
                examples: [
                    { japanese: '専{せん}門{もん}家{か}から見{み}ると、その結{けっ}論{ろん}は甘{あま}い。', chinese: '從專家看來，那個結論太天真。' },
                    { japanese: '親{おや}から見{み}ると、子{こ}どもはまだ幼{おさな}い。', chinese: '從父母看來，孩子還很小。' },
                    { japanese: '学{がく}生{せい}から見{み}ると、この授{じゅ}業{ぎょう}は難{むずか}しい。', chinese: '從學生看來，這門課很難。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_kara_miru_to_1_1',
                sentence: '専{せん}門{もん}家{か}（　）、その方{ほう}法{ほう}は危{き}険{けん}だ。',
                options: ['から見{み}ると', 'かねる', 'かねない', 'かえって'],
                correctIndex: 0,
                explanation: '視点を示す。'
            },
            {
                id: 'n2_kara_miru_to_1_2',
                sentence: '親{おや}（　）、子{こ}どもはいつまでも子{こ}どもだ。',
                options: ['から見{み}ると', 'からこそ', 'かのように', 'かぎり'],
                correctIndex: 0,
                explanation: '立場からの見方。'
            },
            {
                id: 'n2_kara_miru_to_1_3',
                sentence: '学{がく}生{せい}（　）、この授{じゅ}業{ぎょう}は大{たい}変{へん}だ。',
                options: ['から見{み}ると', 'かえって', 'かねる', 'かねない'],
                correctIndex: 0,
                explanation: '評価の視点。'
            }
        ]
    },
    'n2_kara_niwa': {
        id: 'n2_kara_niwa',
        pattern: 'からには',
        connection: '動{どう}詞{し}普{ふ}通{つう}形{けい} + からには\n名{めい}詞{し} + である + からには',
        translation: '既然...就...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '決意・責任',
                description: '前件が成立した以上、後件の義務や決意があるという意味。',
                examples: [
                    { japanese: '引{ひ}き受{う}けたからには、最後{さいご}までやり抜{ぬ}く。', chinese: '既然答應了，就要做到最後。' },
                    { japanese: '試{し}験{けん}を受{う}けるからには、合{ごう}格{かく}したい。', chinese: '既然要考，就想合格。' },
                    { japanese: '約{やく}束{そく}したからには守{まも}らないといけない。', chinese: '既然約好了，就必須遵守。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_kara_niwa_1',
                sentence: '引{ひ}き受{う}けた（　）、責{せき}任{にん}を持{も}つ。',
                options: ['からには', 'からこそ', 'かえって', 'かぎり'],
                correctIndex: 0,
                explanation: '既然做了就要負責。'
            },
            {
                id: 'n2_kara_niwa_2',
                sentence: '参{さん}加{か}する（　）、全{ぜん}力{りょく}でがんばる。',
                options: ['からには', 'かねない', 'かねる', 'かのように'],
                correctIndex: 0,
                explanation: '決意の表現。'
            },
            {
                id: 'n2_kara_niwa_3',
                sentence: '約{やく}束{そく}した（　）、守{まも}るべきだ。',
                options: ['からには', 'かねる', 'かねない', 'かえって'],
                correctIndex: 0,
                explanation: '義務の提示。'
            }
        ]
    },
    'n2_kara_shite': {
        id: 'n2_kara_shite',
        pattern: 'からして',
        connection: '名{めい}詞{し} + からして',
        translation: '從...就...; 單從...來看',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '一部から判断する',
                description: '代表的な部分を取り上げて、全体の特徴を推測する。',
                examples: [
                    { japanese: '名{な}前{まえ}からして難{むずか}しい。', chinese: '光看名字就覺得難。' },
                    { japanese: '態{たい}度{ど}からして失{しっ}礼{れい}だ。', chinese: '從態度看就很失禮。' },
                    { japanese: '話{はなし}し方{かた}からして彼{かれ}は外{がい}国{こく}人{じん}だ。', chinese: '從說話方式看他就是外國人。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_kara_shite_1',
                sentence: '名{な}前{まえ}（　）難{むずか}しそうだ。',
                options: ['からして', 'からこそ', 'かねない', 'かねる'],
                correctIndex: 0,
                explanation: '部分から全体を判断。'
            },
            {
                id: 'n2_kara_shite_2',
                sentence: '態{たい}度{ど}（　）失{しっ}礼{れい}だ。',
                options: ['からして', 'かえって', 'かのように', 'かぎり'],
                correctIndex: 0,
                explanation: '態度だけで判断。'
            },
            {
                id: 'n2_kara_shite_3',
                sentence: '話{はなし}し方{かた}（　）、彼{かれ}は専{せん}門{もん}家{か}だ。',
                options: ['からして', 'かねる', 'かねない', 'かえって'],
                correctIndex: 0,
                explanation: '一部から推測。'
            }
        ]
    },
    'n2_kara_suru_to': {
        id: 'n2_kara_suru_to',
        pattern: 'からすると',
        connection: '名{めい}詞{し} + からすると',
        translation: '從...來看; 根據...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '判断の基準',
                description: 'ある基準や材料から判断することを示す。',
                examples: [
                    { japanese: '声{こえ}からすると、彼{かれ}は元{げん}気{き}そうだ。', chinese: '從聲音來看，他好像很有精神。' },
                    { japanese: '値{ね}段{だん}からすると、安{やす}い方{ほう}だ。', chinese: '從價格來看算便宜。' },
                    { japanese: 'データからすると、この結{けっ}果{か}は妥{だ}当{とう}だ。', chinese: '從數據來看，這結果合理。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_kara_suru_to_1',
                sentence: '声{こえ}（　）、元{げん}気{き}そうだ。',
                options: ['からすると', 'からこそ', 'かねない', 'かねる'],
                correctIndex: 0,
                explanation: '材料から判断する。'
            },
            {
                id: 'n2_kara_suru_to_2',
                sentence: '値{ね}段{だん}（　）、安{やす}い。',
                options: ['からすると', 'かえって', 'かぎり', 'かのように'],
                correctIndex: 0,
                explanation: '基準を示す。'
            },
            {
                id: 'n2_kara_suru_to_3',
                sentence: 'データ（　）、その結{けっ}論{ろん}は正{ただ}しい。',
                options: ['からすると', 'かねる', 'かねない', 'かえって'],
                correctIndex: 0,
                explanation: '根拠に基づく判断。'
            }
        ]
    },
    'n2_kara_suru_to_kara_sureba': {
        id: 'n2_kara_suru_to_kara_sureba',
        pattern: 'からすると / からすれば',
        connection: '名{めい}詞{し} + からすると / からすれば',
        translation: '從...來看; 就...而言',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '同じ意味の表現',
                description: '「からすると」と「からすれば」はほぼ同じ意味で、基準や視点から判断する。',
                examples: [
                    { japanese: '時{じ}間{かん}からすれば、まだ早{はや}い。', chinese: '從時間來看還早。' },
                    { japanese: '彼{かれ}の年{ねん}齢{れい}からすると、落{お}ち着{つ}いている。', chinese: '以他的年齡來看很成熟。' },
                    { japanese: '結{けっ}果{か}からすれば、成{せい}功{こう}と言{い}える。', chinese: '從結果來看可說是成功。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_kara_suru_to_kara_sureba_1',
                sentence: '時{じ}間{かん}（　）、まだ間{ま}に合{あ}う。',
                options: ['からすれば', 'かねる', 'かねない', 'かえって'],
                correctIndex: 0,
                explanation: '基準を示す。'
            },
            {
                id: 'n2_kara_suru_to_kara_sureba_2',
                sentence: '年{ねん}齢{れい}（　）、落{お}ち着{つ}いている。',
                options: ['からすると', 'かえって', 'かのように', 'かぎり'],
                correctIndex: 0,
                explanation: '視点から評価する。'
            },
            {
                id: 'n2_kara_suru_to_kara_sureba_3',
                sentence: '結{けっ}果{か}（　）、成{せい}功{こう}だ。',
                options: ['からすれば', 'かねる', 'かねない', 'からこそ'],
                correctIndex: 0,
                explanation: '判断の基準を示す。'
            }
        ]
    },
    'n2_kara_to_itte': {
        id: 'n2_kara_to_itte',
        pattern: 'からと言{い}って',
        connection: '普{ふ}通{つう}形{けい} + からと言{い}って\n名{めい}詞{し} + だからと言{い}って',
        translation: '雖說...但是...; 不能因為...就...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '前件だけで判断しない',
                description: '「A からと言って B」= 只是因為 A，B 並不成立。',
                examples: [
                    { japanese: '安{やす}いからと言{い}って、すぐ買{か}うべきではない。', chinese: '不能因為便宜就馬上買。' },
                    { japanese: '忙{いそ}しいからと言{い}って、手{て}伝{つだ}わないのはよくない。', chinese: '不能因為忙就不幫忙。' },
                    { japanese: '好{す}きだからと言{い}って、毎{まい}日{にち}食{た}べるのは体{からだ}に悪{わる}い。', chinese: '不能因為喜歡就每天吃，對身體不好。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_kara_to_itte_1',
                sentence: '安{やす}い（　）、すぐ買{か}うべきではない。',
                options: ['からと言{い}って', 'からこそ', 'かえって', 'かねない'],
                correctIndex: 0,
                explanation: '理由だけで判断しない。'
            },
            {
                id: 'n2_kara_to_itte_2',
                sentence: '忙{いそ}しい（　）、約{やく}束{そく}を破{やぶ}ってはいけない。',
                options: ['からと言{い}って', 'かのように', 'かぎり', 'かえって'],
                correctIndex: 0,
                explanation: '前件だけで免除されない。'
            },
            {
                id: 'n2_kara_to_itte_3',
                sentence: '好{す}き（　）、毎{まい}日{にち}食{た}べるのはよくない。',
                options: ['からと言{い}って', 'かねる', 'かねない', 'からこそ'],
                correctIndex: 0,
                explanation: '「AだからBしてよい」ではない。'
            }
        ]
    },
    'n2_kara_to_itte_1': {
        id: 'n2_kara_to_itte_1',
        pattern: 'からと言{い}って',
        connection: '普{ふ}通{つう}形{けい} + からと言{い}って\n名{めい}詞{し} + だからと言{い}って',
        translation: '雖說...但未必...; 只因為...也不行',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '部分的理由を否定',
                description: '前件の理由だけで後件が正当化されないことを示す。',
                examples: [
                    { japanese: '子{こ}どもだからと言{い}って、甘{あま}やかしてはいけない。', chinese: '不能因為是小孩就溺愛。' },
                    { japanese: '失{しっ}敗{ぱい}したからと言{い}って、諦{あき}らめるのは早{はや}い。', chinese: '不能因為失敗就放棄。' },
                    { japanese: '天{てん}気{き}が悪{わる}いからと言{い}って、行{い}かないのはもったいない。', chinese: '不能因為天氣不好就不去。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_kara_to_itte_1_1',
                sentence: '子{こ}ども（　）、甘{あま}やかしてはいけない。',
                options: ['だからと言{い}って', 'かねる', 'かねない', 'かえって'],
                correctIndex: 0,
                explanation: '理由だけで許されない。'
            },
            {
                id: 'n2_kara_to_itte_1_2',
                sentence: '失{しっ}敗{ぱい}した（　）、諦{あき}らめるのは早{はや}い。',
                options: ['からと言{い}って', 'かのように', 'かぎり', 'からこそ'],
                correctIndex: 0,
                explanation: '前件だけで結論は出せない。'
            },
            {
                id: 'n2_kara_to_itte_1_3',
                sentence: '天{てん}気{き}が悪{わる}い（　）、出{で}かけないのはもったいない。',
                options: ['からと言{い}って', 'かねる', 'かねない', 'かえって'],
                correctIndex: 0,
                explanation: '理由だけで行動を決めない。'
            }
        ]
    },
    'n2_ka_nai_ka_no_uchi_ni': {
        id: 'n2_ka_nai_ka_no_uchi_ni',
        pattern: 'か〜ないかのうちに',
        connection: '動{どう}詞{し}辞{じ}書{しょ}形{けい} + か + 動{どう}詞{し}ない形{けい} + かのうちに',
        translation: '剛一...就...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: 'ほとんど同時',
                description: '前の動作が終わるか終わらないかの間に次の動作が起こる。',
                examples: [
                    { japanese: '家{いえ}を出{で}るか出{で}ないかのうちに雨{あめ}が降{ふ}り出{だ}した。', chinese: '剛出門雨就下起來。' },
                    { japanese: '座{すわ}るか座{すわ}らないかのうちに、電{でん}車{しゃ}が動{うご}き出{だ}した。', chinese: '剛坐下電車就開動了。' },
                    { japanese: '聞{き}くか聞{き}かないかのうちに、答{こた}えが返{かえ}ってきた。', chinese: '話剛問完答案就回來了。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ka_nai_ka_no_uchi_ni_1',
                sentence: '家{いえ}を出{で}る（　）、雨{あめ}が降{ふ}り出{だ}した。',
                options: ['か出{で}ないかのうちに', 'からと言{い}って', 'からこそ', 'かねない'],
                correctIndex: 0,
                explanation: '「〜か〜ないかのうちに」。'
            },
            {
                id: 'n2_ka_nai_ka_no_uchi_ni_2',
                sentence: '座{すわ}るか座{すわ}らないかのうちに、電{でん}車{しゃ}が（　）。',
                options: ['動{うご}き出{だ}した', '動{うご}く', '動{うご}いている', '動{うご}くだろう'],
                correctIndex: 0,
                explanation: '直後の出来事。'
            },
            {
                id: 'n2_ka_nai_ka_no_uchi_ni_3',
                sentence: '聞{き}くか聞{き}かないかのうちに、答{こた}えが（　）。',
                options: ['返{かえ}ってきた', '返{かえ}ってくる', '返{かえ}っている', '返{かえ}る'],
                correctIndex: 0,
                explanation: 'ほぼ同時に起こる。'
            }
        ]
    },
    'n2_kkonai': {
        id: 'n2_kkonai',
        pattern: 'っこない',
        connection: '動{どう}詞{し}ます形{けい}（去{きょ}ます）+ っこない',
        translation: '絕不可能...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '強い否定の可能性',
                description: '話し手が「絶対にそうならない」と思うときに使う口語表現。',
                examples: [
                    { japanese: 'そんなに簡{かん}単{たん}にできっこない。', chinese: '不可能那麼簡單就做到。' },
                    { japanese: '今{いま}から走{はし}っても間{ま}に合{あ}いっこない。', chinese: '現在跑也絕對趕不上。' },
                    { japanese: '彼{かれ}が謝{あやま}るなんてありっこない。', chinese: '他道歉什麼的絕不可能。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_kkonai_1',
                sentence: 'そんなに簡{かん}単{たん}にでき（　）。',
                options: ['っこない', 'かねない', 'かねる', 'からこそ'],
                correctIndex: 0,
                explanation: '強い否定「〜っこない」。'
            },
            {
                id: 'n2_kkonai_2',
                sentence: '今{いま}から行{い}っても間{ま}に合{あ}い（　）。',
                options: ['っこない', 'からと言{い}って', 'かえって', 'かぎり'],
                correctIndex: 0,
                explanation: '可能性の否定。'
            },
            {
                id: 'n2_kkonai_3',
                sentence: '彼{かれ}が負{ま}けるなんてあり（　）。',
                options: ['っこない', 'かねる', 'かねない', 'からこそ'],
                correctIndex: 0,
                explanation: '口語の強い否定。'
            }
        ]
    },
    'n2_koto_da': {
        id: 'n2_koto_da',
        pattern: 'ことだ',
        connection: '動{どう}詞{し}辞{じ}書{しょ}形{けい} + ことだ\n動{どう}詞{し}ない形{けい} + ことだ',
        translation: '應該...; 最好...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '忠告・助言',
                description: '相手にアドバイスや忠告をするときの表現。',
                examples: [
                    { japanese: '風{かぜ}邪{じゃ}なら無{む}理{り}をしないことだ。', chinese: '感冒的話最好不要勉強。' },
                    { japanese: '失{しっ}敗{ぱい}したくないなら、準{じゅん}備{び}することだ。', chinese: '不想失敗就該好好準備。' },
                    { japanese: '迷{まよ}ったら、先{さき}に先{せん}生{せい}に相{そう}談{だん}することだ。', chinese: '猶豫時就先和老師商量。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_koto_da_1',
                sentence: '体{たい}調{ちょう}が悪{わる}いなら、早{はや}く寝{ね}る（　）。',
                options: ['ことだ', 'ことに', 'ことか', 'ことなく'],
                correctIndex: 0,
                explanation: '助言の表現。'
            },
            {
                id: 'n2_koto_da_2',
                sentence: '忘{わす}れ物{もの}しないように、前{まえ}日{ひ}に準{じゅん}備{び}する（　）。',
                options: ['ことだ', 'ことに', 'ことか', 'ことなく'],
                correctIndex: 0,
                explanation: '「〜することだ」。'
            },
            {
                id: 'n2_koto_da_3',
                sentence: '試{し}験{けん}に受{う}かりたいなら、毎{まい}日{にち}勉{べん}強{きょう}する（　）。',
                options: ['ことだ', 'ことに', 'ことか', 'ことなく'],
                correctIndex: 0,
                explanation: '忠告としての「ことだ」。'
            }
        ]
    },
    'n2_koto_dakara': {
        id: 'n2_koto_dakara',
        pattern: 'ことだから',
        connection: '名{めい}詞{し} + の + ことだから',
        translation: '因為是... (性格/習慣)',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '人物の性格・習慣から推測',
                description: 'ある人の性格やいつもの行動から、結果を推測する。',
                examples: [
                    { japanese: '真{ま}面{じ}目{め}な彼{かれ}のことだから、約{やく}束{そく}は守{まも}るだろう。', chinese: '他那麼認真，肯定會守約。' },
                    { japanese: '心{しん}配{ぱい}性{しょう}の母{はは}のことだから、すぐ電{でん}話{わ}してくるはずだ。', chinese: '媽媽那麼愛操心，應該會馬上打電話。' },
                    { japanese: '子{こ}どものことだから、少{すこ}しくらい騒{さわ}いでも仕{しか}方{た}がない。', chinese: '因為是小孩，稍微吵一點也沒辦法。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_koto_dakara_1',
                sentence: '真{ま}面{じ}目{め}な彼{かれ}の（　）、きっと間{ま}に合{あ}うだろう。',
                options: ['ことだから', 'ことだ', 'ことに', 'ことか'],
                correctIndex: 0,
                explanation: '性格からの推測。'
            },
            {
                id: 'n2_koto_dakara_2',
                sentence: '心{しん}配{ぱい}性{しょう}の母{はは}の（　）、すぐ電{でん}話{わ}してくる。',
                options: ['ことだから', 'ことだ', 'ことに', 'ことなく'],
                correctIndex: 0,
                explanation: '人物の習慣を根拠にする。'
            },
            {
                id: 'n2_koto_dakara_3',
                sentence: '子{こ}どもの（　）、少{すこ}しくらい泣{な}いても気{き}にしない。',
                options: ['ことだから', 'ことか', 'ことに', 'ことだ'],
                correctIndex: 0,
                explanation: '子どもらしさを理由にする。'
            }
        ]
    },
    'n2_koto_ka': {
        id: 'n2_koto_ka',
        pattern: 'ことか',
        connection: '疑{ぎ}問{もん}詞{し} + 普{ふ}通{つう}形{けい} + ことか',
        translation: '多麼...啊!; 不知多少...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '強い感情の強調',
                description: '「どれほど」「何回」などと一緒に使い、強い気持ちを表す。',
                examples: [
                    { japanese: 'どれほど心{しん}配{ぱい}したことか。', chinese: '不知有多麼擔心。' },
                    { japanese: '何{なん}回{かい}言{い}ったことか。', chinese: '不知道說過多少次。' },
                    { japanese: 'どんなに苦{くる}しかったことか。', chinese: '不知有多麼難受。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_koto_ka_1',
                sentence: 'どれほど心{しん}配{ぱい}した（　）。',
                options: ['ことか', 'ことに', 'ことだ', 'ことなく'],
                correctIndex: 0,
                explanation: '強い感情の表現。'
            },
            {
                id: 'n2_koto_ka_2',
                sentence: '何{なん}度{ど}説{せつ}明{めい}した（　）。',
                options: ['ことか', 'ことに', 'ことだ', 'ことなく'],
                correctIndex: 0,
                explanation: '回数の強調。'
            },
            {
                id: 'n2_koto_ka_3',
                sentence: 'どんなに嬉{うれ}しかった（　）。',
                options: ['ことか', 'ことに', 'ことだ', 'ことなく'],
                correctIndex: 0,
                explanation: '感情を強く言う。'
            }
        ]
    },
    'n2_koto_naku': {
        id: 'n2_koto_naku',
        pattern: 'ことなく',
        connection: '動{どう}詞{し}辞{じ}書{しょ}形{けい} + ことなく',
        translation: '不...而...; 未曾...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '〜せずに',
                description: 'ある動作をしないまま次の動作をする、または一度も〜ないことを表す。',
                examples: [
                    { japanese: '彼{かれ}は休{やす}むことなく働{はたら}き続{つづ}けた。', chinese: '他不休息地一直工作。' },
                    { japanese: '一{いち}度{ど}も諦{あき}らめることなく挑{ちょう}戦{せん}した。', chinese: '一次也沒有放棄地挑戰。' },
                    { japanese: '雨{あめ}にも負{ま}けることなく走{はし}り続{つづ}けた。', chinese: '不輸給雨一直跑下去。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_koto_naku_1',
                sentence: '彼{かれ}は休{やす}む（　）働{はたら}いた。',
                options: ['ことなく', 'ことか', 'ことに', 'ことだ'],
                correctIndex: 0,
                explanation: '「〜せずに」の意味。'
            },
            {
                id: 'n2_koto_naku_2',
                sentence: '一{いち}度{ど}も迷{まよ}う（　）決{き}めた。',
                options: ['ことなく', 'ことに', 'ことだ', 'ことか'],
                correctIndex: 0,
                explanation: '一度も〜ない。'
            },
            {
                id: 'n2_koto_naku_3',
                sentence: '泣{な}く（　）頑{がん}張{ば}った。',
                options: ['ことなく', 'ことに', 'ことか', 'ことだ'],
                correctIndex: 0,
                explanation: '動作をしないまま。'
            }
        ]
    },
    'n2_koto_ni': {
        id: 'n2_koto_ni',
        pattern: 'ことに',
        connection: '普{ふ}通{つう}形{けい} + ことに\nい形{けい}容{よう}詞{し} + ことに\nな形{けい}容{よう}詞{し} + な + ことに',
        translation: '令人...的是...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '感情の表現',
                description: '話し手の気持ちや評価を述べる。よく「残念なことに」などで使う。',
                examples: [
                    { japanese: '残{ざん}念{ねん}なことに、試{し}験{けん}に落{お}ちた。', chinese: '很遺憾的是，考試沒過。' },
                    { japanese: '驚{おどろ}いたことに、彼{かれ}は来{こ}なかった。', chinese: '令人驚訝的是，他沒來。' },
                    { japanese: '幸{しあわ}せなことに、家{か}族{ぞく}は元{げん}気{き}だ。', chinese: '幸運的是，家人都很健康。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_koto_ni_1',
                sentence: '残{ざん}念{ねん}な（　）、雨{あめ}で中{ちゅう}止{し}になった。',
                options: ['ことに', 'ことだ', 'ことか', 'ことなく'],
                correctIndex: 0,
                explanation: '感情の表現「〜ことに」。'
            },
            {
                id: 'n2_koto_ni_2',
                sentence: '驚{おどろ}いた（　）、彼{かれ}が優{ゆう}勝{しょう}した。',
                options: ['ことに', 'ことだ', 'ことか', 'ことなく'],
                correctIndex: 0,
                explanation: '評価や感想を述べる。'
            },
            {
                id: 'n2_koto_ni_3',
                sentence: '幸{しあわ}せな（　）、皆{みな}が助{たす}けてくれた。',
                options: ['ことに', 'ことだ', 'ことか', 'ことなく'],
                correctIndex: 0,
                explanation: '気持ちを表す。'
            }
        ]
    },
    'n2_koto_niwa_naranai': {
        id: 'n2_koto_niwa_naranai',
        pattern: 'ことにはならない',
        connection: '動{どう}詞{し}辞{じ}書{しょ}形{けい} + ことにはならない',
        translation: '不見得就是...; 並不意味著...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '前件だけでは結論にならない',
                description: 'ある条件があっても、必ずしも後件が成立しないことを表す。',
                examples: [
                    { japanese: '急{いそ}いでも早{はや}く着{つ}くことにはならない。', chinese: '就算趕也不一定會早到。' },
                    { japanese: '好{す}きだから上{じょう}手{ず}になることにはならない。', chinese: '喜歡並不代表會變厲害。' },
                    { japanese: '謝{あやま}れば許{ゆる}されることにはならない。', chinese: '道歉也不一定會被原諒。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_koto_niwa_naranai_1',
                sentence: '急{いそ}いでも早{はや}く着{つ}く（　）。',
                options: ['ことにはならない', 'ことだ', 'ことか', 'ことなく'],
                correctIndex: 0,
                explanation: '必ずしも結果に結びつかない。'
            },
            {
                id: 'n2_koto_niwa_naranai_2',
                sentence: '好{す}きだからといって上{じょう}手{ず}になる（　）。',
                options: ['ことにはならない', 'ことだ', 'ことか', 'ことなく'],
                correctIndex: 0,
                explanation: '前件だけで結論にならない。'
            },
            {
                id: 'n2_koto_niwa_naranai_3',
                sentence: '謝{あやま}っても許{ゆる}される（　）。',
                options: ['ことにはならない', 'ことに', 'ことか', 'ことだ'],
                correctIndex: 0,
                explanation: '許されるとは限らない。'
            }
        ]
    },
    'n2_kuse_shite': {
        id: 'n2_kuse_shite',
        pattern: 'くせして',
        connection: '普{ふ}通{つう}形{けい} + くせして\n名{めい}詞{し} + の + くせして\nな形{けい}容{よう}詞{し} + な + くせして\nい形{けい}容{よう}詞{し} + くせして',
        translation: '明明...卻... (責備/蔑視)',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '非難・不満を表す',
                description: '相手を責める気持ちを込めて「〜のに」と同様の意味で使う。',
                examples: [
                    { japanese: '知{し}っているくせして、教{おし}えてくれない。', chinese: '明明知道卻不告訴我。' },
                    { japanese: '大{おと}人{な}のくせして、子{こ}どもみたいだ。', chinese: '明明是大人卻像小孩。' },
                    { japanese: '元{げん}気{き}なくせして、具{ぐ}合{あい}が悪{わる}いと言{い}った。', chinese: '明明很有精神卻說身體不舒服。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_kuse_shite_1',
                sentence: '知{し}っている（　）、黙{だま}っていた。',
                options: ['くせして', 'ことだ', 'ことに', 'ことなく'],
                correctIndex: 0,
                explanation: '責める気持ち。'
            },
            {
                id: 'n2_kuse_shite_2',
                sentence: '大{おと}人{な}の（　）、子{こ}どもみたいに泣{な}いた。',
                options: ['くせして', 'ことに', 'ことだ', 'ことか'],
                correctIndex: 0,
                explanation: '名詞+の+くせして。'
            },
            {
                id: 'n2_kuse_shite_3',
                sentence: '元{げん}気{き}な（　）、早{はや}く帰{かえ}った。',
                options: ['くせして', 'ことだ', 'ことに', 'ことなく'],
                correctIndex: 0,
                explanation: 'な形容詞+なくせして。'
            }
        ]
    },
    'n2_madashimo_1': {
        id: 'n2_madashimo_1',
        pattern: 'まだしも',
        connection: '名{めい}詞{し}/普{ふ}通{つう}形{けい} + (なら)まだしも',
        translation: '還湊合; 還算好',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '比較してまし',
                description: '「Aならまだしも、Bは〜」の形で、Aは許せるがBはだめという意味。',
                examples: [
                    { japanese: '子{こ}どもならまだしも、大{おと}人{な}がそんなことをするのは良{よ}くない。', chinese: '小孩還好，大人做那樣的事就不行。' },
                    { japanese: '遅{おそ}れるのはまだしも、連{れん}絡{らく}しないのは困{こま}る。', chinese: '遲到還好，但不聯絡就很困擾。' },
                    { japanese: '安{やす}いならまだしも、あの値{ね}段{だん}では買{か}えない。', chinese: '便宜的話還好，那種價格就買不起。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_madashimo_1_1',
                sentence: '子{こ}どもなら（　）、大{おと}人{な}がやるのはよくない。',
                options: ['まだしも', 'ことだ', 'ことに', 'ことか'],
                correctIndex: 0,
                explanation: '比較の表現。'
            },
            {
                id: 'n2_madashimo_1_2',
                sentence: '遅{おそ}れるのは（　）、連{れん}絡{らく}しないのは困{こま}る。',
                options: ['まだしも', 'ことなく', 'ことだ', 'ことか'],
                correctIndex: 0,
                explanation: 'Aは許せるがBはだめ。'
            },
            {
                id: 'n2_madashimo_1_3',
                sentence: '安{やす}いなら（　）、高{たか}すぎて買{か}えない。',
                options: ['まだしも', 'ことに', 'ことだ', 'ことか'],
                correctIndex: 0,
                explanation: '「Aならまだしも」。'
            }
        ]
    },
    'n2_mai': {
        id: 'n2_mai',
        pattern: 'まい',
        connection: '動{どう}詞{し}辞{じ}書{しょ}形{けい} + まい\nする → するまい/すまい',
        translation: '絕不...; 大概不...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '意志・推量の否定',
                description: '話し手の強い否定の意志、または「おそらく〜ない」という推量を表す。',
                examples: [
                    { japanese: 'もう二{に}度{ど}と同{おな}じ失{しっ}敗{ぱい}はするまい。', chinese: '我絕不會再犯同樣的錯。' },
                    { japanese: '彼{かれ}は来{こ}まい。', chinese: '他大概不會來。' },
                    { japanese: '負{ま}けるまいと必{ひっ}死{し}に頑{がん}張{ば}った。', chinese: '為了不輸而拼命努力。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_mai_1',
                sentence: '二{に}度{ど}と遅{ち}刻{こく}する（　）。',
                options: ['まい', 'まだしも', 'ことだ', 'ことか'],
                correctIndex: 0,
                explanation: '強い否定の意志。'
            },
            {
                id: 'n2_mai_2',
                sentence: '彼{かれ}はそんなことを言{い}う（　）。',
                options: ['まい', 'ことなく', 'ことに', 'ことだ'],
                correctIndex: 0,
                explanation: '否定の推量。'
            },
            {
                id: 'n2_mai_3',
                sentence: '失{しっ}敗{ぱい}する（　）と準{じゅん}備{び}した。',
                options: ['まい', 'まだしも', 'ことだ', 'ことか'],
                correctIndex: 0,
                explanation: '「まいと」= しないように。'
            }
        ]
    },
    'n2_mama_ni': {
        id: 'n2_mama_ni',
        pattern: 'ままに',
        connection: '名{めい}詞{し} + の + ままに\n動{どう}詞{し}辞{じ}書{しょ}形{けい} + ままに\n動{どう}詞{し}ない形{けい} + ままに',
        translation: '隨...; 任憑...; 照...樣',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '思いどおりに',
                description: '意志や状況に任せて行うことを表す。',
                examples: [
                    { japanese: '気{き}の向{む}くままに旅{たび}をしたい。', chinese: '想隨心所欲旅行。' },
                    { japanese: '思{おも}うままに書{か}いてください。', chinese: '請按照你想的寫。' },
                    { japanese: '自{し}然{ぜん}のままに育{そだ}てる。', chinese: '順其自然地培育。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_mama_ni_1',
                sentence: '心{こころ}のおもむく（　）行{こう}動{どう}した。',
                options: ['ままに', 'まい', 'まだしも', 'ことだ'],
                correctIndex: 0,
                explanation: '任せる表現。'
            },
            {
                id: 'n2_mama_ni_2',
                sentence: '好{す}きな（　）食{た}べていい。',
                options: ['ままに', 'まい', 'ことに', 'ことなく'],
                correctIndex: 0,
                explanation: '自由にという意味。'
            },
            {
                id: 'n2_mama_ni_3',
                sentence: '地{ち}図{ず}の（　）進{すす}んでください。',
                options: ['ままに', 'まい', 'まだしも', 'ことか'],
                correctIndex: 0,
                explanation: '「〜のままに」= 照著。'
            }
        ]
    },
    'n2_mattaku_nai': {
        id: 'n2_mattaku_nai',
        pattern: '全{まった}く～ない',
        connection: '全{まった}く + 動{どう}詞{し}ない形{けい}\n全{まった}く + い形{けい}容{よう}詞{し}くない\n全{まった}く + 形{けい}容{よう}動{どう}詞{し}ではない',
        translation: '完全不...; 絲毫不...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '強い否定',
                description: '否定を強調して「少しも〜ない」と言う。',
                examples: [
                    { japanese: 'その話{はなし}は全{まった}く信{しん}じられない。', chinese: '那件事完全無法相信。' },
                    { japanese: '全{まった}く興{きょう}味{み}がない。', chinese: '完全沒有興趣。' },
                    { japanese: '全{まった}く覚{おぼ}えていない。', chinese: '一點也不記得。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_mattaku_nai_1',
                sentence: 'その噂{うわさ}は全{まった}く信{しん}じ（　）。',
                options: ['られない', 'られる', 'られた', 'られて'],
                correctIndex: 0,
                explanation: '全く〜ない。'
            },
            {
                id: 'n2_mattaku_nai_2',
                sentence: '全{まった}く興{きょう}味{み}が（　）。',
                options: ['ない', 'ある', 'あった', 'あって'],
                correctIndex: 0,
                explanation: '否定の強調。'
            },
            {
                id: 'n2_mattaku_nai_3',
                sentence: '全{まった}く覚{おぼ}えて（　）。',
                options: ['いない', 'いる', 'いた', 'いて'],
                correctIndex: 0,
                explanation: '「覚えていない」。'
            }
        ]
    },
    'n2_mattaku_nai_1': {
        id: 'n2_mattaku_nai_1',
        pattern: '全{まった}く～ない',
        connection: '全{まった}く + 動{どう}詞{し}ない形{けい}\n全{まった}く + い形{けい}容{よう}詞{し}くない\n全{まった}く + 形{けい}容{よう}動{どう}詞{し}ではない',
        translation: '一點也不...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '否定の強調表現',
                description: '「全く〜ない」は否定を強く言う表現。',
                examples: [
                    { japanese: '全{まった}く分{わ}からない。', chinese: '完全不懂。' },
                    { japanese: '全{まった}く疲{つか}れていない。', chinese: '一點也不累。' },
                    { japanese: '彼{かれ}の言{い}うことは全{まった}く信{しん}用{よう}できない。', chinese: '他說的話完全不可信。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_mattaku_nai_1_1',
                sentence: '全{まった}く分{わ}から（　）。',
                options: ['ない', 'ある', 'あった', 'あって'],
                correctIndex: 0,
                explanation: '否定の強調。'
            },
            {
                id: 'n2_mattaku_nai_1_2',
                sentence: '全{まった}く疲{つか}れて（　）。',
                options: ['いない', 'いる', 'いた', 'いて'],
                correctIndex: 0,
                explanation: '「疲れていない」。'
            },
            {
                id: 'n2_mattaku_nai_1_3',
                sentence: '彼{かれ}の言{い}うことは全{まった}く信{しん}用{よう}でき（　）。',
                options: ['ない', 'る', 'た', 'て'],
                correctIndex: 0,
                explanation: '強い否定。'
            }
        ]
    },
    'n2_mo_kamawazu': {
        id: 'n2_mo_kamawazu',
        pattern: 'もかまわず',
        connection: '名{めい}詞{し} + もかまわず',
        translation: '不顧...; 不管...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '気にせずに',
                description: 'ある事柄を気にせず行動することを表す。',
                examples: [
                    { japanese: '雨{あめ}もかまわず走{はし}り続{つづ}けた。', chinese: '不顧下雨一直跑。' },
                    { japanese: '周{まわ}りの目{め}もかまわず、声{こえ}を上{あ}げた。', chinese: '不顧旁人目光大聲說。' },
                    { japanese: '危{き}険{けん}もかまわず海{うみ}に入{はい}った。', chinese: '不顧危險下海了。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_mo_kamawazu_1',
                sentence: '雨{あめ}（　）走{はし}った。',
                options: ['もかまわず', 'ものの', 'ものか', 'ものだ'],
                correctIndex: 0,
                explanation: '不顧雨。'
            },
            {
                id: 'n2_mo_kamawazu_2',
                sentence: '周{まわ}りの目{め}（　）、彼{かれ}は泣{な}いた。',
                options: ['もかまわず', 'ものだから', 'ものなら', 'ものではない'],
                correctIndex: 0,
                explanation: '気にせず行動。'
            },
            {
                id: 'n2_mo_kamawazu_3',
                sentence: '危{き}険{けん}（　）近{ちか}づくのはやめた方{ほう}がいい。',
                options: ['もかまわず', 'ものだ', 'ものか', 'ものの'],
                correctIndex: 0,
                explanation: '不顧危險。'
            }
        ]
    },
    'n2_mo_touzen_da': {
        id: 'n2_mo_touzen_da',
        pattern: 'も当{とう}然{ぜん}だ',
        connection: '普{ふ}通{つう}形{けい} + のも当{とう}然{ぜん}だ\n名{めい}詞{し} + である + のも当{とう}然{ぜん}だ',
        translation: '...也是理所當然的',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '当然の結果',
                description: 'ある理由から考えて、それは当然だと評価する。',
                examples: [
                    { japanese: 'あれだけ練{れん}習{しゅう}したのだから、優{ゆう}勝{しょう}するのも当{とう}然{ぜん}だ。', chinese: '練習那麼多，得冠軍也是理所當然。' },
                    { japanese: '夜{よる}更{ふ}かしをしたら眠{ねむ}いのも当{とう}然{ぜん}だ。', chinese: '熬夜後很睏也是理所當然。' },
                    { japanese: '彼{かれ}が怒{おこ}るのも当{とう}然{ぜん}だ。', chinese: '他生氣也是理所當然。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_mo_touzen_da_1',
                sentence: 'あれだけ練{れん}習{しゅう}したのだから、勝{か}つ（　）。',
                options: ['のも当{とう}然{ぜん}だ', 'ものだ', 'ものか', 'ものの'],
                correctIndex: 0,
                explanation: '当然の結果。'
            },
            {
                id: 'n2_mo_touzen_da_2',
                sentence: '夜{よる}更{ふ}かしをすれば眠{ねむ}い（　）。',
                options: ['のも当{とう}然{ぜん}だ', 'ものだから', 'ものなら', 'ものではない'],
                correctIndex: 0,
                explanation: '理由から当然だと判断。'
            },
            {
                id: 'n2_mo_touzen_da_3',
                sentence: '彼{かれ}が怒{おこ}る（　）。',
                options: ['のも当{とう}然{ぜん}だ', 'ものだ', 'ものか', 'ものの'],
                correctIndex: 0,
                explanation: '「〜のも当然だ」。'
            }
        ]
    },
    'n2_mo_touzen_da_1': {
        id: 'n2_mo_touzen_da_1',
        pattern: 'も当{とう}然{ぜん}だ',
        connection: '普{ふ}通{つう}形{けい} + のも当{とう}然{ぜん}だ\n名{めい}詞{し} + である + のも当{とう}然{ぜん}だ',
        translation: '...也是理所當然的',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '自然な結果の評価',
                description: '理由や状況から見て当然だと思うことを表す。',
                examples: [
                    { japanese: '準{じゅん}備{び}をしなかったのだから失{しっ}敗{ぱい}するのも当{とう}然{ぜん}だ。', chinese: '沒準備就失敗也是理所當然。' },
                    { japanese: '頑{がん}張{ば}ったのだから褒{ほ}められるのも当{とう}然{ぜん}だ。', chinese: '努力了被稱讚也是理所當然。' },
                    { japanese: '彼{かれ}が不{ふ}安{あん}になるのも当{とう}然{ぜん}だ。', chinese: '他感到不安也很正常。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_mo_touzen_da_1_1',
                sentence: '準{じゅん}備{び}しなかったのだから、失{しっ}敗{ぱい}する（　）。',
                options: ['のも当{とう}然{ぜん}だ', 'ものだ', 'ものか', 'ものの'],
                correctIndex: 0,
                explanation: '当然の結果。'
            },
            {
                id: 'n2_mo_touzen_da_1_2',
                sentence: '彼{かれ}が不{ふ}安{あん}になる（　）。',
                options: ['のも当{とう}然{ぜん}だ', 'ものだから', 'ものなら', 'ものではない'],
                correctIndex: 0,
                explanation: '理由から自然な結果。'
            },
            {
                id: 'n2_mo_touzen_da_1_3',
                sentence: '頑{がん}張{ば}ったのだから褒{ほ}められる（　）。',
                options: ['のも当{とう}然{ぜん}だ', 'ものだ', 'ものか', 'ものの'],
                correctIndex: 0,
                explanation: '当然の評価。'
            }
        ]
    },
    'n2_mono_mon': {
        id: 'n2_mono_mon',
        pattern: 'もの / もん',
        connection: '普{ふ}通{つう}形{けい} + もの / もん',
        translation: '因為...嘛 (辯解/撒嬌)',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '理由・言い訳',
                description: '口語で理由や言い訳を述べる。子どもっぽい響きの「もん」もある。',
                examples: [
                    { japanese: '行{い}きたくないよ。だって疲{つか}れたんだもん。', chinese: '我不想去嘛，因為我累了嘛。' },
                    { japanese: '遅{おそ}れたのは電{でん}車{しゃ}が遅{おく}れたもの。', chinese: '遲到是因為電車誤點嘛。' },
                    { japanese: 'だって分{わ}からないんだもん。', chinese: '可是我不懂嘛。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_mono_mon_1',
                sentence: '行{い}きたくない。疲{つか}れたんだ（　）。',
                options: ['もん', 'ものの', 'ものだ', 'ものか'],
                correctIndex: 0,
                explanation: '口語の言い訳。'
            },
            {
                id: 'n2_mono_mon_2',
                sentence: '遅{おそ}れたのは道{みち}が混{こ}んでいた（　）。',
                options: ['もの', 'ものなら', 'ものではない', 'ものの'],
                correctIndex: 0,
                explanation: '理由の提示。'
            },
            {
                id: 'n2_mono_mon_3',
                sentence: 'だって難{むずか}しいんだ（　）。',
                options: ['もん', 'ものか', 'ものだ', 'ものの'],
                correctIndex: 0,
                explanation: '甘えた言い方。'
            }
        ]
    },
    'n2_mono_da': {
        id: 'n2_mono_da',
        pattern: 'ものだ',
        connection: '普{ふ}通{つう}形{けい} + ものだ',
        translation: '應該...; 本來就...; 真的很...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '一般的なこと・感慨',
                description: '一般論や常識を述べたり、感慨を表したりする。',
                examples: [
                    { japanese: '人{ひと}は失{しっ}敗{ぱい}するものだ。', chinese: '人本來就會失敗。' },
                    { japanese: '子{こ}どもは遊{あそ}ぶものだ。', chinese: '小孩本來就會玩。' },
                    { japanese: '時{とき}がたつのは早{はや}いものだ。', chinese: '時間過得真快啊。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_mono_da_1',
                sentence: '人{ひと}は失{しっ}敗{ぱい}する（　）。',
                options: ['ものだ', 'ものか', 'ものの', 'ものなら'],
                correctIndex: 0,
                explanation: '一般論の表現。'
            },
            {
                id: 'n2_mono_da_2',
                sentence: '子{こ}どもは遊{あそ}ぶ（　）。',
                options: ['ものだ', 'ものではない', 'ものか', 'ものの'],
                correctIndex: 0,
                explanation: '常識の表現。'
            },
            {
                id: 'n2_mono_da_3',
                sentence: '時{とき}がたつのは早{はや}い（　）。',
                options: ['ものだ', 'ものか', 'ものの', 'ものなら'],
                correctIndex: 0,
                explanation: '感慨を表す。'
            }
        ]
    },
    'n2_mono_dakara': {
        id: 'n2_mono_dakara',
        pattern: 'ものだから',
        connection: '普{ふ}通{つう}形{けい} + ものだから',
        translation: '正因為...; 因為... (辯解)',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '理由・言い訳',
                description: '自分の行動の理由を述べ、言い訳のニュアンスを含む。',
                examples: [
                    { japanese: '道{みち}が混{こ}んでいたものだから、遅{おそ}れました。', chinese: '因為路很塞，所以遲到了。' },
                    { japanese: '忙{いそ}しかったものだから、連{れん}絡{らく}できなかった。', chinese: '因為太忙，所以沒能聯絡。' },
                    { japanese: '初{はじ}めてだったものだから、緊{きん}張{ちょう}した。', chinese: '因為是第一次，所以很緊張。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_mono_dakara_1',
                sentence: '道{みち}が混{こ}んでいた（　）、遅{おそ}れました。',
                options: ['ものだから', 'ものだ', 'ものか', 'ものの'],
                correctIndex: 0,
                explanation: '理由の説明。'
            },
            {
                id: 'n2_mono_dakara_2',
                sentence: '忙{いそ}しかった（　）、連{れん}絡{らく}できなかった。',
                options: ['ものだから', 'ものではない', 'ものなら', 'ものか'],
                correctIndex: 0,
                explanation: '言い訳の表現。'
            },
            {
                id: 'n2_mono_dakara_3',
                sentence: '初{はじ}めてだった（　）、緊{きん}張{ちょう}した。',
                options: ['ものだから', 'ものだ', 'ものの', 'ものか'],
                correctIndex: 0,
                explanation: '原因を説明する。'
            }
        ]
    },
    'n2_mono_dewa_nai': {
        id: 'n2_mono_dewa_nai',
        pattern: 'ものではない',
        connection: '動{どう}詞{し}辞{じ}書{しょ}形{けい} + ものではない',
        translation: '不應該...; 不能...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '一般的な禁止',
                description: '道徳や常識として「〜してはいけない」と言う。',
                examples: [
                    { japanese: '人{ひと}を傷{きず}つけることを言{い}うものではない。', chinese: '不該說傷人的話。' },
                    { japanese: 'うそをつくものではない。', chinese: '不應該說謊。' },
                    { japanese: '他{ほか}人{ひと}の物{もの}を勝{かっ}手{て}に使{つか}うものではない。', chinese: '不應該擅自使用別人的東西。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_mono_dewa_nai_1',
                sentence: 'うそをつく（　）。',
                options: ['ものではない', 'ものだ', 'ものか', 'ものの'],
                correctIndex: 0,
                explanation: '一般的な禁止。'
            },
            {
                id: 'n2_mono_dewa_nai_2',
                sentence: '人{ひと}を傷{きず}つけることを言{い}う（　）。',
                options: ['ものではない', 'ものだから', 'ものなら', 'ものか'],
                correctIndex: 0,
                explanation: '常識としての禁止。'
            },
            {
                id: 'n2_mono_dewa_nai_3',
                sentence: '他{ほか}人{ひと}の物{もの}を勝{かっ}手{て}に使{つか}う（　）。',
                options: ['ものではない', 'ものだ', 'ものの', 'ものか'],
                correctIndex: 0,
                explanation: 'してはいけないこと。'
            }
        ]
    },
    'n2_mono_ga_aru': {
        id: 'n2_mono_ga_aru',
        pattern: 'ものがある',
        connection: '名{めい}詞{し} + に + ものがある\n動{どう}詞{し}普{ふ}通{つう}形{けい} + ものがある',
        translation: '確實有...之處; 令人感到...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '特別な印象',
                description: '心に残る特徴や雰囲気があるときに使う。',
                examples: [
                    { japanese: '彼{かれ}の演{えん}技{ぎ}には迫{はく}力{りょく}のあるものがある。', chinese: '他的演技有種震撼力。' },
                    { japanese: 'この写{しゃ}真{しん}には懐{なつ}かしいものがある。', chinese: '這張照片有種懷念的感覺。' },
                    { japanese: 'その話{はなし}には説{せつ}得{とく}力{りょく}のあるものがある。', chinese: '那個說法有說服力。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_mono_ga_aru_1',
                sentence: '彼{かれ}の演{えん}技{ぎ}には迫{はく}力{りょく}のある（　）。',
                options: ['ものがある', 'ものだ', 'ものか', 'ものの'],
                correctIndex: 0,
                explanation: '印象が残る。'
            },
            {
                id: 'n2_mono_ga_aru_2',
                sentence: 'この写{しゃ}真{しん}には懐{なつ}かしい（　）。',
                options: ['ものがある', 'ものではない', 'ものなら', 'ものか'],
                correctIndex: 0,
                explanation: '感じがある。'
            },
            {
                id: 'n2_mono_ga_aru_3',
                sentence: 'その意{い}見{けん}には説{せつ}得{とく}力{りょく}のある（　）。',
                options: ['ものがある', 'ものだ', 'ものか', 'ものの'],
                correctIndex: 0,
                explanation: '評価の表現。'
            }
        ]
    },
    'n2_mono_ka': {
        id: 'n2_mono_ka',
        pattern: 'ものか',
        connection: '普{ふ}通{つう}形{けい} + ものか',
        translation: '絕不...; 難道會...嗎?',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '強い否定',
                description: '強い否定の意志や反語を表す。',
                examples: [
                    { japanese: 'そんなこと、するものか。', chinese: '那種事我才不會做。' },
                    { japanese: '負{ま}けるものか。', chinese: '我才不會輸。' },
                    { japanese: '今{いま}さら謝{あやま}るものか。', chinese: '現在才來道歉，誰理你。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_mono_ka_1',
                sentence: 'そんなこと、する（　）。',
                options: ['ものか', 'ものの', 'ものだ', 'ものなら'],
                correctIndex: 0,
                explanation: '強い否定。'
            },
            {
                id: 'n2_mono_ka_2',
                sentence: '負{ま}ける（　）。',
                options: ['ものか', 'ものではない', 'ものだから', 'ものだ'],
                correctIndex: 0,
                explanation: '「負けるものか」。'
            },
            {
                id: 'n2_mono_ka_3',
                sentence: '今{いま}さら諦{あき}らめる（　）。',
                options: ['ものか', 'ものの', 'ものなら', 'ものだ'],
                correctIndex: 0,
                explanation: '反語の否定。'
            }
        ]
    },
    'n2_mono_ka_mon_ka': {
        id: 'n2_mono_ka_mon_ka',
        pattern: 'ものか / もんか',
        connection: '普{ふ}通{つう}形{けい} + ものか / もんか',
        translation: '絕不會...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '口語の強い否定',
                description: '「ものか」の口語形「もんか」。強い否定を示す。',
                examples: [
                    { japanese: 'そんな話{はなし}、信{しん}じるもんか。', chinese: '那種話我才不信。' },
                    { japanese: '絶{ぜっ}対{たい}に負{ま}けるもんか。', chinese: '我絕對不會輸。' },
                    { japanese: '今{いま}さら戻{もど}るもんか。', chinese: '現在才回去我才不要。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_mono_ka_mon_ka_1',
                sentence: 'そんな話{はなし}、信{しん}じる（　）。',
                options: ['もんか', 'ものだ', 'ものの', 'ものなら'],
                correctIndex: 0,
                explanation: '口語の強い否定。'
            },
            {
                id: 'n2_mono_ka_mon_ka_2',
                sentence: '絶{ぜっ}対{たい}に負{ま}ける（　）。',
                options: ['もんか', 'ものではない', 'ものだから', 'ものだ'],
                correctIndex: 0,
                explanation: '「負けるもんか」。'
            },
            {
                id: 'n2_mono_ka_mon_ka_3',
                sentence: '今{いま}さら戻{もど}る（　）。',
                options: ['もんか', 'ものの', 'ものなら', 'ものだ'],
                correctIndex: 0,
                explanation: '強い否定。'
            }
        ]
    },
    'n2_mono_nara': {
        id: 'n2_mono_nara',
        pattern: 'ものなら',
        connection: '動{どう}詞{し}可{か}能{のう}形{けい} + ものなら',
        translation: '要是能...的話 (假設難以實現)',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '実現が難しい仮定',
                description: '実際には難しいことを仮定して述べる。',
                examples: [
                    { japanese: '行{い}けるものなら行{い}きたい。', chinese: '要是能去的話我也想去。' },
                    { japanese: 'やり直{なお}せるものならやり直{なお}したい。', chinese: '要是能重來就好了。' },
                    { japanese: '許{ゆる}されるものなら謝{あやま}りたい。', chinese: '若能被原諒就想道歉。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_mono_nara_1',
                sentence: '行{い}ける（　）、行{い}きたい。',
                options: ['ものなら', 'ものだ', 'ものの', 'ものか'],
                correctIndex: 0,
                explanation: '難しい仮定。'
            },
            {
                id: 'n2_mono_nara_2',
                sentence: 'やり直{なお}せる（　）、やり直{なお}したい。',
                options: ['ものなら', 'ものではない', 'ものだから', 'ものだ'],
                correctIndex: 0,
                explanation: '実現が難しいこと。'
            },
            {
                id: 'n2_mono_nara_3',
                sentence: '許{ゆる}される（　）、謝{あやま}りたい。',
                options: ['ものなら', 'ものの', 'ものか', 'ものだ'],
                correctIndex: 0,
                explanation: '仮定の表現。'
            }
        ]
    },
    'n2_monono': {
        id: 'n2_monono',
        pattern: 'ものの',
        connection: '普{ふ}通{つう}形{けい} + ものの\n名{めい}詞{し} + である + ものの\nな形{けい}容{よう}詞{し} + な + ものの\nい形{けい}容{よう}詞{し} + ものの',
        translation: '雖然...但是...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '逆接の書き言葉',
                description: '「〜が」「〜けれども」と同じ意味で、書面でよく使う。',
                examples: [
                    { japanese: '買{か}ったものの、ほとんど使{つか}っていない。', chinese: '雖然買了，但幾乎沒用。' },
                    { japanese: '便{べん}利{り}なものの、値{ね}段{だん}が高{たか}い。', chinese: '雖然方便，但價格很高。' },
                    { japanese: '忙{いそ}しいものの、手{て}伝{つだ}うことはできる。', chinese: '雖然忙，但還是可以幫忙。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_monono_1',
                sentence: '買{か}った（　）、ほとんど使{つか}っていない。',
                options: ['ものの', 'ものだ', 'ものなら', 'ものか'],
                correctIndex: 0,
                explanation: '逆接の表現。'
            },
            {
                id: 'n2_monono_2',
                sentence: '便{べん}利{り}な（　）、値{ね}段{だん}が高{たか}い。',
                options: ['ものの', 'ものではない', 'ものだから', 'ものだ'],
                correctIndex: 0,
                explanation: '書き言葉の逆接。'
            },
            {
                id: 'n2_monono_3',
                sentence: '忙{いそ}しい（　）、手{て}伝{つだ}う。',
                options: ['ものの', 'ものか', 'ものだ', 'ものなら'],
                correctIndex: 0,
                explanation: '「〜ものの」。'
            }
        ]
    },
    'n2_motto_mo': {
        id: 'n2_motto_mo',
        pattern: 'もっとも',
        connection: 'もっとも + 文{ぶん}',
        translation: '話雖如此; 不過...也難怪',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '補足・例外を付け加える',
                description: '前の内容に但し書きや補足を加える。',
                examples: [
                    { japanese: '行{い}くつもりだ。もっとも、天{てん}気{き}次{し}第{だい}だが。', chinese: '打算去。不過要看天氣。' },
                    { japanese: 'その計{けい}画{かく}は悪{わる}くない。もっとも、コストが高{たか}すぎる。', chinese: '那個計畫不錯，不過成本太高。' },
                    { japanese: '彼{かれ}の意{い}見{けん}は正{ただ}しい。もっとも、全{ぜん}員{いん}が賛{さん}成{せい}しているわけではない。', chinese: '他的意見是對的。不過並非所有人都贊成。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_motto_mo_1',
                sentence: '行{い}くつもりだ。（　）天{てん}気{き}次{し}第{だい}だ。',
                options: ['もっとも', 'ものの', 'ものだ', 'ものか'],
                correctIndex: 0,
                explanation: '但し書きの表現。'
            },
            {
                id: 'n2_motto_mo_2',
                sentence: 'その提{てい}案{あん}は良{よ}い。（　）費{ひ}用{よう}が高{たか}い。',
                options: ['もっとも', 'ものではない', 'ものだから', 'ものなら'],
                correctIndex: 0,
                explanation: '補足の逆接。'
            },
            {
                id: 'n2_motto_mo_3',
                sentence: '彼{かれ}の考{かんが}えは正{ただ}しい。（　）全{ぜん}員{いん}が賛{さん}成{せい}しているわけではない。',
                options: ['もっとも', 'ものだ', 'ものの', 'ものか'],
                correctIndex: 0,
                explanation: '例外を添える。'
            }
        ]
    },
    'n2_mou_sukoshi_de': {
        id: 'n2_mou_sukoshi_de',
        pattern: 'もう少{すこ}しで',
        connection: 'もう少{すこ}しで + 動{どう}詞{し}た形{けい}',
        translation: '差點就...; 差一點兒',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '危うく',
                description: 'あと少しで起こりそうだったことを表す。',
                examples: [
                    { japanese: 'もう少{すこ}しで電{でん}車{しゃ}に乗{の}り遅{おく}れるところだった。', chinese: '差點就沒搭上電車。' },
                    { japanese: 'もう少{すこ}しで事{じ}故{こ}になるところだった。', chinese: '差點就出事故。' },
                    { japanese: 'もう少{すこ}しで答{こた}えが分{わ}かるところだった。', chinese: '差點就知道答案了。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_mou_sukoshi_de_1',
                sentence: 'もう少{すこ}しで電{でん}車{しゃ}に乗{の}り（　）ところだった。',
                options: ['遅{おく}れる', '遅{おく}れない', '遅{おく}れて', '遅{おく}れた'],
                correctIndex: 0,
                explanation: '「もう少しで〜ところだった」。'
            },
            {
                id: 'n2_mou_sukoshi_de_2',
                sentence: 'もう少{すこ}しで事{じ}故{こ}に（　）ところだった。',
                options: ['なる', 'ならない', 'なって', 'なった'],
                correctIndex: 0,
                explanation: '差点就〜。'
            },
            {
                id: 'n2_mou_sukoshi_de_3',
                sentence: 'もう少{すこ}しで答{こた}えが分{わ}かる（　）。',
                options: ['ところだった', 'ものだ', 'ものか', 'ものの'],
                correctIndex: 0,
                explanation: '固定形「ところだった」。'
            }
        ]
    },
    'n2_mou_sukoshi_de_1': {
        id: 'n2_mou_sukoshi_de_1',
        pattern: 'もう少{すこ}しで',
        connection: 'もう少{すこ}しで + 動{どう}詞{し}た形{けい}',
        translation: '差一點就...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '危うく起こりそうだった',
                description: '実際には起こらなかったが、起こりそうだったことを表す。',
                examples: [
                    { japanese: 'もう少{すこ}しで寝{ね}坊{ぼう}するところだった。', chinese: '差點就睡過頭。' },
                    { japanese: 'もう少{すこ}しで落{お}ちるところだった。', chinese: '差點就跌下去。' },
                    { japanese: 'もう少{すこ}しで試{し}験{けん}に落{お}ちるところだった。', chinese: '差點就考試沒過。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_mou_sukoshi_de_1_1',
                sentence: 'もう少{すこ}しで寝{ね}坊{ぼう}する（　）。',
                options: ['ところだった', 'ものだ', 'ものの', 'ものか'],
                correctIndex: 0,
                explanation: '「ところだった」を使う。'
            },
            {
                id: 'n2_mou_sukoshi_de_1_2',
                sentence: 'もう少{すこ}しで落{お}ちる（　）。',
                options: ['ところだった', 'ものだ', 'ものなら', 'ものか'],
                correctIndex: 0,
                explanation: '危うく〜。'
            },
            {
                id: 'n2_mou_sukoshi_de_1_3',
                sentence: 'もう少{すこ}しで試{し}験{けん}に落{お}ちる（　）。',
                options: ['ところだった', 'ものの', 'ものだ', 'ものか'],
                correctIndex: 0,
                explanation: '差点〜だった。'
            }
        ]
    },
    'n2_nai_dewa_irarenai': {
        id: 'n2_nai_dewa_irarenai',
        pattern: 'ないではいられない',
        connection: '動{どう}詞{し}ない形{けい} + ではいられない',
        translation: '忍不住...; 不能不...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '感情の自然な反応',
                description: 'ある感情や行動が自然に起こり、抑えられないことを表す。',
                examples: [
                    { japanese: 'あの話{はなし}を聞{き}くと笑{わら}わないではいられない。', chinese: '一聽到那個故事就忍不住笑。' },
                    { japanese: '感{かん}動{どう}して涙{なみだ}を流{なが}さないではいられなかった。', chinese: '感動得不由得流淚。' },
                    { japanese: 'この映{えい}画{が}を見ると泣{な}かないではいられない。', chinese: '看這部電影就忍不住哭。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_nai_dewa_irarenai_1',
                sentence: 'あの話{はなし}を聞{き}くと笑{わら}わない（　）。',
                options: ['ではいられない', 'ことにはならない', 'ことだ', 'ことか'],
                correctIndex: 0,
                explanation: '自然に抑えられない。'
            },
            {
                id: 'n2_nai_dewa_irarenai_2',
                sentence: '感{かん}動{どう}して涙{なみだ}を流{なが}さない（　）。',
                options: ['ではいられない', 'なくはない', 'なくて済む', 'ないことにはない'],
                correctIndex: 0,
                explanation: '抑えられない感情。'
            },
            {
                id: 'n2_nai_dewa_irarenai_3',
                sentence: 'この映{えい}画{が}を見ると泣{な}かない（　）。',
                options: ['ではいられない', 'ことにはならない', 'ものではない', 'ものだ'],
                correctIndex: 0,
                explanation: '「〜ないではいられない」。'
            }
        ]
    },
    'n2_nai_koto_niwa_nai': {
        id: 'n2_nai_koto_niwa_nai',
        pattern: 'ないことには～ない',
        connection: '動{どう}詞{し}ない形{けい} + ことには + 動{どう}詞{し}ない形{けい}',
        translation: '如果不...就不...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '前提条件が必要',
                description: 'ある条件がなければ次のことができないという意味。',
                examples: [
                    { japanese: 'お金{かね}がないことには生{せい}活{かつ}できない。', chinese: '沒有錢就無法生活。' },
                    { japanese: '説{せつ}明{めい}を聞{き}かないことには判{はん}断{だん}できない。', chinese: '不聽說明就無法判斷。' },
                    { japanese: '練{れん}習{しゅう}しないことには上{じょう}手{ず}くならない。', chinese: '不練習就不會進步。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_nai_koto_niwa_nai_1',
                sentence: 'お金{かね}がない（　）生{せい}活{かつ}できない。',
                options: ['ことには', 'ではいられない', 'なくはない', 'なくて済む'],
                correctIndex: 0,
                explanation: '条件を示す。'
            },
            {
                id: 'n2_nai_koto_niwa_nai_2',
                sentence: '説{せつ}明{めい}を聞{き}かない（　）判{はん}断{だん}できない。',
                options: ['ことには', 'ものだから', 'ものではない', 'ものだ'],
                correctIndex: 0,
                explanation: '前提が必要。'
            },
            {
                id: 'n2_nai_koto_niwa_nai_3',
                sentence: '練{れん}習{しゅう}しない（　）上{じょう}手{ず}くならない。',
                options: ['ことには', 'ではいられない', 'なくはない', 'なくて済む'],
                correctIndex: 0,
                explanation: '「ないことには〜ない」。'
            }
        ]
    },
    'n2_naka_o_naka_dewa': {
        id: 'n2_naka_o_naka_dewa',
        pattern: '中{なか}を / 中{なか}では',
        connection: '名{めい}詞{し} + の + 中{なか}を\n名{めい}詞{し} + の + 中{なか}で / 中{なか}では',
        translation: '在...之中; 在...情況下',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '状況の中で',
                description: '「〜中を」= 逆境や状態の中を移動・行動する。「〜中では」= 範囲の中で。',
                examples: [
                    { japanese: '雨{あめ}の中{なか}を歩{ある}いて帰{かえ}った。', chinese: '在雨中走回家。' },
                    { japanese: '忙{いそ}しい中{なか}を来{き}てくれてありがとう。', chinese: '在百忙之中還來，謝謝你。' },
                    { japanese: '今{こん}回{かい}の試{し}験{けん}の中{なか}では、これが一{いち}番{ばん}難{むずか}しかった。', chinese: '這次考試中這題最難。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_naka_o_naka_dewa_1',
                sentence: '雨{あめ}の中{なか}（　）歩{ある}いた。',
                options: ['を', 'で', 'に', 'は'],
                correctIndex: 0,
                explanation: '「雨の中を」= 雨の中で移動。'
            },
            {
                id: 'n2_naka_o_naka_dewa_2',
                sentence: '忙{いそ}しい中{なか}（　）来{き}てくれてありがとう。',
                options: ['を', 'で', 'に', 'は'],
                correctIndex: 0,
                explanation: '「忙しい中を」= 大変な状況の中で。'
            },
            {
                id: 'n2_naka_o_naka_dewa_3',
                sentence: '今{こん}回{かい}の試{し}験{けん}の中{なか}（　）、これが一{いち}番{ばん}難{むずか}しい。',
                options: ['では', 'を', 'に', 'が'],
                correctIndex: 0,
                explanation: '範囲の中で比較。'
            }
        ]
    },
    'n2_naku_wa_nai': {
        id: 'n2_naku_wa_nai',
        pattern: 'なくはない',
        connection: '動{どう}詞{し}ない形{けい} + くはない',
        translation: '也不是不...; 也不是沒有',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '部分的な肯定',
                description: '完全否定ではなく「可能性や意向が少しはある」ことを表す。',
                examples: [
                    { japanese: '行{い}かなくはないが、あまり気{き}が進{すす}まない。', chinese: '也不是不去，但不太想去。' },
                    { japanese: '食{た}べられなくはない。', chinese: '也不是不能吃。' },
                    { japanese: '理{り}解{かい}できなくはない。', chinese: '也不是不能理解。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_naku_wa_nai_1',
                sentence: '行{い}かなくはないが、気{き}が進{すす}まない。',
                options: ['なくはない', 'なくて済む', 'ないことにはない', 'ではいられない'],
                correctIndex: 0,
                explanation: '完全否定ではない。'
            },
            {
                id: 'n2_naku_wa_nai_2',
                sentence: '食{た}べられなくは（　）。',
                options: ['ない', 'なく', 'なくて', 'なくは'],
                correctIndex: 0,
                explanation: '「なくはない」。'
            },
            {
                id: 'n2_naku_wa_nai_3',
                sentence: '理{り}解{かい}できなくは（　）。',
                options: ['ない', 'なく', 'なくて', 'なくは'],
                correctIndex: 0,
                explanation: '部分的な肯定。'
            }
        ]
    },
    'n2_naku_wa_nai_naku_mo_nai': {
        id: 'n2_naku_wa_nai_naku_mo_nai',
        pattern: 'なくはない / なくもない',
        connection: '動{どう}詞{し}ない形{けい} + くはない / くもない',
        translation: '也不是沒可能...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '完全否定ではない',
                description: '可能性や意向が少しはあることを表す。',
                examples: [
                    { japanese: '行{い}かなくもないが、あまり行{い}きたくない。', chinese: '也不是完全不去，但不太想去。' },
                    { japanese: 'やれなくもないが、時{じ}間{かん}が足{た}りない。', chinese: '也不是不能做，但時間不夠。' },
                    { japanese: '見{み}なくもないが、他{ほか}に用{よう}事{じ}がある。', chinese: '也不是不看，但有別的事。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_naku_wa_nai_naku_mo_nai_1',
                sentence: '行{い}かなくもないが、気{き}が進{すす}まない。',
                options: ['なくもない', 'なくて済む', 'ないことにはない', 'ではいられない'],
                correctIndex: 0,
                explanation: '完全否定ではない。'
            },
            {
                id: 'n2_naku_wa_nai_naku_mo_nai_2',
                sentence: 'やれなくも（　）が、時{じ}間{かん}がない。',
                options: ['ない', 'なく', 'なくて', 'なくは'],
                correctIndex: 0,
                explanation: '「なくもない」。'
            },
            {
                id: 'n2_naku_wa_nai_naku_mo_nai_3',
                sentence: '見{み}なくも（　）が、他{ほか}の用{よう}事{じ}がある。',
                options: ['ない', 'なく', 'なくて', 'なくは'],
                correctIndex: 0,
                explanation: '可能性が少しある。'
            }
        ]
    },
    'n2_nakute_sumu': {
        id: 'n2_nakute_sumu',
        pattern: 'なくて済{す}む',
        connection: '動{どう}詞{し}ない形{けい} + で済{す}む',
        translation: '不用...也行; 省去了...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: 'しなくてもよい',
                description: 'ある行為をしないで問題が解決することを表す。',
                examples: [
                    { japanese: '薬{くすり}を飲{の}まなくて済{す}んだ。', chinese: '不用吃藥也好了。' },
                    { japanese: '自{じ}分{ぶん}で行{い}かなくて済{す}むように手{て}配{はい}した。', chinese: '安排好讓自己不用親自去。' },
                    { japanese: '説{せつ}明{めい}しなくて済{す}むなら助{たす}かる。', chinese: '如果不用解釋就太好了。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_nakute_sumu_1',
                sentence: '薬{くすり}を飲{の}まなくて（　）。',
                options: ['済{す}んだ', '済{す}む', '済{す}んで', '済{す}まない'],
                correctIndex: 0,
                explanation: '「なくて済む」。'
            },
            {
                id: 'n2_nakute_sumu_2',
                sentence: '説{せつ}明{めい}しなくて（　）なら助{たす}かる。',
                options: ['済{す}む', '済{す}んだ', '済{す}んで', '済{す}まない'],
                correctIndex: 0,
                explanation: '可能なら不要。'
            },
            {
                id: 'n2_nakute_sumu_3',
                sentence: '自{じ}分{ぶん}で行{い}かなくて（　）ようにした。',
                options: ['済{す}む', '済{す}んだ', '済{す}んで', '済{す}まない'],
                correctIndex: 0,
                explanation: '行為を省く。'
            }
        ]
    },
    'n2_nakute_sumu_1': {
        id: 'n2_nakute_sumu_1',
        pattern: 'なくて済{す}む',
        connection: '動{どう}詞{し}ない形{けい} + で済{す}む',
        translation: '不用...就可以解決',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '省略できる',
                description: 'あることをしないで済むことを表す。',
                examples: [
                    { japanese: '支{し}払{はら}いをしなくて済{す}んだ。', chinese: '不用付款就解決了。' },
                    { japanese: '出{で}かけなくて済{す}むように手{て}続{つづ}きをした。', chinese: '辦手續讓自己不用出門。' },
                    { japanese: '並{なら}ばなくて済{す}む方法{ほう}を探{さが}した。', chinese: '找了不用排隊的方法。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_nakute_sumu_1_1',
                sentence: '支{し}払{はら}いをしなくて（　）。',
                options: ['済{す}んだ', '済{す}む', '済{す}んで', '済{す}まない'],
                correctIndex: 0,
                explanation: '過去の結果。'
            },
            {
                id: 'n2_nakute_sumu_1_2',
                sentence: '出{で}かけなくて（　）ようにした。',
                options: ['済{す}む', '済{す}んだ', '済{す}んで', '済{す}まない'],
                correctIndex: 0,
                explanation: '行為を省く。'
            },
            {
                id: 'n2_nakute_sumu_1_3',
                sentence: '並{なら}ばなくて（　）方{ほう}法{ほう}を探{さが}した。',
                options: ['済{す}む', '済{す}んだ', '済{す}んで', '済{す}まない'],
                correctIndex: 0,
                explanation: '不要な行為を省く。'
            }
        ]
    },
    'n2_nani_mo_nai_1': {
        id: 'n2_nani_mo_nai_1',
        pattern: '何{なに}も～ない',
        connection: '何{なに}も + 動{どう}詞{し}ない形{けい}',
        translation: '什麼也不...; 沒什麼好...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '完全否定',
                description: '範囲がゼロであることを強調する。',
                examples: [
                    { japanese: '何{なに}も言{い}わない。', chinese: '什麼也不說。' },
                    { japanese: '何{なに}も食{た}べていない。', chinese: '什麼也沒吃。' },
                    { japanese: '何{なに}も心{しん}配{ぱい}いらない。', chinese: '什麼也不用擔心。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_nani_mo_nai_1_1',
                sentence: '何{なに}も言{い}わ（　）。',
                options: ['ない', 'ある', 'あった', 'あって'],
                correctIndex: 0,
                explanation: '完全否定。'
            },
            {
                id: 'n2_nani_mo_nai_1_2',
                sentence: '何{なに}も食{た}べて（　）。',
                options: ['いない', 'いる', 'いた', 'いて'],
                correctIndex: 0,
                explanation: '「食べていない」。'
            },
            {
                id: 'n2_nani_mo_nai_1_3',
                sentence: '何{なに}も心{しん}配{ぱい}いら（　）。',
                options: ['ない', 'ある', 'あった', 'あって'],
                correctIndex: 0,
                explanation: '「いらない」。'
            }
        ]
    },
    'n2_nani_mo_nai': {
        id: 'n2_nani_mo_nai',
        pattern: '何{なに}も～ない',
        connection: '何{なに}も + 動{どう}詞{し}ない形{けい}',
        translation: '什麼也不...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '範囲ゼロ',
                description: '「一つも〜ない」という意味で、否定を強調する。',
                examples: [
                    { japanese: '何{なに}も分{わ}からない。', chinese: '什麼都不懂。' },
                    { japanese: '何{なに}も聞{き}いていない。', chinese: '什麼都沒聽到。' },
                    { japanese: '何{なに}も持{も}っていない。', chinese: '什麼都沒帶。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_nani_mo_nai_1',
                sentence: '何{なに}も分{わ}から（　）。',
                options: ['ない', 'ある', 'あった', 'あって'],
                correctIndex: 0,
                explanation: '完全否定。'
            },
            {
                id: 'n2_nani_mo_nai_2',
                sentence: '何{なに}も聞{き}いて（　）。',
                options: ['いない', 'いる', 'いた', 'いて'],
                correctIndex: 0,
                explanation: '「聞いていない」。'
            },
            {
                id: 'n2_nani_mo_nai_3',
                sentence: '何{なに}も持{も}って（　）。',
                options: ['いない', 'いる', 'いた', 'いて'],
                correctIndex: 0,
                explanation: '「持っていない」。'
            }
        ]
    },
    'n2_nao': {
        id: 'n2_nao',
        pattern: 'なお',
        connection: 'なお + 文{ぶん}',
        translation: '而且; 還有; 依然',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '補足・追加情報',
                description: '前の内容に補足や追加事項を添えるときに使う。',
                examples: [
                    { japanese: 'なお、会{かい}議{ぎ}は十{じゅう}時{じ}からです。', chinese: '另外，會議從十點開始。' },
                    { japanese: '申{もう}し込{こ}みは締{し}め切{き}りました。なお、次{つぎ}回{かい}は来{らい}月{げつ}です。', chinese: '申請已截止。另外，下次是下個月。' },
                    { japanese: '詳{くわ}しくは後{のち}ほど連{れん}絡{らく}します。なお、急{きゅう}ぎではありません。', chinese: '詳細稍後聯絡。另外，不急。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_nao_1',
                sentence: 'なお、会{かい}議{ぎ}は十{じゅう}時{じ}からです。',
                options: ['なお', 'まだしも', 'ねばならない', 'にあたって'],
                correctIndex: 0,
                explanation: '補足の表現。'
            },
            {
                id: 'n2_nao_2',
                sentence: '申{もう}し込{こ}みは締{し}め切{き}りました。（　）、次{つぎ}回{かい}は来{らい}月{げつ}です。',
                options: ['なお', 'に限らず', 'に限る', 'に限って'],
                correctIndex: 0,
                explanation: '追加情報を述べる。'
            },
            {
                id: 'n2_nao_3',
                sentence: '詳{くわ}しくは後{のち}ほど連{れん}絡{らく}します。（　）、急{きゅう}ぎではありません。',
                options: ['なお', 'にほかならない', 'にあたって', 'ねばならない'],
                correctIndex: 0,
                explanation: '但し書きの「なお」。'
            }
        ]
    },
    'n2_madashimo': {
        id: 'n2_madashimo',
        pattern: 'まだしも',
        connection: '名{めい}詞{し}/普{ふ}通{つう}形{けい} + (なら)まだしも',
        translation: '的話還好; 如果...還說得過去',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: 'Aは許せるがBはだめ',
                description: 'Aなら許容できるが、Bは許容できないという対比を表す。',
                examples: [
                    { japanese: '近{ちか}いならまだしも、遠{とお}すぎて行{い}けない。', chinese: '近的話還好，太遠就去不了。' },
                    { japanese: '少{すこ}しの遅{おく}れはまだしも、無{む}断{だん}欠{けっ}席{せき}は困{こま}る。', chinese: '稍微遲到還好，但無故缺席就麻煩。' },
                    { japanese: '若{わか}いならまだしも、大{おと}人{な}がやるのはよくない。', chinese: '年輕還好，大人做就不行。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_madashimo_1',
                sentence: '近{ちか}いなら（　）、遠{とお}すぎて行{い}けない。',
                options: ['まだしも', 'なお', 'ねばならない', 'にほかならない'],
                correctIndex: 0,
                explanation: 'Aなら許せるがBはだめ。'
            },
            {
                id: 'n2_madashimo_2',
                sentence: '少{すこ}しの遅{おく}れは（　）、無{む}断{だん}欠{けっ}席{せき}は困{こま}る。',
                options: ['まだしも', 'に限らず', 'に限る', 'に限って'],
                correctIndex: 0,
                explanation: '対比の表現。'
            },
            {
                id: 'n2_madashimo_3',
                sentence: '若{わか}いなら（　）、大{おと}人{な}がやるのはよくない。',
                options: ['まだしも', 'なお', 'にあたって', 'にほかならない'],
                correctIndex: 0,
                explanation: '「Aならまだしも」。'
            }
        ]
    },
    'n2_neba_naranai': {
        id: 'n2_neba_naranai',
        pattern: 'ねばならない',
        connection: '動{どう}詞{し}ない形{けい}（ない→ねば） + ならない',
        translation: '必須...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '義務・必要',
                description: '「なければならない」と同じ意味で、やや硬い表現。',
                examples: [
                    { japanese: '約{やく}束{そく}は守{まも}らねばならない。', chinese: '必須遵守約定。' },
                    { japanese: 'やると決{き}めた以上{いじょう}、やり抜{ぬ}かねばならない。', chinese: '既然決定了就必須做完。' },
                    { japanese: '彼{かれ}は責{せき}任{にん}を取{と}らねばならない。', chinese: '他必須負責。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_neba_naranai_1',
                sentence: '約{やく}束{そく}は守{まも}ら（　）。',
                options: ['ねばならない', 'なお', 'にあたって', 'にほかならない'],
                correctIndex: 0,
                explanation: '義務の表現。'
            },
            {
                id: 'n2_neba_naranai_2',
                sentence: '決{き}めた以上{いじょう}、やり抜{ぬ}か（　）。',
                options: ['ねばならない', 'に限る', 'に限らず', 'に限って'],
                correctIndex: 0,
                explanation: '硬い義務表現。'
            },
            {
                id: 'n2_neba_naranai_3',
                sentence: '責{せき}任{にん}を取{と}ら（　）。',
                options: ['ねばならない', 'なお', 'にあたって', 'にほかならない'],
                correctIndex: 0,
                explanation: '「ねばならない」。'
            }
        ]
    },
    'n2_ni_atatte': {
        id: 'n2_ni_atatte',
        pattern: 'にあたって',
        connection: '動{どう}詞{し}辞{じ}書{しょ}形{けい} + にあたって\n名{めい}詞{し} + にあたって',
        translation: '在...之際',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '重要な場面の前',
                description: 'ある出来事に臨む際に、準備や心構えを述べる。',
                examples: [
                    { japanese: '出{しゅっ}発{ぱつ}にあたって、荷{に}物{もつ}を確{かく}認{にん}した。', chinese: '出發之際確認行李。' },
                    { japanese: '試{し}験{けん}にあたって、もう一{いち}度{ど}復{ふく}習{しゅう}した。', chinese: '考試之際再複習一次。' },
                    { japanese: '開{かい}店{てん}にあたって、近{きん}所{じょ}に挨{あい}拶{さつ}した。', chinese: '開店之際向鄰居打招呼。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_atatte_1',
                sentence: '出{しゅっ}発{ぱつ}（　）、荷{に}物{もつ}を確{かく}認{にん}した。',
                options: ['にあたって', 'なお', 'にほかならない', 'に限る'],
                correctIndex: 0,
                explanation: '重要な場面に臨む。'
            },
            {
                id: 'n2_ni_atatte_2',
                sentence: '試{し}験{けん}（　）、復{ふく}習{しゅう}した。',
                options: ['にあたって', 'に限らず', 'に限って', 'に限る'],
                correctIndex: 0,
                explanation: '「〜にあたって」。'
            },
            {
                id: 'n2_ni_atatte_3',
                sentence: '開{かい}店{てん}（　）、挨{あい}拶{さつ}した。',
                options: ['にあたって', 'なお', 'ねばならない', 'にほかならない'],
                correctIndex: 0,
                explanation: '開始の時点。'
            }
        ]
    },
    'n2_ni_hoka_naranai': {
        id: 'n2_ni_hoka_naranai',
        pattern: 'にほかならない',
        connection: '名{めい}詞{し} + にほかならない\n普{ふ}通{つう}形{けい} + にほかならない',
        translation: '不外乎就是...; 無非是...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '強い断定',
                description: '原因や本質が「まさにそれだ」と強調する。',
                examples: [
                    { japanese: '彼{かれ}の成{せい}功{こう}は努{ど}力{りょく}の結{けっ}果{か}にほかならない。', chinese: '他的成功無非是努力的結果。' },
                    { japanese: '事{じ}故{こ}の原{げん}因{いん}は不{ふ}注{ちゅう}意{い}にほかならない。', chinese: '事故原因無非是不注意。' },
                    { japanese: '平{へい}和{わ}を守{まも}る気{き}持{もち}にほかならない。', chinese: '無非就是想守護和平的心。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_hoka_naranai_1',
                sentence: '彼{かれ}の成{せい}功{こう}は努{ど}力{りょく}の結{けっ}果{か}に（　）。',
                options: ['ほかならない', 'あたって', 'なお', 'ねばならない'],
                correctIndex: 0,
                explanation: '強い断定。'
            },
            {
                id: 'n2_ni_hoka_naranai_2',
                sentence: '原{げん}因{いん}は不{ふ}注{ちゅう}意{い}に（　）。',
                options: ['ほかならない', '限{かぎ}る', '限{かぎ}らず', '限{かぎ}って'],
                correctIndex: 0,
                explanation: '「にほかならない」。'
            },
            {
                id: 'n2_ni_hoka_naranai_3',
                sentence: '平{へい}和{わ}を守{まも}る気{き}持{もち}に（　）。',
                options: ['ほかならない', 'なお', 'ねばならない', 'にあたって'],
                correctIndex: 0,
                explanation: '本質を強調。'
            }
        ]
    },
    'n2_ni_kagirazu': {
        id: 'n2_ni_kagirazu',
        pattern: 'に限{かぎ}らず',
        connection: '名{めい}詞{し} + に限{かぎ}らず',
        translation: '不僅限於...; 不分...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '範囲を広げる',
                description: 'ある範囲に限らず、ほかにも当てはまることを示す。',
                examples: [
                    { japanese: '大{おとな}人{な}に限{かぎ}らず、子{こ}どもにも人{にん}気{き}だ。', chinese: '不僅大人，小孩也很受歡迎。' },
                    { japanese: '日{に}本{ほん}だけに限{かぎ}らず、海{かい}外{がい}でも有{ゆう}名{めい}だ。', chinese: '不僅日本，海外也很有名。' },
                    { japanese: '男{おとこ}性{せい}に限{かぎ}らず、女{じょ}性{せい}にも向{む}いている。', chinese: '不僅男性，女性也適合。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_kagirazu_1',
                sentence: '大{おとな}人{な}に限{かぎ}らず、子{こ}どもにも人{にん}気{き}だ。',
                options: ['に限{かぎ}らず', 'に限{かぎ}る', 'に限{かぎ}って', 'にあたって'],
                correctIndex: 0,
                explanation: '範囲を広げる。'
            },
            {
                id: 'n2_ni_kagirazu_2',
                sentence: '日{に}本{ほん}だけに限{かぎ}らず、海{かい}外{がい}でも有{ゆう}名{めい}だ。',
                options: ['に限{かぎ}らず', 'に限{かぎ}る', 'に限{かぎ}って', 'なお'],
                correctIndex: 0,
                explanation: '「だけに限らず」。'
            },
            {
                id: 'n2_ni_kagirazu_3',
                sentence: '男{おとこ}性{せい}に限{かぎ}らず、女{じょ}性{せい}にも向{む}いている。',
                options: ['に限{かぎ}らず', 'に限{かぎ}る', 'に限{かぎ}って', 'にほかならない'],
                correctIndex: 0,
                explanation: '限定しない。'
            }
        ]
    },
    'n2_ni_kagirazu_1': {
        id: 'n2_ni_kagirazu_1',
        pattern: 'に限{かぎ}らず',
        connection: '名{めい}詞{し} + に限{かぎ}らず',
        translation: '不分...; 不管...都',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '限定しない',
                description: 'ある範囲だけではないことを表す。',
                examples: [
                    { japanese: '年{ねん}齢{れい}に限{かぎ}らず誰{だれ}でも参{さん}加{か}できる。', chinese: '不分年齡誰都能參加。' },
                    { japanese: '平{へい}日{じつ}に限{かぎ}らず、休{きゅう}日{じつ}も開{あ}いている。', chinese: '不僅平日，假日也開。' },
                    { japanese: '季{き}節{せつ}に限{かぎ}らず楽{たの}しめる。', chinese: '不分季節都能享受。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_kagirazu_1_1',
                sentence: '年{ねん}齢{れい}に限{かぎ}らず、誰{だれ}でも参{さん}加{か}できる。',
                options: ['に限{かぎ}らず', 'に限{かぎ}る', 'に限{かぎ}って', 'なお'],
                correctIndex: 0,
                explanation: '限定しない。'
            },
            {
                id: 'n2_ni_kagirazu_1_2',
                sentence: '平{へい}日{じつ}に限{かぎ}らず、休{きゅう}日{じつ}も開{あ}いている。',
                options: ['に限{かぎ}らず', 'に限{かぎ}る', 'に限{かぎ}って', 'にほかならない'],
                correctIndex: 0,
                explanation: '範囲の拡大。'
            },
            {
                id: 'n2_ni_kagirazu_1_3',
                sentence: '季{き}節{せつ}に限{かぎ}らず楽{たの}しめる。',
                options: ['に限{かぎ}らず', 'に限{かぎ}る', 'に限{かぎ}って', 'にあたって'],
                correctIndex: 0,
                explanation: '「に限らず」。'
            }
        ]
    },
    'n2_ni_kagiru': {
        id: 'n2_ni_kagiru',
        pattern: 'に限{かぎ}る',
        connection: '名{めい}詞{し} + に限{かぎ}る\n動{どう}詞{し}辞{じ}書{しょ}形{けい} + に限{かぎ}る',
        translation: '最好是...; 僅限於...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '最適・限定',
                description: '「〜が一番良い」「範囲を限定する」という意味で使う。',
                examples: [
                    { japanese: '暑{あつ}い日{ひ}は冷{つめ}たいビールに限{かぎ}る。', chinese: '炎熱的天氣最好就是喝冰啤酒。' },
                    { japanese: 'この割{わり}引{びき}は学{がく}生{せい}に限{かぎ}る。', chinese: '這個折扣只限學生。' },
                    { japanese: '疲{つか}れた時{とき}は早{はや}く寝{ね}るに限{かぎ}る。', chinese: '累的時候最好早點睡。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_kagiru_1',
                sentence: '暑{あつ}い日{ひ}は冷{つめ}たい飲{の}み物{もの}に（　）。',
                options: ['限{かぎ}る', '限{かぎ}らず', '限{かぎ}って', '限{かぎ}っては'],
                correctIndex: 0,
                explanation: '最適の表現。'
            },
            {
                id: 'n2_ni_kagiru_2',
                sentence: 'この割{わり}引{びき}は学{がく}生{せい}に（　）。',
                options: ['限{かぎ}る', '限{かぎ}らず', '限{かぎ}って', 'にあたって'],
                correctIndex: 0,
                explanation: '限定の意味。'
            },
            {
                id: 'n2_ni_kagiru_3',
                sentence: '疲{つか}れた時{とき}は早{はや}く寝{ね}るに（　）。',
                options: ['限{かぎ}る', '限{かぎ}らず', '限{かぎ}って', 'なお'],
                correctIndex: 0,
                explanation: '「〜に限る」= 最適。'
            }
        ]
    },
    'n2_ni_kagiru_1': {
        id: 'n2_ni_kagiru_1',
        pattern: 'に限{かぎ}る',
        connection: '名{めい}詞{し} + に限{かぎ}る\n動{どう}詞{し}辞{じ}書{しょ}形{けい} + に限{かぎ}る',
        translation: '最好是...; 唯有...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '最良の選択',
                description: '最も良い選択だという意味で使う。',
                examples: [
                    { japanese: '夏{なつ}は冷{つめ}たいお茶{ちゃ}に限{かぎ}る。', chinese: '夏天最好是喝冰茶。' },
                    { japanese: '気{き}分{ぶん}転{てん}換{かん}には散{さん}歩{ぽ}に限{かぎ}る。', chinese: '轉換心情最好就是散步。' },
                    { japanese: '体{からだ}に悪{わる}い時{とき}は休{やす}むに限{かぎ}る。', chinese: '身體不舒服時最好休息。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_kagiru_1_1',
                sentence: '夏{なつ}は冷{つめ}たいお茶{ちゃ}に（　）。',
                options: ['限{かぎ}る', '限{かぎ}らず', '限{かぎ}って', 'にあたって'],
                correctIndex: 0,
                explanation: '最適の表現。'
            },
            {
                id: 'n2_ni_kagiru_1_2',
                sentence: '気{き}分{ぶん}転{てん}換{かん}には散{さん}歩{ぽ}に（　）。',
                options: ['限{かぎ}る', '限{かぎ}らず', '限{かぎ}って', 'なお'],
                correctIndex: 0,
                explanation: '「に限る」。'
            },
            {
                id: 'n2_ni_kagiru_1_3',
                sentence: '体{からだ}に悪{わる}い時{とき}は休{やす}むに（　）。',
                options: ['限{かぎ}る', '限{かぎ}らず', '限{かぎ}って', 'にほかならない'],
                correctIndex: 0,
                explanation: '最良の選択。'
            }
        ]
    },
    'n2_ni_kagitte': {
        id: 'n2_ni_kagitte',
        pattern: 'に限{かぎ}って',
        connection: '名{めい}詞{し} + に限{かぎ}って\n動{どう}詞{し}普{ふ}通{つう}形{けい} + に限{かぎ}って',
        translation: '偏偏... (不巧); 唯獨... (特別)',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '例外・不運',
                description: '普段と違う特別な状況に限って起こるという意味。',
                examples: [
                    { japanese: '大{だい}事{じ}な日{ひ}に限{かぎ}って雨{あめ}が降{ふ}る。', chinese: '偏偏重要的日子下雨。' },
                    { japanese: '彼{かれ}に限{かぎ}ってそんなことはしない。', chinese: '唯獨他不會做那樣的事。' },
                    { japanese: '忙{いそ}しい時{とき}に限{かぎ}って電{でん}話{わ}が来{く}る。', chinese: '偏偏忙的時候電話來。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_kagitte_1',
                sentence: '大{だい}事{じ}な日{ひ}に（　）雨{あめ}が降{ふ}る。',
                options: ['限{かぎ}って', '限{かぎ}る', '限{かぎ}らず', 'にあたって'],
                correctIndex: 0,
                explanation: '不運な例外。'
            },
            {
                id: 'n2_ni_kagitte_2',
                sentence: '彼{かれ}に（　）そんなことはしない。',
                options: ['限{かぎ}って', '限{かぎ}る', '限{かぎ}らず', 'なお'],
                correctIndex: 0,
                explanation: '特別な例外。'
            },
            {
                id: 'n2_ni_kagitte_3',
                sentence: '忙{いそ}しい時{とき}に（　）電{でん}話{わ}が来{く}る。',
                options: ['限{かぎ}って', '限{かぎ}る', '限{かぎ}らず', 'にほかならない'],
                correctIndex: 0,
                explanation: '偏偏起こる。'
            }
        ]
    },
    'n2_ni_kagitte_1': {
        id: 'n2_ni_kagitte_1',
        pattern: 'に限{かぎ}って',
        connection: '名{めい}詞{し} + に限{かぎ}って\n動{どう}詞{し}普{ふ}通{つう}形{けい} + に限{かぎ}って',
        translation: '偏偏; 只有...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '例外的なこと',
                description: '他とは違う特別なケースを強調する。',
                examples: [
                    { japanese: '試{し}験{けん}の時{とき}に限{かぎ}って体{たい}調{ちょう}が悪{わる}くなる。', chinese: '偏偏考試時身體變差。' },
                    { japanese: '彼{かれ}に限{かぎ}って遅{おく}れた。', chinese: '唯獨他遲到了。' },
                    { japanese: '大{だい}事{じ}な日{ひ}に限{かぎ}って忘{わす}れ物{もの}をする。', chinese: '偏偏重要日子忘東西。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_kagitte_1_1',
                sentence: '試{し}験{けん}の時{とき}に（　）体{たい}調{ちょう}が悪{わる}くなる。',
                options: ['限{かぎ}って', '限{かぎ}る', '限{かぎ}らず', 'なお'],
                correctIndex: 0,
                explanation: '不運な例外。'
            },
            {
                id: 'n2_ni_kagitte_1_2',
                sentence: '彼{かれ}に（　）遅{おく}れた。',
                options: ['限{かぎ}って', '限{かぎ}る', '限{かぎ}らず', 'にあたって'],
                correctIndex: 0,
                explanation: '特別なケース。'
            },
            {
                id: 'n2_ni_kagitte_1_3',
                sentence: '大{だい}事{じ}な日{ひ}に（　）忘{わす}れ物{もの}をする。',
                options: ['限{かぎ}って', '限{かぎ}る', '限{かぎ}らず', 'にほかならない'],
                correctIndex: 0,
                explanation: '偏偏起こる。'
            }
        ]
    },
    'n2_ni_kakawarazu': {
        id: 'n2_ni_kakawarazu',
        pattern: 'に関{かかわ}らず',
        connection: '名{めい}詞{し} + に関{かかわ}らず\n疑{ぎ}問{もん}詞{し} + に関{かかわ}らず',
        translation: '不管...; 無論...都',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '条件に左右されない',
                description: 'ある条件に関係なく同じ結果になることを表す。',
                examples: [
                    { japanese: '天{てん}候{こう}に関{かかわ}らず開{かい}催{さい}します。', chinese: '不管天氣如何都會舉辦。' },
                    { japanese: '性{せい}別{べつ}に関{かかわ}らず応{おう}募{ぼ}できます。', chinese: '不分性別都可報名。' },
                    { japanese: '理{り}由{ゆう}に関{かかわ}らず禁{きん}止{し}だ。', chinese: '不管理由如何都禁止。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_kakawarazu_1',
                sentence: '天{てん}候{こう}に関{かかわ}らず開{かい}催{さい}します。',
                options: ['に関{かかわ}らず', 'に関{かかわ}る', 'に決{き}まっている', 'に越{こ}したことはない'],
                correctIndex: 0,
                explanation: '条件に左右されない。'
            },
            {
                id: 'n2_ni_kakawarazu_2',
                sentence: '性{せい}別{べつ}に関{かかわ}らず応{おう}募{ぼ}できます。',
                options: ['に関{かかわ}らず', 'に関{かかわ}る', 'に決{き}まっている', 'に越{こ}したことはない'],
                correctIndex: 0,
                explanation: '限定しない。'
            },
            {
                id: 'n2_ni_kakawarazu_3',
                sentence: '理{り}由{ゆう}に関{かかわ}らず禁{きん}止{し}だ。',
                options: ['に関{かかわ}らず', 'に関{かかわ}る', 'に決{き}まっている', 'に越{こ}したことはない'],
                correctIndex: 0,
                explanation: '条件に関係なく。'
            }
        ]
    },
    'n2_ni_kakawarazu_1': {
        id: 'n2_ni_kakawarazu_1',
        pattern: 'に関{かかわ}らず',
        connection: '名{めい}詞{し} + に関{かかわ}らず\n疑{ぎ}問{もん}詞{し} + に関{かかわ}らず',
        translation: '不管...如何',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '影響を受けない',
                description: 'ある条件に影響されないことを示す。',
                examples: [
                    { japanese: '値{ね}段{だん}に関{かかわ}らず、買{か}える。', chinese: '不管價錢如何都買。' },
                    { japanese: '国{くに}に関{かかわ}らず利{り}用{よう}できる。', chinese: '不管哪個國家都能使用。' },
                    { japanese: '結{けっ}果{か}に関{かかわ}らず全{ぜん}力{りょく}を尽{つ}くした。', chinese: '不管結果如何都全力以赴。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_kakawarazu_1_1',
                sentence: '値{ね}段{だん}に関{かかわ}らず、買{か}える。',
                options: ['に関{かかわ}らず', 'に関{かかわ}る', 'に決{き}まっている', 'に越{こ}したことはない'],
                correctIndex: 0,
                explanation: '条件に左右されない。'
            },
            {
                id: 'n2_ni_kakawarazu_1_2',
                sentence: '国{くに}に関{かかわ}らず利{り}用{よう}できる。',
                options: ['に関{かかわ}らず', 'に関{かかわ}る', 'に決{き}まっている', 'に越{こ}したことはない'],
                correctIndex: 0,
                explanation: '限定しない。'
            },
            {
                id: 'n2_ni_kakawarazu_1_3',
                sentence: '結{けっ}果{か}に関{かかわ}らず全{ぜん}力{りょく}を尽{つ}くした。',
                options: ['に関{かかわ}らず', 'に関{かかわ}る', 'に決{き}まっている', 'に越{こ}したことはない'],
                correctIndex: 0,
                explanation: '結果に関係なく。'
            }
        ]
    },
    'n2_ni_kakawaru': {
        id: 'n2_ni_kakawaru',
        pattern: 'に関{かかわ}る',
        connection: '名{めい}詞{し} + に関{かかわ}る',
        translation: '關係到...; 涉及到...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '重大な影響',
                description: '物事に強く関係し、重要な影響があることを表す。',
                examples: [
                    { japanese: '命{いのち}に関{かかわ}る問{もん}題{だい}だ。', chinese: '這是關乎生命的問題。' },
                    { japanese: '会{かい}社{しゃ}の将{しょう}来{らい}に関{かかわ}る。', chinese: '關係到公司的未來。' },
                    { japanese: '安{あん}全{ぜん}に関{かかわ}るので慎{しん}重{ちょう}に。', chinese: '關係到安全，所以要謹慎。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_kakawaru_1',
                sentence: '命{いのち}に関{かかわ}る問{もん}題{だい}だ。',
                options: ['に関{かかわ}る', 'に関{かかわ}らず', 'に決{き}まっている', 'に越{こ}したことはない'],
                correctIndex: 0,
                explanation: '重大な影響。'
            },
            {
                id: 'n2_ni_kakawaru_2',
                sentence: '会{かい}社{しゃ}の将{しょう}来{らい}に関{かかわ}る。',
                options: ['に関{かかわ}る', 'に関{かかわ}らず', 'に決{き}まっている', 'に越{こ}したことはない'],
                correctIndex: 0,
                explanation: '重要な関係。'
            },
            {
                id: 'n2_ni_kakawaru_3',
                sentence: '安{あん}全{ぜん}に関{かかわ}るので慎{しん}重{ちょう}に。',
                options: ['に関{かかわ}る', 'に関{かかわ}らず', 'に決{き}まっている', 'に越{こ}したことはない'],
                correctIndex: 0,
                explanation: '影響が大きい。'
            }
        ]
    },
    'n2_ni_kakawaru_1': {
        id: 'n2_ni_kakawaru_1',
        pattern: 'に関{かかわ}る',
        connection: '名{めい}詞{し} + に関{かかわ}る',
        translation: '關係到...; 涉及...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '重要な関連',
                description: '重大な関係があることを示す。',
                examples: [
                    { japanese: '生{せい}活{かつ}に関{かかわ}る費{ひ}用{よう}が増{ふ}えた。', chinese: '關係到生活的費用增加了。' },
                    { japanese: '信{しん}頼{らい}に関{かかわ}る事{じ}件{けん}だ。', chinese: '這是關係到信任的事件。' },
                    { japanese: '健{けん}康{こう}に関{かかわ}る問{もん}題{だい}は軽{かる}く見{み}られない。', chinese: '關係到健康的問題不可輕忽。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_kakawaru_1_1',
                sentence: '生{せい}活{かつ}に関{かかわ}る費{ひ}用{よう}が増{ふ}えた。',
                options: ['に関{かかわ}る', 'に関{かかわ}らず', 'に決{き}まっている', 'に越{こ}したことはない'],
                correctIndex: 0,
                explanation: '重要な関連。'
            },
            {
                id: 'n2_ni_kakawaru_1_2',
                sentence: '信{しん}頼{らい}に関{かかわ}る事{じ}件{けん}だ。',
                options: ['に関{かかわ}る', 'に関{かかわ}らず', 'に決{き}まっている', 'に越{こ}したことはない'],
                correctIndex: 0,
                explanation: '関係が大きい。'
            },
            {
                id: 'n2_ni_kakawaru_1_3',
                sentence: '健{けん}康{こう}に関{かかわ}る問{もん}題{だい}は軽{かる}く見{み}られない。',
                options: ['に関{かかわ}る', 'に関{かかわ}らず', 'に決{き}まっている', 'に越{こ}したことはない'],
                correctIndex: 0,
                explanation: '重大な影響。'
            }
        ]
    },
    'n2_ni_kimatte_iru': {
        id: 'n2_ni_kimatte_iru',
        pattern: 'に決{き}まっている',
        connection: '普{ふ}通{つう}形{けい} + に決{き}まっている',
        translation: '一定...; 肯定...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '強い確信',
                description: '話し手が強くそうだと信じていることを表す。',
                examples: [
                    { japanese: '彼{かれ}が勝{か}つに決{き}まっている。', chinese: '他一定會贏。' },
                    { japanese: 'そんなの嘘{うそ}に決{き}まっている。', chinese: '那一定是謊話。' },
                    { japanese: '渋{しぶ}滞{たい}するに決{き}まっている。', chinese: '肯定會塞車。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_kimatte_iru_1',
                sentence: '彼{かれ}が勝{か}つに（　）。',
                options: ['決{き}まっている', '関{かかわ}らず', '越{こ}したことはない', 'あたって'],
                correctIndex: 0,
                explanation: '強い確信。'
            },
            {
                id: 'n2_ni_kimatte_iru_2',
                sentence: 'そんなの嘘{うそ}に（　）。',
                options: ['決{き}まっている', '関{かかわ}る', '越{こ}したことはない', 'なお'],
                correctIndex: 0,
                explanation: '「に決まっている」。'
            },
            {
                id: 'n2_ni_kimatte_iru_3',
                sentence: '渋{しぶ}滞{たい}するに（　）。',
                options: ['決{き}まっている', '関{かかわ}らず', '越{こ}したことはない', 'あたって'],
                correctIndex: 0,
                explanation: '確信の表現。'
            }
        ]
    },
    'n2_ni_kimatte_iru_1': {
        id: 'n2_ni_kimatte_iru_1',
        pattern: 'に決{き}まっている',
        connection: '普{ふ}通{つう}形{けい} + に決{き}まっている',
        translation: '肯定...; 相必是...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '断定的な推測',
                description: 'ほぼ確実だと判断する時に使う。',
                examples: [
                    { japanese: '彼{かれ}は知{し}っているに決{き}まっている。', chinese: '他肯定知道。' },
                    { japanese: 'こんな時{とき}に寝{ね}ているに決{き}まっている。', chinese: '這時候他一定在睡覺。' },
                    { japanese: 'あれは冗{じょう}談{だん}に決{き}まっている。', chinese: '那肯定是玩笑。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_kimatte_iru_1_1',
                sentence: '彼{かれ}は知{し}っているに（　）。',
                options: ['決{き}まっている', '関{かかわ}る', '関{かかわ}らず', '越{こ}したことはない'],
                correctIndex: 0,
                explanation: '断定の表現。'
            },
            {
                id: 'n2_ni_kimatte_iru_1_2',
                sentence: 'こんな時{とき}に寝{ね}ているに（　）。',
                options: ['決{き}まっている', '関{かかわ}る', '関{かかわ}らず', 'あたって'],
                correctIndex: 0,
                explanation: '強い確信。'
            },
            {
                id: 'n2_ni_kimatte_iru_1_3',
                sentence: 'あれは冗{じょう}談{だん}に（　）。',
                options: ['決{き}まっている', '関{かかわ}らず', '越{こ}したことはない', 'なお'],
                correctIndex: 0,
                explanation: '「に決まっている」。'
            }
        ]
    },
    'n2_ni_koshita_koto_wa_nai': {
        id: 'n2_ni_koshita_koto_wa_nai',
        pattern: 'に越{こ}したことはない',
        connection: '動{どう}詞{し}辞{じ}書{しょ}形{けい} + に越{こ}したことはない\nい形{けい}容{よう}詞{し} + に越{こ}したことはない\nな形{けい}容{よう}詞{し} + な + に越{こ}したことはない',
        translation: '最好是...; ...再好不過了',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: 'より良い選択',
                description: '「それが一番良い」という意味で、控えめに勧める表現。',
                examples: [
                    { japanese: '用{よう}心{じん}するに越{こ}したことはない。', chinese: '小心一點再好不過了。' },
                    { japanese: '健{けん}康{こう}であるに越{こ}したことはない。', chinese: '健康最好不過了。' },
                    { japanese: '早{はや}めに帰{かえ}るに越{こ}したことはない。', chinese: '早點回去再好不過。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_koshita_koto_wa_nai_1',
                sentence: '用{よう}心{じん}するに越{こ}したことはない。',
                options: ['に越{こ}したことはない', 'に決{き}まっている', 'に関{かかわ}る', 'に関{かかわ}らず'],
                correctIndex: 0,
                explanation: '最善の選択。'
            },
            {
                id: 'n2_ni_koshita_koto_wa_nai_2',
                sentence: '健{けん}康{こう}であるに越{こ}したことはない。',
                options: ['に越{こ}したことはない', 'に決{き}まっている', 'に関{かかわ}る', 'なお'],
                correctIndex: 0,
                explanation: '「〜に越したことはない」。'
            },
            {
                id: 'n2_ni_koshita_koto_wa_nai_3',
                sentence: '早{はや}めに帰{かえ}るに越{こ}したことはない。',
                options: ['に越{こ}したことはない', 'に決{き}まっている', 'に関{かかわ}らず', 'にあたって'],
                correctIndex: 0,
                explanation: '控えめな勧め。'
            }
        ]
    },
    'n2_ni_koshita_koto_wa_nai_1': {
        id: 'n2_ni_koshita_koto_wa_nai_1',
        pattern: 'に越{こ}したことはない',
        connection: '動{どう}詞{し}辞{じ}書{しょ}形{けい} + に越{こ}したことはない\nい形{けい}容{よう}詞{し} + に越{こ}したことはない\nな形{けい}容{よう}詞{し} + な + に越{こ}したことはない',
        translation: '最好不過了',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '最善を示す',
                description: '最も望ましい選択であることを表す。',
                examples: [
                    { japanese: '準{じゅん}備{び}するに越{こ}したことはない。', chinese: '做準備最好不過。' },
                    { japanese: '安{あん}全{ぜん}であるに越{こ}したことはない。', chinese: '安全最好不過。' },
                    { japanese: '早{はや}めに始{はじ}めるに越{こ}したことはない。', chinese: '早點開始最好不過。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_koshita_koto_wa_nai_1_1',
                sentence: '準{じゅん}備{び}するに越{こ}したことはない。',
                options: ['に越{こ}したことはない', 'に決{き}まっている', 'に関{かかわ}る', 'なお'],
                correctIndex: 0,
                explanation: '最善の選択。'
            },
            {
                id: 'n2_ni_koshita_koto_wa_nai_1_2',
                sentence: '安{あん}全{ぜん}であるに越{こ}したことはない。',
                options: ['に越{こ}したことはない', 'に決{き}まっている', 'に関{かかわ}らず', 'にあたって'],
                correctIndex: 0,
                explanation: '「〜に越したことはない」。'
            },
            {
                id: 'n2_ni_koshita_koto_wa_nai_1_3',
                sentence: '早{はや}めに始{はじ}めるに越{こ}したことはない。',
                options: ['に越{こ}したことはない', 'に決{き}まっている', 'に関{かかわ}る', 'に関{かかわ}らず'],
                correctIndex: 0,
                explanation: '最善の勧め。'
            }
        ]
    },
    'n2_ni_kotaete': {
        id: 'n2_ni_kotaete',
        pattern: 'に応{こた}えて',
        connection: '名{めい}詞{し} + に応{こた}えて',
        translation: '回應...; 應...之要求',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '要望・期待への応答',
                description: '求めや期待に応じて行動することを表す。',
                examples: [
                    { japanese: 'お客{きゃく}様{さま}の要{よう}望{ぼう}に応{こた}えて新{しん}商{しょう}品{ひん}を出{だ}した。', chinese: '回應顧客需求推出新商品。' },
                    { japanese: '声{せい}援{えん}に応{こた}えて全{ぜん}力{りょく}で走{はし}った。', chinese: '回應聲援全力奔跑。' },
                    { japanese: '期{き}待{たい}に応{こた}える成{せい}果{か}を出{だ}した。', chinese: '拿出符合期待的成果。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_kotaete_1',
                sentence: '要{よう}望{ぼう}に応{こた}えて新{しん}商{しょう}品{ひん}を出{だ}した。',
                options: ['に応{こた}えて', 'に応{おう}じて', 'に向{む}かって', 'に基{もと}づいて'],
                correctIndex: 0,
                explanation: '期待や要望への応答。'
            },
            {
                id: 'n2_ni_kotaete_2',
                sentence: '声{せい}援{えん}に（　）全{ぜん}力{りょく}で走{はし}った。',
                options: ['応{こた}えて', '基{もと}づいて', '向{む}かって', '限{かぎ}って'],
                correctIndex: 0,
                explanation: '支援に答える。'
            },
            {
                id: 'n2_ni_kotaete_3',
                sentence: '期{き}待{たい}に（　）成{せい}果{か}を出{だ}した。',
                options: ['応{こた}えて', '応{おう}じて', '関{かかわ}らず', '際{さい}して'],
                correctIndex: 0,
                explanation: '期待への応答。'
            }
        ]
    },
    'n2_ni_kotaete_1': {
        id: 'n2_ni_kotaete_1',
        pattern: 'に応{こた}えて',
        connection: '名{めい}詞{し} + に応{こた}えて',
        translation: '響應...; 回報...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '求めに応える',
                description: '相手の要請や気持ちに応じて行動する。',
                examples: [
                    { japanese: '要{よう}請{せい}に応{こた}えて資{し}料{りょう}を提{てい}出{しゅつ}した。', chinese: '回應要求提交資料。' },
                    { japanese: '支{し}援{えん}に応{こた}えて協{きょう}力{りょく}した。', chinese: '回應支援而協助。' },
                    { japanese: '住{じゅう}民{みん}の声{こえ}に応{こた}えて改{かい}善{ぜん}した。', chinese: '回應居民的聲音而改善。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_kotaete_1_1',
                sentence: '要{よう}請{せい}に応{こた}えて資{し}料{りょう}を提{てい}出{しゅつ}した。',
                options: ['に応{こた}えて', 'に応{おう}じて', 'に向{む}かって', 'に基{もと}づいて'],
                correctIndex: 0,
                explanation: '要請に答える。'
            },
            {
                id: 'n2_ni_kotaete_1_2',
                sentence: '支{し}援{えん}に（　）協{きょう}力{りょく}した。',
                options: ['応{こた}えて', '基{もと}づいて', '向{む}かって', '限{かぎ}って'],
                correctIndex: 0,
                explanation: '応答の表現。'
            },
            {
                id: 'n2_ni_kotaete_1_3',
                sentence: '声{こえ}に（　）改{かい}善{ぜん}した。',
                options: ['応{こた}えて', '応{おう}じて', '関{かかわ}らず', '際{さい}して'],
                correctIndex: 0,
                explanation: '「に応えて」。'
            }
        ]
    },
    'n2_ni_kuwaete': {
        id: 'n2_ni_kuwaete',
        pattern: 'に加{くわ}えて',
        connection: '名{めい}詞{し} + に加{くわ}えて\n動{どう}詞{し}普{ふ}通{つう}形{けい} + のに加{くわ}えて',
        translation: '加上...; 不僅...而且...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '追加・上乗せ',
                description: '前の内容にもう一つ付け加える。',
                examples: [
                    { japanese: '給{きゅう}料{りょう}が安{やす}いのに加{くわ}えて、休{やす}みも少{すく}ない。', chinese: '薪水低，還加上休假少。' },
                    { japanese: '雨{あめ}に加{くわ}えて風{かぜ}まで強{つよ}くなった。', chinese: '不只下雨，風也變強。' },
                    { japanese: '忙{いそ}しいことに加{くわ}えて体{からだ}の具{ぐ}合{あい}も悪{わる}い。', chinese: '不僅忙，身體也不好。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_kuwaete_1',
                sentence: '雨{あめ}に（　）風{かぜ}まで強{つよ}くなった。',
                options: ['加{くわ}えて', '応{こた}えて', '向{む}かって', '基{もと}づいて'],
                correctIndex: 0,
                explanation: '追加の表現。'
            },
            {
                id: 'n2_ni_kuwaete_2',
                sentence: '給{きゅう}料{りょう}が安{やす}いのに（　）、休{やす}みも少{すく}ない。',
                options: ['加{くわ}えて', '関{かかわ}らず', '際{さい}して', '向{む}かって'],
                correctIndex: 0,
                explanation: '「〜のに加えて」。'
            },
            {
                id: 'n2_ni_kuwaete_3',
                sentence: '忙{いそ}しいことに（　）体{からだ}も悪{わる}い。',
                options: ['加{くわ}えて', '応{おう}じて', '応{こた}えて', '基{もと}づいて'],
                correctIndex: 0,
                explanation: '上乗せの意味。'
            }
        ]
    },
    'n2_ni_kuwaete_1': {
        id: 'n2_ni_kuwaete_1',
        pattern: 'に加{くわ}えて',
        connection: '名{めい}詞{し} + に加{くわ}えて\n動{どう}詞{し}普{ふ}通{つう}形{けい} + のに加{くわ}えて',
        translation: '再加上...; 而且',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: 'さらに追加する',
                description: '前の事柄にさらに付け加える。',
                examples: [
                    { japanese: '味{あじ}に加{くわ}えて、値{ね}段{だん}も安{やす}い。', chinese: '不只味道好，價格也便宜。' },
                    { japanese: '能{のう}力{りょく}に加{くわ}えて経{けい}験{けん}もある。', chinese: '除了能力，還有經驗。' },
                    { japanese: '学{がく}費{ひ}に加{くわ}えて生{せい}活{かつ}費{ひ}も必{ひつ}要{よう}だ。', chinese: '除了學費，生活費也需要。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_kuwaete_1_1',
                sentence: '味{あじ}に加{くわ}えて、値{ね}段{だん}も安{やす}い。',
                options: ['に加{くわ}えて', 'に応{こた}えて', 'に向{む}かって', 'に基{もと}づいて'],
                correctIndex: 0,
                explanation: '追加の意味。'
            },
            {
                id: 'n2_ni_kuwaete_1_2',
                sentence: '能{のう}力{りょく}に（　）経{けい}験{けん}もある。',
                options: ['加{くわ}えて', '応{こた}えて', '向{む}かって', '関{かかわ}らず'],
                correctIndex: 0,
                explanation: '「に加えて」。'
            },
            {
                id: 'n2_ni_kuwaete_1_3',
                sentence: '学{がく}費{ひ}に（　）生{せい}活{かつ}費{ひ}も必{ひつ}要{よう}だ。',
                options: ['加{くわ}えて', '応{おう}じて', '応{こた}えて', '基{もと}づいて'],
                correctIndex: 0,
                explanation: 'さらに加える。'
            }
        ]
    },
    'n2_ni_motozuite': {
        id: 'n2_ni_motozuite',
        pattern: 'に基{もと}づいて',
        connection: '名{めい}詞{し} + に基{もと}づいて',
        translation: '基於...; 按照...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '根拠・基準',
                description: '資料や規則などを根拠にして判断・行動する。',
                examples: [
                    { japanese: 'データに基{もと}づいて判{はん}断{だん}した。', chinese: '依據數據判斷。' },
                    { japanese: '規{き}則{そく}に基{もと}づいて処{しょ}理{り}する。', chinese: '按照規則處理。' },
                    { japanese: '実{じっ}験{けん}に基{もと}づく結{けっ}論{ろん}だ。', chinese: '基於實驗的結論。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_motozuite_1',
                sentence: 'データに（　）判{はん}断{だん}した。',
                options: ['基{もと}づいて', '応{こた}えて', '加{くわ}えて', '向{む}かって'],
                correctIndex: 0,
                explanation: '根拠にする。'
            },
            {
                id: 'n2_ni_motozuite_2',
                sentence: '規{き}則{そく}に（　）処{しょ}理{り}する。',
                options: ['基{もと}づいて', '応{おう}じて', '関{かかわ}らず', '際{さい}して'],
                correctIndex: 0,
                explanation: '基準に従う。'
            },
            {
                id: 'n2_ni_motozuite_3',
                sentence: '実{じっ}験{けん}に（　）結{けっ}論{ろん}だ。',
                options: ['基{もと}づく', '基{もと}づいて', '応{こた}えて', '向{む}かって'],
                correctIndex: 0,
                explanation: '連体修飾「基づく」。'
            }
        ]
    },
    'n2_ni_motozuite_1': {
        id: 'n2_ni_motozuite_1',
        pattern: 'に基{もと}づいて',
        connection: '名{めい}詞{し} + に基{もと}づいて',
        translation: '根據...; 依據...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '根拠から判断',
                description: '判断・計画の根拠を示す。',
                examples: [
                    { japanese: '統{とう}計{けい}に基{もと}づいて計{けい}画{かく}を立{た}てた。', chinese: '依據統計制定計畫。' },
                    { japanese: '資{し}料{りょう}に基{もと}づいた報{ほう}告{こく}だ。', chinese: '基於資料的報告。' },
                    { japanese: '経{けい}験{けん}に基{もと}づいて助{じょ}言{げん}した。', chinese: '根據經驗給建議。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_motozuite_1_1',
                sentence: '統{とう}計{けい}に（　）計{けい}画{かく}を立{た}てた。',
                options: ['基{もと}づいて', '応{こた}えて', '加{くわ}えて', '向{む}かって'],
                correctIndex: 0,
                explanation: '根拠を示す。'
            },
            {
                id: 'n2_ni_motozuite_1_2',
                sentence: '資{し}料{りょう}に（　）報{ほう}告{こく}だ。',
                options: ['基{もと}づいた', '基{もと}づいて', '応{こた}えて', '関{かかわ}らず'],
                correctIndex: 0,
                explanation: '連体修飾。'
            },
            {
                id: 'n2_ni_motozuite_1_3',
                sentence: '経{けい}験{けん}に（　）助{じょ}言{げん}した。',
                options: ['基{もと}づいて', '応{おう}じて', '向{む}かって', '際{さい}して'],
                correctIndex: 0,
                explanation: '根拠に基づく。'
            }
        ]
    },
    'n2_ni_mukatte': {
        id: 'n2_ni_mukatte',
        pattern: 'に向{む}かって',
        connection: '名{めい}詞{し} + に向{む}かって',
        translation: '朝著...; 對著...; 為了...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '方向・対象',
                description: '方向や対象に向けて行うことを表す。',
                examples: [
                    { japanese: '山{やま}に向{む}かって走{はし}った。', chinese: '朝著山跑去。' },
                    { japanese: '先{せん}生{せい}に向{む}かって質{しつ}問{もん}した。', chinese: '向老師提問。' },
                    { japanese: 'ゴールに向{む}かって全{ぜん}力{りょく}で頑{がん}張{ば}った。', chinese: '朝著終點全力努力。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_mukatte_1',
                sentence: '山{やま}に（　）走{はし}った。',
                options: ['向{む}かって', '基{もと}づいて', '応{こた}えて', '加{くわ}えて'],
                correctIndex: 0,
                explanation: '方向を示す。'
            },
            {
                id: 'n2_ni_mukatte_2',
                sentence: '先{せん}生{せい}に（　）質{しつ}問{もん}した。',
                options: ['向{む}かって', '応{おう}じて', '関{かかわ}らず', '際{さい}して'],
                correctIndex: 0,
                explanation: '対象に向ける。'
            },
            {
                id: 'n2_ni_mukatte_3',
                sentence: 'ゴールに（　）全{ぜん}力{りょく}で頑{がん}張{ば}った。',
                options: ['向{む}かって', '応{こた}えて', '基{もと}づいて', '加{くわ}えて'],
                correctIndex: 0,
                explanation: '目的・方向。'
            }
        ]
    },
    'n2_ni_mukatte_1': {
        id: 'n2_ni_mukatte_1',
        pattern: 'に向{む}かって',
        connection: '名{めい}詞{し} + に向{む}かって',
        translation: '面向...; 向著...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '方向や対象へ',
                description: '方向や相手に向けることを表す。',
                examples: [
                    { japanese: '窓{まど}に向{む}かって立{た}った。', chinese: '面向窗戶站著。' },
                    { japanese: '観{かん}客{きゃく}に向{む}かって挨{あい}拶{さつ}した。', chinese: '向觀眾打招呼。' },
                    { japanese: '未来{みらい}に向{む}かって進{すす}む。', chinese: '朝著未來前進。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_mukatte_1_1',
                sentence: '窓{まど}に（　）立{た}った。',
                options: ['向{む}かって', '基{もと}づいて', '応{こた}えて', '加{くわ}えて'],
                correctIndex: 0,
                explanation: '方向を示す。'
            },
            {
                id: 'n2_ni_mukatte_1_2',
                sentence: '観{かん}客{きゃく}に（　）挨{あい}拶{さつ}した。',
                options: ['向{む}かって', '応{おう}じて', '関{かかわ}らず', '際{さい}して'],
                correctIndex: 0,
                explanation: '対象へ向ける。'
            },
            {
                id: 'n2_ni_mukatte_1_3',
                sentence: '未{み}来{らい}に（　）進{すす}む。',
                options: ['向{む}かって', '応{こた}えて', '基{もと}づいて', '加{くわ}えて'],
                correctIndex: 0,
                explanation: '比喩的な方向。'
            }
        ]
    },
    'n2_ni_oujite': {
        id: 'n2_ni_oujite',
        pattern: 'に応{おう}じて',
        connection: '名{めい}詞{し} + に応{おう}じて',
        translation: '根據...; 與...相應',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '状況に合わせる',
                description: '状況や条件に合わせて変えることを表す。',
                examples: [
                    { japanese: '状{じょう}況{きょう}に応{おう}じて対{たい}応{おう}する。', chinese: '依情況採取對應。' },
                    { japanese: '能{のう}力{りょく}に応{おう}じて給{きゅう}料{りょう}が決{き}まる。', chinese: '薪水依能力而定。' },
                    { japanese: '雨{あめ}の量{りょう}に応{おう}じて警{けい}報{ほう}が出{だ}る。', chinese: '依降雨量發布警報。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_oujite_1',
                sentence: '状{じょう}況{きょう}に（　）対{たい}応{おう}する。',
                options: ['応{おう}じて', '応{こた}えて', '基{もと}づいて', '向{む}かって'],
                correctIndex: 0,
                explanation: '状況に合わせる。'
            },
            {
                id: 'n2_ni_oujite_2',
                sentence: '能{のう}力{りょく}に（　）給{きゅう}料{りょう}が決{き}まる。',
                options: ['応{おう}じて', '応{こた}えて', '関{かかわ}らず', '際{さい}して'],
                correctIndex: 0,
                explanation: '条件に合わせる。'
            },
            {
                id: 'n2_ni_oujite_3',
                sentence: '雨{あめ}の量{りょう}に（　）警{けい}報{ほう}が出{だ}る。',
                options: ['応{おう}じて', '応{こた}えて', '基{もと}づいて', '加{くわ}えて'],
                correctIndex: 0,
                explanation: '変化に応じる。'
            }
        ]
    },
    'n2_ni_oujite_1': {
        id: 'n2_ni_oujite_1',
        pattern: 'に応{おう}じて',
        connection: '名{めい}詞{し} + に応{おう}じて',
        translation: '應...的要求; 根據...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '程度や要望に合わせる',
                description: '必要や条件に合わせて調整することを表す。',
                examples: [
                    { japanese: 'お客{きゃく}様{さま}の要{よう}望{ぼう}に応{おう}じて案{あん}内{ない}する。', chinese: '依顧客需求導覽。' },
                    { japanese: '成{せい}績{せき}に応{おう}じて奨{しょう}学{がく}金{きん}が出{で}る。', chinese: '獎學金依成績發放。' },
                    { japanese: '状{じょう}況{きょう}に応{おう}じて計{けい}画{かく}を変{か}える。', chinese: '依情況調整計畫。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_oujite_1_1',
                sentence: '要{よう}望{ぼう}に（　）案{あん}内{ない}する。',
                options: ['応{おう}じて', '応{こた}えて', '基{もと}づいて', '向{む}かって'],
                correctIndex: 0,
                explanation: '要求に合わせる。'
            },
            {
                id: 'n2_ni_oujite_1_2',
                sentence: '成{せい}績{せき}に（　）奨{しょう}学{がく}金{きん}が出{で}る。',
                options: ['応{おう}じて', '応{こた}えて', '関{かかわ}らず', '際{さい}して'],
                correctIndex: 0,
                explanation: '条件に合わせる。'
            },
            {
                id: 'n2_ni_oujite_1_3',
                sentence: '状{じょう}況{きょう}に（　）計{けい}画{かく}を変{か}える。',
                options: ['応{おう}じて', '応{こた}えて', '基{もと}づいて', '加{くわ}えて'],
                correctIndex: 0,
                explanation: '調整する。'
            }
        ]
    },
    'n2_ni_saishite': {
        id: 'n2_ni_saishite',
        pattern: 'に際{さい}して',
        connection: '動{どう}詞{し}辞{じ}書{しょ}形{けい} + に際{さい}して\n名{めい}詞{し} + に際{さい}して',
        translation: '在...之際; 當...的時候',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '重要な機会',
                description: '大事な場面に臨むときの行動や心構えを述べる。',
                examples: [
                    { japanese: '入{にゅう}学{がく}に際{さい}して、親{おや}に感{かん}謝{しゃ}した。', chinese: '入學之際向父母道謝。' },
                    { japanese: '契{けい}約{やく}に際{さい}して、内{ない}容{よう}を確{かく}認{にん}する。', chinese: '簽約之際確認內容。' },
                    { japanese: '利{り}用{よう}に際{さい}して、ご注{ちゅう}意{い}ください。', chinese: '使用之際請注意。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_saishite_1',
                sentence: '入{にゅう}学{がく}に（　）、親{おや}に感{かん}謝{しゃ}した。',
                options: ['際{さい}して', '向{む}かって', '基{もと}づいて', '応{こた}えて'],
                correctIndex: 0,
                explanation: '重要な場面。'
            },
            {
                id: 'n2_ni_saishite_2',
                sentence: '契{けい}約{やく}に（　）、内{ない}容{よう}を確{かく}認{にん}する。',
                options: ['際{さい}して', '応{おう}じて', '関{かかわ}らず', '加{くわ}えて'],
                correctIndex: 0,
                explanation: '「に際して」。'
            },
            {
                id: 'n2_ni_saishite_3',
                sentence: '利{り}用{よう}に（　）、ご注{ちゅう}意{い}ください。',
                options: ['際{さい}して', '向{む}かって', '基{もと}づいて', '応{こた}えて'],
                correctIndex: 0,
                explanation: '場面に臨む。'
            }
        ]
    },
    'n2_ni_saishite_1': {
        id: 'n2_ni_saishite_1',
        pattern: 'に際{さい}して',
        connection: '動{どう}詞{し}辞{じ}書{しょ}形{けい} + に際{さい}して\n名{めい}詞{し} + に際{さい}して',
        translation: '在...之時',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '正式な場面',
                description: '書き言葉で、何かを始める時の注意や準備を述べる。',
                examples: [
                    { japanese: '出{しゅっ}発{ぱつ}に際{さい}して、時{じ}間{かん}を確{かく}認{にん}した。', chinese: '出發之際確認時間。' },
                    { japanese: '使{し}用{よう}に際{さい}して、説{せつ}明{めい}書{しょ}を読{よ}んでください。', chinese: '使用之際請閱讀說明書。' },
                    { japanese: '申{もう}し込{こ}みに際{さい}して、身{み}分{ぶん}証{しょう}が必{ひつ}要{よう}だ。', chinese: '報名之際需要身分證。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_saishite_1_1',
                sentence: '出{しゅっ}発{ぱつ}に（　）、時{じ}間{かん}を確{かく}認{にん}した。',
                options: ['際{さい}して', '向{む}かって', '基{もと}づいて', '応{こた}えて'],
                correctIndex: 0,
                explanation: '書き言葉の「に際して」。'
            },
            {
                id: 'n2_ni_saishite_1_2',
                sentence: '使{し}用{よう}に（　）、説{せつ}明{めい}書{しょ}を読{よ}んでください。',
                options: ['際{さい}して', '応{おう}じて', '関{かかわ}らず', '加{くわ}えて'],
                correctIndex: 0,
                explanation: '場面を表す。'
            },
            {
                id: 'n2_ni_saishite_1_3',
                sentence: '申{もう}し込{こ}みに（　）、身{み}分{ぶん}証{しょう}が必{ひつ}要{よう}だ。',
                options: ['際{さい}して', '向{む}かって', '基{もと}づいて', '応{こた}えて'],
                correctIndex: 0,
                explanation: '重要な場面。'
            }
        ]
    },
    'n2_ni_sakidachi': {
        id: 'n2_ni_sakidachi',
        pattern: 'に先{さき}立{だ}ち',
        connection: '名{めい}詞{し} + に先{さき}立{だ}ち\n動{どう}詞{し}辞{じ}書{しょ}形{けい} + に先{さき}立{だ}ち',
        translation: '在...之前; 先於...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '事前の準備',
                description: 'ある出来事の前に行うことを表す。',
                examples: [
                    { japanese: '会{かい}議{ぎ}に先{さき}立{だ}ち、資{し}料{りょう}を配{くば}った。', chinese: '會議前先發資料。' },
                    { japanese: '出{しゅっ}発{ぱつ}に先{さき}立{だ}ち、天{てん}気{き}を確{かく}認{にん}した。', chinese: '出發前先確認天氣。' },
                    { japanese: '式{しき}に先{さき}立{だ}ち、挨{あい}拶{さつ}があった。', chinese: '典禮前先有致詞。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_sakidachi_1',
                sentence: '会{かい}議{ぎ}に（　）、資{し}料{りょう}を配{くば}った。',
                options: ['先{さき}立{だ}ち', '際{さい}して', '向{む}かって', '応{こた}えて'],
                correctIndex: 0,
                explanation: '事前に行う。'
            },
            {
                id: 'n2_ni_sakidachi_2',
                sentence: '出{しゅっ}発{ぱつ}に（　）、天{てん}気{き}を確{かく}認{にん}した。',
                options: ['先{さき}立{だ}ち', '応{おう}じて', '関{かかわ}らず', '加{くわ}えて'],
                correctIndex: 0,
                explanation: '前もって。'
            },
            {
                id: 'n2_ni_sakidachi_3',
                sentence: '式{しき}に（　）、挨{あい}拶{さつ}があった。',
                options: ['先{さき}立{だ}ち', '向{む}かって', '基{もと}づいて', '応{こた}えて'],
                correctIndex: 0,
                explanation: '先に起こる。'
            }
        ]
    },
    'n2_ni_sakidachi_1': {
        id: 'n2_ni_sakidachi_1',
        pattern: 'に先{さき}立{だ}ち',
        connection: '名{めい}詞{し} + に先{さき}立{だ}ち\n動{どう}詞{し}辞{じ}書{しょ}形{けい} + に先{さき}立{だ}ち',
        translation: '先於...; 預先...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '開始前の行動',
                description: '何かが始まる前に行うことを表す。',
                examples: [
                    { japanese: '旅{りょ}行{こう}に先{さき}立{だ}ち、保{ほ}険{けん}に入{はい}った。', chinese: '旅行前先加入保險。' },
                    { japanese: '開{かい}始{し}に先{さき}立{だ}ち、説{せつ}明{めい}があった。', chinese: '開始前先有說明。' },
                    { japanese: '発{はっ}表{ぴょう}に先{さき}立{だ}ち、練{れん}習{しゅう}を重{かさ}ねた。', chinese: '發表前反覆練習。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_sakidachi_1_1',
                sentence: '旅{りょ}行{こう}に（　）、保{ほ}険{けん}に入{はい}った。',
                options: ['先{さき}立{だ}ち', '際{さい}して', '向{む}かって', '応{こた}えて'],
                correctIndex: 0,
                explanation: '事前の行動。'
            },
            {
                id: 'n2_ni_sakidachi_1_2',
                sentence: '開{かい}始{し}に（　）、説{せつ}明{めい}があった。',
                options: ['先{さき}立{だ}ち', '応{おう}じて', '関{かかわ}らず', '加{くわ}えて'],
                correctIndex: 0,
                explanation: '始まる前。'
            },
            {
                id: 'n2_ni_sakidachi_1_3',
                sentence: '発{はっ}表{ぴょう}に（　）、練{れん}習{しゅう}した。',
                options: ['先{さき}立{だ}ち', '向{む}かって', '基{もと}づいて', '応{こた}えて'],
                correctIndex: 0,
                explanation: '前もって。'
            }
        ]
    },
    'n2_ni_seyo': {
        id: 'n2_ni_seyo',
        pattern: 'にせよ',
        connection: '普{ふ}通{つう}形{けい} + にせよ\n名{めい}詞{し} + にせよ',
        translation: '即便...; 無論...都',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '譲歩・条件の提示',
                description: 'どちらにしても同じ結論になることを示す。',
                examples: [
                    { japanese: '行{い}くにせよ行{い}かないにせよ、連{れん}絡{らく}してほしい。', chinese: '無論去不去，都希望你聯絡。' },
                    { japanese: '雨{あめ}にせよ風{かぜ}にせよ、中{ちゅう}止{し}はしない。', chinese: '不管下雨還是刮風，都不會中止。' },
                    { japanese: 'どちらにせよ結{けっ}果{か}は同{おな}じだ。', chinese: '無論如何結果都一樣。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_seyo_1',
                sentence: '行{い}くにせよ行{い}かないにせよ、連{れん}絡{らく}してほしい。',
                options: ['にせよ', 'にしろ', 'にしても', 'につけ'],
                correctIndex: 0,
                explanation: '譲歩の「にせよ」。'
            },
            {
                id: 'n2_ni_seyo_2',
                sentence: '雨{あめ}にせよ風{かぜ}にせよ、中{ちゅう}止{し}はしない。',
                options: ['にせよ', 'にしろ', 'にしても', 'に沿{そ}って'],
                correctIndex: 0,
                explanation: '条件を並べる。'
            },
            {
                id: 'n2_ni_seyo_3',
                sentence: 'どちら（　）結{けっ}果{か}は同{おな}じだ。',
                options: ['にせよ', 'に関{かかわ}らず', 'に限{かぎ}って', 'に基{もと}づいて'],
                correctIndex: 0,
                explanation: '「どちらにせよ」。'
            }
        ]
    },
    'n2_ni_seyo_ni_shiro': {
        id: 'n2_ni_seyo_ni_shiro',
        pattern: 'にせよ / にしろ',
        connection: '普{ふ}通{つう}形{けい} + にせよ / にしろ\n名{めい}詞{し} + にせよ / にしろ',
        translation: '即便...; 無論是...還是',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '譲歩の表現',
                description: 'いずれの場合でも同じ結論になることを示す。',
                examples: [
                    { japanese: '高{たか}いにしろ安{やす}いにしろ、質{しつ}は確{かく}認{にん}しよう。', chinese: '不管貴或便宜，都要確認品質。' },
                    { japanese: '行{い}くにせよ、行{い}かないにせよ、早{はや}めに決{き}めて。', chinese: '無論去不去，早點決定。' },
                    { japanese: '本{ほん}にせよ映{えい}画{が}にせよ、今{いま}は時{じ}間{かん}がない。', chinese: '不管是書或電影，現在都沒時間。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_seyo_ni_shiro_1',
                sentence: '高{たか}い（　）安{やす}い（　）、質{しつ}は確{かく}認{にん}したい。',
                options: ['にしろ', 'にせよ', 'にしても', 'につけ'],
                correctIndex: 0,
                explanation: '「にしろ」「にせよ」どちらでも可。'
            },
            {
                id: 'n2_ni_seyo_ni_shiro_2',
                sentence: '行{い}く（　）行{い}かない（　）、早{はや}めに決{き}めよう。',
                options: ['にせよ', 'にしろ', 'に沿{そ}って', 'に関{かかわ}らず'],
                correctIndex: 0,
                explanation: '譲歩の並列。'
            },
            {
                id: 'n2_ni_seyo_ni_shiro_3',
                sentence: '本{ほん}に（　）映{えい}画{が}に（　）、今{いま}は見{み}る時{じ}間{かん}がない。',
                options: ['せよ', 'しろ', 'つけ', 'そって'],
                correctIndex: 0,
                explanation: '短い形で「にせよ / にしろ」。'
            }
        ]
    },
    'n2_ni_shiro_ni_shiro': {
        id: 'n2_ni_shiro_ni_shiro',
        pattern: 'にしろ～にしろ',
        connection: '名{めい}詞{し}/普{ふ}通{つう}形{けい} + にしろ + 名{めい}詞{し}/普{ふ}通{つう}形{けい} + にしろ',
        translation: '無論是...還是... (都一樣)',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '二つの選択肢を並べる',
                description: '二つのケースのどちらでも結論が変わらないことを示す。',
                examples: [
                    { japanese: '行{い}くにしろ行{い}かないにしろ、連{れん}絡{らく}は必{ひつ}要{よう}だ。', chinese: '無論去不去，都需要聯絡。' },
                    { japanese: '電{でん}話{わ}にしろメールにしろ、早{はや}めに返{へん}信{しん}して。', chinese: '不管是電話或郵件，都請早點回覆。' },
                    { japanese: '今{いま}にしろ後{あと}にしろ、決{けっ}断{だん}しなければならない。', chinese: '無論現在或之後，都必須做出決定。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_shiro_ni_shiro_1',
                sentence: '行{い}くにしろ行{い}かないにしろ、連{れん}絡{らく}は必{ひつ}要{よう}だ。',
                options: ['にしろ', 'にせよ', 'にしても', 'につけ'],
                correctIndex: 0,
                explanation: '二つを並べる「にしろ」。'
            },
            {
                id: 'n2_ni_shiro_ni_shiro_2',
                sentence: '電{でん}話{わ}にしろメールにしろ、早{はや}めに返{へん}信{しん}して。',
                options: ['にしろ', 'にせよ', 'に沿{そ}って', 'に関{かかわ}らず'],
                correctIndex: 0,
                explanation: '選択肢の並列。'
            },
            {
                id: 'n2_ni_shiro_ni_shiro_3',
                sentence: '今{いま}にしろ後{あと}にしろ、決{けっ}断{だん}が必{ひつ}要{よう}だ。',
                options: ['にしろ', 'にせよ', 'につけ', 'に沿{そ}って'],
                correctIndex: 0,
                explanation: 'どちらでも結論が同じ。'
            }
        ]
    },
    'n2_ni_shitara': {
        id: 'n2_ni_shitara',
        pattern: 'にしたら',
        connection: '名{めい}詞{し} + にしたら',
        translation: '從...的角度來說',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '立場からの意見',
                description: 'ある立場・視点から見た感想や評価を示す。',
                examples: [
                    { japanese: '親{おや}にしたら心{しん}配{ぱい}だろう。', chinese: '從父母的角度來說會擔心吧。' },
                    { japanese: '新{しん}人{じん}にしたら難{むずか}しい任{にん}務{む}だ。', chinese: '對新人來說是困難的任務。' },
                    { japanese: '当{とう}事{じ}者{しゃ}にしたら納{なっ}得{とく}できない。', chinese: '當事人當然無法接受。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_shitara_1',
                sentence: '親{おや}に（　）、心{しん}配{ぱい}だろう。',
                options: ['したら', 'せよ', 'しろ', 'つけ'],
                correctIndex: 0,
                explanation: '立場からの見方。'
            },
            {
                id: 'n2_ni_shitara_2',
                sentence: '新{しん}人{じん}に（　）、難{むずか}しい。',
                options: ['したら', 'せよ', 'しろ', 'そって'],
                correctIndex: 0,
                explanation: '「にしたら」。'
            },
            {
                id: 'n2_ni_shitara_3',
                sentence: '当{とう}事{じ}者{しゃ}に（　）納{なっ}得{とく}できない。',
                options: ['したら', 'せよ', 'しろ', 'かかわらず'],
                correctIndex: 0,
                explanation: '視点を示す。'
            }
        ]
    },
    'n2_ni_shitara_ni_sureba': {
        id: 'n2_ni_shitara_ni_sureba',
        pattern: 'にしたら / にすれば',
        connection: '名{めい}詞{し} + にしたら / にすれば',
        translation: '就...而言',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '同じ意味の視点表現',
                description: '「にしたら」と「にすれば」はほぼ同じ意味。',
                examples: [
                    { japanese: '学{がく}生{せい}にすれば、学{がく}費{ひ}は高{たか}すぎる。', chinese: '對學生來說學費太高。' },
                    { japanese: '上{じょう}司{し}にしたら、遅{おく}刻{こく}は困{こま}る。', chinese: '對上司來說，遲到很困擾。' },
                    { japanese: '当{とう}事{じ}者{しゃ}にすれば、納{なっ}得{とく}できない。', chinese: '對當事人而言無法接受。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_shitara_ni_sureba_1',
                sentence: '学{がく}生{せい}に（　）、学{がく}費{ひ}は高{たか}い。',
                options: ['すれば', 'せよ', 'しろ', 'つけ'],
                correctIndex: 0,
                explanation: '視点を示す。'
            },
            {
                id: 'n2_ni_shitara_ni_sureba_2',
                sentence: '上{じょう}司{し}に（　）、遅{おく}刻{こく}は困{こま}る。',
                options: ['したら', 'せよ', 'しろ', 'そって'],
                correctIndex: 0,
                explanation: '「にしたら」。'
            },
            {
                id: 'n2_ni_shitara_ni_sureba_3',
                sentence: '当{とう}事{じ}者{しゃ}に（　）、納{なっ}得{とく}できない。',
                options: ['すれば', 'せよ', 'しろ', 'かかわらず'],
                correctIndex: 0,
                explanation: '「にすれば」。'
            }
        ]
    },
    'n2_ni_shitemo': {
        id: 'n2_ni_shitemo',
        pattern: 'にしても～にしても',
        connection: '名{めい}詞{し}/普{ふ}通{つう}形{けい} + にしても + 名{めい}詞{し}/普{ふ}通{つう}形{けい} + にしても',
        translation: '不管是...還是...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: 'どちらでも同じ',
                description: '二つの選択肢のいずれでも結果が同じ。',
                examples: [
                    { japanese: '行{い}くにしても行{い}かないにしても、連{れん}絡{らく}は必{ひつ}要{よう}だ。', chinese: '不管去不去，都需要聯絡。' },
                    { japanese: '電{でん}話{わ}にしてもメールにしても、早{はや}く返{へん}信{しん}して。', chinese: '無論電話或郵件都請早點回覆。' },
                    { japanese: '今{いま}にしても後{あと}にしても、決{けっ}断{だん}が必{ひつ}要{よう}だ。', chinese: '無論現在還是之後，都必須決定。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_shitemo_1',
                sentence: '行{い}くにしても行{い}かないにしても、連{れん}絡{らく}は必{ひつ}要{よう}だ。',
                options: ['にしても', 'にせよ', 'にしろ', 'につけ'],
                correctIndex: 0,
                explanation: '二つの選択肢を並列。'
            },
            {
                id: 'n2_ni_shitemo_2',
                sentence: '電{でん}話{わ}にしてもメールにしても、早{はや}く返{へん}信{しん}して。',
                options: ['にしても', 'にせよ', 'にしろ', 'に沿{そ}って'],
                correctIndex: 0,
                explanation: '「〜にしても」。'
            },
            {
                id: 'n2_ni_shitemo_3',
                sentence: '今{いま}にしても後{あと}にしても、決{けっ}断{だん}が必{ひつ}要{よう}だ。',
                options: ['にしても', 'にせよ', 'にしろ', 'に基{もと}づいて'],
                correctIndex: 0,
                explanation: 'どちらでも同じ。'
            }
        ]
    },
    'n2_ni_sotte': {
        id: 'n2_ni_sotte',
        pattern: 'に沿{そ}って',
        connection: '名{めい}詞{し} + に沿{そ}って',
        translation: '沿著...; 按照...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '基準・線に合わせる',
                description: '計画や線などに沿って進むことを表す。',
                examples: [
                    { japanese: '川{かわ}に沿{そ}って歩{ある}いた。', chinese: '沿著河走。' },
                    { japanese: '計{けい}画{かく}に沿{そ}って進{すす}める。', chinese: '按照計畫推進。' },
                    { japanese: '海{うみ}岸{がん}に沿{そ}って道{みち}が続{つづ}いている。', chinese: '道路沿著海岸延伸。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_sotte_1',
                sentence: '川{かわ}に（　）歩{ある}いた。',
                options: ['沿{そ}って', '基{もと}づいて', '応{こた}えて', '向{む}かって'],
                correctIndex: 0,
                explanation: '線に沿う。'
            },
            {
                id: 'n2_ni_sotte_2',
                sentence: '計{けい}画{かく}に（　）進{すす}める。',
                options: ['沿{そ}って', '応{おう}じて', '関{かかわ}らず', '際{さい}して'],
                correctIndex: 0,
                explanation: '計画に従う。'
            },
            {
                id: 'n2_ni_sotte_3',
                sentence: '海{うみ}岸{がん}に（　）道{みち}が続{つづ}いている。',
                options: ['沿{そ}って', '応{こた}えて', '基{もと}づいて', '加{くわ}えて'],
                correctIndex: 0,
                explanation: '沿線の表現。'
            }
        ]
    },
    'n2_ni_sotte_1': {
        id: 'n2_ni_sotte_1',
        pattern: 'に沿{そ}って',
        connection: '名{めい}詞{し} + に沿{そ}って',
        translation: '沿著...; 按照...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '基準に合わせる',
                description: '基準や方針に従うことを表す。',
                examples: [
                    { japanese: 'マニュアルに沿{そ}って作{さ}業{ぎょう}する。', chinese: '按照手冊作業。' },
                    { japanese: '線{せん}に沿{そ}って切{き}ってください。', chinese: '請沿著線剪。' },
                    { japanese: '計{けい}画{かく}に沿{そ}った日{に}程{てい}です。', chinese: '是按計畫安排的行程。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_sotte_1_1',
                sentence: 'マニュアルに（　）作{さ}業{ぎょう}する。',
                options: ['沿{そ}って', '基{もと}づいて', '応{こた}えて', '向{む}かって'],
                correctIndex: 0,
                explanation: '方針に従う。'
            },
            {
                id: 'n2_ni_sotte_1_2',
                sentence: '線{せん}に（　）切{き}ってください。',
                options: ['沿{そ}って', '応{おう}じて', '関{かかわ}らず', '際{さい}して'],
                correctIndex: 0,
                explanation: '線に沿う。'
            },
            {
                id: 'n2_ni_sotte_1_3',
                sentence: '計{けい}画{かく}に（　）日{に}程{てい}です。',
                options: ['沿{そ}った', '沿{そ}って', '応{こた}えて', '基{もと}づいて'],
                correctIndex: 0,
                explanation: '連体修飾の形。'
            }
        ]
    },
    'n2_ni_soui_nai': {
        id: 'n2_ni_soui_nai',
        pattern: 'に相{そう}違{い}ない',
        connection: '普{ふ}通{つう}形{けい} + に相{そう}違{い}ない',
        translation: '無疑是...; 一定是...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '強い確信',
                description: '確実だと強く判断する時に使う。',
                examples: [
                    { japanese: '彼{かれ}は犯{はん}人{にん}に相{そう}違{い}ない。', chinese: '他一定是犯人。' },
                    { japanese: 'これは本{ほん}物{もの}に相{そう}違{い}ない。', chinese: '這一定是真品。' },
                    { japanese: '彼{かれ}は忘{わす}れたに相{そう}違{い}ない。', chinese: '他一定忘了。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_soui_nai_1',
                sentence: '彼{かれ}は犯{はん}人{にん}に（　）。',
                options: ['相{そう}違{い}ない', '決{き}まっている', '関{かかわ}らず', '越{こ}したことはない'],
                correctIndex: 0,
                explanation: '強い確信。'
            },
            {
                id: 'n2_ni_soui_nai_2',
                sentence: 'これは本{ほん}物{もの}に（　）。',
                options: ['相{そう}違{い}ない', '関{かかわ}る', 'なお', 'あたって'],
                correctIndex: 0,
                explanation: '「に相違ない」。'
            },
            {
                id: 'n2_ni_soui_nai_3',
                sentence: '彼{かれ}は忘{わす}れたに（　）。',
                options: ['相{そう}違{い}ない', '関{かかわ}らず', '決{き}まっている', '際{さい}して'],
                correctIndex: 0,
                explanation: '確信を表す。'
            }
        ]
    },
    'n2_ni_soui_nai_1': {
        id: 'n2_ni_soui_nai_1',
        pattern: 'に相{そう}違{い}ない',
        connection: '普{ふ}通{つう}形{けい} + に相{そう}違{い}ない',
        translation: '肯定...; 的確...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '断定的な推測',
                description: 'ほぼ間違いないと判断する。',
                examples: [
                    { japanese: '彼{かれ}は知{し}っているに相{そう}違{い}ない。', chinese: '他肯定知道。' },
                    { japanese: 'あの人{ひと}は先{せん}生{せい}に相{そう}違{い}ない。', chinese: '那個人一定是老師。' },
                    { japanese: 'これが答{こた}えに相{そう}違{い}ない。', chinese: '這一定是答案。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_soui_nai_1_1',
                sentence: '彼{かれ}は知{し}っているに（　）。',
                options: ['相{そう}違{い}ない', '決{き}まっている', '関{かかわ}らず', '越{こ}したことはない'],
                correctIndex: 0,
                explanation: '確信の表現。'
            },
            {
                id: 'n2_ni_soui_nai_1_2',
                sentence: 'あの人{ひと}は先{せん}生{せい}に（　）。',
                options: ['相{そう}違{い}ない', '関{かかわ}る', 'なお', 'あたって'],
                correctIndex: 0,
                explanation: '断定の推測。'
            },
            {
                id: 'n2_ni_soui_nai_1_3',
                sentence: 'これが答{こた}えに（　）。',
                options: ['相{そう}違{い}ない', '関{かかわ}らず', '決{き}まっている', '際{さい}して'],
                correctIndex: 0,
                explanation: '「に相違ない」。'
            }
        ]
    },
    'n2_ni_suginai': {
        id: 'n2_ni_suginai',
        pattern: 'に過{す}ぎない',
        connection: '名{めい}詞{し} + に過{す}ぎない\n普{ふ}通{つう}形{けい} + に過{す}ぎない',
        translation: '只不過是...; 僅僅是...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '程度を低く見積もる',
                description: '価値や程度がそれほど高くないことを表す。',
                examples: [
                    { japanese: 'それは噂{うわさ}に過{す}ぎない。', chinese: '那只不過是傳聞。' },
                    { japanese: '彼{かれ}は研{けん}修{しゅう}生{せい}に過{す}ぎない。', chinese: '他只是研修生而已。' },
                    { japanese: '私{わたし}の意{い}見{けん}は参{さん}考{こう}に過{す}ぎない。', chinese: '我的意見只是參考。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_suginai_1',
                sentence: 'それは噂{うわさ}に（　）。',
                options: ['過{す}ぎない', '相{そう}違{い}ない', '決{き}まっている', '越{こ}したことはない'],
                correctIndex: 0,
                explanation: '過小評価の表現。'
            },
            {
                id: 'n2_ni_suginai_2',
                sentence: '彼{かれ}は研{けん}修{しゅう}生{せい}に（　）。',
                options: ['過{す}ぎない', '関{かかわ}る', 'なお', 'あたって'],
                correctIndex: 0,
                explanation: '「〜に過ぎない」。'
            },
            {
                id: 'n2_ni_suginai_3',
                sentence: '私{わたし}の意{い}見{けん}は参{さん}考{こう}に（　）。',
                options: ['過{す}ぎない', '関{かかわ}らず', '決{き}まっている', '際{さい}して'],
                correctIndex: 0,
                explanation: '程度が低い。'
            }
        ]
    },
    'n2_ni_suginai_1': {
        id: 'n2_ni_suginai_1',
        pattern: 'に過{す}ぎない',
        connection: '名{めい}詞{し} + に過{す}ぎない\n普{ふ}通{つう}形{けい} + に過{す}ぎない',
        translation: '僅僅是...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '控えめに言う',
                description: '価値や程度が限られていることを強調する。',
                examples: [
                    { japanese: 'これは一{ひと}つの例{れい}に過{す}ぎない。', chinese: '這只是一個例子。' },
                    { japanese: '失{しっ}敗{ぱい}は経{けい}験{けん}に過{す}ぎない。', chinese: '失敗不過是經驗。' },
                    { japanese: '私{わたし}は助{たす}けただけに過{す}ぎない。', chinese: '我只是幫了忙而已。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_suginai_1_1',
                sentence: 'これは一{ひと}つの例{れい}に（　）。',
                options: ['過{す}ぎない', '相{そう}違{い}ない', '決{き}まっている', '越{こ}したことはない'],
                correctIndex: 0,
                explanation: '一部に過ぎない。'
            },
            {
                id: 'n2_ni_suginai_1_2',
                sentence: '失{しっ}敗{ぱい}は経{けい}験{けん}に（　）。',
                options: ['過{す}ぎない', '関{かかわ}る', 'なお', 'あたって'],
                correctIndex: 0,
                explanation: '価値を控えめに。'
            },
            {
                id: 'n2_ni_suginai_1_3',
                sentence: '私{わたし}は助{たす}けただけに（　）。',
                options: ['過{す}ぎない', '関{かかわ}らず', '決{き}まっている', '際{さい}して'],
                correctIndex: 0,
                explanation: '「に過ぎない」。'
            }
        ]
    },
    'n2_ni_tomonatte': {
        id: 'n2_ni_tomonatte',
        pattern: 'に伴{ともな}って',
        connection: '名{めい}詞{し} + に伴{ともな}って\n動{どう}詞{し}辞{じ}書{しょ}形{けい} + に伴{ともな}って',
        translation: '隨著...; 伴隨著...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '変化に合わせて起こる',
                description: '前の変化と同時に別の変化が起こる。',
                examples: [
                    { japanese: '経{けい}済{ざい}成{せい}長{ちょう}に伴{ともな}って物{ぶっ}価{か}が上{あ}がった。', chinese: '隨著經濟成長物價上升。' },
                    { japanese: '年{ねん}齢{れい}を重{かさ}ねるに伴{ともな}って体{からだ}が弱{よわ}くなる。', chinese: '隨著年齡增長身體變弱。' },
                    { japanese: '気{き}温{おん}の上{じょう}昇{しょう}に伴{ともな}って雪{ゆき}が溶{と}けた。', chinese: '隨著氣溫上升雪融化。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_tomonatte_1',
                sentence: '経{けい}済{ざい}成{せい}長{ちょう}に（　）物{ぶっ}価{か}が上{あ}がった。',
                options: ['伴{ともな}って', '基{もと}づいて', '応{こた}えて', '向{む}かって'],
                correctIndex: 0,
                explanation: '同時に起こる変化。'
            },
            {
                id: 'n2_ni_tomonatte_2',
                sentence: '年{ねん}齢{れい}を重{かさ}ねるに（　）体{からだ}が弱{よわ}くなる。',
                options: ['伴{ともな}って', '応{おう}じて', '関{かかわ}らず', '際{さい}して'],
                correctIndex: 0,
                explanation: '変化に合わせる。'
            },
            {
                id: 'n2_ni_tomonatte_3',
                sentence: '気{き}温{おん}の上{じょう}昇{しょう}に（　）雪{ゆき}が溶{と}けた。',
                options: ['伴{ともな}って', '応{こた}えて', '基{もと}づいて', '加{くわ}えて'],
                correctIndex: 0,
                explanation: '「に伴って」。'
            }
        ]
    },
    'n2_ni_tomonatte_1': {
        id: 'n2_ni_tomonatte_1',
        pattern: 'に伴{ともな}って',
        connection: '名{めい}詞{し} + に伴{ともな}って\n動{どう}詞{し}辞{じ}書{しょ}形{けい} + に伴{ともな}って',
        translation: '隨著...而發生',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '同時的な変化',
                description: 'ある変化と同時に別のことが起こることを表す。',
                examples: [
                    { japanese: '人{じん}口{こう}の増{ぞう}加{か}に伴{ともな}って交{こう}通{つう}が混{こ}んだ。', chinese: '隨著人口增加交通變擁擠。' },
                    { japanese: '気{き}候{こう}の変{へん}化{か}に伴{ともな}って生{せい}態{たい}系{けい}が変{か}わった。', chinese: '隨著氣候變化生態系改變。' },
                    { japanese: '技{ぎ}術{じゅつ}の進{しん}歩{ぽ}に伴{ともな}って便{べん}利{り}になった。', chinese: '隨著技術進步變得更方便。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_tomonatte_1_1',
                sentence: '人{じん}口{こう}の増{ぞう}加{か}に（　）交{こう}通{つう}が混{こ}んだ。',
                options: ['伴{ともな}って', '基{もと}づいて', '応{こた}えて', '向{む}かって'],
                correctIndex: 0,
                explanation: '同時の変化。'
            },
            {
                id: 'n2_ni_tomonatte_1_2',
                sentence: '気{き}候{こう}の変{へん}化{か}に（　）生{せい}態{たい}系{けい}が変{か}わった。',
                options: ['伴{ともな}って', '応{おう}じて', '関{かかわ}らず', '際{さい}して'],
                correctIndex: 0,
                explanation: '伴う変化。'
            },
            {
                id: 'n2_ni_tomonatte_1_3',
                sentence: '技{ぎ}術{じゅつ}の進{しん}歩{ぽ}に（　）便{べん}利{り}になった。',
                options: ['伴{ともな}って', '応{こた}えて', '基{もと}づいて', '加{くわ}えて'],
                correctIndex: 0,
                explanation: '「に伴って」。'
            }
        ]
    },
    'n2_ni_tsuke': {
        id: 'n2_ni_tsuke',
        pattern: 'につけ',
        connection: '動{どう}詞{し}辞{じ}書{しょ}形{けい} + につけ\n名{めい}詞{し} + につけ',
        translation: '每當...就...; 無論...還是...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '何かのたびに',
                description: '何かを見る・聞くたびに同じ気持ちになることを表す。',
                examples: [
                    { japanese: '写真{しゃ}真{しん}を見{み}るにつけ、故{こ}郷{きょう}を思{おも}い出{だ}す。', chinese: '每次看照片就想起故鄉。' },
                    { japanese: '何{なに}につけ、人{ひと}に相{そう}談{だん}する。', chinese: '不管什麼事都會去商量。' },
                    { japanese: '彼{かれ}の話{はなし}を聞{き}くにつけ、感{かん}心{しん}する。', chinese: '每次聽他的話都很佩服。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_tsuke_1',
                sentence: '写{しゃ}真{しん}を見{み}る（　）、故{こ}郷{きょう}を思{おも}い出{だ}す。',
                options: ['につけ', 'につき', 'にわたって', 'にて'],
                correctIndex: 0,
                explanation: '見るたびに。'
            },
            {
                id: 'n2_ni_tsuke_2',
                sentence: '何{なに}（　）人{ひと}に相{そう}談{だん}する。',
                options: ['につけ', 'につき', 'にわたって', 'にて'],
                correctIndex: 0,
                explanation: '「何につけ」。'
            },
            {
                id: 'n2_ni_tsuke_3',
                sentence: '話{はなし}を聞{き}く（　）、感{かん}心{しん}する。',
                options: ['につけ', 'につき', 'にて', 'に沿{そ}って'],
                correctIndex: 0,
                explanation: 'たびに感じる。'
            }
        ]
    },
    'n2_ni_tsuki': {
        id: 'n2_ni_tsuki',
        pattern: 'につき',
        connection: '名{めい}詞{し} + につき',
        translation: '因為...; 每...; 關於...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '理由・範囲・単位',
                description: '書面で「ため」「について」「〜あたり」を表す。',
                examples: [
                    { japanese: '工{こう}事{じ}中{ちゅう}につき、通{つう}行{こう}止{ど}めです。', chinese: '因施工中，禁止通行。' },
                    { japanese: '一{ひと}人{り}につき一{いち}枚{まい}まで。', chinese: '每人最多一張。' },
                    { japanese: '本{ほん}日{じつ}は休{きゅう}業{ぎょう}につき、お取{と}り扱{あつか}いできません。', chinese: '本日因休業無法受理。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_tsuki_1',
                sentence: '工{こう}事{じ}中{ちゅう}（　）、通{つう}行{こう}止{ど}めです。',
                options: ['につき', 'につけ', 'にわたって', 'にて'],
                correctIndex: 0,
                explanation: '理由を示す。'
            },
            {
                id: 'n2_ni_tsuki_2',
                sentence: '一{ひと}人{り}（　）一{いち}枚{まい}まで。',
                options: ['につき', 'につけ', 'にわたって', 'にて'],
                correctIndex: 0,
                explanation: '単位を表す。'
            },
            {
                id: 'n2_ni_tsuki_3',
                sentence: '本{ほん}日{じつ}は休{きゅう}業{ぎょう}（　）、お取{と}り扱{あつか}いできません。',
                options: ['につき', 'につけ', 'にて', 'に沿{そ}って'],
                correctIndex: 0,
                explanation: '書面の理由。'
            }
        ]
    },
    'n2_ni_watatte': {
        id: 'n2_ni_watatte',
        pattern: 'にわたって',
        connection: '名{めい}詞{し} + にわたって\n期{き}間{かん}・範{はん}囲{い} + にわたって',
        translation: '長達...; 涉及... (整個範圍/期間)',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '広い範囲や長い期間',
                description: '時間や空間の広がりを強調する。',
                examples: [
                    { japanese: '会{かい}議{ぎ}は三{さん}日{にち}にわたって行{おこな}われた。', chinese: '會議連續三天舉行。' },
                    { japanese: '全{ぜん}国{こく}にわたって調{ちょう}査{さ}した。', chinese: '調查遍及全國。' },
                    { japanese: 'このプロジェクトは長{なが}期{き}間{かん}にわたって続{つづ}く。', chinese: '這個專案會持續很長時間。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_ni_watatte_1',
                sentence: '会{かい}議{ぎ}は三{さん}日{にち}に（　）行{おこな}われた。',
                options: ['わたって', 'つき', 'つけ', 'て'],
                correctIndex: 0,
                explanation: '期間の広がり。'
            },
            {
                id: 'n2_ni_watatte_2',
                sentence: '全{ぜん}国{こく}に（　）調{ちょう}査{さ}した。',
                options: ['わたって', 'つき', 'にて', 'につけ'],
                correctIndex: 0,
                explanation: '範囲の広がり。'
            },
            {
                id: 'n2_ni_watatte_3',
                sentence: '長{なが}期{き}間{かん}に（　）続{つづ}く。',
                options: ['わたって', 'つき', 'て', 'につけ'],
                correctIndex: 0,
                explanation: '長期間。'
            }
        ]
    },
    'n2_nimo_kakawarazu': {
        id: 'n2_nimo_kakawarazu',
        pattern: 'にも関{かかわ}らず',
        connection: '普{ふ}通{つう}形{けい} + にも関{かかわ}らず',
        translation: '儘管...; 雖然...卻',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '逆接の強調',
                description: '「〜のに」と同じ意味で、書き言葉として使う。',
                examples: [
                    { japanese: '雨{あめ}が降{ふ}っているにも関{かかわ}らず、出{で}かけた。', chinese: '儘管下雨還是出門了。' },
                    { japanese: '忙{いそ}しいにも関{かかわ}らず、手{て}伝{つだ}ってくれた。', chinese: '雖然很忙還是來幫忙。' },
                    { japanese: '分{わ}かっているにも関{かかわ}らず、同{おな}じ失{しっ}敗{ぱい}をした。', chinese: '明明知道卻還犯同樣的錯。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_nimo_kakawarazu_1',
                sentence: '雨{あめ}が降{ふ}っている（　）、出{で}かけた。',
                options: ['にも関{かかわ}らず', 'に関{かかわ}らず', 'に関{かかわ}る', 'に決{き}まっている'],
                correctIndex: 0,
                explanation: '逆接の表現。'
            },
            {
                id: 'n2_nimo_kakawarazu_2',
                sentence: '忙{いそ}しい（　）、手{て}伝{つだ}ってくれた。',
                options: ['にも関{かかわ}らず', 'に基{もと}づいて', 'に応{こた}えて', 'に向{む}かって'],
                correctIndex: 0,
                explanation: '書き言葉の「にも関わらず」。'
            },
            {
                id: 'n2_nimo_kakawarazu_3',
                sentence: '分{わ}かっている（　）、同{おな}じ失{しっ}敗{ぱい}をした。',
                options: ['にも関{かかわ}らず', 'に伴{ともな}って', 'に沿{そ}って', 'にわたって'],
                correctIndex: 0,
                explanation: '逆接の強調。'
            }
        ]
    },
    'n2_nimo_kakawarazu_1': {
        id: 'n2_nimo_kakawarazu_1',
        pattern: 'にも関{かかわ}らず',
        connection: '普{ふ}通{つう}形{けい} + にも関{かかわ}らず',
        translation: '儘管...; 不顧...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '逆接の書面表現',
                description: '事実に反する結果を述べる。',
                examples: [
                    { japanese: '彼{かれ}は反{はん}対{たい}されたにも関{かかわ}らず計{けい}画{かく}を進{すす}めた。', chinese: '雖遭到反對仍推進計畫。' },
                    { japanese: '大{おお}雨{あめ}にも関{かかわ}らず試{し}合{あい}は行{おこな}われた。', chinese: '儘管大雨比賽仍舉行。' },
                    { japanese: '彼{かれ}は知{し}っていたにも関{かかわ}らず黙{だま}っていた。', chinese: '他明明知道卻沉默。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_nimo_kakawarazu_1_1',
                sentence: '反{はん}対{たい}された（　）、計{けい}画{かく}を進{すす}めた。',
                options: ['にも関{かかわ}らず', 'に関{かかわ}らず', 'に関{かかわ}る', 'に決{き}まっている'],
                correctIndex: 0,
                explanation: '逆接の表現。'
            },
            {
                id: 'n2_nimo_kakawarazu_1_2',
                sentence: '大{おお}雨{あめ}（　）、試{し}合{あい}は行{おこな}われた。',
                options: ['にも関{かかわ}らず', 'に基{もと}づいて', 'に応{こた}えて', 'に向{む}かって'],
                correctIndex: 0,
                explanation: '事実に反する結果。'
            },
            {
                id: 'n2_nimo_kakawarazu_1_3',
                sentence: '知{し}っていた（　）、黙{だま}っていた。',
                options: ['にも関{かかわ}らず', 'に伴{ともな}って', 'に沿{そ}って', 'にわたって'],
                correctIndex: 0,
                explanation: '逆接。'
            }
        ]
    },
    'n2_nite': {
        id: 'n2_nite',
        pattern: 'にて',
        connection: '名{めい}詞{し} + にて',
        translation: '在... (正式語, 相當於 で)',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '丁寧・書面の場所',
                description: '場所を表す「で」の丁寧な書き言葉。',
                examples: [
                    { japanese: '会{かい}場{じょう}にてお待{ま}ちください。', chinese: '請在會場等候。' },
                    { japanese: '東{とう}京{きょう}にて開{かい}催{さい}します。', chinese: '在東京舉辦。' },
                    { japanese: '詳{くわ}しくは店{てん}内{ない}にてご覧{らん}ください。', chinese: '詳情請於店內查看。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_nite_1',
                sentence: '会{かい}場{じょう}（　）お待{ま}ちください。',
                options: ['にて', 'につき', 'につけ', 'にわたって'],
                correctIndex: 0,
                explanation: '場所の丁寧表現。'
            },
            {
                id: 'n2_nite_2',
                sentence: '東{とう}京{きょう}（　）開{かい}催{さい}します。',
                options: ['にて', 'につき', 'にては', 'につけ'],
                correctIndex: 0,
                explanation: '書き言葉の「で」。'
            },
            {
                id: 'n2_nite_3',
                sentence: '店{てん}内{ない}（　）ご覧{らん}ください。',
                options: ['にて', 'につき', 'にわたって', 'につけ'],
                correctIndex: 0,
                explanation: '場所を示す。'
            }
        ]
    },
    'n2_no_mo_motto_mo_da': {
        id: 'n2_no_mo_motto_mo_da',
        pattern: 'のももっともだ',
        connection: '普{ふ}通{つう}形{けい} + のももっともだ\n名{めい}詞{し} + である + のももっともだ',
        translation: '...也是理所當然的',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '当然だと認める',
                description: '相手の感情や結果が当然だと認めるときに使う。',
                examples: [
                    { japanese: 'あれだけ練{れん}習{しゅう}したのだから、勝{か}つのももっともだ。', chinese: '練習那麼多，贏也是理所當然。' },
                    { japanese: '怒{おこ}るのももっともだ。', chinese: '生氣也是理所當然。' },
                    { japanese: '彼{かれ}が驚{おどろ}くのももっともだ。', chinese: '他會驚訝也很正常。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_no_mo_motto_mo_da_1',
                sentence: 'あれだけ練{れん}習{しゅう}したのだから、勝{か}つ（　）。',
                options: ['のももっともだ', 'のも当然だ', 'にも関{かかわ}らず', 'に関{かかわ}らず'],
                correctIndex: 0,
                explanation: '当然だと認める。'
            },
            {
                id: 'n2_no_mo_motto_mo_da_2',
                sentence: '怒{おこ}る（　）。',
                options: ['のももっともだ', 'のも当{とう}然{ぜん}だ', 'に基{もと}づいて', 'に沿{そ}って'],
                correctIndex: 0,
                explanation: '「〜のももっともだ」。'
            },
            {
                id: 'n2_no_mo_motto_mo_da_3',
                sentence: '彼{かれ}が驚{おどろ}く（　）。',
                options: ['のももっともだ', 'に関{かかわ}る', 'に関{かかわ}らず', 'に決{き}まっている'],
                correctIndex: 0,
                explanation: '当然の評価。'
            }
        ]
    },
    'n2_no_moto_de': {
        id: 'n2_no_moto_de',
        pattern: 'の下{もと}で',
        connection: '名{めい}詞{し} + の下{もと}で',
        translation: '在...之下; 蒙受...之恩',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '指導・影響のもと',
                description: '誰かの指導や影響の下で行うことを表す。',
                examples: [
                    { japanese: '先{せん}生{せい}の下{もと}で研{けん}究{きゅう}する。', chinese: '在老師的指導下研究。' },
                    { japanese: '社{しゃ}長{ちょう}の下{もと}で働{はたら}いている。', chinese: '在社長手下工作。' },
                    { japanese: '平{へい}和{わ}の下{もと}で育{そだ}った。', chinese: '在和平之下成長。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_no_moto_de_1',
                sentence: '先{せん}生{せい}の下{もと}で研{けん}究{きゅう}する。',
                options: ['の下{もと}で', 'の上{うえ}では', 'にて', 'につき'],
                correctIndex: 0,
                explanation: '指導のもと。'
            },
            {
                id: 'n2_no_moto_de_2',
                sentence: '社{しゃ}長{ちょう}の下{もと}で働{はたら}いている。',
                options: ['の下{もと}で', 'の上{うえ}では', 'にて', 'につけ'],
                correctIndex: 0,
                explanation: '所属・影響。'
            },
            {
                id: 'n2_no_moto_de_3',
                sentence: '平{へい}和{わ}の下{もと}で育{そだ}った。',
                options: ['の下{もと}で', 'の上{うえ}では', 'にわたって', 'にて'],
                correctIndex: 0,
                explanation: '状態のもと。'
            }
        ]
    },
    'n2_no_moto_de_1': {
        id: 'n2_no_moto_de_1',
        pattern: 'の下{もと}で',
        connection: '名{めい}詞{し} + の下{もと}で',
        translation: '在...之下',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '条件・指導のもと',
                description: 'ある条件や指導の下で行うことを示す。',
                examples: [
                    { japanese: '指{し}導{どう}の下{もと}で訓{くん}練{れん}した。', chinese: '在指導下訓練。' },
                    { japanese: '規{き}則{そく}の下{もと}で行{おこな}う。', chinese: '在規則之下進行。' },
                    { japanese: '安{あん}全{ぜん}の下{もと}で作{さ}業{ぎょう}する。', chinese: '在安全條件下作業。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_no_moto_de_1_1',
                sentence: '指{し}導{どう}の下{もと}で訓{くん}練{れん}した。',
                options: ['の下{もと}で', 'の上{うえ}では', 'にて', 'につき'],
                correctIndex: 0,
                explanation: '指導のもと。'
            },
            {
                id: 'n2_no_moto_de_1_2',
                sentence: '規{き}則{そく}の下{もと}で行{おこな}う。',
                options: ['の下{もと}で', 'の上{うえ}では', 'にて', 'につけ'],
                correctIndex: 0,
                explanation: '条件のもと。'
            },
            {
                id: 'n2_no_moto_de_1_3',
                sentence: '安{あん}全{ぜん}の下{もと}で作{さ}業{ぎょう}する。',
                options: ['の下{もと}で', 'の上{うえ}では', 'にわたって', 'にて'],
                correctIndex: 0,
                explanation: '状況のもと。'
            }
        ]
    },
    'n2_no_ue_de_wa': {
        id: 'n2_no_ue_de_wa',
        pattern: 'の上{うえ}では',
        connection: '名{めい}詞{し} + の上{うえ}では',
        translation: '從...來看; 在...方面',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '視点・立場の限定',
                description: 'ある観点からの評価や判断を示す。',
                examples: [
                    { japanese: '規{き}則{そく}の上{うえ}では問{もん}題{だい}ない。', chinese: '從規則上看沒有問題。' },
                    { japanese: '形{けい}式{しき}の上{うえ}では完{かん}了{りょう}した。', chinese: '形式上已完成。' },
                    { japanese: '書{しょ}類{るい}の上{うえ}では成{せい}功{こう}だ。', chinese: '在文件上算成功。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_no_ue_de_wa_1',
                sentence: '規{き}則{そく}の上{うえ}では問{もん}題{だい}ない。',
                options: ['の上{うえ}では', 'の下{もと}で', 'にて', 'につき'],
                correctIndex: 0,
                explanation: '観点を示す。'
            },
            {
                id: 'n2_no_ue_de_wa_2',
                sentence: '形{けい}式{しき}の上{うえ}では完{かん}了{りょう}した。',
                options: ['の上{うえ}では', 'の下{もと}で', 'にわたって', 'につけ'],
                correctIndex: 0,
                explanation: '形式上の判断。'
            },
            {
                id: 'n2_no_ue_de_wa_3',
                sentence: '書{しょ}類{るい}の上{うえ}では成{せい}功{こう}だ。',
                options: ['の上{うえ}では', 'の下{もと}で', 'にて', 'に沿{そ}って'],
                correctIndex: 0,
                explanation: '限定された視点。'
            }
        ]
    },
    'n2_no_ue_de_wa_1': {
        id: 'n2_no_ue_de_wa_1',
        pattern: 'の上{うえ}では',
        connection: '名{めい}詞{し} + の上{うえ}では',
        translation: '就...而言',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '立場からの評価',
                description: 'ある観点に限定して評価する。',
                examples: [
                    { japanese: '数{すう}字{じ}の上{うえ}では黒{くろ}字{じ}だ。', chinese: '從數字上看是黑字。' },
                    { japanese: '法{ほう}律{りつ}の上{うえ}では問{もん}題{だい}ない。', chinese: '法律上沒有問題。' },
                    { japanese: '条{じょう}件{けん}の上{うえ}では満{まん}足{ぞく}だ。', chinese: '條件上算滿意。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_no_ue_de_wa_1_1',
                sentence: '数{すう}字{じ}の上{うえ}では黒{くろ}字{じ}だ。',
                options: ['の上{うえ}では', 'の下{もと}で', 'にて', 'につき'],
                correctIndex: 0,
                explanation: '限定した観点。'
            },
            {
                id: 'n2_no_ue_de_wa_1_2',
                sentence: '法{ほう}律{りつ}の上{うえ}では問{もん}題{だい}ない。',
                options: ['の上{うえ}では', 'の下{もと}で', 'にわたって', 'につけ'],
                correctIndex: 0,
                explanation: '法律の観点。'
            },
            {
                id: 'n2_no_ue_de_wa_1_3',
                sentence: '条{じょう}件{けん}の上{うえ}では満{まん}足{ぞく}だ。',
                options: ['の上{うえ}では', 'の下{もと}で', 'にて', 'に沿{そ}って'],
                correctIndex: 0,
                explanation: '評価の限定。'
            }
        ]
    },
    'n2_nomi': {
        id: 'n2_nomi',
        pattern: 'のみ',
        connection: '名{めい}詞{し} + のみ\n普{ふ}通{つう}形{けい} + のみ',
        translation: '只有...; 僅僅...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '限定・制限',
                description: '「だけ」と同じ意味で、やや硬い表現。',
                examples: [
                    { japanese: '入{にゅう}場{じょう}は会{かい}員{いん}のみに限{かぎ}る。', chinese: '入場僅限會員。' },
                    { japanese: '申{もう}し込{こ}みはインターネットのみにしている。', chinese: '申請僅限網路。' },
                    { japanese: '彼{かれ}は聞{き}くだけで答{こた}えることはなかった。', chinese: '他只聽不答。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_nomi_1',
                sentence: '入{にゅう}場{じょう}は会{かい}員{いん}（　）だ。',
                options: ['のみ', 'のみならず', 'ぬ', 'ぬき'],
                correctIndex: 0,
                explanation: '限定の「のみ」。'
            },
            {
                id: 'n2_nomi_2',
                sentence: '申{もう}し込{こ}みはネット（　）。',
                options: ['のみ', 'のみならず', 'ぬ', 'ぬき'],
                correctIndex: 0,
                explanation: '「〜のみ」= だけ。'
            },
            {
                id: 'n2_nomi_3',
                sentence: '彼{かれ}は聞{き}く（　）答{こた}えなかった。',
                options: ['のみ', 'のみならず', 'ぬ', 'ぬき'],
                correctIndex: 0,
                explanation: '動詞普通形+のみ。'
            }
        ]
    },
    'n2_nominarazu': {
        id: 'n2_nominarazu',
        pattern: 'のみならず',
        connection: '名{めい}詞{し} + のみならず\n普{ふ}通{つう}形{けい} + のみならず',
        translation: '不僅...; ...也不例外',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '追加・強調',
                description: '「〜だけでなく」より硬い表現。',
                examples: [
                    { japanese: '彼{かれ}は日{に}本{ほん}語{ご}のみならず英{えい}語{ご}も話{はな}せる。', chinese: '他不僅會日語，也會英語。' },
                    { japanese: 'この店{みせ}は味{あじ}のみならず、サー{さー}ビスも良{よ}い。', chinese: '這家店不只味道好，服務也好。' },
                    { japanese: '大{おとな}のみならず子{こ}どもにも人{にん}気{き}がある。', chinese: '不僅大人，小孩也很受歡迎。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_nominarazu_1',
                sentence: '彼{かれ}は日{に}本{ほん}語{ご}（　）英{えい}語{ご}も話{はな}せる。',
                options: ['のみならず', 'のみ', 'ぬ', 'ぬき'],
                correctIndex: 0,
                explanation: '追加の表現。'
            },
            {
                id: 'n2_nominarazu_2',
                sentence: '味{あじ}（　）サービスも良{よ}い。',
                options: ['のみならず', 'のみ', 'ぬ', 'ぬき'],
                correctIndex: 0,
                explanation: '「だけでなく」。'
            },
            {
                id: 'n2_nominarazu_3',
                sentence: '大{おとな}のみならず子{こ}どもにも人{にん}気{き}がある。',
                options: ['のみならず', 'のみ', 'ぬ', 'ぬき'],
                correctIndex: 0,
                explanation: '硬い追加表現。'
            }
        ]
    },
    'n2_nu': {
        id: 'n2_nu',
        pattern: 'ぬ',
        connection: '動{どう}詞{し}ない形{けい} → ぬ (古風/書面)',
        translation: '不... (古風/書面否定)',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '文語の否定',
                description: '「ない」の文語形。書き言葉や硬い表現で使う。',
                examples: [
                    { japanese: '見{み}ぬふりをした。', chinese: '裝作沒看見。' },
                    { japanese: '知{し}らぬ間{ま}に時{とき}が過{す}ぎた。', chinese: '不知不覺時間過去了。' },
                    { japanese: '行{い}かぬなら理由{りゆう}を言{い}え。', chinese: '若不去就說理由。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_nu_1',
                sentence: '見{み}（　）ふりをした。',
                options: ['ぬ', 'のみ', 'のみならず', 'ぬき'],
                correctIndex: 0,
                explanation: '文語の否定。'
            },
            {
                id: 'n2_nu_2',
                sentence: '知{し}ら（　）間{ま}に時{とき}が過{す}ぎた。',
                options: ['ぬ', 'のみ', 'ぬき', 'のみならず'],
                correctIndex: 0,
                explanation: '「知らぬ間に」。'
            },
            {
                id: 'n2_nu_3',
                sentence: '行{い}か（　）なら、理{り}由{ゆう}を言{い}え。',
                options: ['ぬ', 'のみ', 'ぬき', 'のみならず'],
                correctIndex: 0,
                explanation: '古風な否定。'
            }
        ]
    },
    'n2_nuki': {
        id: 'n2_nuki',
        pattern: '抜{ぬ}きにして',
        connection: '名{めい}詞{し} + を抜{ぬ}きにして',
        translation: '省去...; 排除...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '省略・除外',
                description: 'ある事柄を除いて話すことを表す。',
                examples: [
                    { japanese: '冗{じょう}談{だん}は抜{ぬ}きにして話{はな}そう。', chinese: '不開玩笑，認真談。' },
                    { japanese: '挨{あい}拶{さつ}抜{ぬ}きにして本{ほん}題{だい}に入{はい}る。', chinese: '省略寒暄直接進入正題。' },
                    { japanese: '彼{かれ}の協{きょう}力{りょく}抜{ぬ}きでは成{せい}功{こう}しなかった。', chinese: '沒有他的協助就不會成功。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_nuki_1',
                sentence: '冗{じょう}談{だん}は（　）話{はな}そう。',
                options: ['抜{ぬ}きにして', '抜{ぬ}く', '抜{ぬ}きで', '抜{ぬ}いた'],
                correctIndex: 0,
                explanation: '省略の表現。'
            },
            {
                id: 'n2_nuki_2',
                sentence: '挨{あい}拶{さつ}（　）本{ほん}題{だい}に入{はい}る。',
                options: ['抜{ぬ}きにして', '抜{ぬ}く', '抜{ぬ}きで', '抜{ぬ}いた'],
                correctIndex: 0,
                explanation: '「〜抜きにして」。'
            },
            {
                id: 'n2_nuki_3',
                sentence: '彼{かれ}の協{きょう}力{りょく}（　）成{せい}功{こう}しなかった。',
                options: ['抜{ぬ}きでは', '抜{ぬ}く', '抜{ぬ}きで', '抜{ぬ}いた'],
                correctIndex: 0,
                explanation: '除外すると成り立たない。'
            }
        ]
    },
    'n2_nuki_ni_shite_nuki_de': {
        id: 'n2_nuki_ni_shite_nuki_de',
        pattern: '抜{ぬ}きにして / 抜{ぬ}きで',
        connection: '名{めい}詞{し} + を抜{ぬ}きにして / 抜{ぬ}きで',
        translation: '撇開...不談',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '省略して進める',
                description: 'ある要素を省いて進めることを表す。',
                examples: [
                    { japanese: '冗{じょう}談{だん}抜{ぬ}きで話{はな}そう。', chinese: '不開玩笑，正經談。' },
                    { japanese: '挨{あい}拶{さつ}を抜{ぬ}きにして本{ほん}題{だい}に入{はい}る。', chinese: '省略寒暄進入正題。' },
                    { japanese: 'お世{せ}辞{じ}抜{ぬ}きで言{い}うと、上{じょう}手{ず}だ。', chinese: '不恭維地說，很厲害。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_nuki_ni_shite_nuki_de_1',
                sentence: '冗{じょう}談{だん}（　）話{はな}そう。',
                options: ['抜{ぬ}きで', '抜{ぬ}く', '抜{ぬ}いた', '抜{ぬ}きにして'],
                correctIndex: 0,
                explanation: '省略して話す。'
            },
            {
                id: 'n2_nuki_ni_shite_nuki_de_2',
                sentence: '挨{あい}拶{さつ}を（　）本{ほん}題{だい}に入{はい}る。',
                options: ['抜{ぬ}きにして', '抜{ぬ}く', '抜{ぬ}きで', '抜{ぬ}いた'],
                correctIndex: 0,
                explanation: '「抜きにして」。'
            },
            {
                id: 'n2_nuki_ni_shite_nuki_de_3',
                sentence: 'お世{せ}辞{じ}（　）言{い}うと、上{じょう}手{ず}だ。',
                options: ['抜{ぬ}きで', '抜{ぬ}く', '抜{ぬ}いた', '抜{ぬ}きにして'],
                correctIndex: 0,
                explanation: '「抜きで」= 省略。'
            }
        ]
    },
    'n2_nuku': {
        id: 'n2_nuku',
        pattern: '抜{ぬ}く',
        connection: '動{どう}詞{し}ます形{けい}（去{きょ}ます）+ 抜{ぬ}く',
        translation: '做完; 徹底地...; 極其...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '最後までやり通す',
                description: '困難でも最後までやり抜くことを表す。',
                examples: [
                    { japanese: 'マラソンを走{はし}り抜{ぬ}いた。', chinese: '跑完馬拉松。' },
                    { japanese: '困{こん}難{なん}を乗{の}り越{こ}えて戦{たたか}い抜{ぬ}いた。', chinese: '克服困難奮戰到底。' },
                    { japanese: '最{さい}後{ご}までやり抜{ぬ}く。', chinese: '做到最後。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_nuku_1',
                sentence: 'マラソンを走{はし}り（　）。',
                options: ['抜{ぬ}いた', '抜{ぬ}き', '抜{ぬ}かず', '抜{ぬ}く'],
                correctIndex: 0,
                explanation: '最後まで。'
            },
            {
                id: 'n2_nuku_2',
                sentence: '困{こん}難{なん}を乗{の}り越{こ}えて戦{たたか}い（　）。',
                options: ['抜{ぬ}いた', '抜{ぬ}き', '抜{ぬ}かず', '抜{ぬ}く'],
                correctIndex: 0,
                explanation: 'やり通す。'
            },
            {
                id: 'n2_nuku_3',
                sentence: '最{さい}後{ご}までやり（　）。',
                options: ['抜{ぬ}く', '抜{ぬ}いた', '抜{ぬ}き', '抜{ぬ}かず'],
                correctIndex: 0,
                explanation: '基本形の使用。'
            }
        ]
    },
    'n2_nuku_1': {
        id: 'n2_nuku_1',
        pattern: '抜{ぬ}く',
        connection: '動{どう}詞{し}ます形{けい}（去{きょ}ます）+ 抜{ぬ}く',
        translation: '堅持到底',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '貫き通す',
                description: '最後まで続けることを表す。',
                examples: [
                    { japanese: '練{れん}習{しゅう}を続{つづ}け抜{ぬ}いた。', chinese: '把練習堅持到底。' },
                    { japanese: '仕{し}事{ごと}をやり抜{ぬ}いた。', chinese: '把工作完成到底。' },
                    { japanese: 'ゴールまで走{はし}り抜{ぬ}く。', chinese: '跑到終點。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_nuku_1_1',
                sentence: '練{れん}習{しゅう}を続{つづ}け（　）。',
                options: ['抜{ぬ}いた', '抜{ぬ}き', '抜{ぬ}かず', '抜{ぬ}く'],
                correctIndex: 0,
                explanation: '最後まで続ける。'
            },
            {
                id: 'n2_nuku_1_2',
                sentence: '仕{し}事{ごと}をやり（　）。',
                options: ['抜{ぬ}いた', '抜{ぬ}き', '抜{ぬ}かず', '抜{ぬ}く'],
                correctIndex: 0,
                explanation: '完遂の表現。'
            },
            {
                id: 'n2_nuku_1_3',
                sentence: 'ゴールまで走{はし}り（　）。',
                options: ['抜{ぬ}く', '抜{ぬ}いた', '抜{ぬ}き', '抜{ぬ}かず'],
                correctIndex: 0,
                explanation: '意志を表す。'
            }
        ]
    },
    'n2_o_keiki_ni': {
        id: 'n2_o_keiki_ni',
        pattern: 'を契{けい}機{き}に',
        connection: '名{めい}詞{し} + を契{けい}機{き}に',
        translation: '以...為契機; 趁著...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: 'きっかけになる出来事',
                description: 'ある出来事を機に変化が起こる。',
                examples: [
                    { japanese: '入{にゅう}学{がく}を契{けい}機{き}に一{ひと}人{り}暮{ぐ}らしを始{はじ}めた。', chinese: '以入學為契機開始獨居。' },
                    { japanese: '事{じ}故{こ}を契{けい}機{き}に安{あん}全{ぜん}意{い}識{しき}が高{たか}まった。', chinese: '以事故為契機安全意識提高。' },
                    { japanese: '引{いん}越{こ}しを契{けい}機{き}に新{あたら}しい生{せい}活{かつ}が始{はじ}まった。', chinese: '以搬家為契機開始新生活。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_o_keiki_ni_1',
                sentence: '入{にゅう}学{がく}を（　）一{ひと}人{り}暮{ぐ}らしを始{はじ}めた。',
                options: ['契{けい}機{き}に', '基{もと}づいて', '応{こた}えて', '向{む}かって'],
                correctIndex: 0,
                explanation: 'きっかけの表現。'
            },
            {
                id: 'n2_o_keiki_ni_2',
                sentence: '事{じ}故{こ}を（　）安{あん}全{ぜん}意{い}識{しき}が高{たか}まった。',
                options: ['契{けい}機{き}に', '応{おう}じて', '関{かかわ}らず', '際{さい}して'],
                correctIndex: 0,
                explanation: '「〜を契機に」。'
            },
            {
                id: 'n2_o_keiki_ni_3',
                sentence: '引{いん}越{こ}しを（　）新{あたら}しい生{せい}活{かつ}が始{はじ}まった。',
                options: ['契{けい}機{き}に', '応{こた}えて', '基{もと}づいて', '加{くわ}えて'],
                correctIndex: 0,
                explanation: '変化のきっかけ。'
            }
        ]
    },
    'n2_o_keiki_ni_1': {
        id: 'n2_o_keiki_ni_1',
        pattern: 'を契{けい}機{き}に',
        connection: '名{めい}詞{し} + を契{けい}機{き}に',
        translation: '以...為開端; 乘機...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '変化の始まり',
                description: 'ある出来事がきっかけで新しい状況が始まる。',
                examples: [
                    { japanese: '転{てん}職{しょく}を契{けい}機{き}に住{す}む場{ば}所{しょ}を変{か}えた。', chinese: '以轉職為契機改變居住地。' },
                    { japanese: '病{びょう}気{き}を契{けい}機{き}に生{せい}活{かつ}を見{み}直{なお}した。', chinese: '以生病為契機重新檢視生活。' },
                    { japanese: '結{けっ}婚{こん}を契{けい}機{き}に引{ひ}っ越{こ}した。', chinese: '以結婚為契機搬家。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_o_keiki_ni_1_1',
                sentence: '転{てん}職{しょく}を（　）住{す}む場{ば}所{しょ}を変{か}えた。',
                options: ['契{けい}機{き}に', '基{もと}づいて', '応{こた}えて', '向{む}かって'],
                correctIndex: 0,
                explanation: 'きっかけの表現。'
            },
            {
                id: 'n2_o_keiki_ni_1_2',
                sentence: '病{びょう}気{き}を（　）生{せい}活{かつ}を見{み}直{なお}した。',
                options: ['契{けい}機{き}に', '応{おう}じて', '関{かかわ}らず', '際{さい}して'],
                correctIndex: 0,
                explanation: '変化のきっかけ。'
            },
            {
                id: 'n2_o_keiki_ni_1_3',
                sentence: '結{けっ}婚{こん}を（　）引{ひ}っ越{こ}した。',
                options: ['契{けい}機{き}に', '応{こた}えて', '基{もと}づいて', '加{くわ}えて'],
                correctIndex: 0,
                explanation: '新しい始まり。'
            }
        ]
    },
    'n2_o_megutte': {
        id: 'n2_o_megutte',
        pattern: 'をめぐって',
        connection: '名{めい}詞{し} + をめぐって',
        translation: '圍繞著...; 就... (爭論/問題)',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '議論・問題の中心',
                description: 'あるテーマを中心に議論・対立が起こる。',
                examples: [
                    { japanese: '新{あたら}しい計{けい}画{かく}をめぐって会{かい}議{ぎ}が開{ひら}かれた。', chinese: '圍繞新計畫召開會議。' },
                    { japanese: '土{と}地{ち}をめぐって争{あらそ}いが起{お}きた。', chinese: '圍繞土地發生爭議。' },
                    { japanese: 'その問{もん}題{だい}をめぐって意{い}見{けん}が分{わ}かれた。', chinese: '就那個問題意見分歧。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_o_megutte_1',
                sentence: '新{あたら}しい計{けい}画{かく}を（　）会{かい}議{ぎ}が開{ひら}かれた。',
                options: ['めぐって', 'もとに', 'のぞいて', 'とわず'],
                correctIndex: 0,
                explanation: '議論の中心。'
            },
            {
                id: 'n2_o_megutte_2',
                sentence: '土{と}地{ち}を（　）争{あらそ}いが起{お}きた。',
                options: ['めぐって', 'もとに', 'のぞいて', 'とわず'],
                correctIndex: 0,
                explanation: '争いの対象。'
            },
            {
                id: 'n2_o_megutte_3',
                sentence: '問{もん}題{だい}を（　）意{い}見{けん}が分{わ}かれた。',
                options: ['めぐって', 'もとに', 'のぞいて', 'とわず'],
                correctIndex: 0,
                explanation: 'テーマを中心に。'
            }
        ]
    },
    'n2_o_moto_ni': {
        id: 'n2_o_moto_ni',
        pattern: 'をもとに',
        connection: '名{めい}詞{し} + をもとに',
        translation: '以...為基礎; 根據...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '基礎・材料',
                description: '資料や事実を基にして作ることを表す。',
                examples: [
                    { japanese: '実{じっ}話{わ}をもとに映{えい}画{が}が作{つく}られた。', chinese: '電影以真實故事為基礎。' },
                    { japanese: 'データをもとに計{けい}画{かく}を立{た}てた。', chinese: '根據數據制定計畫。' },
                    { japanese: 'ア{あ}ンケ{んけ}ートをもとに改{かい}善{ぜん}した。', chinese: '根據問卷進行改善。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_o_moto_ni_1',
                sentence: '実{じっ}話{わ}を（　）映{えい}画{が}が作{つく}られた。',
                options: ['もとに', 'めぐって', 'のぞいて', 'とわず'],
                correctIndex: 0,
                explanation: '基礎にする。'
            },
            {
                id: 'n2_o_moto_ni_2',
                sentence: 'データを（　）計{けい}画{かく}を立{た}てた。',
                options: ['もとに', 'めぐって', 'のぞいて', 'とわず'],
                correctIndex: 0,
                explanation: '根拠にする。'
            },
            {
                id: 'n2_o_moto_ni_3',
                sentence: 'アンケートを（　）改{かい}善{ぜん}した。',
                options: ['もとに', 'めぐって', 'のぞいて', 'とわず'],
                correctIndex: 0,
                explanation: '材料を基に。'
            }
        ]
    },
    'n2_o_nozoite': {
        id: 'n2_o_nozoite',
        pattern: 'を除{のぞ}いて',
        connection: '名{めい}詞{し} + を除{のぞ}いて',
        translation: '除了...之外',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '除外',
                description: 'あるものを除いて範囲を示す。',
                examples: [
                    { japanese: '日{に}曜{よう}日{び}を除{のぞ}いて毎{まい}日{にち}開{あ}いている。', chinese: '除了星期日每天都開。' },
                    { japanese: '雨{あめ}の日{ひ}を除{のぞ}いて運{うん}動{どう}している。', chinese: '除了下雨天都在運動。' },
                    { japanese: '彼{かれ}を除{のぞ}いて全{ぜん}員{いん}が参{さん}加{か}した。', chinese: '除了他以外全員參加。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_o_nozoite_1',
                sentence: '日{に}曜{よう}日{び}を（　）毎{まい}日{にち}開{あ}いている。',
                options: ['除{のぞ}いて', 'めぐって', 'もとに', 'とわず'],
                correctIndex: 0,
                explanation: '除外の表現。'
            },
            {
                id: 'n2_o_nozoite_2',
                sentence: '雨{あめ}の日{ひ}を（　）運{うん}動{どう}している。',
                options: ['除{のぞ}いて', 'めぐって', 'もとに', 'とわず'],
                correctIndex: 0,
                explanation: '「〜を除いて」。'
            },
            {
                id: 'n2_o_nozoite_3',
                sentence: '彼{かれ}を（　）全{ぜん}員{いん}が参{さん}加{か}した。',
                options: ['除{のぞ}いて', 'めぐって', 'もとに', 'とわず'],
                correctIndex: 0,
                explanation: '特定を除外。'
            }
        ]
    },
    'n2_o_nozoite_1': {
        id: 'n2_o_nozoite_1',
        pattern: 'を除{のぞ}いて',
        connection: '名{めい}詞{し} + を除{のぞ}いて',
        translation: '除...之外',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '除外して',
                description: 'ある要素を除いて話す。',
                examples: [
                    { japanese: '祝{しゅく}日{じつ}を除{のぞ}いて営{えい}業{ぎょう}している。', chinese: '除了國定假日都營業。' },
                    { japanese: '欠{けっ}席{せき}者{しゃ}を除{のぞ}いて写{しゃ}真{しん}を撮{と}った。', chinese: '除缺席者外拍照。' },
                    { japanese: '彼{かれ}を除{のぞ}いて全{ぜん}員{いん}賛{さん}成{せい}だ。', chinese: '除了他以外全員贊成。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_o_nozoite_1_1',
                sentence: '祝{しゅく}日{じつ}を（　）営{えい}業{ぎょう}している。',
                options: ['除{のぞ}いて', 'めぐって', 'もとに', 'とわず'],
                correctIndex: 0,
                explanation: '除外を示す。'
            },
            {
                id: 'n2_o_nozoite_1_2',
                sentence: '欠{けっ}席{せき}者{しゃ}を（　）写{しゃ}真{しん}を撮{と}った。',
                options: ['除{のぞ}いて', 'めぐって', 'もとに', 'とわず'],
                correctIndex: 0,
                explanation: '「〜を除いて」。'
            },
            {
                id: 'n2_o_nozoite_1_3',
                sentence: '彼{かれ}を（　）全{ぜん}員{いん}賛{さん}成{せい}だ。',
                options: ['除{のぞ}いて', 'めぐって', 'もとに', 'とわず'],
                correctIndex: 0,
                explanation: '特定を除外。'
            }
        ]
    },
    'n2_o_towazu': {
        id: 'n2_o_towazu',
        pattern: 'を問{と}わず',
        connection: '名{めい}詞{し} + を問{と}わず',
        translation: '不管...; 無論... (皆可)',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '条件を問わない',
                description: '年齢・性別などを問わず適用されることを表す。',
                examples: [
                    { japanese: '年{ねん}齢{れい}を問{と}わず参{さん}加{か}できる。', chinese: '不分年齡皆可參加。' },
                    { japanese: '経{けい}験{けん}を問{と}わず募{ぼ}集{しゅう}する。', chinese: '不問經驗徵募。' },
                    { japanese: '性{せい}別{べつ}を問{と}わず採{さい}用{よう}する。', chinese: '不分性別錄用。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_o_towazu_1',
                sentence: '年{ねん}齢{れい}を（　）参{さん}加{か}できる。',
                options: ['問{と}わず', '除{のぞ}いて', 'もとに', 'めぐって'],
                correctIndex: 0,
                explanation: '条件を問わない。'
            },
            {
                id: 'n2_o_towazu_2',
                sentence: '経{けい}験{けん}を（　）募{ぼ}集{しゅう}する。',
                options: ['問{と}わず', '除{のぞ}いて', 'もとに', 'めぐって'],
                correctIndex: 0,
                explanation: '「〜を問わず」。'
            },
            {
                id: 'n2_o_towazu_3',
                sentence: '性{せい}別{べつ}を（　）採{さい}用{よう}する。',
                options: ['問{と}わず', '除{のぞ}いて', 'もとに', 'めぐって'],
                correctIndex: 0,
                explanation: '条件に関係なく。'
            }
        ]
    },
    'n2_o_towazu_1': {
        id: 'n2_o_towazu_1',
        pattern: 'を問{と}わず',
        connection: '名{めい}詞{し} + を問{と}わず',
        translation: '不分...; 無論...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '条件に関係なく',
                description: '条件を限定しない表現。',
                examples: [
                    { japanese: '国{くに}籍{せき}を問{と}わず募{ぼ}集{しゅう}する。', chinese: '不問國籍徵募。' },
                    { japanese: '学{がく}歴{れき}を問{と}わず採{さい}用{よう}する。', chinese: '不問學歷錄用。' },
                    { japanese: '昼{ひる}夜{よる}を問{と}わず営{えい}業{ぎょう}している。', chinese: '不分晝夜營業。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_o_towazu_1_1',
                sentence: '国{くに}籍{せき}を（　）募{ぼ}集{しゅう}する。',
                options: ['問{と}わず', '除{のぞ}いて', 'もとに', 'めぐって'],
                correctIndex: 0,
                explanation: '限定しない。'
            },
            {
                id: 'n2_o_towazu_1_2',
                sentence: '学{がく}歴{れき}を（　）採{さい}用{よう}する。',
                options: ['問{と}わず', '除{のぞ}いて', 'もとに', 'めぐって'],
                correctIndex: 0,
                explanation: '条件不問。'
            },
            {
                id: 'n2_o_towazu_1_3',
                sentence: '昼{ひる}夜{よる}を（　）営{えい}業{ぎょう}している。',
                options: ['問{と}わず', '除{のぞ}いて', 'もとに', 'めぐって'],
                correctIndex: 0,
                explanation: '不分時間。'
            }
        ]
    },
    'n2_omake_ni': {
        id: 'n2_omake_ni',
        pattern: 'おまけに',
        connection: 'おまけに + 文{ぶん}',
        translation: '加上; 而且; 況且',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '悪いことの追加',
                description: '不利な内容にさらに悪い事を加えることが多い。',
                examples: [
                    { japanese: '雨{あめ}が降{ふ}って、しかも寒{さむ}い。おまけに風{かぜ}も強{つよ}い。', chinese: '下雨又很冷，還加上風很大。' },
                    { japanese: '遅{おそ}刻{こく}した。おまけに宿{しゅく}題{だい}も忘{わす}れた。', chinese: '遲到，還忘了作業。' },
                    { japanese: '値{ね}段{だん}が高{たか}い。おまけに味{あじ}もよくない。', chinese: '價格高，還不好吃。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_omake_ni_1',
                sentence: '雨{あめ}が降{ふ}って寒{さむ}い。（　）風{かぜ}も強{つよ}い。',
                options: ['おまけに', 'おそらく', 'および', 'をもとに'],
                correctIndex: 0,
                explanation: 'さらに悪いことを追加。'
            },
            {
                id: 'n2_omake_ni_2',
                sentence: '遅{おそ}刻{こく}した。（　）宿{しゅく}題{だい}も忘{わす}れた。',
                options: ['おまけに', 'おそらく', 'および', 'を問{と}わず'],
                correctIndex: 0,
                explanation: '悪いことの追加。'
            },
            {
                id: 'n2_omake_ni_3',
                sentence: '値{ね}段{だん}が高{たか}い。（　）味{あじ}もよくない。',
                options: ['おまけに', 'および', 'おそらく', 'を除{のぞ}いて'],
                correctIndex: 0,
                explanation: 'さらに不利な点。'
            }
        ]
    },
    'n2_osoraku': {
        id: 'n2_osoraku',
        pattern: '恐{おそ}らく',
        connection: '恐{おそ}らく + 文{ぶん}',
        translation: '恐怕; 恐怕是... (推測)',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '推測を表す',
                description: '確実ではないが可能性が高いと判断する時に使う。',
                examples: [
                    { japanese: '恐{おそ}らく彼{かれ}は来{こ}ないだろう。', chinese: '恐怕他不會來。' },
                    { japanese: '恐{おそ}らく明{あ}日は雨{あめ}になる。', chinese: '恐怕明天會下雨。' },
                    { japanese: '恐{おそ}らく道{みち}が混{こ}んでいる。', chinese: '恐怕路上很塞。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_osoraku_1',
                sentence: '（　）彼{かれ}は来{こ}ないだろう。',
                options: ['恐{おそ}らく', 'および', 'おまけに', 'をもとに'],
                correctIndex: 0,
                explanation: '推測の副詞。'
            },
            {
                id: 'n2_osoraku_2',
                sentence: '恐{おそ}らく明{あ}日は雨{あめ}に（　）。',
                options: ['なる', 'なるな', 'なるまい', 'なるか'],
                correctIndex: 0,
                explanation: '推測の文。'
            },
            {
                id: 'n2_osoraku_3',
                sentence: '恐{おそ}らく道{みち}が（　）。',
                options: ['混{こ}んでいる', '混{こ}む', '混{こ}んだ', '混{こ}め'],
                correctIndex: 0,
                explanation: '現在の推測。'
            }
        ]
    },
    'n2_osoraku_1': {
        id: 'n2_osoraku_1',
        pattern: '恐{おそ}らく',
        connection: '恐{おそ}らく + 文{ぶん}',
        translation: '恐怕; 大概',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '高い可能性の推測',
                description: '確信はないが、かなり高い確率でそうだと考える。',
                examples: [
                    { japanese: '恐{おそ}らく彼{かれ}は知{し}っている。', chinese: '恐怕他知道。' },
                    { japanese: '恐{おそ}らく間{ま}に合{あ}わない。', chinese: '恐怕來不及。' },
                    { japanese: '恐{おそ}らく彼{かれ}は忙{いそ}しい。', chinese: '恐怕他很忙。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_osoraku_1_1',
                sentence: '恐{おそ}らく彼{かれ}は（　）。',
                options: ['知{し}っている', '知{し}る', '知{し}った', '知{し}れ'],
                correctIndex: 0,
                explanation: '推測の文。'
            },
            {
                id: 'n2_osoraku_1_2',
                sentence: '恐{おそ}らく間{ま}に合{あ}わ（　）。',
                options: ['ない', 'ないで', 'なく', 'なかった'],
                correctIndex: 0,
                explanation: '否定の推測。'
            },
            {
                id: 'n2_osoraku_1_3',
                sentence: '恐{おそ}らく彼{かれ}は忙{いそ}しい。',
                options: ['恐{おそ}らく', 'および', 'おまけに', 'をもとに'],
                correctIndex: 0,
                explanation: '推測を表す。'
            }
        ]
    },
    'n2_osore_ga_aru': {
        id: 'n2_osore_ga_aru',
        pattern: '恐{おそ}れがある',
        connection: '動{どう}詞{し}辞{じ}書{しょ}形{けい} + 恐{おそ}れがある\n名{めい}詞{し} + の + 恐{おそ}れがある',
        translation: '恐怕會...; 有...的危險',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '悪い可能性',
                description: '好ましくない結果が起こる可能性を示す。',
                examples: [
                    { japanese: '台{たい}風{ふう}で電{でん}車{しゃ}が止{と}まる恐{おそ}れがある。', chinese: '颱風可能導致電車停駛。' },
                    { japanese: 'その薬{くすり}には副{ふく}作{さ}用{よう}の恐{おそ}れがある。', chinese: '那種藥有副作用的風險。' },
                    { japanese: '事{じ}故{こ}が起{お}こる恐{おそ}れがある。', chinese: '可能發生事故。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_osore_ga_aru_1',
                sentence: '台{たい}風{ふう}で電{でん}車{しゃ}が止{と}まる（　）。',
                options: ['恐{おそ}れがある', '恐{おそ}らく', 'および', 'おまけに'],
                correctIndex: 0,
                explanation: '悪い可能性。'
            },
            {
                id: 'n2_osore_ga_aru_2',
                sentence: '副{ふく}作{さ}用{よう}の（　）がある。',
                options: ['恐{おそ}れ', '恐{おそ}らく', 'および', 'おまけに'],
                correctIndex: 0,
                explanation: '名詞+の恐れがある。'
            },
            {
                id: 'n2_osore_ga_aru_3',
                sentence: '事{じ}故{こ}が起{お}こる（　）。',
                options: ['恐{おそ}れがある', '恐{おそ}らく', 'および', 'をもとに'],
                correctIndex: 0,
                explanation: '危険性を示す。'
            }
        ]
    },
    'n2_osore_ga_aru_1': {
        id: 'n2_osore_ga_aru_1',
        pattern: '恐{おそ}れがある',
        connection: '動{どう}詞{し}辞{じ}書{しょ}形{けい} + 恐{おそ}れがある\n名{めい}詞{し} + の + 恐{おそ}れがある',
        translation: '有...的危險',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: 'リスクの表現',
                description: '危険や悪い結果の可能性を表す。',
                examples: [
                    { japanese: '洪{こう}水{ずい}の恐{おそ}れがある。', chinese: '有洪水的風險。' },
                    { japanese: '健{けん}康{こう}に悪{わる}影{えい}響{きょう}が出{で}る恐{おそ}れがある。', chinese: '有對健康造成不良影響的風險。' },
                    { japanese: '計{けい}画{かく}が中{ちゅう}止{し}になる恐{おそ}れがある。', chinese: '計畫可能中止。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_osore_ga_aru_1_1',
                sentence: '洪{こう}水{ずい}の（　）がある。',
                options: ['恐{おそ}れ', '恐{おそ}らく', 'および', 'おまけに'],
                correctIndex: 0,
                explanation: '名詞+の恐れがある。'
            },
            {
                id: 'n2_osore_ga_aru_1_2',
                sentence: '健{けん}康{こう}に悪{わる}影{えい}響{きょう}が出{で}る（　）。',
                options: ['恐{おそ}れがある', '恐{おそ}らく', 'および', 'をもとに'],
                correctIndex: 0,
                explanation: '危険性の表現。'
            },
            {
                id: 'n2_osore_ga_aru_1_3',
                sentence: '計{けい}画{かく}が中{ちゅう}止{し}になる（　）。',
                options: ['恐{おそ}れがある', '恐{おそ}らく', 'および', 'おまけに'],
                correctIndex: 0,
                explanation: '悪い結果の可能性。'
            }
        ]
    },
    'n2_oyobi': {
        id: 'n2_oyobi',
        pattern: '及{およ}び',
        connection: '名{めい}詞{し} + 及{およ}び + 名{めい}詞{し}',
        translation: '以及; 和',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '並列の書面表現',
                description: '「そして」「および」は書面で使う「と」の意味。',
                examples: [
                    { japanese: '氏{し}名{めい}及{およ}び住{じゅう}所{しょ}を記{き}入{にゅう}してください。', chinese: '請填寫姓名及住所。' },
                    { japanese: '会{かい}場{じょう}は東{とう}京{きょう}及{およ}び大{おお}阪{さか}です。', chinese: '會場在東京及大阪。' },
                    { japanese: '社{しゃ}内{ない}規{き}程{てい}及{およ}びガイドラインに従{したが}う。', chinese: '遵守公司規章及指南。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_oyobi_1',
                sentence: '氏{し}名{めい}（　）住{じゅう}所{しょ}を記{き}入{にゅう}してください。',
                options: ['及{およ}び', 'おまけに', 'おそらく', 'をもとに'],
                correctIndex: 0,
                explanation: '書面の並列。'
            },
            {
                id: 'n2_oyobi_2',
                sentence: '会{かい}場{じょう}は東{とう}京{きょう}（　）大{おお}阪{さか}です。',
                options: ['及{およ}び', 'おまけに', 'おそらく', 'を問{と}わず'],
                correctIndex: 0,
                explanation: '「及び」= そして。'
            },
            {
                id: 'n2_oyobi_3',
                sentence: '規{き}程{てい}（　）ガイドラインに従{したが}う。',
                options: ['及{およ}び', 'おそらく', 'おまけに', 'を除{のぞ}いて'],
                correctIndex: 0,
                explanation: '並列の書面表現。'
            }
        ]
    },
    'n2_oyobi_1': {
        id: 'n2_oyobi_1',
        pattern: '及{およ}び',
        connection: '名{めい}詞{し} + 及{およ}び + 名{めい}詞{し}',
        translation: '以及',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '公的な並列',
                description: '書面や正式な文で使う並列の表現。',
                examples: [
                    { japanese: '連{れん}絡{らく}先{さき}及{およ}び担{たん}当{とう}者{しゃ}を記{き}入{にゅう}する。', chinese: '填寫聯絡方式及負責人。' },
                    { japanese: '開{かい}催{さい}日{び}は土{ど}曜{よう}及{およ}び日{にち}曜{よう}です。', chinese: '舉辦日為週六及週日。' },
                    { japanese: '資{し}料{りょう}及{およ}び関{かん}連{れん}書{しょ}類{るい}を提{てい}出{しゅつ}する。', chinese: '提交資料及相關文件。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_oyobi_1_1',
                sentence: '連{れん}絡{らく}先{さき}（　）担{たん}当{とう}者{しゃ}を記{き}入{にゅう}する。',
                options: ['及{およ}び', 'おまけに', 'おそらく', 'をもとに'],
                correctIndex: 0,
                explanation: '正式な並列。'
            },
            {
                id: 'n2_oyobi_1_2',
                sentence: '開{かい}催{さい}日{び}は土{ど}曜{よう}（　）日{にち}曜{よう}です。',
                options: ['及{およ}び', 'おまけに', 'おそらく', 'を問{と}わず'],
                correctIndex: 0,
                explanation: '「及び」= そして。'
            },
            {
                id: 'n2_oyobi_1_3',
                sentence: '資{し}料{りょう}（　）関{かん}連{れん}書{しょ}類{るい}を提{てい}出{しゅつ}する。',
                options: ['及{およ}び', 'おそらく', 'おまけに', 'を除{のぞ}いて'],
                correctIndex: 0,
                explanation: '書面の並列。'
            }
        ]
    },
    'n2_o_negau': {
        id: 'n2_o_negau',
        pattern: 'お〜願{ねが}う',
        connection: 'お + 動{どう}詞{し}ます形{けい} + 願{ねが}う',
        translation: '請... (敬語)',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '丁寧な依頼',
                description: '書き言葉で丁寧に依頼する。',
                examples: [
                    { japanese: 'ご理{り}解{かい}とご協{きょう}力{りょく}をお願{ねが}いいたします。', chinese: '敬請理解與合作。' },
                    { japanese: 'ご確{かく}認{にん}をお願{ねが}いします。', chinese: '請您確認。' },
                    { japanese: 'お問{と}い合{あ}わせはメールでお願{ねが}いいたします。', chinese: '洽詢請用郵件。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_o_negau_1',
                sentence: 'ご協{きょう}力{りょく}を（　）いたします。',
                options: ['お願{ねが}い', 'おまけに', 'おそらく', 'および'],
                correctIndex: 0,
                explanation: '丁寧な依頼。'
            },
            {
                id: 'n2_o_negau_2',
                sentence: 'ご確{かく}認{にん}を（　）します。',
                options: ['お願{ねが}い', 'おそらく', 'おまけに', 'をもとに'],
                correctIndex: 0,
                explanation: '「お願いいたします」。'
            },
            {
                id: 'n2_o_negau_3',
                sentence: 'お問{と}い合{あ}わせはメールで（　）いたします。',
                options: ['お願{ねが}い', 'および', 'おまけに', 'を問{と}わず'],
                correctIndex: 0,
                explanation: '敬語の依頼表現。'
            }
        ]
    },
    'n2_o_negau_1': {
        id: 'n2_o_negau_1',
        pattern: 'お〜願{ねが}う',
        connection: 'お + 動{どう}詞{し}ます形{けい} + 願{ねが}う',
        translation: '請... (委婉請求)',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '書面の依頼',
                description: 'ビジネス文書などで丁寧にお願いする。',
                examples: [
                    { japanese: 'ご連{れん}絡{らく}をお願{ねが}い申{もう}し上{あ}げます。', chinese: '敬請聯絡。' },
                    { japanese: 'ご確{かく}認{にん}のほどお願{ねが}い申{もう}し上{あ}げます。', chinese: '敬請確認。' },
                    { japanese: 'ご配{はい}慮{りょ}のほどお願{ねが}いいたします。', chinese: '敬請體諒。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_o_negau_1_1',
                sentence: 'ご連{れん}絡{らく}を（　）申{もう}し上{あ}げます。',
                options: ['お願{ねが}い', 'おまけに', 'おそらく', 'および'],
                correctIndex: 0,
                explanation: '依頼の表現。'
            },
            {
                id: 'n2_o_negau_1_2',
                sentence: 'ご確{かく}認{にん}のほど（　）申{もう}し上{あ}げます。',
                options: ['お願{ねが}い', 'おそらく', 'おまけに', 'をもとに'],
                correctIndex: 0,
                explanation: '丁寧な依頼。'
            },
            {
                id: 'n2_o_negau_1_3',
                sentence: 'ご配{はい}慮{りょ}のほど（　）いたします。',
                options: ['お願{ねが}い', 'および', 'おまけに', 'を問{と}わず'],
                correctIndex: 0,
                explanation: '書面の敬語。'
            }
        ]
    },
    'n2_roku_ni_nai': {
        id: 'n2_roku_ni_nai',
        pattern: 'ろくに～ない',
        connection: 'ろくに + 動{どう}詞{し}ない形{けい}',
        translation: '不好好地...; 沒怎麼...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '十分でない',
                description: '十分に行わない、またはほとんどしないことを表す。',
                examples: [
                    { japanese: 'ろくに勉{べん}強{きょう}しないで試{し}験{けん}を受{う}けた。', chinese: '沒怎麼讀書就去考試。' },
                    { japanese: '忙{いそ}しくてろくに寝{ね}ていない。', chinese: '太忙幾乎沒睡。' },
                    { japanese: 'ろくに説{せつ}明{めい}も聞{き}かずに決{き}めた。', chinese: '沒怎麼聽說明就決定了。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_roku_ni_nai_1',
                sentence: 'ろくに勉{べん}強{きょう}しないで試{し}験{けん}を受{う}けた。',
                options: ['ろくに', 'せいか', 'せっかく', 'せめて'],
                correctIndex: 0,
                explanation: '不充分的意思。'
            },
            {
                id: 'n2_roku_ni_nai_2',
                sentence: '忙{いそ}しくてろくに寝{ね}て（　）。',
                options: ['いない', 'いる', 'いた', 'いて'],
                correctIndex: 0,
                explanation: '「ろくに〜ない」。'
            },
            {
                id: 'n2_roku_ni_nai_3',
                sentence: 'ろくに説{せつ}明{めい}も聞{き}か（　）決{き}めた。',
                options: ['ずに', 'ないで', 'ないと', 'なくて'],
                correctIndex: 0,
                explanation: '「聞かずに」。'
            }
        ]
    },
    'n2_saiwai': {
        id: 'n2_saiwai',
        pattern: '幸{さい}いなことに',
        connection: '幸{さい}いなことに + 文{ぶん}',
        translation: '幸運的是...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '良い結果を述べる',
                description: '良い出来事が起きたことを伝える。',
                examples: [
                    { japanese: '幸{さい}いなことに、雨{あめ}は止{や}んだ。', chinese: '幸運的是，雨停了。' },
                    { japanese: '幸{さい}いなことに、けがはなかった。', chinese: '幸運的是，沒有受傷。' },
                    { japanese: '幸{さい}いなことに、電{でん}車{しゃ}が遅{おく}れて助{たす}かった。', chinese: '幸好電車延誤了。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_saiwai_1',
                sentence: '幸{さい}いなことに、雨{あめ}は止{や}んだ。',
                options: ['幸{さい}いなことに', 'せいか', 'せっかく', 'せめて'],
                correctIndex: 0,
                explanation: '良い結果を導入。'
            },
            {
                id: 'n2_saiwai_2',
                sentence: '幸{さい}いなことに、けがは（　）。',
                options: ['なかった', 'あった', 'ある', 'あって'],
                correctIndex: 0,
                explanation: '良い結果。'
            },
            {
                id: 'n2_saiwai_3',
                sentence: '幸{さい}いなことに、電{でん}車{しゃ}が遅{おく}れて（　）。',
                options: ['助{たす}かった', '助{たす}ける', '助{たす}かる', '助{たす}けた'],
                correctIndex: 0,
                explanation: '「助かった」。'
            }
        ]
    },
    'n2_saiwai_na_koto_ni': {
        id: 'n2_saiwai_na_koto_ni',
        pattern: '幸{さい}いなことに',
        connection: '幸{さい}いなことに + 文{ぶん}',
        translation: '謝天謝地; 幸好',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '幸運な状況',
                description: '良い結果が起きたことを強調する。',
                examples: [
                    { japanese: '幸{さい}いなことに、間{ま}に合{あ}った。', chinese: '幸好趕上了。' },
                    { japanese: '幸{さい}いなことに、雨{あめ}が止{や}んだ。', chinese: '幸好雨停了。' },
                    { japanese: '幸{さい}いなことに、みんな無{ぶ}事{じ}だった。', chinese: '謝天謝地大家都平安。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_saiwai_na_koto_ni_1',
                sentence: '幸{さい}いなことに、間{ま}に（　）。',
                options: ['合{あ}った', '合{あ}う', '合{あ}って', '合{あ}わない'],
                correctIndex: 0,
                explanation: '過去の良い結果。'
            },
            {
                id: 'n2_saiwai_na_koto_ni_2',
                sentence: '幸{さい}いなことに、雨{あめ}が（　）。',
                options: ['止{や}んだ', '止{や}む', '止{や}んで', '止{や}まない'],
                correctIndex: 0,
                explanation: '幸運な出来事。'
            },
            {
                id: 'n2_saiwai_na_koto_ni_3',
                sentence: '幸{さい}いなことに、みんな無{ぶ}事{じ}（　）。',
                options: ['だった', 'だ', 'で', 'ではない'],
                correctIndex: 0,
                explanation: '過去の状況。'
            }
        ]
    },
    'n2_sei_ka': {
        id: 'n2_sei_ka',
        pattern: 'せいか',
        connection: '普{ふ}通{つう}形{けい} + せいか',
        translation: '也許是因為... (導致)',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '原因推測',
                description: 'はっきりしない原因を推測して述べる。',
                examples: [
                    { japanese: '疲{つか}れたせいか、頭{あたま}が痛{いた}い。', chinese: '可能因為累了，頭痛。' },
                    { japanese: '緊{きん}張{ちょう}したせいか、声{こえ}が震{ふる}える。', chinese: '可能因為緊張，聲音發抖。' },
                    { japanese: '雨{あめ}のせいか、客{きゃく}が少{すく}ない。', chinese: '可能因為下雨，客人很少。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_sei_ka_1',
                sentence: '疲{つか}れた（　）、頭{あたま}が痛{いた}い。',
                options: ['せいか', 'せっかく', 'せめて', 'しだい'],
                correctIndex: 0,
                explanation: '原因の推測。'
            },
            {
                id: 'n2_sei_ka_2',
                sentence: '緊{きん}張{ちょう}した（　）、声{こえ}が震{ふる}える。',
                options: ['せいか', 'せっかく', 'せめて', 'しだい'],
                correctIndex: 0,
                explanation: '推測の原因。'
            },
            {
                id: 'n2_sei_ka_3',
                sentence: '雨{あめ}の（　）、客{きゃく}が少{すく}ない。',
                options: ['せいか', 'せっかく', 'せめて', 'しだい'],
                correctIndex: 0,
                explanation: '名詞+の+せいか。'
            }
        ]
    },
    'n2_sekkaku': {
        id: 'n2_sekkaku',
        pattern: 'せっかく',
        connection: 'せっかく + 文{ぶん}',
        translation: '難得; 特意; 好不容易',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '貴重な機会',
                description: '努力や機会が無駄になることを惜しむ。',
                examples: [
                    { japanese: 'せっかく来{き}たのだから、見{み}ていこう。', chinese: '難得來了就看看吧。' },
                    { japanese: 'せっかく作{つく}ったのに、誰{だれ}も食{た}べなかった。', chinese: '好不容易做了卻沒人吃。' },
                    { japanese: 'せっかくの休{やす}みだから、ゆっくり休{やす}む。', chinese: '難得的假期就好好休息。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_sekkaku_1',
                sentence: 'せっかく来{き}たのだから、見{み}ていこう。',
                options: ['せっかく', 'せいか', 'せめて', 'しだい'],
                correctIndex: 0,
                explanation: '貴重な機会。'
            },
            {
                id: 'n2_sekkaku_2',
                sentence: 'せっかく作{つく}ったのに、誰{だれ}も（　）。',
                options: ['食{た}べなかった', '食{た}べる', '食{た}べた', '食{た}べて'],
                correctIndex: 0,
                explanation: '努力が無駄。'
            },
            {
                id: 'n2_sekkaku_3',
                sentence: 'せっかくの休{やす}みだから、ゆっくり（　）。',
                options: ['休{やす}む', '休{やす}んだ', '休{やす}んで', '休{やす}まない'],
                correctIndex: 0,
                explanation: '貴重な休み。'
            }
        ]
    },
    'n2_semete': {
        id: 'n2_semete',
        pattern: 'せめて',
        connection: 'せめて + 文{ぶん}',
        translation: '至少; 起碼 (願望)',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '最低限の希望',
                description: '最低限の条件や希望を表す。',
                examples: [
                    { japanese: 'せめて一{いち}言{ごん}連{れん}絡{らく}してほしかった。', chinese: '至少希望你聯絡一句。' },
                    { japanese: 'せめて今{いま}回{かい}だけは許{ゆる}して。', chinese: '至少這次請原諒。' },
                    { japanese: 'せめて名{な}前{まえ}だけでも覚{おぼ}えてほしい。', chinese: '至少記住名字。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_semete_1',
                sentence: 'せめて一{いち}言{ごん}連{れん}絡{らく}してほしかった。',
                options: ['せめて', 'せいか', 'せっかく', 'しだい'],
                correctIndex: 0,
                explanation: '最低限の希望。'
            },
            {
                id: 'n2_semete_2',
                sentence: 'せめて今{いま}回{かい}だけは（　）。',
                options: ['許{ゆる}して', '許{ゆる}す', '許{ゆる}した', '許{ゆる}さない'],
                correctIndex: 0,
                explanation: '願望の表現。'
            },
            {
                id: 'n2_semete_3',
                sentence: 'せめて名{な}前{まえ}だけでも覚{おぼ}えて（　）。',
                options: ['ほしい', 'ほしいだ', 'ほしく', 'ほしかった'],
                correctIndex: 0,
                explanation: '最低限の願い。'
            }
        ]
    },
    'n2_shidai': {
        id: 'n2_shidai',
        pattern: '次{し}第',
        connection: '動{どう}詞{し}ます形{けい} + 次{し}第\n名{めい}詞{し} + 次{し}第',
        translation: '一...立刻; 全憑...而定',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '起点・順序',
                description: '何かが起こり次第すぐに、という意味。',
                examples: [
                    { japanese: '準{じゅん}備{び}ができ次{し}第、出{しゅっ}発{ぱつ}します。', chinese: '準備好就出發。' },
                    { japanese: '決{き}まり次{し}第、ご連{れん}絡{らく}します。', chinese: '一決定就聯絡。' },
                    { japanese: '結果{けっ}果{か}次{し}第で方{ほう}針{しん}が変{か}わる。', chinese: '方針取決於結果。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_shidai_1',
                sentence: '準{じゅん}備{び}ができ（　）、出{しゅっ}発{ぱつ}します。',
                options: ['次{し}第', '次第に', '次第で', '次第だ'],
                correctIndex: 0,
                explanation: '「〜次第」= すぐに。'
            },
            {
                id: 'n2_shidai_2',
                sentence: '決{き}まり（　）、ご連{れん}絡{らく}します。',
                options: ['次{し}第', '次第に', '次第で', '次第だ'],
                correctIndex: 0,
                explanation: '決まり次第。'
            },
            {
                id: 'n2_shidai_3',
                sentence: '結{けっ}果{か}（　）で方{ほう}針{しん}が変{か}わる。',
                options: ['次{し}第', '次第に', '次第で', '次第だ'],
                correctIndex: 2,
                explanation: '「次第で」= によって。'
            }
        ]
    },
    'n2_shidai_1': {
        id: 'n2_shidai_1',
        pattern: '次{し}第',
        connection: '動{どう}詞{し}ます形{けい} + 次{し}第\n名{めい}詞{し} + 次{し}第',
        translation: '立刻; 視...而定',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: 'すぐに / 〜によって',
                description: '「〜次第」= すぐに、「次第」= 〜によって。',
                examples: [
                    { japanese: '用{よう}意{い}でき次{し}第、お知{し}らせします。', chinese: '準備好就通知。' },
                    { japanese: '場{ば}合{あい}次{し}第では中{ちゅう}止{し}になる。', chinese: '視情況可能中止。' },
                    { japanese: '手{て}続{つづ}きが終{お}わり次{し}第、連{れん}絡{らく}ください。', chinese: '手續完畢就聯絡。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_shidai_1_1',
                sentence: '用{よう}意{い}でき（　）、お知{し}らせします。',
                options: ['次{し}第', '次第に', '次第で', '次第だ'],
                correctIndex: 0,
                explanation: '「〜次第」= すぐに。'
            },
            {
                id: 'n2_shidai_1_2',
                sentence: '場{ば}合{あい}（　）では中{ちゅう}止{し}になる。',
                options: ['次{し}第', '次第に', '次第で', '次第だ'],
                correctIndex: 0,
                explanation: '視場合而定。'
            },
            {
                id: 'n2_shidai_1_3',
                sentence: '手{て}続{つづ}きが終{お}わり（　）、連{れん}絡{らく}ください。',
                options: ['次{し}第', '次第に', '次第で', '次第だ'],
                correctIndex: 0,
                explanation: '完了後すぐ。'
            }
        ]
    },
    'n2_shidai_de': {
        id: 'n2_shidai_de',
        pattern: '次{し}第で',
        connection: '名{めい}詞{し} + 次{し}第で',
        translation: '全憑...; 取決於...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '〜によって決まる',
                description: '結果が条件によって変わることを示す。',
                examples: [
                    { japanese: '今{こん}回{かい}の成{せい}功{こう}は君{きみ}の努{ど}力{りょく}次{し}第で決{き}まる。', chinese: '這次是否成功取決於你的努力。' },
                    { japanese: '天{てん}気{き}次{し}第で延{えん}期{き}する。', chinese: '是否延期取決於天氣。' },
                    { japanese: '予{よ}算{さん}次{し}第で計{けい}画{かく}を変{か}える。', chinese: '計畫會視預算而變。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_shidai_de_1',
                sentence: '天{てん}気{き}（　）で延{えん}期{き}する。',
                options: ['次{し}第', '次第に', '次第で', '次第だ'],
                correctIndex: 2,
                explanation: '「次第で」= 〜によって。'
            },
            {
                id: 'n2_shidai_de_2',
                sentence: '成{せい}功{こう}は努{ど}力{りょく}（　）で決{き}まる。',
                options: ['次{し}第', '次第に', '次第で', '次第だ'],
                correctIndex: 2,
                explanation: '条件次第。'
            },
            {
                id: 'n2_shidai_de_3',
                sentence: '予{よ}算{さん}（　）で計{けい}画{かく}を変{か}える。',
                options: ['次{し}第', '次第に', '次第で', '次第だ'],
                correctIndex: 2,
                explanation: '「次第で」。'
            }
        ]
    },
    'n2_shidai_de_1': {
        id: 'n2_shidai_de_1',
        pattern: '次{し}第で',
        connection: '名{めい}詞{し} + 次{し}第で',
        translation: '取決於...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '条件による決定',
                description: 'ある条件次第で結果が変わる。',
                examples: [
                    { japanese: '景{けい}気{き}次{し}第で給{きゅう}料{りょう}が変{か}わる。', chinese: '薪水取決於景氣。' },
                    { japanese: '社{しゃ}長{ちょう}の判{はん}断{だん}次{し}第で進{すす}める。', chinese: '是否推進取決於社長判斷。' },
                    { japanese: '試{し}験{けん}の結{けっ}果{か}次{し}第だ。', chinese: '取決於考試結果。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_shidai_de_1_1',
                sentence: '景{けい}気{き}（　）で給{きゅう}料{りょう}が変{か}わる。',
                options: ['次{し}第', '次第に', '次第で', '次第だ'],
                correctIndex: 2,
                explanation: '「次第で」= によって。'
            },
            {
                id: 'n2_shidai_de_1_2',
                sentence: '社{しゃ}長{ちょう}の判{はん}断{だん}（　）で進{すす}める。',
                options: ['次{し}第', '次第に', '次第で', '次第だ'],
                correctIndex: 2,
                explanation: '条件次第。'
            },
            {
                id: 'n2_shidai_de_1_3',
                sentence: '試{し}験{けん}の結{けっ}果{か}（　）だ。',
                options: ['次{し}第', '次第に', '次第で', '次第だ'],
                correctIndex: 0,
                explanation: '名詞+次第。'
            }
        ]
    },
    'n2_shidai_ni': {
        id: 'n2_shidai_ni',
        pattern: '次{し}第に',
        connection: '次{し}第に + 文{ぶん}',
        translation: '逐漸; 漸漸',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '徐々に変化',
                description: '時間の経過とともに少しずつ変わる。',
                examples: [
                    { japanese: '次{し}第に暖{あたた}かくなってきた。', chinese: '逐漸變暖。' },
                    { japanese: '練{れん}習{しゅう}して次{し}第に上{じょう}手{ず}になった。', chinese: '練習後漸漸變好。' },
                    { japanese: '次{し}第に人{ひと}が集{あつ}まってきた。', chinese: '人逐漸聚集。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_shidai_ni_1',
                sentence: '次{し}第に暖{あたた}かくなってきた。',
                options: ['次第に', '次第で', '次第だ', '次第'],
                correctIndex: 0,
                explanation: '徐々にの意味。'
            },
            {
                id: 'n2_shidai_ni_2',
                sentence: '練{れん}習{しゅう}して次{し}第に上{じょう}手{ず}になった。',
                options: ['次第に', '次第で', '次第だ', '次第'],
                correctIndex: 0,
                explanation: '少しずつ変化。'
            },
            {
                id: 'n2_shidai_ni_3',
                sentence: '次{し}第に人{ひと}が集{あつ}まってきた。',
                options: ['次第に', '次第で', '次第だ', '次第'],
                correctIndex: 0,
                explanation: '漸進的な変化。'
            }
        ]
    },
    'n2_shidai_ni_1': {
        id: 'n2_shidai_ni_1',
        pattern: '次{し}第に',
        connection: '次{し}第に + 文{ぶん}',
        translation: '逐漸地; 漸漸地',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: 'ゆっくり変化',
                description: '少しずつ変わっていく様子を表す。',
                examples: [
                    { japanese: '次{し}第に明{あか}るくなってきた。', chinese: '天漸漸亮了。' },
                    { japanese: '次{し}第に気{き}持{もち}ちが落{お}ち着{つ}いた。', chinese: '心情逐漸平靜。' },
                    { japanese: '次{し}第に慣{な}れてきた。', chinese: '漸漸習慣了。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_shidai_ni_1_1',
                sentence: '次{し}第に明{あか}るくなってきた。',
                options: ['次第に', '次第で', '次第だ', '次第'],
                correctIndex: 0,
                explanation: '徐々に。'
            },
            {
                id: 'n2_shidai_ni_1_2',
                sentence: '次{し}第に気{き}持{もち}ちが落{お}ち着{つ}いた。',
                options: ['次第に', '次第で', '次第だ', '次第'],
                correctIndex: 0,
                explanation: '少しずつの変化。'
            },
            {
                id: 'n2_shidai_ni_1_3',
                sentence: '次{し}第に慣{な}れてきた。',
                options: ['次第に', '次第で', '次第だ', '次第'],
                correctIndex: 0,
                explanation: '漸進。'
            }
        ]
    },
    'n2_shikamo': {
        id: 'n2_shikamo',
        pattern: 'しかも',
        connection: 'しかも + 文{ぶん}',
        translation: '而且; 並且; 況且',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '追加の強調',
                description: '前の内容にさらに強い内容を加える。',
                examples: [
                    { japanese: '雨{あめ}が降{ふ}っている。しかも寒{さむ}い。', chinese: '下雨了，而且很冷。' },
                    { japanese: '彼{かれ}は優{やさ}しい。しかも頭{あたま}がいい。', chinese: '他很溫柔，而且很聰明。' },
                    { japanese: '値{ね}段{だん}が高{たか}い。しかも味{あじ}がいまいちだ。', chinese: '價格高，而且味道不怎麼樣。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_shikamo_1',
                sentence: '雨{あめ}が降{ふ}っている。（　）寒{さむ}い。',
                options: ['しかも', 'その上', 'それなのに', 'そうすると'],
                correctIndex: 0,
                explanation: '追加の強調。'
            },
            {
                id: 'n2_shikamo_2',
                sentence: '彼{かれ}は優{やさ}しい。（　）頭{あたま}がいい。',
                options: ['しかも', 'それなのに', 'それなら', 'そういえば'],
                correctIndex: 0,
                explanation: '良い点の追加。'
            },
            {
                id: 'n2_shikamo_3',
                sentence: '値{ね}段{だん}が高{たか}い。（　）味{あじ}がいまいちだ。',
                options: ['しかも', 'それなのに', 'そうすると', 'そういえば'],
                correctIndex: 0,
                explanation: '不利な追加。'
            }
        ]
    },
    'n2_sono_ue': {
        id: 'n2_sono_ue',
        pattern: 'その上',
        connection: 'その上 + 文{ぶん}',
        translation: '而且; 再加上...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '追加・上乗せ',
                description: '前の内容に別の内容をさらに加える。',
                examples: [
                    { japanese: '雨{あめ}が降{ふ}って、その上風{かぜ}も強{つよ}い。', chinese: '下雨了，還加上風很大。' },
                    { japanese: '忙{いそ}しい。その上、体{からだ}も悪{わる}い。', chinese: '很忙，還加上身體不好。' },
                    { japanese: '料{りょう}理{り}がおいしい。その上、安{やす}い。', chinese: '料理好吃，而且便宜。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_sono_ue_1',
                sentence: '雨{あめ}が降{ふ}って、その上風{かぜ}も強{つよ}い。',
                options: ['その上', 'しかも', 'それなのに', 'そうすると'],
                correctIndex: 0,
                explanation: '追加の表現。'
            },
            {
                id: 'n2_sono_ue_2',
                sentence: '忙{いそ}しい。（　）、体{からだ}も悪{わる}い。',
                options: ['その上', 'それなのに', 'それなら', 'そういえば'],
                correctIndex: 0,
                explanation: 'さらに追加。'
            },
            {
                id: 'n2_sono_ue_3',
                sentence: '料{りょう}理{り}がおいしい。（　）安{やす}い。',
                options: ['その上', 'それなのに', 'そうすると', 'そういえば'],
                correctIndex: 0,
                explanation: '良い点の追加。'
            }
        ]
    },
    'n2_sono_ue_1': {
        id: 'n2_sono_ue_1',
        pattern: 'その上',
        connection: 'その上 + 文{ぶん}',
        translation: '再加上...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '付け加える',
                description: '前の内容にさらに情報を加える。',
                examples: [
                    { japanese: '値{ね}段{だん}が高{たか}い。その上、配{はい}送{そう}も遅{おそ}い。', chinese: '價格高，而且配送也慢。' },
                    { japanese: '彼{かれ}は優{やさ}しい。その上、誠{せい}実{じつ}だ。', chinese: '他溫柔，而且很誠實。' },
                    { japanese: '駅{えき}が近{ちか}い。その上、静{しず}かだ。', chinese: '離車站近，而且很安靜。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_sono_ue_1_1',
                sentence: '値{ね}段{だん}が高{たか}い。その上、配{はい}送{そう}も遅{おそ}い。',
                options: ['その上', 'しかも', 'それなのに', 'そうすると'],
                correctIndex: 0,
                explanation: '追加の表現。'
            },
            {
                id: 'n2_sono_ue_1_2',
                sentence: '彼{かれ}は優{やさ}しい。その上、誠{せい}実{じつ}だ。',
                options: ['その上', 'それなのに', 'それなら', 'そういえば'],
                correctIndex: 0,
                explanation: '良い点の追加。'
            },
            {
                id: 'n2_sono_ue_1_3',
                sentence: '駅{えき}が近{ちか}い。その上、静{しず}かだ。',
                options: ['その上', 'それなのに', 'そうすると', 'そういえば'],
                correctIndex: 0,
                explanation: '補足の情報。'
            }
        ]
    },
    'n2_sore_na_noni': {
        id: 'n2_sore_na_noni',
        pattern: 'それなのに',
        connection: 'それなのに + 文{ぶん}',
        translation: '儘管如此; 可是',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '期待と反対の結果',
                description: '前の内容から予想される結果と異なることを述べる。',
                examples: [
                    { japanese: '一{いち}生{しょう}懸{けん}命{めい}勉{べん}強{きょう}した。それなのに合{ごう}格{かく}できなかった。', chinese: '拼命學了，但還是沒合格。' },
                    { japanese: '雨{あめ}は止{や}んだ。それなのに試{し}合{あい}は中{ちゅう}止{し}になった。', chinese: '雨停了，可是比賽還是取消了。' },
                    { japanese: '約{やく}束{そく}した。それなのに彼{かれ}は来{こ}なかった。', chinese: '約好了，可是他沒來。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_sore_na_noni_1',
                sentence: '一{いち}生{しょう}懸{けん}命{めい}勉{べん}強{きょう}した。（　）合{ごう}格{かく}できなかった。',
                options: ['それなのに', 'それなら', 'それにしても', 'そうすると'],
                correctIndex: 0,
                explanation: '期待と逆の結果。'
            },
            {
                id: 'n2_sore_na_noni_2',
                sentence: '雨{あめ}は止{や}んだ。（　）試{し}合{あい}は中{ちゅう}止{し}になった。',
                options: ['それなのに', 'そういえば', 'そうすると', 'それなら'],
                correctIndex: 0,
                explanation: '逆接の表現。'
            },
            {
                id: 'n2_sore_na_noni_3',
                sentence: '約{やく}束{そく}した。（　）彼{かれ}は来{こ}なかった。',
                options: ['それなのに', 'それなら', 'それにしても', 'そういえば'],
                correctIndex: 0,
                explanation: '意外な結果。'
            }
        ]
    },
    'n2_sore_nara': {
        id: 'n2_sore_nara',
        pattern: 'それなら',
        connection: 'それなら + 文{ぶん}',
        translation: '如果是那樣的話',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '前の話を受けた提案',
                description: '前述の内容を受けて提案・判断を示す。',
                examples: [
                    { japanese: '明{あした}は雨{あめ}だそうです。それなら家{いえ}で過{す}ごそう。', chinese: '聽說明天會下雨，那就待在家吧。' },
                    { japanese: '忙{いそ}しいなら無{む}理{り}しないで。それなら別{べつ}の日{ひ}にしよう。', chinese: '如果很忙就不要勉強，那就改天吧。' },
                    { japanese: '駅{えき}まで遠{とお}い。それならタクシーで行{い}こう。', chinese: '車站很遠，那就搭計程車吧。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_sore_nara_1',
                sentence: '明{あした}は雨{あめ}だそうです。（　）家{いえ}で過{す}ごそう。',
                options: ['それなら', 'それなのに', 'それにしても', 'そうすると'],
                correctIndex: 0,
                explanation: '前の話を受けた提案。'
            },
            {
                id: 'n2_sore_nara_2',
                sentence: '忙{いそ}しいなら無{む}理{り}しないで。（　）別{べつ}の日{ひ}にしよう。',
                options: ['それなら', 'そういえば', 'そうすると', 'それなのに'],
                correctIndex: 0,
                explanation: '「それなら」= ならば。'
            },
            {
                id: 'n2_sore_nara_3',
                sentence: '駅{えき}まで遠{とお}い。（　）タクシーで行{い}こう。',
                options: ['それなら', 'それなのに', 'それにしても', 'そういえば'],
                correctIndex: 0,
                explanation: '判断・提案。'
            }
        ]
    },
    'n2_sore_ni_shitemo': {
        id: 'n2_sore_ni_shitemo',
        pattern: 'それにしても',
        connection: 'それにしても + 文{ぶん}',
        translation: '話雖如此; 儘管如此',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '前提を受けた感想',
                description: '前の内容を受けて驚きや評価を述べる。',
                examples: [
                    { japanese: 'それにしても、よく頑{がん}張{ば}ったね。', chinese: '話雖如此，你真的很努力。' },
                    { japanese: 'それにしても暑{あつ}い日{ひ}だ。', chinese: '話說回來，真是熱。' },
                    { japanese: 'それにしても彼{かれ}は遅{おそ}い。', chinese: '儘管如此，他還是很慢。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_sore_ni_shitemo_1',
                sentence: 'それにしても、よく頑{がん}張{ば}ったね。',
                options: ['それにしても', 'それなら', 'それなのに', 'そうすると'],
                correctIndex: 0,
                explanation: '感想を述べる。'
            },
            {
                id: 'n2_sore_ni_shitemo_2',
                sentence: 'それにしても暑{あつ}い日{ひ}だ。',
                options: ['それにしても', 'そういえば', 'そうすると', 'それなのに'],
                correctIndex: 0,
                explanation: '前提を受けた感想。'
            },
            {
                id: 'n2_sore_ni_shitemo_3',
                sentence: 'それにしても彼{かれ}は遅{おそ}い。',
                options: ['それにしても', 'それなら', 'それなのに', 'そういえば'],
                correctIndex: 0,
                explanation: '評価の表現。'
            }
        ]
    },
    'n2_sou_ieba': {
        id: 'n2_sou_ieba',
        pattern: 'そう言{い}えば',
        connection: 'そう言{い}えば + 文{ぶん}',
        translation: '說起來; 這麼一說',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '思い出し',
                description: '話題に関連して思い出したことを述べる。',
                examples: [
                    { japanese: 'そう言{い}えば、彼{かれ}は今{いま}日{にち}誕{たん}生{じょう}日{び}だ。', chinese: '說起來，他今天生日。' },
                    { japanese: 'そう言{い}えば、あの店{みせ}は閉{し}まったらしい。', chinese: '說起來，那家店好像關了。' },
                    { japanese: 'そう言{い}えば、宿{しゅく}題{だい}を忘{わす}れた。', chinese: '這麼一說，我忘了作業。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_sou_ieba_1',
                sentence: 'そう言{い}えば、彼{かれ}は今{いま}日{にち}誕{たん}生{じょう}日{び}だ。',
                options: ['そう言{い}えば', 'それなら', 'それなのに', 'そうすると'],
                correctIndex: 0,
                explanation: '思い出しの表現。'
            },
            {
                id: 'n2_sou_ieba_2',
                sentence: 'そう言{い}えば、あの店{みせ}は閉{し}まったらしい。',
                options: ['そう言{い}えば', 'それにしても', 'それなら', 'それなのに'],
                correctIndex: 0,
                explanation: '話題からの連想。'
            },
            {
                id: 'n2_sou_ieba_3',
                sentence: 'そう言{い}えば、宿{しゅく}題{だい}を忘{わす}れた。',
                options: ['そう言{い}えば', 'それなら', 'それなのに', 'そうすると'],
                correctIndex: 0,
                explanation: '思い出したことを述べる。'
            }
        ]
    },
    'n2_sou_ieba_1': {
        id: 'n2_sou_ieba_1',
        pattern: 'そう言{い}えば',
        connection: 'そう言{い}えば + 文{ぶん}',
        translation: '說起那件事...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '連想から話題転換',
                description: '関連することを思い出して話題を変える。',
                examples: [
                    { japanese: 'そう言{い}えば、今{いま}週{しゅう}は休{やす}みだった。', chinese: '說起來，這週放假。' },
                    { japanese: 'そう言{い}えば、あの映{えい}画{が}見{み}た？', chinese: '說起那件事，你看那部電影了嗎？' },
                    { japanese: 'そう言{い}えば、メール返{へん}信{しん}していない。', chinese: '說起來，我還沒回信。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_sou_ieba_1_1',
                sentence: 'そう言{い}えば、今{いま}週{しゅう}は休{やす}みだった。',
                options: ['そう言{い}えば', 'それなら', 'それなのに', 'そうすると'],
                correctIndex: 0,
                explanation: '話題転換。'
            },
            {
                id: 'n2_sou_ieba_1_2',
                sentence: 'そう言{い}えば、あの映{えい}画{が}見{み}た？',
                options: ['そう言{い}えば', 'それにしても', 'それなら', 'それなのに'],
                correctIndex: 0,
                explanation: '関連事項の思い出し。'
            },
            {
                id: 'n2_sou_ieba_1_3',
                sentence: 'そう言{い}えば、メール返{へん}信{しん}していない。',
                options: ['そう言{い}えば', 'それなら', 'それなのに', 'そうすると'],
                correctIndex: 0,
                explanation: '思い出したこと。'
            }
        ]
    },
    'n2_sou_suru_to': {
        id: 'n2_sou_suru_to',
        pattern: 'そうすると',
        connection: 'そうすると + 文{ぶん}',
        translation: '那樣一來; 如果那樣的話',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '結果・展開',
                description: '前の内容を受けて結果や次の展開を述べる。',
                examples: [
                    { japanese: 'ボタンを押{お}す。そうすると扉{とびら}が開{ひら}く。', chinese: '按下按鈕，然後門就開了。' },
                    { japanese: 'まず電{でん}源{げん}を入{い}れてください。そうすると画{が}面{めん}が映{うつ}ります。', chinese: '先打開電源，這樣畫面就會顯示。' },
                    { japanese: '道{みち}を曲{ま}がる。そうすると右{みぎ}に駅{えき}が見{み}える。', chinese: '轉彎後就會看到右邊的車站。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_sou_suru_to_1',
                sentence: 'ボタンを押{お}す。（　）扉{とびら}が開{ひら}く。',
                options: ['そうすると', 'それなら', 'それなのに', 'そういえば'],
                correctIndex: 0,
                explanation: '結果を示す。'
            },
            {
                id: 'n2_sou_suru_to_2',
                sentence: '電{でん}源{げん}を入{い}れる。（　）画{が}面{めん}が映{うつ}る。',
                options: ['そうすると', 'それにしても', 'それなら', 'それなのに'],
                correctIndex: 0,
                explanation: '次の展開。'
            },
            {
                id: 'n2_sou_suru_to_3',
                sentence: '道{みち}を曲{ま}がる。（　）右{みぎ}に駅{えき}が見{み}える。',
                options: ['そうすると', 'それなら', 'それなのに', 'そういえば'],
                correctIndex: 0,
                explanation: '「そうすると」= すると。'
            }
        ]
    },
    'n2_sue_ni': {
        id: 'n2_sue_ni',
        pattern: '末{すえ}に',
        connection: '動{どう}詞{し}た形{けい} + 末{すえ}に\n名{めい}詞{し} + の + 末{すえ}に',
        translation: '在...之後; 經過...的最後',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '長い過程の結果',
                description: '時間をかけた努力や行動の最終結果を表す。',
                examples: [
                    { japanese: '話{はな}し合{あ}った末{すえ}に結{けっ}論{ろん}を出{だ}した。', chinese: '經過討論後得出結論。' },
                    { japanese: '迷{まよ}った末{すえ}に買{か}わなかった。', chinese: '猶豫到最後還是沒買。' },
                    { japanese: '努{ど}力{りょく}した末{すえ}に成{せい}功{こう}した。', chinese: '努力之後終於成功。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_sue_ni_1',
                sentence: '話{はな}し合{あ}った（　）結{けっ}論{ろん}を出{だ}した。',
                options: ['末{すえ}に', '末{すえ}で', '末{すえ}を', '末{すえ}は'],
                correctIndex: 0,
                explanation: '長い過程の結果。'
            },
            {
                id: 'n2_sue_ni_2',
                sentence: '迷{まよ}った（　）買{か}わなかった。',
                options: ['末{すえ}に', '末{すえ}で', '末{すえ}を', '末{すえ}は'],
                correctIndex: 0,
                explanation: '「末に」。'
            },
            {
                id: 'n2_sue_ni_3',
                sentence: '努{ど}力{りょく}した（　）成{せい}功{こう}した。',
                options: ['末{すえ}に', '末{すえ}で', '末{すえ}を', '末{すえ}は'],
                correctIndex: 0,
                explanation: '結果の表現。'
            }
        ]
    },
    'n2_sue_ni_1': {
        id: 'n2_sue_ni_1',
        pattern: '末{すえ}に',
        connection: '動{どう}詞{し}た形{けい} + 末{すえ}に\n名{めい}詞{し} + の + 末{すえ}に',
        translation: '經過...之後',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '最終結果',
                description: '時間をかけた末に起こる結果を表す。',
                examples: [
                    { japanese: '検{けん}討{とう}した末{すえ}に中{ちゅう}止{し}を決{き}めた。', chinese: '經過研討後決定中止。' },
                    { japanese: '苦{くる}労{ろう}した末{すえ}に夢{ゆめ}がかなった。', chinese: '辛苦之後夢想實現。' },
                    { japanese: '長{なが}い話{はな}し合{あ}いの末{すえ}に和{わ}解{かい}した。', chinese: '長時間談判後和解。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_sue_ni_1_1',
                sentence: '検{けん}討{とう}した（　）中{ちゅう}止{し}を決{き}めた。',
                options: ['末{すえ}に', '末{すえ}で', '末{すえ}を', '末{すえ}は'],
                correctIndex: 0,
                explanation: '結果を表す。'
            },
            {
                id: 'n2_sue_ni_1_2',
                sentence: '苦{くる}労{ろう}した（　）夢{ゆめ}がかなった。',
                options: ['末{すえ}に', '末{すえ}で', '末{すえ}を', '末{すえ}は'],
                correctIndex: 0,
                explanation: '「末に」。'
            },
            {
                id: 'n2_sue_ni_1_3',
                sentence: '話{はな}し合{あ}いの（　）和{わ}解{かい}した。',
                options: ['末{すえ}に', '末{すえ}で', '末{すえ}を', '末{すえ}は'],
                correctIndex: 0,
                explanation: '名詞+の+末に。'
            }
        ]
    },
    'n2_sukoshi_mo_nai': {
        id: 'n2_sukoshi_mo_nai',
        pattern: '少{すこ}しも～ない',
        connection: '少{すこ}しも + 動{どう}詞{し}ない形{けい}',
        translation: '一點也不...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '否定の強調',
                description: '「少しも〜ない」で全くないことを強調する。',
                examples: [
                    { japanese: '少{すこ}しも疲{つか}れていない。', chinese: '一點也不累。' },
                    { japanese: '少{すこ}しも分{わ}からない。', chinese: '一點也不懂。' },
                    { japanese: '少{すこ}しも心{しん}配{ぱい}していない。', chinese: '一點也不擔心。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_sukoshi_mo_nai_1',
                sentence: '少{すこ}しも疲{つか}れて（　）。',
                options: ['いない', 'いる', 'いた', 'いて'],
                correctIndex: 0,
                explanation: '否定の強調。'
            },
            {
                id: 'n2_sukoshi_mo_nai_2',
                sentence: '少{すこ}しも分{わ}から（　）。',
                options: ['ない', 'ある', 'あった', 'あって'],
                correctIndex: 0,
                explanation: '「少しも〜ない」。'
            },
            {
                id: 'n2_sukoshi_mo_nai_3',
                sentence: '少{すこ}しも心{しん}配{ぱい}して（　）。',
                options: ['いない', 'いる', 'いた', 'いて'],
                correctIndex: 0,
                explanation: '否定の表現。'
            }
        ]
    },
    'n2_sukoshi_mo_nai_1': {
        id: 'n2_sukoshi_mo_nai_1',
        pattern: '少{すこ}しも～ない',
        connection: '少{すこ}しも + 動{どう}詞{し}ない形{けい}',
        translation: '絲豪不...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '完全否定',
                description: '全くないことを強く言う表現。',
                examples: [
                    { japanese: '少{すこ}しも変{か}わっていない。', chinese: '一點也沒變。' },
                    { japanese: '少{すこ}しも怖{こわ}くない。', chinese: '一點也不怕。' },
                    { japanese: '少{すこ}しも後{こう}悔{かい}していない。', chinese: '一點也不後悔。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_sukoshi_mo_nai_1_1',
                sentence: '少{すこ}しも変{か}わって（　）。',
                options: ['いない', 'いる', 'いた', 'いて'],
                correctIndex: 0,
                explanation: '完全否定。'
            },
            {
                id: 'n2_sukoshi_mo_nai_1_2',
                sentence: '少{すこ}しも怖{こわ}く（　）。',
                options: ['ない', 'ある', 'あった', 'あって'],
                correctIndex: 0,
                explanation: '「少しも〜ない」。'
            },
            {
                id: 'n2_sukoshi_mo_nai_1_3',
                sentence: '少{すこ}しも後{こう}悔{かい}して（　）。',
                options: ['いない', 'いる', 'いた', 'いて'],
                correctIndex: 0,
                explanation: '強い否定。'
            }
        ]
    },
    'n2_sukunaku_tomo': {
        id: 'n2_sukunaku_tomo',
        pattern: '少{すく}なくとも',
        connection: '少{すく}なくとも + 数{すう}量{りょう}/文{ぶん}',
        translation: '至少',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '最低限',
                description: '最低ラインや基準を示す。',
                examples: [
                    { japanese: '少{すく}なくとも三{さん}日{にち}はかかる。', chinese: '至少要三天。' },
                    { japanese: '少{すく}なくとも今{いま}回{かい}は謝{あやま}るべきだ。', chinese: '至少這次該道歉。' },
                    { japanese: '少{すく}なくとも彼{かれ}は嘘{うそ}をついていない。', chinese: '至少他沒有說謊。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_sukunaku_tomo_1',
                sentence: '少{すく}なくとも三{さん}日{にち}は（　）。',
                options: ['かかる', 'かかって', 'かかった', 'かからない'],
                correctIndex: 0,
                explanation: '最低限の期間。'
            },
            {
                id: 'n2_sukunaku_tomo_2',
                sentence: '少{すく}なくとも今{いま}回{かい}は謝{あやま}る（　）。',
                options: ['べきだ', 'べきではない', 'べきだった', 'べきでない'],
                correctIndex: 0,
                explanation: '最低限の義務。'
            },
            {
                id: 'n2_sukunaku_tomo_3',
                sentence: '少{すく}なくとも彼{かれ}は嘘{うそ}をついてい（　）。',
                options: ['ない', 'る', 'た', 'て'],
                correctIndex: 0,
                explanation: '最低限の事実。'
            }
        ]
    },
    'n2_sukunaku_tomo_1': {
        id: 'n2_sukunaku_tomo_1',
        pattern: '少{すく}なくとも',
        connection: '少{すく}なくとも + 数{すう}量{りょう}/文{ぶん}',
        translation: '至少...',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: '最低限の基準',
                description: '最低限の条件を示す。',
                examples: [
                    { japanese: '少{すく}なくとも一{いっ}週{しゅう}間{かん}は必{ひつ}要{よう}だ。', chinese: '至少需要一週。' },
                    { japanese: '少{すく}なくとも今{いま}日{にち}は休{やす}んだほうがいい。', chinese: '至少今天應該休息。' },
                    { japanese: '少{すく}なくとも連{れん}絡{らく}すべきだ。', chinese: '至少應該聯絡。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_sukunaku_tomo_1_1',
                sentence: '少{すく}なくとも一{いっ}週{しゅう}間{かん}は必{ひつ}要{よう}だ。',
                options: ['少{すく}なくとも', 'それなのに', 'それなら', 'そうすると'],
                correctIndex: 0,
                explanation: '最低限の条件。'
            },
            {
                id: 'n2_sukunaku_tomo_1_2',
                sentence: '少{すく}なくとも今{いま}日{にち}は休{やす}んだほうがいい。',
                options: ['少{すく}なくとも', 'それにしても', 'それなら', 'そういえば'],
                correctIndex: 0,
                explanation: '最低限の助言。'
            },
            {
                id: 'n2_sukunaku_tomo_1_3',
                sentence: '少{すく}なくとも連{れん}絡{らく}すべきだ。',
                options: ['少{すく}なくとも', 'それなら', 'それなのに', 'そうすると'],
                correctIndex: 0,
                explanation: '最低限の義務。'
            }
        ]
    },
    'n2_tadachi_ni': {
        id: 'n2_tadachi_ni',
        pattern: '直{ただ}ちに',
        connection: '直{ただ}ちに + 動{どう}詞{し}',
        translation: '立即; 直接',
        level: 'N2',
        explanation: [
            {
                usageId: 1,
                title: 'すぐに',
                description: '緊急や即時の行動を表す。',
                examples: [
                    { japanese: '異{い}常{じょう}があれば直{ただ}ちに連{れん}絡{らく}してください。', chinese: '若有異常請立即聯絡。' },
                    { japanese: '直{ただ}ちに避{ひ}難{なん}してください。', chinese: '請立即避難。' },
                    { japanese: '直{ただ}ちに対{たい}応{おう}する必{ひつ}要{よう}がある。', chinese: '需要立即應對。' }
                ]
            }
        ],
        quiz: [
            {
                id: 'n2_tadachi_ni_1',
                sentence: '異{い}常{じょう}があれば直{ただ}ちに連{れん}絡{らく}してください。',
                options: ['直{ただ}ちに', '少{すく}なくとも', 'それにしても', 'そういえば'],
                correctIndex: 0,
                explanation: '即時の行動。'
            },
            {
                id: 'n2_tadachi_ni_2',
                sentence: '直{ただ}ちに避{ひ}難{なん}してください。',
                options: ['直{ただ}ちに', 'それなら', 'それなのに', 'そうすると'],
                correctIndex: 0,
                explanation: 'すぐにの意味。'
            },
            {
                id: 'n2_tadachi_ni_3',
                sentence: '直{ただ}ちに対{たい}応{おう}する必{ひつ}要{よう}がある。',
                options: ['直{ただ}ちに', '少{すく}なくとも', 'それなら', 'そういえば'],
                correctIndex: 0,
                explanation: '緊急性を示す。'
            }
        ]
    }
};
