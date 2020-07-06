////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import RestaurantContext from "../../contexts/RestaurantContext";
////////////////////////////////////////////////////////////////////////////////
import GroupApiService from "../../services/GroupApiService";
////////////////////////////////////////////////////////////////////////////////

class NewGroupForm extends Component {
    static defaultProps = {
        match: { params: {} },
        onCreateSuccess: () => { }
    };

    static contextType = RestaurantContext;

    state = {
        error: null,
        member_two: "",
        member_three: ""
    };

    handleChangeMemberTwo = e => {
        this.setState({ member_two: e.target.value });
    };

    handleChangeMemberThree = e => {
        this.setState({ member_three: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        const groupId = parseInt(this.context.groups.length);

        const group = {
            group_id: groupId,
            member_two: this.state.member_two,
            member_three: this.state.member_three
        };

        GroupApiService.postGroup(group)
            .then(() => {
                this.props.onCreateSuccess()
            })
            .then(responseJson => {
                this.context.addGroup(group)
            })
            .catch(this.context.setError);
    };

    render() {
        return (
            <>
                <form className="newgroup_form" onSubmit={this.handleSubmit}>
                    <input
                        placeholder=" ADD MEMBER"
                        className="input_field"
                        type="text"
                        id="member_two"
                        name="member_two"
                        onChange={this.handleChangeMemberTwo}
                        required
                    />
                    <br />

                    <input
                        placeholder=" ADD MEMBER (Optional)"
                        className="input_field"
                        type="text"
                        id="member_three"
                        name="member_three"
                        onChange={this.handleChangeMemberThree}
                    />
                    <br />

                    <button type="submit" className="submit_button">START GROUP</button>
                </form>
            </>
        );
    };
};

export default withRouter(NewGroupForm);