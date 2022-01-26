import Comment from "./Comment";
import React from 'react';
//import { chapter_1} from "../dummy";


//import { comments } from "../dummy";
import Box from '@mui/material/Box';

import { makeStyles } from '@material-ui/core/styles';
import { Avatar, CardHeader, Divider, Grid, Icon, InputAdornment, Typography } from "@material-ui/core";
import { Button, TextField } from "@mui/material";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import EditChapter from '../components/EditChapter';
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  post: {
    margin: 'auto',
    padding: '40px',
    width: '90%',
    //border: '2px solid',
    borderColor: '#E7EDF3',
    borderRadius: 16,
    transition: '0.4s',
    [theme.breakpoints.down("xs")]: {
      padding: '0px',
  
    },

    
  },
  comment: {
    border: '2px solid',
    marginTop:'1%',
    borderColor: '#E7EDF3',
    borderRadius: 16,
    margin:'auto',
  }

}));
export default function Chapters() {
   
 const handlePost = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      comment: data.get('comment'),
      
    });
   const ch_id = window.location.href.split('/')[5];
   console.log('chapter_id :' + ch_id)
    // send it to sever 
    fetch('http://localhost:3001/User/Comment_Write', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      },
    body: JSON.stringify({
      "Chapter_ID": ch_id,
      "Comment": data.get('comment'),
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
      console.log('response add chapter : ' + JSON.stringify(response));
     // window.location.pathname = `/book/${book_id}/`;
      window.location.reload();
      })  
   
  };

  const [chapter, setchaper] = useState(null);
  const [comments, setcomments] = useState(null);
  const [fetched, setfetched] = useState(false);
  const [IsOwner, setOwner] = useState(null);
  
  const [Edit, setEdit] = React.useState(false);
  const clickEdit =() => {
    console.log('click on edit !!!!');
    setEdit(true);
  };
  // for caching book information 
  useEffect(() => {
    const chapter_id = window.location.href.split('/')[5];
    console.log("book_id:" + chapter_id)
    
  fetch('http://localhost:3001/User/Chapter_view', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      },
    body: JSON.stringify({
        "Chapter_ID" : chapter_id,
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
      console.log('comments:' + JSON.stringify(response.Chapter.Comments));
      //console.log('taravat : ' + JSON.stringify(Post_HomePage)  );
      setchaper(response.Chapter);
      setcomments(response.Chapter.Comments)
      setfetched(true)
      if ((localStorage.getItem("username")).toLowerCase() === response.Chapter.Owner_Username.toLowerCase())
       setOwner(true)
      }) 
    
  }, []);
  const classes = useStyles();
    const userclick = (uname) => {
    window.location.pathname = `/profile/${uname}/`;
  };
  return (
    <div>
      {
        fetched === true ?
    <div>
      {
        Edit === false ?
    <Box
      className={classes.post}
      component="main"
      sx={{width:'90%' ,position: 'relative', p:1 }}
      >
    <Box>
    <Typography style={{ paddingTop:12,textAlign:"center"}} variant="h5" gutterBottom component="div">
          {"chapter " + chapter.Chapter_ID + " :  " + chapter.chapter_name}
          {/**/
                IsOwner===true ?
        <Icon xs={{ cursor: 'pointer' }} sx={{padding:'10px'}} color="primary" aria-label="upload picture" component="span" onClick={() => clickEdit()}>
          <ModeEditIcon />
        </Icon>
        :
                null }
        </Typography>

</Box> 
    <Typography style={{fontSize:20}} variant="body1" gutterBottom>
        {chapter.content}
      </Typography>
      {/*comment section */ }
      <Box className={classes.comment}>
                    <CardHeader style={{ paddingLeft: '40px', cursor: 'pointer' }} onClick={() => userclick(chapter.Owner_Username)}avatar={<Avatar alt="Remy Sharp" src={chapter.pic} />}
        title={chapter.Owner_Username } />
      <Box component="form" onSubmit={handlePost} noValidate sx={{ mt: 1 }}>
        <Grid container direction="row" alignItems="center" justifyContent="center" >
          <Grid item xs={10} >
              <TextField
              id="comment"
              name="comment"
              fullWidth
              multiline={true}
              rows={3}
              style={{width:'90%', margin:'auto' , display:'block'}}
              maxRows={4}
              InputProps={{
              endAdornment: (<InputAdornment position="end">
              </InputAdornment>), }}
              //onChange={handleChange}
            />
          </Grid>
          <Grid item alignItems="center" justifyContent="center">
            <Button type="submit" >Post</Button>
          </Grid>
        </Grid>
      </Box>
      <br />
       <Divider />
      
    
      <Box >
                  {
        comments.map((c) => (
             <Comment xs={{ boxShadow: 3, m: 2 }} key={c.Comment_ID} comment={c} />
            ))
        }
        </Box>
        
        </Box>
          </Box >
          :
                 
              <EditChapter chapter={chapter} />
            
                
      }
      </div>
      :
      null
  }
    </div>  
  );
}