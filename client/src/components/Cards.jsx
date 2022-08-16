import React from 'react'
import "./css/Cards.css"


export default function Cards({img,name,type}) {
  return (

    <div class="card">
    <div class="card-image"><img className='card-imgpoke' src={img}/></div>
    <div class="card-description">
    <p class="text-title">{name}</p>
    <p class="text-body">{name}</p>
  </div>
</div>

    // <div className='card'>
    //   <p>{name}</p>
    //   <img src={img} alt='imagen'/>
    //   <div>
    //     {/* {type.map((t) =>(<h5>{t}</h5>))} */}
    //   </div>
    // </div>
  )
}
