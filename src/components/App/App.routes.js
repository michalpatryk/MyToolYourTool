import React from 'react'
import {
  Route
} from "react-router-dom";
import {
  IndexPage,
  CategoryPage,
  MyAccountPage,
  SignUpPage,
  SignInPage,
  ItemListPage
} from '../../pages'
import Store from './App.store'

import { AnimatedSwitch } from 'react-router-transition'
const AppRoutes = () => {
  const store = Store.useStore()
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

        <Route path="/items">
          <ItemListPage />
        </Route>

        <Route path="/">
          <IndexPage/>
        </Route>
        
      </AnimatedSwitch>
    </div>
	);
}





export default AppRoutes;
