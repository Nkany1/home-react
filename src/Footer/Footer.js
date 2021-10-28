import React from "react"
import {Box , Avatar , Container , Typography} from "@material-ui/core"
import icon from "./image3.png"
import "./footer.css"

const Footer = () => {
    return ( 
        <footer>
              
         <Box bgcolor="secondary.main"
              pt={1.5}
              pb={1.5}
              spacing-between= {3}
         >
           <Container>
            <Box 
               ml={7}
               color = "white"
               display ="flex"
               
               >
                  <Avatar  src={icon} />
                  <br />
                     All rights reseverd &reg; {new Date().getFullYear()}
               </Box> 
               
            </Container>
         </Box>
           
        </footer>
        
     );
}
export default Footer;