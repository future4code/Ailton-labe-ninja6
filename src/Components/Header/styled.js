import styled from "styled-components";
import IconLoupe from '../img/loupeicon.png'

export const Container = styled.div `
width: 100%;
height: 80px;
background-color: black;
display: flex;
justify-content: space-around;
align-items: center;
`

export const LogoStyle = styled.img `
width: 80px;
height: 80px;
`
export const ContainerLoginAndCart= styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
width: 20%;
`
export const ContainerImg = styled.div `
width: 20%;
display: flex;
align-items: center;
justify-content: center;
`

export const PStyle = styled.p `
color: #CCCCCC;
height: 98%;
display: flex;
align-items: center;
border-bottom: 1.3px solid black;
font-size: 0.7rem;
cursor: pointer;
:hover{
    color: white;
    border-bottom: 1.3px solid white;
}
`
export const Nav =styled.div `
width: 100%;
height: 30px;
background-color: #C93636;
display: flex;
align-items: center;
justify-content: center;
gap: 10%;
`
export const InputStyle = styled.input `
width: 30%;
border-radius: 12px;
border: none;
outline: none;
padding: 5px;
background-image: url(${IconLoupe});
background-repeat: no-repeat;
background-size: 15px ;
background-position: 320px;


`

export const ContainerItensMenu = styled.div `
width: 100%;
display: flex;
justify-content: space-around;
color: white;
align-items: center;
/* gap: 100px; */
`
export const ContainerCartStyle = styled.div `
background-color: white;
height: 20px;
padding: 2px 4px;
border-radius: 12px;
display: flex;
color: black;
align-items: center;
justify-content: center;
p{
    font-size:0.7rem
}
img{
    width: 15px;
    height: 15px;
}
`