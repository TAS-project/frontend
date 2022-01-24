import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Image from '../img/book.jpg';
import { Alert } from '@mui/material';
import { useState } from "react";



function SignIn() {
  const [error, seterror] = useState(false);
  var status = 0;
  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    fetch('http://localhost:3001/User/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "Username": data.get('username'),
        "Password": data.get('password'),
      })
    }).then(res => {
      status = res.status;
      if (status === 400) { // error coming back from server
        console.log('Big error')
      } else if (status === 401) { // error coming back from server
        console.log('worng password or username');
        seterror(true)
      }
       
      return (res.json() );

    }).then((response) => {

      if (status === 200) {
        localStorage.setItem('token', response.accessToken);
        localStorage.setItem('username',data.get('username'));
        localStorage.setItem('access', false);
        console.log(localStorage.getItem("token"));
        console.log(localStorage.getItem("username"));
        window.location.pathname = `/home/`;
      }
      }) 

  };

return (

   <Grid  container component="main" sx={{ height: '100vh'}}>
     <CssBaseline />
      <Grid item xs={false} sm={4} md={7}
        sx={{
         backgroundImage: `url(${Image})`,
         backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
         backgroundPosition: 'center',
        
        }}
      />
      <Grid className='logins' item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box sx={{my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <Avatar sx={{ m: 1 }}> <LockOutlinedIcon /></Avatar>
          <Typography style={{ marginBottom :20}} component="h1" variant="h4"> Sign in </Typography>
          <Box style={{ marginTop:20}} component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          
            <TextField className='loginsT' style={{fontSize:15}}  margin="normal" required fullWidth id="username"  label="UserName" name="username" autoComplete="username" autoFocus />
            <TextField className='loginsT' style={{ fontSize: 15 }} margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
            {error && <Alert severity="error">wrong username or password</Alert>}
          <Button style={{ fontSize: 18 }} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
           
            <Grid container>
              <Grid item xs style={{ marginTop:20}}>
                <Link style={{fontSize:18}} href="#" variant="body2"> Forgot password? </Link>
            </Grid>
            
              <Grid item style={{ marginTop:20, fontSize:17}}>
                Don't have an account?
                <Link style={{fontSize:18}} href="/register" variant="body2">{" Sign Up"}</Link>
              </Grid>
            </Grid>              
          </Box>
        </Box>
      </Grid>
    </Grid>

  );
    
}

export default SignIn