import React from 'react'
import {
  Route
} from "react-router-dom";
import {
  IndexPage,
  CategoryPage,
  MyAccountPage,
  SignUpPage,
  SignInPage
} from '../../pages'
//import IndexPage from './pages/Index.js';
//import CategoryPage from './../../pages/Category.js';
//import MyaccountPage from './pages/Myaccount.js';
//import SignupPage from './pages/Signup.js';
//import SigninPage from './pages/Signin.js';

import { AnimatedSwitch } from 'react-router-transition'
const AppRoutes = () => {
	return (
    <div>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */
            /*Animated switch to switch, ale dodaje jeszcze fajna animacje.
            W razie czego, można go bardzo łatwo usunąć */}
      <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="route-wrapper">
        <Route path="/signin">
          <SignInPage/>
        </Route>
        
        <Route path="/signup">
          <SignUpPage/>
        </Route>

        <Route path="/account">
          <MyAccountPage/>
        </Route>

        <Route path="/categories">
          <CategoryPage/>
        </Route>

        <Route path="/">
          <IndexPage/>
        </Route>
        
      </AnimatedSwitch>
    </div>
	);
}





export default AppRoutes;
