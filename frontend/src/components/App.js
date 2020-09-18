import React, { useState, useEffect } from "react";
import Header from "./UI/Header.js";
import Search from "./UI/Search.js";
import CharacterCards from "./cards/CharacterCard";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1250px;
  padding: 20px;
  margin: auto;
`;

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      // http://localhost:3001
      let response = await fetch(`/characters/${query}`);
      let data = await response.json();
      setCharacters(data);
      setIsLoading(false);
    };

    fetchCharacters();
  }, [query]);

  return (
    <Container>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterCards characters={characters} isLoading={isLoading} />
    </Container>
  );
};

export default App;
