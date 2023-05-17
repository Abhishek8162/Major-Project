import React from 'react'

import {
    Box,Divider,List,ListItem,Typography,MenuList,MenuItem,Drawer,ListItemIcon,ListItemText,ListItemButton,Toolbar
}from "@mui/material"

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


function SideBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


  return (
    <div>
        {/* <MenuList
open="true"
onClose={handleClose}

>
<MenuItem onClick={handleClose}  variant="inherit">Profile</MenuItem>
<MenuItem onClick={handleClose}>My account</MenuItem>
<MenuItem onClick={handleClose}>Logout</MenuItem>
</MenuList> */}


<Drawer
        sx={{
          width: "150px",
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: "250px",
            boxSizing: 'border-box',
            mt:8,
            backgroundColor: "#433f54",
      color: "white",
          },
          
        }}
        variant="permanent"
        anchor="left"
      >
        
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{color: "white",}}>
                  {index % 2 === 0 ? <InboxIcon  /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{color: "white",}}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>


    </div>
  )
}

export default SideBar