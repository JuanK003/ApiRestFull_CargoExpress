import db from "../database/db.js"
import { DataTypes } from "sequelize"

const RolModel = db.define('Rols', {
    Cargo: {type: DataTypes.STRING}
});

export default RolModel