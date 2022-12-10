import React, { useState, useEffect } from "react";

export default function PokemonList(){

    const [ listOfPokemon, setListOfPokemon ] = useState(["Bulbasaur", "Ivysaur", "Venusaur"])
    
    //This one is the important one since it connects to database
    async function loadData(){
        //const response = await fetch("http://localhost:8000/bloggers")
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
        const data = await response.json()
        console.log(data)
        setListOfPokemon(data.results)
    }

    useEffect(() => {
        loadData()
    }, [] )
    
    return (
    <>
        <h1>Danger!Danger! this is not a drill. this is not a drill</h1>
        <ul>
            {listOfPokemon.map((pokemon, idx) => {
                return <li key={idx}><a href={pokemon.url}>{pokemon.name}</a></li>
                })}
        </ul>
    </>
    )
}