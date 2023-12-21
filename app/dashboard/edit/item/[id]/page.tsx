import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchItemById } from "@/app/lib/data";
import { EditItemForm } from "@/app/ui/EditItemForm";

export const metadata: Metadata = {
  title: "Edit Item",
};

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const item = await fetchItemById(id);
  if (!item) notFound();

  return (
    <EditItemForm
      id={item.id}
      name={item.name}
      serialNumber={item.serialNumber}
      type={item.type}
    />
  );
}
