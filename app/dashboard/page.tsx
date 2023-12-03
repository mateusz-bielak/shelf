import { Metadata } from "next";
import { Suspense } from "react";
import { NavigationBar } from "../ui/NavigationBar";
import { Shelf } from "../ui/Shelf";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <>
      <NavigationBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Shelf />
      </Suspense>
    </>
  );
}
