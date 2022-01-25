import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
//import { Genre } from "../dummy";
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import { useEffect, useState } from "react";
const drawerWidth = 240;



function ResponsiveDrawer() {
  const [genres, setgenres] = useState([]);
  const [fetched, setfetched] = useState(false);

  useEffect(() => {
  fetch('http://localhost:3001/User/Genre_All', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({})
    }).then(res => {
      const status = res.status;
      if (status === 400) { // error coming back from server
        console.log('Error in fecthing');
      } else if (status === 401) { // error coming back from server
        console.log('401');
      } 
      return (res.json());

    }).then((response) => {
      console.log(JSON.stringify(response.Genres));
      setgenres(response.Genres);
      console.log("new genres :" + genres);
      setfetched(true)
      }) 
  }, []);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const genreclick = (Genre_id) => {
    window.location.pathname = `/genre/${Genre_id}/`;
  };
  const drawer = (
    <div>
      <Toolbar />
      {/* list of directions*/}
      <List>
        <ListItem button onClick={() => {
            window.location.pathname = '/home';
          }}>
            <ListItemIcon >
               <HomeIcon fontSize="small" /> 
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
        </ListItem>
                <ListItem button onClick={() => {
            window.location.pathname = `/profile/${localStorage.getItem("username")}/`;
          }}>
            <ListItemIcon >
               <PersonIcon fontSize="small" /> 
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
        </ListItem>
       
      </List>
      <Divider />
      {/* list of ganers*/}
      <Typography variant="body2" style={{padding:'20px'}} >
            Genres
        </Typography>
      <List>
        
        { fetched=== true ?
          genres.map((G) => (
          <ListItem button key={G.Genre_ID} onClick={() => genreclick(G.Genre_ID)}>
            <ListItemIcon >
               <LabelImportantIcon fontSize="small" /> 
            </ListItemIcon>
            <ListItemText primary={G.Genre_Title} />
          </ListItem>
        )) : null}
      </List>
    </div>
  );

const ClickonSearch =(e) => {
  e.preventDefault()
    const {Seachithem } = e.target.elements
    console.log({ Seachithem: Seachithem.value })
    window.location.pathname = `/search/${Seachithem.value}/`;
  };

  return (
    <Box >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
      <Toolbar sx={{display: "flex" , justify:"space-between"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* logo */}
          <Typography sx={{  flex: 1 }}
            variant="h6" noWrap component="div">
            The Authors Society
          </Typography>
          {/* search input  */}
          <form onSubmit={ClickonSearch} component="form"
            sx={{ margin: 'auto', width: { md: '300px', sx: '150px' }, flex: 1, p: 1 }}>
            <Box sx={{background:'white' , borderRadius:'3%'}} >
            <InputBase sx={{ ml: 1, flex: 1,  }}
              placeholder="Search in"
              id="Seachithem"
          inputProps={{ 'aria-label': 'search Search books' }}
            />
            
        <IconButton type="submit" sx={{ p: '5px' }} aria-label="search" >
           <Typography variant="caption"></Typography>
        <SearchIcon />
            </IconButton>
            </Box>
          </form>

      </Toolbar>
      </AppBar>
      <Box component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders">
        {/* Drawer in mobile. */}
        <Drawer
         
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        {/* Drawer in desktop */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 0, width: { md: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
 
      </Box>
    </Box>
  );
}


export default ResponsiveDrawer;

