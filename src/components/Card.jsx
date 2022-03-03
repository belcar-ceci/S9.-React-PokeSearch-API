import React from 'react'
import ShowPokemon from '../hooks/ShowPokemon';
import Searching from '../hooks/Searching';
import Search from './Search';
import '../assets/style/card.css';


const Card = (key) => {
    const [pokemon, setPokemon] = ShowPokemon({ key: key })
  const { handleInput, handleKeyPress, search } = Searching ({ setPokemon })

  if (pokemon.data === undefined) {
    return null
  }

  const { name, stats, weight } = pokemon.data
  return (
    <>
      <Search handleInput={handleInput} handleKeyPress={handleKeyPress} search={search} />
      <div className='containerCard'>

        <div className='seccionCard'>
          <div className='cardHome'>
            <img
              src={pokemon.sprite}
              alt={`Imagen: ${name}`}
              className='imgPokemon'
            />
          </div>
          <h1 className='namePokemon'>
            {' '}
            {name.toUpperCase()}{' '}
          </h1>
          <h1 className='titleCharacters'>Characteristics</h1>
          
          <section className='sectionCharacters'> 
            <ul className='gridCharacters'>
              {stats.map((object) => {
                return (
                  <li key={object.stat.name} className='gridColumn'>
                    <span className='nameSpan'>
                      {object.stat.name.toUpperCase()}
                    </span>
                    <span className='textStart'>{object.base_stat}</span>
                  </li>
                )
              })}
            </ul>
          </section>

          <div className='gridWeight'>
            <span className='textWeight'>WEIGHT:{weight}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card