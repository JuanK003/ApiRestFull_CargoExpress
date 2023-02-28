import db from "../database/db.js"
import { DataTypes } from "sequelize"

const RolModel = db.define('Rol', {
    Cargo: {type: DataTypes.STRING}
});

export default RolModel