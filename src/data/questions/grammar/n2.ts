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
    // ━━━ をはじめ (starting with / including) ━━━
    {
        id: 'g_n2_201', category: 'grammar', level: 'N2', tags: ['listing', 'representative'],
        stem: '東京{とうきょう}___、日本{にほん}には多{おお}くの大都市{だいとし}がある。',
        stemZh: '以東京為首，日本有很多大都市。',
        options: [
            { text: 'をはじめ', reason: '正確！「をはじめ」表示「以…為首」，列舉代表性的例子。' },
            { text: 'をもとに', reason: '「をもとに」表示「以…為基礎」，語意不同。' },
            { text: 'を通じて', reason: '「を通じて」表示「透過…」，語意不同。' },
            { text: 'をめぐって', reason: '「をめぐって」表示「圍繞著…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をはじめ」表示列舉代表性事物',
            analysis: '「をはじめ（として）」用於列舉最具代表性的事物，後面暗示還有其他類似的事物。',
            comparisons: ['をはじめ：以…為首（列舉代表）', 'をもとに：以…為基礎（根據）'],
            commonMistakes: ['○ 東京をはじめ / × 東京がはじめ → 用「を」不用「が」'],
        },
    },
    {
        id: 'g_n2_202', category: 'grammar', level: 'N2', tags: ['listing', 'representative'],
        stem: 'この大学{だいがく}では、英語{えいご}___、フランス語{ご}や中国語{ちゅうごくご}など多{おお}くの言語{げんご}が学{まな}べる。',
        stemZh: '這所大學以英語為首，可以學習法語和中文等多種語言。',
        options: [
            { text: 'をもとに', reason: '「をもとに」表示「以…為基礎」，不適合列舉語境。' },
            { text: 'をはじめとして', reason: '正確！「をはじめとして」表示「以…為首」。' },
            { text: 'に先立って', reason: '「に先立って」表示「在…之前」，語意不同。' },
            { text: 'に限らず', reason: '「に限らず」表示「不限於…」，語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「をはじめとして」是「をはじめ」的完整形式',
            analysis: '「をはじめ」和「をはじめとして」都可以使用，意思相同，表示列舉最具代表性的例子。',
            comparisons: ['をはじめ：以…為首（簡略形）', 'をはじめとして：以…為首（完整形）'],
            commonMistakes: ['○ 英語をはじめとして / ○ 英語をはじめ → 兩種都可以'],
        },
    },
    // ━━━ はもちろん (of course / needless to say) ━━━
    {
        id: 'g_n2_203', category: 'grammar', level: 'N2', tags: ['emphasis', 'addition'],
        stem: '彼{かれ}は日本語{にほんご}___、英語{えいご}もフランス語{ご}も話{はな}せる。',
        stemZh: '他不用說日語，英語和法語也會說。',
        options: [
            { text: 'はもとより', reason: '「はもとより」也可以，但較書面，「はもちろん」更口語常用。' },
            { text: 'に限らず', reason: '「に限らず」表示「不限於…」，語感稍有不同。' },
            { text: 'はもちろん', reason: '正確！「はもちろん」表示「不用說…（更何況）」。' },
            { text: 'はおろか', reason: '「はおろか」表示「別說…了」，語氣更強烈，暗示連基本的都…。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「はもちろん」表示理所當然、不言而喻',
            analysis: '「はもちろん」用於先提出理所當然的事實，再強調其他更進一步的內容。',
            comparisons: ['はもちろん：不用說（口語常用）', 'はもとより：不用說（書面語）', 'はおろか：別說了（語氣更強）'],
            commonMistakes: ['○ 日本語はもちろん / × 日本語がもちろん → 用「は」不用「が」'],
        },
    },
    {
        id: 'g_n2_204', category: 'grammar', level: 'N2', tags: ['emphasis', 'addition'],
        stem: 'このレストランは味{あじ}___、雰囲気{ふんいき}もサービスも素晴{すば}らしい。',
        stemZh: '這家餐廳不用說味道，氛圍和服務也都很出色。',
        options: [
            { text: 'はもちろん', reason: '正確！「はもちろん」表示前項理所當然，後項也一樣好。' },
            { text: 'ばかりか', reason: '「ばかりか」表示「不僅…而且」，但用法不同。' },
            { text: 'どころか', reason: '「どころか」表示程度大大超出預期，語感不同。' },
            { text: 'に反して', reason: '「に反して」表示「與…相反」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はもちろん」的固定搭配',
            analysis: '「AはもちろんBも」是固定句型，先列舉不言自明的A，再強調B也具有同樣的特質。',
            comparisons: ['はもちろん：前者理所當然，後者也是', 'ばかりか：不僅…而且（遞進）'],
            commonMistakes: ['○ 味はもちろん、雰囲気も / × 味はもちろん、雰囲気が → 後面常搭配「も」'],
        },
    },
    // ━━━ に至るまで (up to / even including) ━━━
    {
        id: 'g_n2_205', category: 'grammar', level: 'N2', tags: ['range', 'extent'],
        stem: '社長{しゃちょう}から新入{しんにゅう}社員{しゃいん}___、全員{ぜんいん}が参加{さんか}した。',
        stemZh: '從社長到新員工，全員都參加了。',
        options: [
            { text: 'にわたって', reason: '「にわたって」表示時間或範圍的持續，用法不同。' },
            { text: 'を通じて', reason: '「を通じて」表示「透過…」或「在整個…期間」，不適合。' },
            { text: 'に至るまで', reason: '正確！「に至るまで」表示「直到…為止」，強調範圍之廣。' },
            { text: 'に限って', reason: '「に限って」表示「偏偏…」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「に至るまで」表示範圍的極端端點',
            analysis: '「から…に至るまで」是常見搭配，表示從一端到另一端的整個範圍，強調涵蓋面之廣。',
            comparisons: ['に至るまで：直到…為止（強調範圍極端）', 'にわたって：在…範圍內（強調廣度）'],
            commonMistakes: ['○ 新入社員に至るまで / × 新入社員まで至って → 「に至るまで」是固定搭配'],
        },
    },
    {
        id: 'g_n2_206', category: 'grammar', level: 'N2', tags: ['range', 'extent'],
        stem: 'この辞書{じしょ}は基本的{きほんてき}な単語{たんご}から専門用語{せんもんようご}___収録{しゅうろく}している。',
        stemZh: '這本辭典從基本單字到專業用語都有收錄。',
        options: [
            { text: 'をはじめ', reason: '「をはじめ」表示列舉代表，不強調範圍的端點。' },
            { text: 'を問わず', reason: '「を問わず」表示「不論…」，用法不同。' },
            { text: 'に限らず', reason: '「に限らず」表示「不限於…」，語感不同。' },
            { text: 'に至るまで', reason: '正確！「に至るまで」強調範圍之廣，直到極端端點。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「から〜に至るまで」表示範圍的全面覆蓋',
            analysis: '「に至るまで」常與「から」搭配，表示「從…到（甚至）…」，強調涵蓋面極廣。',
            comparisons: ['に至るまで：直到…（強調極端）', 'まで：到…為止（一般）'],
            commonMistakes: ['○ 専門用語に至るまで / × 専門用語に至って → 「に至って」是不同文法'],
        },
    },
    // ━━━ だけましだ (at least / could be worse) ━━━
    {
        id: 'g_n2_207', category: 'grammar', level: 'N2', tags: ['comparison', 'consolation'],
        stem: '怪我{けが}はしたが、命{いのち}が助{たす}かった___。',
        stemZh: '雖然受了傷，但至少保住了性命，這已經算好了。',
        options: [
            { text: 'だけだ', reason: '「だけだ」表示「只是…」，沒有安慰的語感。' },
            { text: 'だけましだ', reason: '正確！「だけましだ」表示「至少…算好了」，在壞情況中找到安慰。' },
            { text: 'だけあって', reason: '「だけあって」表示「不愧是…」，語意不同。' },
            { text: 'だけに', reason: '「だけに」表示「正因為…」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「だけましだ」表示在不好的情況中的安慰',
            analysis: '「だけましだ」用於雖然情況不理想，但比最壞的結果好一些，表示「至少…算不錯了」。',
            comparisons: ['だけましだ：至少…算好了（安慰）', 'だけあって：不愧是…（稱讚）'],
            commonMistakes: ['○ 助かっただけましだ / × 助かるだけましだ → 前面用た形'],
        },
    },
    // ━━━ でしかない (nothing more than) ━━━
    {
        id: 'g_n2_208', category: 'grammar', level: 'N2', tags: ['limitation', 'dismissal'],
        stem: 'どんなに努力{どりょく}しても、結果{けっか}が出{で}なければ自己満足{じこまんぞく}___。',
        stemZh: '無論多努力，如果沒有成果，那也不過是自我滿足罷了。',
        options: [
            { text: 'にほかならない', reason: '「にほかならない」表示「正是…」，語意相反，是強調肯定。' },
            { text: 'に過ぎない', reason: '「に過ぎない」也可以表示「不過是…」，但「でしかない」語氣更強。' },
            { text: 'でしかない', reason: '正確！「でしかない」表示「只不過是…」，帶有否定評價的語氣。' },
            { text: 'に相違ない', reason: '「に相違ない」表示「肯定是…」，語意完全不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「でしかない」表示貶低性的限定',
            analysis: '「でしかない」和「に過ぎない」意思相近，都表示「只不過是…」，但「でしかない」更加口語化，且否定語氣更強。',
            comparisons: ['でしかない：只不過是…（較強否定）', 'に過ぎない：僅僅是…（較書面）'],
            commonMistakes: ['○ 自己満足でしかない / × 自己満足がしかない → 用「で」不用「が」'],
        },
    },
    // ━━━ だって (because / even / also) ━━━
    {
        id: 'g_n2_209', category: 'grammar', level: 'N2', tags: ['reason', 'excuse', 'informal'],
        stem: '「どうして遅刻{ちこく}したの？」「___、電車{でんしゃ}が止{と}まっていたんだもん。」',
        stemZh: '「為什麼遲到了？」「因為電車停駛了嘛。」',
        options: [
            { text: 'なぜなら', reason: '「なぜなら」是書面語，口語對話中不自然。' },
            { text: 'だって', reason: '正確！「だって」用於口語辯解，表示「因為…嘛」。' },
            { text: 'それで', reason: '「それで」表示「所以…」，不表示辯解。' },
            { text: 'すると', reason: '「すると」表示「於是…」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「だって」的口語辯解用法',
            analysis: '「だって」在口語中用於辯解或給理由，語氣帶有撒嬌或不滿的感覺，常與「もん/もの」搭配。',
            comparisons: ['だって：因為…嘛（口語辯解）', 'なぜなら：因為…（書面正式）'],
            commonMistakes: ['○ だって、電車が止まっていた → 口語中自然', '× なぜなら、電車が止まっていた → 口語中不自然'],
        },
    },
    // ━━━ 抜きにして (without / excluding) ━━━
    {
        id: 'g_n2_210', category: 'grammar', level: 'N2', tags: ['exclusion', 'aside'],
        stem: '冗談{じょうだん}は___、真面目{まじめ}に話{はな}し合{あ}おう。',
        stemZh: '撇開玩笑不談，我們認真討論吧。',
        options: [
            { text: '抜きにして', reason: '正確！「抜きにして」表示「撇開…不談」。' },
            { text: 'に限らず', reason: '「に限らず」表示「不限於…」，語意不同。' },
            { text: 'はともかく', reason: '「はともかく」也可以表示「暫且不談…」，但用法不同。' },
            { text: 'もかまわず', reason: '「もかまわず」表示「不顧…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「抜きにして」表示排除某事物',
            analysis: '「抜きにして」用於將某個要素排除在外，常見於「冗談は抜きにして」等慣用表現。',
            comparisons: ['抜きにして：撇開…不談', 'はともかく：暫且不論…', '抜きで：沒有…（省略）'],
            commonMistakes: ['○ 冗談は抜きにして / ○ 冗談抜きで → 兩種都可以使用'],
        },
    },
    // ━━━ ものか / もんか (absolutely not - additional) ━━━
    {
        id: 'g_n2_211', category: 'grammar', level: 'N2', tags: ['strong_negation', 'determination'],
        stem: 'あんな失礼{しつれい}な店{みせ}に二度{にど}と行{い}く___。',
        stemZh: '那麼無禮的店我絕不會再去。',
        options: [
            { text: 'はずだ', reason: '「はずだ」表示「應該…」，語意完全不同。' },
            { text: 'ことだ', reason: '「ことだ」表示建議「應該…」，語意不同。' },
            { text: 'ものだ', reason: '「ものだ」表示感嘆或常理，語意不同。' },
            { text: 'ものか', reason: '正確！「ものか」表示「絕不…」，強烈否定。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「ものか」表示強烈的否定決心',
            analysis: '「ものか」用於表達說話者堅決否定的態度，語氣非常強烈。口語中常說「もんか」。',
            comparisons: ['ものか：絕不…（強烈否定）', 'まい：不打算…（推量否定）'],
            commonMistakes: ['○ 行くものか / × 行ったものか → 前面用辭書形'],
        },
    },
    // ━━━ がきっかけで (triggered by / prompted by) ━━━
    {
        id: 'g_n2_212', category: 'grammar', level: 'N2', tags: ['trigger', 'cause'],
        stem: '留学{りゅうがく}___、国際的{こくさいてき}な仕事{しごと}に興味{きょうみ}を持{も}つようになった。',
        stemZh: '以留學為契機，開始對國際性的工作產生了興趣。',
        options: [
            { text: 'をもとに', reason: '「をもとに」表示「以…為基礎」，不是契機。' },
            { text: 'に際して', reason: '「に際して」表示「在…之際」，語意不同。' },
            { text: 'がきっかけで', reason: '正確！「がきっかけで」表示「以…為契機」。' },
            { text: 'に先立って', reason: '「に先立って」表示「在…之前」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「がきっかけで」表示引發變化的契機',
            analysis: '「がきっかけで」用於說明促使某種變化發生的原因或契機，強調開始的觸發點。',
            comparisons: ['がきっかけで：以…為契機（用「が」）', 'をきっかけに：以…為契機（用「を」）'],
            commonMistakes: ['○ 留学がきっかけで / ○ 留学をきっかけに → 兩種助詞都可以'],
        },
    },
    // ━━━ ようか〜まいか (whether to or not - additional) ━━━
    {
        id: 'g_n2_213', category: 'grammar', level: 'N2', tags: ['hesitation', 'indecision'],
        stem: '転職{てんしょく}し___し___か、まだ決{き}められない。',
        stemZh: '要不要換工作，還無法決定。',
        options: [
            { text: 'ようと / まいと', reason: '「ようと〜まいと」表示「無論做不做…都…」，語意不同。' },
            { text: 'たり / たり', reason: '「たり〜たり」表示列舉動作，語意不同。' },
            { text: 'ようか / まい', reason: '正確！「ようか〜まいか」表示「猶豫要不要…」。' },
            { text: 'ても / ても', reason: '「ても〜ても」表示「即使…也…」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ようか〜まいか」表示猶豫不決',
            analysis: '「意向形＋か＋まいか」用於表達對某件事猶豫不決、無法下定決心的狀態。',
            comparisons: ['ようか〜まいか：猶豫要不要…', 'ようと〜まいと：無論做不做…（都一樣）'],
            commonMistakes: ['○ 転職しようかしまいか / × 転職するかしないか → 後者雖可以但不是此文法'],
        },
    },
    // ━━━ ているうちに (while doing / before one knows it) ━━━
    {
        id: 'g_n2_214', category: 'grammar', level: 'N2', tags: ['change', 'duration'],
        stem: '毎日{まいにち}練習{れんしゅう}し___、自然{しぜん}にピアノが上手{じょうず}になった。',
        stemZh: '在每天練習的過程中，不知不覺鋼琴就變好了。',
        options: [
            { text: 'たところで', reason: '「たところで」表示「即使做了…也…」，語意不同。' },
            { text: 'ているうちに', reason: '正確！「ているうちに」表示在持續做某事的過程中，不知不覺發生了變化。' },
            { text: 'ているかぎり', reason: '「ているかぎり」表示「只要在…」，語意不同。' },
            { text: 'ていては', reason: '「ていては」表示「如果一直…的話（壞結果）」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ているうちに」表示在持續過程中自然發生變化',
            analysis: '「ているうちに」用於描述在做某事的持續過程中，不知不覺地發生了某種變化或新的狀況。',
            comparisons: ['ているうちに：在…的過程中（自然變化）', 'ているあいだに：在…期間（客觀時間）'],
            commonMistakes: ['○ 練習しているうちに / × 練習するうちに → 「ている」強調持續'],
        },
    },
    // ━━━ にかわって (in place of / on behalf of) ━━━
    {
        id: 'g_n2_215', category: 'grammar', level: 'N2', tags: ['substitution', 'behalf'],
        stem: '病気{びょうき}の部長{ぶちょう}___、私{わたし}が会議{かいぎ}に出席{しゅっせき}した。',
        stemZh: '代替生病的部長，我出席了會議。',
        options: [
            { text: 'にかわって', reason: '正確！「にかわって」表示「代替…」。' },
            { text: 'に応じて', reason: '「に応じて」表示「根據…」，語意不同。' },
            { text: 'に際して', reason: '「に際して」表示「在…之際」，語意不同。' },
            { text: 'に沿って', reason: '「に沿って」表示「沿著…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にかわって」表示代替他人行動',
            analysis: '「にかわって」用於代替某人執行任務或承擔角色，表示「代替…做…」。',
            comparisons: ['にかわって：代替…（替代行動）', 'のかわりに：代替…（更口語）'],
            commonMistakes: ['○ 部長にかわって / × 部長をかわって → 用「に」不用「を」'],
        },
    },
    {
        id: 'g_n2_216', category: 'grammar', level: 'N2', tags: ['substitution', 'change'],
        stem: '近年{きんねん}、手紙{てがみ}___メールでのやり取{と}りが主流{しゅりゅう}になっている。',
        stemZh: '近年來，取代書信，電子郵件的往來已成為主流。',
        options: [
            { text: 'をもとに', reason: '「をもとに」表示「以…為基礎」，語意不同。' },
            { text: 'を通じて', reason: '「を通じて」表示「透過…」，語意不同。' },
            { text: 'にかわって', reason: '正確！「にかわって」表示「取代…」，用於事物的替代也可以。' },
            { text: 'に伴って', reason: '「に伴って」表示「伴隨著…」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「にかわって」也可以表示事物間的取代',
            analysis: '「にかわって」不僅可以代替人做事，也可以表示一種事物取代另一種事物。',
            comparisons: ['にかわって：取代…（人或事物）', 'のかわりに：代替…（較限定於人）'],
            commonMistakes: ['○ 手紙にかわって / ○ 手紙にかわり → 「にかわり」也可以'],
        },
    },
    // ━━━ と同時に (at the same time as - additional) ━━━
    {
        id: 'g_n2_217', category: 'grammar', level: 'N2', tags: ['simultaneous', 'dual_role'],
        stem: '彼女{かのじょ}は母親{ははおや}である___、優秀{ゆうしゅう}な研究者{けんきゅうしゃ}でもある。',
        stemZh: '她既是母親，同時也是優秀的研究者。',
        options: [
            { text: 'と同時に', reason: '正確！「と同時に」表示「…的同時也是…」，強調雙重身份。' },
            { text: '一方で', reason: '「一方で」表示「另一方面」，也可以但語感不同。' },
            { text: 'ばかりか', reason: '「ばかりか」表示「不僅…而且」，語感不同。' },
            { text: 'に加えて', reason: '「に加えて」表示「加上…」，語意稍有不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と同時に」表示同時具有兩個特質或身份',
            analysis: '「と同時に」除了表示時間上的同時，也可以表示某人或某物同時具有兩種特質或角色。',
            comparisons: ['と同時に：同時也是…（雙重特質）', '一方で：另一方面（對比）'],
            commonMistakes: ['○ 母親であると同時に / × 母親と同時に → 用「である」連接'],
        },
    },
    // ━━━ そう言えば (speaking of which / come to think of it) ━━━
    {
        id: 'g_n2_218', category: 'grammar', level: 'N2', tags: ['topic_change', 'recall'],
        stem: '___、来週{らいしゅう}の会議{かいぎ}の場所{ばしょ}はどこだっけ？',
        stemZh: '說起來，下週的會議地點是哪裡來著？',
        options: [
            { text: 'ところで', reason: '「ところで」表示「對了」，也可以轉換話題但語感不同。' },
            { text: 'そう言えば', reason: '正確！「そう言えば」表示「這麼一說/說起來」，因為聯想而想起某事。' },
            { text: 'ちなみに', reason: '「ちなみに」表示「順便一提」，用於補充相關資訊。' },
            { text: 'さて', reason: '「さて」表示「那麼」，用於正式開始新話題。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「そう言えば」表示因聯想而回憶起某事',
            analysis: '「そう言えば」用於因為前面的話題或情境而聯想到某件事，表示「這麼一說，想到了…」。',
            comparisons: ['そう言えば：這麼一說…（因聯想想起）', 'ところで：對了…（主動轉換話題）'],
            commonMistakes: ['○ そう言えば / ○ そういえば → 兩種寫法都可以'],
        },
    },
    // ━━━ にしたら (from one's perspective - additional context) ━━━
    {
        id: 'g_n2_219', category: 'grammar', level: 'N2', tags: ['perspective', 'empathy'],
        stem: '親{おや}___、子{こ}どもの安全{あんぜん}が一番{いちばん}大切{たいせつ}なのだ。',
        stemZh: '站在父母的角度來看，孩子的安全是最重要的。',
        options: [
            { text: 'として', reason: '「として」表示「作為…」，意思可以但語感不同。' },
            { text: 'にとって', reason: '「にとって」表示「對…來說」，也可以但沒有強調「站在某人立場」的感覺。' },
            { text: 'にしたら', reason: '正確！「にしたら」表示「站在…的角度來看」，強調設身處地。' },
            { text: 'に対して', reason: '「に対して」表示「對於…」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「にしたら」強調從他人的角度或立場考慮',
            analysis: '「にしたら」用於站在他人的立場來思考問題，強調設身處地的理解。與「にすれば」意思相同。',
            comparisons: ['にしたら：站在…的角度（設身處地）', 'にとって：對…來說（一般觀點）'],
            commonMistakes: ['○ 親にしたら / ○ 親にすれば → 兩種都可以使用'],
        },
    },
    // ━━━ ぬ (classical negative) ━━━
    {
        id: 'g_n2_220', category: 'grammar', level: 'N2', tags: ['classical', 'formal', 'negative'],
        stem: '努力{どりょく}せ___者{もの}に成功{せいこう}はない。',
        stemZh: '不努力的人不會成功。',
        options: [
            { text: 'ない', reason: '「ない」是現代日語的否定形，文法正確但不符合書面語風格。' },
            { text: 'ぬ', reason: '正確！「ぬ」是古語否定形，相當於「ない」，書面語中使用。' },
            { text: 'ず', reason: '「ず」也是否定形，但接續不同，「ず」用於中止形。' },
            { text: 'まい', reason: '「まい」表示否定推量，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ぬ」是書面語的否定表現',
            analysis: '「ぬ」相當於「ない」，是較古風的否定表現，常見於書面語、諺語、格言中。接續方式與「ない」相同。',
            comparisons: ['ぬ：不…（書面/古語）', 'ない：不…（口語/現代）', 'ず：不…（中止形）'],
            commonMistakes: ['○ 努力せぬ者 / × 努力しぬ者 → 用未然形接續'],
        },
    },
    // ━━━ のみ (only / solely) ━━━
    {
        id: 'g_n2_221', category: 'grammar', level: 'N2', tags: ['limitation', 'formal'],
        stem: '入場{にゅうじょう}は会員{かいいん}___に限{かぎ}られている。',
        stemZh: '入場僅限於會員。',
        options: [
            { text: 'だけ', reason: '「だけ」也表示「只有」，但較口語，此處書面語用「のみ」更適合。' },
            { text: 'しか', reason: '「しか」後面需要否定形，文法不合。' },
            { text: 'のみ', reason: '正確！「のみ」表示「僅僅…」，是書面語的限定表現。' },
            { text: 'ばかり', reason: '「ばかり」表示「盡是…」或「大約」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「のみ」是書面語的限定表現',
            analysis: '「のみ」相當於口語的「だけ」，表示「僅僅…」「只有…」，常用於公告、規定等正式場合。',
            comparisons: ['のみ：僅僅…（書面語）', 'だけ：只有…（口語）'],
            commonMistakes: ['○ 会員のみ / × 会員だけのみ → 不能與「だけ」重複使用'],
        },
    },
    // ━━━ ものがある (there is something ~) - additional ━━━
    {
        id: 'g_n2_222', category: 'grammar', level: 'N2', tags: ['impression', 'feeling'],
        stem: '彼{かれ}の演説{えんぜつ}には人{ひと}の心{こころ}を動{うご}かす___。',
        stemZh: '他的演說有著打動人心的力量。',
        options: [
            { text: 'ことがある', reason: '「ことがある」表示「有時會…」，語意不同。' },
            { text: 'わけがない', reason: '「わけがない」表示「不可能…」，語意相反。' },
            { text: 'ものがある', reason: '正確！「ものがある」表示「有著…的東西/力量」，表達深刻感受。' },
            { text: 'ものだ', reason: '「ものだ」表示感嘆或常理，用法不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ものがある」表示深刻的感受或印象',
            analysis: '「ものがある」用於表達說話者對某事物有著深刻的感受或印象，帶有主觀評價的語感。',
            comparisons: ['ものがある：確實有…之處（深刻感受）', 'ことがある：有時會…（頻率）'],
            commonMistakes: ['○ 心を動かすものがある / × 心を動かしたものがある → 前面常用辭書形'],
        },
    },
    // ━━━ よりほかない (no choice but to) ━━━
    {
        id: 'g_n2_223', category: 'grammar', level: 'N2', tags: ['no_choice', 'resignation'],
        stem: 'バスも電車{でんしゃ}もないので、歩{ある}く___。',
        stemZh: '因為沒有公車也沒有電車，只好走路了。',
        options: [
            { text: 'ほかない', reason: '「ほかない」需要前面加「より」或「しか」。' },
            { text: 'しかない', reason: '「しかない」也可以表示「只好…」，但此題正確答案為「よりほかない」。' },
            { text: 'よりほかない', reason: '正確！「よりほかない」表示「除了…之外別無選擇」。' },
            { text: 'わけにはいかない', reason: '「わけにはいかない」表示「不能…」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「よりほかない」表示別無選擇',
            analysis: '「よりほかない」與「しかない」「ざるを得ない」意思相近，都表示沒有其他選擇只能這樣做。語氣較正式。',
            comparisons: ['よりほかない：除此以外別無他法（正式）', 'しかない：只好…（口語）', 'ざるを得ない：不得不…（正式）'],
            commonMistakes: ['○ 歩くよりほかない / × 歩くよりほかはない → 「は」可加可不加'],
        },
    },
    // ━━━ ゆえに (therefore / because of) - additional ━━━
    {
        id: 'g_n2_224', category: 'grammar', level: 'N2', tags: ['reason', 'formal', 'literary'],
        stem: '若{わか}さ___の過{あやま}ちは誰{だれ}にでもある。',
        stemZh: '因為年輕而犯的錯誤誰都有。',
        options: [
            { text: 'からの', reason: '「からの」不是正確的接續方式。' },
            { text: 'ゆえの', reason: '正確！「ゆえの」是「ゆえに」的連體修飾形，表示「因…而引起的…」。' },
            { text: 'ための', reason: '「ための」也可以表示原因，但語感不如「ゆえの」書面和深層。' },
            { text: 'せいの', reason: '「せいの」表示「因為…的（負面）」，語感帶有責怪。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ゆえの」是「ゆえに」的連體修飾形',
            analysis: '「ゆえに」表示原因理由（書面語），修飾名詞時變成「ゆえの」。常見於較為文學性的表達。',
            comparisons: ['ゆえの：因…而引起的（修飾名詞）', 'ゆえに：因此（接句子）'],
            commonMistakes: ['○ 若さゆえの / × 若いゆえの → 名詞直接接「ゆえの」'],
        },
    },
    // ━━━ 逆に (conversely) - additional ━━━
    {
        id: 'g_n2_225', category: 'grammar', level: 'N2', tags: ['contrast', 'opposite'],
        stem: '便利{べんり}になった___、人{ひと}と人{ひと}との繋{つな}がりが薄{うす}くなった。',
        stemZh: '變得方便了，反而人與人之間的聯繫變淡了。',
        options: [
            { text: '一方で', reason: '「一方で」表示「另一方面」，也可以但不強調「反而」的語感。' },
            { text: '反面', reason: '「反面」表示「另一方面」，可以但接續不同。' },
            { text: '逆に', reason: '正確！「逆に」表示「反而/相反地」，強調與預期相反的結果。' },
            { text: 'にもかかわらず', reason: '「にもかかわらず」表示「儘管…卻」，需要接在名詞或句子後。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「逆に」表示與預期相反的結果',
            analysis: '「逆に」用於引出與前述內容或一般預期相反的結果，可以放在句首或句中。',
            comparisons: ['逆に：反而（相反的結果）', 'かえって：反而（與預期相反）', '一方で：另一方面（並列對比）'],
            commonMistakes: ['○ 便利になった。逆に… / ○ 逆に、…なった → 可以放句首或句中'],
        },
    },
    // ━━━ ようでは (if ~ continues - additional) ━━━
    {
        id: 'g_n2_226', category: 'grammar', level: 'N2', tags: ['warning', 'negative_prediction'],
        stem: 'こんな簡単{かんたん}な問題{もんだい}も解{と}けない___、試験{しけん}に受{う}かるはずがない。',
        stemZh: '如果連這麼簡單的問題都不會解的話，不可能通過考試。',
        options: [
            { text: 'ようでは', reason: '正確！「ようでは」表示「如果是這種狀態的話（會有壞結果）」。' },
            { text: 'ようなら', reason: '「ようなら」也可以表示假設，但沒有「ようでは」的警告語氣。' },
            { text: 'ようにも', reason: '「ようにも」表示「想…也做不到」，語意不同。' },
            { text: 'ようが', reason: '「ようが」表示「無論…也…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようでは」帶有警告和負面預測',
            analysis: '「ようでは」用於假設某種不良狀態繼續下去，將會導致不好的結果，帶有警告和忠告的語氣。',
            comparisons: ['ようでは：如果這樣的話…（警告）', 'ようなら：如果…的話（一般假設）'],
            commonMistakes: ['○ 解けないようでは / × 解けるようでは → 前面通常是負面狀態'],
        },
    },
    // ━━━ 一気に (all at once) ━━━
    {
        id: 'g_n2_227', category: 'grammar', level: 'N2', tags: ['speed', 'completion'],
        stem: '締{し}め切{き}りが近{ちか}いので、レポートを___書{か}き上{あ}げた。',
        stemZh: '因為截止日期快到了，所以一口氣寫完了報告。',
        options: [
            { text: '次第に', reason: '「次第に」表示「逐漸地」，與「一口氣」語意相反。' },
            { text: '一気に', reason: '正確！「一気に」表示「一口氣地」，表示不間斷地完成。' },
            { text: 'いきなり', reason: '「いきなり」表示「突然」，語意不同。' },
            { text: 'とっくに', reason: '「とっくに」表示「早就」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「一気に」表示不間斷地一口氣完成',
            analysis: '「一気に」用於描述在短時間內不間斷地完成某事，強調速度和效率。',
            comparisons: ['一気に：一口氣地（不間斷）', '次第に：逐漸地（慢慢來）', 'いきなり：突然（無預警）'],
            commonMistakes: ['○ 一気に書き上げた / × 一気で書き上げた → 用「に」不用「で」'],
        },
    },
    // ━━━ 要するに (in short) - additional ━━━
    {
        id: 'g_n2_228', category: 'grammar', level: 'N2', tags: ['summary', 'conclusion'],
        stem: '長{なが}い説明{せつめい}だったが、___やる気{き}があるかないかの問題{もんだい}だ。',
        stemZh: '說明很長，但總之就是有沒有幹勁的問題。',
        options: [
            { text: 'つまり', reason: '「つまり」也表示「也就是說」，但「要するに」更強調總結。' },
            { text: '要するに', reason: '正確！「要するに」表示「總而言之」，用於簡要總結前述內容。' },
            { text: 'それにしても', reason: '「それにしても」表示「即便如此」，語意不同。' },
            { text: 'ちなみに', reason: '「ちなみに」表示「順便一提」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「要するに」用於總結概括',
            analysis: '「要するに」用於將前面冗長的說明簡單總結，提煉出核心要點。語氣較為直接。',
            comparisons: ['要するに：總而言之（提煉要點）', 'つまり：也就是說（換句話說）'],
            commonMistakes: ['○ 要するに、…の問題だ / × 要するにとして → 直接接句子'],
        },
    },
    // ━━━ ばかり (approximately) ━━━
    {
        id: 'g_n2_229', category: 'grammar', level: 'N2', tags: ['approximation', 'quantity'],
        stem: '赤{あか}ちゃんが生{う}まれて一{いっ}ヶ月{かげつ}___だ。',
        stemZh: '嬰兒出生大約一個月了。',
        options: [
            { text: 'ぐらい', reason: '「ぐらい」也可以表示「大約」，但語感較口語。' },
            { text: 'ばかり', reason: '正確！「ばかり」在此表示「大約…」，常用於時間數量的概略表達。' },
            { text: 'ほど', reason: '「ほど」也表示「大約」，但此處「ばかり」更自然。' },
            { text: 'だけ', reason: '「だけ」表示「只有…」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ばかり」的概數用法',
            analysis: '「ばかり」除了「盡是…」的意思外，還可以表示「大約…」，常用於時間或數量的概略表達。',
            comparisons: ['ばかり：大約（概略）', 'ぐらい：大約（口語）', 'ほど：大約（書面）'],
            commonMistakes: ['○ 一ヶ月ばかり / ○ 一ヶ月ほど → 都表示大約'],
        },
    },
    // ━━━ まだしも (if it were ~ it would be okay / passable) ━━━
    {
        id: 'g_n2_230', category: 'grammar', level: 'N2', tags: ['comparison', 'compromise'],
        stem: '一回{いっかい}の失敗{しっぱい}なら___、何度{なんど}も繰{く}り返{かえ}すのは許{ゆる}せない。',
        stemZh: '如果是一次失敗還說得過去，但反覆犯錯就無法容忍了。',
        options: [
            { text: 'まだしも', reason: '正確！「まだしも」表示「如果是…的話還說得過去」。' },
            { text: 'ましだ', reason: '「ましだ」表示「…較好」，但接續不同。' },
            { text: 'ともかく', reason: '「ともかく」表示「暫且不論…」，語意不同。' },
            { text: 'どころか', reason: '「どころか」表示「豈止…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「まだしも」表示勉強可以接受的程度',
            analysis: '「まだしも」用於前項勉強可以接受，但後項完全不能接受的對比。強調讓步的底線。',
            comparisons: ['まだしも：還說得過去（勉強接受）', 'だけましだ：至少…算好了（安慰）'],
            commonMistakes: ['○ 一回ならまだしも / × 一回でまだしも → 常與「なら」搭配'],
        },
    },
    // ━━━ てばかりはいられない (can't just keep doing) ━━━
    {
        id: 'g_n2_231', category: 'grammar', level: 'N2', tags: ['urgency', 'action'],
        stem: '悲{かな}しんで___。前{まえ}を向{む}いて進{すす}まなければならない。',
        stemZh: '不能光是悲傷。必須向前看，繼續前進。',
        options: [
            { text: 'ばかりだ', reason: '「ばかりだ」表示「不斷…」，不表示「不能光是…」。' },
            { text: 'ばかりはいられない', reason: '正確！「てばかりはいられない」表示「不能光是…」。' },
            { text: 'ばかりか', reason: '「ばかりか」表示「不僅…」，語意不同。' },
            { text: 'ばかりに', reason: '「ばかりに」表示「只因為…」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「てばかりはいられない」表示不能一直持續某狀態',
            analysis: '「てばかりはいられない」用於催促自己或他人不能一直停留在某種狀態中，應該採取行動。',
            comparisons: ['てばかりはいられない：不能光是…（需要行動）', 'てはいられない：不能再…了（緊迫）'],
            commonMistakes: ['○ 悲しんでばかりはいられない / × 悲しいばかりはいられない → 前面用て形'],
        },
    },
    // ━━━ に至って (having reached the point) - additional ━━━
    {
        id: 'g_n2_232', category: 'grammar', level: 'N2', tags: ['reaching_point', 'realization'],
        stem: '病気{びょうき}が悪化{あっか}して入院{にゅういん}する事態{じたい}___、ようやく健康{けんこう}の大切{たいせつ}さに気{き}づいた。',
        stemZh: '到了病情惡化而住院的地步，才終於意識到健康的重要性。',
        options: [
            { text: 'になって', reason: '「になって」表示「變成…」，也可以但不夠正式。' },
            { text: 'に至って', reason: '正確！「に至って」表示「到了…的地步」，強調事態發展到極端。' },
            { text: 'にあたって', reason: '「にあたって」表示「在…之際」，語意不同。' },
            { text: 'に際して', reason: '「に際して」表示「在…之際」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「に至って」強調事態發展到某個嚴重程度',
            analysis: '「に至って」用於描述事態發展到了某個關鍵點或極端狀態，後面常接「ようやく〜」「初めて〜」等表示遲來的反應。',
            comparisons: ['に至って：到了…的地步（嚴重程度）', 'になって：變成…（一般變化）'],
            commonMistakes: ['○ 事態に至って / × 事態に至ると → 用「に至って」不用「に至ると」'],
        },
    },
    // ━━━ をきっかけに (taking the opportunity of) ━━━
    {
        id: 'g_n2_233', category: 'grammar', level: 'N2', tags: ['trigger', 'opportunity'],
        stem: '結婚{けっこん}___、生活{せいかつ}スタイルを見直{みなお}した。',
        stemZh: '以結婚為契機，重新審視了生活方式。',
        options: [
            { text: 'を契機に', reason: '「を契機に」也可以表示「以…為契機」，更書面語。' },
            { text: 'をきっかけに', reason: '正確！「をきっかけに」表示「以…為契機」，觸發某種改變。' },
            { text: 'をもとに', reason: '「をもとに」表示「以…為基礎」，語意不同。' },
            { text: 'をめぐって', reason: '「をめぐって」表示「圍繞著…」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「をきっかけに」表示引發變化的契機',
            analysis: '「をきっかけに」與「がきっかけで」意思相同，都表示某個事件成為引發變化的契機。',
            comparisons: ['をきっかけに：以…為契機（用「を」）', 'を契機に：以…為契機（更書面）', 'がきっかけで：以…為契機（用「が」）'],
            commonMistakes: ['○ 結婚をきっかけに / ○ 結婚がきっかけで → 助詞不同但意思相同'],
        },
    },
    // ━━━ と考えられる (it is thought that) ━━━
    {
        id: 'g_n2_234', category: 'grammar', level: 'N2', tags: ['academic', 'passive_opinion'],
        stem: 'この遺跡{いせき}は約{やく}三千年前{さんぜんねんまえ}のものだ___。',
        stemZh: '這個遺跡被認為是大約三千年前的東西。',
        options: [
            { text: 'と思われる', reason: '「と思われる」也可以表示「被認為…」，但「と考えられる」更學術性。' },
            { text: 'と言われる', reason: '「と言われる」表示「據說…」，強調傳聞。' },
            { text: 'と見られる', reason: '「と見られる」表示「被看作…」，語感不同。' },
            { text: 'と考えられる', reason: '正確！「と考えられる」表示「被認為是…」，學術性客觀判斷。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「と考えられる」表示客觀的學術判斷',
            analysis: '「と考えられる」是學術論文和正式場合中常用的表達，表示基於證據或分析得出的結論。',
            comparisons: ['と考えられる：被認為…（學術判斷）', 'と思われる：被認為…（一般推測）', 'と言われる：據說…（傳聞）'],
            commonMistakes: ['○ 三千年前のものだと考えられる / × 三千年前のものと考えられる → 「だ」常保留'],
        },
    },
    // ━━━ とか（で）(heard that / reportedly) ━━━
    {
        id: 'g_n2_235', category: 'grammar', level: 'N2', tags: ['hearsay', 'informal'],
        stem: '田中{たなか}さんは来月{らいげつ}転勤{てんきん}する___。',
        stemZh: '聽說田中下個月要調職。',
        options: [
            { text: 'そうだ', reason: '「そうだ」也表示傳聞，但較一般，不帶「聽說是…」的不確定感。' },
            { text: 'とか', reason: '正確！「とか」用於傳聞，帶有「聽說好像…」的不確定語氣。' },
            { text: 'らしい', reason: '「らしい」表示「好像…」，基於推測而非傳聞。' },
            { text: 'ようだ', reason: '「ようだ」表示「看起來…」，基於觀察的推測。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「とか」用於非正式的傳聞',
            analysis: '「とか」在句尾使用時表示不確定的傳聞，帶有「好像聽說…」的語感，較為口語化。',
            comparisons: ['とか：聽說…（不確定傳聞）', 'そうだ：聽說…（一般傳聞）', 'らしい：好像…（推測）'],
            commonMistakes: ['○ 転勤するとか / ○ 転勤するとかで → 加「で」表示原因'],
        },
    },
    // ━━━ からして (judging from - additional) ━━━
    {
        id: 'g_n2_236', category: 'grammar', level: 'N2', tags: ['judgment', 'from_the_start'],
        stem: 'あの映画{えいが}はタイトル___面白{おもしろ}そうだ。',
        stemZh: '那部電影光從標題就看起來很有趣。',
        options: [
            { text: 'からして', reason: '正確！「からして」表示「單從…來看就…」，暗示整體更是如此。' },
            { text: 'からすると', reason: '「からすると」表示「從…來看」，但不強調「光從…就…」。' },
            { text: 'から見ると', reason: '「から見ると」表示「從…來看」，較客觀。' },
            { text: 'から言うと', reason: '「から言うと」表示「從…來說」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「からして」強調連最基本的部分都已經如此',
            analysis: '「からして」用於從一個最基本的要素來判斷整體，暗示「連…都已經這樣了，更何況其他」。',
            comparisons: ['からして：光從…就…（暗示整體更是如此）', 'からすると：從…來看（客觀判斷）'],
            commonMistakes: ['○ タイトルからして面白そうだ / × タイトルからして面白い → 常用推測形'],
        },
    },
    // ━━━ にしろ〜にしろ (whether ~ or ~ - additional) ━━━
    {
        id: 'g_n2_237', category: 'grammar', level: 'N2', tags: ['either_way', 'regardless'],
        stem: '賛成{さんせい}___反対{はんたい}___、理由{りゆう}をはっきり述{の}べてください。',
        stemZh: '不管是贊成還是反對，請清楚說明理由。',
        options: [
            { text: 'にしろ / にしろ', reason: '正確！「にしろ〜にしろ」表示「無論是…還是…」。' },
            { text: 'にして / にして', reason: '「にして」不用於列舉選項。' },
            { text: 'として / として', reason: '「として」表示「作為…」，語意不同。' },
            { text: 'にせよ / にせよ', reason: '「にせよ〜にせよ」也可以，與「にしろ〜にしろ」同義。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にしろ〜にしろ」列舉兩個選項表示無論哪個',
            analysis: '「にしろ〜にしろ」用於列舉兩個（通常是對立的）選項，表示無論是哪種情況，結論都一樣。',
            comparisons: ['にしろ〜にしろ：無論…還是…（口語）', 'にせよ〜にせよ：無論…還是…（書面）'],
            commonMistakes: ['○ 賛成にしろ反対にしろ / × 賛成するにしろ反対するにしろ → 名詞直接接「にしろ」'],
        },
    },
    // ━━━ 甲斐がある (worth doing - additional) ━━━
    {
        id: 'g_n2_238', category: 'grammar', level: 'N2', tags: ['worth', 'reward'],
        stem: '苦労{くろう}した___、素晴{すば}らしい結果{けっか}が得{え}られた。',
        stemZh: '辛苦沒有白費，得到了出色的成果。',
        options: [
            { text: '甲斐があって', reason: '正確！「甲斐があって」表示「…的努力有了回報」。' },
            { text: '末に', reason: '「末に」表示「經過…之後」，不強調回報感。' },
            { text: 'あげく', reason: '「あげく」表示「最終結果是…」，通常用於負面結果。' },
            { text: 'ばかりに', reason: '「ばかりに」表示「只因為…（壞結果）」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「甲斐があって」表示努力得到了回報',
            analysis: '「甲斐がある」表示做某事有價值、值得，「甲斐があって」用於說明因為努力有了回報而得到好結果。',
            comparisons: ['甲斐があって：努力有了回報（正面結果）', 'あげく：最終結果是…（負面居多）'],
            commonMistakes: ['○ 苦労した甲斐があって / × 苦労の甲斐があって → 動詞た形接「甲斐」'],
        },
    },
    // ━━━ に向かって (toward / facing) ━━━
    {
        id: 'g_n2_239', category: 'grammar', level: 'N2', tags: ['direction', 'goal'],
        stem: '夢{ゆめ}の実現{じつげん}___、毎日{まいにち}努力{どりょく}し続{つづ}けている。',
        stemZh: '朝著實現夢想，每天持續努力著。',
        options: [
            { text: 'に向かって', reason: '正確！「に向かって」表示「朝著…（目標）」。' },
            { text: 'に沿って', reason: '「に沿って」表示「沿著…」，語意不同。' },
            { text: 'にわたって', reason: '「にわたって」表示「長達…」，語意不同。' },
            { text: 'に至るまで', reason: '「に至るまで」表示「直到…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に向かって」表示朝著目標前進',
            analysis: '「に向かって」除了物理方向（朝著某方向），也可以表示朝著某個目標努力。',
            comparisons: ['に向かって：朝著…（方向/目標）', 'に向けて：面向…（較強調準備過程）'],
            commonMistakes: ['○ 夢の実現に向かって / ○ 夢に向かって → 都可以使用'],
        },
    },
    // ━━━ に基づいて (based on - additional) ━━━
    {
        id: 'g_n2_240', category: 'grammar', level: 'N2', tags: ['basis', 'foundation'],
        stem: '調査{ちょうさ}結果{けっか}___、新{あたら}しい対策{たいさく}を立{た}てた。',
        stemZh: '根據調查結果，制定了新的對策。',
        options: [
            { text: 'をもとに', reason: '「をもとに」也表示「以…為基礎」，但語感略有不同。' },
            { text: 'に沿って', reason: '「に沿って」表示「沿著…」，語意不同。' },
            { text: 'に基づいて', reason: '正確！「に基づいて」表示「基於…/根據…」，強調依據。' },
            { text: 'に応じて', reason: '「に応じて」表示「根據…的變化而」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「に基づいて」強調以某事為依據',
            analysis: '「に基づいて」表示以某個事實、資料或規則為依據來做事，語氣較為正式。',
            comparisons: ['に基づいて：基於…（嚴格依據）', 'をもとに：以…為基礎（較靈活）'],
            commonMistakes: ['○ 調査結果に基づいて / × 調査結果を基づいて → 用「に」不用「を」'],
        },
    },
    // ━━━ に加えて (in addition to - additional) ━━━
    {
        id: 'g_n2_241', category: 'grammar', level: 'N2', tags: ['addition', 'moreover'],
        stem: '人手不足{ひとでぶそく}___、材料費{ざいりょうひ}の高騰{こうとう}も問題{もんだい}になっている。',
        stemZh: '除了人手不足之外，材料費上漲也成了問題。',
        options: [
            { text: 'はもちろん', reason: '「はもちろん」表示「不用說…」，語感不同。' },
            { text: 'ばかりか', reason: '「ばかりか」表示「不僅…而且」，也可以但接續不同。' },
            { text: 'に加えて', reason: '正確！「に加えて」表示「除了…之外，還有…」。' },
            { text: 'に伴って', reason: '「に伴って」表示「伴隨著…」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「に加えて」表示在某事物之上再追加',
            analysis: '「に加えて」用於在已有的事物之上再追加新的內容，表示「除了A之外，B也…」。',
            comparisons: ['に加えて：除了…之外還有（追加）', 'ばかりか：不僅…而且（遞進強調）'],
            commonMistakes: ['○ 人手不足に加えて / × 人手不足を加えて → 用「に」不用「を」'],
        },
    },
    // ━━━ てて形＋ 以来 (since - additional) ━━━
    {
        id: 'g_n2_242', category: 'grammar', level: 'N2', tags: ['since', 'continuation'],
        stem: '大学{だいがく}を卒業{そつぎょう}し___、ずっとこの会社{かいしゃ}で働{はたら}いている。',
        stemZh: '自從大學畢業以來，一直在這家公司工作。',
        options: [
            { text: 'てから', reason: '「てから」表示「…之後」，但不強調持續至今。' },
            { text: 'た後', reason: '「た後」表示「…之後」，不強調持續至今。' },
            { text: 'て以来', reason: '正確！「て以来」表示「自從…以來（一直）」。' },
            { text: 'たところ', reason: '「たところ」表示「做了…之後（發現）」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「て以来」強調從某時間點開始至今的持續狀態',
            analysis: '「て以来」用於表示從某個起始點到現在為止一直持續的狀態或行為，強調「自從…以來一直…」。',
            comparisons: ['て以来：自從…以來（持續至今）', 'てから：…之後（時間先後）'],
            commonMistakes: ['○ 卒業して以来 / × 卒業した以来 → 用て形不用た形'],
        },
    },
    // ━━━ ことから (from the fact that - additional) ━━━
    {
        id: 'g_n2_243', category: 'grammar', level: 'N2', tags: ['reason', 'naming'],
        stem: 'この花{はな}は形{かたち}が星{ほし}に似{に}ている___、「星草{ほしくさ}」と呼{よ}ばれている。',
        stemZh: '這種花因為形狀像星星，所以被稱為「星草」。',
        options: [
            { text: 'ことで', reason: '「ことで」表示「因為…」，但不如「ことから」自然。' },
            { text: 'せいで', reason: '「せいで」表示「因為…（負面）」，不適合中性語境。' },
            { text: 'わけで', reason: '「わけで」表示「所以…」，語感不同。' },
            { text: 'ことから', reason: '正確！「ことから」表示「因為…的緣故」，常用於名稱由來。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「ことから」常用於解釋名稱或稱呼的由來',
            analysis: '「ことから」除了一般的因果關係外，特別常用於解釋某事物被命名或被稱為某名稱的原因。',
            comparisons: ['ことから：因為…的緣故（命名由來）', 'ために：因為…（一般因果）'],
            commonMistakes: ['○ 似ていることから / × 似たことから → 前面用ている形較自然'],
        },
    },
    // ━━━ を除いて (except for / excluding) ━━━
    {
        id: 'g_n2_244', category: 'grammar', level: 'N2', tags: ['exception', 'exclusion'],
        stem: '日曜日{にちようび}___、毎日{まいにち}営業{えいぎょう}しています。',
        stemZh: '除了星期日以外，每天都有營業。',
        options: [
            { text: 'に限らず', reason: '「に限らず」表示「不限於…」，語意相反。' },
            { text: 'を除いて', reason: '正確！「を除いて」表示「除了…以外」。' },
            { text: 'をはじめ', reason: '「をはじめ」表示「以…為首」，語意不同。' },
            { text: 'を問わず', reason: '「を問わず」表示「不論…」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「を除いて」表示排除某事物',
            analysis: '「を除いて」用於將某個例外排除在外，表示「除了…以外」。較正式的說法。',
            comparisons: ['を除いて：除了…以外（正式）', '以外：除了…以外（一般）'],
            commonMistakes: ['○ 日曜日を除いて / × 日曜日が除いて → 用「を」不用「が」'],
        },
    },
    // ━━━ に先立って (prior to - additional) ━━━
    {
        id: 'g_n2_245', category: 'grammar', level: 'N2', tags: ['preparation', 'before'],
        stem: '新商品{しんしょうひん}の発売{はつばい}___、記者{きしゃ}会見{かいけん}が行{おこな}われた。',
        stemZh: '在新商品上市之前，舉行了記者會。',
        options: [
            { text: 'に際して', reason: '「に際して」表示「在…之際」，時間點不同。' },
            { text: 'にあたって', reason: '「にあたって」表示「在…之際」，不強調「之前」。' },
            { text: 'に先立って', reason: '正確！「に先立って」表示「在…之前」，強調事先準備。' },
            { text: 'に応じて', reason: '「に応じて」表示「根據…」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「に先立って」強調在主要事件之前進行準備或宣傳',
            analysis: '「に先立って」用於描述在某個重要事件發生之前，先進行某些準備性的行動。',
            comparisons: ['に先立って：在…之前（事先準備）', 'の前に：在…之前（一般時間）', 'に際して：在…之際（當場）'],
            commonMistakes: ['○ 発売に先立って / ○ 発売に先立ち → 兩種都可以'],
        },
    },
    // ━━━ からには (since / now that - additional) ━━━
    {
        id: 'g_n2_246', category: 'grammar', level: 'N2', tags: ['determination', 'obligation'],
        stem: '約束{やくそく}した___、必{かなら}ず守{まも}らなければならない。',
        stemZh: '既然約定了，就必須遵守。',
        options: [
            { text: 'からには', reason: '正確！「からには」表示「既然…就…」，強調責任和決心。' },
            { text: 'からこそ', reason: '「からこそ」表示「正因為…」，語意不同。' },
            { text: 'からして', reason: '「からして」表示「從…來看」，語意不同。' },
            { text: 'からすると', reason: '「からすると」表示「從…來看」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「からには」強調既然做了就要負責到底',
            analysis: '「からには」用於表達既然已經做出了選擇或承諾，就應該承擔責任或貫徹到底的決心。',
            comparisons: ['からには：既然…就…（責任和決心）', '以上（は）：既然…就…（義務感更強）'],
            commonMistakes: ['○ 約束したからには / × 約束するからには → 前面常用た形'],
        },
    },
    // ━━━ にほかならない (nothing other than - additional) ━━━
    {
        id: 'g_n2_247', category: 'grammar', level: 'N2', tags: ['emphasis', 'assertion'],
        stem: '彼{かれ}が成功{せいこう}したのは、努力{どりょく}の結果{けっか}___。',
        stemZh: '他的成功正是努力的結果。',
        options: [
            { text: 'に相違ない', reason: '「に相違ない」表示「肯定是…」，但不強調「正是…」。' },
            { text: 'に過ぎない', reason: '「に過ぎない」表示「只不過是…」，語意相反。' },
            { text: 'でしかない', reason: '「でしかない」表示「只不過是…」，語意相反。' },
            { text: 'にほかならない', reason: '正確！「にほかならない」表示「正是…」「不外乎就是…」。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「にほかならない」強調確信和斷定',
            analysis: '「にほかならない」用於強調某事的原因或本質，表示「正是…」「無非就是…」，語氣非常肯定。',
            comparisons: ['にほかならない：正是…（肯定斷言）', 'に相違ない：肯定是…（確信推斷）', 'に過ぎない：只不過是…（貶低）'],
            commonMistakes: ['○ 努力の結果にほかならない / × 努力の結果がほかならない → 用「に」不用「が」'],
        },
    },
    // ━━━ にかけては (when it comes to - additional) ━━━
    {
        id: 'g_n2_248', category: 'grammar', level: 'N2', tags: ['specialty', 'confidence'],
        stem: '料理{りょうり}の腕{うで}___、彼女{かのじょ}の右{みぎ}に出{で}る者{もの}はいない。',
        stemZh: '說到廚藝，沒有人能超越她。',
        options: [
            { text: 'に関して', reason: '「に関して」表示「關於…」，不帶自信的語氣。' },
            { text: 'にかけては', reason: '正確！「にかけては」表示「說到…方面」，暗示自信和擅長。' },
            { text: 'について', reason: '「について」表示「關於…」，太一般。' },
            { text: 'において', reason: '「において」表示「在…方面」，較正式但不帶自信感。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「にかけては」暗示在該領域特別出色',
            analysis: '「にかけては」用於表示在某個特定領域或方面特別擅長或出色，後面通常接正面評價。',
            comparisons: ['にかけては：說到…方面（暗示擅長）', 'に関して：關於…（中性）', 'において：在…方面（正式）'],
            commonMistakes: ['○ 料理の腕にかけては / × 料理の腕にかけて → 需要「は」'],
        },
    },
    // ━━━ ないではいられない (cannot help but - additional) ━━━
    {
        id: 'g_n2_249', category: 'grammar', level: 'N2', tags: ['involuntary', 'emotion'],
        stem: 'あの映画{えいが}を見{み}たら、涙{なみだ}が出{で}___。',
        stemZh: '看了那部電影的話，忍不住就流淚了。',
        options: [
            { text: 'ないではいられない', reason: '正確！「ないではいられない」表示「忍不住…」。' },
            { text: 'なければならない', reason: '「なければならない」表示「必須…」，語意不同。' },
            { text: 'ないわけにはいかない', reason: '「ないわけにはいかない」表示「不能不…」，語意稍有不同。' },
            { text: 'ないことはない', reason: '「ないことはない」表示「並非不…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないではいられない」表示無法抑制的情感或行為',
            analysis: '「ないではいられない」與「ずにはいられない」同義，表示因為情感太強烈而無法抑制自己。',
            comparisons: ['ないではいられない：忍不住…（無法抑制）', 'ずにはいられない：忍不住…（同義書面）'],
            commonMistakes: ['○ 涙が出ないではいられない / × 涙が出ないではいられる → 否定形是「いられる」'],
        },
    },
    // ━━━ にあたって (on the occasion of - additional) ━━━
    {
        id: 'g_n2_250', category: 'grammar', level: 'N2', tags: ['occasion', 'formal'],
        stem: '新{あたら}しいプロジェクトの開始{かいし}___、チーム全員{ぜんいん}で目標{もくひょう}を確認{かくにん}した。',
        stemZh: '在新專案開始之際，全體團隊確認了目標。',
        options: [
            { text: 'に先立って', reason: '「に先立って」表示「在…之前」，時間點不同。' },
            { text: 'に際して', reason: '「に際して」也可以表示「在…之際」，與「にあたって」意思相近。' },
            { text: 'にあたって', reason: '正確！「にあたって」表示「在…之際」，用於重要場合。' },
            { text: 'を契機に', reason: '「を契機に」表示「以…為契機」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「にあたって」用於重要的、正式的場合',
            analysis: '「にあたって」用於描述某個重要事件或場合的開始，語氣正式，常見於演講、書面通知。',
            comparisons: ['にあたって：在…之際（重要場合）', 'に際して：在…之際（正式但範圍更廣）', 'の時に：在…的時候（一般）'],
            commonMistakes: ['○ 開始にあたって / ○ 開始にあたり → 兩種都可以'],
        },
    },
    // ━━━ ことにはならない (does not mean - additional) ━━━
    {
        id: 'g_n2_251', category: 'grammar', level: 'N2', tags: ['negation', 'logic'],
        stem: 'お金{かね}があるからといって、幸{しあわ}せだという___。',
        stemZh: '不能因為有錢就說是幸福的。',
        options: [
            { text: 'ことにはならない', reason: '正確！「ことにはならない」表示「不能說就是…」。' },
            { text: 'わけがない', reason: '「わけがない」表示「不可能…」，語氣過強。' },
            { text: 'はずがない', reason: '「はずがない」表示「不應該…」，語意不同。' },
            { text: 'ものではない', reason: '「ものではない」表示「不應該…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことにはならない」表示邏輯上不能成立',
            analysis: '「ことにはならない」用於否定某種推論，表示「不能因此就認為…」「不等於…」。',
            comparisons: ['ことにはならない：不能說就是…（否定推論）', 'わけがない：不可能…（強烈否定）'],
            commonMistakes: ['○ 幸せだということにはならない / × 幸せなことにはならない → 需要「という」引述'],
        },
    },
    // ━━━ というものではない (not necessarily - additional) ━━━
    {
        id: 'g_n2_252', category: 'grammar', level: 'N2', tags: ['negation', 'moderation'],
        stem: '安{やす}ければ安{やす}いほどいい___。品質{ひんしつ}も大切{たいせつ}だ。',
        stemZh: '並不是越便宜越好。品質也很重要。',
        options: [
            { text: 'ものだ', reason: '「ものだ」表示常理或感嘆，語意不同。' },
            { text: 'ことだ', reason: '「ことだ」表示建議，語意不同。' },
            { text: 'はずだ', reason: '「はずだ」表示「應該…」，語意不同。' },
            { text: 'というものではない', reason: '正確！「というものではない」表示「並不是…」，否定過度的想法。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「というものではない」否定過於極端或片面的看法',
            analysis: '「というものではない」用於否定過於簡單化或極端的觀點，提出更均衡的看法。',
            comparisons: ['というものではない：並不是…（否定極端觀點）', 'というものだ：確實是…（肯定）'],
            commonMistakes: ['○ いいというものではない / × いいのものではない → 需要「という」'],
        },
    },
    // ━━━ ついでに (while at it - additional) ━━━
    {
        id: 'g_n2_253', category: 'grammar', level: 'N2', tags: ['opportunity', 'additional_action'],
        stem: '買{か}い物{もの}の___、郵便局{ゆうびんきょく}にも寄{よ}ってきた。',
        stemZh: '趁著去買東西的時候，順便也去了郵局。',
        options: [
            { text: 'あいだに', reason: '「あいだに」表示「在…期間內」，不強調「順便」。' },
            { text: 'ついでに', reason: '正確！「ついでに」表示「順便」，趁做某事時附帶做另一件事。' },
            { text: 'うちに', reason: '「うちに」表示「趁…的時候」，語感不同。' },
            { text: 'ところに', reason: '「ところに」表示「正當…的時候」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ついでに」表示趁做某事的機會順便做另一件事',
            analysis: '「ついでに」用於在做主要事情的同時，順便或附帶做另一件事情。',
            comparisons: ['ついでに：順便（附帶行動）', 'ながら：一邊…一邊…（同時進行）'],
            commonMistakes: ['○ 買い物のついでに / ○ 買い物に行ったついでに → 名詞用「の」，動詞用た形'],
        },
    },
    // ━━━ わりに (considering / for - additional) ━━━
    {
        id: 'g_n2_254', category: 'grammar', level: 'N2', tags: ['contrast', 'unexpected'],
        stem: 'このレストランは値段{ねだん}が高{たか}い___、あまり美味{おい}しくない。',
        stemZh: '這家餐廳價格高的同時，卻不太好吃。',
        options: [
            { text: 'わりに', reason: '正確！「わりに」表示「雖然…但是（與預期不符）」。' },
            { text: '反面', reason: '「反面」表示「另一方面」，可以但語感不同。' },
            { text: 'にしては', reason: '「にしては」表示「就…而言（出乎意料）」，也可以但語感不同。' },
            { text: 'くせに', reason: '「くせに」表示「明明…卻…」，帶有責備語氣。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わりに」表示與程度不相稱的結果',
            analysis: '「わりに」用於表示實際情況與預期的程度不相符，帶有意外的語感。',
            comparisons: ['わりに：雖然…但是（不相稱）', 'にしては：就…而言（意外）', 'のに：雖然…但是（不滿）'],
            commonMistakes: ['○ 高いわりに / × 高いのわりに → 形容詞直接接「わりに」'],
        },
    },
    // ━━━ にしては (considering - additional) ━━━
    {
        id: 'g_n2_255', category: 'grammar', level: 'N2', tags: ['unexpected', 'evaluation'],
        stem: '日本語{にほんご}を一年{いちねん}しか勉強{べんきょう}していない___、とても上手{じょうず}だ。',
        stemZh: '以只學了一年日語來說，非常厲害。',
        options: [
            { text: 'のに', reason: '「のに」表示「雖然…但是」，帶有不滿語氣。' },
            { text: 'にしては', reason: '正確！「にしては」表示「就…而言」，與預期不同。' },
            { text: 'わりに', reason: '「わりに」也可以表示「以…而言」，但語感不如「にしては」強。' },
            { text: 'としても', reason: '「としても」表示「即使…」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「にしては」表示與基準相比出乎意料',
            analysis: '「にしては」以某個基準或條件來衡量，表示實際情況與根據該基準的預期不同。可以是好的也可以是壞的意外。',
            comparisons: ['にしては：就…而言（出乎意料）', 'わりに：雖然…但是（不相稱）'],
            commonMistakes: ['○ 一年にしては / × 一年としては → 用「にしては」不用「としては」'],
        },
    },
    // ━━━ に反して (contrary to) - additional ━━━
    {
        id: 'g_n2_256', category: 'grammar', level: 'N2', tags: ['contrast', 'opposite'],
        stem: '予想{よそう}___、試合{しあい}は大差{たいさ}で負{ま}けてしまった。',
        stemZh: '與預期相反，比賽大幅落敗了。',
        options: [
            { text: 'に反して', reason: '正確！「に反して」表示「與…相反」。' },
            { text: 'に対して', reason: '「に対して」表示「對於…」，不表示相反。' },
            { text: 'に比べて', reason: '「に比べて」表示「與…相比」，不表示相反。' },
            { text: 'に伴って', reason: '「に伴って」表示「伴隨著…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に反して」表示與預期或規則相反',
            analysis: '「に反して」用於表示實際結果與預期、期待、規則等完全相反。',
            comparisons: ['に反して：與…相反（結果與預期相反）', '逆に：反而（副詞用法）'],
            commonMistakes: ['○ 予想に反して / × 予想を反して → 用「に」不用「を」'],
        },
    },
    // ━━━ に伴って (along with - additional) ━━━
    {
        id: 'g_n2_257', category: 'grammar', level: 'N2', tags: ['accompanying', 'change'],
        stem: '経済{けいざい}の発展{はってん}___、環境{かんきょう}問題{もんだい}も深刻{しんこく}になってきた。',
        stemZh: '隨著經濟發展，環境問題也變得嚴重起來。',
        options: [
            { text: 'に伴って', reason: '正確！「に伴って」表示「伴隨著…」，兩者同時發生變化。' },
            { text: 'に応じて', reason: '「に応じて」表示「根據…而變化」，語感不同。' },
            { text: 'に沿って', reason: '「に沿って」表示「沿著…」，語意不同。' },
            { text: 'に基づいて', reason: '「に基づいて」表示「基於…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に伴って」表示兩個事物同時變化',
            analysis: '「に伴って」用於描述一個事物的變化帶動另一個事物也發生變化，強調伴隨關係。',
            comparisons: ['に伴って：伴隨著…（同步變化）', 'につれて：隨著…（漸進變化）', 'とともに：隨著…/和…一起'],
            commonMistakes: ['○ 発展に伴って / × 発展を伴って → 用「に」不用「を」表示原因'],
        },
    },
    // ━━━ をめぐって (concerning / around - additional) ━━━
    {
        id: 'g_n2_258', category: 'grammar', level: 'N2', tags: ['dispute', 'discussion'],
        stem: '新{あたら}しい法律{ほうりつ}___、賛否両論{さんぴりょうろん}の議論{ぎろん}が続{つづ}いている。',
        stemZh: '圍繞新法律，贊成和反對的討論持續進行著。',
        options: [
            { text: 'について', reason: '「について」表示「關於…」，較一般，不強調爭議。' },
            { text: 'に関して', reason: '「に関して」表示「關於…」，較正式但不強調爭議。' },
            { text: 'をめぐって', reason: '正確！「をめぐって」表示「圍繞著…（有爭議/討論）」。' },
            { text: 'に対して', reason: '「に対して」表示「對於…」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「をめぐって」暗示有爭議或多方意見',
            analysis: '「をめぐって」專門用於圍繞某個議題存在爭論、討論或對立意見的情境。',
            comparisons: ['をめぐって：圍繞著…（有爭議）', 'について：關於…（中性話題）'],
            commonMistakes: ['○ 法律をめぐって / × 法律にめぐって → 用「を」不用「に」'],
        },
    },
    // ━━━ を通じて / を通して (through / throughout - additional) ━━━
    {
        id: 'g_n2_259', category: 'grammar', level: 'N2', tags: ['means', 'throughout'],
        stem: 'ボランティア活動{かつどう}___、多{おお}くのことを学{まな}んだ。',
        stemZh: '透過志工活動，學到了很多東西。',
        options: [
            { text: 'を通じて', reason: '正確！「を通じて」表示「透過…」，以某事為媒介。' },
            { text: 'をもとに', reason: '「をもとに」表示「以…為基礎」，語意不同。' },
            { text: 'を契機に', reason: '「を契機に」表示「以…為契機」，語意不同。' },
            { text: 'をはじめ', reason: '「をはじめ」表示「以…為首」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を通じて」表示透過某種媒介或手段',
            analysis: '「を通じて」有兩個主要用法：(1)透過某種手段或媒介、(2)在整個期間中。此題為第一種用法。',
            comparisons: ['を通じて：透過…/在整個…期間（較書面）', 'を通して：透過…/在整個…期間（較口語）'],
            commonMistakes: ['○ 活動を通じて / ○ 活動を通して → 兩種都可以使用'],
        },
    },
    // ━━━ にわたって (spanning - additional) ━━━
    {
        id: 'g_n2_260', category: 'grammar', level: 'N2', tags: ['range', 'duration'],
        stem: 'この工事{こうじ}は三年間{さんねんかん}___行{おこな}われた。',
        stemZh: '這項工程持續了三年之久。',
        options: [
            { text: 'をかけて', reason: '「をかけて」表示「花費…」，也可以但語感不同。' },
            { text: 'に至るまで', reason: '「に至るまで」表示「直到…」，不適合接時間長度。' },
            { text: 'にわたって', reason: '正確！「にわたって」表示「歷時…/跨越…」。' },
            { text: 'を通じて', reason: '「を通じて」表示「在整個…期間」，可以但語感不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「にわたって」強調持續的時間或範圍之廣',
            analysis: '「にわたって」用於強調某事在時間或空間上的持續範圍之廣，帶有驚嘆的語氣。',
            comparisons: ['にわたって：歷時…/跨越…（強調範圍）', 'の間：在…期間（一般）'],
            commonMistakes: ['○ 三年間にわたって / × 三年間をわたって → 用「に」不用「を」'],
        },
    },
    // ━━━ を問わず (regardless of - additional) ━━━
    {
        id: 'g_n2_261', category: 'grammar', level: 'N2', tags: ['regardless', 'inclusive'],
        stem: '経験{けいけん}の有無{うむ}___、やる気{き}のある方{かた}を募集{ぼしゅう}しています。',
        stemZh: '不論有無經驗，我們招募有幹勁的人。',
        options: [
            { text: 'にかかわらず', reason: '「にかかわらず」也表示「不論…」，意思相近。' },
            { text: 'に限らず', reason: '「に限らず」表示「不限於…」，語感不同。' },
            { text: 'を問わず', reason: '正確！「を問わず」表示「不問…/不論…」。' },
            { text: 'はもちろん', reason: '「はもちろん」表示「不用說…」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「を問わず」表示不在乎某個條件',
            analysis: '「を問わず」常與「有無」「男女」「年齢」等對立概念搭配，表示不以此為條件。常見於招聘啟事。',
            comparisons: ['を問わず：不問…（正式）', 'にかかわらず：不管…（同義）', 'に関係なく：與…無關（口語）'],
            commonMistakes: ['○ 経験の有無を問わず / × 経験を問わず → 常與「有無」搭配'],
        },
    },
    // ━━━ に限らず (not limited to - additional) ━━━
    {
        id: 'g_n2_262', category: 'grammar', level: 'N2', tags: ['expansion', 'not_only'],
        stem: '若者{わかもの}___、高齢者{こうれいしゃ}もスマートフォンを使{つか}う時代{じだい}になった。',
        stemZh: '不僅是年輕人，老年人也使用智慧型手機的時代來臨了。',
        options: [
            { text: 'に限らず', reason: '正確！「に限らず」表示「不限於…」，範圍更廣。' },
            { text: 'ばかりか', reason: '「ばかりか」表示「不僅…而且」，也可以但用法不同。' },
            { text: 'はもちろん', reason: '「はもちろん」表示「不用說…」，語感不同。' },
            { text: 'をはじめ', reason: '「をはじめ」表示「以…為首」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に限らず」表示不僅限於某範圍',
            analysis: '「に限らず」用於表示某事不僅限於某個群體或範圍，而是更廣泛地適用。',
            comparisons: ['に限らず：不限於…（擴大範圍）', 'ばかりか：不僅…而且（遞進）', 'のみならず：不僅…（書面）'],
            commonMistakes: ['○ 若者に限らず / × 若者を限らず → 用「に」不用「を」'],
        },
    },
    // ━━━ のみならず (not only - additional) ━━━
    {
        id: 'g_n2_263', category: 'grammar', level: 'N2', tags: ['formal', 'expansion'],
        stem: 'この問題{もんだい}は日本{にほん}___、世界中{せかいじゅう}で議論{ぎろん}されている。',
        stemZh: '這個問題不僅在日本，在全世界都被討論著。',
        options: [
            { text: 'だけでなく', reason: '「だけでなく」也表示「不僅…」，但較口語。' },
            { text: 'のみならず', reason: '正確！「のみならず」表示「不僅…」，書面語。' },
            { text: 'ばかりか', reason: '「ばかりか」表示「不僅…而且」，口語色彩較強。' },
            { text: 'に限らず', reason: '「に限らず」表示「不限於…」，語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「のみならず」是「だけでなく」的書面語',
            analysis: '「のみならず」是較正式的書面表達，相當於「だけでなく」，用於論文、新聞等正式場合。',
            comparisons: ['のみならず：不僅…（書面正式）', 'だけでなく：不僅…（口語一般）', 'ばかりか：不僅…而且（口語強調）'],
            commonMistakes: ['○ 日本のみならず / × 日本だけのみならず → 不能與「だけ」重複'],
        },
    },
    // ━━━ ばかりに (just because - additional) ━━━
    {
        id: 'g_n2_264', category: 'grammar', level: 'N2', tags: ['regret', 'cause_negative'],
        stem: '一言{ひとこと}余計{よけい}なことを言{い}った___、友人{ゆうじん}との関係{かんけい}が悪{わる}くなってしまった。',
        stemZh: '只因為多說了一句話，和朋友的關係就變糟了。',
        options: [
            { text: 'せいで', reason: '「せいで」也表示「因為…（壞結果）」，但不如「ばかりに」強調後悔。' },
            { text: 'ばかりに', reason: '正確！「ばかりに」表示「只因為…（導致壞結果）」，帶有強烈後悔。' },
            { text: 'からには', reason: '「からには」表示「既然…就…」，語意不同。' },
            { text: 'ものだから', reason: '「ものだから」表示「因為…（辯解）」，語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ばかりに」強調因小事導致壞結果的後悔',
            analysis: '「ばかりに」用於表示只因為某個小原因就導致了不好的結果，帶有強烈的後悔或遺憾。',
            comparisons: ['ばかりに：只因為…（後悔）', 'せいで：因為…（歸咎）', 'ものだから：因為…嘛（辯解）'],
            commonMistakes: ['○ 言ったばかりに / × 言うばかりに → 前面常用た形'],
        },
    },
    // ━━━ ものだから (because - excuse - additional) ━━━
    {
        id: 'g_n2_265', category: 'grammar', level: 'N2', tags: ['excuse', 'reason'],
        stem: '急{いそ}いでいた___、財布{さいふ}を忘{わす}れてきてしまった。',
        stemZh: '因為太急了，就把錢包忘在那裡了。',
        options: [
            { text: 'ものだから', reason: '正確！「ものだから」表示「因為…嘛」，用於辯解。' },
            { text: 'からこそ', reason: '「からこそ」表示「正因為…」，語意不同。' },
            { text: 'ばかりに', reason: '「ばかりに」表示「只因為…（後悔）」，語氣不同。' },
            { text: 'ことから', reason: '「ことから」表示「由於…」，不帶辯解語氣。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものだから」帶有辯解和解釋的語氣',
            analysis: '「ものだから」用於為自己的行為辯解，暗示「不是故意的，是因為…」。口語中常說「もんだから」。',
            comparisons: ['ものだから：因為…嘛（辯解）', 'から：因為…（一般原因）', 'ので：因為…（客觀原因）'],
            commonMistakes: ['○ 急いでいたものだから / × 急いだものだから → 用ていた形表示當時狀態'],
        },
    },
    // ━━━ ものの (although - additional) ━━━
    {
        id: 'g_n2_266', category: 'grammar', level: 'N2', tags: ['concession', 'contrast'],
        stem: '新{あたら}しいパソコンを買{か}った___、使{つか}い方{かた}がよくわからない。',
        stemZh: '雖然買了新電腦，但不太會用。',
        options: [
            { text: 'のに', reason: '「のに」也表示「雖然…但是」，但帶有不滿語氣。' },
            { text: 'けれども', reason: '「けれども」表示「雖然…但是」，較一般。' },
            { text: 'ところで', reason: '「ところで」表示「即使…也」，接續不同。' },
            { text: 'ものの', reason: '正確！「ものの」表示「雖然…但是」，書面語。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「ものの」表示雖然…但是（書面語的讓步）',
            analysis: '「ものの」用於承認前項事實，但後項表示與之不符的狀態。語氣較為冷靜客觀，常用於書面語。',
            comparisons: ['ものの：雖然…但是（書面冷靜）', 'のに：雖然…但是（帶有不滿）', 'けれども：雖然…但是（一般）'],
            commonMistakes: ['○ 買ったものの / × 買うものの → 前面常用た形'],
        },
    },
    // ━━━ からこそ (precisely because - additional) ━━━
    {
        id: 'g_n2_267', category: 'grammar', level: 'N2', tags: ['emphasis', 'reason'],
        stem: '失敗{しっぱい}した___、学{まな}べることがたくさんある。',
        stemZh: '正因為失敗了，才能學到很多東西。',
        options: [
            { text: 'ばかりに', reason: '「ばかりに」表示「只因為…（壞結果）」，語意不同。' },
            { text: 'からこそ', reason: '正確！「からこそ」表示「正因為…才…」，強調原因。' },
            { text: 'からには', reason: '「からには」表示「既然…就…」，語意不同。' },
            { text: 'からして', reason: '「からして」表示「從…來看」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「からこそ」強調因果關係中的「正因為」',
            analysis: '「からこそ」用於特別強調原因，表示「正是因為A，所以才B」，帶有積極肯定的語氣。',
            comparisons: ['からこそ：正因為…才…（強調原因）', 'から：因為…（一般原因）'],
            commonMistakes: ['○ 失敗したからこそ / × 失敗だからこそ → 動詞用た形接續'],
        },
    },
    // ━━━ あまり (to the extent that - additional) ━━━
    {
        id: 'g_n2_268', category: 'grammar', level: 'N2', tags: ['excess', 'cause'],
        stem: '嬉{うれ}しさの___、涙{なみだ}が止{と}まらなかった。',
        stemZh: '因為太開心了，眼淚停不住。',
        options: [
            { text: 'あまり', reason: '正確！「あまり」表示「因為太…而…」，感情過度導致的結果。' },
            { text: 'ために', reason: '「ために」表示「因為…」，不強調程度過度。' },
            { text: 'せいで', reason: '「せいで」表示「因為…（壞結果）」，不適合正面語境。' },
            { text: 'おかげで', reason: '「おかげで」表示「託…的福」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「名詞＋のあまり」表示感情過度導致某種結果',
            analysis: '「あまり」接在名詞後面時用「のあまり」，表示因為某種感情或狀態太過強烈而導致的結果。',
            comparisons: ['あまり：因為太…（程度過度）', 'ために：因為…（一般原因）'],
            commonMistakes: ['○ 嬉しさのあまり / × 嬉しいあまり → 名詞用「のあまり」，形容詞用「あまり」'],
        },
    },
    // ━━━ 上で (in doing / after doing - additional) ━━━
    {
        id: 'g_n2_269', category: 'grammar', level: 'N2', tags: ['condition', 'process'],
        stem: '日本{にほん}で生活{せいかつ}する___、言葉{ことば}の問題{もんだい}は避{さ}けられない。',
        stemZh: '在日本生活的時候，語言問題是無法避免的。',
        options: [
            { text: '上で', reason: '正確！「上で」表示「在…方面」或「做…的時候」。' },
            { text: 'ために', reason: '「ために」表示「為了…」，語意不同。' },
            { text: 'にあたって', reason: '「にあたって」表示「在…之際」，語感不同。' },
            { text: 'に際して', reason: '「に際して」表示「在…之際」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「上で」表示「在…的過程中/…時」',
            analysis: '「上で」有兩個用法：(1)動詞辭書形＋上で＝在做…的過程中、(2)動詞た形＋上で＝做了…之後。此題為第一種。',
            comparisons: ['する上で：在做…的過程中', 'した上で：做了…之後', 'の上で：在…方面'],
            commonMistakes: ['○ 生活する上で / × 生活の上で → 動詞用辭書形接「上で」'],
        },
    },
    // ━━━ 次第 (as soon as / depending on - additional) ━━━
    {
        id: 'g_n2_270', category: 'grammar', level: 'N2', tags: ['immediate', 'action'],
        stem: '結果{けっか}がわかり___、すぐにご連絡{れんらく}いたします。',
        stemZh: '一有結果就立刻聯絡您。',
        options: [
            { text: 'ながら', reason: '「ながら」表示「一邊…一邊…」，語意不同。' },
            { text: 'つつ', reason: '「つつ」表示「一邊…一邊…」，語意不同。' },
            { text: '次第', reason: '正確！「次第」表示「一…就…」，立即採取行動。' },
            { text: 'たとたん', reason: '「たとたん」也表示「一…就…」，但語感不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ます形去ます＋次第」表示一…就立刻…',
            analysis: '「次第」接在動詞連用形後表示「一…就…」，常用於商務場合，表示動作完成後立即採取下一步行動。',
            comparisons: ['次第：一…就…（鄭重承諾）', 'たら：…了之後（一般）', 'や否や：剛…就…（文學性）'],
            commonMistakes: ['○ わかり次第 / × わかった次第 → 用連用形（ます形去ます）不用た形'],
        },
    },
    // ━━━ 次第で (depending on) ━━━
    {
        id: 'g_n2_271', category: 'grammar', level: 'N2', tags: ['condition', 'variable'],
        stem: '結果{けっか}は努力{どりょく}___変{か}わる。',
        stemZh: '結果取決於努力。',
        options: [
            { text: '次第で', reason: '正確！「次第で」表示「取決於…」。' },
            { text: 'によって', reason: '「によって」也表示「根據…」，但語感不同。' },
            { text: 'に応じて', reason: '「に応じて」表示「根據…而變化」，語感不同。' },
            { text: 'をもとに', reason: '「をもとに」表示「以…為基礎」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「次第で」表示某事物取決於某個條件',
            analysis: '「次第で」用於表示結果由某個關鍵因素決定，強調「全看…而定」。',
            comparisons: ['次第で：取決於…（關鍵因素）', 'によって：根據…（方法或原因）', 'に応じて：根據…而相應變化'],
            commonMistakes: ['○ 努力次第で / × 努力する次第で → 名詞直接接「次第で」'],
        },
    },
    // ━━━ に応じて (according to - additional) ━━━
    {
        id: 'g_n2_272', category: 'grammar', level: 'N2', tags: ['correspondence', 'adjustment'],
        stem: 'お客様{きゃくさま}のご要望{ようぼう}___、プランを変更{へんこう}いたします。',
        stemZh: '根據客人的需求，我們會變更方案。',
        options: [
            { text: 'に応じて', reason: '正確！「に応じて」表示「根據…相應地」。' },
            { text: 'に基づいて', reason: '「に基づいて」表示「基於…」，較為固定不變。' },
            { text: 'に沿って', reason: '「に沿って」表示「沿著…」，語意不同。' },
            { text: 'に際して', reason: '「に際して」表示「在…之際」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に応じて」表示根據情況靈活應對',
            analysis: '「に応じて」用於表示根據不同情況或需求做出相應的調整或變化，強調靈活性。',
            comparisons: ['に応じて：根據…相應地（靈活調整）', 'に基づいて：基於…（固定依據）', '次第で：取決於…（決定性因素）'],
            commonMistakes: ['○ 要望に応じて / × 要望を応じて → 用「に」不用「を」'],
        },
    },
    // ━━━ ばかりか (not only - additional) ━━━
    {
        id: 'g_n2_273', category: 'grammar', level: 'N2', tags: ['expansion', 'addition'],
        stem: '彼{かれ}は勉強{べんきょう}ができる___、スポーツも万能{ばんのう}だ。',
        stemZh: '他不僅會讀書，運動也是全能的。',
        options: [
            { text: 'ばかりか', reason: '正確！「ばかりか」表示「不僅…而且」，遞進強調。' },
            { text: 'ものの', reason: '「ものの」表示「雖然…但是」，語意相反。' },
            { text: 'からこそ', reason: '「からこそ」表示「正因為…」，語意不同。' },
            { text: 'あまり', reason: '「あまり」表示「因為太…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばかりか」表示不僅A還有B，遞進強調',
            analysis: '「ばかりか」用於表示不僅具有A的特質，還進一步具有B的特質，後者通常更加出人意料。',
            comparisons: ['ばかりか：不僅…而且（驚訝）', 'だけでなく：不僅…也（一般）', 'のみならず：不僅…（書面）'],
            commonMistakes: ['○ できるばかりか / × できたばかりか → 前面用辭書形或現在形'],
        },
    },
    // ━━━ に過ぎない (merely - additional) ━━━
    {
        id: 'g_n2_274', category: 'grammar', level: 'N2', tags: ['limitation', 'modesty'],
        stem: '私{わたし}の意見{いけん}は個人的{こじんてき}な感想{かんそう}___。',
        stemZh: '我的意見僅僅是個人的感想而已。',
        options: [
            { text: 'にほかならない', reason: '「にほかならない」表示「正是…」，語意相反。' },
            { text: 'に相違ない', reason: '「に相違ない」表示「肯定是…」，語意不同。' },
            { text: 'に過ぎない', reason: '正確！「に過ぎない」表示「只不過是…」，謙虛或貶低。' },
            { text: 'に限らない', reason: '「に限らない」表示「不限於…」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「に過ぎない」表示僅僅如此而已',
            analysis: '「に過ぎない」用於表示某事的程度或價值低於預期，帶有謙虛或貶低的語氣。',
            comparisons: ['に過ぎない：只不過是…（謙虛/貶低）', 'にほかならない：正是…（強調）', 'でしかない：只不過是…（更口語）'],
            commonMistakes: ['○ 感想に過ぎない / × 感想が過ぎない → 用「に」不用「が」'],
        },
    },
    // ━━━ に相違ない (certainly / no doubt - additional) ━━━
    {
        id: 'g_n2_275', category: 'grammar', level: 'N2', tags: ['certainty', 'formal'],
        stem: 'あれだけの証拠{しょうこ}がある以上{いじょう}、彼{かれ}が犯人{はんにん}___。',
        stemZh: '既然有那麼多證據，他肯定就是犯人。',
        options: [
            { text: 'に決まっている', reason: '「に決まっている」也表示「肯定是…」，但較口語。' },
            { text: 'に違いない', reason: '「に違いない」也表示「肯定是…」，但比「に相違ない」口語。' },
            { text: 'に過ぎない', reason: '「に過ぎない」表示「只不過是…」，語意完全不同。' },
            { text: 'に相違ない', reason: '正確！「に相違ない」表示「無疑是…」，非常正式的確信表達。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「に相違ない」是最正式的確信表達',
            analysis: '「に相違ない」是書面語，表示基於客觀證據的強烈確信。正式度：に相違ない＞に違いない＞に決まっている。',
            comparisons: ['に相違ない：無疑是…（最正式）', 'に違いない：一定是…（書面）', 'に決まっている：肯定是…（口語）'],
            commonMistakes: ['○ 犯人に相違ない / × 犯人が相違ない → 用「に」不用「が」'],
        },
    },
    // ━━━ に決まっている (must be / surely - additional) ━━━
    {
        id: 'g_n2_276', category: 'grammar', level: 'N2', tags: ['certainty', 'conviction'],
        stem: 'こんなに練習{れんしゅう}したんだから、明日{あした}の試合{しあい}は勝{か}つ___。',
        stemZh: '練習了這麼多，明天的比賽肯定會贏。',
        options: [
            { text: 'はずだ', reason: '「はずだ」表示「應該…」，確信度不如「に決まっている」。' },
            { text: 'だろう', reason: '「だろう」表示「大概…」，確信度較低。' },
            { text: 'に決まっている', reason: '正確！「に決まっている」表示「肯定…」，帶有強烈主觀確信。' },
            { text: 'かもしれない', reason: '「かもしれない」表示「也許…」，完全不確定。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「に決まっている」表示說話者的強烈主觀確信',
            analysis: '「に決まっている」用於表達說話者非常確信某事，語氣較口語，帶有「這是理所當然的」的感覺。',
            comparisons: ['に決まっている：肯定…（口語確信）', 'はずだ：應該…（推理判斷）', 'に違いない：一定…（書面確信）'],
            commonMistakes: ['○ 勝つに決まっている / × 勝ったに決まっている → 用辭書形表示未來確信'],
        },
    },
    // ━━━ まい (will not / probably not - additional) ━━━
    {
        id: 'g_n2_277', category: 'grammar', level: 'N2', tags: ['negative_volition', 'determination'],
        stem: 'もう二度{にど}とあんな危{あぶ}ないことはする___と心{こころ}に誓{ちか}った。',
        stemZh: '在心裡發誓再也不做那麼危險的事。',
        options: [
            { text: 'まい', reason: '正確！「まい」表示「絕不再…」，強烈的否定意志。' },
            { text: 'ない', reason: '「ない」是一般否定，不夠強烈。' },
            { text: 'ものか', reason: '「ものか」表示「絕不…」，語氣不同。' },
            { text: 'はずがない', reason: '「はずがない」表示「不可能…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「まい」表示強烈的否定意志',
            analysis: '「まい」有兩個用法：(1)否定意志「絕不再…」、(2)否定推量「大概不會…」。此題為第一種，表示堅定的決心。',
            comparisons: ['まい：絕不再…（否定決心）', 'ないだろう：大概不會…（推測）', 'ないつもりだ：不打算…（計畫）'],
            commonMistakes: ['○ するまい / × しまい → 「する」的まい形是「するまい」或「すまい」'],
        },
    },
    // ━━━ はおろか (let alone - additional) ━━━
    {
        id: 'g_n2_278', category: 'grammar', level: 'N2', tags: ['extreme', 'emphasis'],
        stem: '漢字{かんじ}___、ひらがなさえ読{よ}めない。',
        stemZh: '別說漢字了，連平假名都不會讀。',
        options: [
            { text: 'ばかりか', reason: '「ばかりか」表示「不僅…而且」，語氣不夠強烈。' },
            { text: 'はもちろん', reason: '「はもちろん」表示「不用說…」，語氣不夠極端。' },
            { text: 'に限らず', reason: '「に限らず」表示「不限於…」，語意不同。' },
            { text: 'はおろか', reason: '正確！「はおろか」表示「別說…了」，連更基本的都做不到。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「はおろか」表示「別說A了，連B都…」',
            analysis: '「はおろか」用於提出一個高標準的事物（A），然後表示連低標準的事物（B）都無法達到。後面常搭配「さえ」「すら」「も」。',
            comparisons: ['はおろか：別說…了（極端否定）', 'はもちろん：不用說…（正面列舉）', 'どころか：豈止…（超出預期）'],
            commonMistakes: ['○ 漢字はおろか、ひらがなさえ / × 漢字がおろか → 用「は」不用「が」'],
        },
    },
    // ━━━ どころか (far from / let alone - additional) ━━━
    {
        id: 'g_n2_279', category: 'grammar', level: 'N2', tags: ['extreme', 'contrast'],
        stem: '手伝{てつだ}う___、邪魔{じゃま}ばかりしている。',
        stemZh: '別說幫忙了，盡是在搗亂。',
        options: [
            { text: 'ばかりか', reason: '「ばかりか」表示「不僅…而且」，方向不同。' },
            { text: 'のみならず', reason: '「のみならず」表示「不僅…」，方向不同。' },
            { text: 'どころか', reason: '正確！「どころか」表示「豈止…/哪裡談得上…」，實際情況與預期完全相反。' },
            { text: 'はもちろん', reason: '「はもちろん」表示「不用說…」，方向不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「どころか」表示實際情況遠遠超出或低於預期',
            analysis: '「どころか」用於否定前者，強調實際情況與所提到的完全不同，甚至是相反的方向。',
            comparisons: ['どころか：豈止…（實際相反）', 'はおろか：別說…了（連基本都不行）', 'ばかりか：不僅…而且（同方向遞進）'],
            commonMistakes: ['○ 手伝うどころか / × 手伝いどころか → 動詞用辭書形'],
        },
    },
    // ━━━ に沿って (along / according to - additional) ━━━
    {
        id: 'g_n2_280', category: 'grammar', level: 'N2', tags: ['accordance', 'following'],
        stem: '計画{けいかく}___、プロジェクトを進{すす}めてください。',
        stemZh: '請按照計畫推進專案。',
        options: [
            { text: 'に基づいて', reason: '「に基づいて」表示「基於…」，較強調根據。' },
            { text: 'に沿って', reason: '正確！「に沿って」表示「按照…」，順著方針或計畫進行。' },
            { text: 'に応じて', reason: '「に応じて」表示「根據…而變化」，語感不同。' },
            { text: 'をもとに', reason: '「をもとに」表示「以…為基礎」，較靈活。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「に沿って」表示按照方針或計畫行動',
            analysis: '「に沿って」除了物理意義上的「沿著…」外，也可以表示按照某個方針、計畫、期待等行動。',
            comparisons: ['に沿って：按照…（順著方向）', 'に基づいて：基於…（嚴格依據）', 'に従って：遵循…（服從指示）'],
            commonMistakes: ['○ 計画に沿って / × 計画を沿って → 用「に」不用「を」'],
        },
    },
    // ━━━ に越したことはない (best to / nothing better - additional) ━━━
    {
        id: 'g_n2_281', category: 'grammar', level: 'N2', tags: ['advice', 'ideal'],
        stem: '健康{けんこう}のためには、早寝早起{はやねはやお}きする___。',
        stemZh: '為了健康，早睡早起是最好不過的了。',
        options: [
            { text: 'に限る', reason: '「に限る」也表示「最好是…」，但語氣不同。' },
            { text: 'に越したことはない', reason: '正確！「に越したことはない」表示「…再好不過了」。' },
            { text: 'べきだ', reason: '「べきだ」表示「應該…」，語氣較強制。' },
            { text: 'ものだ', reason: '「ものだ」表示「應該…」或「本來就是…」，語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「に越したことはない」表示最好不過、最理想的選擇',
            analysis: '「に越したことはない」用於表示某件事是最理想的選擇，但暗示不一定能做到。語氣溫和。',
            comparisons: ['に越したことはない：…再好不過了（理想但不強制）', 'に限る：最好是…（推薦）', 'べきだ：應該…（強制）'],
            commonMistakes: ['○ 早寝早起きするに越したことはない / × 早寝早起きに越したことはない → 動詞用辭書形'],
        },
    },
    // ━━━ に限る (nothing beats / best to - additional) ━━━
    {
        id: 'g_n2_282', category: 'grammar', level: 'N2', tags: ['recommendation', 'best'],
        stem: '暑{あつ}い日{ひ}はビールを飲{の}む___。',
        stemZh: '大熱天最好就是喝啤酒。',
        options: [
            { text: 'に限る', reason: '正確！「に限る」表示「最好是…」，強烈推薦。' },
            { text: 'にかぎらない', reason: '「にかぎらない」表示「不限於…」，語意相反。' },
            { text: 'に越したことはない', reason: '「に越したことはない」表示「…再好不過了」，但語氣不同。' },
            { text: 'ことだ', reason: '「ことだ」表示建議「應該…」，語氣不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に限る」表示某個選擇是最好的',
            analysis: '「に限る」用於表達說話者認為某件事是最好的選擇，帶有強烈的個人推薦語氣。',
            comparisons: ['に限る：最好是…（推薦）', 'に越したことはない：…再好不過了（理想）'],
            commonMistakes: ['○ ビールを飲むに限る / ○ ビールに限る → 動詞或名詞都可以'],
        },
    },
    // ━━━ にかけては (when it comes to - additional context) ━━━
    {
        id: 'g_n2_283', category: 'grammar', level: 'N2', tags: ['specialty', 'pride'],
        stem: '数学{すうがく}___、クラスで一番{いちばん}の成績{せいせき}を誇{ほこ}っている。',
        stemZh: '說到數學，在班上擁有第一名的成績。',
        options: [
            { text: 'について', reason: '「について」表示「關於…」，不帶自信語氣。' },
            { text: 'にかけては', reason: '正確！「にかけては」表示「說到…方面」，暗示擅長。' },
            { text: 'に対して', reason: '「に対して」表示「對於…」，語意不同。' },
            { text: 'において', reason: '「において」表示「在…方面」，太正式且不帶自信語氣。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「にかけては」後面一定搭配正面評價',
            analysis: '「にかけては」的一大特徵是後面必定接正面的評價或自信的內容，不能接負面內容。',
            comparisons: ['にかけては：說到…方面（自信/擅長）', 'に関しては：關於…（中性）'],
            commonMistakes: ['○ 数学にかけては一番だ / × 数学にかけては苦手だ → 後面不能接負面評價'],
        },
    },
    // ━━━ 反面 (on the other hand - additional) ━━━
    {
        id: 'g_n2_284', category: 'grammar', level: 'N2', tags: ['contrast', 'two_sides'],
        stem: '彼{かれ}は仕事{しごと}に厳{きび}しい___、部下{ぶか}の面倒見{めんどうみ}がとてもいい。',
        stemZh: '他工作方面很嚴格，另一方面對下屬很照顧。',
        options: [
            { text: '反面', reason: '正確！「反面」表示「另一方面」，同一事物的兩面。' },
            { text: '一方で', reason: '「一方で」也表示「另一方面」，但可以是不同主語。' },
            { text: 'にもかかわらず', reason: '「にもかかわらず」表示「儘管…」，語感不同。' },
            { text: 'くせに', reason: '「くせに」表示「明明…卻…」，帶有責備。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「反面」強調同一人或物的兩個對比特質',
            analysis: '「反面」用於描述同一個人或事物具有兩個對立的特質，強調事物的兩面性。',
            comparisons: ['反面：另一方面（同一主語兩面性）', '一方で：另一方面（可以不同主語）'],
            commonMistakes: ['○ 厳しい反面 / × 厳しいの反面 → 形容詞直接接「反面」'],
        },
    },
    // ━━━ を契機に (taking the opportunity - additional) ━━━
    {
        id: 'g_n2_285', category: 'grammar', level: 'N2', tags: ['trigger', 'turning_point'],
        stem: '大地震{だいじしん}___、防災{ぼうさい}意識{いしき}が高{たか}まった。',
        stemZh: '以大地震為契機，防災意識提高了。',
        options: [
            { text: 'をきっかけに', reason: '「をきっかけに」也可以，但「を契機に」更書面正式。' },
            { text: 'を契機に', reason: '正確！「を契機に」表示「以…為契機」，書面正式語。' },
            { text: 'を通じて', reason: '「を通じて」表示「透過…」，語意不同。' },
            { text: 'をもとに', reason: '「をもとに」表示「以…為基礎」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「を契機に」是「をきっかけに」的書面語',
            analysis: '「を契機に」與「をきっかけに」意思相同，但「を契機に」更適合正式場合，常用於新聞報導。',
            comparisons: ['を契機に：以…為契機（書面正式）', 'をきっかけに：以…為契機（一般）', 'がきっかけで：以…為契機（口語）'],
            commonMistakes: ['○ 大地震を契機に / × 大地震が契機に → 用「を」不用「が」'],
        },
    },
    // ━━━ に際して (on the occasion of - additional) ━━━
    {
        id: 'g_n2_286', category: 'grammar', level: 'N2', tags: ['occasion', 'formal'],
        stem: '海外{かいがい}出張{しゅっちょう}___、パスポートの有効期限{ゆうこうきげん}を確認{かくにん}しておいてください。',
        stemZh: '在出國出差之際，請事先確認護照的有效期限。',
        options: [
            { text: 'の前に', reason: '「の前に」表示「在…之前」，太一般。' },
            { text: 'に際して', reason: '正確！「に際して」表示「在…之際」，正式場合。' },
            { text: 'のために', reason: '「のために」表示「為了…」，語意不同。' },
            { text: 'の結果', reason: '「の結果」表示「結果…」，語意完全不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「に際して」用於正式場合的「在…之際」',
            analysis: '「に際して」是書面語，用於描述某個正式或重要的場合。與「にあたって」意思相近。',
            comparisons: ['に際して：在…之際（正式）', 'にあたって：在…之際（重要場合）', 'の時に：在…的時候（一般）'],
            commonMistakes: ['○ 出張に際して / ○ 出張に際し → 兩種都可以'],
        },
    },
    // ━━━ ざるを得ない (have no choice but to - additional) ━━━
    {
        id: 'g_n2_287', category: 'grammar', level: 'N2', tags: ['obligation', 'no_choice'],
        stem: '証拠{しょうこ}が揃{そろ}った以上{いじょう}、事実{じじつ}を認{みと}め___。',
        stemZh: '既然證據都齊了，不得不承認事實。',
        options: [
            { text: 'ざるを得ない', reason: '正確！「ざるを得ない」表示「不得不…」，別無選擇。' },
            { text: 'わけにはいかない', reason: '「わけにはいかない」表示「不能…」，方向不同。' },
            { text: 'ことにする', reason: '「ことにする」表示「決定…」，是主動選擇。' },
            { text: 'べきだ', reason: '「べきだ」表示「應該…」，是義務建議。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ざるを得ない」表示迫不得已的行動',
            analysis: '「ざるを得ない」用於表示雖然不情願但不得不這樣做，強調被迫的感覺。',
            comparisons: ['ざるを得ない：不得不…（被迫）', 'なければならない：必須…（義務）', 'よりほかない：只好…（別無選擇）'],
            commonMistakes: ['○ 認めざるを得ない / × 認めないざるを得ない → 未然形接「ざる」'],
        },
    },
    // ━━━ きり (since / only - additional) ━━━
    {
        id: 'g_n2_288', category: 'grammar', level: 'N2', tags: ['continuation', 'limitation'],
        stem: '彼{かれ}は去年{きょねん}国{くに}に帰{かえ}った___、連絡{れんらく}がない。',
        stemZh: '他去年回國之後就沒有消息了。',
        options: [
            { text: 'まま', reason: '「まま」表示「保持…的狀態」，語感不同。' },
            { text: 'きり', reason: '正確！「きり」表示「自從…以後就一直沒…」。' },
            { text: 'ばかり', reason: '「ばかり」表示「盡是…」，語意不同。' },
            { text: 'だけ', reason: '「だけ」表示「只有…」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「きり」表示自從某個動作後就一直沒有後續',
            analysis: '「きり」用於表示做了某個動作之後，預期的後續變化沒有發生，一直維持著某種狀態。',
            comparisons: ['きり：自從…就沒…（缺乏後續）', 'まま：保持…的狀態（不變化）'],
            commonMistakes: ['○ 帰ったきり / × 帰るきり → 前面用た形'],
        },
    },
    // ━━━ がたい (difficult to - additional) ━━━
    {
        id: 'g_n2_289', category: 'grammar', level: 'N2', tags: ['difficulty', 'impossibility'],
        stem: '彼{かれ}の行動{こうどう}は理解{りかい}し___。',
        stemZh: '他的行為難以理解。',
        options: [
            { text: 'にくい', reason: '「にくい」也表示「難以…」，但較口語。' },
            { text: 'がたい', reason: '正確！「がたい」表示「難以…」，語氣更強，近乎不可能。' },
            { text: 'かねる', reason: '「かねる」表示「難以…」，較婉轉。' },
            { text: 'づらい', reason: '「づらい」表示「做起來困難」，強調物理或心理障礙。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「がたい」表示幾乎不可能做到',
            analysis: '「がたい」比「にくい」語氣更強，表示近乎不可能的困難。常用詞：信じがたい、理解しがたい、許しがたい。',
            comparisons: ['がたい：難以…（近乎不可能）', 'にくい：不容易…（一般困難）', 'かねる：難以…（婉轉拒絕）'],
            commonMistakes: ['○ 理解しがたい / × 理解がたい → 用動詞連用形（ます形去ます）'],
        },
    },
    // ━━━ っこない (no chance of - additional) ━━━
    {
        id: 'g_n2_290', category: 'grammar', level: 'N2', tags: ['impossibility', 'informal'],
        stem: 'そんな難{むずか}しい試験{しけん}、受{う}かり___よ。',
        stemZh: '那麼難的考試，絕不可能考上啦。',
        options: [
            { text: 'はしない', reason: '「はしない」表示「不會…」，語氣較溫和。' },
            { text: 'っこない', reason: '正確！「っこない」表示「絕對不可能…」，口語強烈否定。' },
            { text: 'わけがない', reason: '「わけがない」也表示「不可能…」，但用法不同。' },
            { text: 'がたい', reason: '「がたい」表示「難以…」，語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「っこない」是口語中最強烈的不可能表達',
            analysis: '「っこない」用動詞連用形（ます形去ます）接續，表示「絕對不可能…」，非常口語化。',
            comparisons: ['っこない：絕不可能…（口語最強）', 'わけがない：不可能…（較一般）', 'はずがない：不應該…（推理判斷）'],
            commonMistakes: ['○ 受かりっこない / × 受かるっこない → 用連用形不用辭書形'],
        },
    },
    // ━━━ 恐れがある (risk of - additional) ━━━
    {
        id: 'g_n2_291', category: 'grammar', level: 'N2', tags: ['risk', 'warning'],
        stem: '台風{たいふう}の影響{えいきょう}で、明日{あした}の便{びん}が欠航{けっこう}する___。',
        stemZh: '受颱風影響，明天的航班有停飛的可能。',
        options: [
            { text: 'かもしれない', reason: '「かもしれない」也表示可能性，但不帶「危險」的語感。' },
            { text: '恐れがある', reason: '正確！「恐れがある」表示「有…的危險/可能性」，用於負面預測。' },
            { text: 'はずだ', reason: '「はずだ」表示「應該…」，確信度過高。' },
            { text: 'に違いない', reason: '「に違いない」表示「肯定…」，確信度過高。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「恐れがある」用於正式場合的風險警告',
            analysis: '「恐れがある」是正式用語，用於新聞、公告等場合警告某種不好的事情可能發生。',
            comparisons: ['恐れがある：有…的危險（正式警告）', 'かもしれない：也許…（一般推測）', 'かねない：有可能…（擔心）'],
            commonMistakes: ['○ 欠航する恐れがある / × 欠航の恐れがある → 動詞用辭書形，名詞用「の」'],
        },
    },
    // ━━━ かねない (might - additional) ━━━
    {
        id: 'g_n2_292', category: 'grammar', level: 'N2', tags: ['possibility', 'worry'],
        stem: 'このまま放{ほう}っておくと、大{おお}きな事故{じこ}に繋{つな}がり___。',
        stemZh: '如果就這樣放著不管，有可能會導致重大事故。',
        options: [
            { text: 'かねない', reason: '正確！「かねない」表示「有可能…（不好的事）」。' },
            { text: 'かねる', reason: '「かねる」表示「難以…」，語意完全不同。' },
            { text: '得ない', reason: '「得ない」表示「不可能…」，語意不同。' },
            { text: 'がたい', reason: '「がたい」表示「難以…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かねない」表示不好的事情有可能發生',
            analysis: '「かねない」表示壞事有可能發生，帶有擔心和警告的語氣。注意與「かねる」（難以做到）的區別。',
            comparisons: ['かねない：有可能…（壞事，擔心）', 'かねる：難以…（婉轉拒絕）', '恐れがある：有…的危險（更正式）'],
            commonMistakes: ['○ 繋がりかねない / × 繋がるかねない → 用連用形不用辭書形'],
        },
    },
    // ━━━ 得る（える/うる）(possible - additional) ━━━
    {
        id: 'g_n2_293', category: 'grammar', level: 'N2', tags: ['possibility', 'potential'],
        stem: 'そのようなミスは誰{だれ}にでも起{お}こり___ことだ。',
        stemZh: '那種錯誤是任何人都有可能發生的事。',
        options: [
            { text: '得る', reason: '正確！「得る」表示「有可能…」，表示客觀上可能發生。' },
            { text: '得ない', reason: '「得ない」表示「不可能…」，語意相反。' },
            { text: 'かねない', reason: '「かねない」也表示可能，但帶有負面擔心。' },
            { text: 'がたい', reason: '「がたい」表示「難以…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「得る」表示客觀上有發生的可能性',
            analysis: '「得る（うる/える）」表示某事在客觀上是有可能發生的。讀音可以是「うる」或「える」。',
            comparisons: ['得る（うる）：有可能…（客觀可能性）', '得ない（えない）：不可能…（否定）', 'かねない：有可能…（擔心壞事）'],
            commonMistakes: ['○ 起こり得る / × 起こる得る → 用連用形接「得る」'],
        },
    },
    // ━━━ かねる (cannot bring oneself to - additional) ━━━
    {
        id: 'g_n2_294', category: 'grammar', level: 'N2', tags: ['inability', 'polite_refusal'],
        stem: 'その件{けん}に関{かん}しては、お答{こた}えし___。',
        stemZh: '關於那件事，恕我無法回答。',
        options: [
            { text: 'かねます', reason: '正確！「かねます」是「かねる」的禮貌形，表示「難以…」，婉轉拒絕。' },
            { text: 'できません', reason: '「できません」也表示「無法…」，但不夠婉轉。' },
            { text: 'いたしません', reason: '「いたしません」表示「不做…」，太直接。' },
            { text: 'かねません', reason: '「かねません」是「かねない」的禮貌形，表示「有可能…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かねます」用於商務場合的婉轉拒絕',
            analysis: '「かねる/かねます」是非常有禮貌的拒絕表達，常用於客服、商務等需要婉轉的場合。',
            comparisons: ['かねます：難以…（婉轉拒絕）', 'できません：無法…（直接拒絕）', 'いたしかねます：難以…（更鄭重）'],
            commonMistakes: ['○ お答えしかねます / × お答えかねます → 用「し」接續'],
        },
    },
    // ━━━ っぱなし (left as is - additional) ━━━
    {
        id: 'g_n2_295', category: 'grammar', level: 'N2', tags: ['neglect', 'criticism'],
        stem: '水道{すいどう}を出{だ}し___にしないでください。',
        stemZh: '請不要讓水龍頭一直開著不關。',
        options: [
            { text: 'まま', reason: '「まま」也表示「保持…的狀態」，但不帶批評語氣。' },
            { text: 'っぱなし', reason: '正確！「っぱなし」表示「一直…不管」，帶有批評語氣。' },
            { text: 'っきり', reason: '「っきり」表示「自從…以後」，語意不同。' },
            { text: 'がち', reason: '「がち」表示「容易…/動不動就…」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「っぱなし」表示做了某事後不收拾、不管',
            analysis: '「っぱなし」帶有批評或不滿的語氣，表示某個動作的結果一直被放置不管。常用於日常抱怨。',
            comparisons: ['っぱなし：一直…不管（批評）', 'まま：保持…的狀態（中性）'],
            commonMistakes: ['○ 出しっぱなし / × 出すっぱなし → 用連用形不用辭書形'],
        },
    },
    // ━━━ ことだから (because of someone's character) - additional ━━━
    {
        id: 'g_n2_296', category: 'grammar', level: 'N2', tags: ['character', 'expectation'],
        stem: '真面目{まじめ}な田中{たなか}さんの___、きっと時間{じかん}通{どお}りに来{く}るだろう。',
        stemZh: '因為田中是個認真的人，一定會準時來的吧。',
        options: [
            { text: 'ことだから', reason: '正確！「ことだから」表示「因為是（那樣性格的）…」。' },
            { text: 'ことから', reason: '「ことから」表示「由於…的緣故」，不強調性格。' },
            { text: 'ことだ', reason: '「ことだ」表示建議「應該…」，語意不同。' },
            { text: 'ことに', reason: '「ことに」表示「令人…的是」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことだから」根據某人一貫的性格來推測',
            analysis: '「ことだから」用於根據某人的性格、習慣或一貫表現來推測他的行為。前面通常接「人＋の」。',
            comparisons: ['ことだから：因為是（那樣的人）…（性格推測）', 'ことから：由於…的緣故（一般原因）'],
            commonMistakes: ['○ 田中さんのことだから / × 田中さんがことだから → 用「の」不用「が」'],
        },
    },
    // ━━━ ものではない (should not - additional) ━━━
    {
        id: 'g_n2_297', category: 'grammar', level: 'N2', tags: ['prohibition', 'moral'],
        stem: '人{ひと}の悪口{わるくち}を言{い}う___。',
        stemZh: '不應該說別人的壞話。',
        options: [
            { text: 'ことだ', reason: '「ことだ」表示建議「應該…」，語意方向不同。' },
            { text: 'ものだ', reason: '「ものだ」表示「本來就是…」或感嘆，語意不同。' },
            { text: 'ものではない', reason: '正確！「ものではない」表示「不應該…」，道德層面的勸誡。' },
            { text: 'わけがない', reason: '「わけがない」表示「不可能…」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ものではない」表示從道德或常識上不應該做的事',
            analysis: '「ものではない」用於表達從社會常識或道德角度來看不應該做的事情，帶有教誨的語氣。',
            comparisons: ['ものではない：不應該…（道德勸誡）', 'てはいけない：不可以…（禁止命令）', 'べきではない：不該…（義務判斷）'],
            commonMistakes: ['○ 言うものではない / × 言ったものではない → 用辭書形表示一般性勸誡'],
        },
    },
    // ━━━ ものなら (if possible - additional) ━━━
    {
        id: 'g_n2_298', category: 'grammar', level: 'N2', tags: ['hypothetical', 'wish'],
        stem: 'やり直{なお}せる___、もう一度{いちど}大学{だいがく}に入{はい}りたい。',
        stemZh: '如果能重來的話，想再上一次大學。',
        options: [
            { text: 'ものなら', reason: '正確！「ものなら」表示「如果能…的話」，假設難以實現的事。' },
            { text: 'としたら', reason: '「としたら」表示「如果…的話」，假設較一般。' },
            { text: 'ならば', reason: '「ならば」表示「如果…」，較正式但不帶「難以實現」的語感。' },
            { text: 'とすれば', reason: '「とすれば」表示「如果…的話」，較一般。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものなら」假設幾乎不可能實現的事',
            analysis: '「ものなら」用於假設說話者非常想做但知道很難或不可能實現的事情，帶有願望和遺憾。',
            comparisons: ['ものなら：如果能…的話（難以實現）', 'なら：如果…（一般假設）', 'としたら：假如…（較中性）'],
            commonMistakes: ['○ やり直せるものなら / × やり直すものなら → 用可能形表示「如果能…」'],
        },
    },
    // ━━━ ことだ (should / ought to - additional) ━━━
    {
        id: 'g_n2_299', category: 'grammar', level: 'N2', tags: ['advice', 'recommendation'],
        stem: '健康{けんこう}を維持{いじ}したいなら、毎日{まいにち}運動{うんどう}する___。',
        stemZh: '如果想維持健康，就應該每天運動。',
        options: [
            { text: 'べきだ', reason: '「べきだ」也表示「應該…」，但語氣更強制。' },
            { text: 'ことだ', reason: '正確！「ことだ」表示「應該…」，溫和的建議。' },
            { text: 'ものだ', reason: '「ものだ」表示常理或感嘆，不是直接建議。' },
            { text: 'わけだ', reason: '「わけだ」表示「難怪…」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ことだ」用於給予溫和的建議或忠告',
            analysis: '「ことだ」用於表達建議或忠告，語氣比「べきだ」溫和，常用於年長者對年輕人的勸告。',
            comparisons: ['ことだ：應該…（溫和建議）', 'べきだ：應該…（強烈義務）', 'ほうがいい：最好…（一般建議）'],
            commonMistakes: ['○ 運動することだ / × 運動するのことだ → 動詞辭書形直接接「ことだ」'],
        },
    },
    // ━━━ ものだ (how ~ / used to - additional) ━━━
    {
        id: 'g_n2_300', category: 'grammar', level: 'N2', tags: ['nostalgia', 'emotion'],
        stem: '子{こ}どもの頃{ころ}はよくこの川{かわ}で遊{あそ}んだ___。',
        stemZh: '小時候經常在這條河邊玩耍啊。',
        options: [
            { text: 'ことだ', reason: '「ことだ」表示建議「應該…」，語意不同。' },
            { text: 'わけだ', reason: '「わけだ」表示「難怪…」，語意不同。' },
            { text: 'ものだ', reason: '正確！「ものだ」表示對過去的感嘆和懷念。' },
            { text: 'はずだ', reason: '「はずだ」表示「應該…」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ものだ」的懷舊用法',
            analysis: '「ものだ」接在過去式後表示對過去的懷念和感嘆，帶有「以前常常…啊」的語感。',
            comparisons: ['ものだ（過去）：以前常常…啊（懷舊）', 'ものだ（現在）：本來就是…/真是…啊（常理/感嘆）'],
            commonMistakes: ['○ 遊んだものだ / × 遊ぶものだ → 懷舊用法前面用た形'],
        },
    },
    // ━━━ ことか (how ~! - additional) ━━━
    {
        id: 'g_n2_301', category: 'grammar', level: 'N2', tags: ['emotion', 'exclamation'],
        stem: '合格{ごうかく}の知{し}らせを聞{き}いて、どれほど嬉{うれ}しかった___。',
        stemZh: '聽到合格的消息，不知道有多開心啊。',
        options: [
            { text: 'ことか', reason: '正確！「ことか」表示「多麼…啊！」，強烈的感嘆。' },
            { text: 'ことだ', reason: '「ことだ」表示建議，語意不同。' },
            { text: 'ものだ', reason: '「ものだ」表示感嘆但語感不同。' },
            { text: 'わけだ', reason: '「わけだ」表示「難怪…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことか」表示強烈的感嘆',
            analysis: '「ことか」常與「どれほど」「何度」「どんなに」等疑問詞搭配，表示程度之深難以言喻。',
            comparisons: ['ことか：多麼…啊（深刻感嘆）', 'ものだ：真是…啊（一般感嘆）'],
            commonMistakes: ['○ どれほど嬉しかったことか / × どれほど嬉しいことか → 常用過去形'],
        },
    },
    // ━━━ わけだ (no wonder / that's why) ━━━
    {
        id: 'g_n2_302', category: 'grammar', level: 'N2', tags: ['reasoning', 'understanding'],
        stem: '彼{かれ}は十年{じゅうねん}もフランスに住{す}んでいたのか。フランス語{ご}が上手{じょうず}な___。',
        stemZh: '他在法國住了十年啊。難怪法語這麼好。',
        options: [
            { text: 'はずだ', reason: '「はずだ」表示「應該…」，推理語感不同。' },
            { text: 'ものだ', reason: '「ものだ」表示感嘆或常理，不表示「難怪」。' },
            { text: 'わけだ', reason: '正確！「わけだ」表示「難怪…」，理解了原因後的感嘆。' },
            { text: 'ことだ', reason: '「ことだ」表示建議，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「わけだ」表示了解原因後的恍然大悟',
            analysis: '「わけだ」用於得知某個事實後，理解了之前不明白的事情的原因，表示「原來如此/難怪…」。',
            comparisons: ['わけだ：難怪…（理解原因）', 'はずだ：應該…（推理判斷）'],
            commonMistakes: ['○ 上手なわけだ / × 上手のわけだ → な形容詞用「な」接續'],
        },
    },
    // ━━━ にしても (even if - additional context) ━━━
    {
        id: 'g_n2_303', category: 'grammar', level: 'N2', tags: ['concession', 'minimum'],
        stem: '反対{はんたい}する___、もう少{すこ}し穏{おだ}やかな言{い}い方{かた}があるだろう。',
        stemZh: '即使要反對，也應該有更溫和的說法吧。',
        options: [
            { text: 'にしても', reason: '正確！「にしても」表示「即使…也…」，讓步條件。' },
            { text: 'としても', reason: '「としても」也可以表示「即使…」，但語感略有不同。' },
            { text: 'にせよ', reason: '「にせよ」也可以，但更書面。' },
            { text: 'にしたら', reason: '「にしたら」表示「站在…的立場」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にしても」在此表示讓步條件',
            analysis: '「にしても」表示即使承認前項的事實，但後項仍然有不同的看法或要求。',
            comparisons: ['にしても：即使…也（讓步）', 'としても：即使…也（假設性更強）', 'にせよ：即便…也（書面）'],
            commonMistakes: ['○ 反対するにしても / × 反対にしても → 動詞用辭書形接續'],
        },
    },
    // ━━━ たところで (even if one does - additional) ━━━
    {
        id: 'g_n2_304', category: 'grammar', level: 'N2', tags: ['futility', 'pessimism'],
        stem: '今{いま}さら謝{あやま}った___、許{ゆる}してもらえないだろう。',
        stemZh: '事到如今即使道歉，也不會被原諒吧。',
        options: [
            { text: 'としても', reason: '「としても」表示「即使…」，但不帶「徒勞」的語感。' },
            { text: 'にしても', reason: '「にしても」表示「即使…」，不強調徒勞感。' },
            { text: 'ところで', reason: '正確！「たところで」表示「即使做了…也（沒用）」。' },
            { text: 'からには', reason: '「からには」表示「既然…就…」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「たところで」強調做了也是白費力氣',
            analysis: '「たところで」用於表示即使做了某事，結果也不會有什麼改變或好轉，帶有悲觀、徒勞的語氣。',
            comparisons: ['たところで：即使做了…也（徒勞）', 'としても：即使…也（一般讓步）'],
            commonMistakes: ['○ 謝ったところで / × 謝るところで → 前面用た形'],
        },
    },
    // ━━━ にせよ (even if - additional) ━━━
    {
        id: 'g_n2_305', category: 'grammar', level: 'N2', tags: ['concession', 'formal'],
        stem: 'どんな理由{りゆう}がある___、暴力{ぼうりょく}は許{ゆる}されない。',
        stemZh: '不管有什麼理由，暴力都是不被允許的。',
        options: [
            { text: 'にしても', reason: '「にしても」也可以，但不如「にせよ」書面正式。' },
            { text: 'としても', reason: '「としても」表示「即使…」，用法不同。' },
            { text: 'にせよ', reason: '正確！「にせよ」表示「即便…也…」，書面語。' },
            { text: 'ところで', reason: '「ところで」需要用た形，接續不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「にせよ」是較正式的讓步表達',
            analysis: '「にせよ」與「にしても」意思相同，但更適合書面語和正式場合。可以與「にしろ」互換。',
            comparisons: ['にせよ：即便…也（書面正式）', 'にしても：即使…也（口語一般）', 'にしろ：即使…也（口語）'],
            commonMistakes: ['○ 理由があるにせよ / × 理由のにせよ → 動詞或形容詞接續'],
        },
    },
    // ━━━ ずにはいられない (cannot help but - additional) ━━━
    {
        id: 'g_n2_306', category: 'grammar', level: 'N2', tags: ['involuntary', 'emotion'],
        stem: 'あの感動的{かんどうてき}な映画{えいが}を見{み}たら、泣{な}か___。',
        stemZh: '看了那部感人的電影，忍不住就哭了。',
        options: [
            { text: 'ずにはいられない', reason: '正確！「ずにはいられない」表示「忍不住…」。' },
            { text: 'ないわけにはいかない', reason: '「ないわけにはいかない」表示「不能不…」，是義務感。' },
            { text: 'なければならない', reason: '「なければならない」表示「必須…」，語意不同。' },
            { text: 'ないことはない', reason: '「ないことはない」表示「並非不…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ずにはいられない」表示無法控制的情感反應',
            analysis: '「ずにはいられない」與「ないではいられない」同義，用於表示情感上無法抑制自己。注意「する」變「せずに」。',
            comparisons: ['ずにはいられない：忍不住…（書面）', 'ないではいられない：忍不住…（口語）'],
            commonMistakes: ['○ 泣かずにはいられない / × 泣かないずにはいられない → 用未然形接「ず」'],
        },
    },
    // ━━━ に限って (particularly - additional) ━━━
    {
        id: 'g_n2_307', category: 'grammar', level: 'N2', tags: ['irony', 'frustration'],
        stem: '傘{かさ}を持{も}っていない日{ひ}___雨{あめ}が降{ふ}る。',
        stemZh: '偏偏沒帶傘的日子就下雨。',
        options: [
            { text: 'にかぎって', reason: '正確！「に限って」表示「偏偏…」，強調不巧。' },
            { text: 'にかぎらず', reason: '「に限らず」表示「不限於…」，語意相反。' },
            { text: 'にかぎり', reason: '「に限り」表示「僅限於…」，語意不同。' },
            { text: 'にかぎる', reason: '「に限る」表示「最好是…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に限って」表示偏偏在最不想的時候發生',
            analysis: '「に限って」用於表達諷刺或無奈，表示偏偏在最不希望的情況下發生了不好的事。',
            comparisons: ['に限って：偏偏…（無奈諷刺）', 'に限り：僅限…（限定條件）', 'に限る：最好是…（推薦）'],
            commonMistakes: ['○ 傘を持っていない日に限って / × 傘を持たない日が限って → 用「に」不用「が」'],
        },
    },
    // ━━━ に関わる (related to / affects - additional) ━━━
    {
        id: 'g_n2_308', category: 'grammar', level: 'N2', tags: ['involvement', 'seriousness'],
        stem: 'これは会社{かいしゃ}の信用{しんよう}___問題{もんだい}だ。',
        stemZh: '這是關係到公司信譽的問題。',
        options: [
            { text: 'に関する', reason: '「に関する」表示「關於…」，不強調嚴重性。' },
            { text: 'にかかわる', reason: '正確！「にかかわる」表示「關係到…/涉及…」，強調影響的嚴重性。' },
            { text: 'についての', reason: '「についての」表示「關於…的」，太一般。' },
            { text: 'における', reason: '「における」表示「在…方面的」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「にかかわる」強調事情的嚴重性和影響',
            analysis: '「にかかわる」用於表示某件事關係到重要的事物（如生命、名譽、信用等），強調影響的嚴重性。',
            comparisons: ['にかかわる：關係到…（嚴重影響）', 'に関する：關於…（一般關聯）'],
            commonMistakes: ['○ 信用にかかわる問題 / × 信用がかかわる問題 → 用「に」不用「が」'],
        },
    },
    // ━━━ どころではない (far from - additional) ━━━
    {
        id: 'g_n2_309', category: 'grammar', level: 'N2', tags: ['impossibility', 'busy'],
        stem: '締{し}め切{き}りが明日{あした}なので、遊{あそ}ぶ___。',
        stemZh: '因為截止日期是明天，根本不是能玩的時候。',
        options: [
            { text: 'わけがない', reason: '「わけがない」表示「不可能…」，語感不同。' },
            { text: 'はずがない', reason: '「はずがない」表示「不應該…」，語感不同。' },
            { text: 'ものではない', reason: '「ものではない」表示「不應該…」，語感不同。' },
            { text: 'どころではない', reason: '正確！「どころではない」表示「哪裡談得上…/不是…的時候」。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「どころではない」表示情況不允許做某事',
            analysis: '「どころではない」用於表示因為某種情況太忙或太緊急，根本沒有餘力去做某事。',
            comparisons: ['どころではない：哪裡談得上…（沒有餘力）', 'どころか：豈止…（超出預期）'],
            commonMistakes: ['○ 遊ぶどころではない / × 遊びどころではない → 用辭書形'],
        },
    },
    // ━━━ 以上は (since / now that - additional) ━━━
    {
        id: 'g_n2_310', category: 'grammar', level: 'N2', tags: ['obligation', 'determination'],
        stem: '引{ひ}き受{う}けた___、最後{さいご}まで責任{せきにん}を持{も}ってやり遂{と}げる。',
        stemZh: '既然接受了，就要負責任地做到最後。',
        options: [
            { text: '以上は', reason: '正確！「以上は」表示「既然…就…」，強調義務和決心。' },
            { text: 'からには', reason: '「からには」也表示「既然…就…」，意思相近。' },
            { text: 'からして', reason: '「からして」表示「從…來看」，語意不同。' },
            { text: 'ものの', reason: '「ものの」表示「雖然…但是」，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「以上は」與「からには」同義，表示既定事實帶來的責任',
            analysis: '「以上は」用於表示既然某件事已經成為事實，就必須承擔相應的責任或義務。',
            comparisons: ['以上は：既然…就…（義務感強）', 'からには：既然…就…（決心感強）'],
            commonMistakes: ['○ 引き受けた以上は / × 引き受ける以上は → 前面常用た形'],
        },
    },
    // ━━━ において (in / at - additional) ━━━
    {
        id: 'g_n2_311', category: 'grammar', level: 'N2', tags: ['formal', 'location', 'context'],
        stem: '現代社会{げんだいしゃかい}___、コミュニケーション能力{のうりょく}は不可欠{ふかけつ}だ。',
        stemZh: '在現代社會中，溝通能力是不可或缺的。',
        options: [
            { text: 'で', reason: '「で」也可以，但不夠正式。' },
            { text: 'において', reason: '正確！「において」是「で」的書面語，表示「在…方面/場所」。' },
            { text: 'にとって', reason: '「にとって」表示「對…來說」，語意不同。' },
            { text: 'に対して', reason: '「に対して」表示「對於…」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「において」是「で」的書面語表達',
            analysis: '「において」相當於助詞「で」，表示場所、場合、領域等，常用於正式文章或演講。修飾名詞時用「における」。',
            comparisons: ['において：在…（書面正式）', 'で：在…（口語一般）', 'における：在…的（修飾名詞）'],
            commonMistakes: ['○ 現代社会において / ○ 現代社会における → 句中用「において」，修飾名詞用「における」'],
        },
    },
    // ━━━ からといって (just because - additional) ━━━
    {
        id: 'g_n2_312', category: 'grammar', level: 'N2', tags: ['logic', 'warning'],
        stem: '有名{ゆうめい}だ___、必{かなら}ずしも信頼{しんらい}できるとは限{かぎ}らない。',
        stemZh: '不能因為有名就一定值得信賴。',
        options: [
            { text: 'からこそ', reason: '「からこそ」表示「正因為…」，語意相反。' },
            { text: 'からして', reason: '「からして」表示「從…來看」，語意不同。' },
            { text: 'からといって', reason: '正確！「からといって」表示「不能因為…就…」，否定片面推理。' },
            { text: 'からには', reason: '「からには」表示「既然…就…」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「からといって」否定根據某一理由做出的簡單推論',
            analysis: '「からといって」用於表示不能僅僅因為某個理由就做出某種判斷或行動，常與否定表達搭配。',
            comparisons: ['からといって：不能因為…就…（否定推論）', 'からこそ：正因為…才…（肯定原因）'],
            commonMistakes: ['○ 有名だからといって / × 有名からといって → な形容詞用「だ」接續'],
        },
    },
    // ━━━ をもとに (based on - additional) ━━━
    {
        id: 'g_n2_313', category: 'grammar', level: 'N2', tags: ['basis', 'creation'],
        stem: 'この映画{えいが}は実話{じつわ}___作{つく}られた。',
        stemZh: '這部電影是以真實故事為基礎製作的。',
        options: [
            { text: 'をもとに', reason: '正確！「をもとに」表示「以…為基礎」。' },
            { text: 'に基づいて', reason: '「に基づいて」也表示「基於…」，但更強調嚴格依據。' },
            { text: 'に沿って', reason: '「に沿って」表示「按照…」，語感不同。' },
            { text: 'を通じて', reason: '「を通じて」表示「透過…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をもとに」表示以某事物作為素材或基礎',
            analysis: '「をもとに」用於表示以某事物為素材、靈感或基礎來創作或進行某事。比「に基づいて」更靈活。',
            comparisons: ['をもとに：以…為基礎（靈活創作）', 'に基づいて：基於…（嚴格依據）'],
            commonMistakes: ['○ 実話をもとに / ○ 実話をもとにして → 兩種都可以'],
        },
    },
    // ━━━ にもかかわらず (despite - additional) ━━━
    {
        id: 'g_n2_314', category: 'grammar', level: 'N2', tags: ['concession', 'contrast'],
        stem: '何度{なんど}も警告{けいこく}された___、彼{かれ}は同{おな}じ間違{まちが}いを繰{く}り返{かえ}した。',
        stemZh: '儘管被多次警告，他仍然重複犯同樣的錯誤。',
        options: [
            { text: 'にもかかわらず', reason: '正確！「にもかかわらず」表示「儘管…卻…」。' },
            { text: 'ものの', reason: '「ものの」也表示「雖然…但是」，但語氣不同。' },
            { text: 'わりに', reason: '「わりに」表示「雖然…但是」，語氣較輕。' },
            { text: 'にしても', reason: '「にしても」表示「即使…」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にもかかわらず」是最正式的讓步表達',
            analysis: '「にもかかわらず」用於表示儘管有某種應該產生影響的條件，結果卻與預期完全不同。語氣正式且強烈。',
            comparisons: ['にもかかわらず：儘管…卻…（正式強烈）', 'のに：雖然…但是…（口語不滿）', 'ものの：雖然…但是…（冷靜客觀）'],
            commonMistakes: ['○ 警告されたにもかかわらず / × 警告にもかかわらず → 動詞用た形接續'],
        },
    },
    // ━━━ 以外 (except / besides) ━━━
    {
        id: 'g_n2_315', category: 'grammar', level: 'N2', tags: ['exception', 'exclusion'],
        stem: '英語{えいご}___の外国語{がいこくご}を勉強{べんきょう}したことがない。',
        stemZh: '除了英語以外的外語沒有學過。',
        options: [
            { text: '以外', reason: '正確！「以外」表示「除了…以外」。' },
            { text: 'を除いて', reason: '「を除いて」也表示「除了…」，但接續不同。' },
            { text: 'のほか', reason: '「のほか」也可以，但用法不同。' },
            { text: '以上', reason: '「以上」表示「以上/既然」，語意完全不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「以外」表示排除某事物的範圍',
            analysis: '「以外」直接接在名詞後，表示除了該事物以外的範圍。修飾名詞時用「以外の＋名詞」。',
            comparisons: ['以外：除了…以外（直接排除）', 'を除いて：除了…以外（正式動詞形式）'],
            commonMistakes: ['○ 英語以外の / × 英語の以外の → 直接接在名詞後'],
        },
    },
    // ━━━ 以上に (more than) ━━━
    {
        id: 'g_n2_316', category: 'grammar', level: 'N2', tags: ['comparison', 'exceeding'],
        stem: '予想{よそう}___大{おお}きな反響{はんきょう}があった。',
        stemZh: '有超出預想的巨大迴響。',
        options: [
            { text: 'より', reason: '「より」也表示「比…」，但不如「以上に」強調超出預期。' },
            { text: '以上に', reason: '正確！「以上に」表示「超出…」，強調程度大大超過。' },
            { text: 'に反して', reason: '「に反して」表示「與…相反」，語意不同。' },
            { text: 'にかけて', reason: '「にかけて」表示「從…到…期間」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「以上に」強調實際程度超出了某個基準',
            analysis: '「以上に」用於表示實際的程度或結果超出了預期或基準，帶有驚訝或強調的語氣。',
            comparisons: ['以上に：超出…（強調超出）', 'より：比…（一般比較）'],
            commonMistakes: ['○ 予想以上に / × 予想の以上に → 直接接在名詞後'],
        },
    },
    // ━━━ といった (such as) - additional ━━━
    {
        id: 'g_n2_317', category: 'grammar', level: 'N2', tags: ['example', 'listing'],
        stem: '日本語{にほんご}や韓国語{かんこくご}___アジアの言語{げんご}に興味{きょうみ}がある。',
        stemZh: '對日語和韓語等亞洲語言感興趣。',
        options: [
            { text: 'という', reason: '「という」表示「叫做…」，不適合列舉。' },
            { text: 'といった', reason: '正確！「といった」表示「…等（之類的）」，用於列舉例子。' },
            { text: 'としての', reason: '「としての」表示「作為…的」，語意不同。' },
            { text: 'に関する', reason: '「に関する」表示「關於…的」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「といった」用於列舉具體例子',
            analysis: '「といった」相當於「のような」「など」，用於列舉幾個具體例子來代表一個類別。',
            comparisons: ['といった：…之類的（列舉例子）', 'という：叫做…（定義/引述）', 'のような：像…一樣的（比喻/列舉）'],
            commonMistakes: ['○ 日本語や韓国語といった / × 日本語や韓国語というった → 正確拼寫是「といった」'],
        },
    },
    // ━━━ ということは (that means - additional) ━━━
    {
        id: 'g_n2_318', category: 'grammar', level: 'N2', tags: ['inference', 'conclusion'],
        stem: '彼{かれ}がまだ来{き}ていない___、電車{でんしゃ}が遅{おく}れているのかもしれない。',
        stemZh: '他還沒來，也就是說電車可能誤點了。',
        options: [
            { text: 'つまり', reason: '「つまり」也表示「也就是說」，但用法不同。' },
            { text: 'ということは', reason: '正確！「ということは」表示「這意味著…/也就是說…」。' },
            { text: 'とすれば', reason: '「とすれば」表示「如果…的話」，語感不同。' },
            { text: 'わけだから', reason: '「わけだから」表示「所以…」，語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ということは」用於從已知事實推理出結論',
            analysis: '「ということは」用於從前面的事實推導出某個結論或可能性，表示「這意味著…」。',
            comparisons: ['ということは：這意味著…（推理結論）', 'つまり：也就是說（換句話說）'],
            commonMistakes: ['○ 来ていないということは / × 来ないということは → 用ている形表示當前狀態'],
        },
    },
    // ━━━ 上は (now that - same as 以上は) ━━━
    {
        id: 'g_n2_319', category: 'grammar', level: 'N2', tags: ['determination', 'obligation'],
        stem: 'やると決{き}めた___、最後{さいご}までやり抜{ぬ}くつもりだ。',
        stemZh: '既然決定要做，就打算做到最後。',
        options: [
            { text: '上は', reason: '正確！「上は」表示「既然…就…」，與「以上は」同義。' },
            { text: 'ものの', reason: '「ものの」表示「雖然…但是」，語意相反。' },
            { text: 'わりに', reason: '「わりに」表示「雖然…但是」，語意不同。' },
            { text: 'ところで', reason: '「ところで」表示「即使…」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「上は」與「以上は」同義',
            analysis: '「上は」和「以上は」完全同義，都表示「既然…就應該…」，強調基於既定事實的責任感。',
            comparisons: ['上は：既然…就…（義務感）', '以上は：既然…就…（同義）', 'からには：既然…就…（決心感）'],
            commonMistakes: ['○ 決めた上は / × 決める上は → 前面用た形表示已經決定的事'],
        },
    },
    // ━━━ に限る (best to - different context) ━━━
    {
        id: 'g_n2_320', category: 'grammar', level: 'N2', tags: ['recommendation', 'limitation'],
        stem: 'この割引{わりびき}は学生{がくせい}___。',
        stemZh: '這個折扣僅限學生。',
        options: [
            { text: 'に限る', reason: '正確！「に限る」在此表示「僅限於…」，限定範圍。' },
            { text: 'に限って', reason: '「に限って」表示「偏偏…」，語意不同。' },
            { text: 'に限らず', reason: '「に限らず」表示「不限於…」，語意相反。' },
            { text: 'のみ', reason: '「のみ」表示「僅…」，也可以但接續不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に限る」的限定用法',
            analysis: '「に限る」有兩個用法：(1)「最好是…」（推薦）、(2)「僅限於…」（限定範圍）。此題為第二種。',
            comparisons: ['に限る（推薦）：最好是…', 'に限る（限定）：僅限於…'],
            commonMistakes: ['○ 学生に限る / × 学生を限る → 用「に」不用「を」'],
        },
    },
    // ━━━ にかかわらず (regardless - additional) ━━━
    {
        id: 'g_n2_321', category: 'grammar', level: 'N2', tags: ['regardless', 'inclusive'],
        stem: '天候{てんこう}___、イベントは予定{よてい}通{どお}り開催{かいさい}します。',
        stemZh: '不論天氣如何，活動將按照原定計畫舉辦。',
        options: [
            { text: 'にかかわらず', reason: '正確！「にかかわらず」表示「不論…」。' },
            { text: 'を問わず', reason: '「を問わず」也表示「不論…」，意思相近。' },
            { text: 'に限らず', reason: '「に限らず」表示「不限於…」，語感不同。' },
            { text: 'にもかかわらず', reason: '「にもかかわらず」表示「儘管…」，是讓步不是「不論」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にかかわらず」表示不受某條件影響',
            analysis: '「にかかわらず」用於表示無論某個條件如何，結果都不受影響。常用於公告和通知。',
            comparisons: ['にかかわらず：不論…（不受影響）', 'にもかかわらず：儘管…（讓步）', 'を問わず：不問…（同義）'],
            commonMistakes: ['○ 天候にかかわらず / × 天候にもかかわらず → 沒有「も」是不論，有「も」是儘管'],
        },
    },
    // ━━━ ままに (as ~ dictates - additional) ━━━
    {
        id: 'g_n2_322', category: 'grammar', level: 'N2', tags: ['passivity', 'following'],
        stem: '思{おも}い付{つ}く___、書{か}いてみた。',
        stemZh: '隨著想到什麼就寫什麼。',
        options: [
            { text: 'ままに', reason: '正確！「ままに」表示「隨著…/任憑…」。' },
            { text: 'ながら', reason: '「ながら」表示「一邊…一邊…」，語意不同。' },
            { text: 'つつ', reason: '「つつ」表示「一邊…」或「雖然…」，語意不同。' },
            { text: 'たびに', reason: '「たびに」表示「每次…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ままに」表示隨著某種狀態或衝動行動',
            analysis: '「ままに」用於表示順從某種感覺、衝動或狀態行動，不加以控制或修正。',
            comparisons: ['ままに：隨著…（順從行動）', 'まま：保持…的狀態（不改變）'],
            commonMistakes: ['○ 思い付くままに / ○ 気の向くままに → 辭書形接「ままに」'],
        },
    },
    // ━━━ もかまわず (without caring - additional) ━━━
    {
        id: 'g_n2_323', category: 'grammar', level: 'N2', tags: ['disregard', 'boldness'],
        stem: '周{まわ}りの目{め}___、彼{かれ}は大声{おおごえ}で歌{うた}い始{はじ}めた。',
        stemZh: '他不顧旁人的目光，開始大聲唱歌。',
        options: [
            { text: 'もかまわず', reason: '正確！「もかまわず」表示「不顧…」。' },
            { text: 'にもかかわらず', reason: '「にもかかわらず」表示「儘管…」，語感不同。' },
            { text: 'を問わず', reason: '「を問わず」表示「不論…」，語感不同。' },
            { text: 'に限らず', reason: '「に限らず」表示「不限於…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「もかまわず」表示不在乎某種應該顧慮的事',
            analysis: '「もかまわず」用於描述某人不在乎通常應該在意的事情，帶有大膽或不體貼的語感。',
            comparisons: ['もかまわず：不顧…（不在乎）', 'にもかかわらず：儘管…（讓步）'],
            commonMistakes: ['○ 周りの目もかまわず / × 周りの目をかまわず → 用「も」不用「を」'],
        },
    },
    // ━━━ くせに (despite - additional) ━━━
    {
        id: 'g_n2_324', category: 'grammar', level: 'N2', tags: ['criticism', 'contrast'],
        stem: '自分{じぶん}は何{なに}もしない___、文句{もんく}ばかり言{い}う。',
        stemZh: '自己什麼都不做，卻淨說些抱怨的話。',
        options: [
            { text: 'のに', reason: '「のに」也表示「明明…卻」，但不帶嚴厲的批評語氣。' },
            { text: 'くせに', reason: '正確！「くせに」表示「明明…卻…」，帶有蔑視和責備。' },
            { text: 'にもかかわらず', reason: '「にもかかわらず」表示「儘管…」，太正式。' },
            { text: 'わりに', reason: '「わりに」表示「雖然…但是」，語氣太溫和。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「くせに」帶有強烈的批評和蔑視語氣',
            analysis: '「くせに」用於批評某人的矛盾行為，帶有「明明…卻不像話」的不滿和蔑視。注意不能用於自己。',
            comparisons: ['くせに：明明…卻…（批評蔑視）', 'のに：雖然…但是…（不滿一般）'],
            commonMistakes: ['○ しないくせに / × しないのくせに → 動詞直接接「くせに」'],
        },
    },
    // ━━━ てこそ (only by doing - additional) ━━━
    {
        id: 'g_n2_325', category: 'grammar', level: 'N2', tags: ['condition', 'emphasis'],
        stem: '実際{じっさい}にやっ___、本当{ほんとう}のことがわかる。',
        stemZh: '只有實際去做了，才能了解真正的情況。',
        options: [
            { text: 'たら', reason: '「たら」表示「如果…了」，不強調「唯有…才」。' },
            { text: 'ても', reason: '「ても」表示「即使…也」，語意相反。' },
            { text: 'てこそ', reason: '正確！「てこそ」表示「只有做了…才…」，強調必要條件。' },
            { text: 'てから', reason: '「てから」表示「做了…之後」，不強調唯一條件。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「てこそ」強調某件事是實現結果的唯一條件',
            analysis: '「てこそ」用於強調只有通過某個行動或條件，才能達到某個結果，表示「唯有…才能…」。',
            comparisons: ['てこそ：只有…才（唯一條件）', 'てはじめて：做了…才第一次（同義）'],
            commonMistakes: ['○ やってこそ / × やるこそ → 用て形接「こそ」'],
        },
    },
    // ━━━ つつ (while / although - additional) ━━━
    {
        id: 'g_n2_326', category: 'grammar', level: 'N2', tags: ['simultaneous', 'contrast'],
        stem: '体{からだ}に悪{わる}いと知{し}り___、タバコをやめられない。',
        stemZh: '雖然知道對身體有害，卻無法戒菸。',
        options: [
            { text: 'ながら', reason: '「ながら」也可以表示「雖然…卻」，但較口語。' },
            { text: 'つつ', reason: '正確！「つつ」表示「雖然…卻…」，書面語。' },
            { text: 'つつも', reason: '「つつも」加了「も」更強調讓步，也可以。' },
            { text: 'ているのに', reason: '「ているのに」表示「明明…卻」，帶有不滿。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「つつ」的讓步用法表示「雖然知道…卻…」',
            analysis: '「つつ」有兩個用法：(1)一邊…一邊…（同時進行）、(2)雖然…卻…（讓步，常帶有自我矛盾感）。此題為第二種。',
            comparisons: ['つつ（讓步）：雖然…卻…（書面自省）', 'ながら（讓步）：雖然…卻…（口語）'],
            commonMistakes: ['○ 知りつつ / × 知るつつ → 用連用形（ます形去ます）'],
        },
    },
    // ━━━ つつある (in the process of - additional) ━━━
    {
        id: 'g_n2_327', category: 'grammar', level: 'N2', tags: ['progress', 'change'],
        stem: '地球{ちきゅう}の環境{かんきょう}は少{すこ}しずつ変化{へんか}し___。',
        stemZh: '地球的環境正在逐漸變化中。',
        options: [
            { text: 'ている', reason: '「ている」也表示進行，但不夠書面正式。' },
            { text: 'つつある', reason: '正確！「つつある」表示「正在…中」，用於漸進的變化。' },
            { text: 'ていく', reason: '「ていく」表示「逐漸…下去」，方向不同。' },
            { text: 'てくる', reason: '「てくる」表示「逐漸…起來」，方向不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「つつある」表示正在進行中的漸進變化',
            analysis: '「つつある」是書面語，特別用於描述正在進行中的漸進變化，常用於社會現象、自然變化等。',
            comparisons: ['つつある：正在…中（書面漸進）', 'ている：正在…（一般進行）'],
            commonMistakes: ['○ 変化しつつある / × 変化するつつある → 用連用形'],
        },
    },
    // ━━━ とはいえ (that said - additional) ━━━
    {
        id: 'g_n2_328', category: 'grammar', level: 'N2', tags: ['concession', 'modification'],
        stem: '景気{けいき}は回復{かいふく}傾向{けいこう}にある。___、油断{ゆだん}は禁物{きんもつ}だ。',
        stemZh: '景氣有恢復的傾向。話雖如此，不能掉以輕心。',
        options: [
            { text: 'とはいえ', reason: '正確！「とはいえ」表示「話雖如此」，承認前項但提出保留。' },
            { text: 'そのため', reason: '「そのため」表示「因此」，語意不同。' },
            { text: 'それで', reason: '「それで」表示「所以」，語意不同。' },
            { text: 'すると', reason: '「すると」表示「於是」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とはいえ」用於承認前項後提出保留意見',
            analysis: '「とはいえ」用於先承認前面的事實或觀點，然後提出與之不完全一致的看法或補充，表示「雖然如此，但…」。',
            comparisons: ['とはいえ：話雖如此（保留意見）', 'それにしても：即便如此（感嘆）', 'もっとも：話說回來（補充）'],
            commonMistakes: ['○ 回復傾向にある。とはいえ、… / ○ …あるとはいえ、… → 可以放句首或句中'],
        },
    },
    // ━━━ もっとも (although / to be fair - additional) ━━━
    {
        id: 'g_n2_329', category: 'grammar', level: 'N2', tags: ['qualification', 'fairness'],
        stem: '今回{こんかい}の試験{しけん}は難{むずか}しかった。___、十分{じゅうぶん}に準備{じゅんび}していれば合格{ごうかく}できたはずだ。',
        stemZh: '這次考試很難。話說回來，如果充分準備的話應該能合格。',
        options: [
            { text: 'しかし', reason: '「しかし」表示「但是」，太一般。' },
            { text: 'もっとも', reason: '正確！「もっとも」表示「話說回來/不過」，補充修正前面的說法。' },
            { text: 'ところが', reason: '「ところが」表示「然而」，語感不同。' },
            { text: 'それなのに', reason: '「それなのに」表示「儘管如此」，語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「もっとも」用於對前述內容的補充修正',
            analysis: '「もっとも」用於在前面的陳述之後，提出一個公平或合理的補充觀點，不完全否定前者但進行修正。',
            comparisons: ['もっとも：話說回來（補充修正）', 'とはいえ：話雖如此（保留意見）'],
            commonMistakes: ['○ もっとも、準備していれば… / × もっとも準備していれば… → 通常後面加逗號'],
        },
    },
    // ━━━ それなのに (despite that - additional) ━━━
    {
        id: 'g_n2_330', category: 'grammar', level: 'N2', tags: ['contrast', 'frustration'],
        stem: 'あれだけお願{ねが}いした。___、全然{ぜんぜん}聞{き}いてくれなかった。',
        stemZh: '拜託了那麼多次。儘管如此，卻完全不聽。',
        options: [
            { text: 'だから', reason: '「だから」表示「所以」，語意相反。' },
            { text: 'そして', reason: '「そして」表示「然後」，語意不同。' },
            { text: 'それなのに', reason: '正確！「それなのに」表示「儘管如此卻…」，帶有不滿。' },
            { text: 'そこで', reason: '「そこで」表示「於是」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「それなのに」承接前句表示不滿的讓步',
            analysis: '「それなのに」用於表示前面的事實本應該帶來某個結果，但實際卻不是，帶有強烈的不滿和失望。',
            comparisons: ['それなのに：儘管如此卻…（不滿）', 'それにもかかわらず：儘管如此…（正式）'],
            commonMistakes: ['○ …した。それなのに、… / × …したそれなのに → 放在句首'],
        },
    },
    // ━━━ ちなみに (by the way / incidentally - additional) ━━━
    {
        id: 'g_n2_331', category: 'grammar', level: 'N2', tags: ['supplement', 'information'],
        stem: 'この店{みせ}のラーメンは美味{おい}しいですよ。___、醤油{しょうゆ}味{あじ}が一番{いちばん}人気{にんき}だそうです。',
        stemZh: '這家店的拉麵很好吃喔。順便一提，聽說醬油口味最受歡迎。',
        options: [
            { text: 'そう言えば', reason: '「そう言えば」表示「這麼一說」，因聯想想起。' },
            { text: 'ところで', reason: '「ところで」表示「對了」，轉換話題。' },
            { text: 'ちなみに', reason: '正確！「ちなみに」表示「順便一提」，補充相關資訊。' },
            { text: 'それから', reason: '「それから」表示「然後」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ちなみに」用於補充與前話題相關的額外資訊',
            analysis: '「ちなみに」用於在主要話題之後補充一些相關但非必要的資訊，是「順便說一下」的意思。',
            comparisons: ['ちなみに：順便一提（補充資訊）', 'そう言えば：這麼一說（因聯想想起）', 'ところで：對了（轉換話題）'],
            commonMistakes: ['○ ちなみに、醤油味が… / × ちなみに醤油味が… → 後面通常加逗號'],
        },
    },
    // ━━━ なお (furthermore / still - additional) ━━━
    {
        id: 'g_n2_332', category: 'grammar', level: 'N2', tags: ['addition', 'formal'],
        stem: '申{もう}し込{こ}みは来週{らいしゅう}の金曜日{きんようび}までです。___、定員{ていいん}になり次第{しだい}、締{し}め切{き}ります。',
        stemZh: '報名截止到下週五。另外，一達到名額上限就截止。',
        options: [
            { text: 'しかも', reason: '「しかも」表示「而且」，語感不同。' },
            { text: 'おまけに', reason: '「おまけに」表示「加上」，太口語。' },
            { text: 'なお', reason: '正確！「なお」表示「另外/此外」，用於正式場合補充重要資訊。' },
            { text: 'ちなみに', reason: '「ちなみに」表示「順便一提」，重要性不夠。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「なお」用於正式場合補充重要的附加資訊',
            analysis: '「なお」常用於公告、通知等正式文書中，補充讀者需要知道的重要附加事項。語氣比「ちなみに」正式且重要。',
            comparisons: ['なお：另外（正式補充重要資訊）', 'ちなみに：順便一提（非必要補充）'],
            commonMistakes: ['○ なお、定員になり次第… / × なおは定員になり次第… → 「なお」後面不加「は」'],
        },
    },
    // ━━━ はともかく (regardless of / leaving aside - additional) ━━━
    {
        id: 'g_n2_333', category: 'grammar', level: 'N2', tags: ['aside', 'focus'],
        stem: '値段{ねだん}___、この製品{せいひん}の品質{ひんしつ}は素晴{すば}らしい。',
        stemZh: '價格暫且不論，這個產品的品質很出色。',
        options: [
            { text: 'はともかく', reason: '正確！「はともかく」表示「暫且不論…」。' },
            { text: '抜きにして', reason: '「抜きにして」表示「撇開…不談」，語感不同。' },
            { text: 'はもちろん', reason: '「はもちろん」表示「不用說…」，語意相反。' },
            { text: 'はおろか', reason: '「はおろか」表示「別說…了」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はともかく」暫時擱置某個議題來聚焦另一個',
            analysis: '「はともかく」用於暫時不討論前面提到的事項，而聚焦在後面更想強調的內容。',
            comparisons: ['はともかく：暫且不論…（擱置議題）', '抜きにして：撇開…不談（排除議題）'],
            commonMistakes: ['○ 値段はともかく / × 値段がともかく → 用「は」不用「が」'],
        },
    },
    // ━━━ 直ちに (immediately - additional) ━━━
    {
        id: 'g_n2_334', category: 'grammar', level: 'N2', tags: ['immediacy', 'formal'],
        stem: '問題{もんだい}が発覚{はっかく}した場合{ばあい}は、___対処{たいしょ}してください。',
        stemZh: '如果發現問題，請立即處理。',
        options: [
            { text: 'すぐに', reason: '「すぐに」也表示「立刻」，但不夠正式。' },
            { text: '直ちに', reason: '正確！「直ちに」表示「立即」，正式書面語。' },
            { text: 'いきなり', reason: '「いきなり」表示「突然」，語意不同。' },
            { text: 'やがて', reason: '「やがて」表示「不久」，語意相反。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「直ちに」是正式的「立即」表達',
            analysis: '「直ちに」相當於口語的「すぐに」，但更正式，常用於公告、指示、法律文書等。',
            comparisons: ['直ちに：立即（正式）', 'すぐに：馬上（口語）', 'ただちに：立即（同字異讀）'],
            commonMistakes: ['○ 直ちに対処する / × 直ちにに対処する → 「直ちに」本身是副詞，不需要再加「に」'],
        },
    },
    // ━━━ せいか (perhaps because - additional) ━━━
    {
        id: 'g_n2_335', category: 'grammar', level: 'N2', tags: ['speculation', 'cause'],
        stem: '寝不足{ねぶそく}の___、今日{きょう}は頭{あたま}がぼんやりする。',
        stemZh: '也許是因為睡眠不足，今天腦袋昏沉沉的。',
        options: [
            { text: 'ために', reason: '「ために」表示「因為…」，太確定了。' },
            { text: 'おかげで', reason: '「おかげで」表示「託…的福」，語感不同。' },
            { text: 'せいか', reason: '正確！「せいか」表示「也許是因為…」，不確定的推測原因。' },
            { text: 'せいで', reason: '「せいで」表示「因為…（壞結果）」，太確定了。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「せいか」帶有不確定的因果推測',
            analysis: '「せいか」比「せいで」多了一層不確定性，表示說話者推測可能是因為某個原因，但不能完全確定。',
            comparisons: ['せいか：也許是因為…（不確定推測）', 'せいで：因為…（確定歸因）'],
            commonMistakes: ['○ 寝不足のせいか / × 寝不足せいか → 名詞用「の」接續'],
        },
    },
    // ━━━ やら〜やら (what with ~ and ~) ━━━
    {
        id: 'g_n2_336', category: 'grammar', level: 'N2', tags: ['listing', 'overwhelmed'],
        stem: '引{ひ}っ越{こ}しの準備{じゅんび}___、仕事{しごと}の締{し}め切{き}り___で、忙{いそが}しくて大変{たいへん}だ。',
        stemZh: '又是搬家的準備，又是工作的截止日，忙得不行。',
        options: [
            { text: 'やら / やら', reason: '正確！「やら〜やら」表示「又是…又是…」，列舉使人困擾的事。' },
            { text: 'とか / とか', reason: '「とか〜とか」也可以列舉，但不帶困擾感。' },
            { text: 'たり / たり', reason: '「たり〜たり」表示列舉動作，不適合名詞。' },
            { text: 'か / か', reason: '「か〜か」表示「是…還是…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「やら〜やら」列舉多個令人不堪重負的事物',
            analysis: '「やら〜やら」用於列舉多個事物，通常帶有「太多了令人困擾」的語感。',
            comparisons: ['やら〜やら：又是…又是…（困擾）', 'とか〜とか：…啦…啦（列舉，中性）'],
            commonMistakes: ['○ 準備やら締め切りやら / × 準備やら、締め切りやら → 可以加逗號也可以不加'],
        },
    },
    // ━━━ よほど / よっぽど (very / quite) ━━━
    {
        id: 'g_n2_337', category: 'grammar', level: 'N2', tags: ['degree', 'emphasis'],
        stem: '彼{かれ}は___疲{つか}れていたのか、帰{かえ}るなりすぐ寝{ね}てしまった。',
        stemZh: '他大概相當累吧，一回來就馬上睡著了。',
        options: [
            { text: 'とても', reason: '「とても」表示「非常」，但不帶推測語感。' },
            { text: 'よほど', reason: '正確！「よほど」表示「相當/很」，帶有推測程度深的語感。' },
            { text: 'かなり', reason: '「かなり」表示「相當」，但不帶推測語感。' },
            { text: 'ずいぶん', reason: '「ずいぶん」表示「相當」，但不帶推測語感。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「よほど」表示程度非常深，常用於推測',
            analysis: '「よほど」表示比一般程度要深得多，常用於推測某人的狀態或心情。口語說「よっぽど」。',
            comparisons: ['よほど：相當…（推測程度深）', 'とても：非常（一般程度）', 'かなり：相當（客觀程度）'],
            commonMistakes: ['○ よほど疲れていた / ○ よっぽど疲れていた → 兩種都可以'],
        },
    },
    // ━━━ いわゆる (so-called - additional) ━━━
    {
        id: 'g_n2_338', category: 'grammar', level: 'N2', tags: ['definition', 'common_knowledge'],
        stem: '彼{かれ}は___天才{てんさい}タイプの人間{にんげん}だ。',
        stemZh: '他是所謂天才型的人。',
        options: [
            { text: 'いわゆる', reason: '正確！「いわゆる」表示「所謂的」，引用一般認知的稱呼。' },
            { text: 'まさに', reason: '「まさに」表示「正是」，語感不同。' },
            { text: 'あくまで', reason: '「あくまで」表示「始終/終究」，語意不同。' },
            { text: 'もはや', reason: '「もはや」表示「已經」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「いわゆる」引用一般通用的稱呼或概念',
            analysis: '「いわゆる」用於引用人們一般使用的稱呼、概念或分類，表示「人們所說的…」。',
            comparisons: ['いわゆる：所謂的（引用通用稱呼）', 'まさに：正是（強調確認）'],
            commonMistakes: ['○ いわゆる天才 / × いわゆるの天才 → 直接修飾名詞，不加「の」'],
        },
    },
    // ━━━ どうせ (anyway / after all - additional) ━━━
    {
        id: 'g_n2_339', category: 'grammar', level: 'N2', tags: ['resignation', 'pessimism'],
        stem: '___やるなら、徹底的{てっていてき}にやったほうがいい。',
        stemZh: '反正要做的話，不如做得徹底一點。',
        options: [
            { text: 'どうせ', reason: '正確！「どうせ」表示「反正…」，帶有接受現實的語氣。' },
            { text: 'せっかく', reason: '「せっかく」表示「難得…」，語氣不同。' },
            { text: 'いっそ', reason: '「いっそ」表示「乾脆…」，語感不同。' },
            { text: 'せめて', reason: '「せめて」表示「至少…」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「どうせ」帶有「反正結果都一樣」的接受語氣',
            analysis: '「どうせ」表示說話者認為無論如何結果都不會改變，帶有消極接受或無奈的態度。但也可以用於積極的轉向。',
            comparisons: ['どうせ：反正…（消極接受）', 'せっかく：難得…（珍惜機會）'],
            commonMistakes: ['○ どうせやるなら / × どうせでやるなら → 「どうせ」是副詞，直接接句子'],
        },
    },
    // ━━━ せっかく (with effort / specially - additional) ━━━
    {
        id: 'g_n2_340', category: 'grammar', level: 'N2', tags: ['effort', 'waste'],
        stem: '___作{つく}ったのに、誰{だれ}も食{た}べてくれなかった。',
        stemZh: '好不容易做了，卻沒有人吃。',
        options: [
            { text: 'せっかく', reason: '正確！「せっかく」表示「好不容易…/特意…」，強調付出的努力被浪費。' },
            { text: 'わざわざ', reason: '「わざわざ」表示「特意…」，但不帶「可惜」的語感。' },
            { text: 'どうせ', reason: '「どうせ」表示「反正…」，語意不同。' },
            { text: 'まさか', reason: '「まさか」表示「不會吧…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「せっかく」強調努力或機會被浪費的遺憾',
            analysis: '「せっかく」用於表示好不容易做了某事或得到某個機會，但結果卻不如預期，帶有「可惜」的語感。常與「のに」搭配。',
            comparisons: ['せっかく：好不容易…（可惜被浪費）', 'わざわざ：特意…（強調行動的特別）'],
            commonMistakes: ['○ せっかく作ったのに / × せっかくに作ったのに → 「せっかく」直接接動詞'],
        },
    },
    // ━━━ せめて (at least - additional) ━━━
    {
        id: 'g_n2_341', category: 'grammar', level: 'N2', tags: ['minimum', 'wish'],
        stem: '全部{ぜんぶ}は無理{むり}でも、___半分{はんぶん}はやってほしい。',
        stemZh: '全部做不完也沒關係，至少希望能做一半。',
        options: [
            { text: 'せめて', reason: '正確！「せめて」表示「至少…」，在困難情況下的最低期望。' },
            { text: '少なくとも', reason: '「少なくとも」也表示「至少」，但較客觀。' },
            { text: 'できれば', reason: '「できれば」表示「如果可以的話」，語感不同。' },
            { text: 'なるべく', reason: '「なるべく」表示「盡量…」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「せめて」表示在不理想情況下的最低願望',
            analysis: '「せめて」用於在理想情況無法實現時，退而求其次的最低期望或願望，帶有無奈但仍有期待。',
            comparisons: ['せめて：至少…（最低願望，有感情）', '少なくとも：至少…（客觀數量）'],
            commonMistakes: ['○ せめて半分は / × せめてに半分は → 「せめて」直接接表達'],
        },
    },
    // ━━━ ばかりだ (only getting worse - additional) ━━━
    {
        id: 'g_n2_342', category: 'grammar', level: 'N2', tags: ['deterioration', 'trend'],
        stem: '物価{ぶっか}は上{あ}がる___で、生活{せいかつ}が苦{くる}しくなっている。',
        stemZh: '物價一直在漲，生活變得越來越辛苦。',
        options: [
            { text: 'ばかり', reason: '正確！「ばかりだ」表示「不斷…」，通常用於惡化趨勢。' },
            { text: '一方', reason: '「一方だ」也表示「不斷…」，意思相近。' },
            { text: 'っぱなし', reason: '「っぱなし」表示「一直保持」，語感不同。' },
            { text: 'つつ', reason: '「つつある」表示「正在…」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばかりだ」表示某種趨勢只會繼續不會改善',
            analysis: '「ばかりだ」用於描述某種（通常是不好的）趨勢一直持續，暗示情況只會越來越糟。',
            comparisons: ['ばかりだ：不斷…（持續惡化）', '一方だ：不斷…（同義）'],
            commonMistakes: ['○ 上がるばかりだ / × 上がったばかりだ → 用辭書形不用た形（た形是「剛剛…」）'],
        },
    },
    // ━━━ 一方だ (keep ~ing - additional) ━━━
    {
        id: 'g_n2_343', category: 'grammar', level: 'N2', tags: ['trend', 'continuation'],
        stem: '高齢化{こうれいか}が進{すす}む___で、医療費{いりょうひ}の問題{もんだい}が深刻{しんこく}になっている。',
        stemZh: '高齡化持續加劇，醫療費的問題越來越嚴重。',
        options: [
            { text: '一方', reason: '正確！「一方だ」表示「不斷…」，持續一個方向的變化。' },
            { text: 'ばかり', reason: '「ばかりだ」也表示「不斷…」，意思相近。' },
            { text: 'あまり', reason: '「あまり」表示「太…」，語意不同。' },
            { text: '反面', reason: '「反面」表示「另一方面」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「一方だ」表示某個趨勢持續朝一個方向發展',
            analysis: '「一方だ」與「ばかりだ」意思相近，都表示持續朝某個方向（通常是不好的方向）發展。',
            comparisons: ['一方だ：不斷…（持續趨勢）', 'ばかりだ：不斷…（同義，更口語）'],
            commonMistakes: ['○ 進む一方だ / × 進んだ一方だ → 用辭書形'],
        },
    },
    // ━━━ 一方で (on the other hand - additional) ━━━
    {
        id: 'g_n2_344', category: 'grammar', level: 'N2', tags: ['contrast', 'parallel'],
        stem: 'インターネットは便利{べんり}である___、危険{きけん}もたくさんある。',
        stemZh: '網路很方便，另一方面也有很多危險。',
        options: [
            { text: '一方で', reason: '正確！「一方で」表示「另一方面」，對比兩個方面。' },
            { text: '反面', reason: '「反面」也表示「另一方面」，但限定同一主語的兩面。' },
            { text: 'ものの', reason: '「ものの」表示「雖然…但是」，不強調並列。' },
            { text: 'にもかかわらず', reason: '「にもかかわらず」表示「儘管…」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「一方で」用於並列對比兩個不同的方面',
            analysis: '「一方で」用於提出兩個相對或相反的觀點或事實，進行並列對比。比「反面」的使用範圍更廣。',
            comparisons: ['一方で：另一方面（並列對比）', '反面：另一方面（同一事物兩面性）'],
            commonMistakes: ['○ である一方で / × である一方 → 加「で」更自然'],
        },
    },
    // ━━━ に対して (toward / in contrast - additional) ━━━
    {
        id: 'g_n2_345', category: 'grammar', level: 'N2', tags: ['contrast', 'direction'],
        stem: '兄{あに}が理系{りけい}なの___、弟{おとうと}は文系{ぶんけい}だ。',
        stemZh: '哥哥是理科，相對地弟弟是文科。',
        options: [
            { text: 'に対して', reason: '正確！「に対して」在此表示「相對於…」，對比用法。' },
            { text: 'に反して', reason: '「に反して」表示「與…相反」，語氣過強。' },
            { text: 'に比べて', reason: '「に比べて」表示「與…相比」，也可以但不強調對比。' },
            { text: 'と違って', reason: '「と違って」表示「與…不同」，也可以但不夠正式。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に対して」的對比用法',
            analysis: '「に対して」除了「對於…」的方向性用法外，還有對比兩個事物的用法，表示「相對於A，B是…」。',
            comparisons: ['に対して（對比）：相對於…（並列對比）', 'に対して（方向）：對於…（對象指向）'],
            commonMistakes: ['○ 理系なのに対して / × 理系に対して → 對比用法前面用「のに対して」'],
        },
    },
    // ━━━ につき (due to / per - additional) ━━━
    {
        id: 'g_n2_346', category: 'grammar', level: 'N2', tags: ['reason', 'formal', 'rate'],
        stem: '工事中{こうじちゅう}___、この道{みち}は通行{つうこう}禁止{きんし}です。',
        stemZh: '因為施工中，這條路禁止通行。',
        options: [
            { text: 'のため', reason: '「のため」也表示「因為…」，但不如「につき」正式。' },
            { text: 'につき', reason: '正確！「につき」表示「因為…」，用於告示和正式通知。' },
            { text: 'から', reason: '「から」表示「因為…」，太口語。' },
            { text: 'ので', reason: '「ので」表示「因為…」，一般語感。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「につき」用於告示和正式通知的理由說明',
            analysis: '「につき」有兩個用法：(1)表示原因（用於告示）、(2)表示「每…」（比率）。此題為第一種。',
            comparisons: ['につき（原因）：因為…（正式告示）', 'につき（比率）：每…（單位換算）'],
            commonMistakes: ['○ 工事中につき / × 工事につき → 表示正在進行的狀態'],
        },
    },
    // ━━━ につけ (whenever - additional) ━━━
    {
        id: 'g_n2_347', category: 'grammar', level: 'N2', tags: ['trigger', 'emotion'],
        stem: 'この写真{しゃしん}を見{み}る___、学生{がくせい}時代{じだい}を思{おも}い出{だ}す。',
        stemZh: '每次看到這張照片，就想起學生時代。',
        options: [
            { text: 'たびに', reason: '「たびに」也表示「每次…就…」，但語感不同。' },
            { text: 'につけ', reason: '正確！「につけ」表示「每當…就…」，感情被觸發。' },
            { text: 'ごとに', reason: '「ごとに」表示「每…」，較客觀。' },
            { text: 'と', reason: '「と」也可以表示「一…就…」，但太一般。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「につけ」表示每當遇到某事就觸發某種情感',
            analysis: '「につけ」用於表示每當遇到某個情境就不由自主地產生某種感情或想法。帶有感性的語感。',
            comparisons: ['につけ：每當…就…（感情觸發）', 'たびに：每次…就…（客觀頻率）'],
            commonMistakes: ['○ 見るにつけ / × 見たにつけ → 用辭書形'],
        },
    },
    // ━━━ にて (at / by means of - additional) ━━━
    {
        id: 'g_n2_348', category: 'grammar', level: 'N2', tags: ['formal', 'location', 'classical'],
        stem: '第三{だいさん}会議室{かいぎしつ}___、会議{かいぎ}を行{おこな}います。',
        stemZh: '在第三會議室舉行會議。',
        options: [
            { text: 'で', reason: '「で」也表示「在…」，但不夠正式。' },
            { text: 'にて', reason: '正確！「にて」是「で」的書面語，用於正式場合。' },
            { text: 'において', reason: '「において」也可以，但更正式且語感不同。' },
            { text: 'に', reason: '「に」表示存在地點，不表示動作場所。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「にて」是「で」的正式書面語表達',
            analysis: '「にて」是古語的「で」，現代日語中用於正式的通知、公告、會議場合。比「において」稍微口語一些。',
            comparisons: ['にて：在…（書面正式）', 'で：在…（口語一般）', 'において：在…（最正式）'],
            commonMistakes: ['○ 会議室にて / × 会議室でにて → 不能與「で」重複'],
        },
    },
    // ━━━ の下で (under - additional) ━━━
    {
        id: 'g_n2_349', category: 'grammar', level: 'N2', tags: ['authority', 'guidance'],
        stem: '優秀{ゆうしゅう}な指導者{しどうしゃ}___、チームは大{おお}きく成長{せいちょう}した。',
        stemZh: '在優秀的指導者帶領下，團隊有了很大的成長。',
        options: [
            { text: 'のもとで', reason: '正確！「のもとで」表示「在…的指導/影響下」。' },
            { text: 'のうえで', reason: '「のうえで」表示「在…方面」，語意不同。' },
            { text: 'によって', reason: '「によって」表示「由…/根據…」，語感不同。' },
            { text: 'において', reason: '「において」表示「在…」，不表示受到指導。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「のもとで」表示在某人的指導或影響之下',
            analysis: '「のもとで」用於表示在某個人的指導、監督、影響或庇護之下進行某事。',
            comparisons: ['のもとで：在…的指導下（人的影響）', 'のもとに：在…的條件下（條件/狀況）'],
            commonMistakes: ['○ 指導者のもとで / × 指導者のしたで → 「もと」不讀「した」'],
        },
    },
    // ━━━ 及び (and / as well as - additional) ━━━
    {
        id: 'g_n2_350', category: 'grammar', level: 'N2', tags: ['formal', 'conjunction'],
        stem: '受験者{じゅけんしゃ}は筆記{ひっき}試験{しけん}___面接{めんせつ}を受{う}けなければならない。',
        stemZh: '考生必須接受筆試以及面試。',
        options: [
            { text: 'と', reason: '「と」也表示「和」，但不夠正式。' },
            { text: 'や', reason: '「や」表示列舉部分，不適合只有兩項的場合。' },
            { text: '及び', reason: '正確！「及び」表示「以及」，正式的連接詞。' },
            { text: 'または', reason: '「または」表示「或者」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「及び」是正式的「和/以及」',
            analysis: '「及び」相當於口語的「と」或「そして」，用於正式文書、法律文件、公告等場合。',
            comparisons: ['及び：以及（正式）', 'と：和（口語）', 'ならびに：以及（更正式，用於並列較大的項目）'],
            commonMistakes: ['○ 筆記試験及び面接 / × 筆記試験及ぶ面接 → 讀作「および」'],
        },
    },
    // ━━━ あるいは (or / perhaps - additional) ━━━
    {
        id: 'g_n2_351', category: 'grammar', level: 'N2', tags: ['formal', 'alternative'],
        stem: '明日{あした}___明後日{あさって}までに提出{ていしゅつ}してください。',
        stemZh: '請在明天或者後天之前提交。',
        options: [
            { text: 'あるいは', reason: '正確！「あるいは」表示「或者」，正式的選擇表達。' },
            { text: 'それとも', reason: '「それとも」用於疑問句中的選擇，不適合此句。' },
            { text: 'もしくは', reason: '「もしくは」也表示「或者」，更正式，用於法律文書。' },
            { text: 'なお', reason: '「なお」表示「另外」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「あるいは」用於正式場合的選擇',
            analysis: '「あるいは」相當於口語的「または」，用於列舉可選擇的項目，語氣較正式。',
            comparisons: ['あるいは：或者（正式）', 'または：或者（一般）', 'もしくは：或者（最正式/法律）'],
            commonMistakes: ['○ 明日あるいは明後日 / × 明日かあるいは明後日 → 不需要加「か」'],
        },
    },
    // ━━━ わけにはいかない (cannot - additional) ━━━
    {
        id: 'g_n2_352', category: 'grammar', level: 'N2', tags: ['impossibility', 'social_obligation'],
        stem: '約束{やくそく}した以上{いじょう}、今{いま}さらやめる___。',
        stemZh: '既然已經約好了，事到如今不能說不幹了。',
        options: [
            { text: 'ことはない', reason: '「ことはない」表示「不必…」，語意不同。' },
            { text: 'わけにはいかない', reason: '正確！「わけにはいかない」表示「不能…」，因社會道德因素。' },
            { text: 'はずがない', reason: '「はずがない」表示「不可能…」，語意不同。' },
            { text: 'ものではない', reason: '「ものではない」表示「不應該…」，語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「わけにはいかない」表示因社會義務或道德而不能做某事',
            analysis: '「わけにはいかない」用於表示雖然想做或物理上能做，但因為社會道德、義務、常識等因素而不能做。',
            comparisons: ['わけにはいかない：不能…（社會因素）', 'できない：不能…（能力因素）'],
            commonMistakes: ['○ やめるわけにはいかない / × やめたわけにはいかない → 用辭書形'],
        },
    },
    // ━━━ ないわけにはいかない (must / have to) ━━━
    {
        id: 'g_n2_353', category: 'grammar', level: 'N2', tags: ['obligation', 'duty'],
        stem: '招待{しょうたい}されたのだから、行{い}か___。',
        stemZh: '既然被邀請了，不去不行。',
        options: [
            { text: 'なくてはならない', reason: '「なくてはならない」表示「必須…」，但不強調社會義務。' },
            { text: 'なければならない', reason: '「なければならない」表示「必須…」，語感較一般。' },
            { text: 'ないわけにはいかない', reason: '正確！「ないわけにはいかない」表示「不…不行」，因義務感。' },
            { text: 'ないではいられない', reason: '「ないではいられない」表示「忍不住…」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ないわけにはいかない」是「わけにはいかない」的否定形',
            analysis: '「ないわけにはいかない」表示「不做…是不行的」，即必須做某事，強調社會義務或道德上的必要性。',
            comparisons: ['ないわけにはいかない：不…不行（義務感）', 'なければならない：必須…（一般義務）'],
            commonMistakes: ['○ 行かないわけにはいかない / × 行くないわけにはいかない → 用ない形'],
        },
    },
    // ━━━ ないことはない (not impossible / not that ~) ━━━
    {
        id: 'g_n2_354', category: 'grammar', level: 'N2', tags: ['partial_affirmation', 'hedging'],
        stem: '辛{から}い料理{りょうり}は食{た}べ___が、あまり好{す}きではない。',
        stemZh: '辛辣的料理不是不能吃，但不太喜歡。',
        options: [
            { text: 'ないことはない', reason: '正確！「ないことはない」表示「並非不…/也不是不…」，婉轉肯定。' },
            { text: 'なくはない', reason: '「なくはない」也可以，意思相同。' },
            { text: 'ないわけではない', reason: '「ないわけではない」也可以，意思相同。' },
            { text: 'ないものではない', reason: '「ないものではない」不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないことはない」用雙重否定表示婉轉的肯定',
            analysis: '「ないことはない」通過「不是不能」的雙重否定來表達婉轉的肯定，暗示雖然可以但帶有保留。',
            comparisons: ['ないことはない：也不是不…（婉轉肯定）', 'なくはない：也不是沒有…（同義）'],
            commonMistakes: ['○ 食べないことはない / × 食べることはない → 後者意為「不必吃」'],
        },
    },
    // ━━━ ようか〜まいか (whether or not - complex) ━━━
    {
        id: 'g_n2_355', category: 'grammar', level: 'N2', tags: ['indecision', 'complex'],
        stem: '本当{ほんとう}のことを言{い}おう___言{い}う___、一晩{ひとばん}中{じゅう}悩{なや}んだ。',
        stemZh: '要不要說出真相，煩惱了一整夜。',
        options: [
            { text: 'か / まいか', reason: '正確！「ようか〜まいか」表示猶豫要不要做某事。' },
            { text: 'と / まいと', reason: '「ようと〜まいと」表示「無論做不做」，語意不同。' },
            { text: 'が / まいが', reason: '「ようが〜まいが」表示「不管做不做」，語意不同。' },
            { text: 'にも / まいにも', reason: '不存在此文法形式。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようか〜まいか」的猶豫不決用法',
            analysis: '「ようか〜まいか」表示在做與不做之間猶豫不決。注意五段動詞用「辭書形＋まいか」或「意向形＋まいか」。',
            comparisons: ['ようか〜まいか：要不要…（猶豫）', 'ようと〜まいと：無論做不做…（讓步）'],
            commonMistakes: ['○ 言おうか言うまいか / × 言おうか言わまいか → 五段動詞用辭書形接「まい」'],
        },
    },
    // ━━━ としたら / とすれば (if we assume) - additional ━━━
    {
        id: 'g_n2_356', category: 'grammar', level: 'N2', tags: ['hypothetical', 'assumption'],
        stem: 'もし宝{たから}くじに当{あ}たった___、何{なに}に使{つか}いますか。',
        stemZh: '如果中了彩券的話，你會用來做什麼？',
        options: [
            { text: 'ものなら', reason: '「ものなら」表示「如果能…的話」，強調難以實現。' },
            { text: 'としたら', reason: '正確！「としたら」表示「假如…的話」，假設性提問。' },
            { text: 'からには', reason: '「からには」表示「既然…」，不是假設。' },
            { text: '以上は', reason: '「以上は」表示「既然…」，不是假設。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「としたら」用於假設性的情境提問',
            analysis: '「としたら」用於假設某種情況成立時，詢問或表達相應的反應。與「とすれば」「とすると」同義。',
            comparisons: ['としたら：假如…的話（假設提問）', 'ものなら：如果能…的話（幾乎不可能）'],
            commonMistakes: ['○ 当たったとしたら / ○ 当たるとしたら → 用た形或辭書形都可以'],
        },
    },
    // ━━━ だけは (at least - minimal effort) ━━━
    {
        id: 'g_n2_357', category: 'grammar', level: 'N2', tags: ['minimum', 'effort'],
        stem: '時間{じかん}がなくても、宿題{しゅくだい}___やっておいたほうがいい。',
        stemZh: '即使沒有時間，至少作業該做的要做好。',
        options: [
            { text: 'だけは', reason: '正確！「だけは」表示「至少…」，強調最低限度。' },
            { text: 'だけに', reason: '「だけに」表示「正因為…」，語意不同。' },
            { text: 'だけで', reason: '「だけで」表示「光是…就」，語意不同。' },
            { text: 'だけの', reason: '「だけの」表示「相當於…的」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だけは」強調最低限度該做的事',
            analysis: '「だけは」用於表示至少某件事是必須做的，即使其他事情無法完成。',
            comparisons: ['だけは：至少…（最低限度）', 'だけに：正因為…（原因強調）'],
            commonMistakes: ['○ 宿題だけはやる / × 宿題だけやる → 加「は」強調最低限度'],
        },
    },
    // ━━━ だけのことはある (it was worth - additional) ━━━
    {
        id: 'g_n2_358', category: 'grammar', level: 'N2', tags: ['worth', 'recognition'],
        stem: '一流{いちりゅう}大学{だいがく}を出{で}た___、彼{かれ}の知識{ちしき}は幅広{はばひろ}い。',
        stemZh: '不愧是一流大學畢業的，他的知識很廣泛。',
        options: [
            { text: 'だけに', reason: '「だけに」表示「正因為…」，但不帶「不愧是」的語感。' },
            { text: 'だけあって', reason: '「だけあって」也表示「不愧是…」，意思相同。' },
            { text: 'だけのことはあって', reason: '正確！「だけのことはあって」表示「不愧是…/果然名不虛傳」。' },
            { text: 'ばかりに', reason: '「ばかりに」表示「只因為…」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「だけのことはある」表示名副其實、不愧是',
            analysis: '「だけのことはある」用於表示某人或某事的表現與其背景或名聲相符，表示「果然名不虛傳」。',
            comparisons: ['だけのことはある：不愧是…（完整形）', 'だけあって：不愧是…（簡略形）'],
            commonMistakes: ['○ 出ただけのことはあって / × 出るだけのことはあって → 用た形表示已有的背景'],
        },
    },
    // ━━━ 果たして (as expected / really?) ━━━
    {
        id: 'g_n2_359', category: 'grammar', level: 'N2', tags: ['doubt', 'confirmation'],
        stem: '___彼{かれ}の言{い}うことは本当{ほんとう}なのだろうか。',
        stemZh: '他說的話真的是真的嗎？',
        options: [
            { text: 'もしや', reason: '「もしや」表示「莫非…」，語感不同。' },
            { text: 'まさか', reason: '「まさか」表示「不會吧…」，語感不同。' },
            { text: '果たして', reason: '正確！「果たして」表示「真的…嗎？」，帶有疑問和懷疑。' },
            { text: 'いったい', reason: '「いったい」表示「到底…」，也表疑問但語感不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「果たして」帶有懷疑或期待的疑問語氣',
            analysis: '「果たして」有兩個用法：(1)「真的…嗎？」（懷疑）、(2)「果然…」（確認預期）。此題為第一種。',
            comparisons: ['果たして（懷疑）：真的…嗎？', '果たして（確認）：果然…/如預期地…'],
            commonMistakes: ['○ 果たして本当なのだろうか / × 果たして本当だ → 懷疑用法後面用疑問形式'],
        },
    },
    // ━━━ 恐らく (probably - additional) ━━━
    {
        id: 'g_n2_360', category: 'grammar', level: 'N2', tags: ['speculation', 'probability'],
        stem: '___、この計画{けいかく}は成功{せいこう}するだろう。',
        stemZh: '恐怕這個計畫會成功吧。',
        options: [
            { text: '恐らく', reason: '正確！「恐らく」表示「恐怕…/大概…」，較高確信的推測。' },
            { text: '多分', reason: '「多分」也表示「大概」，但較口語。' },
            { text: 'もしかしたら', reason: '「もしかしたら」表示「也許…」，確信度較低。' },
            { text: 'きっと', reason: '「きっと」表示「一定…」，確信度過高。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「恐らく」是書面語的推測表達',
            analysis: '「恐らく」用於表示較高確信度的推測，比「多分」正式，常用於書面語或演講。',
            comparisons: ['恐らく：恐怕…（書面高確信）', '多分：大概…（口語中確信）', 'もしかしたら：也許…（低確信）'],
            commonMistakes: ['○ 恐らく成功するだろう / × 恐らく成功する → 後面常搭配「だろう」「と思われる」'],
        },
    },
    // ━━━ 幸いなことに (fortunately) - additional ━━━
    {
        id: 'g_n2_361', category: 'grammar', level: 'N2', tags: ['fortune', 'relief'],
        stem: '___、怪我人{けがにん}は出{で}なかった。',
        stemZh: '幸運的是，沒有出現傷者。',
        options: [
            { text: '残念なことに', reason: '「残念なことに」表示「遺憾的是…」，語意相反。' },
            { text: '幸いなことに', reason: '正確！「幸いなことに」表示「幸運的是…」。' },
            { text: '驚いたことに', reason: '「驚いたことに」表示「令人驚訝的是…」，語感不同。' },
            { text: '困ったことに', reason: '「困ったことに」表示「麻煩的是…」，語意相反。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「幸いなことに」用於表達對好結果的慶幸',
            analysis: '「幸いなことに」用於引出一個好的結果或情況，表達說話者的慶幸和安心。',
            comparisons: ['幸いなことに：幸運的是…', '残念なことに：遺憾的是…', '困ったことに：麻煩的是…'],
            commonMistakes: ['○ 幸いなことに / ○ 幸い / ○ 幸いにも → 三種都可以使用'],
        },
    },
    // ━━━ ことに (to one's ~ - additional) ━━━
    {
        id: 'g_n2_362', category: 'grammar', level: 'N2', tags: ['emotion', 'emphasis'],
        stem: '嬉{うれ}しい___、第一志望{だいいちしぼう}の大学{だいがく}に合格{ごうかく}した。',
        stemZh: '令人高興的是，考上了第一志願的大學。',
        options: [
            { text: 'ことに', reason: '正確！「ことに」表示「令人…的是」。' },
            { text: 'ことか', reason: '「ことか」表示「多麼…啊！」，用法不同。' },
            { text: 'ことだ', reason: '「ことだ」表示建議「應該…」，語意不同。' },
            { text: 'ことから', reason: '「ことから」表示「因為…的緣故」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「感情形容詞＋ことに」引出令人…的事情',
            analysis: '「ことに」前面接感情形容詞（嬉しい、悲しい、驚いた等），用於先表達感情再敘述引起該感情的事件。',
            comparisons: ['ことに：令人…的是（先感情後事件）', 'ことか：多麼…啊（純感嘆）'],
            commonMistakes: ['○ 嬉しいことに / × 嬉しくことに → 用原形接「ことに」'],
        },
    },
    // ━━━ からすると (judging from - additional) ━━━
    {
        id: 'g_n2_363', category: 'grammar', level: 'N2', tags: ['judgment', 'perspective'],
        stem: '彼{かれ}の表情{ひょうじょう}___、何{なに}か嫌{いや}なことがあったらしい。',
        stemZh: '從他的表情來看，好像發生了什麼不愉快的事。',
        options: [
            { text: 'からすると', reason: '正確！「からすると」表示「從…來看/判斷」。' },
            { text: 'からして', reason: '「からして」表示「光從…就」，語感不同。' },
            { text: 'からには', reason: '「からには」表示「既然…」，語意不同。' },
            { text: 'からこそ', reason: '「からこそ」表示「正因為…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「からすると」用於根據觀察做出判斷',
            analysis: '「からすると」用於根據某個可觀察到的跡象或線索來做出推測或判斷。',
            comparisons: ['からすると：從…來看（根據觀察判斷）', 'からして：光從…就（強調起點）'],
            commonMistakes: ['○ 表情からすると / ○ 表情からすれば → 兩種都可以'],
        },
    },
    // ━━━ から見ると (from the perspective of - additional) ━━━
    {
        id: 'g_n2_364', category: 'grammar', level: 'N2', tags: ['perspective', 'judgment'],
        stem: '専門家{せんもんか}の目{め}___、この計画{けいかく}にはいくつかの問題{もんだい}がある。',
        stemZh: '從專家的角度來看，這個計畫有幾個問題。',
        options: [
            { text: 'に対して', reason: '「に対して」表示「對於…」，語意不同。' },
            { text: 'によると', reason: '「によると」表示「根據…（消息來源）」，語感不同。' },
            { text: 'から見ると', reason: '正確！「から見ると」表示「從…的角度來看」。' },
            { text: 'にしたら', reason: '「にしたら」表示「站在…的角度」，語感不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「から見ると」根據某個視角或觀點來評價',
            analysis: '「から見ると」用於從某個特定的視角、立場或觀點來觀察和評價事物。',
            comparisons: ['から見ると：從…角度來看（評價）', 'からすると：從…來看（判斷推測）', 'によると：根據…（消息來源）'],
            commonMistakes: ['○ 専門家の目から見ると / ○ 専門家から見ると → 兩種都可以'],
        },
    },
    // ━━━ から言うと (from the standpoint of - additional) ━━━
    {
        id: 'g_n2_365', category: 'grammar', level: 'N2', tags: ['standpoint', 'opinion'],
        stem: '文法{ぶんぽう}の点{てん}___、この文{ぶん}は正{ただ}しくない。',
        stemZh: '從文法的角度來說，這個句子不正確。',
        options: [
            { text: 'から言うと', reason: '正確！「から言うと」表示「從…來說」。' },
            { text: 'から見ると', reason: '「から見ると」表示「從…來看」，也可以但語感不同。' },
            { text: 'について', reason: '「について」表示「關於…」，語意不同。' },
            { text: 'に関して', reason: '「に関して」表示「關於…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「から言うと」從某個觀點來陳述意見',
            analysis: '「から言うと」用於從某個特定的觀點或標準來進行評價或陳述意見，與「から言えば」同義。',
            comparisons: ['から言うと：從…來說（陳述意見）', 'から見ると：從…來看（觀察評價）'],
            commonMistakes: ['○ 文法の点から言うと / ○ 文法的に言うと → 兩種都可以'],
        },
    },
    // ━━━ ところを見ると (judging from - additional) ━━━
    {
        id: 'g_n2_366', category: 'grammar', level: 'N2', tags: ['observation', 'inference'],
        stem: '彼{かれ}が笑{わら}っている___、良{よ}い結果{けっか}だったのだろう。',
        stemZh: '看到他在笑，結果大概很好吧。',
        options: [
            { text: 'ところを見ると', reason: '正確！「ところを見ると」表示「從…的情況來看」。' },
            { text: 'からすると', reason: '「からすると」也表示「從…來看」，但不強調「觀察到」。' },
            { text: 'ところに', reason: '「ところに」表示「正當…時」，語意不同。' },
            { text: 'ところで', reason: '「ところで」表示「即使…」或「對了」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ところを見ると」根據觀察到的情況做推測',
            analysis: '「ところを見ると」用於根據親眼觀察到的某個情況或跡象來做出推測或判斷。',
            comparisons: ['ところを見ると：看到…來判斷（親眼觀察）', 'からすると：從…來看（一般判斷）'],
            commonMistakes: ['○ 笑っているところを見ると / × 笑ったところを見ると → 用ている形表示觀察到的當前狀態'],
        },
    },
    // ━━━ としても (even if - additional) ━━━
    {
        id: 'g_n2_367', category: 'grammar', level: 'N2', tags: ['concession', 'hypothetical'],
        stem: 'たとえ失敗{しっぱい}した___、挑戦{ちょうせん}したことに意味{いみ}がある。',
        stemZh: '即使失敗了，挑戰本身也有意義。',
        options: [
            { text: 'としても', reason: '正確！「としても」表示「即使…也…」，假設性讓步。' },
            { text: 'にしても', reason: '「にしても」也可以，但語感略有不同。' },
            { text: 'ところで', reason: '「ところで」表示「即使…也（徒勞）」，語氣太消極。' },
            { text: 'にせよ', reason: '「にせよ」也可以，較書面。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「としても」用於假設性的讓步條件',
            analysis: '「としても」用於假設某種情況即使發生，結論也不會改變。常與「たとえ」搭配。',
            comparisons: ['としても：即使…也（假設讓步）', 'にしても：即使…也（事實讓步）'],
            commonMistakes: ['○ 失敗したとしても / × 失敗としても → 動詞用た形接續'],
        },
    },
    // ━━━ として〜ない (not even one - additional) ━━━
    {
        id: 'g_n2_368', category: 'grammar', level: 'N2', tags: ['emphasis', 'complete_negation'],
        stem: 'この問題{もんだい}に正解{せいかい}できた学生{がくせい}は一人{ひとり}___いなかった。',
        stemZh: '這個問題能答對的學生連一個都沒有。',
        options: [
            { text: 'として', reason: '正確！「として〜ない」表示「連一個…也沒有」。' },
            { text: 'でも', reason: '「でも」表示「連…也」，可以但語感不同。' },
            { text: 'さえ', reason: '「さえ」表示「連…也」，可以但語感不同。' },
            { text: 'すら', reason: '「すら」表示「連…也」，可以但較書面。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「一＋量詞＋として〜ない」表示完全沒有',
            analysis: '「として〜ない」與數量詞「一つ」「一人」等搭配，表示「連一個都沒有」，強調完全不存在。',
            comparisons: ['として〜ない：連一個…也沒有（完全否定）', 'さえ〜ない：連…也沒有（最低標準都不滿足）'],
            commonMistakes: ['○ 一人としていなかった / × 一人としていた → 後面必須是否定'],
        },
    },
    // ━━━ にもかかわらず (despite - complex sentence) ━━━
    {
        id: 'g_n2_369', category: 'grammar', level: 'N2', tags: ['concession', 'complex'],
        stem: '彼{かれ}は体調{たいちょう}が悪{わる}い___、毎日{まいにち}残業{ざんぎょう}を続{つづ}けている。',
        stemZh: '儘管身體不舒服，他仍然每天繼續加班。',
        options: [
            { text: 'にもかかわらず', reason: '正確！「にもかかわらず」表示「儘管…卻…」。' },
            { text: 'にかかわらず', reason: '「にかかわらず」表示「不論…」，語意不同。' },
            { text: 'わりに', reason: '「わりに」表示「雖然…但是」，語氣太輕。' },
            { text: 'にしたところで', reason: '「にしたところで」表示「即使…也」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にもかかわらず」在複雜句型中的使用',
            analysis: '「にもかかわらず」可以接在各種詞性後面：名詞、な形容詞（である/な/にもかかわらず）、い形容詞、動詞。',
            comparisons: ['にもかかわらず：儘管…（正式讓步）', 'にかかわらず：不論…（不受影響）'],
            commonMistakes: ['○ 悪いにもかかわらず / ○ 悪いのにもかかわらず → 形容詞兩種接法都可以'],
        },
    },
    // ━━━ ものの (although - complex context) ━━━
    {
        id: 'g_n2_370', category: 'grammar', level: 'N2', tags: ['concession', 'complex'],
        stem: '計画{けいかく}を立{た}てた___、実行{じっこう}に移{うつ}せないでいる。',
        stemZh: '雖然制定了計畫，卻遲遲無法付諸實行。',
        options: [
            { text: 'のに', reason: '「のに」也可以，但帶有不滿語氣。' },
            { text: 'けれども', reason: '「けれども」也可以，但較一般。' },
            { text: 'ものの', reason: '正確！「ものの」表示「雖然…但是…」，書面語的冷靜讓步。' },
            { text: 'としても', reason: '「としても」表示「即使…」，是假設不是事實。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ものの」表達冷靜客觀的讓步',
            analysis: '「ものの」用於承認前項事實但後項與之矛盾，語氣冷靜客觀，不帶感情色彩。常用於書面語。',
            comparisons: ['ものの：雖然…但是（冷靜客觀）', 'のに：雖然…但是（不滿失望）'],
            commonMistakes: ['○ 立てたものの / × 立てるものの → 常用た形接續'],
        },
    },
    // ━━━ ことなく (without doing - additional) ━━━
    {
        id: 'g_n2_371', category: 'grammar', level: 'N2', tags: ['negation', 'without'],
        stem: '彼女{かのじょ}は一度{いちど}も諦{あきら}める___、夢{ゆめ}を追{お}い続{つづ}けた。',
        stemZh: '她一次也沒有放棄，持續追逐夢想。',
        options: [
            { text: 'ことなく', reason: '正確！「ことなく」表示「沒有…地」，書面語的否定。' },
            { text: 'ないで', reason: '「ないで」也表示「沒有…」，但較口語。' },
            { text: 'ずに', reason: '「ずに」也表示「沒有…」，但語感不同。' },
            { text: 'なしに', reason: '「なしに」表示「沒有…」，但接名詞。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことなく」是書面語的否定連接',
            analysis: '「ことなく」相當於口語的「ないで」「ずに」，用於書面語中連接兩個句子，表示「在不…的情況下」。',
            comparisons: ['ことなく：沒有…地（書面）', 'ないで：沒有…地（口語）', 'ずに：沒有…地（較正式）'],
            commonMistakes: ['○ 諦めることなく / × 諦めたことなく → 用辭書形接「ことなく」'],
        },
    },
    // ━━━ 抜く (do thoroughly - additional) ━━━
    {
        id: 'g_n2_372', category: 'grammar', level: 'N2', tags: ['completion', 'persistence'],
        stem: '長{なが}いマラソンを最後{さいご}まで走{はし}り___。',
        stemZh: '把漫長的馬拉松一直跑到最後。',
        options: [
            { text: '抜いた', reason: '正確！「抜く」表示「做到底/徹底完成」。' },
            { text: '切った', reason: '「切る」也表示「做完」，但強調完結。' },
            { text: '通した', reason: '「通す」表示「貫徹」，語感不同。' },
            { text: '続けた', reason: '「続ける」表示「繼續…」，不強調完成。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「抜く」表示堅持到底、徹底完成',
            analysis: '「動詞連用形＋抜く」表示把某件困難的事情堅持到最後完成，強調毅力和決心。',
            comparisons: ['抜く：做到底（堅持完成）', '切る：做完（徹底結束）', '通す：貫徹（保持一致）'],
            commonMistakes: ['○ 走り抜いた / × 走る抜いた → 用連用形接「抜く」'],
        },
    },
    // ━━━ をこめて (with ~ in mind - additional) ━━━
    {
        id: 'g_n2_373', category: 'grammar', level: 'N2', tags: ['emotion', 'dedication'],
        stem: '感謝{かんしゃ}の気持{きも}ち___、手紙{てがみ}を書{か}いた。',
        stemZh: '帶著感謝的心情寫了信。',
        options: [
            { text: 'をこめて', reason: '正確！「をこめて」表示「傾注…/帶著…」。' },
            { text: 'を通じて', reason: '「を通じて」表示「透過…」，語意不同。' },
            { text: 'をもとに', reason: '「をもとに」表示「以…為基礎」，語意不同。' },
            { text: 'を契機に', reason: '「を契機に」表示「以…為契機」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をこめて」表示將感情或心意傾注其中',
            analysis: '「をこめて」用於表示在做某事時傾注了某種感情或心意，常見搭配：心をこめて、感謝の気持ちをこめて、愛をこめて。',
            comparisons: ['をこめて：帶著…（傾注感情）', 'のために：為了…（目的）'],
            commonMistakes: ['○ 気持ちをこめて / × 気持ちがこめて → 用「を」不用「が」'],
        },
    },
    // ━━━ や否や (as soon as - additional) ━━━
    {
        id: 'g_n2_374', category: 'grammar', level: 'N2', tags: ['immediate', 'literary'],
        stem: 'ベルが鳴{な}る___、学生{がくせい}たちは教室{きょうしつ}から飛{と}び出{だ}した。',
        stemZh: '鈴聲一響，學生們就從教室衝了出來。',
        options: [
            { text: 'が早いか', reason: '「が早いか」也表示「一…就」，但用法不同。' },
            { text: 'や否や', reason: '正確！「や否や」表示「剛一…就…」，文學性表達。' },
            { text: '次第', reason: '「次第」也表示「一…就」，但用於承諾。' },
            { text: 'とたんに', reason: '「とたんに」也表示「一…就」，但用た形接續。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「や否や」表示動作之間幾乎沒有間隔',
            analysis: '「や否や」用辭書形接續，表示前一個動作剛開始或完成就立刻發生後面的動作。語氣文學性較強。',
            comparisons: ['や否や：剛…就…（文學性）', 'とたんに：一…就…（口語）', '次第：一…就…（鄭重承諾）'],
            commonMistakes: ['○ 鳴るや否や / × 鳴ったや否や → 用辭書形不用た形'],
        },
    },
    // ━━━ か〜ないかのうちに (no sooner than - additional) ━━━
    {
        id: 'g_n2_375', category: 'grammar', level: 'N2', tags: ['immediate', 'speed'],
        stem: '目{め}を閉{と}じた___閉{と}じない___のうちに、すぐに眠{ねむ}ってしまった。',
        stemZh: '眼睛才剛一閉，馬上就睡著了。',
        options: [
            { text: 'か / か', reason: '正確！「〜たか〜ないかのうちに」表示幾乎同時發生。' },
            { text: 'や / や', reason: '「〜や〜や」不是正確的文法形式。' },
            { text: 'と / と', reason: '「〜と〜と」不是正確的文法形式。' },
            { text: 'も / も', reason: '「〜も〜も」表示「都…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「〜たか〜ないかのうちに」表示動作還沒完成就發生了下一件事',
            analysis: '「動詞た形＋か＋動詞ない形＋かのうちに」表示前一個動作還沒有完全完成，後一個動作就已經發生了。',
            comparisons: ['か〜ないかのうちに：還沒…就…（極快）', 'や否や：剛…就…（文學性）'],
            commonMistakes: ['○ 閉じたか閉じないかのうちに / × 閉じるか閉じないかのうちに → 第一個動詞用た形'],
        },
    },
    // ━━━ ところだった (almost / nearly - additional) ━━━
    {
        id: 'g_n2_376', category: 'grammar', level: 'N2', tags: ['near_miss', 'danger'],
        stem: 'もう少{すこ}しで車{くるま}にひかれる___。',
        stemZh: '差一點就被車撞了。',
        options: [
            { text: 'ところだった', reason: '正確！「ところだった」表示「差一點就…」。' },
            { text: 'ところだ', reason: '「ところだ」表示「正要…」或「剛…」，語意不同。' },
            { text: 'ところに', reason: '「ところに」表示「正當…時」，語意不同。' },
            { text: 'ところで', reason: '「ところで」表示「即使…」或「對了」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ところだった」表示差一點就發生的危險事',
            analysis: '「ところだった」用於描述某件壞事差一點就要發生了，但最終沒有發生。常與「もう少しで」搭配。',
            comparisons: ['ところだった：差一點就…（險些發生）', 'ところだ：正要…/剛…（時間點）'],
            commonMistakes: ['○ ひかれるところだった / × ひかれたところだった → 用辭書形表示「差一點就要…」'],
        },
    },
    // ━━━ てまで (to the extent of - additional) ━━━
    {
        id: 'g_n2_377', category: 'grammar', level: 'N2', tags: ['extreme', 'sacrifice'],
        stem: '健康{けんこう}を犠牲{ぎせい}にし___、働{はたら}く必要{ひつよう}はない。',
        stemZh: '沒有必要犧牲健康到那個地步去工作。',
        options: [
            { text: 'てまで', reason: '正確！「てまで」表示「甚至不惜…也要/沒必要…到那地步」。' },
            { text: 'てこそ', reason: '「てこそ」表示「只有…才」，語意不同。' },
            { text: 'てでも', reason: '「てでも」表示「即使…也要」，語意不同。' },
            { text: 'てから', reason: '「てから」表示「做了…之後」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てまで」表示做到某種極端程度',
            analysis: '「てまで」用於表示做某事到了過度或極端的程度，帶有「沒必要到那個地步」或「居然到那個地步」的語感。',
            comparisons: ['てまで：甚至…到那地步（過度）', 'てでも：即使…也要（決心）'],
            commonMistakes: ['○ 犠牲にしてまで / × 犠牲にするまで → 用て形接「まで」'],
        },
    },
    // ━━━ てでも (even if one has to - additional) ━━━
    {
        id: 'g_n2_378', category: 'grammar', level: 'N2', tags: ['determination', 'sacrifice'],
        stem: '借金{しゃっきん}し___、子{こ}どもの学費{がくひ}は払{はら}いたい。',
        stemZh: '即使借錢也想付孩子的學費。',
        options: [
            { text: 'てまで', reason: '「てまで」表示「到…的程度」，語感不同。' },
            { text: 'てこそ', reason: '「てこそ」表示「只有…才」，語意不同。' },
            { text: 'てでも', reason: '正確！「てでも」表示「即使不惜…也要…」。' },
            { text: 'ても', reason: '「ても」表示「即使…也」，語氣不夠強烈。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「てでも」表示即使做出犧牲也要完成某事',
            analysis: '「てでも」用於表達即使需要做出某種犧牲或付出代價也要實現某個目標的強烈決心。',
            comparisons: ['てでも：即使…也要（強烈決心）', 'てまで：到…的地步（批評過度）'],
            commonMistakes: ['○ 借金してでも / × 借金するでも → 用て形接「でも」'],
        },
    },
    // ━━━ て当然だ (natural / no wonder - additional) ━━━
    {
        id: 'g_n2_379', category: 'grammar', level: 'N2', tags: ['natural', 'expected'],
        stem: 'あれだけ練習{れんしゅう}したのだから、上手{じょうず}になっ___。',
        stemZh: '練習了那麼多，變厲害也是理所當然的。',
        options: [
            { text: 'て当然だ', reason: '正確！「て当然だ」表示「…是理所當然的」。' },
            { text: 'てたまらない', reason: '「てたまらない」表示「…得受不了」，語意不同。' },
            { text: 'てならない', reason: '「てならない」表示「…得不行」，語意不同。' },
            { text: 'てこそ', reason: '「てこそ」表示「只有…才」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「て当然だ」表示某結果是理所當然的',
            analysis: '「て当然だ」用於表示根據前面的條件或情況，某個結果是可以預期的、理所當然的。',
            comparisons: ['て当然だ：…是理所當然的', 'ても当然だ：即使…也是理所當然的', 'のも無理はない：…也是難怪的'],
            commonMistakes: ['○ 上手になって当然だ / × 上手になる当然だ → 用て形接「当然だ」'],
        },
    },
    // ━━━ てはならない (must not - additional) ━━━
    {
        id: 'g_n2_380', category: 'grammar', level: 'N2', tags: ['prohibition', 'formal'],
        stem: 'いかなる理由{りゆう}があっても、差別{さべつ}をし___。',
        stemZh: '不管有什麼理由，都不可以歧視。',
        options: [
            { text: 'てはいけない', reason: '「てはいけない」也表示「不可以…」，但不夠正式。' },
            { text: 'てはならない', reason: '正確！「てはならない」表示「不可以…」，正式的禁止。' },
            { text: 'べきではない', reason: '「べきではない」表示「不應該…」，語氣不同。' },
            { text: 'ものではない', reason: '「ものではない」表示「不應該…」，語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「てはならない」是最正式的禁止表達',
            analysis: '「てはならない」用於表示嚴肅的禁止，常見於法律、規則、道德宣言等正式場合。',
            comparisons: ['てはならない：不可以…（正式禁止）', 'てはいけない：不可以…（一般禁止）', 'ものではない：不應該…（道德勸誡）'],
            commonMistakes: ['○ 差別をしてはならない / × 差別してはならない → 加「を」更正式'],
        },
    },
    // ━━━ ては〜ては (repeatedly - additional) ━━━
    {
        id: 'g_n2_381', category: 'grammar', level: 'N2', tags: ['repetition', 'routine'],
        stem: '食{た}べ___寝{ね}___の繰{く}り返{かえ}しで、太{ふと}ってしまった。',
        stemZh: '反覆地吃了又睡、睡了又吃，結果胖了。',
        options: [
            { text: 'ては / ては', reason: '正確！「ては〜ては」表示「又…又…」的重複動作。' },
            { text: 'たり / たり', reason: '「たり〜たり」也表示列舉，但不強調反覆。' },
            { text: 'て / て', reason: '「て〜て」表示動作連續，不強調反覆。' },
            { text: 'ながら / ながら', reason: '「ながら〜ながら」不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ては〜ては」表示兩個動作反覆交替進行',
            analysis: '「ては〜ては」用於描述兩個動作反覆交替進行的狀態，常帶有無奈或厭煩的語氣。',
            comparisons: ['ては〜ては：又…又…（反覆交替）', 'たり〜たり：…啦…啦（列舉）'],
            commonMistakes: ['○ 食べては寝ては / × 食べてと寝てと → 用「ては」不用「てと」'],
        },
    },
    // ━━━ ようではないか (let's / why don't we - additional) ━━━
    {
        id: 'g_n2_382', category: 'grammar', level: 'N2', tags: ['invitation', 'formal'],
        stem: 'みんなで力{ちから}を合{あ}わせて、この困難{こんなん}を乗{の}り越{こ}え___。',
        stemZh: '讓我們大家齊心協力來克服這個困難吧。',
        options: [
            { text: 'ましょう', reason: '「ましょう」也表示「讓我們…」，但不夠莊重。' },
            { text: 'よう', reason: '「よう」也表示「讓我們…」，太一般。' },
            { text: 'ようではないか', reason: '正確！「ようではないか」表示「讓我們…吧」，莊重的呼籲。' },
            { text: 'ことだ', reason: '「ことだ」表示「應該…」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ようではないか」用於莊重的呼籲或號召',
            analysis: '「ようではないか」是較為莊重的邀請或號召表達，常用於演講、領導對群眾的呼籲。',
            comparisons: ['ようではないか：讓我們…吧（莊重呼籲）', 'ましょう：讓我們…吧（一般邀請）'],
            commonMistakes: ['○ 乗り越えようではないか / × 乗り越えるではないか → 用意向形'],
        },
    },
    // ━━━ ようが (no matter how - additional) ━━━
    {
        id: 'g_n2_383', category: 'grammar', level: 'N2', tags: ['strong_concession', 'determination'],
        stem: '誰{だれ}に何{なに}と言{い}われ___、自分{じぶん}の信念{しんねん}を貫{つらぬ}く。',
        stemZh: '不管誰說了什麼，都要貫徹自己的信念。',
        options: [
            { text: 'ても', reason: '「ても」也表示「即使…也」，但語氣不夠強烈。' },
            { text: 'ようが', reason: '正確！「ようが」表示「無論…也…」，強烈讓步。' },
            { text: 'たところで', reason: '「たところで」表示「即使…也（徒勞）」，語氣消極。' },
            { text: 'にしても', reason: '「にしても」表示「即使…」，語氣較溫和。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ようが」表示無論如何都不會動搖',
            analysis: '「ようが」用意向形接續，表示無論發生什麼，後面的決心或結論都不會改變。語氣非常強烈。',
            comparisons: ['ようが：無論…也…（最強讓步）', 'ても：即使…也…（一般讓步）'],
            commonMistakes: ['○ 言われようが / × 言われるようが → 用意向形（被動意向形）'],
        },
    },
    // ━━━ ようにも〜ない (can't even if want to - additional) ━━━
    {
        id: 'g_n2_384', category: 'grammar', level: 'N2', tags: ['impossibility', 'frustration'],
        stem: '仕事{しごと}が忙{いそが}しくて、休{やす}み___休{やす}めない。',
        stemZh: '工作太忙了，想休息也沒辦法休息。',
        options: [
            { text: 'たくても', reason: '「たくても」也可以表示「即使想…也」，但語感不同。' },
            { text: 'ようにも', reason: '正確！「ようにも〜ない」表示「想…也做不到」。' },
            { text: 'ようとしても', reason: '「ようとしても」表示「即使試圖…也」，語感不同。' },
            { text: 'ないでは', reason: '「ないでは」不自然。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ようにも〜ない」表示想做某事卻無法實現',
            analysis: '「意向形＋にも＋可能否定形」表示即使主觀上想做某事，客觀條件或環境卻不允許。帶有無奈和挫折感。',
            comparisons: ['ようにも〜ない：想…也（做不到）（環境阻礙）', 'たくても〜ない：即使想…也（不能）（一般）'],
            commonMistakes: ['○ 休もうにも休めない / × 休むようにも休めない → 用意向形'],
        },
    },
    // ━━━ がち (tend to / prone to) ━━━
    {
        id: 'g_n2_385', category: 'grammar', level: 'N2', tags: ['tendency', 'negative'],
        stem: '冬{ふゆ}は風邪{かぜ}をひき___だ。',
        stemZh: '冬天容易感冒。',
        options: [
            { text: 'がち', reason: '正確！「がち」表示「容易…/動不動就…」，通常用於負面傾向。' },
            { text: 'っぽい', reason: '「っぽい」表示「…似的/容易…」，語感不同。' },
            { text: 'やすい', reason: '「やすい」表示「容易…」，較中性。' },
            { text: 'げ', reason: '「げ」表示「看起來…的樣子」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「がち」表示容易出現的負面傾向',
            analysis: '「がち」用於表示某事容易反覆發生，通常帶有負面含義。接在動詞連用形或名詞後。',
            comparisons: ['がち：容易…（負面傾向）', 'やすい：容易…（中性）', 'っぽい：像…（性質似乎）'],
            commonMistakes: ['○ ひきがち / × ひくがち → 用連用形（ます形去ます）'],
        },
    },
    // ━━━ げ (seeming / appearing) - additional ━━━
    {
        id: 'g_n2_386', category: 'grammar', level: 'N2', tags: ['appearance', 'impression'],
        stem: '彼{かれ}は何{なに}か言{い}いた___な顔{かお}をしている。',
        stemZh: '他露出一副好像想說什麼的表情。',
        options: [
            { text: 'そう', reason: '「そう」也表示「看起來…」，但接續不同。' },
            { text: 'げ', reason: '正確！「げ」表示「看起來…的樣子」，修飾外表或態度。' },
            { text: 'っぽい', reason: '「っぽい」表示「像…的」，語感不同。' },
            { text: 'らしい', reason: '「らしい」表示「好像…」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「げ」用於描述從外表看到的某種感覺',
            analysis: '「げ」接在形容詞語幹或某些動詞後，表示「看起來…的樣子」。修飾名詞時加「な」。',
            comparisons: ['げ：看起來…的樣子（外在印象）', 'そう：看起來…（推測）'],
            commonMistakes: ['○ 言いたげ / × 言いたいげ → 去掉「い」接「げ」'],
        },
    },
    // ━━━ かと思ったら (just when I thought - additional) ━━━
    {
        id: 'g_n2_387', category: 'grammar', level: 'N2', tags: ['surprise', 'sudden_change'],
        stem: '泣{な}いていた___、急{きゅう}に笑{わら}い出{だ}した。',
        stemZh: '以為在哭，突然又笑了出來。',
        options: [
            { text: 'と思ったら', reason: '「と思ったら」也可以，但不如「かと思ったら」自然。' },
            { text: 'かと思ったら', reason: '正確！「かと思ったら」表示「剛以為…忽然就…」。' },
            { text: 'ところに', reason: '「ところに」表示「正當…時」，語感不同。' },
            { text: 'とたんに', reason: '「とたんに」表示「一…就」，不帶「以為」的語感。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「かと思ったら」表示出乎意料的快速變化',
            analysis: '「かと思ったら」用於描述事情在極短時間內發生了意外的變化，說話者對此感到驚訝。',
            comparisons: ['かと思ったら：剛以為…忽然（驚訝變化）', 'かと思うと：一…就…（同義）'],
            commonMistakes: ['○ 泣いていたかと思ったら / × 泣くかと思ったら → 前面用ていた形更自然'],
        },
    },
    // ━━━ ところに / ところへ (just when / right at that moment) ━━━
    {
        id: 'g_n2_388', category: 'grammar', level: 'N2', tags: ['timing', 'interruption'],
        stem: '出{で}かけようとしている___、友達{ともだち}から電話{でんわ}がかかってきた。',
        stemZh: '正要出門的時候，朋友打電話來了。',
        options: [
            { text: 'ところに', reason: '正確！「ところに」表示「正當…的時候」。' },
            { text: 'ところで', reason: '「ところで」表示「即使…」或「對了」，語意不同。' },
            { text: 'ところが', reason: '「ところが」表示「然而」，語意不同。' },
            { text: 'ところを', reason: '「ところを」表示「正…的時候（被…）」，需要被動。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ところに」表示在某個時間點發生了介入',
            analysis: '「ところに」用於描述在某個動作正要進行或正在進行時，外部事件介入了。前面常用「ようとしている」「ている」。',
            comparisons: ['ところに：正當…時（外部介入）', 'ところへ：正當…時（同義）', 'ところを：正…時被…（被動介入）'],
            commonMistakes: ['○ 出かけようとしているところに / × 出かけるところに → 用「ようとしている」表示正要…'],
        },
    },
    // ━━━ ことから (from the fact that - naming) ━━━
    {
        id: 'g_n2_389', category: 'grammar', level: 'N2', tags: ['reason', 'naming', 'complex'],
        stem: 'この山{やま}は富士山{ふじさん}に似{に}ている___、「小富士{こふじ}」と呼{よ}ばれている。',
        stemZh: '因為這座山和富士山很像，所以被稱為「小富士」。',
        options: [
            { text: 'ために', reason: '「ために」也表示原因，但不適合命名語境。' },
            { text: 'ことから', reason: '正確！「ことから」表示「因為…」，特別適合說明命名由來。' },
            { text: 'せいで', reason: '「せいで」表示「因為…（負面）」，不適合。' },
            { text: 'おかげで', reason: '「おかげで」表示「託…的福」，語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ことから」特別適合說明名稱的由來',
            analysis: '「ことから」在說明名稱或稱呼的由來時特別自然，後面常接「〜と呼ばれている」「〜と名付けられた」等。',
            comparisons: ['ことから：因為…（命名由來）', 'ために：因為…（一般原因）'],
            commonMistakes: ['○ 似ていることから / × 似ることから → 用ている形表示持續狀態'],
        },
    },
    // ━━━ にしたら / にすれば (from one's standpoint - complex) ━━━
    {
        id: 'g_n2_390', category: 'grammar', level: 'N2', tags: ['empathy', 'perspective', 'complex'],
        stem: '子{こ}どもたち___、夏休{なつやす}みが短{みじか}くなるのは嫌{いや}だろう。',
        stemZh: '站在孩子們的角度，暑假變短肯定不喜歡吧。',
        options: [
            { text: 'にしたら', reason: '正確！「にしたら」表示「站在…的角度」。' },
            { text: 'にとって', reason: '「にとって」表示「對…來說」，也可以但不強調設身處地。' },
            { text: 'として', reason: '「として」表示「作為…」，語感不同。' },
            { text: 'に対して', reason: '「に対して」表示「對於…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にしたら」強調站在對方角度思考',
            analysis: '「にしたら」用於設身處地為對方著想，推測對方的感受或想法。與「にすれば」同義。',
            comparisons: ['にしたら：站在…角度（設身處地）', 'にとって：對…來說（客觀觀點）'],
            commonMistakes: ['○ 子どもたちにしたら / ○ 子どもたちにすれば → 兩種都可以'],
        },
    },
    // ━━━ わけではない (it doesn't mean that) ━━━
    {
        id: 'g_n2_391', category: 'grammar', level: 'N2', tags: ['partial_negation', 'clarification'],
        stem: '日本語{にほんご}が嫌{きら}いな___、ただ時間{じかん}がないだけだ。',
        stemZh: '並不是不喜歡日語，只是沒有時間而已。',
        options: [
            { text: 'わけではない', reason: '正確！「わけではない」表示「並不是…」，否定某種推論。' },
            { text: 'はずがない', reason: '「はずがない」表示「不可能…」，語氣過強。' },
            { text: 'ことはない', reason: '「ことはない」表示「不必…」，語意不同。' },
            { text: 'ものではない', reason: '「ものではない」表示「不應該…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わけではない」用於澄清誤解',
            analysis: '「わけではない」用於否定他人可能產生的誤解或錯誤推論，表示「並不是那樣的」。',
            comparisons: ['わけではない：並不是…（澄清）', 'わけがない：不可能…（強烈否定）'],
            commonMistakes: ['○ 嫌いなわけではない / × 嫌いのわけではない → な形容詞用「な」接續'],
        },
    },
    // ━━━ に応えて (in response to - additional) ━━━
    {
        id: 'g_n2_392', category: 'grammar', level: 'N2', tags: ['response', 'fulfillment'],
        stem: '市民{しみん}の要望{ようぼう}___、市{し}は新{あたら}しい公園{こうえん}を建設{けんせつ}した。',
        stemZh: '回應市民的需求，市政府建設了新的公園。',
        options: [
            { text: 'に対して', reason: '「に対して」表示「對於…」，不強調「回應」。' },
            { text: 'に応えて', reason: '正確！「に応えて」表示「回應…/滿足…」。' },
            { text: 'に応じて', reason: '「に応じて」表示「根據…」，語感不同。' },
            { text: 'について', reason: '「について」表示「關於…」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「に応えて」表示回應他人的期待或要求',
            analysis: '「に応えて」用於表示為了滿足或回應某人的期待、要求、呼聲而採取行動。',
            comparisons: ['に応えて：回應…（滿足期待）', 'に応じて：根據…（相應調整）'],
            commonMistakes: ['○ 要望に応えて / × 要望を応えて → 用「に」不用「を」'],
        },
    },
    // ━━━ にかわって (on behalf of - complex) ━━━
    {
        id: 'g_n2_393', category: 'grammar', level: 'N2', tags: ['substitution', 'representation'],
        stem: '社長{しゃちょう}___、副社長{ふくしゃちょう}がご挨拶{あいさつ}を申{もう}し上{あ}げます。',
        stemZh: '代替社長，由副社長來致辭。',
        options: [
            { text: 'にかわりまして', reason: '正確！「にかわりまして」是「にかわって」的敬語形式。' },
            { text: 'のかわりに', reason: '「のかわりに」也可以，但不夠正式。' },
            { text: 'として', reason: '「として」表示「作為…」，語意不同。' },
            { text: 'に代えて', reason: '「に代えて」表示「代替…」，但接續不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にかわりまして」是「にかわって」的敬語形',
            analysis: '「にかわりまして」是正式場合使用的敬語表達，常見於致辭、會議等場合。',
            comparisons: ['にかわりまして：代替…（敬語正式）', 'にかわって：代替…（一般正式）', 'のかわりに：代替…（口語）'],
            commonMistakes: ['○ 社長にかわりまして / × 社長のかわりまして → 用「に」不用「の」'],
        },
    },
    // ━━━ に関する (related to / concerning) ━━━
    {
        id: 'g_n2_394', category: 'grammar', level: 'N2', tags: ['about', 'formal'],
        stem: '環境{かんきょう}問題{もんだい}___調査{ちょうさ}が行{おこな}われた。',
        stemZh: '進行了有關環境問題的調查。',
        options: [
            { text: 'についての', reason: '「についての」也可以，意思相同。' },
            { text: 'に関する', reason: '正確！「に関する」表示「有關…的」，修飾名詞用。' },
            { text: 'における', reason: '「における」表示「在…的」，語意不同。' },
            { text: 'に対する', reason: '「に対する」表示「對…的」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「に関する」是修飾名詞時用的「關於」',
            analysis: '「に関する」用於修飾名詞，相當於「についての」。句中用「に関して」，修飾名詞用「に関する」。',
            comparisons: ['に関する＋名詞：關於…的（修飾名詞）', 'に関して：關於…（句中使用）'],
            commonMistakes: ['○ 環境問題に関する調査 / × 環境問題に関しての調査 → 修飾名詞用「に関する」'],
        },
    },
    // ━━━ もう少しで (almost - additional) ━━━
    {
        id: 'g_n2_395', category: 'grammar', level: 'N2', tags: ['near_miss', 'close_call'],
        stem: '___遅刻{ちこく}する___だった。',
        stemZh: '差一點就遲到了。',
        options: [
            { text: 'もう少しで / ところ', reason: '正確！「もう少しで〜ところだった」表示「差一點就…」。' },
            { text: 'あと少しで / はず', reason: '「はず」表示「應該…」，搭配不當。' },
            { text: 'もうすぐ / こと', reason: '「もうすぐ」表示「快要…」，語感不同。' },
            { text: 'もう少しで / わけ', reason: '「わけだった」不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「もう少しで〜ところだった」是固定搭配',
            analysis: '「もう少しで」與「ところだった」搭配使用，表示差一點就要發生某事（通常是不好的事），但最終沒有發生。',
            comparisons: ['もう少しで〜ところだった：差一點就…（險些）', '危うく〜ところだった：差一點就…（同義）'],
            commonMistakes: ['○ もう少しで遅刻するところだった / × もう少しで遅刻したところだった → 用辭書形'],
        },
    },
    // ━━━ 言うまでもなく (needless to say) ━━━
    {
        id: 'g_n2_396', category: 'grammar', level: 'N2', tags: ['emphasis', 'obvious'],
        stem: '健康{けんこう}が大切{たいせつ}なのは___。',
        stemZh: '健康的重要性是不言而喻的。',
        options: [
            { text: '言うまでもない', reason: '正確！「言うまでもない」表示「不用說也知道…」。' },
            { text: '言わざるを得ない', reason: '「言わざるを得ない」表示「不得不說」，語意相反。' },
            { text: '言いかねない', reason: '「言いかねない」表示「有可能會說」，語意不同。' },
            { text: '言うべきだ', reason: '「言うべきだ」表示「應該說」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「言うまでもない」表示理所當然到不需要說',
            analysis: '「言うまでもない」用於強調某件事是眾所周知的、不需要特別說明的常識。',
            comparisons: ['言うまでもない：不用說也知道（常識）', 'もちろん：當然（口語）'],
            commonMistakes: ['○ 言うまでもない / ○ 言うまでもなく → 兩種都可以'],
        },
    },
    // ━━━ に先立って (prior to - complex context) ━━━
    {
        id: 'g_n2_397', category: 'grammar', level: 'N2', tags: ['preparation', 'complex'],
        stem: '工事{こうじ}の開始{かいし}___、近隣{きんりん}住民{じゅうみん}への説明会{せつめいかい}が開{ひら}かれた。',
        stemZh: '在開工之前，舉行了對附近居民的說明會。',
        options: [
            { text: 'に先立ち', reason: '正確！「に先立ち」表示「在…之前」，書面語。' },
            { text: 'にあたって', reason: '「にあたって」表示「在…之際」，不強調「之前」。' },
            { text: 'に際して', reason: '「に際して」表示「在…之際」，不強調「之前」。' },
            { text: 'の後で', reason: '「の後で」表示「在…之後」，時間相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に先立ち」是「に先立って」的書面語形式',
            analysis: '「に先立ち」和「に先立って」意思相同，表示在某件重要事情之前做準備性的工作。「に先立ち」更書面。',
            comparisons: ['に先立ち：在…之前（書面）', 'に先立って：在…之前（一般正式）'],
            commonMistakes: ['○ 開始に先立ち / ○ 開始に先立って → 兩種都可以'],
        },
    },
    // ━━━ ないことには〜ない (unless - additional) ━━━
    {
        id: 'g_n2_398', category: 'grammar', level: 'N2', tags: ['condition', 'necessity'],
        stem: '実際{じっさい}にやって___、できるかどうかわからない。',
        stemZh: '如果不實際去做的話，就不知道能不能做到。',
        options: [
            { text: 'みないことには', reason: '正確！「ないことには〜ない」表示「如果不…就不…」。' },
            { text: 'みないかぎり', reason: '「ないかぎり」也可以，但語感不同。' },
            { text: 'みなくては', reason: '「みなくては」表示「不…的話不行」，語感不同。' },
            { text: 'みないと', reason: '「みないと」表示「如果不…」，太口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないことには〜ない」強調做某事是前提條件',
            analysis: '「ないことには〜ない」表示如果不做前面的事情，後面的事情就無法實現或判斷。強調前提條件的必要性。',
            comparisons: ['ないことには〜ない：如果不…就不…（前提必要）', 'ないかぎり〜ない：除非…否則不…（條件限定）'],
            commonMistakes: ['○ やってみないことには / × やらないことには → 「やってみる」整體的否定'],
        },
    },
    // ━━━ なくて済む (can get by without - additional) ━━━
    {
        id: 'g_n2_399', category: 'grammar', level: 'N2', tags: ['avoidance', 'relief'],
        stem: 'オンラインで手続{てつづ}きできるので、わざわざ窓口{まどぐち}に行{い}か___。',
        stemZh: '因為可以在網上辦手續，所以不用特地去窗口。',
        options: [
            { text: 'ないで済む', reason: '「ないで済む」也可以，但較口語。' },
            { text: 'なくて済む', reason: '正確！「なくて済む」表示「不用…就行了」。' },
            { text: 'ずに済む', reason: '「ずに済む」也可以，較書面。' },
            { text: 'ないことはない', reason: '「ないことはない」表示「也不是不…」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「なくて済む」表示不需要做某事也能解決',
            analysis: '「なくて済む」用於表示某件本來可能需要做的事情，因為某種原因可以省略，帶有方便或安心的語氣。',
            comparisons: ['なくて済む：不用…就行（省去麻煩）', 'ずに済む：不用…就行（書面語）'],
            commonMistakes: ['○ 行かなくて済む / × 行くなくて済む → 用ない形接「て」'],
        },
    },
    // ━━━ かのように (as if - additional) ━━━
    {
        id: 'g_n2_400', category: 'grammar', level: 'N2', tags: ['simile', 'pretense'],
        stem: '彼{かれ}は何{なに}も知{し}らない___振{ふ}る舞{ま}っている。',
        stemZh: '他表現得好像什麼都不知道一樣。',
        options: [
            { text: 'ように', reason: '「ように」也可以，但不帶「彷彿」的強調語氣。' },
            { text: 'かのように', reason: '正確！「かのように」表示「彷彿…一樣」，強調虛假或比喻。' },
            { text: 'みたいに', reason: '「みたいに」也表示「像…一樣」，但太口語。' },
            { text: 'ふうに', reason: '「ふうに」表示「那樣地」，語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「かのように」強調虛假的表象或深層的比喻',
            analysis: '「かのように」比「ように」語氣更強，常用於強調實際上並非如此的假象，或文學性的深層比喻。',
            comparisons: ['かのように：彷彿…一樣（強調虛假/比喻）', 'ように：像…一樣（一般比喻）'],
            commonMistakes: ['○ 知らないかのように / × 知らなかったかのように → 常用現在形表示持續狀態'],
        },
    },
    // ━━━ ふうに (in a ~ way - additional) ━━━
    {
        id: 'g_n2_401', category: 'grammar', level: 'N2', tags: ['manner', 'style'],
        stem: 'もっと簡単{かんたん}な___説明{せつめい}していただけませんか。',
        stemZh: '可以用更簡單的方式說明嗎？',
        options: [
            { text: 'ふうに', reason: '正確！「ふうに」表示「以…的方式」。' },
            { text: 'ように', reason: '「ように」也表示「像…一樣」，但語感不同。' },
            { text: 'みたいに', reason: '「みたいに」表示「像…一樣」，太口語。' },
            { text: 'として', reason: '「として」表示「作為…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ふうに」表示某種方式或風格',
            analysis: '「ふうに」接在形容詞或「こう/そう/ああ/どう」等後面，表示「以…的方式/風格」。',
            comparisons: ['ふうに：以…的方式（風格）', 'ように：像…一樣（模仿）'],
            commonMistakes: ['○ 簡単なふうに / ○ こういうふうに → 形容詞用「な」接續'],
        },
    },
    // ━━━ というふうに (in such a way - additional) ━━━
    {
        id: 'g_n2_402', category: 'grammar', level: 'N2', tags: ['manner', 'quotation'],
        stem: '「もう少{すこ}し頑張{がんば}ろう」___自分{じぶん}を励{はげ}ました。',
        stemZh: '用「再加油一下」這樣的方式來鼓勵自己。',
        options: [
            { text: 'というふうに', reason: '正確！「というふうに」表示「以…的方式」，引述具體內容。' },
            { text: 'ように', reason: '「ように」表示「像…一樣」，不用於引述。' },
            { text: 'として', reason: '「として」表示「作為…」，語意不同。' },
            { text: 'とばかりに', reason: '「とばかりに」表示「好像在說…似的」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「というふうに」引述具體的方式或想法',
            analysis: '「というふうに」用於引述具體的想法、話語或方式，表示「以…這樣的方式」。',
            comparisons: ['というふうに：以…這樣的方式（引述具體內容）', 'ふうに：以…的方式（一般風格）'],
            commonMistakes: ['○ 「頑張ろう」というふうに / × 「頑張ろう」とふうに → 需要「いう」'],
        },
    },
    // ━━━ というものだ (that's what ~ is - additional) ━━━
    {
        id: 'g_n2_403', category: 'grammar', level: 'N2', tags: ['definition', 'emphasis'],
        stem: '困{こま}っている人{ひと}を助{たす}けるのが、真{しん}の友情{ゆうじょう}___。',
        stemZh: '幫助困難中的人，這才是真正的友情。',
        options: [
            { text: 'というものだ', reason: '正確！「というものだ」表示「這才真正是…」。' },
            { text: 'ということだ', reason: '「ということだ」表示「據說…/意味著…」，語意不同。' },
            { text: 'というわけだ', reason: '「というわけだ」表示「所以…」，語意不同。' },
            { text: 'というはずだ', reason: '「というはずだ」不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「というものだ」用於強調事物的本質',
            analysis: '「というものだ」用於定義或強調某事物的真正本質或意義，表示「這才是真正的…」。',
            comparisons: ['というものだ：這才是…（定義本質）', 'というものではない：不見得是…（否定定義）'],
            commonMistakes: ['○ 友情というものだ / × 友情のものだ → 需要「という」'],
        },
    },
    // ━━━ そうすると (then / in that case - additional) ━━━
    {
        id: 'g_n2_404', category: 'grammar', level: 'N2', tags: ['consequence', 'logic'],
        stem: '来月{らいげつ}から値上{ねあ}げされるそうだ。___、今{いま}のうちに買{か}っておいたほうがいい。',
        stemZh: '聽說下個月開始漲價。那樣的話，趁現在先買好比較好。',
        options: [
            { text: 'だから', reason: '「だから」表示「所以」，也可以但較直接。' },
            { text: 'そうすると', reason: '正確！「そうすると」表示「那樣的話」，根據前述情況推出結論。' },
            { text: 'ところが', reason: '「ところが」表示「然而」，語意相反。' },
            { text: 'それなのに', reason: '「それなのに」表示「儘管如此」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「そうすると」根據前述條件推出合理結論',
            analysis: '「そうすると」用於聽到某個情況後，推導出相應的結論或建議，表示「那樣的話…」。',
            comparisons: ['そうすると：那樣的話（推論結論）', 'だから：所以（直接因果）', 'それなら：如果那樣的話（條件）'],
            commonMistakes: ['○ そうすると、買っておいたほうがいい / × そうしたら、… → 「そうすると」更書面'],
        },
    },
    // ━━━ それなら (if that's the case) ━━━
    {
        id: 'g_n2_405', category: 'grammar', level: 'N2', tags: ['condition', 'response'],
        stem: '「明日{あした}は雨{あめ}らしいよ。」「___、ピクニックは中止{ちゅうし}にしよう。」',
        stemZh: '「聽說明天會下雨。」「如果那樣的話，野餐就取消吧。」',
        options: [
            { text: 'それなら', reason: '正確！「それなら」表示「如果是那樣的話」，回應對方的資訊。' },
            { text: 'そうすると', reason: '「そうすると」表示「那樣的話」，語感不同。' },
            { text: 'そうだとしても', reason: '「そうだとしても」表示「即使如此」，語意相反。' },
            { text: 'それにしても', reason: '「それにしても」表示「即便如此」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「それなら」直接回應對方的資訊做出決定',
            analysis: '「それなら」用於接受對方提供的資訊後，基於該資訊做出相應的回應或決定。常用於對話中。',
            comparisons: ['それなら：如果那樣的話（直接回應）', 'そうすると：那樣的話（推論）'],
            commonMistakes: ['○ それなら、中止にしよう / × それなので、中止にしよう → 「それなら」是假設不是因果'],
        },
    },
    // ━━━ しかも (moreover - additional) ━━━
    {
        id: 'g_n2_406', category: 'grammar', level: 'N2', tags: ['addition', 'emphasis'],
        stem: 'この料理{りょうり}は美味{おい}しい。___、値段{ねだん}もとても安{やす}い。',
        stemZh: '這道菜很好吃。而且價格也非常便宜。',
        options: [
            { text: 'しかも', reason: '正確！「しかも」表示「而且/況且」，追加更有力的資訊。' },
            { text: 'ところが', reason: '「ところが」表示「然而」，語意相反。' },
            { text: 'ただし', reason: '「ただし」表示「不過/但是」，語意不同。' },
            { text: 'むしろ', reason: '「むしろ」表示「倒不如說」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「しかも」用於追加更有說服力的資訊',
            analysis: '「しかも」用於在前面的陳述之後追加另一個更有說服力或更出人意料的資訊，加強前面的論點。',
            comparisons: ['しかも：而且（追加強調）', 'おまけに：加上（附帶，較口語）', 'その上：再加上（書面）'],
            commonMistakes: ['○ しかも、値段も安い / × しかもに値段も安い → 「しかも」直接接句子'],
        },
    },
    // ━━━ おまけに (on top of that - additional) ━━━
    {
        id: 'g_n2_407', category: 'grammar', level: 'N2', tags: ['addition', 'informal'],
        stem: '道{みち}に迷{まよ}った。___雨{あめ}まで降{ふ}ってきた。',
        stemZh: '迷了路。加上又開始下雨了。',
        options: [
            { text: 'しかも', reason: '「しかも」也表示「而且」，但較正式。' },
            { text: 'おまけに', reason: '正確！「おまけに」表示「加上/而且」，口語色彩，常用於累積不好的事。' },
            { text: 'なお', reason: '「なお」表示「另外」，太正式。' },
            { text: 'ちなみに', reason: '「ちなみに」表示「順便一提」，語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「おまけに」常用於累積不幸的情況',
            analysis: '「おまけに」用於在已有的（通常是不好的）狀況上再追加另一個不幸，帶有「屋漏偏逢連夜雨」的語感。',
            comparisons: ['おまけに：加上（口語，常用於負面累積）', 'しかも：而且（正式，正負面皆可）'],
            commonMistakes: ['○ おまけに雨まで降ってきた / × おまけに雨が降ってきた → 常搭配「まで」強調'],
        },
    },
    // ━━━ いよいよ (finally / at last - additional) ━━━
    {
        id: 'g_n2_408', category: 'grammar', level: 'N2', tags: ['climax', 'anticipation'],
        stem: '長{なが}い準備{じゅんび}期間{きかん}を経{へ}て、___本番{ほんばん}を迎{むか}える。',
        stemZh: '經過漫長的準備期間，終於迎來正式演出。',
        options: [
            { text: 'やがて', reason: '「やがて」表示「不久」，不強調期待感。' },
            { text: 'とうとう', reason: '「とうとう」表示「終於」，常帶有疲憊感。' },
            { text: 'いよいよ', reason: '正確！「いよいよ」表示「終於/關鍵時刻」，帶有期待和興奮。' },
            { text: 'ついに', reason: '「ついに」表示「終於」，但不帶「即將到來」的緊張感。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「いよいよ」帶有期待和緊張的「終於」',
            analysis: '「いよいよ」用於表示期待已久的事情即將到來，帶有興奮、緊張或期待的語氣。',
            comparisons: ['いよいよ：終於（期待興奮）', 'ついに：終於（長期努力的結果）', 'とうとう：終於（疲憊/無奈）'],
            commonMistakes: ['○ いよいよ本番 / × いよいよに本番 → 「いよいよ」直接修飾'],
        },
    },
    // ━━━ やがて (before long / eventually - additional) ━━━
    {
        id: 'g_n2_409', category: 'grammar', level: 'N2', tags: ['time', 'natural_progression'],
        stem: '空{そら}が暗{くら}くなり、___雨{あめ}が降{ふ}り始{はじ}めた。',
        stemZh: '天空變暗了，不久就開始下雨了。',
        options: [
            { text: 'やがて', reason: '正確！「やがて」表示「不久/漸漸地」，自然推移。' },
            { text: 'いきなり', reason: '「いきなり」表示「突然」，語感不同。' },
            { text: 'とっくに', reason: '「とっくに」表示「早就」，語意不同。' },
            { text: 'ようやく', reason: '「ようやく」表示「好不容易」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「やがて」描述事物自然推移的過程',
            analysis: '「やがて」用於描述事物自然而然地發展到某個結果，不帶有人為的努力或期待感。',
            comparisons: ['やがて：不久（自然推移）', 'まもなく：不久（即將發生）', 'いよいよ：終於（期待到來）'],
            commonMistakes: ['○ やがて雨が降り始めた / × やがてに雨が降り始めた → 「やがて」直接修飾'],
        },
    },
    // ━━━ いきなり (suddenly - additional) ━━━
    {
        id: 'g_n2_410', category: 'grammar', level: 'N2', tags: ['sudden', 'unexpected'],
        stem: '彼{かれ}は___怒{おこ}り出{だ}して、みんなを驚{おどろ}かせた。',
        stemZh: '他突然發怒，嚇到了大家。',
        options: [
            { text: 'いきなり', reason: '正確！「いきなり」表示「突然/沒有預兆地」。' },
            { text: 'やがて', reason: '「やがて」表示「不久」，不是突然。' },
            { text: '次第に', reason: '「次第に」表示「逐漸」，語意相反。' },
            { text: 'ようやく', reason: '「ようやく」表示「好不容易」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「いきなり」強調毫無預兆的突然發生',
            analysis: '「いきなり」用於描述事情在沒有任何預兆或前兆的情況下突然發生，常帶有驚訝。',
            comparisons: ['いきなり：突然（沒有預兆）', '急に：突然（一般突然）', '突然：突然（正式用語）'],
            commonMistakes: ['○ いきなり怒り出した / × いきなりに怒り出した → 直接修飾動詞'],
        },
    },
    // ━━━ とっくに (long ago / already - additional) ━━━
    {
        id: 'g_n2_411', category: 'grammar', level: 'N2', tags: ['already', 'emphasis'],
        stem: 'そんなことは___知{し}っているよ。',
        stemZh: '那種事我早就知道了。',
        options: [
            { text: 'もう', reason: '「もう」也表示「已經」，但語氣不夠強。' },
            { text: 'とっくに', reason: '正確！「とっくに」表示「早就…」，強調很早以前就已經。' },
            { text: 'すでに', reason: '「すでに」表示「已經」，較正式但不強調「很久以前」。' },
            { text: 'ようやく', reason: '「ようやく」表示「好不容易」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「とっくに」強調「很早以前就已經…」',
            analysis: '「とっくに」用於強調某件事在很早以前就已經完成或知道了，帶有「你說什麼廢話」的語感。',
            comparisons: ['とっくに：早就…（強調時間久遠）', 'もう：已經…（一般）', 'すでに：已經…（正式）'],
            commonMistakes: ['○ とっくに知っている / × とっくに知った → 用ている形表示持續狀態'],
        },
    },
    // ━━━ ろくに〜ない (not properly - additional) ━━━
    {
        id: 'g_n2_412', category: 'grammar', level: 'N2', tags: ['insufficiency', 'criticism'],
        stem: '最近{さいきん}忙{いそが}しくて、___食事{しょくじ}も取{と}れていない。',
        stemZh: '最近太忙了，連飯都沒好好吃。',
        options: [
            { text: 'ろくに', reason: '正確！「ろくに〜ない」表示「沒有好好…/不像樣地…」。' },
            { text: 'まったく', reason: '「まったく」表示「完全不」，語氣過強。' },
            { text: 'ちっとも', reason: '「ちっとも」表示「一點也不」，語意不同。' },
            { text: 'すこしも', reason: '「すこしも」表示「一點也不」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ろくに〜ない」表示沒有做到應有的程度',
            analysis: '「ろくに〜ない」用於表示某事沒有做到應有的程度或標準，帶有不滿或批評的語氣。後面必須接否定。',
            comparisons: ['ろくに〜ない：沒好好…（不夠標準）', 'まったく〜ない：完全不…（零程度）'],
            commonMistakes: ['○ ろくに食事も取れていない / × ろくに食事を取れていない → 常搭配「も」加強語氣'],
        },
    },
    // ━━━ どうやら (apparently - additional) ━━━
    {
        id: 'g_n2_413', category: 'grammar', level: 'N2', tags: ['speculation', 'apparent'],
        stem: '___彼{かれ}は風邪{かぜ}をひいたらしい。',
        stemZh: '看來他好像感冒了。',
        options: [
            { text: 'どうやら', reason: '正確！「どうやら」表示「看來好像…」，根據跡象推測。' },
            { text: 'まさか', reason: '「まさか」表示「不會吧…」，語感不同。' },
            { text: 'もしかして', reason: '「もしかして」表示「難道…」，不確定性更高。' },
            { text: 'きっと', reason: '「きっと」表示「一定…」，確信度過高。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「どうやら」表示根據種種跡象的推測',
            analysis: '「どうやら」用於根據觀察到的跡象做出推測，確信度在「きっと」和「もしかして」之間。常搭配「らしい」「ようだ」。',
            comparisons: ['どうやら：看來好像…（中等確信推測）', 'きっと：一定…（高確信）', 'もしかして：難道…（低確信）'],
            commonMistakes: ['○ どうやら風邪をひいたらしい / × どうやら風邪をひいた → 後面常搭配推測表達'],
        },
    },
    // ━━━ かえって (on the contrary - additional) ━━━
    {
        id: 'g_n2_414', category: 'grammar', level: 'N2', tags: ['contrary', 'unexpected'],
        stem: '薬{くすり}を飲{の}んだのに、___悪{わる}くなった。',
        stemZh: '明明吃了藥，反而變糟了。',
        options: [
            { text: 'かえって', reason: '正確！「かえって」表示「反而」，與預期相反。' },
            { text: '逆に', reason: '「逆に」也表示「反而」，但更強調方向相反。' },
            { text: 'むしろ', reason: '「むしろ」表示「倒不如」，語感不同。' },
            { text: 'やっぱり', reason: '「やっぱり」表示「果然」，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かえって」表示做了某事反而得到相反的結果',
            analysis: '「かえって」用於描述為了改善而做的行動反而導致了更壞的結果，強調結果與意圖相反。',
            comparisons: ['かえって：反而（行動導致反效果）', '逆に：反而（方向相反）'],
            commonMistakes: ['○ かえって悪くなった / × かえってに悪くなった → 「かえって」直接修飾'],
        },
    },
    // ━━━ あげく (in the end - additional complex) ━━━
    {
        id: 'g_n2_415', category: 'grammar', level: 'N2', tags: ['outcome', 'negative_result'],
        stem: '長時間{ちょうじかん}議論{ぎろん}した___、結論{けつろん}は出{で}なかった。',
        stemZh: '經過長時間的討論，最終還是沒有得出結論。',
        options: [
            { text: 'あげく', reason: '正確！「あげく」表示「最終結果是…」，通常是不好的結果。' },
            { text: '末に', reason: '「末に」也表示「經過…之後」，但可用於正面結果。' },
            { text: '結果', reason: '「結果」表示「結果」，太一般。' },
            { text: 'ことから', reason: '「ことから」表示「由於…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「あげく」強調經過努力後的不好結果',
            analysis: '「あげく」用於表示經過一段努力或過程後，最終得到了（通常是不好的）結果。帶有徒勞感。',
            comparisons: ['あげく：最終…（負面結果為主）', '末に：經過…之後（正面負面皆可）'],
            commonMistakes: ['○ 議論したあげく / ○ 議論のあげく → た形或「の」都可以'],
        },
    },
    // ━━━ 末に (after much - additional complex) ━━━
    {
        id: 'g_n2_416', category: 'grammar', level: 'N2', tags: ['outcome', 'effort'],
        stem: '長{なが}い苦労{くろう}の___、ようやく夢{ゆめ}を実現{じつげん}した。',
        stemZh: '經過漫長的辛苦之後，終於實現了夢想。',
        options: [
            { text: '末に', reason: '正確！「末に」表示「經過…之後」，此處用於正面結果。' },
            { text: 'あげく', reason: '「あげく」通常用於負面結果，不太適合。' },
            { text: '上で', reason: '「上で」表示「在…方面」或「做了…之後」，語感不同。' },
            { text: 'うちに', reason: '「うちに」表示「在…之間」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「末に」可以用於正面或負面的最終結果',
            analysis: '「末に」用於表示經過一段漫長的過程或努力後得到的結果，比「あげく」更中性，正負面結果都可以。',
            comparisons: ['末に：經過…之後（中性）', 'あげく：最終…（負面為主）'],
            commonMistakes: ['○ 苦労の末に / ○ 苦労した末に → 名詞用「の」，動詞用た形'],
        },
    },
    // ━━━ ては / では (if ~ then - additional) ━━━
    {
        id: 'g_n2_417', category: 'grammar', level: 'N2', tags: ['condition', 'negative_result'],
        stem: 'そんなに食{た}べ___、太{ふと}ってしまうよ。',
        stemZh: '吃那麼多的話會胖的喔。',
        options: [
            { text: 'ては', reason: '正確！「ては」表示「如果…的話（會有壞結果）」。' },
            { text: 'たら', reason: '「たら」也表示「如果…」，但不帶「會有壞結果」的語氣。' },
            { text: 'ても', reason: '「ても」表示「即使…也」，語意不同。' },
            { text: 'てこそ', reason: '「てこそ」表示「只有…才」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ては」暗示某種行為會導致不好的結果',
            analysis: '「ては」（或「では」）用於表示如果做了某事會導致不好的結果，帶有警告或擔心的語氣。',
            comparisons: ['ては：如果…的話（壞結果）', 'たら：如果…（中性假設）'],
            commonMistakes: ['○ 食べては太る / × 食べるては太る → 用て形接「は」'],
        },
    },
    // ━━━ ていては (if one keeps - additional) ━━━
    {
        id: 'g_n2_418', category: 'grammar', level: 'N2', tags: ['warning', 'continuous_negative'],
        stem: 'そんなにゲームばかりし___、成績{せいせき}が下{さ}がるよ。',
        stemZh: '如果一直玩遊戲的話，成績會下降喔。',
        options: [
            { text: 'ていては', reason: '正確！「ていては」表示「如果一直…的話（壞結果）」。' },
            { text: 'ていたら', reason: '「ていたら」也可以，但不帶警告的語氣。' },
            { text: 'ていても', reason: '「ていても」表示「即使一直…也」，語意不同。' },
            { text: 'てばかりいたら', reason: '「てばかりいたら」也可以，但較冗長。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ていては」對持續的行為發出警告',
            analysis: '「ていては」用於警告某人如果持續某種行為會導致不好的結果，帶有「這樣下去不行」的語氣。',
            comparisons: ['ていては：如果一直…（持續行為的警告）', 'ては：如果…（一次性行為的警告）'],
            commonMistakes: ['○ していては / × するていては → 先用て形再加「は」'],
        },
    },
    // ━━━ ことにする (decide to) ━━━
    {
        id: 'g_n2_419', category: 'grammar', level: 'N2', tags: ['decision', 'active'],
        stem: '来年{らいねん}から毎朝{まいあさ}ジョギングする___。',
        stemZh: '決定從明年開始每天早上慢跑。',
        options: [
            { text: 'ことにした', reason: '正確！「ことにする」表示「決定…」，主動的決定。' },
            { text: 'ことになった', reason: '「ことになった」表示「變成要…」，被動的決定。' },
            { text: 'ようにした', reason: '「ようにする」表示「設法…/注意…」，語感不同。' },
            { text: 'つもりだ', reason: '「つもりだ」表示「打算…」，但不是已做出的決定。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことにする」表示說話者自己做出的主動決定',
            analysis: '「ことにする」用於表示說話者自己主動做出的決定。與「ことになる」（被動決定/自然發展）對比。',
            comparisons: ['ことにする：決定…（主動決定）', 'ことになる：變成要…（被動/自然結果）'],
            commonMistakes: ['○ ジョギングすることにした / × ジョギングのことにした → 動詞辭書形接「ことにする」'],
        },
    },
    // ━━━ ことになる (it has been decided / it turns out) ━━━
    {
        id: 'g_n2_420', category: 'grammar', level: 'N2', tags: ['decision', 'passive'],
        stem: '来月{らいげつ}からニューヨークに転勤{てんきん}する___。',
        stemZh: '決定下個月開始調到紐約工作了。',
        options: [
            { text: 'ことにした', reason: '「ことにした」表示自己決定的，此處是公司決定的。' },
            { text: 'ことになった', reason: '正確！「ことになった」表示「變成要…」，組織或環境決定的。' },
            { text: 'はずだ', reason: '「はずだ」表示「應該…」，語意不同。' },
            { text: 'わけだ', reason: '「わけだ」表示「難怪…」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ことになった」表示非自己主動的決定',
            analysis: '「ことになった」用於表示被他人、組織或情況所決定的結果，說話者是被動接受的一方。',
            comparisons: ['ことになった：變成要…（被動決定）', 'ことにした：決定…（主動決定）'],
            commonMistakes: ['○ 転勤することになった / × 転勤のことになった → 動詞辭書形接「ことになる」'],
        },
    },
    // ━━━ ことにしている (make it a rule to) ━━━
    {
        id: 'g_n2_421', category: 'grammar', level: 'N2', tags: ['habit', 'rule'],
        stem: '健康{けんこう}のために、毎日{まいにち}三十分{さんじゅっぷん}歩{ある}く___。',
        stemZh: '為了健康，我規定自己每天走三十分鐘。',
        options: [
            { text: 'ことにしている', reason: '正確！「ことにしている」表示「規定自己…/養成習慣…」。' },
            { text: 'ことになっている', reason: '「ことになっている」表示「規定是…」，是外部規定。' },
            { text: 'ようにしている', reason: '「ようにしている」表示「盡量做到…」，語感不同。' },
            { text: 'ことにした', reason: '「ことにした」表示「決定了」，但不強調持續習慣。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことにしている」表示自己設定的持續習慣',
            analysis: '「ことにしている」表示自己主動決定並持續執行的習慣或規則。強調個人的自律和堅持。',
            comparisons: ['ことにしている：規定自己…（個人習慣）', 'ことになっている：規定是…（外部規則）', 'ようにしている：盡量…（努力目標）'],
            commonMistakes: ['○ 歩くことにしている / × 歩くのことにしている → 辭書形直接接「ことにしている」'],
        },
    },
    // ━━━ ことになっている (it is a rule / it is scheduled) ━━━
    {
        id: 'g_n2_422', category: 'grammar', level: 'N2', tags: ['rule', 'schedule'],
        stem: 'この会社{かいしゃ}では、社員{しゃいん}は制服{せいふく}を着{き}る___。',
        stemZh: '在這家公司，規定員工要穿制服。',
        options: [
            { text: 'ことにしている', reason: '「ことにしている」表示個人習慣，不是公司規定。' },
            { text: 'ことになっている', reason: '正確！「ことになっている」表示「規定是…」，外部規則。' },
            { text: 'べきだ', reason: '「べきだ」表示「應該…」，語感不同。' },
            { text: 'ものだ', reason: '「ものだ」表示「本來就是…」，語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ことになっている」表示既定的規則或安排',
            analysis: '「ことになっている」用於表示已經決定的規則、制度或安排，不是個人決定的，而是組織或社會的規定。',
            comparisons: ['ことになっている：規定是…（外部規則）', 'ことにしている：規定自己…（個人習慣）'],
            commonMistakes: ['○ 着ることになっている / × 着ていることになっている → 用辭書形表示規定內容'],
        },
    },
    // ━━━ ようにする (try to / make sure to) ━━━
    {
        id: 'g_n2_423', category: 'grammar', level: 'N2', tags: ['effort', 'habit_forming'],
        stem: '遅刻{ちこく}しない___気{き}をつけてください。',
        stemZh: '請注意不要遲到。',
        options: [
            { text: 'ようにする', reason: '「ようにする」也可以但此處需要搭配「気をつけてください」。' },
            { text: 'ように', reason: '正確！「ように気をつける」表示「注意…/留意做到…」。' },
            { text: 'ために', reason: '「ために」表示「為了…」，語意不同。' },
            { text: 'ことに', reason: '「ことに」表示「令人…的是」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ように」與「気をつける」搭配表示注意做到某事',
            analysis: '「ように」在此用於表示努力的目標或方向，與「気をつける」搭配表示「注意做到…」。',
            comparisons: ['ように気をつける：注意做到…', 'ようにする：盡量做到…', 'ようにしている：持續盡量做到…'],
            commonMistakes: ['○ 遅刻しないように / × 遅刻をしないように → 「遅刻しない」直接接「ように」'],
        },
    },
    // ━━━ ようになる (come to be able to / begin to) ━━━
    {
        id: 'g_n2_424', category: 'grammar', level: 'N2', tags: ['change', 'ability'],
        stem: '日本{にほん}に来{き}てから、生魚{なまざかな}が食{た}べられる___。',
        stemZh: '來到日本之後，變得能吃生魚了。',
        options: [
            { text: 'ようになった', reason: '正確！「ようになった」表示「變得能…了」，能力或習慣的變化。' },
            { text: 'ことになった', reason: '「ことになった」表示「決定要…」，語意不同。' },
            { text: 'ことにした', reason: '「ことにした」表示「決定…」，語意不同。' },
            { text: 'はずだった', reason: '「はずだった」表示「原本應該…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようになる」表示能力或習慣的漸進變化',
            analysis: '「ようになる」用於表示從「不能做」變成「能做」，或從「不做」變成「做」的漸進變化過程。',
            comparisons: ['ようになる：變得…了（漸進變化）', 'ことになる：決定要…（外部決定）'],
            commonMistakes: ['○ 食べられるようになった / × 食べるようになった → 用可能形表示能力的獲得'],
        },
    },
    // ━━━ わけにはいかない (cannot - complex) ━━━
    {
        id: 'g_n2_425', category: 'grammar', level: 'N2', tags: ['moral_obligation', 'complex'],
        stem: '部下{ぶか}が頑張{がんば}っているのに、上司{じょうし}の私{わたし}が先{さき}に帰{かえ}る___。',
        stemZh: '下屬還在努力，身為上司的我不能先回去。',
        options: [
            { text: 'わけにはいかない', reason: '正確！「わけにはいかない」表示因社會義務或道德不能做某事。' },
            { text: 'はずがない', reason: '「はずがない」表示「不可能…」，語意不同。' },
            { text: 'ことはない', reason: '「ことはない」表示「不必…」，語意不同。' },
            { text: 'ものではない', reason: '「ものではない」表示「不應該…」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わけにはいかない」表示因立場或道德觀而不能做某事',
            analysis: '「わけにはいかない」用於表示因為社會立場、道德觀念或人際關係等因素而不能做某事，即使客觀上是可以做的。',
            comparisons: ['わけにはいかない：不能…（道德/立場）', 'できない：不能…（能力/客觀）'],
            commonMistakes: ['○ 帰るわけにはいかない / × 帰れるわけにはいかない → 用辭書形不用可能形'],
        },
    },
    // ━━━ に関して (regarding / concerning) ━━━
    {
        id: 'g_n2_426', category: 'grammar', level: 'N2', tags: ['about', 'formal'],
        stem: 'この件{けん}___、何{なに}かご質問{しつもん}はありますか。',
        stemZh: '關於這件事，有什麼問題嗎？',
        options: [
            { text: 'に関して', reason: '正確！「に関して」表示「關於…」，正式場合使用。' },
            { text: 'について', reason: '「について」也表示「關於…」，意思相同但較一般。' },
            { text: 'にかけて', reason: '「にかけて」表示「從…到…」，語意不同。' },
            { text: 'に際して', reason: '「に際して」表示「在…之際」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に関して」是「について」的較正式版本',
            analysis: '「に関して」與「について」意思相同，但更適合正式場合。修飾名詞時用「に関する」。',
            comparisons: ['に関して：關於…（正式）', 'について：關於…（一般）'],
            commonMistakes: ['○ この件に関して / × この件を関して → 用「に」不用「を」'],
        },
    },
    // ━━━ にかけて (from ~ to ~ / over a period) ━━━
    {
        id: 'g_n2_427', category: 'grammar', level: 'N2', tags: ['period', 'range'],
        stem: '今夜{こんや}から明日{あした}の朝{あさ}___、大雪{おおゆき}になるでしょう。',
        stemZh: '從今晚到明天早上，預計會下大雪。',
        options: [
            { text: 'にかけて', reason: '正確！「にかけて」表示「從…到…的期間」。' },
            { text: 'にわたって', reason: '「にわたって」表示「歷時…」，但用法不同。' },
            { text: 'を通じて', reason: '「を通じて」表示「在整個…期間」，語感不同。' },
            { text: 'に至るまで', reason: '「に至るまで」表示「直到…」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にかけて」表示從某個時間到某個時間的期間',
            analysis: '「にかけて」與「から」搭配，表示從某個起點到某個終點的時間或空間範圍。',
            comparisons: ['にかけて：從…到…（期間）', 'にわたって：歷時…（強調持續）'],
            commonMistakes: ['○ 今夜から明日の朝にかけて / × 今夜にかけて明日の朝 → 「にかけて」接在終點後'],
        },
    },
    // ━━━ こそ (emphasis - it is precisely) ━━━
    {
        id: 'g_n2_428', category: 'grammar', level: 'N2', tags: ['emphasis', 'assertion'],
        stem: '今___チャンスだ。行動{こうどう}を起{お}こそう。',
        stemZh: '現在正是機會。行動起來吧。',
        options: [
            { text: 'こそ', reason: '正確！「こそ」表示「正是…」，強調。' },
            { text: 'さえ', reason: '「さえ」表示「連…也」，語意不同。' },
            { text: 'まで', reason: '「まで」表示「甚至…」，語意不同。' },
            { text: 'でも', reason: '「でも」表示「即使…也」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「こそ」用於強調某事物的特殊性',
            analysis: '「こそ」用於特別強調某個事物，表示「正是這個、就是這個」，排他性地突出重點。',
            comparisons: ['こそ：正是…（強調唯一性）', 'は：…是（一般主題標記）'],
            commonMistakes: ['○ 今こそチャンスだ / × 今がこそチャンスだ → 「こそ」取代「が」或「は」'],
        },
    },
    // ━━━ さえ〜ば (if only / as long as) ━━━
    {
        id: 'g_n2_429', category: 'grammar', level: 'N2', tags: ['condition', 'minimum'],
        stem: '健康{けんこう}で___、何{なに}でもできる。',
        stemZh: '只要健康，什麼都能做。',
        options: [
            { text: 'あれば', reason: '「あれば」表示「如果有」，但不強調「只要…就夠了」。' },
            { text: 'さえあれば', reason: '正確！「さえ〜ば」表示「只要…就…」，強調最低條件。' },
            { text: 'さえあっても', reason: '「さえあっても」表示「即使有…也」，語意不同。' },
            { text: 'であれば', reason: '「であれば」表示「如果是…的話」，不強調「只要」。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「さえ〜ば」強調只要滿足這一個條件就足夠了',
            analysis: '「さえ〜ば」用於強調某一個條件就是足夠的最低條件，只要滿足這個條件其他都不是問題。',
            comparisons: ['さえ〜ば：只要…就…（最低條件）', 'ば：如果…就…（一般條件）'],
            commonMistakes: ['○ 健康でさえあれば / × 健康さえあれば → 形容動詞用「でさえあれば」'],
        },
    },
    // ━━━ すら (even) ━━━
    {
        id: 'g_n2_430', category: 'grammar', level: 'N2', tags: ['emphasis', 'extreme', 'formal'],
        stem: '彼{かれ}は自分{じぶん}の名前{なまえ}___書{か}けない。',
        stemZh: '他連自己的名字都不會寫。',
        options: [
            { text: 'さえ', reason: '「さえ」也表示「連…也」，口語較常用。' },
            { text: 'すら', reason: '正確！「すら」表示「連…也」，書面語，語氣更強。' },
            { text: 'まで', reason: '「まで」表示「甚至…」，語感不同。' },
            { text: 'でも', reason: '「でも」表示「即使…」，語氣不夠強。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「すら」是「さえ」的書面語版本',
            analysis: '「すら」與「さえ」意思相同，都表示「連…也」，但「すら」更書面、語氣更強烈。',
            comparisons: ['すら：連…也（書面強調）', 'さえ：連…也（口語/一般）', 'まで：甚至…（程度強調）'],
            commonMistakes: ['○ 名前すら書けない / × 名前がすら書けない → 「すら」取代助詞「が」或「を」'],
        },
    },
    // ━━━ にしたところで (even if / even from the standpoint of) ━━━
    {
        id: 'g_n2_431', category: 'grammar', level: 'N2', tags: ['concession', 'perspective'],
        stem: '親{おや}___、子{こ}どもの全{すべ}てをコントロールすることはできない。',
        stemZh: '即使是父母，也無法控制孩子的一切。',
        options: [
            { text: 'にしたところで', reason: '正確！「にしたところで」表示「即使是…也…」。' },
            { text: 'にしたら', reason: '「にしたら」表示「站在…角度」，不是讓步。' },
            { text: 'としても', reason: '「としても」表示「即使…」，但不強調立場。' },
            { text: 'にとっても', reason: '「にとっても」表示「對…來說也」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にしたところで」表示即使是某個有利立場也無法改變',
            analysis: '「にしたところで」用於表示即使從某個有利的立場或身份來看，結果也不會改變。帶有「連…都…」的語氣。',
            comparisons: ['にしたところで：即使是…也（立場無法改變結果）', 'にしても：即使…也（一般讓步）'],
            commonMistakes: ['○ 親にしたところで / × 親がしたところで → 用「に」不用「が」'],
        },
    },
    // ━━━ ないまでも (even if not / at least) ━━━
    {
        id: 'g_n2_432', category: 'grammar', level: 'N2', tags: ['concession', 'minimum'],
        stem: '完璧{かんぺき}___、最低限{さいていげん}のことはしておくべきだ。',
        stemZh: '即使做不到完美，至少應該做到最基本的。',
        options: [
            { text: 'でないまでも', reason: '正確！「ないまでも」表示「即使不能…至少…」。' },
            { text: 'ではなくても', reason: '「ではなくても」也可以，但不如「ないまでも」書面。' },
            { text: 'どころか', reason: '「どころか」表示「豈止…」，語意不同。' },
            { text: 'はおろか', reason: '「はおろか」表示「別說…了」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないまでも」表示退而求其次',
            analysis: '「ないまでも」用於承認理想目標可能無法達到，但至少應該做到某個最低程度。',
            comparisons: ['ないまでも：即使不能…至少…（退而求其次）', 'ではなくても：即使不是…也…（一般讓步）'],
            commonMistakes: ['○ 完璧でないまでも / × 完璧じゃないまでも → 書面語用「でない」'],
        },
    },
    // ━━━ に至っては (when it comes to / as for) ━━━
    {
        id: 'g_n2_433', category: 'grammar', level: 'N2', tags: ['extreme_case', 'escalation'],
        stem: '兄弟{きょうだい}はみんな成績{せいせき}が悪{わる}いが、末{すえ}の弟{おとうと}___、ほとんど勉強{べんきょう}しない。',
        stemZh: '兄弟成績都不好，至於最小的弟弟，幾乎不讀書。',
        options: [
            { text: 'に至っては', reason: '正確！「に至っては」表示「至於…（程度更嚴重）」。' },
            { text: 'にしたら', reason: '「にしたら」表示「站在…角度」，語意不同。' },
            { text: 'にとっては', reason: '「にとっては」表示「對…來說」，語意不同。' },
            { text: 'については', reason: '「については」表示「關於…」，太一般。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に至っては」提出一個程度更極端的例子',
            analysis: '「に至っては」用於在一般描述之後，特別提出一個更極端的例子，表示「至於…更是嚴重」。',
            comparisons: ['に至っては：至於…（最極端的例子）', 'に至って：到了…的地步（達到程度）'],
            commonMistakes: ['○ 弟に至っては / × 弟が至っては → 用「に」不用「が」'],
        },
    },
    // ━━━ てたまらない (unbearably - additional) ━━━
    {
        id: 'g_n2_434', category: 'grammar', level: 'N2', tags: ['intensity', 'emotion'],
        stem: '早{はや}く結果{けっか}が知{し}りたく___。',
        stemZh: '好想快點知道結果，等不及了。',
        options: [
            { text: 'てならない', reason: '「てならない」也表示「…得不行」，但語感稍有不同。' },
            { text: 'てたまらない', reason: '正確！「てたまらない」表示「…得受不了」，感情或感覺極度強烈。' },
            { text: 'てしょうがない', reason: '「てしょうがない」也可以，較口語。' },
            { text: 'てはいられない', reason: '「てはいられない」表示「不能再…」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「てたまらない」表示感受強烈到無法忍受',
            analysis: '「てたまらない」用於表達身體或心理的感受強烈到無法忍受的程度。常用於渴望、痛苦、悲傷等。',
            comparisons: ['てたまらない：…得受不了（身體心理感受）', 'てならない：…得不行（自然湧起的感覺）', 'てしょうがない：…得沒辦法（口語）'],
            commonMistakes: ['○ 知りたくてたまらない / × 知りたいてたまらない → 「たい」的て形是「たくて」'],
        },
    },
    // ━━━ てならない (extremely / irresistibly - additional) ━━━
    {
        id: 'g_n2_435', category: 'grammar', level: 'N2', tags: ['intensity', 'involuntary'],
        stem: '故郷{ふるさと}のことが思{おも}い出{だ}され___。',
        stemZh: '不禁想起故鄉的事。',
        options: [
            { text: 'てたまらない', reason: '「てたまらない」表示「…得受不了」，語感不同。' },
            { text: 'てならない', reason: '正確！「てならない」表示「不禁…/自然而然地…」。' },
            { text: 'てはいられない', reason: '「てはいられない」表示「不能再…」，語意不同。' },
            { text: 'ないではいられない', reason: '「ないではいられない」表示「忍不住…」，主動性不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「てならない」表示自然而然湧起的強烈感覺',
            analysis: '「てならない」用於表達不由自主地產生的強烈感覺或情緒，強調是自然發生而非有意識的。',
            comparisons: ['てならない：不禁…（自然湧起）', 'てたまらない：…得受不了（忍受不住）'],
            commonMistakes: ['○ 思い出されてならない / × 思い出してならない → 常用自發態或被動態'],
        },
    },
    // ━━━ ねばならない (must - additional) ━━━
    {
        id: 'g_n2_436', category: 'grammar', level: 'N2', tags: ['obligation', 'formal'],
        stem: '約束{やくそく}は守{まも}ら___。',
        stemZh: '約定必須遵守。',
        options: [
            { text: 'なければならない', reason: '「なければならない」也表示「必須…」，但較口語。' },
            { text: 'ねばならない', reason: '正確！「ねばならない」表示「必須…」，書面語。' },
            { text: 'ないわけにはいかない', reason: '「ないわけにはいかない」表示「不…不行」，語感不同。' },
            { text: 'ざるを得ない', reason: '「ざるを得ない」表示「不得不…」，強調被迫。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ねばならない」是書面語的「必須」',
            analysis: '「ねばならない」相當於「なければならない」，但更正式、更書面化。常見於格言、法律文書。',
            comparisons: ['ねばならない：必須…（書面正式）', 'なければならない：必須…（口語一般）'],
            commonMistakes: ['○ 守らねばならない / × 守りねばならない → 用未然形接「ねば」'],
        },
    },
    // ━━━ たまえ (do ~ - superior to inferior - additional) ━━━
    {
        id: 'g_n2_437', category: 'grammar', level: 'N2', tags: ['command', 'superior'],
        stem: '君{きみ}も一緒{いっしょ}に来{き}___。',
        stemZh: '你也一起來吧。（上對下命令）',
        options: [
            { text: 'なさい', reason: '「なさい」也是命令，但用於老師對學生等。' },
            { text: 'たまえ', reason: '正確！「たまえ」是上位者對下位者的命令，較古風。' },
            { text: 'ください', reason: '「ください」表示「請…」，太禮貌。' },
            { text: 'なよ', reason: '「なよ」是很口語的禁止表達，語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「たまえ」是上位者用的較古風命令形',
            analysis: '「たまえ」用於上司對下屬、老師對學生等上對下的場合，語氣古風且權威。現代已較少使用。',
            comparisons: ['たまえ：…吧（上對下命令，古風）', 'なさい：…吧（上對下命令，現代）'],
            commonMistakes: ['○ 来たまえ / × 来るたまえ → 用連用形接「たまえ」'],
        },
    },
    // ━━━ 何も〜ない (nothing / no need to) ━━━
    {
        id: 'g_n2_438', category: 'grammar', level: 'N2', tags: ['negation', 'unnecessary'],
        stem: '___そこまで心配{しんぱい}する___。大丈夫{だいじょうぶ}だよ。',
        stemZh: '不用擔心到那個程度。沒問題的。',
        options: [
            { text: '何も / ことはない', reason: '正確！「何も〜ことはない」表示「沒必要…」。' },
            { text: '何も / わけがない', reason: '「何も〜わけがない」表示「不可能…」，語意不同。' },
            { text: '何でも / ない', reason: '「何でも〜ない」不自然。' },
            { text: '何も / はずがない', reason: '「何も〜はずがない」不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「何も〜ことはない」表示不需要做某事',
            analysis: '「何も」加上否定表達，表示「什麼都不需要…」。「ことはない」在此表示「不必…」。',
            comparisons: ['何も〜ことはない：不必…（安慰）', '何も〜ない：什麼都沒有（完全否定）'],
            commonMistakes: ['○ 何も心配することはない / × 何を心配することはない → 用「も」不用「を」'],
        },
    },
    // ━━━ こと（は）ない (no need to) ━━━
    {
        id: 'g_n2_439', category: 'grammar', level: 'N2', tags: ['unnecessary', 'reassurance'],
        stem: 'そんなに急{いそ}ぐ___。まだ時間{じかん}はたっぷりある。',
        stemZh: '不必那麼著急。時間還很充裕。',
        options: [
            { text: 'ことはない', reason: '正確！「ことはない」表示「不必…/沒必要…」。' },
            { text: 'わけがない', reason: '「わけがない」表示「不可能…」，語意不同。' },
            { text: 'はずがない', reason: '「はずがない」表示「不應該…」，語意不同。' },
            { text: 'ものではない', reason: '「ものではない」表示「不應該…」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことはない」用於安慰對方不需要做某事',
            analysis: '「ことはない」用於表示某件事是不必要的，常帶有安慰或寬慰的語氣。',
            comparisons: ['ことはない：不必…（安慰）', 'ないことはない：也不是不…（雙重否定）'],
            commonMistakes: ['○ 急ぐことはない / × 急ぐのことはない → 辭書形直接接「ことはない」'],
        },
    },
    // ━━━ 中を / 中では (in the middle of / among) ━━━
    {
        id: 'g_n2_440', category: 'grammar', level: 'N2', tags: ['circumstance', 'adversity'],
        stem: '雨{あめ}の___、多{おお}くのファンが会場{かいじょう}に集{あつ}まった。',
        stemZh: '在雨中，很多粉絲聚集到了會場。',
        options: [
            { text: '中を', reason: '正確！「中を」表示「在…（不利的條件）中」。' },
            { text: '中で', reason: '「中で」表示「在…之中」，不強調逆境。' },
            { text: '間に', reason: '「間に」表示「在…期間內」，語感不同。' },
            { text: 'うちに', reason: '「うちに」表示「趁…的時候」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「中を」表示在不利條件中做某事',
            analysis: '「中を」用於描述在惡劣天氣、困難環境等不利條件下仍然做某事，強調克服困難。',
            comparisons: ['中を：在…中（逆境克服）', '中で：在…之中（一般場所/範圍）'],
            commonMistakes: ['○ 雨の中を / × 雨中を → 名詞用「の中を」'],
        },
    },
    // ━━━ をはじめとして (starting with - complex) ━━━
    {
        id: 'g_n2_441', category: 'grammar', level: 'N2', tags: ['listing', 'representative', 'complex'],
        stem: '社長{しゃちょう}___、会社{かいしゃ}の幹部{かんぶ}全員{ぜんいん}がこの問題{もんだい}に取{と}り組{く}んでいる。',
        stemZh: '以社長為首，公司所有高層都在處理這個問題。',
        options: [
            { text: 'はもちろん', reason: '「はもちろん」表示「不用說…」，語感不同。' },
            { text: 'をはじめとして', reason: '正確！「をはじめとして」表示「以…為首/從…開始」。' },
            { text: 'を中心に', reason: '「を中心に」表示「以…為中心」，語感不同。' },
            { text: 'に限らず', reason: '「に限らず」表示「不限於…」，語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「をはじめとして」列舉最重要的代表者',
            analysis: '「をはじめとして」用於列舉最具代表性或最重要的人/事物，暗示還有其他類似的。',
            comparisons: ['をはじめとして：以…為首（完整形）', 'をはじめ：以…為首（簡略形）'],
            commonMistakes: ['○ 社長をはじめとして / ○ 社長をはじめ → 兩種都可以'],
        },
    },
    // ━━━ に至るまで (up to / even including - complex) ━━━
    {
        id: 'g_n2_442', category: 'grammar', level: 'N2', tags: ['range', 'comprehensive'],
        stem: 'この百科事典{ひゃっかじてん}は、科学{かがく}から芸術{げいじゅつ}___、あらゆる分野{ぶんや}を網羅{もうら}している。',
        stemZh: '這本百科全書從科學到藝術，涵蓋了所有領域。',
        options: [
            { text: 'まで', reason: '「まで」也可以，但不如「に至るまで」強調全面性。' },
            { text: 'に至るまで', reason: '正確！「に至るまで」表示「直到…為止」，強調涵蓋面之廣。' },
            { text: 'にわたって', reason: '「にわたって」表示「歷時…」，用法不同。' },
            { text: 'にかけて', reason: '「にかけて」表示「從…到…期間」，語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「に至るまで」在學術或描述中強調涵蓋範圍的全面性',
            analysis: '「から〜に至るまで」是固定搭配，用於強調從一端到另一端的完整涵蓋，常用於描述全面性。',
            comparisons: ['に至るまで：直到…為止（強調全面）', 'まで：到…（一般範圍）'],
            commonMistakes: ['○ 芸術に至るまで / × 芸術まで至る → 「に至るまで」是固定搭配'],
        },
    },
    // ━━━ はもとより (not to mention - additional) ━━━
    {
        id: 'g_n2_443', category: 'grammar', level: 'N2', tags: ['emphasis', 'formal', 'inclusion'],
        stem: '日本語{にほんご}___、中国語{ちゅうごくご}や韓国語{かんこくご}も話{はな}せる。',
        stemZh: '不用說日語，中文和韓語也會說。',
        options: [
            { text: 'はもとより', reason: '正確！「はもとより」表示「不用說…/…更不用說」，書面語。' },
            { text: 'はもちろん', reason: '「はもちろん」也可以，但較口語。' },
            { text: 'のみならず', reason: '「のみならず」表示「不僅…」，語感不同。' },
            { text: 'はおろか', reason: '「はおろか」表示「別說…了」，語氣過強。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はもとより」是「はもちろん」的書面語',
            analysis: '「はもとより」與「はもちろん」意思相同，都表示前項是理所當然的，後項更是值得注意。「はもとより」更書面正式。',
            comparisons: ['はもとより：不用說…（書面正式）', 'はもちろん：不用說…（口語一般）'],
            commonMistakes: ['○ 日本語はもとより / × 日本語がもとより → 用「は」不用「が」'],
        },
    },
    // ━━━ に関わらず (regardless - mixed context) ━━━
    {
        id: 'g_n2_444', category: 'grammar', level: 'N2', tags: ['regardless', 'mixed'],
        stem: '結果{けっか}の良{よ}し悪{あ}し___、全力{ぜんりょく}を尽{つ}くすことが大切{たいせつ}だ。',
        stemZh: '不論結果好壞，全力以赴才是最重要的。',
        options: [
            { text: 'にかかわらず', reason: '正確！「にかかわらず」表示「不論…」。' },
            { text: 'を問わず', reason: '「を問わず」也可以，意思相近。' },
            { text: 'に限らず', reason: '「に限らず」表示「不限於…」，語感不同。' },
            { text: 'はともかく', reason: '「はともかく」表示「暫且不論…」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にかかわらず」與對立概念搭配表示不論哪種情況',
            analysis: '「にかかわらず」常與「良し悪し」「成功か失敗か」等對立概念搭配，表示不受任何情況影響。',
            comparisons: ['にかかわらず：不論…（不受影響）', 'を問わず：不問…（同義）'],
            commonMistakes: ['○ 良し悪しにかかわらず / ○ 良し悪しを問わず → 兩種都可以'],
        },
    },
    // ━━━ に応えて (in response to - complex) ━━━
    {
        id: 'g_n2_445', category: 'grammar', level: 'N2', tags: ['response', 'expectations'],
        stem: 'ファンの期待{きたい}___、チームは見事{みごと}に優勝{ゆうしょう}した。',
        stemZh: '回應粉絲的期待，團隊精彩地奪得了冠軍。',
        options: [
            { text: 'に応えて', reason: '正確！「に応えて」表示「回應…的期待」。' },
            { text: 'に応じて', reason: '「に応じて」表示「根據…而變化」，語意不同。' },
            { text: 'にかけて', reason: '「にかけて」表示「從…到…」，語意不同。' },
            { text: 'に際して', reason: '「に際して」表示「在…之際」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に応えて」特別適合「回應期待」的語境',
            analysis: '「に応えて」用於表示為了回應他人的期待、要求或呼聲而做出相應的行動或表現。',
            comparisons: ['に応えて：回應…的期待（滿足期待）', 'に応じて：根據…（靈活調整）'],
            commonMistakes: ['○ 期待に応えて / ○ 期待に応え → 兩種都可以'],
        },
    },
    // ━━━ にあたって (on the occasion of - complex context) ━━━
    {
        id: 'g_n2_446', category: 'grammar', level: 'N2', tags: ['occasion', 'formal', 'complex'],
        stem: '創立{そうりつ}五十周年{ごじっしゅうねん}を迎{むか}える___、記念式典{きねんしきてん}を開催{かいさい}する。',
        stemZh: '在迎來創立五十週年之際，將舉辦紀念典禮。',
        options: [
            { text: 'にあたり', reason: '正確！「にあたり」是「にあたって」的書面形式。' },
            { text: 'に際して', reason: '「に際して」也可以，意思相近。' },
            { text: 'を契機に', reason: '「を契機に」表示「以…為契機」，語感不同。' },
            { text: 'に先立って', reason: '「に先立って」表示「在…之前」，時間點不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にあたり」是「にあたって」的書面語形式',
            analysis: '「にあたり」和「にあたって」意思相同，但「にあたり」更適合書面語和正式文書。',
            comparisons: ['にあたり：在…之際（書面）', 'にあたって：在…之際（一般正式）'],
            commonMistakes: ['○ 迎えるにあたり / ○ 迎えるにあたって → 兩種都可以'],
        },
    },
    // ━━━ を通じて (throughout - time period) ━━━
    {
        id: 'g_n2_447', category: 'grammar', level: 'N2', tags: ['throughout', 'duration'],
        stem: '一年{いちねん}___、この地域{ちいき}は温暖{おんだん}な気候{きこう}だ。',
        stemZh: '一整年之中，這個地區都是溫暖的氣候。',
        options: [
            { text: 'を通じて', reason: '正確！「を通じて」表示「在整個…期間中」。' },
            { text: 'にわたって', reason: '「にわたって」表示「歷時…」，語感不同。' },
            { text: 'にかけて', reason: '「にかけて」表示「從…到…」，用法不同。' },
            { text: 'の間', reason: '「の間」表示「在…期間」，但不強調「整個」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を通じて」的時間期間用法',
            analysis: '「を通じて」在表示時間時，意為「在整個…期間中」，強調從頭到尾都是如此。',
            comparisons: ['を通じて（時間）：在整個…期間中', 'を通じて（手段）：透過…'],
            commonMistakes: ['○ 一年を通じて / ○ 一年を通して → 兩種都可以'],
        },
    },
    // ━━━ に沿って (along / according to - complex) ━━━
    {
        id: 'g_n2_448', category: 'grammar', level: 'N2', tags: ['accordance', 'physical'],
        stem: '川{かわ}___、桜{さくら}の木{き}が植{う}えられている。',
        stemZh: '沿著河流種著櫻花樹。',
        options: [
            { text: 'に沿って', reason: '正確！「に沿って」表示「沿著…」，物理上的方向。' },
            { text: 'に向かって', reason: '「に向かって」表示「朝著…」，語意不同。' },
            { text: 'を通って', reason: '「を通って」表示「經過…」，語意不同。' },
            { text: 'にわたって', reason: '「にわたって」表示「歷時…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に沿って」的物理方向用法',
            analysis: '「に沿って」在物理意義上表示「沿著…」，描述沿著某個線形事物（道路、河流、海岸等）的方向。',
            comparisons: ['に沿って（物理）：沿著…', 'に沿って（抽象）：按照…/順著…'],
            commonMistakes: ['○ 川に沿って / × 川を沿って → 用「に」不用「を」'],
        },
    },
    // ━━━ をもとにして (based on - complex) ━━━
    {
        id: 'g_n2_449', category: 'grammar', level: 'N2', tags: ['basis', 'creation', 'complex'],
        stem: 'アンケートの結果{けっか}___、サービスの改善{かいぜん}を行{おこな}った。',
        stemZh: '以問卷調查的結果為基礎，進行了服務的改善。',
        options: [
            { text: 'をもとにして', reason: '正確！「をもとにして」表示「以…為基礎」。' },
            { text: 'に基づいて', reason: '「に基づいて」也可以，但更強調嚴格依據。' },
            { text: 'を契機にして', reason: '「を契機にして」表示「以…為契機」，語意不同。' },
            { text: 'を中心にして', reason: '「を中心にして」表示「以…為中心」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をもとにして」是「をもとに」的完整形式',
            analysis: '「をもとにして」和「をもとに」意思相同，都表示以某事物作為素材或基礎來進行某事。',
            comparisons: ['をもとにして：以…為基礎（完整形）', 'をもとに：以…為基礎（簡略形）'],
            commonMistakes: ['○ 結果をもとにして / ○ 結果をもとに → 兩種都可以'],
        },
    },
    // ━━━ を除いて (except - complex) ━━━
    {
        id: 'g_n2_450', category: 'grammar', level: 'N2', tags: ['exception', 'complex'],
        stem: '彼{かれ}___、全員{ぜんいん}が賛成{さんせい}した。',
        stemZh: '除了他以外，全員都贊成了。',
        options: [
            { text: 'を除いて', reason: '正確！「を除いて」表示「除了…以外」。' },
            { text: '以外は', reason: '「以外は」也可以，意思相同。' },
            { text: 'をはじめ', reason: '「をはじめ」表示「以…為首」，語意相反。' },
            { text: 'に限らず', reason: '「に限らず」表示「不限於…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を除いて」在列舉例外時使用',
            analysis: '「を除いて」用於明確指出某個例外，表示在排除該例外後，其他都是如此。',
            comparisons: ['を除いて：除了…以外（正式）', '以外は：除了…以外（一般）', '抜きにして：撇開…不談（擱置）'],
            commonMistakes: ['○ 彼を除いて / × 彼が除いて → 用「を」不用「が」'],
        },
    },
    // ━━━ にもかかわらず (despite - advanced) ━━━
    {
        id: 'g_n2_451', category: 'grammar', level: 'N2', tags: ['concession', 'advanced'],
        stem: '何度{なんど}も注意{ちゅうい}した___、彼{かれ}は同{おな}じミスを繰{く}り返{かえ}す。',
        stemZh: '儘管多次提醒，他還是重複犯同樣的錯。',
        options: [
            { text: 'にもかかわらず', reason: '正確！「にもかかわらず」表示「儘管…卻仍然…」，強調逆接。' },
            { text: 'からには', reason: '「からには」表示「既然…就…」，語意不合。' },
            { text: 'に限って', reason: '「に限って」表示「偏偏…」，語意不同。' },
            { text: 'ものだから', reason: '「ものだから」表示「正因為…」，用於辯解，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にもかかわらず」表達與預期相反的結果',
            analysis: '「にもかかわらず」接在動詞た形、名詞＋である等之後，表示前項情況成立，但結果卻與預期相反。',
            comparisons: ['にもかかわらず：儘管…（書面語、正式）', 'のに：雖然…卻…（口語、帶有不滿）'],
            commonMistakes: ['○ 注意したにもかかわらず / × 注意するにもかかわらず → 用過去式較自然'],
        },
    },
    // ━━━ ものの (although - advanced) ━━━
    {
        id: 'g_n2_452', category: 'grammar', level: 'N2', tags: ['concession', 'advanced'],
        stem: '新{あたら}しいパソコンを買{か}った___、使{つか}い方{かた}がわからない。',
        stemZh: '雖然買了新電腦，卻不知道怎麼用。',
        options: [
            { text: 'ものの', reason: '正確！「ものの」表示「雖然…但是…」，用於逆接。' },
            { text: 'ものだから', reason: '「ものだから」表示「正因為…」，用於辯解，語意不同。' },
            { text: 'ものなら', reason: '「ものなら」表示「要是能…的話」，語意不同。' },
            { text: 'ものか', reason: '「ものか」表示「絕不…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものの」表示逆接轉折',
            analysis: '「ものの」接在動詞た形或い形容詞之後，表示雖然前項成立，但後項卻是與預期不同的結果。比「が」「けど」更書面。',
            comparisons: ['ものの：雖然…但…（書面語）', 'けれども：雖然…但是…（一般用語）'],
            commonMistakes: ['○ 買ったものの / × 買うものの → 多用過去式'],
        },
    },
    // ━━━ ものなら (if possible - basic) ━━━
    {
        id: 'g_n2_453', category: 'grammar', level: 'N2', tags: ['conditional', 'basic'],
        stem: 'やれる___やってみろ。',
        stemZh: '你要是能做到的話就試試看啊。',
        options: [
            { text: 'ものなら', reason: '正確！「ものなら」表示「要是能…的話」，暗示很困難或不太可能。' },
            { text: 'ものの', reason: '「ものの」表示「雖然…但是…」，語意不合。' },
            { text: 'ものだから', reason: '「ものだから」表示「因為…」，語意不合。' },
            { text: 'ものか', reason: '「ものか」表示「絕不…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものなら」表示假設難以實現之事',
            analysis: '「ものなら」接在動詞可能形之後，表示假設某件難以實現的事情能做到的話。常帶有挑釁或感嘆的語氣。',
            comparisons: ['ものなら：要是能…的話（實現困難）', 'なら：如果…的話（一般假設）'],
            commonMistakes: ['○ やれるものなら / × やるものなら → 要接可能形'],
        },
    },
    // ━━━ ものだから (because - advanced) ━━━
    {
        id: 'g_n2_454', category: 'grammar', level: 'N2', tags: ['reason', 'advanced'],
        stem: '急{きゅう}に雨{あめ}が降{ふ}り出{だ}した___、傘{かさ}を持{も}っていなくて濡{ぬ}れてしまった。',
        stemZh: '因為突然下起雨來，沒有帶傘所以被淋濕了。',
        options: [
            { text: 'ものだから', reason: '正確！「ものだから」表示「正因為…」，常帶辯解語氣。' },
            { text: 'ものの', reason: '「ものの」表示「雖然…但是…」，語意不合。' },
            { text: 'ものか', reason: '「ものか」表示「絕不…」，語意不合。' },
            { text: 'ものなら', reason: '「ものなら」表示「要是能…的話」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものだから」用於解釋或辯解的原因',
            analysis: '「ものだから」接在動詞普通形之後，表示因為某種原因而導致某個結果，常帶有為自己辯解的語氣。',
            comparisons: ['ものだから：因為…（辯解語氣）', 'から：因為…（一般原因）', 'ので：因為…（客觀原因）'],
            commonMistakes: ['○ 降り出したものだから / × 降り出すものだから → 常用過去式'],
        },
    },
    // ━━━ ものか (never! - basic) ━━━
    {
        id: 'g_n2_455', category: 'grammar', level: 'N2', tags: ['negation', 'basic'],
        stem: 'あんな人{ひと}の言{い}うことなんか、信{しん}じる___。',
        stemZh: '那種人說的話，我絕對不會相信！',
        options: [
            { text: 'ものか', reason: '正確！「ものか」表示「絕不…」，強烈否定。' },
            { text: 'ものだ', reason: '「ものだ」表示「本來就是…」或「應該…」，語意不合。' },
            { text: 'ものの', reason: '「ものの」表示「雖然…但是…」，語意不合。' },
            { text: 'ものなら', reason: '「ものなら」表示「要是能…的話」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものか」表達強烈否定決心',
            analysis: '「ものか」接在動詞辞書形之後，表示說話者強烈的否定意志，帶有「絕不會…」「哪會…」的語氣。口語中常說成「もんか」。',
            comparisons: ['ものか：絕不…（強烈否定）', 'はずがない：不可能…（推測否定）'],
            commonMistakes: ['○ 信じるものか / × 信じたものか → 用辞書形'],
        },
    },
    // ━━━ からには (since/now that - advanced) ━━━
    {
        id: 'g_n2_456', category: 'grammar', level: 'N2', tags: ['reason', 'determination', 'advanced'],
        stem: '試合{しあい}に出{で}る___、全力{ぜんりょく}を尽{つ}くすべきだ。',
        stemZh: '既然要參加比賽，就應該全力以赴。',
        options: [
            { text: 'からには', reason: '正確！「からには」表示「既然…就…」，後面常接決心或義務。' },
            { text: 'からこそ', reason: '「からこそ」表示「正因為…」，語意不同。' },
            { text: 'からといって', reason: '「からといって」表示「雖說…但未必…」，語意不同。' },
            { text: 'からして', reason: '「からして」表示「從…就…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「からには」表達既然如此就要貫徹到底',
            analysis: '「からには」接在動詞普通形之後，表示既然做出了某個決定或處於某個狀態，就必須負起相應的責任或做出相應的行動。',
            comparisons: ['からには：既然…就…（決心/義務）', '以上は：既然…就…（類似）', '上は：既然…就…（類似）'],
            commonMistakes: ['○ 出るからには / ○ 出たからには → 辞書形和過去式都可以'],
        },
    },
    // ━━━ からこそ (precisely because - advanced) ━━━
    {
        id: 'g_n2_457', category: 'grammar', level: 'N2', tags: ['reason', 'emphasis', 'advanced'],
        stem: 'あなたのこと___心配{しんぱい}しているんです。',
        stemZh: '正因為在意你，所以才擔心你。',
        options: [
            { text: 'を思うからこそ', reason: '正確！「からこそ」表示「正因為…才…」，強調原因。' },
            { text: 'を思うからには', reason: '「からには」表示「既然…就…」，語意不完全合適。' },
            { text: 'を思うからして', reason: '「からして」表示「從…就…」，語意不同。' },
            { text: 'を思うからといって', reason: '「からといって」表示「雖說…但…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「からこそ」強調某個原因的重要性',
            analysis: '「からこそ」用於強調正是因為前項的原因，所以才有後項的結果。「こそ」加強了因果關係的語氣。',
            comparisons: ['からこそ：正因為…才…（強調原因）', 'から：因為…（一般原因）'],
            commonMistakes: ['○ 思うからこそ / × 思ったからこそ → 表示現在持續的原因時用辞書形'],
        },
    },
    // ━━━ からといって (just because - challenge) ━━━
    {
        id: 'g_n2_458', category: 'grammar', level: 'N2', tags: ['reason', 'contrast', 'challenge'],
        stem: 'お金{かね}がある___、幸{しあわ}せだとは限{かぎ}らない。',
        stemZh: '不能因為有錢就說一定幸福。',
        options: [
            { text: 'からといって', reason: '正確！「からといって」表示「雖然…但未必…」。' },
            { text: 'からには', reason: '「からには」表示「既然…就…」，語意不同。' },
            { text: 'からこそ', reason: '「からこそ」表示「正因為…」，語意不同。' },
            { text: 'からして', reason: '「からして」表示「從…就…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「からといって」表示不能僅憑某個理由就下結論',
            analysis: '「からといって」接在動詞普通形之後，表示即使某個理由成立，也不能因此就認為後面的結論一定正確。後面常接否定表現。',
            comparisons: ['からといって：不能因為…就…（否定推論）', 'からには：既然…就…（肯定決心）'],
            commonMistakes: ['○ あるからといって / × あったからといって → 表示一般論時用辞書形'],
        },
    },
    // ━━━ にしろ/にせよ (even if - challenge) ━━━
    {
        id: 'g_n2_459', category: 'grammar', level: 'N2', tags: ['concession', 'challenge'],
        stem: '結果{けっか}がどうなる___、最後{さいご}までやり遂{と}げたい。',
        stemZh: '無論結果如何，我都想堅持到最後。',
        options: [
            { text: 'にしろ', reason: '正確！「にしろ」表示「即便…也…」「無論…都…」。' },
            { text: 'にして', reason: '「にして」表示「在…時候」或「身為…」，語意不同。' },
            { text: 'にしたら', reason: '「にしたら」表示「從…的角度來看」，語意不同。' },
            { text: 'にしても', reason: '「にしても」語意相近，但「にしろ」更常用於後接意志表現。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にしろ」表達讓步條件',
            analysis: '「にしろ」接在疑問詞＋動詞普通形之後，表示無論哪種情況都不影響後面的判斷或決心。「にせよ」是較正式的說法。',
            comparisons: ['にしろ：即便…（口語）', 'にせよ：即便…（書面語）', 'にしたって：就算…（更口語）'],
            commonMistakes: ['○ どうなるにしろ / × どうなったにしろ → 接辞書形更自然'],
        },
    },
    // ━━━ にせよ～にせよ (whether...or - challenge) ━━━
    {
        id: 'g_n2_460', category: 'grammar', level: 'N2', tags: ['concession', 'listing', 'challenge'],
        stem: '賛成{さんせい}___反対{はんたい}___、理由{りゆう}を述{の}べてください。',
        stemZh: '無論是贊成還是反對，請說明理由。',
        options: [
            { text: 'にせよ…にせよ', reason: '正確！「にせよ…にせよ」表示「無論是…還是…」。' },
            { text: 'にしろ…にしろ', reason: '「にしろ…にしろ」也正確，但「にせよ」更正式。此處選擇「にせよ」。' },
            { text: 'にしても…にしても', reason: '「にしても…にしても」語意相近但語氣稍弱。' },
            { text: 'にしたら…にしたら', reason: '「にしたら」表示立場觀點，不能這樣並列使用。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にせよ…にせよ」用於列舉兩種對立情況',
            analysis: '「にせよ…にせよ」接在名詞或動詞普通形之後，表示無論是哪一種情況，結論都不變。常用於正式場合。',
            comparisons: ['にせよ…にせよ：無論…還是…（正式）', 'にしろ…にしろ：不管…還是…（一般）'],
            commonMistakes: ['○ 賛成にせよ反対にせよ / × 賛成するにせよ反対するにせよ → 名詞直接接にせよ'],
        },
    },
    // ━━━ ことだから (because of character - basic) ━━━
    {
        id: 'g_n2_461', category: 'grammar', level: 'N2', tags: ['reason', 'character', 'basic'],
        stem: '真面目{まじめ}な田中{たなか}さんの___、きっと約束{やくそく}を守{まも}るだろう。',
        stemZh: '因為田中是個認真的人，所以一定會遵守約定吧。',
        options: [
            { text: 'ことだから', reason: '正確！「ことだから」表示「因為是…（的性格/特徵）」。' },
            { text: 'ことなく', reason: '「ことなく」表示「不…地」，語意不合。' },
            { text: 'ことから', reason: '「ことから」表示「從…這件事」，語意不同。' },
            { text: 'ことに', reason: '「ことに」表示「令人…的是」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことだから」基於某人的性格或特徵來推測',
            analysis: '「（人）のことだから」用於根據對方的個性、習慣等特徵來推測其行為。前面通常接表示人的詞語。',
            comparisons: ['ことだから：因為是…（基於性格推測）', 'だから：因為…（一般因果）'],
            commonMistakes: ['○ 田中さんのことだから / × 田中さんことだから → 需要加「の」'],
        },
    },
    // ━━━ ことなく (without - advanced) ━━━
    {
        id: 'g_n2_462', category: 'grammar', level: 'N2', tags: ['negation', 'manner', 'advanced'],
        stem: '彼女{かのじょ}は一日{いちにち}も休{やす}む___、働{はたら}き続{つづ}けた。',
        stemZh: '她一天也沒有休息地持續工作。',
        options: [
            { text: 'ことなく', reason: '正確！「ことなく」表示「不…地」「沒有…地」。' },
            { text: 'ことから', reason: '「ことから」表示「從…這件事」，語意不合。' },
            { text: 'ことだから', reason: '「ことだから」表示「因為是…（性格）」，語意不合。' },
            { text: 'ことに', reason: '「ことに」表示「令人…的是」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことなく」表示在沒有做某事的情況下',
            analysis: '「ことなく」接在動詞辞書形之後，表示在不做某事的狀態下進行另一件事。相當於「～ないで」的書面表達。',
            comparisons: ['ことなく：不…地（書面語）', 'ないで：不…地（口語）', 'ずに：不…地（文語）'],
            commonMistakes: ['○ 休むことなく / × 休んだことなく → 接辞書形'],
        },
    },
    // ━━━ ことから (from the fact that - advanced) ━━━
    {
        id: 'g_n2_463', category: 'grammar', level: 'N2', tags: ['reason', 'naming', 'advanced'],
        stem: '形{かたち}が星{ほし}に似{に}ている___、「ヒトデ」と名{な}づけられた。',
        stemZh: '因為形狀像星星，所以被命名為「海星」。',
        options: [
            { text: 'ことから', reason: '正確！「ことから」表示「從…這件事可知」「因為…所以」。' },
            { text: 'ことなく', reason: '「ことなく」表示「不…地」，語意不合。' },
            { text: 'ことだから', reason: '「ことだから」用於基於性格的推測，語意不合。' },
            { text: 'ことに', reason: '「ことに」表示「令人…的是」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことから」表示根據某個事實來判斷或命名',
            analysis: '「ことから」接在動詞普通形或い形容詞之後，表示從某個事實或特徵出發而得出結論，常用於說明事物名稱的由來。',
            comparisons: ['ことから：從…這件事（命名由來/根據）', 'から：因為…（一般原因）'],
            commonMistakes: ['○ 似ていることから / × 似たことから → 用ている形更自然'],
        },
    },
    // ━━━ 上で (after doing - challenge) ━━━
    {
        id: 'g_n2_464', category: 'grammar', level: 'N2', tags: ['sequence', 'condition', 'challenge'],
        stem: 'よく考{かんが}えた___、返事{へんじ}をしたいと思{おも}います。',
        stemZh: '在仔細考慮之後，我想再回覆。',
        options: [
            { text: '上で', reason: '正確！「上で」表示「在…之後」「在做完…之後」。' },
            { text: '上に', reason: '「上に」表示「不僅…而且…」，語意不同。' },
            { text: '上は', reason: '「上は」表示「既然…就…」，語意不同。' },
            { text: '上の', reason: '「上の」是連體修飾，文法不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「た上で」表示做完某事後再做另一件事',
            analysis: '「動詞た形＋上で」表示在做完前面的動作之後，再做後面的動作。強調前面的動作是後面動作的前提條件。',
            comparisons: ['上で（た形）：在…之後（條件前提）', '上に：不僅…而且…（累加）', '上は：既然…（決心）'],
            commonMistakes: ['○ 考えた上で / × 考える上で → 表示先做再做時用た形'],
        },
    },
    // ━━━ 上に (in addition - basic) ━━━
    {
        id: 'g_n2_465', category: 'grammar', level: 'N2', tags: ['addition', 'basic'],
        stem: 'この部屋{へや}は広{ひろ}い___、日当{ひあ}たりもいい。',
        stemZh: '這個房間不僅寬敞，而且日照也好。',
        options: [
            { text: '上に', reason: '正確！「上に」表示「不僅…而且…」，用於累加。' },
            { text: '上で', reason: '「上で」表示「在…之後」，語意不同。' },
            { text: '上は', reason: '「上は」表示「既然…就…」，語意不同。' },
            { text: '上も', reason: '「上も」不是標準文法形式。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「上に」用於累加同方向的評價',
            analysis: '「上に」接在動詞普通形、い形容詞、な形容詞＋な之後，表示在前面的基礎上再加上另一個同方向的內容。通常前後都是正面或都是負面。',
            comparisons: ['上に：不僅…而且…（累加）', 'それに：而且…（接續詞）', 'ばかりか：不僅…甚至…（程度更強）'],
            commonMistakes: ['○ 広い上に / × 広いの上に → 不需要加「の」'],
        },
    },
    // ━━━ 上は (now that - challenge) ━━━
    {
        id: 'g_n2_466', category: 'grammar', level: 'N2', tags: ['determination', 'challenge'],
        stem: '引{ひ}き受{う}けた___、責任{せきにん}を持{も}ってやり遂{と}げます。',
        stemZh: '既然接受了，就會負責完成。',
        options: [
            { text: '上は', reason: '正確！「上は」表示「既然…就…」，帶有決心或義務感。' },
            { text: '上で', reason: '「上で」表示「在…之後」，語意不同。' },
            { text: '上に', reason: '「上に」表示「不僅…而且…」，語意不同。' },
            { text: '上が', reason: '「上が」不是標準文法形式。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「上は」表達既然決定就要貫徹的決心',
            analysis: '「上は」接在動詞た形之後，表示既然做出了決定或已經在這個狀態下，就必須做出相應的行動。與「からには」「以上は」意思相近。',
            comparisons: ['上は：既然…（決心）', 'からには：既然…就…（類似）', '以上は：既然…就…（類似）'],
            commonMistakes: ['○ 引き受けた上は / × 引き受ける上は → 用た形'],
        },
    },
    // ━━━ 末に (after - advanced) ━━━
    {
        id: 'g_n2_467', category: 'grammar', level: 'N2', tags: ['result', 'process', 'advanced'],
        stem: '長{なが}い議論{ぎろん}の___、ようやく結論{けつろん}が出{で}た。',
        stemZh: '經過長時間的討論，終於得出了結論。',
        options: [
            { text: '末に', reason: '正確！「末に」表示「經過…之後（終於）」。' },
            { text: 'あげく', reason: '「あげく」也表示結果，但多用於不好的結果。' },
            { text: '上で', reason: '「上で」表示「在…之後」，不強調過程漫長。' },
            { text: '果てに', reason: '「果てに」表示極端的最後結果，語意過強。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「末に」表示經過漫長過程後的結果',
            analysis: '「名詞の＋末に」或「動詞た形＋末に」表示經過一段漫長的過程或努力之後得出的結果。結果可以是好的也可以是壞的。',
            comparisons: ['末に：經過…之後（中性結果）', 'あげく：結果是…（多指壞結果）', '果てに：最終…（極端結果）'],
            commonMistakes: ['○ 議論の末に / × 議論末に → 名詞後面需要加「の」'],
        },
    },
    // ━━━ あげく (in the end - challenge) ━━━
    {
        id: 'g_n2_468', category: 'grammar', level: 'N2', tags: ['result', 'negative', 'challenge'],
        stem: '散々{さんざん}迷{まよ}った___、結局{けっきょく}何{なに}も買{か}わなかった。',
        stemZh: '猶豫了半天，最後什麼都沒買。',
        options: [
            { text: 'あげく', reason: '正確！「あげく」表示經過漫長過程後的（通常不好的）結果。' },
            { text: '末に', reason: '「末に」也可以，但「あげく」更強調不理想的結果。' },
            { text: '上で', reason: '「上で」表示「在…之後」，不含負面語感。' },
            { text: 'ところに', reason: '「ところに」表示「正在…的時候」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「あげく」表示不理想的最終結果',
            analysis: '「あげく」接在動詞た形之後，表示經過種種曲折或反覆之後，最終得到一個（通常不令人滿意的）結果。',
            comparisons: ['あげく：最後…（多指壞結果）', '末に：經過…之後（中性）', '結局：結果（副詞）'],
            commonMistakes: ['○ 迷ったあげく / × 迷うあげく → 用た形'],
        },
    },
    // ━━━ だけに (as expected - advanced) ━━━
    {
        id: 'g_n2_469', category: 'grammar', level: 'N2', tags: ['reason', 'degree', 'advanced'],
        stem: 'プロ___、その演奏{えんそう}は素晴{すば}らしかった。',
        stemZh: '正因為是專業的，那個演奏非常精彩。',
        options: [
            { text: 'だけに', reason: '正確！「だけに」表示「正因為…所以…」，暗示理所當然。' },
            { text: 'だけあって', reason: '「だけあって」也正確，但「だけに」更強調因果關係。' },
            { text: 'だけで', reason: '「だけで」表示「只是…就…」，語意不同。' },
            { text: 'だけは', reason: '「だけは」表示「至少…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だけに」表示與程度相應的理所當然結果',
            analysis: '「だけに」接在名詞、動詞普通形、い形容詞之後，表示正因為具有某種條件或程度，所以理所當然會有這樣的結果。',
            comparisons: ['だけに：正因為…所以…（因果強調）', 'だけあって：不愧是…（讚嘆）', 'だけのことはある：果然…（評價）'],
            commonMistakes: ['○ プロだけに / × プロのだけに → 名詞直接接だけに'],
        },
    },
    // ━━━ だけあって (as expected of - challenge) ━━━
    {
        id: 'g_n2_470', category: 'grammar', level: 'N2', tags: ['evaluation', 'challenge'],
        stem: '十年{じゅうねん}も修行{しゅぎょう}した___、彼{かれ}の腕前{うでまえ}は確{たし}かだ。',
        stemZh: '不愧是修行了十年，他的技術確實了得。',
        options: [
            { text: 'だけあって', reason: '正確！「だけあって」表示「不愧是…」，帶有讚嘆的語氣。' },
            { text: 'だけに', reason: '「だけに」表示「正因為…」，語感略有不同。' },
            { text: 'だけで', reason: '「だけで」表示「只是…就…」，語意不同。' },
            { text: 'だけの', reason: '「だけの」是連體修飾，文法結構不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だけあって」表示名不虛傳的讚嘆',
            analysis: '「だけあって」接在動詞た形之後，表示某人或某物具有與其名聲、經歷等相符的實力或品質，帶有讚嘆或認可的語氣。',
            comparisons: ['だけあって：不愧是…（讚嘆）', 'だけのことはある：果然…（認可）', 'だけに：正因為…（因果）'],
            commonMistakes: ['○ 修行しただけあって / × 修行するだけあって → 用た形'],
        },
    },
    // ━━━ だけのことはある (worthy of - challenge) ━━━
    {
        id: 'g_n2_471', category: 'grammar', level: 'N2', tags: ['evaluation', 'challenge'],
        stem: 'さすが有名{ゆうめい}なレストラン___。料理{りょうり}がとても美味{おい}しかった。',
        stemZh: '不愧是有名的餐廳。料理非常好吃。',
        options: [
            { text: 'だけのことはある', reason: '正確！「だけのことはある」表示「不愧是…」「果然…」。' },
            { text: 'だけあって', reason: '「だけあって」也表示讚嘆，但語法接續不同。' },
            { text: 'だけに', reason: '「だけに」表示「正因為…」，語感不同。' },
            { text: 'だけは', reason: '「だけは」表示「至少…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だけのことはある」表示名實相符的評價',
            analysis: '「だけのことはある」接在名詞＋な或動詞普通形之後，表示某人或某物確實值得其評價，強調名實相符。',
            comparisons: ['だけのことはある：不愧是…（名實相符）', 'だけあって：不愧是…（讚嘆語氣）'],
            commonMistakes: ['○ 有名なだけのことはある / × 有名だけのことはある → な形容詞需加「な」'],
        },
    },
    // ━━━ に限って (of all things - advanced) ━━━
    {
        id: 'g_n2_472', category: 'grammar', level: 'N2', tags: ['limitation', 'irony', 'advanced'],
        stem: '大事{だいじ}な日{ひ}___、電車{でんしゃ}が遅{おく}れるんだ。',
        stemZh: '偏偏在重要的日子，電車就誤點。',
        options: [
            { text: 'に限って', reason: '正確！「に限って」表示「偏偏…」，帶有不巧或諷刺的語氣。' },
            { text: 'に限り', reason: '「に限り」表示「僅限於…」，語意不同。' },
            { text: 'に限らず', reason: '「に限らず」表示「不限於…」，語意相反。' },
            { text: 'に関して', reason: '「に関して」表示「關於…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に限って」表達偏偏在這種時候發生的無奈',
            analysis: '「に限って」接在名詞之後，表示偏偏在特定的時候或特定的人身上發生了意想不到的事情，帶有不巧或不滿的語氣。',
            comparisons: ['に限って：偏偏…（不巧/諷刺）', 'に限り：僅限於…（限定範圍）', 'に限らず：不限於…（擴大範圍）'],
            commonMistakes: ['○ 大事な日に限って / × 大事な日が限って → 用「に」不用「が」'],
        },
    },
    // ━━━ に限らず (not limited to - basic) ━━━
    {
        id: 'g_n2_473', category: 'grammar', level: 'N2', tags: ['scope', 'basic'],
        stem: 'この問題{もんだい}は日本{にほん}___、世界{せかい}中{じゅう}で起{お}きている。',
        stemZh: '這個問題不僅限於日本，在全世界都在發生。',
        options: [
            { text: 'に限らず', reason: '正確！「に限らず」表示「不限於…」「不僅…」。' },
            { text: 'に限って', reason: '「に限って」表示「偏偏…」，語意不同。' },
            { text: 'に限り', reason: '「に限り」表示「僅限於…」，語意相反。' },
            { text: 'に関わらず', reason: '「に関わらず」表示「不管…如何」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に限らず」將範圍從特定擴大到更廣',
            analysis: '「に限らず」接在名詞之後，表示不僅限於前面提到的事物，範圍更廣。後面通常會接更大的範圍。',
            comparisons: ['に限らず：不限於…（擴大範圍）', 'だけでなく：不僅…（一般擴大）', 'ばかりか：不僅…而且…（程度加強）'],
            commonMistakes: ['○ 日本に限らず / × 日本だけに限らず → 不需要加「だけ」，本身已含「不限」之意'],
        },
    },
    // ━━━ っぽい (tendency - basic) ━━━
    {
        id: 'g_n2_474', category: 'grammar', level: 'N2', tags: ['tendency', 'suffix', 'basic'],
        stem: '最近{さいきん}、彼{かれ}はすぐ怒{おこ}るので、怒{おこ}り___と思{おも}われている。',
        stemZh: '最近他動不動就生氣，所以被認為是易怒的人。',
        options: [
            { text: 'っぽい', reason: '正確！「っぽい」表示「容易…」「有…傾向」。' },
            { text: 'がち', reason: '「がち」也表示傾向，但接續方式不同。' },
            { text: '気味', reason: '「気味」表示「有點…」，語意稍弱。' },
            { text: 'げ', reason: '「げ」表示「看起來…的樣子」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「っぽい」表示某種顯著傾向或特徵',
            analysis: '「っぽい」接在動詞ます形的語幹或名詞之後，表示具有某種顯著的傾向或特徵。常帶有稍微負面的語感。',
            comparisons: ['っぽい：容易…/像…（傾向/特徵）', 'がち：往往…/容易…（傾向/頻率）', '気味：有點…（程度輕微）'],
            commonMistakes: ['○ 怒りっぽい / × 怒るっぽい → 接ます形語幹「怒り」'],
        },
    },
    // ━━━ がち (tend to - advanced) ━━━
    {
        id: 'g_n2_475', category: 'grammar', level: 'N2', tags: ['tendency', 'suffix', 'advanced'],
        stem: '冬{ふゆ}は風邪{かぜ}を引{ひ}き___だから、気{き}をつけてね。',
        stemZh: '冬天容易感冒，所以要注意啊。',
        options: [
            { text: 'がち', reason: '正確！「がち」表示「容易…」「往往…」，多用於不好的傾向。' },
            { text: 'っぽい', reason: '「っぽい」也表傾向，但接續方式不同，且不接動詞。' },
            { text: '気味', reason: '「気味」表示「有點…」，程度不同。' },
            { text: 'げ', reason: '「げ」表示「看起來…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「がち」表示不好的傾向或頻率',
            analysis: '「がち」接在動詞ます形語幹或名詞之後，表示容易出現某種（通常不太好的）傾向或狀態。',
            comparisons: ['がち：往往…/容易…（負面傾向）', 'っぽい：像…/容易…（特徵）', '気味：有點…（輕微程度）'],
            commonMistakes: ['○ 引きがち / × 引くがち → 接ます形語幹'],
        },
    },
    // ━━━ 気味 (slightly - advanced) ━━━
    {
        id: 'g_n2_476', category: 'grammar', level: 'N2', tags: ['tendency', 'degree', 'advanced'],
        stem: '最近{さいきん}、少{すこ}し太{ふと}り___で、ダイエットを始{はじ}めた。',
        stemZh: '最近有點發胖的傾向，所以開始節食了。',
        options: [
            { text: '気味', reason: '正確！「気味」表示「有點…」「稍微…」。' },
            { text: 'がち', reason: '「がち」表示容易如此，但程度不同。' },
            { text: 'っぽい', reason: '「っぽい」表示傾向或特徵，接續不同。' },
            { text: 'げ', reason: '「げ」表示「看起來…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「気味」表示稍微有某種傾向的感覺',
            analysis: '「気味」接在動詞ます形語幹或名詞之後，表示稍微有某種傾向或感覺，程度比「がち」輕。',
            comparisons: ['気味：有點…（輕微）', 'がち：容易…（頻率高）', 'っぽい：像…（特徵明顯）'],
            commonMistakes: ['○ 太り気味 / × 太る気味 → 接ます形語幹'],
        },
    },
    // ━━━ をもとに (based on - advanced) ━━━
    {
        id: 'g_n2_477', category: 'grammar', level: 'N2', tags: ['basis', 'creation', 'advanced'],
        stem: '実話{じつわ}___、この映画{えいが}は作{つく}られた。',
        stemZh: '這部電影是以真實故事為基礎製作的。',
        options: [
            { text: 'をもとに', reason: '正確！「をもとに」表示「以…為基礎/素材」。' },
            { text: 'に基づいて', reason: '「に基づいて」也可以，但更強調嚴格依據。' },
            { text: 'に沿って', reason: '「に沿って」表示「沿著…」「按照…」，語意不同。' },
            { text: 'を踏まえて', reason: '「を踏まえて」表示「基於…考慮」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をもとに」表示以某事物為素材或基礎',
            analysis: '「をもとに」接在名詞之後，表示以某個事物作為基礎材料來創作或進行某事。常用於文學、影視等創作場合。',
            comparisons: ['をもとに：以…為素材（創作基礎）', 'に基づいて：基於…（嚴格依據）', 'を参考にして：參考…（參照用）'],
            commonMistakes: ['○ 実話をもとに / × 実話のもとに → 用「を」不用「の」'],
        },
    },
    // ━━━ に基づいて (based on - challenge) ━━━
    {
        id: 'g_n2_478', category: 'grammar', level: 'N2', tags: ['basis', 'formal', 'challenge'],
        stem: '法律{ほうりつ}___、適切{てきせつ}な処置{しょち}を取{と}った。',
        stemZh: '依據法律，採取了適當的措施。',
        options: [
            { text: 'に基づいて', reason: '正確！「に基づいて」表示「基於…」「依據…」。' },
            { text: 'をもとに', reason: '「をもとに」表示「以…為素材」，不如「に基づいて」正式。' },
            { text: 'に沿って', reason: '「に沿って」表示「沿著…/按照…」，語感不同。' },
            { text: 'を踏まえて', reason: '「を踏まえて」表示「考慮到…」，語意不完全相同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に基づいて」表示嚴格依照某個標準或根據',
            analysis: '「に基づいて」接在名詞之後，表示嚴格依照某個法律、規則、事實等來行事。比「をもとに」更正式、更強調嚴格遵守。',
            comparisons: ['に基づいて：基於…（嚴格依據）', 'をもとに：以…為基礎（創作素材）', 'によって：根據…（方法/手段）'],
            commonMistakes: ['○ 法律に基づいて / × 法律を基づいて → 用「に」不用「を」'],
        },
    },
    // ━━━ に沿って (along/according to - advanced) ━━━
    {
        id: 'g_n2_479', category: 'grammar', level: 'N2', tags: ['accordance', 'advanced'],
        stem: '計画{けいかく}___、プロジェクトを進{すす}めていきましょう。',
        stemZh: '讓我們按照計畫推進專案吧。',
        options: [
            { text: 'に沿って', reason: '正確！「に沿って」表示「按照…」「沿著…」。' },
            { text: 'に基づいて', reason: '「に基づいて」表示「基於…」，更強調根據。' },
            { text: 'をもとに', reason: '「をもとに」表示「以…為基礎」，語意不同。' },
            { text: 'を通じて', reason: '「を通じて」表示「透過…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に沿って」表示按照某個方針或路線行事',
            analysis: '「に沿って」接在名詞之後，表示沿著某個方針、計畫、路線等方向進行。既可用於物理方向，也可用於抽象的方針。',
            comparisons: ['に沿って：按照…（順著方向）', 'に基づいて：基於…（嚴格根據）', 'に従って：遵從…（服從指示）'],
            commonMistakes: ['○ 計画に沿って / × 計画を沿って → 用「に」不用「を」'],
        },
    },
    // ━━━ を踏まえて (based on/considering - challenge) ━━━
    {
        id: 'g_n2_480', category: 'grammar', level: 'N2', tags: ['basis', 'consideration', 'challenge'],
        stem: '過去{かこ}の経験{けいけん}___、新{あたら}しい対策{たいさく}を立{た}てた。',
        stemZh: '基於過去的經驗，制定了新的對策。',
        options: [
            { text: 'を踏まえて', reason: '正確！「を踏まえて」表示「基於…」「考慮到…」。' },
            { text: 'をもとに', reason: '「をもとに」表示「以…為素材」，語意不完全同。' },
            { text: 'に基づいて', reason: '「に基づいて」也可以，但「を踏まえて」更強調從經驗中學到教訓。' },
            { text: 'を前提に', reason: '「を前提に」表示「以…為前提」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を踏まえて」表示將過去經驗納入考量',
            analysis: '「を踏まえて」接在名詞之後，表示以過去的經驗、教訓、結果等為基礎，在此基礎上進行下一步的行動。',
            comparisons: ['を踏まえて：基於…考慮（反思總結）', 'に基づいて：依據…（嚴格遵守）', 'をもとに：以…為素材（創作用）'],
            commonMistakes: ['○ 経験を踏まえて / × 経験に踏まえて → 用「を」不用「に」'],
        },
    },
    // ━━━ を前提に (on the premise - challenge) ━━━
    {
        id: 'g_n2_481', category: 'grammar', level: 'N2', tags: ['premise', 'formal', 'challenge'],
        stem: '結婚{けっこん}___付{つ}き合{あ}ってほしい。',
        stemZh: '希望以結婚為前提交往。',
        options: [
            { text: 'を前提に', reason: '正確！「を前提に」表示「以…為前提」。' },
            { text: 'を踏まえて', reason: '「を踏まえて」表示「基於…」，語意不同。' },
            { text: 'をもとに', reason: '「をもとに」表示「以…為素材」，語意不合。' },
            { text: 'を念頭に', reason: '「を念頭に」表示「銘記在心」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を前提に」表示以某事為必要條件',
            analysis: '「を前提に」接在名詞之後，表示以某件事作為前提條件或基本假設來進行其他事情。',
            comparisons: ['を前提に：以…為前提（條件）', 'を条件に：以…為條件（交換條件）', 'を念頭に：將…銘記（心中記住）'],
            commonMistakes: ['○ 結婚を前提に / × 結婚の前提に → 用「を」'],
        },
    },
    // ━━━ を念頭に (bearing in mind - challenge) ━━━
    {
        id: 'g_n2_482', category: 'grammar', level: 'N2', tags: ['consideration', 'formal', 'challenge'],
        stem: '安全性{あんぜんせい}___置{お}いて、設計{せっけい}を進{すす}めてください。',
        stemZh: '請將安全性銘記在心來推進設計。',
        options: [
            { text: 'を念頭に', reason: '正確！「を念頭に置いて」表示「將…銘記在心」。' },
            { text: 'を前提に', reason: '「を前提に」表示「以…為前提」，語意不同。' },
            { text: 'を踏まえて', reason: '「を踏まえて」表示「基於…」，語意不完全同。' },
            { text: 'を中心に', reason: '「を中心に」表示「以…為中心」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を念頭に置く」表示時刻牢記某事',
            analysis: '「を念頭に置いて」接在名詞之後，表示在做某事的時候，始終將某個重要因素記在心中。常與「置く」搭配使用。',
            comparisons: ['を念頭に置いて：銘記在心（持續意識）', 'を前提に：以…為前提（條件設定）', 'を考慮して：考慮到…（思考判斷）'],
            commonMistakes: ['○ 念頭に置いて / × 念頭に入れて → 固定搭配「置く」'],
        },
    },
    // ━━━ かねない (might - advanced) ━━━
    {
        id: 'g_n2_483', category: 'grammar', level: 'N2', tags: ['possibility', 'negative', 'advanced'],
        stem: 'この問題{もんだい}を放置{ほうち}すると、大{おお}きなトラブルに発展{はってん}し___。',
        stemZh: '如果放任這個問題不管，有可能發展成大問題。',
        options: [
            { text: 'かねない', reason: '正確！「かねない」表示「有可能…」，常指不好的可能性。' },
            { text: 'かねる', reason: '「かねる」表示「難以…」「無法…」，語意不同。' },
            { text: 'っこない', reason: '「っこない」表示「絕不可能…」，語意相反。' },
            { text: '得ない', reason: '「得ない」表示「不可能…」，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かねない」表示不好的事情有可能發生',
            analysis: '「かねない」接在動詞ます形語幹之後，表示某種不好的事情有發生的可能性。帶有警告的語氣。',
            comparisons: ['かねない：有可能…（擔憂/警告）', 'かねる：難以…（婉拒）', '恐れがある：恐怕會…（正式警告）'],
            commonMistakes: ['○ 発展しかねない / × 発展するかねない → 接ます形語幹'],
        },
    },
    // ━━━ かねる (unable to - advanced) ━━━
    {
        id: 'g_n2_484', category: 'grammar', level: 'N2', tags: ['inability', 'polite', 'advanced'],
        stem: '申{もう}し訳{わけ}ございませんが、その要望{ようぼう}にはお応{こた}えし___。',
        stemZh: '非常抱歉，那個要求我們難以回應。',
        options: [
            { text: 'かねます', reason: '正確！「かねる」表示「難以…」「無法…」，是婉拒的表達。' },
            { text: 'かねません', reason: '「かねない」表示「有可能…」，語意不同。' },
            { text: 'えません', reason: '「得ない」也表示無法，但沒有婉拒的語氣。' },
            { text: 'きれません', reason: '「きれない」表示「做不完」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かねる」用於婉轉拒絕或表達困難',
            analysis: '「かねる」接在動詞ます形語幹之後，表示由於某種原因而難以做到，是比直接拒絕更委婉的說法。商務場合常用。',
            comparisons: ['かねる：難以…（婉拒）', 'できない：做不到（直接否定）', 'かねない：有可能…（擔憂）'],
            commonMistakes: ['○ お応えしかねます / × お応えできかねます → 接ます形語幹'],
        },
    },
    // ━━━ ざるを得ない (have no choice but - advanced) ━━━
    {
        id: 'g_n2_485', category: 'grammar', level: 'N2', tags: ['obligation', 'advanced'],
        stem: '予算{よさん}の都合{つごう}で、計画{けいかく}を変更{へんこう}せ___。',
        stemZh: '由於預算的關係，不得不變更計畫。',
        options: [
            { text: 'ざるを得ない', reason: '正確！「ざるを得ない」表示「不得不…」「只能…」。' },
            { text: 'ずにはいられない', reason: '「ずにはいられない」表示「忍不住…」，語意不同。' },
            { text: 'ないではいられない', reason: '「ないではいられない」表示「不能不…」，語意不同。' },
            { text: 'ねばならない', reason: '「ねばならない」表示「必須…」，語意相近但語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ざるを得ない」表示不情願但不得不做',
            analysis: '「ざるを得ない」接在動詞未然形之後，表示雖然不想做但因為外部情況而不得不做。帶有無可奈何的語氣。「する」變成「せざるを得ない」。',
            comparisons: ['ざるを得ない：不得不…（不情願）', 'ねばならない：必須…（義務）', 'しかない：只有…（別無選擇）'],
            commonMistakes: ['○ 変更せざるを得ない / × 変更しざるを得ない → 「する」的未然形是「せ」'],
        },
    },
    // ━━━ ずにはいられない (cannot help but - challenge) ━━━
    {
        id: 'g_n2_486', category: 'grammar', level: 'N2', tags: ['emotion', 'compulsion', 'challenge'],
        stem: 'あの感動的{かんどうてき}な映画{えいが}を見{み}たら、涙{なみだ}を流{なが}さ___。',
        stemZh: '看了那部感人的電影，忍不住流下眼淚。',
        options: [
            { text: 'ずにはいられない', reason: '正確！「ずにはいられない」表示「忍不住…」。' },
            { text: 'ざるを得ない', reason: '「ざるを得ない」表示「不得不…」，語意不同。' },
            { text: 'ないわけにはいかない', reason: '「ないわけにはいかない」表示「不能不…」，語意不同。' },
            { text: 'ねばならない', reason: '「ねばならない」表示「必須…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ずにはいられない」表示情感上無法抑制',
            analysis: '「ずにはいられない」接在動詞未然形之後，表示情感上忍不住要做某事，是一種無法控制的衝動。「する」變成「せずにはいられない」。',
            comparisons: ['ずにはいられない：忍不住…（情感衝動）', 'ないではいられない：不能不…（同義）', 'ざるを得ない：不得不…（外部壓力）'],
            commonMistakes: ['○ 流さずにはいられない / × 流すずにはいられない → 接未然形「流さ」'],
        },
    },
    // ━━━ つつある (in the process of - advanced) ━━━
    {
        id: 'g_n2_487', category: 'grammar', level: 'N2', tags: ['progress', 'change', 'advanced'],
        stem: '地球{ちきゅう}の気温{きおん}は年々{ねんねん}上昇{じょうしょう}し___。',
        stemZh: '地球的氣溫正在逐年上升。',
        options: [
            { text: 'つつある', reason: '正確！「つつある」表示「正在…」，強調持續變化中。' },
            { text: 'つつ', reason: '「つつ」表示「一邊…一邊…」或「雖然…」，語意不同。' },
            { text: 'ている', reason: '「ている」也可以，但「つつある」更書面且強調漸進變化。' },
            { text: 'てきた', reason: '「てきた」表示到目前為止的變化，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「つつある」表示某種變化正在進行中',
            analysis: '「つつある」接在動詞ます形語幹之後，表示某個變化或進程正在持續進行中。常用於新聞報道等正式場合。',
            comparisons: ['つつある：正在…（書面語/漸進變化）', 'ている：正在…（一般用語）', 'てきている：一直在…（到目前為止）'],
            commonMistakes: ['○ 上昇しつつある / × 上昇するつつある → 接ます形語幹'],
        },
    },
    // ━━━ つつ (while / although - challenge) ━━━
    {
        id: 'g_n2_488', category: 'grammar', level: 'N2', tags: ['concession', 'simultaneous', 'challenge'],
        stem: '体{からだ}に悪{わる}いと知{し}り___、タバコをやめられない。',
        stemZh: '雖然知道對身體不好，卻戒不了煙。',
        options: [
            { text: 'つつ', reason: '正確！「つつ」在此表示「雖然…卻…」，逆接用法。' },
            { text: 'つつある', reason: '「つつある」表示「正在…」，語意不同。' },
            { text: 'ながら', reason: '「ながら」也可以表逆接，但「つつ」更書面。' },
            { text: 'ものの', reason: '「ものの」也表逆接，但接續方式不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「つつ」的逆接用法表示「明知…卻…」',
            analysis: '「つつ」接在動詞ます形語幹之後，可以表示逆接（雖然…卻…）。表示明明知道或承認某事，卻做了相反的行為。',
            comparisons: ['つつ（逆接）：雖然…卻…（書面）', 'ながら（逆接）：雖然…卻…（口語也可）', 'つつ（並行）：一邊…一邊…'],
            commonMistakes: ['○ 知りつつ / × 知ってつつ → 接ます形語幹'],
        },
    },
    // ━━━ 次第 (as soon as - basic) ━━━
    {
        id: 'g_n2_489', category: 'grammar', level: 'N2', tags: ['time', 'immediate', 'basic'],
        stem: '届{とど}き___、すぐにご連絡{れんらく}いたします。',
        stemZh: '一到貨就立刻通知您。',
        options: [
            { text: '次第', reason: '正確！「次第」表示「一…就立刻…」。' },
            { text: '次第で', reason: '「次第で」表示「取決於…」，語意不同。' },
            { text: '次第に', reason: '「次第に」表示「逐漸地」，語意不同。' },
            { text: '上で', reason: '「上で」表示「在…之後」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「次第」表示一做完某事就立刻做另一件事',
            analysis: '「次第」接在動詞ます形語幹之後，表示前面的動作一完成就立刻進行後面的動作。常用於商務或正式場合。',
            comparisons: ['次第：一…就…（正式/商務）', 'たら：如果…就…（一般）', 'と同時に：同時…（並行）'],
            commonMistakes: ['○ 届き次第 / × 届く次第 → 接ます形語幹'],
        },
    },
    // ━━━ 次第で (depending on - challenge) ━━━
    {
        id: 'g_n2_490', category: 'grammar', level: 'N2', tags: ['condition', 'challenge'],
        stem: '努力{どりょく}___、結果{けっか}は変{か}わる。',
        stemZh: '結果會因努力程度而改變。',
        options: [
            { text: '次第で', reason: '正確！「次第で」表示「取決於…」「全憑…而定」。' },
            { text: '次第', reason: '「次第」接動詞表示「一…就…」，語意不同。' },
            { text: '次第に', reason: '「次第に」表示「逐漸地」，語意不同。' },
            { text: 'に応じて', reason: '「に応じて」表示「根據…」，語意相近但接續不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「次第で」表示結果取決於某個因素',
            analysis: '「次第で」接在名詞之後，表示後面的結果完全取決於前面提到的因素。',
            comparisons: ['次第で：取決於…（關鍵因素）', 'によって：根據…（方法/原因）', 'いかんで：視…而定（正式）'],
            commonMistakes: ['○ 努力次第で / × 努力する次第で → 接名詞'],
        },
    },
    // ━━━ や否や (as soon as - challenge) ━━━
    {
        id: 'g_n2_491', category: 'grammar', level: 'N2', tags: ['time', 'immediate', 'challenge'],
        stem: 'ベルが鳴{な}る___、生徒{せいと}たちは教室{きょうしつ}を飛{と}び出{だ}した。',
        stemZh: '鈴聲一響，學生們就衝出了教室。',
        options: [
            { text: 'や否や', reason: '正確！「や否や」表示「一…就…」，強調瞬間接續。' },
            { text: '次第', reason: '「次第」也表示「一…就…」，但更正式且常用於商務。' },
            { text: 'が早いか', reason: '「が早いか」也是「一…就…」，但更文語。' },
            { text: 'たとたんに', reason: '「たとたんに」表示「剛…就…」，接續方式不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「や否や」表示幾乎同時發生的瞬間接續',
            analysis: '「や否や」接在動詞辞書形之後，表示前一個動作一發生，後一個動作幾乎同時跟著發生。是非常書面的表達。',
            comparisons: ['や否や：一…就…（書面語/瞬間）', '次第：一…就…（商務/依序）', 'たとたんに：剛…就…（口語也可）'],
            commonMistakes: ['○ 鳴るや否や / × 鳴ったや否や → 接辞書形'],
        },
    },
    // ━━━ か～ないかのうちに (no sooner than - challenge) ━━━
    {
        id: 'g_n2_492', category: 'grammar', level: 'N2', tags: ['time', 'immediate', 'challenge'],
        stem: '目{め}を閉{と}じる___閉{と}じない___のうちに、眠{ねむ}りに落{お}ちた。',
        stemZh: '眼睛一閉上就立刻睡著了。',
        options: [
            { text: 'か…か', reason: '正確！「か～ないかのうちに」表示「剛一…就…」。' },
            { text: 'と…と', reason: '文法不正確，不能這樣使用。' },
            { text: 'が…が', reason: '文法不正確，不能這樣使用。' },
            { text: 'や…や', reason: '文法不正確，不能這樣使用。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「か～ないかのうちに」強調動作幾乎瞬間完成',
            analysis: '「動詞辞書形＋か＋動詞ない形＋かのうちに」表示某個動作剛一完成（甚至還沒完全完成），下一個動作就發生了。',
            comparisons: ['か～ないかのうちに：剛一…就…（極短時間）', 'や否や：一…就…（瞬間）', 'たとたんに：剛…就…'],
            commonMistakes: ['○ 閉じるか閉じないかのうちに / × 閉じたか閉じないかのうちに → 用辞書形'],
        },
    },
    // ━━━ に応じて (according to - advanced) ━━━
    {
        id: 'g_n2_493', category: 'grammar', level: 'N2', tags: ['accordance', 'correspondence', 'advanced'],
        stem: 'お客様{きゃくさま}のご要望{ようぼう}___、サービスを提供{ていきょう}いたします。',
        stemZh: '我們會根據客人的需求提供服務。',
        options: [
            { text: 'に応じて', reason: '正確！「に応じて」表示「根據…」「與…相應」。' },
            { text: 'に沿って', reason: '「に沿って」表示「沿著…/按照…」，語感不同。' },
            { text: 'に対して', reason: '「に対して」表示「對…」，語意不同。' },
            { text: 'について', reason: '「について」表示「關於…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に応じて」表示根據某個條件做出相應調整',
            analysis: '「に応じて」接在名詞之後，表示根據不同的情況或需求做出相應的對應或調整。',
            comparisons: ['に応じて：根據…相應（靈活對應）', 'に沿って：按照…（沿著方向）', 'に従って：遵從…（服從指示）'],
            commonMistakes: ['○ 要望に応じて / × 要望を応じて → 用「に」不用「を」'],
        },
    },
    // ━━━ にわたって (over/spanning - advanced) ━━━
    {
        id: 'g_n2_494', category: 'grammar', level: 'N2', tags: ['range', 'duration', 'advanced'],
        stem: '三日間{みっかかん}___、会議{かいぎ}が行{おこな}われた。',
        stemZh: '會議進行了三天。',
        options: [
            { text: 'にわたって', reason: '正確！「にわたって」表示「長達…」「歷經…」。' },
            { text: 'にかけて', reason: '「にかけて」表示「從…到…期間」，語意不同。' },
            { text: 'を通じて', reason: '「を通じて」表示「透過…」或「在…期間」，語感不同。' },
            { text: 'に沿って', reason: '「に沿って」表示「沿著…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にわたって」表示涵蓋整個時間或空間範圍',
            analysis: '「にわたって」接在表示時間或範圍的名詞之後，表示某事持續了整個期間或涵蓋了整個範圍。',
            comparisons: ['にわたって：長達…/涵蓋…（整個範圍）', 'にかけて：從…到…（起點到終點）', 'を通じて：在…期間（始終如此）'],
            commonMistakes: ['○ 三日間にわたって / × 三日間をわたって → 用「に」不用「を」'],
        },
    },
    // ━━━ に伴って (along with - challenge) ━━━
    {
        id: 'g_n2_495', category: 'grammar', level: 'N2', tags: ['change', 'correlation', 'challenge'],
        stem: '人口{じんこう}の増加{ぞうか}___、住宅{じゅうたく}問題{もんだい}も深刻{しんこく}になってきた。',
        stemZh: '隨著人口的增加，住宅問題也變得嚴重了。',
        options: [
            { text: 'に伴って', reason: '正確！「に伴って」表示「隨著…」「伴隨著…」。' },
            { text: 'につれて', reason: '「につれて」也表示「隨著…」，語意相近但「に伴って」更正式。' },
            { text: 'に応じて', reason: '「に応じて」表示「根據…」，語意不同。' },
            { text: 'にわたって', reason: '「にわたって」表示「長達…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に伴って」表示某個變化伴隨另一個變化',
            analysis: '「に伴って」接在名詞之後，表示隨著某個事物的變化，另一個事物也跟著變化。強調兩者之間的連動關係。',
            comparisons: ['に伴って：伴隨著…（正式/連動）', 'につれて：隨著…（漸進變化）', 'とともに：與…一起（同時變化）'],
            commonMistakes: ['○ 増加に伴って / × 増加を伴って → 此處用「に」表示「隨著」'],
        },
    },
    // ━━━ に際して (on the occasion of - advanced) ━━━
    {
        id: 'g_n2_496', category: 'grammar', level: 'N2', tags: ['occasion', 'formal', 'advanced'],
        stem: '卒業{そつぎょう}___、先生{せんせい}から一言{ひとこと}いただきました。',
        stemZh: '在畢業之際，收到了老師的一番話。',
        options: [
            { text: 'に際して', reason: '正確！「に際して」表示「在…之際」。' },
            { text: 'にあたって', reason: '「にあたって」也表示「在…之際」，但更強調特別準備。' },
            { text: 'において', reason: '「において」表示「在…」，語感不同。' },
            { text: 'に対して', reason: '「に対して」表示「對…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に際して」用於重要場合或時刻',
            analysis: '「に際して」接在名詞之後，表示在某個重要或正式的場合。常用於典禮、儀式等正式場合的致詞等。',
            comparisons: ['に際して：在…之際（正式場合）', 'にあたって：在…之際（事前準備）', '時に：在…時候（一般）'],
            commonMistakes: ['○ 卒業に際して / × 卒業するに際して → 通常接名詞'],
        },
    },
    // ━━━ にあたって (on the occasion of - challenge) ━━━
    {
        id: 'g_n2_497', category: 'grammar', level: 'N2', tags: ['occasion', 'preparation', 'challenge'],
        stem: '新{あたら}しい事業{じぎょう}を始{はじ}める___、市場{しじょう}調査{ちょうさ}を行{おこな}った。',
        stemZh: '在開始新事業之際，進行了市場調查。',
        options: [
            { text: 'にあたって', reason: '正確！「にあたって」表示「在…之際」，強調事前準備。' },
            { text: 'に際して', reason: '「に際して」也可以，但「にあたって」更強調為此做了準備。' },
            { text: 'において', reason: '「において」表示「在…」，語感不同。' },
            { text: 'に関して', reason: '「に関して」表示「關於…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にあたって」強調為重要事項做準備',
            analysis: '「にあたって」接在動詞辞書形或名詞之後，表示在進行某個重要事項之際，特別做了某些準備或安排。',
            comparisons: ['にあたって：在…之際（事前準備）', 'に際して：在…之際（正式場合）', 'に先立って：在…之前（預先）'],
            commonMistakes: ['○ 始めるにあたって / ○ 開始にあたって → 動詞辞書形和名詞都可以'],
        },
    },
    // ━━━ を問わず (regardless of - advanced) ━━━
    {
        id: 'g_n2_498', category: 'grammar', level: 'N2', tags: ['scope', 'unconditional', 'advanced'],
        stem: '年齢{ねんれい}、性別{せいべつ}___、どなたでも参加{さんか}できます。',
        stemZh: '不分年齡、性別，任何人都可以參加。',
        options: [
            { text: 'を問わず', reason: '正確！「を問わず」表示「不管…」「無論…都」。' },
            { text: 'に関わらず', reason: '「に関わらず」也表示「不管…」，語意相近。' },
            { text: 'に限らず', reason: '「に限らず」表示「不限於…」，語意不完全同。' },
            { text: 'をもとに', reason: '「をもとに」表示「以…為基礎」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を問わず」表示不問某個條件，一律適用',
            analysis: '「を問わず」接在名詞之後，表示不管前面提到的條件如何，結果都一樣。常用於公告或規定中。',
            comparisons: ['を問わず：不問…（正式/公告）', 'に関わらず：不管…如何（一般）', 'に限らず：不限於…（擴大範圍）'],
            commonMistakes: ['○ 年齢を問わず / × 年齢が問わず → 用「を」不用「が」'],
        },
    },
    // ━━━ をめぐって (concerning/over - challenge) ━━━
    {
        id: 'g_n2_499', category: 'grammar', level: 'N2', tags: ['topic', 'dispute', 'challenge'],
        stem: '土地{とち}の所有権{しょゆうけん}___、長年{ながねん}争{あらそ}いが続{つづ}いている。',
        stemZh: '圍繞土地的所有權，爭執持續了多年。',
        options: [
            { text: 'をめぐって', reason: '正確！「をめぐって」表示「圍繞著…」「就…」，常用於爭議話題。' },
            { text: 'について', reason: '「について」表示「關於…」，語意較中性。' },
            { text: 'に対して', reason: '「に対して」表示「對…」，語意不同。' },
            { text: 'に関して', reason: '「に関して」表示「關於…」，不含爭論的語感。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をめぐって」表示圍繞某個議題展開討論或爭論',
            analysis: '「をめぐって」接在名詞之後，表示圍繞某個問題或話題進行討論、爭論或對立。常用於有爭議性的話題。',
            comparisons: ['をめぐって：圍繞…（爭議/討論）', 'について：關於…（中性說明）', 'に関して：關於…（正式說明）'],
            commonMistakes: ['○ 所有権をめぐって / × 所有権にめぐって → 用「を」不用「に」'],
        },
    },
    // ━━━ に過ぎない (merely - advanced) ━━━
    {
        id: 'g_n2_500', category: 'grammar', level: 'N2', tags: ['limitation', 'understatement', 'advanced'],
        stem: 'これは私{わたし}の個人的{こじんてき}な意見{いけん}___。',
        stemZh: '這只不過是我的個人意見。',
        options: [
            { text: 'に過ぎない', reason: '正確！「に過ぎない」表示「只不過是…」「僅僅是…」。' },
            { text: 'にほかならない', reason: '「にほかならない」表示「無非是…」，強調正是，語意相反。' },
            { text: 'に相違ない', reason: '「に相違ない」表示「一定是…」，語意不同。' },
            { text: 'に決まっている', reason: '「に決まっている」表示「肯定…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に過ぎない」用於謙遜或貶低',
            analysis: '「に過ぎない」接在名詞或動詞普通形之後，表示某事物只不過是…，僅此而已。常用於謙遜或低估某物的重要性。',
            comparisons: ['に過ぎない：只不過是…（謙遜/貶低）', 'にほかならない：正是…（強調）', 'でしかない：只是…（限定）'],
            commonMistakes: ['○ 意見に過ぎない / × 意見が過ぎない → 用「に」不用「が」'],
        },
    },
    // ━━━ にほかならない (nothing but - challenge) ━━━
    {
        id: 'g_n2_501', category: 'grammar', level: 'N2', tags: ['emphasis', 'conclusion', 'challenge'],
        stem: '彼{かれ}が成功{せいこう}したのは、努力{どりょく}の結果{けっか}___。',
        stemZh: '他成功了，無非是努力的結果。',
        options: [
            { text: 'にほかならない', reason: '正確！「にほかならない」表示「無非是…」「正是…」。' },
            { text: 'に過ぎない', reason: '「に過ぎない」表示「只不過是…」，語意相反。' },
            { text: 'に相違ない', reason: '「に相違ない」表示「一定是…」，語意不同。' },
            { text: 'に違いない', reason: '「に違いない」表示「一定是…」，是推測而非斷定。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にほかならない」強調事物的本質',
            analysis: '「にほかならない」接在名詞之後，表示某事的原因或本質正是前面所說的，除此之外沒有其他。語氣非常肯定。',
            comparisons: ['にほかならない：正是…/無非是…（斷定本質）', 'に過ぎない：只不過是…（輕視）', 'に相違ない：毫無疑問是…（確信）'],
            commonMistakes: ['○ 努力の結果にほかならない / × 努力の結果がほかならない → 固定搭配'],
        },
    },
    // ━━━ に相違ない (no doubt - challenge) ━━━
    {
        id: 'g_n2_502', category: 'grammar', level: 'N2', tags: ['certainty', 'formal', 'challenge'],
        stem: 'この手紙{てがみ}の筆跡{ひっせき}は、彼{かれ}のもの___。',
        stemZh: '這封信的筆跡，毫無疑問是他的。',
        options: [
            { text: 'に相違ない', reason: '正確！「に相違ない」表示「毫無疑問是…」。' },
            { text: 'にほかならない', reason: '「にほかならない」表示「無非是…」，語感不同。' },
            { text: 'に過ぎない', reason: '「に過ぎない」表示「只不過是…」，語意不同。' },
            { text: 'に限らない', reason: '「に限らない」表示「不限於…」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に相違ない」表達極強的確信',
            analysis: '「に相違ない」接在名詞或動詞普通形之後，表示對某事有極強的確信，認為毫無疑問就是如此。比「に違いない」更正式。',
            comparisons: ['に相違ない：毫無疑問…（書面/正式）', 'に違いない：一定是…（一般推測）', 'に決まっている：肯定是…（口語）'],
            commonMistakes: ['○ 彼のものに相違ない / × 彼のものが相違ない → 固定用「に」'],
        },
    },
    // ━━━ はおろか (let alone - challenge) ━━━
    {
        id: 'g_n2_503', category: 'grammar', level: 'N2', tags: ['degree', 'emphasis', 'challenge'],
        stem: '漢字{かんじ}___、ひらがなさえ読{よ}めない。',
        stemZh: '別說漢字了，連平假名都不會讀。',
        options: [
            { text: 'はおろか', reason: '正確！「はおろか」表示「別說…了，連…都…」。' },
            { text: 'はもとより', reason: '「はもとより」表示「不用說…」，但語感不同。' },
            { text: 'どころか', reason: '「どころか」也表示「豈止…」，語意相近但接續不同。' },
            { text: 'ばかりか', reason: '「ばかりか」表示「不僅…而且…」，語意不完全同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はおろか」表示連更基本的都做不到',
            analysis: '「はおろか」接在名詞之後，表示前面提到的事物更不用說了，連更簡單或更基本的事都做不到。常與「さえ」「すら」搭配。',
            comparisons: ['はおろか：別說…（連基本的都…）', 'どころか：豈止…（程度超出）', 'はもとより：不用說…（理所當然）'],
            commonMistakes: ['○ 漢字はおろか / × 漢字がおろか → 用「は」'],
        },
    },
    // ━━━ はもとより (not to mention - challenge) ━━━
    {
        id: 'g_n2_504', category: 'grammar', level: 'N2', tags: ['addition', 'scope', 'challenge'],
        stem: 'この温泉{おんせん}は国内{こくない}___、海外{かいがい}からも多{おお}くの観光客{かんこうきゃく}が訪{おとず}れる。',
        stemZh: '這個溫泉不用說國內了，連海外都有很多觀光客來訪。',
        options: [
            { text: 'はもとより', reason: '正確！「はもとより」表示「不用說…更不用說…」。' },
            { text: 'はおろか', reason: '「はおろか」表示「別說…連…都」，語感更極端。' },
            { text: 'ばかりか', reason: '「ばかりか」表示「不僅…」，語意相近但不如「はもとより」正式。' },
            { text: 'に限らず', reason: '「に限らず」表示「不限於…」，語意相近但用法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はもとより」表示前者理所當然，後者更加如此',
            analysis: '「はもとより」接在名詞之後，表示前面提到的是理所當然的，同時也包含了更大的範圍。常用於正面評價。',
            comparisons: ['はもとより：不用說…（正面/擴大）', 'はおろか：別說…（負面/極端）', 'ばかりか：不僅…而且…（追加）'],
            commonMistakes: ['○ 国内はもとより / × 国内がもとより → 用「は」'],
        },
    },
    // ━━━ よりほかない (have no choice but - challenge) ━━━
    {
        id: 'g_n2_505', category: 'grammar', level: 'N2', tags: ['limitation', 'resignation', 'challenge'],
        stem: 'バスも電車{でんしゃ}もない以上{いじょう}、歩{ある}く___。',
        stemZh: '既然沒有公車也沒有電車，就只能走路了。',
        options: [
            { text: 'よりほかない', reason: '正確！「よりほかない」表示「只有…」「除此以外別無他法」。' },
            { text: 'しかない', reason: '「しかない」也表示「只有…」，但「よりほかない」更書面。' },
            { text: 'ざるを得ない', reason: '「ざるを得ない」表示「不得不…」，語意相近但接續不同。' },
            { text: 'わけにはいかない', reason: '「わけにはいかない」表示「不能…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「よりほかない」表示別無選擇只能如此',
            analysis: '「よりほかない」接在動詞辞書形之後，表示在沒有其他選擇的情況下只能這樣做。是「しかない」的更書面表達。',
            comparisons: ['よりほかない：只有…（書面語）', 'しかない：只有…（一般用語）', 'ざるを得ない：不得不…（被迫）'],
            commonMistakes: ['○ 歩くよりほかない / × 歩くよりほかはない → 「よりほかない」是固定形式'],
        },
    },
]
