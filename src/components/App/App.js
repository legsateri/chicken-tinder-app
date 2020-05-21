////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import Navigation from '../Navigation/Navigation';
////////////////////////////////////////////////////////////////////////////////
import AccountPage from '../../routes/AccountPage/AccountPage';
import ChatListPage from '../../routes/ChatListPage/ChatListPage';
import ChatPage from '../../routes/ChatPage/ChatPage';
import ChefModePage from '../../routes/ChefModePage/ChefModePage';
import GroupPage from '../../routes/GroupPage/GroupPage'
import Homepage from '../../routes/Homepage/Homepage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RestaurantPage from '../../routes/RestaurantPage/RestaurantPage';
import RestaurantSearchPage from '../../routes/RestaurantSearchPage/RestaurantSearchPage';
import StartGroupPage from '../../routes/StartGroupPage/StartGroupPage';
////////////////////////////////////////////////////////////////////////////////

class App extends Component {
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
              path={"/chef-mode"}
              component={ChefModePage}
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