import React, { useState } from "react";
import Plus from "../icons/Plus";
import Minus from "../icons/Minus";
import FormValores from "../components/FormValores";
import { serviceCalcularX } from "../services/calcularX";

function Valor() {
  const [listaDeValores, setListaDeValores] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [ingreso, setIngreso] = useState(null);
  const [response, setResponse] = useState(null);
  const handleCalcular = async() => {
    setResponse(await serviceCalcularX(listaDeValores));
  };
  return (
    <>
      {listaDeValores.map((valor) => (
        <div
          className={`flex flex-row p-2 m-1 items-center w-full justify-between ${
            valor.tipo === "ingreso"
              ? "bg-green-950"
              : valor.tipo === "egreso"
              ? "bg-red-950"
              : ""
          }`}
        >
          <p>{valor.valorFP} =</p>
          <p>{valor.cantidadValor}</p>
          <p>{valor.tasaEfectiva}</p>
          <p>{valor.periodo}</p>
          <p>{valor.result}</p>
        </div>
      ))}
      <div className="flex flex-col mt-3 items-center">
        {mostrarFormulario && (
          <FormValores
            setListaDeValores={setListaDeValores}
            listaDeValores={listaDeValores}
            setMostrarFormulario={setMostrarFormulario}
            tipo={ingreso}
          />
        )}
        <div className="flex gap-2 m-2">
          <button
            onClick={() => {
              setMostrarFormulario(true);
              setIngreso("ingreso");
            }}
          >
            <Plus />
          </button>
          <button
            onClick={() => {
              setMostrarFormulario(true);
              setIngreso("egreso");
            }}
          >
            <Minus />
          </button>
        </div>
        <button
          className="bg-purple-950 hover:bg-purple-800 hover:scale-110 text-yellow-300 rounded-2xl text-xl p-3
        m-3"
          onClick={handleCalcular}
        >
          Calcular X
        </button>
      </div>
      {response && (
        <div className="flex flex-col mt-3 items-center">
          <p className="text-2xl">X = {response}</p>
        </div>
      )}
    </>
  );
}

export default Valor;
