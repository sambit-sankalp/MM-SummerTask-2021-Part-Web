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
import home from "../Constants/Home";

const trending = home.filter((article) => {
  return article.category === "trending";
});

function articleCard(trendingArticle) {
  return (
    <Grid item xs={12} sm={4}>
      <ArticleCard
        img={trendingArticle.imageUrl}
        title={trendingArticle.title}
        desc={trendingArticle.desc}
      />
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Articles() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <ThemeProvider theme={theme}>
          <Typography
            style={{ fontweight: "bolder", margin: theme.spacing(2) }}
            component="div"
            align="left"
            variant="h4"
          >
            Trending
          </Typography>
          <div className={classes.root}>
            <Grid container spacing={2}>
              {trending.map(articleCard)}
            </Grid>
          </div>
        </ThemeProvider>
      </Container>
    </React.Fragment>
  );
}
