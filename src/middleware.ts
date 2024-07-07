import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/auth(.*)",
  "/portal(.*)",
  "/chatbot",
]);

export default clerkMiddleware(
  (auth, req) => {
    console.log("middleware", req.url);
    console.log("isPublicRoute", isPublicRoute(req));
    if (!isPublicRoute(req)) auth().protect();
  },
  { debug: true }
);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
