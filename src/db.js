const {Pool} = require ("pg")

const {pool} = new Pool({

    user: "postgres",
    host: "localhost",
    database: "chamada",
    password: "wcc@2023",
    port: 5432
})

pool.connect()

.then(() => console.log ("PostGresSQL conectado!"))
.catch(err)(() => console.log ("Falha na conexão com o PostGresSQL", err)) 

pool.exports = pool 