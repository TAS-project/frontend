import { Grid, makeStyles } from "@material-ui/core";
import Add from "./components/Add";
import Toolbar from '../components/Toolbar';
import { Box } from "@mui/system";
import Rightbar from '../components/Rightbar';
import ProFeed from '../components/ProFeed';

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Toolbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
           <Box sx={{ height: '320px', position: 'relative',}} >
              <img  className={classes.profileCoverImg}
                  src={require(`../book.jpg`)}   alt=""  
              />
              <img className={classes.profileUserImg}
                  src={require(`../img/book_3.png`)}   alt=""
              />
            </Box>
        </Grid>
        <Grid item sm={7} xs={10}>
           <ProFeed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
     
    </div>
  );
};

export default App;
