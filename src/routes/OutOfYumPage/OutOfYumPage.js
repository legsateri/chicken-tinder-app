////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { Link } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////

class OutOfYumPage extends Component {
    render() {
        return (
            <>
                <main id="page_wrap">
                    <header className="back_header">
                        <p className="back_p"><Link to={"/search"}><span className="back_p back">Search</span></Link> / Out Of Yum</p>
                    </header>

                    <div>
                        <header className="header spacing">
                            <h1>All out of yum!</h1>
                            <p>Someone's picky. Maybe you should try another zip code.</p>
                        </header>
                    </div>
                </main>
            </>
        );
    };
};

export default OutOfYumPage;