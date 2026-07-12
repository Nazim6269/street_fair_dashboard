import DashboardStatsIcons from '@/components/icons/DashboardStatsIcons';
import VendorStatsIcons from '@/components/icons/VendorStatsIcons';
import StatsCard from '@/components/reusable/StatsCard';


export default function AnalyticStats() {
    return (
        <div>



            {/* stats cards */}
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

                <StatsCard
                    color='#7C3AED'
                    title='Total Vendors Registered                      '
                    value={1240}
                    update='May 22, 2026'
                    icon={<VendorStatsIcons.TotalVendors />}
                />
                <StatsCard
                    color='#4C1D95'
                    title='Total Customers Registered'
                    value={1220}
                    update='May 22, 2026'
                    icon={<VendorStatsIcons.VerifiedVendors />}
                />
                <StatsCard
                    color='#6D28D9'
                    title='Total Subscribers'
                    value={17}
                    update='May 22, 2026'
                    icon={<VendorStatsIcons.NewVendors />}
                />
                <StatsCard
                    color='#8B5CF6'
                    title='Platform Revenue'
                    value={2}
                    update='May 22, 2026'
                    icon={<VendorStatsIcons.SuspendedVendors />}
                />



            </section>

        </div>
    )
}



