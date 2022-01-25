import * as React from 'react';
//import { book_1 } from "../dummy";
import PopUp from '../components/PopUp';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@mui/system";
import { Divider, Typography } from "@material-ui/core";
import { Button, LinearProgress, Rating } from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';
import ListIcon from '@mui/icons-material/List';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Chip from '@mui/material/Chip';
import WriteChapter from '../components/WriteChapter';
import { useEffect, useState } from "react";
import { follower } from '../dummy';
const emails = ['username@gmail.com', 'user02@gmail.com'];

const useStyles = makeStyles((theme) => ({
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
export default function BookProfileHeader() {
  const [book, setbook] = useState(null);
  const [fetched, setfetched] = useState(false);
  const [follow, togglefollow] = useState(0);
  const [followers, setfollowers] = useState([]);
// for caching book information 
  useEffect(() => {
    const book_id = window.location.href.split('/')[4];
    console.log("book_id: " + book_id)
  fetch('http://localhost:3001/User/Book_Profile_View', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      },
    body: JSON.stringify({
        "Book_ID": book_id,
      })
    }).then(res => {
      const status = res.status;
      if (status === 400) { // error coming back from server
        console.log('Error in fecthing book');
      } else if (status === 401) { // error coming back from server
        console.log('401');
      } 
      return (res.json());

    }).then((response) => {
      //console.log('f: ' + JSON.stringify( response.Book.follower));
      //console.log('taravat : ' + JSON.stringify(Post_HomePage)  );
      setbook(response.Book);
      setfollowers(response.Book.follower);
      console.log("f state:" + JSON.stringify(response.Book.Followed_State));
      togglefollow(response.Book.Followed_State);
      setfetched(true)
      }) 
  }, []);

  // for chaching followers information 
  


  // open pop ups
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  // open create component 
  const [showCreate, setShowCreate] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const Bookclick = () => {
    window.location.pathname = `/book/${window.location.href.split('/')[4]}`;
  };
  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  const trigerfollow = () => {
    const book_id = window.location.href.split('/')[4];
    console.log("please toggle : " + book_id)
    fetch('http://localhost:3001/User/BookFollow', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        "Book_ID": book_id,
      })
    }).then(res => {
      const status = res.status;
      if (status === 400) { // error coming back from server
        console.log('Error in fecthing');
      } else if (status === 401) { // error coming back from server
        console.log('401');
      } 
      return (res.json());

    }).then((response) => {
      console.log('posts anita : ' + JSON.stringify(response));
      //console.log('taravat : ' + JSON.stringify(Post_HomePage)  );
      if  (follow === 0)
        togglefollow(1)
      else
          togglefollow(0)
      }) 
  };
  const TrigerCreate = () => {
    showCreate === true?
      setShowCreate(false) :
      setShowCreate(true)
    console.log('show create component');
  };
  const setValueRate = (newValue) => {
    console.log(newValue)
  };
  const classes = useStyles();
  return (
    <div>
     { fetched=== true ?
    <div>
    {/* pic */}
   <Box className={classes.media} sx={{height:{ md:'399px' , xs:'350px'}}}>
    <Box className={classes.image1} component="img" sx={{ height: { md:'399px' , xs:'350px'}, width:'90%' }}
    alt="The house from the offer."
    src={book.Book_Cover}> 
    </Box>
    <Box className={classes.image2} component="img" sx={{ height: { md:'390px' , xs:'350px'}, width: 'auto' }}
    alt="The house from the offer."
    src={book.Book_Cover}> 
    </Box>                 
</Box>


    {/* information */}
    <Box sx={{ display: { md: 'flex' } }}>
    <div className={classes.bookinfo} sx={{ width:'90%' }}>
              <Typography variant="h4" gutterBottom component="div"style={{ cursor: 'pointer'}} onClick={() => Bookclick()}>
        {book.Book_Name}
    </Typography>
    <Typography variant="h5" gutterBottom component="div">
        {book.writer}
    </Typography>
    
     <Rating
        name="rating"
        value={book.BooK_Rate}
        onChange={(event, newValue) => {
          setValueRate(newValue);
          }}
            />
            <Box>
                <Button startIcon={<CommentIcon/>} style={{ color:'black', textTransform: 'none' }}>chapters</Button>
                            <Button startIcon={<ListIcon/>} style={{ color:'black', textTransform: 'none' }} >riviews</Button>
                <Button onClick={() => handleClickOpen()} startIcon={<BookmarksIcon />} style={{ color: 'black', textTransform: 'none' }}>followrs</Button>
               <PopUp selectedValue={selectedValue} open={open} list={followers} title="Followers" onClose={() => handleClose()}/>

            </Box>

            <Box  style={{margin:'auto',justifycontent:'center',textAlign:'center', width:'60%'}}>
              {
                book.genres.map((g) => (
                  <Chip label={g.name} color='primary' style={{ margin: {md:'2px' ,  xs:'1px'},backgroundColor: g.color }} key={g.name} />
                ))
                }
            </Box>

            <Box style={{margin:'2%'}}>
            { follow === -1 ?
              <Button variant='outlined' style={{cursor: 'pointer', color: 'black', textTransform: 'none' }} onClick={() => TrigerCreate()}>create new chapter</Button> 
              : 
              <Button variant='outlined' style={{cursor: 'pointer', color: 'black', textTransform: 'none' }} onClick={() => trigerfollow()}>{follow === 0 ? 'follow book' : 'unfollow book'}</Button>
                  
              
            }
            </Box>
                          
    </div>
                    
  
                    
    </Box>
    
        <Divider ></Divider>
       
    { // write chapter component 
          showCreate ?
        <WriteChapter />
        :    
        null
    }
    
        </div >
      :
      <Box sx={{ width: '90%' }}>
      <LinearProgress />
    </Box> 
      }
      </div>
  );
}