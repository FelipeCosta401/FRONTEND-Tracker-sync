import { type ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "@/contexts/authContext";

const AuthRoute = ({ children }: { children: ReactNode }) => {
  const { token } = useContext(AuthContext);

  return token ? children : <Navigate to={"/login"} />;
};

export default AuthRoute;
