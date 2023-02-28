import db from "../database/db.js"
import { DataTypes } from "sequelize"

const MunicipioModel = db.define('Municipio', {
    municipio: {type: DataTypes.STRING},
    IdDepartamento: {type: DataTypes.INTEGER}
});

export default MunicipioModel