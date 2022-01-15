import Toolbar from '../components/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@mui/system";
import Rightbar from '../components/Rightbar';
import ProFeed from '../components/ProFeed';
import { Avatar, Grid } from '@mui/material';
import { Container } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
profile: {
  display: 'flex',
},

profileRight: {
  flex: 9,
},
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
  borderColor : '#ffffff',
 
},
// profileInfo: {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
// },

profileInfoName: {
  fontSize: '24px',
},

profileInfoDesc: {
  fontWeight: '300',
},

// profileRightBottom: {
//   display: 'flex',
// },
}));

export default function BookProfile() {
  
  const classes = useStyles();
    return (     
   <>
      <Toolbar />
       <Box
    className={classes.root}            
    component="main"
    sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, left: { sm: `${drawerWidth}px` }, position: 'relative', p: 1 }}>
      <Box className={classes.profile}>
        <Box className={classes.profileRight}>
            <Box sx={{ height: '320px', position: 'relative',}} >
              <img  className={classes.profileCoverImg}
                  src={require(`../img/book.jpg`)}   alt=""  
              />
              <img className={classes.profileUserImg}
                  src={require(`../img/book_3.png`)}   alt=""
              />
            </Box>
            <Box  className={classes.profileInfo}>
              <h4 className={classes.profileInfoName} >Taravat Monsef</h4>
              {/* <span className={classes.profileInfoDesc} >I'm a Writer :D</span> */}
            </Box>
            <Box className={classes.profileRightBottom}>
              <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} direction="row"  justifyContent="center"  alignItems="center">
                <Grid item xs={6}>
                  <ProFeed />
                </Grid>
                <Grid item xs={6}>
                  <Rightbar />
                     
                </Grid>
                </Grid>  
              </Container>
                                        
            </Box>
        </Box>
      </Box>
    </Box>
      
    </>
    
  );
}