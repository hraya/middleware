// console.log('code is really running')
//create an express server
// an endpoint  for GET at \
// listen

const express = require('express'); 
const helmet = require('helmet')
const morgan = require('morgan')

// const customMW = require('./custom_middleware.js')
const supplierRouter = require('./routers/supplier_router.js')
const itemRouter = require('./routers/item_router.js')



const server = express();
const PORT = process.env.PORT || 4000;

//middleware
//1)built in
//2) 3rd party library
//3)custom


//One way to write it
// server.use(express.json());
// server.use(helmet());
// server.use(morgan('dev'))

//also a way to write it
server.use(
    express.json(),
    morgan('tiny'),
    helmet(),
    // customMW.gatekeeper
);

server.use('/api/suppliers', supplierRouter);
server.use('/api/items', itemRouter);

server.get('/', (req, res) =>{
    res.send("we are live")
})
//2 resources : suppliers, items

// server.get('/api/suppliers', (req, res) =>{
//     res.json({suppliers:[
//         'coffee roaster',
//         'food vendor',
//         'tea distributor'
//     ]});
// });

// server.post('/api/suppliers', (req, res) =>{
//     const suppliers = req.body;
//     res.status(201).json({created:suppliers});
// });

// server.delete('/api/suppliers', (req, res) =>{
//    const id = req.params.id;
//    res.json({deleted:id}) 
// })


// server.get('/api/items', (req, res) =>{
//     res.json({items:[
//         'coffee beans',
//         ' more food vendor',
//         'tea '
//     ]});
// });

// server.post('/api/items', (req, res) =>{
//     const item = req.body;
//     res.status(201).json({created:item});
// });

// server.delete('/api/items', (req, res) =>{
//    const id = req.params.id;
//    res.json({deleted:id}) 
// })


server.listen (PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})



//custom middleware
// server.use((req, res, next)=>{
//     const pass = req.query.pass;
//     if (pass === 'ferret'){
//         next();
//     }else {
//         res.status(400).json({
//             message:'invalid password'
//         })
//     }
// })
// server.get('/entrance', (req,res) =>{
//     res.json({message:"YES recieved"})
// })