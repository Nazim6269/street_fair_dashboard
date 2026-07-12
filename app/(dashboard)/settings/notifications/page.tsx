"use client";

import React from 'react';
import { Bell, Mail, MessageSquare, Settings } from "lucide-react";
import { Switch } from '@/components/ui/switch';

const sections = [
    {
        title: "System Alerts",
        description: "Critical infrastructure updates and maintenance notifications.",
        color: "from-[#4C1D95] to-[#7C3AED]",
        items: [
            { icon: Mail, label: "Email Notifications", checked: true },
            { icon: MessageSquare, label: "SMS Alerts", checked: false },
            { icon: Bell, label: "In-App Banner", checked: true },
        ]
    },
    {
        title: "Vendor Updates",
        description: "Stay informed about vendor updates.",
        color: "from-[#6D28D9] to-[#8B5CF6]",
        items: [
            { icon: Mail, label: "Email Notifications", checked: true },
            { icon: MessageSquare, label: "SMS Alerts", checked: false },
            { icon: Bell, label: "In-App Banner", checked: true },
        ]
    },
    {
        title: "Customer Reports",
        description: "Monitor reports against customers and customer behavior insights.",
        color: "from-[#7C3AED] to-[#A78BFA]",
        items: [
            { icon: Mail, label: "Email Notifications", checked: true },
            { icon: MessageSquare, label: "SMS Alerts", checked: false },
            { icon: Bell, label: "In-App Banner", checked: true },
        ]
    }
];

function AlertItem({
    icon: Icon,
    label,
    checked = false,
    noBorder = false,
}: {
    icon: React.ElementType;
    label: string;
    checked?: boolean;
    noBorder?: boolean;
}) {
    return (
        <div
            className={`flex items-center justify-between py-4 ${noBorder ? "" : "border-b border-purple-100"}`}
        >
            <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
                    <Icon className="h-5 w-5 text-[#7C3AED]" />
                </div>
                <p className="text-base font-medium text-[#2A3542]">{label}</p>
            </div>

            <Switch
                defaultChecked={checked}
                className="data-[state=checked]:bg-[#7C3AED]"
            />
        </div>
    );
}

export default function NotificationsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#4C1D95] to-[#7C3AED] flex items-center justify-center">
                    <Settings className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h3 className="text-[#2A3542] font-[Lora] text-xl font-bold">Notification Preferences</h3>
                    <p className="text-sm text-[#697586]">Configure how you receive notifications</p>
                </div>
            </div>

            <div className="grid gap-4">
                {sections.map((section) => (
                    <div key={section.title} className="p-6 rounded-2xl border border-purple-100 bg-purple-50/30 relative overflow-hidden">
                        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${section.color}`} />
                        
                        <div className="mb-4">
                            <h4 className="text-[#2A3542] font-[Lora] text-base font-bold mb-1">{section.title}</h4>
                            <p className="text-[#697586] text-sm">{section.description}</p>
                        </div>

                        <div>
                            {section.items.map((item, idx) => (
                                <AlertItem
                                    key={item.label}
                                    icon={item.icon}
                                    label={item.label}
                                    checked={item.checked}
                                    noBorder={idx === section.items.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
