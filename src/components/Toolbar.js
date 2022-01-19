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
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
// import { styled, alpha } from '@mui/material/styles';
const drawerWidth = 240;

function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
                <ListItem button >
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
        
        { Genre.map((G) => (
          <ListItem button key={G.Genre_ID} >
            <ListItemIcon >
               <LabelImportantIcon fontSize="small" /> 
            </ListItemIcon>
            <ListItemText primary={G.Genre_Title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

  return (
    <Box sx={{  flexGrow: 1 }} >
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
         {/**
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */} 
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
        sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
 
      </Box>
    </Box>
  );
}


export default ResponsiveDrawer;

