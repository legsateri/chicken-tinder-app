////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import Navigation from '../Navigation/Navigation';
////////////////////////////////////////////////////////////////////////////////
import RestaurantContext from '../../contexts/RestaurantContext';
////////////////////////////////////////////////////////////////////////////////
import AccountPage from '../../routes/AccountPage/AccountPage';
import ChatListPage from '../../routes/ChatListPage/ChatListPage';
import ChatPage from '../../routes/ChatPage/ChatPage';
import GroupPage from '../../routes/GroupPage/GroupPage'
import Homepage from '../../routes/Homepage/Homepage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RestaurantPage from '../../routes/RestaurantPage/RestaurantPage';
import RestaurantSearchPage from '../../routes/RestaurantSearchPage/RestaurantSearchPage';
import StartGroupPage from '../../routes/StartGroupPage/StartGroupPage';
////////////////////////////////////////////////////////////////////////////////

/* 
TODO: 
  5.  Trigger random restaurant page to appear from the API results.
  6.  Create static app version of Chef Mode.
  7.  Code up server for user creation/login.
  8.  Will determine once I get this far...
DONE:
  1.  Finish doing basic static app for the remaining wires (minus chef mode).
  2.  Find the best places within the app to trigger the fetch for real (not sure the App 
      component is the right spot, it might be). Will need to be accessible from anywhere we 
      want to make it possible to trigger a restaurant search. For simplicity of the MVP, might 
      want to keep it to the individual group pages, rather than multiple places throughout the 
      app. Can add that later. 
  3.  Add an input on the new group form where the creator can add a zipcode to search within.
  4.  Add an input on the individual group pages where group members can update the zipcode
      to search within. We want the app to remember the zip so it doesn't have to be updated
      every time, kinda like GrubHub.
*/

class App extends Component {
  static contextType = RestaurantContext;

  render() {
    return (
      <div id="App">
        <header className="app">
          <Navigation />
        </header>

        <main id="page_wrap">
          <Switch>
            <Route
              path={"/account"}
              component={AccountPage}
            />

            <Route
              exact
              path={"/chat"}
              component={ChatListPage}
            />

            <Route
              path={"/chat/:group_id"}
              component={ChatPage}
            />

            <Route
              path={"/group"}
              component={GroupPage}
            />

            <Route
              exact
              path={"/"}
              component={Homepage}
            />

            <Route
              path={"/login"}
              component={LoginPage}
            />

            <Route
              path={"/restaurants/:restaurant_id"}
              component={RestaurantPage}
            />


            <Route
              path={"/search"}
              component={RestaurantSearchPage}
            />

            <Route
              path={"/start-group"}
              component={StartGroupPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;