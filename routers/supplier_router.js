const express = require('express');

const router = express.Router();

//middleware

// /api/suppliers/
router.get('/', (req, res) =>{
    res.json({suppliers:[
        'coffee roaster',
        'food vendor',
        'tea distributor'
    ]});
});

// ./api/suppliers/
router.post('/', (req, res) =>{
    const suppliers = req.body;
    res.status(201).json({created:suppliers});
});

// /api/supploers
router.delete('/:id', (req, res) =>{
   const id = req.params.id;
   res.json({deleted:id}) 
})


module.exports = router