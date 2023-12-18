import { CreateOrganization } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Organization",
};

export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <CreateOrganization afterCreateOrganizationUrl="/dashboard" />
    </div>
  );
}
