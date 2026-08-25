import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatsCards from './components/StatsCards'
import SalesChart from './components/SalesChart'
import RecentOrders from './components/RecentOrders'
import TopPlans from './components/TopPlans'
import RegionMap from './components/RegionMap'
import AuditTrail from './components/AuditTrail'
import DatabaseModal from './components/DatabaseModal'
import Toast from './components/Toast'
import { useDashboard } from './hooks/useDashboard'
import { Sparkles, ArrowRight, Activity, ShieldCheck } from 'lucide-react'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [databaseModalOpen, setDatabaseModalOpen] = useState(false)

  const {
    data,
    loading,
    refreshing,
    lastUpdated,
    toast,
    darkMode,
    toggleDarkMode,
    refreshData,
    exportCSV,
  } = useDashboard()

  if (loading || !data) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-[#FF6B35] border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">
            Initializing Telecom Telemetry Engine...
          </p>
        </div>
      </div>
    )
  }

  const { stats, dailyOrders, monthlyGrowth, leaderboard, destinations, plans, auditLogs, isLiveSupabase } = data

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-950 text-gray-800 dark:text-gray-100 overflow-hidden font-sans transition-colors duration-200">
      {/* Toast Notification */}
      <Toast toast={toast} />

      {/* Database Inspector Modal */}
      <DatabaseModal
        isOpen={databaseModalOpen}
        onClose={() => setDatabaseModalOpen(false)}
        onRefreshData={refreshData}
      />

      {/* Sidebar Navigation */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenDatabaseModal={() => setDatabaseModalOpen(true)}
        isLiveSupabase={isLiveSupabase}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          darkMode={darkMode}
          onToggleDarkMode={toggleDarkMode}
          onRefresh={refreshData}
          refreshing={refreshing}
          onExportCSV={exportCSV}
          lastUpdated={lastUpdated}
          isLiveSupabase={isLiveSupabase}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">

            {/* TAB: EXECUTIVE OVERVIEW (DEFAULT) */}
            {activeTab === 'dashboard' && (
              <>
                {/* Real-time Signal Banner */}
                <div className="bg-gradient-to-r from-blue-50/80 via-indigo-50/80 to-purple-50/80 dark:from-blue-950/40 dark:via-indigo-950/40 dark:to-purple-950/40 rounded-2xl p-4 border border-blue-100 dark:border-blue-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-subtle">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF6B35] to-amber-500 flex items-center justify-center shrink-0 shadow-md shadow-orange-500/20 text-white">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[9px] tracking-widest text-emerald-700 dark:text-emerald-300 font-bold uppercase bg-emerald-100/80 dark:bg-emerald-950 px-2 py-0.5 rounded-full">
                          Live Signal
                        </span>
                        <span className="text-[11px] text-gray-400 dark:text-gray-500 font-medium">
                          PostgREST Telemetry
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-bold text-gray-900 dark:text-white">Faizan</span> leads staff performance with <span className="font-bold text-emerald-600 dark:text-emerald-400">₹1,42,148</span> • Top territory <span className="font-bold text-gray-900 dark:text-white">United Kingdom</span> (20.81% revenue share).
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('analytics')}
                    className="text-xs text-[#FF6B35] font-bold hover:underline shrink-0 tracking-wider uppercase flex items-center gap-1 self-end sm:self-center"
                  >
                    <span>View Analytics</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Primary Stats Cards */}
                <StatsCards stats={stats} />

                {/* Charts & Map Row (1 Unique RegionMap) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <SalesChart
                      dailyOrders={dailyOrders}
                      monthlyGrowth={monthlyGrowth}
                      leaderboard={leaderboard}
                    />
                  </div>
                  <div className="h-full">
                    <RegionMap destinations={destinations} />
                  </div>
                </div>

                {/* Catalog Plans & Performance Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <TopPlans plans={plans} />
                  
                  {/* Quick System Telemetry Card */}
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-gray-100 dark:border-slate-800 shadow-card flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-[10px] tracking-widest text-[#FF6B35] font-bold uppercase">
                          System Diagnostics
                        </p>
                        <Activity className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                      </div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white">
                        Network Telemetry & Health
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 mb-4">
                        Real-time status of backend PostgREST endpoints & Edge caching
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-slate-800">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold">API Gateway</p>
                          <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> 99.98% Uptime
                          </p>
                        </div>
                        <div className="p-3 rounded-xl bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-slate-800">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold">Order Latency</p>
                          <p className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">
                            ~38ms Edge
                          </p>
                        </div>
                        <div className="p-3 rounded-xl bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-slate-800">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold">Active Carriers</p>
                          <p className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">
                            48 Core Partners
                          </p>
                        </div>
                        <div className="p-3 rounded-xl bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-slate-800">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold">Security State</p>
                          <p className="text-sm font-bold text-cyan-600 dark:text-cyan-400 mt-0.5 flex items-center gap-1">
                            <ShieldCheck className="w-3.5 h-3.5" /> TLS 1.3 Strict
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-gray-400 dark:text-gray-500">Auto-sync active every 30s</span>
                      <button
                        onClick={() => setDatabaseModalOpen(true)}
                        className="text-xs text-[#FF6B35] font-bold hover:underline"
                      >
                        Inspect PostgREST →
                      </button>
                    </div>
                  </div>
                </div>

                {/* Full-width Commercial Leaderboard */}
                <RecentOrders leaderboard={leaderboard} />
              </>
            )}

            {/* TAB: SALES TRAJECTORY */}
            {activeTab === 'analytics' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Sales Trajectory & Analytics</h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Deep commercial breakdown across daily orders, monthly growth, and team revenue</p>
                  </div>
                </div>
                <StatsCards stats={stats} />
                <SalesChart
                  dailyOrders={dailyOrders}
                  monthlyGrowth={monthlyGrowth}
                  leaderboard={leaderboard}
                />
              </div>
            )}

            {/* TAB: DESTINATION MATRIX */}
            {activeTab === 'destinations' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Global Destination Matrix</h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Ranked international demand, roaming coverage, and country revenue share</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <RegionMap destinations={destinations} />
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-slate-800 shadow-card">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Regional Market Insights</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                      Europe and North America represent over 45% of total travel SIM orders. Emerging demand in Southeast Asia (Thailand & Vietnam) showed a +62% increase this quarter.
                    </p>
                    <div className="space-y-3 text-xs">
                      {destinations.slice(0, 5).map((d) => (
                        <div key={d.code} className="flex justify-between items-center p-3 rounded-xl bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-slate-800">
                          <span className="font-semibold text-gray-800 dark:text-gray-200">{d.flag} {d.name}</span>
                          <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">{d.revenue} ({d.sims} SIMs)</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: SIM PACKAGES */}
            {activeTab === 'plans' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">SIM Packages & Catalog</h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Available travel SIM and eSIM bundles with pricing, limits, and conversion metrics</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {plans.map((p) => (
                    <div key={p.rank} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-gray-100 dark:border-slate-800 shadow-card flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold text-[#FF6B35]">{p.rank}</span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                            {p.data}
                          </span>
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm">{p.name}</h4>
                        <p className="text-xs text-gray-400 mt-1">Validity: {p.validity}</p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-gray-400">Revenue</p>
                          <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{p.revenue}</p>
                        </div>
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{p.orders} orders</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: SALES LEADERBOARD */}
            {activeTab === 'leaderboard' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Commercial Sales Leaderboard</h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Team ranking, commissions, and live conversion velocity</p>
                  </div>
                </div>
                <RecentOrders leaderboard={leaderboard} />
              </div>
            )}

            {/* TAB: AUDIT TRAIL LOG */}
            {activeTab === 'audit' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">System & Commercial Audit Trail</h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Real-time log of orders provisioned, catalog updates, and sync operations</p>
                  </div>
                </div>
                <AuditTrail auditLogs={auditLogs} />
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  )
}

export default App
