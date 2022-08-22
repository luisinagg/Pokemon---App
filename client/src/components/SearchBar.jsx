import React, { useState } from 'react'
import { submitSearch } from '../redux/actions';
import { useDispatch } from 'react-redux';

export default function SearchBar() {
    let [ search, setSearch] = useState("");
    const dispatch = useDispatch()

    function handleSearch(e){
        setSearch(e.target.value)
    }

    function handleSubmitSearch(e){
        e.preventDefault()
        dispatch (submitSearch(search))
    }
  return (
    <div>
        <form onSubmit={e => handleSubmitSearch(e)}>
            <label>Search:</label>
            <input type="text" placeholder='Ex:charmander' onChange={e => handleSearch(e)} />
            <input type="submit" value={"Send 🔍"}/>
            

        </form>
    </div>
  )
}
