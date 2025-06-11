import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./rootTree"
import DashboardPage from "../pages/dashboard/dashboardPage"
import { redirect } from "@tanstack/react-router"
export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DashboardPage,
  beforeLoad: () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      throw redirect({ to: '/' });
    }
  },
})