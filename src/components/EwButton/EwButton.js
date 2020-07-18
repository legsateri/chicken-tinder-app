////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { Link } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import "./EwButton.css";
////////////////////////////////////////////////////////////////////////////////

/*  TODO: List for Ew Button
            >   Button should trigger a new random restaurant to appear. 
            >   Does not need to POST or PATCH anything on the server.
*/

class EwButton extends Component {
    render() {
        return (
            <>
                <Link to="/restaurants/:restaurant_id"><div className="ew_circle">EW!</div></Link>
            </>
        );
    };
};

export default EwButton;