// File: StyledDiv.js
import styled from "styled-components";
import { CardImg } from "../Movies/MovieCard/MovieCard.style";

export const MovieContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 48px 24px;
  padding: 8px 12px;
  height: 100%;
  min-height: 100vh;
  gap: 16px;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const MovieImgSingle = styled(CardImg)`
  max-height: 100%;
  width: auto;
`;
