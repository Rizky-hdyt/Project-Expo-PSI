import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Breadcrumb from './components/Breadcrumb'
import Landing from './pages/Landing'
import QuizStep1 from './pages/QuizStep1'
import QuizStep2 from './pages/QuizStep2'
import QuizStep3 from './pages/QuizStep3'
import DistrikDetail from './pages/DistrikDetail'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import NotFound from './pages/NotFound'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
    }
  }, [darkMode])

  return (
    <div className="app-container">
      <Header darkMode={darkMode} onDarkModeChange={setDarkMode} />
      <Breadcrumb />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/quiz" element={<QuizStep1 />} />
          <Route path="/quiz/step2" element={<QuizStep2 />} />
          <Route path="/quiz/step3" element={<QuizStep3 />} />
          <Route path="/distrik/:slug" element={<DistrikDetail />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
