import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

const ORG_URL = "/dashboard/create/organization";

export default authMiddleware({
  afterAuth(auth, req) {
    // Handle authenticated users
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    // Redirect new users to create organization page
    if (auth.userId && !auth.orgId && req.nextUrl.pathname !== ORG_URL) {
      const orgSelection = new URL(ORG_URL, req.url);
      return NextResponse.redirect(orgSelection);
    }

    // Redirect logged in users to dashboard
    if (auth.userId && req.nextUrl.pathname === "/") {
      const dashboardUrl = new URL("/dashboard", req.url);
      return NextResponse.redirect(dashboardUrl);
    }

    return NextResponse.next();
  },
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
