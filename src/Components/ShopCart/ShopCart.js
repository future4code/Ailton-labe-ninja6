import React from 'react'
import {
  JobCard,
  PayMethods,
  Biricutico,
  Title,
  CartPage,
  BigCart } from './styled'


export default class ShopCart extends React.Component {
  onClickFinalCart=()=>{
    return alert("Compra finalizada com sucesso")
  }
  render() {
    const cartItens = this.props.carrinho.map((data)=>{
      return (
        <JobCard key={data.id}>
        <Title>{data.title.toUpperCase()}</Title>
        {/* <h2>{data.description}</h2> */}
        <h3>{`$${data.price} Pila`}</h3>
        <div>{data.paymentMethods.map((item)=>{return(<PayMethods>{item.toUpperCase()}</PayMethods>)})}</div>
        <p>{`Data de expiração:
         ${data.dueDate.slice(8, 10)}/${data.dueDate.slice(5, 7)}/${data.dueDate.slice(2, 4)}`}</p>
        <Biricutico onClick={() => this.props.removeService(data.id)}>Remover Serviço </Biricutico>
      </JobCard>
      )
    })
    return (
      <CartPage>
      <h1>SHOP CART </h1>
      <BigCart>{cartItens}</BigCart>
      <button onClick={this.onClickFinalCart} >Finalizar Compra</button>
      </CartPage>
    )
  }
}
