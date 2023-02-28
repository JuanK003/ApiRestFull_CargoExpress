import db from "../database/db.js"
import { DataTypes } from "sequelize"

const SucursalModel = db.define('Sucursal', {
    Direccion: {type: DataTypes.STRING},
    IdMunicipio: {type: DataTypes.INTEGER}
});

export default SucursalModel