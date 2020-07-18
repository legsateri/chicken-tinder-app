////////////////////////////////////////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import StartGroupPage from "../../routes/StartGroupPage/StartGroupPage";
////////////////////////////////////////////////////////////////////////////////

it("render without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
        <BrowserRouter>
            <StartGroupPage />
        </BrowserRouter>,
        div
    );

    ReactDOM.unmountComponentAtNode(div);
});