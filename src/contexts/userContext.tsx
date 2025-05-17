import {
  useState,
  createContext,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
  useEffect,
} from "react";
import { type userInterface } from "@/types/interfaces/userInterfaces";

interface userContextItems {
  user: userInterface | null;
  setUser: Dispatch<SetStateAction<userInterface | null>>;
}

const DEFAULT_VALUES: userContextItems = {
  setUser: () => {},
  user: null,
};

const UserContext = createContext<userContextItems>(DEFAULT_VALUES);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const STORED_USER = localStorage.getItem("user");
  const [user, setUser] = useState<userInterface | null>(
    STORED_USER ? JSON.parse(STORED_USER) : null
  );

  useEffect(() => {
    user ? localStorage.setItem("user", JSON.stringify(user)) : localStorage.removeItem("user")
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
