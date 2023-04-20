import React from 'react';
import { useState } from "react";
import styled from "styled-components";
import { breakpoints } from "../GlobalStyles";

const Enlarge = ({ src }) => {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleEnlargeClick = () => {
    setIsEnlarged(true);
  }

  const handleShrinkClick = () => {
    setIsEnlarged(false);
  }

  return (
    <div>
      <ImgDivMid
        src={src}
        style={{ display: isEnlarged ? "block" : "none" }}
        onClick={handleShrinkClick}
      />
      <ImgDiv
        src={src}
        style={{ display: isEnlarged ? "none" : "block" }}
        onClick={handleEnlargeClick}
      />
    </div>
  );
}

const ImgDiv = styled.img`
  width: 250px;
  height: 333px;
  margin-top: 25px;
  border: 2px solid orange;
  @media screen and (max-width: ${breakpoints.first}) and (min-width: ${breakpoints.second}) {
    width: 250px;
    height: 333px;
  }
  @media screen and (max-width: ${breakpoints.second}) and (min-width: 560px) {
    width: 200px;
    height: 275px;
  }
  @media screen and (max-width: 559px) and (min-width: ${breakpoints.phone}) {
    width: 150px;
    height: 225px;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    width: 150px;
    height: 225px;
  }
`;

const ImgDivMid = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  z-index: 100;
  object-fit: contain;
`;

export default Enlarge

