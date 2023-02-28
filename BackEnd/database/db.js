import {Sequelize} from "sequelize"

const db = new Sequelize(
    'CargoExpress',
    'root',
    '',
    {
        host:'localhost',
        dialect:'mysql',
    }
);

export default db;