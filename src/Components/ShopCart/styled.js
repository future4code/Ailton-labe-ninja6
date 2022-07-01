import styled, { isStyledComponent } from "styled-components"

export const CartPage = styled.div`
background-color: #303030;
`

export const JobCard = styled.div`
background-color: grey;
color:white;
width: 97%;
height: 60px;
display:flex;
padding: 15px;
align-items: center;
gap: 12px;
font-size:0.7rem;

box-shadow: 4px 4px #FF5252;
border-radius: 20px;
justify-content:space-between;

>h2{
    color:white
}
>p{
    color:white
}
>div{
gap:10px;
display:flex;
}

`
export const Title = styled.p`
font-size:1rem;
color: white;

`

export const BigCart = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 6px;
width: 100%;
flex-wrap: wrap;
`
export const PayMethods = styled.h3`
 display:flex;
 justify-content:space-around;
 color: #000;
 background-color: #ffd700;
width: fit-content;
padding: 0 6px;
border-radius: 12px;
align-items: center;
`
export const Biricutico = styled.button`
justify-content:end;
border-radius: 12px;
padding: 0 6px;
`