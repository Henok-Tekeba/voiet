'use client'

export default function Button({ children, onClick, variant = 'primary', disabled = false, fullWidth = false, type = 'button' }) {
  const base = `inline-flex items-center justify-center px-6 py-3 rounded-lg text-[15px] font-semibold transition-all duration-150 outline-none ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`

  const variants = {
    primary: 'bg-[#0066FF] text-white hover:bg-[#0052CC]',
    secondary: 'bg-transparent text-white border border-[#1E293B] hover:border-white',
    light: 'bg-white text-[#0066FF] hover:bg-[#E6F0FF]',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  )
}