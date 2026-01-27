/**
 * 管理員路由保護組件
 * Admin Route Protection Component
 */

import { ReactNode, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { isAdmin, getAdminList } from '../services/adminService'

interface AdminRouteProps {
  children: ReactNode
}

const AdminRoute = ({ children }: AdminRouteProps) => {
  const { currentUser, loading } = useAuth()
  const [isCheckingAdmin, setIsCheckingAdmin] = useState(true)
  const [isUserAdmin, setIsUserAdmin] = useState(false)

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!loading) {
        if (currentUser?.email) {
          try {
            // 先載入管理員列表以填充快取
            await getAdminList()
            const adminStatus = isAdmin(currentUser.email)
            setIsUserAdmin(adminStatus)
          } catch (error) {
            // 發生錯誤時，檢查是否為預設管理員
            const isDefaultAdmin = currentUser.email.toLowerCase() === 'vecear@gmail.com'
            setIsUserAdmin(isDefaultAdmin)
          }
        }
        setIsCheckingAdmin(false)
      }
    }

    checkAdminStatus()
  }, [currentUser, loading])

  // 載入中顯示載入畫面
  if (loading || isCheckingAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-vermilion mx-auto"></div>
          <p className="mt-4 text-white/60">載入中...</p>
        </div>
      </div>
    )
  }

  // 未登入導向登入頁
  if (!currentUser) {
    return <Navigate to="/login" replace />
  }

  // 非管理員導向首頁
  if (!isUserAdmin) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}

export default AdminRoute
