////////////////////////////////////////////////////////////////////////////////
import config from '../config';
////////////////////////////////////////////////////////////////////////////////

const RestaurantsApiService = {
    getRestaurants(query) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/${config.RESTAURANTS_ENDPOINT}/json?query=restaurants&key=${config.RESTAURANTS_KEY}`, {})
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(res => {
                if (!res.data) {
                    throw new Error("No Results Found")
                }
                return res.data
            })
    }
}

export default RestaurantsApiService;