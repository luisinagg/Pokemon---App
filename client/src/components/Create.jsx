import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { createPokemon, getTypes } from '../redux/actions'
import NavBar from './NavBar'

function validate({name,hp,attack,defense,speed,weight,height,types}) {
const errors = {};
//validate name
if(!name){
  errors.name= <b>Enter name❌</b>
}else if(!/^[a-zA-Z\s]*$/.test(name)){
  errors.name = <b>"Characters not allowed❌</b>
}
//validate hp
if (!hp || hp < 10 || hp > 100) {
  if (!hp) errors.hp = <b>Enter hp❌</b>
  else if (hp <= 10) errors.hp = <b>10 hp min</b>
  else if (hp >= 100) errors.hp = <b>100 hp max</b>
} 
//validate attack
if (!attack || attack < 10 || attack > 100) {
  if (!attack) errors.attack = <b>Enter attack❌</b>
  else if (attack <= 10) errors.attack = <b>try with 10 attack min</b>
  else if (attack >= 100) errors.attack = <b>try with 100 attack max</b>
}
//validate defense
if (!defense || defense < 10 || defense > 100) {
  if (!defense) errors.defense = <b>Enter defense❌</b>
  else if (defense <= 10) errors.defense = <b>try with 10 defense min</b>
  else if (defense >= 100) errors.defense = <b>try with 100 defense max</b>
}
//validate speed
if (!speed || speed < 10 || speed > 100) {
  if (!speed) errors.speed = <b>Enter speed❌</b>
  else if (speed <= 10) errors.speed = <b>try with 10 speed min</b>
  else if (speed >= 100) errors.speed = <b>try with 100 speed max</b>
}
//validate height
if (!height || height < 10 || height > 100) {
  if (!height) errors.height = <b>Enter height❌</b>
  else if (height <= 10) errors.height = <b>try with 10 height min</b>
  else if (height >= 100) errors.height = <b>try with 100 height max</b>
}
//validate weight
 if (!weight || weight < 10 || weight > 100) {
  if (!weight) errors.weight = <b>Enter weight❌</b>
  else if (weight <= 10) errors.weight = <b>try with 10 weight min</b>
  else if (weight >= 100) errors.weight = <b>try with 100 weight max</b>
}
//validate types
if(!types.length){
  errors.types = <b>Choose a pokemon type❌</b>
} else if (types.length > 2){
  <b>Can not choose more than two types</b>
}

return errors

}

export default function Create() {
  const dispatch= useDispatch()
  
  useEffect(() =>{
    dispatch(getTypes())
  },[])
  
  const [errors, setErrors] =useState({})
  const [input, setInput] = useState({
    name: "",
    img: "",
    attack: "",
    defense:"",
    weight:"",
    height:"",
    hp:"",
    speed:"",
    types:[],
  })

  const types = useSelector((state)=>state.types)

  function handleInput(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value 
    })
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  function handleTypes(e){
    e.preventDefault()
    if (types.length === 2) {
      alert('limit 2 types')
    }else if (types.length < 2){
    setInput({
      ...input,
      types: [...types, e.target.value]
    })
  }
}

  function handleSubmit(e){
    e.preventDefault();
   dispatch(createPokemon(input))
   

  }
  
  return (
    
    <div>
      <div><NavBar/></div>
      <form onSubmit={e=> handleSubmit(e)}>
        <div>
          <label>Name</label>
          
        <input type={"text"} placeholder={"Ex:Pepi"} name={"name"} value={input.name} 
        onChange ={e => handleInput(e)}
        />
        {errors.name && (<p>{errors.name}</p>)}
        </div>
        <br/>
        <div>
          <label>Speed</label>
        <input type={"number"} placeholder={"Ex:40"} name={"speed"} value={input.speed}
        onChange ={e => handleInput(e)}
        />
        {errors.speed && (<p>{errors.speed}</p>)}
        </div>
        <br/>
        <div>
          <label>Attack</label>
        <input type={"number"} placeholder={"Ex:30"} name={"attack"} value={input.attack}
        onChange ={e => handleInput(e)}
        />
        {errors.attack && (<p>{errors.attack}</p>)}
        </div>
        <br/>
        <div>
          <label>Defense</label>
        <input type={"number"} placeholder={"Ex:15"} name={"defense"} value={input.defense}
        onChange ={e => handleInput(e)}
        />
        {errors.defense && (<p>{errors.defense}</p>)}
        </div>
        <br/>
        <div>
          <label>Weight</label>
        <input type={"number"} placeholder={"Ex:14"} name={"weight"} value={input.weight}
        onChange ={e => handleInput(e)}
        />
        {errors.weight && (<p>{errors.weight}</p>)}
        </div>
        <br/>
        <div>
          <label>Height</label>
        <input type={"number"} placeholder={"Ex:32"} name={"height"} value={input.height}
        onChange ={e => handleInput(e)}
        />
        {errors.height && (<p>{errors.height}</p>)}
        </div>
        <br/>
        <div>
          <label>Hp</label>
        <input type={"number"} placeholder={"Ex:20"} name={"hp"} value={input.hp}
       onChange ={e => handleInput(e)}
       />
       {errors.hp && (<p>{errors.hp}</p>)}
        </div>
        <br/>
        <div>
          <label>Image</label>
        <input type={"text"} placeholder={"Ex:http://myimage.png"} name={"img"} value={input.img}
        onChange ={e => handleInput(e)}
        />
        </div>
        <br/>
        <div>
          <label>Types</label>
          <select onChange={e => handleTypes(e)}>
            {
              types?.map( t =>{
                return(
                <option key={t} value={types.indexOf(t)}>{t}</option>
                )
              })
            }
          </select>
        </div>
        <br/>
        <input type={"submit"} value={"Create Pokemon!"}
        />
      </form>
      
    </div>
  )
}
