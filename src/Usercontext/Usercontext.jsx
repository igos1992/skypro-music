import { useContext } from "react";
import { createContext } from "react";

export const UserContext = createContext({
  userData: '',
  changingUserData: () => {},
  changingUserInformation: () => { }
})


export const useUserLoginLogout = () => {
  const userData = useContext(UserContext);
  if (!userData) {
    return
  }
  console.log(userData);
  return userData

}



