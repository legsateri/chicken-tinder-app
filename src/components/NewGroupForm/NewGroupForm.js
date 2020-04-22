////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import RestaurantContext from '../../contexts/RestaurantContext';
////////////////////////////////////////////////////////////////////////////////
import RestaurantApiService from '../../services/RestaurantsApiService';
////////////////////////////////////////////////////////////////////////////////
import './NewGroupForm.css';
////////////////////////////////////////////////////////////////////////////////

// TODO: Set up onClick triggering getRestaurants search, then pass the results to RestaurantsPage route

class NewGroupForm extends Component {
    render() {
        return (
            <RestaurantContext.Consumer>
                {(context) => (
                    <form className="newgroup_form">
                        <input placeholder=" ADD MEMBER" type="text" name="member" id="member" className="input_field" />
                        <br />

                        <input placeholder=" ADD MEMBER (Optional)" type="text" name="member" id="member" className="input_field" />
                        <br />

                        <input placeholder=" ADD MEMBER (Optional)" type="text" name="member" id="member" className="input_field" />
                        <br />

                        <input placeholder=" ADD MEMBER (Optional)" type="text" name="member" id="member" className="input_field" />
                        <br />

                        <input placeholder=" ADD MEMBER (Optional)" type="text" name="member" id="member" className="input_field" />
                        <br /><br /><br />

                        <input placeholder=" GROUP NAME" type="text" name="group" id="group" className="input_field" />
                        <br />

                        <Link to="/restaurants/:restaurant_id"><button type="submit" className="submit_button" onClick={() => RestaurantApiService.getRestaurants(context.setQuery)}>START GROUP</button></Link>
                    </form>
                )}
            </RestaurantContext.Consumer>
        )
    }
}

export default NewGroupForm;