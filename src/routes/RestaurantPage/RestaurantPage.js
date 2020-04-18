////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import RestaurantContext from '../../contexts/RestaurantContext';
////////////////////////////////////////////////////////////////////////////////

// TODO: Render one restaurant at a time

class RestaurantPage extends Component {
    static contextType = RestaurantContext;

    renderRestaurantInfo() {
        const restaurantResults = this.context.restaurantResults;

        console.log(restaurantResults)
    }

    render() {
        return (
            <>
                <main id="page_wrap">
                    <header className="header spacing">
                        <h1>RESTAURANT NAME</h1>
                    </header>
                </main>
            </>
        )
    }
}

export default RestaurantPage;