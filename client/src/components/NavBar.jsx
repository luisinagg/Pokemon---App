import React from 'react'
import { Link } from 'react-router-dom';
import styles from './css/nav.module.css';



export default function NavBar() {
  return (
    <div className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
        <Link to= "/home"><button className={styles.button}>Home</button></Link>
        <Link to ='/pokemons'><button className={styles.button}>Create</button></Link>
        <Link to="/"><button className={styles.button}>Landing</button></Link>
        </li>
      </ul>
    </div>
  )
}
