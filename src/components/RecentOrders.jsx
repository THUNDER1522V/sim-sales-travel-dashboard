import { useState } from 'react'
import { Trophy, Search, Users, ShieldCheck } from 'lucide-react'

const badgeColors = {
  '#1 TOP SELLER': 'bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-sm shadow-amber-500/30',
  '#2 RANK': 'bg-gradient-to-r from-slate-300 to-slate-400 text-slate-900',
  '#3 RANK': 'bg-gradient-to-r from-amber-600 to-amber-700 text-white',
  '#4 RANK': 'bg-gradient-to-r from-blue-400 to-blue-500 text-white',
}

export default function RecentOrders({ leaderboard = [] }) {
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = leaderboard.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-gray-100 dark:border-slate-800 shadow-card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <p className="text-[10px] tracking-widest text-[#FF6B35] font-bold uppercase">
              Commercial Team
            </p>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-200/50 dark:border-emerald-900/50">
              10 Active Staff
            </span>
          </div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white mt-0.5 flex items-center gap-2">
            Salesperson Performance & Revenue Leaderboard
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Individual monthly sales velocity and today's conversion telemetry
          </p>
        </div>

        {/* Search filter */}
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search salesperson..."
            className="pl-9 pr-3 py-1.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50/80 dark:bg-slate-800 text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/20 focus:border-[#FF6B35] transition-all w-full sm:w-48"
          />
        </div>
      </div>

      {/* Top 4 Podium Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {leaderboard.slice(0, 4).map((person, idx) => (
          <div
            key={person.rank}
            className="relative bg-gradient-to-b from-gray-50 to-white dark:from-slate-800/80 dark:to-slate-900 rounded-xl p-4 border border-gray-100 dark:border-slate-800 hover:shadow-md transition-all group overflow-hidden"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {idx === 0 && <Trophy className="w-4 h-4 text-amber-500" />}
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">{person.name}</h4>
              </div>
              {person.badge && (
                <span
                  className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                    badgeColors[person.badge] || 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {person.badge}
                </span>
              )}
            </div>

            <p className="text-xl font-black text-emerald-600 dark:text-emerald-400">
              {person.mtdRevenue}
            </p>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
              {person.mtdOrders} SIM orders MTD
            </p>

            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-slate-800 text-xs">
              <span className="text-gray-500 dark:text-gray-400">Today: {person.todayOrders} orders</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">{person.todayRevenue}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Full Leaderboard Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-gray-100 dark:border-slate-800 text-gray-400 dark:text-gray-500 uppercase tracking-wider text-[10px]">
              <th className="text-left py-2.5 px-3">Rank</th>
              <th className="text-left py-2.5 px-3">Staff Name</th>
              <th className="text-right py-2.5 px-3">MTD Revenue</th>
              <th className="text-right py-2.5 px-3">MTD Orders</th>
              <th className="text-right py-2.5 px-3">Today Revenue</th>
              <th className="text-right py-2.5 px-3">Today Orders</th>
              <th className="text-center py-2.5 px-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-slate-800/60">
            {filtered.map((person) => (
              <tr
                key={person.rank}
                className="hover:bg-gray-50/80 dark:hover:bg-slate-800/40 transition-colors"
              >
                <td className="py-3 px-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  {person.rank}
                </td>
                <td className="py-3 px-3 font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center text-[10px] font-bold text-gray-700 dark:text-gray-200">
                    {person.name[0]}
                  </div>
                  <span>{person.name}</span>
                </td>
                <td className="py-3 px-3 text-right font-bold text-gray-800 dark:text-gray-200">
                  {person.mtdRevenue}
                </td>
                <td className="py-3 px-3 text-right text-gray-600 dark:text-gray-400 font-medium">
                  {person.mtdOrders}
                </td>
                <td className="py-3 px-3 text-right font-bold text-emerald-600 dark:text-emerald-400">
                  {person.todayRevenue}
                </td>
                <td className="py-3 px-3 text-right text-gray-600 dark:text-gray-400 font-medium">
                  {person.todayOrders || '—'}
                </td>
                <td className="py-3 px-3 text-center">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      person.status === 'Active'
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-900/60'
                        : 'bg-gray-100 dark:bg-slate-800 text-gray-500'
                    }`}
                  >
                    {person.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
        <span className="flex items-center gap-1">
          <Users className="w-3.5 h-3.5 text-cyan-500" /> Showing {filtered.length} of {leaderboard.length} staff members
        </span>
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Verified Commission Metrics
        </span>
      </div>
    </div>
  )
}
