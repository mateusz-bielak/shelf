import { Metadata } from "next";
import { CreateItemForm } from "@/app/ui/CreateItemForm";

export const metadata: Metadata = {
  title: "Organization",
};

export default function Page() {
  return <CreateItemForm />;
}
