import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import EditorialCard from "../ReusableCards/EditorialCard";
import theme from "../theme";
import home from "../Constants/Home";

const latest = home.filter((article) => {
  return article.category === "latest";
});

function articleCard(trendingArticle) {
  return (
    <Grid item xs={12} sm={6}>
      <EditorialCard
        img={trendingArticle.imageUrl}
        title={trendingArticle.title}
        desc={trendingArticle.desc}
      />
    </Grid>
  );
}

export default function Latest() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <ThemeProvider theme={theme}>
          <Typography
            style={{
              fontweight: "bold",
              margin: theme.spacing(2),
              marginTop: theme.spacing(4)
            }}
            component="div"
            align="left"
            variant="h4"
          >
            Latest
          </Typography>
          <Grid container spacing={2}>
            {latest.map(articleCard)}
          </Grid>
        </ThemeProvider>
      </Container>
    </React.Fragment>
  );
}
