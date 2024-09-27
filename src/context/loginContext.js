import {useContext, createContext, useReducer} from "react";
import { loginReducer } from "../reducer/loginReducer";

const loginContext = createContext();

const LoginProvider = ({children}) => {

  const initialState = {
    email: "",
    password: "",
    isLoggedIn: false
  };
  const [{ email, password, isLoggedIn }, dispatchLogin] = useReducer(
    loginReducer,
    initialState
  );

  return <loginContext.Provider value={{email, password,  isLoggedIn, dispatchLogin}}>
    {children}
  </loginContext.Provider>
}

const useLogin = () => useContext(loginContext);

export {LoginProvider, useLogin}