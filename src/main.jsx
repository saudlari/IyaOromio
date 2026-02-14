import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import App from './App.jsx'
import BackgroundWrapper from './components/BackgroundWrapper.jsx'


createRoot(document.getElementById('root')).render( <StrictMode>
  <BrowserRouter>
    <BackgroundWrapper>
      <Header />
      <App />
      <Footer />
    </BackgroundWrapper>
  </BrowserRouter>
</StrictMode>)
