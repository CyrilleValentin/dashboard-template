
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
import { DataTable, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  CarIcon,
  EllipsisVertical,
  ListFilter,
  Search,
  StickyNote,
  Truck,
  UserRound,
} from "lucide-react";
import { ColumnDef } from "@tanstack/react-table"
export type Orders = {
  customer: string
  type: string
  status: "declined" | "fulfilled" 
  date: string
  amount: string
}

export const columns: ColumnDef<Orders>[] = [
  {
    accessorKey: "customer",
    header: "Custumers",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "status",
    header: "Statut",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]

async function getData(): Promise<Orders[]> {
  // Fetch data from your API here.
  return [
    {
      customer: "Liam Johnson",
      type: "Sale",
      status: "declined",
      date: "2024-06-02",
      amount: "$100.00",
    },
    {
      customer: "John Doe",
      type: "Refund",
      status: "fulfilled",
      date: "2024-02-21",
      amount: "$150.00",
    },
    {
      customer: "John Doe",
      type: "Refund",
      status: "fulfilled",
      date: "2024-02-21",
      amount: "$150.00",
    },
    {
      customer: "John Doe",
      type: "Refund",
      status: "fulfilled",
      date: "2024-02-21",
      amount: "$150.00",
    },
    {
      customer: "John Doe",
      type: "Refund",
      status: "fulfilled",
      date: "2024-02-21",
      amount: "$150.00",
    },
    {
      customer: "John Doe",
      type: "Refund",
      status: "fulfilled",
      date: "2024-02-21",
      amount: "$150.00",
    },
    {
      customer: "John Doe",
      type: "Refund",
      status: "fulfilled",
      date: "2024-02-21",
      amount: "$150.00",
    },
    {
      customer: "John Doe",
      type: "Refund",
      status: "fulfilled",
      date: "2024-02-21",
      amount: "$150.00",
    },
    {
      customer: "John Doe",
      type: "Refund",
      status: "fulfilled",
      date: "2024-02-21",
      amount: "$150.00",
    },
     {
      customer: "John Doe",
      type: "Refund",
      status: "fulfilled",
      date: "2024-02-21",
      amount: "$150.00",
    },
  ]
}
export default async function Home() {
  const data = await getData()
  return (
    <section className="w-full h-full px-4 bg-slate-50 overflow-y-auto">
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
        <div className="w-[66%] h-full flex gap-2 flex-col px-4">
          <div className="flex flex-row gap-4">
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
          <div className="h-10 w-full flex flex-row justify-between items-center">
            <div className="bg-gray-100 w-[12rem] flex flex-row justify-between items-center text-sm px-1 rounded-md h-8">
              <Card className="rounded-sm w-[3.5rem] text-center font-bold">
                Week
              </Card>
              <span>Month</span>
              <span>Year</span>
            </div>
            <div className=" w-[12rem] gap-1 flex flex-row h-8">
              <Card className="rounded-sm w-[8rem]  text-sm flex flex-row gap-1 items-center justify-center font-bold ">
                <ListFilter />
                Filter
              </Card>
              <Card className="rounded-sm w-[8rem]  text-sm flex flex-row gap-1 justify-center items-center font-bold ">
                <StickyNote />
                Explore
              </Card>
            </div>
          </div>
          <Card>
          <DataTable columns={columns} data={data} />
          </Card>
          
        
        </div>
        <div className="w-[34%]  h-full">
          <Card className="w-full h-full flex flex-col ">
            <CardHeader className="bg-slate-50">
              <CardTitle className="   h-10 flex justify-between px-2 items-center">
                <div>
                  <h2>Order ID:Oe31b70H</h2>
                  <span className="text-gray-400 text-[12.5px]">
                    Date: November 23,2023
                  </span>
                </div>
                <div className="flex flex-row gap-2">
                  <Card className="shadow-sm flex flex-row items-center rounded-sm px-2 gap-2 text-[12px] ">
                    <Truck />
                    <span>Track Order</span>
                  </Card>
                  <Card className="shadow-sm rounded-sm text-[12px]">
                    <EllipsisVertical />
                  </Card>
                </div>
              </CardTitle>
            </CardHeader>

            <div className=" w-full h-[10rem]  ">
              <CardTitle className="pt-4 px-4 ">
                <div className="flex bg-blue-40 w-full flex-col gap-3 text-[12.5px]">
                  <h2 className=" text-[12.5px]">Order Details</h2>
                  <div className="flex flex-row justify-between ">
                    <span className="text-gray-400 text-[12.5px]">
                      Glimmer Lamps x 2
                    </span>
                    <span>$250.00</span>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <span className="text-gray-400 text-[12.5px]">
                      Aqua Filters x 1
                    </span>
                    <span>$49.00</span>
                  </div>
                  <hr className="shadow-sm border-[1.2px]" />
                  <div className="flex flex-row justify-between ">
                    <span className="text-gray-400 text-[12.5px]">
                      SubTotals
                    </span>
                    <span>$249.00</span>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <span className="text-gray-400 text-[12.5px]">
                      Shipping
                    </span>
                    <span>$5.00</span>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <span className="text-gray-400 text-[12.5px]">Taxs</span>
                    <span>$25.00</span>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <span className="text-gray-400 text-[12.5px]">Total</span>
                    <span className="font-extrabold">$329.00</span>
                  </div>
                  <hr className="shadow-sm border-[1.2px]" />
                  <div className="flex flex-row justify-between ">
                    <span className=" text-[12.5px]">Shipping information</span>
                    <span className="font-extrabold pr-12">
                      Billing Information
                    </span>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <span className="text-gray-400 text-[12.5px]">
                      Liam Johnson
                    </span>
                    <span className="text-gray-400 pr-4">
                      Same as shipping address
                    </span>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <span className="text-gray-400 text-[12.5px]">
                      1234 Main St.
                    </span>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <span className="text-gray-400 text-[12.5px]">
                      Anytown, CA 12345
                    </span>
                  </div>
                  <hr className="shadow-sm border-[1.2px]" />
                  <div className="flex flex-row justify-between ">
                    <span className=" text-[12.5px]">Custumer Information</span>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <span className="text-gray-400 text-[12.5px]">
                      Custumer
                    </span>
                    <span className="text-gray-400 pr-4"> Liam Johnson</span>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <span className="text-gray-400 text-[12.5px]">Email</span>
                    <span className="text-gray-400 pr-4"> liam@acme.com</span>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <span className="text-gray-400 text-[12.5px]">Phone</span>
                    <span className="text-gray-400 pr-4"> +1 234 567 890</span>
                  </div>
                  <hr className="shadow-sm border-[1.2px]" />
                </div>
              </CardTitle>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
