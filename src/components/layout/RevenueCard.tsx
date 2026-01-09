import { ArrowUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface RevenueData {
  day: string;
  lastWeek: number;
  last6Days: number;
}

const revenueData: RevenueData[] = [
  { day: "01", lastWeek: 4000, last6Days: 5000 },
  { day: "02", lastWeek: 5500, last6Days: 6500 },
  { day: "03", lastWeek: 3500, last6Days: 4500 },
  { day: "04", lastWeek: 4800, last6Days: 5800 },
  { day: "05", lastWeek: 6000, last6Days: 7000 },
  { day: "06", lastWeek: 7200, last6Days: 8500 },
  { day: "07", lastWeek: 5000, last6Days: 6200 },
  { day: "08", lastWeek: 6000, last6Days: 7200 },
  { day: "09", lastWeek: 4500, last6Days: 5500 },
  { day: "10", lastWeek: 4000, last6Days: 4800 },
  { day: "11", lastWeek: 5800, last6Days: 6800 },
  { day: "12", lastWeek: 7500, last6Days: 9200 },
];

export default function RevenueCard() {
  return (
    <div className="bg-white p-6 border-b md:border-r border-gray-200 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-md font-medium text-gray-600">Revenue</h3>
        <button className="text-sm shadow p-2 rounded-lg bg-[#FBFCFE] border border-[#DDE4F0] cursor-pointer text-[#5A6ACF] hover:text-blue-700 font-medium transition-colors">
          View Report
        </button>
      </div>

      <div className="mb-2">
        <p className="text-3xl font-bold text-gray-900">IDR 7.852.000</p>
        <div className="flex items-center gap-1 mt-1">
          <ArrowUp className="h-4 w-4 text-green-600" />
          <span className="text-sm text-green-600 font-medium">2.1%</span>
          <span className="text-sm text-gray-500">vs last week</span>
        </div>
      </div>

      <p className="text-xs text-gray-500 mb-4">Sales from 1-12 Dec, 2020</p>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={revenueData} barGap={2} barCategoryGap="25%">
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#E2E7E7"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
          />
          <YAxis hide />
          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              backgroundColor: "#37375C",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              fontSize: "12px",
              color: "#fff",
            }}
          />
          <Bar
            dataKey="lastWeek"
            fill="#5A6ACF"
            radius={[0, 0, 0, 0]}
            maxBarSize={8}
          />
          <Bar
            dataKey="last6Days"
            fill="#E6E8EC"
            radius={[0, 0, 0, 0]}
            maxBarSize={8}
          />
        </BarChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#5A6ACF] rounded-full" />
          <span className="text-gray-600">Last 6 days</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#E6E8EC] rounded-full" />
          <span className="text-gray-600">Last Week</span>
        </div>
      </div>
    </div>
  );
}
