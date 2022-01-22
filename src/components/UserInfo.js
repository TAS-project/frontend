
import { Box, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';
import { Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
rightbar : {
  border:' 3px solid black',
},



roundbox : {
  marginBottom: '30px',
},

InfoItem :{
  alignItems : 'center',
  justifyContent :'center',
  borderRadius: '12px',
  padding : '30px',
   
    
},


InfoItemiN : {
  padding : '10px'
}

}));

export default function UserInfo () {
const EdithandleClick =() => {
    console.log('edit clicked');
    window.location.pathname = `/editUser`;    
};
const NewBookHandleClick =() => {
    console.log('new book clicked');
    window.location.pathname = `/NewBook`;    
};

   
    const classes = useStyles();
    return (
      <>
      <Container>         
        <Box boxShadow={12} sx={{borderRadius: '12px'}}>
        <div    className={classes.InfoItem}>
       
     <Grid container justifyContent = "center" direction="row">
        <Grid item xs={8}>
           <Typography gutterBottom variant="h5"> User information </Typography>
         
        </Grid>
        <Grid item xs={4} >
         
          <Button variant="contained" sx={{width: { md: '60px', xs: '40px' },
          height: { md: '50px', xs: '40px' }, paddingLeft:'10px'}} onClick={()=>EdithandleClick()}>
             <EditIcon />
          </Button>
        </Grid>
      </Grid>
     
          <Box>            
          <Grid container spacing={0}  direction="column"  justifyContent = "center"  >
            <div alignItems = "center" >
              
                  <Grid  item item className={classes.InfoItemiN}>
                    <Typography  gutterBottom variant="h7">First Name :  name </Typography>
                  </Grid>
                  
              
              </div>
              <div >
                <Grid item className={classes.InfoItemiN}>
                  <Typography gutterBottom variant="h7">Last Name :  family </Typography>

                </Grid>
              </div>
              <div >
                <Grid  item item className={classes.InfoItemiN}>
                  <Typography  gutterBottom variant="h7">UserName :  username </Typography>

                </Grid>
              </div>
              <div >
                <Grid  item item className={classes.InfoItemiN}>
                  <Typography  gutterBottom variant="h7">Email :  email@gmail.com </Typography>

                </Grid>
              </div>
          </Grid>
        </Box>

      </div>
        </Box> <br />
         <Box boxShadow={12} sx={{borderRadius: '12px'}}>
     <div className={classes.rightbarInfoItem}>
                <Grid className={classes.rightbarInfoKey} item >
                  <Button variant="contained"  fullWidth  
                  sx={{width: {mt: 3, mb: 2 } , padding:'15px', position : 'relative',fullWidth:'{true}'}}
                  onClick={()=>NewBookHandleClick()}>
                    Create My Book
                    </Button>
                </Grid>
              </div>
               </Box>
     
  
      </Container>
             
      </>
    );
  
  
}
