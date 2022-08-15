const { Router } = require('express');
const {  getAllPokemons } = require('../controllers/getAllPokemon');
const { getTypesApi } = require('../controllers/getAllTypes');
const { getById } = require('../controllers/getById');
const { getName } = require('../controllers/getName');
const { Pokemon, Type } = require('../db.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get ('/pokemons', async (req, res)=>{
    try {
        let {name} = req.query;
        if(name){
            res.json(await getName(name))
        }else{
            res.json(await getAllPokemons())
        }
    } catch (e) {
        res.status(400).json({msg: "Did not find a Pokemon with the indicated name", e})
    }
})

router.post ('/pokemons', async (req, res) =>{
    let { name, hp, attack, defense, speed, weight, height, type, img} = req.body;
    if(!img){
    let array =["https://assets.pokemon.com/assets/cms2/img/pokedex/full//135.png",
                "https://assets.pokemon.com/assets/cms2/img/pokedex/full//419.png",
                "https://assets.pokemon.com/assets/cms2/img/pokedex/full//492.png"]
        let random = Math.floor(Math.random()*3);
        img = array[random]
    }
    const newPoke = await Pokemon.create({
        name:name,
        hp:hp,
        attack: attack,
        defense: defense,
        speed: speed,
        weight: weight,
        height: height,
        img: img
    })
    console.log(newPoke)
    await newPoke.addTypes(type);
    let pokemon = (await Pokemon.findByPk(newPoke.id,{
       include: {
        model: Type,
        attributes: ["name"],
        through:{
            attributes:[],
        }
    }
})).dataValues;
pokemon.types=pokemon.types.map(cur=> cur.dataValues.name);
 res.json(pokemon) 
   
})

router.get ('/types', async (req,res)=>{
    try {
        res.json(await getTypesApi())
        
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
})


router.get('/pokemons/:id', async(req,res)=>{
    try {
        let { id }= req.params;
        if(id){
          res.json(await getById(id))
        }else {
            throw new Error('The id to search was not indicated')
        }
    } catch (e) {
        res.status(400).send({msg:e.message})
    }

})
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
