import { Box, CssBaseline, IconButton, makeStyles } from '@material-ui/core'
import React from 'react'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

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
function BookImgUp() {
     const classes = useStyles();
  return (
    <>
 <CssBaseline />
    <Box className={classes.profileImg}>
        <img  className={classes.profileUserImg}
        src={require(`../img/book_2.png`)}   alt=""/>
        <IconButton className={classes.iconbut}>
            <PhotoCameraIcon className={classes.profileUserIcon}  />
        </IconButton> 
     
    </Box>
    </>
  )
}

export default BookImgUp
