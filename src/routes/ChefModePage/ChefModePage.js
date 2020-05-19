////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import RecipeZipsearch from '../../components/RecipeZipSearch/RecipeZipSearch';
////////////////////////////////////////////////////////////////////////////////
import config from '../../config';
////////////////////////////////////////////////////////////////////////////////

/* TODO: Fetch to recipe API is functioning. Now need to render one random recipe at a time with option 
to see a different recipe if the one you're viewing doesn't float your boat. */

class ChefModePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weather: "",
            weatherQuery: "60618",
            weatherError: [],
            recipeQuery: "",
            recipes: [],
            recipeError: [],
        }
        this.handleRecipeQuery = this.handleRecipeQuery.bind(this)
    }

    handleSearchSubmit = (searchSubmitEvent, searchInput) => {
        searchSubmitEvent.preventDefault();
        this.setState({
            weatherQuery: searchInput
        });

        const baseWeatherUrl = `${config.WEATHER_ENDPOINT}`;
        const weatherKey = `${config.WEATHER_KEY}`;
        const formattedWeatherUrl = this.formatWeatherQuery(baseWeatherUrl, searchInput, weatherKey);

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
                this.handleRecipeQuery()
                this.handleRecipeFetch()
            })
            .catch(weatherError => {
                this.setState({
                    weatherError: weatherError.message
                });
            });
    }

    formatWeatherQuery = (baseWeatherUrl, searchInput, weatherKey) => {
        let formattedWeatherQuery;

        if (searchInput !== "") {
            formattedWeatherQuery = "?q=" + searchInput
        }

        const formattedWeatherUrl = baseWeatherUrl + formattedWeatherQuery + "&key=" + weatherKey;
        return formattedWeatherUrl;
    }

    handleRecipeQuery = () => {
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

        this.setState({
            recipeQuery: recipeSearchInput
        });

        console.log(this.state.recipeQuery)
    }

    formatReceipeQuery = (baseRecipeUrl, recipeKey, recipeId) => {
        let recipeInput = this.state.recipeQuery;

        let formattedRecipeQuery;

        if (recipeInput !== "") {
            formattedRecipeQuery = "?q=" + recipeInput
        }

        const formattedRecipeUrl = baseRecipeUrl + formattedRecipeQuery + "&app_key=" + recipeKey + "&app_id=" + recipeId;
        return formattedRecipeUrl;
    }

    handleRecipeFetch = () => {
        const baseRecipeUrl = `${config.RECIPE_ENDPOINT}`;
        const recipeKey = `${config.RECIPE_KEY}`;
        const recipeId = `${config.RECIPE_ID}`;
        const formattedRecipeUrl = this.formatReceipeQuery(baseRecipeUrl, recipeKey, recipeId);

        fetch(formattedRecipeUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Something went wrong. Please try again later.");
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                console.log("Good response from Recipe API.")
                this.setState({
                    recipes: data.hits,
                    recipeError: null
                });
                console.log(this.state.recipes)
            })
            .catch(recipeError => {
                this.setState({
                    recipeError: recipeError.message
                });
            });
    }

    render() {
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