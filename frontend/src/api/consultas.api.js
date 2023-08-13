import axios from "axios";
import { url } from "./config";
//post action
export const doSuma = async (a, b) => {
  const response = await axios.post(`${url}equivalencias/sum/`, {
    num1: a,
    num2: b,
  });
  console.log(response.data.result)
  return response.data.result;
};
