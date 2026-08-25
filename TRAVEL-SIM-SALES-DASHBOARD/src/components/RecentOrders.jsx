const leaderboard = [
  { rank: '#01', name: 'Faizan', badge: '#1 TOP SELLER', mtdRevenue: '₹1,42,148', mtdOrders: 186, todayOrders: 10, todayRevenue: '₹10,534.20' },
  { rank: '#02', name: 'Talha', badge: '#2 RANK', mtdRevenue: '₹89,450', mtdOrders: 112, todayOrders: 6, todayRevenue: '₹5,120' },
  { rank: '#03', name: 'Prabhat', badge: '#3 RANK', mtdRevenue: '₹76,200', mtdOrders: 95, todayOrders: 5, todayRevenue: '₹4,500' },
  { rank: '#04', name: 'Bhageshri', badge: '#4 RANK', mtdRevenue: '₹61,900', mtdOrders: 78, todayOrders: 4, todayRevenue: '₹3,400' },
  { rank: '#05', name: 'Sanika', badge: null, mtdRevenue: '₹44,100', mtdOrders: 54, todayOrders: 3, todayRevenue: '₹2,350' },
  { rank: '#06', name: 'Nidhi', badge: null, mtdRevenue: '₹25,200', mtdOrders: 32, todayOrders: 2, todayRevenue: '₹1,450' },
  { rank: '#07', name: 'Karishma', badge: null, mtdRevenue: '₹17,800', mtdOrders: 21, todayOrders: 2, todayRevenue: '₹1,100' },
  { rank: '#08', name: 'Rahul', badge: null, mtdRevenue: '₹8,300', mtdOrders: 9, todayOrders: 1, todayRevenue: '₹450' },
  { rank: '#09', name: 'Nadeem', badge: null, mtdRevenue: '₹4,600', mtdOrders: 5, todayOrders: 1, todayRevenue: '₹102.20' },
  { rank: '#10', name: 'Rahel', badge: null, mtdRevenue: '₹2,389', mtdOrders: 2, todayOrders: 0, todayRevenue: '—' },
]

const badgeColors = {
  '#1 TOP SELLER': 'bg-gradient-to-r from-amber-400 to-amber-500 text-white',
  '#2 RANK': 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800',
  '#3 RANK': 'bg-gradient-to-r from-orange-300 to-orange-400 text-white',
  '#4 RANK': 'bg-gradient-to-r from-blue-300 to-blue-400 text-white',
}

export default function RecentOrders() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100">
      <div className="mb-1">
        <p className="text-[10px] tracking-widest text-[#FF6B35] font-semibold uppercase">Commercial Team</p>
      </div>
      <h3 className="text-base font-bold text-gray-900">Salesperson Performance & Revenue Leaderboard</h3>
      <p className="text-xs text-gray-500 mt-0.5 mb-4">Individual monthly sales velocity and today's conversion telemetry</p>

      {/* Top 4 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        {leaderboard.slice(0, 4).map((person) => (
          <div key={person.rank} className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-bold text-gray-800">{person.name}</h4>
              {person.badge && (
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${badgeColors[person.badge] || 'bg-gray-200 text-gray-700'}`}>
                  {person.badge}
                </span>
              )}
            </div>
            <p className="text-xl font-bold text-emerald-500">{person.mtdRevenue}</p>
            <p className="text-xs text-gray-400 mt-1">{person.mtdOrders} SIM orders MTD</p>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
              <span className="text-xs text-gray-500">Today: {person.todayOrders} orders</span>
              <span className="text-xs font-semibold text-emerald-500">{person.todayRevenue}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Full table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-2 px-2 text-[10px] tracking-widest text-gray-400 font-semibold uppercase">Rank</th>
              <th className="text-left py-2 px-2 text-[10px] tracking-widest text-gray-400 font-semibold uppercase">Staff Name</th>
              <th className="text-right py-2 px-2 text-[10px] tracking-widest text-gray-400 font-semibold uppercase">MTD Revenue</th>
              <th className="text-right py-2 px-2 text-[10px] tracking-widest text-gray-400 font-semibold uppercase">MTD Orders</th>
              <th className="text-right py-2 px-2 text-[10px] tracking-widest text-gray-400 font-semibold uppercase">Today Revenue</th>
              <th className="text-right py-2 px-2 text-[10px] tracking-widest text-gray-400 font-semibold uppercase">Today Orders</th>
              <th className="text-center py-2 px-2 text-[10px] tracking-widest text-gray-400 font-semibold uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((person) => (
              <tr key={person.rank} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-2 font-bold text-emerald-500">{person.rank}</td>
                <td className="py-3 px-2 font-semibold text-gray-800">{person.name}</td>
                <td className="py-3 px-2 text-right font-medium text-gray-700">{person.mtdRevenue}</td>
                <td className="py-3 px-2 text-right text-gray-600">{person.mtdOrders}</td>
                <td className="py-3 px-2 text-right font-medium text-emerald-500">{person.todayRevenue}</td>
                <td className="py-3 px-2 text-right text-gray-600">{person.todayOrders || '—'}</td>
                <td className="py-3 px-2 text-center">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-50 text-emerald-600">Active</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-3">Showing 1-10 of 10 staff members</p>
    </div>
  )
}
