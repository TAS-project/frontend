import { book_1 , Chapters } from "../dummy";
import Toolbar from '../components/Toolbar';
import WriteChapter from '../components/WriteChapter';
import Chapter from '../components/Chapter';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@mui/system";
import { Divider, Typography } from "@material-ui/core";
import { Button, Rating } from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';
import ListIcon from '@mui/icons-material/List';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

import BookChapters from '../components/BookChapters';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
root: {
        
},
bookinfo: {
    flex: '4',
    margin:'auto',
    justifycontent:'center',
     textAlign:'center',
    display: 'block',
    verticalAlign: 'middle',
    padding: '20px',
    width: '90%',
    borderRadius: 16,
    backgroundColor: "#f6f7f4",
    opacity:"85%"
    },

bookpic: {
    flex: '0',
    backgroundColor: 'red',

},

media: {
  position: 'relative',
  top: '0',
    left: '0',
   width:'100%',
    borderRadius: 16,
    border: '2px solid',
    borderColor: '#E7EDF3',
},
image1: {
  top: '0',
    left: '0',
    right: '0',
  display: 'block',
    filter: 'blur(12px)',
 margin: 'auto',
  objectFit: 'cover',
},
image2: {
  position: 'absolute',
  top: '0px',
left: '0px',
    right: '0',
  bottom:'0',
  margin: 'auto',
  border: '2px solid',
  borderColor: '#E7EDF3',
  display: 'block',
verticalAlign: 'middle',
}    
}));
export default function ChapterOfBook() {
  
  const classes = useStyles();
    return (
     
    <div>
    <Toolbar />
    <Box
    className={classes.root}            
               
    sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, left: { sm: `${drawerWidth}px` }, position: 'relative', p: 1 }}>
    
    {/* pic */}
   <Box className={classes.media} sx={{height:{ md:'410px' , xs:'300px'}}}>
    <Box className={classes.image1} component="img" sx={{ height: { md:'399px' , xs:'350px'}, width:'90%' }}
    alt="The house from the offer."
    src={require(`../img/book_3.png`)}> 
    </Box>
    <Box className={classes.image2} component="img" sx={{ height: { md:'390px' , xs:'350px'}, width: 'auto' }}
    alt="The house from the offer."
    src={require(`../img/book_3.png`)}> 
    </Box>                 
</Box>


    {/* information */}
    <Box sx={{ display: { md: 'flex' } }}>
    <div className={classes.bookinfo} sx={{ width:'90%' }}>
    <Typography variant="h4" gutterBottom component="div">
        {book_1.Book_Name}
    </Typography>
    <Typography variant="h5" gutterBottom component="div">
        {book_1.writer}
    </Typography>
    
     <Rating
        name="rating"
        value={book_1.BooK_Rate}
        /*onChange={(event, newValue) => {
          setValue(newValue);
          }}
          */  />
            <Box>
                            <Button startIcon={<CommentIcon/>} style={{ color:'black', textTransform: 'none' }}>chapters</Button>
                            <Button startIcon={<ListIcon/>} style={{ color:'black', textTransform: 'none' }} >riviews</Button>
                            <Button startIcon={<BookmarksIcon/>} style={{ color:'black', textTransform: 'none' }}>followrs</Button>
            </Box>
        <Button variant="outlined" style={{ color:'black', textTransform: 'none' }}>{ book_1.followed=== 0 ? 'follow book' : 'unfollow book'}</Button>            
                        
    </div>
                    
  
                    
    </Box>
    
     <Divider ></Divider>           

    <BookChapters/>   

    </Box>
    </div>
  );
}