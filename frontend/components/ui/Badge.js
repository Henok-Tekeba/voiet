export default function Badge({ children, variant = 'default' }) {
  const variants = {
    default: 'bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20',
    success: 'bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20',
    dark: 'bg-[#1E293B] text-[#94A3B8] border border-[#1E293B]',
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}