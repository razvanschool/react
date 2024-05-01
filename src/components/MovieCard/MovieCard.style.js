import { DARK_GREEN, WHITE_NEUTRAL } from "./../../constants/color";
import styled from "styled-components";

export const Card = styled.div`
  background: ${DARK_GREEN};
  color: ${WHITE_NEUTRAL};
  width: 340px;
  height: auto;
  padding: 4px 8px;
  display: flex;
  flex-direction: column;
`;

export const CardImgContainer = styled.div``;

export const CardImg = styled.img`
  width: 100%;
  max-height: 300px;
  height: 100%;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1``;

export const Text = styled.p``;

export const UperText = styled.span`
  text-transform: uppercase;
  text-decoration: solid;
`;
