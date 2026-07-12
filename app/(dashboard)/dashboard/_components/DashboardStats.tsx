import DashboardStatsIcons from '@/components/icons/DashboardStatsIcons';
import StatsCard from '@/components/reusable/StatsCard';
import React from 'react'
import type { DashboardSummary } from '@/types/dashboard.types';

export default function DashboardStats({ summary }: { summary: DashboardSummary | undefined }) {
  return (
    <div>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <StatsCard
          color='#7C3AED'
          title='Total Vendors'
          value={summary?.totalVendors || 1284}
          update='2 min ago'
          icon={<DashboardStatsIcons.Vendors/>} 
        />
        <StatsCard
          color='#4C1D95'
          title='Total Customers'
          value={summary?.totalCustomers || 8432}
          update='5 min ago'
          icon={<DashboardStatsIcons.Customers/>} 
        />
        <StatsCard
          color='#6D28D9'
          title='Active Trucks Today'
          value={summary?.activeTrucksToday || 156}
          update='1 min ago'
          icon={<DashboardStatsIcons.ActiveTruck/>} 
        />
        <StatsCard
          color='#8B5CF6'
          title='Platform Revenue'
          value={summary?.platformRevenue || 45230}
          update='10 min ago'
          icon={<DashboardStatsIcons.Revenue/>} 
        />
      </section>
    </div>
  )
}
