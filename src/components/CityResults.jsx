import React from 'react'
import { Link } from 'react-router-dom'


export default function CityResults({ cityResponse }) {
    // const cityResults = { cityResponse }

    console.log("Weather at Cityresults", cityResponse)
    return (


        < >
            {cityResponse.map((e) =>
                <Link to={`/${e.name}/${e.lat}`}>
                    <div>
                        <h1>City: {e.name}</h1>
                        <h3>Country: {e.country}</h3>
                        <h3>State: {e.state}</h3>
                    </div>
                </Link>
            )}
        </ >

    )
}