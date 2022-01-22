import Toolbar from '../components/Toolbar';
import { Box } from "@mui/system";
import { Divider} from "@material-ui/core";
import BookProfileHeader from '../components/BookProfileHeader';
import Chapter from '../components/Chapter';

const drawerWidth = 240;

export default function GenrePage() {
  
  
    return (
     
    <div>
    <Toolbar />
    <Box
         
               
    sx={{ width: { md: `calc(100% - ${drawerWidth}px)` }, left: { md: `${drawerWidth}px` }, position: 'relative', p: 1 }}>
    
    <BookProfileHeader/>
    
     <Divider ></Divider>           

    <Chapter/>   

    </Box>
    </div>
  );
}