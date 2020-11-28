import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Form = () => {
  const classes = useStyles();

  return (
    <FormStyle>
      <TitleStyle>お問い合わせ</TitleStyle>
      <ContactFormStyle>
        <label htmlFor="">
          メールアドレス
          <input type="email" name="email" />
        </label>
        <label htmlFor="">
          お問い合わせ内容
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </label>
        <div className="button">
          <div className={classes.root}>
            <Button variant="outlined">送信</Button>
          </div>
        </div>
      </ContactFormStyle>
    </FormStyle>
  );
};

export default Form;

const FormStyle = styled.div`
  height: 78vh;
`;

const TitleStyle = styled.h2`
  margin-top: 30px;
  text-align: center;
`;

const ContactFormStyle = styled.form`
  width: 500px;
  height: 400px;
  border: 1px solid #333;
  border-radius: 10px;
  /* margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 60px; */
  margin: 60px auto;
  margin-top: 10px;
  padding: 30px;
  & label {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    width: 70%;
    margin-top: 30px;
  }

  & input {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 4px;
    height: 24px;
    border: 1px solid #333;
  }

  & textarea {
    width: 100%;
    margin: 0 auto;
    border-radius: 4px;
    margin-bottom: 35px;
  }

  .button {
    text-align: center;
  }
`;
