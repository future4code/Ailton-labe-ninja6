import styled, { isStyledComponent } from "styled-components"

export const CartPage = styled.div`
background-color: #ffff;
display: flex;
width: 100%;
padding: 24px;
gap:16px;
img{
    height:290px;
    width: 280px;
}

`
export const T = styled.div`
padding: 8px;
`
export const BigCart = styled.div`
background-color: #ffff;
width:100%;
display: flex;
gap:12px;
flex-direction:column;
padding: 4px;
overflow: auto;
height: 700px;
::-webkit-scrollbar{
    background-color: #303030;
    border-radius: 12px;
    width: 16px;
}
::-webkit-scrollbar-thumb{
    background-color: #ff5252;
    border-radius: 12px;
}
`
export const EndDiv = styled.div`
background-color:grey ;
width: 300px;
height: 340px;
box-shadow:2px 2px black;
display:flex;
flex-direction:column;
justify-content: flex-end;
align-items: stretch;
>div{
justify-content: space-around;
display:flex;
}
`

export const JobCard = styled.div`
background-color:#303030;
display: flex;
gap:4px;
height: 120px;
align-items:center;
box-shadow:2px 2px black;
`
export const Title = styled.p`
/* background-color: grey; */
color:#ff5252;
padding: 8px;
width:20%;
display: flex;
justify-content:center;
align-items: center;
font-weight: bold;
`


export const PayMethods = styled.h3`
background-color: orange;
font-size: 0.8rem;
white-space: nowrap;

`
export const RemoveBt = styled.p`
display: flex;
height: fit-content;
justify-content: center;
align-items: center;
padding: 0px 4px;
border: 2px solid #ff5252;
border-radius: 8px;
user-select: none;
width:fit-content;
white-space: nowrap;
cursor: pointer;
:hover{
  background-color: #ff5252;
  transition: .15s ease;
}`
export const DivCart = styled.div`
/* background-color: grey; */
width:20%;
display: flex;
justify-content:center;
align-items: center;
gap: 8px;
flex-wrap: wrap;

`
export const DivDescription = styled.div`
/* background-color: grey; */
color: #ffff;
width:25%;
height: 120px;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
font-weight: bold;
overflow-y: auto;
`
export const DivPrice = styled.div`
/* background-color: grey; */
width:10%;
color:gold;
display: flex;
justify-content:center;
align-items: center;
font-weight: bold;
`
export const DivDate = styled.div`
/* background-color:grey; */
width:20%;
color:#ffff;
font-size: 1.5rem;
display: flex;
justify-content:center;
align-items: center;
>p{
text-align:center;
}
`