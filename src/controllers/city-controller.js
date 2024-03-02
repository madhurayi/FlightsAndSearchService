const {cityService}= require('../services/index');

const CityService = new cityService();
/**
 * Create- Post request 
 *  data -> req.body
 *  
 */
const create=async (req,res)=>{
    try{
        const city= await CityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message:"successfully created a city",
            err: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a city",
            err: error
        })
    }
}

//DELETE -> /city/:id
const destroy=async (req,res)=>{
    try{
        const response= await CityService.deleteCity(req.params.id)
        return res.status(201).json({
            data: response,
            success: true,
            message:"successfully deleted a city",
            err: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a city",
            err: error
        })
    } 
}

//GET-> /city/:id
const get=async (req,res)=>{
    try{
        const response= await CityService.getCity(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message:"successfully fetched a city",
            err: {}
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get a city",
            err: error
        })
    }
}

//Patch -> /city/:id ->req.body
const update=async (req,res)=>{
    try{
        const response= await CityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message:"successfully updated a city",
            err: {}
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update a city",
            err: error
        })
    }
}

const getAll=async(req,res)=>{
    try{
        //console.log(req.query);
        const cities=await CityService.getAllCities(req.query);
        return res.status(201).json({
            data: cities,
            success: true,
            message:"successfully fetched all cities",
            err: {} 
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            data:{},
            success: false,
            message: "Not able to get all data"
        })
    }
} 
module.exports ={
    create,
    destroy,
    get,
    update,
    getAll
}