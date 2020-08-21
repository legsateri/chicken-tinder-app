////////////////////////////////////////////////////////////////////////////////
import TokenService from "./TokenService";
////////////////////////////////////////////////////////////////////////////////
import config from "../config";
////////////////////////////////////////////////////////////////////////////////

// FIXME: Take a look at the way I'm handling API Calls

const AuthApiService = {
    postLogin(credentials) {
        return fetch(`${config.API_ENDPOINT}/auth/login`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(credentials),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            );
    },

    postUser(user) {
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            );
    },

    updateUser(newUser, user_id) {
        return fetch(`${config.API_ENDPOINT}/users/${user_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "authorization": `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newUser),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                };
            });
    },
};

export default AuthApiService;

