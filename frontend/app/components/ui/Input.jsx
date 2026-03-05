export default function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  disabled = false,
  error,
  className = '',
}) {
  const base = `
    w-full
    bg-bg-subtle
    text-text-primary text-base font-light
    placeholder:text-text-muted
    border border-border-default
    px-4 py-2
    rounded-none
    outline-none
    transition-all duration-200
    focus:border-text-secondary
    disabled:opacity-40 disabled:cursor-not-allowed
  `

  return (
    <div className="flex flex-col gap-2">

      {label && (
        <label className="text-text-secondary text-sm font-light tracking-wide">
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${base} ${className}`}
      />

      {error && (
        <span className="text-red-500 text-xs font-light">
          {error}
        </span>
      )}

    </div>
  )
}