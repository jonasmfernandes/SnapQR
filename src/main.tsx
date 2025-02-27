import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import Register from './Register.tsx'

createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
  <Routes>
    <Route path="/dashboard" element={<App />}/>
    <Route path="/register" element={<Register />}/>
  </Routes>
  </BrowserRouter>

)
