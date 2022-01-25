
import { Box, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';
import { Typography } from '@mui/material';
import {useEffect, useState } from "react";
//import { profile } from "../dummy";

const useStyles = makeStyles((theme) => ({
rightbar : {
  border:' 3px solid black',
},



roundbox : {
  marginBottom: '30px',
},

InfoItem :{
  alignItems : 'center',
  justifyContent :'center',
  borderRadius: '12px',
  padding : '30px',
   
    
},


InfoItemiN : {
  padding : '10px'
}

}));

export default function UserInfo(props) {
      const [follow, togglefollow] = useState(0);
const EdithandleClick =() => {
    console.log('edit clicked');
    window.location.pathname = `/editUser/${props.profile.Username}`;    
};
const NewBookHandleClick =() => {
    console.log('new book clicked');
    window.location.pathname = `/NewBook`;    
  };
const fuserClick =() => {
console.log("please toggle : " + props.profile.Username)
    fetch('http://localhost:3001/User/UserFollow', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        "Username": props.profile.Username,
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
      //console.log('taravat : ' + JSON.stringify(Post_HomePage)  );
      if (response.Response === 'Done')
      if  (follow === 0)
        togglefollow(1)
      if  (follow === 1)
          togglefollow(0)
      }) 
      
  };
  useEffect(() => {
        console.log('what we have is  : ' + JSON.stringify(props))
        togglefollow(props.profile.Followed_State)
  }, []);


    const classes = useStyles();
    return (
      <>
      <Container>         
        <Box boxShadow = {12} sx={{borderRadius: '12px'}}>
        <div    className={classes.InfoItem}>
       
     <Grid container justifyContent = "center" direction="row">
        <Grid item xs={8}>
           <Typography gutterBottom variant="h5"> My information </Typography>
         
        </Grid>
        <Grid container spacing={1} item xs={4} >
         <Grid item xs={6}  > 
        {props.profile.Followed_State === -1 && <Button variant="contained" sx={{width: { md: '60px', xs: '40px' },
          height: { md: '50px', xs: '40px' }, paddingLeft:'10px'}} onClick={()=>EdithandleClick()}>
             <EditIcon />
                    </Button>
                    }
         </Grid>

        </Grid>
      </Grid>
     
          <Box>            
          <Grid container spacing={0}  direction="column"  justifyContent = "center"  >
            <div alignItems = "center" >
              
                  <Grid  item className={classes.InfoItemiN}>
                    <Typography  gutterBottom variant="h7">First Name :  {props.profile.First_Name} </Typography>
                  </Grid>
                  
              
              </div>
              <div >
                <Grid item className={classes.InfoItemiN}>
                  <Typography gutterBottom variant="h7">Last Name :  {props.profile.Last_Name} </Typography>

                </Grid>
              </div>
              <div >
                <Grid  item className={classes.InfoItemiN}>
                  <Typography  gutterBottom variant="h7">UserName :  {props.profile.Username} </Typography>

                </Grid>
              </div>
              <div >
                <Grid  item  className={classes.InfoItemiN}>
                  <Typography  gutterBottom variant="h7">Email :  {props.profile.email} </Typography>

                </Grid>
              </div>
          </Grid>
        </Box>

      </div>
        </Box> <br />
         <Box boxShadow={12} sx={{borderRadius: '12px'}}>
     <div className={classes.rightbarInfoItem}>
              <Grid className={classes.rightbarInfoKey} item >{
                props.profile.Username.toLowerCase() === (localStorage.getItem("username")).toLowerCase() ?
                <Button variant="contained"  fullWidth  
                  sx={{width: {mt: 3, mb: 2 } , padding:'15px', position : 'relative',fullWidth:'{true}'}}
                  onClick={()=>NewBookHandleClick()}>
                    Create My Book
                  </Button>
                  :
                  <Button variant="contained"  fullWidth  
                  sx={{width: {mt: 3, mb: 2 } , padding:'15px', position : 'relative',fullWidth:'{true}'}}
                  onClick={()=>fuserClick()}>
                   {follow === 0 ? 'follow ' : 'unfollow '} 
                  </Button>
                }
                  
                </Grid>
              </div>
               </Box>
     
  
      </Container>
             
      </>
    );
  
  
}
