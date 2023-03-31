import React, { useState } from "react";
import { atualizarAcessorios } from "../../api/acessoriosApi";

const useForm = (propsDoForm) => {
  const [values, setValues] = useState(propsDoForm.initialValues);

  return {
    values,
    handleChange: (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
    clearform() {
      setValues({ id: "", nome: "", tipo: "",descricao: "", preco: "",link: "" });
    },
  };
};

const AtualizarAcessorios = () => {
  const formCadastro = useForm({
    initialValues: { id: "", nome: "", tipo: "", descricao: "", preco: "", img: "" },
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formCadastro.values);
          formCadastro.clearform();
          atualizarAcessorios(formCadastro.values.id, formCadastro.values);
          alert("Acessorio atualizado");
        }}
      >
        <input
          placeholder="Id do Acessorio que vocÃª quer atualizar"
          name="id"
          value={formCadastro.values.id}
          onChange={formCadastro.handleChange}
        />
        <input
          placeholder="Nome do acessorio"
          name="nome"
          value={formCadastro.values.nome}
          onChange={formCadastro.handleChange}
        />
        <input
          placeholder="Tipo de acessorio"
          name="tipo"
          value={formCadastro.values.tipo}
          onChange={formCadastro.handleChange}
        />
        <input
          placeholder="Descricao"
          name="descricao"
          value={formCadastro.values.descricao}
          onChange={formCadastro.handleChange}
        />
        <input
          placeholder="Preco"
          name="preco"
          value={formCadastro.values.preco}
          onChange={formCadastro.handleChange}
        />
        <input
          placeholder="link do acessorio"
          name="img"
          value={formCadastro.values.img}
          onChange={formCadastro.handleChange}
        />
        <button>Atualizar</button>
      </form>
    </div>
  );
};

export default AtualizarAcessorios;