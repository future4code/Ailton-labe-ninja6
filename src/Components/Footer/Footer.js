import React from "react";
import { Container,ContainerDev, ContainerMenu,ContainerMedia,ContainerLogo,FooterPoint, Devs, DevsLine,DevsMedia } from "./styled";
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
          <FooterPoint>-Sobre nós</FooterPoint>
          <FooterPoint>-Fale conosco</FooterPoint>
          <FooterPoint>-Dúvidas frequentes - FAQ</FooterPoint>
          <FooterPoint>-Trabalhe conosco</FooterPoint>
          <FooterPoint>-Nosso App</FooterPoint>
          <FooterPoint>-Termos de serviço</FooterPoint>
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
