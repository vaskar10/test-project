import { Button } from "@/components/ui/button";
import {
  ArrowUpDown,
  CalendarDays,
  Check,
  ChevronDown,
  Download,
  Filter,
} from "lucide-react";
import { FaSearch } from "react-icons/fa";

const TopPart = () => {
  return (
    <div className="p-0 lg:p-4 bg-white mx-1 mt-1">
      <div className="lg:flex justify-between items-center hidden">
        <div className="flex gap-4 items-center">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search Particular"
              className="pl-8 pr-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button className="text-sm font-medium" variant={"outline"}>
            <Filter /> Filter by assigned <ChevronDown />
          </Button>
          <Button className="text-sm font-medium" variant={"outline"}>
            <CalendarDays /> Date <ChevronDown />
          </Button>
          <Button className="text-sm font-medium" variant={"outline"}>
            <Check /> Status <ChevronDown />
          </Button>
        </div>
        <div className="flex gap-3 items-center text-gray-700">
          <div className="flex items-center space-x-1 p-2 ">
            <Filter size={15} />
            <span className="text-sm font-medium">Filter</span>
          </div>

          <span className="w-[2px] h-6 bg-[#475467] hidden md:block"></span>

          <div className="flex items-center space-x-1 p-2">
            <ArrowUpDown size={15} />
            <span className="text-sm font-medium">Sort</span>
          </div>

          <span className="w-[2px] h-6 bg-[#475467] hidden md:block"></span>

          <div className="flex items-center space-x-1  p-2 rounded-lg ">
            <Download size={15} />
            <span className="text-sm font-medium">Saved Filter</span>
          </div>

          <span className="text-blue-500 font-medium cursor-pointer hover:text-blue-700 transition duration-300">
            Clear
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopPart;
