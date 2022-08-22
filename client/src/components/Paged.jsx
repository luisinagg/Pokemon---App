import React from 'react'
import styled from 'styled-components';

//Styled-components

const Ul = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Li = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    font-size: 20px;
    cursor: pointer;
    width: 30px;
    height: 30px;
`;

const LiSelected = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    font-size: 20px;
    cursor: pointer;
    width: 20px;
    height: 30px;
    color: blue;
    border: 2px #f07b3f solid;
    border-top: none;
    border-left: none;
    border-right: none;
`;
//------------------------------------------------------------------

export default function Paged({pokemons,paged, pokemonsPerPage,currentPage}) {
    
    const pageNumber = [];

    //Este math.ceil me da 4 porque hace 40/12
    //Me da la cantidad de paginas que necesito
    //y en numbersOfPages se pushea 1 - 2 - 3 - 4
    for(let i =0 ; i <= Math.floor(pokemons/pokemonsPerPage);i++){
        pageNumber.push(i+1);
    }
   
    return(
        <nav>
            <Ul>
                {
                pageNumber && pageNumber.map(n=> {
                if( n === currentPage){
                    return(
                        <LiSelected key= {paged+Math.random()*13256}>
                            {/* aca arriba le puse paged para solucionar el error del key para la li child */}   
                            <a key={paged+Math.random()*13256} onClick={()=> paged(n)}>{n}</a>
                        </LiSelected>
                    )
                } else{
                    return(
                        <Li key= {paged+Math.random()*13256}>
                            <a key= {paged+Math.random()*1325} onClick={()=> paged (n)}>{n}</a>
                        </Li>
                    )
                }
                
            })
          }
       </Ul>
     </nav>
    )
}