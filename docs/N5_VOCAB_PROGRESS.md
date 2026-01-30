# N5 Vocabulary Question Generation Progress

## Context & Instructions for Resume

**Primary Guideline (SOP):**

- MUST follow `.agent/skills/VOCAB_SKILL.md` strictly.

**Critical Rules (Do Not Ignore):**

1. **Frontend Support Check:** HTML tags like `<u>` are supported but stick using `<u>...</u>` for underlining. Do not use complex HTML unless necessary.
2. **Review `FuriganaText.tsx`:** If introducing new tags, verify `src/components/FuriganaText.tsx` first.
3. **Randomize Answers:** `correctIndex` must be randomized (0-3). Do NOT always put the correct answer at index 0.
4. **Formatting:**
   - `prob_zh` must use `*answer*` for bolding the answer part.
   - `options[].reason` must explain why correct/incorrect clearly.
5. **File Management:**
   - Write batches to separate files (e.g., `n5_vocab_batch3.ts`, `n5_vocab_batch4.ts`) to avoid large file issues.
   - Import and spread them in `src/data/questions/vocab.ts`.

**Workflow:**

1. Check `Next Action` below for the starting word.
2. Process words in batches (e.g., 5-10 words).
3. Generate valid TS file & Update `vocab.ts`.
4. Run `npx tsc --noEmit` to verify code correctness.
5. **MANDATORY POST-WORK UPDATE:**
   - Update the **Status** column in the table below (Pending -> Completed).
   - Update the **Total/Completed/Pending** counts at the top.
   - Update the **Next Action** section with the next starting word.
   - *Treat this file as the primary source of truth for project continuity.*

---

**Total Words:** 644
**Completed:** 155
**Pending:** 489

## Next Action

**Resume from Word #156:** 晴れ (はれ)

## Detailed Status

| # | Word | Reading | Status | Note |
|---|---|---|---|---|
| 1 | 浴びる | あびる | Completed | Batch 1 |
| 2 | 危ない | あぶない | Completed | Batch 1 |
| 3 | あっち | あっち | Completed | Batch 1 |
| 4 | あちら | あちら | Completed | Batch 1 |
| 5 | 上げる | あげる | Completed | Batch 1 |
| 6 | 赤 | あか | Completed | Batch 2 |
| 7 | 赤い | あかい | Completed | Batch 2 |
| 8 | 明るい | あかるい | Completed | Batch 2 |
| 9 | 開ける | あける | Completed | Batch 2 |
| 10 | 秋 | あき | Completed | Batch 2 |
| 11 | 開く | あく | Completed | Batch 3 |
| 12 | 甘い | あまい | Completed | Batch 3 |
| 13 | 雨 | あめ | Completed | Batch 3 |
| 14 | 飴 | あめ | Completed | Batch 3 |
| 15 | あなた | あなた | Completed | Batch 3 |
| 16 | 姉 | あね | Completed | Batch 4 |
| 17 | 兄 | あに | Completed | Batch 4 |
| 18 | あの | あの | Completed | Batch 4 |
| 19 | 青 | あお | Completed | Batch 4 |
| 20 | 青い | あおい | Completed | Batch 4 |
| 21 | アパート | アパート | Completed | Batch 5 |
| 22 | 洗う | あらう | Completed | Batch 5 |
| 23 | あれ | あれ | Completed | Batch 5 |
| 24 | ある | ある | Completed | Batch 5 |
| 25 | 歩く | あるく | Completed | Batch 5 |
| 26 | 朝 | あさ | Completed | Batch 6 |
| 27 | 朝ご飯 | あさごはん | Completed | Batch 6 |
| 28 | 明後日 | あさって | Completed | Batch 6 |
| 29 | 足 | あし | Completed | Batch 6 |
| 30 | 明日 | あした | Completed | Batch 6 |
| 31 | 遊ぶ | あそぶ | Completed | Batch 7 |
| 32 | あそこ | あそこ | Completed | Batch 7 |
| 33 | 頭 | あたま | Completed | Batch 7 |
| 34 | 新しい | あたらしい | Completed | Batch 7 |
| 35 | 暖かい | あたたかい | Completed | Batch 7 |
| 36 | 後 | あと | Completed | Batch 8 |
| 37 | 厚い | あつい | Completed | Batch 8 |
| 38 | 暑い | あつい | Completed | Batch 8 |
| 39 | 熱い | あつい | Completed | Batch 8 |
| 40 | 会う | あう | Completed | Batch 8 |
| 41 | 晩ご飯 | ばんごはん | Completed | Batch 9 |
| 42 | 番号 | ばんごう | Completed | Batch 9 |
| 43 | バス | バス | Completed | Batch 9 |
| 44 | バター | バター | Completed | Batch 9 |
| 45 | ベッド | ベッド | Completed | Batch 9 |
| 46 | 勉強 | べんきょう | Completed | Batch 10 |
| 47 | 便利 | べんり | Completed | Batch 10 |
| 48 | ボールペン | ボールペン | Completed | Batch 10 |
| 49 | ボタン | ボタン | Completed | Batch 10 |
| 50 | 帽子 | ぼうし | Completed | Batch 10 |
| 51 | 文章 | ぶんしょう | Completed | Batch 11 |
| 52 | 豚肉 | ぶたにく | Completed | Batch 11 |
| 53 | 病院 | びょういん | Completed | Batch 11 |
| 54 | 病気 | びょうき | Completed | Batch 11 |
| 55 | 茶色 | ちゃいろ | Completed | Batch 11 |
| 56 | 茶碗 | ちゃわん | Completed | Batch 12 |
| 57 | 父 | ちち | Completed | Batch 12 |
| 58 | 違う | ちがう | Completed | Batch 12 |
| 59 | 小さい | ちいさい | Completed | Batch 12 |
| 60 | 小さな | ちいさな | Completed | Batch 12 |
| 61 | 近い | ちかい | Completed | Batch 13 |
| 62 | 地下鉄 | ちかてつ | Completed | Batch 13 |
| 63 | 地図 | ちず | Completed | Batch 13 |
| 64 | ちょっと | ちょっと | Completed | Batch 13 |
| 65 | ちょうど | ちょうど | Completed | Batch 13 |
| 66 | 台所 | だいどころ | Completed | Batch 14 |
| 67 | 大學 | だいがく | Completed | Batch 14 |
| 68 | 大丈夫 | だいじょうぶ | Completed | Batch 14 |
| 69 | 大好き | だいすき | Completed | Batch 14 |
| 70 | 大切 | たいせつ | Completed | Batch 14 |
| 71 | 大抵 | たいてい | Completed | Batch 15 |
| 72 | 台風 | たいふう | Completed | Batch 15 |
| 73 | たくさん | たくさん | Completed | Batch 15 |
| 74 | タクシー | タクシー | Completed | Batch 15 |
| 75 | 出す | だす | Completed | Batch 15 |
| 76 | 立つ | たつ | Completed | Batch 16 |
| 77 | 建てる | たてる | Completed | Batch 16 |
| 78 | たとえば | たとえば | Completed | Batch 16 |
| 79 | 楽しい | たのしい | Completed | Batch 16 |
| 80 | 頼む | たのむ | Completed | Batch 16 |
| 81 | 食べ物 | たべもの | Completed | Batch 17 |
| 82 | 食べる | たべる | Completed | Batch 17 |
| 83 | 卵 | たまご | Completed | Batch 17 |
| 84 | 誰 | だれ | Completed | Batch 17 |
| 85 | 誕生日 | たんじょうび | Completed | Batch 17 |
| 86 | 小さい | ちいさい | Completed | Batch 18 |
| 87 | 近い | ちかい | Completed | Batch 18 |
| 88 | 地下鉄 | ちかてつ | Completed | Batch 18 |
| 89 | 違う | ちがう | Completed | Batch 18 |
| 90 | 近く | ちかく | Completed | Batch 18 |
| 91 | 力 | ちから | Completed | Batch 19 |
| 92 | 地図 | ちず | Completed | Batch 19 |
| 93 | 父 | ちち | Completed | Batch 19 |
| 94 | 茶色 | ちゃいろ | Completed | Batch 19 |
| 95 | 茶碗 | ちゃわん | Completed | Batch 19 |
| 96 | 中 | なか | Completed | Batch 20 |
| 97 | 長い | ながい | Completed | Batch 20 |
| 98 | 鳴く | なく | Completed | Batch 20 |
| 99 | 無くす | なくす | Completed | Batch 20 |
| 100 | なぜ | なぜ | Completed | Batch 20 |
| 101 | 夏 | なつ | Completed | Batch 21 |
| 102 | 夏休み | なつやすみ | Completed | Batch 21 |
| 103 | など | など | Completed | Batch 21 |
| 104 | 七つ | ななつ | Completed | Batch 21 |
| 105 | 七日 | なのか | Completed | Batch 21 |
| 106 | 名前 | なまえ | Completed | Batch 22 |
| 107 | 習う | ならう | Completed | Batch 22 |
| 108 | 並ぶ | ならぶ | Completed | Batch 22 |
| 109 | 並べる | ならべる | Completed | Batch 22 |
| 110 | なる | なる | Completed | Batch 22 |
| 111 | 何 | なん/なに | Completed | Batch 23 |
| 112 | 二階 | にかい | Completed | Batch 23 |
| 113 | 賑やか | にぎやか | Completed | Batch 23 |
| 114 | 肉 | にく | Completed | Batch 23 |
| 115 | 西 | にし | Completed | Batch 23 |
| 116 | 日曜日 | にちようび | Completed | Batch 24 |
| 117 | 荷物 | にもつ | Completed | Batch 24 |
| 118 | ニュース | ニュース | Completed | Batch 24 |
| 119 | 庭 | にわ | Completed | Batch 24 |
| 120 | 脱ぐ | ぬぐ | Completed | Batch 24 |
| 121 | ネクタイ | ネクタイ | Completed | Batch 25 |
| 122 | 猫 | ねこ | Completed | Batch 25 |
| 123 | 寝る | ねる | Completed | Batch 25 |
| 124 | ノート | ノート | Completed | Batch 25 |
| 125 | 登る | のぼる | Completed | Batch 25 |
| 126 | 飲み物 | のみもの | Completed | Batch 26 |
| 127 | 飲む | のむ | Completed | Batch 26 |
| 128 | 乗る | のる | Completed | Batch 26 |
| 129 | 歯 | は | Completed | Batch 26 |
| 130 | パーティー | パーティー | Completed | Batch 26 |
| 131 | はい | はい | Completed | Batch 27 |
| 132 | 入る | はいる | Completed | Batch 27 |
| 133 | 葉書 | はがき | Completed | Batch 27 |
| 134 | 履く | はく | Completed | Batch 27 |
| 135 | 箱 | はこ | Completed | Batch 27 |
| 136 | 橋 | はし | Completed | Batch 28 |
| 137 | 箸 | はし | Completed | Batch 28 |
| 138 | 始まる | はじまる | Completed | Batch 28 |
| 139 | 初め | はじめ | Completed | Batch 28 |
| 140 | 初めて | はじめて | Completed | Batch 28 |
| 141 | 走る | はしる | Completed | Batch 29 |
| 142 | バス | バス | Completed | Batch 29 |
| 143 | バター | バター | Completed | Batch 29 |
| 144 | 二十歳 | はたち | Completed | Batch 29 |
| 145 | 働く | はたらく | Completed | Batch 29 |
| 146 | 八 | はち | Completed | Batch 30 |
| 147 | 二十日 | はつか | Completed | Batch 30 |
| 148 | 花 | はな | Completed | Batch 30 |
| 149 | 鼻 | はな | Completed | Batch 30 |
| 150 | 話 | はなし | Completed | Batch 30 |
| 151 | 灰皿 | はいざら | Completed | Batch 31 |
| 152 | 半 | はん | Completed | Batch 31 |
| 153 | 話す | はなす | Completed | Batch 31 |
| 154 | 半分 | はんぶん | Completed | Batch 31 |
| 155 | ハンカチ | ハンカチ | Completed | Batch 31 |
| 156 | 晴れ | はれ | Pending |  |
| 157 | 晴れる | はれる | Pending |  |
| 158 | 春 | はる | Pending |  |
| 159 | 貼る | はる | Pending |  |
| 160 | 速い | はやい | Pending |  |
| 161 | 早い | はやい | Pending |  |
| 162 | 辺 | へん | Pending |  |
| 163 | 下手 | へた | Pending |  |
| 164 | 部屋 | へや | Pending |  |
| 165 | 左 | ひだり | Pending |  |
| 166 | 東 | ひがし | Pending |  |
| 167 | 飛行機 | ひこうき | Pending |  |
| 168 | 引く | ひく | Pending |  |
| 169 | 弾く | ひく | Pending |  |
| 170 | 低い | ひくい | Pending |  |
| 171 | 暇 | ひま | Pending |  |
| 172 | 広い | ひろい | Pending |  |
| 173 | 昼 | ひる | Pending |  |
| 174 | 昼ご飯 | ひるごはん | Pending |  |
| 175 | 人 | ひと | Pending |  |
| 176 | 一人 | ひとり | Pending |  |
| 177 | 一つ | ひとつ | Pending |  |
| 178 | ほか | ほか | Pending |  |
| 179 | 本 | ほん | Pending |  |
| 180 | 本棚 | ほんだな | Pending |  |
| 181 | 本当 | ほんとう | Pending |  |
| 182 | 欲しい | ほしい | Pending |  |
| 183 | 細い | ほそい | Pending |  |
| 184 | ホテル | ホテル | Pending |  |
| 185 | 百 | ひゃく | Pending |  |
| 186 | 一 | いち | Pending |  |
| 187 | 一番 | いちばん | Pending |  |
| 188 | 一日 | いちにち | Pending |  |
| 189 | 家 | いえ | Pending |  |
| 190 | 池 | いけ | Pending |  |
| 191 | いかが | いかが | Pending |  |
| 192 | 行く | いく | Pending |  |
| 193 | いくら | いくら | Pending |  |
| 194 | いくつ | いくつ | Pending |  |
| 195 | 今 | いま | Pending |  |
| 196 | 意味 | いみ | Pending |  |
| 197 | 妹 | いもうと | Pending |  |
| 198 | 犬 | いぬ | Pending |  |
| 199 | 入れる | いれる | Pending |  |
| 200 | 入口 | いりぐち | Pending |  |
| 201 | 色 | いろ | Pending |  |
| 202 | 色々 | いろいろ | Pending |  |
| 203 | 居る | いる | Pending |  |
| 204 | 要る | いる | Pending |  |
| 205 | 医者 | いしゃ | Pending |  |
| 200 | 忙しい | いそがしい | Pending |  |
| 201 | 一緒 | いっしょ | Pending |  |
| 202 | 椅子 | いす | Pending |  |
| 203 | 痛い | いたい | Pending |  |
| 204 | いつ | いつ | Pending |  |
| 205 | 五日 | いつか | Pending |  |
| 206 | 五つ | いつつ | Pending |  |
| 207 | 言う | いう | Pending |  |
| 208 | 嫌 | いや | Pending |  |
| 209 | じゃあ | じゃあ | Pending |  |
| 210 | 字引 | じびき | Pending |  |
| 211 | 自分 | じぶん | Pending |  |
| 212 | 自動車 | jidousha | Pending |  |
| 213 | 時間 | jikan | Pending |  |
| 214 | 辭書 | jisho | Pending |  |
| 215 | 自転車 | jitensha | Pending |  |
| 216 | 丈夫 | joubu | Pending |  |
| 217 | 上手 | jouzu | Pending |  |
| 218 | 授業 | jugyou | Pending |  |
| 219 | 十 | juu | Pending |  |
| 220 | かばん | かばん | Pending |  |
| 221 | 花瓶 | かびん | Pending |  |
| 222 | 角 | かど | Pending |  |
| 223 | 帰る | かえる | Pending |  |
| 224 | 返す | かえす | Pending |  |
| 225 | 鍵 | かぎ | Pending |  |
| 226 | 階段 | かいだん | Pending |  |
| 227 | 買い物 | かいもの | Pending |  |
| 228 | 會社 | かいしゃ | Pending |  |
| 229 | 掛かる | かかる | Pending |  |
| 230 | 掛ける | かける | Pending |  |
| 231 | 書く | かく | Pending |  |
| 232 | カメラ | カメラ | Pending |  |
| 233 | 紙 | かみ | Pending |  |
| 234 | 漢字 | かんじ | Pending |  |
| 235 | カップ | カップ | Pending |  |
| 236 | 體 | からだ | Pending |  |
| 237 | 辛い | からい | Pending |  |
| 238 | カレー | カレー | Pending |  |
| 239 | カレンダー | カレンダー | Pending |  |
| 240 | 借りる | かりる | Pending |  |
| 241 | 軽い | かるい | Pending |  |
| 242 | 傘 | かさ | Pending |  |
| 243 | 貸す | かす | Pending |  |
| 244 | 方 | かた | Pending |  |
| 245 | 家庭 | かてい | Pending |  |
| 246 | 買う | かう | Pending |  |
| 247 | 川 | かわ | Pending |  |
| 248 | 可愛い | かわいい | Pending |  |
| 249 | 火曜日 | かようび | Pending |  |
| 250 | 風 | かぜ | Pending |  |
| 251 | 風邪 | かぜ | Pending |  |
| 252 | 家族 | かぞく | Pending |  |
| 253 | 警官 | けいかん | Pending |  |
| 254 | 結婚 | けっこん | Pending |  |
| 255 | 結構 | けっこう | Pending |  |
| 256 | 今朝 | けさ | Pending |  |
| 257 | 消す | けす | Pending |  |
| 258 | 木 | き | Pending |  |
| 259 | 消える | きえる | Pending |  |
| 260 | 黄色い | きいろい | Pending |  |
| 261 | 聞く | きく | Pending |  |
| 262 | 昨日 | きのう | Pending |  |
| 263 | 金曜日 | きんようび | Pending |  |
| 264 | 切符 | きっぷ | Pending |  |
| 265 | 嫌い | きらい | Pending |  |
| 266 | 綺麗 | きれい | Pending |  |
| 267 | キログラム | キログラム | Pending |  |
| 268 | キロメートル | キロメートル | Pending |  |
| 269 | 切る | きる | Pending |  |
| 270 | 着る | きる | Pending |  |
| 271 | 喫茶店 | きっさてん | Pending |  |
| 272 | 北 | きた | Pending |  |
| 273 | 汚い | きたない | Pending |  |
| 274 | 切手 | きって | Pending |  |
| 275 | こっち | こっち | Pending |  |
| 276 | こちら | こちら | Pending |  |
| 277 | 子供 | こども | Pending |  |
| 278 | 聲 | こえ | Pending |  |
| 279 | ここ | ここ | Pending |  |
| 280 | 九日 | ここのか | Pending |  |
| 281 | 九つ | ここのつ | Pending |  |
| 282 | 困る | こまる | Pending |  |
| 283 | 今晩 | こんばん | Pending |  |
| 284 | 今月 | こんげつ | Pending |  |
| 285 | こんな | こんな | Pending |  |
| 286 | この | この | Pending |  |
| 287 | 今週 | こんしゅう | Pending |  |
| 288 | コーヒー | コーヒー | Pending |  |
| 289 | コート | コート | Pending |  |
| 290 | コピー | コピー | Pending |  |
| 291 | コップ | コップ | Pending |  |
| 292 | これ | これ | Pending |  |
| 293 | 答える | こたえる | Pending |  |
| 294 | 言葉 | ことば | Pending |  |
| 295 | 今年 | ことし | Pending |  |
| 296 | 交番 | こうばん | Pending |  |
| 297 | 紅茶 | こうちゃ | Pending |  |
| 298 | 公園 | こうえん | Pending |  |
| 299 | 交差點 | こうさてん | Pending |  |
| 300 | 口 | くち | Pending |  |
| 301 | 果物 | くだもの | Pending |  |
| 302 | 下さい | ください | Pending |  |
| 303 | 曇り | くもり | Pending |  |
| 304 | 曇る | くもる | Pending |  |
| 305 | 國 | くに | Pending |  |
| 306 | 暗い | くらい | Pending |  |
| 307 | クラス | クラス | Pending |  |
| 308 | 黑 | くろ | Pending |  |
| 309 | 黑い | くろい | Pending |  |
| 310 | 來る | くる | Pending |  |
| 311 | 車 | くるま | Pending |  |
| 312 | 藥 | くすり | Pending |  |
| 313 | 靴 | くつ | Pending |  |
| 314 | 靴下 | くつした | Pending |  |
| 315 | 去年 | きょねん | Pending |  |
| 316 | 今日 | きょう | Pending |  |
| 317 | 兄弟 | きょうだい | Pending |  |
| 318 | 教室 | きょうしつ | Pending |  |
| 319 | 九 | きゅう | Pending |  |
| 320 | マッチ | マッチ | Pending |  |
| 321 | 町 | まち | Pending |  |
| 322 | 窓 | まど | Pending |  |
| 323 | 前 | まえ | Pending |  |
| 324 | 曲がる | まがる | Pending |  |
| 325 | 毎朝 | まいあさ | Pending |  |
| 326 | 毎晩 | まいばん | Pending |  |
| 327 | 毎日 | まいにち | Pending |  |
| 328 | 毎週 | まいしゅう | Pending |  |
| 329 | 毎年 | まいとし | Pending |  |
| 330 | 毎月 | まいつき | Pending |  |
| 331 | 萬 | まん | Pending |  |
| 332 | 萬年筆 | まんねんひつ | Pending |  |
| 333 | 丸い | まるい | Pending |  |
| 334 | 真っ直ぐ | まっすぐ | Pending |  |
| 335 | 待つ | まつ | Pending |  |
| 336 | 不味い | まずい | Pending |  |
| 337 | 目 | め | Pending |  |
| 338 | メートル | メートル | Pending |  |
| 339 | 眼鏡 | めがね | Pending |  |
| 340 | 道 | みち | Pending |  |
| 341 | 緑 | みどり | Pending |  |
| 342 | 磨く | みがく | Pending |  |
| 343 | 右 | みぎ | Pending |  |
| 344 | 短い | みじかい | Pending |  |
| 345 | 三日 | みっか | Pending |  |
| 346 | 耳 | みみ | Pending |  |
| 347 | 南 | みなみ | Pending |  |
| 348 | 皆さん | みなさん | Pending |  |
| 349 | みんな | みんな | Pending |  |
| 350 | 見る | みる | Pending |  |
| 351 | 店 | みせ | Pending |  |
| 352 | 見せる | みせる | Pending |  |
| 353 | 三つ | みっつ | Pending |  |
| 354 | 水 | みず | Pending |  |
| 355 | 木曜日 | もくようび | Pending |  |
| 356 | 門 | もん | Pending |  |
| 357 | 問題 | もんだい | Pending |  |
| 358 | 物 | もの | Pending |  |
| 359 | 持つ | もつ | Pending |  |
| 360 | もっと | もっと | Pending |  |
| 361 | もう一度 | もういちど | Pending |  |
| 362 | 六日 | むいか | Pending |  |
| 363 | 向こう | むこう | Pending |  |
| 364 | 村 | むら | Pending |  |
| 365 | 六つ | むっつ | Pending |  |
| 366 | 難しい | むずかしい | Pending |  |
| 367 | 長い | ながい | Pending |  |
| 368 | ナイフ | ナイフ | Pending |  |
| 369 | 中 | なか | Pending |  |
| 370 | 鳴く | なく | Pending |  |
| 371 | 無くす | なくす | Pending |  |
| 372 | 名前 | なまえ | Pending |  |
| 373 | 七つ | ななつ | Pending |  |
| 374 | 何 | なに | Pending |  |
| 375 | 七日 | なのか | Pending |  |
| 376 | 並べる | ならべる | Pending |  |
| 377 | 並ぶ | ならぶ | Pending |  |
| 378 | 習う | ならう | Pending |  |
| 379 | 夏 | なつ | Pending |  |
| 380 | 夏休み | なつやすみ | Pending |  |
| 381 | 何故 | なぜ | Pending |  |
| 382 | 貓 | ねこ | Pending |  |
| 383 | ネクタイ | ネクタイ | Pending |  |
| 384 | 寢る | ねる | Pending |  |
| 385 | 二 | に | Pending |  |
| 386 | 日曜日 | にちようび | Pending |  |
| 387 | 賑やか | にぎやか | Pending |  |
| 388 | 日記 | にっき | Pending |  |
| 389 | 肉 | にく | Pending |  |
| 390 | 荷物 | にもつ | Pending |  |
| 391 | 西 | にし | Pending |  |
| 392 | 庭 | にわ | Pending |  |
| 393 | 登る | のぼる | Pending |  |
| 394 | 飲み物 | のみもの | Pending |  |
| 395 | 飲む | のむ | Pending |  |
| 396 | ノート | ノート | Pending |  |
| 397 | 乗る | のる | Pending |  |
| 398 | おばあさん | おばあさん | Pending |  |
| 399 | 伯母さん | おばさん | Pending |  |
| 400 | お弁当 | おべんとう | Pending |  |
| 401 | 覚える | おぼえる | Pending |  |
| 402 | お茶 | おちゃ | Pending |  |
| 403 | お風呂 | おふろ | Pending |  |
| 404 | 美味しい | おいしい | Pending |  |
| 405 | 伯父さん | おじさん | Pending |  |
| 406 | お母さん | おかあさん | Pending |  |
| 407 | お金 | おかね | Pending |  |
| 408 | お菓子 | おかし | Pending |  |
| 409 | 起きる | おきる | Pending |  |
| 410 | 置く | おく | Pending |  |
| 411 | 奥さん | おくさん | Pending |  |
| 412 | お巡りさん | おまわりさん | Pending |  |
| 413 | 重い | おもい | Pending |  |
| 414 | 面白い | おもしろい | Pending |  |
| 415 | 同じ | おなじ | Pending |  |
| 416 | お腹 | おなか | Pending |  |
| 417 | お姉さん | おねえさん | Pending |  |
| 418 | 音楽 | おんがく | Pending |  |
| 419 | お兄さん | おにいさん | Pending |  |
| 420 | 女 | おんな | Pending |  |
| 421 | 女の子 | おんなのこ | Pending |  |
| 422 | 多い | おおい | Pending |  |
| 423 | 大きい | おおきい | Pending |  |
| 424 | 大きな | おおきな | Pending |  |
| 425 | 大勢 | おおぜい | Pending |  |
| 426 | 降りる | おりる | Pending |  |
| 427 | お酒 | おさけ | Pending |  |
| 428 | お皿 | おさら | Pending |  |
| 429 | 教える | おしえる | Pending |  |
| 430 | 遅い | おそい | Pending |  |
| 431 | 押す | おす | Pending |  |
| 432 | お手洗い | おてあらい | Pending |  |
| 433 | 男 | おとこ | Pending |  |
| 434 | 男の子 | おとこのこ | Pending |  |
| 435 | 大人 | おとな | Pending |  |
| 436 | 一昨日 | おととい | Pending |  |
| 437 | 一昨年 | おととし | Pending |  |
| 438 | お父さん | おとうさん | Pending |  |
| 439 | 弟 | おとうと | Pending |  |
| 440 | 終わる | おわる | Pending |  |
| 441 | 泳ぐ | およぐ | Pending |  |
| 442 | パーティー | パーティー | Pending |  |
| 443 | パン | パン | Pending |  |
| 444 | ページ | ページ | Pending |  |
| 445 | ペン | ペン | Pending |  |
| 446 | ペット | ペット | Pending |  |
| 447 | ポケット | ポケット | Pending |  |
| 448 | ポスト | ポスト | Pending |  |
| 449 | プール | プール | Pending |  |
| 450 | 来月 | らいげつ | Pending |  |
| 451 | 来年 | らいねん | Pending |  |
| 452 | 来週 | らいしゅう | Pending |  |
| 453 | ラジオ | ラジオ | Pending |  |
| 454 | 零 | れい | Pending |  |
| 455 | 冷蔵庫 | れいぞうこ | Pending |  |
| 456 | レコード | レコード | Pending |  |
| 457 | 練習 | れんしゅう | Pending |  |
| 458 | レストラン | レストラン | Pending |  |
| 459 | 立派 | りっぱ | Pending |  |
| 460 | 六 | ろく | Pending |  |
| 461 | 廊下 | ろうか | Pending |  |
| 462 | 旅行 | りょこう | Pending |  |
| 463 | 料理 | りょうり | Pending |  |
| 464 | 両親 | りょうしん | Pending |  |
| 465 | 留学生 | りゅうがくせい | Pending |  |
| 466 | さあ | さあ | Pending |  |
| 467 | 財布 | さいふ | Pending |  |
| 468 | 魚 | さかな | Pending |  |
| 469 | 先 | さき | Pending |  |
| 470 | 咲く | さく | Pending |  |
| 471 | 作文 | さくぶん | Pending |  |
| 472 | 寒い | さむい | Pending |  |
| 473 | 三 | さん | Pending |  |
| 474 | 散歩 | さんぽ | Pending |  |
| 475 | 再来年 | さらいねん | Pending |  |
| 476 | 差す | さす | Pending |  |
| 477 | 砂糖 | さとう | Pending |  |
| 478 | 背 | せ | Pending |  |
| 479 | 背広 | せびろ | Pending |  |
| 480 | セーター | セーター | Pending |  |
| 481 | 生徒 | せいと | Pending |  |
| 482 | 石鹼 | せっけん | Pending |  |
| 483 | 狭い | せまい | Pending |  |
| 484 | 千 | せん | Pending |  |
| 485 | 先月 | せんげつ | Pending |  |
| 486 | 先生 | せんせい | Pending |  |
| 487 | 先週 | せんしゅう | Pending |  |
| 488 | 洗濯 | せんたく | Pending |  |
| 489 | 写真 | しゃしん | Pending |  |
| 490 | シャツ | シャツ | Pending |  |
| 491 | シャワー | シャワー | Pending |  |
| 492 | 四 | し | Pending |  |
| 493 | 七 | しち | Pending |  |
| 494 | 仕事 | しごと | Pending |  |
| 495 | 閉まる | しまる | Pending |  |
| 496 | 閉める | しめる | Pending |  |
| 497 | 締める | しめる | Pending |  |
| 498 | 新聞 | しんぶん | Pending |  |
| 499 | 死ぬ | しぬ | Pending |  |
| 500 | 塩 | しお | Pending |  |
| 501 | 白 | しろ | Pending |  |
| 502 | 白い | しろい | Pending |  |
| 503 | 知る | しる | Pending |  |
| 504 | 下 | した | Pending |  |
| 505 | 質問 | しつもん | Pending |  |
| 506 | 静か | しずか | Pending |  |
| 507 | 食堂 | しょくどう | Pending |  |
| 508 | 醬油 | しょうゆ | Pending |  |
| 509 | 宿題 | しゅくだい | Pending |  |
| 510 | そば | そば | Pending |  |
| 511 | そっち | そっち | Pending |  |
| 512 | そちら | そちら | Pending |  |
| 513 | そこ | そこ | Pending |  |
| 514 | その | その | Pending |  |
| 515 | 空 | そら | Pending |  |
| 516 | それ | それ | Pending |  |
| 517 | それでは | それでは | Pending |  |
| 518 | 外 | そと | Pending |  |
| 519 | 掃除 | そうじ | Pending |  |
| 520 | 直ぐに | すぐに | Pending |  |
| 521 | 水曜日 | すいようび | Pending |  |
| 522 | スカート | スカート | Pending |  |
| 523 | 好き | すき | Pending |  |
| 524 | 少し | すこし | Pending |  |
| 525 | 少ない | すくない | Pending |  |
| 526 | 住む | すむ | Pending |  |
| 527 | スポーツ | スポーツ | Pending |  |
| 528 | スプーン | スプーン | Pending |  |
| 529 | スリッパ | スリッパ | Pending |  |
| 530 | ストーブ | ストーブ | Pending |  |
| 531 | 吸う | すう | Pending |  |
| 532 | 座る | すわる | Pending |  |
| 533 | 涼しい | すずしい | Pending |  |
| 534 | たばこ | たばこ | Pending |  |
| 535 | 食べ物 | たべもの | Pending |  |
| 536 | 食べる | たべる | Pending |  |
| 537 | 多分 | たぶん | Pending |  |
| 538 | 大変 | たいへん | Pending |  |
| 539 | 大切 | たいせつ | Pending |  |
| 540 | 大使館 | たいしかん | Pending |  |
| 541 | 高い | たかい | Pending |  |
| 542 | 沢山 | たくさん | Pending |  |
| 543 | タクシー | タクシー | Pending |  |
| 544 | 卵 | たまご | Pending |  |
| 545 | 誕生日 | たんじょうび | Pending |  |
| 546 | 頼む | たのむ | Pending |  |
| 547 | 楽しい | たのしい | Pending |  |
| 548 | 縦 | たて | Pending |  |
| 549 | 建物 | たてもの | Pending |  |
| 550 | 立つ | たつ | Pending |  |
| 551 | 手 | て | Pending |  |
| 552 | テーブル | テーブル | Pending |  |
| 553 | テープ | テープ | Pending |  |
| 554 | テープレコーダー | テープレコーダー | Pending |  |
| 555 | 手紙 | てがみ | Pending |  |
| 556 | 天気 | てんき | Pending |  |
| 557 | テレビ | テレビ | Pending |  |
| 558 | テスト | テスト | Pending |  |
| 559 | 戸 | と | Pending |  |
| 560 | 飛ぶ | とぶ | Pending |  |
| 561 | トイレ | トイレ | Pending |  |
| 562 | 時計 | とけい | Pending |  |
| 563 | 時 | とき | Pending |  |
| 564 | 時々 | ときどき | Pending |  |
| 565 | 所 | ところ | Pending |  |
| 566 | 止まる | とまる | Pending |  |
| 567 | 友達 | ともだち | Pending |  |
| 568 | 隣 | となり | Pending |  |
| 569 | 遠い | とおい | Pending |  |
| 570 | 十日 | とおか | Pending |  |
| 571 | 鳥 | とり | Pending |  |
| 572 | 鶏肉 | とりにく | Pending |  |
| 573 | 取る | とる | Pending |  |
| 574 | 撮る | とる | Pending |  |
| 575 | 年 | とし | Pending |  |
| 576 | 図書館 | としょかん | Pending |  |
| 577 | 次 | つぎ | Pending |  |
| 578 | 一日 | ついたち | Pending |  |
| 579 | 疲れる | つかれる | Pending |  |
| 580 | 使う | つかう | Pending |  |
| 581 | つける | つける | Pending |  |
| 582 | 付ける | つける | Pending |  |
| 583 | 着く | つく | Pending |  |
| 584 | 机 | つくえ | Pending |  |
| 585 | 作る | つくる | Pending |  |
| 586 | 詰まらない | つまらない | Pending |  |
| 587 | 冷たい | つめたい | Pending |  |
| 588 | 勤める | つとめる | Pending |  |
| 589 | 強い | つよい | Pending |  |
| 590 | 上 | うえ | Pending |  |
| 591 | 生まれる | うまれる | Pending |  |
| 592 | 海 | うみ | Pending |  |
| 593 | 売る | うる | Pending |  |
| 594 | 煩い | うるさい | Pending |  |
| 595 | 後ろ | うしろ | Pending |  |
| 596 | 薄い | うすい | Pending |  |
| 597 | 歌 | うた | Pending |  |
| 598 | 歌う | うたう | Pending |  |
| 599 | 上着 | うわぎ | Pending |  |
| 600 | ワイシャツ | ワイシャツ | Pending |  |
| 601 | 若い | わかい | Pending |  |
| 602 | 分かる | わかる | Pending |  |
| 603 | 悪い | わるい | Pending |  |
| 604 | 忘れる | わすれる | Pending |  |
| 605 | 渡る | わたる | Pending |  |
| 606 | 私 | わたし | Pending |  |
| 607 | 渡す | わたす | Pending |  |
| 608 | 山 | やま | Pending |  |
| 609 | 八百屋 | やおや | Pending |  |
| 610 | やる | やる | Pending |  |
| 611 | 野菜 | やさい | Pending |  |
| 612 | 易しい | やさしい | Pending |  |
| 613 | 安い | やすい | Pending |  |
| 614 | 休み | やすみ | Pending |  |
| 615 | 休む | やすむ | Pending |  |
| 616 | 八つ | やっつ | Pending |  |
| 617 | 呼ぶ | よぶ | Pending |  |
| 618 | 良い | よい/いい | Pending |  |
| 619 | 四日 | よっか | Pending |  |
| 620 | 横 | よこ | Pending |  |
| 621 | よく | よく | Pending |  |
| 622 | 読む | よむ | Pending |  |
| 623 | 夜 | よる | Pending |  |
| 624 | 四つ | よつ | Pending |  |
| 625 | 洋服 | ようふく | Pending |  |
| 626 | 八日 | ようか | Pending |  |
| 627 | 弱い | よわい | Pending |  |
| 628 | 雪 | ゆき | Pending |  |
| 629 | ゆっくり | ゆっくり | Pending |  |
| 630 | 昨夜 | ゆうべ | Pending |  |
| 631 | 郵便局 | ゆうびんきょく | Pending |  |
| 632 | 夕方 | ゆうがた | Pending |  |
| 633 | 夕飯 | ゆうはん | Pending |  |
| 634 | 有名 | ゆうめい | Pending |  |
| 635 | 雑誌 | ざっし | Pending |  |
| 636 | 全部 | ぜんぶ | Pending |  |
| 637 | ゼロ | ゼロ | Pending |  |
| 638 | ズボン | ズボン | Pending |  |
| 639 | 凄い | すごい | Pending |  |
| 640 | 進む | すすむ | Pending |  |
| 641 | 掏摸 | すり | Pending |  |
| 642 | 正解 | せいかい | Pending |  |
| 643 | 成功 | せいこう | Pending |  |
| 644 | 説明 | せつめい | Pending |  |
