
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import * as React from 'react';
import Toolbar from '../components/Toolbar';
import Homefeed from '../components/Homefeed';

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
      sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, left: { sm: `${drawerWidth}px` } ,position: 'relative', p:3}}>
    <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">Books</TabPanel>
        <TabPanel value="2">users</TabPanel>
      </TabContext>
      </Box>

       
            <Homefeed/>
    </div>
    
  );
}