"use server";

import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { z } from "zod";

const UserSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  id: z.string(),
  name: z.string(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/\d+/g, { message: "Password must contain at least one number" })
    .regex(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/, {
      message: "Password must contain at least one symbol",
    })
    .regex(/[A-Z]+/g, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]+/g, {
      message: "Password must contain at least one lowercase letter",
    }),
  role: z.enum(["ADMIN", "USER"], {
    invalid_type_error: "Please select a role.",
  }),
});

const CreateUser = UserSchema.omit({ id: true, role: true });

export type CreateUserState = {
  errors?: {
    email?: string[];
    name?: string[];
    password?: string[];
  };
  message?: null | string;
};

export async function createUser(
  prevState: CreateUserState,
  formData: FormData,
): Promise<CreateUserState> {
  const validatedFields = CreateUser.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create User.",
    };
  }

  const { email, name, password } = validatedFields.data;

  try {
    await sql`
        INSERT INTO users (email, name, password)
        VALUES (${email}, ${name}, ${password})
      `;
  } catch (error) {
    console.log(error);
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }

  return {};
}
