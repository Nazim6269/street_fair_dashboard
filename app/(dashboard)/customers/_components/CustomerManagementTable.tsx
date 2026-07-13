"use client";

import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import DataTable, { Column } from "@/components/reusable/table/DataTable";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ActionIcons from "@/components/icons/ActionIcons";
import GenericDropDown from "@/components/common/generic-dropdown/GenericDropdown";
import { GenericSearch } from "@/components/common/generic-search/GenericSearch";
import { SearchResult } from "@/types/searchType";

// 1. Define Types
type Vendor = {
    CustomerId: string;
    customerName: string;
    customerEmail: string;
    status: 'active' | 'reported' | 'suspended';
    date_joined: string;
    orders_count: number;
    total_spent: number;
} & SearchResult;

// 2. Column Definitions
const getColumns = (): Column<Vendor>[] => [
    {
        header: "Customer ID", accessor: "CustomerId", cell: (row) => (
            <div className="self-stretch text-[#697586] text-sm font-medium leading-[150%] tracking-[-0.28px]">{row.CustomerId}</div>
        )
    },
    {
        header: "Customer ",
        cell: (row) => (
            <div className="text-sm font-semibold text-[#1A1A2E]">
                <p className="text-sm font-semibold text-[#1A1A2E]">{row.customerName || 'N/A'}</p>
                <p className="text-xs text-[#697586]">{row.customerEmail || 'N/A'}</p>
            </div>
        ),
    },

    {
        header: "Status",
        cell: (row) => <StatusBadge status={row.status} />,
    },
    {
        header: "Date Joined           ",
        cell: (row) => (
            <div className="text-xs text-[#161618] font-medium leading-[180%]">{row.date_joined}</div>
        ),
    },
    {
        header: "Orders",
        cell: (row) => (
            <div className="text-xs  text-[#161618] font-medium leading-[180%] ">${row.orders_count}</div>
        ),
    },

    {
        header: "Total Spent",
        cell: (row) => (
            <div className="text-xs text-[#161618] font-medium leading-[180%]">${row.total_spent}</div>
        ),
    },

    {
        header: "Action",
        cell: (row) => (
            <Link
                href={`/customers/${row.CustomerId}`}>
                <Button size="icon" variant="ghost" className="border border-[#DFE1E7]">
                    <ActionIcons.View className="w-5 h-5 text-[#697586]" />
                </Button>
            </Link>
        ),
    },



];

// 3. Status Badge Components
const StatusBadge = ({ status }: { status: Vendor['status'] }) => {
    const styles = {
        active: "bg-[#BBFFA7] text-[#298C20] ",
        reported: "bg-[#FFF291] text-[#8B7500] ",
        suspended: "bg-[#FFADAE] text-[#872F31] ",
    };
    return <span className={cn("px-4 py-2 rounded-lg text-sm font-semibold leading-[130%] uppercase", styles[status])}>{status}</span>;
};

const allCustomers: Vendor[] = [
    { CustomerId: "834759", customerName: "David John", customerEmail: "david.john@example.com", status: "active", date_joined: "May 10, 2026", orders_count: 10, total_spent: 100.00, id: "834759", label: "David John" },
    { CustomerId: "834754", customerName: "David John", customerEmail: "david.john@example.com", status: "reported", date_joined: "May 10, 2026", orders_count: 10, total_spent: 140.00, id: "834754", label: "David John" },
    { CustomerId: "834454", customerName: "Rowan Fox", customerEmail: "skylar.kai@example.com", status: "suspended", date_joined: "May 10, 2026", orders_count: 10, total_spent: 250.00, id: "834454-1", label: "Rowan Fox" },
    { CustomerId: "834454", customerName: "Rowan Dox", customerEmail: "skylar.kai@example.com", status: "suspended", date_joined: "May 10, 2026", orders_count: 10, total_spent: 250.00, id: "834454-2", label: "Rowan Dox" },
    { CustomerId: "834454", customerName: "Rowan Fox", customerEmail: "skylar.kai@example.com", status: "suspended", date_joined: "May 10, 2026", orders_count: 10, total_spent: 250.00, id: "834454-3", label: "Rowan Fox" },
];

// 4. Main Table Component
export default function CustomerManagementTable() {
    const [statusFilter, setStatusFilter] = useState("all");
    const [sortBy, setSortBy] = useState("newest");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredData = useMemo(() => {
        let result = [...allCustomers];

        if (statusFilter !== "all") {
            result = result.filter((c) => c.status === statusFilter);
        }

        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            result = result.filter(
                (c) =>
                    c.customerName.toLowerCase().includes(q) ||
                    c.customerEmail.toLowerCase().includes(q) ||
                    c.CustomerId.toLowerCase().includes(q)
            );
        }

        if (sortBy === "oldest") {
            result.reverse();
        }

        return result;
    }, [statusFilter, sortBy, searchQuery]);

    const handleSearch = (query: string): Promise<Vendor[]> => {
        const q = query.toLowerCase().trim();
        const results = !q
            ? allCustomers
            : allCustomers.filter(
                (c) =>
                    c.customerName.toLowerCase().includes(q) ||
                    c.customerEmail.toLowerCase().includes(q) ||
                    c.CustomerId.toLowerCase().includes(q)
            );
        return Promise.resolve(results);
    };

    const handleSelectCustomer = (customer: Vendor) => {
        window.location.href = `/customers/${customer.CustomerId}`;
    };

    return (
        <div>
            <div className="border-x border-t rounded-t-2xl bg-white p-6">
                <div className="flex flex-wrap justify-between items-center gap-4 w-full">
                    <div className="flex-1 min-w-[200px] max-w-[320px]">
                        <GenericSearch
                            onSearch={handleSearch}
                            onSelect={handleSelectCustomer}
                            placeholder="Search by name, email, or ID..."
                            minChars={1}
                            debounceMs={300}
                            size="sm"
                            showIcon={true}
                            showClear={true}
                            showRecentSearches={false}
                            onChange={(value) => setSearchQuery(value)}
                            renderResult={(item: Vendor, query: string) => (
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-[#1A1A2E]">{item.customerName}</p>
                                        <p className="text-xs text-[#697586]">{item.customerEmail}</p>
                                    </div>
                                    <StatusBadge status={item.status} />
                                </div>
                            )}
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <label className="text-[#697586] text-sm font-normal leading-[160%]">Status:</label>
                            <GenericDropDown
                                options={[
                                    { label: "All", value: "all" },
                                    { label: "Active", value: "active" },
                                    { label: "Reported", value: "reported" },
                                    { label: "Suspended", value: "suspended" },
                                ]}
                                value={statusFilter}
                                onValueChange={(value) => setStatusFilter(value.toString())}
                                variant="light"
                                size="sm"
                                radius="sm"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <label className="text-[#697586] text-sm font-normal leading-[160%]">Sort by:</label>
                            <GenericDropDown
                                options={[
                                    { label: "Newest First", value: "newest" },
                                    { label: "Oldest First", value: "oldest" },
                                ]}
                                value={sortBy}
                                onValueChange={(value) => setSortBy(value.toString())}
                                variant="light"
                                size="sm"
                                radius="sm"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <DataTable columns={getColumns()} data={filteredData} />
            </div>
        </div>
    );
}
