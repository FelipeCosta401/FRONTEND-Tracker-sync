import { createBrowserRouter } from "react-router-dom";

// Routes
import AuthRoute from "./authRoutes";

// Pages
import LoginPage from "@/pages/login-pages/LoginPage";
import App from "@/App";
import HomePage from "@/pages/agent-pages/home-page/HomePage";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: (
      <AuthRoute>
        <App />
      </AuthRoute>
    ),
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default routes;
