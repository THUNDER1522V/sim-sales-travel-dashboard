import { ClipboardList, ShieldCheck, CheckCircle2, Clock } from 'lucide-react'

export default function AuditTrail({ auditLogs = [] }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-slate-800 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[10px] tracking-widest text-[#FF6B35] font-semibold uppercase">Security & Compliance</p>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Commercial Telemetry Audit Trail Log</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Immutable log stream of order activations, catalog provisioning, and database sync heartbeats
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          <ShieldCheck className="w-4 h-4" />
          <span>Audit Engine Verified</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-gray-100 dark:border-slate-800 text-gray-400 dark:text-gray-500 uppercase tracking-wider text-[10px]">
              <th className="py-3 px-3">Event ID</th>
              <th className="py-3 px-3">Timestamp</th>
              <th className="py-3 px-3">Action Type</th>
              <th className="py-3 px-3">Entity / Target</th>
              <th className="py-3 px-3">Operator</th>
              <th className="py-3 px-3 text-right">Value</th>
              <th className="py-3 px-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-slate-800/60">
            {auditLogs.map((log) => (
              <tr
                key={log.id}
                className="hover:bg-gray-50/70 dark:hover:bg-slate-800/40 transition-colors"
              >
                <td className="py-3.5 px-3 font-mono font-medium text-gray-500 dark:text-gray-400">
                  {log.id}
                </td>
                <td className="py-3.5 px-3 text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-gray-400" />
                  <span>{log.timestamp}</span>
                </td>
                <td className="py-3.5 px-3 font-semibold text-gray-800 dark:text-gray-200">
                  {log.action}
                </td>
                <td className="py-3.5 px-3 text-gray-700 dark:text-gray-300 font-medium">
                  {log.entity}
                </td>
                <td className="py-3.5 px-3 text-gray-600 dark:text-gray-400">
                  {log.operator}
                </td>
                <td className="py-3.5 px-3 text-right font-semibold text-emerald-600 dark:text-emerald-400">
                  {log.amount}
                </td>
                <td className="py-3.5 px-3 text-center">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-900/60">
                    <CheckCircle2 className="w-3 h-3" /> {log.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <span className="flex items-center gap-1">
          <ClipboardList className="w-3.5 h-3.5 text-cyan-500" /> Showing recent synchronized events
        </span>
        <span className="text-[11px] font-mono">Encryption: AES-256-GCM · TLS 1.3</span>
      </div>
    </div>
  )
}
