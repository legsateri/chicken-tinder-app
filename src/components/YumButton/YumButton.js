////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
////////////////////////////////////////////////////////////////////////////////
import "./YumButton.css";
////////////////////////////////////////////////////////////////////////////////

/*  TODO: List for Yum Button
            >   Should also PATCH the unique restaurant ID to the server.
*/

class YumButton extends Component {
    render() {
        return (
            <>
                <div className="yum_circle">YUM!</div>
            </>
        );
    };
};

export default YumButton;