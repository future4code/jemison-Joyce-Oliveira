import React from 'react'

function ListaDeProdutos(props) {

    const testeProdutos = props.meuTeste.map((item,index) => {
        return <div key={index}>{item.nome} {item.valor} <img src={item.img} alt=""/></div>

    }
    )

    return(
        <div> {testeProdutos} </div>
    )

}

export default ListaDeProdutos