import {
  Button,
 
  makeStyles,
  Typography,
} from "@material-ui/core";
import * as React from 'react';
import { Box, Container, Grid } from "@mui/material";
import EditBookInfo from "../pages/EditBookInfo";

const useStyles = makeStyles((theme) => ({


  media: {
    height: 200,
    width: 160,
    // objectFit : 'cover',
    // margin : '27px',
    // padding : '40px',
    [theme.breakpoints.down("sm")]: {
      height: 160,
      width: 120,
    },
    },
}));

const ProFeed = ({ props, title }) => {
  const BookProfileHandleClick =() => {
    console.log('BookProfile clicked');
    window.location.pathname = `/book/:bookname`;    
};
const BookEditHandleClick =() => {
    console.log('BookChapter clicked');
    window.location.pathname = `/EditBookInformation`;    
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
        padding : '30px'
      }}
      >
        <Grid container   columns={{ xs: 16, sm: 8, md: 8,lg:16, xl:16 }} >
  <Grid item xs={16} md={8} sm={8}>
          <Box component="img" className={classes.media} src={require(`../img/book_5.png`)} title="My Post" />
  </Grid>
  <Grid item xs={16} md={8} sm={8} >    
    <Grid  container  direction="column"  spacing={9}  >
      <Grid item xs={16} md={8} sm={8}>
   
    <Typography gutterBottom variant="h5"> title </Typography>
          <Typography  variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est.
          </Typography>
  
    </Grid>
     <Grid item xs={16} md={8} sm={8}>
  
    <Grid container spacing={1} direction="row">
      <Grid item  xs={16} md={8} sm={8}>
         <Button variant="outlined" sx={{padding: '15px',width: { md: '100px', xs: '75px' }}}
         onClick={()=>BookProfileHandleClick()}>Book Profile</Button>
      </Grid>
      <Grid item  xs={16} md={8} sm={8}>
         <Button variant="outlined" sx={{padding: '15px',width: { md: '100px', xs: '75px' }}}
         onClick={()=>BookEditHandleClick()}>Edit Book Info</Button>
      </Grid>
          
     </Grid>
     
      </Grid>
  </Grid>
  </Grid>
</Grid>
      
    </Box>
    {/* <Box  className={classes.card}
        boxShadow={12}
        sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems : 'center',
    justifyItems : 'center',
    justifyContent : 'center',
        overflow: 'hidden',
        borderRadius: '12px',
          fontWeight: 'bold',
        padding : '30px'
      }}
      >
        <Grid container justifyContent="center"  columns={{ xs: 16, sm: 8, md: 16 }} sx={{flexDirection: { xs: 'column', md: 'row' },}}>
  <Grid item xs={16} md={8}>
          <Box alignItems="center" justifyContent="center" component="img" className={classes.media} src={require(`../img/book_5.png`)} title="My Post" />
  </Grid>
  <Grid item xs={16} md={8}>    
    <Grid container spacing={9} direction="column">
      <Grid item xs={16} md={8}>
   
    <Typography gutterBottom variant="h5"> title </Typography>
          <Typography  variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est.
          </Typography>
  
    </Grid>
     <Grid item xs={16} md={8}>
  
    <Grid container spacing={1} direction="row">
      <Grid item  xs={16} md={8}>
         <Button variant="outlined" sx={{padding: '15px',width: { md: '100px', xs: '75px' }}}>Book Profile</Button>
      </Grid>
      <Grid item  xs={16} md={8}>
         <Button variant="outlined" sx={{padding: '15px',width: { md: '100px', xs: '75px' }}}>New Chapter</Button>
      </Grid>
          
     </Grid>
     
      </Grid>
  </Grid>
  </Grid>
</Grid>
      
    </Box> */}

     
   
    </Container>
    
  );
};

export default ProFeed;
