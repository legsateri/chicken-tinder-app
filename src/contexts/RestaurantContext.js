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

class RestaurantProvider extends Component {
    state = {
        query: ['restaurants'],
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
}

export default RestaurantProvider;