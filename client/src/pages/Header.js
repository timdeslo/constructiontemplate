import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { breakpoints } from "../GlobalStyles";

const Header = () => {
  return (
    <HeaderDiv>
      <Links to="/constructiontemplate">
        <H1>Les Constructions S.A.</H1>
      </Links>
      <HeaderRight>
        <Links to="/about">
          <P>A propos</P>
        </Links>
        <Links to="contact">
          <P>Nous Joindre</P>
        </Links>
      </HeaderRight>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  background-color: #202020;
  border-bottom: 2px solid black;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const H1 = styled.h2`
  padding-left: 50px;
  color: white;
  :hover& {
  color: orange;
}
@media screen and (max-width: ${breakpoints.first}) and (min-width: ${breakpoints.second}) {
  padding-left: 50px;
      }
      @media screen and (max-width: ${breakpoints.second}) and (min-width: 560px) {
        padding-left: 50px;
    }
    @media screen and (max-width: 559px) and (min-width: ${breakpoints.phone}) {
      padding-left: 30px;
    }
    @media screen and (max-width: ${breakpoints.phone}) {
      padding-left: 30px;
      font-size: 20px;
    }
`;

const Links = styled(Link)`
text-decoration: none;
`;

const HeaderRight = styled.div`
display: flex;
gap: 40px;
padding-right: 50px;
@media screen and (max-width: ${breakpoints.first}) and (min-width: ${breakpoints.second}) {
  gap: 40px;
padding-right: 50px;
      }
      @media screen and (max-width: ${breakpoints.second}) and (min-width: 560px) {
        padding-right: 10px;
      gap: 10px;
    }
    @media screen and (max-width: 559px) and (min-width: ${breakpoints.phone}) {
      padding-right: 10px;
      gap: 10px;
    }
    @media screen and (max-width: ${breakpoints.phone}) {
      padding-right: 10px;
      gap: 10px;
    }
`;

const P = styled.p`
color: white;
font-size: 22px;
:hover& {
  color: orange;
}
@media screen and (max-width: ${breakpoints.first}) and (min-width: ${breakpoints.second}) {
  font-size: 22px;
}
@media screen and (max-width: ${breakpoints.second}) and (min-width: 560px) {
  font-size: 15px;
}
@media screen and (max-width: 559px) and (min-width: ${breakpoints.phone}) {
  font-size: 15px;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    font-size: 15px;
  }
`;
export default Header;
