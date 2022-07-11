import styled, { isStyledComponent } from "styled-components"

export const CartPage = styled.div`
display: flex;
width: 100%;
padding: 24px;
gap:16px;
img{
    height:290px;
    width: 280px;
}
@media screen and (max-width: 420px) {
  flex-direction:column ;
}

`
export const T = styled.div`
padding: 8px;
`
export const TitleBig = styled.h1`
    width: fit-content;
    /* margin: 0 auto; */
    background-color: #303030;
    color: #fff;
    padding: 4px;
    border-radius: 4px;
    box-shadow: 4px 4px #ff5252;
    font-weight: 500;
    margin-left: 36px;
    :hover {
    }
    @media screen and (max-width: 420px) {
    margin: 0 auto;
}
`
export const BigCart = styled.div`
background-color: #ffff;
width:100%;
display: flex;
gap:12px;
flex-direction:column;
padding: 0px 12px;
overflow: auto;
height: 700px;
::-webkit-scrollbar{
    background-color: #303030;
    border-radius: 12px;
    width: 12px;
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
border: 1px solid black;
box-shadow: 4px 4px #ff5252;
background-color: #303030;
color: #fff;
border-radius: 12px;
padding: 2px 8px;
/* box-shadow:2px 2px black; */
display:flex;
flex-direction:column;
justify-content: flex-end;
align-items: stretch;
>div{
justify-content: space-around;
display:flex;
}
h1{
  height: 90%;
  margin-top: 2px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
`
export const JobCard = styled.div`
background-color:#303030;
display: flex;
gap:8px;
height: 120px;
width: 100%;
align-items:center;
box-shadow: 4px 4px #ff5252;
padding: 12px;
@media screen and (max-width: 420px){
  flex-direction: column;
  height: fit-content;
  border-radius: 12px;
  gap: 0px;
}
`
export const Title = styled.p`
color:#ff5252;
padding: 8px;
width:20%;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
font-weight: bold;
gap: 8px;
transition: .2s ease;
:hover{
    color: white;
    text-decoration: underline;
}
@media screen and (max-width: 420px){
  width: 100%;
}
`
export const PayMethods = styled.h3`
display: flex;
justify-content: center;
align-items: center;
background-color: #ffd700;
font-size: 0.8rem;
white-space: nowrap;
border-radius: 12px;
padding: 4px;
color:#000;
@media screen and (max-width: 420px){
  width: fit-content;
}
`
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
width:10%;
height: 120px;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
font-weight: bold;
overflow-y: auto;
transition: 1s ease;
:hover p{
  padding: 2px;
  background-color: #ff5252;
  border-radius: 8px;  
  cursor: pointer;
}
@media screen and (max-width: 420px){
  width: 100%;
  height: 40px;
}
`
export const DivPrice = styled.div`
/* background-color: grey; */
width:10%;
color:gold;
display: flex;
justify-content:center;
align-items: center;
font-weight: bold;
color:#ff5252;
@media screen and (max-width: 420px){
  width: 100%;
  height: 40px;
}
`
export const DivDate = styled.div`
/* background-color:grey; */
width:20%;
color:#ffff;
font-size: 1rem;
display: flex;
justify-content:center;
align-items: center;
>p{
text-align:center;
}
@media screen and (max-width: 420px){
  width: 100%;
  height: 40px;
}
`
export const RemoveBt = styled.p`
display: flex;
height: fit-content;
width: 20%;
justify-content: center;
align-items: center;
padding: 0px 4px;
color:white;
border: 2px solid #ff5252;
border-radius: 8px;
user-select: none;
width:fit-content;
white-space: nowrap;
cursor: pointer;
transition: .2s ease;
:hover{
  background-color: #ff5252;
}`