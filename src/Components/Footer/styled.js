import styled from "styled-components";

export const Container = styled.div `
max-width: 99vw;
height: 300px;
background-color: black;
display: flex;
justify-content: space-around;
`
export const ContainerLogo = styled.div `
width: 20%;
display: flex;
justify-content: center;
align-items: center;
img {
    width: 200px;
    height: 200px;
}
`
export const ContainerMenu = styled.div `
width: 20%;
color: #BBBBBB;
display: flex;
justify-content: center;
align-items: left;
gap: 10px;
flex-direction: column;
`
export const FooterPoint = styled.p`
cursor: pointer;
font-size: 1.1rem;
width: fit-content;
transition: .2s ease;
:hover {
    color: #ff5252;
    /* border-bottom: 1px solid #ff5252 ; */
} 
`
export const ContainerDev = styled.div `
width: 20%;
height: 90%;
color: white;
display: flex;
justify-content: center;
align-items: left;
flex-direction: column;
font-size: 1.1rem;
gap: 15px;
`
export const ContainerMedia = styled.div `
width: 20%;
display: flex;
justify-content: flex-end;
align-items: flex-end;
padding: 15px;

img{
    width: 50px;
    height: 50px;
}
`
export const Devs = styled.div `
width: 40%;

`
export const DevsMedia = styled.div `
img{
    width: 30px;
    height: 30px;
}
`
export const DevsLine = styled.div `
display: flex;
`