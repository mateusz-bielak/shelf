import React, { Suspense } from "react";
import { fetchItems } from "../lib/data";
import { ShelfTable } from "./ShelfTable";

export async function Shelf() {
  const data = await fetchItems();
  return <ShelfTable rows={data} />;
}
