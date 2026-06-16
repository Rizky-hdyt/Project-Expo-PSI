import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { QuizProvider } from './state/QuizContext'
import { AdminProvider } from './state/AdminContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QuizProvider>
        <AdminProvider>
          <App />
        </AdminProvider>
      </QuizProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
