import { useState } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const tabs = ['Daily Orders', 'Monthly Growth', 'Staff Revenue']

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl p-3 shadow-2xl border border-gray-100 dark:border-slate-800 text-xs">
        <p className="font-bold text-gray-800 dark:text-gray-200 mb-1">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="font-semibold" style={{ color: entry.color }}>
            {entry.name === 'revenue'
              ? `Revenue: ₹${Number(entry.value).toLocaleString('en-IN')}`
              : entry.name === 'growth'
              ? `MoM Growth: +${entry.value}%`
              : `Orders: ${entry.value} SIMs`}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function SalesChart({
  dailyOrders = [],
  monthlyGrowth = [],
  leaderboard = [],
}) {
  const [activeTab, setActiveTab] = useState('Daily Orders')

  const staffRevenueData = leaderboard.map((item) => ({
    name: item.name,
    revenue: item.rawRevenue || 0,
  }))

  const getData = () => {
    switch (activeTab) {
      case 'Monthly Growth':
        return {
          data: monthlyGrowth,
          key: 'growth',
          color: '#10b981',
          name: 'growth',
          unit: '%',
        }
      case 'Staff Revenue':
        return {
          data: staffRevenueData,
          key: 'revenue',
          color: '#FF6B35',
          name: 'revenue',
          unit: '₹',
        }
      default:
        return {
          data: dailyOrders,
          key: 'orders',
          color: '#06b6d4',
          name: 'orders',
          unit: '',
        }
    }
  }

  const { data, key, color, name } = getData()

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-gray-100 dark:border-slate-800 shadow-card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <p className="text-[10px] tracking-widest text-[#FF6B35] font-bold uppercase">
            Commerce Velocity
          </p>
          <h3 className="text-base font-bold text-gray-900 dark:text-white">
            Daily SIM Sales Trajectory & Volume
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Day-over-day commercial demand synthesized from PostgREST daily telemetry
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-slate-800 p-1 rounded-xl shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-white dark:bg-slate-900 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-gray-50 dark:bg-slate-800/60 rounded-xl p-3 mb-5 text-xs">
        <div>
          <span className="text-gray-400 dark:text-gray-500 text-[10px] uppercase font-bold block">Peak Volume</span>
          <span className="font-bold text-gray-800 dark:text-gray-200 text-sm">60 SIMs</span>
        </div>
        <div>
          <span className="text-gray-400 dark:text-gray-500 text-[10px] uppercase font-bold block">Lowest Day</span>
          <span className="font-bold text-gray-800 dark:text-gray-200 text-sm">19 SIMs</span>
        </div>
        <div>
          <span className="text-gray-400 dark:text-gray-500 text-[10px] uppercase font-bold block">Daily Average</span>
          <span className="font-bold text-gray-800 dark:text-gray-200 text-sm">41 SIMs/day</span>
        </div>
        <div>
          <span className="text-gray-400 dark:text-gray-500 text-[10px] uppercase font-bold block">Top Performer</span>
          <span className="font-bold text-emerald-500 text-sm">Faizan (38.8%)</span>
        </div>
      </div>

      {/* Area Chart */}
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id={`grad-${name}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.4} />
                <stop offset="95%" stopColor={color} stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" opacity={0.15} />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={{ stroke: '#94a3b8', opacity: 0.2 }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={{ stroke: '#94a3b8', opacity: 0.2 }}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey={key}
              name={name}
              stroke={color}
              strokeWidth={2.5}
              fill={`url(#grad-${name})`}
              dot={{ r: 3.5, fill: color, stroke: '#ffffff', strokeWidth: 2 }}
              activeDot={{ r: 6, fill: color, stroke: '#ffffff', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
