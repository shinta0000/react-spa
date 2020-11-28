import React from "react";
import styled from "styled-components";
import CardImage from "./assets/sky-5114501_1920.jpg";
import { makeStyles } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 270,
  },
  media: {
    height: 180,
  },
});

const Cards = () => {
  const classes = useStyles();

  return (
    <CardStyle>
      <div className="container">
        <div className="cards">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={CardImage}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={CardImage}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </CardStyle>
  );
};

export default Cards;

const CardStyle = styled.div`
  margin: 50px 0;

  .container {
    width: 80%;
    margin: 0 auto;
  }

  .cards {
    display: flex;
    justify-content: space-around;
  }
`;
