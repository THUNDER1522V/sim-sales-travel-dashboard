const plans = [
  { rank: '01', name: 'Europe 10GB Pass', data: '10GB', validity: '30 Days', orders: 124, revenue: '₹98,240' },
  { rank: '02', name: 'Europe 20GB Pass', data: '20GB', validity: '30 Days', orders: 97, revenue: '₹81,320' },
  { rank: '03', name: 'USA Unlimited 30 Days', data: 'Unlimited', validity: '30 Days', orders: 88, revenue: '₹74,800' },
  { rank: '04', name: 'Asia-Pacific Unlimited 15 Days', data: '15GB', validity: '15 Days', orders: 76, revenue: '₹57,000' },
  { rank: '05', name: 'UK & Ireland 12GB Pass', data: '12GB', validity: '30 Days', orders: 62, revenue: '₹48,980' },
  { rank: '06', name: 'Middle East Express 5GB', data: '5GB', validity: '7 Days', orders: 45, revenue: '₹36,000' },
  { rank: '07', name: 'Thailand Holiday 15GB', data: '15GB', validity: '8 Days', orders: 38, revenue: '₹28,500' },
  { rank: '08', name: 'Global Starter 3GB', data: '3GB', validity: '7 Days', orders: 34, revenue: '₹25,500' },
]

export default function TopPlans() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 h-full">
      <div className="flex items-center justify-between mb-1">
        <p className="text-[10px] tracking-widest text-[#FF6B35] font-semibold uppercase">Catalog Performance</p>
      </div>
      <h3 className="text-base font-bold text-gray-900">Which SIM Plans Are Selling?</h3>
      <p className="text-xs text-gray-500 mt-0.5 mb-4">Data limits, validity terms, and package revenue</p>

      <div className="space-y-3">
        {plans.slice(0, 5).map((plan) => (
          <div key={plan.rank} className="flex items-center justify-between py-2 group hover:bg-gray-50 rounded-lg px-2 transition-colors">
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-xs font-bold text-[#FF6B35] w-5">{plan.rank}</span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">{plan.name}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] px-1.5 py-0.5 bg-emerald-50 text-emerald-600 rounded font-medium">{plan.data}</span>
                  <span className="text-[10px] text-gray-400">{plan.validity}</span>
                </div>
              </div>
            </div>
            <div className="text-right shrink-0 ml-3">
              <p className="text-xs text-gray-400"><span className="font-semibold text-gray-700">{plan.orders}</span> orders</p>
              <p className="text-sm font-bold text-gray-800">{plan.revenue}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
