////////////////////////////////////////////////////////////////////////////////
import React, { Component } from "react";
////////////////////////////////////////////////////////////////////////////////

const RestaurantContext = React.createContext({
    restaurants: [],
    nextPage: "",
    groups: [],
    groupsOne: [],
    groupsTwo: [],
    users: [],
    currentUser: [],
    error: null,
    setRestaurants: () => { },
    clearRestaurants: () => { },
    setNextPage: () => { },
    clearNextPage: () => { },
    setGroup: () => { },
    clearGroup: () => { },
    addGroup: () => { },
    deleteGroup: () => { },
    updateGroup: () => { },
    setGroupsOne: () => { },
    clearGroupsOne: () => { },
    setGroupsTwo: () => { },
    clearGroupsTwo: () => { },
    setUsers: () => { },
    clearUser: () => { },
    updateUser: () => { },
    setCurrentUser: () => { },
    clearCurrentUser: () => { },
    setError: () => { },
    clearError: () => { }
});

export default RestaurantContext;

export class RestaurantProvider extends Component {
    state = {
        restaurants: [],
        nextPage: "",
        groups: [],
        groupsOne: [],
        groupsTwo: [],
        users: [],
        currentUser: [],
        error: null,
    };

    setRestaurants = restaurants => {
        this.setState({ restaurants });
    };

    clearRestaurants = () => {
        this.setState({ restaurants: [] });
    };

    setNextPage = nextPage => {
        this.setState({ nextPage });
    };

    clearNextPage = () => {
        this.setState({ nextPage: "" });
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

    setGroupsOne = groupsOne => {
        this.setState({ groupsOne });
        console.log(this.state.groupsOne);
    };

    clearGroupsOne = () => {
        this.setState({ groupsOne: null });
    };

    setGroupsTwo = groupsTwo => {
        this.setState({ groupsTwo });
        console.log(this.state.groupsTwo);
    };

    clearGroupsTwo = () => {
        this.setState({ groupsTwo: null });
    };

    setUsers = users => {
        this.setState({ users });
        console.log(this.state.users);
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

    setCurrentUser = currentUser => {
        this.setState({ currentUser });
        console.log(this.state.currentUser)
    };

    clearCurrentUser = () => {
        this.setState({ currentUser: null });
    };

    setError = error => {
        console.error(error);
        this.setState({ error });
    };

    clearError = () => {
        this.setState({ error: null });
    };

    render() {
        const value = {
            restaurants: this.state.restaurants,
            nextPage: this.state.nextPage,
            groups: this.state.groups,
            groupsOne: [],
            groupsTwo: [],
            users: this.state.users,
            currentUser: this.state.currentUser,
            error: this.state.error,
            setRestaurants: this.setRestaurants,
            clearRestaurants: this.clearRestaurants,
            setNextPage: this.setNextPage,
            clearNextPage: this.clearNextPage,
            setGroup: this.setGroup,
            clearGroup: this.clearGroup,
            addGroup: this.addGroup,
            deleteGroup: this.deleteGroup,
            updateGroup: this.updateGroup,
            setGroupsOne: this.setGroupsOne,
            clearGroupsOne: this.clearGroupsOne,
            setGroupsTwo: this.setGroupsTwo,
            clearGroupsTwo: this.clearGroupsTwo,
            setUsers: this.setUsers,
            clearUser: this.clearUser,
            updateUser: this.updateUser,
            setCurrentUser: this.setCurrentUser,
            clearCurrentUser: this.clearCurrentUser,
            setError: this.setError,
            clearError: this.clearError,
        };

        return (
            <RestaurantContext.Provider value={value}>
                {this.props.children}
            </RestaurantContext.Provider>
        );
    };
};