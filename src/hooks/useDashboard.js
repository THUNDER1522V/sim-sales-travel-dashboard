import { useState, useEffect, useCallback } from 'react'
import { DashboardService } from '../services/dashboardService'
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient'

export function useDashboard() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [toast, setToast] = useState(null)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('aura_dark_mode')
      if (saved !== null) {
        return saved === 'true'
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  const showToast = useCallback((message, type = 'info') => {
    setToast({ message, type, id: Date.now() })
    setTimeout(() => {
      setToast((prev) => (prev && prev.message === message ? null : prev))
    }, 3500)
  }, [])

  const loadData = useCallback(async (isManualRefresh = false) => {
    if (isManualRefresh) setRefreshing(true)
    try {
      const telemetry = await DashboardService.fetchAllTelemetry()
      setData(telemetry)
      setLastUpdated(new Date())
      if (isManualRefresh) {
        showToast('Telemetry refreshed successfully with live feed', 'success')
      }
    } catch (err) {
      console.error('Error fetching dashboard telemetry:', err)
      showToast('Error syncing telemetry, using cached dataset', 'error')
    } finally {
      setLoading(false)
      if (isManualRefresh) setRefreshing(false)
    }
  }, [showToast])

  useEffect(() => {
    loadData()

    // Realtime Supabase Subscription if configured
    let subscription = null
    if (isSupabaseConfigured() && supabase) {
      try {
        subscription = supabase
          .channel('public:orders_realtime')
          .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, (payload) => {
            console.log('Realtime change detected in orders:', payload)
            showToast('New order received! Updating telemetry...', 'info')
            loadData()
          })
          .subscribe()
      } catch (subErr) {
        console.warn('Realtime subscription skipped:', subErr)
      }
    }

    // Auto-refresh interval every 30 seconds
    const intervalId = setInterval(() => {
      loadData()
    }, 30000)

    return () => {
      clearInterval(intervalId)
      if (subscription && supabase) {
        supabase.removeChannel(subscription)
      }
    }
  }, [loadData, showToast])

  // Sync Dark Mode with DOM
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('aura_dark_mode', String(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  const handleExportCSV = () => {
    if (!data) return
    DashboardService.exportToCSV(data)
    showToast('Exported Executive Sales CSV Report', 'success')
  }

  return {
    data,
    loading,
    refreshing,
    lastUpdated,
    toast,
    darkMode,
    toggleDarkMode,
    showToast,
    refreshData: () => loadData(true),
    exportCSV: handleExportCSV,
  }
}
