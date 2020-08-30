import React from "react";
import Navbar from "./navabr";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";




import ReactImg from '../assets/images.jpg';
import NodeImg from '../assets/node.jpg';
import AngularImg from '../assets/angular-firebase.jpg';
import AngularImage from '../assets/angular.jpg';
import AngularMat from '../assets/download.jpg';


const useStyles=makeStyles({
    mainContainer:{
        background:"#233",
        height: "100%",
    },
    cardContainer:{
        maxWidth:345,
        margin:"5rem auto"
    }
})

const Projects = () => {
    const classes=useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center" >
        {/* project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="project1" image={AngularImg} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Fitness Tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 It's bascially a fitness tracker web application which have a connected database and proper 
                 authentication with firebase.it is fully functional app and have different modules like current training,
                 past training and what would you do in future.it has all the tracks and have proper authorization.
                 In this project i am using angular, angular material, and firebase for backend.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={()=>alert("available soon")}>get code</Button>
                <Button size="small" color="primary" onClick={()=>alert("on going!!")}>live demo</Button>
              </CardActions>
          </Card>
          </Grid>

             {/* project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="project1" image={ReactImg} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                 Monster App
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 It's basically a Api based application.In this i have used Reachjs for frontend 
                 and SAAS for styling.Here we have a search menu where you can just enter the name and will get
                 the full info of that particular monster.It is fully responsive web application.And For Images
                 I used another online api.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a href="https://github.com/sid0145/sid-monsters" style={{textDecoration:"none"}}>get code</a>
                </Button>
                <Button size="small" color="primary">
                  <a href="https://sid0145.github.io/sid-monsters/" style={{textDecoration:"none"}}> live demo</a></Button>
              </CardActions>
          </Card>
        </Grid>

                     {/* project 3 */}
                     <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="project1" image={NodeImg} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Chat App 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  It is a full duplex based web application.It was one of my best project for desktop browsers only.It is working in mobo
                  devices as well but it have some issue with it's responsivness.it is basically a chat room app
                  where a user has to enter it's name and room name. after that he or she can enter in a room and with 
                  the same room more than one people can join at the same time.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a href="https://github.com/sid0145/webSocket-chat-app" style={{textDecoration:"none"}}>get code</a>
                </Button>
                <Button size="small" color="primary"> 
                <a href="https://sidd-chat-app.herokuapp.com/" style={{textDecoration:"none"}}>live demo</a></Button>
              </CardActions>
          </Card>
        </Grid>

                     {/* project 4 */}
                     <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="project1" image={AngularImage} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  PhoneBook App
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 It is basically a fully functional phnebook app. where you can add new contact, delete or edit.
                 A authorize user can only make changes on it's contact.I used NoSql database with mongoose schema.
                 I used frontend validation as well as backend validation with proper authentication in this app.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a href="https://github.com/sid0145/phonebook" style={{textDecoration:"none"}}>get code</a>
                </Button>
              </CardActions>
          </Card>
        </Grid>

             {/* project 5 */}
             <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="project1" image={AngularMat} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Weather App
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 A web Application which have the live weather data according to there city.here we have 
                 a input feild where user have to enter a valid city.it has a proper validation.Here i used openweathermap
                 api to fetch the current city weather data.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a href="https://github.com/sid0145/weather_app" style={{textDecoration:"none"}}>get code</a>
                </Button>
              </CardActions>

          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
