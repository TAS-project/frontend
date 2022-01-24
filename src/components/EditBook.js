
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import BookImgUp from './BookImgUp';
import { Button } from '@material-ui/core';
import { Book } from "../dummy";
import { useEffect, useState } from "react";

export default function  EditBook() {
  const [book, setbook] = useState(null);
   const [picked, setpicked] = React.useState('');
  const [fetched1, setfetched1] = useState(false);
  //const [followers, setfollowers] = useState(false);
// for caching book information 
  useEffect(() => {
    const book_id = window.location.href.split('/')[4];
    console.log("book_id: " + book_id)
  fetch('http://localhost:3001/User/Book_Profile_View', {
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
      console.log('book: ' + JSON.stringify(response.Book));
      //console.log('taravat : ' + JSON.stringify(Post_HomePage)  );
      setbook(response.Book);
      //console.log("new book :" + JSON.stringify(response.Book));
      setfetched1(true)
      }) 
  }, []);
     
const [genres, setgenres] = useState([]);
const [fetched2, setfetched2] = useState(false);
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
      setfetched2(true)
      }) 
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      BookName: data.get('BookName'),
      Description: data.get('Description'),
    });
  };



  const handleChange = (event) => {
    setpicked(event.target.value);
  };
  return (

    <div>{ (fetched1 === true && fetched2 === true) ?
      <div>
      <BookImgUp  bookimg={`../img/book_${book.Book_ID}.png`} />
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
               <TextField  name="BookName"   required   fullWidth id="BookName"   label="Book Name" defaultValue={book.Book_Name}  autoFocus
                />
                 </Grid>
              <Grid item xs={12}>
                <TextField fullWidth id="Genre" select label="Genre" onChange={handleChange} >
                  {genres.map((option) => (
                     <MenuItem key={option.value} value={option.Genre_ID}>
                     {option.Genre_Title}
                    </MenuItem>
                  ))}
                </TextField>  
           
              </Grid>
              
           
             <Grid item xs={12}>
                <TextField placeholder="Give a brief description of your book"  multiline defaultValue={book.Summary} 
                    rows={7}  maxRows={7}  required  fullWidth name="Description" id="Description"  label="Description"  />             
            </Grid>
              
              <Grid item xs={12}>
            <Button   type="submit" fullWidth  variant="contained"  sx={{marginTop : '10px'}}>
                  Save
            </Button>
                      </Grid>
         
            </Grid >
            
            
           
          </Box>
        </Box>
       
      </Container>
    
      </div>
      :
      null
      }
     </div>   

  );
};



