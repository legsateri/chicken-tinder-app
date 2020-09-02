////////////////////////////////////////////////////////////////////////////////
import TokenService from "./TokenService";
////////////////////////////////////////////////////////////////////////////////
import config from "../config";
////////////////////////////////////////////////////////////////////////////////

const GroupApiService = {
    postGroup(group) {
        return fetch(`${config.API_ENDPOINT}/groups`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(group)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            );
    },

    deleteGroup(group_id, callback) {
        return fetch(`${config.API_ENDPOINT}/groups/${group_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "authorization": `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(data => {
                callback(group_id)
            })
            .then(() => {
                window.location.reload(false)
            })
            .catch(error => {
                console.error(error)
            });
    },

    updateGroup(newGroup, group_id) {
        return fetch(`${config.API_ENDPOINT}/groups/${group_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "authorization": `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newGroup),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                };
            });
    },

    getGroup(group_id) {
        return fetch(`${config.API_ENDPOINT}/groups/${group_id}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "authorization": `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            );
    }
};

export default GroupApiService;