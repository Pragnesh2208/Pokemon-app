import { UserInfo } from "../models/UserInfo.model";

export const storeUserDetails = (userInfo: UserInfo) => {
  const currentUser = JSON.stringify(userInfo);
  const listOfUsers = localStorage.getItem("pokemonLogin");
  let users: string = listOfUsers ? listOfUsers : "";
  users += " " + currentUser;
  localStorage.setItem("pokemonLogin", users);
};

export const verifyUserDetails = (userInfo: UserInfo): boolean => {
  const currentUser = JSON.stringify(userInfo);
  const listOfUsers = localStorage.getItem("pokemonLogin")?.split(" ");
  if (listOfUsers)
    for (const user of listOfUsers) {
      if (user === currentUser) {
        localStorage.setItem("pokemonToken", "true");
        return true;
      }
    }
  return false;
};

export const getToken = (): boolean => {
  return localStorage.getItem("pokemonLogin") ? true : false;
};

export const removeToken = () => {
  localStorage.removeItem("pokemonLogin");
};
