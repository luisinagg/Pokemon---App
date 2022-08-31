import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  filterAttack, orderAttack, orderAZ, orderByExistent, orderByTypes } from '../redux/actions'
import styles from './css/orders.module.css'

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
        <div className={styles.divInputOr}>
            <div>
                <select className={styles.inputOr} onChange={e => handleAttack(e)}>
                    <option value="default">Order by Attack</option>
                    <option value="Asc">Ascendent</option>
                    <option value="Desc">Descendent</option>
                </select>
            </div>
            <div>
                <select className={styles.inputOr} onChange={e =>handleFilterTypes(e)}>
                    {/* <option value = 'filterTypes' disabled= "disabled"></option> */}
                    <option value='All'>All types</option>
                    { types && types.map ((t)=>(
                        <option key={t} value={t}>{t}</option>
                    ))}
                </select>
            </div>
            <div>
                <select className={styles.inputOr} onChange={e => handleOrdeAz(e)}>
                    <option value="default">Order by Name</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
            </div>
        <div>
            <select className={styles.inputOr} onChange={e => handleExistent(e)}>
                <option value="default">Existent or Created</option>
                <option value="created">Created</option>
                <option value="existent">Existent</option>
            </select>
        </div>
      </div>
    )

  
}
