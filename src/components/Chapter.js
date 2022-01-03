import Post from "./Post";
import { chapter_1 } from "../dummy";
import Box from '@mui/material/Box';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  post: {
    margin: 'auto',
    padding: '40px',
    width: '90%',
    //border: '2px solid',
    borderColor: '#E7EDF3',
    borderRadius: 16,
    transition: '0.4s',

    
  },

}));
export default function Chapters() {
  
  const classes = useStyles();
  return (
    <Box
      className={classes.post}
      component="main"
      sx={{width:'90%' ,position: 'relative', p:1 }}
      >
     
    <Typography style={{ paddingTop:12,textAlign:"center"}} variant="h5" gutterBottom component="div">
        {"chapter "+ chapter_1.Chapter_ID + " :  "+ chapter_1.chapter_name}
    </Typography>
    <Typography style={{fontSize:20}} variant="body1" gutterBottom>
        {chapter_1.content}
      </Typography>      
    </Box>
  );
}