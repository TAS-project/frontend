
import { Books } from "../dummy";
import Box from '@mui/material/Box';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Book from "./Book";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  post: {
    boxshadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
  },


 
  
}));
export default function BFeed(props) {

  const styles = useStyles();
  return (
    <Box
      className={styles.post}
      component="main"
      sx={{width: { md: `calc(100% - ${drawerWidth}px)` }, left: { md: `${drawerWidth}px` } ,position: 'relative', p:1 }}
      >
              {
        props.books.map((b) => (
          <Book xs={{ boxShadow: 3, m: 2 }} key={b.Book_ID} book={b} />
                  ))
              }
      
    </Box>
  );
}
