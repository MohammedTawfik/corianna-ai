import { authMiddleware } from "@clerk/nextjs";

export const clerkMiddleware = authMiddleware({
  publicRoutes: ["/", "/auth(.*)", "/portal(.*)"],
  ignoredRoutes: ["/chatbot"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
