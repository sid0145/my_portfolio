import React from "react";
import Navbar from "./navabr";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardActions
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import FullStack from '../assets/fullstack.png';
import Digital from '../assets/digital.jpg';


const useStyles=makeStyles({
    mainContainer:{
        background:"#233",
        height: "100%",
    },
    cardContainer:{
        maxWidth:345,
        margin:"5rem auto"
    },
    resume:{
      textDecoration:'none',
      color:"tomato",
      fontSize:'20px',
      cursor:"pointer",
    }
})

const Resume= () => {
    const classes=useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center" >
        {/* Resume*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              {/* <CardMedia component="img" alt="project1" image={MyResume} style={{height:"20px"}}/> */}
              <CardContent>
                <Typography gutterBottom variant="h5">
                 My Resume
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Click the down arrow to see or download my resume.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <a className={classes.resume} 
                href="https://drive.google.com/file/d/1G1On6L-nGuEUBJSyt0DTit-zxjVMKNd2/view?usp=sharing"
                ><ArrowDownwardIcon /> </a>
              </CardActions>
          </Card>
          </Grid>
      </Grid>
      <br />

      <h1 style={{textAlign:"center", color:"tomato", textTransform:"uppercase"}}>checkout my certificates</h1>
      <Grid container justify="center" >
        {/* cerificate 1*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
            <CardMedia component="img" alt="project1" image={FullStack}/> 
              <CardContent>
                <Typography gutterBottom variant="h5">
                 FullStack Development from Upgrad
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
              It was my first certificate in the ground of web development.In this journey i learned all basics
              and some advanced concepts of web development.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <a className={classes.resume} 
                href="https://drive.google.com/file/d/1jyZ6yZcmUVAEQUpwskjqI1s682oWTxED/view?usp=sharing"
                ><ArrowDownwardIcon /> </a>
              </CardActions>
          </Card>
          </Grid>
             {/* cerificate 2*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
            <CardMedia component="img" alt="project1" image={FullStack}/> 
              <CardContent>
                <Typography gutterBottom variant="h5">
                 FullStack Development from Board Infinity
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                I gained this cetificate by advancing my skills in the field of web develpment.
                I developed some projects during this journey.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <a className={classes.resume} 
                href="https://drive.google.com/file/d/1jyZ6yZcmUVAEQUpwskjqI1s682oWTxED/view?usp=sharing"
                ><ArrowDownwardIcon /> </a>
              </CardActions>
          </Card>
          </Grid>

             {/* cerificate 3*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
            <CardMedia component="img" alt="project1" image={Digital}/> 
              <CardContent>
                <Typography gutterBottom variant="h5">
                Digital Marketing  from Board Infinity
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
              Digital marketing is the part of web development. so i learned this and gained some knowledge 
              about SEO and ADS and how are they working.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <a className={classes.resume} 
                href="https://drive.google.com/file/d/12iW3HBjl0Xf9aWZk8ifg6UV-0XKoVzwN/view?usp=sharing"
                ><ArrowDownwardIcon /> </a>
              </CardActions>
          </Card>
          </Grid>
                {/* cerificate 3*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
            <CardMedia component="img" alt="project1" image={Digital}/> 
              <CardContent>
                <Typography gutterBottom variant="h5">
                Angular from LCO
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
              This was the best course.which i have done during the lockdown.Here i created three basic and one 
              fully advanced project.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <a className={classes.resume} 
                href="https://drive.google.com/file/d/12iW3HBjl0Xf9aWZk8ifg6UV-0XKoVzwN/view?usp=sharing"
                ><ArrowDownwardIcon /> </a>
              </CardActions>
          </Card>
          </Grid>
      </Grid>
    </Box>
  );
};

export default Resume;
