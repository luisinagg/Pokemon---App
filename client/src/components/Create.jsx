import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { createPokemon, flagCreate, getPokemons, getTypes } from '../redux/actions'
import NavBar from './NavBar';
import CardsTypes from './CardsTypes';
import { useNavigate } from 'react-router-dom';
import styles from './css/createForm.module.css'



export default function Create() {
  const dispatch= useDispatch()
  
  const [active, setActive]= useState(true)
  //creo este et para desactivar boton del form
  useEffect(() =>{
    dispatch(getTypes())
    dispatch(getPokemons())
    dispatch(flagCreate(true))
    return function(){
      dispatch(flagCreate(false))
    }
  },[dispatch])
  
  const [input, setInput] = useState({
    name: "",
    img: "",
    attack: "",
    defense:"",
    weight:"",
    height:"",
    hp:"",
    speed:"",
    type:[],
  })
  
   const namePoke= useSelector((state)=>state.allPokemons)
   console.log(namePoke)
  function validate({name,hp,attack,defense,speed,weight,height,type}) {
    const errors = {};
    //validate name
    let exist = namePoke.filter(cur => cur.name === name)
    if(exist.length){
      errors.name = <b>Name has already exist❌</b>
    }
    if(!name){
      errors.name= <b>Enter name❌</b>
    }else if(!/^[a-zA-Z\s]*$/.test(name)){
      errors.name = <b>Characters not allowed❌</b>
    }
    //validate hp
    if (!hp || hp < 10 || hp > 100) {
      if (!hp) errors.hp = <b>Enter hp❌</b>
      else if (hp <= 10) errors.hp = <b>Try with 10 attack min</b>
      else if (hp >= 100) errors.hp = <b>Try with 100 attack max</b>
    } 
    //validate attack
    if (!attack || attack < 10 || attack > 100) {
      if (!attack) errors.attack = <b>Enter attack❌</b>
      else if (attack <= 10) errors.attack = <b>Try with 10 attack min</b>
      else if (attack >= 100) errors.attack = <b>Try with 100 attack max</b>
    }
    //validate defense
    if (!defense || defense < 10 || defense > 100) {
      if (!defense) errors.defense = <b>Enter defense❌</b>
      else if (defense <= 10) errors.defense = <b>Try with 10 defense min</b>
      else if (defense >= 100) errors.defense = <b>Try with 100 defense max</b>
    }
    //validate speed
    if (!speed || speed < 10 || speed > 100) {
      if (!speed) errors.speed = <b>Enter speed❌</b>
      else if (speed <= 10) errors.speed = <b>Try with 10 speed min</b>
      else if (speed >= 100) errors.speed = <b>Try with 100 speed max</b>
    }
    //validate height
    if (!height || height < 10 || height > 100) {
      if (!height) errors.height = <b>Enter height❌</b>
      else if (height <= 10) errors.height = <b>Try with 10 height min</b>
      else if (height >= 100) errors.height = <b>Try with 100 height max</b>
    }
    //validate weight
    if (!weight || weight < 10 || weight > 100) {
      if (!weight) errors.weight = <b>Enter weight❌</b>
      else if (weight <= 10) errors.weight = <b>Try with 10 weight min</b>
      else if (weight >= 100) errors.weight = <b>Try with 100 weight max</b>
    }
    //validate types
    if(!type.length){
      errors.type = <b>Choose a pokemon type❌</b>
    } else if (type.length > 2){
      <b>Can not choose more than two types</b>
    }
    if(!errors.name && !errors.attack && !errors.defense && !errors.type && !errors.hp && !errors.weight && !errors.height && !errors.speed && !errors.img){
      setActive(false)
    } else {
      setActive(true)
    }
    
    return errors
    
      
    }
    
    const [errors, setErrors] =useState({})
  const typesLoaded = useSelector((state)=>state.types)

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

    const navigate = useNavigate();

  function handleTypes(e){
    if (input.type.length >= 2) {
      alert('Limit 2 types')
    }else {
     setInput({
      ...input,
      type:[...input.type, e.target.value]
    })
    setErrors(validate({
      ...input,
      type:[...input.type, e.target.value]
    }))
  }
}

  function handleSubmit(e){
    e.preventDefault();
   dispatch(createPokemon(input))
   setInput({
    name: "",
    img: "",
    attack: "",
    defense:"",
    weight:"",
    height:"",
    hp:"",
    speed:"",
    type:[],
   })
   alert("New Pokemon created!");
   dispatch(getPokemons())
   navigate("/home")
  }
  
  return (
    
    <div className= {styles.back}>
      <div><NavBar/></div>
        
        <div className={styles.formCard}>
      <form onSubmit={e=> handleSubmit(e)}>
        <div>        
        <input className={styles.input} type={"text"} placeholder={"Name"} name={"name"} value={input.name} 
        onChange ={e => handleInput(e)} required= ""
        />
        {errors && (<p>{errors.name}</p>)}
        </div>
        <div>
        <input className={styles.input} type={"number"} placeholder={"Speed"} name={"speed"} value={input.speed}
        onChange ={e => handleInput(e)}
        />
        {errors && (<p>{errors.speed}</p>)}
        </div>
       <div>
        <input className={styles.input} type={"number"} placeholder={"Attack"} name={"attack"} value={input.attack}
        onChange ={e => handleInput(e)}
        />
        {errors && (<p>{errors.attack}</p>)}
        </div>
        <div>
        <input className={styles.input} type={"number"} placeholder={"Defense"} name={"defense"} value={input.defense}
        onChange ={e => handleInput(e)}
        />
        {errors && (<p>{errors.defense}</p>)}
        </div>
        <div>
        <input className={styles.input} type={"number"} placeholder={"Weight"} name={"weight"} value={input.weight}
        onChange ={e => handleInput(e)}
        />
        {errors && (<p>{errors.weight}</p>)}
        </div>
        <div>
        <input className={styles.input} type={"number"} placeholder={"Height"} name={"height"} value={input.height}
        onChange ={e => handleInput(e)}
        />
        {errors && (<p>{errors.height}</p>)}
        </div>
        <div>
        <input className={styles.input} type={"number"} placeholder={"Hp"} name={"hp"} value={input.hp}
       onChange ={e => handleInput(e)}
       />
       {errors && (<p>{errors.hp}</p>)}
        </div>
        <div>
        <input className={styles.input} type={"text"} placeholder={"Image"} name={"img"} value={input.img}
        onChange ={e => handleInput(e)}
        />
        </div>
        <br/>
        <div>
          <select  className={styles.input} defaultValue={"Types"} onChange={e => handleTypes(e)}>
            {
              typesLoaded?.map( t =>{
                return(
                <option key={t} value={typesLoaded.indexOf(t)}>{t}</option>
                )
              })
            }
          </select>
          </div>
          <div>
            {errors && (<p>{errors.type}</p>)}
            { input.type && input.type.map((cur)=>{
              return <CardsTypes key={cur} typesId={cur} typesLoaded={typesLoaded} setInput={setInput} input={input}/>
            })}
          </div>
        <input  type={"submit"} value={"Create Pokemon!"} disabled={ active && "disabled"}
        />
        </form>
      </div>
      </div>
      
    
  )
}

