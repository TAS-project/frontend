import Post from "./Post";
import { Users } from "../dummy";
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const drawerWidth = 240;

const useStyles = makeStyles(({ palette }) => ({
  UserCard: {
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
    color: palette.grey[500],
    marginBottom: '0.875em',
  },
  media: {
    borderRadius: '50%',
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
export default function UFeed() {
  const styles = useStyles();
      const userclick = (Username) => {
    window.location.pathname = `/profile/${Username}`;
  };
    return (
    <Box
      component="main"
      sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, left: { sm: `${drawerWidth}px` } ,position: 'relative', p:3}}>
     
      { Users.map((p) => (
        
        <Box key={p.Usr_ID}
        className={ styles.UserCard }>
      <Box className={styles.media}
      component="img" sx={{ height: 150, width: 150 }}
      alt="The house from the offer."
            src={require(`../img/book_${p.Usr_ID}.png`)} />
          <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 1,
          m: 1,
          bgcolor: 'background.paper'}}>
          <h3 className={styles.heading}>{p.First_Name + "  " + p.Last_Name} </h3>
          <Box  sx={{color: '#ABABAB', fontSize: 16, mt: 1, cursor: 'pointer' }} onClick={() => userclick(p.Username)}>{"@" + p.Username}</Box>
            <Box className={ styles.butn } sx={{display: 'flex', mt: 1}}>
              {p.followed === 0 ? ' follow' : ' unfollow'}</Box>
          </Box>
     </Box>
           ))
              }
    
    </Box>
  );
}