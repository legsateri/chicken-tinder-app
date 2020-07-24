////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { Link } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import RestaurantContext from "../../contexts/RestaurantContext";
////////////////////////////////////////////////////////////////////////////////
import EwButton from "../../components/EwButton/EwButton";
import YumButton from "../../components/YumButton/YumButton";
////////////////////////////////////////////////////////////////////////////////
import "./RestaurantPage.css";
////////////////////////////////////////////////////////////////////////////////

/*  TODO: List for Restaurant Page
            >   Show restaurant picture.
            >   Should something link to restaurant menu?
*/

/*  FIXME: List for Restaurant Page
            >   When a user gets to index 19 in the array, need the app to do 2 things:
                1.  Actually render (right now it does not because the buttons cannot link to i + 1)
                2.  When either button is clicked it needs to retrigger the API search using the 
                    next_page_token saved in context as the pagetoken parameter AND if it's the YUM
                    button, then the restaurant ID still needs to be PATCHed over to the server. The
                    API call also needs to be set up EXACTLY the same way as before so it replaces
                    current list of restaurants in state/context and it saves a new next_page_token...
                    unless the token doesn't change until a new zip is entered. Also this can only be 
                    done for up to 60 results, the max for Google Places API. When that happens we will
                    need to return a message that says to try a new zip code or something. 
            >   Reference: https://developers.google.com/places/web-service/search
*/

class RestaurantPage extends Component {
    static contextType = RestaurantContext;

    static defaultProps = {
        match: { params: {} },
        history: {
            push: () => { },
            goBack: () => { }
        }
    };

    render() {
        const restaurants = this.context.restaurants;
        const currentPath = window.location.pathname;
        const restaurant_id = currentPath.replace("/restaurants/", "");
        const currentRestaurant = [];

        console.log(restaurants);
        console.log(currentPath);
        console.log(restaurant_id);

        for (let i = 0; i < restaurants.length; i++) {
            if (restaurants[i].id === restaurant_id) {
                currentRestaurant.push(
                    <main id="page_wrap">
                        <header className="back_header">
                            <p className="back_p"><span className="back_p back" onClick={this.props.history.goBack}>Back</span> / {restaurants[i].name}</p>
                        </header>

                        <div key={restaurant_id}>
                            <header className="header spacing">
                                <h1>{restaurants[i].name}</h1>
                            </header>

                            <div className="restaurant_box"></div>

                            <div className="restaurant_buttons">
                                <Link to={`/restaurants/${restaurants[i + 1].id}`}><EwButton /></Link>
                                <Link to={`/restaurants/${restaurants[i + 1].id}`}><YumButton /></Link>
                            </div>
                        </div>
                    </main>
                );
            }
        };

        return (
            <>
                {currentRestaurant}
            </>
        );
    };
};

export default RestaurantPage;