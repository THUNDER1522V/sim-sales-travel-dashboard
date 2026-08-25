import { TrendingUp, TrendingDown, IndianRupee, Package, BarChart3, ShoppingCart } from 'lucide-react'

const stats = [
  {
    title: 'MTD TOTAL REVENUE',
    value: '₹4,72,087',
    change: '+79.0%',
    subtext: 'vs prev MTD (₹2.64 L)',
    trend: 'up',
    icon: IndianRupee,
    color: 'from-[#FF6B35] to-[#FF8F5B]',
    shadowColor: 'shadow-orange-500/20',
  },
  {
    title: 'MTD SIMS ORDERED',
    value: '594',
    change: '+51.5%',
    subtext: 'vs prev MTD (392 orders)',
    trend: 'up',
    icon: Package,
    color: 'from-emerald-500 to-emerald-400',
    shadowColor: 'shadow-emerald-500/20',
  },
  {
    title: "TODAY'S REVENUE",
    value: '₹29,006.40',
    change: '+368.3%',
    subtext: 'vs same day prev (₹6,194.26)',
    trend: 'up',
    icon: BarChart3,
    color: 'from-blue-500 to-blue-400',
    shadowColor: 'shadow-blue-500/20',
  },
  {
    title: "TODAY'S ORDERS & AOV",
    value: '34 SIMs',
    change: 'AOV: ₹795',
    subtext: 'Avg Daily: 41 SIMs/day',
    trend: 'neutral',
    icon: ShoppingCart,
    color: 'from-purple-500 to-purple-400',
    shadowColor: 'shadow-purple-500/20',
  },
]

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] tracking-widest text-gray-400 font-semibold uppercase">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
            <div
              className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg ${stat.shadowColor} group-hover:scale-110 transition-transform duration-300`}
            >
              <stat.icon className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="flex items-center gap-1.5 mt-3 flex-wrap">
            {stat.trend === 'up' ? (
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            ) : stat.trend === 'down' ? (
              <TrendingDown className="w-4 h-4 text-red-500" />
            ) : null}
            <span
              className={`text-sm font-semibold ${
                stat.trend === 'up'
                  ? 'text-emerald-500'
                  : stat.trend === 'down'
                  ? 'text-red-500'
                  : 'text-gray-600'
              }`}
            >
              {stat.change}
            </span>
            <span className="text-xs text-gray-400 ml-1">{stat.subtext}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
