import axios from 'axios';

export function getPokemons(){
    return async function (dispatch){
        let pokemon = await axios.get('http://localhost:3001/pokemons')
        dispatch({
            type: "GET_POKEMONS",
            payload: pokemon.data
        })
    }
}

// export function getTypes(){
//     return async function (dispatch){

//     }
// }