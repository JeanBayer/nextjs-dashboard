"use client";

import Link from "next/link";
import AcmeLogo from "@/app/ui/acme-logo";
import { UserCircleIcon, CpuChipIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { name: "login", href: "/login", icon: UserCircleIcon },
  {
    name: "signin",
    href: "/signin",
    icon: CpuChipIcon,
  },
];

export default function TopBar() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-800 w-full">
      <AcmeLogo />
      <nav className="space-x-4 flex">
        <>
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                  {
                    "bg-sky-100 text-blue-600": pathname === link.href,
                  }
                )}
              >
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
              </Link>
            );
          })}
        </>
      </nav>
    </div>
  );
}
