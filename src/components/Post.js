
import { MoreVert } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@mui/system";
import img1 from "../img/book_1.png";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";


const user_id = 1;
const useStyles = makeStyles((theme) => ({
  post: {
    width: '90%',
    borderradius: '10px',
    boxshadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
    margin: 'auto',
  },
  Cover: {
    width: '120px',
    height: '200px',
    borderradius: '3%',
    objectfit: 'cover',
    marginright: '10px',
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
    return (

      <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 1,
        fontWeight: 'bold',
      }}
    >
      <Box
        component="img"
        sx={{
          height: 200,
          width: 120,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src={img1}
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
        <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
         {props.chapter.Book_Name}
        </Box>
        <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
         {props.chapter.Book_Name}
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
         
          CONFIDENCE SCORE 85%
        </Box>
      </Box>
        </Box>
     
  );
}