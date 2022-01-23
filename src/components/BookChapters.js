
import { Post_HomePage } from "../dummy";
import Box from '@mui/material/Box';

import { makeStyles } from '@material-ui/core/styles';
import { Divider, List, ListItemText, Typography } from "@material-ui/core";
import { ListItemButton } from "@mui/material";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({

  chapters: {
    marginTop:'3%',
     margin:'auto',
    border: '2px solid',
    borderColor: '#E7EDF3',
    borderRadius: 16,
    padding: '3%',
    justifyItems: 'center',
    textAlign:'center',
    },
  
}));

export default function BookChapters() {
    useEffect(() => {
    console.log('here we are at the bookchapters ');
    console.log(localStorage.getItem("token"));
  });
  const ClickonChaper =(Chapter_ID) => {
    console.log('chapter clicked');
    window.location.pathname = `/book/bname/${Chapter_ID}`;    
};
  const classes = useStyles();
  return (
    <Box
     className={classes.chapters}
      component="main"
      sx={{width:'90%' ,position: 'relative', p:1 }}
      >
        <Typography variant="h6" >
            chapters:
        </Typography>
        <Divider />
      
      <List >
  
        {/* list of ganers*/}
        { Post_HomePage.map((c) => (
          <ListItemButton onClick={()=>ClickonChaper(c.Chapter_ID)} key={c.Chapter_ID}>
            <ListItemText style={{textAlign:'center',}} primary={`chapter number: ${c.Last_chapter_name}`} />
          </ListItemButton>
        ))}
      </List> 
    </Box>
  );
}