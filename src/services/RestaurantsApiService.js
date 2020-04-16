////////////////////////////////////////////////////////////////////////////////
import config from './config';
////////////////////////////////////////////////////////////////////////////////

const RestaurantsApiService = {
    getRestaurants() {
        return fetch( `${config.RESTAURANTS_ENDPOINT}/json?input=restaurants&inputtype=textquery&locationbias=ipbias&key=${config.RESTAURANTS_KEY}`)
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(res => {
                if(!res.data) {
                    throw new Error("No Results Found")
                }
                return res.data
            })
    }
}

export default RestaurantsApiService;