import { CheckCircle2, AlertCircle, Info } from 'lucide-react'

export default function Toast({ toast }) {
  if (!toast) return null

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
      default:
        return <Info className="w-4 h-4 text-cyan-400 shrink-0" />
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-none">
      <div className="flex items-center gap-3 bg-gray-900/95 dark:bg-slate-800/95 text-white px-4 py-3 rounded-xl shadow-2xl border border-white/10 backdrop-blur-md text-xs font-medium">
        {getIcon()}
        <span>{toast.message}</span>
      </div>
    </div>
  )
}
