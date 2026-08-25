import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatsCards from './components/StatsCards'
import SalesChart from './components/SalesChart'
import RecentOrders from './components/RecentOrders'
import TopPlans from './components/TopPlans'
import RegionMap from './components/RegionMap'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">

            {/* Real-time signal banner */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shrink-0">
                <span className="text-white text-sm">⚡</span>
              </div>
              <div className="flex items-center gap-2 flex-1">
                <span className="text-[10px] tracking-widest text-emerald-600 font-bold uppercase bg-emerald-50 px-2 py-0.5 rounded">Real-Time Signals</span>
                <p className="text-sm text-gray-700">
                  <span className="font-bold">Faizan</span> leads staff performance with <span className="font-bold">₹1,42,148</span> • Top territory <span className="font-bold">United Kingdom</span> (20.81% revenue share).
                </p>
              </div>
              <button className="text-xs text-[#FF6B35] font-semibold hover:underline shrink-0 tracking-wider uppercase">
                View Charts →
              </button>
            </div>

            {/* Stats Cards */}
            <StatsCards />

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <SalesChart />
              </div>
              <div>
                <RegionMap />
              </div>
            </div>

            {/* Destinations & Plans Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RegionMap />
              <TopPlans />
            </div>

            {/* Full-width Leaderboard */}
            <RecentOrders />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
