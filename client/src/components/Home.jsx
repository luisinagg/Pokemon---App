import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getPokemons, getTypes } from '../redux/actions';
import Cards from './Cards';
import "./css/Home.css"
import NavBar from './NavBar';
import Orders from './Orders';
import Paged from './Paged';
import SearchBar from './SearchBar';
 
export default function Home(props) {
  const dispatch = useDispatch();
  let pokemons = useSelector((state)=> state.pokemons)
  //me trigo el estado de redux de pokemons
  const [order, setOrder] = useState('')
  //paginado
  const [ currentPage, setCurrentPage ] = useState(1); //gardo la pag actual para q siempre inicie en 1
  const [ pokemonsPerPage, setPokemonsPerPage ]= useState(12) // seteo la Q de pokemons x pag
  const indexOfLastPoke =currentPage * pokemonsPerPage; //calculo el index del ultimo pokemon
  const indexOfFirstPoke = indexOfLastPoke - pokemonsPerPage //numero con el q vamos a ubicar en el array al primer personaje (0)
  const currentPokemons = pokemons.slice(indexOfFirstPoke, indexOfLastPoke)//garre de allPokemons desde el primer pokemon hasta el ultimo calculado segun index
  
  const paged = (pageNumber) => {
    setCurrentPage(pageNumber);
}
  useEffect(()=>{
    dispatch(getPokemons())
    dispatch(getTypes())
  },[dispatch])
  

  return (

    <div>
      <div><NavBar/></div>
      <div><SearchBar/></div>
      <div><Orders
      setCurrenPage={setCurrentPage}
      /></div>
      <div className='grid'>     
        {
        
          currentPokemons.map(poke =>{
            return(
              <Link to={`/detail/${poke.id}`}>
              <Cards
              key={poke.id}
              name={poke.name} 
              img={poke.img}
              type ={poke.type}
              />
              </Link>
            )
         })
        }
              <div>
                <Paged
                pokemonsPerPage={pokemonsPerPage}
                pokemons= {pokemons.length}
                paged = {paged}
                currentPage={currentPage}
                />
              </div>
    </div>  

    </div>
  )
}
