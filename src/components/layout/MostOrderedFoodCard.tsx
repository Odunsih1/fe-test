import Image from "next/image";

interface FoodItem {
  id: string;
  name: string;
  price: string;
  image: string;
}

const foodItems: FoodItem[] = [
  {
    id: "1",
    name: "Fresh Salad Bowl",
    price: "IDR 45.000",
    image: "/images/fresh.png",
  },
  {
    id: "2",
    name: "Chicken Noodles",
    price: "IDR 75.000",
    image: "/images/chicken.png",
  },
  {
    id: "3",
    name: "Smoothie Fruits",
    price: "IDR 45.000",
    image: "/images/smoothie.png",
  },
  {
    id: "4",
    name: "Hot Chicken Wings",
    price: "IDR 45.000",
    image: "/images/hot.png",
  },
];

export default function MostOrderedFoodCard() {
  return (
    <div className="bg-white md:mt-0 mt-30 p-6  md:border-r border-gray-200 h-full overflow-hidden">
      <h3 className="text-sm font-medium text-gray-900 mb-2">
        Most Ordered Food
      </h3>
      <p className="text-xs text-gray-500 mb-6">
        Adipiscing elit, sed do eiusmod tempor
      </p>

      <div className="space-y-4">
        {foodItems.map((item: FoodItem) => (
          <div
            key={item.id}
            className="flex items-center gap-3 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
          >
            <div className="w-24 h-24 sm:w-16 sm:h-16  shrink-0 overflow-hidden  ">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {item.name}
              </p>
            </div>
            <p className="text-sm font-semibold text-gray-700 whitespace-nowrap">
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
