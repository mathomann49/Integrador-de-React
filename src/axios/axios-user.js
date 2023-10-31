import axios from "axios";
import { BASE_URL } from "../redux/cart/Utils";

export const createUser = async (name, email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}auth/register`, {
        name,
        email,
        password,
      });
      return response.data;  
    } catch (error) {
        console.log(error);
        return alert(error.response.data.errors[0].msg);
    }
};
export const signInUser = async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}auth/login`, {
        email,
        password,
      });
      return response.data;  
    } catch (error) {
        console.log(error);
        return alert(error.response.data.msg);
    }
};

export const verifyUser = async (email, code) => {
  try {
    const response = await axios.patch(`${BASE_URL}auth/verify`, {
      email,
      code,
    });
    console.log('Usuario verificado');
    return response.data;
  } catch (error) {
    console.log(error);
    return alert(error.response.data.msg);
  }
};
