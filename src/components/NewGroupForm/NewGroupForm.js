////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import './NewGroupForm.css';
////////////////////////////////////////////////////////////////////////////////

// FIXME: Button should link to group page once created.

class NewGroupForm extends Component {
    render() {
        return (
            <>
                <form className="newgroup_form">
                    <input placeholder=" ADD MEMBER" type="text" name="member" id="member" className="input_field" />
                    <br />

                    <input placeholder=" ADD MEMBER (Optional)" type="text" name="member" id="member" className="input_field" />
                    <br />

                    <input placeholder=" ADD MEMBER (Optional)" type="text" name="member" id="member" className="input_field" />
                    <br />

                    <input placeholder=" ADD MEMBER (Optional)" type="text" name="member" id="member" className="input_field" />
                    <br />

                    <input placeholder=" ADD MEMBER (Optional)" type="text" name="member" id="member" className="input_field" />
                    <br /><br /><br />

                    <input placeholder=" GROUP NAME" type="text" name="group" id="group" className="input_field" />
                    <br />

                    <button type="submit" className="submit_button">START GROUP</button>
                </form>
            </>
        )
    }
}

export default NewGroupForm;