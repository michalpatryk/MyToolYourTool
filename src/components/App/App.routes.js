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
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/login">
          <Login/>
          
        </Route>
        <Route path="/users">
          <h2> test </h2>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
	);
}





export default AppRoutes;