
import {
  Button,
 
  makeStyles,

} from "@material-ui/core";
import * as React from 'react';
import { Box, Container, Grid } from "@mui/material";
import PopUp from "./PopUp";

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles((theme) => ({


  media: {
    height: 300,
    width: 200,
    [theme.breakpoints.down("sm")]: {
      height: 200,
      width: 200,
    },
    },
    buttons : {
        marginLeft : '26px',
        height: '100px',
        width: '100px',
        [theme.breakpoints.down("sm")]: {
             height: '70px',
             width: '200px',
    },
    }


}));

const FollowProfile = (props) => {
  const [openfollwer, setOpenflwr] = React.useState(false);
  const [openfollwing, setOpenflwg] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleOpenflwr = () => {
    setOpenflwr(true);
  };
  const handleOpenflwng = () => {
    setOpenflwg(true);
  };
  const handleClose = (value) => {
    setOpenflwg(false);
    setOpenflwr(false);
    setSelectedValue(value);
  };

  const logouthandleClick =() => {
    console.log(localStorage.getItem("username"));
    window.location.pathname = `/login`;
    window.localStorage.clear();
    if (localStorage.getItem("username") === null) {
     alert("You will be Loged out");
}    
}; 
  const classes = useStyles();

  return (
    <Container>
      
        
      <Box 
        boxShadow={12}
        sx={{
        display: 'flex',
       flexDirection: { xs: 'column', md: 'column' ,sm:'column',lg: 'row'},
        alignItems : 'center',
    justifyItems : 'center',
    justifyContent : 'center',
        overflow: 'hidden',
        borderRadius: '12px',
          fontWeight: 'bold',
        //padding : '30px'
      }}
      >
    <Grid container  columns={{ xs: 4, sm: 4, md: 12}} sx={{padding:'5px'}} >
        <Grid item xs={4} >
          <Button onClick={() => logouthandleClick()} className={classes.buttons} > log out </Button>   
        </Grid>

        <Grid item xs={4}   >
              <Button onClick={() => handleOpenflwr()} className={classes.buttons}> Follower </Button>   
            <PopUp selectedValue={selectedValue} open={openfollwer} list={props.follower} title="Followers" onClose={() => handleClose()}/>
        </Grid>

        <Grid item xs={4} >
              <Button onClick={() => handleOpenflwng()}  className={classes.buttons}> Following</Button>   
            <PopUp selectedValue={selectedValue} open={openfollwing} list={props.following} title="Followings" onClose={() => handleClose()}/>
        </Grid>
</Grid>
      
    </Box>
 
     
   
    </Container>
    
  );
};

export default FollowProfile;
