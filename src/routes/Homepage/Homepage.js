////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import './Homepage.css';
////////////////////////////////////////////////////////////////////////////////

class Homepage extends Component {
    render() {
        return(
            <>
            <main>
                <header className="header">
                    <h1>Homepage Headline</h1>
                    <p>Cupcake ipsum dolor sit amet bear claw sweet roll marshmallow. Wafer halvah chupa chups chocolate cake icing powder topping cake. Cookie dessert jelly.</p>

                    <button type="submit" className="submit_button">GET STARTED</button>
                </header>
            </main>
            </>
        )
    }
}

export default Homepage;