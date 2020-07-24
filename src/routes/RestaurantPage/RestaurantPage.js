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
            >   Need something to happen once array loops through:
                >   Either say all out of yum try another zip OR trigger additional results by using 
                    the code at the bottom of the API results (refer to Google Places Documentaition).
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
        console.log(restaurant_id)

        for (let i = 0; i < restaurants.length; ++i) {
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
            };
        };

        return (
            <>
                {currentRestaurant}
            </>
        );
    };
};

export default RestaurantPage;