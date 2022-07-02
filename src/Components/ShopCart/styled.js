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
export const TitleBig = styled.h1`
    display: inline;
    border-bottom: 2px solid #ff5252;
    box-shadow: 3px 4px #ff5252;
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
:hover p{
    display: inline;
    border-bottom: 1px solid white;
}
`
export const PayMethods = styled.h3`
background-color: orange;
font-size: 0.8rem;
white-space: nowrap;
border: 2px solid black;
border-radius: 20px;
padding: 5px;
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
:hover p{
  border: 2px solid #ff5252;
  background-color: #ff5252;
  border-radius: 8px;
  cursor: pointer;
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
:hover{
  background-color: #ff5252;
  transition: .15s ease;
}`