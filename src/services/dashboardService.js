import { supabase, isSupabaseConfigured } from '../lib/supabaseClient'

// Baseline Telecom Synthesized Telemetry (Executive Dataset)
export const initialStats = [
  {
    id: 'mtd_revenue',
    title: 'MTD TOTAL REVENUE',
    value: '₹4,72,087',
    numericValue: 472087,
    change: '+79.0%',
    subtext: 'vs prev MTD (₹2.64 L)',
    trend: 'up',
    color: 'from-[#FF6B35] to-[#FF8F5B]',
    shadowColor: 'shadow-orange-500/20',
  },
  {
    id: 'mtd_sims',
    title: 'MTD SIMS ORDERED',
    value: '594',
    numericValue: 594,
    change: '+51.5%',
    subtext: 'vs prev MTD (392 orders)',
    trend: 'up',
    color: 'from-emerald-500 to-emerald-400',
    shadowColor: 'shadow-emerald-500/20',
  },
  {
    id: 'today_revenue',
    title: "TODAY'S REVENUE",
    value: '₹29,006.40',
    numericValue: 29006.4,
    change: '+368.3%',
    subtext: 'vs same day prev (₹6,194.26)',
    trend: 'up',
    color: 'from-blue-500 to-blue-400',
    shadowColor: 'shadow-blue-500/20',
  },
  {
    id: 'today_orders',
    title: "TODAY'S ORDERS & AOV",
    value: '34 SIMs',
    numericValue: 34,
    change: 'AOV: ₹795',
    subtext: 'Avg Daily: 41 SIMs/day',
    trend: 'neutral',
    color: 'from-purple-500 to-purple-400',
    shadowColor: 'shadow-purple-500/20',
  },
]

export const initialDailyOrders = [
  { name: '05-01', orders: 38, revenue: 30200 },
  { name: '05-02', orders: 42, revenue: 33400 },
  { name: '05-03', orders: 20, revenue: 15900 },
  { name: '05-04', orders: 25, revenue: 19800 },
  { name: '05-05', orders: 45, revenue: 35800 },
  { name: '05-06', orders: 48, revenue: 38200 },
  { name: '05-07', orders: 50, revenue: 39800 },
  { name: '05-08', orders: 47, revenue: 37400 },
  { name: '05-09', orders: 39, revenue: 31000 },
  { name: '05-10', orders: 35, revenue: 27800 },
  { name: '05-11', orders: 38, revenue: 30200 },
  { name: '05-12', orders: 55, revenue: 43700 },
  { name: '05-13', orders: 57, revenue: 45300 },
  { name: '05-14', orders: 60, revenue: 47700 },
  { name: '05-15', orders: 52, revenue: 41300 },
  { name: '05-16', orders: 50, revenue: 39800 },
  { name: '05-17', orders: 53, revenue: 42100 },
  { name: '05-18', orders: 48, revenue: 38200 },
  { name: '05-19', orders: 19, revenue: 15100 },
  { name: '05-20', orders: 34, revenue: 29006 },
]

export const initialMonthlyGrowth = [
  { name: 'Jan', growth: 12, revenue: 145000 },
  { name: 'Feb', growth: 18, revenue: 198000 },
  { name: 'Mar', growth: 25, revenue: 264000 },
  { name: 'Apr', growth: 32, revenue: 342000 },
  { name: 'May', growth: 41, revenue: 472087 },
]

export const initialStaffLeaderboard = [
  { rank: '#01', name: 'Faizan', badge: '#1 TOP SELLER', mtdRevenue: '₹1,42,148', rawRevenue: 142148, mtdOrders: 186, todayOrders: 10, todayRevenue: '₹10,534.20', status: 'Active' },
  { rank: '#02', name: 'Talha', badge: '#2 RANK', mtdRevenue: '₹89,450', rawRevenue: 89450, mtdOrders: 112, todayOrders: 6, todayRevenue: '₹5,120.00', status: 'Active' },
  { rank: '#03', name: 'Prabhat', badge: '#3 RANK', mtdRevenue: '₹76,200', rawRevenue: 76200, mtdOrders: 95, todayOrders: 5, todayRevenue: '₹4,500.00', status: 'Active' },
  { rank: '#04', name: 'Bhageshri', badge: '#4 RANK', mtdRevenue: '₹61,900', rawRevenue: 61900, mtdOrders: 78, todayOrders: 4, todayRevenue: '₹3,400.00', status: 'Active' },
  { rank: '#05', name: 'Sanika', badge: null, mtdRevenue: '₹44,100', rawRevenue: 44100, mtdOrders: 54, todayOrders: 3, todayRevenue: '₹2,350.00', status: 'Active' },
  { rank: '#06', name: 'Nidhi', badge: null, mtdRevenue: '₹25,200', rawRevenue: 25200, mtdOrders: 32, todayOrders: 2, todayRevenue: '₹1,450.00', status: 'Active' },
  { rank: '#07', name: 'Karishma', badge: null, mtdRevenue: '₹17,800', rawRevenue: 17800, mtdOrders: 21, todayOrders: 2, todayRevenue: '₹1,100.00', status: 'Active' },
  { rank: '#08', name: 'Rahul', badge: null, mtdRevenue: '₹8,300', rawRevenue: 8300, mtdOrders: 9, todayOrders: 1, todayRevenue: '₹450.00', status: 'Active' },
  { rank: '#09', name: 'Nadeem', badge: null, mtdRevenue: '₹4,600', rawRevenue: 4600, mtdOrders: 5, todayOrders: 1, todayRevenue: '₹102.20', status: 'Active' },
  { rank: '#10', name: 'Rahel', badge: null, mtdRevenue: '₹2,389', rawRevenue: 2389, mtdOrders: 2, todayOrders: 0, todayRevenue: '—', status: 'Offline' },
]

export const initialDestinations = [
  { rank: '01', code: 'GB', name: 'United Kingdom', revenue: '₹98,234', rawRevenue: 98234, sims: 124, share: 20.81, flag: '🇬🇧' },
  { rank: '02', code: 'US', name: 'United States', revenue: '₹82,120', rawRevenue: 82120, sims: 98, share: 17.40, flag: '🇺🇸' },
  { rank: '03', code: 'TH', name: 'Thailand', revenue: '₹64,200', rawRevenue: 64200, sims: 87, share: 13.60, flag: '🇹🇭' },
  { rank: '04', code: 'AE', name: 'UAE (Dubai & Abu Dhabi)', revenue: '₹48,900', rawRevenue: 48900, sims: 65, share: 10.36, flag: '🇦🇪' },
  { rank: '05', code: 'VN', name: 'Vietnam', revenue: '₹41,200', rawRevenue: 41200, sims: 54, share: 8.73, flag: '🇻🇳' },
  { rank: '06', code: 'JP', name: 'Japan', revenue: '₹38,500', rawRevenue: 38500, sims: 42, share: 8.16, flag: '🇯🇵' },
  { rank: '07', code: 'EU', name: 'Europe Regional (33 Countries)', revenue: '₹32,400', rawRevenue: 32400, sims: 38, share: 6.86, flag: '🇪🇺' },
  { rank: '08', code: 'SG', name: 'Singapore', revenue: '₹22,100', rawRevenue: 22100, sims: 28, share: 4.68, flag: '🇸🇬' },
  { rank: '09', code: 'CH', name: 'Switzerland & Alps', revenue: '₹18,900', rawRevenue: 18900, sims: 24, share: 4.00, flag: '🇨🇭' },
  { rank: '10', code: 'TR', name: 'Turkey', revenue: '₹15,400', rawRevenue: 15400, sims: 18, share: 3.26, flag: '🇹🇷' },
]

export const initialPlans = [
  { rank: '01', name: 'Europe 10GB Pass', region: 'Europe', data: '10GB', validity: '30 Days', orders: 124, revenue: '₹98,240', price: 792, isAvailable: true },
  { rank: '02', name: 'Europe 20GB Pass', region: 'Europe', data: '20GB', validity: '30 Days', orders: 97, revenue: '₹81,320', price: 838, isAvailable: true },
  { rank: '03', name: 'USA Unlimited 30 Days', region: 'North America', data: 'Unlimited', validity: '30 Days', orders: 88, revenue: '₹74,800', price: 850, isAvailable: true },
  { rank: '04', name: 'Asia-Pacific Unlimited 15 Days', region: 'Asia-Pacific', data: '15GB', validity: '15 Days', orders: 76, revenue: '₹57,000', price: 750, isAvailable: true },
  { rank: '05', name: 'UK & Ireland 12GB Pass', region: 'Europe', data: '12GB', validity: '30 Days', orders: 62, revenue: '₹48,980', price: 790, isAvailable: true },
  { rank: '06', name: 'Middle East Express 5GB', region: 'Middle East', data: '5GB', validity: '7 Days', orders: 45, revenue: '₹36,000', price: 800, isAvailable: true },
  { rank: '07', name: 'Thailand Holiday 15GB', region: 'Asia-Pacific', data: '15GB', validity: '8 Days', orders: 38, revenue: '₹28,500', price: 750, isAvailable: true },
  { rank: '08', name: 'Global Starter 3GB', region: 'Global', data: '3GB', validity: '7 Days', orders: 34, revenue: '₹25,500', price: 750, isAvailable: true },
]

export const initialAuditLogs = [
  { id: 'LOG-9942', timestamp: 'Just now', action: 'Order Provisioned', entity: 'UK 12GB eSIM', operator: 'Faizan (Agent #01)', status: 'Success', amount: '₹790' },
  { id: 'LOG-9941', timestamp: '2 mins ago', action: 'Telemetry Sync', entity: 'daily_summary', operator: 'System Daemon', status: 'Success', amount: '—' },
  { id: 'LOG-9940', timestamp: '5 mins ago', action: 'Order Provisioned', entity: 'Europe 20GB Pass', operator: 'Talha (Agent #02)', status: 'Success', amount: '₹838' },
  { id: 'LOG-9939', timestamp: '12 mins ago', action: 'Catalog Updated', entity: 'USA Unlimited', operator: 'Telecom Admin', status: 'Success', amount: '—' },
  { id: 'LOG-9938', timestamp: '18 mins ago', action: 'Order Provisioned', entity: 'Thailand Holiday 15GB', operator: 'Prabhat (Agent #03)', status: 'Success', amount: '₹750' },
  { id: 'LOG-9937', timestamp: '25 mins ago', action: 'Realtime Heartbeat', entity: 'PostgREST v12', operator: 'Aura Engine', status: 'Success', amount: '—' },
]

export class DashboardService {
  static async fetchAllTelemetry() {
    let stats = [...initialStats]
    let dailyOrders = [...initialDailyOrders]
    let monthlyGrowth = [...initialMonthlyGrowth]
    let leaderboard = [...initialStaffLeaderboard]
    let destinations = [...initialDestinations]
    let plans = [...initialPlans]
    let auditLogs = [...initialAuditLogs]
    let isLiveSupabase = false
    let lastSyncTime = new Date()

    if (isSupabaseConfigured() && supabase) {
      try {
        const { data: dbOrders, error: ordersErr } = await supabase
          .from('orders')
          .select('*')
          .limit(100)

        if (!ordersErr && dbOrders && dbOrders.length > 0) {
          isLiveSupabase = true
          // Calculate dynamic telemetry from Supabase records if present
          const totalRevenue = dbOrders.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0)
          stats[0].value = `₹${totalRevenue.toLocaleString('en-IN')}`
          stats[1].value = `${dbOrders.length}`
        }
      } catch (e) {
        console.warn('Supabase query fallback to executive dataset:', e)
      }
    }

    return {
      stats,
      dailyOrders,
      monthlyGrowth,
      leaderboard,
      destinations,
      plans,
      auditLogs,
      isLiveSupabase,
      lastSyncTime,
    }
  }

  static exportToCSV(data) {
    const { leaderboard, destinations, plans, stats } = data
    
    let csvContent = 'data:text/csv;charset=utf-8,'
    
    // KPI Summary Section
    csvContent += '=== AURA SIM TELECOM SALES SUMMARY ===\r\n'
    csvContent += 'Metric,Value,Change,Subtext\r\n'
    stats.forEach(s => {
      csvContent += `"${s.title}","${s.value}","${s.change}","${s.subtext}"\r\n`
    })
    csvContent += '\r\n'

    // Staff Leaderboard
    csvContent += '=== SALESPERSON PERFORMANCE LEADERBOARD ===\r\n'
    csvContent += 'Rank,Staff Name,MTD Revenue,MTD Orders,Today Revenue,Today Orders,Badge,Status\r\n'
    leaderboard.forEach(item => {
      csvContent += `"${item.rank}","${item.name}","${item.mtdRevenue}","${item.mtdOrders}","${item.todayRevenue}","${item.todayOrders}","${item.badge || 'N/A'}","${item.status}"\r\n`
    })
    csvContent += '\r\n'

    // Top Destinations
    csvContent += '=== DESTINATION MATRIX & DEMAND SHARE ===\r\n'
    csvContent += 'Rank,Country Code,Destination Name,SIMs Ordered,Revenue,Revenue Share (%)\r\n'
    destinations.forEach(item => {
      csvContent += `"${item.rank}","${item.code}","${item.name}","${item.sims}","${item.revenue}","${item.share}%"\r\n`
    })
    csvContent += '\r\n'

    // SIM Packages Catalog
    csvContent += '=== SIM PACKAGES CATALOG ===\r\n'
    csvContent += 'Rank,Package Name,Region,Data Limit,Validity,Orders Count,Revenue\r\n'
    plans.forEach(item => {
      csvContent += `"${item.rank}","${item.name}","${item.region || 'Global'}","${item.data}","${item.validity}","${item.orders}","${item.revenue}"\r\n`
    })

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    const timestamp = new Date().toISOString().split('T')[0]
    link.setAttribute('download', `Aura_SIM_Sales_Report_${timestamp}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}
