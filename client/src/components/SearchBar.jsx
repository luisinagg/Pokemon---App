import React, { useState } from 'react'
import { submitSearch } from '../redux/actions';
import { useDispatch } from 'react-redux';
import styles from './css/searchBar.module.css'

export default function SearchBar({setCurrentPage}) {
    console.log(setCurrentPage)
    let [ search, setSearch] = useState("");
    const dispatch = useDispatch()

    function handleSearch(e){
        setSearch(e.target.value)
    }

    function handleSubmitSearch(e){
        e.preventDefault()
        dispatch(submitSearch(search))
        setCurrentPage(1)
    }
  return (
    <div className={styles.divInput}>
        <form  onSubmit={e => handleSubmitSearch(e)}>
            <input className={styles.input} type="text" placeholder='Search...🔍' onChange={e => handleSearch(e)} />
        </form>
    </div>
  )
}
