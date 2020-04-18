////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import Navigation from '../Navigation/Navigation';
////////////////////////////////////////////////////////////////////////////////
import Homepage from '../../routes/Homepage/Homepage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import StartGroupPage from '../../routes/StartGroupPage/StartGroupPage';
import RestaurantPage from '../../routes/RestaurantPage/RestaurantPage';
////////////////////////////////////////////////////////////////////////////////
import RestaurantContext from '../../contexts/RestaurantContext';
////////////////////////////////////////////////////////////////////////////////

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
              exact
              path={"/"}
              component={Homepage}
            />

            <Route
              path={"/login"}
              component={LoginPage}
            />

            <Route
              path={"/start-group"}
              component={StartGroupPage}
            />

            <Route
              path={"/restaurants/:restaurant_id"}
              component={RestaurantPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;