import db from "../database/db.js"
import { DataTypes } from "sequelize"

const MunicipioModel = db.define('Municipios', {
    municipio: {type: DataTypes.STRING},
    Id: {type: DataTypes.INTEGER}
});

export default MunicipioModel