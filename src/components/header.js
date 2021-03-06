import React from 'react';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Avatar,
    Typography,
    Grid
} from '@material-ui/core';
import avatar from '../avatar.png';


//css header styles
const useStyles= makeStyles(theme=>({
 avatar:{
     width: theme.spacing(15),
     height: theme.spacing(15),
     margin :theme.spacing(1)
 },
 title:{
    color:'tomato'
 },
 subtitle:{
   color:'tan',
   marginBottm: '3rem'
 },
 typedContainer:{
     position: "absolute",
     top: "50%",
     left: "50%",
     transform: "translate(-50%, -50%)",
     width: '100vw',
     textAlign: 'center',
     zIndex: 1
 }
}));

const Header = () => {
    const classes =useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
          <Avatar className={classes.avatar} src={avatar} alt="siddhesh tripathi"/>  
            </Grid>
          <Typography variant="h4" className={classes.title}>
             <Typed strings={["Siddhesh Tripathi"]} typeSpeed={40}/> 
          </Typography>
          <br />
          <Typography variant="h5" className={classes.subtitle}>
             <Typed strings={["Web Developer", "Angular Developer","MERN Stack Developer"]} typeSpeed={40} backSpeed={60} loop/> 
          </Typography>
        </Box>
    )
}

export default Header;
