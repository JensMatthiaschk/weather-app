
import { useState, useEffect } from 'react';

export const AppContext = createContext();

export const ContextProvider = (props) => {

    const [currentWeather, setCurrentWeather] = useState([])
    const [lon, setLon] = useState()
    const [lat, setLat] = useState()
    const [city, setCity] = useState("London")
    const [cityResponse, setCityResponse] = useState([])

    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=9&appid=${import.meta.env.VITE_OPEN_WEATHER_MAP}`)
            .then(res => res.json())
            .then(res => setCityResponse(res))
            .catch(e => console.log(e))
    }, [city])

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_OPEN_WEATHER_MAP}`)
            .then(res => res.json())
            .then(res => {
                console.log("received weather data", res)
                setCurrentWeather(res)
            })
            .catch(e => console.log(e))
    }, [lon, lat])


