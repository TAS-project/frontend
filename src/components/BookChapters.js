
import Box from '@mui/material/Box';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, List, ListItemText, Typography } from "@material-ui/core";
import { ListItemButton } from "@mui/material";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({

  showchapters: {
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
  const [chapters, setchapters] = useState(null);
  const [fetched, setfetched] = useState(false);
    useEffect(() => {
    const book_id = window.location.href.split('/')[4];
    console.log("book_id: " + book_id)
    fetch('http://localhost:3001/User/Book_Profile_Chapters', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      },
    body: JSON.stringify({
        "Book_ID": book_id,
      })
    }).then(res => {
      const status = res.status;
      if (status === 400) { // error coming back from server
        console.log('Error in fecthing book');
      } else if (status === 401) { // error coming back from server
        console.log('401');
      } 
      return (res.json());

    }).then((response) => {
      console.log('new chapter: ' + JSON.stringify(response.Chapters));
      //console.log('taravat : ' + JSON.stringify(Post_HomePage)  );
      setchapters(response.Chapters);
      setfetched(true)
      }) 
  }, []);
  const ClickonChaper =(Chapter_ID) => {
    console.log('chapter clicked');
    window.location.pathname = `/book/${window.location.href.split('/')[4]}/${Chapter_ID}/`;    
};
  const classes = useStyles();
  return (
    <div>
      {
        
        fetched === true ?
    <Box
     className={classes.showchapters}
      component="main"
      sx={{width:'90%' ,position: 'relative', p:1 }}
      >
        <Typography variant="h6" >
            chapters:
        </Typography>
        <Divider />
      
      <List >
  
        
        { chapters.map((c) => (
          <ListItemButton onClick={()=>ClickonChaper(c.ID)} key={c.ID}>
            <ListItemText style={{textAlign:'center',}} primary={`chapter number #${c.Chapter_Number} :  ${c.chapter_name}`} />
          </ListItemButton>
        ))}
      </List> 
          </Box>
          :
          null
      }
      </div>
  );
}