////////////////////////////////////////////////////////////////////////////////
import React from 'react';
////////////////////////////////////////////////////////////////////////////////
import './RestaurantList.css';
////////////////////////////////////////////////////////////////////////////////

export default function RestaurantList(props) {
    const { restaurants } = props
    const retaurantList = [];

    for (let i = 0; i < restaurants.length; i++) {
        if (restaurants.length !== 0) {
            retaurantList.push(
                <li key={restaurants.results[i].id}>
                    <div>
                        <h2>{restaurants.results[i].name}</h2>
                        <p>{restaurants.results[i].formatted_address}</p>
                    </div>
                </li>
            )
        }
    }

    return (
        <ul>
            {retaurantList}
        </ul>
    )
}
