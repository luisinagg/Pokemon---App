const inicialState ={
   pokemons:[],
   allPokemons:[],
   types:[]
}

function rootReducer( state = inicialState, action){
 switch (action.type){
    case "GET_POKEMONS":
        return{
            ...state,
            pokemons: action.payload,
            allPokemons: action.payload

        }
    case "GET_TYPES":
        return{
            ...state,
            types: action.payload

        }
    case "ORDER_BY_TYPES":
        let allP= [...state.allPokemons];
        let typeFiltered =
        action.payload === 'All'
        ? state.allPokemons
        : allP.filter((p)=>{
            return p.type.includes(action.payload)
        })
        return{
            ...state,
            pokemons: typeFiltered,
        }
    case "ORDER_A_Z":
        let all = [...state.allPokemons];
        return{
            ...state,
            pokemons: action.payload === 'A-Z' ? all.sort((a,b)=>{
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1;
                }
                if( b.name.toLowerCase()> a.name.toLowerCase()){
                    return-1;
                }
                return 0
            }): action.payload === 'Z-A' ? all.sort((a,b) =>{
                if( a.name.toLowerCase() > b.name.toLowerCase()){
                    return -1;
               }
               if( a.name.toLowerCase() > b.name.toLowerCase()){
                return 1;
               }
               return 0;

            }): state.allPokemons
        }
    case "ORDER_ATTACK":
        
        let att = [... state.allPokemons]
          return{
            ...state,
            pokemons: action.payload === 'Asc'? att.sort((a,b)=>{
                if ( a.attack > b.attack){
                    return 1;
                }
                if( b.attack > a.attack){
                    return -1
                }
                return 0
            }) : action.payload === "Desc" ? att.sort( (a,b) =>{
                if ( a.attack > b.attack){
                    return -1;
                }
                if( b.attack > a.attack){
                    return 1
                }
                return 0
            }) : state.allPokemons
        }
    case "SUBMIT_SEARCH":
        return{
            ...state,
            pokemons: action.payload
        }
    case "CREATE_POKEMON":
        return{
            ...state,
            pokemons: [...state.pokemons, action.payload]
        }
    case "ORDER_BY_EXISTENT":
        let aux = [...state.allPokemons]
        return{
            ...state,
            pokemons: action.payload === "created"? aux.filter(cur=> isNaN(cur.id)): action.payload === "existent" ? aux.filter(cur => !isNaN(cur.id)) : state.allPokemons
        }
        default:
            return state
 }
}



export default rootReducer;