import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/core';
//import { profile } from "../dummy";

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
  const [profile, setprofile] = useState({});
  const [fetched, setfetched] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      UserName : data.get('UserName'),
    });
     fetch('http://localhost:3001/User/Edit', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json',
          'Authorization': "Bearer " + localStorage.getItem("token"),
        },
      body: JSON.stringify({
          "Username": data.get('UserName'),
          "First_Name": data.get('firstName'),
          "Last_Name": data.get('lastName'),
          "Password": data.get('email'),
          "Email": data.get('email')
        })
      }).then(res => {
        const status = res.status;
        if (status === 400) { // error coming back from server
          console.log('Error in fecthing');
        } else if (status === 401) { // error coming back from server
          console.log('401');
        }
        return (res.json());

      }).then((response) => {
        console.log("fgvu :" + JSON.stringify(response))
        window.location.pathname = `/profile/${data.get('UserName')}/`;
        
      })

  };


    useEffect(() => {
    const username = window.location.href.split('/')[4];
    console.log("username: " + username)
    
  fetch('http://localhost:3001/User/Profile_Page', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      },
    body: JSON.stringify({
        "Username": username
      })
    }).then(res => {
      const status = res.status;
      if (status === 400) { // error coming back from server
        console.log('Error in fecthing book');
      } else if (status === 401) { // error coming back from server
        console.log('401');
      }
      console.log("print  : " + JSON.stringify(res))
      return (res.json());

    }).then((response) => {
      console.log("print: " + JSON.stringify(response));
      setprofile(response.profile);
      setfetched(true)
      }) 
      
  }, []);

  return (
      <div>
      {
        fetched === true ?
      <Container component="main" maxWidth="xs" >
         
    <CssBaseline />
    <Box className={classes.profileImg}>
        <img  className={classes.profileUserImg}
        src={profile.pic}   alt=""/>
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
                <TextField name="firstName" required fullWidth id="firstName" label="First Name" defaultValue= {profile.First_Name} autoFocus/>
               
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="lastName" label="lastNam" name="lastName" defaultValue= {profile.Last_Name} autoFocus/>
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="UserName" label="User Name"  type="UserName" defaultValue= {profile.Username} id="UserName" autoFocus/>
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="email"  label="Email" name="email" defaultValue= {profile.email} autoFocus/>
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
        
        : null
      }
       </div>

  );
};
