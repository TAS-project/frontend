import Box from '@mui/material/Box';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
footer:{
        opacity: '60%', 
        margin: '30px auto',
        padding: '20px',
        textAlign: 'center',
        left: '0',
        bottom: '0',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
},

footerlinks :{
  paddingleft:'0',
  liststyle:'none',
},

  
}));
export default function Footer() {
  
  const classes = useStyles();
  return (
      <Box
      component="main"
      sx={{width: { md: `calc(100% - ${drawerWidth}px)` }, left: { md: `${drawerWidth}px` } ,position: 'relative', p:1 }}
      >
        
        <div >
          <div>
            <Box
            className={classes.footer}      >
            Copyright &copy; 2022 All Rights Reserved by TAS : <br/> Taravat Anita Saba 
         
            </Box>
          </div>

          
        </div>
      </Box>

  );
}