import React from "react"
import pokemon from './Pokemon'
import Pokecard from './Pokecard'
import './Pokedex.css'



const Pokedex = ({ pokemon }) => {
    return (
        <div className="Pokedex">
            <h1 className="Pokedex-h1">Pokedex</h1>
            <div className="Pokedex-card">
                {pokemon.map(p => (
                    <Pokecard name={p.name} id={p.id} type={p.type} exp={p.base_experience} />
                ))}
            </div>
        </div>)

}

export default Pokedex