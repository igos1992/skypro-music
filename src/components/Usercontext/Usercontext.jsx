import { useContext } from "react";
import { createContext } from "react";

export const UserContext = createContext({
  userData: '',
  changingUserInformation: () => { }
})


export const useUserLoginLogout = () => {
  const userData = useContext(UserContext);
  if (!userData) {
    return null
  }
  console.log(userData);
  return userData

}



