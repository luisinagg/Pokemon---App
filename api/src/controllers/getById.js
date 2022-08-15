const axios = require('axios');
const { Pokemon, Type }= require('../db')

function EstractorInfoPokemonToda (dataPoke){
    return{
        name: dataPoke.name,
        img: dataPoke.sprites.other.dream_world.front_default,
        type: dataPoke.types.map(cur => cur.type.name),
        id: dataPoke.id,
        hp: dataPoke.stats[0].base_stat,
        attak: dataPoke.stats[1].base_stat,
        defense: dataPoke.stats[2].base_stat,
        speed: dataPoke.stats[5].base_stat,
        height: dataPoke.height,
        weight: dataPoke.weight,
    }
};

const getById = async (id)=>{
    if(id.includes("-")){
        let pokeDb = (await Pokemon.findByPk(id,{
            include:{
                model: Type,
                attributes:["name"],
                through:{
                    attributes:[],
                }
            }
        })).dataValues;
       let result = {
           id:pokeDb.id,
           name: pokeDb.name,
           img: pokeDb.img,
           hp: pokeDb.hp,
           attack: pokeDb.attack,
           defense: pokeDb.defense,
           speed: pokeDb.speed,
           height: pokeDb.height,
           weight: pokeDb.weight,
           type: pokeDb.types.map(t => t.dataValues.name)     
       }
       return result;
    }else {
        try{
            const {data}= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            let info = EstractorInfoPokemonToda(data)
                return info; 
        }catch(e){
            throw new Error('Did not found Pokemon whith the indicated id')
        }
    }

}
module.exports={
    getById
}