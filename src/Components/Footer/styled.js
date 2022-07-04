import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  height: 300px;
  background-color: black;
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 420px) {
    width: 100%;
    height: fit-content;
    flex-direction: column;
    align-items: center;
  }
`;
export const ContainerLogo = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
    height: 200px;
    @media only screen and (max-width: 420px) {
      width: 160px;
      height: 160px;
    }
  }
`;
export const ContainerMenu = styled.div`
  width: 25%;
  color: #bbbbbb;
  display: flex;
  justify-content: center;
  align-items: left;
  gap: 10px;
  flex-direction: column;
  @media only screen and (max-width: 420px) {
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  }
`;
export const FooterPoint = styled.p`
  cursor: pointer;
  font-size: 1.1rem;
  width: fit-content;
  transition: 0.2s ease;
  :hover {
    color: #ff5252;
    /* border-bottom: 1px solid #ff5252 ; */
  }
`;
export const ContainerDev = styled.div`
  width: 25%;
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  font-size: 1rem;
  gap: 4px;
  margin: 0px;
  flex-wrap: wrap;
  padding: 32px 0px;
  >p {
    text-align: center;
  }
  /* white-space: nowrap; */
  @media only screen and (max-width: 420px) {
    width: 100%;
    height: fit-content;
    flex-direction: column;
    padding: 12px;
    justify-items: space-between;
    
    > p {
      text-align: center;
    }
  }
`;
export const ContainerMedia = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 15px;
  img {
    width: 50px;
    height: 50px;
  }
  @media only screen and (max-width: 420px) {
    justify-content: center;
  }
`;
export const Devs = styled.div`
  width: 40%;
  color: #bbbbbb;
  transition: .2s ease;
  user-select: none;
  :hover {
    color: #ff5252;
  }
`;
export const DevsMedia = styled.div`
  img {
    width: 30px;
    height: 30px;
  }
`;
export const DevsLine = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media only screen and (max-width: 420px) {
    justify-content: space-between;
  }
`;
