const express = require('express')
const enrutador = express.Router()
const controladorproducto = require('../controladores/producto')
const {middleAuthorization} = require('../utilidades/autenticacion')


enrutador.get('/list',controladorproducto.list)
enrutador.post('/create',middleAuthorization,controladorproducto.create)
enrutador.get('/find/:id',controladorproducto.find)
enrutador.put('/update/:id',middleAuthorization,controladorproducto.update)
enrutador.delete('/delete/:id',middleAuthorization,controladorproducto.delete)
//enrutador.post('/autenticacion',controladorproducto.autenticacion)

module.exports = enrutador