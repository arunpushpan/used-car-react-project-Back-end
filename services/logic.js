const db = require('./db')

// get all employee
const allCars = ()=>{
    return db.Car.find().then((result)=>{
        if(result){
            return {
                statusCode:200,
                cars:result
            }
        }
        else{
            return {
                statusCode:404,
                message:"No data is available"
            }
        }
    })
}

// get a particular car details
const getACar = (id)=>{
    return db.Car.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                car:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"No data is available"
            }
        }
    })
}

// add car
const addCar =( id,
    name,
    kms,
    model,
    make,
    image,
    price,
    fuel,
    owner,
    varient,
    transmission)=>{
    return db.Car.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:401,
                message:"Car Already Exist!"
            }
        }
        else{
            const newCar = new db.Car({
                id,
    name,
    kms,
    model,
    make,
    image,
    price,
    fuel,
    owner,
    varient,
    transmission
            })
            newCar.save()
            return{
                statusCode:200,
                message:"New Car Added Successfully..."
            }
        }
    })
}

// Delete a particular employee
const deleteCar = (id)=>{
    return db.Car.deleteOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:"Car Removed Successfully..."
            }
        }
        else{
            return{
                statusCode:404,
                message:"No data is available"
            }
        }
    })
}

// update car
const editCar =(id,
    name,
    kms,
    model,
    make,
    image,
    price,
    fuel,
    owner,
    varient,
    transmission)=>{
    return db.Car.findOne({id}).then((result)=>{
        if(result){
           result.id= id,
           result.name=name,
           result.kms=kms,
           result.model=model,
           result.make=make,
           result.image=image,
           result.price=price,
           result.fuel=fuel,
           result.owner=owner,
           result.varient=varient,
           result.transmission=transmission
            result.save()
            return{
                statusCode:200,
                message:"Data Updated Successfully"
            }
        }
        else{
            return{
                statusCode:404,
                message:"No data is available"
            }
        }
    })
    }

module.exports={
    allCars,
    getACar,
    addCar,
    deleteCar,
    editCar
    
}