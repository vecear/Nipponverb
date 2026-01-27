import { useState } from 'react'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useTranslation } from 'react-i18next'
import { X, Mail, Lock, Link as LinkIcon, AlertCircle, CheckCircle, Edit2, Save, ChevronDown, ChevronUp } from 'lucide-react'
import { useUserStore } from '../store/useUserStore'
import { updateUserProfile } from '../services/userService'
import { usePracticeStore } from '../store/usePracticeStore'
import { useGrammarCompletionStore } from '../store/useGrammarCompletionStore'
import ExpBar from '../components/ExpBar'
import { getJobById, getCharacterImagePath, JOBS, NOVICE_TITLE } from '../data/jobs'
import { EXP_CONSTANTS, DEFAULT_PROGRESSION } from '../types/progression'
import { UI_ELEMENTS } from '../config/assets'
import { JOB_STORIES, NOVICE_STORIES } from '../data/characterStories'


const Profile = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { currentUser, updateUserEmail, updateUserPassword, linkGoogleAccount, reauthenticate } = useAuth()
  const { profile, updateProfile } = useUserStore()
  const { getHistoryByCategory } = usePracticeStore()
  const { completions } = useGrammarCompletionStore()

  // 計算已完成的文法數量
  const grammarCompletedCount = Object.keys(completions).length

  // 積分系統資料
  const progression = profile?.progression || DEFAULT_PROGRESSION
  const gender = profile?.gender || 'male'
  const needsJobSelection = progression.level >= EXP_CONSTANTS.JOB_CHANGE_LEVEL && !progression.jobId
  const job = progression.jobId ? getJobById(progression.jobId) : null
  const characterImage = getCharacterImagePath(progression.level, progression.jobId, gender)

  const [isEditingName, setIsEditingName] = useState(false)
  const [newName, setNewName] = useState(profile?.displayName || '')

  // 等級預覽表格狀態
  const [showLevelPreview, setShowLevelPreview] = useState(false)
  const [selectedJobForPreview, setSelectedJobForPreview] = useState<string>(progression.jobId || 'doshin')
  const [previewGender, setPreviewGender] = useState<'male' | 'female'>(gender)

  // Initialize levels
  const levels = ['N5', 'N4', 'N3', 'N2', 'N1']

  const [selectedLevel, setSelectedLevel] = useState<string>(profile?.currentLevel || 'N3')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState(currentUser?.email || '')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [reauthPassword, setReauthPassword] = useState('')
  const [requiresReauth, setRequiresReauth] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [loading, setLoading] = useState(false)

  const isGoogleUser = currentUser?.providerData.some(p => p.providerId === 'google.com')
  const isGoogleLinked = currentUser?.providerData.some(p => p.providerId === 'google.com')

  // Calculate stats from profile
  const verbsLearned = profile?.stats?.verbs?.learned || 0
  const currentStreak = profile?.stats?.streak?.current || 0

  const handleSaveName = async () => {
    if (!currentUser || !newName.trim()) return
    setLoading(true)
    try {
      await updateUserProfile(currentUser.uid, { displayName: newName.trim() })
      updateProfile({ displayName: newName.trim() })
      setIsEditingName(false)
      setStatus({ type: 'success', message: t('profile.settings.updateSuccess') })
    } catch (err) {
      setStatus({ type: 'error', message: t('profile.settings.updateError') })
    }
    setLoading(false)
  }

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-0">
      <div className="card mb-4 sm:mb-6 md:mb-8 !overflow-visible p-3 sm:p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-6 md:gap-8">
          <div className="relative">
            {/* Badge Frame 裝飾 */}
            <div className="absolute -inset-3 sm:-inset-4 z-0 opacity-50 pointer-events-none">
              <img
                src={UI_ELEMENTS.badgeFrame}
                alt=""
                className="w-full h-full object-contain"
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
            </div>

            {/* 角色圖片 - 浮世繪風格 */}
            <div className={`relative z-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-4 border-vermilion overflow-hidden ${job ? `bg-gradient-to-br ${job.color}` : 'bg-foam'}`}>
              <img
                src={characterImage}
                alt="Character"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // 圖片載入失敗時顯示使用者頭像或首字母
                  const target = e.currentTarget
                  if (currentUser?.photoURL) {
                    target.src = currentUser.photoURL
                  } else {
                    target.style.display = 'none'
                    target.parentElement!.innerHTML = `<span class="flex items-center justify-center w-full h-full text-wave-deep text-2xl sm:text-3xl md:text-5xl font-bold">${profile?.displayName?.[0] || currentUser?.displayName?.[0] || 'U'}</span>`
                  }
                }}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 z-20 bg-pine text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold border-2 border-washi-light">
              {t('profile.streak', { days: currentStreak })} 🔥
            </div>
          </div>

          <div className="flex-1 text-center md:text-left min-w-0">
            <div className="flex items-center justify-center md:justify-start gap-1 sm:gap-2 mb-1 md:mb-2">
              {isEditingName ? (
                <div className="flex items-center gap-1 sm:gap-2">
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="placeholder-sumi-faded text-base sm:text-xl font-bold font-zen w-32 sm:w-auto"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveName}
                    className="p-1.5 sm:p-2 hover:bg-wave-light/10 rounded-full text-vermilion transition-all"
                  >
                    <Save size={16} className="sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={() => {
                      setIsEditingName(false)
                      setNewName(profile?.displayName || '')
                    }}
                    className="p-1.5 sm:p-2 hover:bg-wave-light/10 rounded-full text-sumi-faded transition-all"
                  >
                    <X size={16} className="sm:w-5 sm:h-5" />
                  </button>
                </div>
              ) : (
                <>
                  <h1 className="text-xl sm:text-2xl md:text-4xl font-zen font-bold text-wave-deep truncate">
                    {profile?.displayName || currentUser?.displayName || 'Student'}
                  </h1>
                  <button
                    onClick={() => setIsEditingName(true)}
                    className="p-1.5 sm:p-2 hover:bg-wave-light/10 rounded-full text-sumi-faded hover:text-wave-deep transition-all shrink-0"
                    title={t('profile.settings.editName')}
                  >
                    <Edit2 size={14} className="sm:w-[18px] sm:h-[18px]" />
                  </button>
                </>
              )}
            </div>
            <p className="text-sumi-faded mb-2 sm:mb-4 text-xs sm:text-sm md:text-base truncate">{currentUser?.email}</p>

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 sm:gap-2 md:gap-3">
              <span className="text-sumi-faded text-xs sm:text-sm md:text-base font-bold">{t('profile.targetLevel')}:</span>
              <div className="flex flex-wrap justify-center gap-1">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold transition-all border ${selectedLevel === level
                      ? 'bg-vermilion text-white border-vermilion'
                      : 'bg-washi-light text-sumi-faded border-wave-mid/30 hover:border-vermilion hover:text-vermilion'
                      }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-3 sm:mt-6 md:mt-0 flex flex-col items-center md:items-end gap-2 sm:gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-secondary px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg sm:rounded-xl shadow-sm text-xs sm:text-sm"
            >
              {t('profile.settings.modifyData')}
            </button>
          </div>
        </div>
      </div>

      {/* 練習統計區塊 */}
      <div className="card mb-4 sm:mb-6 md:mb-8 p-3 sm:p-4 md:p-6">
        <h2 className="text-base sm:text-xl md:text-2xl font-zen font-bold mb-3 sm:mb-4 md:mb-6 text-wave-deep border-b-2 border-wave-mid/20 pb-2">
          {t('profile.statistics.title', { level: selectedLevel })}
        </h2>
        <div className={`grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 ${selectedLevel === 'N5' ? 'sm:grid-cols-3 md:grid-cols-5' : 'sm:grid-cols-2 md:grid-cols-4'}`}>
          {(() => {
            // 五十音只在 N5 時顯示，其他級別顯示 4 個類別
            const categories = selectedLevel === 'N5'
              ? ['gojuon', 'verbs', 'grammar', 'kanji', 'vocabulary']
              : ['verbs', 'grammar', 'kanji', 'vocabulary']

            return categories.map((category) => {
              // 五十音使用合併的 hiragana + katakana 資料
              let history
              if (category === 'gojuon') {
                const hiraganaHistory = getHistoryByCategory('gojuon', 'hiragana')
                const katakanaHistory = getHistoryByCategory('gojuon', 'katakana')
                // 合併並按日期排序
                history = [...hiraganaHistory, ...katakanaHistory]
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .slice(0, 10)
              } else {
                history = getHistoryByCategory(category, selectedLevel)
              }

              const hasData = history.length > 0

              // Calculate stats
              const lastEntry = history[0]
              const avgAccuracy = hasData
                ? Math.round(history.reduce((sum, h) => sum + h.accuracy, 0) / history.length)
                : 0

              return (
                <div key={category} className="paper-card p-2 sm:p-3 rounded-none border border-wave-deep">
                  <div className="flex flex-col gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-sm sm:text-lg font-bold border border-wave-deep bg-washi-light shadow-sm shrink-0`}>
                        {category === 'verbs' ? '✍️' :
                          category === 'gojuon' ? 'あ' :
                            category === 'kanji' ? '漢' :
                              category === 'vocabulary' ? '🔤' : '📖'}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-[10px] sm:text-sm truncate text-wave-deep">
                          {t(`practice.categories.${category}.title`)}
                        </h3>
                        <p className="text-[8px] sm:text-[10px] text-sumi-faded truncate">
                          {t('profile.statistics.lastPractice')}: {hasData
                            ? new Date(lastEntry.date).toLocaleDateString()
                            : '--'}
                        </p>
                      </div>
                    </div>

                    {hasData && (
                      <div className="flex items-baseline justify-between">
                        <div className="text-base sm:text-xl font-bold text-wave-deep leading-none">
                          {lastEntry.score}/{lastEntry.total}
                        </div>
                        <div className={`text-[10px] sm:text-xs font-bold ${lastEntry.accuracy >= 80 ? 'text-pine' :
                          lastEntry.accuracy >= 60 ? 'text-ochre' : 'text-vermilion'
                          }`}>
                          {lastEntry.accuracy}%
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 sm:space-y-4">
                    <div className="flex items-center justify-between text-[10px] sm:text-sm">
                      <span className="text-sumi-faded">{t('profile.statistics.recentAverage')} (5)</span>
                      <span className={`font-bold ${avgAccuracy >= 80 ? 'text-pine' :
                        avgAccuracy >= 60 ? 'text-ochre' : 'text-sumi-faded'
                        }`}>
                        {hasData ? `${avgAccuracy}%` : '--'}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          })()}
        </div>
      </div>

      {/* 積分系統區塊 - 浮世繪風格 */}
      <div className="card mb-4 sm:mb-6 md:mb-8 p-3 sm:p-6 md:p-8">
        <div className="flex items-center justify-between mb-3 sm:mb-6">
          <h2 className="text-base sm:text-xl md:text-2xl font-zen font-bold text-wave-deep border-b-2 border-wave-mid/30 pb-1">
            {t('progression.title', '冒險進度')}
          </h2>
          {job && (
            <div className={`px-2 py-1 sm:px-4 sm:py-2 border border-wave-deep/30 bg-foam flex items-center gap-1 sm:gap-2 shadow-sm`}>
              <span className="text-base sm:text-xl">{job.icon}</span>
              <span className="font-bold text-wave-deep text-xs sm:text-base">{job.nameTw}</span>
            </div>
          )}
        </div>

        {/* 經驗值條 */}
        <ExpBar progression={progression} gender={gender} showTitle={true} size="lg" />

        {/* 轉職提示 */}
        {needsJobSelection && (
          <div className="mt-2 sm:mt-4 p-2 sm:p-4 bg-washi-light border-2 border-vermilion/30 flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-4 shadow-ukiyo">
            <div className="text-center md:text-left">
              <p className="text-vermilion font-bold mb-0.5 sm:mb-1 text-sm sm:text-base">
                {t('progression.jobSelection.unlocked', '轉職之儀已解鎖！')}
              </p>
              <p className="text-sumi-faded text-xs sm:text-sm">
                {t('progression.jobSelection.hint', '選擇你的職業道路，開啟新的旅程')}
              </p>
            </div>
            <button
              onClick={() => navigate('/job-selection')}
              className="btn-primary whitespace-nowrap text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2"
            >
              {t('progression.jobSelection.go', '前往轉職')}
            </button>
          </div>
        )}

        {/* 等級預覽表格 - 可展開 */}
        <div className="mt-4 sm:mt-6">
          <button
            onClick={() => setShowLevelPreview(!showLevelPreview)}
            className="flex items-center gap-2 text-sm sm:text-base font-semibold text-wave-mid hover:text-wave-deep transition-colors"
          >
            {showLevelPreview ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            {t('profile.levelPreview.title', '角色成長預覽')}
          </button>

          {showLevelPreview && (
            <div className="mt-3 sm:mt-4 space-y-4">
              {/* 職業和性別選擇 */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm text-sumi-faded mb-1.5">
                    {t('profile.levelPreview.selectJob', '選擇職業')}
                  </label>
                  <select
                    value={selectedJobForPreview}
                    onChange={(e) => setSelectedJobForPreview(e.target.value)}
                    className="min-w-[140px] text-xs sm:text-sm px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-wave-mid bg-white text-sumi"
                  >
                    {JOBS.map((j) => (
                      <option key={j.id} value={j.id}>
                        {j.icon} {j.nameTw}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm text-sumi-faded mb-1.5">
                    {t('profile.levelPreview.selectGender', '選擇性別')}
                  </label>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setPreviewGender('male')}
                      className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm transition-all ${previewGender === 'male'
                        ? 'bg-wave-deep text-white'
                        : 'bg-washi-light text-sumi-faded hover:bg-foam border border-wave-mid'
                        }`}
                    >
                      {t('common.male', '男性')}
                    </button>
                    <button
                      onClick={() => setPreviewGender('female')}
                      className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm transition-all ${previewGender === 'female'
                        ? 'bg-sakura text-white'
                        : 'bg-washi-light text-sumi-faded hover:bg-foam border border-wave-mid'
                        }`}
                    >
                      {t('common.female', '女性')}
                    </button>
                  </div>
                </div>
              </div>

              {/* 職業說明 */}
              {(() => {
                const previewJob = JOBS.find(j => j.id === selectedJobForPreview)
                return previewJob ? (
                  <div className="text-sumi-faded text-xs sm:text-sm">
                    <span className="font-bold text-vermilion">{previewJob.nameTw}</span>：{previewJob.description}
                  </div>
                ) : null
              })()}

              {/* 等級表格 */}
              <div className="overflow-x-auto max-h-[400px] sm:max-h-[500px] overflow-y-auto border border-wave-mid rounded-lg">
                <table className="w-full text-xs sm:text-sm">
                  <thead className="sticky top-0 bg-washi-light z-10">
                    <tr className="border-b-2 border-wave-mid">
                      <th className="text-left py-2 px-2 sm:py-3 sm:px-3 text-wave-deep font-bold">
                        {t('profile.levelPreview.level', '等級')}
                      </th>
                      <th className="text-center py-2 px-2 sm:py-3 sm:px-3 text-wave-deep font-bold">
                        {t('profile.levelPreview.character', '角色')}
                      </th>
                      <th className="text-left py-2 px-2 sm:py-3 sm:px-3 text-wave-deep font-bold">
                        {t('profile.levelPreview.title_name', '稱號')}
                      </th>
                      <th className="text-left py-2 px-2 sm:py-3 sm:px-3 text-wave-deep font-bold hidden md:table-cell">
                        {t('profile.levelPreview.story', '故事')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(() => {
                      const rows = []
                      const previewJob = JOBS.find(j => j.id === selectedJobForPreview)
                      const stages = previewJob?.stages[previewGender] || []
                      const jobStories = JOB_STORIES[selectedJobForPreview]?.[previewGender] || []

                      // 初心者階段 (0-4)
                      const noviceStory = NOVICE_STORIES[previewGender][0]
                      const noviceImage = getCharacterImagePath(0, null, previewGender)
                      const isCurrentNovice = progression.level >= 0 && progression.level <= 4

                      rows.push(
                        <tr
                          key="novice"
                          className={`border-b border-wave-mid/30 ${isCurrentNovice ? 'bg-vermilion/10' : 'hover:bg-foam'} transition-colors`}
                        >
                          <td className="py-2 px-2 sm:py-3 sm:px-3">
                            <span className={`font-bold ${isCurrentNovice ? 'text-vermilion' : 'text-sumi'}`}>
                              Lv.0-4
                            </span>
                            {isCurrentNovice && (
                              <span className="ml-1.5 text-[10px] px-1.5 py-0.5 bg-vermilion/20 text-vermilion rounded">
                                現在
                              </span>
                            )}
                          </td>
                          <td className="py-2 px-2 sm:py-3 sm:px-3 text-center">
                            <div className="flex justify-center">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-wave-mid bg-washi overflow-hidden">
                                <img
                                  src={noviceImage}
                                  alt="初心者"
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none'
                                    e.currentTarget.parentElement!.innerHTML = `<span class="text-xl flex items-center justify-center h-full">🎯</span>`
                                  }}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="py-2 px-2 sm:py-3 sm:px-3">
                            <div className="flex flex-col">
                              <span className="text-sumi font-bold">{NOVICE_TITLE.nameJp}</span>
                              <span className="text-sumi-faded text-[10px] sm:text-xs">({NOVICE_TITLE.nameTw})</span>
                            </div>
                          </td>
                          <td className="py-2 px-2 sm:py-3 sm:px-3 hidden md:table-cell">
                            <p className="text-sumi-faded text-xs line-clamp-2">{noviceStory?.story}</p>
                          </td>
                        </tr>
                      )

                      // 職業階段 (5-99)
                      stages.forEach((stage, index) => {
                        const stageStory = jobStories[index]
                        const stageImage = getCharacterImagePath(stage.minLevel, selectedJobForPreview, previewGender)
                        // 計算 maxLevel：下一個階段的 minLevel - 1，最後一個階段則為 99
                        const nextStage = stages[index + 1]
                        const maxLevel = nextStage ? nextStage.minLevel - 1 : 99
                        const isCurrentStage = progression.level >= stage.minLevel && progression.level <= maxLevel && progression.jobId === selectedJobForPreview

                        rows.push(
                          <tr
                            key={stage.minLevel}
                            className={`border-b border-wave-mid/30 ${isCurrentStage ? 'bg-vermilion/10' : 'hover:bg-foam'} transition-colors`}
                          >
                            <td className="py-2 px-2 sm:py-3 sm:px-3">
                              <span className={`font-bold ${isCurrentStage ? 'text-vermilion' : 'text-sumi'}`}>
                                Lv.{stage.minLevel}-{maxLevel}
                              </span>
                              {isCurrentStage && (
                                <span className="ml-1.5 text-[10px] px-1.5 py-0.5 bg-vermilion/20 text-vermilion rounded">
                                  現在
                                </span>
                              )}
                              {stage.minLevel === EXP_CONSTANTS.JOB_CHANGE_LEVEL && (
                                <span className="ml-1.5 text-[10px] px-1.5 py-0.5 bg-wave-light/20 text-wave-deep rounded border border-wave-mid">
                                  轉職
                                </span>
                              )}
                            </td>
                            <td className="py-2 px-2 sm:py-3 sm:px-3 text-center">
                              <div className="flex justify-center">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-wave-mid bg-washi overflow-hidden">
                                  <img
                                    src={stageImage}
                                    alt={stage.nameTw}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      e.currentTarget.style.display = 'none'
                                      e.currentTarget.parentElement!.innerHTML = `<span class="text-xl flex items-center justify-center h-full">${previewJob?.icon || '❓'}</span>`
                                    }}
                                  />
                                </div>
                              </div>
                            </td>
                            <td className="py-2 px-2 sm:py-3 sm:px-3">
                              <div className="flex flex-col">
                                <span className="text-sumi font-bold">{stage.nameJp}</span>
                                <span className="text-sumi-faded text-[10px] sm:text-xs">({stage.nameTw})</span>
                              </div>
                            </td>
                            <td className="py-2 px-2 sm:py-3 sm:px-3 hidden md:table-cell">
                              <p className="text-sumi-faded text-xs line-clamp-2">{stageStory?.story}</p>
                            </td>
                          </tr>
                        )
                      })

                      return rows
                    })()}
                  </tbody>
                </table>
              </div>

              {/* 手機版故事展開區 */}
              <div className="md:hidden space-y-2">
                <p className="text-xs text-sumi-faded">點擊查看完整故事</p>
                {(() => {
                  const previewJob = JOBS.find(j => j.id === selectedJobForPreview)
                  const stages = previewJob?.stages[previewGender] || []
                  const jobStories = JOB_STORIES[selectedJobForPreview]?.[previewGender] || []

                  return (
                    <details className="group">
                      <summary className="cursor-pointer text-sm font-bold text-wave-deep hover:text-vermilion transition-colors">
                        查看所有階段故事
                      </summary>
                      <div className="mt-2 space-y-3 pl-2 border-l-2 border-wave-mid/30">
                        <div className="p-2 bg-foam/50 rounded">
                          <p className="text-xs font-bold text-vermilion mb-1">Lv.0-4 {NOVICE_TITLE.nameTw}</p>
                          <p className="text-xs text-sumi-faded">{NOVICE_STORIES[previewGender][0]?.story}</p>
                        </div>
                        {stages.map((stage, index) => {
                          const nextStage = stages[index + 1]
                          const maxLevel = nextStage ? nextStage.minLevel - 1 : 99
                          return (
                            <div key={stage.minLevel} className="p-2 bg-foam/50 rounded">
                              <p className="text-xs font-bold text-wave-deep mb-1">
                                Lv.{stage.minLevel}-{maxLevel} {stage.nameTw}
                              </p>
                              <p className="text-xs text-sumi-faded">{jobStories[index]?.story}</p>
                            </div>
                          )
                        })}
                      </div>
                    </details>
                  )
                })()}
              </div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-wave-deep/20 backdrop-blur-sm">
          <div
            className="paper-card w-full max-w-md p-6 shadow-ukiyo-lg"
          >
            <div className="flex justify-between items-center mb-6 border-b border-wave-mid/20 pb-4">
              <h3 className="text-xl font-bold text-wave-deep">{t('profile.settings.accountManagement')}</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-wave-light/10 rounded-full transition-all text-sumi-faded"
              >
                <X size={20} />
              </button>
            </div>

            {status && (
              <div className={`mb-6 p-4 flex items-center gap-3 ${status.type === 'success' ? 'bg-pine/10 text-pine' : 'bg-vermilion/10 text-vermilion'
                }`}>
                {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                <span className="text-sm font-medium">{status.message}</span>
              </div>
            )}

            {requiresReauth ? (
              <div className="space-y-6">
                <div className="p-4 bg-vermilion/5 border border-vermilion/20 text-center">
                  <div className="w-12 h-12 bg-vermilion/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="text-vermilion" size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-wave-deep">
                    {t('profile.settings.reauthTitle')}
                  </h4>
                  <p className="text-sm text-sumi-faded mb-6">
                    {t('profile.settings.reauthDesc')}
                  </p>

                  {!isGoogleUser ? (
                    <div className="space-y-4">
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-sumi-faded" size={18} />
                        <input
                          type="password"
                          value={reauthPassword}
                          onChange={(e) => setReauthPassword(e.target.value)}
                          className="placeholder-sumi-faded pl-10"
                          placeholder={t('profile.settings.currentPassword')}
                        />
                      </div>
                      <button
                        onClick={async () => {
                          setLoading(true)
                          setStatus(null)
                          try {
                            await reauthenticate(reauthPassword)
                            setRequiresReauth(false)
                            setReauthPassword('')
                            setStatus({ type: 'success', message: t('profile.settings.updateSuccess') })
                          } catch (err: any) {
                            setStatus({ type: 'error', message: t('profile.settings.updateError') })
                          }
                          setLoading(false)
                        }}
                        disabled={loading || !reauthPassword}
                        className="w-full py-2 bg-vermilion text-white font-bold transition-all disabled:opacity-50"
                      >
                        {loading ? t('common.loading') : t('profile.settings.verify')}
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={async () => {
                        setLoading(true)
                        setStatus(null)
                        try {
                          await reauthenticate()
                          setRequiresReauth(false)
                          setStatus({ type: 'success', message: t('profile.settings.updateSuccess') })
                        } catch (err: any) {
                          setStatus({ type: 'error', message: t('profile.settings.updateError') })
                        }
                        setLoading(false)
                      }}
                      className="w-full py-3 bg-washi-light text-sumi font-bold flex items-center justify-center gap-3 border border-wave-mid"
                    >
                      <Lock size={18} />
                      {t('profile.settings.verifyWithGoogle')}
                    </button>
                  )}

                  <button
                    onClick={() => setRequiresReauth(false)}
                    className="mt-4 text-sm text-sumi-faded hover:text-wave-deep"
                  >
                    {t('common.cancel')}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Change Email */}
                <div>
                  <label className="block text-sm font-medium text-sumi-faded mb-2">
                    {t('profile.settings.changeEmail')}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-sumi-faded" size={18} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="placeholder-sumi-faded pl-10"
                      placeholder={t('profile.settings.newEmail')}
                    />
                  </div>
                  <button
                    onClick={async () => {
                      setLoading(true)
                      setStatus(null)
                      try {
                        await updateUserEmail(email)
                        setStatus({ type: 'success', message: t('profile.settings.updateSuccess') })
                      } catch (err: any) {
                        if (err.code === 'auth/requires-recent-login') {
                          setRequiresReauth(true)
                        } else {
                          setStatus({ type: 'error', message: t('profile.settings.updateError') })
                        }
                      }
                      setLoading(false)
                    }}
                    disabled={loading || email === currentUser?.email}
                    className="mt-2 w-full py-2 bg-vermilion/20 hover:bg-vermilion/30 text-vermilion font-semibold transition-all disabled:opacity-50"
                  >
                    {t('common.save')}
                  </button>
                </div>

                <hr className="border-wave-mid/20" />

                {/* Change Password */}
                <div>
                  <label className="block text-sm font-medium text-sumi-faded mb-2">
                    {t('profile.settings.changePassword')}
                  </label>
                  <div className="space-y-2">
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-sumi-faded" size={18} />
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="placeholder-sumi-faded pl-10"
                        placeholder={t('profile.settings.newPassword')}
                      />
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-sumi-faded" size={18} />
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="placeholder-sumi-faded pl-10"
                        placeholder={t('profile.settings.confirmPassword')}
                      />
                    </div>
                  </div>
                  <button
                    onClick={async () => {
                      if (newPassword !== confirmPassword) {
                        setStatus({ type: 'error', message: "Passwords don't match" })
                        return
                      }
                      setLoading(true)
                      setStatus(null)
                      try {
                        await updateUserPassword(newPassword)
                        setStatus({ type: 'success', message: t('profile.settings.updateSuccess') })
                        setNewPassword('')
                        setConfirmPassword('')
                      } catch (err: any) {
                        if (err.code === 'auth/requires-recent-login') {
                          setRequiresReauth(true)
                        } else {
                          setStatus({ type: 'error', message: t('profile.settings.updateError') })
                        }
                      }
                      setLoading(false)
                    }}
                    disabled={loading || !newPassword || newPassword !== confirmPassword}
                    className="mt-2 w-full py-2 bg-vermilion/20 hover:bg-vermilion/30 text-vermilion font-semibold transition-all disabled:opacity-50"
                  >
                    {t('profile.settings.changePassword')}
                  </button>
                </div>

                <hr className="border-wave-mid/20" />

                {/* Link Google */}
                <div>
                  <button
                    onClick={async () => {
                      if (isGoogleLinked) return
                      setLoading(true)
                      setStatus(null)
                      try {
                        await linkGoogleAccount()
                        setStatus({ type: 'success', message: t('profile.settings.updateSuccess') })
                      } catch (err: any) {
                        setStatus({ type: 'error', message: t('profile.settings.updateError') })
                      }
                      setLoading(false)
                    }}
                    disabled={loading || isGoogleLinked}
                    className={`w-full py-3 flex items-center justify-center gap-3 font-semibold transition-all ${isGoogleLinked
                      ? 'bg-pine/10 text-pine border border-pine/20'
                      : 'bg-washi-light text-sumi hover:bg-foam shadow-ukiyo border border-wave-mid'
                      }`}
                  >
                    {isGoogleLinked ? <CheckCircle size={18} /> : <LinkIcon size={18} />}
                    {isGoogleLinked ? t('profile.settings.googleLinked') : t('profile.settings.linkGoogle')}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="card mb-4 sm:mb-8 p-3 sm:p-4 md:p-6">
        <h2 className="text-lg sm:text-2xl font-zen font-bold mb-3 sm:mb-6 text-wave-deep border-b-2 border-wave-mid/20 pb-2">{t('profile.learningProgress')}</h2>

        <div className="space-y-3 sm:space-y-6">
          {/* 常用動詞 */}
          <div>
            <div className="flex justify-between mb-1 sm:mb-2">
              <span className="font-semibold text-wave-deep text-xs sm:text-sm md:text-base">{t('nav.verbs')}</span>
              <span className="text-sumi-faded text-xs sm:text-sm">{verbsLearned}/121</span>
            </div>
            <div className="progress-bar progress-bar-vermilion">
              <div
                className="progress-bar-fill"
                style={{ width: `${Math.min((verbsLearned / 121) * 100, 100)}%` }}
              />
            </div>
          </div>

          {/* 單字 */}
          <div>
            <div className="flex justify-between mb-1 sm:mb-2">
              <span className="font-semibold text-wave-deep text-xs sm:text-sm md:text-base">{t('nav.vocabulary')}</span>
              <span className="text-sumi-faded text-xs sm:text-sm">0/1111</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: '0%' }}
              />
            </div>
          </div>

          {/* 文法 */}
          <div>
            <div className="flex justify-between mb-1 sm:mb-2">
              <span className="font-semibold text-wave-deep text-xs sm:text-sm md:text-base">{t('nav.grammar')}</span>
              <span className="text-sumi-faded text-xs sm:text-sm">{grammarCompletedCount}/1167</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar-fill bg-pine"
                style={{ width: `${Math.min((grammarCompletedCount / 1167) * 100, 100)}%` }}
              />
            </div>
          </div>

          {/* 慣用語 */}
          <div>
            <div className="flex justify-between mb-1 sm:mb-2">
              <span className="font-semibold text-wave-deep text-xs sm:text-sm md:text-base">{t('nav.idioms')}</span>
              <span className="text-sumi-faded text-xs sm:text-sm">0/6</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar-fill bg-sky"
                style={{ width: '0%' }}
              />
            </div>
          </div>

          {/* 日期及數量詞 */}
          <div>
            <div className="flex justify-between mb-1 sm:mb-2">
              <span className="font-semibold text-wave-deep text-xs sm:text-sm md:text-base">{t('nav.dateAndCounters')}</span>
              <span className="text-sumi-faded text-xs sm:text-sm">0/0</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar-fill bg-ochre"
                style={{ width: '0%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
