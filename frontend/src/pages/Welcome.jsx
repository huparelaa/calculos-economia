import React, { useState } from "react";
import { doSuma } from "../api/consultas.api";

function Welcome() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [resultado, setResultado] = useState(null);

  const sumar = async () => {
    const res = await doSuma(num1, num2);
    setResultado(res);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 >Testing</h1>
      <p>
        Esta vista fue construida para que se vea si el SetUp del proyecto se
        realizó correctamente
      </p>
      <label htmlFor="num1">Numero 1</label>
      <input
        type="number"
        id="num1"
        onChange={(e) => setNum1(e.target.value)}
      />
      <label htmlFor="num2">Numero 2</label>
      <input
        type="number"
        id="num2"
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={sumar}>Sumar</button>
      <h1>Resultado: {resultado}</h1>
    </div>
  );
}

export default Welcome;
