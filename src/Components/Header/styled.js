import styled from "styled-components";

export const Container = styled.div `
width: 100%;
height: 14vh;
background-color: black;
display: flex;
justify-content: space-around;
align-items: center;
`

export const LogoStyle = styled.img `
height: 14vh;
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
border-bottom: 2px solid black;
font-size: 1rem;
cursor: pointer;
:hover{
    color: white;
    border-bottom: 1.3px solid white;
}
`
export const Nav =styled.div `
width: 100%;
height: 4vh;
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
padding: 8px;
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
height: 3.4vh;
padding: 4px 6px;
border-radius: 12px;
display: flex;
gap: 4px;
color: black;
align-items: center;
justify-content: center;
p{
    font-size:1rem
}
img{
    height: 25px;
}
`