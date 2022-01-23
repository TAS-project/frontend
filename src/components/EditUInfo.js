import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
profileUserImg: {
  width: '170px',
  height: '170px',
  borderRadius: '50%',
  objectFit: 'cover',
  position: 'absolute',
  left: '0',
  right: '0',
  margin: 'auto',
  border : '3px solid grey',
  borderColor : '#ffffff',
 
},
profileImg: {
  width: '180px',
  height: '180px',
  backgroundColor : '#ffffff',
  position: 'absolute',
  left: '0',
  right: '0',
  margin: 'auto',
  top: '40px', 
},
profileUserIcon: {
 fontSize : 'medium',
  objectFit: 'cover',
},
}));
export default function  EditUInfo() {
      const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (

      <Container component="main" maxWidth="xs" >
         
    <CssBaseline />
    <Box className={classes.profileImg}>
        <img  className={classes.profileUserImg}
        src={require(`../img/book_3.png`)}   alt=""/>
        <IconButton sx={{marginTop: '120px',marginLeft : '125px'}}>
            <PhotoCameraIcon className={classes.profileUserIcon}  />
        </IconButton> 
     
    </Box>

    
        <Box
          sx={{
            marginTop: 25,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
           
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField name="firstName" required fullWidth id="firstName" label="First Name" defaultValue="Hello World" autoFocus/>
               
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="lastName" label="lastNam" name="lastName" defaultValue="Hello World" autoFocus/>
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="UserName" label="User Name"  type="UserName" defaultValue="Hello World" id="UserName" autoFocus/>
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="email"  label="Email" name="email" defaultValue="Hello World" autoFocus/>
              </Grid>
              
              <Grid item xs={12}>
                <TextField required fullWidth name="password" label="Password" type="password" id="password"  autoFocus/>
              </Grid>    
              <Grid item xs={12}>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 , height:'50px'}}> Save </Button>
              </Grid>          
            </Grid >
            

           
          </Box>
        </Box>
       
      </Container>

  );
};