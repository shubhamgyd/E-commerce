import { useLogin } from "../context/loginContext";
import { getToken } from "../api/getToken";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  
  const {email, password, dispatchLogin} = useLogin();
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
        className="absolute mt-20 bg-slate-300 flex flex-col border border-gray-950 p-2"
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
        <div className="flex justify-center">
          <button type="submit" className=" button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
            Login
          </button>
        </div>
      </form>
    </>
  );
};
