const express = require('express')
const app = express()
const port = 3000
// Get the client

const cors = require('cors')
const session = require('express-session')
const md5 = require('md5')
const bcrypt = require('bcrypt');
const login = require('./login');
const registro = require('./registro');
const { obtenerUsuarios, eliminarUsuario } = require('./usuario');
const validar = require('./validar');
const saltRounds = 10;
const myPlaintextPassword ='s0/\/\P4$$w0rD';

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
app.use(session({
  secret: process.env.SECRETSESSION || 'ljffflfffljffl',
  proxy: process.env.NODE_ENV === 'production',
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'none'
  },
}))

app.get('/', (req, res) => {
  res.send('Bienvenido Humanoide!')
})
app.get('/login', login)

app.get('/registro', registro)

app.get('/usuarios', obtenerUsuarios )

app.delete('/usuarios', eliminarUsuario)

app.get('/validar', validar)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})