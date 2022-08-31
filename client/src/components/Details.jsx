import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate, useParams } from 'react-router-dom';
import { cleanCache, deletePokeBd, getPokemons, getPokemonsId } from '../redux/actions';
import NavBar from './NavBar';
import styles from './css/details.module.css'
import Loading from './Loading';


export default function Details() {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(()=>{
    dispatch(getPokemonsId(id))
    return function(){
      dispatch(cleanCache())
    }
  },[dispatch,id])
   
  function handleDelete(e){
    dispatch(deletePokeBd(poke.id))
    dispatch(getPokemons())
    navigate('/home')
  }

  const poke = useSelector((state)=>state.detail)
   
  let typesmap =(poke.type?.map(cur=>cur))?.join(", ")
  
  return !poke.img? <Loading/>:(
    
    <div className={styles.gral}>
      <div >
      <NavBar/>
      </div>
      <div className={styles.buttonDelete}>
        { isNaN(poke.id) && <button onClick={(e)=>handleDelete(e)}>❌</button> }
      </div>
      <div className={styles.imageD}>
        <div className={styles.detailsCard}>
        
      <div >
        <img className={styles.divImg} src={poke.img} alt='pokeimg'/>
      </div>
        <div className={styles.text}>
        <h2>{poke.name}</h2>
      </div>
       <div className={styles.text}>
        <span>Hp: </span>
        <span>{poke.hp}</span>
      </div>
      <div className={styles.text}>
        <span>Speed: </span>
        <span>{poke.speed}</span>
      </div>
      <div className={styles.text}>
        <span>Defense: </span>
        <span>{poke.defense}</span>
      </div>
      <div className={styles.text}>
        <span>Attack: </span>
        <span>{poke.attack}</span>
      </div>
      <div className={styles.text}>
        <span>Height: </span>
        <span>{poke.height}</span>
      </div>
      <div className={styles.text}>
        <span>Weight: {poke.weight}</span>
        
      </div>
      <div className={styles.text}>
        {/* { poke.type?.map(cur=><p key={cur}>Types: {cur}</p>)} */}
        <p>Type: {typesmap} </p>
      </div>
      <br/>
      
      <div className={styles.text}>
        <span>Id: {poke.id}</span>
      </div>
     
      </div>
      </div>
      
    </div>
  )
}
