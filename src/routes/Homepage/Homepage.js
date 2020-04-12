////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import './Homepage.css';
////////////////////////////////////////////////////////////////////////////////

class Homepage extends Component {
    render() {
        return (
            <>
                <main id="page_wrap">
                    <header className="header">
                        <h1>Homepage Headline</h1>
                        <p>Cupcake ipsum dolor sit amet bear claw sweet roll marshmallow. Wafer halvah chupa chups chocolate cake icing powder topping cake. Cookie dessert jelly.</p>

                        <Link to='/login' ><button type="submit" className="submit_button" id="homepage_start_button">GET STARTED</button></Link>
                    </header>

                    <div id="homepage_flex">
                        <div id="placeholder_box"></div>
                        <p id="info_screen">Cupcake ipsum dolor sit amet. Cookie carrot cake pie cake pudding chocolate bar. Cake muffin I love soufflé jelly beans liquorice donut chocolate cake halvah.  Candy canes cheesecake marshmallow I love bear claw. Pudding marshmallow sweet roll liquorice.</p>
                        <Link to='/login' ><button type="submit" className="submit_button" id="flex_button">GET STARTED</button></Link>
                    </div>
                </main>
            </>
        )
    }
}

export default Homepage;