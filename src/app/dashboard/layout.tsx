import SideBar from "@/components/ui/sideBar";
import { Suspense } from "react";
import Loading from "./loading";
import Home from "./page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en" className="w-full h-screen flex ">
      <SideBar />
      <div className=" w-full">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </div>
  );
}
