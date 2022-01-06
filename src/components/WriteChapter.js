import Post from "./Post";
import { Post_HomePage } from "../dummy";
import Box from '@mui/material/Box';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, FormControl, FormHelperText, Input, InputLabel, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { ListItemButton } from "@mui/material";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({

  chapters: {
    marginTop:'3%',
     margin:'auto',
    border: '2px solid',
    borderColor: '#E7EDF3',
    borderRadius: 16,
    padding: '3%',
    justifyItems: 'center',
    textAlign:'center',
    },
    textarea: {
        width: '90%',
        height:'500px',
  padding: '12px',
  border: '1px solid #ccc',
  borderradius: '4px',
  resize: 'vertical',
},


}));

export default function WriteChapter() {
  const ClickonChaper =(Chapter_ID) => {
  console.log('hello');
};
  const classes = useStyles();
  return (
    <Box
     className={classes.chapters}
      component="main"
      sx={{width:'90%' ,position: 'relative', p:1 }}
      >
<h2>New Chapter</h2>
<p>balah balah.</p>
<FormControl>
  <InputLabel htmlFor="my-input">chapter title</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
</FormControl>
          <div className={classes.container}>
  <form >


    <div className={classes.col75}>
      <textarea className={classes.textarea} id="subject" name="subject" placeholder="Write your story.." ></textarea>
    </div>

  
  </form>
</div>
      

    </Box>
  );
}