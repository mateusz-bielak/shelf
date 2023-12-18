"use client";

import { ClerkProvider } from "@clerk/nextjs";
// eslint-disable-next-line no-restricted-imports
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <ClerkProvider>
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    </ClerkProvider>
  );
}
