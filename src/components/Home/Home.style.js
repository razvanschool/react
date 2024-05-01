import { WHITE_NEUTRAL } from "../../constants/color";
import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 48px 24px;
  padding: 8px 12px;
  background: ${WHITE_NEUTRAL};
  height: 100%;
  min-height: 100vh;
  gap: 16px;
  flex-wrap: wrap;
`;
