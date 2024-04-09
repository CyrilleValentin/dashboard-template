import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress, ProgressDemo } from "@/components/ui/progress";
import SideBar from "@/components/ui/sideBar";
import { Search, UserRound } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-full px-4 ">
      <header className="w-full h-12  flex flex-row justify-between">
        <div className="flex justify-center items-center h-full text-sm ">
          <span>
            Dashboard {">"} Order {">"} Recents Orders
          </span>
        </div>
        <div className="flex justify-center h-full items-center px-4 gap-4">
          <Input placeholder="Search.." />

          <div className="w-11 h-9 bg-gray-100 rounded-full flex justify-center items-center shadow-md">
            <UserRound className="text-gray-400 cursor-pointer" />
          </div>
        </div>
      </header>
      <div className="w-full h-[30rem] flex flex-row">
        <div className="w-[66%] h-full flex gap-2">
          <Card className="w-[21rem] h-[8rem] text-sm">
            <CardHeader>
              <CardTitle>Yours Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Introducind our dynamics orders Dashboard for Seamless
                Management and Insighful Analysis
              </p>
            </CardContent>
            <CardContent>
              <Button>Create new Order</Button>
            </CardContent>
          </Card>

          <Card className="w-[12rem] h-[8rem] text-sm flex flex-col justify-center items-center">
            <CardHeader>
              <CardTitle className="text-gray-400">This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="font-bold text-xl">$1329</h1>
            </CardContent>
            <CardHeader>
              <CardTitle className="text-gray-400">
                +25% from last Week
              </CardTitle>
            </CardHeader>
            <ProgressDemo />
          </Card>

          <Card className="w-[12rem] h-[8rem] text-sm flex flex-col justify-center items-center">
            <CardHeader>
              <CardTitle className="text-gray-400">This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="font-bold text-xl">$5,329</h1>
            </CardContent>
            <CardHeader>
              <CardTitle className="text-gray-400">
                +10% from last Month
              </CardTitle>
            </CardHeader>
            <ProgressDemo />
          </Card>
        </div>
        <div className="w-[34%]  h-full">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle>Order ID:Oe31b70H</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
