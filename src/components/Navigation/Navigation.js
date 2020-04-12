////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import Hamburger from '../Hamburger/Hamburger';
////////////////////////////////////////////////////////////////////////////////
import './Navigation.css';
////////////////////////////////////////////////////////////////////////////////

class Navigation extends Component {
    render() {
        return (
            <>
                <nav className="navigation" role="navigation">
                    <div className="left_justify">
                        <Link to="/"><p>[Logo]</p></Link>

                        <div id="menu" className="right_justify">
                            <Hamburger pageWrapId={"page_wrap"} outerContainerId={"App"} />
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navigation;