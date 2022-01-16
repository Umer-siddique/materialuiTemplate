import React from 'react';
import './index.css';
import { Grid, makeStyles} from '@material-ui/core';
import { theme } from './Theme';
import Navbar from './Components/Navbar';
import Feed from './Components/Feed';
import Leftbar from './Components/Leftbar';
import Rightbar from './Components/Rightbar';
import AddBtn from './Components/AddBtn';


const useStyles=makeStyles((theme)=>({
  right:{
    [theme.breakpoints.down("sm")]:{
      display:"none",
    }
  }
}));

const App=()=>{
  const classes=useStyles()
return (
  <>
  <div>
 <Navbar/>
 <Grid container>
    <Grid item sm={2} xs={2}> <Leftbar/></Grid>
    <Grid item sm={7} xs={10}> <Feed/></Grid>
    <Grid item sm={3} className={classes.right}> <Rightbar/></Grid>
 </Grid>
 <AddBtn/>
 </div>
  </>
)
}

export default App;