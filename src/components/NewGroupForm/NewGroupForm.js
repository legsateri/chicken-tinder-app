////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import './NewGroupForm.css';
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

                    <input placeholder=" ADD MEMBER (Optional)" type="text" name="member" id="member" className="input_field" />
                    <br />

                    <input placeholder=" ADD MEMBER (Optional)" type="text" name="member" id="member" className="input_field" />
                    <br />

                    <input placeholder=" ADD MEMBER (Optional)" type="text" name="member" id="member" className="input_field" />
                    <br /><br /><br />

                    <input placeholder=" GROUP NAME" type="text" name="group" id="group" className="input_field" />
                    <br />

                    <Link to="/group"><button type="submit" className="submit_button">START GROUP</button></Link>
                </form>
            </>
        )
    }
}

export default NewGroupForm;