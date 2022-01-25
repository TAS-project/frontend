import { Box, IconButton } from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useState } from 'react'
import axios from 'axios';

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
function UpUsrImg() {
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
      const url = 'http://localhost:3001/User/Upload_Image'
      axios.post(url,formData,config).then((res)=>{alert('uploaded')
    }).catch((err)=>{
        console.log('err',err);
    })
       
      };
  return (
    <div>
          {/* <form onSubmit={onFormSubmit}>
          <input type="file" name="photo" onChange={onInputChange} />
          <button type='submit ' >Upload</button>
          </form> */}
       <Box className={classes.profileImg}>
      
        {/* <img className={classes.profileUserImg}
            src="https://i.ibb.co/FKRrVtF/image.png"
            alt="new"
            /> */}
            <form onSubmit={onFormSubmit}>
          <input type="file" name="photo" onChange={onInputChange} />
         <button type='submit ' >Upload</button>
     </form>
    
    </Box>
     
    </div>
  )
}

export default UpUsrImg
