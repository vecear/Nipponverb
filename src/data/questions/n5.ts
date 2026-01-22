import { StaticQuestion } from './types'

export const n5Questions: StaticQuestion[] = [
    // --- Masu Form (Habitual/Future) ---
    {
        id: 'n5_masu_1',
        prob: '私{わたし}は毎日{まいにち}、日本語{にほんご}を______。',
        prob_zh: '我每天都______日語。',
        level: 'N5',
        options: [
            { text: '勉強{べんきょう}します', reason: '正確！「勉強する」是第三類動詞，ます形為「勉強します」。' },
            { text: '勉強{べんきょう}すます', reason: '錯誤：「する」的ます形是「します」。' },
            { text: '勉強{べんきょう}しります', reason: '錯誤：「する」不是一段動詞。' },
            { text: '勉強{べんきょう}であります', reason: '錯誤：名詞用的敬體。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '【動詞分類】「する」是第三類動詞 (不規則)，ます形變化規則為「する」→「します」。這是日語中最基礎且最重要的變化之一。'
    },
    {
        id: 'n5_masu_2',
        prob: '明日{あした}、友達{ともだち}と映画{えいが}を______。',
        prob_zh: '明天，要和朋友______電影。',
        level: 'N5',
        options: [
            { text: '見{み}ります', reason: '錯誤：「見る」是一段動詞，直接去る＋ます。' },
            { text: '見{み}ます', reason: '正確！「見る」是一段動詞，去掉「る」加上「ます」。' },
            { text: '見{み}っています', reason: '錯誤：不需要促音。' },
            { text: '見{み}るます', reason: '錯誤：直接接ます是錯誤的。' }
        ],
        correctIndex: 1,
        tag: 'masu',
        correctRule: '【一段動詞】「見る (みる)」的字尾是「る」，且前一個音是「み (i段)」，屬於第二類動詞 (一段)。規則是「去掉る」＋「ます」。'
    },
    // --- Te Form (Request/Sequence) ---
    {
        id: 'n5_te_1',
        prob: 'すみません、ちょっと______ください。',
        prob_zh: '不好意思，請______一下。',
        level: 'N5',
        options: [
            { text: '待{ま}って', reason: '正確！「待つ」是五段動詞，字尾「つ」發生促音便。' },
            { text: '待{ま}ちて', reason: '錯誤：「待つ」是促音便 (って)。' },
            { text: '待{ま}いて', reason: '錯誤：不是イ音便。' },
            { text: '待{ま}て', reason: '錯誤：那是命令形，且不接ください。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '【五段動詞促音便】字尾為「う、つ、る」的五段動詞，變て形時會發生促音便 (って)。所以「待つ」→「待って」。'
    },
    {
        id: 'n5_te_2',
        prob: '朝{あさ}ご飯{はん}を______から、学校{がっこう}へ行{い}きます。',
        prob_zh: '______早餐之後，再去學校。',
        level: 'N5',
        options: [
            { text: '食{た}べて', reason: '正確！「食べる」是一段動詞，直接去る＋て。' },
            { text: '食{た}べって', reason: '錯誤：「食べる」是一段動詞，不加促音。' },
            { text: '食{た}べいて', reason: '錯誤：一段動詞不發生音便。' },
            { text: '食{た}べって', reason: '錯誤：不需要促音。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '【一段動詞】「食べる」是第二類動詞，規則非常簡單：去掉「る」直接加上「て」。不需要音便變化。'
    },
    {
        id: 'n5_te_3',
        prob: 'そのペンを______もいいですか？',
        prob_zh: '可以______那支筆嗎？ (借用)',
        level: 'N5',
        options: [
            { text: '使{つか}って', reason: '正確！「使う」是五段動詞，字尾「う」發生促音便。' },
            { text: '使{つか}いて', reason: '錯誤：「使う」發生促音便 (って)。' },
            { text: '使{つか}いで', reason: '錯誤：沒有濁音。' },
            { text: '使{つか}て', reason: '錯誤：少了促音。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '【五段動詞促音便】字尾為「う、つ、る」的五段動詞，變て形時為促音便。因此「使う」→「使って」。'
    },
    // --- Ta Form (Past) ---
    {
        id: 'n5_ta_1',
        prob: '昨日{きのう}、デパートで靴{くつ}を______。',
        prob_zh: '昨天，在百貨公司______鞋子。',
        level: 'N5',
        options: [
            { text: '買{か}った', reason: '正確！「買う」字尾為「う」，發生促音便。' },
            { text: '買{か}いた', reason: '錯誤：「買う」發生促音便 (った)。' },
            { text: '買{か}うた', reason: '錯誤：這是關西方言或古文用法。' },
            { text: '買{か}した', reason: '錯誤：那是「貸す」的過去式。' }
        ],
        correctIndex: 0,
        tag: 'ta',
        correctRule: '【五段動詞促音便】同樣適用於た形。字尾「う」的動詞 (如 買う、会う) 變成「った」。'
    },
    {
        id: 'n5_ta_2',
        prob: '日曜日{にちようび}、どこへも______。',
        prob_zh: '星期天，哪裡都沒______。(否定過去)',
        level: 'N5',
        options: [
            { text: '行{い}きませんでした', reason: '正確！過去否定的敬體形式。' },
            { text: '行{い}きました', reason: '錯誤：語意矛盾 (哪裡都...去了)。' },
            { text: '行{い}って', reason: '錯誤：時態不完整。' },
            { text: '行{い}かない', reason: '錯誤：這是現在/未來否定，不是過去。' }
        ],
        correctIndex: 0,
        tag: 'ta',
        correctRule: '【過去否定】「どこへも (哪裡也)」後面必須接否定。過去式的否定敬體是「～ませんでした」。此題考時態與句型邏輯。'
    },
    // --- Nai Form (Negative) ---
    {
        id: 'n5_nai_1',
        prob: 'ここではタバコを______でください。',
        prob_zh: '請不要在這裡______菸。',
        level: 'N5',
        options: [
            { text: '吸{す}わない', reason: '正確！五段動詞「う」結尾，變為「わ」＋ない。' },
            { text: '吸{す}うない', reason: '錯誤：五段動詞字尾 う -> わ。' },
            { text: '吸{す}いない', reason: '錯誤：五段動詞字尾不是變為 い。' },
            { text: '吸{す}ない', reason: '錯誤：少了一個音節。' }
        ],
        correctIndex: 0,
        tag: 'nai',
        correctRule: '【五段動詞否定】字尾是「う」的五段動詞，否定形要變為「わ」段 (不規則，不是あ)。「吸う」→「吸わない」。'
    },
    {
        id: 'n5_nai_2_fixed',
        prob: '時間{じかん}がありますから、______でください。',
        prob_zh: '還有時間，請______ (不要急)。',
        level: 'N5',
        options: [
            { text: '急{いそ}がない', reason: '正確！「急ぐ」字尾是濁音「ぐ」，所以ない形也要濁音「が」。' },
            { text: '急{いそ}ぐない', reason: '錯誤：五段動詞字尾規則錯誤。' },
            { text: '急{いそ}ぎない', reason: '錯誤：那是連用形。' },
            { text: '急{いそ}げない', reason: '錯誤：那是可能形否定 (不能急)。' }
        ],
        correctIndex: 0,
        tag: 'nai',
        correctRule: '【五段動詞否定】「ぐ」結尾的動詞，變段到「a段」時要保留濁音，「ぐ」→「が」。所以是「急がない」。'
    },
    // --- Potential Form ---
    {
        id: 'n5_pot_1',
        prob: '私{わたし}は漢字{かんじ}が______。',
        prob_zh: '我______漢字 (會寫/能寫)。',
        level: 'N5',
        options: [
            { text: '書{か}けます', reason: '正確！「書く」的可能形是「書ける」。' },
            { text: '書{か}われます', reason: '錯誤：被動形的誤用。' },
            { text: '書{か}きます', reason: '錯誤：這是「寫」，不是「會寫」。' },
            { text: '書{か}られます', reason: '錯誤：受身形的誤用。' }
        ],
        correctIndex: 0,
        tag: 'potential',
        correctRule: '【可能形】五段動詞規則是將字尾的「u段」改為「e段」＋る (書く → 書け → 書ける)。表示能力的有無。'
    },
    // --- False Ichidan Traps ---
    {
        id: 'n5_trap_1',
        prob: '家{うち}へ______。',
        prob_zh: '______家 (回去)。',
        level: 'N5',
        options: [
            { text: '帰{かえ}ります', reason: '正確！「帰る」是例外的五段動詞。' },
            { text: '帰{かえ}ます', reason: '錯誤：陷阱！「帰る」是五段動詞，不是一段。' },
            { text: '帰{かえ}っています', reason: '錯誤：時態語意不對。' },
            { text: '帰{かえ}るます', reason: '錯誤：文法錯誤。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '【例外五段動詞】「帰る」雖然看起來像一段動詞 (er-u)，但其實是五段動詞。所以必須活用為「帰ります」，而不是去ru。'
    },
    {
        id: 'n5_trap_2',
        prob: '那個新聞{しんぶん}を______いますか？',
        prob_zh: '你知曉那個新聞嗎？',
        level: 'N5',
        options: [
            { text: '知{し}って', reason: '正確！「知る」是例外的五段動詞。' },
            { text: '知{し}て', reason: '錯誤：陷阱！「知る」是五段動詞，促音便。' },
            { text: '知{し}いて', reason: '錯誤：五段動詞不發音イ音便。' },
            { text: '知{し}りて', reason: '錯誤：古文用法。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '【例外五段動詞】「知る」看起來像一段 (i-ru)，但它是五段。字尾「る」的五段動詞，te形變化為促音便「って」。'
    },
    // --- SOP Expanded N5 Batch ---
    // 1. 買う (Kau)
    {
        id: 'n5_gen_kau_1',
        prob: '昨日{きのう}、新{あたら}しい本{ほん}を______。',
        prob_zh: '昨天 *買了* 新書。',
        level: 'N5',
        options: [
            { text: '買{か}いました', reason: '正確！五段動詞「買う」的過去式。' },
            { text: '買{か}ります', reason: '錯誤：這是現在式，與「昨日」不符。' },
            { text: '買{か}いた', reason: '錯誤：這是常體，雖然時態對但通常考試考ます形變化。' },
            { text: '買{か}えませんでした', reason: '錯誤：這是可能形的否定。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '昨天買了新書。 \n【過去式】五段動詞「買う」(kau) 的連用形是「買い」，加上過去否定「ました」。'
    },
    {
        id: 'n5_gen_kau_2',
        prob: '安{やす}ければ、______と思{おも}います。',
        prob_zh: '如果便宜的話，就打算 *買*。',
        level: 'N5',
        options: [
            { text: '買{か}おう', reason: '正確！意向形 + と思います 表示打算。' },
            { text: '買{か}えば', reason: '錯誤：這是條件形。' },
            { text: '買{か}って', reason: '錯誤：這是TE形。' },
            { text: '買{か}う', reason: '錯誤：辭書形不接「と思います」來表達意志。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '如果便宜的話，就打算買。 \n【意向形】五段動詞「買う」的意向形是「買おう」(ka-o-u)。搭配「～と思っています」表示說話者的意志。'
    },
    // 2. 飲む (Nomu)
    {
        id: 'n5_gen_nomu_1',
        prob: 'お酒{さけ}を ______ すぎないでください。',
        prob_zh: '請不要 *喝* 太多酒。',
        level: 'N5',
        options: [
            { text: '飲{の}み', reason: '正確！ます形去masu + すぎる 表示「過度」。' },
            { text: '飲{の}む', reason: '錯誤：接續錯誤。' },
            { text: '飲{の}んで', reason: '錯誤：接續錯誤。' },
            { text: '飲{の}ま', reason: '錯誤：接續錯誤。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '請不要喝太多酒。 \n【複合動詞】動詞ます形 (去masu) 加上「～すぎる」表示程度過重。'
    },
    {
        id: 'n5_gen_nomu_2',
        prob: '薬{くすり}を ______ から、寝{ね}ます。',
        prob_zh: ' *吃(喝)* 藥之後就睡覺。',
        level: 'N5',
        options: [
            { text: '飲{の}んで', reason: '正確！TE形 + から 表示動作的先後順序。' },
            { text: '飲{の}んだ', reason: '錯誤：時態錯誤。' },
            { text: '飲{の}みます', reason: '錯誤：接續錯誤。' },
            { text: '飲{の}み', reason: '錯誤：單獨連用形不能接から。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '吃藥之後就睡覺。 \n【て形】五段動詞「飲む」(nomu) 字尾為 mu，發生撥音便變為「飲んで」。注意日文中喝藥、抽菸都用「飲む / 吸う」而非「食べ」。'
    },
    // 3. 話す (Hanasu)
    {
        id: 'n5_gen_hanasu_1',
        prob: '日本語{にほんご}で______ ください。',
        prob_zh: '請用日語 *說話*。',
        level: 'N5',
        options: [
            { text: '話{はな}して', reason: '正確！「話す」是 su 結尾，TE形變為 site。' },
            { text: '話{はな}った', reason: '錯誤：誤用了促音便。' },
            { text: '話{はな}い', reason: '錯誤：誤用了イ音便。' },
            { text: '話{はな}し', reason: '錯誤：接續錯誤。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請用日語說話。 \n【て形】五段動詞「話す」(hanasu) 字尾是 su，te形變為「話して」。注意 su 結尾的五段動詞不發生促音或撥音便。'
    },
    {
        id: 'n5_gen_hanasu_2',
        prob: 'もっとゆっくり ______ いただけませんか？',
        prob_zh: '能不能請您再 *說* 得慢一點？',
        level: 'N5',
        options: [
            { text: '話{はな}して', reason: '正確！TE形 + いただけませんか 是鄭重的請求。' },
            { text: '話{はな}し', reason: '錯誤：接續錯誤。' },
            { text: '話{はな}そう', reason: '錯誤：意向形。' },
            { text: '話{はな}せ', reason: '錯誤：命令形。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '能不能請您再說得慢一點？ \n【請求】「～ていただけませんか」是請求他人做某事的高級表現。'
    },
    // 4. 聞く (Kiku)
    {
        id: 'n5_gen_kiku_1',
        prob: '日本{にほん}の音楽{おんがく}をよく ______。',
        prob_zh: '常 *聽* 日本音樂。',
        level: 'N5',
        options: [
            { text: '聞{き}きます', reason: '正確！表示習慣的現在式。' },
            { text: '聞{き}きって', reason: '錯誤：拼寫錯誤。' },
            { text: '聞{き}く', reason: '錯誤：雖然語法對，但此題考ます形。' },
            { text: '聞{き}いて', reason: '錯誤：TE形單獨用。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '常聽日本音樂。 \n【現在式】五段動詞「聞く」的連用形「聞き」加「ます」。可以用於表示習慣或未來的動作。'
    },
    {
        id: 'n5_gen_kiku_2',
        prob: '先生{せんせい}に ______ みましょう。',
        prob_zh: '去 *問問* 看老師吧。',
        level: 'N5',
        options: [
            { text: '聞{き}いて', reason: '正確！TE形 + みる 表示嘗試。' },
            { text: '聞{き}きて', reason: '錯誤：忘記了イ音便。' },
            { text: '聞{き}かない', reason: '錯誤：否定形。' },
            { text: '聞{き}こう', reason: '錯誤：意向形。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '去問問看老師吧。 \n【音便】五段動詞「聞く」(kiku) 字尾是 ku，發生イ音便，TE形變為「聞いて」。'
    },
    // 5. 泳ぐ (Oyogu)
    {
        id: 'n5_gen_oyogu_1',
        prob: '冬{ふゆ}の海{うみ}で ______ ことができません。',
        prob_zh: '不能在冬天的海裡 *游泳*。',
        level: 'N5',
        options: [
            { text: '泳{およ}ぐ', reason: '正確！辭書形 + ことができる 表示能力。' },
            { text: '泳{およ}ぎ', reason: '錯誤：接續錯誤。' },
            { text: '泳{およ}げ', reason: '錯誤：可能形不能再接ことができる。' },
            { text: '泳{およ}いだ', reason: '錯誤：時態不對。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '不能在冬天的海裡游泳。 \n【可能】「辭書形 + ことができる」是 N5 學習能力的標準句型。'
    },
    {
        id: 'n5_gen_oyogu_2',
        prob: '昨日{きのう}はたくさん ______。',
        prob_zh: '昨天 *游泳* 游了很久。',
        level: 'N5',
        options: [
            { text: '泳{およ}ぎました', reason: '正確！過去式。' },
            { text: '泳{およ}ぎます', reason: '錯誤：現在式。' },
            { text: '泳{およ}げました', reason: '錯誤：可能過去式(能游過)。' },
            { text: '泳{およ}いて', reason: '錯誤：忘記了 gu 要變為 ide。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '昨天游泳游了很久。 \n【過去式】五段動詞「泳ぐ」變為「泳ぎました」。'
    },
    // 6. 待つ (Matsu)
    {
        id: 'n5_gen_matsu_1',
        prob: 'ここで10分{じゅっぷん} ______ ください。',
        prob_zh: '請在這裡 *等* 十分鐘。',
        level: 'N5',
        options: [
            { text: '待{ま}って', reason: '正確！tsu結尾發生促音便。' },
            { text: '待{ま}ち', reason: '錯誤：接續錯誤。' },
            { text: '待{ま}た', reason: '錯誤：接續錯誤。' },
            { text: '待{ま}い', reason: '錯誤：誤用音便。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請在這裡等十分鐘。 \n【音便】五段動詞「待つ」(matsu) 字尾是 tsu，發生促音便變為「待って」。'
    },
    {
        id: 'n5_gen_matsu_2',
        prob: '雨{あめ}が止{や}むのを ______ います。',
        prob_zh: '正在 *等* 雨停。',
        level: 'N5',
        options: [
            { text: '待{ま}って', reason: '正確！TE形 + います 表示正在進行。' },
            { text: '待{ま}ち', reason: '錯誤：接續錯誤。' },
            { text: '待{ま}た', reason: '錯誤：接續錯誤。' },
            { text: '待{ま}て', reason: '錯誤：命令形。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '正在等雨停。 \n【進行式】「～ている」表示動作正在進行。'
    },
    // 7. 死ぬ (Shinu)
    {
        id: 'n5_gen_shinu_1',
        prob: 'あそこに虫{むし}が ______ います。',
        prob_zh: '那裡有一隻昆蟲 *死* 了。',
        level: 'N5',
        options: [
            { text: '死{し}んで', reason: '正確！nu結尾發生撥音便。' },
            { text: '死{し}に', reason: '錯誤：接續錯誤。' },
            { text: '死{し}な', reason: '錯誤：接續錯誤。' },
            { text: '死{し}って', reason: '錯誤：誤用音便。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '那裡有一隻昆蟲死了。 \n【音便】五段動詞「死ぬ」(shinu) 是日文中唯一的 nu 結尾動詞，te形變為撥音便「死んで」。注意這裡表示狀態。'
    },
    {
        id: 'n5_gen_shinu_2',
        prob: '植物{しょくぶつ}に水{みず}をやらないと、______。',
        prob_zh: '不給植物澆水的話，會 *死(枯萎)*。',
        level: 'N5',
        options: [
            { text: '死{し}にます', reason: '正確！現在式/未來式。' },
            { text: '死{し}なない', reason: '錯誤：意思相反。' },
            { text: '死{し}にない', reason: '錯誤：變化錯誤。' },
            { text: '死{し}ぬ', reason: '錯誤：雖然是常體，但此題優選敬體。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '不給植物澆水的話，會死。 \n【活用】動詞現在式表示必然的結果或未來的行為。'
    },
    // 8. 遊ぶ (Asobu)
    {
        id: 'n5_gen_asobu_1',
        prob: '公園{こうえん}で ______ ましょう。',
        prob_zh: '我們去公園 *玩* 吧。',
        level: 'N5',
        options: [
            { text: '遊{あそ}び', reason: '正確！連用形 + ましょう 表示提議。' },
            { text: '遊{あそ}ぶ', reason: '錯誤：接續錯誤。' },
            { text: '遊{あそ}んで', reason: '錯誤：接續錯誤。' },
            { text: '遊{あそ}ぼ', reason: '錯誤：雖然有意志感，但接續不完整。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '我們去公園玩吧。 \n【勸誘】「～ましょう」用於提議一起做某事，接在動詞連用形(ます形去masu)之後。'
    },
    {
        id: 'n5_gen_asobu_2',
        prob: 'たくさん ______ 楽{たの}しかったです。',
        prob_zh: ' *玩* 了很多，非常開心。',
        level: 'N5',
        options: [
            { text: '遊{あそ}んで', reason: '正確！TE形可用於連接原因。' },
            { text: '遊{あそ}び', reason: '錯誤：接續錯誤。' },
            { text: '遊{あそ}ばない', reason: '錯誤：意思相反。' },
            { text: '遊{あそ}んだ', reason: '錯誤：雖然可以修飾，但這裡用TE形較自然。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '玩了很多，非常開心。 \n【音便】五段動詞「遊ぶ」(asobu) 字尾是 bu，發生撥音便變為「遊んで」。'
    },
    // 9. 取る (Toru)
    {
        id: 'n5_gen_toru_1',
        prob: '写真{しゃしん}を ______ ください。',
        prob_zh: '請 *幫忙拍照*。',
        level: 'N5',
        options: [
            { text: '撮{と}って', reason: '正確！ru結尾發生促音便。' },
            { text: '撮{と}り', reason: '錯誤：接續錯誤。' },
            { text: '撮{と}ら', reason: '錯誤：接續錯誤。' },
            { text: '撮{と}な', reason: '錯誤：不存在的變化。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請幫忙拍照。 \n【音便】五段動詞「撮る」(toru) 字尾是 ru，發生促音便變為「撮って」。'
    },
    {
        id: 'n5_gen_toru_2',
        prob: '辞書{じしょ}を ______ もいいですか？',
        prob_zh: '可以 *拿* 字典嗎？',
        level: 'N5',
        options: [
            { text: '取{と}って', reason: '正確！TE形 + もいい 表示許可。' },
            { text: '取{と}り', reason: '錯誤：接續錯誤。' },
            { text: '取{と}わ', reason: '錯誤：變化錯誤。' },
            { text: '取{と}う', reason: '錯誤：變化錯誤。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '可以拿字典嗎？ \n【許可】「～てもいい」是請求許可的句型。'
    },
    // 10. 帰る (Kaeru)
    {
        id: 'n5_gen_kaeru_1',
        prob: 'もうすぐ家{うち}へ ______。',
        prob_zh: '很快就要 *回家* 了。',
        level: 'N5',
        options: [
            { text: '帰{かえ}ります', reason: '正確！「帰る」是例外五段，ます形是「帰ります」。' },
            { text: '帰{かえ}ます', reason: '錯誤：陷阱！「帰る」不是一段動詞。' },
            { text: '分{わ}かれます', reason: '錯誤：這是「分手/分離」。' },
            { text: '帰{かえ}るます', reason: '錯誤：文法錯誤。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '很快就要回家了。 \n【重要例外】「帰る」(kaeru) 是 N5 最著名的例外五段動詞。雖然結尾是 eru，但它的連用形是「帰り」。'
    },
    {
        id: 'n5_gen_kaeru_2',
        prob: '早{はや}く ______ ください。',
        prob_zh: '請早點 *回家*。',
        level: 'N5',
        options: [
            { text: '帰{かえ}って', reason: '正確！例外五段同樣發生促音便。' },
            { text: '帰{かえ}て', reason: '錯誤：陷阱！如果是二類動詞才是不音便。' },
            { text: '帰{かえ}り', reason: '錯誤：接續錯誤。' },
            { text: '帰{かえ}れ', reason: '錯誤：命令形。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請早點回家。 \n【音便】作為五段動詞，「帰る」在變換為 te 形時，字尾 ru 發生促音便變成「帰って」。'
    }
]
