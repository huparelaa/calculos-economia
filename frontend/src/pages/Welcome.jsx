import React, { useState } from "react";
import { doSuma } from "../api/consultas.api";
import { Link } from "react-router-dom";
function Welcome() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(null);

  const sumar = async () => {
    const res = await doSuma(num1, num2);
    setResultado(res);
  };
  return (
    <>
      <h1 className="text-5xl">Testing</h1>
      <p>
        Esta vista fue construida para que se vea si el SetUp del proyecto se
        realizó correctamente
      </p>
      <div>
        <label htmlFor="num1">Numero 1</label>
        <input
          value={num1}
          type="number"
          id="num1"
          onChange={(e) => setNum1(e.target.value)}
          className="m-3 border-black border-2 pl-2"
        />
      </div>
      <div>
        <label htmlFor="num2">Numero 2</label>
        <input
          value={num2}
          type="number"
          id="num2"
          onChange={(e) => setNum2(e.target.value)}
          className="m-3 border-black border-2 pl-2"
        />
      </div>

      <button onClick={sumar} className="bg-green-700 rounded-full p-3">
        Sumar
      </button>
      <h1 className="text-3xl">
        Resultado:{" "}
        <span className="font-bold text-amber-600">
          {resultado}
        </span>
      </h1>
      
    </>
  );
}

export default Welcome;
