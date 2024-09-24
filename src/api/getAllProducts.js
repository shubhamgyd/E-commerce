import axios from "axios";
const BaseURL = "https://api.escuelajs.co/api/v1";
export const getAllProducts = async () => {
  let url = `${BaseURL}/products`;
  try {
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
