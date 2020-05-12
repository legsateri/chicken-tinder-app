////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import RecipeZipsearch from '../../components/RecipeZipSearch/RecipeZipSearch';
////////////////////////////////////////////////////////////////////////////////
import config from '../../config';
////////////////////////////////////////////////////////////////////////////////

/* TODO: Set this up the ame way the Flavor Forecast one was. Zip search triggers weather search in the 
background. That triggers a query to a food API looking for a seasonal recipe. */

class ChefModeHomepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weather: [],
            searchQuery: "60618",
            error: []
        }
    }

    handleSearchSubmit = (searchSubmitEvent, searchInput) => {
        searchSubmitEvent.preventDefault();
        this.setState({
            searchQuery: searchInput
        });

        const baseUrl = `${config.WEATHER_ENDPOINT}`;
        const key = `${config.WEATHER_KEY}`;
        const formattedSearchUrl = this.formatQuery(baseUrl, searchInput, key);

        fetch(formattedSearchUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Something went wrong. Please try again later.");
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                console.log("Good response from Weather API.")
                this.setState({
                    weather: data,
                    error: null
                });
                console.log(this.state.weather)
            })
            .catch(error => {
                this.setState({
                    error: error.message
                });
            });
    }

    formatQuery = (baseUrl, searchInput, key) => {
        let formattedQuery;

        if (searchInput !== "") {
            formattedQuery = "?q=" + searchInput
        }

        const formattedUrl = baseUrl + formattedQuery + "&key=" + key;
        return formattedUrl;
    }

    render() {
        return (
            <>
                <main id="page_wrap">
                    <header className="header spacing">
                        <h1>Chef Mode</h1>
                    </header>

                    <RecipeZipsearch handleSearchSubmit={this.handleSearchSubmit} />
                </main>
            </>
        )
    }
}

export default ChefModeHomepage;