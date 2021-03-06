import React from "react";
import { MethodsContainer } from "./styled";
import { CheckboxContainer } from "./styled";
import { Container } from "./styled";
import { InputStyled } from "./styled";
import { CreateJob } from "../API Functions/APIFunctions";
import { TitleRegister } from "./styled";
import { ButtonRegister } from "./styled";
import { ContainerRegisterGeral } from "./styled";
import { ContainerSamuraizudo } from "./styled";
import { ContainerGeral } from "./styled";
import Samuraizudo2 from "../img/samuraizudo2.jpg"

export default class JobRegister extends React.Component {
  state = {
    title: "",
    description: "",
    price: 0,
    paymentMethods: [],
    date: "",
  };

  checkbox = (e) => {
    if (e.target.checked) {
      this.state.paymentMethods.push(e.target.value);
    } else {
      const newPayment = this.state.paymentMethods.filter((data) => {
        return data !== e.target.value;
      });
      this.setState({ paymentMethods: newPayment });
    }
  };

  handleInputT = (e) => {
    console.log(e.target.value);
    this.setState({ title: e.target.value });
  };

  handleInputD = (e) => {
    console.log(e.target.value);
    this.setState({ description: e.target.value });
  };

  handleInputP = (e) => {
    console.log(e.target.value);
    this.setState({ price: e.target.value });
  };

  date = (e) => {
    this.setState({ date: e.target.value });
  };

  testa = () => {
    console.log(this.state);
  };

  render() {
    return (
      // <Container>
      // </Container>
      <ContainerGeral>        
        <ContainerRegisterGeral>
          <TitleRegister>Torne-se um Samurai</TitleRegister>
          <MethodsContainer>
            <InputStyled
              placeholder="Titulo"
              value={this.state.title}
              onChange={this.handleInputT}
            />
            <InputStyled
              placeholder="Descrição"
              value={this.state.description}
              onChange={this.handleInputD}
            />
            <InputStyled
              type={"number"}
              placeholder="Preço"
              value={this.state.price}
              onChange={this.handleInputP}
            />

            <CheckboxContainer>
              <label>
                <input
                  onChange={this.checkbox}
                  type="checkbox"
                  value={"Cartão de Débito"}
                />
                Cartão de Débito
              </label>
              <label>
                <input
                  onChange={this.checkbox}
                  type="checkbox"
                  value={"Cartão de Crédito"}
                />
                Cartão de Crédito
              </label>
              <label>
                <input
                  onChange={this.checkbox}
                  type="checkbox"
                  value={"Paypal"}
                />
                Paypal
              </label>
              <label>
                <input
                  onChange={this.checkbox}
                  type="checkbox"
                  value={"Boleto"}
                />
                Boleto
              </label>
              <label>
                <input onChange={this.checkbox} type="checkbox" value={"Pix"} />
                Pix
              </label>
            </CheckboxContainer>
            <InputStyled type="date" onChange={this.date} />
          </MethodsContainer>
          <ButtonRegister
            onClick={()=>CreateJob(
                this.state.title,
                this.state.description,
                this.state.price,
                this.state.paymentMethods,
                this.state.date
              )
            }
          >
            Cadastre seu Serviço
          </ButtonRegister>
          </ContainerRegisterGeral>
          <ContainerSamuraizudo><img src = {Samuraizudo2}></img></ContainerSamuraizudo>
        </ContainerGeral>
    );
  }
}
