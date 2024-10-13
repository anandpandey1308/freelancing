/* eslint-disable react/no-unescaped-entities */
import { Home, BarChart, Users, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white w-64 flex flex-col">
        {/* Logo */}
        <div className="p-6 flex items-center justify-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
          <span className="ml-3 text-xl font-bold">MyApp</span>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            <li>
              <div
                className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 cursor-pointer"
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </div>
            </li>
            <li>
              <div
                className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 cursor-pointer"
                
              >
                <BarChart className="w-5 h-5" />
                <span>Analytics</span>
              </div>
            </li>
            <li>
              <div
                className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 cursor-pointer"
                
              >
                <Users className="w-5 h-5" />
                <span>Users</span>
              </div>
            </li>
            <li>
              <div
                className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 cursor-pointer"
                
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </div>
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4">
          <button
            className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 w-full"
            onClick={() => navigate("/signin")}
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        <div className="text-3xl font-bold mb-6">Dashboard</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <p>Welcome to the dashboard. Here's a quick overview of the stats.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <p>Track the latest trends and performance data here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">User Growth</h2>
            <p>Check user sign-ups and engagement metrics here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
            <p>Manage your app settings and configurations.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
