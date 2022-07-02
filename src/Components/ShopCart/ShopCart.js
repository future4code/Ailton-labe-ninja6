import React from "react";
import {
  JobCard,
  PayMethods,
  RemoveBt,
  Title,
  CartPage,
  BigCart,
  DivCart,
  EndDiv,
  DivDescription,
  DivDate,
  DivPrice,
  T,
} from "./styled";
import Semurai from "../img/semuray.png";

export default class ShopCart extends React.Component {
  onClickFinalCart = () => {
    return alert("Compra finalizada com sucesso!");
  };

  render() {
    const somaPrecos = this.props.carrinho
      .map((item) => item.price)
      .reduce((prev, curr) => prev + curr, 0);
    const cartItens = this.props.carrinho.map((data) => {
      return (
        <JobCard key={data.id}>
          <Title>{data.title.toUpperCase()}</Title>
          <DivDescription>{data.description}</DivDescription>
          <DivCart>
            {data.paymentMethods.map((item) => {
              return <PayMethods>{item.toUpperCase()}</PayMethods>;
            })}
          </DivCart>
          <DivPrice>
            {" "}
            <h3>{`$${data.price} Pila`}</h3>
          </DivPrice>
          <DivDate>
            <p>{`Data de expiração:
         ${data.dueDate.slice(8, 10)}/${data.dueDate.slice(
              5,
              7
            )}/${data.dueDate.slice(2, 4)}`}</p>
          </DivDate>
          <RemoveBt onClick={() => this.props.removeService(data.id)}>
            Remover Serviço{" "}
          </RemoveBt>
        </JobCard>
      );
    });
    return (
      <T>
        <h1>SHOP CART </h1>
        <CartPage>
          <BigCart>{cartItens}</BigCart>
          <div>
            <EndDiv>
              <div>
                <p>Quantidade:{this.props.carrinho.length}</p>
                <p>Total:{somaPrecos}</p>
              </div>

              <button onClick={this.onClickFinalCart}>Finalizar Compra</button>
            </EndDiv>
            <br />
            <img src={Semurai} />
          </div>
        </CartPage>
      </T>
    );
  }
}
