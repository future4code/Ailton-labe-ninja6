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
  /* flex-direction: column; */
`

export const ButtonLandingPage = styled.button`
width: 300px;
height: 50px;
border-radius: 32px;
color: white;
background-color: #ff5252;
cursor: pointer;
border: none;
transition: 0.4s;
font-size: 1.5rem;
box-shadow: 4px 4px #303030;
:hover{
    background-color: #303030;
    box-shadow: 4px 4px #ff5252;
}
  `

export const ButtonsSection = styled.div`
display: flex;
height: 100%;
width: 100%;
background-color: rgba(0, 0, 0, 0.45);
  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
  }    
   @media only screen and (min-width: 421px) and  (max-width: 820px) {
    display: flex;
    flex-direction: column;
}
`

export const TextSection = styled.h1`
background-color: #303030;
color: #fff;
font-weight: 400;
border-radius: 12px;
box-shadow: 4px 4px #ff5252;
transition: .4s ease;
text-align: center;
font-size: 2rem;
:hover {
  background-color: white;
  color: #303030;
}
padding: 2px 8px;
  @media only screen and (max-width: 420px) {
  font-size: 1.5rem;
  margin-bottom: 0px;
}
@media only screen and (min-width: 421px) and  (max-width: 820px) {
  font-size: 1.5rem;
  margin-bottom: 0px;
}
`

export const ContainerItems = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100%;
padding: 10%;
justify-content: space-evenly;
`