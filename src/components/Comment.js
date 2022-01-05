
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@mui/system";
import { Button, Card, CardContent, CardMedia, Divider, Typography } from "@material-ui/core";
import { Rating } from "@mui/material";
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import {List,ListItem,ListItemText,ListItemAvatar,Avatar} from "@material-ui/core";
const user_id = 1;
const useStyles = makeStyles((theme) => ({
  comment: {
    border: '2px solid',
    borderColor: '#E7EDF3',
    borderRadius: 16,
    transition: '0.4s',
    '&:hover': {
      borderColor: '#2E2C2C',
    },
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
    },
  fonts: {
    fontWeight: "bold"
  },
  inline: {
    display: "inline"
  }
  },
}));
export default function Comment(props) {
  const classes = useStyles();

    return (

      <Box
        className={classes.comment}
        boxShadow={12}
        sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: '12px',
          fontWeight: 'bold',
        margin : '2%'
      }}
    >
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          m: 3,
          minWidth: { md: 350 },
        }}
      >
        <Box component="span" sx={{ fontSize: 22, mt: 1 }}>
         {props.comment.Username}
        </Box>
        <Box component="span" sx={{ color: 'primary.main', fontSize: 16 }}>
         {props.comment.content}
        </Box>

        </Box>

        
      </Box>
     
  );
}


