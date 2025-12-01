import React from "react";
import SalesComparisonCard from "../../components/SalesComparisonCard ";
import OrdersChart from "../../components/orders-chart";
import LatestSalesMobile from "../../components/latest-sales-mobile";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
const Dashboard = () => {
  return (
    <div className="flex">
     <section className="hidden  lg:block p-6 w-[330px] top-0   sticky bg-card">
          <h2 className="font-bold   text-2xl">
            <img
              src="/sidenav/CraftUI Logo.png"
              alt="logo"
              className="w-16 h-auto"
            />
            <span className="font-light">Welcome</span>
            <br />
            CraftUI
          </h2>
          <div>
            <p className="text-sm text-gray-600">Upcoming event</p>
            <Card className="border-0 bg-blue-50 mt-4 px-4 pb-2">
              <div className="flex items-center ">
                <h2 className="text-4xl mb-4 font-bold text-blue-500">.</h2>
                <p className="text-xs text-gray-500 mt-2">05:48AM</p>
              </div>
              <div>
                <p className="text-sm font-bold">
                  Tell how to boost website traffic
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Tell how to boost website traffic
                </p>
              </div>
            </Card>
          </div>
          <div>
            <Card className="border-0 bg-blue-50 mt-4 px-4 pb-2">
              <div className="flex items-center ">
                <h2 className="text-4xl mb-4 font-bold text-blue-500">.</h2>
                <p className="text-xs text-gray-500 mt-2">05:48AM</p>
              </div>
              <div>
                <p className="text-sm font-bold">
                  Tell how to boost website traffic
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Tell how to boost website traffic
                </p>
              </div>
            </Card>
          </div>
          <div>
            <Card className="border-0 bg-blue-50 mt-4 px-4 pb-2">
              <div className="flex items-center ">
                <h2 className="text-4xl mb-4 font-bold text-blue-500">.</h2>
                <p className="text-xs text-gray-500 mt-2">05:48AM</p>
              </div>
              <div>
                <p className="text-sm font-bold">
                  Tell how to boost website traffic
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Tell how to boost website traffic
                </p>
              </div>
            </Card>
          </div>
        </section>
        {/* Main */}
       <div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto p-4">
        {/* With custom progress */}
        <SalesComparisonCard
          title="Revenue"
          value="8.921"
          progress={45}
          progressColor="blue"
        />
        {/* With high progress */}
        <SalesComparisonCard
          title="Growth"
          value="2.156"
          progress={85}
          progressColor="indigo"
        />
        <SalesComparisonCard
          title="Growth"
          value="2.156"
          progress={85}
          progressColor="indigo"
        />
      </div>
      <div className="container mx-auto p-4">
        <OrdersChart />
      </div>
      <div className="container mx-auto p-4">
        <LatestSalesMobile />
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
