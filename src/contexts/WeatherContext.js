////////////////////////////////////////////////////////////////////////////////
import React from "react";
////////////////////////////////////////////////////////////////////////////////

const WeatherContext = React.createContext({
    weather: [],
    error: null,
});

export default WeatherContext;