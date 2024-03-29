# Welcome to flights service

## Project setup

- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- crate a .env file in the root directory and add the following environment variables
    -  `PORT= 3001`
-Inside the `src/config` folder create a new file  `config.json` and add the following piece of json

```
    {
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you have added your db config as listed above, go tp the src folder from your terminal and execute `npm sequelize db:create`
and then execute

- To create Airport table run ` npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer`

- And run `npx sequelize db:migrate` to connect with the database.

- To create a seeder run ` npx sequelize seed:generate --name add-airports`

-And run `npx sequelize db:seed:all` to seed the data

##DB Design
    - Airplane Table
    - Flight 
    - Airport
    - City 
 - A flight belongs to an airplane but one airplane can be used in multiple flights.
  - A city has many airports but one airport belongs to one city.
   - One airport can have many flights, but a flight belongs to one airport.

## Tables

### City -> id, name, crated_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City has many Airports and Airport belongs to one city (one to many )