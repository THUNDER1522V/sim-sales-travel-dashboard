import { Menu, Sun, Moon, RefreshCw, Download, Calendar, Wifi } from 'lucide-react'

export default function Header({
  onMenuClick,
  darkMode,
  onToggleDarkMode,
  onRefresh,
  refreshing,
  onExportCSV,
  lastUpdated,
  isLiveSupabase,
}) {
  const formattedDate = lastUpdated ? lastUpdated.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }) : '20-05-2026'

  return (
    <header className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200/80 dark:border-slate-800 px-4 md:px-6 lg:px-8 py-3.5 flex items-center justify-between sticky top-0 z-30 transition-colors duration-200">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          aria-label="Toggle mobile menu"
          className="lg:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-300 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div>
          <p className="text-[10px] tracking-widest text-[#FF6B35] font-bold uppercase">
            Telecom Platform / Commercial Intelligence
          </p>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
            Executive Sales Terminal
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* Live telemetry badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/60 shadow-subtle">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 tracking-wider uppercase flex items-center gap-1">
            <Wifi className="w-3 h-3" />
            {isLiveSupabase ? 'Supabase Live' : 'Live Telemetry'}
          </span>
        </div>

        {/* Dynamic Date */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-gray-200 dark:border-slate-800 bg-gray-50/80 dark:bg-slate-800/80 text-gray-700 dark:text-gray-300">
          <Calendar className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
          <span className="text-xs font-semibold">{formattedDate}</span>
        </div>

        {/* Theme toggle */}
        <button
          onClick={onToggleDarkMode}
          aria-label="Toggle dark mode"
          className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-300 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-slate-700"
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-gray-600" />
          )}
        </button>

        {/* Refresh button */}
        <button
          onClick={onRefresh}
          disabled={refreshing}
          aria-label="Refresh telemetry data"
          className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-300 transition-colors disabled:opacity-50 border border-transparent hover:border-gray-200 dark:hover:border-slate-700"
          title="Refresh Data"
        >
          <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin text-[#FF6B35]' : ''}`} />
        </button>

        {/* Export CSV */}
        <button
          onClick={onExportCSV}
          className="flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-gradient-to-r from-[#FF6B35] to-[#FF8F5B] text-white text-xs font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200 active:scale-95 tracking-wider uppercase"
        >
          <Download className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Export CSV</span>
          <span className="sm:hidden">CSV</span>
        </button>
      </div>
    </header>
  )
}
