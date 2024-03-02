const {Op} = require('sequelize');
const { City }=require('../models/index');

class CityRepository {
    
     async createCity({name}){
        try{
                const city= await City.create({name});
                return city;
        }catch(error){
                throw {error};
        }
    }
    async updateCity(cityId,data){
        try{
            //The below approach also works but will not return updated object
            // If we are using PG then returning: tru can be used, else not 
            
            // const city=await City.update(data,{
            //     where: {
            //         id: cityId
            //     }
            // });

            //for getting updated data in mysql we use the below approach
            const city=await city.findByPk(cityId);
            city.name=data.name;
            await city.save();
            return city;
        }catch(error){
            throw {error};
        }
    }
    async getCity(cityId){
        try{
            const city=await City.findByPk(cityId);
            return city;
        }catch(error){
            throw {error};
    }
    }
    async deleteCity(cityId){
        try{
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        }catch({error}){
            throw {error};
        }
    }
    async getAllCities(filter){ 
        //filter can be empty also
        //if filter is empty then we can return all of the cities.
        console.log(filter.name);
        try{
            if(filter.name){
                const cities=await City.findAll({
                    where: {
                        name : {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                console.log(cities);
                return cities;
                
            }
            const cities=await City.findAll();
            return cities;
        }catch({error}){
            console.log("Something wrong in the repository layer");
            throw {error};
        }
    }

}

module.exports=CityRepository;