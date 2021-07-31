const midd = require('../middlewares/midd.usuario')
const usuariosService = require('../services/usuarios.services')
const cors = require('cors')

//Exporto los modulos
module.exports = (app)=> {

  app.get('/', async (req, res) => {
    return res.status(200).json('ok')
  })  
  app.post('/login', midd.checkDatosLogin, async (req, res) => {
        let usuario = req.body
        console.log(usuario)
        try {
            let resultado = await usuariosService.chequearUsrValido(usuario)
            if (resultado) {
                let validacion = await usuariosService.generaToken(usuario)
                return res.json({token: validacion})
            }
        }catch (err){
            console.log(err)
            res.status(400).send('Usuario no registrado')
        }
    })

    app.get('/usuarios', midd.usuarioValido, async (req,res)=>{
        console.log(req.params)
        try {
            let resultado = await usuariosService.listaUsuarios()
            res.json(req.params)
        }catch (err){
            console.log(err)
            res.status(400).send('Ocurrio un error inesperado')
        }
    })

    app.post('/nuevousuario', midd.checkDatosAlta, async (req,res)=>{
      try {
          
            let resultado = usuariosService.crearUsuarios({...req.body})
            res.json(resultado)

        }catch(err){
            console.log(err)
            res.status(400).send('Ocurrio un error inesperado')  
        }
    })
}

