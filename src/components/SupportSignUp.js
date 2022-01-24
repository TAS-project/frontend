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
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function SupportSignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    fetch('http://localhost:3001/Supporter/register', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
    "Username": data.get('Susername'),
    "First_Name": data.get('SfirstName'),
    "Last_Name": data.get('SlastName'),
    "Password": data.get('Spassword'),
    "Email":  data.get('Semail')
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
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
            boxShadow={12}
          sx={{
           
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Box
            sx={{ padding : '15px',
        display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
           <Typography component="h1" variant="h5">
           TAS Support Team
          </Typography> <br />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="SfirstName"
                  required
                  fullWidth
                  id="SfirstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
         
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="SlastName"
                  label="Last Name"
                  name="SlastName"
                  autoComplete="family-name"
                />
              </Grid>
                   <Grid item xs={12} >
                <TextField
                  autoComplete="given-username"
                  name="Susername"
                  required
                  fullWidth
                  id="Susername"
                  label="UserName"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Semail"
                  label="Email Address"
                  name="Semail"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Spassword"
                  label="Password"
                  type="password"
                  id="Spassword"
                  autoComplete="new-password"
                />
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
            <br />
            <Grid container justifyContent="flex-start">
              <Grid item>Already have an account?
                <Link href="/SupportSignin" variant="body2">
                   {" Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}