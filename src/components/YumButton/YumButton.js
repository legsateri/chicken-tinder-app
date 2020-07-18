////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { Link } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import "./YumButton.css";
////////////////////////////////////////////////////////////////////////////////

/*  TODO: List for Yum Button
            >   Button should trigger a new random restaurant to appear. 
            >   Should also PATCH the unique restaurant ID to the server.
*/

class YumButton extends Component {
    render() {
        return (
            <>
                <Link to="/restaurants/:restaurant_id"><div className="yum_circle">YUM!</div></Link>
            </>
        );
    };
};

export default YumButton;