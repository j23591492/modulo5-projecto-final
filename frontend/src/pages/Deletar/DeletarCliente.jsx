import React, { useState } from "react";
import { deleteClientes } from "../../Api/clientesApi";

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
      setValues({ email: "" });
    },
  };
};
const DeletarClientes = () => {
  const formCadastro = useForm({
    initialValues: { email: "" },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formCadastro.values);
          formCadastro.clearform();
          deleteClientes(formCadastro.values.email);
          alert("Cliente Deletado");
        }}
      >
        <input
          placeholder="email do Cliente"
          name="email"
          value={formCadastro.values.email}
          onChange={formCadastro.handleChange}
        />
        <button>Deletar</button>
      </form>
    </div>
  );
};

export default DeletarClientes;
