export default function Card({
  children,
  variant = 'default',
  className = '',
}) {
  const base = `
    bg-bg-subtle
    border border-border-default
    p-6 sm:p-8
    rounded-none
    transition-all duration-200
    relative
    min-h-[220px] sm:min-h-[280px]
  `

  const variants = {
    default: ``,
    hover: `
      hover:border-text-muted
      hover:-translate-y-2
      cursor-pointer
    `,
    bracket: `
      border-none
      hover:-translate-y-2
      cursor-pointer
    `,
  }

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {variant === 'bracket' && (
        <>
          <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-text-muted" />
          <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-text-muted" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-text-muted" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-text-muted" />
        </>
      )}
      {children}
    </div>
  )
}