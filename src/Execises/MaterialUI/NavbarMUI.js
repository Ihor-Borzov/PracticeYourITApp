import styled from "@emotion/styled"
import { AppBar, Avatar, Badge, Box, Button, InputBase, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import React, { useState } from "react"
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";



const StyledAppBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "blue",
    color: "white",
    position:"sticky",
    top:0,
    zIndex:1
})


const Search = styled("div")({
    backgroundColor: "white",
    padding: "0 50px",
    borderRadius: "4px",
    width: "40%",
})


const Icons = styled(Box)(({theme})=>({
    display:"none",
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}))



const UserBox = styled(Box)(({theme})=>({
    display:"flex",
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}))





const NavBarMUI = () => {
  const [opened, setOpen] = useState(false)

    return (<StyledAppBar >

        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>IHOR DEV</Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
        <InputBase placeholder="search..."/>
        </Search>
        <Icons>
        <Badge badgeContent={4} color="error"><MailIcon /></Badge>
        <Badge badgeContent={2} color="error"><Notifications /></Badge>
<Avatar sx={{width:30, height:30}}  src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
onClick={()=>{setOpen(true)}}
/>
        </Icons>

        <UserBox  onClick={()=>{setOpen(true)}} >
        <Avatar sx={{width:30, height:30}}  src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"/>
<Typography variant="span">Ihor</Typography>

        </UserBox>

        {/* <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        Dashboard
      </Button> */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={opened}
        onClose={()=>{setOpen(false)}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>



    </StyledAppBar>)
}

export default NavBarMUI