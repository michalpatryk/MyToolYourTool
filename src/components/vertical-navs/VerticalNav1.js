import React from 'react';
import {
  Link as RouterLink
} from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBox from '@material-ui/icons/AccountBox';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Store from '@material-ui/icons/Store';
import RateReview from '@material-ui/icons/RateReview';


export const VerticalNav1 = (

  <div>
    <ListItem button to="/" component={RouterLink}>
      <ListItemIcon>
        <AccountBox />
      </ListItemIcon>
      <ListItemText primary="Homepage" />
    </ListItem>
    <ListItem button to="/account" component={RouterLink}>
      <ListItemIcon>
        <AccountBox />
      </ListItemIcon>
      <ListItemText primary="My Account" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Store />
      </ListItemIcon>
      <ListItemText primary="Lending cart " />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Borrowing cart" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <RateReview />
      </ListItemIcon>
      <ListItemText primary="Rate review" />
    </ListItem>
  </div>
)
