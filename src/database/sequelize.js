import Sequelize from 'sequelize'
const sequelize = new Sequelize('rontend-news', 'sindong-gyu', '', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

sequelize.authenticate().then(() => {
    console.log('Connection has been established')
}).catch(err => console.error('Unadble to connect to the database:', err))


sequelize.sync({ force: false })

export default sequelize