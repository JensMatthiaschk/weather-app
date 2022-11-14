import React from 'react'
import { useParams } from 'react-router-dom'

export default function Citydetails({ cityResponse }) {
    const cityParam = useParams()
    console.log("cityResponse", cityResponse)
    console.log("cityParam", cityParam)

    return (
        <div>
            <h1>City: {cityResponse.name}</h1>
            <h3>Country: {e.country}</h3>
            <h3>State: {e.state}</h3>
        </div>
    )
}