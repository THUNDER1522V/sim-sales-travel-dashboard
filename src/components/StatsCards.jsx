import { TrendingUp, TrendingDown, IndianRupee, Package, BarChart3, ShoppingCart } from 'lucide-react'

const iconMap = {
  mtd_revenue: IndianRupee,
  mtd_sims: Package,
  today_revenue: BarChart3,
  today_orders: ShoppingCart,
}

export default function StatsCards({ stats = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => {
        const IconComponent = iconMap[stat.id] || BarChart3
        return (
          <div
            key={stat.id || i}
            className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-gray-100 dark:border-slate-800 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] tracking-widest text-gray-400 dark:text-gray-500 font-bold uppercase">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1.5 tracking-tight">
                  {stat.value}
                </p>
              </div>
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg ${stat.shadowColor} group-hover:scale-110 transition-transform duration-300 shrink-0`}
              >
                <IconComponent className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="flex items-center gap-1.5 mt-3.5 flex-wrap">
              {stat.trend === 'up' ? (
                <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0" />
              ) : stat.trend === 'down' ? (
                <TrendingDown className="w-4 h-4 text-red-500 shrink-0" />
              ) : null}
              <span
                className={`text-xs font-bold ${
                  stat.trend === 'up'
                    ? 'text-emerald-500'
                    : stat.trend === 'down'
                    ? 'text-red-500'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {stat.change}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500 ml-1">{stat.subtext}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
