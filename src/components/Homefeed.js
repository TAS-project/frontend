import Post from "./Post";
import React from 'react';
import { Post_HomePage } from "../dummy";
import Box from '@mui/material/Box';

import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
//import axios from "axios";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  post: {
    boxshadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
  },

  
}));
export default function Feed() {
  const [posts, setPosts] = useState(Post_HomePage);
  const [fetched, setfetched] = useState(false);

  useEffect(() => {


  fetch('http://localhost:3001/User/Home', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({})
    }).then(res => {
      const status = res.status;
      if (status === 400) { // error coming back from server
        console.log('Error in fecthing');
      } else if (status === 401) { // error coming back from server
        console.log('401');
      } 
      return (res.json());

    }).then((response) => {
      console.log('posts anita : ' + JSON.stringify(response));
      //console.log('taravat : ' + JSON.stringify(Post_HomePage)  );
      setPosts(response.Books);
      console.log("new posts :" + posts);
      setfetched(true)
      }) 
  }, []);

  const classes = useStyles();
  return (
    <Box
      className={classes.post}
      component="main"
      sx={{width: { md: `calc(100% - ${drawerWidth}px)` }, left: { md: `${drawerWidth}px` } ,position: 'relative', p:1 }}
    >
      {
        //console.log("p:"+posts)
      }
      { // if the data is fetched

        fetched === true ?
        posts.map((p) => (
             <Post xs={{ boxShadow: 3, m: 2 }} key={p.Book_ID} chapter={p} />
            
        ))
          :
        <Box sx={{width:'20px', display: 'flex' ,  margin: 'auto' }}>
          <CircularProgress />
      </Box>
      }

    </Box>
  );
}