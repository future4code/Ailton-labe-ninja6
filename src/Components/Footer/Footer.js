import React from "react";
import { Container } from "./styled";
import { ContainerDev } from "./styled";
import { ContainerMenu } from "./styled";
import { ContainerMedia } from "./styled";
import { ContainerLogo } from "./styled";
import { Devs } from "./styled";
import { DevsMedia } from "./styled";
import { DevsLine } from "./styled";
import LogoFooter from "../img/samuraifooter.png";
import Github from "../img/logogithub.png";
import Linkedin from "../img/logolinkedin.png";
import Insta from "../img/logoinsta.png";
import Facebook from "../img/logoface2.png";
import Whats from "../img/logozap3.png";
import Twitter from "../img/logotwiter.png";

export default class styled extends React.Component {
  render() {
    return (
      <Container>
        <ContainerLogo>
          <img src={LogoFooter} />
        </ContainerLogo>
        <ContainerMenu>
          <p>-Sobre nós</p>
          <p>-Fale conosco</p>
          <p>-Dúvidas frequentes</p>
          <p>-Nosso App</p>
          <p>-Não sei mais</p>
          <p>-Não sei mais 2</p>
        </ContainerMenu>
        <ContainerDev>
          <p>Desenvolvedores:</p>
          <DevsLine>
            <Devs>
              <p>André Luiz</p>
            </Devs>
            <DevsMedia>
              <img src={Github} /> <img src={Linkedin} />
            </DevsMedia>
          </DevsLine>
          <DevsLine>
            <Devs>
              <p>Daniel Melo</p>
            </Devs>
            <DevsMedia>
              <img src={Github} /> <img src={Linkedin} />
            </DevsMedia>
          </DevsLine>
          <DevsLine>
            <Devs>
              <p>Gabriel Theodoro</p>
            </Devs>
            <DevsMedia>
              <img src={Github} /> <img src={Linkedin} />
            </DevsMedia>
          </DevsLine>
        </ContainerDev>
        <ContainerDev>
          <DevsLine>
            <Devs>
              <p>Júlia Moniz</p>
            </Devs>
            <DevsMedia>
              <img src={Github} /> <img src={Linkedin} />
            </DevsMedia>
          </DevsLine>
          <DevsLine>
            <Devs>
              <p>João Zang</p>
            </Devs>
            <DevsMedia>
              <img src={Github} /> <img src={Linkedin} />
            </DevsMedia>
          </DevsLine>
        </ContainerDev>
        <ContainerMedia>
          <img src={Whats} />
          <img src={Facebook} />
          <img src={Insta} />
          <img src={Twitter} />
        </ContainerMedia>
      </Container>
    );
  }
}
