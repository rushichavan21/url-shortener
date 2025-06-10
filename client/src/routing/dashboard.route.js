import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./rootTree"
import DashboardPage from "../pages/dashboard/dashboardPage"

export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DashboardPage
})