import React from 'react'
import { JobCard} from '../JobList/styled'

export default class ShopCart extends React.Component {
  onClickFinalCart=()=>{
    return alert("Compra finalizada com sucesso")
  }
  render() {
    const cartItens = this.props.carrinho.map((data)=>{
      return (
        <JobCard key={data.id}>
        <h1>{data.title.toUpperCase()}</h1>
        <h3>{`$${data.price} Pila`}</h3>
        <h3>{data.paymentMethods}</h3>
        <p>{`Data de expiração: ${data.dueDate.slice(8, 10)}/${data.dueDate.slice(5, 7)}/${data.dueDate.slice(2, 4)}`}</p>
        <button onClick={()=>this.props.removeService(data.id)}>Remover Serviço</button>
      </JobCard>
      )
    })
    return (
      <>
      <h1>SHOP CART </h1>
      <div>{cartItens}</div>
      <button onClick={this.onClickFinalCart} >Finalizar Compra</button>
      </>
    )
  }
}
