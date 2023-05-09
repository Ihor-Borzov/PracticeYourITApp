import { Box, ImageList, ImageListItem, Typography } from "@mui/material"
import React from "react"
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';


const RightBar = () => {
    
    return(<Box  flex={2} p={2} sx={{display:{xs:"none", sm:"block"}, border:"2px solid red", }}>
        <Box position={"sticky"}  sx={{top:80, border:"2px solid white", overflow:"auto"}}>
        <Typography variant="h6">online friends</Typography>
        <AvatarGroup sx={{ position:"relative", right:"40px"}} max={4}>
  <Avatar alt="Remy Sharp" src="https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png" />
  <Avatar alt="Travis Howard" src="https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png" />
  <Avatar alt="Cindy Baker" src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/300w/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg" />
  <Avatar alt="Agnes Walker" src="https://static.vecteezy.com/system/resources/thumbnails/014/194/215/small/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
<Typography variant="h6">Latest photos </Typography>

<ImageList cols="2" rowHeight={100}  >

    <ImageListItem>
      <img
        src={`https://e0.pxfuel.com/wallpapers/643/203/desktop-wallpaper-str-the-shattered-star-gaming-profile.jpg`}
      />
    </ImageListItem>

    <ImageListItem>
      <img
        src={`https://e0.pxfuel.com/wallpapers/643/203/desktop-wallpaper-str-the-shattered-star-gaming-profile.jpg`}
      />
    </ImageListItem>

    <ImageListItem>
      <img
        src={`https://e0.pxfuel.com/wallpapers/643/203/desktop-wallpaper-str-the-shattered-star-gaming-profile.jpg`}
      />
    </ImageListItem>

    <ImageListItem>
      <img
        src={`https://e0.pxfuel.com/wallpapers/643/203/desktop-wallpaper-str-the-shattered-star-gaming-profile.jpg`}
      />
    </ImageListItem>

</ImageList>

<Typography>Latest conversations</Typography>

<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

        </Box>
    </Box>)
}

export default RightBar