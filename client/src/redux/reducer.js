const inicialState ={
    pokemons:[],
   // allPokemons:[],
}
function rootReducer( state = inicialState, action){
 switch (action.type){
    case "GET_POKEMONS":
        return{
            ...state,
            pokemons: action.payload,

        }
        default:
            return state
 }
}

export default rootReducer;