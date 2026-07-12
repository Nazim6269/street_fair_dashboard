import DashboardStatsIcons from '@/components/icons/DashboardStatsIcons';
import StatsCard from '@/components/reusable/StatsCard';
import React from 'react'
import { TrendingUp } from 'lucide-react';

export default function DashboardStats({ stats }: { stats?: any }) {
  return (
    <div>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <div className='flex h-full flex-col gap-3 justify-between items-start bg-gradient-to-br from-[#4C1D95] to-[#7C3AED] px-6 py-5 rounded-2xl relative overflow-hidden shadow-lg shadow-purple-500/20'>
          <div className="relative z-10">
            <h3 className='text-purple-200 text-sm font-medium mb-1'>Pending Verifications</h3>
            <p className='text-white text-4xl font-bold'>24</p>
          </div>

          <div className="flex items-center gap-2 text-purple-200">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">8% from last week</span>
          </div>

          <div className='absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10'></div>
          <div className='absolute bottom-4 right-8 w-12 h-12 rounded-full bg-white/10'></div>
        </div>

        <StatsCard
          color='#7C3AED'
          title='Total Customers'
          value={8432}
          update='5 min ago'
          icon={<DashboardStatsIcons.Customers />}
        />
        <StatsCard
          color='#6D28D9'
          title='Active Trucks'
          value={156}
          update='1 min ago'
          icon={<DashboardStatsIcons.ActiveTruck />}
        />
        <StatsCard
          color='#8B5CF6'
          title='Revenue Today'
          value={12450}
          update='10 min ago'
          icon={<DashboardStatsIcons.Revenue />}
        />
      </section>
    </div>
  )
}
