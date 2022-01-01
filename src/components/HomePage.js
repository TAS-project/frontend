import Post from "./Post";
import { Post_HomePage } from "../dummy";
import Box from '@mui/material/Box';
const drawerWidth = 240;




export default function Feed() {
  

  return (
    <Box
      //className={classes.root}
      component="main"
      sx={{width: { sm: `calc(100% - ${drawerWidth}px)` }, left: { sm: `${drawerWidth}px` } ,position: 'relative', p:1 }}
      >
      
      
              {
           Post_HomePage.map((p) => (
             <Post xs={{ m: 2 }} key={p.Chapter_ID} chapter={p} />
            
                  ))
              }
      
    </Box>
  );
}