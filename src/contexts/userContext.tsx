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
  user: userInterface;
  setUser: Dispatch<SetStateAction<userInterface>>;
}

const DEFAULT_USER_VALUES: userInterface = {
  id: 0,
  firstAccessAt: null,
  email: "",
  name: "",
  registeredAt: null,
  registryNumber: 0,
  role: "ADMIN",
};

const DEFAULT_VALUES: userContextItems = {
  setUser: () => {},
  user: DEFAULT_USER_VALUES,
};

const UserContext = createContext<userContextItems>(DEFAULT_VALUES);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const STORED_USER = localStorage.getItem("user");
  const [user, setUser] = useState<userInterface>(
    STORED_USER ? JSON.parse(STORED_USER) : DEFAULT_USER_VALUES
  );

  useEffect(() => {
    user && localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
