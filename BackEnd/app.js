import express from "express"
import cors from 'cors'
import db from "./DataBase/db.js"
import departamentosRoutes from './routes/routeDepartamento.js'
import muniRoutes from './routes/routeMunicipio.js'
import rolRoutes from './routes/routeRol.js'
import sucursalRoutes from './routes/routeSucursal.js'
import usuarioRoutes from './routes/routeUsuarios.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/departamento', departamentosRoutes)
app.use('/municipio', muniRoutes)
app.use('/rol', rolRoutes)
app.use('/sucursal', sucursalRoutes)
app.use('/usuario', usuarioRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})