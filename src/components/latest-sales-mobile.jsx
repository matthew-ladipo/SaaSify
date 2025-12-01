// components/latest-sales-mobile.jsx
const LatestSalesMobile = () => {
  const salesData = [
    {
      id: 1,
      product: {
        name: "Macbook Pro",
        id: "10-3290-08"
      },
      customer: {
        name: "Rodney Cannon",
        email: "rodney.cannon@gmail.com"
      },
      delivery: {
        country: "United Kingdom",
        address: "193 Cole Plains Suite 649, 89120G"
      },
      pricing: {
        day: "$18.00",
        week: "$118.00",
        month: "$1,218.00"
      },
      status: "Shipped"
    },
    {
      id: 2,
      product: {
        name: "Dell Laptop",
        id: "10-3456-18"
      },
      customer: {
        name: "Mike Franklin",
        email: "mike.franklin@gmail.com"
      },
      delivery: {
        country: "United States",
        address: "619 Jeffrey Freeway Apt. 273"
      },
      pricing: {
        day: "$28.00",
        week: "$208.00",
        month: "$2,208.00"
      },
      status: "Processing"
    },
    {
      id: 3,
      product: {
        name: "Macbook Air",
        id: "10-3786-23"
      },
      customer: {
        name: "Louis Franklin",
        email: "louis.franklin@gmail.com"
      },
      delivery: {
        country: "Germany",
        address: "200 Davis Estates Suite 621"
      },
      pricing: {
        day: "$25.00",
        week: "$175.00",
        month: "$1,825.00"
      },
      status: "Shipped"
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'shipped':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'pending':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm  p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-md font-semibold">Latest sales</h2>
        <div className="flex gap-4 text-sm text-gray-600">
          <span>Day</span>
          <span>Week</span>
          <span className="font-medium">Month</span>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="space-y-4 md:hidden">
        {salesData.map((sale) => (
          <div key={sale.id} className=" rounded-lg p-4 space-y-3">
            {/* Product & Status Row */}
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-900">{sale.product.name}</p>
                <p className="text-sm text-gray-500">ID {sale.product.id}</p>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(sale.status)}`}>
                {sale.status}
              </span>
            </div>

            {/* Customer */}
            <div>
              <p className="text-sm font-medium text-gray-900">{sale.customer.name}</p>
              <p className="text-sm text-gray-500">{sale.customer.email}</p>
            </div>

            {/* Delivery */}
            <div>
              <p className="text-sm font-medium text-gray-900">{sale.delivery.country}</p>
              <p className="text-sm text-gray-500">{sale.delivery.address}</p>
            </div>

            {/* Pricing */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t">
              <div className="text-center">
                <p className="text-xs text-gray-500">Day</p>
                <p className="font-medium text-gray-900">{sale.pricing.day}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">Week</p>
                <p className="font-medium text-gray-900">{sale.pricing.week}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">Month</p>
                <p className="font-medium text-gray-900">{sale.pricing.month}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className=" text-left text-sm text-gray-600">
              <th className="pb-3 font-medium">Product</th>
              <th className="pb-3 font-medium">Customer</th>
              <th className="pb-3 font-medium">Delivery</th>
              <th className="pb-3 font-medium text-center">Day</th>
              <th className="pb-3 font-medium text-center">Week</th>
              <th className="pb-3 font-medium text-center">Month</th>
              <th className="pb-3 font-medium text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale) => (
              <tr key={sale.id} className=" hover:bg-gray-50">
                <td className="py-4">
                  <div>
                    <p className="font-medium text-gray-900">{sale.product.name}</p>
                    <p className="text-sm text-gray-500">ID {sale.product.id}</p>
                  </div>
                </td>
                <td className="py-4">
                  <div>
                    <p className="font-medium text-gray-900">{sale.customer.name}</p>
                    <p className="text-sm text-gray-500">{sale.customer.email}</p>
                  </div>
                </td>
                <td className="py-4">
                  <div>
                    <p className="font-medium text-gray-900">{sale.delivery.country}</p>
                    <p className="text-sm text-gray-500">{sale.delivery.address}</p>
                  </div>
                </td>
                <td className="py-4 text-center">
                  <span className="font-medium text-gray-900">{sale.pricing.day}</span>
                </td>
                <td className="py-4 text-center">
                  <span className="font-medium text-gray-900">{sale.pricing.week}</span>
                </td>
                <td className="py-4 text-center">
                  <span className="font-medium text-gray-900">{sale.pricing.month}</span>
                </td>
                <td className="py-4 text-center">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(sale.status)}`}>
                    {sale.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className=" pt-4 ">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Showing {salesData.length} of {salesData.length} results
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestSalesMobile;