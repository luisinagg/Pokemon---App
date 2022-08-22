import React from 'react'
import "./css/Cards.css"


export default function Cards({img,name,type}) {
  return (

    <div className="card">
    <div className="card-image"><img className='card-imgpoke' src={img}/></div>
    <div className="card-description">
    <p className="text-title">{name}</p>
    <p className="text-body">{name}</p>
    <div>
    <p>{type && type.join(", ")}</p>
    </div>
  </div>
</div>

  )
}
