import { createRootRoute } from "@tanstack/react-router";
import App from "../App";
import { LandingRoute } from "./homepage.route";
import { dashboardRoute } from "./dashboard.route";
import { loginRoute,signupRoute } from "./auth.routes";
 export const rootRoute=createRootRoute({
    component:App
})

export const routeTree = rootRoute.addChildren([LandingRoute,dashboardRoute,loginRoute,signupRoute])