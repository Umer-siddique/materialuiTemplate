import React, { useState } from 'react';
import { alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Mail, Notifications, Search } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    logoLg: {
        display: "none",
        [theme.breakpoints.up('sm')]: {
            display: "block"
        }
    },
    logoSm: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: "none"
        }
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },

    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius:theme.shape.borderRadius,
        width:"50%",
       
    },
    input:{
        color:"#fff",
        marginLeft:theme.spacing(1)
    },
     icons:{
         display:"flex",
         alignItems:"center",
         [theme.breakpoints.down("sm")]:{
            display:"none"
        }
        
     },
     badge:{
        marginRight:theme.spacing(2)
     },
     searchButton:{
         marginRight:theme.spacing(2),
         [theme.breakpoints.up("sm")]:{
             display:"none"
         }
     }

}));

const Navbar = () => {
    const [open,setOpen]=useState(false);
    const classes = useStyles({open});
    return (
        <>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" className={classes.logoLg}>Umer App</Typography>
                    <Typography variant="h6" className={classes.logoSm}>Umer</Typography>
                    <div className={classes.search}>
                        <Search onClick={()=>setOpen(true)}/>
                        <InputBase placeholder="Search..." className={classes.input} />
                    </div>
                    <div className={classes.icons}>
                        <Search className={classes.searchButton}/>
                     <Badge badgeContent={4} color="secondary" className={classes.badge} >
                      <Mail/>
                     </Badge>
                     <Badge badgeContent={2} color="secondary" className={classes.badge}>
                      <Notifications/>
                     </Badge>
                     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;