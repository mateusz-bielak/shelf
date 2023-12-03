import { sql } from "@vercel/postgres";
import dotenv from "dotenv";
import { ITEMS_MOCK } from "../app/lib/mocks";
dotenv.config({ path: ".env.local" });

async function clearDatabase() {
  await sql`DROP TABLE IF EXISTS items`;
}

async function seedItems() {
  try {
    const createTable = await sql`
        CREATE TABLE IF NOT EXISTS items (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          archived BOOLEAN NOT NULL,
          name VARCHAR(255) NOT NULL,
          serial_number VARCHAR(255),
          status VARCHAR(255) NOT NULL,
          type VARCHAR(255) NOT NULL
        );
      `;

    const insertedItems = await Promise.all(
      ITEMS_MOCK.map(async item => {
        return sql`
            INSERT INTO items (archived, name, serial_number, status, type)
            VALUES (${item.archived}, ${item.name}, ${item.serialNumber}, ${item.status}, ${item.type});
            `;
      }),
    );

    return { createTable, items: insertedItems };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function main() {
  await clearDatabase();
  await seedItems();
}

main().catch(err => {
  console.error(
    "An error occurred while attempting to create & seed the database:",
    err,
  );
});
