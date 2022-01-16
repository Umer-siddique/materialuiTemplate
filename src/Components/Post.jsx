import React from "react";
import { Button, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography,CardActions, withWidth } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
media:{
    height:240
},
card:{

    marginBottom:theme.spacing(5)
}
}));

const Post = ({sname,imgscr,title}) => {
    const classes = useStyles()
    return (
        <>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        image={imgscr}
                        title={title}
                    />
                    <CardContent>
                        <Typography  gutterBottom variant="h5">{sname}</Typography>
                        <Typography variant="body2">Lorem ipsum
                            dolor sit amet consectetur, adipisicing elit.
                            Ratione doloremque consequuntur voluptates eligendi
                            dolorem maxime labore
                            natus architecto voluptas, in incidunt explicabo iste aperiam dolorum commodi
                             dignissimos eos ea tempora?
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small"color="primary">SHARE</Button>
                    <Button size="small"color="primary">LEARN MORE</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Post;