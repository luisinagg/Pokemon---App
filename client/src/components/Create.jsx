import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { createPokemon, getTypes } from '../redux/actions'
import NavBar from './NavBar'

export default function Create() {
  const dispatch= useDispatch()
  
  useEffect(() =>{
    dispatch(getTypes())
  },[])

  const [input, setInput] = useState({
    name: "",
    img: "",
    attack: "",
    defense:"",
    weigth:"",
    heigth:"",
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
  }

  function handleTypes(e){
    setInput({
      ...input,
      types: [...input.types, e.target.value]
    })
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
        </div>
        <br/>
        <div>
          <label>Speed</label>
        <input type={"number"} placeholder={"Ex:40"} name={"speed"} value={input.speed}
        onChange ={e => handleInput(e)}
        />
        </div>
        <br/>
        <div>
          <label>Attack</label>
        <input type={"number"} placeholder={"Ex:30"} name={"attack"} value={input.attack}
        onChange ={e => handleInput(e)}
        />
        </div>
        <br/>
        <div>
          <label>Defense</label>
        <input type={"number"} placeholder={"Ex:15"} name={"defense"} value={input.defense}
        onChange ={e => handleInput(e)}
        />
        </div>
        <br/>
        <div>
          <label>Weigth</label>
        <input type={"number"} placeholder={"Ex:14"} name={"weigth"} value={input.weigth}
        onChange ={e => handleInput(e)}
        />
        </div>
        <br/>
        <div>
          <label>Heigth</label>
        <input type={"number"} placeholder={"Ex:32"} name={"heigth"} value={input.heigth}
        onChange ={e => handleInput(e)}
        />
        </div>
        <br/>
        <div>
          <label>Hp</label>
        <input type={"number"} placeholder={"Ex:20"} name={"hp"} value={input.hp}
       onChange ={e => handleInput(e)}
       />
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
        <input type={"submit"} value={"submit"}
        />
      </form>

    </div>
  )
}
