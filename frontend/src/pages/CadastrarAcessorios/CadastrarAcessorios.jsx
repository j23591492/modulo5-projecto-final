import React, { useState } from "react";
import { insertAcessorios } from "../../api/acessoriosApi";

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
      setValues({
        nome: "",
        tipo: "",
        descricao: "",
        preco: "",
        img: "",
      });
    },
  };
};

const CadastrarAcessorios = () => {
  const formCadastro = useForm({
    initialValues: {
      id: "",
      nome: "",
      tipo: "",
      descriao: "",
      preco: "",
      link: "",
    },
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formCadastro.values);
          formCadastro.clearform();
          insertAcessorios(formCadastro.values);
          alert("acessorio Cadastrado");
        }}
      >
        
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
          placeholder="Descricao do acessorio"
          name="descricao"
          value={formCadastro.values.descricao}
          onChange={formCadastro.handleChange}
        />
        <input
          placeholder="Preco do acessorio"
          name="preco"
          value={formCadastro.values.preco}
          onChange={formCadastro.handleChange}
        />
        <input
          placeholder="Link do acessorio"
          name="img"
          value={formCadastro.values.img}
          onChange={formCadastro.handleChange}
        />

        <button>Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastrarAcessorios;