import DashboardStatsIcons from '@/components/icons/DashboardStatsIcons';
import VendorStatsIcons from '@/components/icons/VendorStatsIcons';
import StatsCard from '@/components/reusable/StatsCard';

export default function AnalyticStats() {
    return (
        <div>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <StatsCard
                    color='#7C3AED'
                    title='Total Vendors Registered'
                    value={1284}
                    update='2 min ago'
                    icon={<VendorStatsIcons.TotalVendors />}
                />
                <StatsCard
                    color='#4C1D95'
                    title='Total Customers Registered'
                    value={8432}
                    update='5 min ago'
                    icon={<VendorStatsIcons.VerifiedVendors />}
                />
                <StatsCard
                    color='#6D28D9'
                    title='Active Subscribers'
                    value={3456}
                    update='1 min ago'
                    icon={<VendorStatsIcons.NewVendors />}
                />
                <StatsCard
                    color='#8B5CF6'
                    title='Monthly Revenue'
                    value={89540}
                    update='10 min ago'
                    icon={<VendorStatsIcons.SuspendedVendors />}
                />
            </section>
        </div>
    )
}
