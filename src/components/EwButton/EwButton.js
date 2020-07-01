////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { Link } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import "./EwButton.css";
////////////////////////////////////////////////////////////////////////////////

class EwButton extends Component {
    render() {
        return (
            <>
                <Link to="/restaurants/:restaurant_id"><div className="ew_circle">EW!</div></Link>
            </>
        )
    }
}

export default EwButton;