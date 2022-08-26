import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  orderAttack, orderAZ, orderByExistent, orderByTypes } from '../redux/actions'

export default function Orders({setCurrenPage, setOrder}) {
    let dispatch = useDispatch()
    const types = useSelector(store => store.types)
    

    function handleFilterTypes(e){
        e.preventDefault(e)
        dispatch(orderByTypes(e.target.value));
        setCurrenPage(1)    
    }
    function handleOrdeAz(e){
        dispatch(orderAZ(e.target.value))
    }
    function handleAttack(e){
        dispatch(orderAttack(e.target.value))
    }
    function handleExistent(e){
        dispatch(orderByExistent(e.target.value))

    }
    return(
        <div>
            <div>
                <label>Order by Attack</label>
                <select onChange={e => handleAttack(e)}>
                    <option value="default">Default</option>
                    <option value="Asc">Ascendent</option>
                    <option value="Desc">Descendent</option>
                </select>
            </div>
            <div>
                <label>Types</label>
                <select onChange={e =>handleFilterTypes(e)}>
                    {/* <option value = 'filterTypes' disabled= "disabled"></option> */}
                    <option value='All'>All</option>
                    { types && types.map ((t)=>(
                        <option key={t} value={t}>{t}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Order by Name</label>
                <select onChange={e => handleOrdeAz(e)}>
                    <option value="default">Default</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
            </div>
        <div>
            <label>Existent or Created</label>
            <select onChange={e => handleExistent(e)}>
                <option value="default">Default</option>
                <option value="created">Created</option>
                <option value="existent">Existent</option>
            </select>
        </div>

        </div>
    )

  
}
