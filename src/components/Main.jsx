import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <div>
      <MainStyle>
        <Container>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos, quisquam alias quae facere delectus vel distinctio
            dolor dolore repellat aspernatur iste laboriosam molestias, quasi
            temporibus, voluptatem voluptate velit odit ducimus?
          </p>
        </Container>
      </MainStyle>
    </div>
  );
};

export default Main;

const MainStyle = styled.main`
  background-color: #ddd;
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
