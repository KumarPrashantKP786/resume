import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { RenderSectionHeading } from "../common/commonComponent";
import { useStyles } from "./BodyStyles";

import image1 from "../../images/tictac.png";
import image2 from "../../images/notepad.jpg";
import image4 from "../../images/AI.jpg";
import image3 from "../../images/github.png";
import image5 from "../../images/5-8.jpg";
import image6 from "../../images/5-9.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export default function Portfolio() {
  const classes = useStyles();

  const portfolioData = [
    { url: image1, title: " Tic-Tac-Toe ", link: "https://kumarprashantkp786.github.io/TIC-TAC-TOE/" },
    { url: image2, title: " Todo-List App", link: "https://kumarprashantkp786.github.io/TodoListApp/" },
    { url: image3, title: " Github profile API ", link: "https://kumarprashantkp786.github.io/github_API_Profile_searcher/" },
    { url: image4, title: " website php ", link: "https://studyfunduniya.000webhostapp.com/" },
    { url: image5, title: " Portfolio ", link: "https://studyfunduniya.000webhostapp.com/konnexions2.html" },
    { url: image6, title: " My Resume ", link: "https://drive.google.com/file/d/1W7md8DPy1LhXgpokRBA6pAo3cwbkR49D/view?usp=sharing" },
  ];

  return (
    <Box className={classes.sectionDark} id='Portfolio'>
      <ScrollAnimation animateIn='fadeIn'>
        <Grid
          container
          style={{
            displa: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}>
          <Grid item xs={12} sm={8}>
            {RenderSectionHeading({
              smallText: "Portfolio",
              heading: "Let's See My Work",
              alignCenter: true,
            })}
          </Grid>
        </Grid>
        {/* imge section  */}

        <Container maxWidth='xl'>
          <Grid container spacing={2}>
            {portfolioData.map((item, i) => (
              <Grid item xs={6} sm={6} lg={4} key={i}>
                <Box className={classes.imageContainer}>
                  <img
                    href={item.link}
                    src={item.url}
                    alt={item.title}
                    className={classes.responsiveImg}
                  />
                  <Box className={classes.imageOverlay}>
                    <Typography className={classes.overlayTitle}>
                      {item.title}
                    </Typography>

                    <Button variant='contained'><a href={item.link}>Visit</a></Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
