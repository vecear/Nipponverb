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
    },
    // --- SOP Expanded N5 Batch 2 & 3 ---
    // 1. 入る (Hairu)
    {
        id: 'n5_v1399_hairu_1',
        prob: '部屋{へや}に ______。',
        prob_zh: ' *進入* 房間。',
        level: 'N5',
        options: [
            { text: '入{はい}ります', reason: '正確！五段動詞。' },
            { text: '入{い}れます', reason: '錯誤：那是他動詞(放入)。' },
            { text: '入{はい}り', reason: '正確！(連用)' },
            { text: '入{はい}って', reason: '正確！(音便)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '進入房間。 \n【活用】「入る」(hairu) 是五段動詞，ます形為「入ります」。'
    },
    {
        id: 'n5_v1399_hairu_2',
        prob: 'お風呂{ふろ}に ______。',
        prob_zh: ' *洗* 澡(進入浴缸)。',
        level: 'N5',
        options: [
            { text: '入{はい}ります', reason: '正確！洗澡的慣用搭配。' },
            { text: '入{はい}って', reason: '正確！' },
            { text: '浴{あ}びます', reason: '正確！(淋浴用浴びる)' },
            { text: '入{い}れます', reason: '錯誤：他動詞。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '洗澡。 \n【用法】「お風呂に入る」是日文洗澡的標準說法。'
    },
    // 2. 止まる (Tomaru)
    {
        id: 'n5_v1399_tomaru_1',
        prob: '車{くるま}が ______。',
        prob_zh: '車子 *停* 了下來。',
        level: 'N5',
        options: [
            { text: '止{と}まりました', reason: '正確！五段自動詞。' },
            { text: '止{と}めました', reason: '錯誤：這是人把車停下來(他動詞)。' },
            { text: '止{と}まって', reason: '正確！' },
            { text: '終{お}わりました', reason: '錯誤：結束。' }
        ],
        correctIndex: 0,
        tag: 'transitive',
        correctRule: '車子停了下來。 \n【自他動詞】「止まる」(自動) vs 「止める」(他動)。'
    },
    {
        id: 'n5_v1399_tomaru_2',
        prob: '時計{とけい}が ______ います。',
        prob_zh: '時鐘 *停* 了。',
        level: 'N5',
        options: [
            { text: '止{と}まって', reason: '正確！自動詞狀態持續。' },
            { text: '止{と}めて', reason: '錯誤：他動詞。' },
            { text: '切{き}れて', reason: '正確！(斷掉/沒電)' },
            { text: '止{と}まり', reason: '錯誤：接續。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '時鐘停了。 \n【活用】五段動詞「止まる」促音便。'
    },
    // 3. 弾く (Hiku - play)
    {
        id: 'n5_v1399_hiku_p_1',
        prob: 'ピアノを ______。',
        prob_zh: ' *彈* 鋼琴。',
        level: 'N5',
        options: [
            { text: '弾{ひ}きます', reason: '正確！五段動詞。' },
            { text: '弾{ひ}いて', reason: '正確！(音便)' },
            { text: '弾{ひ}き', reason: '正確！(連用)' },
            { text: '弾{ひ}か', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '彈鋼琴。 \n【活用】「弾く」(hiku) 是五段動詞。'
    },
    {
        id: 'n5_v1399_hiku_p_2',
        prob: 'ギターを ______ ください。',
        prob_zh: '請 *彈* 吉他。',
        level: 'N5',
        options: [
            { text: '弾{ひ}いて', reason: '正確！五段動詞 i 音便。' },
            { text: '弾{ひ}か', reason: '錯誤：否定。' },
            { text: '弾{ひ}き', reason: '錯誤：接續。' },
            { text: '引{ひ}いて', reason: '錯誤：漢字誤用(那是拉/抽)。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請彈吉他。 \n【音便】五段動詞結尾「く」變為「いて」。'
    },
    // 4. 作る (Tsukuru)
    {
        id: 'n5_v1399_tsukuru_1',
        prob: '晩{ばん}ご飯{ごはん}を ______。',
        prob_zh: ' *做* 晚飯。',
        level: 'N5',
        options: [
            { text: '作{つく}ります', reason: '正確！五段動詞。' },
            { text: '作{つく}り', reason: '正確！(連用)' },
            { text: '作{つく}って', reason: '正確！(音便)' },
            { text: '造{ぞう}ります', reason: '錯誤：漢字層次不同(大型建築用)。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '做晚飯。 \n【活用】「作る」(tsukuru) 是五段動詞。'
    },
    {
        id: 'n5_v1399_tsukuru_2',
        prob: 'これ、私{わたし}が ______ 料理{りょうり}です。',
        prob_zh: '這是這是我 *做* 的料理。',
        level: 'N5',
        options: [
            { text: '作{つく}った', reason: '正確！五段動詞過去式促音便。' },
            { text: '作{つく}ります', reason: '正確！(但此處修飾名詞，過去式更自然)' },
            { text: '作{つく}り', reason: '錯誤：接續錯誤。' },
            { text: '作{つく}て', reason: '錯誤：音便不完整。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '這是我做的料理。 \n【音便】五段動詞結尾「る」變為「った」。'
    },
    // 5. 言う (Iu)
    {
        id: 'n5_v1399_iu_1',
        prob: '本当{ほんとう}のことを ______。',
        prob_zh: ' *說* 實話。',
        level: 'N5',
        options: [
            { text: '言{い}います', reason: '正確！五段動詞。' },
            { text: '言{い}い', reason: '正確！(連用)' },
            { text: '言{い}って', reason: '正確！(音便)' },
            { text: '話{はな}します', reason: '正確！(說話，但短句表達用「言う」)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '說實話。 \n【活用】「言う」(iu) 是五段動詞。'
    },
    {
        id: 'n5_v1399_iu_2',
        prob: '名前{なまえ}を ______ ください。',
        prob_zh: '請 *說出* 名字。',
        level: 'N5',
        options: [
            { text: '言{い}って', reason: '正確！五段動詞促音便。' },
            { text: '言{い}わ', reason: '錯誤：否定。' },
            { text: '話{はな}して', reason: '正確！(交談)' },
            { text: '言{い}え', reason: '錯誤：命令。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請說出名字。 \n【音便】五段動詞結尾「う」變為「って」。'
    },
    // 6. 引く (Hiku - pull)
    {
        id: 'n5_v1399_hiku_1',
        prob: '風邪{かぜ}を ______。',
        prob_zh: ' *感冒* (拉到了感冒)。',
        level: 'N5',
        options: [
            { text: '引{ひ}きました', reason: '正確！感冒的慣用搭配。' },
            { text: '引{ひ}き', reason: '正確！' },
            { text: '飲{の}みました', reason: '錯誤：那是吃藥。' },
            { text: '引{ひ}き', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '感冒了。 \n【語義】「風邪を引く」是固定用法。'
    },
    {
        id: 'n5_v1399_hiku_2',
        prob: 'ドアを ______ ください。',
        prob_zh: '請 *拉* 門。',
        level: 'N5',
        options: [
            { text: '引{ひ}いて', reason: '正確！五段動詞 i 音便。' },
            { text: '押{お}して', reason: '正確！(那是推)' },
            { text: '引{ひ}き', reason: '錯誤：接續。' },
            { text: '引{ひ}か', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '請拉門。 \n【音便】五段動詞「引く」(hiku) 變為「引いて」。'
    },
    // 7. 持つ (Motsu)
    {
        id: 'n5_v1399_motsu_1',
        prob: '荷物{にもつ}を ______。',
        prob_zh: ' *拿* 行李。',
        level: 'N5',
        options: [
            { text: '持{も}ちます', reason: '正確！五段動詞。' },
            { text: '持{も}って', reason: '正確！' },
            { text: '持{も}ち', reason: '正確！(連用)' },
            { text: '持{も}た', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '拿行李。 \n【活用】「持つ」(motsu) 是五段動詞。'
    },
    {
        id: 'n5_v1399_motsu_2',
        prob: '今{いま}、お宝{たから}を ______ います。',
        prob_zh: '現在正 *持有(拿著)* 寶物。',
        level: 'N5',
        options: [
            { text: '持{も}って', reason: '正確！持有狀態的持續。' },
            { text: '持{も}ち', reason: '錯誤：接續。' },
            { text: '待{ま}って', reason: '錯誤：那是等待。' },
            { text: '持{も}た', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '現在正持有寶物。 \n【活用】五段動詞「持つ」促音便。'
    },
    // 8. 吸う (Suu)
    {
        id: 'n5_v1399_suu_1',
        prob: 'タバコを ______。',
        prob_zh: ' *抽* 菸。',
        level: 'N5',
        options: [
            { text: '吸{す}います', reason: '正確！五段動詞。' },
            { text: '吸{す}って', reason: '正確！(音便)' },
            { text: '吸{す}い', reason: '正確！(連用)' },
            { text: '吐{は}きます', reason: '錯誤：吐出。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '抽菸。 \n【活用】「吸う」(suu) 是五段動詞。'
    },
    {
        id: 'n5_v1399_suu_2',
        prob: '空気{くうき}を ______ ください。',
        prob_zh: '請 *呼吸* 空氣。',
        level: 'N5',
        options: [
            { text: '吸{す}って', reason: '正確！五段動詞促音便。' },
            { text: '吸{す}い', reason: '錯誤：接續。' },
            { text: '吸{す}わ', reason: '錯誤：否定。' },
            { text: '吐{は}いて', reason: '正確！(呼氣)' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請呼吸空氣。 \n【音便】五段動詞結尾「う」變為「って」。'
    },
    // 9. 閉める (Shimeru)
    {
        id: 'n5_v1399_shimeru_1',
        prob: '窓{まど}を ______。',
        prob_zh: ' *關* 窗戶。',
        level: 'N5',
        options: [
            { text: '閉{し}めます', reason: '正確！一段他動詞。' },
            { text: '閉{し}まって', reason: '錯誤：自動詞(關著)。' },
            { text: '閉{し}め', reason: '正確！(連用)' },
            { text: '開{あ}けます', reason: '錯誤：那是打開。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '關窗戶。 \n【自他動詞】「閉める」(他動) vs 「閉まる」(自動)。'
    },
    {
        id: 'n5_v1399_shimeru_2',
        prob: '最後{さいご}に、鍵{かぎ}を ______。',
        prob_zh: '最後， *鎖上* 鎖。',
        level: 'N5',
        options: [
            { text: '閉{し}めます', reason: '正確！鎖門的動作。' },
            { text: '締{し}めます', reason: '正確！(備註: 打領帶或綁緊才用這個漢字)' },
            { text: '掛{か}けます', reason: '正確！(常用搭配: 鍵を掛ける)' },
            { text: '選{えら}び', reason: '錯誤：選擇。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '鎖上鎖。 \n【用法】雖然常用「鍵を掛ける」，但「閉める」在日常中也可用於表示關閉並鎖上的狀態。'
    },
    // --- SOP Expanded N5 Batch 3 ---
    // 10. 見る (Miru)
    {
        id: 'n5_v1399_miru_1',
        prob: 'テレビを ______。',
        prob_zh: ' *看* 電視。',
        level: 'N5',
        options: [
            { text: '見{み}ます', reason: '正確！一段動詞。' },
            { text: '見{み}て', reason: '正確！(TE形)' },
            { text: '見{み}られ', reason: '錯誤：可能/受身。' },
            { text: '見{み}よう', reason: '錯誤：意向形。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '看電視。 \n【活用】「見る」(miru) 是一段動詞。'
    },
    {
        id: 'n5_v1399_miru_2',
        prob: '昨日{きのう}、映画{えいが}を ______。',
        prob_zh: '昨天 *看* 了電影。',
        level: 'N5',
        options: [
            { text: '見{み}ました', reason: '正確！一段語尾去「る」加「ました」。' },
            { text: '見{み}った', reason: '錯誤：促音便是五段動詞。' },
            { text: '見{み}た', reason: '正確！(常體)' },
            { text: '見{み}る', reason: '錯誤：時態錯誤。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '昨天看了電影。 \n【活用】一段動詞的中頓/過去式不發生音便。'
    },
    // 11. 開く (Hiraku)
    {
        id: 'n5_v1399_hiraku_1',
        prob: '本{ほん}を ______ ください。',
        prob_zh: '請 *打開* 書。',
        level: 'N5',
        options: [
            { text: '開{ひら}いて', reason: '正確！五段動詞 i 音便。' },
            { text: '開{ひら}き', reason: '正確！(連用)' },
            { text: '開{あ}けて', reason: '正確！(他動詞開ける)' },
            { text: '開{ひら}いた', reason: '錯誤：過去式。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請打開書。 \n【音便】五段動詞「開く」結尾「く」發生 i 音便。'
    },
    {
        id: 'n5_v1399_hiraku_2',
        prob: '花{はな}が ______。',
        prob_zh: '花 *開* 了。',
        level: 'N5',
        options: [
            { text: '開{ひら}きました', reason: '正確！五段ます過去式。' },
            { text: '開{あ}きました', reason: '正確！(但在開花語境中 hiraku 更常用)' },
            { text: '開{ひら}いて', reason: '錯誤：接續錯誤。' },
            { text: '開{あ}けて', reason: '錯誤：那是他動詞。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '花開了。 \n【語義】「開く」(hiraku) 常用於花朵綻放、展開書本或雨傘。'
    },
    // 12. 会う (Au)
    {
        id: 'n5_v1399_au_1',
        prob: '駅{えき}で友達{ともだち}に ______。',
        prob_zh: '在車站和朋友 *見面*。',
        level: 'N5',
        options: [
            { text: '会{あ}います', reason: '正確！五段動詞。' },
            { text: '会{あ}いて', reason: '錯誤：促音便應為「あって」。' },
            { text: '会{あ}わ', reason: '錯誤：否定。' },
            { text: '会{あ}え', reason: '錯誤：可能/命令。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '在車站和朋友見面。 \n【活用】「会う」(au) 是五段動詞。注意其 te 形為「あって」。'
    },
    {
        id: 'n5_v1399_au_2',
        prob: '昨日{きのう}、先生{せんせい}に ______。',
        prob_zh: '昨天 *遇見* 了老師。',
        level: 'N5',
        options: [
            { text: '会{あ}いました', reason: '正確！五段ます過去式。' },
            { text: '会{あ}った', reason: '正確！(常體)' },
            { text: '会{あ}いた', reason: '錯誤：音便錯誤。' },
            { text: '見{み}ました', reason: '錯誤：語義不同(看到)。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '昨天遇見了老師。 \n【活用】五段動詞「会う」連用形為「会い」。'
    },
    // 13. 書く (Kaku)
    {
        id: 'n5_v1399_kaku_1',
        prob: '手紙{てがみ}を ______。',
        prob_zh: ' *寫* 信。',
        level: 'N5',
        options: [
            { text: '書{か}きます', reason: '正確！五段動詞。' },
            { text: '書{か}いて', reason: '正確！(TE形)' },
            { text: '書{か}き', reason: '正確！(連用)' },
            { text: '書{か}こ', reason: '錯誤：未完成。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '寫信。 \n【活用】「書く」(kaku) 是五段動詞。'
    },
    {
        id: 'n5_v1399_kaku_2',
        prob: '名前{なまえ}を ______ ください。',
        prob_zh: '請 *寫* 下名字。',
        level: 'N5',
        options: [
            { text: '書{か}いて', reason: '正確！五段動詞 i 音便。' },
            { text: '書{か}き', reason: '錯誤：連用不接ください。' },
            { text: '書{か}いた', reason: '錯誤：過去式。' },
            { text: '書{か}け', reason: '錯誤：可能/命令。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請寫下名字。 \n【音便】五段動詞結尾「く」變為「いて」。'
    },
    // 14. 聞く (Kiku)
    {
        id: 'n5_v1399_kiku_1',
        prob: '音楽{おんがく}を ______。',
        prob_zh: ' *聽* 音樂。',
        level: 'N5',
        options: [
            { text: '聞{き}きます', reason: '正確！五段動詞。' },
            { text: '聞{き}いて', reason: '正確！(TE形)' },
            { text: '聞{き}き', reason: '正確！(連用)' },
            { text: '聞{き}こえ', reason: '錯誤：這是可能形(聽得到)。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '聽音樂。 \n【活用】「聞く」(kiku) 是五段動詞。'
    },
    {
        id: 'n5_v1399_kiku_2',
        prob: '先生{せんせい}に ______ ください。',
        prob_zh: '請 *詢問* 老師。',
        level: 'N5',
        options: [
            { text: '聞{き}いて', reason: '正確！' },
            { text: '聞{き}き', reason: '錯誤：接續。' },
            { text: '話{はな}して', reason: '錯誤：那是交談。' },
            { text: '見{み}て', reason: '錯誤：那是看。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '請詢問老師。 \n【語義】「聞く」除了聽，也表示詢問。'
    },
    // 15. 泳ぐ (Oyogu)
    {
        id: 'n5_v1399_oyogu_1',
        prob: '海{うみ}で ______。',
        prob_zh: '在海裡 *游泳*。',
        level: 'N5',
        options: [
            { text: '泳{およ}ぎます', reason: '正確！五段動詞。' },
            { text: '泳{およ}いで', reason: '正確！(TE形)' },
            { text: '泳{およ}ぎ', reason: '正確！(連用)' },
            { text: '泳{およ}が', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '在海裡游泳。 \n【活用】「泳ぐ」(oyogu) 是五段動詞。'
    },
    {
        id: 'n5_v1399_oyogu_2',
        prob: '昨日{きのう}、200メートル ______。',
        prob_zh: '昨天 *游* 了200公尺。',
        level: 'N5',
        options: [
            { text: '泳{およ}ぎました', reason: '正確！五段ます過去式。' },
            { text: '泳{およ}いだ', reason: '正確！(常體，濁音便)' },
            { text: '泳{およ}いた', reason: '錯誤：結尾是「ぐ」應變為「いで」。' },
            { text: '泳{およ}き', reason: '錯誤：清濁誤用。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '昨天游了200公尺。 \n【音便】五段動詞結尾「ぐ」發生濁音便「いで」或過法「いだ」。'
    },
    // 16. 遊ぶ (Asobu)
    {
        id: 'n5_v1399_asobu_1',
        prob: '公園{こうえん}で ______。',
        prob_zh: '在公園 *玩*。',
        level: 'N5',
        options: [
            { text: '遊{あそ}びます', reason: '正確！五段動詞。' },
            { text: '遊{あそ}んで', reason: '正確！(TE形)' },
            { text: '遊{あそ}び', reason: '正確！(連用)' },
            { text: '滑{すべ}り', reason: '錯誤：那是溜走。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '在公園玩。 \n【活用】「遊ぶ」(asobu) 是五段動詞。'
    },
    {
        id: 'n5_v1399_asobu_2',
        prob: '一緒{いっしょ}に ______ ましょう！',
        prob_zh: '一起 *玩* 吧！',
        level: 'N5',
        options: [
            { text: '遊{あそ}び', reason: '正確！連用形接ましょう。' },
            { text: '遊{あそ}ん', reason: '錯誤：促音便不接。' },
            { text: '遊{あそ}べ', reason: '錯誤：命令。' },
            { text: '遊{あそ}ぼ', reason: '正確！(常體意向)' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '一起玩吧！ \n【提議】「～ましょう」接在動詞連用形之後。'
    },
    // 17. 待つ (Matsu)
    {
        id: 'n5_v1399_matsu_1',
        prob: '少々{しょうしょう} ______ ください。',
        prob_zh: '請 *稍等* 片刻。',
        level: 'N5',
        options: [
            { text: '待{ま}って', reason: '正確！五段動詞促音便。' },
            { text: '待{ま}ち', reason: '錯誤：接續錯誤。' },
            { text: '待{ま}た', reason: '錯誤：否定。' },
            { text: '待{ま}て', reason: '錯誤：命令。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請稍等片刻。 \n【音便】五段動詞結尾「つ」變為「って」。'
    },
    {
        id: 'n5_v1399_matsu_2',
        prob: 'ここでお父{とう}さんを ______ います。',
        prob_zh: '正在這裡 *等* 爸爸。',
        level: 'N5',
        options: [
            { text: '待{ま}って', reason: '正確！進行中的動作。' },
            { text: '待{ま}ち', reason: '正確！(連用)' },
            { text: '持{も}って', reason: '錯誤：那是拿。' },
            { text: '待{ま}た', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '正在這裡等爸爸。 \n【を活用】五段動詞「待つ」促音便。'
    },
    // 18. 呼ぶ (Yobu)
    {
        id: 'n5_v1399_yobu_1',
        prob: 'タクシーを ______。',
        prob_zh: ' *叫* 計程車。',
        level: 'N5',
        options: [
            { text: '呼{よ}びます', reason: '正確！五段動詞。' },
            { text: '呼{よ}んで', reason: '正確！(TE形)' },
            { text: '読{よ}み', reason: '錯誤：那是讀。' },
            { text: '及{及}び', reason: '錯誤：字字誤用。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '叫計程車。 \n【活用】「呼ぶ」(yobu) 與 「読む」(yomu) 讀音相似，注意區分。'
    },
    {
        id: 'n5_v1399_yobu_2',
        prob: '田中{たなか}さんを ______ ください。',
        prob_zh: '請 *呼叫* 田中先生。',
        level: 'N5',
        options: [
            { text: '呼{よ}んで', reason: '正確！五段動詞撥音便。' },
            { text: '呼{よ}ん', reason: '正確！(撥音)' },
            { text: '呼{よ}ば', reason: '錯誤：否定。' },
            { text: '呼{よ}べ', reason: '錯誤：命令。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請呼叫田中先生。 \n【音便】五段動詞結尾「ぶ」變為「んで」。'
    },
    // 19. 休む (Yasumu)
    {
        id: 'n5_v1399_yasumu_1',
        prob: '今日{きょう}は会社{かいしゃ}を ______。',
        prob_zh: '今天向公司 *請假*。',
        level: 'N5',
        options: [
            { text: '休{やす}みます', reason: '正確！「休む」可表示休息或請假、曠工。' },
            { text: '休{やす}んで', reason: '正確！(TE形)' },
            { text: '休{やす}ませ', reason: '錯誤：使役形。' },
            { text: '止{と}め', reason: '錯誤：停止。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '今天向公司請假。 \n【活用】「休む」(yasumu) 是五段動詞。'
    },
    {
        id: 'n5_v1399_yasumu_2',
        prob: '少{すこ}し ______ ましょう。',
        prob_zh: '稍微 *休息* 一下吧。',
        level: 'N5',
        options: [
            { text: '休{やす}み', reason: '正確！連用形。' },
            { text: '休{やす}む', reason: '錯誤：辭書形不接。' },
            { text: '休{やす}ま', reason: '錯誤：否定。' },
            { text: '休{やす}ん', reason: '錯誤：音便不接。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '稍微休息一下吧。 \n【提議】動詞連用形 + ましょう。'
    },
    // --- SOP Expanded N5 Batch 4 ---
    // 1. 買う (Kau)
    {
        id: 'n5_v1399_kau_1',
        prob: 'スーパーでりんごを ______。',
        prob_zh: '在超市 *買* 蘋果。',
        level: 'N5',
        options: [
            { text: '買{か}います', reason: '正確！五段動詞。' },
            { text: '買{か}いました', reason: '正確！(過去)' },
            { text: '買{か}って', reason: '正確！(音便)' },
            { text: '買{か}わ', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '在超市買蘋果。 \n【活用】「買う」(kau) 是五段動詞。'
    },
    {
        id: 'n5_v1399_kau_2',
        prob: '昨日{きのう}、新{あたら}しい本{ほん}を ______。',
        prob_zh: '昨天 *買* 了新書。',
        level: 'N5',
        options: [
            { text: '買{か}いました', reason: '正確！五段ます過去式。' },
            { text: '買{か}いた', reason: '錯誤：音便應為「買った」。' },
            { text: '買{か}った', reason: '正確！(常體)' },
            { text: '買{か}い', reason: '錯誤：接續。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '昨天買了新書。 \n【音便】五段動詞結尾「う」變為「った」。'
    },
    // 2. 売る (Uru)
    {
        id: 'n5_v1399_uru_1',
        prob: '店{みせ}でパンを ______。',
        prob_zh: '在店裡 *賣* 麵包。',
        level: 'N5',
        options: [
            { text: '売{う}っています', reason: '正確！表示店鋪正在販售的狀態。' },
            { text: '売{う}ります', reason: '正確！(將要賣)' },
            { text: '売{う}り', reason: '正確！(連用)' },
            { text: '売{う}れ', reason: '錯誤：可能/命令。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '在店裡賣麵包。 \n【活用】「売る」(uru) 是五段動詞。'
    },
    {
        id: 'n5_v1399_uru_2',
        prob: '古{ふる}い車{くるま}を ______ ました。',
        prob_zh: ' *賣* 了舊車。',
        level: 'N5',
        options: [
            { text: '売{う}り', reason: '正確！五段連用形。' },
            { text: '売{う}', reason: '錯誤：變化錯誤。' },
            { text: '売{う}っ', reason: '錯誤：音便不接。' },
            { text: '買{か}い', reason: '錯誤：那是買。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '賣了舊車。 \n【活用】「売る」連用形。'
    },
    // 3. 貸す (Kasu)
    {
        id: 'n5_v1399_kasu_1',
        prob: '友達{ともだち}にペンを ______。',
        prob_zh: ' *借給* 朋友筆。',
        level: 'N5',
        options: [
            { text: '貸{か}します', reason: '正確！五段動詞。指向他人借出。' },
            { text: '借{か}ります', reason: '錯誤：那是向他人借入。' },
            { text: '貸{か}して', reason: '正確！' },
            { text: '貸{か}さ', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '借給朋友筆。 \n【自他辨析】「貸す」(kasu, 借出) vs 「借りる」(kariru, 借入)。'
    },
    {
        id: 'n5_v1399_kasu_2',
        prob: '傘{かさ}を ______ ください。',
        prob_zh: '請 *借(出)* 傘給我。',
        level: 'N5',
        options: [
            { text: '貸{か}して', reason: '正確！五段動詞促音便。注意結尾是「す」所以變為「して」。' },
            { text: '借{か}りて', reason: '錯誤：變成請對方借錢/借東西(向他人)。' },
            { text: '貸{か}し', reason: '錯誤：接續。' },
            { text: '貸{か}した', reason: '錯誤：時態。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請借傘給我。 \n【音便】五段動詞結尾「す」變為「して」。'
    },
    // 4. 借りる (Kariru)
    {
        id: 'n5_v1399_kariru_1',
        prob: '図書館{としょかん}で本{ほん}を ______。',
        prob_zh: '在圖書館 *借* 書。',
        level: 'N5',
        options: [
            { text: '借{か}ります', reason: '正確！一段動詞。指向他人借入。' },
            { text: '貸{か}します', reason: '錯誤：那是借出。' },
            { text: '借{か}り', reason: '正確！' },
            { text: '借{か}りて', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '在圖書館借書。 \n【活用】「借りる」(kariru) 是一段動詞。'
    },
    {
        id: 'n5_v1399_kariru_2',
        prob: 'お金{かね}を ______ ました。',
        prob_zh: ' *借* 了錢。',
        level: 'N5',
        options: [
            { text: '借{か}り', reason: '正確！一段連用形。' },
            { text: '借{か}りっ', reason: '錯誤：一段動詞不發生音便。' },
            { text: '借{か}ら', reason: '錯誤：變化錯誤。' },
            { text: '貸{か}し', reason: '錯誤：那是借出。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '借了錢。 \n【活用】一段動詞的中頓/過去式不音便。'
    },
    // 5. 死ぬ (Shinu)
    {
        id: 'n5_v1399_shinu_1',
        prob: '魚{さかな}が ______。',
        prob_zh: '魚 *死* 了。',
        level: 'N5',
        options: [
            { text: '死{し}にました', reason: '正確！五段動詞。' },
            { text: '死{し}んだ', reason: '正確！(常體撥音便)' },
            { text: '死{し}に', reason: '正確！(連用)' },
            { text: '死{し}ね', reason: '錯誤：命令。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '魚死了。 \n【活用】「死ぬ」(shinu) 是 N5 唯一的ぬ動詞。'
    },
    {
        id: 'n5_v1399_shinu_2',
        prob: ' ______ ないでください。',
        prob_zh: '請不要 *死*。',
        level: 'N5',
        options: [
            { text: '死{し}な', reason: '正確！五段未然形。' },
            { text: '死{し}に', reason: '錯誤：接續。' },
            { text: '死{し}ぬ', reason: '錯誤：接續。' },
            { text: '死{し}ね', reason: '錯誤：命令。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '請不要死。 \n【否定】「ないでください」接在動詞未然形後。'
    },
    // 6. 住む (Sumu)
    {
        id: 'n5_v1399_sumu_1',
        prob: '日本{にっぽん}に ______ います。',
        prob_zh: ' *住* 在日本。',
        level: 'N5',
        options: [
            { text: '住{す}んで', reason: '正確！五段撥音便。表示居住狀態的持續。' },
            { text: '住{す}み', reason: '正確！(連用)' },
            { text: '住{す}む', reason: '錯誤：接續。' },
            { text: '住{す}ま', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '住在日本。 \n【音便】五段動詞結尾「む」變為「んで」。'
    },
    {
        id: 'n5_v1399_sumu_2',
        prob: 'どこに ______ いたいですか？',
        prob_zh: '想要 *住* 在哪裡呢？',
        level: 'N5',
        options: [
            { text: '住{す}んで', reason: '正確！居住狀態的欲求。' },
            { text: '住{す}み', reason: '正確！(直接動作欲求)' },
            { text: '住{す}みた', reason: '錯誤：接續。' },
            { text: '住{す}ぼ', reason: '錯誤：變化。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '想要住在哪裡呢？ \n【活用】「住む」連用或撥音便視語境而定。'
    },
    // 7. 座る (Suwaru)
    {
        id: 'n5_v1399_suwaru_1',
        prob: '椅子{いす}に ______ ください。',
        prob_zh: '請 *坐* 在椅子上。',
        level: 'N5',
        options: [
            { text: '座{すわ}って', reason: '正確！五段促音便。' },
            { text: '座{すわ}り', reason: '錯誤：接續。' },
            { text: '立{た}って', reason: '錯誤：那是站。' },
            { text: '座{すわ}った', reason: '錯誤：過去式。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請坐在椅子上。 \n【音便】五段動詞結尾「る」變為「って」。'
    },
    {
        id: 'n5_v1399_suwaru_2',
        prob: 'ここ、 ______ もいいですか？',
        prob_zh: '這裡可以 *坐* 嗎？',
        level: 'N5',
        options: [
            { text: '座{すわ}って', reason: '正確！促音便表示許可。' },
            { text: '座{すわ}り', reason: '錯誤：接續。' },
            { text: '入{はい}って', reason: '錯誤：那是進來。' },
            { text: '立{た}って', reason: '錯誤：那是站。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '這裡可以坐嗎？ \n【許可】「～てもいい」是詢問許可。'
    },
    // 8. 立つ (Tatsu)
    {
        id: 'n5_v1399_tatsu_1',
        prob: ' ______ ください。',
        prob_zh: '請 *站* 起來。',
        level: 'N5',
        options: [
            { text: '立{た}って', reason: '正確！五段促音便。' },
            { text: '座{すわ}って', reason: '錯誤：那是坐。' },
            { text: '立{た}ち', reason: '錯誤：接續。' },
            { text: '立{た}つ', reason: '錯誤：接續。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請站起來。 \n【音便】五段動詞結尾「つ」變為「って」。'
    },
    {
        id: 'n5_v1399_tatsu_2',
        prob: '門{もん}の前{まえ}に ______ います。',
        prob_zh: '正 *站* 在門前。',
        level: 'N5',
        options: [
            { text: '立{た}って', reason: '正確！表示站立狀態。' },
            { text: '立{た}ち', reason: '錯誤：接續。' },
            { text: '座{すわ}って', reason: '錯誤：那是坐。' },
            { text: '立{た}た', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '正站在門前。 \n【活用】五段動詞「立つ」促音便。'
    },
    // 9. 飛ぶ (Tobu)
    {
        id: 'n5_v1399_tobu_1',
        prob: '鳥{とり}が空{そら}を ______。',
        prob_zh: '鳥在空中 *飛*。',
        level: 'N5',
        options: [
            { text: '飛{と}びます', reason: '正確！五段動詞。' },
            { text: '飛{と}んで', reason: '正確！(撥音便)' },
            { text: '飛{と}び', reason: '正確！(連用)' },
            { text: '泳{およ}ぎます', reason: '錯誤：那是游。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '鳥在空中飛。 \n【活用】「飛ぶ」(tobu) 是五段動詞。'
    },
    {
        id: 'n5_v1399_tobu_2',
        prob: '飛行機{ひこうき}が上{うえ}を ______ いきました。',
        prob_zh: '飛機從上方 *飛* 過去了。',
        level: 'N5',
        options: [
            { text: '飛{と}んで', reason: '正確！五段撥音便。' },
            { text: '飛{と}び', reason: '錯誤：接續。' },
            { text: '通{とお}って', reason: '正確！(通過，但飛機用飛更具體)' },
            { text: '飛{と}ば', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '飛機從上方飛過去了。 \n【音便】五段動詞結尾「ぶ」變為「んで」。'
    },
    // 10. 撮る (Toru)
    {
        id: 'n5_v1399_toru_1',
        prob: '写真{しゃしん}を ______。',
        prob_zh: ' *照* 相。',
        level: 'N5',
        options: [
            { text: '撮{と}ります', reason: '正確！五段動詞。專用於攝影。' },
            { text: '取{と}ります', reason: '正確！(雖然讀音相同，但拿東西用「取」)' },
            { text: '撮{と}って', reason: '正確！(音便)' },
            { text: '撮{と}り', reason: '正確！(連用)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '照相。 \n【漢字辨析】「撮る」(toru, 攝影) vs 「取る」(toru, 拿)。'
    },
    {
        id: 'n5_v1399_toru_2',
        prob: '一緒{いっしょ}に ______ ください。',
        prob_zh: '請一起 *拍照*。',
        level: 'N5',
        options: [
            { text: '撮{と}って', reason: '正確！五段促音便。' },
            { text: '撮{と}り', reason: '錯誤：接續。' },
            { text: '撮{と}ら', reason: '錯誤：否定。' },
            { text: '取{と}って', reason: '錯誤：漢字誤用。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請一起拍照。 \n【音便】五段動詞結尾「る」變為「って」。'
    },
    // --- SOP Expanded N5 Batch 5 ---
    // 1. 並ぶ (Narabu)
    {
        id: 'n5_v1399_narabu_1',
        prob: '銀行{ぎんこう}の前{まえ}に人{ひと}が ______ います。',
        prob_zh: '銀行門口有人在 ______。 (排隊)',
        level: 'N5',
        options: [
            { text: '並{なら}んで', reason: '正確！五段動詞「並ぶ」發生撥音便。' },
            { text: '並{なら}び', reason: '錯誤：接續不符。' },
            { text: '並{なら}べ', reason: '錯誤：那是「排列」(他動詞)。' },
            { text: '並{なら}ば', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '銀行前有人在排隊。 \n【自他動詞】「並ぶ」(自動詞，人排隊) vs 「並べる」(他動詞，人去排列東西)。'
    },
    {
        id: 'n5_v1399_narabu_2',
        prob: '皆{みな}さん、一列{いちれつ}に ______ ください。',
        prob_zh: '請大家 ______ 成一排。',
        level: 'N5',
        options: [
            { text: '並{なら}んで', reason: '正確！五段撥音便接「てください」。' },
            { text: '並{なら}び', reason: '正確！' },
            { text: '並{なら}ば', reason: '錯誤：否定。' },
            { text: '並{なら}べ', reason: '錯誤：他動詞。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請大家排成一排。 \n【活用】五段動詞「並ぶ」變為「並んで」。'
    },
    // 2. 渡る (Wataru)
    {
        id: 'n5_v1399_wataru_1',
        prob: '道{みち}を ______ 時{とき}は、氣{き}をつけて。',
        prob_zh: ' ______ 馬路時，請小心。 (過/穿越)',
        level: 'N5',
        options: [
            { text: '渡{わた}る', reason: '正確！五段辭書形修飾時。' },
            { text: '渡{わた}り', reason: '正確！' },
            { text: '渡{わた}って', reason: '正確！' },
            { text: '渡{わた}ら', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '過馬路時請小心。 \n【活用】五段動詞「渡る」(wataru) 表示橫切過移動空間。'
    },
    {
        id: 'n5_v1399_wataru_2',
        prob: '橋{はし}を ______ 向{む}こう側{がわ}へ行{い}きます。',
        prob_zh: ' ______ 橋到對面去。',
        level: 'N5',
        options: [
            { text: '渡{わた}って', reason: '正確！五段促音便接下一步動作。' },
            { text: '渡{わた}り', reason: '正確！' },
            { text: '渡{わた}る', reason: '錯誤：接續不順。' },
            { text: '渡{わた}し', reason: '錯誤：這是「遞交給人」(他動詞)。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '過橋到對面去。 \n【自他動詞】「渡る」(自動詞，自己過橋) vs 「渡す」(他動詞，遞東西給人)。'
    },
    // 3. 磨く (Migaku)
    {
        id: 'n5_v1399_migaku_1',
        prob: '飯{はん}を食{た}べた後{あと}で、歯{は}を ______。',
        prob_zh: '吃完飯後要 ______ 牙齒。 (刷)',
        level: 'N5',
        options: [
            { text: '磨{みが}きます', reason: '正確！五段動詞ます形。' },
            { text: '磨{みが}ぎます', reason: '錯誤：不需要濁音。' },
            { text: '磨{みが}くます', reason: '錯誤：ます不能接辭書形。' },
            { text: '磨{みが}え', reason: '錯誤：變化錯誤。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '吃完飯後要刷牙。 \n【活用】「磨く」(migaku) 是五段動詞，ます形變為「磨きます」。常用於指刷牙或磨亮物品。'
    },
    {
        id: 'n5_v1399_migaku_2',
        prob: '鏡{かがみ}をきれいに ______ ください。',
        prob_zh: '請把鏡子 ______ 乾淨。 (擦拭/磨)',
        level: 'N5',
        options: [
            { text: '磨{みが}いて', reason: '正確！五段動詞「く」變「いて」。' },
            { text: '磨{みが}い', reason: '錯誤：接續。' },
            { text: '磨{みが}き', reason: '錯誤：接續。' },
            { text: '磨{みが}いで', reason: '錯誤：發生依音便但不帶濁音。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請把鏡子擦拭乾淨。 \n【音便】五段動詞字尾為「く」時，變て形發生イ音便 (いて)。例如：「書く→書いて」、「磨く→磨いて」。'
    },
    // 4. 見せる (Miseru)
    {
        id: 'n5_v1399_miseru_1',
        prob: 'その写真{しゃしん}を ______ ください。',
        prob_zh: '請 ______ 我那張照片。 (給...看)',
        level: 'N5',
        options: [
            { text: '見{み}せて', reason: '正確！二類(一段)動詞直接去る＋て。' },
            { text: '見{み}て', reason: '錯誤：那是「看」(見)。' },
            { text: '見{み}して', reason: '錯誤：變位錯誤。' },
            { text: '見{み}られ', reason: '錯誤：這是可能形/被動形。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請給我看那張照片。 \n【自他動詞】「見る」(看) 與 「見せる」(給人看)。「見せる」是一段動詞。'
    },
    {
        id: 'n5_v1399_miseru_2',
        prob: '先生{せんせい}に宿題{しゅくだい}を ______。',
        prob_zh: '把作業 ______ 老師看。',
        level: 'N5',
        options: [
            { text: '見{み}せました', reason: '正確！一段動詞過去式。' },
            { text: '見{み}ました', reason: '錯誤：那是自己看完了作業。' },
            { text: '見{み}えて', reason: '錯誤：那是「看得見」(自動詞)。' },
            { text: '展示{てんじ}した', reason: '錯誤：通常指藝術品或大型展示。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '把作業拿給老師看。 \n【活用】第二類動詞 (一段) 直接去掉「る」加上「ました」。'
    },
    // 5. 生まれる (Umareru)
    {
        id: 'n5_v1399_umareru_1',
        prob: '去年{きょねん}、子供{こども}が ______。',
        prob_zh: '去年小孩 ______ 了。 (出生)',
        level: 'N5',
        options: [
            { text: '生{う}まれました', reason: '正確！一段自動詞。' },
            { text: '生{う}みました', reason: '錯誤：那是「生小孩」(他動詞)。' },
            { text: '生{う}まれ', reason: '正確！' },
            { text: '生{う}まる', reason: '錯誤：變位錯誤。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '去年小孩出生了。 \n【自他動詞】「生まれる」(自動詞，小孩出生) vs 「生む」(他動詞，人生小孩)。'
    },
    {
        id: 'n5_v1399_umareru_2',
        prob: '私{わたし}は台北{たいぺい}で ______ ました。',
        prob_zh: '我在台北 ______。',
        level: 'N5',
        options: [
            { text: '生{う}まれ', reason: '正確！一段動詞連用形。' },
            { text: '生{う}ま', reason: '錯誤：變化不全。' },
            { text: '生{う}まれ', reason: '正確！' },
            { text: '生{う}み', reason: '錯誤：他動詞。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '我在台北出生。 \n【活用】「生まれる」是一段動詞。'
    },
    // 6. 開ける (Akeru)
    {
        id: 'n5_v1399_akeru_1',
        prob: '暑{あつ}いから、窓{まど}を ______ ましょう。',
        prob_zh: '因為很熱，把窗戶 ______ 吧。 (打開)',
        level: 'N5',
        options: [
            { text: '開{あ}け', reason: '正確！一段動詞ます形去ます。' },
            { text: '開{あ}き', reason: '錯誤：自動詞。' },
            { text: '開{あ}いて', reason: '錯誤：自動詞。' },
            { text: '開{あ}か', reason: '錯誤：自動詞否定。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '因為很熱，把窗戶打開吧。 \n【自他動詞】「開ける」(他動詞，人去開) vs 「開く」(自動詞，物體開啟)。'
    },
    {
        id: 'n5_v1399_akeru_2',
        prob: 'その瓶{びん}を ______ ください。',
        prob_zh: '請 ______ 那個瓶子。 (打開)',
        level: 'N5',
        options: [
            { text: '開{あ}けて', reason: '正確！一段動詞去る加て。' },
            { text: '開{あ}いて', reason: '錯誤：自動詞。' },
            { text: '空{あ}けて', reason: '錯誤：漢字用法不同(表示空出空間)。' },
            { text: '明{あ}けて', reason: '錯誤：漢字用法不同(表示天亮)。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請打開那個瓶子。 \n【漢字】日語中 akeru 有不同漢字，「開ける」指打開、開啟蓋子或窗戶。'
    },
    // 7. 脫ぐ (Nugu)
    {
        id: 'n5_v1399_nugu_1',
        prob: 'ここらで靴{くつ}を ______ ください。',
        prob_zh: '請在這裡 ______ 鞋子。 (脫下)',
        level: 'N5',
        options: [
            { text: '脫{ぬ}いで', reason: '正確！五段動詞「ぐ」變「いで」。' },
            { text: '脫{ぬ}ぎ', reason: '正確！' },
            { text: '洗{あら}って', reason: '錯誤：洗鞋子。' },
            { text: '脫{ぬ}が', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請在這裡脫鞋。 \n【音便】五段動詞結尾「ぐ」發生イ音便變為「いで」。'
    },
    {
        id: 'n5_v1399_nugu_2',
        prob: '服{ふく}を ______ 入浴{にゅうよく}します。',
        prob_zh: ' ______ 衣服後去洗澡。 (脫掉)',
        level: 'N5',
        options: [
            { text: '脫{ぬ}いで', reason: '正確！五段イ音便。' },
            { text: '脫{ぬ}ぎ', reason: '正確！' },
            { text: '着{き}て', reason: '錯誤：語義相反(穿上)。' },
            { text: '脫{ぬ}ぐ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '脫掉衣服後去洗澡。 \n【活用】五段動詞「脫ぐ」。'
    },
    // 8. やる (Yaru)
    {
        id: 'n5_v1399_yaru_1',
        prob: '宿題{しゅくだい}を ______ ましたか？',
        prob_zh: '做完作業了 ______？ (做)',
        level: 'N5',
        options: [
            { text: 'やり', reason: '正確！五段ます形連用形。' },
            { text: 'やっ', reason: '錯誤：促音不接ます。' },
            { text: 'やら', reason: '錯誤：未然形。' },
            { text: 'やれ', reason: '錯誤：命令。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '做完作業了嗎？ \n【詞彙】「やる」在口語中常代替「する」，表示進行某動作、運動或玩遊戲。'
    },
    {
        id: 'n5_v1399_yaru_2',
        prob: '犬{いぬ}にえさを ______ ください。',
        prob_zh: '請 ______ 狗飼料。 (餵/給)',
        level: 'N5',
        options: [
            { text: 'やって', reason: '正確！五段動詞「る」變「って」。' },
            { text: 'あげて', reason: '正確！(但對動植物多用やる)' },
            { text: 'やり', reason: '錯誤：接續不足。' },
            { text: 'やって', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請餵狗吃飼料。 \n【用法】「やる」除了「做」，也用於對位階/地位低於自己的人、動植物「給予物資」。'
    },
    // 9. 並べる (Naraberu)
    {
        id: 'n5_v1399_naraberu_1',
        prob: '椅子{いす}をきれいに ______ ください。',
        prob_zh: '請把椅子整齊地 ______。 (排列)',
        level: 'N5',
        options: [
            { text: '並{なら}べて', reason: '正確！一段他動詞。' },
            { text: '並{なら}んで', reason: '錯誤：那是人去排隊(自動詞)。' },
            { text: '並{なら}べ', reason: '正確！' },
            { text: '並{なら}べな', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請把椅子整齊地排列。 \n【自他動詞】「並べる」(他動詞，人去排列東西) vs 「並ぶ」(自動詞，人去排隊)。助詞「を」選他動詞。'
    },
    {
        id: 'n5_v1399_naraberu_2',
        prob: '机{つくえ}の上{うえ}に本{ほん}を ______。',
        prob_zh: '在桌子上 ______ 書本。',
        level: 'N5',
        options: [
            { text: '並{なら}べました', reason: '正確！一段動詞連用形。' },
            { text: '並{なら}びました', reason: '錯誤：自動詞用法不當。' },
            { text: '置{お}きました', reason: '正確！(放)' },
            { text: '並{なら}べ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '在桌子上排列了書。 \n【活用】一段動詞「並べる」。'
    },
    // 10. 読む (Yomu)
    {
        id: 'n5_v1399_yomu_1',
        prob: '每日{まいにち}、新問{しんぶん}を ______。',
        prob_zh: '每天 ______ 報紙。 (讀)',
        level: 'N5',
        options: [
            { text: '読{よ}みます', reason: '正確！五段詞尾變「み」。' },
            { text: '読{よ}んで', reason: '正確！(現在)' },
            { text: '読{よ}み', reason: '正確！(連用)' },
            { text: '読{よ}ま', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '每天讀報紙。 \n【活用】「読む」為五段動詞，意為閱讀、理解文字內容。'
    },
    {
        id: 'n5_v1399_yomu_2',
        prob: '本{ほん}を ______ から、寢{ね}ます。',
        prob_zh: ' ______ 完書之後，再睡覺。',
        level: 'N5',
        options: [
            { text: '読{よ}んで', reason: '正確！五段撥音便。' },
            { text: '読{よ}み', reason: '錯誤：接續。' },
            { text: '見{み}て', reason: '錯誤：漢字不對。' },
            { text: '読{よ}られ', reason: '錯誤：被動。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '讀完書之後再睡覺。 \n【音便】五段動詞字尾為「む」時，變て形發生撥音便 (んで)。例如：「読む→読んで」、「飲む→飲んで」。'
    },
    // --- SOP Expanded N5 Batch 6 (Systematic Coverage) ---
    // 1. 浴びる (Abiru)
    {
        id: 'n5_v1399_abiru_1',
        prob: '毎朝{まいあさ}、シャワーを ______。',
        prob_zh: '每天早上都要 ______ 淋浴。',
        level: 'N5',
        options: [
            { text: '浴{あ}びます', reason: '正確！一段動詞。' },
            { text: '浴{あ}びります', reason: '錯誤：變位錯誤。' },
            { text: '浴{あ}ぶます', reason: '錯誤：變位錯誤。' },
            { text: '浴{あ}べます', reason: '錯誤：那是可能形。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '每天早上洗澡。 \n【用法】「シャワーを浴びる」是固定搭配。一段動詞去「る」加「ます」。'
    },
    {
        id: 'n5_v1399_abiru_2',
        prob: '海{うみ}で日光{にっこう}を ______。',
        prob_zh: '在海邊 ______ 日光。 (沐浴)',
        level: 'N5',
        options: [
            { text: '浴{あ}びました', reason: '正確！' },
            { text: '浴{あ}びて', reason: '正確！' },
            { text: '浴{あ}び', reason: '正確！' },
            { text: '浴{あ}びる', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '在海邊沐浴日光。 \n【語義】除了洗澡，也可以用於沐浴在光、灰塵、讚美或批評等。'
    },
    // 2. 洗う (Arau)
    {
        id: 'n5_v1399_arau_1',
        prob: 'ご飯{はん}の前{まえ}に、手{て}を ______ ましょう。',
        prob_zh: '吃飯之前 ______ 手吧。',
        level: 'N5',
        options: [
            { text: '洗{あら}い', reason: '正確！五段動詞變ます形。' },
            { text: '洗{あら}わ', reason: '錯誤：否定。' },
            { text: '洗{あら}え', reason: '錯誤：命令。' },
            { text: '洗{あら}お', reason: '錯誤：意向。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '飯前洗手吧。 \n【活用】五段動詞「洗う」變為連用形「洗い」接「ましょう」。'
    },
    {
        id: 'n5_v1399_arau_2',
        prob: '昨日{きのう}、車{くるま}を ______。',
        prob_zh: '昨天 ______ 了車。',
        level: 'N5',
        options: [
            { text: '洗{あら}いました', reason: '正確！' },
            { text: '洗{あら}って', reason: '正確！' },
            { text: '洗{あら}わ', reason: '錯誤：否定。' },
            { text: '洗{あら}う', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '昨天洗了車。 \n【活用】五段動詞。'
    },
    // 3. 歩く (Aruku)
    {
        id: 'n5_v1399_aruku_1',
        prob: '駅{えき}まで ______ 行{い}きます。',
        prob_zh: ' ______ 去車站。 (走路)',
        level: 'N5',
        options: [
            { text: '歩{ある}いて', reason: '正確！五段動詞「く」發生イ音便。' },
            { text: '歩{ある}き', reason: '正確！' },
            { text: '歩{ある}か', reason: '錯誤：接續不符。' },
            { text: '歩{ある}け', reason: '錯誤：可能。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '走路去車站。 \n【活用】五段動詞「歩く」變為て形發生イ音便「歩いて」。'
    },
    {
        id: 'n5_v1399_aruku_2',
        prob: '毎日{まいにち}、一時間{いちじかん} ______ います。',
        prob_zh: '每天 ______ 一個小時。',
        level: 'N5',
        options: [
            { text: '步{ある}いて', reason: '正確！' },
            { text: '步{ある}き', reason: '正確！' },
            { text: '步{ある}か', reason: '正確！' },
            { text: '步{ある}く', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '每天走一個小時。 \n【活用】表示動作的持續。'
    },
    // 4. 入れる (Ireru)
    {
        id: 'n5_v1399_ireru_1',
        prob: 'コーヒーに砂糖{さとう}を ______。',
        prob_zh: '在咖啡裡 ______ 糖。 (放入)',
        level: 'N5',
        options: [
            { text: '入{い}れます', reason: '正確！一段他動詞。' },
            { text: '入{はい}ります', reason: '錯誤：那是自動詞(進入)。' },
            { text: '入{い}れ', reason: '正確！' },
            { text: '入{い}れな', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '在咖啡裡加糖。 \n【自他動詞】「入れる」(他動詞，人放進去) vs 「入る」(自動詞，進入)。'
    },
    {
        id: 'n5_v1399_ireru_2',
        prob: 'バッグに財布{さいふ}を ______ ください。',
        prob_zh: '請把錢包 ______ 到包包裡。',
        level: 'N5',
        options: [
            { text: '入{い}れて', reason: '正確！一段去る加て。' },
            { text: '入{い}れ', reason: '正確！' },
            { text: '入{はい}って', reason: '錯誤：自動詞。' },
            { text: '入{い}ろ', reason: '錯誤：變位錯誤。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請把錢包放進包包。 \n【活用】一段動詞「入れる」。'
    },
    // 5. 歌う (Utau)
    {
        id: 'n5_v1399_utau_1',
        prob: 'みんなで歌{うた}を ______ ましょう。',
        prob_zh: '大家一起 ______ 歌吧。',
        level: 'N5',
        options: [
            { text: '歌{うた}い', reason: '正確！五段連用形。' },
            { text: '歌{うた}わ', reason: '錯誤：不接ましょう。' },
            { text: '歌{うた}え', reason: '錯誤：可能。' },
            { text: '歌{うた}お', reason: '正確！(意向形，但不接ましょう)' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '大家一起唱歌吧。 \n【活用】五段動詞「歌う」→「歌います」。'
    },
    {
        id: 'n5_v1399_utau_2',
        prob: '彼女{かのじょ}は歌{うた}を ______ います。',
        prob_zh: '她正在 ______ 歌。',
        level: 'N5',
        options: [
            { text: '歌{うた}って', reason: '正確！五段促音便。' },
            { text: '歌{うた}い', reason: '正確！' },
            { text: '歌{うた}わ', reason: '正確！' },
            { text: '歌{うた}う', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '她正在唱歌。 \n【活用】五段動詞字尾「う」變促音便「って」。'
    },
    // 6. 起きる (Okiru)
    {
        id: 'n5_v1399_okiru_1',
        prob: '明日{あした}は六時{ろくじ}に ______。',
        prob_zh: '明天六點 ______。 (起床)',
        level: 'N5',
        options: [
            { text: '起{お}きます', reason: '正確！一段動詞。' },
            { text: '起{お}きります', reason: '錯誤：變位錯誤。' },
            { text: '起{お}こします', reason: '錯誤：那是「叫醒」(他動詞)。' },
            { text: '起{お}き', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '明天六點起床。 \n【自他動詞】「起きる」(自動詞，起床/發生) vs 「起こす」(他動詞，叫醒/引起)。'
    },
    {
        id: 'n5_v1399_okiru_2',
        prob: 'まだ ______ いますか。',
        prob_zh: '還 ______ 著嗎？ (沒睡)',
        level: 'N5',
        options: [
            { text: '起{お}きて', reason: '正確！一段去る加て。' },
            { text: '起{お}き', reason: '正確！' },
            { text: '起{お}こして', reason: '錯誤：叫醒。' },
            { text: '起{お}きら', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '還醒著嗎？ \n【活用】一段動詞「起きる」。'
    },
    // 7. 置く (Oku)
    {
        id: 'n5_v1399_oku_1',
        prob: 'そこに荷物{にもつ}を ______ ください。',
        prob_zh: '請在那裡 ______ 行李。 (放置)',
        level: 'N5',
        options: [
            { text: '置{お}いて', reason: '正確！五段イ音便。' },
            { text: '置{お}き', reason: '正確！' },
            { text: '置{お}か', reason: '錯誤：未然形。' },
            { text: '置{お}け', reason: '錯誤：命令。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請在那裡放行李。 \n【活用】五段動詞結尾「く」發生イ音便「いて」。'
    },
    {
        id: 'n5_v1399_oku_2',
        prob: '本棚{ほんだな}に本{ほん}を ______ ました。',
        prob_zh: '在書架上 ______ 了書。',
        level: 'N5',
        options: [
            { text: '置{お}き', reason: '正確！五段連用形。' },
            { text: '置{お}い', reason: '錯誤：變位錯誤。' },
            { text: '置{お}か', reason: '正確！' },
            { text: '置{お}け', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '在書架上放了書。 \n【活用】五段動詞「置く」。'
    },
    // 8. 教える (Oshieru)
    {
        id: 'n5_v1399_oshieru_1',
        prob: '日本語{にほんご}を ______ います。',
        prob_zh: '正在 ______ 日語。 (教導)',
        level: 'N5',
        options: [
            { text: '教{おし}えて', reason: '正確！一段動詞。' },
            { text: '教{おそ}わって', reason: '錯誤：那是「受教」(自動詞方向)。' },
            { text: '教{おし}え', reason: '正確！' },
            { text: '教{おし}えな', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '正教日語。 \n【自他動詞】「教える」(教導) vs 「教わる」(學習/受教)。'
    },
    {
        id: 'n5_v1399_oshieru_2',
        prob: '電號番號{でんわばんごう}を ______ ください。',
        prob_zh: '請 ______ 我電話號碼。 (告訴)',
        level: 'N5',
        options: [
            { text: '教{おし}えて', reason: '正確！一段去る加て。' },
            { text: '教{おし}え', reason: '正確！' },
            { text: '教{おし}えま', reason: '錯誤：接續。' },
            { text: '教{おし}えな', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請告訴我電話號碼。 \n【活用】一段動詞「教える」。'
    },
    // 9. 押す (Osu)
    {
        id: 'n5_v1399_osu_1',
        prob: 'このボタンを ______ と、水{みず}が出{で}ます。',
        prob_zh: ' ______ 這個按鈕，水就會出來。 (按)',
        level: 'N5',
        options: [
            { text: '押{お}す', reason: '正確！五段辭書形接と。' },
            { text: '押{お}し', reason: '正確！' },
            { text: '押{お}さ', reason: '錯誤：否定。' },
            { text: '押{お}せ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '按這個按鈕水會出來。 \n【活用】五段動詞「押す」(osu)。'
    },
    {
        id: 'n5_v1399_osu_2',
        prob: '後ろ{うしろ}から ______ ないでください。',
        prob_zh: '請不要從後面 ______。 (推)',
        level: 'N5',
        options: [
            { text: '押{お}さ', reason: '正確！五段未然形。' },
            { text: '押{お}し', reason: '正確！' },
            { text: '押{お}し', reason: '正確！' },
            { text: '押{お}す', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'negative',
        correctRule: '請不要從後面推。 \n【活用】五段動詞未然形接「ないで」。'
    },
    // 10. 覚える (Oboeru)
    {
        id: 'n5_v1399_oboeru_1',
        prob: '漢字{かんじ}を ______ のは難{むずか}しいです。',
        prob_zh: ' ______ 漢字很難。 (記住)',
        level: 'N5',
        options: [
            { text: '覚{おぼ}える', reason: '正確！一段動詞辭書形。' },
            { text: '覚{おぼ}え', reason: '正確！' },
            { text: '覚{おぼ}え', reason: '正確！' },
            { text: '覚{おぼ}えた', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '記漢字很難。 \n【活用】一段動詞「覚える」。'
    },
    {
        id: 'n5_v1399_oboeru_2',
        prob: '昨日{きのう}のことは ______ いません。',
        prob_zh: '昨天的事已經不 ______ 了。 (記得)',
        level: 'N5',
        options: [
            { text: '覚{おぼ}えて', reason: '正確！一段去る加て。表示狀態。' },
            { text: '覚{おぼ}え', reason: '正確！' },
            { text: '思{おも}って', reason: '錯誤：那是「想」。' },
            { text: '忘{わす}れて', reason: '錯誤：那是「忘記」。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '不記得昨天的事了。 \n【語義】「覚えている」表示持續記住的狀態。'
    },
    // 11. 降りる (Oriru)
    {
        id: 'n5_v1399_oriru_1',
        prob: '次{つぎ}の駅{えき}で ______ ます。',
        prob_zh: '要在下一站 ______。 (下車)',
        level: 'N5',
        options: [
            { text: '降{お}り', reason: '正確！一段動詞。' },
            { text: '降{お}ろ', reason: '錯誤：那是「放下/取錢」(他動詞)。' },
            { text: '下{さ}がり', reason: '錯誤：那是下垂/減少。' },
            { text: '降{お}りら', reason: '錯誤：變位錯誤。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '在下一站下車。 \n【自他動詞】「降りる」(自動詞，下車) vs 「降ろす」(他動詞，下貨/讓某人下車)。'
    },
    {
        id: 'n5_v1399_oriru_2',
        prob: '階段{かいだん}を ______ います。',
        prob_zh: '正在 ______ 樓梯。',
        level: 'N5',
        options: [
            { text: '降{お}りて', reason: '正確！一段去る加て。' },
            { text: '降{お}り', reason: '正確！' },
            { text: '降{お}ろして', reason: '正確！' },
            { text: '降{お}りら', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '正在下樓梯。 \n【活用】一段動詞「降りる」。'
    },
    // 12. 返す (Kaesu)
    {
        id: 'n5_v1399_kaesu_1',
        prob: '図書館{としょかん}に本{ほん}を ______。',
        prob_zh: '把書 ______ 圖書館。 (歸還)',
        level: 'N5',
        options: [
            { text: '返{かえ}します', reason: '正確！五段動詞。' },
            { text: '借{か}ります', reason: '錯誤：那是「借」。' },
            { text: '返{かえ}して', reason: '正確！' },
            { text: '返{かえ}ら', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '還書。 \n【方向】「返す」(還給別人) vs 「借りる」(借進來)。'
    },
    {
        id: 'n5_v1399_kaesu_2',
        prob: '明日{あした}までに ______ ください。',
        prob_zh: '請在明天之前 ______。',
        level: 'N5',
        options: [
            { text: '返{かえ}して', reason: '正確！五段促音便。' },
            { text: '返{かえ}し', reason: '正確！' },
            { text: '返{かえ}さ', reason: '正確！' },
            { text: '返{かえ}す', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請還給我。 \n【活用】五段動詞。'
    },
    // 13. 消える (Kieru)
    {
        id: 'n5_v1399_kieru_1',
        prob: 'テレビが急{きゅう}に ______。',
        prob_zh: '電視突然 ______ 了。 (消失/熄滅)',
        level: 'N5',
        options: [
            { text: '消{き}えました', reason: '正確！一段自動詞。' },
            { text: '消{け}しました', reason: '錯誤：那是「關掉」(他動詞)。' },
            { text: '消{き}え', reason: '正確！' },
            { text: '消{き}ゆ', reason: '錯誤：古文。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '電視突然熄滅了。 \n【自他動詞】「消える」(自動詞，燈滅了) vs 「消す」(他動詞，人去關燈)。'
    },
    {
        id: 'n5_v1399_kieru_2',
        prob: '足跡{あしあと}が ______ しまいました。',
        prob_zh: '足跡 ______ 了。 (完全消失)',
        level: 'N5',
        options: [
            { text: '消{き}えて', reason: '正確！一段去る加て。' },
            { text: '消{き}え', reason: '正確！' },
            { text: '消{け}して', reason: '正確！' },
            { text: '消{き}えら', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '足跡消失了。 \n【活用】一段動詞「消える」。'
    },
    // 14. 聞こえる (Kikoeru)
    {
        id: 'n5_v1399_kikoeru_1',
        prob: '隣{となり}の部屋{へや}から聲{こえ}が ______。',
        prob_zh: '從隔壁房間 ______ 聲音。 (自然聽到)',
        level: 'N5',
        options: [
            { text: '聞{き}こえます', reason: '正確！一段自動詞。' },
            { text: '聞{き}きます', reason: '錯誤：那是主動去聽。' },
            { text: '聞{き}こえ', reason: '正確！' },
            { text: '聞{き}け', reason: '錯誤：那是能力形(聽得到)。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '聽到隔壁房間傳來的聲音。 \n【語義】「聞こえる」指聲音傳入耳中 (自然)；「聞く」指人主動去聽。'
    },
    {
        id: 'n5_v1399_kikoeru_2',
        prob: '音楽{おんがく}が ______ きます。',
        prob_zh: '音樂 ______ 過來。',
        level: 'N5',
        options: [
            { text: '聞{き}こえて', reason: '正確！一段去る加て。' },
            { text: '聞{き}こえ', reason: '正確！' },
            { text: '聞{き}いて', reason: '正確！' },
            { text: '聞{き}こえら', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '音樂傳了過來。 \n【活用】一段動詞「聞こえる」。'
    },
    // 15. 困る (Komaru)
    {
        id: 'n5_v1399_komaru_1',
        prob: 'お金{かね}がなくて ______ います。',
        prob_zh: '因為沒錢而很 ______。 (困擾)',
        level: 'N5',
        options: [
            { text: '困{こま}って', reason: '正確！五段促音便。' },
            { text: '困{こま}り', reason: '正確！' },
            { text: '困{こま}な', reason: '錯誤：變位錯誤。' },
            { text: '困{こま}ら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '因為沒錢很困擾。 \n【活用】五段動詞「困る」變為促音便「困って」。'
    },
    {
        id: 'n5_v1399_komaru_2',
        prob: '雨{あめ}が降{ふ}ったら ______ な。',
        prob_zh: '要是下雨就 ______ 了呢。',
        level: 'N5',
        options: [
            { text: '困{こま}る', reason: '正確！五段辭書形。' },
            { text: '困{こま}り', reason: '正確！' },
            { text: '困{こま}っ', reason: '正確！' },
            { text: '困{こま}ら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '要是下雨就麻煩了。 \n【語義】表示陷入為難或不知所措的境地。'
    },
    // 16. 咲く (Saku)
    {
        id: 'n5_v1399_saku_1',
        prob: '庭{にわ}に花{はな}が ______ います。',
        prob_zh: '院子裡花兒正在 ______。 (盛開)',
        level: 'N5',
        options: [
            { text: '咲{さ}いて', reason: '正確！五段イ音便。' },
            { text: '咲{さ}き', reason: '正確！' },
            { text: '咲{さ}か', reason: '錯誤：否定。' },
            { text: '咲{さ}け', reason: '錯誤：命令。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '院子裡花開了。 \n【活用】五段動詞「咲く」變為イ音便「咲いて」。'
    },
    {
        id: 'n5_v1399_saku_2',
        prob: '春{はる}になるとさくらが ______。',
        prob_zh: '一到春天櫻花就 ______。',
        level: 'N5',
        options: [
            { text: '咲{さ}きます', reason: '正確！五段連用形。' },
            { text: '咲{さ}き', reason: '正確！' },
            { text: '咲{さ}い', reason: '錯誤：變位錯誤。' },
            { text: '咲{さ}く', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '到春天櫻花會開。 \n【活用】五段動詞。'
    },
    // 17. かかる (Kakaru)
    {
        id: 'n5_v1399_kakaru_1',
        prob: '家{いえ}から学校{がっこう}まで30分{さんじゅっぷん} ______。',
        prob_zh: '從家裡到學校要 ______ 30分鐘。 (花費時間)',
        level: 'N5',
        options: [
            { text: 'かかります', reason: '正確！五段動詞。' },
            { text: 'かかり', reason: '正確！' },
            { text: 'かけて', reason: '錯誤：他動詞。' },
            { text: 'かから', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '花費時間。 \n【を活用】五段動詞「かかる」。'
    },
    {
        id: 'n5_v1399_kakaru_2',
        prob: 'お金{かね}が ______。',
        prob_zh: ' ______ 錢。 (花錢)',
        level: 'N5',
        options: [
            { text: 'かかります', reason: '正確！常用於時間或金錢的花費。' },
            { text: 'かかり', reason: '正確！' },
            { text: 'かけて', reason: '正確！' },
            { text: 'かかる', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '花錢。 \n【活用】五段動詞。'
    },
    // 18. 知る (Shiru)
    {
        id: 'n5_v1399_shiru_1',
        prob: '彼{かれ}のことを ______ いますか。',
        prob_zh: '你 ______ 他嗎？ (認知)',
        level: 'N5',
        options: [
            { text: '知{し}って', reason: '正確！雖然是連體形但要注意其狀態。' },
            { text: '知{し}り', reason: '正確！' },
            { text: '知{し}ん', reason: '錯誤：變位錯誤。' },
            { text: '分{わ}かって', reason: '正確！(理解，但此處問知悉)' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '你知道他嗎？ \n【注意】「知る」的否定是「知らない」，但肯定狀態常用「知っている」。'
    },
    {
        id: 'n5_v1399_shiru_2',
        prob: 'いいえ、 ______ ません。',
        prob_zh: '不，我 ______ 。 (不知道)',
        level: 'N5',
        options: [
            { text: '知{し}り', reason: '正確！五段連用。' },
            { text: '知{し}って', reason: '錯誤：否定不用知っていません。' },
            { text: '分{わ}かり', reason: '正確！' },
            { text: '知{し}ら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '不知道。 \n【例外】雖然肯定用「知っている」，但否定要用「知りません」或「知らない」。'
    },
    // 19. かける (Kakeru)
    {
        id: 'n5_v1399_kakeru_1',
        prob: '壁{かべ}に絵{え}を ______。',
        prob_zh: '在牆上 ______ 畫。 (懸掛)',
        level: 'N5',
        options: [
            { text: 'かけます', reason: '正確！一段他動詞。' },
            { text: 'かかります', reason: '錯誤：自動詞(掛著)。' },
            { text: 'かけ', reason: '正確！' },
            { text: 'かけて', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '掛畫。 \n【自他動詞】「かける」(他動詞，人去掛) vs 「かかる」(自動詞，掛著)。'
    },
    {
        id: 'n5_v1399_kakeru_2',
        prob: 'めがねを ______ います。',
        prob_zh: ' ______ 著眼鏡。 (戴)',
        level: 'N5',
        options: [
            { text: 'かけて', reason: '正確！一段動詞。' },
            { text: 'かぶり', reason: '錯誤：那是戴帽子。' },
            { text: 'はいて', reason: '錯誤：那是穿褲子/鞋子。' },
            { text: 'し', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '戴眼鏡。 \n【用法】「めがねをかける」是固定搭配。'
    },
    // 20. 切る (Kiru)
    {
        id: 'n5_v1399_kiru_1',
        prob: '紙{かみ}をハサミで ______。',
        prob_zh: '用剪刀 ______ 紙。 (剪/切)',
        level: 'N5',
        options: [
            { text: '切{き}ります', reason: '正確！五段動詞(外形似一段但為五段)。' },
            { text: '着{き}ます', reason: '錯誤：那是「穿」。' },
            { text: '切{き}って', reason: '正確！' },
            { text: '切{き}ら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '剪紙。 \n【活用】「切る」是例外五段動詞，變ます形為「切ります」。'
    },
    {
        id: 'n5_v1399_kiru_2',
        prob: '野菜{やさい}を ______ ください。',
        prob_zh: '請 ______ 蔬菜。',
        level: 'N5',
        options: [
            { text: '切{き}って', reason: '正確！五段促音便。' },
            { text: '切{き}り', reason: '正確！' },
            { text: '着{き}て', reason: '錯誤：漢字用法。' },
            { text: '切{き}ら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請切菜。 \n【活用】五段動詞。'
    },
]
