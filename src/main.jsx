import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ELatihan from './ELatihan.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ELatihan />
  </StrictMode>,
)
