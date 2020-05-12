////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import RestaurantZipSearchBar from '../../components/RestaurantZipSearchBar/RestaurantZipSearchBar';
////////////////////////////////////////////////////////////////////////////////
import config from '../../config';
////////////////////////////////////////////////////////////////////////////////
import './RestaurantSearchPage.css';
////////////////////////////////////////////////////////////////////////////////

class RestaurantSearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurants: [],
            searchQuery: '60618',
            error: []
        }
    }

    handleSearchSubmit = (searchSubmitEvent, searchInput) => {
        searchSubmitEvent.preventDefault();
        this.setState({
            searchQuery: searchInput
        });

        const baseUrl = `https://cors-anywhere.herokuapp.com/${config.RESTAURANTS_ENDPOINT}/json?query=restaurants+in+`;
        const key = `${config.RESTAURANTS_KEY}`;
        const formattedSearchUrl = this.formatQuery(baseUrl, searchInput, key);

        fetch(formattedSearchUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong. Please try again later.');
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                console.log('Good response from Google Places API')
                this.setState({
                    restaurants: data.results,
                    error: null
                });
                console.log(this.state.restaurants)
            })
            .catch(error => {
                this.setState({
                    error: error.message
                });
            });
    }

    formatQuery = (baseUrl, searchInput, key) => {
        let formattedQuery;
        if (searchInput !== '') {
            formattedQuery = searchInput;
        }

        const formattedUrl = baseUrl + formattedQuery + '&key=' + key;

        return formattedUrl;
    }

    render() {
        let listOfRestaurants = [];

        for (let i = 0; i < this.state.restaurants.length; i++) {
            if (this.state.restaurants.length !== 0) {
                listOfRestaurants.push(
                    <li className="restaurant_list_item" key={this.state.restaurants[i].id}>
                        <div>
                            <h2>{this.state.restaurants[i].name}</h2>
                            <p>{this.state.restaurants[i].formatted_address}</p>
                        </div>
                    </li>
                )
            }
        }

        return (
            <>
                <main id="page_wrap">
                    <header className="header spacing">
                        <h1>Find A Match</h1>
                    </header>

                    <RestaurantZipSearchBar handleSearchSubmit={this.handleSearchSubmit} />
                    <ul className="list">{listOfRestaurants}</ul>
                </main>
            </>
        )
    }
}

export default RestaurantSearchPage;