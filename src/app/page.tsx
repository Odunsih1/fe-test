"use client";
import DashboardLayout from "@/components/layout/Dashboard-layout";
import { TrendingUp, TrendingDown } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

interface DashboardPageProps {
  className?: string;
}

interface FoodItem {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface RevenueData {
  day: string;
  lastWeek: number;
  last6Days: number;
}

interface OrderData {
  day: string;
  lastWeek: number;
  last6Days: number;
}

interface OrderTimeData {
  name: string;
  value: number;
  color: string;
}

const foodItems: FoodItem[] = [
  {
    id: "1",
    name: "Fresh Salad Bowl",
    price: "IDR 45.000",
    image: "/images/fresh.png",
  },
  {
    id: "2",
    name: "Chicken Noodles",
    price: "IDR 75.000",
    image: "/images/chicken.png",
  },
  {
    id: "3",
    name: "Smoothie Fruits",
    price: "IDR 45.000",
    image: "/images/smoothie.png",
  },
  {
    id: "4",
    name: "Hot Chicken Wings",
    price: "IDR 45.000",
    image: "/images/hot.png",
  },
];

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

const orderTimeData: OrderTimeData[] = [
  { name: "Afternoon", value: 40, color: "#5A6ACF" },
  { name: "Evening", value: 32, color: "#C7CEFF" },
  { name: "Morning", value: 28, color: "#8593ED" },
];

const orderData: OrderData[] = [
  { day: "01", lastWeek: 2100, last6Days: 2000 },
  { day: "02", lastWeek: 3000, last6Days: 1000 },
  { day: "03", lastWeek: 700, last6Days: 2200 },
  { day: "04", lastWeek: 2600, last6Days: 1800 },
  { day: "05", lastWeek: 2400, last6Days: 900 },
  { day: "06", lastWeek: 3200, last6Days: 3900 },
];

export default function DashboardPage({
  className = "",
}: DashboardPageProps): JSX.Element {
  return (
    <DashboardLayout>
      <div className={`space-y-0 ${className}`}>
        {/* Top Row - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Revenue Card */}
          <div className="bg-white p-6 border-b border-r border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Revenue</h3>
              <button className="text-sm shadow p-2 rounded-lg bg-[#FBFCFE] border border-[#DDE4F0] cursor-pointer text-[#5A6ACF] hover:text-blue-700 font-medium">
                View Report
              </button>
            </div>

            <div className="mb-2">
              <p className="text-3xl font-bold text-gray-900">IDR 7.852.000</p>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-600 font-medium">2.1%</span>
                <span className="text-sm text-gray-500">vs last week</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mb-4">
              Sales from 1-12 Dec, 2020
            </p>

            {/* Bar Chart */}
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={revenueData}>
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
                  }}
                />
                <Bar dataKey="lastWeek" fill="#5A6ACF" radius={[0, 0, 0, 0]} />
                <Bar dataKey="last6Days" fill="#E6E8EC" radius={[0, 0, 0, 0]} />
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

          {/* Order Time Card */}
          <div className="bg-white p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-medium text-gray-600">
                  Order Time
                </h3>
                <p className="text-xs text-gray-500 mt-1">From 1-6 Dec, 2020</p>
              </div>
              <button className="text-sm shadow p-2 rounded-lg bg-[#FBFCFE] border border-[#DDE4F0] cursor-pointer text-[#5A6ACF] hover:text-blue-700 font-medium">
                View Report
              </button>
            </div>

            {/* Donut Chart */}
            <div className="flex items-center justify-center my-4 relative">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={orderTimeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    dataKey="value"
                  >
                    {orderTimeData.map(
                      (entry: OrderTimeData, index: number) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      )
                    )}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-[#37375C] text-white px-4 py-3 rounded-lg shadow-lg">
                            <p className="text-xs ">{payload[0].name}</p>
                            <p className="text-xs  opacity-50">1pm - 4pm</p>
                            <p className="text-lg font-medium mt-1">
                              1.890 orders
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-3 gap-4 text-center mt-4">
              {orderTimeData.map((item: OrderTimeData) => (
                <div key={item.name}>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-xs text-gray-600">{item.name}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">
                    {item.value}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row - 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Your Rating Card */}
          <div className="bg-white p-6 border-r border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              Your Rating
            </h3>
            <p className="text-xs text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur
            </p>

            {/* Custom Pie Chart with SVG */}
            <div className="flex items-center justify-center my-6 relative">
              <div className="bg-transparent rounded-full p-1 border-[#6463D6] border-r-2 border-b-2 relative left-35 z-10 ">
                <div className="bg-[#6463D6] rounded-full w-38 h-38 flex items-center opacity-90  flex-col justify-center ">
                  <h6 className="text-[20px]">85%</h6>
                  <p className="text-[12px]">Hygiene</p>
                </div>
              </div>
              <div className="bg-transparent rounded-full p-1 border-[#2FBFDE] border-r-2 border-b-2 relative top-45 right-22">
                <div className="bg-[#2FBFDE] rounded-full w-46 h-46 flex items-center opacity-90  flex-col justify-center ">
                  <h6 className="text-[24px]">92%</h6>
                  <p className="text-[12px]">Packaging</p>
                </div>
              </div>
              <div className="bg-transparent rounded-full p-1 border-[#F99C30] border-r-2 border-b-2 relative right-25 top-20">
                <div className="bg-[#F99C30] rounded-full w-52 h-52 flex items-center opacity-90 flex-col justify-center ">
                  <h6 className="text-[33px]">85%</h6>
                  <p className="text-[12px]">Food Taste</p>
                </div>
              </div>
            </div>
          </div>

          {/* Most Ordered Food Card */}
          <div className="bg-white p-6 border-r border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              Most Ordered Food
            </h3>
            <p className="text-xs text-gray-500 mb-6">
              Adipiscing elit, sed do eiusmod tempor
            </p>

            <div>
              {foodItems.map((item: FoodItem) => (
                <div key={item.id} className="flex items-center border-b gap-3">
                  <div className="w-28 h-28 rounded-full  flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {item.name}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Order Card */}
          <div className="bg-white p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Order</h3>
              <button className="text-sm shadow p-2 rounded-lg bg-[#FBFCFE] border border-[#DDE4F0] cursor-pointer text-[#5A6ACF] hover:text-blue-700 font-medium">
                View Report
              </button>
            </div>

            <div className="mb-2">
              <p className="text-3xl font-bold text-gray-900">2.568</p>
              <div className="flex items-center gap-1 mt-1">
                <TrendingDown className="h-4 w-4 text-red-600" />
                <span className="text-sm text-red-600 font-medium">2.1%</span>
                <span className="text-sm text-gray-500">vs last week</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mb-4">
              Sales from 1-8 Dec, 2020
            </p>

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
        </div>
      </div>
    </DashboardLayout>
  );
}
