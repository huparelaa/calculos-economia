import axios from "axios";
import { url } from "./config";
//post action
export const doSuma = async (a, b) => {
  const response = await axios.post(`${url}equivalencias/sum/`, {
    num1: a,
    num2: b,
  });
  return response.data.result;
};

export const getEquivalencias = async () => {
  const response = await axios.get(`${url}equivalencias/getEquivalencias/`);
  return response.data;
};

export const convertirEfectivaX_a_EfectivaY = async (valor, tasaX, tasaY) => {
  const response = await axios.post(
    `${url}equivalencias/efectivaX_a_efectivaY/`,
    {
      i1: valor,
      m1: tasaX,
      m2: tasaY,
    }
  );
  return response.data.result;
};

export const calcularValorFuturo = async (vp, i, n) => {
  const response = await axios.post(`${url}valorPyF/valorFuturo/`, {
    vp: parseFloat(vp),
    i: parseFloat(i),
    n: parseFloat(n),
  });
  return response.data.result;
};

export const calcularValorPresente = async (vf, i, n) => {
  const response = await axios.post(`${url}valorPyF/valorPresente/`, {
    vf: parseFloat(vf),
    i: parseFloat(i),
    n: parseFloat(n),
  });
  return response.data.result;
};

export const calcularX = async (info) => {
  const response = await axios.post(`${url}valorPyF/calcX/`, {
    info: info.info,
  });
  return response.data.result;
};
