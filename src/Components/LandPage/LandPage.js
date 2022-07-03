import React from 'react'
import {
  Container,
  ButtonLandingPage,
  ButtonsSection,
  TextSection
} from './styled'

export default class LandPage extends React.Component {
  render() {
    return (
      <>
        <Container>
          
          <ButtonsSection>
            <TextSection>
            <h1>Conectando quem precisa com quem sabe fazer!</h1>
            </TextSection>
            <div>
              <ButtonLandingPage onClick={() => this.props.changeScreen("jobRegister")}>Seja um Samurai</ButtonLandingPage>
            </div>
            <div>
              <ButtonLandingPage onClick={() => this.props.changeScreen("jobList")}>Contrate um Samurai</ButtonLandingPage>
            </div>
          </ButtonsSection>
          
        </Container>
      </>
    )
  }
}
