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
  const ClickonAdd =(e) => {
  e.preventDefault()
    const {title, text } = e.target.elements
    console.log({title: title.value, content: text.value })
  };

  const classes = useStyles();
  return (
    <Box
     className={classes.chapters}
      component="main"
      sx={{width:'90%' ,position: 'relative', p:1 , backgroundColor:'#F2EFEC' }}
      >
<h3 style={{fontFamily:'inherit'}}>New Chapter</h3>

          <div className={classes.container}>
  <form onSubmit={ClickonAdd}>


          <div className={classes.col75}>
              <InputLabel htmlFor="my-input">chapter title</InputLabel>
  <Input style={{marginBottom:'3%'}}  id="title" aria-describedby="my-helper-text" />
            <textarea className={classes.textarea} id="text" name="subject" placeholder="Write your story..." ></textarea>
            <Button  type="submit" variant="contained" >add chapter</Button>
    </div>

  
  </form>
</div>
      

    </Box>
  );
}