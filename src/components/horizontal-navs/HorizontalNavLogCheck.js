import React from 'react';

import {
  Link as RouterLink
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Store from '../App/App.store'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[800] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function Navigation(props) {
  const classes = useStyles();

  const content = {
    'brand': { image: '', width: 120 },
    'link1': '',
    'link2': '',
    'link3': '',
    'link4': '',
    ...props.content
  };

  //
  const store = Store.useStore()
  const isLogged = store.get("authToken")
  //this.store.get("authToken")
  let brand = content['brand'].text || '';
  if (content['brand'].image) {
    brand = <img src={ content['brand'].image } alt="" width={ content['brand'].width } />;
  }

  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, open });
  };

// Logo tam gdzie typography czy jakaś nazwe ?
  return (
    <React.Fragment>
    <CssBaseline />
    <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="divider" noWrap className={classes.toolbarTitle}> 
          </Typography>
          <Button color="divider" size="large" to="/" className={classes.link} component={RouterLink}> {content['link1']} </Button>
          <Button color="divider" size="large" to="/categories" className={classes.link} component={RouterLink}> {content['link2']} </Button>        
          { 
            <Button color="divider" variant="contained" size="large" to=
            {isLogged == '' ?  "/signup": "/account"} className={classes.link} component={RouterLink}> 
            {isLogged == '' ? "SignUp" : "Account"} 
          </Button>
          } 
          
          
        </Toolbar>
      </AppBar>
      </React.Fragment>
  );
}

// Last version
// const useStyles = makeStyles((theme) => ({
//   linkBrand: {
//     position: 'absolute', 
//     left: '50%', 
//     top: '50%',
//     transform: 'translate(-50%, -50%)'
//   },
//   drawerContainer: {
//     width: 256,
//   }
// }));

// import IconButton from '@material-ui/core/IconButton';
// import Link from '@material-ui/core/Link';
// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import MenuIcon from '@material-ui/icons/Menu';
// import AppsIcon from '@material-ui/icons/Apps';
// import LiveHelpIcon from '@material-ui/icons/LiveHelp';
// import AccountBoxIcon from '@material-ui/icons/AccountBox';
// import CollectionsIcon from '@material-ui/icons/Collections';

/*{ <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
      
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Link href="#" variant="h5" color="inherit" underline="none" className={classes.linkBrand}>
          {brand}
        </Link>
      </Toolbar>
      <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button key={content['link1']}>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary={content['link1']} />
            </ListItem>
            <ListItem button key={content['link2']}>
              <ListItemIcon>
                <CollectionsIcon/>
              </ListItemIcon>
              <ListItemText primary={content['link2']} />
            </ListItem>
            <ListItem button key={content['link3']}>
              <ListItemIcon>
                <AccountBoxIcon/>
              </ListItemIcon>
              <ListItemText primary={content['link3']} />
            </ListItem>
            <ListItem button key={content['link4']}>
              <ListItemIcon>
                <LiveHelpIcon />
              </ListItemIcon>
              <ListItemText primary={content['link4']} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </AppBar> }*/