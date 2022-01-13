
import { Box, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';

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
  border : '1px solid #B0B8B4',
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

export default function Rightbar({ profile }) {

  const ProfileRightbar = () => {
    const classes = useStyles();
    return (
      <>
      <Container>
         <div className={classes.InfoItemiN}>
        <div  className={classes.InfoItem}>
       
     <Grid container justifyContent = "center" direction="row">
        <Grid item xs={8}>
          <h4 className={classes.rightbarTitle}>Taravat information</h4>
        </Grid>
        <Grid className={classes.rightbarInfoItem} item xs={4}>
          <Button variant="outlined" sx={{padding: '15px',width: { md: '100px', xs: '75px' }}}>EDIT</Button>
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

      </div> <br />
     <div className={classes.rightbarInfoItem}>
                <Grid className={classes.rightbarInfoKey} item >
                  <Button variant="outlined" sx={{width: { md: '375px', xs: '275px' } , padding:'15px', position : 'relative',fullWidth:'{true}'}}>Create My Book</Button>
                </Grid>
              </div>
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
