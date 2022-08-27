import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { createPokemon, getTypes } from '../redux/actions'
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
    types:[],
  })
  
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
    if(!errors.name && !errors.attack && !errors.defense && !errors.types && !errors.hp && !errors.weight && !errors.height && !errors.speed && !errors.img){
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
    if (input.types.length >= 2) {
      alert('Limit 2 types')
    }else {
     setInput({
      ...input,
      types:[...input.types, e.target.value]
    })
    setErrors(validate({
      ...input,
      types:[...input.types, e.target.value]
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
    types:[],
   })
   alert("New Pokemon created!");
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
            {errors && (<p>{errors.types}</p>)}
            { input.types && input.types.map((cur)=>{
              return <CardsTypes key={cur} typesId={cur}  typesLoaded={typesLoaded} setInput={setInput} input={input}/>
            })}
          </div>
        <input  type={"submit"} value={"Create Pokemon!"} disabled={ active && "disabled"}
        />
        </form>
      </div>
      </div>
      
    
  )
}

