"use server";

import { auth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const ItemLogSchema = z.object({
  editorId: z.string(),
  id: z.string(),
  status: z.enum(["ASSIGNED", "UNASSIGNED"]),
  timestamp: z.string(),
  userId: z.string(),
});

const ItemSchema = z.object({
  archived: z.boolean(),
  description: z.string().optional(),
  files: z.array(z.string()).optional(),
  id: z.string(),
  logs: z.array(ItemLogSchema),
  name: z.string().trim().min(1, "Please, provide an item name."),
  serialNumber: z.string().optional(),
  status: z.enum(["ASSIGNED", "UNASSIGNED"]),
  type: z.enum(["book", "laptop", "misc"], {
    errorMap: () => ({ message: "Please, select an item type." }),
  }),
  userId: z.string().optional(),
});

const CreateItem = ItemSchema.omit({
  archived: true,
  description: true,
  files: true,
  id: true,
  logs: true,
  status: true,
  userId: true,
});

type CreateItemState = {
  errors?: {
    name?: string[];
    serialNumber?: string[];
    type?: string[];
  };
  message?: null | string;
};

export async function createItem(
  prevState: CreateItemState,
  formData: FormData,
): Promise<CreateItemState> {
  console.log("run");
  const { orgId } = auth();

  const validatedFields = CreateItem.safeParse({
    name: formData.get("name"),
    serialNumber: formData.get("serialNumber"),
    type: formData.get("type"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Item.",
    };
  }

  const { name, serialNumber, type } = validatedFields.data;

  try {
    await sql`
        INSERT INTO items (archived, name, organization_id, serial_number, status, type)
        VALUES (false, ${name}, ${orgId}, ${serialNumber}, 'UNASSIGNED', ${type})
      `;
  } catch (error) {
    console.log(error);
    return {
      message: "Database Error: Failed to Create Item.",
    };
  }

  console.log("success");
  revalidatePath("/dashboard");
  redirect("/dashboard");
}
