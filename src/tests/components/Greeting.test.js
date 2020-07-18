////////////////////////////////////////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import Greeting from "../../components/Greeting/Greeting";
////////////////////////////////////////////////////////////////////////////////

it("render without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
        <BrowserRouter>
            <Greeting />
        </BrowserRouter>,
        div
    );

    ReactDOM.unmountComponentAtNode(div);
});