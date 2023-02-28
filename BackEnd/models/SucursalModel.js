import db from "../database/db.js"
import { DataTypes } from "sequelize"

const SucursalModel = db.define('Sucursals', {
    Direccion: {type: DataTypes.STRING},
    Id: {type: DataTypes.INTEGER}
});

export default SucursalModel