//importiamo express
const express = require('express');

//inizializziamo express come server
const app = express();
const port = 3000;

//importa il router delle pizze
const pizze = require('./routers/pizze.js');

//usa il router
app.use('/pizze', pizze,); //quindi andare su http://localhost:3000 e aggiungere /pizze

//esempio di middleware
app.use((req, res, next ) => {
    console.log('richiesta ricevuta per:', req.url)
    next;
})

app.listen(port, () => {
    console.log(`App listening port http://localhost:${port}`);
    //la porta di default di express è 3000
})