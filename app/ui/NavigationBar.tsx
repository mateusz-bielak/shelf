import { UserButton } from "@clerk/nextjs";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";

export function NavigationBar() {
  return (
    <Navbar className="bg-primary-900 text-default-50">
      <NavbarBrand>
        <p className="font-bold uppercase">Shelf 200</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <UserButton afterSignOutUrl="/" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
