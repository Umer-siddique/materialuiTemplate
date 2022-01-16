import React, {useState}from "react";
import { Container, makeStyles} from '@material-ui/core';
import Post from "./Post";
import CardData from './CardData';

const useStyles=makeStyles((theme)=>({
  container:{
    paddingTop:theme.spacing(10),
  }
}));

const Feed=()=>{
  const [Data, setData]=useState(CardData);
  const classes=useStyles()
return (
  <>
 <Container className={classes.container}>
   {
      Data.map((currElem,indx)=>{
          return <Post
                  key={indx}
                  {...currElem}
                  />
      })
   }
 </Container>
  </>
)
}

export default Feed;