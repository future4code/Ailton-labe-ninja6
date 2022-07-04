import React from "react";
import Logo from "../img/samuralab.png";
import IconCart from "../img/iconcartshop.png";
import { Container } from "./styled";
import { ContainerItensMenu } from "./styled";
import { LogoStyle } from "./styled";
import { ContainerCartStyle } from "./styled";
import { PStyle } from "./styled";
import { Nav } from "./styled";
import { InputStyle } from "./styled";
import { ContainerLoginAndCart } from "./styled";
import { ContainerImg } from "./styled";
import IconSamurai from "../img/iconsamurai.png";
import MinCart from "../MinCart/MinCart";

export default class Header extends React.Component {
  state={
    minCart:false,
  }
  goToMinCart=()=>{
    console.log("foi")
    this.setState({minCart:!this.state.minCart})
  }
  render() {
    return (
      <div>
        {this.state.minCart && (
            <MinCart
            carrinho={this.props.carrinho}
            removeService={this.props.removeService}
            goTo={this.props.changeScreen}
            />
          )}
        <Container>
          <ContainerImg>
              <LogoStyle src={Logo} />
            </ContainerImg>
          <ContainerItensMenu>
            <InputStyle placeholder="Buscar serviço" onChange={()=>this.props.changeScreen("jobList")}></InputStyle>
            <ContainerLoginAndCart>
              <ContainerCartStyle onClick={this.goToMinCart}>
                <img src={IconCart} />
                <p>Carrinho</p>
              </ContainerCartStyle>
              <ContainerCartStyle >
                <img  src={IconSamurai} />
                <p>Login</p>
              </ContainerCartStyle>
            </ContainerLoginAndCart>
          </ContainerItensMenu>
        </Container>
        <Nav>
          <PStyle onClick={()=>this.props.changeScreen("landpage")}>Home</PStyle>
          <PStyle onClick={()=>this.props.changeScreen("jobRegister")}>Seja um Samurai</PStyle>
          <PStyle onClick={()=>this.props.changeScreen("jobList")}>Contrate um Samurai</PStyle>
          { <PStyle 
          // onClick= "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          >Baixe nosso App</PStyle> }
        </Nav>
      </div>
    );
  }
}
