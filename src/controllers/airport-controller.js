const {AirportService} = require('../services/index');
 
const airportService =new AirportService();

const create= async (req,res)=>{
    try{
        const response= await airportService.create(req.body);
        return res.status(200).json({
            data: response,
            success:true,
            message: "successfully created the Airport",
            err:{}
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            err:{},
            message: "Cannot create a new Airport"
        })
    }
}

module.exports={
    create
}