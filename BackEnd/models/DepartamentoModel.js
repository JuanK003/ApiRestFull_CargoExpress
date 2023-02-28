import db from "../database/db.js"
import { DataTypes } from "sequelize"

const DepartamentoModel = db.define('Departamentos', {
    departamento: {type: DataTypes.STRING}
});

export default DepartamentoModel