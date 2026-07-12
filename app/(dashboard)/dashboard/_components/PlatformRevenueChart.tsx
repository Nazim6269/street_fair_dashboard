import GenericDropDown from '@/components/common/generic-dropdown/GenericDropdown';
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList, Tooltip, Legend } from 'recharts';

const fakeData = [
    { name: 'Jan', revenue: 18400 },
    { name: 'Feb', revenue: 22100 },
    { name: 'Mar', revenue: 19800 },
    { name: 'Apr', revenue: 25600 },
    { name: 'May', revenue: 28900 },
    { name: 'Jun', revenue: 31200 },
    { name: 'Jul', revenue: 27400 },
    { name: 'Aug', revenue: 33800 },
    { name: 'Sep', revenue: 29500 },
    { name: 'Oct', revenue: 36200 },
    { name: 'Nov', revenue: 32100 },
    { name: 'Dec', revenue: 41500 },
];

const RevenueTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-purple-100 rounded-xl p-3 shadow-lg">
                <p className="text-[#94a3b8] text-xs mb-1">{label}</p>
                <p className="text-[#2A3542] text-base font-bold">
                    ${payload[0].value.toLocaleString()}
                </p>
            </div>
        );
    }
    return null;
};

const CustomBar = (props: any) => {
    const { x, y, width, height } = props;
    return (
        <g>
            <rect x={x} y={y} width={width} height={height} fill="url(#barGradient)" />
            <line
                x1={x}
                y1={y}
                x2={x + width}
                y2={y}
                stroke="#7C3AED"
                strokeWidth={3}
                strokeLinecap="round"
            />
        </g>
    );
};

const PlatformRevenueChart = () => {
    const [selectedOption, setSelectedOption] = useState("this-year");

    return (
        <div className="w-full h-[445px] bg-white md:p-6 p-4 rounded-2xl border border-purple-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h3 className="section-title">Platform Revenue</h3>
                <GenericDropDown
                    options={[{ label: "This Year", value: "this-year" }, { label: "Last Year", value: "last-year" }]}
                    value={selectedOption}
                    onValueChange={(value) => setSelectedOption(value.toString())}
                    placeholder="Select Period"
                    variant="light"
                    size="md"
                    radius="sm"
                />
            </div>
            <ResponsiveContainer width="100%" height="85%">
                <BarChart data={fakeData} margin={{ top: 20, right: 30, left: 0, bottom: 16 }}>
                    <defs>
                        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#7C3AED" stopOpacity={0.4} />
                            <stop offset="100%" stopColor="#7C3AED" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />

                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#999', fontSize: 12 }}
                    />

                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#999', fontSize: 12 }}
                        tickFormatter={(value) => `$${(Number(value) / 1000).toFixed(0)}k`}
                    />

                    <Tooltip
                        content={<RevenueTooltip />}
                        cursor={{ fill: 'rgba(124,58,237,0.08)' }}
                    />

                    <Legend
                        verticalAlign="bottom"
                        iconType="square"
                        iconSize={12}
                        wrapperStyle={{ paddingTop: '12px' }}
                        formatter={(value) => (
                            <span style={{ color: '#64748b', fontSize: '13px' }}>{value}</span>
                        )}
                    />

                    <Bar
                        dataKey="revenue"
                        name="Revenue"
                        shape={<CustomBar />}
                    >
                        <LabelList
                            dataKey="revenue"
                            position="top"
                            offset={-30}
                            formatter={(val) => `$${(Number(val) / 1000).toFixed(1)}k`}
                            style={{ fill: '#4C1D95', fontSize: '11px', fontWeight: 'bold' }}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PlatformRevenueChart;
