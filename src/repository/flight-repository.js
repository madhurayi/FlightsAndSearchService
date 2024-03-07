const {Flights} = require('../models/index');
const {Op} = require('sequelize');

class FlightRepository{

    //# represents private member function
    #createFiler(data){
        let filter={};
        if(data.arrivalAirpotyid){
            filter.arrivalAirportid=data.arrivalAirportid;
        }
        if(data.departureAirportId){
            filter.departureAirportId=data.departureAirportId;
        }
        if(data.minPrice && data.maxPrice){
            Object.assign(filter, {
                [Op.and]: [
                    {price:{[Op.gte]:data.minPrice}},
                    {price:{[Op.lte]:data.maxPrice}}
                ] 
            }) 
        }
        if(data.minPrice && !data.maxPrice){
            Object.assign(filter,{price:{[Op.gte]:data.minPrice}});
        }
        if(data.maxPrice && !data.minPrice){
            Object.assign(filter,{price:{[Op.lte]:data.maxPrice}});
        }
        console.log(filter);
        return filter;
    }
    async createFlight(data){
        try{
            const flight= await Flights.create(data);
            return flight;
        }catch(err){
              console.log("something went wrong in the repository layer"); 
              throw {err}; 
        }
    }
    async getFlight(flightid){
        try{
            const flight = await Flights.findByPk(flightid);
            return flight;
        }catch(error){
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }
    async getAllFlights(filter){
        try{
            const filterObject = this.#createFiler(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
        }catch(error){
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }
    async updateFlights(flightId,data){
        try{
            await Flights.update(data,{
                where: {
                    id: flightId
                } 
            });
            return true;
        }catch(error){
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }
}


module.exports = FlightRepository;