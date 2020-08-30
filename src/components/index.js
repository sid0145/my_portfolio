import React from "react";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./navabr";
import Header from "./header";

//css from main
const useStyles = makeStyles({
  particlesStyle: {
    position: "absolute",
    opacity: "0.3",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particlesStyle}
        params={{
          particles: {
            number: {
              value: 45,
              destiny: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "tomato",
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      />
    </>
  );
};

export default Home;
