////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
////////////////////////////////////////////////////////////////////////////////
import RestaurantContext from "../../contexts/RestaurantContext";
////////////////////////////////////////////////////////////////////////////////
import AuthApiService from "../../services/AuthApiService";
////////////////////////////////////////////////////////////////////////////////
import "./YumButton.css";
////////////////////////////////////////////////////////////////////////////////

/*  TODO: List for Yum Button
            >   Access place based on id: https://developers.google.com/places/web-service/place-id
*/

/*  FIXME:  App can't find the User ID because it's hidden. I have it set up to pull server side but 
            I need it client side too... */

class YumButton extends Component {
    static defaultProps = {
        match: { params: {} },
        onUpdateSuccess: () => { }
    };

    static contextType = RestaurantContext;

    constructor(props) {
        super(props)
        this.state = {
            restaurant_id: this.props.restaurant_id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit = e => {
        e.preventDefault();
        const user_id = this.props.match.params.user_id;
        const { restaurant_id } = this.state;
        const newUser = {
            restaurant_id: restaurant_id
        };

        AuthApiService.updateUser(newUser, user_id)
            .then(() => {
                this.props.onUpdateSuccess();
            })
            .catch(this.context.setError)
    };

    render() {
        return (
            <>
                <div className="yum_circle" onClick={this.handleSubmit}>YUM!</div>
            </>
        );
    };
};

export default YumButton;