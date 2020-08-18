////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { Link } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import RestaurantContext from "../../contexts/RestaurantContext";
////////////////////////////////////////////////////////////////////////////////
import Greeting from "../../components/Greeting/Greeting";
////////////////////////////////////////////////////////////////////////////////
import GroupApiService from "../../services/GroupApiService";
import TokenService from "../../services/TokenService";
////////////////////////////////////////////////////////////////////////////////
import config from "../../config";
////////////////////////////////////////////////////////////////////////////////
import "./AccountPage.css";
////////////////////////////////////////////////////////////////////////////////

/*  TODO: Update headline to include the first name of the user stored in context. Wait until after 
    Login Form, App, and Context TODO tags are completed.
*/

class AccountPage extends Component {
    static defaultProps = {
        match: { params: {} },
        history: {
            push: () => { },
            goBack: () => { }
        }
    };

    constructor(props) {
        super(props)
        this.state = {
            groupsOne: [],
            groupsTwo: [],
            currentUser: ""
        };
    };

    static contextType = RestaurantContext;

    componentDidMount() {
        this.context.clearError()

        Promise.all([
            fetch(`${config.API_ENDPOINT}/groups/user/one`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    "authorization": `bearer ${TokenService.getAuthToken()}`
                },
            }),
            fetch(`${config.API_ENDPOINT}/groups/user/two`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    "authorization": `bearer ${TokenService.getAuthToken()}`
                },
            })
        ])
            .then(([groupsOne, groupsTwo]) => {
                if (!groupsOne.ok) {
                    return groupsOne.json().then(e => Promise.reject(e));
                };
                if (!groupsTwo.ok) {
                    return groupsTwo.json().then(e => Promise.reject(e));
                };
                return Promise.all([
                    groupsOne.json(),
                    groupsTwo.json()
                ]);
            })
            .then(([groupsOneJson, groupsTwoJson]) => {
                this.setState({
                    groupsOne: groupsOneJson,
                    groupsTwo: groupsTwoJson
                });
                console.log(this.state.groupsOne);
                console.log(this.state.groupsTwo);
            })
            .then(() => {
                this.setState({
                    currentUser: this.state.groupsOne[0].member_one
                })
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const groupsOne = this.state.groupsOne;
        const groupsTwo = this.state.groupsTwo;
        const currentUser = this.state.currentUser;
        const userGroups = [];

        for (let i = 0; i < groupsOne.length; i++) {
            if (currentUser === groupsOne[i].member_one) {
                userGroups.push(
                    <li className="list_item" key={groupsOne[i].group_id}>Get food with: {groupsOne[i].member_two}
                        <br />
                        <Link to={`/group/${groupsOne[i].group_id}`}><button type="submit" className="go_button go">GO</button></Link>
                        <button type="submit" className="go_button" onClick={() => GroupApiService.deleteGroup(groupsOne[i].group_id, this.context.deleteGroup)}>DELETE</button>
                    </li>
                );
            };
        };

        for (let i = 0; i < groupsTwo.length; i++) {
            if (currentUser === groupsTwo[i].member_two) {
                userGroups.push(
                    <li className="list_item" key={groupsTwo[i].group_id}>Get food with: {groupsTwo[i].member_one}
                        <br />
                        <Link to={`/group/${groupsTwo[i].group_id}`}><button type="submit" className="go_button go">GO</button></Link>
                        <button type="submit" className="go_button" onClick={() => GroupApiService.deleteGroup(groupsTwo[i].group_id, this.context.deleteGroup)}>DELETE</button>
                    </li>
                );
            };
        };

        return (
            <>
                <main id="page_wrap">
                    <header className="back_header">
                        <p className="back_p"><span className="back_p back" onClick={this.props.history.goBack}>Back</span> / Account</p>
                    </header>

                    <header className="header">
                        <Greeting />
                    </header>


                    <div className="groups_box">
                        <h2 className="subhead">My Groups</h2>

                        <ul className="list">
                            {userGroups}
                        </ul>

                        <Link to={`/start-group`} className="link_style" style={{ textDecoration: "none" }}><p className="start_group_link">Start A Group ></p></Link>
                    </div>

                    <div className="chef_mode_box">
                        <h2 className="subhead">Enter Chef Mode</h2>
                        <Link to="/chef-mode"><button type="submit" className="go_button">GO</button></Link>
                    </div>
                </main>
            </>
        );
    };
};

export default AccountPage;