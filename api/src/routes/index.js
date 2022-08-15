const { Router } = require('express');
const { getAllPokemon, getApiData } = require('../controllers/getAllPokemon');
const { Pokemon, Type } = require('../db.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get ('/', async (req, res)=>{
    const allpoke = await getApiData()
    res.send(allpoke)

})

router.post ('/', async (req, res) =>{
    const { name, hp, attack, defense, speed, weight, height, type, img} = req.body;
    const newPoke = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
        speed,
        weight,
        height,
        img
    })
    const types = await Type.findAll({ 
        where: { name: type}
     });
    newPoke.addType(types)
   
   
    res.send('Created Succesfully')
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
