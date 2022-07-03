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
  ::-webkit-scrollbar {
    background-color: #303030;
    width: 12px;
    border-radius: 12px;
  }
  ::-webkit-scrollbar-thumb {
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
  transition: 0.3s;
  :hover {
    width: 42%;
    height: 160px;
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
  height: 32px;
  gap: 12px;
  padding: 4px;
  margin-top: 12px;
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    cursor: pointer;
  }
`;

export const ViewDetailsP = styled.p`
  color: #ff5252;
  cursor: pointer;
  :hover {
    color: white;
    transition: 0.2s linear;
  }
`;

export const ClickedItem = styled.p`
  color: #bbbbbb;
  user-select: none;
  transition: 0.1s linear;
  :hover {
    color: #e0e0e0;
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
  h1 {
    height: 10%;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > p {
    display: flex;
    justify-content: center;
    min-height: 80%;
  }
`;
export const CartCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px 12px;
  align-items: center;
  gap:2px;
  box-shadow: 2px 2px #ff5252;
  background-color: #fff;
  color: black;
  p{
    width: 45%;
    padding: 0 2px;
   
  }
  > img {
    width: 26px;
  }
`;
export const ServiceCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: auto;
  height: 80%;
  padding: 4px 12px;
  ::-webkit-scrollbar {
    background-color: #303030;
    width: 8px;
    border-radius: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ff5252;
    border-radius: 12px;
  }
`;
export const FooterCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 12px;
`;

export const NameAndPrice = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const FilterTypeSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const FilterAndSamuraizudo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  > img {
    width: 500px;
  }
`;
export const BuyButton = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 4px;
  border: 2px solid #ff5252;
  border-radius: 8px;
  user-select: none;
  width: fit-content;
  white-space: nowrap;
  cursor: pointer;
  :hover {
    background-color: #ff5252;
    transition: 0.15s ease;
  }
`;
