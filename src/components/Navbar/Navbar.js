import React ,{useState} from "react"
import {AppBar , Tab , Tabs , Avatar , Box , useMediaQuery ,useTheme  } from "@material-ui/core";
import {FcConferenceCall,FcContacts,FcHome,FcGallery} from "react-icons/fc"

import icon from "./images/Logo.png";  
import DrawerComp from "./DrawerComp/Drawer"

const Navbar = () => {
    
    const [value , setValue] = useState(0);
 
    const handleClickTab = ( e , newValue) => {
         setValue(newValue);
    } 

    const theme = useTheme()
    
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))

    return ( 

        <>

        
          <AppBar position="static"   style={{position:"fixed"}}>
            
        
             {isMatch ? <DrawerComp /> :
             
            <>
              <Tabs fullWidth={true} 
                onChange={handleClickTab} 
                value={value} 
                centered>
               
                <Tab  label="Home" 
                    icon={<FcHome size ="1.4rem" /> }
                />
                <Tab label="Product" 
                    icon={<FcGallery size ="1.4rem" /> }
                />

                  <Box mt={2.5}>
                    <Avatar src={icon} size="large" margin-top={5} />
                  </Box>

                <Tab label="Blog" 
                   icon={<FcConferenceCall size ="1.4rem" /> }
                />
               <Tab label="Contact" 
                   icon={<FcContacts size ="1.4rem" /> }
               />
              </Tabs> 
            </>
            }

        </AppBar>
        </>
     );
}
 
export default Navbar;