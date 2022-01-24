
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import BookImgUp from './BookImgUp';
import { Button } from '@material-ui/core';
import { useEffect, useState } from "react";


 function  CreateNewBook() {
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
      <BookImgUp />
      <Container component="main" maxWidth="xs" >
          
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
                    <TextField placeholder="Give a brief description of your book"  multiline  rows={7}  maxRows={7}  required name="Description" fullWidth  id="Description"  label="Description"  />             
            </Grid>
              
              <Grid item xs={12}>
            <Button   type="submit"   fullWidth  variant="contained"  sx={{marginTop : '10px'}}>
                  Create 
            </Button>
                      </Grid>
         
            </Grid >
            
            
           
          </Box>
        </Box>
       
      </Container>
      </>
        

  );
};
export default CreateNewBook


