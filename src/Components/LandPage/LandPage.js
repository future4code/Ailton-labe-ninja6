import React from "react";
import {
  Container,
  ButtonLandingPage,
  ButtonsSection,
  TextSection,
  ContainerItems,
} from "./styled";

export default class LandPage extends React.Component {
  render() {
    return (
      <>
        <Container>
          <ButtonsSection>
            <ContainerItems>
              <TextSection>
                Conectando quem precisa com quem sabe fazer!
              </TextSection>
              <div>
                <ButtonLandingPage
                  onClick={() => this.props.changeScreen("jobRegister")}
                >
                  Seja um Samurai
                </ButtonLandingPage>
              </div>
              <div>
                <ButtonLandingPage
                  onClick={() => this.props.changeScreen("jobList")}
                >
                  Contrate um Samurai
                </ButtonLandingPage>
              </div>
            </ContainerItems>
          </ButtonsSection>
        </Container>
      </>
    );
  }
}
