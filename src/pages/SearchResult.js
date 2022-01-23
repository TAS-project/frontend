
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import React from 'react';
import Toolbar from '../components/Toolbar';
import SbookFeed from '../components/SbookFeed';
import SuserFeed from '../components/SuserFeed';
import Footer from '../components/Footer';

const drawerWidth = 240;
export default function SearchResult() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Toolbar />
    <Box
      component="main"
      sx={{}}>
    <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' ,  width: { sm: `calc(100% - ${drawerWidth}px)` }, left: { sm: `${drawerWidth}px` } ,position: 'relative', p:3}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Books" value="1" />
            <Tab label="users" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"> <SbookFeed/> </TabPanel>
        <TabPanel value="2"> <SuserFeed/></TabPanel>
      </TabContext>
      </Box>

      {
        window.location.href.split('/')[4]
      }
     <Footer/>      
    </div>
    
  );
}