import React from 'react';


import {makeStyles } from '@material-ui/core/styles';

import LinkedIn from '@material-ui/icons/LinkedIn';
import Instagram from '@material-ui/icons/Instagram';
import Facebook from '@material-ui/icons/Facebook';

const useStyles=makeStyles((theme)=>({
    main:{
        height:"40px",
        display:"flex",
        justifyContent:"space-around"
    },
 
  root:{

      "& .MuiBottomNavigationAction-root":{
             minWidth: 0,
             maxWidth: 400
      },
      " & .MuiSvgIcon-root":{
          fill:"tan",
          "&:hover":{
              fill:"tan"
          }
      }
  }
}));

const Footer = () => {
    const classes=useStyles();
    return (
        <div width="100%" style={{background:" #222"}}  className={classes.main}>
            <div>
            <a href="https://www.linkedin.com/in/siddhesh-tripathi-cse/" className={classes.root} style={{ padding: "auto"}}>
             <LinkedIn />
            </a>
            </div>
            
            <div>
            <a href="https://www.instagram.com/tripathi_siddhesh" className={classes.root} style={{ padding:"auto"}}>
            <Instagram />
            </a>
            </div>
           
        <div>
            <a href="https://www.facebook.com/profile.php?id=100008013757699" className={classes.root} style={{ padding:"auto"}}>
            <Facebook/>
            </a>
            </div>

        </div>
    )
}

export default Footer
