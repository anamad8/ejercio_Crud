const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')

const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
     host: 'localhost',
    port: 3306,
    user: 'admin',
    password: 'root',
    database: 'database'
 }

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Bienvenido a mi API')
})
app.use('/api', routes)

// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('servidor ejecutándose en el puerto', app.get('port'))
})