import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
     <Button><Link href="/dashboard">Dashboard</Link></Button>
    </main>
      
  );
}
