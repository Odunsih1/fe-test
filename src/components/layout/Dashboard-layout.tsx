"use client";
import { useState, ReactNode } from "react";
import Sidebar from "../ui/Sidebar";
import Header from "../ui/Header";

interface DashboardLayoutProps {
  children?: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const handleToggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleToggleCollapse = (): void => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSidebarItemClick = (itemTitle: string): void => {
    console.log("Navigating to:", itemTitle);
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
        <main className="flex-1 p-6 bg-white">
          <div className="max-w-750 mx-auto">
            {/* Welcome Section */}
            <div className="p-8 mb-6 ">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Dashboard
              </h2>
            </div>

            {/* Children Content */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
