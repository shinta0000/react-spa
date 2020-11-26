import React from "react";
import styled from "styled-components";
import About from "../components/pages/About";

const Main = (props) => {
  return (
    <div>
      <MainStyle>
        <Container>
          <p>
            {props.mainText} <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi at
            ducimus veritatis iusto repellendus? Harum autem totam animi
            suscipit accusamus.
          </p>
        </Container>
      </MainStyle>
    </div>
  );
};

export default Main;

const MainStyle = styled.main`
  background-color: #efefef;
  height: 80vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
  & p {
    display: flex;
    align-items: center;
  }
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;
