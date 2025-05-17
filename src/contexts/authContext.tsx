import {
  createContext,
  useState,
  useContext,
  type ReactNode,
  useEffect,
} from "react";

import { UserContext } from "./userContext";

import type { userInterface } from "@/types/interfaces/userInterfaces";
import Api from "@/config/Api";

interface AuthContextItems {
  login: (user: userInterface, token: string) => void;
  token: string;
}

const DEFAULT_VALUES: AuthContextItems = {
  login: () => {},
  token: "",
};

const AuthContext = createContext<AuthContextItems>(DEFAULT_VALUES);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const STORED_TOKEN = localStorage.getItem("token");
  const { setUser } = useContext(UserContext);
  const [token, setToken] = useState<string>(STORED_TOKEN ? STORED_TOKEN : "");

  useEffect(() => {
    token && localStorage.setItem("token", token);
  }, [token]);

  async function login(user: userInterface, token: string) {
    setUser(user);
    setToken(token);
    localStorage.setItem("token", token);
    Api.interceptors.request.use((config) => {
      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    });
  }

  return (
    <AuthContext.Provider value={{ token, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
