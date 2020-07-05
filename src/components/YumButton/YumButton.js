////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { Link } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import "./YumButton.css";
////////////////////////////////////////////////////////////////////////////////

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