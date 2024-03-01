const { Cityrepository }= require('../repository/index');

class cityService{
    constructor(){
        this.cityRepository=new Cityrepository();
    }
    async createCity(data){
        try{
            const city= await this.cityRepository.createCity(data);
            return city;
        }
        catch(err){
            console.log("something went wrong at service layer");
            throw(err);
        }
    }
    async deleteCity(cityId){
        try{
            const response= this.cityRepository.deleteCity(cityId);
            return response;
        }
        catch(err){
            console.log("something went wrong at service layer");
            throw(err);
        }
    }
    async updateCity(cityId,data){
        try{
            const city=await this.cityRepository.updateCity(cityId,data);
            return city;
        }
        catch(err){
            console.log("something went wrong at service layer");
            throw(err);
        }
    }
    async getCity(cityId){
        try{
            const city=await this.cityRepository.getCity(cityId);
            return city;
        }catch(err){
            console.log("something went wrong at service layer");
            throw(err);
        }
    }
}

module.exports = cityService;