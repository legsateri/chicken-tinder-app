////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import RestaurantsApiService from '../services/RestaurantsApiService';
////////////////////////////////////////////////////////////////////////////////

const RestaurantContext = React.createContext({
    query: [],
    restaurantResults: [],
    error: null,
    setQuery: () => { },
    setRestaurantResults: () => { },
    clearRestaurantResults: () => { },
    setError: () => { },
    clearError: () => { }
})

export default RestaurantContext;

export class RestaurantProvider extends Component {
    state = {
        query: ["restaurants"],
        restaurantResults: [],
        error: null
    }

    setQuery = (query) => {
        this.setState({ query }, () => {
            RestaurantsApiService.getRestaurants(query)
                .then(this.setRestaurantResults)
                .catch(this.setError)
        })
    }

    setRestaurantResults = restaurantResults => {
        this.setState({ restaurantResults })
    }

    clearRestaurantResults = () => {
        this.setState({ restaurantResults: [] })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render() {
        const value = {
            query: this.state.query,
            setQuery: this.setQuery,
            restaurantResults: this.state.restaurantResults,
            setRestaurantResults: this.setRestaurantResults,
            clearRestaurantResults: this.clearRestaurantResults,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError
        }

        return (
            <RestaurantContext.Provider value={value}>
                {this.props.children}
            </RestaurantContext.Provider>
        )
    }
};