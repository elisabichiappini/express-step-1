//importiamo express
const express = require('express');

//inizializziamo express come server
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('helloworld');
});
app.listen(port, () => {
    console.log(`App listening port http://localhost:${port}`);
    //la porta di default di express è 3000
})