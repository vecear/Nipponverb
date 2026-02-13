import { UnifiedQuestion } from '../types'

export const grammarN2: UnifiedQuestion[] = [
    // ━━━ にもかかわらず (despite) ━━━
    {
        id: 'g_n2_001', category: 'grammar', level: 'N2', tags: ['formal', 'despite'],
        stem: '雨{あめ}が降{ふ}っている___、彼{かれ}は出{で}かけた。',
        stemZh: '儘管下著雨，他還是出門了。',
        options: [
            { text: 'にもかかわらず', reason: '正確！「にもかかわらず」表示「儘管…卻…」，用於逆接。' },
            { text: 'にとって', reason: '「にとって」表示「對…來說」，語意不合。' },
            { text: 'について', reason: '「について」表示「關於…」，語意不合。' },
            { text: 'に関して', reason: '「に関して」表示「關於…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '逆接表現「にもかかわらず」',
            analysis: '「にもかかわらず」接在動詞普通形、い形容詞、な形容詞＋な/である、名詞＋な/である後面，表示「儘管…卻…」。',
            comparisons: ['にもかかわらず：儘管…卻…（書面語）', 'のに：雖然…卻…（口語）'],
            commonMistakes: ['○ 努力したにもかかわらず / × 努力したにもかかわらないで'],
        },
    },
    {
        id: 'g_n2_002', category: 'grammar', level: 'N2', tags: ['formal', 'despite'],
        stem: '何度{なんど}も注意{ちゅうい}した___、彼女{かのじょ}は同{おな}じミスを繰{く}り返{かえ}す。',
        stemZh: '儘管多次提醒，她還是重複犯同樣的錯。',
        options: [
            { text: 'にもかかわらず', reason: '正確！表示逆接「儘管多次提醒卻還是…」。' },
            { text: 'にかけては', reason: '「にかけては」表示「在…方面特別擅長」，語意不合。' },
            { text: 'にしたがって', reason: '「にしたがって」表示「隨著…」，語意不合。' },
            { text: 'をはじめ', reason: '「をはじめ」表示「以…為首」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にもかかわらず」接續動詞た形',
            analysis: '「にもかかわらず」前可接動詞た形，表示「儘管已做了某事，結果卻…」。',
            comparisons: ['注意したにもかかわらず：儘管注意了', '注意したのに：雖然注意了（口語）'],
            commonMistakes: ['○ 注意したにもかかわらず / × 注意するにもかかわらず → 已發生的事用た形'],
        },
    },
    // ━━━ ものの (although) ━━━
    {
        id: 'g_n2_003', category: 'grammar', level: 'N2', tags: ['contrast', 'although'],
        stem: '買{か}った___、一度{いちど}も使{つか}っていない。',
        stemZh: '雖然買了，但一次也沒用過。',
        options: [
            { text: 'ものの', reason: '正確！「ものの」表示「雖然…但是…」，用於逆接。' },
            { text: 'ものだ', reason: '「ものだ」表示感嘆或忠告，語法不合。' },
            { text: 'ものか', reason: '「ものか」表示強烈否定「怎麼會…」，語意不合。' },
            { text: 'ものなら', reason: '「ものなら」表示「如果能…的話」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '逆接「ものの」',
            analysis: '「ものの」接在動詞た形或普通形後面，表示「雖然…但是…」，語氣比「が」正式。',
            comparisons: ['ものの：雖然…但…（書面）', 'けれども：雖然…但…（一般）'],
            commonMistakes: ['○ 買ったものの / × 買うものの → 已完成的事通常用た形'],
        },
    },
    {
        id: 'g_n2_004', category: 'grammar', level: 'N2', tags: ['contrast', 'although'],
        stem: '日本語{にほんご}の文法{ぶんぽう}は勉強{べんきょう}した___、まだうまく話{はな}せない。',
        stemZh: '雖然學了日語文法，但還是不太會說。',
        options: [
            { text: 'ものの', reason: '正確！表示「雖然學了卻…」的逆接。' },
            { text: 'ものだから', reason: '「ものだから」表原因「正因為…」，用於辯解。' },
            { text: 'ものがある', reason: '「ものがある」表示「確實有…之處」，語法不合。' },
            { text: 'ものではない', reason: '「ものではない」表示「不應該…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものの」表轉折',
            analysis: '後面常接表示不理想結果的內容，強調「雖然有前提條件，但結果不如預期」。',
            comparisons: ['勉強したものの：雖然學了（結果卻…）', '勉強したが：學了，但是…（一般轉折）'],
            commonMistakes: ['○ 勉強したものの話せない / × 勉強したものの話せる → 後句通常為消極結果'],
        },
    },
    // ━━━ からこそ (precisely because) ━━━
    {
        id: 'g_n2_005', category: 'grammar', level: 'N2', tags: ['reason', 'emphasis'],
        stem: 'あなたの___、厳{きび}しいことを言{い}うのだ。',
        stemZh: '正因為是為了你好，才說嚴厲的話。',
        options: [
            { text: 'ためを思{おも}えばこそ', reason: '正確！「こそ」強調「正因為…才…」。' },
            { text: 'ために思えば', reason: '語法不正確，缺少強調語氣。' },
            { text: 'ためを思ったから', reason: '「から」表原因但缺乏強調語氣。' },
            { text: 'ためを思うのに', reason: '「のに」表逆接，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '強調原因「からこそ / ばこそ」',
            analysis: '「こそ」加在原因表現後，強調「正因為…才…」，帶有特別強調的語氣。',
            comparisons: ['からこそ：正因為…才…（強調）', 'から：因為…所以…（一般）'],
            commonMistakes: ['○ 好きだからこそ言う / × 好きだからこそ言わない → 後句通常為積極行動'],
        },
    },
    {
        id: 'g_n2_006', category: 'grammar', level: 'N2', tags: ['reason', 'emphasis'],
        stem: '努力{どりょく}した___、今{いま}の成功{せいこう}がある。',
        stemZh: '正因為努力了，才有現在的成功。',
        options: [
            { text: 'からこそ', reason: '正確！「からこそ」強調原因，表示「正因為努力了才成功」。' },
            { text: 'からして', reason: '「からして」表示「從…來看」，語意不合。' },
            { text: 'からには', reason: '「からには」表示「既然…就…」，語意不同。' },
            { text: 'からといって', reason: '「からといって」表示「雖說…但不一定…」，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「からこそ」強調唯一原因',
            analysis: '「からこそ」表示正是因為這個原因才導致後面的結果，強調因果關係的唯一性。',
            comparisons: ['努力したからこそ成功した：正因為努力才成功', '努力したから成功した：因為努力所以成功'],
            commonMistakes: ['○ 努力したからこそ / × 努力するからこそ → 過去已完成的事用た形'],
        },
    },
    // ━━━ ばかりか (not only) ━━━
    {
        id: 'g_n2_007', category: 'grammar', level: 'N2', tags: ['addition', 'not-only'],
        stem: '彼{かれ}は英語{えいご}___、フランス語{ご}も話{はな}せる。',
        stemZh: '他不僅會英語，連法語也會說。',
        options: [
            { text: 'ばかりか', reason: '正確！「ばかりか」表示「不僅…而且…」。' },
            { text: 'ばかりに', reason: '「ばかりに」表示「只因為…（導致壞結果）」，語意不合。' },
            { text: 'ばかりだ', reason: '「ばかりだ」表示「一直…」，語法不合。' },
            { text: 'ばかりで', reason: '「ばかりで」表示「只是…」，語意不足。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '累加表現「ばかりか」',
            analysis: '「ばかりか」表示「不僅A而且B」，後面常接「も」「さえ」「まで」等。',
            comparisons: ['ばかりか：不僅…而且…', 'だけでなく：不僅…也…（較口語）'],
            commonMistakes: ['○ 英語ばかりかフランス語も / × 英語ばかりかフランス語が'],
        },
    },
    {
        id: 'g_n2_008', category: 'grammar', level: 'N2', tags: ['addition', 'not-only'],
        stem: '成績{せいせき}が悪{わる}い___、授業{じゅぎょう}もよく休{やす}む。',
        stemZh: '不僅成績差，還經常缺課。',
        options: [
            { text: 'ばかりか', reason: '正確！「ばかりか」表示「不僅…還…」的累加。' },
            { text: 'ばかりに', reason: '「ばかりに」表示「只因為…」，語法不對。' },
            { text: 'ばかりで', reason: '「ばかりで」表示「光是…」，語意不完整。' },
            { text: 'ばかりだ', reason: '「ばかりだ」表示「越來越…」，不合語境。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばかりか」連接負面事項',
            analysis: '「ばかりか」可用於正面或負面的累加，此處表示「壞事不只一件」。',
            comparisons: ['ばかりか：不僅…還…（正式）', 'のみならず：不僅…（更正式）'],
            commonMistakes: ['○ 悪いばかりか休む / × 悪いばかりか休まない → 後句方向與前句一致'],
        },
    },
    // ━━━ に先立って (prior to) ━━━
    {
        id: 'g_n2_009', category: 'grammar', level: 'N2', tags: ['formal', 'before'],
        stem: '会議{かいぎ}の開催{かいさい}___、資料{しりょう}を配{くば}った。',
        stemZh: '在會議召開之前，分發了資料。',
        options: [
            { text: 'に先立{さきだ}って', reason: '正確！「に先立って」表示「在…之前」，用於正式場合。' },
            { text: 'に際{さい}して', reason: '「に際して」表示「在…之際」，時間點不同。' },
            { text: 'にあたって', reason: '「にあたって」表示「在…之際」，強調準備，但不如「に先立って」明確表示「之前」。' },
            { text: 'をはじめ', reason: '「をはじめ」表示「以…為首」，語意完全不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に先立って」表示事前準備',
            analysis: '「に先立って」表示在某個重要事件之前先做某事，多用於正式場合。',
            comparisons: ['に先立って：在…之前（正式）', '前に：在…之前（一般）'],
            commonMistakes: ['○ 開催に先立って / × 開催に先立ち → 「に先立ち」也正確，為更書面的形式'],
        },
    },
    {
        id: 'g_n2_010', category: 'grammar', level: 'N2', tags: ['formal', 'before'],
        stem: '新{しん}製品{せいひん}の発売{はつばい}___、記者{きしゃ}会見{かいけん}が行{おこな}われた。',
        stemZh: '在新產品發售之前，舉行了記者會。',
        options: [
            { text: 'に先立{さきだ}ち', reason: '正確！「に先立ち」是「に先立って」的書面形式。' },
            { text: 'に関{かん}して', reason: '「に関して」表示「關於…」，語意不合。' },
            { text: 'にかけて', reason: '「にかけて」表示「到…為止」的期間，語意不合。' },
            { text: 'にわたって', reason: '「にわたって」表示「涉及/跨越…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に先立ち」書面形式',
            analysis: '「に先立ち」是「に先立って」的連用形，更常用於書面語和新聞報導。',
            comparisons: ['に先立って：在…之前（口頭正式）', 'に先立ち：在…之前（書面正式）'],
            commonMistakes: ['○ 発売に先立ち / × 発売するに先立ち → 名詞直接接「に先立ち」'],
        },
    },
    // ━━━ をもとに (based on) ━━━
    {
        id: 'g_n2_011', category: 'grammar', level: 'N2', tags: ['formal', 'basis'],
        stem: 'この映画{えいが}は実話{じつわ}___作{つく}られた。',
        stemZh: '這部電影是根據真實故事製作的。',
        options: [
            { text: 'をもとに', reason: '正確！「をもとに」表示「以…為基礎」。' },
            { text: 'をめぐって', reason: '「をめぐって」表示「圍繞…」，語意不合。' },
            { text: 'を通{つう}じて', reason: '「を通じて」表示「通過…」，語意不同。' },
            { text: 'を問{と}わず', reason: '「を問わず」表示「不論…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をもとに」表示根據/基於',
            analysis: '「をもとに」表示以某事物為基礎或根據，常用於創作、研究等場景。',
            comparisons: ['をもとに：以…為基礎', 'に基づいて：基於…（更正式）'],
            commonMistakes: ['○ 実話をもとに / × 実話をもとで → 不用「で」'],
        },
    },
    {
        id: 'g_n2_012', category: 'grammar', level: 'N2', tags: ['formal', 'basis'],
        stem: 'アンケートの結果{けっか}___、新{あたら}しい計画{けいかく}を立{た}てた。',
        stemZh: '根據問卷調查的結果，制定了新計畫。',
        options: [
            { text: 'をもとに', reason: '正確！「をもとに」表示「根據…」。' },
            { text: 'をこめて', reason: '「をこめて」表示「傾注…」，語意不合。' },
            { text: 'を契機{けいき}に', reason: '「を契機に」表示「以…為契機」，語意不完全相同。' },
            { text: 'を除{のぞ}いて', reason: '「を除いて」表示「除了…之外」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をもとに」用於資料/根據',
            analysis: '「をもとに」常用於表示根據某種資料或素材來進行某項工作。',
            comparisons: ['をもとに：根據…（素材/資料）', 'に基づいて：基於…（規則/法律）'],
            commonMistakes: ['○ 結果をもとに計画を立てた / × 結果にもとに計画を立てた → 前面用「を」不是「に」'],
        },
    },
    // ━━━ に沿って (along / in accordance with) ━━━
    {
        id: 'g_n2_013', category: 'grammar', level: 'N2', tags: ['formal', 'accordance'],
        stem: '方針{ほうしん}___、計画{けいかく}を進{すす}める。',
        stemZh: '按照方針推進計畫。',
        options: [
            { text: 'に沿{そ}って', reason: '正確！「に沿って」表示「沿著…/按照…」。' },
            { text: 'に関{かん}して', reason: '「に関して」表示「關於…」，語意不合。' },
            { text: 'に反{はん}して', reason: '「に反して」表示「與…相反」，語意相反。' },
            { text: 'に限{かぎ}って', reason: '「に限って」表示「偏偏…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に沿って」表示按照/遵循',
            analysis: '「に沿って」有兩個含義：①沿著（道路等）②按照（方針等）。此處為②。',
            comparisons: ['に沿って：按照…', 'に基づいて：基於…', 'にしたがって：遵循…/隨著…'],
            commonMistakes: ['○ 方針に沿って / × 方針を沿って → 用「に」不用「を」'],
        },
    },
    {
        id: 'g_n2_014', category: 'grammar', level: 'N2', tags: ['formal', 'accordance'],
        stem: '川{かわ}___歩{ある}くと、公園{こうえん}に着{つ}く。',
        stemZh: '沿著河走的話，就會到公園。',
        options: [
            { text: 'に沿{そ}って', reason: '正確！「に沿って」表示「沿著…（物理路線）」。' },
            { text: 'において', reason: '「において」表示「在…」，語意不合。' },
            { text: 'にわたって', reason: '「にわたって」表示「涉及/跨越…」，語意不合。' },
            { text: 'にかけて', reason: '「にかけて」表示「到…為止」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に沿って」的物理含義',
            analysis: '「に沿って」用於物理路線時，表示「沿著…（河、道路等）」。',
            comparisons: ['川に沿って歩く：沿著河走', '道に沿って進む：沿著道路前進'],
            commonMistakes: ['○ 川に沿って / × 川を沿って → 固定搭配用「に」'],
        },
    },
    // ━━━ あまり (too much / to the extent that) ━━━
    {
        id: 'g_n2_015', category: 'grammar', level: 'N2', tags: ['cause', 'excess'],
        stem: '嬉{うれ}しさの___、泣{な}いてしまった。',
        stemZh: '因為太高興，不禁哭了出來。',
        options: [
            { text: 'あまり', reason: '正確！「名詞＋のあまり」表示「因為太過…以至於…」。' },
            { text: 'おかげで', reason: '「おかげで」表示「託…的福」，語氣不合。' },
            { text: 'せいで', reason: '「せいで」表示「因為…（壞原因）」，語法不同。' },
            { text: 'ために', reason: '「ために」表示「為了…/因為…」，語法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「あまり」表示過度導致的結果',
            analysis: '「あまり」前接名詞時用「名詞のあまり」，表示某種情感或狀態過度，導致了非預期的結果。',
            comparisons: ['嬉しさのあまり：因太高興而…', '嬉しくて：因為高興所以…（一般）'],
            commonMistakes: ['○ 嬉しさのあまり / × 嬉しいのあまり → 名詞形「嬉しさ」接「のあまり」'],
        },
    },
    {
        id: 'g_n2_016', category: 'grammar', level: 'N2', tags: ['cause', 'excess'],
        stem: '心配{しんぱい}する___、眠{ねむ}れなくなった。',
        stemZh: '因為太擔心，睡不著了。',
        options: [
            { text: 'あまり', reason: '正確！「動詞辞書形＋あまり」表示「因為太過…」。' },
            { text: 'ばかりに', reason: '「ばかりに」表示「只因為…」，語感不同。' },
            { text: 'ことから', reason: '「ことから」表示「從…來看」，語意不合。' },
            { text: 'わりに', reason: '「わりに」表示「相較之下/相對而言」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「動詞＋あまり」的接續',
            analysis: '「あまり」前接動詞辭書形時，表示因為過度做某事而導致不好的結果。',
            comparisons: ['心配するあまり：因太擔心而…', '心配のあまり：因太擔心而…（名詞接續）'],
            commonMistakes: ['○ 心配するあまり / ○ 心配のあまり → 動詞形和名詞形都可以'],
        },
    },
    // ━━━ 上で (after doing / in doing) ━━━
    {
        id: 'g_n2_017', category: 'grammar', level: 'N2', tags: ['sequence', 'after'],
        stem: 'よく考{かんが}えた___、決{き}めたいと思{おも}います。',
        stemZh: '我想仔細考慮之後再做決定。',
        options: [
            { text: '上{うえ}で', reason: '正確！「た上で」表示「在做了…之後（再做某事）」。' },
            { text: '上に', reason: '「上に」表示「而且/不僅…」，語意不合。' },
            { text: '上は', reason: '「上は」表示「既然…就…」，語意不合。' },
            { text: '上で（じょうで）', reason: '讀作「じょうで」時表示「在…方面」，此處應讀「うえで」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「た上で」表示先後順序',
            analysis: '「動詞た形＋上で」表示在完成前一動作之後，再進行後一動作。含有慎重考慮的語氣。',
            comparisons: ['考えた上で決める：考慮後再決定', '考えてから決める：考慮之後決定（一般）'],
            commonMistakes: ['○ 考えた上で / × 考える上で → 表示先後順序時用「た形＋上で」'],
        },
    },
    {
        id: 'g_n2_018', category: 'grammar', level: 'N2', tags: ['standpoint', 'aspect'],
        stem: '健康{けんこう}を維持{いじ}する___、運動{うんどう}は大切{たいせつ}だ。',
        stemZh: '在維持健康方面，運動很重要。',
        options: [
            { text: '上{うえ}で', reason: '正確！「辞書形＋上で」表示「在做…方面」。' },
            { text: 'からには', reason: '「からには」表示「既然…就…」，語意不合。' },
            { text: 'にあたって', reason: '「にあたって」表示「在…之際」，語意不完全相同。' },
            { text: 'として', reason: '「として」表示「作為…」，語法不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「辞書形＋上で」表示方面',
            analysis: '「辞書形＋上で」表示「在做…方面/在…的過程中」，與「た形＋上で」意義不同。',
            comparisons: ['辞書形＋上で：在…方面', 'た形＋上で：做了…之後'],
            commonMistakes: ['○ 維持する上で（在維持方面）/ ○ 維持した上で（維持之後）→ 意思不同'],
        },
    },
    // ━━━ ことから (from the fact that) ━━━
    {
        id: 'g_n2_019', category: 'grammar', level: 'N2', tags: ['reason', 'naming'],
        stem: '形{かたち}が猫{ねこ}の耳{みみ}に似{に}ている___、「猫耳{ねこみみ}山{やま}」と呼{よ}ばれている。',
        stemZh: '因為形狀像貓耳朵，所以被稱為「貓耳山」。',
        options: [
            { text: 'ことから', reason: '正確！「ことから」表示「因為…（所以被稱為/被認為）」。' },
            { text: 'ことに', reason: '「ことに」表示「令人…的是」，語意不合。' },
            { text: 'ことだから', reason: '「ことだから」表示「因為是某人的性格」，語意不合。' },
            { text: 'ことなく', reason: '「ことなく」表示「不…而…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことから」表示命名/判斷的根據',
            analysis: '「ことから」常用於說明名稱的由來或判斷的根據，意為「從…的事實來看」。',
            comparisons: ['ことから：從…的事實來看（常用於命名由來）', 'から：因為…（一般原因）'],
            commonMistakes: ['○ 似ていることから / × 似ていることで → 表命名由來用「ことから」'],
        },
    },
    {
        id: 'g_n2_020', category: 'grammar', level: 'N2', tags: ['reason', 'naming'],
        stem: '目{め}の周{まわ}りが黒{くろ}い___、パンダと名付{なづ}けられた。',
        stemZh: '因為眼睛周圍是黑色的，所以被取名為熊貓。',
        options: [
            { text: 'ことから', reason: '正確！「ことから」用於說明特徵和命名的關係。' },
            { text: 'ことだ', reason: '「ことだ」表示忠告「應該…」，語意不合。' },
            { text: 'ことか', reason: '「ことか」表示感嘆「多麼…啊」，語意不合。' },
            { text: 'ことにはならない', reason: '「ことにはならない」表示「不見得就是…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことから」用於解釋由來',
            analysis: '「ことから」常與「名付ける」「呼ぶ」「言う」等動詞搭配，解釋命名的原因。',
            comparisons: ['ことから名付けられた：因為…被取名為…', 'ことから呼ばれている：因為…被稱為…'],
            commonMistakes: ['○ 黒いことから / × 黒くことから → い形容詞普通形接「ことから」'],
        },
    },
    // ━━━ からといって (just because) ━━━
    {
        id: 'g_n2_021', category: 'grammar', level: 'N2', tags: ['reason', 'counter'],
        stem: 'お金{かね}がある___、幸{しあわ}せとは限{かぎ}らない。',
        stemZh: '不能說有錢就一定幸福。',
        options: [
            { text: 'からといって', reason: '正確！「からといって」表示「即使…也不一定…」。' },
            { text: 'からこそ', reason: '「からこそ」表示「正因為…」，語意相反。' },
            { text: 'からには', reason: '「からには」表示「既然…就…」，語意不合。' },
            { text: 'からして', reason: '「からして」表示「從…來看」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「からといって」反駁理由',
            analysis: '「からといって」後面常接否定或部分否定，表示「即便有這個理由，結果也不一定如此」。',
            comparisons: ['からといって：即使…也不一定…', 'からこそ：正因為…才…（強調肯定）'],
            commonMistakes: ['○ あるからといって幸せとは限らない / × あるからといって幸せだ → 後句通常為否定'],
        },
    },
    {
        id: 'g_n2_022', category: 'grammar', level: 'N2', tags: ['reason', 'counter'],
        stem: '日本人{にほんじん}だ___、正{ただ}しい敬語{けいご}が使{つか}えるわけではない。',
        stemZh: '不能說是日本人就一定會用正確的敬語。',
        options: [
            { text: 'からといって', reason: '正確！表示「不能因為是日本人就認為…」。' },
            { text: 'からすると', reason: '「からすると」表示「從…來看」，語意不合。' },
            { text: 'からして', reason: '「からして」表示「從…來看就已經…」，語意不合。' },
            { text: 'からみると', reason: '「からみると」表示「從…的觀點看」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「からといって…わけではない」常見搭配',
            analysis: '「からといって」經常與「わけではない」「とは限らない」搭配使用，構成「即使…也未必…」。',
            comparisons: ['からといって〜わけではない：即使…也未必…', 'からといって〜とは限らない：即使…也不一定…'],
            commonMistakes: ['○ 日本人だからといって / × 日本人からといって → 名詞接「だ」再接「からといって」'],
        },
    },
    // ━━━ 以上（は） (since / now that) ━━━
    {
        id: 'g_n2_023', category: 'grammar', level: 'N2', tags: ['reason', 'obligation'],
        stem: '約束{やくそく}した___、必{かなら}ず守{まも}らなければならない。',
        stemZh: '既然約定了，就必須遵守。',
        options: [
            { text: '以上{いじょう}は', reason: '正確！「以上は」表示「既然…就…」。' },
            { text: '以上に', reason: '「以上に」表示「比…更…」，語意不合。' },
            { text: '以外{いがい}は', reason: '「以外は」表示「除了…之外」，語意不合。' },
            { text: '以来{いらい}', reason: '「以来」表示「自從…以來」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「以上は」表示既然',
            analysis: '「動詞た形/普通形＋以上は」表示「既然已經…了，那就應該…」，後面常接義務或決心。',
            comparisons: ['以上は：既然…就…', 'からには：既然…就…（語感相近）'],
            commonMistakes: ['○ 約束した以上は / × 約束する以上は → 表已確定的事用た形'],
        },
    },
    {
        id: 'g_n2_024', category: 'grammar', level: 'N2', tags: ['reason', 'obligation'],
        stem: 'プロとして仕事{しごと}を引{ひ}き受{う}けた___、最後{さいご}まで責任{せきにん}を持{も}つべきだ。',
        stemZh: '既然作為專業人士接下了工作，就應該負責到底。',
        options: [
            { text: '以上{いじょう}', reason: '正確！「以上」也可省略「は」，表示「既然…」。' },
            { text: '以来{いらい}', reason: '「以来」表示「自從…之後」，語意不同。' },
            { text: '以前{いぜん}', reason: '「以前」表示「…之前」，語意不合。' },
            { text: '以降{いこう}', reason: '「以降」表示「…之後」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「以上」後句常接義務表現',
            analysis: '「以上」後面常接「べきだ」「なければならない」「つもりだ」等表示義務或決心的表現。',
            comparisons: ['以上：既然…（後接義務）', 'からには：既然…（語感相同）', '上は：既然…（書面）'],
            commonMistakes: ['○ 引き受けた以上 / × 引き受ける以上 → 已確定的事實用た形'],
        },
    },
    // ━━━ 次第 (depending on / as soon as) ━━━
    {
        id: 'g_n2_025', category: 'grammar', level: 'N2', tags: ['condition', 'depend'],
        stem: '結果{けっか}___、今後{こんご}の方針{ほうしん}を変{か}えるかもしれない。',
        stemZh: '視結果而定，今後的方針可能會改變。',
        options: [
            { text: '次第{しだい}で', reason: '正確！「次第で」表示「取決於…」。' },
            { text: '次第{しだい}に', reason: '「次第に」表示「逐漸地」，語意不合。' },
            { text: '次第{しだい}', reason: '「ます形＋次第」表示「一…就…」，此處接名詞用「次第で」。' },
            { text: 'しだいだ', reason: '句尾用法表示「情況就是…」，語法不合此句。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「次第で」表示取決於',
            analysis: '「名詞＋次第で」表示某事取決於前面的名詞，含有不確定性。',
            comparisons: ['次第で：取決於…（條件）', '次第：一…就…（時間）'],
            commonMistakes: ['○ 結果次第で / × 結果の次第で → 名詞直接接「次第で」'],
        },
    },
    {
        id: 'g_n2_026', category: 'grammar', level: 'N2', tags: ['time', 'immediate'],
        stem: '届{とど}き___、すぐにご連絡{れんらく}いたします。',
        stemZh: '一到貨就立刻聯繫您。',
        options: [
            { text: '次第{しだい}', reason: '正確！「ます形＋次第」表示「一…就立刻…」。' },
            { text: '次第{しだい}で', reason: '「次第で」表示「取決於…」，語意不合。' },
            { text: '次第{しだい}に', reason: '「次第に」表示「逐漸地」，語意不合。' },
            { text: 'しだいだ', reason: '句尾用法，不用於句中。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ます形＋次第」表示一…就…',
            analysis: '「ます形＋次第」表示在前面的動作完成後立刻進行後面的動作，常用於商務場合。',
            comparisons: ['届き次第：一到就…（正式）', '届いたらすぐに：到了之後馬上…（一般）'],
            commonMistakes: ['○ 届き次第 / × 届く次第 → 用ます形去「ます」接「次第」'],
        },
    },
    // ━━━ に至って (reaching the point) ━━━
    {
        id: 'g_n2_027', category: 'grammar', level: 'N2', tags: ['formal', 'reaching'],
        stem: '事態{じたい}がここまで深刻{しんこく}な状況{じょうきょう}___、ようやく対策{たいさく}が取{と}られた。',
        stemZh: '事態發展到如此嚴重的地步，才終於採取了對策。',
        options: [
            { text: 'に至{いた}って', reason: '正確！「に至って」表示「到了…的地步/階段」。' },
            { text: 'に際{さい}して', reason: '「に際して」表示「在…之際」，語意不完全相同。' },
            { text: 'に先立{さきだ}って', reason: '「に先立って」表示「在…之前」，語意不合。' },
            { text: 'にあたって', reason: '「にあたって」表示「在…之際」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に至って」表示到了某個階段',
            analysis: '「に至って」表示事態發展到了某個重要的階段或地步，常帶有「到了這個地步才…」的語氣。',
            comparisons: ['に至って：到了…的地步', 'になって：到了…（一般時間）'],
            commonMistakes: ['○ ここまでに至って / × ここまでで至って → 用「に」不用「で」'],
        },
    },
    // ━━━ において / における (in/at - formal) ━━━
    {
        id: 'g_n2_028', category: 'grammar', level: 'N2', tags: ['formal', 'location'],
        stem: '来月{らいげつ}の会議{かいぎ}は本社{ほんしゃ}___行{おこな}われます。',
        stemZh: '下個月的會議將在總公司舉行。',
        options: [
            { text: 'において', reason: '正確！「において」是「で」的正式表現，表示場所。' },
            { text: 'にとって', reason: '「にとって」表示「對…來說」，語意不合。' },
            { text: 'について', reason: '「について」表示「關於…」，語意不合。' },
            { text: 'にかけて', reason: '「にかけて」表示「到…為止」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「において」表場所（正式）',
            analysis: '「において」是助詞「で」的正式書面表現，常用於公告、報告等正式文書。',
            comparisons: ['において：在…（正式）', 'で：在…（一般）'],
            commonMistakes: ['○ 本社において行われます / × 本社においてやります → 正式場合不用「やる」'],
        },
    },
    {
        id: 'g_n2_029', category: 'grammar', level: 'N2', tags: ['formal', 'modifier'],
        stem: '現代{げんだい}社会{しゃかい}___問題{もんだい}は複雑{ふくざつ}だ。',
        stemZh: '現代社會中的問題很複雜。',
        options: [
            { text: 'における', reason: '正確！「における」是「において」的連體形，修飾名詞。' },
            { text: 'において', reason: '「において」不能直接修飾名詞，需用連體形「における」。' },
            { text: 'にとっての', reason: '「にとっての」表示「對…來說的」，語意不合。' },
            { text: 'についての', reason: '「についての」表示「關於…的」，語意不完全相同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「における」修飾名詞',
            analysis: '「における」是「において」的連體形（即可修飾名詞的形式），相當於「での」。',
            comparisons: ['における問題：（在…中的）問題', 'での問題：（在…中的）問題（一般）'],
            commonMistakes: ['○ 社会における問題 / × 社会において問題 → 修飾名詞用「における」'],
        },
    },
    // ━━━ に際して (on the occasion of) ━━━
    {
        id: 'g_n2_030', category: 'grammar', level: 'N2', tags: ['formal', 'occasion'],
        stem: '開会{かいかい}___、社長{しゃちょう}が挨拶{あいさつ}をした。',
        stemZh: '在開會之際，社長致詞了。',
        options: [
            { text: 'に際{さい}して', reason: '正確！「に際して」表示「在…之際」，用於正式場合。' },
            { text: 'に関{かん}して', reason: '「に関して」表示「關於…」，語意不合。' },
            { text: 'に反{はん}して', reason: '「に反して」表示「與…相反」，語意不合。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對於…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に際して」表示場合/時機',
            analysis: '「に際して」表示在某個重要場合或時機，多用於正式場合，如典禮、會議等。',
            comparisons: ['に際して：在…之際（正式）', 'のとき：在…的時候（一般）'],
            commonMistakes: ['○ 開会に際して / × 開会をに際して → 名詞直接接「に際して」'],
        },
    },
    // ━━━ を契機に (triggered by) ━━━
    {
        id: 'g_n2_031', category: 'grammar', level: 'N2', tags: ['formal', 'trigger'],
        stem: '大地震{だいじしん}___、防災{ぼうさい}意識{いしき}が高{たか}まった。',
        stemZh: '以大地震為契機，防災意識提高了。',
        options: [
            { text: 'を契機{けいき}に', reason: '正確！「を契機に」表示「以…為契機/轉捩點」。' },
            { text: 'をもとに', reason: '「をもとに」表示「以…為基礎」，語意不合。' },
            { text: 'をめぐって', reason: '「をめぐって」表示「圍繞著…」，語意不合。' },
            { text: 'を通{つう}じて', reason: '「を通じて」表示「通過…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を契機に」表示轉捩點',
            analysis: '「を契機に」表示以某個事件為轉捩點，之後發生了重大的變化。',
            comparisons: ['を契機に：以…為契機', 'をきっかけに：以…為開端（較口語）'],
            commonMistakes: ['○ 地震を契機に / × 地震の契機に → 用「を」不用「の」'],
        },
    },
    // ━━━ を通じて (through / throughout) ━━━
    {
        id: 'g_n2_032', category: 'grammar', level: 'N2', tags: ['formal', 'through'],
        stem: 'ボランティア活動{かつどう}___、多{おお}くのことを学{まな}んだ。',
        stemZh: '通過志工活動，學到了很多。',
        options: [
            { text: 'を通{つう}じて', reason: '正確！「を通じて」表示「通過…（手段/方法）」。' },
            { text: 'を問{と}わず', reason: '「を問わず」表示「不論…」，語意不合。' },
            { text: 'をもって', reason: '「をもって」表示「以…」，語感不同。' },
            { text: 'をめぐって', reason: '「をめぐって」表示「圍繞…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を通じて」表示手段/媒介',
            analysis: '「を通じて」有兩個含義：①通過某手段②在整個期間。此處為①。',
            comparisons: ['を通じて：通過…（手段）', 'を通して：通過…（手段/期間，較口語）'],
            commonMistakes: ['○ 活動を通じて学んだ / × 活動で通じて学んだ → 不加「で」'],
        },
    },
    {
        id: 'g_n2_033', category: 'grammar', level: 'N2', tags: ['formal', 'throughout'],
        stem: '一年{いちねん}___、この地域{ちいき}は暖{あたた}かい。',
        stemZh: '全年，這個地區都很暖和。',
        options: [
            { text: 'を通{つう}じて', reason: '正確！「を通じて」表示「在整個…期間」。' },
            { text: 'にわたって', reason: '「にわたって」也表示「持續/涉及…」，但此處強調「整年」用「を通じて」更自然。' },
            { text: 'にかけて', reason: '「にかけて」表示「從…到…」，需兩個時間點。' },
            { text: 'において', reason: '「において」表示「在…」，不強調期間。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を通じて」表示整個期間',
            analysis: '「を通じて」用於表示在整個時間段內都如此的情況。',
            comparisons: ['一年を通じて：全年（整個期間）', '一年にわたって：長達一年（強調時間長度）'],
            commonMistakes: ['○ 一年を通じて / × 一年間を通じて → 「一年」已包含期間意思'],
        },
    },
    // ━━━ にわたって (spanning) ━━━
    {
        id: 'g_n2_034', category: 'grammar', level: 'N2', tags: ['formal', 'span'],
        stem: '三日間{みっかかん}___、議論{ぎろん}が続{つづ}いた。',
        stemZh: '議論持續了三天。',
        options: [
            { text: 'にわたって', reason: '正確！「にわたって」表示「長達…/涉及…」。' },
            { text: 'において', reason: '「において」表示「在…」，不強調持續時間。' },
            { text: 'について', reason: '「について」表示「關於…」，語意不合。' },
            { text: 'にかけて', reason: '「にかけて」表示「從…到…」，語法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にわたって」表示持續範圍',
            analysis: '「にわたって」表示在某個時間或空間範圍內持續進行，強調範圍之廣或時間之長。',
            comparisons: ['にわたって：長達…/涉及…', 'にかけて：從…到…'],
            commonMistakes: ['○ 三日間にわたって / × 三日間をわたって → 用「に」不用「を」'],
        },
    },
    // ━━━ 上（じょう） (from the standpoint of) ━━━
    {
        id: 'g_n2_035', category: 'grammar', level: 'N2', tags: ['formal', 'standpoint'],
        stem: '法律{ほうりつ}___、この行為{こうい}は違法{いほう}です。',
        stemZh: '從法律上來說，這個行為是違法的。',
        options: [
            { text: '上{じょう}', reason: '正確！「名詞＋上」讀作「じょう」時表示「在…方面/上」。' },
            { text: 'の上{うえ}で', reason: '讀作「うえで」語意不同，表示「在…之上」。' },
            { text: '以上{いじょう}', reason: '「以上」表示「既然…」或「以上」，語法不合。' },
            { text: '上{うえ}に', reason: '「上に」表示「而且」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「名詞＋上（じょう）」表示方面',
            analysis: '「名詞＋上」讀作「じょう」時，表示從某個角度或方面來看。常見搭配：法律上、歴史上、仕事上等。',
            comparisons: ['法律上：法律上（方面）', '法律の上で：在法律上面（物理位置/抽象位置）'],
            commonMistakes: ['○ 法律上（じょう）/ × 法律上（うえ）→ 表示方面時讀「じょう」'],
        },
    },
    // ━━━ っぱなし (left as is) ━━━
    {
        id: 'g_n2_036', category: 'grammar', level: 'N2', tags: ['state', 'neglect'],
        stem: 'ドアを開{あ}け___にしないでください。',
        stemZh: '請不要讓門一直開著。',
        options: [
            { text: 'っぱなし', reason: '正確！「ます形＋っぱなし」表示「一直放著不管」。' },
            { text: 'っきり', reason: '「っきり」表示「自從…之後」，語法不合。' },
            { text: 'がち', reason: '「がち」表示「容易…/動不動就…」，語法不合。' },
            { text: 'がたい', reason: '「がたい」表示「難以…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「っぱなし」表示放置不管',
            analysis: '「ます形＋っぱなし」表示某個動作完成後的狀態被放置不管，常帶負面語氣。',
            comparisons: ['開けっぱなし：一直開著不關', '開けたまま：開著的狀態（中性）'],
            commonMistakes: ['○ 開けっぱなし / × 開くっぱなし → 用他動詞ます形接「っぱなし」'],
        },
    },
    {
        id: 'g_n2_037', category: 'grammar', level: 'N2', tags: ['state', 'neglect'],
        stem: '電気{でんき}をつけ___にして寝{ね}てしまった。',
        stemZh: '開著電燈就睡著了。',
        options: [
            { text: 'っぱなし', reason: '正確！表示「電燈開著的狀態被放置」。' },
            { text: 'つつ', reason: '「つつ」表示「一邊…一邊…」，語法不合。' },
            { text: 'がち', reason: '「がち」表示「傾向於…」，語法不合。' },
            { text: 'かねない', reason: '「かねない」表示「有可能…」，語法不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「っぱなし」用於日常場景',
            analysis: '「っぱなし」常用於描述忘記關燈、關門等日常疏忽的場景。',
            comparisons: ['つけっぱなし：一直開著', '出しっぱなし：一直放著沒收'],
            commonMistakes: ['○ つけっぱなし / × つけるっぱなし → 「つけ」是ます形去「ます」'],
        },
    },
    // ━━━ かねない (might) ━━━
    {
        id: 'g_n2_038', category: 'grammar', level: 'N2', tags: ['possibility', 'negative'],
        stem: 'この問題{もんだい}を放{ほう}っておくと、大{おお}きなトラブルになり___。',
        stemZh: '如果放著這個問題不管，可能會變成大麻煩。',
        options: [
            { text: 'かねない', reason: '正確！「かねない」表示「有可能…（壞事）」。' },
            { text: 'かねる', reason: '「かねる」表示「難以…/做不到…」，語意不同。' },
            { text: 'っこない', reason: '「っこない」表示「絕不可能…」，語意相反。' },
            { text: 'がたい', reason: '「がたい」表示「難以…」，語法不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かねない」表示不好的可能性',
            analysis: '「ます形＋かねない」表示有可能發生不好的事情，常用於警告。',
            comparisons: ['かねない：有可能…（消極）', 'かねる：做不到…（委婉拒絕）'],
            commonMistakes: ['○ なりかねない / × なるかねない → 用ます形「なり」接「かねない」'],
        },
    },
    // ━━━ かねる (cannot bring oneself to) ━━━
    {
        id: 'g_n2_039', category: 'grammar', level: 'N2', tags: ['inability', 'polite'],
        stem: '申{もう}し訳{わけ}ございませんが、その要望{ようぼう}にはお応{こた}えし___。',
        stemZh: '非常抱歉，我們難以滿足那個要求。',
        options: [
            { text: 'かねます', reason: '正確！「かねます」是「かねる」的丁寧形，表示委婉拒絕。' },
            { text: 'かねません', reason: '「かねません」是「かねない」的丁寧形，表示「有可能…」，語意相反。' },
            { text: 'がたいです', reason: '「がたい」語法上也表示「難以…」，但不如「かねる」常用於商務場合。' },
            { text: 'つつあります', reason: '「つつある」表示「正在…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かねる」表示委婉拒絕',
            analysis: '「ます形＋かねる」表示「難以做到…」，常用於商務或客服場合的委婉拒絕。',
            comparisons: ['かねる：難以做到…（委婉拒絕）', 'かねない：有可能…（警告）'],
            commonMistakes: ['○ お応えしかねます / × お応えできかねます → 不需要加「でき」'],
        },
    },
    // ━━━ 得る（える/うる）(possible) ━━━
    {
        id: 'g_n2_040', category: 'grammar', level: 'N2', tags: ['possibility'],
        stem: 'そんなことはあり___ないと思{おも}う。',
        stemZh: '我覺得那種事不可能發生。',
        options: [
            { text: '得{え}', reason: '正確！「あり得ない」表示「不可能有」。' },
            { text: '兼{か}ね', reason: '「かねない」表示「有可能…」，語法不合。' },
            { text: '切{き}れ', reason: '「切れない」表示「做不完」，語意不合。' },
            { text: '過{す}ぎ', reason: '「過ぎない」表示「只不過是」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「得る/得ない」表示可能/不可能',
            analysis: '「ます形＋得る（うる/える）」表示有可能，「得ない（えない）」表示不可能。「あり得ない」是最常見的用法。',
            comparisons: ['あり得る：有可能', 'あり得ない：不可能'],
            commonMistakes: ['○ あり得ない / × ありえれない → 不存在「えれない」的形式'],
        },
    },
    // ━━━ 恐れがある (risk of) ━━━
    {
        id: 'g_n2_041', category: 'grammar', level: 'N2', tags: ['risk', 'formal'],
        stem: '台風{たいふう}が接近{せっきん}しており、洪水{こうずい}が発生{はっせい}する___。',
        stemZh: '颱風正在逼近，有發生洪水的危險。',
        options: [
            { text: '恐{おそ}れがある', reason: '正確！「恐れがある」表示「有…的危險/可能」。' },
            { text: '恐{おそ}れがない', reason: '「恐れがない」表示「沒有…的危險」，語意相反。' },
            { text: 'わけがない', reason: '「わけがない」表示「不可能…」，語意相反。' },
            { text: 'はずがない', reason: '「はずがない」表示「不應該…」，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「恐れがある」表示風險',
            analysis: '「恐れがある」用於正式場合，表示有發生不好的事情的可能性。常見於新聞報導和官方警告。',
            comparisons: ['恐れがある：有…的危險（正式）', 'かもしれない：也許…（一般）'],
            commonMistakes: ['○ 発生する恐れがある / × 発生の恐れがある → 動詞直接接「恐れがある」也正確'],
        },
    },
    // ━━━ きり (since / only) ━━━
    {
        id: 'g_n2_042', category: 'grammar', level: 'N2', tags: ['limit', 'since'],
        stem: '彼{かれ}とは卒業{そつぎょう}して以来{いらい}、一度{いちど}会{あ}った___で、その後{ご}連絡{れんらく}がない。',
        stemZh: '畢業後只見過他一次，之後就沒有聯繫了。',
        options: [
            { text: 'きり', reason: '正確！「きり」表示「只有…（之後就沒有了）」。' },
            { text: 'ばかり', reason: '「ばかり」表示「淨是…/大約…」，語意不合。' },
            { text: 'だけ', reason: '「だけ」表示「只有…」，但不含「之後就沒有」的語感。' },
            { text: 'しか', reason: '「しか」需接否定形，語法結構不合此處。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「きり」表示限定',
            analysis: '「きり」表示「只有…」，後面常含有「之後就沒有了」的語氣。',
            comparisons: ['きり：只有…（之後沒了）', 'だけ：只有…（單純限定）'],
            commonMistakes: ['○ 一度会ったきり / × 一度会うきり → 過去的事用た形'],
        },
    },
    // ━━━ がたい (difficult to) ━━━
    {
        id: 'g_n2_043', category: 'grammar', level: 'N2', tags: ['difficulty'],
        stem: '彼{かれ}の行動{こうどう}は理解{りかい}し___。',
        stemZh: '他的行為令人難以理解。',
        options: [
            { text: 'がたい', reason: '正確！「がたい」表示「難以…」，用於心理或情感上。' },
            { text: 'にくい', reason: '「にくい」表示「不容易…」，語感稍有不同。' },
            { text: 'かねる', reason: '「かねる」表示「做不到…」，用於委婉拒絕。' },
            { text: 'っこない', reason: '「っこない」表示「絕不可能…」，語感太強。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「がたい」表示心理上的困難',
            analysis: '「ます形＋がたい」表示從心理或情感上難以做到某事，比「にくい」更正式、更強調心理因素。',
            comparisons: ['がたい：難以…（心理/情感）', 'にくい：不容易…（物理/能力）'],
            commonMistakes: ['○ 理解しがたい / × 理解するがたい → 用ます形「し」接「がたい」'],
        },
    },
    // ━━━ っこない (no chance of) ━━━
    {
        id: 'g_n2_044', category: 'grammar', level: 'N2', tags: ['impossibility', 'colloquial'],
        stem: 'こんな難{むずか}しい問題{もんだい}、解{と}け___よ。',
        stemZh: '這麼難的題目，絕不可能解得出來啊。',
        options: [
            { text: 'っこない', reason: '正確！「っこない」表示「絕對不可能…」，口語表現。' },
            { text: 'がたい', reason: '「がたい」表示「難以…」，語感不夠強烈。' },
            { text: 'かねる', reason: '「かねる」表示「做不到…」，過於正式。' },
            { text: 'かねない', reason: '「かねない」表示「有可能…」，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「っこない」表示口語否定',
            analysis: '「ます形＋っこない」是口語表現，表示「絕不可能…」，語氣強烈。',
            comparisons: ['っこない：絕不可能…（口語）', 'はずがない：不可能…（一般）'],
            commonMistakes: ['○ 解けっこない / × 解くっこない → 用ます形「解け」接「っこない」'],
        },
    },
    // ━━━ 限り (as long as) ━━━
    {
        id: 'g_n2_045', category: 'grammar', level: 'N2', tags: ['condition', 'as-long-as'],
        stem: '努力{どりょく}する___、夢{ゆめ}は叶{かな}うだろう。',
        stemZh: '只要努力，夢想就會實現吧。',
        options: [
            { text: '限{かぎ}り', reason: '正確！「限り」表示「只要…就…」。' },
            { text: 'に限{かぎ}って', reason: '「に限って」表示「偏偏…」，語意不合。' },
            { text: 'に限{かぎ}らず', reason: '「に限らず」表示「不僅限於…」，語意不合。' },
            { text: 'に限{かぎ}る', reason: '「に限る」表示「最好是…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「限り」表示條件',
            analysis: '「動詞普通形＋限り」表示「只要…就…」，後面接可以期待的結果。',
            comparisons: ['限り：只要…（條件）', 'うちに：趁…的時候'],
            commonMistakes: ['○ 努力する限り / × 努力した限り → 表示持續條件用辭書形'],
        },
    },
    // ━━━ 反面 (on the other hand) ━━━
    {
        id: 'g_n2_046', category: 'grammar', level: 'N2', tags: ['contrast'],
        stem: 'この仕事{しごと}は給料{きゅうりょう}が高{たか}い___、残業{ざんぎょう}が多{おお}い。',
        stemZh: '這份工作薪水高，但另一方面加班多。',
        options: [
            { text: '反面{はんめん}', reason: '正確！「反面」表示「另一方面/相對地」。' },
            { text: '以上{いじょう}', reason: '「以上」表示「既然…就…」，語意不合。' },
            { text: '一方{いっぽう}で', reason: '「一方で」也表示「另一方面」，但接在句末時不用「で」。' },
            { text: 'わりに', reason: '「わりに」表示「與…不成比例」，語意稍有不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「反面」表示事物的兩面性',
            analysis: '「反面」表示同一事物的相反面，常用於描述優缺點並存的情況。',
            comparisons: ['反面：另一方面（同一事物）', '一方で：另一方面（可不同事物）'],
            commonMistakes: ['○ 高い反面残業が多い / × 高い反面残業が少ない → 前後應為對比關係'],
        },
    },
    // ━━━ にかけては (when it comes to) ━━━
    {
        id: 'g_n2_047', category: 'grammar', level: 'N2', tags: ['emphasis', 'expertise'],
        stem: '料理{りょうり}___、母{はは}は誰{だれ}にも負{ま}けない。',
        stemZh: '說到做菜，媽媽不輸任何人。',
        options: [
            { text: 'にかけては', reason: '正確！「にかけては」表示「在…方面（特別擅長）」。' },
            { text: 'について', reason: '「について」表示「關於…」，不含「擅長」的語感。' },
            { text: 'に関{かん}して', reason: '「に関して」表示「關於…」，不含「擅長」的語感。' },
            { text: 'にとって', reason: '「にとって」表示「對…來說」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にかけては」表示擅長領域',
            analysis: '「にかけては」表示在某個特定領域特別出色，後面常接正面評價。',
            comparisons: ['にかけては：在…方面（擅長）', 'について：關於…（中性）'],
            commonMistakes: ['○ 料理にかけては負けない / × 料理にかけては下手だ → 後句為正面評價'],
        },
    },
    // ━━━ を問わず (regardless of) ━━━
    {
        id: 'g_n2_048', category: 'grammar', level: 'N2', tags: ['formal', 'regardless'],
        stem: '年齢{ねんれい}___、誰{だれ}でも参加{さんか}できます。',
        stemZh: '不論年齡，任何人都可以參加。',
        options: [
            { text: 'を問{と}わず', reason: '正確！「を問わず」表示「不論…/不管…」。' },
            { text: 'をもって', reason: '「をもって」表示「以…」，語意不合。' },
            { text: 'をこめて', reason: '「をこめて」表示「傾注…」，語意不合。' },
            { text: 'を除{のぞ}いて', reason: '「を除いて」表示「除了…之外」，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を問わず」表示不區分',
            analysis: '「を問わず」表示不受某條件限制，常用於正式公告。常見搭配：年齢・性別・経験を問わず。',
            comparisons: ['を問わず：不論…（正式）', 'に関わらず：不管…（正式）', 'にかかわらず：不管…'],
            commonMistakes: ['○ 年齢を問わず / × 年齢に問わず → 用「を」不用「に」'],
        },
    },
    // ━━━ つつ (while / although) ━━━
    {
        id: 'g_n2_049', category: 'grammar', level: 'N2', tags: ['simultaneous', 'literary'],
        stem: '悪{わる}いと思{おも}い___、つい嘘{うそ}をついてしまった。',
        stemZh: '雖然覺得不好，但還是忍不住說了謊。',
        options: [
            { text: 'つつ', reason: '正確！「つつ」表示「雖然…但是…」（逆接）。' },
            { text: 'ながら', reason: '「ながら」也可表示逆接，但「つつ」更書面。' },
            { text: 'つつある', reason: '「つつある」表示「正在…」，語法不合此處。' },
            { text: 'がてら', reason: '「がてら」表示「順便…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「つつ」的逆接用法',
            analysis: '「ます形＋つつ」表示逆接「雖然…但是…」，比「ながら」更書面。',
            comparisons: ['つつ：雖然…但…（書面）', 'ながら：雖然…但…（口語也可）'],
            commonMistakes: ['○ 思いつつ / × 思うつつ → 用ます形「思い」接「つつ」'],
        },
    },
    // ━━━ つつある (in the process of) ━━━
    {
        id: 'g_n2_050', category: 'grammar', level: 'N2', tags: ['progressive', 'change'],
        stem: '地球{ちきゅう}の環境{かんきょう}は悪化{あっか}し___。',
        stemZh: '地球的環境正在惡化。',
        options: [
            { text: 'つつある', reason: '正確！「つつある」表示「正在…（進行中的變化）」。' },
            { text: 'つつ', reason: '「つつ」表示「一邊…一邊…」或逆接，語法不合此處。' },
            { text: 'がち', reason: '「がち」表示「容易…/動不動就…」，語法不合。' },
            { text: 'かねない', reason: '「かねない」表示「有可能…」，語意不完全相同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「つつある」表示正在進行的變化',
            analysis: '「ます形＋つつある」表示某種變化正在進行中，比「ている」更正式。',
            comparisons: ['悪化しつつある：正在惡化中（書面）', '悪化している：正在惡化（一般）'],
            commonMistakes: ['○ 悪化しつつある / × 悪化するつつある → 用ます形接「つつある」'],
        },
    },
    // ━━━ とはいえ (that said / having said that) ━━━
    {
        id: 'g_n2_051', category: 'grammar', level: 'N2', tags: ['contrast', 'concession'],
        stem: '春{はる}になった___、まだ寒{さむ}い日{ひ}が続{つづ}いている。',
        stemZh: '話雖如此已經到了春天，但寒冷的日子仍在持續。',
        options: [
            { text: 'とはいえ', reason: '正確！「とはいえ」表示「話雖如此…但是…」。' },
            { text: 'というのに', reason: '「というのに」語法上不自然。' },
            { text: 'ということは', reason: '「ということは」表示「也就是說…」，語意不合。' },
            { text: 'というより', reason: '「というより」表示「與其說…不如說…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とはいえ」表示讓步轉折',
            analysis: '「とはいえ」表示雖然承認前面的事實，但後面還是有不同的情況。',
            comparisons: ['とはいえ：話雖如此…（讓步）', 'とはいっても：雖說…但…（口語）'],
            commonMistakes: ['○ 春になったとはいえ / × 春になるとはいえ → 已成事實用た形'],
        },
    },
    {
        id: 'g_n2_052', category: 'grammar', level: 'N2', tags: ['contrast', 'concession'],
        stem: '子供{こども}___、自分{じぶん}のことは自分{じぶん}でしなさい。',
        stemZh: '雖說是小孩，自己的事要自己做。',
        options: [
            { text: 'とはいえ', reason: '正確！「とはいえ」接名詞時表示「雖說是…但…」。' },
            { text: 'としても', reason: '「としても」表示「即使作為…」，語感稍有不同。' },
            { text: 'にしたら', reason: '「にしたら」表示「從…的角度」，語意不合。' },
            { text: 'であれ', reason: '「であれ」表示「不管是…」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とはいえ」接名詞',
            analysis: '「とはいえ」前可直接接名詞，表示「雖說是…但…」。',
            comparisons: ['子供とはいえ：雖說是小孩…', '子供だからといって：不能因為是小孩就…'],
            commonMistakes: ['○ 子供とはいえ / × 子供だとはいえ → 名詞直接接「とはいえ」'],
        },
    },
    // ━━━ にしても (even if) ━━━
    {
        id: 'g_n2_053', category: 'grammar', level: 'N2', tags: ['concession', 'even-if'],
        stem: '忙{いそが}しい___、食事{しょくじ}はちゃんと取{と}るべきだ。',
        stemZh: '就算很忙，也應該好好吃飯。',
        options: [
            { text: 'にしても', reason: '正確！「にしても」表示「即使…也…」。' },
            { text: 'にしたら', reason: '「にしたら」表示「從…的角度來看」，語意不合。' },
            { text: 'にすれば', reason: '「にすれば」表示「如果…的話」，語感不同。' },
            { text: 'にしろ', reason: '「にしろ」也可表示「即使…」，但語感更強硬。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にしても」表示讓步',
            analysis: '「にしても」表示即使承認前面的條件，後面的主張仍然成立。',
            comparisons: ['にしても：即使…也…', 'としても：就算…也…（語感相近）'],
            commonMistakes: ['○ 忙しいにしても / × 忙しいのにしても → い形容詞直接接「にしても」'],
        },
    },
    {
        id: 'g_n2_054', category: 'grammar', level: 'N2', tags: ['concession', 'even-if'],
        stem: '冗談{じょうだん}___、言{い}っていいことと悪{わる}いことがある。',
        stemZh: '就算是開玩笑，也有能說和不能說的話。',
        options: [
            { text: 'にしても', reason: '正確！「名詞＋にしても」表示「即使是…」。' },
            { text: 'にしては', reason: '「にしては」表示「就…而言」，語意不同。' },
            { text: 'にして', reason: '「にして」表示「在…的階段」，語意不合。' },
            { text: 'にしたって', reason: '「にしたって」也可表示「即使…」，但更口語化。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にしても」接名詞',
            analysis: '「名詞＋にしても」表示「即使是…」，用於提出讓步條件。',
            comparisons: ['にしても：即使是…也…', 'にしては：就…而言（意外）'],
            commonMistakes: ['○ 冗談にしても / × 冗談のにしても → 名詞直接接「にしても」'],
        },
    },
    // ━━━ たところで (even if one does) ━━━
    {
        id: 'g_n2_055', category: 'grammar', level: 'N2', tags: ['concession', 'futility'],
        stem: '今{いま}さら後悔{こうかい}した___、もう遅{おそ}い。',
        stemZh: '事到如今就算後悔也已經太遲了。',
        options: [
            { text: 'ところで', reason: '正確！「たところで」表示「即使做了…也（沒用）」。' },
            { text: 'ところに', reason: '「ところに」表示「正當…之時」，語意不合。' },
            { text: 'ところが', reason: '「ところが」表示「然而」，語意不合。' },
            { text: 'ところを', reason: '「ところを」表示「正在…的時候（被發現等）」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たところで」表示做了也沒用',
            analysis: '「動詞た形＋ところで」表示即使做了某事，也不會有好的結果。常帶消極語氣。',
            comparisons: ['たところで：即使…也（沒用）', 'ても：即使…也…（一般讓步）'],
            commonMistakes: ['○ 後悔したところで / × 後悔するところで → 用た形接「ところで」'],
        },
    },
    {
        id: 'g_n2_056', category: 'grammar', level: 'N2', tags: ['concession', 'futility'],
        stem: 'どんなに頑張{がんば}った___、一日{いちにち}では終{お}わらないだろう。',
        stemZh: '無論再怎麼努力，一天之內也完不成吧。',
        options: [
            { text: 'ところで', reason: '正確！「たところで」表示做了也不會改變結果。' },
            { text: 'ところに', reason: '「ところに」表示時間點，語意不合。' },
            { text: 'ところか', reason: '「どころか」表示「豈止…」，此處語法不合。' },
            { text: 'ところが', reason: '「ところが」表示出乎意料「然而」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たところで」的否定後句',
            analysis: '「たところで」後面通常接否定或表示不可能的內容。',
            comparisons: ['頑張ったところで終わらない：即使努力了也完不成', '頑張っても終わらない：即使努力也完不成（一般）'],
            commonMistakes: ['○ 頑張ったところで終わらない / × 頑張ったところで終わる → 後句通常為否定結果'],
        },
    },
    // ━━━ にせよ (even if) ━━━
    {
        id: 'g_n2_057', category: 'grammar', level: 'N2', tags: ['concession', 'formal'],
        stem: 'どんな理由{りゆう}がある___、暴力{ぼうりょく}は許{ゆる}されない。',
        stemZh: '無論有什麼理由，暴力都是不被允許的。',
        options: [
            { text: 'にせよ', reason: '正確！「にせよ」表示「即便…也…」，書面語。' },
            { text: 'にしても', reason: '「にしても」也可表示讓步，但「にせよ」更書面。' },
            { text: 'にしたら', reason: '「にしたら」表示「從…的角度」，語意不合。' },
            { text: 'にすれば', reason: '「にすれば」表示「如果…的話」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にせよ」表示書面讓步',
            analysis: '「にせよ」是比「にしても」更書面的讓步表現，表示「即便…也…」。',
            comparisons: ['にせよ：即便…（書面）', 'にしろ：即便…（口語）', 'にしても：即使…（一般）'],
            commonMistakes: ['○ 理由があるにせよ / × 理由がにせよ → 需要完整的子句接「にせよ」'],
        },
    },
    // ━━━ ざるを得ない (have no choice but to) ━━━
    {
        id: 'g_n2_058', category: 'grammar', level: 'N2', tags: ['obligation', 'reluctant'],
        stem: '上司{じょうし}に命令{めいれい}されたので、やら___。',
        stemZh: '因為被上司命令了，不得不做。',
        options: [
            { text: 'ざるを得{え}ない', reason: '正確！「ざるを得ない」表示「不得不…」。' },
            { text: 'ずにはいられない', reason: '「ずにはいられない」表示「忍不住…」，語意不同。' },
            { text: 'ないではいられない', reason: '「ないではいられない」表示「忍不住…」，語意不同。' },
            { text: 'なければならない', reason: '「なければならない」表示「必須…」，但不含「不情願」的語感。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ざるを得ない」表示不得已',
            analysis: '「ない形（去い）＋ざるを得ない」表示雖然不想做但因外在因素不得不做。「する」→「せざるを得ない」。',
            comparisons: ['ざるを得ない：不得不…（不情願）', 'なければならない：必須…（義務）'],
            commonMistakes: ['○ やらざるを得ない / × やらないざるを得ない → 去「ない」的「い」加「ざるを得ない」'],
        },
    },
    {
        id: 'g_n2_059', category: 'grammar', level: 'N2', tags: ['obligation', 'reluctant'],
        stem: '予算{よさん}の都合{つごう}で、計画{けいかく}を変更{へんこう}せ___。',
        stemZh: '由於預算的原因，不得不變更計畫。',
        options: [
            { text: 'ざるを得{え}ない', reason: '正確！「する」的「ざるを得ない」形式是「せざるを得ない」。' },
            { text: 'ずにはいられない', reason: '「ずにはいられない」表示「忍不住…」，語意不同。' },
            { text: 'ないわけにはいかない', reason: '「ないわけにはいかない」表示「不能不…」，語感不同。' },
            { text: 'なくてはならない', reason: '「なくてはならない」表示「必須…」，不含「不情願」語感。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「する」→「せざるを得ない」',
            analysis: '「する」的「ざるを得ない」形式是特殊的：する→せざるを得ない。這是N2常考的變化。',
            comparisons: ['変更せざるを得ない：不得不變更', '変更しなければならない：必須變更'],
            commonMistakes: ['○ せざるを得ない / × しざるを得ない → 「する」特殊變化為「せ」'],
        },
    },
    // ━━━ ずにはいられない (cannot help but) ━━━
    {
        id: 'g_n2_060', category: 'grammar', level: 'N2', tags: ['emotion', 'irresistible'],
        stem: 'あの映画{えいが}を見{み}ると、泣{な}か___。',
        stemZh: '看那部電影的話，忍不住會哭。',
        options: [
            { text: 'ずにはいられない', reason: '正確！「ずにはいられない」表示「忍不住…」。' },
            { text: 'ざるを得ない', reason: '「ざるを得ない」表示「不得不…」，語感不同。' },
            { text: 'ないではおかない', reason: '「ないではおかない」表示「一定會…」，語感不同。' },
            { text: 'ずにすむ', reason: '「ずにすむ」表示「不用…就行」，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ずにはいられない」表示無法抑制',
            analysis: '「ない形（去い）＋ずにはいられない」表示感情或衝動無法抑制。',
            comparisons: ['ずにはいられない：忍不住…（情感）', 'ないではいられない：忍不住…（同義，較口語）'],
            commonMistakes: ['○ 泣かずにはいられない / × 泣かないずにはいられない → 去「ない」加「ず」'],
        },
    },
    // ━━━ ものだ (should / how / used to) ━━━
    {
        id: 'g_n2_061', category: 'grammar', level: 'N2', tags: ['advice', 'nature'],
        stem: '人{ひと}の話{はなし}はよく聞{き}く___だ。',
        stemZh: '應該好好聽別人說的話。',
        options: [
            { text: 'もの', reason: '正確！「ものだ」表示忠告/常理「應該…」。' },
            { text: 'こと', reason: '「ことだ」也可表忠告，但語感不同。' },
            { text: 'わけ', reason: '「わけだ」表示「難怪…」，語意不合。' },
            { text: 'はず', reason: '「はずだ」表示「應該…（推測）」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものだ」表示忠告/常理',
            analysis: '「ものだ」用於表達社會常理或對他人的忠告，意為「應該…」「本來就是…」。',
            comparisons: ['ものだ：應該…（常理/忠告）', 'ことだ：應該…（個人建議）'],
            commonMistakes: ['○ 聞くものだ / × 聞いたものだ → 表忠告用辭書形'],
        },
    },
    {
        id: 'g_n2_062', category: 'grammar', level: 'N2', tags: ['nostalgia'],
        stem: '子供{こども}の頃{ころ}は、よくこの公園{こうえん}で遊{あそ}んだ___だ。',
        stemZh: '小時候，常常在這個公園玩耍呢。',
        options: [
            { text: 'もの', reason: '正確！「ものだ」接た形表示懷念過去「曾經…」。' },
            { text: 'こと', reason: '「ことだ」不用於懷念過去。' },
            { text: 'わけ', reason: '「わけだ」表示「難怪…」，語意不合。' },
            { text: 'はず', reason: '「はずだ」表示推測，不用於懷念。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものだ」表示懷念',
            analysis: '「た形＋ものだ」用於回憶過去，帶有懷念的語氣。',
            comparisons: ['遊んだものだ：曾經常常玩呢（懷念）', '遊ぶものだ：應該玩（忠告）'],
            commonMistakes: ['○ 遊んだものだ（懷念）/ ○ 遊ぶものだ（忠告）→ 時態不同意思不同'],
        },
    },
    // ━━━ ものだから (because - excuse) ━━━
    {
        id: 'g_n2_063', category: 'grammar', level: 'N2', tags: ['reason', 'excuse'],
        stem: '電車{でんしゃ}が遅{おく}れた___、会議{かいぎ}に間{ま}に合{あ}わなかった。',
        stemZh: '因為電車誤點了，所以沒趕上會議。',
        options: [
            { text: 'ものだから', reason: '正確！「ものだから」表示辯解性的理由「因為…（所以才…）」。' },
            { text: 'ものの', reason: '「ものの」表示「雖然…但是…」，語意不合。' },
            { text: 'ものなら', reason: '「ものなら」表示「如果能…的話」，語意不合。' },
            { text: 'ものか', reason: '「ものか」表示「怎麼可能…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものだから」表示辯解理由',
            analysis: '「ものだから」用於說明不可抗力的原因，帶有辯解的語氣。',
            comparisons: ['ものだから：因為…（辯解）', 'から：因為…（一般）', 'もので：因為…（較口語）'],
            commonMistakes: ['○ 遅れたものだから / × 遅れるものだから → 已發生的事用た形'],
        },
    },
    // ━━━ ものではない (should not) ━━━
    {
        id: 'g_n2_064', category: 'grammar', level: 'N2', tags: ['prohibition', 'advice'],
        stem: '人{ひと}の悪口{わるくち}を言{い}う___。',
        stemZh: '不應該說別人的壞話。',
        options: [
            { text: 'ものではない', reason: '正確！「ものではない」表示「不應該…」。' },
            { text: 'ものだ', reason: '「ものだ」表示「應該…」，語意相反。' },
            { text: 'ものがある', reason: '「ものがある」表示「確實有…之處」，語意不合。' },
            { text: 'ものか', reason: '「ものか」表示「怎麼會…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものではない」表示不應該',
            analysis: '「ものではない」用於表達社會道德上「不應該做…」的忠告。',
            comparisons: ['ものではない：不應該…（道德忠告）', 'てはいけない：不可以…（禁止）'],
            commonMistakes: ['○ 言うものではない / × 言ったものではない → 表忠告用辭書形'],
        },
    },
    // ━━━ ものなら (if possible) ━━━
    {
        id: 'g_n2_065', category: 'grammar', level: 'N2', tags: ['hypothetical', 'wish'],
        stem: 'できる___、もう一度{いちど}やり直{なお}したい。',
        stemZh: '如果可以的話，想重新再來一次。',
        options: [
            { text: 'ものなら', reason: '正確！「ものなら」表示「如果能…的話（實際很難）」。' },
            { text: 'ものの', reason: '「ものの」表示「雖然…」，語意不合。' },
            { text: 'ものだから', reason: '「ものだから」表示「因為…」，語意不合。' },
            { text: 'ものか', reason: '「ものか」表示「怎麼會…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものなら」表示難以實現的假設',
            analysis: '「可能形＋ものなら」表示「如果能…的話」，暗示實際上很難實現。',
            comparisons: ['できるものなら：如果能的話（困難）', 'できれば：如果可以的話（一般）'],
            commonMistakes: ['○ できるものなら / × できたものなら → 用可能形接「ものなら」'],
        },
    },
    // ━━━ ことだ (should / ought to) ━━━
    {
        id: 'g_n2_066', category: 'grammar', level: 'N2', tags: ['advice'],
        stem: '試験{しけん}に合格{ごうかく}したければ、毎日{まいにち}復習{ふくしゅう}する___。',
        stemZh: '如果想通過考試，就應該每天複習。',
        options: [
            { text: 'ことだ', reason: '正確！「ことだ」表示個人建議「應該…」。' },
            { text: 'ことに', reason: '「ことに」表示「令人…的是」，語意不合。' },
            { text: 'ことか', reason: '「ことか」表示感嘆「多麼…啊」，語意不合。' },
            { text: 'ことから', reason: '「ことから」表示「從…來看」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことだ」表示建議',
            analysis: '「動詞辭書形/ない形＋ことだ」用於給出個人建議，語氣比「ものだ」個人化。',
            comparisons: ['ことだ：應該…（個人建議）', 'ものだ：應該…（社會常理）'],
            commonMistakes: ['○ 復習することだ / × 復習したことだ → 表建議用辭書形'],
        },
    },
    // ━━━ ことだから (because it is - character) ━━━
    {
        id: 'g_n2_067', category: 'grammar', level: 'N2', tags: ['reason', 'character'],
        stem: '真面目{まじめ}な田中{たなか}さんの___、きっと時間{じかん}通{どお}りに来{く}るだろう。',
        stemZh: '因為是認真的田中，一定會準時來吧。',
        options: [
            { text: 'ことだから', reason: '正確！「ことだから」表示「因為是…（的性格）」。' },
            { text: 'ことだ', reason: '「ことだ」表示忠告「應該…」，語意不合。' },
            { text: 'ことから', reason: '「ことから」表示命名由來，語意不合。' },
            { text: 'ことなく', reason: '「ことなく」表示「不…而…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことだから」基於性格推測',
            analysis: '「人＋のことだから」表示基於某人的性格或習慣來推測結果。',
            comparisons: ['ことだから：因為是…（性格推測）', 'だから：因為…（一般原因）'],
            commonMistakes: ['○ 田中さんのことだから / × 田中さんことだから → 需要「の」連接'],
        },
    },
    // ━━━ ことなく (without doing) ━━━
    {
        id: 'g_n2_068', category: 'grammar', level: 'N2', tags: ['without', 'formal'],
        stem: '彼{かれ}は一日{いちにち}も休{やす}む___、働{はたら}き続{つづ}けた。',
        stemZh: '他一天也不休息地持續工作。',
        options: [
            { text: 'ことなく', reason: '正確！「ことなく」表示「不…而…」，書面語。' },
            { text: 'ことから', reason: '「ことから」表示「從…來看」，語意不合。' },
            { text: 'ことだから', reason: '「ことだから」表示「因為是…」，語意不合。' },
            { text: 'ことに', reason: '「ことに」表示「令人…的是」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことなく」表示不做某事',
            analysis: '「動詞辭書形＋ことなく」表示「不做…而做…」，是「ないで」的書面表達。',
            comparisons: ['ことなく：不…而…（書面）', 'ないで：不…而…（口語）', 'ずに：不…而…（中間）'],
            commonMistakes: ['○ 休むことなく / × 休まないことなく → 用辭書形接「ことなく」'],
        },
    },
    // ━━━ ことに (to one's ~) ━━━
    {
        id: 'g_n2_069', category: 'grammar', level: 'N2', tags: ['emotion'],
        stem: '驚{おどろ}いた___、彼{かれ}はもう退職{たいしょく}していた。',
        stemZh: '令人驚訝的是，他已經辭職了。',
        options: [
            { text: 'ことに', reason: '正確！「感情形容詞＋ことに」表示「令人…的是」。' },
            { text: 'ことから', reason: '「ことから」表示「從…來看」，語意不合。' },
            { text: 'ことだ', reason: '「ことだ」表示建議，語意不合。' },
            { text: 'ことか', reason: '「ことか」表示感嘆，語法不合此處。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことに」表示感嘆前置',
            analysis: '「感情表現＋ことに」用於句首，表示「令人…的是」，後面接令人意外的內容。',
            comparisons: ['驚いたことに：令人驚訝的是…', '嬉しいことに：令人高興的是…'],
            commonMistakes: ['○ 驚いたことに / × 驚くことに → 表示已知的感受用た形'],
        },
    },
    // ━━━ わけにはいかない (cannot) ━━━
    {
        id: 'g_n2_070', category: 'grammar', level: 'N2', tags: ['cannot', 'social'],
        stem: '明日{あした}は大事{だいじ}な試験{しけん}があるので、遊{あそ}ぶ___。',
        stemZh: '明天有重要的考試，所以不能去玩。',
        options: [
            { text: 'わけにはいかない', reason: '正確！「わけにはいかない」表示因社會因素「不能…」。' },
            { text: 'わけがない', reason: '「わけがない」表示「不可能…」，語意不同。' },
            { text: 'わけではない', reason: '「わけではない」表示「並非…」，語意不同。' },
            { text: 'わけだ', reason: '「わけだ」表示「難怪…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わけにはいかない」表示社會性不能',
            analysis: '「わけにはいかない」表示因為道義、責任或社會因素而不能做某事。',
            comparisons: ['わけにはいかない：不能…（社會/道義）', 'ことができない：做不到…（能力）'],
            commonMistakes: ['○ 遊ぶわけにはいかない / × 遊ばないわけにはいかない → 否定形表示「不能不做」'],
        },
    },
    // ━━━ に基づいて (based on) ━━━
    {
        id: 'g_n2_071', category: 'grammar', level: 'N2', tags: ['formal', 'basis'],
        stem: '法律{ほうりつ}___、この件{けん}を処理{しょり}する。',
        stemZh: '根據法律來處理這件事。',
        options: [
            { text: 'に基{もと}づいて', reason: '正確！「に基づいて」表示「根據…/基於…」。' },
            { text: 'にもとで', reason: '不存在此語法表現。' },
            { text: 'をもとに', reason: '「をもとに」表示「以…為基礎」，語感稍有不同。' },
            { text: 'について', reason: '「について」表示「關於…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に基づいて」表示正式根據',
            analysis: '「に基づいて」表示基於法律、規則、事實等正式根據來行動。比「をもとに」更正式。',
            comparisons: ['に基づいて：基於…（法律/規則）', 'をもとに：以…為基礎（素材/資料）'],
            commonMistakes: ['○ 法律に基づいて / × 法律を基づいて → 用「に」不用「を」'],
        },
    },
    // ━━━ に応じて (according to) ━━━
    {
        id: 'g_n2_072', category: 'grammar', level: 'N2', tags: ['formal', 'accordance'],
        stem: '経験{けいけん}や能力{のうりょく}___、給料{きゅうりょう}が決{き}まる。',
        stemZh: '薪水根據經驗和能力來決定。',
        options: [
            { text: 'に応{おう}じて', reason: '正確！「に応じて」表示「根據…/與…相應」。' },
            { text: 'に際{さい}して', reason: '「に際して」表示「在…之際」，語意不合。' },
            { text: 'に先立{さきだ}って', reason: '「に先立って」表示「在…之前」，語意不合。' },
            { text: 'に伴{ともな}って', reason: '「に伴って」表示「伴隨著…」，語意不完全相同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に応じて」表示對應/根據',
            analysis: '「に応じて」表示根據某個條件來調整或對應，強調靈活調整。',
            comparisons: ['に応じて：根據…（靈活對應）', 'によって：取決於…（一般）'],
            commonMistakes: ['○ 能力に応じて / × 能力を応じて → 用「に」不用「を」'],
        },
    },
    // ━━━ に伴って (along with) ━━━
    {
        id: 'g_n2_073', category: 'grammar', level: 'N2', tags: ['formal', 'accompaniment'],
        stem: '経済{けいざい}の発展{はってん}___、環境{かんきょう}問題{もんだい}も深刻{しんこく}になった。',
        stemZh: '隨著經濟的發展，環境問題也變嚴重了。',
        options: [
            { text: 'に伴{ともな}って', reason: '正確！「に伴って」表示「隨著…」。' },
            { text: 'に応{おう}じて', reason: '「に応じて」表示「根據…」，語感不同。' },
            { text: 'に際{さい}して', reason: '「に際して」表示「在…之際」，語意不合。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對於…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に伴って」表示伴隨變化',
            analysis: '「に伴って」表示A的變化伴隨著B的變化一起發生。',
            comparisons: ['に伴って：隨著…（伴隨變化）', 'にしたがって：隨著…（遵循變化）', 'につれて：隨著…（同步變化）'],
            commonMistakes: ['○ 発展に伴って / × 発展を伴って → 表示「隨著」用「に」'],
        },
    },
    // ━━━ に加えて (in addition to) ━━━
    {
        id: 'g_n2_074', category: 'grammar', level: 'N2', tags: ['addition', 'formal'],
        stem: '英語{えいご}___、中国語{ちゅうごくご}も話{はな}せるようになりたい。',
        stemZh: '除了英語之外，也想學會中文。',
        options: [
            { text: 'に加{くわ}えて', reason: '正確！「に加えて」表示「加上…/除了…還…」。' },
            { text: 'に限{かぎ}らず', reason: '「に限らず」表示「不僅限於…」，語感稍有不同。' },
            { text: 'に関{かん}して', reason: '「に関して」表示「關於…」，語意不合。' },
            { text: 'に反{はん}して', reason: '「に反して」表示「與…相反」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に加えて」表示累加',
            analysis: '「に加えて」表示在已有的事物上再加上新的事物，常用於正式場合。',
            comparisons: ['に加えて：加上…（正式）', 'のほかに：除了…之外（一般）'],
            commonMistakes: ['○ 英語に加えて / × 英語を加えて → 表示累加用「に」'],
        },
    },
    // ━━━ に応えて (in response to) ━━━
    {
        id: 'g_n2_075', category: 'grammar', level: 'N2', tags: ['formal', 'response'],
        stem: '市民{しみん}の要望{ようぼう}___、公園{こうえん}が整備{せいび}された。',
        stemZh: '回應市民的要求，公園被整修了。',
        options: [
            { text: 'に応{こた}えて', reason: '正確！「に応えて」表示「回應…/應…的要求」。' },
            { text: 'に応{おう}じて', reason: '「に応じて」表示「根據…」，語意稍有不同。' },
            { text: 'について', reason: '「について」表示「關於…」，語意不合。' },
            { text: 'にかけて', reason: '「にかけて」表示「到…為止」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に応えて」表示回應需求',
            analysis: '「に応えて」表示為了回應某人的期待、要求或需求而採取行動。',
            comparisons: ['に応えて：回應…（期待/要求）', 'に応じて：根據…（條件/狀況）'],
            commonMistakes: ['○ 要望に応えて / × 要望を応えて → 用「に」不用「を」'],
        },
    },
    // ━━━ をめぐって (concerning / around) ━━━
    {
        id: 'g_n2_076', category: 'grammar', level: 'N2', tags: ['formal', 'dispute'],
        stem: '遺産{いさん}の分配{ぶんぱい}___、兄弟{きょうだい}の間{あいだ}で争{あらそ}いが起{お}きた。',
        stemZh: '圍繞遺產分配，兄弟之間發生了爭執。',
        options: [
            { text: 'をめぐって', reason: '正確！「をめぐって」表示「圍繞著…（問題/爭議）」。' },
            { text: 'をもとに', reason: '「をもとに」表示「以…為基礎」，語意不合。' },
            { text: 'を通{つう}じて', reason: '「を通じて」表示「通過…」，語意不合。' },
            { text: 'を問{と}わず', reason: '「を問わず」表示「不論…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をめぐって」表示爭議焦點',
            analysis: '「をめぐって」表示圍繞某個議題進行討論、爭論或對立。',
            comparisons: ['をめぐって：圍繞…（爭論/討論）', 'について：關於…（中性說明）'],
            commonMistakes: ['○ 遺産をめぐって / × 遺産にめぐって → 用「を」不用「に」'],
        },
    },
    // ━━━ はもとより (needless to say) ━━━
    {
        id: 'g_n2_077', category: 'grammar', level: 'N2', tags: ['addition', 'formal'],
        stem: '日本語{にほんご}___、英語{えいご}も堪能{たんのう}だ。',
        stemZh: '日語不用說，英語也很流利。',
        options: [
            { text: 'はもとより', reason: '正確！「はもとより」表示「…不用說/更不必說」。' },
            { text: 'はもちろん', reason: '「はもちろん」也表示「…當然」，但「はもとより」更書面。' },
            { text: 'はおろか', reason: '「はおろか」表示「不用說…連…都」，語感更強。' },
            { text: 'はともかく', reason: '「はともかく」表示「姑且不論…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はもとより」表示不言而喻',
            analysis: '「はもとより」是「はもちろん」的書面表現，表示前者不用說，後者也是如此。',
            comparisons: ['はもとより：不用說…（書面）', 'はもちろん：當然…也…（一般）'],
            commonMistakes: ['○ 日本語はもとより英語も / × 日本語はもとより英語が → 後面用「も」呼應'],
        },
    },
    // ━━━ に限らず (not limited to) ━━━
    {
        id: 'g_n2_078', category: 'grammar', level: 'N2', tags: ['formal', 'scope'],
        stem: 'この問題{もんだい}は日本{にほん}___、世界{せかい}各国{かっこく}で起{お}きている。',
        stemZh: '這個問題不僅限於日本，在世界各國都發生著。',
        options: [
            { text: 'に限{かぎ}らず', reason: '正確！「に限らず」表示「不僅限於…」。' },
            { text: 'に限{かぎ}って', reason: '「に限って」表示「偏偏…」，語意不合。' },
            { text: 'に限{かぎ}り', reason: '「に限り」表示「僅限於…」，語意相反。' },
            { text: 'に限{かぎ}る', reason: '「に限る」表示「最好是…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に限らず」擴大範圍',
            analysis: '「に限らず」表示不僅限於某個範圍，還包括更廣的範圍。',
            comparisons: ['に限らず：不僅限於…', 'だけでなく：不只是…（口語）'],
            commonMistakes: ['○ 日本に限らず / × 日本を限らず → 用「に」不用「を」'],
        },
    },
    // ━━━ のみならず (not only) ━━━
    {
        id: 'g_n2_079', category: 'grammar', level: 'N2', tags: ['addition', 'formal'],
        stem: 'この製品{せいひん}は国内{こくない}___、海外{かいがい}でも人気{にんき}がある。',
        stemZh: '這個產品不僅在國內，在海外也很受歡迎。',
        options: [
            { text: 'のみならず', reason: '正確！「のみならず」表示「不僅…還…」，書面語。' },
            { text: 'のみか', reason: '不存在此語法表現。' },
            { text: 'のみに', reason: '「のみに」表示「僅對…」，語意不合。' },
            { text: 'のみで', reason: '「のみで」表示「只用…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「のみならず」書面累加',
            analysis: '「のみならず」是最正式的「不僅…」表現，比「ばかりか」「だけでなく」更書面。',
            comparisons: ['のみならず：不僅…（最書面）', 'ばかりか：不僅…（書面）', 'だけでなく：不僅…（口語）'],
            commonMistakes: ['○ 国内のみならず海外でも / × 国内のみならず海外でが → 後面用「も」或「でも」'],
        },
    },
    // ━━━ に関わらず (regardless of) ━━━
    {
        id: 'g_n2_080', category: 'grammar', level: 'N2', tags: ['formal', 'regardless'],
        stem: '天候{てんこう}___、イベントは予定{よてい}通{どお}り開催{かいさい}します。',
        stemZh: '不管天氣如何，活動將按預定舉行。',
        options: [
            { text: 'に関{かか}わらず', reason: '正確！「に関わらず」表示「不管…」。' },
            { text: 'に関{かん}して', reason: '「に関して」表示「關於…」，語意不合。' },
            { text: 'に関{かか}わる', reason: '「に関わる」表示「關係到…」，語法不合。' },
            { text: 'に限{かぎ}らず', reason: '「に限らず」表示「不僅限於…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に関わらず」表示不受影響',
            analysis: '「に関わらず」表示不受某個條件的影響，結果或決定不會改變。',
            comparisons: ['に関わらず：不管…（不受影響）', 'を問わず：不論…（不區分）'],
            commonMistakes: ['○ 天候に関わらず / × 天候を関わらず → 用「に」不用「を」'],
        },
    },
    // ━━━ ばかりに (just because - negative result) ━━━
    {
        id: 'g_n2_081', category: 'grammar', level: 'N2', tags: ['cause', 'regret'],
        stem: 'ちょっと油断{ゆだん}した___、事故{じこ}を起{お}こしてしまった。',
        stemZh: '只因一時疏忽，就造成了事故。',
        options: [
            { text: 'ばかりに', reason: '正確！「ばかりに」表示「只因為…（導致壞結果）」。' },
            { text: 'ばかりか', reason: '「ばかりか」表示「不僅…還…」，語意不合。' },
            { text: 'ばかりで', reason: '「ばかりで」表示「只是…」，語意不合。' },
            { text: 'ばかりだ', reason: '「ばかりだ」表示「一直…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばかりに」帶有後悔語氣',
            analysis: '「ばかりに」表示只因為某個小原因就導致了不好的結果，帶有後悔和遺憾。',
            comparisons: ['ばかりに：只因為…（後悔）', 'から：因為…（一般原因）'],
            commonMistakes: ['○ 油断したばかりに事故を起こした / × 油断したばかりに成功した → 後句為壞結果'],
        },
    },
    // ━━━ からには (since / now that) ━━━
    {
        id: 'g_n2_082', category: 'grammar', level: 'N2', tags: ['reason', 'determination'],
        stem: '留学{りゅうがく}する___、しっかり勉強{べんきょう}するつもりだ。',
        stemZh: '既然要留學，就打算好好學習。',
        options: [
            { text: 'からには', reason: '正確！「からには」表示「既然…就…」。' },
            { text: 'からして', reason: '「からして」表示「從…來看」，語意不合。' },
            { text: 'からこそ', reason: '「からこそ」表示「正因為…」，語意不同。' },
            { text: 'からすると', reason: '「からすると」表示「從…來看」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「からには」表示決心',
            analysis: '「からには」表示既然做了某個決定或處於某種狀況，就要有相應的行動。後面常接決心或義務。',
            comparisons: ['からには：既然…就…（決心）', '以上は：既然…就…（語感相同）'],
            commonMistakes: ['○ 留学するからには / × 留学したからには → 表示未來決定用辭書形'],
        },
    },
    // ━━━ からして (judging from) ━━━
    {
        id: 'g_n2_083', category: 'grammar', level: 'N2', tags: ['judgement'],
        stem: '彼{かれ}は態度{たいど}___、信用{しんよう}できない。',
        stemZh: '光看他的態度，就不值得信任。',
        options: [
            { text: 'からして', reason: '正確！「からして」表示「從…來看就已經…」。' },
            { text: 'からこそ', reason: '「からこそ」表示「正因為…」，語意不合。' },
            { text: 'からには', reason: '「からには」表示「既然…」，語意不合。' },
            { text: 'からすると', reason: '「からすると」表示「從…來看」，語意相近但語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「からして」表示從外表判斷',
            analysis: '「からして」表示單從某一點來看就已經…，含有「連…都已經這樣了」的語氣。',
            comparisons: ['からして：光從…來看（就已經…）', 'からすると：從…來看（推測）'],
            commonMistakes: ['○ 態度からして / × 態度がからして → 名詞直接接「からして」'],
        },
    },
    // ━━━ に越したことはない (best to / nothing better than) ━━━
    {
        id: 'g_n2_084', category: 'grammar', level: 'N2', tags: ['advice', 'ideal'],
        stem: '健康{けんこう}のためには、早{はや}く寝{ね}る___。',
        stemZh: '為了健康，早點睡是最好的。',
        options: [
            { text: 'に越{こ}したことはない', reason: '正確！「に越したことはない」表示「…是最好不過的」。' },
            { text: 'にかけては', reason: '「にかけては」表示「在…方面」，語意不合。' },
            { text: 'に限{かぎ}る', reason: '「に限る」也可表示「最好是…」，語感略有不同。' },
            { text: 'にほかならない', reason: '「にほかならない」表示「正是…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に越したことはない」表示最佳選擇',
            analysis: '「に越したことはない」表示某事做了是最好的，雖然不做也可以。含有「能做到就最好」的語感。',
            comparisons: ['に越したことはない：…是最好的', 'に限る：…是最好的（更口語）'],
            commonMistakes: ['○ 早く寝るに越したことはない / × 早く寝たに越したことはない → 用辭書形'],
        },
    },
    // ━━━ にほかならない (nothing other than) ━━━
    {
        id: 'g_n2_085', category: 'grammar', level: 'N2', tags: ['assertion', 'formal'],
        stem: '今回{こんかい}の成功{せいこう}は、チーム全員{ぜんいん}の努力{どりょく}の結果{けっか}___。',
        stemZh: '這次的成功，正是全隊努力的結果。',
        options: [
            { text: 'にほかならない', reason: '正確！「にほかならない」表示「正是…/不外乎就是…」。' },
            { text: 'に過{す}ぎない', reason: '「に過ぎない」表示「只不過是…」，語意相反（低估）。' },
            { text: 'に相違{そうい}ない', reason: '「に相違ない」表示「無疑是…」，語感不同。' },
            { text: 'に決{き}まっている', reason: '「に決まっている」表示「一定是…」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にほかならない」表示斷言',
            analysis: '「にほかならない」強烈斷言某事正是如此，強調唯一的原因或本質。',
            comparisons: ['にほかならない：正是…（強調本質）', 'に過ぎない：只不過是…（低估）'],
            commonMistakes: ['○ 努力の結果にほかならない / × 努力の結果でほかならない → 用「に」不用「で」'],
        },
    },
    // ━━━ に過ぎない (merely / nothing more than) ━━━
    {
        id: 'g_n2_086', category: 'grammar', level: 'N2', tags: ['limitation', 'formal'],
        stem: 'これは私{わたし}の個人的{こじんてき}な意見{いけん}___。',
        stemZh: '這只不過是我個人的意見。',
        options: [
            { text: 'に過{す}ぎない', reason: '正確！「に過ぎない」表示「只不過是…」。' },
            { text: 'にほかならない', reason: '「にほかならない」表示「正是…」，語意相反。' },
            { text: 'に相違{そうい}ない', reason: '「に相違ない」表示「無疑是…」，語意不合。' },
            { text: 'に限{かぎ}らない', reason: '「に限らない」表示「不限於…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に過ぎない」表示自謙/低估',
            analysis: '「に過ぎない」表示不超過某個程度，含有「只不過是…」的自謙或客觀描述。',
            comparisons: ['に過ぎない：只不過是…', 'にほかならない：正是…（強調）'],
            commonMistakes: ['○ 意見に過ぎない / × 意見を過ぎない → 用「に」不用「を」'],
        },
    },
    // ━━━ に相違ない (certainly / no doubt) ━━━
    {
        id: 'g_n2_087', category: 'grammar', level: 'N2', tags: ['certainty', 'formal'],
        stem: 'この手紙{てがみ}の筆跡{ひっせき}は、彼{かれ}のもの___。',
        stemZh: '這封信的筆跡，一定是他的。',
        options: [
            { text: 'に相違{そうい}ない', reason: '正確！「に相違ない」表示「一定是…/無疑是…」。' },
            { text: 'に違{ちが}いない', reason: '「に違いない」也表示「一定是…」，但「に相違ない」更書面。' },
            { text: 'にほかならない', reason: '「にほかならない」表示「正是…」，語感不同。' },
            { text: 'に過{す}ぎない', reason: '「に過ぎない」表示「只不過是…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に相違ない」表示確信',
            analysis: '「に相違ない」是「に違いない」的書面正式表現，表示對某事有高度確信。',
            comparisons: ['に相違ない：無疑是…（書面）', 'に違いない：一定是…（一般）'],
            commonMistakes: ['○ 彼のものに相違ない / × 彼のものが相違ない → 用「に」'],
        },
    },
    // ━━━ に決まっている (surely / must be) ━━━
    {
        id: 'g_n2_088', category: 'grammar', level: 'N2', tags: ['certainty', 'colloquial'],
        stem: 'あんなに練習{れんしゅう}したんだから、うまくいく___。',
        stemZh: '都練習了那麼多，一定會順利的。',
        options: [
            { text: 'に決{き}まっている', reason: '正確！「に決まっている」表示主觀確信「一定…」。' },
            { text: 'に違{ちが}いない', reason: '「に違いない」也表示「一定…」，但「に決まっている」更口語。' },
            { text: 'に過{す}ぎない', reason: '「に過ぎない」表示「只不過是…」，語意不合。' },
            { text: 'に限{かぎ}る', reason: '「に限る」表示「最好是…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に決まっている」表示強烈確信',
            analysis: '「に決まっている」表示說話者非常確定某件事，帶有強烈的主觀斷定。',
            comparisons: ['に決まっている：一定…（主觀/口語）', 'に違いない：一定…（客觀/書面）'],
            commonMistakes: ['○ うまくいくに決まっている / × うまくいったに決まっている → 未來的事用辭書形'],
        },
    },
    // ━━━ まい (will not / probably not) ━━━
    {
        id: 'g_n2_089', category: 'grammar', level: 'N2', tags: ['negation', 'determination'],
        stem: '二度{にど}とあんな失敗{しっぱい}はする___と心{こころ}に誓{ちか}った。',
        stemZh: '下定決心再也不犯那樣的錯。',
        options: [
            { text: 'まい', reason: '正確！「まい」表示「絕不再…」的決心。' },
            { text: 'ない', reason: '「ない」是普通否定，缺少決心的語氣。' },
            { text: 'ず', reason: '「ず」是書面否定，但不表決心。' },
            { text: 'ぬ', reason: '「ぬ」是古語否定，不表決心。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「まい」表示否定決心',
            analysis: '「動詞辭書形＋まい」表示「絕不再…」的強烈決心。也可表推量「大概不會…」。',
            comparisons: ['するまい：絕不再做（決心）', '行くまい：不會去吧（推量）'],
            commonMistakes: ['○ するまい / × しまい → 五段動詞用辭書形接「まい」'],
        },
    },
    // ━━━ ようか〜まいか (whether to ~ or not) ━━━
    {
        id: 'g_n2_090', category: 'grammar', level: 'N2', tags: ['hesitation'],
        stem: '転職{てんしょく}し___し___、迷{まよ}っている。',
        stemZh: '在猶豫要不要轉職。',
        options: [
            { text: 'ようか…まいか', reason: '正確！「ようか〜まいか」表示猶豫不決。' },
            { text: 'ようか…ないか', reason: '語法不正確，應用「まいか」。' },
            { text: 'たいか…たくないか', reason: '語法上可以但不是N2文法重點。' },
            { text: 'ようか…ようか', reason: '重複使用「ようか」不表示猶豫。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようか〜まいか」表示猶豫',
            analysis: '「ようか〜まいか」表示在做與不做之間猶豫不決。',
            comparisons: ['しようかしまいか：要不要做（猶豫）', 'するかしないか：做不做（選擇）'],
            commonMistakes: ['○ しようかしまいか / × するようかするまいか → 意向形接「か…まいか」'],
        },
    },
    // ━━━ ないではいられない (cannot help but) ━━━
    {
        id: 'g_n2_091', category: 'grammar', level: 'N2', tags: ['emotion', 'irresistible'],
        stem: 'そのニュースを聞{き}いて、心配{しんぱい}し___。',
        stemZh: '聽到那個消息，不禁感到擔心。',
        options: [
            { text: 'ないではいられない', reason: '正確！「ないではいられない」表示「忍不住…」。' },
            { text: 'ないわけにはいかない', reason: '「ないわけにはいかない」表示「不能不…」，語感不同。' },
            { text: 'ないことはない', reason: '「ないことはない」表示「不是不…」，語意不同。' },
            { text: 'なくはない', reason: '「なくはない」表示「也不是不…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないではいられない」表示情感控制不住',
            analysis: '「ない形＋ではいられない」表示無法控制自己的情感或衝動。與「ずにはいられない」同義。',
            comparisons: ['ないではいられない：忍不住…（較口語）', 'ずにはいられない：忍不住…（較書面）'],
            commonMistakes: ['○ 心配しないではいられない / × 心配しないではいられる → 不能去掉「ない」'],
        },
    },
    // ━━━ に限って (particularly / of all things) ━━━
    {
        id: 'g_n2_092', category: 'grammar', level: 'N2', tags: ['irony', 'exception'],
        stem: '傘{かさ}を持{も}っていない日{ひ}___、雨{あめ}が降{ふ}る。',
        stemZh: '偏偏在沒帶傘的日子，就下雨。',
        options: [
            { text: 'に限{かぎ}って', reason: '正確！「に限って」表示「偏偏…/唯獨…」。' },
            { text: 'に限{かぎ}らず', reason: '「に限らず」表示「不限於…」，語意相反。' },
            { text: 'に限{かぎ}り', reason: '「に限り」表示「僅限於…」，語意不同。' },
            { text: 'に限{かぎ}る', reason: '「に限る」表示「最好是…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に限って」表示不巧/偏偏',
            analysis: '「に限って」表示偏偏在那種情況下或偏偏是那個人才會…，帶有不巧或不滿的語氣。',
            comparisons: ['に限って：偏偏…（不巧/不滿）', 'に限り：僅限…（限定範圍）'],
            commonMistakes: ['○ 傘がない日に限って / × 傘がない日に限り → 表「偏偏」用「に限って」'],
        },
    },
    // ━━━ に限る (nothing beats / best to) ━━━
    {
        id: 'g_n2_093', category: 'grammar', level: 'N2', tags: ['recommendation'],
        stem: '夏{なつ}はやっぱりビール___。',
        stemZh: '夏天果然還是啤酒最好。',
        options: [
            { text: 'に限{かぎ}る', reason: '正確！「に限る」表示「…是最好的」。' },
            { text: 'に限{かぎ}って', reason: '「に限って」表示「偏偏…」，語意不合。' },
            { text: 'に限{かぎ}らず', reason: '「に限らず」表示「不僅限於…」，語意不合。' },
            { text: 'に越{こ}したことはない', reason: '「に越したことはない」也表示「最好是…」，但語法不合此處。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に限る」表示最佳推薦',
            analysis: '「に限る」表示在說話者看來某事物是最好的，常用於推薦。',
            comparisons: ['に限る：…是最好的（推薦）', 'に越したことはない：…是最好的（理想狀態）'],
            commonMistakes: ['○ ビールに限る / × ビールが限る → 用「に」'],
        },
    },
    // ━━━ に関わる (related to / affects) ━━━
    {
        id: 'g_n2_094', category: 'grammar', level: 'N2', tags: ['formal', 'relevance'],
        stem: 'これは命{いのち}___問題{もんだい}だ。',
        stemZh: '這是關係到生命的問題。',
        options: [
            { text: 'に関{かか}わる', reason: '正確！「に関わる」表示「關係到…/涉及…」。' },
            { text: 'に関{かん}する', reason: '「に関する」表示「關於…的」，語感不同。' },
            { text: 'に関{かか}わらず', reason: '「に関わらず」表示「不管…」，語意不合。' },
            { text: 'に対{たい}する', reason: '「に対する」表示「對…的」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に関わる」表示利害關係',
            analysis: '「に関わる」表示與某個重要事物有直接關係，常用於嚴重的場合。',
            comparisons: ['に関わる：關係到…（利害關係）', 'に関する：關於…（內容關係）'],
            commonMistakes: ['○ 命に関わる / × 命を関わる → 用「に」不用「を」'],
        },
    },
    // ━━━ どころではない (far from / not the time for) ━━━
    {
        id: 'g_n2_095', category: 'grammar', level: 'N2', tags: ['negation', 'situation'],
        stem: '仕事{しごと}が忙{いそが}しくて、旅行{りょこう}___。',
        stemZh: '工作太忙了，哪裡談得上旅行。',
        options: [
            { text: 'どころではない', reason: '正確！「どころではない」表示「哪裡談得上…」。' },
            { text: 'どころか', reason: '「どころか」表示「豈止…」，語法結構不同。' },
            { text: 'ところで', reason: '「ところで」表示話題轉換，語意不合。' },
            { text: 'ところだ', reason: '「ところだ」表示「正要…/剛…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「どころではない」表示顧不上',
            analysis: '「どころではない」表示因某種狀況，完全顧不上做某事。',
            comparisons: ['どころではない：哪裡談得上…', 'どころか：豈止…（甚至更…）'],
            commonMistakes: ['○ 旅行どころではない / × 旅行するどころではない → 名詞直接接「どころではない」'],
        },
    },
    // ━━━ どころか (far from / let alone) ━━━
    {
        id: 'g_n2_096', category: 'grammar', level: 'N2', tags: ['emphasis', 'contrast'],
        stem: '漢字{かんじ}___、ひらがなも読{よ}めない。',
        stemZh: '豈止漢字，連平假名都不會讀。',
        options: [
            { text: 'どころか', reason: '正確！「どころか」表示「豈止…/甚至連…都不…」。' },
            { text: 'どころではない', reason: '「どころではない」表示「顧不上…」，語意不完全相同。' },
            { text: 'ばかりか', reason: '「ばかりか」表示「不僅…還…」，但語感不同。' },
            { text: 'はおろか', reason: '「はおろか」也表示「不用說…連…都」，但更書面。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「どころか」表示完全相反',
            analysis: '「どころか」表示實際情況與預期完全相反或程度更甚，強調出乎意料。',
            comparisons: ['どころか：豈止…（相反/更甚）', 'ばかりか：不僅…還…（同方向累加）'],
            commonMistakes: ['○ 漢字どころかひらがなも / × 漢字どころかひらがなが → 後面用「も」'],
        },
    },
    // ━━━ あげく (in the end - negative) ━━━
    {
        id: 'g_n2_097', category: 'grammar', level: 'N2', tags: ['result', 'negative'],
        stem: '長{なが}い時間{じかん}悩{なや}んだ___、彼{かれ}は会社{かいしゃ}を辞{や}めた。',
        stemZh: '煩惱了很長時間，最後他辭了職。',
        options: [
            { text: 'あげく', reason: '正確！「あげく」表示「經過…最終（壞結果）」。' },
            { text: '末{すえ}に', reason: '「末に」也表示「最後…」，但可用於中性結果。' },
            { text: '結果{けっか}', reason: '「結果」只是「結果」，沒有「經過長期…」的語感。' },
            { text: 'ついに', reason: '「ついに」表示「終於…」，不限於負面。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「あげく」表示不好的最終結果',
            analysis: '「あげく」表示經過長時間的行為或狀態後，最終得到了不好的結果。',
            comparisons: ['あげく：最後…（負面）', '末に：最後…（中性/正面也可）'],
            commonMistakes: ['○ 悩んだあげく辞めた / × 悩んだあげく成功した → 後句通常為負面結果'],
        },
    },
    // ━━━ 末に (after / at the end of) ━━━
    {
        id: 'g_n2_098', category: 'grammar', level: 'N2', tags: ['result'],
        stem: '長{なが}い話{はな}し合{あ}いの___、ようやく結論{けつろん}が出{で}た。',
        stemZh: '經過長時間的討論，終於得出了結論。',
        options: [
            { text: '末{すえ}に', reason: '正確！「末に」表示「經過…之後，最終…」。' },
            { text: 'あげく', reason: '「あげく」常接負面結果，此處為中性。' },
            { text: '結果{けっか}', reason: '「結果」表示結果，但缺乏「經過長期」的語感。' },
            { text: '最後{さいご}に', reason: '「最後に」表示順序上的最後，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「末に」表示經過…之後',
            analysis: '「名詞の末に/動詞た末に」表示經過某個過程後最終達到結果。可用於正面或中性結果。',
            comparisons: ['末に：經過…之後（中性/正面）', 'あげく：經過…最終（負面）'],
            commonMistakes: ['○ 話し合いの末に / × 話し合いの末で → 用「に」不用「で」'],
        },
    },
    // ━━━ かと思ったら (just when I thought) ━━━
    {
        id: 'g_n2_099', category: 'grammar', level: 'N2', tags: ['surprise', 'time'],
        stem: '晴{は}れた___、急{きゅう}に雨{あめ}が降{ふ}り出{だ}した。',
        stemZh: '才剛覺得放晴了，突然就下起雨來了。',
        options: [
            { text: 'かと思{おも}ったら', reason: '正確！「かと思ったら」表示「剛以為…就…」。' },
            { text: 'かと思って', reason: '「かと思って」表示「以為…所以…」，語意不同。' },
            { text: 'と思ったのに', reason: '「と思ったのに」表示「原以為…結果卻…」，語感稍有不同。' },
            { text: 'かのように', reason: '「かのように」表示「彷彿…一樣」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かと思ったら」表示出乎意料的快速變化',
            analysis: '「かと思ったら」表示前一個狀態剛發生就迅速轉變為另一個狀態，帶有驚訝的語氣。',
            comparisons: ['かと思ったら：剛以為…就…（驚訝）', 'たとたんに：剛…就…（瞬間）'],
            commonMistakes: ['○ 晴れたかと思ったら / × 晴れるかと思ったら → 已發生的瞬間用た形'],
        },
    },
    // ━━━ ことにはならない (does not mean that) ━━━
    {
        id: 'g_n2_100', category: 'grammar', level: 'N2', tags: ['negation', 'logic'],
        stem: '謝{あやま}れば済{す}む___。もっと反省{はんせい}すべきだ。',
        stemZh: '道歉了並不代表就能了事。應該更加反省。',
        options: [
            { text: 'ということにはならない', reason: '正確！表示「並不意味著…」。' },
            { text: 'というものではない', reason: '「というものではない」也表示「並不是…」，語感略有不同。' },
            { text: 'というわけではない', reason: '「というわけではない」表示「並非…」，語感稍有不同。' },
            { text: 'ということだ', reason: '「ということだ」表示「也就是說…」，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことにはならない」否定結論',
            analysis: '「ことにはならない」表示某個行為或條件不能導出某個結論，常用於反駁。',
            comparisons: ['ことにはならない：並不意味著…', 'というものではない：不見得…'],
            commonMistakes: ['○ 済むということにはならない / × 済むことはならない → 需要「に」'],
        },
    },
    // ━━━ というものではない (it's not necessarily the case) ━━━
    {
        id: 'g_n2_101', category: 'grammar', level: 'N2', tags: ['negation', 'logic'],
        stem: '高{たか}ければいい___。品質{ひんしつ}も大切{たいせつ}だ。',
        stemZh: '並不是貴就好。品質也很重要。',
        options: [
            { text: 'というものではない', reason: '正確！「というものではない」表示「並不是…/不見得…」。' },
            { text: 'というものだ', reason: '「というものだ」表示「確實是…」，語意相反。' },
            { text: 'ということだ', reason: '「ということだ」表示「也就是說…」，語意不合。' },
            { text: 'ということか', reason: '「ということか」表示「原來是…嗎」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「というものではない」否定一般看法',
            analysis: '「というものではない」用於反駁一般性的看法或常識，表示事情並非如此簡單。',
            comparisons: ['というものではない：並不是…（反駁通論）', 'わけではない：並非…（部分否定）'],
            commonMistakes: ['○ 高ければいいというものではない / × 高いというものではない → 需完整條件句'],
        },
    },
    // ━━━ はおろか (let alone) ━━━
    {
        id: 'g_n2_102', category: 'grammar', level: 'N2', tags: ['emphasis', 'extent'],
        stem: '彼{かれ}は大学{だいがく}___、高校{こうこう}も卒業{そつぎょう}していない。',
        stemZh: '他不用說大學，連高中也沒畢業。',
        options: [
            { text: 'はおろか', reason: '正確！「はおろか」表示「不用說A，連B都…」。' },
            { text: 'はもちろん', reason: '「はもちろん」表示「當然A，B也…」，方向不同。' },
            { text: 'はもとより', reason: '「はもとより」表示「不用說…」，但常接正面。' },
            { text: 'ばかりか', reason: '「ばかりか」表示「不僅…」，語感不完全相同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はおろか」強調程度之低',
            analysis: '「はおろか」表示連更高層次的A都不用說了，就連更基本的B也做不到。含驚訝或嘲諷。',
            comparisons: ['はおろか：不用說A連B都…（程度更低）', 'ばかりか：不僅A而且B（同方向累加）'],
            commonMistakes: ['○ 大学はおろか高校も / × 高校はおろか大学も → A必須是更高層次的'],
        },
    },
    // ━━━ ままに (as ~ dictates / leaving as is) ━━━
    {
        id: 'g_n2_103', category: 'grammar', level: 'N2', tags: ['manner', 'passive'],
        stem: '足{あし}の向{む}く___、散歩{さんぽ}を楽{たの}しんだ。',
        stemZh: '隨著腳步所向，享受散步的樂趣。',
        options: [
            { text: 'ままに', reason: '正確！「ままに」表示「隨著…/任憑…」。' },
            { text: 'ままで', reason: '「ままで」表示「保持…的狀態」，語意不同。' },
            { text: 'まま', reason: '「まま」表示「保持…」，但接續不同。' },
            { text: 'ままの', reason: '「ままの」修飾名詞，語法不合此處。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ままに」表示隨意/任憑',
            analysis: '「動詞辭書形＋ままに」表示順從某種自然的趨勢或意志，不加以控制。',
            comparisons: ['ままに：任憑…（自然趨勢）', 'ままで：保持…的狀態'],
            commonMistakes: ['○ 足の向くままに / × 足の向いたままに → 表自然趨勢用辭書形'],
        },
    },
    // ━━━ もかまわず (without caring about) ━━━
    {
        id: 'g_n2_104', category: 'grammar', level: 'N2', tags: ['disregard'],
        stem: '周{まわ}りの目{め}___、大声{おおごえ}で歌{うた}い始{はじ}めた。',
        stemZh: '不顧周圍的目光，大聲唱起歌來。',
        options: [
            { text: 'もかまわず', reason: '正確！「もかまわず」表示「不顧…/不管…」。' },
            { text: 'もかかわらず', reason: '「にもかかわらず」表示「儘管…」，語感不同。' },
            { text: 'を問{と}わず', reason: '「を問わず」表示「不論…」，語意不同。' },
            { text: 'に関{かか}わらず', reason: '「に関わらず」表示「不管…」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「もかまわず」表示無視他人',
            analysis: '「もかまわず」表示完全不在乎某個應該在意的事情，帶有不顧一切的語氣。',
            comparisons: ['もかまわず：不顧…（主觀無視）', 'にもかかわらず：儘管…（客觀逆接）'],
            commonMistakes: ['○ 周りの目もかまわず / × 周りの目にかまわず → 用「も」不用「に」'],
        },
    },
    // ━━━ くせして / くせに (despite being / even though) ━━━
    {
        id: 'g_n2_105', category: 'grammar', level: 'N2', tags: ['criticism', 'contrast'],
        stem: '自分{じぶん}は何{なに}もしない___、人{ひと}の文句{もんく}ばかり言{い}う。',
        stemZh: '明明自己什麼都不做，卻淨是抱怨別人。',
        options: [
            { text: 'くせに', reason: '正確！「くせに」表示「明明…卻…」，帶有責備語氣。' },
            { text: 'のに', reason: '「のに」也表示逆接，但不如「くせに」帶有責備感。' },
            { text: 'ものの', reason: '「ものの」表示「雖然…但…」，語氣太溫和。' },
            { text: 'からには', reason: '「からには」表示「既然…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「くせに」帶有批評/責備語氣',
            analysis: '「くせに」用於批評某人言行不一致或不符合其身份、能力，帶有蔑視或不滿。',
            comparisons: ['くせに：明明…卻…（責備）', 'のに：雖然…卻…（遺憾）'],
            commonMistakes: ['○ しないくせに / × しないくせ → 「くせに」是固定搭配'],
        },
    },
    // ━━━ ものか / もんか (absolutely not) ━━━
    {
        id: 'g_n2_106', category: 'grammar', level: 'N2', tags: ['negation', 'strong'],
        stem: 'あんな人{ひと}に負{ま}ける___！',
        stemZh: '怎麼可能輸給那種人！',
        options: [
            { text: 'ものか', reason: '正確！「ものか」表示強烈否定「絕不會…/怎麼會…」。' },
            { text: 'ものだ', reason: '「ものだ」表示「應該…」或感嘆，語意不合。' },
            { text: 'ものの', reason: '「ものの」表示「雖然…」，語意不合。' },
            { text: 'ものを', reason: '「ものを」表示遺憾「要是…就好了」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものか」表示強烈反抗',
            analysis: '「ものか」表示說話者強烈否定某事發生的可能性，語氣非常堅決。口語用「もんか」。',
            comparisons: ['ものか：絕不會…（強烈否定）', 'わけがない：不可能…（理性否定）'],
            commonMistakes: ['○ 負けるものか / × 負けたものか → 用辭書形表示決心'],
        },
    },
    // ━━━ てはいられない (can't keep doing) ━━━
    {
        id: 'g_n2_107', category: 'grammar', level: 'N2', tags: ['urgency'],
        stem: '試験{しけん}まであと一週間{いっしゅうかん}だ。のんびりし___。',
        stemZh: '離考試只剩一週了。不能再悠哉了。',
        options: [
            { text: 'てはいられない', reason: '正確！「てはいられない」表示「不能再…下去了」。' },
            { text: 'てはならない', reason: '「てはならない」表示「不可以…」（禁止），語感不同。' },
            { text: 'てはいけない', reason: '「てはいけない」表示「不可以…」（禁止），語感不同。' },
            { text: 'てはだめだ', reason: '「てはだめだ」表示「不行…」，過於口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てはいられない」表示焦急',
            analysis: '「てはいられない」表示因為狀況緊迫，不能繼續保持現在的悠閒狀態。',
            comparisons: ['てはいられない：不能再…了（焦急）', 'てはならない：不可以…（禁止）'],
            commonMistakes: ['○ のんびりしてはいられない / × のんびりではいられない → 動詞て形接「はいられない」'],
        },
    },
    // ━━━ てならない (extremely / unbearably) ━━━
    {
        id: 'g_n2_108', category: 'grammar', level: 'N2', tags: ['emotion', 'degree'],
        stem: '故郷{こきょう}のことが懐{なつ}かしく___。',
        stemZh: '非常懷念故鄉。',
        options: [
            { text: 'てならない', reason: '正確！「てならない」表示「…得不得了」，自然湧出的情感。' },
            { text: 'てたまらない', reason: '「てたまらない」也表示「…得受不了」，語感稍有不同。' },
            { text: 'てしかたがない', reason: '「てしかたがない」也表示「…得沒辦法」，語感更口語。' },
            { text: 'てはいられない', reason: '「てはいられない」表示「不能再…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てならない」表示自然湧出的情感',
            analysis: '「てならない」表示某種情感或感覺不由自主地湧出，無法控制。比「てたまらない」更書面。',
            comparisons: ['てならない：…得不得了（書面/自然）', 'てたまらない：…得受不了（身體/強烈）', 'てしかたがない：…得沒辦法（口語）'],
            commonMistakes: ['○ 懐かしくてならない / × 懐かしいてならない → い形容詞去「い」加「くて」'],
        },
    },
    // ━━━ てたまらない (unbearably) ━━━
    {
        id: 'g_n2_109', category: 'grammar', level: 'N2', tags: ['emotion', 'degree'],
        stem: '朝{あさ}から何{なに}も食{た}べていないので、お腹{なか}が空{す}い___。',
        stemZh: '從早上開始什麼都沒吃，肚子餓得受不了。',
        options: [
            { text: 'てたまらない', reason: '正確！「てたまらない」表示「…得受不了」，常用於身體感覺。' },
            { text: 'てならない', reason: '「てならない」也可以，但「てたまらない」更適合身體感覺。' },
            { text: 'てはいられない', reason: '「てはいられない」表示「不能再…」，語意不同。' },
            { text: 'てはならない', reason: '「てはならない」表示禁止，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てたまらない」用於身體感覺',
            analysis: '「てたまらない」常用於表達強烈的身體感覺（饑餓、口渴、疼痛等）或情感。',
            comparisons: ['てたまらない：…得受不了（身體/情感）', 'てならない：…得不得了（自然湧出）'],
            commonMistakes: ['○ 空いてたまらない / × 空いたてたまらない → 用て形接「たまらない」'],
        },
    },
    // ━━━ ねばならない (must) ━━━
    {
        id: 'g_n2_110', category: 'grammar', level: 'N2', tags: ['obligation', 'formal'],
        stem: '学生{がくせい}は規則{きそく}を守{まも}ら___。',
        stemZh: '學生必須遵守規則。',
        options: [
            { text: 'ねばならない', reason: '正確！「ねばならない」是「なければならない」的書面形。' },
            { text: 'なければならない', reason: '「なければならない」也正確但更口語。此處考「ねばならない」。' },
            { text: 'ざるを得ない', reason: '「ざるを得ない」表示「不得不…」，含不情願語感。' },
            { text: 'べきだ', reason: '「べきだ」表示「應該…」，義務感不如「ねばならない」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ねばならない」書面義務表現',
            analysis: '「ない形（去ない）＋ねばならない」是「なければならない」的書面正式表現。',
            comparisons: ['ねばならない：必須…（書面）', 'なければならない：必須…（一般）'],
            commonMistakes: ['○ 守らねばならない / × 守るねばならない → 去「ない」加「ねば」'],
        },
    },
    // ━━━ にあたって (on the occasion of) ━━━
    {
        id: 'g_n2_111', category: 'grammar', level: 'N2', tags: ['formal', 'occasion'],
        stem: '新{あたら}しいプロジェクトを始{はじ}める___、チーム全員{ぜんいん}で方針{ほうしん}を確認{かくにん}した。',
        stemZh: '在開始新項目之際，全隊確認了方針。',
        options: [
            { text: 'にあたって', reason: '正確！「にあたって」表示「在…之際」，強調準備和慎重。' },
            { text: 'について', reason: '「について」表示「關於…」，語意不合。' },
            { text: 'に関{かん}して', reason: '「に関して」表示「關於…」，語意不合。' },
            { text: 'にとって', reason: '「にとって」表示「對…來說」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にあたって」表示重要時機的準備',
            analysis: '「にあたって」表示在某個重要事件開始前做準備或確認，強調慎重。',
            comparisons: ['にあたって：在…之際（準備/慎重）', 'に際して：在…之際（正式場合）', 'に先立って：在…之前'],
            commonMistakes: ['○ 始めるにあたって / ○ 開始にあたって → 動詞辭書形或名詞都可以'],
        },
    },
    // ━━━ かのように (as if) ━━━
    {
        id: 'g_n2_112', category: 'grammar', level: 'N2', tags: ['simile', 'manner'],
        stem: '彼{かれ}は何{なに}も知{し}らない___、平気{へいき}な顔{かお}をしている。',
        stemZh: '他彷彿什麼都不知道一樣，一臉若無其事。',
        options: [
            { text: 'かのように', reason: '正確！「かのように」表示「彷彿…一樣」。' },
            { text: 'ように', reason: '「ように」也表比喻，但「かのように」更強調虛假性。' },
            { text: 'みたいに', reason: '「みたいに」是口語比喻，此處需書面表現。' },
            { text: 'らしく', reason: '「らしく」表示「像…似地」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かのように」強調實際並非如此',
            analysis: '「かのように」表示看起來像…但實際上並非如此，比「ように」更強調虛假或對比。',
            comparisons: ['かのように：彷彿…一樣（實非如此）', 'ように：像…一樣（一般比喻）'],
            commonMistakes: ['○ 知らないかのように / × 知らないのかのように → 直接接「かのように」'],
        },
    },
    // ━━━ かえって (on the contrary) ━━━
    {
        id: 'g_n2_113', category: 'grammar', level: 'N2', tags: ['contrast', 'contrary'],
        stem: '薬{くすり}を飲{の}んだが、___具合{ぐあい}が悪{わる}くなった。',
        stemZh: '吃了藥，反而狀況更差了。',
        options: [
            { text: 'かえって', reason: '正確！「かえって」表示「反而/倒不如」。' },
            { text: 'やはり', reason: '「やはり」表示「果然」，語意不合。' },
            { text: 'さすがに', reason: '「さすがに」表示「不愧是…」，語意不合。' },
            { text: 'あいかわらず', reason: '「あいかわらず」表示「仍然」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かえって」表示與預期相反',
            analysis: '「かえって」表示做了某件事後結果與預期相反，通常是更糟的結果。',
            comparisons: ['かえって：反而…（與預期相反）', '逆に：相反地…（客觀對比）'],
            commonMistakes: ['○ かえって悪くなった / × かえって良くなった → 通常接與預期相反的（壞）結果'],
        },
    },
    // ━━━ せっかく (with effort / specially) ━━━
    {
        id: 'g_n2_114', category: 'grammar', level: 'N2', tags: ['effort', 'waste'],
        stem: '___作{つく}った料理{りょうり}なのに、誰{だれ}も食{た}べなかった。',
        stemZh: '好不容易做的菜，卻沒人吃。',
        options: [
            { text: 'せっかく', reason: '正確！「せっかく」表示「好不容易…/特意…」。' },
            { text: 'わざわざ', reason: '「わざわざ」表示「特意…」，但不含「浪費」的語感。' },
            { text: 'たまたま', reason: '「たまたま」表示「碰巧…」，語意不合。' },
            { text: 'いちいち', reason: '「いちいち」表示「每件事都…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「せっかく」表示費心卻可惜',
            analysis: '「せっかく」後面常接「のに」表示費了心力卻結果不如意，帶有可惜的語氣。',
            comparisons: ['せっかく…のに：好不容易…卻…（可惜）', 'わざわざ：特意…（不含可惜）'],
            commonMistakes: ['○ せっかく作ったのに / × せっかく作ったから → 「せっかく」常搭配「のに」'],
        },
    },
    // ━━━ せめて (at least) ━━━
    {
        id: 'g_n2_115', category: 'grammar', level: 'N2', tags: ['wish', 'minimum'],
        stem: '全部{ぜんぶ}は無理{むり}でも、___半分{はんぶん}は終{お}わらせたい。',
        stemZh: '全部做不到的話，至少想完成一半。',
        options: [
            { text: 'せめて', reason: '正確！「せめて」表示「至少/起碼」的最低願望。' },
            { text: 'たとえ', reason: '「たとえ」表示「即使…」，語意不合。' },
            { text: 'むしろ', reason: '「むしろ」表示「寧可…」，語意不同。' },
            { text: '少{すく}なくとも', reason: '「少なくとも」也表示「至少」，但語感更客觀。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「せめて」表示最低願望',
            analysis: '「せめて」表示在不理想的狀況下，至少希望達到最低限度的願望。',
            comparisons: ['せめて：至少…（願望）', '少なくとも：至少…（客觀數量）'],
            commonMistakes: ['○ せめて半分は / × せめて半分が → 「せめて」常搭配「は」'],
        },
    },
    // ━━━ ばかりだ (only getting worse / just keeps) ━━━
    {
        id: 'g_n2_116', category: 'grammar', level: 'N2', tags: ['trend', 'negative'],
        stem: '景気{けいき}は悪{わる}くなる___。',
        stemZh: '景氣越來越差。',
        options: [
            { text: 'ばかりだ', reason: '正確！「ばかりだ」表示「一直在…（往壞的方向）」。' },
            { text: 'ばかりか', reason: '「ばかりか」表示「不僅…」，語法不合。' },
            { text: 'ばかりに', reason: '「ばかりに」表示「只因為…」，語意不合。' },
            { text: 'ばかりで', reason: '「ばかりで」表示「只是…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばかりだ」表示持續惡化',
            analysis: '「動詞辭書形＋ばかりだ」表示狀況一直往某個（通常是不好的）方向發展。',
            comparisons: ['ばかりだ：一直…（惡化趨勢）', '一方だ：一直…（單方向持續，語感相近）'],
            commonMistakes: ['○ 悪くなるばかりだ / × 悪くなったばかりだ → 用辭書形表持續趨勢'],
        },
    },
    // ━━━ 一方だ (keep ~ing) ━━━
    {
        id: 'g_n2_117', category: 'grammar', level: 'N2', tags: ['trend'],
        stem: '物価{ぶっか}は上{あ}がる___。',
        stemZh: '物價持續上漲。',
        options: [
            { text: '一方{いっぽう}だ', reason: '正確！「一方だ」表示「一直…」，持續單方向變化。' },
            { text: '一方{いっぽう}で', reason: '「一方で」表示「另一方面」，語意不同。' },
            { text: 'ばかりだ', reason: '「ばかりだ」也表持續，但「一方だ」更中性。' },
            { text: 'つつある', reason: '「つつある」表示「正在…」，但不強調持續趨勢。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「一方だ」表示單方向持續',
            analysis: '「動詞辭書形＋一方だ」表示某種變化持續朝同一個方向發展，不會逆轉。',
            comparisons: ['一方だ：一直…（持續趨勢）', 'ばかりだ：越來越…（常帶負面）'],
            commonMistakes: ['○ 上がる一方だ / × 上がった一方だ → 用辭書形'],
        },
    },
    // ━━━ 一方で (on the other hand) ━━━
    {
        id: 'g_n2_118', category: 'grammar', level: 'N2', tags: ['contrast'],
        stem: '都市{とし}の人口{じんこう}が増{ふ}える___、地方{ちほう}では減{へ}り続{つづ}けている。',
        stemZh: '都市人口增加的同時，地方持續減少。',
        options: [
            { text: '一方{いっぽう}で', reason: '正確！「一方で」表示「另一方面/在…的同時」。' },
            { text: '一方{いっぽう}だ', reason: '「一方だ」表示「持續…」，語法不合此處。' },
            { text: '反面{はんめん}', reason: '「反面」表示同一事物的兩面，此處為不同事物的對比。' },
            { text: '以上{いじょう}', reason: '「以上」表示「既然…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「一方で」表示對比',
            analysis: '「一方で」用於對比兩個不同的事實或趨勢。可連接不同主語的句子。',
            comparisons: ['一方で：另一方面（不同事物對比）', '反面：另一方面（同一事物的兩面）'],
            commonMistakes: ['○ 増える一方で減る / × 増える一方減る → 需要「で」'],
        },
    },
    // ━━━ ついでに (while at it / on the way) ━━━
    {
        id: 'g_n2_119', category: 'grammar', level: 'N2', tags: ['opportunity'],
        stem: '買{か}い物{もの}の___、郵便局{ゆうびんきょく}にも寄{よ}った。',
        stemZh: '去買東西的順便，也去了郵局。',
        options: [
            { text: 'ついでに', reason: '正確！「ついでに」表示「順便…」。' },
            { text: 'ために', reason: '「ために」表示「為了…」，語意不同。' },
            { text: 'おかげで', reason: '「おかげで」表示「託…的福」，語意不合。' },
            { text: 'せいで', reason: '「せいで」表示「因為…（壞原因）」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ついでに」表示順便',
            analysis: '「ついでに」表示趁做某事的機會順便做另一件事。',
            comparisons: ['ついでに：順便…', 'がてら：順便…（N1，更書面）'],
            commonMistakes: ['○ 買い物のついでに / × 買い物をついでに → 名詞接「のついでに」'],
        },
    },
    // ━━━ わりに (considering / despite) ━━━
    {
        id: 'g_n2_120', category: 'grammar', level: 'N2', tags: ['contrast', 'proportion'],
        stem: 'この料理{りょうり}は簡単{かんたん}な___、おいしい。',
        stemZh: '這道菜相對簡單，卻很好吃。',
        options: [
            { text: 'わりに', reason: '正確！「わりに」表示「相對而言…/就…而言」。' },
            { text: 'ものの', reason: '「ものの」表示「雖然…但…」，語感不同。' },
            { text: 'にしては', reason: '「にしては」表示「就…而言」，語感相近但接續不同。' },
            { text: 'くせに', reason: '「くせに」帶有責備語氣，不合此處。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わりに」表示不成比例',
            analysis: '「わりに」表示結果與前提條件不成正比，出乎意料。',
            comparisons: ['わりに：就…而言（不成比例）', 'にしては：就…而言（意外）'],
            commonMistakes: ['○ 簡単なわりに / × 簡単のわりに → な形容詞接「な」再接「わりに」'],
        },
    },
    // ━━━ にしては (considering) ━━━
    {
        id: 'g_n2_121', category: 'grammar', level: 'N2', tags: ['contrast', 'expectation'],
        stem: '初{はじ}めて___、とても上手{じょうず}ですね。',
        stemZh: '就初次而言，做得很好呢。',
        options: [
            { text: 'にしては', reason: '正確！「にしては」表示「就…而言（出乎意料）」。' },
            { text: 'にしても', reason: '「にしても」表示「即使…也…」，語意不同。' },
            { text: 'にして', reason: '「にして」表示「在…的階段」，語意不同。' },
            { text: 'にしろ', reason: '「にしろ」表示「即便…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にしては」表示超出預期',
            analysis: '「にしては」表示考慮到某個條件，結果出乎意料地好或差。',
            comparisons: ['にしては：就…而言（意外）', 'わりに：就…而言（不成比例）'],
            commonMistakes: ['○ 初めてにしては / × 初めてのにしては → 名詞直接接「にしては」'],
        },
    },
    // ━━━ に反して (contrary to) ━━━
    {
        id: 'g_n2_122', category: 'grammar', level: 'N2', tags: ['contrast', 'contrary'],
        stem: '予想{よそう}___、結果{けっか}は大成功{だいせいこう}だった。',
        stemZh: '與預想相反，結果大獲成功。',
        options: [
            { text: 'に反{はん}して', reason: '正確！「に反して」表示「與…相反」。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對於…」，語意不同。' },
            { text: 'に沿{そ}って', reason: '「に沿って」表示「按照…」，語意相反。' },
            { text: 'に関{かん}して', reason: '「に関して」表示「關於…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に反して」表示違背/相反',
            analysis: '「に反して」表示結果與預期、規則或期望相反。',
            comparisons: ['に反して：與…相反', 'に沿って：按照…（遵循）'],
            commonMistakes: ['○ 予想に反して / × 予想を反して → 用「に」不用「を」'],
        },
    },
    // ━━━ て以来 (since) ━━━
    {
        id: 'g_n2_123', category: 'grammar', level: 'N2', tags: ['time', 'since'],
        stem: '日本{にほん}に来{き}___、毎日{まいにち}日本語{にほんご}を使{つか}っている。',
        stemZh: '自從來到日本以來，每天都在使用日語。',
        options: [
            { text: 'て以来{いらい}', reason: '正確！「て以来」表示「自從…之後（一直）」。' },
            { text: 'てから', reason: '「てから」也表示「之後」，但不如「て以来」強調持續。' },
            { text: 'た後{あと}で', reason: '「た後で」表示「做了…之後」，不強調持續。' },
            { text: 'ている間{あいだ}', reason: '「ている間」表示「在…的期間」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「て以来」表示從某時起至今',
            analysis: '「て以来」表示某個事件發生後到現在一直持續著某種狀態。',
            comparisons: ['て以来：自從…以來（一直持續）', 'てから：在…之後（不一定持續）'],
            commonMistakes: ['○ 来て以来 / × 来る以来 → 用て形接「以来」'],
        },
    },
    // ━━━ てこそ (only by doing) ━━━
    {
        id: 'g_n2_124', category: 'grammar', level: 'N2', tags: ['emphasis', 'condition'],
        stem: '実際{じっさい}にやっ___、分{わ}かることもある。',
        stemZh: '只有實際去做了，才會明白的事也有。',
        options: [
            { text: 'てこそ', reason: '正確！「てこそ」表示「只有做了…才…」。' },
            { text: 'てから', reason: '「てから」表示「做了…之後」，不含「唯有」的語感。' },
            { text: 'ても', reason: '「ても」表示「即使…也…」，語意不同。' },
            { text: 'てまで', reason: '「てまで」表示「甚至做到…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てこそ」強調必要條件',
            analysis: '「てこそ」表示只有做了前面的事，後面的結果才會實現。強調不可或缺的條件。',
            comparisons: ['てこそ：只有…才…（強調唯一條件）', 'てはじめて：做了…才第一次…（初次體驗）'],
            commonMistakes: ['○ やってこそ分かる / × やるこそ分かる → 用て形接「こそ」'],
        },
    },
    // ━━━ にしたら / にすれば (from one's perspective) ━━━
    {
        id: 'g_n2_125', category: 'grammar', level: 'N2', tags: ['perspective'],
        stem: '親{おや}___、子供{こども}の将来{しょうらい}が心配{しんぱい}なのは当然{とうぜん}だ。',
        stemZh: '站在父母的角度，擔心孩子的未來是理所當然的。',
        options: [
            { text: 'にしたら', reason: '正確！「にしたら」表示「站在…的角度/立場」。' },
            { text: 'にしても', reason: '「にしても」表示「即使…也…」，語意不同。' },
            { text: 'にしては', reason: '「にしては」表示「就…而言（意外）」，語意不同。' },
            { text: 'にしろ', reason: '「にしろ」表示「即便…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にしたら」表示他人立場',
            analysis: '「にしたら/にすれば」表示站在某人的立場來看，常用於理解或同情他人的想法。',
            comparisons: ['にしたら：站在…的角度', 'にとって：對…來說（更一般）'],
            commonMistakes: ['○ 親にしたら / × 親のにしたら → 名詞直接接「にしたら」'],
        },
    },
    // ━━━ からすると (judging from) ━━━
    {
        id: 'g_n2_126', category: 'grammar', level: 'N2', tags: ['judgement', 'inference'],
        stem: '彼{かれ}の表情{ひょうじょう}___、何{なに}かあったようだ。',
        stemZh: '從他的表情來看，好像發生了什麼事。',
        options: [
            { text: 'からすると', reason: '正確！「からすると」表示「從…來看/推測」。' },
            { text: 'からして', reason: '「からして」表示「光從…來看就…」，語感更強烈。' },
            { text: 'からこそ', reason: '「からこそ」表示「正因為…」，語意不合。' },
            { text: 'からには', reason: '「からには」表示「既然…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「からすると」表示推測根據',
            analysis: '「からすると」表示以某個線索為根據進行推測。',
            comparisons: ['からすると：從…來看（推測）', 'からして：從…來看就已經…（判斷）'],
            commonMistakes: ['○ 表情からすると / × 表情のからすると → 名詞直接接「からすると」'],
        },
    },
    // ━━━ から見ると (from the perspective of) ━━━
    {
        id: 'g_n2_127', category: 'grammar', level: 'N2', tags: ['perspective', 'judgement'],
        stem: '外国人{がいこくじん}___、日本{にほん}の文化{ぶんか}は不思議{ふしぎ}に感{かん}じることが多{おお}い。',
        stemZh: '從外國人的角度來看，日本文化經常讓人覺得不可思議。',
        options: [
            { text: 'から見{み}ると', reason: '正確！「から見ると」表示「從…的角度來看」。' },
            { text: 'からすると', reason: '「からすると」也表示「從…來看」，但更偏向推測。' },
            { text: 'からして', reason: '「からして」表示「光從…來看就…」，語感不同。' },
            { text: 'から言{い}うと', reason: '「から言うと」表示「從…來說」，語感稍有不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「から見ると」表示觀點',
            analysis: '「から見ると」表示從某個觀點或立場來看事物，常用於文化差異等場景。',
            comparisons: ['から見ると：從…的角度看', 'にとって：對…來說', 'からすると：從…推測'],
            commonMistakes: ['○ 外国人から見ると / × 外国人が見ると → 固定用「から見ると」'],
        },
    },
    // ━━━ から言うと (from the standpoint of) ━━━
    {
        id: 'g_n2_128', category: 'grammar', level: 'N2', tags: ['perspective'],
        stem: '文法{ぶんぽう}の正確{せいかく}さ___、この文{ぶん}は間違{まちが}っている。',
        stemZh: '從文法正確性來說，這個句子是錯的。',
        options: [
            { text: 'から言{い}うと', reason: '正確！「から言うと」表示「從…來說」。' },
            { text: 'から見{み}ると', reason: '「から見ると」表示「從…來看」，語感稍有不同。' },
            { text: 'からすると', reason: '「からすると」表示「從…推測」，語感不同。' },
            { text: 'からして', reason: '「からして」表示「光從…就…」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「から言うと」表示基準',
            analysis: '「から言うと」表示以某個標準或觀點來評價。',
            comparisons: ['から言うと：從…來說（評價基準）', 'から見ると：從…來看（觀察角度）'],
            commonMistakes: ['○ 正確さから言うと / × 正確さにから言うと → 名詞直接接「から言うと」'],
        },
    },
    // ━━━ ところを見ると (judging from the fact that) ━━━
    {
        id: 'g_n2_129', category: 'grammar', level: 'N2', tags: ['inference'],
        stem: '彼{かれ}がまだ来{き}ていない___、電車{でんしゃ}が遅{おく}れているのだろう。',
        stemZh: '看他還沒來的情況，電車可能誤點了吧。',
        options: [
            { text: 'ところを見{み}ると', reason: '正確！「ところを見ると」表示「從…來看/推測」。' },
            { text: 'ところが', reason: '「ところが」表示「然而」，語意不合。' },
            { text: 'ところで', reason: '「ところで」表示「話說」或「即使…也」，語意不合。' },
            { text: 'ところに', reason: '「ところに」表示「正當…之時」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ところを見ると」表示基於觀察的推測',
            analysis: '「ところを見ると」表示根據觀察到的狀況來進行推測。',
            comparisons: ['ところを見ると：從…的情況來看', 'からすると：從…來推測'],
            commonMistakes: ['○ 来ていないところを見ると / × 来ないところを見ると → 用ている形強調觀察到的狀態'],
        },
    },
    // ━━━ としても (even if / assuming) ━━━
    {
        id: 'g_n2_130', category: 'grammar', level: 'N2', tags: ['concession', 'hypothesis'],
        stem: '仮{かり}に失敗{しっぱい}した___、諦{あきら}めない。',
        stemZh: '就算假設失敗了，也不放棄。',
        options: [
            { text: 'としても', reason: '正確！「としても」表示「就算…也…」。' },
            { text: 'としたら', reason: '「としたら」表示「如果…的話」，不含讓步。' },
            { text: 'とすれば', reason: '「とすれば」表示「如果…的話」，不含讓步。' },
            { text: 'として', reason: '「として」表示「作為…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「としても」表示假設讓步',
            analysis: '「としても」表示即使假設前面的情況成立，後面的結論也不會改變。',
            comparisons: ['としても：就算…也…（假設讓步）', 'にしても：即使…也…（事實讓步）'],
            commonMistakes: ['○ 失敗したとしても / × 失敗するとしても → 假設已發生的事用た形'],
        },
    },
    // ━━━ として〜ない (not even one) ━━━
    {
        id: 'g_n2_131', category: 'grammar', level: 'N2', tags: ['negation', 'emphasis'],
        stem: 'あの事件{じけん}の真相{しんそう}を知{し}る人{ひと}は、一人{ひとり}___いない。',
        stemZh: '知道那個事件真相的人，連一個人都沒有。',
        options: [
            { text: 'として', reason: '正確！「一人として〜ない」表示「連一個人都沒有」。' },
            { text: 'でも', reason: '「一人でも」表示「即使一個人也…」，語法不合否定句。' },
            { text: 'さえ', reason: '「一人さえ」也可表強調，但「として」更固定。' },
            { text: 'だけ', reason: '「一人だけ」表示「只有一個人」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「として〜ない」表示一個也沒有',
            analysis: '「數量詞＋として〜ない」表示連一個都沒有，是強調否定的表現。',
            comparisons: ['一人としていない：連一個人都沒有', '一つとしてない：連一個都沒有'],
            commonMistakes: ['○ 一人としていない / × 一人としている → 後句必須是否定'],
        },
    },
    // ━━━ だけあって (befitting / as expected of) ━━━
    {
        id: 'g_n2_132', category: 'grammar', level: 'N2', tags: ['evaluation', 'positive'],
        stem: 'プロ___、彼{かれ}の演奏{えんそう}は素晴{すば}らしかった。',
        stemZh: '不愧是專業的，他的演奏很精彩。',
        options: [
            { text: 'だけあって', reason: '正確！「だけあって」表示「不愧是…/正因為…」。' },
            { text: 'だけに', reason: '「だけに」也可表示「正因為…」，語感略有不同。' },
            { text: 'だけで', reason: '「だけで」表示「只靠…」，語意不同。' },
            { text: 'だけは', reason: '「だけは」表示「至少…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だけあって」表示名副其實',
            analysis: '「だけあって」表示正因為有某種資格或條件，結果也如預期地好。帶有讚賞語氣。',
            comparisons: ['だけあって：不愧是…（讚賞）', 'だけに：正因為…（感受更深）'],
            commonMistakes: ['○ プロだけあって / × プロのだけあって → 名詞接「だけあって」不加「の」'],
        },
    },
    // ━━━ だけに (precisely because) ━━━
    {
        id: 'g_n2_133', category: 'grammar', level: 'N2', tags: ['reason', 'degree'],
        stem: '期待{きたい}していた___、がっかりした。',
        stemZh: '正因為抱有期待，所以更加失望。',
        options: [
            { text: 'だけに', reason: '正確！「だけに」表示「正因為…所以更…」。' },
            { text: 'だけあって', reason: '「だけあって」表示「不愧是…」，語感不同。' },
            { text: 'だけで', reason: '「だけで」表示「只靠…」，語意不同。' },
            { text: 'だけは', reason: '「だけは」表示「至少…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だけに」強調程度',
            analysis: '「だけに」表示正因為有前面的條件，所以後面的感受或結果更加強烈。',
            comparisons: ['だけに：正因為…所以更…（強調程度）', 'だけあって：不愧是…（讚賞）'],
            commonMistakes: ['○ 期待していただけに / × 期待しただけに → 用ていた形強調持續狀態'],
        },
    },
    // ━━━ だけのことはある (it was worth / no wonder) ━━━
    {
        id: 'g_n2_134', category: 'grammar', level: 'N2', tags: ['evaluation'],
        stem: '10年{ねん}も修行{しゅぎょう}した___。この味{あじ}は最高{さいこう}だ。',
        stemZh: '不愧是修行了10年。這味道最棒了。',
        options: [
            { text: 'だけのことはある', reason: '正確！「だけのことはある」表示「不愧是…/名副其實」。' },
            { text: 'だけあって', reason: '「だけあって」語感相近，但「だけのことはある」更強調價值。' },
            { text: 'だけに', reason: '「だけに」表示「正因為…」，語感稍有不同。' },
            { text: 'だけで', reason: '「だけで」表示「只靠…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だけのことはある」表示實至名歸',
            analysis: '「だけのことはある」表示付出的努力或具備的條件是值得的，結果證明了其價值。',
            comparisons: ['だけのことはある：不愧是…（值得）', 'だけあって：不愧是…（讚賞）'],
            commonMistakes: ['○ 修行しただけのことはある / × 修行するだけのことはある → 用た形表示已完成'],
        },
    },
    // ━━━ ことか (how ~! / what ~!) ━━━
    {
        id: 'g_n2_135', category: 'grammar', level: 'N2', tags: ['exclamation'],
        stem: 'この日{ひ}をどんなに待{ま}ち望{のぞ}んだ___。',
        stemZh: '多麼盼望這一天的到來啊！',
        options: [
            { text: 'ことか', reason: '正確！「ことか」表示感嘆「多麼…啊！」。' },
            { text: 'ことだ', reason: '「ことだ」表示忠告「應該…」，語意不合。' },
            { text: 'ことに', reason: '「ことに」表示「令人…的是」，語法不合。' },
            { text: 'ことから', reason: '「ことから」表示「從…來看」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことか」表示深深的感嘆',
            analysis: '「ことか」用於句末表示深深的感嘆，常與「どんなに」「何度」「いくら」等搭配。',
            comparisons: ['ことか：多麼…啊（感嘆）', 'ものか：怎麼可能…（反問否定）'],
            commonMistakes: ['○ どんなに待ったことか / × どんなに待つことか → 感嘆過去的事用た形'],
        },
    },
    // ━━━ ことなく (without) ━━━
    {
        id: 'g_n2_136', category: 'grammar', level: 'N2', tags: ['without', 'formal'],
        stem: '彼女{かのじょ}は泣{な}く___、最後{さいご}まで笑顔{えがお}だった。',
        stemZh: '她沒有哭，一直到最後都帶著笑容。',
        options: [
            { text: 'ことなく', reason: '正確！「ことなく」表示「不做…而…」，書面語。' },
            { text: 'ことに', reason: '「ことに」表示「令人…的是」，語意不合。' },
            { text: 'ことか', reason: '「ことか」表示感嘆，語意不合。' },
            { text: 'ことだ', reason: '「ことだ」表示忠告，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことなく」替代「ないで」的書面表達',
            analysis: '「動詞辭書形＋ことなく」是「ないで」的書面語表現，表示不做某事。',
            comparisons: ['ことなく：不…而…（書面）', 'ないで：不…而…（口語）'],
            commonMistakes: ['○ 泣くことなく / × 泣かないことなく → 用辭書形接「ことなく」'],
        },
    },
    // ━━━ 甲斐がある (worth doing) ━━━
    {
        id: 'g_n2_137', category: 'grammar', level: 'N2', tags: ['value', 'reward'],
        stem: '毎日{まいにち}練習{れんしゅう}した___、大会{たいかい}で優勝{ゆうしょう}できた。',
        stemZh: '每天練習的成果沒有白費，在大會上贏得了冠軍。',
        options: [
            { text: '甲斐{かい}があって', reason: '正確！「甲斐があって」表示「…的努力有了回報」。' },
            { text: 'おかげで', reason: '「おかげで」表示「託…的福」，語感稍有不同。' },
            { text: 'せいで', reason: '「せいで」表示「因為…（壞原因）」，語意相反。' },
            { text: 'ために', reason: '「ために」表示「為了…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「甲斐があって」表示付出有回報',
            analysis: '「甲斐がある」表示做某事是值得的，努力獲得了回報。',
            comparisons: ['甲斐がある：有價值/值得', '甲斐がない：白費/不值得'],
            commonMistakes: ['○ 練習した甲斐があって / × 練習する甲斐があって → 已完成的事用た形'],
        },
    },
    // ━━━ 抜く (do thoroughly / to the end) ━━━
    {
        id: 'g_n2_138', category: 'grammar', level: 'N2', tags: ['completion', 'thorough'],
        stem: 'マラソンは苦{くる}しかったが、最後{さいご}まで走{はし}り___。',
        stemZh: '馬拉松很辛苦，但堅持跑到了最後。',
        options: [
            { text: '抜{ぬ}いた', reason: '正確！「走り抜く」表示「跑完全程/堅持到底」。' },
            { text: '切{き}った', reason: '「走り切った」也可以表示「跑完」，但「抜く」更強調堅持。' },
            { text: '出{だ}した', reason: '「走り出した」表示「開始跑」，語意不合。' },
            { text: '過{す}ぎた', reason: '「走り過ぎた」表示「跑過頭了」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「抜く」表示做到底',
            analysis: '「ます形＋抜く」表示克服困難堅持到底。帶有「費了很大力氣」的語感。',
            comparisons: ['抜く：堅持到底（強調毅力）', '切る：完成（強調完結）'],
            commonMistakes: ['○ 走り抜いた / × 走るぬいた → 用ます形「走り」接「抜く」'],
        },
    },
    // ━━━ をこめて (with ~ in mind / putting ~ into) ━━━
    {
        id: 'g_n2_139', category: 'grammar', level: 'N2', tags: ['emotion', 'manner'],
        stem: '感謝{かんしゃ}の気持{きも}ち___、手紙{てがみ}を書{か}いた。',
        stemZh: '懷著感謝的心情，寫了一封信。',
        options: [
            { text: 'をこめて', reason: '正確！「をこめて」表示「傾注…/充滿…」。' },
            { text: 'をもとに', reason: '「をもとに」表示「以…為基礎」，語意不合。' },
            { text: 'をめぐって', reason: '「をめぐって」表示「圍繞…」，語意不合。' },
            { text: 'を通{つう}じて', reason: '「を通じて」表示「通過…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をこめて」表示傾注感情',
            analysis: '「をこめて」表示將某種情感或心意傾注到行動中。常見搭配：心をこめて、愛をこめて。',
            comparisons: ['をこめて：傾注…（感情）', 'を持って：帶著…（態度）'],
            commonMistakes: ['○ 気持ちをこめて / × 気持ちにこめて → 用「を」不用「に」'],
        },
    },
    // ━━━ や否や (as soon as) ━━━
    {
        id: 'g_n2_140', category: 'grammar', level: 'N2', tags: ['time', 'immediate', 'formal'],
        stem: 'ベルが鳴{な}る___、学生{がくせい}たちは教室{きょうしつ}を飛{と}び出{だ}した。',
        stemZh: '鈴聲一響，學生們就衝出了教室。',
        options: [
            { text: 'や否{いな}や', reason: '正確！「や否や」表示「一…就…」，書面語。' },
            { text: 'が早{はや}いか', reason: '「が早いか」也表示「一…就…」，但是N1文法。' },
            { text: 'たとたんに', reason: '「たとたんに」也表示「剛…就…」，但用た形。' },
            { text: 'かと思{おも}ったら', reason: '「かと思ったら」表示「剛以為…就…」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「や否や」表示瞬間連續',
            analysis: '「動詞辭書形＋や否や」表示前一動作剛發生，後一動作就緊接著發生。書面語。',
            comparisons: ['や否や：一…就…（書面）', 'たとたんに：剛…就…（一般）', 'か〜ないかのうちに：剛…就…'],
            commonMistakes: ['○ 鳴るや否や / × 鳴ったや否や → 用辭書形接「や否や」'],
        },
    },
    // ━━━ か〜ないかのうちに (no sooner than) ━━━
    {
        id: 'g_n2_141', category: 'grammar', level: 'N2', tags: ['time', 'immediate'],
        stem: '横{よこ}になる___ならない___、すぐ眠{ねむ}ってしまった。',
        stemZh: '才剛躺下就立刻睡著了。',
        options: [
            { text: 'か…かの…うちに', reason: '正確！「か〜ないかのうちに」表示「剛…就…」。' },
            { text: 'と…との…あいだに', reason: '語法不正確。' },
            { text: 'や…やの…うちに', reason: '語法不正確。' },
            { text: 'か…かの…あとで', reason: '語法不正確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「か〜ないかのうちに」表示幾乎同時',
            analysis: '「辭書形＋か＋ない形＋かのうちに」表示前一動作還沒完全完成，後一動作就已經開始了。',
            comparisons: ['か〜ないかのうちに：剛…就…', 'や否や：一…就…（書面）'],
            commonMistakes: ['○ なるかならないかのうちに / × なったかならなかったかのうちに → 用辭書形和ない形'],
        },
    },
    // ━━━ ところだった (almost did / nearly) ━━━
    {
        id: 'g_n2_142', category: 'grammar', level: 'N2', tags: ['near-miss'],
        stem: '危{あぶ}なく車{くるま}にひかれる___。',
        stemZh: '差點就被車撞了。',
        options: [
            { text: 'ところだった', reason: '正確！「ところだった」表示「差點就…」。' },
            { text: 'ところだ', reason: '「ところだ」表示「正要…/剛…」，語意不同。' },
            { text: 'ところに', reason: '「ところに」表示「正當…之時」，語意不合。' },
            { text: 'ところで', reason: '「ところで」表示「話說/即使…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ところだった」表示險些發生',
            analysis: '「動詞辭書形＋ところだった」表示某件壞事差一點就發生了，帶有慶幸或後怕的語氣。',
            comparisons: ['ところだった：差點就…', 'もう少しで：差一點就…（口語）'],
            commonMistakes: ['○ ひかれるところだった / × ひかれたところだった → 用辭書形（因為沒有實際發生）'],
        },
    },
    // ━━━ としたら / とすれば (if we assume) ━━━
    {
        id: 'g_n2_143', category: 'grammar', level: 'N2', tags: ['hypothesis'],
        stem: '犯人{はんにん}がこの部屋{へや}に入{はい}った___、窓{まど}から入{はい}ったに違{ちが}いない。',
        stemZh: '如果犯人進了這個房間的話，一定是從窗戶進來的。',
        options: [
            { text: 'としたら', reason: '正確！「としたら」表示「如果（假設）…的話」。' },
            { text: 'としても', reason: '「としても」表示「就算…也…」，含讓步語氣。' },
            { text: 'として', reason: '「として」表示「作為…」，語意不同。' },
            { text: 'としたって', reason: '「としたって」也可表假設讓步，但更口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「としたら」表示假設推理',
            analysis: '「としたら/とすれば」表示假設某個條件成立，然後進行推理。常用於推測、推理場景。',
            comparisons: ['としたら：如果…的話（假設推理）', 'としても：就算…也…（假設讓步）'],
            commonMistakes: ['○ 入ったとしたら / × 入るとしたら → 假設已發生的事用た形'],
        },
    },
    // ━━━ にしろ〜にしろ (whether ~ or ~) ━━━
    {
        id: 'g_n2_144', category: 'grammar', level: 'N2', tags: ['concession', 'alternatives'],
        stem: '賛成{さんせい}___反対{はんたい}___、理由{りゆう}を述{の}べてください。',
        stemZh: '不管是贊成還是反對，請說明理由。',
        options: [
            { text: 'にしろ…にしろ', reason: '正確！「にしろ〜にしろ」表示「無論是…還是…」。' },
            { text: 'にしても…にしても', reason: '「にしても〜にしても」也可以，但「にしろ〜にしろ」更簡潔。' },
            { text: 'にせよ…にせよ', reason: '「にせよ〜にせよ」也可以，更書面。' },
            { text: 'にしたら…にしたら', reason: '「にしたら」不用於此列舉結構。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にしろ〜にしろ」列舉讓步',
            analysis: '「にしろ〜にしろ」表示無論是哪種情況，結論都一樣。常列舉相反或對立的選項。',
            comparisons: ['にしろ〜にしろ：無論…還是…', 'にせよ〜にせよ：無論…還是…（書面）'],
            commonMistakes: ['○ 賛成にしろ反対にしろ / × 賛成するにしろ反対するにしろ → 名詞直接接'],
        },
    },
    // ━━━ にしたら / にすれば (from one's standpoint) ━━━
    {
        id: 'g_n2_145', category: 'grammar', level: 'N2', tags: ['perspective'],
        stem: '先生{せんせい}___、毎日{まいにち}同{おな}じ質問{しつもん}をされるのは大変{たいへん}だろう。',
        stemZh: '站在老師的角度，每天被問同樣的問題一定很辛苦吧。',
        options: [
            { text: 'にすれば', reason: '正確！「にすれば」表示「站在…的立場來看」。' },
            { text: 'にしては', reason: '「にしては」表示「就…而言（意外）」，語意不同。' },
            { text: 'にしても', reason: '「にしても」表示「即使…也…」，語意不同。' },
            { text: 'にして', reason: '「にして」表示「在…的階段」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にすれば」同「にしたら」',
            analysis: '「にすれば」和「にしたら」意思相同，都表示從某人的立場來看。',
            comparisons: ['にすれば：站在…的角度（較書面）', 'にしたら：站在…的角度（較口語）'],
            commonMistakes: ['○ 先生にすれば / × 先生のにすれば → 名詞直接接「にすれば」'],
        },
    },
    // ━━━ ことにはならない (doesn't mean) ━━━
    {
        id: 'g_n2_146', category: 'grammar', level: 'N2', tags: ['logic', 'negation'],
        stem: 'お金{かね}を持{も}っている___、何{なん}でも買{か}える___。',
        stemZh: '有錢並不代表什麼都能買。',
        options: [
            { text: 'からといって…わけではない', reason: '正確！「からといって…わけではない」表示「即使…也未必…」。' },
            { text: 'からこそ…のだ', reason: '「からこそ…のだ」表示「正因為…才…」，語意相反。' },
            { text: 'からには…べきだ', reason: '「からには…べきだ」表示「既然…就該…」，語意不合。' },
            { text: 'からして…だ', reason: '「からして…だ」表示「從…來看就…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「からといって…わけではない」複合否定',
            analysis: '「からといって」和「わけではない」的組合是N2重要考點，表示反駁某個因果推論。',
            comparisons: ['からといって〜わけではない：即使…也不一定…', 'からこそ〜のだ：正因為…才…'],
            commonMistakes: ['○ 持っているからといって / × 持つからといって → 現在的狀態用ている形'],
        },
    },
    // ━━━ ものがある (there is something ~) ━━━
    {
        id: 'g_n2_147', category: 'grammar', level: 'N2', tags: ['impression', 'feeling'],
        stem: '彼{かれ}の話{はなし}には、人{ひと}を引{ひ}きつける___。',
        stemZh: '他的話確實有吸引人的地方。',
        options: [
            { text: 'ものがある', reason: '正確！「ものがある」表示「確實有…之處」。' },
            { text: 'ものだ', reason: '「ものだ」表示「應該…」或感嘆，語法不合。' },
            { text: 'ものの', reason: '「ものの」表示「雖然…」，語法不合。' },
            { text: 'ものか', reason: '「ものか」表示「怎麼會…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものがある」表示深刻印象',
            analysis: '「ものがある」表示某事物確實給人留下深刻印象或有令人感動之處。',
            comparisons: ['ものがある：確實有…之處（印象深刻）', 'ところがある：有…的地方（特徵）'],
            commonMistakes: ['○ 引きつけるものがある / × 引きつけたものがある → 用辭書形'],
        },
    },
    // ━━━ もう少しで (almost / nearly) ━━━
    {
        id: 'g_n2_148', category: 'grammar', level: 'N2', tags: ['near-miss', 'colloquial'],
        stem: '___転{ころ}ぶところだった。',
        stemZh: '差一點就摔倒了。',
        options: [
            { text: 'もう少{すこ}しで', reason: '正確！「もう少しで」表示「差一點就…」。' },
            { text: 'もう少{すこ}し', reason: '「もう少し」表示「再多一點」，語意不同。' },
            { text: 'あと少{すこ}し', reason: '「あと少し」表示「還差一點」，語意不完全相同。' },
            { text: 'もうすぐ', reason: '「もうすぐ」表示「快要…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「もう少しで」常搭配「ところだった」',
            analysis: '「もう少しで＋辭書形＋ところだった」是表示「差一點就…」的常見搭配。',
            comparisons: ['もう少しで〜ところだった：差一點就…（口語）', '危うく〜ところだった：險些…（書面）'],
            commonMistakes: ['○ もう少しで転ぶところだった / × もう少し転ぶところだった → 需要「で」'],
        },
    },
    // ━━━ ないことには〜ない (unless) ━━━
    {
        id: 'g_n2_149', category: 'grammar', level: 'N2', tags: ['condition', 'necessity'],
        stem: '実際{じっさい}に食{た}べてみ___、おいしいかどうか分{わ}からない。',
        stemZh: '不實際吃吃看的話，不知道好不好吃。',
        options: [
            { text: 'ないことには', reason: '正確！「ないことには〜ない」表示「如果不…就不…」。' },
            { text: 'ないうちに', reason: '「ないうちに」表示「趁還沒…的時候」，語意不同。' },
            { text: 'なくて', reason: '「なくて」表示原因「因為沒…」，語法不同。' },
            { text: 'ないように', reason: '「ないように」表示「為了不…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないことには〜ない」雙重否定表示必要條件',
            analysis: '「ないことには〜ない」表示如果不做前面的事，就無法達成後面的結果。雙重否定強調必要性。',
            comparisons: ['ないことには〜ない：如果不…就不…（強調必要）', 'なければ〜ない：如果不…就不…（一般）'],
            commonMistakes: ['○ 食べてみないことには分からない / × 食べないことには分からない → 「てみないことには」更自然'],
        },
    },
    // ━━━ なくはない / なくもない (not impossible) ━━━
    {
        id: 'g_n2_150', category: 'grammar', level: 'N2', tags: ['hedging', 'possibility'],
        stem: '行{い}き___が、あまり気{き}が進{すす}まない。',
        stemZh: '也不是不想去，但不太有心情。',
        options: [
            { text: 'たくなくはない', reason: '正確！「なくはない」表示「也不是不…」的婉轉肯定。' },
            { text: 'たくない', reason: '「たくない」是直接否定「不想…」，語感太直接。' },
            { text: 'たいわけではない', reason: '「たいわけではない」表示「並不是想…」，語意稍有不同。' },
            { text: 'たくてたまらない', reason: '「たくてたまらない」表示「非常想…」，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なくはない」表示婉轉肯定',
            analysis: '「なくはない」用雙重否定表示婉轉的肯定，語氣帶有猶豫或保留。',
            comparisons: ['なくはない：也不是不…（婉轉肯定）', 'なくもない：也不是不…（同義）'],
            commonMistakes: ['○ 行きたくなくはない / × 行きたいなくはない → ない形接「なくはない」'],
        },
    },
    // ━━━ なくて済む (can get by without) ━━━
    {
        id: 'g_n2_151', category: 'grammar', level: 'N2', tags: ['avoidance', 'relief'],
        stem: 'タクシーに乗{の}ったので、歩{ある}か___。',
        stemZh: '因為搭了計程車，所以不用走路就行了。',
        options: [
            { text: 'なくて済{す}んだ', reason: '正確！「なくて済む」表示「不用…就解決了」。' },
            { text: 'ずに済{す}んだ', reason: '「ずに済む」也表示同義，更書面。' },
            { text: 'ないで済{す}んだ', reason: '「ないで済む」較口語，但也正確。此處考「なくて」。' },
            { text: 'なければよかった', reason: '「なければよかった」表示「要是沒…就好了」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なくて済む」表示省去麻煩',
            analysis: '「なくて済む」表示不需要做某事就能解決問題，含有鬆了一口氣的語感。',
            comparisons: ['なくて済む：不用…就行（鬆了口氣）', 'ずに済む：不用…就行（更書面）'],
            commonMistakes: ['○ 歩かなくて済んだ / × 歩くなくて済んだ → 用ない形「歩かない」去い加「くて」'],
        },
    },
    // ━━━ ろくに〜ない (hardly / not properly) ━━━
    {
        id: 'g_n2_152', category: 'grammar', level: 'N2', tags: ['negation', 'insufficiency'],
        stem: '忙{いそが}しくて、___食事{しょくじ}も取{と}れなかった。',
        stemZh: '太忙了，連飯都沒好好吃。',
        options: [
            { text: 'ろくに', reason: '正確！「ろくに〜ない」表示「沒好好…/不怎麼…」。' },
            { text: 'めったに', reason: '「めったに〜ない」表示「很少…」，語感不同。' },
            { text: 'ほとんど', reason: '「ほとんど〜ない」表示「幾乎不…」，語感不同。' },
            { text: 'まったく', reason: '「まったく〜ない」表示「完全不…」，程度過強。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ろくに〜ない」表示不充分',
            analysis: '「ろくに」必須搭配否定形，表示沒有像樣地或好好地做某事。帶有不滿或遺憾。',
            comparisons: ['ろくに〜ない：沒好好…', 'ちっとも〜ない：一點也不…', 'まったく〜ない：完全不…'],
            commonMistakes: ['○ ろくに食事も取れなかった / × ろくに食事を取った → 必須搭配否定'],
        },
    },
    // ━━━ ちっとも〜ない (not at all) ━━━
    {
        id: 'g_n2_153', category: 'grammar', level: 'N2', tags: ['negation', 'emphasis'],
        stem: '何度{なんど}説明{せつめい}しても、___分{わ}かってくれない。',
        stemZh: '不管解釋多少次，他一點都不明白。',
        options: [
            { text: 'ちっとも', reason: '正確！「ちっとも〜ない」表示「一點也不…」。' },
            { text: 'ろくに', reason: '「ろくに〜ない」表示「沒好好…」，語感不同。' },
            { text: 'なかなか', reason: '「なかなか〜ない」表示「不太…/遲遲不…」，程度不同。' },
            { text: 'すっかり', reason: '「すっかり」表示「完全地」，通常不接否定。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ちっとも〜ない」表示完全否定',
            analysis: '「ちっとも〜ない」是口語表現，表示「一點兒也不…」，帶有不滿的語氣。',
            comparisons: ['ちっとも〜ない：一點也不…（口語/不滿）', '少しも〜ない：一點也不…（較正式）'],
            commonMistakes: ['○ ちっとも分からない / × ちっとも分かる → 必須搭配否定'],
        },
    },
    // ━━━ いわゆる (so-called) ━━━
    {
        id: 'g_n2_154', category: 'grammar', level: 'N2', tags: ['description'],
        stem: 'これは___「ブラック企業{きぎょう}」というものだ。',
        stemZh: '這就是所謂的「血汗企業」。',
        options: [
            { text: 'いわゆる', reason: '正確！「いわゆる」表示「所謂的…」。' },
            { text: 'たとえば', reason: '「たとえば」表示「例如…」，語意不同。' },
            { text: 'つまり', reason: '「つまり」表示「也就是說…」，語意不同。' },
            { text: 'すなわち', reason: '「すなわち」表示「即…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「いわゆる」引出通稱',
            analysis: '「いわゆる」用於引出廣為人知的稱呼或概念，修飾後面的名詞。',
            comparisons: ['いわゆる：所謂的…（引出通稱）', 'いわば：可以說是…（比喻）'],
            commonMistakes: ['○ いわゆるブラック企業 / × いわゆるのブラック企業 → 直接修飾名詞'],
        },
    },
    // ━━━ どうやら (apparently / it seems) ━━━
    {
        id: 'g_n2_155', category: 'grammar', level: 'N2', tags: ['inference'],
        stem: '___彼{かれ}は来{こ}ないようだ。',
        stemZh: '看來他好像不會來了。',
        options: [
            { text: 'どうやら', reason: '正確！「どうやら」表示「看來好像…」。' },
            { text: 'どうせ', reason: '「どうせ」表示「反正…」，語感不同。' },
            { text: 'どうにか', reason: '「どうにか」表示「總算…」，語意不同。' },
            { text: 'どうしても', reason: '「どうしても」表示「無論如何…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「どうやら」表示不確定推測',
            analysis: '「どうやら」表示根據各種跡象進行的不太確定的推測。常與「ようだ」「らしい」搭配。',
            comparisons: ['どうやら：看來好像…（不確定推測）', 'どうせ：反正…（放棄）'],
            commonMistakes: ['○ どうやら来ないようだ / × どうやら来ないだ → 需搭配「ようだ」「らしい」等'],
        },
    },
    // ━━━ どうせ (anyway / after all) ━━━
    {
        id: 'g_n2_156', category: 'grammar', level: 'N2', tags: ['resignation'],
        stem: '___やるなら、最後{さいご}まで頑張{がんば}ろう。',
        stemZh: '反正要做的話，就努力到最後吧。',
        options: [
            { text: 'どうせ', reason: '正確！「どうせ」表示「反正…/終歸…」。' },
            { text: 'どうやら', reason: '「どうやら」表示「看來…」，語意不同。' },
            { text: 'どうにか', reason: '「どうにか」表示「總算…」，語意不同。' },
            { text: 'どうも', reason: '「どうも」表示「好像…」或打招呼，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「どうせ」帶有接受現實的語氣',
            analysis: '「どうせ」表示既然結果已定或無法改變，不如接受現實。可帶消極或積極語氣。',
            comparisons: ['どうせ：反正…（接受現實）', 'せっかく：好不容易…（珍惜機會）'],
            commonMistakes: ['○ どうせやるなら / × どうせやったなら → 「どうせ」後接未來的假設'],
        },
    },
    // ━━━ いよいよ (finally / at last) ━━━
    {
        id: 'g_n2_157', category: 'grammar', level: 'N2', tags: ['time', 'climax'],
        stem: '___明日{あした}から新{あたら}しい学期{がっき}が始{はじ}まる。',
        stemZh: '終於明天開始新學期了。',
        options: [
            { text: 'いよいよ', reason: '正確！「いよいよ」表示「終於…/到了關鍵時刻」。' },
            { text: 'ようやく', reason: '「ようやく」表示「好不容易…」，強調過程艱辛。' },
            { text: 'ついに', reason: '「ついに」表示「終於…」，語感相近但較中性。' },
            { text: 'やっと', reason: '「やっと」表示「好不容易…」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「いよいよ」表示期待的時刻到來',
            analysis: '「いよいよ」表示期待已久的事情終於到來，帶有興奮和緊張的語氣。',
            comparisons: ['いよいよ：終於…（期待/緊張）', 'ついに：終於…（結果揭曉）', 'ようやく：好不容易…（艱辛過程）'],
            commonMistakes: ['○ いよいよ始まる / × いよいよ始まった → 通常用於即將發生的事'],
        },
    },
    // ━━━ とっくに (long ago / already) ━━━
    {
        id: 'g_n2_158', category: 'grammar', level: 'N2', tags: ['time', 'emphasis'],
        stem: 'そんなこと___知{し}っていたよ。',
        stemZh: '那種事我早就知道了。',
        options: [
            { text: 'とっくに', reason: '正確！「とっくに」表示「早就…」。' },
            { text: 'やっと', reason: '「やっと」表示「好不容易…」，語意相反。' },
            { text: 'ようやく', reason: '「ようやく」表示「總算…」，語意相反。' },
            { text: 'まだ', reason: '「まだ」表示「還（沒）…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とっくに」表示很早就已經',
            analysis: '「とっくに」表示某事很早就已經完成，帶有「你才知道嗎」的語氣。',
            comparisons: ['とっくに：早就…（強調時間差）', 'もう：已經…（一般）'],
            commonMistakes: ['○ とっくに知っていた / × とっくに知る → 用過去完成的形式'],
        },
    },
    // ━━━ やがて (before long / eventually) ━━━
    {
        id: 'g_n2_159', category: 'grammar', level: 'N2', tags: ['time', 'gradual'],
        stem: '雨{あめ}は___やんだ。',
        stemZh: '雨不久就停了。',
        options: [
            { text: 'やがて', reason: '正確！「やがて」表示「不久/很快」。' },
            { text: 'いきなり', reason: '「いきなり」表示「突然…」，語感不同。' },
            { text: 'たちまち', reason: '「たちまち」表示「轉眼間…」，速度感更快。' },
            { text: 'とたんに', reason: '「とたんに」表示「剛…就…」，語法不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「やがて」表示自然推移',
            analysis: '「やがて」表示過了一段時間後自然而然地發生某事。語感較文學性。',
            comparisons: ['やがて：不久…（自然推移）', 'まもなく：不久…（較正式）', 'そのうち：早晚…（口語）'],
            commonMistakes: ['○ やがて雨はやんだ / ○ 雨はやがてやんだ → 位置較靈活'],
        },
    },
    // ━━━ いきなり (suddenly / without warning) ━━━
    {
        id: 'g_n2_160', category: 'grammar', level: 'N2', tags: ['manner', 'sudden'],
        stem: '彼{かれ}は___泣{な}き出{だ}した。',
        stemZh: '他突然哭了起來。',
        options: [
            { text: 'いきなり', reason: '正確！「いきなり」表示「突然/毫無預警地」。' },
            { text: 'やがて', reason: '「やがて」表示「不久…」，語感不同。' },
            { text: 'しだいに', reason: '「しだいに」表示「逐漸地…」，語意相反。' },
            { text: 'ようやく', reason: '「ようやく」表示「好不容易…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「いきなり」表示毫無預兆',
            analysis: '「いきなり」表示事情毫無預兆地突然發生，比「突然」更強調沒有準備。',
            comparisons: ['いきなり：突然…（毫無準備）', '突然：突然…（一般）', '急に：忽然…（速度感）'],
            commonMistakes: ['○ いきなり泣き出した / × いきなりに泣き出した → 不加「に」'],
        },
    },
    // ━━━ しかも (moreover / what's more) ━━━
    {
        id: 'g_n2_161', category: 'grammar', level: 'N2', tags: ['addition', 'emphasis'],
        stem: 'この店{みせ}は安{やす}い。___おいしい。',
        stemZh: '這家店很便宜，而且好吃。',
        options: [
            { text: 'しかも', reason: '正確！「しかも」表示「而且/況且」，用於追加資訊。' },
            { text: 'しかし', reason: '「しかし」表示「然而…」，語意相反。' },
            { text: 'したがって', reason: '「したがって」表示「因此…」，語意不合。' },
            { text: 'そのくせ', reason: '「そのくせ」表示「可是卻…」，帶責備語氣。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「しかも」追加同方向資訊',
            analysis: '「しかも」用於追加與前面同方向的資訊，加強前面的論點。',
            comparisons: ['しかも：而且…（追加強化）', 'その上：再加上…（追加）', 'おまけに：加上…（追加，口語）'],
            commonMistakes: ['○ 安い。しかもおいしい / × 安い、しかもおいしい → 通常分開兩個句子'],
        },
    },
    // ━━━ おまけに (on top of that) ━━━
    {
        id: 'g_n2_162', category: 'grammar', level: 'N2', tags: ['addition'],
        stem: '雨{あめ}に降{ふ}られて、___風邪{かぜ}も引{ひ}いてしまった。',
        stemZh: '被雨淋了，加上又感冒了。',
        options: [
            { text: 'おまけに', reason: '正確！「おまけに」表示「加上/而且」，常用於追加同方向的事。' },
            { text: 'おかげで', reason: '「おかげで」表示「託…的福」，語感不同。' },
            { text: 'かえって', reason: '「かえって」表示「反而…」，語意不同。' },
            { text: 'それなのに', reason: '「それなのに」表示「儘管如此…卻…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「おまけに」表示雪上加霜',
            analysis: '「おまけに」多用於追加壞事或好事，表示在已有的情況上再加上…。',
            comparisons: ['おまけに：加上…（口語追加）', 'しかも：而且…（較正式）', 'その上：再加上…'],
            commonMistakes: ['○ おまけに風邪も引いた / × おまけで風邪も引いた → 用「に」不用「で」'],
        },
    },
    // ━━━ ちなみに (by the way / incidentally) ━━━
    {
        id: 'g_n2_163', category: 'grammar', level: 'N2', tags: ['supplement'],
        stem: '明日{あした}の会議{かいぎ}は10時{じ}からです。___、場所{ばしょ}は3階{かい}の会議室{かいぎしつ}です。',
        stemZh: '明天的會議從10點開始。順帶一提，地點是3樓的會議室。',
        options: [
            { text: 'ちなみに', reason: '正確！「ちなみに」表示「順便一提」，補充相關資訊。' },
            { text: 'ところで', reason: '「ところで」表示換話題，不是補充。' },
            { text: 'さて', reason: '「さて」表示「那麼…」，語意不合。' },
            { text: 'ところが', reason: '「ところが」表示「然而…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ちなみに」補充相關資訊',
            analysis: '「ちなみに」用於在主要資訊之後補充相關的附加資訊。',
            comparisons: ['ちなみに：順帶一提（補充相關資訊）', 'ところで：話說（換話題）'],
            commonMistakes: ['○ ちなみに場所は… / × ちなみ場所は… → 需要「に」'],
        },
    },
    // ━━━ なお (furthermore / still) ━━━
    {
        id: 'g_n2_164', category: 'grammar', level: 'N2', tags: ['supplement', 'formal'],
        stem: '申{もう}し込{こ}みは金曜{きんよう}までです。___、詳{くわ}しくはホームページをご覧{らん}ください。',
        stemZh: '申請截止到週五。此外，詳情請參閱網站。',
        options: [
            { text: 'なお', reason: '正確！「なお」表示「此外/還有」，用於正式場合補充說明。' },
            { text: 'しかし', reason: '「しかし」表示「然而…」，語意不合。' },
            { text: 'つまり', reason: '「つまり」表示「也就是說…」，語意不合。' },
            { text: 'ところで', reason: '「ところで」表示換話題，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なお」用於正式補充',
            analysis: '「なお」用於正式文書或公告中追加補充資訊。比「ちなみに」更正式。',
            comparisons: ['なお：此外…（正式補充）', 'ちなみに：順帶一提（口語補充）'],
            commonMistakes: ['○ なお、詳しくは… / × なおの、詳しくは… → 「なお」直接用於句首'],
        },
    },
    // ━━━ それにしても (even so / nevertheless) ━━━
    {
        id: 'g_n2_165', category: 'grammar', level: 'N2', tags: ['concession', 'surprise'],
        stem: '忙{いそが}しいのは分{わ}かるが、___返事{へんじ}が遅{おそ}すぎる。',
        stemZh: '知道很忙，但即便如此回覆也太慢了。',
        options: [
            { text: 'それにしても', reason: '正確！「それにしても」表示「話雖如此/即便如此」。' },
            { text: 'それなのに', reason: '「それなのに」表示「儘管如此卻…」，語感略有不同。' },
            { text: 'それなら', reason: '「それなら」表示「如果那樣的話」，語意不同。' },
            { text: 'それでも', reason: '「それでも」表示「即便那樣…」，語感稍有不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「それにしても」表示超出預期的程度',
            analysis: '「それにしても」表示雖然承認前面的事實，但後面的程度超出了預期或容忍範圍。',
            comparisons: ['それにしても：即便如此（程度超出）', 'それなのに：儘管如此（逆接）'],
            commonMistakes: ['○ それにしても遅すぎる / × それにしてもで遅すぎる → 不加「で」'],
        },
    },
    // ━━━ それなのに (despite that) ━━━
    {
        id: 'g_n2_166', category: 'grammar', level: 'N2', tags: ['contrast', 'disappointment'],
        stem: '約束{やくそく}をしたのに。___彼{かれ}は来{こ}なかった。',
        stemZh: '明明約好了的。可是他沒來。',
        options: [
            { text: 'それなのに', reason: '正確！「それなのに」表示「儘管如此/可是…」。' },
            { text: 'それにしても', reason: '「それにしても」表示「即便如此」，語感不同。' },
            { text: 'それなら', reason: '「それなら」表示「那麼…」，語意不合。' },
            { text: 'そうすると', reason: '「そうすると」表示「那樣一來…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「それなのに」表示失望的逆接',
            analysis: '「それなのに」連接兩個句子，表示前面的事實本應導致某個結果，但實際結果相反。帶有失望。',
            comparisons: ['それなのに：可是…（失望）', 'それにもかかわらず：儘管如此…（正式）'],
            commonMistakes: ['○ それなのに来なかった / × それなのにで来なかった → 不加「で」'],
        },
    },
    // ━━━ はともかく (regardless of / leaving aside) ━━━
    {
        id: 'g_n2_167', category: 'grammar', level: 'N2', tags: ['topic', 'aside'],
        stem: '味{あじ}___、見{み}た目{め}はきれいだ。',
        stemZh: '味道姑且不論，外觀很漂亮。',
        options: [
            { text: 'はともかく', reason: '正確！「はともかく」表示「暫且不論…」。' },
            { text: 'はもとより', reason: '「はもとより」表示「不用說…」，語意不同。' },
            { text: 'はもちろん', reason: '「はもちろん」表示「當然…」，語意不同。' },
            { text: 'はおろか', reason: '「はおろか」表示「不用說…連…都」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はともかく」暫時擱置話題',
            analysis: '「はともかく」表示暫時不討論某個話題，先談論另一個方面。',
            comparisons: ['はともかく：暫且不論…', 'はともあれ：且不說…（更書面）'],
            commonMistakes: ['○ 味はともかく / × 味のはともかく → 名詞接「は」再接「ともかく」'],
        },
    },
    // ━━━ 要するに (in short) ━━━
    {
        id: 'g_n2_168', category: 'grammar', level: 'N2', tags: ['summary'],
        stem: '色々{いろいろ}言{い}ったが、___もっと努力{どりょく}が必要{ひつよう}だということだ。',
        stemZh: '說了很多，總而言之就是需要更加努力。',
        options: [
            { text: '要{よう}するに', reason: '正確！「要するに」表示「總而言之/簡言之」。' },
            { text: 'つまり', reason: '「つまり」也表示「也就是說」，但「要するに」更強調歸納。' },
            { text: 'すなわち', reason: '「すなわち」表示「即…」，更正式。' },
            { text: 'ということは', reason: '「ということは」表示「也就是說…」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「要するに」歸納總結',
            analysis: '「要するに」用於將前面的長篇大論歸納為一個簡單的結論。',
            comparisons: ['要するに：總而言之（歸納）', 'つまり：也就是說（換句話說）'],
            commonMistakes: ['○ 要するに努力が必要だ / × 要するには努力が必要だ → 不加「は」'],
        },
    },
    // ━━━ ゆえに (therefore / because of) ━━━
    {
        id: 'g_n2_169', category: 'grammar', level: 'N2', tags: ['reason', 'formal'],
        stem: '彼{かれ}は若{わか}い___、経験{けいけん}が不足{ふそく}している。',
        stemZh: '因為他年輕，所以經驗不足。',
        options: [
            { text: 'がゆえに', reason: '正確！「ゆえに」表示「因此/所以」，書面語。' },
            { text: 'からこそ', reason: '「からこそ」表示「正因為…」，語感不同。' },
            { text: 'だけに', reason: '「だけに」表示「正因為…所以更…」，語意不完全相同。' },
            { text: 'ばかりに', reason: '「ばかりに」表示「只因為…（壞結果）」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ゆえに」書面因果',
            analysis: '「ゆえに」是非常書面的因果表現，相當於「だから」的文語版。',
            comparisons: ['ゆえに：因此…（書面）', 'だから：所以…（口語）', 'したがって：因此…（正式）'],
            commonMistakes: ['○ 若いがゆえに / ○ 若さゆえに → 可接形容詞加「が」或名詞'],
        },
    },
    // ━━━ につき (due to / per) ━━━
    {
        id: 'g_n2_170', category: 'grammar', level: 'N2', tags: ['formal', 'notice'],
        stem: '工事中{こうじちゅう}___、通行{つうこう}禁止{きんし}。',
        stemZh: '施工中，禁止通行。',
        options: [
            { text: 'につき', reason: '正確！「につき」表示「因為…」，用於正式告示。' },
            { text: 'について', reason: '「について」表示「關於…」，語意不合。' },
            { text: 'にとって', reason: '「にとって」表示「對…來說」，語意不合。' },
            { text: 'にかけて', reason: '「にかけて」表示「到…為止」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「につき」用於正式告示',
            analysis: '「につき」用於正式公告或告示中，表示原因或比率。',
            comparisons: ['につき：因為…（告示用語）', 'のため：因為…（較一般）'],
            commonMistakes: ['○ 工事中につき / × 工事中のにつき → 名詞直接接「につき」'],
        },
    },
    // ━━━ につけ (whenever / whether ~ or ~) ━━━
    {
        id: 'g_n2_171', category: 'grammar', level: 'N2', tags: ['trigger', 'emotion'],
        stem: 'この歌{うた}を聞{き}く___、学生{がくせい}時代{じだい}を思{おも}い出{だ}す。',
        stemZh: '每當聽到這首歌，就想起學生時代。',
        options: [
            { text: 'につけ', reason: '正確！「につけ」表示「每當…就…」。' },
            { text: 'につき', reason: '「につき」表示「因為…/每…」（告示），語意不同。' },
            { text: 'について', reason: '「について」表示「關於…」，語意不合。' },
            { text: 'につれて', reason: '「につれて」表示「隨著…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「につけ」表示觸發聯想',
            analysis: '「につけ」表示每當遇到某個觸發點就會想到或感到某事。常與感情動詞搭配。',
            comparisons: ['につけ：每當…就…（觸發聯想）', 'たびに：每次…就…（同義，較口語）'],
            commonMistakes: ['○ 聞くにつけ / × 聞いたにつけ → 用辭書形接「につけ」'],
        },
    },
    // ━━━ にて (at / by means of - formal) ━━━
    {
        id: 'g_n2_172', category: 'grammar', level: 'N2', tags: ['formal', 'location'],
        stem: '詳細{しょうさい}はメール___お知{し}らせいたします。',
        stemZh: '詳情將以電子郵件通知。',
        options: [
            { text: 'にて', reason: '正確！「にて」是「で」的正式表現，表示手段或場所。' },
            { text: 'にも', reason: '「にも」表示「也在…」，語意不合。' },
            { text: 'には', reason: '「には」表示「在…」，語法不合此處。' },
            { text: 'にと', reason: '語法不正確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にて」是「で」的書面語',
            analysis: '「にて」相當於助詞「で」，用於正式文書、書信或商務場合。',
            comparisons: ['にて：在…/以…（書面）', 'で：在…/以…（一般）'],
            commonMistakes: ['○ メールにてお知らせします / × メールにておしらせする → 配合正式語體'],
        },
    },
    // ━━━ のもとで (under) ━━━
    {
        id: 'g_n2_173', category: 'grammar', level: 'N2', tags: ['formal', 'under'],
        stem: '先生{せんせい}のご指導{しどう}___、論文{ろんぶん}を完成{かんせい}させた。',
        stemZh: '在老師的指導下，完成了論文。',
        options: [
            { text: 'の下{もと}で', reason: '正確！「の下で」表示「在…之下」。' },
            { text: 'の上{うえ}で', reason: '「の上で」表示「在…之上/方面」，語意不同。' },
            { text: 'の中{なか}で', reason: '「の中で」表示「在…之中」，語意不完全相同。' },
            { text: 'の前{まえ}で', reason: '「の前で」表示「在…前面」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「の下で」表示在指導/保護下',
            analysis: '「の下で」表示在某人的指導、保護或影響下進行某事。',
            comparisons: ['の下で：在…之下（指導/保護）', 'のもとに：在…之下（同義，更書面）'],
            commonMistakes: ['○ 指導の下で / × 指導の下に → 「の下で」和「の下に」都可以'],
        },
    },
    // ━━━ せいか (perhaps because) ━━━
    {
        id: 'g_n2_174', category: 'grammar', level: 'N2', tags: ['reason', 'uncertain'],
        stem: '年{とし}の___、最近{さいきん}疲{つか}れやすくなった。',
        stemZh: '也許是因為年紀的關係，最近容易累了。',
        options: [
            { text: 'せいか', reason: '正確！「せいか」表示「也許是因為…」。' },
            { text: 'せいで', reason: '「せいで」表示確定的（壞）原因，不含不確定感。' },
            { text: 'おかげか', reason: '「おかげか」也可以，但「おかげ」通常用於好事。' },
            { text: 'ためか', reason: '「ためか」也表示「也許因為…」，語感相近。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「せいか」表示不確定的原因',
            analysis: '「せいか」表示「也許是因為…」，對原因不太確定時使用。「か」表示推測。',
            comparisons: ['せいか：也許因為…（不確定）', 'せいで：因為…（確定，負面）'],
            commonMistakes: ['○ 年のせいか / × 年がせいか → 名詞接「の」再接「せいか」'],
        },
    },
    // ━━━ 直ちに (immediately) ━━━
    {
        id: 'g_n2_175', category: 'grammar', level: 'N2', tags: ['time', 'formal'],
        stem: '火災{かさい}が発生{はっせい}したら、___避難{ひなん}してください。',
        stemZh: '發生火災的話，請立即避難。',
        options: [
            { text: '直{ただ}ちに', reason: '正確！「直ちに」表示「立即/馬上」，正式用語。' },
            { text: 'やがて', reason: '「やがて」表示「不久…」，速度太慢。' },
            { text: 'しだいに', reason: '「しだいに」表示「逐漸…」，語意不合。' },
            { text: 'いよいよ', reason: '「いよいよ」表示「終於…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「直ちに」正式的立即',
            analysis: '「直ちに」是比「すぐに」更正式的表現，常用於緊急通知或指示。',
            comparisons: ['直ちに：立即（正式）', 'すぐに：馬上（一般）', '即座に：當即（書面）'],
            commonMistakes: ['○ 直ちに避難してください / × 直ちで避難してください → 不用「で」'],
        },
    },
    // ━━━ そうすると (if that happens / then) ━━━
    {
        id: 'g_n2_176', category: 'grammar', level: 'N2', tags: ['consequence', 'logic'],
        stem: 'このボタンを押{お}します。___、画面{がめん}が変{か}わります。',
        stemZh: '按這個按鈕，那樣一來畫面就會改變。',
        options: [
            { text: 'そうすると', reason: '正確！「そうすると」表示「那樣做的話/那樣一來」。' },
            { text: 'そのうえ', reason: '「そのうえ」表示「而且…」，語意不同。' },
            { text: 'それにしても', reason: '「それにしても」表示「即便如此…」，語意不合。' },
            { text: 'それなら', reason: '「それなら」表示「如果那樣的話」，語感稍有不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「そうすると」表示因果推理',
            analysis: '「そうすると」表示如果按照前面的做法，就會出現後面的結果。',
            comparisons: ['そうすると：那樣一來…（推理）', 'すると：於是…（敘述）', 'それなら：如果那樣…（假設）'],
            commonMistakes: ['○ そうすると画面が変わる / × そうすると画面は変わった → 表示必然結果用非過去形'],
        },
    },
    // ━━━ 少なくとも (at least) ━━━
    {
        id: 'g_n2_177', category: 'grammar', level: 'N2', tags: ['minimum'],
        stem: '___一時間{いちじかん}はかかるだろう。',
        stemZh: '至少需要一個小時吧。',
        options: [
            { text: '少{すく}なくとも', reason: '正確！「少なくとも」表示「至少…」。' },
            { text: 'せめて', reason: '「せめて」表示「起碼…」，但更偏向願望。' },
            { text: 'せいぜい', reason: '「せいぜい」表示「頂多…」，語意相反。' },
            { text: 'たかだか', reason: '「たかだか」表示「頂多…」，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「少なくとも」客觀最低限度',
            analysis: '「少なくとも」用於客觀地表示最低限度的數量或程度。',
            comparisons: ['少なくとも：至少…（客觀）', 'せめて：至少…（願望）', 'せいぜい：頂多…（上限）'],
            commonMistakes: ['○ 少なくとも一時間 / × 少なくても一時間 → 「少なくとも」不是「少なくても」'],
        },
    },
    // ━━━ 及び (and / as well as) ━━━
    {
        id: 'g_n2_178', category: 'grammar', level: 'N2', tags: ['formal', 'conjunction'],
        stem: '参加者{さんかしゃ}の氏名{しめい}___住所{じゅうしょ}をご記入{きにゅう}ください。',
        stemZh: '請填寫參加者的姓名及地址。',
        options: [
            { text: '及{およ}び', reason: '正確！「及び」表示「以及/和」，正式用語。' },
            { text: 'あるいは', reason: '「あるいは」表示「或者…」，語意不同。' },
            { text: 'もしくは', reason: '「もしくは」表示「或者…」，語意不同。' },
            { text: 'ないし', reason: '「ないし」表示「或者/乃至…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「及び」正式並列連接',
            analysis: '「及び」是「と」的正式書面表現，用於法律文書、公文等。',
            comparisons: ['及び：以及（正式）', 'と：和（一般）', '並びに：以及（更正式，用於大項目）'],
            commonMistakes: ['○ 氏名及び住所 / × 氏名の及び住所 → 名詞直接接「及び」'],
        },
    },
    // ━━━ あるいは (or / perhaps) ━━━
    {
        id: 'g_n2_179', category: 'grammar', level: 'N2', tags: ['alternative', 'formal'],
        stem: '電話{でんわ}、___メールでご連絡{れんらく}ください。',
        stemZh: '請用電話或電子郵件聯繫。',
        options: [
            { text: 'あるいは', reason: '正確！「あるいは」表示「或者…」，正式用語。' },
            { text: '及{およ}び', reason: '「及び」表示「以及/和」，語意不同（並列而非選擇）。' },
            { text: 'しかも', reason: '「しかも」表示「而且…」，語意不合。' },
            { text: 'したがって', reason: '「したがって」表示「因此…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「あるいは」表示選擇',
            analysis: '「あるいは」用於提供兩個或多個選項，相當於「または」的較書面表現。',
            comparisons: ['あるいは：或者（較書面）', 'または：或者（一般）', 'もしくは：或者（最正式）'],
            commonMistakes: ['○ 電話、あるいはメール / × 電話のあるいはメール → 不加「の」'],
        },
    },
    // ━━━ もっとも (although / to be fair) ━━━
    {
        id: 'g_n2_180', category: 'grammar', level: 'N2', tags: ['concession', 'qualification'],
        stem: '彼{かれ}の意見{いけん}は正{ただ}しい。___、全員{ぜんいん}が賛成{さんせい}するかは分{わ}からない。',
        stemZh: '他的意見是正確的。不過，全體人員是否都贊成就不知道了。',
        options: [
            { text: 'もっとも', reason: '正確！「もっとも」表示「話雖如此/不過也難怪」。' },
            { text: 'しかし', reason: '「しかし」表示「然而…」，語感太直接。' },
            { text: 'ところが', reason: '「ところが」表示出乎意料「然而」，語感不同。' },
            { text: 'それでも', reason: '「それでも」表示「即便如此…」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「もっとも」補充保留意見',
            analysis: '「もっとも」用於在肯定前面的說法後，補充一些保留或限定條件。',
            comparisons: ['もっとも：不過…（保留條件）', 'ただし：但是…（附加條件）'],
            commonMistakes: ['○ もっとも、全員が… / × もっとも全員が… → 通常加逗號'],
        },
    },
    // ━━━ たまえ (do ~ / imperative - superior) ━━━
    {
        id: 'g_n2_181', category: 'grammar', level: 'N2', tags: ['imperative', 'superior'],
        stem: 'もっと頑張{がんば}り___。',
        stemZh: '再加把勁吧。（上對下命令）',
        options: [
            { text: 'たまえ', reason: '正確！「たまえ」是上位者對下位者的柔和命令。' },
            { text: 'なさい', reason: '「なさい」也是命令，但語感不同。' },
            { text: 'ください', reason: '「ください」是敬語請求，語感不同。' },
            { text: 'ましょう', reason: '「ましょう」表示邀請「一起…吧」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たまえ」上對下的命令',
            analysis: '「ます形＋たまえ」是上位者（老師、上司等）對下位者使用的柔和命令形。帶有父輩語氣。',
            comparisons: ['たまえ：…吧（上對下，溫和）', 'なさい：做…（上對下，較強）', 'ろ/え：做…（命令形，最強）'],
            commonMistakes: ['○ 頑張りたまえ / × 頑張るたまえ → 用ます形「頑張り」接「たまえ」'],
        },
    },
    // ━━━ てでも (even if one has to) ━━━
    {
        id: 'g_n2_182', category: 'grammar', level: 'N2', tags: ['determination', 'extreme'],
        stem: '嘘{うそ}をつい___、彼女{かのじょ}を守{まも}りたい。',
        stemZh: '就算要說謊也想保護她。',
        options: [
            { text: 'てでも', reason: '正確！「てでも」表示「就算…也要…」，表示不惜代價。' },
            { text: 'ても', reason: '「ても」也表讓步，但「てでも」語氣更強烈。' },
            { text: 'てから', reason: '「てから」表示「做了…之後」，語意不同。' },
            { text: 'てまで', reason: '「てまで」表示「甚至到…的地步」，語感稍有不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てでも」表示不惜一切',
            analysis: '「てでも」表示即使要付出巨大的代價或做出極端的行為也要達成目的。',
            comparisons: ['てでも：就算…也要…（不惜代價）', 'ても：即使…也…（一般讓步）'],
            commonMistakes: ['○ 嘘をついてでも / × 嘘をつくてでも → 用て形接「でも」'],
        },
    },
    // ━━━ てまで (to the extent of doing) ━━━
    {
        id: 'g_n2_183', category: 'grammar', level: 'N2', tags: ['extent', 'criticism'],
        stem: '借金{しゃっきん}をし___、ブランド品{ひん}を買{か}う必要{ひつよう}があるのか。',
        stemZh: '有必要到借錢的地步去買名牌嗎？',
        options: [
            { text: 'てまで', reason: '正確！「てまで」表示「甚至到…的程度」，帶批評語氣。' },
            { text: 'てでも', reason: '「てでも」表示「就算…也要」，語感不同。' },
            { text: 'ても', reason: '「ても」表示讓步，語感不同。' },
            { text: 'てから', reason: '「てから」表示「做了…之後」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てまで」表示過度行為的批評',
            analysis: '「てまで」表示做到了極端的程度，常帶有批評或驚訝的語氣。',
            comparisons: ['てまで：甚至到…的程度（批評）', 'てでも：就算…也要（決心）'],
            commonMistakes: ['○ 借金をしてまで / × 借金するてまで → 用て形接「まで」'],
        },
    },
    // ━━━ て当然だ (natural / no wonder) ━━━
    {
        id: 'g_n2_184', category: 'grammar', level: 'N2', tags: ['evaluation', 'natural'],
        stem: 'あれだけ練習{れんしゅう}したのだから、勝{か}っ___。',
        stemZh: '都練習了那麼多，贏了也是理所當然的。',
        options: [
            { text: 'て当然{とうぜん}だ', reason: '正確！「て当然だ」表示「…是理所當然的」。' },
            { text: 'てもいい', reason: '「てもいい」表示「可以…」，語意不同。' },
            { text: 'てはいけない', reason: '「てはいけない」表示「不可以…」，語意相反。' },
            { text: 'てしまった', reason: '「てしまった」表示完成/遺憾，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「て当然だ」表示理所當然',
            analysis: '「て当然だ」表示根據前面的條件，後面的結果是完全可以預料到的。',
            comparisons: ['て当然だ：…是理所當然的', 'ても当然だ：即使…也理所當然', 'のも無理はない：也難怪…'],
            commonMistakes: ['○ 勝って当然だ / × 勝つて当然だ → 用て形接「当然だ」'],
        },
    },
    // ━━━ てはならない (must not) ━━━
    {
        id: 'g_n2_185', category: 'grammar', level: 'N2', tags: ['prohibition', 'formal'],
        stem: 'この場所{ばしょ}で写真{しゃしん}を撮{と}っ___。',
        stemZh: '在這個地方不可以拍照。',
        options: [
            { text: 'てはならない', reason: '正確！「てはならない」表示「不可以…」（正式禁止）。' },
            { text: 'てはいけない', reason: '「てはいけない」也表禁止，但較口語。' },
            { text: 'てはいられない', reason: '「てはいられない」表示「不能再…了」，語意不同。' },
            { text: 'てはだめだ', reason: '「てはだめだ」表示「不行…」，過於口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てはならない」正式禁止',
            analysis: '「てはならない」是最正式的禁止表現，常用於法律、規則等。',
            comparisons: ['てはならない：不可以…（法律/規則）', 'てはいけない：不可以…（一般禁止）', 'てはだめだ：不行…（口語）'],
            commonMistakes: ['○ 撮ってはならない / × 撮るてはならない → 用て形接「はならない」'],
        },
    },
    // ━━━ ては〜ては (repeatedly doing ~ and ~) ━━━
    {
        id: 'g_n2_186', category: 'grammar', level: 'N2', tags: ['repetition'],
        stem: '書{か}い___消{け}し、消{け}し___書{か}いて、なかなか完成{かんせい}しない。',
        stemZh: '寫了擦、擦了寫，遲遲完不成。',
        options: [
            { text: 'ては…ては', reason: '正確！「ては〜ては」表示反覆做兩個相反的動作。' },
            { text: 'たり…たり', reason: '「たり〜たり」也表反覆，但語感不同。' },
            { text: 'て…て', reason: '「て〜て」是順序連接，不強調反覆。' },
            { text: 'ても…ても', reason: '「ても〜ても」表示讓步，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ては〜ては」表示反覆動作',
            analysis: '「ては〜ては」表示反覆進行兩個相反或交替的動作，常帶有焦躁或無奈的語氣。',
            comparisons: ['ては〜ては：又…又…（反覆/焦躁）', 'たり〜たり：一會…一會…（列舉）'],
            commonMistakes: ['○ 書いては消し / × 書いてから消し → 「ては」直接接動詞ます形'],
        },
    },
    // ━━━ と同時に (at the same time) ━━━
    {
        id: 'g_n2_187', category: 'grammar', level: 'N2', tags: ['simultaneous', 'dual'],
        stem: '彼{かれ}は教師{きょうし}である___、作家{さっか}でもある。',
        stemZh: '他是教師的同時，也是作家。',
        options: [
            { text: 'と同時{どうじ}に', reason: '正確！「と同時に」表示「在…的同時也…」。' },
            { text: 'と共{とも}に', reason: '「と共に」也可表示「與…同時」，但語感略有不同。' },
            { text: 'と一緒{いっしょ}に', reason: '「と一緒に」表示「一起…」，語意不完全相同。' },
            { text: 'と反対{はんたい}に', reason: '「と反対に」表示「與…相反」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と同時に」表示雙重身份/同時發生',
            analysis: '「と同時に」表示兩件事同時成立或同時發生，常用於描述雙重身份。',
            comparisons: ['と同時に：在…的同時（雙重/同時）', 'と共に：與…一起/同時'],
            commonMistakes: ['○ 教師であると同時に / × 教師と同時に → 用「である」連接'],
        },
    },
    // ━━━ といった (such as) ━━━
    {
        id: 'g_n2_188', category: 'grammar', level: 'N2', tags: ['example', 'listing'],
        stem: 'りんごやみかん___果物{くだもの}が好{す}きだ。',
        stemZh: '喜歡蘋果、橘子之類的水果。',
        options: [
            { text: 'といった', reason: '正確！「といった」表示「諸如…之類的」。' },
            { text: 'という', reason: '「という」表示「叫做…」，語意不完全相同。' },
            { text: 'として', reason: '「として」表示「作為…」，語意不合。' },
            { text: 'とした', reason: '「とした」語法不正確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「といった」列舉例子',
            analysis: '「といった」用於列舉幾個例子作為代表，後面接總稱名詞。',
            comparisons: ['といった：諸如…之類的', 'などの：…等的（一般）', 'をはじめとする：以…為首的'],
            commonMistakes: ['○ りんごやみかんといった果物 / × りんごとみかんといった果物 → 列舉用「や」'],
        },
    },
    // ━━━ ということは (that means) ━━━
    {
        id: 'g_n2_189', category: 'grammar', level: 'N2', tags: ['inference', 'logic'],
        stem: '彼{かれ}が辞{や}めた？___、新{あたら}しい人{ひと}を探{さが}さなければならないね。',
        stemZh: '他辭職了？也就是說，必須找新人了呢。',
        options: [
            { text: 'ということは', reason: '正確！「ということは」表示「也就是說…」。' },
            { text: 'というのは', reason: '「というのは」表示「所謂的…是」，語意不同。' },
            { text: 'というのに', reason: '「というのに」表示「明明…卻…」，語意不合。' },
            { text: 'というか', reason: '「というか」表示「該怎麼說…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ということは」推導結論',
            analysis: '「ということは」用於從前面的資訊推導出後面的結論或含義。',
            comparisons: ['ということは：也就是說…（推導）', '要するに：總而言之…（歸納）'],
            commonMistakes: ['○ ということは新しい人を… / × ということで新しい人を… → 「ということは」後接推論'],
        },
    },
    // ━━━ というふうに (in such a way that) ━━━
    {
        id: 'g_n2_190', category: 'grammar', level: 'N2', tags: ['manner'],
        stem: '先{さき}に理論{りろん}を学{まな}んで、それから実践{じっせん}する___進{すす}めましょう。',
        stemZh: '先學理論，然後實踐這樣地來推進吧。',
        options: [
            { text: 'というふうに', reason: '正確！「というふうに」表示「像…那樣地」。' },
            { text: 'というように', reason: '「というように」也可以，但「ふうに」更口語。' },
            { text: 'というのに', reason: '「というのに」表示「明明…卻…」，語意不合。' },
            { text: 'ということで', reason: '「ということで」表示「因此…」，語意不完全相同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「というふうに」描述方式',
            analysis: '「というふうに」用於描述某種方式或做法，相當於「というように」的口語版。',
            comparisons: ['というふうに：像…那樣地（口語）', 'というように：像…那樣地（書面）'],
            commonMistakes: ['○ するというふうに / × するのというふうに → 動詞普通形直接接'],
        },
    },
    // ━━━ ふうに (in a ~ way) ━━━
    {
        id: 'g_n2_191', category: 'grammar', level: 'N2', tags: ['manner'],
        stem: 'こんな___やればうまくいくよ。',
        stemZh: '這樣做的話會順利的。',
        options: [
            { text: 'ふうに', reason: '正確！「ふうに」表示「這樣地/那樣地」。' },
            { text: 'ように', reason: '「ように」也表示「像…那樣」，但接續不同。' },
            { text: 'みたいに', reason: '「みたいに」表示「像…一樣」，語感不同。' },
            { text: 'ところに', reason: '「ところに」表示時間點，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ふうに」表示方式',
            analysis: '「こんなふうに/そんなふうに/あんなふうに」表示「這樣地/那樣地/那樣地」。',
            comparisons: ['ふうに：…那樣地（方式）', 'ように：像…那樣（目標/比喻）'],
            commonMistakes: ['○ こんなふうに / × こんなふうで → 修飾動詞用「に」'],
        },
    },
    // ━━━ げ (seeming / appearing) ━━━
    {
        id: 'g_n2_192', category: 'grammar', level: 'N2', tags: ['appearance'],
        stem: '彼女{かのじょ}は悲{かな}し___な表情{ひょうじょう}をしていた。',
        stemZh: '她露出一副悲傷的表情。',
        options: [
            { text: 'げ', reason: '正確！「げ」表示「看起來好像…的樣子」。' },
            { text: 'がち', reason: '「がち」表示「容易…/常常…」，語意不同。' },
            { text: 'っぽい', reason: '「っぽい」表示「有…的傾向」，語感不同。' },
            { text: 'らしい', reason: '「らしい」表示「好像…」，接續不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「げ」表示外表看起來',
            analysis: '「形容詞語幹＋げ」表示從外表看來好像有…的樣子，形成な形容詞。',
            comparisons: ['悲しげ：看起來悲傷', '嬉しげ：看起來高興', '不安げ：看起來不安'],
            commonMistakes: ['○ 悲しげな表情 / × 悲しいげな表情 → 去「い」加「げ」'],
        },
    },
    // ━━━ 果たして (as expected / really) ━━━
    {
        id: 'g_n2_193', category: 'grammar', level: 'N2', tags: ['confirmation', 'question'],
        stem: '___彼{かれ}の言{い}ったことは本当{ほんとう}だろうか。',
        stemZh: '他說的話究竟是真的嗎？',
        options: [
            { text: '果{は}たして', reason: '正確！「果たして」表示疑問「究竟…嗎？」。' },
            { text: 'まさか', reason: '「まさか」表示「難道…」，語感不同。' },
            { text: 'さすがに', reason: '「さすがに」表示「不愧是…」，語意不合。' },
            { text: 'やはり', reason: '「やはり」表示「果然…」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「果たして」用於疑問',
            analysis: '「果たして」用在疑問句中表示「究竟…是否真的如此」，帶有懷疑語氣。也可用於「果然如此」。',
            comparisons: ['果たして…だろうか：究竟…嗎（疑問）', '果たして…だった：果然…（確認）'],
            commonMistakes: ['○ 果たして本当だろうか / × 果たして本当だ → 疑問用法需配「だろうか」等'],
        },
    },
    // ━━━ 逆に (conversely) ━━━
    {
        id: 'g_n2_194', category: 'grammar', level: 'N2', tags: ['contrast'],
        stem: '手伝{てつだ}おうとしたが、___邪魔{じゃま}になってしまった。',
        stemZh: '想幫忙，結果反而成了妨礙。',
        options: [
            { text: '逆{ぎゃく}に', reason: '正確！「逆に」表示「反而/相反地」。' },
            { text: 'かえって', reason: '「かえって」也表示「反而」，語感相近。' },
            { text: 'やはり', reason: '「やはり」表示「果然」，語意不合。' },
            { text: 'まして', reason: '「まして」表示「更何況…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「逆に」表示結果相反',
            analysis: '「逆に」表示結果與意圖或預期完全相反。比「かえって」更客觀。',
            comparisons: ['逆に：相反地（客觀）', 'かえって：反而…（出乎意料）'],
            commonMistakes: ['○ 逆に邪魔になった / × 逆で邪魔になった → 用「に」不用「で」'],
        },
    },
    // ━━━ 恐らく (probably) ━━━
    {
        id: 'g_n2_195', category: 'grammar', level: 'N2', tags: ['inference', 'probability'],
        stem: '___明日{あした}は雨{あめ}だろう。',
        stemZh: '恐怕明天會下雨吧。',
        options: [
            { text: '恐{おそ}らく', reason: '正確！「恐らく」表示「恐怕…/大概…」。' },
            { text: 'きっと', reason: '「きっと」表示「一定…」，確信度更高。' },
            { text: 'もしかしたら', reason: '「もしかしたら」表示「說不定…」，確信度更低。' },
            { text: 'まさか', reason: '「まさか」表示「難道…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「恐らく」表示較高確率的推測',
            analysis: '「恐らく」表示根據某種根據進行的推測，確信度約70-80%。比「多分」更書面。',
            comparisons: ['恐らく：恐怕…（70-80%，書面）', '多分：大概…（60-70%，口語）', 'きっと：一定…（90%以上）'],
            commonMistakes: ['○ 恐らく雨だろう / × 恐らく雨だ → 需搭配「だろう」「と思う」等推測表現'],
        },
    },
    // ━━━ 幸いなことに (fortunately) ━━━
    {
        id: 'g_n2_196', category: 'grammar', level: 'N2', tags: ['emotion', 'fortune'],
        stem: '___、怪我{けが}は軽{かる}かった。',
        stemZh: '幸運的是，傷勢很輕。',
        options: [
            { text: '幸{さいわ}いなことに', reason: '正確！「幸いなことに」表示「幸運的是…」。' },
            { text: '残念{ざんねん}なことに', reason: '「残念なことに」表示「遺憾的是…」，語意相反。' },
            { text: '驚{おどろ}いたことに', reason: '「驚いたことに」表示「令人驚訝的是…」，語意不同。' },
            { text: '困{こま}ったことに', reason: '「困ったことに」表示「困擾的是…」，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「幸いなことに」表示慶幸',
            analysis: '「幸いなことに」用於句首表示對後面的好結果感到慶幸。',
            comparisons: ['幸いなことに：幸運的是…', '幸い：幸好…（更簡潔）'],
            commonMistakes: ['○ 幸いなことに / × 幸いことに → 需要「な」'],
        },
    },
    // ━━━ ようでは (if ~ continues) ━━━
    {
        id: 'g_n2_197', category: 'grammar', level: 'N2', tags: ['criticism', 'condition'],
        stem: 'こんな簡単{かんたん}な問題{もんだい}も解{と}けない___、試験{しけん}に合格{ごうかく}できないだろう。',
        stemZh: '如果連這麼簡單的問題都解不出來，考試大概過不了吧。',
        options: [
            { text: 'ようでは', reason: '正確！「ようでは」表示「如果…的話（不好的預期）」。' },
            { text: 'ようなら', reason: '「ようなら」表示「如果像…的話」，語感稍有不同。' },
            { text: 'ようにする', reason: '「ようにする」表示「努力做到…」，語意不合。' },
            { text: 'ようになる', reason: '「ようになる」表示「變得能夠…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようでは」暗示不好的結果',
            analysis: '「ようでは」表示如果某種不好的情況持續下去，結果會更糟。帶有批評或擔憂。',
            comparisons: ['ようでは：如果…的話（批評/擔憂）', 'ようなら：如果像…的話（中性）'],
            commonMistakes: ['○ 解けないようでは / × 解けるようでは → 通常接否定或不好的狀態'],
        },
    },
    // ━━━ ようではないか (let's / why don't we) ━━━
    {
        id: 'g_n2_198', category: 'grammar', level: 'N2', tags: ['proposal', 'formal'],
        stem: 'みんなで力{ちから}を合{あ}わせて頑張{がんば}ろう___。',
        stemZh: '讓我們大家齊心協力加油吧。',
        options: [
            { text: 'ではないか', reason: '正確！「ようではないか」表示「讓我們…吧」，正式呼籲。' },
            { text: 'ではないだろう', reason: '語法不正確。' },
            { text: 'ではないのか', reason: '表示疑問「不是…嗎」，語意不同。' },
            { text: 'ではない', reason: '「ではない」表示否定，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようではないか」正式呼籲',
            analysis: '「意向形＋ではないか」是正式場合呼籲大家一起行動的表現，常用於演講。',
            comparisons: ['ようではないか：讓我們…吧（正式呼籲）', 'ましょう：…吧（一般邀請）'],
            commonMistakes: ['○ 頑張ろうではないか / × 頑張るではないか → 用意向形'],
        },
    },
    // ━━━ ようが (no matter how) ━━━
    {
        id: 'g_n2_199', category: 'grammar', level: 'N2', tags: ['concession', 'strong'],
        stem: '何{なに}を言{い}われ___、気{き}にしない。',
        stemZh: '不管被說什麼，都不在意。',
        options: [
            { text: 'ようが', reason: '正確！「ようが」表示「無論…也…」。' },
            { text: 'ようと', reason: '「ようと」也可以，與「ようが」同義。' },
            { text: 'ような', reason: '「ような」表示比喻，語意不同。' },
            { text: 'ように', reason: '「ように」表示目的或方式，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようが」表示強烈讓步',
            analysis: '「意向形＋が/と」表示無論前面的情況如何，後面的結論都不會改變。語氣強烈。',
            comparisons: ['ようが：無論…也…（強烈）', 'ても：即使…也…（一般）'],
            commonMistakes: ['○ 言われようが / × 言われるようが → 用意向形（被動意向形）'],
        },
    },
    // ━━━ ようにも〜ない (even if one wants to, can't) ━━━
    {
        id: 'g_n2_200', category: 'grammar', level: 'N2', tags: ['impossibility', 'frustration'],
        stem: '忘{わす}れ___忘{わす}れられない思{おも}い出{で}がある。',
        stemZh: '有想忘也忘不了的回憶。',
        options: [
            { text: 'ようにも', reason: '正確！「ようにも〜ない」表示「想…也做不到」。' },
            { text: 'ようとして', reason: '「ようとして」表示「試圖…」，語意不完全相同。' },
            { text: 'ようとも', reason: '「ようとも」表示「即使想…也…」，語感不同。' },
            { text: 'ようにして', reason: '「ようにして」表示「設法…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようにも〜ない」表示無法實現的願望',
            analysis: '「意向形＋にも＋可能否定」表示即使想做某事也做不到，帶有無奈和挫折感。',
            comparisons: ['ようにも〜ない：想…也（做不到）', 'ようとしても〜ない：即使試圖…也（做不到）'],
            commonMistakes: ['○ 忘れようにも忘れられない / × 忘れようにも忘れない → 後句用可能形否定'],
        },
    },
]
