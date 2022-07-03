import styled from "styled-components";
import WallPaperSamurai from "../img/wallpapersamurais2.png";

export const Container = styled.div`
  width: 100%;
  height: 82vh;
  background-image: url(${WallPaperSamurai});
  /* background-attachment: fixed; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
   display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

`

export const ButtonLandingPage = styled.button`
width: 300px;
height: 50px;
border-radius: 30px;
/* border: 2px solid #ff5252; */
color: white;
background-color: #ff5252;
cursor: pointer;
transition: 0.2s;
font-size: 1.25rem;
:hover{
    background-color: #303030;
    border: 2px solid #ff5252;
}
  `

export const ButtonsSection = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
height: 100%;
width: 100%;
background-color: rgba(0, 0, 0, 0.4);
`

export const TextSection = styled.div`
margin-bottom: 25%;
`