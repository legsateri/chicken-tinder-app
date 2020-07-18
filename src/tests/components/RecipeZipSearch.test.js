////////////////////////////////////////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import RecipeZipSearch from "../../components/RecipeZipSearch/RecipeZipSearch";
////////////////////////////////////////////////////////////////////////////////

it("render without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
        <BrowserRouter>
            <RecipeZipSearch />
        </BrowserRouter>,
        div
    );
    
    ReactDOM.unmountComponentAtNode(div);
});