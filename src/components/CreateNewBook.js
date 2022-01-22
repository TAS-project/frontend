
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import BookImgUp from './BookImgUp';
import { Button } from '@material-ui/core';


const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];


export default function  CreateNewBook() {

     

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

 const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
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
               <TextField  name="BookName"   required   fullWidth id="Book Name"   label="First Name"
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
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>  
           
              </Grid>
              
           
             <Grid item xs={12}>
                    <TextField placeholder="Give a brief description of your book"  multiline  rows={7}  maxRows={7}  required  fullWidth  id="Description"  label="Description"  />             
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



