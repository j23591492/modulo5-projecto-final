import { Routes, Route } from "react-router-dom";
import Clientes from "../pages/Clientes/Clientes";
import CadastrarClientes from "../pages/Cadastrar/CadastrarClientes";
import DeletarClientes from "../pages/Deletar/DeletarCliente";
import AtualizarClientes from "../pages/Atualizar/AtualizarClientes";
import Home from "../pages/Home/Home";
import Acessorios from "../pages/Acessorios/Acessorios";
import CadastrarAcessorios from "../pages/CadastrarAcessorios/CadastrarAcessorios";
import DeletarAcessorios from "../pages/DeletarAcessorios/DeletarAcessorios";
import AtualizarAcessorios from "../pages/AtualizarAcessorios/AtualizarAcessorios";
import Contato from "../pages/Contato/Contato";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/clientes" element={<Clientes/>} />
      <Route path="/clientes/cadastro" element={<CadastrarClientes/>} />
      <Route path="/clientes/deletar" element={<DeletarClientes/>} />
      <Route path="/clientes/atualizar" element={<AtualizarClientes/>} />
      
      <Route path="/acessorios" element={<Acessorios/>}/>
      <Route path="/acessorios/cadastro" element={<CadastrarAcessorios/>}/>
      <Route path="/acessorios/deletar" element={<DeletarAcessorios/>}/>
      <Route path="/acessorios/atualizar" element={<AtualizarAcessorios/>}/>
      <Route path="/contato" element={<Contato/>} />

    </Routes>
  );
};

export default Rotas;
