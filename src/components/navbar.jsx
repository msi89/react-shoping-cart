import React, { useContext } from "react";
import { Link } from "@reach/router";
import logo from "../assets/logo.svg";
import { BaseContext } from "../store/context";

const Navbar = () => {
  const context = useContext(BaseContext);

  console.log("context", context);

  return (
    <header className="app-header">
      <Link className="app-brand" to="/">
        <img src={logo} className="app-logo" alt="logo" />
        <span>Watches</span>
      </Link>
      <ul className="app-nav">
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart({context.cart.length})</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
