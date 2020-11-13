const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rutasClientes = require('./rutas/cliente')
const rutasFacturas = require('./rutas/factura')
const rutasProductos = require('./rutas/producto')

require('./baseDeDatos')

app.use(bodyParser.json())

app.use('/api/clientes', rutasClientes)
app.use('/api/facturas', rutasFacturas)
app.use('/api/productos', rutasProductos)

app.listen(3000, () => {
  console.log('¡El servidor ha sido encendido!')
})
