import React from 'react'
import Logo from '../img/samuralab.png'
import IconCart from '../img/iconcartshop.png'
import { Container } from './styled'
import { ContainerItensMenu } from './styled'
import { LogoStyle } from './styled'
import { ContainerCartStyle } from './styled'
import { PStyle } from './styled'
import { Nav } from './styled'
import { InputStyle } from './styled'
import { ContainerLoginAndCart } from './styled'
import { ContainerImg } from './styled'
import IconSamurai from '../img/iconsamurai.png'


export default class Header extends React.Component {
  render() {
    return (
      <div>
      <Container>
            
            <ContainerItensMenu>
                <ContainerImg>
                <LogoStyle src={Logo}/>
                </ContainerImg>
                <InputStyle placeholder='Buscar serviço'></InputStyle>
                <ContainerLoginAndCart>
                    <ContainerCartStyle>
                    <p>Carrinho</p>
                    <img src={IconCart}/>
                    </ContainerCartStyle>
                    <ContainerCartStyle>
                    <p>Login</p>
                    <img src={IconSamurai}/>
                    </ContainerCartStyle>
                </ContainerLoginAndCart>
            
                    
            </ContainerItensMenu>
            
      </Container>
      <Nav>
        <PStyle>Home</PStyle>
        <PStyle>Seja um Samurai</PStyle>
        <PStyle>Contrate um Samurai</PStyle>
        <PStyle>Baixe nosso App</PStyle>
      </Nav>
      </div>
    )
  }
}
