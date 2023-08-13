import React, { useState, useEffect } from "react";
import {
  convertirEfectivaX_a_EfectivaY,
  getEquivalencias,
} from "../api/consultas.api";
import ListaDespegable from "../components/ListaDespegable";
import Arrow from "../icons/Arrow";

function Conversor() {
  const [opciones, setOpciones] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [valor, setValor] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  useEffect(() => {
    getEquivalencias().then((data) => {
      setOpciones(data);
    });
  }, []);

  if (!opciones) {
    return <p>Cargando...</p>;
  }
  const transformar = () => {
    convertirEfectivaX_a_EfectivaY(
      valor,
      opciones[selectedOption],
      opciones[selectedOption2]
    ).then((data) => {
      setResultado(data);
    });
  };
  return (
    <>
      <h2 className="text-3xl font-bold">Conversor tasa efectiva</h2>
      <p>Ingrese el numero entero (No ingrese 40%, sino 0.4)</p>
      <input
        type="number"
        value={valor}
        onChange={(event) => setValor(event.target.value)}
        className="bg-slate-700 p-2 my-2 text-white"
      />
      <div className="flex items-center">
        <ListaDespegable
          opciones={opciones}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <Arrow />
        <ListaDespegable
          opciones={opciones}
          selectedOption={selectedOption2}
          setSelectedOption={setSelectedOption2}
        />
      </div>
      <button
        onClick={transformar}
        className="bg-purple-800 p-4 rounded-2xl hover:bg-purple-900"
      >
        Transformar
      </button>
      {resultado && (
        <p className="text-4xl">
          Resultado:{" "}
          <span className="font-bold text-amber-600">{resultado}</span>
        </p>
      )}
    </>
  );
}

export default Conversor;
