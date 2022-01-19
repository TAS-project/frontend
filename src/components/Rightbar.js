
import { Box, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
rightbar : {
  border:' 3px solid black',
},

rightbarTitle : {
  fontSize: '18px',
  fontWeight: '500',
  
},

roundbox : {
  marginBottom: '30px',
},

InfoItem :{
  alignItems : 'center',
  justifyContent :'center',
  borderRadius: '12px',
  paddingLeft : 'lg: 100px',
  padding : '20px',
   
    
},

rightbarInfoKey :{
  fontWeight: '500',
  color:'#555',
  justifyContent : 'center' ,
  alignItems : 'center',
},
InfoItemiN : {
   padding : '10px',
},


}));

export default function Rightbar ({ profile }) {
const EdithandleClick =() => {
    console.log('edit clicked');
    window.location.pathname = `../pages/Signin`;    
};
const NewBookHandleClick =() => {
    console.log('new book clicked');
    // window.location.pathname = `/book/bname/${Chapter_ID}`;    
};

  const ProfileRightbar = () => {   
    const classes = useStyles();
    return (
      <>
      <Container>
      
         <div className={classes.InfoItemiN}>
             <Box boxShadow={12} sx={{borderRadius: '12px'}}>
        <div    className={classes.InfoItem}>
       
     <Grid container justifyContent = "center" direction="row">
        <Grid item xs={8}>
          <h4 className={classes.rightbarTitle}>Taravat information</h4>
        </Grid>
        <Grid className={classes.rightbarInfoItem} item xs={4}>
         
          <Button variant="contained" sx={{width: { md: '50px', xs: '40px' },
          height: { md: '50px', xs: '40px' }}} onClick={()=>EdithandleClick()}>
             <EditIcon />
          </Button>
        </Grid>
      </Grid>
     
          <Box>            
          <Grid container spacing={0}  direction="column"  justifyContent = "center"  >
            <div alignItems = "center" >
              
                  <Grid className={classes.rightbarInfoKey} item >
                    Taravat Monsef
                  </Grid>
                  
              
              </div>
              <div >
                <Grid className={classes.rightbarInfoKey} item >
                  User Name: taravatmonsef
                </Grid>
              </div>
              <div >
                <Grid className={classes.rightbarInfoKey} item >
                  Email : taravatmonsef@gmail.com
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
     </div>
  
      </Container>
             
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <ProfileRightbar />}
      </div>
    </div>
  );
}
