import background1 from '../assets/Background.webp'
import background2 from '../assets/Background2.webp'

export default function BackgroundWrapper({ children }) {
  return (
    <div 
      className="background-wrapper"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url(${background2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Capa adicional con Background.webp superpuesta */}
      <div
        className="background-overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${background1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          opacity: 0.5,
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}

