import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Article from "./Article";
import Squiggles from "./squiggles";
import Editorial from "./editorials";
import Query from "./query";
import Latest from "./Latest";
import FullArticle from "./FullArticle";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "yellow"
  }
}));

export default function ArticlePage() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={8}>
              <FullArticle />
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <Squiggles />
              </Paper>
              <Paper className={classes.paper}>
                <Editorial />
              </Paper>
              <Query />
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}
