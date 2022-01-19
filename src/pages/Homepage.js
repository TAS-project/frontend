import Toolbar from '../components/Toolbar';
import Homefeed from '../components/Homefeed';
import { Box } from "@mui/system";
import { Divider} from "@material-ui/core";
import BookProfileHeader from '../components/BookProfileHeader';
import Chapter from '../components/Chapter';

const drawerWidth = 240;
export default function Homepage() {



    return (
     
      <div>

        

        <Toolbar />

          <Homefeed/>

            
    </div>
  );
}