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
        rule: '1/6/8/10 變促音+半濁音 (pp), 3 變濁音 (bb)',
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
        description: '紙張、盤子、襯衫、CD 等扁平物體。無特殊音變，直接讀數字+mai。',
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
        rule: '1/8/10 變促音 (ss)',
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
        rule: '1/6/8/10 變促音+半濁音 (pp), 3 變濁音 (bb)',
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
        description: '用於形狀不規則或沒有特定量詞的物品。使用訓讀數字 (hitotsu, futatsu...)。10 讀作 "too"。',
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
        description: '年歲。1, 8, 10 發生音變。20歲特殊讀法 "hatachi"。',
        rule: '1/8/10 變促音 (ss)',
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
    }
];

export const commonMistakes = [
    {
        id: 'months',
        title: '月份的陷阱',
        description: '這三個月份的讀音最容易錯！切記不要讀成數字的訓讀。',
        items: [
            { label: '4月', wrong: 'よんがつ', right: 'しがつ', note: '死(shi)的發音相同，但月份必須讀shi' },
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
            { label: '1本 (樹/筆)', wrong: 'いちほん', right: 'いっぽん', note: '半濁音 p' },
            { label: '3本', wrong: 'さんほん', right: 'さんぼん', note: '濁音 b' },
            { label: '6回', wrong: 'ろくかい', right: 'ろっかい', note: '促音' },
            { label: '10個', wrong: 'じゅうこ', right: 'じゅっこ', note: '促音' },
        ]
    },
    {
        id: 'numbers',
        title: '數字的陷阱 (Number Mistakes)',
        description: '300, 600, 800, 3000, 8000 的音變，以及一萬的讀法。',
        items: [
            { label: '300', wrong: 'さんひゃく', right: 'さんびゃく', note: '濁音 ben' },
            { label: '600', wrong: 'ろくひゃく', right: 'ろっぴゃく', note: '促音+半濁音' },
            { label: '800', wrong: 'はちひゃく', right: 'はっぴゃく', note: '促音+半濁音' },
            { label: '3000', wrong: 'さんせん', right: 'さんぜん', note: '濁音 zen' },
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
            { value: 4, reading: 'よん / し', kanji: '四' },
            { value: 5, reading: 'ご', kanji: '五' },
            { value: 6, reading: 'ろく', kanji: '六' },
            { value: 7, reading: 'なな / しち', kanji: '七' },
            { value: 8, reading: 'はち', kanji: '八' },
            { value: 9, reading: 'きゅう / く', kanji: '九' },
            { value: 10, reading: 'じゅう', kanji: '十' },
        ]
    },
    {
        id: 'tens',
        title: '十位數 (Tens)',
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
        title: '百位數 (Hundreds)',
        description: '注意 300, 600, 800 的音變。',
        items: [
            { value: 100, reading: 'ひゃく', kanji: '百' },
            { value: 200, reading: 'にひゃく', kanji: '二百' },
            { value: 300, reading: 'さんびゃく', kanji: '三百', special: true, note: '濁音 ben' },
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
        title: '千位數 (Thousands)',
        description: '注意 3000, 8000 的音變。',
        items: [
            { value: 1000, reading: 'せん', kanji: '千' },
            { value: 2000, reading: 'にせん', kanji: '二千' },
            { value: 3000, reading: 'さんぜん', kanji: '三千', special: true, note: '濁音 zen' },
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
