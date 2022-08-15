const axios = require ('axios');
const { Pokemon, Type } = require ('../db')



const auxCardPoke = (arrayPoke)=>{
    let result = arrayPoke.map(p => {
        return{
            id: p.id,
            name: p.name,
            img: p.sprites.other.dream_world.front_default,
            type: p.types.map((t)=>t.type.name) 
        }
    })
    return result;
}

const getAllPokemons = async ()=>{
    let pokeDb = (await Pokemon.findAll({
        include:{
            model: Type,
            attributes: ['name'],
            through: {
                attributes: [],
              },
        }
    })).map(p => p.dataValues)
    pokeDb.forEach( p => p.types = p.types.map(cur => cur.dataValues.name))
    let pokeListoBd = pokeDb.map(cur => {
        return{
            id: cur.id,
            name: cur.name,
            img: cur.img,
            type: cur.types
        }
    })
    
    
    const api40Pokemon = (await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40")).data.results;
    const urls = api40Pokemon.map(cur => cur.url)
    const promises = await Promise.all(urls.map(cur => axios.get(cur)))
    const limpPoke = promises.map(obj => obj.data)
    const readyPoke = auxCardPoke(limpPoke)
    if (pokeListoBd.length !== 0){
        const finalPokeResult = pokeListoBd.concat(readyPoke)
        return finalPokeResult;
    }else{
        return readyPoke;
    }
   
  };
 




module.exports ={
getAllPokemons,
auxCardPoke
}