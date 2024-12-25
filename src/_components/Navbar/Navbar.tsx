import { CgMenuGridO } from "react-icons/cg";
import { BsPlusCircleDotted } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="bg-white text-black h-[72px] flex items-center sticky top-0">
      <div className="px-8 flex items-center justify-between w-full">
        <div className="">
          <div className="flex gap-2 items-center">
            <CgMenuGridO className="text-[#475467] w-6 h-6" />
            <p className="text-xl font-medium">Test Project</p>
          </div>
        </div>
        <div>
          <div className="flex gap-6 items-center">
            <BsPlusCircleDotted className="text-[#475467] w-6 h-6 cursor-pointer hidden md:block " />
            <div className="relative hidden md:block">
              <FaRegBell className="text-[#475467] w-6 h-6 cursor-pointer" />
              <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                2
              </div>
            </div>

            <LuMessagesSquare className="text-[#475467] w-6 h-6 cursor-pointer hidden md:block" />
            <CiSettings className="text-[#475467] w-6 h-6 cursor-pointer hidden md:block" />
            <span className="w-[2px] h-8 bg-[#475467] hidden md:block"></span>
            <FaRegMoon className="text-[#475467] w-6 h-6 cursor-pointer hidden md:block" />

            <div className=" ">
              <div className="flex items-center gap-2 cursor-pointer ">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="w-12 h-12 rounded-full"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <RiArrowDropDownLine className="text-[#475467] w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
