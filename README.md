# CI_FSA_Demo

## API
If you would like to run locally make sure you have a PostgreSQL database with the name of ```ci_demo```


## Authentication 
| Endpoint | Description | Required In Body | Optional In Body |
| -------- | ----------- | --------------- | ----------| 
| POST /auth/register | Registers a new user in the database and returns a JWT | username, password |  email |
| POST /auth/login | Logs in a registered user and returns a JWT | username, password | n/a |


## Plants
| Endpoint | Description | Required In Header | Optional |
| -------- | ----------- | --------------- | ----- |
| GET /plants | Returns the user's plants | authorization: {JWT (json web token)} | n/a |


## Run the application
* `npm install`
* Open a terminal from the base folder and run ```npm run seed``` to create and seed the database 

### MacOS/Linux

* After seeding the tables run ```npm run start:dev``` to start the API

### Windows
* After seeding the tables run, `npm run start:server` to start the server process
* Open another terminal window and run `npm run build:watch` to start the webpack process

## Walkthrough
There are 5 steps to complete this project

Steps 2-4 will be done during class but the written steps will be provided in the solution repo.

Perform a global search for the term  STEP

Follow the instructions at each STEP
