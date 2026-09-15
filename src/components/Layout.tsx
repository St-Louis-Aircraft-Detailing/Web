import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col bg-stlad-bg">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
