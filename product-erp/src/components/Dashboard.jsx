import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PeopleIcon from '@mui/icons-material/People';
import ListIcon from '@mui/icons-material/List';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { useNavigate } from 'react-router-dom';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Dashboard() {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate()

 

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => 
              setOpen(!open)}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            ERP DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <List>
            <ListItem  disablePadding onClick={()=>{navigate("/")}}>
              <ListItemButton>
                <ListItemIcon>
                   <HomeIcon /> 
                </ListItemIcon>
                <ListItemText primary='Home' />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding onClick={()=>{navigate("/about")}}>
              <ListItemButton>
                <ListItemIcon>
                   <InfoIcon /> 
                </ListItemIcon>
                <ListItemText primary='About' />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding onClick={()=>{navigate("/list")}}>
              <ListItemButton>
                <ListItemIcon>
                   <ListIcon /> 
                </ListItemIcon>
                <ListItemText primary='ProductList' />
              </ListItemButton>
            </ListItem>

            {/* <ListItem  disablePadding onClick={()=>{navigate("/users")}}>
              <ListItemButton>
                <ListItemIcon>
                   <PeopleIcon /> 
                </ListItemIcon>
                <ListItemText primary='Users' />
              </ListItemButton>
            </ListItem> */}
            <ListItem  disablePadding onClick={()=>{navigate("/account")}}>
              <ListItemButton>
                <ListItemIcon>
                   <PeopleIcon /> 
                </ListItemIcon>
                <ListItemText primary='Accounts' />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding onClick={()=>{navigate("/sales")}}>
              <ListItemButton>
                <ListItemIcon>
                   <ReceiptIcon /> 
                </ListItemIcon>
                <ListItemText primary='Sales' />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding onClick={()=>{navigate("/customer-list")}}>
              <ListItemButton>
                <ListItemIcon>
                   <PeopleIcon /> 
                </ListItemIcon>
                <ListItemText primary='Customer' />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding onClick={()=>{navigate("/payment-invoice")}}>
              <ListItemButton>
                <ListItemIcon>
                   <AssessmentIcon /> 
                </ListItemIcon>
                <ListItemText primary='Payment Invoice' />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
       
      </Drawer>
    
      <Main open={open}>
        <DrawerHeader />
        
      </Main>
    </Box>
  );
}