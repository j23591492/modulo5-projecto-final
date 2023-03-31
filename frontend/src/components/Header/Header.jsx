import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="logo-container">
          <Logo />
        </div>
        <ul className="lista">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/clientes"}>Clientes</Link></li>
          <li><Link to={"/acessorios"}>Produtos</Link></li>
          <li><Link to={"/contato"}>Contato</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
