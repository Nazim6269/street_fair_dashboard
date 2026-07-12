interface StatsCardProps {
    color: string;
    title: string;
    value: number;
    update: string;
    icon: React.ReactNode;
  }
  
     const StatsCard: React.FC<StatsCardProps> = ({ color, title, value, update, icon }) => {
    return (
      <div className="flex flex-col w-full relative overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm hover:shadow-md transition-shadow">
  
        <div className="flex items-start gap-4 px-5 pt-5 pb-4">
  
          <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-lg" style={{ backgroundColor: color }} />
  
          <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-[#4C1D95] to-[#7C3AED] p-3 shadow-md shadow-purple-500/20">
            {icon}
          </div>
  
          <div className="flex flex-col gap-1 grow">
            <h3 className="text-[#697586] text-sm font-medium">
              {title}
            </h3>
            <p className="text-[#2A3542] text-3xl font-bold tracking-tight">
              {value.toLocaleString()}
            </p>
          </div>
        </div>
  
        <div className="flex items-center gap-2.5 px-5 py-3 border-t border-purple-50 bg-purple-50/30">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
          <p className="text-[#697586] text-xs font-medium">
            Updated {update}
          </p>
        </div>
      </div>
    );
  };

  export default StatsCard;
