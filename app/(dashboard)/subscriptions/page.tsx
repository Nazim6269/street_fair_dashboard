import React from 'react'
import AnalyticStats from '../analytics/_components/AnalyticStats'
import PageTitle from '@/components/reusable/PageTitle'
import OtherIcons from '@/components/icons/OtherIcons'
import Link from 'next/link'
import GenericButton from '@/components/common/generic-button/GenericButton'
import SubscriptionPackagesTable from './_components/SubscriptionPackagesTable'
import BillingTable from './_components/BillingTable'

export default function page() {
    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <PageTitle title="Subscription Management" description="Configure and manage platform membership tiers." />

                <div className='flex items-center gap-3'>
                    <Link href={"/subscriptions/all-plans"}>
                        <GenericButton
                            title="View Plans"
                            variant="cream"
                            icon={<OtherIcons.LeftArrowIcon />}
                            iconPosition="right"
                            size="large"
                        />
                    </Link>

                    <Link href={"/subscriptions/create-plan"}>
                        <GenericButton
                            title="Create New Plan"
                            variant="violet"
                            size="large"
                        />
                    </Link>
                </div>
            </div>
         
            <AnalyticStats />

            <SubscriptionPackagesTable/>


            <BillingTable/>
        </div>
    )
}
