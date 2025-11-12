//importiamo express
const express = requrie('express');

//inizializializziamo express come server
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('helloworld');
});
app.listen(port, () => {
    console.log(`App listening port ${port}`);
})