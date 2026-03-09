import Button from './Button'

export default function SeeFactsheetButton({ to, className = '' }) {
  return (
    <Button asLink to={to} variant="primary" className={`btn-md mt-2 ${className}`.trim()}>
      Ver ficha
    </Button>
  )
}
