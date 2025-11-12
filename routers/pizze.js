const express = require('express');
const router = express.Router();
 
//index
router.get('/', (req, res) => {
    res.send('lista delle pizze')
});

//show
router.get('/:id', (req, res) => {
    res.send('pizza specifica' + ' ' + req.params.id)
});

//store
router.post('/', (req, res) => {
    res.send('creazione nuova pizza');
})

module.exports = router;