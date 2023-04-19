import React from 'react'

import {
    Box,Divider,List,ListItem,Typography,MenuList,MenuItem
}from "@mui/material"

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
        <MenuList
open="true"
onClose={handleClose}

>
<MenuItem onClick={handleClose}  variant="inherit">Profile</MenuItem>
<MenuItem onClick={handleClose}>My account</MenuItem>
<MenuItem onClick={handleClose}>Logout</MenuItem>
</MenuList>


    </div>
  )
}

export default SideBar