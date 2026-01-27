import { GrammarPoint } from '../../types/grammar';

export const n3Details: Record<string, GrammarPoint> = {
    'n3_ageru': {
        id: 'n3_ageru',
        pattern: '上{あ}げる',
        connection: '動詞{どうし}ます形{けい}（去{きょ}掉{とう}ます） + 上{あ}げる',
        translation: '做完...; 完成...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '完成動作',
                description: '表示將某個動作完全做完、徹底完成。強調動作的完成狀態，帶有「終於做好了」的語感。常用於需要努力或時間才能完成的事情。',
                examples: [
                    { japanese: 'やっとレポートを書{か}き上{あ}げた。', chinese: '終於把報告寫完了。' },
                    { japanese: '彼女{かのじょ}は一週間{いっしゅうかん}でセーターを編{あ}み上{あ}げた。', chinese: '她花了一週把毛衣織好了。' },
                    {
                        japanese: '「その絵{え}、もう完成{かんせい}したの？」\n「うん、昨日{きのう}やっと描{か}き上{あ}げたんだ。一{ひと}ヶ月{げつ}もかかったよ。」\n「すごい！本当{ほんとう}によくできてるね。」',
                        chinese: '「那幅畫已經完成了嗎？」\n「嗯，昨天終於畫好了。花了整整一個月呢。」\n「好厲害！真的畫得很好耶。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「上げる」與「終わる」的比較',
            description: '兩者都可表示完成，但語感不同。',
            points: [
                {
                    rule: '上げる：強調「努力後的成果」，帶有達成感。',
                    examples: [{ japanese: '論文{ろんぶん}を書{か}き上{あ}げた。', chinese: '（努力地）把論文寫完了。' }]
                },
                {
                    rule: '終わる：單純表示動作結束，語氣中性。',
                    examples: [{ japanese: '本{ほん}を読{よ}み終{お}わった。', chinese: '把書讀完了。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ageru_1',
                sentence: '彼{かれ}は3時間{じかん}で作文{さくぶん}を書{か}き（　）。',
                options: ['終わった', '出した', '上げた', '始めた'],
                correctIndex: 2,
                explanation: '「書き上げる」表示把文章寫完。強調完成的成就感。'
            },
            {
                id: 'n3_quiz_ageru_2',
                sentence: 'この料理{りょうり}は手作{てづく}りで作{つく}り（　）ものです。',
                options: ['始めた', '上げた', '上がった', '続けた'],
                correctIndex: 1,
                explanation: '「作り上げる」表示完成製作。「上げた」是他動詞形。'
            },
            {
                id: 'n3_quiz_ageru_3',
                sentence: '選手{せんしゅ}たちは長年{ながねん}の努力{どりょく}で優{すぐ}れた技術{ぎじゅつ}を（　）。',
                options: ['磨き始めた', '磨き終わった', '磨き上げた', '磨き続けた'],
                correctIndex: 2,
                explanation: '「磨き上げる」表示經過長時間努力而練就精湛技術。'
            },
            {
                id: 'n3_quiz_ageru_4',
                sentence: '「この曲{きょく}、いつ完成{かんせい}するの？」\n「来週{らいしゅう}までに（　）つもりだよ。」',
                options: ['仕始める', '仕上げる', '仕続ける', '仕終わる'],
                correctIndex: 1,
                explanation: '對話情境。「仕上げる」表示完成作品。'
            },
            {
                id: 'n3_quiz_ageru_5',
                sentence: '「その小説{しょうせつ}、どのくらいで書{か}いたの？」\n「半年{はんとし}かけて書{か}き（　）んだ。」',
                options: ['上げた', '終わった', '始めた', '出した'],
                correctIndex: 0,
                explanation: '對話情境。花了半年「寫完」小說，強調完成的成就感。'
            }
        ]
    },
    'n3_amari': {
        id: 'n3_amari',
        pattern: 'あまり',
        connection: '動詞{どうし}辭書{じしょ}形{けい} / 普通{ふつう}形{けい} + あまり\n名詞{めいし} + の + あまり\nな形容詞{けいようし} + な + あまり',
        translation: '太...以至於...; 因過度...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '因過度...而導致消極結果',
                description: '表示由於程度過甚，導致了不好的結果。通常帶有消極、負面的含義。前接表示情感或狀態的詞語較多。',
                examples: [
                    { japanese: '驚{おどろ}きのあまり、声{こえ}も出{で}なかった。', chinese: '因為太過驚訝，連聲音都發不出來。' },
                    { japanese: '心配{しんぱい}するあまり、病気{びょうき}になってしまった。', chinese: '因為過度擔心，結果生病了。' },
                    {
                        japanese: '「どうしたの？顔{かお}が真{ま}っ青{さお}だよ。」\n「試験{しけん}の結果{けっか}が心配{しんぱい}で、緊張{きんちょう}のあまり眠{ねむ}れなかったんだ。」\n「そんなに心配{しんぱい}しなくても大丈夫{だいじょうぶ}だよ。きっとうまくいくから。」',
                        chinese: '「怎麼了？你臉色好蒼白。」\n「因為擔心考試結果，緊張過度睡不著覺。」\n「不用那麼擔心啦。一定會順利的。」',
                        note: '對話情境展示'
                    },
                    { japanese: '嬉{うれ}しさのあまり、泣{な}き出{だ}してしまった。', chinese: '因為太高興，結果哭了出來。' }
                ]
            }
        ],
        analysis: {
            title: '「あまり」與「あまりに(も)」的比較',
            description: '兩者都表程度過甚，但用法略有不同。',
            points: [
                {
                    rule: '「あまり」接在名詞・動詞後面，表示「因為太...」。',
                    examples: [{ japanese: '驚{おどろ}きのあまり', chinese: '因為太驚訝' }]
                },
                {
                    rule: '「あまりに(も)」放在形容詞・動詞前面修飾，表示「實在太...」。',
                    examples: [{ japanese: 'あまりにも高{たか}い', chinese: '實在太貴了' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_amari_1',
                sentence: '忙{いそが}しさ（　）、昼{ひる}ご飯{はん}を食{た}べるのを忘{わす}れていた。',
                options: ['あまり', 'なあまり', 'のあまり', 'であまり'],
                correctIndex: 2,
                explanation: '「忙しさ」是名詞，接續「あまり」時須加「の」。即「名詞 + の + あまり」。'
            },
            {
                id: 'n3_quiz_amari_2',
                sentence: '彼{かれ}は怒{いか}りの（　）、机{つくえ}を叩{たた}いた。',
                options: ['ため', 'うえ', 'まま', 'あまり'],
                correctIndex: 3,
                explanation: '表示「因過度憤怒而...」，使用「（の）あまり」。'
            },
            {
                id: 'n3_quiz_amari_3',
                sentence: '感激{かんげき}した（　）、何{なに}も言{い}えなくなった。',
                options: ['あまり', 'うえ', 'あげく', '結果'],
                correctIndex: 0,
                explanation: '前接動詞「感激した」，表示因程度過甚導致的結果。'
            },
            {
                id: 'n3_quiz_amari_4',
                sentence: '「どうしたの？顔色{かおいろ}が悪{わる}いよ。」\n「緊張{きんちょう}の（　）、昨夜{ゆうべ}は一睡{いっすい}もできなかったんだ。」',
                options: ['ため', 'おかげ', 'あまり', 'せい'],
                correctIndex: 2,
                explanation: '對話情境。因過度緊張而睡不著。'
            },
            {
                id: 'n3_quiz_amari_5',
                sentence: '「彼{かれ}、急{きゅう}に走{はし}り出{だ}したけど…。」\n「急{いそ}ぐ（　）、携帯{けいたい}を忘{わす}れていったよ。」',
                options: ['ので', 'のに', 'あまり', 'ため'],
                correctIndex: 2,
                explanation: '對話情境。因太著急而忘記帶手機。'
            }
        ]
    },
    'n3_amari_ni_mo': {
        id: 'n3_amari_ni_mo',
        pattern: 'あまりにも',
        connection: 'あまりに(も) + 形容詞{けいようし} / 動詞{どうし}',
        translation: '太...; 過於...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '程度過甚的強調',
                description: '放在形容詞或動詞前面，強調程度超出預期或常理。語氣比單純的「とても」更強烈，常帶有驚訝或不滿的語感。',
                examples: [
                    { japanese: 'この料理{りょうり}はあまりにも辛{から}くて食{た}べられない。', chinese: '這道菜實在太辣了，沒辦法吃。' },
                    { japanese: '彼{かれ}の態度{たいど}はあまりにも失礼{しつれい}だ。', chinese: '他的態度實在太失禮了。' },
                    {
                        japanese: '「このバッグ、買{か}おうと思{おも}ってたのに...」\n「どうしたの？」\n「値段{ねだん}があまりにも高{たか}くてびっくりしたよ。50万円{まんえん}もするんだって。」\n「えー！それは確{たし}かに高{たか}すぎるね。」',
                        chinese: '「這個包包，我本來想買的說...」\n「怎麼了？」\n「價格太高了嚇了我一跳。聽說要50萬日圓呢。」\n「咦！那確實太貴了。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n3_quiz_amari_ni_mo_1',
                sentence: 'この問題{もんだい}は（　）難{むずか}しくて解{と}けなかった。',
                options: ['あまりな', 'あまりの', 'あまりで', 'あまりにも'],
                correctIndex: 3,
                explanation: '修飾形容詞「難しい」時，用「あまりにも」。'
            },
            {
                id: 'n3_quiz_amari_ni_mo_2',
                sentence: '彼女{かのじょ}の話{はなし}は（　）長{なが}かったので、途中{とちゅう}で寝{ね}てしまった。',
                options: ['あまり', 'あまりにも', 'あまりの', 'あまりに'],
                correctIndex: 1,
                explanation: '「あまりにも」修飾「長い」，強調話太長了。'
            },
            {
                id: 'n3_quiz_amari_ni_mo_3',
                sentence: '彼{かれ}の行動{こうどう}は（　）自分勝手{じぶんかって}だ。',
                options: ['あまりの', 'あまり', 'あまりで', 'あまりにも'],
                correctIndex: 3,
                explanation: '「あまりにも」修飾な形容詞「自分勝手」。'
            },
            {
                id: 'n3_quiz_amari_ni_mo_4',
                sentence: '「どうして遅刻{ちこく}したの？」\n「すみません。電車{でんしゃ}が（　）混{こ}んでいて乗{の}れなかったんです。」',
                options: ['あまりにも', 'あまりを', 'あまりの', 'あまりが'],
                correctIndex: 0,
                explanation: '對話情境。電車太擠了以至於搭不上。'
            },
            {
                id: 'n3_quiz_amari_ni_mo_5',
                sentence: '「彼{かれ}、なんであんなに怒{おこ}ってるの？」\n「上司{じょうし}に（　）ひどいことを言{い}われたみたいだよ。」',
                options: ['あまりにも', 'あまりな', 'あまりを', 'あまりの'],
                correctIndex: 0,
                explanation: '對話情境。被上司說了太過分的話。'
            }
        ]
    },
    'n3_au': {
        id: 'n3_au',
        pattern: '合{あ}う',
        connection: '動詞{どうし}ます形{けい}（去{きょ}掉{とう}ます） + 合{あ}う',
        translation: '互相...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '相互動作',
                description: '表示兩人或多人之間的相互行為。強調動作是雙向的、互動的。',
                examples: [
                    { japanese: '友達{ともだち}と意見{いけん}を言{い}い合{あ}った。', chinese: '和朋友互相交換意見。' },
                    { japanese: '私{わたし}たちは毎日{まいにち}メールをし合{あ}っている。', chinese: '我們每天互相傳訊息。' },
                    {
                        japanese: '「あの二人{ふたり}、また喧嘩{けんか}してるよ。」\n「いつも言{い}い合{あ}ってばかりだね。でも仲{なか}はいいんだよ。」\n「確{たし}かに。すぐ仲直{なかなお}りするもんね。」',
                        chinese: '「那兩個人又在吵架了。」\n「總是互相爭論呢。但感情其實很好喔。」\n「確實。馬上就會和好呢。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '常見的「〜合う」搭配',
            points: [
                {
                    rule: '話し合う：互相討論',
                    examples: [{ japanese: '問題{もんだい}について話{はな}し合{あ}った。', chinese: '就問題互相討論了。' }]
                },
                {
                    rule: '助け合う：互相幫助',
                    examples: [{ japanese: '困{こま}った時{とき}は助{たす}け合{あ}おう。', chinese: '困難時互相幫助吧。' }]
                },
                {
                    rule: '愛し合う：相愛',
                    examples: [{ japanese: '二人{ふたり}は愛{あい}し合{あ}っている。', chinese: '兩人相愛著。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_au_1',
                sentence: '家族{かぞく}で将来{しょうらい}のことを（　）。',
                options: ['話し始めた', '話しかけた', '話し合った', '話した'],
                correctIndex: 2,
                explanation: '「話し合う」表示家人之間互相討論。'
            },
            {
                id: 'n3_quiz_au_2',
                sentence: '隣人{りんじん}と挨拶{あいさつ}を（　）仲{なか}だ。',
                options: ['する', 'し始める', 'し合う', 'しかける'],
                correctIndex: 2,
                explanation: '「挨拶をし合う」表示互相打招呼的關係。'
            },
            {
                id: 'n3_quiz_au_3',
                sentence: 'チームメイトと（　）ながら練習{れんしゅう}した。',
                options: ['競い始め', '競い続け', '競い合い', '競い'],
                correctIndex: 2,
                explanation: '「競い合う」表示互相競爭。'
            },
            {
                id: 'n3_quiz_au_4',
                sentence: '「あの夫婦{ふうふ}、仲{なか}がいいね。」\n「うん、いつも（　）いるよね。見{み}ていて微笑{ほほえ}ましい。」',
                options: ['支え合って', '支え続けて', '支えて', '支え始めて'],
                correctIndex: 0,
                explanation: '對話情境。「支え合う」表示互相支持。'
            },
            {
                id: 'n3_quiz_au_5',
                sentence: '「この問題{もんだい}、どうする？」\n「みんなで（　）決{き}めよう。」',
                options: ['話し合って', '話し始めて', '話しかけて', '話して'],
                correctIndex: 0,
                explanation: '對話情境。大家一起互相討論來決定。'
            }
        ]
    },
    'n3_ba_ii': {
        id: 'n3_ba_ii',
        pattern: 'ばいい',
        connection: '動詞{どうし}ば形{けい} + いい\nい形容詞{けいようし}（去{きょ}い）+ ければいい\nな形容詞{けいようし}・名詞{めいし} + であればいい / ならいい',
        translation: '只要...就好了; 應該...; ...就好',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '建議・提案',
                description: '用於給對方建議或提出解決方案，表示「這樣做就可以了」。語氣委婉。',
                examples: [
                    { japanese: '分{わ}からなければ、先生{せんせい}に聞{き}けばいい。', chinese: '如果不懂的話，問老師就好了。' },
                    { japanese: '疲{つか}れたら、少{すこ}し休{やす}めばいいよ。', chinese: '累了的話，稍微休息一下就好。' },
                    {
                        japanese: '「この漢字{かんじ}、どう読{よ}むかわからないんだけど...」\n「辞書{じしょ}で調{しら}べればいいよ。スマホにアプリ入{い}れてる？」\n「あ、そうか。ありがとう！」',
                        chinese: '「這個漢字，我不知道怎麼讀...」\n「查字典就好了啊。手機有裝APP嗎？」\n「啊，對喔。謝謝！」',
                        note: '對話情境展示'
                    }
                ]
            },
            {
                usageId: 2,
                title: '疑問形：尋求建議',
                description: '「〜ばいいですか」用於詢問該怎麼做。',
                examples: [
                    { japanese: '駅{えき}へはどう行{い}けばいいですか。', chinese: '請問該怎麼去車站呢？' },
                    { japanese: '何{なに}を持{も}っていけばいいですか。', chinese: '該帶什麼去呢？' }
                ]
            }
        ],
        analysis: {
            title: '「〜ばいい」與「〜たらいい」的比較',
            description: '兩者都可用於建議，但語感略有不同。',
            points: [
                {
                    rule: '〜ばいい：較客觀、一般性的建議。',
                    examples: [{ japanese: '早{はや}く寝{ね}ればいい。', chinese: '早點睡就好了。' }]
                },
                {
                    rule: '〜たらいい：較主觀、帶有說話者個人意見。',
                    examples: [{ japanese: '早{はや}く寝{ね}たらいい。', chinese: '早點睡比較好喔。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ba_ii_1',
                sentence: '電車{でんしゃ}に乗{の}り遅{おく}れたら、タクシーに（　）いい。',
                options: ['乗ったら', '乗って', '乗れば', '乗るなら'],
                correctIndex: 2,
                explanation: '「〜ばいい」用於提出建議：搭計程車就好了。'
            },
            {
                id: 'n3_quiz_ba_ii_2',
                sentence: 'お金{かね}がなければ、借{か}り（　）いいよ。',
                options: ['れば', 'て', 'たら', 'るなら'],
                correctIndex: 0,
                explanation: '動詞ば形接「いい」。「借りる」→「借りれば」。'
            },
            {
                id: 'n3_quiz_ba_ii_3',
                sentence: 'この書類{しょるい}はどこに提出{ていしゅつ}（　）いいですか。',
                options: ['したら', 'するなら', 'すれば', 'して'],
                correctIndex: 2,
                explanation: '疑問形「〜ばいいですか」用於詢問該怎麼做。'
            },
            {
                id: 'n3_quiz_ba_ii_4',
                sentence: '「パスワードを忘{わす}れちゃったんだけど...」\n「リセット（　）いいよ。メールで確認{かくにん}できるから。」',
                options: ['すれば', 'したら', 'して', 'するなら'],
                correctIndex: 0,
                explanation: '對話情境。提出解決方案：重設密碼就好了。'
            },
            {
                id: 'n3_quiz_ba_ii_5',
                sentence: '「日本語{にほんご}が上手{じょうず}になりたいんです。どうすれば（　）。」\n「毎日{まいにち}少{すこ}しずつ練習{れんしゅう}することですね。」',
                options: ['いいですね', 'いいですか', 'いいですよ', 'いいですけど'],
                correctIndex: 1,
                explanation: '對話情境。用「〜ばいいですか」詢問建議。'
            }
        ]
    },

    'n3_ba_noni': {
        id: 'n3_ba_noni',
        pattern: 'ばのに',
        connection: '動詞{どうし}ば形{けい} + のに / い形容詞{けいようし}（去{きょ}い）+ ければのに',
        translation: '要是...的話就好了; 明明...卻...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示對現實的遺憾',
                description: '「ばのに」用於表達與現實相反的假設，帶有遺憾或責備的語氣。',
                examples: [
                    { japanese: 'もっと早{はや}く来{く}ればのに。', chinese: '要是早點來就好了。' },
                    { japanese: '聞{き}けばのに、なぜ聞{き}かなかったの？', chinese: '明明問一下就好了，為什麼不問呢？' },
                    { japanese: '「電話{でんわ}してくれればのに。」\n「ごめん、忙{いそが}しくて忘{わす}れちゃった。」', chinese: '「打個電話給我就好了。」\n「對不起，太忙忘了。」' }
                ]
            }
        ],
        analysis: {
            title: '「ばのに」的用法分析',
            description: '表達假設條件成立時的遺憾。',
            points: [
                { rule: '與「ばよかった」類似', explanation: '都表示對過去的遺憾' },
                { rule: '常帶有責備語氣', explanation: '責怪對方或自己沒有那樣做' },
                { rule: '「のに」加強遺憾感', explanation: '強調與期望相反的結果' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ba_noni_1',
                sentence: '言{い}ってくれれ（　）、手伝{てつだ}ったのに。',
                options: ['ばのに', 'まで', 'から', 'さえ'],
                correctIndex: 0,
                explanation: '要是說了就好了，我可以幫忙的。'
            },
            {
                id: 'n3_quiz_ba_noni_2',
                sentence: 'もっと勉強{べんきょう}すれ（　）。',
                options: ['ばのに', 'まで', 'から', 'さえ'],
                correctIndex: 0,
                explanation: '要是多讀點書就好了。'
            },
            {
                id: 'n3_quiz_ba_noni_3',
                sentence: '傘{かさ}を持{も}ってくれ（　）、濡{ぬ}れなかったのに。',
                options: ['さえ', 'まで', 'ばのに', 'から'],
                correctIndex: 2,
                explanation: '要是帶傘就好了，就不會淋濕了。'
            },
            {
                id: 'n3_quiz_ba_noni_4',
                sentence: '「連絡{れんらく}くれなかったね。」\n「連絡{れんらく}すれ（　）、ごめん。」',
                options: ['ばのに', 'さえ', 'から', 'まで'],
                correctIndex: 0,
                explanation: '對話情境。要是聯絡就好了，對不起。'
            },
            {
                id: 'n3_quiz_ba_noni_5',
                sentence: '「なんで買{か}わなかったの？」\n「買{か}え（　）、お金{かね}がなかったんだよ。」',
                options: ['ばのに', 'さえ', 'まで', 'から'],
                correctIndex: 0,
                explanation: '對話情境。想買的話也沒錢啊。'
            }
        ]
    },

    'n3_ba_yokatta': {
        id: 'n3_ba_yokatta',
        pattern: 'ばよかった',
        connection: '動詞{どうし}ば形{けい} + よかった\nい形容詞{けいようし}（去{きょ}い）+ ければよかった\nな形容詞{けいようし}・名詞{めいし} + であればよかった / ならよかった',
        translation: '要是...就好了; 早知道就...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '對過去的後悔',
                description: '表示對過去沒做某事或做錯某事的後悔。帶有「早知道就...」的惋惜語氣。',
                examples: [
                    { japanese: 'もっと早{はや}く起{お}きればよかった。', chinese: '要是早點起床就好了。' },
                    { japanese: '傘{かさ}を持{も}ってくればよかった。', chinese: '早知道就帶傘來了。' },
                    {
                        japanese: '「あーあ、また電車{でんしゃ}に乗{の}り遅{おく}れちゃった。」\n「何時{なんじ}に家{いえ}を出{で}たの？」\n「8時{じ}だけど...もう少{すこ}し早{はや}く出{で}ればよかったなあ。」\n「明日{あした}からは気{き}をつけなよ。」',
                        chinese: '「唉，又沒趕上電車了。」\n「幾點出門的？」\n「8點啦...早知道早一點出門就好了。」\n「明天開始要注意喔。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「〜ばよかった」與「〜たらよかった」的比較',
            description: '兩者意思相同，都表示後悔，可以互換使用。',
            points: [
                {
                    rule: '〜ばよかった：較書面、正式的說法。',
                    examples: [{ japanese: '勉強{べんきょう}すればよかった。', chinese: '早知道用功就好了。' }]
                },
                {
                    rule: '〜たらよかった：較口語的說法。',
                    examples: [{ japanese: '勉強{べんきょう}したらよかった。', chinese: '早知道用功就好了。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ba_yokatta_1',
                sentence: 'あの映画{えいが}、見{み}（　）よかった。すごく面白{おもしろ}かったらしい。',
                options: ['て', 'ると', 'れば', 'たら'],
                correctIndex: 2,
                explanation: '表示「早知道就看了」的後悔。「見る」→「見れば」。'
            },
            {
                id: 'n3_quiz_ba_yokatta_2',
                sentence: '大学{だいがく}でもっと英語{えいご}を（　）よかった。',
                options: ['勉強して', '勉強すると', '勉強すれば', '勉強したら'],
                correctIndex: 2,
                explanation: '對過去沒有好好學英語的後悔。'
            },
            {
                id: 'n3_quiz_ba_yokatta_3',
                sentence: '安{やす}い時{とき}に買{か}（　）よかったなあ。',
                options: ['って', 'うと', 'ったら', 'えば'],
                correctIndex: 3,
                explanation: '「買う」→「買えば」。早知道便宜時就買了。'
            },
            {
                id: 'n3_quiz_ba_yokatta_4',
                sentence: '「テスト、どうだった？」\n「全然{ぜんぜん}できなかった。もっと勉強{べんきょう}（　）よかった...」',
                options: ['して', 'すると', 'すれば', 'したら'],
                correctIndex: 2,
                explanation: '對話情境。考試失敗後的後悔。'
            },
            {
                id: 'n3_quiz_ba_yokatta_5',
                sentence: '「彼{かれ}と別{わか}れたの？」\n「うん...あんなこと言{い}わなければ（　）。」',
                options: ['よかったら', 'よかった', 'よかったのに', 'よくて'],
                correctIndex: 1,
                explanation: '對話情境。後悔說了那些話。'
            }
        ]
    },
    'n3_bakari_de': {
        id: 'n3_bakari_de',
        pattern: 'ばかりで',
        connection: '動詞{どうし}て形{けい} + ばかりで\n名詞{めいし} + ばかりで',
        translation: '光是...; 淨是... (負面)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '只做某事（帶有批評或不滿）',
                description: '表示只做某事而不做其他應該做的事，或某種狀況一直持續。通常帶有說話者的不滿或批評。',
                examples: [
                    { japanese: '彼{かれ}は遊{あそ}んでばかりで、全然{ぜんぜん}勉強{べんきょう}しない。', chinese: '他光是玩，完全不讀書。' },
                    { japanese: '最近{さいきん}、仕事{しごと}ばかりで疲{つか}れた。', chinese: '最近淨是工作，累死了。' },
                    {
                        japanese: '「最近{さいきん}、全然{ぜんぜん}運動{うんどう}してないな...」\n「どうしたの？」\n「仕事{しごと}が忙{いそが}しくて、食{た}べてばかりで太{ふと}っちゃったよ。」\n「私{わたし}も同{おな}じだよ。一緒{いっしょ}にジムに行{い}かない？」',
                        chinese: '「最近完全沒運動呢...」\n「怎麼了？」\n「工作太忙，光是吃結果變胖了。」\n「我也一樣。要不要一起去健身房？」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n3_quiz_bakari_de_1',
                sentence: '彼{かれ}は文句{もんく}を（　）ばかりで、何{なに}もしない。',
                options: ['言う', '言い', '言った', '言って'],
                correctIndex: 3,
                explanation: '「〜てばかりで」表示只做某事。「言う」→「言って」。'
            },
            {
                id: 'n3_quiz_bakari_de_2',
                sentence: 'テレビを（　）ばかりで、宿題{しゅくだい}をしなさい！',
                options: ['見る', '見た', '見', '見て'],
                correctIndex: 3,
                explanation: '只看電視不做功課。帶有責備語氣。'
            },
            {
                id: 'n3_quiz_bakari_de_3',
                sentence: 'このレストランは値段{ねだん}が高{たか}い（　）で、料理{りょうり}はおいしくない。',
                options: ['だけ', 'ばかり', 'まで', 'しか'],
                correctIndex: 1,
                explanation: '「ばかりで」表示只有價格貴，但東西不好吃（負面評價）。'
            },
            {
                id: 'n3_quiz_bakari_de_4',
                sentence: '「弟{おとうと}、最近{さいきん}どう？」\n「ゲーム（　）ばかりで困{こま}ってるよ。」',
                options: ['する', 'して', 'し', 'した'],
                correctIndex: 1,
                explanation: '對話情境。弟弟光是打電動（令人困擾）。'
            },
            {
                id: 'n3_quiz_bakari_de_5',
                sentence: '「その本{ほん}、もう読{よ}んだ？」\n「いや、買{か}って（　）で、まだ読{よ}んでないんだ。」',
                options: ['まで', 'ばかり', 'しか', 'だけ'],
                correctIndex: 1,
                explanation: '對話情境。光是買了還沒讀。'
            }
        ]
    },
    'n3_bakari_denaku': {
        id: 'n3_bakari_denaku',
        pattern: 'ばかりでなく',
        connection: '名詞{めいし} + ばかりでなく\n動詞{どうし}普通{ふつう}形{けい} + ばかりでなく\nい形容詞{けいようし} + ばかりでなく\nな形容詞{けいようし} + な/である + ばかりでなく',
        translation: '不僅...而且...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '累加・並列',
                description: '表示不只是A，還有B。用於強調範圍擴大或情況加深。相當於「だけでなく」，但語氣較強。',
                examples: [
                    { japanese: '彼{かれ}は英語{えいご}ばかりでなく、中国語{ちゅうごくご}も話{はな}せる。', chinese: '他不僅會說英語，還會說中文。' },
                    { japanese: 'この店{みせ}は味{あじ}がいいばかりでなく、値段{ねだん}も安{やす}い。', chinese: '這家店不僅味道好，價格也便宜。' },
                    {
                        japanese: '「この新{あたら}しいスマホ、どう？」\n「すごくいいよ。性能{せいのう}がいいばかりでなく、デザインも素敵{すてき}なんだ。」\n「へえ、じゃあ私{わたし}も買{か}おうかな。」',
                        chinese: '「這支新手機怎麼樣？」\n「超棒的。不僅性能好，設計也很漂亮。」\n「是喔，那我也來買一支好了。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「ばかりでなく」與「だけでなく」的比較',
            description: '意思相同，但語氣強弱有別。',
            points: [
                {
                    rule: '「ばかりでなく」：語氣較強，常用於強調。',
                    examples: [{ japanese: '雨{あめ}ばかりでなく、風{かぜ}も強{つよ}かった。', chinese: '不僅下雨，風也很大。' }]
                },
                {
                    rule: '「だけでなく」：語氣較中性。',
                    examples: [{ japanese: '雨{あめ}だけでなく、風{かぜ}も強{つよ}かった。', chinese: '不僅下雨，風也很大。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_bakari_denaku_1',
                sentence: '日本{にほん}ばかりでなく、海外{かいがい}（　）人気{にんき}がある。',
                options: ['とも', 'でも', 'へも', 'にも'],
                correctIndex: 1,
                explanation: '不僅在日本，在海外也很受歡迎。後面常接「も」。'
            },
            {
                id: 'n3_quiz_bakari_denaku_2',
                sentence: '彼女{かのじょ}は歌{うた}が上手{じょうず}な（　）、ダンスもできる。',
                options: ['ばかりか', 'ばかりに', 'ばかりで', 'ばかりでなく'],
                correctIndex: 3,
                explanation: '不僅歌唱得好，舞也跳得好。'
            },
            {
                id: 'n3_quiz_bakari_denaku_3',
                sentence: 'この仕事{しごと}は給料{きゅうりょう}がいいばかりでなく、（　）。',
                options: ['疲れる', '大変だ', '休みも多い', '休みが少ない'],
                correctIndex: 2,
                explanation: '「ばかりでなく」後面接正面的內容，表示累加。'
            },
            {
                id: 'n3_quiz_bakari_denaku_4',
                sentence: '「この大学{だいがく}、どうしてそんなに人気{にんき}なの？」\n「設備{せつび}がいい（　）、先生{せんせい}も優秀{ゆうしゅう}なんだって。」',
                options: ['ばかりか', 'ばかりに', 'ばかりで', 'ばかりでなく'],
                correctIndex: 3,
                explanation: '對話情境。不僅設備好，老師也優秀。'
            },
            {
                id: 'n3_quiz_bakari_denaku_5',
                sentence: '「彼{かれ}はすごいね。」\n「うん、頭{あたま}がいい（　）、スポーツも得意{とくい}なんだよ。」',
                options: ['ばかりか', 'ばかりで', 'ばかりに', 'ばかりでなく'],
                correctIndex: 3,
                explanation: '對話情境。不僅頭腦好，運動也擅長。'
            }
        ]
    },
    'n3_ba_hodo': {
        id: 'n3_ba_hodo',
        pattern: 'ば～ほど',
        connection: '動詞{どうし}ば形{けい} + 動詞{どうし}辭書{じしょ}形{けい} + ほど\nい形容詞{けいようし}（-ければ） + い形容詞{けいようし} + ほど\nな形容詞{けいようし} + なら/であれば + な形容詞{けいようし} + なほど',
        translation: '越...越...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '程度隨條件變化',
                description: '表示隨著前項程度的增加，後項也會相應地變化。強調兩者之間的正比關係。',
                examples: [
                    { japanese: '練習{れんしゅう}すればするほど、上手{じょうず}になる。', chinese: '越練習越進步。' },
                    { japanese: 'この本{ほん}は読{よ}めば読{よ}むほど面白{おもしろ}い。', chinese: '這本書越讀越有趣。' },
                    {
                        japanese: '「日本語{にほんご}の勉強{べんきょう}、大変{たいへん}？」\n「うん、でも勉強{べんきょう}すればするほど楽{たの}しくなってきたよ。」\n「それはいいね。やっぱり好{す}きこそものの上手{じょうず}なれだね。」',
                        chinese: '「學日語很辛苦嗎？」\n「嗯，但是越學越覺得有趣了喔。」\n「那很好啊。果然興趣是最好的老師呢。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n3_quiz_ba_hodo_1',
                sentence: '考{かんが}えれば（　）ほど、わからなくなる。',
                options: ['考えて', '考えた', '考え', '考える'],
                correctIndex: 3,
                explanation: '「〜ば〜ほど」中間放辭書形。越想越不懂。'
            },
            {
                id: 'n3_quiz_ba_hodo_2',
                sentence: '年{とし}を取{と}れば（　）ほど、時間{じかん}が早{はや}く過{す}ぎる気{き}がする。',
                options: ['取って', '取り', '取る', '取った'],
                correctIndex: 2,
                explanation: '越上年紀越覺得時間過得快。'
            },
            {
                id: 'n3_quiz_ba_hodo_3',
                sentence: '高{たか}ければ高{たか}いほど、品質{ひんしつ}が（　）というわけではない。',
                options: ['よくて', 'いい', 'よい', 'いくて'],
                correctIndex: 1,
                explanation: '並非越貴品質越好。'
            },
            {
                id: 'n3_quiz_ba_hodo_4',
                sentence: '「この曲{きょく}、どう？」\n「（　）聞{き}くほど好{す}きになるね。」',
                options: ['聞くと', '聞いて', '聞けば', '聞いたら'],
                correctIndex: 2,
                explanation: '對話情境。越聽越喜歡這首歌。'
            },
            {
                id: 'n3_quiz_ba_hodo_5',
                sentence: '「日本{にほん}の文化{ぶんか}、面白{おもしろ}いよね。」\n「うん、（　）深{ふか}いほど興味深{きょうみぶか}いね。」',
                options: ['知ると知る', '知ったら知る', '知れば知る', '知って知る'],
                correctIndex: 2,
                explanation: '對話情境。越了解越覺得深奧有趣。'
            }
        ]
    },
    'n3_beki_da': {
        id: 'n3_beki_da',
        pattern: 'べきだ',
        connection: '動詞{どうし}辭書{じしょ}形{けい} + べきだ\n※「する」可{か}變{へん}為{い}「すべき」或{あるい}「するべき」',
        translation: '應該...; 必須...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '義務・當然',
                description: '表示從道義、常識、社會規範來看，做某事是應該的、正確的。語氣較強，帶有說話者的主張。',
                examples: [
                    { japanese: '約束{やくそく}は守{まも}るべきだ。', chinese: '應該遵守約定。' },
                    { japanese: '学生{がくせい}はもっと勉強{べんきょう}すべきだ。', chinese: '學生應該更用功讀書。' },
                    {
                        japanese: '「電車{でんしゃ}の中{なか}でお年寄{としよ}りに席{せき}を譲{ゆず}らない若者{わかもの}が増{ふ}えたね。」\n「そうだね。困{こま}っている人{ひと}がいたら助{たす}けるべきだと思{おも}うけど。」\n「まあ、最近{さいきん}の若{わか}い人{ひと}も悪{わる}い人{ひと}ばかりじゃないけどね。」',
                        chinese: '「在電車裡不讓座給老人家的年輕人變多了呢。」\n「是啊。我覺得看到有困難的人應該要幫忙的。」\n「嗯，不過最近的年輕人也不是都那麼糟糕啦。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「べきだ」與「ほうがいい」的比較',
            description: '兩者都可用於建議，但語氣強弱不同。',
            points: [
                {
                    rule: '「べきだ」：強烈的義務感，接近命令。',
                    examples: [{ japanese: '嘘{うそ}をつくべきではない。', chinese: '不應該說謊。' }]
                },
                {
                    rule: '「ほうがいい」：較委婉的建議。',
                    examples: [{ japanese: '嘘{うそ}をつかないほうがいい。', chinese: '不說謊比較好。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_beki_da_1',
                sentence: '人{ひと}の悪口{わるくち}を（　）べきではない。',
                options: ['言い', '言った', '言って', '言う'],
                correctIndex: 3,
                explanation: '「べき」前接動詞辭書形。不應該說別人壞話。'
            },
            {
                id: 'n3_quiz_beki_da_2',
                sentence: '健康{けんこう}のために、もっと運動{うんどう}（　）べきだ。',
                options: ['した', 'して', 'する', 'し'],
                correctIndex: 2,
                explanation: '為了健康應該多運動。「するべき」或「すべき」都可。'
            },
            {
                id: 'n3_quiz_beki_da_3',
                sentence: 'この問題{もんだい}は真剣{しんけん}に（　）べきだ。',
                options: ['考える', '考えて', '考えた', '考え'],
                correctIndex: 0,
                explanation: '這個問題應該認真思考。'
            },
            {
                id: 'n3_quiz_beki_da_4',
                sentence: '「環境問題{かんきょうもんだい}について、どう思{おも}う？」\n「みんながもっと（　）べきだと思{おも}うよ。」',
                options: ['考え', '考えた', '考える', '考えて'],
                correctIndex: 2,
                explanation: '對話情境。大家應該更加思考這個問題。'
            },
            {
                id: 'n3_quiz_beki_da_5',
                sentence: '「彼{かれ}、遅刻{ちこく}ばかりだね。」\n「うん、社会人{しゃかいじん}として時間{じかん}は（　）べきだよ。」',
                options: ['守り', '守った', '守って', '守る'],
                correctIndex: 3,
                explanation: '對話情境。作為社會人士應該遵守時間。'
            }
        ]
    },
    'n3_beki_dewa_nai': {
        id: 'n3_beki_dewa_nai',
        pattern: 'べきではない',
        connection: '動詞{どうし}辭書{じしょ}形{けい} + べきではない / べきじゃない',
        translation: '不應該...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '禁止・不當',
                description: '表示從道義或常識來看，不應該做某事。是「べきだ」的否定形式，語氣同樣強烈。',
                examples: [
                    { japanese: '他人{たにん}の秘密{ひみつ}を言{い}うべきではない。', chinese: '不應該說別人的秘密。' },
                    { japanese: '子供{こども}の前{まえ}でタバコを吸{す}うべきではない。', chinese: '不應該在小孩面前抽菸。' },
                    {
                        japanese: '「あの二人{ふたり}、喧嘩{けんか}してるみたい。」\n「そうなの？でも、私{わたし}たちが口{くち}を出{だ}すべきじゃないよね。」\n「うん、二人{ふたり}の問題{もんだい}だからね。」',
                        chinese: '「那兩個人好像在吵架。」\n「是嗎？但我們不應該插嘴吧。」\n「嗯，畢竟是他們兩個人的問題。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n3_quiz_beki_dewa_nai_1',
                sentence: '公共{こうきょう}の場{ば}で大声{おおごえ}を（　）べきではない。',
                options: ['出した', '出し', '出して', '出す'],
                correctIndex: 3,
                explanation: '在公共場所不應該大聲喧嘩。'
            },
            {
                id: 'n3_quiz_beki_dewa_nai_2',
                sentence: '人{ひと}を外見{がいけん}で（　）べきではない。',
                options: ['判断した', '判断して', '判断する', '判断し'],
                correctIndex: 2,
                explanation: '不應該以外表判斷人。'
            },
            {
                id: 'n3_quiz_beki_dewa_nai_3',
                sentence: 'そんな簡単{かんたん}に（　）べきではないよ。',
                options: ['諦め', '諦める', '諦めた', '諦めて'],
                correctIndex: 1,
                explanation: '不應該那麼輕易放棄。'
            },
            {
                id: 'n3_quiz_beki_dewa_nai_4',
                sentence: '「彼女{かのじょ}に本当{ほんとう}のこと言{い}おうかな。」\n「うーん、今{いま}は（　）べきじゃないと思{おも}うよ。」',
                options: ['言って', '言い', '言った', '言う'],
                correctIndex: 3,
                explanation: '對話情境。現在不應該說出真相。'
            },
            {
                id: 'n3_quiz_beki_dewa_nai_5',
                sentence: '「この情報{じょうほう}、SNSに載{の}せてもいい？」\n「ダメだよ。個人情報{こじんじょうほう}を勝手{かって}に（　）べきじゃない。」',
                options: ['公開して', '公開した', '公開する', '公開し'],
                correctIndex: 2,
                explanation: '對話情境。不應該擅自公開個人資訊。'
            }
        ]
    },
    'n3_betsu_ni_nai': {
        id: 'n3_betsu_ni_nai',
        pattern: '別{べつ}に～ない',
        connection: '別{べつ}に + 動詞{どうし}ない形{けい}\n別{べつ}に + い形容詞{けいようし}くない\n別{べつ}に + な形容詞{けいようし}ではない',
        translation: '並非特別...; 並不...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '否定特別性',
                description: '表示程度不高、沒什麼特別的。口語中常用來表達「沒什麼」「不怎麼樣」的意思。有時帶有冷淡或不在乎的語氣。',
                examples: [
                    { japanese: '別{べつ}に怒{おこ}ってないよ。', chinese: '我並沒有生氣。' },
                    { japanese: 'この映画{えいが}は別{べつ}に面白{おもしろ}くない。', chinese: '這部電影並沒有多有趣。' },
                    {
                        japanese: '「ねえ、大丈夫{だいじょうぶ}？何{なに}かあった？」\n「別{べつ}に...何{なに}もないよ。」\n「そう？なんか元気{げんき}ないみたいだけど。」\n「うん、ちょっと疲{つか}れてるだけ。」',
                        chinese: '「欸，你還好嗎？發生什麼事了？」\n「沒什麼...沒事啦。」\n「是嗎？你看起來不太有精神耶。」\n「嗯，只是有點累而已。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n3_quiz_betsu_ni_nai_1',
                sentence: 'あの店{みせ}の料理{りょうり}は別{べつ}に（　）。',
                options: ['おいしかった', 'おいしくて', 'おいしい', 'おいしくない'],
                correctIndex: 3,
                explanation: '「別に」後接否定形，表示「並沒有多好吃」。'
            },
            {
                id: 'n3_quiz_betsu_ni_nai_2',
                sentence: '「寒{さむ}くない？」「別{べつ}に（　）よ。」',
                options: ['寒い', '寒かった', '寒くない', '寒くて'],
                correctIndex: 2,
                explanation: '「別に寒くない」表示「並不覺得冷」。'
            },
            {
                id: 'n3_quiz_betsu_ni_nai_3',
                sentence: '別{べつ}に急{いそ}いで（　）から、ゆっくり来{き}てね。',
                options: ['いた', 'いる', 'いて', 'いない'],
                correctIndex: 3,
                explanation: '「急いでいない」表示「並沒有在趕」。'
            },
            {
                id: 'n3_quiz_betsu_ni_nai_4',
                sentence: '「彼女{かのじょ}のこと、好{す}きなんでしょ？」\n「別{べつ}にそんなこと（　）よ。」',
                options: ['ない', 'なくて', 'ある', 'あって'],
                correctIndex: 0,
                explanation: '對話情境。否認有那回事。'
            },
            {
                id: 'n3_quiz_betsu_ni_nai_5',
                sentence: '「何{なに}か食{た}べたいものある？」\n「別{べつ}に（　）よ。何{なん}でもいい。」',
                options: ['ない', 'ある', 'なくて', 'あって'],
                correctIndex: 0,
                explanation: '對話情境。表示沒有特別想吃的東西。'
            }
        ]
    },

    'n3_betsu_ni_nai_1': {
        id: 'n3_betsu_ni_nai_1',
        pattern: '別{べつ}に～ない',
        connection: '別{べつ}に + 動詞{どうし}ない形{けい} / い形容詞{けいようし}くない / な形容詞{けいようし}ではない',
        translation: '並不特別...; 不怎麼...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '否定特殊性',
                description: '「別に～ない」用於否定某事具有特殊性，表示沒有什麼特別的。語氣較為冷淡。',
                examples: [
                    { japanese: '別{べつ}に嫌{きら}いじゃない。', chinese: '並不是特別討厭。' },
                    { japanese: '別{べつ}に難{むずか}しくなかった。', chinese: '不怎麼難。' },
                    { japanese: '「面白{おもしろ}かった？」\n「別{べつ}に面白{おもしろ}くなかったよ。」', chinese: '「有趣嗎？」\n「不怎麼有趣。」' }
                ]
            }
        ],
        analysis: {
            title: '「別に～ない」的語感分析',
            description: '表達淡然或輕描淡寫的否定。',
            points: [
                { rule: '語氣冷淡', explanation: '表示不在意或無所謂' },
                { rule: '弱化否定', explanation: '比直接否定語氣柔和' },
                { rule: '年輕人常用', explanation: '口語中非常常見' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_betsu_ni_nai_1_1',
                sentence: '別{べつ}に忙{いそが}（　）よ。',
                options: ['しくない', 'から', 'まで', 'さえ'],
                correctIndex: 0,
                explanation: '不怎麼忙。'
            },
            {
                id: 'n3_quiz_betsu_ni_nai_1_2',
                sentence: '別{べつ}に行{い}き（　）よ。',
                options: ['から', 'さえ', 'たくない', 'まで'],
                correctIndex: 2,
                explanation: '不特別想去。'
            },
            {
                id: 'n3_quiz_betsu_ni_nai_1_3',
                sentence: '別{べつ}に驚{おどろ}（　）よ。',
                options: ['さえ', 'まで', 'かない', 'から'],
                correctIndex: 2,
                explanation: '不怎麼驚訝。'
            },
            {
                id: 'n3_quiz_betsu_ni_nai_1_4',
                sentence: '「寒{さむ}い？」\n「別{べつ}に寒{さむ}（　）よ。」',
                options: ['さえ', 'から', 'くない', 'まで'],
                correctIndex: 2,
                explanation: '對話情境。不怎麼冷。'
            },
            {
                id: 'n3_quiz_betsu_ni_nai_1_5',
                sentence: '「悔{くや}しい？」\n「別{べつ}に悔{くや}し（　）よ。」',
                options: ['さえ', 'から', 'くない', 'まで'],
                correctIndex: 2,
                explanation: '對話情境。不怎麼不甘心。'
            }
        ]
    },

    'n3_buri_ni': {
        id: 'n3_buri_ni',
        pattern: 'ぶりに',
        connection: '期間{きかん}を表{あらわ}す言葉{ことば} + ぶりに',
        translation: '隔了...; 時隔...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '時間間隔',
                description: '表示距離上次做某事已經過了多長時間。強調時間的間隔長度。',
                examples: [
                    { japanese: '3年{ねん}ぶりに故郷{こきょう}に帰{かえ}った。', chinese: '時隔三年回到了故鄉。' },
                    { japanese: '久{ひさ}しぶりに会{あ}えて嬉{うれ}しいです。', chinese: '好久不見能見到你真高興。' },
                    {
                        japanese: '「あれ？田中{たなか}さん？久{ひさ}しぶり！」\n「山田{やまだ}さん！5年{ねん}ぶりだね。元気{げんき}だった？」\n「うん、おかげさまで。全然{ぜんぜん}変{か}わってないね！」\n「そんなことないよ。もうおじさんだよ。」',
                        chinese: '「咦？田中先生？好久不見！」\n「山田先生！5年沒見了呢。你好嗎？」\n「嗯，托您的福。你完全沒變呢！」\n「沒那回事啦。已經是大叔了。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n3_quiz_buri_ni_1',
                sentence: '10年{ねん}（　）、昔{むかし}の友達{ともだち}に会{あ}った。',
                options: ['まえに', 'あとに', 'ぶりに', 'ごとに'],
                correctIndex: 2,
                explanation: '時隔10年見到了老朋友。'
            },
            {
                id: 'n3_quiz_buri_ni_2',
                sentence: '半年{はんとし}（　）、日本{にほん}料理{りょうり}を食{た}べた。',
                options: ['ぶりに', 'あとに', 'まえに', 'ごとに'],
                correctIndex: 0,
                explanation: '時隔半年吃了日本料理。'
            },
            {
                id: 'n3_quiz_buri_ni_3',
                sentence: '久{ひさ}し（　）、実家{じっか}に電話{でんわ}した。',
                options: ['ごとに', 'まえに', 'ぶりに', 'あとに'],
                correctIndex: 2,
                explanation: '「久しぶりに」是固定用法，表示「好久不見地」。'
            },
            {
                id: 'n3_quiz_buri_ni_4',
                sentence: '「最近{さいきん}、運動{うんどう}してる？」\n「うん、1ヶ月{げつ}（　）ジムに行{い}ってきたよ。」',
                options: ['ごとに', 'ぶりに', 'あとに', 'まえに'],
                correctIndex: 1,
                explanation: '對話情境。時隔一個月去了健身房。'
            },
            {
                id: 'n3_quiz_buri_ni_5',
                sentence: '「久{ひさ}しぶり！2年{ねん}（　）だね。」\n「本当{ほんとう}だね。会{あ}えて嬉{うれ}しいよ。」',
                options: ['あと', 'まえ', 'ごと', 'ぶり'],
                correctIndex: 3,
                explanation: '對話情境。時隔兩年。'
            }
        ]
    },
    'n3_chuu': {
        id: 'n3_chuu',
        pattern: '中{ちゅう/じゅう}（ちゅう）',
        connection: '名詞{めいし} + 中{ちゅう/じゅう}',
        translation: '正在...中; ...期間',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '動作進行中',
                description: '表示某個動作或狀態正在進行中。相當於「〜している間」。',
                examples: [
                    { japanese: '会議中{かいぎちゅう}なので、後{あと}で電話{でんわ}します。', chinese: '正在開會中，稍後再打給你。' },
                    { japanese: '食事中{しょくじちゅう}はスマホを見{み}ないでください。', chinese: '用餐中請不要看手機。' },
                    {
                        japanese: '「もしもし、田中{たなか}さんいらっしゃいますか？」\n「申{もう}し訳{わけ}ございません。田中{たなか}は只今{ただいま}会議中{かいぎちゅう}でして...」\n「そうですか。では、後{あと}でまたお電話{でんわ}します。」\n「かしこまりました。お伝{つた}えしておきます。」',
                        chinese: '「喂，請問田中先生在嗎？」\n「非常抱歉。田中目前正在開會中...」\n「這樣啊。那我稍後再打。」\n「好的。我會轉告他。」',
                        note: '對話情境展示'
                    }
                ]
            },
            {
                usageId: 2,
                title: '期間內',
                description: '表示在某個期間之內。',
                examples: [
                    { japanese: '今週{こんしゅう}中{こんしゅうちゅう}に返事{へんじ}をください。', chinese: '請在這週內回覆我。' },
                    { japanese: '午前中{ごぜんちゅう}に届{とど}けます。', chinese: '上午之內會送達。' }
                ]
            }
        ],
        analysis: {
            title: '「〜中（ちゅう）」與「〜中（じゅう）」的比較',
            description: '讀音不同，意思也有差異。',
            points: [
                {
                    rule: '「〜中（ちゅう）」：進行中、期間內',
                    examples: [{ japanese: '工事中{こうじちゅう}', chinese: '施工中' }]
                },
                {
                    rule: '「〜中（じゅう）」：整個範圍、全部',
                    examples: [{ japanese: '一日中{いちにちじゅう}', chinese: '一整天' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_chuu_1',
                sentence: '授業{じゅぎょう}（　）は静{しず}かにしてください。',
                options: ['後', '中', '前', 'の間'],
                correctIndex: 1,
                explanation: '上課中請安靜。「授業中」是固定用法。'
            },
            {
                id: 'n3_quiz_chuu_2',
                sentence: '運転{うんてん}（　）に電話{でんわ}をしてはいけません。',
                options: ['前', '後', '中', 'の間'],
                correctIndex: 2,
                explanation: '開車中不可以打電話。'
            },
            {
                id: 'n3_quiz_chuu_3',
                sentence: 'この仕事{しごと}は今月{こんげつ}（　）に終{お}わらせなければならない。',
                options: ['前', '中', '間', '後'],
                correctIndex: 1,
                explanation: '這個工作必須在這個月內完成。'
            },
            {
                id: 'n3_quiz_chuu_4',
                sentence: '「すみません、部長{ぶちょう}はいらっしゃいますか。」\n「申{もう}し訳{わけ}ありません、部長{ぶちょう}は外出{がいしゅつ}（　）です。」',
                options: ['中', '間', '後', '前'],
                correctIndex: 0,
                explanation: '對話情境。部長外出中。'
            },
            {
                id: 'n3_quiz_chuu_5',
                sentence: '「このレポート、いつまでに出{だ}せばいいですか。」\n「今週{こんしゅう}（　）にお願{ねが}いします。」',
                options: ['間', '中', '前', '後'],
                correctIndex: 1,
                explanation: '對話情境。請在這週內提交。'
            }
        ]
    },
    'n3_dake': {
        id: 'n3_dake',
        pattern: 'だけ',
        connection: '動詞{どうし}辭書{じしょ}形{けい} / 可能{かのう}形{けい} + だけ',
        translation: '盡量...; 足以...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '盡可能地',
                description: '「〜るだけ〜」表示在能力範圍內盡最大努力。強調盡可能地做到最大程度。',
                examples: [
                    { japanese: '食{た}べられるだけ食{た}べてください。', chinese: '請盡量吃。' },
                    { japanese: 'できるだけ早{はや}く来{き}てください。', chinese: '請盡可能早點來。' },
                    {
                        japanese: '「今日{きょう}のビュッフェ、たくさん食{た}べた？」\n「うん！食{た}べられるだけ食{た}べたよ。お腹{なか}いっぱい。」\n「私{わたし}も。元{もと}は取{と}れたかな。」\n「絶対{ぜったい}取{と}れたと思{おも}う！」',
                        chinese: '「今天的自助餐，吃很多嗎？」\n「嗯！盡量吃了。肚子好飽。」\n「我也是。應該回本了吧。」\n「絕對回本了！」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: 'N5「だけ」與N3「だけ」的比較',
            description: '同樣是「だけ」但用法不同。',
            points: [
                {
                    rule: 'N5「だけ」：限定，表示「只有」',
                    examples: [{ japanese: '水{みず}だけ飲{の}んだ。', chinese: '只喝了水。' }]
                },
                {
                    rule: 'N3「〜るだけ〜」：盡量，表示「盡可能」',
                    examples: [{ japanese: '飲{の}めるだけ飲{の}んだ。', chinese: '盡量喝了。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_dake_1',
                sentence: '今日{きょう}は（　）だけ働{はたら}きます。',
                options: ['できる', 'できた', 'できて', 'できない'],
                correctIndex: 0,
                explanation: '「できるだけ」表示「盡可能地」。'
            },
            {
                id: 'n3_quiz_dake_2',
                sentence: '持{も}てる（　）荷物{にもつ}を持{も}っていきます。',
                options: ['だけ', 'くらい', 'ほど', 'まで'],
                correctIndex: 0,
                explanation: '「持てるだけ」表示盡量帶能帶的行李。'
            },
            {
                id: 'n3_quiz_dake_3',
                sentence: 'この問題{もんだい}は（　）だけ自分{じぶん}で考{かんが}えてみてください。',
                options: ['できた', 'できる', 'できない', 'できて'],
                correctIndex: 1,
                explanation: '請盡量自己思考這個問題。'
            },
            {
                id: 'n3_quiz_dake_4',
                sentence: '「この仕事{しごと}、いつまでに終{お}わる？」\n「（　）だけ早{はや}く終{お}わらせるよ。」',
                options: ['できる', 'できた', 'できて', 'できない'],
                correctIndex: 0,
                explanation: '對話情境。盡可能早點完成。'
            },
            {
                id: 'n3_quiz_dake_5',
                sentence: '「お金{かね}、どのくらい貯{た}めた？」\n「（　）だけ貯{た}めたつもりなんだけど...」',
                options: ['貯められて', '貯めて', '貯められた', '貯められる'],
                correctIndex: 3,
                explanation: '對話情境。盡量存了錢。'
            }
        ]
    },

    'n3_dake_de_naku': {
        id: 'n3_dake_de_naku',
        pattern: 'だけでなく',
        connection: '名詞{めいし}/動詞{どうし}普通{ふつう}形{けい}/い形容詞{けいようし}/な形容詞{けいようし}＋な + だけでなく',
        translation: '不僅...; 不只是...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示追加',
                description: '「だけでなく」用於表示不僅是前項，後項也是如此。常與「も」搭配使用。',
                examples: [
                    { japanese: '彼{かれ}は英語{えいご}だけでなく、中国語{ちゅうごくご}も話{はな}せる。', chinese: '他不只會說英語，也會說中文。' },
                    { japanese: '子供{こども}だけでなく、大人{おとな}も楽{たの}しめる映画{えいが}だ。', chinese: '這是不只小孩，大人也能享受的電影。' },
                    { japanese: '「日本語{にほんご}できる？」\n「うん、話{はな}すだけでなく、読{よ}み書{か}きもできるよ。」', chinese: '「你會日語嗎？」\n「嗯，不只會說，讀寫也可以。」' }
                ]
            }
        ],
        analysis: {
            title: '「だけでなく」的用法分析',
            description: '表達不僅限於此的意思。',
            points: [
                { rule: '後常接「も」', explanation: '「AだけでなくBも」是常見搭配' },
                { rule: '強調範圍擴大', explanation: '表示不止一件事' },
                { rule: '與「ばかりでなく」類似', explanation: '兩者意思相近' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_dake_de_naku_1',
                sentence: '勉強{べんきょう}（　）、スポーツも頑張{がんば}っている。',
                options: ['まで', 'だけでなく', 'から', 'さえ'],
                correctIndex: 1,
                explanation: '不只讀書，運動也很努力。'
            },
            {
                id: 'n3_quiz_dake_de_naku_2',
                sentence: '味{あじ}（　）、見{み}た目{め}も大切{たいせつ}だ。',
                options: ['まで', 'さえ', 'だけでなく', 'から'],
                correctIndex: 2,
                explanation: '不只味道，外觀也很重要。'
            },
            {
                id: 'n3_quiz_dake_de_naku_3',
                sentence: '東京{とうきょう}（　）、大阪{おおさか}にも店{みせ}がある。',
                options: ['から', 'まで', 'さえ', 'だけでなく'],
                correctIndex: 3,
                explanation: '不只東京，大阪也有店。'
            },
            {
                id: 'n3_quiz_dake_de_naku_4',
                sentence: '「料理{りょうり}上手{じょうず}？」\n「うん、作{つく}る（　）、食{た}べるのも好{す}き。」',
                options: ['まで', 'だけでなく', 'から', 'さえ'],
                correctIndex: 1,
                explanation: '對話情境。不只會做，吃也喜歡。'
            },
            {
                id: 'n3_quiz_dake_de_naku_5',
                sentence: '「彼{かれ}、優{やさ}しい？」\n「優{やさ}しい（　）、頭{あたま}もいいよ。」',
                options: ['さえ', 'から', 'だけでなく', 'まで'],
                correctIndex: 2,
                explanation: '對話情境。不只溫柔，頭腦也好。'
            }
        ]
    },

    'n3_dakedo': {
        id: 'n3_dakedo',
        pattern: 'だけど',
        connection: '動詞{どうし}/い形容詞{けいようし}/な形容詞{けいようし}＋な/名詞{めいし}＋な + んだけど',
        translation: '雖然...但是; ...可是',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示轉折或前提',
                description: '「だけど」用於口語中表示轉折，或提出前提引出後續話題。',
                examples: [
                    { japanese: '行{い}きたいんだけど、時間{じかん}がない。', chinese: '雖然想去，但沒時間。' },
                    { japanese: 'すみません、ちょっと聞{き}きたいんだけど...', chinese: '不好意思，我想問一下...' },
                    { japanese: '「明日{あした}暇{ひま}？」\n「暇{ひま}なんだけど、なんで？」', chinese: '「明天有空嗎？」\n「有空，怎麼了？」' }
                ]
            }
        ],
        analysis: {
            title: '「だけど」的用法分析',
            description: '口語中常見的轉折表達。',
            points: [
                { rule: '口語形式', explanation: '「だけど」比「だが」「けれども」更口語' },
                { rule: '可省略後半部分', explanation: '「～んだけど...」暗示有後續' },
                { rule: '用於開話題', explanation: '常用於提問或請求前的鋪墊' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_dakedo_1',
                sentence: '欲{ほ}しいん（　）、お金{かね}がない。',
                options: ['さえ', 'から', 'まで', 'だけど'],
                correctIndex: 3,
                explanation: '雖然想要，但沒錢。'
            },
            {
                id: 'n3_quiz_dakedo_2',
                sentence: '聞{き}きたいこともあるん（　）...',
                options: ['から', 'だけど', 'さえ', 'まで'],
                correctIndex: 1,
                explanation: '有想問的事...'
            },
            {
                id: 'n3_quiz_dakedo_3',
                sentence: '簡単{かんたん}そうに見{み}えるん（　）、実{じつ}は難{むずか}しい。',
                options: ['だけど', 'から', 'まで', 'さえ'],
                correctIndex: 0,
                explanation: '看起來簡單，其實很難。'
            },
            {
                id: 'n3_quiz_dakedo_4',
                sentence: '「今{いま}忙{いそが}しい？」\n「ちょっと忙{いそが}しいん（　）、何{なに}？」',
                options: ['だけど', 'まで', 'さえ', 'から'],
                correctIndex: 0,
                explanation: '對話情境。有點忙，怎麼了？'
            },
            {
                id: 'n3_quiz_dakedo_5',
                sentence: '「手伝{てつだ}おうか？」\n「ありがとう、お願{ねが}いしたいん（　）...」',
                options: ['さえ', 'まで', 'だけど', 'から'],
                correctIndex: 2,
                explanation: '對話情境。謝謝，想拜託你...'
            }
        ]
    },

    'n3_darake': {
        id: 'n3_darake',
        pattern: 'だらけ',
        connection: '名詞{めいし} + だらけ',
        translation: '滿是...; 全是... (負面)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '充滿（負面意味）',
                description: '表示到處都是某種東西，通常帶有負面、不好的語感。常用於髒污、錯誤、問題等。',
                examples: [
                    { japanese: '部屋{へや}が埃{ほこり}だらけだ。', chinese: '房間滿是灰塵。' },
                    { japanese: 'この作文{さくぶん}は間違{まちが}いだらけだ。', chinese: '這篇作文錯誤連連。' },
                    {
                        japanese: '「サッカーしてきたの？服{ふく}が泥{どろ}だらけじゃない！」\n「ごめん、転{ころ}んじゃって...」\n「もう！洗濯{せんたく}が大変{たいへん}だよ。」\n「ごめんね、今度{こんど}気{き}をつける。」',
                        chinese: '「去踢足球了嗎？衣服不是滿身泥巴嗎！」\n「抱歉，跌倒了...」\n「真是的！洗衣服很麻煩耶。」\n「對不起，下次會小心。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「だらけ」與「まみれ」的比較',
            description: '兩者都表示「滿是」，但用法有區別。',
            points: [
                {
                    rule: '「だらけ」：適用範圍較廣，可用於具體或抽象事物。',
                    examples: [{ japanese: '傷{きず}だらけ', chinese: '傷痕累累' }]
                },
                {
                    rule: '「まみれ」：主要用於液體或細小顆粒附著的狀態。',
                    examples: [{ japanese: '血{ち}まみれ', chinese: '滿身是血' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_darake_1',
                sentence: '庭{にわ}が雑草{ざっそう}（　）になってしまった。',
                options: ['まみれ', 'だらけ', 'ずくめ', 'っぽい'],
                correctIndex: 1,
                explanation: '院子長滿了雜草。'
            },
            {
                id: 'n3_quiz_darake_2',
                sentence: 'この部屋{へや}はゴミ（　）だ。',
                options: ['ずくめ', 'まみれ', 'っぽい', 'だらけ'],
                correctIndex: 3,
                explanation: '這房間到處都是垃圾。'
            },
            {
                id: 'n3_quiz_darake_3',
                sentence: '彼{かれ}の報告書{ほうこくしょ}はミス（　）だった。',
                options: ['っぽい', 'まみれ', 'だらけ', 'ずくめ'],
                correctIndex: 2,
                explanation: '他的報告書錯誤百出。'
            },
            {
                id: 'n3_quiz_darake_4',
                sentence: '「どうしたの？顔{かお}が傷{きず}（　）だよ。」\n「自転車{じてんしゃ}で転{ころ}んじゃって...」',
                options: ['だらけ', 'っぽい', 'まみれ', 'ずくめ'],
                correctIndex: 0,
                explanation: '對話情境。臉上都是傷。'
            },
            {
                id: 'n3_quiz_darake_5',
                sentence: '「このレポート、提出{ていしゅつ}してもいい？」\n「ダメだよ！誤字{ごじ}（　）だから、直{なお}してから出{だ}して。」',
                options: ['まみれ', 'ずくめ', 'っぽい', 'だらけ'],
                correctIndex: 3,
                explanation: '對話情境。報告錯字連連。'
            }
        ]
    },
    'n3_donna_ni_temo': {
        id: 'n3_donna_ni_temo',
        pattern: 'どんなに～ても',
        connection: 'どんなに + 動詞{どうし}ても / い形容詞{けいようし}くても / な形容詞{けいようし}でも',
        translation: '無論多麼...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '無論程度多高',
                description: '表示即使程度再高，結果也不會改變。強調條件與結果之間的對比。',
                examples: [
                    { japanese: 'どんなに忙{いそが}しくても、朝{あさ}ごはんは食{た}べる。', chinese: '無論多忙，都會吃早餐。' },
                    { japanese: 'どんなに難{むずか}しくても、諦{あきら}めない。', chinese: '無論多難，都不放棄。' },
                    {
                        japanese: '「この数学{すうがく}の問題{もんだい}、全然{ぜんぜん}わからない...」\n「どんなに考{かんが}えてもわからないときは、先生{せんせい}に聞{き}いた方{ほう}がいいよ。」\n「そうだね。明日{あした}聞{き}いてみる。」',
                        chinese: '「這個數學題我完全不會...」\n「無論怎麼想都不懂的時候，還是問老師比較好喔。」\n「說的也是。明天問問看。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n3_quiz_donna_ni_temo_1',
                sentence: 'どんなに（　）も、彼{かれ}は返事{へんじ}をくれなかった。',
                options: ['待っても', '待っても', '待っても', '待っても'],
                correctIndex: 0,
                explanation: '無論等多久，他都沒有回覆。'
            },
            {
                id: 'n3_quiz_donna_ni_temo_2',
                sentence: 'どんなに（　）も、この仕事{しごと}は終{お}わらない。',
                options: ['頑張る', '頑張った', '頑張って', '頑張り'],
                correctIndex: 2,
                explanation: '「〜ても」的形式。無論多努力，這工作都做不完。'
            },
            {
                id: 'n3_quiz_donna_ni_temo_3',
                sentence: 'どんなに高{たか}（　）も、欲{ほ}しいものは買{か}う。',
                options: ['くて', 'く', 'い', 'かった'],
                correctIndex: 0,
                explanation: '「高い」→「高くても」。無論多貴都買。'
            },
            {
                id: 'n3_quiz_donna_ni_temo_4',
                sentence: '「明日{あした}の試合{しあい}、勝{か}てるかな...」\n「どんなに強{つよ}い相手{あいて}（　）、諦{あきら}めないで頑張{がんば}ろう！」',
                options: ['だから', 'なのに', 'でも', 'ても'],
                correctIndex: 2,
                explanation: '對話情境。無論對手多強都不放棄。'
            },
            {
                id: 'n3_quiz_donna_ni_temo_5',
                sentence: '「毎日{まいにち}練習{れんしゅう}してるのに、上手{じょうず}にならないよ...」\n「どんなに時間{じかん}が（　）も、続{つづ}けることが大切{たいせつ}だよ。」',
                options: ['かかって', 'かかった', 'かかり', 'かかる'],
                correctIndex: 0,
                explanation: '對話情境。無論花多少時間，堅持下去很重要。'
            }
        ]
    },
    'n3_doushitemo': {
        id: 'n3_doushitemo',
        pattern: 'どうしても',
        connection: 'どうしても + 動詞{どうし} / 形容詞{けいようし}',
        translation: '無論如何; 怎麼也...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '強烈願望',
                description: '表示無論如何都想做某事，強調強烈的意志或願望。',
                examples: [
                    { japanese: 'どうしてもあの大学{だいがく}に入{はい}りたい。', chinese: '無論如何都想進那所大學。' },
                    { japanese: 'どうしても彼女{かのじょ}に会{あ}いたい。', chinese: '無論如何都想見她。' }
                ]
            },
            {
                usageId: 2,
                title: '無法做到（接否定）',
                description: '「どうしても〜ない」表示無論怎麼努力也做不到。',
                examples: [
                    { japanese: 'この問題{もんだい}がどうしても解{と}けない。', chinese: '這個問題怎麼也解不開。' },
                    {
                        japanese: '「昨日{きのう}の宿題{しゅくだい}、できた？」\n「うーん、この問題{もんだい}がどうしてもわからないんだ。」\n「見{み}せて。ああ、これは確{たし}かに難{むずか}しいね。一緒{いっしょ}に考{かんが}えよう。」',
                        chinese: '「昨天的功課做完了嗎？」\n「嗯，這題怎麼也搞不懂。」\n「給我看看。啊，這確實很難呢。一起想想吧。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n3_quiz_doushitemo_1',
                sentence: 'どうしてもこの資格{しかく}を（　）たい。',
                options: ['取り', '取る', '取れ', '取っ'],
                correctIndex: 0,
                explanation: '「取りたい」無論如何都想拿到這個資格。'
            },
            {
                id: 'n3_quiz_doushitemo_2',
                sentence: 'この薬{くすり}は苦{にが}くて、どうしても（　）。',
                options: ['飲まない', '飲みたくない', '飲めない', '飲んだ'],
                correctIndex: 2,
                explanation: '這藥太苦了，怎麼也喝不下去。'
            },
            {
                id: 'n3_quiz_doushitemo_3',
                sentence: '彼{かれ}の名前{なまえ}がどうしても（　）。',
                options: ['思い出せない', '思い出す', '思い出して', '思い出した'],
                correctIndex: 0,
                explanation: '怎麼也想不起來他的名字。'
            },
            {
                id: 'n3_quiz_doushitemo_4',
                sentence: '「このコンサート、チケット取{と}れた？」\n「ううん、どうしても（　）んだ。人気{にんき}すぎて。」',
                options: ['取った', '取れた', '取らなかった', '取れなかった'],
                correctIndex: 3,
                explanation: '對話情境。怎麼也買不到票。'
            },
            {
                id: 'n3_quiz_doushitemo_5',
                sentence: '「今日{きょう}のミーティング、出{で}られる？」\n「ごめん、どうしても外{はず}せない用事{ようじ}が（　）んだ。」',
                options: ['なかった', 'ある', 'あった', 'ない'],
                correctIndex: 1,
                explanation: '對話情境。有無論如何都無法推掉的事情。'
            }
        ]
    },

    'n3_futo': {
        id: 'n3_futo',
        pattern: 'ふと',
        connection: 'ふと + 動詞{どうし}',
        translation: '忽然; 不經意地',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示無意識的動作或念頭',
                description: '「ふと」表示沒有特別意圖地、無意識地做某事或想起某事。',
                examples: [
                    { japanese: 'ふと窓{まど}の外{そと}を見{み}た。', chinese: '忽然往窗外看去。' },
                    { japanese: 'ふと昔{むかし}のことを思{おも}い出{だ}した。', chinese: '不經意想起了過去的事。' },
                    { japanese: '「なんで電話{でんわ}したの？」\n「ふと声{こえ}が聞{き}きたくなって。」', chinese: '「為什麼打電話來？」\n「忽然想聽聽你的聲音。」' }
                ]
            }
        ],
        analysis: {
            title: '「ふと」的用法分析',
            description: '表達無意識或突然的動作。',
            points: [
                { rule: '強調無意識性', explanation: '不是計畫好的動作' },
                { rule: '常接思考類動詞', explanation: '如「思う」「気づく」「見る」' },
                { rule: '與「つい」的區別', explanation: '「ふと」更強調突然性，「つい」更強調不自覺' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_futo_1',
                sentence: '（　）空{そら}を見上{みあ}げた。',
                options: ['さえ', 'から', 'まで', 'ふと'],
                correctIndex: 3,
                explanation: '忽然抬頭看天空。'
            },
            {
                id: 'n3_quiz_futo_2',
                sentence: '（　）彼女{かのじょ}のことを思{おも}い出{だ}した。',
                options: ['さえ', 'まで', 'から', 'ふと'],
                correctIndex: 3,
                explanation: '不經意想起了她。'
            },
            {
                id: 'n3_quiz_futo_3',
                sentence: '（　）見{み}ると、猫{ねこ}がいた。',
                options: ['さえ', 'ふと', 'まで', 'から'],
                correctIndex: 1,
                explanation: '忽然一看，有隻貓。'
            },
            {
                id: 'n3_quiz_futo_4',
                sentence: '「どうして気{き}づいたの？」\n「（　）目{め}に入{はい}ったんだ。」',
                options: ['から', 'まで', 'ふと', 'さえ'],
                correctIndex: 2,
                explanation: '對話情境。不經意看到的。'
            },
            {
                id: 'n3_quiz_futo_5',
                sentence: '「急{きゅう}にどうしたの？」\n「（　）懐{なつ}かしくなってね。」',
                options: ['さえ', 'から', 'ふと', 'まで'],
                correctIndex: 2,
                explanation: '對話情境。忽然覺得很懷念。'
            }
        ]
    },

    'n3_furi': {
        id: 'n3_furi',
        pattern: 'ふりをする',
        connection: '動詞{どうし}普通{ふつう}形{けい} + ふりをする\nい形容詞{けいようし} + ふりをする\nな形容詞{けいようし} + な + ふりをする\n名詞{めいし} + の + ふりをする',
        translation: '假裝...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '假裝的行為',
                description: '表示故意裝作某種狀態或行為。可以是為了欺騙或只是玩笑。',
                examples: [
                    { japanese: '病気{びょうき}のふりをして学校{がっこう}を休{やす}んだ。', chinese: '裝病請假不去學校。' },
                    { japanese: '彼{かれ}は知{し}らないふりをしている。', chinese: '他在裝作不知道的樣子。' },
                    {
                        japanese: '「あ、隣{となり}のクラスの山田{やまだ}くんだ。話{はな}しかけてみようかな。」\n「えっ、知{し}ってるの？」\n「ううん、知{し}らないふりをして話{はな}しかけるの。」\n「なるほど、頑張{がんば}って！」',
                        chinese: '「啊，是隔壁班的山田同學。要不要跟他說說話呢。」\n「咦，你認識他嗎？」\n「不，要假裝不認識然後搭話。」\n「原來如此，加油！」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        quiz: [
            {
                id: 'n3_quiz_furi_1',
                sentence: '子供{こども}は寝{ね}た（　）をしていた。',
                options: ['よう', 'まま', 'とおり', 'ふり'],
                correctIndex: 3,
                explanation: '小孩在假裝睡著了。'
            },
            {
                id: 'n3_quiz_furi_2',
                sentence: '彼女{かのじょ}は何{なに}も聞{き}こえない（　）をした。',
                options: ['よう', 'まま', 'とおり', 'ふり'],
                correctIndex: 3,
                explanation: '她假裝什麼都沒聽到。'
            },
            {
                id: 'n3_quiz_furi_3',
                sentence: '元気{げんき}な（　）をしているけど、本当{ほんとう}は疲{つか}れている。',
                options: ['とおり', 'よう', 'まま', 'ふり'],
                correctIndex: 3,
                explanation: '雖然假裝有精神，但其實很累。'
            },
            {
                id: 'n3_quiz_furi_4',
                sentence: '「彼{かれ}、どうして私{わたし}を無視{むし}するんだろう。」\n「気{き}づかない（　）をしているんじゃない？」',
                options: ['よう', 'ふり', 'とおり', 'まま'],
                correctIndex: 1,
                explanation: '對話情境。他在假裝沒注意到吧？'
            },
            {
                id: 'n3_quiz_furi_5',
                sentence: '「さっきの電話{でんわ}、誰{だれ}から？」\n「知{し}らない人{ひと}の（　）をして切{き}っちゃった。」',
                options: ['よう', 'ふり', 'とおり', 'まま'],
                correctIndex: 1,
                explanation: '對話情境。假裝是陌生人然後掛斷了。'
            }
        ]
    },
    'n3_gachi': {
        id: 'n3_gachi',
        pattern: 'がち',
        connection: '動詞{どうし}ます形{けい}（去{きょ}掉{とう}ます） + がち\n名詞{めいし} + がち',
        translation: '容易...; 往往會...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '傾向性（負面）',
                description: '表示容易發生某種情況，通常用於負面或消極的事情。帶有「經常會...」「往往會...」的語感。',
                examples: [
                    { japanese: '彼{かれ}は遅刻{ちこく}しがちだ。', chinese: '他常常遲到。' },
                    { japanese: '最近{さいきん}、風邪{かぜ}を引{ひ}きがちだ。', chinese: '最近容易感冒。' },
                    {
                        japanese: '「最近{さいきん}、野菜{やさい}を食{た}べてる？」\n「うーん、忙{いそが}しくて外食{がいしょく}しがちなんだ。」\n「それは体{からだ}に良{よ}くないよ。ちゃんと食{た}べなきゃ。」\n「わかってるんだけどね...」',
                        chinese: '「最近有吃蔬菜嗎？」\n「嗯，太忙了常常外食。」\n「那樣對身體不好喔。要好好吃飯才行。」\n「我知道啦...」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '常見的「〜がち」表達',
            points: [
                {
                    rule: '遅れがち：容易遲到',
                    examples: [{ japanese: '電車{でんしゃ}が遅{おく}れがちだ。', chinese: '電車常常誤點。' }]
                },
                {
                    rule: '病気がち：身體虛弱',
                    examples: [{ japanese: '子供{こども}の頃{ころ}は病気{びょうき}がちだった。', chinese: '小時候身體常常不好。' }]
                },
                {
                    rule: '忘れがち：容易忘記',
                    examples: [{ japanese: '大事{だいじ}なことを忘{わす}れがちだ。', chinese: '重要的事情容易忘記。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_gachi_1',
                sentence: '彼女{かのじょ}は約束{やくそく}を忘{わす}れ（　）だ。',
                options: ['らしい', 'っぽい', 'ぎみ', 'がち'],
                correctIndex: 3,
                explanation: '她容易忘記約定。'
            },
            {
                id: 'n3_quiz_gachi_2',
                sentence: '冬{ふゆ}は風邪{かぜ}を引{ひ}き（　）になる。',
                options: ['らしい', 'ぎみ', 'がち', 'っぽい'],
                correctIndex: 2,
                explanation: '冬天容易感冒。'
            },
            {
                id: 'n3_quiz_gachi_3',
                sentence: '一人暮{ひとりぐ}らしだと、野菜{やさい}が不足{ふそく}し（　）だ。',
                options: ['がち', 'らしい', 'ぎみ', 'っぽい'],
                correctIndex: 0,
                explanation: '獨居的話容易蔬菜攝取不足。'
            },
            {
                id: 'n3_quiz_gachi_4',
                sentence: '「最近{さいきん}、疲{つか}れてない？」\n「うん、残業{ざんぎょう}（　）で...」',
                options: ['っぽい', 'らしい', 'がち', 'ぎみ'],
                correctIndex: 2,
                explanation: '對話情境。常常加班。'
            },
            {
                id: 'n3_quiz_gachi_5',
                sentence: '「この計画{けいかく}、うまくいくかな？」\n「悲観的{ひかんてき}になり（　）だけど、前向{まえむ}きに考{かんが}えよう。」',
                options: ['っぽい', 'がち', 'ぎみ', 'らしい'],
                correctIndex: 1,
                explanation: '對話情境。容易變得悲觀。'
            }
        ]
    },
    'n3_gatai': {
        id: 'n3_gatai',
        pattern: 'がたい',
        connection: '動詞{どうし}ます形{けい}（去{きょ}掉{とう}ます） + がたい',
        translation: '難以...; 很難...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示困難',
                description: '表示從心理上或實際上很難做某事，強調困難程度。常用於書面語或正式場合。',
                examples: [
                    { japanese: '彼{かれ}の行動{こうどう}は理解{りかい}しがたい。', chinese: '他的行為難以理解。' },
                    { japanese: 'この絵{え}の価値{かち}は計{はか}りがたい。', chinese: '這幅畫的價值難以估量。' },
                    {
                        japanese: '「彼女{かのじょ}、会社{かいしゃ}を辞{や}めるらしいよ。」\n「え、信{しん}じがたい。あんなに一生懸命{いっしょうけんめい}だったのに。」\n「私{わたし}も驚{おどろ}いた。」',
                        chinese: '「聽說她要辭職。」\n「誒，難以置信。她明明那麼努力。」\n「我也很驚訝。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「がたい」與「にくい」的比較',
            description: '兩者都可表示困難，但語感不同。',
            points: [
                {
                    rule: 'がたい：強調「心理上或根本性的困難」，較為正式。',
                    examples: [{ japanese: '忘{わす}れがたい思{おも}い出{で}。', chinese: '難以忘懷的回憶。' }]
                },
                {
                    rule: 'にくい：強調「物理上或技術上的困難」，較為日常。',
                    examples: [{ japanese: 'この字{じ}は読{よ}みにくい。', chinese: '這個字很難讀。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_gatai_1',
                sentence: 'この事故{じこ}の原因{げんいん}は説明{せつめい}し（　）。',
                options: ['っぽい', 'にくい', 'やすい', 'がたい'],
                correctIndex: 3,
                explanation: '這起事故的原因難以解釋。'
            },
            {
                id: 'n3_quiz_gatai_2',
                sentence: '彼{かれ}の成功{せいこう}は信{しん}じ（　）ことだ。',
                options: ['がたい', 'やすい', 'にくい', 'そう'],
                correctIndex: 0,
                explanation: '他的成功是難以置信的事。'
            },
            {
                id: 'n3_quiz_gatai_3',
                sentence: '忘{わす}れ（　）思{おも}い出{で}がたくさんある。',
                options: ['やすい', 'がたい', 'そう', 'にくい'],
                correctIndex: 1,
                explanation: '有很多難以忘懷的回憶。'
            },
            {
                id: 'n3_quiz_gatai_4',
                sentence: '「この数字{すうじ}、正{ただ}しいの？」\n「うーん、認{みと}め（　）結果{けっか}だね。」',
                options: ['そう', 'にくい', 'がたい', 'やすい'],
                correctIndex: 2,
                explanation: '對話情境。難以認同的結果。'
            },
            {
                id: 'n3_quiz_gatai_5',
                sentence: '「彼{かれ}が嘘{うそ}をついたって本当{ほんとう}？」\n「ああ、許{ゆる}し（　）行為{こうい}だよ。」',
                options: ['にくい', 'そう', 'やすい', 'がたい'],
                correctIndex: 3,
                explanation: '對話情境。難以原諒的行為。'
            }
        ]
    },
    'n3_gimi': {
        id: 'n3_gimi',
        pattern: '気{き}味{ぎみ}{ぎみ}',
        connection: '動詞{どうし}ます形{けい}（去{きょ}掉{とう}ます）/ 名詞{めいし} + 気{き}味{ぎみ}',
        translation: '有點...; 稍微...; 有...的傾向',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示輕微傾向',
                description: '表示有某種輕微的傾向或狀態，通常用於負面的情況。',
                examples: [
                    { japanese: '最近{さいきん}、太{ふと}り気味{ぎみ}だ。', chinese: '最近有點發胖。' },
                    { japanese: '風邪{かぜ}気味{ぎみ}なので早{はや}く寝{ね}る。', chinese: '因為有點感冒所以早點睡。' },
                    {
                        japanese: '「顔色{かおいろ}悪{わる}いけど、大丈夫{だいじょうぶ}？」\n「うん、ちょっと疲{つか}れ気味{ぎみ}なだけ。」\n「無理{むり}しないでね。」',
                        chinese: '「臉色不好，沒事吧？」\n「嗯，只是有點累。」\n「不要勉強喔。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「気味」與「っぽい」的比較',
            description: '兩者都可表示傾向，但用法不同。',
            points: [
                {
                    rule: '気味：表示「當下輕微的狀態」，暫時性的。',
                    examples: [{ japanese: '熱{ねつ}っぽい気味{ぎみ}だ。', chinese: '有點發燒的感覺。' }]
                },
                {
                    rule: 'っぽい：表示「性格或固有傾向」，較持久。',
                    examples: [{ japanese: '彼{かれ}は怒{おこ}りっぽい。', chinese: '他很容易生氣。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_gimi_1',
                sentence: '電車{でんしゃ}が遅{おく}れ（　）で、いつも心配{しんぱい}だ。',
                options: ['がち', '気味', 'らしい', 'っぽい'],
                correctIndex: 1,
                explanation: '電車有點晚點的傾向，總是很擔心。'
            },
            {
                id: 'n3_quiz_gimi_2',
                sentence: '今日{きょう}は風邪{かぜ}（　）なので、早退{そうたい}した。',
                options: ['らしい', 'っぽい', '気味', 'がち'],
                correctIndex: 2,
                explanation: '今天有點感冒所以早退了。'
            },
            {
                id: 'n3_quiz_gimi_3',
                sentence: '最近{さいきん}、運動不足{うんどうぶそく}（　）だ。',
                options: ['がち', 'らしい', '気味', 'っぽい'],
                correctIndex: 2,
                explanation: '最近有點運動不足。'
            },
            {
                id: 'n3_quiz_gimi_4',
                sentence: '「プロジェクト、進{すす}んでる？」\n「うーん、遅{おく}れ（　）かな。」',
                options: ['気味', 'らしい', 'っぽい', 'がち'],
                correctIndex: 0,
                explanation: '對話情境。有點延遲。'
            },
            {
                id: 'n3_quiz_gimi_5',
                sentence: '「最近{さいきん}、食{た}べ過{す}ぎてない？」\n「そうなんだ。太{ふと}り（　）で困{こま}ってる。」',
                options: ['気味', 'らしい', 'がち', 'っぽい'],
                correctIndex: 0,
                explanation: '對話情境。有點發胖。'
            }
        ]
    },
    'n3_goto_ni': {
        id: 'n3_goto_ni',
        pattern: 'ごとに',
        connection: '名詞{めいし} / 動詞{どうし}辭書{じしょ}形{けい} + ごとに',
        translation: '每...; 每隔...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示每次',
                description: '表示每當某個時間點或每次發生某事時都會怎樣。',
                examples: [
                    { japanese: '一週間{いっしゅうかん}ごとに報告{ほうこく}する。', chinese: '每週報告一次。' },
                    { japanese: '彼{かれ}に会{あ}うごとに元気{げんき}をもらう。', chinese: '每次見到他都能獲得活力。' },
                    {
                        japanese: '「薬{くすり}、どうやって飲{の}むの？」\n「食後{しょくご}ごとに一錠{いちじょう}飲{の}んでね。」\n「わかった。」',
                        chinese: '「藥要怎麼吃？」\n「每次飯後吃一錠。」\n「知道了。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「ごとに」與「たびに」的比較',
            description: '兩者都表示「每次」，但用法有差異。',
            points: [
                {
                    rule: 'ごとに：可用於時間單位和動作，範圍較廣。',
                    examples: [{ japanese: '3時間{じかん}ごとに休憩{きゅうけい}する。', chinese: '每3小時休息一次。' }]
                },
                {
                    rule: 'たびに：主要用於動作/事件，強調每次發生時。',
                    examples: [{ japanese: '旅行{りょこう}するたびにお土産{みやげ}を買{か}う。', chinese: '每次旅行都買土產。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_goto_ni_1',
                sentence: '一{いち}ヶ月{げつ}（　）に給料{きゅうりょう}が入{はい}る。',
                options: ['おき', 'つつ', 'ごと', 'たび'],
                correctIndex: 2,
                explanation: '每個月都會收到薪水。'
            },
            {
                id: 'n3_quiz_goto_ni_2',
                sentence: '季節{きせつ}（　）に服{ふく}を入{い}れ替{か}える。',
                options: ['ごと', 'たび', 'つつ', 'おき'],
                correctIndex: 0,
                explanation: '每個季節都會換衣服。'
            },
            {
                id: 'n3_quiz_goto_ni_3',
                sentence: '会{あ}う（　）に彼女{かのじょ}は綺麗{きれい}になっている。',
                options: ['つつ', 'おき', 'たび', 'ごと'],
                correctIndex: 3,
                explanation: '每次見面她都變漂亮了。'
            },
            {
                id: 'n3_quiz_goto_ni_4',
                sentence: '「レポート、いつ出{だ}せばいい？」\n「週{しゅう}（　）に提出{ていしゅつ}してください。」',
                options: ['おき', 'ごと', 'たび', 'つつ'],
                correctIndex: 1,
                explanation: '對話情境。每週提交。'
            },
            {
                id: 'n3_quiz_goto_ni_5',
                sentence: '「日本語{にほんご}、上手{じょうず}になったね。」\n「ありがとう。日{ひ}（　）に練習{れんしゅう}してるから。」',
                options: ['おき', 'つつ', 'ごと', 'たび'],
                correctIndex: 2,
                explanation: '對話情境。每天練習。'
            }
        ]
    },
    'n3_hodo': {
        id: 'n3_hodo',
        pattern: 'ほど',
        connection: '動詞{どうし}辭書{じしょ}形{けい} / 名詞{めいし} / い形容詞{けいようし} / な形容詞{けいようし}な + ほど',
        translation: '...得...; 到了...的程度; 大約',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示程度',
                description: '表示達到某種程度，常用於誇張或強調。',
                examples: [
                    { japanese: '死{し}ぬほど疲{つか}れた。', chinese: '累得要死。' },
                    { japanese: '涙{なみだ}が出{で}るほど嬉{うれ}しかった。', chinese: '高興得快流淚了。' },
                    {
                        japanese: '「あのラーメン、どうだった？」\n「美味{おい}しすぎて、声{こえ}も出{で}ないほどだったよ。」\n「そんなに！今度{こんど}一緒{いっしょ}に行{い}こう。」',
                        chinese: '「那家拉麵怎麼樣？」\n「太好吃了，好吃到說不出話來。」\n「有那麼好吃！下次一起去吧。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「ほど」的多種用法',
            description: '「ほど」有多種含義，需根據上下文判斷。',
            points: [
                {
                    rule: '程度：表示「到達...的程度」',
                    examples: [{ japanese: '泣{な}くほど感動{かんどう}した。', chinese: '感動到哭了。' }]
                },
                {
                    rule: '大約：表示「大概、左右」',
                    examples: [{ japanese: '1時間{じかん}ほど待{ま}った。', chinese: '等了大約1小時。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_hodo_1',
                sentence: '彼{かれ}は目{め}が覚{さ}める（　）ハンサムだ。',
                options: ['だけ', 'まで', 'ほど', 'くらい'],
                correctIndex: 2,
                explanation: '他帥到讓人眼睛一亮。'
            },
            {
                id: 'n3_quiz_hodo_2',
                sentence: '歩{ある}けない（　）足{あし}が痛{いた}い。',
                options: ['まで', 'だけ', 'ほど', 'くらい'],
                correctIndex: 2,
                explanation: '腳痛到無法走路。'
            },
            {
                id: 'n3_quiz_hodo_3',
                sentence: '30分{ぷん}（　）で着{つ}きます。',
                options: ['ほど', 'くらい', 'だけ', 'まで'],
                correctIndex: 0,
                explanation: '大約30分鐘到達。'
            },
            {
                id: 'n3_quiz_hodo_4',
                sentence: '「この映画{えいが}、どうだった？」\n「感動{かんどう}して、泣{な}く（　）だったよ。」',
                options: ['だけ', 'ほど', 'まで', 'くらい'],
                correctIndex: 1,
                explanation: '對話情境。感動到快哭的程度。'
            },
            {
                id: 'n3_quiz_hodo_5',
                sentence: '「仕事{しごと}、忙{いそが}しい？」\n「うん、寝{ね}る時間{じかん}もない（　）だよ。」',
                options: ['ほど', 'くらい', 'だけ', 'まで'],
                correctIndex: 0,
                explanation: '對話情境。忙到沒時間睡覺。'
            }
        ]
    },
    'n3_hodo_nai': {
        id: 'n3_hodo_nai',
        pattern: 'ほど～ない',
        connection: '名詞{めいし} + ほど + 形容詞{けいようし}/動詞{どうし}否定{ひてい}形{けい}',
        translation: '沒有...那麼...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '比較否定',
                description: '用於比較時，表示不如某事物達到某種程度。',
                examples: [
                    { japanese: '今日{きょう}は昨日{きのう}ほど暑{あつ}くない。', chinese: '今天沒有昨天那麼熱。' },
                    { japanese: '彼{かれ}ほど頭{あたま}がいい人{ひと}はいない。', chinese: '沒有人像他那麼聰明。' },
                    {
                        japanese: '「新{あたら}しいスマホ、どう？」\n「うーん、期待{きたい}したほどよくないかな。」\n「そうなんだ。残念{ざんねん}だね。」',
                        chinese: '「新手機怎麼樣？」\n「嗯，沒有期待的那麼好。」\n「是嗎。真可惜。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「ほど～ない」的用法',
            description: '用於否定比較，表示程度不及。',
            points: [
                {
                    rule: '「Aほど～ない」：表示「沒有A那麼...」',
                    examples: [{ japanese: '東京{とうきょう}ほど人{ひと}が多{おお}くない。', chinese: '沒有東京那麼多人。' }]
                },
                {
                    rule: '「Aほど～はない」：強調「沒有什麼比A更...」',
                    examples: [{ japanese: '健康{けんこう}ほど大切{たいせつ}なものはない。', chinese: '沒有什麼比健康更重要。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_hodo_nai_1',
                sentence: 'この問題{もんだい}は思{おも}った（　）難{むずか}しくなかった。',
                options: ['だけ', 'ほど', 'より', 'くらい'],
                correctIndex: 1,
                explanation: '這個問題沒有想像的那麼難。'
            },
            {
                id: 'n3_quiz_hodo_nai_2',
                sentence: '彼{かれ}（　）上手{じょうず}な人{ひと}はいない。',
                options: ['より', 'ほど', 'だけ', 'くらい'],
                correctIndex: 1,
                explanation: '沒有人像他那麼厲害。'
            },
            {
                id: 'n3_quiz_hodo_nai_3',
                sentence: '今年{ことし}の夏{なつ}は去年{きょねん}（　）暑{あつ}くない。',
                options: ['ほど', 'くらい', 'だけ', 'より'],
                correctIndex: 0,
                explanation: '今年夏天沒有去年那麼熱。'
            },
            {
                id: 'n3_quiz_hodo_nai_4',
                sentence: '「日本語{にほんご}、難{むずか}しい？」\n「最初{さいしょ}思{おも}った（　）でもないよ。」',
                options: ['より', 'ほど', 'くらい', 'だけ'],
                correctIndex: 1,
                explanation: '對話情境。沒有一開始想的那麼難。'
            },
            {
                id: 'n3_quiz_hodo_nai_5',
                sentence: '「あの店{みせ}、高{たか}いでしょ？」\n「いや、噂{うわさ}（　）高{たか}くなかったよ。」',
                options: ['だけ', 'ほど', 'くらい', 'より'],
                correctIndex: 1,
                explanation: '對話情境。沒有傳說中那麼貴。'
            }
        ]
    },
    'n3_ichido_ni': {
        id: 'n3_ichido_ni',
        pattern: '一度{いちど}{いちど}{いちど}に',
        connection: '一度{いちど}{いちど}に + 動詞{どうし}',
        translation: '同時; 一次',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示同時進行',
                description: '表示在同一時間一次做完某事，或同時發生多件事。',
                examples: [
                    { japanese: '一度{いちど}に三{みっ}つのことはできない。', chinese: '不能同時做三件事。' },
                    { japanese: '薬{くすり}を一度{いちど}に飲{の}み過{す}ぎないでください。', chinese: '請不要一次吃太多藥。' },
                    {
                        japanese: '「この荷物{にもつ}、全部{ぜんぶ}運{はこ}べる？」\n「一度{いちど}には無理{むり}だよ。二回{にかい}に分{わ}けよう。」\n「そうだね。」',
                        chinese: '「這些行李全部搬得動嗎？」\n「一次搬不動啦。分兩次吧。」\n「也是。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「一度に」與「同時に」的比較',
            description: '兩者都表示同時，但用法有差異。',
            points: [
                {
                    rule: '一度に：強調「一次性完成」，側重數量或動作。',
                    examples: [{ japanese: '一度{いちど}に10個{こ}買{か}った。', chinese: '一次買了10個。' }]
                },
                {
                    rule: '同時に：強調「時間點相同」，側重時間。',
                    examples: [{ japanese: '二人{ふたり}が同時{どうじ}に話{はな}し始{はじ}めた。', chinese: '兩個人同時開始說話。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ichido_ni_1',
                sentence: 'この本{ほん}を（　）全部{ぜんぶ}読{よ}むのは大変{たいへん}だ。',
                options: ['同時に', 'すぐに', '一度に', '一緒に'],
                correctIndex: 2,
                explanation: '一次讀完這些書很辛苦。'
            },
            {
                id: 'n3_quiz_ichido_ni_2',
                sentence: 'お客{きゃく}さんが（　）大勢{おおぜい}来{き}て、忙{いそが}しかった。',
                options: ['一度に', '一緒に', 'すぐに', '同時に'],
                correctIndex: 0,
                explanation: '客人一次來了很多，很忙。'
            },
            {
                id: 'n3_quiz_ichido_ni_3',
                sentence: 'そんなにたくさん（　）食{た}べられないよ。',
                options: ['すぐに', '同時に', '一緒に', '一度に'],
                correctIndex: 3,
                explanation: '一次吃不了那麼多。'
            },
            {
                id: 'n3_quiz_ichido_ni_4',
                sentence: '「この仕事{しごと}、今日中{きょうじゅう}にできる？」\n「（　）は無理{むり}だよ。」',
                options: ['すぐに', '同時に', '一度に', '一緒に'],
                correctIndex: 2,
                explanation: '對話情境。一次完成不了。'
            },
            {
                id: 'n3_quiz_ichido_ni_5',
                sentence: '「ケーキ、何個{なんこ}食{た}べた？」\n「（　）三{みっ}つも食{た}べちゃった。」',
                options: ['一緒に', '一度に', 'すぐに', '同時に'],
                correctIndex: 1,
                explanation: '對話情境。一次吃了三個。'
            }
        ]
    },
    'n3_ikura_temo': {
        id: 'n3_ikura_temo',
        pattern: 'いくら～ても',
        connection: 'いくら + 動詞{どうし}て形{けい} / い形容詞{けいようし}くても / な形容詞{けいようし}でも + も',
        translation: '無論怎麼...也...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示無論如何',
                description: '表示不管怎麼做或情況如何，結果都不會改變。',
                examples: [
                    { japanese: 'いくら説明{せつめい}しても、分{わ}かってくれない。', chinese: '無論怎麼解釋，他都不理解。' },
                    { japanese: 'いくら高{たか}くても、買{か}いたい。', chinese: '無論多貴，我都想買。' },
                    {
                        japanese: '「ダイエット、うまくいってる？」\n「いくら運動{うんどう}しても、全然{ぜんぜん}痩{や}せないんだ。」\n「食事{しょくじ}も大事{だいじ}だよ。」',
                        chinese: '「減肥順利嗎？」\n「無論怎麼運動都瘦不下來。」\n「飲食也很重要喔。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「いくら～ても」與「どんなに～ても」的比較',
            description: '兩者意思相近，但語感略有不同。',
            points: [
                {
                    rule: 'いくら～ても：側重「數量或程度」，不管怎麼做。',
                    examples: [{ japanese: 'いくら食{た}べても太{ふと}らない。', chinese: '無論吃多少都不會胖。' }]
                },
                {
                    rule: 'どんなに～ても：側重「方式或狀態」，不管怎樣。',
                    examples: [{ japanese: 'どんなに辛{つら}くても諦{あきら}めない。', chinese: '無論多辛苦也不放棄。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ikura_temo_1',
                sentence: '（　）考{かんが}えても、答{こた}えが分{わ}からない。',
                options: ['なんで', 'いつ', 'いくら', 'どんな'],
                correctIndex: 2,
                explanation: '無論怎麼想都不知道答案。'
            },
            {
                id: 'n3_quiz_ikura_temo_2',
                sentence: '（　）待{ま}っても、バスが来{こ}なかった。',
                options: ['いくら', 'なんで', 'いつ', 'どんな'],
                correctIndex: 0,
                explanation: '無論等多久公車都不來。'
            },
            {
                id: 'n3_quiz_ikura_temo_3',
                sentence: '（　）眠{ねむ}くても、勉強{べんきょう}しなければならない。',
                options: ['なんで', 'いくら', 'いつ', 'どんな'],
                correctIndex: 1,
                explanation: '無論多睏都必須讀書。'
            },
            {
                id: 'n3_quiz_ikura_temo_4',
                sentence: '「このパズル、解{と}けた？」\n「（　）やっても無理{むり}だった。」',
                options: ['なんで', 'いつ', 'どんな', 'いくら'],
                correctIndex: 3,
                explanation: '對話情境。無論怎麼試都解不開。'
            },
            {
                id: 'n3_quiz_ikura_temo_5',
                sentence: '「彼{かれ}、謝{あやま}った？」\n「（　）頼{たの}んでも謝{あやま}らないよ。」',
                options: ['いつ', 'なんで', 'いくら', 'どんな'],
                correctIndex: 2,
                explanation: '對話情境。無論怎麼拜託他都不道歉。'
            }
        ]
    },
    'n3_ippou_da': {
        id: 'n3_ippou_da',
        pattern: '一方{いっぽう}{いっぽう}{いっぽう}だ',
        connection: '動詞{どうし}辭書{じしょ}形{けい} + 一方{いっぽう}{いっぽう}{いっぽう}だ',
        translation: '越來越...; 不斷...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示持續變化',
                description: '表示某種趨勢不斷持續，通常用於負面的變化。',
                examples: [
                    { japanese: '物価{ぶっか}は上{あ}がる一方{いっぽう}だ。', chinese: '物價不斷上漲。' },
                    { japanese: '状況{じょうきょう}は悪{わる}くなる一方{いっぽう}だ。', chinese: '情況越來越糟。' },
                    {
                        japanese: '「最近{さいきん}、仕事{しごと}どう？」\n「増{ふ}える一方{いっぽう}で、休{やす}む暇{ひま}もないよ。」\n「大変{たいへん}だね。」',
                        chinese: '「最近工作怎麼樣？」\n「不斷增加，連休息的時間都沒有。」\n「真辛苦啊。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「一方だ」與「ばかりだ」的比較',
            description: '兩者都表示持續變化，用法相似。',
            points: [
                {
                    rule: '一方だ：強調「單一方向的持續」，較正式。',
                    examples: [{ japanese: '人口{じんこう}は減{へ}る一方{いっぽう}だ。', chinese: '人口不斷減少。' }]
                },
                {
                    rule: 'ばかりだ：強調「只往一個方向」，較口語。',
                    examples: [{ japanese: '体重{たいじゅう}が増{ふ}えるばかりだ。', chinese: '體重只是一直增加。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ippou_da_1',
                sentence: '環境問題{かんきょうもんだい}は深刻{しんこく}になる（　）だ。',
                options: ['ばかり', '一方', 'のみ', 'だけ'],
                correctIndex: 1,
                explanation: '環境問題越來越嚴重。'
            },
            {
                id: 'n3_quiz_ippou_da_2',
                sentence: '彼{かれ}の成績{せいせき}は下{さ}がる（　）だ。',
                options: ['のみ', 'ばかり', '一方', 'だけ'],
                correctIndex: 2,
                explanation: '他的成績不斷下滑。'
            },
            {
                id: 'n3_quiz_ippou_da_3',
                sentence: 'この店{みせ}は客{きゃく}が減{へ}る（　）だ。',
                options: ['のみ', 'ばかり', 'だけ', '一方'],
                correctIndex: 3,
                explanation: '這家店的客人不斷減少。'
            },
            {
                id: 'n3_quiz_ippou_da_4',
                sentence: '「会社{かいしゃ}の業績{ぎょうせき}、どう？」\n「悪{わる}くなる（　）で、心配{しんぱい}だよ。」',
                options: ['ばかり', '一方', 'だけ', 'のみ'],
                correctIndex: 1,
                explanation: '對話情境。公司業績不斷惡化。'
            },
            {
                id: 'n3_quiz_ippou_da_5',
                sentence: '「日本語{にほんご}、上達{じょうたつ}してる？」\n「いや、忘{わす}れる（　）だよ。」',
                options: ['ばかり', '一方', 'のみ', 'だけ'],
                correctIndex: 1,
                explanation: '對話情境。日語越來越生疏。'
            }
        ]
    },
    'n3_ippou_da_1': {
        id: 'n3_ippou_da_1',
        pattern: '一方{いっぽう}{いっぽう}{いっぽう}だ',
        connection: '動詞{どうし}辭書{じしょ}形{けい} + 一方{いっぽう}{いっぽう}{いっぽう}だ',
        translation: '越來越...; 一直...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示持續變化',
                description: '表示某種狀態或趨勢持續向一個方向發展。',
                examples: [
                    { japanese: '借金{しゃっきん}は増{ふ}える一方{いっぽう}だ。', chinese: '債務一直在增加。' },
                    { japanese: '記憶力{きおくりょく}は衰{おとろ}える一方{いっぽう}だ。', chinese: '記憶力不斷衰退。' },
                    {
                        japanese: '「運動{うんどう}してる？」\n「全然{ぜんぜん}。体力{たいりょく}が落{お}ちる一方{いっぽう}だよ。」\n「僕{ぼく}もだ。」',
                        chinese: '「有在運動嗎？」\n「完全沒有。體力一直在下降。」\n「我也是。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「一方だ」的用法',
            description: '主要用於描述持續惡化或單向變化的情況。',
            points: [
                {
                    rule: '通常用於負面變化，如衰退、惡化等。',
                    examples: [{ japanese: '地球{ちきゅう}温暖化{おんだんか}は進{すす}む一方{いっぽう}だ。', chinese: '地球暖化持續加劇。' }]
                },
                {
                    rule: '較少用於正面變化，語感較為嚴肅。',
                    examples: [{ japanese: '技術{ぎじゅつ}は進歩{しんぽ}する一方{いっぽう}だ。', chinese: '技術不斷進步。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ippou_da_1_1',
                sentence: '少子高齢化{しょうしこうれいか}は進{すす}む（　）だ。',
                options: ['ばかり', 'きり', 'のみ', '一方'],
                correctIndex: 3,
                explanation: '少子高齡化不斷加劇。'
            },
            {
                id: 'n3_quiz_ippou_da_1_2',
                sentence: '田舎{いなか}の人口{じんこう}は減{へ}る（　）だ。',
                options: ['一方', 'のみ', 'ばかり', 'きり'],
                correctIndex: 0,
                explanation: '鄉下的人口持續減少。'
            },
            {
                id: 'n3_quiz_ippou_da_1_3',
                sentence: '彼{かれ}との関係{かんけい}は悪{わる}くなる（　）だった。',
                options: ['一方', 'きり', 'ばかり', 'のみ'],
                correctIndex: 0,
                explanation: '與他的關係越來越差。'
            },
            {
                id: 'n3_quiz_ippou_da_1_4',
                sentence: '「最近{さいきん}、視力{しりょく}どう？」\n「落{お}ちる（　）で、メガネを変{か}えたよ。」',
                options: ['一方', 'のみ', 'きり', 'ばかり'],
                correctIndex: 0,
                explanation: '對話情境。視力一直在下降。'
            },
            {
                id: 'n3_quiz_ippou_da_1_5',
                sentence: '「この地域{ちいき}、発展{はってん}してる？」\n「いや、衰退{すいたい}する（　）だよ。」',
                options: ['一方', 'ばかり', 'のみ', 'きり'],
                correctIndex: 0,
                explanation: '對話情境。這個地區一直在衰退。'
            }
        ]
    },
    'n3_ittai': {
        id: 'n3_ittai',
        pattern: '一体{いったい}{いったい}{いったい}',
        connection: '一体{いったい}{いったい} + 疑問{ぎもん}詞{し}',
        translation: '到底; 究竟',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '強調疑問',
                description: '用於加強疑問語氣，表示強烈的好奇或困惑。',
                examples: [
                    { japanese: '一体{いったい}何{なに}が起{お}きたの？', chinese: '到底發生了什麼事？' },
                    { japanese: '一体{いったい}どこに行{い}ったんだ？', chinese: '到底去哪裡了？' },
                    {
                        japanese: '「鍵{かぎ}が見{み}つからない！」\n「一体{いったい}どこに置{お}いたの？」\n「分{わ}からないから困{こま}ってるんだよ！」',
                        chinese: '「鑰匙找不到！」\n「到底放哪裡了？」\n「就是不知道才困擾啊！」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「一体」的用法',
            description: '用於強調疑問，表達困惑或驚訝。',
            points: [
                {
                    rule: '通常與疑問詞連用，加強語氣。',
                    examples: [{ japanese: '一体{いったい}誰{だれ}がこんなことを？', chinese: '到底是誰做了這種事？' }]
                },
                {
                    rule: '也可用於反問，表示無法理解。',
                    examples: [{ japanese: '一体{いったい}何{なん}のつもりだ？', chinese: '到底打什麼主意？' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ittai_1',
                sentence: '（　）何{なに}があったの？',
                options: ['まさか', 'さすが', 'ぜひ', '一体'],
                correctIndex: 3,
                explanation: '到底發生什麼事了？'
            },
            {
                id: 'n3_quiz_ittai_2',
                sentence: '（　）いつになったら届{とど}くの？',
                options: ['一体', 'ぜひ', 'まさか', 'さすが'],
                correctIndex: 0,
                explanation: '到底什麼時候才會送到？'
            },
            {
                id: 'n3_quiz_ittai_3',
                sentence: '（　）どうすればいいのか分{わ}からない。',
                options: ['一体', 'さすが', 'まさか', 'ぜひ'],
                correctIndex: 0,
                explanation: '完全不知道到底該怎麼辦。'
            },
            {
                id: 'n3_quiz_ittai_4',
                sentence: '「電話{でんわ}が繋{つな}がらない。」\n「（　）どこにいるんだろう？」',
                options: ['ぜひ', 'まさか', '一体', 'さすが'],
                correctIndex: 2,
                explanation: '對話情境。到底在哪裡？'
            },
            {
                id: 'n3_quiz_ittai_5',
                sentence: '「彼{かれ}、急{きゅう}に怒{おこ}り出{だ}したよ。」\n「（　）何{なに}が気{き}に入{い}らなかったんだろう？」',
                options: ['さすが', '一体', 'ぜひ', 'まさか'],
                correctIndex: 1,
                explanation: '對話情境。到底是什麼讓他不滿？'
            }
        ]
    },
    'n3_janai': {
        id: 'n3_janai',
        pattern: 'じゃない',
        connection: '動詞{どうし}普通{ふつう}形{けい} / い形容詞{けいようし} / な形容詞{けいようし} / 名詞{めいし} + じゃない',
        translation: '不是嗎?; 對吧? (口語)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '確認或反問',
                description: '用於確認對方的想法，或表示驚訝、責備的反問。',
                examples: [
                    { japanese: 'これ、君{きみ}のじゃない？', chinese: '這不是你的嗎？' },
                    { japanese: '約束{やくそく}したじゃない！', chinese: '不是說好了嗎！' },
                    {
                        japanese: '「ちょっと、遅{おそ}いじゃない！」\n「ごめん、電車{でんしゃ}が遅{おく}れて...」\n「連絡{れんらく}してよ。」',
                        chinese: '「喂，你遲到了吧！」\n「抱歉，電車誤點了...」\n「那也要聯絡一下啊。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「じゃない」的多種用法',
            description: '根據語調和場合有不同含義。',
            points: [
                {
                    rule: '上升語調：確認或詢問「不是嗎？」',
                    examples: [{ japanese: '美味{おい}しいじゃない？', chinese: '很好吃不是嗎？' }]
                },
                {
                    rule: '下降語調或強調：責備或驚訝「明明...！」',
                    examples: [{ japanese: '言{い}ったじゃない！', chinese: '不是說過了嗎！' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_janai_1',
                sentence: 'もう帰{かえ}るの？早{はや}い（　）！',
                options: ['ではない', 'でもない', 'じゃなく', 'じゃない'],
                correctIndex: 3,
                explanation: '已經要回去了？太早了吧！'
            },
            {
                id: 'n3_quiz_janai_2',
                sentence: '昨日{きのう}約束{やくそく}した（　）。どうして忘{わす}れたの？',
                options: ['でもない', 'じゃなく', 'ではない', 'じゃない'],
                correctIndex: 3,
                explanation: '昨天不是說好了嗎。為什麼忘了？'
            },
            {
                id: 'n3_quiz_janai_3',
                sentence: 'この服{ふく}、素敵{すてき}（　）？',
                options: ['でもない', 'じゃない', 'ではない', 'じゃなく'],
                correctIndex: 1,
                explanation: '這件衣服很漂亮不是嗎？'
            },
            {
                id: 'n3_quiz_janai_4',
                sentence: '「まだ終{お}わってないの？」\n「難{むずか}しいんだから、仕方{しかた}ない（　）。」',
                options: ['じゃなく', 'でもない', 'ではない', 'じゃない'],
                correctIndex: 3,
                explanation: '對話情境。因為很難，沒辦法啊。'
            },
            {
                id: 'n3_quiz_janai_5',
                sentence: '「また遅刻{ちこく}？」\n「電車{でんしゃ}が止{と}まったんだから、しょうがない（　）。」',
                options: ['じゃない', 'じゃなく', 'ではない', 'でもない'],
                correctIndex: 0,
                explanation: '對話情境。電車停了沒辦法啊。'
            }
        ]
    },
    'n3_ka_nani_ka': {
        id: 'n3_ka_nani_ka',
        pattern: 'か何{なに}か',
        connection: '名詞{めいし} + か何{なに}か',
        translation: '...之類的; 什麼的',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示不確定的舉例',
                description: '用於舉出不太確定的例子，表示「或者類似的東西」。',
                examples: [
                    { japanese: 'お茶{ちゃ}か何{なに}か飲{の}みませんか。', chinese: '要不要喝茶什麼的？' },
                    { japanese: 'ペンか何{なに}か貸{か}してくれない？', chinese: '可以借我筆之類的嗎？' },
                    {
                        japanese: '「お腹{なか}すいた。」\n「じゃ、サンドイッチか何{なに}か買{か}ってこようか。」\n「うん、お願{ねが}い。」',
                        chinese: '「肚子餓了。」\n「那我去買三明治之類的吧。」\n「好，拜託了。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「か何か」與「など」的比較',
            description: '兩者都可表示舉例，但用法不同。',
            points: [
                {
                    rule: 'か何か：口語，較隨意，舉出一個不確定的例子。',
                    examples: [{ japanese: 'コーヒーか何{なに}かいかが？', chinese: '咖啡之類的如何？' }]
                },
                {
                    rule: 'など：書面語較多，可列舉多個例子。',
                    examples: [{ japanese: '本{ほん}や雑誌{ざっし}などを読{よ}む。', chinese: '讀書或雜誌等。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ka_nani_ka_1',
                sentence: 'コーヒー（　）いかがですか。',
                options: ['など', 'か何か', 'とか', 'でも'],
                correctIndex: 1,
                explanation: '咖啡之類的如何？'
            },
            {
                id: 'n3_quiz_ka_nani_ka_2',
                sentence: '傘{かさ}（　）持{も}っていったほうがいいよ。',
                options: ['など', 'か何か', 'でも', 'とか'],
                correctIndex: 1,
                explanation: '帶傘之類的比較好。'
            },
            {
                id: 'n3_quiz_ka_nani_ka_3',
                sentence: 'メモ帳{ちょう}（　）ある？',
                options: ['か何か', 'など', 'とか', 'でも'],
                correctIndex: 0,
                explanation: '有便條紙之類的嗎？'
            },
            {
                id: 'n3_quiz_ka_nani_ka_4',
                sentence: '「喉{のど}渇{かわ}いた。」\n「じゃ、水{みず}（　）買{か}おうか。」',
                options: ['とか', 'でも', 'など', 'か何か'],
                correctIndex: 3,
                explanation: '對話情境。買水之類的吧。'
            },
            {
                id: 'n3_quiz_ka_nani_ka_5',
                sentence: '「寒{さむ}くない？」\n「うん、コート（　）貸{か}して。」',
                options: ['など', 'でも', 'か何か', 'とか'],
                correctIndex: 2,
                explanation: '對話情境。借我外套之類的。'
            }
        ]
    },
    'n3_ka_nani_ka_1': {
        id: 'n3_ka_nani_ka_1',
        pattern: 'か何{なに}か',
        connection: '名詞{めいし} + か何{なに}か',
        translation: '...之類的; 什麼的',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '提議或詢問',
                description: '用於提議或詢問時，表示「...或者其他類似的」。',
                examples: [
                    { japanese: '映画{えいが}か何{なに}か見{み}に行{い}かない？', chinese: '要不要去看電影之類的？' },
                    { japanese: '問題{もんだい}か何{なに}かあったら連絡{れんらく}してね。', chinese: '有問題什麼的就聯絡我。' },
                    {
                        japanese: '「週末{しゅうまつ}、暇{ひま}？」\n「うん、どこか行{い}く？」\n「カフェか何{なに}か行{い}かない？」',
                        chinese: '「週末有空嗎？」\n「嗯，要去哪裡嗎？」\n「要不要去咖啡廳之類的？」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「か何か」的使用場合',
            description: '用於提議或詢問時表示不確定。',
            points: [
                {
                    rule: '提議時：輕鬆提出建議，不強制。',
                    examples: [{ japanese: 'ランチか何{なに}かどう？', chinese: '午餐之類的怎麼樣？' }]
                },
                {
                    rule: '詢問時：確認是否有某種情況。',
                    examples: [{ japanese: '困{こま}っていることか何{なに}かある？', chinese: '有什麼困擾的事嗎？' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ka_nani_ka_1_1',
                sentence: '何{なに}か飲{の}み物{もの}（　）いりますか。',
                options: ['とか', 'など', 'でも', 'か何か'],
                correctIndex: 3,
                explanation: '需要飲料之類的嗎？'
            },
            {
                id: 'n3_quiz_ka_nani_ka_1_2',
                sentence: '質問{しつもん}（　）あれば、いつでもどうぞ。',
                options: ['とか', 'など', 'でも', 'か何か'],
                correctIndex: 3,
                explanation: '有問題什麼的隨時說。'
            },
            {
                id: 'n3_quiz_ka_nani_ka_1_3',
                sentence: '風邪{かぜ}（　）引{ひ}いたの？',
                options: ['でも', 'とか', 'か何か', 'など'],
                correctIndex: 2,
                explanation: '是感冒之類的嗎？'
            },
            {
                id: 'n3_quiz_ka_nani_ka_1_4',
                sentence: '「疲{つか}れた顔{かお}してるね。」\n「仕事{しごと}（　）でストレスがたまってて。」',
                options: ['とか', 'か何か', 'でも', 'など'],
                correctIndex: 1,
                explanation: '對話情境。因為工作之類的壓力大。'
            },
            {
                id: 'n3_quiz_ka_nani_ka_1_5',
                sentence: '「今度{こんど}の休{やす}み、予定{よてい}ある？」\n「ドライブ（　）しない？」',
                options: ['など', 'でも', 'か何か', 'とか'],
                correctIndex: 2,
                explanation: '對話情境。要不要開車兜風之類的？'
            }
        ]
    },
    'n3_kakeru': {
        id: 'n3_kakeru',
        pattern: 'かける',
        connection: '動詞{どうし}ます形{けい}（去{きょ}掉{とう}ます） + かける',
        translation: '開始...; 正要...; 還沒做完...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示動作進行到一半',
                description: '表示某個動作開始了但還沒完成，或正要開始做某事。',
                examples: [
                    { japanese: '言{い}いかけてやめた。', chinese: '話說到一半就停了。' },
                    { japanese: '食{た}べかけのリンゴを置{お}いた。', chinese: '放下吃了一半的蘋果。' },
                    {
                        japanese: '「ねえ、あのさ...」\n「なに？」\n「いや、言{い}いかけたけど、やっぱりいいや。」',
                        chinese: '「欸，那個...」\n「什麼？」\n「不，話說到一半，還是算了。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「かける」的用法',
            description: '表示動作的開始階段或中途狀態。',
            points: [
                {
                    rule: '正要開始：動作即將發生。',
                    examples: [{ japanese: '出{で}かけようとした時{とき}、電話{でんわ}が鳴{な}った。', chinese: '正要出門時電話響了。' }]
                },
                {
                    rule: '做到一半：動作開始但未完成。',
                    examples: [{ japanese: '読{よ}みかけの本{ほん}がある。', chinese: '有一本讀到一半的書。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_kakeru_1',
                sentence: '読{よ}み（　）の本{ほん}をなくしてしまった。',
                options: ['おわり', 'はじめ', 'つづけ', 'かけ'],
                correctIndex: 3,
                explanation: '把讀到一半的書弄丟了。'
            },
            {
                id: 'n3_quiz_kakeru_2',
                sentence: '彼{かれ}は何{なに}か言{い}い（　）て、黙{だま}った。',
                options: ['おわり', 'かけ', 'はじめ', 'つづけ'],
                correctIndex: 1,
                explanation: '他話說到一半就沉默了。'
            },
            {
                id: 'n3_quiz_kakeru_3',
                sentence: '死{し}に（　）の動物{どうぶつ}を助{たす}けた。',
                options: ['かけ', 'つづけ', 'はじめ', 'おわり'],
                correctIndex: 0,
                explanation: '救了一隻快死的動物。'
            },
            {
                id: 'n3_quiz_kakeru_4',
                sentence: '「この料理{りょうり}、誰{だれ}の？」\n「あ、食{た}べ（　）のやつだ。」',
                options: ['はじめ', 'かけ', 'おわり', 'つづけ'],
                correctIndex: 1,
                explanation: '對話情境。吃到一半的那個。'
            },
            {
                id: 'n3_quiz_kakeru_5',
                sentence: '「話{はなし}があるんだけど...」\n「言{い}い（　）で止{や}めないでよ。」',
                options: ['つづけ', 'おわり', 'はじめ', 'かけ'],
                correctIndex: 3,
                explanation: '對話情境。不要說到一半就停。'
            }
        ]
    },
    'n3_kara_ni_kakete': {
        id: 'n3_kara_ni_kakete',
        pattern: 'から〜にかけて',
        connection: '名詞{めいし} + から + 名詞{めいし} + にかけて',
        translation: '從...到... (時間/空間)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示範圍',
                description: '表示時間或空間的範圍，強調從某點延續到另一點。界限不太明確。',
                examples: [
                    { japanese: '来週{らいしゅう}から再来週{さらいしゅう}にかけて雨{あめ}が続{つづ}く。', chinese: '從下週到下下週會持續下雨。' },
                    { japanese: '東北{とうほく}から関東{かんとう}にかけて地震{じしん}があった。', chinese: '從東北到關東發生了地震。' },
                    {
                        japanese: '「いつ頃{ごろ}が忙{いそが}しいですか。」\n「12月{がつ}から1月{がつ}にかけてが一番{いちばん}忙{いそが}しいですね。」\n「そうですか。」',
                        chinese: '「什麼時候最忙？」\n「從12月到1月是最忙的。」\n「這樣啊。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「から〜にかけて」與「から〜まで」的比較',
            description: '兩者都表示範圍，但精確度不同。',
            points: [
                {
                    rule: 'から〜にかけて：界限模糊，漸進式的範圍。',
                    examples: [{ japanese: '夜{よる}から朝{あさ}にかけて雪{ゆき}が降{ふ}る。', chinese: '從晚上到早上會下雪。' }]
                },
                {
                    rule: 'から〜まで：界限明確，起點和終點確定。',
                    examples: [{ japanese: '9時{じ}から5時{じ}まで働{はたら}く。', chinese: '從9點工作到5點。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_kara_ni_kakete_1',
                sentence: '今週{こんしゅう}{こんしゅう}（　）来週{らいしゅう}にかけて忙{いそが}しい。',
                options: ['より', 'だけ', 'から', 'まで'],
                correctIndex: 2,
                explanation: '從這週到下週很忙。'
            },
            {
                id: 'n3_quiz_kara_ni_kakete_2',
                sentence: '夜{よる}から朝{あさ}（　）かけて強{つよ}い雨{あめ}が降{ふ}った。',
                options: ['で', 'まで', 'が', 'に'],
                correctIndex: 3,
                explanation: '從晚上到早上下了大雨。'
            },
            {
                id: 'n3_quiz_kara_ni_kakete_3',
                sentence: '春{はる}から夏{なつ}（　）かけて花{はな}が咲{さ}く。',
                options: ['が', 'まで', 'に', 'で'],
                correctIndex: 2,
                explanation: '從春天到夏天花會開。'
            },
            {
                id: 'n3_quiz_kara_ni_kakete_4',
                sentence: '「台風{たいふう}はいつ来{く}る？」\n「明日{あした}の午後{ごご}から夜{よる}（　）かけてだって。」',
                options: ['が', 'に', 'で', 'まで'],
                correctIndex: 1,
                explanation: '對話情境。從明天下午到晚上。'
            },
            {
                id: 'n3_quiz_kara_ni_kakete_5',
                sentence: '「セールはいつまで？」\n「今月{こんげつ}{こんげつ}末{まつ}（　）来月{らいげつ}初{はじ}めにかけてだよ。」',
                options: ['まで', 'だけ', 'から', 'より'],
                correctIndex: 2,
                explanation: '對話情境。從月底到下個月初。'
            }
        ]
    },
    'n3_kawari_ni': {
        id: 'n3_kawari_ni',
        pattern: '代{か}わりに',
        connection: '名詞{めいし}の / 動詞{どうし}普通{ふつう}形{けい} + 代{か}わりに',
        translation: '代替...; 作為交換',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示代替',
                description: '表示代替某人或某事物，或作為交換條件。',
                examples: [
                    { japanese: '父{ちち}の代{か}わりに会議{かいぎ}に出{で}た。', chinese: '代替父親出席會議。' },
                    { japanese: '手伝{てつだ}ってくれた代{か}わりに、食事{しょくじ}をおごる。', chinese: '作為幫忙的回報，我請吃飯。' },
                    {
                        japanese: '「明日{あした}の会議{かいぎ}、出{で}られる？」\n「ごめん、僕{ぼく}の代{か}わりに田中{たなか}さんに頼{たの}んでくれない？」\n「わかった。」',
                        chinese: '「明天的會議能參加嗎？」\n「抱歉，能幫我拜託田中代替我嗎？」\n「知道了。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「代わりに」的多種用法',
            description: '可表示代替人/物，或條件交換。',
            points: [
                {
                    rule: '代替：由A代替B執行某事。',
                    examples: [{ japanese: '母{はは}の代{か}わりに料理{りょうり}した。', chinese: '代替媽媽做飯。' }]
                },
                {
                    rule: '交換條件：因為A，所以B。',
                    examples: [{ japanese: '安{やす}い代{か}わりに品質{ひんしつ}が悪{わる}い。', chinese: '雖然便宜但品質不好。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_kawari_ni_1',
                sentence: '部長{ぶちょう}の（　）に私{わたし}が挨拶{あいさつ}した。',
                options: ['変わり', '代わり', '替え', '代理'],
                correctIndex: 1,
                explanation: '代替部長致詞。'
            },
            {
                id: 'n3_quiz_kawari_ni_2',
                sentence: 'バスの（　）にタクシーで行{い}った。',
                options: ['代わり', '替え', '代理', '変わり'],
                correctIndex: 0,
                explanation: '沒搭公車改搭計程車去。'
            },
            {
                id: 'n3_quiz_kawari_ni_3',
                sentence: '教{おし}えてくれた（　）に昼{ひる}ごはんをおごった。',
                options: ['代理', '替え', '代わり', '変わり'],
                correctIndex: 2,
                explanation: '作為教我的回報請吃午餐。'
            },
            {
                id: 'n3_quiz_kawari_ni_4',
                sentence: '「買{か}い物{もの}行{い}ける？」\n「うん、お母{かあ}さんの（　）に行{い}ってくるよ。」',
                options: ['代理', '代わり', '変わり', '替え'],
                correctIndex: 1,
                explanation: '對話情境。代替媽媽去。'
            },
            {
                id: 'n3_quiz_kawari_ni_5',
                sentence: '「この仕事{しごと}、手伝{てつだ}ってくれない？」\n「いいよ。その（　）に今度{こんど}飲{の}みに行{い}こう。」',
                options: ['代理', '変わり', '替え', '代わり'],
                correctIndex: 3,
                explanation: '對話情境。作為交換下次去喝一杯。'
            }
        ]
    },
    'n3_kekka': {
        id: 'n3_kekka',
        pattern: '結果{けっか}{けっか}',
        connection: '動詞{どうし}た形{けい} / 名詞{めいし}の + 結果{けっか}',
        translation: '結果; ...的結果',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示結果',
                description: '表示某行為或事件之後的結果。',
                examples: [
                    { japanese: '努力{どりょく}した結果{けっか}、合格{ごうかく}できた。', chinese: '努力的結果是考上了。' },
                    { japanese: '調査{ちょうさ}の結果{けっか}、問題{もんだい}が見{み}つかった。', chinese: '調查的結果發現了問題。' },
                    {
                        japanese: '「試験{しけん}どうだった？」\n「頑張{がんば}った結果{けっか}、一位{いちい}になれたよ！」\n「おめでとう！」',
                        chinese: '「考試怎麼樣？」\n「努力的結果拿到了第一名！」\n「恭喜！」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「結果」的用法',
            description: '用於說明因某行為而產生的結果。',
            points: [
                {
                    rule: '動詞た形 + 結果：強調行為後的結果。',
                    examples: [{ japanese: '話{はな}し合{あ}った結果{けっか}、解決{かいけつ}した。', chinese: '討論的結果解決了。' }]
                },
                {
                    rule: '名詞の + 結果：某事件的結果。',
                    examples: [{ japanese: '検査{けんさ}の結果{けっか}は明日{あした}出{で}る。', chinese: '檢查結果明天出來。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_kekka_1',
                sentence: '一年間{いちねんかん}勉強{べんきょう}した（　）、日本語{にほんご}が上手{じょうず}になった。',
                options: ['目的', '理由', '結果', '原因'],
                correctIndex: 2,
                explanation: '學習了一年的結果日語進步了。'
            },
            {
                id: 'n3_quiz_kekka_2',
                sentence: '実験{じっけん}の（　）、新{あたら}しい発見{はっけん}があった。',
                options: ['結果', '原因', '目的', '理由'],
                correctIndex: 0,
                explanation: '實驗的結果有了新發現。'
            },
            {
                id: 'n3_quiz_kekka_3',
                sentence: '話{はな}し合{あ}った（　）、賛成{さんせい}することにした。',
                options: ['理由', '結果', '目的', '原因'],
                correctIndex: 1,
                explanation: '討論的結果決定贊成。'
            },
            {
                id: 'n3_quiz_kekka_4',
                sentence: '「ダイエット続{つづ}けてるの？」\n「うん、運動{うんどう}した（　）、3キロ痩{や}せたよ。」',
                options: ['原因', '結果', '目的', '理由'],
                correctIndex: 1,
                explanation: '對話情境。運動的結果瘦了3公斤。'
            },
            {
                id: 'n3_quiz_kekka_5',
                sentence: '「選挙{せんきょ}の（　）はどうなった？」\n「まだ発表{はっぴょう}されてないよ。」',
                options: ['理由', '目的', '原因', '結果'],
                correctIndex: 3,
                explanation: '對話情境。選舉結果怎麼樣了？'
            }
        ]
    },
    'n3_kekkyoku': {
        id: 'n3_kekkyoku',
        pattern: '結局{けっきょく}{けっきょく}{けっきょく}',
        connection: '結局{けっきょく}{けっきょく} + 句{く}子{し}',
        translation: '結果; 最後',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示最終結果',
                description: '經過各種情況或考慮之後，表示最終的結果或結論。常帶有無奈或出乎意料的語氣。',
                examples: [
                    { japanese: '結局{けっきょく}、何{なに}も買{か}わなかった。', chinese: '結果什麼都沒買。' },
                    { japanese: 'いろいろ考{かんが}えたが、結局{けっきょく}諦{あきら}めた。', chinese: '想了很多，最後還是放棄了。' },
                    {
                        japanese: '「旅行{りょこう}の計画{けいかく}、どうなった？」\n「雨{あめ}だったから、結局{けっきょく}家{いえ}にいたよ。」\n「残念{ざんねん}だったね。」',
                        chinese: '「旅行的計畫怎麼樣了？」\n「因為下雨，結果還是待在家裡。」\n「真可惜。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「結局」與「結果」的比較',
            description: '兩者都可表示結果，但用法不同。',
            points: [
                {
                    rule: '結局：副詞，強調經過曲折後的最終結果，常帶無奈感。',
                    examples: [{ japanese: '結局{けっきょく}彼{かれ}は来{こ}なかった。', chinese: '結果他沒來。' }]
                },
                {
                    rule: '結果：名詞，客觀陳述某行為的結果。',
                    examples: [{ japanese: '努力{どりょく}の結果{けっか}、成功{せいこう}した。', chinese: '努力的結果成功了。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_kekkyoku_1',
                sentence: 'たくさん探{さが}したが、（　）見{み}つからなかった。',
                options: ['終わり', '結果', '結局', '最後'],
                correctIndex: 2,
                explanation: '找了很多，結果還是沒找到。'
            },
            {
                id: 'n3_quiz_kekkyoku_2',
                sentence: '悩{なや}んだけど、（　）元{もと}のままにした。',
                options: ['最後', '終わり', '結局', '結果'],
                correctIndex: 2,
                explanation: '煩惱了一番，最後還是維持原樣。'
            },
            {
                id: 'n3_quiz_kekkyoku_3',
                sentence: '（　）誰{だれ}も助{たす}けてくれなかった。',
                options: ['最後', '終わり', '結果', '結局'],
                correctIndex: 3,
                explanation: '結果沒有人幫忙。'
            },
            {
                id: 'n3_quiz_kekkyoku_4',
                sentence: '「映画{えいが}見{み}に行{い}った？」\n「行{い}こうとしたけど、（　）行{い}けなかった。」',
                options: ['最後', '結果', '終わり', '結局'],
                correctIndex: 3,
                explanation: '對話情境。想去但結果沒去成。'
            },
            {
                id: 'n3_quiz_kekkyoku_5',
                sentence: '「彼{かれ}と仲直{なかなお}りした？」\n「いろいろ話{はな}したけど、（　）無理{むり}だった。」',
                options: ['結局', '結果', '終わり', '最後'],
                correctIndex: 0,
                explanation: '對話情境。談了很多但結果還是不行。'
            }
        ]
    },
    'n3_kesshite_nai': {
        id: 'n3_kesshite_nai',
        pattern: '決{けっ}して～ない（けっして～ない）',
        connection: '決{けっ}して + 動詞{どうし}/形容詞{けいようし}否定{ひてい}形{けい}',
        translation: '絕不...; 絕對不...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '強調否定',
                description: '用於強調絕對不會或絕對不是，語氣非常堅定。',
                examples: [
                    { japanese: '決{けっ}して諦{あきら}めない。', chinese: '絕不放棄。' },
                    { japanese: 'これは決{けっ}して偶然{ぐうぜん}ではない。', chinese: '這絕不是偶然。' },
                    {
                        japanese: '「秘密{ひみつ}、守{まも}ってくれる？」\n「もちろん。決{けっ}して誰{だれ}にも言{い}わないよ。」\n「ありがとう。」',
                        chinese: '「能幫我保守秘密嗎？」\n「當然。絕對不會告訴任何人。」\n「謝謝。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「決して」的用法',
            description: '必須與否定形搭配使用，表示強烈否定。',
            points: [
                {
                    rule: '決して + 動詞ない：強調絕對不做某事。',
                    examples: [{ japanese: '決{けっ}して忘{わす}れない。', chinese: '絕不會忘記。' }]
                },
                {
                    rule: '決して + 形容詞ない：強調絕對不是某種狀態。',
                    examples: [{ japanese: '決{けっ}して簡単{かんたん}ではない。', chinese: '絕對不簡單。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_kesshite_nai_1',
                sentence: 'この約束{やくそく}は（　）破{やぶ}らない。',
                options: ['全然', 'まったく', 'ぜんぜん', '決して'],
                correctIndex: 3,
                explanation: '這個約定絕對不會打破。'
            },
            {
                id: 'n3_quiz_kesshite_nai_2',
                sentence: '彼{かれ}は（　）嘘{うそ}をつかない人{ひと}だ。',
                options: ['まったく', '決して', 'ぜんぜん', '全然'],
                correctIndex: 1,
                explanation: '他是絕對不會說謊的人。'
            },
            {
                id: 'n3_quiz_kesshite_nai_3',
                sentence: 'この問題{もんだい}は（　）簡単{かんたん}ではない。',
                options: ['まったく', '全然', '決して', 'ぜんぜん'],
                correctIndex: 2,
                explanation: '這個問題絕對不簡單。'
            },
            {
                id: 'n3_quiz_kesshite_nai_4',
                sentence: '「怒{おこ}ってる？」\n「ううん、（　）怒{おこ}ってないよ。」',
                options: ['決して', '全然', 'ぜんぜん', 'まったく'],
                correctIndex: 0,
                explanation: '對話情境。絕對沒有生氣。'
            },
            {
                id: 'n3_quiz_kesshite_nai_5',
                sentence: '「また失敗{しっぱい}しちゃった。」\n「大丈夫{だいじょうぶ}。（　）諦{あきら}めないで。」',
                options: ['ぜんぜん', 'まったく', '決して', '全然'],
                correctIndex: 2,
                explanation: '對話情境。絕對不要放棄。'
            }
        ]
    },
    'n3_kesshite_nai_1': {
        id: 'n3_kesshite_nai_1',
        pattern: '決{けっ}して～ない（けっして～ない）',
        connection: '決{けっ}して + 動詞{どうし}/形容詞{けいようし}否定{ひてい}形{けい}',
        translation: '絕不...; 絕對不...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '強調否定（書面語）',
                description: '用於書面語或正式場合，強調絕對否定。',
                examples: [
                    { japanese: 'この事実{じじつ}を決{けっ}して隠{かく}してはならない。', chinese: '這個事實絕對不能隱瞞。' },
                    { japanese: '彼{かれ}の努力{どりょく}は決{けっ}して無駄{むだ}ではなかった。', chinese: '他的努力絕對不是白費的。' },
                    {
                        japanese: '「この情報{じょうほう}は機密{きみつ}です。」\n「はい、決{けっ}して外部{がいぶ}に漏{も}らしません。」\n「よろしくお願{ねが}いします。」',
                        chinese: '「這個資訊是機密。」\n「是的，絕對不會洩漏給外部。」\n「拜託了。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「決して」的語氣',
            description: '表達堅定的意志或客觀事實的否定。',
            points: [
                {
                    rule: '表達意志：堅定表示不會做某事。',
                    examples: [{ japanese: '決{けっ}して裏切{うらぎ}らない。', chinese: '絕不背叛。' }]
                },
                {
                    rule: '陳述事實：強調某事絕非如此。',
                    examples: [{ japanese: '成功{せいこう}は決{けっ}して運{うん}だけではない。', chinese: '成功絕不只是運氣。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_kesshite_nai_1_1',
                sentence: '努力{どりょく}は（　）裏切{うらぎ}らない。',
                options: ['決して', '全然', 'まったく', 'ぜんぜん'],
                correctIndex: 0,
                explanation: '努力絕不會背叛你。'
            },
            {
                id: 'n3_quiz_kesshite_nai_1_2',
                sentence: 'この道{みち}は（　）安全{あんぜん}ではない。',
                options: ['全然', 'ぜんぜん', '決して', 'まったく'],
                correctIndex: 2,
                explanation: '這條路絕對不安全。'
            },
            {
                id: 'n3_quiz_kesshite_nai_1_3',
                sentence: '私{わたし}は（　）後悔{こうかい}しない。',
                options: ['決して', 'ぜんぜん', 'まったく', '全然'],
                correctIndex: 0,
                explanation: '我絕對不會後悔。'
            },
            {
                id: 'n3_quiz_kesshite_nai_1_4',
                sentence: '「信{しん}じていいの？」\n「うん、（　）嘘{うそ}じゃないよ。」',
                options: ['まったく', '決して', 'ぜんぜん', '全然'],
                correctIndex: 1,
                explanation: '對話情境。絕對不是謊話。'
            },
            {
                id: 'n3_quiz_kesshite_nai_1_5',
                sentence: '「もう会{あ}えないの？」\n「（　）そんなことないよ。また会{あ}おう。」',
                options: ['ぜんぜん', '決して', 'まったく', '全然'],
                correctIndex: 1,
                explanation: '對話情境。絕對不是那樣的。'
            }
        ]
    },
    'n3_kirenai': {
        id: 'n3_kirenai',
        pattern: '切{き}れない',
        connection: '動詞{どうし}ます形{けい}（去{きょ}掉{とう}ます） + 切{き}れない',
        translation: '不能...; ...不完',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示無法完成',
                description: '表示因數量太多或程度太高而無法完全做完某事。',
                examples: [
                    { japanese: '食{た}べきれないほどの料理{りょうり}が出{で}た。', chinese: '端出了多到吃不完的菜。' },
                    { japanese: '数{かぞ}えきれないほどの星{ほし}が見{み}える。', chinese: '可以看到數不清的星星。' },
                    {
                        japanese: '「この本{ほん}、全部{ぜんぶ}読{よ}んだの？」\n「いや、多{おお}すぎて読{よ}みきれなかったよ。」\n「そうだよね。」',
                        chinese: '「這些書全部讀完了嗎？」\n「不，太多了讀不完。」\n「也是呢。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「切れない」與「切る」的對比',
            description: '表示完成與否的對比。',
            points: [
                {
                    rule: '切る：完全做完某事。',
                    examples: [{ japanese: 'やっと食{た}べ切{き}った。', chinese: '終於吃完了。' }]
                },
                {
                    rule: '切れない：無法完全做完。',
                    examples: [{ japanese: '言{い}いきれない思{おも}いがある。', chinese: '有說不盡的心情。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_kirenai_1',
                sentence: 'お菓子{かし}が多{おお}すぎて食{た}べ（　）。',
                options: ['きれない', 'しまわない', 'できない', 'おわらない'],
                correctIndex: 0,
                explanation: '點心太多吃不完。'
            },
            {
                id: 'n3_quiz_kirenai_2',
                sentence: '彼女{かのじょ}への感謝{かんしゃ}は言{い}い（　）。',
                options: ['しまわない', 'できない', 'きれない', 'おわらない'],
                correctIndex: 2,
                explanation: '對她的感謝說不完。'
            },
            {
                id: 'n3_quiz_kirenai_3',
                sentence: '仕事{しごと}が多{おお}くて今日中{きょうじゅう}に終{お}わり（　）。',
                options: ['しまわない', 'おわらない', 'できない', 'きれない'],
                correctIndex: 3,
                explanation: '工作太多今天內做不完。'
            },
            {
                id: 'n3_quiz_kirenai_4',
                sentence: '「宿題{しゅくだい}終{お}わった？」\n「全部{ぜんぶ}はやり（　）よ。」',
                options: ['しまわない', 'きれない', 'おわらない', 'できない'],
                correctIndex: 1,
                explanation: '對話情境。全部做不完。'
            },
            {
                id: 'n3_quiz_kirenai_5',
                sentence: '「思{おも}い出{で}、覚{おぼ}えてる？」\n「もちろん。数{かぞ}え（　）ほどあるよ。」',
                options: ['しまわない', 'できない', 'おわらない', 'きれない'],
                correctIndex: 3,
                explanation: '對話情境。多到數不完。'
            }
        ]
    },
    'n3_kirenai_1': {
        id: 'n3_kirenai_1',
        pattern: '切{き}れない',
        connection: '動詞{どうし}ます形{けい}（去{きょ}掉{とう}ます） + 切{き}れない',
        translation: '不能...; 做不完...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示能力不足',
                description: '表示因能力或條件不足而無法完全達成。',
                examples: [
                    { japanese: 'この責任{せきにん}は負{お}いきれない。', chinese: '無法承擔這個責任。' },
                    { japanese: '彼{かれ}の行動{こうどう}は理解{りかい}しきれない。', chinese: '無法完全理解他的行為。' },
                    {
                        japanese: '「一人{ひとり}でできる？」\n「正直{しょうじき}、一人{ひとり}では対応{たいおう}しきれないよ。」\n「じゃ、手伝{てつだ}うよ。」',
                        chinese: '「一個人做得來嗎？」\n「老實說，一個人應付不來。」\n「那我來幫忙。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「切れない」表達能力限度',
            description: '表示超出能力範圍而無法完成。',
            points: [
                {
                    rule: '數量過多：太多而處理不完。',
                    examples: [{ japanese: '仕事{しごと}が多{おお}くて処理{しょり}しきれない。', chinese: '工作太多處理不完。' }]
                },
                {
                    rule: '能力不足：超出能力範圍。',
                    examples: [{ japanese: 'この問題{もんだい}は解決{かいけつ}しきれない。', chinese: '這個問題無法完全解決。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_kirenai_1_1',
                sentence: 'この複雑{ふくざつ}な状況{じょうきょう}は把握{はあく}し（　）。',
                options: ['しまわない', 'できない', 'きれない', 'おわらない'],
                correctIndex: 2,
                explanation: '這複雜的情況無法完全掌握。'
            },
            {
                id: 'n3_quiz_kirenai_1_2',
                sentence: '彼{かれ}の気持{きも}ちを理解{りかい}し（　）。',
                options: ['おわらない', 'しまわない', 'きれない', 'できない'],
                correctIndex: 2,
                explanation: '無法完全理解他的心情。'
            },
            {
                id: 'n3_quiz_kirenai_1_3',
                sentence: 'こんなに大量{たいりょう}の情報{じょうほう}は覚{おぼ}え（　）。',
                options: ['おわらない', 'きれない', 'できない', 'しまわない'],
                correctIndex: 1,
                explanation: '這麼大量的資訊記不完。'
            },
            {
                id: 'n3_quiz_kirenai_1_4',
                sentence: '「この仕事{しごと}、引{ひ}き受{う}ける？」\n「責任{せきにん}が重{おも}すぎて負{お}い（　）よ。」',
                options: ['おわらない', 'できない', 'きれない', 'しまわない'],
                correctIndex: 2,
                explanation: '對話情境。責任太重承擔不起。'
            },
            {
                id: 'n3_quiz_kirenai_1_5',
                sentence: '「全員{ぜんいん}の意見{いけん}を聞{き}いた？」\n「多{おお}すぎて聞{き}き（　）よ。」',
                options: ['きれない', 'できない', 'しまわない', 'おわらない'],
                correctIndex: 0,
                explanation: '對話情境。太多人聽不完。'
            }
        ]
    },
    'n3_kiri': {
        id: 'n3_kiri',
        pattern: 'きり',
        connection: '動詞{どうし}た形{けい} / 名詞{めいし} + きり',
        translation: '只有...; 僅僅; 自從...以後',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示限定或持續狀態',
                description: '表示只有某種情況，或自從某事發生後一直維持該狀態。',
                examples: [
                    { japanese: '二人{ふたり}きりで話{はな}したい。', chinese: '想兩個人單獨談談。' },
                    { japanese: '出{で}かけたきり、帰{かえ}ってこない。', chinese: '出門後就沒回來。' },
                    {
                        japanese: '「最近{さいきん}、田中{たなか}さんに会{あ}った？」\n「いや、卒業{そつぎょう}したきり会{あ}ってないなあ。」\n「そっか。連絡{れんらく}してみれば？」',
                        chinese: '「最近見過田中嗎？」\n「沒有，畢業後就沒見過了。」\n「這樣啊。要不要聯絡看看？」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「きり」的用法',
            description: '表示限定或某狀態持續至今。',
            points: [
                {
                    rule: '限定：只有這些，沒有其他。',
                    examples: [{ japanese: 'お金{かね}はこれきりだ。', chinese: '錢只有這些了。' }]
                },
                {
                    rule: '持續狀態：自從...後一直...。',
                    examples: [{ japanese: '寝{ね}たきりで起{お}きられない。', chinese: '臥床不起。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_kiri_1',
                sentence: '彼{かれ}とは一度{いちど}会{あ}った（　）だ。',
                options: ['きり', 'だけ', 'のみ', 'ばかり'],
                correctIndex: 0,
                explanation: '和他只見過一次面。'
            },
            {
                id: 'n3_quiz_kiri_2',
                sentence: '母{はは}は入院{にゅういん}した（　）、まだ退院{たいいん}していない。',
                options: ['だけ', 'ばかり', 'のみ', 'きり'],
                correctIndex: 3,
                explanation: '母親住院後還沒出院。'
            },
            {
                id: 'n3_quiz_kiri_3',
                sentence: '二人{ふたり}（　）で旅行{りょこう}に行{い}きたい。',
                options: ['きり', 'ばかり', 'だけ', 'のみ'],
                correctIndex: 0,
                explanation: '想兩個人單獨去旅行。'
            },
            {
                id: 'n3_quiz_kiri_4',
                sentence: '「この本{ほん}、返{かえ}してくれた？」\n「あ、借{か}りた（　）だった。ごめん。」',
                options: ['ばかり', 'のみ', 'だけ', 'きり'],
                correctIndex: 3,
                explanation: '對話情境。借了之後一直沒還。'
            },
            {
                id: 'n3_quiz_kiri_5',
                sentence: '「お兄{にい}さん、元気{げんき}？」\n「実{じつ}は、病気{びょうき}で寝{ね}た（　）なんだ。」',
                options: ['のみ', 'きり', 'だけ', 'ばかり'],
                correctIndex: 1,
                explanation: '對話情境。生病後一直臥床。'
            }
        ]
    },
    'n3_kiru': {
        id: 'n3_kiru',
        pattern: '切{き}る',
        connection: '動詞{どうし}ます形{けい}（去{きょ}掉{とう}ます） + 切{き}る',
        translation: '做完; 斷言; 充滿自信',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示完全做完',
                description: '表示某個動作徹底完成，或充分地達到某種狀態。',
                examples: [
                    { japanese: 'マラソンを走{はし}り切{き}った。', chinese: '跑完了馬拉松。' },
                    { japanese: '言{い}い切{き}ることはできない。', chinese: '無法斷言。' },
                    {
                        japanese: '「このプロジェクト、終{お}わりそう？」\n「うん、今日中{きょうじゅう}にやり切{き}るつもりだよ。」\n「頑張{がんば}って！」',
                        chinese: '「這個專案快完成了嗎？」\n「嗯，我打算今天內全部做完。」\n「加油！」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「切る」與「切れる」的對比',
            description: '主動完成與無法完成的對比。',
            points: [
                {
                    rule: '切る：主動完成、徹底做完。',
                    examples: [{ japanese: '最後{さいご}まで戦{たたか}い切{き}る。', chinese: '戰鬥到最後。' }]
                },
                {
                    rule: '切れない：無法完成、力不從心。',
                    examples: [{ japanese: '食{た}べ切{き}れない。', chinese: '吃不完。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_kiru_1',
                sentence: 'この本{ほん}を今週{こんしゅう}中{こんしゅうちゅう}に読{よ}み（　）たい。',
                options: ['終わり', 'かけ', 'はじめ', '切り'],
                correctIndex: 3,
                explanation: '想在這週內把這本書讀完。'
            },
            {
                id: 'n3_quiz_kiru_2',
                sentence: '彼{かれ}は自信{じしん}を持{も}って言{い}い（　）た。',
                options: ['終わっ', 'かけ', '切っ', 'はじめ'],
                correctIndex: 2,
                explanation: '他自信滿滿地斷言了。'
            },
            {
                id: 'n3_quiz_kiru_3',
                sentence: '疲{つか}れ（　）て動{うご}けない。',
                options: ['切っ', '終わっ', 'はじめ', 'かけ'],
                correctIndex: 0,
                explanation: '累到極點動不了。'
            },
            {
                id: 'n3_quiz_kiru_4',
                sentence: '「試合{しあい}どうだった？」\n「最後{さいご}まで走{はし}り（　）たよ！」',
                options: ['終わっ', 'かけ', '切っ', 'はじめ'],
                correctIndex: 2,
                explanation: '對話情境。跑完全程了！'
            },
            {
                id: 'n3_quiz_kiru_5',
                sentence: '「あの店{みせ}、美味{おい}しい？」\n「絶対{ぜったい}美味{おい}しいと言{い}い（　）れるよ。」',
                options: ['はじめ', '切', 'かけ', '終わ'],
                correctIndex: 1,
                explanation: '對話情境。可以肯定地說很好吃。'
            }
        ]
    },
    'n3_kiru_1': {
        id: 'n3_kiru_1',
        pattern: '切{き}る',
        connection: '動詞{どうし}ます形{けい}（去{きょ}掉{とう}ます） + 切{き}る',
        translation: '做完; 斷言',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示完全達成',
                description: '強調動作的徹底完成或極限狀態。',
                examples: [
                    { japanese: '売{う}り切{き}れた商品{しょうひん}が多{おお}い。', chinese: '賣光的商品很多。' },
                    { japanese: '信{しん}じ切{き}っている。', chinese: '深信不疑。' },
                    {
                        japanese: '「チケット、買{か}えた？」\n「残念{ざんねん}、売{う}り切{き}れてた。」\n「そっか、残念{ざんねん}だね。」',
                        chinese: '「票買到了嗎？」\n「可惜，賣光了。」\n「這樣啊，真可惜。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「切る」的擴展用法',
            description: '表示極限或斷絕。',
            points: [
                {
                    rule: '達到極限：完全、徹底。',
                    examples: [{ japanese: '使{つか}い切{き}った。', chinese: '用光了。' }]
                },
                {
                    rule: '斷絕關係：完全切斷。',
                    examples: [{ japanese: '縁{えん}を切{き}る。', chinese: '斷絕關係。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_kiru_1_1',
                sentence: 'お金{かね}を使{つか}い（　）てしまった。',
                options: ['終わっ', 'かけ', 'はじめ', '切っ'],
                correctIndex: 3,
                explanation: '把錢用光了。'
            },
            {
                id: 'n3_quiz_kiru_1_2',
                sentence: '彼{かれ}を信{しん}じ（　）ていた。',
                options: ['終わっ', '切っ', 'かけ', 'はじめ'],
                correctIndex: 1,
                explanation: '完全相信他。'
            },
            {
                id: 'n3_quiz_kiru_1_3',
                sentence: '電池{でんち}が切{き}れたので、使{つか}い（　）た。',
                options: ['はじめ', 'かけ', '切っ', '終わっ'],
                correctIndex: 2,
                explanation: '電池沒電了，用光了。'
            },
            {
                id: 'n3_quiz_kiru_1_4',
                sentence: '「その話{はなし}、本当{ほんとう}？」\n「うん、断言{だんげん}し（　）れるよ。」',
                options: ['はじめ', 'かけ', '切', '終わ'],
                correctIndex: 2,
                explanation: '對話情境。可以斷言。'
            },
            {
                id: 'n3_quiz_kiru_1_5',
                sentence: '「疲{つか}れた？」\n「うん、もう体力{たいりょく}を使{つか}い（　）たよ。」',
                options: ['かけ', '終わっ', '切っ', 'はじめ'],
                correctIndex: 2,
                explanation: '對話情境。體力用盡了。'
            }
        ]
    },
    'n3_kke': {
        id: 'n3_kke',
        pattern: 'っけ',
        connection: '動詞{どうし}/形容詞{けいようし}普通{ふつう}形{けい} + っけ / 名詞{めいし}だ + っけ',
        translation: '...來著? (回憶/確認)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '回憶或確認',
                description: '用於試圖回憶某事，或向對方確認自己不太確定的事情。口語表現。',
                examples: [
                    { japanese: '彼{かれ}の名前{なまえ}、何{なん}だっけ？', chinese: '他的名字叫什麼來著？' },
                    { japanese: '明日{あした}は休{やす}みだっけ？', chinese: '明天是放假吧？' },
                    {
                        japanese: '「ねえ、約束{やくそく}何時{なんじ}だっけ？」\n「3時{じ}だよ。忘{わす}れたの？」\n「ごめん、ちょっと混乱{こんらん}してた。」',
                        chinese: '「欸，約的是幾點來著？」\n「3點啊。忘了嗎？」\n「抱歉，有點搞混了。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「っけ」的語感',
            description: '表示不太確定、試圖回憶的語氣。',
            points: [
                {
                    rule: '自問自答：自己試圖回憶。',
                    examples: [{ japanese: 'どこに置{お}いたっけ？', chinese: '放哪裡了來著？' }]
                },
                {
                    rule: '向對方確認：希望對方幫忙回憶。',
                    examples: [{ japanese: '君{きみ}、誰{だれ}だっけ？', chinese: '你是誰來著？' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_kke_1',
                sentence: 'あの人{ひと}の名前{なまえ}、何{なん}だ（　）？',
                options: ['よね', 'だろう', 'かな', 'っけ'],
                correctIndex: 3,
                explanation: '那個人的名字叫什麼來著？'
            },
            {
                id: 'n3_quiz_kke_2',
                sentence: '今日{きょう}、何曜日{なんようび}だ（　）？',
                options: ['かな', 'だろう', 'っけ', 'よね'],
                correctIndex: 2,
                explanation: '今天星期幾來著？'
            },
            {
                id: 'n3_quiz_kke_3',
                sentence: 'この単語{たんご}、どういう意味{いみ}だ（　）？',
                options: ['だろう', 'かな', 'よね', 'っけ'],
                correctIndex: 3,
                explanation: '這個單字是什麼意思來著？'
            },
            {
                id: 'n3_quiz_kke_4',
                sentence: '「電話番号{でんわばんごう}、何番{なんばん}だ（　）？」\n「090から始{はじ}まるやつだよ。」',
                options: ['かな', 'っけ', 'よね', 'だろう'],
                correctIndex: 1,
                explanation: '對話情境。電話號碼是多少來著？'
            },
            {
                id: 'n3_quiz_kke_5',
                sentence: '「あれ、カギ、どこに置{お}いたっ（　）？」\n「テーブルの上{うえ}じゃない？」',
                options: ['け', 'よね', 'だろう', 'かな'],
                correctIndex: 0,
                explanation: '對話情境。鑰匙放哪裡來著？'
            }
        ]
    },
    'n3_komu': {
        id: 'n3_komu',
        pattern: '込{こ}む',
        connection: '動詞{どうし}ます形{けい}（去{きょ}掉{とう}ます） + 込{こ}む',
        translation: '深入...; 充滿...; 進入...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示深入或徹底',
                description: '表示動作向內部進行，或動作程度很深、很徹底。',
                examples: [
                    { japanese: '電車{でんしゃ}に乗{の}り込{こ}む。', chinese: '擠進電車。' },
                    { japanese: '考{かんが}え込{こ}んでしまった。', chinese: '陷入沉思。' },
                    {
                        japanese: '「どうしたの？ずっと黙{だま}って。」\n「ちょっと考{かんが}え込{こ}んでた。」\n「何{なに}か心配事{しんぱいごと}？」',
                        chinese: '「怎麼了？一直沉默不語。」\n「我在沉思。」\n「有什麼煩心事嗎？」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「込む」的用法',
            description: '表示向內、深入或徹底的動作。',
            points: [
                {
                    rule: '物理性進入：進入某空間。',
                    examples: [{ japanese: '部屋{へや}に飛{と}び込{こ}む。', chinese: '衝進房間。' }]
                },
                {
                    rule: '抽象性深入：深入某狀態。',
                    examples: [{ japanese: '黙{だま}り込{こ}む。', chinese: '沉默不語。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_komu_1',
                sentence: '彼女{かのじょ}は急{きゅう}に泣{な}き（　）んだ。',
                options: ['始め', '出し', '込', '続け'],
                correctIndex: 2,
                explanation: '她突然哭了起來（哭得很深入）。'
            },
            {
                id: 'n3_quiz_komu_2',
                sentence: '彼{かれ}は黙{だま}り（　）んでしまった。',
                options: ['出し', '込', '続け', '始め'],
                correctIndex: 1,
                explanation: '他沉默不語了。'
            },
            {
                id: 'n3_quiz_komu_3',
                sentence: '荷物{にもつ}を車{くるま}に積{つ}み（　）む。',
                options: ['続け', '出し', '始め', '込'],
                correctIndex: 3,
                explanation: '把行李裝進車裡。'
            },
            {
                id: 'n3_quiz_komu_4',
                sentence: '「どうしてそんなに悩{なや}んでるの？」\n「考{かんが}え（　）んでしまってね。」',
                options: ['始め', '続け', '込', '出し'],
                correctIndex: 2,
                explanation: '對話情境。陷入沉思了。'
            },
            {
                id: 'n3_quiz_komu_5',
                sentence: '「お金{かね}、どうやって稼{かせ}いだの？」\n「一生懸命{いっしょうけんめい}働{はたら}いて、貯{た}め（　）んだんだ。」',
                options: ['込', '出し', '始め', '続け'],
                correctIndex: 0,
                explanation: '對話情境。拼命工作存起來的。'
            }
        ]
    },
    'n3_koso': {
        id: 'n3_koso',
        pattern: 'こそ',
        connection: '名詞{めいし} / 動詞{どうし}て形{けい} + こそ',
        translation: '正是...; 才是... (強調)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '強調語氣',
                description: '用於強調某事物是最重要的、最關鍵的，或強調某條件才能產生某結果。',
                examples: [
                    { japanese: '今度{こんど}こそ成功{せいこう}する。', chinese: '這次一定要成功。' },
                    { japanese: 'あなたこそ頑張{がんば}って。', chinese: '你才要加油呢。' },
                    {
                        japanese: '「いつもありがとう。」\n「こちらこそ。いつもお世話{せわ}になってます。」\n「いえいえ。」',
                        chinese: '「一直謝謝你。」\n「我才要謝謝你。一直受你照顧。」\n「哪裡哪裡。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「こそ」的用法',
            description: '強調「這個才是」的語氣。',
            points: [
                {
                    rule: '強調重點：突出某事物的重要性。',
                    examples: [{ japanese: '健康{けんこう}こそ大切{たいせつ}だ。', chinese: '健康才是最重要的。' }]
                },
                {
                    rule: '回應謙讓：禮貌性地回應對方。',
                    examples: [{ japanese: 'こちらこそ、すみません。', chinese: '我才要說抱歉。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_koso_1',
                sentence: '今年{ことし}（　）日本語{にほんご}を上手{じょうず}になりたい。',
                options: ['しか', 'だけ', 'ばかり', 'こそ'],
                correctIndex: 3,
                explanation: '今年一定要把日語學好。'
            },
            {
                id: 'n3_quiz_koso_2',
                sentence: '失敗{しっぱい}して（　）分{わ}かることもある。',
                options: ['ばかり', 'こそ', 'だけ', 'しか'],
                correctIndex: 1,
                explanation: '正因為失敗才能明白的事情也有。'
            },
            {
                id: 'n3_quiz_koso_3',
                sentence: 'あなた（　）リーダーにふさわしい。',
                options: ['こそ', 'ばかり', 'だけ', 'しか'],
                correctIndex: 0,
                explanation: '正是你才適合當領導。'
            },
            {
                id: 'n3_quiz_koso_4',
                sentence: '「お疲{つか}れ様{さま}でした。」\n「こちら（　）。」',
                options: ['だけ', 'しか', 'ばかり', 'こそ'],
                correctIndex: 3,
                explanation: '對話情境。我才要說辛苦了。'
            },
            {
                id: 'n3_quiz_koso_5',
                sentence: '「今度{こんど}の試験{しけん}、頑張{がんば}ってね。」\n「今度{こんど}（　）合格{ごうかく}するよ！」',
                options: ['こそ', 'だけ', 'しか', 'ばかり'],
                correctIndex: 0,
                explanation: '對話情境。這次一定要及格！'
            }
        ]
    },
    'n3_koto': {
        id: 'n3_koto',
        pattern: 'こと',
        connection: '動詞{どうし}辭書{じしょ}形{けい} / 動詞{どうし}ない形{けい} + こと',
        translation: '必須... (規則/命令)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示規則或命令',
                description: '用於書面語，表示規則、規定或命令。常見於告示、說明書等。',
                examples: [
                    { japanese: '図書館{としょかん}では静{しず}かにすること。', chinese: '在圖書館必須保持安靜。' },
                    { japanese: '遅刻{ちこく}しないこと。', chinese: '不可遲到。' },
                    {
                        japanese: '「新{あたら}しいルール、見{み}た？」\n「うん。遅刻{ちこく}しないこと、って書{か}いてあったね。」\n「厳{きび}しくなったなあ。」',
                        chinese: '「看到新規定了嗎？」\n「嗯。上面寫著不可遲到。」\n「變嚴格了呢。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「こと」作為規定用法',
            description: '常見於正式的規則說明。',
            points: [
                {
                    rule: '辭書形 + こと：必須做某事。',
                    examples: [{ japanese: '8時{じ}に集合{しゅうごう}すること。', chinese: '必須8點集合。' }]
                },
                {
                    rule: 'ない形 + こと：禁止做某事。',
                    examples: [{ japanese: '携帯{けいたい}を使{つか}わないこと。', chinese: '禁止使用手機。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_koto_1',
                sentence: '試験中{しけんちゅう}は私語{しご}をしない（　）。',
                options: ['こと', 'はず', 'べき', 'もの'],
                correctIndex: 0,
                explanation: '考試中不可交談。'
            },
            {
                id: 'n3_quiz_koto_2',
                sentence: 'レポートは金曜日{きんようび}までに提出{ていしゅつ}する（　）。',
                options: ['こと', 'もの', 'べき', 'はず'],
                correctIndex: 0,
                explanation: '報告必須在週五前提交。'
            },
            {
                id: 'n3_quiz_koto_3',
                sentence: '教室{きょうしつ}では飲食{いんしょく}しない（　）。',
                options: ['こと', 'もの', 'はず', 'べき'],
                correctIndex: 0,
                explanation: '在教室不可飲食。'
            },
            {
                id: 'n3_quiz_koto_4',
                sentence: '「注意事項{ちゅういじこう}、読{よ}んだ？」\n「うん、騒{さわ}がない（　）って書{か}いてあったよ。」',
                options: ['はず', 'もの', 'こと', 'べき'],
                correctIndex: 2,
                explanation: '對話情境。上面寫著不可喧嘩。'
            },
            {
                id: 'n3_quiz_koto_5',
                sentence: '「このジム{じむ}、ルール厳{きび}しい？」\n「うん、靴{くつ}を履{は}き替{か}える（　）、って。」',
                options: ['こと', 'べき', 'もの', 'はず'],
                correctIndex: 0,
                explanation: '對話情境。必須換鞋。'
            }
        ]
    },
    'n3_koto_kara': {
        id: 'n3_koto_kara',
        pattern: 'ことから',
        connection: '動詞{どうし}普通{ふつう}形{けい} / い形容詞{けいようし} / な形容詞{けいようし}な + ことから',
        translation: '因為...; 從...的事實',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示原因或由來',
                description: '表示某事物的名稱或評價的由來，或說明判斷的根據。',
                examples: [
                    { japanese: '形{かたち}が星{ほし}に似{に}ていることから「星形{ほしがた}」と呼{よ}ばれている。', chinese: '因為形狀像星星，所以被稱為「星形」。' },
                    { japanese: '彼{かれ}がいないことから、会議{かいぎ}は延期{えんき}された。', chinese: '因為他不在，會議被延期了。' },
                    {
                        japanese: '「この花{はな}、なんで桜{さくら}って言{い}うの？」\n「咲{さ}くという言葉{ことば}に似{に}ていることから来{き}てるらしいよ。」\n「へえ、そうなんだ。」',
                        chinese: '「這朵花為什麼叫櫻花？」\n「聽說是因為和『咲く（開花）』這個詞很像。」\n「哦，原來如此。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「ことから」的用法',
            description: '用於說明由來或根據。',
            points: [
                {
                    rule: '名稱由來：說明命名的原因。',
                    examples: [{ japanese: '赤{あか}いことから「赤{あか}ワイン」と呼{よ}ぶ。', chinese: '因為是紅色的所以叫紅酒。' }]
                },
                {
                    rule: '判斷根據：根據某事實做出判斷。',
                    examples: [{ japanese: '証拠{しょうこ}がないことから無罪{むざい}となった。', chinese: '因為沒有證據所以被判無罪。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_koto_kara_1',
                sentence: '丸{まる}い形{かたち}をしている（　）、この花{はな}は「まり」と呼{よ}ばれている。',
                options: ['から', 'ので', 'ことから', 'ために'],
                correctIndex: 2,
                explanation: '因為是圓形的，這朵花被稱為「毬」。'
            },
            {
                id: 'n3_quiz_koto_kara_2',
                sentence: '彼{かれ}が遅{おく}れた（　）、計画{けいかく}を変更{へんこう}した。',
                options: ['ために', 'から', 'ので', 'ことから'],
                correctIndex: 3,
                explanation: '因為他遲到了，計畫做了變更。'
            },
            {
                id: 'n3_quiz_koto_kara_3',
                sentence: '人気{にんき}がある（　）、この店{みせ}はいつも混{こ}んでいる。',
                options: ['ために', 'から', 'ので', 'ことから'],
                correctIndex: 3,
                explanation: '因為很受歡迎，這家店總是很擁擠。'
            },
            {
                id: 'n3_quiz_koto_kara_4',
                sentence: '「なんでこの町{まち}は「桜{さくら}町{まち}」って言{い}うの？」\n「桜{さくら}がたくさんある（　）だって。」',
                options: ['ことから', 'ために', 'から', 'ので'],
                correctIndex: 0,
                explanation: '對話情境。因為有很多櫻花。'
            },
            {
                id: 'n3_quiz_koto_kara_5',
                sentence: '「この人{ひと}、どうして有名{ゆうめい}なの？」\n「若{わか}くして成功{せいこう}した（　）だよ。」',
                options: ['ので', 'から', 'ことから', 'ために'],
                correctIndex: 2,
                explanation: '對話情境。因為年輕時就成功了。'
            }
        ]
    },
    'n3_koto_ni_natteiru': {
        id: 'n3_koto_ni_natteiru',
        pattern: 'ことになっている',
        connection: '動詞{どうし}辭書{じしょ}形{けい} / 動詞{どうし}ない形{けい} + ことになっている',
        translation: '按照規定...; 預定...; 據說...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示規定或安排',
                description: '表示按照規定、慣例或社會習慣應該做某事，或已經安排好的事情。',
                examples: [
                    { japanese: '会議{かいぎ}は毎週{まいしゅう}月曜日{げつようび}に行{おこな}うことになっている。', chinese: '按照規定每週一開會。' },
                    { japanese: '学生{がくせい}はここに入{はい}らないことになっている。', chinese: '學生按規定不能進入這裡。' },
                    {
                        japanese: '「明日{あした}の予定{よてい}は？」\n「午前中{ごぜんちゅう}にお客様{きゃくさま}が来{く}ることになっているよ。」\n「そうか、準備{じゅんび}しないと。」',
                        chinese: '「明天的預定是？」\n「上午客人會來。」\n「這樣啊，得準備一下。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「ことになっている」與「ことにしている」的比較',
            description: '外部決定與個人決定的對比。',
            points: [
                {
                    rule: 'ことになっている：外部規定、慣例、安排。',
                    examples: [{ japanese: '9時{じ}に始{はじ}まることになっている。', chinese: '按規定9點開始。' }]
                },
                {
                    rule: 'ことにしている：個人決定的習慣。',
                    examples: [{ japanese: '毎日{まいにち}運動{うんどう}することにしている。', chinese: '我決定每天運動。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_koto_ni_natteiru_1',
                sentence: '社員{しゃいん}は8時{じ}半{はん}までに出社{しゅっしゃ}する（　）。',
                options: ['ことができる', 'ことがある', 'ことにしている', 'ことになっている'],
                correctIndex: 3,
                explanation: '員工按規定要在8點半前到公司。'
            },
            {
                id: 'n3_quiz_koto_ni_natteiru_2',
                sentence: 'この建物{たてもの}では喫煙{きつえん}しない（　）。',
                options: ['ことにしている', 'ことがある', 'ことができる', 'ことになっている'],
                correctIndex: 3,
                explanation: '這棟建築物按規定不能抽菸。'
            },
            {
                id: 'n3_quiz_koto_ni_natteiru_3',
                sentence: '来月{らいげつ}から新{あたら}しいシステムを使{つか}う（　）。',
                options: ['ことができる', 'ことにしている', 'ことがある', 'ことになっている'],
                correctIndex: 3,
                explanation: '下個月開始要使用新系統。'
            },
            {
                id: 'n3_quiz_koto_ni_natteiru_4',
                sentence: '「制服{せいふく}、着{き}なくていいの？」\n「いや、毎日{まいにち}着{き}る（　）よ。」',
                options: ['ことにしている', 'ことがある', 'ことができる', 'ことになっている'],
                correctIndex: 3,
                explanation: '對話情境。按規定每天要穿。'
            },
            {
                id: 'n3_quiz_koto_ni_natteiru_5',
                sentence: '「あの部屋{へや}、入{はい}れる？」\n「関係者{かんけいしゃ}以外{いがい}は入{はい}らない（　）。」',
                options: ['ことができる', 'ことがある', 'ことになっている', 'ことにしている'],
                correctIndex: 2,
                explanation: '對話情境。按規定非相關人員不能進入。'
            }
        ]
    },
    'n3_koto_wa_nai': {
        id: 'n3_koto_wa_nai',
        pattern: 'ことはない',
        connection: '動詞{どうし}辭書{じしょ}形{けい} + ことはない',
        translation: '沒必要...; 不用...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示沒有必要',
                description: '表示不需要做某事，用於建議或安慰對方。',
                examples: [
                    { japanese: 'そんなに心配{しんぱい}することはない。', chinese: '不用那麼擔心。' },
                    { japanese: '急{いそ}ぐことはないよ。', chinese: '不用急。' },
                    {
                        japanese: '「どうしよう、失敗{しっぱい}しちゃった。」\n「そんなに落{お}ち込{こ}むことはないよ。次{つぎ}頑張{がんば}ればいいじゃん。」\n「そうだね、ありがとう。」',
                        chinese: '「怎麼辦，失敗了。」\n「不用那麼沮喪。下次努力就好了嘛。」\n「也是，謝謝。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「ことはない」的用法',
            description: '用於否定必要性，常用於安慰。',
            points: [
                {
                    rule: '安慰：告訴對方不需要擔心。',
                    examples: [{ japanese: '泣{な}くことはない。', chinese: '不用哭。' }]
                },
                {
                    rule: '建議：表示沒必要做某事。',
                    examples: [{ japanese: 'わざわざ行{い}くことはない。', chinese: '不必特地去。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_koto_wa_nai_1',
                sentence: 'そんなに怒{おこ}る（　）。',
                options: ['ことになる', 'ことがない', 'ことにする', 'ことはない'],
                correctIndex: 3,
                explanation: '不用那麼生氣。'
            },
            {
                id: 'n3_quiz_koto_wa_nai_2',
                sentence: '今{いま}決{き}める（　）よ。ゆっくり考{かんが}えて。',
                options: ['ことにする', 'ことになる', 'ことはない', 'ことがない'],
                correctIndex: 2,
                explanation: '不用現在決定。慢慢想。'
            },
            {
                id: 'n3_quiz_koto_wa_nai_3',
                sentence: '高{たか}い物{もの}を買{か}う（　）。安{やす}いので十分{じゅうぶん}だ。',
                options: ['ことはない', 'ことがない', 'ことにする', 'ことになる'],
                correctIndex: 0,
                explanation: '不用買貴的。便宜的就夠了。'
            },
            {
                id: 'n3_quiz_koto_wa_nai_4',
                sentence: '「遅{おく}れてすみません。」\n「謝{あやま}る（　）よ。大丈夫{だいじょうぶ}。」',
                options: ['ことにする', 'ことになる', 'ことがない', 'ことはない'],
                correctIndex: 3,
                explanation: '對話情境。不用道歉。'
            },
            {
                id: 'n3_quiz_koto_wa_nai_5',
                sentence: '「一人{ひとり}で全部{ぜんぶ}やらなきゃ。」\n「そんなに頑張{がんば}る（　）。手伝{てつだ}うよ。」',
                options: ['ことはない', 'ことになる', 'ことがない', 'ことにする'],
                correctIndex: 0,
                explanation: '對話情境。不用那麼拼命。'
            }
        ]
    },
    'n3_koto_wa_ga': {
        id: 'n3_koto_wa_ga',
        pattern: 'ことは～が',
        connection: '動詞{どうし}普通{ふつう}形{けい} + ことは + 同{おな}じ動詞{どうし}普通{ふつう}形{けい} + が',
        translation: '雖然...但是...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示讓步',
                description: '承認某件事確實如此，但接著提出相反或補充的意見。',
                examples: [
                    { japanese: '行{い}くことは行{い}くが、長{なが}くはいられない。', chinese: '去是會去，但不能待太久。' },
                    { japanese: '食{た}べることは食{た}べたが、美味{おい}しくなかった。', chinese: '吃是吃了，但不好吃。' },
                    {
                        japanese: '「映画{えいが}見{み}た？」\n「見{み}ることは見{み}たけど、あんまり面白{おもしろ}くなかったな。」\n「そうなんだ。」',
                        chinese: '「看電影了嗎？」\n「看是看了，但不怎麼有趣。」\n「這樣啊。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「ことは～が」的結構',
            description: '重複同一動詞表示讓步。',
            points: [
                {
                    rule: '承認事實：先承認某事確實發生。',
                    examples: [{ japanese: '聞{き}くことは聞{き}いた。', chinese: '聽是聽了。' }]
                },
                {
                    rule: '提出但書：接著說明不滿或限制。',
                    examples: [{ japanese: 'が、よく分{わ}からなかった。', chinese: '但沒怎麼聽懂。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_koto_wa_ga_1',
                sentence: '読{よ}む（　）読{よ}んだが、難{むずか}しかった。',
                options: ['ものは', 'わけは', 'はずは', 'ことは'],
                correctIndex: 3,
                explanation: '讀是讀了，但很難。'
            },
            {
                id: 'n3_quiz_koto_wa_ga_2',
                sentence: '作{つく}る（　）作{つく}ったが、失敗{しっぱい}した。',
                options: ['わけは', 'はずは', 'ものは', 'ことは'],
                correctIndex: 3,
                explanation: '做是做了，但失敗了。'
            },
            {
                id: 'n3_quiz_koto_wa_ga_3',
                sentence: '買{か}う（　）買{か}ったが、使{つか}っていない。',
                options: ['わけは', 'ことは', 'ものは', 'はずは'],
                correctIndex: 1,
                explanation: '買是買了，但沒在用。'
            },
            {
                id: 'n3_quiz_koto_wa_ga_4',
                sentence: '「料理{りょうり}できる？」\n「できる（　）できるけど、得意{とくい}じゃない。」',
                options: ['わけは', 'ものは', 'ことは', 'はずは'],
                correctIndex: 2,
                explanation: '對話情境。會是會，但不擅長。'
            },
            {
                id: 'n3_quiz_koto_wa_ga_5',
                sentence: '「彼{かれ}と話{はな}した？」\n「話{はな}す（　）話{はな}したけど、あまり話{はな}せなかった。」',
                options: ['ことは', 'ものは', 'はずは', 'わけは'],
                correctIndex: 0,
                explanation: '對話情境。說是說了，但沒說太多。'
            }
        ]
    },
    'n3_kurai': {
        id: 'n3_kurai',
        pattern: 'くらい / ぐらい',
        connection: '動詞{どうし}普通{ふつう}形{けい} / 名詞{めいし} + くらい',
        translation: '大概; 大約; ...的程度; 至少...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示程度或大約',
                description: '表示大約的數量或程度，或表示最低限度。',
                examples: [
                    { japanese: '30分{ぷん}ぐらいで着{つ}きます。', chinese: '大約30分鐘會到。' },
                    { japanese: '死{し}にたいくらい恥{は}ずかしかった。', chinese: '羞恥得想死。' },
                    {
                        japanese: '「どのくらい待{ま}った？」\n「1時間{じかん}ぐらいかな。」\n「ごめん、遅{おく}れて。」',
                        chinese: '「等了多久？」\n「大概1小時吧。」\n「抱歉遲到了。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「くらい」的多種用法',
            description: '可表示程度、大約或輕視。',
            points: [
                {
                    rule: '大約數量：表示概略的數字。',
                    examples: [{ japanese: '5人{にん}ぐらい来{き}た。', chinese: '大約來了5個人。' }]
                },
                {
                    rule: '程度：表示達到某種程度。',
                    examples: [{ japanese: '泣{な}くぐらい嬉{うれ}しい。', chinese: '高興得想哭。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_kurai_1',
                sentence: '10分{ぷん}（　）で終{お}わります。',
                options: ['しか', 'だけ', 'ぐらい', 'ほど'],
                correctIndex: 2,
                explanation: '大約10分鐘會結束。'
            },
            {
                id: 'n3_quiz_kurai_2',
                sentence: '倒{たお}れる（　）疲{つか}れた。',
                options: ['くらい', 'しか', 'ほど', 'だけ'],
                correctIndex: 0,
                explanation: '累到快倒下。'
            },
            {
                id: 'n3_quiz_kurai_3',
                sentence: 'このくらいの問題{もんだい}は自分{じぶん}で解{と}けるはずだ。',
                options: ['しか', 'ほど', 'だけ', 'くらい'],
                correctIndex: 3,
                explanation: '這種程度的問題應該自己能解。'
            },
            {
                id: 'n3_quiz_kurai_4',
                sentence: '「何人{なんにん}来{く}る？」\n「20人{にん}（　）だと思{おも}う。」',
                options: ['ほど', 'だけ', 'しか', 'ぐらい'],
                correctIndex: 3,
                explanation: '對話情境。大概20人左右。'
            },
            {
                id: 'n3_quiz_kurai_5',
                sentence: '「その仕事{しごと}、どの（　）かかる？」\n「3日{みっか}はかかるかな。」',
                options: ['だけ', 'くらい', 'しか', 'ほど'],
                correctIndex: 1,
                explanation: '對話情境。那工作要多久？'
            }
        ]
    },
    'n3_kuse_ni': {
        id: 'n3_kuse_ni',
        pattern: 'くせに',
        connection: '動詞{どうし}普通{ふつう}形{けい} / い形容詞{けいようし} / な形容詞{けいようし}な / 名詞{めいし}の + くせに',
        translation: '明明...卻... (責備/不滿)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示不滿或責備',
                description: '用於表達對某人言行不一致的不滿或責備。帶有負面語氣。',
                examples: [
                    { japanese: '知{し}らないくせに、偉{えら}そうに話{はな}す。', chinese: '明明不知道，卻說得很厲害。' },
                    { japanese: '子供{こども}のくせに、生意気{なまいき}だ。', chinese: '明明是小孩子，卻這麼傲慢。' },
                    {
                        japanese: '「彼{かれ}、また遅刻{ちこく}したよ。」\n「いつも偉{えら}そうなくせに、時間{じかん}も守{まも}れないんだね。」\n「本当{ほんとう}だよね。」',
                        chinese: '「他又遲到了。」\n「明明總是擺架子，連時間都遵守不了。」\n「就是說啊。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「くせに」與「のに」的比較',
            description: '兩者都表示轉折，但語氣不同。',
            points: [
                {
                    rule: 'くせに：帶有責備、不滿的強烈負面語氣。',
                    examples: [{ japanese: '分{わ}からないくせに、黙{だま}ってない。', chinese: '明明不懂，還說個不停。' }]
                },
                {
                    rule: 'のに：較中性，表示遺憾或意外。',
                    examples: [{ japanese: '頑張{がんば}ったのに、失敗{しっぱい}した。', chinese: '明明努力了，卻失敗了。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_kuse_ni_1',
                sentence: '金{かね}がない（　）、高{たか}いものを買{か}う。',
                options: ['くせに', 'ても', 'から', 'のに'],
                correctIndex: 0,
                explanation: '明明沒錢，還買貴的東西。'
            },
            {
                id: 'n3_quiz_kuse_ni_2',
                sentence: '自分{じぶん}でやらない（　）、文句{もんく}ばかり言{い}う。',
                options: ['のに', 'くせに', 'から', 'ても'],
                correctIndex: 1,
                explanation: '明明自己不做，卻老是抱怨。'
            },
            {
                id: 'n3_quiz_kuse_ni_3',
                sentence: '下手{へた}な（　）、自信{じしん}がある。',
                options: ['くせに', 'のに', 'ても', 'から'],
                correctIndex: 0,
                explanation: '明明很差，卻很有自信。'
            },
            {
                id: 'n3_quiz_kuse_ni_4',
                sentence: '「彼{かれ}、すぐ疲{つか}れたって言{い}うよね。」\n「若{わか}い（　）、体力{たいりょく}ないね。」',
                options: ['から', 'ても', 'くせに', 'のに'],
                correctIndex: 2,
                explanation: '對話情境。明明年輕卻沒體力。'
            },
            {
                id: 'n3_quiz_kuse_ni_5',
                sentence: '「あの人{ひと}、いつも威張{いば}ってるよね。」\n「何{なに}も知{し}らない（　）ね。」',
                options: ['から', 'ても', 'くせに', 'のに'],
                correctIndex: 2,
                explanation: '對話情境。明明什麼都不知道。'
            }
        ]
    },
    'n3_maru_de': {
        id: 'n3_maru_de',
        pattern: 'まるで',
        connection: 'まるで + 名詞{めいし}のよう / 動詞{どうし}普通{ふつう}形{けい} + かのよう',
        translation: '簡直像...; 完全...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示比喻',
                description: '用於比喻，表示某事物就像是另一事物一樣。常與「よう」「みたい」搭配使用。',
                examples: [
                    { japanese: 'まるで夢{ゆめ}のようだ。', chinese: '簡直像夢一樣。' },
                    { japanese: '彼{かれ}はまるで別人{べつじん}のように変{か}わった。', chinese: '他完全變得像另一個人。' },
                    {
                        japanese: '「この景色{けしき}、すごいね。」\n「うん、まるで絵{え}みたいだね。」\n「写真{しゃしん}撮{と}ろう！」',
                        chinese: '「這景色好美啊。」\n「嗯，簡直像畫一樣。」\n「拍張照吧！」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「まるで」的用法',
            description: '強調比喻的相似程度。',
            points: [
                {
                    rule: 'まるで～のようだ：就像...一樣。',
                    examples: [{ japanese: 'まるで天使{てんし}のようだ。', chinese: '簡直像天使一樣。' }]
                },
                {
                    rule: 'まるで～みたいだ：口語，較輕鬆。',
                    examples: [{ japanese: 'まるで映画{えいが}みたいだ。', chinese: '簡直像電影一樣。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_maru_de_1',
                sentence: '（　）春{はる}が来{き}たようだ。',
                options: ['きっと', 'まるで', 'もしかして', 'たぶん'],
                correctIndex: 1,
                explanation: '簡直像春天來了一樣。'
            },
            {
                id: 'n3_quiz_maru_de_2',
                sentence: '彼女{かのじょ}は（　）人形{にんぎょう}のように美{うつく}しい。',
                options: ['たぶん', 'もしかして', 'きっと', 'まるで'],
                correctIndex: 3,
                explanation: '她像人偶一樣美麗。'
            },
            {
                id: 'n3_quiz_maru_de_3',
                sentence: '（　）嘘{うそ}のような本当{ほんとう}の話{はなし}だ。',
                options: ['たぶん', 'もしかして', 'きっと', 'まるで'],
                correctIndex: 3,
                explanation: '這是像假的一樣的真實故事。'
            },
            {
                id: 'n3_quiz_maru_de_4',
                sentence: '「この肉{にく}、柔{やわ}らかいね。」\n「（　）バターみたいだね。」',
                options: ['もしかして', 'きっと', 'まるで', 'たぶん'],
                correctIndex: 2,
                explanation: '對話情境。簡直像奶油一樣。'
            },
            {
                id: 'n3_quiz_maru_de_5',
                sentence: '「彼{かれ}、変{か}わったね。」\n「うん、（　）別人{べつじん}みたいだ。」',
                options: ['もしかして', 'きっと', 'まるで', 'たぶん'],
                correctIndex: 2,
                explanation: '對話情境。簡直像換了一個人。'
            }
        ]
    },
    'n3_masaka': {
        id: 'n3_masaka',
        pattern: 'まさか',
        connection: 'まさか + 句{く}子{し} / まさか～とは思{おも}わなかった',
        translation: '該不會...; 難道...; 絕不可能',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示意外或否定',
                description: '用於表達對意外事情的驚訝，或強烈否定某種可能性。',
                examples: [
                    { japanese: 'まさか彼{かれ}が犯人{はんにん}だとは思{おも}わなかった。', chinese: '沒想到他竟然是兇手。' },
                    { japanese: 'まさか！そんなはずはない。', chinese: '不會吧！不可能的。' },
                    {
                        japanese: '「田中{たなか}さん、辞{や}めたって。」\n「まさか！先週{せんしゅう}会{あ}ったばかりなのに。」\n「本当{ほんとう}だよ。」',
                        chinese: '「聽說田中辭職了。」\n「不會吧！上週才見過面的。」\n「是真的。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「まさか」的用法',
            description: '表達驚訝或強調不可能。',
            points: [
                {
                    rule: '驚訝：對意外事情的反應。',
                    examples: [{ japanese: 'まさか雨{あめ}が降{ふ}るとは。', chinese: '沒想到會下雨。' }]
                },
                {
                    rule: '否定：強調某事不可能。',
                    examples: [{ japanese: 'まさかそんなことはしないだろう。', chinese: '他不會做那種事吧。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_masaka_1',
                sentence: '（　）彼{かれ}が嘘{うそ}をつくとは思{おも}わなかった。',
                options: ['きっと', 'まさか', 'もしかして', 'たぶん'],
                correctIndex: 1,
                explanation: '沒想到他竟然會說謊。'
            },
            {
                id: 'n3_quiz_masaka_2',
                sentence: '（　）！信{しん}じられない。',
                options: ['まさか', 'もしかして', 'きっと', 'たぶん'],
                correctIndex: 0,
                explanation: '不會吧！難以置信。'
            },
            {
                id: 'n3_quiz_masaka_3',
                sentence: '（　）試験{しけん}に落{お}ちるとは。',
                options: ['きっと', 'たぶん', 'まさか', 'もしかして'],
                correctIndex: 2,
                explanation: '沒想到考試竟然不及格。'
            },
            {
                id: 'n3_quiz_masaka_4',
                sentence: '「宝{たから}くじ当{あ}たったって！」\n「（　）！嘘{うそ}でしょ？」',
                options: ['きっと', 'まさか', 'たぶん', 'もしかして'],
                correctIndex: 1,
                explanation: '對話情境。不會吧！騙人的吧？'
            },
            {
                id: 'n3_quiz_masaka_5',
                sentence: '「明日{あした}、試験{しけん}だって。」\n「（　）、知{し}らなかった！」',
                options: ['きっと', 'たぶん', 'もしかして', 'まさか'],
                correctIndex: 3,
                explanation: '對話情境。不會吧，我不知道！'
            }
        ]
    },
    'n3_metta_ni_nai': {
        id: 'n3_metta_ni_nai',
        pattern: 'めったに～ない',
        connection: 'めったに + 動詞{どうし}否定{ひてい}形{けい}',
        translation: '很少...; 不常...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示頻率極低',
                description: '表示某事很少發生，幾乎不會發生。必須與否定形搭配。',
                examples: [
                    { japanese: '彼{かれ}はめったに怒{おこ}らない。', chinese: '他很少生氣。' },
                    { japanese: 'こんなチャンスはめったにない。', chinese: '這種機會很少有。' },
                    {
                        japanese: '「お酒{さけ}、飲{の}む？」\n「めったに飲{の}まないなあ。今日{きょう}は特別{とくべつ}だから。」\n「じゃ、乾杯{かんぱい}！」',
                        chinese: '「喝酒嗎？」\n「很少喝呢。今天是特別日子。」\n「那乾杯！」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「めったに」的用法',
            description: '必須與否定形搭配，表示極少。',
            points: [
                {
                    rule: 'めったに + 動詞ない：很少做某事。',
                    examples: [{ japanese: 'めったに遅刻{ちこく}しない。', chinese: '很少遲到。' }]
                },
                {
                    rule: 'めったにない + 名詞：難得的、罕見的。',
                    examples: [{ japanese: 'めったにないチャンス。', chinese: '難得的機會。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_metta_ni_nai_1',
                sentence: '彼{かれ}は（　）泣{な}かない人{ひと}だ。',
                options: ['たまに', 'よく', 'めったに', 'いつも'],
                correctIndex: 2,
                explanation: '他是很少哭的人。'
            },
            {
                id: 'n3_quiz_metta_ni_nai_2',
                sentence: 'こんな美{うつく}しい景色{けしき}は（　）見{み}られない。',
                options: ['よく', 'たまに', 'めったに', 'いつも'],
                correctIndex: 2,
                explanation: '這麼美的景色很少能看到。'
            },
            {
                id: 'n3_quiz_metta_ni_nai_3',
                sentence: '私{わたし}は（　）外食{がいしょく}しない。',
                options: ['よく', 'めったに', 'たまに', 'いつも'],
                correctIndex: 1,
                explanation: '我很少外食。'
            },
            {
                id: 'n3_quiz_metta_ni_nai_4',
                sentence: '「映画館{えいがかん}行{い}く？」\n「（　）行{い}かないなあ。」',
                options: ['よく', 'めったに', 'たまに', 'いつも'],
                correctIndex: 1,
                explanation: '對話情境。很少去呢。'
            },
            {
                id: 'n3_quiz_metta_ni_nai_5',
                sentence: '「この店{みせ}、高{たか}いでしょ？」\n「うん、（　）来{こ}ないよ。」',
                options: ['たまに', 'いつも', 'よく', 'めったに'],
                correctIndex: 3,
                explanation: '對話情境。嗯，很少來。'
            }
        ]
    },
    'n3_moshika_shitara': {
        id: 'n3_moshika_shitara',
        pattern: 'もしかしたら',
        connection: 'もしかしたら + 句{く}子{し} + かもしれない',
        translation: '說不定; 也許',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示推測',
                description: '表示對某事的不確定推測，常與「かもしれない」搭配使用。',
                examples: [
                    { japanese: 'もしかしたら雨{あめ}が降{ふ}るかもしれない。', chinese: '說不定會下雨。' },
                    { japanese: 'もしかしたら彼{かれ}は来{こ}ないかも。', chinese: '也許他不會來。' },
                    {
                        japanese: '「電話{でんわ}、繋{つな}がらないね。」\n「もしかしたら、もう寝{ね}てるのかも。」\n「そうかもね。」',
                        chinese: '「電話打不通呢。」\n「說不定已經睡了。」\n「可能吧。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「もしかしたら」與「もしかして」的比較',
            description: '兩者意思相近，語氣略有不同。',
            points: [
                {
                    rule: 'もしかしたら：較正式，常用於陳述推測。',
                    examples: [{ japanese: 'もしかしたら、間違{まちが}いかもしれない。', chinese: '說不定是搞錯了。' }]
                },
                {
                    rule: 'もしかして：較口語，常用於詢問。',
                    examples: [{ japanese: 'もしかして、田中{たなか}さん？', chinese: '難道是田中嗎？' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_moshika_shitara_1',
                sentence: '（　）、明日{あした}は晴{は}れるかもしれない。',
                options: ['もしかしたら', 'きっと', 'たぶん', 'ぜひ'],
                correctIndex: 0,
                explanation: '說不定明天會放晴。'
            },
            {
                id: 'n3_quiz_moshika_shitara_2',
                sentence: '（　）、彼女{かのじょ}は怒{おこ}っているかもしれない。',
                options: ['たぶん', 'きっと', 'ぜひ', 'もしかしたら'],
                correctIndex: 3,
                explanation: '說不定她在生氣。'
            },
            {
                id: 'n3_quiz_moshika_shitara_3',
                sentence: '（　）、間{ま}に合{あ}わないかもしれない。',
                options: ['もしかしたら', 'ぜひ', 'たぶん', 'きっと'],
                correctIndex: 0,
                explanation: '說不定來不及。'
            },
            {
                id: 'n3_quiz_moshika_shitara_4',
                sentence: '「あの人{ひと}、見覚{みおぼ}えある。」\n「（　）、同{おな}じ学校{がっこう}だったかも。」',
                options: ['きっと', 'ぜひ', 'もしかしたら', 'たぶん'],
                correctIndex: 2,
                explanation: '對話情境。說不定是同校的。'
            },
            {
                id: 'n3_quiz_moshika_shitara_5',
                sentence: '「彼{かれ}、遅{おく}れてるね。」\n「（　）、道{みち}に迷{まよ}ってるのかも。」',
                options: ['きっと', 'ぜひ', 'もしかしたら', 'たぶん'],
                correctIndex: 2,
                explanation: '對話情境。說不定迷路了。'
            }
        ]
    },
    'n3_moshimo_tara': {
        id: 'n3_moshimo_tara',
        pattern: 'もしも〜たら',
        connection: 'もしも + 動詞{どうし}た形{けい} + ら',
        translation: '萬一...的話',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示假設',
                description: '強調假設的情況，比「もし」語氣更強，表示可能性較低的假設。',
                examples: [
                    { japanese: 'もしも宝{たから}くじが当{あ}たったら、家{いえ}を買{か}う。', chinese: '萬一中了彩券的話，就買房子。' },
                    { japanese: 'もしも明日{あした}地球{ちきゅう}が終{お}わるとしたら、何{なに}をする？', chinese: '假如明天地球要毀滅的話，你會做什麼？' },
                    {
                        japanese: '「もしも１億円{おくえん}あったら、何{なに}する？」\n「世界{せかい}旅行{りょこう}するかな。」\n「いいね！」',
                        chinese: '「如果有1億日圓的話，你會做什麼？」\n「應該會去環遊世界吧。」\n「好棒！」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「もしも」與「もし」的比較',
            description: '「もしも」比「もし」語氣更強。',
            points: [
                {
                    rule: 'もし：一般假設，可能性較高。',
                    examples: [{ japanese: 'もし暇{ひま}なら、来{き}てください。', chinese: '如果有空的話，請來。' }]
                },
                {
                    rule: 'もしも：強調假設，可能性較低或想像。',
                    examples: [{ japanese: 'もしも空{そら}を飛{と}べたら。', chinese: '假如能在天上飛的話。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_moshimo_tara_1',
                sentence: '（　）タイムマシンがあったら、過去{かこ}に戻{もど}りたい。',
                options: ['いくら', 'もし', 'もしも', 'たとえ'],
                correctIndex: 2,
                explanation: '假如有時光機的話，想回到過去。'
            },
            {
                id: 'n3_quiz_moshimo_tara_2',
                sentence: '（　）世界中{せかいじゅう}どこでも行{い}けたら、どこに行{い}く？',
                options: ['もし', 'たとえ', 'もしも', 'いくら'],
                correctIndex: 2,
                explanation: '假如能去世界任何地方的話，你會去哪裡？'
            },
            {
                id: 'n3_quiz_moshimo_tara_3',
                sentence: '（　）やり直{なお}せたら、もっと勉強{べんきょう}するのに。',
                options: ['もし', 'もしも', 'たとえ', 'いくら'],
                correctIndex: 1,
                explanation: '假如能重來的話，會更用功讀書。'
            },
            {
                id: 'n3_quiz_moshimo_tara_4',
                sentence: '「（　）魔法{まほう}が使{つか}えたら？」\n「透明人間{とうめいにんげん}になりたい！」',
                options: ['いくら', 'たとえ', 'もしも', 'もし'],
                correctIndex: 2,
                explanation: '對話情境。假如能使用魔法的話？'
            },
            {
                id: 'n3_quiz_moshimo_tara_5',
                sentence: '「（　）生{う}まれ変{か}わったら、何{なに}になりたい？」\n「鳥{とり}になって空{そら}を飛{と}びたい。」',
                options: ['もしも', 'いくら', 'もし', 'たとえ'],
                correctIndex: 0,
                explanation: '對話情境。假如能重生的話，想成為什麼？'
            }
        ]
    },
    'n3_mo_ba_mo': {
        id: 'n3_mo_ba_mo',
        pattern: 'も～ば～も',
        connection: '名詞{めいし}1 + も + 動詞{どうし}ば形{けい} + 名詞{めいし}2 + も',
        translation: '既...又...; ...也好...也好',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示並列',
                description: '列舉兩個或多個項目，表示都具有某種特徵或都會發生。',
                examples: [
                    { japanese: '彼{かれ}は歌{うた}も上手{じょうず}ければ、ダンスも上手{じょうず}だ。', chinese: '他唱歌好，跳舞也好。' },
                    { japanese: '日本語{にほんご}も話{はな}せれば、英語{えいご}も話{はな}せる。', chinese: '既會說日語，也會說英語。' },
                    {
                        japanese: '「彼女{かのじょ}、すごいね。」\n「うん、頭{あたま}もよければ、スポーツもできる。」\n「羨{うらや}ましい。」',
                        chinese: '「她好厲害啊。」\n「嗯，頭腦好，運動也行。」\n「好羨慕。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「も～ば～も」的結構',
            description: '並列兩個要素，強調兩者皆是。',
            points: [
                {
                    rule: '正面並列：列舉正面特質。',
                    examples: [{ japanese: '優{やさ}しくもあれば、賢{かしこ}くもある。', chinese: '既溫柔又聰明。' }]
                },
                {
                    rule: '負面並列：列舉負面特質。',
                    examples: [{ japanese: '遅{おそ}くもあれば、高{たか}くもある。', chinese: '既慢又貴。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_mo_ba_mo_1',
                sentence: 'この店{みせ}は安{やす}く（　）あれば、美味{おい}しくもある。',
                options: ['は', 'を', 'も', 'が'],
                correctIndex: 2,
                explanation: '這家店既便宜又好吃。'
            },
            {
                id: 'n3_quiz_mo_ba_mo_2',
                sentence: '彼{かれ}は勉強{べんきょう}（　）できれば、スポーツもできる。',
                options: ['を', 'は', 'が', 'も'],
                correctIndex: 3,
                explanation: '他讀書也行，運動也行。'
            },
            {
                id: 'n3_quiz_mo_ba_mo_3',
                sentence: 'ピアノ（　）弾{ひ}ければ、ギターも弾{ひ}ける。',
                options: ['が', 'を', 'は', 'も'],
                correctIndex: 3,
                explanation: '鋼琴能彈，吉他也能彈。'
            },
            {
                id: 'n3_quiz_mo_ba_mo_4',
                sentence: '「あの人{ひと}、何{なん}でもできるよね。」\n「うん、料理{りょうり}（　）上手{じょうず}ければ、掃除{そうじ}も上手{じょうず}だ。」',
                options: ['は', 'を', 'も', 'が'],
                correctIndex: 2,
                explanation: '對話情境。做菜好，打掃也好。'
            },
            {
                id: 'n3_quiz_mo_ba_mo_5',
                sentence: '「彼{かれ}って才能{さいのう}あるよね。」\n「絵{え}（　）描{か}ければ、音楽{おんがく}もできるんだって。」',
                options: ['も', 'が', 'は', 'を'],
                correctIndex: 0,
                explanation: '對話情境。會畫畫，音樂也行。'
            }
        ]
    },
    'n3_muke': {
        id: 'n3_muke',
        pattern: '向{む}け',
        connection: '名詞{めいし} + 向{む}け',
        translation: '面向...; 為...設計的',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示目標對象',
                description: '表示某產品或服務是專門為某類對象而設計或準備的。',
                examples: [
                    { japanese: 'これは子供{こども}向{む}けの本{ほん}です。', chinese: '這是面向兒童的書。' },
                    { japanese: '初心者{しょしんしゃ}向{む}けのコースがあります。', chinese: '有面向初學者的課程。' },
                    {
                        japanese: '「このアプリ、使{つか}いやすいね。」\n「高齢者{こうれいしゃ}向{む}けに作{つく}られたらしいよ。」\n「なるほど。」',
                        chinese: '「這個APP好用耶。」\n「聽說是專為老年人設計的。」\n「原來如此。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「向け」的用法',
            description: '接在名詞後表示產品或服務的目標對象。',
            points: [
                {
                    rule: '常見搭配：子供向け、大人向け、初心者向けなど。',
                    examples: [{ japanese: '大人{おとな}向{む}けの映画{えいが}。', chinese: '面向成人的電影。' }]
                },
                {
                    rule: '可作定語修飾名詞。',
                    examples: [{ japanese: '留学生{りゅうがくせい}向{む}けの説明会{せつめいかい}。', chinese: '面向留學生的說明會。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_muke_1',
                sentence: 'これは外国人{がいこくじん}（　）の日本語{にほんご}教材{きょうざい}です。',
                options: ['向き', 'むかい', 'むき', '向け'],
                correctIndex: 3,
                explanation: '這是面向外國人的日語教材。'
            },
            {
                id: 'n3_quiz_muke_2',
                sentence: '女性{じょせい}（　）の雑誌{ざっし}がたくさんあります。',
                options: ['ため', '向き', 'らしい', '向け'],
                correctIndex: 3,
                explanation: '有很多面向女性的雜誌。'
            },
            {
                id: 'n3_quiz_muke_3',
                sentence: 'ビジネスマン（　）のセミナーに参加{さんか}しました。',
                options: ['向け', '向き', 'むかい', 'あて'],
                correctIndex: 0,
                explanation: '參加了面向商務人士的研討會。'
            },
            {
                id: 'n3_quiz_muke_4',
                sentence: '「この番組{ばんぐみ}、面白{おもしろ}いね。」\n「うん、若者{わかもの}（　）に作{つく}られたんだって。」',
                options: ['よう', '向き', '向け', 'ため'],
                correctIndex: 2,
                explanation: '對話情境。聽說是為年輕人設計的。'
            },
            {
                id: 'n3_quiz_muke_5',
                sentence: '「このゲーム難{むずか}しいね。」\n「そうだね、上級者{じょうきゅうしゃ}（　）だから。」',
                options: ['向け', '向き', 'むかい', 'らしい'],
                correctIndex: 0,
                explanation: '對話情境。因為是面向高級玩家的。'
            }
        ]
    },
    'n3_muke_1': {
        id: 'n3_muke_1',
        pattern: '向{む}け',
        connection: '名詞{めいし} + 向{む}け',
        translation: '面向...; 為...設計的',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示目標對象',
                description: '表示某事物是專門為特定對象設計或準備的。',
                examples: [
                    { japanese: 'このサイトはビジネスマン向{む}けです。', chinese: '這個網站是面向商務人士的。' },
                    { japanese: '家族{かぞく}向{む}けのレストランを探{さが}しています。', chinese: '正在找適合家庭的餐廳。' },
                    {
                        japanese: '「このホテル、サービスがいいね。」\n「外国人{がいこくじん}観光客{かんこうきゃく}向{む}けだからね。」\n「そうなんだ。」',
                        chinese: '「這飯店服務真好。」\n「因為是面向外國遊客的嘛。」\n「原來如此。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「向け」的應用場景',
            description: '常用於描述商品、服務、活動的目標對象。',
            points: [
                {
                    rule: '用於市場行銷：表示產品的目標客群。',
                    examples: [{ japanese: '若者{わかもの}向{む}けの商品{しょうひん}。', chinese: '面向年輕人的商品。' }]
                },
                {
                    rule: '用於教育：表示課程或教材的對象。',
                    examples: [{ japanese: '中学生{ちゅうがくせい}向{む}けの参考書{さんこうしょ}。', chinese: '面向國中生的參考書。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_muke_1_1',
                sentence: 'このアニメは大人{おとな}（　）の内容{ないよう}です。',
                options: ['向き', '向け', 'よう', 'ため'],
                correctIndex: 1,
                explanation: '這部動畫的內容是面向成人的。'
            },
            {
                id: 'n3_quiz_muke_1_2',
                sentence: '海外{かいがい}市場{しじょう}（　）の製品{せいひん}を開発{かいはつ}しました。',
                options: ['向け', '向き', 'あて', 'むかい'],
                correctIndex: 0,
                explanation: '開發了面向海外市場的產品。'
            },
            {
                id: 'n3_quiz_muke_1_3',
                sentence: '観光客{かんこうきゃく}（　）のパンフレットを作{つく}りました。',
                options: ['向き', 'らしい', 'ため', '向け'],
                correctIndex: 3,
                explanation: '製作了面向遊客的宣傳冊。'
            },
            {
                id: 'n3_quiz_muke_1_4',
                sentence: '「このコース、簡単{かんたん}だね。」\n「初心者{しょしんしゃ}（　）だからね。」',
                options: ['向き', 'ため', '向け', 'みたい'],
                correctIndex: 2,
                explanation: '對話情境。因為是面向初學者的。'
            },
            {
                id: 'n3_quiz_muke_1_5',
                sentence: '「この化粧品{けしょうひん}、評判{ひょうばん}いいね。」\n「敏感肌{びんかんはだ}（　）に開発{かいはつ}されたんだって。」',
                options: ['ため', 'よう', '向け', '向き'],
                correctIndex: 2,
                explanation: '對話情境。聽說是專為敏感肌開發的。'
            }
        ]
    },
    'n3_muki': {
        id: 'n3_muki',
        pattern: '向{む}き',
        connection: '名詞{めいし} + 向{む}き',
        translation: '適合...; 朝向...; 適合...的人',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示適合性',
                description: '表示某事物適合某類人或某種用途。',
                examples: [
                    { japanese: 'このコースは初心者{しょしんしゃ}向{む}きです。', chinese: '這個課程適合初學者。' },
                    { japanese: '南{みなみ}向{む}きの部屋{へや}は日当{ひあ}たりがいい。', chinese: '朝南的房間日照好。' },
                    {
                        japanese: '「この仕事{しごと}、難{むずか}しそうだね。」\n「うん、経験者{けいけんしゃ}向{む}きだと思{おも}う。」\n「そうだね。」',
                        chinese: '「這工作看起來很難。」\n「嗯，我覺得適合有經驗的人。」\n「對啊。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「向き」vs「向け」的區別',
            description: '兩者都表示目標對象，但語感略有不同。',
            points: [
                {
                    rule: '向き：強調「適合」性質，較主觀。',
                    examples: [{ japanese: 'この本{ほん}は子供{こども}向{む}きだ。', chinese: '這本書適合小孩。' }]
                },
                {
                    rule: '向け：強調「為...而製作」，較客觀。',
                    examples: [{ japanese: 'この本{ほん}は子供{こども}向{む}けだ。', chinese: '這本書是為小孩設計的。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_muki_1',
                sentence: 'この仕事{しごと}は体力{たいりょく}がある人{ひと}（　）です。',
                options: ['らしい', '向き', '向け', 'ため'],
                correctIndex: 1,
                explanation: '這份工作適合有體力的人。'
            },
            {
                id: 'n3_quiz_muki_2',
                sentence: '東{ひがし}（　）の部屋{へや}は朝日{あさひ}が入{はい}ります。',
                options: ['向き', '向け', 'あて', 'むかい'],
                correctIndex: 0,
                explanation: '朝東的房間有朝陽照入。'
            },
            {
                id: 'n3_quiz_muki_3',
                sentence: 'この料理{りょうり}は辛{から}いものが好{す}きな人{ひと}（　）です。',
                options: ['ため', 'よう', '向け', '向き'],
                correctIndex: 3,
                explanation: '這道菜適合喜歡辣的人。'
            },
            {
                id: 'n3_quiz_muki_4',
                sentence: '「このスポーツ、始{はじ}めたいんだけど。」\n「運動神経{うんどうしんけい}がいい人{ひと}（　）かな。」',
                options: ['向け', 'ため', 'みたい', '向き'],
                correctIndex: 3,
                explanation: '對話情境。可能適合運動神經好的人。'
            },
            {
                id: 'n3_quiz_muki_5',
                sentence: '「この映画{えいが}、どんな人{ひと}が見{み}るの？」\n「アクション好{ず}き（　）だね。」',
                options: ['向け', '向き', 'らしい', 'ため'],
                correctIndex: 1,
                explanation: '對話情境。適合喜歡動作片的人。'
            }
        ]
    },
    'n3_muki_1': {
        id: 'n3_muki_1',
        pattern: '向{む}き',
        connection: '名詞{めいし} + 向{む}き',
        translation: '適合...; 朝向...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示方向或適合性',
                description: '可以表示物理方向，也可以表示某事物適合某類人。',
                examples: [
                    { japanese: '北{きた}向{む}きの窓{まど}は涼{すず}しい。', chinese: '朝北的窗戶很涼爽。' },
                    { japanese: 'この問題{もんだい}は上級者{じょうきゅうしゃ}向{む}きです。', chinese: '這個問題適合高級學習者。' },
                    {
                        japanese: '「この家{いえ}、日当{ひあ}たりいい？」\n「南{みなみ}向{む}きだから、とてもいいよ。」\n「いいね。」',
                        chinese: '「這房子日照好嗎？」\n「因為朝南，所以非常好。」\n「真好。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「向き」的兩種用法',
            description: '可表示物理方向或抽象的適合性。',
            points: [
                {
                    rule: '物理方向：東向き、西向き、南向き、北向き。',
                    examples: [{ japanese: '西{にし}向{む}きの部屋{へや}は夕日{ゆうひ}が見{み}える。', chinese: '朝西的房間能看到夕陽。' }]
                },
                {
                    rule: '適合性：人や用途に対する適合を表す。',
                    examples: [{ japanese: '若者{わかもの}向{む}きのデザイン。', chinese: '適合年輕人的設計。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_muki_1_1',
                sentence: 'この服{ふく}は若{わか}い人{ひと}（　）のデザインです。',
                options: ['ため', '向け', 'らしい', '向き'],
                correctIndex: 3,
                explanation: '這件衣服是適合年輕人的設計。'
            },
            {
                id: 'n3_quiz_muki_1_2',
                sentence: '西{にし}（　）のマンションを探{さが}しています。',
                options: ['あて', '向け', '向き', 'むかい'],
                correctIndex: 2,
                explanation: '正在找朝西的公寓。'
            },
            {
                id: 'n3_quiz_muki_1_3',
                sentence: 'このコースは真面目{まじめ}な人{ひと}（　）です。',
                options: ['ため', '向き', 'よう', '向け'],
                correctIndex: 1,
                explanation: '這個課程適合認真的人。'
            },
            {
                id: 'n3_quiz_muki_1_4',
                sentence: '「どんな部屋{へや}がいい？」\n「できれば南{みなみ}（　）がいいな。」',
                options: ['ため', '向け', '向き', 'みたい'],
                correctIndex: 2,
                explanation: '對話情境。可以的話想要朝南的。'
            },
            {
                id: 'n3_quiz_muki_1_5',
                sentence: '「この靴{くつ}、履{は}きやすい？」\n「うん、長時間{ちょうじかん}歩{ある}く人{ひと}（　）だね。」',
                options: ['向き', 'らしい', '向け', 'ため'],
                correctIndex: 0,
                explanation: '對話情境。適合長時間走路的人。'
            }
        ]
    },
    'n3_mushiro': {
        id: 'n3_mushiro',
        pattern: 'むしろ',
        connection: 'むしろ + 文{ぶん}',
        translation: '寧可...; 倒不如...; 反倒...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示更傾向於另一選擇',
                description: '在比較兩個選項時，表示更傾向於後者而非前者。',
                examples: [
                    { japanese: 'バスより、むしろ歩{ある}いた方{ほう}が早{はや}い。', chinese: '與其搭公車，不如走路還比較快。' },
                    { japanese: '彼{かれ}は怒{おこ}っているというより、むしろ悲{かな}しんでいる。', chinese: '與其說他在生氣，不如說他在悲傷。' },
                    {
                        japanese: '「タクシーで行{い}く？」\n「むしろ電車{でんしゃ}の方{ほう}が便利{べんり}だよ。」\n「そうだね。」',
                        chinese: '「搭計程車去嗎？」\n「不如搭電車還比較方便。」\n「也是。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「むしろ」的用法',
            description: '用於表達更傾向於某一選項，常與「より」搭配使用。',
            points: [
                {
                    rule: '與「より」搭配：AよりむしろB = 與其A不如B。',
                    examples: [{ japanese: '買{か}うよりむしろ借{か}りた方{ほう}がいい。', chinese: '與其買不如借比較好。' }]
                },
                {
                    rule: '修正前述說法：というよりむしろ。',
                    examples: [{ japanese: '暑{あつ}いというより、むしろ蒸{む}し暑{あつ}い。', chinese: '與其說熱，不如說是悶熱。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_mushiro_1',
                sentence: '彼{かれ}は天才{てんさい}というより、（　）努力家{どりょくか}だ。',
                options: ['まるで', 'むしろ', 'まさか', 'もしも'],
                correctIndex: 1,
                explanation: '與其說他是天才，不如說他是努力家。'
            },
            {
                id: 'n3_quiz_mushiro_2',
                sentence: '休{やす}むより、（　）仕事{しごと}をしていた方{ほう}が楽{らく}だ。',
                options: ['まるで', 'むしろ', 'もしも', 'まさか'],
                correctIndex: 1,
                explanation: '與其休息，不如工作還比較輕鬆。'
            },
            {
                id: 'n3_quiz_mushiro_3',
                sentence: '説明{せつめい}を聞{き}くより、（　）自分{じぶん}でやった方{ほう}がいい。',
                options: ['むしろ', 'まさか', 'まるで', 'もしかしたら'],
                correctIndex: 0,
                explanation: '與其聽說明，不如自己做比較好。'
            },
            {
                id: 'n3_quiz_mushiro_4',
                sentence: '「電話{でんわ}する？」\n「（　）会{あ}って話{はな}した方{ほう}がいいよ。」',
                options: ['まるで', 'むしろ', 'まさか', 'もしも'],
                correctIndex: 1,
                explanation: '對話情境。不如見面談比較好。'
            },
            {
                id: 'n3_quiz_mushiro_5',
                sentence: '「この仕事{しごと}、大変{たいへん}？」\n「大変{たいへん}というより、（　）楽{たの}しいよ。」',
                options: ['まさか', 'まるで', 'むしろ', 'もしも'],
                correctIndex: 2,
                explanation: '對話情境。與其說辛苦，不如說很開心。'
            }
        ]
    },
    'n3_nagara_mo': {
        id: 'n3_nagara_mo',
        pattern: 'ながらも',
        connection: '動詞{どうし}ます形{けい}（去{きょ}ます）/ い形容詞{けいようし} / な形容詞{けいようし}語幹{ごかん} / 名詞{めいし} + ながらも',
        translation: '雖然...但是...; 儘管...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示轉折',
                description: '表示雖然有前項的情況，但後項的結果卻與預期相反。',
                examples: [
                    { japanese: '狭{せま}いながらも、快適{かいてき}な部屋{へや}です。', chinese: '雖然狹小，但是很舒適的房間。' },
                    { japanese: '知{し}りながらも、黙{だま}っていた。', chinese: '雖然知道，但保持沉默。' },
                    {
                        japanese: '「この店{みせ}、古{ふる}いね。」\n「古{ふる}いながらも、味{あじ}は最高{さいこう}だよ。」\n「そうなんだ。」',
                        chinese: '「這家店好舊啊。」\n「雖然舊，但味道是一流的。」\n「是嗎。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「ながらも」的用法',
            description: '表示逆接關係，強調轉折。',
            points: [
                {
                    rule: '與「ながら」的區別：ながらも強調轉折，ながら表示同時進行。',
                    examples: [{ japanese: '貧{まず}しいながらも、幸{しあわ}せだった。', chinese: '雖然貧窮，但很幸福。' }]
                },
                {
                    rule: '接續形容詞時語氣較書面。',
                    examples: [{ japanese: '残念{ざんねん}ながらも、諦{あきら}めません。', chinese: '雖然遺憾，但不會放棄。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_nagara_mo_1',
                sentence: '小{ちい}さい（　）、パワフルなエンジンです。',
                options: ['ながらも', 'けれども', 'ながら', 'のに'],
                correctIndex: 0,
                explanation: '雖然小，但是很有力的引擎。'
            },
            {
                id: 'n3_quiz_nagara_mo_2',
                sentence: '分{わ}かっている（　）、やめられない。',
                options: ['ながら', 'ながらも', 'のに', 'けれども'],
                correctIndex: 1,
                explanation: '雖然明白，但戒不掉。'
            },
            {
                id: 'n3_quiz_nagara_mo_3',
                sentence: '不安{ふあん}（　）、挑戦{ちょうせん}することにした。',
                options: ['ながら', 'ながらも', 'けれども', 'のに'],
                correctIndex: 1,
                explanation: '雖然不安，但決定挑戰。'
            },
            {
                id: 'n3_quiz_nagara_mo_4',
                sentence: '「彼女{かのじょ}、若{わか}いね。」\n「若{わか}い（　）、しっかりしてるよ。」',
                options: ['けれども', 'のに', 'ながら', 'ながらも'],
                correctIndex: 3,
                explanation: '對話情境。雖然年輕，但很穩重。'
            },
            {
                id: 'n3_quiz_nagara_mo_5',
                sentence: '「あの会社{かいしゃ}、小{ちい}さいけど大丈夫{だいじょうぶ}？」\n「小{ちい}さい（　）、信頼{しんらい}できるよ。」',
                options: ['のに', 'ながらも', 'ながら', 'けれども'],
                correctIndex: 1,
                explanation: '對話情境。雖然小，但值得信賴。'
            }
        ]
    },
    'n3_nai_koto_wa_nai': {
        id: 'n3_nai_koto_wa_nai',
        pattern: 'ないことはない',
        connection: '動詞{どうし}ない形{けい} + ことはない',
        translation: '並非不...; 不是不...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示保留肯定',
                description: '用雙重否定表達婉轉的肯定，意思是「也不是完全不...」。',
                examples: [
                    { japanese: '食{た}べられないことはないけど、あまり好{す}きじゃない。', chinese: '不是不能吃，只是不太喜歡。' },
                    { japanese: '行{い}けないことはないが、ちょっと遠{とお}い。', chinese: '不是不能去，只是有點遠。' },
                    {
                        japanese: '「このケーキ、食{た}べる？」\n「食{た}べないことはないけど、ダイエット中{ちゅう}なんだ。」\n「そうか。」',
                        chinese: '「這蛋糕要吃嗎？」\n「不是不吃，只是在減肥中。」\n「這樣啊。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「ないことはない」的用法',
            description: '婉轉表達有某種可能性，但有條件或保留。',
            points: [
                {
                    rule: '婉轉同意：表示有條件地接受。',
                    examples: [{ japanese: '手伝{てつだ}えないことはない。', chinese: '不是不能幫忙。' }]
                },
                {
                    rule: '留有餘地：暗示有其他考量。',
                    examples: [{ japanese: '信{しん}じられないことはない。', chinese: '不是不能相信。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_nai_koto_wa_nai_1',
                sentence: '分{わ}から（　）ことはないが、説明{せつめい}が難{むずか}しい。',
                options: ['ません', 'ない', 'なく', 'なかった'],
                correctIndex: 1,
                explanation: '不是不懂，只是難以說明。'
            },
            {
                id: 'n3_quiz_nai_koto_wa_nai_2',
                sentence: 'できない（　）ないけど、時間{じかん}がかかる。',
                options: ['ことが', 'ことに', 'ことは', 'ことを'],
                correctIndex: 2,
                explanation: '不是做不到，只是需要時間。'
            },
            {
                id: 'n3_quiz_nai_koto_wa_nai_3',
                sentence: '行{い}か（　）ことはないが、気{き}が進{すす}まない。',
                options: ['なく', 'ません', 'ない', 'なかった'],
                correctIndex: 2,
                explanation: '不是不去，只是不太想。'
            },
            {
                id: 'n3_quiz_nai_koto_wa_nai_4',
                sentence: '「日本語{にほんご}、読{よ}める？」\n「読{よ}め（　）ことはないけど、書{か}くのは苦手{にがて}。」',
                options: ['ません', 'なく', 'ない', 'なかった'],
                correctIndex: 2,
                explanation: '對話情境。不是不會讀，只是寫不太行。'
            },
            {
                id: 'n3_quiz_nai_koto_wa_nai_5',
                sentence: '「泳{およ}げる？」\n「泳{およ}げない（　）ないけど、あまり上手{じょうず}じゃない。」',
                options: ['ことが', 'ことに', 'ことは', 'ことを'],
                correctIndex: 2,
                explanation: '對話情境。不是不會游泳，只是不太擅長。'
            }
        ]
    },
    'n3_naito': {
        id: 'n3_naito',
        pattern: 'ないと',
        connection: '動詞{どうし}ない形{けい} + と',
        translation: '必須... (口語)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示必須做某事',
                description: '口語中省略後半句，表示「不...的話不行」的意思。',
                examples: [
                    { japanese: '早{はや}く寝{ね}ないと。', chinese: '得早點睡才行。' },
                    { japanese: 'もう行{い}かないと。', chinese: '得走了。' },
                    {
                        japanese: '「まだ勉強{べんきょう}してるの？」\n「うん、明日{あした}テストだから、やらないと。」\n「頑張{がんば}って。」',
                        chinese: '「還在念書？」\n「嗯，明天考試，得念才行。」\n「加油。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「ないと」的口語特點',
            description: '省略「いけない」或「だめ」的口語表達。',
            points: [
                {
                    rule: '完整形式：ないといけない / ないとだめ。',
                    examples: [{ japanese: '食{た}べないといけない → 食{た}べないと。', chinese: '得吃才行 → 得吃。' }]
                },
                {
                    rule: '語氣較隨意，常用於自言自語或親近的人之間。',
                    examples: [{ japanese: '急{いそ}がないと。', chinese: '得快點。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_naito_1',
                sentence: 'もう帰{かえ}ら（　）。',
                options: ['ないと', 'なければ', 'なくて', 'なかった'],
                correctIndex: 0,
                explanation: '得回去了。'
            },
            {
                id: 'n3_quiz_naito_2',
                sentence: '電話{でんわ}し（　）。忘{わす}れそうだ。',
                options: ['ないと', 'なければ', 'なくて', 'なかった'],
                correctIndex: 0,
                explanation: '得打電話。好像會忘記。'
            },
            {
                id: 'n3_quiz_naito_3',
                sentence: '薬{くすり}を飲{の}ま（　）。',
                options: ['ないと', 'なかった', 'なければ', 'なくて'],
                correctIndex: 0,
                explanation: '得吃藥。'
            },
            {
                id: 'n3_quiz_naito_4',
                sentence: '「もう9時{じ}？」\n「うん、早{はや}く起{お}き（　）。」',
                options: ['なければ', 'ないと', 'なくて', 'なかった'],
                correctIndex: 1,
                explanation: '對話情境。得早點起床。'
            },
            {
                id: 'n3_quiz_naito_5',
                sentence: '「宿題{しゅくだい}終{お}わった？」\n「まだ。早{はや}くやら（　）。」',
                options: ['なくて', 'なければ', 'ないと', 'なかった'],
                correctIndex: 2,
                explanation: '對話情境。還沒，得快點做。'
            }
        ]
    },
    'n3_nakanaka': {
        id: 'n3_nakanaka',
        pattern: 'なかなか',
        connection: 'なかなか + 動詞{どうし}ない形{けい}',
        translation: '怎麼也(不)... (搭配否定)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '搭配否定表示困難',
                description: '與否定形式搭配，表示想做某事但怎麼也做不到。',
                examples: [
                    { japanese: 'なかなか決{き}められない。', chinese: '怎麼也決定不了。' },
                    { japanese: '日本語{にほんご}がなかなか上手{じょうず}にならない。', chinese: '日語怎麼也不進步。' },
                    {
                        japanese: '「ダイエット順調{じゅんちょう}？」\n「うん、でもなかなか痩{や}せないんだ。」\n「頑張{がんば}って。」',
                        chinese: '「減肥順利嗎？」\n「嗯，但怎麼也瘦不下來。」\n「加油。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「なかなか」的兩種用法',
            description: '搭配肯定或否定語氣不同。',
            points: [
                {
                    rule: '搭配否定：表示困難、不容易。',
                    examples: [{ japanese: 'なかなか来{こ}ない。', chinese: '遲遲不來。' }]
                },
                {
                    rule: '搭配肯定：表示程度相當好（但這是另一個用法）。',
                    examples: [{ japanese: 'なかなかいい。', chinese: '相當不錯。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_nakanaka_1',
                sentence: '電車{でんしゃ}が（　）来{こ}ない。',
                options: ['なかなか', 'なぜなら', 'なるべく', 'なんか'],
                correctIndex: 0,
                explanation: '電車遲遲不來。'
            },
            {
                id: 'n3_quiz_nakanaka_2',
                sentence: 'この問題{もんだい}は（　）解{と}けない。',
                options: ['なぜなら', 'なかなか', 'なるべく', 'なんか'],
                correctIndex: 1,
                explanation: '這道題怎麼也解不出來。'
            },
            {
                id: 'n3_quiz_nakanaka_3',
                sentence: '彼{かれ}の名前{なまえ}が（　）思{おも}い出{だ}せない。',
                options: ['なかなか', 'なぜなら', 'なるべく', 'なんか'],
                correctIndex: 0,
                explanation: '怎麼也想不起他的名字。'
            },
            {
                id: 'n3_quiz_nakanaka_4',
                sentence: '「仕事{しごと}見{み}つかった？」\n「うん、でも（　）いいのがないんだ。」',
                options: ['なかなか', 'なぜなら', 'なんか', 'なるべく'],
                correctIndex: 0,
                explanation: '對話情境。怎麼也找不到好的。'
            },
            {
                id: 'n3_quiz_nakanaka_5',
                sentence: '「日本語{にほんご}上達{じょうたつ}した？」\n「うーん、（　）上手{じょうず}にならなくて。」',
                options: ['なんか', 'なかなか', 'なるべく', 'なぜなら'],
                correctIndex: 1,
                explanation: '對話情境。怎麼也不進步。'
            }
        ]
    },
    'n3_nanka': {
        id: 'n3_nanka',
        pattern: 'なんか / なんて / など',
        connection: '名詞{めいし} + なんか / なんて / など',
        translation: '...之類的; ...什麼的 (輕視/自謙)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示輕視或自謙',
                description: '用來貶低或謙遜地提及某事物。',
                examples: [
                    { japanese: '私{わたし}なんかにはできません。', chinese: '我這種人是做不到的。' },
                    { japanese: 'そんなことなんか気{き}にしないで。', chinese: '那種事別在意。' },
                    {
                        japanese: '「君{きみ}、すごいね。」\n「私{わたし}なんかまだまだだよ。」\n「謙虚{けんきょ}だね。」',
                        chinese: '「你好厲害。」\n「我還差得遠呢。」\n「你真謙虛。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「なんか」「なんて」「など」的區別',
            description: '三者都表示輕視或舉例，但語感略有不同。',
            points: [
                {
                    rule: 'なんか：最口語，常用於日常會話。',
                    examples: [{ japanese: 'お金{かね}なんかいらない。', chinese: '錢什麼的不需要。' }]
                },
                {
                    rule: 'なんて：帶有驚訝或感嘆的語氣。',
                    examples: [{ japanese: 'こんなことなんて信{しん}じられない。', chinese: '這種事簡直不敢相信。' }]
                },
                {
                    rule: 'など：較正式，書面語也可用。',
                    examples: [{ japanese: 'そんなことなど気{き}にしません。', chinese: '那種事情不在意。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_nanka_1',
                sentence: '私{わたし}（　）まだまだです。',
                options: ['なんか', 'なんで', 'なるほど', 'なぜか'],
                correctIndex: 0,
                explanation: '我這種人還差得遠。'
            },
            {
                id: 'n3_quiz_nanka_2',
                sentence: 'そんなこと（　）どうでもいい。',
                options: ['なるほど', 'なぜか', 'なんで', 'なんか'],
                correctIndex: 3,
                explanation: '那種事怎樣都好。'
            },
            {
                id: 'n3_quiz_nanka_3',
                sentence: '勉強{べんきょう}（　）したくない。',
                options: ['なるほど', 'なぜか', 'なんで', 'なんか'],
                correctIndex: 3,
                explanation: '不想念書什麼的。'
            },
            {
                id: 'n3_quiz_nanka_4',
                sentence: '「この料理{りょうり}、美味{おい}しいね。」\n「こんなの（　）簡単{かんたん}だよ。」',
                options: ['なんで', 'なぜか', 'なるほど', 'なんか'],
                correctIndex: 3,
                explanation: '對話情境。這種東西很簡單。'
            },
            {
                id: 'n3_quiz_nanka_5',
                sentence: '「手伝{てつだ}ってくれる？」\n「私{わたし}（　）でよければ。」',
                options: ['なんで', 'なんか', 'なぜか', 'なるほど'],
                correctIndex: 1,
                explanation: '對話情境。如果我這種人可以的話。'
            }
        ]
    },
    'n3_naosu': {
        id: 'n3_naosu',
        pattern: '直{なお}す（なおす）',
        connection: '動詞{どうし}ます形{けい}（去{きょ}ます） + 直{なお}す',
        translation: '重新...; 改...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示重做或修正',
                description: '接在動詞後表示重新做一次或修正。',
                examples: [
                    { japanese: 'もう一度{いちど}書{か}き直{なお}してください。', chinese: '請再寫一遍。' },
                    { japanese: '計画{けいかく}を立{た}て直{なお}した。', chinese: '重新制定了計劃。' },
                    {
                        japanese: '「このレポート、どう？」\n「ちょっと直{なお}した方{ほう}がいいね。書{か}き直{なお}して。」\n「わかった。」',
                        chinese: '「這份報告怎樣？」\n「稍微修改一下比較好。重寫一遍。」\n「知道了。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「直す」的用法',
            description: '接在動詞ます形後表示再次進行某動作。',
            points: [
                {
                    rule: '常見搭配：書き直す、作り直す、やり直す。',
                    examples: [{ japanese: '最初{さいしょ}からやり直{なお}す。', chinese: '從頭再來。' }]
                },
                {
                    rule: '也可表示修正錯誤。',
                    examples: [{ japanese: '間違{まちが}いを直{なお}す。', chinese: '修正錯誤。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_naosu_1',
                sentence: '間違{まちが}いがあるので、書{か}き（　）ください。',
                options: ['直して', '出して', '続けて', '始めて'],
                correctIndex: 0,
                explanation: '因為有錯誤，請重寫。'
            },
            {
                id: 'n3_quiz_naosu_2',
                sentence: '失敗{しっぱい}したけど、もう一度{いちど}やり（　）。',
                options: ['直す', '始める', '出す', '続ける'],
                correctIndex: 0,
                explanation: '雖然失敗了，但再重來一次。'
            },
            {
                id: 'n3_quiz_naosu_3',
                sentence: 'デザインが気{き}に入{い}らないので、作{つく}り（　）。',
                options: ['始めた', '続けた', '直した', '出した'],
                correctIndex: 2,
                explanation: '因為不喜歡設計，所以重做。'
            },
            {
                id: 'n3_quiz_naosu_4',
                sentence: '「発音{はつおん}が違{ちが}うよ。」\n「じゃあ、言{い}い（　）。」',
                options: ['直すね', '出すね', '続けるね', '始めるね'],
                correctIndex: 0,
                explanation: '對話情境。那我重說一遍。'
            },
            {
                id: 'n3_quiz_naosu_5',
                sentence: '「この計画{けいかく}、問題{もんだい}があるね。」\n「うん、考{かんが}え（　）必要{ひつよう}がある。」',
                options: ['続ける', '出す', '直す', '始める'],
                correctIndex: 2,
                explanation: '對話情境。需要重新考慮。'
            }
        ]
    },
    'n3_naru_beku': {
        id: 'n3_naru_beku',
        pattern: 'なるべく',
        connection: 'なるべく + 動詞{どうし}/形容詞{けいようし}',
        translation: '盡量; 盡可能',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示盡可能',
                description: '表示在能力範圍內盡量做到某事。',
                examples: [
                    { japanese: 'なるべく早{はや}く来{き}てください。', chinese: '請盡量早點來。' },
                    { japanese: 'なるべく野菜{やさい}を食{た}べるようにしている。', chinese: '我盡量吃蔬菜。' },
                    {
                        japanese: '「明日{あした}、来{こ}られる？」\n「なるべく行{い}くようにするよ。」\n「待{ま}ってるね。」',
                        chinese: '「明天能來嗎？」\n「我盡量去。」\n「等你喔。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「なるべく」的用法',
            description: '表示在可能的範圍內盡力做到。',
            points: [
                {
                    rule: '與「できるだけ」意思相近。',
                    examples: [{ japanese: 'なるべく静{しず}かにしてください。', chinese: '請盡量安靜。' }]
                },
                {
                    rule: '常用於請求或建議。',
                    examples: [{ japanese: 'なるべく歩{ある}いた方{ほう}がいい。', chinese: '盡量走路比較好。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_naru_beku_1',
                sentence: '（　）安{やす}いものを買{か}うようにしています。',
                options: ['なんか', 'なぜか', 'なるべく', 'なかなか'],
                correctIndex: 2,
                explanation: '我盡量買便宜的東西。'
            },
            {
                id: 'n3_quiz_naru_beku_2',
                sentence: '（　）電気{でんき}を消{け}すようにしてください。',
                options: ['なるべく', 'なんか', 'なぜか', 'なかなか'],
                correctIndex: 0,
                explanation: '請盡量關燈。'
            },
            {
                id: 'n3_quiz_naru_beku_3',
                sentence: '健康{けんこう}のために（　）運動{うんどう}している。',
                options: ['なぜか', 'なるべく', 'なかなか', 'なんか'],
                correctIndex: 1,
                explanation: '為了健康盡量運動。'
            },
            {
                id: 'n3_quiz_naru_beku_4',
                sentence: '「いつまでに終{お}わらせる？」\n「（　）今日中{きょうじゅう}に。」',
                options: ['なんか', 'なかなか', 'なるべく', 'なぜか'],
                correctIndex: 2,
                explanation: '對話情境。盡量在今天之內。'
            },
            {
                id: 'n3_quiz_naru_beku_5',
                sentence: '「遅刻{ちこく}しないでね。」\n「うん、（　）早{はや}く行{い}くよ。」',
                options: ['なかなか', 'なるべく', 'なぜか', 'なんか'],
                correctIndex: 1,
                explanation: '對話情境。我盡量早點去。'
            }
        ]
    },
    'n3_nazenara': {
        id: 'n3_nazenara',
        pattern: 'なぜなら',
        connection: 'なぜなら + 文{ぶん} + から/からだ',
        translation: '因為; 原因是',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '說明原因',
                description: '用於正式地說明前述內容的原因，後面常接「から」或「からだ」。',
                examples: [
                    { japanese: '彼{かれ}は信用{しんよう}できる。なぜなら、嘘{うそ}をつかないからだ。', chinese: '他值得信賴。因為他不說謊。' },
                    { japanese: '日本語{にほんご}を勉強{べんきょう}している。なぜなら、日本{にほん}で働{はたら}きたいからだ。', chinese: '我在學日語。因為想在日本工作。' },
                    {
                        japanese: '「なぜ断{ことわ}ったの？」\n「なぜなら、その日{ひ}は予定{よてい}があったから。」\n「そうか。」',
                        chinese: '「為什麼拒絕了？」\n「因為那天有安排。」\n「這樣啊。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「なぜなら」的用法',
            description: '較正式的因果關係表達，常用於書面或演說。',
            points: [
                {
                    rule: '結構：A。なぜなら、B からだ。',
                    examples: [{ japanese: '成功{せいこう}した。なぜなら、努力{どりょく}したからだ。', chinese: '成功了。因為努力了。' }]
                },
                {
                    rule: '比「から」更正式，適用於說明、解釋。',
                    examples: [{ japanese: '遅刻{ちこく}した。なぜなら、電車{でんしゃ}が遅{おく}れたから。', chinese: '遲到了。因為電車誤點。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_nazenara_1',
                sentence: '彼女{かのじょ}を尊敬{そんけい}している。（　）、とても優{やさ}しいからだ。',
                options: ['なんか', 'なぜなら', 'なるべく', 'なかなか'],
                correctIndex: 1,
                explanation: '我尊敬她。因為她很溫柔。'
            },
            {
                id: 'n3_quiz_nazenara_2',
                sentence: 'この店{みせ}が好{す}きだ。（　）、料理{りょうり}が美味{おい}しいからだ。',
                options: ['なるべく', 'なぜなら', 'なかなか', 'なんか'],
                correctIndex: 1,
                explanation: '我喜歡這家店。因為料理很好吃。'
            },
            {
                id: 'n3_quiz_nazenara_3',
                sentence: '参加{さんか}できない。（　）、仕事{しごと}があるからだ。',
                options: ['なんか', 'なかなか', 'なぜなら', 'なるべく'],
                correctIndex: 2,
                explanation: '沒辦法參加。因為有工作。'
            },
            {
                id: 'n3_quiz_nazenara_4',
                sentence: '「どうして日本語{にほんご}を勉強{べんきょう}してるの？」\n「（　）、日本{にほん}のアニメが好{す}きだから。」',
                options: ['なぜなら', 'なかなか', 'なるべく', 'なんか'],
                correctIndex: 0,
                explanation: '對話情境。因為喜歡日本動畫。'
            },
            {
                id: 'n3_quiz_nazenara_5',
                sentence: '「彼{かれ}、人気{にんき}があるね。」\n「うん。（　）、誰{だれ}にでも優{やさ}しいからだよ。」',
                options: ['なかなか', 'なんか', 'なぜなら', 'なるべく'],
                correctIndex: 2,
                explanation: '對話情境。因為他對誰都很溫柔。'
            }
        ]
    },
    'n3_ndatte': {
        id: 'n3_ndatte',
        pattern: 'んだって',
        connection: '普通{ふつう}形{けい} + んだって',
        translation: '聽說...; 據說... (口語)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '傳達聽來的消息',
                description: '口語中用來轉述從他人那裡聽來的消息。',
                examples: [
                    { japanese: '明日{あした}、雨{あめ}が降{ふ}るんだって。', chinese: '聽說明天會下雨。' },
                    { japanese: '彼{かれ}、来月{らいげつ}結婚{けっこん}するんだって。', chinese: '聽說他下個月要結婚。' },
                    {
                        japanese: '「田中{たなか}さん、どうしたの？」\n「仕事{しごと}辞{や}めるんだって。」\n「本当{ほんとう}に？」',
                        chinese: '「田中怎麼了？」\n「聽說他要辭職。」\n「真的嗎？」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「んだって」的口語特點',
            description: '是「のだそうだ」的口語形式。',
            points: [
                {
                    rule: '較正式的形式：のだそうだ。',
                    examples: [{ japanese: '会議{かいぎ}は中止{ちゅうし}なんだって。', chinese: '聽說會議取消了。' }]
                },
                {
                    rule: '常用於朋友間的日常會話。',
                    examples: [{ japanese: 'あの店{みせ}、閉店{へいてん}するんだって。', chinese: '聽說那家店要關了。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ndatte_1',
                sentence: '新{あたら}しい店{みせ}ができる（　）。',
                options: ['んだが', 'んだって', 'んだけど', 'んだから'],
                correctIndex: 1,
                explanation: '聽說要開新店。'
            },
            {
                id: 'n3_quiz_ndatte_2',
                sentence: '彼女{かのじょ}、外国{がいこく}に行{い}く（　）。',
                options: ['んだが', 'んだから', 'んだけど', 'んだって'],
                correctIndex: 3,
                explanation: '聽說她要出國。'
            },
            {
                id: 'n3_quiz_ndatte_3',
                sentence: 'あの映画{えいが}、面白{おもしろ}い（　）。',
                options: ['んだって', 'んだから', 'んだけど', 'んだが'],
                correctIndex: 0,
                explanation: '聽說那部電影很有趣。'
            },
            {
                id: 'n3_quiz_ndatte_4',
                sentence: '「山田{やまだ}さん、元気{げんき}？」\n「うん、最近{さいきん}忙{いそが}しい（　）。」',
                options: ['んだけど', 'んだって', 'んだから', 'んだが'],
                correctIndex: 1,
                explanation: '對話情境。聽說最近很忙。'
            },
            {
                id: 'n3_quiz_ndatte_5',
                sentence: '「あの人{ひと}、誰{だれ}？」\n「新{あたら}しい部長{ぶちょう}（　）。」',
                options: ['なんだから', 'なんだが', 'なんだけど', 'なんだって'],
                correctIndex: 3,
                explanation: '對話情境。聽說是新部長。'
            }
        ]
    },
    'n3_ni_chigai_nai': {
        id: 'n3_ni_chigai_nai',
        pattern: 'に違{ちが}いない',
        connection: '普通{ふつう}形{けい} + に違{ちが}いない',
        translation: '一定...; 肯定...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示強烈推斷',
                description: '表示說話者非常確信某事，相當於「一定是...」。',
                examples: [
                    { japanese: '彼{かれ}は成功{せいこう}するに違{ちが}いない。', chinese: '他一定會成功。' },
                    { japanese: 'この料理{りょうり}は美味{おい}しいに違{ちが}いない。', chinese: '這道菜一定很好吃。' },
                    {
                        japanese: '「山田{やまだ}さん、遅{おく}れてるね。」\n「電車{でんしゃ}が遅{おく}れたに違{ちが}いないよ。」\n「そうだね。」',
                        chinese: '「山田遲到了耶。」\n「一定是電車誤點了。」\n「也是。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「に違いない」的用法',
            description: '表達說話者根據某些證據或經驗做出的強烈推斷。',
            points: [
                {
                    rule: '語氣比「だろう」更強烈。',
                    examples: [{ japanese: '犯人{はんにん}は彼{かれ}に違{ちが}いない。', chinese: '犯人一定是他。' }]
                },
                {
                    rule: '常用於推測原因或結果。',
                    examples: [{ japanese: '疲{つか}れているに違{ちが}いない。', chinese: '一定是累了。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_chigai_nai_1',
                sentence: '彼{かれ}は知{し}っている（　）。',
                options: ['にすぎない', 'にかぎらない', 'にほかならない', 'に違いない'],
                correctIndex: 3,
                explanation: '他一定知道。'
            },
            {
                id: 'n3_quiz_ni_chigai_nai_2',
                sentence: 'あの店{みせ}は人気{にんき}がある（　）。いつも混{こ}んでいる。',
                options: ['にかぎらない', 'に違いない', 'にすぎない', 'にほかならない'],
                correctIndex: 1,
                explanation: '那家店一定很受歡迎。總是很擠。'
            },
            {
                id: 'n3_quiz_ni_chigai_nai_3',
                sentence: '彼女{かのじょ}は怒{おこ}っている（　）。',
                options: ['にすぎない', 'にかぎらない', 'にほかならない', 'に違いない'],
                correctIndex: 3,
                explanation: '她一定在生氣。'
            },
            {
                id: 'n3_quiz_ni_chigai_nai_4',
                sentence: '「この問題{もんだい}、難{むずか}しいね。」\n「先生{せんせい}も難{むずか}しいと思{おも}っている（　）。」',
                options: ['に違いない', 'にすぎない', 'にほかならない', 'にかぎらない'],
                correctIndex: 0,
                explanation: '對話情境。老師一定也覺得很難。'
            },
            {
                id: 'n3_quiz_ni_chigai_nai_5',
                sentence: '「彼{かれ}、なぜ来{こ}ないの？」\n「忘{わす}れた（　）。」',
                options: ['にすぎない', 'にほかならない', 'に違いない', 'にかぎらない'],
                correctIndex: 2,
                explanation: '對話情境。一定是忘記了。'
            }
        ]
    },
    'n3_ni_chigai_nai_1': {
        id: 'n3_ni_chigai_nai_1',
        pattern: 'に違{ちが}いない',
        connection: '普通{ふつう}形{けい} + に違{ちが}いない',
        translation: '一定...; 肯定...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示確信的推斷',
                description: '根據觀察或證據，做出幾乎確定的推斷。',
                examples: [
                    { japanese: 'あの音{おと}は雷{かみなり}に違{ちが}いない。', chinese: '那個聲音一定是雷聲。' },
                    { japanese: '彼{かれ}の話{はなし}は本当{ほんとう}に違{ちが}いない。', chinese: '他說的一定是真的。' },
                    {
                        japanese: '「この足跡{あしあと}、何{なん}だろう？」\n「犬{いぬ}のに違{ちが}いないよ。」\n「確{たし}かに。」',
                        chinese: '「這腳印是什麼？」\n「一定是狗的。」\n「確實。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「に違いない」的強度',
            description: '在推測表達中屬於最強烈的一種。',
            points: [
                {
                    rule: '推測強度：に違いない > はずだ > だろう。',
                    examples: [{ japanese: '明日{あした}は晴{は}れるに違{ちが}いない。', chinese: '明天一定會放晴。' }]
                },
                {
                    rule: '書面語可用「相違ない」。',
                    examples: [{ japanese: '事実{じじつ}に相違{そうい}ない。', chinese: '與事實無異。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_chigai_nai_1_1',
                sentence: 'あの人{ひと}は日本人{にほんじん}に（　）。発音{はつおん}が完璧{かんぺき}だ。',
                options: ['ほかならない', 'すぎない', '違いない', '限らない'],
                correctIndex: 2,
                explanation: '那個人一定是日本人。發音很完美。'
            },
            {
                id: 'n3_quiz_ni_chigai_nai_1_2',
                sentence: 'この仕事{しごと}は大変{たいへん}に（　）。',
                options: ['違いない', '限らない', 'ほかならない', 'すぎない'],
                correctIndex: 0,
                explanation: '這份工作一定很辛苦。'
            },
            {
                id: 'n3_quiz_ni_chigai_nai_1_3',
                sentence: '彼女{かのじょ}は悲{かな}しんでいるに（　）。',
                options: ['限らない', 'すぎない', 'ほかならない', '違いない'],
                correctIndex: 3,
                explanation: '她一定很難過。'
            },
            {
                id: 'n3_quiz_ni_chigai_nai_1_4',
                sentence: '「この手紙{てがみ}、誰{だれ}から？」\n「彼氏{かれし}からに（　）。」',
                options: ['ほかならない', 'すぎない', '限らない', '違いない'],
                correctIndex: 3,
                explanation: '對話情境。一定是男朋友寄的。'
            },
            {
                id: 'n3_quiz_ni_chigai_nai_1_5',
                sentence: '「彼{かれ}、最近{さいきん}元気{げんき}ないね。」\n「何{なに}か悩{なや}みがあるに（　）。」',
                options: ['限らない', '違いない', 'ほかならない', 'すぎない'],
                correctIndex: 1,
                explanation: '對話情境。一定有什麼煩惱。'
            }
        ]
    },
    'n3_ni_hanshite': {
        id: 'n3_ni_hanshite',
        pattern: 'に反{はん}して',
        connection: '名詞{めいし} + に反{はん}して',
        translation: '與...相反; 違反...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示與預期相反',
                description: '表示結果與預期、期望或規定相反。',
                examples: [
                    { japanese: '予想{よそう}に反{はん}して、試合{しあい}は負{ま}けた。', chinese: '與預期相反，比賽輸了。' },
                    { japanese: '親{おや}の期待{きたい}に反{はん}して、大学{だいがく}を辞{や}めた。', chinese: '違背父母的期望，退學了。' },
                    {
                        japanese: '「天気{てんき}予報{よほう}、外{はず}れたね。」\n「うん、予報{よほう}に反{はん}して晴{は}れたね。」\n「よかった。」',
                        chinese: '「天氣預報不準耶。」\n「嗯，與預報相反，放晴了。」\n「太好了。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「に反して」的用法',
            description: '表示與某事物相反或違背。',
            points: [
                {
                    rule: '常見搭配：予想に反して、期待に反して、規則に反して。',
                    examples: [{ japanese: '規則{きそく}に反{はん}する行為{こうい}。', chinese: '違反規則的行為。' }]
                },
                {
                    rule: '也可作定語：に反した + 名詞。',
                    examples: [{ japanese: '予想{よそう}に反{はん}した結果{けっか}。', chinese: '與預期相反的結果。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_hanshite_1',
                sentence: '予想{よそう}（　）、彼{かれ}は合格{ごうかく}した。',
                options: ['に反して', 'にとって', 'に対して', 'について'],
                correctIndex: 0,
                explanation: '與預期相反，他及格了。'
            },
            {
                id: 'n3_quiz_ni_hanshite_2',
                sentence: '期待{きたい}（　）、売{う}り上{あ}げは下{さ}がった。',
                options: ['にとって', 'について', 'に対して', 'に反して'],
                correctIndex: 3,
                explanation: '與期望相反，銷售額下降了。'
            },
            {
                id: 'n3_quiz_ni_hanshite_3',
                sentence: '法律{ほうりつ}（　）行動{こうどう}してはいけない。',
                options: ['について', 'に反して', 'にとって', 'に対して'],
                correctIndex: 1,
                explanation: '不能做違反法律的行為。'
            },
            {
                id: 'n3_quiz_ni_hanshite_4',
                sentence: '「試験{しけん}どうだった？」\n「予想{よそう}（　）、簡単{かんたん}だったよ。」',
                options: ['について', 'に反して', 'に対して', 'にとって'],
                correctIndex: 1,
                explanation: '對話情境。與預期相反，很簡單。'
            },
            {
                id: 'n3_quiz_ni_hanshite_5',
                sentence: '「彼{かれ}、辞{や}めたんだって。」\n「上司{じょうし}の意向{いこう}（　）だね。」',
                options: ['にとって', 'に反して', 'について', 'に対して'],
                correctIndex: 1,
                explanation: '對話情境。違背上司的意向呢。'
            }
        ]
    },
    'n3_ni_hanshite_1': {
        id: 'n3_ni_hanshite_1',
        pattern: 'に反{はん}して',
        connection: '名詞{めいし} + に反{はん}して',
        translation: '與...相反; 違反...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示違背或相反',
                description: '表示行為或結果與某標準、期望相違背。',
                examples: [
                    { japanese: '世間{せけん}の常識{じょうしき}に反{はん}している。', chinese: '違背社會常識。' },
                    { japanese: '彼{かれ}の意見{いけん}に反{はん}して行動{こうどう}した。', chinese: '違背他的意見行動了。' },
                    {
                        japanese: '「このルール、おかしくない？」\n「うん、常識{じょうしき}に反{はん}してるよね。」\n「変{か}えるべきだ。」',
                        chinese: '「這規則不奇怪嗎？」\n「嗯，違背常識呢。」\n「應該改變。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「に反して」的應用',
            description: '可用於具體規則或抽象期望。',
            points: [
                {
                    rule: '具體規則：規則に反して、法律に反して。',
                    examples: [{ japanese: '契約{けいやく}に反{はん}している。', chinese: '違反合約。' }]
                },
                {
                    rule: '抽象期望：予想に反して、期待に反して。',
                    examples: [{ japanese: '心配{しんぱい}に反{はん}して順調{じゅんちょう}だった。', chinese: '與擔心相反，很順利。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_hanshite_1_1',
                sentence: '会社{かいしゃ}の方針{ほうしん}に（　）行動{こうどう}した。',
                options: ['ついて', 'とって', '対して', '反して'],
                correctIndex: 3,
                explanation: '做了違反公司方針的行動。'
            },
            {
                id: 'n3_quiz_ni_hanshite_1_2',
                sentence: '医者{いしゃ}の忠告{ちゅうこく}に（　）、お酒{さけ}を飲{の}んだ。',
                options: ['反して', '対して', 'ついて', 'とって'],
                correctIndex: 0,
                explanation: '違背醫生的忠告喝了酒。'
            },
            {
                id: 'n3_quiz_ni_hanshite_1_3',
                sentence: '彼{かれ}は周{まわ}りの反対{はんたい}に（　）、転職{てんしょく}した。',
                options: ['対して', '反して', 'とって', 'ついて'],
                correctIndex: 1,
                explanation: '他違背周圍的反對，換了工作。'
            },
            {
                id: 'n3_quiz_ni_hanshite_1_4',
                sentence: '「彼{かれ}、続{つづ}けるの？」\n「みんなの予想{よそう}に（　）ね。」',
                options: ['とって', '対して', 'ついて', '反して'],
                correctIndex: 3,
                explanation: '對話情境。與大家的預期相反呢。'
            },
            {
                id: 'n3_quiz_ni_hanshite_1_5',
                sentence: '「結果{けっか}どうだった？」\n「心配{しんぱい}に（　）、うまくいったよ。」',
                options: ['とって', 'ついて', '対して', '反して'],
                correctIndex: 3,
                explanation: '對話情境。與擔心相反，很順利。'
            }
        ]
    },
    'n3_ni_kakete': {
        id: 'n3_ni_kakete',
        pattern: 'にかけて',
        connection: '名詞{めいし} + にかけて',
        translation: '到...為止 (期間); 關於...並非浪得虛名',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示時間或空間範圍',
                description: '與「から」搭配，表示從某點到某點的範圍。',
                examples: [
                    { japanese: '今晩{こんばん}から明日{あした}にかけて雨{あめ}が降{ふ}る。', chinese: '從今晚到明天會下雨。' },
                    { japanese: '関東{かんとう}から関西{かんさい}にかけて地震{じしん}があった。', chinese: '從關東到關西發生了地震。' },
                    {
                        japanese: '「旅行{りょこう}の天気{てんき}どう？」\n「土曜{どよう}から日曜{にちよう}にかけて晴{は}れるらしい。」\n「よかった。」',
                        chinese: '「旅行的天氣怎樣？」\n「聽說從週六到週日會放晴。」\n「太好了。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「から～にかけて」的用法',
            description: '表示時間或空間的延續範圍，邊界不明確。',
            points: [
                {
                    rule: '時間範圍：Aから B にかけて。',
                    examples: [{ japanese: '春{はる}から夏{なつ}にかけて花{はな}が咲{さ}く。', chinese: '從春天到夏天花會開。' }]
                },
                {
                    rule: '空間範圍：表示地理區域的延伸。',
                    examples: [{ japanese: '北海道{ほっかいどう}から東北{とうほく}にかけて。', chinese: '從北海道到東北。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_kakete_1',
                sentence: '午後{ごご}から夕方{ゆうがた}（　）雨{あめ}が降{ふ}るでしょう。',
                options: ['について', 'にたいして', 'にかけて', 'にとって'],
                correctIndex: 2,
                explanation: '從下午到傍晚可能會下雨。'
            },
            {
                id: 'n3_quiz_ni_kakete_2',
                sentence: '東京{とうきょう}から大阪{おおさか}（　）新幹線{しんかんせん}が通{とお}っている。',
                options: ['にたいして', 'にとって', 'について', 'にかけて'],
                correctIndex: 3,
                explanation: '從東京到大阪有新幹線通過。'
            },
            {
                id: 'n3_quiz_ni_kakete_3',
                sentence: '1月{がつ}から3月{がつ}（　）、この地域{ちいき}は雪{ゆき}が多{おお}い。',
                options: ['にたいして', 'にとって', 'について', 'にかけて'],
                correctIndex: 3,
                explanation: '從1月到3月，這地區雪很多。'
            },
            {
                id: 'n3_quiz_ni_kakete_4',
                sentence: '「この工事{こうじ}、いつまで？」\n「今週{こんしゅう}{こんしゅう}から来週{らいしゅう}（　）ですね。」',
                options: ['について', 'にとって', 'にたいして', 'にかけて'],
                correctIndex: 3,
                explanation: '對話情境。從這週到下週。'
            },
            {
                id: 'n3_quiz_ni_kakete_5',
                sentence: '「桜{さくら}はいつ見{み}られる？」\n「3月{がつ}末{まつ}から4月{がつ}初{はじ}め（　）かな。」',
                options: ['にかけて', 'について', 'にとって', 'にたいして'],
                correctIndex: 0,
                explanation: '對話情境。大概從3月底到4月初。'
            }
        ]
    },
    'n3_ni_kan_suru': {
        id: 'n3_ni_kan_suru',
        pattern: 'に関{かん}する',
        connection: '名詞{めいし} + に関{かん}する + 名詞{めいし}',
        translation: '關於...; 有關...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示關於某主題',
                description: '用於表示與某事物相關的內容，較正式。',
                examples: [
                    { japanese: '環境{かんきょう}に関{かん}する問題{もんだい}を議論{ぎろん}した。', chinese: '討論了關於環境的問題。' },
                    { japanese: '日本{にほん}の文化{ぶんか}に関{かん}する本{ほん}を読{よ}んでいます。', chinese: '正在讀關於日本文化的書。' },
                    {
                        japanese: '「この資料{しりょう}、何{なに}？」\n「新{あたら}しいプロジェクトに関{かん}する説明{せつめい}だよ。」\n「見{み}せて。」',
                        chinese: '「這資料是什麼？」\n「關於新專案的說明。」\n「給我看看。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「に関する」vs「について」',
            description: '兩者意思相近，但「に関する」較正式。',
            points: [
                {
                    rule: 'に関する：較正式，常用於書面。',
                    examples: [{ japanese: '法律{ほうりつ}に関{かん}する知識{ちしき}。', chinese: '關於法律的知識。' }]
                },
                {
                    rule: 'について：口語和書面都可用。',
                    examples: [{ japanese: '法律{ほうりつ}についての知識{ちしき}。', chinese: '關於法律的知識。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_kan_suru_1',
                sentence: '健康{けんこう}に（　）情報{じょうほう}を集{あつ}めています。',
                options: ['とって', '対する', '関する', 'ついて'],
                correctIndex: 2,
                explanation: '正在收集關於健康的資訊。'
            },
            {
                id: 'n3_quiz_ni_kan_suru_2',
                sentence: 'この問題{もんだい}に（　）質問{しつもん}はありますか。',
                options: ['対する', '関する', 'ついて', 'とって'],
                correctIndex: 1,
                explanation: '有關於這個問題的疑問嗎？'
            },
            {
                id: 'n3_quiz_ni_kan_suru_3',
                sentence: '教育{きょういく}に（　）政策{せいさく}が発表{はっぴょう}された。',
                options: ['対する', 'とって', '関する', 'ついて'],
                correctIndex: 2,
                explanation: '發表了關於教育的政策。'
            },
            {
                id: 'n3_quiz_ni_kan_suru_4',
                sentence: '「何{なに}を調{しら}べてるの？」\n「日本{にほん}の歴史{れきし}に（　）ことだよ。」',
                options: ['とっての', 'ついての', '関する', '対する'],
                correctIndex: 2,
                explanation: '對話情境。關於日本歷史的事。'
            },
            {
                id: 'n3_quiz_ni_kan_suru_5',
                sentence: '「このレポート、テーマは？」\n「環境問題{かんきょうもんだい}に（　）ものです。」',
                options: ['対する', '関する', 'とっての', 'ついての'],
                correctIndex: 1,
                explanation: '對話情境。關於環境問題的。'
            }
        ]
    },
    'n3_ni_kan_suru_ni_kan_shite': {
        id: 'n3_ni_kan_suru_ni_kan_shite',
        pattern: 'に関{かん}する / に関{かん}して',
        connection: '名詞{めいし} + に関{かん}する/に関{かん}して',
        translation: '關於...; 有關...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '兩種形式的用法',
                description: '「に関する」作定語修飾名詞，「に関して」作副詞修飾動詞。',
                examples: [
                    { japanese: 'この件{けん}に関{かん}して説明{せつめい}します。', chinese: '關於這件事我來說明。' },
                    { japanese: '経済{けいざい}に関{かん}する記事{きじ}を書{か}いた。', chinese: '寫了關於經濟的文章。' },
                    {
                        japanese: '「質問{しつもん}ある？」\n「はい、給料{きゅうりょう}に関{かん}して聞{き}きたいです。」\n「どうぞ。」',
                        chinese: '「有問題嗎？」\n「是的，想問關於薪水的事。」\n「請說。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「に関する」和「に関して」的區別',
            description: '功能不同但意思相同。',
            points: [
                {
                    rule: 'に関する + 名詞：作定語。',
                    examples: [{ japanese: '安全{あんぜん}に関{かん}する規則{きそく}。', chinese: '關於安全的規則。' }]
                },
                {
                    rule: 'に関して + 動詞：作狀語。',
                    examples: [{ japanese: 'この問題{もんだい}に関{かん}して話{はな}し合{あ}った。', chinese: '討論了關於這個問題。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_kan_suru_ni_kan_shite_1',
                sentence: 'この事件{じけん}に（　）調査{ちょうさ}が行{おこな}われた。',
                options: ['ついて', '対して', '関して', 'とって'],
                correctIndex: 2,
                explanation: '進行了關於這件事的調查。'
            },
            {
                id: 'n3_quiz_ni_kan_suru_ni_kan_shite_2',
                sentence: '仕事{しごと}の内容{ないよう}に（　）詳{くわ}しく説明{せつめい}した。',
                options: ['ついて', '関して', '対して', 'とって'],
                correctIndex: 1,
                explanation: '詳細說明了關於工作內容。'
            },
            {
                id: 'n3_quiz_ni_kan_suru_ni_kan_shite_3',
                sentence: '契約{けいやく}に（　）書類{しょるい}を準備{じゅんび}してください。',
                options: ['とっての', '関する', '対する', 'ついての'],
                correctIndex: 1,
                explanation: '請準備關於合約的文件。'
            },
            {
                id: 'n3_quiz_ni_kan_suru_ni_kan_shite_4',
                sentence: '「何{なに}か聞{き}きたいことある？」\n「はい、休暇{きゅうか}に（　）質問{しつもん}があります。」',
                options: ['ついて', '対して', 'とって', '関して'],
                correctIndex: 3,
                explanation: '對話情境。有關於休假的問題。'
            },
            {
                id: 'n3_quiz_ni_kan_suru_ni_kan_shite_5',
                sentence: '「このプロジェクト、知{し}ってる？」\n「詳{くわ}しいことに（　）は知{し}らない。」',
                options: ['対して', '関して', 'とって', 'ついて'],
                correctIndex: 1,
                explanation: '對話情境。不知道關於詳細的事。'
            }
        ]
    },
    'n3_ni_kawatte': {
        id: 'n3_ni_kawatte',
        pattern: 'にかわって',
        connection: '名詞{めいし} + にかわって',
        translation: '代替...; 代表...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示代替或代表',
                description: '表示代替某人或某物執行某動作。',
                examples: [
                    { japanese: '部長{ぶちょう}にかわって、私{わたし}が挨拶{あいさつ}します。', chinese: '我代替部長致詞。' },
                    { japanese: '母{はは}にかわって、料理{りょうり}を作{つく}った。', chinese: '代替媽媽做了飯。' },
                    {
                        japanese: '「社長{しゃちょう}は？」\n「今日{きょう}は社長{しゃちょう}にかわって、副社長{ふくしゃちょう}が出席{しゅっせき}します。」\n「わかりました。」',
                        chinese: '「社長呢？」\n「今天由副社長代替社長出席。」\n「知道了。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「にかわって」的用法',
            description: '表示替代某人做某事。',
            points: [
                {
                    rule: '人の代わり：代替某人行動。',
                    examples: [{ japanese: '父{ちち}にかわって謝{あやま}る。', chinese: '代替父親道歉。' }]
                },
                {
                    rule: '時代的變遷：某事物被取代。',
                    examples: [{ japanese: '手紙{てがみ}にかわってメールが普及{ふきゅう}した。', chinese: '電子郵件取代了書信普及開來。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_kawatte_1',
                sentence: '課長{かちょう}（　）、私{わたし}が報告{ほうこく}します。',
                options: ['にかわって', 'について', 'にとって', 'に対して'],
                correctIndex: 0,
                explanation: '我代替課長報告。'
            },
            {
                id: 'n3_quiz_ni_kawatte_2',
                sentence: '病気{びょうき}の先生{せんせい}（　）、別{べつ}の先生{せんせい}が授業{じゅぎょう}{じゅぎょう}をした。',
                options: ['について', 'にかわって', 'に対して', 'にとって'],
                correctIndex: 1,
                explanation: '另一位老師代替生病的老師上課。'
            },
            {
                id: 'n3_quiz_ni_kawatte_3',
                sentence: '電話{でんわ}（　）、メールで連絡{れんらく}することが多{おお}くなった。',
                options: ['について', 'にとって', 'にかわって', 'に対して'],
                correctIndex: 2,
                explanation: '用電子郵件取代電話聯絡變多了。'
            },
            {
                id: 'n3_quiz_ni_kawatte_4',
                sentence: '「今日{きょう}の会議{かいぎ}、田中{たなか}さんは？」\n「田中{たなか}さん（　）、山田{やまだ}さんが来{き}ます。」',
                options: ['に対して', 'にかわって', 'について', 'にとって'],
                correctIndex: 1,
                explanation: '對話情境。山田代替田中來。'
            },
            {
                id: 'n3_quiz_ni_kawatte_5',
                sentence: '「誰{だれ}がスピーチする？」\n「社長{しゃちょう}（　）、私{わたし}がします。」',
                options: ['に対して', 'にかわって', 'について', 'にとって'],
                correctIndex: 1,
                explanation: '對話情境。我代替社長演講。'
            }
        ]
    },
    'n3_ni_kawatte_ni_kawari': {
        id: 'n3_ni_kawatte_ni_kawari',
        pattern: 'にかわって / にかわり',
        connection: '名詞{めいし} + にかわって/にかわり',
        translation: '代替...; 代表...; 轉換為...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '兩種形式的用法',
                description: '「にかわって」和「にかわり」意思相同，後者較書面。',
                examples: [
                    { japanese: '監督{かんとく}にかわり、コーチが指示{しじ}を出{だ}した。', chinese: '教練代替監督發出指示。' },
                    { japanese: '紙{かみ}の本{ほん}にかわって電子書籍{でんししょせき}が増{ふ}えている。', chinese: '電子書取代紙本書在增加。' },
                    {
                        japanese: '「この地域{ちいき}、変{か}わったね。」\n「うん、田{た}んぼにかわって住宅{じゅうたく}が建{た}ったんだ。」\n「そうなんだ。」',
                        chinese: '「這地區變了耶。」\n「嗯，住宅取代了稻田。」\n「這樣啊。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「にかわって」和「にかわり」的區別',
            description: '意思相同，語體不同。',
            points: [
                {
                    rule: 'にかわって：口語、書面皆可。',
                    examples: [{ japanese: '彼{かれ}にかわって出{で}る。', chinese: '代替他出席。' }]
                },
                {
                    rule: 'にかわり：較書面、較正式。',
                    examples: [{ japanese: '会長{かいちょう}にかわり挨拶{あいさつ}する。', chinese: '代替會長致詞。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_kawatte_ni_kawari_1',
                sentence: '大臣{だいじん}（　）、副大臣{ふくだいじん}が会見{かいけん}した。',
                options: ['にかわり', 'にとって', 'について', 'に対して'],
                correctIndex: 0,
                explanation: '副大臣代替大臣召開記者會。'
            },
            {
                id: 'n3_quiz_ni_kawatte_ni_kawari_2',
                sentence: '現金{げんきん}（　）、カードで支払{しはら}う人{ひと}が増{ふ}えた。',
                options: ['について', 'にかわって', 'に対して', 'にとって'],
                correctIndex: 1,
                explanation: '用卡片取代現金支付的人增加了。'
            },
            {
                id: 'n3_quiz_ni_kawatte_ni_kawari_3',
                sentence: '石油{せきゆ}（　）、太陽{たいよう}エネルギーが注目{ちゅうもく}されている。',
                options: ['に対して', 'にとって', 'にかわって', 'について'],
                correctIndex: 2,
                explanation: '太陽能取代石油受到關注。'
            },
            {
                id: 'n3_quiz_ni_kawatte_ni_kawari_4',
                sentence: '「社長{しゃちょう}のスピーチは？」\n「社長{しゃちょう}（　）、専務{せんむ}がしました。」',
                options: ['にかわり', 'に対して', 'について', 'にとって'],
                correctIndex: 0,
                explanation: '對話情境。專務代替社長演講。'
            },
            {
                id: 'n3_quiz_ni_kawatte_ni_kawari_5',
                sentence: '「最近{さいきん}、手紙{てがみ}書{か}く？」\n「手紙{てがみ}（　）、LINEを使{つか}うよ。」',
                options: ['にとって', 'について', 'に対して', 'にかわって'],
                correctIndex: 3,
                explanation: '對話情境。用LINE取代寫信。'
            }
        ]
    },
    'n3_ni_kurabete': {
        id: 'n3_ni_kurabete',
        pattern: 'に比{くら}べて',
        connection: '名詞{めいし} + に比{くら}べて',
        translation: '與...相比',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示比較',
                description: '用於比較兩個事物的差異。',
                examples: [
                    { japanese: '去年{きょねん}に比{くら}べて、今年{ことし}は暑{あつ}い。', chinese: '與去年相比，今年更熱。' },
                    { japanese: '兄{あに}に比{くら}べて、弟{おとうと}は背{せ}が高{たか}い。', chinese: '與哥哥相比，弟弟比較高。' },
                    {
                        japanese: '「この店{みせ}、高{たか}くない？」\n「前{まえ}に比{くら}べて、値上{ねあ}げしたね。」\n「そうだね。」',
                        chinese: '「這家店不貴嗎？」\n「與之前相比，漲價了。」\n「對啊。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「に比べて」的用法',
            description: '比較兩者的差異或變化。',
            points: [
                {
                    rule: '常用於時間比較：去年に比べて、以前に比べて。',
                    examples: [{ japanese: '10年前{ねんまえ}に比{くら}べて便利{べんり}になった。', chinese: '與10年前相比變方便了。' }]
                },
                {
                    rule: '也可用於人或事物的比較。',
                    examples: [{ japanese: '東京{とうきょう}に比{くら}べて静{しず}かだ。', chinese: '與東京相比很安靜。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_kurabete_1',
                sentence: '夏{なつ}（　）、冬{ふゆ}は電気代{でんきだい}が高{たか}い。',
                options: ['について', 'に比べて', 'にとって', 'に対して'],
                correctIndex: 1,
                explanation: '與夏天相比，冬天電費貴。'
            },
            {
                id: 'n3_quiz_ni_kurabete_2',
                sentence: '日本{にほん}（　）、この国{くに}は物価{ぶっか}が安{やす}い。',
                options: ['にとって', 'に対して', 'に比べて', 'について'],
                correctIndex: 2,
                explanation: '與日本相比，這個國家物價便宜。'
            },
            {
                id: 'n3_quiz_ni_kurabete_3',
                sentence: '若{わか}い頃{ころ}（　）、体力{たいりょく}が落{お}ちた。',
                options: ['について', 'に比べて', 'にとって', 'に対して'],
                correctIndex: 1,
                explanation: '與年輕時相比，體力下降了。'
            },
            {
                id: 'n3_quiz_ni_kurabete_4',
                sentence: '「日本語{にほんご}上達{じょうたつ}した？」\n「前{まえ}（　）、少{すこ}し上手{じょうず}になったかな。」',
                options: ['について', 'に対して', 'にとって', 'に比べて'],
                correctIndex: 3,
                explanation: '對話情境。與之前相比可能進步了一點。'
            },
            {
                id: 'n3_quiz_ni_kurabete_5',
                sentence: '「この街{まち}、変{か}わった？」\n「10年前{ねんまえ}（　）、ずいぶん発展{はってん}したよ。」',
                options: ['に対して', 'に比べて', 'について', 'にとって'],
                correctIndex: 1,
                explanation: '對話情境。與10年前相比發展了很多。'
            }
        ]
    },
    'n3_ni_kurabete_1': {
        id: 'n3_ni_kurabete_1',
        pattern: 'に比{くら}べて',
        connection: '名詞{めいし} + に比{くら}べて',
        translation: '與...相比',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '比較基準',
                description: '提供比較的基準，說明差異程度。',
                examples: [
                    { japanese: '他{ほか}の店{みせ}に比{くら}べて、ここは安{やす}い。', chinese: '與其他店相比，這裡便宜。' },
                    { japanese: '予想{よそう}に比{くら}べて、簡単{かんたん}だった。', chinese: '與預期相比，很簡單。' },
                    {
                        japanese: '「試験{しけん}どうだった？」\n「前回{ぜんかい}に比{くら}べて、難{むずか}しかった。」\n「そうなんだ。」',
                        chinese: '「考試怎樣？」\n「與上次相比，更難了。」\n「這樣啊。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「に比べて」的比較對象',
            description: '可用於各種比較對象。',
            points: [
                {
                    rule: '時間比較：過去と現在。',
                    examples: [{ japanese: '昔{むかし}に比{くら}べて生活{せいかつ}が楽{らく}になった。', chinese: '與從前相比生活變輕鬆了。' }]
                },
                {
                    rule: '期待比較：予想・期待と結果。',
                    examples: [{ japanese: '思{おも}っていたのに比{くら}べて良{よ}かった。', chinese: '比想像的好。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_kurabete_1_1',
                sentence: '東京{とうきょう}（　）、大阪{おおさか}は食{た}べ物{もの}が安{やす}い。',
                options: ['に比べて', 'について', 'にとって', 'に対して'],
                correctIndex: 0,
                explanation: '與東京相比，大阪食物便宜。'
            },
            {
                id: 'n3_quiz_ni_kurabete_1_2',
                sentence: '期待{きたい}（　）、結果{けっか}は良{よ}かった。',
                options: ['にとって', 'について', 'に比べて', 'に対して'],
                correctIndex: 2,
                explanation: '與期待相比，結果很好。'
            },
            {
                id: 'n3_quiz_ni_kurabete_1_3',
                sentence: '去年{きょねん}の売{う}り上{あ}げ（　）、今年{ことし}は増{ふ}えた。',
                options: ['について', 'に比べて', 'にとって', 'に対して'],
                correctIndex: 1,
                explanation: '與去年的銷售額相比，今年增加了。'
            },
            {
                id: 'n3_quiz_ni_kurabete_1_4',
                sentence: '「彼{かれ}、変{か}わった？」\n「前{まえ}（　）、明{あか}るくなったね。」',
                options: ['について', 'にとって', 'に比べて', 'に対して'],
                correctIndex: 2,
                explanation: '對話情境。與之前相比變開朗了。'
            },
            {
                id: 'n3_quiz_ni_kurabete_1_5',
                sentence: '「新{あたら}しいアパート、どう？」\n「前{まえ}のところ（　）、広{ひろ}いよ。」',
                options: ['にとって', 'に比べて', 'に対して', 'について'],
                correctIndex: 1,
                explanation: '對話情境。與之前的地方相比很大。'
            }
        ]
    },
    'n3_ni_nareru': {
        id: 'n3_ni_nareru',
        pattern: 'に慣{な}れる',
        connection: '名詞{めいし} + に慣{な}れる',
        translation: '習慣...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示習慣某事',
                description: '表示經過一段時間後變得習慣某事物。',
                examples: [
                    { japanese: '日本{にほん}の生活{せいかつ}に慣{な}れた。', chinese: '習慣了日本的生活。' },
                    { japanese: '新{あたら}しい仕事{しごと}に慣{な}れるまで時間{じかん}がかかった。', chinese: '習慣新工作花了時間。' },
                    {
                        japanese: '「日本{にほん}、どう？」\n「最初{さいしょ}は大変{たいへん}だったけど、もう慣{な}れたよ。」\n「よかった。」',
                        chinese: '「日本怎樣？」\n「剛開始很辛苦，但已經習慣了。」\n「太好了。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「に慣れる」的用法',
            description: '表示適應某環境或事物。',
            points: [
                {
                    rule: '接環境：生活に慣れる、気候に慣れる。',
                    examples: [{ japanese: '寒{さむ}さに慣{な}れた。', chinese: '習慣了寒冷。' }]
                },
                {
                    rule: '接動作（動詞連用形）：することに慣れる。',
                    examples: [{ japanese: '早起{はやお}きに慣{な}れた。', chinese: '習慣了早起。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_nareru_1',
                sentence: 'この辛{から}い料理{りょうり}（　）慣{な}れた。',
                options: ['が', 'を', 'で', 'に'],
                correctIndex: 3,
                explanation: '習慣了這道辣的料理。'
            },
            {
                id: 'n3_quiz_ni_nareru_2',
                sentence: '一人暮{ひとりぐ}らし（　）慣{な}れるのに3ヶ月{かげつ}かかった。',
                options: ['で', 'が', 'に', 'を'],
                correctIndex: 2,
                explanation: '習慣一個人住花了3個月。'
            },
            {
                id: 'n3_quiz_ni_nareru_3',
                sentence: '新{あたら}しい環境{かんきょう}（　）なかなか慣{な}れない。',
                options: ['を', 'に', 'が', 'で'],
                correctIndex: 1,
                explanation: '怎麼也不習慣新環境。'
            },
            {
                id: 'n3_quiz_ni_nareru_4',
                sentence: '「日本語{にほんご}の敬語{けいご}、難{むずか}しい？」\n「最初{さいしょ}は難{むずか}しかったけど、もう（　）慣{な}れたよ。」',
                options: ['に', 'で', 'を', 'が'],
                correctIndex: 0,
                explanation: '對話情境。已經習慣了。'
            },
            {
                id: 'n3_quiz_ni_nareru_5',
                sentence: '「満員{まんいん}電車{でんしゃ}、嫌{いや}じゃない？」\n「もう（　）慣{な}れちゃった。」',
                options: ['に', 'を', 'で', 'が'],
                correctIndex: 0,
                explanation: '對話情境。已經習慣了。'
            }
        ]
    },
    'n3_ni_nareru_1': {
        id: 'n3_ni_nareru_1',
        pattern: 'に慣{な}れる',
        connection: '名詞{めいし} + に慣{な}れる',
        translation: '習慣...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '適應與習慣',
                description: '表示從不熟悉到熟悉的過程。',
                examples: [
                    { japanese: '都会{とかい}の生活{せいかつ}に慣{な}れた。', chinese: '習慣了都市生活。' },
                    { japanese: '使{つか}い方{かた}に慣{な}れるまで練習{れんしゅう}した。', chinese: '練習到習慣使用方法。' },
                    {
                        japanese: '「新{あたら}しい仕事{しごと}、大変{たいへん}？」\n「うん、まだ慣{な}れないことが多{おお}い。」\n「頑張{がんば}って。」',
                        chinese: '「新工作辛苦嗎？」\n「嗯，還有很多不習慣的事。」\n「加油。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「慣れる」相關表達',
            description: '可與其他表達組合使用。',
            points: [
                {
                    rule: '慣れるまで：直到習慣。',
                    examples: [{ japanese: '慣{な}れるまで時間{じかん}がかかる。', chinese: '習慣需要時間。' }]
                },
                {
                    rule: '慣れてきた：漸漸習慣。',
                    examples: [{ japanese: 'だんだん慣{な}れてきた。', chinese: '漸漸習慣了。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_nareru_1_1',
                sentence: 'パソコンの操作{そうさ}に（　）。',
                options: ['慣えた', '慣いた', '慣った', '慣れた'],
                correctIndex: 3,
                explanation: '習慣了電腦操作。'
            },
            {
                id: 'n3_quiz_ni_nareru_1_2',
                sentence: 'まだこの町{まち}に（　）いない。',
                options: ['慣れて', '慣えて', '慣いて', '慣って'],
                correctIndex: 0,
                explanation: '還沒習慣這個城市。'
            },
            {
                id: 'n3_quiz_ni_nareru_1_3',
                sentence: '日本{にほん}の食事{しょくじ}に（　）まで1ヶ月{かげつ}かかった。',
                options: ['慣れる', '慣る', '慣える', '慣いる'],
                correctIndex: 0,
                explanation: '習慣日本飲食花了1個月。'
            },
            {
                id: 'n3_quiz_ni_nareru_1_4',
                sentence: '「運転{うんてん}{うんてん}できる？」\n「うん、もう（　）きたよ。」',
                options: ['慣って', '慣いて', '慣れて', '慣えて'],
                correctIndex: 2,
                explanation: '對話情境。已經漸漸習慣了。'
            },
            {
                id: 'n3_quiz_ni_nareru_1_5',
                sentence: '「寮{りょう}生活{せいかつ}、大変{たいへん}？」\n「最初{さいしょ}は大変{たいへん}だったけど、今{いま}は（　）。」',
                options: ['慣いた', '慣った', '慣えた', '慣れた'],
                correctIndex: 3,
                explanation: '對話情境。現在習慣了。'
            }
        ]
    },
    'n3_ni_oite': {
        id: 'n3_ni_oite',
        pattern: 'において',
        connection: '名詞{めいし} + において',
        translation: '在...; 於... (時間/地點/場合)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示場所或時間',
                description: '較正式地表示某事發生的場所、時間或領域。',
                examples: [
                    { japanese: '会議{かいぎ}は3階{かい}において行{おこな}われます。', chinese: '會議在3樓舉行。' },
                    { japanese: '現代{げんだい}社会{しゃかい}においてはスマホが必要{ひつよう}だ。', chinese: '在現代社會智慧型手機是必要的。' },
                    {
                        japanese: '「この研究{けんきゅう}、どこで発表{はっぴょう}するの？」\n「国際{こくさい}会議{かいぎ}において発表{はっぴょう}します。」\n「すごいね。」',
                        chinese: '「這個研究在哪裡發表？」\n「在國際會議上發表。」\n「好厲害。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「において」的用法',
            description: '「で」的書面語形式。',
            points: [
                {
                    rule: '場所：～で → ～において。',
                    examples: [{ japanese: '東京{とうきょう}において開催{かいさい}される。', chinese: '在東京舉辦。' }]
                },
                {
                    rule: '領域：表示某個範疇或方面。',
                    examples: [{ japanese: '経済{けいざい}において重要{じゅうよう}だ。', chinese: '在經濟方面很重要。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_oite_1',
                sentence: 'オリンピックは東京{とうきょう}（　）開催{かいさい}された。',
                options: ['について', 'において', 'に対して', 'にとって'],
                correctIndex: 1,
                explanation: '奧運在東京舉辦。'
            },
            {
                id: 'n3_quiz_ni_oite_2',
                sentence: '歴史{れきし}（　）、この事件{じけん}は重要{じゅうよう}だ。',
                options: ['において', 'について', 'にとって', 'に対して'],
                correctIndex: 0,
                explanation: '在歷史上這個事件很重要。'
            },
            {
                id: 'n3_quiz_ni_oite_3',
                sentence: '日本{にほん}（　）、地震{じしん}が多{おお}い。',
                options: ['にとって', 'において', 'に対して', 'について'],
                correctIndex: 1,
                explanation: '在日本地震很多。'
            },
            {
                id: 'n3_quiz_ni_oite_4',
                sentence: '「式典{しきてん}はどこ？」\n「市民{しみん}ホール（　）行{おこな}われます。」',
                options: ['に対して', 'にとって', 'において', 'について'],
                correctIndex: 2,
                explanation: '對話情境。在市民會館舉行。'
            },
            {
                id: 'n3_quiz_ni_oite_5',
                sentence: '「この分野{ぶんや}、詳{くわ}しい？」\n「医学{いがく}（　）は詳{くわ}しくないです。」',
                options: ['にとって', 'において', 'について', 'に対して'],
                correctIndex: 1,
                explanation: '對話情境。在醫學方面不熟。'
            }
        ]
    },
    'n3_ni_oite_ni_okeru': {
        id: 'n3_ni_oite_ni_okeru',
        pattern: 'において / における',
        connection: '名詞{めいし} + において/における',
        translation: '在...; 於... (時間/地點/場合)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '兩種形式的區別',
                description: '「において」後接動詞，「における」後接名詞。',
                examples: [
                    { japanese: '国際{こくさい}会議{かいぎ}における発言{はつげん}。', chinese: '在國際會議上的發言。' },
                    { japanese: '日本{にほん}における外国人{がいこくじん}の生活{せいかつ}。', chinese: '在日本的外國人生活。' },
                    {
                        japanese: '「この問題{もんだい}、どう思{おも}う？」\n「現代{げんだい}における重要{じゅうよう}な課題{かだい}だと思{おも}う。」\n「そうだね。」',
                        chinese: '「你怎麼看這個問題？」\n「我認為是現代的重要課題。」\n「對啊。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「において」和「における」的區別',
            description: '功能不同。',
            points: [
                {
                    rule: 'において + 動詞：作狀語。',
                    examples: [{ japanese: '会場{かいじょう}において説明{せつめい}する。', chinese: '在會場說明。' }]
                },
                {
                    rule: 'における + 名詞：作定語。',
                    examples: [{ japanese: '会場{かいじょう}における説明{せつめい}。', chinese: '在會場的說明。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_oite_ni_okeru_1',
                sentence: '日本{にほん}（　）生活{せいかつ}は便利{べんり}だ。',
                options: ['に対して', 'において', 'における', 'にとって'],
                correctIndex: 2,
                explanation: '在日本的生活很方便。'
            },
            {
                id: 'n3_quiz_ni_oite_ni_okeru_2',
                sentence: '会社{かいしゃ}（　）地位{ちい}は高{たか}い。',
                options: ['に対して', 'における', 'にとって', 'において'],
                correctIndex: 1,
                explanation: '在公司的地位很高。'
            },
            {
                id: 'n3_quiz_ni_oite_ni_okeru_3',
                sentence: '世界{せかい}（　）日本{にほん}の役割{やくわり}は大{おお}きい。',
                options: ['における', 'にとって', 'において', 'に対して'],
                correctIndex: 0,
                explanation: '日本在世界的角色很大。'
            },
            {
                id: 'n3_quiz_ni_oite_ni_okeru_4',
                sentence: '「この論文{ろんぶん}、テーマは何{なに}？」\n「教育{きょういく}（　）問題{もんだい}についてです。」',
                options: ['にとって', 'において', 'に対して', 'における'],
                correctIndex: 3,
                explanation: '對話情境。關於教育領域的問題。'
            },
            {
                id: 'n3_quiz_ni_oite_ni_okeru_5',
                sentence: '「あの選手{せんしゅ}、すごいね。」\n「オリンピック（　）成績{せいせき}は最高{さいこう}だよ。」',
                options: ['における', 'に対して', 'において', 'にとって'],
                correctIndex: 0,
                explanation: '對話情境。在奧運的成績是最好的。'
            }
        ]
    },
    'n3_ni_shitagatte': {
        id: 'n3_ni_shitagatte',
        pattern: 'にしたがって',
        connection: '名詞{めいし}/動詞{どうし}辭書{じしょ}形{けい} + にしたがって',
        translation: '隨著...; 遵照...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示伴隨變化',
                description: '表示隨著某事的發展，另一事也發生變化。',
                examples: [
                    { japanese: '年{とし}を取{と}るにしたがって、体力{たいりょく}が落{お}ちる。', chinese: '隨著年齡增長，體力下降。' },
                    { japanese: '説明{せつめい}にしたがって操作{そうさ}してください。', chinese: '請按照說明操作。' },
                    {
                        japanese: '「日本語{にほんご}、上手{じょうず}になった？」\n「勉強{べんきょう}するにしたがって、少{すこ}しずつね。」\n「頑張{がんば}ってるね。」',
                        chinese: '「日語進步了嗎？」\n「隨著學習，一點一點地進步。」\n「你很努力呢。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「にしたがって」的兩種用法',
            description: '可表示變化或遵從。',
            points: [
                {
                    rule: '變化：A にしたがって B も変わる。',
                    examples: [{ japanese: '物価{ぶっか}が上{あ}がるにしたがって生活{せいかつ}が苦{くる}しくなる。', chinese: '隨著物價上漲生活變苦。' }]
                },
                {
                    rule: '遵從：指示・規則にしたがって行動する。',
                    examples: [{ japanese: 'ルールにしたがってプレイする。', chinese: '遵照規則進行遊戲。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_shitagatte_1',
                sentence: '時間{じかん}が経{た}つ（　）、記憶{きおく}が薄{うす}れる。',
                options: ['にとって', 'にしたがって', 'について', 'に対して'],
                correctIndex: 1,
                explanation: '隨著時間流逝，記憶變淡。'
            },
            {
                id: 'n3_quiz_ni_shitagatte_2',
                sentence: '先生{せんせい}の指示{しじ}（　）行動{こうどう}してください。',
                options: ['にしたがって', 'にとって', 'について', 'に対して'],
                correctIndex: 0,
                explanation: '請遵照老師的指示行動。'
            },
            {
                id: 'n3_quiz_ni_shitagatte_3',
                sentence: '技術{ぎじゅつ}が進歩{しんぽ}する（　）、生活{せいかつ}が便利{べんり}になる。',
                options: ['にとって', 'に対して', 'にしたがって', 'について'],
                correctIndex: 2,
                explanation: '隨著技術進步，生活變方便。'
            },
            {
                id: 'n3_quiz_ni_shitagatte_4',
                sentence: '「この薬{くすり}、どう飲{の}むの？」\n「説明書{せつめいしょ}（　）飲{の}んでね。」',
                options: ['について', 'にしたがって', 'に対して', 'にとって'],
                correctIndex: 1,
                explanation: '對話情境。請按照說明書服用。'
            },
            {
                id: 'n3_quiz_ni_shitagatte_5',
                sentence: '「日本語{にほんご}難{むずか}しい？」\n「勉強{べんきょう}する（　）、面白{おもしろ}くなってきた。」',
                options: ['にしたがって', 'に対して', 'にとって', 'について'],
                correctIndex: 0,
                explanation: '對話情境。隨著學習變得有趣了。'
            }
        ]
    },
    'n3_ni_shite_mo': {
        id: 'n3_ni_shite_mo',
        pattern: 'にしても',
        connection: '普通{ふつう}形{けい} + にしても',
        translation: '即使...; 就算...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示讓步',
                description: '表示即使假設前項成立，後項仍然成立或不受影響。',
                examples: [
                    { japanese: '忙{いそが}しいにしても、連絡{れんらく}ぐらいはできるだろう。', chinese: '即使忙，至少也能聯絡吧。' },
                    { japanese: '安{やす}いにしても、品質{ひんしつ}が悪{わる}ければ買{か}わない。', chinese: '即使便宜，品質不好就不買。' },
                    {
                        japanese: '「彼{かれ}、来{こ}ないかな。」\n「来{く}るにしても、遅{おく}れると思{おも}うよ。」\n「そうだね。」',
                        chinese: '「他不會來嗎？」\n「即使來，我想也會遲到。」\n「也是。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「にしても」的用法',
            description: '表示讓步條件。',
            points: [
                {
                    rule: '假設讓步：即使A，B也...。',
                    examples: [{ japanese: '行{い}くにしても、遅{おく}れる。', chinese: '即使去，也會遲到。' }]
                },
                {
                    rule: '列舉讓步：AにしてもBにしても。',
                    examples: [{ japanese: '行{い}くにしても行{い}かないにしても連絡{れんらく}して。', chinese: '不管去不去都請聯絡。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_shite_mo_1',
                sentence: '高{たか}い（　）、買{か}いたい。',
                options: ['について', 'に対して', 'にとって', 'にしても'],
                correctIndex: 3,
                explanation: '即使貴也想買。'
            },
            {
                id: 'n3_quiz_ni_shite_mo_2',
                sentence: '難{むずか}しい（　）、やってみる価値{かち}はある。',
                options: ['にしても', 'に対して', 'にとって', 'について'],
                correctIndex: 0,
                explanation: '即使難也值得試試。'
            },
            {
                id: 'n3_quiz_ni_shite_mo_3',
                sentence: '成功{せいこう}する（　）、失敗{しっぱい}する（　）、やってみよう。',
                options: ['にとって', 'について', 'に対して', 'にしても'],
                correctIndex: 3,
                explanation: '不管成功還是失敗，都試試看。'
            },
            {
                id: 'n3_quiz_ni_shite_mo_4',
                sentence: '「明日{あした}、天気{てんき}悪{わる}いかも。」\n「雨{あめ}（　）、行{い}くよ。」',
                options: ['について', 'に対して', 'にしても', 'にとって'],
                correctIndex: 2,
                explanation: '對話情境。即使下雨也去。'
            },
            {
                id: 'n3_quiz_ni_shite_mo_5',
                sentence: '「断{ことわ}られるかな。」\n「断{ことわ}られる（　）、聞{き}いてみよう。」',
                options: ['にしても', 'にとって', 'に対して', 'について'],
                correctIndex: 0,
                explanation: '對話情境。即使被拒絕也問問看。'
            }
        ]
    },
    'n3_ni_shite_wa': {
        id: 'n3_ni_shite_wa',
        pattern: 'にしては',
        connection: '名詞{めいし}/動詞{どうし}普通{ふつう}形{けい} + にしては',
        translation: '就...而言; 雖然...但是...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示出乎預期',
                description: '表示結果與根據前項推測的預期不同。',
                examples: [
                    { japanese: '初{はじ}めてにしては上手{じょうず}だ。', chinese: '就第一次而言做得很好。' },
                    { japanese: '値段{ねだん}にしては、質{しつ}がいい。', chinese: '就價格而言，品質很好。' },
                    {
                        japanese: '「彼{かれ}、日本語{にほんご}上手{じょうず}だね。」\n「留学生{りゅうがくせい}にしては、本当{ほんとう}に上手{じょうず}だよね。」\n「うん。」',
                        chinese: '「他日語好厲害。」\n「就留學生而言，真的很厲害。」\n「嗯。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「にしては」的用法',
            description: '表示與一般預期不同的評價。',
            points: [
                {
                    rule: '正面評價：比預期好。',
                    examples: [{ japanese: '安{やす}いにしては美味{おい}しい。', chinese: '就便宜而言很好吃。' }]
                },
                {
                    rule: '負面評價：比預期差。',
                    examples: [{ japanese: 'プロにしては下手{へた}だ。', chinese: '就專業人士而言很差。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_shite_wa_1',
                sentence: '彼{かれ}は日本人{にほんじん}（　）、英語{えいご}が上手{じょうず}だ。',
                options: ['について', 'にしては', 'に対して', 'にとって'],
                correctIndex: 1,
                explanation: '就日本人而言，他英語很好。'
            },
            {
                id: 'n3_quiz_ni_shite_wa_2',
                sentence: 'この店{みせ}は安{やす}い（　）、料理{りょうり}がおいしい。',
                options: ['について', 'にとって', 'にしては', 'に対して'],
                correctIndex: 2,
                explanation: '這家店就便宜而言料理很好吃。'
            },
            {
                id: 'n3_quiz_ni_shite_wa_3',
                sentence: '初心者{しょしんしゃ}（　）、よくできた。',
                options: ['に対して', 'について', 'にしては', 'にとって'],
                correctIndex: 2,
                explanation: '就初學者而言做得很好。'
            },
            {
                id: 'n3_quiz_ni_shite_wa_4',
                sentence: '「この絵{え}、誰{だれ}が描{か}いたの？」\n「子供{こども}が描{か}いたの。子供{こども}（　）上手{じょうず}でしょ。」',
                options: ['にしては', 'にとって', 'に対して', 'について'],
                correctIndex: 0,
                explanation: '對話情境。就小孩而言畫得很好吧。'
            },
            {
                id: 'n3_quiz_ni_shite_wa_5',
                sentence: '「この映画{えいが}、どう？」\n「低予算{ていよさん}（　）、よくできてるよ。」',
                options: ['について', 'にとって', 'にしては', 'に対して'],
                correctIndex: 2,
                explanation: '對話情境。就低預算而言拍得很好。'
            }
        ]
    },
    'n3_ni_taishite': {
        id: 'n3_ni_taishite',
        pattern: 'に対{たい}して',
        connection: '名詞{めいし} + に対{たい}して',
        translation: '對...; 對於...; 與...相反',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示對象',
                description: '表示動作或態度的對象。',
                examples: [
                    { japanese: '先生{せんせい}に対{たい}して失礼{しつれい}だ。', chinese: '對老師失禮。' },
                    { japanese: '彼{かれ}は誰{だれ}に対{たい}しても親切{しんせつ}だ。', chinese: '他對誰都很親切。' },
                    {
                        japanese: '「彼{かれ}、厳{きび}しいね。」\n「部下{ぶか}に対{たい}しては厳{きび}しいけど、優{やさ}しい人{ひと}だよ。」\n「そうなんだ。」',
                        chinese: '「他好嚴格。」\n「對部下雖然嚴格，但是個好人。」\n「這樣啊。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「に対して」的多種用法',
            description: '可表示對象或對比。',
            points: [
                {
                    rule: '對象：表示動作的對象。',
                    examples: [{ japanese: '質問{しつもん}に対{たい}して答{こた}える。', chinese: '回答問題。' }]
                },
                {
                    rule: '對比：表示兩者的對照。',
                    examples: [{ japanese: '兄{あに}が内向的{ないこうてき}なのに対{たい}して、弟{おとうと}は外向的{がいこうてき}だ。', chinese: '哥哥內向，相對地弟弟外向。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_taishite_1',
                sentence: 'お客様{きゃくさま}（　）丁寧{ていねい}に接{せっ}する。',
                options: ['について', 'にとって', 'にしては', 'に対して'],
                correctIndex: 3,
                explanation: '對客人態度要有禮貌。'
            },
            {
                id: 'n3_quiz_ni_taishite_2',
                sentence: '親{おや}（　）感謝{かんしゃ}している。',
                options: ['にとって', 'にしては', 'に対して', 'について'],
                correctIndex: 2,
                explanation: '對父母感謝。'
            },
            {
                id: 'n3_quiz_ni_taishite_3',
                sentence: 'この問題{もんだい}（　）、様々{さまざま}な意見{いけん}がある。',
                options: ['に対して', 'にとって', 'について', 'にしては'],
                correctIndex: 0,
                explanation: '對於這個問題有各種意見。'
            },
            {
                id: 'n3_quiz_ni_taishite_4',
                sentence: '「彼{かれ}、どんな人{ひと}？」\n「年上{としうえ}（　）も敬語{けいご}を使{つか}わないんだ。」',
                options: ['にしては', 'にとって', 'に対して', 'について'],
                correctIndex: 2,
                explanation: '對話情境。對年長者也不用敬語。'
            },
            {
                id: 'n3_quiz_ni_taishite_5',
                sentence: '「この政策{せいさく}、反対{はんたい}意見{いけん}ある？」\n「多{おお}くの市民{しみん}がこの政策{せいさく}（　）反対{はんたい}しています。」',
                options: ['にしては', 'に対して', 'について', 'にとって'],
                correctIndex: 1,
                explanation: '對話情境。很多市民反對這政策。'
            }
        ]
    },
    'n3_ni_taishite_1': {
        id: 'n3_ni_taishite_1',
        pattern: 'に対{たい}して',
        connection: '名詞{めいし} + に対{たい}して',
        translation: '對...; 對於...; 與...相反',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '對比與對象',
                description: '用於表示態度對象或進行對比。',
                examples: [
                    { japanese: '日本{にほん}が島国{しまぐに}なのに対{たい}して、中国{ちゅうごく}は大陸{たいりく}だ。', chinese: '日本是島國，相對地中國是大陸。' },
                    { japanese: '批判{ひはん}に対{たい}して反論{はんろん}した。', chinese: '對批評進行了反駁。' },
                    {
                        japanese: '「兄弟{きょうだい}で性格{せいかく}違{ちが}う？」\n「兄{あに}が静{しず}かなのに対{たい}して、弟{おとうと}はうるさいよ。」\n「そうなんだ。」',
                        chinese: '「兄弟性格不同？」\n「哥哥安靜，相對地弟弟很吵。」\n「這樣啊。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「に対して」的對比用法',
            description: '用於對照兩者的不同特點。',
            points: [
                {
                    rule: '對比結構：Aは～なのに対して、Bは～だ。',
                    examples: [{ japanese: '夏{なつ}が暑{あつ}いのに対{たい}して、冬{ふゆ}は寒{さむ}い。', chinese: '夏天熱，相對地冬天冷。' }]
                },
                {
                    rule: '態度對象：人や物事に対する態度。',
                    examples: [{ japanese: '自然{しぜん}に対{たい}する態度{たいど}。', chinese: '對自然的態度。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_taishite_1_1',
                sentence: '都会{とかい}が便利{べんり}なの（　）、田舎{いなか}は不便{ふべん}だ。',
                options: ['について', 'にしては', 'にとって', 'に対して'],
                correctIndex: 3,
                explanation: '都市方便，相對地鄉下不便。'
            },
            {
                id: 'n3_quiz_ni_taishite_1_2',
                sentence: '環境{かんきょう}問題{もんだい}（　）真剣{しんけん}に取{と}り組{く}む。',
                options: ['にとって', 'にしては', 'に対して', 'について'],
                correctIndex: 2,
                explanation: '認真面對環境問題。'
            },
            {
                id: 'n3_quiz_ni_taishite_1_3',
                sentence: '賛成{さんせい}意見{いけん}（　）反対{はんたい}意見{いけん}もある。',
                options: ['について', 'にとって', 'に対して', 'にしては'],
                correctIndex: 2,
                explanation: '對贊成意見也有反對意見。'
            },
            {
                id: 'n3_quiz_ni_taishite_1_4',
                sentence: '「兄弟{きょうだい}似{に}てる？」\n「姉{あね}が明{あか}るいの（　）、妹{いもうと}は静{しず}かだよ。」',
                options: ['に対して', 'について', 'にとって', 'にしては'],
                correctIndex: 0,
                explanation: '對話情境。姐姐開朗，相對地妹妹安靜。'
            },
            {
                id: 'n3_quiz_ni_taishite_1_5',
                sentence: '「この提案{ていあん}どう思{おも}う？」\n「一部{いちぶ}の人{ひと}はこの提案{ていあん}（　）否定的{ひていてき}だね。」',
                options: ['について', 'にしては', 'にとって', 'に対して'],
                correctIndex: 3,
                explanation: '對話情境。一部分人對這提案持否定態度。'
            }
        ]
    },
    'n3_ni_totte': {
        id: 'n3_ni_totte',
        pattern: 'にとって',
        connection: '名詞{めいし} + にとって',
        translation: '對...而言; 就...來說',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示立場或觀點',
                description: '表示從某人的立場或觀點來看。',
                examples: [
                    { japanese: '私{わたし}にとって日本語{にほんご}は難{むずか}しい。', chinese: '對我來說日語很難。' },
                    { japanese: '彼{かれ}にとって仕事{しごと}が一番{いちばん}大切{たいせつ}だ。', chinese: '對他來說工作最重要。' },
                    {
                        japanese: '「この問題{もんだい}、難{むずか}しい？」\n「私{わたし}にとっては簡単{かんたん}だよ。」\n「すごいね。」',
                        chinese: '「這問題難嗎？」\n「對我來說很簡單。」\n「好厲害。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「にとって」的用法',
            description: '表示主觀評價的立場。',
            points: [
                {
                    rule: '常接評價：難しい、大切、重要など。',
                    examples: [{ japanese: '学生{がくせい}にとって試験{しけん}は重要{じゅうよう}だ。', chinese: '對學生來說考試很重要。' }]
                },
                {
                    rule: '強調個人觀點：Aにとって～、Bにとって～。',
                    examples: [{ japanese: '子供{こども}にとっては遊{あそ}びが大切{たいせつ}だ。', chinese: '對小孩來說玩樂很重要。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_totte_1',
                sentence: '外国人{がいこくじん}（　）、敬語{けいご}は難{むずか}しい。',
                options: ['にしては', 'に対して', 'にとって', 'について'],
                correctIndex: 2,
                explanation: '對外國人來說敬語很難。'
            },
            {
                id: 'n3_quiz_ni_totte_2',
                sentence: '健康{けんこう}は誰{だれ}（　）も大切{たいせつ}だ。',
                options: ['にとって', 'に対して', 'について', 'にしては'],
                correctIndex: 0,
                explanation: '健康對任何人來說都很重要。'
            },
            {
                id: 'n3_quiz_ni_totte_3',
                sentence: '子供{こども}（　）、遊{あそ}ぶことは大事{だいじ}だ。',
                options: ['について', 'にとって', 'にしては', 'に対して'],
                correctIndex: 1,
                explanation: '對小孩來說玩耍很重要。'
            },
            {
                id: 'n3_quiz_ni_totte_4',
                sentence: '「この仕事{しごと}、難{むずか}しい？」\n「私{わたし}（　）は難{むずか}しくないよ。」',
                options: ['について', 'にしては', 'に対して', 'にとって'],
                correctIndex: 3,
                explanation: '對話情境。對我來說不難。'
            },
            {
                id: 'n3_quiz_ni_totte_5',
                sentence: '「彼女{かのじょ}、何{なに}が大事{だいじ}？」\n「彼女{かのじょ}（　）は家族{かぞく}が一番{いちばん}だよ。」',
                options: ['に対して', 'にしては', 'にとって', 'について'],
                correctIndex: 2,
                explanation: '對話情境。對她來說家人最重要。'
            }
        ]
    },
    'n3_ni_tsuite': {
        id: 'n3_ni_tsuite',
        pattern: 'について',
        connection: '名詞{めいし} + について',
        translation: '關於...; 對於...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示話題或主題',
                description: '表示談論、思考、調查等的話題。',
                examples: [
                    { japanese: '日本{にほん}の文化{ぶんか}について勉強{べんきょう}している。', chinese: '正在學習關於日本文化。' },
                    { japanese: 'この問題{もんだい}について話{はな}し合{あ}いましょう。', chinese: '讓我們討論關於這個問題。' },
                    {
                        japanese: '「何{なに}を調{しら}べてるの？」\n「日本{にほん}の歴史{れきし}について調{しら}べてるんだ。」\n「へえ。」',
                        chinese: '「你在查什麼？」\n「在查關於日本歷史。」\n「是嗎。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「について」的用法',
            description: '最常見的表示話題的表達方式。',
            points: [
                {
                    rule: '常用動詞：話す、考える、調べる、書くなど。',
                    examples: [{ japanese: '将来{しょうらい}について考{かんが}える。', chinese: '思考關於將來。' }]
                },
                {
                    rule: '作定語時用「についての」。',
                    examples: [{ japanese: '環境{かんきょう}についてのレポート。', chinese: '關於環境的報告。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_tsuite_1',
                sentence: 'この計画{けいかく}（　）説明{せつめい}してください。',
                options: ['にしては', 'に対して', 'について', 'にとって'],
                correctIndex: 2,
                explanation: '請說明關於這個計劃。'
            },
            {
                id: 'n3_quiz_ni_tsuite_2',
                sentence: '彼{かれ}（　）何{なに}も知{し}らない。',
                options: ['にとって', 'に対して', 'について', 'にしては'],
                correctIndex: 2,
                explanation: '關於他什麼都不知道。'
            },
            {
                id: 'n3_quiz_ni_tsuite_3',
                sentence: 'この事件{じけん}（　）新聞{しんぶん}で読{よ}んだ。',
                options: ['にとって', 'にしては', 'に対して', 'について'],
                correctIndex: 3,
                explanation: '在報紙上讀到關於這件事。'
            },
            {
                id: 'n3_quiz_ni_tsuite_4',
                sentence: '「何{なに}か質問{しつもん}ある？」\n「給料{きゅうりょう}（　）聞{き}きたいです。」',
                options: ['にしては', 'に対して', 'について', 'にとって'],
                correctIndex: 2,
                explanation: '對話情境。想問關於薪水的事。'
            },
            {
                id: 'n3_quiz_ni_tsuite_5',
                sentence: '「何{なに}を書{か}いてるの？」\n「旅行{りょこう}（　）のブログを書{か}いてるんだ。」',
                options: ['について', 'にしては', 'にとって', 'に対して'],
                correctIndex: 0,
                explanation: '對話情境。在寫關於旅行的部落格。'
            }
        ]
    },
    'n3_ni_tsurete': {
        id: 'n3_ni_tsurete',
        pattern: 'につれて',
        connection: '動詞{どうし}辭書{じしょ}形{けい}/名詞{めいし} + につれて',
        translation: '隨著...; 伴隨而來的是...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示伴隨變化',
                description: '表示隨著一方的變化，另一方也發生變化。',
                examples: [
                    { japanese: '年{とし}を取{と}るにつれて、体力{たいりょく}が落{お}ちる。', chinese: '隨著年齡增長，體力下降。' },
                    { japanese: '時間{じかん}が経{た}つにつれて、記憶{きおく}が薄{うす}れる。', chinese: '隨著時間流逝，記憶變淡。' },
                    {
                        japanese: '「日本語{にほんご}難{むずか}しくなった？」\n「レベルが上{あ}がるにつれて難{むずか}しくなるね。」\n「そうだよね。」',
                        chinese: '「日語變難了嗎？」\n「隨著程度提高變難了。」\n「是啊。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「につれて」vs「にしたがって」',
            description: '兩者都表示伴隨變化，但用法略有不同。',
            points: [
                {
                    rule: 'につれて：強調自然發生的變化。',
                    examples: [{ japanese: '春{はる}が近{ちか}づくにつれて暖{あたた}かくなる。', chinese: '隨著春天接近變暖。' }]
                },
                {
                    rule: 'にしたがって：可表示變化或遵從。',
                    examples: [{ japanese: '指示{しじ}にしたがって行動{こうどう}する。', chinese: '遵照指示行動。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_tsurete_1',
                sentence: '経験{けいけん}を積{つ}む（　）、自信{じしん}がつく。',
                options: ['について', 'に対して', 'につれて', 'にとって'],
                correctIndex: 2,
                explanation: '隨著累積經驗，變得有自信。'
            },
            {
                id: 'n3_quiz_ni_tsurete_2',
                sentence: '都市化{としか}が進{すす}む（　）、自然{しぜん}が減{へ}る。',
                options: ['に対して', 'について', 'につれて', 'にとって'],
                correctIndex: 2,
                explanation: '隨著都市化發展，自然減少。'
            },
            {
                id: 'n3_quiz_ni_tsurete_3',
                sentence: '技術{ぎじゅつ}が発展{はってん}する（　）、生活{せいかつ}が便利{べんり}になる。',
                options: ['について', 'に対して', 'につれて', 'にとって'],
                correctIndex: 2,
                explanation: '隨著技術發展，生活變方便。'
            },
            {
                id: 'n3_quiz_ni_tsurete_4',
                sentence: '「最近{さいきん}疲{つか}れやすくない？」\n「年{とし}を取{と}る（　）ね。」',
                options: ['について', 'に対して', 'につれて', 'にとって'],
                correctIndex: 2,
                explanation: '對話情境。隨著年齡增長。'
            },
            {
                id: 'n3_quiz_ni_tsurete_5',
                sentence: '「彼{かれ}、変{か}わった？」\n「責任{せきにん}が増{ふ}える（　）、真面目{まじめ}になったよ。」',
                options: ['に対して', 'につれて', 'について', 'にとって'],
                correctIndex: 1,
                explanation: '對話情境。隨著責任增加變認真了。'
            }
        ]
    },
    'n3_ni_wa': {
        id: 'n3_ni_wa',
        pattern: 'には',
        connection: '動詞{どうし}辭書{じしょ}形{けい}/名詞{めいし} + には',
        translation: '對於...來說; 為了...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示目的或條件',
                description: '表示為了某目的所需要的條件或手段。',
                examples: [
                    { japanese: '健康{けんこう}には運動{うんどう}が大切{たいせつ}だ。', chinese: '對於健康來說運動很重要。' },
                    { japanese: 'この仕事{しごと}を終{お}わらせるには時間{じかん}がかかる。', chinese: '要完成這工作需要時間。' },
                    {
                        japanese: '「日本語{にほんご}が上手{じょうず}になりたい。」\n「上手{じょうず}になるには練習{れんしゅう}が必要{ひつよう}だよ。」\n「頑張{がんば}る。」',
                        chinese: '「想把日語學好。」\n「要變好需要練習。」\n「我會努力的。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「には」的用法',
            description: '可表示目的、條件或評價的對象。',
            points: [
                {
                    rule: '目的：～には、～が必要だ。',
                    examples: [{ japanese: '合格{ごうかく}するには努力{どりょく}が必要{ひつよう}だ。', chinese: '要及格需要努力。' }]
                },
                {
                    rule: '評價對象：～には、～だ。',
                    examples: [{ japanese: '彼{かれ}には無理{むり}だ。', chinese: '對他來說不可能。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_wa_1',
                sentence: '成功{せいこう}する（　）、努力{どりょく}が必要{ひつよう}だ。',
                options: ['への', 'には', 'とは', 'では'],
                correctIndex: 1,
                explanation: '要成功需要努力。'
            },
            {
                id: 'n3_quiz_ni_wa_2',
                sentence: '日本{にほん}で働{はたら}く（　）、日本語{にほんご}が必要{ひつよう}だ。',
                options: ['への', 'とは', 'では', 'には'],
                correctIndex: 3,
                explanation: '要在日本工作需要日語。'
            },
            {
                id: 'n3_quiz_ni_wa_3',
                sentence: 'この問題{もんだい}は私{わたし}（　）難{むずか}しすぎる。',
                options: ['では', 'とは', 'への', 'には'],
                correctIndex: 3,
                explanation: '這問題對我來說太難了。'
            },
            {
                id: 'n3_quiz_ni_wa_4',
                sentence: '「どうすれば痩{や}せる？」\n「痩{や}せる（　）、運動{うんどう}するしかないよ。」',
                options: ['とは', 'では', 'には', 'への'],
                correctIndex: 2,
                explanation: '對話情境。要瘦下來只能運動。'
            },
            {
                id: 'n3_quiz_ni_wa_5',
                sentence: '「これ、できる？」\n「うーん、私{わたし}（　）ちょっと無理{むり}かな。」',
                options: ['とは', 'への', 'では', 'には'],
                correctIndex: 3,
                explanation: '對話情境。對我來說可能有點不行。'
            }
        ]
    },
    'n3_ni_yoru_to': {
        id: 'n3_ni_yoru_to',
        pattern: 'によると',
        connection: '名詞{めいし} + によると',
        translation: '根據...; 據...所說',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '引用消息來源',
                description: '表示資訊的來源或依據。',
                examples: [
                    { japanese: '天気{てんき}予報{よほう}によると、明日{あした}は雨{あめ}だそうだ。', chinese: '根據天氣預報，明天會下雨。' },
                    { japanese: 'ニュースによると、事故{じこ}があったらしい。', chinese: '據新聞報導，好像發生了事故。' },
                    {
                        japanese: '「明日{あした}の天気{てんき}、知{し}ってる？」\n「天気{てんき}予報{よほう}によると、晴{は}れるらしいよ。」\n「よかった。」',
                        chinese: '「知道明天的天氣嗎？」\n「根據天氣預報，好像會放晴。」\n「太好了。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「によると」的用法',
            description: '引用間接資訊時使用。',
            points: [
                {
                    rule: '常接「そうだ」「らしい」等傳聞表達。',
                    examples: [{ japanese: '彼{かれ}によると、会議{かいぎ}は中止{ちゅうし}だそうだ。', chinese: '據他說，會議取消了。' }]
                },
                {
                    rule: '也可接「ということだ」。',
                    examples: [{ japanese: '報告{ほうこく}によると成功{せいこう}したということだ。', chinese: '根據報告說是成功了。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_yoru_to_1',
                sentence: '新聞{しんぶん}（　）、電車{でんしゃ}の事故{じこ}があったそうだ。',
                options: ['にとって', 'によると', 'に対して', 'について'],
                correctIndex: 1,
                explanation: '根據報紙，好像發生了電車事故。'
            },
            {
                id: 'n3_quiz_ni_yoru_to_2',
                sentence: '彼{かれ}の話{はなし}（　）、試験{しけん}は難{むずか}しかったらしい。',
                options: ['について', 'に対して', 'によると', 'にとって'],
                correctIndex: 2,
                explanation: '根據他的話，考試好像很難。'
            },
            {
                id: 'n3_quiz_ni_yoru_to_3',
                sentence: '調査{ちょうさ}（　）、若者{わかもの}の読書{どくしょ}量{りょう}が減{へ}っているそうだ。',
                options: ['にとって', 'に対して', 'について', 'によると'],
                correctIndex: 3,
                explanation: '根據調查，年輕人的閱讀量減少了。'
            },
            {
                id: 'n3_quiz_ni_yoru_to_4',
                sentence: '「パーティー、いつ？」\n「メール（　）、来週{らいしゅう}の土曜日{どようび}だって。」',
                options: ['について', 'にとって', 'に対して', 'によると'],
                correctIndex: 3,
                explanation: '對話情境。根據郵件，是下週六。'
            },
            {
                id: 'n3_quiz_ni_yoru_to_5',
                sentence: '「彼{かれ}、元気{げんき}？」\n「友達{ともだち}（　）、最近{さいきん}忙{いそが}しいらしいよ。」',
                options: ['について', 'に対して', 'によると', 'にとって'],
                correctIndex: 2,
                explanation: '對話情境。據朋友說，最近很忙。'
            }
        ]
    },
    'n3_ni_yoru_to_ni_yoreba': {
        id: 'n3_ni_yoru_to_ni_yoreba',
        pattern: 'によると /によれば',
        connection: '名詞{めいし} + によると/によれば',
        translation: '根據...; 據...所說',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '兩種形式的用法',
                description: '「によると」和「によれば」意思相同，後者較書面。',
                examples: [
                    { japanese: '報告{ほうこく}によれば、売{う}り上{あ}げが増{ふ}えたそうだ。', chinese: '根據報告，銷售額增加了。' },
                    { japanese: '専門家{せんもんか}によれば、この方法{ほうほう}が効果的{こうかてき}だ。', chinese: '根據專家說法，這方法很有效。' },
                    {
                        japanese: '「この薬{くすり}、効{き}く？」\n「医者{いしゃ}によれば、効果{こうか}があるらしいよ。」\n「そうなんだ。」',
                        chinese: '「這藥有效嗎？」\n「據醫生說好像有效。」\n「這樣啊。」',
                        note: '對話情境展示'
                    }
                ]
            }
        ],
        analysis: {
            title: '「によると」和「によれば」的區別',
            description: '意思相同，語體不同。',
            points: [
                {
                    rule: 'によると：口語、書面皆可。',
                    examples: [{ japanese: '彼{かれ}によると大丈夫{だいじょうぶ}だそうだ。', chinese: '據他說沒問題。' }]
                },
                {
                    rule: 'によれば：較書面、較正式。',
                    examples: [{ japanese: '法律{ほうりつ}によれば違法{いほう}である。', chinese: '根據法律是違法的。' }]
                }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_yoru_to_ni_yoreba_1',
                sentence: '統計{とうけい}（　）、人口{じんこう}が減少{げんしょう}している。',
                options: ['にとって', 'によれば', 'に対して', 'について'],
                correctIndex: 1,
                explanation: '根據統計，人口在減少。'
            },
            {
                id: 'n3_quiz_ni_yoru_to_ni_yoreba_2',
                sentence: '研究{けんきゅう}（　）、この食品{しょくひん}は体{からだ}にいいらしい。',
                options: ['にとって', 'によれば', 'に対して', 'について'],
                correctIndex: 1,
                explanation: '根據研究，這食品好像對身體好。'
            },
            {
                id: 'n3_quiz_ni_yoru_to_ni_yoreba_3',
                sentence: '法律{ほうりつ}（　）、これは禁止{きんし}されている。',
                options: ['によれば', 'に対して', 'について', 'にとって'],
                correctIndex: 0,
                explanation: '根據法律，這是被禁止的。'
            },
            {
                id: 'n3_quiz_ni_yoru_to_ni_yoreba_4',
                sentence: '「この情報{じょうほう}、正{ただ}しい？」\n「公式{こうしき}発表{はっぴょう}（　）正{ただ}しいよ。」',
                options: ['に対して', 'について', 'にとって', 'によれば'],
                correctIndex: 3,
                explanation: '對話情境。根據官方發表是正確的。'
            },
            {
                id: 'n3_quiz_ni_yoru_to_ni_yoreba_5',
                sentence: '「彼{かれ}、辞{や}めるの？」\n「噂{うわさ}（　）辞{や}めるらしいよ。」',
                options: ['に対して', 'によると', 'にとって', 'について'],
                correctIndex: 1,
                explanation: '對話情境。根據傳聞好像要辭職。'
            }
        ]
    },

    'n3_ni_yotte': {
        id: 'n3_ni_yotte',
        pattern: 'によって',
        connection: '名詞{めいし} + によって',
        translation: '通過...; 根據...; 由於...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示手段・方法',
                description: '「によって」表示做某事的手段、方法或途徑。',
                examples: [
                    { japanese: 'この問題{もんだい}は話{はな}し合{あ}いによって解決{かいけつ}された。', chinese: '這個問題通過對話解決了。' },
                    { japanese: 'インターネットによって情報{じょうほう}を集{あつ}めた。', chinese: '透過網路收集了資訊。' },
                    { japanese: '「どうやって調{しら}べたの？」\n「本{ほん}やネットによって調{しら}べたよ。」', chinese: '「你怎麼查的？」\n「透過書和網路查的。」' }
                ]
            },
            {
                usageId: 2,
                title: '表示原因・理由',
                description: '「によって」也可表示引起某結果的原因。',
                examples: [
                    { japanese: '地震{じしん}によって多{おお}くの家{いえ}が壊{こわ}れた。', chinese: '由於地震，很多房子倒塌了。' },
                    { japanese: '事故{じこ}によって電車{でんしゃ}が遅{おく}れた。', chinese: '由於事故，電車延誤了。' },
                    { japanese: '「なぜ道{みち}が混{こ}んでいるの？」\n「工事{こうじ}によって混{こ}んでいるんだ。」', chinese: '「為什麼路這麼塞？」\n「因為施工所以塞車。」' }
                ]
            },
            {
                usageId: 3,
                title: '表示差異・因人而異',
                description: '「によって」表示根據不同情況會有所不同。',
                examples: [
                    { japanese: '国{くに}によって習慣{しゅうかん}が違{ちが}う。', chinese: '各國的習慣不同。' },
                    { japanese: '人{ひと}によって好{この}みが異{こと}なる。', chinese: '每個人的喜好不同。' },
                    { japanese: '「どの店{みせ}がいい？」\n「店{みせ}によってサービスが違{ちが}うからね。」', chinese: '「哪家店好？」\n「每家店的服務都不一樣呢。」' }
                ]
            }
        ],
        analysis: {
            title: '「によって」的多種用法分析',
            description: '「によって」是多功能的表達，可以表示手段、原因、差異等不同意思。',
            points: [
                { rule: '手段用法強調通過什麼方式達成', explanation: '類似「通過」「藉由」' },
                { rule: '原因用法常與被動態搭配', explanation: '強調某事是由某原因造成的' },
                { rule: '差異用法後面常接「違う」「異なる」', explanation: '表示因情況不同而有差異' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_yotte_1',
                sentence: '努力{どりょく}（　）成功{せいこう}を手{て}に入{い}れた。',
                options: ['によって', 'にとって', 'に対して', 'について'],
                correctIndex: 0,
                explanation: '透過努力獲得了成功。'
            },
            {
                id: 'n3_quiz_ni_yotte_2',
                sentence: '台風{たいふう}（　）飛行機{ひこうき}が欠航{けっこう}になった。',
                options: ['にとって', 'について', 'によって', 'に対して'],
                correctIndex: 2,
                explanation: '由於颱風，飛機停飛了。'
            },
            {
                id: 'n3_quiz_ni_yotte_3',
                sentence: '地域{ちいき}（　）方言{ほうげん}が違{ちが}う。',
                options: ['に対して', 'にとって', 'について', 'によって'],
                correctIndex: 3,
                explanation: '各地區的方言不同。'
            },
            {
                id: 'n3_quiz_ni_yotte_4',
                sentence: '「この製品{せいひん}は何{なに}で作{つく}られたの？」\n「職人{しょくにん}の手{て}（　）作{つく}られたんだよ。」',
                options: ['によって', 'について', 'にとって', 'に対して'],
                correctIndex: 0,
                explanation: '對話情境。透過職人的手製作的。'
            },
            {
                id: 'n3_quiz_ni_yotte_5',
                sentence: '「なんで値段{ねだん}が違{ちが}うの？」\n「季節{きせつ}（　）変{か}わるからだよ。」',
                options: ['に対して', 'について', 'にとって', 'によって'],
                correctIndex: 3,
                explanation: '對話情境。因為會根據季節而變。'
            }
        ]
    },

    'n3_ni_yotte_ni_yoru': {
        id: 'n3_ni_yotte_ni_yoru',
        pattern: 'によって / による',
        connection: '名詞{めいし} + によって/による',
        translation: '通過...; 根據...; 由於...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '「による」作為連體修飾',
                description: '「による」用於修飾後面的名詞，而「によって」用在動詞前。',
                examples: [
                    { japanese: '地震{じしん}による被害{ひがい}が大{おお}きい。', chinese: '地震造成的損害很大。' },
                    { japanese: '努力{どりょく}による成果{せいか}が出{で}た。', chinese: '努力帶來的成果出現了。' },
                    { japanese: '「これは何{なに}の損害{そんがい}？」\n「火事{かじ}による損害{そんがい}だよ。」', chinese: '「這是什麼損害？」\n「是火災造成的損害。」' }
                ]
            },
            {
                usageId: 2,
                title: '兩種形式的對比',
                description: '「によって」後接動詞，「による」後接名詞。',
                examples: [
                    { japanese: '科学{かがく}によって証明{しょうめい}された。（動詞{どうし}前{まえ}）', chinese: '透過科學得到了證明。' },
                    { japanese: '科学{かがく}による証明{しょうめい}が必要{ひつよう}だ。（名詞{めいし}前{まえ}）', chinese: '需要科學的證明。' },
                    { japanese: '「どんな調査{ちょうさ}？」\n「専門家{せんもんか}による調査{ちょうさ}だよ。」', chinese: '「什麼樣的調查？」\n「是專家進行的調查。」' }
                ]
            }
        ],
        analysis: {
            title: '「によって」與「による」的區別',
            description: '兩者意思相同，但語法功能不同。',
            points: [
                { rule: '「によって」後接動詞或句子', explanation: '「地震によって壊れた」' },
                { rule: '「による」後接名詞', explanation: '「地震による被害」' },
                { rule: '在正式文章中「による」常用於標題或新聞', explanation: '「火災による死者10人」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ni_yotte_ni_yoru_1',
                sentence: 'ミス（　）事故{じこ}が多{おお}い。',
                options: ['による', 'によって', 'にとって', 'について'],
                correctIndex: 0,
                explanation: '由失誤造成的事故很多。'
            },
            {
                id: 'n3_quiz_ni_yotte_ni_yoru_2',
                sentence: '政府{せいふ}（　）発表{はっぴょう}があった。',
                options: ['による', 'によって', 'にとって', 'について'],
                correctIndex: 0,
                explanation: '有來自政府的發表。'
            },
            {
                id: 'n3_quiz_ni_yotte_ni_yoru_3',
                sentence: '彼{かれ}の発言{はつげん}（　）誤解{ごかい}が生{う}まれた。',
                options: ['による', 'によって', 'にとって', 'について'],
                correctIndex: 1,
                explanation: '因為他的發言產生了誤解。'
            },
            {
                id: 'n3_quiz_ni_yotte_ni_yoru_4',
                sentence: '「この被害{ひがい}は？」\n「洪水{こうずい}（　）被害{ひがい}です。」',
                options: ['について', 'によって', 'にとって', 'による'],
                correctIndex: 3,
                explanation: '對話情境。是洪水造成的災害。'
            },
            {
                id: 'n3_quiz_ni_yotte_ni_yoru_5',
                sentence: '「どう決{き}まったの？」\n「投票{とうひょう}（　）決{き}まったよ。」',
                options: ['について', 'によって', 'による', 'にとって'],
                correctIndex: 1,
                explanation: '對話情境。透過投票決定的。'
            }
        ]
    },

    'n3_no_deshou_ka': {
        id: 'n3_no_deshou_ka',
        pattern: 'のでしょうか',
        connection: '普通{ふつう}形{けい} + のでしょうか',
        translation: '...吧?; 難道是...嗎? (委婉疑問)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '委婉的疑問',
                description: '「のでしょうか」是比「ですか」更委婉禮貌的疑問表達。',
                examples: [
                    { japanese: 'この電車{でんしゃ}は東京駅{とうきょうえき}に止{と}まるのでしょうか。', chinese: '這班電車會在東京車站停嗎？' },
                    { japanese: 'どうすればいいのでしょうか。', chinese: '該怎麼做才好呢？' },
                    { japanese: '「すみません、これは何{なに}のでしょうか。」\n「これは日本{にほん}の伝統{でんとう}的{てき}なお菓子{かし}ですよ。」', chinese: '「不好意思，這是什麼呢？」\n「這是日本傳統的點心喔。」' }
                ]
            },
            {
                usageId: 2,
                title: '表達困惑或疑惑',
                description: '可用於表達自己的疑惑或不確定。',
                examples: [
                    { japanese: 'なぜ彼{かれ}は来{こ}なかったのでしょうか。', chinese: '他為什麼沒來呢？' },
                    { japanese: '一体{いったい}何{なに}が起{お}きたのでしょうか。', chinese: '到底發生了什麼事呢？' },
                    { japanese: '「彼女{かのじょ}、怒{おこ}ってる？」\n「さあ、何{なに}が原因{げんいん}なのでしょうかね。」', chinese: '「她在生氣嗎？」\n「不知道，原因是什麼呢。」' }
                ]
            }
        ],
        analysis: {
            title: '「のでしょうか」的語氣分析',
            description: '比「ですか」更柔和，適用於正式場合或向陌生人提問。',
            points: [
                { rule: '禮貌程度：ですか ＜ のですか ＜ のでしょうか', explanation: '「のでしょうか」最禮貌' },
                { rule: '常用於服務業或正式場合', explanation: '表示謙虛的詢問態度' },
                { rule: '也可用於自問自答的修辭疑問', explanation: '「なぜなのでしょうか」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_no_deshou_ka_1',
                sentence: 'どうしたら合格{ごうかく}できる（　）。',
                options: ['のでしょうか', 'かな', 'のですか', 'だろうか'],
                correctIndex: 0,
                explanation: '怎樣才能通過呢？（委婉詢問）'
            },
            {
                id: 'n3_quiz_no_deshou_ka_2',
                sentence: 'なぜこんなことになった（　）。',
                options: ['かな', 'のですか', 'だろうか', 'のでしょうか'],
                correctIndex: 3,
                explanation: '為什麼會變成這樣呢？'
            },
            {
                id: 'n3_quiz_no_deshou_ka_3',
                sentence: 'この問題{もんだい}、どう解{と}けばいい（　）。',
                options: ['かな', 'だろうか', 'のですか', 'のでしょうか'],
                correctIndex: 3,
                explanation: '這個問題該怎麼解才好呢？'
            },
            {
                id: 'n3_quiz_no_deshou_ka_4',
                sentence: '「すみません、予約{よやく}は必要{ひつよう}な（　）。」\n「はい、週末{しゅうまつ}は必要{ひつよう}です。」',
                options: ['だろうか', 'のですか', 'のでしょうか', 'かな'],
                correctIndex: 2,
                explanation: '對話情境。需要預約嗎？'
            },
            {
                id: 'n3_quiz_no_deshou_ka_5',
                sentence: '「彼{かれ}、なんで急{きゅう}に辞{や}めたんだろう。」\n「何{なに}か理由{りゆう}があった（　）ね。」',
                options: ['だろうか', 'かな', 'のですか', 'のでしょうか'],
                correctIndex: 3,
                explanation: '對話情境。應該是有什麼理由吧。'
            }
        ]
    },

    'n3_o_chuushin_ni': {
        id: 'n3_o_chuushin_ni',
        pattern: 'を中心{ちゅうしん}{ちゅうしん}に',
        connection: '名詞{めいし} + を中心{ちゅうしん}{ちゅうしん}に',
        translation: '以...為中心',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示核心或中心',
                description: '「を中心に」表示以某人或某物為中心展開活動或分布。',
                examples: [
                    { japanese: '東京{とうきょう}を中心{ちゅうしん}に活動{かつどう}している。', chinese: '以東京為中心進行活動。' },
                    { japanese: '彼{かれ}を中心{ちゅうしん}にプロジェクトが進{すす}んでいる。', chinese: '以他為中心推進專案。' },
                    { japanese: '「どこで活動{かつどう}してるの？」\n「大阪{おおさか}を中心{ちゅうしん}に活動{かつどう}してるよ。」', chinese: '「你們在哪裡活動？」\n「以大阪為中心活動。」' }
                ]
            },
            {
                usageId: 2,
                title: '表示主要內容或範圍',
                description: '也可表示以某內容為主。',
                examples: [
                    { japanese: '文法{ぶんぽう}を中心{ちゅうしん}に勉強{べんきょう}する。', chinese: '以文法為中心學習。' },
                    { japanese: '若者{わかもの}を中心{ちゅうしん}に人気{にんき}がある。', chinese: '主要在年輕人之間受歡迎。' },
                    { japanese: '「何{なに}を研究{けんきゅう}してるの？」\n「AIを中心{ちゅうしん}に研究{けんきゅう}してます。」', chinese: '「你在研究什麼？」\n「主要研究 AI。」' }
                ]
            }
        ],
        analysis: {
            title: '「を中心に」的用法分析',
            description: '表示某事物是核心或焦點。',
            points: [
                { rule: '可用於地理位置', explanation: '「東京を中心に広がる」' },
                { rule: '可用於人物', explanation: '「リーダーを中心に集まる」' },
                { rule: '可用於抽象概念', explanation: '「環境問題を中心に議論する」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_o_chuushin_ni_1',
                sentence: '駅{えき}（　）商店{しょうてん}が並{なら}んでいる。',
                options: ['を中心に', 'に対して', 'にとって', 'について'],
                correctIndex: 0,
                explanation: '以車站為中心排列著商店。'
            },
            {
                id: 'n3_quiz_o_chuushin_ni_2',
                sentence: '健康{けんこう}（　）生活{せいかつ}を考{かんが}える。',
                options: ['に対して', 'を中心に', 'について', 'にとって'],
                correctIndex: 1,
                explanation: '以健康為中心考慮生活。'
            },
            {
                id: 'n3_quiz_o_chuushin_ni_3',
                sentence: '関東{かんとう}地方{ちほう}（　）雨{あめ}が降{ふ}る。',
                options: ['について', 'を中心に', 'にとって', 'に対して'],
                correctIndex: 1,
                explanation: '以關東地區為中心會下雨。'
            },
            {
                id: 'n3_quiz_o_chuushin_ni_4',
                sentence: '「このバンド、どこで人気{にんき}？」\n「アジア（　）人気{にんき}があるよ。」',
                options: ['にとって', 'を中心に', 'に対して', 'について'],
                correctIndex: 1,
                explanation: '對話情境。以亞洲為中心受歡迎。'
            },
            {
                id: 'n3_quiz_o_chuushin_ni_5',
                sentence: '「今日{きょう}は何{なに}を話{はな}し合{あ}うの？」\n「予算{よさん}（　）話{はな}し合{あ}おう。」',
                options: ['について', 'を中心に', 'にとって', 'に対して'],
                correctIndex: 1,
                explanation: '對話情境。以預算為中心來討論。'
            }
        ]
    },

    'n3_o_chuushin_ni_1': {
        id: 'n3_o_chuushin_ni_1',
        pattern: 'を中心{ちゅうしん}{ちゅうしん}に',
        connection: '名詞{めいし} + を中心{ちゅうしん}{ちゅうしん}に/として/にして',
        translation: '以...為核心; 集中於...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '「を中心として」「を中心にして」的變體',
                description: '「を中心に」可以變化為「を中心として」「を中心にして」，意思相同。',
                examples: [
                    { japanese: '社長{しゃちょう}を中心{ちゅうしん}として会議{かいぎ}が行{おこな}われた。', chinese: '以社長為中心舉行了會議。' },
                    { japanese: '首都{しゅと}を中心{ちゅうしん}にして発展{はってん}してきた。', chinese: '以首都為中心發展起來。' },
                    { japanese: '「チームはどう動{うご}いてるの？」\n「山田{やまだ}さんを中心{ちゅうしん}にして進{すす}めてるよ。」', chinese: '「團隊怎麼運作的？」\n「以山田為中心在推進。」' }
                ]
            }
        ],
        analysis: {
            title: '「を中心に」的變體形式',
            description: '三種形式意思相同，可互換使用。',
            points: [
                { rule: '「を中心に」最常用', explanation: '口語和書面都適用' },
                { rule: '「を中心として」較正式', explanation: '多用於書面語' },
                { rule: '「を中心にして」強調動作過程', explanation: '「～にして」有過程感' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_o_chuushin_ni_1_1',
                sentence: '部長{ぶちょう}（　）チームが編成{へんせい}された。',
                options: ['について', 'に対して', 'を中心として', 'にとって'],
                correctIndex: 2,
                explanation: '以部長為中心組成了團隊。'
            },
            {
                id: 'n3_quiz_o_chuushin_ni_1_2',
                sentence: '福岡{ふくおか}（　）九州{きゅうしゅう}全体{ぜんたい}に広{ひろ}がった。',
                options: ['にとって', 'に対して', 'を中心にして', 'について'],
                correctIndex: 2,
                explanation: '以福岡為中心擴展到整個九州。'
            },
            {
                id: 'n3_quiz_o_chuushin_ni_1_3',
                sentence: '彼女{かのじょ}（　）ファンクラブが作{つく}られた。',
                options: ['について', 'に対して', 'を中心に', 'にとって'],
                correctIndex: 2,
                explanation: '以她為中心成立了粉絲俱樂部。'
            },
            {
                id: 'n3_quiz_o_chuushin_ni_1_4',
                sentence: '「このプロジェクトは誰{だれ}が仕切{しき}ってるの？」\n「田中{たなか}さん（　）進{すす}めてるよ。」',
                options: ['にとって', 'について', 'に対して', 'を中心にして'],
                correctIndex: 3,
                explanation: '對話情境。以田中為中心在推進。'
            },
            {
                id: 'n3_quiz_o_chuushin_ni_1_5',
                sentence: '「この町{まち}、どう発展{はってん}したの？」\n「港{みなと}（　）発展{はってん}したんだ。」',
                options: ['について', 'に対して', 'にとって', 'を中心として'],
                correctIndex: 3,
                explanation: '對話情境。以港口為中心發展的。'
            }
        ]
    },

    'n3_o_hajime': {
        id: 'n3_o_hajime',
        pattern: 'をはじめ',
        connection: '名詞{めいし} + をはじめ（として）',
        translation: '以...為首; 以及...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '列舉代表性例子',
                description: '「をはじめ」用於舉出最具代表性的例子，暗示還有其他類似事物。',
                examples: [
                    { japanese: '社長{しゃちょう}をはじめ、社員{しゃいん}全員{ぜんいん}が参加{さんか}した。', chinese: '以社長為首，全體員工都參加了。' },
                    { japanese: '東京{とうきょう}をはじめ、大都市{だいとし}は人口{じんこう}が多{おお}い。', chinese: '以東京為首，大城市人口眾多。' },
                    { japanese: '「誰{だれ}が来{き}たの？」\n「田中{たなか}さんをはじめ、みんな来{き}たよ。」', chinese: '「誰來了？」\n「以田中為首，大家都來了。」' }
                ]
            },
            {
                usageId: 2,
                title: '表示「包括...等」',
                description: '強調某事物是其中最突出或重要的代表。',
                examples: [
                    { japanese: '日本語{にほんご}をはじめ、英語{えいご}も中国語{ちゅうごくご}も話{はな}せる。', chinese: '以日語為首，英語和中文也會說。' },
                    { japanese: '米{こめ}をはじめ、食料品{しょくりょうひん}が値上{ねあ}がりした。', chinese: '以米為首，食品都漲價了。' },
                    { japanese: '「何{なに}が好{す}きなの？」\n「寿司{すし}をはじめ、和食{わしょく}が好{す}きだよ。」', chinese: '「你喜歡什麼？」\n「以壽司為首，喜歡日本料理。」' }
                ]
            }
        ],
        analysis: {
            title: '「をはじめ」的用法分析',
            description: '用於列舉時強調最重要或最具代表性的例子。',
            points: [
                { rule: '「をはじめ」後常接「～など」或列舉', explanation: '暗示還有其他同類事物' },
                { rule: '「をはじめとして」較正式', explanation: '書面語中更常見' },
                { rule: '前面通常放最重要或最知名的例子', explanation: '具有代表性的事物' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_o_hajime_1',
                sentence: '校長{こうちょう}（　）、先生方{せんせいがた}が出席{しゅっせき}した。',
                options: ['にとって', 'について', 'をはじめ', 'に対して'],
                correctIndex: 2,
                explanation: '以校長為首，老師們都出席了。'
            },
            {
                id: 'n3_quiz_o_hajime_2',
                sentence: 'りんご（　）、果物{くだもの}がたくさんある。',
                options: ['をはじめ', 'にとって', 'に対して', 'について'],
                correctIndex: 0,
                explanation: '以蘋果為首，有很多水果。'
            },
            {
                id: 'n3_quiz_o_hajime_3',
                sentence: 'サッカー（　）、スポーツが盛{さか}んだ。',
                options: ['をはじめ', 'について', 'にとって', 'に対して'],
                correctIndex: 0,
                explanation: '以足球為首，運動很盛行。'
            },
            {
                id: 'n3_quiz_o_hajime_4',
                sentence: '「この会社{かいしゃ}、何{なに}を作{つく}ってるの？」\n「車{くるま}（　）、いろんな製品{せいひん}を作{つく}ってるよ。」',
                options: ['をはじめ', 'に対して', 'にとって', 'について'],
                correctIndex: 0,
                explanation: '對話情境。以汽車為首，製造各種產品。'
            },
            {
                id: 'n3_quiz_o_hajime_5',
                sentence: '「誰{だれ}が反対{はんたい}したの？」\n「部長{ぶちょう}（　）、みんな反対{はんたい}したんだ。」',
                options: ['をはじめ', 'に対して', 'にとって', 'について'],
                correctIndex: 0,
                explanation: '對話情境。以部長為首，大家都反對了。'
            }
        ]
    },

    'n3_o_komete': {
        id: 'n3_o_komete',
        pattern: 'を込{こ}めて',
        connection: '名詞{めいし} + を込{こ}めて',
        translation: '傾注...; 充滿... (感情/心意)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示傾注感情或心意',
                description: '「を込めて」表示帶著某種感情或心意做某事。',
                examples: [
                    { japanese: '心{こころ}を込{こ}めて料理{りょうり}を作{つく}った。', chinese: '用心做了料理。' },
                    { japanese: '感謝{かんしゃ}の気持{きも}ちを込{こ}めてプレゼントを贈{おく}る。', chinese: '懷著感謝的心情送禮物。' },
                    { japanese: '「このケーキ、おいしいね。」\n「愛情{あいじょう}を込{こ}めて作{つく}ったからね。」', chinese: '「這蛋糕真好吃。」\n「因為是用愛心做的。」' }
                ]
            },
            {
                usageId: 2,
                title: '常用搭配',
                description: '常與「心」「気持ち」「愛情」「祈り」等詞搭配。',
                examples: [
                    { japanese: '祈{いの}りを込{こ}めて手{て}を合{あ}わせた。', chinese: '帶著祈禱合掌。' },
                    { japanese: '願{ねが}いを込{こ}めて星{ほし}に願{ねが}った。', chinese: '帶著願望向星星許願。' },
                    { japanese: '「この手紙{てがみ}、丁寧{ていねい}だね。」\n「思{おも}いを込{こ}めて書{か}いたんだ。」', chinese: '「這封信很仔細呢。」\n「傾注心意寫的。」' }
                ]
            }
        ],
        analysis: {
            title: '「を込めて」的用法分析',
            description: '表示做某事時傾注了某種感情或心意。',
            points: [
                { rule: '前面接抽象名詞（感情・心意）', explanation: '心、気持ち、愛情、祈り等' },
                { rule: '強調做事的態度和用心程度', explanation: '不只是表面行為' },
                { rule: '常用於製作、創作、表達等動作', explanation: '料理を作る、手紙を書く等' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_o_komete_1',
                sentence: '心{こころ}（　）歌{うた}を歌{うた}った。',
                options: ['にとって', 'を込めて', 'に対して', 'について'],
                correctIndex: 1,
                explanation: '用心唱了歌。'
            },
            {
                id: 'n3_quiz_o_komete_2',
                sentence: '感謝{かんしゃ}（　）お礼{れい}を言{い}った。',
                options: ['を込めて', 'に対して', 'にとって', 'について'],
                correctIndex: 0,
                explanation: '懷著感謝道了謝。'
            },
            {
                id: 'n3_quiz_o_komete_3',
                sentence: '愛情{あいじょう}（　）子供{こども}を育{そだ}てる。',
                options: ['に対して', 'を込めて', 'にとって', 'について'],
                correctIndex: 1,
                explanation: '用愛養育孩子。'
            },
            {
                id: 'n3_quiz_o_komete_4',
                sentence: '「このセーター、素敵{すてき}だね。」\n「祖母{そぼ}が心{こころ}（　）編{あ}んでくれたの。」',
                options: ['について', 'に対して', 'を込めて', 'にとって'],
                correctIndex: 2,
                explanation: '對話情境。是祖母用心編織的。'
            },
            {
                id: 'n3_quiz_o_komete_5',
                sentence: '「なんでそんなに丁寧{ていねい}に作{つく}るの？」\n「気持{きも}ち（　）作{つく}りたいから。」',
                options: ['について', 'を込めて', 'にとって', 'に対して'],
                correctIndex: 1,
                explanation: '對話情境。因為想傾注心意製作。'
            }
        ]
    },

    'n3_o_komete_1': {
        id: 'n3_o_komete_1',
        pattern: 'を込{こ}めて',
        connection: '名詞{めいし} + を込{こ}めて',
        translation: '傾注...; 充滿心意地',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '強調用心程度',
                description: '「を込めて」的動詞原形是「込める」，表示將感情注入到動作中。',
                examples: [
                    { japanese: '力{ちから}を込{こ}めてボールを投{な}げた。', chinese: '用力投擲了球。' },
                    { japanese: '魂{たましい}を込{こ}めて絵{え}を描{か}いた。', chinese: '傾注靈魂畫了畫。' },
                    { japanese: '「この作品{さくひん}、すごいね。」\n「全{すべ}てを込{こ}めて作{つく}ったんだ。」', chinese: '「這作品好厲害。」\n「是傾注全力製作的。」' }
                ]
            }
        ],
        analysis: {
            title: '「を込めて」的延伸用法',
            description: '除了感情，也可用於力量等。',
            points: [
                { rule: '「力を込めて」表示用力', explanation: '物理上的力量' },
                { rule: '「魂を込めて」表示全心投入', explanation: '最高程度的用心' },
                { rule: '後接動詞多為創作或表達類', explanation: '作る、書く、描く、歌う等' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_o_komete_1_1',
                sentence: '全力{ぜんりょく}（　）走{はし}った。',
                options: ['に対して', 'を込めて', 'について', 'にとって'],
                correctIndex: 1,
                explanation: '傾注全力跑了。'
            },
            {
                id: 'n3_quiz_o_komete_1_2',
                sentence: '真心{まごころ}（　）お詫{わ}びする。',
                options: ['にとって', 'を込めて', 'について', 'に対して'],
                correctIndex: 1,
                explanation: '真心誠意道歉。'
            },
            {
                id: 'n3_quiz_o_komete_1_3',
                sentence: '情熱{じょうねつ}（　）仕事{しごと}に取{と}り組{く}む。',
                options: ['を込めて', 'に対して', 'について', 'にとって'],
                correctIndex: 0,
                explanation: '懷著熱情投入工作。'
            },
            {
                id: 'n3_quiz_o_komete_1_4',
                sentence: '「どうしてそんなに一生懸命{いっしょうけんめい}なの？」\n「責任感{せきにんかん}（　）やってるからだよ。」',
                options: ['を込めて', 'について', 'にとって', 'に対して'],
                correctIndex: 0,
                explanation: '對話情境。懷著責任感在做。'
            },
            {
                id: 'n3_quiz_o_komete_1_5',
                sentence: '「この詩{し}、感動{かんどう}するね。」\n「詩人{しじん}が思{おも}い（　）書{か}いたからね。」',
                options: ['について', 'に対して', 'を込めて', 'にとって'],
                correctIndex: 2,
                explanation: '對話情境。因為是詩人傾注心意寫的。'
            }
        ]
    },

    'n3_o_tsuujite': {
        id: 'n3_o_tsuujite',
        pattern: 'を通{つう}じて',
        connection: '名詞{めいし} + を通{つう}じて',
        translation: '通過...; 經過...; 在...整個期間',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示手段・媒介',
                description: '「を通じて」表示通過某種媒介或管道。',
                examples: [
                    { japanese: 'インターネットを通{つう}じて情報{じょうほう}を得{え}た。', chinese: '透過網路獲得了資訊。' },
                    { japanese: '友人{ゆうじん}を通{つう}じて彼{かれ}と知{し}り合{あ}った。', chinese: '透過朋友認識了他。' },
                    { japanese: '「どうやって知{し}ったの？」\n「SNSを通{つう}じて知{し}ったんだ。」', chinese: '「你怎麼知道的？」\n「透過SNS知道的。」' }
                ]
            },
            {
                usageId: 2,
                title: '表示整個期間',
                description: '「を通じて」也可表示在某段時間的整個期間。',
                examples: [
                    { japanese: '一年{いちねん}を通{つう}じて暖{あたた}かい。', chinese: '一整年都很溫暖。' },
                    { japanese: '人生{じんせい}を通{つう}じて学{まな}び続{つづ}ける。', chinese: '一輩子持續學習。' },
                    { japanese: '「この島{しま}、いつ行{い}ける？」\n「一年{いちねん}を通{つう}じて観光{かんこう}できるよ。」', chinese: '「這個島什麼時候能去？」\n「一整年都可以觀光。」' }
                ]
            }
        ],
        analysis: {
            title: '「を通じて」的雙重含義',
            description: '可以表示媒介手段，也可以表示時間期間。',
            points: [
                { rule: '媒介用法：通過某人/某物達成', explanation: '「友人を通じて紹介された」' },
                { rule: '期間用法：在整個期間內', explanation: '「一年を通じて」=一整年' },
                { rule: '與「を通して」可互換使用', explanation: '意思基本相同' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_o_tsuujite_1',
                sentence: '経験{けいけん}（　）多{おお}くのことを学{まな}んだ。',
                options: ['にとって', 'について', 'を通じて', 'に対して'],
                correctIndex: 2,
                explanation: '透過經驗學到了很多。'
            },
            {
                id: 'n3_quiz_o_tsuujite_2',
                sentence: '四季{しき}（　）花{はな}が咲{さ}いている。',
                options: ['にとって', 'に対して', 'について', 'を通じて'],
                correctIndex: 3,
                explanation: '一年四季都開著花。'
            },
            {
                id: 'n3_quiz_o_tsuujite_3',
                sentence: '代理店{だいりてん}（　）商品{しょうひん}を販売{はんばい}する。',
                options: ['を通じて', 'について', 'にとって', 'に対して'],
                correctIndex: 0,
                explanation: '透過代理店販售商品。'
            },
            {
                id: 'n3_quiz_o_tsuujite_4',
                sentence: '「どうやって予約{よやく}したの？」\n「アプリ（　）予約{よやく}したよ。」',
                options: ['にとって', 'について', 'を通じて', 'に対して'],
                correctIndex: 2,
                explanation: '對話情境。透過APP預約的。'
            },
            {
                id: 'n3_quiz_o_tsuujite_5',
                sentence: '「このスキー場{じょう}、夏{なつ}もやってる？」\n「一年{いちねん}（　）営業{えいぎょう}してるよ。」',
                options: ['に対して', 'にとって', 'について', 'を通じて'],
                correctIndex: 3,
                explanation: '對話情境。一整年都營業。'
            }
        ]
    },

    'n3_o_tsuujite_o_tooshite': {
        id: 'n3_o_tsuujite_o_tooshite',
        pattern: 'を通{つう}じて / を通{とお}して',
        connection: '名詞{めいし} + を通{つう}じて/を通{とお}して',
        translation: '通過...; 經過...; 整個...期間',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '兩種形式的差異',
                description: '「を通じて」和「を通して」意思相近，但有細微差異。',
                examples: [
                    { japanese: 'テレビを通{とお}して世界{せかい}のニュースを知{し}る。', chinese: '透過電視知道世界新聞。' },
                    { japanese: '窓{まど}を通{とお}して光{ひかり}が入{はい}る。', chinese: '光線透過窗戶進入。' },
                    { japanese: '「どうやって連絡{れんらく}したの？」\n「秘書{ひしょ}を通{とお}して連絡{れんらく}したよ。」', chinese: '「你怎麼聯繫的？」\n「透過秘書聯繫的。」' }
                ]
            },
            {
                usageId: 2,
                title: '用法傾向',
                description: '「を通して」偏向物理上穿過，「を通じて」偏向抽象的媒介。',
                examples: [
                    { japanese: '彼女{かのじょ}を通{つう}じて情報{じょうほう}を得{え}た。（抽象{ちゅうしょう}）', chinese: '透過她獲得了資訊。' },
                    { japanese: 'ガラスを通{とお}して見{み}る。（物理{ぶつり}）', chinese: '透過玻璃看。' },
                    { japanese: '「どうやって入{はい}ったの？」\n「裏口{うらぐち}を通{とお}して入{はい}ったんだ。」', chinese: '「你怎麼進去的？」\n「從後門穿過去的。」' }
                ]
            }
        ],
        analysis: {
            title: '「を通じて」與「を通して」的區別',
            description: '實際使用中兩者常可互換，但有傾向差異。',
            points: [
                { rule: '「を通じて」偏向抽象・媒介意義', explanation: '人を通じて連絡する' },
                { rule: '「を通して」偏向物理・具體意義', explanation: '窓を通して見える' },
                { rule: '時間期間用法兩者都可用', explanation: '一年を通じて/を通して' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_o_tsuujite_o_tooshite_1',
                sentence: 'ボランティア活動{かつどう}（　）社会{しゃかい}に貢献{こうけん}する。',
                options: ['に対して', 'にとって', 'を通して', 'について'],
                correctIndex: 2,
                explanation: '透過志工活動對社會做貢獻。'
            },
            {
                id: 'n3_quiz_o_tsuujite_o_tooshite_2',
                sentence: 'レンズ（　）光{ひかり}を集{あつ}める。',
                options: ['にとって', 'について', 'に対して', 'を通して'],
                correctIndex: 3,
                explanation: '透過鏡片聚集光線。'
            },
            {
                id: 'n3_quiz_o_tsuujite_o_tooshite_3',
                sentence: '留学{りゅうがく}（　）いろいろな経験{けいけん}ができた。',
                options: ['にとって', 'について', 'を通じて', 'に対して'],
                correctIndex: 2,
                explanation: '透過留學獲得了各種經驗。'
            },
            {
                id: 'n3_quiz_o_tsuujite_o_tooshite_4',
                sentence: '「どうやって頼{たの}んだの？」\n「知{し}り合{あ}い（　）頼{たの}んだよ。」',
                options: ['にとって', 'について', 'に対して', 'を通じて'],
                correctIndex: 3,
                explanation: '對話情境。透過熟人拜託的。'
            },
            {
                id: 'n3_quiz_o_tsuujite_o_tooshite_5',
                sentence: '「何{なに}が見{み}えるの？」\n「望遠鏡{ぼうえんきょう}（　）星{ほし}が見{み}えるよ。」',
                options: ['を通して', 'にとって', 'について', 'に対して'],
                correctIndex: 0,
                explanation: '對話情境。透過望遠鏡可以看到星星。'
            }
        ]
    },

    'n3_okage_de': {
        id: 'n3_okage_de',
        pattern: 'おかげで',
        connection: '名詞{めいし}の/普通{ふつう}形{けい} + おかげで',
        translation: '託...的福; 多虧...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示正面結果的原因',
                description: '「おかげで」表示因為某人或某事的幫助而產生好的結果。',
                examples: [
                    { japanese: '先生{せんせい}のおかげで合格{ごうかく}できた。', chinese: '託老師的福，通過了。' },
                    { japanese: '皆{みな}さんのおかげで成功{せいこう}しました。', chinese: '多虧大家，成功了。' },
                    { japanese: '「日本語{にほんご}、上手{じょうず}だね。」\n「先生{せんせい}のおかげですよ。」', chinese: '「你日語說得真好。」\n「託老師的福。」' }
                ]
            },
            {
                usageId: 2,
                title: '反諷用法',
                description: '「おかげで」也可諷刺地用於負面結果。',
                examples: [
                    { japanese: '雨{あめ}のおかげで、ずぶ濡{ぬ}れになった。', chinese: '多虧這場雨，全身濕透了。（反諷）' },
                    { japanese: '彼{かれ}のおかげで、遅刻{ちこく}した。', chinese: '多虧他，遲到了。（反諷）' },
                    { japanese: '「なんで疲{つか}れてるの？」\n「昨日{きのう}の残業{ざんぎょう}のおかげでね。」', chinese: '「你怎麼這麼累？」\n「多虧昨天的加班。」（反諷）' }
                ]
            }
        ],
        analysis: {
            title: '「おかげで」與「せいで」的對比',
            description: '「おかげで」原則上用於正面結果，「せいで」用於負面結果。',
            points: [
                { rule: '正面結果用「おかげで」', explanation: '表達感謝的語氣' },
                { rule: '負面結果用「せいで」', explanation: '表達責備的語氣' },
                { rule: '「おかげで」反諷用法帶有諷刺意味', explanation: '語氣上有抱怨的感覺' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_okage_de_1',
                sentence: 'あなた（　）助{たす}かりました。',
                options: ['のおかげで', 'について', 'にとって', 'のせいで'],
                correctIndex: 0,
                explanation: '多虧你，得救了。'
            },
            {
                id: 'n3_quiz_okage_de_2',
                sentence: '薬{くすり}（　）熱{ねつ}が下{さ}がった。',
                options: ['について', 'にとって', 'のせいで', 'のおかげで'],
                correctIndex: 3,
                explanation: '多虧藥，退燒了。'
            },
            {
                id: 'n3_quiz_okage_de_3',
                sentence: '努力{どりょく}した（　）、夢{ゆめ}が叶{かな}った。',
                options: ['せいで', 'おかげで', 'ために', 'ので'],
                correctIndex: 1,
                explanation: '多虧努力了，夢想實現了。'
            },
            {
                id: 'n3_quiz_okage_de_4',
                sentence: '「試験{しけん}、受{う}かったんだって？」\n「うん、先輩{せんぱい}（　）だよ。」',
                options: ['について', 'のせい', 'にとって', 'のおかげ'],
                correctIndex: 3,
                explanation: '對話情境。多虧前輩。'
            },
            {
                id: 'n3_quiz_okage_de_5',
                sentence: '「今日{きょう}は早{はや}く終{お}わったね。」\n「みんなが手伝{てつだ}ってくれた（　）だね。」',
                options: ['おかげ', 'から', 'せい', 'ため'],
                correctIndex: 0,
                explanation: '對話情境。多虧大家幫忙。'
            }
        ]
    },

    'n3_ppanashi': {
        id: 'n3_ppanashi',
        pattern: 'っぱなし',
        connection: '動詞{どうし}ます形{けい} + っぱなし',
        translation: '一直...著; 置之不理',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '持續某狀態不處理',
                description: '「っぱなし」表示某動作完成後的狀態一直持續，沒有處理或收拾。',
                examples: [
                    { japanese: 'ドアを開{あ}けっぱなしにしないで。', chinese: '別一直開著門不關。' },
                    { japanese: 'テレビをつけっぱなしで寝{ね}てしまった。', chinese: '電視開著就睡著了。' },
                    { japanese: '「窓{まど}、開{あ}いてるよ。」\n「あ、開{あ}けっぱなしだった。」', chinese: '「窗戶開著喔。」\n「啊，一直開著沒關。」' }
                ]
            },
            {
                usageId: 2,
                title: '持續做某事',
                description: '也可表示一直做某事不停止。',
                examples: [
                    { japanese: '一日中{いちにちじゅう}立{た}ちっぱなしで疲{つか}れた。', chinese: '站了一整天累死了。' },
                    { japanese: '彼{かれ}はしゃべりっぱなしだ。', chinese: '他一直說個不停。' },
                    { japanese: '「疲{つか}れた？」\n「うん、歩{ある}きっぱなしだったから。」', chinese: '「累嗎？」\n「嗯，因為一直走個不停。」' }
                ]
            }
        ],
        analysis: {
            title: '「っぱなし」的用法分析',
            description: '帶有輕微負面語氣，暗示「應該處理但沒處理」。',
            points: [
                { rule: '狀態持續用法', explanation: '開けっぱなし、つけっぱなし' },
                { rule: '動作持續用法', explanation: '立ちっぱなし、歩きっぱなし' },
                { rule: '常帶有批評或抱怨語氣', explanation: '「應該收拾但沒收拾」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ppanashi_1',
                sentence: '水道{すいどう}を出{だ}し（　）にしないで。',
                options: ['っぽい', 'ぎみ', 'がち', 'っぱなし'],
                correctIndex: 3,
                explanation: '別一直開著水龍頭不關。'
            },
            {
                id: 'n3_quiz_ppanashi_2',
                sentence: '電気{でんき}をつけ（　）で寝{ね}た。',
                options: ['がち', 'っぽい', 'っぱなし', 'ぎみ'],
                correctIndex: 2,
                explanation: '開著燈就睡了。'
            },
            {
                id: 'n3_quiz_ppanashi_3',
                sentence: '本{ほん}を読{よ}み（　）にして返{かえ}さなかった。',
                options: ['ぎみ', 'っぱなし', 'っぽい', 'がち'],
                correctIndex: 1,
                explanation: '借了書一直沒還。'
            },
            {
                id: 'n3_quiz_ppanashi_4',
                sentence: '「足{あし}が痛{いた}い？」\n「うん、座{すわ}り（　）だったから。」',
                options: ['っぽい', 'ぎみ', 'っぱなし', 'がち'],
                correctIndex: 2,
                explanation: '對話情境。因為一直坐著。'
            },
            {
                id: 'n3_quiz_ppanashi_5',
                sentence: '「エアコン、つけてた？」\n「あ、つけ（　）だった。消{け}すね。」',
                options: ['ぎみ', 'っぱなし', 'がち', 'っぽい'],
                correctIndex: 1,
                explanation: '對話情境。一直開著沒關，我去關。'
            }
        ]
    },

    'n3_ppoi': {
        id: 'n3_ppoi',
        pattern: 'っぽい',
        connection: '名詞{めいし}/動詞{どうし}ます形{けい}/い形容詞{けいようし}語幹{ごかん} + っぽい',
        translation: '像...的; 有...傾向的; 容易...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示像...的樣子',
                description: '「っぽい」表示具有某種特徵或感覺。',
                examples: [
                    { japanese: 'この服{ふく}は子供{こども}っぽい。', chinese: '這件衣服很孩子氣。' },
                    { japanese: '彼{かれ}は男{おとこ}っぽい性格{せいかく}だ。', chinese: '他是很男人味的性格。' },
                    { japanese: '「この色{いろ}、どう？」\n「ちょっと派手{はで}っぽいかな。」', chinese: '「這顏色怎麼樣？」\n「有點花俏的感覺。」' }
                ]
            },
            {
                usageId: 2,
                title: '表示容易...的傾向',
                description: '接動詞時表示容易做某事的傾向。',
                examples: [
                    { japanese: '彼女{かのじょ}は怒{おこ}りっぽい。', chinese: '她很容易生氣。' },
                    { japanese: '最近{さいきん}忘{わす}れっぽくなった。', chinese: '最近變得健忘。' },
                    { japanese: '「彼{かれ}、また泣{な}いてる？」\n「うん、泣{な}きっぽいんだよね。」', chinese: '「他又在哭？」\n「對啊，他很愛哭。」' }
                ]
            },
            {
                usageId: 3,
                title: '表示顏色偏向',
                description: '接顏色詞時表示偏向某種顏色。',
                examples: [
                    { japanese: 'この白{しろ}は黄色{きいろ}っぽい。', chinese: '這白色偏黃。' },
                    { japanese: '青{あお}っぽい灰色{はいいろ}が好{す}きだ。', chinese: '我喜歡偏藍的灰色。' },
                    { japanese: '「この緑{みどり}、どう思{おも}う？」\n「ちょっと黒{くろ}っぽいね。」', chinese: '「你覺得這綠色如何？」\n「有點偏黑呢。」' }
                ]
            }
        ],
        analysis: {
            title: '「っぽい」的用法分析',
            description: '「っぽい」本身為い形容詞，可變化為っぽくない等。',
            points: [
                { rule: '名詞＋っぽい表示像某物的樣子', explanation: '子供っぽい=像小孩的' },
                { rule: '動詞ます形＋っぽい表示容易做某事', explanation: '怒りっぽい=容易生氣' },
                { rule: '顏色＋っぽい表示帶有該顏色', explanation: '赤っぽい=帶紅色的' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ppoi_1',
                sentence: 'この味{あじ}は油{あぶら}（　）。',
                options: ['がち', 'ぎみ', 'っぱなし', 'っぽい'],
                correctIndex: 3,
                explanation: '這味道很油膩。'
            },
            {
                id: 'n3_quiz_ppoi_2',
                sentence: '彼{かれ}は飽{あ}き（　）から続{つづ}かない。',
                options: ['っぽい', 'っぱなし', 'ぎみ', 'がち'],
                correctIndex: 0,
                explanation: '他容易厭倦所以不持久。'
            },
            {
                id: 'n3_quiz_ppoi_3',
                sentence: 'この茶色{ちゃいろ}は赤{あか}（　）。',
                options: ['がち', 'っぽい', 'っぱなし', 'ぎみ'],
                correctIndex: 1,
                explanation: '這茶色偏紅。'
            },
            {
                id: 'n3_quiz_ppoi_4',
                sentence: '「彼女{かのじょ}の性格{せいかく}、どう？」\n「ちょっと男{おとこ}（　）かな。」',
                options: ['ぎみ', 'がち', 'っぱなし', 'っぽい'],
                correctIndex: 3,
                explanation: '對話情境。有點男孩子氣。'
            },
            {
                id: 'n3_quiz_ppoi_5',
                sentence: '「また風邪{かぜ}ひいたの？」\n「うん、最近{さいきん}風邪{かぜ}をひき（　）で。」',
                options: ['ぎみ', 'っぽい', 'がち', 'っぱなし'],
                correctIndex: 1,
                explanation: '對話情境。最近很容易感冒。'
            }
        ]
    },

    'n3_sae': {
        id: 'n3_sae',
        pattern: 'さえ',
        connection: '名詞{めいし} + さえ',
        translation: '連...; 甚至...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示極端例子',
                description: '「さえ」用於舉出極端的例子，暗示其他更不用說。',
                examples: [
                    { japanese: '子供{こども}さえ知{し}っている。', chinese: '連小孩都知道。' },
                    { japanese: '名前{なまえ}さえ覚{おぼ}えられない。', chinese: '連名字都記不住。' },
                    { japanese: '「この問題{もんだい}、難{むずか}しい？」\n「先生{せんせい}さえ解{と}けなかったよ。」', chinese: '「這題難嗎？」\n「連老師都解不出來。」' }
                ]
            },
            {
                usageId: 2,
                title: '與其他助詞的結合',
                description: '「さえ」可以接在其他助詞後面。',
                examples: [
                    { japanese: '彼{かれ}にさえ話{はな}さなかった。', chinese: '連對他也沒說。' },
                    { japanese: 'ここからさえ見{み}える。', chinese: '從這裡都能看到。' },
                    { japanese: '「誰{だれ}も知{し}らないの？」\n「うん、友達{ともだち}にさえ言{い}わなかった。」', chinese: '「沒人知道嗎？」\n「嗯，連朋友都沒說。」' }
                ]
            }
        ],
        analysis: {
            title: '「さえ」的用法分析',
            description: '「さえ」強調最極端的例子，暗示其他情況更是如此。',
            points: [
                { rule: '肯定句：連最不可能的都...', explanation: '子供さえ知っている' },
                { rule: '否定句：連最基本的都不...', explanation: '名前さえ知らない' },
                { rule: '可接在其他助詞後', explanation: 'にさえ、からさえ、でさえ等' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_sae_1',
                sentence: '忙{いそが}しくて食{た}べる時間{じかん}（　）ない。',
                options: ['ばかり', 'しか', 'だけ', 'さえ'],
                correctIndex: 3,
                explanation: '忙到連吃飯時間都沒有。'
            },
            {
                id: 'n3_quiz_sae_2',
                sentence: '彼{かれ}は挨拶{あいさつ}（　）しない。',
                options: ['さえ', 'だけ', 'しか', 'ばかり'],
                correctIndex: 0,
                explanation: '他連打招呼都不做。'
            },
            {
                id: 'n3_quiz_sae_3',
                sentence: 'この店{みせ}は犬{いぬ}（　）入{はい}れる。',
                options: ['しか', 'さえ', 'だけ', 'ばかり'],
                correctIndex: 1,
                explanation: '這家店連狗都能進。'
            },
            {
                id: 'n3_quiz_sae_4',
                sentence: '「寒{さむ}い？」\n「うん、コート（　）寒{さむ}いよ。」',
                options: ['を着てだけ', 'を着てばかり', 'を着てしか', 'を着てさえ'],
                correctIndex: 3,
                explanation: '對話情境。穿著大衣還是冷。'
            },
            {
                id: 'n3_quiz_sae_5',
                sentence: '「彼{かれ}、元気{げんき}？」\n「最近{さいきん}、メール（　）くれないよ。」',
                options: ['さえ', 'ばかり', 'だけ', 'しか'],
                correctIndex: 0,
                explanation: '對話情境。最近連郵件都不回。'
            }
        ]
    },

    'n3_sae_ba': {
        id: 'n3_sae_ba',
        pattern: 'さえ～ば',
        connection: '名詞{めいし}＋さえ～ば / 動詞{どうし}ます形{けい}＋さえすれば',
        translation: '只要...就...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示唯一條件',
                description: '「さえ～ば」表示只要滿足某個條件就足夠了。',
                examples: [
                    { japanese: 'お金{かね}さえあれば、何{なん}でも買{か}える。', chinese: '只要有錢，什麼都能買。' },
                    { japanese: '薬{くすり}さえ飲{の}めば、すぐ治{なお}る。', chinese: '只要吃藥就會馬上好。' },
                    { japanese: '「どうしたら受{う}かる？」\n「勉強{べんきょう}さえすれば、受{う}かるよ。」', chinese: '「要怎樣才能考上？」\n「只要讀書就能考上。」' }
                ]
            },
            {
                usageId: 2,
                title: '動詞的接續方式',
                description: '動詞接續時有多種形式。',
                examples: [
                    { japanese: '行{い}きさえすれば大丈夫{だいじょうぶ}だ。', chinese: '只要去就沒問題。' },
                    { japanese: '練習{れんしゅう}さえすれば上手{じょうず}になる。', chinese: '只要練習就會變厲害。' },
                    { japanese: '「どうすれば痩{や}せる？」\n「運動{うんどう}さえすれば痩{や}せるよ。」', chinese: '「要怎樣才能瘦？」\n「只要運動就會瘦。」' }
                ]
            }
        ],
        analysis: {
            title: '「さえ～ば」的用法分析',
            description: '強調某條件是達成目標的唯一或最重要條件。',
            points: [
                { rule: '名詞＋さえ＋あれば/なければ', explanation: '時間さえあれば' },
                { rule: '動詞ます形＋さえすれば', explanation: '読みさえすれば' },
                { rule: '形容詞くさえあれば', explanation: '安くさえあれば' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_sae_ba_1',
                sentence: '時間{じかん}（　）あれば、できる。',
                options: ['さえ', 'ばかり', 'だけ', 'しか'],
                correctIndex: 0,
                explanation: '只要有時間就能做。'
            },
            {
                id: 'n3_quiz_sae_ba_2',
                sentence: '彼{かれ}が来{き}（　）すれば、始{はじ}められる。',
                options: ['だけ', 'しか', 'さえ', 'ばかり'],
                correctIndex: 2,
                explanation: '只要他來就能開始。'
            },
            {
                id: 'n3_quiz_sae_ba_3',
                sentence: '健康{けんこう}（　）あれば、他{ほか}は何{なに}もいらない。',
                options: ['さえ', 'だけ', 'ばかり', 'しか'],
                correctIndex: 0,
                explanation: '只要有健康，其他什麼都不需要。'
            },
            {
                id: 'n3_quiz_sae_ba_4',
                sentence: '「どうしたら日本語{にほんご}が上手{じょうず}になる？」\n「毎日{まいにち}話{はな}し（　）すれば上手{じょうず}になるよ。」',
                options: ['ばかり', 'だけ', 'しか', 'さえ'],
                correctIndex: 3,
                explanation: '對話情境。只要每天說就會變好。'
            },
            {
                id: 'n3_quiz_sae_ba_5',
                sentence: '「成功{せいこう}の秘訣{ひけつ}は？」\n「諦{あきら}めない（　）すれば、いつか成功{せいこう}するよ。」',
                options: ['しか', 'さえ', 'だけ', 'ばかり'],
                correctIndex: 1,
                explanation: '對話情境。只要不放棄，總有一天會成功。'
            }
        ]
    },

    'n3_sai_ni': {
        id: 'n3_sai_ni',
        pattern: '際{さい}{さい}{さい}に',
        connection: '名詞{めいし}の/動詞{どうし}辞書{じしょ}形{けい}/動詞{どうし}た形{けい} + 際{さい}{さい}{さい}に',
        translation: '在...之時',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示時機',
                description: '「際に」是較正式的說法，表示在某個時機或場合。',
                examples: [
                    { japanese: 'ご利用{りよう}の際{さい}にはお知{し}らせください。', chinese: '使用時請告知。' },
                    { japanese: '出発{しゅっぱつ}の際{さい}に確認{かくにん}してください。', chinese: '出發時請確認。' },
                    { japanese: '「いつパスポートを見{み}せますか。」\n「入国{にゅうこく}の際{さい}に見{み}せてください。」', chinese: '「什麼時候出示護照？」\n「入境時請出示。」' }
                ]
            },
            {
                usageId: 2,
                title: '表示過去發生的時機',
                description: '也可用於描述過去某個時機發生的事。',
                examples: [
                    { japanese: '旅行{りょこう}の際{さい}に買{か}ったお土産{みやげ}だ。', chinese: '這是旅行時買的紀念品。' },
                    { japanese: '面接{めんせつ}の際{さい}にこう言{い}われた。', chinese: '面試時被這樣說了。' },
                    { japanese: '「これ、いつ買{か}ったの？」\n「先月{せんげつ}出張{しゅっちょう}の際{さい}に買{か}ったの。」', chinese: '「這什麼時候買的？」\n「上個月出差時買的。」' }
                ]
            }
        ],
        analysis: {
            title: '「際に」的用法分析',
            description: '「際に」比「時に」更正式，常用於書面或正式場合。',
            points: [
                { rule: '比「時に」更正式', explanation: '常見於通知、說明書等' },
                { rule: '可省略「に」變成「際」', explanation: '「その際」=那時候' },
                { rule: '常與敬語一起使用', explanation: '「ご利用の際は」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_sai_ni_1',
                sentence: '退出{たいしゅつ}の（　）、カードをお返{かえ}しください。',
                options: ['ので', '際に', 'ために', 'から'],
                correctIndex: 1,
                explanation: '離開時請歸還卡片。'
            },
            {
                id: 'n3_quiz_sai_ni_2',
                sentence: '緊急{きんきゅう}の（　）は、このボタンを押{お}してください。',
                options: ['際に', 'ために', 'から', 'ので'],
                correctIndex: 0,
                explanation: '緊急時請按此按鈕。'
            },
            {
                id: 'n3_quiz_sai_ni_3',
                sentence: '購入{こうにゅう}（　）、身分証{みぶんしょう}が必要{ひつよう}です。',
                options: ['のために', 'のので', 'の際に', 'のから'],
                correctIndex: 2,
                explanation: '購買時需要身分證。'
            },
            {
                id: 'n3_quiz_sai_ni_4',
                sentence: '「いつもらったの？」\n「卒業{そつぎょう}（　）もらったんだ。」',
                options: ['のので', 'のから', 'のために', 'の際に'],
                correctIndex: 3,
                explanation: '對話情境。畢業時收到的。'
            },
            {
                id: 'n3_quiz_sai_ni_5',
                sentence: '「質問{しつもん}したいんですが。」\n「ご不明{ふめい}な点{てん}がございました（　）、お問{と}い合{あ}わせください。」',
                options: ['際には', 'からは', 'のでは', 'ためには'],
                correctIndex: 0,
                explanation: '對話情境。有不清楚的地方時請詢問。'
            }
        ]
    },

    'n3_sai_ni_1': {
        id: 'n3_sai_ni_1',
        pattern: '際{さい}{さい}{さい}に',
        connection: '動詞{どうし}辞書{じしょ}形{けい}/た形{けい} + 際{さい}{さい}{さい}に',
        translation: '在...的時候',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '動詞接續',
                description: '動詞可以用辞書形或た形接「際に」。',
                examples: [
                    { japanese: '申{もう}し込{こ}む際{さい}に、書類{しょるい}が必要{ひつよう}です。', chinese: '申請時需要文件。' },
                    { japanese: '訪問{ほうもん}した際{さい}に、不在{ふざい}だった。', chinese: '拜訪時不在。' },
                    { japanese: '「いつ聞{き}いたの？」\n「電話{でんわ}した際{さい}に聞{き}いたんだ。」', chinese: '「什麼時候聽說的？」\n「打電話時聽說的。」' }
                ]
            }
        ],
        analysis: {
            title: '「際に」的動詞接續',
            description: '辞書形表示將來的時機，た形表示過去的時機。',
            points: [
                { rule: '辞書形＋際に：將要做某事時', explanation: '申し込む際に' },
                { rule: 'た形＋際に：做了某事時', explanation: '訪問した際に' },
                { rule: '「～した際」常用於敘述過去經驗', explanation: '旅行した際に見た' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_sai_ni_1_1',
                sentence: '予約{よやく}する（　）、人数{にんずう}をお伝{つた}えください。',
                options: ['から', 'ために', '際に', 'ので'],
                correctIndex: 2,
                explanation: '預約時請告知人數。'
            },
            {
                id: 'n3_quiz_sai_ni_1_2',
                sentence: '引{ひ}っ越{こ}した（　）、住所{じゅうしょ}を変更{へんこう}してください。',
                options: ['ので', 'から', 'ために', '際に'],
                correctIndex: 3,
                explanation: '搬家時請變更地址。'
            },
            {
                id: 'n3_quiz_sai_ni_1_3',
                sentence: '出国{しゅっこく}する（　）、手続{てつづ}きが必要{ひつよう}だ。',
                options: ['際には', 'からは', 'のでは', 'ためには'],
                correctIndex: 0,
                explanation: '出國時需要辦手續。'
            },
            {
                id: 'n3_quiz_sai_ni_1_4',
                sentence: '「いつ彼{かれ}に会{あ}ったの？」\n「会議{かいぎ}に出席{しゅっせき}した（　）会{あ}ったよ。」',
                options: ['ので', '際に', 'ために', 'から'],
                correctIndex: 1,
                explanation: '對話情境。出席會議時見到的。'
            },
            {
                id: 'n3_quiz_sai_ni_1_5',
                sentence: '「いつ買{か}えばいい？」\n「チケットを受{う}け取{と}る（　）買{か}ってね。」',
                options: ['ために', 'ので', 'から', '際に'],
                correctIndex: 3,
                explanation: '對話情境。領票時買吧。'
            }
        ]
    },

    'n3_saichuu_ni': {
        id: 'n3_saichuu_ni',
        pattern: '最中{さいちゅう}{さいちゅう}に',
        connection: '名詞{めいし}の/動詞{どうし}ている + 最中{さいちゅう}{さいちゅう}に',
        translation: '正在...之中',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示正在進行中',
                description: '「最中に」表示正在進行某動作的時候發生了其他事情。',
                examples: [
                    { japanese: '食事{しょくじ}の最中{さいちゅう}に電話{でんわ}がかかってきた。', chinese: '吃飯吃到一半電話響了。' },
                    { japanese: '会議{かいぎ}の最中{さいちゅう}に地震{じしん}が起{お}きた。', chinese: '開會開到一半發生地震。' },
                    { japanese: '「なんで出{で}なかったの？」\n「仕事{しごと}の最中{さいちゅう}だったから。」', chinese: '「你怎麼沒接？」\n「因為正在工作。」' }
                ]
            },
            {
                usageId: 2,
                title: '動詞的接續',
                description: '動詞用「ている」形或名詞化形式接續。',
                examples: [
                    { japanese: '寝{ね}ている最中{さいちゅう}に起{お}こされた。', chinese: '正在睡覺時被叫醒。' },
                    { japanese: '話{はな}している最中{さいちゅう}に邪魔{じゃま}しないで。', chinese: '說話時別打擾。' },
                    { japanese: '「ごめん、今{いま}いい？」\n「ちょっと待{ま}って、勉強{べんきょう}している最中{さいちゅう}だから。」', chinese: '「抱歉，現在可以嗎？」\n「等一下，正在讀書。」' }
                ]
            }
        ],
        analysis: {
            title: '「最中に」的用法分析',
            description: '強調正好在做某事的時候，常有被打斷的感覺。',
            points: [
                { rule: '名詞＋の最中に', explanation: '会議の最中に' },
                { rule: '動詞ている＋最中に', explanation: '食べている最中に' },
                { rule: '常暗示被打斷或發生意外', explanation: '有「正當...時候」的語感' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_saichuu_ni_1',
                sentence: '授業{じゅぎょう}{じゅぎょう}の（　）、居眠{いねむ}りしてしまった。',
                options: ['最中に', 'ので', 'ために', 'から'],
                correctIndex: 0,
                explanation: '上課上到一半打瞌睡了。'
            },
            {
                id: 'n3_quiz_saichuu_ni_2',
                sentence: '試験{しけん}を受{う}けている（　）、具合{ぐあい}が悪{わる}くなった。',
                options: ['最中に', 'ので', 'から', 'ために'],
                correctIndex: 0,
                explanation: '正在考試時身體不舒服了。'
            },
            {
                id: 'n3_quiz_saichuu_ni_3',
                sentence: '映画{えいが}の（　）、携帯{けいたい}が鳴{な}った。',
                options: ['最中に', 'から', 'ので', 'ために'],
                correctIndex: 0,
                explanation: '看電影看到一半手機響了。'
            },
            {
                id: 'n3_quiz_saichuu_ni_4',
                sentence: '「なんで聞{き}かなかったの？」\n「説明{せつめい}の（　）だったから。」',
                options: ['ので', 'ため', '最中', 'から'],
                correctIndex: 2,
                explanation: '對話情境。因為正在說明中。'
            },
            {
                id: 'n3_quiz_saichuu_ni_5',
                sentence: '「ドアを開{あ}けないで！」\n「え、着替{きが}えている（　）だったの？」',
                options: ['ため', '最中', 'から', 'ので'],
                correctIndex: 1,
                explanation: '對話情境。正在換衣服嗎？'
            }
        ]
    },

    'n3_saichuu_ni_1': {
        id: 'n3_saichuu_ni_1',
        pattern: '最中{さいちゅう}{さいちゅう}に',
        connection: '動詞{どうし}ている + 最中{さいちゅう}{さいちゅう}に/最中{さいちゅう}だ',
        translation: '正當...之時',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '「最中に」與「最中だ」',
                description: '「最中に」後接發生的事，「最中だ」用於句尾表示正在進行中。',
                examples: [
                    { japanese: '今{いま}、準備{じゅんび}している最中{さいちゅう}だ。', chinese: '現在正在準備中。' },
                    { japanese: '調査{ちょうさ}の最中{さいちゅう}です。', chinese: '正在調查中。' },
                    { japanese: '「もう終{お}わった？」\n「まだ作業{さぎょう}の最中{さいちゅう}だよ。」', chinese: '「已經結束了嗎？」\n「還在作業中。」' }
                ]
            }
        ],
        analysis: {
            title: '「最中」的句型變化',
            description: '「最中に」後接事件，「最中だ」用於描述當前狀態。',
            points: [
                { rule: '～最中に＋事件', explanation: '食事の最中に電話が来た' },
                { rule: '～最中だ（句尾）', explanation: '今、調査の最中です' },
                { rule: '否定用「最中ではない」', explanation: '今は準備の最中ではない' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_saichuu_ni_1_1',
                sentence: '今{いま}、検討{けんとう}している（　）です。',
                options: ['ので', 'ため', '最中', 'から'],
                correctIndex: 2,
                explanation: '現在正在討論中。'
            },
            {
                id: 'n3_quiz_saichuu_ni_1_2',
                sentence: '修理{しゅうり}の（　）なので、使{つか}えません。',
                options: ['最中', 'から', 'ため', 'ので'],
                correctIndex: 0,
                explanation: '正在維修中，無法使用。'
            },
            {
                id: 'n3_quiz_saichuu_ni_1_3',
                sentence: '工事{こうじ}の（　）だから通{とお}れない。',
                options: ['ので', 'ため', '最中', 'から'],
                correctIndex: 2,
                explanation: '正在施工中所以不能通過。'
            },
            {
                id: 'n3_quiz_saichuu_ni_1_4',
                sentence: '「まだ決{き}まってないの？」\n「今{いま}、話{はな}し合{あ}いの（　）だよ。」',
                options: ['ので', 'ため', 'から', '最中'],
                correctIndex: 3,
                explanation: '對話情境。現在正在商量中。'
            },
            {
                id: 'n3_quiz_saichuu_ni_1_5',
                sentence: '「食{た}べられる？」\n「まだ料理{りょうり}の（　）だから待{ま}って。」',
                options: ['ので', 'から', '最中', 'ため'],
                correctIndex: 2,
                explanation: '對話情境。還在做菜中請等一下。'
            }
        ]
    },

    'n3_sara_ni': {
        id: 'n3_sara_ni',
        pattern: 'さらに',
        connection: 'さらに + 文{ぶん}',
        translation: '進一步; 更加; 且',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示程度更加',
                description: '「さらに」表示在原有基礎上更進一步。',
                examples: [
                    { japanese: '景気{けいき}はさらに悪化{あっか}した。', chinese: '景氣進一步惡化了。' },
                    { japanese: '努力{どりょく}すれば、さらに上手{じょうず}になれる。', chinese: '如果努力，可以變得更厲害。' },
                    { japanese: '「もっと勉強{べんきょう}したい？」\n「うん、さらに深{ふか}く学{まな}びたい。」', chinese: '「想學更多嗎？」\n「嗯，想學得更深入。」' }
                ]
            },
            {
                usageId: 2,
                title: '表示追加',
                description: '「さらに」也可表示在已有的基礎上追加。',
                examples: [
                    { japanese: 'さらに詳{くわ}しい情報{じょうほう}が必要{ひつよう}だ。', chinese: '需要更詳細的資訊。' },
                    { japanese: 'さらに一人{ひとり}加{くわ}わった。', chinese: '又加入了一個人。' },
                    { japanese: '「これで全部{ぜんぶ}？」\n「いや、さらに追加{ついか}があるよ。」', chinese: '「這樣就全部了？」\n「不，還有追加的。」' }
                ]
            }
        ],
        analysis: {
            title: '「さらに」的用法分析',
            description: '「さらに」表示在已有程度或數量上的增加。',
            points: [
                { rule: '程度用法：更加...', explanation: 'さらに美しくなった' },
                { rule: '追加用法：再...、又...', explanation: 'さらに3人参加した' },
                { rule: '與「もっと」類似但更正式', explanation: '書面語中較常見' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_sara_ni_1',
                sentence: '問題{もんだい}は（　）複雑{ふくざつ}になった。',
                options: ['もう', 'さらに', 'まだ', 'やはり'],
                correctIndex: 1,
                explanation: '問題變得更加複雜了。'
            },
            {
                id: 'n3_quiz_sara_ni_2',
                sentence: '（　）努力{どりょく}が必要{ひつよう}だ。',
                options: ['やはり', 'まだ', 'もう', 'さらに'],
                correctIndex: 3,
                explanation: '需要更進一步的努力。'
            },
            {
                id: 'n3_quiz_sara_ni_3',
                sentence: '彼女{かのじょ}は（　）綺麗{きれい}になった。',
                options: ['さらに', 'もう', 'やはり', 'まだ'],
                correctIndex: 0,
                explanation: '她變得更漂亮了。'
            },
            {
                id: 'n3_quiz_sara_ni_4',
                sentence: '「足{た}りる？」\n「いや、（　）必要{ひつよう}だよ。」',
                options: ['さらに', 'まだ', 'やはり', 'もう'],
                correctIndex: 0,
                explanation: '對話情境。不，還需要更多。'
            },
            {
                id: 'n3_quiz_sara_ni_5',
                sentence: '「上達{じょうたつ}した？」\n「うん、（　）練習{れんしゅう}すればもっと上達{じょうたつ}できるよ。」',
                options: ['さらに', 'やはり', 'まだ', 'もう'],
                correctIndex: 0,
                explanation: '對話情境。再進一步練習可以更進步。'
            }
        ]
    },

    'n3_sate': {
        id: 'n3_sate',
        pattern: 'さて',
        connection: 'さて、+ 文{ぶん}',
        translation: '那麼... (切換話題)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '轉換話題',
                description: '「さて」用於從一個話題轉到另一個話題。',
                examples: [
                    { japanese: 'さて、次{つぎ}の議題{ぎだい}に移{うつ}りましょう。', chinese: '那麼，進入下一個議題吧。' },
                    { japanese: 'さて、今日{きょう}の予定{よてい}を確認{かくにん}しよう。', chinese: '那麼，確認一下今天的行程吧。' },
                    { japanese: '「話{はなし}は終{お}わったね。」\n「さて、次{つぎ}は何{なに}をする？」', chinese: '「話說完了呢。」\n「那麼，接下來做什麼？」' }
                ]
            },
            {
                usageId: 2,
                title: '開始新的話題或行動',
                description: '用於開始說話或開始做某事前的轉折。',
                examples: [
                    { japanese: 'さて、始{はじ}めましょうか。', chinese: '那麼，開始吧。' },
                    { japanese: 'さて、どうしようかな。', chinese: '那麼，該怎麼辦呢。' },
                    { japanese: '「休憩{きゅうけい}終{お}わりだね。」\n「さて、仕事{しごと}に戻{もど}ろう。」', chinese: '「休息結束了呢。」\n「那麼，回去工作吧。」' }
                ]
            }
        ],
        analysis: {
            title: '「さて」的用法分析',
            description: '「さて」是話題轉換或開始新動作時的銜接詞。',
            points: [
                { rule: '話題轉換時使用', explanation: '結束前一話題，開始新話題' },
                { rule: '表示思考或決定', explanation: '「さて、どうしよう」' },
                { rule: '常用於會議、演講等正式場合', explanation: '「さて、本題に入ります」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_sate_1',
                sentence: '（　）、本題{ほんだい}に入{はい}りましょう。',
                options: ['ところで', 'さて', 'しかし', 'だから'],
                correctIndex: 1,
                explanation: '那麼，進入正題吧。'
            },
            {
                id: 'n3_quiz_sate_2',
                sentence: '（　）、何{なに}から始{はじ}めようか。',
                options: ['さて', 'しかし', 'ところで', 'だから'],
                correctIndex: 0,
                explanation: '那麼，從什麼開始呢。'
            },
            {
                id: 'n3_quiz_sate_3',
                sentence: '（　）、次{つぎ}のステップに進{すす}みましょう。',
                options: ['さて', 'しかし', 'だから', 'ところで'],
                correctIndex: 0,
                explanation: '那麼，進入下一步吧。'
            },
            {
                id: 'n3_quiz_sate_4',
                sentence: '「準備{じゅんび}できた？」\n「うん。（　）、出発{しゅっぱつ}しよう。」',
                options: ['だから', 'しかし', 'さて', 'ところで'],
                correctIndex: 2,
                explanation: '對話情境。那麼，出發吧。'
            },
            {
                id: 'n3_quiz_sate_5',
                sentence: '「雑談{ざつだん}はここまでにして...」\n「（　）、今日{きょう}の目的{もくてき}は...」',
                options: ['しかし', 'さて', 'ところで', 'だから'],
                correctIndex: 1,
                explanation: '對話情境。那麼，今天的目的是...'
            }
        ]
    },

    'n3_sei_de': {
        id: 'n3_sei_de',
        pattern: 'せいで',
        connection: '名詞{めいし}の/普通{ふつう}形{けい} + せいで',
        translation: '都是因為... (導致負面結果)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示負面結果的原因',
                description: '「せいで」表示某事是導致負面結果的原因，帶有責備語氣。',
                examples: [
                    { japanese: '雨{あめ}のせいで試合{しあい}が中止{ちゅうし}になった。', chinese: '因為下雨比賽取消了。' },
                    { japanese: '彼{かれ}のせいで遅刻{ちこく}した。', chinese: '都怪他，遲到了。' },
                    { japanese: '「なんで風邪{かぜ}ひいたの？」\n「昨日{きのう}寒{さむ}かったせいだと思{おも}う。」', chinese: '「怎麼感冒了？」\n「我想是因為昨天很冷。」' }
                ]
            },
            {
                usageId: 2,
                title: '「せいか」的推測用法',
                description: '「せいか」表示不確定的原因推測。',
                examples: [
                    { japanese: '疲{つか}れているせいか、集中{しゅうちゅう}できない。', chinese: '可能是因為累了，無法集中。' },
                    { japanese: '年{とし}のせいか、物忘{ものわす}れが多{おお}くなった。', chinese: '可能是年紀的關係，變得健忘了。' },
                    { japanese: '「眠{ねむ}そうだね。」\n「うん、昨日{きのう}あまり寝{ね}なかったせいかな。」', chinese: '「你看起來很睏。」\n「嗯，可能是昨天沒怎麼睡的關係。」' }
                ]
            }
        ],
        analysis: {
            title: '「せいで」與「おかげで」的對比',
            description: '「せいで」用於負面結果，「おかげで」用於正面結果。',
            points: [
                { rule: '負面結果用「せいで」', explanation: '帶有責備或抱怨的語氣' },
                { rule: '「せいか」表示不確定的推測', explanation: '「可能是因為...」' },
                { rule: '「～のせいにする」表示歸咎於', explanation: '人のせいにする=怪別人' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_sei_de_1',
                sentence: '騒音{そうおん}の（　）眠{ねむ}れなかった。',
                options: ['ために', 'によって', 'せいで', 'おかげで'],
                correctIndex: 2,
                explanation: '因為噪音睡不著。'
            },
            {
                id: 'n3_quiz_sei_de_2',
                sentence: '工事{こうじ}の（　）道{みち}が渋滞{じゅうたい}している。',
                options: ['おかげで', 'せいで', 'によって', 'ために'],
                correctIndex: 1,
                explanation: '因為施工道路塞車。'
            },
            {
                id: 'n3_quiz_sei_de_3',
                sentence: '飲{の}み過{す}ぎた（　）、頭{あたま}が痛{いた}い。',
                options: ['ために', 'せいで', 'によって', 'おかげで'],
                correctIndex: 1,
                explanation: '因為喝太多頭痛。'
            },
            {
                id: 'n3_quiz_sei_de_4',
                sentence: '「なんで落{お}ちたの？」\n「緊張{きんちょう}した（　）だと思{おも}う。」',
                options: ['ため', 'せい', 'おかげ', 'から'],
                correctIndex: 1,
                explanation: '對話情境。我想是因為緊張。'
            },
            {
                id: 'n3_quiz_sei_de_5',
                sentence: '「体調{たいちょう}悪{わる}い？」\n「うん、睡眠不足{すいみんぶそく}の（　）かな。」',
                options: ['ため', 'せい', 'から', 'おかげ'],
                correctIndex: 1,
                explanation: '對話情境。可能是睡眠不足的關係。'
            }
        ]
    },

    'n3_seizei': {
        id: 'n3_seizei',
        pattern: 'せいぜい',
        connection: 'せいぜい + 數量{すうりょう}/程度{ていど}',
        translation: '充其量; 最大限度',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示最大限度',
                description: '「せいぜい」表示最多也就這樣，不會超過某個程度。',
                examples: [
                    { japanese: 'せいぜい十人{じゅうにん}しか入{はい}れない。', chinese: '最多只能進十個人。' },
                    { japanese: 'せいぜい一時間{いちじかん}で終{お}わる。', chinese: '最多一個小時就結束。' },
                    { japanese: '「どのくらいかかる？」\n「せいぜい三日{みっか}だよ。」', chinese: '「要多久？」\n「最多三天。」' }
                ]
            },
            {
                usageId: 2,
                title: '帶有輕視或限定的語氣',
                description: '「せいぜい」有時帶有「也就這樣而已」的輕視語氣。',
                examples: [
                    { japanese: '彼{かれ}にできることはせいぜいこれくらいだ。', chinese: '他能做的頂多就這樣。' },
                    { japanese: 'せいぜい頑張{がんば}れ。（帶{たい}諷{ふう}刺{し}）', chinese: '儘管努力吧。（帶諷刺）' },
                    { japanese: '「彼{かれ}、何{なに}ができる？」\n「せいぜい資料{しりょう}の整理{せいり}くらいだね。」', chinese: '「他能做什麼？」\n「頂多整理資料吧。」' }
                ]
            }
        ],
        analysis: {
            title: '「せいぜい」的用法分析',
            description: '「せいぜい」表示上限，有時帶有貶低或限定的語氣。',
            points: [
                { rule: '表示數量或程度的上限', explanation: 'せいぜい100人' },
                { rule: '有時帶有輕視或諷刺語氣', explanation: '「也就這樣」的感覺' },
                { rule: '「せいぜい頑張れ」可能是諷刺', explanation: '要看上下文判斷' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_seizei_1',
                sentence: 'この部屋{へや}は（　）二十人{にじゅうにん}までだ。',
                options: ['せいぜい', 'たくさん', '少なくとも', 'もっと'],
                correctIndex: 0,
                explanation: '這房間最多二十人。'
            },
            {
                id: 'n3_quiz_seizei_2',
                sentence: '今{いま}の給料{きゅうりょう}では（　）生活{せいかつ}するのがやっとだ。',
                options: ['少なくとも', 'たくさん', 'もっと', 'せいぜい'],
                correctIndex: 3,
                explanation: '現在的薪水頂多勉強過活。'
            },
            {
                id: 'n3_quiz_seizei_3',
                sentence: '（　）三十分{さんじゅっぷん}で着{つ}くよ。',
                options: ['もっと', 'せいぜい', 'たくさん', '少なくとも'],
                correctIndex: 1,
                explanation: '最多三十分鐘就到。'
            },
            {
                id: 'n3_quiz_seizei_4',
                sentence: '「いくらかかる？」\n「（　）五千円{ごせんえん}だよ。」',
                options: ['せいぜい', '少なくとも', 'もっと', 'たくさん'],
                correctIndex: 0,
                explanation: '對話情境。最多五千日圓。'
            },
            {
                id: 'n3_quiz_seizei_5',
                sentence: '「彼{かれ}に任{まか}せて大丈夫{だいじょうぶ}？」\n「（　）手伝{てつだ}いぐらいしかできないよ。」',
                options: ['少なくとも', 'たくさん', 'もっと', 'せいぜい'],
                correctIndex: 3,
                explanation: '對話情境。他頂多只能幫個忙。'
            }
        ]
    },

    'n3_shibaraku': {
        id: 'n3_shibaraku',
        pattern: 'しばらく',
        connection: 'しばらく + 動詞{どうし}',
        translation: '暫時; 許久',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示一段時間（暫時）',
                description: '「しばらく」表示「一會兒」或「暫時」。',
                examples: [
                    { japanese: 'しばらくお待{ま}ちください。', chinese: '請稍等一下。' },
                    { japanese: 'しばらく考{かんが}えさせてください。', chinese: '請讓我想一下。' },
                    { japanese: '「いつ戻{もど}る？」\n「しばらくしたら戻{もど}るよ。」', chinese: '「什麼時候回來？」\n「一會兒就回來。」' }
                ]
            },
            {
                usageId: 2,
                title: '表示相當長的時間（許久）',
                description: '「しばらく」也可表示相當長一段時間沒做某事。',
                examples: [
                    { japanese: 'しばらく会{あ}っていない。', chinese: '好久沒見了。' },
                    { japanese: 'しばらくぶりですね。', chinese: '好久不見呢。' },
                    { japanese: '「元気{げんき}だった？」\n「うん、しばらくだね。」', chinese: '「你好嗎？」\n「嗯，好久不見了。」' }
                ]
            }
        ],
        analysis: {
            title: '「しばらく」的用法分析',
            description: '「しばらく」的時間長短取決於上下文。',
            points: [
                { rule: '短時間：暫時、一會兒', explanation: 'しばらくお待ちください' },
                { rule: '長時間：許久、好久', explanation: 'しばらく会っていない' },
                { rule: '「しばらくぶり」表示久違', explanation: '=久しぶり' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_shibaraku_1',
                sentence: '（　）休{やす}んでから続{つづ}けよう。',
                options: ['たくさん', 'もっと', 'すぐに', 'しばらく'],
                correctIndex: 3,
                explanation: '稍微休息一下再繼續吧。'
            },
            {
                id: 'n3_quiz_shibaraku_2',
                sentence: '（　）連絡{れんらく}がなかった。',
                options: ['しばらく', 'すぐに', 'もっと', 'たくさん'],
                correctIndex: 0,
                explanation: '好一陣子沒有聯繫。'
            },
            {
                id: 'n3_quiz_shibaraku_3',
                sentence: '（　）この仕事{しごと}を続{つづ}けるつもりだ。',
                options: ['もっと', 'しばらく', 'すぐに', 'たくさん'],
                correctIndex: 1,
                explanation: '打算暫時繼續這份工作。'
            },
            {
                id: 'n3_quiz_shibaraku_4',
                sentence: '「久{ひさ}しぶり！」\n「うん、（　）だね。」',
                options: ['たくさん', 'すぐに', 'しばらく', 'もっと'],
                correctIndex: 2,
                explanation: '對話情境。好久不見。'
            },
            {
                id: 'n3_quiz_shibaraku_5',
                sentence: '「いつ決{き}める？」\n「（　）考{かんが}えてから決{き}めるよ。」',
                options: ['すぐに', 'もっと', 'しばらく', 'たくさん'],
                correctIndex: 2,
                explanation: '對話情境。想一陣子再決定。'
            }
        ]
    },

    'n3_shikanai': {
        id: 'n3_shikanai',
        pattern: 'しかない',
        connection: '動詞{どうし}辞書{じしょ}形{けい} + しかない',
        translation: '只能...; 只好...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示別無選擇',
                description: '「しかない」表示沒有其他辦法，只能這樣做。',
                examples: [
                    { japanese: '電車{でんしゃ}がないから、歩{ある}くしかない。', chinese: '沒有電車，只能走路。' },
                    { japanese: '自分{じぶん}でやるしかない。', chinese: '只能自己做。' },
                    { japanese: '「どうする？」\n「諦{あきら}めるしかないね。」', chinese: '「怎麼辦？」\n「只能放棄了。」' }
                ]
            },
            {
                usageId: 2,
                title: '表示無奈的接受',
                description: '「しかない」帶有無奈接受現狀的語氣。',
                examples: [
                    { japanese: '待{ま}つしかない。', chinese: '只能等。' },
                    { japanese: '信{しん}じるしかない。', chinese: '只能相信。' },
                    { japanese: '「助{たす}けは来{く}る？」\n「来{く}ると信{しん}じるしかないよ。」', chinese: '「會有人來救嗎？」\n「只能相信會來。」' }
                ]
            }
        ],
        analysis: {
            title: '「しかない」的用法分析',
            description: '表示只有這一個選擇，沒有其他辦法。',
            points: [
                { rule: '動詞辞書形＋しかない', explanation: '行くしかない' },
                { rule: '帶有無奈或不情願的語氣', explanation: '雖然不想但沒辦法' },
                { rule: '類似「～ほかない」', explanation: '待つほかない=待つしかない' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_shikanai_1',
                sentence: 'お金{かね}がないから、借{か}りる（　）。',
                options: ['ことがある', 'わけがない', 'しかない', 'はずがない'],
                correctIndex: 2,
                explanation: '沒錢只能借。'
            },
            {
                id: 'n3_quiz_shikanai_2',
                sentence: 'バスが来{こ}ないなら、タクシーに乗{の}る（　）。',
                options: ['はずがない', 'しかない', 'わけがない', 'ことがある'],
                correctIndex: 1,
                explanation: '公車不來只能搭計程車。'
            },
            {
                id: 'n3_quiz_shikanai_3',
                sentence: '期限{きげん}が明日{あした}だから、徹夜{てつや}する（　）。',
                options: ['はずがない', 'わけがない', 'ことがある', 'しかない'],
                correctIndex: 3,
                explanation: '期限是明天只能熬夜。'
            },
            {
                id: 'n3_quiz_shikanai_4',
                sentence: '「壊{こわ}れてる？」\n「うん、新{あたら}しいのを買{か}う（　）ね。」',
                options: ['しかない', 'ことがある', 'わけがない', 'はずがない'],
                correctIndex: 0,
                explanation: '對話情境。只能買新的了。'
            },
            {
                id: 'n3_quiz_shikanai_5',
                sentence: '「彼{かれ}、来{く}るかな？」\n「待{ま}つ（　）よ。」',
                options: ['はずがない', 'ことがある', 'わけがない', 'しかない'],
                correctIndex: 3,
                explanation: '對話情境。只能等了。'
            }
        ]
    },

    'n3_sono_tame_ni': {
        id: 'n3_sono_tame_ni',
        pattern: 'そのために',
        connection: 'そのために、+ 文{ぶん}',
        translation: '為此; 因此',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示目的「為此」',
                description: '「そのために」連接前文提到的目標，說明為達成該目標所做的事。',
                examples: [
                    { japanese: '日本{にほん}に留学{りゅうがく}したい。そのために日本語{にほんご}を勉強{べんきょう}している。', chinese: '我想去日本留學。為此正在學日語。' },
                    { japanese: '健康{けんこう}になりたい。そのために毎日{まいにち}運動{うんどう}する。', chinese: '我想變健康。為此每天運動。' },
                    { japanese: '「なんで貯金{ちょきん}してるの？」\n「家{いえ}を買{か}いたいんだ。そのために貯{た}めてるよ。」', chinese: '「你為什麼在存錢？」\n「我想買房子。為此在存錢。」' }
                ]
            },
            {
                usageId: 2,
                title: '表示原因「因此」',
                description: '「そのために」也可表示因為前述原因導致的結果。',
                examples: [
                    { japanese: '電車{でんしゃ}が遅{おく}れた。そのために会議{かいぎ}に遅刻{ちこく}した。', chinese: '電車誤點了。因此開會遲到了。' },
                    { japanese: '風邪{かぜ}をひいた。そのために試験{しけん}を受{う}けられなかった。', chinese: '感冒了。因此沒能參加考試。' },
                    { japanese: '「なんで欠席{けっせき}したの？」\n「急{きゅう}な出張{しゅっちょう}が入{はい}ったんだ。そのために行{い}けなかった。」', chinese: '「為什麼缺席？」\n「突然有出差。因此沒能去。」' }
                ]
            }
        ],
        analysis: {
            title: '「そのために」的雙重意義',
            description: '可表示目的（為了那個）或原因（因為那個）。',
            points: [
                { rule: '目的用法：為了達成某目標', explanation: '前文是目標，後文是手段' },
                { rule: '原因用法：因為某原因', explanation: '前文是原因，後文是結果' },
                { rule: '通過上下文判斷是目的還是原因', explanation: '看前後句的邏輯關係' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_sono_tame_ni_1',
                sentence: '試験{しけん}に受{う}かりたい。（　）毎日{まいにち}勉強{べんきょう}している。',
                options: ['そのかわり', 'そのために', 'そのほか', 'そのうえ'],
                correctIndex: 1,
                explanation: '想通過考試。為此每天學習。'
            },
            {
                id: 'n3_quiz_sono_tame_ni_2',
                sentence: '台風{たいふう}が来{き}た。（　）イベントが中止{ちゅうし}になった。',
                options: ['そのかわり', 'そのうえ', 'そのほか', 'そのために'],
                correctIndex: 3,
                explanation: '颱風來了。因此活動取消了。'
            },
            {
                id: 'n3_quiz_sono_tame_ni_3',
                sentence: '独立{どくりつ}したい。（　）今{いま}準備{じゅんび}している。',
                options: ['そのうえ', 'そのために', 'そのかわり', 'そのほか'],
                correctIndex: 1,
                explanation: '想獨立。為此正在準備。'
            },
            {
                id: 'n3_quiz_sono_tame_ni_4',
                sentence: '「なんでジムに通{かよ}ってるの？」\n「ダイエットしたいんだ。（　）だよ。」',
                options: ['そのかわり', 'そのうえ', 'そのほか', 'そのため'],
                correctIndex: 3,
                explanation: '對話情境。想減肥。為此去的。'
            },
            {
                id: 'n3_quiz_sono_tame_ni_5',
                sentence: '「なんで来{こ}なかったの？」\n「急{きゅう}に仕事{しごと}が入{はい}ったんだ。（　）行{い}けなかったんだ。」',
                options: ['そのうえ', 'そのほか', 'そのために', 'そのかわり'],
                correctIndex: 2,
                explanation: '對話情境。突然有工作。因此沒能去。'
            }
        ]
    },

    'n3_soretomo': {
        id: 'n3_soretomo',
        pattern: 'それとも',
        connection: 'A + それとも + B',
        translation: '或者是...; 還是...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '提供選擇',
                description: '「それとも」用於提出兩個選項讓對方選擇。',
                examples: [
                    { japanese: 'コーヒーにしますか、それとも紅茶{こうちゃ}にしますか。', chinese: '要咖啡，還是要紅茶？' },
                    { japanese: '今日{きょう}行{い}きますか、それとも明日{あした}にしますか。', chinese: '今天去，還是明天去？' },
                    { japanese: '「何{なに}食{た}べる？肉{にく}？それとも魚{さかな}？」\n「魚{さかな}がいいな。」', chinese: '「吃什麼？肉？還是魚？」\n「魚比較好。」' }
                ]
            },
            {
                usageId: 2,
                title: '在疑問句中使用',
                description: '「それとも」常用於疑問句，讓對方在選項中選擇。',
                examples: [
                    { japanese: '現金{げんきん}ですか、それともカードですか。', chinese: '付現金還是刷卡？' },
                    { japanese: '店{みせ}で食{た}べますか、それとも持{も}ち帰{かえ}りですか。', chinese: '在店裡吃還是外帶？' },
                    { japanese: '「電話{でんわ}する？それともメールにする？」\n「メールでいいよ。」', chinese: '「打電話？還是發郵件？」\n「郵件就好。」' }
                ]
            }
        ],
        analysis: {
            title: '「それとも」的用法分析',
            description: '「それとも」用於連接兩個選項，常用於疑問句。',
            points: [
                { rule: '連接兩個選項讓對方選', explanation: 'A それとも B' },
                { rule: '常用於疑問句', explanation: '提供選擇性問題' },
                { rule: '與「または」的區別', explanation: '「それとも」用於疑問，「または」用於陳述' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_soretomo_1',
                sentence: 'ホットにしますか、（　）アイスにしますか。',
                options: ['または', 'しかも', 'あるいは', 'それとも'],
                correctIndex: 3,
                explanation: '要熱的還是冰的？'
            },
            {
                id: 'n3_quiz_soretomo_2',
                sentence: '歩{ある}いて行{い}きますか、（　）バスで行{い}きますか。',
                options: ['それとも', 'または', 'あるいは', 'しかも'],
                correctIndex: 0,
                explanation: '走路去還是搭公車去？'
            },
            {
                id: 'n3_quiz_soretomo_3',
                sentence: '彼{かれ}は嘘{うそ}をついているのか、（　）本当{ほんとう}のことを言{い}っているのか。',
                options: ['それとも', 'しかも', 'あるいは', 'または'],
                correctIndex: 0,
                explanation: '他在說謊還是說真話？'
            },
            {
                id: 'n3_quiz_soretomo_4',
                sentence: '「夏{なつ}休{やす}み、海{うみ}に行{い}く？（　）山{やま}に行{い}く？」\n「海{うみ}がいいな。」',
                options: ['または', 'あるいは', 'しかも', 'それとも'],
                correctIndex: 3,
                explanation: '對話情境。暑假去海邊還是去山上？'
            },
            {
                id: 'n3_quiz_soretomo_5',
                sentence: '「来週{らいしゅう}会{あ}える？月曜日{げつようび}？（　）水曜日{すいようび}？」\n「水曜日{すいようび}なら大丈夫{だいじょうぶ}。」',
                options: ['あるいは', 'しかも', 'それとも', 'または'],
                correctIndex: 2,
                explanation: '對話情境。下週能見面嗎？週一還是週三？'
            }
        ]
    },

    'n3_sou_mo_nai': {
        id: 'n3_sou_mo_nai',
        pattern: 'そうもない',
        connection: '動詞{どうし}ます形{けい} + そうもない',
        translation: '看來不...; 不太可能...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示不太可能發生',
                description: '「そうもない」表示看起來不太可能發生某事。',
                examples: [
                    { japanese: '雨{あめ}は止{や}みそうもない。', chinese: '雨看起來不會停。' },
                    { japanese: '今日中{きょうじゅう}に終{お}わりそうもない。', chinese: '今天之內看來結束不了。' },
                    { japanese: '「間{ま}に合{あ}う？」\n「この渋滞{じゅうたい}じゃ間{ま}に合{あ}いそうもないよ。」', chinese: '「來得及嗎？」\n「這麼塞車看來來不及了。」' }
                ]
            },
            {
                usageId: 2,
                title: '表示沒有可能性的判斷',
                description: '根據眼前情況判斷某事不可能發生。',
                examples: [
                    { japanese: '彼{かれ}は来{き}そうもない。', chinese: '他看起來不會來。' },
                    { japanese: 'この問題{もんだい}は解{と}けそうもない。', chinese: '這問題看來解不開。' },
                    { japanese: '「彼女{かのじょ}、許{ゆる}してくれる？」\n「怒{おこ}りようを見{み}ると、許{ゆる}してくれそうもないね。」', chinese: '「她會原諒嗎？」\n「看她生氣的樣子，不太可能原諒。」' }
                ]
            }
        ],
        analysis: {
            title: '「そうもない」的用法分析',
            description: '「そうもない」比「そうにない」語氣更強。',
            points: [
                { rule: '表示根據情況判斷不可能', explanation: '視覺或狀況判斷' },
                { rule: '語氣比「そうにない」強', explanation: '更強調不可能性' },
                { rule: '接動詞ます形', explanation: '終わり＋そうもない' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_sou_mo_nai_1',
                sentence: '電車{でんしゃ}は来{き}（　）。',
                options: ['そうだ', 'ようだ', 'らしい', 'そうもない'],
                correctIndex: 3,
                explanation: '電車看來不會來。'
            },
            {
                id: 'n3_quiz_sou_mo_nai_2',
                sentence: 'この仕事{しごと}は一人{ひとり}ではでき（　）。',
                options: ['ようだ', 'そうだ', 'そうもない', 'らしい'],
                correctIndex: 2,
                explanation: '這工作一個人看來做不了。'
            },
            {
                id: 'n3_quiz_sou_mo_nai_3',
                sentence: '彼{かれ}は諦{あきら}め（　）。',
                options: ['ようだ', 'そうもない', 'そうだ', 'らしい'],
                correctIndex: 1,
                explanation: '他看來不會放棄。'
            },
            {
                id: 'n3_quiz_sou_mo_nai_4',
                sentence: '「治{なお}る？」\n「この状態{じょうたい}じゃ、すぐには治{なお}り（　）。」',
                options: ['ようだ', 'らしい', 'そうもない', 'そうだ'],
                correctIndex: 2,
                explanation: '對話情境。這狀態看來馬上好不了。'
            },
            {
                id: 'n3_quiz_sou_mo_nai_5',
                sentence: '「売{う}れる？」\n「この値段{ねだん}じゃ売{う}れ（　）よ。」',
                options: ['そうだ', 'ようだ', 'らしい', 'そうもない'],
                correctIndex: 3,
                explanation: '對話情境。這價格看來賣不掉。'
            }
        ]
    },

    'n3_sou_mo_nai_sou_ni_nai': {
        id: 'n3_sou_mo_nai_sou_ni_nai',
        pattern: 'そうもない /そうにない',
        connection: '動詞{どうし}ます形{けい} + そうもない/そうにない',
        translation: '看似不...; 沒什麼可能...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '「そうもない」與「そうにない」的區別',
                description: '兩者意思相近，「そうもない」語氣較強。',
                examples: [
                    { japanese: '明日{あした}までに終{お}わりそうにない。', chinese: '到明天之前看來結束不了。' },
                    { japanese: '明日{あした}までに終{お}わりそうもない。', chinese: '到明天之前根本結束不了。' },
                    { japanese: '「できそう？」\n「ちょっと難{むずか}しくて、できそうにないな。」', chinese: '「做得到嗎？」\n「有點難，看來做不到。」' }
                ]
            }
        ],
        analysis: {
            title: '「そうにない」與「そうもない」的比較',
            description: '兩者都表示不可能，但語氣強度不同。',
            points: [
                { rule: '「そうにない」較溫和', explanation: '「看來可能不...」' },
                { rule: '「そうもない」較強烈', explanation: '「根本不可能...」' },
                { rule: '兩者可互換但語氣不同', explanation: '根據場合選擇' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_sou_mo_nai_sou_ni_nai_1',
                sentence: '彼女{かのじょ}は泣{な}き止{や}み（　）。',
                options: ['らしい', 'そうにない', 'そうだ', 'ようだ'],
                correctIndex: 1,
                explanation: '她看來不會停止哭泣。'
            },
            {
                id: 'n3_quiz_sou_mo_nai_sou_ni_nai_2',
                sentence: 'この天気{てんき}じゃ出{で}かけ（　）。',
                options: ['らしい', 'ようだ', 'そうにない', 'そうだ'],
                correctIndex: 2,
                explanation: '這天氣看來出不了門。'
            },
            {
                id: 'n3_quiz_sou_mo_nai_sou_ni_nai_3',
                sentence: '彼{かれ}は賛成{さんせい}し（　）。',
                options: ['らしい', 'そうもない', 'そうだ', 'ようだ'],
                correctIndex: 1,
                explanation: '他根本不可能贊成。'
            },
            {
                id: 'n3_quiz_sou_mo_nai_sou_ni_nai_4',
                sentence: '「解決{かいけつ}する？」\n「話{はな}し合{あ}いだけでは解決{かいけつ}し（　）ね。」',
                options: ['らしい', 'そうだ', 'そうにない', 'ようだ'],
                correctIndex: 2,
                explanation: '對話情境。光靠商量看來解決不了。'
            },
            {
                id: 'n3_quiz_sou_mo_nai_sou_ni_nai_5',
                sentence: '「信{しん}じてくれる？」\n「証拠{しょうこ}がないと信{しん}じてくれ（　）よ。」',
                options: ['そうもない', 'ようだ', 'らしい', 'そうだ'],
                correctIndex: 0,
                explanation: '對話情境。沒證據根本不會相信。'
            }
        ]
    },

    'n3_sude_ni': {
        id: 'n3_sude_ni',
        pattern: 'すでに',
        connection: 'すでに + 動詞{どうし}/形容詞{けいようし}',
        translation: '已經',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示已經完成',
                description: '「すでに」是「もう」的書面語，表示某事已經發生或完成。',
                examples: [
                    { japanese: '会議{かいぎ}はすでに始{はじ}まっている。', chinese: '會議已經開始了。' },
                    { japanese: 'すでに予約{よやく}は満席{まんせき}だ。', chinese: '預約已經客滿了。' },
                    { japanese: '「まだ間{ま}に合{あ}う？」\n「すでに締{し}め切{き}りは過{す}ぎたよ。」', chinese: '「還來得及嗎？」\n「截止日期已經過了。」' }
                ]
            },
            {
                usageId: 2,
                title: '用於正式場合',
                description: '「すでに」比「もう」更正式，常用於書面或報導。',
                examples: [
                    { japanese: 'すでに多{おお}くの人{ひと}が避難{ひなん}している。', chinese: '已經有很多人避難了。' },
                    { japanese: 'この件{けん}はすでに報告{ほうこく}済{ず}みです。', chinese: '這件事已經報告過了。' },
                    { japanese: '「知{し}ってた？」\n「うん、すでに聞{き}いていたよ。」', chinese: '「你知道嗎？」\n「嗯，已經聽說了。」' }
                ]
            }
        ],
        analysis: {
            title: '「すでに」與「もう」的對比',
            description: '「すでに」是較正式的說法。',
            points: [
                { rule: '「すでに」較正式書面', explanation: '常用於新聞、報告' },
                { rule: '「もう」較口語', explanation: '日常對話常用' },
                { rule: '兩者意思相同', explanation: '都表示「已經」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_sude_ni_1',
                sentence: '店{みせ}は（　）閉{し}まっていた。',
                options: ['やっと', 'ついに', 'すでに', 'まだ'],
                correctIndex: 2,
                explanation: '店已經關了。'
            },
            {
                id: 'n3_quiz_sude_ni_2',
                sentence: '問題{もんだい}は（　）解決{かいけつ}済{ず}みだ。',
                options: ['やっと', 'まだ', 'ついに', 'すでに'],
                correctIndex: 3,
                explanation: '問題已經解決了。'
            },
            {
                id: 'n3_quiz_sude_ni_3',
                sentence: '契約{けいやく}は（　）終了{しゅうりょう}している。',
                options: ['すでに', 'やっと', 'ついに', 'まだ'],
                correctIndex: 0,
                explanation: '合約已經終止了。'
            },
            {
                id: 'n3_quiz_sude_ni_4',
                sentence: '「チケット、ある？」\n「（　）売{う}り切{き}れだって。」',
                options: ['すでに', 'やっと', 'まだ', 'ついに'],
                correctIndex: 0,
                explanation: '對話情境。已經賣完了。'
            },
            {
                id: 'n3_quiz_sude_ni_5',
                sentence: '「彼{かれ}に連絡{れんらく}した？」\n「うん、（　）伝{つた}えたよ。」',
                options: ['すでに', 'ついに', 'まだ', 'やっと'],
                correctIndex: 0,
                explanation: '對話情境。已經傳達了。'
            }
        ]
    },

    'n3_sunawachi': {
        id: 'n3_sunawachi',
        pattern: 'すなわち',
        connection: 'A、すなわち B',
        translation: '即; 換言之',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '換句話說',
                description: '「すなわち」用於重新解釋或說明前面的內容。',
                examples: [
                    { japanese: '私{わたし}の父{ちち}、すなわち彼女{かのじょ}の祖父{そふ}は医者{いしゃ}だ。', chinese: '我的父親，也就是她的祖父是醫生。' },
                    { japanese: 'この結果{けっか}はすなわち失敗{しっぱい}を意味{いみ}する。', chinese: '這結果也就是意味著失敗。' },
                    { japanese: '「これ、どういう意味{いみ}？」\n「予算{よさん}オーバー、すなわち計画{けいかく}中止{ちゅうし}ということだ。」', chinese: '「這是什麼意思？」\n「預算超支，也就是說計畫中止。」' }
                ]
            },
            {
                usageId: 2,
                title: '強調等同關係',
                description: '用於說明A就是B的關係。',
                examples: [
                    { japanese: '彼{かれ}の意見{いけん}はすなわち会社{かいしゃ}の方針{ほうしん}だ。', chinese: '他的意見就是公司的方針。' },
                    { japanese: '努力{どりょく}はすなわち成功{せいこう}への道{みち}だ。', chinese: '努力就是通往成功的道路。' },
                    { japanese: '「社長{しゃちょう}はどう思{おも}ってるの？」\n「社長{しゃちょう}の意見{いけん}、すなわち全員{ぜんいん}賛成{さんせい}だ。」', chinese: '「社長怎麼想？」\n「社長的意見就是全員贊成。」' }
                ]
            }
        ],
        analysis: {
            title: '「すなわち」的用法分析',
            description: '「すなわち」是較正式的換言方式。',
            points: [
                { rule: '用於解釋說明前文', explanation: '「也就是說」' },
                { rule: '表示A=B的等同關係', explanation: '「即」的意思' },
                { rule: '較正式，多用於書面', explanation: '口語較少用' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_sunawachi_1',
                sentence: 'H2O、（　）水{みず}のことだ。',
                options: ['すなわち', 'しかし', 'ところで', 'だから'],
                correctIndex: 0,
                explanation: 'H2O就是水。'
            },
            {
                id: 'n3_quiz_sunawachi_2',
                sentence: '彼{かれ}の答{こた}えは（　）「ノー」ということだ。',
                options: ['ところで', 'しかし', 'すなわち', 'だから'],
                correctIndex: 2,
                explanation: '他的回答也就是「不」的意思。'
            },
            {
                id: 'n3_quiz_sunawachi_3',
                sentence: '首都{しゅと}、（　）東京{とうきょう}で開催{かいさい}される。',
                options: ['しかし', 'だから', 'ところで', 'すなわち'],
                correctIndex: 3,
                explanation: '在首都，也就是東京舉辦。'
            },
            {
                id: 'n3_quiz_sunawachi_4',
                sentence: '「この略語{りゃくご}は何{なに}？」\n「AI、（　）人工知能{じんこうちのう}のことだよ。」',
                options: ['ところで', 'しかし', 'だから', 'すなわち'],
                correctIndex: 3,
                explanation: '對話情境。AI就是人工智慧。'
            },
            {
                id: 'n3_quiz_sunawachi_5',
                sentence: '「結果{けっか}はどうだった？」\n「不合格{ふごうかく}、（　）また来年{らいねん}ということだ。」',
                options: ['すなわち', 'ところで', 'しかし', 'だから'],
                correctIndex: 0,
                explanation: '對話情境。不合格，也就是明年再來。'
            }
        ]
    },

    'n3_suuryou_wa': {
        id: 'n3_suuryou_wa',
        pattern: '数{すう}量{すうりょう} + は',
        connection: '數量{すうりょう}{すうりょう}詞{し} + は',
        translation: '至少 (數量)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示最低數量',
                description: '「數量＋は」表示至少有這個數量，可能更多。',
                examples: [
                    { japanese: '百人{ひゃくにん}は来{き}ただろう。', chinese: '至少來了一百人吧。' },
                    { japanese: '三時間{さんじかん}はかかる。', chinese: '至少要花三個小時。' },
                    { japanese: '「何人{なんにん}来{き}た？」\n「五十人{ごじゅうにん}は来{き}たよ。」', chinese: '「來了幾個人？」\n「至少來了五十人。」' }
                ]
            },
            {
                usageId: 2,
                title: '強調數量不少',
                description: '暗示實際數量可能比說的更多。',
                examples: [
                    { japanese: '一万円{いちまんえん}はするだろう。', chinese: '至少要一萬日圓吧。' },
                    { japanese: '二{に}キロは歩{ある}いた。', chinese: '至少走了兩公里。' },
                    { japanese: '「いくらかかった？」\n「五万円{ごまんえん}はかかったね。」', chinese: '「花了多少？」\n「至少花了五萬日圓。」' }
                ]
            }
        ],
        analysis: {
            title: '「數量＋は」的用法分析',
            description: '「は」加在數量後表示「至少」。',
            points: [
                { rule: '表示最低限度', explanation: '可能比這更多' },
                { rule: '帶有推測或估計的語氣', explanation: '「大概至少...」' },
                { rule: '與「も」的區別', explanation: '「三時間は」（至少3小時）vs「三時間も」（整整3小時）' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_suuryou_wa_1',
                sentence: 'このケーキ、一個{いっこ}三百円{さんびゃくえん}（　）するよ。',
                options: ['は', 'が', 'も', 'を'],
                correctIndex: 0,
                explanation: '這蛋糕一個至少要三百日圓。'
            },
            {
                id: 'n3_quiz_suuryou_wa_2',
                sentence: '完成{かんせい}まで一週間{いっしゅうかん}（　）かかる。',
                options: ['を', 'も', 'は', 'が'],
                correctIndex: 2,
                explanation: '完成至少要一週。'
            },
            {
                id: 'n3_quiz_suuryou_wa_3',
                sentence: 'この店{みせ}、毎日{まいにち}二百人{にひゃくにん}（　）来{く}る。',
                options: ['も', 'は', 'を', 'が'],
                correctIndex: 1,
                explanation: '這家店每天至少來二百人。'
            },
            {
                id: 'n3_quiz_suuryou_wa_4',
                sentence: '「どのくらい待{ま}つ？」\n「三十分{さんじゅっぷん}（　）待{ま}つと思{おも}うよ。」',
                options: ['が', 'を', 'は', 'も'],
                correctIndex: 2,
                explanation: '對話情境。我想至少要等三十分鐘。'
            },
            {
                id: 'n3_quiz_suuryou_wa_5',
                sentence: '「何{なん}ページ読{よ}んだ？」\n「五十{ごじゅう}ページ（　）読{よ}んだよ。」',
                options: ['が', 'も', 'を', 'は'],
                correctIndex: 3,
                explanation: '對話情境。至少讀了五十頁。'
            }
        ]
    },

    'n3_suuryou_wa_1': {
        id: 'n3_suuryou_wa_1',
        pattern: '数{すう}量{すうりょう} + は',
        connection: '數量{すうりょう}{すうりょう}詞{し} + は',
        translation: '至少...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '與「も」的對比',
                description: '「數量＋は」表示最少，「數量＋も」表示數量很多（意外、驚訝）。',
                examples: [
                    { japanese: '十冊{じゅっさつ}は読{よ}んだ。（至{し}少{しょう}10本{ほん}）', chinese: '至少讀了十本。' },
                    { japanese: '十冊{じゅっさつ}も読{よ}んだ。（竟{きょう}然{ぜん}10本{ほん}）', chinese: '竟然讀了十本。' },
                    { japanese: '「どのくらい必要{ひつよう}？」\n「十個{じゅっこ}は必要{ひつよう}だよ。」', chinese: '「需要多少？」\n「至少需要十個。」' }
                ]
            }
        ],
        analysis: {
            title: '「は」與「も」在數量後的區別',
            description: '「は」表示最少值，「も」表示驚訝於數量多。',
            points: [
                { rule: '數量＋は：至少', explanation: '最低限度的估計' },
                { rule: '數量＋も：竟然', explanation: '表示數量超出預期' },
                { rule: '根據語境選擇使用', explanation: '想強調什麼而決定' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_suuryou_wa_1_1',
                sentence: 'あと一時間{いちじかん}（　）必要{ひつよう}だ。',
                options: ['は', 'を', 'も', 'が'],
                correctIndex: 0,
                explanation: '還需要至少一個小時。'
            },
            {
                id: 'n3_quiz_suuryou_wa_1_2',
                sentence: '五千円{ごせんえん}（　）持{も}っていったほうがいい。',
                options: ['は', 'も', 'を', 'が'],
                correctIndex: 0,
                explanation: '至少帶五千日圓比較好。'
            },
            {
                id: 'n3_quiz_suuryou_wa_1_3',
                sentence: '二回{にかい}（　）確認{かくにん}したはずだ。',
                options: ['は', 'が', 'を', 'も'],
                correctIndex: 0,
                explanation: '應該至少確認過兩次了。'
            },
            {
                id: 'n3_quiz_suuryou_wa_1_4',
                sentence: '「何個{なんこ}買{か}えばいい？」\n「三個{さんこ}（　）買{か}っておいて。」',
                options: ['が', 'を', 'は', 'も'],
                correctIndex: 2,
                explanation: '對話情境。至少買三個。'
            },
            {
                id: 'n3_quiz_suuryou_wa_1_5',
                sentence: '「彼{かれ}の年齢{ねんれい}は？」\n「四十歳{よんじゅっさい}（　）いってるだろう。」',
                options: ['は', 'が', 'を', 'も'],
                correctIndex: 0,
                explanation: '對話情境。至少有四十歲了吧。'
            }
        ]
    },

    'n3_ta_mono_da': {
        id: 'n3_ta_mono_da',
        pattern: 'たものだ',
        connection: '動詞{どうし}た形{けい} + ものだ',
        translation: '過去經常...; 曾經...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '懷念過去',
                description: '「たものだ」用於回憶過去經常做的事，帶有懷舊感。',
                examples: [
                    { japanese: '子供{こども}の頃{ころ}、よくこの川{かわ}で泳{およ}いだものだ。', chinese: '小時候經常在這條河游泳。' },
                    { japanese: '学生{がくせい}時代{じだい}は夜遅{よるおそ}くまで勉強{べんきょう}したものだ。', chinese: '學生時代經常讀書到深夜。' },
                    { japanese: '「この店{みせ}、懐{なつ}かしい？」\n「うん、よく来{き}たものだよ。」', chinese: '「這家店很懷念嗎？」\n「嗯，以前經常來。」' }
                ]
            },
            {
                usageId: 2,
                title: '感嘆過去的變化',
                description: '用於感嘆過去與現在的對比。',
                examples: [
                    { japanese: '昔{むかし}はこんなビルはなかったものだ。', chinese: '以前沒有這樣的大樓。' },
                    { japanese: 'あの頃{ころ}は貧{まず}しかったものだ。', chinese: '那時候很窮啊。' },
                    { japanese: '「この町{まち}、変{か}わったね。」\n「うん、昔{むかし}は田{た}んぼばかりだったものだ。」', chinese: '「這個鎮變了呢。」\n「嗯，以前都是稻田。」' }
                ]
            }
        ],
        analysis: {
            title: '「たものだ」的用法分析',
            description: '用於回憶過去，帶有懷舊或感嘆的語氣。',
            points: [
                { rule: '動詞た形＋ものだ', explanation: '行ったものだ' },
                { rule: '常與「よく」「昔は」搭配', explanation: '強調過去經常' },
                { rule: '帶有懷舊或感慨的語氣', explanation: '「那時候啊...」的感覺' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ta_mono_da_1',
                sentence: '子供{こども}の頃{ころ}、祖母{そぼ}の家{いえ}によく遊{あそ}びに行{い}った（　）。',
                options: ['ことだ', 'はずだ', 'ものだ', 'わけだ'],
                correctIndex: 2,
                explanation: '小時候經常去祖母家玩。'
            },
            {
                id: 'n3_quiz_ta_mono_da_2',
                sentence: '昔{むかし}はこの辺{へん}は静{しず}かだった（　）。',
                options: ['ことだ', 'わけだ', 'ものだ', 'はずだ'],
                correctIndex: 2,
                explanation: '以前這附近很安靜啊。'
            },
            {
                id: 'n3_quiz_ta_mono_da_3',
                sentence: '若{わか}い頃{ころ}はよく徹夜{てつや}した（　）。',
                options: ['わけだ', 'ことだ', 'ものだ', 'はずだ'],
                correctIndex: 2,
                explanation: '年輕時經常熬夜。'
            },
            {
                id: 'n3_quiz_ta_mono_da_4',
                sentence: '「懐{なつ}かしいね。」\n「うん、ここでよく遊{あそ}んだ（　）ね。」',
                options: ['はずだ', 'ことだ', 'ものだ', 'わけだ'],
                correctIndex: 2,
                explanation: '對話情境。以前經常在這裡玩呢。'
            },
            {
                id: 'n3_quiz_ta_mono_da_5',
                sentence: '「この曲{きょく}、知{し}ってる？」\n「うん、学生{がくせい}時代{じだい}によく聞{き}いた（　）よ。」',
                options: ['ことだ', 'わけだ', 'ものだ', 'はずだ'],
                correctIndex: 2,
                explanation: '對話情境。學生時代經常聽這首歌。'
            }
        ]
    },

    'n3_ta_totan': {
        id: 'n3_ta_totan',
        pattern: 'たとたん',
        connection: '動詞{どうし}た形{けい} + とたん（に）',
        translation: '剛一...就...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示緊接著發生',
                description: '「たとたん」表示前一動作剛完成，緊接著就發生另一件事。',
                examples: [
                    { japanese: '家{いえ}を出{で}たとたん、雨{あめ}が降{ふ}り出{だ}した。', chinese: '剛一出門就開始下雨了。' },
                    { japanese: 'ドアを開{あ}けたとたん、猫{ねこ}が飛{と}び出{だ}してきた。', chinese: '剛開門貓就跑出來了。' },
                    { japanese: '「何{なに}があったの？」\n「電気{でんき}をつけたとたん、消{き}えちゃったんだ。」', chinese: '「發生什麼事了？」\n「剛開燈就滅了。」' }
                ]
            },
            {
                usageId: 2,
                title: '意外的事情發生',
                description: '常用於意料之外的事情發生。',
                examples: [
                    { japanese: '立{た}ち上{あ}がったとたん、めまいがした。', chinese: '剛站起來就頭暈了。' },
                    { japanese: '彼女{かのじょ}を見{み}たとたん、泣{な}き出{だ}した。', chinese: '一看到她就哭了出來。' },
                    { japanese: '「どうしたの？」\n「走{はし}り出{だ}したとたん、転{ころ}んじゃったんだ。」', chinese: '「怎麼了？」\n「剛開始跑就跌倒了。」' }
                ]
            }
        ],
        analysis: {
            title: '「たとたん」的用法分析',
            description: '強調兩個動作緊密相連，幾乎同時發生。',
            points: [
                { rule: '前後動作幾乎同時', explanation: '非常短的時間間隔' },
                { rule: '後句常是意外或無法控制的事', explanation: '突然發生的情況' },
                { rule: '「とたんに」也可以', explanation: '加「に」意思相同' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ta_totan_1',
                sentence: 'ベッドに入{はい}った（　）、眠{ねむ}ってしまった。',
                options: ['ばかり', 'とたん', 'ところ', 'まま'],
                correctIndex: 1,
                explanation: '剛躺到床上就睡著了。'
            },
            {
                id: 'n3_quiz_ta_totan_2',
                sentence: '食{た}べ始{はじ}めた（　）、電話{でんわ}が鳴{な}った。',
                options: ['ばかり', 'とたん', 'ところ', 'まま'],
                correctIndex: 1,
                explanation: '剛開始吃電話就響了。'
            },
            {
                id: 'n3_quiz_ta_totan_3',
                sentence: '目{め}を覚{さ}ました（　）、地震{じしん}が起{お}きた。',
                options: ['ばかり', 'とたん', 'ところ', 'まま'],
                correctIndex: 1,
                explanation: '剛醒來就發生地震了。'
            },
            {
                id: 'n3_quiz_ta_totan_4',
                sentence: '「何{なに}があったの？」\n「座{すわ}った（　）、椅子{いす}が壊{こわ}れちゃって。」',
                options: ['ところで', 'ばかりに', 'ままで', 'とたんに'],
                correctIndex: 3,
                explanation: '對話情境。剛坐下椅子就壞了。'
            },
            {
                id: 'n3_quiz_ta_totan_5',
                sentence: '「大丈夫{だいじょうぶ}？」\n「急{きゅう}に立{た}った（　）、頭{あたま}がくらくらして。」',
                options: ['ばかり', 'ところ', 'まま', 'とたん'],
                correctIndex: 3,
                explanation: '對話情境。突然站起來就頭暈了。'
            }
        ]
    },

    'n3_tabi_ni': {
        id: 'n3_tabi_ni',
        pattern: 'たびに',
        connection: '動詞{どうし}辞書{じしょ}形{けい}/名詞{めいし}の + たびに',
        translation: '每當...時',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示每次都發生',
                description: '「たびに」表示每當做某事時，就會發生另一件事。',
                examples: [
                    { japanese: 'この曲{きょく}を聞{き}くたびに、彼女{かのじょ}を思{おも}い出{だ}す。', chinese: '每當聽這首歌，就會想起她。' },
                    { japanese: '会{あ}うたびに、元気{げんき}になっている。', chinese: '每次見面都變得更有精神。' },
                    { japanese: '「よく来{く}るの？」\n「うん、来{く}るたびに新{あたら}しい発見{はっけん}があるよ。」', chinese: '「常來嗎？」\n「嗯，每次來都有新發現。」' }
                ]
            },
            {
                usageId: 2,
                title: '名詞接續',
                description: '名詞後加「の」接「たびに」。',
                examples: [
                    { japanese: '旅行{りょこう}のたびに、お土産{みやげ}を買{か}う。', chinese: '每次旅行都會買紀念品。' },
                    { japanese: '帰国{きこく}のたびに、家族{かぞく}に会{あ}う。', chinese: '每次回國都會見家人。' },
                    { japanese: '「よく泣{な}くね。」\n「映画{えいが}のたびに泣{な}いちゃうんだ。」', chinese: '「你常哭呢。」\n「每次看電影都會哭。」' }
                ]
            }
        ],
        analysis: {
            title: '「たびに」的用法分析',
            description: '表示每次某事發生時，就伴隨著另一件事。',
            points: [
                { rule: '動詞辞書形＋たびに', explanation: '見るたびに' },
                { rule: '名詞＋の＋たびに', explanation: '旅行のたびに' },
                { rule: '強調重複發生的規律', explanation: '「每次都...」的意思' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_tabi_ni_1',
                sentence: 'この写真{しゃしん}を見{み}る（　）、昔{むかし}を思{おも}い出{だ}す。',
                options: ['ところで', 'ままに', 'たびに', 'ばかりに'],
                correctIndex: 2,
                explanation: '每當看這張照片就會想起從前。'
            },
            {
                id: 'n3_quiz_tabi_ni_2',
                sentence: '出張{しゅっちょう}の（　）、お土産{みやげ}を買{か}ってくる。',
                options: ['ままに', 'たびに', 'ばかりに', 'ところで'],
                correctIndex: 1,
                explanation: '每次出差都會買紀念品回來。'
            },
            {
                id: 'n3_quiz_tabi_ni_3',
                sentence: '彼{かれ}に会{あ}う（　）、新{あたら}しいことを教{おし}えてもらう。',
                options: ['ところで', 'ばかりに', 'ままに', 'たびに'],
                correctIndex: 3,
                explanation: '每次見到他都會學到新東西。'
            },
            {
                id: 'n3_quiz_tabi_ni_4',
                sentence: '「この歌{うた}、好{す}き？」\n「うん、聞{き}く（　）元気{げんき}が出{で}るよ。」',
                options: ['ところで', 'ばかりに', 'たびに', 'ままに'],
                correctIndex: 2,
                explanation: '對話情境。每次聽都會有精神。'
            },
            {
                id: 'n3_quiz_tabi_ni_5',
                sentence: '「実家{じっか}に帰{かえ}る？」\n「帰{かえ}る（　）、太{ふと}っちゃうんだよね。」',
                options: ['ままに', 'ばかりに', 'たびに', 'ところで'],
                correctIndex: 2,
                explanation: '對話情境。每次回老家都會變胖。'
            }
        ]
    },

    'n3_tame_ni': {
        id: 'n3_tame_ni',
        pattern: 'ために',
        connection: '名詞{めいし}の/動詞{どうし}辞書{じしょ}形{けい} + ために',
        translation: '為了...; 因為...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示目的',
                description: '「ために」表示為了達成某個目標。',
                examples: [
                    { japanese: '健康{けんこう}のために運動{うんどう}する。', chinese: '為了健康而運動。' },
                    { japanese: '日本語{にほんご}を学{まな}ぶために留学{りゅうがく}した。', chinese: '為了學日語而留學。' },
                    { japanese: '「なぜ貯金{ちょきん}してるの？」\n「旅行{りょこう}のために貯{た}めてるんだ。」', chinese: '「為什麼在存錢？」\n「為了旅行在存。」' }
                ]
            },
            {
                usageId: 2,
                title: '表示原因',
                description: '「ために」也可表示原因，接た形時多為原因用法。',
                examples: [
                    { japanese: '事故{じこ}があったために電車{でんしゃ}が遅{おく}れた。', chinese: '因為發生事故電車誤點了。' },
                    { japanese: '雨{あめ}のために試合{しあい}が中止{ちゅうし}になった。', chinese: '因為下雨比賽取消了。' },
                    { japanese: '「なんで遅{おく}れたの？」\n「渋滞{じゅうたい}のために遅{おく}れました。」', chinese: '「為什麼遲到了？」\n「因為塞車遲到了。」' }
                ]
            }
        ],
        analysis: {
            title: '「ために」的雙重用法',
            description: '可表示目的或原因，需從上下文判斷。',
            points: [
                { rule: '目的用法：動詞辞書形＋ために', explanation: '行くために' },
                { rule: '原因用法：動詞た形＋ために', explanation: '行ったために' },
                { rule: '名詞接續可表目的或原因', explanation: '健康のために（目的）、雨のために（原因）' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_tame_ni_1',
                sentence: '試験{しけん}に受{う}かる（　）、毎日{まいにち}勉強{べんきょう}している。',
                options: ['のに', 'からに', 'までに', 'ために'],
                correctIndex: 3,
                explanation: '為了通過考試每天學習。'
            },
            {
                id: 'n3_quiz_tame_ni_2',
                sentence: '風邪{かぜ}をひいた（　）、学校{がっこう}を休{やす}んだ。',
                options: ['ために', 'までに', 'からに', 'のに'],
                correctIndex: 0,
                explanation: '因為感冒請假了。'
            },
            {
                id: 'n3_quiz_tame_ni_3',
                sentence: '将来{しょうらい}の（　）、今{いま}頑張{がんば}る。',
                options: ['ために', 'までに', 'からに', 'のに'],
                correctIndex: 0,
                explanation: '為了將來現在努力。'
            },
            {
                id: 'n3_quiz_tame_ni_4',
                sentence: '「なぜ日本{にほん}に来{き}たの？」\n「仕事{しごと}の（　）来{き}ました。」',
                options: ['のに', 'までに', 'からに', 'ために'],
                correctIndex: 3,
                explanation: '對話情境。為了工作來的。'
            },
            {
                id: 'n3_quiz_tame_ni_5',
                sentence: '「なんで中止{ちゅうし}になったの？」\n「台風{たいふう}の（　）中止{ちゅうし}になったんだ。」',
                options: ['までに', 'からに', 'ために', 'のに'],
                correctIndex: 2,
                explanation: '對話情境。因為颱風取消了。'
            }
        ]
    },

    'n3_tashika_ni': {
        id: 'n3_tashika_ni',
        pattern: '確{たし}かに',
        connection: '確{たし}かに + 文{ぶん}',
        translation: '確實; 的確',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示認同',
                description: '「確かに」用於承認對方說的話是對的。',
                examples: [
                    { japanese: '確{たし}かに、それは難{むずか}しい問題{もんだい}だ。', chinese: '的確，那是個難題。' },
                    { japanese: '確{たし}かに、彼{かれ}の言{い}う通{とお}りだ。', chinese: '確實，如他所說。' },
                    { japanese: '「高{たか}くない？」\n「確{たし}かに高{たか}いけど、品質{ひんしつ}がいいよ。」', chinese: '「不貴嗎？」\n「確實貴，但品質好。」' }
                ]
            },
            {
                usageId: 2,
                title: '表示確認',
                description: '「確かに」用於確認自己的記憶或判斷。',
                examples: [
                    { japanese: '確{たし}かにここに置{お}いたはずだ。', chinese: '確實應該放在這裡的。' },
                    { japanese: '確{たし}かに彼{かれ}から聞{き}いた。', chinese: '確實從他那裡聽說的。' },
                    { japanese: '「本当{ほんとう}に来{き}た？」\n「うん、確{たし}かに来{き}たよ。」', chinese: '「真的來過嗎？」\n「嗯，確實來過。」' }
                ]
            }
        ],
        analysis: {
            title: '「確かに」的用法分析',
            description: '用於認同或確認事實。',
            points: [
                { rule: '認同對方：「確かに、でも...」', explanation: '先認同再轉折' },
                { rule: '確認記憶：「確かに～したはずだ」', explanation: '表示有把握' },
                { rule: '常放在句首', explanation: '作為回應或強調' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_tashika_ni_1',
                sentence: '（　）、その意見{いけん}は正{ただ}しい。',
                options: ['確かに', 'たぶん', 'もしかして', 'きっと'],
                correctIndex: 0,
                explanation: '確實，那個意見是對的。'
            },
            {
                id: 'n3_quiz_tashika_ni_2',
                sentence: '（　）、この店{みせ}に来{き}たことがある。',
                options: ['確かに', 'きっと', 'たぶん', 'もしかして'],
                correctIndex: 0,
                explanation: '確實來過這家店。'
            },
            {
                id: 'n3_quiz_tashika_ni_3',
                sentence: '（　）彼{かれ}は昨日{きのう}いた。',
                options: ['きっと', 'もしかして', '確かに', 'たぶん'],
                correctIndex: 2,
                explanation: '確實他昨天在。'
            },
            {
                id: 'n3_quiz_tashika_ni_4',
                sentence: '「この計画{けいかく}、リスクがあるよね。」\n「（　）、でもやる価値{かち}はある。」',
                options: ['もしかして', '確かに', 'たぶん', 'きっと'],
                correctIndex: 1,
                explanation: '對話情境。確實，但值得做。'
            },
            {
                id: 'n3_quiz_tashika_ni_5',
                sentence: '「ここに置{お}いた？」\n「うん、（　）ここに置{お}いたよ。」',
                options: ['きっと', '確かに', 'たぶん', 'もしかして'],
                correctIndex: 1,
                explanation: '對話情境。確實放在這裡了。'
            }
        ]
    },

    'n3_tashika_ni_1': {
        id: 'n3_tashika_ni_1',
        pattern: '確{たし}かに',
        connection: '確{たし}かに + 文{ぶん}、しかし/けど...',
        translation: '的確; 確實',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '認同後轉折',
                description: '「確かに～けど」先認同對方觀點，再提出不同看法。',
                examples: [
                    { japanese: '確{たし}かに便利{べんり}だけど、高{たか}すぎる。', chinese: '確實方便，但太貴了。' },
                    { japanese: '確{たし}かに美{うつく}しいが、私{わたし}の好{この}みではない。', chinese: '確實很美，但不是我的喜好。' },
                    { japanese: '「彼{かれ}、優{やさ}しいよね。」\n「確{たし}かに優{やさ}しいけど、頼{たよ}りない。」', chinese: '「他很溫柔呢。」\n「確實溫柔，但靠不住。」' }
                ]
            }
        ],
        analysis: {
            title: '「確かに～けど」的轉折用法',
            description: '用於婉轉表達不同意見。',
            points: [
                { rule: '先認同對方的部分觀點', explanation: '表示尊重' },
                { rule: '再用「けど/が/しかし」轉折', explanation: '提出自己的看法' },
                { rule: '是委婉表達異見的方式', explanation: '比直接反對有禮貌' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_tashika_ni_1_1',
                sentence: '（　）おいしいけど、量{りょう}が少{すく}ない。',
                options: ['たぶん', '確かに', 'もしかして', 'きっと'],
                correctIndex: 1,
                explanation: '確實好吃，但量太少。'
            },
            {
                id: 'n3_quiz_tashika_ni_1_2',
                sentence: '（　）彼{かれ}は頭{あたま}がいいが、努力{どりょく}が足{た}りない。',
                options: ['確かに', 'もしかして', 'きっと', 'たぶん'],
                correctIndex: 0,
                explanation: '確實他很聰明，但努力不夠。'
            },
            {
                id: 'n3_quiz_tashika_ni_1_3',
                sentence: '（　）問題{もんだい}はあるけど、解決{かいけつ}できる。',
                options: ['確かに', 'もしかして', 'きっと', 'たぶん'],
                correctIndex: 0,
                explanation: '確實有問題，但可以解決。'
            },
            {
                id: 'n3_quiz_tashika_ni_1_4',
                sentence: '「大変{たいへん}そうだね。」\n「（　）大変{たいへん}だけど、やりがいがある。」',
                options: ['もしかして', 'たぶん', '確かに', 'きっと'],
                correctIndex: 2,
                explanation: '對話情境。確實辛苦，但有成就感。'
            },
            {
                id: 'n3_quiz_tashika_ni_1_5',
                sentence: '「この案{あん}、いいと思{おも}わない？」\n「（　）いいけど、予算{よさん}が心配{しんぱい}だ。」',
                options: ['確かに', 'たぶん', 'きっと', 'もしかして'],
                correctIndex: 0,
                explanation: '對話情境。確實不錯，但擔心預算。'
            }
        ]
    },

    'n3_tate': {
        id: 'n3_tate',
        pattern: 'たて',
        connection: '動詞{どうし}ます形{けい} + たて',
        translation: '剛...完 (新鮮狀態)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示剛完成的新鮮狀態',
                description: '「たて」表示剛剛做完某事，強調新鮮或剛完成的狀態。',
                examples: [
                    { japanese: '焼{や}きたてのパンはおいしい。', chinese: '剛烤好的麵包很好吃。' },
                    { japanese: 'できたての料理{りょうり}を食{た}べる。', chinese: '吃剛做好的料理。' },
                    { japanese: '「このコーヒー、おいしいね。」\n「入{い}れたてだからね。」', chinese: '「這咖啡好喝。」\n「因為是剛沖的。」' }
                ]
            },
            {
                usageId: 2,
                title: '常見搭配',
                description: '「たて」常用於食物或製品。',
                examples: [
                    { japanese: '取{と}りたての野菜{やさい}は新鮮{しんせん}だ。', chinese: '剛摘的蔬菜很新鮮。' },
                    { japanese: '生{う}まれたての赤{あか}ちゃん。', chinese: '剛出生的嬰兒。' },
                    { japanese: '「この魚{さかな}、新鮮{しんせん}だね。」\n「釣{つ}りたてだからね。」', chinese: '「這魚好新鮮。」\n「因為是剛釣的。」' }
                ]
            }
        ],
        analysis: {
            title: '「たて」的用法分析',
            description: '強調剛完成時的最佳狀態。',
            points: [
                { rule: '動詞ます形＋たて', explanation: '焼き＋たて=焼きたて' },
                { rule: '強調新鮮、最佳狀態', explanation: '多用於正面描述' },
                { rule: '常用於食物相關', explanation: '焼きたて、揚げたて、茹でたて' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_tate_1',
                sentence: '揚{あ}げ（　）の天{てん}ぷらは最高{さいこう}だ。',
                options: ['ぎみ', 'たて', 'っぽい', 'がち'],
                correctIndex: 1,
                explanation: '剛炸好的天婦羅最棒。'
            },
            {
                id: 'n3_quiz_tate_2',
                sentence: 'この牛乳{ぎゅうにゅう}は絞{しぼ}り（　）だ。',
                options: ['ぎみ', 'がち', 'たて', 'っぽい'],
                correctIndex: 2,
                explanation: '這牛奶是剛擠的。'
            },
            {
                id: 'n3_quiz_tate_3',
                sentence: '炊{た}き（　）のご飯{はん}はおいしい。',
                options: ['たて', 'っぽい', 'ぎみ', 'がち'],
                correctIndex: 0,
                explanation: '剛煮好的飯很好吃。'
            },
            {
                id: 'n3_quiz_tate_4',
                sentence: '「このパン、柔{やわ}らかいね。」\n「焼{や}き（　）だからね。」',
                options: ['ぎみ', 'っぽい', 'たて', 'がち'],
                correctIndex: 2,
                explanation: '對話情境。因為是剛烤好的。'
            },
            {
                id: 'n3_quiz_tate_5',
                sentence: '「卵{たまご}、新鮮{しんせん}？」\n「うん、産{う}み（　）だよ。」',
                options: ['っぽい', 'ぎみ', 'たて', 'がち'],
                correctIndex: 2,
                explanation: '對話情境。是剛生的蛋。'
            }
        ]
    },

    'n3_tatoeba': {
        id: 'n3_tatoeba',
        pattern: '例{れい}えば',
        connection: '例{れい}えば + 例{れい}子{し}',
        translation: '例如; 比如',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '舉例說明',
                description: '「例えば」用於舉出具體例子來說明。',
                examples: [
                    { japanese: '日本{にほん}の伝統{でんとう}文化{ぶんか}、例{たと}えば茶道{さどう}や華道{かどう}などがある。', chinese: '日本傳統文化，例如茶道和花道等。' },
                    { japanese: '野菜{やさい}、例{たと}えばトマトやキュウリを食{た}べる。', chinese: '蔬菜，例如番茄和黃瓜。' },
                    { japanese: '「どんな映画{えいが}が好{す}き？」\n「アクション、例{たと}えばマーベルとか。」', chinese: '「喜歡什麼電影？」\n「動作片，例如漫威之類的。」' }
                ]
            },
            {
                usageId: 2,
                title: '假設性舉例',
                description: '「例えば」也可用於假設情況。',
                examples: [
                    { japanese: '例{たと}えば百万円{ひゃくまんえん}あったら何{なに}をする？', chinese: '比如說如果有一百萬你會做什麼？' },
                    { japanese: '例{たと}えば明日{あした}雨{あめ}だったら、どうする？', chinese: '比如說明天下雨的話怎麼辦？' },
                    { japanese: '「もし宝{たから}くじが当{あ}たったら？」\n「例{たと}えば当{あ}たったら、家{いえ}を買{か}うかな。」', chinese: '「如果中了樂透呢？」\n「比如中了的話，會買房子吧。」' }
                ]
            }
        ],
        analysis: {
            title: '「例えば」的用法分析',
            description: '用於舉例或假設。',
            points: [
                { rule: '舉例用法：具體說明', explanation: '讓抽象概念更具體' },
                { rule: '假設用法：「例えば～たら」', explanation: '假設某種情況' },
                { rule: '常與「など」搭配', explanation: '表示還有其他例子' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_tatoeba_1',
                sentence: '果物{くだもの}、（　）りんごやみかんが好{す}きだ。',
                options: ['すなわち', 'しかし', 'つまり', '例えば'],
                correctIndex: 3,
                explanation: '水果，例如蘋果和橘子我喜歡。'
            },
            {
                id: 'n3_quiz_tatoeba_2',
                sentence: '（　）一億円{いちおくえん}あったら、何{なに}をしたい？',
                options: ['例えば', 'すなわち', 'つまり', 'しかし'],
                correctIndex: 0,
                explanation: '比如有一億的話想做什麼？'
            },
            {
                id: 'n3_quiz_tatoeba_3',
                sentence: '外国語{がいこくご}、（　）英語{えいご}や中国語{ちゅうごくご}を勉強{べんきょう}している。',
                options: ['すなわち', 'しかし', '例えば', 'つまり'],
                correctIndex: 2,
                explanation: '外語，例如英語和中文正在學。'
            },
            {
                id: 'n3_quiz_tatoeba_4',
                sentence: '「何{なに}かスポーツできる？」\n「（　）テニスとか。」',
                options: ['しかし', 'すなわち', '例えば', 'つまり'],
                correctIndex: 2,
                explanation: '對話情境。例如網球之類的。'
            },
            {
                id: 'n3_quiz_tatoeba_5',
                sentence: '「趣味{しゅみ}は？」\n「音楽{おんがく}かな。（　）ギターを弾{ひ}いたりする。」',
                options: ['しかし', 'つまり', '例えば', 'すなわち'],
                correctIndex: 2,
                explanation: '對話情境。例如彈吉他之類的。'
            }
        ]
    },

    'n3_tatoeba_1': {
        id: 'n3_tatoeba_1',
        pattern: '例{れい}えば（たとえば）',
        connection: '例{れい}えば + 具體例{れい}子{し} + など',
        translation: '例如; 譬如',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '「例えば」與「など」的搭配',
                description: '「例えば～など」表示舉出的只是部分例子。',
                examples: [
                    { japanese: '例{たと}えばコーヒーや紅茶{こうちゃ}などの飲{の}み物{もの}がある。', chinese: '例如有咖啡或紅茶等飲料。' },
                    { japanese: '例{たと}えば東京{とうきょう}や大阪{おおさか}などの大都市{だいとし}。', chinese: '例如東京或大阪等大城市。' },
                    { japanese: '「何{なに}が必要{ひつよう}？」\n「例{たと}えばペンとかノートとか。」', chinese: '「需要什麼？」\n「例如筆或筆記本之類的。」' }
                ]
            }
        ],
        analysis: {
            title: '「例えば」的延伸表達',
            description: '與「など」「とか」搭配表示還有更多例子。',
            points: [
                { rule: '例えば A や B など', explanation: '正式的列舉方式' },
                { rule: '例えば A とか B とか', explanation: '口語的列舉方式' },
                { rule: '暗示還有其他未提及的例子', explanation: '舉出的只是代表' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_tatoeba_1_1',
                sentence: '（　）犬{いぬ}や猫{ねこ}などのペットを飼{か}っている。',
                options: ['例えば', 'つまり', 'すなわち', 'しかし'],
                correctIndex: 0,
                explanation: '例如養狗或貓等寵物。'
            },
            {
                id: 'n3_quiz_tatoeba_1_2',
                sentence: '日本{にほん}料理{りょうり}は（　）寿司{すし}や天{てん}ぷらなどがある。',
                options: ['例えば', 'しかし', 'つまり', 'すなわち'],
                correctIndex: 0,
                explanation: '日本料理例如有壽司或天婦羅等。'
            },
            {
                id: 'n3_quiz_tatoeba_1_3',
                sentence: 'SNS、（　）ツイッターやインスタなどをよく使{つか}う。',
                options: ['すなわち', '例えば', 'つまり', 'しかし'],
                correctIndex: 1,
                explanation: 'SNS例如Twitter或Instagram等常用。'
            },
            {
                id: 'n3_quiz_tatoeba_1_4',
                sentence: '「どんな本{ほん}を読{よ}むの？」\n「（　）小説{しょうせつ}とかビジネス書{しょ}とか。」',
                options: ['しかし', 'すなわち', 'つまり', '例えば'],
                correctIndex: 3,
                explanation: '對話情境。例如小說或商業書之類的。'
            },
            {
                id: 'n3_quiz_tatoeba_1_5',
                sentence: '「休{やす}みの日{ひ}は何{なに}する？」\n「（　）映画{えいが}を見{み}たり買{か}い物{もの}したりかな。」',
                options: ['つまり', 'しかし', '例えば', 'すなわち'],
                correctIndex: 2,
                explanation: '對話情境。例如看電影或購物之類的。'
            }
        ]
    },

    'n3_tatoe_temo': {
        id: 'n3_tatoe_temo',
        pattern: 'たとえ～ても',
        connection: 'たとえ + 動詞{どうし}ても/形容詞{けいようし}くても/名詞{めいし}でも',
        translation: '即使...也...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示讓步',
                description: '「たとえ～ても」表示即使在某種情況下，結果也不會改變。',
                examples: [
                    { japanese: 'たとえ雨{あめ}が降{ふ}っても、行{い}きます。', chinese: '即使下雨也會去。' },
                    { japanese: 'たとえ失敗{しっぱい}しても、諦{あきら}めない。', chinese: '即使失敗也不放棄。' },
                    { japanese: '「雨{あめ}だったらどうする？」\n「たとえ雨{あめ}でも行{い}くよ。」', chinese: '「下雨的話怎麼辦？」\n「即使下雨也去。」' }
                ]
            },
            {
                usageId: 2,
                title: '強調決心',
                description: '「たとえ～ても」常用於表達強烈的決心或意志。',
                examples: [
                    { japanese: 'たとえ何{なに}があっても、君{きみ}を守{まも}る。', chinese: '無論發生什麼都會保護你。' },
                    { japanese: 'たとえ反対{はんたい}されても、やる。', chinese: '即使被反對也要做。' },
                    { japanese: '「諦{あきら}めたら？」\n「たとえ無理{むり}だと言{い}われても、やりたいんだ。」', chinese: '「放棄如何？」\n「即使被說不可能，我也想做。」' }
                ]
            }
        ],
        analysis: {
            title: '「たとえ～ても」的用法分析',
            description: '「たとえ」加強「ても」的讓步語氣。',
            points: [
                { rule: '「たとえ」可省略', explanation: '「雨が降っても」也可以' },
                { rule: '「たとえ」加強語氣', explanation: '更強調「即使」的感覺' },
                { rule: '常表達決心或態度', explanation: '「不管怎樣都要...」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_tatoe_temo_1',
                sentence: '（　）難{むずか}しくても、挑戦{ちょうせん}する。',
                options: ['もし', 'だから', 'しかし', 'たとえ'],
                correctIndex: 3,
                explanation: '即使困難也要挑戰。'
            },
            {
                id: 'n3_quiz_tatoe_temo_2',
                sentence: '（　）一人{ひとり}でも、頑張{がんば}る。',
                options: ['たとえ', 'だから', 'しかし', 'もし'],
                correctIndex: 0,
                explanation: '即使一個人也會努力。'
            },
            {
                id: 'n3_quiz_tatoe_temo_3',
                sentence: '（　）どんなに遠{とお}くても、会{あ}いに行{い}く。',
                options: ['たとえ', 'しかし', 'もし', 'だから'],
                correctIndex: 0,
                explanation: '即使多遠也會去見面。'
            },
            {
                id: 'n3_quiz_tatoe_temo_4',
                sentence: '「もし嫌{いや}だって言{い}われたら？」\n「（　）嫌{いや}だと言{い}われても、説得{せっとく}するよ。」',
                options: ['もし', 'しかし', 'たとえ', 'だから'],
                correctIndex: 2,
                explanation: '對話情境。即使被拒絕也會說服。'
            },
            {
                id: 'n3_quiz_tatoe_temo_5',
                sentence: '「失敗{しっぱい}したらどうする？」\n「（　）失敗{しっぱい}しても、また挑戦{ちょうせん}するさ。」',
                options: ['しかし', 'だから', 'もし', 'たとえ'],
                correctIndex: 3,
                explanation: '對話情境。即使失敗也會再挑戰。'
            }
        ]
    },

    'n3_tatte': {
        id: 'n3_tatte',
        pattern: 'たって',
        connection: '動詞{どうし}た形{けい}/い形容詞{けいようし}く/名詞{めいし}だ + ったって',
        translation: '即使...也... (口語)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '「ても」的口語形式',
                description: '「たって」是「ても」的口語說法。',
                examples: [
                    { japanese: '聞{き}いたって、わからない。', chinese: '即使問了也不懂。' },
                    { japanese: '急{いそ}いだって、間{ま}に合{あ}わない。', chinese: '即使趕也來不及。' },
                    { japanese: '「頑張{がんば}れば？」\n「頑張{がんば}ったって無理{むり}だよ。」', chinese: '「努力一下如何？」\n「即使努力也沒用。」' }
                ]
            },
            {
                usageId: 2,
                title: '表示無奈或放棄',
                description: '「たって」常帶有「做也沒用」的消極語氣。',
                examples: [
                    { japanese: '泣{な}いたって、仕方{しかた}がない。', chinese: '哭也沒用。' },
                    { japanese: '怒{おこ}ったって、何{なに}も変{か}わらない。', chinese: '生氣也改變不了什麼。' },
                    { japanese: '「もっと練習{れんしゅう}すれば？」\n「練習{れんしゅう}したって、上手{じょうず}にならないよ。」', chinese: '「多練習如何？」\n「練習也不會變好啦。」' }
                ]
            }
        ],
        analysis: {
            title: '「たって」的用法分析',
            description: '口語中的讓步表達，常帶消極語氣。',
            points: [
                { rule: '動詞た形＋って', explanation: '行った＋って=行ったって' },
                { rule: 'い形容詞く＋たって', explanation: '高く＋たって=高くたって' },
                { rule: '名詞だ＋ったって', explanation: '学生だ＋ったって=学生だったって' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_tatte_1',
                sentence: '走{はし}っ（　）、間{ま}に合{あ}わないよ。',
                options: ['ても', 'けど', 'たって', 'から'],
                correctIndex: 2,
                explanation: '跑也來不及啦。'
            },
            {
                id: 'n3_quiz_tatte_2',
                sentence: '言{い}っ（　）、聞{き}いてくれない。',
                options: ['から', 'たって', 'ても', 'けど'],
                correctIndex: 1,
                explanation: '說了也不聽。'
            },
            {
                id: 'n3_quiz_tatte_3',
                sentence: '高{たか}く（　）、買{か}うよ。',
                options: ['けど', 'たって', 'ても', 'から'],
                correctIndex: 1,
                explanation: '即使貴也會買。'
            },
            {
                id: 'n3_quiz_tatte_4',
                sentence: '「説明{せつめい}して。」\n「説明{せつめい}し（　）、わからないでしょ。」',
                options: ['たって', 'ても', 'けど', 'から'],
                correctIndex: 0,
                explanation: '對話情境。解釋了你也不懂吧。'
            },
            {
                id: 'n3_quiz_tatte_5',
                sentence: '「待{ま}てば？」\n「待{ま}っ（　）、来{こ}ないよ。」',
                options: ['たって', 'から', 'けど', 'ても'],
                correctIndex: 0,
                explanation: '對話情境。等也不會來啦。'
            }
        ]
    },

    'n3_te_bakari_iru': {
        id: 'n3_te_bakari_iru',
        pattern: 'てばかりいる',
        connection: '動詞{どうし}て形{けい} + ばかりいる',
        translation: '老是在做...; 淨是在...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示一直做某事（批評）',
                description: '「てばかりいる」表示總是在做某件事，帶有批評或不滿的語氣。',
                examples: [
                    { japanese: '彼{かれ}は遊{あそ}んでばかりいる。', chinese: '他老是在玩。' },
                    { japanese: '文句{もんく}を言{い}ってばかりいないで。', chinese: '別老是在抱怨。' },
                    { japanese: '「また寝{ね}てるの？」\n「最近{さいきん}寝{ね}てばかりいるね。」', chinese: '「又在睡？」\n「最近老是在睡。」' }
                ]
            },
            {
                usageId: 2,
                title: '表示只做一件事',
                description: '暗示應該做其他事卻只做這件事。',
                examples: [
                    { japanese: 'テレビを見{み}てばかりいないで、勉強{べんきょう}しなさい。', chinese: '別老是看電視，去讀書。' },
                    { japanese: '食{た}べてばかりいると、太{ふと}るよ。', chinese: '老是吃會變胖喔。' },
                    { japanese: '「宿題{しゅくだい}は？」\n「ゲームしてばかりいて、まだやってない。」', chinese: '「功課呢？」\n「一直在打遊戲，還沒做。」' }
                ]
            }
        ],
        analysis: {
            title: '「てばかりいる」的用法分析',
            description: '帶有批評或勸告的語氣。',
            points: [
                { rule: '表示重複做同一件事', explanation: '「老是...」的意思' },
                { rule: '常帶有負面語氣', explanation: '批評或不滿' },
                { rule: '「ばかり」可省略「い」', explanation: '「てばかりる」也可以' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_te_bakari_iru_1',
                sentence: '泣{な}い（　）いないで、頑張{がんば}りなさい。',
                options: ['てさえ', 'てまで', 'てから', 'てばかり'],
                correctIndex: 3,
                explanation: '別老是哭，加油。'
            },
            {
                id: 'n3_quiz_te_bakari_iru_2',
                sentence: '彼{かれ}はスマホをいじっ（　）いる。',
                options: ['てばかり', 'てさえ', 'てから', 'てまで'],
                correctIndex: 0,
                explanation: '他老是在玩手機。'
            },
            {
                id: 'n3_quiz_te_bakari_iru_3',
                sentence: '休{やす}ん（　）いると、仕事{しごと}が終{お}わらないよ。',
                options: ['でまで', 'でばかり', 'でから', 'でさえ'],
                correctIndex: 1,
                explanation: '老是休息的話工作做不完。'
            },
            {
                id: 'n3_quiz_te_bakari_iru_4',
                sentence: '「最近{さいきん}どう？」\n「忙{いそが}しくて働{はたら}い（　）いるよ。」',
                options: ['てさえ', 'てばかり', 'てから', 'てまで'],
                correctIndex: 1,
                explanation: '對話情境。忙到一直在工作。'
            },
            {
                id: 'n3_quiz_te_bakari_iru_5',
                sentence: '「運動{うんどう}しないの？」\n「家{いえ}にい（　）いて、全然{ぜんぜん}してない。」',
                options: ['てばかり', 'てさえ', 'てから', 'てまで'],
                correctIndex: 0,
                explanation: '對話情境。老是在家完全沒運動。'
            }
        ]
    },

    'n3_te_goran': {
        id: 'n3_te_goran',
        pattern: 'てごらん',
        connection: '動詞{どうし}て形{けい} + ごらん',
        translation: '試試看做... (命令委婉)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '委婉的命令或建議',
                description: '「てごらん」是「てみなさい」的委婉說法，表示溫和地建議或命令對方嘗試做某事。常用於長輩對晚輩。',
                examples: [
                    { japanese: 'この料理{りょうり}、食{た}べてごらん。', chinese: '嚐嚐這道菜看看。' },
                    { japanese: '自分{じぶん}で考{かんが}えてごらん。', chinese: '自己想想看。' },
                    { japanese: '「お母{かあ}さん、これ難{むずか}しい。」\n「もう一度{いちど}読{よ}んでごらん。」', chinese: '「媽媽，這個好難。」\n「再讀一次看看。」' }
                ]
            }
        ],
        analysis: {
            title: '「てごらん」的用法分析',
            description: '比「てください」更親密的表達。',
            points: [
                { rule: '相當於「てみなさい」的柔軟說法', explanation: '帶有鼓勵的語氣' },
                { rule: '用於長輩對晚輩', explanation: '如父母對孩子、老師對學生' },
                { rule: '可縮寫成「てごらん」', explanation: '口語中常用' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_te_goran_1',
                sentence: 'まず自分{じぶん}でやっ（　）。',
                options: ['てさえ', 'てから', 'てまで', 'てごらん'],
                correctIndex: 3,
                explanation: '先自己試著做做看。'
            },
            {
                id: 'n3_quiz_te_goran_2',
                sentence: 'この絵{え}を見{み}（　）、きれいでしょう？',
                options: ['てごらん', 'てさえ', 'てまで', 'てから'],
                correctIndex: 0,
                explanation: '看看這幅畫，很美吧？'
            },
            {
                id: 'n3_quiz_te_goran_3',
                sentence: 'もう一回{いっかい}説明{せつめい}し（　）。',
                options: ['てまで', 'てごらん', 'てさえ', 'てから'],
                correctIndex: 1,
                explanation: '再解釋一次看看。'
            },
            {
                id: 'n3_quiz_te_goran_4',
                sentence: '「この問題{もんだい}わからない。」\n「先生{せんせい}に聞{き}い（　）。」',
                options: ['てさえ', 'てごらん', 'てから', 'てまで'],
                correctIndex: 1,
                explanation: '對話情境。去問問老師看看。'
            },
            {
                id: 'n3_quiz_te_goran_5',
                sentence: '「ピアノ弾{ひ}けない。」\n「練習{れんしゅう}し（　）、上手{じょうず}になるよ。」',
                options: ['てから', 'てまで', 'てごらん', 'てさえ'],
                correctIndex: 2,
                explanation: '對話情境。試著練習，會變厲害的。'
            }
        ]
    },

    'n3_te_hajimete': {
        id: 'n3_te_hajimete',
        pattern: 'てはじめて',
        connection: '動詞{どうし}て形{けい} + はじめて',
        translation: '直到...才...; 做了...之後才明白',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示經歷後才領悟',
                description: '「てはじめて」表示做了某件事之後，才第一次理解、體會到某件事。強調經驗的重要性。',
                examples: [
                    { japanese: '病気{びょうき}になってはじめて、健康{けんこう}の大切{たいせつ}さがわかった。', chinese: '生了病之後才明白健康的重要。' },
                    { japanese: '親{おや}になってはじめて、親{おや}の気持{きも}ちがわかる。', chinese: '當了父母之後才理解父母的心情。' },
                    { japanese: '「日本語{にほんご}難{むずか}しい？」\n「留学{りゅうがく}してはじめて、難{むずか}しさがわかったよ。」', chinese: '「日語很難嗎？」\n「留學之後才知道難。」' }
                ]
            }
        ],
        analysis: {
            title: '「てはじめて」的用法分析',
            description: '強調親身經歷的重要性。',
            points: [
                { rule: '表達「之前不知道，做了之後才明白」', explanation: '經驗帶來的領悟' },
                { rule: '常用於人生經驗的感嘆', explanation: '如失去後才珍惜' },
                { rule: '後句常接「わかる」「気づく」等動詞', explanation: '表示理解、發現' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_te_hajimete_1',
                sentence: '失{うしな}っ（　）、大切{たいせつ}さがわかる。',
                options: ['てまで', 'てはじめて', 'てさえ', 'てから'],
                correctIndex: 1,
                explanation: '失去之後才知道珍貴。'
            },
            {
                id: 'n3_quiz_te_hajimete_2',
                sentence: '一人暮{ひとりぐ}らしをし（　）、料理{りょうり}の大変{たいへん}さを知{し}った。',
                options: ['てはじめて', 'てさえ', 'てまで', 'てから'],
                correctIndex: 0,
                explanation: '一個人生活之後才知道做飯很辛苦。'
            },
            {
                id: 'n3_quiz_te_hajimete_3',
                sentence: '社会人{しゃかいじん}になっ（　）、学生{がくせい}時代{じだい}の楽{たの}しさがわかった。',
                options: ['てから', 'てまで', 'てはじめて', 'てさえ'],
                correctIndex: 2,
                explanation: '出社會後才明白學生時代的快樂。'
            },
            {
                id: 'n3_quiz_te_hajimete_4',
                sentence: '「子供{こども}の世話{せわ}大変{たいへん}？」\n「育{そだ}て（　）、親{おや}のありがたみがわかったよ。」',
                options: ['てから', 'てはじめて', 'てさえ', 'てまで'],
                correctIndex: 1,
                explanation: '對話情境。養育孩子後才感謝父母。'
            },
            {
                id: 'n3_quiz_te_hajimete_5',
                sentence: '「海外{かいがい}生活{せいかつ}どう？」\n「日本{にほん}を離{はな}れ（　）、日本{にほん}の良{よ}さがわかった。」',
                options: ['てさえ', 'てまで', 'てから', 'てはじめて'],
                correctIndex: 3,
                explanation: '對話情境。離開日本後才知道日本的好。'
            }
        ]
    },

    'n3_te_kara_de_nai_to': {
        id: 'n3_te_kara_de_nai_to',
        pattern: 'てからでないと',
        connection: '動詞{どうし}て形{けい} + からでないと',
        translation: '如果不先做...的話',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示必須先完成的條件',
                description: '「てからでないと」表示必須先做前面的事，後面的事才能進行或實現。',
                examples: [
                    { japanese: '予約{よやく}してからでないと、入{はい}れません。', chinese: '不先預約的話不能進去。' },
                    { japanese: '契約書{けいやくしょ}を読{よ}んでからでないと、サインしてはいけない。', chinese: '不先看合約的話不可以簽名。' },
                    { japanese: '「もう注文{ちゅうもん}していい？」\n「メニューを見{み}てからでないと、決{き}められないよ。」', chinese: '「可以點餐了嗎？」\n「不先看菜單沒辦法決定啊。」' }
                ]
            }
        ],
        analysis: {
            title: '「てからでないと」的用法分析',
            description: '強調前提條件的必要性。',
            points: [
                { rule: '表示「不先做A，就不能做B」', explanation: '強調順序' },
                { rule: '後句常接否定表達', explanation: '如「できない」「いけない」' },
                { rule: '也可以說「てからでなければ」', explanation: '較正式' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_te_kara_de_nai_to_1',
                sentence: '説明{せつめい}を聞{き}い（　）、操作{そうさ}できません。',
                options: ['てさえ', 'てまで', 'てからでないと', 'てから'],
                correctIndex: 2,
                explanation: '不先聽說明不能操作。'
            },
            {
                id: 'n3_quiz_te_kara_de_nai_to_2',
                sentence: '身分証{みぶんしょう}を見{み}せ（　）、入室{にゅうしつ}できません。',
                options: ['てまで', 'てから', 'てさえ', 'てからでないと'],
                correctIndex: 3,
                explanation: '不先出示身分證不能進入。'
            },
            {
                id: 'n3_quiz_te_kara_de_nai_to_3',
                sentence: '確認{かくにん}し（　）、送{おく}れない。',
                options: ['てさえ', 'てから', 'てからでないと', 'てまで'],
                correctIndex: 2,
                explanation: '不先確認的話沒辦法送出。'
            },
            {
                id: 'n3_quiz_te_kara_de_nai_to_4',
                sentence: '「すぐ始{はじ}めよう。」\n「準備{じゅんび}し（　）、始{はじ}められないよ。」',
                options: ['てさえ', 'てまで', 'てから', 'てからでないと'],
                correctIndex: 3,
                explanation: '對話情境。不先準備不能開始。'
            },
            {
                id: 'n3_quiz_te_kara_de_nai_to_5',
                sentence: '「買{か}っちゃおう！」\n「値段{ねだん}を比{くら}べ（　）、買{か}わない方{ほう}がいいよ。」',
                options: ['てまで', 'てさえ', 'てから', 'てからでないと'],
                correctIndex: 3,
                explanation: '對話情境。不先比較價格最好不要買。'
            }
        ]
    },

    'n3_te_shou_ga_nai': {
        id: 'n3_te_shou_ga_nai',
        pattern: 'てしょうがない',
        connection: '動詞{どうし}て形{けい}/い形容詞{けいようし}くて/な形容詞{けいようし}で + しょうがない',
        translation: '...得不得了; 沒辦法不...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示程度非常高',
                description: '「てしょうがない」表示某種感覺或狀態非常強烈，無法控制。常用於表達情感或生理狀態。',
                examples: [
                    { japanese: '彼女{かのじょ}のことが気{き}になってしょうがない。', chinese: '很在意她，沒辦法不想。' },
                    { japanese: 'お腹{なか}が空{す}いてしょうがない。', chinese: '肚子餓得不得了。' },
                    { japanese: '「大丈夫{だいじょうぶ}？」\n「眠{ねむ}くてしょうがないんだ。」', chinese: '「你還好嗎？」\n「困得不得了。」' }
                ]
            }
        ],
        analysis: {
            title: '「てしょうがない」的用法分析',
            description: '表達無法控制的強烈感受。',
            points: [
                { rule: '用於情感、生理狀態的極端程度', explanation: '如餓、困、在意等' },
                { rule: '也可以說「てしかたがない」', explanation: '意思相同，較正式' },
                { rule: '口語常說「てしょうがない」', explanation: '更自然' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_te_shou_ga_nai_1',
                sentence: '暑{あつ}く（　）。',
                options: ['てさえ', 'てから', 'てしょうがない', 'てまで'],
                correctIndex: 2,
                explanation: '熱得不得了。'
            },
            {
                id: 'n3_quiz_te_shou_ga_nai_2',
                sentence: '結果{けっか}が心配{しんぱい}（　）。',
                options: ['でまで', 'でさえ', 'でしょうがない', 'でから'],
                correctIndex: 2,
                explanation: '擔心結果得不得了。'
            },
            {
                id: 'n3_quiz_te_shou_ga_nai_3',
                sentence: '面白{おもしろ}く（　）、笑{わら}いが止{と}まらない。',
                options: ['てさえ', 'てしょうがない', 'てまで', 'てから'],
                correctIndex: 1,
                explanation: '有趣得不得了，笑個不停。'
            },
            {
                id: 'n3_quiz_te_shou_ga_nai_4',
                sentence: '「旅行{りょこう}楽{たの}しみ？」\n「うん、待{ま}ち遠{どお}しく（　）。」',
                options: ['てさえ', 'てまで', 'てから', 'てしょうがない'],
                correctIndex: 3,
                explanation: '對話情境。期待得不得了。'
            },
            {
                id: 'n3_quiz_te_shou_ga_nai_5',
                sentence: '「なんでそんなに見{み}てるの？」\n「彼女{かのじょ}のことが気{き}になっ（　）。」',
                options: ['てしょうがない', 'てから', 'てまで', 'てさえ'],
                correctIndex: 0,
                explanation: '對話情境。很在意她。'
            }
        ]
    },

    'n3_te_shou_ga_nai_te_shikata_ga_nai': {
        id: 'n3_te_shou_ga_nai_te_shikata_ga_nai',
        pattern: 'てしょうがない・てしかたがない',
        connection: '動詞{どうし}て形{けい}/い形容詞{けいようし}くて/な形容詞{けいようし}で + しょうがない/しかたがない',
        translation: '非常...; ...得不得了',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示程度極高',
                description: '「てしょうがない」和「てしかたがない」都表示某種狀態或感覺到達極點，無法控制或抑制。',
                examples: [
                    { japanese: '悲{かな}しくてしかたがない。', chinese: '悲傷得不得了。' },
                    { japanese: '退屈{たいくつ}でしょうがない。', chinese: '無聊得不得了。' },
                    { japanese: '「どうしたの？」\n「あの映画{えいが}が見{み}たくてしかたがないの。」', chinese: '「怎麼了？」\n「好想看那部電影。」' }
                ]
            }
        ],
        analysis: {
            title: '「てしょうがない・てしかたがない」的用法分析',
            description: '兩者意思相同，用法可互換。',
            points: [
                { rule: '「しょうがない」較口語', explanation: '日常對話常用' },
                { rule: '「しかたがない」較正式', explanation: '書面或正式場合' },
                { rule: '強調無法控制的感受', explanation: '如慾望、情緒等' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_te_shou_ga_nai_te_shikata_ga_nai_1',
                sentence: '寂{さび}しく（　）。',
                options: ['てしかたがない', 'てまで', 'てから', 'てさえ'],
                correctIndex: 0,
                explanation: '寂寞得不得了。'
            },
            {
                id: 'n3_quiz_te_shou_ga_nai_te_shikata_ga_nai_2',
                sentence: '彼{かれ}に会{あ}いたく（　）。',
                options: ['てさえ', 'てまで', 'てから', 'てしかたがない'],
                correctIndex: 3,
                explanation: '好想見他。'
            },
            {
                id: 'n3_quiz_te_shou_ga_nai_te_shikata_ga_nai_3',
                sentence: '不安{ふあん}（　）、眠{ねむ}れない。',
                options: ['でまで', 'でから', 'でしかたがない', 'でさえ'],
                correctIndex: 2,
                explanation: '不安得睡不著。'
            },
            {
                id: 'n3_quiz_te_shou_ga_nai_te_shikata_ga_nai_4',
                sentence: '「試験{しけん}どうだった？」\n「後悔{こうかい}（　）。もっと勉強{べんきょう}すればよかった。」',
                options: ['でから', 'でさえ', 'でまで', 'でしかたがない'],
                correctIndex: 3,
                explanation: '對話情境。後悔得不得了。'
            },
            {
                id: 'n3_quiz_te_shou_ga_nai_te_shikata_ga_nai_5',
                sentence: '「元気{げんき}ない？」\n「故郷{こきょう}が恋{こい}しく（　）。」',
                options: ['てさえ', 'てまで', 'てしかたがない', 'てから'],
                correctIndex: 2,
                explanation: '對話情境。想念故鄉。'
            }
        ]
    },

    'n3_te_sumu': {
        id: 'n3_te_sumu',
        pattern: 'て済{す}む',
        connection: '動詞{どうし}て形{けい} + 済{す}む',
        translation: '...就能解決; ...就算了',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示用某方式就能解決',
                description: '「て済む」表示只要做某事就能解決問題或完成事情，暗示比預想的簡單。',
                examples: [
                    { japanese: '謝{あやま}って済{す}む問題{もんだい}ではない。', chinese: '這不是道歉就能了事的問題。' },
                    { japanese: '少{すこ}しの修理{しゅうり}で済{す}んだ。', chinese: '只需要小修理就解決了。' },
                    { japanese: '「手術{しゅじゅつ}必要{ひつよう}？」\n「薬{くすり}を飲{の}んで済{す}むそうだ。」', chinese: '「需要手術嗎？」\n「聽說吃藥就可以了。」' }
                ]
            }
        ],
        analysis: {
            title: '「て済む」的用法分析',
            description: '表示用最小代價解決問題。',
            points: [
                { rule: '暗示比預期簡單', explanation: '付出較少的努力或代價' },
                { rule: '否定形「て済まない」', explanation: '表示無法這樣解決' },
                { rule: '常與「だけで」連用', explanation: '強調只需要這樣' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_te_sumu_1',
                sentence: 'お金{かね}を払{はら}っ（　）問題{もんだい}ではない。',
                options: ['てから', 'てさえ', 'て済む', 'てまで'],
                correctIndex: 2,
                explanation: '這不是付錢就能解決的問題。'
            },
            {
                id: 'n3_quiz_te_sumu_2',
                sentence: '電話{でんわ}一本{いっぽん}（　）。',
                options: ['でから', 'で済んだ', 'でまで', 'でさえ'],
                correctIndex: 1,
                explanation: '打一通電話就解決了。'
            },
            {
                id: 'n3_quiz_te_sumu_3',
                sentence: '軽{かる}い怪我{けが}（　）よかった。',
                options: ['でさえ', 'でから', 'で済んで', 'でまで'],
                correctIndex: 2,
                explanation: '只是輕傷就好了。'
            },
            {
                id: 'n3_quiz_te_sumu_4',
                sentence: '「大変{たいへん}だった？」\n「いや、報告書{ほうこくしょ}を書{か}い（　）。」',
                options: ['てから', 'てまで', 'て済んだ', 'てさえ'],
                correctIndex: 2,
                explanation: '對話情境。寫報告就解決了。'
            },
            {
                id: 'n3_quiz_te_sumu_5',
                sentence: '「謝{あやま}れば許{ゆる}してもらえる？」\n「謝{あやま}っ（　）話{はなし}じゃないよ。」',
                options: ['てさえ', 'てから', 'てまで', 'て済む'],
                correctIndex: 3,
                explanation: '對話情境。這不是道歉就能了事的。'
            }
        ]
    },

    'n3_te_sumu_1': {
        id: 'n3_te_sumu_1',
        pattern: 'て済{す}む',
        connection: '動詞{どうし}て形{けい}/名詞{めいし}で + 済{す}む',
        translation: '...就解決了',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示事情以某種方式收場',
                description: '「て済む」表示問題或事情以某種方式就能解決或結束，常暗示輕鬆解決或僥倖脫身。',
                examples: [
                    { japanese: '今回{こんかい}は警告{けいこく}で済{す}んだ。', chinese: '這次只是被警告就過去了。' },
                    { japanese: '怪我{けが}がなくて済{す}んだ。', chinese: '沒有受傷就好。' },
                    { japanese: '「事故{じこ}大丈夫{だいじょうぶ}だった？」\n「車{くるま}がへこんだだけで済{す}んだ。」', chinese: '「事故還好嗎？」\n「只是車凹了就沒事了。」' }
                ]
            }
        ],
        analysis: {
            title: '「て済む」的用法分析',
            description: '表示問題輕鬆解決或僥倖。',
            points: [
                { rule: '常用於表達「還好」的心情', explanation: '如避免更壞的結果' },
                { rule: '「なくて済む」表示避免', explanation: '不必做某事' },
                { rule: '「だけで済む」強調輕微', explanation: '只需要這樣就好' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_te_sumu_1_1',
                sentence: '今回{こんかい}は注意{ちゅうい}（　）。',
                options: ['でさえ', 'でから', 'でまで', 'で済んだ'],
                correctIndex: 3,
                explanation: '這次只被提醒就過去了。'
            },
            {
                id: 'n3_quiz_te_sumu_1_2',
                sentence: '大事{だいじ}に至{いた}らなく（　）。',
                options: ['てから', 'て済んだ', 'てまで', 'てさえ'],
                correctIndex: 1,
                explanation: '沒有釀成大事就好。'
            },
            {
                id: 'n3_quiz_te_sumu_1_3',
                sentence: '罰金{ばっきん}だけ（　）。',
                options: ['で済んだ', 'でから', 'でまで', 'でさえ'],
                correctIndex: 0,
                explanation: '只是罰款就過去了。'
            },
            {
                id: 'n3_quiz_te_sumu_1_4',
                sentence: '「遅刻{ちこく}して怒{おこ}られた？」\n「いや、謝{あやま}っ（　）。」',
                options: ['てまで', 'てから', 'て済んだ', 'てさえ'],
                correctIndex: 2,
                explanation: '對話情境。道歉就沒事了。'
            },
            {
                id: 'n3_quiz_te_sumu_1_5',
                sentence: '「入院{にゅういん}必要{ひつよう}？」\n「通院{つういん}だけ（　）そうだ。」',
                options: ['でから', 'でさえ', 'で済む', 'でまで'],
                correctIndex: 2,
                explanation: '對話情境。只需要門診就可以了。'
            }
        ]
    },

    'n3_te_wa_ikenai_kara': {
        id: 'n3_te_wa_ikenai_kara',
        pattern: 'てはいけないから',
        connection: '動詞{どうし}て形{けい} + はいけないから',
        translation: '因為不能做...所以...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示禁止的理由',
                description: '「てはいけないから」表示因為某事是被禁止或不應該做的，所以採取某種行動或態度。',
                examples: [
                    { japanese: '遅刻{ちこく}してはいけないから、早{はや}く起{お}きた。', chinese: '因為不能遲到，所以早起了。' },
                    { japanese: '他人{たにん}に迷惑{めいわく}をかけてはいけないから、静{しず}かにしている。', chinese: '因為不能給別人添麻煩，所以保持安靜。' },
                    { japanese: '「なんでそんなに練習{れんしゅう}するの？」\n「失敗{しっぱい}してはいけないから。」', chinese: '「為什麼練習那麼多？」\n「因為不能失敗。」' }
                ]
            }
        ],
        analysis: {
            title: '「てはいけないから」的用法分析',
            description: '說明行動的原因是為了避免禁止事項。',
            points: [
                { rule: '前句是禁止事項', explanation: '「てはいけない」表示不可以' },
                { rule: '後句是因此採取的行動', explanation: '為了避免違反' },
                { rule: '常用於解釋行動理由', explanation: '表達責任感' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_te_wa_ikenai_kara_1',
                sentence: '約束{やくそく}を破{やぶ}っ（　）、必{かなら}ず行{い}く。',
                options: ['てさえ', 'てまで', 'てから', 'てはいけないから'],
                correctIndex: 3,
                explanation: '因為不能違約，所以一定去。'
            },
            {
                id: 'n3_quiz_te_wa_ikenai_kara_2',
                sentence: '嘘{うそ}をつい（　）、正直{しょうじき}に話{はな}した。',
                options: ['てはいけないから', 'てから', 'てさえ', 'てまで'],
                correctIndex: 0,
                explanation: '因為不能說謊，所以老實說了。'
            },
            {
                id: 'n3_quiz_te_wa_ikenai_kara_3',
                sentence: '油断{ゆだん}し（　）、気{き}をつけている。',
                options: ['てはいけないから', 'てから', 'てまで', 'てさえ'],
                correctIndex: 0,
                explanation: '因為不能大意，所以小心著。'
            },
            {
                id: 'n3_quiz_te_wa_ikenai_kara_4',
                sentence: '「なんで早{はや}く寝{ね}るの？」\n「明日{あした}遅刻{ちこく}し（　）。」',
                options: ['てまで', 'てさえ', 'てから', 'てはいけないから'],
                correctIndex: 3,
                explanation: '對話情境。因為明天不能遲到。'
            },
            {
                id: 'n3_quiz_te_wa_ikenai_kara_5',
                sentence: '「そんなに確認{かくにん}するの？」\n「ミスし（　）。」',
                options: ['てまで', 'てはいけないから', 'てさえ', 'てから'],
                correctIndex: 1,
                explanation: '對話情境。因為不能出錯。'
            }
        ]
    },

    'n3_teiru_baai_janai': {
        id: 'n3_teiru_baai_janai',
        pattern: 'ている場合{ばあい}{ばあい}じゃない',
        connection: '動詞{どうし}て形{けい} + いる場合{ばあい}じゃない',
        translation: '現在不是在做...的時候',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示沒有時間做某事',
                description: '「ている場合じゃない」表示當前情況緊急或重要，沒有時間做某件事。暗示應該做更重要的事。',
                examples: [
                    { japanese: '遊{あそ}んでいる場合{ばあい}じゃない。', chinese: '現在不是玩的時候。' },
                    { japanese: '泣{な}いている場合{ばあい}じゃないよ。', chinese: '現在不是哭的時候。' },
                    { japanese: '「テレビ見{み}よう。」\n「見{み}ている場合{ばあい}じゃないでしょ！試験{しけん}は明日{あした}だよ！」', chinese: '「來看電視吧。」\n「現在不是看電視的時候吧！明天就考試了！」' }
                ]
            }
        ],
        analysis: {
            title: '「ている場合じゃない」的用法分析',
            description: '表達緊迫感和批評。',
            points: [
                { rule: '暗示有更重要的事', explanation: '時間緊迫' },
                { rule: '常用於催促或責備', explanation: '帶有批評語氣' },
                { rule: '「場合」可換成「どころ」', explanation: '「ているどころじゃない」意思相近' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_teiru_baai_janai_1',
                sentence: '寝{ね}（　）、仕事{しごと}を終{お}わらせなさい。',
                options: ['てさえ', 'てまで', 'ている場合じゃない', 'てから'],
                correctIndex: 2,
                explanation: '現在不是睡覺的時候，把工作做完。'
            },
            {
                id: 'n3_quiz_teiru_baai_janai_2',
                sentence: 'のんびりし（　）。締{し}め切{き}りは今日{きょう}だ。',
                options: ['てまで', 'てさえ', 'ている場合じゃない', 'てから'],
                correctIndex: 2,
                explanation: '現在不是悠閒的時候。截止日是今天。'
            },
            {
                id: 'n3_quiz_teiru_baai_janai_3',
                sentence: '落{お}ち込{こ}ん（　）。次{つぎ}を考{かんが}えよう。',
                options: ['でまで', 'でさえ', 'でいる場合じゃない', 'でから'],
                correctIndex: 2,
                explanation: '現在不是沮喪的時候。想想下一步。'
            },
            {
                id: 'n3_quiz_teiru_baai_janai_4',
                sentence: '「ちょっと休{やす}もう。」\n「休{やす}ん（　）！早{はや}く逃{に}げよう！」',
                options: ['でまで', 'でいる場合じゃない', 'でさえ', 'でから'],
                correctIndex: 1,
                explanation: '對話情境。現在不是休息的時候，快逃！'
            },
            {
                id: 'n3_quiz_teiru_baai_janai_5',
                sentence: '「また失敗{しっぱい}した…」\n「悔{くや}ん（　）。やり直{なお}そう。」',
                options: ['でまで', 'でいる場合じゃない', 'でから', 'でさえ'],
                correctIndex: 1,
                explanation: '對話情境。現在不是後悔的時候。重新來過。'
            }
        ]
    },

    'n3_teiru_baai_janai_1': {
        id: 'n3_teiru_baai_janai_1',
        pattern: 'ている場合{ばあい}{ばあい}じゃない',
        connection: '動詞{どうし}て形{けい} + いる場合{ばあい}じゃない',
        translation: '不是...的時候',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '強調時機不對',
                description: '「ている場合じゃない」強調現在不是做某件事的適當時機，應該把心思放在更重要的事情上。',
                examples: [
                    { japanese: '文句{もんく}を言{い}っている場合{ばあい}じゃない。', chinese: '現在不是抱怨的時候。' },
                    { japanese: 'けんかしている場合{ばあい}じゃないよ。', chinese: '現在不是吵架的時候啊。' },
                    { japanese: '「疲{つか}れた…」\n「疲{つか}れたと言{い}っている場合{ばあい}じゃないでしょ！」', chinese: '「好累...」\n「現在不是說累的時候吧！」' }
                ]
            }
        ],
        analysis: {
            title: '「ている場合じゃない」的詳細分析',
            description: '常用於緊急或重要場合。',
            points: [
                { rule: '表示優先順序', explanation: '有更重要的事要做' },
                { rule: '帶有催促或責備語氣', explanation: '暗示對方應該行動' },
                { rule: '口語中常省略「いる」', explanation: '「てる場合じゃない」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_teiru_baai_janai_1_1',
                sentence: '迷{まよ}っ（　）。すぐ決{き}めて！',
                options: ['てまで', 'てから', 'ている場合じゃない', 'てさえ'],
                correctIndex: 2,
                explanation: '現在不是猶豫的時候。快決定！'
            },
            {
                id: 'n3_quiz_teiru_baai_janai_1_2',
                sentence: '怖{こわ}がっ（　）。前{まえ}に進{すす}もう。',
                options: ['ている場合じゃない', 'てさえ', 'てから', 'てまで'],
                correctIndex: 0,
                explanation: '現在不是害怕的時候。往前走吧。'
            },
            {
                id: 'n3_quiz_teiru_baai_janai_1_3',
                sentence: 'ぼーっとし（　）。集中{しゅうちゅう}して！',
                options: ['てから', 'ている場合じゃない', 'てさえ', 'てまで'],
                correctIndex: 1,
                explanation: '現在不是發呆的時候。集中精神！'
            },
            {
                id: 'n3_quiz_teiru_baai_janai_1_4',
                sentence: '「もう無理{むり}だ…」\n「諦{あきら}め（　）！最後{さいご}まで頑張{がんば}れ！」',
                options: ['ている場合じゃない', 'てさえ', 'てまで', 'てから'],
                correctIndex: 0,
                explanation: '對話情境。現在不是放棄的時候！'
            },
            {
                id: 'n3_quiz_teiru_baai_janai_1_5',
                sentence: '「どうしよう…」\n「悩{なや}ん（　）！行動{こうどう}しよう！」',
                options: ['でいる場合じゃない', 'でさえ', 'でまで', 'でから'],
                correctIndex: 0,
                explanation: '對話情境。現在不是煩惱的時候！行動吧！'
            }
        ]
    },

    'n3_teki': {
        id: 'n3_teki',
        pattern: '的{てき}',
        connection: '名詞{めいし} + 的{てき}',
        translation: '的; ...的 (名詞化形容詞)',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示性質或特徵',
                description: '「的」接在名詞後面，形成形容動詞，表示具有某種性質或特徵。相當於英文的 "-tic", "-al", "-ive" 等後綴。',
                examples: [
                    { japanese: '積極的{せっきょくてき}な態度{たいど}が大切{たいせつ}だ。', chinese: '積極的態度很重要。' },
                    { japanese: '科学的{かがくてき}な根拠{こんきょ}がある。', chinese: '有科學根據。' },
                    { japanese: '「彼{かれ}の意見{いけん}どう思{おも}う？」\n「論理的{ろんりてき}だと思{おも}う。」', chinese: '「你覺得他的意見怎樣？」\n「我覺得很有邏輯。」' }
                ]
            }
        ],
        analysis: {
            title: '「的」的用法分析',
            description: '漢語詞彙+的 形成形容動詞。',
            points: [
                { rule: '接續名詞後形成形容動詞', explanation: '如「経済的」「歴史的」' },
                { rule: '修飾名詞時加「な」', explanation: '如「基本的な問題」' },
                { rule: '修飾動詞時加「に」', explanation: '如「具体的に説明する」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_teki_1',
                sentence: '彼女{かのじょ}は社会{しゃかい}（　）に活躍{かつやく}している。',
                options: ['ため', '的', 'から', 'さえ'],
                correctIndex: 1,
                explanation: '她在社會上很活躍。'
            },
            {
                id: 'n3_quiz_teki_2',
                sentence: '国際{こくさい}（　）な問題{もんだい}について話{はな}し合{あ}った。',
                options: ['さえ', 'から', 'ため', '的'],
                correctIndex: 3,
                explanation: '討論了國際性的問題。'
            },
            {
                id: 'n3_quiz_teki_3',
                sentence: '効果{こうか}（　）な方法{ほうほう}を教{おし}えてください。',
                options: ['ため', 'から', 'さえ', '的'],
                correctIndex: 3,
                explanation: '請告訴我有效的方法。'
            },
            {
                id: 'n3_quiz_teki_4',
                sentence: '「どんな計画{けいかく}？」\n「具体{ぐたい}（　）にはまだ決{き}まっていない。」',
                options: ['的', 'さえ', 'から', 'ため'],
                correctIndex: 0,
                explanation: '對話情境。具體的還沒決定。'
            },
            {
                id: 'n3_quiz_teki_5',
                sentence: '「彼{かれ}の話{はなし}わかった？」\n「抽象{ちゅうしょう}{ちゅうしょう}（　）でよくわからなかった。」',
                options: ['ため', 'から', '的', 'さえ'],
                correctIndex: 2,
                explanation: '對話情境。太抽象聽不太懂。'
            }
        ]
    },

    'n3_teki_1': {
        id: 'n3_teki_1',
        pattern: '的{てき}（てき）',
        connection: '名詞{めいし} + 的{てき}（な/に）',
        translation: '...地; ...的',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '作為副詞修飾動詞',
                description: '「名詞+的に」作為副詞使用，表示以某種方式或從某個角度來看。',
                examples: [
                    { japanese: '経済的{けいざいてき}に厳{きび}しい状況{じょうきょう}だ。', chinese: '經濟上是嚴峻的狀況。' },
                    { japanese: '精神的{せいしんてき}に疲{つか}れた。', chinese: '精神上很累。' },
                    { japanese: '「大丈夫{だいじょうぶ}？」\n「体{からだ}は元気{げんき}だけど、精神的{せいしんてき}に辛{つら}い。」', chinese: '「你還好嗎？」\n「身體沒問題，但精神上很辛苦。」' }
                ]
            }
        ],
        analysis: {
            title: '「的に」的副詞用法分析',
            description: '表示從某個角度或方面來看。',
            points: [
                { rule: '「〜的に」修飾動詞或形容詞', explanation: '如「技術的に難しい」' },
                { rule: '常用於表達觀點或角度', explanation: '如「個人的に」「客観的に」' },
                { rule: '可表示程度或範圍', explanation: '如「基本的に」「全体的に」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_teki_1_1',
                sentence: '個人{こじん}（　）には賛成{さんせい}できない。',
                options: ['から', 'ため', '的', 'さえ'],
                correctIndex: 2,
                explanation: '個人來說無法贊成。'
            },
            {
                id: 'n3_quiz_teki_1_2',
                sentence: '技術{ぎじゅつ}（　）に可能{かのう}だ。',
                options: ['的', 'さえ', 'から', 'ため'],
                correctIndex: 0,
                explanation: '技術上是可能的。'
            },
            {
                id: 'n3_quiz_teki_1_3',
                sentence: '基本{きほん}（　）に毎日{まいにち}運動{うんどう}している。',
                options: ['さえ', '的', 'から', 'ため'],
                correctIndex: 1,
                explanation: '基本上每天運動。'
            },
            {
                id: 'n3_quiz_teki_1_4',
                sentence: '「仕事{しごと}どう？」\n「肉体{にくたい}（　）にきついけど、やりがいがある。」',
                options: ['ため', '的', 'さえ', 'から'],
                correctIndex: 1,
                explanation: '對話情境。體力上很累但有成就感。'
            },
            {
                id: 'n3_quiz_teki_1_5',
                sentence: '「計画{けいかく}進{すす}んでる？」\n「理論{りろん}（　）には問題{もんだい}ないよ。」',
                options: ['ため', 'から', '的', 'さえ'],
                correctIndex: 2,
                explanation: '對話情境。理論上沒問題。'
            }
        ]
    },

    'n3_temo_hajimaranai': {
        id: 'n3_temo_hajimaranai',
        pattern: 'ても始{はじ}まらない',
        connection: '動詞{どうし}て形{けい}/い形容詞{けいようし}くて/な形容詞{けいようし}で + も始{はじ}まらない',
        translation: '即使...也沒用',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示做了也沒意義',
                description: '「ても始まらない」表示即使做了某事也不會有任何改變或進展，強調做某事毫無意義。',
                examples: [
                    { japanese: '文句{もんく}を言{い}っても始{はじ}まらない。', chinese: '抱怨也沒用。' },
                    { japanese: '今{いま}さら後悔{こうかい}しても始{はじ}まらない。', chinese: '事到如今後悔也沒用。' },
                    { japanese: '「もっと早{はや}く言{い}ってくれれば…」\n「言{い}っても始{はじ}まらないよ。前{まえ}を見{み}よう。」', chinese: '「如果早點告訴我就...」\n「說了也沒用。向前看吧。」' }
                ]
            }
        ],
        analysis: {
            title: '「ても始まらない」的用法分析',
            description: '表達勸告不要做無意義的事。',
            points: [
                { rule: '表示做了也不會改變現況', explanation: '強調徒勞無功' },
                { rule: '常用於勸告或自我提醒', explanation: '帶有「應該做有意義的事」的含義' },
                { rule: '「始まらない」意為「無法開始/進展」', explanation: '引申為沒有意義' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_temo_hajimaranai_1',
                sentence: '泣{な}い（　）。元気{げんき}を出{だ}そう。',
                options: ['てさえ', 'てまで', 'てから', 'ても始まらない'],
                correctIndex: 3,
                explanation: '哭也沒用。振作起來吧。'
            },
            {
                id: 'n3_quiz_temo_hajimaranai_2',
                sentence: '過去{かこ}を悔{く}やん（　）。',
                options: ['でさえ', 'でも始まらない', 'でまで', 'でから'],
                correctIndex: 1,
                explanation: '懊悔過去也沒用。'
            },
            {
                id: 'n3_quiz_temo_hajimaranai_3',
                sentence: '怒{おこ}っ（　）、状況{じょうきょう}は変{か}わらない。',
                options: ['てさえ', 'ても始まらない', 'てまで', 'てから'],
                correctIndex: 1,
                explanation: '生氣也沒用，狀況不會改變。'
            },
            {
                id: 'n3_quiz_temo_hajimaranai_4',
                sentence: '「どうしよう…失敗{しっぱい}した…」\n「悩{なや}ん（　）。次{つぎ}頑張{がんば}ろう。」',
                options: ['でも始まらない', 'でまで', 'でさえ', 'でから'],
                correctIndex: 0,
                explanation: '對話情境。煩惱也沒用。下次加油。'
            },
            {
                id: 'n3_quiz_temo_hajimaranai_5',
                sentence: '「あの時{とき}ああすれば…」\n「言{い}っ（　）よ。現実{げんじつ}を見{み}よう。」',
                options: ['ても始まらない', 'てから', 'てさえ', 'てまで'],
                correctIndex: 0,
                explanation: '對話情境。說了也沒用。面對現實吧。'
            }
        ]
    },

    'n3_temo_hajimaranai_1': {
        id: 'n3_temo_hajimaranai_1',
        pattern: 'ても始{はじ}まらない',
        connection: '動詞{どうし}て形{けい}/い形容詞{けいようし}くて/な形容詞{けいようし}で + も始{はじ}まらない',
        translation: '就算...也沒用',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '強調徒勞無功',
                description: '「ても始まらない」強調某行為或想法對於改變現狀毫無幫助，應該放棄這種無意義的行為。',
                examples: [
                    { japanese: '焦{あせ}っても始{はじ}まらない。', chinese: '著急也沒用。' },
                    { japanese: '他人{たにん}のせいにしても始{はじ}まらない。', chinese: '怪別人也沒用。' },
                    { japanese: '「なんで私{わたし}がこんな目{め}に…」\n「不満{ふまん}を言{い}っても始{はじ}まらないよ。」', chinese: '「為什麼我要遭受這種事...」\n「抱怨也沒用啊。」' }
                ]
            }
        ],
        analysis: {
            title: '「ても始まらない」的詳細分析',
            description: '用於勸說停止無意義的行為。',
            points: [
                { rule: '常與負面行為連用', explanation: '如抱怨、後悔、責怪等' },
                { rule: '帶有「應該採取行動」的暗示', explanation: '與其做無意義的事不如行動' },
                { rule: '口語中常用', explanation: '給人實際的建議' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_temo_hajimaranai_1_1',
                sentence: '人{ひと}を恨{うら}ん（　）。',
                options: ['でまで', 'でから', 'でさえ', 'でも始まらない'],
                correctIndex: 3,
                explanation: '怨恨別人也沒用。'
            },
            {
                id: 'n3_quiz_temo_hajimaranai_1_2',
                sentence: '嘆{なげ}い（　）、現状{げんじょう}は変{か}わらない。',
                options: ['てさえ', 'てから', 'ても始まらない', 'てまで'],
                correctIndex: 2,
                explanation: '嘆息也沒用，現狀不會改變。'
            },
            {
                id: 'n3_quiz_temo_hajimaranai_1_3',
                sentence: '運{うん}が悪{わる}かったと言{い}っ（　）。',
                options: ['てさえ', 'ても始まらない', 'てまで', 'てから'],
                correctIndex: 1,
                explanation: '說運氣不好也沒用。'
            },
            {
                id: 'n3_quiz_temo_hajimaranai_1_4',
                sentence: '「上司{じょうし}に腹{はら}が立{た}つ！」\n「怒{おこ}っ（　）よ。解決策{かいけつさく}を考{かんが}えよう。」',
                options: ['てまで', 'ても始まらない', 'てから', 'てさえ'],
                correctIndex: 1,
                explanation: '對話情境。生氣也沒用。想解決辦法吧。'
            },
            {
                id: 'n3_quiz_temo_hajimaranai_1_5',
                sentence: '「また落{お}ちた…」\n「落{お}ち込{こ}ん（　）。次{つぎ}に備{そな}えよう。」',
                options: ['でから', 'でも始まらない', 'でまで', 'でさえ'],
                correctIndex: 1,
                explanation: '對話情境。沮喪也沒用。為下次做準備吧。'
            }
        ]
    },

    'n3_temo_kamawanai': {
        id: 'n3_temo_kamawanai',
        pattern: 'ても構{かま}わない',
        connection: '動詞{どうし}て形{けい}/い形容詞{けいようし}くて/な形容詞{けいようし}で + も構{かま}わない',
        translation: '即使用...也沒關係',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示允許或不介意',
                description: '「ても構わない」表示即使某事發生也不在意，或者允許某人做某事。相當於「てもいい」但更強調不介意。',
                examples: [
                    { japanese: '遅{おく}れても構{かま}わない。', chinese: '遲到也沒關係。' },
                    { japanese: '少{すこ}し高{たか}くても構{かま}わない。', chinese: '貴一點也沒關係。' },
                    { japanese: '「ここに座{すわ}っても構{かま}いませんか？」\n「どうぞ。」', chinese: '「坐這裡可以嗎？」\n「請坐。」' }
                ]
            }
        ],
        analysis: {
            title: '「ても構わない」的用法分析',
            description: '表達不介意或允許。',
            points: [
                { rule: '比「てもいい」語氣稍強', explanation: '更強調不在乎' },
                { rule: '可用於請求許可', explanation: '「ても構いませんか」較正式' },
                { rule: '否定形「なくても構わない」', explanation: '表示不做也沒關係' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_temo_kamawanai_1',
                sentence: '答{こた}えがわからなく（　）。',
                options: ['ても構わない', 'てから', 'てまで', 'てさえ'],
                correctIndex: 0,
                explanation: '不知道答案也沒關係。'
            },
            {
                id: 'n3_quiz_temo_kamawanai_2',
                sentence: '失敗{しっぱい}し（　）、チャレンジすることが大切{たいせつ}だ。',
                options: ['てまで', 'ても構わない', 'てさえ', 'てから'],
                correctIndex: 1,
                explanation: '失敗也沒關係，挑戰才重要。'
            },
            {
                id: 'n3_quiz_temo_kamawanai_3',
                sentence: '量{りょう}が少{すこ}なく（　）。',
                options: ['ても構わない', 'てから', 'てさえ', 'てまで'],
                correctIndex: 0,
                explanation: '量少一點也沒關係。'
            },
            {
                id: 'n3_quiz_temo_kamawanai_4',
                sentence: '「写真{しゃしん}を撮{と}っ（　）？」\n「いいですよ。」',
                options: ['てまで', 'ても構いませんか', 'てさえ', 'てから'],
                correctIndex: 1,
                explanation: '對話情境。可以拍照嗎？'
            },
            {
                id: 'n3_quiz_temo_kamawanai_5',
                sentence: '「明日{あした}でいい？」\n「うん、いつ（　）。」',
                options: ['でも構わない', 'でさえ', 'でから', 'でまで'],
                correctIndex: 0,
                explanation: '對話情境。什麼時候都可以。'
            }
        ]
    },

    'n3_temo_kamawanai_1': {
        id: 'n3_temo_kamawanai_1',
        pattern: 'ても構{かま}わない',
        connection: '動詞{どうし}て形{けい}/い形容詞{けいようし}くて/な形容詞{けいようし}で + も構{かま}わない',
        translation: '就算...也沒關係',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示不在乎或允許',
                description: '「ても構わない」表示對某種情況或結果不介意，或者表示允許某種行為。語氣比「てもいい」更強。',
                examples: [
                    { japanese: '安{やす}ければ中古{ちゅうこ}でも構{かま}わない。', chinese: '便宜的話二手也沒關係。' },
                    { japanese: '一人{ひとり}でも構{かま}わない。', chinese: '一個人也沒關係。' },
                    { japanese: '「辛{から}くてもいい？」\n「全然{ぜんぜん}構{かま}わないよ。」', chinese: '「辣的可以嗎？」\n「完全沒關係。」' }
                ]
            }
        ],
        analysis: {
            title: '「ても構わない」的詳細分析',
            description: '強調接受任何情況。',
            points: [
                { rule: '表示廣泛的接受', explanation: '不管怎樣都可以' },
                { rule: '常用於讓步或妥協', explanation: '願意接受不完美的情況' },
                { rule: '「構う」意為「在意」', explanation: '「構わない」=「不在意」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_temo_kamawanai_1_1',
                sentence: '小{ちい}さく（　）、便利{べんり}な方{ほう}がいい。',
                options: ['てさえ', 'てまで', 'てから', 'ても構わない'],
                correctIndex: 3,
                explanation: '小一點也沒關係，方便比較重要。'
            },
            {
                id: 'n3_quiz_temo_kamawanai_1_2',
                sentence: '遠{とお}く（　）、静{しず}かな場所{ばしょ}がいい。',
                options: ['てさえ', 'てから', 'ても構わない', 'てまで'],
                correctIndex: 2,
                explanation: '遠一點也沒關係，想要安靜的地方。'
            },
            {
                id: 'n3_quiz_temo_kamawanai_1_3',
                sentence: '時間{じかん}がかかっ（　）、丁寧{ていねい}にやってほしい。',
                options: ['てから', 'ても構わない', 'てまで', 'てさえ'],
                correctIndex: 1,
                explanation: '花時間也沒關係，希望做得仔細。'
            },
            {
                id: 'n3_quiz_temo_kamawanai_1_4',
                sentence: '「もう少{すこ}し待{ま}ってもらえる？」\n「いくら待{ま}っ（　）。」',
                options: ['てさえ', 'ても構わない', 'てまで', 'てから'],
                correctIndex: 1,
                explanation: '對話情境。等多久都可以。'
            },
            {
                id: 'n3_quiz_temo_kamawanai_1_5',
                sentence: '「日本語{にほんご}間違{まちが}ってるかも…」\n「間違{まちが}っ（　）から、どんどん話{はな}して。」',
                options: ['てまで', 'てさえ', 'てから', 'ても構わない'],
                correctIndex: 3,
                explanation: '對話情境。錯了也沒關係，盡量說。'
            }
        ]
    },

    'n3_temo_shou_ga_nai': {
        id: 'n3_temo_shou_ga_nai',
        pattern: 'てもしょうがない',
        connection: '動詞{どうし}て形{けい}/い形容詞{けいようし}くて/な形容詞{けいようし}で + もしょうがない',
        translation: '即使...也沒辦法',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示做了也無濟於事',
                description: '「てもしょうがない」表示即使做了某事也不會有好的結果或改變，暗示應該放棄或接受現實。',
                examples: [
                    { japanese: '急{いそ}いでもしょうがない。', chinese: '急也沒用。' },
                    { japanese: '嘆{なげ}いてもしょうがない。', chinese: '嘆氣也沒用。' },
                    { japanese: '「もう終{お}わったの？取{と}り返{かえ}せない…」\n「考{かんが}えてもしょうがないよ。」', chinese: '「已經結束了？無法挽回了...」\n「想也沒用啊。」' }
                ]
            }
        ],
        analysis: {
            title: '「てもしょうがない」的用法分析',
            description: '表達對無法改變之事的接受。',
            points: [
                { rule: '常用於安慰或勸告', explanation: '建議放下或接受' },
                { rule: '與「ても始まらない」意思相近', explanation: '都表示做了也沒用' },
                { rule: '「しょうがない」=「仕方がない」', explanation: '沒辦法的意思' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_temo_shou_ga_nai_1',
                sentence: '心配{しんぱい}し（　）。結果{けっか}を待{ま}とう。',
                options: ['てから', 'てもしょうがない', 'てさえ', 'てまで'],
                correctIndex: 1,
                explanation: '擔心也沒用。等結果吧。'
            },
            {
                id: 'n3_quiz_temo_shou_ga_nai_2',
                sentence: '文句{もんく}を言{い}っ（　）。',
                options: ['てから', 'てまで', 'てさえ', 'てもしょうがない'],
                correctIndex: 3,
                explanation: '抱怨也沒用。'
            },
            {
                id: 'n3_quiz_temo_shou_ga_nai_3',
                sentence: '今{いま}さら反省{はんせい}し（　）。',
                options: ['てもしょうがない', 'てまで', 'てから', 'てさえ'],
                correctIndex: 0,
                explanation: '事到如今反省也沒用。'
            },
            {
                id: 'n3_quiz_temo_shou_ga_nai_4',
                sentence: '「彼{かれ}のことばかり考{かんが}えてる。」\n「考{かんが}え（　）よ。前{まえ}を向{む}こう。」',
                options: ['てまで', 'てから', 'てもしょうがない', 'てさえ'],
                correctIndex: 2,
                explanation: '對話情境。想也沒用。向前看吧。'
            },
            {
                id: 'n3_quiz_temo_shou_ga_nai_5',
                sentence: '「試験{しけん}落{お}ちた…」\n「悔{く}やん（　）。次{つぎ}があるよ。」',
                options: ['でさえ', 'でまで', 'でから', 'でもしょうがない'],
                correctIndex: 3,
                explanation: '對話情境。後悔也沒用。還有下次。'
            }
        ]
    },

    'n3_temo_shou_ga_nai_temo_shikata_ga_nai': {
        id: 'n3_temo_shou_ga_nai_temo_shikata_ga_nai',
        pattern: 'てもしょうがない / てもしかたがない',
        connection: '動詞{どうし}て形{けい}/い形容詞{けいようし}くて/な形容詞{けいようし}で + もしょうがない/もしかたがない',
        translation: '即使...也沒用; 沒辦法',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示無奈接受',
                description: '「てもしょうがない」和「てもしかたがない」都表示即使做了某事也無法改變現狀，只能接受。',
                examples: [
                    { japanese: '泣{な}いてもしかたがない。', chinese: '哭也沒用。' },
                    { japanese: '過{す}ぎたことを悔{く}やんでもしょうがない。', chinese: '後悔過去的事也沒用。' },
                    { japanese: '「雨{あめ}で試合{しあい}中止{ちゅうし}か…」\n「天気{てんき}は変{か}えられないから、怒{おこ}ってもしかたがないよ。」', chinese: '「因為下雨比賽取消了...」\n「天氣沒辦法改變，生氣也沒用啊。」' }
                ]
            }
        ],
        analysis: {
            title: '「てもしょうがない/てもしかたがない」的分析',
            description: '兩者意思相同，表達接受現實。',
            points: [
                { rule: '「しょうがない」較口語', explanation: '日常對話常用' },
                { rule: '「しかたがない」較正式', explanation: '書面或正式場合' },
                { rule: '常用於勸導或自我安慰', explanation: '建議接受無法改變的事' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_temo_shou_ga_nai_temo_shikata_ga_nai_1',
                sentence: '待{ま}っ（　）。自分{じぶん}で動{うご}こう。',
                options: ['てもしかたがない', 'てから', 'てまで', 'てさえ'],
                correctIndex: 0,
                explanation: '等也沒用。自己行動吧。'
            },
            {
                id: 'n3_quiz_temo_shou_ga_nai_temo_shikata_ga_nai_2',
                sentence: '誰{だれ}かのせいにし（　）。',
                options: ['てもしかたがない', 'てから', 'てさえ', 'てまで'],
                correctIndex: 0,
                explanation: '怪別人也沒用。'
            },
            {
                id: 'n3_quiz_temo_shou_ga_nai_temo_shikata_ga_nai_3',
                sentence: 'ないものはない。欲{ほ}しがっ（　）。',
                options: ['てさえ', 'てまで', 'てもしかたがない', 'てから'],
                correctIndex: 2,
                explanation: '沒有的就是沒有。想要也沒用。'
            },
            {
                id: 'n3_quiz_temo_shou_ga_nai_temo_shikata_ga_nai_4',
                sentence: '「また不合格{ふごうかく}だった…」\n「済{す}んだことを言{い}っ（　）。次{つぎ}頑張{がんば}ろう。」',
                options: ['てから', 'てまで', 'てもしかたがない', 'てさえ'],
                correctIndex: 2,
                explanation: '對話情境。說過去的事也沒用。下次加油。'
            },
            {
                id: 'n3_quiz_temo_shou_ga_nai_temo_shikata_ga_nai_5',
                sentence: '「あの人{ひと}嫌{きら}いだ。」\n「嫌{いや}（　）、一緒{いっしょ}に仕事{しごと}しなきゃ。」',
                options: ['でさえ', 'でまで', 'でもしかたがない', 'でから'],
                correctIndex: 2,
                explanation: '對話情境。討厭也沒辦法，得一起工作。'
            }
        ]
    },

    'n3_to_ieba': {
        id: 'n3_to_ieba',
        pattern: 'と言{い}えば',
        connection: '名詞{めいし}/句{く}子{し} + と言{い}えば',
        translation: '說到...; 談起...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '引出話題或聯想',
                description: '「と言えば」用於從某個話題聯想到相關事物，或者引出新的話題。相當於「說到...」。',
                examples: [
                    { japanese: '京都{きょうと}と言{い}えば、寺{てら}や神社{じんじゃ}が有名{ゆうめい}だ。', chinese: '說到京都，寺廟和神社很有名。' },
                    { japanese: '夏{なつ}と言{い}えば、花火{はなび}だね。', chinese: '說到夏天，就是煙火呢。' },
                    { japanese: '「日本料理{にほんりょうり}と言{い}えば？」\n「やっぱり寿司{すし}かな。」', chinese: '「說到日本料理呢？」\n「果然還是壽司吧。」' }
                ]
            }
        ],
        analysis: {
            title: '「と言えば」的用法分析',
            description: '用於引出話題或表達聯想。',
            points: [
                { rule: '從A聯想到B', explanation: '說到A就想到B' },
                { rule: '用於轉換話題', explanation: '順便提起相關事物' },
                { rule: '常用於表達典型印象', explanation: '如「提到日本就想到富士山」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_to_ieba_1',
                sentence: '北海道{ほっかいどう}（　）、雪{ゆき}まつりが有名{ゆうめい}だ。',
                options: ['とから', 'とまで', 'と言えば', 'とさえ'],
                correctIndex: 2,
                explanation: '說到北海道，雪祭很有名。'
            },
            {
                id: 'n3_quiz_to_ieba_2',
                sentence: '日本{にほん}（　）、桜{さくら}を思{おも}い浮{う}かべる。',
                options: ['と言えば', 'とさえ', 'とから', 'とまで'],
                correctIndex: 0,
                explanation: '說到日本，就想到櫻花。'
            },
            {
                id: 'n3_quiz_to_ieba_3',
                sentence: 'お正月{しょうがつ}（　）、おせち料理{りょうり}だ。',
                options: ['とさえ', 'とまで', 'と言えば', 'とから'],
                correctIndex: 2,
                explanation: '說到新年，就是年菜。'
            },
            {
                id: 'n3_quiz_to_ieba_4',
                sentence: '「大阪{おおさか}（　）？」\n「たこ焼{や}きかな。」',
                options: ['とさえ', 'とまで', 'と言えば', 'とから'],
                correctIndex: 2,
                explanation: '對話情境。說到大阪呢？章魚燒吧。'
            },
            {
                id: 'n3_quiz_to_ieba_5',
                sentence: '「田中{たなか}さん（　）、今日{きょう}見{み}なかったね。」\n「そうだね。休{やす}みかな。」',
                options: ['と言えば', 'とさえ', 'とから', 'とまで'],
                correctIndex: 0,
                explanation: '對話情境。說到田中，今天沒看到呢。'
            }
        ]
    },

    'n3_to_ieba_1': {
        id: 'n3_to_ieba_1',
        pattern: 'と言{い}えば',
        connection: '名詞{めいし}/句{く}子{し} + と言{い}えば',
        translation: '提起...; 說到...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表達典型聯想或轉換話題',
                description: '「と言えば」用於表達聽到某個詞或話題時的典型聯想，或者順便提起相關話題。',
                examples: [
                    { japanese: 'クリスマスと言{い}えば、ケーキとプレゼントだね。', chinese: '說到聖誕節，就是蛋糕和禮物呢。' },
                    { japanese: '彼{かれ}と言{い}えば、いつも遅刻{ちこく}する。', chinese: '說到他，總是遲到。' },
                    { japanese: '「コーヒーおいしいね。」\n「コーヒーと言{い}えば、新{あたら}しいカフェができたよ。」', chinese: '「咖啡真好喝。」\n「說到咖啡，有新的咖啡店開了喔。」' }
                ]
            }
        ],
        analysis: {
            title: '「と言えば」的詳細分析',
            description: '自然地轉換或延續話題。',
            points: [
                { rule: '可用於引出新話題', explanation: '順著話題自然轉向' },
                { rule: '表達對某事物的印象', explanation: '如「說到他就想到...」' },
                { rule: '口語中常用', explanation: '讓對話更自然' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_to_ieba_1_1',
                sentence: 'あの店{みせ}（　）、いつも混{こ}んでいる。',
                options: ['とさえ', 'とから', 'と言えば', 'とまで'],
                correctIndex: 2,
                explanation: '說到那家店，總是很擁擠。'
            },
            {
                id: 'n3_quiz_to_ieba_1_2',
                sentence: '運動{うんどう}（　）、最近{さいきん}全然{ぜんぜん}してない。',
                options: ['とから', 'とさえ', 'と言えば', 'とまで'],
                correctIndex: 2,
                explanation: '說到運動，最近完全沒做。'
            },
            {
                id: 'n3_quiz_to_ieba_1_3',
                sentence: '旅行{りょこう}（　）、来月{らいげつ}海外{かいがい}に行{い}く予定{よてい}だ。',
                options: ['とさえ', 'とから', 'とまで', 'と言えば'],
                correctIndex: 3,
                explanation: '說到旅行，下個月預計出國。'
            },
            {
                id: 'n3_quiz_to_ieba_1_4',
                sentence: '「佐藤{さとう}さん元気{げんき}？」\n「佐藤{さとう}さん（　）、結婚{けっこん}したらしいよ。」',
                options: ['とさえ', 'とまで', 'とから', 'と言えば'],
                correctIndex: 3,
                explanation: '對話情境。說到佐藤，聽說結婚了。'
            },
            {
                id: 'n3_quiz_to_ieba_1_5',
                sentence: '「今日{きょう}暑{あつ}いね。」\n「暑{あつ}い（　）、エアコン壊{こわ}れたんだ。」',
                options: ['とから', 'とまで', 'と言えば', 'とさえ'],
                correctIndex: 2,
                explanation: '對話情境。說到熱，冷氣壞了。'
            }
        ]
    },

    'n3_to_ii': {
        id: 'n3_to_ii',
        pattern: 'といい',
        connection: '動詞{どうし}辭書{じしょ}形{けい}/ない形{けい} + といい',
        translation: '要是...就好了',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表達願望或期待',
                description: '「といい」表示說話者希望某事能夠實現，帶有期盼的語氣。常用於對未來的願望。',
                examples: [
                    { japanese: '明日{あした}晴{は}れるといいね。', chinese: '希望明天放晴。' },
                    { japanese: '試験{しけん}に合格{ごうかく}するといいな。', chinese: '要是考試合格就好了。' },
                    { japanese: '「来週{らいしゅう}旅行{りょこう}に行{い}くんだ。」\n「天気{てんき}がいいといいね。」', chinese: '「下週要去旅行。」\n「希望天氣好。」' }
                ]
            }
        ],
        analysis: {
            title: '「といい」的用法分析',
            description: '表達對某事實現的期望。',
            points: [
                { rule: '用於表達願望', explanation: '「希望...」的意思' },
                { rule: '常搭配「ね」「な」', explanation: '使語氣更柔和' },
                { rule: '可用於祝福他人', explanation: '「希望你...」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_to_ii_1',
                sentence: '早{はや}く元気{げんき}になる（　）ね。',
                options: ['といい', 'とから', 'とさえ', 'とまで'],
                correctIndex: 0,
                explanation: '希望快點康復。'
            },
            {
                id: 'n3_quiz_to_ii_2',
                sentence: '彼女{かのじょ}に会{あ}える（　）なあ。',
                options: ['とさえ', 'とから', 'といい', 'とまで'],
                correctIndex: 2,
                explanation: '要是能見到她就好了。'
            },
            {
                id: 'n3_quiz_to_ii_3',
                sentence: '今年{ことし}中{ちゅう}に終{お}わる（　）んだけど。',
                options: ['とまで', 'とから', 'といい', 'とさえ'],
                correctIndex: 2,
                explanation: '希望在今年內結束。'
            },
            {
                id: 'n3_quiz_to_ii_4',
                sentence: '「明日{あした}面接{めんせつ}なんだ。」\n「うまくいく（　）ね。」',
                options: ['とさえ', 'とから', 'とまで', 'といい'],
                correctIndex: 3,
                explanation: '對話情境。希望順利。'
            },
            {
                id: 'n3_quiz_to_ii_5',
                sentence: '「ずっと雨{あめ}だね。」\n「早{はや}く止{や}む（　）なあ。」',
                options: ['とから', 'とまで', 'とさえ', 'といい'],
                correctIndex: 3,
                explanation: '對話情境。希望快點停雨。'
            }
        ]
    },

    'n3_to_ii_tara_ii': {
        id: 'n3_to_ii_tara_ii',
        pattern: 'といい / たらいい',
        connection: '動詞{どうし}辭書{じしょ}形{けい} + といい / 動詞{どうし}た形{けい} + らいい',
        translation: '要是...就好了',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表達願望（兩種形式）',
                description: '「といい」和「たらいい」都表示願望，「といい」較客觀，「たらいい」較主觀或用於給建議。',
                examples: [
                    { japanese: '宝{たから}くじが当{あ}たったらいいのに。', chinese: '要是中彩票就好了。' },
                    { japanese: 'もっと時間{じかん}があればといいんだけど。', chinese: '要是有更多時間就好了。' },
                    { japanese: '「どうすればいい？」\n「先生{せんせい}に聞{き}いたらいいよ。」', chinese: '「該怎麼辦？」\n「問老師就好了。」' }
                ]
            }
        ],
        analysis: {
            title: '「といい/たらいい」的比較分析',
            description: '兩種形式用法略有不同。',
            points: [
                { rule: '「といい」用於一般願望', explanation: '如祝福、期待' },
                { rule: '「たらいい」可用於給建議', explanation: '「這樣做就好」' },
                { rule: '「たらいいのに」表達遺憾', explanation: '「要是...就好了（可惜沒有）」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_to_ii_tara_ii_1',
                sentence: '休{やす}みが長{なが}かっ（　）のに。',
                options: ['てから', 'てさえ', 'てまで', 'たらいい'],
                correctIndex: 3,
                explanation: '要是假期更長就好了。'
            },
            {
                id: 'n3_quiz_to_ii_tara_ii_2',
                sentence: 'もっと安{やす}かっ（　）なあ。',
                options: ['てさえ', 'てから', 'てまで', 'たらいい'],
                correctIndex: 3,
                explanation: '要是更便宜就好了。'
            },
            {
                id: 'n3_quiz_to_ii_tara_ii_3',
                sentence: '近{ちか}くにコンビニがあっ（　）のに。',
                options: ['てさえ', 'てまで', 'てから', 'たらいい'],
                correctIndex: 3,
                explanation: '要是附近有便利商店就好了。'
            },
            {
                id: 'n3_quiz_to_ii_tara_ii_4',
                sentence: '「緊張{きんちょう}する…」\n「リラックスし（　）よ。」',
                options: ['たらいい', 'てさえ', 'てまで', 'てから'],
                correctIndex: 0,
                explanation: '對話情境。放輕鬆就好。'
            },
            {
                id: 'n3_quiz_to_ii_tara_ii_5',
                sentence: '「何{なに}を食{た}べよう？」\n「好{す}きなものを選{えら}ん（　）よ。」',
                options: ['でから', 'でさえ', 'でまで', 'だらいい'],
                correctIndex: 3,
                explanation: '對話情境。選喜歡的就好。'
            }
        ]
    },

    'n3_to_ittemo': {
        id: 'n3_to_ittemo',
        pattern: 'といっても',
        connection: '句{く}子{し} + といっても',
        translation: '雖說...但是...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示修正或補充說明',
                description: '「といっても」用於對前面說的話進行修正或補充，表示實際情況與字面意思有差距。',
                examples: [
                    { japanese: '日本語{にほんご}ができるといっても、まだ初級{しょきゅう}レベルだ。', chinese: '雖說會日語，但還是初級程度。' },
                    { japanese: '料理{りょうり}が得意{とくい}といっても、簡単{かんたん}なものしか作{つく}れない。', chinese: '雖說擅長料理，但只會做簡單的。' },
                    { japanese: '「旅行{りょこう}行{い}ってきた？」\n「うん、といっても日帰{ひがえ}りだけどね。」', chinese: '「去旅行了嗎？」\n「嗯，不過只是當日來回。」' }
                ]
            }
        ],
        analysis: {
            title: '「といっても」的用法分析',
            description: '用於降低期待或補充說明。',
            points: [
                { rule: '修正前面的說法', explanation: '「雖然這麼說，但其實...」' },
                { rule: '降低對方的期待', explanation: '謙虛地補充說明' },
                { rule: '常用於解釋實際情況', explanation: '澄清誤解' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_to_ittemo_1',
                sentence: '運動{うんどう}している（　）、週{しゅう}に一回{いっかい}だけだ。',
                options: ['とまで', 'といっても', 'とさえ', 'とから'],
                correctIndex: 1,
                explanation: '雖說有運動，但一週只有一次。'
            },
            {
                id: 'n3_quiz_to_ittemo_2',
                sentence: '広{ひろ}い（　）、二人{ふたり}でちょうどいい程度{ていど}だ。',
                options: ['とさえ', 'とまで', 'とから', 'といっても'],
                correctIndex: 3,
                explanation: '雖說寬敞，但也就剛好兩人住的程度。'
            },
            {
                id: 'n3_quiz_to_ittemo_3',
                sentence: '高{たか}い（　）、五千円{ごせんえん}ぐらいだ。',
                options: ['とさえ', 'とまで', 'とから', 'といっても'],
                correctIndex: 3,
                explanation: '雖說貴，但大概五千日圓。'
            },
            {
                id: 'n3_quiz_to_ittemo_4',
                sentence: '「お金持{かねも}ちなんでしょ？」\n「お金持{かねも}ち（　）、普通{ふつう}のサラリーマンだよ。」',
                options: ['とまで', 'とから', 'とさえ', 'といっても'],
                correctIndex: 3,
                explanation: '對話情境。雖說有錢，其實是普通上班族。'
            },
            {
                id: 'n3_quiz_to_ittemo_5',
                sentence: '「ピアノ弾{ひ}ける？」\n「弾{ひ}ける（　）、一曲{いっきょく}だけだよ。」',
                options: ['といっても', 'とまで', 'とさえ', 'とから'],
                correctIndex: 0,
                explanation: '對話情境。雖說會彈，但只會一首。'
            }
        ]
    },

    'n3_to_iu_koto_da': {
        id: 'n3_to_iu_koto_da',
        pattern: 'ということだ',
        connection: '句{く}子{し} + ということだ',
        translation: '據說...; 也就是說...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '傳達聽來的消息或總結',
                description: '「ということだ」有兩個主要用法：1) 傳達從別處聽來的消息，2) 對前面內容進行總結或下結論。',
                examples: [
                    { japanese: '彼{かれ}は来月{らいげつ}結婚{けっこん}するということだ。', chinese: '據說他下個月要結婚。' },
                    { japanese: 'つまり、やり直{なお}しということだ。', chinese: '也就是說，要重做。' },
                    { japanese: '「会議{かいぎ}どうなった？」\n「延期{えんき}になったということだ。」', chinese: '「會議怎麼樣了？」\n「據說延期了。」' }
                ]
            }
        ],
        analysis: {
            title: '「ということだ」的用法分析',
            description: '用於傳聞或總結。',
            points: [
                { rule: '傳聞用法：「據說...」', explanation: '引述他人的話或消息' },
                { rule: '總結用法：「也就是說...」', explanation: '對情況做出結論' },
                { rule: '書面語較常用', explanation: '較正式的表達' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_to_iu_koto_da_1',
                sentence: '電車{でんしゃ}が遅{おく}れている（　）。',
                options: ['ということだ', 'とまで', 'とから', 'とさえ'],
                correctIndex: 0,
                explanation: '據說電車誤點了。'
            },
            {
                id: 'n3_quiz_to_iu_koto_da_2',
                sentence: 'あの店{みせ}は来月{らいげつ}閉{し}まる（　）。',
                options: ['とから', 'ということだ', 'とさえ', 'とまで'],
                correctIndex: 1,
                explanation: '據說那家店下個月要關門。'
            },
            {
                id: 'n3_quiz_to_iu_koto_da_3',
                sentence: '返事{へんじ}がないのは、承諾{しょうだく}した（　）。',
                options: ['とまで', 'とさえ', 'ということだ', 'とから'],
                correctIndex: 2,
                explanation: '沒有回覆，也就是說同意了。'
            },
            {
                id: 'n3_quiz_to_iu_koto_da_4',
                sentence: '「田中{たなか}さんは？」\n「出張{しゅっちょう}中{ちゅう}だ（　）。」',
                options: ['とから', 'ということだ', 'とさえ', 'とまで'],
                correctIndex: 1,
                explanation: '對話情境。據說在出差中。'
            },
            {
                id: 'n3_quiz_to_iu_koto_da_5',
                sentence: '「彼{かれ}は不参加{ふさんか}か…」\n「つまり、二人{ふたり}でやる（　）。」',
                options: ['とまで', 'とさえ', 'とから', 'ということだ'],
                correctIndex: 3,
                explanation: '對話情境。也就是說，兩個人做。'
            }
        ]
    },

    'n3_to_iu_nowa': {
        id: 'n3_to_iu_nowa',
        pattern: 'というのは',
        connection: '名詞{めいし}/句{く}子{し} + というのは',
        translation: '所謂的...; ...是因為...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '解釋說明或表達理由',
                description: '「というのは」用於解釋某個詞語的意思，或者說明某事的理由。',
                examples: [
                    { japanese: '「おもてなし」というのは、日本{にほん}のホスピタリティのことだ。', chinese: '所謂的「おもてなし」是指日本的待客之道。' },
                    { japanese: '遅刻{ちこく}した。というのは、電車{でんしゃ}が止{と}まったからだ。', chinese: '遲到了。因為電車停駛了。' },
                    { japanese: '「なんで断{ことわ}ったの？」\n「というのは、先約{せんやく}があったからだ。」', chinese: '「為什麼拒絕了？」\n「因為有先約了。」' }
                ]
            }
        ],
        analysis: {
            title: '「というのは」的用法分析',
            description: '用於定義或說明理由。',
            points: [
                { rule: '定義用法：「所謂的...是...」', explanation: '解釋詞語或概念' },
                { rule: '理由用法：「因為...」', explanation: '說明原因' },
                { rule: '常接「～ことだ」或「～からだ」', explanation: '完成說明' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_to_iu_nowa_1',
                sentence: '「敬語{けいご}」（　）目上{めうえ}の人{ひと}に使{つか}う丁寧{ていねい}な言葉{ことば}だ。',
                options: ['というのは', 'とまで', 'とから', 'とさえ'],
                correctIndex: 0,
                explanation: '所謂的「敬語」是對長輩使用的禮貌用語。'
            },
            {
                id: 'n3_quiz_to_iu_nowa_2',
                sentence: '行{い}けない。（　）、仕事{しごと}があるからだ。',
                options: ['というのは', 'とから', 'とさえ', 'とまで'],
                correctIndex: 0,
                explanation: '去不了。因為有工作。'
            },
            {
                id: 'n3_quiz_to_iu_nowa_3',
                sentence: '「引{ひ}きこもり」（　）家{いえ}から出{で}ない人{ひと}のことだ。',
                options: ['とさえ', 'とまで', 'とから', 'というのは'],
                correctIndex: 3,
                explanation: '所謂的「繭居族」是指不出門的人。'
            },
            {
                id: 'n3_quiz_to_iu_nowa_4',
                sentence: '「なぜ転職{てんしょく}したの？」\n「（　）、今{いま}の会社{かいしゃ}に成長{せいちょう}がないからだ。」',
                options: ['とさえ', 'とまで', 'とから', 'というのは'],
                correctIndex: 3,
                explanation: '對話情境。因為現在的公司沒有發展。'
            },
            {
                id: 'n3_quiz_to_iu_nowa_5',
                sentence: '「SDGs」（　）持続可能{じぞくかのう}な開発{かいはつ}目標{もくひょう}のことだ。',
                options: ['とから', 'とさえ', 'というのは', 'とまで'],
                correctIndex: 2,
                explanation: '「SDGs」是指永續發展目標。'
            }
        ]
    },

    'n3_to_iu_to': {
        id: 'n3_to_iu_to',
        pattern: 'と言{い}うと',
        connection: '名詞{めいし}/句{く}子{し} + と言{い}うと',
        translation: '說起...; 提起...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '引出聯想或確認',
                description: '「と言うと」用於從某個話題引出聯想，或者確認對方說的內容。',
                examples: [
                    { japanese: '夏{なつ}と言{い}うと、海{うみ}を思{おも}い出{だ}す。', chinese: '說起夏天，就想起大海。' },
                    { japanese: '日本{にほん}と言{い}うと、富士山{ふじさん}だろう。', chinese: '說起日本，就是富士山吧。' },
                    { japanese: '「山田{やまだ}さんが来{き}たよ。」\n「山田{やまだ}さんと言{い}うと、あの背{せ}が高{たか}い人{ひと}？」', chinese: '「山田先生來了。」\n「說到山田，是那個高個子嗎？」' }
                ]
            }
        ],
        analysis: {
            title: '「と言うと」的用法分析',
            description: '引出聯想或確認信息。',
            points: [
                { rule: '用於表達聯想', explanation: '「說到A就想到B」' },
                { rule: '用於確認', explanation: '「你說的是...嗎？」' },
                { rule: '與「と言えば」用法相近', explanation: '可互換使用' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_to_iu_to_1',
                sentence: '京都{きょうと}（　）、金閣寺{きんかくじ}が有名{ゆうめい}だ。',
                options: ['とまで', 'とから', 'と言うと', 'とさえ'],
                correctIndex: 2,
                explanation: '說起京都，金閣寺很有名。'
            },
            {
                id: 'n3_quiz_to_iu_to_2',
                sentence: 'イタリア（　）、ピザやパスタだね。',
                options: ['と言うと', 'とから', 'とまで', 'とさえ'],
                correctIndex: 0,
                explanation: '說起義大利，就是披薩和義大利麵呢。'
            },
            {
                id: 'n3_quiz_to_iu_to_3',
                sentence: '彼{かれ}（　）、いつも遅刻{ちこく}する。',
                options: ['とまで', 'と言うと', 'とから', 'とさえ'],
                correctIndex: 1,
                explanation: '說起他，總是遲到。'
            },
            {
                id: 'n3_quiz_to_iu_to_4',
                sentence: '「田中{たなか}さんが辞{や}めるらしい。」\n「田中{たなか}さん（　）、経理{けいり}部{ぶ}の？」',
                options: ['と言うと', 'とさえ', 'とから', 'とまで'],
                correctIndex: 0,
                explanation: '對話情境。說到田中，是會計部的嗎？'
            },
            {
                id: 'n3_quiz_to_iu_to_5',
                sentence: '「あのレストランに行{い}った。」\n「あのレストラン（　）、駅前{えきまえ}の？」',
                options: ['とさえ', 'とから', 'と言うと', 'とまで'],
                correctIndex: 2,
                explanation: '對話情境。說到那家餐廳，是車站前的嗎？'
            }
        ]
    },

    'n3_to_iu_to_1': {
        id: 'n3_to_iu_to_1',
        pattern: 'と言{い}うと（というと）',
        connection: '名詞{めいし}/句{く}子{し} + と言{い}うと',
        translation: '提起...; 說到...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表達聯想或請求確認',
                description: '「と言うと」用於聽到某詞後的聯想，或向對方確認剛才說的內容。',
                examples: [
                    { japanese: '日本酒{にほんしゅ}と言{い}うと、新潟{にいがた}が有名{ゆうめい}だ。', chinese: '說到日本酒，新潟很有名。' },
                    { japanese: '彼女{かのじょ}と言{い}うと、あの優{やさ}しい人{ひと}？', chinese: '說到她，是那個溫柔的人嗎？' },
                    { japanese: '「会議{かいぎ}が変更{へんこう}になった。」\n「変更{へんこう}と言{い}うと、日時{にちじ}が変{か}わったの？」', chinese: '「會議有變動。」\n「說到變動，是日期時間改了嗎？」' }
                ]
            }
        ],
        analysis: {
            title: '「と言うと」的詳細分析',
            description: '用於自然地延續話題。',
            points: [
                { rule: '表示聽到關鍵詞的反應', explanation: '自然引出下一個話題' },
                { rule: '用於確認細節', explanation: '「你說的...是指...嗎？」' },
                { rule: '口語中常用', explanation: '讓對話更流暢' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_to_iu_to_1_1',
                sentence: 'ラーメン（　）、博多{はかた}ラーメンが一番{いちばん}だ。',
                options: ['とから', 'と言うと', 'とさえ', 'とまで'],
                correctIndex: 1,
                explanation: '說到拉麵，博多拉麵最棒。'
            },
            {
                id: 'n3_quiz_to_iu_to_1_2',
                sentence: 'あの事件{じけん}（　）、まだ解決{かいけつ}していない。',
                options: ['とさえ', 'と言うと', 'とから', 'とまで'],
                correctIndex: 1,
                explanation: '說到那個事件，還沒解決。'
            },
            {
                id: 'n3_quiz_to_iu_to_1_3',
                sentence: '温泉{おんせん}（　）、やっぱり箱根{はこね}かな。',
                options: ['とさえ', 'とまで', 'とから', 'と言うと'],
                correctIndex: 3,
                explanation: '說到溫泉，果然是箱根吧。'
            },
            {
                id: 'n3_quiz_to_iu_to_1_4',
                sentence: '「計画{けいかく}が失敗{しっぱい}した。」\n「失敗{しっぱい}（　）、予算{よさん}が足{た}りなかった？」',
                options: ['とまで', 'とさえ', 'と言うと', 'とから'],
                correctIndex: 2,
                explanation: '對話情境。說到失敗，是預算不夠嗎？'
            },
            {
                id: 'n3_quiz_to_iu_to_1_5',
                sentence: '「来週{らいしゅう}引{ひ}っ越{こ}すんだ。」\n「引{ひ}っ越{こ}し（　）、遠{とお}くに行{い}くの？」',
                options: ['とさえ', 'とまで', 'と言うと', 'とから'],
                correctIndex: 2,
                explanation: '對話情境。說到搬家，要搬遠嗎？'
            }
        ]
    },

    'n3_to_iu_yori': {
        id: 'n3_to_iu_yori',
        pattern: 'というより',
        connection: '名詞{めいし}/形容詞{けいようし}/句{く}子{し} + というより',
        translation: '與其說...不如說...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '修正說法或更準確描述',
                description: '「というより」用於修正前面的說法，提出更貼切或準確的描述。',
                examples: [
                    { japanese: '彼{かれ}は真面目{まじめ}というより、堅{かた}すぎる。', chinese: '與其說他認真，不如說太死板。' },
                    { japanese: 'これは難{むずか}しいというより、面倒{めんどう}くさい。', chinese: '與其說這很難，不如說很麻煩。' },
                    { japanese: '「彼女{かのじょ}はきれい？」\n「きれいというより、かわいいかな。」', chinese: '「她很漂亮嗎？」\n「與其說漂亮，不如說可愛。」' }
                ]
            }
        ],
        analysis: {
            title: '「というより」的用法分析',
            description: '用於提供更精確的描述。',
            points: [
                { rule: '修正前面的說法', explanation: '「不是A，更接近B」' },
                { rule: '提出更準確的表達', explanation: '使描述更貼切' },
                { rule: '常接「むしろ」加強語氣', explanation: '「というよりむしろ」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_to_iu_yori_1',
                sentence: 'これは失敗{しっぱい}（　）、いい経験{けいけん}だ。',
                options: ['とまで', 'とさえ', 'とから', 'というより'],
                correctIndex: 3,
                explanation: '與其說這是失敗，不如說是好的經驗。'
            },
            {
                id: 'n3_quiz_to_iu_yori_2',
                sentence: '疲{つか}れた（　）、眠{ねむ}い。',
                options: ['とさえ', 'とから', 'とまで', 'というより'],
                correctIndex: 3,
                explanation: '與其說累，不如說想睡。'
            },
            {
                id: 'n3_quiz_to_iu_yori_3',
                sentence: 'この部屋{へや}は狭{せま}い（　）、ちょうどいい。',
                options: ['とまで', 'とから', 'というより', 'とさえ'],
                correctIndex: 2,
                explanation: '與其說這房間小，不如說剛剛好。'
            },
            {
                id: 'n3_quiz_to_iu_yori_4',
                sentence: '「辛{つら}い？」\n「辛{つら}い（　）、寂{さび}しいかな。」',
                options: ['とさえ', 'とまで', 'とから', 'というより'],
                correctIndex: 3,
                explanation: '對話情境。與其說辛苦，不如說寂寞。'
            },
            {
                id: 'n3_quiz_to_iu_yori_5',
                sentence: '「彼{かれ}は優{やさ}しい？」\n「優{やさ}しい（　）、お人好{ひとよ}しだね。」',
                options: ['というより', 'とさえ', 'とから', 'とまで'],
                correctIndex: 0,
                explanation: '對話情境。與其說溫柔，不如說好人過頭。'
            }
        ]
    },

    'n3_to_mieru': {
        id: 'n3_to_mieru',
        pattern: 'とみえる',
        connection: '句{く}子{し} + とみえる',
        translation: '看來...; 似乎...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示根據觀察做出的推測',
                description: '「とみえる」表示根據外在情況或線索做出的推測，相當於「看起來...」。',
                examples: [
                    { japanese: '彼{かれ}は疲{つか}れているとみえる。', chinese: '他看來很累。' },
                    { japanese: '雨{あめ}が降{ふ}ったとみえて、道{みち}が濡{ぬ}れている。', chinese: '看來下過雨，路濕了。' },
                    { japanese: '「彼女{かのじょ}どうした？」\n「風邪{かぜ}をひいたとみえて、今日{きょう}は休{やす}みだ。」', chinese: '「她怎麼了？」\n「看來感冒了，今天請假。」' }
                ]
            }
        ],
        analysis: {
            title: '「とみえる」的用法分析',
            description: '基於證據做出推測。',
            points: [
                { rule: '根據外部線索推測', explanation: '「從...來看」' },
                { rule: '「とみえて」表示原因推測', explanation: '「看來是因為...」' },
                { rule: '較書面語', explanation: '口語用「みたい」「ようだ」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_to_mieru_1',
                sentence: '彼{かれ}は忙{いそが}しい（　）、全然{ぜんぜん}連絡{れんらく}がない。',
                options: ['とさえ', 'とまで', 'とから', 'とみえて'],
                correctIndex: 3,
                explanation: '看來他很忙，完全沒聯絡。'
            },
            {
                id: 'n3_quiz_to_mieru_2',
                sentence: '人気{にんき}がある（　）、いつも満席{まんせき}だ。',
                options: ['とから', 'とまで', 'とみえて', 'とさえ'],
                correctIndex: 2,
                explanation: '看來很有人氣，總是客滿。'
            },
            {
                id: 'n3_quiz_to_mieru_3',
                sentence: '安{やす}い（　）、たくさんの人{ひと}が買{か}っている。',
                options: ['とさえ', 'とまで', 'とから', 'とみえて'],
                correctIndex: 3,
                explanation: '看來很便宜，很多人在買。'
            },
            {
                id: 'n3_quiz_to_mieru_4',
                sentence: '「なんで泣{な}いてるの？」\n「悲{かな}しいニュースを見{み}た（　）。」',
                options: ['とみえる', 'とさえ', 'とから', 'とまで'],
                correctIndex: 0,
                explanation: '對話情境。看來看了悲傷的新聞。'
            },
            {
                id: 'n3_quiz_to_mieru_5',
                sentence: '「彼{かれ}機嫌{きげん}悪{わる}い？」\n「うん、何{なに}かあった（　）。」',
                options: ['とさえ', 'とみえる', 'とまで', 'とから'],
                correctIndex: 1,
                explanation: '對話情境。嗯，看來發生了什麼事。'
            }
        ]
    },

    'n3_to_mieru_to_miete': {
        id: 'n3_to_mieru_to_miete',
        pattern: 'とみえる / とみえて',
        connection: '句{く}子{し} + とみえる/とみえて',
        translation: '看來...; 似乎...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '根據證據的推測',
                description: '「とみえる」表示推測，「とみえて」表示作為後續情況的原因。兩者都基於觀察做出判斷。',
                examples: [
                    { japanese: '成功{せいこう}したとみえて、喜{よろこ}んでいる。', chinese: '看來成功了，很高興。' },
                    { japanese: '彼{かれ}は寝{ね}ていないとみえる。', chinese: '看來他沒睡。' },
                    { japanese: '「あの二人{ふたり}仲{なか}いいね。」\n「付{つ}き合{あ}っているとみえるね。」', chinese: '「那兩人感情真好。」\n「看起來在交往呢。」' }
                ]
            }
        ],
        analysis: {
            title: '「とみえる/とみえて」的比較',
            description: '兩種形式用於不同語境。',
            points: [
                { rule: '「とみえる」結束句子', explanation: '單純表達推測' },
                { rule: '「とみえて」連接後句', explanation: '作為後句的理由' },
                { rule: '基於可觀察的證據', explanation: '如表情、行為、狀態' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_to_mieru_to_miete_1',
                sentence: '仕事{しごと}がうまくいった（　）、嬉{うれ}しそうだ。',
                options: ['とみえて', 'とから', 'とまで', 'とさえ'],
                correctIndex: 0,
                explanation: '看來工作順利，看起來很高興。'
            },
            {
                id: 'n3_quiz_to_mieru_to_miete_2',
                sentence: '急{いそ}いでいる（　）、走{はし}っている。',
                options: ['とさえ', 'とから', 'とみえて', 'とまで'],
                correctIndex: 2,
                explanation: '看來在趕時間，正在跑。'
            },
            {
                id: 'n3_quiz_to_mieru_to_miete_3',
                sentence: 'お腹{なか}が空{す}いた（　）、早{はや}く食{た}べたがっている。',
                options: ['とから', 'とまで', 'とさえ', 'とみえて'],
                correctIndex: 3,
                explanation: '看來肚子餓了，想快點吃。'
            },
            {
                id: 'n3_quiz_to_mieru_to_miete_4',
                sentence: '「彼{かれ}寝{ね}てる？」\n「うん、疲{つか}れた（　）。」',
                options: ['とさえ', 'とみえる', 'とまで', 'とから'],
                correctIndex: 1,
                explanation: '對話情境。嗯，看來很累。'
            },
            {
                id: 'n3_quiz_to_mieru_to_miete_5',
                sentence: '「なんで笑{わら}ってるの？」\n「面白{おもしろ}いことがあった（　）。」',
                options: ['とさえ', 'とまで', 'とみえる', 'とから'],
                correctIndex: 2,
                explanation: '對話情境。看來有好笑的事。'
            }
        ]
    },

    'n3_to_sureba': {
        id: 'n3_to_sureba',
        pattern: 'とすれば',
        connection: '句{く}子{し} + とすれば',
        translation: '假設...; 如果是...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示假設或假定',
                description: '「とすれば」用於提出假設，表示「如果假設是...的話」，然後推論後續的結果或想法。',
                examples: [
                    { japanese: '彼{かれ}が犯人{はんにん}だとすれば、動機{どうき}は何{なん}だろう。', chinese: '假設他是犯人的話，動機是什麼呢。' },
                    { japanese: '明日{あした}雨{あめ}だとすれば、試合{しあい}は中止{ちゅうし}だ。', chinese: '如果明天下雨的話，比賽就取消。' },
                    { japanese: '「転職{てんしょく}するかも。」\n「とすれば、引{ひ}っ越{こ}すの？」', chinese: '「可能會換工作。」\n「如果是那樣的話，要搬家嗎？」' }
                ]
            }
        ],
        analysis: {
            title: '「とすれば」的用法分析',
            description: '用於邏輯推理或假設情境。',
            points: [
                { rule: '表示「如果假設...的話」', explanation: '進行邏輯推論' },
                { rule: '常用於分析或推理', explanation: '如推測動機、原因' },
                { rule: '比「たら」「ば」更強調假設性', explanation: '帶有分析的語氣' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_to_sureba_1',
                sentence: '予算{よさん}が足{た}りないと（　）、規模{きぼ}を縮小{しゅくしょう}するしかない。',
                options: ['さえ', 'まで', 'から', 'すれば'],
                correctIndex: 3,
                explanation: '假設預算不夠的話，只能縮小規模。'
            },
            {
                id: 'n3_quiz_to_sureba_2',
                sentence: '彼女{かのじょ}が辞{や}めると（　）、代{か}わりが必要{ひつよう}だ。',
                options: ['さえ', 'から', 'まで', 'すれば'],
                correctIndex: 3,
                explanation: '假設她辭職的話，需要替代人選。'
            },
            {
                id: 'n3_quiz_to_sureba_3',
                sentence: 'これが本当{ほんとう}だと（　）、大変{たいへん}なことだ。',
                options: ['すれば', 'から', 'まで', 'さえ'],
                correctIndex: 0,
                explanation: '假設這是真的話，那可嚴重了。'
            },
            {
                id: 'n3_quiz_to_sureba_4',
                sentence: '「来週{らいしゅう}忙{いそが}しい？」\n「来週{らいしゅう}だと（　）、少{すこ}し時間{じかん}がある。」',
                options: ['すれば', 'から', 'さえ', 'まで'],
                correctIndex: 0,
                explanation: '對話情境。如果是下週的話，有一點時間。'
            },
            {
                id: 'n3_quiz_to_sureba_5',
                sentence: '「彼{かれ}が反対{はんたい}したら？」\n「反対{はんたい}すると（　）、計画{けいかく}を変{か}えよう。」',
                options: ['まで', 'から', 'すれば', 'さえ'],
                correctIndex: 2,
                explanation: '對話情境。假設他反對的話，就改計畫。'
            }
        ]
    },

    'n3_to_sureba_to_shitara_to_suru_to': {
        id: 'n3_to_sureba_to_shitara_to_suru_to',
        pattern: 'とすれば・としたら・とすると',
        connection: '句{く}子{し} + とすれば/としたら/とすると',
        translation: '如果...的話',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '三種假設形式的比較',
                description: '「とすれば」「としたら」「とすると」都表示假設，但語感略有不同。',
                examples: [
                    { japanese: '一人{ひとり}で行{い}くとしたら、不安{ふあん}だ。', chinese: '如果一個人去的話，會不安。' },
                    { japanese: '彼{かれ}が来{こ}ないとすると、二人{ふたり}だけになる。', chinese: '假設他不來的話，就只剩兩個人。' },
                    { japanese: '「もし宝{たから}くじが当{あ}たったら？」\n「当{あ}たったとしたら、家{いえ}を買{か}うかな。」', chinese: '「如果中彩票的話？」\n「假設中了的話，可能會買房子吧。」' }
                ]
            }
        ],
        analysis: {
            title: '三種形式的比較分析',
            description: '用法相近但語感不同。',
            points: [
                { rule: '「とすれば」較邏輯性', explanation: '用於推理分析' },
                { rule: '「としたら」較口語化', explanation: '日常對話常用' },
                { rule: '「とすると」強調順接', explanation: '「假設...那麼...」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_to_sureba_to_shitara_to_suru_to_1',
                sentence: '電車{でんしゃ}で行{い}くと（　）、一時間{いちじかん}かかる。',
                options: ['さえ', 'まで', 'から', 'すると'],
                correctIndex: 3,
                explanation: '假設搭電車去的話，要一小時。'
            },
            {
                id: 'n3_quiz_to_sureba_to_shitara_to_suru_to_2',
                sentence: '今日{きょう}無理{むり}だと（　）、明日{あした}はどう？',
                options: ['したら', 'から', 'さえ', 'まで'],
                correctIndex: 0,
                explanation: '假設今天不行的話，明天怎麼樣？'
            },
            {
                id: 'n3_quiz_to_sureba_to_shitara_to_suru_to_3',
                sentence: '合格{ごうかく}できないと（　）、来年{らいねん}また受{う}ける。',
                options: ['まで', 'すれば', 'さえ', 'から'],
                correctIndex: 1,
                explanation: '假設不能合格的話，明年再考。'
            },
            {
                id: 'n3_quiz_to_sureba_to_shitara_to_suru_to_4',
                sentence: '「もし百万円{ひゃくまんえん}もらったら？」\n「もらったと（　）、旅行{りょこう}に行{い}きたい。」',
                options: ['さえ', 'したら', 'から', 'まで'],
                correctIndex: 1,
                explanation: '對話情境。假設拿到的話，想去旅行。'
            },
            {
                id: 'n3_quiz_to_sureba_to_shitara_to_suru_to_5',
                sentence: '「この仕事{しごと}引{ひ}き受{う}ける？」\n「引{ひ}き受{う}けると（　）、条件{じょうけん}がある。」',
                options: ['さえ', 'から', 'すれば', 'まで'],
                correctIndex: 2,
                explanation: '對話情境。假設接受的話，有條件。'
            }
        ]
    },

    'n3_to_tomo_ni': {
        id: 'n3_to_tomo_ni',
        pattern: 'と共{とも}に',
        connection: '名詞{めいし}/動詞{どうし}辭書{じしょ}形{けい} + と共{とも}に',
        translation: '與...一起; 同時...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示一起或同時',
                description: '「と共に」表示「與...一起」或「伴隨著...同時」，用於表達並行發生或共同進行。',
                examples: [
                    { japanese: '家族{かぞく}と共{とも}に暮{く}らしている。', chinese: '與家人一起生活。' },
                    { japanese: '時代{じだい}の変化{へんか}と共{とも}に、生活{せいかつ}も変{か}わった。', chinese: '隨著時代的變化，生活也改變了。' },
                    { japanese: '「一人{ひとり}で頑張{がんば}るの？」\n「いや、仲間{なかま}と共{とも}に頑張{がんば}るよ。」', chinese: '「一個人努力嗎？」\n「不，和夥伴一起努力。」' }
                ]
            }
        ],
        analysis: {
            title: '「と共に」的用法分析',
            description: '表示共同行動或同時發生。',
            points: [
                { rule: '「一起」用法：與...共同', explanation: '如「家族と共に」' },
                { rule: '「同時」用法：隨著...', explanation: '如「成長と共に」' },
                { rule: '較書面語', explanation: '口語用「と一緒に」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_to_tomo_ni_1',
                sentence: '年齢{ねんれい}（　）、体力{たいりょく}も衰{おとろ}える。',
                options: ['とさえ', 'とから', 'と共に', 'とまで'],
                correctIndex: 2,
                explanation: '隨著年齡增長，體力也會衰退。'
            },
            {
                id: 'n3_quiz_to_tomo_ni_2',
                sentence: '友人{ゆうじん}（　）旅行{りょこう}した。',
                options: ['とから', 'と共に', 'とさえ', 'とまで'],
                correctIndex: 1,
                explanation: '和朋友一起旅行了。'
            },
            {
                id: 'n3_quiz_to_tomo_ni_3',
                sentence: '技術{ぎじゅつ}の発展{はってん}（　）、生活{せいかつ}が便利{べんり}になった。',
                options: ['とから', 'とさえ', 'と共に', 'とまで'],
                correctIndex: 2,
                explanation: '隨著技術發展，生活變得便利。'
            },
            {
                id: 'n3_quiz_to_tomo_ni_4',
                sentence: '「一人{ひとり}で行{い}くの？」\n「同僚{どうりょう}（　）行{い}くよ。」',
                options: ['とまで', 'と共に', 'とさえ', 'とから'],
                correctIndex: 1,
                explanation: '對話情境。和同事一起去。'
            },
            {
                id: 'n3_quiz_to_tomo_ni_5',
                sentence: '「会社{かいしゃ}は成長{せいちょう}してる？」\n「社員{しゃいん}の成長{せいちょう}（　）、会社{かいしゃ}も発展{はってん}している。」',
                options: ['とから', 'とまで', 'と共に', 'とさえ'],
                correctIndex: 2,
                explanation: '對話情境。隨著員工成長，公司也發展。'
            }
        ]
    },

    'n3_to_tomo_ni_1': {
        id: 'n3_to_tomo_ni_1',
        pattern: 'と共{とも}に',
        connection: '名詞{めいし}/動詞{どうし}辭書{じしょ}形{けい} + と共{とも}に',
        translation: '伴隨著...; 同時...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示變化的同時性',
                description: '「と共に」用於表示兩件事同時發生或變化，強調伴隨關係。',
                examples: [
                    { japanese: '春{はる}の訪{おとず}れと共{とも}に、花{はな}が咲{さ}き始{はじ}めた。', chinese: '隨著春天到來，花開始綻放。' },
                    { japanese: '経験{けいけん}を積{つ}むと共{とも}に、自信{じしん}がついた。', chinese: '隨著累積經驗，也有了自信。' },
                    { japanese: '「彼{かれ}変{か}わった？」\n「結婚{けっこん}と共{とも}に、落{お}ち着{つ}いたね。」', chinese: '「他變了嗎？」\n「隨著結婚，變穩重了呢。」' }
                ]
            }
        ],
        analysis: {
            title: '「と共に」的詳細分析',
            description: '強調變化的連動性。',
            points: [
                { rule: '表示兩種變化同時發生', explanation: '如「成長と共に変化」' },
                { rule: '常用於描述趨勢或過程', explanation: '隨著...而...' },
                { rule: '書面語風格', explanation: '正式文章常用' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_to_tomo_ni_1_1',
                sentence: '季節{きせつ}の移{うつ}り変{か}わり（　）、景色{けしき}も変{か}わる。',
                options: ['とさえ', 'と共に', 'とから', 'とまで'],
                correctIndex: 1,
                explanation: '隨著季節更替，景色也改變。'
            },
            {
                id: 'n3_quiz_to_tomo_ni_1_2',
                sentence: '経済{けいざい}の発展{はってん}（　）、問題{もんだい}も増{ふ}えた。',
                options: ['とさえ', 'とまで', 'と共に', 'とから'],
                correctIndex: 2,
                explanation: '隨著經濟發展，問題也增加了。'
            },
            {
                id: 'n3_quiz_to_tomo_ni_1_3',
                sentence: '時間{じかん}が経{た}つ（　）、記憶{きおく}が薄{うす}れる。',
                options: ['とから', 'と共に', 'とまで', 'とさえ'],
                correctIndex: 1,
                explanation: '隨著時間流逝，記憶變淡。'
            },
            {
                id: 'n3_quiz_to_tomo_ni_1_4',
                sentence: '「日本語{にほんご}上手{じょうず}になった？」\n「練習{れんしゅう}を重{かさ}ねる（　）、少{すこ}しずつね。」',
                options: ['とさえ', 'とから', 'と共に', 'とまで'],
                correctIndex: 2,
                explanation: '對話情境。隨著練習增加，一點一點進步。'
            },
            {
                id: 'n3_quiz_to_tomo_ni_1_5',
                sentence: '「子供{こども}大{おお}きくなった？」\n「成長{せいちょう}する（　）、手{て}がかからなくなったよ。」',
                options: ['と共に', 'とまで', 'とから', 'とさえ'],
                correctIndex: 0,
                explanation: '對話情境。隨著成長，不那麼費心了。'
            }
        ]
    },

    'n3_tochuu_de': {
        id: 'n3_tochuu_de',
        pattern: '途中{とちゅう}{とちゅう}で',
        connection: '名詞{めいし}の/動詞{どうし}辭書{じしょ}形{けい} + 途中{とちゅう}{とちゅう}で',
        translation: '在...途中',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示進行中或途中',
                description: '「途中で」表示在做某事的過程中或前往某處的途中發生了某事。',
                examples: [
                    { japanese: '帰{かえ}りの途中{とちゅう}で、友達{ともだち}に会{あ}った。', chinese: '在回家途中遇到了朋友。' },
                    { japanese: '仕事{しごと}の途中{とちゅう}で、電話{でんわ}が来{き}た。', chinese: '工作進行中接到了電話。' },
                    { japanese: '「遅{おく}れた？」\n「会社{かいしゃ}に行{い}く途中{とちゅう}で、事故{じこ}があったんだ。」', chinese: '「遲到了？」\n「去公司途中發生了事故。」' }
                ]
            }
        ],
        analysis: {
            title: '「途中で」的用法分析',
            description: '表示過程中發生的事。',
            points: [
                { rule: '「の途中で」接名詞', explanation: '如「帰りの途中で」' },
                { rule: '「する途中で」接動詞', explanation: '如「行く途中で」' },
                { rule: '常用於描述意外事件', explanation: '途中發生的事情' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_tochuu_de_1',
                sentence: '駅{えき}に行{い}く（　）、財布{さいふ}を落{お}とした。',
                options: ['から', 'まで', '途中で', 'さえ'],
                correctIndex: 2,
                explanation: '去車站途中弄丟了錢包。'
            },
            {
                id: 'n3_quiz_tochuu_de_2',
                sentence: '話{はなし}の（　）、突然{とつぜん}思{おも}い出{だ}した。',
                options: ['さえ', '途中で', 'まで', 'から'],
                correctIndex: 1,
                explanation: '說話途中突然想起來了。'
            },
            {
                id: 'n3_quiz_tochuu_de_3',
                sentence: '読{よ}む（　）眠{ねむ}くなった。',
                options: ['さえ', 'から', 'まで', '途中で'],
                correctIndex: 3,
                explanation: '讀的時候變得想睡。'
            },
            {
                id: 'n3_quiz_tochuu_de_4',
                sentence: '「なんで途中{とちゅう}で帰{かえ}ったの？」\n「映画{えいが}の（　）、気分{きぶん}が悪{わる}くなったんだ。」',
                options: ['まで', 'さえ', 'から', '途中で'],
                correctIndex: 3,
                explanation: '對話情境。看電影途中不舒服了。'
            },
            {
                id: 'n3_quiz_tochuu_de_5',
                sentence: '「買{か}い物{もの}楽{たの}しかった？」\n「うん、でも帰{かえ}りの（　）雨{あめ}に降{ふ}られた。」',
                options: ['さえ', 'まで', '途中で', 'から'],
                correctIndex: 2,
                explanation: '對話情境。回程途中淋到雨了。'
            }
        ]
    },

    'n3_tochuu_de_tochuu_ni': {
        id: 'n3_tochuu_de_tochuu_ni',
        pattern: '途中{とちゅう}{とちゅう}で/途中{とちゅう}{とちゅう}に',
        connection: '名詞{めいし}の/動詞{どうし}辭書{じしょ}形{けい} + 途中{とちゅう}{とちゅう}で/途中{とちゅう}{とちゅう}に',
        translation: '在...中途',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '「途中で」與「途中に」的比較',
                description: '「途中で」和「途中に」都表示「在...途中」，但「途中で」強調動作，「途中に」強調地點或時間點。',
                examples: [
                    { japanese: '途中{とちゅう}で諦{あきら}めた。', chinese: '中途放棄了。' },
                    { japanese: '道{みち}の途中{とちゅう}にコンビニがある。', chinese: '路途中有便利商店。' },
                    { japanese: '「どこで買{か}った？」\n「帰{かえ}りの途中{とちゅう}に寄{よ}った店{みせ}で。」', chinese: '「在哪買的？」\n「回程途中順路去的店。」' }
                ]
            }
        ],
        analysis: {
            title: '「途中で/途中に」的比較分析',
            description: '用法略有不同。',
            points: [
                { rule: '「途中で」強調動作或事件', explanation: '如「途中で止める」' },
                { rule: '「途中に」強調位置或存在', explanation: '如「途中にある」' },
                { rule: '很多情況可互換使用', explanation: '但語感略有不同' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_tochuu_de_tochuu_ni_1',
                sentence: '途中{とちゅう}（　）やめてはいけない。',
                options: ['まで', 'に', 'から', 'で'],
                correctIndex: 3,
                explanation: '不可以中途放棄。'
            },
            {
                id: 'n3_quiz_tochuu_de_tochuu_ni_2',
                sentence: '学校{がっこう}への途中{とちゅう}（　）公園{こうえん}がある。',
                options: ['まで', 'から', 'に', 'で'],
                correctIndex: 2,
                explanation: '去學校的途中有公園。'
            },
            {
                id: 'n3_quiz_tochuu_de_tochuu_ni_3',
                sentence: '説明{せつめい}の途中{とちゅう}（　）質問{しつもん}しないでください。',
                options: ['に', 'で', 'から', 'まで'],
                correctIndex: 1,
                explanation: '說明途中請不要發問。'
            },
            {
                id: 'n3_quiz_tochuu_de_tochuu_ni_4',
                sentence: '「郵便局{ゆうびんきょく}ある？」\n「駅{えき}への途中{とちゅう}（　）あるよ。」',
                options: ['で', 'まで', 'に', 'から'],
                correctIndex: 2,
                explanation: '對話情境。在去車站途中有。'
            },
            {
                id: 'n3_quiz_tochuu_de_tochuu_ni_5',
                sentence: '「なぜ途中{とちゅう}（　）帰{かえ}った？」\n「急用{きゅうよう}ができたから。」',
                options: ['で', 'まで', 'に', 'から'],
                correctIndex: 0,
                explanation: '對話情境。為什麼中途回去了？因為有急事。'
            }
        ]
    },

    'n3_tokoro_de': {
        id: 'n3_tokoro_de',
        pattern: 'ところで',
        connection: '（句{く}首{しゅ}使{し}用{よう}）',
        translation: '順便一提; 話說...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '轉換話題',
                description: '「ところで」用於轉換話題，引入新的話題或想起別的事情時使用。',
                examples: [
                    { japanese: 'ところで、明日{あした}の予定{よてい}は？', chinese: '話說，明天的行程是？' },
                    { japanese: 'ところで、昨日{きのう}のメール見{み}た？', chinese: '對了，昨天的郵件看了嗎？' },
                    { japanese: '「今日{きょう}はいい天気{てんき}だね。」\n「そうだね。ところで、週末{しゅうまつ}空{あ}いてる？」', chinese: '「今天天氣真好。」\n「是啊。話說，週末有空嗎？」' }
                ]
            }
        ],
        analysis: {
            title: '「ところで」的用法分析',
            description: '用於自然地轉換話題。',
            points: [
                { rule: '放在句首使用', explanation: '引入新話題' },
                { rule: '相當於「說到這個」「對了」', explanation: '想起另一件事' },
                { rule: '使轉換話題更自然', explanation: '不會顯得突兀' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_tokoro_de_1',
                sentence: '（　）、田中{たなか}さんは元気{げんき}？',
                options: ['そして', 'しかし', 'だから', 'ところで'],
                correctIndex: 3,
                explanation: '話說，田中先生還好嗎？'
            },
            {
                id: 'n3_quiz_tokoro_de_2',
                sentence: '（　）、鍵{かぎ}どこに置{お}いた？',
                options: ['しかし', 'そして', 'だから', 'ところで'],
                correctIndex: 3,
                explanation: '對了，鑰匙放哪了？'
            },
            {
                id: 'n3_quiz_tokoro_de_3',
                sentence: '（　）、もうお昼{ひる}だけど、どこで食{た}べる？',
                options: ['しかし', 'だから', 'ところで', 'そして'],
                correctIndex: 2,
                explanation: '話說，已經中午了，要在哪吃？'
            },
            {
                id: 'n3_quiz_tokoro_de_4',
                sentence: '「報告書{ほうこくしょ}終{お}わった？」\n「うん。（　）、来週{らいしゅう}の会議{かいぎ}いつ？」',
                options: ['だから', 'しかし', 'ところで', 'そして'],
                correctIndex: 2,
                explanation: '對話情境。嗯。話說，下週的會議什麼時候？'
            },
            {
                id: 'n3_quiz_tokoro_de_5',
                sentence: '「映画{えいが}面白{おもしろ}かったね。」\n「（　）、お腹{なか}空{す}かない？」',
                options: ['そして', 'だから', 'ところで', 'しかし'],
                correctIndex: 2,
                explanation: '對話情境。話說，不餓嗎？'
            }
        ]
    },

    'n3_tokoro_ga': {
        id: 'n3_tokoro_ga',
        pattern: 'ところが',
        connection: '（句{く}首{しゅ}使{し}用{よう}）',
        translation: '然而; 可是',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示意外的轉折',
                description: '「ところが」用於表示結果與預期相反，有意外轉折的語氣。',
                examples: [
                    { japanese: '雨{あめ}が降{ふ}ると思{おも}った。ところが、晴{は}れた。', chinese: '以為會下雨。結果放晴了。' },
                    { japanese: '難{むずか}しいと思{おも}った。ところが、意外{いがい}と簡単{かんたん}だった。', chinese: '以為很難。結果意外地簡單。' },
                    { japanese: '「試験{しけん}どうだった？」\n「絶対{ぜったい}落{お}ちたと思{おも}った。ところが、受{う}かってた！」', chinese: '「考試怎麼樣？」\n「以為絕對不及格。結果居然考過了！」' }
                ]
            }
        ],
        analysis: {
            title: '「ところが」的用法分析',
            description: '表示意料之外的結果。',
            points: [
                { rule: '表示與預期相反', explanation: '「本以為...結果...」' },
                { rule: '常帶有驚訝語氣', explanation: '意外的轉折' },
                { rule: '不同於「しかし」', explanation: '「ところが」更強調意外性' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_tokoro_ga_1',
                sentence: '行{い}かないと思{おも}った。（　）、来{き}た。',
                options: ['だから', 'ところで', 'そして', 'ところが'],
                correctIndex: 3,
                explanation: '以為不會來。結果來了。'
            },
            {
                id: 'n3_quiz_tokoro_ga_2',
                sentence: '安{やす}いと思{おも}った。（　）、高{たか}かった。',
                options: ['ところが', 'ところで', 'だから', 'そして'],
                correctIndex: 0,
                explanation: '以為便宜。結果很貴。'
            },
            {
                id: 'n3_quiz_tokoro_ga_3',
                sentence: '反対{はんたい}されると思{おも}った。（　）、賛成{さんせい}してくれた。',
                options: ['ところで', 'ところが', 'そして', 'だから'],
                correctIndex: 1,
                explanation: '以為會被反對。結果贊成了。'
            },
            {
                id: 'n3_quiz_tokoro_ga_4',
                sentence: '「彼{かれ}怒{おこ}った？」\n「怒{おこ}ると思{おも}った。（　）、笑{わら}ってた。」',
                options: ['だから', 'ところで', 'そして', 'ところが'],
                correctIndex: 3,
                explanation: '對話情境。以為會生氣。結果在笑。'
            },
            {
                id: 'n3_quiz_tokoro_ga_5',
                sentence: '「彼女{かのじょ}断{ことわ}った？」\n「断{ことわ}られると思{おも}った。（　）、OKしてくれた！」',
                options: ['だから', 'ところが', 'ところで', 'そして'],
                correctIndex: 1,
                explanation: '對話情境。以為會被拒絕。結果答應了！'
            }
        ]
    },

    'n3_toori_ni': {
        id: 'n3_toori_ni',
        pattern: 'とおりに',
        connection: '名詞{めいし}の/動詞{どうし}た形{けい}/動詞{どうし}辭書{じしょ}形{けい} + とおりに',
        translation: '按照...; 正如...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示按照某方式',
                description: '「とおりに」表示按照前述的方式、內容或指示去做。',
                examples: [
                    { japanese: '説明{せつめい}書{しょ}のとおりに組{く}み立{た}てた。', chinese: '按照說明書組裝了。' },
                    { japanese: '言{い}われたとおりにやった。', chinese: '按照被告知的去做了。' },
                    { japanese: '「どうやって作{つく}るの？」\n「レシピのとおりに作{つく}ればいいよ。」', chinese: '「怎麼做？」\n「按照食譜做就好。」' }
                ]
            }
        ],
        analysis: {
            title: '「とおりに」的用法分析',
            description: '表示遵循某種方式。',
            points: [
                { rule: '「名詞のとおりに」', explanation: '如「計画のとおりに」' },
                { rule: '「動詞たとおりに」', explanation: '如「聞いたとおりに」' },
                { rule: '「動詞辭書形とおりに」', explanation: '如「思うとおりに」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_toori_ni_1',
                sentence: '予定{よてい}の（　）進{すす}んでいる。',
                options: ['まで', 'さえ', 'とおりに', 'から'],
                correctIndex: 2,
                explanation: '按照預定進行。'
            },
            {
                id: 'n3_quiz_toori_ni_2',
                sentence: '先生{せんせい}が教{おし}えた（　）やってみた。',
                options: ['まで', 'さえ', 'から', 'とおりに'],
                correctIndex: 3,
                explanation: '按照老師教的試做了。'
            },
            {
                id: 'n3_quiz_toori_ni_3',
                sentence: '思{おも}った（　）うまくいかない。',
                options: ['とおりに', 'から', 'まで', 'さえ'],
                correctIndex: 0,
                explanation: '不像想的那樣順利。'
            },
            {
                id: 'n3_quiz_toori_ni_4',
                sentence: '「これでいい？」\n「私{わたし}が見{み}せた（　）やって。」',
                options: ['から', 'さえ', 'とおりに', 'まで'],
                correctIndex: 2,
                explanation: '對話情境。按照我示範的做。'
            },
            {
                id: 'n3_quiz_toori_ni_5',
                sentence: '「地図{ちず}見{み}ながら行{い}く？」\n「うん、地図{ちず}の（　）行{い}けば着{つ}くよ。」',
                options: ['まで', 'さえ', 'から', 'とおりに'],
                correctIndex: 3,
                explanation: '對話情境。按照地圖走就會到。'
            }
        ]
    },

    'n3_toosu': {
        id: 'n3_toosu',
        pattern: '通{とお}す',
        connection: '動詞{どうし}ます形{けい} + 通{とお}す',
        translation: '貫通...; 堅持...到底',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示堅持到底',
                description: '「〜通す」接在動詞ます形後面，表示從頭到尾持續做某事，堅持到底。',
                examples: [
                    { japanese: '最後{さいご}まで頑張{がんば}り通{とお}した。', chinese: '堅持努力到最後。' },
                    { japanese: '自分{じぶん}の意見{いけん}を押{お}し通{とお}した。', chinese: '堅持己見到底。' },
                    { japanese: '「辛{つら}くなかった？」\n「辛{つら}かったけど、走{はし}り通{とお}したよ。」', chinese: '「不辛苦嗎？」\n「很辛苦，但跑完全程了。」' }
                ]
            }
        ],
        analysis: {
            title: '「通す」的用法分析',
            description: '強調堅持完成某事。',
            points: [
                { rule: '表示從開始到結束', explanation: '「一直做到完」' },
                { rule: '帶有決心或毅力的語氣', explanation: '不半途而廢' },
                { rule: '常與努力、忍耐相關動詞連用', explanation: '如「頑張り通す」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_toosu_1',
                sentence: '嘘{うそ}をつき（　）のは良{よ}くない。',
                options: ['さえ', 'まで', '通す', 'から'],
                correctIndex: 2,
                explanation: '一直說謊是不好的。'
            },
            {
                id: 'n3_quiz_toosu_2',
                sentence: '夜{よる}通{とお}し働{はたら}き（　）。',
                options: ['まで', 'さえ', 'から', '通した'],
                correctIndex: 3,
                explanation: '通宵工作到底。'
            },
            {
                id: 'n3_quiz_toosu_3',
                sentence: '最後{さいご}まで黙{だま}り（　）。',
                options: ['さえ', 'から', '通した', 'まで'],
                correctIndex: 2,
                explanation: '保持沉默到最後。'
            },
            {
                id: 'n3_quiz_toosu_4',
                sentence: '「諦{あきら}めなかった？」\n「うん、信{しん}じ（　）よ。」',
                options: ['通した', 'さえ', 'まで', 'から'],
                correctIndex: 0,
                explanation: '對話情境。嗯，相信到底了。'
            },
            {
                id: 'n3_quiz_toosu_5',
                sentence: '「完走{かんそう}できた？」\n「なんとか走{はし}り（　）。」',
                options: ['さえ', 'まで', '通した', 'から'],
                correctIndex: 2,
                explanation: '對話情境。總算跑完全程了。'
            }
        ]
    },

    'n3_toosu_1': {
        id: 'n3_toosu_1',
        pattern: '通{とお}す',
        connection: '動詞{どうし}ます形{けい} + 通{とお}す',
        translation: '堅持...到底; 穿過...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示貫徹始終',
                description: '「〜通す」強調將某行為從頭到尾貫徹執行，不中途放棄。',
                examples: [
                    { japanese: '無実{むじつ}を訴{うった}え通{とお}した。', chinese: '堅持申訴無罪。' },
                    { japanese: 'この本{ほん}を読{よ}み通{とお}すのは大変{たいへん}だ。', chinese: '把這本書讀完很辛苦。' },
                    { japanese: '「途中{とちゅう}でやめた？」\n「いや、最後{さいご}までやり通{とお}した。」', chinese: '「中途放棄了？」\n「沒有，做到最後了。」' }
                ]
            }
        ],
        analysis: {
            title: '「通す」的詳細分析',
            description: '強調完成的決心。',
            points: [
                { rule: '「やり通す」完成做完', explanation: '常用表達' },
                { rule: '「読み通す」讀完', explanation: '從頭讀到尾' },
                { rule: '「貫き通す」貫徹', explanation: '堅持信念' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_toosu_1_1',
                sentence: '最後{さいご}まで戦{たたか}い（　）つもりだ。',
                options: ['通す', 'まで', 'さえ', 'から'],
                correctIndex: 0,
                explanation: '打算戰鬥到最後。'
            },
            {
                id: 'n3_quiz_toosu_1_2',
                sentence: '自分{じぶん}の信念{しんねん}を貫{つらぬ}き（　）。',
                options: ['から', 'まで', 'さえ', '通した'],
                correctIndex: 3,
                explanation: '貫徹了自己的信念。'
            },
            {
                id: 'n3_quiz_toosu_1_3',
                sentence: 'この厚{あつ}い本{ほん}を読{よ}み（　）のは難{むずか}しい。',
                options: ['まで', 'から', 'さえ', '通す'],
                correctIndex: 3,
                explanation: '把這本厚書讀完很難。'
            },
            {
                id: 'n3_quiz_toosu_1_4',
                sentence: '「反対{はんたい}されても？」\n「自分{じぶん}の意見{いけん}を押{お}し（　）。」',
                options: ['通す', 'さえ', 'から', 'まで'],
                correctIndex: 0,
                explanation: '對話情境。會堅持己見。'
            },
            {
                id: 'n3_quiz_toosu_1_5',
                sentence: '「100キロ歩{ある}けた？」\n「なんとか歩{ある}き（　）よ。」',
                options: ['通した', 'さえ', 'から', 'まで'],
                correctIndex: 0,
                explanation: '對話情境。總算走完了。'
            }
        ]
    },

    'n3_toshite': {
        id: 'n3_toshite',
        pattern: 'として',
        connection: '名詞{めいし} + として',
        translation: '作為...; 以...身份',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示身份或立場',
                description: '「として」表示以某種身份、資格或角色進行某動作。',
                examples: [
                    { japanese: '留学生{りゅうがくせい}として日本{にほん}に来{き}た。', chinese: '以留學生的身份來到日本。' },
                    { japanese: '代表{だいひょう}として挨拶{あいさつ}する。', chinese: '以代表的身份致詞。' },
                    { japanese: '「なぜここにいるの？」\n「ボランティアとして手伝{てつだ}いに来{き}た。」', chinese: '「為什麼在這裡？」\n「來當志工幫忙的。」' }
                ]
            }
        ],
        analysis: {
            title: '「として」的用法分析',
            description: '表示身份、資格或角色。',
            points: [
                { rule: '接名詞後', explanation: '如「先生として」「友達として」' },
                { rule: '表示立場或觀點', explanation: '「作為...來說」' },
                { rule: '常與動作動詞連用', explanation: '以某身份做某事' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_toshite_1',
                sentence: '彼{かれ}は社長{しゃちょう}（　）会社{かいしゃ}を代表{だいひょう}する。',
                options: ['さえ', 'として', 'から', 'まで'],
                correctIndex: 1,
                explanation: '他以社長身份代表公司。'
            },
            {
                id: 'n3_quiz_toshite_2',
                sentence: '日本語{にほんご}教師{きょうし}（　）働{はたら}いている。',
                options: ['さえ', 'まで', 'から', 'として'],
                correctIndex: 3,
                explanation: '以日語老師的身份工作。'
            },
            {
                id: 'n3_quiz_toshite_3',
                sentence: 'お礼{れい}（　）これを差{さ}し上{あ}げます。',
                options: ['として', 'から', 'さえ', 'まで'],
                correctIndex: 0,
                explanation: '作為謝禮送上這個。'
            },
            {
                id: 'n3_quiz_toshite_4',
                sentence: '「何{なに}しに来{き}たの？」\n「取材{しゅざい}（　）来{き}ました。」',
                options: ['さえ', 'として', 'まで', 'から'],
                correctIndex: 1,
                explanation: '對話情境。來採訪的。'
            },
            {
                id: 'n3_quiz_toshite_5',
                sentence: '「あなたはどう思{おも}う？」\n「親{おや}（　）心配{しんぱい}だ。」',
                options: ['さえ', 'まで', 'から', 'として'],
                correctIndex: 3,
                explanation: '對話情境。作為父母很擔心。'
            }
        ]
    },

    'n3_totemo_nai': {
        id: 'n3_totemo_nai',
        pattern: 'とても～ない',
        connection: 'とても + 動詞{どうし}否定{ひてい}形{けい}/い形容詞{けいようし}否定{ひてい}形{けい}',
        translation: '怎麼也辦不到; 根本不...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示完全不可能',
                description: '「とても〜ない」表示無論如何都做不到或不可能，強調程度非常強。',
                examples: [
                    { japanese: 'この量{りょう}はとても食{た}べられない。', chinese: '這份量怎麼也吃不完。' },
                    { japanese: 'その仕事{しごと}はとてもできない。', chinese: '那份工作根本做不來。' },
                    { japanese: '「一人{ひとり}でやる？」\n「とても無理{むり}だ。手伝{てつだ}って。」', chinese: '「一個人做？」\n「根本不可能。幫幫忙。」' }
                ]
            }
        ],
        analysis: {
            title: '「とても〜ない」的用法分析',
            description: '強調完全無法做到。',
            points: [
                { rule: '與否定形連用', explanation: '表示「怎麼也不...」' },
                { rule: '強調極限程度', explanation: '超出能力範圍' },
                { rule: '常表達困難或不可能', explanation: '如「とても信じられない」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_totemo_nai_1',
                sentence: 'この問題{もんだい}は（　）難{むずか}しくて解{と}けない。',
                options: ['とても', 'から', 'さえ', 'まで'],
                correctIndex: 0,
                explanation: '這個問題太難解不開。'
            },
            {
                id: 'n3_quiz_totemo_nai_2',
                sentence: '彼{かれ}の話{はなし}は（　）信{しん}じられない。',
                options: ['とても', 'から', 'まで', 'さえ'],
                correctIndex: 0,
                explanation: '他的話根本無法相信。'
            },
            {
                id: 'n3_quiz_totemo_nai_3',
                sentence: 'この距離{きょり}は（　）歩{ある}けない。',
                options: ['さえ', 'まで', 'とても', 'から'],
                correctIndex: 2,
                explanation: '這距離根本走不了。'
            },
            {
                id: 'n3_quiz_totemo_nai_4',
                sentence: '「明日{あした}までに終{お}わる？」\n「（　）間{ま}に合{あ}わない。」',
                options: ['まで', 'とても', 'さえ', 'から'],
                correctIndex: 1,
                explanation: '對話情境。根本來不及。'
            },
            {
                id: 'n3_quiz_totemo_nai_5',
                sentence: '「一人{ひとり}で運{はこ}べる？」\n「（　）持{も}てないよ。」',
                options: ['とても', 'から', 'まで', 'さえ'],
                correctIndex: 0,
                explanation: '對話情境。根本拿不動。'
            }
        ]
    },

    'n3_towa_kagiranai': {
        id: 'n3_towa_kagiranai',
        pattern: 'とは限{かぎ}らない',
        connection: '句{く}子{し}/名詞{めいし} + とは限{かぎ}らない',
        translation: '不一定...; 未必...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示不一定成立',
                description: '「とは限らない」表示某事並不一定如此，存在例外的可能性。',
                examples: [
                    { japanese: '高{たか}いとは限{かぎ}らない。', chinese: '不一定貴。' },
                    { japanese: '成功{せいこう}するとは限{かぎ}らない。', chinese: '不一定會成功。' },
                    { japanese: '「有名{ゆうめい}なレストランだから美味{おい}しい？」\n「有名{ゆうめい}だからといって美味{おい}しいとは限{かぎ}らないよ。」', chinese: '「有名的餐廳就好吃嗎？」\n「有名不代表一定好吃。」' }
                ]
            }
        ],
        analysis: {
            title: '「とは限らない」的用法分析',
            description: '否定絕對性的表達。',
            points: [
                { rule: '表示有例外', explanation: '「不是100%這樣」' },
                { rule: '常用於反駁刻板印象', explanation: '指出事情不一定如此' },
                { rule: '語氣較緩和的否定', explanation: '不是完全否定' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_towa_kagiranai_1',
                sentence: '若{わか}いからといって元気{げんき}（　）。',
                options: ['とまで', 'とは限らない', 'とから', 'とさえ'],
                correctIndex: 1,
                explanation: '年輕不代表一定有活力。'
            },
            {
                id: 'n3_quiz_towa_kagiranai_2',
                sentence: '安{やす}い（　）。品質{ひんしつ}も大事{だいじ}だ。',
                options: ['とから', 'とさえ', 'とまで', 'とは限らない'],
                correctIndex: 3,
                explanation: '不一定便宜。品質也重要。'
            },
            {
                id: 'n3_quiz_towa_kagiranai_3',
                sentence: '努力{どりょく}すれば成功{せいこう}する（　）。',
                options: ['とさえ', 'とは限らない', 'とから', 'とまで'],
                correctIndex: 1,
                explanation: '努力不一定會成功。'
            },
            {
                id: 'n3_quiz_towa_kagiranai_4',
                sentence: '「お金{かね}があれば幸{しあわ}せ？」\n「お金{かね}があっても幸{しあわ}せ（　）よ。」',
                options: ['とから', 'とは限らない', 'とさえ', 'とまで'],
                correctIndex: 1,
                explanation: '對話情境。有錢不一定幸福。'
            },
            {
                id: 'n3_quiz_towa_kagiranai_5',
                sentence: '「彼{かれ}なら分{わ}かるでしょ？」\n「分{わ}かる（　）よ。聞{き}いてみて。」',
                options: ['とさえ', 'とまで', 'とから', 'とは限らない'],
                correctIndex: 3,
                explanation: '對話情境。不一定知道。問問看。'
            }
        ]
    },

    'n3_towa_kagiranai_1': {
        id: 'n3_towa_kagiranai_1',
        pattern: 'とは限{かぎ}らない',
        connection: '句{く}子{し}/名詞{めいし} + とは限{かぎ}らない',
        translation: '不必然...; 不一定...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '否定必然性',
                description: '「とは限らない」用於指出某種看法或假設不一定成立，承認存在例外。',
                examples: [
                    { japanese: '大{おお}きい会社{かいしゃ}がいいとは限{かぎ}らない。', chinese: '大公司不一定好。' },
                    { japanese: '彼{かれ}が正{ただ}しいとは限{かぎ}らない。', chinese: '他不一定是對的。' },
                    { japanese: '「経験者{けいけんしゃ}がいい？」\n「経験{けいけん}があるからといって上手{じょうず}とは限{かぎ}らない。」', chinese: '「有經驗的比較好？」\n「有經驗不代表一定做得好。」' }
                ]
            }
        ],
        analysis: {
            title: '「とは限らない」的詳細分析',
            description: '表達謹慎的判斷。',
            points: [
                { rule: '常與「からといって」連用', explanation: '「就算...也不一定...」' },
                { rule: '用於避免過度概括', explanation: '承認有例外' },
                { rule: '語氣比「〜ない」緩和', explanation: '不是完全否定' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_towa_kagiranai_1_1',
                sentence: '値段{ねだん}が高{たか}いからといって良{よ}い品{しな}（　）。',
                options: ['とから', 'とは限らない', 'とまで', 'とさえ'],
                correctIndex: 1,
                explanation: '貴不代表一定是好東西。'
            },
            {
                id: 'n3_quiz_towa_kagiranai_1_2',
                sentence: '見{み}た目{め}がきれいだからといっておいしい（　）。',
                options: ['とは限らない', 'とまで', 'とさえ', 'とから'],
                correctIndex: 0,
                explanation: '看起來漂亮不代表好吃。'
            },
            {
                id: 'n3_quiz_towa_kagiranai_1_3',
                sentence: '専門家{せんもんか}だからといって正{ただ}しい（　）。',
                options: ['とさえ', 'とから', 'とまで', 'とは限らない'],
                correctIndex: 3,
                explanation: '是專家不代表一定對。'
            },
            {
                id: 'n3_quiz_towa_kagiranai_1_4',
                sentence: '「学歴{がくれき}が高{たか}いと優秀{ゆうしゅう}？」\n「学歴{がくれき}があるから優秀{ゆうしゅう}（　）。」',
                options: ['とさえ', 'とは限らない', 'とまで', 'とから'],
                correctIndex: 1,
                explanation: '對話情境。有學歷不代表優秀。'
            },
            {
                id: 'n3_quiz_towa_kagiranai_1_5',
                sentence: '「人気{にんき}がある店{みせ}は美味{おい}しい？」\n「人気{にんき}があるから美味{おい}しい（　）よ。」',
                options: ['とまで', 'とさえ', 'とは限らない', 'とから'],
                correctIndex: 2,
                explanation: '對話情境。有人氣不代表好吃。'
            }
        ]
    },

    'n3_tsui': {
        id: 'n3_tsui',
        pattern: 'つい',
        connection: 'つい + 動詞{どうし}',
        translation: '不自覺地; 忍不住...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示無意識的行為',
                description: '「つい」表示不知不覺或忍不住做了某事，常帶有後悔或不好意思的語氣。',
                examples: [
                    { japanese: 'つい食{た}べすぎた。', chinese: '不小心吃太多了。' },
                    { japanese: 'つい余計{よけい}なことを言{い}ってしまった。', chinese: '不小心說了多餘的話。' },
                    { japanese: '「なんで遅刻{ちこく}したの？」\n「つい寝過{ねす}ごしちゃった。」', chinese: '「為什麼遲到？」\n「不小心睡過頭了。」' }
                ]
            }
        ],
        analysis: {
            title: '「つい」的用法分析',
            description: '表達無心之過。',
            points: [
                { rule: '表示不經意的行為', explanation: '「不小心...」' },
                { rule: '常伴隨後悔的語氣', explanation: '承認是自己的問題' },
                { rule: '常與「〜てしまう」連用', explanation: '強調意外性' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_tsui_1',
                sentence: '（　）秘密{ひみつ}を話{はな}してしまった。',
                options: ['つい', 'まで', 'から', 'さえ'],
                correctIndex: 0,
                explanation: '不小心說出了秘密。'
            },
            {
                id: 'n3_quiz_tsui_2',
                sentence: '（　）買{か}いすぎてしまった。',
                options: ['から', 'まで', 'つい', 'さえ'],
                correctIndex: 2,
                explanation: '不小心買太多了。'
            },
            {
                id: 'n3_quiz_tsui_3',
                sentence: '（　）怒{おこ}ってしまった。',
                options: ['から', 'つい', 'まで', 'さえ'],
                correctIndex: 1,
                explanation: '不小心發火了。'
            },
            {
                id: 'n3_quiz_tsui_4',
                sentence: '「なんで泣{な}いてるの？」\n「映画{えいが}を見{み}て（　）泣{な}いちゃった。」',
                options: ['から', 'つい', 'さえ', 'まで'],
                correctIndex: 1,
                explanation: '對話情境。看電影忍不住哭了。'
            },
            {
                id: 'n3_quiz_tsui_5',
                sentence: '「また夜更{よふ}かし？」\n「（　）ゲームに夢中{むちゅう}になって…」',
                options: ['から', 'さえ', 'つい', 'まで'],
                correctIndex: 2,
                explanation: '對話情境。不小心沉迷遊戲...'
            }
        ]
    },

    'n3_tsui_ni': {
        id: 'n3_tsui_ni',
        pattern: 'ついに',
        connection: 'ついに + 動詞{どうし}',
        translation: '終於; 總算',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示期待已久的結果',
                description: '「ついに」表示經過長時間等待後終於實現了某事，可以是正面或負面的結果。',
                examples: [
                    { japanese: 'ついに夢{ゆめ}が叶{かな}った。', chinese: '夢想終於實現了。' },
                    { japanese: 'ついに彼{かれ}は来{こ}なかった。', chinese: '他最終還是沒來。' },
                    { japanese: '「合格{ごうかく}した？」\n「うん、三回目{さんかいめ}でついに受{う}かった！」', chinese: '「考過了？」\n「嗯，第三次終於考過了！」' }
                ]
            }
        ],
        analysis: {
            title: '「ついに」的用法分析',
            description: '強調長期等待後的結果。',
            points: [
                { rule: '表示期待已久', explanation: '「終於...了」' },
                { rule: '可用於正面或負面結果', explanation: '如「ついに成功」「ついに失敗」' },
                { rule: '強調時間的長度', explanation: '暗示等了很久' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_tsui_ni_1',
                sentence: '（　）完成{かんせい}した！',
                options: ['さえ', 'ついに', 'まで', 'から'],
                correctIndex: 1,
                explanation: '終於完成了！'
            },
            {
                id: 'n3_quiz_tsui_ni_2',
                sentence: '（　）春{はる}が来{き}た。',
                options: ['さえ', 'ついに', 'から', 'まで'],
                correctIndex: 1,
                explanation: '春天終於來了。'
            },
            {
                id: 'n3_quiz_tsui_ni_3',
                sentence: '努力{どりょく}の結果{けっか}、（　）優勝{ゆうしょう}した。',
                options: ['ついに', 'から', 'まで', 'さえ'],
                correctIndex: 0,
                explanation: '努力的結果，終於得冠軍了。'
            },
            {
                id: 'n3_quiz_tsui_ni_4',
                sentence: '「待{ま}ち遠{どお}しかった？」\n「うん、（　）この日{ひ}が来{き}た！」',
                options: ['から', 'まで', 'さえ', 'ついに'],
                correctIndex: 3,
                explanation: '對話情境。這一天終於來了！'
            },
            {
                id: 'n3_quiz_tsui_ni_5',
                sentence: '「彼{かれ}連絡{れんらく}来{き}た？」\n「いや、（　）来{こ}なかった。」',
                options: ['ついに', 'さえ', 'から', 'まで'],
                correctIndex: 0,
                explanation: '對話情境。不，最終還是沒來。'
            }
        ]
    },

    'n3_tsuide_ni': {
        id: 'n3_tsuide_ni',
        pattern: 'ついでに',
        connection: '動詞{どうし}辭書{じしょ}形{けい}/動詞{どうし}た形{けい} + ついでに / 名詞{めいし}の + ついでに',
        translation: '順便',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示順便做某事',
                description: '「ついでに」表示在做某件事的同時或之後順便做另一件事。',
                examples: [
                    { japanese: '買{か}い物{もの}のついでに銀行{ぎんこう}に寄{よ}った。', chinese: '買東西時順便去了銀行。' },
                    { japanese: '出{で}かけるついでに手紙{てがみ}を出{だ}してきて。', chinese: '出門時順便寄信。' },
                    { japanese: '「コンビニ行{い}く？」\n「うん、ついでにジュース買{か}ってくる。」', chinese: '「要去便利商店？」\n「嗯，順便買飲料回來。」' }
                ]
            }
        ],
        analysis: {
            title: '「ついでに」的用法分析',
            description: '表示附帶進行的行動。',
            points: [
                { rule: '主要行動 + ついでに + 順便行動', explanation: '順序關係' },
                { rule: '「のついでに」接名詞', explanation: '如「買い物のついでに」' },
                { rule: '常用於請求或建議', explanation: '「順便...一下」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_tsuide_ni_1',
                sentence: '散歩{さんぽ}の（　）郵便局{ゆうびんきょく}に寄{よ}った。',
                options: ['まで', 'ついでに', 'さえ', 'から'],
                correctIndex: 1,
                explanation: '散步時順便去了郵局。'
            },
            {
                id: 'n3_quiz_tsuide_ni_2',
                sentence: '駅{えき}に行{い}く（　）、ATMでお金{かね}を下{お}ろした。',
                options: ['から', 'まで', 'ついでに', 'さえ'],
                correctIndex: 2,
                explanation: '去車站時順便領了錢。'
            },
            {
                id: 'n3_quiz_tsuide_ni_3',
                sentence: '旅行{りょこう}の（　）友達{ともだち}に会{あ}った。',
                options: ['から', 'ついでに', 'さえ', 'まで'],
                correctIndex: 1,
                explanation: '旅行時順便見了朋友。'
            },
            {
                id: 'n3_quiz_tsuide_ni_4',
                sentence: '「スーパー行{い}くの？」\n「うん、（　）牛乳{ぎゅうにゅう}買{か}ってきて。」',
                options: ['さえ', 'まで', 'ついでに', 'から'],
                correctIndex: 2,
                explanation: '對話情境。順便買牛奶回來。'
            },
            {
                id: 'n3_quiz_tsuide_ni_5',
                sentence: '「帰{かえ}る途中{とちゅう}？」\n「うん、（　）クリーニング取{と}ってきた。」',
                options: ['さえ', 'から', 'まで', 'ついでに'],
                correctIndex: 3,
                explanation: '對話情境。順便取了乾洗衣物。'
            }
        ]
    },

    'n3_tsumari': {
        id: 'n3_tsumari',
        pattern: 'つまり',
        connection: '（句{く}首{しゅ}使{し}用{よう}）',
        translation: '也就是說; 總之',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '總結或換句話說',
                description: '「つまり」用於總結前面的內容，或用更簡單的方式重新說明。',
                examples: [
                    { japanese: 'つまり、参加{さんか}しないということだ。', chinese: '也就是說，不參加。' },
                    { japanese: 'つまり、私{わたし}が悪{わる}いということ？', chinese: '也就是說，是我不好？' },
                    { japanese: '「説明{せつめい}が長{なが}くてわからない…」\n「つまり、今日{きょう}中{ちゅう}に終{お}わらせてほしいんだ。」', chinese: '「說明太長聽不懂...」\n「總之，希望今天內完成。」' }
                ]
            }
        ],
        analysis: {
            title: '「つまり」的用法分析',
            description: '用於簡化或總結。',
            points: [
                { rule: '放在句首使用', explanation: '引出總結' },
                { rule: '用於換個方式說明', explanation: '「換句話說...」' },
                { rule: '使複雜內容更易懂', explanation: '簡化說明' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_tsumari_1',
                sentence: '（　）、賛成{さんせい}ということですね。',
                options: ['つまり', 'だから', 'ところで', 'しかし'],
                correctIndex: 0,
                explanation: '也就是說，是贊成對吧。'
            },
            {
                id: 'n3_quiz_tsumari_2',
                sentence: '（　）、時間{じかん}がないということだ。',
                options: ['だから', 'つまり', 'しかし', 'ところで'],
                correctIndex: 1,
                explanation: '總之，沒有時間。'
            },
            {
                id: 'n3_quiz_tsumari_3',
                sentence: '彼{かれ}は来{こ}ない。（　）、一人{ひとり}でやるしかない。',
                options: ['ところで', 'しかし', 'つまり', 'だから'],
                correctIndex: 2,
                explanation: '他不來。也就是說，只能一個人做。'
            },
            {
                id: 'n3_quiz_tsumari_4',
                sentence: '「結論{けつろん}は？」\n「（　）、延期{えんき}だ。」',
                options: ['つまり', 'しかし', 'ところで', 'だから'],
                correctIndex: 0,
                explanation: '對話情境。總之，延期了。'
            },
            {
                id: 'n3_quiz_tsumari_5',
                sentence: '「何{なに}が言{い}いたいの？」\n「（　）、もっと協力{きょうりょく}してほしい。」',
                options: ['ところで', 'しかし', 'だから', 'つまり'],
                correctIndex: 3,
                explanation: '對話情境。總之，希望更多合作。'
            }
        ]
    },

    'n3_tsumori_datta': {
        id: 'n3_tsumori_datta',
        pattern: 'つもりだった',
        connection: '動詞{どうし}辭書{じしょ}形{けい}/動詞{どうし}ない形{けい} + つもりだった',
        translation: '原打算...; 我以為...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示過去的打算或認知',
                description: '「つもりだった」表示原本打算做某事但最後沒做，或者自己以為是某種狀態但實際不同。',
                examples: [
                    { japanese: '行{い}くつもりだったが、体調{たいちょう}が悪{わる}くなった。', chinese: '原本打算去的，但身體不舒服了。' },
                    { japanese: '冗談{じょうだん}のつもりだった。', chinese: '我是開玩笑的意思。' },
                    { japanese: '「なんで来{こ}なかった？」\n「行{い}くつもりだったんだけど、急用{きゅうよう}ができて。」', chinese: '「為什麼沒來？」\n「本來要去的，但臨時有事。」' }
                ]
            }
        ],
        analysis: {
            title: '「つもりだった」的用法分析',
            description: '表達過去的意圖或認知。',
            points: [
                { rule: '表示未實現的計畫', explanation: '「本來打算...」' },
                { rule: '表示與實際不符的認知', explanation: '「以為...」' },
                { rule: '常用於解釋或辯解', explanation: '說明原本的想法' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_tsumori_datta_1',
                sentence: '早{はや}く起{お}きる（　）が、寝坊{ねぼう}した。',
                options: ['つもりだった', 'さえ', 'まで', 'から'],
                correctIndex: 0,
                explanation: '本來打算早起的，但睡過頭了。'
            },
            {
                id: 'n3_quiz_tsumori_datta_2',
                sentence: '手伝{てつだ}っている（　）、邪魔{じゃま}になっていた。',
                options: ['まで', 'つもりだったが', 'さえ', 'から'],
                correctIndex: 1,
                explanation: '以為在幫忙，結果在添亂。'
            },
            {
                id: 'n3_quiz_tsumori_datta_3',
                sentence: '全部{ぜんぶ}読{よ}む（　）、時間{じかん}がなかった。',
                options: ['まで', 'から', 'つもりだったが', 'さえ'],
                correctIndex: 2,
                explanation: '本來打算全部讀的，但沒時間。'
            },
            {
                id: 'n3_quiz_tsumori_datta_4',
                sentence: '「怒{おこ}らせた？」\n「褒{ほ}める（　）のに…」',
                options: ['まで', 'つもりだった', 'から', 'さえ'],
                correctIndex: 1,
                explanation: '對話情境。本來是想誇獎的...'
            },
            {
                id: 'n3_quiz_tsumori_datta_5',
                sentence: '「なぜ断{ことわ}った？」\n「参加{さんか}する（　）けど、都合{つごう}が悪{わる}くなった。」',
                options: ['さえ', 'まで', 'から', 'つもりだった'],
                correctIndex: 3,
                explanation: '對話情境。本來打算參加的，但沒辦法了。'
            }
        ]
    },

    'n3_tsumori_de': {
        id: 'n3_tsumori_de',
        pattern: 'つもりで',
        connection: '動詞{どうし}た形{けい}/名詞{めいし}の + つもりで',
        translation: '帶著...的心情; 打算...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示以某種心態或假設去做事',
                description: '「つもりで」表示帶著某種意識或假裝成某種狀態去做某事。',
                examples: [
                    { japanese: '本番{ほんばん}のつもりで練習{れんしゅう}する。', chinese: '以正式表演的心態練習。' },
                    { japanese: '死{し}んだつもりで頑張{がんば}る。', chinese: '拼死拼活地努力。' },
                    { japanese: '「緊張{きんちょう}する…」\n「リラックスしているつもりでやってごらん。」', chinese: '「好緊張...」\n「試著當作很放鬆的心態做做看。」' }
                ]
            }
        ],
        analysis: {
            title: '「つもりで」的用法分析',
            description: '表達心理準備或假設。',
            points: [
                { rule: '表示心態或意識', explanation: '「以...的心情」' },
                { rule: '可表示假裝的狀態', explanation: '「當作...」' },
                { rule: '常用於激勵或建議', explanation: '鼓勵認真對待' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_tsumori_de_1',
                sentence: '試験{しけん}（　）問題{もんだい}を解{と}く。',
                options: ['のつもりで', 'まで', 'から', 'さえ'],
                correctIndex: 0,
                explanation: '以考試的心態解題。'
            },
            {
                id: 'n3_quiz_tsumori_de_2',
                sentence: '初心{しょしん}に戻{もど}った（　）やり直{なお}す。',
                options: ['まで', 'から', 'つもりで', 'さえ'],
                correctIndex: 2,
                explanation: '帶著回到初衷的心態重新來過。'
            },
            {
                id: 'n3_quiz_tsumori_de_3',
                sentence: '旅行{りょこう}に行{い}った（　）貯金{ちょきん}する。',
                options: ['から', 'さえ', 'まで', 'つもりで'],
                correctIndex: 3,
                explanation: '當作去旅行一樣存錢。'
            },
            {
                id: 'n3_quiz_tsumori_de_4',
                sentence: '「失敗{しっぱい}したらどうしよう…」\n「成功{せいこう}する（　）やってみて。」',
                options: ['から', 'つもりで', 'まで', 'さえ'],
                correctIndex: 1,
                explanation: '對話情境。帶著會成功的心態試試。'
            },
            {
                id: 'n3_quiz_tsumori_de_5',
                sentence: '「なんでそんなに頑張{がんば}るの？」\n「最後{さいご}（　）やってる。」',
                options: ['まで', 'さえ', 'のつもりで', 'から'],
                correctIndex: 2,
                explanation: '對話情境。當作最後一次在努力。'
            }
        ]
    },

    'n3_uchi_ni': {
        id: 'n3_uchi_ni',
        pattern: 'うちに',
        connection: '動詞{どうし}辭書{じしょ}形{けい}/動詞{どうし}ない形{けい}/い形容詞{けいようし}い/な形容詞{けいようし}な/名詞{めいし}の + うちに',
        translation: '在...期間; 趁著...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示趁某狀態時做某事',
                description: '「うちに」表示趁著某種狀態還存在時做某事，暗示狀態會改變。',
                examples: [
                    { japanese: '若{わか}いうちに旅行{りょこう}したい。', chinese: '想趁年輕時旅行。' },
                    { japanese: '忘{わす}れないうちにメモする。', chinese: '趁沒忘記前記下來。' },
                    { japanese: '「いつ食{た}べる？」\n「温{あたた}かいうちに食{た}べよう。」', chinese: '「什麼時候吃？」\n「趁熱吃吧。」' }
                ]
            }
        ],
        analysis: {
            title: '「うちに」的用法分析',
            description: '強調狀態的時效性。',
            points: [
                { rule: '表示趁著...的時候', explanation: '暗示狀態會變化' },
                { rule: '「ないうちに」趁還沒...的時候', explanation: '如「忘れないうちに」' },
                { rule: '常用於建議趁早做某事', explanation: '把握時機' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_uchi_ni_1',
                sentence: '元気{げんき}な（　）運動{うんどう}しよう。',
                options: ['から', 'さえ', 'まで', 'うちに'],
                correctIndex: 3,
                explanation: '趁身體好的時候運動。'
            },
            {
                id: 'n3_quiz_uchi_ni_2',
                sentence: '暗{くら}くならない（　）帰{かえ}ろう。',
                options: ['さえ', 'うちに', 'から', 'まで'],
                correctIndex: 1,
                explanation: '趁天還沒黑回去吧。'
            },
            {
                id: 'n3_quiz_uchi_ni_3',
                sentence: '日本{にほん}にいる（　）富士山{ふじさん}に登{のぼ}りたい。',
                options: ['まで', 'さえ', 'うちに', 'から'],
                correctIndex: 2,
                explanation: '想趁在日本時登富士山。'
            },
            {
                id: 'n3_quiz_uchi_ni_4',
                sentence: '「いつ連絡{れんらく}する？」\n「忘{わす}れない（　）今{いま}しよう。」',
                options: ['から', 'まで', 'うちに', 'さえ'],
                correctIndex: 2,
                explanation: '對話情境。趁沒忘記現在聯絡。'
            },
            {
                id: 'n3_quiz_uchi_ni_5',
                sentence: '「勉強{べんきょう}は？」\n「時間{じかん}がある（　）やっておくよ。」',
                options: ['うちに', 'から', 'まで', 'さえ'],
                correctIndex: 0,
                explanation: '對話情境。趁有時間先做。'
            }
        ]
    },

    'n3_ue_de': {
        id: 'n3_ue_de',
        pattern: '上{うえ}で',
        connection: '動詞{どうし}た形{けい}/名詞{めいし}の + 上{うえ}で',
        translation: '在...之後; 在...基礎上',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示在做完某事後再做某事',
                description: '「上で」表示在完成前面的動作或考慮某事項之後，再進行後續動作。',
                examples: [
                    { japanese: '検討{けんとう}した上{うえ}で決{き}める。', chinese: '經過討論後再決定。' },
                    { japanese: '説明{せつめい}を聞{き}いた上{うえ}で判断{はんだん}する。', chinese: '聽完說明後再判斷。' },
                    { japanese: '「今{いま}決{き}める？」\n「いや、確認{かくにん}した上{うえ}で返事{へんじ}する。」', chinese: '「現在決定嗎？」\n「不，確認之後再回覆。」' }
                ]
            }
        ],
        analysis: {
            title: '「上で」的用法分析',
            description: '表示前提條件。',
            points: [
                { rule: '表示做完A再做B', explanation: '強調順序' },
                { rule: '常用於慎重決策', explanation: '經過考慮後' },
                { rule: '較正式的表達', explanation: '書面語常用' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ue_de_1',
                sentence: '相談{そうだん}した（　）決{き}めましょう。',
                options: ['上で', 'まで', 'から', 'さえ'],
                correctIndex: 0,
                explanation: '商量之後再決定吧。'
            },
            {
                id: 'n3_quiz_ue_de_2',
                sentence: '資料{しりょう}を読{よ}んだ（　）意見{いけん}を言{い}う。',
                options: ['まで', '上で', 'から', 'さえ'],
                correctIndex: 1,
                explanation: '讀完資料後再發表意見。'
            },
            {
                id: 'n3_quiz_ue_de_3',
                sentence: '契約{けいやく}書{しょ}を確認{かくにん}した（　）サインする。',
                options: ['上で', 'さえ', 'から', 'まで'],
                correctIndex: 0,
                explanation: '確認合約後再簽名。'
            },
            {
                id: 'n3_quiz_ue_de_4',
                sentence: '「すぐ答{こた}える？」\n「よく考{かんが}えた（　）答{こた}える。」',
                options: ['上で', 'から', 'さえ', 'まで'],
                correctIndex: 0,
                explanation: '對話情境。仔細考慮後再回答。'
            },
            {
                id: 'n3_quiz_ue_de_5',
                sentence: '「入会{にゅうかい}する？」\n「規約{きやく}を読{よ}んだ（　）決{き}めるよ。」',
                options: ['まで', 'から', 'さえ', '上で'],
                correctIndex: 3,
                explanation: '對話情境。讀完規約再決定。'
            }
        ]
    },

    'n3_ue_de_1': {
        id: 'n3_ue_de_1',
        pattern: '上{うえ}で',
        connection: '名詞{めいし}の + 上{うえ}で',
        translation: '在...之後; 關於...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示在某方面或領域',
                description: '「名詞の上で」表示在某個方面或領域內，相當於「關於...」。',
                examples: [
                    { japanese: '仕事{しごと}の上{うえ}で大切{たいせつ}なこと。', chinese: '工作上重要的事。' },
                    { japanese: '歴史{れきし}の上{うえ}で重要{じゅうよう}な出来事{できごと}。', chinese: '歷史上重要的事件。' },
                    { japanese: '「何{なに}が難{むずか}しい？」\n「日本語{にほんご}の上{うえ}で一番{いちばん}難{むずか}しいのは敬語{けいご}だ。」', chinese: '「什麼最難？」\n「日語中最難的是敬語。」' }
                ]
            }
        ],
        analysis: {
            title: '「名詞の上で」的用法分析',
            description: '表示領域或方面。',
            points: [
                { rule: '表示「在...方面」', explanation: '如「仕事の上で」' },
                { rule: '常用於學術或正式表達', explanation: '較書面語' },
                { rule: '類似「において」', explanation: '可互換使用' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ue_de_1_1',
                sentence: '経済{けいざい}の（　）大{おお}きな変化{へんか}があった。',
                options: ['さえ', 'まで', 'から', '上で'],
                correctIndex: 3,
                explanation: '經濟上有很大的變化。'
            },
            {
                id: 'n3_quiz_ue_de_1_2',
                sentence: '法律{ほうりつ}の（　）問題{もんだい}はない。',
                options: ['上で', 'さえ', 'まで', 'から'],
                correctIndex: 0,
                explanation: '法律上沒有問題。'
            },
            {
                id: 'n3_quiz_ue_de_1_3',
                sentence: '健康{けんこう}の（　）注意{ちゅうい}すべきことがある。',
                options: ['まで', '上で', 'から', 'さえ'],
                correctIndex: 1,
                explanation: '健康上有需要注意的事。'
            },
            {
                id: 'n3_quiz_ue_de_1_4',
                sentence: '「何{なに}が大事{だいじ}？」\n「チームワークの（　）、コミュニケーションが大事{だいじ}だ。」',
                options: ['から', 'まで', '上で', 'さえ'],
                correctIndex: 2,
                explanation: '對話情境。團隊合作上溝通很重要。'
            },
            {
                id: 'n3_quiz_ue_de_1_5',
                sentence: '「この制度{せいど}どう？」\n「理論{りろん}の（　）は良{よ}いが、実際{じっさい}は難{むずか}しい。」',
                options: ['まで', 'さえ', 'から', '上で'],
                correctIndex: 3,
                explanation: '對話情境。理論上好，但實際上很難。'
            }
        ]
    },

    'n3_ue_ni': {
        id: 'n3_ue_ni',
        pattern: '上{うえ}に',
        connection: '動詞{どうし}辭書{じしょ}形{けい}/い形容詞{けいようし}い/な形容詞{けいようし}な/名詞{めいし}の/名詞{めいし}である + 上{うえ}に',
        translation: '不僅...而且...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示添加更多的情況',
                description: '「上に」表示在某種情況之上又加上另一種情況，常用於強調問題或優點的累加。',
                examples: [
                    { japanese: '彼{かれ}は頭{あたま}がいい上{うえ}に、スポーツも得意{とくい}だ。', chinese: '他不僅聰明，運動也很強。' },
                    { japanese: '雨{あめ}の上{うえ}に風{かぜ}も強{つよ}い。', chinese: '不僅下雨，風也很大。' },
                    { japanese: '「なんで疲{つか}れてる？」\n「仕事{しごと}が忙{いそが}しかった上{うえ}に、風邪{かぜ}もひいたんだ。」', chinese: '「為什麼這麼累？」\n「工作忙，加上又感冒了。」' }
                ]
            }
        ],
        analysis: {
            title: '「上に」的用法分析',
            description: '表達累加的情況。',
            points: [
                { rule: '表示「A加上B」', explanation: '情況疊加' },
                { rule: '可用於正面或負面情況', explanation: '優點或問題的累加' },
                { rule: '相當於「そのうえ」', explanation: '而且、再加上' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ue_ni_1',
                sentence: '安{やす}い（　）、おいしい。',
                options: ['上に', 'から', 'さえ', 'まで'],
                correctIndex: 0,
                explanation: '不僅便宜，還好吃。'
            },
            {
                id: 'n3_quiz_ue_ni_2',
                sentence: '遅刻{ちこく}した（　）、忘{わす}れ物{もの}もした。',
                options: ['上に', 'まで', 'から', 'さえ'],
                correctIndex: 0,
                explanation: '不僅遲到，還忘帶東西。'
            },
            {
                id: 'n3_quiz_ue_ni_3',
                sentence: '彼女{かのじょ}はきれいな（　）、優{やさ}しい。',
                options: ['上に', 'さえ', 'まで', 'から'],
                correctIndex: 0,
                explanation: '她不僅漂亮，還很溫柔。'
            },
            {
                id: 'n3_quiz_ue_ni_4',
                sentence: '「なぜ落{お}ちた？」\n「難{むずか}しかった（　）、時間{じかん}も足{た}りなかった。」',
                options: ['上に', 'から', 'さえ', 'まで'],
                correctIndex: 0,
                explanation: '對話情境。不僅難，時間也不夠。'
            },
            {
                id: 'n3_quiz_ue_ni_5',
                sentence: '「彼{かれ}すごい？」\n「仕事{しごと}ができる（　）、人柄{ひとがら}もいい。」',
                options: ['上に', 'まで', 'から', 'さえ'],
                correctIndex: 0,
                explanation: '對話情境。不僅能幹，人品也好。'
            }
        ]
    },

    'n3_ue_ni_1': {
        id: 'n3_ue_ni_1',
        pattern: '上{うえ}に',
        connection: '動詞{どうし}辭書{じしょ}形{けい}/い形容詞{けいようし}い/な形容詞{けいようし}な/名詞{めいし}の + 上{うえ}に',
        translation: '不僅...而且...; 再加上...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '強調多重情況疊加',
                description: '「上に」用於表示在已有情況之上又增加另一種情況，常用於解釋原因或強調程度。',
                examples: [
                    { japanese: '物価{ぶっか}が高{たか}い上{うえ}に、給料{きゅうりょう}も安{やす}い。', chinese: '物價高，工資又低。' },
                    { japanese: '彼{かれ}は経験{けいけん}がある上{うえ}に、資格{しかく}も持{も}っている。', chinese: '他不僅有經驗，還有證照。' },
                    { japanese: '「大変{たいへん}だったね。」\n「残業{ざんぎょう}した上{うえ}に、終電{しゅうでん}も逃{のが}した。」', chinese: '「辛苦了。」\n「加班完還錯過末班車。」' }
                ]
            }
        ],
        analysis: {
            title: '「上に」的詳細分析',
            description: '表示情況的累積。',
            points: [
                { rule: '常用於說明多重原因', explanation: '「除了...還有...」' },
                { rule: '前後句常為同類情況', explanation: '都是正面或都是負面' },
                { rule: '口語中也常用', explanation: '日常對話常見' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_ue_ni_1_1',
                sentence: '景色{けしき}がきれいな（　）、料理{りょうり}もおいしい。',
                options: ['さえ', '上に', 'から', 'まで'],
                correctIndex: 1,
                explanation: '風景美，料理也好吃。'
            },
            {
                id: 'n3_quiz_ue_ni_1_2',
                sentence: '駅{えき}から近{ちか}い（　）、家賃{やちん}も安{やす}い。',
                options: ['さえ', '上に', 'まで', 'から'],
                correctIndex: 1,
                explanation: '離車站近，房租也便宜。'
            },
            {
                id: 'n3_quiz_ue_ni_1_3',
                sentence: '電車{でんしゃ}が遅{おく}れた（　）、雨{あめ}にも降{ふ}られた。',
                options: ['から', 'まで', 'さえ', '上に'],
                correctIndex: 3,
                explanation: '電車誤點，還被淋雨。'
            },
            {
                id: 'n3_quiz_ue_ni_1_4',
                sentence: '「なぜ選{えら}んだ？」\n「便利{べんり}な（　）、価格{かかく}も手頃{てごろ}だから。」',
                options: ['から', 'まで', 'さえ', '上に'],
                correctIndex: 3,
                explanation: '對話情境。方便，價格也合理。'
            },
            {
                id: 'n3_quiz_ue_ni_1_5',
                sentence: '「彼女{かのじょ}なぜ人気{にんき}？」\n「歌{うた}が上手{じょうず}な（　）、ダンスもうまいから。」',
                options: ['さえ', 'から', '上に', 'まで'],
                correctIndex: 2,
                explanation: '對話情境。會唱歌，舞也跳得好。'
            }
        ]
    },

    'n3_wa_betsu_toshite': {
        id: 'n3_wa_betsu_toshite',
        pattern: 'は別{べつ}として',
        connection: '名詞{めいし} + は別{べつ}として',
        translation: '姑且不論; ...另當別論',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示暫且不考慮',
                description: '「は別として」表示暫時不把某事納入考慮，先討論其他事項。',
                examples: [
                    { japanese: 'お金{かね}は別{べつ}として、時間{じかん}があるかどうかが問題{もんだい}だ。', chinese: '錢姑且不論，有沒有時間才是問題。' },
                    { japanese: '味{あじ}は別{べつ}として、見{み}た目{め}はきれいだ。', chinese: '味道另說，外觀很漂亮。' },
                    { japanese: '「この案{あん}どう？」\n「費用{ひよう}は別{べつ}として、いいアイデアだと思{おも}う。」', chinese: '「這個方案怎麼樣？」\n「費用另當別論，我覺得是好主意。」' }
                ]
            }
        ],
        analysis: {
            title: '「は別として」的用法分析',
            description: '表示暫時擱置某項考慮。',
            points: [
                { rule: '表示「先不管A」', explanation: '把A從討論中排除' },
                { rule: '強調其他方面', explanation: '把焦點放在別處' },
                { rule: '常用於折衷或讓步', explanation: '承認某方面存在問題' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_wa_betsu_toshite_1',
                sentence: '結果{けっか}（　）、努力{どりょく}したことは評価{ひょうか}する。',
                options: ['は別として', 'さえ', 'から', 'まで'],
                correctIndex: 0,
                explanation: '結果姑且不論，努力值得肯定。'
            },
            {
                id: 'n3_quiz_wa_betsu_toshite_2',
                sentence: '彼{かれ}の性格{せいかく}（　）、仕事{しごと}はできる。',
                options: ['さえ', 'は別として', 'まで', 'から'],
                correctIndex: 1,
                explanation: '他的個性另說，工作能力是有的。'
            },
            {
                id: 'n3_quiz_wa_betsu_toshite_3',
                sentence: '価格{かかく}（　）、品質{ひんしつ}は最高{さいこう}だ。',
                options: ['まで', 'は別として', 'から', 'さえ'],
                correctIndex: 1,
                explanation: '價格另當別論，品質最好。'
            },
            {
                id: 'n3_quiz_wa_betsu_toshite_4',
                sentence: '「彼{かれ}採用{さいよう}する？」\n「経験{けいけん}（　）、熱意{ねつい}はある。」',
                options: ['まで', 'さえ', 'は別として', 'から'],
                correctIndex: 2,
                explanation: '對話情境。經驗另說，熱情是有的。'
            },
            {
                id: 'n3_quiz_wa_betsu_toshite_5',
                sentence: '「この店{みせ}どう？」\n「場所{ばしょ}（　）、料理{りょうり}はおいしいよ。」',
                options: ['まで', 'から', 'さえ', 'は別として'],
                correctIndex: 3,
                explanation: '對話情境。地點另說，料理好吃。'
            }
        ]
    },

    'n3_wa_betsu_toshite_1': {
        id: 'n3_wa_betsu_toshite_1',
        pattern: 'は別{べつ}として',
        connection: '名詞{めいし} + は別{べつ}として',
        translation: '除...之外; 另當別論',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示例外或特殊情況',
                description: '「は別として」表示將某項目作為例外處理，不包含在一般討論範圍內。',
                examples: [
                    { japanese: '彼{かれ}は別{べつ}として、他{ほか}の人{ひと}は全員{ぜんいん}参加{さんか}する。', chinese: '他另當別論，其他人全員參加。' },
                    { japanese: '特別{とくべつ}な事情{じじょう}は別{べつ}として、欠席{けっせき}は認{みと}めない。', chinese: '特殊情況另當別論，不允許缺席。' },
                    { japanese: '「みんな来{く}る？」\n「田中{たなか}さんは別{べつ}として、みんな来{く}ると思{おも}う。」', chinese: '「大家都來嗎？」\n「田中另當別論，我想大家都會來。」' }
                ]
            }
        ],
        analysis: {
            title: '「は別として」作為例外的用法',
            description: '表示將某項排除在外。',
            points: [
                { rule: '表示「除了A以外」', explanation: '將A作為例外' },
                { rule: '常用於說明規則的例外', explanation: '特殊情況' },
                { rule: '類似「を除いて」', explanation: '可互換使用' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_wa_betsu_toshite_1_1',
                sentence: '緊急{きんきゅう}の場合{ばあい}（　）、連絡{れんらく}は不要{ふよう}だ。',
                options: ['は別として', 'から', 'まで', 'さえ'],
                correctIndex: 0,
                explanation: '緊急情況另當別論，不需要聯絡。'
            },
            {
                id: 'n3_quiz_wa_betsu_toshite_1_2',
                sentence: '社長{しゃちょう}（　）、みんな残業{ざんぎょう}している。',
                options: ['から', 'は別として', 'まで', 'さえ'],
                correctIndex: 1,
                explanation: '社長另當別論，大家都在加班。'
            },
            {
                id: 'n3_quiz_wa_betsu_toshite_1_3',
                sentence: '天候{てんこう}（　）、予定{よてい}通{どお}りに行{おこな}う。',
                options: ['まで', 'さえ', 'から', 'は別として'],
                correctIndex: 3,
                explanation: '天氣另當別論，按計畫進行。'
            },
            {
                id: 'n3_quiz_wa_betsu_toshite_4',
                sentence: '「全員{ぜんいん}賛成{さんせい}？」\n「山田{やまだ}さん（　）、みんな賛成{さんせい}だ。」',
                options: ['は別として', 'から', 'さえ', 'まで'],
                correctIndex: 0,
                explanation: '對話情境。山田另當別論，大家都贊成。'
            },
            {
                id: 'n3_quiz_wa_betsu_toshite_1_5',
                sentence: '「ルール守{まも}らなきゃ？」\n「特例{とくれい}（　）、守{まも}る必要{ひつよう}がある。」',
                options: ['は別として', 'まで', 'から', 'さえ'],
                correctIndex: 0,
                explanation: '對話情境。特例另當別論，需要遵守。'
            }
        ]
    },

    'n3_wa_mochiron': {
        id: 'n3_wa_mochiron',
        pattern: 'はもちろん',
        connection: '名詞{めいし} + はもちろん',
        translation: '不用說...也...; ...是當然的',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示當然如此並更進一步',
                description: '「はもちろん」表示某事是理所當然的，而且還有更多。相當於「不用說A，連B也...」。',
                examples: [
                    { japanese: '彼{かれ}は英語{えいご}はもちろん、中国語{ちゅうごくご}も話{はな}せる。', chinese: '他英語不用說，中文也會說。' },
                    { japanese: '日本{にほん}はもちろん、海外{かいがい}でも人気{にんき}がある。', chinese: '不用說日本，在海外也很受歡迎。' },
                    { japanese: '「料理{りょうり}上手{じょうず}？」\n「和食{わしょく}はもちろん、洋食{ようしょく}も作{つく}れるよ。」', chinese: '「擅長料理嗎？」\n「日式不用說，西式也會做。」' }
                ]
            }
        ],
        analysis: {
            title: '「はもちろん」的用法分析',
            description: '表達「A自不用說，連B也...」。',
            points: [
                { rule: '表示A是理所當然的', explanation: '「當然...」' },
                { rule: '後面補充更進一步的內容', explanation: '「而且還...」' },
                { rule: '常用於強調範圍廣泛', explanation: '擴大範圍' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_wa_mochiron_1',
                sentence: '大人{おとな}（　）、子供{こども}も楽{たの}しめる。',
                options: ['まで', 'はもちろん', 'から', 'さえ'],
                correctIndex: 1,
                explanation: '大人不用說，小孩也能享受。'
            },
            {
                id: 'n3_quiz_wa_mochiron_2',
                sentence: '平日{へいじつ}（　）、週末{しゅうまつ}も働{はたら}いている。',
                options: ['さえ', 'はもちろん', 'から', 'まで'],
                correctIndex: 1,
                explanation: '平日不用說，週末也在工作。'
            },
            {
                id: 'n3_quiz_wa_mochiron_3',
                sentence: '国内{こくない}（　）、海外{かいがい}でも有名{ゆうめい}だ。',
                options: ['まで', 'から', 'さえ', 'はもちろん'],
                correctIndex: 3,
                explanation: '國內不用說，海外也有名。'
            },
            {
                id: 'n3_quiz_wa_mochiron_4',
                sentence: '「日本語{にほんご}だけ？」\n「日本語{にほんご}（　）、韓国語{かんこくご}も話{はな}せる。」',
                options: ['さえ', 'まで', 'から', 'はもちろん'],
                correctIndex: 3,
                explanation: '對話情境。日語不用說，韓語也會。'
            },
            {
                id: 'n3_quiz_wa_mochiron_5',
                sentence: '「肉{にく}料理{りょうり}だけ？」\n「肉{にく}（　）、魚{さかな}料理{りょうり}も得意{とくい}だよ。」',
                options: ['さえ', 'まで', 'から', 'はもちろん'],
                correctIndex: 3,
                explanation: '對話情境。肉類不用說，魚料理也擅長。'
            }
        ]
    },

    'n3_wake_da': {
        id: 'n3_wake_da',
        pattern: 'わけだ',
        connection: '句{く}子{し} + わけだ',
        translation: '當然...; 也就是說...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示理所當然的結論',
                description: '「わけだ」用於表示根據前面的情況，某結論是自然而然的。',
                examples: [
                    { japanese: '十年{じゅうねん}も住{す}んでいたのか。日本語{にほんご}が上手{じょうず}なわけだ。', chinese: '住了十年啊。難怪日語那麼好。' },
                    { japanese: '毎日{まいにち}練習{れんしゅう}している。上達{じょうたつ}するわけだ。', chinese: '每天練習。自然會進步。' },
                    { japanese: '「彼{かれ}なぜ知{し}ってるの？」\n「社員{しゃいん}だから、知{し}っているわけだ。」', chinese: '「他為什麼知道？」\n「因為是員工，自然知道。」' }
                ]
            }
        ],
        analysis: {
            title: '「わけだ」的用法分析',
            description: '表達合理的推論。',
            points: [
                { rule: '表示「難怪...」', explanation: '恍然大悟' },
                { rule: '表示「自然就...」', explanation: '合理的結論' },
                { rule: '常用於理解原因後的感嘆', explanation: '「原來如此」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_wake_da_1',
                sentence: '留学{りゅうがく}していたのか。英語{えいご}が上手{じょうず}な（　）。',
                options: ['から', 'さえ', 'まで', 'わけだ'],
                correctIndex: 3,
                explanation: '留過學啊。難怪英語那麼好。'
            },
            {
                id: 'n3_quiz_wake_da_2',
                sentence: '運動{うんどう}しないから、太{ふと}る（　）。',
                options: ['わけだ', 'まで', 'さえ', 'から'],
                correctIndex: 0,
                explanation: '不運動，自然會胖。'
            },
            {
                id: 'n3_quiz_wake_da_3',
                sentence: '彼{かれ}は医者{いしゃ}だ。忙{いそが}しい（　）。',
                options: ['から', 'さえ', 'まで', 'わけだ'],
                correctIndex: 3,
                explanation: '他是醫生。難怪很忙。'
            },
            {
                id: 'n3_quiz_wake_da_4',
                sentence: '「彼女{かのじょ}料理{りょうり}上手{じょうず}だね。」\n「主婦{しゅふ}だから、上手{じょうず}な（　）。」',
                options: ['わけだ', 'から', 'さえ', 'まで'],
                correctIndex: 0,
                explanation: '對話情境。是主婦，難怪很會做。'
            },
            {
                id: 'n3_quiz_wake_da_5',
                sentence: '「なぜ安{やす}い？」\n「セール中{ちゅう}だから、安{やす}い（　）。」',
                options: ['わけだ', 'から', 'まで', 'さえ'],
                correctIndex: 0,
                explanation: '對話情境。在特價，難怪便宜。'
            }
        ]
    },

    'n3_wake_dewa_nai': {
        id: 'n3_wake_dewa_nai',
        pattern: 'わけではない',
        connection: '句{く}子{し} + わけではない',
        translation: '並非...; 不見得...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示部分否定',
                description: '「わけではない」表示並不完全是那樣，否定某種一般性的推論。',
                examples: [
                    { japanese: '嫌{きら}いなわけではない。', chinese: '並不是討厭。' },
                    { japanese: '忙{いそが}しいわけではないが、時間{じかん}がない。', chinese: '並不是忙，但沒有時間。' },
                    { japanese: '「諦{あきら}めた？」\n「諦{あきら}めたわけではない。休{やす}んでいるだけだ。」', chinese: '「放棄了？」\n「並不是放棄了。只是在休息。」' }
                ]
            }
        ],
        analysis: {
            title: '「わけではない」的用法分析',
            description: '表達部分否定。',
            points: [
                { rule: '表示「不是說...」', explanation: '否定某種推論' },
                { rule: '常用於澄清誤解', explanation: '解釋真實情況' },
                { rule: '語氣較緩和', explanation: '不是完全否定' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_wake_dewa_nai_1',
                sentence: '反対{はんたい}している（　）が、心配{しんぱい}はある。',
                options: ['から', 'まで', 'わけではない', 'さえ'],
                correctIndex: 2,
                explanation: '並不是反對，但有擔心。'
            },
            {
                id: 'n3_quiz_wake_dewa_nai_2',
                sentence: '行{い}きたくない（　）が、予定{よてい}がある。',
                options: ['まで', 'から', 'わけではない', 'さえ'],
                correctIndex: 2,
                explanation: '並不是不想去，但有安排。'
            },
            {
                id: 'n3_quiz_wake_dewa_nai_3',
                sentence: '彼{かれ}を責{せ}めている（　）。',
                options: ['まで', 'から', 'さえ', 'わけではない'],
                correctIndex: 3,
                explanation: '並不是在責怪他。'
            },
            {
                id: 'n3_quiz_wake_dewa_nai_4',
                sentence: '「怒{おこ}ってる？」\n「怒{おこ}っている（　）よ。」',
                options: ['わけではない', 'さえ', 'から', 'まで'],
                correctIndex: 0,
                explanation: '對話情境。並沒有在生氣。'
            },
            {
                id: 'n3_quiz_wake_dewa_nai_5',
                sentence: '「お金{かね}が大事{だいじ}じゃない？」\n「大事{だいじ}じゃない（　）が、それだけじゃない。」',
                options: ['さえ', 'から', 'まで', 'わけではない'],
                correctIndex: 3,
                explanation: '對話情境。不是說不重要，但不只是那樣。'
            }
        ]
    },

    'n3_wake_ga_nai': {
        id: 'n3_wake_ga_nai',
        pattern: 'わけがない',
        connection: '句{く}子{し} + わけがない',
        translation: '絕不可能...; 沒有理由...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示絕對不可能',
                description: '「わけがない」表示某事從道理上講是不可能的，強烈否定某種可能性。',
                examples: [
                    { japanese: '彼{かれ}が嘘{うそ}をつくわけがない。', chinese: '他絕對不會說謊。' },
                    { japanese: 'そんな簡単{かんたん}なわけがない。', chinese: '不可能那麼簡單。' },
                    { japanese: '「彼{かれ}が犯人{はんにん}？」\n「彼{かれ}がそんなことをするわけがない！」', chinese: '「他是犯人？」\n「他不可能做那種事！」' }
                ]
            }
        ],
        analysis: {
            title: '「わけがない」的用法分析',
            description: '表達強烈否定。',
            points: [
                { rule: '表示「不可能...」', explanation: '強烈否定' },
                { rule: '比「はずがない」語氣更強', explanation: '更堅定的否定' },
                { rule: '常用於為某人辯護', explanation: '「他絕對不會...」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_wake_ga_nai_1',
                sentence: '彼女{かのじょ}が裏切{うらぎ}る（　）。',
                options: ['まで', 'わけがない', 'さえ', 'から'],
                correctIndex: 1,
                explanation: '她不可能背叛。'
            },
            {
                id: 'n3_quiz_wake_ga_nai_2',
                sentence: '一晩{ひとばん}で終{お}わる（　）。',
                options: ['まで', 'から', 'わけがない', 'さえ'],
                correctIndex: 2,
                explanation: '一晚不可能結束。'
            },
            {
                id: 'n3_quiz_wake_ga_nai_3',
                sentence: 'こんなに安{やす}い（　）。何{なに}かおかしい。',
                options: ['まで', 'から', 'さえ', 'わけがない'],
                correctIndex: 3,
                explanation: '不可能這麼便宜。有問題。'
            },
            {
                id: 'n3_quiz_wake_ga_nai_4',
                sentence: '「忘{わす}れた？」\n「忘{わす}れる（　）。ちゃんと覚{おぼ}えてる。」',
                options: ['さえ', 'から', 'わけがない', 'まで'],
                correctIndex: 2,
                explanation: '對話情境。不可能忘記。記得很清楚。'
            },
            {
                id: 'n3_quiz_wake_ga_nai_5',
                sentence: '「彼{かれ}諦{あきら}めた？」\n「彼{かれ}が諦{あきら}める（　）。」',
                options: ['まで', 'さえ', 'から', 'わけがない'],
                correctIndex: 3,
                explanation: '對話情境。他不可能放棄。'
            }
        ]
    },

    'n3_wake_niwa_ikanai': {
        id: 'n3_wake_niwa_ikanai',
        pattern: 'わけにはいかない',
        connection: '動詞{どうし}辭書{じしょ}形{けい}/動詞{どうし}ない形{けい} + わけにはいかない',
        translation: '不能...; 不可以...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示因某種理由不能做',
                description: '「わけにはいかない」表示雖然想做或不想做某事，但由於社會常識、責任等原因不能那樣做。',
                examples: [
                    { japanese: '約束{やくそく}したから、行{い}かないわけにはいかない。', chinese: '既然約定了，不能不去。' },
                    { japanese: '仕事{しごと}中{ちゅう}に寝{ね}るわけにはいかない。', chinese: '工作中不能睡覺。' },
                    { japanese: '「休{やす}んだら？」\n「責任者{せきにんしゃ}だから、休{やす}むわけにはいかない。」', chinese: '「休息一下？」\n「因為是負責人，不能休息。」' }
                ]
            }
        ],
        analysis: {
            title: '「わけにはいかない」的用法分析',
            description: '表達因責任或義務不能做某事。',
            points: [
                { rule: '表示「不得不...」的否定', explanation: '由於某種原因不能' },
                { rule: '強調社會責任或道義', explanation: '不是能力問題而是責任問題' },
                { rule: '「ないわけにはいかない」雙重否定', explanation: '表示「不能不做」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_wake_niwa_ikanai_1',
                sentence: 'まだ終{お}わってないから、帰{かえ}る（　）。',
                options: ['から', 'わけにはいかない', 'さえ', 'まで'],
                correctIndex: 1,
                explanation: '還沒結束，不能回去。'
            },
            {
                id: 'n3_quiz_wake_niwa_ikanai_2',
                sentence: '秘密{ひみつ}だから、言{い}う（　）。',
                options: ['まで', 'さえ', 'から', 'わけにはいかない'],
                correctIndex: 3,
                explanation: '是秘密，不能說。'
            },
            {
                id: 'n3_quiz_wake_niwa_ikanai_3',
                sentence: '彼{かれ}だけに任{まか}せる（　）。',
                options: ['さえ', 'から', 'まで', 'わけにはいかない'],
                correctIndex: 3,
                explanation: '不能只交給他一個人。'
            },
            {
                id: 'n3_quiz_wake_niwa_ikanai_4',
                sentence: '「諦{あきら}めないの？」\n「ここまで来{き}て諦{あきら}める（　）。」',
                options: ['さえ', 'わけにはいかない', 'まで', 'から'],
                correctIndex: 1,
                explanation: '對話情境。都到這地步了，不能放棄。'
            },
            {
                id: 'n3_quiz_wake_niwa_ikanai_5',
                sentence: '「断{ことわ}れば？」\n「先輩{せんぱい}の頼{たの}みだから、断{ことわ}る（　）。」',
                options: ['まで', 'から', 'わけにはいかない', 'さえ'],
                correctIndex: 2,
                explanation: '對話情境。是前輩拜託的，不能拒絕。'
            }
        ]
    },

    'n3_wari_ni': {
        id: 'n3_wari_ni',
        pattern: '割{わり}{わり}に',
        connection: '動詞{どうし}普通{ふつう}形{けい}/い形容詞{けいようし}/な形容詞{けいようし}＋な/名詞{めいし}＋の + 割{わり}{わり}に',
        translation: '以...而言算是...; 雖然...卻...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示與預期不符',
                description: '「割に」表示實際情況與根據前項的期待或判斷不符，出乎意料。',
                examples: [
                    { japanese: 'この店{みせ}は安{やす}い割{わり}に、料理{りょうり}がおいしい。', chinese: '這家店雖然便宜，菜卻很好吃。' },
                    { japanese: '彼{かれ}は若{わか}い割{わり}に落{お}ち着{つ}いている。', chinese: '他雖然年輕，卻很沉穩。' },
                    { japanese: '「このバッグ、高{たか}そう。」\n「見{み}た目{め}の割{わり}に安{やす}かったよ。」', chinese: '「這個包包看起來很貴。」\n「以外觀來說算便宜的。」' }
                ]
            }
        ],
        analysis: {
            title: '「割に」的用法分析',
            description: '表達與預期相反或出乎意料的情況。',
            points: [
                { rule: '表示意外感', explanation: '實際情況與期待不同' },
                { rule: '前後項呈對比', explanation: '通常前項讓人預期某結果，但實際不同' },
                { rule: '與「のに」的區別', explanation: '「割に」較客觀，「のに」帶有不滿' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_wari_ni_1',
                sentence: 'このアパートは駅{えき}から近{ちか}い（　）、家賃{やちん}が安{やす}い。',
                options: ['まで', 'から', 'さえ', '割に'],
                correctIndex: 3,
                explanation: '離車站這麼近，房租卻很便宜。'
            },
            {
                id: 'n3_quiz_wari_ni_2',
                sentence: '彼{かれ}は食{た}べる（　）、太{ふと}らない。',
                options: ['まで', '割に', 'さえ', 'から'],
                correctIndex: 1,
                explanation: '他吃那麼多，卻不會胖。'
            },
            {
                id: 'n3_quiz_wari_ni_3',
                sentence: 'この仕事{しごと}は大変{たいへん}な（　）、給料{きゅうりょう}が少{すく}ない。',
                options: ['まで', 'から', 'さえ', '割に'],
                correctIndex: 3,
                explanation: '這工作這麼辛苦，薪水卻很少。'
            },
            {
                id: 'n3_quiz_wari_ni_4',
                sentence: '「彼女{かのじょ}、勉強{べんきょう}してる？」\n「勉強{べんきょう}してる（　）、成績{せいせき}が上{あ}がらないね。」',
                options: ['まで', 'さえ', '割に', 'から'],
                correctIndex: 2,
                explanation: '對話情境。雖然有在讀書，成績卻沒進步。'
            },
            {
                id: 'n3_quiz_wari_ni_5',
                sentence: '「この靴{くつ}、高{たか}かった？」\n「値段{ねだん}の（　）、質{しつ}がいいよ。」',
                options: ['さえ', 'から', 'まで', '割に'],
                correctIndex: 3,
                explanation: '對話情境。以價格來說，品質很好。'
            }
        ]
    },

    'n3_wari_ni_1': {
        id: 'n3_wari_ni_1',
        pattern: '割{わり}{わり}に',
        connection: '動詞{どうし}普通{ふつう}形{けい}/形容詞{けいようし}/名詞{めいし}＋の + 割{わり}{わり}に（は）',
        translation: '相對地; 比較起來',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示相對比較',
                description: '「割に」也可表示與某基準相比，程度上出乎意料的差異。',
                examples: [
                    { japanese: '年齢{ねんれい}の割{わり}に元気{げんき}だ。', chinese: '以年齡來說很有精神。' },
                    { japanese: '経験{けいけん}の割{わり}にはよくできている。', chinese: '以經驗來說做得很好。' },
                    { japanese: '「おばあちゃん、元気{げんき}そう。」\n「年{とし}の割{わり}にはね。」', chinese: '「奶奶看起來很有精神。」\n「以她的年紀來說是的。」' }
                ]
            }
        ],
        analysis: {
            title: '「割に（は）」的用法分析',
            description: '表達以某基準來評價時的意外感。',
            points: [
                { rule: '「割には」加強對比', explanation: '加「は」更強調對比意味' },
                { rule: '常用於評價', explanation: '多用於對人或事物的評價' },
                { rule: '帶有驚訝或讚賞意味', explanation: '通常暗示正面意外' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_wari_ni_1_1',
                sentence: '彼{かれ}は初心者{しょしんしゃ}の（　）、上手{じょうず}だ。',
                options: ['さえ', '割に', 'から', 'まで'],
                correctIndex: 1,
                explanation: '他身為初學者卻很厲害。'
            },
            {
                id: 'n3_quiz_wari_ni_1_2',
                sentence: '子供{こども}の（　）しっかりしている。',
                options: ['割に', 'さえ', 'から', 'まで'],
                correctIndex: 0,
                explanation: '以小孩來說很穩重。'
            },
            {
                id: 'n3_quiz_wari_ni_1_3',
                sentence: '努力{どりょく}した（　）、結果{けっか}が出{で}なかった。',
                options: ['さえ', 'まで', 'から', '割に'],
                correctIndex: 3,
                explanation: '雖然努力了，卻沒有成果。'
            },
            {
                id: 'n3_quiz_wari_ni_1_4',
                sentence: '「新人{しんじん}にしては優秀{ゆうしゅう}だね。」\n「経験{けいけん}の（　）よくやってるよ。」',
                options: ['から', '割に', 'さえ', 'まで'],
                correctIndex: 1,
                explanation: '對話情境。以經驗來說做得很好。'
            },
            {
                id: 'n3_quiz_wari_ni_1_5',
                sentence: '「彼{かれ}、走{はし}るの速{はや}いね。」\n「体{からだ}が大{おお}きい（　）速{はや}いね。」',
                options: ['から', 'まで', 'さえ', '割に'],
                correctIndex: 3,
                explanation: '對話情境。以他的體型來說跑得很快。'
            }
        ]
    },

    'n3_wazato': {
        id: 'n3_wazato',
        pattern: 'わざと',
        connection: 'わざと + 動詞{どうし}',
        translation: '故意; 特意',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示故意為之',
                description: '「わざと」表示有意識地、故意地做某事，通常帶有負面含義。',
                examples: [
                    { japanese: '彼{かれ}はわざと失敗{しっぱい}した。', chinese: '他故意失敗的。' },
                    { japanese: 'わざと知{し}らないふりをした。', chinese: '故意裝作不知道。' },
                    { japanese: '「なんで無視{むし}したの？」\n「わざとじゃないよ、気{き}づかなかっただけ。」', chinese: '「為什麼不理我？」\n「不是故意的，只是沒注意到。」' }
                ]
            }
        ],
        analysis: {
            title: '「わざと」的用法分析',
            description: '表達有意圖地做某事。',
            points: [
                { rule: '強調意圖性', explanation: '有意識地、故意地行動' },
                { rule: '常帶負面意味', explanation: '多用於不好的行為或結果' },
                { rule: '與「わざわざ」的區別', explanation: '「わざと」是故意，「わざわざ」是特地' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_wazato_1',
                sentence: '彼{かれ}は（　）間違{まちが}えたに違{ちが}いない。',
                options: ['まで', 'から', 'さえ', 'わざと'],
                correctIndex: 3,
                explanation: '他一定是故意弄錯的。'
            },
            {
                id: 'n3_quiz_wazato_2',
                sentence: '（　）遅{おく}れたわけではない。',
                options: ['まで', 'わざと', 'から', 'さえ'],
                correctIndex: 1,
                explanation: '不是故意遲到的。'
            },
            {
                id: 'n3_quiz_wazato_3',
                sentence: '彼女{かのじょ}は（　）聞{き}こえないふりをした。',
                options: ['まで', 'さえ', 'わざと', 'から'],
                correctIndex: 2,
                explanation: '她故意裝作沒聽到。'
            },
            {
                id: 'n3_quiz_wazato_4',
                sentence: '「なんであの人{ひと}に言{い}ったの？」\n「（　）言{い}ったんじゃないよ。」',
                options: ['から', 'さえ', 'わざと', 'まで'],
                correctIndex: 2,
                explanation: '對話情境。不是故意說的。'
            },
            {
                id: 'n3_quiz_wazato_5',
                sentence: '「ぶつかったでしょ！」\n「（　）じゃないよ、ごめん。」',
                options: ['まで', 'わざと', 'から', 'さえ'],
                correctIndex: 1,
                explanation: '對話情境。不是故意的，對不起。'
            }
        ]
    },

    'n3_wazawaza': {
        id: 'n3_wazawaza',
        pattern: 'わざわざ',
        connection: 'わざわざ + 動詞{どうし}',
        translation: '特地; 專程',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示特地做某事',
                description: '「わざわざ」表示費時費力地特意做某事，常用於表示感謝或抱歉。',
                examples: [
                    { japanese: 'わざわざ来{き}てくれてありがとう。', chinese: '謝謝你特地過來。' },
                    { japanese: 'わざわざ電話{でんわ}しなくてもよかったのに。', chinese: '不用特地打電話的。' },
                    { japanese: '「お届{とど}け物{もの}です。」\n「わざわざすみません。」', chinese: '「這是您的包裹。」\n「特地送來真不好意思。」' }
                ]
            }
        ],
        analysis: {
            title: '「わざわざ」的用法分析',
            description: '表達特意、專程做某事。',
            points: [
                { rule: '強調費力程度', explanation: '暗示花費額外的時間精力' },
                { rule: '常用於感謝表達', explanation: '表達對對方費心的感謝' },
                { rule: '可帶否定語氣', explanation: '「わざわざ～なくても」表示不必那麼麻煩' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_wazawaza_1',
                sentence: '（　）お越{こ}しいただき、ありがとうございます。',
                options: ['さえ', 'わざわざ', 'まで', 'から'],
                correctIndex: 1,
                explanation: '謝謝您特地過來。'
            },
            {
                id: 'n3_quiz_wazawaza_2',
                sentence: '（　）作{つく}らなくても、買{か}えばいいよ。',
                options: ['わざわざ', 'から', 'まで', 'さえ'],
                correctIndex: 0,
                explanation: '不用特地做，買就好了。'
            },
            {
                id: 'n3_quiz_wazawaza_3',
                sentence: '遠{とお}いところを（　）来{き}てくれた。',
                options: ['まで', 'さえ', 'わざわざ', 'から'],
                correctIndex: 2,
                explanation: '從那麼遠特地來。'
            },
            {
                id: 'n3_quiz_wazawaza_4',
                sentence: '「お土産{みやげ}、ありがとう！」\n「（　）買{か}ってきたんだよ。」',
                options: ['わざわざ', 'さえ', 'まで', 'から'],
                correctIndex: 0,
                explanation: '對話情境。特地買來的。'
            },
            {
                id: 'n3_quiz_wazawaza_5',
                sentence: '「送{おく}っていくよ。」\n「（　）いいよ、自分{じぶん}で帰{かえ}れるから。」',
                options: ['まで', 'わざわざ', 'から', 'さえ'],
                correctIndex: 1,
                explanation: '對話情境。不用特地送，我自己能回去。'
            }
        ]
    },

    'n3_wa_de_yuumei': {
        id: 'n3_wa_de_yuumei',
        pattern: 'は～で有名{ゆうめい}{ゆうめい}',
        connection: '名詞{めいし}は + 名詞{めいし}/動詞{どうし}普通{ふつう}形{けい}こと + で有名{ゆうめい}',
        translation: '以...聞名; 因...而有名',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示因某事而出名',
                description: '「は～で有名」表示某人或某地因為某特點或事物而聞名。',
                examples: [
                    { japanese: '京都{きょうと}は寺{てら}で有名{ゆうめい}だ。', chinese: '京都以寺廟聞名。' },
                    { japanese: '彼{かれ}は料理{りょうり}が上手{じょうず}なことで有名{ゆうめい}だ。', chinese: '他以擅長料理而聞名。' },
                    { japanese: '「この町{まち}、何{なに}が有名{ゆうめい}？」\n「温泉{おんせん}で有名{ゆうめい}だよ。」', chinese: '「這個城鎮有什麼有名的？」\n「以溫泉聞名。」' }
                ]
            }
        ],
        analysis: {
            title: '「は～で有名」的用法分析',
            description: '表達因某特點而聞名。',
            points: [
                { rule: '「で」表示原因', explanation: '因為某事物而有名' },
                { rule: '可接名詞或「こと」', explanation: '動詞要用「～ことで有名」' },
                { rule: '常用於介紹地方或人', explanation: '描述特色或特長' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_wa_de_yuumei_1',
                sentence: '北海道{ほっかいどう}は雪{ゆき}（　）有名{ゆうめい}だ。',
                options: ['さえ', 'から', 'まで', 'で'],
                correctIndex: 3,
                explanation: '北海道以雪聞名。'
            },
            {
                id: 'n3_quiz_wa_de_yuumei_2',
                sentence: 'この店{みせ}はラーメン（　）有名{ゆうめい}だ。',
                options: ['から', 'さえ', 'で', 'まで'],
                correctIndex: 2,
                explanation: '這家店以拉麵聞名。'
            },
            {
                id: 'n3_quiz_wa_de_yuumei_3',
                sentence: '彼女{かのじょ}は歌{うた}がうまいこと（　）有名{ゆうめい}だ。',
                options: ['まで', 'で', 'から', 'さえ'],
                correctIndex: 1,
                explanation: '她以唱歌好聽而聞名。'
            },
            {
                id: 'n3_quiz_wa_de_yuumei_4',
                sentence: '「この地域{ちいき}、何{なに}（　）有名{ゆうめい}？」\n「りんご（　）有名{ゆうめい}だよ。」',
                options: ['まで', 'から', 'さえ', 'で'],
                correctIndex: 3,
                explanation: '對話情境。這個地區以蘋果聞名。'
            },
            {
                id: 'n3_quiz_wa_de_yuumei_5',
                sentence: '「あの作家{さっか}、知{し}ってる？」\n「うん、ミステリー小説{しょうせつ}（　）有名{ゆうめい}だよね。」',
                options: ['さえ', 'から', 'まで', 'で'],
                correctIndex: 3,
                explanation: '對話情境。那位作家以推理小說聞名。'
            }
        ]
    },

    'n3_wa_de_yuumei_1': {
        id: 'n3_wa_de_yuumei_1',
        pattern: 'は～で有名{ゆうめい}{ゆうめい}だ',
        connection: '名詞{めいし}は + 名詞{めいし}/こと + で有名{ゆうめい}だ',
        translation: '因...而出名; 以...著稱',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示聲名遠播',
                description: '「は～で有名だ」強調某人或事物在某方面享有盛名。',
                examples: [
                    { japanese: 'あの教授{きょうじゅ}は研究{けんきゅう}で有名{ゆうめい}だ。', chinese: '那位教授以研究著稱。' },
                    { japanese: 'この会社{かいしゃ}は技術力{ぎじゅつりょく}で有名{ゆうめい}だ。', chinese: '這家公司以技術力著稱。' },
                    { japanese: '「このレストラン、人気{にんき}あるね。」\n「サービスの良{よ}さで有名{ゆうめい}なんだよ。」', chinese: '「這家餐廳很受歡迎呢。」\n「以服務好著稱的。」' }
                ]
            }
        ],
        analysis: {
            title: '「は～で有名だ」的用法分析',
            description: '強調在某領域或方面聞名。',
            points: [
                { rule: '強調特定領域', explanation: '在某一方面特別有名' },
                { rule: '可用於正面或中性', explanation: '通常描述優點或特色' },
                { rule: '常見於介紹說明', explanation: '用於介紹人物或地點特色' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_wa_de_yuumei_1_1',
                sentence: 'あの選手{せんしゅ}はスピード（　）有名{ゆうめい}だ。',
                options: ['で', 'まで', 'から', 'さえ'],
                correctIndex: 0,
                explanation: '那位選手以速度著稱。'
            },
            {
                id: 'n3_quiz_wa_de_yuumei_1_2',
                sentence: 'この大学{だいがく}は医学部{いがくぶ}（　）有名{ゆうめい}だ。',
                options: ['で', 'から', 'さえ', 'まで'],
                correctIndex: 0,
                explanation: '這所大學以醫學院著稱。'
            },
            {
                id: 'n3_quiz_wa_de_yuumei_1_3',
                sentence: 'あの料理人{りょうりにん}は創作{そうさく}料理{りょうり}（　）有名{ゆうめい}だ。',
                options: ['まで', 'で', 'さえ', 'から'],
                correctIndex: 1,
                explanation: '那位廚師以創意料理著稱。'
            },
            {
                id: 'n3_quiz_wa_de_yuumei_1_4',
                sentence: '「この地域{ちいき}の特産{とくさん}は？」\n「お茶{ちゃ}（　）有名{ゆうめい}だよ。」',
                options: ['で', 'から', 'さえ', 'まで'],
                correctIndex: 0,
                explanation: '對話情境。以茶著稱。'
            },
            {
                id: 'n3_quiz_wa_de_yuumei_1_5',
                sentence: '「あの監督{かんとく}、すごいね。」\n「アクション映画{えいが}（　）有名{ゆうめい}なんだ。」',
                options: ['で', 'さえ', 'から', 'まで'],
                correctIndex: 0,
                explanation: '對話情境。以動作片著稱。'
            }
        ]
    },

    'n3_yorimo': {
        id: 'n3_yorimo',
        pattern: 'よりも',
        connection: '名詞{めいし} + よりも',
        translation: '比起...; 與...相比',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示比較的強調形式',
                description: '「よりも」是「より」的強調形式，用於比較時強調差異。',
                examples: [
                    { japanese: '東京{とうきょう}よりも大阪{おおさか}の方{ほう}が好{す}きだ。', chinese: '比起東京，我更喜歡大阪。' },
                    { japanese: '昨日{きのう}よりも今日{きょう}は暑{あつ}い。', chinese: '今天比昨天更熱。' },
                    { japanese: '「どっちがいい？」\n「映画{えいが}よりも本{ほん}の方{ほう}がいいな。」', chinese: '「哪個好？」\n「比起電影，書更好。」' }
                ]
            }
        ],
        analysis: {
            title: '「よりも」的用法分析',
            description: '強調比較的差異。',
            points: [
                { rule: '「も」加強對比', explanation: '比「より」更強調差異' },
                { rule: '常與「方が」搭配', explanation: '「AよりもBの方が」是常見搭配' },
                { rule: '可用於各種比較', explanation: '數量、程度、喜好等' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_yorimo_1',
                sentence: 'お金{かね}（　）時間{じかん}の方{ほう}が大切{たいせつ}だ。',
                options: ['さえ', 'よりも', 'まで', 'から'],
                correctIndex: 1,
                explanation: '比起金錢，時間更重要。'
            },
            {
                id: 'n3_quiz_yorimo_2',
                sentence: '去年{きょねん}（　）今年{ことし}は忙{いそが}しい。',
                options: ['まで', 'よりも', 'から', 'さえ'],
                correctIndex: 1,
                explanation: '今年比去年更忙。'
            },
            {
                id: 'n3_quiz_yorimo_3',
                sentence: '予想{よそう}（　）難{むずか}しかった。',
                options: ['から', 'さえ', 'よりも', 'まで'],
                correctIndex: 2,
                explanation: '比預想的更難。'
            },
            {
                id: 'n3_quiz_yorimo_4',
                sentence: '「電車{でんしゃ}で行{い}く？」\n「電車{でんしゃ}（　）バスの方{ほう}が便利{べんり}だよ。」',
                options: ['まで', 'よりも', 'から', 'さえ'],
                correctIndex: 1,
                explanation: '對話情境。比起電車，公車更方便。'
            },
            {
                id: 'n3_quiz_yorimo_5',
                sentence: '「何{なに}が好{す}き？」\n「肉{にく}（　）魚{さかな}の方{ほう}が好{す}きかな。」',
                options: ['よりも', 'まで', 'から', 'さえ'],
                correctIndex: 0,
                explanation: '對話情境。比起肉，我更喜歡魚。'
            }
        ]
    },

    'n3_you_ga_nai': {
        id: 'n3_you_ga_nai',
        pattern: 'ようがない',
        connection: '動詞{どうし}ます形{けい} + ようがない',
        translation: '沒辦法...; 無法...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示無法做到',
                description: '「ようがない」表示沒有方法或手段去做某事，即使想做也做不到。',
                examples: [
                    { japanese: '住所{じゅうしょ}がわからないから、手紙{てがみ}を送{おく}りようがない。', chinese: '不知道地址，沒辦法寄信。' },
                    { japanese: '証拠{しょうこ}がないから、証明{しょうめい}しようがない。', chinese: '沒有證據，無法證明。' },
                    { japanese: '「助{たす}けてあげたら？」\n「連絡先{れんらくさき}を知{し}らないから、連絡{れんらく}しようがないよ。」', chinese: '「幫幫他吧？」\n「不知道聯絡方式，沒辦法聯絡。」' }
                ]
            }
        ],
        analysis: {
            title: '「ようがない」的用法分析',
            description: '表達因客觀條件不足而無法做到。',
            points: [
                { rule: '強調客觀不可能', explanation: '不是不想做，而是做不到' },
                { rule: '常見原因在前', explanation: '說明為何無法做到' },
                { rule: '與「ようもない」相似', explanation: '兩者意思相近可互換' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_you_ga_nai_1',
                sentence: '電話番号{でんわばんごう}を知{し}らないから、電話{でんわ}し（　）。',
                options: ['ようがない', 'まで', 'さえ', 'から'],
                correctIndex: 0,
                explanation: '不知道電話號碼，沒辦法打電話。'
            },
            {
                id: 'n3_quiz_you_ga_nai_2',
                sentence: '説明{せつめい}がないから、使{つか}い（　）。',
                options: ['まで', 'ようがない', 'から', 'さえ'],
                correctIndex: 1,
                explanation: '沒有說明，不知道怎麼用。'
            },
            {
                id: 'n3_quiz_you_ga_nai_3',
                sentence: '何{なに}も聞{き}いてないから、答{こた}え（　）。',
                options: ['まで', 'ようがない', 'から', 'さえ'],
                correctIndex: 1,
                explanation: '什麼都沒聽說，沒辦法回答。'
            },
            {
                id: 'n3_quiz_you_ga_nai_4',
                sentence: '「直{なお}してよ。」\n「原因{げんいん}がわからないから、直{なお}し（　）。」',
                options: ['から', 'さえ', 'ようがない', 'まで'],
                correctIndex: 2,
                explanation: '對話情境。不知道原因，沒辦法修。'
            },
            {
                id: 'n3_quiz_you_ga_nai_5',
                sentence: '「見{み}つけられる？」\n「名前{なまえ}も知{し}らないから、探{さが}し（　）。」',
                options: ['から', 'ようがない', 'まで', 'さえ'],
                correctIndex: 1,
                explanation: '對話情境。連名字都不知道，沒辦法找。'
            }
        ]
    },

    'n3_you_na_ki_ga_suru': {
        id: 'n3_you_na_ki_ga_suru',
        pattern: 'ような気{き}がする',
        connection: '動詞{どうし}普通{ふつう}形{けい}/い形容詞{けいようし}/な形容詞{けいようし}＋な + ような気{き}がする',
        translation: '覺得好像...; 感覺像是...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示模糊的感覺',
                description: '「ような気がする」表示說話者有一種模糊、不確定的感覺或預感。',
                examples: [
                    { japanese: '前{まえ}に会{あ}ったような気{き}がする。', chinese: '覺得好像見過面。' },
                    { japanese: '今日{きょう}は何{なに}かいいことがあるような気{き}がする。', chinese: '覺得今天好像會有好事發生。' },
                    { japanese: '「彼{かれ}、来{く}ると思{おも}う？」\n「うーん、来{こ}ないような気{き}がするなあ。」', chinese: '「你覺得他會來嗎？」\n「嗯...感覺好像不會來。」' }
                ]
            }
        ],
        analysis: {
            title: '「ような気がする」的用法分析',
            description: '表達不確定的感覺或直覺。',
            points: [
                { rule: '表示不確定性', explanation: '不是確定的判斷，只是感覺' },
                { rule: '可用於預感', explanation: '對未來的模糊預感' },
                { rule: '委婉表達意見', explanation: '避免太過直接的斷言' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_you_na_ki_ga_suru_1',
                sentence: 'この本{ほん}は読{よ}んだことがある（　）。',
                options: ['まで', 'さえ', 'ような気がする', 'から'],
                correctIndex: 2,
                explanation: '覺得好像讀過這本書。'
            },
            {
                id: 'n3_quiz_you_na_ki_ga_suru_2',
                sentence: '明日{あした}は晴{は}れる（　）。',
                options: ['さえ', 'まで', 'から', 'ような気がする'],
                correctIndex: 3,
                explanation: '覺得明天好像會放晴。'
            },
            {
                id: 'n3_quiz_you_na_ki_ga_suru_3',
                sentence: '何{なに}か忘{わす}れている（　）。',
                options: ['から', 'さえ', 'まで', 'ような気がする'],
                correctIndex: 3,
                explanation: '覺得好像忘了什麼。'
            },
            {
                id: 'n3_quiz_you_na_ki_ga_suru_4',
                sentence: '「テスト、できた？」\n「うーん、あまりできなかった（　）。」',
                options: ['ような気がする', 'から', 'まで', 'さえ'],
                correctIndex: 0,
                explanation: '對話情境。覺得好像考得不太好。'
            },
            {
                id: 'n3_quiz_you_na_ki_ga_suru_5',
                sentence: '「彼女{かのじょ}、怒{おこ}ってる？」\n「ちょっと怒{おこ}ってる（　）なあ。」',
                options: ['ような気がする', 'から', 'さえ', 'まで'],
                correctIndex: 0,
                explanation: '對話情境。感覺好像有點生氣。'
            }
        ]
    },

    'n3_you_na_ki_ga_suru_1': {
        id: 'n3_you_na_ki_ga_suru_1',
        pattern: 'ような気{き}がする（ようなきがする）',
        connection: '動詞{どうし}/形容詞{けいようし}普通{ふつう}形{けい} + ような気{き}がする',
        translation: '有...的感覺; 似乎...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示主觀印象',
                description: '「ような気がする」也用於表達主觀印象或隱約的認知。',
                examples: [
                    { japanese: '彼{かれ}は嘘{うそ}をついているような気{き}がする。', chinese: '感覺他好像在說謊。' },
                    { japanese: '最近{さいきん}太{ふと}ったような気{き}がする。', chinese: '感覺最近好像胖了。' },
                    { japanese: '「あの人{ひと}、誰{だれ}？」\n「どこかで見{み}たような気{き}がするんだけど...」', chinese: '「那個人是誰？」\n「感覺好像在哪裡見過...」' }
                ]
            }
        ],
        analysis: {
            title: '「ような気がする」主觀印象的用法',
            description: '表達隱約的主觀感受。',
            points: [
                { rule: '表達不確定感', explanation: '帶有「好像」「似乎」的語感' },
                { rule: '用於回憶或判斷', explanation: '對過去或現況的模糊認知' },
                { rule: '常搭配「どこかで」「なんとなく」', explanation: '加強不確定的語感' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_you_na_ki_ga_suru_1_1',
                sentence: 'この話{はなし}は聞{き}いたことがある（　）。',
                options: ['さえ', 'まで', 'ような気がする', 'から'],
                correctIndex: 2,
                explanation: '感覺好像聽過這個故事。'
            },
            {
                id: 'n3_quiz_you_na_ki_ga_suru_1_2',
                sentence: '彼{かれ}は何{なに}か隠{かく}している（　）。',
                options: ['さえ', 'ような気がする', 'から', 'まで'],
                correctIndex: 1,
                explanation: '感覺他好像在隱瞞什麼。'
            },
            {
                id: 'n3_quiz_you_na_ki_ga_suru_1_3',
                sentence: '前{まえ}よりうまくなった（　）。',
                options: ['ような気がする', 'さえ', 'まで', 'から'],
                correctIndex: 0,
                explanation: '感覺比以前進步了。'
            },
            {
                id: 'n3_quiz_you_na_ki_ga_suru_1_4',
                sentence: '「この道{みち}、合{あ}ってる？」\n「うーん、間違{まちが}ってる（　）なあ。」',
                options: ['まで', 'から', 'ような気がする', 'さえ'],
                correctIndex: 2,
                explanation: '對話情境。感覺好像走錯了。'
            },
            {
                id: 'n3_quiz_you_na_ki_ga_suru_1_5',
                sentence: '「この映画{えいが}、見{み}た？」\n「前{まえ}に見{み}た（　）んだけど...」',
                options: ['まで', 'から', 'さえ', 'ような気がする'],
                correctIndex: 3,
                explanation: '對話情境。感覺以前好像看過。'
            }
        ]
    },

    'n3_you_ni': {
        id: 'n3_you_ni',
        pattern: 'ように',
        connection: '動詞{どうし}辭書{じしょ}形{けい}/動詞{どうし}ない形{けい} + ように',
        translation: '為了...; 以便...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示目的',
                description: '「ように」用於表示為了達成某目的或狀態而做某事。常接表示狀態變化或可能的動詞。',
                examples: [
                    { japanese: '忘{わす}れないように、メモを取{と}った。', chinese: '為了不忘記，做了筆記。' },
                    { japanese: '早{はや}く起{お}きられるように、目覚{めざ}ましをセットした。', chinese: '為了能早起，設了鬧鐘。' },
                    { japanese: '「なんでそんなに勉強{べんきょう}してるの？」\n「試験{しけん}に受{う}かるように頑張{がんば}ってるんだ。」', chinese: '「為什麼這麼用功？」\n「為了能考上而努力。」' }
                ]
            }
        ],
        analysis: {
            title: '「ように」的用法分析',
            description: '表達為了達成目的而採取行動。',
            points: [
                { rule: '常接非意志動詞', explanation: '如「できる」「わかる」「なる」等' },
                { rule: '與「ために」的區別', explanation: '「ために」用於意志動詞，「ように」用於非意志動詞或可能形' },
                { rule: '否定形式', explanation: '「ないように」表示「為了不要...」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_you_ni_1',
                sentence: '風邪{かぜ}をひかない（　）、温{あたた}かくしてください。',
                options: ['から', 'さえ', 'ように', 'まで'],
                correctIndex: 2,
                explanation: '為了不感冒，請保暖。'
            },
            {
                id: 'n3_quiz_you_ni_2',
                sentence: '聞{き}こえる（　）、大{おお}きな声{こえ}で話{はな}してください。',
                options: ['さえ', 'から', 'まで', 'ように'],
                correctIndex: 3,
                explanation: '為了能聽到，請大聲說。'
            },
            {
                id: 'n3_quiz_you_ni_3',
                sentence: '遅{おく}れない（　）、早{はや}めに出{で}た。',
                options: ['まで', 'さえ', 'ように', 'から'],
                correctIndex: 2,
                explanation: '為了不遲到，提早出門了。'
            },
            {
                id: 'n3_quiz_you_ni_4',
                sentence: '「なんでメモしてるの？」\n「後{あと}で見{み}てわかる（　）だよ。」',
                options: ['さえ', 'まで', 'ように', 'から'],
                correctIndex: 2,
                explanation: '對話情境。為了之後看能懂。'
            },
            {
                id: 'n3_quiz_you_ni_5',
                sentence: '「早{はや}く寝{ね}なさい。」\n「うん、明日{あした}起{お}きられる（　）早{はや}く寝{ね}る。」',
                options: ['から', 'ように', 'さえ', 'まで'],
                correctIndex: 1,
                explanation: '對話情境。為了明天能起床，早點睡。'
            }
        ]
    },

    'n3_you_ni_mieru': {
        id: 'n3_you_ni_mieru',
        pattern: 'ように見{み}える',
        connection: '動詞{どうし}普通{ふつう}形{けい}/い形容詞{けいようし}/な形容詞{けいようし}＋な + ように見{み}える',
        translation: '看起來像...; 似乎...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示外觀或印象',
                description: '「ように見える」表示從外觀或表面來看，給人某種印象或感覺。',
                examples: [
                    { japanese: '彼女{かのじょ}は疲{つか}れているように見{み}える。', chinese: '她看起來很累。' },
                    { japanese: '簡単{かんたん}なように見{み}えるけど、実{じつ}は難{むずか}しい。', chinese: '看起來簡單，其實很難。' },
                    { japanese: '「田中{たなか}さん、元気{げんき}そうだね。」\n「うん、幸{しあわ}せそうに見{み}えるね。」', chinese: '「田中看起來很有精神呢。」\n「嗯，看起來很幸福。」' }
                ]
            }
        ],
        analysis: {
            title: '「ように見える」的用法分析',
            description: '表達從外觀判斷的印象。',
            points: [
                { rule: '強調視覺印象', explanation: '基於看到的外觀做判斷' },
                { rule: '可能與實際不同', explanation: '暗示可能只是表面現象' },
                { rule: '與「らしい」的區別', explanation: '「ように見える」更強調視覺' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_you_ni_mieru_1',
                sentence: '彼{かれ}は怒{おこ}っている（　）。',
                options: ['から', 'さえ', 'まで', 'ように見える'],
                correctIndex: 3,
                explanation: '他看起來很生氣。'
            },
            {
                id: 'n3_quiz_you_ni_mieru_2',
                sentence: 'この問題{もんだい}は複雑{ふくざつ}な（　）。',
                options: ['ように見える', 'まで', 'から', 'さえ'],
                correctIndex: 0,
                explanation: '這個問題看起來很複雜。'
            },
            {
                id: 'n3_quiz_you_ni_mieru_3',
                sentence: '二人{ふたり}は仲{なか}がいい（　）。',
                options: ['さえ', 'から', 'ように見える', 'まで'],
                correctIndex: 2,
                explanation: '兩人看起來感情很好。'
            },
            {
                id: 'n3_quiz_you_ni_mieru_4',
                sentence: '「あの人{ひと}、学生{がくせい}？」\n「学生{がくせい}の（　）けど、実{じつ}は先生{せんせい}だよ。」',
                options: ['ように見える', 'から', 'さえ', 'まで'],
                correctIndex: 0,
                explanation: '對話情境。看起來像學生，其實是老師。'
            },
            {
                id: 'n3_quiz_you_ni_mieru_5',
                sentence: '「彼女{かのじょ}、楽{たの}しそう？」\n「うん、とても楽{たの}しんでいる（　）ね。」',
                options: ['から', 'ように見える', 'さえ', 'まで'],
                correctIndex: 1,
                explanation: '對話情境。看起來玩得很開心。'
            }
        ]
    },

    'n3_you_ni_mieru_1': {
        id: 'n3_you_ni_mieru_1',
        pattern: 'ように見{み}える',
        connection: '名詞{めいし}＋の + ように見{み}える',
        translation: '看起來像...; 外觀上像...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示類似某物的外觀',
                description: '「ように見える」也可表示某事物的外觀類似於另一事物。',
                examples: [
                    { japanese: 'この石{いし}はダイヤモンドのように見{み}える。', chinese: '這石頭看起來像鑽石。' },
                    { japanese: '彼{かれ}は20代{だい}のように見{み}える。', chinese: '他看起來像20多歲。' },
                    { japanese: '「このケーキ、本物{ほんもの}？」\n「偽物{にせもの}だけど、本物{ほんもの}のように見{み}えるでしょ。」', chinese: '「這蛋糕是真的嗎？」\n「是假的，但看起來像真的吧。」' }
                ]
            }
        ],
        analysis: {
            title: '「ように見える」類比的用法',
            description: '表達外觀與某事物相似。',
            points: [
                { rule: '用於外觀類比', explanation: '表示看起來類似某物' },
                { rule: '可能與實際不符', explanation: '強調只是外觀上的相似' },
                { rule: '常用於描述或比喻', explanation: '描述事物的外觀特徵' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_you_ni_mieru_1_1',
                sentence: 'この絵{え}は写真{しゃしん}の（　）。',
                options: ['さえ', 'ように見える', 'まで', 'から'],
                correctIndex: 1,
                explanation: '這幅畫看起來像照片。'
            },
            {
                id: 'n3_quiz_you_ni_mieru_1_2',
                sentence: '彼女{かのじょ}は女優{じょゆう}の（　）。',
                options: ['ように見える', 'さえ', 'まで', 'から'],
                correctIndex: 0,
                explanation: '她看起來像女演員。'
            },
            {
                id: 'n3_quiz_you_ni_mieru_1_3',
                sentence: 'この建物{たてもの}は城{しろ}の（　）。',
                options: ['から', 'ように見える', 'さえ', 'まで'],
                correctIndex: 1,
                explanation: '這建築看起來像城堡。'
            },
            {
                id: 'n3_quiz_you_ni_mieru_1_4',
                sentence: '「あの雲{くも}、何{なに}に見{み}える？」\n「犬{いぬ}の（　）ね。」',
                options: ['さえ', 'ように見える', 'まで', 'から'],
                correctIndex: 1,
                explanation: '對話情境。那朵雲看起來像狗。'
            },
            {
                id: 'n3_quiz_you_ni_mieru_1_5',
                sentence: '「この人{ひと}、何歳{なんさい}だと思{おも}う？」\n「30代{だい}の（　）けど、実{じつ}は50歳{さい}だって。」',
                options: ['さえ', 'ように見える', 'から', 'まで'],
                correctIndex: 1,
                explanation: '對話情境。看起來像30多歲，其實50歲。'
            }
        ]
    },

    'n3_you_to_shinai': {
        id: 'n3_you_to_shinai',
        pattern: 'ようとしない',
        connection: '動詞{どうし}{どうし}意志形{いしけい} + としない',
        translation: '不想...; 不願意...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示不願意做某事',
                description: '「ようとしない」表示某人沒有做某事的意願，拒絕嘗試。常用於描述第三者。',
                examples: [
                    { japanese: '彼{かれ}は謝{あやま}ろうとしない。', chinese: '他不願意道歉。' },
                    { japanese: '子供{こども}が野菜{やさい}を食{た}べようとしない。', chinese: '孩子不願意吃蔬菜。' },
                    { japanese: '「彼{かれ}、助{たす}けを求{もと}めないね。」\n「そう、一人{ひとり}でやろうとして、人{ひと}に頼{たよ}ろうとしないんだ。」', chinese: '「他不求助呢。」\n「是啊，他想自己做，不願意依靠別人。」' }
                ]
            }
        ],
        analysis: {
            title: '「ようとしない」的用法分析',
            description: '表達不願意或拒絕嘗試做某事。',
            points: [
                { rule: '強調意願的缺乏', explanation: '不是不能做，而是不想做' },
                { rule: '常用於第三人稱', explanation: '描述他人的態度' },
                { rule: '帶有批評或不滿語氣', explanation: '暗示對方應該嘗試但不願意' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_you_to_shinai_1',
                sentence: '彼女{かのじょ}は自分{じぶん}の間違{まちが}いを認{みと}め（　）。',
                options: ['まで', 'から', 'ようとしない', 'さえ'],
                correctIndex: 2,
                explanation: '她不願意承認自己的錯誤。'
            },
            {
                id: 'n3_quiz_you_to_shinai_2',
                sentence: '彼{かれ}は私{わたし}の話{はなし}を聞{き}こ（　）。',
                options: ['うとしない', 'さえ', 'まで', 'から'],
                correctIndex: 0,
                explanation: '他不願意聽我說。'
            },
            {
                id: 'n3_quiz_you_to_shinai_3',
                sentence: '息子{むすこ}が勉強{べんきょう}し（　）困{こま}っている。',
                options: ['まで', 'さえ', 'から', 'ようとしなくて'],
                correctIndex: 3,
                explanation: '兒子不願意讀書，讓我很困擾。'
            },
            {
                id: 'n3_quiz_you_to_shinai_4',
                sentence: '「彼{かれ}、変{か}わった？」\n「全然{ぜんぜん}。変{か}わろ（　）んだよ。」',
                options: ['から', 'まで', 'うとしない', 'さえ'],
                correctIndex: 2,
                explanation: '對話情境。完全沒有，他不願意改變。'
            },
            {
                id: 'n3_quiz_you_to_shinai_5',
                sentence: '「手伝{てつだ}ってもらった？」\n「いや、誰{だれ}も手伝{てつだ}お（　）んだ。」',
                options: ['まで', 'さえ', 'から', 'うとしない'],
                correctIndex: 3,
                explanation: '對話情境。沒有，沒人願意幫忙。'
            }
        ]
    },

    'n3_you_to_suru': {
        id: 'n3_you_to_suru',
        pattern: 'ようとする',
        connection: '動詞{どうし}{どうし}意志形{いしけい} + とする',
        translation: '正要...; 試圖...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示正要做或嘗試做',
                description: '「ようとする」表示正要開始做某事，或表示嘗試、努力做某事。',
                examples: [
                    { japanese: '出{で}かけようとしたとき、電話{でんわ}が鳴{な}った。', chinese: '正要出門時，電話響了。' },
                    { japanese: '彼{かれ}は問題{もんだい}を解決{かいけつ}しようとしている。', chinese: '他正在嘗試解決問題。' },
                    { japanese: '「どうしたの？」\n「寝{ね}ようとしたら、隣{となり}がうるさくて。」', chinese: '「怎麼了？」\n「正要睡時，隔壁很吵。」' }
                ]
            }
        ],
        analysis: {
            title: '「ようとする」的用法分析',
            description: '表達即將開始或嘗試做某事。',
            points: [
                { rule: '表示動作開始前', explanation: '「～ようとしたとき」正要做時' },
                { rule: '表示嘗試努力', explanation: '「～ようとしている」正在嘗試' },
                { rule: '與「ようとしない」對比', explanation: '肯定形表示有意願，否定形表示沒意願' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_you_to_suru_1',
                sentence: '家{いえ}を出{で}（　）したとき、雨{あめ}が降{ふ}り出{だ}した。',
                options: ['から', 'まで', 'さえ', 'ようと'],
                correctIndex: 3,
                explanation: '正要出門時，下起雨來了。'
            },
            {
                id: 'n3_quiz_you_to_suru_2',
                sentence: '彼{かれ}は新{あたら}しいことに挑戦{ちょうせん}し（　）している。',
                options: ['ようと', 'まで', 'から', 'さえ'],
                correctIndex: 0,
                explanation: '他正在嘗試挑戰新事物。'
            },
            {
                id: 'n3_quiz_you_to_suru_3',
                sentence: 'ドアを開{あ}け（　）したら、鍵{かぎ}がかかっていた。',
                options: ['ようと', 'まで', 'から', 'さえ'],
                correctIndex: 0,
                explanation: '正要開門時，發現門鎖著。'
            },
            {
                id: 'n3_quiz_you_to_suru_4',
                sentence: '「まだ起{お}きてたの？」\n「うん、今{いま}寝{ね}（　）していたところ。」',
                options: ['ようと', 'から', 'まで', 'さえ'],
                correctIndex: 0,
                explanation: '對話情境。正要睡覺。'
            },
            {
                id: 'n3_quiz_you_to_suru_5',
                sentence: '「彼{かれ}、諦{あきら}めた？」\n「いや、まだ頑張{がんば}ろ（　）しているよ。」',
                options: ['さえ', 'うと', 'まで', 'から'],
                correctIndex: 1,
                explanation: '對話情境。還在努力嘗試。'
            }
        ]
    },

    'n3_zuni': {
        id: 'n3_zuni',
        pattern: 'ずに',
        connection: '動詞{どうし}ない形{けい}（去{きょ}い）+ ずに',
        translation: '不做...而...; 沒有...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示不做某事就做另一事',
                description: '「ずに」相當於「ないで」，表示在沒有做某動作的情況下做另一動作。「する」變成「せずに」。',
                examples: [
                    { japanese: '朝{あさ}ご飯{はん}を食{た}べずに、学校{がっこう}に行{い}った。', chinese: '沒吃早餐就去學校了。' },
                    { japanese: '辞書{じしょ}を見{み}ずに、テストを受{う}けた。', chinese: '沒看字典就考試了。' },
                    { japanese: '「宿題{しゅくだい}やった？」\n「やらずに寝{ね}ちゃった。」', chinese: '「作業做了嗎？」\n「沒做就睡了。」' }
                ]
            }
        ],
        analysis: {
            title: '「ずに」的用法分析',
            description: '表達未做某事就進行另一動作。',
            points: [
                { rule: '比「ないで」更正式', explanation: '書面語或正式場合較常用' },
                { rule: '注意「する→せずに」', explanation: '「する」的特殊變化' },
                { rule: '可接續各種動詞', explanation: '表示前後動作的關係' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_zuni_1',
                sentence: '傘{かさ}を持{も}た（　）出{で}かけた。',
                options: ['まで', 'さえ', 'から', 'ずに'],
                correctIndex: 3,
                explanation: '沒帶傘就出門了。'
            },
            {
                id: 'n3_quiz_zuni_2',
                sentence: '何{なに}も言{い}わ（　）帰{かえ}ってしまった。',
                options: ['まで', 'ずに', 'から', 'さえ'],
                correctIndex: 1,
                explanation: '什麼都沒說就回去了。'
            },
            {
                id: 'n3_quiz_zuni_3',
                sentence: '誰{だれ}にも相談{そうだん}せ（　）決{き}めた。',
                options: ['から', 'ずに', 'さえ', 'まで'],
                correctIndex: 1,
                explanation: '沒和任何人商量就決定了。'
            },
            {
                id: 'n3_quiz_zuni_4',
                sentence: '「確認{かくにん}した？」\n「確認{かくにん}せ（　）送{おく}っちゃった。」',
                options: ['ずに', 'さえ', 'から', 'まで'],
                correctIndex: 0,
                explanation: '對話情境。沒確認就寄出了。'
            },
            {
                id: 'n3_quiz_zuni_5',
                sentence: '「休憩{きゅうけい}しないの？」\n「休憩{きゅうけい}せ（　）続{つづ}けるよ。」',
                options: ['さえ', 'ずに', 'から', 'まで'],
                correctIndex: 1,
                explanation: '對話情境。不休息繼續做。'
            }
        ]
    },

    'n3_zuni_wa_irarenai': {
        id: 'n3_zuni_wa_irarenai',
        pattern: 'ずにはいられない',
        connection: '動詞{どうし}ない形{けい}（去{きょ}い）+ ずにはいられない',
        translation: '忍不住...; 不能不...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示無法克制',
                description: '「ずにはいられない」表示即使想控制也控制不住，忍不住要做某事。「する」變成「せずにはいられない」。',
                examples: [
                    { japanese: 'この映画{えいが}を見{み}ると、泣{な}かずにはいられない。', chinese: '看這部電影，忍不住會哭。' },
                    { japanese: '彼{かれ}の話{はなし}を聞{き}いて、笑{わら}わずにはいられなかった。', chinese: '聽了他的話，忍不住笑了。' },
                    { japanese: '「怒{おこ}らなかったの？」\n「あんなこと言{い}われたら、怒{おこ}らずにはいられないよ。」', chinese: '「沒生氣嗎？」\n「被說那種話，不可能不生氣。」' }
                ]
            }
        ],
        analysis: {
            title: '「ずにはいられない」的用法分析',
            description: '表達情不自禁、無法自制。',
            points: [
                { rule: '表示強烈衝動', explanation: '想控制但控制不住' },
                { rule: '多用於情感動詞', explanation: '笑、哭、生氣等' },
                { rule: '注意「する→せずにはいられない」', explanation: '「する」的特殊變化' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_zuni_wa_irarenai_1',
                sentence: 'この写真{しゃしん}を見{み}ると、彼{かれ}のことを思{おも}い出{だ}さ（　）。',
                options: ['ずにはいられない', 'さえ', 'から', 'まで'],
                correctIndex: 0,
                explanation: '看到這張照片，忍不住會想起他。'
            },
            {
                id: 'n3_quiz_zuni_wa_irarenai_2',
                sentence: 'あの店{みせ}のケーキを見{み}ると、買{か}わ（　）。',
                options: ['ずにはいられない', 'さえ', 'まで', 'から'],
                correctIndex: 0,
                explanation: '看到那家店的蛋糕，忍不住會買。'
            },
            {
                id: 'n3_quiz_zuni_wa_irarenai_3',
                sentence: 'こんなに美{うつく}しい景色{けしき}を見{み}たら、感動{かんどう}せ（　）。',
                options: ['さえ', 'ずにはいられない', 'まで', 'から'],
                correctIndex: 1,
                explanation: '看到這麼美的景色，不可能不感動。'
            },
            {
                id: 'n3_quiz_zuni_wa_irarenai_4',
                sentence: '「黙{だま}っていられた？」\n「いや、言{い}わ（　）よ。」',
                options: ['まで', 'さえ', 'から', 'ずにはいられなかった'],
                correctIndex: 3,
                explanation: '對話情境。忍不住說了。'
            },
            {
                id: 'n3_quiz_zuni_wa_irarenai_5',
                sentence: '「心配{しんぱい}した？」\n「もちろん、心配{しんぱい}せ（　）よ。」',
                options: ['ずにはいられなかった', 'まで', 'さえ', 'から'],
                correctIndex: 0,
                explanation: '對話情境。當然忍不住擔心了。'
            }
        ]
    },

    'n3_zutsu': {
        id: 'n3_zutsu',
        pattern: 'ずつ',
        connection: '數量{すうりょう}{すうりょう}詞{し} + ずつ',
        translation: '每...; 各...',
        level: 'N3',
        explanation: [
            {
                usageId: 1,
                title: '表示等量分配或漸進',
                description: '「ずつ」接在數量詞後，表示每個單位相同的量，或表示漸進的變化。',
                examples: [
                    { japanese: '一人{ひとり}に一{ひと}つずつ配{くば}った。', chinese: '每人發了一個。' },
                    { japanese: '毎日{まいにち}少{すこ}しずつ上達{じょうたつ}している。', chinese: '每天一點點進步。' },
                    { japanese: '「全員{ぜんいん}に配{くば}れる？」\n「うん、二{ふた}つずつなら足{た}りるよ。」', chinese: '「能發給所有人嗎？」\n「嗯，每人兩個的話夠。」' }
                ]
            }
        ],
        analysis: {
            title: '「ずつ」的用法分析',
            description: '表達等量分配或漸進變化。',
            points: [
                { rule: '表示平均分配', explanation: '「一人にひとつずつ」每人一個' },
                { rule: '表示漸進變化', explanation: '「少しずつ」一點一點地' },
                { rule: '常見搭配', explanation: '「少しずつ」「一つずつ」「一人ずつ」' }
            ]
        },
        quiz: [
            {
                id: 'n3_quiz_zutsu_1',
                sentence: '子供{こども}たちにお菓子{かし}を三{みっ}つ（　）あげた。',
                options: ['さえ', 'まで', 'ずつ', 'から'],
                correctIndex: 2,
                explanation: '給孩子們每人三個點心。'
            },
            {
                id: 'n3_quiz_zutsu_2',
                sentence: '日本語{にほんご}が少{すこ}し（　）わかるようになってきた。',
                options: ['さえ', 'まで', 'ずつ', 'から'],
                correctIndex: 2,
                explanation: '日語漸漸能懂了。'
            },
            {
                id: 'n3_quiz_zutsu_3',
                sentence: '一{いち}ページ（　）丁寧{ていねい}に読{よ}んだ。',
                options: ['から', 'まで', 'さえ', 'ずつ'],
                correctIndex: 3,
                explanation: '一頁一頁仔細地讀。'
            },
            {
                id: 'n3_quiz_zutsu_4',
                sentence: '「みんなに配{くば}れる？」\n「うん、一人{ひとり}二枚{にまい}（　）なら大丈夫{だいじょうぶ}。」',
                options: ['ずつ', 'まで', 'から', 'さえ'],
                correctIndex: 0,
                explanation: '對話情境。每人兩張的話沒問題。'
            },
            {
                id: 'n3_quiz_zutsu_5',
                sentence: '「進{すす}んでる？」\n「うん、毎日{まいにち}少{すこ}し（　）進{すす}めてるよ。」',
                options: ['さえ', 'から', 'ずつ', 'まで'],
                correctIndex: 2,
                explanation: '對話情境。每天一點點在進展。'
            }
        ]
    }
};
