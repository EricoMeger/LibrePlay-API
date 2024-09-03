import { Sequelize } from "sequelize";

const host = 'mysql'
const username = process.env.DATABASE_USER
const password = process.env.DATABASE_PASSWORD
const database = process.env.DATABASE_NAME
const port = 3306

const connection: any = {
    dialect: 'mysql',
    host: host,
    username: username,
    password: password,
    database: database,
    port : port,
    define: {
        underscored: true,
        freezeTableName: true,
        timestamps: false
    }
}

const sequelize = new Sequelize(connection)

export default sequelize