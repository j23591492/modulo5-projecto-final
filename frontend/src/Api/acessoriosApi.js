import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:3000",
  });

  export async function getAcessorios() {
    const response = await api.get("/acessorios");
    console.log(response.data.msg)
    return response.data.msg;
  }
  export async function insertAcessorios(obj) {
    console.log(obj)
    await api.post("/acessorios", obj)
  }
  export async function deleteAcessorios(parametro) {
    await api.delete(`/acessorios/id/${parametro}`)
  }
  export async function atualizarAcessorios(parametro, obj) {
    await api.put(`/acessorios/id/${parametro}`, obj)
  }
