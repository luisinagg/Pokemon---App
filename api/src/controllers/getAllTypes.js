const axios = require ('axios');
const { Type } = require('../db');

const getTypesApi = async()=>{
    try{
        const pokeTypes = await axios.get('https://pokeapi.co/api/v2/type')
        const types =pokeTypes.data.result.map(t => t.name);
        type.forEach((t)=>{
            Type.findOrCreate({
                where: {name: t}
            })
        })
        return types;
    } catch (e){
        throw new Error('Error get Types')
    }
};

const getTypeDb = async() =>{
    try{
        const pokeTypesBd = await Type.findAll();
        return pokeTypesBd
    }catch(e){
        throw new Error('Error get Types Db')
    }
};

module.exports ={
    getTypesApi,
    getTypeDb
}