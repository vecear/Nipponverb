
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const VerbConjugationGuide = () => {
    const { t } = useTranslation()

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-20">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <Link to="/verbs" className="text-white/60 hover:text-white mb-2 inline-block">← {t('common.back')}</Link>
                    <h1 className="text-3xl md:text-4xl font-zen font-bold text-gradient">日本語動詞體系之全方位研究</h1>
                    <p className="text-white/60 mt-2">從 JLPT N5 至 N1 的形態變化、語義功能與應用實務分析</p>
                </div>
            </div>

            <article className="prose prose-invert prose-lg max-w-none">
                <section className="mb-12">
                    <p className="lead text-xl text-white/80">
                        日語語法體系的複雜性與嚴謹度，很大程度上取決於其動詞系統的活用（Conjugation）機制。作為一種黏著語（Agglutinative Language），日語動詞不僅承載動作的基本語義，更透過豐富的形態變化表達時態、語態、語氣以及社會階層中的敬意關係。
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-electric-cyan mb-6">第一章：日語動詞的形態分類與構造邏輯</h2>
                    <p className="mb-4">
                        掌握日語動詞變化的先決條件在於對動詞類別的正確辨識。學界通常將日語動詞分為三大類別：五段動詞（Group 1）、一段動詞（Group 2）以及不規則變化動詞（Group 3）。
                    </p>

                    <div className="card my-6 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/10 text-sakura-pink border-b border-white/10">
                                    <th className="p-4">動詞類別</th>
                                    <th className="p-4">辭書形結尾特徵</th>
                                    <th className="p-4">活用原理</th>
                                    <th className="p-4">核心範例</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr>
                                    <td className="p-4 font-bold text-electric-cyan">五段動詞</td>
                                    <td className="p-4">非「る」音，或「る」前音非「い/え」段</td>
                                    <td className="p-4">詞尾在五音段間切換</td>
                                    <td className="p-4 font-mono text-sm">行く、飲む、帰る、話す</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-electric-cyan">一段動詞</td>
                                    <td className="p-4">以「る」結尾且前音為「い/え」段</td>
                                    <td className="p-4">去掉詞尾「る」後接續</td>
                                    <td className="p-4 font-mono text-sm">食べる、見る、起きる、寝る</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-electric-cyan">不規則動詞</td>
                                    <td className="p-4">固定為「する」與「来る」</td>
                                    <td className="p-4">獨立演化出的特定規律</td>
                                    <td className="p-4 font-mono text-sm">する、来る、勉強する</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r mb-6">
                        <p className="text-sm text-yellow-200">
                            <strong>注意：</strong> 部分五段動詞在外觀上與一段動詞極為相似（如「帰る」、「切る」、「知る」），這類「偽裝一段動詞」是 N5 階段最容易出錯的環節，必須依賴語法記憶。
                        </p>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-electric-cyan mb-6">第二章：活用形式的系統化規律與應用情境</h2>
                    <p className="mb-6">活用是日語動詞靈魂所在。每一種活用形都有其特定的句法功能與語用時機。</p>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-sakura-pink mb-2">一、丁寧體（ます形 / Polite Form）</h3>
                            <p className="text-white/70 mb-2">此形式用於對聽話者表示禮貌與敬意，是初學者接觸日語的首選體態。</p>
                            <ul className="list-disc pl-5 text-white/70 space-y-1">
                                <li><strong>規則：</strong> 五段動詞將「う段」音變為「い段」加「ます」；一段動詞去「る」加「ます」。</li>
                                <li><strong>用法：</strong> 用於對長輩、上司或陌生人的日常溝通。</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-sakura-pink mb-2">二、否定形（ない形 / Negative Form）</h3>
                            <p className="text-white/70 mb-2">用於表達否定意義，也是「必須」等高級句型的基礎。</p>
                            <ul className="list-disc pl-5 text-white/70 space-y-1">
                                <li><strong>規則：</strong> 五段動詞將「う段」變為「あ段」加「ない」（「う」結尾變「わ」）；一段動詞去「る」加「ない」。</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-sakura-pink mb-2">三、過去形與中止形（た形・て形）</h3>
                            <p className="text-white/70 mb-2">這是日語動詞中變形難度最高的部分，特別是五段動詞的「音便」現象。</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div className="bg-white/5 p-4 rounded-lg">
                                    <span className="text-electric-cyan font-bold block mb-1">促音便</span>
                                    <span className="text-sm">「う、つ、る」結尾 → 「った/って」<br />(例：会う → 会った)</span>
                                </div>
                                <div className="bg-white/5 p-4 rounded-lg">
                                    <span className="text-electric-cyan font-bold block mb-1">撥音便</span>
                                    <span className="text-sm">「む、ぶ、ぬ」結尾 → 「んだ/んで」<br />(例：飲む → 飲んだ)</span>
                                </div>
                                <div className="bg-white/5 p-4 rounded-lg">
                                    <span className="text-electric-cyan font-bold block mb-1">い音便</span>
                                    <span className="text-sm">「く、ぐ」結尾 → 「いた/いて」、「いだ/いで」<br />(例：書く → 書いた)</span>
                                </div>
                                <div className="bg-white/5 p-4 rounded-lg">
                                    <span className="text-electric-cyan font-bold block mb-1">特殊變化</span>
                                    <span className="text-sm">「す」結尾 → 「した/して」<br />(いく → いった/いって)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card my-8 overflow-hidden">
                        <div className="bg-white/5 px-4 py-2 border-b border-white/10 font-bold">動詞常用活用形規則匯總表</div>
                        <table className="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr className="text-sakura-pink border-b border-white/10">
                                    <th className="p-3">形式名稱</th>
                                    <th className="p-3">主要用途</th>
                                    <th className="p-3 hidden md:table-cell">五段 (書く)</th>
                                    <th className="p-3 hidden md:table-cell">一段 (食べる)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr>
                                    <td className="p-3 font-bold text-electric-cyan">辭書形</td>
                                    <td className="p-3">字典查閱、平輩對話</td>
                                    <td className="p-3 hidden md:table-cell">書く</td>
                                    <td className="p-3 hidden md:table-cell">食べる</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold text-electric-cyan">ます形</td>
                                    <td className="p-3">公開場合、正式溝通</td>
                                    <td className="p-3 hidden md:table-cell">書きます</td>
                                    <td className="p-3 hidden md:table-cell">食べます</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold text-electric-cyan">ない形</td>
                                    <td className="p-3">否定、義務句型基礎</td>
                                    <td className="p-3 hidden md:table-cell">書かない</td>
                                    <td className="p-3 hidden md:table-cell">食べない</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold text-electric-cyan">た形</td>
                                    <td className="p-3">過去事實、經驗</td>
                                    <td className="p-3 hidden md:table-cell">書いた</td>
                                    <td className="p-3 hidden md:table-cell">食べた</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold text-electric-cyan">て形</td>
                                    <td className="p-3">連結、進行中 (〜ている)</td>
                                    <td className="p-3 hidden md:table-cell">書いて</td>
                                    <td className="p-3 hidden md:table-cell">食べて</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold text-electric-cyan">可能形</td>
                                    <td className="p-3">表達具備技能或可行性</td>
                                    <td className="p-3 hidden md:table-cell">書ける</td>
                                    <td className="p-3 hidden md:table-cell">食べられる</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold text-electric-cyan">被動形</td>
                                    <td className="p-3">受影響、被害或尊敬</td>
                                    <td className="p-3 hidden md:table-cell">書かれる</td>
                                    <td className="p-3 hidden md:table-cell">食べられる</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold text-electric-cyan">使役形</td>
                                    <td className="p-3">強制、許可</td>
                                    <td className="p-3 hidden md:table-cell">書かせる</td>
                                    <td className="p-3 hidden md:table-cell">食べさせる</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-electric-cyan mb-6">各級別動詞學習重點</h2>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="card border-l-4 border-green-400">
                            <h3 className="text-xl font-bold text-green-400 mb-2">N5 級別：基礎生存與日常</h3>
                            <p className="text-white/70 mb-4">
                                N5 動詞主要集中在生理需求、基礎社交與物理位移。掌握重點在於對「基本動作」的精確匹配。
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm font-mono text-white/60">
                                <div>行く (去)</div>
                                <div>来る (來)</div>
                                <div>食べる (吃)</div>
                                <div>飲む (喝)</div>
                            </div>
                        </div>

                        <div className="card border-l-4 border-blue-400">
                            <h3 className="text-xl font-bold text-blue-400 mb-2">N4 級別：語法銜接與情境</h3>
                            <p className="text-white/70 mb-4">
                                N4 特徵是動詞開始具備更強的「功能性」，如授受關係、自動詞與他動詞的對應。
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex gap-2">
                                    <span className="text-blue-300">自動詞/他動詞：</span>
                                    <span className="text-white/60">開く/開ける、閉まる/閉める</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-blue-300">授受關係：</span>
                                    <span className="text-white/60">あげる、くれる、もらう</span>
                                </div>
                            </div>
                        </div>

                        <div className="card border-l-4 border-yellow-400">
                            <h3 className="text-xl font-bold text-yellow-400 mb-2">N3 級別：中級跨越與社會溝通</h3>
                            <p className="text-white/70 mb-4">
                                N3 詞彙轉向心理活動、社會事件。對動詞活用的要求在於「多重功能的疊加」，如可能形與受身的區分。
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm font-mono text-white/60">
                                <div>信じる (相信)</div>
                                <div>感じる (感到)</div>
                                <div>申し込む (申請)</div>
                                <div>続ける (繼續)</div>
                            </div>
                        </div>

                        <div className="card border-l-4 border-orange-400">
                            <h3 className="text-xl font-bold text-orange-400 mb-2">N2 級別：上級層次與職場所需</h3>
                            <p className="text-white/70 mb-4">
                                動詞伴隨著強烈的「視角轉化」與「語氣修飾」。使役受身形在此級別變得極為普遍。
                            </p>
                            <div className="text-sm space-y-1">
                                <p className="text-orange-300">關鍵轉變：敬語的專業化</p>
                                <p className="text-white/60">食べる → 召し上がる (尊敬) / 頂く (謙讓)</p>
                            </div>
                        </div>

                        <div className="card border-l-4 border-red-400">
                            <h3 className="text-xl font-bold text-red-400 mb-2">N1 級別：專業大師級與文學</h3>
                            <p className="text-white/70 mb-4">
                                動詞多具有古典語源、文學色彩或法律精確性。不在於「被理解」，而在於「展現深度」。
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm font-mono text-white/60">
                                <div>唱える (提倡)</div>
                                <div>赴く (前往)</div>
                                <div>欺く (欺騙)</div>
                                <div>仰ぐ (仰望)</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-electric-cyan mb-6">結語</h2>
                    <p className="text-white/80 leading-relaxed">
                        日語動詞從 N5 到 N1 的演變，本質上是從掌握「物理世界的動作」到具備「社會與精神世界的構建能力」。這套龐大的動詞體系，雖然以其繁瑣的活用著稱，但也正因為這份精確，讓日語能夠在極短的語句中包含極豐富的社會資訊。掌握了動詞的活用，便掌握了日語溝通的鑰匙。
                    </p>
                </section>
            </article>
        </div>
    )
}

export default VerbConjugationGuide
