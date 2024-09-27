import axios from "axios";
const BaseURL = "https://api.escuelajs.co/api/v1";
export const getAllProducts = async (params) => {
  let url = BaseURL + params;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    console.log(err);
  }
};
