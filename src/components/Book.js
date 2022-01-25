import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@mui/system";
import { Typography } from "@material-ui/core";
import {useEffect, useState } from "react";


const useStyles = makeStyles((theme) => ({
  post: {
    boxshadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
  },
  BookCard: {
    border: '2px solid',
    borderColor: '#E7EDF3',
    transition: '0.4s',
    '&:hover': {
     borderColor: '#C19E8A',
    },
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    marginBottom: '0.875em',
  },
  media: {
    padding: 10,
    '&:hover': {
      opacity:'80%'
    },
  },
  butn: {
    cursor: 'pointer',
    borderRadius:5,
    margiLeft: 'auto',
    marginRight: 'auto',
    padding:3,
    border: '1px solid',
    borderColor: '#C8C8C8',
    '&:hover': {
      color: "#AFA2A2",

      
    },
  }
  
}));
export default function Book(props) {
    const styles = useStyles();
    const [follow, togglefollow] = useState(0);
    useEffect(() => {
      console.log("mese "+JSON.stringify(props))
      togglefollow(props.book.followed_state)
  }, []);
    const Bookclick = (Book_ID) => {
    window.location.pathname = `/book/${Book_ID}/`;
    };
    const userclick = (Username) => {
    window.location.pathname = `/profile/${Username}/`;
  };

  const followun = (Book_ID) => {
    console.log("please toggle : " + Book_ID)
    fetch('http://localhost:3001/User/BookFollow', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        "Book_ID": Book_ID,
      })
    }).then(res => {
      const status = res.status;
      if (status === 400) { // error coming back from server
        console.log('Error in fecthing');
      } else if (status === 401) { // error coming back from server
        console.log('401');
      } 
      return (res.json());

    }).then((response) => {
      console.log('response : ' + JSON.stringify(response));
      //console.log('taravat : ' + JSON.stringify(Post_HomePage)  );
      if  (follow === 0)
        togglefollow(1)
      if (follow === 1)
          togglefollow(0)
      }) 
  };
  
    return (

       <Box 
               sx={{
                  display: 'flex',
                  position:'relative',
                  flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
              overflow: 'hidden',
            borderRadius: '12px',
            fontWeight: 'bold',
            margin : '2%'
               }}
        className={ styles.BookCard }>
      <Box className={styles.media}
      component="img" sx={{ padding: 1,
        paddingRight:{md:'20px'},
        height: { xs: 233, md: 267 },
        width: { xs: 150, md: 200 } }}
          alt="The house from the offer."

          src = {props.book.Book_Cover} />
          <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 1,
          m: 1,
          bgcolor: 'background.paper'}}>
          <Box  sx={{ fontSize: 22, mt: 1, cursor: 'pointer' }} onClick={() => Bookclick(props.book.Book_Id)} >{props.book.Name} </Box>
            <Box sx={{color: '#ABABAB', fontSize: 16, mt: 1, cursor: 'pointer' }} onClick={() => userclick(props.book.Username)}>{"@" + props.book.Username}</Box>
            <Typography>
            {props.book.Summary}
            </Typography>
            
                {follow === 0 ?
                <Box className={styles.butn} onClick={() => followun(props.book.Book_ID)} sx={{ display: 'flex', mt: 1 }}> follow</Box>
                :follow === 1 ?
              <Box className={styles.butn} onClick={() => followun(props.book.Book_ID)} sx={{ display: 'flex', mt: 1 }}> unfollow</Box>
              : null
          }
    
            </Box>
            
     </Box>
     
  );
}