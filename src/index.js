const express=require('express');
const bodyParser=require('body-parser');

const { PORT } = require('./config/serverConfig');
const ApiRoutes= require('./routes/index');

//const CityRepository = require('./repository/city-repository');

const setupAndStartServer= async()=>{
   
    //create teh express object
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',ApiRoutes);
     
    app.listen(PORT,async ()=>{
        console.log(`server started at ${PORT}`);  
        //const repo=new CityRepository();
        //repo.createCity({name: "New Delhi"});

        //console.log(process.env);
    });

}

setupAndStartServer();