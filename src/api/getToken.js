import axios from "axios"
import { useLogin } from "../context/loginContext";
const BaseURL = "https://api.escuelajs.co/api/v1";
export const getToken = async (params, email, password) => {
  let url = BaseURL + params
  try{
  const {data} = await axios.post(url, {
    email,
    password,
  })
  return data;
}
  catch (error) {
    console.log(error)
  }
}