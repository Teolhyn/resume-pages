import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="relative min-h-screen bg-white">
      <div className="relative">
        <App />
      </div>
    </div>
  </StrictMode>

)
