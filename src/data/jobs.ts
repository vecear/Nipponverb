/**
 * 職業與階段資料定義
 * 八種職業，每種有 10 個階段
 * 男女各有不同的階段稱號
 */

export interface JobStage {
  minLevel: number
  nameJp: string
  nameReading: string
  nameTw: string
}

export interface Job {
  id: string
  nameJp: string
  nameReading: string
  nameTw: string
  nameEn: string
  description: string       // 繁中描述
  descriptionJp: string     // 日文描述
  icon: string
  color: string            // Tailwind gradient
  stages: {
    male: JobStage[]
    female: JobStage[]
  }
}

// 初心者稱號 (等級 0-4)
export const NOVICE_TITLE = {
  nameJp: '見習い',
  nameReading: 'みならい',
  nameTw: '見習',
  nameEn: 'Apprentice'
}

// 八種職業定義
export const JOBS: Job[] = [
  {
    id: 'doshin',
    nameJp: '同心',
    nameReading: 'どうしん',
    nameTw: '同心',
    nameEn: 'Doshin',
    description: '江戶時代負責治安維護的官員',
    descriptionJp: '江戸時代の治安維持を担った役人',
    icon: '⚔️',
    color: 'from-slate-500 to-slate-700',
    stages: {
      male: [
        { minLevel: 5, nameJp: '岡っ引', nameReading: 'おかっぴき', nameTw: '岡引' },
        { minLevel: 15, nameJp: '目明し', nameReading: 'めあかし', nameTw: '目明' },
        { minLevel: 25, nameJp: '下っ引', nameReading: 'したっぴき', nameTw: '下引' },
        { minLevel: 35, nameJp: '同心見習', nameReading: 'どうしんみならい', nameTw: '同心見習' },
        { minLevel: 45, nameJp: '同心', nameReading: 'どうしん', nameTw: '同心' },
        { minLevel: 55, nameJp: '与力', nameReading: 'よりき', nameTw: '與力' },
        { minLevel: 65, nameJp: '定廻り', nameReading: 'じょうまわり', nameTw: '定廻' },
        { minLevel: 75, nameJp: '奉行補佐', nameReading: 'ぶぎょうほさ', nameTw: '奉行輔佐' },
        { minLevel: 85, nameJp: '町奉行', nameReading: 'まちぶぎょう', nameTw: '町奉行' },
        { minLevel: 95, nameJp: '大目付', nameReading: 'おおめつけ', nameTw: '大目付' },
      ],
      female: [
        { minLevel: 5, nameJp: '岡っ引', nameReading: 'おかっぴき', nameTw: '岡引' },
        { minLevel: 15, nameJp: '目明し', nameReading: 'めあかし', nameTw: '目明' },
        { minLevel: 25, nameJp: '下っ引', nameReading: 'したっぴき', nameTw: '下引' },
        { minLevel: 35, nameJp: '同心見習', nameReading: 'どうしんみならい', nameTw: '同心見習' },
        { minLevel: 45, nameJp: '同心', nameReading: 'どうしん', nameTw: '同心' },
        { minLevel: 55, nameJp: '与力', nameReading: 'よりき', nameTw: '與力' },
        { minLevel: 65, nameJp: '定廻り', nameReading: 'じょうまわり', nameTw: '定廻' },
        { minLevel: 75, nameJp: '奉行補佐', nameReading: 'ぶぎょうほさ', nameTw: '奉行輔佐' },
        { minLevel: 85, nameJp: '町奉行', nameReading: 'まちぶぎょう', nameTw: '町奉行' },
        { minLevel: 95, nameJp: '大目付', nameReading: 'おおめつけ', nameTw: '大目付' },
      ],
    },
  },
  {
    id: 'yakusha',
    nameJp: '役者',
    nameReading: 'やくしゃ',
    nameTw: '役者',
    nameEn: 'Actor',
    description: '站在歌舞伎或戲劇舞台上的演員',
    descriptionJp: '歌舞伎や芝居の舞台に立つ演者',
    icon: '🎭',
    color: 'from-red-500 to-orange-500',
    stages: {
      male: [
        { minLevel: 5, nameJp: '子役', nameReading: 'こやく', nameTw: '童角' },
        { minLevel: 15, nameJp: '若衆', nameReading: 'わかしゅ', nameTw: '若眾' },
        { minLevel: 25, nameJp: '中堅役者', nameReading: 'ちゅうけんやくしゃ', nameTw: '中堅役者' },
        { minLevel: 35, nameJp: '名題下', nameReading: 'なだいした', nameTw: '名題下' },
        { minLevel: 45, nameJp: '名題役者', nameReading: 'なだいやくしゃ', nameTw: '名題役者' },
        { minLevel: 55, nameJp: '幹部役者', nameReading: 'かんぶやくしゃ', nameTw: '幹部役者' },
        { minLevel: 65, nameJp: '座頭', nameReading: 'ざがしら', nameTw: '座頭' },
        { minLevel: 75, nameJp: '千両役者', nameReading: 'せんりょうやくしゃ', nameTw: '千兩役者' },
        { minLevel: 85, nameJp: '人間国宝', nameReading: 'にんげんこくほう', nameTw: '人間國寶' },
        { minLevel: 95, nameJp: '名人', nameReading: 'めいじん', nameTw: '名人' },
      ],
      female: [
        { minLevel: 5, nameJp: '子役', nameReading: 'こやく', nameTw: '童角' },
        { minLevel: 15, nameJp: '若女', nameReading: 'わかおんな', nameTw: '若女' },
        { minLevel: 25, nameJp: '中堅女役者', nameReading: 'ちゅうけんおんなやくしゃ', nameTw: '中堅女役者' },
        { minLevel: 35, nameJp: '名題下', nameReading: 'なだいした', nameTw: '名題下' },
        { minLevel: 45, nameJp: '名題女役者', nameReading: 'なだいおんなやくしゃ', nameTw: '名題女役者' },
        { minLevel: 55, nameJp: '幹部女役者', nameReading: 'かんぶおんなやくしゃ', nameTw: '幹部女役者' },
        { minLevel: 65, nameJp: '女座長', nameReading: 'おんなざちょう', nameTw: '女座長' },
        { minLevel: 75, nameJp: '千両女役者', nameReading: 'せんりょうおんなやくしゃ', nameTw: '千兩女役者' },
        { minLevel: 85, nameJp: '人間国宝', nameReading: 'にんげんこくほう', nameTw: '人間國寶' },
        { minLevel: 95, nameJp: '名人', nameReading: 'めいじん', nameTw: '名人' },
      ],
    },
  },
  {
    id: 'ukiyoeshi',
    nameJp: '浮世絵師',
    nameReading: 'うきよえし',
    nameTw: '浮世繪師',
    nameEn: 'Ukiyo-e Artist',
    description: '繪製代表江戶時代的木版畫的畫師',
    descriptionJp: '江戸時代を代表する木版画を描く絵師',
    icon: '🎨',
    color: 'from-purple-500 to-pink-500',
    stages: {
      male: [
        { minLevel: 5, nameJp: '絵草紙屋', nameReading: 'えぞうしや', nameTw: '繪草紙屋' },
        { minLevel: 15, nameJp: '版下絵師', nameReading: 'はんしたえし', nameTw: '版下繪師' },
        { minLevel: 25, nameJp: '門人', nameReading: 'もんじん', nameTw: '門人' },
        { minLevel: 35, nameJp: '浮世絵師', nameReading: 'うきよえし', nameTw: '浮世繪師' },
        { minLevel: 45, nameJp: '錦絵師', nameReading: 'にしきえし', nameTw: '錦繪師' },
        { minLevel: 55, nameJp: '版元絵師', nameReading: 'はんもとえし', nameTw: '版元繪師' },
        { minLevel: 65, nameJp: '御用絵師', nameReading: 'ごようえし', nameTw: '御用繪師' },
        { minLevel: 75, nameJp: '狩野派', nameReading: 'かのうは', nameTw: '狩野派' },
        { minLevel: 85, nameJp: '絵師頭', nameReading: 'えしがしら', nameTw: '繪師頭' },
        { minLevel: 95, nameJp: '画聖', nameReading: 'がせい', nameTw: '畫聖' },
      ],
      female: [
        { minLevel: 5, nameJp: '絵草紙屋', nameReading: 'えぞうしや', nameTw: '繪草紙屋' },
        { minLevel: 15, nameJp: '版下絵師', nameReading: 'はんしたえし', nameTw: '版下繪師' },
        { minLevel: 25, nameJp: '門人', nameReading: 'もんじん', nameTw: '門人' },
        { minLevel: 35, nameJp: '浮世絵師', nameReading: 'うきよえし', nameTw: '浮世繪師' },
        { minLevel: 45, nameJp: '錦絵師', nameReading: 'にしきえし', nameTw: '錦繪師' },
        { minLevel: 55, nameJp: '版元絵師', nameReading: 'はんもとえし', nameTw: '版元繪師' },
        { minLevel: 65, nameJp: '御用絵師', nameReading: 'ごようえし', nameTw: '御用繪師' },
        { minLevel: 75, nameJp: '狩野派', nameReading: 'かのうは', nameTw: '狩野派' },
        { minLevel: 85, nameJp: '絵師頭', nameReading: 'えしがしら', nameTw: '繪師頭' },
        { minLevel: 95, nameJp: '画聖', nameReading: 'がせい', nameTw: '畫聖' },
      ],
    },
  },
  {
    id: 'shonin',
    nameJp: '商人',
    nameReading: 'しょうにん',
    nameTw: '商人',
    nameEn: 'Merchant',
    description: '靠經商致富的町人',
    descriptionJp: '商売で財を成す町人',
    icon: '💰',
    color: 'from-yellow-500 to-amber-600',
    stages: {
      male: [
        { minLevel: 5, nameJp: '丁稚', nameReading: 'でっち', nameTw: '小廝' },
        { minLevel: 15, nameJp: '手代', nameReading: 'てだい', nameTw: '夥計' },
        { minLevel: 25, nameJp: '番頭', nameReading: 'ばんとう', nameTw: '掌櫃' },
        { minLevel: 35, nameJp: '若旦那', nameReading: 'わかだんな', nameTw: '少東家' },
        { minLevel: 45, nameJp: '旦那', nameReading: 'だんな', nameTw: '東家' },
        { minLevel: 55, nameJp: '大店主', nameReading: 'おおだなぬし', nameTw: '大店主' },
        { minLevel: 65, nameJp: '豪商', nameReading: 'ごうしょう', nameTw: '豪商' },
        { minLevel: 75, nameJp: '札差', nameReading: 'ふださし', nameTw: '札差' },
        { minLevel: 85, nameJp: '御用商人', nameReading: 'ごようしょうにん', nameTw: '御用商人' },
        { minLevel: 95, nameJp: '天下の豪商', nameReading: 'てんかのごうしょう', nameTw: '天下豪商' },
      ],
      female: [
        { minLevel: 5, nameJp: '小女', nameReading: 'こおんな', nameTw: '小女' },
        { minLevel: 15, nameJp: '女中', nameReading: 'じょちゅう', nameTw: '女中' },
        { minLevel: 25, nameJp: '番頭', nameReading: 'ばんとう', nameTw: '掌櫃' },
        { minLevel: 35, nameJp: '若女将', nameReading: 'わかおかみ', nameTw: '少女將' },
        { minLevel: 45, nameJp: '女将', nameReading: 'おかみ', nameTw: '女將' },
        { minLevel: 55, nameJp: '大店女将', nameReading: 'おおだなおかみ', nameTw: '大店女將' },
        { minLevel: 65, nameJp: '女豪商', nameReading: 'おんなごうしょう', nameTw: '女豪商' },
        { minLevel: 75, nameJp: '札差', nameReading: 'ふださし', nameTw: '札差' },
        { minLevel: 85, nameJp: '御用商人', nameReading: 'ごようしょうにん', nameTw: '御用商人' },
        { minLevel: 95, nameJp: '天下の女傑', nameReading: 'てんかのじょけつ', nameTw: '天下女傑' },
      ],
    },
  },
  {
    id: 'gakusha',
    nameJp: '学者',
    nameReading: 'がくしゃ',
    nameTw: '學者',
    nameEn: 'Scholar',
    description: '鑽研學問的知識份子',
    descriptionJp: '学問を究める知識人',
    icon: '📚',
    color: 'from-blue-500 to-indigo-600',
    stages: {
      male: [
        { minLevel: 5, nameJp: '寺子', nameReading: 'てらこ', nameTw: '寺子' },
        { minLevel: 15, nameJp: '塾生', nameReading: 'じゅくせい', nameTw: '塾生' },
        { minLevel: 25, nameJp: '門弟', nameReading: 'もんてい', nameTw: '門弟' },
        { minLevel: 35, nameJp: '書生', nameReading: 'しょせい', nameTw: '書生' },
        { minLevel: 45, nameJp: '儒者', nameReading: 'じゅしゃ', nameTw: '儒者' },
        { minLevel: 55, nameJp: '蘭学者', nameReading: 'らんがくしゃ', nameTw: '蘭學者' },
        { minLevel: 65, nameJp: '国学者', nameReading: 'こくがくしゃ', nameTw: '國學者' },
        { minLevel: 75, nameJp: '御儒者', nameReading: 'ごじゅしゃ', nameTw: '御儒者' },
        { minLevel: 85, nameJp: '昌平黌教授', nameReading: 'しょうへいこうきょうじゅ', nameTw: '昌平黌教授' },
        { minLevel: 95, nameJp: '大儒', nameReading: 'たいじゅ', nameTw: '大儒' },
      ],
      female: [
        { minLevel: 5, nameJp: '寺子', nameReading: 'てらこ', nameTw: '寺子' },
        { minLevel: 15, nameJp: '塾生', nameReading: 'じゅくせい', nameTw: '塾生' },
        { minLevel: 25, nameJp: '門弟', nameReading: 'もんてい', nameTw: '門弟' },
        { minLevel: 35, nameJp: '女書生', nameReading: 'おんなしょせい', nameTw: '女書生' },
        { minLevel: 45, nameJp: '女儒者', nameReading: 'おんなじゅしゃ', nameTw: '女儒者' },
        { minLevel: 55, nameJp: '女蘭学者', nameReading: 'おんならんがくしゃ', nameTw: '女蘭學者' },
        { minLevel: 65, nameJp: '女国学者', nameReading: 'おんなこくがくしゃ', nameTw: '女國學者' },
        { minLevel: 75, nameJp: '女流学者', nameReading: 'じょりゅうがくしゃ', nameTw: '女流學者' },
        { minLevel: 85, nameJp: '才媛', nameReading: 'さいえん', nameTw: '才媛' },
        { minLevel: 95, nameJp: '女大家', nameReading: 'おんなたいか', nameTw: '女大家' },
      ],
    },
  },
  {
    id: 'onmyoji',
    nameJp: '陰陽師',
    nameReading: 'おんみょうじ',
    nameTw: '陰陽師',
    nameEn: 'Onmyoji',
    description: '精通陰陽道的術者（女性為巫女）',
    descriptionJp: '陰陽道を極めし術者（女性は巫女）',
    icon: '🔮',
    color: 'from-violet-600 to-purple-800',
    stages: {
      male: [
        { minLevel: 5, nameJp: '見習い', nameReading: 'みならい', nameTw: '見習' },
        { minLevel: 15, nameJp: '卜占師', nameReading: 'ぼくせんし', nameTw: '卜占師' },
        { minLevel: 25, nameJp: '方位師', nameReading: 'ほういし', nameTw: '方位師' },
        { minLevel: 35, nameJp: '呪禁師', nameReading: 'じゅごんし', nameTw: '呪禁師' },
        { minLevel: 45, nameJp: '陰陽師', nameReading: 'おんみょうじ', nameTw: '陰陽師' },
        { minLevel: 55, nameJp: '式神使い', nameReading: 'しきがみつかい', nameTw: '式神使' },
        { minLevel: 65, nameJp: '祭文師', nameReading: 'さいもんし', nameTw: '祭文師' },
        { minLevel: 75, nameJp: '土御門流', nameReading: 'つちみかどりゅう', nameTw: '土御門流' },
        { minLevel: 85, nameJp: '天文博士', nameReading: 'てんもんはかせ', nameTw: '天文博士' },
        { minLevel: 95, nameJp: '大陰陽師', nameReading: 'だいおんみょうじ', nameTw: '大陰陽師' },
      ],
      female: [
        { minLevel: 5, nameJp: '神子', nameReading: 'かみこ', nameTw: '神子' },
        { minLevel: 15, nameJp: '舞姫', nameReading: 'まいひめ', nameTw: '舞姬' },
        { minLevel: 25, nameJp: '巫女', nameReading: 'みこ', nameTw: '巫女' },
        { minLevel: 35, nameJp: '歩き巫女', nameReading: 'あるきみこ', nameTw: '步行巫女' },
        { minLevel: 45, nameJp: '祈祷師', nameReading: 'きとうし', nameTw: '祈禱師' },
        { minLevel: 55, nameJp: '口寄せ', nameReading: 'くちよせ', nameTw: '口寄' },
        { minLevel: 65, nameJp: '神懸り', nameReading: 'かみがかり', nameTw: '神懸' },
        { minLevel: 75, nameJp: '斎女', nameReading: 'いつきめ', nameTw: '齋女' },
        { minLevel: 85, nameJp: '御巫', nameReading: 'みかんなぎ', nameTw: '御巫' },
        { minLevel: 95, nameJp: '神降ろし', nameReading: 'かみおろし', nameTw: '神降' },
      ],
    },
  },
  {
    id: 'ryorinin',
    nameJp: '料理人',
    nameReading: 'りょうりにん',
    nameTw: '料理人',
    nameEn: 'Chef',
    description: '精通料理之道的職人',
    descriptionJp: '食の道を極める職人',
    icon: '🍳',
    color: 'from-orange-500 to-red-600',
    stages: {
      male: [
        { minLevel: 5, nameJp: '下働き', nameReading: 'したばたらき', nameTw: '下手' },
        { minLevel: 15, nameJp: '追い回し', nameReading: 'おいまわし', nameTw: '雜役' },
        { minLevel: 25, nameJp: '煮方', nameReading: 'にかた', nameTw: '煮方' },
        { minLevel: 35, nameJp: '焼方', nameReading: 'やきかた', nameTw: '燒方' },
        { minLevel: 45, nameJp: '板前', nameReading: 'いたまえ', nameTw: '板前' },
        { minLevel: 55, nameJp: '花板', nameReading: 'はないた', nameTw: '花板' },
        { minLevel: 65, nameJp: '料理長', nameReading: 'りょうりちょう', nameTw: '料理長' },
        { minLevel: 75, nameJp: '御膳番', nameReading: 'ごぜんばん', nameTw: '御膳番' },
        { minLevel: 85, nameJp: '包丁人', nameReading: 'ほうちょうにん', nameTw: '包丁人' },
        { minLevel: 95, nameJp: '庖丁師範', nameReading: 'ほうちょうしはん', nameTw: '庖丁師範' },
      ],
      female: [
        { minLevel: 5, nameJp: '下働き', nameReading: 'したばたらき', nameTw: '下手' },
        { minLevel: 15, nameJp: '追い回し', nameReading: 'おいまわし', nameTw: '雜役' },
        { minLevel: 25, nameJp: '煮方', nameReading: 'にかた', nameTw: '煮方' },
        { minLevel: 35, nameJp: '焼方', nameReading: 'やきかた', nameTw: '燒方' },
        { minLevel: 45, nameJp: '賄い', nameReading: 'まかない', nameTw: '賄' },
        { minLevel: 55, nameJp: '台所頭', nameReading: 'だいどころがしら', nameTw: '廚房頭' },
        { minLevel: 65, nameJp: '御膳方', nameReading: 'ごぜんかた', nameTw: '御膳方' },
        { minLevel: 75, nameJp: '御台所', nameReading: 'みだいどころ', nameTw: '御廚房' },
        { minLevel: 85, nameJp: '女包丁人', nameReading: 'おんなほうちょうにん', nameTw: '女包丁人' },
        { minLevel: 95, nameJp: '女庖丁師範', nameReading: 'おんなほうちょうしはん', nameTw: '女庖丁師範' },
      ],
    },
  },
  {
    id: 'hokan',
    nameJp: '幇間',
    nameReading: 'ほうかん',
    nameTw: '幇間',
    nameEn: 'Entertainer',
    description: '炒熱宴席氣氛的藝人（女性為藝妓）',
    descriptionJp: '座敷を盛り上げる芸人（女性は芸妓）',
    icon: '🎪',
    color: 'from-pink-500 to-rose-600',
    stages: {
      male: [
        { minLevel: 5, nameJp: '小僧', nameReading: 'こぞう', nameTw: '小僧' },
        { minLevel: 15, nameJp: '見習い', nameReading: 'みならい', nameTw: '見習' },
        { minLevel: 25, nameJp: '若い衆', nameReading: 'わかいしゅ', nameTw: '年輕眾' },
        { minLevel: 35, nameJp: '幇間', nameReading: 'ほうかん', nameTw: '幇間' },
        { minLevel: 45, nameJp: '太鼓持ち', nameReading: 'たいこもち', nameTw: '太鼓持' },
        { minLevel: 55, nameJp: '座敷持ち', nameReading: 'ざしきもち', nameTw: '座敷持' },
        { minLevel: 65, nameJp: '売れっ子', nameReading: 'うれっこ', nameTw: '紅人' },
        { minLevel: 75, nameJp: '兄さん', nameReading: 'にいさん', nameTw: '兄長' },
        { minLevel: 85, nameJp: '頭取', nameReading: 'とうどり', nameTw: '頭取' },
        { minLevel: 95, nameJp: '名幇間', nameReading: 'めいほうかん', nameTw: '名幇間' },
      ],
      female: [
        { minLevel: 5, nameJp: '仕込みっ子', nameReading: 'しこみっこ', nameTw: '學藝者' },
        { minLevel: 15, nameJp: '舞妓', nameReading: 'まいこ', nameTw: '舞妓' },
        { minLevel: 25, nameJp: '衿替え', nameReading: 'えりかえ', nameTw: '衿替' },
        { minLevel: 35, nameJp: '芸妓', nameReading: 'げいぎ', nameTw: '藝妓' },
        { minLevel: 45, nameJp: '一本', nameReading: 'いっぽん', nameTw: '一本' },
        { minLevel: 55, nameJp: '売れっ妓', nameReading: 'うれっこ', nameTw: '紅妓' },
        { minLevel: 65, nameJp: '姐さん', nameReading: 'ねえさん', nameTw: '姐姐' },
        { minLevel: 75, nameJp: 'お職', nameReading: 'おしょく', nameTw: '御職' },
        { minLevel: 85, nameJp: '太夫', nameReading: 'たゆう', nameTw: '太夫' },
        { minLevel: 95, nameJp: '花魁', nameReading: 'おいらん', nameTw: '花魁' },
      ],
    },
  },
]

// 取得職業資料
export const getJobById = (jobId: string): Job | undefined => {
  return JOBS.find(job => job.id === jobId)
}

// 根據等級取得階段稱號
export const getStageByLevel = (
  job: Job,
  level: number,
  gender: 'male' | 'female'
): JobStage | null => {
  const stages = job.stages[gender]
  // 從最高階段往下找
  for (let i = stages.length - 1; i >= 0; i--) {
    if (level >= stages[i].minLevel) {
      return stages[i]
    }
  }
  return null
}

// 取得當前稱號（傳入 Job 物件）
export const getCurrentTitle = (
  job: Job,
  level: number,
  gender: 'male' | 'female'
): { nameJp: string; nameReading: string; nameTw: string } | null => {
  const stage = getStageByLevel(job, level, gender)
  if (!stage) {
    return null
  }

  return {
    nameJp: stage.nameJp,
    nameReading: stage.nameReading,
    nameTw: stage.nameTw,
  }
}

// 取得當前稱號（傳入 jobId，包含見習階段檢查）
export const getCurrentTitleById = (
  level: number,
  jobId: string | null,
  gender: 'male' | 'female'
): { nameJp: string; nameReading: string; nameTw: string } => {
  // 等級 0-4 為見習
  if (level < 5 || !jobId) {
    return NOVICE_TITLE
  }

  const job = getJobById(jobId)
  if (!job) {
    return NOVICE_TITLE
  }

  const title = getCurrentTitle(job, level, gender)
  if (!title) {
    return NOVICE_TITLE
  }

  return title
}

// 取得角色圖片路徑
// 使用 src/assets/characters/ 的圖片（透過 Vite import）
// 實際邏輯在 config/assets.ts 的 getCharacterImage
export { getCharacterImage as getCharacterImagePath } from '../config/assets'

// 取得職業基礎圖片路徑（不需要 level 參數）
// 使用 src/assets/characters/ 的圖片（透過 Vite import）
export { getJobBaseImage as getJobBaseImagePath } from '../config/assets'
