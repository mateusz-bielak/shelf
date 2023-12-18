import { Metadata } from "next";
import { Suspense } from "react";
import { Shelf } from "../ui/Shelf";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Shelf />
      </Suspense>
    </>
  );
}
