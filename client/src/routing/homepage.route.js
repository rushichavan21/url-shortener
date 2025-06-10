import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./rootTree"
import Landingpage from "../pages/landing/Landingpage"

export const LandingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component:Landingpage
})