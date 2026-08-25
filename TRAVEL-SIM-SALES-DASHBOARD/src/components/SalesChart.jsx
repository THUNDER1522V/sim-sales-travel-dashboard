import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { useState } from 'react'

const dailyOrdersData = [
  { name: '05-01', orders: 38 },
  { name: '05-02', orders: 42 },
  { name: '05-03', orders: 20 },
  { name: '05-04', orders: 25 },
  { name: '05-05', orders: 45 },
  { name: '05-06', orders: 48 },
  { name: '05-07', orders: 50 },
  { name: '05-08', orders: 47 },
  { name: '05-09', orders: 39 },
  { name: '05-10', orders: 35 },
  { name: '05-11', orders: 38 },
  { name: '05-12', orders: 55 },
  { name: '05-13', orders: 57 },
  { name: '05-14', orders: 60 },
  { name: '05-15', orders: 52 },
  { name: '05-16', orders: 50 },
  { name: '05-17', orders: 53 },
  { name: '05-18', orders: 48 },
  { name: '05-19', orders: 19 },
  { name: '05-20', orders: 34 },
]

const monthlyGrowthData = [
  { name: 'Jan', growth: 12 },
  { name: 'Feb', growth: 18 },
  { name: 'Mar', growth: 25 },
  { name: 'Apr', growth: 32 },
  { name: 'May', growth: 41 },
]

const staffRevenueData = [
  { name: 'Faizan', revenue: 142148 },
  { name: 'Talha', revenue: 89450 },
  { name: 'Prabhat', revenue: 76200 },
  { name: 'Bhageshri', revenue: 61900 },
  { name: 'Sanika', revenue: 44100 },
  { name: 'Nidhi', revenue: 25200 },
]

const tabs = ['Daily Orders', 'Monthly Growth', 'Staff Revenue']

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-gray-100">
        <p className="text-sm font-semibold text-gray-700 mb-1">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-xs" style={{ color: entry.color }}>
            {entry.dataKey === 'revenue' ? `₹${entry.value.toLocaleString()}` : entry.value}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function SalesChart() {
  const [activeTab, setActiveTab] = useState('Daily Orders')

  const getData = () => {
    switch (activeTab) {
      case 'Monthly Growth': return { data: monthlyGrowthData, key: 'growth' }
      case 'Staff Revenue': return { data: staffRevenueData, key: 'revenue' }
      default: return { data: dailyOrdersData, key: 'orders' }
    }
  }

  const { data, key } = getData()

  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100">
      <div className="mb-1">
        <p className="text-[10px] tracking-widest text-[#FF6B35] font-semibold uppercase">Commerce Velocity</p>
      </div>
      <h3 className="text-base font-bold text-gray-900">Daily SIM Orders (daily_summary)</h3>
      <p className="text-xs text-gray-500 mt-0.5 mb-4">Day-over-day commercial demand synthesized from Supabase daily_summary</p>

      <div className="flex items-center gap-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
              activeTab === tab
                ? 'bg-[#FF6B35] text-white shadow-sm'
                : 'bg-gray-100 text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Stats bar */}
      <div className="flex items-center gap-6 bg-gray-50 rounded-lg px-4 py-2 mb-4 text-xs">
        <span className="text-gray-500">PEAK VOLUME: <span className="font-bold text-gray-800">60</span></span>
        <span className="text-gray-500">LOWEST: <span className="font-bold text-gray-800">19</span></span>
        <span className="text-gray-500">DAILY AVERAGE: <span className="font-bold text-gray-800">41</span></span>
        <span className="text-gray-500">TOP PERFORMER: <span className="font-bold text-emerald-500">Faizan</span></span>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="name" tick={{ fontSize: 11 }} stroke="#94a3b8" />
          <YAxis tick={{ fontSize: 11 }} stroke="#94a3b8" />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey={key}
            stroke="#06b6d4"
            strokeWidth={2}
            fill="url(#chartGrad)"
            dot={{ r: 3, fill: '#06b6d4', stroke: '#fff', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
