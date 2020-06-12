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
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import RestaurantPage from '../../routes/RestaurantPage/RestaurantPage';
import RestaurantSearchPage from '../../routes/RestaurantSearchPage/RestaurantSearchPage';
import StartGroupPage from '../../routes/StartGroupPage/StartGroupPage';
////////////////////////////////////////////////////////////////////////////////
import TokenService from '../../services/TokenService';
////////////////////////////////////////////////////////////////////////////////
import PrivateRoute from '../../utils/PrivateRoute';
import PublicOnlyRoute from '../../utils/PublicOnlyRoute';
////////////////////////////////////////////////////////////////////////////////

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasLogin: TokenService.hasAuthToken()
    }
  }

  checkForLogin = () => {
    this.setState({
      hasLogin: TokenService.hasAuthToken()
    })
  }

  render() {
    return (
      <div id="App">
        <header className="app">
          <Navigation checkForLogin={this.checkForLogin} />
        </header>

        <main id="page_wrap">
          <Switch>
            <Route
              exact
              path={"/"}
              component={Homepage}
            />

            <Route
              component={NotFoundPage}
            />

            <PublicOnlyRoute
              path={"/login"}
              component={LoginPage}
            />

            <PrivateRoute
              path={"/account"}
              component={AccountPage}
            />

            <PrivateRoute
              exact
              path={"/chat"}
              component={ChatListPage}
            />

            <PrivateRoute
              path={"/chat/:group_id"}
              component={ChatPage}
            />

            <PrivateRoute
              path={"/chef-mode"}
              component={ChefModePage}
            />

            <PrivateRoute
              path={"/group"}
              component={GroupPage}
            />

            <PrivateRoute
              path={"/restaurants/:restaurant_id"}
              component={RestaurantPage}
            />

            <PrivateRoute
              path={"/search"}
              component={RestaurantSearchPage}
            />

            <PrivateRoute
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