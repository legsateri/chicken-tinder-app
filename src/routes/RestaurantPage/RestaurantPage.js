////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
////////////////////////////////////////////////////////////////////////////////
import EwButton from "../../components/EwButton/EwButton";
import YumButton from "../../components/YumButton/YumButton";
////////////////////////////////////////////////////////////////////////////////
import "./RestaurantPage.css";
////////////////////////////////////////////////////////////////////////////////

/*  TODO: List for Restaurant Page
            >   Show restaurant name, a picture, and address.
            >   The url for this page should be unique per restaurant "/restaurant/:restaurant_id".
*/

class RestaurantPage extends Component {
    render() {
        return (
            <>
                <main id="page_wrap">
                    <header className="header spacing">
                        <h1>Restaurant Name</h1>
                    </header>

                    <div className="restaurant_box"></div>

                    <div className="restaurant_buttons">
                        <EwButton />
                        <YumButton />
                    </div>
                </main>
            </>
        );
    };
};

export default RestaurantPage;