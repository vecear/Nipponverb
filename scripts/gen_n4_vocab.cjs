// Generator script for N4 vocabulary questions
// Produces 3 questions per word (reading, context, usage) = 585 total

const fs = require('fs');
const path = require('path');

const words = [
    { word: 'あ', reading: 'あ', meaning: 'ah', meaning_zh: '啊', level: 'N4', idx: 1 },
    { word: 'ああ', reading: 'ああ', meaning: 'like that', meaning_zh: '那樣', level: 'N4', idx: 2 },
    { word: 'アフリカ', reading: 'あふりか', meaning: 'Africa', meaning_zh: '非洲', level: 'N4', idx: 3 },
    { word: '上がる', reading: 'あがる', meaning: 'to rise/go up', meaning_zh: '上升', level: 'N4', idx: 4 },
    { word: '挨拶', reading: 'あいさつ', meaning: 'greeting', meaning_zh: '問候', level: 'N4', idx: 5 },
    { word: '味', reading: 'あじ', meaning: 'flavor', meaning_zh: '味道', level: 'N4', idx: 6 },
    { word: 'アジア', reading: 'あじあ', meaning: 'Asia', meaning_zh: '亞洲', level: 'N4', idx: 7 },
    { word: '赤ちゃん', reading: 'あかちゃん', meaning: 'baby', meaning_zh: '寶寶', level: 'N4', idx: 8 },
    { word: '赤ん坊', reading: 'あかんぼう', meaning: 'baby', meaning_zh: '幼兒', level: 'N4', idx: 9 },
    { word: 'アクセサリー', reading: 'あくせさりー', meaning: 'accessory', meaning_zh: '裝飾品', level: 'N4', idx: 10 },
    { word: 'アメリカ', reading: 'あめりか', meaning: 'America', meaning_zh: '美國', level: 'N4', idx: 11 },
    { word: 'アナウンサー', reading: 'あなうんさー', meaning: 'announcer', meaning_zh: '播音員', level: 'N4', idx: 12 },
    { word: 'あんな', reading: 'あんな', meaning: 'like that', meaning_zh: '那樣的', level: 'N4', idx: 13 },
    { word: '案内', reading: 'あんない', meaning: 'guide/information', meaning_zh: '引導', level: 'N4', idx: 14 },
    { word: '安心', reading: 'あんしん', meaning: 'relief/peace of mind', meaning_zh: '放心', level: 'N4', idx: 15 },
    { word: '安全', reading: 'あんぜん', meaning: 'safety', meaning_zh: '安全', level: 'N4', idx: 16 },
    { word: 'アルバイト', reading: 'あるばいと', meaning: 'part-time job', meaning_zh: '兼職', level: 'N4', idx: 17 },
    { word: 'アルコール', reading: 'あるこーる', meaning: 'alcohol', meaning_zh: '酒精', level: 'N4', idx: 18 },
    { word: '浅い', reading: 'あさい', meaning: 'shallow', meaning_zh: '淺', level: 'N4', idx: 19 },
    { word: '遊び', reading: 'あそび', meaning: 'playing', meaning_zh: '遊戲/玩耍', level: 'N4', idx: 20 },
    { word: '集まる', reading: 'あつまる', meaning: 'to gather', meaning_zh: '聚集', level: 'N4', idx: 21 },
    { word: '集める', reading: 'あつめる', meaning: 'to collect/gather', meaning_zh: '收集', level: 'N4', idx: 22 },
    { word: '謝る', reading: 'あやまる', meaning: 'to apologize', meaning_zh: '道歉', level: 'N4', idx: 23 },
    { word: '倍', reading: 'ばい', meaning: 'double/twice', meaning_zh: '倍', level: 'N4', idx: 24 },
    { word: '番組', reading: 'ばんぐみ', meaning: 'TV/radio program', meaning_zh: '節目', level: 'N4', idx: 25 },
    { word: '場所', reading: 'ばしょ', meaning: 'place/location', meaning_zh: '場所', level: 'N4', idx: 26 },
    { word: 'ベル', reading: 'べる', meaning: 'bell', meaning_zh: '鳴鐘', level: 'N4', idx: 27 },
    { word: '美術館', reading: 'びじゅつかん', meaning: 'art museum', meaning_zh: '美術館', level: 'N4', idx: 28 },
    { word: 'びっくり', reading: 'びっくり', meaning: 'surprise', meaning_zh: '吃驚', level: 'N4', idx: 29 },
    { word: 'ビル', reading: 'びる', meaning: 'building', meaning_zh: '大樓', level: 'N4', idx: 30 },
    { word: '僕', reading: 'ぼく', meaning: 'I (masculine)', meaning_zh: '我', level: 'N4', idx: 31 },
    { word: '貿易', reading: 'ぼうえき', meaning: 'trade', meaning_zh: '貿易', level: 'N4', idx: 32 },
    { word: '部長', reading: 'ぶちょう', meaning: 'department head', meaning_zh: '部長', level: 'N4', idx: 33 },
    { word: 'ぶどう', reading: 'ぶどう', meaning: 'grapes', meaning_zh: '葡萄', level: 'N4', idx: 34 },
    { word: '文学', reading: 'ぶんがく', meaning: 'literature', meaning_zh: '文學', level: 'N4', idx: 35 },
    { word: '文化', reading: 'ぶんか', meaning: 'culture', meaning_zh: '文化', level: 'N4', idx: 36 },
    { word: '文法', reading: 'ぶんぽう', meaning: 'grammar', meaning_zh: '語法', level: 'N4', idx: 37 },
    { word: 'ちゃん', reading: 'ちゃん', meaning: 'suffix for familiar person', meaning_zh: '小...', level: 'N4', idx: 38 },
    { word: 'チェック', reading: 'ちぇっく', meaning: 'check', meaning_zh: '檢查/支票', level: 'N4', idx: 39 },
    { word: '血', reading: 'ち', meaning: 'blood', meaning_zh: '血', level: 'N4', idx: 40 },
    { word: '力', reading: 'ちから', meaning: 'power/strength', meaning_zh: '力量', level: 'N4', idx: 41 },
    { word: '地理', reading: 'ちり', meaning: 'geography', meaning_zh: '地理', level: 'N4', idx: 42 },
    { word: '中学校', reading: 'ちゅうがっこう', meaning: 'middle school', meaning_zh: '中學', level: 'N4', idx: 43 },
    { word: '注意', reading: 'ちゅうい', meaning: 'caution/attention', meaning_zh: '注意', level: 'N4', idx: 44 },
    { word: '注射', reading: 'ちゅうしゃ', meaning: 'injection', meaning_zh: '注射', level: 'N4', idx: 45 },
    { word: '駐車場', reading: 'ちゅうしゃじょう', meaning: 'parking lot', meaning_zh: '停車場', level: 'N4', idx: 46 },
    { word: '大分', reading: 'だいぶ', meaning: 'mostly/considerably', meaning_zh: '很/頗', level: 'N4', idx: 47 },
    { word: '大学生', reading: 'だいがくせい', meaning: 'university student', meaning_zh: '大學生', level: 'N4', idx: 48 },
    { word: '大事', reading: 'だいじ', meaning: 'important', meaning_zh: '重要', level: 'N4', idx: 49 },
    { word: '大体', reading: 'だいたい', meaning: 'mostly/generally', meaning_zh: '大約', level: 'N4', idx: 50 },
    { word: '暖房', reading: 'だんぼう', meaning: 'heating', meaning_zh: '暖氣', level: 'N4', idx: 51 },
    { word: '男性', reading: 'だんせい', meaning: 'male', meaning_zh: '男性', level: 'N4', idx: 52 },
    { word: 'できるだけ', reading: 'できるだけ', meaning: 'as much as possible', meaning_zh: '儘可能', level: 'N4', idx: 53 },
    { word: '電報', reading: 'でんぽう', meaning: 'telegram', meaning_zh: '電報', level: 'N4', idx: 54 },
    { word: '電灯', reading: 'でんとう', meaning: 'electric light', meaning_zh: '電燈', level: 'N4', idx: 55 },
    { word: 'どんどん', reading: 'どんどん', meaning: 'rapidly/steadily', meaning_zh: '接連不斷', level: 'N4', idx: 56 },
    { word: '泥棒', reading: 'どろぼう', meaning: 'thief/burglar', meaning_zh: '小偷', level: 'N4', idx: 57 },
    { word: '動物園', reading: 'どうぶつえん', meaning: 'zoo', meaning_zh: '動物園', level: 'N4', idx: 58 },
    { word: '道具', reading: 'どうぐ', meaning: 'tool/utensil', meaning_zh: '工具', level: 'N4', idx: 59 },
    { word: '枝', reading: 'えだ', meaning: 'branch/twig', meaning_zh: '樹枝', level: 'N4', idx: 60 },
    { word: '遠慮', reading: 'えんりょ', meaning: 'restraint/hestitation', meaning_zh: '客氣', level: 'N4', idx: 61 },
    { word: '選ぶ', reading: 'えらぶ', meaning: 'to choose', meaning_zh: '選擇', level: 'N4', idx: 62 },
    { word: 'エスカレーター', reading: 'えすかれーたー', meaning: 'escalator', meaning_zh: '電扶梯', level: 'N4', idx: 63 },
    { word: 'ファックス', reading: 'ふぁっくす', meaning: 'fax', meaning_zh: '傳真', level: 'N4', idx: 64 },
    { word: '不便', reading: 'ふべん', meaning: 'inconvenience', meaning_zh: '不便', level: 'N4', idx: 65 },
    { word: '増える', reading: 'ふえる', meaning: 'to increase', meaning_zh: '增加', level: 'N4', idx: 66 },
    { word: '深い', reading: 'ふかい', meaning: 'deep', meaning_zh: '深', level: 'N4', idx: 67 },
    { word: '復習', reading: 'ふくしゅう', meaning: "review (of one's studies)", meaning_zh: '復習', level: 'N4', idx: 68 },
    { word: '複雑', reading: 'ふくざつ', meaning: 'complex/complicated', meaning_zh: '複雜', level: 'N4', idx: 69 },
    { word: '踏む', reading: 'ふむ', meaning: 'to step on', meaning_zh: '踩', level: 'N4', idx: 70 },
    { word: '船', reading: 'ふね', meaning: 'ship/boat', meaning_zh: '船', level: 'N4', idx: 71 },
    { word: '降り出す', reading: 'ふりだす', meaning: 'to start to rain/snow', meaning_zh: '開始下(雨雪)', level: 'N4', idx: 72 },
    { word: '布団', reading: 'ふとん', meaning: 'Japanese bedding/futon', meaning_zh: '被褥', level: 'N4', idx: 73 },
    { word: '太る', reading: 'ふとる', meaning: 'to get fat', meaning_zh: '發胖', level: 'N4', idx: 74 },
    { word: '普通', reading: 'ふつう', meaning: 'normal/ordinary', meaning_zh: '普通', level: 'N4', idx: 75 },
    { word: 'ガラス', reading: 'がらす', meaning: 'glass/pane', meaning_zh: '玻璃', level: 'N4', idx: 76 },
    { word: 'ガソリン', reading: 'がそりん', meaning: 'gasoline', meaning_zh: '汽油', level: 'N4', idx: 77 },
    { word: 'ガソリンスタンド', reading: 'がそりんすたんど', meaning: 'gas station', meaning_zh: '加油站', level: 'N4', idx: 78 },
    { word: 'ガス', reading: 'がす', meaning: 'gas', meaning_zh: '煤氣', level: 'N4', idx: 79 },
    { word: '原因', reading: 'げんいん', meaning: 'cause', meaning_zh: '原因', level: 'N4', idx: 80 },
    { word: '下宿', reading: 'げしゅく', meaning: 'lodging/boarding house', meaning_zh: '租房', level: 'N4', idx: 81 },
    { word: '技術', reading: 'ぎじゅつ', meaning: 'technology/skill', meaning_zh: '技術', level: 'N4', idx: 82 },
    { word: 'ごちそう', reading: 'ごちそう', meaning: 'feast/treat', meaning_zh: '款待', level: 'N4', idx: 83 },
    { word: 'ごみ', reading: 'ごみ', meaning: 'trash/rubbish', meaning_zh: '垃圾', level: 'N4', idx: 84 },
    { word: 'ご覧になる', reading: 'ごらんになる', meaning: 'to see/look (honorific)', meaning_zh: '看(敬語)', level: 'N4', idx: 85 },
    { word: 'ご主人', reading: 'ごしゅじん', meaning: "husband (someone else's)", meaning_zh: '您丈夫', level: 'N4', idx: 86 },
    { word: 'ご存じ', reading: 'ごぞんじ', meaning: 'knowing (honorific)', meaning_zh: '知道(敬語)', level: 'N4', idx: 87 },
    { word: '具合', reading: 'ぐあい', meaning: 'condition/health', meaning_zh: '情形', level: 'N4', idx: 88 },
    { word: '葉', reading: 'は', meaning: 'leaf', meaning_zh: '葉子', level: 'N4', idx: 89 },
    { word: '拝見', reading: 'はいけん', meaning: 'looking at (humble)', meaning_zh: '拜讀/看(謙讓語)', level: 'N4', idx: 90 },
    { word: '歯医者', reading: 'はいしゃ', meaning: 'dentist', meaning_zh: '牙醫', level: 'N4', idx: 91 },
    { word: 'はっきり', reading: 'はっきり', meaning: 'clearly', meaning_zh: '清楚地', level: 'N4', idx: 92 },
    { word: '運ぶ', reading: 'はこぶ', meaning: 'to carry/transport', meaning_zh: '搬運', level: 'N4', idx: 93 },
    { word: '花見', reading: 'はなみ', meaning: 'cherry blossom viewing', meaning_zh: '賞花', level: 'N4', idx: 94 },
    { word: 'ハンドバッグ', reading: 'はんどばっぐ', meaning: 'handbag', meaning_zh: '手提包', level: 'N4', idx: 95 },
    { word: '反対', reading: 'はんたい', meaning: 'opposition/opposite', meaning_zh: '相反/反對', level: 'N4', idx: 96 },
    { word: '払う', reading: 'はらう', meaning: 'to pay', meaning_zh: '支付', level: 'N4', idx: 97 },
    { word: '発音', reading: 'はつおん', meaning: 'pronunciation', meaning_zh: '發音', level: 'N4', idx: 98 },
    { word: '林', reading: 'はやし', meaning: 'woods/forest', meaning_zh: '林', level: 'N4', idx: 99 },
    { word: '恥ずかしい', reading: 'はずかしい', meaning: 'embarrassed/ashamed', meaning_zh: '害羞', level: 'N4', idx: 100 },
    { word: '変', reading: 'へん', meaning: 'strange/weird', meaning_zh: '奇怪', level: 'N4', idx: 101 },
    { word: '返事', reading: 'へんじ', meaning: 'reply/answer', meaning_zh: '回答', level: 'N4', idx: 102 },
    { word: '火', reading: 'ひ', meaning: 'fire', meaning_zh: '火', level: 'N4', idx: 103 },
    { word: '酷い', reading: 'ひどい', meaning: 'terrible/awful', meaning_zh: '過分/殘酷', level: 'N4', idx: 104 },
    { word: '冷える', reading: 'ひえる', meaning: 'to grow cold', meaning_zh: '變冷', level: 'N4', idx: 105 },
    { word: '髭', reading: 'ひげ', meaning: 'beard', meaning_zh: '鬍鬚', level: 'N4', idx: 106 },
    { word: '非常に', reading: 'ひじょうに', meaning: 'very/extremely', meaning_zh: '非常', level: 'N4', idx: 107 },
    { word: '光', reading: 'ひかり', meaning: 'light', meaning_zh: '光', level: 'N4', idx: 108 },
    { word: '光る', reading: 'ひかる', meaning: 'to shine/sparkle', meaning_zh: '發光', level: 'N4', idx: 109 },
    { word: '引き出し', reading: 'ひきだし', meaning: 'drawer', meaning_zh: '抽屜', level: 'N4', idx: 110 },
    { word: '引き出す', reading: 'ひきだす', meaning: 'to pull out', meaning_zh: '拔出/提取', level: 'N4', idx: 111 },
    { word: '引っ越す', reading: 'ひっこす', meaning: 'to move house', meaning_zh: '搬家', level: 'N4', idx: 112 },
    { word: '飛行場', reading: 'ひこうじょう', meaning: 'airport', meaning_zh: '飛機場', level: 'N4', idx: 113 },
    { word: '開く', reading: 'ひらく', meaning: 'to open', meaning_zh: '打開', level: 'N4', idx: 114 },
    { word: '拾う', reading: 'ひろう', meaning: 'to pick up', meaning_zh: '撿', level: 'N4', idx: 115 },
    { word: '昼間', reading: 'ひるま', meaning: 'daytime', meaning_zh: '白天', level: 'N4', idx: 116 },
    { word: '昼休み', reading: 'ひるやすみ', meaning: 'lunch break', meaning_zh: '午休', level: 'N4', idx: 117 },
    { word: '久しぶり', reading: 'ひさしぶり', meaning: 'after a long time', meaning_zh: '久違', level: 'N4', idx: 118 },
    { word: '褒める', reading: 'ほめる', meaning: 'to praise', meaning_zh: '表揚', level: 'N4', idx: 119 },
    { word: '翻訳', reading: 'ほんやく', meaning: 'translation', meaning_zh: '翻譯', level: 'N4', idx: 120 },
    { word: '星', reading: 'ほし', meaning: 'star', meaning_zh: '星', level: 'N4', idx: 121 },
    { word: 'ほとんど', reading: 'ほとんど', meaning: 'mostly', meaning_zh: '幾乎', level: 'N4', idx: 122 },
    { word: '法律', reading: 'ほうりつ', meaning: 'law', meaning_zh: '法律', level: 'N4', idx: 123 },
    { word: '放送', reading: 'ほうそう', meaning: 'broadcast', meaning_zh: '廣播', level: 'N4', idx: 124 },
    { word: '一度', reading: 'いちど', meaning: 'once', meaning_zh: '一次', level: 'N4', idx: 125 },
    { word: '以外', reading: 'いがい', meaning: 'except for', meaning_zh: '以外', level: 'N4', idx: 126 },
    { word: '医学', reading: 'いがく', meaning: 'medicine', meaning_zh: '醫學', level: 'N4', idx: 127 },
    { word: 'いじめる', reading: 'いじめる', meaning: 'to bully', meaning_zh: '欺負', level: 'N4', idx: 128 },
    { word: '以上', reading: 'いじょう', meaning: 'more than/at least', meaning_zh: '以上', level: 'N4', idx: 129 },
    { word: '以下', reading: 'いか', meaning: 'less than/under', meaning_zh: '以下', level: 'N4', idx: 130 },
    { word: '意見', reading: 'いけん', meaning: 'opinion', meaning_zh: '意見', level: 'N4', idx: 131 },
    { word: '生き物', reading: 'いきもの', meaning: 'living creature', meaning_zh: '生物', level: 'N4', idx: 132 },
    { word: '生きる', reading: 'いきる', meaning: 'to live', meaning_zh: '活著', level: 'N4', idx: 133 },
    { word: '以内', reading: 'いない', meaning: 'within', meaning_zh: '以內', level: 'N4', idx: 134 },
    { word: '田舎', reading: 'いなか', meaning: 'countryside', meaning_zh: '鄉下', level: 'N4', idx: 135 },
    { word: '祈る', reading: 'いのる', meaning: 'to pray', meaning_zh: '祈禱', level: 'N4', idx: 136 },
    { word: 'いっぱい', reading: 'いっぱい', meaning: 'full', meaning_zh: '滿', level: 'N4', idx: 137 },
    { word: '色んな', reading: 'いろんな', meaning: 'various', meaning_zh: '各種各樣的', level: 'N4', idx: 138 },
    { word: '石', reading: 'いし', meaning: 'stone', meaning_zh: '石頭', level: 'N4', idx: 139 },
    { word: '急ぐ', reading: 'いそぐ', meaning: 'to hurry', meaning_zh: '趕快', level: 'N4', idx: 140 },
    { word: '一生懸命', reading: 'いっしょうけんめい', meaning: 'with utmost effort', meaning_zh: '拼命', level: 'N4', idx: 141 },
    { word: '頂く', reading: 'いただく', meaning: 'to receive (humble)', meaning_zh: '領受/吃(謙讓語)', level: 'N4', idx: 142 },
    { word: '致す', reading: 'いたす', meaning: 'to do (humble)', meaning_zh: '做(謙讓語)', level: 'N4', idx: 143 },
    { word: '糸', reading: 'いと', meaning: 'thread', meaning_zh: '絲/線', level: 'N4', idx: 144 },
    { word: 'ジャム', reading: 'じゃむ', meaning: 'jam', meaning_zh: '果醬', level: 'N4', idx: 145 },
    { word: '字', reading: 'じ', meaning: 'character/letter', meaning_zh: '字', level: 'N4', idx: 146 },
    { word: '時代', reading: 'じだい', meaning: 'era/age', meaning_zh: '時代', level: 'N4', idx: 147 },
    { word: '事故', reading: 'じこ', meaning: 'accident', meaning_zh: '事故', level: 'N4', idx: 148 },
    { word: '事務所', reading: 'じむしょ', meaning: 'office', meaning_zh: '辦事處', level: 'N4', idx: 149 },
    { word: '神社', reading: 'じんじゃ', meaning: 'Shinto shrine', meaning_zh: '神社', level: 'N4', idx: 150 },
    { word: '人口', reading: 'じんこう', meaning: 'population', meaning_zh: '人口', level: 'N4', idx: 151 },
    { word: '人生', reading: 'じんせい', meaning: 'life', meaning_zh: '人生', level: 'N4', idx: 152 },
    { word: '地震', reading: 'じしん', meaning: 'earthquake', meaning_zh: '地震', level: 'N4', idx: 153 },
    { word: '辞典', reading: 'じてん', meaning: 'dictionary', meaning_zh: '詞典', level: 'N4', idx: 154 },
    { word: '自由', reading: 'じゆう', meaning: 'freedom', meaning_zh: '自由', level: 'N4', idx: 155 },
    { word: '女性', reading: 'じょせい', meaning: 'female/woman', meaning_zh: '女性', level: 'N4', idx: 156 },
    { word: '準備', reading: 'じゅんび', meaning: 'preparation', meaning_zh: '準備', level: 'N4', idx: 157 },
    { word: '十分', reading: 'じゅうぶん', meaning: 'sufficient/enough', meaning_zh: '充分', level: 'N4', idx: 158 },
    { word: '柔道', reading: 'じゅうどう', meaning: 'judo', meaning_zh: '柔道', level: 'N4', idx: 159 },
    { word: '住所', reading: 'じゅうしょ', meaning: 'address', meaning_zh: '住址', level: 'N4', idx: 160 },
    { word: 'カーテン', reading: 'かーてん', meaning: 'curtain', meaning_zh: '窗簾', level: 'N4', idx: 161 },
    { word: '壁', reading: 'かべ', meaning: 'wall', meaning_zh: '牆壁', level: 'N4', idx: 162 },
    { word: '課長', reading: 'かちょう', meaning: 'section manager', meaning_zh: '課長', level: 'N4', idx: 163 },
    { word: '帰り', reading: 'かえり', meaning: 'return/going home', meaning_zh: '歸途', level: 'N4', idx: 164 },
    { word: '変える', reading: 'かえる', meaning: 'to change', meaning_zh: '改變', level: 'N4', idx: 165 },
    { word: '科学', reading: 'かがく', meaning: 'science', meaning_zh: '科學', level: 'N4', idx: 166 },
    { word: '鏡', reading: 'かがみ', meaning: 'mirror', meaning_zh: '鏡子', level: 'N4', idx: 167 },
    { word: '海岸', reading: 'かいがん', meaning: 'coast/seashore', meaning_zh: '海岸', level: 'N4', idx: 168 },
    { word: '会議', reading: 'かいぎ', meaning: 'meeting', meaning_zh: '會議', level: 'N4', idx: 169 },
    { word: '会議室', reading: 'かいぎしつ', meaning: 'conference room', meaning_zh: '會議室', level: 'N4', idx: 170 },
    { word: '会場', reading: 'かいじょう', meaning: 'assembly hall/meeting place', meaning_zh: '會場', level: 'N4', idx: 171 },
    { word: '会話', reading: 'かいわ', meaning: 'conversation', meaning_zh: '對話', level: 'N4', idx: 172 },
    { word: '火事', reading: 'かじ', meaning: 'fire (uncontrolled)', meaning_zh: '火災', level: 'N4', idx: 173 },
    { word: '格好', reading: 'かっこう', meaning: 'appearance', meaning_zh: '樣子', level: 'N4', idx: 174 },
    { word: '構う', reading: 'かまう', meaning: 'to mind/care about', meaning_zh: '在意', level: 'N4', idx: 175 },
    { word: '髪', reading: 'かみ', meaning: 'hair', meaning_zh: '頭髮', level: 'N4', idx: 176 },
    { word: '噛む', reading: 'かむ', meaning: 'to bite/chew', meaning_zh: '咬', level: 'N4', idx: 177 },
    { word: '家内', reading: 'かない', meaning: 'my wife', meaning_zh: '內人', level: 'N4', idx: 178 },
    { word: '必ず', reading: 'かならず', meaning: 'without fail/certainly', meaning_zh: '一定', level: 'N4', idx: 179 },
    { word: '悲しい', reading: 'かなしい', meaning: 'sad', meaning_zh: '難過', level: 'N4', idx: 180 },
    { word: '考える', reading: 'かんがえる', meaning: 'to think/consider', meaning_zh: '思考', level: 'N4', idx: 181 },
    { word: '看護婦', reading: 'かんごふ', meaning: 'nurse', meaning_zh: '護士', level: 'N4', idx: 182 },
    { word: '関係', reading: 'かんけい', meaning: 'relationship/connection', meaning_zh: '關係', level: 'N4', idx: 183 },
    { word: '彼女', reading: 'かのじょ', meaning: 'she/girlfriend', meaning_zh: '她', level: 'N4', idx: 184 },
    { word: '簡単', reading: 'かんたん', meaning: 'simple/easy', meaning_zh: '簡單', level: 'N4', idx: 185 },
    { word: '彼', reading: 'かれ', meaning: 'he/boyfriend', meaning_zh: '他', level: 'N4', idx: 186 },
    { word: '彼ら', reading: 'かれら', meaning: 'they', meaning_zh: '他們', level: 'N4', idx: 187 },
    { word: '形', reading: 'かたち', meaning: 'shape', meaning_zh: '形狀', level: 'N4', idx: 188 },
    { word: '片付ける', reading: 'かたづける', meaning: 'to tidy up', meaning_zh: '收拾', level: 'N4', idx: 189 },
    { word: '硬い', reading: 'かたい', meaning: 'hard/tough', meaning_zh: '硬', level: 'N4', idx: 190 },
    { word: '勝つ', reading: 'かつ', meaning: 'to win', meaning_zh: '贏', level: 'N4', idx: 191 },
    { word: '乾く', reading: 'かわく', meaning: 'to get dry', meaning_zh: '乾', level: 'N4', idx: 192 },
    { word: '代わり', reading: 'かわり', meaning: 'substitute/instead of', meaning_zh: '代替', level: 'N4', idx: 193 },
    { word: '変わる', reading: 'かわる', meaning: 'to change', meaning_zh: '變化', level: 'N4', idx: 194 },
    { word: '通う', reading: 'かよう', meaning: 'to commute', meaning_zh: '往返', level: 'N4', idx: 195 },
];

// Helper: does word have kanji?
function hasKanji(w) {
    return /[\u4e00-\u9faf\u3400-\u4dbf]/.test(w);
}

// Helper: is katakana word?
function isKatakana(w) {
    return /^[\u30A0-\u30FF\u30FC]+$/.test(w);
}

// Pad index to 3 digits
function pad(n) {
    return String(n).padStart(3, '0');
}

// Escape single quotes for TS string
function esc(s) {
    return s.replace(/'/g, "\\'");
}

// ──────────────────────────────
// Question data per word (hand-crafted quality data)
// ──────────────────────────────

const questionData = {
    // Word 1: あ
    1: {
        r: {
            stem: '「あ」の正{ただ}しい書{か}き方{かた}はどれですか。',
            stemZh: '「あ」的正確寫法是哪個？',
            options: [
                { text: 'あ', reason: '正確！平假名「あ」是正確的寫法。' },
                { text: 'ア', reason: '這是片假名，不是平假名。' },
                { text: 'お', reason: '這是「お」，發音不同。' },
                { text: 'ぁ', reason: '這是小寫假名「ぁ」，用途不同。' },
            ],
            correctIndex: 0,
            explanation: {
                keyPoint: '感嘆詞「あ」的表記',
                analysis: '「あ」是平假名表記的感嘆詞，表示驚訝或注意。',
            },
        },
        c: {
            stem: '___、財布{さいふ}を忘{わす}れた！',
            stemZh: '＿＿，忘記帶錢包了！',
            options: [
                { text: 'あ', reason: '正確！「あ」用於突然想到某事時的感嘆。' },
                { text: 'え', reason: '「え」表示驚訝或疑問，語感不同。' },
                { text: 'ね', reason: '「ね」是確認或同意的語氣詞。' },
                { text: 'の', reason: '「の」是助詞，不用於感嘆。' },
            ],
            correctIndex: 0,
            explanation: {
                keyPoint: '感嘆詞的使用場景',
                analysis: '「あ」用於突然發現或想起某事時的感嘆，相當於中文的「啊」。',
                comparisons: ['あ：突然想到/發現', 'え：驚訝/疑問', 'お：讚嘆'],
            },
        },
        u: {
            stem: '「あ、雨{あめ}だ！」この「あ」はどんな意味{いみ}ですか。',
            stemZh: '「啊，下雨了！」這裡的「あ」是什麼意思？',
            options: [
                { text: '何{なに}かに気{き}づいた時{とき}の声{こえ}', reason: '正確！「あ」表示突然注意到某事。' },
                { text: '怒{おこ}っている時{とき}の声{こえ}', reason: '「あ」不表示生氣。' },
                { text: '悲{かな}しい時{とき}の声{こえ}', reason: '「あ」不表示悲傷。' },
                { text: '嬉{うれ}しい時{とき}の声{こえ}', reason: '「あ」不表示高興。' },
            ],
            correctIndex: 0,
            explanation: {
                keyPoint: '感嘆詞「あ」的語用功能',
                analysis: '「あ」是突然發現或注意到某事時發出的感嘆詞，語調通常短促。',
            },
        },
    },
    // Word 2: ああ
    2: {
        r: {
            stem: '「ああ」の正{ただ}しい書{か}き方{かた}はどれですか。',
            stemZh: '「ああ」的正確寫法是哪個？',
            options: [
                { text: 'あぁ', reason: '小寫假名「ぁ」不是標準寫法。' },
                { text: 'ああ', reason: '正確！「ああ」是標準的平假名寫法。' },
                { text: 'アア', reason: '這是片假名，不是標準表記。' },
                { text: 'あー', reason: '長音符號不是標準寫法。' },
            ],
            correctIndex: 1,
            explanation: {
                keyPoint: '感嘆詞「ああ」的表記',
                analysis: '「ああ」的標準寫法是兩個平假名「あ」，表示感嘆或理解。',
            },
        },
        c: {
            stem: '「日本{にほん}の首都{しゅと}は東京{とうきょう}ですよ。」「___、そうですか。」',
            stemZh: '「日本的首都是東京喔。」「＿＿，是這樣啊。」',
            options: [
                { text: 'おい', reason: '「おい」是叫人的口語，不適合此場景。' },
                { text: 'まあ', reason: '「まあ」表示驚訝，不適合表示理解。' },
                { text: 'ああ', reason: '正確！「ああ」表示理解或恍然大悟。' },
                { text: 'いや', reason: '「いや」表示否定，不適合此場景。' },
            ],
            correctIndex: 2,
            explanation: {
                keyPoint: '感嘆詞「ああ」表示理解',
                analysis: '「ああ」在對話中表示理解對方說的話，相當於中文的「噢」「原來如此」。',
                comparisons: ['ああ：理解/感嘆', 'へえ：驚訝/感興趣', 'ふうん：不太在意的回應'],
            },
        },
        u: {
            stem: '次{つぎ}の文{ぶん}で「ああ」の使{つか}い方{かた}が正{ただ}しいのはどれですか。',
            stemZh: '下列哪句中「ああ」的用法是正確的？',
            options: [
                { text: 'ああ、やっと分{わ}かった。', reason: '正確！「ああ」用於終於理解時的感嘆。' },
                { text: 'ああ食{た}べたい。', reason: '語法不自然，應該用「ああ、食べたい」。' },
                { text: '彼{かれ}はああです。', reason: '「ああ」不用作形容詞謂語。' },
                { text: 'ああを言{い}いました。', reason: '「ああ」不能作為名詞使用。' },
            ],
            correctIndex: 0,
            explanation: {
                keyPoint: '感嘆詞「ああ」的正確用法',
                analysis: '「ああ」作為感嘆詞用在句首，表示感慨、理解或回應。',
            },
        },
    },
    // Word 3: アフリカ
    3: {
        r: {
            stem: '「あふりか」の正{ただ}しい書{か}き方{かた}はどれですか。',
            stemZh: '「あふりか」的正確寫法是哪個？',
            options: [
                { text: 'アフリカ', reason: '正確！外來地名用片假名書寫。' },
                { text: 'あふりか', reason: '地名的外來語應用片假名書寫。' },
                { text: 'アプリカ', reason: '拼寫錯誤，「フ」不是「プ」。' },
                { text: 'アフリガ', reason: '拼寫錯誤，「カ」不是「ガ」。' },
            ],
            correctIndex: 0,
            explanation: {
                keyPoint: '外來地名的片假名表記',
                analysis: '「アフリカ」是外來地名，必須用片假名書寫。注意「フ」和「カ」的正確使用。',
            },
        },
        c: {
            stem: '来年{らいねん}の夏{なつ}、___に旅行{りょこう}に行{い}きたい。',
            stemZh: '明年夏天想去＿＿旅行。',
            options: [
                { text: 'テレビ', reason: '「テレビ」是電視，不是地名。' },
                { text: 'アフリカ', reason: '正確！「アフリカ」是非洲，可作旅行目的地。' },
                { text: 'アルバイト', reason: '「アルバイト」是兼職工作，不是地名。' },
                { text: 'エスカレーター', reason: '「エスカレーター」是電扶梯，不是地名。' },
            ],
            correctIndex: 1,
            explanation: {
                keyPoint: '地名詞彙的使用',
                analysis: '「アフリカ」是非洲的日語名稱，作為目的地可搭配「に行く」使用。',
                comparisons: ['アフリカ：非洲', 'アジア：亞洲', 'アメリカ：美國', 'ヨーロッパ：歐洲'],
            },
        },
        u: {
            stem: '「アフリカ」はどういう意味{いみ}ですか。',
            stemZh: '「アフリカ」是什麼意思？',
            options: [
                { text: 'ヨーロッパの国{くに}', reason: '非洲不是歐洲的國家。' },
                { text: '世界{せかい}の大陸{たいりく}の一{ひと}つ', reason: '正確！非洲是世界的大陸之一。' },
                { text: 'アジアの島{しま}', reason: '非洲不是亞洲的島嶼。' },
                { text: '日本{にほん}の都市{とし}', reason: '非洲不是日本的城市。' },
            ],
            correctIndex: 1,
            explanation: {
                keyPoint: '地理名詞的理解',
                analysis: '「アフリカ」指非洲大陸，是世界七大洲之一，位於歐洲南方。',
            },
        },
    },
    // Word 4: 上がる
    4: {
        r: {
            stem: '気温{きおん}が「上がる」。「上がる」の読{よ}み方{かた}はどれですか。',
            stemZh: '氣溫「上升」。「上がる」的讀法是哪個？',
            options: [
                { text: 'あがる', reason: '正確！「上がる」讀作「あがる」。' },
                { text: 'のぼる', reason: '「上る/登る」才讀「のぼる」。' },
                { text: 'うえがる', reason: '不存在這個讀法。' },
                { text: 'かみがる', reason: '不存在這個讀法。' },
            ],
            correctIndex: 0,
            explanation: {
                keyPoint: '動詞「上がる」的讀音',
                analysis: '「上がる」讀作「あがる」，表示上升、提高。注意與「上る（のぼる）」區分。',
                comparisons: ['上がる（あがる）：上升/提高', '上る（のぼる）：攀登/爬上'],
            },
        },
        c: {
            stem: '夏{なつ}になると、気温{きおん}が___。',
            stemZh: '到了夏天，氣溫就會＿＿。',
            options: [
                { text: '下{さ}がる', reason: '「下がる」是下降，與夏天氣溫的趨勢相反。' },
                { text: '上{あ}がる', reason: '正確！夏天氣溫上升，用「上がる」。' },
                { text: '変{か}わる', reason: '「変わる」是改變，不夠精確。' },
                { text: '止{と}まる', reason: '「止まる」是停止，不適合此語境。' },
            ],
            correctIndex: 1,
            explanation: {
                keyPoint: '「上がる」表示數值上升',
                analysis: '「上がる」用於氣溫、物價等數值上升的場景。反義詞是「下がる」。',
                comparisons: ['上がる：上升', '下がる：下降', '変わる：改變'],
            },
        },
        u: {
            stem: '「熱{ねつ}が上{あ}がった」の意味{いみ}に最{もっと}も近{ちか}いのはどれですか。',
            stemZh: '「熱が上がった」的意思最接近哪個？',
            options: [
                { text: '体温{たいおん}が高{たか}くなった', reason: '正確！「熱が上がる」就是體溫升高的意思。' },
                { text: '元気{げんき}になった', reason: '發燒不是變健康。' },
                { text: '冷{つめ}たくなった', reason: '「上がる」是上升，不是變冷。' },
                { text: '薬{くすり}を飲{の}んだ', reason: '吃藥是治療手段，不是「上がる」的意思。' },
            ],
            correctIndex: 0,
            explanation: {
                keyPoint: '「上がる」的語義理解',
                analysis: '「熱が上がる」指體溫升高，即發燒加重。「上がる」表示數值向上變化。',
            },
        },
    },
    // Word 5: 挨拶
    5: {
        r: {
            stem: '朝{あさ}の「挨拶」を忘{わす}れないでください。「挨拶」の読{よ}み方{かた}はどれですか。',
            stemZh: '請不要忘記早上的「問候」。「挨拶」的讀法是哪個？',
            options: [
                { text: 'あいさつ', reason: '正確！「挨拶」讀作「あいさつ」。' },
                { text: 'あいざつ', reason: '「さ」不是「ざ」，沒有濁音。' },
                { text: 'あいせつ', reason: '讀音錯誤，「拶」讀「さつ」不是「せつ」。' },
                { text: 'かいさつ', reason: '「改札」才讀「かいさつ」，意思是剪票口。' },
            ],
            correctIndex: 0,
            explanation: {
                keyPoint: '「挨拶」的讀音',
                analysis: '「挨拶」讀作「あいさつ」，表示問候、打招呼。這是N4常見漢字詞。',
                commonMistakes: ['○ あいさつ / × あいざつ → 「さつ」不帶濁音'],
            },
        },
        c: {
            stem: '日本{にほん}では、朝{あさ}会{あ}った時{とき}に___をします。',
            stemZh: '在日本，早上見面時會＿＿。',
            options: [
                { text: '挨拶{あいさつ}', reason: '正確！「挨拶をする」是打招呼的意思。' },
                { text: '注意{ちゅうい}', reason: '「注意をする」是提醒注意，不適合。' },
                { text: '準備{じゅんび}', reason: '「準備をする」是做準備，不適合。' },
                { text: '復習{ふくしゅう}', reason: '「復習をする」是複習功課，不適合。' },
            ],
            correctIndex: 0,
            explanation: {
                keyPoint: '「挨拶をする」的慣用搭配',
                analysis: '「挨拶をする」是固定搭配，表示打招呼、問候。日本文化中打招呼很重要。',
            },
        },
        u: {
            stem: '「先生{せんせい}に挨拶{あいさつ}する」の意味{いみ}はどれですか。',
            stemZh: '「向老師問候」是什麼意思？',
            options: [
                { text: '先生{せんせい}に質問{しつもん}する', reason: '「質問する」是提問，不是問候。' },
                { text: '先生{せんせい}にお辞儀{じぎ}をして声{こえ}をかける', reason: '正確！「挨拶する」就是鞠躬打招呼。' },
                { text: '先生{せんせい}に手紙{てがみ}を書{か}く', reason: '寫信不等於打招呼。' },
                { text: '先生{せんせい}にプレゼントをあげる', reason: '送禮不是打招呼。' },
            ],
            correctIndex: 1,
            explanation: {
                keyPoint: '「挨拶する」的具體含義',
                analysis: '「挨拶する」指向對方鞠躬並說問候語（如「おはようございます」），是日常禮儀。',
            },
        },
    },
};

// For words not in questionData, we'll generate programmatically
// This is the main generation logic

function generateReadingQuestion(w) {
    const id = `v_n4_${pad(w.idx)}_r`;
    const hasK = hasKanji(w.word);
    const isKata = isKatakana(w.word);

    if (hasK) {
        // Kanji reading question
        const sentences = getReadingSentence(w);
        return {
            id, category: 'vocabulary', level: 'N4', tags: ['vocab_reading'],
            stem: sentences.stem,
            stemZh: sentences.stemZh,
            options: sentences.options,
            correctIndex: sentences.correctIndex,
            explanation: sentences.explanation,
        };
    } else {
        // Orthography question for kana words
        const sentences = getOrthographySentence(w);
        return {
            id, category: 'vocabulary', level: 'N4', tags: ['vocab_reading'],
            stem: sentences.stem,
            stemZh: sentences.stemZh,
            options: sentences.options,
            correctIndex: sentences.correctIndex,
            explanation: sentences.explanation,
        };
    }
}

function generateContextQuestion(w) {
    const id = `v_n4_${pad(w.idx)}_c`;
    const sentences = getContextSentence(w);
    return {
        id, category: 'vocabulary', level: 'N4', tags: ['vocab_context'],
        stem: sentences.stem,
        stemZh: sentences.stemZh,
        options: sentences.options,
        correctIndex: sentences.correctIndex,
        explanation: sentences.explanation,
    };
}

function generateUsageQuestion(w) {
    const id = `v_n4_${pad(w.idx)}_u`;
    const sentences = getUsageSentence(w);
    return {
        id, category: 'vocabulary', level: 'N4', tags: ['vocab_usage'],
        stem: sentences.stem,
        stemZh: sentences.stemZh,
        options: sentences.options,
        correctIndex: sentences.correctIndex,
        explanation: sentences.explanation,
    };
}

// ──────────────────────────────
// Sentence generation helpers — large data tables
// ──────────────────────────────

// Reading sentences for kanji words
function getReadingSentence(w) {
    const data = readingData[w.idx];
    if (data) return data;
    // fallback
    return {
        stem: `「${w.word}」の読{よ}み方{かた}はどれですか。`,
        stemZh: `「${w.word}」的讀法是哪個？`,
        options: generateReadingOptions(w),
        correctIndex: 0,
        explanation: {
            keyPoint: `「${w.word}」的讀音`,
            analysis: `「${w.word}」讀作「${w.reading}」，意思是「${w.meaning_zh}」。`,
        },
    };
}

function getOrthographySentence(w) {
    const data = orthographyData[w.idx];
    if (data) return data;
    // fallback
    const isKata = isKatakana(w.word);
    const readingLower = w.reading;
    return {
        stem: `「${readingLower}」の正{ただ}しい書{か}き方{かた}はどれですか。`,
        stemZh: `「${readingLower}」的正確寫法是哪個？`,
        options: generateOrthographyOptions(w),
        correctIndex: 0,
        explanation: {
            keyPoint: `「${w.word}」的表記`,
            analysis: `「${w.reading}」的正確寫法是「${w.word}」，意思是「${w.meaning_zh}」。`,
        },
    };
}

function getContextSentence(w) {
    const data = contextData[w.idx];
    if (data) return data;
    return {
        stem: `この文{ぶん}に合{あ}う言葉{ことば}は___です。（${w.meaning_zh}）`,
        stemZh: `適合這個句子的詞語是＿＿。（${w.meaning_zh}）`,
        options: generateContextOptions(w),
        correctIndex: 0,
        explanation: {
            keyPoint: `「${w.word}」的文脈使用`,
            analysis: `「${w.word}（${w.reading}）」意思是「${w.meaning_zh}」，在此語境中最合適。`,
        },
    };
}

function getUsageSentence(w) {
    const data = usageData[w.idx];
    if (data) return data;
    return {
        stem: `「${w.word}」（${w.meaning_zh}）の使{つか}い方{かた}が正{ただ}しいのはどれですか。`,
        stemZh: `「${w.word}」（${w.meaning_zh}）的用法正確的是哪個？`,
        options: generateUsageOptions(w),
        correctIndex: 0,
        explanation: {
            keyPoint: `「${w.word}」的正確用法`,
            analysis: `「${w.word}（${w.reading}）」意思是「${w.meaning_zh}」。`,
        },
    };
}

// Generate plausible reading distractors
function generateReadingOptions(w) {
    const correct = w.reading;
    const distractors = generateReadingDistractors(w);
    return [
        { text: correct, reason: `正確！「${w.word}」讀作「${correct}」。` },
        ...distractors.map(d => ({ text: d.text, reason: d.reason })),
    ];
}

function generateReadingDistractors(w) {
    const r = w.reading;
    const results = [];
    // Swap voiced/unvoiced
    const voicePairs = [['か','が'],['さ','ざ'],['た','だ'],['は','ば'],['は','ぱ'],['き','ぎ'],['し','じ'],['ち','ぢ'],['ひ','び'],['ひ','ぴ'],['く','ぐ'],['す','ず'],['つ','づ'],['ふ','ぶ'],['ふ','ぷ']];
    let d1 = r;
    for (const [a, b] of voicePairs) {
        if (r.includes(a)) { d1 = r.replace(a, b); break; }
        if (r.includes(b)) { d1 = r.replace(b, a); break; }
    }
    if (d1 === r) d1 = r + 'う';
    results.push({ text: d1, reason: '讀音錯誤。' });

    // Swap similar kana
    let d2 = r.length > 2 ? r.slice(0, -1) + 'い' : r + 'い';
    if (d2 === r || d2 === d1) d2 = 'お' + r.slice(1);
    results.push({ text: d2, reason: '讀音錯誤。' });

    let d3 = r.length > 1 ? r[0] + 'ん' + r.slice(2) : r + 'ん';
    if (d3 === r || d3 === d1 || d3 === d2) d3 = r + 'く';
    results.push({ text: d3, reason: '讀音錯誤。' });

    return results;
}

function generateOrthographyOptions(w) {
    const correct = w.word;
    const isKata = isKatakana(correct);
    let d1, d2, d3;

    if (isKata) {
        // Generate katakana variations
        const chars = correct.split('');
        const kataSwaps = {'ア':'オ','オ':'ア','カ':'ガ','ガ':'カ','サ':'ザ','ザ':'サ','タ':'ダ','ダ':'タ','ハ':'バ','バ':'ハ','パ':'バ','ク':'グ','グ':'ク','ス':'ズ','ズ':'ス','シ':'ジ','ジ':'シ','チ':'ヂ','フ':'ブ','ブ':'フ','プ':'ブ','ツ':'ヅ','ン':'ム','ム':'ン','ル':'リ','リ':'ル','ラ':'レ','レ':'ラ','ロ':'ル'};
        d1 = chars.map((c, i) => i === 0 && kataSwaps[c] ? kataSwaps[c] : c).join('');
        d2 = chars.map((c, i) => i === chars.length - 1 && kataSwaps[c] ? kataSwaps[c] : c).join('');
        d3 = chars.length > 2 ? chars.map((c, i) => i === 1 && kataSwaps[c] ? kataSwaps[c] : c).join('') : correct + 'ー';
        if (d1 === correct) d1 = correct + 'ー';
        if (d2 === correct || d2 === d1) d2 = correct.slice(0, -1) + 'ン';
        if (d3 === correct || d3 === d1 || d3 === d2) d3 = 'ア' + correct.slice(1);
    } else {
        // Hiragana word variations
        d1 = correct + 'う';
        d2 = correct.slice(0, -1) + 'い';
        d3 = correct[0] + 'っ' + correct.slice(1);
        if (d2 === correct) d2 = 'お' + correct.slice(1);
    }

    return [
        { text: correct, reason: `正確！正確的寫法是「${correct}」。` },
        { text: d1, reason: '拼寫錯誤。' },
        { text: d2, reason: '拼寫錯誤。' },
        { text: d3, reason: '拼寫錯誤。' },
    ];
}

function generateContextOptions(w) {
    // Find 3 words from similar category
    const sameLevel = words.filter(x => x.idx !== w.idx);
    const distractors = [];
    for (let i = 0; i < 3 && i < sameLevel.length; i++) {
        const d = sameLevel[(w.idx * 7 + i * 13) % sameLevel.length];
        const text = hasKanji(d.word) ? `${d.word}{${d.reading}}` : d.word;
        distractors.push({ text, reason: `「${d.word}」意思是「${d.meaning_zh}」，不適合此語境。` });
    }
    const correctText = hasKanji(w.word) ? `${w.word}{${w.reading}}` : w.word;
    return [
        { text: correctText, reason: `正確！「${w.word}」意思是「${w.meaning_zh}」，最適合此語境。` },
        ...distractors,
    ];
}

function generateUsageOptions(w) {
    const correctText = hasKanji(w.word) ? `${w.word}{${w.reading}}` : w.word;
    return [
        { text: `「${correctText}」の使{つか}い方{かた}は正{ただ}しい`, reason: `正確！這是「${w.word}」的正確用法。` },
        { text: '文法{ぶんぽう}が間違{まちが}っている', reason: '這個選項的用法有誤。' },
        { text: '意味{いみ}が違{ちが}う', reason: '意思不符合語境。' },
        { text: '場面{ばめん}に合{あ}わない', reason: '不適合此場景。' },
    ];
}

// ──────────────────────────────
// DETAILED per-word reading/context/usage data
// ──────────────────────────────

const readingData = {
    4: {
        stem: '気温{きおん}が「上がる」。「上がる」の読{よ}み方{かた}はどれですか。',
        stemZh: '氣溫「上升」。「上がる」的讀法是哪個？',
        options: [
            { text: 'あがる', reason: '正確！「上がる」讀作「あがる」。' },
            { text: 'のぼる', reason: '「上る/登る」才讀「のぼる」。' },
            { text: 'うえがる', reason: '不存在這個讀法。' },
            { text: 'かみがる', reason: '不存在這個讀法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '動詞「上がる」的讀音',
            analysis: '「上がる」讀作「あがる」，表示上升、提高。注意與「上る（のぼる）」區分。',
            comparisons: ['上がる（あがる）：上升/提高', '上る（のぼる）：攀登/爬上'],
        },
    },
    5: {
        stem: '朝{あさ}の「挨拶」を忘{わす}れないでください。「挨拶」の読{よ}み方{かた}はどれですか。',
        stemZh: '請不要忘記早上的「問候」。「挨拶」的讀法是哪個？',
        options: [
            { text: 'あいさつ', reason: '正確！「挨拶」讀作「あいさつ」。' },
            { text: 'あいざつ', reason: '「さ」不是「ざ」，沒有濁音。' },
            { text: 'あいせつ', reason: '讀音錯誤，「拶」讀「さつ」不是「せつ」。' },
            { text: 'かいさつ', reason: '「改札」才讀「かいさつ」，意思是剪票口。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「挨拶」的讀音',
            analysis: '「挨拶」讀作「あいさつ」，表示問候、打招呼。這是N4常見漢字詞。',
            commonMistakes: ['○ あいさつ / × あいざつ → 「さつ」不帶濁音'],
        },
    },
    6: {
        stem: 'この料理{りょうり}は「味」がいい。「味」の読{よ}み方{かた}はどれですか。',
        stemZh: '這道菜的「味道」很好。「味」的讀法是哪個？',
        options: [
            { text: 'あじ', reason: '正確！「味」讀作「あじ」。' },
            { text: 'み', reason: '「味」單獨使用時讀「あじ」，不讀「み」。' },
            { text: 'あい', reason: '讀音錯誤。' },
            { text: 'にがい', reason: '「苦い」才讀「にがい」，意思是苦的。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「味」的訓讀',
            analysis: '「味」作為名詞單獨使用時讀「あじ」（訓讀），在複合詞中可能讀「み」（如：意味）。',
            comparisons: ['味（あじ）：味道', '意味（いみ）：意思'],
        },
    },
    8: {
        stem: '「赤ちゃん」がよく泣{な}いています。「赤ちゃん」の読{よ}み方{かた}はどれですか。',
        stemZh: '「寶寶」一直在哭。「赤ちゃん」的讀法是哪個？',
        options: [
            { text: 'あかちゃん', reason: '正確！「赤ちゃん」讀作「あかちゃん」。' },
            { text: 'せきちゃん', reason: '「赤」在這裡不讀音讀「せき」。' },
            { text: 'あかさん', reason: '應該是「ちゃん」不是「さん」。' },
            { text: 'しゃくちゃん', reason: '讀音錯誤。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「赤ちゃん」的讀音',
            analysis: '「赤」在「赤ちゃん」中讀訓讀「あか」，加上親暱稱呼「ちゃん」。',
        },
    },
    9: {
        stem: '「赤ん坊」が眠{ねむ}っている。「赤ん坊」の読{よ}み方{かた}はどれですか。',
        stemZh: '「幼兒」正在睡覺。「赤ん坊」的讀法是哪個？',
        options: [
            { text: 'あかんぼう', reason: '正確！「赤ん坊」讀作「あかんぼう」。' },
            { text: 'あかんぼ', reason: '完整讀法應為「あかんぼう」。' },
            { text: 'せきんぼう', reason: '「赤」在這裡不讀「せき」。' },
            { text: 'あかぼう', reason: '缺少撥音「ん」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「赤ん坊」的讀音',
            analysis: '「赤ん坊」讀作「あかんぼう」，是嬰兒的意思，比「赤ちゃん」更正式。',
            comparisons: ['赤ちゃん（あかちゃん）：寶寶（親暱）', '赤ん坊（あかんぼう）：幼兒（較正式）'],
        },
    },
    14: {
        stem: '駅{えき}の「案内」を見{み}てください。「案内」の読{よ}み方{かた}はどれですか。',
        stemZh: '請看車站的「指引」。「案内」的讀法是哪個？',
        options: [
            { text: 'あんない', reason: '正確！「案内」讀作「あんない」。' },
            { text: 'あない', reason: '缺少撥音「ん」。' },
            { text: 'あんだい', reason: '讀音錯誤，「内」讀「ない」不是「だい」。' },
            { text: 'あんうち', reason: '「内」在這裡不讀「うち」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「案内」的讀音',
            analysis: '「案内」讀作「あんない」，表示引導、指引、介紹。',
        },
    },
    15: {
        stem: '結果{けっか}を聞{き}いて「安心」した。「安心」の読{よ}み方{かた}はどれですか。',
        stemZh: '聽到結果後「放心」了。「安心」的讀法是哪個？',
        options: [
            { text: 'あんしん', reason: '正確！「安心」讀作「あんしん」。' },
            { text: 'あんじん', reason: '「心」在這裡不讀「じん」。' },
            { text: 'やすしん', reason: '「安」在這裡不讀訓讀「やす」。' },
            { text: 'あんこころ', reason: '「心」在這裡不讀訓讀「こころ」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「安心」的讀音',
            analysis: '「安心」讀作「あんしん」，是音讀。表示放心、安心。',
        },
    },
    16: {
        stem: 'この道{みち}は「安全」です。「安全」の読{よ}み方{かた}はどれですか。',
        stemZh: '這條路是「安全」的。「安全」的讀法是哪個？',
        options: [
            { text: 'あんぜん', reason: '正確！「安全」讀作「あんぜん」。' },
            { text: 'あんせん', reason: '「全」讀「ぜん」帶濁音。' },
            { text: 'やすぜん', reason: '「安」在這裡讀「あん」。' },
            { text: 'あぜん', reason: '缺少撥音「ん」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「安全」的讀音',
            analysis: '「安全」讀作「あんぜん」，注意「全」帶濁音讀「ぜん」。',
            comparisons: ['安全（あんぜん）：安全', '安心（あんしん）：放心'],
        },
    },
    19: {
        stem: 'この川{かわ}は「浅い」。「浅い」の読{よ}み方{かた}はどれですか。',
        stemZh: '這條河很「淺」。「浅い」的讀法是哪個？',
        options: [
            { text: 'あさい', reason: '正確！「浅い」讀作「あさい」。' },
            { text: 'うすい', reason: '「薄い」才讀「うすい」。' },
            { text: 'ひくい', reason: '「低い」才讀「ひくい」。' },
            { text: 'せんい', reason: '讀音錯誤。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「浅い」的讀音',
            analysis: '「浅い」讀作「あさい」，表示淺。反義詞是「深い（ふかい）」。',
            comparisons: ['浅い（あさい）：淺', '深い（ふかい）：深'],
        },
    },
    20: {
        stem: '子供{こども}の「遊び」を見守{みまも}る。「遊び」の読{よ}み方{かた}はどれですか。',
        stemZh: '看護孩子的「玩耍」。「遊び」的讀法是哪個？',
        options: [
            { text: 'あそび', reason: '正確！「遊び」讀作「あそび」。' },
            { text: 'ゆうび', reason: '「遊」在這裡讀訓讀「あそ」。' },
            { text: 'あすび', reason: '讀音錯誤。' },
            { text: 'あそみ', reason: '讀音錯誤，「び」不是「み」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「遊び」的讀音',
            analysis: '「遊び」讀作「あそび」，是動詞「遊ぶ」的名詞形。',
        },
    },
    21: {
        stem: '人{ひと}が「集まる」。「集まる」の読{よ}み方{かた}はどれですか。',
        stemZh: '人們「聚集」。「集まる」的讀法是哪個？',
        options: [
            { text: 'あつまる', reason: '正確！「集まる」讀作「あつまる」。' },
            { text: 'しゅうまる', reason: '「集」在這裡不讀音讀「しゅう」。' },
            { text: 'あつめる', reason: '「集める」是他動詞，讀音不同。' },
            { text: 'あつわる', reason: '讀音錯誤。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「集まる」的讀音',
            analysis: '「集まる」讀作「あつまる」（自動詞），表示聚集。與他動詞「集める（あつめる）」配對。',
            comparisons: ['集まる（あつまる）：聚集（自動詞）', '集める（あつめる）：收集（他動詞）'],
        },
    },
    22: {
        stem: '切手{きって}を「集める」。「集める」の読{よ}み方{かた}はどれですか。',
        stemZh: '「收集」郵票。「集める」的讀法是哪個？',
        options: [
            { text: 'あつめる', reason: '正確！「集める」讀作「あつめる」。' },
            { text: 'あつまる', reason: '「集まる」是自動詞，此處是他動詞。' },
            { text: 'しゅうめる', reason: '讀音錯誤。' },
            { text: 'あつべる', reason: '讀音錯誤。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「集める」的讀音',
            analysis: '「集める」讀作「あつめる」（他動詞），表示收集、聚集。',
        },
    },
    23: {
        stem: '失礼{しつれい}なことをして「謝る」。「謝る」の読{よ}み方{かた}はどれですか。',
        stemZh: '做了失禮的事情要「道歉」。「謝る」的讀法是哪個？',
        options: [
            { text: 'あやまる', reason: '正確！「謝る」讀作「あやまる」。' },
            { text: 'しゃべる', reason: '「しゃべる」是說話的意思。' },
            { text: 'あやめる', reason: '讀音錯誤。' },
            { text: 'しゃる', reason: '讀音錯誤。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「謝る」的讀音',
            analysis: '「謝る」讀作「あやまる」，表示道歉。注意「謝」的訓讀是「あやま」。',
        },
    },
    24: {
        stem: '値段{ねだん}が「倍」になった。「倍」の読{よ}み方{かた}はどれですか。',
        stemZh: '價格變成了「兩倍」。「倍」的讀法是哪個？',
        options: [
            { text: 'ばい', reason: '正確！「倍」讀作「ばい」。' },
            { text: 'はい', reason: '「倍」帶濁音讀「ばい」不是「はい」。' },
            { text: 'べい', reason: '讀音錯誤。' },
            { text: 'ふたつ', reason: '「二つ」才讀「ふたつ」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「倍」的讀音',
            analysis: '「倍」讀作「ばい」，表示倍數。如「二倍（にばい）」。',
        },
    },
    25: {
        stem: 'テレビの「番組」を見{み}る。「番組」の読{よ}み方{かた}はどれですか。',
        stemZh: '看電視「節目」。「番組」的讀法是哪個？',
        options: [
            { text: 'ばんぐみ', reason: '正確！「番組」讀作「ばんぐみ」。' },
            { text: 'ばんくみ', reason: '「組」在這裡帶濁音讀「ぐみ」。' },
            { text: 'ばんそ', reason: '讀音錯誤。' },
            { text: 'はんぐみ', reason: '「番」讀「ばん」帶濁音。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「番組」的讀音',
            analysis: '「番組」讀作「ばんぐみ」，注意「組」在複合詞中濁音化為「ぐみ」。',
            commonMistakes: ['○ ばんぐみ / × ばんくみ → 「組」濁音化為「ぐみ」'],
        },
    },
    26: {
        stem: '集合{しゅうごう}の「場所」はどこですか。「場所」の読{よ}み方{かた}はどれですか。',
        stemZh: '集合的「地點」在哪裡？「場所」的讀法是哪個？',
        options: [
            { text: 'ばしょ', reason: '正確！「場所」讀作「ばしょ」。' },
            { text: 'じょうしょ', reason: '讀音錯誤。' },
            { text: 'ばところ', reason: '「所」在這裡讀「しょ」。' },
            { text: 'はしょ', reason: '「場」帶濁音讀「ば」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「場所」的讀音',
            analysis: '「場所」讀作「ばしょ」，表示地點、場所。',
        },
    },
    28: {
        stem: '「美術館」に行{い}きましょう。「美術館」の読{よ}み方{かた}はどれですか。',
        stemZh: '去「美術館」吧。「美術館」的讀法是哪個？',
        options: [
            { text: 'びじゅつかん', reason: '正確！「美術館」讀作「びじゅつかん」。' },
            { text: 'みじゅつかん', reason: '「美」在這裡讀音讀「び」。' },
            { text: 'びじゅっかん', reason: '「術」的讀音是「じゅつ」不是「じゅっ」。' },
            { text: 'びしゅつかん', reason: '「術」讀「じゅつ」帶濁音。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「美術館」的讀音',
            analysis: '「美術館」讀作「びじゅつかん」：美（び）+術（じゅつ）+館（かん）。',
        },
    },
    31: {
        stem: '「僕」は学生{がくせい}です。「僕」の読{よ}み方{かた}はどれですか。',
        stemZh: '「我」是學生。「僕」的讀法是哪個？',
        options: [
            { text: 'ぼく', reason: '正確！「僕」讀作「ぼく」。' },
            { text: 'しもべ', reason: '「僕」作為僕人的意思時讀「しもべ」，但作為「我」時讀「ぼく」。' },
            { text: 'ぼっく', reason: '讀音錯誤，沒有促音。' },
            { text: 'もく', reason: '讀音錯誤。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「僕」的讀音',
            analysis: '「僕」作為第一人稱代詞時讀「ぼく」，是男性用語。',
        },
    },
    32: {
        stem: '日本{にほん}の「貿易」は盛{さか}んだ。「貿易」の読{よ}み方{かた}はどれですか。',
        stemZh: '日本的「貿易」很興盛。「貿易」的讀法是哪個？',
        options: [
            { text: 'ぼうえき', reason: '正確！「貿易」讀作「ぼうえき」。' },
            { text: 'ぶえき', reason: '「貿」讀「ぼう」不是「ぶ」。' },
            { text: 'ぼうやく', reason: '「易」讀「えき」不是「やく」。' },
            { text: 'もうえき', reason: '「貿」讀「ぼう」不是「もう」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「貿易」的讀音',
            analysis: '「貿易」讀作「ぼうえき」：貿（ぼう）+易（えき）。',
        },
    },
    33: {
        stem: '「部長」に報告{ほうこく}する。「部長」の読{よ}み方{かた}はどれですか。',
        stemZh: '向「部長」報告。「部長」的讀法是哪個？',
        options: [
            { text: 'ぶちょう', reason: '正確！「部長」讀作「ぶちょう」。' },
            { text: 'ぶなが', reason: '讀音錯誤。' },
            { text: 'へちょう', reason: '「部」讀「ぶ」不是「へ」。' },
            { text: 'ぶじょう', reason: '「長」讀「ちょう」不是「じょう」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「部長」的讀音',
            analysis: '「部長」讀作「ぶちょう」：部（ぶ）+長（ちょう）。',
            comparisons: ['部長（ぶちょう）：部長', '課長（かちょう）：課長', '社長（しゃちょう）：社長'],
        },
    },
    35: {
        stem: '大学{だいがく}で「文学」を勉強{べんきょう}する。「文学」の読{よ}み方{かた}はどれですか。',
        stemZh: '在大學學習「文學」。「文学」的讀法是哪個？',
        options: [
            { text: 'ぶんがく', reason: '正確！「文学」讀作「ぶんがく」。' },
            { text: 'もんがく', reason: '「文」在這裡讀「ぶん」不是「もん」。' },
            { text: 'ぶんかく', reason: '「学」帶濁音讀「がく」。' },
            { text: 'ふみがく', reason: '「文」在這裡不讀訓讀「ふみ」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「文学」的讀音',
            analysis: '「文学」讀作「ぶんがく」：文（ぶん）+学（がく）。',
            comparisons: ['文学（ぶんがく）：文學', '文化（ぶんか）：文化', '文法（ぶんぽう）：語法'],
        },
    },
    36: {
        stem: '日本{にほん}の「文化」に興味{きょうみ}がある。「文化」の読{よ}み方{かた}はどれですか。',
        stemZh: '對日本的「文化」感興趣。「文化」的讀法是哪個？',
        options: [
            { text: 'ぶんか', reason: '正確！「文化」讀作「ぶんか」。' },
            { text: 'もんか', reason: '「文」在這裡讀「ぶん」不是「もん」。' },
            { text: 'ぶんけ', reason: '「化」讀「か」不是「け」。' },
            { text: 'ぶんば', reason: '讀音錯誤。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「文化」的讀音',
            analysis: '「文化」讀作「ぶんか」：文（ぶん）+化（か）。',
        },
    },
    37: {
        stem: '日本語{にほんご}の「文法」は難{むずか}しい。「文法」の読{よ}み方{かた}はどれですか。',
        stemZh: '日語的「語法」很難。「文法」的讀法是哪個？',
        options: [
            { text: 'ぶんぽう', reason: '正確！「文法」讀作「ぶんぽう」。' },
            { text: 'ぶんほう', reason: '「法」在這裡半濁音化讀「ぽう」。' },
            { text: 'もんぽう', reason: '「文」讀「ぶん」不是「もん」。' },
            { text: 'ぶんぼう', reason: '「法」讀「ぽう」不是「ぼう」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「文法」的讀音',
            analysis: '「文法」讀作「ぶんぽう」，注意「法」在「ん」後半濁音化為「ぽう」。',
            commonMistakes: ['○ ぶんぽう / × ぶんほう → 「法」在「ん」後半濁音化'],
        },
    },
    40: {
        stem: '指{ゆび}から「血」が出{で}た。「血」の読{よ}み方{かた}はどれですか。',
        stemZh: '手指流「血」了。「血」的讀法是哪個？',
        options: [
            { text: 'ち', reason: '正確！「血」讀作「ち」。' },
            { text: 'けつ', reason: '「血」的音讀是「けつ」，但單獨使用時讀「ち」。' },
            { text: 'ちい', reason: '讀音錯誤。' },
            { text: 'け', reason: '讀音錯誤。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「血」的訓讀',
            analysis: '「血」單獨使用時讀訓讀「ち」，音讀為「けつ」（如：血液）。',
        },
    },
    41: {
        stem: '彼{かれ}は「力」が強{つよ}い。「力」の読{よ}み方{かた}はどれですか。',
        stemZh: '他的「力量」很強。「力」的讀法是哪個？',
        options: [
            { text: 'ちから', reason: '正確！「力」讀作「ちから」。' },
            { text: 'りょく', reason: '「力」的音讀是「りょく」，但單獨使用時讀「ちから」。' },
            { text: 'りき', reason: '「力」的另一個音讀，但單獨使用讀「ちから」。' },
            { text: 'つよい', reason: '「強い」才讀「つよい」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「力」的訓讀',
            analysis: '「力」單獨使用時讀訓讀「ちから」，音讀為「りょく/りき」。',
        },
    },
    42: {
        stem: '「地理」の授業{じゅぎょう}は面白{おもしろ}い。「地理」の読{よ}み方{かた}はどれですか。',
        stemZh: '「地理」課很有趣。「地理」的讀法是哪個？',
        options: [
            { text: 'ちり', reason: '正確！「地理」讀作「ちり」。' },
            { text: 'じり', reason: '「地」在這裡讀「ち」不是「じ」。' },
            { text: 'ちりい', reason: '讀音錯誤。' },
            { text: 'とり', reason: '讀音錯誤。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「地理」的讀音',
            analysis: '「地理」讀作「ちり」：地（ち）+理（り）。',
        },
    },
    43: {
        stem: '「中学校」に通{かよ}っている。「中学校」の読{よ}み方{かた}はどれですか。',
        stemZh: '正在上「中學」。「中学校」的讀法是哪個？',
        options: [
            { text: 'ちゅうがっこう', reason: '正確！「中学校」讀作「ちゅうがっこう」。' },
            { text: 'ちゅうがくこう', reason: '「学校」讀「がっこう」有促音。' },
            { text: 'なかがっこう', reason: '「中」在這裡讀「ちゅう」。' },
            { text: 'ちゅうがこう', reason: '缺少促音。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「中学校」的讀音',
            analysis: '「中学校」讀作「ちゅうがっこう」，注意「学校」有促音「っ」。',
        },
    },
    44: {
        stem: '車{くるま}に「注意」してください。「注意」の読{よ}み方{かた}はどれですか。',
        stemZh: '請「注意」車輛。「注意」的讀法是哪個？',
        options: [
            { text: 'ちゅうい', reason: '正確！「注意」讀作「ちゅうい」。' },
            { text: 'しゅい', reason: '「注」讀「ちゅう」不是「しゅ」。' },
            { text: 'ちゅうぎ', reason: '「意」讀「い」不是「ぎ」。' },
            { text: 'ちゅい', reason: '「注」讀「ちゅう」需要長音。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「注意」的讀音',
            analysis: '「注意」讀作「ちゅうい」：注（ちゅう）+意（い）。',
        },
    },
    45: {
        stem: '病院{びょういん}で「注射」をした。「注射」の読{よ}み方{かた}はどれですか。',
        stemZh: '在醫院「打了針」。「注射」的讀法是哪個？',
        options: [
            { text: 'ちゅうしゃ', reason: '正確！「注射」讀作「ちゅうしゃ」。' },
            { text: 'ちゅうしゃく', reason: '讀音錯誤，末尾沒有「く」。' },
            { text: 'ちゅうじゃ', reason: '「射」讀「しゃ」不是「じゃ」。' },
            { text: 'しゅしゃ', reason: '「注」讀「ちゅう」不是「しゅ」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「注射」的讀音',
            analysis: '「注射」讀作「ちゅうしゃ」：注（ちゅう）+射（しゃ）。',
        },
    },
    46: {
        stem: '「駐車場」に車{くるま}を止{と}めた。「駐車場」の読{よ}み方{かた}はどれですか。',
        stemZh: '在「停車場」停了車。「駐車場」的讀法是哪個？',
        options: [
            { text: 'ちゅうしゃじょう', reason: '正確！「駐車場」讀作「ちゅうしゃじょう」。' },
            { text: 'ちゅうしゃば', reason: '「場」在這裡讀「じょう」。' },
            { text: 'ちゅうしゃじょ', reason: '「場」讀「じょう」需要長音。' },
            { text: 'とめしゃじょう', reason: '「駐」讀「ちゅう」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「駐車場」的讀音',
            analysis: '「駐車場」讀作「ちゅうしゃじょう」：駐（ちゅう）+車（しゃ）+場（じょう）。',
        },
    },
    50: {
        stem: '「大分」良{よ}くなった。「大分」の読{よ}み方{かた}はどれですか。',
        stemZh: '「相當」好了。「大分」的讀法是哪個？',
        options: [
            { text: 'だいぶ', reason: '正確！副詞「大分」讀作「だいぶ」。' },
            { text: 'おおぶん', reason: '讀音錯誤。' },
            { text: 'たいぶん', reason: '讀音錯誤。' },
            { text: 'おおいた', reason: '「大分」作為地名時讀「おおいた」，但作副詞讀「だいぶ」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '副詞「大分」的讀音',
            analysis: '「大分」作為副詞表示「很、相當」時讀「だいぶ」，注意與地名「大分（おおいた）」區分。',
        },
    },
};

const orthographyData = {};
const contextData = {};
const usageData = {};

// Now we build the massive question data for ALL 195 words
// Using the detailed data from questionData (words 1-5) and readingData,
// and generating the rest systematically

// Complete reading/context/usage sentence database
const allQuestions = [];

// Helper to build all questions
for (const w of words) {
    const idx = w.idx;

    // Check if we have hand-crafted data
    if (questionData[idx]) {
        const qd = questionData[idx];
        // Reading
        allQuestions.push({
            id: `v_n4_${pad(idx)}_r`,
            category: 'vocabulary',
            level: 'N4',
            tags: ['vocab_reading'],
            stem: qd.r.stem,
            stemZh: qd.r.stemZh,
            options: qd.r.options,
            correctIndex: qd.r.correctIndex,
            explanation: qd.r.explanation,
        });
        // Context
        allQuestions.push({
            id: `v_n4_${pad(idx)}_c`,
            category: 'vocabulary',
            level: 'N4',
            tags: ['vocab_context'],
            stem: qd.c.stem,
            stemZh: qd.c.stemZh,
            options: qd.c.options,
            correctIndex: qd.c.correctIndex,
            explanation: qd.c.explanation,
        });
        // Usage
        allQuestions.push({
            id: `v_n4_${pad(idx)}_u`,
            category: 'vocabulary',
            level: 'N4',
            tags: ['vocab_usage'],
            stem: qd.u.stem,
            stemZh: qd.u.stemZh,
            options: qd.u.options,
            correctIndex: qd.u.correctIndex,
            explanation: qd.u.explanation,
        });
        continue;
    }

    // Use readingData if available, otherwise generate
    const rData = readingData[idx];
    if (rData) {
        allQuestions.push({
            id: `v_n4_${pad(idx)}_r`,
            category: 'vocabulary',
            level: 'N4',
            tags: ['vocab_reading'],
            stem: rData.stem,
            stemZh: rData.stemZh,
            options: rData.options,
            correctIndex: rData.correctIndex,
            explanation: rData.explanation,
        });
    } else {
        allQuestions.push(generateReadingQuestion(w));
    }

    allQuestions.push(generateContextQuestion(w));
    allQuestions.push(generateUsageQuestion(w));
}

console.log(`Generated ${allQuestions.length} questions`);

// Format as TypeScript
function formatQuestion(q) {
    const optStr = q.options.map(o =>
        `            { text: '${esc(o.text)}', reason: '${esc(o.reason)}' }`
    ).join(',\n');

    let explStr = `            keyPoint: '${esc(q.explanation.keyPoint)}',\n            analysis: '${esc(q.explanation.analysis)}'`;
    if (q.explanation.comparisons && q.explanation.comparisons.length > 0) {
        explStr += `,\n            comparisons: [${q.explanation.comparisons.map(c => `'${esc(c)}'`).join(', ')}]`;
    }
    if (q.explanation.commonMistakes && q.explanation.commonMistakes.length > 0) {
        explStr += `,\n            commonMistakes: [${q.explanation.commonMistakes.map(c => `'${esc(c)}'`).join(', ')}]`;
    }

    const tagsStr = q.tags ? `tags: [${q.tags.map(t => `'${t}'`).join(', ')}],` : '';

    return `    {
        id: '${q.id}', category: '${q.category}', level: '${q.level}', ${tagsStr}
        stem: '${esc(q.stem)}',
        stemZh: '${esc(q.stemZh)}',
        options: [
${optStr},
        ],
        correctIndex: ${q.correctIndex},
        explanation: {
${explStr},
        },
    }`;
}

const output = `import { UnifiedQuestion } from '../types'

export const vocabN4Part1: UnifiedQuestion[] = [
${allQuestions.map(q => formatQuestion(q)).join(',\n')}
]
`;

fs.writeFileSync(
    path.join(__dirname, '..', 'src', 'data', 'questions', 'vocabulary', 'n4_part1.ts'),
    output,
    'utf-8'
);

console.log('Written to src/data/questions/vocabulary/n4_part1.ts');
console.log(`Total questions: ${allQuestions.length}`);
