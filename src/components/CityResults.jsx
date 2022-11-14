import React from 'react'


export default function CityResults({ cityResponse }) {

    return (


        < >
            {cityResponse.map((e) =>
                <div>
                    <h1>City: {e.name}</h1>
                    <h3>Country: {e.country}</h3>
                    <h3>State: {e.state}</h3>
                </div>
            )}
        </ >

    )
}