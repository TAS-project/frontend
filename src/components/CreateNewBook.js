import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import BookImgUp from './BookImgUp';
import { Button } from '@material-ui/core';
import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
// import {  IconButton } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
profileUserImg: {
  width: '160px',
  height: '200px',
 // borderRadius: '50%',
  objectFit: 'cover',
  position: 'absolute',
  left: '0',
  right: '0',
  margin: 'auto',
  border : '3px solid grey',
  //borderColor : '#ffffff',
 
},
profileImg: {
  width: '180px',
  height: '180px',
 // backgroundColor : '#ffffff',
  position: 'absolute',
  left: '0',
  right: '0',
  margin: 'auto',
  top: '40px', 
},
profileUserIcon: {
 fontSize : 'medium',
  objectFit: 'cover',
  color : 'black'
},
iconbut :{
    marginLeft : '130px',
    marginTop : '160px',
   // color : 'hsla(0, 0%, 100%, 0.769)6',
},
inputimg : {
  marginTop : '20px'
}
}));
 function  CreateNewBook() {
    const classes = useStyles();
  const [genres, setgenres] = useState([]);
   const [fetched, setfetched] = useState(false);
   // get all the genres
  useEffect(() => {
  fetch('http://localhost:3001/User/Genre_All', {
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
      console.log(JSON.stringify(response.Genres));
      setgenres(response.Genres);
      console.log("new genres :" + genres);
      setfetched(true)
      }) 
  }, []);
   
   // create new book
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get('BookName'),
      Genres: [{ "Genre_ID": picked }],
      summery : data.get('Description'),
    });
    
    fetch('http://localhost:3001/User/Book_Create', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      },
    body: JSON.stringify({
      "Name": data.get('BookName'),
      "Genres": [{ "Genre_ID": picked }],
      "Summary":data.get('Description'),
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
      console.log('response add chapter : ' + JSON.stringify(response.Book.Book_ID));
      window.location.pathname = `/book/${response.Book.Book_ID}/`;
      
      })  
     
  
  };

 const [picked, setpicked] = React.useState('');

  const handleChange = (event) => {
    setpicked(event.target.value);
  };
  return (
      <>
    
      <Container component="main" maxWidth="xs" >  
       <Box className={classes.profileImg}>
        <img  className={classes.profileUserImg}
        src={require(`../img/bookimg.png`)}   alt=""/>
        {/* <IconButton className={classes.iconbut}>
            <PhotoCameraIcon className={classes.profileUserIcon}  />
        </IconButton>  */}
     
    </Box>   
        <Box 
          sx={{
            marginTop: 35,
          
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
           
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
               <TextField  name="BookName"   required   fullWidth id="BookName"   label="Book Name"
                  autoFocus
                />
                 </Grid>
              <Grid item xs={12}>
                 
                    <TextField fullWidth
          id="outlined-select-currency"
          select
          label="Genre"
          //value={currency}
          onChange={handleChange}
         
        >
        {fetched === true ?
                    genres.map((option) => (
            <MenuItem key={option.value} value={option.Genre_ID}>
              {option.Genre_Title}
            </MenuItem>
                    ))
        : null }
        </TextField>  
           
              </Grid>
              
           
             <Grid item xs={12}>
                    <TextField placeholder="Give a brief description of your book"  multiline  rows={5}  maxRows={5}  required name="Description" fullWidth  id="Description"  label="Description"  />             
            </Grid>
              
              <Grid item xs={12}>
            <Button   type="submit"   fullWidth  variant="contained"  sx={{marginTop : '10px'}}>
                  Create 
            </Button>
                      </Grid>
         
            </Grid >
            
            
           
          </Box>
        </Box>
         <BookImgUp />
      </Container>
      </>
        

  );
};
export default CreateNewBook