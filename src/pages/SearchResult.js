
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
import { useEffect, useState } from "react";
//import { Users } from "../dummy";
//import { Books } from "../dummy";


const drawerWidth = 240;
export default function SearchResult() {
  const [value, setValue] = React.useState('1');
  const [users, setusers] = useState([]);
  const [books, setbooks] = useState([]);
  const [fetched, setfetched] = useState(false);

  // geting search resualts 

  useEffect(() => {
   const Search= window.location.href.split('/')[4];
    console.log("search :" + Search);
  fetch('http://localhost:3001/User/Search', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      },
    body: JSON.stringify({
        "Search_Text":window.location.href.split('/')[4]
      })
    }).then(res => {
      const status = res.status;
      if (status === 400) { // error coming back from server
        console.log('Error in fecthing');
      } else if (status === 401) { // error coming back from server
        console.log('401');
      } 
      return (res.json());

    }).then((response) => {
      console.log('response:  ' + JSON.stringify(response));
      setusers(response.Users);
      setbooks(response.Books);
      //.log("new posts :" + posts);
      //setfetched(true)
      }) 
  }, []);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Toolbar />
      { fetched === false ?
    <Box
      component="main"
      sx={{}}>
    <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' ,  width: { md: `calc(100% - ${drawerWidth}px)` }, left: { md: `${drawerWidth}px` } ,position: 'relative', p:3}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Books" value="1" />
            <Tab label="users" value="2" />
            </TabList>
             
          </Box>
         
            <TabPanel value="1"> <SbookFeed books={ books}/> </TabPanel>
            <TabPanel value="2"> <SuserFeed users={ users } /></TabPanel>
      </TabContext>
      </Box>
       : null }

     <Footer/>      
    </div>
    
  );
}