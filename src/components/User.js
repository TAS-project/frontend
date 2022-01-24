import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@mui/system";
import {useEffect, useState } from "react";


const useStyles = makeStyles((theme) => ({
  post: {
    boxshadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
  },
  UserCard: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: '12px',
    fontWeight: 'bold',
    margin : '2%',
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
  media: {
    borderRadius: '50%',
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
export default function User(props) {
    const styles = useStyles();
    const [follow, togglefollow] = useState();
  useEffect(() => {
      
        togglefollow(props.user.followed_state)
  }, []);

    const userclick = (Username) => {
    window.location.pathname = `/profile/${Username}/`;
  };

  const followun = (Username) => {
 console.log("please toggle : " + Username)
    fetch('http://localhost:3001/User/UserFollow', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        "Username": Username,
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
      //console.log('taravat : ' + JSON.stringify(Post_HomePage)  );
      if (response.Response === 'Done')
      if  (follow === 0)
        togglefollow(1)
      else
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

               }}
        className={ styles.BookCard }>
      <Box key={props.user.Usr_ID}
        className={ styles.UserCard }>
      <Box className={styles.media}
      component="img" sx={{ height: 150, width: 150 }}
      alt="The house from the offer."
            src={require(`../img/book_${props.user.User_ID}.png`)} />
          <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 1,
          m: 1,
          bgcolor: 'background.paper'}}>
          <h3 className={styles.heading}>{props.user.Name } </h3>
          <Box  sx={{color: '#ABABAB', fontSize: 16, mt: 1, cursor: 'pointer' }} onClick={() => userclick(props.user.Username)}>{"@" + props.user.Username}</Box>
            {follow === 0 ?
                <Box className={styles.butn} onClick={() => followun(props.user.Username)} sx={{ display: 'flex', mt: 1 }}> follow</Box>
                :
                <Box className={styles.butn} onClick={() => followun(props.user.Username)} sx={{ display: 'flex', mt: 1 }}> unfollow</Box>
            }
          </Box>
     </Box>
            
     </Box>
     
  );
}