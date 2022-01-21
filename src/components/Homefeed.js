import Post from "./Post";
import { Post_HomePage } from "../dummy";
import Box from '@mui/material/Box';

import { makeStyles } from '@material-ui/core/styles';
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  post: {
    boxshadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
  },

  
}));
export default function Feed() {
  const [posts, setPosts] = useState([]);
  /*
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      setPosts(res.data);
      
    };
    fetchPosts();
  }, [username, user._id]);
*/
  const classes = useStyles();
  return (
    <Box
      className={classes.post}
      component="main"
      sx={{width: { sm: `calc(100% - ${drawerWidth}px)` }, left: { sm: `${drawerWidth}px` } ,position: 'relative', p:1 }}
      >
              {
           Post_HomePage.map((p) => (
             <Post xs={{ boxShadow: 3, m: 2 }} key={p.Chapter_ID} chapter={p} />
            
                  ))
              }
      
    </Box>
  );
}