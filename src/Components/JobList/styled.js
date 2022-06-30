import styled from "styled-components";

export const ContainerMid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 60vw;
  height: 70vh;
  gap: 12px;
  margin: 12px 12px;
  overflow: auto;
  top: 0;
  ::-webkit-scrollbar{
    background-color: #303030;
    width: 12px;
    border-radius: 12px;
    }
  ::-webkit-scrollbar-thumb{
    background-color: #ff5252;
    border-radius: 12px;
  }
`;
export const JobCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  width: 40%;
  height: 150px;
  overflow: auto;
  box-shadow: 4px 4px #ff5252;
  border-radius: 8px;
  background-color: #303030;
  color: white;
  top: 0;
  :hover {
    width: 42%;
    height: 160px;
    transition: .3s ease;
  }
  h1 {
    color: #ff5252;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0px 32px;
`;

export const ServiceTitle = styled.h1`
  margin: 24px;
`;

export const DetailsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  gap: 12px;
  padding: 4px;
  margin-top: 12px;
  p {
    color: #ff5252;
    cursor: pointer;
    :hover {
      color: white;
      transition: 0.2s linear;
    }
  }
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    cursor: pointer;
  }
`;

export const Filter = styled.aside`
  width: 300px;
  height: fit-content;
  padding: 12px;
  border: 1px solid black;
  box-shadow: 4px 4px darkgray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const PageCenter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const MediumCart = styled.aside`
  width: 300px;
  height: 500px;
  border: 1px solid black;
  box-shadow: 4px 4px #ff5252;
  background-color: #303030;
  color: #fff;
  border-radius: 12px;
  padding: 2px 8px;
  h1{
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  >p{
    display: flex;
    justify-content: center;
    min-height: 80%;
  }
`;
export const CartCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 44px;
  padding: 4px 12px;
  align-items: center;
  box-shadow: 2px 2px #ff5252;
  background-color: #fff;
  color: black;
  
`
export const ServiceCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: auto;
  height: 80%;
`
export const FooterCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  padding: 16px;
`

export const NameAndPrice = styled.div`
width: 150px;
display: flex;
gap: 12px;
`

export const FilterTypeSelect = styled.div`
display: flex;
align-items: center;
gap: 4px;
`
export const FilterAndSamuraizudo = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;
width: 300px;
>img{
  width: 500px;
}
`
export const BuyButton = styled.p`
display: flex;
padding: 0px 4px;
border: 2px solid #ff5252;
border-radius: 8px;
user-select: none;
cursor: pointer;
:hover{
  background-color: #ff5252;
  transition: .15s ease;
}
`