import React from "react";
import {Card , CardMedia , Typography , CardContent , Grid  ,useMediaQuery ,useTheme ,Container , Button} from "@material-ui/core";
import {blogs} from "./constants/constant"
import useStyles from "./styles"
import "./Article.css"
import icon from "./image.png"




const Article = () => {
     
    const classes = useStyles()

    const theme = useTheme()

    const isMatch = useMediaQuery(theme.breakpoints.down("md"))

    console.log(isMatch);
     
    return ( 
        
         
           <Container mt={10}>
           <Grid container 
                spacing={3}
           >

            {blogs.map((post) => (
                <Grid key={post.id} item xs={6}  md={3}   >                  
                    <Card  >
                        <CardMedia classeName={classes.media}
                            component="img" 
                            alt="picture"
                            height = "100"
                            image={icon} 
                        />

                        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                           {post.title}
                        </Typography>

                        <CardContent>
                          <Typography variant="body2" color="textSecondary" component="p">
                             {post.description}
                          </Typography>
                         </CardContent>
                    </Card> 
                </Grid>
            ))}
        </Grid>
                <div className="botton">

                <Button type="submit"
                    color="secondary"
                    variant="outlined" 
                >
                
                Read More</Button>
                </div>
        </Container>

        
     );
}
 
export default Article;