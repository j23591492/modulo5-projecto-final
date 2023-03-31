import React, { useState } from "react";
import { deleteAcessorios } from "../../Api/acessoriosApi";

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
      setValues({ tipo: "" });
    },
  };
};
const DeletarAcessorios = () => {
  const formCadastro = useForm({
    initialValues: { tipo: "" },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formCadastro.values);
          formCadastro.clearform();
          deleteAcessorios(formCadastro.values.tipo);
          alert("acessorio Deletado");
        }}
      >
        <input
          placeholder="tipo de acessorio"
          name="tipo"
          value={formCadastro.values.tipo}
          onChange={formCadastro.handleChange}
        />
        <button>Deletar</button>
      </form>
    </div>
  );
};

export default DeletarAcessorios;
