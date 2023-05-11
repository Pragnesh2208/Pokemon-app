import { createContext, useState } from "react";
import { getToken } from "../APIs/Storage.api";
export type Dispatch = (pokemonToken: boolean) => void;
export const userInfoContext = createContext<
  | {
      state: boolean;
      disPatch: Dispatch;
    }
  | undefined
>(undefined);

type UserContextType = {
  children: React.ReactNode;
};

export function UserInfoContextProvider({ children }: UserContextType) {
  const [token, updateUserInfo] = useState(getToken());

  const updateToken = (newToken: boolean): void => {
    updateUserInfo(newToken);
  };
  const value = { state: token, disPatch: updateToken };
  return (
    <userInfoContext.Provider value={value}>
      {children}
    </userInfoContext.Provider>
  );
}
