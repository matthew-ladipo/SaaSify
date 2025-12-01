import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  RxHome,
  RxEnvelopeClosed,
  RxCalendar,
  RxMagnifyingGlass,
  RxGear,
  RxChevronLeft,
  RxChevronRight,
} from "react-icons/rx";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function DashboardLayout() {
  const items = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: RxHome,
    },
    {
      title: "Project",
      url: "/dashboard/page2",
      icon: RxEnvelopeClosed,
    },
    {
      title: "Page 3",
      url: "/dashboard/page3",
      icon: RxCalendar,
    },
    {
      title: "Page 4",
      url: "/dashboard/page4",
      icon: RxMagnifyingGlass,
    },
    {
      title: "Page 5",
      url: "/dashboard/page5",
      icon: RxGear,
    },
    {
      title: "Page 6",
      url: "/dashboard/page6",
      icon: RxHome,
    },
    {
      title: "Page 7",
      url: "/dashboard/page7",
      icon: RxEnvelopeClosed,
    },
    {
      title: "Page 8",
      url: "/dashboard/page8",
      icon: RxCalendar,
    },
    {
      title: "Page 9",
      url: "/dashboard/page9",
      icon: RxMagnifyingGlass,
    },
  ];

  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const currentItem = items.find(item => item.url === location.pathname);
  const currentTitle = currentItem ? currentItem.title : "Dashboard";

  return (
    <div className="flex w-full bg-background">
      {/* Sidebar */}
      <aside
        className={`bg-card  h-screen sticky top-0  p-6 hidden md:block transition-all duration-300 border-r border-gray-200 ${
          isCollapsed ? "w-16" : "w-[150px]"
        }`}
      >
        <div
          className={`flex items-center mb-8 ${
            isCollapsed ? "justify-center" : "justify-between"
          }`}
        >
          <h2 className={`font-bold  ${isCollapsed ? "text-lg " : "text-2xl"}`}>
            <img
              src="/sidenav/CraftUI Logo.png"
              alt="logo"
              className={isCollapsed ? "w-8 h-8" : "w-auto h-auto"}
            />
          </h2>
        </div>
        <nav className="space-y-2">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link to={item.url} key={index}>  
              
              <Button
                key={index}
                variant="ghost"
                className={`w-full gap-2 hover:bg-blue-100 p-2 rounded-lg ${
                  isCollapsed ? "justify-center px-0 " : "justify-start"
                }`}
              >
                <Icon />
                {!isCollapsed && item.title}
              </Button>
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className="flex-1 p-6 w-full overflow-y-auto ">
        <div className="flex items-center gap-2 py-2 mb-2">
          <Button
            variant="ghost"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:inline bg-gray-200 hover:bg-gray-300 p-2 rounded-lg"
          >
            {isCollapsed ? (
              <RxChevronRight size={24} />
            ) : (
              <RxChevronLeft size={24} />
            )}
          </Button>
          <h1 className="text-3xl font-bold ">{currentTitle}</h1>
        </div>
        <Outlet />
      </main>
    </div>
  );
}
