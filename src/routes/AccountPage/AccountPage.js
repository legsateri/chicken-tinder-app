////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { Link } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import RestaurantContext from "../../contexts/RestaurantContext";
////////////////////////////////////////////////////////////////////////////////
import GroupApiService from "../../services/GroupApiService";
////////////////////////////////////////////////////////////////////////////////
import "./AccountPage.css";
////////////////////////////////////////////////////////////////////////////////

class AccountPage extends Component {
    static defaultProps = {
        match: { params: {} },
        history: {
            push: () => { },
            goBack: () => { }
        }
    };

    static contextType = RestaurantContext;

    render() {
        let currentUserEmail = this.context.currentUser.email;
        let userGroups = [];

        for (let i = 0; i < this.context.groupsOne.length; i++) {
            for (let j = 0; j < this.context.users.length; j++) {
                if (currentUserEmail !== this.context.users[j].email && currentUserEmail === this.context.groupsOne[i].member_one) {
                    userGroups.push(
                        <li className="list_item" key={this.context.groupsOne[i].group_id}>Get food with: {this.context.users[j].first_name}
                            <br />
                            <Link to={`/group/${this.context.groupsOne[i].group_id}`}><button type="submit" className="go_button go">GO</button></Link>
                            <button type="submit" className="go_button" onClick={() => GroupApiService.deleteGroup(this.context.groupsOne[i].group_id, this.context.deleteGroup)}>DELETE</button>
                        </li>
                    );
                };
            };
        };

        for (let i = 0; i < this.context.groupsTwo.length; i++) {
            for (let j = 0; j < this.context.users.length; j++) {
                if (currentUserEmail !== this.context.users[j].email && currentUserEmail === this.context.groupsTwo[i].member_two) {
                    userGroups.push(
                        <li className="list_item" key={this.context.groupsTwo[i].group_id}>Get food with: {this.context.users[j].first_name}
                            <br />
                            <Link to={`/group/${this.context.groupsTwo[i].group_id}`}><button type="submit" className="go_button go">GO</button></Link>
                            <button type="submit" className="go_button" onClick={() => GroupApiService.deleteGroup(this.context.groupsTwo[i].group_id, this.context.deleteGroup)}>DELETE</button>
                        </li>
                    );
                };
            };
        };

        return (
            <>
                <main id="page_wrap">
                    <header className="back_header">
                        <p className="back_p"><span className="back_p back" onClick={this.props.history.goBack}>Back</span> / Account</p>
                    </header>

                    <header className="header">
                        <h1>Hiya {this.context.currentUser.first_name}!</h1>
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