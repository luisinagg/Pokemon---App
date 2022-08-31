import React from 'react'
import styles from './css/cards.module.css'
import { Link } from 'react-router-dom'



export default function Cards({img,name,type,attack, url}) {
  let nameUpper= (name[0].toUpperCase())+ name.slice(1)
  return (
    
<div className={styles.card}>
<div ><img className={styles.image} alt="poke" src={img}/></div>
<div className="cardInfo">
    <p className={styles.title}>{nameUpper}</p>
    <p className={styles.types}>{type && type.join(", ")}</p>
    <Link to={url} >
    <button className={styles.cardBut}>Read More</button>
    </Link>
    </div>
  </div>


  )
}

  
   
    
    
 