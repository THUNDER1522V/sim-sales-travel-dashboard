import { useState, useEffect } from 'react'
import { X, Database, CheckCircle2, AlertCircle, RefreshCw, Zap, Server } from 'lucide-react'
import { testSupabaseConnection, isSupabaseConfigured, SUPABASE_URL } from '../lib/supabaseClient'

export default function DatabaseModal({ isOpen, onClose, onRefreshData }) {
  const [testing, setTesting] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState(null)

  const runTest = async () => {
    setTesting(true)
    const result = await testSupabaseConnection()
    setConnectionStatus(result)
    setTesting(false)
  }

  useEffect(() => {
    if (isOpen) {
      runTest()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-lg shadow-2xl border border-gray-100 dark:border-slate-800 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">Supabase Engine Inspector</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">PostgREST & Live Telemetry Architecture</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Status Box */}
          <div className="p-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/60">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Connection Status
              </span>
              {testing ? (
                <span className="text-xs text-cyan-600 dark:text-cyan-400 flex items-center gap-1 font-medium">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Pinging...
                </span>
              ) : connectionStatus?.connected ? (
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Synchronized
                </span>
              ) : (
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300 font-bold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> Standby Telemetry
                </span>
              )}
            </div>

            <div className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Endpoint URL:</span>
                <span className="font-mono truncate max-w-[260px] text-gray-900 dark:text-gray-100">
                  {SUPABASE_URL || 'Not configured'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Client Integration:</span>
                <span className="font-medium text-emerald-600 dark:text-emerald-400">
                  {isSupabaseConfigured() ? '@supabase/supabase-js v2' : 'Synthetic Feed'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Ping Latency:</span>
                <span className="font-mono text-gray-900 dark:text-gray-100">
                  {connectionStatus?.latencyMs !== null ? `${connectionStatus?.latencyMs} ms` : '—'}
                </span>
              </div>
            </div>
          </div>

          {/* Database Tables Overview */}
          <div>
            <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
              PostgreSQL Telemetry Tables
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {['orders', 'daily_summary', 'products', 'destinations', 'users'].map((tbl) => (
                <div
                  key={tbl}
                  className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-800"
                >
                  <Server className="w-3.5 h-3.5 text-cyan-500" />
                  <span className="font-mono font-medium text-gray-800 dark:text-gray-200">{tbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Realtime Alert */}
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 text-xs text-blue-800 dark:text-blue-200">
            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <p>
              Supabase Realtime channel <code className="font-mono font-bold">public:orders_realtime</code> is active. Any insertions or updates automatically trigger live dashboard updates without page reloads.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-800/50">
          <button
            onClick={runTest}
            disabled={testing}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${testing ? 'animate-spin' : ''}`} />
            Test Latency
          </button>
          <button
            onClick={() => {
              if (onRefreshData) onRefreshData()
              onClose()
            }}
            className="px-4 py-2 bg-gradient-to-r from-[#FF6B35] to-[#FF8F5B] text-white text-xs font-bold rounded-lg shadow-sm hover:opacity-90 transition-opacity"
          >
            Apply & Close
          </button>
        </div>
      </div>
    </div>
  )
}
