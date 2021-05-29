import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  des: {
    display: "flex"
  }
}));

export default function FullArticle() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" align="left" variant="h4">
          THE BIZARRE TALE OF NIT-R AND POWER CUTS
        </Typography>
        <Divider variant="middle" />
        <Grid container direction="row">
          <Typography color="textSecondary" variant="body2">
            Anonymous
          </Typography>
          <Grid
            container
            justify="flex-end"
            alignItems="flex-end"
            className={classes.root}
          >
            <Fab size="small" color="primary" aria-label="edit">
              <EditIcon />
            </Fab>
            <Fab size="small" color="secondary" aria-label="edit">
              <DeleteIcon />
            </Fab>
          </Grid>
        </Grid>
        <Divider variant="middle" />

        <Typography paragraph>
          29th August, midnight. In this peak hour of productivity, something
          unforeseen created huge vocal outbursts that echoed through almost the
          entirety of student residences- power cut. For approximately 2.5 hours
          the entire NIT lived in dark, in the unbearable heat of the hostels
          with all the plans and scheduled work being postponed indefinitely.
          Although this wasn’t the first time the students had faced the
          obstruction of their lights, fans and the internet going off suddenly,
          a lot of people raged on this very duration. Even sleeping had become
          a difficult task until it was late into 3:30 AM when everyone took a
          sigh of relief and eased themselves with the cool breeze from the fan.
        </Typography>
        <Typography paragraph>
          Perhaps sudden power cuts have become a way of life here in NITR. The
          veterans in their fifth year have gone through these inconveniences
          innumerable times and now the freshers are just starting to inculcate
          this in their weekly schedule. There’s a long way to go. Still, no one
          exactly anticipates power cuts- it just happens. And we have to deal
          with it. Although a few times could be overlooked, it is getting
          tedious to deal with power cuts this time around, mainly when it’s
          raining outside and to be fair, it’s pretty evident that it’s majorly
          during rainfall when we lose electricity. And during this time of the
          year in particular, we’re experiencing rain every other day. Nowadays
          we don’t have power for a long stretch of hours. To make matters
          worse, we’re having multiple power cuts on some days too, especially
          during the darker hours of the day. This inconvenience is something
          avoidable, though.
        </Typography>
        <Typography paragraph>
          It is fair to say that this issue is something the institute is
          accountable to inform the students about beforehand. Instead of
          regretting the darkness, heat and humidity when it’s too late, it
          would be much better if we are informed about this beforehand. After
          all, in the past year we were informed about the duration of
          maintenance of the power supply system well before the power cuts and
          that made it easier for us to accommodate ourselves in that span of
          having no power. It’s safe to say that after so many power cuts have
          taken place on such short notice and so frequently too, we all deserve
          to know the roots of the problem and the time until when this problem
          will persist. We pride ourselves on being an engineering institute and
          I’m hopeful that this problem will be eradicated soon. It has happened
          for far too long to not meet the eye.
        </Typography>
        <Typography paragraph>
          We deserve to know if any measures are being taken to reduce the
          impact of rainfall and thunderstrokes on the power supply or if
          there’s anything being done at all to reduce the frequent power cuts
          from happening. This may seem very petty to bring up, but this does
          affect the image we portray out there. There are students from many,
          many countries studying here including visitors and these abrupt cuts
          – to some extent - goes against the reputation our institute and the
          faculties have built since 1961. NITR, after all, is among the major
          engineering colleges out there so we must live up to the hype too.
          There might be some serious faults in the system and that’s totally
          fine too, but there must be an attempt on improving it and the
          students must be duly informed about this. We as students do need to
          manage our time better and for that we should get to know about the
          circumstances under which electricity can’t provided to the institute
          and when we should be wary about the power cuts taking place.
        </Typography>
      </Container>
    </React.Fragment>
  );
}
