import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./rootTree"
import DashboardPage from "../pages/dashboard/dashboardPage"
import { redirect } from "@tanstack/react-router"
import CustomPage from "../pages/customPage/CustomPage"
import RandomCode from "../pages/randomCode/RandomCode"
import ViewCreatedPage from "../pages/view_created/ViewCreatedPage"
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

export const customUrl = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard/custom_url',
  component: CustomPage,
  beforeLoad: () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      throw redirect({ to: '/' });
    }
  },
})

export const randomUrl = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard/random_url',
  component: RandomCode,
  beforeLoad: () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      throw redirect({ to: '/' });
    }
  },
})

export const viewCreated = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard/view_created',
  component: ViewCreatedPage,
  beforeLoad: () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      throw redirect({ to: '/' });
    }
  },
})