import { Menu, Sun, RefreshCw, Download, Calendar } from 'lucide-react'

export default function Header({ onMenuClick }) {
  return (
    <header className="bg-white border-b border-gray-200/80 px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <p className="text-[10px] tracking-widest text-[#FF6B35] font-semibold uppercase">Telecom Platform / Commercial Intelligence</p>
          <h2 className="text-lg font-bold text-gray-900">Executive Sales Terminal</h2>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Live telemetry */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200 bg-emerald-50">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-emerald-700 tracking-wider uppercase">Live Telemetry</span>
        </div>

        {/* Date */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span className="text-xs font-medium text-gray-700">20-05-2026</span>
        </div>

        {/* Theme toggle */}
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Sun className="w-5 h-5 text-gray-500" />
        </button>

        {/* Refresh */}
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <RefreshCw className="w-5 h-5 text-gray-500" />
        </button>

        {/* Export CSV */}
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF6B35] to-[#FF8F5B] text-white text-xs font-bold rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200 active:scale-95 tracking-wider uppercase">
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>
    </header>
  )
}
