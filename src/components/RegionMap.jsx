import { MapPin, Globe2 } from 'lucide-react'

export default function RegionMap({ destinations = [] }) {
  const topDest = destinations[0] || {
    name: 'United Kingdom',
    sims: 124,
    revenue: '₹98,234',
    share: 20.81,
    flag: '🇬🇧',
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-gray-100 dark:border-slate-800 shadow-card flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-1">
          <p className="text-[10px] tracking-widest text-[#FF6B35] font-bold uppercase">
            Global Reach
          </p>
          <MapPin className="w-4 h-4 text-gray-400 dark:text-gray-500" />
        </div>
        <h3 className="text-base font-bold text-gray-900 dark:text-white">
          Where Are Customers Connecting?
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 mb-4">
          Ranked travel SIM demand and revenue share across territories
        </p>

        {/* Highlight Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 rounded-xl p-3.5 mb-4 flex items-center gap-3 border border-blue-100 dark:border-blue-900/40">
          <span className="text-2xl shrink-0">{topDest.flag}</span>
          <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
            <span className="font-bold text-gray-900 dark:text-white">{topDest.name}</span> drives highest demand with{' '}
            <span className="font-bold text-emerald-600 dark:text-emerald-400">{topDest.sims} orders</span> ({topDest.revenue}, {topDest.share}% share).
          </p>
        </div>

        {/* Destination List */}
        <div className="space-y-3">
          {destinations.slice(0, 6).map((dest) => (
            <div
              key={dest.rank}
              className="group p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800/60 transition-colors"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-xs font-mono font-bold text-gray-400 dark:text-gray-500 w-5">
                    {dest.rank}
                  </span>
                  <span className="text-base shrink-0">{dest.flag}</span>
                  <span className="text-xs font-semibold text-gray-800 dark:text-gray-200 truncate">
                    {dest.name}
                  </span>
                </div>
                <div className="text-right shrink-0 ml-2">
                  <span className="text-xs font-bold text-gray-900 dark:text-gray-100">
                    {dest.revenue}
                  </span>
                  <span className="text-[10px] text-gray-400 dark:text-gray-500 block">
                    {dest.sims} SIMs · {dest.share}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#FF6B35] to-[#06B6D4] h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(dest.share * 3.5, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-gray-400 dark:text-gray-500">
        <span className="flex items-center gap-1">
          <Globe2 className="w-3.5 h-3.5 text-cyan-500" /> 180+ Global Roaming Zones
        </span>
        <span>Active ISO Roaming</span>
      </div>
    </div>
  )
}
