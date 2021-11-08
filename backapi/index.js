const express = require('express');
const conectDB = require('./config/db');
const cors = require('cors')

const app = express();

conectDB();
app.use(cors());

app.use(express.json());

app.use('/api/usuarios', require('./routes/usuario'))
app.use('/api/post', require('./routes/post'))


app.listen(3001, () =>{
    console.log('Funcionando!')
})
