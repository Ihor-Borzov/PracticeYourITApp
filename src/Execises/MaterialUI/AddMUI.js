import React from "react"
import Tooltip from '@mui/material/Tooltip';
import { Avatar, Button, ButtonGroup, Fab, Stack, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from "@emotion/styled";
import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})


const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:10,
    margin:"bottom"
})






let Add = () => {
    const [open, setOpen] = React.useState(false);

    return(
<div>
<Tooltip onClick={()=>{setOpen(true)}} title="add" sx={{position:"absolute", bottom:"1", left:{xs:"calc(40%)", md:20}}}>
<Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
</Tooltip>

<StyledModal
        open={open}
        onClose={()=>{setOpen(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} p={3} borderRadius={5}
         bgcolor={"background.default"}  color={"text.primary"}   /* jus the way to apply a dark theme */
        >
            <Typography variant="h6" color="gray" textAlign="center">
                Create Post
            </Typography>

<UserBox>
<Avatar
src="https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png"
sx={{width:30, height:30}}
/>
<Typography  fontWeight={500}  variant="span" >John Doe</Typography>
</UserBox>

<TextField  sx={{width:"100%",marginTop:"15px"}}
          id="standard-multiline-static"
          label="Post"
          multiline
          rows={2}
          placeholder="What's on your mind"
          variant="standard"
        />

<Stack direction="row" gap="10px" mt={2} mb={3}>
<EmojiEmotions color="primary"/>
<Image color="secondary"/>
<VideoCameraBack color="success"/>
<PersonAdd color="error"/>
</Stack>

<ButtonGroup variant="outlined" aria-label="outlined button group" fullWidth>
        <Button>Post</Button>
        <Button  sx={{width:"100px"}}  ><DateRange/></Button>
      </ButtonGroup>

            </Box>
        </StyledModal>
</div>
    )
}


export default Add