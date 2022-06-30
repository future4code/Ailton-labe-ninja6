import styled from "styled-components";

export const Container = styled.div`
width: 60%;
height: 80%;
background-color: #303030;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: column;
align-items: center;
overflow: auto;
border: 2px solid #ff5252;
box-shadow: 4px 4px #ff5252;
padding: 32px;
gap:12px;
img {
    width: 24px;
}
>h1{
    color: white;
    font-size: 2rem;
}
`
export const PaymentDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    font-size: 25px;
    color:white;
`
export const Description = styled.p`
display: flex;
justify-content: center;
border: 1px solid #fff;
border-radius: 12px;
padding: 16px;
color: white;
font-size: 1.5rem;
width: 80%;
height: 60%;
`

export const BackDetails = styled.div`
display: flex;
gap: 16px;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 80%;

p, img{ color: white;
    cursor: pointer;}

>div{
    display: flex;
    width: 40%;
    background-color: #ff5252;
    align-items: center;
    justify-content: center;
    gap: 24px;
    border-radius: 4px;
    padding: 4px;
    cursor: pointer;
    :hover{
        background-color: #ff1a1a;
        transition: .15s ease;
    }
}
>p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 32px;
    border: 1px solid white;
    /* color: black; */
    border-radius: 4px;
    :hover {
        background-color: white;
        color: #000;
        transition: .15s ease;
    }
}
img {
    background-color: #fff;
    padding: 2px;
    border-radius: 8px;
}
`

export const Containerzudo = styled.div`
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.75);
position: fixed;
top: 0;
`

export const MethodsCard = styled.p`
font-size: 23px;
background-color: #ffd700;
width: fit-content;
color:#000;
padding: 0 6px;
border-radius: 12px;
`
export const MethodsDiv = styled.div`
display: flex;
gap: 8px;
`

export const ValueAndDate = styled.div`
display: flex;
justify-content: space-between;
width: 75%;
/* background-color: lime; */
>h2 {
    color: #fff;
}
`
export const InfosDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 200px;
color: white;
`