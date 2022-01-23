import * as React from 'react';
import Toolbar from '../components/Toolbar';
import { Box } from "@mui/system";
import BookProfileHeader from '../components/BookProfileHeader';
import BookChapters from '../components/BookChapters';
const drawerWidth = 240;

export default function BookProfile() {
  const IsOwner = true; 
    return (
     
    <div>
        <Toolbar />
    <Box               
    sx={{ width: { md: `calc(100% - ${drawerWidth}px)` }, left: { md: `${drawerWidth}px` }, position: 'relative', p: 1 }}>
    
          <BookProfileHeader IsOwner={ IsOwner}/>
    
    <BookChapters/>   
    </Box>
    </div>
  );
}