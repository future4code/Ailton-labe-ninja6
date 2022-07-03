import styled from "styled-components";

export const MinCartContainer = styled.div`
  position: fixed;
  width: 320px;
  height: 300px;
  border:2px solid #303030;
  border-radius: 12px;
  background-color: #303030;
  color:#fff;
  right:5%;
  top:90px;
  padding: 4px;
  overflow: auto;
  > p {
    display: flex;
    justify-content: center;
    min-height: 80%;
  }
`
export const CartCard2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
  padding: 8px 12px;
  align-items: center;
  background-color: #fff;
  box-shadow: 2px 2px #ff5252;
  color: black;
  p{
    width: 50%;
  }
  > img {
    width: 10%;
  }
`
export const ServiceCart2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 8px;
  overflow: auto;
  height: 80%;
  padding: 4px 12px;
  background-color:#303030;
  ::-webkit-scrollbar {
    background-color: #303030;
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color:#ff5252;
    border-radius: 12px;
  }
`
export const FooterCart2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height:20%;
  padding: 12px;
  background-color: #303030;
  color:#fff
`