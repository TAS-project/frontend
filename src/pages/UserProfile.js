import Toolbar from '../components/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@mui/system";
import ProFeed from '../components/ProFeed';
import { Grid } from '@mui/material';
import * as React from 'react';
import FollowProfile from '../components/FollowProfile';
import UserInfo from '../components/UserInfo';
//import { profile } from "../dummy";
//import { following } from "../dummy";
//import { follower } from "../dummy";
//import { user_books } from "../dummy";
import { useEffect, useState } from "react";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

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
    //height: "100vh",
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

}));

export default function BookProfile() {
  const [profile, setprofile] = useState({});
  const [follower, setfollower] = useState([]);
  const [following, setfollowing] = useState([]);
  const [user_books, setbooks] = useState(null);
  //const [followers, setfollowers] = useState(false);
  const [fetched, setfetched] = useState(false);

  useEffect(() => {
    const username = window.location.href.split('/')[4];
    console.log("username:   " + username)
    
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
      console.log("print  : " + JSON.stringify(response));
      setprofile(response.profile);
      setfollower(response.follower);
      setfollowing(response.following);
      setfollowing(response.following);
      setbooks(response.user_books);
      setfetched(true)
      }) 
      
  }, []);


  const classes = useStyles();
    return (     
   <div className={classes.con}>
        <Toolbar />
        {fetched === true ?
          <Box 
            className={classes.root}
            component="main"
            justifyContent='center'
            alignContent='center'
            sx={{ width: { md: `calc(100% - ${drawerWidth}px)` }, left: { md: `${drawerWidth}px` }, position: 'relative', p: 1 }}>
            <Box className={classes.profile}>
              <Box className={classes.profileRight}>
                <Box sx={{ height: '320px', }} >
                  <img position="fixed" className={classes.profileCoverImg}
                    src={require(`../img/book.jpg`)} alt=""
                  />
                  <img position="fixed" className={classes.profileUserImg}
                    src={profile.pic} alt=""
                  />
                </Box>
                <Box className={classes.profileInfo}>
                  <h4 className={classes.profileInfoName} > {profile.Username}</h4>
                  {/* <span className={classes.profileInfoDesc} >I'm a Writer :D</span> */}
                </Box>
                   
                <Box >
             
                  <Grid container columns={{ xs: 4, sm: 8, md: 12 }} direction="row" >
                    <Grid sx={{ marginBottom: '30px', }} item xs={6} >
                      <UserInfo profile={profile} />
                    </Grid>
                    <Grid item xs={6} >
                      <Grid containner direction="column">
                        <Grid sx={{ marginBottom: '30px' }} item >
                          <FollowProfile follower={follower} following={following} />
                        </Grid>
                        <Grid sx={{ marginBottom: '30px' }} item >
                          <ProFeed books={user_books} />
                        </Grid>
                      </Grid>
                  
                    </Grid>
                  </Grid>
             
                                        
                </Box>
              </Box>
            </Box>
          </Box>
          :
          null
}
    </div>
    
  );
}