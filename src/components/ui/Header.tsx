import { Menu } from "lucide-react";

interface HeaderProps {
  onToggleSidebar: () => void;
  onToggleCollapse: () => void;
  isCollapsed: boolean;
  title?: string;
  userName?: string;
  userInitials?: string;
}

export default function Header({
  onToggleSidebar,
  onToggleCollapse,
  isCollapsed,
  title = "Dashboard",
  userName = "John Doe",
  userInitials = "JD",
}: HeaderProps): JSX.Element {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle */}
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-6 w-6 text-gray-600" />
        </button>

        {/* Desktop Collapse Toggle */}
        <button
          onClick={onToggleCollapse}
          className="hidden md:block p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle sidebar collapse"
        >
          <Menu className="h-6 w-6 text-gray-600" />
        </button>

        {/* Page Title */}
        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notification Button */}
        <button
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
          aria-label="Notifications"
        >
          <svg
            className="h-5 w-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          {/* Notification Badge */}
          <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Avatar */}
        <div
          className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
          title={userName}
        >
          <span className="text-sm font-semibold text-white">
            {userInitials}
          </span>
        </div>
      </div>
    </header>
  );
}
