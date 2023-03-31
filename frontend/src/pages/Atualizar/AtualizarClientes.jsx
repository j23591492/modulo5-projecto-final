import React, { useState } from "react";
import { atualizarClientes } from "../../Api/clientesApi";

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
      setValues({ id: "", nome: "", email: "", senha: "", celular: "" });
    },
  };
};

const AtualizarClientes = () => {
  const formCadastro = useForm({
    initialValues: { id: "", nome: "", email: "", senha: "", celular: "" },
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formCadastro.values);
          formCadastro.clearform();
          atualizarClientes(formCadastro.values.id, formCadastro.values);
          alert("Cliente atualizado");
        }}
      >
        <input
          placeholder="Id do Cliente que você quer atualizar"
          name="id"
          value={formCadastro.values.id}
          onChange={formCadastro.handleChange}
        />
        <input
          placeholder="Nome do Cliente"
          name="nome"
          value={formCadastro.values.nome}
          onChange={formCadastro.handleChange}
        />
        <input
          placeholder="Email do Cliente"
          name="email"
          value={formCadastro.values.email}
          onChange={formCadastro.handleChange}
        />
        <input
          placeholder="Senha do Cliente"
          name="senha"
          value={formCadastro.values.senha}
          onChange={formCadastro.handleChange}
        />
        <input
          placeholder="Celular do Cliente"
          name="celular"
          value={formCadastro.values.celular}
          onChange={formCadastro.handleChange}
        />
        <button>Atualizar</button>
      </form>
    </div>
  );
};

export default AtualizarClientes;
