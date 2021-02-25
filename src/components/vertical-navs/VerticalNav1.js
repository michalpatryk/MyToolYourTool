import React from 'react';
import {
  Link as RouterLink, Redirect, useHistory
} from "react-router-dom";
import axiosAPI from '../../API/ourAPI/API';
import Store_data from '../../components/App/App.store'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBox from '@material-ui/icons/AccountBox';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Store from '@material-ui/icons/Store';
import AppsIcon from '@material-ui/icons/Apps';
import HistoryIcon from '@material-ui/icons/History';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import RateReview from '@material-ui/icons/RateReview';


export default function VerticalNav1(props) {

  const store = Store_data.useStore()
  const history = useHistory();
  function logOut(){
    store.set('authToken')('');
    axiosAPI.defaults.headers.common['Authorization'] = '';
    history.push('/');
  }
  return(
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
      <ListItem button to="/account/myOffers" component={RouterLink}>
        <ListItemIcon>
          <AppsIcon />
        </ListItemIcon>
        <ListItemText primary="My offers " />
      </ListItem>
      <ListItem button to="/account/lendingsCart" component={RouterLink}>
        <ListItemIcon>
          <Store />
        </ListItemIcon>
        <ListItemText primary="Lending cart " />
      </ListItem>
      <ListItem button to="/account/borrowingsCart" component={RouterLink} > 
        <ListItemIcon>
        <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Borrowing cart"/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText primary="History" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Log out" onClick={logOut}/>
      </ListItem>
    </div>
  );
}
