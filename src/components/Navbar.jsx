import React, { useState } from 'react'


export default function Navbar({ setCity }) {

    const [searchTerm, setSearchTerm] = useState("")


    function handleChange(e) {
        setSearchTerm(e.target.value)
    }

    function runSearch() {
        setCity(searchTerm)
    }


    return (
        <>
            <input onChange={handleChange} />
            <button onClick={runSearch}>Search</button>
        </>
    )
}