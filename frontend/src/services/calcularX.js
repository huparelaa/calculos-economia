import { calcularX } from "../api/consultas.api";

export async function serviceCalcularX(listaDeValores) {
  const arrayListaValores = listaDeValores.map((valor) => {
    return {
      valorFp: valor.valorFP,
      cantidadValor: parseFloat(valor.cantidadValor),
      tasaEfectiva: parseFloat(valor.tasaEfectiva),
      periodos: parseFloat(valor.periodo),
      tipo: valor.tipo,
    };
  });
  const request = { info: arrayListaValores };
  console.log(request);
  const response = await calcularX(request);
  return response;
}
