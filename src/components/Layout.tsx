import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="container mx-auto px-2 sm:px-4 py-3 sm:py-4 md:py-6 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
