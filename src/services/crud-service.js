class CrudService{
    constructor(repository){
        this.repository=repository
    }
    async create(data){
        try{
            console.log("data");
            const response= await this.repository.create(data);
            console.log("print");
            return response;
        }catch(error){
            console.log("something went wrong in crud service");
        }
    }
    async destroy(id){
        try{
            const response=await this.repository.destroy(id);
            return response;
        }catch(error){
            console.log("something went wrong in crud service");
        }
    }
    async get(id){
        try{
            const response=await this.repository.get(id);
            return response;
        }catch(error){
            console.log("something went wrong in crud service");
        }
    }
    async getAll(){
        try{
            const response=await this.repository.getAll(id);
            return response;
        }catch(error){
            console.log("something went wrong in crud service");
        }
    }
    async update(id,data){
        try{
            const response=await this.repository.update(id,data);
            return response;
        }catch(error){
            console.log("something went wrong in crud service");
        }
    }
}

module.exports = CrudService;