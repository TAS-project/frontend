import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';




export default function SignUp() {
      // const classes = useStyles();

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get('UserName'));
    fetch('http://localhost:3001/User/register', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
    "Username": data.get('UserName'),
    "First_Name": data.get('firstName'),
    "Last_Name": data.get('lastName'),
    "Password": data.get('password'),
    "Email":  data.get('email')
})
    }).then(res => {
       const status = res.status;
      if (status === 400) { // error coming back from server
        console.log('Error in fecthing');
       }else if (status === 401) { // error coming back from server
        console.log('user already exits');
      }
       return ( status );

     }).then((status) => {
       if (status === 200) {
         window.location.pathname = `/login/`;
       }
      }) 

  };
  
  
  return (

      <Container component="main" maxWidth="xs" >
         
             <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
             
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
            <Typography component="h1" variant="h5">
            "The Author Society"
          </Typography>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField autoComplete="given-name" name="firstName" required fullWidth
                  id="firstName" label="First Name" autoFocus />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="UserName" label="User Name" type="UserName" id="UserName"
                  autoComplete="new-password"/>
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email"/>
              </Grid>
              
              <Grid item xs={12}>
                <TextField required fullWidth name="password" label="Password" type="password" id="password"
                  autoComplete="new-password"/>
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-start">
              <Grid item>Already have an account?
               <Button>
                <Link href="/login" variant="body2">
                      {" Sign in"}
                </Link>
                 </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>

  );
}