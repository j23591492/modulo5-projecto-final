import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAcessorios } from "../../api/acessoriosApi";
import CardAcessorios from "../../components/CardAcessorios";
import "./Acessorios.css";

const Acessorios = () => {
  const [acessorios, setAcessorios] = useState([]);
  useEffect(() => {
    async function handleRequisicao() {
      const response = await getAcessorios();
      setAcessorios(response);
    }
    handleRequisicao();
  }, []);
  return (
    <div className="pageAcessorios">
      <h1>Lista de Acessorios</h1>
      <div className="cardAcessorios">
        {acessorios ? acessorios.map((item) => (
              <CardAcessorios
                key={item.idacessorios}
                nome={item.nome}
                tipo={item.tipo}
                descricao={item.descricao}
                preco={item.preco}
                img= {item.img}
              />
            ))
          : ""}
      </div>
<div className="botaoAcessorios">
<Link to={"/acessorios/cadastro"}>Cadastro</Link>
<Link to={"/acessorios/deletar"}>Deletar</Link>
<Link to={"/acessorios/atualizar"}>Atualizar</Link>
</div>
</div>
  );
};

export default Acessorios;
