import express from "express"
import cors from 'cors'
import db from "./DataBase/db.js"
import departamentosRoutes from './routes/routeDepartamento.js'
//import rolesRoutes from './Routes/routeRol.js'
//import empleadoRoutes from './Routes/routeEmpleado.js'
//import productoRoutes from './Routes/routeProducto.js'
//import ventaRoutes from './Routes/routeVenta.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/departamento', departamentosRoutes)
//app.use('/roles', rolesRoutes)
//app.use('/empleados', empleadoRoutes)
//app.use('/productos', productoRoutes)
//app.use('/ventas', ventaRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})