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
          <FooterPoint>-Dúvidas frequentes</FooterPoint>
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
              <a href="https://github.com/Aluizx6" target={"_blank"}><img src={Github} /></a> <a href="https://www.linkedin.com/in/andr%C3%A9-luiz-amaral-oliveira-bispo-00a48122a/" target={"_blank"}><img src={Linkedin} /></a>
            </DevsMedia>
          </DevsLine>
          <DevsLine>
            <Devs>
              <p>Daniel Melo</p>
            </Devs>
            <DevsMedia>
            <a href="https://github.com/DanielAndrade7" target={"_blank"}><img src={Github} /></a> <a href="https://www.linkedin.com/in/daniel-andrade-b91246177/" target={"_blank"}><img src={Linkedin} /></a>
            </DevsMedia>
          </DevsLine>
          <DevsLine>
            <Devs>
              <p>Gabriel Theodoro</p>
            </Devs>
            <DevsMedia>
            <a href="https://github.com/gabthe" target={"_blank"}><img src={Github} /></a> <a href="https://www.linkedin.com/in/gabriel-theodoro-ferreira-680b1a18a/" target={"_blank"}><img src={Linkedin} /></a>
            </DevsMedia>
          </DevsLine>
          <DevsLine>
            <Devs>
              <p>Júlia Moniz</p>
            </Devs>
            <DevsMedia>
            <a href="https://github.com/JuliaMoniz27" target={"_blank"}><img src={Github} /></a> <a href="https://www.linkedin.com/in/j%C3%BAlia-moniz-a912b9172/" target={"_blank"}><img src={Linkedin} /></a>
            </DevsMedia>
          </DevsLine>
          <DevsLine>
            <Devs>
              <p>João Zang</p>
            </Devs>
            <DevsMedia>
            <a href="https://github.com/joaozang" target={"_blank"}><img src={Github} /></a> <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-zang-gomes-063282163/" target={"_blank"}><img src={Linkedin} /></a>
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
