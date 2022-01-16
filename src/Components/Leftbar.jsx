import React from "react";
import { colors, Container, makeStyles, Typography} from '@material-ui/core';
import { AddShoppingCart, Apps, CameraAlt, Collections, ExitToApp, Home, List, Person, Settings, VideocamSharp, } from "@material-ui/icons";


const useStyles=makeStyles((theme)=>({
  container:{
    position:"sticky",
    top:0,
    paddingTop:theme.spacing(10),
    height:"100vh",
    backgroundColor:theme.palette.primary.main,
    color:"#fff",
    [theme.breakpoints.up("sm")]:{
      color:"grey",
      backgroundColor:"white",
      border:"1px solid #ece7e7",
      cursor:"pointer"
    }
  },
  item:{
    display:"flex",
    alignItems:"center",
    marginBottom:theme.spacing(4),
    [theme.breakpoints.up("sm")]:{
    marginBottom:theme.spacing(4),
    }
  },
   icons:{
      marginRight:theme.spacing(1),
      [theme.breakpoints.up("sm")]:{
        fontSize:"18px",
      }
   },
  text:{
    fontWeight:"500",
    [theme.breakpoints.down("sm")]:{
      display:"none"
    }
  }

}));

const Leftbar=()=>{
  const classes=useStyles()
return (
  <>
    <Container className={classes.container}>
     <div className={classes.item}>
         <Home className={classes.icons}/>
         <Typography className={classes.text}>Homepage</Typography>
     </div>
     <div className={classes.item}>
         <Person className={classes.icons}/>
         <Typography className={classes.text}>Friends</Typography>
     </div>
     <div className={classes.item}>
         <List className={classes.icons}/>
         <Typography className={classes.text}>Lists</Typography>
     </div>
     <div className={classes.item}>
         <CameraAlt className={classes.icons}/>
         <Typography className={classes.text}>Camera</Typography>
     </div>
     <div className={classes.item}>
         <VideocamSharp className={classes.icons}/>
         <Typography className={classes.text}>Videos</Typography>
     </div>
     <div className={classes.item}>
         <Apps className={classes.icons}/>
         <Typography className={classes.text}>Apps</Typography>
     </div>
     <div className={classes.item}>
         <Collections className={classes.icons}/>
         <Typography className={classes.text}>Collections</Typography>
     </div>
     <div className={classes.item}>
         <AddShoppingCart className={classes.icons}/>
         <Typography className={classes.text}>Market Place</Typography>
     </div>
     <div className={classes.item}>
         <Settings className={classes.icons}/>
         <Typography className={classes.text}>Settings</Typography>
     </div>
     <div className={classes.item}>
         <ExitToApp className={classes.icons}/>
         <Typography className={classes.text}>Logout</Typography>
     </div>
  
    </Container>
  </>
)
}

export default Leftbar;