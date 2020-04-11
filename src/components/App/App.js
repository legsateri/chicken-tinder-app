////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import Navigation from '../Navigation/Navigation';
////////////////////////////////////////////////////////////////////////////////
import Homepage from '../../routes/Homepage/Homepage';
import LoginPage from '../../routes/LoginPage/LoginPage';
////////////////////////////////////////////////////////////////////////////////

class App extends Component {
  render() {
    return (
      <>
        <header className="app">
          <Navigation />
        </header>

        <main>
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
          </Switch>
        </main>
      </>
    )
  }
}

export default App;