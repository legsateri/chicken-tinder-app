////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { Link } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import RestaurantContext from "../../contexts/RestaurantContext";
////////////////////////////////////////////////////////////////////////////////
import GroupApiService from "../../services/GroupApiService";
import TokenService from "../../services/TokenService";
////////////////////////////////////////////////////////////////////////////////
import config from "../../config";
////////////////////////////////////////////////////////////////////////////////
import "./AccountPage.css";
////////////////////////////////////////////////////////////////////////////////

class AccountPage extends Component {
    static defaultProps = {
        match: { params: {} },
        history: { push: () => { } }
    };

    constructor(props) {
        super(props)
        this.state = {
            groups: []
        };
    };

    static contextType = RestaurantContext;

    componentDidMount() {
        this.context.clearError()

        Promise.all([
            fetch(`${config.API_ENDPOINT}/groups`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    "authorization": `bearer ${TokenService.getAuthToken()}`
                },
            })
        ])
            .then(([groups]) => {
                if (!groups.ok) {
                    return groups.json().then(e => Promise.reject(e));
                };
                return Promise.all([
                    groups.json()
                ]);
            })
            .then(([groupsJson]) => {
                this.setState({
                    groups: groupsJson
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const groups = this.state.groups;
        console.log(groups);

        // FIXME: Make email dynamic based on logged in user
        const userEmail = "allegrapusateri@gmail.com";
        console.log(userEmail);
        const userGroups = [];

        // FIXME: Add go button functionality
        for (let i = 0; i < groups.length; i++) {
            if (userEmail === groups[i].member_one) {
                userGroups.push(
                    <li className="list_item" key={groups[i].group_id}>Get food with: {groups[i].member_two}
                        <br />
                        <Link to="/group"><button type="submit" className="go_button go">GO</button></Link>
                        <button type="submit" className="go_button" onClick={() => GroupApiService.deleteGroup(groups[i].group_id, this.context.deleteGroup)}>DELETE</button>
                    </li>
                );
            } else if (userEmail === groups[i].member_two) {
                userGroups.push(
                    <li className="list_item" key={groups[i].group_id}>Get food with: {groups[i].member_one} {groups[i].last_name}
                        <br />
                        <Link to="/group"><button type="submit" className="go_button go">GO</button></Link>
                        <button type="submit" className="go_button" onClick={() => GroupApiService.deleteGroup(groups[i].group_id, this.context.deleteGroup)}>DELETE</button>
                    </li>
                );
            };
        };

        console.log(userGroups);

        return (
            <>
                <main id="page_wrap">
                    {/* FIXME: Add logged in user's first name */}
                    <header className="header">
                        <h1>Hi!</h1>
                    </header>


                    <div className="groups_box">
                        <h2 className="subhead">My Groups</h2>
                        <ul className="list">
                            {userGroups}
                        </ul>
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