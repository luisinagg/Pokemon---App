import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { flagHome, getPokemons, getTypes } from '../redux/actions';
import Cards from './Cards';
import NavBar from './NavBar';
import Orders from './Orders';
import Paged from './Paged';
import SearchBar from './SearchBar';
import styles from './css/home.module.css'
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

 
export default function Home(props) {
  const dispatch = useDispatch();
  //me trigo el estado de redux de pokemons
  let pokemons = useSelector((state)=> state.pokemons)
  let allpoke = useSelector((state)=> state.allPokemons)
  
  //me trigo loading del estado global
  const loading = useSelector((state)=>state.loading)
  
  

  //paginado
  //guardo la pag actual para q siempre inicie en 1
  const [ currentPage, setCurrentPage ] = useState(1);
  // seteo la Q de pokemons x pag
  const [ pokemonsPerPage, setPokemonsPerPage ]= useState(12); 
  //calculo el index del ultimo pokemon
  const indexOfLastPoke =currentPage * pokemonsPerPage;
  //numero con el q vamos a ubicar en el array al primer personaje(0) 
  const indexOfFirstPoke = indexOfLastPoke - pokemonsPerPage 
  //agarre de allPokemons desde el primer pokemon hasta el ultimo calculado segun index
  const currentPokemons = pokemons.slice(indexOfFirstPoke, indexOfLastPoke)
  
  const paged = (pageNumber) => {
    setCurrentPage(pageNumber);
}
  useEffect(()=>{
    if(!pokemons.length){
      dispatch(getPokemons())
    }
    dispatch(getTypes())
    dispatch(flagHome(true))
    return function(){
      dispatch(flagHome(false))
    }
  },[dispatch, allpoke.length])


  

  return loading? <Loading/>: (
     <div className={styles.home}>
      <div><NavBar/></div>
      <div><SearchBar setCurrentPage={setCurrentPage}/> </div>
      <div><Orders
      setCurrenPage={setCurrentPage}
      />
      </div>
     
      <div className={styles.grid}>     
        {
         currentPokemons.map(poke =>{
            return(
               <Cards
              key={poke.id}
              name={poke.name} 
              img={poke.img}
              type ={poke.type}
              url={`/detail/${poke.id}`}
              />
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
