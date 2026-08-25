import { MapPin } from 'lucide-react'

const destinations = [
  { rank: '01', code: 'GB', name: 'United Kingdom', revenue: '₹98,234', sims: 124, share: 20.81 },
  { rank: '02', code: 'US', name: 'United States', revenue: '₹82,120', sims: 98, share: 17.4 },
  { rank: '03', code: 'TH', name: 'Thailand', revenue: '₹64,200', sims: 87, share: 13.6 },
  { rank: '04', code: 'AE', name: 'UAE', revenue: '₹48,900', sims: 65, share: 10.36 },
  { rank: '05', code: 'VN', name: 'Vietnam', revenue: '₹41,200', sims: 54, share: 8.73 },
  { rank: '06', code: 'JP', name: 'Japan', revenue: '₹38,500', sims: 42, share: 8.16 },
  { rank: '07', code: 'EU', name: 'Europe Regional', revenue: '₹32,400', sims: 38, share: 6.86 },
  { rank: '08', code: 'SG', name: 'Singapore', revenue: '₹22,100', sims: 28, share: 4.68 },
]

const flagMap = {
  GB: '🇬🇧', US: '🇺🇸', TH: '🇹🇭', AE: '🇦🇪', VN: '🇻🇳', JP: '🇯🇵', EU: '🇪🇺', SG: '🇸🇬',
}

export default function RegionMap() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100">
      <div className="flex items-center justify-between mb-1">
        <p className="text-[10px] tracking-widest text-[#FF6B35] font-semibold uppercase">Global Reach</p>
        <MapPin className="w-5 h-5 text-gray-400" />
      </div>
      <h3 className="text-base font-bold text-gray-900">Where Are Customers Connecting?</h3>
      <p className="text-xs text-gray-500 mt-0.5 mb-4">Ranked travel SIM demand and revenue share</p>

      {/* Highlight bar */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl p-3 mb-4 flex items-center gap-2">
        <span className="text-base">🇬🇧</span>
        <p className="text-xs text-gray-700">
          <span className="font-bold">United Kingdom</span> drives highest demand with <span className="font-bold">124 orders</span> (₹98,234, 20.81% share).
        </p>
      </div>

      {/* Destination list */}
      <div className="space-y-2.5">
        {destinations.slice(0, 6).map((dest) => (
          <div
            key={dest.rank}
            className="flex items-center justify-between py-1.5 group hover:bg-gray-50 rounded-lg px-2 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-gray-400 w-5">{dest.rank}</span>
              <span className="text-sm">{flagMap[dest.code]}</span>
              <div>
                <span className="text-sm font-semibold text-gray-800">{dest.name}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold text-gray-800">{dest.revenue}</span>
              <p className="text-[10px] text-gray-400">{dest.sims} SIMs · {dest.share}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
