import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import * as React from 'react';
import { Box, Container, Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(6),
   
  },

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

const ProFeed = ({ props, title }) => {
  const classes = useStyles();
  return (
    <Container>
      
        
      <Box  className={classes.card}
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
      
    </Box>
    <Box  className={classes.card}
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
      
    </Box>

     
   
    </Container>
    
  );
};

export default ProFeed;
