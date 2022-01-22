import {
  Button,
 
  makeStyles,
  Typography,
} from "@material-ui/core";
import * as React from 'react';
import { Box, Container, Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  

  media: {
    height: 300,
    width: 200,
    display:'flex',
    justifyContent:'center',
    // objectFit : 'cover',
    // margin : '27px',
    // padding : '40px',
    [theme.breakpoints.down("sm")]: {
      height: 200,
      width: 130,
      display:"flex",
      justifyContent:'center',
    },
    },
    mediaContet : {
    height: 120,
    //width: 70,
    // objectFit : 'cover',
    // margin : '27px',
    // padding : '40px',
    [theme.breakpoints.down("sm")]: {
      height: 120,
      // width: 50,
    },
  },
}));

const ProFeed = ({ props, title }) => {
  const BookProfileHandleClick =() => {
    console.log('BookProfile clicked');
    window.location.pathname = `/book/:bookname`;    
};
const BookChapterHandleClick =() => {
    console.log('BookChapter clicked');
    window.location.pathname = `/EditBookInfo`;    
};
  const classes = useStyles();
  return (
    <Container>
      
        
      <Box 
        boxShadow={12}
        sx={{
        display: 'flex',
        flexDirection: { xs: 'row', md: 'column' ,sm:'column',lg: 'row'},
        alignItems : 'center',
  
        justifyContent : 'center',
        overflow: 'hidden',
        borderRadius: '12px',
          fontWeight: 'bold',
        padding : '30px'
      }}
      >
        <Grid container   columns={{ xs: 16, sm: 8, md: 8,lg:16, xl:16 }} >
  <Grid item xs={16} md={8} sm={8}  className={classes.media}>
          <Box component="img" className={classes.media} src={require(`../img/book_5.png`)} title="My Post"  />
  </Grid>
  <Grid item xs={16} md={8} sm={8}  >    
    <Grid  container  direction="column"  spacing={6}  >
      <Grid item xs={16} md={8} sm={8}>
   
    <Typography gutterBottom variant="h5" style={{textAlign : 'center'}} > title </Typography>
          <Typography  variant="body2" style={{textAlign : 'center'}} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est.
          </Typography>
  
    </Grid>
     <Grid item xs={16} md={8} sm={8}   style={{ flexDirection: { xs: 'column', md: 'row' }, textAlign:'center' }}>
  
    <Grid container spacing={1} >
      <Grid item  md={8} >
         
         <Button variant="contained" sx={{padding: '10px',width: { md: '100px', xs: '75px' }}}
         onClick={()=>BookProfileHandleClick()}>Book Profile</Button>
      </Grid>

      <Grid item  md={8}>
        <Button variant="contained" sx={{padding: '10px',width: { md: '100px', xs: '75px' } } }
          onClick={()=>BookChapterHandleClick()}>Edit  Book</Button>
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
