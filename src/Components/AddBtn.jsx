import React, { useState } from "react";
import { Container, Fab, makeStyles, Modal, Tooltip, TextField,MenuItem
,FormControlLabel,RadioGroup,Radio,FormLabel,Button,} from '@material-ui/core';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Alert from '@material-ui/lab';
import { AddSharp } from "@material-ui/icons";

const useStyles=makeStyles((theme)=>({
  fab:{
    position:"fixed",
    bottom:10,
    right:10
  },
  container:{
    width:500,
    height:550,
    backgroundColor:"#fff",
    position:"absolute",
    top:0,
    right:0,
    bottom:0,
    left:0,
    margin:"auto",
    [theme.breakpoints.down("sm")]:{
      width:"100vw",
      height:"100vh"

    }
  },
  form:{
    padding:theme.spacing(2),
  },
  item:{
    marginBottom:theme.spacing(3),
  }
  
}));

function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
}

const AddBtn=()=>{
  const [open,setOpen]=useState(false);
  const [openAlert,setopenAlert]=useState(false);
  const classes=useStyles()

  const openModal=()=>{
    setOpen(true);
  }

return (
  <>
  <Tooltip title="Add" aria-label="add"  >
 <Fab color="primary" aria-label="add" className={classes.fab}>
  <AddSharp onClick={openModal} />
</Fab>
</Tooltip>

<Modal open={open}>
<Container className={classes.container}>

 <form className={classes.form} autoComplete="off">
   <div className={classes.item}>
   <TextField 
   id="standard-basic" 
   label="Title" 
   size="small"
   style={{width:"100%"}}
   />
   </div>
   <div className={classes.item}>
   <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue="Tell your story"
          size="small"
          style={{width:"100%"}}
          variant="outlined"
        />
   </div>
   <div className={classes.item}>
      <TextField select label="visibility" value="Public">
         <MenuItem value="Public">Public</MenuItem>
         <MenuItem value="Private">Private</MenuItem>
         <MenuItem value="Unlisted">Unlisted</MenuItem>
      </TextField>
   </div>
   <div className={classes.item}>
   <FormLabel component="legend">Who can Comment ?</FormLabel>
  <RadioGroup>
    <FormControlLabel value="Everyone" control={<Radio size="small"/>} label="Everyone" />
    <FormControlLabel value="only friends" control={<Radio size="small" />} label="only friends" />
    <FormControlLabel value="only me" control={<Radio size="small" />} label="only me" />
    <FormControlLabel
      value="Custom"
      disabled
      control={<Radio size="small" />} 
      label="Custom (premium)"
    />
  </RadioGroup>
   </div>
   <div className={classes.item}>
      <Button variant="outlined" color="primary" style={{marginRight:20}} onClick={()=>setopenAlert(true)}>Create</Button>
      <Button variant="outlined" color="secondary" onClick={()=>setOpen(false)}>Cancel</Button>
   </div>
 </form>
</Container>
</Modal>
<Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Thanks you for submitting!
        </Alert>
      </Snackbar>
  </>
)
}

export default AddBtn;