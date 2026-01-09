import { ArrowDown } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface OrderData {
  day: string;
  lastWeek: number;
  last6Days: number;
}

const orderData: OrderData[] = [
  { day: "01", lastWeek: 2100, last6Days: 2000 },
  { day: "02", lastWeek: 3000, last6Days: 1000 },
  { day: "03", lastWeek: 700, last6Days: 2200 },
  { day: "04", lastWeek: 2600, last6Days: 1800 },
  { day: "05", lastWeek: 2400, last6Days: 900 },
  { day: "06", lastWeek: 3200, last6Days: 3900 },
];

export default function OrderCard() {
  return (
    <div className="bg-white p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-md font-medium text-gray-600">Order</h3>
        <button className="text-sm shadow p-2 rounded-lg bg-[#FBFCFE] border border-[#DDE4F0] cursor-pointer text-[#5A6ACF] hover:text-blue-700 font-medium transition-colors">
          View Report
        </button>
      </div>

      <div className="mb-2">
        <p className="text-3xl font-bold text-gray-900">2.568</p>
        <div className="flex items-center gap-1 mt-1">
          <ArrowDown className="h-4 w-4 text-red-600" />
          <span className="text-sm text-red-600 font-medium">2.1%</span>
          <span className="text-sm text-gray-500">vs last week</span>
        </div>
      </div>

      <p className="text-xs text-gray-500 mb-4">Sales from 1-8 Dec, 2020</p>

      {/* Line Chart */}
      <ResponsiveContainer width="100%" height={140}>
        <LineChart data={orderData}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#E2E7E7"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#737B8B", fontSize: 12 }}
          />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              backgroundColor: "#37375C",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              fontSize: "12px",
              color: "#fff",
            }}
          />
          <Line
            dataKey="lastWeek"
            stroke="#E6E8EC"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="last6Days"
            stroke="#5A6ACF"
            strokeWidth={2.5}
            dot={false}
          />
        </LineChart>
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
