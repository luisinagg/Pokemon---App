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

export function submitSearch(input){
    return async function (dispatch){
        try {
            let pokeName = (await axios.get(`http://localhost:3001/pokemons?name=${input}`)).data
              return dispatch({
                type: "SUBMIT_SEARCH",
                payload: pokeName
            }) 
            
        } catch (error) {
          alert('Did not found a Pokemon with the indicated name!')  
        }

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

export function cleanCache(){
    return function(dispatch){
        return dispatch({
            type: "CLEAN_CACHE",
            payload: []

        })
    }
}
export function deletePokeBd(id){
    return async function (dispatch){
        try {
            let deleteP= await axios.delete(`http://localhost:3001/pokemons?id=${id}`)
            let all = await axios.get(`http://localhost:3001/pokemons`)
            if(deleteP){
                alert("Delete successfully!")
               return dispatch({
                type: "GET_POKEMONS",
                payload: all.data
               })
            }
        } catch (error) {
            alert("Can not delete!")
        }
    
    }
}

export function flagHome(payload){
    return function(dispatch){
    return dispatch({
        type: "FLAG_HOME",
        payload: payload
    })
}
}
export function flagCreate(payload){
    return function (dispatch){
    return dispatch({
        type: "FLAG_CREATE",
        payload: payload
    })
}
}
