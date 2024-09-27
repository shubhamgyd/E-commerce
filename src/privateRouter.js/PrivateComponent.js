import { Navigate } from "react-router-dom"
import { useLogin } from "../context/loginContext";

export const PrivateComponent = ({children}) => {
  // islogin
  const {isLoggedIn} = useLogin();
  console.log(isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/auth/login"/>;

}