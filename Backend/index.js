//git init
//npm init
//npm i nodemon concurrently -D
//npm i express cors json-server axios
const experss = require('express');
const cors = require('cors');
const router =require('./routes/index');


//create web server
const app= express();

app.use(cors());

app.use(router)

const PORT = 80;
app.listen(PORT, function(){
console.log('servier is running on http://localhost:80 ')

})
