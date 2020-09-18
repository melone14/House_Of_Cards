import React from "react";
import styled from "styled-components";
import filmweb from "../../images/filmweb.jpg";

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const Card = styled.div`
  cursor: pointer;
  background-color: transparent;
  height: 350px;
  perspective: 1000px;

  h1 {
    font-size: 25px;
    font-family: "Montserrat", sans-serif;
  }

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }

  hr {
    color: white;
    margin: 10px auto;
    width: 80%;
    border: 1.05px solid white;
    border-radius: 50%;
  }

  li {
    list-style: none;
    padding: 10px;
    margin: 0 auto;
    width: 90%;
    font-size: 15px;
  }

  &:hover ${CardInner} {
    transform: rotateY(180deg);
  }
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  background-color: #707274;
  color: #f2faff;
  padding: 20px;
  transform: rotateY(180deg);
  border: 0px solid white;
  border-radius: 5%;
`;

const FilmwebBtn = styled.a`
  display: block;
  width: 60%;
  height: 40px;
  margin: 20px auto;
  border: 0 solid white;
  border-radius: 5px;
  background: url(${filmweb}) no-repeat center center/cover;
  outline: none;
  cursor: pointer;
  transition: all 0.25s;
  &:hover {
    opacity: 0.8;
    transform: scale(1.025, 1.025);
  }
`;

const CharacterItem = ({ character }) => {
  return (
    <Card>
      <CardInner>
        <CardFront>
          <img src={character.img} alt={character.name} />
        </CardFront>
        <CardBack>
          <h1>{character.name}</h1>
          <hr />
          <ul>
            <li>
              <strong>{character.isFemale ? "Actress: " : "Actor: "}</strong>
              {character.actor_name}
            </li>
            <li>
              <strong>Seasons: </strong>
              {character.seasons}
            </li>
            <li>
              <strong>Something: </strong>something
            </li>
          </ul>
          <FilmwebBtn
            href={character.filmweb_link}
            className="filmweb-btn"
            target="_blank"
            rel="noopener noreferrer"
          ></FilmwebBtn>
        </CardBack>
      </CardInner>
    </Card>
  );
};

export default CharacterItem;
