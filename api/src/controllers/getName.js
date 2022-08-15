const axios = require ('axios')
const {Pokemon, Type} = require('../db')
const { auxCardPoke } = require('./getAllPokemon')


const getName = async (name)=>{
 let nameBd = await Pokemon.findAll({
    where: {
        name: name
    },
    include:{
        model: Type,
        attrubutes: ['name'],
        through: {
            attrubutes:[]
        }
    }
 })
 let nameBdS = (nameBd.map(n => n.dataValues))
 nameBdS.forEach(obj => obj.types = obj.types.map(o => o.name))
 let cardDb = nameBdS. map (c => {
    return {
        id : c.id,
        name: c.name,
        img: c.img,
        type: c.types
    }
 })
 if(cardDb.length !== 0){
    return cardDb
 }else{
     let nameApi = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data;
     let arr = [nameApi]
     let nameApiCard = auxCardPoke(arr)
     return nameApiCard
    } 
 }




module.exports={
    getName
}