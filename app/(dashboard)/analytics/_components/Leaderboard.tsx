
"use client"
import { ReusableTabs } from '@/components/reusable/CustomTabs';
import React, { useState } from 'react'
import GenericDropDown from '@/components/common/generic-dropdown/GenericDropdown';

export default function Leaderboard() {

    const [selectedTab, setSelectedTab] = useState('customers');
    const [selectedYear, setSelectedYear] = useState("this-year");

    return (
        <div className='w-full flex-col gap-4 self-stretch border border-[#ECEFF3] [background:var(--text-0,#FFF)] shadow-[0_0_16px_0_rgba(0,0,0,0.06)]   rounded-[10px] border-solid'>
            <div className="mb-4 flex items-center justify-between p-6">
                <div>
                    <h3 className="section-title">
                        Leaderboard
                    </h3>
                </div>

                <GenericDropDown
                    options={[
                        { label: "This year", value: "this-year" },
                        { label: "Last year", value: "last-year" },
                        { label: "2025", value: "2025" },
                        { label: "2024", value: "2024" },
                        { label: "2023", value: "2023" },
                        { label: "2022", value: "2022" },
                    ]}
                    value={selectedYear}
                    onValueChange={(value) => setSelectedYear(value.toString())}
                    variant="light"
                    size="sm"
                    radius="sm"
                />
            </div>
            {/* tabs */}
            <div>
                <ReusableTabs
                    defaultValue={"customers"}
                    tabs={[
                        { label: 'Customers', value: 'customers' },
                        { label: 'Vendors', value: 'vendors' },
                       
                    ]}
                    onValueChange={(value) => {
                        setSelectedTab(value);
                        console.log(value);
                    }}
                />

                {
                    selectedTab === 'customers' && (
                        <div>
                        <TopPerformersCard data={winners} />
                    </div>
                )}
                    

                    {
                        selectedTab === 'vendors' && (
                            <div>
                                <TopPerformersCard data={vendorWinners} />
                            </div>
                        )
                    }
            </div>
        </div>
    )
}


import Image from "next/image";

const winners = [
  {
    rank: 2,
    name: "Marie Kom",
    orders: "8,4321",
    image: "/NoImage.jpeg",
    size: "small",
  },
  {
    rank: 1,
    name: "Ava Adam",
    orders: "12,7788",
    image: "/NoImage.jpeg",
    size: "large",
  },
  {
    rank: 3,
    name: "Justin Hopper",
    orders: "5,1632",
    image: "/NoImage.jpeg",
    size: "small",
  },
];

const vendorWinners = [
  {
    rank: 2,
    name: "Taco Truck Co",
    orders: "9,2150",
    image: "/NoImage.jpeg",
    size: "small",
  },
  {
    rank: 1,
    name: "Burger Palace",
    orders: "15,3400",
    image: "/NoImage.jpeg",
    size: "large",
  },
  {
    rank: 3,
    name: "Pizza Corner",
    orders: "6,8700",
    image: "/NoImage.jpeg",
    size: "small",
  },
];

function TopPerformersCard({ data }: { data: typeof winners }) {
  return (
    <div className="object-cover overflow-hidden  bg-purple-50 px-6   h-[340px]">


      <div className="grid grid-cols-3 items-end gap-6 h-full overflow-hidden">
        {data.map((item) => {
          const isFirst = item.rank === 1;

          return (
            <div
              key={item.rank}
              className={`flex flex-col items-center ${
                isFirst ? "pb-0" : "pb-0"
              }`}
            >
              {/* Avatar */}
              <div className="relative ">
                <div
                  className={`rotate-28  overflow-hidden                   border-2 border-[#7C3AED] bg-white shadow-sm [clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0_50%)]  ${
                    isFirst ? "h-[100px] w-[100px]" : "h-[80px] w-[80px]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover -rotate-28"
                  />
                </div>

                {/* Rank badge */}
                <div
                  className={`absolute left-1/2 flex -translate-x-1/2 items-center justify-center rounded-full text-white text-sm font-bold font-lora ${
                    isFirst
                      ? "-bottom-2 h-5 w-5 bg-[#4C1D95] "
                      : "-bottom-3 h-5 w-5 bg-[#7C3AED] "
                  } ${item.rank === 3 ? "bg-[#8B5CF6]" : ""}`}
                >
                  {item.rank}
                </div>
              </div>

              {/* Name */}
              <h3
                className={`mt-4 text-center font-medium text-[#667085] text-sm `}
              >
                {item.name}
              </h3>

              {/* Score Box */}
              <div
                className={`mt-4 flex flex-col items-center justify-center rounded-t-[13px]  bg-purple-200 px-6 ${
                  isFirst ? "h-[135px] w-[80px]" : "h-[106px] w-[70px]"
                }`}
              >
                <p className="m-0 text-lg font-bold font-lora text-[#4C1D95]">
                  {item.orders}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}