"use client";
import { Menu, Search, ChevronDown } from "lucide-react";
import Notification from "@/icons/notification.svg";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

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
  userName = "Delicious Burger",
  userInitials = "JD",
}: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = (action: string): void => {
    console.log(`${action} clicked`);
    setIsDropdownOpen(false);
    // Add your navigation or action logic here
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between sticky top-0 z-20">
      {/* Left Section */}
      <div className="flex items-center gap-2 sm:gap-4 flex-1 max-w-xl">
        {/* Mobile Menu Toggle */}
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
        </button>

        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 pointer-events-none" />
          <input
            type="text"
            className="bg-[#F6F6FB] text-[#1F384C] pl-3 sm:pr-10 pr-9 sm:pr-4 py-2 sm:py-3 rounded-lg w-full text-sm sm:text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5A6ACF] focus:bg-white transition-all"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 sm:gap-6 ml-2 sm:ml-4">
        {/* User Info with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={handleDropdownToggle}
            className="flex items-center gap-2 sm:gap-3 hover:bg-gray-50 rounded-lg p-1 sm:p-2 transition-colors"
            aria-label="User menu"
          >
            <div className="flex items-center gap-2">
              <div className="bg-[#FFE6CC] h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                <Image
                  src="/images/burger.png"
                  alt="Burger"
                  width={16}
                  height={40}
                  className="object-cover"
                />
              </div>
              <h3 className="hidden sm:block text-sm font-medium text-gray-700 whitespace-nowrap">
                {userName}
              </h3>
            </div>
            <ChevronDown
              className={`h-4 w-4 text-gray-500 transition-transform duration-200 hidden sm:block ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-30">
              <button
                onClick={() => handleMenuItemClick("Profile")}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Profile
              </button>
              <button
                onClick={() => handleMenuItemClick("Settings")}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Settings
              </button>
              <hr className="my-1 border-gray-200" />
              <button
                onClick={() => handleMenuItemClick("Logout")}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Notification Button */}
        <button
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative flex-shrink-0"
          aria-label="Notifications"
        >
          <Image
            src={Notification}
            alt="notification"
            width={20}
            height={20}
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
          {/* Notification Badge */}
          <span className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>
    </header>
  );
}
