import React from 'react'


export default function CardsTypes({typesId, typesLoaded, setInput, input}) {
    const nameTypes =  typesLoaded[typesId]

    function handleDeletle(e){
        setInput({
            ...input,
            types: input.types.filter(cur =>cur !== typesId )
        })
    }
      
  return (

      <div>
        <div>
            <button onClick={e => handleDeletle(e)}>❌</button>
        </div>
        <div>
            <span>{nameTypes}</span>
        </div>
            
    </div>
  )
}
