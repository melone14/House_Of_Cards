import React from "react";
import logo from "../../images/logo.png";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 500px;

    @media (max-width: 600px) {
      width: 300px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={logo} alt="Logo - House of Cards" />
    </HeaderWrapper>
  );
};

export default Header;
