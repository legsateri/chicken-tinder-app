////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import RecipeZipsearch from '../../components/RecipeZipSearch/RecipeZipSearch';
////////////////////////////////////////////////////////////////////////////////
import config from '../../config';
////////////////////////////////////////////////////////////////////////////////

/* TODO: Weather search is done, but needs to trigger a query to a recipe API looking for a seasonal 
recipe. */

class ChefModePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weather: "",
            weatherQuery: "60618",
            weatherError: [],
            recipeQuery: ""
        }
    }

    handleSearchSubmit = (searchSubmitEvent, searchInput) => {
        searchSubmitEvent.preventDefault();
        this.setState({
            weatherQuery: searchInput
        });

        const baseWeatherUrl = `${config.WEATHER_ENDPOINT}`;
        const weatherKey = `${config.WEATHER_KEY}`;
        const formattedWeatherUrl = this.formatQuery(baseWeatherUrl, searchInput, weatherKey);

        fetch(formattedWeatherUrl)
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
                    weather: data.current.temp_f,
                    weatherError: null
                });
                console.log(this.state.weather)
            })
            .catch(weatherError => {
                this.setState({
                    weatherError: weatherError.message
                });
            });

        let recipeSearchInput;

        if (this.state.weather >= 80) {
            recipeSearchInput = "summer"
        } else if (this.state.weather >= 50 & this.state.weather <= 79) {
            recipeSearchInput = "spring"
        } else if (this.state.weather >= 35 & this.state.weather <= 49) {
            recipeSearchInput = "fall"
        } else {
            recipeSearchInput = "winter"
        }

        console.log(recipeSearchInput)

        this.setState({
            recipeQuery: recipeSearchInput
        });
    }

    formatQuery = (baseWeatherUrl, searchInput, weatherKey) => {
        let formattedWeatherQuery;

        if (searchInput !== "") {
            formattedWeatherQuery = "?q=" + searchInput
        }

        const formattedWeatherUrl = baseWeatherUrl + formattedWeatherQuery + "&key=" + weatherKey;
        return formattedWeatherUrl;
    }

    render() {
        console.log(this.state.recipeQuery)
        return (
            <>
                <main id="page_wrap">
                    <header className="header spacing">
                        <h1>Chef Mode</h1>
                        <p>Enter your zip and we'll suggest recipes based on the local weather.</p>
                    </header>

                    <RecipeZipsearch handleSearchSubmit={this.handleSearchSubmit} />
                </main>
            </>
        )
    }
}

export default ChefModePage;