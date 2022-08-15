const axios = require ('axios');
const { Pokemon } = require('../models/Pokemon')
const {Type} = require ('../models/Type')


const getApiData = async ()=>{
    //hago primer pedido q me va a traer los  array con urls
    const first20Pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon');
    //al array first le hago un next para traerme 20 mas
    const nextPokemon = await axios.get(first20Pokemon.data.next);
    //concateno los arrays de 40 pokemons
    const allPokemons = [
        ...first20Pokemon.data.results,
        ...nextPokemon.data.results
    ]
    //promise.all para el mapeo del array p/q me retorne los pokemons cuando esten resueltas todas las promesas
    const promisePoke = await Promise.all(
        allPokemons.map( async (cur) => {
            const pokemon = await axios (cur.url)
            return{
                id: pokemon.data.id,
                name: pokemon.data.name,
                hp: pokemon.data.stats[0].base_stat,
                attack: pokemon.data.stats[1].base_stat,
                defense: pokemon.data.stats[2].base_stat,
                speed: pokemon.data.stats[5].base_stat,
                height: pokemon.data.height,
                weight: pokemon.data.weight,
                img: pokemon.data.sprites.other.dream_world.front_default,
                type: pokemon.data.types.map((t)=>t.type.name)
            }
        })
    )
    return promisePoke;
};

const getDBdata = async ()=>{
    try {
        const pokemonBd = await Pokemon.findAll({
            include:{
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: [],
                  },
            }
        })
        const bDdata = pokemonBd.map((p)=>{
            return{
                name: p.name,
                hp: p.hp,
                attack: p.attack,
                defense: p.defense,
                img: p.img,
                speed: p.speed,
                height: p.height,
                weight: p.weight,
                type: p.types?.map(t=>t.name)
            }
        })
        return bDdata
    }catch (error){
        console.log(error)
    }
}

//func donde uno la info de la api y bd
const getAllPokemon = async () =>{
    
        const bdData = await getDBdata();
        const apiData = await getApiData();
        const concat = [...bdData, ...apiData]
        return concat

    }



module.exports ={
getAllPokemon,
getApiData
}