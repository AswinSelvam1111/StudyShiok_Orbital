import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Explore from './Explore'
import Dashboard from './Dashboard'
import Maps from './Maps'
import Suggest from './SuggestSpot'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* navbar tabs */}
        <Route path="/explore" element={<Explore />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/suggest" element={<Suggest />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
)