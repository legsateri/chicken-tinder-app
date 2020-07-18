////////////////////////////////////////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import RestaurantZipSearchBar from "../../components/RestaurantZipSearchBar/RestaurantZipSearchBar";
////////////////////////////////////////////////////////////////////////////////

it("render without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
        <BrowserRouter>
            <RestaurantZipSearchBar />
        </BrowserRouter>,
        div
    );

    ReactDOM.unmountComponentAtNode(div);
});