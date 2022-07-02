import React from "react";
import { FooterCart, BuyButton } from "../JobList/styled";
import JobDetails from "../JobDetails/JobDetails";
import axios from "axios";
import { TitleBig } from "./styled";

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
  BigTitle,
} from "./styled";
import Semurai from "../img/semuray.png";

const demoauth = {
  headers: { Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e" },
};

export default class ShopCart extends React.Component {
  state={
    jobs: [],
    details: false,
    clickedService: "",
  }
  onClickFinalCart = () => {
    return alert("Compra finalizada com sucesso!");
  };
  getActualId = (id) => {
    this.setState({ clickedService: id });
    this.setState({ details: true });
  };
  closePopUp = () => {
    this.setState({ details: false });
  };
  deleteJob = (id) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${id}`
    axios.get(url, demoauth).then((res)=>{
      console.log(res)
      alert('Serviço deletado')      
    }).catch(res=>{alert('Nosso servidor foi de berço')})
  }
  render() {
    const somaPrecos = this.props.carrinho
      .map((item) => item.price)
      .reduce((prev, curr) => prev + curr, 0);
    const cartItens = this.props.carrinho.map((data) => {
      return (
        <JobCard key={data.id}>
          <Title>
            <p>{data.title.toUpperCase()}</p>
          </Title>
          <DivDescription>
            <p onClick={() => this.getActualId(data.id)}>Ver detalhes</p>
          </DivDescription>
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
        {this.state.details && (
            <JobDetails
              jobs={this.state.jobs}
              addServices={this.props.addServices}
              closePopUp={this.closePopUp}
              id={this.state.clickedService}
              deleteJob={this.deleteJob}
              carrinho={this.props.carrinho}
            />
          )}
        <TitleBig>Carrinho</TitleBig>
        <CartPage>
          <BigCart>
            {cartItens}
          </BigCart>
        <di>
          <EndDiv>
            <h1>Quantidade: {this.props.carrinho.length}
            </h1>
            <FooterCart>
              <h4>Valor Total: {somaPrecos}</h4>
              <BuyButton onClick={this.onClickFinalCart}>Finalizar Compra</BuyButton>
            </FooterCart>
            </EndDiv>
            <br />
            <img src={Semurai} />
        </di>
        </CartPage>
      </T>
    );
  }
}
