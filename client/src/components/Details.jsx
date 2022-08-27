import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getPokemonsId } from '../redux/actions';
import NavBar from './NavBar';
import styles from './css/details.module.css'


export default function Details() {

  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(()=>{
    dispatch(getPokemonsId(id))
  },[dispatch,id])

  const poke = useSelector((state)=>state.detail)
   console.log(poke)
  return (
    
    <div className={styles.gral}>
      <div >
      <NavBar/>
      </div>
      <div className={styles.imageD}>
        <div className={styles.detailsCard}>
        <div className={styles.text}>
        <h1>{poke.name}</h1>
      </div>
      <div >
        <img className={styles.divImg} src={poke.img} alt='pokeimg'/>
      </div>
      <div className={styles.text}>
        <span>N:</span>
        <span>{poke.id}</span>
      </div>
      <div className={styles.text}>
        <span>HP:</span>
        <span>{poke.hp}</span>
      </div>
      <div className={styles.text}>
        <span>Speed:</span>
        <span>{poke.speed}</span>
      </div>
      <div className={styles.text}>
        <span>Defense:</span>
        <span>{poke.defense}</span>
      </div>
      <div className={styles.text}>
        <span>Attack:</span>
        <span>{poke.attack}</span>
      </div>
      <div className={styles.text}>
        <span>Height:</span>
        <span>{poke.height}</span>
      </div>
      <div className={styles.text}>
        <span>Weight:</span>
        <span>{poke.weight}</span>
      </div>
      <div className={styles.text}>
        <span>Type:</span>
        { poke.type?.map(cur=><p key={cur}>{cur}</p>)}
      </div>
     
      </div>
      </div>
    </div>
  )
}
