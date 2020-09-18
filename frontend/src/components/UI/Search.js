import React, { useState } from "react";
import styled from "styled-components";

const NavWrapper = styled.nav`
  height: 100px;

  input {
    color: #7b7d7e;
    font-family: "Montserrat", sans-serif;
    display: block;
    padding: 1rem;
    font-size: 20px;
    border: 0;
    border-radius: 0.5rem;
    width: 60%;
    margin: auto;
    outline: none;

    @media (max-width: 600px) {
      width: 95%;
    }
  }
`;

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e);
    getQuery(e);
  };

  return (
    <NavWrapper>
      <form>
        <input
          type="text"
          className="input"
          placeholder="Search characters"
          value={text}
          onChange={(e) => handleChange(e.target.value)}
          autoFocus
        />
      </form>
    </NavWrapper>
  );
};

export default Search;
