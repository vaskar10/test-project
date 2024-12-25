import { BadgeCheck, BookCheck, Ellipsis, HousePlug, LayoutDashboard, SaveAll, TextQuote, Users } from "lucide-react";
import { useLocation } from "react-router-dom";

const SideBarItem = () => {
  const location = useLocation();
  const menuItems = [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Office Check-in",
      url: "/office-check-in",
      icon: HousePlug,
    },
    {
      title: "Enquiries",
      url: "/enquiries",
      icon: SaveAll,
    },
    {
      title: "Clients",
      url: "/clients",
      icon: Users,
    },
    {
      title: "Services",
      url: "/services",
      icon: BadgeCheck,
    },
    {
      title: "Quotation",
      url: "/quotation",
      icon: TextQuote,
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: BookCheck,
    },
  ];

  return (
    <div className="mt-4">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`flex justify-between items-center p-3 rounded-md cursor-pointer ${
            location.pathname === item.url
              ? "bg-[#EBEBF8] text-slate-900 text-sm"
              : "hover:bg-gray-100 text-slate-900"
          }`}
        >
          <div className="flex items-center space-x-3">
            <item.icon
              className={`h-5 w-5 ${
                location.pathname === item.url ? "text-slate-900" : "text-slate-900"
              }`}
            />
            <a href={item.url} className="w-full text-sm text-slate-900 font-medium">
              {item.title}
            </a>
          </div>
          <div>
            <Ellipsis size={20} className="text-slate-900" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBarItem;
