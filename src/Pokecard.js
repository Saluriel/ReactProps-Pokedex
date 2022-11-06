import React from "react"
import './Pokecard.css'


const Pokecard = ({ name, id, type, exp }) => {
    let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    return (
        <div className='Pokecard'>
            <div className='Pokecard-name'>{name}</div>
            <img className='Pokecard-img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            <div className='Pokecard-type'>Type: {type}</div>
            <div className='Pokecard-exp'>EXP: {exp}</div>
        </div >
    )
}

export default Pokecard