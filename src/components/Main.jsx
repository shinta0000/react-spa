import React from "react";
import styled from "styled-components";
import About from "../components/pages/About";
import "../App.css";

const Main = (props) => {
  return (
    <div>
      <MainStyle className={props.check === "about" ? "about" : "home"}>
        <Container>
          <h1>{props.mainText}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            enim nam consectetur provident consequatur sequi! Obcaecati
            accusantium corrupti tempore facere. Dicta iure possimus voluptate,
            fugiat beatae perferendis dolore, quisquam corporis laborum harum
            vel obcaecati corrupti, tempore quam natus! Nisi, consequatur?
            Consequuntur quidem aliquam odit amet ipsum sequi iusto aspernatur
            earum!
          </p>
        </Container>
      </MainStyle>
    </div>
  );
};

export default Main;

const MainStyle = styled.main`
  text-align: center;
  line-height: 24px;
  background-color: #efefef;
  height: 600px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 500px;
  width: 100%;
  color: white;
  background-position: bottom;
  h1 {
    text-align: center;
    margin-bottom: 50px;
  }
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;
