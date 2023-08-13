import React from "react";

function ListaDespegable({ opciones, selectedOption, setSelectedOption }) {
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Actualiza el estado cuando se selecciona una opción
  };
  return (
    <div>
      <select value={selectedOption} onChange={handleSelectChange} className="bg-slate-700 p-2 my-2">
        <option value="">Selecciona una opción...</option>
        {Object.keys(opciones).map((opcion) => (
          <option key={opcion} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ListaDespegable;
