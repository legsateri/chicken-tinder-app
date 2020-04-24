////////////////////////////////////////////////////////////////////////////////
import config from '../config';
////////////////////////////////////////////////////////////////////////////////

const RestaurantsApiService = {
    getRestaurants() {
        const url = `https://cors-anywhere.herokuapp.com/${config.RESTAURANTS_ENDPOINT}/json?query=restaurants&key=${config.RESTAURANTS_KEY}`;
        const options = {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }

        return fetch(url, options)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(res => {
                if (!res.data) {
                    throw new Error("Something went wrong, please try again later.")
                }
                return res.data
            })
    }
}

export default RestaurantsApiService;