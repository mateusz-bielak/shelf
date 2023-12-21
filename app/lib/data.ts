import { auth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Item } from "./types";

export async function fetchItems() {
  noStore();
  const { orgId } = auth();

  try {
    // SQL query to select all items from the database but only items which contain the organization_id equal to "12344abcdef"
    const data =
      await sql<Item>`SELECT * FROM items WHERE organization_id = ${orgId}`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch items data.");
  }
}

export async function fetchItemById(id: string) {
  noStore();
  try {
    const data = await sql<Item>`SELECT * FROM items WHERE id = ${id}`;

    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
  }
}
