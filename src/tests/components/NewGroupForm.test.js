////////////////////////////////////////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import NewGroupForm from "../../components/NewGroupForm/NewGroupForm";
////////////////////////////////////////////////////////////////////////////////

it("render without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
        <BrowserRouter>
            <NewGroupForm />
        </BrowserRouter>,
        div
    );
    
    ReactDOM.unmountComponentAtNode(div);
});