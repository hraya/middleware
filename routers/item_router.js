const express = require('express');

const router = express.Router();


router.get('/', (req, res) =>{
    res.json({items:[
        {name:'coffee beans', s_id:1},
        {name:'more food vendor', s_id:1},
        {name:'tea ', s_id:2}
    ]});
});

router.post('/', (req, res) =>{
    const item = req.body;
    res.status(201).json({created:item});
});

router.delete('/', (req, res) =>{
   const id = req.params.id;
   res.json({deleted:id}) 
})

module.exports = router