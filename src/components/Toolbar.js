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
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { Genre } from "../dummy";

const drawerWidth = 240;

function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Typography variant="h6" >
            Genres
        </Typography>
        <Divider />
      
      <List>
  
        {/* list of ganers*/}
        { Genre.map((G) => (
          <ListItem button key={G.Genre_ID}>
            <ListItemIcon >
               <LabelImportantIcon fontSize="small" /> 
            </ListItemIcon>
            <ListItemText primary={G.Genre_Title} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
      <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* logo */}
          <Typography variant="h6" noWrap component="div">
            name of our website
          </Typography>
          {/* search input */}
          <Paper component="form"
          sx={{ m:1 , p: '2px 4px', display: 'flex', alignItems: 'center' ,flex:1, width: '300px'}}>
          <InputBase sx={{ ml: 1, flex: 1 ,}}
          placeholder="Search in"
          inputProps={{ 'aria-label': 'search Search books' }}
      />
        <IconButton type="submit" sx={{ p: '5px' }} aria-label="search">
           <Typography variant="caption"> books </Typography>
        <SearchIcon />
            </IconButton>
        <IconButton type="submit" sx={{ p: '5px' }} aria-label="search">
            <Typography variant="caption">users</Typography> 
        <SearchIcon />
      </IconButton>
      </Paper>
      </Toolbar>
      </AppBar>
      <Box component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        {/* Drawer in desktop */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
 
      </Box>
    </Box>
  );
}


export default ResponsiveDrawer;