import { OrganizationProfile } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <OrganizationProfile />
    </div>
  );
}
