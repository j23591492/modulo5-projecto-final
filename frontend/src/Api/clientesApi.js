import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:3000",
  });

  export async function getClientes() {
    const response = await api.get("/clientes");
    console.log(response.data.msg)
    return response.data.msg;
  }
  export async function insertClientes(obj) {
    await api.post("/clientes", obj)
  }
  export async function deleteClientes(parametro) {
    await api.delete(`/clientes/email/${parametro}`)
  }
  export async function atualizarClientes(parametro, obj) {
    await api.put(`/clientes/email/${parametro}`, obj)
  }