const {FlightService} = require('../services/index');

const flightService= new FlightService();

const create =async (req,res)=>{
    try{
        let flightRequestData={
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportid: req.body.arrivalAirportid,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight= await flightService.createFlight(flightRequestData);
        return res.status(200).json({
            data: flight,
            success: true,
            message: "successfully created a flight",
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a flight",
            err: error
        })
    }
}
const getAll = async (req,res)=>{
    try{
        const flight= await flightService.getAllFlightData(req.body);
        return res.status(200).json({
            data: flight,
            success: true,
            message: "successfully created a flight",
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch the flights",
            err: error
        })
    }
}
module.exports = {
    create,
    getAll
}