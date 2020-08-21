////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { Link } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import RestaurantContext from "../../contexts/RestaurantContext";
////////////////////////////////////////////////////////////////////////////////
import EwButton from "../../components/EwButton/EwButton";
import YumButton from "../../components/YumButton/YumButton";
////////////////////////////////////////////////////////////////////////////////
import config from "../../config";
////////////////////////////////////////////////////////////////////////////////
import RestaurantIcon from "./RestaurantIcon.png"
import "./RestaurantPage.css";
////////////////////////////////////////////////////////////////////////////////

// FIXME: Take a look at the way I'm handling API Calls

class RestaurantPage extends Component {
    static contextType = RestaurantContext;

    static defaultProps = {
        match: { params: {} },
        history: {
            push: () => { },
            goBack: () => { }
        }
    };

    constructor(props) {
        super(props)
        this.state = {
            restaurants: [],
            error: [],
            nextPage: ""
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick = () => {
        if (this.context.nextPage !== undefined) {
            let nextPageUrl = `https://cors-anywhere.herokuapp.com/${config.RESTAURANTS_ENDPOINT}/json?pagetoken=${this.context.nextPage}&key=${config.RESTAURANTS_KEY}`;

            fetch(nextPageUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Something went wrong. Please try again later.");
                    }
                    return response;
                })
                .then(response => response.json())
                .then(data => {
                    console.log("Good response from Google Places API.");
                    this.setState({
                        restaurants: data.results,
                        nextPage: data.next_page_token,
                        error: null
                    });
                })
                .catch(error => {
                    this.setState({
                        error: error.message
                    });
                })
                .then(() => {
                    this.context.setRestaurants(this.state.restaurants);
                })
                .then(() => {
                    this.context.setNextPage(this.state.nextPage);
                })
                .then(() => {
                    this.props.history.push(`/restaurants/${this.state.restaurants[0].place_id}`);
                });
        };
    };

    render() {
        const restaurants = this.context.restaurants;
        const currentPath = window.location.pathname;
        const restaurant_id = currentPath.replace("/restaurants/", "");
        let photoreference = "";
        const currentRestaurant = [];

        for (let i = 0; i < restaurants.length; i++) {
            const photoProperty = restaurants[i].hasOwnProperty("photos");

            if (restaurants[i].place_id === restaurant_id && photoProperty === true) {
                photoreference = restaurants[i].photos[0].photo_reference;
            } else if (restaurants[i].place_id === restaurant_id && photoProperty !== true) {
                photoreference = "none";
            };
        };

        let photoUrl = "";

        for (let i = 0; i < restaurants.length; i++) {
            if (photoreference === "none") {
                photoUrl = RestaurantIcon;
            } else {
                photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=${photoreference}&key=${config.RESTAURANTS_KEY}`;
            };
        };

        for (let i = 0; i < restaurants.length; i++) {
            if (this.context.nextPage === undefined && restaurants[i] === restaurants[19] && restaurants[i].place_id === restaurant_id) {
                currentRestaurant.push(
                    <main id="page_wrap">
                        <header className="back_header">
                            <p className="back_p"><span className="back_p back" onClick={this.props.history.goBack}>Back</span> / {restaurants[i].name}</p>
                        </header>

                        <div key={restaurant_id}>
                            <header className="header spacing">
                                <h1>{restaurants[i].name}</h1>
                                <p>{restaurants[i].rating}/5 Stars</p>
                            </header>

                            <div className="restaurant_image">
                                <img src={photoUrl} alt={`Food from ${restaurants[i].name}`} className="restaurant_image" />
                                <p>{restaurants[i].formatted_address}</p>
                            </div>

                            <div className="restaurant_buttons" onClick={this.handleClick}>
                                <Link to={"/all-out"} className="link_style logo_placeholder" style={{ textDecoration: "none" }}><EwButton /></Link>
                                <Link to={"/all-out"} className="link_style logo_placeholder" style={{ textDecoration: "none" }}><YumButton /></Link>
                            </div>
                        </div>
                    </main>
                );
            } else if (restaurants[i] === restaurants[19] && restaurants[i].place_id === restaurant_id) {
                currentRestaurant.push(
                    <main id="page_wrap">
                        <header className="back_header">
                            <p className="back_p"><span className="back_p back" onClick={this.props.history.goBack}>Back</span> / {restaurants[i].name}</p>
                        </header>

                        <div key={restaurant_id}>
                            <header className="header spacing">
                                <h1>{restaurants[i].name}</h1>
                                <p>{restaurants[i].rating}/5 Stars</p>
                            </header>

                            <div className="restaurant_image">
                                <img src={photoUrl} alt={`Food from ${restaurants[i].name}`} />
                                <p>{restaurants[i].formatted_address}</p>
                            </div>

                            <div className="restaurant_buttons" onClick={this.handleClick}>
                                <EwButton />
                                <YumButton />
                            </div>
                        </div>
                    </main>
                );
            } if (restaurants[i] !== restaurants[19] && restaurants[i].place_id === restaurant_id) {
                currentRestaurant.push(
                    <main id="page_wrap">
                        <header className="back_header">
                            <p className="back_p"><span className="back_p back" onClick={this.props.history.goBack}>Back</span> / {restaurants[i].name}</p>
                        </header>

                        <div key={restaurant_id}>
                            <header className="header spacing">
                                <h1>{restaurants[i].name}</h1>
                                <p>{restaurants[i].rating}/5 Stars</p>
                            </header>

                            <div className="restaurant_image">
                                <img src={photoUrl} alt={`Food from ${restaurants[i].name}`} className="restaurant_image" />
                                <p>{restaurants[i].formatted_address}</p>
                            </div>

                            <div className="restaurant_buttons">
                                <Link to={`/restaurants/${restaurants[i + 1].place_id}`} className="link_style logo_placeholder" style={{ textDecoration: "none" }}><EwButton /></Link>
                                <Link to={`/restaurants/${restaurants[i + 1].place_id}`} className="link_style logo_placeholder" style={{ textDecoration: "none" }}><YumButton /></Link>
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