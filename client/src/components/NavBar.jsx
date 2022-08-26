import React from 'react'
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <div>
      <ul>
        <Link to= "/home"><li>Home</li></Link>
        <Link to ='/pokemons'><li>Create</li></Link>
        <Link to="/"><li>Landing</li></Link>
        
      </ul>
    </div>
  )
}
