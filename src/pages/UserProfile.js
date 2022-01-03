import Toolbar from '../components/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@mui/system";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Grid} from '@material-ui/core';
import Image from '../book.jpg'; // Import using relative path
import { Avatar } from '@mui/material';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
root: {
        
},
bookpic: {
    flex: '0',

},
  media: {
    padding:'5px',
    display: 'block',
        margin: 'auto',
    border: '2px solid',
    borderColor: '#E7EDF3',
    borderRadius: 16,
},
  avatar: {
   
  },
}));
const sectionStyle = {
  backgroundImage: `url(${Image})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};
export default function BookProfile() {
  
  const classes = useStyles();
    return (
     
    <div>
    <Toolbar />
    <Box bgcolor={'#E7EDF3'} sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, left: { sm: `${drawerWidth}px` }, position: 'relative' }}   >
      <Box style={sectionStyle} sx={{ p: 13, z:-1 }} >
      <Avatar className={classes.avatar}
        alt="Remy Sharp"
        src={require(`../img/book_3.png`)}
        sx={{ width: 150, height: 150 , z:+1}}
      /> </Box>  
  


    </Box>
     
      
    
              
      
   
    </div>
    
  );
}