import Toolbar from '../components/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@mui/system";
import ProFeed from '../components/ProFeed';
import { Grid } from '@mui/material';
// import { Container } from '@material-ui/core';
import * as React from 'react';
// import Followers from '../components/Followers';
import FollowProfile from '../components/FollowProfile';
import UserInfo from '../components/UserInfo';
import { profile } from "../dummy";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
// profile: {
//   display: 'flex',
// },

// profileRight: {
//   flex: 9,
// },
profileCover :{
  Height: '320px',
  position: 'relative',
},
profileInfo : {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent : 'center',
},
profileCoverImg: {
  width: '100%',
  height: '250px',
  objectFit : 'cover',
},
// profileCover: {
//   Height: '320px',
//   position: 'relative',
// },
profileUserImg: {
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  objectFit: 'cover',
  position: 'absolute',
  left: '0',
  right: '0',
  margin: 'auto',
  top: '150px',
  border : '3px solid grey',
  borderColor : 'grey',
 
},
// profileInfo: {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
// },
container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "relative",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
profileInfoName: {
  fontSize: '24px',
  padding : '10px'
},

profileInfoDesc: {
  fontWeight: '300',
},
boxes : {
  marginBottom : '10px',
},
// profileRightBottom: {
//   display: 'flex',
// },
}));

export default function BookProfile(props) {
  
  const classes = useStyles();
    return (     
   <div>
      <Toolbar />
  <Box
    className={classes.root}            
    component="main"
    sx={{ width: { md: `calc(100% - ${drawerWidth}px)` }, left: { md: `${drawerWidth}px` }, position: 'relative', p: 1 }}>
      <Box className={classes.profile}>
        <Box  className={classes.profileRight}>
            <Box sx={{ height: '320px', position: 'relative',}} >
              <img position="fixed"  className={classes.profileCoverImg}
                  src={require(`../img/book.jpg`)}   alt=""  
              />
              <img position="fixed" className={classes.profileUserImg}
                  src={require(`../img/image.png`)}   alt=""
              />
            </Box>
            <Box  className={classes.profileInfo}>
              <h4 className={classes.profileInfoName} > {profile.Username}</h4>
              {/* <span className={classes.profileInfoDesc} >I'm a Writer :D</span> */}
            </Box>
                   
            <Box >
             
                <Grid container  columns={{ xs: 4, sm: 8, md: 12 }} direction="row" >
                <Grid sx={{marginBottom : '30px',}} item xs={6} >
                  <UserInfo props={props}/>                 
                </Grid>
                <Grid item xs={6} >
                  <Grid containner direction="column">
                    <Grid  sx={{marginBottom : '30px'}} item >
                      <FollowProfile />
                    </Grid>
                    <Grid sx={{marginBottom : '30px'}} item >
                      <ProFeed />
                    </Grid>
                 </Grid>
                  
                </Grid>
                </Grid>  
             
                                        
            </Box>
 </Box>
      </Box>
    </Box>
      
    </div>
    
  );
}