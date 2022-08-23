import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getPokemonsId } from '../redux/actions';
import NavBar from './NavBar';


export default function Details() {

  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(()=>{
    dispatch(getPokemonsId(id))
  },[dispatch,id])

  const poke = useSelector((state)=>state.detail)
   console.log(poke)
  return (
    
    <div>
      <div>
      <NavBar/>
      </div>
      <div>
        <h1>{poke.name}</h1>
      </div>
      <div>
        <img src={poke.img} alt='image'/>
      </div>

      <div>
        <span>N:</span>
        <span>{poke.id}</span>
      </div>
      <div>
        <span>HP:</span>
        <span>{poke.hp}</span>
      </div>
      <div>
        <span>Speed:</span>
        <span>{poke.speed}</span>
      </div>
      <div>
        <span>Defense:</span>
        <span>{poke.defense}</span>
      </div>
      <div>
        <span>Attack:</span>
        <span>{poke.attack}</span>
      </div>
      <div>
        <span>Height:</span>
        <span>{poke.height}</span>
      </div>
      <div>
        <span>Weight:</span>
        <span>{poke.weight}</span>
      </div>
      <div>
        <span>Type:</span>
        { poke.type?.map(cur=><p>{cur}</p>)}
      </div>
      <Link to='/home'
      />
    </div>
  )
}
