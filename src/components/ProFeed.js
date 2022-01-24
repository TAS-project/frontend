import {Button, makeStyles,Typography,} from "@material-ui/core";
import * as React from 'react';
import { Box, Container, Grid } from "@mui/material";


const useStyles = makeStyles((theme) => ({
  

  media: {
    height: 300,
    width: 200,
    display:'flex',
    justifyContent:'center',
    [theme.breakpoints.down("sm")]: {
      height: 200,
      width: 130,
      display:"flex",
      justifyContent:'center',
    },
    },
    mediaContet : {
    height: 120,
    [theme.breakpoints.down("sm")]: {
      height: 120,
  
    },
  },
}));

const ProFeed = (props) => {



  const BookProfileHandleClick =(Book_ID) => {
    console.log('BookProfile clicked');
    window.location.pathname = `/book/${Book_ID}/`;    
};
const EditBookHandleClick =(Book_ID) => {
    console.log('BookChapter clicked');
    window.location.pathname = `/EditBookInformation/${Book_ID}`;    
};
  const classes = useStyles();
  return (
    
    <Container>
      {
            props.books.map((b) => (
        
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
     
        <Grid container columns={{ xs: 16, sm: 8, md: 8, lg: 16, xl: 16 }} >
          
         
          <Grid item xs={16} md={8} sm={8} className={classes.media}>

            
          <Box component="img" className={classes.media} src={b.Book_Cover} title="My Post"  />
  </Grid>
  <Grid item xs={16} md={8} sm={8}  >    
    <Grid  container  direction="column"  spacing={6}  >
      <Grid item xs={16} md={8} sm={8}>
   
                <Typography gutterBottom variant="h5" style={{ textAlign: 'center' }} >{b.Book_Name}</Typography>
          <Typography  variant="body2" style={{textAlign : 'center'}} >
            {b.Summery}
          </Typography>
  
    </Grid>
     <Grid item xs={16} md={8} sm={8}   style={{ flexDirection: { xs: 'column', md: 'row' }, textAlign:'center' }}>
  
    <Grid container spacing={1} >
      <Grid item  md={8} >
         
         <Button variant="contained"  sx={{padding: '10px',width: { md: '100px', xs: '75px' }}}
         onClick={()=>BookProfileHandleClick(b.Book_ID)}>Book Profile</Button>
      </Grid>

      <Grid item  md={8}>
        <Button variant="contained"  sx={{padding: '10px',width: { md: '100px', xs: '75px' } } }
          onClick={()=>EditBookHandleClick(b.Book_ID)}>Edit  Book</Button>
      </Grid>
          
     </Grid>
     
      </Grid>
  </Grid>
          </Grid>
         
          </Grid>
          
       

      
              </Box>
              ))}
        
  
    </Container>
  );
};

export default ProFeed;
