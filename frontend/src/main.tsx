import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-[url('/background2.svg')] bg-cover bg-center"></div>

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative">
        <App />
      </div>
    </div>
  </StrictMode>

)
