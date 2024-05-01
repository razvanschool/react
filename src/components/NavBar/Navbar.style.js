import styled from "styled-components";
import { WHITE_NEUTRAL, DARK_GREEN } from "../../../src/constants/color";

export const Title = styled.h1`
  color: ${WHITE_NEUTRAL};
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  vertical-align: middle;
  background: green;
  color: white;
  width: 100%;
  height: 60px;
  position: relative;
`;

export const Link = styled.p`
  text-decoration: none;
  cursor: pointer;
  color: ${WHITE_NEUTRAL};
  padding: 8px 16px;

  @media screen and (max-width: 820px) {
    color: ${DARK_GREEN};
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${WHITE_NEUTRAL};
  color: ${DARK_GREEN};
  width: 200px;
  position: absolute;
  top: 60px;
  right: 0;
  display: none;

  @media screen and (max-width: 820px) {
    display: block;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  color: black;
  width: 100%;
`;

export const LinkContainerDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const ButtonDropdown = styled.button`
  width: 100px;
  height: 40px;
  background: ${DARK_GREEN};
  color: ${WHITE_NEUTRAL};
  display: none;

  @media screen and (max-width: 820px) {
    display: block;
  }
`;
