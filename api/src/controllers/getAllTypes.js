const axios = require ('axios');
const { Type } = require('../db');

const getTypesApi = async()=>{
    try{
        const pokeTypes = await axios.get('https://pokeapi.co/api/v2/type')
        const types =pokeTypes.data.results.map(t => t.name);
        types.forEach((t)=>{
            Type.findOrCreate({
                where: {name: t}
            })
        })
        console.log("getType")
        return types;
        
    } catch (e){
        throw new Error('Error get Types')
    }
};

getTypesApi ();
//dejo la fun invocada para q cuando levante el servidor ya me traiga los tipos

module.exports ={
    getTypesApi,
    
}