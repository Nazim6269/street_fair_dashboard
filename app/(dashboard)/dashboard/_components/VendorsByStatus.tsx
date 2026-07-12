import { VendorsByStatus } from "@/types/dashboard.types";
import React, { useMemo, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import GenericDropDown from "@/components/common/generic-dropdown/GenericDropdown";

interface Props {
  vendorsByStatus: VendorsByStatus | undefined;
}

const STATUS_CONFIG = [
  { key: "pending", name: "Pending", color: "#8B5CF6" },
  { key: "verified", name: "Verified", color: "#4C1D95" },
  { key: "expired", name: "Expired", color: "#7C3AED" },
  { key: "suspended", name: "Suspended", color: "#A78BFA" },
  { key: "rejected", name: "Rejected", color: "#C4B5FD" },
] as const;

const StatusTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const item = payload[0].payload;
    return (
      <div className="bg-white border border-purple-100 rounded-xl p-3 shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "2px",
              backgroundColor: item.color,
            }}
          />
          <span className="text-[#64748b] text-sm">{item.name}</span>
        </div>
        <p className="text-[#2A3542] text-base font-bold m-0">
          {item.value}{" "}
          <span className="text-[#94a3b8] text-xs font-normal">
            ({item.percent}%)
          </span>
        </p>
      </div>
    );
  }
  return null;
};

const dummyData = {
  total: 1284,
  pending: 156,
  verified: 842,
  expired: 124,
  suspended: 89,
  rejected: 73,
};

const VendorsStatusChart = ({ vendorsByStatus }: Props) => {
  const [selectedPeriod, setSelectedPeriod] = useState("this-year");
  const dataToUse = vendorsByStatus || dummyData;

  const chartData = useMemo(() => {
    const total =
      dataToUse.pending +
      dataToUse.verified +
      dataToUse.expired +
      dataToUse.suspended +
      dataToUse.rejected;

    return STATUS_CONFIG.map((item) => {
      const value = dataToUse[item.key];
      return {
        name: item.name,
        value,
        color: item.color,
        percent: total ? Math.round((value / total) * 100) : 0,
      };
    });
  }, [dataToUse]);

  const totalVendors = dataToUse.total ?? 1284;

  return (
    <div className="w-full max-w-[416px]">
      <div className="bg-white md:p-6 p-4 rounded-2xl border border-purple-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="section-title">Vendors by Status</h3>
          <GenericDropDown
            options={[{ label: "This Year", value: "this-year" }, { label: "Last Year", value: "last-year" }]}
            value={selectedPeriod}
            onValueChange={(value) => setSelectedPeriod(value.toString())}
            placeholder="Select Period"
            variant="light"
            size="sm"
            radius="sm"
          />
        </div>

        <div className="w-full h-[180px] relative overflow-hidden">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip content={<StatusTooltip />} />
              <Pie
                data={chartData}
                cx="50%"
                cy="100%"
                startAngle={180}
                endAngle={0}
                innerRadius={110}
                outerRadius={170}
                paddingAngle={2}
                cornerRadius={8}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke="none"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-[#64748b] text-sm">Total Vendors</p>
            <h2 className="text-[#2A3542] text-[28px] font-bold m-0">
              {totalVendors.toLocaleString()}
            </h2>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 border-t border-purple-50 pt-4">
          {chartData.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between py-1.5"
            >
              <div className="flex items-center gap-2">
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "3px",
                    backgroundColor: item.color,
                    flexShrink: 0,
                  }}
                />
                <span className="text-[#64748b] text-sm">
                  {item.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[#94a3b8] text-xs">
                  {item.percent}%
                </span>
                <span className="text-[#2A3542] text-sm font-bold w-6 text-right">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorsStatusChart;
