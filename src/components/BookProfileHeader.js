import * as React from 'react';
import { book_1 } from "../dummy";
import Toolbar from '../components/Toolbar';
import PopUp from '../components/PopUp';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@mui/system";
import { Divider, Typography } from "@material-ui/core";
import { Button, Rating } from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';
import ListIcon from '@mui/icons-material/List';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

import WriteChapter from '../components/WriteChapter';

const emails = ['username@gmail.com', 'user02@gmail.com'];
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
export default function BookProfileHeader(props) {
  // open pop ups
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  // open create component 
  const [showCreate, setShowCreate] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  const  trigerfollow = () => {
    console.log('send server massehe for following / unfollowing');
  };
  const TrigerCreate = () => {
    showCreate === true?
      setShowCreate(false) :
      setShowCreate(true)
    console.log('show create component');
  };
 
  const classes = useStyles();
    return (
     
    <div>
    {/* pic */}
   <Box className={classes.media} sx={{height:{ md:'399px' , xs:'350px'}}}>
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
                <Button onClick={() => handleClickOpen()} startIcon={<BookmarksIcon />} style={{ color: 'black', textTransform: 'none' }}>followrs</Button>
               <PopUp selectedValue={selectedValue} open={open} onClose={() => handleClose()}/>

            </Box>
            { props.IsOwner ?
              <Button variant="outlined" style={{ color: 'black', textTransform: 'none' }} onClick={() => TrigerCreate()}>create new chapter</Button>
              :
              <Button variant="outlined" style={{ color: 'black', textTransform: 'none' }} onClick={() => trigerfollow()}>{book_1.followed === 0 ? 'follow book' : 'unfollow book'}</Button>   
            }
                   
                          
    </div>
                    
  
                    
    </Box>
    
        <Divider ></Divider>
       
    { // write chapter component 
          showCreate ?
        <WriteChapter />
        :    
        null
    }
      
    </div>
  );
}