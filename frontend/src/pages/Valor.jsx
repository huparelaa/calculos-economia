import React, { useState } from "react";
import Plus from "../icons/Plus";
import Minus from "../icons/Minus";
import FormValores from "../components/FormValores";

function Valor() {
  const [listaDeValores, setListaDeValores] = useState([
    {
      valorFP: "Valor F/P",
      cantidadValor: "Valor",
      tasaEfectiva: "i",
      periodo: "n",
      result: "Resultado",
      tipo:null
    },
  ]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [ingreso, setIngreso] = useState(null);

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
          <p>{valor.valorFP}</p>
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
        <div className="flex gap-2">
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
      </div>
    </>
  );
}

export default Valor;
