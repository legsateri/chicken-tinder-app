////////////////////////////////////////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import ChefModePage from "../../routes/ChefModePage/ChefModePage";
////////////////////////////////////////////////////////////////////////////////

it("render without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
        <BrowserRouter>
            <ChefModePage />
        </BrowserRouter>,
        div
    );

    ReactDOM.unmountComponentAtNode(div);
});