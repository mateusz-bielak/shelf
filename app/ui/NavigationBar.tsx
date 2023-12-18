"use client";

import { UserButton } from "@clerk/nextjs";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export function NavigationBar() {
  const pathname = usePathname();

  return (
    <Navbar className="bg-primary-900 text-default-50">
      <NavbarBrand>
        <p className="font-bold uppercase">Shelf 200</p>
      </NavbarBrand>
      <NavbarContent className="flex" justify="center">
        <NavbarItem
          className="data-[active=true]:text-primary"
          isActive={pathname === "/dashboard"}
        >
          <Link className="text-inherit" href="/dashboard">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem
          className="data-[active=true]:text-primary"
          isActive={pathname === "/dashboard/organization"}
        >
          <Link className="text-inherit" href="/dashboard/organization">
            Organization
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <UserButton afterSignOutUrl="/" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
