import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="text-yellow-400 text-2xl bg-fuchsia-950 ">
      <ul className="flex flex-row justify-around">
        <li className="list-none hover:text-yellow-600">
          <Link to="/">Test</Link>
        </li>
        <li className="list-none hover:text-yellow-600">
          <Link to="/conversor">T. Efectiva</Link>
        </li>
        <li className="list-none hover:text-yellow-600">
          <Link to="/valor">VP y VF</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
