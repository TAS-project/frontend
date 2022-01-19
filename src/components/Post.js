
import { MoreVert } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@mui/system";
import img1 from "../img/book_1.png";
import { Button, Card, CardContent, CardMedia, Divider, Typography } from "@material-ui/core";
import { Rating } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const user_id = 1;
const useStyles = makeStyles((theme) => ({
  post: {
    border: '2px solid',
    borderColor: '#E7EDF3',
    borderRadius: 16,
    transition: '0.4s',
    '&:hover': {
      borderColor: '#2E2C2C',
    },

  },
  rate: {
    display: 'flex',
    marginLeft: "auto",
    marginTop: "auto",
    padding:"4px",
    },
  
}));
export default function Post(props) {
  const classes = useStyles();

    /*
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);
*/
  const likeHandler = () => {
    try {
      //axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    //setLike(isLiked ? like - 1 : like + 1);
    //setIsLiked(!isLiked);
  };

  const userclick = () => {
    window.location.pathname = `/profile/${props.chapter.Username}`;
  };
  const Bookclick = () => {
    window.location.pathname = `/book/${props.chapter.Book_Name}`;
  };
    return (

      <Box
        className={classes.post}
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
        component="img"
          sx={{
            padding: 1,
            paddingRight:{md:'20px'},
          height: { xs: 233, md: 267 },
          width: { xs: 150, md: 200 },
          //maxHeight: { xs: 233, md: 167 },
          //maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src={require(`../img/book_${props.chapter.Chapter_ID}.png`)}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          m: 3,
          minWidth: { md: 350 },
        }}
      >
        <Box component="span" sx={{ fontSize: 22, mt: 1, cursor: 'pointer' }} onClick={() => Bookclick()}>
         {props.chapter.Book_Name}
          </Box>
        <Box  sx={{ color: '#ABABAB', fontSize: 16 , cursor: 'pointer'}} onClick={() => userclick()}>
         @{props.chapter.Username}
        </Box>
        
        <Box
          sx={{
            mt: 1.5,
            p: 0.5,
            borderRadius: '5px',
            color: 'primary.main',
            fontWeight: 'medium',
            display: 'flex',
            fontSize: 12,
            alignItems: 'center',
            '& svg': {
              fontSize: 21,
              mr: 0.5,
            },
          }}
        >
         
         last chapter : {props.chapter.Last_chapter_name}
        </Box>

        </Box>
        <Box py={1} className={classes.rate } >
      <Typography component="legend">rating</Typography>
      <Rating
        name="rating"
        value={props.chapter.BooK_Rate}
        /*onChange={(event, newValue) => {
          setValue(newValue);
          }}
          */  />
        <Divider orientation="vertical" variant="middle" flexItem />
        
          <Box style={{ display: 'flex', alignItems: 'center',cursor: 'pointer', flexWrap: 'wrap', }}>
            read more <ArrowForwardIosIcon fontSize="small" /></Box>
        
        </Box>
        
      </Box>
     
  );
}