import React from "react";
import { useNavigate } from "react-router-dom";
import { dashboardConfig } from "./dashboardConfig";
import SidebarItem from "./SideBarItem";

const DashboardPage = () => {
  const navigate = useNavigate();

  // Render Sidebar links from config
  const renderSidebarLinks = () => {
    return dashboardConfig.sidebar.map((item) => (
      <SidebarItem
        key={item.path}
        label={item.label}
        icon={item.icon}
        onClick={() => navigate(item.path)} // Navigate to path
      />
    ));
  };

  // Render main content based on current path
  const renderMainContent = () => {
    const currentPath = window.location.pathname;
    const route = dashboardConfig.sidebar.find(
      (item) => item.path === currentPath
    );

    if (route) {
      const Component = loadComponent(route.componentName); // Lazy load based on config
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
      );
    }

    return <div>Select a menu item to display content.</div>;
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white w-64 flex flex-col">
        <div className="p-6 flex items-center justify-center">
          <img
            src={dashboardConfig.logo.src}
            alt={dashboardConfig.logo.alt}
            className="w-12 h-12 rounded-full"
          />
          <span className="ml-3 text-xl font-bold">
            {dashboardConfig.logo.title}
          </span>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-4">{renderSidebarLinks()}</ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">{renderMainContent()}</main>
    </div>
  );
};

export default DashboardPage;
