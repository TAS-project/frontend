import Box from '@mui/material/Box';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input, InputLabel } from "@material-ui/core";

import { Alert } from '@mui/material';


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

export default function EditChapter(props) {
  const [ShowError, setError] = React.useState(false);



  const ClickonAdd = (e) => {
    console.log('edit')
    const book_id = window.location.href.split('/')[4];
    const chp_id = window.location.href.split('/')[5];
    console.log('chapter id : ' + chp_id);
    e.preventDefault()
    const { title, text } = e.target.elements
    console.log({ title: title.value, content: text.value })
    if (title.value === '') {
      setError(true);
    } else {
      console.log(book_id + '    ' + chp_id)
      //window.location.reload();
      //window.location.pathname = `/book/${response.Book.Book_ID}/`;
      fetch('http://localhost:3001/User/Chapter_Edit', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json',
          'Authorization': "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          "Chapter_ID": chp_id,
          "Name": title.value,
          "Content":text.value,
        })
      }).then(res => {
        const status = res.status;
        if (status === 400) { // error coming back from server
          console.log('Error in fecthing');
        } else if (status === 401) { // error coming back from server
          console.log('401');
        }
        return (status);

      }).then((response) => {
        if (response === 200) {
          console.log('status : ' + response);
          //console.log('taravat : ' + JSON.stringify(Post_HomePage)  );
          window.location.reload();
        }
      })
    }
  };
  const classes = useStyles();
  return (
    <Box
     className={classes.chapters}
      component="main"
      sx={{width:'90%' ,position: 'relative', p:1 , backgroundColor:'#f6f7f4' }}
      >
<h3 style={{fontFamily:'inherit'}}>New Chapter</h3>

          <div className={classes.container}>

        <form onSubmit={ClickonAdd}>


          <div className={classes.col75}>
              <InputLabel   htmlFor="my-input">chapter title</InputLabel>
   
          <Input style={{marginBottom:'3%'}}  defaultValue={props.chapter.chapter_name } id="title" aria-describedby="my-helper-text" />
            <textarea className={classes.textarea} id="text" name="subject" placeholder="Write your story..." >{props.chapter.content}</textarea>
           
          </div>
          {//props.chapter.content
            ShowError === true ?
              <Alert sx={{width:'70%', margin: 'auto', display:'flex'}} severity="error">title of chapter can not be empty</Alert>
              :
              null
          }
 <button type="submit" style={{color:'white', borderRadius:'10%', fontSize: 18,  cursor: 'pointer' ,backgroundColor: '#ED6663'}} >Edit chapter</button>
  
  </form>
</div>
      

    </Box>
  );
}