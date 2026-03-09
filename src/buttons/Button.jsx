import { Link } from 'react-router-dom'

/**
 * Componente Button reutilizable
 *
 * @param {Object} props - Props del componente
 * @param {string} props.variant - Variante: 'primary', 'secondary', 'ghost', 'outline', 'link', 'success', 'warning', 'error', 'info'
 * @param {string} props.size - Tamaño: 'xs', 'sm', 'md', 'lg'
 * @param {string} props.type - Tipo: 'button', 'submit', 'reset'
 * @param {boolean} props.disabled - Si está deshabilitado
 * @param {function} props.onClick - Función al hacer clic
 * @param {string} props.className - Clases CSS adicionales
 * @param {boolean} props.asLink - Si se renderiza como Link de React Router
 * @param {string} props.to - Ruta si asLink
 * @param {string} props.href - URL externa si asLink
 * @param {React.ReactNode} props.children - Contenido del botón
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  onClick,
  className = '',
  asLink = false,
  to,
  href,
  children,
  ...props
}) {
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
    outline: 'btn-outline',
    link: 'btn-link',
    success: 'btn-success',
    warning: 'btn-warning',
    error: 'btn-error',
    info: 'btn-info',
  }

  const sizeClasses = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  }

  const baseClasses = 'btn'
  const variantClass = variantClasses[variant] || variantClasses.primary
  const sizeClass = sizeClasses[size] || ''
  const classes = `${baseClasses} ${variantClass} ${sizeClass} ${className}`.trim()

  if (asLink) {
    if (to) {
      return (
        <Link to={to} className={classes} onClick={onClick} {...props}>
          {children}
        </Link>
      )
    }
    return (
      <a href={href} className={classes} onClick={onClick} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}
