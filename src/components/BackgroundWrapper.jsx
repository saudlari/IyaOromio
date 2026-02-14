import background1 from '../assets/Background.webp'
import background2 from '../assets/Background2.webp'

export default function BackgroundWrapper({ children }) {
  return (
    <div 
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {/* Background base - Background1 (más atrás) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          minHeight: '100vh',
          backgroundImage: `url(${background1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      
      {/* Background overlay - Background2 (encima de Background1) con animación */}
      <div
        style={{
          position: 'fixed',
          top: '160px',
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: 'calc(100vh - 64px)',
          zIndex: 1,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <div
          className="background2-animated"
          style={{
            position: 'absolute',
            top: 0,
            left: '-10%',
            width: '120%',
            height: '100%',
            backgroundImage: `url(${background2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            animation: 'slideRight 20s ease-in-out infinite alternate',
            willChange: 'transform',
          }}
        />
      </div>
      
      {/* Overlay oscuro para mejorar legibilidad */}
      <div
        style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: 'calc(100vh - 64px)',
          backgroundColor: 'rgba(0, 0, 0, 0.65)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      
      {/* Contenido */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {children}
      </div>
    </div>
  )
}