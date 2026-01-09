import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface OrderTimeData {
  name: string;
  value: number;
  color: string;
  [keyof: string]: string | number;
}

const orderTimeData: OrderTimeData[] = [
  { name: "Afternoon", value: 40, color: "#5A6ACF" },
  { name: "Evening", value: 32, color: "#C7CEFF" },
  { name: "Morning", value: 28, color: "#8593ED" },
];

export default function OrderTimeCard() {
  return (
    <div className="bg-white p-6 border-b border-gray-200 h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-md font-medium text-gray-600">Order Time</h3>
          <p className="text-sm text-gray-500 mt-1">From 1-6 Dec, 2020</p>
        </div>
        <button className="text-sm shadow p-2 rounded-lg bg-[#FBFCFE] border border-[#DDE4F0] cursor-pointer text-[#5A6ACF] hover:text-blue-700 font-medium transition-colors">
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
              {orderTimeData.map((entry: OrderTimeData, index: number) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-[#37375C] text-white px-4 py-3 rounded-lg shadow-lg">
                      <p className="text-xs">{payload[0].name}</p>
                      <p className="text-xs opacity-50">1pm - 4pm</p>
                      <p className="text-lg font-medium mt-1">1.890 orders</p>
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
            <p className="text-sm font-semibold text-gray-900">{item.value}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
