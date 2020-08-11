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
            I need it client side too.

            Thoughts:
                1.  Should I save the user's information to context upon login? Though all I could 
                    access is email and I need the user id, so tht doesn't solve the problem.
                2.  What if I run a get all users when the homepage loads, and save just the email, 
                    user name, and user id to context. Then, upon login I search for the user based on 
                    the input email, update context so it's just the one user's name and id. And I use 
                    that information on both the group page and for the yum button.
*/

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