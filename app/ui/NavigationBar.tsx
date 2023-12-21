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
import { ReactNode } from "react";

export function NavigationBar() {
  return (
    <Navbar className="bg-primary-900 text-default-50">
      <NavbarBrand>
        <p className="font-bold uppercase">Shelf 200</p>
      </NavbarBrand>
      <NavbarContent className="flex" justify="center">
        <NavbarLinkItem href="/dashboard">Dashboard</NavbarLinkItem>
        <NavbarLinkItem href="/dashboard/organization">
          Organization
        </NavbarLinkItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarLinkItem href="/dashboard/create/item">Add Item</NavbarLinkItem>
        <NavbarItem>
          <UserButton afterSignOutUrl="/" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

type NavbarLinkItemProps = { children: ReactNode; href: string };

const NavbarLinkItem = ({ children, href }: NavbarLinkItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NavbarItem className="data-[active=true]:text-primary" isActive={isActive}>
      <Link className="text-inherit" href={href}>
        {children}
      </Link>
    </NavbarItem>
  );
};
