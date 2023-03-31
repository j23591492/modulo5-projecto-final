import React from 'react'
import "./CardAcessorios.css"

const CardAcessorios = ({ nome, tipo, descricao, preco, img}) => {
  return (
    <div className='container'>
        <h2>Acessorio</h2>
        <p>Nome: {nome}</p>
        <p>Tipo: {tipo}</p>
        <p>Descrição: {descricao}</p>
        <p>Preço: R$ {preco}</p>
        <img className='imagens' src= {img} />
    </div>
  )
}

export default CardAcessorios