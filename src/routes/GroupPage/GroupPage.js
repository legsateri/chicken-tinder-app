////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import { Link } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////
import RestaurantContext from "../../contexts/RestaurantContext";
////////////////////////////////////////////////////////////////////////////////
import TokenService from "../../services/TokenService";
////////////////////////////////////////////////////////////////////////////////
import config from "../../config";
////////////////////////////////////////////////////////////////////////////////
import "./GroupPage.css";
////////////////////////////////////////////////////////////////////////////////

class GroupPage extends Component {
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
            groups: []
        };
    };

    static contextType = RestaurantContext;

    componentDidMount() {
        const group_id = this.props.match.params.group_id;
        this.context.clearError();

        Promise.all([
            fetch(`${config.API_ENDPOINT}/groups/${group_id}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    "authorization": `bearer ${TokenService.getAuthToken()}`
                }
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
        return (
            <>
                <main id="page_wrap">
                    <header className="back_header">
                        <p className="back_p"><span className="back_p back" onClick={this.props.history.goBack}>Back</span> / Group</p>
                    </header>

                    <div className="match_box">
                        <h3 className="subhead">Past Matches</h3>
                        <Link to={`/search`} className="link_style" style={{ textDecoration: "none" }}><p className="start_search_link">Start A New Search ></p></Link>

                        <ul className="list match_flex">
                            <li className="list_item" id="match_one"><div id="past_match_placeholder"></div></li>
                            <li className="list_item"><div id="past_match_placeholder"></div></li>
                        </ul>
                        <ul className="list match_flex hide">
                            <li className="list_item" id="match_three"><div id="past_match_placeholder"></div></li>
                            <li className="list_item"><div id="past_match_placeholder"></div></li>
                        </ul>
                    </div>

                    <Link to="/search"><button type="submit" className="submit_button" id="group_search_button">START NEW SEARCH</button></Link>
                </main>
            </>
        );
    };
};

export default GroupPage;