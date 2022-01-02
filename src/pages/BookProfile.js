import { book_1 , Chapters } from "../dummy";
import Toolbar from '../components/Toolbar';
import BookChapters from '../components/BookChapters';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@mui/system";
import { Divider, Typography } from "@material-ui/core";
import { Rating } from "@mui/material";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
root: {
        
},
bookinfo: {
    flex: '4',
    //marginLeft: 'auto',
    //marginRight: 'auto',
    margin:'auto',
    //textalign: 'center',
    //display:'flex',
    justifycontent:'center',
    //padding: '50px 0',
    //position: 'relative',
     textAlign:'center',
    display: 'block',
    verticalAlign: 'middle',
    paddingTop: '40px',
    width: '90%',
    border: '2px solid',
    borderColor: '#E7EDF3',
    borderRadius: 16,
    transition: '0.4s',
    '&:hover': {
      borderColor: '#2E2C2C',
    },
    
    
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
}  
}));
export default function BookProfile() {
  
  const classes = useStyles();
    return (
     
    <div>
    <Toolbar />
    <Box
    className={classes.root}            
    component="main"
    sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, left: { sm: `${drawerWidth}px` }, position: 'relative', p: 1 }}>
                
    <Box sx={{ display: { md: 'flex' } }}>
    <div className={classes.bookinfo} sx={{ width:{ xs:'100%'} }}>
    <Typography variant="h4" gutterBottom component="div">
        {book_1.Book_Name}
    </Typography>
    <Typography variant="h5" gutterBottom component="div">
        {book_1.writer}
    </Typography>
    <Divider></Divider>
     <Rating
        name="rating"
        
        value={book_1.BooK_Rate}
        /*onChange={(event, newValue) => {
          setValue(newValue);
          }}
          */  />                   
    </div>
    {/* picture */}
    <div className={classes.bookpic} sx={{ width:{ xs:'100%'} }} >             
    <Box className={classes.media} component="img" sx={{ height: 'auto', width: { md: 410, xs: '90%' } }}
    alt="The house from the offer."
    src={require(`../img/book_3.png`)} /> 
    </div>
                    
    </Box>
    
                
    <BookChapters />
    
              
      
    </Box>
    </div>
  );
}