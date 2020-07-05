////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
////////////////////////////////////////////////////////////////////////////////
class NotFoundPage extends Component {
    render() {
        return (
            <>
                <header className="header">
                    <h1>Wuh Oh!</h1>
                    <p>The deliciousness you're looking for doesn't exist. Try going back, or clicking one of the options in the nav.</p>
                </header>
            </>
        );
    };
};

export default NotFoundPage;