import * as React from 'react';
import Toolbar from '../components/Toolbar';
import WriteChapter from '../components/WriteChapter';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@mui/system";
import BookProfileHeader from '../components/BookProfileHeader';
import BookChapters from '../components/BookChapters';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
root: {
        
}, 
}));
export default function BookProfile() {
const classes = useStyles();
    return (
     
    <div>
        <Toolbar />
    <Box
    className={classes.root}            
               
    sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, left: { sm: `${drawerWidth}px` }, position: 'relative', p: 1 }}>
    
   <BookProfileHeader/>
    <WriteChapter />
    <BookChapters/>   
    </Box>
    </div>
  );
}