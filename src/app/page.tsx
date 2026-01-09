"use client";
import DashboardLayout from "@/components/layout/Dashboard-layout";
import RevenueCard from "@/components/layout/RevenueCard";
import OrderTimeCard from "@/components/layout/OrderTimeCard";
import RatingCard from "@/components/layout/RatingCard";
import MostOrderedFoodCard from "@/components/layout/MostOrderedFoodCard";
import OrderCard from "@/components/layout/OrderCard";

interface DashboardPageProps {
  className?: string;
}

export default function DashboardPage({ className = "" }: DashboardPageProps) {
  return (
    <DashboardLayout>
      <div className={`space-y-0 ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="lg:col-span-2">
            <RevenueCard />
          </div>

          <div className="lg:col-span-1">
            <OrderTimeCard />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div>
            <RatingCard />
          </div>

          <div>
            <MostOrderedFoodCard />
          </div>

          <div>
            <OrderCard />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
