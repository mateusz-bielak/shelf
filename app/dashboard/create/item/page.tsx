import { Metadata } from "next";
import { CreateItemForm } from "@/app/ui/CreateItemForm";

export const metadata: Metadata = {
  title: "Create Item",
};

export default function Page() {
  return <CreateItemForm />;
}
