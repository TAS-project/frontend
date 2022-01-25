import { Box, CssBaseline, IconButton } from '@material-ui/core'
import React from 'react'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useState } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
profileUserImg: {
  width: '160px',
  height: '200px',
 // borderRadius: '50%',
  objectFit: 'cover',
  position: 'absolute',
  left: '0',
  right: '0',
  margin: 'auto',
  border : '3px solid grey',
  //borderColor : '#ffffff',
 
},
profileImg: {
  width: '180px',
  height: '180px',
 // backgroundColor : '#ffffff',
  position: 'absolute',
  left: '0',
  right: '0',
  margin: 'auto',
  top: '40px', 
},
profileUserIcon: {
 fontSize : 'medium',
  objectFit: 'cover',
  color : 'black'
},
iconbut :{
    marginLeft : '130px',
    marginTop : '160px',
   // color : 'hsla(0, 0%, 100%, 0.769)6',
}
}));
function BookImgUp(bookimg) {
     const classes = useStyles();
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
      };
      const url = 'http://localhost:3001/User/Upload_Book_Cover/:BookID/'
      axios.post(url,formData,config).then((res)=>{alert('uploaded')
    }).catch((err)=>{
        console.log('err',err);
    })
       
      };
  return (
    <>
 {/* <CssBaseline />
    <Box className={classes.profileImg}>
        <img  className={classes.profileUserImg}
        src={require(`../img/bookimg.png`)}   alt=""/>
        <IconButton className={classes.iconbut}>
            <PhotoCameraIcon className={classes.profileUserIcon}  />
        </IconButton> 
     
    </Box> */}

      <form onSubmit={onFormSubmit}>
          <input type="file" name="photo" onChange={onInputChange} />
          <button type='submit ' >Upload</button>
          </form>
    </>
  )
}

export default BookImgUp
