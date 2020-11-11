import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { 
  Home, 
  Login,
} from '../../views'
import { AnimatedSwitch } from 'react-router-transition'
import CategoriesList from './../CategoriesList'
const AppRoutes = () => {
	return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */
            /*Animated switch to switch, ale dodaje jeszcze fajna animacje.
            W razie czego, można go bardzo łatwo usunąć */}
      <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="route-wrapper">
        <Route path="/login">
          <Login/>
          
        </Route>
        <Route path="/users">
          <h2> test </h2>
        </Route>
        <Route path="/categories">
            <CategoriesList />
        </Route>
        <Route path="/">
          <Home/>
        </Route>
        
      </AnimatedSwitch>
    </div>
	);
}





export default AppRoutes;
