////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
////////////////////////////////////////////////////////////////////////////////

class Greeting extends Component {
    state = {
        hour: null
    };

    componentDidMount() {
        this.getHour();
    };

    getHour = () => {
        const date = new Date();
        const hour = date.getHours();

        this.setState({
            hour
        });
    };

    render() {
        const { hour } = this.state;
        const message = []

        if (hour < 12 && hour > 6) {
            message.push(
                <h1>Breakfast Time!</h1>
            )
        } else if (hour >= 12 && hour <= 17) {
            message.push(
                <h1>Lunch or Brunch?</h1>
            )
        } else if (hour > 17 && hour <= 19) {
            message.push(
                <h1>What's for Dinner?</h1>
            )
        } else {
            message.push(
                <h1>Need A Snack?</h1>
            )
        }

        return (
            <>
                {message}
            </>
        );
    };
};

export default Greeting;