const express = require('express')
const enrutador = express.Router()
const controladorFactura = require('../controladores/factura')
const {middleAuthorization} = require('../utilidades/autenticacion')


enrutador.get('/list',middleAuthorization,controladorFactura.list)
enrutador.post('/create',controladorFactura.create)
enrutador.get('/find/:id',middleAuthorization,controladorFactura.find)
enrutador.put('/update/:id',middleAuthorization,controladorFactura.update)
enrutador.delete('/delete/:id',middleAuthorization,controladorFactura.delete)
//enrutador.post('/autenticacion',controladorfactura.autenticacion)


module.exports = enrutador