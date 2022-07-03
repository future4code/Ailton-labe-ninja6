import React from "react";
import { MinCartContainer,ServiceCart2,FooterCart2,CartCard2 } from "./styled";
import {NameAndPrice,BuyButton} from "../JobList/styled";
import lixo from "../img/latadelixo.png";

export default class MinCart extends React.Component {
  render(){
    const cartAdd = this.props.carrinho.map((dados) => {
      return (
        <CartCard2 key={dados.id}>
          <NameAndPrice>
            <p>{dados.title.toUpperCase()}</p>
            <p>${dados.price}</p>
          </NameAndPrice>
          <img src={lixo} onClick={() => this.props.removeService(dados.id)} />
        </CartCard2>
      );
    });
    const somaPrecos = this.props.carrinho
      .map((item) => item.price)
      .reduce((prev, curr) => prev + curr, 0);
    return(
      <MinCartContainer>
              {this.props.carrinho.length >= 1 ? (
                <ServiceCart2>{cartAdd}</ServiceCart2>
              ) : (
                <p>Adicione um item ao carrinho</p>
              )}
              <FooterCart2>
                <h4>Valor total: ${somaPrecos}</h4>
                <BuyButton onClick={() => this.props.goTo("shopCart")}>
                  Finalizar Compra
                </BuyButton>
              </FooterCart2>
      </MinCartContainer>
    )
  }
}