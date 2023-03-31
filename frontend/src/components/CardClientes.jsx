import React from 'react'
import "./CardClientes.css"

const CardClientes = ({ nome, email}) => {
  return (
    <div className='container'>
        <h2>Cliente</h2>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
    </div>
  )
}
export default CardClientes