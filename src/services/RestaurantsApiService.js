////////////////////////////////////////////////////////////////////////////////
import config from '../config';
////////////////////////////////////////////////////////////////////////////////
const query = "restaurants";

const RestaurantsApiService = {
    getRestaurants(query) {
        return fetch(`${config.RESTAURANTS_ENDPOINT}/json?query=${query}&key=${config.RESTAURANTS_KEY}`, {})
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