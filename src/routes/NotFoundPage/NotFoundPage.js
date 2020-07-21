////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
////////////////////////////////////////////////////////////////////////////////
class NotFoundPage extends Component {
    static defaultProps = {
        match: { params: {} },
        history: {
            push: () => { },
            goBack: () => { }
        }
    };

    render() {
        return (
            <>
                <header className="back_header">
                    <p className="back_p"><span className="back_p back" onClick={this.props.history.goBack}>Back</span> / Oops</p>
                </header>

                <header className="header">
                    <h1>Wuh Oh!</h1>
                    <p>The deliciousness you're looking for doesn't exist. Try going back, or clicking one of the options in the nav.</p>
                </header>
            </>
        );
    };
};

export default NotFoundPage;