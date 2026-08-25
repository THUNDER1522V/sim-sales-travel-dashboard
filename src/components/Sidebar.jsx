import {
  LayoutDashboard,
  BarChart3,
  Globe,
  Smartphone,
  Users,
  ClipboardList,
  X,
  Wifi,
} from 'lucide-react'

const menuItems = [
  { icon: LayoutDashboard, label: 'Executive Overview', id: 'dashboard' },
  { icon: BarChart3, label: 'Sales Trajectory', id: 'analytics' },
  { icon: Globe, label: 'Destination Matrix', id: 'destinations' },
  { icon: Smartphone, label: 'SIM Packages', id: 'plans' },
  { icon: Users, label: 'Sales Leaderboard', id: 'leaderboard' },
  { icon: ClipboardList, label: 'Audit Trail Log', id: 'audit' },
]

export default function Sidebar({ isOpen, onClose, activeTab, setActiveTab }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 bg-gradient-to-b from-[#0F172A] to-[#1a2744]
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 flex flex-col
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Wifi className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg leading-tight">AURA SIM</h1>
              <p className="text-gray-400 text-[10px] tracking-wider uppercase">Telecom BI · v2.4</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section label */}
        <div className="px-5 pt-5 pb-2">
          <p className="text-[10px] tracking-widest text-gray-500 font-semibold uppercase">Command Center</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 space-y-1">
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
                  w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium
                  transition-all duration-200 group
                  ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/15 to-transparent text-cyan-400 border-l-2 border-cyan-400'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                <item.icon
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isActive ? 'scale-110' : 'group-hover:scale-105'
                  }`}
                />
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Telemetry section */}
        <div className="px-5 pb-2 mt-4">
          <p className="text-[10px] tracking-widest text-gray-500 font-semibold uppercase">Telemetry & System</p>
        </div>

        {/* Supabase status */}
        <div className="mx-3 mb-3 p-4 rounded-xl bg-white/5 border border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-emerald-400 text-xs font-bold tracking-wider uppercase">Supabase Live Engine</p>
          </div>
          <p className="text-gray-400 text-xs">Synchronized with PostgREST</p>
          <button className="mt-3 w-full py-2 bg-white/10 text-gray-300 text-xs font-medium rounded-lg hover:bg-white/15 transition-all duration-200 flex items-center justify-center gap-2">
            ⚙️ Database Settings
          </button>
        </div>

        {/* User profile */}
        <div className="p-4 border-t border-white/10 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white text-xs font-bold">
            SIM
          </div>
          <div>
            <p className="text-white text-sm font-medium">Telecom Admin</p>
            <p className="text-gray-400 text-xs">Superuser</p>
          </div>
        </div>
      </aside>
    </>
  )
}
