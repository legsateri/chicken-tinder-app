////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
////////////////////////////////////////////////////////////////////////////////

// TODO: Add current user to context. state, and set function

const RestaurantContext = React.createContext({
    restaurants: [],
    groups: [],
    error: null,
    nextPage: "",
    users: [],
    setError: () => { },
    clearError: () => { },
    setGroup: () => { },
    clearGroup: () => { },
    addGroup: () => { },
    deleteGroup: () => { },
    updateGroup: () => { },
    setRestaurants: () => { },
    clearRestaurants: () => { },
    setNextPage: () => { },
    clearNextPage: () => { },
    setUsers: () => { },
    clearUser: () => { },
    updateUser: () => { }
});

export default RestaurantContext;

export class RestaurantProvider extends Component {
    state = {
        restaurants: [],
        groups: [],
        error: null,
        nextPage: "",
        users: [],
    };

    setError = error => {
        console.error(error);
        this.setState({ error });
    };

    clearError = () => {
        this.setState({ error: null });
    };

    setGroup = groups => {
        this.setState({ groups });
    };

    clearGroup = () => {
        this.setState({ groups: null });
    };

    addGroup = group => {
        this.setState({
            groups: [...this.state.groups, group]
        });
    };

    deleteGroup = groupId => {
        const newGroup = this.state.groups.filter(group =>
            group.group_id !== groupId
        );
        this.setState({
            groups: newGroup
        });
    };

    updateGroup = newGroup => {
        this.setState({
            groups: this.state.groups.map(group =>
                (group.group_id !== newGroup.group_id) ? group : newGroup
            )
        });
    };

    setRestaurants = restaurants => {
        this.setState({ restaurants });
        console.log(restaurants);
    };

    clearRestaurants = () => {
        this.setState({ restaurants: [] });
    };

    setNextPage = nextPage => {
        this.setState({ nextPage });
        console.log(nextPage);
    };

    clearNextPage = () => {
        this.setState({ nextPage: "" });
    };

    setUsers = users => {
        this.setState({ users });
    };

    clearUser = () => {
        this.setState({ users: null });
    };

    updateUser = newUser => {
        this.setState({
            users: this.state.users.map(user =>
                (user.user_id !== newUser.user_id) ? user : newUser
            )
        });
    };

    render() {
        const value = {
            restaurants: this.state.restaurants,
            groups: this.state.groups,
            error: this.state.error,
            nextPage: this.state.nextPage,
            users: this.state.users,
            setError: this.setError,
            clearError: this.clearError,
            setGroup: this.setGroup,
            clearGroup: this.clearGroup,
            addGroup: this.addGroup,
            deleteGroup: this.deleteGroup,
            updateGroup: this.updateGroup,
            setRestaurants: this.setRestaurants,
            clearRestaurants: this.clearRestaurants,
            setNextPage: this.setNextPage,
            clearNextPage: this.clearNextPage,
            setUsers: this.setUsers,
            clearUser: this.clearUser,
            updateUser: this.updateUser
        };

        return (
            <RestaurantContext.Provider value={value}>
                {this.props.children}
            </RestaurantContext.Provider>
        );
    };
};