import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Layout from './Layout';
import CityResults from './components/CityResults';
import Citydetails from './components/Citydetails';
import Test from './test';


function App() {
  const [currentWeather, setCurrentWeather] = useState([])
  const [lon, setLon] = useState()
  const [lat, setLat] = useState()
  const [city, setCity] = useState("London")
  const [cityResponse, setCityResponse] = useState([{
    country: "GB",
    lat: 51.5073219,
    local_names: { el: 'Λονδίνο', sw: 'London', sd: 'لنڊن', av: 'Лондон', hu: 'London' },
    lon: -0.1276474,
    name: "London",
    state: "England"
  }])

  useEffect(() => {
    getData()
  }, [city])

  const getData = () => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=9&appid=${import.meta.env.VITE_OPEN_WEATHER_MAP}`)
      .then(res => res.json())
      .then(res => setCityResponse(res))
      .catch(e => console.log(e))
  }

  // useEffect(() => {
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_OPEN_WEATHER_MAP}`)
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log("received weather data", res)
  //       setCurrentWeather(res)
  //     })
  //     .catch(e => console.log(e))
  // }, [lon, lat])



  // console.log("cityResponse", cityResponse)

  return (
    <div className="App">
      {/* {cityResponse.map((e) =>
        // const idLink = `/:${e.name}`;
        <Link to={`/${e.country}/${e.state}/${e.name}`}>
          <div>
            <h1>City: {e.name}</h1>
            <h3>Country: {e.country}</h3>
            <h3>State: {e.state}</h3>
          </div>
        </Link>

      )
      } */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <CityResults cityResponse={cityResponse} />}
          ></Route>
          <Route path="/" element={<Layout setCity={{ setCity, cityResponse }} />}>
            <Route path="/:city/:lat" element={<Citydetails cityResponse={cityResponse} />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Navbar setCity={setCity} /> */}
    </div >
  )
}

export default App
