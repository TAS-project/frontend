import Post from "./Post";
import { Post_HomePage } from "../dummy";
import Box from '@mui/material/Box';

import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  post: {
    boxshadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
  },
  Cover: {
    width: '120px',
    height: '200px',
    borderradius: '3%',
    objectfit: 'cover',
    marginright: '10px',
    },
  
}));
export default function Feed() {
  
  const classes = useStyles();
  return (
    <Box
      className={classes.post}
      component="main"
      sx={{width: { sm: `calc(100% - ${drawerWidth}px)` }, left: { sm: `${drawerWidth}px` } ,position: 'relative', p:1 }}
      >
      
      
              {
           Post_HomePage.map((p) => (
             <Post xs={{ boxShadow: 3, m: 2 }} key={p.Chapter_ID} chapter={p} />
            
                  ))
              }
      
    </Box>
  );
}