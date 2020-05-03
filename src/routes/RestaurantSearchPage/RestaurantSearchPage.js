////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import RestaurantList from '../../components/RestaurantList/RestaurantList';
import RestaurantZipSearchBar from '../../components/RestaurantZipSearchBar/RestaurantZipSearchBar';
////////////////////////////////////////////////////////////////////////////////
import config from '../../config';
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
                    restaurants: data,
                    error: null
                });
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
        console.log('formatted URL:', formattedUrl);
        return formattedUrl;
    }

    render() {
        return (
            <>
                <main id="page_wrap">
                    <header className="header spacing">
                        <h1>Find A Match</h1>
                    </header>

                    <RestaurantZipSearchBar handleSearchSubmit={this.handleSearchSubmit} />

                    {/* FIXME: Is there a way to keep this component from loading/running until after 
                    the search is submitted in the search bar? I think the RestaurantList component is
                    technically working, you just can't tell because it keeps trying to run before a 
                    zip code is submitted. */}
                    
                    <RestaurantList restaurants={this.state.restaurants} />
                </main>
            </>
        )
    }
}

export default RestaurantSearchPage;