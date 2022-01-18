import Comment from "./Comment";
import { chapter_1 , comments} from "../dummy";
import Box from '@mui/material/Box';

import { makeStyles } from '@material-ui/core/styles';
import { Avatar, CardHeader, InputAdornment, Typography } from "@material-ui/core";
import { Button, TextField } from "@mui/material";

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
  comment: {
    border: '2px solid',
    marginTop:'1%',
    borderColor: '#E7EDF3',
    borderRadius: 16,
    margin:'auto',
  }

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
      {/*comment section */ }
      <Box className={classes.comment}>
        <CardHeader style={{paddingLeft:'40px'}} avatar={ <Avatar alt="Remy Sharp" src={require(`../img/book_3.png`)}/>}
        title="user name"/>
        <TextField
          fullWidth
          multiline={true}
          rows={3}
          style={{width:'90%', margin:'auto' , display:'block'}}
          xs = {{m:1}}
          maxRows={4}
          InputProps={{
          endAdornment: (<InputAdornment position="end">
          <Button style={{right:0}}>post</Button>
          </InputAdornment>), }}
          //onChange={handleChange}
        />
        
      
    
      <Box >
                  {
        comments.map((c) => (
             <Comment xs={{ boxShadow: 3, m: 2 }} key={c.comments_ID} comment={c} />
            ))
        }
        </Box>
        
        </Box>
    </Box>
  );
}