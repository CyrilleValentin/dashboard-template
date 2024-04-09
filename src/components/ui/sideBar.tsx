import { Settings } from "lucide-react";
import { Button } from "./button";
import Navlinks from "./nav-links";

export default function SideBar() {
  return (
    <div className="w-16 h-screen flex flex-col justify-between py-2 border-gray-400 shadow-lg">
      <div className=" flex gap-3 flex-col justify-center items-center">
        <Navlinks />
      </div>
      <div className="flex justify-center">
        <Button variant="ghost">
        <Settings className="text-gray-400" />
        </Button>
      </div>
    </div>
  );
}
