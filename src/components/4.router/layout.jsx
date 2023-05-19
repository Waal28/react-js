import React from "react";
import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/luas-lingkaran">Luas Lingkaran</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/nilai">Nilai</Link>
        </li>
        <li>
          <Link to="/countertwonumber">Counter Two Number</Link>
        </li>
        <li>
          <Link to="/counterprovider">Counter Providerr</Link>
        </li>
        <li>
          <Link to="/formtext">Form Text</Link>
        </li>
      </ul>
      {props.children}
    </div>
  );
};

export default Layout;
