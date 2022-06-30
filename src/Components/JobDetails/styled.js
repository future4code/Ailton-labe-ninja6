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
    width: 32px;
}
h1, h2 {
    color: #ff5252
}
 h3 {
    color: white;
}
`
export const PaymentDiv = styled.div `
    display: flex;
    gap: 12px;
    font-size: 25px;
    color:white;
`
export const Description = styled.p`
color: white;
font-size: 25px;
`

export const BackDetails = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 20%;

p, img{ color: white;
    cursor: pointer;}

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
color:#000;
padding: 0 6px;
border-radius: 12px;
`