import { Smartphone, Zap } from 'lucide-react'

export default function TopPlans({ plans = [] }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-gray-100 dark:border-slate-800 shadow-card flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-1">
          <p className="text-[10px] tracking-widest text-[#FF6B35] font-bold uppercase">
            Catalog Performance
          </p>
          <Smartphone className="w-4 h-4 text-gray-400 dark:text-gray-500" />
        </div>
        <h3 className="text-base font-bold text-gray-900 dark:text-white">
          Which SIM Packages Are Selling?
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 mb-4">
          Data limits, validity terms, and package revenue conversion
        </p>

        <div className="space-y-3">
          {plans.slice(0, 5).map((plan) => (
            <div
              key={plan.rank}
              className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800/60 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-xs font-mono font-bold text-[#FF6B35] w-5">
                  {plan.rank}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-gray-900 dark:text-white truncate">
                    {plan.name}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] px-1.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded font-semibold border border-emerald-200/50 dark:border-emerald-900/50">
                      {plan.data}
                    </span>
                    <span className="text-[10px] text-gray-400 dark:text-gray-500">
                      {plan.validity}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0 ml-3">
                <p className="text-xs font-bold text-gray-900 dark:text-white">
                  {plan.revenue}
                </p>
                <p className="text-[10px] text-gray-400 dark:text-gray-500">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">{plan.orders}</span> orders
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-gray-400 dark:text-gray-500">
        <span className="flex items-center gap-1">
          <Zap className="w-3.5 h-3.5 text-amber-500" /> Instant eSIM Delivery
        </span>
        <span>QR & Direct Profile</span>
      </div>
    </div>
  )
}
