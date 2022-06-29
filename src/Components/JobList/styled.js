import styled from "styled-components";

export const ContainerMid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 60%;
  height: 100vh;
  gap: 12px;
  margin: 12px 0px;
  overflow: auto;
  top: 0;
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
  left: 120px;
  top: 260px;
  width: 300px;
  height: 500px;
  border: 1px solid black;
  box-shadow: 4px 4px darkgray;
`;

export const PageCenter = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const MediumCart = styled.aside`
  width: 300px;
  height: 500px;
  border: 1px solid black;
  box-shadow: 4px 4px darkgray;
`;
