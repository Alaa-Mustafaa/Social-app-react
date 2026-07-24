import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// Main Routes
const MainLayout = lazy(() => import("../layouts/Main/MainLayout"));
const Home = lazy(() => import("../pages/main/Home/Home"));
// End of Main Routes

// Auth Routes
const AuthLayout = lazy(() => import("../layouts/Auth/AuthLayout"));
const Signup = lazy(() => import("../pages/auth/Signup/Signup"));
const Login = lazy(() => import("../pages/auth/Login/Login"));
// End of Auth Routes

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
