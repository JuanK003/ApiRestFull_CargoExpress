import db from "../database/db.js"
import { DataTypes } from "sequelize"

const UsuarioModel = db.define('Usuarios', {
   Nombres: {type: DataTypes.STRING},
   Apellidos: {type: DataTypes.STRING},
   Telefono: {type: DataTypes.STRING},
   Direccion: {type: DataTypes.STRING},
   email: {type: DataTypes.STRING},
   Id: {type: DataTypes.INTEGER},
   CUI: {type: DataTypes.STRING},
   Id: {type: DataTypes.INTEGER}
});

export default UsuarioModel