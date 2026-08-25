import {
  LayoutDashboard,
  BarChart3,
  Globe,
  Smartphone,
  Users,
  ClipboardList,
  X,
  Wifi,
  Database,
  SlidersHorizontal,
} from 'lucide-react'

const menuItems = [
  { icon: LayoutDashboard, label: 'Executive Overview', id: 'dashboard' },
  { icon: BarChart3, label: 'Sales Trajectory', id: 'analytics' },
  { icon: Globe, label: 'Destination Matrix', id: 'destinations' },
  { icon: Smartphone, label: 'SIM Packages', id: 'plans' },
  { icon: Users, label: 'Sales Leaderboard', id: 'leaderboard' },
  { icon: ClipboardList, label: 'Audit Trail Log', id: 'audit' },
]

export default function Sidebar({
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
  onOpenDatabaseModal,
  isLiveSupabase,
}) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 bg-slate-950 text-slate-200
          border-r border-slate-800/80
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 flex flex-col justify-between
          select-none
        `}
      >
        <div>
          {/* Logo Header */}
          <div className="flex items-center justify-between p-5 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#06B6D4] flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-white font-black text-lg tracking-tight">AURA SIM</h1>
                <p className="text-slate-400 text-[10px] tracking-wider uppercase font-semibold">
                  Telecom BI · v2.4
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close sidebar"
              className="lg:hidden text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Section */}
          <div className="px-5 pt-5 pb-2">
            <p className="text-[10px] tracking-widest text-slate-500 font-bold uppercase">
              Command Center
            </p>
          </div>

          {/* Navigation Items */}
          <nav className="px-3 space-y-1">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id)
                    onClose()
                  }}
                  className={`
                    w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium
                    transition-all duration-200 group text-left
                    ${
                      isActive
                        ? 'bg-gradient-to-r from-orange-500/20 via-orange-500/10 to-transparent text-orange-400 border-l-2 border-[#FF6B35]'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/80'
                    }
                  `}
                >
                  <item.icon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isActive ? 'scale-110 text-[#FF6B35]' : 'group-hover:scale-105'
                    }`}
                  />
                  <span className="truncate">{item.label}</span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="p-3 border-t border-slate-800/80 space-y-3">
          {/* Supabase Status Box */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    isLiveSupabase ? 'bg-emerald-400 animate-pulse' : 'bg-cyan-400'
                  }`}
                />
                <p className="text-slate-200 text-xs font-bold tracking-wider uppercase flex items-center gap-1">
                  <Database className="w-3 h-3 text-[#FF6B35]" />
                  {isLiveSupabase ? 'Supabase Connected' : 'Telemetry Engine'}
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-[11px] leading-tight">
              {isLiveSupabase
                ? 'Live PostgREST PostgreSQL sync'
                : 'Synthesized commercial feed'}
            </p>
            <button
              onClick={onOpenDatabaseModal}
              className="mt-2.5 w-full py-1.5 px-2 bg-slate-800 hover:bg-slate-700/80 text-slate-300 text-xs font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 border border-slate-700"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Database Inspector</span>
            </button>
          </div>

          {/* User Profile Footer */}
          <div className="flex items-center gap-3 px-2 py-1">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#FF8F5B] flex items-center justify-center text-white text-xs font-bold shadow-sm">
              SIM
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-white text-xs font-semibold truncate">Telecom Executive</p>
              <p className="text-slate-400 text-[10px] truncate">Admin · Commercial Access</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
