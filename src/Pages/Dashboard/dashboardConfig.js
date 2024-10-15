import { Home, BarChart, Users, Settings } from "lucide-react";

export const dashboardConfig = {
  logo: {
    src: "https://via.placeholder.com/150",
    alt: "Logo",
    title: "MyApp",
  },
  sidebar: [
    {
      label: "Home",
      icon: "Home", // Using string for dynamic icon loading
      path: "/home",
      componentName: "HomeComponent", // The component that will be rendered dynamically
    },
    {
      label: "Analytics",
      icon: "BarChart",
      path: "/analytics",
      componentName: "AnalyticsComponent",
    },
    {
      label: "Users",
      icon: "Users",
      path: "/users",
      componentName: "UsersComponent",
    },
    {
      label: "Settings",
      icon: "Settings",
      path: "/settings",
      componentName: "SettingsComponent",
    },
  ],
};
