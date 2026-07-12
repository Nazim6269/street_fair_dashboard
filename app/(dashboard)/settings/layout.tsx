"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import SettingsIcon from "@/components/icons/SettingsIcon";
import { ReactNode } from "react";
import PageTitle from "@/components/reusable/PageTitle";

const links = [
    { label: "Admin Information", href: "/settings/admin-information", Icon: SettingsIcon.Info },
    { label: "Notifications", href: "/settings/notifications", Icon: SettingsIcon.Notification },
    { label: "Security", href: "/settings/security", Icon: SettingsIcon.Security },
];

function SettingsTabs() {
    const pathname = usePathname();

    return (
        <div className="flex gap-1 p-1 bg-purple-50 rounded-2xl overflow-x-auto">
            {links.map(({ label, href, Icon }) => {
                const isActive = pathname === href;
                return (
                    <Link
                        key={href}
                        href={href}
                        className={cn(
                            "flex items-center gap-2 px-5 py-3 rounded-xl transition-all text-sm font-medium whitespace-nowrap",
                            isActive
                                ? "bg-white text-[#4C1D95] shadow-sm"
                                : "text-[#697586] hover:text-[#4C1D95]"
                        )}
                    >
                        <Icon className="w-4 h-4" />
                        <span>{label}</span>
                    </Link>
                );
            })}
        </div>
    );
}

export default function SettingLayout({ children }: { children: ReactNode }) {
    return (
        <div className="space-y-6">
            <PageTitle title="Settings" description="Manage platform configuration and preferences" />

            <SettingsTabs />

            <div className="bg-white rounded-2xl border border-purple-100 p-6">
                {children}
            </div>
        </div>
    );
}
