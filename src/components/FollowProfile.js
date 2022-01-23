
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
    // objectFit : 'cover',
    // margin : '27px',
    // padding : '40px',
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
  //   mediaContet : {
  //   height: 100,
  //   // width: 200,
  //   // objectFit : 'cover',
  //   // margin : '27px',
  //   // padding : '40px',
  //   [theme.breakpoints.down("sm")]: {
  //     height: 100,
  //     // width: 200,
  //   },
  // },
}));

const FollowProfile = ({ props, title }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  // open create component 
  const [showCreate, setShowCreate] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
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
          <Button className={classes.buttons} > Post </Button>   
        </Grid>

        <Grid item xs={4}   >
              <Button onClick={() => handleClickOpen()} className={classes.buttons}> Follower </Button>   
            <PopUp selectedValue={selectedValue} open={open} onClose={() => handleClose()}/>
        </Grid>

        <Grid item xs={4} >
              <Button onClick={() => handleClickOpen()}  className={classes.buttons}> Following</Button>   
            <PopUp selectedValue={selectedValue} open={open} onClose={() => handleClose()}/>
        </Grid>
</Grid>
      
    </Box>
 
     
   
    </Container>
    
  );
};

export default FollowProfile;
