const express = require('express')
const cors = require('cors')
const logic = require('./services/logic')
const server = express()
server.use(cors({
    origin:"http://localhost:3000"
}))
// to understand json and convert it into js
server.use(express.json())

server.listen(8000,()=>{
    console.log("Used Cars server started at port number 8000");
})

// get all employee api call
server.get('/get-all-cars',(req,res)=>{
    logic.allCars().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// get a particular car api call
server.get('/get-a-car/:id',(req,res)=>{
    logic.getACar(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// add car api call
server.post('/add-car',(req,res)=>{
    logic.addCar(req.body.id,req.body.carName,req.body.carKms,req.body.carModel,req.body.carMake,req.body.carImage,req.body.carPrice,req.body.carFuel,req.body.carOwner,req.body.carVarient,req.body.carTrans)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// delete a car api call
server.delete('/delete-car/:id',(req,res)=>{
    logic.deleteCar(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// update car details
server.post('/update-car',(req,res)=>{
    logic.editCar(req.body.id,req.body.carName,req.body.carKms,req.body.carModel,req.body.carMake,req.body.carImage,req.body.carPrice,req.body.carFuel,req.body.carOwner,req.body.carVarient,req.body.carTrans)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})