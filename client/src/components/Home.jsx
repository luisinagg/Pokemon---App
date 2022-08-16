import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../redux/actions';
import Cards from './Cards';
import "./css/Home.css"
 
export default function Home() {
  const dispatch = useDispatch();
  let allPokemons = useSelector((state)=> state.pokemons)
  //me trigo el estado de redux de pokemons
  
  //paginado
  //const [ currentPage, setCurrenPage ] = useState(1); //gardo la pag actual para q siempre inicie en 1
  //const [ pokemonsByPage, setPokemonsByPage ]= useState(12) // seteo la Q de pokemons x pag
  //const lastPokemonPage =currentPage * pokemonsByPage; //calculo el index del ultimo pokemon
  //const firstPokemonPage = lastPokemonPage - pokemonsByPage //numero con el q vamos a ubicar en el array al primer personaje (0)
  //const currentPokemons = allPokemons?.slice(firstPokemonPage, lastPokemonPage)//garre de allPokemons desde el primer pokemon hasta el ultimo calculado segun index

  useEffect(()=>{
    dispatch(getPokemons())
    //dispatch(getTypes())
  },[dispatch])
  console.log(allPokemons)

  return (

    <div>
      <div>
        <h1>HOME</h1>
      </div>
      <div className='grid'>     
        {
          allPokemons && allPokemons.map(poke =>{
            return(
              <Cards
               key={poke.id}
               name={poke.name} 
               img={poke.img}
               />
            )
          })
        }
    </div>  

    </div>
  )
}
