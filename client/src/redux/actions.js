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

export function getTypes(){
    return async function (dispatch){
        let types = await axios.get('http://localhost:3001/types')
        dispatch({
            type: "GET_TYPES",
            payload: types.data
        })

    }
}

export function orderByTypes(estado){
    return{
        type: "ORDER_BY_TYPES",
        payload: estado
    }
}

export function orderAZ(order){
    return{
        type: "ORDER_A_Z",
        payload: order
    }
}
export function orderAttack(order){
    return{
        type: "ORDER_ATTACK",
        payload:order
    }
}

export  function submitSearch(input){
    return async function (dispatch){
        let pokeName = (await axios.get(`http://localhost:3001/pokemons?name=${input}`)).data
          return dispatch({
            type: "SUBMIT_SEARCH",
            payload: pokeName
        }) 

    }
}

export function createPokemon(input){
    return async function(dispatch){
       let newPoke = (await axios.post("http://localhost:3001/pokemons",input)).data;
        return dispatch({
            type: "CREATE_POKEMON",
            payload: newPoke
        })
    }
}
export function orderByExistent(input){
    return{
        type: "ORDER_BY_EXISTENT",
        payload: input
    }
}

export function getPokemonsId(id){
    return async function(dispatch){
        let pokeId = (await axios.get(`http://localhost:3001/pokemons/${id}`)).data;
        console.log(pokeId)
        return dispatch({
            type: "GET_POKEMON_ID",
            payload: pokeId
        })
    }
}