////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import Navigation from "../Navigation/Navigation";
////////////////////////////////////////////////////////////////////////////////
import RestaurantContext from "../../contexts/RestaurantContext";
////////////////////////////////////////////////////////////////////////////////
import AccountPage from "../../routes/AccountPage/AccountPage";
import ChefModePage from "../../routes/ChefModePage/ChefModePage";
import GroupPage from "../../routes/GroupPage/GroupPage"
import Homepage from "../../routes/Homepage/Homepage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";
import OutOfYumPage from "../../routes/OutOfYumPage/OutOfYumPage";
import RestaurantPage from "../../routes/RestaurantPage/RestaurantPage";
import RestaurantSearchPage from "../../routes/RestaurantSearchPage/RestaurantSearchPage";
import StartGroupPage from "../../routes/StartGroupPage/StartGroupPage";
////////////////////////////////////////////////////////////////////////////////
import TokenService from "../../services/TokenService";
////////////////////////////////////////////////////////////////////////////////
import PrivateRoute from "../../utils/PrivateRoute";
import PublicOnlyRoute from "../../utils/PublicOnlyRoute";
////////////////////////////////////////////////////////////////////////////////
import config from "../../config";
////////////////////////////////////////////////////////////////////////////////

class App extends Component {
  static contextType = RestaurantContext;

  constructor(props) {
    super(props)
    this.state = {
      hasLogin: TokenService.hasAuthToken(),
      users: [],
      error: [],
    };
  };

  checkForLogin = () => {
    this.setState({
      hasLogin: TokenService.hasAuthToken()
    });
  };

  componentDidMount() {
    this.context.clearError()

    fetch(`${config.API_ENDPOINT}/users`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Something went wrong. Please try again later.");
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        console.log("Good response from API");
        this.setState({
          users: data,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      })
      .then(() => {
        this.context.setUsers(this.state.users);
      });
  };

  render() {
    return (
      <div id="App">
        <header className="app">
          <Navigation checkforLogin={this.checkforLogin} hasLogin={this.state.hasLogin} />
        </header>

        <main id="page_wrap">
          <Switch>
            <Route
              exact
              path={"/"}
              component={Homepage}
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
              path={"/chef-mode"}
              component={ChefModePage}
            />

            <PrivateRoute
              path={"/group/:group_id"}
              component={GroupPage}
            />

            <PrivateRoute
              path={"/all-out"}
              component={OutOfYumPage}
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

            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    );
  };
};

export default App;