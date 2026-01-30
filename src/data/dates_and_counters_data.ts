export interface DateCounterItem {
    value: string | number;
    reading: string;
    kanji?: string;
    special?: boolean; // Highlight special readings
    meaning_zh?: string;
    note?: string; // Additional notes
}

export interface NumberCategory {
    id: string;
    title: string;
    description: string;
    items: DateCounterItem[];
}

export interface CounterCategory {
    id: string;
    title: string;
    description: string;
    items: DateCounterItem[];
    rule?: string; // Explanation of sound changes (e.g., 'p' sound changes)
}

// Months
export const months: DateCounterItem[] = [
    { value: 1, reading: 'いちがつ', kanji: '一月' },
    { value: 2, reading: 'にがつ', kanji: '二月' },
    { value: 3, reading: 'さんがつ', kanji: '三月' },
    { value: 4, reading: 'しがつ', kanji: '四月', special: true },
    { value: 5, reading: 'ごがつ', kanji: '五月' },
    { value: 6, reading: 'ろくがつ', kanji: '六月' },
    { value: 7, reading: 'しちがつ', kanji: '七月', special: true },
    { value: 8, reading: 'はちがつ', kanji: '八月' },
    { value: 9, reading: 'くがつ', kanji: '九月', special: true },
    { value: 10, reading: 'じゅうがつ', kanji: '十月' },
    { value: 11, reading: 'じゅういちがつ', kanji: '十一月' },
    { value: 12, reading: 'じゅうにがつ', kanji: '十二月' },
];

// Days of the Month (1-31)
// Special readings: 1-10, 14, 20, 24
export const daysOfMonth: DateCounterItem[] = [
    { value: 1, reading: 'ついたち', kanji: '一日', special: true },
    { value: 2, reading: 'ふつか', kanji: '二日', special: true },
    { value: 3, reading: 'みっか', kanji: '三日', special: true },
    { value: 4, reading: 'よっか', kanji: '四日', special: true },
    { value: 5, reading: 'いつか', kanji: '五日', special: true },
    { value: 6, reading: 'むいか', kanji: '六日', special: true },
    { value: 7, reading: 'なのか', kanji: '七日', special: true },
    { value: 8, reading: 'ようか', kanji: '八日', special: true },
    { value: 9, reading: 'ここのか', kanji: '九日', special: true },
    { value: 10, reading: 'とおか', kanji: '十日', special: true },
    { value: 11, reading: 'じゅういちにち', kanji: '十一日' },
    { value: 12, reading: 'じゅうににち', kanji: '十二日' },
    { value: 13, reading: 'じゅうさんにち', kanji: '十三日' },
    { value: 14, reading: 'じゅうよっか', kanji: '十四日', special: true },
    { value: 15, reading: 'じゅうごにち', kanji: '十五日' },
    { value: 16, reading: 'じゅうろくにち', kanji: '十六日' },
    { value: 17, reading: 'じゅうしちにち', kanji: '十七日' },
    { value: 18, reading: 'じゅうはちにち', kanji: '十八日' },
    { value: 19, reading: 'じゅうくにち', kanji: '十九日' },
    { value: 20, reading: 'はつか', kanji: '二十日', special: true },
    { value: 21, reading: 'にじゅういちにち', kanji: '二十一日' },
    { value: 22, reading: 'にじゅうににち', kanji: '二十二日' },
    { value: 23, reading: 'にじゅうさんにち', kanji: '二十三日' },
    { value: 24, reading: 'にじゅうよっか', kanji: '二十四日', special: true },
    { value: 25, reading: 'にじゅうごにち', kanji: '二十五日' },
    { value: 26, reading: 'にじゅうろくにち', kanji: '二十六日' },
    { value: 27, reading: 'にじゅうしちにち', kanji: '二十七日' },
    { value: 28, reading: 'にじゅうはちにち', kanji: '二十八日' },
    { value: 29, reading: 'にじゅうくにち', kanji: '二十九日' },
    { value: 30, reading: 'さんじゅうにち', kanji: '三十日' },
    { value: 31, reading: 'さんじゅういちにち', kanji: '三十一日' },
];

// Days of the Week
export const weekDays: DateCounterItem[] = [
    { value: 'Mon', reading: 'げつようび', kanji: '月曜日', meaning_zh: '星期一' },
    { value: 'Tue', reading: 'かようび', kanji: '火曜日', meaning_zh: '星期二' },
    { value: 'Wed', reading: 'すいようび', kanji: '水曜日', meaning_zh: '星期三' },
    { value: 'Thu', reading: 'もくようび', kanji: '木曜日', meaning_zh: '星期四' },
    { value: 'Fri', reading: 'きんようび', kanji: '金曜日', meaning_zh: '星期五' },
    { value: 'Sat', reading: 'どようび', kanji: '土曜日', meaning_zh: '星期六' },
    { value: 'Sun', reading: 'にちようび', kanji: '日曜日', meaning_zh: '星期日' },
];

export const counters: CounterCategory[] = [
    {
        id: 'people',
        title: '人數 (人)',
        description: '數人的單位。注意1人和2人的特殊讀法。',
        items: [
            { value: 1, reading: 'ひとり', kanji: '一人', special: true },
            { value: 2, reading: 'ふたり', kanji: '二人', special: true },
            { value: 3, reading: 'さんにん', kanji: '三人' },
            { value: 4, reading: 'よにん', kanji: '四人', special: true },
            { value: 5, reading: 'ごにん', kanji: '五人' },
            { value: 6, reading: 'ろくにん', kanji: '六人' },
            { value: 7, reading: 'しちにん / ななにん', kanji: '七人' },
            { value: 8, reading: 'はちにん', kanji: '八人' },
            { value: 9, reading: 'きゅうにん', kanji: '九人' },
            { value: 10, reading: 'じゅうにん', kanji: '十人' },
        ]
    },
    {
        id: 'long_objects',
        title: '細長物 (本)',
        description: '筆、瓶子、雨傘、樹木等細長物體。注意 1, 3, 6, 8, 10 的音變。',
        rule: '1/6/8/10 變促音+半濁音（っ+ぱ行）, 3 變濁音（ば行）',
        items: [
            { value: 1, reading: 'いっぽん', kanji: '一本', special: true },
            { value: 2, reading: 'にほん', kanji: '二本' },
            { value: 3, reading: 'さんぼん', kanji: '三本', special: true },
            { value: 4, reading: 'よんほん', kanji: '四本' },
            { value: 5, reading: 'ごほん', kanji: '五本' },
            { value: 6, reading: 'ろっぽん', kanji: '六本', special: true },
            { value: 7, reading: 'ななほん', kanji: '七本' },
            { value: 8, reading: 'はっぽん', kanji: '八本', special: true },
            { value: 9, reading: 'きゅうほん', kanji: '九本' },
            { value: 10, reading: 'じゅっぽん', kanji: '十本', special: true },
        ]
    },
    {
        id: 'flat_objects',
        title: '扁平物 (枚)',
        description: '紙張、盤子、襯衫、CD 等扁平物體。無特殊音變，直接讀數字+まい。',
        items: [
            { value: 1, reading: 'いちまい', kanji: '一枚' },
            { value: 2, reading: 'にまい', kanji: '二枚' },
            { value: 3, reading: 'さんまい', kanji: '三枚' },
            { value: 4, reading: 'よんまい', kanji: '四枚' },
            { value: 5, reading: 'ごまい', kanji: '五枚' },
            { value: 6, reading: 'ろくまい', kanji: '六枚' },
            { value: 7, reading: 'ななまい', kanji: '七枚' },
            { value: 8, reading: 'はちまい', kanji: '八枚' },
            { value: 9, reading: 'きゅうまい', kanji: '九枚' },
            { value: 10, reading: 'じゅうまい', kanji: '十枚' },
        ]
    },
    {
        id: 'books',
        title: '書籍 (冊)',
        description: '書本、筆記本等成冊的物體。1, 8, 10 發生音變。',
        rule: '1/8/10 變促音（っ+さ行）',
        items: [
            { value: 1, reading: 'いっさつ', kanji: '一冊', special: true },
            { value: 2, reading: 'にさつ', kanji: '二冊' },
            { value: 3, reading: 'さんさつ', kanji: '三冊' },
            { value: 4, reading: 'よんさつ', kanji: '四冊' },
            { value: 5, reading: 'ごさつ', kanji: '五冊' },
            { value: 6, reading: 'ろくさつ', kanji: '六冊' },
            { value: 7, reading: 'ななさつ', kanji: '七冊' },
            { value: 8, reading: 'はっさつ', kanji: '八冊', special: true },
            { value: 9, reading: 'きゅうさつ', kanji: '九冊' },
            { value: 10, reading: 'じゅっさつ', kanji: '十冊', special: true },
        ]
    },
    {
        id: 'small_animals',
        title: '小動物 (匹)',
        description: '貓、狗、魚、昆蟲等小動物。音變規則同「本」。',
        rule: '1/6/8/10 變促音+半濁音（っ+ぱ行）, 3 變濁音（ば行）',
        items: [
            { value: 1, reading: 'いっぴき', kanji: '一匹', special: true },
            { value: 2, reading: 'にひき', kanji: '二匹' },
            { value: 3, reading: 'さんびき', kanji: '三匹', special: true },
            { value: 4, reading: 'よんひき', kanji: '四匹' },
            { value: 5, reading: 'ごひき', kanji: '五匹' },
            { value: 6, reading: 'ろっぴき', kanji: '六匹', special: true },
            { value: 7, reading: 'ななひき', kanji: '七匹' },
            { value: 8, reading: 'はっぴき', kanji: '八匹', special: true },
            { value: 9, reading: 'きゅうひき', kanji: '九匹' },
            { value: 10, reading: 'じゅっぴき', kanji: '十匹', special: true },
        ]
    },
    {
        id: 'general_objects',
        title: '一般物品 (つ)',
        description: '用於形狀不規則或沒有特定量詞的物品。使用訓讀數字（ひとつ、ふたつ...）。10 讀作「とお」。',
        items: [
            { value: 1, reading: 'ひとつ', kanji: '一つ' },
            { value: 2, reading: 'ふたつ', kanji: '二つ' },
            { value: 3, reading: 'みっつ', kanji: '三つ' },
            { value: 4, reading: 'よっつ', kanji: '四つ' },
            { value: 5, reading: 'いつつ', kanji: '五つ' },
            { value: 6, reading: 'むっつ', kanji: '六つ' },
            { value: 7, reading: 'ななつ', kanji: '七つ' },
            { value: 8, reading: 'やっつ', kanji: '八つ' },
            { value: 9, reading: 'ここのつ', kanji: '九つ' },
            { value: 10, reading: 'とお', kanji: '十' },
        ]
    },
    {
        id: 'age',
        title: '年齡 (歳)',
        description: '年歲。1, 8, 10 發生音變。20歲特殊讀法「はたち」。',
        rule: '1/8/10 變促音（っ+さ行）',
        items: [
            { value: 1, reading: 'いっさい', kanji: '一歳', special: true },
            { value: 2, reading: 'にさい', kanji: '二歳' },
            { value: 3, reading: 'さんさい', kanji: '三歳' },
            { value: 4, reading: 'よんさい', kanji: '四歳' },
            { value: 5, reading: 'ごさい', kanji: '五歳' },
            { value: 6, reading: 'ろくさい', kanji: '六歳' },
            { value: 7, reading: 'ななさい', kanji: '七歳' },
            { value: 8, reading: 'はっさい', kanji: '八歳', special: true },
            { value: 9, reading: 'きゅうさい', kanji: '九歳' },
            { value: 10, reading: 'じゅっさい', kanji: '十歳', special: true },
            { value: 20, reading: 'はたち', kanji: '二十歳', special: true },
        ]
    },
    {
        id: 'machines',
        title: '機械 (台)',
        description: '車、電腦、電視、鋼琴等機械。無特殊音變。',
        items: [
            { value: 1, reading: 'いちだい', kanji: '一台' },
            { value: 2, reading: 'にだい', kanji: '二台' },
            { value: 3, reading: 'さんだい', kanji: '三台' },
            { value: 4, reading: 'よんだい', kanji: '四台' },
            { value: 5, reading: 'ごだい', kanji: '五台' },
            { value: 6, reading: 'ろくだい', kanji: '六台' },
            { value: 7, reading: 'ななだい', kanji: '七台' },
            { value: 8, reading: 'はちだい', kanji: '八台' },
            { value: 9, reading: 'きゅうだい', kanji: '九台' },
            { value: 10, reading: 'じゅうだい', kanji: '十台' },
        ]
    },
    {
        id: 'cups',
        title: '杯子 (杯)',
        description: '杯、勺等裝液體的容器。音變非常複雜（ぼん/ぽん）。',
        rule: '1/6/8/10 變促音+半濁音（っ+ぱ行）, 3 變濁音（ば行）',
        items: [
            { value: 1, reading: 'いっぱい', kanji: '一杯', special: true },
            { value: 2, reading: 'にはい', kanji: '二杯' },
            { value: 3, reading: 'さんばい', kanji: '三杯', special: true },
            { value: 4, reading: 'よんはい', kanji: '四杯' },
            { value: 5, reading: 'ごはい', kanji: '五杯' },
            { value: 6, reading: 'ろっぱい', kanji: '六杯', special: true },
            { value: 7, reading: 'ななはい', kanji: '七杯' },
            { value: 8, reading: 'はっぱい', kanji: '八杯', special: true },
            { value: 9, reading: 'きゅうはい', kanji: '九杯' },
            { value: 10, reading: 'じゅっぱい', kanji: '十杯', special: true },
        ]
    },
    {
        id: 'floors',
        title: '樓層 (階)',
        description: '建築物的樓層。注意3樓的濁音。',
        rule: '1/6/8/10 變促音（っ+か行）, 3 變濁音（が行）',
        items: [
            { value: 1, reading: 'いっかい', kanji: '一階', special: true },
            { value: 2, reading: 'にかい', kanji: '二階' },
            { value: 3, reading: 'さんがい', kanji: '三階', special: true },
            { value: 4, reading: 'よんかい', kanji: '四階' },
            { value: 5, reading: 'ごかい', kanji: '五階' },
            { value: 6, reading: 'ろっかい', kanji: '六階', special: true },
            { value: 7, reading: 'ななかい', kanji: '七階' },
            { value: 8, reading: 'はっかい', kanji: '八階', special: true },
            { value: 9, reading: 'きゅうかい', kanji: '九階' },
            { value: 10, reading: 'じゅっかい', kanji: '十階', special: true },
        ]
    },
    {
        id: 'shoes',
        title: '鞋襪 (足)',
        description: '成雙的鞋子、襪子。3雙有濁音變。',
        rule: '1/8/10 變促音（っ+さ行）, 3 變濁音（ざ行）',
        items: [
            { value: 1, reading: 'いっそく', kanji: '一足', special: true },
            { value: 2, reading: 'にそく', kanji: '二足' },
            { value: 3, reading: 'さんぞく', kanji: '三足', special: true },
            { value: 4, reading: 'よんそく', kanji: '四足' },
            { value: 5, reading: 'ごそく', kanji: '五足' },
            { value: 6, reading: 'ろくそく', kanji: '六足' },
            { value: 7, reading: 'ななそく', kanji: '七足' },
            { value: 8, reading: 'はっそく', kanji: '八足', special: true },
            { value: 9, reading: 'きゅうそく', kanji: '九足' },
            { value: 10, reading: 'じゅっそく', kanji: '十足', special: true },
        ]
    },
    {
        id: 'hours',
        title: '時間 (時)',
        description: '表示整點時間。注意特別的 4 點、7 點、9 點。',
        items: [
            { value: 1, reading: 'いちじ', kanji: '一時' },
            { value: 2, reading: 'にじ', kanji: '二時' },
            { value: 3, reading: 'さんじ', kanji: '三時' },
            { value: 4, reading: 'よじ', kanji: '四時', special: true, note: '不讀しじ或よんじ' },
            { value: 5, reading: 'ごじ', kanji: '五時' },
            { value: 6, reading: 'ろくじ', kanji: '六時' },
            { value: 7, reading: 'しちじ', kanji: '七時', special: true, note: '常讀しちじ' },
            { value: 8, reading: 'はちじ', kanji: '八時' },
            { value: 9, reading: 'くじ', kanji: '九時', special: true, note: '不讀きゅうじ' },
            { value: 10, reading: 'じゅうじ', kanji: '十時' },
            { value: 11, reading: 'じゅういちじ', kanji: '十一時' },
            { value: 12, reading: 'じゅうにじ', kanji: '十二時' },
        ]
    },
    {
        id: 'minutes',
        title: '分鐘 (分)',
        description: '表示分鐘。音變規律最複雜的量詞之一。',
        rule: '1/3/4/6/8/10 發生音變，注意促音與半濁音',
        items: [
            { value: 1, reading: 'いっぷん', kanji: '一分', special: true },
            { value: 2, reading: 'にふん', kanji: '二分' },
            { value: 3, reading: 'さんぷん', kanji: '三分', special: true },
            { value: 4, reading: 'よんぷん', kanji: '四分', special: true },
            { value: 5, reading: 'ごふん', kanji: '五分' },
            { value: 6, reading: 'ろっぷん', kanji: '六分', special: true },
            { value: 7, reading: 'ななふん', kanji: '七分' },
            { value: 8, reading: 'はっぷん / はちふん', kanji: '八分', special: true },
            { value: 9, reading: 'きゅうふん', kanji: '九分' },
            { value: 10, reading: 'じゅっぷん', kanji: '十分', special: true },
        ]
    }
];

export interface LearningTip {
    id: string;
    title: string;
    description: string;
    points: { label: string; text: string; highlight?: boolean }[];
}

// 文化知識與來源說明
export interface CulturalInsight {
    id: string;
    title: string;
    description: string;
    details: { term: string; explanation: string; example?: string }[];
}

// 七曜日的來源與記憶法
export const weekDayInsights: CulturalInsight = {
    id: 'weekday_origin',
    title: '七曜日的宇宙觀起源',
    description: '日語星期的命名來自古代占星學的「七曜」與行星守護神體系，每天由特定的守護星主宰。',
    details: [
        { term: '日曜日', explanation: '太陽主宰之日', example: '對應英語 Sunday（Sun\'s day）' },
        { term: '月曜日', explanation: '月亮主宰之日', example: '對應英語 Monday（Moon\'s day）' },
        { term: '火曜日', explanation: '火星（Mars）主宰之日', example: '與戰神相關' },
        { term: '水曜日', explanation: '水星（Mercury）主宰之日', example: '象徵溝通與流動' },
        { term: '木曜日', explanation: '木星（Jupiter）主宰之日', example: '對應北歐雷神 Thor' },
        { term: '金曜日', explanation: '金星（Venus）主宰之日', example: '對應愛與美之神' },
        { term: '土曜日', explanation: '土星（Saturn）主宰之日', example: '象徵收割與土地' },
    ]
};

// 星期記憶口訣
export interface MemoryTrick {
    id: string;
    title: string;
    description: string;
    items: { mnemonic: string; target: string; explanation: string }[];
}

export const weekDayMemoryTricks: MemoryTrick = {
    id: 'weekday_mnemonics',
    title: '星期記憶口訣',
    description: '利用諧音與聯想幫助記憶七曜日。',
    items: [
        { mnemonic: '五金行', target: '金曜日 = 星期五', explanation: '「五」與「金」的連結' },
        { mnemonic: '四目相交', target: '木曜日 = 星期四', explanation: '「目」與「木」諧音' },
        { mnemonic: '山水畫', target: '水曜日 = 星期三', explanation: '「山」與「三」諧音' },
        { mnemonic: '入土為安', target: '土曜日 = 星期六', explanation: '「六」的結束感與「土」連結' },
        { mnemonic: '一日之計', target: '日曜日 = 星期日', explanation: '「日」直接對應' },
        { mnemonic: '月亮代表我的心', target: '月曜日 = 星期一', explanation: '歌曲聯想，「一」與「月」' },
        { mnemonic: '二把火', target: '火曜日 = 星期二', explanation: '「二」與「火」的諧音聯想' },
    ]
};

// 月份的「清瘦型」讀法
export const monthReadingInsight: CulturalInsight = {
    id: 'month_slim_reading',
    title: '月份的「清瘦型」讀法規律',
    description: '4月、7月、9月必須使用較為「瘦」的發音（し、しち、く），禁止使用基數詞中常用的「よん、なな、きゅう」。這反映了日語對語音和諧度的高度重視。',
    details: [
        { term: '4月 → しがつ', explanation: '必須讀「し」', example: '嚴禁「よんがつ」' },
        { term: '7月 → しちがつ', explanation: '必須讀「しち」', example: '嚴禁「なながつ」' },
        { term: '9月 → くがつ', explanation: '必須讀「く」', example: '嚴禁「きゅうがつ」' },
    ]
};

// 大小月口訣
export const monthMnemonic: MemoryTrick = {
    id: 'month_days_mnemonic',
    title: '大小月口訣「西向く侍」',
    description: '日本民間流傳的記憶口訣，用來記住不足31天的月份（2、4、6、9、11月）。',
    items: [
        { mnemonic: '西（に）', target: '2月', explanation: '「に」= 2' },
        { mnemonic: '向（し）', target: '4月', explanation: '「し」= 4' },
        { mnemonic: 'く', target: '9月', explanation: '「く」= 9' },
        { mnemonic: '侍（さむらい）→ 士', target: '11月', explanation: '「十」+「一」= 士（漢字拆解）' },
        { mnemonic: '（む隱含）', target: '6月', explanation: '「む」= 6，隱含在口訣中' },
    ]
};

// 日期的訓讀傳統
export const dateInsight: CulturalInsight = {
    id: 'date_kun_reading',
    title: '日期的訓讀傳統與文化由來',
    description: '1號到10號採用古日語的訓讀系統，這與現代基數詞幾乎完全脫節，保留了日語的古老傳統。',
    details: [
        { term: '1號「ついたち」', explanation: '源於「月立ち（つきたち）」', example: '意指新月出現、月份開始的那一天' },
        { term: '2-10號「~か」結尾', explanation: '呈現律動感的訓讀', example: '如「ふつか、みっか、よっか」' },
        { term: '4日 vs 8日', explanation: '注意長短音區別', example: '「よっか」(短) vs「ようか」(長)' },
        { term: '20號「はつか」', explanation: '完全獨立的特殊讀法', example: '既非音讀也非簡單訓讀組合' },
        { term: '14日、24日', explanation: '保留4日的訓讀尾綴', example: '「じゅうよっか」「にじゅうよっか」' },
    ]
};

// 音讀訓讀雙軌制說明
export const readingSystemInsight: CulturalInsight = {
    id: 'onyomi_kunyomi',
    title: '音讀與訓讀雙軌制',
    description: '日語數字體系的核心在於「音讀（On-yomi）」與「訓讀（Kun-yomi）」的共存。音讀源自中國古代讀音，訓讀是日本固有詞彙發音。',
    details: [
        { term: '音讀（漢語 Kango）', explanation: '源自古代中國的讀音', example: '如「いち、に、さん...」' },
        { term: '訓讀（和語 Wago）', explanation: '日本固有的讀法', example: '如「ひとつ、ふたつ、みっつ...」' },
        { term: '音讀使用場景', explanation: '電話號碼、數學計算、10以上的組合數字' },
        { term: '訓讀使用場景', explanation: '1-10的計數、不規則量詞、日期' },
        { term: '混合使用', explanation: '「人」1-2人用訓讀，3人起切換音讀', example: '「ひとり、ふたり、さんにん...」' },
    ]
};

// h-p 轉換規律（語言學原理）
export const soundChangeInsight: CulturalInsight = {
    id: 'h_p_conversion',
    title: 'h-p 轉換規律（促音化與半濁音化）',
    description: '這種規律被稱為「h-p 轉換規律」。在語言學上，這是生理語言學「最小努力原則」的體現，旨在減少發音時的氣流阻力。',
    details: [
        { term: '促音（っ）後的變化', explanation: '氣流突然阻斷後，爆破音「p」提供更清晰的聽覺邊界', example: '「いっぷん」「ろっぽん」' },
        { term: '撥音（ん）後的變化', explanation: '鼻音共振狀態轉向濁音「b」比摩擦音「h」更流暢', example: '「さんぼん」「さんびき」' },
        { term: '觸發數字', explanation: '1, 6, 8, 10 觸發促音+半濁音化', example: '「いっ→p」「ろっ→p」「はっ→p」' },
        { term: '3 的特殊性', explanation: '撥音「ん」觸發後續子音濁音化', example: '「さんぼん」「さんびき」「さんばい」' },
    ]
};

// 疑問詞量詞的濁音化
export interface QuestionCounter {
    counter: string;
    counterName: string;
    question: string;
    reading: string;
    note: string;
}

export const questionCounters: QuestionCounter[] = [
    { counter: '本', counterName: '細長物', question: '何本', reading: 'なんぼん', note: '疑問詞「何」引發濁音化' },
    { counter: '匹', counterName: '小動物', question: '何匹', reading: 'なんびき', note: '疑問詞「何」引發濁音化' },
    { counter: '杯', counterName: '杯子', question: '何杯', reading: 'なんばい', note: '疑問詞「何」引發濁音化' },
    { counter: '分', counterName: '分鐘', question: '何分', reading: 'なんぷん', note: '疑問詞「何」引發半濁音化' },
    { counter: '枚', counterName: '扁平物', question: '何枚', reading: 'なんまい', note: '無音變' },
    { counter: '人', counterName: '人數', question: '何人', reading: 'なんにん', note: '無音變' },
    { counter: '冊', counterName: '書籍', question: '何冊', reading: 'なんさつ', note: '無音變' },
    { counter: '台', counterName: '機械', question: '何台', reading: 'なんだい', note: '無音變' },
    { counter: '階', counterName: '樓層', question: '何階', reading: 'なんがい', note: '疑問詞「何」引發濁音化' },
    { counter: '歳', counterName: '年齡', question: '何歳', reading: 'なんさい', note: '無音變' },
    { counter: '個', counterName: '一般物品', question: '何個', reading: 'なんこ', note: '無音變' },
    { counter: 'つ', counterName: '萬能量詞', question: 'いくつ', reading: 'いくつ', note: '使用「いくつ」而非「なんつ」' },
];

export const learningTips: LearningTip[] = [
    {
        id: 'fallback_tsu',
        title: '萬能 fallback 「つ」',
        description: '當你不知道該用什麼量詞時，對於非生物，使用「つ」是最安全的選擇。',
        points: [
            { label: '規則', text: '1-9 使用（ひとつ、ふたつ...）, 10 是（とお）。' },
            { label: '限制', text: '只能用於直到 10 的數量。超過 10 通常直接讀數字。' },
            { label: '例外', text: '對於人、動物，請盡量不要使用「つ」。' }
        ]
    },
    {
        id: 'question_words',
        title: '疑問詞（詢問數量）',
        description: '詢問數量時，根據物品性質使用不同的疑問詞。',
        points: [
            { label: '一般物品', text: 'いくつ ?', highlight: true },
            { label: '人', text: 'なんにん ?' },
            { label: '特定量詞', text: 'なん＋量詞 ?' },
            { label: '順序', text: 'なんばん ?' }
        ]
    },
    {
        id: 'sound_changes',
        title: '音變規律速記',
        description: '量詞的第一個音決定了是否容易發生音變。',
        points: [
            { label: 'K/S/T 行', text: '1, 8, 10 容易變促音（っ+か/さ/た行）。' },
            { label: 'H 行', text: '最麻煩！1, 6, 8, 10 變促音+半濁音（っ+ぱ行）; 3 變濁音（ば行）。', highlight: true },
            { label: '其他', text: 'ま、な、や、わ、ら行開頭的量詞通常不發生音變。' }
        ]
    },
    {
        id: 'kango_wago',
        title: '音讀 vs 訓讀 (選用邏輯)',
        description: '為什麼日語數字有兩套讀法？',
        points: [
            { label: '和語 (Kunyomi)', text: '「ひとつ、ふたつ...」常用於 1-10 獨立計數或抽象物品。', highlight: true },
            { label: '漢語 (Onyomi)', text: '「いち、に、さん...」多用於 11 以上、日期、特定的度量衡。' },
            { label: '混合使用', text: '有些量詞如「人 (nin)」在 1、2 人使用訓讀，3 人起切換為音讀。' }
        ]
    }
];

export const commonMistakes = [
    {
        id: 'months',
        title: '月份的陷阱',
        description: '這三個月份的讀音最容易錯！切記不要讀成數字的訓讀。',
        items: [
            { label: '4月', wrong: 'よんがつ', right: 'しがつ', note: '死（し）的發音相同，但月份必須讀し' },
            { label: '7月', wrong: 'なながつ', right: 'しちがつ', note: '' },
            { label: '9月', wrong: 'きゅうがつ', right: 'くがつ', note: '' },
        ]
    },
    {
        id: 'days',
        title: '日期的陷阱',
        description: '20日是最特別的，完全不含數字讀音。',
        items: [
            { label: '20日', wrong: 'にじゅうにち', right: 'はつか', note: '成年(20歲)也讀作 はたち' },
            { label: '4日', wrong: 'よんか', right: 'よっか', note: '促音' },
            { label: '8日', wrong: 'はちか', right: 'ようか', note: '長音' },
            { label: '14日', wrong: 'じゅうよんにち', right: 'じゅうよっか', note: '24日同理 (にじゅうよっか)' },
        ]
    },
    {
        id: 'counters',
        title: '量詞音變',
        description: '1, 6, 8, 10 容易變促音；3 容易變濁音。',
        items: [
            { label: '1本 (樹/筆)', wrong: 'いちほん', right: 'いっぽん', note: '半濁音 ぱ行' },
            { label: '3本', wrong: 'さんほん', right: 'さんぼん', note: '濁音 ば行' },
            { label: '6回', wrong: 'ろくかい', right: 'ろっかい', note: '促音' },
            { label: '10個', wrong: 'じゅうこ', right: 'じゅっこ', note: '促音' },
        ]
    },
    {
        id: 'numbers',
        title: '數字的陷阱',
        description: '300, 600, 800, 3000, 8000 的音變，以及一萬的讀法。',
        items: [
            { label: '300', wrong: 'さんひゃく', right: 'さんびゃく', note: '濁音 べん' },
            { label: '600', wrong: 'ろくひゃく', right: 'ろっぴゃく', note: '促音+半濁音' },
            { label: '800', wrong: 'はちひゃく', right: 'はっぴゃく', note: '促音+半濁音' },
            { label: '3000', wrong: 'さんせん', right: 'さんぜん', note: '濁音 ぜん' },
            { label: '8000', wrong: 'はちせん', right: 'はっせん', note: '促音' },
            { label: '10000', wrong: 'まん', right: 'いちまん', note: '必須加「一」' },
        ]
    }
];

export const numbers: NumberCategory[] = [
    {
        id: 'basic',
        title: '基本數字 (0-10)',
        description: '最基礎的數字讀法。',
        items: [
            { value: 0, reading: 'ゼロ / れい', kanji: '零' },
            { value: 1, reading: 'いち', kanji: '一' },
            { value: 2, reading: 'に', kanji: '二' },
            { value: 3, reading: 'さん', kanji: '三' },
            { value: 4, reading: 'よん / し', kanji: '四', special: true, note: '避諱「死」多讀よん' },
            { value: 5, reading: 'ご', kanji: '五' },
            { value: 6, reading: 'ろく', kanji: '六' },
            { value: 7, reading: 'なな / しち', kanji: '七', special: true, note: '避混淆(1)多讀なな' },
            { value: 8, reading: 'はち', kanji: '八' },
            { value: 9, reading: 'きゅう / く', kanji: '九', special: true, note: '避諱「苦」多讀きゅう' },
            { value: 10, reading: 'じゅう', kanji: '十' },
        ]
    },
    {
        id: 'tens',
        title: '十位數',
        description: '10 + 數字 / 數字 + 10',
        items: [
            { value: 11, reading: 'じゅういち', kanji: '十一' },
            { value: 12, reading: 'じゅうに', kanji: '十二' },
            { value: 14, reading: 'じゅうよん / じゅうし', kanji: '十四' },
            { value: 19, reading: 'じゅうきゅう / じゅうく', kanji: '十九' },
            { value: 20, reading: 'にじゅう', kanji: '二十' },
            { value: 30, reading: 'さんじゅう', kanji: '三十' },
            { value: 40, reading: 'よんじゅう', kanji: '四十' },
            { value: 90, reading: 'きゅうじゅう', kanji: '九十' },
        ]
    },
    {
        id: 'hundreds',
        title: '百位數',
        description: '注意 300, 600, 800 的音變。',
        items: [
            { value: 100, reading: 'ひゃく', kanji: '百' },
            { value: 200, reading: 'にひゃく', kanji: '二百' },
            { value: 300, reading: 'さんびゃく', kanji: '三百', special: true, note: '濁音 べん' },
            { value: 400, reading: 'よんひゃく', kanji: '四百' },
            { value: 500, reading: 'ごひゃく', kanji: '五百' },
            { value: 600, reading: 'ろっぴゃく', kanji: '六百', special: true, note: '促音+半濁音' },
            { value: 700, reading: 'ななひゃく', kanji: '七百' },
            { value: 800, reading: 'はっぴゃく', kanji: '八百', special: true, note: '促音+半濁音' },
            { value: 900, reading: 'きゅうひゃく', kanji: '九百' },
        ]
    },
    {
        id: 'thousands',
        title: '千位數',
        description: '注意 3000, 8000 的音變。',
        items: [
            { value: 1000, reading: 'せん', kanji: '千' },
            { value: 2000, reading: 'にせん', kanji: '二千' },
            { value: 3000, reading: 'さんぜん', kanji: '三千', special: true, note: '濁音 ぜん' },
            { value: 4000, reading: 'よんせん', kanji: '四千' },
            { value: 5000, reading: 'ごせん', kanji: '五千' },
            { value: 6000, reading: 'ろくせん', kanji: '六千' },
            { value: 7000, reading: 'ななせん', kanji: '七千' },
            { value: 8000, reading: 'はっせん', kanji: '八千', special: true, note: '促音' },
            { value: 9000, reading: 'きゅうせん', kanji: '九千' },
            { value: 10000, reading: 'いちまん', kanji: '一万', special: true, note: '必須加「一」' },
        ]
    }
];
