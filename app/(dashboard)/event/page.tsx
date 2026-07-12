"use client";

import { Calendar, Clock, MapPin, Zap } from "lucide-react";
import { useEffect, useState } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 30);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const blocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 justify-center">
      {blocks.map((block) => (
        <div key={block.label} className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#4C1D95] to-[#7C3AED] flex items-center justify-center shadow-lg shadow-purple-500/20">
            <span className="text-2xl font-bold text-white font-[Lora]">{String(block.value).padStart(2, "0")}</span>
          </div>
          <span className="mt-2 text-xs font-medium text-[#697586]">{block.label}</span>
        </div>
      ))}
    </div>
  );
}

const features = [
  { icon: Calendar, title: "Event Scheduling", desc: "Create and manage events with smart scheduling" },
  { icon: MapPin, title: "Location Tracking", desc: "Real-time vendor location during events" },
  { icon: Clock, title: "Live Updates", desc: "Instant notifications for event changes" },
  { icon: Zap, title: "Quick Setup", desc: "Launch events in minutes, not hours" },
];

export default function EventPage() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="max-w-[760px] mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-[#4C1D95] px-4 py-2 rounded-full text-sm font-semibold">
          <Zap className="w-4 h-4" />
          Coming Soon
        </div>

        <h2 className="text-[#2A3542] font-[Lora] text-[40px] font-bold leading-[130%] tracking-[1.6px]">
          Event Management
        </h2>

        <p className="text-[#697586] text-lg font-medium leading-[160%]">
          Advanced event curation and logistical management tools designed for high-stakes environments.
        </p>

        <CountdownTimer />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-purple-100 bg-purple-50/30">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4C1D95] to-[#7C3AED] flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-sm font-semibold text-[#2A3542]">{feature.title}</h4>
              <p className="text-xs text-[#697586] text-center">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
