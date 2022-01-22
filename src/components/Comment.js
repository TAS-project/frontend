
import React from 'react';
import { Box } from "@mui/system";
import {  Divider, Typography } from "@material-ui/core";
import {ListItem,ListItemText,ListItemAvatar,Avatar} from "@material-ui/core";
// const user_id = 1;
// const useStyles = makeStyles((theme) => ({
//   comment: {
//     border: '2px solid',
//     borderColor: '#E7EDF3',
//     borderRadius: 16,
//     transition: '0.4s',
//     '&:hover': {
//       borderColor: '#2E2C2C',
//     },
//   },
// }));
export default function Comment(props) {
  // const classes = useStyles();

  return (
      <Box>
          <ListItem key={props.comment.comments_ID} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="avatar" src={require(`../img/book_4.png`)} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="caption">
                    {`@${props.comment.Username}`}
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" gutterBottom>{`${props.comment.content}`}</Typography>
                }
              />
            </ListItem>
            <Divider />
         </Box> 

  
     
  );
}


