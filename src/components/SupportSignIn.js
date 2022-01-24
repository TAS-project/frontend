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

function SupportSignIn() {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
    fetch('http://localhost:3001/Supporter/login', {
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
      const status = res.status;
      if (status === 400) { // error coming back from server
        console.log('Error in fecthing');
      } else if (status === 401) { // error coming back from server
        console.log('worng password or username');
      }
       
      return (res.json());

    }).then((response) => {
      localStorage.setItem('token', response.accessToken);
      localStorage.setItem('user', data.get('username'));
      localStorage.setItem('access', true);
      console.log(localStorage.getItem("token"));
      console.log(localStorage.getItem("username"));
      window.location.pathname = `/home/`;
      }) 
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
            boxShadow={12}
          sx={{  
            marginTop: "150px",
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button><br />
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>Don't have an account?
                <Link href="/SupportSignup" variant="body2">
                  {" Sign Up"}
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
export default SupportSignIn