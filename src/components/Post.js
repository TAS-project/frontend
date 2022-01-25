
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@mui/system";
import { Divider, Typography } from "@material-ui/core";
import { Rating } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  post: {
    border: '2px solid',
    borderColor: '#E7EDF3',
    borderRadius: 16,
    transition: '0.4s',
    '&:hover': {
      borderColor: '#2E2C2C',
    },

  },
  rate: {
    position:'absolute',
    right: '3px',
    bottom: '4px',
    display: 'flex',
    },
  
}));
export default function Post(props) {
  const classes = useStyles();
  const [rate, setrate] = useState(null);
  useEffect(() => {
    console.log('rate' +props.chapter.Rate)
    setrate(props.chapter.Rate)
  }, []);
  // when user rate a book :
  const setValueRate =(newValue) => {
    console.log(newValue)
    console.log("book_id:" + props.chapter.Book_ID)
  fetch('http://localhost:3001/User/Rate', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      },
    body: JSON.stringify({
      "Book_ID": props.chapter.Book_ID,
      "Rate": newValue,
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
      console.log('respomse: ' + JSON.stringify( response));
      //console.log('taravat : ' + JSON.stringify(Post_HomePage)  );
      setrate(response.Rate);
      }) 
  }

  const userclick = () => {
    window.location.pathname = `/profile/${props.chapter.Writer_Username}/`;
  };

  const Bookclick = () => {
    window.location.pathname = `/book/${props.chapter.Book_ID}/`;
  };
    return (

      <Box
        className={classes.post}
        boxShadow={12}
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
    >
      <Box
        component="img"
          sx={{
            padding: 1,
            paddingTop:{xs:'40px', md:'10px'},
            paddingRight:{md:'20px'},
          height: { xs: 233, md: 267 },
          width: { xs: 150, md: 200 },
        }}
        alt="The house from the offer."
        src={props.chapter.Book_Cover}
      />
      <Box
        sx={{
          display: 'flex',
            flexDirection: 'column',
           
          alignItems: { xs: 'center', md: 'flex-start' },
          m: 3,
          minWidth: { md: 350 },
        }}
        >
           <Typography style={{color:"#878383", position: 'absolute' ,top:'3%', right:'3%'}}> last update : {props.chapter.Last_Updated }</Typography>
        <Box component="span" sx={{ fontSize: 22, mt: 1, cursor: 'pointer' }} onClick={() => Bookclick()}>
         {props.chapter.Book_Name}
          </Box>
        <Box  sx={{ color: '#ABABAB', fontSize: 16 , cursor: 'pointer'}} onClick={() => userclick()}>
         @{props.chapter.Writer_Username}
        </Box>
         
        <Box
          sx={{
            mt: 1,
            p: 0.5,
            borderRadius: '5px',
            color: 'primary.main',
              fontWeight: 'medium',
            marginBottom:'7%',
            display: 'flex',
            fontSize: 12,
            alignItems: 'center',
            '& svg': {
              fontSize: 21,
              mr: 0.5,
            },
          }}
        >
         
         last chapter : {props.chapter.Last_Chapter_Name}
        </Box>

        </Box>
        <Box py={1} className={classes.rate } >
      <Typography component="legend">rating</Typography>
      <Rating
        name="rating"
        value= {rate}
        onChange={(event, newValue) => {
          setValueRate(newValue);
          }}
           />
        <Divider orientation="vertical" variant="middle" flexItem />
        
          <Box xs={{ fontSize: { md: '20px', xs: '10px' }, }} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', flexWrap: 'wrap', }} onClick={() => Bookclick()}>
            read more <ArrowForwardIosIcon fontSize="small" /></Box>
        
        </Box>
        
      </Box>
     
  );
}