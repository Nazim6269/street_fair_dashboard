import DashboardStatsIcons from '@/components/icons/DashboardStatsIcons';
import StatsCard from '@/components/reusable/StatsCard';
import { CalendarDays, Store } from 'lucide-react'
import React from 'react'
import type { DashboardSummary } from '@/types/dashboard.types';

export default function DashboardStats({ summary }: { summary: DashboardSummary | undefined }) {
  console.log("summary", summary);
  return (
    <div>
    
      {/* stats cards */}
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

        <StatsCard
          color='#7C3AED'
          title='Total Vendors'
          value={summary?.totalVendors || 0}
          update='May 22, 2026'
          icon={<DashboardStatsIcons.Vendors/>} 
        />
          <StatsCard
          color='#4C1D95'
          title='Total Customers'
          value={summary?.totalCustomers || 0}
          update='May 22, 2026'
          icon={<DashboardStatsIcons.Customers/>} 
        />
        <StatsCard
          color='#6D28D9'
          title='Total Active Trucks'
          value={summary?.activeTrucksToday || 0}
          update='May 22, 2026'
          icon={<DashboardStatsIcons.ActiveTruck/>} 
        />
        <StatsCard
          color='#8B5CF6'
          title='Platform Revenue'
          value={summary?.platformRevenue || 0}
          update='May 22, 2026'
          icon={<DashboardStatsIcons.Revenue/>} 
        />

      </section>

    </div>
  )
}



