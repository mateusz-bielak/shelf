import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Item } from "./types";

export async function fetchItems() {
  noStore();
  try {
    const data = await sql<Item>`SELECT * FROM items`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch items data.");
  }
}
