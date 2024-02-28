import React, { createContext, useState } from "react";
import { theme } from "./theme";

type UserContextProviderProps = {
  children: React.ReactNode;
};
type AuthUser = {
  name: string;
  email: string;
};
type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};
export const UserContext = createContext({} as UserContextType);
const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
