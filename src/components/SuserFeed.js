import Post from "./Post";
import { Users } from "../dummy";
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardMedia } from "@material-ui/core";
import Grid from '@mui/material/Grid';

const drawerWidth = 240;

const useStyles = makeStyles(({ palette }) => ({
  shadows: {
        border: '2px solid',
    borderColor: '#E7EDF3',
    borderRadius: 16,
    transition: '0.4s',
    '&:hover': {
      borderColor: '#2E2C2C',
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
    borderRadius: 6,
  },
}));
export default function UFeed() {
  const styles = useStyles();
    return (
    <Box
      component="main"
      sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, left: { sm: `${drawerWidth}px` } ,position: 'relative', p:3}}>
      <Grid container spacing={3} p={1} columns={{ xs: 4, sm: 8, md: 12 }} className={styles.root} >
      { Users.map((p) => (
        <Grid item  xs={2} sm={4} md={3} className={ styles.shadows} key={p.Usr_ID} >
      
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
          <span sx={{ display: 'block' }} className={styles.subheader}>{"@" + p.Username}</span>
          <Button sx={{width:{sm:'100%' , xl:'50%'}, display: 'block' }}>{ p.followed=== 0 ? 'follow' : 'unfollow'}</Button>
          </Box>
      </Grid> 

           ))
              }
    </Grid>  
    </Box>
  );
}