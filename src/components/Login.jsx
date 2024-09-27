import { useLogin } from "../context/loginContext";
import { getToken } from "../api/getToken";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const Login = () => {
  
  const {email, password, dispatchLogin} = useLogin();
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const token = await getToken("/auth/login", email, password);
    if (token) {
    dispatchLogin({
      type: "TOKEN",
      payload: {value: true}
    });
    localStorage.setItem('accessToken', JSON.stringify(token));
    navigate("/");
  } else {
    setShowMessage(!showMessage)
  }
  };

  const handleEmail = (e) => {
    dispatchLogin({
      type: "EMAIL",
      payload: { email: e.target.value },
    });
  };

  const handlePassword = (e) => {
    dispatchLogin({
      type: "PASSWORD",
      payload: { password: e.target.value },
    });
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="absolute mt-20 bg-slate-300 flex flex-col w-1/3 border border-gray-950 p-5 rounded-md"
      >
        <label for="email">Email*</label>
        <input type="email" onChange={handleEmail} className="m-2" id="email" />
        <lable for="password">Password*</lable>
        <input
          type="password"
          onChange={handlePassword}
          className="m-2"
          id="password"
        />
        <div>
          Use this 
          <p>username:
          "john@mail.com" and</p> <p>password: "changeme"</p>
        </div>
        <div className="flex justify-center">
          <button type="submit" className=" button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
            Login
          </button>
        </div>
      </form>
      {showMessage ? <div className="text-white bg-red-600">
        You have entered the wrong username or password
      </div> : ""}
    </>
  );
};
