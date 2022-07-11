import React, { Component } from "react";
import { LoadText, Container } from "./styled";
import LoadingGif from "../img/loading1.gif"

export default class LoadingScreen extends Component {
  render() {
    return (
      <Container>
        <LoadText>
            Carregando
            <img src={LoadingGif} alt="Carregando"/>
        </LoadText>
      </Container>
    );
  }
}
