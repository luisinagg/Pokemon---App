import React from 'react'
import styles from './css/cards.module.css'



export default function Cards({img,name,type}) {
  return (

<div className={styles.card}>
<div ><img className={styles.image} src={img}/></div>
<div className="cardInfo">
    <p className={styles.title}>{name}</p>
    <p className={styles.types}>{type && type.join(", ")}</p>
    <button className={styles.cardBut}>Read More</button>
    </div>
  </div>


  )
}

  
   
    
    
 