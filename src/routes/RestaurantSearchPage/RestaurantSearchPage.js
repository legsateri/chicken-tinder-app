////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import ZipSearchBar from '../../components/ZipSearchBar/ZipSearchBar';
////////////////////////////////////////////////////////////////////////////////
import config from '../../config';
////////////////////////////////////////////////////////////////////////////////

class RestaurantSearchPage extends Component {
    state = {
        restaurants: [],
        searchQuery: '60618',
        error: []
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
                console.log('Good response from Google Places API:', data)
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

                    <ZipSearchBar handleSearchSubmit={this.handleSearchSubmit} />
                </main>
            </>
        )
    }
}

export default RestaurantSearchPage;