const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/usedcar')

const Car = mongoose.model('Car',{
    id:String,
    name:String,
    kms:Number,
    model:Number,
    make:String,
    image:String,
    price:Number,
    fuel:String,
    owner:String,
    varient:String,
    transmission:String

})

module.exports={
    Car
}