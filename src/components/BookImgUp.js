import { Box, CssBaseline, IconButton } from '@material-ui/core'
import React from 'react'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useState } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@mui/material';
const useStyles = makeStyles((theme) => ({
profileUserImg: {
  width: '170px',
  height: '170px',
  //borderRadius: '10%',
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
profileImg3: {
  width: '400px',
//   height: '180px',
  //backgroundColor : '#ffffff',
  position: 'absolute',
  left: '0',
  right: '0',
  margin: 'auto',
  top: '240px', 
},
profileImg4: {
  width: '400px',
//   height: '180px',
  //backgroundColor : '#ffffff',
  position: 'absolute',
  left: '0',
  right: '0',
  margin: 'auto',
  top: '240px',
  alignItems : 'center',
   justifyContent:'center',
   [theme.breakpoints.down("sm")]: {
     direction : 'column',
     
      //display:"flex",
      
    }, 
},
profileImg2: {
  // width: '400px',
  // height: '300px',
  backgroundColor : '#ffffff',
  position: 'absolute',
  left: '0',
  right: '0',
  margin: 'auto',
  top: '30px', 
 
 
},
profileUserIcon: {
 fontSize : 'medium',
  objectFit: 'cover',
},
}));
function BookImgUp(bookimg) {
     const classes = useStyles();
     const Book_ID = window.location.href.split('/')[4];
     console.log(Book_ID);
       const [file, setFile] = useState(null);
 
      const onInputChange = (e) => {
        setFile(e.target.files[0]);
       
      };
 
      const onFormSubmit = async (e) => {
          e.preventDefault();
        const formData = new FormData();
        formData.append("photo", file);
      
        
      const config = {
        headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
         
      },
        params : {BookID: Book_ID},
       
      };
      const url = 'http://localhost:3001/User/Upload_Book_Cover/:BookID/'
      axios.post(url,formData,config).then((res)=>{alert('uploaded')
    }).catch((err)=>{
        console.log('err',err);
    })
       
      };
  return (
    <div >
    <Box justifyContent='center' className={classes.profileImg2}>
       <Box className={classes.profileImg}>
        <img className={classes.profileUserImg}
            src={require('../img/bookimg.png')}
            alt="new"
            />
        </Box>
      
      <Grid container className={classes.profileImg4} >
         <form onChange={onFormSubmit}>
          <Grid item >
           
          <input type="file" name="photo" onChange={onInputChange} /></Grid>
          <Grid item  sx={{padding: '10px'}}>
          <Button variant="contained"  type='submit ' > Upload </Button>
         </Grid>
         </form>
          </Grid>
        </Box>
    
           
        </div>
  )
}

export default BookImgUp
