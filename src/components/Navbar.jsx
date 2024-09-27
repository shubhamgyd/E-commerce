import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/loginContext";
export const Navbar = () => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const {isLoggedIn, dispatchLogin} = useLogin();
  const handleLogIn_LogOut = () => {
    if(!isLoggedIn)
      { navigate("/auth/login")} 
    else {
      dispatchLogin({
        type: "LOGOUT",
        payload: {value: false}
      })
    }
  }
  return (
    <div>
      <header className="flex flex-column justify-between bg-orange-600 px-12 py-2 text-5xl fixed w-full z-20">
          <div onClick={() => navigate("/")} className="cursor-pointer">SHOP IT</div>
        <div className="flex gap-6 items-center">
            <span onClick={() => navigate("/wishlist")} className="material-icons-outlined cursor-pointer 3xl">
              favorite
            </span>
            <span onClick={() => navigate("/cart")} className="material-icons-outlined cursor-pointer">
              shopping_cart
            </span>
          <div className="relative">
            <span onClick={() => setStatus(!status)} className="material-icons-outlined cursor-pointer">
              account_circle
            </span>
          {status ? 
            <div className="bg-sky-500 hover:bg-sky-700 absolute text-2xl"><button onClick={handleLogIn_LogOut}>{isLoggedIn ? "Logout" : "Login"}</button></div> : ""}
          </div>
        </div>
      </header>
    </div>
  );
};
