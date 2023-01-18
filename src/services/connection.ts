import { Dialect, Sequelize } from 'sequelize'

const DB_NAME = process.env.DB_NAME as string
const DB_USER = process.env.DB_USER as string
const DB_HOST = process.env.DB_HOST
const DB_DIALECT = process.env.DB_DIALECT as Dialect
const DB_PASSWORD = process.env.DB_PASSWORD

const sequelizeConnection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT
})

export default sequelizeConnection