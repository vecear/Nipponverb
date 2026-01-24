import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../contexts/AuthContext'
import {
  isAdmin,
  getGameConfig,
  updateGameConfig,
  getAllUsersStats,
  getUsersList,
  getAdminList,
  addAdmin,
  removeAdmin,
  GameConfig,
} from '../services/adminService'
import { getJobById, JOBS } from '../data/jobs'
import {
  Settings,
  Users,
  BarChart3,
  Save,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Shield,
  UserPlus,
  Trash2,
  Crown,
} from 'lucide-react'

const Admin = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { currentUser } = useAuth()

  const [activeTab, setActiveTab] = useState<'config' | 'users' | 'stats' | 'admins'>('config')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  // 遊戲配置
  const [config, setConfig] = useState<GameConfig | null>(null)

  // 使用者統計
  const [stats, setStats] = useState<{
    totalUsers: number
    levelDistribution: Record<number, number>
    jobDistribution: Record<string, number>
  } | null>(null)

  // 使用者列表
  const [users, setUsers] = useState<Array<{
    uid: string
    email: string
    displayName: string
    level: number
    jobId: string | null
    createdAt: Date
  }>>([])

  // 管理員列表
  const [admins, setAdmins] = useState<string[]>([])
  const [newAdminEmail, setNewAdminEmail] = useState('')
  const [adminActionLoading, setAdminActionLoading] = useState(false)

  // 檢查管理員權限
  useEffect(() => {
    if (!currentUser || !isAdmin(currentUser.email)) {
      navigate('/')
    }
  }, [currentUser, navigate])

  // 載入資料
  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      try {
        const [gameConfig, usersStats, usersList, adminList] = await Promise.all([
          getGameConfig(),
          getAllUsersStats(),
          getUsersList(100),
          getAdminList(),
        ])
        setConfig(gameConfig)
        setStats(usersStats)
        setUsers(usersList)
        setAdmins(adminList)
      } catch (error) {
        console.error('Error loading admin data:', error)
        setStatus({ type: 'error', message: t('admin.loadError', '載入資料失敗') })
      }
      setLoading(false)
    }

    if (currentUser && isAdmin(currentUser.email)) {
      loadData()
    }
  }, [currentUser, t])

  // 儲存配置
  const handleSaveConfig = async () => {
    if (!config || !currentUser?.email) return

    setSaving(true)
    setStatus(null)

    try {
      await updateGameConfig(config, currentUser.email)
      setStatus({ type: 'success', message: t('admin.saveSuccess', '儲存成功') })
    } catch (error) {
      console.error('Error saving config:', error)
      setStatus({ type: 'error', message: t('admin.saveError', '儲存失敗') })
    }

    setSaving(false)
  }

  // 重新載入資料
  const handleRefresh = async () => {
    setLoading(true)
    try {
      const [gameConfig, usersStats, usersList, adminList] = await Promise.all([
        getGameConfig(),
        getAllUsersStats(),
        getUsersList(100),
        getAdminList(),
      ])
      setConfig(gameConfig)
      setStats(usersStats)
      setUsers(usersList)
      setAdmins(adminList)
      setStatus({ type: 'success', message: t('admin.refreshSuccess', '重新載入成功') })
    } catch (error) {
      setStatus({ type: 'error', message: t('admin.loadError', '載入資料失敗') })
    }
    setLoading(false)
  }

  // 新增管理員
  const handleAddAdmin = async () => {
    if (!newAdminEmail.trim() || !currentUser?.email) return

    // 驗證 email 格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(newAdminEmail)) {
      setStatus({ type: 'error', message: t('admin.admins.invalidEmail', '請輸入有效的電子郵件') })
      return
    }

    setAdminActionLoading(true)
    setStatus(null)

    try {
      await addAdmin(newAdminEmail, currentUser.email)
      const updatedAdmins = await getAdminList()
      setAdmins(updatedAdmins)
      setNewAdminEmail('')
      setStatus({ type: 'success', message: t('admin.admins.addSuccess', '管理員新增成功') })
    } catch (error) {
      console.error('Error adding admin:', error)
      const errorMessage = error instanceof Error ? error.message : '新增失敗'
      setStatus({ type: 'error', message: errorMessage })
    }

    setAdminActionLoading(false)
  }

  // 移除管理員
  const handleRemoveAdmin = async (targetEmail: string) => {
    if (!currentUser?.email) return

    const confirmed = window.confirm(
      t('admin.admins.confirmRemove', '確定要移除 {{email}} 的管理員權限嗎？').replace('{{email}}', targetEmail)
    )
    if (!confirmed) return

    setAdminActionLoading(true)
    setStatus(null)

    try {
      await removeAdmin(targetEmail, currentUser.email)
      const updatedAdmins = await getAdminList()
      setAdmins(updatedAdmins)
      setStatus({ type: 'success', message: t('admin.admins.removeSuccess', '管理員已移除') })
    } catch (error) {
      console.error('Error removing admin:', error)
      const errorMessage = error instanceof Error ? error.message : '移除失敗'
      setStatus({ type: 'error', message: errorMessage })
    }

    setAdminActionLoading(false)
  }

  if (!currentUser || !isAdmin(currentUser.email)) {
    return null
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 標題 */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Shield className="text-sakura-pink" size={32} />
            <div>
              <h1 className="text-3xl md:text-4xl font-zen font-bold text-gradient">
                {t('admin.title', '後台管理')}
              </h1>
              <p className="text-white/60 text-sm">
                {t('admin.subtitle', '管理遊戲設定與使用者資料')}
              </p>
            </div>
          </div>
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="btn-secondary flex items-center gap-2"
          >
            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            {t('admin.refresh', '重新載入')}
          </button>
        </div>

        {/* 狀態提示 */}
        {status && (
          <div
            className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
              status.type === 'success'
                ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                : 'bg-red-500/10 text-red-500 border border-red-500/20'
            }`}
          >
            {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
            <span className="text-sm font-medium">{status.message}</span>
          </div>
        )}

        {/* 分頁選單 */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('config')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === 'config'
                ? 'bg-sakura-pink text-white'
                : 'bg-white/10 text-white/60 hover:bg-white/20'
            }`}
          >
            <Settings size={18} />
            {t('admin.tabs.config', '遊戲配置')}
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === 'users'
                ? 'bg-sakura-pink text-white'
                : 'bg-white/10 text-white/60 hover:bg-white/20'
            }`}
          >
            <Users size={18} />
            {t('admin.tabs.users', '使用者列表')}
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === 'stats'
                ? 'bg-sakura-pink text-white'
                : 'bg-white/10 text-white/60 hover:bg-white/20'
            }`}
          >
            <BarChart3 size={18} />
            {t('admin.tabs.stats', '統計資料')}
          </button>
          <button
            onClick={() => setActiveTab('admins')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === 'admins'
                ? 'bg-sakura-pink text-white'
                : 'bg-white/10 text-white/60 hover:bg-white/20'
            }`}
          >
            <Crown size={18} />
            {t('admin.tabs.admins', '管理員')}
          </button>
        </div>

        {loading ? (
          <div className="card p-8 text-center">
            <RefreshCw className="animate-spin mx-auto mb-4" size={32} />
            <p className="text-white/60">{t('common.loading', '載入中...')}</p>
          </div>
        ) : (
          <>
            {/* 遊戲配置 */}
            {activeTab === 'config' && config && (
              <div className="card">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Settings size={24} className="text-sakura-pink" />
                  {t('admin.config.title', '遊戲配置')}
                </h2>

                {/* 積分系統配置 */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-electric-cyan">
                    {t('admin.config.progression', '積分系統')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
                        {t('admin.config.baseExp', '基礎經驗值')}
                      </label>
                      <input
                        type="number"
                        value={config.progression.baseExp}
                        onChange={(e) =>
                          setConfig({
                            ...config,
                            progression: {
                              ...config.progression,
                              baseExp: Number(e.target.value),
                            },
                          })
                        }
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-sakura-pink"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
                        {t('admin.config.growthFactor', '成長係數')}
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={config.progression.growthFactor}
                        onChange={(e) =>
                          setConfig({
                            ...config,
                            progression: {
                              ...config.progression,
                              growthFactor: Number(e.target.value),
                            },
                          })
                        }
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-sakura-pink"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
                        {t('admin.config.maxLevel', '最高等級')}
                      </label>
                      <input
                        type="number"
                        value={config.progression.maxLevel}
                        onChange={(e) =>
                          setConfig({
                            ...config,
                            progression: {
                              ...config.progression,
                              maxLevel: Number(e.target.value),
                            },
                          })
                        }
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-sakura-pink"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
                        {t('admin.config.jobChangeLevel', '轉職等級')}
                      </label>
                      <input
                        type="number"
                        value={config.progression.jobChangeLevel}
                        onChange={(e) =>
                          setConfig({
                            ...config,
                            progression: {
                              ...config.progression,
                              jobChangeLevel: Number(e.target.value),
                            },
                          })
                        }
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-sakura-pink"
                      />
                    </div>
                  </div>
                </div>

                {/* 經驗值獎勵配置 */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-electric-cyan">
                    {t('admin.config.expRewards', '經驗值獎勵')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
                        {t('admin.config.correctAnswer', '答對練習題')}
                      </label>
                      <input
                        type="number"
                        value={config.expRewards.correctAnswer}
                        onChange={(e) =>
                          setConfig({
                            ...config,
                            expRewards: {
                              ...config.expRewards,
                              correctAnswer: Number(e.target.value),
                            },
                          })
                        }
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-sakura-pink"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
                        {t('admin.config.practiceComplete', '完成練習')}
                      </label>
                      <input
                        type="number"
                        value={config.expRewards.practiceComplete}
                        onChange={(e) =>
                          setConfig({
                            ...config,
                            expRewards: {
                              ...config.expRewards,
                              practiceComplete: Number(e.target.value),
                            },
                          })
                        }
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-sakura-pink"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
                        {t('admin.config.stageComplete', '完成關卡')}
                      </label>
                      <input
                        type="number"
                        value={config.expRewards.stageComplete}
                        onChange={(e) =>
                          setConfig({
                            ...config,
                            expRewards: {
                              ...config.expRewards,
                              stageComplete: Number(e.target.value),
                            },
                          })
                        }
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-sakura-pink"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
                        {t('admin.config.simulationMin', '模擬考試最低')}
                      </label>
                      <input
                        type="number"
                        value={config.expRewards.simulationMin}
                        onChange={(e) =>
                          setConfig({
                            ...config,
                            expRewards: {
                              ...config.expRewards,
                              simulationMin: Number(e.target.value),
                            },
                          })
                        }
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-sakura-pink"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
                        {t('admin.config.simulationMax', '模擬考試最高')}
                      </label>
                      <input
                        type="number"
                        value={config.expRewards.simulationMax}
                        onChange={(e) =>
                          setConfig({
                            ...config,
                            expRewards: {
                              ...config.expRewards,
                              simulationMax: Number(e.target.value),
                            },
                          })
                        }
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-sakura-pink"
                      />
                    </div>
                  </div>
                </div>

                {/* 最後更新資訊 */}
                <div className="text-sm text-white/40 mb-6">
                  {t('admin.config.lastUpdated', '最後更新')}: {config.updatedAt.toLocaleString()}{' '}
                  by {config.updatedBy}
                </div>

                {/* 儲存按鈕 */}
                <button
                  onClick={handleSaveConfig}
                  disabled={saving}
                  className="btn-primary flex items-center gap-2"
                >
                  <Save size={18} />
                  {saving ? t('common.loading', '載入中...') : t('common.save', '儲存')}
                </button>
              </div>
            )}

            {/* 使用者列表 */}
            {activeTab === 'users' && (
              <div className="card">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Users size={24} className="text-sakura-pink" />
                  {t('admin.users.title', '使用者列表')}
                  <span className="text-sm font-normal text-white/60">({users.length})</span>
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-white/60 font-medium">
                          {t('admin.users.name', '名稱')}
                        </th>
                        <th className="text-left py-3 px-4 text-white/60 font-medium">
                          {t('admin.users.email', 'Email')}
                        </th>
                        <th className="text-left py-3 px-4 text-white/60 font-medium">
                          {t('admin.users.level', '等級')}
                        </th>
                        <th className="text-left py-3 px-4 text-white/60 font-medium">
                          {t('admin.users.job', '職業')}
                        </th>
                        <th className="text-left py-3 px-4 text-white/60 font-medium">
                          {t('admin.users.createdAt', '註冊時間')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => {
                        const job = user.jobId ? getJobById(user.jobId) : null
                        return (
                          <tr
                            key={user.uid}
                            className="border-b border-white/5 hover:bg-white/5 transition-colors"
                          >
                            <td className="py-3 px-4">{user.displayName}</td>
                            <td className="py-3 px-4 text-white/60">{user.email}</td>
                            <td className="py-3 px-4">
                              <span className="text-sakura-pink font-bold">Lv.{user.level}</span>
                            </td>
                            <td className="py-3 px-4">
                              {job ? (
                                <span className="flex items-center gap-1">
                                  <span>{job.icon}</span>
                                  <span>{job.nameTw}</span>
                                </span>
                              ) : (
                                <span className="text-white/40">-</span>
                              )}
                            </td>
                            <td className="py-3 px-4 text-white/60">
                              {user.createdAt.toLocaleDateString()}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 統計資料 */}
            {activeTab === 'stats' && stats && (
              <div className="space-y-6">
                {/* 總覽 */}
                <div className="card">
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <BarChart3 size={24} className="text-sakura-pink" />
                    {t('admin.stats.title', '統計總覽')}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="glass p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold text-gradient mb-2">
                        {stats.totalUsers}
                      </div>
                      <div className="text-white/60">{t('admin.stats.totalUsers', '總使用者數')}</div>
                    </div>
                    <div className="glass p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold text-electric-cyan mb-2">
                        {Object.values(stats.jobDistribution).reduce((a, b) => a + b, 0) -
                          (stats.jobDistribution['none'] || 0)}
                      </div>
                      <div className="text-white/60">
                        {t('admin.stats.jobSelected', '已轉職人數')}
                      </div>
                    </div>
                    <div className="glass p-4 rounded-xl text-center">
                      <div className="text-3xl font-bold text-sakura-pink mb-2">
                        {Math.max(...Object.keys(stats.levelDistribution).map(Number), 0)}
                      </div>
                      <div className="text-white/60">
                        {t('admin.stats.highestLevel', '最高等級')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 職業分佈 */}
                <div className="card">
                  <h3 className="text-lg font-semibold mb-4">
                    {t('admin.stats.jobDistribution', '職業分佈')}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {JOBS.map((job) => {
                      const count = stats.jobDistribution[job.id] || 0
                      return (
                        <div key={job.id} className="glass p-3 rounded-xl text-center">
                          <div className="text-2xl mb-1">{job.icon}</div>
                          <div className="font-medium">{job.nameTw}</div>
                          <div className="text-2xl font-bold text-white">{count}</div>
                        </div>
                      )
                    })}
                    <div className="glass p-3 rounded-xl text-center">
                      <div className="text-2xl mb-1">🌱</div>
                      <div className="font-medium">{t('admin.stats.noJob', '未轉職')}</div>
                      <div className="text-2xl font-bold text-white">
                        {stats.jobDistribution['none'] || 0}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 管理員管理 */}
            {activeTab === 'admins' && (
              <div className="card">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Crown size={24} className="text-sakura-pink" />
                  {t('admin.admins.title', '管理員管理')}
                </h2>

                {/* 新增管理員 */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-electric-cyan">
                    {t('admin.admins.add', '新增管理員')}
                  </h3>
                  <div className="flex gap-3">
                    <input
                      type="email"
                      value={newAdminEmail}
                      onChange={(e) => setNewAdminEmail(e.target.value)}
                      placeholder={t('admin.admins.emailPlaceholder', '輸入電子郵件地址')}
                      className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-sakura-pink"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleAddAdmin()
                        }
                      }}
                    />
                    <button
                      onClick={handleAddAdmin}
                      disabled={adminActionLoading || !newAdminEmail.trim()}
                      className="btn-primary flex items-center gap-2"
                    >
                      <UserPlus size={18} />
                      {t('admin.admins.addButton', '新增')}
                    </button>
                  </div>
                  <p className="text-sm text-white/40 mt-2">
                    {t('admin.admins.addHint', '新增的管理員將擁有完整的後台管理權限')}
                  </p>
                </div>

                {/* 管理員列表 */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-electric-cyan">
                    {t('admin.admins.list', '目前管理員')}
                    <span className="text-sm font-normal text-white/60 ml-2">({admins.length})</span>
                  </h3>
                  <div className="space-y-2">
                    {admins.map((email) => {
                      const isCurrentUser = email === currentUser?.email?.toLowerCase()
                      const isDefaultAdmin = email === 'vecear@gmail.com'
                      return (
                        <div
                          key={email}
                          className="flex items-center justify-between p-4 glass rounded-xl"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sakura-pink to-electric-cyan flex items-center justify-center">
                              <Shield size={20} className="text-white" />
                            </div>
                            <div>
                              <div className="font-medium flex items-center gap-2">
                                {email}
                                {isDefaultAdmin && (
                                  <span className="text-xs px-2 py-0.5 bg-sakura-pink/20 text-sakura-pink rounded-full">
                                    {t('admin.admins.primary', '主要')}
                                  </span>
                                )}
                                {isCurrentUser && (
                                  <span className="text-xs px-2 py-0.5 bg-electric-cyan/20 text-electric-cyan rounded-full">
                                    {t('admin.admins.you', '你')}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          {!isDefaultAdmin && !isCurrentUser && (
                            <button
                              onClick={() => handleRemoveAdmin(email)}
                              disabled={adminActionLoading}
                              className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                              title={t('admin.admins.remove', '移除管理員')}
                            >
                              <Trash2 size={18} />
                            </button>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* 注意事項 */}
                <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={20} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-yellow-500/80">
                      <p className="font-medium mb-1">{t('admin.admins.notice', '注意事項')}</p>
                      <ul className="list-disc list-inside space-y-1 text-yellow-500/60">
                        <li>{t('admin.admins.notice1', '主要管理員無法被移除')}</li>
                        <li>{t('admin.admins.notice2', '無法移除自己的管理員權限')}</li>
                        <li>{t('admin.admins.notice3', '新管理員將立即獲得完整權限')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Admin
