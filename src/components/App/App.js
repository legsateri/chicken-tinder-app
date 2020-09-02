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
      groupsOne: [],
      groupsTwo: [],
      currentUserEmail: "",
    };
  };

  checkForLogin = () => {
    this.setState({
      hasLogin: TokenService.hasAuthToken()
    });
  };

  componentDidMount() {
    this.context.clearError()

    Promise.all([
      fetch(`${config.API_ENDPOINT}/users`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "authorization": `bearer ${TokenService.getAuthToken()}`
        },
      }),
      fetch(`${config.API_ENDPOINT}/groups/user/one`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "authorization": `bearer ${TokenService.getAuthToken()}`
        },
      }),
      fetch(`${config.API_ENDPOINT}/groups/user/two`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "authorization": `bearer ${TokenService.getAuthToken()}`
        },
      })
    ])
      .then(([users, groupsOne, groupsTwo]) => {
        if (!users.ok) {
          return users.json().then(e => Promise.reject(e));
        };
        if (!groupsOne.ok) {
          return groupsOne.json().then(e => Promise.reject(e));
        };
        if (!groupsTwo.ok) {
          return groupsTwo.json().then(e => Promise.reject(e));
        };
        return Promise.all([
          users.json(),
          groupsOne.json(),
          groupsTwo.json()
        ]);
      })
      .then(([usersJson, groupsOneJson, groupsTwoJson]) => {
        this.setState({
          users: usersJson,
          groupsOne: groupsOneJson,
          groupsTwo: groupsTwoJson,
          error: null
        });
      })
      .then(() => {
        this.setState({
          currentUserEmail: this.state.groupsOne[0].member_one
        });
      })
      .then(() => {
        this.context.setUsers(this.state.users);
      })
      .then(() => {
        for (let i = 0; i < this.context.users.length; i++) {
          if (this.state.currentUserEmail === this.context.users[i].email) {
            this.context.setCurrentUser(this.context.users[i])
          };
        };
      })
      .then(() => {
        this.context.setGroupsOne(this.state.groupsOne);
      })
      .then(() => {
        this.context.setGroupsTwo(this.state.groupsTwo);
      })
      .catch(error => {
        console.log(error);
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