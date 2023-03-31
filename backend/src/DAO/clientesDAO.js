import database from "../infra/bd.js";

class ClientesDAO {
  static async mostrarTodos() {
    const dadosbd = await database.query("SELECT * FROM clientes ");
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async mostrarUm(param) {
    const dadosbd = await database.query(`SELECT * FROM clientes WHERE email = ?`, param);
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async inserir(obj) {
    try {
      await database.query("INSERT INTO clientes (idclientes, nome, email,senha,celular) VALUES (?,?,?,?,?)", Object.values(obj));
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: " clientes inserido com sucesso na tabela clientes" },
      status: 201,
    };
  }
  static async atualizar(email, obj) {
    try {
      if (!obj) {
        return {
          dados: { msg: "Objeto de atualização não fornecido" },
          status: 400,
        };
      }     
      await database.query("UPDATE clientes SET nome = ?, email = ?, senha = ?, celular = ? WHERE email = ?", [
        obj.nome,
        obj.email,
        obj.senha,
        obj.celular,
        email,
      ]);
    } catch (error) {
      console.log(error);
      return {
        dados: { msg: "Erro ao atualizar o cliente", error: error.message },
        status: 500,
      };
    }
    
    return {
      dados: { msg: "Cliente atualizado com sucesso na tabela Clientes" },
      status: 200,
    };
  }

  static async deletar(email) {
    try {
      await database.query("DELETE FROM clientes WHERE email = ?", [email]);
    } catch (error) {
      console.log(error);
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "Cliente deletado com sucesso da tabela Clientes" },
      status: 200,
    };
  }
  
  
}

export default ClientesDAO;
