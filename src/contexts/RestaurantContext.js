////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
////////////////////////////////////////////////////////////////////////////////

const RestaurantContext = React.createContext({
    restaurants: [],
    error: null,
});

export default RestaurantContext;

export class RestaurantProvider extends Component {
    state = {
        restaurants: [],
        error: null,
    };

    setError = error => {
        console.error(error);
        this.setState({ error });
    };

    clearError = () => {
        this.setState({ error: null })
    };

    render() {
        const value = {
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
        };

        return (
            <RestaurantContext.Provider value={value}>
                {this.props.children}
            </RestaurantContext.Provider>
        );
    };
};