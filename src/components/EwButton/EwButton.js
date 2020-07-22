////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
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
                <div className="ew_circle">EW!</div>
            </>
        );
    };
};

export default EwButton;