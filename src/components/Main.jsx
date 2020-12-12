import React from "react";
import styled from "styled-components";
import About from "../components/pages/About";
import "../App.css";

const Main = (props) => {
  return (
    <div>
      <MainStyle className="target">
        <Container>
          <h1>{props.mainText}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, cumque, deserunt labore iusto hic odio eligendi
            mollitia soluta dignissimos ex nemo aliquam excepturi autem
            quibusdam voluptate? Neque minus numquam aut libero sunt laboriosam
            sed, error consequuntur commodi quae deleniti repudiandae nisi
            reiciendis eos suscipit? Sint quam magnam earum reiciendis
            explicabo?
          </p>
        </Container>
      </MainStyle>
    </div>
  );
};

export default Main;

const MainStyle = styled.main`
  text-align: center;
  background-color: #efefef;
  line-height: 24px;
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
