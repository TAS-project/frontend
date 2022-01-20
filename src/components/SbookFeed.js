
import { Books } from "../dummy";
import Box from '@mui/material/Box';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  post: {
    boxshadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
  },
  BookCard: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: '12px',
    fontWeight: 'bold',
    margin : '2%',
    border: '2px solid',
    borderColor: '#E7EDF3',
    transition: '0.4s',
    '&:hover': {
     borderColor: '#C19E8A',
    },
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    marginBottom: '0.875em',
  },
  media: {
    padding: 10,
    '&:hover': {
      opacity:'80%'
    },
  },
  butn: {
    cursor: 'pointer',
    borderRadius:5,
    margiLeft: 'auto',
    marginRight: 'auto',
    padding:3,
    border: '1px solid',
    borderColor: '#C8C8C8',
    '&:hover': {
      color: "#AFA2A2",

      
    },
  }
  
}));
export default function BFeed() {
  
  const styles = useStyles();
  return (
    <Box
      className={styles.post}
      component="main"
      sx={{width: { sm: `calc(100% - ${drawerWidth}px)` }, left: { sm: `${drawerWidth}px` } ,position: 'relative', p:1 }}
      >
              {
           Books.map((b) => (
              <Box key={b.Book_ID}
        className={ styles.BookCard }>
      <Box className={styles.media}
      component="img" sx={{ padding: 1,
        paddingRight:{md:'20px'},
        height: { xs: 233, md: 267 },
        width: { xs: 150, md: 200 } }}
      alt="The house from the offer."
        src={require(`../img/book_${b.Book_ID}.png`)} />
          <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 1,
          m: 1,
          bgcolor: 'background.paper'}}>
          <h3 className={styles.heading}>{b.Book_Name} </h3>
            <span sx={{ display: 'block' }} className={styles.subheader}>{"@" + b.Username}</span>
            <Typography>
            {b.summary}
            </Typography>
            <Box className={ styles.butn } sx={{display: 'flex', mt: 1}}>
              {b.followed === 0 ? ' follow' : ' unfollow'}</Box>
          </Box>
     </Box>
            
                  ))
              }
      
    </Box>
  );
}