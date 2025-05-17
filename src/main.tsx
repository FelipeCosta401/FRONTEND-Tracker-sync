import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { AuthContextProvider } from "./contexts/authContext";
import { UserContextProvider } from "./contexts/userContext";

import { Toaster } from "./components/ui/sonner";
import routes from "./routes/routes";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <UserContextProvider>
    <AuthContextProvider>
      <RouterProvider router={routes} />
      <Toaster richColors />
    </AuthContextProvider>
  </UserContextProvider>
);
