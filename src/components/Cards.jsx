import React from "react";
import styled from "styled-components";
import CardItem from "./CardItem";

const Cards = () => {
  return (
    <CardsStyle>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </CardsStyle>
  );
};

export default Cards;

const CardsStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
