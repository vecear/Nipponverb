import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FuriganaText from '../components/FuriganaText'

const DifficultyBadge = ({ level }: { level: 'easy' | 'medium' | 'hard' }) => {
    const config = {
        easy: { label: '簡單', class: 'bg-green-500/20 text-green-400 border-green-500/30' },
        medium: { label: '中級', class: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
        hard: { label: '困難', class: 'bg-red-500/20 text-red-400 border-red-500/30' }
    }
    return (
        <span className={`text-[10px] px-2 py-0.5 rounded border ${config[level].class} font-bold`}>
            {config[level].label}
        </span>
    )
}

const LearningTip = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-indigo-500/10 border-l-4 border-indigo-400 p-4 rounded-r-xl my-4">
        <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            教學重點：{title}
        </h4>
        <div className="text-sm text-indigo-900/70 leading-relaxed font-japanese">
            {children}
        </div>
    </div>
)

const VerbConjugationGuide = () => {
    const { t } = useTranslation()

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-20">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <Link to="/verbs" className="text-indigo-900/90 hover:text-indigo-700 mb-2 inline-block">← {t('common.back')}</Link>
                    <h1 className="text-3xl md:text-5xl font-zen font-bold text-gradient">動詞活用完全指南</h1>
                    <p className="text-lg text-indigo-900/70 mt-4 leading-relaxed">
                        這是一份為你量身打造的實戰指南。我們不只告訴你「怎麼變」，還會告訴你「為什麼這樣變」。
                    </p>
                </div>
            </div>

            <article className="space-y-16">
                {/* 01. 三類別概覽 */}
                <section>
                    <h2 className="text-2xl font-bold text-electric-cyan mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-electric-cyan/20 flex items-center justify-center text-sm">01</span>
                        日文動詞三類別概覽
                    </h2>
                    <div className="card grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <h3 className="font-bold text-sakura-pink">第一類 (五段動詞)</h3>
                            <p className="text-sm text-indigo-900/90">字尾散佈於「五段」音，變化最為多樣。</p>
                        </div>
                        <div className="space-y-2 border-l border-white/10 md:pl-6 pl-0 border-l-0 md:border-l">
                            <h3 className="font-bold text-sakura-pink">第二類 (一段動詞)</h3>
                            <p className="text-sm text-indigo-900/90">字尾必為「る」，且前一音為「い段」或「え段」。</p>
                        </div>
                        <div className="space-y-2 border-l border-white/10 md:pl-6 pl-0 border-l-0 md:border-l">
                            <h3 className="font-bold text-sakura-pink">第三類 (不規則)</h3>
                            <p className="text-sm text-indigo-900/90">只有「する」與「來る」，是所有變化的基礎。</p>
                        </div>
                    </div>
                </section>

                {/* 02. 常用五大變化 */}
                <section className="space-y-16">
                    <h2 className="text-2xl font-bold text-electric-cyan mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-electric-cyan/20 flex items-center justify-center text-sm">02</span>
                        常用五大變化型態
                    </h2>

                    {/* 1. ます形 */}
                    <div className="card space-y-6">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold text-sakura-pink">1. ます形 (禮貌形)</h3>
                            <div className="px-3 py-1 bg-indigo-900/5 rounded-full text-[10px] font-mono uppercase tracking-wider">Polite Form</div>
                        </div>

                        <LearningTip title="i-段音的橋樑作用">
                            日文動詞的原型結尾都在「う段」（如：<i>ku, mu, ru</i>）。為了連接禮貌后缀「ます」，我們需要一個中介音。
                            在第一類動詞中，我們會將結尾音往「い段」移動一格（如：<i>ku → ki, mu → mi</i>），這個「い」音就像一座橋，讓單字聽起來更柔和。
                        </LearningTip>

                        <div className="space-y-4">
                            <div className="bg-indigo-900/5 rounded-xl border border-indigo-900/10 transition-all">
                                <div className="p-4 font-bold flex items-center justify-between select-none">
                                    <span>詳細規則教學 (第一、二、三類)</span>
                                </div>
                                <div className="p-4 pt-0 space-y-4 border-t border-indigo-900/5 text-sm leading-relaxed">
                                    <p>● <strong>第一類 (五段)：</strong> 將字尾音從「う段」改為「い段」。例如：<FuriganaText text="書{か}く" /> → <FuriganaText text="書{か}き" /> + ます。</p>
                                    <p>● <strong>第二類 (一段)：</strong> 最簡單！直接把「る」拿掉。例如：<FuriganaText text="食{た}べる" /> → <FuriganaText text="食{た}べ" /> + ます。</p>
                                    <p>● <strong>第三類 (不規則)：</strong> する變為「します」；<FuriganaText text="来{く}る" /> 讀音變為「き」變成「來ます」。</p>
                                </div>
                            </div>

                            <div className="bg-indigo-900/5 rounded-xl border border-indigo-900/10 transition-all">
                                <div className="p-4 font-bold flex items-center justify-between select-none">
                                    <span>例句</span>
                                </div>
                                <div className="p-4 pt-0 space-y-4 border-t border-indigo-900/5">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2"><DifficultyBadge level="easy" /><FuriganaText text="明日{あした}　公{こう}園{えん}へ　行{い}きます。" /></div>
                                        <p className="text-xs text-indigo-900/40">明天要去公園。 (行く → 往「い段」跳一格變為 き)</p>
                                    </div>
                                    <div className="space-y-1 border-t border-indigo-900/5 pt-2">
                                        <div className="flex items-center gap-2"><DifficultyBadge level="medium" /><FuriganaText text="もうすぐ　試{し}驗{けん}協助　始{はじ}まります。" /></div>
                                        <p className="text-xs text-indigo-900/40">考試馬上就要開始了。 (始まる → る變為 り)</p>
                                    </div>
                                    <div className="space-y-1 border-t border-indigo-900/5 pt-2">
                                        <div className="flex items-center gap-2"><DifficultyBadge level="hard" /><FuriganaText text="先{せん}生{せい}に　よろしく　申{もう}し上{あ}げます。" /></div>
                                        <p className="text-xs text-indigo-900/40">向老師致以問候。 (謙讓語的活用，原理相同)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-indigo-900/5 rounded-xl border border-indigo-900/10 transition-all">
                                <div className="p-4 font-bold flex items-center justify-between select-none">
                                    <span>自我檢測</span>
                                </div>
                                <div className="p-4 pt-0 space-y-6 border-t border-indigo-900/5">
                                    <div className="space-y-3">
                                        <p className="text-sm flex items-center gap-2"><DifficultyBadge level="easy" />將「食べる」變為ます形。</p>
                                        <details className="text-xs"><summary className="cursor-pointer text-sakura-pink underline">查看詳解</summary><div className="mt-2 p-3 bg-indigo-900/5 rounded-lg">答案：<FuriganaText text="食{た}べます" />。第二類動詞去「る」直接加「ます」。</div></details>
                                    </div>
                                    <div className="space-y-3 border-t border-indigo-900/5 pt-4">
                                        <p className="text-sm flex items-center gap-2"><DifficultyBadge level="medium" />將「走る」變為ます形。</p>
                                        <details className="text-xs"><summary className="cursor-pointer text-sakura-pink underline">查看詳解</summary><div className="mt-2 p-3 bg-indigo-900/5 rounded-lg">答案：<FuriganaText text="走{はし}ります" />。注意：<FuriganaText text="走{はし}る" /> 是第一類動詞（例外），不可去「る」加「ます」，須將「る」變「り」。</div></details>
                                    </div>
                                    <div className="space-y-3 border-t border-indigo-900/5 pt-4">
                                        <p className="text-sm flex items-center gap-2"><DifficultyBadge level="hard" />將「来る」變為ます形。</p>
                                        <details className="text-xs"><summary className="cursor-pointer text-sakura-pink underline">查看詳解</summary><div className="mt-2 p-3 bg-indigo-900/5 rounded-lg">答案：<FuriganaText text="来{き}ます" />。第三類不規則動詞，讀音從「く」變為「き」。</div></details>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. て形 */}
                    <div className="card space-y-6">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold text-sakura-pink">2. て形 (連結形)</h3>
                            <div className="px-3 py-1 bg-indigo-900/5 rounded-full text-[10px] font-mono uppercase tracking-wider">Te-Form</div>
                        </div>

                        <LearningTip title="音便：為了發音舒服的妥協">
                            想像你說「<i>Kakite</i>」很多次，舌頭會覺得很累。日本人為了說得更快、更流利，發明了「音便」。
                            結尾音會根據舌頭位置變形成「促音 (っ)」、「鼻音 (ん)」或「い音」。
                            <strong>小秘訣：</strong>如果字尾音有濁點（如：<i>gu/bu</i>），變出來的「て」也要變濁音「で」！
                        </LearningTip>

                        <div className="bg-electric-cyan/10 border-l-4 border-electric-cyan p-4 rounded-r">
                            <h4 className="text-sm font-bold text-electric-cyan mb-3">第一類音便詳細圖解 (加強版)：</h4>
                            <div className="grid grid-cols-1 gap-4 text-sm">
                                <div className="bg-indigo-900/5 p-4 rounded-lg border border-indigo-900/10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 text-xs font-bold border border-pink-500/30">促音便</span>
                                        <p className="font-bold text-indigo-900">う・つ・る → って</p>
                                    </div>
                                    <p className="text-indigo-900/90 text-xs mb-3">字尾變成小小的「っ」，發音時計得要停頓一下。</p>
                                    <div className="space-y-2 pl-2 border-l-2 border-indigo-900/10">
                                        <div className="flex items-center gap-2">
                                            <span className="text-indigo-900/40 text-xs">①</span>
                                            <div className="flex items-center gap-2"><FuriganaText text="買{か}う" /> (u) <span className="text-indigo-900/30">→</span> <FuriganaText text="買{か}って" /></div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-indigo-900/40 text-xs">②</span>
                                            <div className="flex items-center gap-2"><FuriganaText text="待{ま}つ" /> (tsu) <span className="text-indigo-900/30">→</span> <FuriganaText text="待{ま}って" /></div>
                                        </div>
                                        <div className="flex items-center gap-2 bg-yellow-500/10 p-1 -ml-1 rounded">
                                            <span className="text-yellow-500 text-xs">★</span>
                                            <div className="flex items-center gap-2"><FuriganaText text="帰{かえ}る" /> (ru) <span className="text-indigo-900/30">→</span> <FuriganaText text="帰{かえ}って" /></div>
                                            <span className="text-[10px] text-yellow-400/80 ml-auto">(例外! 雖然是る結尾但屬第一類)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-indigo-900/5 p-4 rounded-lg border border-indigo-900/10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">鼻音便</span>
                                        <p className="font-bold text-indigo-900">ぬ・ぶ・む → んで</p>
                                    </div>
                                    <p className="text-indigo-900/90 text-xs mb-3">變成有鼻音的「ん」，而且後面接的要是濁音「で」。</p>
                                    <div className="space-y-2 pl-2 border-l-2 border-indigo-900/10">
                                        <div className="flex items-center gap-2">
                                            <span className="text-indigo-900/40 text-xs">①</span>
                                            <div className="flex items-center gap-2"><FuriganaText text="遊{あそ}ぶ" /> (bu) <span className="text-indigo-900/30">→</span> <FuriganaText text="遊{あそ}んで" /></div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-indigo-900/40 text-xs">②</span>
                                            <div className="flex items-center gap-2"><FuriganaText text="読{よ}む" /> (mu) <span className="text-indigo-900/30">→</span> <FuriganaText text="読{よ}んで" /></div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-indigo-900/40 text-xs">③</span>
                                            <div className="flex items-center gap-2"><FuriganaText text="死{し}ぬ" /> (nu) <span className="text-indigo-900/30">→</span> <FuriganaText text="死{し}んで" /></div>
                                            <span className="text-[10px] text-indigo-900/30 ml-auto">(唯一的 nu 結尾動詞)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-indigo-900/5 p-4 rounded-lg border border-indigo-900/10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-300 text-xs font-bold border border-green-500/30">い音便</span>
                                        <p className="font-bold text-indigo-900">く → いて / ぐ → いで</p>
                                    </div>
                                    <p className="text-indigo-900/90 text-xs mb-3">發音變得像滑過去一樣。如果原字有濁點(ten-ten)，後面也要加濁點！</p>
                                    <div className="space-y-2 pl-2 border-l-2 border-indigo-900/10">
                                        <div className="flex items-center gap-2">
                                            <span className="text-indigo-900/40 text-xs">①</span>
                                            <div className="flex items-center gap-2"><FuriganaText text="書{か}く" /> (ku) <span className="text-indigo-900/30">→</span> <FuriganaText text="書{か}いて" /></div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-indigo-900/40 text-xs">②</span>
                                            <div className="flex items-center gap-2"><FuriganaText text="聞{き}く" /> (ku) <span className="text-indigo-900/30">→</span> <FuriganaText text="聞{き}いて" /></div>
                                        </div>
                                        <div className="flex items-center gap-2 bg-green-500/10 p-1 -ml-1 rounded">
                                            <span className="text-green-400 text-xs">★</span>
                                            <div className="flex items-center gap-2"><FuriganaText text="泳{およ}ぐ" /> (gu) <span className="text-indigo-900/30">→</span> <FuriganaText text="泳{およ}いで" /></div>
                                            <span className="text-[10px] text-green-400/80 ml-auto">(濁音變濁音！)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-indigo-900/5 p-4 rounded-lg border border-indigo-900/10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-300 text-xs font-bold border border-red-500/30">特殊例外</span>
                                        <p className="font-bold text-indigo-900">行く → 行って</p>
                                    </div>
                                    <p className="text-indigo-900/90 text-xs mb-3">雖然是「ku」結尾，但因為發音習慣，它不變成「い」而變成促音「っ」。</p>
                                    <div className="space-y-2 pl-2 border-l-2 border-indigo-900/10">
                                        <div className="flex items-center gap-2">
                                            <span className="text-indigo-900/40 text-xs">①</span>
                                            <div className="flex items-center gap-2"><FuriganaText text="行{い}く" /> (Go) <span className="text-indigo-900/30">→</span> <FuriganaText text="行{い}って" /></div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-indigo-900/40 text-xs">②</span>
                                            <div className="flex items-center gap-2"><FuriganaText text="連{つ}れて行{い}く" /> (複合) <span className="text-indigo-900/30">→</span> <FuriganaText text="連{つ}れて行{い}って" /></div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-indigo-900/40 text-xs">③</span>
                                            <div className="flex items-center gap-2"><FuriganaText text="持{も}って行{い}く" /> (複合) <span className="text-indigo-900/30">→</span> <FuriganaText text="持{も}って行{い}って" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 偽裝動詞陷阱區 */}
                        <div className="mt-4 bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-xl">
                            <h4 className="text-sm font-bold text-red-400 mb-3 flex items-center gap-2">
                                <span className="text-lg">⚠️</span>
                                常見陷阱：偽裝成「二類」的「一類動詞」
                            </h4>
                            <p className="text-sm text-indigo-900/70 mb-4 leading-relaxed">
                                這些動詞雖然結尾是「iru」或「eru」，看起來很像二類動詞（一段），但它們其實是<strong>一類動詞（五段）</strong>！
                                所以在變化時，必須照著「う・つ・る → って」的促音便規則，而不能直接去る。
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                <div className="bg-black/20 p-3 rounded border border-white/5 flex flex-col gap-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="flex items-center gap-1 font-bold"><FuriganaText text="帰{かえ}る" /> <span className="text-[10px] text-white/40">(回家)</span></div>
                                        <span className="text-xs text-red-300 font-mono">iru ❌</span>
                                    </div>
                                    <div className="text-xs text-white/50">變形：<FuriganaText text="帰{かえ}って" /></div>
                                </div>
                                <div className="bg-black/20 p-3 rounded border border-white/5 flex flex-col gap-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="flex items-center gap-1 font-bold"><FuriganaText text="入{はい}る" /> <span className="text-[10px] text-white/40">(進入)</span></div>
                                        <span className="text-xs text-red-300 font-mono">iru ❌</span>
                                    </div>
                                    <div className="text-xs text-white/50">變形：<FuriganaText text="入{はい}って" /></div>
                                </div>
                                <div className="bg-black/20 p-3 rounded border border-white/5 flex flex-col gap-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="flex items-center gap-1 font-bold"><FuriganaText text="走{はし}る" /> <span className="text-[10px] text-white/40">(奔跑)</span></div>
                                        <span className="text-xs text-red-300 font-mono">iru ❌</span>
                                    </div>
                                    <div className="text-xs text-white/50">變形：<FuriganaText text="走{はし}って" /></div>
                                </div>
                                <div className="bg-black/20 p-3 rounded border border-white/5 flex flex-col gap-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="flex items-center gap-1 font-bold"><FuriganaText text="知{し}る" /> <span className="text-[10px] text-white/40">(知道)</span></div>
                                        <span className="text-xs text-red-300 font-mono">iru ❌</span>
                                    </div>
                                    <div className="text-xs text-white/50">變形：<FuriganaText text="知{し}って" /></div>
                                </div>
                                <div className="bg-black/20 p-3 rounded border border-white/5 flex flex-col gap-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="flex items-center gap-1 font-bold"><FuriganaText text="切{き}る" /> <span className="text-[10px] text-white/40">(切剪)</span></div>
                                        <span className="text-xs text-red-300 font-mono">iru ❌</span>
                                    </div>
                                    <div className="text-xs text-white/50">變形：<FuriganaText text="切{き}って" /></div>
                                </div>
                                <div className="bg-black/20 p-3 rounded border border-white/5 flex flex-col gap-1 justify-center items-center text-center">
                                    <p className="text-xs text-indigo-300 font-bold">口訣記憶法</p>
                                    <p className="text-sm font-bold">「走入歸知切」</p>
                                    <p className="text-[10px] text-white/30">全部都要變促音 (って)</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white/5 rounded-xl border border-white/10 transition-all">
                                <div className="p-4 font-bold flex items-center justify-between select-none">
                                    <span>例句</span>
                                </div>
                                <div className="p-4 pt-0 space-y-4 border-t border-white/5">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2"><DifficultyBadge level="easy" /><FuriganaText text="窓{まど}を　開{あ}けてください。" /></div>
                                        <p className="text-xs text-white/40">請打開窗戶。 (第二類：去る加て)</p>
                                    </div>
                                    <div className="space-y-1 border-t border-white/5 pt-2">
                                        <div className="flex items-center gap-2"><DifficultyBadge level="medium" /><FuriganaText text="藥{くすり}を　飲{の}んで　寢{ね}ました。" /></div>
                                        <p className="text-xs text-white/40">吃了藥後就睡了。 (鼻音便：mu變為nde)</p>
                                    </div>
                                    <div className="space-y-1 border-t border-white/5 pt-2">
                                        <div className="flex items-center gap-2"><DifficultyBadge level="hard" /><FuriganaText text="お荷{に}物{もつ}を　預{あず}かっております。" /></div>
                                        <p className="text-xs text-white/40">正為您保管行李。 (促音便：ru變為tte)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 rounded-xl border border-white/10 transition-all">
                                <div className="p-4 font-bold flex items-center justify-between select-none">
                                    <span>自我檢測</span>
                                </div>
                                <div className="p-4 pt-0 space-y-6 border-t border-white/5">
                                    <div className="space-y-3">
                                        <p className="text-sm flex items-center gap-2"><DifficultyBadge level="easy" />將「見る」變為て形。</p>
                                        <details className="text-xs"><summary className="cursor-pointer text-sakura-pink underline">查看詳解</summary><div className="mt-2 p-3 bg-white/5 rounded-lg">答案：<FuriganaText text="見{み}て" />。第二類動詞去「る」加「て」。</div></details>
                                    </div>
                                    <div className="space-y-3 border-t border-white/5 pt-4">
                                        <p className="text-sm flex items-center gap-2"><DifficultyBadge level="medium" />將「死ぬ」變為て形。</p>
                                        <details className="text-xs"><summary className="cursor-pointer text-sakura-pink underline">查看詳解</summary><div className="mt-2 p-3 bg-white/5 rounded-lg">答案：<FuriganaText text="死{し}んで" />。第一類鼻音便。字尾「ぬ」變為「んで」。</div></details>
                                    </div>
                                    <div className="space-y-3 border-t border-white/5 pt-4">
                                        <p className="text-sm flex items-center gap-2"><DifficultyBadge level="hard" />將「代わる」變為て形。</p>
                                        <details className="text-xs"><summary className="cursor-pointer text-sakura-pink underline">查看詳解</summary><div className="mt-2 p-3 bg-white/5 rounded-lg">答案：<FuriganaText text="代{か}わって" />。第一類促音便。字尾為「る」的五段動詞變為「って」。</div></details>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. ない形 */}
                    <div className="card space-y-6">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold text-sakura-pink">3. ない形 (否定形)</h3>
                            <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-wider">Negative Form</div>
                        </div>

                        <LearningTip title="向 a-段音的全面撤退">
                            要表示「否定」，結尾音會往相反方向——也就是 Hiragana 表的第一行「あ段」移動（如：<i>ku → ka, mu → ma</i>）。
                            此外，如果動詞字尾是單獨的「う」（如：<i>a-u, ka-u</i>），為了避免兩個母音連在一起不好發音，日本人會強制把它變成「わ」（<i>wa</i>）。
                        </LearningTip>

                        <div className="space-y-4">
                            <div className="bg-white/5 rounded-xl border border-white/10 transition-all">
                                <div className="p-4 font-bold flex items-center justify-between select-none">
                                    <span>詳細規則教學</span>
                                </div>
                                <div className="p-4 pt-0 space-y-4 border-t border-white/5 text-sm leading-relaxed">
                                    <p>● <strong>第一類 (五段)：</strong> 字尾改為「あ段」音。<strong>注意：</strong>「う」結尾要變成「わ」。</p>
                                    <p>● <strong>第二類 (一段)：</strong> 同樣去「る」直接加「ない」。</p>
                                    <p>● <strong>第三類 (不規則)：</strong> する→しない；<FuriganaText text="来{く}る" />→<FuriganaText text="来{こ}ない" /> (讀音變為ko)。</p>
                                </div>
                            </div>

                            <div className="bg-white/5 rounded-xl border border-white/10 transition-all">
                                <div className="p-4 font-bold flex items-center justify-between select-none">
                                    <span>例句</span>
                                </div>
                                <div className="p-4 pt-0 space-y-4 border-t border-white/5">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2"><DifficultyBadge level="easy" /><FuriganaText text="何{なに}物{も}　買{か}わない　つもりです。" /></div>
                                        <p className="text-xs text-white/40">打算什麼都不買。 (買動詞變為 買わない 的經典例子)</p>
                                    </div>
                                    <div className="space-y-1 border-t border-white/5 pt-2">
                                        <div className="flex items-center gap-2"><DifficultyBadge level="medium" /><FuriganaText text="無{む}理{り}を　しないほうが　いいです。" /></div>
                                        <p className="text-xs text-white/40">最好不要勉強。 (做事情不做：suru → shinai)</p>
                                    </div>
                                    <div className="space-y-1 border-t border-white/5 pt-2">
                                        <div className="flex items-center gap-2"><DifficultyBadge level="hard" /><FuriganaText text="その　表{ひょう}現{げん}協助　用{もち}いない。" /></div>
                                        <p className="text-xs text-white/40">不使用那個表達方式。 (一段動詞去る加nai)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 rounded-xl border border-white/10 transition-all">
                                <div className="p-4 font-bold flex items-center justify-between select-none">
                                    <span>自我檢測</span>
                                </div>
                                <div className="p-4 pt-0 space-y-6 border-t border-white/5">
                                    <div className="space-y-3">
                                        <p className="text-sm flex items-center gap-2"><DifficultyBadge level="easy" />將「泳ぐ」變為ない形。</p>
                                        <details className="text-xs"><summary className="cursor-pointer text-sakura-pink underline">查看詳解</summary><div className="mt-2 p-3 bg-white/5 rounded-lg">答案：<FuriganaText text="泳{およ}がない" />。第一類「ぐ」變為其「あ段」音「が」加「ない」。</div></details>
                                    </div>
                                    <div className="space-y-3 border-t border-white/5 pt-4">
                                        <p className="text-sm flex items-center gap-2"><DifficultyBadge level="medium" />將「買う」變為ない形。</p>
                                        <details className="text-xs"><summary className="cursor-pointer text-sakura-pink underline">查看詳解</summary><div className="mt-2 p-3 bg-white/5 rounded-lg">答案：<FuriganaText text="買{か}わない" />。重要：字尾是「う」的動詞，否定必須變為「わ」而非「あ」。</div></details>
                                    </div>
                                    <div className="space-y-3 border-t border-white/5 pt-4">
                                        <p className="text-sm flex items-center gap-2"><DifficultyBadge level="hard" />將「来る」變為ない形。</p>
                                        <details className="text-xs"><summary className="cursor-pointer text-sakura-pink underline">查看詳解</summary><div className="mt-2 p-3 bg-white/5 rounded-lg">答案：<FuriganaText text="来{こ}ない" />。不規則動詞，注意讀音變換為「こ」。</div></details>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. た形 */}
                    <div className="card space-y-6">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold text-sakura-pink">4. た形 (過去形)</h3>
                            <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-wider">Past Form</div>
                        </div>

                        <LearningTip title="買一送一的「た」規則">
                            如果你已經學會了「て形」，恭喜你！「た形」的變化規則跟它 **100% 一模一樣**。
                            只要把 <i>te/de</i> 換成 <i>ta/da</i> 就可以了。記住一個，等於掌握兩個。
                        </LearningTip>

                        <div className="space-y-4">
                            <div className="bg-white/5 rounded-xl border border-white/10 transition-all">
                                <div className="p-4 font-bold flex items-center justify-between select-none">
                                    <span>例句</span>
                                </div>
                                <div className="p-4 pt-0 space-y-4 border-t border-white/5">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2"><DifficultyBadge level="easy" /><FuriganaText text="昨日{きのう}　映{えい}畫{家}を　見{み}た。" /></div>
                                        <p className="text-xs text-white/40">昨天看了電影。 (一段動詞去る加ta)</p>
                                    </div>
                                    <div className="space-y-1 border-t border-white/5 pt-2">
                                        <div className="flex items-center gap-2"><DifficultyBadge level="medium" /><FuriganaText text="やっと　目{もく}標{我}を　達{たっ}成{せい}した。" /></div>
                                        <p className="text-xs text-white/40">終於達成了目標。 (suru變為shita)</p>
                                    </div>
                                    <div className="space-y-1 border-t border-white/5 pt-2">
                                        <div className="flex items-center gap-2"><DifficultyBadge level="hard" /><FuriganaText text="思{おも}い切{き}過{就}　決{けつ}斷{だん}した。" /></div>
                                        <p className="text-xs text-white/40">下定決心做了決定。 (促音便：ru變為tta)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 rounded-xl border border-white/10 transition-all">
                                <div className="p-4 font-bold flex items-center justify-between select-none">
                                    <span>自我檢測</span>
                                </div>
                                <div className="p-4 pt-0 space-y-6 border-t border-white/5">
                                    <div className="space-y-3">
                                        <p className="text-sm flex items-center gap-2"><DifficultyBadge level="easy" />將「書く」變為た形。</p>
                                        <details className="text-xs"><summary className="cursor-pointer text-sakura-pink underline">查看詳解</summary><div className="mt-2 p-3 bg-white/5 rounded-lg">答案：<FuriganaText text="書{か}いた" />。第一類い音便，「く」變為「いた」。</div></details>
                                    </div>
                                    <div className="space-y-3 border-t border-white/5 pt-4">
                                        <p className="text-sm flex items-center gap-2"><DifficultyBadge level="medium" />將「運ぶ」變為た形。</p>
                                        <details className="text-xs"><summary className="cursor-pointer text-sakura-pink underline">查看詳解</summary><div className="mt-2 p-3 bg-white/5 rounded-lg">答案：<FuriganaText text="運{はこ}んだ" />。第一類鼻音便，「ぶ」變為「んだ」。注意是濁音！</div></details>
                                    </div>
                                    <div className="space-y-3 border-t border-white/5 pt-4">
                                        <p className="text-sm flex items-center gap-2"><DifficultyBadge level="hard" />將「受ける」變為た形。</p>
                                        <details className="text-xs"><summary className="cursor-pointer text-sakura-pink underline">查看詳解</summary><div className="mt-2 p-3 bg-white/5 rounded-lg">答案：<FuriganaText text="受{う}けた" />。第二類動詞去「る」直接加「た」。要注意不要跟「受かる（第一類）」混淆。</div></details>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5. 辭書形 */}
                    <div className="card space-y-6">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold text-sakura-pink">5. 辭書形 (字典形 / 原型)</h3>
                            <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono uppercase tracking-wider">Dictionary Form</div>
                        </div>

                        <LearningTip title="動詞的「裸體」原型">
                            這是動詞最原始、沒穿衣服的樣子。它是所有變化的起點，也是你在字典裡會找到的樣子。
                            在口語中，對親近的朋友說話時可以直接用原型；在文法上，它則扮演著修飾後方名詞的重要角色。
                        </LearningTip>

                        <div className="space-y-4">
                            <div className="bg-white/5 rounded-xl border border-white/10 transition-all">
                                <div className="p-4 font-bold flex items-center justify-between select-none">
                                    <span>例句</span>
                                </div>
                                <div className="p-4 pt-0 space-y-4 border-t border-white/5">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2"><DifficultyBadge level="easy" /><FuriganaText text="毎日{まいにち}　漢{かん}字{じ}を　書{か}く。" /></div>
                                        <p className="text-xs text-white/40">每天寫漢字。 (用於隨意交談)</p>
                                    </div>
                                    <div className="space-y-1 border-t border-white/5 pt-2">
                                        <div className="flex items-center gap-2"><DifficultyBadge level="medium" /><FuriganaText text="明日{あした}　友{とも}達{だ利}に　会{あ}う　約{やく}束{そく}が　ある。" /></div>
                                        <p className="text-xs text-white/40">有明天要和朋友見面的約定。 (原型修飾名詞「約定」)</p>
                                    </div>
                                    <div className="space-y-1 border-t border-white/5 pt-2">
                                        <div className="flex items-center gap-2"><DifficultyBadge level="hard" /><FuriganaText text="計{けい}畫{かく}を　遂{と}げる　ことができる。" /></div>
                                        <p className="text-xs text-white/40">能夠達成計畫。 (固定句型：原型+ことができる)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 rounded-xl border border-white/10 transition-all">
                                <div className="p-4 font-bold flex items-center justify-between select-none">
                                    <span>自我檢測</span>
                                </div>
                                <div className="p-4 pt-0 space-y-6 border-t border-white/5">
                                    <div className="space-y-3">
                                        <p className="text-sm flex items-center gap-2"><DifficultyBadge level="easy" />「話します」的原型是什麼？</p>
                                        <details className="text-xs"><summary className="cursor-pointer text-sakura-pink underline">查看詳解</summary><div className="mt-2 p-3 bg-white/5 rounded-lg">答案：<FuriganaText text="話{はな}す" />。從「い段」音變回「う段」音。</div></details>
                                    </div>
                                    <div className="space-y-3 border-t border-white/5 pt-4">
                                        <p className="text-sm flex items-center gap-2"><DifficultyBadge level="medium" />「開けます」的原型是什麼？</p>
                                        <details className="text-xs"><summary className="cursor-pointer text-sakura-pink underline">查看詳解</summary><div className="mt-2 p-3 bg-white/5 rounded-lg">答案：<FuriganaText text="開{あ}ける" />。一段動詞，將「ます」替換為「る」。</div></details>
                                    </div>
                                    <div className="space-y-3 border-t border-white/5 pt-4">
                                        <p className="text-sm flex items-center gap-2"><DifficultyBadge level="hard" />「きます」的原型有兩個，分別對應「來」與「穿」，請寫出後者。</p>
                                        <details className="text-xs"><summary className="cursor-pointer text-sakura-pink underline">查看詳解</summary><div className="mt-2 p-3 bg-white/5 rounded-lg">答案：<FuriganaText text="着{き}る" />。注意「來る」是第三類，但「著る」是第二類的一段動詞。</div></details>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 03. 重點提醒 */}
                <section className="card bg-gradient-to-br from-indigo-900/40 to-slate-900/40 border-indigo-500/20">
                    <h2 className="text-2xl font-bold text-white mb-6">終極複習：活用變換的關鍵筆記</h2>
                    <div className="space-y-6 text-sm text-white/80">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center font-bold text-indigo-400">1</div>
                            <div>
                                <h4 className="font-bold text-white mb-1">判斷類別是第一步</h4>
                                <p>如果類別判斷錯誤，後續所有變化都會全軍覆沒。務必背誦「偽裝一段動詞」（如：知る、切る、返る）。</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center font-bold text-indigo-400">2</div>
                            <div>
                                <h4 className="font-bold text-white mb-1">口訣：て形通、た形就通</h4>
                                <p>只要記住了「て形」的音便，過去式「た形」就完全不用額外背誦規則。這是一個 2-for-1 的大優惠！</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center font-bold text-indigo-400">3</div>
                            <div>
                                <h4 className="font-bold text-white mb-1">否定形的「わ」是新人殺手</h4>
                                <p>「う」結尾的動詞（如：合う、笑う）在「ない形」時永遠要變成「わ」，絕對不是「あ」。</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comprehensive Quiz Section */}
                <section className="space-y-8 border-t border-white/10 pt-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                            最終試煉：20題綜合測驗
                        </h2>
                        <p className="text-indigo-900/90">
                            運用你學到的所有知識，挑戰這三個階段的試煉吧！
                        </p>
                    </div>

                    {/* Level 1 */}
                    <div className="card space-y-6 bg-gradient-to-br from-green-900/20 to-black/40 border-green-500/20">
                        <div className="flex justify-between items-center border-b border-white/5 pb-4">
                            <h3 className="text-xl font-bold text-green-400">Level 1: 基礎變形 (Basic)</h3>
                            <span className="text-xs font-mono text-white/40">7 Questions</span>
                        </div>
                        <div className="space-y-4">
                            {/* Q1 */}
                            <div className="bg-black/20 rounded-lg p-4">
                                <p className="font-bold flex items-center gap-2 mb-2">
                                    <span className="text-green-500">Q1.</span> 將「<FuriganaText text="飲{の}む" />」變為ます形。
                                </p>
                                <details className="text-sm">
                                    <summary className="cursor-pointer text-white/50 hover:text-white transition-colors">點擊查看答案</summary>
                                    <div className="mt-3 pl-4 border-l-2 border-green-500/30 text-white/80">
                                        <p className="text-green-400 font-bold mb-1"><FuriganaText text="飲{の}みます" /></p>
                                        <p className="text-xs">第一類動詞：字尾「mu」改為「mi」加「masu」。</p>
                                    </div>
                                </details>
                            </div>
                            {/* Q2 */}
                            <div className="bg-black/20 rounded-lg p-4">
                                <p className="font-bold flex items-center gap-2 mb-2">
                                    <span className="text-green-500">Q2.</span> 將「<FuriganaText text="食{た}べる" />」變為ない形。
                                </p>
                                <details className="text-sm">
                                    <summary className="cursor-pointer text-white/50 hover:text-white transition-colors">點擊查看答案</summary>
                                    <div className="mt-3 pl-4 border-l-2 border-green-500/30 text-white/80">
                                        <p className="text-green-400 font-bold mb-1"><FuriganaText text="食{た}べない" /></p>
                                        <p className="text-xs">第二類動詞：直接去「る」加「ない」。</p>
                                    </div>
                                </details>
                            </div>
                            {/* Q3 */}
                            <div className="bg-black/20 rounded-lg p-4">
                                <p className="font-bold flex items-center gap-2 mb-2">
                                    <span className="text-green-500">Q3.</span> 將「<FuriganaText text="会{あ}う" />」變為ない形。
                                </p>
                                <details className="text-sm">
                                    <summary className="cursor-pointer text-white/50 hover:text-white transition-colors">點擊查看答案</summary>
                                    <div className="mt-3 pl-4 border-l-2 border-green-500/30 text-white/80">
                                        <p className="text-green-400 font-bold mb-1"><FuriganaText text="会{あ}わない" /></p>
                                        <p className="text-xs">重要！字尾是「u」的第一類動詞，否定形必須變為「wa」而非「a」。</p>
                                    </div>
                                </details>
                            </div>
                            {/* Q4 */}
                            <div className="bg-black/20 rounded-lg p-4">
                                <p className="font-bold flex items-center gap-2 mb-2">
                                    <span className="text-green-500">Q4.</span> 將「<FuriganaText text="起{お}きる" />」變為ます形。
                                </p>
                                <details className="text-sm">
                                    <summary className="cursor-pointer text-white/50 hover:text-white transition-colors">點擊查看答案</summary>
                                    <div className="mt-3 pl-4 border-l-2 border-green-500/30 text-white/80">
                                        <p className="text-green-400 font-bold mb-1"><FuriganaText text="起{お}きます" /></p>
                                        <p className="text-xs">第二類動詞（上一段）：去「る」加「ます」。</p>
                                    </div>
                                </details>
                            </div>
                            {/* Q5 */}
                            <div className="bg-black/20 rounded-lg p-4">
                                <p className="font-bold flex items-center gap-2 mb-2">
                                    <span className="text-green-500">Q5.</span> 將「<FuriganaText text="待{ま}つ" />」變為辭書形（原型）。
                                </p>
                                <details className="text-sm">
                                    <summary className="cursor-pointer text-white/50 hover:text-white transition-colors">點擊查看答案</summary>
                                    <div className="mt-3 pl-4 border-l-2 border-green-500/30 text-white/80">
                                        <p className="text-green-400 font-bold mb-1"><FuriganaText text="待{ま}つ" /></p>
                                        <p className="text-xs">這裡本身就是辭書形。如果是從「待ちます」變回來，則是 tshi → tsu。</p>
                                    </div>
                                </details>
                            </div>
                            {/* Q6 */}
                            <div className="bg-black/20 rounded-lg p-4">
                                <p className="font-bold flex items-center gap-2 mb-2">
                                    <span className="text-green-500">Q6.</span> 將「<FuriganaText text="勉{べん}強{きょう}する" />」變為て形。
                                </p>
                                <details className="text-sm">
                                    <summary className="cursor-pointer text-white/50 hover:text-white transition-colors">點擊查看答案</summary>
                                    <div className="mt-3 pl-4 border-l-2 border-green-500/30 text-white/80">
                                        <p className="text-green-400 font-bold mb-1"><FuriganaText text="勉{べん}強{きょう}して" /></p>
                                        <p className="text-xs">第三類動詞：する → して。</p>
                                    </div>
                                </details>
                            </div>
                            {/* Q7 */}
                            <div className="bg-black/20 rounded-lg p-4">
                                <p className="font-bold flex items-center gap-2 mb-2">
                                    <span className="text-green-500">Q7.</span> 將「<FuriganaText text="来{く}る" />」變為ない形。
                                </p>
                                <details className="text-sm">
                                    <summary className="cursor-pointer text-white/50 hover:text-white transition-colors">點擊查看答案</summary>
                                    <div className="mt-3 pl-4 border-l-2 border-green-500/30 text-white/80">
                                        <p className="text-green-400 font-bold mb-1"><FuriganaText text="来{こ}ない" /></p>
                                        <p className="text-xs">第三類動詞不規則變化：讀音由 ku 變為 ko。</p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>

                    {/* Level 2 */}
                    <div className="card space-y-6 bg-gradient-to-br from-blue-900/20 to-black/40 border-blue-500/20">
                        <div className="flex justify-between items-center border-b border-white/5 pb-4">
                            <h3 className="text-xl font-bold text-blue-400">Level 2: 音便規則 (Te/Ta Form)</h3>
                            <span className="text-xs font-mono text-white/40">7 Questions</span>
                        </div>
                        <div className="space-y-4">
                            {/* Q8 */}
                            <div className="bg-black/20 rounded-lg p-4">
                                <p className="font-bold flex items-center gap-2 mb-2">
                                    <span className="text-blue-500">Q8.</span> 將「<FuriganaText text="使{つか}う" />」變為て形。
                                </p>
                                <details className="text-sm">
                                    <summary className="cursor-pointer text-white/50 hover:text-white transition-colors">點擊查看答案</summary>
                                    <div className="mt-3 pl-4 border-l-2 border-blue-500/30 text-white/80">
                                        <p className="text-blue-400 font-bold mb-1"><FuriganaText text="使{つか}って" /></p>
                                        <p className="text-xs">促音便：「う・つ・る」變為「って」。</p>
                                    </div>
                                </details>
                            </div>
                            {/* Q9 */}
                            <div className="bg-black/20 rounded-lg p-4">
                                <p className="font-bold flex items-center gap-2 mb-2">
                                    <span className="text-blue-500">Q9.</span> 將「<FuriganaText text="読{よ}む" />」變為た形 (過去式)。
                                </p>
                                <details className="text-sm">
                                    <summary className="cursor-pointer text-white/50 hover:text-white transition-colors">點擊查看答案</summary>
                                    <div className="mt-3 pl-4 border-l-2 border-blue-500/30 text-white/80">
                                        <p className="text-blue-400 font-bold mb-1"><FuriganaText text="読{よ}んだ" /></p>
                                        <p className="text-xs">鼻音便：「ぬ・ぶ・む」變為「んだ」(記得濁音！)。</p>
                                    </div>
                                </details>
                            </div>
                            {/* Q10 */}
                            <div className="bg-black/20 rounded-lg p-4">
                                <p className="font-bold flex items-center gap-2 mb-2">
                                    <span className="text-blue-500">Q10.</span> 將「<FuriganaText text="聞{き}く" />」變為て形。
                                </p>
                                <details className="text-sm">
                                    <summary className="cursor-pointer text-white/50 hover:text-white transition-colors">點擊查看答案</summary>
                                    <div className="mt-3 pl-4 border-l-2 border-blue-500/30 text-white/80">
                                        <p className="text-blue-400 font-bold mb-1"><FuriganaText text="聞{き}いて" /></p>
                                        <p className="text-xs">い音便：「く」變為「いて」。</p>
                                    </div>
                                </details>
                            </div>
                            {/* Q11 */}
                            <div className="bg-black/20 rounded-lg p-4">
                                <p className="font-bold flex items-center gap-2 mb-2">
                                    <span className="text-blue-500">Q11.</span> 將「<FuriganaText text="泳{およ}ぐ" />」變為て形。
                                </p>
                                <details className="text-sm">
                                    <summary className="cursor-pointer text-white/50 hover:text-white transition-colors">點擊查看答案</summary>
                                    <div className="mt-3 pl-4 border-l-2 border-blue-500/30 text-white/80">
                                        <p className="text-blue-400 font-bold mb-1"><FuriganaText text="泳{およ}いで" /></p>
                                        <p className="text-xs">い音便(濁音)：「ぐ」變為「いで」。</p>
                                    </div>
                                </details>
                            </div>
                            {/* Q12 */}
                            <div className="bg-black/20 rounded-lg p-4">
                                <p className="font-bold flex items-center gap-2 mb-2">
                                    <span className="text-blue-500">Q12.</span> 將「<FuriganaText text="遊{あそ}ぶ" />」變為て形。
                                </p>
                                <details className="text-sm">
                                    <summary className="cursor-pointer text-white/50 hover:text-white transition-colors">點擊查看答案</summary>
                                    <div className="mt-3 pl-4 border-l-2 border-blue-500/30 text-white/80">
                                        <p className="text-blue-400 font-bold mb-1"><FuriganaText text="遊{あそ}んで" /></p>
                                        <p className="text-xs">鼻音便：「ぬ・ぶ・む」變為「んで」。</p>
                                    </div>
                                </details>
                            </div>
                            {/* Q13 */}
                            <div className="bg-black/20 rounded-lg p-4">
                                <p className="font-bold flex items-center gap-2 mb-2">
                                    <span className="text-blue-500">Q13.</span> 將「<FuriganaText text="死{し}ぬ" />」變為た形。
                                </p>
                                <details className="text-sm">
                                    <summary className="cursor-pointer text-white/50 hover:text-white transition-colors">點擊查看答案</summary>
                                    <div className="mt-3 pl-4 border-l-2 border-blue-500/30 text-white/80">
                                        <p className="text-blue-400 font-bold mb-1"><FuriganaText text="死{し}んだ" /></p>
                                        <p className="text-xs">鼻音便，和「遊ぶ」一樣變為「んだ」。</p>
                                    </div>
                                </details>
                            </div>
                            {/* Q14 */}
                            <div className="bg-black/20 rounded-lg p-4">
                                <p className="font-bold flex items-center gap-2 mb-2">
                                    <span className="text-blue-500">Q14.</span> 將「<FuriganaText text="待{ま}つ" />」變為て形。
                                </p>
                                <details className="text-sm">
                                    <summary className="cursor-pointer text-white/50 hover:text-white transition-colors">點擊查看答案</summary>
                                    <div className="mt-3 pl-4 border-l-2 border-blue-500/30 text-white/80">
                                        <p className="text-blue-400 font-bold mb-1"><FuriganaText text="待{ま}って" /></p>
                                        <p className="text-xs">促音便：「う・つ・る」變為「って」。</p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>

                    {/* Level 3 */}
                    <div className="card space-y-6 bg-gradient-to-br from-red-900/20 to-black/40 border-red-500/20">
                        <div className="flex justify-between items-center border-b border-white/5 pb-4">
                            <h3 className="text-xl font-bold text-red-400">Level 3: 陷阱與例外 (Traps!)</h3>
                            <span className="text-xs font-mono text-white/40">6 Questions</span>
                        </div>
                        <div className="space-y-4">
                            {/* Q15 */}
                            <div className="bg-black/20 rounded-lg p-4">
                                <p className="font-bold flex items-center gap-2 mb-2">
                                    <span className="text-red-500">Q15.</span> 將「<FuriganaText text="行{い}く" />」變為て形。
                                </p>
                                <details className="text-sm">
                                    <summary className="cursor-pointer text-white/50 hover:text-white transition-colors">點擊查看答案</summary>
                                    <div className="mt-3 pl-4 border-l-2 border-red-500/30 text-white/80">
                                        <p className="text-red-400 font-bold mb-1"><FuriganaText text="行{い}って" /></p>
                                        <p className="text-xs">從「書く(書いて)」規則來看是例外。去(いく)必須變為促音便「行って」。</p>
                                    </div>
                                </details>
                            </div>
                            {/* Q16 */}
                            <div className="bg-black/20 rounded-lg p-4">
                                <p className="font-bold flex items-center gap-2 mb-2">
                                    <span className="text-red-500">Q16.</span> 將「<FuriganaText text="帰{かえ}る" />」變為て形。
                                </p>
                                <details className="text-sm">
                                    <summary className="cursor-pointer text-white/50 hover:text-white transition-colors">點擊查看答案</summary>
                                    <div className="mt-3 pl-4 border-l-2 border-red-500/30 text-white/80">
                                        <p className="text-red-400 font-bold mb-1"><FuriganaText text="帰{かえ}って" /></p>
                                        <p className="text-xs">陷阱題！雖然看起來像二類(eru)，但它是第一類動詞(五段)。所以要用促音便。</p>
                                    </div>
                                </details>
                            </div>
                            {/* Q17 */}
                            <div className="bg-black/20 rounded-lg p-4">
                                <p className="font-bold flex items-center gap-2 mb-2">
                                    <span className="text-red-500">Q17.</span> 將「<FuriganaText text="走{はし}る" />」變為た形。
                                </p>
                                <details className="text-sm">
                                    <summary className="cursor-pointer text-white/50 hover:text-white transition-colors">點擊查看答案</summary>
                                    <div className="mt-3 pl-4 border-l-2 border-red-500/30 text-white/80">
                                        <p className="text-red-400 font-bold mb-1"><FuriganaText text="走{はし}った" /></p>
                                        <p className="text-xs">陷阱題！同樣是模仿二類動詞的第一類動詞。「走入歸知切」口訣背起來！</p>
                                    </div>
                                </details>
                            </div>
                            {/* Q18 */}
                            <div className="bg-black/20 rounded-lg p-4">
                                <p className="font-bold flex items-center gap-2 mb-2">
                                    <span className="text-red-500">Q18.</span> 將「<FuriganaText text="借{か}りる" />」變為て形。
                                </p>
                                <details className="text-sm">
                                    <summary className="cursor-pointer text-white/50 hover:text-white transition-colors">點擊查看答案</summary>
                                    <div className="mt-3 pl-4 border-l-2 border-red-500/30 text-white/80">
                                        <p className="text-red-400 font-bold mb-1"><FuriganaText text="借{か}りて" /></p>
                                        <p className="text-xs">反向陷阱！這是真的第二類動詞（一段）。所以直接去る加て。不要看到iru就以為是陷阱喔！</p>
                                    </div>
                                </details>
                            </div>
                            {/* Q19 */}
                            <div className="bg-black/20 rounded-lg p-4">
                                <p className="font-bold flex items-center gap-2 mb-2">
                                    <span className="text-red-500">Q19.</span> 將「<FuriganaText text="切{き}る" />」變為て形。
                                </p>
                                <details className="text-sm">
                                    <summary className="cursor-pointer text-white/50 hover:text-white transition-colors">點擊查看答案</summary>
                                    <div className="mt-3 pl-4 border-l-2 border-red-500/30 text-white/80">
                                        <p className="text-red-400 font-bold mb-1"><FuriganaText text="切{き}って" /></p>
                                        <p className="text-xs">陷阱題！Kiru(切)是第一類。注意不要跟<FuriganaText text="着{き}る" />(穿 - 二類)搞混！</p>
                                    </div>
                                </details>
                            </div>
                            {/* Q20 */}
                            <div className="bg-black/20 rounded-lg p-4">
                                <p className="font-bold flex items-center gap-2 mb-2">
                                    <span className="text-red-500">Q20.</span> 將「<FuriganaText text="知{し}る" />」變為ない形。
                                </p>
                                <details className="text-sm">
                                    <summary className="cursor-pointer text-white/50 hover:text-white transition-colors">點擊查看答案</summary>
                                    <div className="mt-3 pl-4 border-l-2 border-red-500/30 text-white/80">
                                        <p className="text-red-400 font-bold mb-1"><FuriganaText text="知{し}らない" /></p>
                                        <p className="text-xs">陷阱題！既然它是第一類動詞(五段)，否定形就是將 ru 變為 ra 加 nai。</p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default VerbConjugationGuide
