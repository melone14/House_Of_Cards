import React from "react";
import CharacterItem from "./CharacterItem.js";
import Loader from "../UI/Loader.js";
import styled from "styled-components";

const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const CharacterCards = ({ characters, isLoading }) => {
  return isLoading ? (
    <Loader />
  ) : (
    <CardsContainer>
      {characters.map((character) => (
        <CharacterItem key={character._id} character={character} />
      ))}
    </CardsContainer>
  );
};

export default CharacterCards;
