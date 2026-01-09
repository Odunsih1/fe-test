"use client";
import { useState } from "react";
import Dashboard from "/icons/dashboard.svg";
import Food from "/icons/food.svg";
import Manage from "/icons/manage.svg";
import Customer from "/icons/customer.svg";
import Settings from "/icons/settings.svg";
import Payment from "/icons/payment.svg";
import Accounts from "/icons/accounts.svg";
import Help from "/icons/help.svg";

interface MenuItem {
  title: string;
  icon: string;
}

interface MenuSection {
  header: string;
  items: MenuItem[];
}

interface SidebarProps {
  isOpen: boolean;
  isCollapsed: boolean;
  onItemClick?: (itemTitle: string) => void;
}

const menuSections: MenuSection[] = [
  {
    header: "MENU",
    items: [
      { title: "Dashboard", icon: Dashboard },
      { title: "Food Order", icon: Food },
      { title: "Manage Menu", icon: Manage },
      { title: "Customer Review", icon: Customer },
    ],
  },
  {
    header: "OTHERS",
    items: [
      { title: "Settings", icon: Settings },
      { title: "Payment", icon: Payment },
      { title: "Accounts", icon: Accounts },
      { title: "Help", icon: Help },
    ],
  },
];

export default function Sidebar({
  isOpen,
  isCollapsed,
  onItemClick,
}: SidebarProps): JSX.Element {
  const [activeItem, setActiveItem] = useState<string>("Dashboard");

  const handleItemClick = (itemTitle: string): void => {
    setActiveItem(itemTitle);
    if (onItemClick) {
      onItemClick(itemTitle);
    }
  };

  return (
    <aside
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 fixed md:static h-full z-30`}
    >
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
            B
          </div>
          {!isCollapsed && (
            <span className="font-bold text-xl text-gray-900">Bursted</span>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-6 overflow-y-auto">
        {menuSections.map((section: MenuSection, sectionIndex: number) => (
          <div key={section.header} className={sectionIndex > 0 ? "mt-8" : ""}>
            {!isCollapsed && (
              <h3 className="px-6 mb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {section.header}
              </h3>
            )}

            <ul className="space-y-1 px-3">
              {section.items.map((item: MenuItem) => {
                const isActive: boolean = activeItem === item.title;

                return (
                  <li key={item.title}>
                    <a
                      href="#"
                      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        e.preventDefault();
                        handleItemClick(item.title);
                      }}
                      className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      } ${isCollapsed ? "justify-center" : ""}`}
                      title={isCollapsed ? item.title : ""}
                    >
                      <img
                        src={item.icon}
                        alt={`${item.title} icon`}
                        className={`h-5 w-5 flex-shrink-0 ${
                          isActive ? "opacity-100" : "opacity-60"
                        }`}
                      />
                      {!isCollapsed && <span>{item.title}</span>}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
