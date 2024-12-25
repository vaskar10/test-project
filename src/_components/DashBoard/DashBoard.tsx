import { Button } from "@/components/ui/button";
import { ChevronDown, CircleUserRound, Ellipsis } from "lucide-react";
import DashTable from "./DashTable";
import TopPart from "./TopPart";

const DashBoard = () => {
  return (
    <>
      <div className="p-2 md:p-4 bg-white mx-1 mt-1">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex gap-2 items-center">
              <CircleUserRound className="text-[#475467] w-5 h-5" />
              <p className="text-base font-medium">Clients</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Button className="" variant={"outline"}>
              Branch(Kathmandu) <ChevronDown />
            </Button>
            <Ellipsis size={20} className="text-slate-900" />
          </div>
        </div>
      </div>
      <TopPart/>
      <DashTable />
    </>
  );
};

export default DashBoard;
