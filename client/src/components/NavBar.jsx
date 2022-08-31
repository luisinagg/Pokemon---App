import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { flagCreate, flagHome } from '../redux/actions';
import styles from './css/nav.module.css';




export default function NavBar() {

  const flagHome1 = useSelector((state)=>state.flagHome);
  const flagCreate1 = useSelector((state)=> state.flagCreate);

  
  
  return (
    <div className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
       { !flagHome1 && <Link to= "/home"><button  className={styles.button}>Home</button></Link>}
        { !flagCreate1 && <Link to ='/pokemons'><button className={styles.button}>Create</button></Link>}
        <Link to="/"><button className={styles.button}>Landing</button></Link>
        </li>
      </ul>
    </div>
  )
}
