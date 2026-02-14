/**
 * Componente Button reutilizable
 * 
 * @param {Object} props - Props del componente
 * @param {string} props.variant - Variante del botón: 'primary', 'secondary', 'ghost', 'outline', 'link', 'success', 'warning', 'error', 'info'
 * @param {string} props.size - Tamaño del botón: 'xs', 'sm', 'md', 'lg'
 * @param {string} props.type - Tipo de botón: 'button', 'submit', 'reset'
 * @param {boolean} props.disabled - Si el botón está deshabilitado
 * @param {function} props.onClick - Función a ejecutar al hacer clic
 * @param {string} props.className - Clases CSS adicionales
 * @param {boolean} props.asLink - Si se renderiza como elemento <a> en lugar de <button>
 * @param {string} props.href - URL si se usa como link
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
    href,
    children,
    ...props
}) {
    // Mapeo de variantes a clases de DaisyUI
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

    // Mapeo de tamaños a clases de DaisyUI
    const sizeClasses = {
        xs: 'btn-xs',
        sm: 'btn-sm',
        md: '',
        lg: 'btn-lg',
    }

    // Construir clases CSS
    const baseClasses = 'btn'
    const variantClass = variantClasses[variant] || variantClasses.primary
    const sizeClass = sizeClasses[size] || ''
    const classes = `${baseClasses} ${variantClass} ${sizeClass} ${className}`.trim()

    // Si se renderiza como link
    if (asLink) {
        return (
            <a
                href={href}
                className={classes}
                onClick={onClick}
                {...props}
            >
                {children}
            </a>
        )
    }

    // Renderizar como button
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

