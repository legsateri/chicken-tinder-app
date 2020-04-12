////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import './Homepage.css';
import { findAllByAltText } from '@testing-library/react';
////////////////////////////////////////////////////////////////////////////////

class Homepage extends Component {
    render() {
        return (
            <>
                <main id="page_wrap">
                    <header className="header">
                        <h1>Food You Love</h1>
                        <p>Welcome Chicken Tinder, a first-of-its-kind restaurant dating app. Invite friends to give a "yup" or "meh" while deciding what's for dinner.</p>

                        <Link to='/login' ><button type="submit" className="submit_button" id="homepage_start_button">GET STARTED</button></Link>
                    </header>

                    <div id="homepage_flex">
                        <div id="placeholder_box"></div>
                        <p id="info_screen">Using Chicken Tinder is easy. All you have to do is create a group and explore local restaurants. Or, you can utilize your mad chef skills and find something to cook at home. We have it all.</p>
                        <Link to='/login' ><button type="submit" className="submit_button" id="flex_button">GET STARTED</button></Link>
                    </div>
                </main>
            </>
        )
    }
}

export default Homepage;