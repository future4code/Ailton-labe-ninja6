import styled from "styled-components";

export const Container = styled.div`
display: flex;
@media only screen and (max-width: 420px) {
    width: 90%;
    align-items: center;
}
`
export const ContainerGeral = styled.div `
display: flex;
width: 100%;
justify-content: space-evenly;
height: fit-content; 
align-items: center;
padding: 64px;
/* border: 2px solid red; */
@media only screen and (max-width: 420px) {
    width: 100vw;
    font-size: .8rem;
    flex-direction: column;
    padding:6px;
    align-items: stretch;
}
`
export const ContainerRegisterGeral = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const ButtonRegister = styled.button `
margin-top: 20px;
width: 150px;
height: 30px;
border-radius: 5px;
border: 2px solid #ff5252;
color: white;
background-color: #303030;
cursor: pointer;
transition: 0.2s;
:hover{
    background-color: #ff5252;
    border: 2px solid #303030;
}
`

export const MethodsContainer = styled.div`
display: flex;
margin-top: 30px;
flex-direction: column;
width: 100%;
padding: 24px 24px;
align-items: flex-start;
border: 1px dotted black;
border-radius: 12px;
gap: 20px;
background-color: #ff5252;
box-shadow: 4px 4px #303030;
`

export const CheckboxContainer = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
/* height: 80px; */
width: 100%;
overflow: auto;
padding: 3px 5px;
gap: 4px;
background-color: white;
`

export const InputStyled = styled.input`
width: 100%;
border-radius: 6px;
padding: 4px;
border: 1px solid black;
`
export const TitleRegister = styled.h1 `
margin-top: 20px;
`

export const ContainerSamuraizudo = styled.div`
display: flex;
/* @media only screen and (max-width: 420px) { */
justify-content: center;
/* } */
>img{
    width: 420px;
    @media only screen and (max-width: 420px) {
        width: 320px;
      

    }
}
`
