import Post from "./Post";
import { Post_HomePage } from "../dummy";
import Box from '@mui/material/Box';

import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  post: {
    margin:'auto'
  },
  Cover: {
    width: '120px',
    height: '200px',
    borderradius: '3%',
    objectfit: 'cover',
    marginright: '10px',
    },
  
}));
export default function BookChapters() {
  
  const classes = useStyles();
  return (
    <Box
      className={classes.post}
      component="main"
      sx={{width:'90%' ,position: 'relative', p:1 }}
      >
      
      
              {
           Post_HomePage.map((p) => (
             <Post xs={{ boxShadow: 3, m: 2 }} key={p.Chapter_ID} chapter={p} />
            
                  ))
              }
      
    </Box>
  );
}