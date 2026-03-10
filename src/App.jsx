import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import TeamPage from './pages/TeamPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import Map from './pages/Map.jsx'
import WomanProfilePage from './pages/WomanProfilePage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<AboutPage />} />
      <Route path="/equipe" element={<TeamPage />} />
      <Route path="/contato" element={<ContactPage />} />
      <Route path="/map" element={<Map />} />
      <Route path="/women/:id" element={<WomanProfilePage />} />
    </Routes>
  )
}

export default App
