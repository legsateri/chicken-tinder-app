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
import config from '../../config';
////////////////////////////////////////////////////////////////////////////////

/* 
TODO: 
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
  5.  Create static app version of Chef Mode.
  6.  Code up server for user creation/login.
  7.  Will determine once I get this far...
*/

class App extends Component {
  static contextType = RestaurantContext;

  constructor(props) {
    super(props)
    this.state = {
      query: '73118',
      restaurants: [],
      error: []
    }
  }

  componentDidMount() {
    const url = `https://cors-anywhere.herokuapp.com/${config.RESTAURANTS_ENDPOINT}/json?query=restaurants+in+${this.state.query}&key=${config.RESTAURANTS_KEY}`;

    const options = {
      method: 'GET',
      headers: {
          "Access-Control-Allow-Origin": "*"
      }
  }

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Oopsie");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          restaurants: data,
          error: null
        });
        console.log(this.state.restaurants);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

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