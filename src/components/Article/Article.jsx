import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import theme from "../theme";
import ArticleCard from "../ReusableCards/Articlecard";

import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";

import IconButton from "@material-ui/core/IconButton";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArticleGroups from "./ArticleGroups";
import articles from "../Constants/Articles.js";

const newScience = articles.filter((article) => {
  return article.category === "Science and Society" && article.type === "new";
});

const oldScience = articles.filter((article) => {
  return article.category === "Science and Society" && article.type === "old";
});

const newCampus = articles.filter((article) => {
  return article.category === "Campus" && article.type === "new";
});

const oldCampus = articles.filter((article) => {
  return article.category === "Campus" && article.type === "old";
});

const newMiscellaneous = articles.filter((article) => {
  return article.category === "Miscellaneous" && article.type === "new";
});

const oldMiscellaneous = articles.filter((article) => {
  return article.category === "Miscellaneous" && article.type === "old";
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    margin: theme.spacing(2)
  }
}));

export default function Articles(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <ThemeProvider theme={theme}>
          <Typography
            className={classes.title}
            component="div"
            align="left"
            variant="h4"
          >
            Articles
          </Typography>
          <ArticleGroups
            category="Campus"
            new={newCampus}
            old={oldCampus}
            auth={props.auth}
          />
          <ArticleGroups
            category="Science and Society"
            new={newScience}
            old={oldScience}
            auth={props.auth}
          />
          <ArticleGroups
            category="Miscellaneous"
            new={newMiscellaneous}
            old={oldMiscellaneous}
          />
        </ThemeProvider>
      </Container>
    </React.Fragment>
  );
}
