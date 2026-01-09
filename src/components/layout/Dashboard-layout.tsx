import { useState, ReactNode } from 'react';
import Sidebar from '../ui/Sidebar';
import Header from '../ui/Header';

interface DashboardLayoutProps {
  children?: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const handleToggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleToggleCollapse = (): void => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSidebarItemClick = (itemTitle: string): void => {
    console.log('Navigating to:', itemTitle);
    // Close mobile sidebar when item is clicked
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-gray-50">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={handleToggleSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        isCollapsed={isCollapsed}
        onItemClick={handleSidebarItemClick}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <Header 
          onToggleSidebar={handleToggleSidebar}
          onToggleCollapse={handleToggleCollapse}
          isCollapsed={isCollapsed}
        />
        
        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-6 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
              <p className="text-gray-600">Here&apos;s what&apos;s happening with your restaurant today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Total Orders</h3>
                <p className="text-3xl font-bold text-gray-900">248</p>
                <span className="text-xs text-green-600 font-medium">↑ 12% from yesterday</span>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Revenue</h3>
                <p className="text-3xl font-bold text-gray-900">$12,482</p>
                <span className="text-xs text-green-600 font-medium">↑ 8% from yesterday</span>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Active Tables</h3>
                <p className="text-3xl font-bold text-orange-600">14</p>
                <span className="text-xs text-gray-500">of 24 tables</span>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Customer Rating</h3>
                <p className="text-3xl font-bold text-gray-900">4.8</p>
                <span className="text-xs text-yellow-600 font-medium">★★★★★</span>
              </div>
            </div>

            {/* Children Content */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}