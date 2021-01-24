import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 300,
      minWidth: 200,
      margin: "auto",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
      backgroundColor: "#eee",
    },
    header: {
      paddingBottom: 10,
    },
  })
);

export default function ReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" className={classes.header}>
          Item 1
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to basket">
          <AddCircleOutlineIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
