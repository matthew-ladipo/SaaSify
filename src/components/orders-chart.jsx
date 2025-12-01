// components/orders-chart.jsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const OrdersChart = () => {
  // Sample data - replace with your actual data
  const monthlyData = [
    { month: 'Jan', orders: 45 },
    { month: 'Feb', orders: 52 },
    { month: 'Mar', orders: 48 },
    { month: 'Apr', orders: 60 },
    { month: 'May', orders: 55 },
    { month: 'Jun', orders: 48 },
    { month: 'Jul', orders: 65 },
    { month: 'Aug', orders: 70 },
    { month: 'Sep', orders: 58 },
    { month: 'Oct', orders: 62 },
    { month: 'Nov', orders: 75 },
    { month: 'Dec', orders: 80 },
  ];

  const statsData = {
    day: { label: 'June 16', amount: '$48,200' },
    week: { label: 'Week', amount: '$152,400' },
    month: { label: 'Month', amount: '$489,600' }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm  p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-md font-semibold">Orders</h2>
        <div className="flex gap-4 text-sm text-gray-600">
          <span>Day</span>
          <span>Week</span>
          <span className="font-medium">Month</span>
        </div>
      </div>

      {/* Month Labels */}
      <div className="flex justify-between mb-2 text-xs text-gray-500">
        {monthlyData.map((item, index) => (
          <span key={index}>{item.month}</span>
        ))}
      </div>

      {/* Chart */}
      <div className="h-48 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <Tooltip />
            <Bar 
              dataKey="orders" 
              fill="#3b82f6" 
              radius={[4, 4, 0, 0]}
              barSize={8}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OrdersChart;