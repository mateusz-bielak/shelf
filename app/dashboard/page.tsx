import { Metadata } from "next";
import { NavigationBar } from "../ui/NavigationBar";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return <NavigationBar />;
}
