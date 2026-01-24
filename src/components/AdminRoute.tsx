/**
 * 管理員路由保護組件
 * Admin Route Protection Component
 */

import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { isAdmin } from '../services/adminService'

interface AdminRouteProps {
  children: ReactNode
}

const AdminRoute = ({ children }: AdminRouteProps) => {
  const { user, loading } = useAuth()

  // 載入中顯示載入畫面
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700 mx-auto"></div>
          <p className="mt-4 text-stone-600">載入中...</p>
        </div>
      </div>
    )
  }

  // 未登入導向登入頁
  if (!user) {
    return <Navigate to="/login" replace />
  }

  // 非管理員導向首頁
  if (!isAdmin(user.email)) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}

export default AdminRoute
