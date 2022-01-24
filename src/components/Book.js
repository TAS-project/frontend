import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@mui/system";
import { Typography } from "@material-ui/core";



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

    const Bookclick = (Book_ID) => {
    window.location.pathname = `/book/${Book_ID}`;
    };
    const userclick = (Username) => {
    window.location.pathname = `/profile/${Username}`;
  };

  const followun = (Username) => {
    window.location.pathname = `/profile/${Username}`;
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
        src={require(`../img/book_${props.book.Book_ID}.png`)} />
          <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 1,
          m: 1,
          bgcolor: 'background.paper'}}>
          <Box  sx={{ fontSize: 22, mt: 1, cursor: 'pointer' }} onClick={() => Bookclick(props.book.Book_ID)} >{props.book.Book_Name} </Box>
            <Box sx={{color: '#ABABAB', fontSize: 16, mt: 1, cursor: 'pointer' }} onClick={() => userclick(props.book.Username)}>{"@" + props.book.Username}</Box>
            <Typography>
            {props.book.summary}
            </Typography>
            <Box className={ styles.butn } sx={{display: 'flex', mt: 1}}>
              {props.book.followed === 0 ? ' follow' : ' unfollow'}</Box>
          </Box>
     </Box>
     
  );
}