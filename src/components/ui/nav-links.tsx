"use client"
import clsx from 'clsx';
import { Home, LineChart, Package, Package2, ShoppingCart, UsersRound } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const links = [
    { name:"Pack", href: '/dashboard', icon:Package2  },
    { name:"Home", href: '#', icon:Home  },
    {
      name:"Cart",
      href: '/dashboard/cart',
      icon: ShoppingCart,
    },
    { name:"Package", href: '/dashboard/package', icon: Package },
    { name:"Users", href: '/dashboard/Users', icon: UsersRound },
    { name:"Chart", href: '/dashboard/chart', icon: LineChart },
  ];

  export default function Navlinks(){
    const pathname = usePathname();
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[40px] w-[40px] grow items-center justify-center gap-2 rounded-full bg-gray-100 p-3 text-gray-400 text-sm font-medium hover:bg-black hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-black text-white': pathname === link.href,
                },
              )}
            >
              <LinkIcon className="w-6" />
              {/* <p className="hidden md:block">{link.name}</p> */}
            </Link>
          );
        })}
      </>
    );
  }