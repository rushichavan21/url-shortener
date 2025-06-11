import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./rootTree"
import Landingpage from "../pages/landing/Landingpage"
import { redirect } from "@tanstack/react-router"
export const LandingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component:Landingpage,
  beforeLoad: () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        throw redirect({ to: '/dashboard' });
      }
    },
})