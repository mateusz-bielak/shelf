import { Metadata } from "next";
import { ITEMS_MOCK } from "../lib/mocks";
import { NavigationBar } from "../ui/NavigationBar";
import { Shelf } from "../ui/Shelf";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <>
      <NavigationBar />
      <Shelf rows={ITEMS_MOCK} />
    </>
  );
}
