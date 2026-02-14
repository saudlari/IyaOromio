import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import TeamPage from './pages/TeamPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import Map from './pages/Map.jsx'
import BackgroundWrapper from './components/BackgroundWrapper'

function App() {
  return (
    <BackgroundWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BackgroundWrapper>
  )
}

export default App
