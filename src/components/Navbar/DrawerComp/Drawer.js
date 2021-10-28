import React ,{useState }  from "react";
import {Drawer , List , ListItemText , ListItem , ListItemIcon , AppBar , Avatar , Box , CssBaseline,useTheme , IconButton } from "@material-ui/core";
import {FcConferenceCall,FcContacts,FcHome,FcGallery} from "react-icons/fc"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import MenuIcon from "@material-ui/icons/Menu"
import icon from "../images/Logo.png";

import {makeStyles} from  "@material-ui/styles"

const drawerWidth = 240
const useStyle = makeStyles({
   
  list:{
    width:150,
  },
  drawer:{
    width: drawerWidth
  },
  drawerPaper:{
    width:drawerWidth
  }
})

const DrawerComp = () => {
    const classes = useStyle()
    const[openDrawer , setOpenDrawer] = useState(false);

    

    return ( 

    <>
      
      <AppBar >

        <Box>
          <IconButton
            edge="end"
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <MenuIcon />
            <Box ml={15}>
               <Avatar src={icon} size="small" />
            </Box>
          </IconButton>
        </Box>

      </AppBar>  

           <Drawer
            className={classes.drawer}
            classes ={{paper : classes.drawerPaper}}
            open={openDrawer}
           >
            <List className={classes.list}>

              <ListItem divider button>
                <ListItemIcon>   
                 <IconButton onClick={() => setOpenDrawer(false)}>
                    <ChevronLeftIcon/>
                 </IconButton>
                </ListItemIcon> 
              </ListItem>

                <ListItem  button>
                    <ListItemIcon>
                       <FcHome size ="1.4rem" />
                   </ListItemIcon>
                      <ListItemText primary="Home"   />
                </ListItem>

               <ListItem  button>
                  <ListItemIcon>
                    <FcGallery size ="1.4rem" /> 
                  </ListItemIcon>
                    <ListItemText primary="Product" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                      <FcConferenceCall size ="1.4rem" />
                    </ListItemIcon>
                      <ListItemText primary="Blog" />             
                </ListItem>
            
                <ListItem  button>
                    <ListItemIcon>
                        <FcContacts size ="1.4rem" />
                    </ListItemIcon>
                        <ListItemText>Contact</ListItemText>
                </ListItem>

               </List>
           </Drawer>
           

      </>
     );
}
 
export default DrawerComp;