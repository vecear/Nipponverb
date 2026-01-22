import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FuriganaText from '../components/FuriganaText'

const VerbConjugationGuide = () => {
    const { t } = useTranslation()

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-20">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <Link to="/verbs" className="text-white/60 hover:text-white mb-2 inline-block">← {t('common.back')}</Link>
                    <h1 className="text-3xl md:text-5xl font-zen font-bold text-gradient">動詞活用完全指南</h1>
                    <p className="text-lg text-white/70 mt-4 leading-relaxed">
                        日文動詞的變化型態（活用形）是學習日文的核心。這份指南將協助你系統性掌握最常用的五種基礎變化型態，讓你讀完就能學會常用動詞變化。
                    </p>
                </div>
            </div>

            <article className="space-y-12">
                {/* 三類別概覽 */}
                <section>
                    <h2 className="text-2xl font-bold text-electric-cyan mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-electric-cyan/20 flex items-center justify-center text-sm">01</span>
                        日文動詞三類別概覽
                    </h2>
                    <div className="card grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <h3 className="font-bold text-sakura-pink">第一類 (五段動詞)</h3>
                            <p className="text-sm text-white/60">字尾為「う、く、ぐ、す、つ、ぬ、ぶ、む、る」。</p>
                        </div>
                        <div className="space-y-2 border-l border-white/10 md:pl-6 pl-0 border-l-0 md:border-l">
                            <h3 className="font-bold text-sakura-pink">第二類 (一段動詞)</h3>
                            <p className="text-sm text-white/60">字尾為「いる」或「える」。</p>
                        </div>
                        <div className="space-y-2 border-l border-white/10 md:pl-6 pl-0 border-l-0 md:border-l">
                            <h3 className="font-bold text-sakura-pink">第三類 (不規則)</h3>
                            <p className="text-sm text-white/60">僅有「する」(做) 與 <FuriganaText text="来{く}る" /> (來)。</p>
                        </div>
                    </div>
                </section>

                {/* 常用五大變化 */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-bold text-electric-cyan mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-electric-cyan/20 flex items-center justify-center text-sm">02</span>
                        常用五大變化型態
                    </h2>

                    {/* 1. ます形 */}
                    <div className="card space-y-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-sakura-pink mb-1">1. ます形 (禮貌形)</h3>
                                <p className="text-white/60 text-sm">用法：表示現在肯定、未來，用於禮貌溝通。</p>
                            </div>
                            <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-wider">Polite Form</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm bg-black/20 p-4 rounded-xl border border-white/5">
                            <div className="space-y-1">
                                <span className="text-electric-cyan font-bold">第一類</span>
                                <p className="text-white/70">「う段」→「い段」+ ます</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-electric-cyan font-bold">第二類</span>
                                <p className="text-white/70">去「る」+ ます</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-electric-cyan font-bold">第三類</span>
                                <p className="text-white/70">する → します<br /><FuriganaText text="来{く}る" /> → <FuriganaText text="来{き}ます" /></p>
                            </div>
                        </div>

                        <div className="space-y-4 border-t border-white/10 pt-4">
                            <div className="bg-sakura-pink/5 p-4 rounded-xl">
                                <div className="text-sm font-bold text-sakura-pink mb-2">例句練習：</div>
                                <div className="text-lg italic font-zen mb-1">
                                    <FuriganaText text="私{わたし}は　明日{あした}　公園{こうえん}へ　行{い}きます。" />
                                </div>
                                <div className="text-sm text-white/40">( 我明天要去公園。 )</div>
                                <div className="mt-4 text-xs space-y-1 text-white/50">
                                    <p>• <strong>單字：</strong> <FuriganaText text="行{い}く" /> (第一類) → <FuriganaText text="行{き}ます" /></p>
                                    <p>• <strong>陷阱：</strong> 記得要變「い段」，不是直接加 ます (如：行きます 正確)。</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. て形 */}
                    <div className="card space-y-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-sakura-pink mb-1">2. て形 (連結形)</h3>
                                <p className="text-white/60 text-sm">用法：表示動作先後、進行中、請求或狀態。</p>
                            </div>
                            <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-wider">Te-Form</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm bg-black/20 p-4 rounded-xl border border-white/5">
                            <div className="space-y-1">
                                <span className="text-electric-cyan font-bold">第一類</span>
                                <p className="text-white/70">依字尾音便 (促音/鼻音/い音)</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-electric-cyan font-bold">第二類</span>
                                <p className="text-white/70">去「る」+ て</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-electric-cyan font-bold">第三類</span>
                                <p className="text-white/70">する → して<br /><FuriganaText text="来{く}る" /> → <FuriganaText text="来{き}て" /></p>
                            </div>
                        </div>

                        <div className="space-y-4 border-t border-white/10 pt-4">
                            <div className="bg-sakura-pink/5 p-4 rounded-xl">
                                <div className="text-sm font-bold text-sakura-pink mb-2">例句練習：</div>
                                <div className="text-lg italic font-zen mb-1">
                                    <FuriganaText text="窓{まど}を　開{あ}けて、空{くう}気{き}を　入{い}れました。" />
                                </div>
                                <div className="text-sm text-white/40">( 打開窗戶後，讓空氣進來。 )</div>
                                <div className="mt-4 text-xs space-y-1 text-white/50">
                                    <p>• <strong>單字：</strong> <FuriganaText text="開{あ}ける" /> (第二類) → <FuriganaText text="開{あ}けて" /></p>
                                    <p>• <strong>陷阱：</strong> <FuriganaText text="行{い}く" /> 是例外，應為 <FuriganaText text="行{い}って" /> 而非行いて。</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. ない形 */}
                    <div className="card space-y-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-sakura-pink mb-1">3. ない形 (否定形)</h3>
                                <p className="text-white/60 text-sm">用法：表示否定、禁止。</p>
                            </div>
                            <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-wider">Negative Form</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm bg-black/20 p-4 rounded-xl border border-white/5">
                            <div className="space-y-1">
                                <span className="text-electric-cyan font-bold">第一類</span>
                                <p className="text-white/70">「う段」→「あ段」+ ない (う→わ)</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-electric-cyan font-bold">第二類</span>
                                <p className="text-white/70">去「る」+ ない</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-electric-cyan font-bold">第三類</span>
                                <p className="text-white/70">する → しない<br /><FuriganaText text="来{く}る" /> → <FuriganaText text="来{こ}ない" /></p>
                            </div>
                        </div>

                        <div className="space-y-4 border-t border-white/10 pt-4">
                            <div className="bg-sakura-pink/5 p-4 rounded-xl">
                                <div className="text-sm font-bold text-sakura-pink mb-2">例句練習：</div>
                                <div className="text-lg italic font-zen mb-1">
                                    <FuriganaText text="今日{きょう}は　お酒{さけ}を　飲{の}まない　つもりです。" />
                                </div>
                                <div className="text-sm text-white/40">( 今天打算不喝酒。 )</div>
                                <div className="mt-4 text-xs space-y-1 text-white/50">
                                    <p>• <strong>單字：</strong> <FuriganaText text="飲{よ}む" /> (第一類) → <FuriganaText text="飲{の}まない" /></p>
                                    <p>• <strong>陷阱：</strong> 字尾為「う」者變「わ」(如：<FuriganaText text="買{か}う" /> → <FuriganaText text="買{か}わない" />)。</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. た形 */}
                    <div className="card space-y-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-sakura-pink mb-1">4. た形 (過去形)</h3>
                                <p className="text-white/60 text-sm">用法：表示過去發生的動作、經驗。</p>
                            </div>
                            <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-wider">Past Form</div>
                        </div>

                        <div className="bg-electric-cyan/10 border-l-4 border-electric-cyan p-4 rounded-r mb-4">
                            <p className="text-sm text-electric-cyan font-bold italic">
                                重要：變化規則與「て形」完全相同，只需將「て/で」換成「た/だ」。
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <div className="bg-sakura-pink/5 p-4 rounded-xl">
                                <div className="text-sm font-bold text-sakura-pink mb-2">例句練習：</div>
                                <div className="text-lg italic font-zen mb-1">
                                    <FuriganaText text="私{わたし}は　富士{ふじ}山{さん}に　登{のぼ}った　ことが　あります。" />
                                </div>
                                <div className="text-sm text-white/40">( 我曾爬過富士山。 )</div>
                                <div className="mt-4 text-xs space-y-1 text-white/50">
                                    <p>• <strong>單字：</strong> <FuriganaText text="登{のぼ}る" /> (第一類) → <FuriganaText text="登{のぼ}った" /></p>
                                    <p>• <strong>陷阱：</strong> <FuriganaText text="登{のぼ}る" /> 字尾「る」需變促音便「った」，不要誤判為第二類。</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5. 辞書形 */}
                    <div className="card space-y-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-sakura-pink mb-1">5. 辭書形 (字典形 / 原型)</h3>
                                <p className="text-white/60 text-sm">用法：字典原始標示，用於口語肯定、能力、計畫或修飾名詞。</p>
                            </div>
                            <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-wider">Dictionary Form</div>
                        </div>

                        <div className="space-y-4 pt-4">
                            <div className="bg-sakura-pink/5 p-4 rounded-xl">
                                <div className="text-sm font-bold text-sakura-pink mb-2">例句練習：</div>
                                <div className="text-lg italic font-zen mb-1">
                                    <FuriganaText text="明日{あした}　友{とも}達{だち}に　会{あ}う　約{やく}束{そく}が　あります。" />
                                </div>
                                <div className="text-sm text-white/40">( 有明天要和朋友見面的約定。 )</div>
                                <div className="mt-4 text-xs space-y-1 text-white/50">
                                    <p>• <strong>用法：</strong> 使用動詞原型修飾後方的名詞「<FuriganaText text="約{やく}束{そく}" />」。</p>
                                    <p>• <strong>陷阱：</strong> 在正式場合單獨使用原型會顯得不夠禮貌 (太粗魯)。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 練習題 */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-electric-cyan mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-electric-cyan/20 flex items-center justify-center text-sm">03</span>
                        課後提問練習
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="card border-t-4 border-sakura-pink p-6">
                            <p className="text-sm mb-4">Q1. 請將動詞「<FuriganaText text="話{はな}す" />」(第一類) 轉換為「ない形」。</p>
                            <details className="text-xs group">
                                <summary className="cursor-pointer text-sakura-pink hover:text-white transition-colors font-bold select-none list-none bg-white/5 px-3 py-2 rounded-lg text-center">查看答案</summary>
                                <div className="mt-4 p-4 glass rounded-xl space-y-2">
                                    <p className="font-bold text-base"><FuriganaText text="話{はな}さない" /></p>
                                    <p className="text-white/50">解說：字尾「す」轉為「あ段」的「さ」加「ない」。</p>
                                </div>
                            </details>
                        </div>
                        <div className="card border-t-4 border-electric-cyan p-6">
                            <p className="text-sm mb-4">Q2. 請將動詞「<FuriganaText text="食{た}べる" />」(第二類) 轉換為「て形」。</p>
                            <details className="text-xs group">
                                <summary className="cursor-pointer text-electric-cyan hover:text-white transition-colors font-bold select-none list-none bg-white/5 px-3 py-2 rounded-lg text-center">查看答案</summary>
                                <div className="mt-4 p-4 glass rounded-xl space-y-2">
                                    <p className="font-bold text-base"><FuriganaText text="食{た}べて" /></p>
                                    <p className="text-white/50">解說：第二類動詞去「る」直接加「て」。</p>
                                </div>
                            </details>
                        </div>
                        <div className="card border-t-4 border-yellow-400 p-6">
                            <p className="text-sm mb-4">Q3. 請將動詞「<FuriganaText text="来{く}る" />」(第三類) 轉換為「た形」。</p>
                            <details className="text-xs group">
                                <summary className="cursor-pointer text-yellow-400 hover:text-white transition-colors font-bold select-none list-none bg-white/5 px-3 py-2 rounded-lg text-center">查看答案</summary>
                                <div className="mt-4 p-4 glass rounded-xl space-y-2">
                                    <p className="font-bold text-base"><FuriganaText text="来{き}た" /></p>
                                    <p className="text-white/50">解說：固定變化，讀音由「く」變為「き」。</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </section>

                {/* 重點提醒 */}
                <section className="card bg-gradient-to-br from-indigo-900/40 to-slate-900/40 border-indigo-500/20">
                    <h2 className="text-2xl font-bold text-white mb-6">重點總結與混淆提醒</h2>
                    <div className="space-y-6 text-sm text-white/80">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center font-bold text-indigo-400">1</div>
                            <div>
                                <h4 className="font-bold text-white mb-1">第一類與第二類的辨別</h4>
                                <p>有些動詞外表像第二類 (如：<FuriganaText text="帰{かえ}る" />、<FuriganaText text="切{き}る" />)，但實際上是第一類。判斷時若「い/え段」在「る」前面，通常是第二類，但例外不少，需個別記憶。</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center font-bold text-indigo-400">2</div>
                            <div>
                                <h4 className="font-bold text-white mb-1">音便適用對象</h4>
                                <p>只有「第一類動詞」在「て形」與「た形」時需要音便，第二、三類動詞絕對不需要。</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center font-bold text-indigo-400">3</div>
                            <div>
                                <h4 className="font-bold text-white mb-1">ない形的「う/わ」變化</h4>
                                <p>只要動詞原型最後一個字是「う」(如：<FuriganaText text="買{か}う" />)，否定一律用「わ」而不是「あ」。</p>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default VerbConjugationGuide
