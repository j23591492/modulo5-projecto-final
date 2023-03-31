import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getClientes } from "../../api/clientesApi";
import CardClientes from "../../components/CardClientes";
import "./Clientes.css";

const Clientes = () => {
const [Clientes, setClientes] = useState([]);
useEffect(() => {
async function handleRequisicao() {
const response = await getClientes();
setClientes(response);
}
handleRequisicao();
}, []);
return (
<div className="pageClientes">
<h1>Lista de Clientes</h1>
<div className="cardClientes">
{Clientes ? Clientes.map((item) => (
<CardClientes
         key={item.idclientes}
         nome={item.nome}
         email={item.email}
       />
))
: ""}
</div>
<div className="botaoClientes">
<Link to={"/clientes/cadastro"}>Cadastro</Link>
<Link to={"/clientes/deletar"}>Deletar</Link>
<Link to={"/clientes/atualizar"}>Atualizar</Link>
</div>
</div>
);

};

export default Clientes;





