import { useEffect, useState } from 'react'
import { Services } from '../service/Services'

export default function ShowPokemon ({ key, initialValue = '', id = null }) {
  const [pokemon, setPokemon] = useState(() => {
    try {
      /* Obtener el valor del localstorage o agregar el initialValue */
      const infoPokemon = window.sessionStorage.getItem(key)
      return JSON.parse(infoPokemon) || initialValue
    } catch (err) {
      console.error(err)
    }
  })

  const pokemonId = id || Math.floor(Math.random() * 100)
  useEffect(
    () => {
      if (pokemon === '') {
        Services(pokemonId)
          .then(
            data => {
              setPokemon(data)
            }
          )
      }
    }, [pokemon, pokemonId]
  )

  window.sessionStorage.setItem(key, JSON.stringify(pokemon))
  return [pokemon, setPokemon]
}