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
width: 10%;
@media only screen and (max-width: 420px) {
    width: 25%;
    flex-direction: column;
}
`
export const ContainerImg = styled.div `
width: 10%;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 420px) {
    width: fit-content;
}
`

export const PStyle = styled.p `
color: #CCCCCC;
height: 98%;
width: fit-content;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
border-bottom: 1px solid black;
font-size: 1rem;
word-break: keep-all;
word-wrap: normal;
cursor: pointer;
:hover{
    color: white;
    border-bottom: 1px solid white;
    transition: .2s ease;
}
@media only screen and (max-width: 420px) {
    width: 40%;
    font-size: .8rem;
    border-bottom: 1px solid black;
    /* border-radius: 24px; */
}
`
export const Nav = styled.nav `
width: 100%;
/* height: 4vh; */
min-height: fit-content;
background-color: #C93636;
display: flex;
flex-wrap: wrap;
padding: 4px;
align-items: center;
justify-content: center;
gap: 10%;

@media only screen and (max-width: 420px) {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 2px;
}
`
export const InputStyle = styled.input `
width: 30%;
border-radius: 12px;
border: none;
outline: none;
padding: 8px;
@media only screen and (max-width: 420px) {
    width: 40%;
}
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
height: 3vh;
width: 100%;
padding: 4px 6px;
border-radius: 12px;
display: flex;
gap: 4px;
color: black;
align-items: center;
justify-content: center;
cursor: pointer;
p{
    font-size:.8rem
}
img{
    height: 25px;
}
@media only screen and (max-width: 420px) {
    height: 4vh;
}
`