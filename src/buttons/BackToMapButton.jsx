import Button from './Button'

export default function BackToMapButton({ className = '', children = '← Voltar ao mapa' }) {
  return (
    <Button asLink to="/map" variant="secondary" className={className}>
      {children}
    </Button>
  )
}
