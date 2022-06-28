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
`;
