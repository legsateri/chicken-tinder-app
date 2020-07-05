////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
////////////////////////////////////////////////////////////////////////////////

class NewGroupForm extends Component {
    render() {
        return (
            <>
                <form className="newgroup_form">
                    <input placeholder=" ADD MEMBER" type="text" name="member" id="member" className="input_field" />
                    <br />

                    <input placeholder=" ADD MEMBER (Optional)" type="text" name="member" id="member" className="input_field" />
                    <br />

                    <button type="submit" className="submit_button">START GROUP</button>
                </form>
            </>
        );
    };
};

export default NewGroupForm;