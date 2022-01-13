import Toolbar from '../components/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@mui/system";
import { Divider} from "@material-ui/core";
import BookProfileHeader from '../components/BookProfileHeader';
import Chapter from '../components/Chapter';

const drawerWidth = 240;

export default function ChapterOfBook() {
  
  
    return (
     
    <div>
    <Toolbar />
    <Box
         
               
    sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, left: { sm: `${drawerWidth}px` }, position: 'relative', p: 1 }}>
    
    <BookProfileHeader/>
    
     <Divider ></Divider>           

    <Chapter/>   

    </Box>
    </div>
  );
}