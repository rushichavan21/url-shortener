import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./rootTree"
import LoginPage from "../pages/Login/LoginPage"
import SignupPage from "../pages/signup/SignupPage"

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth/login',
  component: LoginPage
})

export const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth/signup',
  component:SignupPage
})
