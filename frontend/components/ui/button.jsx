export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
}) {
  const base = `
    inline-flex items-center justify-center
    font-body font-light
    transition-all duration-200
    cursor-pointer disabled:cursor-not-allowed disabled:opacity-40
  `

  const variants = {
    primary: `
      bg-accent-default text-bg-base
      hover:bg-accent-hover
      shadow-sm hover:shadow-md
    `,
    secondary: `
      bg-bg-elevated text-text-primary
      border border-border-default
      hover:border-text-muted hover:bg-bg-elevated
      shadow-sm
    `,
  }

  const sizes = {
    sm: 'text-sm px-8 py-2 rounded-none',
    md: 'text-base px-4 py-2 rounded-none',
    lg: 'text-lg px-6 py-3 rounded-none',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}