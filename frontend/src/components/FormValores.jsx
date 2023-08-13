import React, { useState } from "react";
import Check from "../icons/Check";

function FormValores({
  setListaDeValores,
  listaDeValores,
  setMostrarFormulario,
  tipo,
}) {
  const [valorFP, setValorFP] = useState("VF");
  const [cantidadValor, setCantidadValor] = useState(0);
  const [tasaEfectiva, setTasaEfectiva] = useState(0);
  const [periodo, setPeriodo] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    setListaDeValores([
      ...listaDeValores,
      {
        valorFP,
        cantidadValor,
        tasaEfectiva,
        periodo,
        tipo,
      },
    ]);
    setMostrarFormulario(false);
  };

  return (
    <div className="flex flex-row bg-slate-800 p-2 items-center w-full justify-between">
      <select
        className="mr-2 p-2"
        onChange={(event) => setValorFP(event.target.value)}
      >
        <option value="VF">VF</option>
        <option value="VP">VP</option>
      </select>
      <input
        type="number"
        placeholder={valorFP === "VF" ? "Valor presente" : "Valor futuro"}
        onChange={(e) => setCantidadValor(e.target.value)}
        className="mr-2"
      />
      <input
        type="number"
        placeholder="Tasa efectiva (i)"
        className="mr-2"
        onChange={(e) => setTasaEfectiva(e.target.value)}
      />
      <input
        type="number"
        placeholder="n"
        className="mr-2"
        onChange={(e) => setPeriodo(e.target.value)}
      />
      <button className="w-6 h-6" onClick={handleSubmit}>
        <Check />
      </button>
    </div>
  );
}

export default FormValores;
