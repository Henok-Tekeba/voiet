'use client'

export default function Input({ type = 'text', placeholder, value, onChange, fullWidth = false, error = '' }) {
  return (
    <div className={fullWidth ? 'w-full' : ''}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          bg-[#111827] border text-white placeholder-[#64748B] 
          rounded-lg px-4 py-3 text-[15px] outline-none transition-all duration-150
          focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20
          ${fullWidth ? 'w-full' : ''}
          ${error ? 'border-[#EF4444]' : 'border-[#1E293B]'}
        `}
      />
      {error && (
        <p className="text-[#EF4444] text-sm mt-1">{error}</p>
      )}
    </div>
  )
}