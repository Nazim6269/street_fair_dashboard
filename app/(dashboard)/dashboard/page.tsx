"use client";

import HeaderNotifyIcons from "@/components/icons/HeaderNotifyIcons";
import { ReusableSelect } from "@/components/form/CustomSelect";
import GenericButton from "@/components/common/generic-button/GenericButton";
import { useState } from "react";
import { RefreshCcwIcon } from "lucide-react";
import { PendingVendorVerifications, VendorsByStatus, TopVendors, PlatformRevenueChart, DashboardStats } from "./_components";
import PageTitle from "@/components/reusable/PageTitle";

export default function DashboardPage() {
    const [selectedOption, setSelectedOption] = useState("this-month");

    const dummyAlerts = {
        issuesNeedAttention: 3,
        pendingOnboarding: 12,
        inactiveVendors: 5,
        todayRevenue: 12450,
        currency: "USD",
    };

    const dummyVendorsByStatus = {
        total: 1284,
        pending: 156,
        verified: 842,
        expired: 124,
        suspended: 89,
        rejected: 73,
    };

    return (
        <div className="md:space-y-6 space-y-4">
            {/* Header Section */}
            <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-6">
                <PageTitle title="Welcome, Nazim uddin 👋" description="Manage your platform data, operational health and vendor ecosystem status." />

                <div className="flex items-center gap-3">
                    <ReusableSelect
                        variant="outline"
                        value={selectedOption}
                        options={[{ label: "This Month", value: "this-month" }, { label: "This Week", value: "this-week" }]}
                        onValueChange={(value) => {
                            setSelectedOption(value);
                        }}
                    />

                    <GenericButton
                        title="Sync"
                        variant="cream"
                        icon={<RefreshCcwIcon className="w-4 h-4" />}
                        iconPosition="left"
                        size="mlarge"
                        align="center"
                        className="border-purple-200 text-[#4C1D95] hover:bg-purple-50 px-6"
                    />

                    <GenericButton
                        title="Export"
                        variant="violet"
                        size="mlarge"
                        align="center"
                        className="px-6"
                    />
                </div>
            </div>

            {/* Notification Cards Grid */}
            <DashboardAlerts alerts={dummyAlerts} />

            <DashboardStats summary={undefined} />

            <section className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="w-full flex-1">
                    <PlatformRevenueChart />
                </div>
                <VendorsByStatus vendorsByStatus={dummyVendorsByStatus} />
            </section>

            {/* Pending Verifications */}
            <section className="flex flex-col md:flex-row justify-between gap-4">
                <div className="w-full flex-1">
                    <PendingVendorVerifications />
                </div>
                <div className="w-full flex-1">
                    <TopVendors />
                </div>
            </section>
        </div>
    );
}

interface HeaderNotifyCardProps {
    icon: React.ReactNode;
    title: string;
    color: string;
}

const HeaderNotifyCard = ({ icon, title, color }: HeaderNotifyCardProps) => {
    return (
        <div
            className="flex items-center gap-3 flex-[1_0_0] px-5 py-4 rounded-xl border border-purple-100 bg-white shadow-sm hover:shadow-md transition-shadow"
        >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg" style={{ backgroundColor: color }}>
                {icon}
            </div>
            <p className="text-[#2A3542] font-inter text-sm font-medium leading-[160%]">
                {title}
            </p>
        </div>
    );
};

const DashboardAlerts = ({ alerts }: { alerts: any }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <HeaderNotifyCard icon={<HeaderNotifyIcons.Issue />} title={`${alerts?.issuesNeedAttention || 3} Issue needs attention`} color="#EDE9FE" />
            <HeaderNotifyCard icon={<HeaderNotifyIcons.Onboarding />} title={`${alerts?.pendingOnboarding || 12} Onboarding pending`} color="#F5F3FF" />
            <HeaderNotifyCard icon={<HeaderNotifyIcons.Inactive />} title={`${alerts?.inactiveVendors || 5} Inactive vendor`} color="#DDD6FE" />
            <HeaderNotifyCard icon={<HeaderNotifyIcons.Revenue />} title={`$${(alerts?.todayRevenue || 12450).toLocaleString()} Revenue today`} color="#EDE9FE" />
        </div>
    );
};
