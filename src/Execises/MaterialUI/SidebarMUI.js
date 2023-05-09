import { AccountBox, Home, ModeNight, Settings } from "@mui/icons-material"
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material"
import React from "react"
import Add from "./AddMUI"


const Sidebar = ({mode, setMode}) => {
    
    return(
    <Box flex={1} p={2} sx={{display:{xs:"none", sm:"block"}, border:"2px solid red"}} >
<Box position={"sticky"} sx={{top:80, border:"2px solid white"} }>
<List>

          <ListItem disablePadding>
            <ListItemButton component = "a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component = "a" href="#account">
              <ListItemIcon>
              <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component = "a" href="#settings">
              <ListItemIcon>
              <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component = "a" href="#settings">
              <ListItemIcon>
              <ModeNight/>
              </ListItemIcon>
                <Switch   onChange={()=>{ setMode(mode==="light"? "dark": "light") }}/>
            </ListItemButton>
          </ListItem>

          <Add/>


          </List>
          </Box>



    </Box>)
}

export default Sidebar