import React from 'react';
import { Users } from "../dummy";
import Box from '@mui/material/Box';
import User from "./User";

const drawerWidth = 240;

export default function UFeed(props) {

    return (
    <Box
      component="main"
      sx={{ width: { md: `calc(100% - ${drawerWidth}px)` }, left: { md: `${drawerWidth}px` } ,position: 'relative', p:3}}>
     
        {props.users.map((u) => (
         <User xs={{ boxShadow: 3, m: 2 }} key={u.Usr_ID} user={u} />
           )) 
              }
    
    </Box>
  );
}