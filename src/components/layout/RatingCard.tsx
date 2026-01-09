export default function RatingCard() {
  return (
    <div className="bg-white p-6 md:border-r border-gray-200">
      <h3 className="text-md font-medium text-gray-900 mb-2">Your Rating</h3>
      <p className="text-sm text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur
      </p>

      {/* Custom Pie Chart with Overlapping Circles */}
      <div className="relative w-full h-64 flex items-center justify-center text-white">
        <div className="bg-transparent rounded-full p-1 border-[#6463D6] border-r-2 border-b-2 relative left-35 z-10 ">
          <div className="bg-[#6463D6] rounded-full w-28 h-28 md:w-38 md:h-38 flex items-center opacity-90  flex-col justify-center ">
            <h6 className="text-[20px]">85%</h6>
            <p className="text-[12px]">Hygiene</p>
          </div>
        </div>
        <div className="bg-transparent rounded-full p-1 border-[#2FBFDE] border-r-2 border-b-2 relative top-45 right-22">
          <div className="bg-[#2FBFDE] rounded-full w-36 h-36 md:w-46 md:h-46 flex items-center opacity-90  flex-col justify-center ">
            <h6 className="text-[24px]">92%</h6>
            <p className="text-[12px]">Packaging</p>
          </div>
        </div>
        <div className="bg-transparent rounded-full p-1 border-[#F99C30] border-r-2 border-b-2 relative right-25 top-20">
          <div className="bg-[#F99C30] rounded-full w-42 h-42 md:w-52 md:h-52 flex items-center opacity-90 flex-col justify-center ">
            <h6 className="text-[33px]">85%</h6>
            <p className="text-[12px]">Food Taste</p>
          </div>
        </div>
      </div>
    </div>
  );
}
