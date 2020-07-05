////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
////////////////////////////////////////////////////////////////////////////////

const RestaurantContext = React.createContext({
    restaurants: [],
    groups: [],
    error: null,
    setError: () => { },
    clearError: () => { },
    setGroup: () => { },
    clearGroup: () => { },
    addGroup: () => { },
    deleteGroup: () => { },
    updateGroup: () => { }
});

export default RestaurantContext;

export class RestaurantProvider extends Component {
    state = {
        restaurants: [],
        groups: [],
        error: null,
    };

    setError = error => {
        console.error(error);
        this.setState({ error });
    };

    clearError = () => {
        this.setState({ error: null })
    };

    setGroup = group => {
        this.setState({ group })
    };

    clearGroup = () => {
        this.setState({ groups: null })
    }

    addGroup = group => {
        this.setState({
            groups: [...this.state.groups, group]
        })
    };

    deleteGroup = groupId => {
        const newGroup = this.state.groups.filter(group =>
            group.group_id !== groupId
        )
        this.setState({
            groups: newGroup
        })
    };

    updateGroup = newGroup => {
        this.setState({
            groups: this.state.groups.map(group =>
                (group.group_id !== newGroup.group_id) ? group : newGroup
            )
        })
    };

    render() {
        const value = {
            restaurants: this.state.restaurants,
            groups: this.state.groups,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setGroup: this.setGroup,
            clearGroup: this.clearGroup,
            addGroup: this.addGroup,
            deleteGroup: this.deleteGroup,
            updateGroup: this.updateGroup,
        };

        return (
            <RestaurantContext.Provider value={value}>
                {this.props.children}
            </RestaurantContext.Provider>
        );
    };
};